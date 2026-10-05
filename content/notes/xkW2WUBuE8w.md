# Large-scale refactors with Agents, Robert Brennan, CEO of OpenHands

Robert Brennan 是 OpenHands 的 CEO 與共同創辦人。這場約 18 分鐘，英文自動字幕。字幕把 OpenHands 聽成 OpenHance、openance，把 Claude Code 聽成 cloud code、quad code、claw code，把 Devin 聽成 Devon，把 AGENTS.md 聽成 agents.mmd。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=xkW2WUBuE8w)

## 一句話

今天的 agent 擅長小、可以一次做完的 coding task。大型 refactor 和語言大版本升級高度可自動化，卻塞不進單一次 PR，要拆給多個 agent，並讓人留在 loop 裡審每個輸出。瓶頸多半是任務拆解、context 怎麼傳，以及人還得逐一看結果。

## 單一個 agent 為什麼做不完

[0:00](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=0s) 他要談的是大型 refactor，以及其他高度可自動化、今天卻不能 one-shot 的任務。裡面很多是工程師通常不想做的 rote work。OpenHands 是 MIT licensed 的 AI coding agent，2024 年初開始。他說若要找 Claude Code 這類工具的 open source 替代，他們是領先的 open source coding agent。他自己的背景是 natural language processing 和 dev tools。

[0:55](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=55s) 他把 AI coding 分成幾步。最早是沒有 codebase context 的 code snippet，像問 ChatGPT 寫一個演算法。大約一年後，GitHub Copilot 能看周圍的 code，生成接下來幾行。2024 年 Devin 和 OpenHands 出現，agent 不只生成 code，還能跑它、搜尋錯誤訊息，把開發的 inner loop 自動化。現在的下一步是多個 agent 一起做，或把一個任務攤開。

[2:07](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=127s) 適合很多 agent 而不是一個的例子：Python 2 升到 Python 3、整份 codebase 從一種語言改寫成另一種、大型 refactor。共通點是 rote work 很多，大到放不進單一 PR。比較像交給一組工程師，或一連串 pull request，中間多次 check-in，看方向對不對、要不要重新對齊。丟給單一個 agent 做不到，有 LLM 自己的限制，也有人的問題。人常常拆不好任務，也講不清自己的直覺，而且還得審每一步輸出。他說審核是流程裡的大瓶頸。

[3:23](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=203s) 底下的 LLM 在變好：context window 變長、inference 成本下降、比較會規劃和拆任務。他覺得更重要的是生態。Agent 不再只是電腦上的 single thread，而是 cloud-based，各自在自己的 sandbox，不會互相踩到。也出現同時調度多個 agent 的介面。人對它們能做什麼、哪裡要扶，直覺也在變好。

## 拆開、搭 scaffold、再決定 context 怎麼流

[4:09](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=249s) 單一任務的 loop 很單純。丟一個 prompt，agent 自己做 5、10 或 15 分鐘，可能沒人看，或你一直按 Claude Code 的 Y。結束後看 GitHub 上的 PR，或 VS Code 裡的 diff。接受就合併，不對就再轉一圈，叫它重做弄錯的部分。多個 agent 平行時，要先把目標拆成可以分派的任務。Python 2 到 3 可以先做這個目錄，再做下一個。各 agent 做完，再收成一張 PR，或一起合併進 main。每個輸出仍要人看。CI/CD，以及讓 agent 做自己的 code review，可以自動化一部分。人審每個輸出仍然是重要的一步。

[5:57](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=357s) 他用 git 的做法是先開一條 meta branch，把高層 context check in。可以放在 AGENTS.md，OpenHands 則有可以 check in 的 microagent。常常先放 scaffolding。簡單例子是 V1 和 V0 目錄。他遷 React 的 state 系統時，scaffold 讓兩套系統同時活著。再把任務拆開，每個 agent 負責不同目錄、component，或問題裡可以獨立做的一塊。最後拆掉 scaffold，合併進去。字幕把 main 聽成 domain。

[6:55](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=415s) 拆任務要找 agent 能 one-shot、或接近 one-shot 的單位：一個 commit，或至少一張 pull request，而且能很快驗證。最好是 CI/CD 過了，你就很有信心它做完了；或點一點 UI 就能確認。時間不夠，他只點了幾種切法。可以一個檔案、一個目錄。也可以先拉出 dependency tree，從依賴最少的開始：utility 檔先做，中間層接著，最後才到 main.py。Scaffold 再迭代的例子就是那個 React state management：兩套並行，測試在逐個 component 遷移時仍能過；全部遷完，再拆掉 scaffold，只留新的系統。

