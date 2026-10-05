# 4 Agent Skill Pitfalls (and the Fix): Context Development Lifecycle

Baptiste Fernandez，Tessl 的 developer advocate。週四晚上的一場。片長約 31 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=TYDOqlDtu0I)

## 一句話

瓶頸從 code 移到 context。無限 context 救不了你。他要的是一套 context development lifecycle：產生、用 evals 測、散到其他團隊、再看 agent 哪裡會錯。Skill 最常壞在 description 太模糊、什麼都做、太肥，以及寫給人看而不是寫給 agent。

## 小模型加上對的 context

[0:00](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=0s) 他說上個月在 Reddit 紅過兩次，一次因為對、一次因為錯，社群意外地客氣。同事和他看 Opus 4.7 出來之後，給了 context 表現如何，拿它跟較小的模型比。九個模型、十一個 Node.js agent skills。早期發現是：Anthropic 一個小得多、成本上划算的模型，給對 context，表現差不多一樣。一半的人很高興，另一半不是。重點不是他們對錯，是碰到了一根神經，工程師現在就在想這件事。

[3:47](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=227s) 他看到四個問題。一，不知道什麼叫好了。不是 code quality，是做法：工程師之間、團隊之間怎麼工作，還不清楚。二，code 生得太快，他和同事常在部署自己沒再看過的 code。他們在乎品質，模型也在變好，但有一股事情會爆的感覺。三，agent 在替 review 做決定。四，安全是大問題。現場有軟體工程師、engineering manager、VP，還有 founder 和 data scientist。玩過 agent skills 的人不少，Claude、Codex、Gemini 都有人舉。

[4:54](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=294s) 他不是技術本科。讀經濟學，在 Uber 做 strategy，碰到 SQL，再到 TikTok 做 analytics、Python 和一點 data science，現在做 developer advocacy。到 2026 年，他覺得自己近三個月的開源貢獻大概超過此前一輩子。他不說那就是品質，而是訊號：愛好者現在做得出、部署得出更有意思的東西。

## 產生、評估、散出去、再看它搞錯什麼

[6:24](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=384s) Context 這套想法他站在 Patrick Debois 肩上。Patrick 造了 DevOps 這個詞，和 Gene Kim 寫過 handbook，現在是他同事。Tessl 相信 2026 年工程師會這樣做。先產生 context：函式庫該怎麼用、某個流程怎麼走、小團隊要守的 convention。然後像舊的 test-driven development，確認它說得通。2026 年那一步是 evaluations，簡稱 evals：評估 context 本身，也評估 agent 用了 context 之後的輸出。滿意之後讓其他團隊用得上，跨部門。他舉他們跟 Neo4j 談過的安全做法 convention。最後是觀察，lifecycle 因此成環：agent 做了我們要的嗎，誤解了什麼，即興了什麼，或什麼時候沉默了。再把 context 重寫。

[8:37](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=517s) 三句：瓶頸從 code 到 context；context 需要自己的 development lifecycle；infinite context 不會救你。團隊和企業他看成飛輪，圖是 Patrick 生的，也可以叫 context opportunity。自己做出的 context 先在團隊裡分享，規模夠了再跨職能，最後變成 institutional wisdom。組織裡的 API convention 可以先由 engineering leader 定義，講清楚、政策和 convention 談妥、商業決定做完，再評估 context、評估 agent 怎麼用它、輸出是什麼。圍繞它建情境，確認能跑，然後部署、治理、把安全放上。幾天前在 AI Engineer London，Patrick 講得更細，那場差不多也紅了。

## 兩種評分：寫得好不好，以及情境裡行不行

[11:01](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=661s) Anthropic 對 skill 的定義：一種 markdown，模組化的能力。每個 skill 打包 instructions、metadata 和 resources，agent 在相關時使用。測 context 和輸出，他們現在分兩桶。第一桶是結構：agent 會不會在對的時候啟動它。這叫 review，看寫法對不對得上 Anthropic best practices，結不結構、會不會太密。第二桶他覺得更有趣。VP 定了一條 convention，要確認在某幾個情境裡它照你說的做。你產生情境，pressure test。

[13:09](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=789s) 現場他用 Claude，也說可以用 Codex，叫它用 Tessl review 這個 skill，背景跑，同時開 UI。Tessl 他定義成 package manager：替 context 做版本、評估和治理，這裡先講 AI skills。他們相信 agent 時代的 context 比 skills 廣。UI 上是 Cisco 團隊寫的軟體安全 skill。品質對着 Anthropic best practices，大約三個面向：specificity、完不完整、trigger terms 好不好，agent 才知道何時用。Name 的小寫清楚，沒問題。有空間的是 description，也就是 skill 怎麼被啟動。他的第一條建議：description 是 activation function，最多人漏掉。

[15:41](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=941s) 再看情境。Cisco 想確認密碼雜湊用 Argon2。沒有 skill 時，frontier 的 Opus 4.7 做得不好；有 skill 也不好。Skill 還有得改。另一條「不要 hard-coded secrets」：Opus 4.7 本身不太行，加上 skill 就行。他叫 Tessl 去優化。後來優化覆寫了原本的 skill，front matter 改了，篇幅他猜也會縮一點。字幕沒有給優化後的分數。

