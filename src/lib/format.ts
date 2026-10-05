export function formatClock(seconds: number) {
  const safe = Math.max(0, Math.floor(seconds));
  const hours = Math.floor(safe / 3600);
  const minutes = Math.floor((safe % 3600) / 60);
  const secs = safe % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

export function formatViews(value: string) {
  const count = Number(value);
  if (!Number.isFinite(count) || count <= 0) return null;
  if (count >= 10000) {
    return `${(count / 10000).toFixed(count >= 100000 ? 0 : 1)} 萬次觀看`;
  }
  return `${count.toLocaleString("zh-Hant")} 次觀看`;
}

export function captionLabel(source: "manual" | "automatic" | null, status: string) {
  if (status !== "captioned") return "沒有字幕";
  if (source === "automatic") return "自動字幕";
  if (source === "manual") return "手動字幕";
  return "有字幕";
}
