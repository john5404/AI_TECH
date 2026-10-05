"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NOTE_CATEGORIES, categoryLabel, type NoteCategoryId } from "@/lib/categories";
import type { NoteIndexItem } from "@/lib/notes";

export function NotesSidebar({ notes }: { notes: NoteIndexItem[] }) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const activeId = pathname.startsWith("/notes/") ? pathname.split("/")[2] : "";
  const [openIds, setOpenIds] = useState<Set<NoteCategoryId>>(() => {
    const category = notes.find((note) => note.id === activeId)?.category;
    return category ? new Set([category]) : new Set();
  });
  const [trackedActiveId, setTrackedActiveId] = useState(activeId);
  const [appliedQuery, setAppliedQuery] = useState("");

  if (activeId !== trackedActiveId) {
    setTrackedActiveId(activeId);
    const category = notes.find((note) => note.id === activeId)?.category;
    if (category && !openIds.has(category)) {
      const next = new Set(openIds);
      next.add(category);
      setOpenIds(next);
    }
  }

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return notes;
    return notes.filter((note) =>
      `${note.title} ${note.excerpt} ${categoryLabel(note.category)}`.toLowerCase().includes(needle),
    );
  }, [notes, query]);

  if (query !== appliedQuery) {
    setAppliedQuery(query);
    if (query.trim()) {
      const next = new Set(openIds);
      for (const note of visible) next.add(note.category);
      setOpenIds(next);
    }
  }

  function toggle(id: NoteCategoryId) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function setAll(open: boolean) {
    setOpenIds(open ? new Set(NOTE_CATEGORIES.map((category) => category.id)) : new Set());
  }

  return (
    <>
      <div className="border-b border-border/80 bg-card/80 lg:hidden">
        <details className="group">
          <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium">
            筆記選單
            <span className="ml-2 text-muted-foreground">
              {visible.length}/{notes.length}
            </span>
          </summary>
          <div className="max-h-[70dvh] overflow-y-auto border-t border-border/80 px-3 py-3">
            <SidebarBody
              instance="mobile"
              notes={notes}
              visible={visible}
              query={query}
              onQuery={setQuery}
              activeId={activeId}
              openIds={openIds}
              onToggle={toggle}
              onSetAll={setAll}
            />
          </div>
        </details>
      </div>
      <aside className="sticky top-0 hidden h-[calc(100dvh-5.25rem)] w-80 shrink-0 self-start border-r border-border/80 bg-card/70 lg:block">
        <div className="flex h-full flex-col px-3 py-4">
          <SidebarBody
            instance="desktop"
            notes={notes}
            visible={visible}
            query={query}
            onQuery={setQuery}
            activeId={activeId}
            openIds={openIds}
            onToggle={toggle}
            onSetAll={setAll}
          />
        </div>
      </aside>
    </>
  );
}

function SidebarBody({
  instance,
  notes,
  visible,
  query,
  onQuery,
  activeId,
  openIds,
  onToggle,
  onSetAll,
}: {
  instance: "mobile" | "desktop";
  notes: NoteIndexItem[];
  visible: NoteIndexItem[];
  query: string;
  onQuery: (value: string) => void;
  activeId: string;
  openIds: Set<NoteCategoryId>;
  onToggle: (id: NoteCategoryId) => void;
  onSetAll: (open: boolean) => void;
}) {
  const groups = NOTE_CATEGORIES.map((category) => ({
    ...category,
    notes: visible.filter((note) => note.category === category.id),
  })).filter((group) => group.notes.length > 0);

  return (
    <>
      <div className="mb-3 space-y-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs tracking-[0.16em] text-muted-foreground">筆記 {notes.length}</p>
          <div className="flex gap-2 text-xs">
            <button type="button" className="text-muted-foreground hover:text-foreground" onClick={() => onSetAll(true)}>
              全部展開
            </button>
            <button type="button" className="text-muted-foreground hover:text-foreground" onClick={() => onSetAll(false)}>
              全部收合
            </button>
          </div>
        </div>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="查詢筆記或分類"
            className="h-9 bg-background pl-8"
            aria-label="查詢筆記"
          />
        </div>
      </div>
      {groups.length === 0 ? (
        <p className="px-1 text-sm leading-6 text-muted-foreground">沒有符合的筆記。</p>
      ) : (
        <nav aria-label="筆記選單" className="min-h-0 flex-1 overflow-y-auto pr-1">
          {groups.map((group) => {
            const expanded = openIds.has(group.id);
            return (
              <section key={group.id} className="mb-1">
                <h2 className="sticky top-0 z-10 bg-card">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`note-group-${instance}-${group.id}`}
                    onClick={() => onToggle(group.id)}
                    className="flex w-full items-center gap-1.5 rounded-lg px-2 py-1.5 text-left text-xs font-medium tracking-wide text-muted-foreground hover:bg-muted"
                  >
                    <ChevronDown className={expanded ? "size-3.5 shrink-0" : "size-3.5 shrink-0 -rotate-90"} />
                    <span className="min-w-0 flex-1">{group.label}</span>
                    <span className="font-normal tabular-nums">{group.notes.length}</span>
                  </button>
                </h2>
                {expanded ? (
                  <ul id={`note-group-${instance}-${group.id}`} className="space-y-0.5 pb-2">
                    {group.notes.map((note) => {
                      const current = note.id === activeId;
                      return (
                        <li key={note.id}>
                          <Link
                            href={`/notes/${note.id}`}
                            aria-current={current ? "page" : undefined}
                            className={
                              current
                                ? "block rounded-lg bg-primary/10 px-2.5 py-2 text-sm leading-5 font-medium text-primary"
                                : "block rounded-lg px-2.5 py-2 text-sm leading-5 text-foreground/80 hover:bg-muted"
                            }
                          >
                            {note.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </section>
            );
          })}
        </nav>
      )}
    </>
  );
}
