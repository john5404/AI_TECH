# How Engineering Teams Automate Quality at Scale

片長 9 分 10 秒，自動英文字幕。這段沒有把講者名字念穩。他們談的執行模型字幕寫成 ripper 5 或 riper。中間有幾段沒被摘到，下面不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=4JKzfCdwiSo)

## 一句話

把 AI 當初級工程師。不給完整需求，它不會自己想出來。幾百個用 C 寫的 metrics，不能對 Cursor 說「全部遷到新框架，順便改成 SQL 加 YAML」。人要先把山切成可驗證的相似任務，再讓 agent 做那些片段。覆蓋率從不到 60% 到大約 93.5%。

## 成熟度，以及不要一次丟整座山

[0:00](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=0s) 一開始有人說用了某個工具就贏了，也有人在受苦。那是他們開始試 unsupervised agents 的時候。你在跟一個 LM 互動，它得有你正在做什麼的 context。這個 ripper 5 模型做的是告訴 LLM：問我問題，分析你現在所在的 codebase。

[0:21](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=21s) 把 AI 當基礎的初級工程師。不給完整需求，它不會弄懂。幾百個用 C 寫的 metrics，要拆成一批相似、可以標準化驗證的任務。

[0:43](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=43s) 社群的好處是經驗和採用程度差很多。成熟度模型他本來是給團隊用的，但有一個維度是個人生產力，你可以對自己怎麼從中得到價值做反省。這句之後摘錄跳到結果。

[3:16](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=196s) 加上覆蓋之後，結果大約是 93.5%。一開始遠低於 60%。很多 diff 落地，聽起來是很大的生產力。主持人請他介紹這個叫 ripper 5 的框架。對方說公平講，這不是他第一個想到的。中間又跳了一段。

[4:19](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=259s) 問題是它會從研究跳進寫 code，或從規劃跳進寫 code，或正在寫卻沒有在規劃。ripper 5 給的是一組可以傳進去的指令。再跳一段之後，主持人把它收成：這是你跟 LLM 一起工作的執行模型，而且是和開發者配對做的。

## Context 快用完時，以及遷移怎麼切

[6:48](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=408s) 大約到 90% 的時候，你再問 AI，它會給短答案，因為它想在 context 用完前擠出東西。你可以在 prompt 裡告訴它：context 快結束了，別擔心，你可以 compact，請給我最好的答案。這是一個有用的技巧。

[7:11](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=431s) 若只說「這是我的環境，遷移它，做計畫，自己做」，會出問題。幾百個 metrics，每個底下是一堆 C。Context 不總是在你需要的地方。就算對 Cursor 這種當時最好的工具說：把所有 metrics 遷進新抽象、新框架，順便從 C 改成用 YAML 寫 metric flow 的 SQL，他們發現這樣不行。要有牽引力，得把那座山拆成小塊，拆成可以用標準方式驗證的相似任務。

[8:11](https://www.youtube.com/watch?v=4JKzfCdwiSo&t=491s) 然後做一份長任務清單，分階段。第一階段先移這五個 metrics，然後下一階段。誰在做？人在選任務清單：第一階段遷哪些、第二階段遷哪些。人也決定目標架構。人再借助 AI 工具，把要交給 coding agents 的 context 組起來，讓它們去做那些片段的遷移。
