# AI-First Project Management for Developers | Alex Gavrilescu on Backlog.md

Simon Maple 在 Devoxx Belgium 訪問 Alexandru Gavrilescu。片長約 45 分鐘，英文自動字幕。字幕把 Devoxx 聽成 Deox、DevOps，把 Backlog.md 聽成 Batlog、Battlelog，把 CLAUDE.md 聽成 cloud MD。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=3-W0Et-X5Ew)

## 一句話

給 agent 足夠做單一任務的 context，它仍不認識你的專案。Alex 白天在維也納一間遊戲公司當 lead engineer，流程是人與人的 Scrum。晚上他逼自己讓 AI 寫 100% 的程式，才做出 Backlog.md。重點不是再寫一個更大的 prompt，而是把規格拆成 git 裡的小任務，讓人和 agent 用同一套 CLI。

## 每個新 session 都把同一件事教一遍

[1:20](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=80s) 會場有點吵。大約三、四週前他們發過一集，來賓是這場會議的主辦，字幕聽成 Stefan。那是一支很 vibe coded、帶規格、但幾乎只有一個真測試的應用，真正的測試是會議本身。Simon 說它跑得很好。

[2:42](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=162s) Alex 白天的團隊有 backend 和 mobile，需求用 Scrum 先想好幾個月，沒有 AI。Backlog.md 是他給自己的挑戰：盡量自主，任務裡的程式讓 AI 寫。側專案一開始只是一直 prompt，結果很差，用的是 Claude Code。

[3:52](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=232s) 他回頭看工作上人與人之間為什麼做得成，再搬到 AI。最重要的是 spec。不只是功能，還有安全、CI/CD、該用 C#、TypeScript 還是 Java。這些要在開工前就在。

[5:15](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=315s) Vibe coding 的問題會在每個任務上重複。Agent 做出功能，但來回很多次；下一個任務又把同樣的指示講一遍，又踩同樣的洞。每個 session 都想在一個 context window 裡做完。關掉視窗，context 沒了。你忘了上次叫它避開什麼，問題再來。

[6:34](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=394s) 安全規格、staging 這種檢查點，人與人之間本來就有。Vibe coding 之後大家忽然忘了，補丁可以直接上到 production 把東西弄壞。

[7:16](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=436s) 他先手寫一份巨大的 markdown，塞進所有規格和功能，一開始就注入 model。還沒碰到 context 上限，結果就明顯變差，有時得整包 rollback，整個產品或整個功能很難退。Compaction 會把對話摘要成很小的 context，但摘要裡的指示往往只剩原本的一半，你不知道它漏了什麼，多半得重來。

[8:39](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=519s) 下一步是把大檔拆成小任務，像 Jira 或 Linear：一張只定義要做什麼。Markdown 是人和 agent 都讀得懂的純文字。單張任務好退。他手寫到大約 50 張，才做成 Backlog.md，用終端機建立任務。

## 看板跟著 git 分支走

[9:50](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=590s) 要全域安裝，可以用 bun、npm 或 brew。全域是為了不必每個專案裝一次。會場 Wi-Fi 上他也裝得起來，因為 bun 裝依賴很快。不帶參數跑會給提示：建立任務、列出、看看板、開瀏覽器、看統計（完成幾個、剩幾個）和文件連結。

[11:01](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=661s) Demo 跑在 Backlog.md 自己的 repo 裡，任務已經有幾百張。Kanban 的狀態可設定，預設是 to do、in progress、done。任務用 git 在分支之間同步。他舉 task 200：指派給自己、改成 in progress、推上 feature branch，別人在 main 上的 Backlog.md 也看得到。它會找更新日期最新的那張。誤改也會把那張變成最新版，正常使用不該這樣。不能依分支篩，這層邏輯對開發者是藏起來的。

[12:33](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=753s) 打開一張未做的任務，他近未來想要的是終端機裡的拖放，像 Jira 那樣把卡片從 to do 拉到 in progress，用 shift 加方向鍵，人不必離開這個介面。這張還在 to do。畫面上有 task ID、標題、metadata、相依。相依是為了不讓 agent 開始還沒準備好的任務。描述講為什麼要做。Acceptance criteria 是核心：可測、可驗證、可度量，是這一張裡更小的增量，做完就打勾。

