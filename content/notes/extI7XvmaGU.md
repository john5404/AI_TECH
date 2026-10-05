# Alex Gavrilescu - Backlog.md Hands On | DevCon Fall 2025

Alex Gavrilescu，在維也納當 lead engineer，會羅馬尼亞語、義大利語、英文。十三年用 .NET、Kubernetes 和雲。片長約 62 分 11 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。開場的人說一個多月前在 Devoxx Belgium 認識他。字幕把姓聽成好幾種，標題是 Gavrilescu。

- 原片：[YouTube](https://www.youtube.com/watch?v=extI7XvmaGU)

## 一句話

只靠 prompt，他覺得像吃角子老虎，任務大約一半能做完。把測試和 lint 寫進指示，大約到 75%。把大功能拆成塞得進一個 context window 的 markdown 任務，並規定只做驗收條件，大約 95% 能 merge、不必整份扔掉。Backlog.md 是他把這套流程做成的本機工具。人要審三次：任務、計畫、然後才是 code。

## 成功率先是 50，然後 75，然後 95

[0:48](https://www.youtube.com/watch?v=extI7XvmaGU&t=48s) 這場先講，再休息，然後工作坊。他會到座位旁幫忙。聽過稍早 Lada 那场的人，上下文可以略過。

[3:09](https://www.youtube.com/watch?v=extI7XvmaGU&t=189s) 幾年前是 IDE 裡的自動完成，有沒有 AI 都會猜函式。然後是把 code 貼進 ChatGPT，叫它修，再貼回來。真正改變工作方式的是 IDE extension：agent 坐在檔案旁邊，你可以把 repo 裡的檔加進去。先只能問，再變成編輯，再變成 agent mode，然後走出 IDE，變成 CLI agent。他覺得這是開發者真正喜歡的下一步：把任務交出去，讓它做幾分鐘、幾小時，以後也許幾天，再拿回能動的結果。Agent 是用模型自主做任務、還能碰工具、API、資料庫的系統。

[5:16](https://www.youtube.com/watch?v=extI7XvmaGU&t=316s) 有一張圖，他說是 Matt 畫的互動方式。一端是從不看 code、一直 prompt，他叫 vibe coding，結果不好。就算你會寫 code、每一行都看，若只靠 prompt 硬拗，也走不遠。另一端比較結構化，像大專案或用 scrum 把 sprint 先排好：從 spec 開始。你可以是逐行檢查的開發者，也可以是只想要結果能動的 project manager。他自己從只 prompt，慢慢走向不太看 code、看輸出，然後做下一項。

[6:48](https://www.youtube.com/watch?v=extI7XvmaGU&t=408s) 只 prompt 像吃角子老虎，有時很好、有時很糟。他定義的成功是任務做完、沒有完全放棄，來回幾次也算。這樣大約 50%。加上 agent 指示，寫進測試和 lint 要怎麼做，大約 75%，有進步，但不夠好。模型不是決定性的，所以他把流程做成像決定性的。大功能拆成小任務，每一項要塞進一個 context window。現場有人用 compaction：context 用完就把整段對話摘要，好讓同一個 session 繼續。問題是你控制不了摘要留下什麼，該丟的會留下，重要的會掉。他的解是拆任務。每一項都寫 why、what、how。很重要的一步是叫 AI 把它理解的需求寫下來，你再核對。專業工作裡要有清楚的 definition of done：什麼叫做完、可以 merge、可以上 production。

[10:12](https://www.youtube.com/watch?v=extI7XvmaGU&t=612s) 他的解是把任務寫成 markdown，模板從工作流程抄來。字幕先聽成 GR，後面他說想念的是 Jira 的功能。一份任務有：為什麼做、可以實際測的驗收條件、想跟團隊分享的實作計畫、以及做完之後像 PR 筆記的 implementation notes。檔案在 git 裡，你只要說：去做這個 markdown 裡的任務。Agent 必須做完所有驗收條件，而且不能多做。一開始 Claude 會往前衝、做沒被要求的事。Definition of done 是驗收條件都完成、測試通過。這樣大約 95% 的任務能 merge，不必把整份 code 扔掉。對他的方案來說也比較不會把 token 用光。

## 自由的 markdown 還是會幻覺出任務格式

[12:08](https://www.youtube.com/watch?v=extI7XvmaGU&t=728s) 叫 AI「為這個功能建一個任務」，它會寫 markdown，但結構不一定是他要的，可能沒有驗收條件，有時整個幻覺任務的形狀。他也無法知道哪些做完、哪些還沒，得自己搬到 completed，或手動刪。他想念 Jira 的標籤、相依、建立時間這類 metadata、優先順序。所以他做了 Backlog.md。投影片是用 Nano Banana 生的，當時流行問它：你的工具若在 1995 年長什麼樣。終端機裡的看板，1995 年其實做得出來。

[13:40](https://www.youtube.com/watch?v=extI7XvmaGU&t=820s) 它是終端機上的專案管理，用來跟 agent 一起把任務維持住結構。CLI 可以建、列、改任務。一開始 agent 走 CLI，他後來改成 MCP。一份任務長這樣：YAML front matter 放 metadata，然後是描述、驗收條件、開工前寫的實作計畫、做完才寫的 implementation notes。Agent 依你的想法建任務時，就是第一次審查。工作坊裡他會一再強調：仔細看它以為自己必須做什麼。

[15:52](https://www.youtube.com/watch?v=extI7XvmaGU&t=952s) CLI 幾乎每個 agent 都能用。有 MCP 的比較新，因為可以定義 schema：有哪些命令、哪些欄位必填、哪些選填。他給的例子是 Claude 一接到任務就用 CLI 把它標成 in progress，並指派給自己。人也可以不用 agent 自己下這些命令，但工具是為 agent 設計的。`backlog init` 除了問專案名稱，還問 agent 怎麼接：MCP、CLI，或跳過。選 MCP 會把指示裝進去。它會往 AGENTS.md 或 CLAUDE.md 推一小段：這個專案由 Backlog.md 管，跟任務有關的請求請先讀 backlog overview。這比把 CLI 說明一直塞著好。若你只是叫它在某個檔加一行，不必建任務。任務是給更大的功能。Agent 可以自己判斷要不要去讀那份流程。他還有巢狀資源，為了省 context：任務已經存在，就不必讓它知道怎麼建立。三份額外指示是建立、執行、完成，需要時才讀。MCP 工具是搜尋、看細節、建立、更新。CLI 命令變體多很多，agent 很難全放在 context 裡。指示越多，效果越差。所以 CLI 整合不如 MCP。

[20:17](https://www.youtube.com/watch?v=extI7XvmaGU&t=1217s) 終端機裡有看板，投影片上是接上 Backlog 專案的即時畫面。欄位是一般看板，流程不同可以加欄。點進去看驗收條件和做完之後的筆記。他也做了網頁介面，說是自己寫的 Jira 仿製品。跑 `backlog browser` 會在本機起一個離線伺服器，沒有網路、沒有登入、沒有資料庫。編輯或新建會存成檔案系統上的 markdown。有 dark mode。軟體免費、MIT、可離線。要用 agent 就得在線上。你可以先用 CLI 或網頁把五十個任務建好。任何平台都能跑。

[23:10](https://www.youtube.com/watch?v=extI7XvmaGU&t=1390s) 別人看不看得到你的任務：看得到，但你得 push。它底下用很多 git 指令同步。他舉任務 ID 320。推上去之後，連同一個 origin 的人會在自己的 Backlog 裡看到。你在某個分支把任務標成 in progress 並推上去，另一台電腦也看得到狀態。他說這套 git fetch 的魔法通常有效。Backlog.md 幾乎是用它自己寫出來的。前三個任務之後，第三個任務起他就用遞迴的方式：加任務，讓 agent 做。即使他知道怎麼修，也不動手寫，因為這是學習過程。他親手寫的只有指示：怎麼用、何時用哪個命令。當時接近四千顆星，上過 Hacker News 首頁，Reddit 討論也很熱。工作坊進行中過了四千。他說沒有付錢請人去按。

## 它不是指揮中心，也不是 Jira

[25:29](https://www.youtube.com/watch?v=extI7XvmaGU&t=1529s) 他先擋問題。它不是建立任務並直接派給 agent 的指揮中心。你可以建任務，再自己去 Codex 或 Claude 說去做那項。若要指揮中心，他指向別的專案，字幕聽成 Conductor 和 vibe can。Backlog.md 要盡量簡單，給大家用。它沒有代管服務。有人問能不能把 backlog 暴露到網路上。他說你不會想：認證、權限會變成地獄。Git 已經在。能 push 就代表你對這個 repo 有權限。還沒有的是：project manager 要看任務，就必須有 repo 權限。那種流程它不適合。它在你的 repo 裡，用 git 在分支之間同步任務。不能跨多個 repo。

[27:24](https://www.youtube.com/watch?v=extI7XvmaGU&t=1644s) 他開始做文件和決策，還很 alpha，接下來幾週要做。不是只放任務，而是長命的規格：怎麼測試、語言上的慣例、TDD、BDD。這些不該塞進單一任務。目標是從 code 連到這些本機文件，例如一個很複雜、又牽到 repo 其他部分的函式，可以連到一份說明我們怎麼做的檔。很多人要整合 GitHub issues。他說不是為這個做的。若開始做，他得辭掉現在的工作才支援得了。這是學 AI 的 side project。那些工具自己也在加 MCP，可以直接用，不必繞過 Backlog.md。他想給的感覺是：side project、想維持大案子的結構、又不想先架 Linear 或 Jira 再讓 agent 連線上服務。要 repo 裡最快、最簡單的那個。他無法提供跟本業一樣的 production 級支援。

## 三次審查，計畫要在寫 code 的前一刻才生

[29:32](https://www.youtube.com/watch?v=extI7XvmaGU&t=1772s) Spec 驅動是先知道要做什麼。他認識很多開發者，prompt 都開始了還在搞清楚自己要什麼。人寫 code 這樣就不好，對 AI 更糟。若還不知道，可以先跟 AI 迭代來弄清楚。但 spec 驅動要資訊先齊，例如產品需求文件。再把大功能拆成小任務。做單一任務時，讓 agent 讀 repo、讀任務和驗收條件，寫出實作計畫。你審這份計畫。這是寫 code 之前的最後一次審查。若前面都對，以他的經驗 code 通常還可以，不會是你沒預料到的，因為問題會先出現在計畫裡。實作中若出問題，去改 agent 指示或任務規格，從頭重來，不要帶著同一個問題繼續，然後做下一項。

[32:05](https://www.youtube.com/watch?v=extI7XvmaGU&t=1925s) 工作坊的流程是先有想法，寫 PRD.md。這還不是 Backlog.md，只是讓輸出有結構。Why 和 what 在需求裡，how 由 agent 提出。再叫 Backlog.md 拆成小任務。Agent 用 MCP 或 CLI 建任務。若它能上網更好，因為訓練資料常常不是最新的，例如最新的 Tailwind 或函式庫。然後你 check in 一個任務，agent 寫實作計畫，你核對，計畫存在那個任務裡。不要一次為所有任務寫計畫。一個功能若有十個任務，做到第十個時，前面那些 how 可能已經過時。計畫要在實作那一項的直前才寫。執行就是：Claude，請做 Backlog.md 的任務一。它知道怎麼讀、怎麼做。然後下一項。

[35:15](https://www.youtube.com/watch?v=extI7XvmaGU&t=2115s) 結論是你得知道要做什麼，不然不管你是 PM 還是開發者，都很難驗證。你也得知道怎麼守品質。他覺得這套對中階到資深比較有用，因為只有那時你才說得出 agent 做得好不好。不要期待 100%。Backlog.md 一開始很多 bug，他慢慢修。Agent 現在不完美，接受夠好、繼續往下。完全錯或做得很差，就回到任務、改需求、重來。測試、lint、格式化、pre-commit hook 跟 agent 很合。人的輸入仍然很重要。結尾要 code review，另外兩次也不能省：任務和驗收條件出來之後，以及實作計畫之後。UI 尤其難，agent 很難自己測結果。少數人用 Chrome DevTools MCP，可以叫它開 Chrome 測介面，但不完美。沒有網頁、是原生介面的，就行不通。

## 一個視窗只做一件事

[37:26](https://www.youtube.com/watch?v=extI7XvmaGU&t=2246s) 他會重複：一個任務、一個 context window。他是吃過虧才學到的，Lada 也講得很清楚。不只是視窗還有沒有空間，agent 的工作品質走到中段會掉很多。你要讓用掉的 context 越少越好。任務做完還剩 50%，不要在同一個 session 開第二項。第二項做得很差的機會很高。OpenAI 和 Anthropic 在 X 上和文件裡多次建議不要用 compaction，儘管功能是他們自己做的。任務拆得對不對，是人的專案管理能力。AI 可以幫忙，但你必須自己審。問題出現過一次，就改 AGENTS.md 或 CLAUDE.md，讓它永遠不再犯。同一個 agent 會重複同樣的錯，例如測試寫錯，或 Claude 為了讓測試過而把測試刪掉。他遇過很多次。指示改成：不要刪測試，無論如何讓它們通過。流程會好很多。他從只 prompt 走到可以讓 agent 把 Backlog.md 的功能做完，自己只在最後審 code。還有改進空間，但對他已經夠用。

[40:47](https://www.youtube.com/watch?v=extI7XvmaGU&t=2447s) 有人問非技術的人，例如用它規劃行銷活動。朋友問過。你仍得知道什麼是 repository、會 git init。之後可以用網頁。他不確定這比 Trello 或 Asana 好。Asana 更方便，手機也能看。這裡每個裝置都要有 git client，手機上看不到任務。要做到那樣得做 SaaS，不在他的計畫裡。另一問來自做 spec 驅動的人，他們的順序也是需求、設計、實作、執行，但有人想反過來：重構時需求一開始不清楚，想先想 code，再從 diff 或 patch 把需求倒抽出來。他的看法是這些模型是加了類固醇的自動完成，給 prompt 就試著寫出 code。解法是從終點往回走。把終點的 code 給它，問怎麼從現在這份 code 走到那個狀態，會有效得多。他沒有具體試過「這是我要的最終 code，請從它做出 spec」。

## 工作坊裡，CLI 指示不要和 MCP 疊在一起

[44:35](https://www.youtube.com/watch?v=extI7XvmaGU&t=2675s) 休息後，先到 backlog.md 安裝。他說那是摩爾多瓦網域，打得開。在 git repo 裡 `backlog init`。若 init 時選對了你要用的 agent，同一個資料夾裡打開 Gemini、Codex 或其他 agent，它應該知道 Backlog 存在。把想法交給它，請它拆成子任務。不必一定先寫 plan.md。那只是避免在 Claude 裡打一大段、按錯就送出。先在檔案裡改完再貼。不要理解成：建完所有任務，立刻為每一項寫實作計畫。全部任務可以先建，但開始做某一項時，只為那一項寫計畫。前面的基礎設施一改，舊計畫就過時。

[48:23](https://www.youtube.com/watch?v=extI7XvmaGU&t=2903s) 他臨時想到一個演進，改用 Codex 的網頁版現場做。那裡還沒有 MCP，但有 CLI，Codex 可以自己安裝 Backlog.md 再跑。選 repo 和分支，說要做的任務：在 front matter 裡定義 shell callback，狀態改成 in progress 或 done 時自動跑，命令可設成 bash，用來觸發他電腦上的其他工具。他說平常會再核對，這裡只是示範。建完 PR、若 merge，他可以在筆電上說：Claude，請做任務 318。檔案出現在 backlog 的任務裡，而且區段標記是對的，表示它真的走了 CLI。沒有那些標記時，agent 常幻覺自己在建任務，因為 Backlog 也可以只是把 backlog 存成 markdown。他遛狗時點子最好，沒帶筆電，就用 ChatGPT app 裡代管的 Codex 把想法丟出去，走完路回來就有一張帶著任務的 PR。Codex 網頁要先起一個新環境，做完會請你對 repo 開 PR。這次很快。

[56:42](https://www.youtube.com/watch?v=extI7XvmaGU&t=3402s) 有人問為什麼不用 Claude 的網頁任務或 Google Jules。他說兩者都不如 Codex。Codex 網頁可以決定容器怎麼起，第一件事就裝 Backlog.md。另外兩個做不到這麼多。若有人做成，請告訴他。Codex 已經夠用來隨手建任務。CLI 和 MCP 不要一起用。CLI 指示他視為舊的，是一大份所有命令，會污染 context。MCP 是新的，agent 依要做的事去讀。兩個一起用，你拿到 CLI 的污染，MCP 的好處被抵掉。最近 `backlog init` 若偵測到 CLI 指示，會用小得多的 MCP 指示蓋掉。不然光 CLI 指示就吃掉大約 10% 的 context window。

[59:00](https://www.youtube.com/watch?v=extI7XvmaGU&t=3540s) 工作坊進行中星星過了四千。Gemini 3 是前一場工作坊期間出來的，他裝了還沒用，想看看跟 Backlog 合不合。隔天他有一場二十分鐘的輕量版，沒有工作坊，沒有新內容。投影片放在一台 Raspberry Pi 上，不是多租戶。當天 Cloudflare 出問題，Pi 沒有自己恢復，得有人去踢。他晚上會重開，隔天網站上應該看得到。結束後當天和隔天還找得到他。
