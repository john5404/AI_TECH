import { NotesIndex } from "@/components/notes-index";
import { listNoteIndex } from "@/lib/notes";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const notes = listNoteIndex();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 max-w-3xl space-y-2">
        <p className="text-sm tracking-[0.18em] text-primary">AI Native Dev</p>
        <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">頻道筆記</h1>
        <p className="text-base leading-7 text-foreground/80">
          這裡整理 YouTube 頻道 AI Native Dev 的影片。筆記依英文字幕原稿寫成繁體中文，agent、memory、session、harness、Skills、context engineering 這類專有名詞保持英文。左側選單依主題分類。播放只用 YouTube 官方嵌入。
        </p>
      </div>
      <NotesIndex notes={notes} />
    </main>
  );
}
