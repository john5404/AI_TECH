# How Real AI Agents Reuse Intelligence I Guy & Simon

片長 6 分 14 秒，自動英文字幕。Guy 和 Simon。Tessl 被聽成 Tessell。`CLAUDE.md` 被聽成 Claude MD。

- 原片：[YouTube](https://www.youtube.com/watch?v=bUGvKXR1MIQ)

## 一句話

Agent 仍只是 LLM 的介面。Context engineering 就是幫你選哪些字放進那則訊息。Rules 硬塞、佔窗口。Skills 只放一小條麵包屑，好讓 agent 自己決定要不要叫。Docs 按需載入，所以可以很多。同一句話不會讓 Haiku、Sonnet、Opus 做同一件事。把 skill 當團隊資產時，要測、要發行、要有人長期擁有。

## 三種 context 付的代價不一樣

[0:00](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=0s) 每次請求 LLM，問題都是資料是什麼。各種 context engineering 都是在選對的字放進訊息。放太多，真正的指令會消失。

[0:15](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=15s) Rules 是你不管願不願意都推進 context window 的，例如 `CLAUDE.md` 或 Cursor 的 rule。它們是強制的，但佔空間。

[0:43](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=43s) Skills 像 Cursor rules：一小段資料進窗口，讓 agent 隱含地選擇要不要呼叫。你也可以像命令一樣主動叫，那樣就不需要那些提示。若期待它在相關時自己叫，就得在窗口裡留一點麵包屑。現在有人在把這件事從 agent 裡拆出去，讓它去問某個目錄。目前的現實仍是留在窗口裡。

[1:16](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=76s) Docs 是 agent 找得到的資訊，但不是自然就找得到。你要嘛用 rule 留麵包屑，要嘛把名字取得讓 grep 和其他 agentic search 找得到。它們完全按需載入，沒有先付的代價，所以可以有很多份。一千個 skills 可能真的拖累今天的 agents。一千份 docs 只是放著。問題是它有沒有在對的時間載到對的那份、找不找得到。

[1:51](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=111s) 格式可以標準，模型不是標準的。同一段 skill 文字會被不同 agent、不同模型載入。他們有重複的資料：同樣的字不會讓 Haiku、Sonnet、Opus 做同樣的動作。Opus 比較會自作聰明，說我知道得更清楚、不做。Haiku 可能需要更細的指令。Skills 目前沒解決這個。它是一個標準的 context 單位，但不保證同一組字對不同 agent 都是最好的。

[2:33](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=153s) 仍值得押上去。Tessl 在做。它們也許是現在重用 context 最標準的方式，但跟 MCP 一樣，只是拼圖的一塊。還會有各種想重用的工具和幫手，讓 agent 成功。主持人把它收成：標準提供的是能接上 agents 的螺栓，但哪個 agent、背景怎麼實作，效果會不一樣。

## 把它當軟體，不是一份 Markdown

[3:15](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=195s) 獨立開發者、業餘、open source、組織都可以用 skills 描述做法、方法和對組織重要的流程。一旦它是開發流程裡的一等公民，要考慮怎麼建、怎麼擁有、怎麼分發，並讓組織裡的專業開發者用好。

[3:55](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=235s) Skills 的誘惑是立刻有感覺。一份靜態 Markdown，用 create skill，延遲很低，當下就能用軼事看到它有用。但跟軟體一樣，一次成功和你得長期一起生活的資產是兩回事。這些是想在團隊裡重用的能力。到專業、團隊、組織的層級，最好不要把 skill 看成 Markdown，而看成一個 software unit：你要 agents 擁有的可重用能力。

[4:48](https://www.youtube.com/watch?v=bUGvKXR1MIQ&t=288s) 他要先抓三件。第一，像軟體一樣測試。要知道什麼叫對，然後在 AI 的世界裡用 evaluate 去對。第二，怎麼發行。現在可悲但容易的現實是大家把 skills 複製來複製去。它們設計來重用，我們卻複製、重複、再複製到各處。這部電影看過，知道結局。第三，長期誰擁有。它們會像文件一樣過期。模型會變，新模型會覺得自己很聰明，或者你想拿便宜的模型、開放模型來用。要想怎麼維護、怎麼保持更新、寫的人離開組織之後團隊怎麼繼續協作。這是整個生命週期。這三件是核心。