[14:22](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=862s) 一張已完成的是 OpenAI Codex 做的。還有 labels，之後可篩。Implementation plan 是先問 agent 打算怎麼做，人再審。Implementation notes 是永久 context：人或之後的 agent 想知道這張發生過什麼，就讀這裡。另外有長清單、搜尋、依狀態和優先順序篩。他搜 Tailwind，沒有相關任務。也有給想要畫面的人用的 web UI。

[16:26](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=986s) 給 agent 的是 plain mode。`backlog task 200 --plain` 把同樣的內容印成純文字。

## 工具不叫 model，人在開工前要審

[17:08](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1028s) 前幾張規格的格式是他手寫出來的。四五張之後就有 CLI，然後用 Backlog.md 管 Backlog.md 自己的任務。工具本身不產生規格，預設也不連 agent。流程是你先開 Claude Code、Codex 或 Gemini CLI，叫它用這個 CLI 追蹤，並把功能拆成子任務。隨附的 agent instructions 教它怎麼拆進 Backlog.md 的形狀。工具要盡量小，不要擋路，是人和 agent 旁邊共用的東西。

[19:01](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1141s) 目前只有 CLI，沒有 MCP。Agent 用 bash 呼叫。初始化時選 agent instructions：Claude 用 `CLAUDE.md`，他也說 `AGENTS.md` 正在變成標準。可以多選。檔案不存在就建，存在就附加。內容是：人要建立任務就跑 `backlog task create`，要改就跑 `backlog task edit`。他六月開始做的時候，很多 agent 的 MCP 還不成熟。現在動能起來了，他說接下來幾天可能會上。這集大約一週後發布，Simon 說到時候也許已經有了。

[21:05](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1265s) Backlog.md 的程式 99% 是 AI 寫的。他手寫的只有教 agent 怎麼用工具的那些說明檔。

[22:05](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1325s) 人也常拆不好大功能。範圍爆開、延期、趕工，技術債之後再還。Agent 更嚴重：它們像五秒前才雇來的人，沒有 onboarding，你卻要它們立刻開工。接下來幾個月，工程師要學的是怎麼把軟體和這一張任務的資訊給夠，讓它像隊友。

[23:41](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1421s) 他不知道任務該多大，直到他跟 Claude 說：拆成每張都塞得進一個好的 pull request。對他「好的 PR」很主觀，Claude 立刻拆成能實現需求、又不把範圍吹大的最小任務。他認為訓練資料裡有很多 GitHub PR，尤其是留言不多、很快合併、沒有出事的那些。人想的一口大小，和 agent 做得到的變更，不一定同一刀。

[25:16](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1516s) 下一步不是直接開工。Human in the loop 要在開始之前。他的經驗是規格寫好，寫程式通常沒問題。他逼自己不要懶，每張都審。然後要 implementation plan，像團隊先在紙上同意架構，再交一個人去做。他試過用不同 model 當 judge。早期是三個 session：一個建任務、一個寫計畫、一個執行，context 分開，避免互相污染。現在 model 更能跟著長指示走，建任務和計畫可以放一起，或計畫和執行放一起。他不再用專門的 agent，覺得最新的 model 夠好。

[27:26](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1646s) 他聲明：沒有 production database、沒有線上代管、沒有登入。任務在 git repo 裡，安全用 git 的。GitHub 或任何 git 提供者就是資料庫，所以他不必處理這層，也沒碰上白天工作那種正式環境的問題。他認為這是現在的大限制。下一步是安全審查、效能審查，以及正式應用的 guardrails。

[28:56](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1736s) 他通常兩個分頁：一個在建或在做任務，一個在看發生什麼。也可以在沒有 GUI 的 sandbox 裡，SSH 進去跑 Backlog.md 和 Claude。沒有 AI 也有人用：從 web 介面手建任務，像一個只靠 git repo 和本機 CLI 的 Trello，不用代管、不用開帳號。他仍覺得強項是把大功能拆進較小的 context window。

## 兩週的 sprint 裝不下整夜的 agent

[30:15](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1815s) Simon 把 AI native 比成 cloud native：流程、工具、工作方式要把技術當一等公民。字幕把 Tessl 聽成 Tesla。Alex 說今天的 agile framework 大多為人而做，跟 agent 不合。Agile 的原則要留：你不知道最後會做成什麼樣子，所以要能轉向、要 review、要跟利害關係人說話。這些要接上 AI。

