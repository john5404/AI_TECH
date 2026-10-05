import fs from "node:fs";
import path from "node:path";
import { getCatalog } from "@/lib/catalog";
import type { CaptionSource, CaptionStatus } from "@/lib/types";

export const NOTES_DIR = path.join(process.cwd(), "content/notes");

const ID_PATTERN = /^[\w-]{11}$/;

export type NoteIndexItem = {
  id: string;
  title: string;
  duration: number;
  captionStatus: CaptionStatus | "unknown";
  captionSource: CaptionSource;
  excerpt: string;
  thumbnail: string;
  webpageUrl: string;
};

export function notePath(id: string) {
  return path.join(NOTES_DIR, `${id}.md`);
}

export function noteExists(id: string) {
  return ID_PATTERN.test(id) && fs.existsSync(notePath(id));
}

export function readNoteMarkdown(id: string) {
  if (!noteExists(id)) return null;
  return fs.readFileSync(notePath(id), "utf8");
}

export function headingId(text: string) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");
}

export function notesOutline(markdown: string) {
  return markdown
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.slice(3).trim();
      return { title, id: headingId(title) };
    });
}

function firstHeading(markdown: string) {
  const line = markdown.split("\n").find((item) => item.startsWith("# "));
  return line ? line.slice(2).trim() : "";
}

function excerptFrom(markdown: string) {
  const match = markdown.match(/## 一句話\s*\n+([\s\S]*?)(?:\n## |\s*$)/);
  const source = match?.[1] ?? "";
  const plain = source
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (plain.length <= 180) return plain;
  return `${plain.slice(0, 179).trim()}…`;
}

export function listNoteIndex(): NoteIndexItem[] {
  const catalog = getCatalog();
  const byId = new Map(catalog.videos.map((video) => [video.id, video]));
  const orderedIds = catalog.videos.map((video) => video.id);
  if (fs.existsSync(NOTES_DIR)) {
    for (const name of fs.readdirSync(NOTES_DIR)) {
      if (!name.endsWith(".md")) continue;
      const id = name.slice(0, -3);
      if (ID_PATTERN.test(id) && !byId.has(id)) orderedIds.push(id);
    }
  }

  const items: NoteIndexItem[] = [];
  for (const id of orderedIds) {
    const markdown = readNoteMarkdown(id);
    if (!markdown) continue;
    const video = byId.get(id);
    items.push({
      id,
      title: video?.title || firstHeading(markdown) || id,
      duration: video?.duration ?? 0,
      captionStatus: video?.captionStatus ?? "unknown",
      captionSource: video?.captionSource ?? null,
      excerpt: excerptFrom(markdown),
      thumbnail: video?.thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      webpageUrl: video?.webpageUrl || `https://www.youtube.com/watch?v=${id}`,
    });
  }
  return items;
}
