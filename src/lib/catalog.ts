import fs from "fs";
import path from "path";
import type { Catalog, Cue, VideoRecord } from "@/lib/types";

const dataDir = path.join(process.cwd(), "data");

const emptyCatalog = (): Catalog => ({
  channelUrl: "https://www.youtube.com/@tessl-ai",
  channelName: "AI Native Dev",
  videos: [],
});

export function getCatalog(): Catalog {
  const file = path.join(dataDir, "catalog.json");
  if (!fs.existsSync(file)) return emptyCatalog();
  return JSON.parse(fs.readFileSync(file, "utf8")) as Catalog;
}

export function getVideo(id: string): VideoRecord | null {
  if (!/^[\w-]{11}$/.test(id)) return null;
  const file = path.join(dataDir, "videos", id, "metadata.json");
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf8")) as VideoRecord;
}

export function parseVtt(vtt: string): Cue[] {
  const lines = vtt.replace(/\r/g, "").split("\n");
  const timing =
    /(\d{2}):(\d{2}):(\d{2})[.](\d{3})\s+-->\s+(\d{2}):(\d{2}):(\d{2})[.](\d{3})/;
  const cues: Cue[] = [];
  let index = 0;
  while (index < lines.length) {
    const match = lines[index]?.match(timing);
    if (!match) {
      index += 1;
      continue;
    }
    const parts = match.slice(1).map(Number);
    const start = parts[0] * 3600 + parts[1] * 60 + parts[2] + parts[3] / 1000;
    const end = parts[4] * 3600 + parts[5] * 60 + parts[6] + parts[7] / 1000;
    index += 1;
    const text: string[] = [];
    while (index < lines.length && lines[index]?.trim()) {
      text.push(lines[index].trim());
      index += 1;
    }
    const decoded = text
      .join(" ")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">")
      .replaceAll("&amp;", "&")
      .trim();
    if (decoded) cues.push({ start, end, text: decoded });
  }
  return cues;
}

export function readCues(id: string): Cue[] {
  if (!/^[\w-]{11}$/.test(id)) return [];
  const file = path.join(dataDir, "videos", id, "zh-Hant.vtt");
  if (!fs.existsSync(file)) return [];
  return parseVtt(fs.readFileSync(file, "utf8"));
}

export function readTranscript(id: string, name: "zh-Hant.txt" | "original.txt") {
  if (!/^[\w-]{11}$/.test(id)) return "";
  const file = path.join(dataDir, "videos", id, name);
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
}
