"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { NoteIndexItem } from "@/lib/notes";

export function NotesSidebar({ notes }: { notes: NoteIndexItem[] }) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();
  const activeId = pathname.startsWith("/notes/") ? pathname.split("/")[2] : "";

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return notes;
    return notes.filter((note) => `${note.title} ${note.excerpt}`.toLowerCase().includes(needle));
  }, [notes, query]);

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
              notes={notes}
              visible={visible}
              query={query}
              onQuery={setQuery}
              activeId={activeId}
            />
          </div>
        </details>
      </div>
      <aside className="sticky top-0 hidden h-[calc(100dvh-5.25rem)] w-72 shrink-0 self-start border-r border-border/80 bg-card/70 lg:block">
        <div className="flex h-full flex-col px-3 py-4">
          <SidebarBody
            notes={notes}
            visible={visible}
            query={query}
            onQuery={setQuery}
            activeId={activeId}
          />
        </div>
      </aside>
    </>
  );
}

function SidebarBody({
  notes,
  visible,
  query,
  onQuery,
  activeId,
}: {
  notes: NoteIndexItem[];
  visible: NoteIndexItem[];
  query: string;
  onQuery: (value: string) => void;
  activeId: string;
}) {
  return (
    <>
      <div className="mb-3 space-y-2">
        <p className="text-xs tracking-[0.16em] text-muted-foreground">
          筆記 {notes.length}
        </p>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => onQuery(event.target.value)}
            placeholder="查詢筆記"
            className="h-9 bg-background pl-8"
            aria-label="查詢筆記"
          />
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="px-1 text-sm leading-6 text-muted-foreground">沒有符合的筆記。</p>
      ) : (
        <nav aria-label="筆記選單" className="min-h-0 flex-1 overflow-y-auto pr-1">
          <ul className="space-y-1 pb-4">
            {visible.map((note) => {
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
        </nav>
      )}
    </>
  );
}
