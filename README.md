# AI Native Dev 頻道筆記

把 [AI Native Dev](https://www.youtube.com/@tessl-ai) 的影片，依英文字幕整理成可以讀的繁體中文 Markdown。agent、memory、session、harness、Skills、context engineering、Dreaming、in-band、out-of-band 這類專有名詞保持英文。標題保持英文。

播放只用 YouTube 官方嵌入。這個專案不下載、不轉存影片檔。沒有字幕的影片只留下說明，不編造演講內容。

筆記在 `content/notes/<videoId>.md`。首頁是頻道索引，可以搜尋標題、看片長、進入筆記，或打開 `/videos/<videoId>` 對照原片。

## 本機執行

```bash
npm install
npm run dev
```

開發伺服器：<http://127.0.0.1:47291>

- `/` 頻道筆記索引
- `/notes/<videoId>` 單篇筆記、目錄、下載
- `/videos/<videoId>` YouTube 嵌入與原始字幕

## 字幕從哪來

```bash
python3 scripts/fetch_channel.py
```

清單在 `data/channel-playlist.tsv`。腳本只抓 metadata 與字幕（YouTube ANDROID Innertube，不下載影片）。有字幕的影片寫入：

- `data/videos/<id>/metadata.json`
- `data/videos/<id>/original.txt`
- `data/videos/<id>/original.vtt`

沒有字幕軌時寫 `NO_CAPTIONS.txt`，metadata 標成 `no-captions`。
