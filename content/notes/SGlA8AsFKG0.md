# Tessl’s Solution to Overconfident Agents | Guy Podjarny & Simon Maple

片長 7 分 6 秒，自動英文字幕。Guy Podjarny 和 Simon Maple。Tessl 被聽成 Tesla。片尾網址聽成 del.io，不寫成連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=SGlA8AsFKG0)

## 一句話

Agent 很強，但會衝去寫腦中第一個解法，而且常常是錯的。兩個產品都在解這個。Framework 用 MCP 逼 agent 先把意圖寫成 spec 再寫 code，之後一條指令從 spec 生測試，當成回歸。Spec registry 把知識做成專案的依賴，裡面已有超過一萬份、按版本分開的 usage specs。

## Framework：先把意圖和實作分開

[0:06](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=6s) 用 agent 開發的人看過：它們強，也不可靠。你要一件事，它們衝去寫第一個想到的解法，常常是錯的。有人因此進不了 agentic development。他們覺得 specs 和 spec-driven development 能處理很多這類問題。兩個產品都在解這個。

[0:41](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=41s) Framework 透過 MCP 接到 agent，支援所有支援 MCP 的 agent。它引導 agent 在建造之前把意圖寫進 spec。你說「做一個 to-do app」，它不會直接跳進 code，而是先用 Tessl 的工具和引導，用一個快、好懂的格式寫出要做什麼，然後才去建。

[1:14](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=74s) Simon 說這不是每天，也許是每小時。兩種。一種是指令沒完全懂他的意思，因為他喜歡短 prompt，短才有速度。另一種是在大應用裡要一個小改動，它卻去改別的地方，還把範圍擴大。所以第一個目標是把意圖和實作分開，把「做什麼」收進 spec。你對意圖和做出來的東西都滿意之後，Tessl 給一條指令生成測試。Spec 一開始就是帶著很多當例子的測試案例設計的。那些定義再拿去做成測試。Agent 得多做一點：架測試環境，有時要迭代，但相當自主。一旦能動，它們就是回歸測試，避免你改一處、弄壞另一處。

## Registry：過度自信的 API

[2:47](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=167s) 第二個產品是 spec registry。痛點是 agent 有時不知道，而且不知道自己不知道。它們過度自信。最明顯的是第三方或 open-source library 的 API。主流、它們知道的，很厲害。偏一點、熱門函式庫的舊版、或訓練時還不存在的新版，它們就邊做邊編，用假的或有缺陷的 API，有時卡在那裡燒時間和錢，出不來。有時最後弄懂了，但又慢又貴，還留下有點亂的實作。

[3:55](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=235s) Simon 用 Java 世界說：函式庫過很多年有太多 API 變化，模型最會的是最熱門的那版。他不是總用最熱門的，有時是舊 stack，有時是 bleeding edge。這不完全是幻覺，而是它假設你在跑某一版，卻沒有用對的 context 來生成。Guy 說這就是 context 問題：對的資訊沒有在對的時間出現。有時是真的沒有，例如全新版本。有時是統計上不夠顯著。有時是它們不可能有的，例如團隊自己的 best practices。

[5:05](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=305s) Registry 把那份知識做成專案的一部分。新的依賴系統是給知識、給 specs 的。專案裡多一份 manifest，指向某些 spec packs，也就是帶著在這個 codebase 工作所需資訊的 spec 套件。Open source 這邊，registry 預先放了超過 10,000 份 usage specs。它們是分析特定版本的函式庫程式，加上網路上的使用資訊，而且知道版本，包成 agent 好消化的知識塊。是分好章節的 Markdown，拆成多個檔，讓 agent 在對的時間載對的那份。例如你用某個舊版函式庫，就用 registry search 找到 usage spec，加進 manifest，像 `node_modules` 一樣下載到專案。然後用 Tessl 的工具，或 agent 自己，就能找到並正確使用。你知道這份資訊在、對這個專案是對的、所有 agent 都拿得到。你不依賴它們自己發現該去找，或找錯。Stack 或做法變了，給 agent 的資訊也變。

[6:23](https://www.youtube.com/watch?v=SGlA8AsFKG0&t=383s) 兩個產品一起，是他們說的 spec-driven development 的一部分。片尾的網址字幕沒有聽清。
