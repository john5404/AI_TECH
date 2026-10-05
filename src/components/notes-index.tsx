"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { NOTE_CATEGORIES, categoryLabel, type NoteCategoryId } from "@/lib/categories";
import { captionLabel, formatClock } from "@/lib/format";
import type { NoteIndexItem } from "@/lib/notes";
import { cn } from "cn";

type Filter = "all" | "captioned" | "missing";
type CategoryFilter = "all" | NoteCategoryId;

export function NotesIndex({ notes }: { notes: NoteIndexItem[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const counts = useMemo(
    () => ({
      all: notes.length,
      captioned: notes.filter((note) => note.captionStatus === "captioned").length,
      missing: notes.filter((note) => note.captionStatus === "no-captions").length,
    }),
    [notes],
  );

  const visible = notes.filter((note) => {
    if (filter === "captioned" && note.captionStatus !== "captioned") return false;
    if (filter === "missing" && note.captionStatus !== "no-captions") return false;
    if (category !== "all" && note.category !== category) return false;
    const haystack = `${note.title} ${note.excerpt} ${categoryLabel(note.category)}`.toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-3">
        <Stat label="筆記" value={counts.all} />
        <Stat label="有英文字幕" value={counts.captioned} />
        <Stat label="沒有字幕" value={counts.missing} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="搜尋英文標題或一句話"
            className="h-10 bg-card pl-9"
            aria-label="搜尋筆記"
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

      <div className="flex flex-wrap gap-2">
        <CategoryButton current={category} value="all" onSelect={setCategory}>
          全部分類
        </CategoryButton>
        {NOTE_CATEGORIES.map((item) => (
          <CategoryButton key={item.id} current={category} value={item.id} onSelect={setCategory}>
            {item.label}
          </CategoryButton>
        ))}
      </div>

      {visible.length === 0 ? (
        <Card>
          <CardContent className="py-8 text-center text-sm text-muted-foreground">
            沒有符合這個條件的筆記。
          </CardContent>
        </Card>
      ) : (
        <ul className="grid gap-4">
          {visible.map((note) => (
            <li key={note.id}>
              <Card className="overflow-hidden">
                <CardContent className="grid gap-4 p-3 sm:grid-cols-[220px_minmax(0,1fr)] sm:p-3">
                  <Link href={`/notes/${note.id}`} className="block">
                    <Image
                      src={note.thumbnail}
                      alt=""
                      width={480}
                      height={270}
                      className="aspect-video w-full rounded-lg object-cover"
                    />
                  </Link>
                  <div className="min-w-0 space-y-2 py-1">
                    <div className="flex flex-wrap gap-2">
                      {note.captionStatus === "unknown" ? (
                        <Badge variant="outline">字幕狀態未知</Badge>
                      ) : (
                        <Badge>{captionLabel(note.captionSource, note.captionStatus)}</Badge>
                      )}
                      {note.duration > 0 ? <Badge variant="outline">{formatClock(note.duration)}</Badge> : null}
                      <Badge variant="outline">{categoryLabel(note.category)}</Badge>
                    </div>
                    <h2 className="font-serif text-xl leading-snug">
                      <Link href={`/notes/${note.id}`} className="underline-offset-4 hover:underline">
                        {note.title}
                      </Link>
                    </h2>
                    {note.excerpt ? <p className="line-clamp-3 text-sm leading-6 text-foreground/80">{note.excerpt}</p> : null}
                    <div className="flex flex-wrap gap-2 pt-1">
                      <Link href={`/notes/${note.id}`} className={cn(buttonVariants({ size: "sm" }))}>
                        閱讀筆記
                      </Link>
                      <Link href={`/videos/${note.id}`} className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                        YouTube 原片
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

function CategoryButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: CategoryFilter;
  value: CategoryFilter;
  onSelect: (value: CategoryFilter) => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={
        selected
          ? "rounded-full bg-foreground px-3 py-1.5 text-sm text-background"
          : "rounded-full bg-card px-3 py-1.5 text-sm ring-1 ring-foreground/10"
      }
      aria-pressed={selected}
    >
      {children}
    </button>
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
