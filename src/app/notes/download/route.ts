import { readNotesMarkdown } from "@/lib/notes";

export function GET() {
  const body = readNotesMarkdown();
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="learning-while-you-sleep.md"',
    },
  });
}
