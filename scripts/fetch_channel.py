#!/usr/bin/env python3
"""Fetch captions and metadata for every @tessl-ai upload. No video files.

Uses the public Android Innertube player API through HTTP proxies, because this
network is blocked from YouTube's player API directly. English manual captions
are preferred. Nothing is invented when a video has no caption track.
"""

from __future__ import annotations

import json
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
VIDEOS = DATA / "videos"
PLAYLIST = DATA / "channel-playlist.tsv"
CATALOG = DATA / "catalog.json"
PROXIES = [
    "http://102.244.78.61:8080",
    "http://144.31.146.10:8080",
    "http://156.240.114.210:3129",
]
INNERTUBE = (
    "https://www.youtube.com/youtubei/v1/player"
    "?key=AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w&prettyPrint=false"
)
USER_AGENT = "Mozilla/5.0"


def http_json(url: str, payload: dict | None, proxy: str | None, timeout: int = 30) -> dict:
    data = None if payload is None else json.dumps(payload).encode()
    headers = {"User-Agent": USER_AGENT, "Accept": "application/json"}
    if payload is not None:
        headers["Content-Type"] = "application/json"
    request = urllib.request.Request(url, data=data, headers=headers)
    handlers = []
    if proxy:
        handlers.append(urllib.request.ProxyHandler({"http": proxy, "https": proxy}))
    opener = urllib.request.build_opener(*handlers)
    with opener.open(request, timeout=timeout) as response:
        return json.loads(response.read().decode("utf-8"))


def player(video_id: str, proxy: str) -> dict:
    payload = {
        "context": {
            "client": {
                "clientName": "ANDROID",
                "clientVersion": "20.10.38",
                "androidSdkVersion": 30,
                "hl": "en",
                "gl": "US",
            }
        },
        "videoId": video_id,
        "contentCheckOk": True,
        "racyCheckOk": True,
    }
    return http_json(INNERTUBE, payload, proxy, timeout=30)


def choose_track(tracks: list[dict]) -> dict | None:
    def rank(track: dict) -> tuple:
        lang = track.get("languageCode") or ""
        kind = track.get("kind") or ""
        if lang in {"en-US", "en"} and kind != "asr":
            return (0, lang)
        if lang.startswith("en") and kind != "asr":
            return (1, lang)
        if lang.startswith("en"):
            return (2, lang)
        if lang.startswith("zh"):
            return (3, lang)
        return (9, lang)

    if not tracks:
        return None
    return sorted(tracks, key=rank)[0]


def json3_url(base_url: str) -> str:
    parts = urllib.parse.urlparse(base_url)
    query = urllib.parse.parse_qs(parts.query)
    query["fmt"] = ["json3"]
    flat = urllib.parse.urlencode({key: values[0] for key, values in query.items()})
    return urllib.parse.urlunparse(parts._replace(query=flat))


def cues_from_json3(payload: dict) -> list[dict]:
    cues = []
    for event in payload.get("events") or []:
        text = "".join(segment.get("utf8", "") for segment in (event.get("segs") or []))
        text = " ".join(text.split()).strip()
        if not text or text == "\n":
            continue
        start = event.get("tStartMs", 0) / 1000
        duration = event.get("dDurationMs", 0) / 1000
        cues.append({"start": start, "end": start + duration, "text": text})
    return cues


def format_timestamp(seconds: float) -> str:
    if seconds < 0:
        seconds = 0
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = seconds % 60
    return f"{hours:02d}:{minutes:02d}:{secs:06.3f}"


def write_tracks(folder: Path, cues: list[dict]) -> None:
    txt = [f"[{format_timestamp(cue['start'])}] {cue['text']}" for cue in cues]
    (folder / "original.txt").write_text("\n".join(txt) + "\n", encoding="utf-8")
    blocks = ["WEBVTT", ""]
    for index, cue in enumerate(cues, start=1):
        blocks.append(str(index))
        blocks.append(f"{format_timestamp(cue['start'])} --> {format_timestamp(cue['end'])}")
        blocks.append(cue["text"].replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))
        blocks.append("")
    (folder / "original.vtt").write_text("\n".join(blocks), encoding="utf-8")


def load_playlist() -> list[dict]:
    rows = []
    for line in PLAYLIST.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        video_id, duration, title = line.replace("\\t", "\t").split("\t", 2)
        rows.append({"id": video_id, "playlistDuration": int(float(duration or 0)), "playlistTitle": title})
    return rows


def already_done(video_id: str) -> bool:
    folder = VIDEOS / video_id
    if (folder / "original.txt").exists():
        return True
    marker = folder / "NO_CAPTIONS.txt"
    meta = folder / "metadata.json"
    return marker.exists() and meta.exists()


