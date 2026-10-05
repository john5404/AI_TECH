# Finding and installing usage specs

片長 84 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tessle，函式庫寫成 fast MCP 或 fastmcp。版本號字幕聽成 2122，不改寫。

- 原片：[YouTube](https://www.youtube.com/watch?v=cBsDCwpHEcE)

## 一句話

在 Claude Code 裡搜 Tessl spec registry，為 fastmcp 裝一份 usage spec。這個函式庫在 registry 裡有 10 份 usage spec。他打開其中講 authentication 的那份，讓 agent 知道 API 和預期用法。

## 步驟

[0:00](https://www.youtube.com/watch?v=cBsDCwpHEcE&t=0s) 要 agent 用對 open-source library、用對版本，就得把函式庫的 context 給它。

[0:14](https://www.youtube.com/watch?v=cBsDCwpHEcE&t=14s) 從 Claude Code 開始。他要做一個新的 MCP server，決定用 fastmcp，於是叫 Claude Code 搜最新的 usage spec。搜尋走先前接上的 Tessl MCP，打到 spec registry。找到一份，字幕裡的版本是 2122，然後裝到機器上，下載到檔案系統。

[0:48](https://www.youtube.com/watch?v=cBsDCwpHEcE&t=48s) registry 裡一個函式庫可以有一份或多份 usage spec。fastmcp 這次是 10 份。他看 authentication 那份，內容是 API 和 intended usage。他說這對 agent 用 fastmcp 寫 code 是必要的。
