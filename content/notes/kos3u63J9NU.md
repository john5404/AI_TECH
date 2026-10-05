# Al Harris-Evolving specs in Kiro to deliver incremental features faster, safer | DevCon Fall 2025

DevCon Fall 2025。片長約 25 分鐘，英文自動字幕。講者 Al Harris，Amazon 的 principal engineer，Kiro 的 tech lead（字幕把 Kiro 聽成 Kira、Kro、Kuro、Curo）。他和 Rene 以及另一位工程師把 Kiro 從頭做出來，公開大約四個半月，這一週 GA。主持人 Simon 說產品開發一年出頭、開放約四個月，早期太搶、大約 10 萬次下載後先把 preview 關過。Al 說 GA 的意思主要是可以比較正規地收錢。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=kos3u63J9NU)

## 一句話

Al 不把 spec-driven development 看成 context engineering 的別名。在他這裡，specifications 是 codebase 的 control surface：一組會進 repo 的 artifact，加上一條替你推著 agent 走的 workflow，目標是可重現的結果。Kiro 內部試了大約七次才留下現在這套。週一的 0.6.0 加上 properties，把 EARS 需求收成 invariant，再生成 property test。

## Spec 是控制面，不是再求 agent 一次

[1:42](https://www.youtube.com/watch?v=kos3u63J9NU&t=102s) 現場大約一半的人覺得自己做過 spec-driven development。Al 賭大家叫的不是同一件事。Spec 這個詞已經超載。他稍微不同意當天早上 Guy 的說法，也就是 spec 等於 context engineering。他要的是：你用規格去控制 codebase。這條線從產品一開始就沒變。

AI 開發的麻煩他講了三件。[2:25](https://www.youtube.com/watch?v=kos3u63J9NU&t=145s) code quality 忽高忽低，今天一個 golden patch，明天體驗很差。控制很有限，你在求 agent「我不是這個意思」。agent 很會做小任務，把工作拆成小的、可重複、看得懂的範圍，責任在人。

他們為了 spec-driven development 大約試了七次，裡面有 ephemeral specs、hierarchical specs、TDD-based specs，名字最後都得掛上 spec。想留下的是：你用自然語言跟系統的某個 component 或 module 互動，系統自己把後面接上。最後上船的流程是：specs 代表你想交付的系統狀態。vibe coding 蓋住的是 implementation，你要它做什麼它都可以做。他們要 specs 蓋住整段 SDLC，把傳統的嚴謹帶進 AI 開發。

他心裡的定義有兩半，Kiro 出貨時是 artifacts 加 structured workflow；現在要走到的是 reproducible results。

## 三份 artifact：requirements、design、tasks

[4:08](https://www.youtube.com/watch?v=kos3u63J9NU&t=248s) 用 Kiro 的 spec mode，會被推著產出一組 artifact，建議 commit 進 repo，或放到你想放的地方。三份是 requirements、design、tasks。他說前一天 Alex 講 backlog.md，重疊會很高。這不是在推銷 Kiro，demo 只是把 spec mode 打開。

Requirements 像團隊裡的 PM，或你要拆給其他工程師的工作。[5:02](https://www.youtube.com/watch?v=kos3u63J9NU&t=302s) 有一段 intro，是你給客戶的問題摘要；一份 glossary；然後是 requirements，每條帶 acceptance criteria。demo 是做一個 meal tracking CLI。每條 AC 可以被指到，例如 requirement 1.2：CLI 要能接受一筆 meal。形式是 user stories，acceptance criteria 用 EARS，Easy Approach to Requirements Syntax，高管制產業裡常用。他拿來，是因為這是結構化的自然語言，之後可以用經典的、非 LLM 的工具去推理。這組能力隨週一的 GA 出來。

[6:12](https://www.youtube.com/watch?v=kos3u63J9NU&t=372s) 需求滿意了才進 design。他這次沒改需求，直接讓它寫 design doc。模板只是一份，可以隨便改，裡面有 high-level system design、modules、interfaces、security、testing strategy。0.6.0 新加的是 properties：系統裡不管發生什麼都該為真的 invariants。證明它們成立，你才有信心 requirements 在做完之後仍被滿足。demo 裡範例用法先是 `node CLI.js` 加參數，他改口要一個有名字的 command。聊天可以隨時對 design、requirements 或 task list 說。refactor 時他可能在意這段怎麼嵌進既有 codebase；greenfield 就跳過細節，只談 interface。

[8:37](https://www.youtube.com/watch?v=kos3u63J9NU&t=517s) Tasks 最接近 backlog.md。給定 design，拆成可以實作的 tracer bullets，可以巢狀，但他們不鼓勵 agent 拆太深。讀起來像丟給工程師的 Jira 或 Asana 任務（字幕把 Asana 聽成 sauna），而且會緊緊指回被解決的那條 requirement。上線後加了 optional tasks。接近 vibe、但又想邊走邊審 design 時，可以開他說的 MVP mode，不生成 unit tests。property tests 也可以跳過：實作時很貴，但對你在交付的東西信心很高。

[10:05](https://www.youtube.com/watch?v=kos3u63J9NU&t=605s) 第二根柱子是 structured workflow。過去 36 小時很多人在講自己的步驟。他想讓工具替你做，不必先成為 expert operator。圖很簡單：三個節點，每個節點都能跳進 iteration，再走回去。沒畫出來的是，你隨時可以回去改 requirements、design 或 tasks。不要太死，但要由系統把 LLM 和 agent 推過這條流程。

## 週一加上的可重現，以及 EARS 變 property test

[10:57](https://www.youtube.com/watch?v=kos3u63J9NU&t=657s) 他最興奮的是 reproducible results，0.6.0 做兩件，現場他接著講成三步。第一，對 requirements 找模糊，問你問題把歧義收掉。這些問題還不一定會直接露出來，後面會有。後端有 automated reasoning。他拿 Guy 早上的例子：你說要一顆藍色按鈕，或只說要一顆按鈕，系統不知道那是 accept、secondary 還是 alert。需求若太曖昧，agent 會幫你把範圍縮小。第二，把 design 裡的關鍵決策圈出來，跟你轉到雙方都懂，或你說不在乎、讓 agent 丟硬幣、繼續走。第三，工作切成一口大小，理論上小到可以單獨 commit。Kiro 團隊自己的標準是：specs 一個 commit，之後每個 task 一個 commit，code 可以一小塊一小塊審。即使不是那樣 push，它們仍是各自獨立的 commits。

[12:41](https://www.youtube.com/watch?v=kos3u63J9NU&t=761s) EARS 基本上是 subject 加 predicate，glossary 先定義詞。例子是交通號誌：while the traffic control system is operating，control module shall maintain the invariant that at most one direction displays green。任何事件順序、任何中斷，最多一個方向是綠的。全紅可以，兩個綠不行。Kiro 把它收成 design 裡的一條 property，一種 safety invariant：任何操作序列、任何時刻，最多一個綠燈，並寫明它驗證 requirement 2.3。表面上看只是把需求換句話說。接下來依你的函式庫選 property-based testing framework。Python 用 Hypothesis，Node 用 fast-check，你有偏好可以叫它換。他也提到 clojure.spec（字幕聽成 closure spec）。

[14:21](https://www.youtube.com/watch?v=kos3u63J9NU&t=861s) 現場只有三個人寫過 property-based tests。他說這東西很強，也非常痛苦，stopping conditions 和 bounding conditions 都很難。像大家都喜歡 BDD，直到真的要用 Cucumber。不熟的話可以想成：測試 runner 自動定義輸入空間，你定義行為。他隨口舉的例子並不好：可數的數相加應該等於兩數之和；或把數字加倍之後 modulo 2 應該是 0。重點是把搜尋空間和驗證邏輯拆開。shrinking 是這類函式庫的秘密：跑很多樣本，找出一個反例就夠說需求沒被滿足。找不到的話，要麼可能的測試宇宙是壞的，要麼測試寫得差。這兩件都有處理的 pattern。property 測的是對的東西、而且過了，你就比較有信心：code 裡的東西就是你說要交付的東西。Kiro 考慮大約七類 invariants，他點了 safety、timing、data correctness。這是過去幾週最大的出貨，週一才熱騰騰出來。

## 任務的 context、不能本地跑，以及舊 spec 怎麼改

問答先問：切成小塊時，context 給夠不夠、知不知道該看哪。[17:19](https://www.youtube.com/watch?v=kos3u63J9NU&t=1039s) 他們現在把目標的全部 context 放進去，也就是 design 和整份 task list，當成背景，再加上 rules、norms、AGENTS.md（字幕說 agents MD）和 steering files。真正下達的任務是 execute task x.y，不要做後面的 tasks，不要超出 brief。像把技術設計丟給團隊裡的 junior，叫他做 payments widget 那一塊。他承認這有點 naive，還能再改。

[18:15](https://www.youtube.com/watch?v=kos3u63J9NU&t=1095s) 沒有 local models。多數事情 model 可以自己選。demo 用的是 auto。當天有 Sonnet 4.5、Haiku 4.5（字幕說 Sonnet 4,45、Haiku 45），也許還有幾個 Nova models，他們還在設法把 Quinn 放進來。

有人問複雜系統的問題空間很大，model 怎麼找到讓 property test 仍然有效的約束。[19:07](https://www.youtube.com/watch?v=kos3u63J9NU&t=1147s) 有時會出事。上線前那個週末，一位 PM 的測試跑了 8 分鐘。生成式輸入時，你選的函式庫會明顯影響效能。問題空間的縮小和定義必須很緊地一起走。沒有萬靈丹。這功能先前約在一百人身上試過，現在要放到多很多的使用者。意見可以到 GitHub 或 Discord。

[20:00](https://www.youtube.com/watch?v=kos3u63J9NU&t=1200s) spec 怎麼產生可以改。MCP 最好懂：產品團隊把目標都放在 Asana，他不想複製進 Kiro，就接上 MCP，讀指派給自己的 tasks，收成一個或多個專案，再生成 specs。執行任務時也可以用 MCP。design doc 和 task list 的結構都能改。task list 比較怪，因為有 highlight，某些 pattern 還有 checkbox。他們只是建議這是最好的起點。

線上問題來自 AI Native Dev 的 Discord：幾個月前出貨的功能要改，是新開一份 spec，還是改舊的？[21:40](https://www.youtube.com/watch?v=kos3u63J9NU&t=1300s) 他說每人意見會不同。他的建議、也是他要團隊做的：若是在改既有的東西，就去改既有的 spec。他們會相當積極地刪掉超過幾週的 specs。畫面是 Kiro extension，他也在試著接 Tessl 的 grounding specs（字幕把 Tessl 聽成 Tesla）。例子是 message history sanitizer：系統若進入無效狀態，就把它踢出去。他要加一條規則，Levenshtein distance 太近的訊息要去重。這張 PR 會改 requirements、改 design，並拿出新的 tasks。不必把三份大文件丟給團隊審，審的是 diffs。它會讀現有 artifact，找到 sanitizer 那份再改。

最後一問：背後有沒有一份全域的資料，記住 data models 和實體之間的關係，還是每份新 spec 都自己去挖該改哪？[24:10](https://www.youtube.com/watch?v=kos3u63J9NU&t=1450s) 他們不會自動幫你做。他建議看前一天 Lada 的投影片。用 memory 或 steering 自己做並不難。steering 就是 memory，或他說的 Claude 的 context。互動結束時問：你從這次學到什麼、下次要記住什麼，寫進 steering doc，下次再載進來。
