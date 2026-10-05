import Link from "next/link";
import { notFound } from "next/navigation";
import { TalkNotes } from "@/components/talk-notes";
import { buttonVariants } from "@/components/ui/button";
import { getVideo } from "@/lib/catalog";
import { formatClock } from "@/lib/format";
import { headingId, notesOutline, readNoteMarkdown } from "@/lib/notes";
import { cn } from "cn";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  const markdown = readNoteMarkdown(id);
  const title = video?.title || markdown?.split("\n").find((line) => line.startsWith("# "))?.slice(2).trim();
  return { title: title ? `${title} · 筆記` : "找不到筆記" };
}

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const markdown = readNoteMarkdown(id);
  if (!markdown) notFound();
  const video = getVideo(id);
  const outline = notesOutline(markdown);
  const title = video?.title;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="underline decoration-primary/40 underline-offset-4">
              頻道筆記
            </Link>
            {title ? <span> / {title}</span> : null}
          </p>
          <p className="text-base leading-7 text-foreground/80">
            依英文原稿整理。專有名詞保持英文。
            {video && video.duration > 0 ? ` 片長 ${formatClock(video.duration)}。` : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`/notes/${id}/download`} className={cn(buttonVariants())}>
            下載 Markdown
          </a>
          <Link href={`/videos/${id}`} className={cn(buttonVariants({ variant: "outline" }))}>
            對照原片
          </Link>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav className="lg:sticky lg:top-6 lg:self-start">
          <p className="mb-3 text-xs tracking-[0.16em] text-muted-foreground">本篇目錄</p>
          {outline.length === 0 ? (
            <p className="text-sm text-muted-foreground">這篇沒有章節標題。</p>
          ) : (
            <ol className="space-y-2 text-sm leading-6">
              {outline.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id || headingId(item.title)}`} className="text-foreground/80 underline-offset-4 hover:text-primary hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          )}
        </nav>
        <TalkNotes markdown={markdown} />
      </div>
    </main>
  );
}
