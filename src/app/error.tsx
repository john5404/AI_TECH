"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start gap-4 px-4 py-16">
      <p className="text-sm text-primary">讀取失敗</p>
      <h1 className="font-serif text-3xl">文庫暫時打不開</h1>
      <p className="text-sm leading-6 text-muted-foreground">
        讀取本機收藏時發生問題。請再試一次。影片檔不會因此被下載。
      </p>
      <Button onClick={() => reset()}>再試一次</Button>
    </main>
  );
}
