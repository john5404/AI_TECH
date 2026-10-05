import Link from "next/link";
import { notFound } from "next/navigation";
import { TalkNotes } from "@/components/talk-notes";
import { buttonVariants } from "@/components/ui/button";
import { notesOutline, readNoteById } from "@/lib/notes";
import { cn } from "cn";

export const dynamic = "force-dynamic";

export default async function NotePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const markdown = readNoteById(id);
  if (!markdown) notFound();
  const outline = notesOutline(markdown);
  const title = markdown.match(/^#\s+(.+)$/m)?.[1] ?? id;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm text-muted-foreground">
            <Link href="/" className="underline decoration-primary/40 underline-offset-4">
              筆記
            </Link>
            <span> / {title}</span>
          </p>
          <p className="text-base leading-7 text-foreground/80">
            依英文手寫字幕整理。專有名詞保持英文。
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={`/notes/${id}/download`} className={cn(buttonVariants())}>
            下載 Markdown
          </a>
          <a
            href={`https://www.youtube.com/watch?v=${id}`}
            className={cn(buttonVariants({ variant: "outline" }))}
            target="_blank"
            rel="noreferrer"
          >
            原片
          </a>
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-[16rem_minmax(0,1fr)]">
        <nav className="lg:sticky lg:top-6 lg:self-start">
          <p className="mb-3 text-xs tracking-[0.16em] text-muted-foreground">本篇目錄</p>
          <ol className="space-y-2 text-sm leading-6">
            {outline.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-foreground/80 underline-offset-4 hover:text-primary hover:underline">
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <TalkNotes markdown={markdown} />
      </div>
    </main>
  );
}
