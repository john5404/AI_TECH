# Integrating Tessl with Claude Code

片長 43 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tessle 或 Tesla，把專案根目錄聽成 route；下文用 Tessl、project root。

- 原片：[YouTube](https://www.youtube.com/watch?v=VlLmI_FE68k)

## 一句話

專案 init 之後，用 `tessl setup agent` 選 Claude Code，讓 CLI 自己接上 MCP。Claude 一開就會看到 Tessl MCP server。

## 步驟

[0:00](https://www.youtube.com/watch?v=VlLmI_FE68k&t=0s) 專案裡已經初始化 Tessl 之後，建議再把它接到你要用的 AI coding agent。這支片接的是 Claude Code。

[0:12](https://www.youtube.com/watch?v=VlLmI_FE68k&t=12s) 在專案根目錄執行 `tessl setup agent`。它列出可選的 agent。他選 Claude Code，讓 Tessl 自動設定 MCP。之後執行 Claude，它會直接載入 Tessl MCP server。

[0:33](https://www.youtube.com/watch?v=VlLmI_FE68k&t=33s) 接上之後，下一步是用 spec registry 或 Tessl framework。
