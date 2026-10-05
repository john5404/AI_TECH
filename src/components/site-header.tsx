import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-card/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border border-primary/40 bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
            筆記
          </span>
          <span>
            <span className="block font-serif text-lg leading-tight tracking-wide">AI Native Dev</span>
            <span className="block text-xs text-muted-foreground">頻道筆記 · 專有名詞保持英文</span>
          </span>
        </Link>
        <p className="hidden text-right text-xs text-muted-foreground sm:block">
          依英文字幕整理
          <br />
          播放只用 YouTube 嵌入
        </p>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 px-4 py-6 text-center text-xs leading-5 text-muted-foreground">
      筆記依英文原稿整理成繁體中文。agent、memory、harness、Skills 等專有名詞不翻譯。影片只用 YouTube 官方嵌入，檔案不落地。
    </footer>
  );
}
