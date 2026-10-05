import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { NotesSidebar } from "@/components/notes-sidebar";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { listNoteIndex } from "@/lib/notes";
import "./globals.css";

const sans = Noto_Sans_TC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  display: "swap",
});

const serif = Noto_Serif_TC({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Native Dev · 頻道筆記",
  description:
    "AI Native Dev YouTube 頻道的繁體中文筆記。依英文字幕整理，agent、memory、harness、Skills、context engineering 等專有名詞保持英文。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
          <NotesSidebar notes={listNoteIndex()} />
          <div className="min-w-0 flex-1">{children}</div>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
