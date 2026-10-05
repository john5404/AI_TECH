# What Developers Can Build Next With AI

Simon Maple 把四段舊訪問剪在一起：Baruch Sadogursky、Liran Tal、Alex、Josh Long。片長約 69 分鐘，英文自動字幕。四個人當時預計會到紐約布魯克林，11 月 18、19 日的 AI Native Dev 會議。折扣碼 Simon M50，票價降到 90 美元。一天是 workshop，第二天是議程和走廊裡的交談。字幕裡的報名網址沒聽完整。節目由 Tessl 呈現。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=e58tAc0yxzQ)

## 一句話

四段講的是同一件缺口：AI 會寫，但你不能把沒看過的東西當成已經做對。Baruch 要一條 intent integrity chain，規格編譯成測試，測試鎖住，再讓猴子打到通過。Liran 說建議的修補沒有整條 code path，雙重編碼就能把你打穿。Alex 用 Backlog.md 把 vibe coding 收成可退回的小任務，工具本身不呼叫 agent。Josh 說多數人不是在訓練 model，是把 AI 掛到已經用 Spring 跑著的業務邏輯上；demo 裡沒有 system prompt 時，認狗的助手會去算 2 加 2。

## Baruch：別看別人的 code，也別信任猴子

[1:21](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=81s) Simon 說這段是今年二月在斯德哥爾摩 AI Focus 跟 Baruch 坐下來的。兩人對 AI 會怎麼改開發想得很近。剪進去的是從「我們想自動生測試，因為不想看 code」開始。Simon 幾週前在 DevOps UK 的 keynote 說開發者仍會是創造者，只是更多看規格、更少看 code。最後一張是 keep calm and carry on。有人很擔心：那表示我們不再看 code。那個人愛寫 code，安全區是 IDE。

[4:50](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=290s) Baruch 說不想看的，主要是不是自己的 code。人自私，聽別人說話時已經在想怎麼回答。他愛自己的 code，不太想看你的 review；一個月前自己的 code 也像別人的。AI 生成的就是別人的 code。片頭還有他後來說的那句：別信任猴子寫 code。

[6:33](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=393s) 他解釋 TDD 沒有接管世界，BDD 更少見。BDD 把測試寫成 spec：given、when、then。人讀得懂。但非技術的人想寫莎士比亞，不想寫僵硬結構。Simon 補，BDD 的意圖和後面沒有硬連接，會像 PRD 一樣過期。AI 可以從文件列出那些 given-when-then。猴子和打字機會打出莎士比亞，LLM 只比隨機好一點。第一遍不能信。Cucumber 這種可解析的 spec 不需要猴子：演算法每次都把規格編譯成同一份測試。測試要保護好，因為猴子會改測試讓它過。然後才把猴子放出來，打到測試通過。從發想到成品可以百分之百信任，因為意圖的完整被保證進了 code。他管這條叫 intent integrity chain。

這段剪到這裡就停。

## Liran：修補建議看不到上游

[18:51](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=1131s) 下一段是 Simon、Liran Tal 和 Ashish 的安全圓桌。Simon 說 AI 工具有時有幫助，有時讓事情更險；結果會誤導、不決定性，你得看資料和相依底下真正是什麼。片頭先放了 Liran 的一句：現在就有 AI engineering 團隊並不早，LLM 已經在我們之間，有時它們假裝成 Java LLM，那種不要信。

[19:33](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=1173s) Simon 問依賴建議的修補有什麼風險。安全是今天的題，但上一場談的是效能，同一件事很多領域都適用。Liran 說修補來自統計模型，以及它以為自己有的 context，context 常常不對。一離開 benchmark 的範例 repo 和 to-do app，就需要大量 context 和 code flow。例子是在處理 URL，它建議做 URL encoding 或 decoding，那一步本身是對的。上游另一個 service 或 controller 已經 encoding 過，就變成 double encoding，漏洞在等。它若不會追 code path，你就中了。所以不能只是統計模型。真實漏洞多半串在一起：prototype pollution 到 code injection，到 command injection，再開一個 shell。Demo 裡單一個 XSS 不是那樣。也許以後 model 和 agent 會把幾種學習跟另一套邏輯灌在一起。以現在來說，還不到可以放心交給它修。

圓桌後段還回到團隊怎麼變。片頭那句就是從這裡剪的：AI engineering 團隊現在就該有，因為 LLM 已經在場。AI security engineer 則還太早，連怎麼好好保護都不清楚。

