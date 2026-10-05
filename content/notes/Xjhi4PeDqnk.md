# AI is reshaping software development with Viktor Qvarfordt

Viktor Qvarfordt。字幕把公司聽成 SA：他在那裡帶工程超過六年，是早期員工，團隊大約 50 人，做兩個產品，一個學習平台、一個 agent 平台。他原本以為正文大約 20 分鐘，後面是問答。整段約 36 分 50 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Xjhi4PeDqnk)

## 一句話

軟體工程師該把自己看成 agent operator 和 system designer，而不是主要在寫語法的人。若你 check in 的程式多數仍是自己寫的、不是 LLM 寫的，他就會要你停下來想。模型在訓練分布裡的一般全端工作很順，在真正新的研究上則很差。人留下的是品味、架構，以及把問題講清楚。

## 留在它見過的分布裡

[1:46](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=106s) 心態要先換。你是 agent operator：設計工作流，讓機器做寫語法這種雜事，然後逐步做更多。你仍在引導。他也要大家分清工具在哪裡好、哪裡不好。做一般前端、一般全端的朋友，覺得一切愉快，LLM 生出的 code 很相關。學術圈的朋友在寫模擬、用 code 證定理，也就是在做根本新的研究，LLM 在很多情況下意外地差。一般軟體工程落在訓練資料的分布裡；根本新的東西模型沒見過，相對就差。人容易高估它的泛化。若一直加 prompt 還是不好，也許該停。找出對 LLM 自然的做法，靠近它見過的東西。訓練資料是人類寫過的大量文字，所以看起來像會泛化。空間變得很快，工具也該換得很快。

[4:50](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=290s) Codegen 在小專案裡清楚很好，那些很紅的 no-code 生成工具就是這樣。進到較大的 codebase，Cursor 會吃力；他說 Cursor 有一篇在談大 codebase 可以怎麼做。字幕前一句聽成 small、後一句才是 larger，這裡採他接著要講的那個。Cursor rules 非常有用。現場很多人固定用 Cursor 或同等工具。有人用得比 Cursor 更勤。他猜是 Windsurf、Cline 或 Zed；現場點到 Windsurf、Augment、Continue。

[5:58](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=358s) 人好找的結構，LLM 也好找。這些優化對人同樣說得通，因為人還在引導工具。他要清楚的介面，以及每個 feature 自成一個資料夾。他用 Unix 路徑對上 Mac 的 `.pkg` 來比：相關的東西放在一處。Code 和文件放在一起，在很大的 codebase 裡指定 context 會容易很多。可以模組化，甚至分層。前端不要把 hook 和 component 拆到根目錄不同的資料夾，拉近那個 feature。他仍相信 monorepo，但介面要乾淨。

[7:41](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=461s) 人越來越貢獻品味和意見，定方向和架構。把價值、意見、設計模式寫進 Cursor rules，甚至當成新人 onboarding 的 source of truth。新人問從哪開始，他叫對方直接問 codebase 裡的 Cursor。它會去讀相關 README。這也是在測結構對 LLM 清不清楚：問這段 code 做什麼，若答不尖銳，就去修文件或結構。另一個有點反直覺的模式是把 code 寫得更平，不要過度抽象。人被訓練成把一切抽成小函式，可以抽太過。

## 跨出專長，以及讓工具自己跑

[9:08](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=548s) 用 codegen 的連帶效果，是讓每個人走出自己的專長，在某種程度上都變成 fullstack。他覺得這已經在分開高產和低產的團隊。後端工程師碰不到前端、還要對另一個團隊的 roadmap，就會卡住、變慢。有細微差別：他們的 backend infrastructure 工程師離前端太遠，很少有理由去碰；做像素級 UI 的人也不會去改 schema migration。

[10:50](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=650s) 第一個產品是 Kotlin 後端、TypeScript 與 React 前端。第二個 agent 產品故意整條用 TypeScript，前後端用 tRPC，型別好共用。新創或要快迭代時，他想讓一個人從資料庫 schema 一路握到前端。Code 能捧在手上，會比對日程、對 roadmap 有生產力。今天 Cursor 若簡化來說最擅長局部、沒有資料庫那種狀態的前端。後端的人加了一個型別、表單上要看得到，Cursor 直接做掉。他個人覺得 Cursor 平均最好，但替代很多，而且一直在換。

