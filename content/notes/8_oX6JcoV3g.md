# Scaling AI Agents on Large Codebases Without Chaos | Sean Roberts

片長 10 分 11 秒，自動英文字幕。Sean Roberts。中間有幾段沒被摘到。Tessl 被聽成 Tesla。

- 原片：[YouTube](https://www.youtube.com/watch?v=8_oX6JcoV3g)

## 一句話

Agent experience 是一門做法，不是一個工具。只因為要支援 agents 就做一個 MCP server，想得太窄。大型 codebase 上，他要知識圖譜先把架構關係整理好，人介入過的地方寫回 context，以及一個他叫 agent therapy 的迴圈：跑歪了就問下次該改哪份 context，再試一次。

## 先問團隊實際在用什麼

[0:00](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=0s) 若你想的是「要支援 agents，所以我需要一個 MCP server」，那把問題想得太窄。這些解法都在 agent experience 這把傘下。另一個現實是，我們對今天什麼有用有很多想法，明天會證明它們是錯的，然後繼續迭代。我們就在正中間。

[0:37](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=37s) 若團隊還是一堆單人樂隊，或根本沒在做，就從弄清楚開始。覺得「我的團隊在用 AI、我們是 AI native」不夠。去問他們在用什麼、什麼有用、什麼沒用。不必是大工程。做一份 Google 表單，或用 vibe coding 做一個，問他們用哪些 agents、什麼順利。不要問一年前、兩年前問的那個問題。那個舊問題是什麼，這句沒留住。

[1:24](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=84s) 這很重要，至少因為 AI agents、工具和組合很多。你接下來要做的改進，也會讓人對 codebase 和問題的理解變得不一樣，並開始長出內部社群，朝 agent experience 走。中間有一段沒被摘到。

## 依賴文件、知識圖譜、以及人介入過就要寫回去

[5:10](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=310s) 還有依賴文件的問題：第三方模組，甚至第一方但分開的模組。他說十次有九次會搞砸，今天把這件事做對的工具並不好。他寫這段時，看到 Tessl 的 registry 那些做法，覺得很興奮。Guy 對此講得很細。後面他說越想最佳化會越難，但大家一起在摸，沒關係。Context7 也有人用。他碰到過問題，那句沒說完。

[7:47](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=467s) 知識圖譜在這裡有用。你可以事先做出對整體架構的理解：東西怎麼相關，並做成摘要。Agent 做事之前先查那裡。對較大的 codebase 很有幫助。

[8:02](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=482s) Feedback loops 會非常重要。內部社群若已經在一起，就跟他們說：每次出問題、人必須手動介入 agent 的流程，就把那次寫下來，放進 context。若你每次都得問那個待了 15 年、部落知識都在腦子裡的資深工程師，而那次回不去文件或 context，他不知道你在做什麼。那就是內部的 feedback loop。你得有強迫機制，讓 agents 懂。它們不像你，不一定問得到那個有年資、資訊都在腦子裡的人。

[8:52](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=532s) 他喜歡的一個做法是一個 MCP。Agent 明顯跑歪時，讓它回頭看：這裡我們本來可以做得更好嗎？他叫它一場 agent therapy。下次要做對，該改什麼，特別是更新 context 檔。若當時說得通，就讓它再試一次。他說結果很好。

[9:33](https://www.youtube.com/watch?v=8_oX6JcoV3g&t=573s) 他假設大家已經在 codebase 和 CI 裡用 AI review。他不深入講那個。他要加的一層是：審查工具不只指出哪裡錯，也建議 context 檔裡缺了哪些模式，那些模式本來可以阻止這件事以後再發生。句子在這裡結束。
