#!/usr/bin/env python3
"""Build reading packs from English captions. Does not write notes or invent text."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VIDEOS = ROOT / "data" / "videos"
PLAYLIST = ROOT / "data" / "channel-playlist.tsv"
NOTES = ROOT / "content" / "notes"
OUT = Path("/tmp/note-packs")

CUE_RE = re.compile(r"^\[(\d+):(\d+):(\d+(?:\.\d+)?)\]\s*(.*)$")
STRUCT_RE = re.compile(
    r"\b(first|second|third|fourth|fifth|finally|the problem|the point|the question|"
    r"what i want|in summary|to summarize|the takeaway|we learned|the reason|"
    r"the result|we found|the idea|the difference|the goal|step one|step two|"
    r"number one|on the other hand|for example|the lesson|the catch|the risk|"
    r"the trade-?off|we built|the pattern|the principle|three things|two things|"
    r"let me|so what|the key|important|question is|i'll cover|agenda)\b",
    re.I,
)
NUMBER_RE = re.compile(r"\d")
FILLER_RE = re.compile(
    r"\[(?:music|applause|laughter|inaudible|noise)\]",
    re.I,
)


def playlist() -> list[dict]:
    rows = []
    for line in PLAYLIST.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        video_id, duration, title = line.split("\t", 2)
        rows.append({"id": video_id, "playlistDuration": int(float(duration or 0)), "playlistTitle": title})
    return rows


def parse_cues(text: str) -> list[tuple[float, str]]:
    cues = []
    for line in text.splitlines():
        match = CUE_RE.match(line.strip())
        if not match:
            continue
        hours, minutes, seconds, body = match.groups()
        start = int(hours) * 3600 + int(minutes) * 60 + float(seconds)
        body = FILLER_RE.sub(" ", body)
        body = body.replace(">>", " ")
        body = re.sub(r"\s+", " ", body).strip(" -")
        if body:
            cues.append((start, body))
    return cues


def sentences(cues: list[tuple[float, str]]) -> list[tuple[float, str]]:
    grouped: list[tuple[float, str]] = []
    buf: list[str] = []
    start: float | None = None
    for stamp, text in cues:
        if start is None:
            start = stamp
        buf.append(text)
        joined = " ".join(buf)
        words = joined.split()
        if re.search(r"[.?!][\"']?$", text) or len(words) >= 46:
            grouped.append((start, joined))
            buf = []
            start = None
    if buf and start is not None:
        grouped.append((start, " ".join(buf)))
    deduped: list[tuple[float, str]] = []
    for stamp, text in grouped:
        if deduped:
            previous = deduped[-1][1]
            if text in previous or previous in text:
                if len(text) > len(previous):
                    deduped[-1] = (stamp, text)
                continue
        deduped.append((stamp, text))
    return deduped


def words(text: str) -> int:
    return len(text.split())


def select(items: list[tuple[float, str]], duration: int) -> list[tuple[float, str]]:
    total = sum(words(text) for _, text in items)
    if duration < 8 * 60 or total <= 850:
        return items
    cap = 900 if duration < 20 * 60 else 1200 if duration < 40 * 60 else 1500
    keep = set()
    for index, (stamp, text) in enumerate(items):
        if words(text) < 8 and not NUMBER_RE.search(text):
            continue
        if stamp <= 70 or stamp >= max(0, duration - 140):
            keep.add(index)
        elif NUMBER_RE.search(text):
            keep.add(index)
        elif STRUCT_RE.search(text):
            keep.add(index)
    bucket = 180
    buckets: dict[int, list[int]] = {}
    for index, (stamp, _) in enumerate(items):
        buckets.setdefault(int(stamp // bucket), []).append(index)
    for indexes in buckets.values():
        have = sum(words(items[index][1]) for index in indexes if index in keep)
        if have >= 55:
            continue
        for index in indexes:
            if index in keep:
                continue
            if words(items[index][1]) < 8 and not NUMBER_RE.search(items[index][1]):
                continue
            keep.add(index)
            have += words(items[index][1])
            if have >= 55:
                break
    ordered = sorted(keep)
    while sum(words(items[index][1]) for index in ordered) > cap and len(ordered) > 8:
        # Drop the longest low-priority sentence from the middle.
        candidates = [
            index
            for index in ordered
            if items[index][0] > 70
            and items[index][0] < duration - 140
            and not NUMBER_RE.search(items[index][1])
        ]
        if not candidates:
            break
        drop = max(candidates, key=lambda index: words(items[index][1]))
        ordered.remove(drop)
    return [items[index] for index in ordered]


def clock(seconds: float) -> str:
    total = int(seconds)
    return f"{total // 60}:{total % 60:02d}"


def pack_video(row: dict) -> str | None:
    video_id = row["id"]
    folder = VIDEOS / video_id
    meta_path = folder / "metadata.json"
    if not meta_path.exists():
        return None
    meta = json.loads(meta_path.read_text(encoding="utf-8"))
    title = meta.get("title") or row["playlistTitle"]
    duration = int(meta.get("duration") or row["playlistDuration"] or 0)
    description = (meta.get("description") or "").strip()
    if len(description) > 700:
        description = description[:700].rstrip() + "…"
    lines = [
        f"===== VIDEO {video_id} =====",
        f"TITLE: {title}",
        f"DURATION_SEC: {duration}",
        f"CAPTION: {meta.get('captionStatus')} {meta.get('captionSource') or ''} {meta.get('originalLanguage') or ''}".strip(),
        f"CUES: {meta.get('cueCount') or 0}",
        f"VIEWS: {meta.get('viewCount') or ''}",
        "DESCRIPTION:",
        description or "(none)",
    ]
    original = folder / "original.txt"
    if meta.get("captionStatus") != "captioned" or not original.exists():
        lines.append("SPINE:")
        lines.append("(no captions)")
    else:
        chosen = select(sentences(parse_cues(original.read_text(encoding="utf-8"))), duration)
        lines.append(f"SPINE_WORDS: {sum(words(text) for _, text in chosen)}")
        lines.append("SPINE:")
        for stamp, text in chosen:
            lines.append(f"[{clock(stamp)} | {int(stamp)}s] {text}")
    lines.append(f"===== END {video_id} =====")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    video_dir = OUT / "videos"
    video_dir.mkdir(parents=True, exist_ok=True)
    manifest = []
    missing_meta = 0
    for row in playlist():
        if (NOTES / f"{row['id']}.md").exists():
            continue
        if not (VIDEOS / row["id"] / "metadata.json").exists():
            missing_meta += 1
            continue
        block = pack_video(row)
        if block is None:
            continue
        path = video_dir / f"{row['id']}.txt"
        path.write_text(block, encoding="utf-8")
        meta = json.loads((VIDEOS / row["id"] / "metadata.json").read_text(encoding="utf-8"))
        duration = int(meta.get("duration") or row["playlistDuration"] or 0)
        manifest.append((duration, row["id"], path.stat().st_size))
    manifest.sort()
    lines = [f"{video_id}\t{duration}\t{size}" for duration, video_id, size in manifest]
    (OUT / "manifest.tsv").write_text("\n".join(lines) + ("\n" if lines else ""), encoding="utf-8")
    print(f"packed {len(manifest)} missing_meta {missing_meta}")
    if manifest:
        sizes = [size for _, _, size in manifest]
        print(f"chars min/med/max {min(sizes)} {sizes[len(sizes)//2]} {max(sizes)} sum {sum(sizes)}")


if __name__ == "__main__":
    main()
