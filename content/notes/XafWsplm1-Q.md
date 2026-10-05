# Generating code from a spec

片長 1 分 46 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tessle，把 Claude Code 聽成 clawed code，把 spec-driven 聽成 specd driven。

- 原片：[YouTube](https://www.youtube.com/watch?v=XafWsplm1-Q)

## 一句話

有了 Tessl spec 之後，先裝 usage specs，再讓 Claude 對那個 spec 跑 Tessl MCP 上的 build，產生 TypeScript。他先在 terminal 看核心功能，再用改 spec 的方式改外觀，而不是直接改生成出來的 code。下一步才是從 spec 的需求寫測試。

## 這支片的順序

[0:00](https://www.youtube.com/watch?v=XafWsplm1-Q&t=0s) 已有 Tessl spec。他先下載 usage specs，讓 agent 有建構需要的 context，然後 build，產生應用程式的 code。過程中 Claude 找出專案裡的 specs，對那個 spec 呼叫 Tessl MCP server 上的 build tool。

[0:26](https://www.youtube.com/watch?v=XafWsplm1-Q&t=26s) Claude 想跑測試。他先視覺上看，暫時不寫完整測試。接著請 Claude Code 寫一段用完可丟的 code，當 terminal 的進入點，再編譯生成的 TypeScript。

[0:49](https://www.youtube.com/watch?v=XafWsplm1-Q&t=49s) terminal 裡他只看核心功能對不對，不測邊界。他玩了一局輸、一局贏。

[1:09](https://www.youtube.com/watch?v=XafWsplm1-Q&t=69s) 迭代是改 spec。這次他要的是 styling。改完回到 terminal 再測。他說這種很快的改和測，讓他能維持 spec-driven 的做法來開發。

[1:36](https://www.youtube.com/watch?v=XafWsplm1-Q&t=96s) 應用已經從 spec 生成並且跑得起來。下一步是依 spec 的需求做測試，讓它變穩。
