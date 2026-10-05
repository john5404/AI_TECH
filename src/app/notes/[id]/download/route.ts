import { readNoteMarkdown } from "@/lib/notes";

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const body = readNoteMarkdown(id);
  if (!body) {
    return new Response("找不到這份筆記", { status: 404 });
  }
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${id}.md"`,
    },
  });
}