[31:50](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1910s) 他覺得以後沒那麼重要的是 Scrum 的頻寬估算。AI 有近乎無限的頻寬。現在問兩週的 sprint 塞得下多少；以後 agent 可以做一整夜，到早上燒掉五個 sprint。前提是 review 也自動。他說不是今天，是幾個月後要解的問題。

[32:34](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=1954s) 今天最大的瓶頸仍是人。人要說這張做完了、而且真的實現規格。即使用 Backlog.md、規格正確時實作多半成功，他仍想至少看一次。他現在不放心自動審查、自動進 main、然後部署。若安全、效能、品質的 review 都自動了，下一個瓶頸是衝突。不只 merge conflict。產品是一層疊一層，每一層依賴前面。Agent 不能互撞，而且要知道什麼還沒好、就先等。這段也自動化之後，你給出想法、確認這就是你要的，就可以讓它們跑幾小時、幾天，甚至幾週。

[34:22](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2062s) Retro 現在最接近的是 `AGENTS.md` 或 `CLAUDE.md`。做完一張，發現不想再看到的模式，就寫進去：不要這樣、要那樣。回頭多做有效的、少做無效的，大致在。人和 agent 一起看一整個產品哪裡錯了，還有空間。缺的是讓 agent 看見最終產品、以及使用者怎麼用。Sprint 的價值之一是做一兩週、交出去、等回饋，這段時間你沒辦法把產量再乘四。若做比人消化和回饋還快呢。Simon 說現在建造便宜，做錯就快退、再做。Alex 同意。維也納一場聚會裡，一位沒有寫過程式的水電工，用 vibe coding 做了一支計算工具尺寸的小應用。軟體開發者的報價是幾千歐元，他自己幾天做完。Simon 說如果水電工都會 vibe coding，而他不會修水管，那就麻煩了。

[37:18](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2238s) 他預期會出現單次使用的軟體，用完就可以丟的中小型應用，不必有 production 品質。Simon 把它說成更完整的原型：更靠近願景，讓人玩，說喜歡什麼，再把其中幾塊放進下一版。

## 做完才讀懂專案

[38:11](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2291s) 即使單張任務的資訊夠一個新人開工，agent 仍不認識專案。它是開始改檔時才去讀那些檔。等它幾乎懂這張該怎麼做，任務已經做完。他猜接下來會是：先跑一個很快的原型，讓 agent 從程式本身吃 context，然後丟掉；context window 還在的話，用乾淨的架構、他說的 domain-driven design 再做一次。第二次可能更好。

[39:20](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2360s) Scrum 還有沒有角色。他說很多人在成為好的 Scrum master 和 agile coach。對人這很重要。但流程要像重構程式：不是全丟，是留下有用的、把它變順、變簡單。現在忽然有無限頻寬，人要看的檢查點也得比兩週一次的 Scrum review 快得多，以後也許一天兩三次。Scrum 的核心是在一段時間內交出東西，並跟團隊和利害關係人對齊，決定繼續還是改。可以學的是 AI checkpoint：平行跑了一整夜的 agent 先彼此握手，說現在需要人，人確認之後才放下一批。像是會在對的時間把人引进來的 AI Scrum。

[41:35](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2495s) 往後看很難，因為曲線很陡。Claude Code 大約三、四月才出，才幾個月，已經有平行和巢狀 agent。六個月後會更強，他不預測細節。他抓得住的是：agent 變成依人的互動決定要做什麼的中樞。他不要你開一個 session、做完、關掉、再開。他要一個 24 小時都在的 persistent agent，當你的入口，自己的 context 維持很小，但記得你要達成什麼，再用 subagent 解決任務，像 agent 的 team lead，需要才生出來。也可以主動。他看到 ChatGPT 已經有每天早上推相關資訊的功能。Agent 能用工具、接別的來源、在你的資料上訓練，所以可以做你交辦的事，或自己來找你。他舉的例子是：太太下個月生日，該開始看禮物或辦派對。Simon 說他太太的生日是明年，不是下個月。

[44:46](https://www.youtube.com/watch?v=3-W0Et-X5Ew&t=2686s) 網址就是 backlog.md，打進瀏覽器會到 GitHub repo。攤位開始忙，訪問在這裡結束。