[8:23](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=503s) 另一個大問題是 context。字幕這段開頭聽成 concrete。天真的做法是全部共享：一個 agent 自己迭代做完，或每個 agent 都看得到別人的 history。太重，資訊太多，agent 很快搞混。比較常見的是人在中間傳。看到 agent A 卡在某個正在更新的 library，就告訴其他 agent 不要用。也可以手動改已經 check in 的 AGENTS.md 或 OpenHands microagent。代價是人要盯著，認出哪一條值得傳出去。更自動的做法是共享一份 AGENTS.md，叫 agent 把新資訊寫進去並 check in。缺點是 agent 有時會學到不重要的事。人當閘門時，可以只讓重要的留下。字幕把 unimportant 聽成 on important。再往前一步，是讓 agent 互相傳訊息。給它們一個 tool，可以告訴別的 agent：library 1.2.3 不好用，升到 1.2.4，也可以 broadcast。他用 OpenHands SDK 秀了一個短例子。字幕沒有把畫面上的程式碼念出來。

## 提問：context 愈多愈亂，benchmark 也還量不到

[10:25](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=625s) 有人問 context window 變長是不是真的趨勢，並提到 Eric Schmidt 對 2024 年底 context window 的預測。字幕這句不完整。Brennan 說，agent 往前走時，這大概是幫助最小的一塊。丟進去的 context 愈多，agent 愈容易混亂。大型任務最好讓每個 agent 只看到自己這一段需要的 context。就算 window 無限，把整次 refactor 做過的事全丟給一個 agent，它還是得在裡面找真正要用的那一點。

[11:50](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=710s) 另一問是訊息傳遞。提問的人用 Claude Code，人站在中間把訊息送出去，這算不算同一件事？接收端要不要開特殊 channel、停下來甚至 rewind，還是只是把更多資訊丟進正在跑的 agent？Brennan 說這個例子就是把資訊丟進 context window，跟在聊天視窗打「不要用 1.2.3」一樣。他也看過 agent 有 receive messages call、中間放一個 messages stack 的實作。他說還沒看過這件事被 productionize 得很好，仍很實驗。過程中學到的事，agent 不會自己想到別人可能已經發現同一個問題，所以把變更推過去、講明白，是有幫助的。

[13:43](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=823s) 有人提到他們在 SWE-bench Verified 上領先。字幕聽成 three pen verified。問題是這類任務太複雜、human in the loop 太多，現有 benchmark 評不好。Brennan 說他們有一位研究員在看這件事，也在讀文獻。很大的任務幾乎沒有 benchmark，因為不能完全自動化。論文若談 Python 2 到 3，或 Spark 2 到 3、連帶整批 Java transformation，焦點都是單一代碼庫：人用自己對 codebase 的直覺，讓 agent 自動化掉大部分工作。某種程度上是看這些策略讓人是不是愈做愈好。他可以想像一種更面向人的測法：把任務交給人，看受訓之後、再跟 agent 一起做，能完成多少。現場有人說昨天 SCI 發了一個 benchmark，大概就是在處理這件事。字幕沒有講那個 benchmark 的名字。

[15:27](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=927s) 他們用不用 OpenHands 開發 OpenHands？他說現在接近一半的 commit 是 OpenHands 自己做的。下一問的用詞字幕不清楚，大意是那個例子是不是完全只屬於 OpenHands，還是要做成某種 agent rings。回答是 SDK 正在做，他們在想要完全自訂，還是更接近 A2A 的 framework。有人提議做一個專門負責 context sharing 的 agent，看懂所有人在做什麼，再決定分給每個 agent 什麼。Brennan 回到時間軸那張投影片，把它留成開放問題：2026 會發生什麼？他認為 manager agent 會變成更常見的東西。

[17:07](https://www.youtube.com/watch?v=xkW2WUBuE8w&t=1027s) 最後一問：什麼叫一次 learning，學到的東西怎麼傳回去？他說人看到就知道。他看過三個不同的 agent 卡在同一段；prompt 加兩句，它們就快很多。Agent 不太會判斷什麼值得分享，所以讓人決定哪些 learning 進得去，常常比較好。也可以讓 agent 對 AGENTS.md 或 microagent 開 PR，寫下想加進 context 的內容，再由人 approve 或 deny。它們往往太容易出手：學到一件事就放進去，再學到一件又放進去。
