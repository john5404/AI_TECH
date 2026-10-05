import { readFileSync } from "node:fs";
import path from "node:path";

export const NOTES_PATH = path.join(process.cwd(), "content/learning-while-you-sleep.md");

export function readNotesMarkdown() {
  return readFileSync(NOTES_PATH, "utf8");
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
