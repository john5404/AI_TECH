import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const allowed = new Set([
  "zh-Hant.txt",
  "zh-Hant.vtt",
  "zh-Hant.srt",
  "original.txt",
  "original.vtt",
]);

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const file = new URL(request.url).searchParams.get("file") ?? "";
  if (!/^[\w-]{11}$/.test(id) || !allowed.has(file)) {
    return NextResponse.json({ error: "找不到這個檔案" }, { status: 404 });
  }
  const full = path.join(process.cwd(), "data", "videos", id, file);
  if (!fs.existsSync(full)) {
    return NextResponse.json({ error: "這支影片沒有這個檔案" }, { status: 404 });
  }
  const body = fs.readFileSync(full);
  const type = file.endsWith(".vtt")
    ? "text/vtt; charset=utf-8"
    : "text/plain; charset=utf-8";
  return new NextResponse(body, {
    headers: {
      "Content-Type": type,
      "Content-Disposition": `attachment; filename="${file}"`,
    },
  });
}
