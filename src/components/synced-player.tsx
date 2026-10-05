"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatClock } from "@/lib/format";
import type { Cue } from "@/lib/types";

type YtPlayer = {
  getCurrentTime: () => number;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: () => void;
            onError?: () => void;
          };
        },
      ) => YtPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function SyncedPlayer({ videoId, cues }: { videoId: string; cues: Cue[] }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YtPlayer | null>(null);
  const cuesRef = useRef(cues);
  const [active, setActive] = useState(-1);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    cuesRef.current = cues;
  }, [cues]);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;

    const mount = () => {
      if (cancelled || !hostRef.current || !window.YT?.Player || playerRef.current) return;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          cc_load_policy: 0,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            if (!cancelled) setReady(true);
          },
          onError: () => {
            if (!cancelled) setFailed(true);
          },
        },
      });
    };

    if (window.YT?.Player) {
      mount();
    } else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        mount();
      };
      if (!document.querySelector("script[data-youtube-iframe-api]")) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.dataset.youtubeIframeApi = "true";
        document.body.appendChild(script);
      }
    }

    timer = window.setInterval(() => {
      const currentTime = playerRef.current?.getCurrentTime?.();
      if (typeof currentTime !== "number") return;
      let index = -1;
      cuesRef.current.forEach((cue, cueIndex) => {
        if (currentTime >= cue.start && currentTime < cue.end) index = cueIndex;
      });
      setActive((previous) => (previous === index ? previous : index));
    }, 200);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
      try {
        playerRef.current?.destroy();
      } catch {
        /* player may already be gone */
      }
      playerRef.current = null;
    };
  }, [videoId]);

  useEffect(() => {
    if (active < 0) return;
    document.querySelector(`[data-cue="${active}"]`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const current = active >= 0 ? cues[active] : null;

  return (
    <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(260px,0.8fr)]">
      <div className="space-y-3">
        <div className="overflow-hidden rounded-xl bg-black shadow-sm ring-1 ring-foreground/10">
          <div className="relative aspect-video">
            {!ready && !failed ? (
              <div className="absolute inset-0 grid place-items-center bg-zinc-950 text-sm text-zinc-200">
                正在載入 YouTube 播放器…
              </div>
            ) : null}
            <div ref={hostRef} className="absolute inset-0 h-full w-full" />
          </div>
        </div>
        <div className="min-h-20 rounded-xl bg-primary px-4 py-3 text-primary-foreground" aria-live="polite">
          <p className="text-xs tracking-[0.14em] uppercase opacity-80">繁體中文字幕</p>
          <p className="mt-1 text-lg leading-7 font-medium">
            {current?.text ??
              (cues.length === 0
                ? "這支影片沒有可用字幕，所以沒有逐字稿可同步。"
                : ready
                  ? "開始播放後，這裡會跟著時間顯示繁體中文。"
                  : "正在連接播放器…")}
          </p>
        </div>
        {failed ? (
          <p className="text-sm text-destructive" role="alert">
            播放器載入失敗。請檢查網路後重新整理。影片檔仍然只存在於 YouTube。
          </p>
        ) : null}
      </div>

      <ScrollArea className="h-[28rem] rounded-xl bg-card ring-1 ring-foreground/10 lg:h-[calc(56.25vw*0.62+8rem)] lg:max-h-[40rem]">
        {cues.length === 0 ? (
          <p className="p-4 text-sm leading-6 text-muted-foreground">
            沒有可列出的字幕句。我們沒有補寫內容。
          </p>
        ) : (
          <ol className="divide-y divide-border">
            {cues.map((cue, index) => {
              const selected = index === active;
              return (
                <li key={`${cue.start}-${index}`}>
                  <button
                    type="button"
                    data-cue={index}
                    aria-current={selected ? "true" : undefined}
                    onClick={() => {
                      const landing = Math.min(cue.start + 0.2, cue.start + (cue.end - cue.start) / 2);
                      playerRef.current?.seekTo(landing, true);
                    }}
                    className={
                      selected
                        ? "flex w-full gap-3 bg-primary/10 px-3 py-2.5 text-left"
                        : "flex w-full gap-3 px-3 py-2.5 text-left hover:bg-muted"
                    }
                  >
                    <span className="w-12 shrink-0 pt-0.5 font-mono text-xs text-muted-foreground">
                      {formatClock(cue.start)}
                    </span>
                    <span className="text-sm leading-6">{cue.text}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </ScrollArea>
    </div>
  );
}
