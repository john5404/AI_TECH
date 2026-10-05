import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-start gap-4 px-4 py-16">
      <p className="text-sm text-primary">找不到</p>
      <h1 className="font-serif text-3xl">收藏裡沒有這個頁面</h1>
      <p className="text-sm leading-6 text-muted-foreground">
        網址可能打錯了，或這支影片還沒被收錄。
      </p>
      <Link href="/" className={cn(buttonVariants())}>
        回到文庫
      </Link>
    </main>
  );
}