[12:42](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=762s) MCP 很熱。他剛看到 OpenAI 把 MCP 加進 Responses API，接上 server 就能在 API 裡用。他覺得 MCP 某種程度上是一個實作得很糟的 API：多數 server 只是標準輸入輸出，單人、一台電腦很好，production 裡用不了。也有 SSE 的做法。概念仍然好，因為它標準化怎麼把 tool 暴露給 Cursor，實作不能擴展也沒關係。他們 check in 的例子裡，browser tools 讓 Cursor agent 看到正在跑的瀏覽器：debugger 裡聚焦的元素、網路錯誤、console。迭代迴圈不只看到 lint，也看到真正的 runtime error。管很多 GCP 資源時，GCP 的 MCP 也好用。他希望工具盡量自動跑，並靠 lint、好的型別這些靜態檢查。IDE 會撿到。要不要勾那些自動執行的選項，看你有多疑心。

[15:23](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=923s) Cursor 的 background agent 還在 preview，很快 GA。它會在雲端起一個 IDE。他跟那邊的人聊，很多人內部在跑 o3，思考模型，很慢。任務重，不想坐著等，也不想開五個 Cursor 視窗。方向是 Devin 最初在做的事。他覺得 Cursor 很有策略：先停在工程師現在的位置，再逐步自動化、放到背景。現在推出，表示他們相信 LLM 開始穩到可以這樣用。Cursor rules 在大 codebase 能定範圍，仍然有用。但他更偏好型別和 lint：嚴格、有保證、人也看得見。有些模式只能用比較含糊的自然語言寫。

## 扁平、重寫，以及人剩下的品味

[17:37](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1057s) 他給了一個刻意的例子。人被教成把 `get username`、名、空白、姓抽成小函式，再放到不同檔。抽多了，人和 LLM 都難找。簡單的就 inline，人讀也輕鬆。現在更重要，因為 LLM 很缺 context。函式在別的檔，這段在做什麼不清楚，還得去查，一切變慢。這是在順著 LLM 的傾向，好壞都有。它們愛寫很平的 code。同一個 component 用幾次，它寧可重寫，或把 class name 展開。要平衡。他在自己和別人的 codebase 看到組合變少：由上往下線性讀，不要在很多檔之間跳。抽象變得沒那麼重要，也許是因為以後 code 會比較少被重用、比較常整段重寫。便宜、快，也像 LLM 的天性。

[20:13](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1213s) 工程師從 programmer 變成 agent orchestrator 之後，寫出來的 code 會多很多，對 code 的需求也會上升。程式員這份工作會被換掉。但要有人去帶、去操作未來的程式員，也就是 LLM。這個角色的需求會很高。人人都想要一百倍的行數，工程師會換一種頭痛。

[21:01](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1261s) 前端正從 styled-components 換到 Tailwind。更短，更重要的是又 inline 了。上面的 card 在下面被用到，有語意名字，很好；但宣告和使用放在一起、全部 collocated，LLM 好處理得多。有人問樣式怎麼同步。兩條路。Lint 規定哪些 class 可以用，這是靜態保證：擋掉奇怪的顏色，強制用自己的 class。另一條是把設計哲學寫進 Cursor rules。兩者混合。真實情況裡，card 仍可能是一個被重用的 component。

[22:37](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1357s) 他收成幾條。檔案放在一起，模組化，monorepo 裡做出乾淨的階層。Code 更平，少在檔案間跳。把架構決定和系統設計偏好寫成文字。人貢獻品味：什麼叫好。然後讓 LLM 照著跑。讓每個人走出專長，往 fullstack 移。工具要很好拿。他們開了 Cursor 的 business plan，大家登入就用、不必自己報帳，用的工程師多了一些。把門檻放低，很快地試不同東西。工程師的優勢會在怎麼導航、怎麼編排這些工具。

## 問答：問題定義、審查，以及高風險時的測試