[30:14](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=1814s) 圓桌結尾有人問 social engineering。Ashish 舉一個：開發者想知道他的薪水，因為他在網路上顯得很高級。現在的說法是要有某種 data access manager，依角色管不同身份能碰什麼。他覺得 AI 世界反而可能做得更好，因為你更知道資料在哪、是什麼、誰能拿、該拿來做什麼，而且是實作，不只是政策文件。有趣，但也很早：還沒看過規模化的 AI 攻擊，不知道 social engineering 會長成什麼樣。Simon 說下一場幾分鐘後開始，把他們請下台。

## Backlog.md：規格要小到關得掉一個視窗

[31:24](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=1884s) Alex 是在 Devoxx Belgium 訪問的。Simon 說他是 Backlog.md 的主要作者。Alex 在維也納一家遊戲公司當 lead engineer。白天是敏捷、Scrum，需求用故事想好幾個月，後端團隊和手機團隊一起做，人與人之間，沒有 AI。業餘才追 AI。Backlog.md 是他給自己的試驗：讓 AI 在他的任務裡寫百分之百的 code，並且盡量自主。

[33:39](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2019s) 起點是 side project。他一直 prompt，結果很差，那就是 vibe coding。他回頭看工作上讓人合作做出遊戲功能的流程，想搬到 AI。最重要的是 spec。不只是你要的功能，還有周圍的：安全規格、CI/CD 規格、該用的語言，C#、TypeScript、Java 或其他。這些 context 要在開始前就在。他當時用 Claude（字幕聽成 cloud、cloud MD）。問題會在每個任務上重複：agent 達到目標，但來回很多；下一個任務又把同樣的指示和同樣的問題走一遍。每次新 session 都想在 context window 裡做完盡可能多的事，這不會擴。視窗一關，context 沒了，下次還得重搭，而且你可能忘了上次用來擋問題的指示。Vibe coding 可以造成很大傷害，把會弄壞 production 的變更部署出去。Guardrail 對人也需要：安全規格、檢查點、staging 裡測這些措施。一到 vibe coding，大家突然把這些忘了。

[37:02](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2222s) 他先手動做一份巨大的 markdown，放進所有規格和想做的功能。問題是 context 太大，一注入，agent 也許有效也許沒有，成功率不好，有時得 rollback，但整份產品或整份功能很難退。Simon 說這還遠不到 context window 的上限，只是給的 context 一多，結果就明顯變差。Alex 說有的 agent 有 compaction：把之前的對話做成摘要，從最小 context 再開始。摘要裡的指示只剩當初的一半，你不知道它漏了什麼，多半得重來。

[38:25](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2305s) 下一步是把大檔拆成小任務，像 Jira 或 Linear（字幕聽成 Lina）。一條任務只定義要建什麼，寫成 markdown。人和 agent 都讀得懂純文字加格式。Agent 更有效，單一任務也好退。一開始手動。大約 50 條之後，他像任何想偷懶的工程師，做成 Backlog.md，用終端機建立任務。

[39:36](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2376s) 安裝可以走 bun（字幕聽成 ban）、npm 或 brew，要裝成全域，不必每個專案重裝，任何資料夾都能用。他說 bun 裝相依很快，會場 Wi-Fi 也行。跑 `backlog` 會提示：建立任務、列出、看 board、開瀏覽器、看統計和文件連結。Demo 是在 Backlog 自己的專案裡跑，已經有幾百條任務。Board 是可設定狀態數的 kanban，預設 to do、in progress、done。任務靠 git 在多條 branch 之間同步。他舉 task 200：指派給自己、設成 in progress，推上 feature branch 之後，別人在 main 上的 Backlog 也看得到。可以當協作工具。依 branch 過濾的邏輯對開發者是藏起來的：它該夠聰明，找出最新更新時間的那一筆，那就是最新狀態。若你不小心改了一筆，也會讓它變成最新版；正常使用不該這樣。

[42:16](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2536s) 進任務看得到 ID、標題、metadata、相依。相依會阻止 agent 去做還沒準備好開始的任務。描述講為什麼做這個功能。他想做、但還沒做的是終端機裡的拖放：像 Jira 那樣把任務從 to do 拖到 in progress，用 shift 加方向鍵，人不必離開終端機。Acceptance criteria 是核心：可測、好驗證、可度量，是這一條任務裡更小的增量。做完會打勾。一條已完成的任務是 OpenAI Codex（字幕聽成 open eye codeex）接過去的。還有 label，之後可篩。Implementation plan 是 spec 開發的一部分：先問 agent 打算怎麼做，你再審。Implementation notes 是永久 context，人或 agent 以後想知道這條任務發生了什麼，就讀它。另外有任務列表、搜尋、依狀態和優先順序篩。他搜 Tailwind，畫面上其實沒有關於 Tailwind 的任務。還有給想要畫面的人用的 web UI。

