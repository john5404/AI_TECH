# Tessl 繁中文庫

AI Native Dev（[@tessl-ai](https://www.youtube.com/@tessl-ai)）的私人繁體中文收藏。播放使用 YouTube 官方嵌入，這個專案只保存字幕、逐字稿與 metadata，不下載、不轉存影片檔。

目前是**一支影片的示範**。確認之前不要再收下一支。

示範影片：[Lamis Mukta - Learning while you sleep: Beyond memory to dreaming - AI Native DevCon June 2026](https://www.youtube.com/watch?v=tTcxVv8HHNw)

## 本機執行

```bash
npm install
npm run dev
```

開發伺服器：<http://127.0.0.1:47291>

## 收錄一支影片

```bash
python3 scripts/ingest.py --video "https://www.youtube.com/watch?v=tTcxVv8HHNw"
```

指令只會抓 metadata 與字幕軌（`yt-dlp --skip-download`，失敗時改走 YouTube player API），然後把英文句子翻成繁體中文。

如果這台機器被 YouTube 擋下 player API，帶一個 HTTP 代理再跑：

```bash
YT_HTTPS_PROXY=http://host:port python3 scripts/ingest.py --video "https://www.youtube.com/watch?v=VIDEO_ID"
```

收藏裡已經有影片時，再收**另一支**會被拒絕。確認之後才加 `--allow-another`。

每支有字幕的影片會寫入：

- `data/videos/<id>/metadata.json`
- `data/videos/<id>/original.vtt`、`original.txt`
- `data/videos/<id>/zh-Hant.txt`、`zh-Hant.vtt`、`zh-Hant.srt`

沒有字幕的影片只會在 metadata 標成 `no-captions`，並留下一句說明，不會編造逐字稿。

## 翻譯

不需要 API 金鑰。`scripts/ingest.py` 使用 Google 翻譯的免金鑰介面（`client=gtx`，`tl=zh-TW`）。若已安裝 `opencc-python-reimplemented`，會再用 OpenCC `s2tw` 把殘留簡體整理成繁體：

```bash
python3 -m pip install --user opencc-python-reimplemented
```