[24:17](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1457s) 有人問下一個詞是不是大家都變成 manager，或 agent manager。他當天早上試了 Google 前一天發布的東西，字幕聽成 Judas，他拿來比 Devin 或 Codex，也比 background agent。他丟了一個任務，要對一個競爭相當激烈的 repo 做扎實的閱讀，幾分鐘後解完。一天五個任務，像半職的 junior。他變成那個 agent 的 manager：把任務結構寫好，讓它自己做。這和 Cursor 裡人一直在場不一樣。Viktor 說各大 lab 同時在放更自主的 coding agent，表示這件事開始行得通。Devin 大約一年前推出時大家很興奮，真的上手之後就沒那麼好玩。越往後會越自主。若在做分布外、根本新的事，還得牽著手。若只是 UI bug，或前後端之間的 data plumbing，自主很快會很強。工作變成把問題定義得明確、正確。他讀過數學：解題有一半以上是把問題寫出來。這裡也一樣。

[27:16](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1636s) 扁平 code 會不會傷到重用，重寫變多之後，讀 code 的人怎麼辦。他說要看你對未來有多敢想。一種看法是，今天這種軟體不會再是主體，剩下資料庫和 API，UI 為每個人、每個部門、每個團隊現生。他遇過的每個業務團隊都討厭自己的 CRM，但底層資料很基本。讓他們在一份根本的資料庫上用生成的 UI。很長的以後也許幾乎即時生成；中間步驟是一個有點技術的人，為一個用途生成一次，團隊拿去用。審查可以交給 LLM。他們賣給大企業，要守 SOC 和 ISO，等於規定審查必須很嚴。他又想很快。他的意見是：若資深、能幹的工程師覺得這是明顯的修，不必再叫另一個人看。合規的做法是 check in 的人標風險。低風險就由 LLM reviewer 看。

[29:54](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1794s) 有人問會不會為了 LLM 改架構，例如 context 較小、好替換的 microservice。他點的決定是 TypeScript 全端和 tRPC，讓型別一路傳下去。他不太喜歡 microservice，因為他要工程師很快做端到端的改動。一次改動要部署一、二、三個服務，就是在給自己設障礙。人要 microservice，常常是為了分離關注點。那就是 code。先在同一個服務裡分開。若理由是「我不夠有紀律，所以需要另一個服務」或「會亂，所以拆出去」，問題在別處。在 codebase 裡模組化，假裝它是另一個服務、假裝從別處啟動，他覺得能拿到九成好處，又沒有分開部署的痛。他說自己簡化很多。

[31:48](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=1908s) LLM 不是利害關係人。該不該在意模型從哪來，或我們塞給它的複雜度。他把要緊的事寫進文件和 Cursor rules，但不能總相信它會遵守。問的人指出，他們的審查要兩個不同的人看懂 code 才進得去，所以他知道需要人審。他承認。若只是寫 CSS，他比較不介意用中國的模型，例如 DeepSeek：中文世界的 CSS 和他說的 American CSS 很像。更一般地，信任 LLM 到什麼程度，就和信任人一樣。第一次互動會懷疑交出的東西。來回幾次、每句都說得通，過一段時間就不查了。信太多會被燙到。你讓很資深的後端工程師進 production database，不是因為對方是人，是因為互動一致、誘因對齊，像一場賽局。他說站在台上必須簡化，細節無限多。

[34:14](https://www.youtube.com/watch?v=Xjhi4PeDqnk&t=2054s) 最後一問是已經在 production、有人用、創造業務價值的 code，工程師不願意動。生成的東西變大之後怎麼驗證。他分兩類。一類是穩的系統，使用者多，大致靜態，只做小改動。另一類是小新創，每天都在改。這場他比較從第二類講。賭注很高、必須很緊時，測試會多很多。Agent 上的 TDD 很強：測試先在，你改測試，然後退開，讓 Cursor 或其他 agent 能跑測試、能改 codebase，迴圈直到測試過。賭注高就得坐在旁邊驗證，或請它寫測試。你可以寫，也可以讓它寫。回到問題定義：範圍、問題或解法要講清楚，讓它寫測試，你確認測試說得通，再讓它寫實作。
