import Link from "next/link";
import { notFound } from "next/navigation";
import { DownloadLinks } from "@/components/download-links";
import { getVideo, readTranscript } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  return { title: video ? `${video.titleZh || video.title} · 逐字稿` : "找不到逐字稿" };
}

export default async function TranscriptPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  if (!video) notFound();
  const transcript = readTranscript(id, "zh-Hant.txt");

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="underline decoration-primary/40 underline-offset-4">
          筆記
        </Link>
        {" / "}
        <Link href={`/videos/${video.id}`} className="underline decoration-primary/40 underline-offset-4">
          對照原片
        </Link>
        {" / 逐字稿"}
      </p>
      <div className="space-y-2">
        <h1 className="font-serif text-3xl leading-tight">{video.titleZh || video.title}</h1>
        <p className="text-sm text-muted-foreground">繁體中文逐字稿，時間軸對應原片。</p>
      </div>
      {transcript ? (
        <>
          <DownloadLinks id={video.id} />
          <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-6">
            <pre className="font-sans text-sm leading-7 whitespace-pre-wrap">{transcript}</pre>
          </article>
        </>
      ) : (
        <div className="rounded-xl border border-dashed border-primary/40 bg-card px-4 py-6 text-sm leading-6" role="status">
          這支影片沒有繁體中文逐字稿。沒有字幕時不會編造全文。
        </div>
      )}
    </main>
  );
}
