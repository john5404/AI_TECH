import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-border/80 bg-card/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full border border-primary/40 bg-primary text-sm font-semibold text-primary-foreground shadow-sm">
            私藏
          </span>
          <span>
            <span className="block font-serif text-lg leading-tight tracking-wide">
              Tessl 繁中文庫
            </span>
            <span className="block text-xs text-muted-foreground">
              只嵌入官方播放器，影片檔不落地
            </span>
          </span>
        </Link>
        <p className="hidden text-right text-xs text-muted-foreground sm:block">
          單人私人收藏
          <br />
          繁體中文逐字稿與字幕
        </p>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/80 px-4 py-6 text-center text-xs leading-5 text-muted-foreground">
      翻譯不需要 API 金鑰，使用 Google 翻譯的免金鑰介面（目標語言 zh-TW）。
      沒有字幕的影片會標明，不會編造逐字稿。
    </footer>
  );
}