[46:13](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2773s) 對 agent 更重要的是 plain mode。`backlog task 200 --plain` 把同一份資訊用純文字印出，agent 該用這個。前幾條任務的格式是他手動想的。四五條之後就有 CLI 可以建任務，於是他用 Backlog 遞迴地管理 Backlog 自己的任務。Backlog 本身不產生規格，也不預設連到 agent。你要自己開 Claude Code、Codex 或 Gemini CLI（字幕聽成 jamina），告訴它：我要做這個功能，用 Backlog 的 CLI 追任務、拆成子任務。附帶的 agent 指示會教它怎麼用。拆分是 agent 決定的，再寫進 Backlog。工具本身要盡量小，不要擋路，是人和 agent 放在旁邊用的東西。Simon 收這段時說，拆分幾乎是 Claude 決定的，再寫進 Backlog。

## Spring AI：掛上已經在跑的業務，並把話留在認狗

[48:35](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=2915s) 最後是 Josh Long，Spring advocate。Simon 在 Devoxx UK 遇到他，兩人認識大約十五年，Simon 說自己從 2011 年就是粉絲。Josh 記得 virtual JUG，他覺得超前十年，要一場疫情全世界才跟上。Simon 說現在將近兩萬人。Josh 從 2010 年就在 Spring、Pivotal、VMware、Broadcom 這條線上。Simon 說這段有把 AI 放進線上業務 code 的起伏、生產環境的故事，以及怎麼避開常見路障，還有現場寫 code，幫人在 Java 環境裡開始。進這段之前他又提一次 11 月 18、19 日紐約，代碼 Simon M50。

[51:01](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=3061s) Spring AI 是他說的 AI engineering 一站式。Java 和 Spring 社群位置很特別：多數人會把 AI 當成跟既有業務邏輯、應用、服務的整合，而那些是 Spring 寫的，在 JVM 上，Kotlin 或 Java。人只想把 AI 掛到那段 code 上。驅動業務的邏輯和餵給業務的資料，是 Spring microservice 在管、在編排。自然的起點是讓 model 碰得到那些資料和邏輯。有人會用 Python 訓練新 model，但那不是大多數人，就像大多數人不會用 C 自己寫 SQL 資料庫。生產上要可擴、快、安全、可觀察，他說 JVM 沒有別的東西像它。

[52:38](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=3158s) Spring 是 framework，上面是 Spring Boot，再上面是各種垂直：microservice、batch、integration、data、security，其中一個叫 Spring AI。1.0 曾希望 GA，他先說 3 月 20 日，又改口 5 月。中間一度以為快 GA，AI 這塊又變了。團隊都在做，是最忙的開源專案之一，star 像曲棍球棒往上，GitHub issue 和貢獻也是。每次以為要安定、要 GA，又掉進一個新範式。Simon 說光聽就以為已經 GA。Josh 說它成熟、有人在用、一直在長，但他們想等到要緊的東西都在。玩笑是：一週沒變化，或 5 月 20 日，哪個先到。錄的時候是 5 月 7 日，連兩週都沒有。也可能是 5 月 27 日，那就晚了七天。他們乾脆說今天就算發佈了，去拿新鮮的 bits，也許已經有第一個修補。要快，沒關係。但要把 AI 的創新，配上 Spring 一直在用的那種習慣：portable service abstraction，把你和不同 chat、image、transcription model 的差異隔開；dependency injection；aspect-oriented programming；Spring Boot 式的 auto configuration。他先說三根柱子，又說是四根。你已經懂 component model，只是把那些理解用到新領域。

Demo 的狗不是比喻。Josh 用一則爆紅的領養廣告當素材，再把 Spring AI 接上那份狗的資料。

