import Link from "next/link";
import { TalkNotes } from "@/components/talk-notes";
import { buttonVariants } from "@/components/ui/button";
import { notesOutline, readNotesMarkdown } from "@/lib/notes";
import { cn } from "cn";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const markdown = readNotesMarkdown();
  const outline = notesOutline(markdown);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm tracking-[0.18em] text-primary">一場演講 · 讀懂再整理</p>
          <p className="text-base leading-7 text-foreground/80">
            這份筆記來自 Lamis Mukta 在 AI Native DevCon 的演講字幕。先理解繁體中文逐字稿，再對照英文原稿，整理成可以讀的文章。
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href="/notes/download" className={cn(buttonVariants())}>
            下載 Markdown
          </a>
          <Link href="/videos/tTcxVv8HHNw" className={cn(buttonVariants({ variant: "outline" }))}>
            對照原片
          </Link>
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
