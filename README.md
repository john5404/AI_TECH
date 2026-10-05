# Learning while you sleep

把一場演講的繁體中文字幕先讀懂，再整理成可以讀的 Markdown。專有名詞保持英文。

示範只有一支影片：[Lamis Mukta — Learning while you sleep: Beyond memory to dreaming](https://www.youtube.com/watch?v=tTcxVv8HHNw)（AI Native DevCon，2026 年 6 月）。播放用 YouTube 官方嵌入，這個專案不下載、不轉存影片檔。

整理後的筆記在 [`content/learning-while-you-sleep.md`](content/learning-while-you-sleep.md)。首頁會渲染這份文章。機器翻譯把 Dreaming 譯成「夢想」、agent 譯成「經紀人」、harness 譯成「安全帶」、in-band 譯成「樂團」；筆記對照英文原稿，這些專有名詞保持英文。逐句字幕仍留在 `data/videos/tTcxVv8HHNw/`。

## 本機執行

```bash
npm install
npm run dev
```

開發伺服器：<http://127.0.0.1:47291>

首頁是筆記。`/videos/tTcxVv8HHNw` 是原片與同步字幕，用來對某一句。`/notes/download` 下載同一份 Markdown。

## 字幕從哪來

```bash
python3 scripts/ingest.py --video "https://www.youtube.com/watch?v=tTcxVv8HHNw"
```

指令只抓 metadata 與字幕軌（`yt-dlp --skip-download`，失敗時改走 YouTube player API），然後把英文句子翻成繁體中文。確認之前不要再收另一支；腳本會拒絕，除非加上 `--allow-another`。

如果這台機器被 YouTube 擋下 player API，帶一個 HTTP 代理再跑：

```bash
YT_HTTPS_PROXY=http://host:port python3 scripts/ingest.py --video "https://www.youtube.com/watch?v=VIDEO_ID"
```

有字幕的影片會寫入：

- `data/videos/<id>/metadata.json`
- `data/videos/<id>/original.vtt`、`original.txt`
- `data/videos/<id>/zh-Hant.txt`、`zh-Hant.vtt`、`zh-Hant.srt`

沒有字幕的影片只會在 metadata 標成 `no-captions`，並留下一句說明，不會編造逐字稿。

翻譯不需要 API 金鑰。`scripts/ingest.py` 使用 Google 翻譯的免金鑰介面（`client=gtx`，`tl=zh-TW`）。若已安裝 `opencc-python-reimplemented`，會再用 OpenCC `s2tw` 把殘留簡體整理成繁體：

```bash
python3 -m pip install --user opencc-python-reimplemented
```