[55:36](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=3336s) Demo 因為時間緊，做一個幫人領養狗的簡單助手。他常講狗。他自己的狗叫 Peanut，不是最好的，但是他的。疫情時他認識另一隻更衝的狗 Prancer。主人試了好幾個月，沒辦法把牠寫得可口，因為市場上不太有神經質、恨男人、恨動物、恨小孩、長得像 gremlin 的狗。她寫 Chihuahua 梗圖是 50% 恨、50% 發抖。她本來比較喜歡牠安靜躺在沙發上的時候；等牠出殼，她相信牠不是真的狗，比較像一個受創的維多利亞時代小孩，附在家裡。牠才兩歲，大概會靠純粹的怨恨活到 21 歲。廣告爆紅。Josh 放了 People、USA Today、BuzzFeed、New York Times 都在講這隻 demonic Chihuahua。多數人不是在網路上這樣找到狗，是去收容所跟某人談，面試出夢想中的狗，或這次的惡夢。他要做那個助手。start.spring.io 上已經有狗的資料庫，Prancer 的 ID 是 45，在 Postgres。應用叫 assistant。他選 OpenAI，因為 model 好、很多人碰得到，但不是唯一。在他說的重視資料隱私的歐洲，也許更想用 Llama，或 Bedrock、Gemini。官方支援幾十個；沒官方支援的，多數講 OpenAI API，可以經由那個整合去連。還有 web、Spring Boot Actuator。Vector store 畫面上有一長串，他選 PGVector，因為已經有 Postgres，那是一個 plugin。Simon 確認這些相依會進 Maven 的 pom，建置時把 Java 相依拉進來。Josh 發現忘了 DevTools。他改用 milestone M7，因為 M8 改了什麼，他已經不記得慣用做法。他說這是在下載整個網際網路，先以為是會場 Wi-Fi，又說不是，他在直播。IntelliJ 若在加上 DevTools 之前就開啟專案，就不會啟用那個整合，所以他事後補上，再重來一次。

[1:01:28](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=3688s) 應用是一個 controller，使用者打 inquire。Chat model 經 OpenAI 連，key 已經用環境變數匯出，Spring Boot 會把它對上你看到的那個 property，但連的時候仍要自己指定。資料源是 JDBC 的 Postgres，本機，使用者名稱和密碼他在畫面上設成 demo 用的值。Chat client 可以有很多個，背後是同一個 chat model。他注入 builder，放上預設，用使用者的 request parameter 當 prompt，叫 `call.content`。先忽略畫面上一個 user path variable。使用者打 inquire，問題進 chat client，再進 OpenAI，答案回來。它說很高興見到 Josh，問今天能怎麼幫。Simon 說這表示有撥號音了。再問「我叫什麼」，它說沒有這份資訊，已經忘了。Josh 說要把 context 每次送回去。做法是設定一個 advisor：每個使用者一張 map，用 chat memory advisor。沒有就新建，先存在記憶體。這個介面還有別的實作，可以寫到 Neo4j、JDBC，他覺得 Redis 的也在來。Advisor 像 filter，是送給 model 的請求的前處理。對話會依使用者存成逐字稿，之後每次請求再送回去，model 才記得談過什麼。再問一次，它說你叫 Josh。

[1:05:44](https://www.youtube.com/watch?v=e58tAc0yxzQ&t=3944s) 這也是問題。問 2 加 2，它答了。它不該幫人寫作業，它該幫人領養狗。他們跑偏了。Simon 說很多公司遇過這件事，他想到有一家，也許是 Amazon 的助手被人 prompt poison，拿去生 code，而不是做它該做的。Josh 說他們有任務，要人去領養狗，除非你是在問兩隻狗加兩隻狗。所以加 system prompt，定整體的語氣。他貼上的是：你是 AI 助手，幫人從一家叫 Pooch Palace 的領養機構認狗，據點在安特衛普、首爾、東京、新加坡、巴黎、孟買、新德里、巴塞隆納、舊金山和倫敦。關於可領養狗的資訊會放在下面。若沒有資訊，就禮貌地說目前沒有狗。Simon 賭就算把 2 加 2 放進那個 prompt，它仍會答。Josh 說當然，但他們不想要。System prompt 會試著把所有回應框進那個任務。他們再問。Simon 說有幫助，把它拉回路上；AI 總是想幫忙，它有背景資訊，也有一段特定 context，不代表它會忘掉其他資訊，它仍知道怎麼回答。字幕沒有把認狗那次的完整回答念出來。Simon 接著收尾，說四段都是舊講者，他期待 11 月 18、19 日在紐約再見到他們。人不在紐約可以看主舞台的串流，登記 virtual only；議程也會錄下來，之後放到 AI Native Dev 的網站。