[16:59](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1019s) 公開的用法在終端就做得到。產品對準企業：治理、私人 repo。很多 context 最後會是私有的。Tessl 是在這層上看 AI coding agent 怎麼被使用、放大、用 context 改進。2026 年 roadmap 上有 agent enablement 的人，他歡迎會後聊，或上 Tessl.io。

## 四個坑，和開源裡 40% 的 merge

[17:50](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1070s) 他們向開源生態outreach。瞄準 1,000 個 repo，更新了快 10,000 個 skills，開出一批 PR：對着 Anthropic best practices，結構對不對、寫太多沒有、重不重複。有人高興，有人健康地推回來。一個大維護者，repo 他叫 obra superpower，做 agent skills framework。那位不認同 Anthropic 的做法，認為第一桶的靜態分析不夠，要 pressure test。Baptiste 說那正是第二種 eval：產生你要的情境再測。以他做過 cold outreach 的經驗，40% 的人 merge，他覺得這轉換很好。

[20:02](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1202s) 四個坑。Vague descriptions。壞的例子是「這是一個對 code review 和品質改進有幫助的 skill」，沒說是不是 Python。好的會寫成：用專案規則跑 ESLint，標出型別和 safety 違規。Tessl 的 skill review 可以做這步。God skill 什麼都做，agent 不知道何時啟動，啟動錯了，表現更差。Context bloat：他看過得砍掉一千行的 skill，因為高度重複。最後，skills 是給 agent 的。開源裡常看見人寫給人，解釋什麼是 REST API，那些是浪費的 token。

[21:31](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1291s) 他還補一點：你需要工具來管，因為 skill 隨模型、隨當下的 context 而變。每個 skill 都不一樣，啟動它們的每個模型也不一樣。你若是 Hermes agent 的人，就得確認在你那裡能跑。他自己偏 Claude。啟動率他覺得有啟發。

## 文件寫得好，仍要評估；模型不同就分開版本

[23:19](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1399s) 有人問：這不就是把指示寫給別人時判斷不好嗎。流程和 how-to 若已經寫清楚，每個任務都容易做成 skill。他同意，只加一句：你怎麼確定系統真的寫得好。就算對象是人，也要評估。他們為開源做了 GitHub Action，有人改進 skill 就觸發這些 evaluation，進到 CI。

[24:47](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1487s) 另一問是 skill 依測試時的模型而定，要不要在 catalog、metadata 或 markdown 註解裡寫「這份 skill 在這些條件下優化過」。他給兩個答案。Versioning 很重要。治理要跟着團隊的 convention、policy、practices。一個團隊評估過，覺得用較小的 Haiku 又便宜又適合這個用途，就有理由繼續。另一個團隊預算大，想用 frontier，可以把同一份 skill 拿去對 Opus 4.7 評。也許一樣好；也許就他們在乎的情境，該用另一個模型，於是另做一份 skill，兩份並存。也可能大家用同一份，只是版本舊了。模型是 non-deterministic 的。他們想把一點工程帶回來。從 DevOps 和 test-driven development 拿來的是：你餵進去的、拿出來的，都可以評估。

[26:51](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1611s) 讓團隊做起來，他講三條，角色那張投影片沒有逐格念完。今晚自己開終端試一次，先有個人的手感。Tessl 裡有 AI Native Dev 社群和 blog，寫新模型跟 skills、context 的關係。Manager、團隊、VP 會不一樣：對着 generate、test、distribute、observe，再回到產生。他們在辦 6 月 1 日和 2 日倫敦的會，社群優先、practitioner 帶，有演講也有動手寫。開場那四個問題是主題。還不知道怎麼用 agent 建東西：OpenAI、Netlify 的 CTO、Meta 的人，談怎麼當 AI native developer。沒辦法驗證生成的 code：Docker 前 CTO、Base 和 Cisco 的產品 VP，談 spec-driven development。AI 把 code 寫得更快、然後要協調：Tessl 也是 Snyk 的創辦人，題目是 skills 是新的 code；ThoughtWorks 的 distinguished engineer Birgitta Böckeler；Patrick Debois。安全，AI 是新的攻擊面：Snyk、Gemini CLI 的 DevRel 負責人、GitHub security。QR code 有折扣，字幕沒有念出代碼。

[29:54](https://www.youtube.com/watch?v=TYDOqlDtu0I&t=1794s) 收尾：SDLC 在變，他們相信升起的是 context development lifecycle。支柱是把 test-driven development 的想法放進流程，evals 分成結構與啟動，以及 pressure test。帶 50 人或 2,000 人的 engineering manager、VP、team lead，這是 agent enablement 問題。省成本的機會是：也許一個 skill 配較小的模型就夠，資料在朝那邊指。Code 是 artifact，context 是 asset。他說若哪裡講錯，Reddit 上再見。