def fetch_one(item: dict, proxy: str) -> dict:
    video_id = item["id"]
    last_error = "unknown"
    for attempt in range(4):
        use = PROXIES[(PROXIES.index(proxy) + attempt) % len(PROXIES)] if proxy in PROXIES else PROXIES[attempt % len(PROXIES)]
        try:
            body = player(video_id, use)
            status = (body.get("playabilityStatus") or {}).get("status")
            if status != "OK":
                last_error = status or "not ok"
                time.sleep(0.6 * (attempt + 1))
                continue
            details = body.get("videoDetails") or {}
            micro = (body.get("microformat") or {}).get("playerMicroformatRenderer") or {}
            tracks = ((body.get("captions") or {}).get("playerCaptionsTracklistRenderer") or {}).get("captionTracks") or []
            track = choose_track(tracks)
            cues: list[dict] = []
            if track is not None:
                payload = None
                cap_error = "caption"
                for cap_proxy in (None, use):
                    try:
                        payload = http_json(json3_url(track["baseUrl"]), None, cap_proxy, timeout=40)
                        break
                    except Exception as error:  # noqa: BLE001
                        cap_error = str(error)
                if payload is None:
                    last_error = cap_error
                    time.sleep(0.4)
                    continue
                cues = cues_from_json3(payload)
            folder = VIDEOS / video_id
            folder.mkdir(parents=True, exist_ok=True)
            kind = None if track is None else track.get("kind")
            record = {
                "id": video_id,
                "title": details.get("title") or item["playlistTitle"],
                "description": details.get("shortDescription") or "",
                "duration": int(details.get("lengthSeconds") or item["playlistDuration"] or 0),
                "channel": details.get("author") or "AI Native Dev",
                "channelId": details.get("channelId") or "",
                "viewCount": str(details.get("viewCount") or ""),
                "uploadDate": (micro.get("publishDate") or micro.get("uploadDate") or None),
                "thumbnail": f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg",
                "webpageUrl": f"https://www.youtube.com/watch?v={video_id}",
                "captionStatus": "captioned" if cues else "no-captions",
                "captionSource": None if track is None else ("automatic" if kind == "asr" else "manual"),
                "originalLanguage": None if track is None else track.get("languageCode"),
                "cueCount": len(cues),
                "playlistTitle": item["playlistTitle"],
            }
            if cues:
                write_tracks(folder, cues)
            else:
                (folder / "NO_CAPTIONS.txt").write_text(
                    "這支影片沒有可用的英文字幕軌。沒有編造逐字稿。\n",
                    encoding="utf-8",
                )
            (folder / "metadata.json").write_text(
                json.dumps(record, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
            return record
        except Exception as error:  # noqa: BLE001
            last_error = f"{type(error).__name__}: {error}"
            time.sleep(0.5 * (attempt + 1))
    raise RuntimeError(f"{video_id}: {last_error}")


def write_catalog(records: list[dict]) -> None:
    existing = {}
    if CATALOG.exists():
        current = json.loads(CATALOG.read_text(encoding="utf-8"))
        for item in current.get("videos", []):
            existing[item["id"]] = item
    for record in records:
        existing[record["id"]] = {
            "id": record["id"],
            "title": record["title"],
            "titleZh": record.get("titleZh") or record["title"],
            "descriptionZh": record.get("descriptionZh") or "",
            "duration": record.get("duration") or 0,
            "channel": record.get("channel") or "",
            "thumbnail": record["thumbnail"],
            "webpageUrl": record["webpageUrl"],
            "captionStatus": record.get("captionStatus"),
            "captionSource": record.get("captionSource"),
            "cueCount": record.get("cueCount") or 0,
            "uploadDate": record.get("uploadDate"),
        }
    # Preserve a hand-tuned title for the first note when present.
    order = [row["id"] for row in load_playlist()]
    videos = [existing[video_id] for video_id in order if video_id in existing]
    catalog = {
        "channelUrl": "https://www.youtube.com/@tessl-ai",
        "channelName": "AI Native Dev",
        "note": "AI Native Dev 頻道的演講筆記。專有名詞保持英文。影片只嵌 YouTube，不下載影片檔。",
        "videos": videos,
    }
    CATALOG.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    rows = load_playlist()
    pending = [row for row in rows if not already_done(row["id"])]
    print(f"playlist {len(rows)} pending {len(pending)}", flush=True)
    done: list[dict] = []
    failed: list[str] = []
    workers = min(6, max(1, len(PROXIES) * 2))
    with ThreadPoolExecutor(max_workers=workers) as pool:
        futures = {}
        for index, item in enumerate(pending):
            proxy = PROXIES[index % len(PROXIES)]
            futures[pool.submit(fetch_one, item, proxy)] = item["id"]
        for count, future in enumerate(as_completed(futures), start=1):
            video_id = futures[future]
            try:
                record = future.result()
                done.append(record)
                print(
                    f"[{count}/{len(pending)}] {video_id} {record['captionStatus']} {record['cueCount']} {record['title'][:70]}",
                    flush=True,
                )
            except Exception as error:  # noqa: BLE001
                failed.append(f"{video_id}\t{error}")
                print(f"[{count}/{len(pending)}] FAIL {video_id} {error}", flush=True)
            if count % 20 == 0:
                write_catalog(done)
    write_catalog(done)
    if failed:
        (DATA / "fetch-failures.txt").write_text("\n".join(failed) + "\n", encoding="utf-8")
    print(f"finished ok {len(done)} failed {len(failed)}", flush=True)
    if failed:
        sys.exit(1)


if __name__ == "__main__":
    main()
