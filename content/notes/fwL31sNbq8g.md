# Google, McKinsey & Dave Farley on AI Code Review

片長 11 分 14 秒，英文手寫字幕。剪輯。生成一個變更要 30 秒，讀它要一小時。中間有幾段沒被摘到。有一句模型分數字幕沒有上下文，不把它寫成評分結果。

- 原片：[YouTube](https://www.youtube.com/watch?v=fwL31sNbq8g)

## 一句話

Google 的 Jack Wotherspoon 談 drive-by pull request：你三十秒把 stack trace 丟給 agent，維護者仍得看 code，而開 PR 的人沒打算回來。一個人生成自己不懂的一堆 code 時，三件事會分開：他對系統的模型、系統本身、同事的模型。Dave Farley 說只跟電腦聊天不夠，他要的是比自然語言更精確的說法，而不是自己再逐行寫 code。

## 三十秒的 PR，維護者仍要看

[0:00](https://www.youtube.com/watch?v=fwL31sNbq8g&t=0s) 六月倫敦有一條沒人完全計畫過的線：生成一個變更要 30 秒，讀它要一小時，審查和信任會怎樣。

[0:14](https://www.youtube.com/watch?v=fwL31sNbq8g&t=14s) Google 的 Jack Wotherspoon，做 Antigravity CLI。他是 developer advocate，過去五年在 Google 做 open source，做過 Google ADK，也就是 Agent Development Kit，最近是 Gemini CLI。用 AI 拆掉障礙應該是贏，讓人更容易貢獻。他看很多的是 drive-by PR。你在用一個函式庫或框架，出事了，你有錯誤訊息，知道這是 open source，就把 stack trace 丟進去、clone repo、叫 agent 修。你這邊大約 30 秒。

[1:32](https://www.youtube.com/watch?v=fwL31sNbq8g&t=92s) 他們會先用 agent 審 code，但仍會到維護者看 code、然後帶著所有安全漏洞把它送出去的那一步。然後他們留回饋，也許改這兩件事。Drive-by PR 真的是：有人 prompt 了它，但沒有預期自己要跟進或做任何事。也許一開始的判斷是「我可以試著修」，但他們不會回來。

[2:19](https://www.youtube.com/watch?v=fwL31sNbq8g&t=139s) 第二種是 agents。他舉十個 subagents 的短例子。審所有那些生成的 code 不會只花 10 秒。

[3:24](https://www.youtube.com/watch?v=fwL31sNbq8g&t=204s) 一個人生成一堆自己不懂的 code 時，三件事會漂開：他們對系統的模型、系統本身，以及同事的模型。

[4:40](https://www.youtube.com/watch?v=fwL31sNbq8g&t=280s) 那要做什麼？把訊號對噪音壓縮。不是那三十頁他不一定想看的意識流。中間有一句說這會是 Codex 的 5、某個 Opus 的 1，沒有足夠上下文，不把它當成分數。

[7:28](https://www.youtube.com/watch?v=fwL31sNbq8g&t=448s) 這個設置是十個寶可夢 agents 同時跑，每個 1,000 輪，而且在學。它一直在搭便車。這像是拿你的 1,000 個 sessions 再寫一則觀察。他不太喜歡那個想法，原因就是他在講的那些。它幫我們把對一個問題的思考組織起來嗎？句子不完整。

## 只聊天不夠

[9:19](https://www.youtube.com/watch?v=fwL31sNbq8g&t=559s) Dave Farley 說，若你有他這樣的灰鬍子、待得夠久，大概遇過有人從上面下來，給一群程式設計師很模糊的指令，然後離開，再對結果很失望，因為沒有講得夠細。這很常見。目標到底是什麼，很容易誤解。

[10:01](https://www.youtube.com/watch?v=fwL31sNbq8g&t=601s) 只有 vibe coding 不夠。若只是跟電腦聊天來表達需求，那不夠。我們需要工具，讓我們比那樣更精確、更具體，把想達成的事 prompt 得更好。那不表示我們得看所有 code，也不表示只能用程式語言做。他已經很久沒有用手寫任何 code，因為 AI agent 寫所有 code。但在某些方面，他比自然語言更精確。他用一種精確、規定性的自然語言來說自己要什麼，才能得到要的東西。他說這就是他在講的。

[10:57](https://www.youtube.com/watch?v=fwL31sNbq8g&t=657s) 片尾約十一月紐約的 AI DevCon。
