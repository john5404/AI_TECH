import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "cn";

const files = [
  { file: "zh-Hant.txt", label: "繁中逐字稿 .txt" },
  { file: "zh-Hant.vtt", label: "繁中字幕 .vtt" },
  { file: "zh-Hant.srt", label: "繁中字幕 .srt" },
  { file: "original.txt", label: "原文逐字稿 .txt" },
  { file: "original.vtt", label: "原文 .vtt" },
] as const;

export function DownloadLinks({ id }: { id: string }) {
  return (
    <div className="flex flex-wrap gap-2">
      {files.map((item) => (
        <Link
          key={item.file}
          href={`/api/videos/${id}/download?file=${item.file}`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
