"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { captionLabel, formatClock } from "@/lib/format";
import type { CatalogVideo } from "@/lib/types";

type Filter = "all" | "captioned" | "missing";

export function CatalogBrowser({ videos }: { videos: CatalogVideo[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: videos.length,
      captioned: videos.filter((video) => video.captionStatus === "captioned").length,
      missing: videos.filter((video) => video.captionStatus !== "captioned").length,
      translated: videos.filter((video) => video.captionStatus === "captioned" && video.cueCount > 0).length,
    }),
    [videos],
  );

  const visible = videos.filter((video) => {
    if (filter === "captioned" && video.captionStatus !== "captioned") return false;
    if (filter === "missing" && video.captionStatus === "captioned") return false;
    const haystack = `${video.titleZh} ${video.title} ${video.descriptionZh}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  if (videos.length === 0) {
    return (
      <Card>
        <CardContent className="space-y-2 py-10 text-center">
          <h2 className="font-serif text-2xl">文庫還是空的</h2>
          <p className="text-sm text-muted-foreground">
            執行收錄指令後，影片會出現在這裡。目前不會顯示假清單。
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="已收錄" value={counts.all} />
        <Stat label="有字幕並已譯成繁中" value={counts.translated} />
        <Stat label="沒有字幕" value={counts.missing} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜尋標題或簡介"
            className="h-10 bg-card pl-9"
            aria-label="搜尋影片"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterButton current={filter} value="all" onSelect={setFilter}>
            全部
          </FilterButton>
          <FilterButton current={filter} value="captioned" onSelect={setFilter}>
            有字幕
          </FilterButton>
          <FilterButton current={filter} value="missing" onSelect={setFilter}>
            無字幕
          </FilterButton>
        </div>
      </div>

      {visible.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-sm text-muted-foreground">
            沒有符合這個條件的影片。
          </CardContent>
        </Card>
      ) : (
        <ul className="grid gap-4">
          {visible.map((video) => (
            <li key={video.id}>
              <Link href={`/videos/${video.id}`} className="block">
                <Card className="transition hover:ring-primary/40">
                  <CardContent className="grid gap-4 p-3 sm:grid-cols-[220px_minmax(0,1fr)] sm:p-3">
                    <Image
                      src={video.thumbnail}
                      alt=""
                      width={480}
                      height={270}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                    <div className="min-w-0 space-y-2 py-1">
                      <div className="flex flex-wrap gap-2">
                        <Badge>{captionLabel(video.captionSource, video.captionStatus)}</Badge>
                        {video.captionStatus === "captioned" ? (
                          <Badge variant="secondary">繁中已譯</Badge>
                        ) : (
                          <Badge variant="outline">未編造逐字稿</Badge>
                        )}
                        <Badge variant="outline">{formatClock(video.duration)}</Badge>
                      </div>
                      <h2 className="font-serif text-xl leading-snug">{video.titleZh || video.title}</h2>
                      <p className="text-sm text-muted-foreground">{video.title}</p>
                      <p className="line-clamp-2 text-sm leading-6 text-foreground/80">
                        {video.descriptionZh}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-card px-4 py-3 ring-1 ring-foreground/10">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="font-serif text-3xl">{value}</p>
    </div>
  );
}

function FilterButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: Filter;
  value: Filter;
  onSelect: (value: Filter) => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={
        selected
          ? "rounded-full bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          : "rounded-full bg-card px-3 py-1.5 text-sm ring-1 ring-foreground/10"
      }
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}
