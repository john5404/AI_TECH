#!/usr/bin/env python3
"""Fetch one YouTube video's captions (no video file) and write zh-Hant text.

Tries, in order:
  1. yt-dlp --skip-download (subtitles and metadata only)
  2. The YouTube Innertube player API, directly or via --proxy / YT_HTTPS_PROXY

Translation uses Google's keyless gtx endpoint with tl=zh-TW (Traditional Chinese).
No API key is required. The script never invents a transcript when captions are missing.

A second, different video is refused once data/catalog.json already has an entry.
Pass --allow-another only after you mean to add one.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
VIDEOS = DATA / "videos"
CATALOG = DATA / "catalog.json"
CHANNEL_URL = "https://www.youtube.com/@tessl-ai"
INNERTUBE_KEY = "AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w"
USER_AGENT = "Mozilla/5.0"


def die(message: str, code: int = 1) -> None:
    print(message, file=sys.stderr)
    raise SystemExit(code)


def video_id_from(value: str) -> str:
    value = value.strip()
    if re.fullmatch(r"[\w-]{11}", value):
        return value
    parsed = urllib.parse.urlparse(value)
    if parsed.netloc.endswith("youtu.be"):
        ident = parsed.path.strip("/").split("/")[0]
        if re.fullmatch(r"[\w-]{11}", ident):
            return ident
    query = urllib.parse.parse_qs(parsed.query)
    if "v" in query and re.fullmatch(r"[\w-]{11}", query["v"][0]):
        return query["v"][0]
    die(f"無法辨識影片網址：{value}")
    return ""


def load_catalog() -> dict:
    if not CATALOG.exists():
        return {
            "channelUrl": CHANNEL_URL,
            "channelName": "AI Native Dev",
            "videos": [],
        }
    return json.loads(CATALOG.read_text(encoding="utf-8"))


def http_json(url: str, payload: dict | None = None, proxy: str | None = None, timeout: int = 40):
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
        body = response.read()
    return json.loads(body.decode("utf-8"))


def player_request(video_id: str, proxy: str | None) -> dict:
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
    url = (
        "https://www.youtube.com/youtubei/v1/player"
        f"?key={INNERTUBE_KEY}&prettyPrint=false"
    )
    return http_json(url, payload, proxy=proxy, timeout=30)


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
    query.pop("fmt", None)
    query["fmt"] = ["json3"]
    flat = urllib.parse.urlencode({key: values[0] for key, values in query.items()})
    return urllib.parse.urlunparse(parts._replace(query=flat))


def download_json3(base_url: str, proxy: str | None) -> dict:
    url = json3_url(base_url)
    last_error: Exception | None = None
    for candidate in (None, proxy):
        try:
            return http_json(url, proxy=candidate, timeout=40)
        except Exception as error:  # noqa: BLE001 - try the next path
            last_error = error
    raise RuntimeError(f"字幕軌下載失敗：{last_error}")


def cues_from_json3(payload: dict) -> list[dict]:
    cues = []
    for event in payload.get("events") or []:
        segments = event.get("segs") or []
        text = "".join(segment.get("utf8", "") for segment in segments)
        text = re.sub(r"\s+", " ", text).strip()
        if not text:
            continue
        start = event.get("tStartMs", 0) / 1000
        duration = event.get("dDurationMs", 0) / 1000
        cues.append({"start": start, "end": start + duration, "text": text})
    return cues


def fetch_with_ytdlp(video_id: str, work: Path) -> dict | None:
    binary = shutil.which("yt-dlp")
    command = [binary] if binary else [sys.executable, "-m", "yt_dlp"]
    if command[0] is None:
        return None
    work.mkdir(parents=True, exist_ok=True)
    output = str(work / video_id)
    proc = subprocess.run(
        [
            *command,
            "--skip-download",
            "--write-info-json",
            "--write-subs",
            "--write-auto-subs",
            "--sub-langs",
            "en-US,en,zh-Hant,zh-TW",
            "--convert-subs",
            "vtt",
            "--no-playlist",
            "-o",
            output,
            "--",
            video_id,
        ],
        capture_output=True,
        text=True,
        timeout=90,
    )
    info_path = work / f"{video_id}.info.json"
    if proc.returncode != 0 or not info_path.exists():
        print("yt-dlp 無法取得字幕，改走 player API。", file=sys.stderr)
        return None
    info = json.loads(info_path.read_text(encoding="utf-8"))
    subs = info.get("subtitles") or {}
    auto = info.get("automatic_captions") or {}
    requested = None
    source = "manual"
    for lang in ("en-US", "en"):
        if subs.get(lang):
            requested = subs[lang]
            source = "manual"
            break
    if requested is None:
        for lang in ("en-US", "en"):
            if auto.get(lang):
                requested = auto[lang]
                source = "automatic"
                break
    vtt_files = list(work.glob("*.vtt"))
    if not vtt_files:
        return None
    vtt_text = vtt_files[0].read_text(encoding="utf-8")
    return {
        "title": info.get("title") or video_id,
        "description": info.get("description") or "",
        "duration": int(info.get("duration") or 0),
        "channel": info.get("channel") or info.get("uploader") or "",
        "channelId": info.get("channel_id") or "",
        "viewCount": str(info.get("view_count") or ""),
        "uploadDate": info.get("upload_date"),
        "captionSource": source,
        "originalLanguage": (requested or [{}])[0].get("ext") if requested else "en",
        "vtt": vtt_text,
    }


def metadata_from_player(video_id: str, player: dict, track: dict | None) -> dict:
    details = player.get("videoDetails") or {}
    status = (player.get("playabilityStatus") or {}).get("status")
    if status != "OK":
        reason = (player.get("playabilityStatus") or {}).get("reason") or status
        raise RuntimeError(reason or "player 回應無法使用")
    kind = (track or {}).get("kind")
    return {
        "title": details.get("title") or video_id,
        "description": details.get("shortDescription") or "",
        "duration": int(details.get("lengthSeconds") or 0),
        "channel": details.get("author") or "",
        "channelId": details.get("channelId") or "",
        "viewCount": str(details.get("viewCount") or ""),
        "uploadDate": None,
        "captionSource": None if track is None else ("automatic" if kind == "asr" else "manual"),
        "originalLanguage": None if track is None else track.get("languageCode"),
        "track": track,
    }


def to_traditional(text: str) -> str:
    """Normalize mixed output to Traditional Chinese when OpenCC is installed."""
    try:
        import opencc
    except ImportError:
        return text
    return opencc.OpenCC("s2tw").convert(text)


def gtx(text: str) -> str:
    query = urllib.parse.urlencode(
        {"client": "gtx", "sl": "en", "tl": "zh-TW", "dt": "t", "q": text}
    )
    url = f"https://translate.googleapis.com/translate_a/single?{query}"
    last_error: Exception | None = None
    for attempt in range(5):
        try:
            payload = http_json(url, timeout=40)
            return "".join(part[0] for part in payload[0] if part and part[0])
        except Exception as error:  # noqa: BLE001
            last_error = error
            time.sleep(0.8 * (attempt + 1))
    raise RuntimeError(f"翻譯失敗：{last_error}")


def translate_lines(lines: list[str]) -> list[str]:
    if not lines:
        return []
    numbered = "\n".join(f"{index:04d} {line}" for index, line in enumerate(lines))
    translated = gtx(numbered)
    parsed: dict[int, str] = {}
    current: int | None = None
    buffer: list[str] = []

    def flush() -> None:
        if current is not None:
            parsed[current] = re.sub(r"\s+", " ", " ".join(buffer)).strip()

    for raw in translated.splitlines():
        match = re.match(r"^(\d{4})\s*(.*)$", raw.strip())
        if match:
            flush()
            current = int(match.group(1))
            buffer = [match.group(2)]
        elif current is not None and raw.strip():
            buffer.append(raw.strip())
    flush()
    if len(parsed) != len(lines) or any(not parsed.get(index) for index in range(len(lines))):
        raise ValueError("批次對不齊")
    return [parsed[index] for index in range(len(lines))]


def translate_all(lines: list[str]) -> list[str]:
    output: list[str] = []
    batch_size = 8
    index = 0
    while index < len(lines):
        batch = lines[index : index + batch_size]
        try:
            output.extend(translate_lines(batch))
        except Exception:
            print(f"第 {index + 1} 句改為逐句翻譯", file=sys.stderr)
            for line in batch:
                output.append(gtx(line).strip() or line)
                time.sleep(0.15)
        index += batch_size
        print(f"已翻譯 {min(index, len(lines))}/{len(lines)}", file=sys.stderr)
        time.sleep(0.12)
    return output


def format_timestamp(seconds: float, srt: bool = False) -> str:
    if seconds < 0:
        seconds = 0
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = seconds % 60
    stamp = f"{hours:02d}:{minutes:02d}:{secs:06.3f}"
    return stamp.replace(".", ",") if srt else stamp


def escape_vtt(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def write_vtt(path: Path, cues: list[dict], key: str) -> None:
    blocks = ["WEBVTT", ""]
    for index, cue in enumerate(cues, start=1):
        blocks.append(str(index))
        blocks.append(
            f"{format_timestamp(cue['start'])} --> {format_timestamp(cue['end'])}"
        )
        blocks.append(escape_vtt(cue[key]))
        blocks.append("")
    path.write_text("\n".join(blocks), encoding="utf-8")


def write_srt(path: Path, cues: list[dict], key: str) -> None:
    blocks = []
    for index, cue in enumerate(cues, start=1):
        blocks.append(str(index))
        blocks.append(
            f"{format_timestamp(cue['start'], srt=True)} --> {format_timestamp(cue['end'], srt=True)}"
        )
        blocks.append(cue[key])
        blocks.append("")
    path.write_text("\n".join(blocks), encoding="utf-8")


def write_txt(path: Path, cues: list[dict], key: str) -> None:
    lines = [
        f"[{format_timestamp(cue['start'])}] {cue[key]}"
        for cue in cues
    ]
    path.write_text("\n".join(lines) + "\n", encoding="utf-8")


def cues_from_vtt(text: str) -> list[dict]:
    cues = []
    pattern = re.compile(
        r"(\d{2}):(\d{2}):(\d{2})[.,](\d{3})\s+-->\s+(\d{2}):(\d{2}):(\d{2})[.,](\d{3})"
    )
    lines = text.replace("\r", "").split("\n")
    index = 0
    while index < len(lines):
        match = pattern.search(lines[index])
        if not match:
            index += 1
            continue
        groups = [int(part) for part in match.groups()]
        start = groups[0] * 3600 + groups[1] * 60 + groups[2] + groups[3] / 1000
        end = groups[4] * 3600 + groups[5] * 60 + groups[6] + groups[7] / 1000
        index += 1
        text_lines = []
        while index < len(lines) and lines[index].strip():
            text_lines.append(lines[index].strip())
            index += 1
        cue_text = re.sub(r"\s+", " ", " ".join(text_lines)).strip()
        if cue_text:
            cues.append({"start": start, "end": end, "text": cue_text})
    return cues


def fetch_player(video_id: str, proxies: list[str | None]) -> tuple[dict, str | None]:
    errors = []
    for proxy in proxies:
        label = proxy or "direct"
        try:
            player = player_request(video_id, proxy)
            status = (player.get("playabilityStatus") or {}).get("status")
            if status == "OK":
                print(f"player API 成功（{label}）", file=sys.stderr)
                return player, proxy
            errors.append(f"{label}: {status}")
        except Exception as error:  # noqa: BLE001
            errors.append(f"{label}: {error}")
    die("無法取得影片 metadata / 字幕軌。\n" + "\n".join(errors))
    return {}, None


def main() -> None:
    parser = argparse.ArgumentParser(description="把一支 YouTube 影片收成繁體中文文字檔")
    parser.add_argument("--video", required=True, help="影片網址或 11 碼 id")
    parser.add_argument("--proxy", default=os.environ.get("YT_HTTPS_PROXY", ""), help="可選 HTTP 代理")
    parser.add_argument("--allow-another", action="store_true", help="允許在已有影片之外再收一支")
    parser.add_argument("--timedtext-json", help="已下載的 json3 字幕，略過再次抓取字幕軌")
    args = parser.parse_args()

    video_id = video_id_from(args.video)
    catalog = load_catalog()
    existing = [item["id"] for item in catalog.get("videos", [])]
    if existing and video_id not in existing and not args.allow_another:
        die(
            "收藏裡已經有其他影片。確認要再收一支之前，請加上 --allow-another。\n"
            + "目前："
            + ", ".join(existing),
            code=2,
        )

    proxies: list[str | None] = [None]
    if args.proxy:
        proxies.extend(part.strip() for part in args.proxy.split(",") if part.strip())

    meta: dict
    cues: list[dict]
    if args.timedtext_json:
        payload = json.loads(Path(args.timedtext_json).read_text(encoding="utf-8"))
        cues = cues_from_json3(payload)
        player, proxy = fetch_player(video_id, proxies)
        track = choose_track(
            ((player.get("captions") or {}).get("playerCaptionsTracklistRenderer") or {}).get("captionTracks")
            or []
        )
        meta = metadata_from_player(video_id, player, track)
        if not cues:
            die("提供的字幕檔沒有任何句子。")
    else:
        ytdlp = fetch_with_ytdlp(video_id, Path("/tmp") / f"tessl-ingest-{video_id}")
        if ytdlp and ytdlp.get("vtt"):
            cues = cues_from_vtt(ytdlp["vtt"])
            meta = ytdlp
            meta["originalLanguage"] = "en"
        else:
            player, proxy = fetch_player(video_id, proxies)
            tracks = (
                (player.get("captions") or {}).get("playerCaptionsTracklistRenderer") or {}
            ).get("captionTracks") or []
            track = choose_track(tracks)
            meta = metadata_from_player(video_id, player, track)
            if track is None:
                cues = []
            else:
                payload = download_json3(track["baseUrl"], proxy)
                cues = cues_from_json3(payload)

    folder = VIDEOS / video_id
    folder.mkdir(parents=True, exist_ok=True)
    caption_status = "captioned" if cues else "no-captions"
    title_zh = to_traditional(gtx(meta["title"]).strip()) if meta.get("title") else ""
    description_zh = ""
    if meta.get("description"):
        description_zh = to_traditional(gtx(meta["description"]).strip())

    translated: list[str] = []
    if cues:
        print(f"開始翻譯 {len(cues)} 句", file=sys.stderr)
        translated = [to_traditional(text) for text in translate_all([cue["text"] for cue in cues])]
        for cue, text in zip(cues, translated):
            cue["zh"] = text
        write_vtt(folder / "original.vtt", cues, "text")
        write_txt(folder / "original.txt", cues, "text")
        write_vtt(folder / "zh-Hant.vtt", cues, "zh")
        write_srt(folder / "zh-Hant.srt", cues, "zh")
        write_txt(folder / "zh-Hant.txt", cues, "zh")
    else:
        notice = folder / "NO_CAPTIONS.zh-Hant.txt"
        notice.write_text(
            "這支影片沒有可用的官方或自動字幕。這裡沒有編造逐字稿。\n",
            encoding="utf-8",
        )

    record = {
        "id": video_id,
        "title": meta.get("title") or video_id,
        "titleZh": title_zh,
        "description": meta.get("description") or "",
        "descriptionZh": description_zh,
        "duration": meta.get("duration") or 0,
        "channel": meta.get("channel") or "",
        "channelId": meta.get("channelId") or "",
        "viewCount": meta.get("viewCount") or "",
        "uploadDate": meta.get("uploadDate"),
        "thumbnail": f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg",
        "webpageUrl": f"https://www.youtube.com/watch?v={video_id}",
        "captionStatus": caption_status,
        "captionSource": meta.get("captionSource"),
        "originalLanguage": meta.get("originalLanguage"),
        "cueCount": len(cues),
        "translation": None
        if not cues
        else {
            "engine": "google-translate-gtx",
            "source": "en",
            "target": "zh-Hant",
            "targetParam": "zh-TW",
            "keyless": True,
        },
    }
    (folder / "metadata.json").write_text(
        json.dumps(record, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    videos = [item for item in catalog.get("videos", []) if item["id"] != video_id]
    videos.append(
        {
            "id": record["id"],
            "title": record["title"],
            "titleZh": record["titleZh"],
            "descriptionZh": record["descriptionZh"],
            "duration": record["duration"],
            "channel": record["channel"],
            "thumbnail": record["thumbnail"],
            "webpageUrl": record["webpageUrl"],
            "captionStatus": record["captionStatus"],
            "captionSource": record["captionSource"],
            "cueCount": record["cueCount"],
        }
    )
    catalog["videos"] = videos
    catalog["channelUrl"] = CHANNEL_URL
    catalog["note"] = "示範收藏目前只收錄一支影片。確認前不要再收下一支。"
    DATA.mkdir(parents=True, exist_ok=True)
    CATALOG.write_text(json.dumps(catalog, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"完成 {video_id}：{caption_status}，{len(cues)} 句")


if __name__ == "__main__":
    main()
