import Link from "next/link";
import { notFound } from "next/navigation";
import { DownloadLinks } from "@/components/download-links";
import { SyncedPlayer } from "@/components/synced-player";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { availableCaptionFiles, getVideo, readCues } from "@/lib/catalog";
import { captionLabel, formatClock, formatViews } from "@/lib/format";
import { noteExists } from "@/lib/notes";
import { cn } from "cn";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  return {
    title: video ? `${video.title} · 對照原片` : "找不到影片",
  };
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const video = getVideo(id);
  if (!video) notFound();
  const cues = video.captionStatus === "captioned" ? readCues(id) : [];
  const views = formatViews(video.viewCount);
  const downloads = availableCaptionFiles(id);
  const hasNote = noteExists(id);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <p className="text-sm text-muted-foreground">
        <Link href="/" className="underline decoration-primary/40 underline-offset-4">
          筆記
        </Link>
        <span> / 對照原片</span>
      </p>
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <Badge>{captionLabel(video.captionSource, video.captionStatus)}</Badge>
          <Badge variant="outline">{formatClock(video.duration)}</Badge>
          {views ? <Badge variant="outline">{views}</Badge> : null}
          <Badge variant="secondary">{video.channel}</Badge>
        </div>
        <h1 className="font-serif text-3xl leading-tight sm:text-4xl">{video.title}</h1>
        {hasNote ? (
          <p className="text-sm">
            <Link href={`/notes/${video.id}`} className="underline decoration-primary/40 underline-offset-4">
              閱讀這支影片的筆記
            </Link>
          </p>
        ) : null}
      </div>

      {video.captionStatus === "captioned" ? (
        <SyncedPlayer videoId={video.id} cues={cues} />
      ) : (
        <div className="space-y-3">
          <div className="overflow-hidden rounded-xl bg-black ring-1 ring-foreground/10">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="rounded-xl border border-dashed border-primary/40 bg-card px-4 py-4 text-sm leading-6" role="status">
            這支影片沒有可用的官方或自動字幕。這裡沒有編造逐字稿，也沒有繁中字幕檔。
          </div>
        </div>
      )}

      {video.captionStatus === "captioned" ? (
        <section className="space-y-3">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-2xl">文字檔</h2>
            <Link
              href={`/videos/${video.id}/transcript`}
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              打開完整逐字稿
            </Link>
          </div>
            <DownloadLinks id={video.id} files={downloads} />
        </section>
      ) : null}

      <section className="max-w-3xl space-y-2">
        <h2 className="font-serif text-2xl">簡介</h2>
        <p className="text-sm leading-7 whitespace-pre-wrap">{video.description || video.descriptionZh || "沒有簡介。"}</p>
        <p className="text-xs text-muted-foreground">
          原片：
          <a className="underline underline-offset-4" href={video.webpageUrl}>
            {video.webpageUrl}
          </a>
        </p>
      </section>
    </main>
  );
}
