import { CatalogBrowser } from "@/components/catalog-browser";
import { getCatalog } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const catalog = getCatalog();
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mb-8 max-w-3xl space-y-3">
        <p className="text-sm tracking-[0.18em] text-primary">私人收藏 · 示範一支</p>
        <h1 className="font-serif text-4xl leading-tight sm:text-5xl">把一場演講留下繁體中文</h1>
        <p className="text-base leading-7 text-foreground/80">
          這一版只收錄 AI Native Dev（
          <a className="underline decoration-primary/40 underline-offset-4" href={catalog.channelUrl}>
            @tessl-ai
          </a>
          ）的一支影片。播放器是 YouTube 官方嵌入，旁邊的句子是我們存下來的繁體中文字幕。
        </p>
        {catalog.note ? <p className="text-sm text-muted-foreground">{catalog.note}</p> : null}
      </div>
      <CatalogBrowser videos={catalog.videos} />
    </main>
  );
}
