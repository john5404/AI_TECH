# How We Built an AI Code Reviewer for 200 Engineers

Serhii 現在是 Marks & Spencer 的 engineering manager。這場講的是前一家 legal tech SaaS，在大約 200 位工程師的 GitLab 上做 AI code review。原片約 34 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=dTye2zVfSco)

## 一句話

同一週裡他把同一種 code review 留言寫了第四次，所以去看上一季大約 2000 張 merge request，重複的意見確實很多。付費工具先被選過。後來公司給他兩個 sprint，改走開源、自己 fork、自己握 prompt 和 model。系統最後能在簡單的變更上，由開發者和 bot 合併，中間沒有另一個人。他仍把 AI 當顧問：CI、linter、測試和 Snyk 才是 merge gate。

## 重複的意見，以及為什麼開源贏過已經在付費的工具

[0:43](https://www.youtube.com/watch?v=dTye2zVfSco&t=43s) 開場那張 production GitLab 的 merge request，從頭到尾是一個開發者加一個 bot，沒有人介入就合併了。他說今天講六件事，也許一週內就能在自己公司做出類似的東西：怎麼評工具、怎麼建架構、怎麼寫 prompt、怎麼處理 context、怎麼選 model，以及成本。

[1:21](https://www.youtube.com/watch?v=dTye2zVfSco&t=81s) 起點是一則訊息。那個星期他第四次寫同一種 review。當時 CodeRabbit 在 X 上很紅，他問要不要試。但他們要 self-managed，因為合規很多。幾個月後真的送出了東西。

[2:15](https://www.youtube.com/watch?v=dTye2zVfSco&t=135s) 他先拿數據。上一季大約 2000 張 merge request，看工程師是不是一直在重複同樣的意見。前幾類是 null safety、測試缺口、cross-cutting concerns 這類。公司有 200 個開發者，每週幾百張 merge request，這些模式都在。他不知道最後浪費多少錢和時間，但很痛。大約一年前開始做。那時 Claude Code 才剛起步，現在他覺得很好。當時主要是 Cursor，或 VS Code 裡的 Copilot，自動完成很好，複雜的事不行。

[4:12](https://www.youtube.com/watch?v=dTye2zVfSco&t=252s) 評估表上最受注意的四個是 CodeRabbit、GitLab、Greptile，以及開源。GitLab 在表上只因為他們用 GitLab Enterprise，對方也在做類似的東西。Greptile 是 VP of engineering 推薦的。當時有人說錢不是問題，我們付得起，所以先選 Greptile：安全和品質都打勾，也省掉更新、model、擴充這些營運。用就好。

[5:21](https://www.youtube.com/watch?v=dTye2zVfSco&t=321s) 後來他們還是想試新的。一個月前他在 City of Craft，問台上的 Tessl CEO：哪些公司從 AI 拿到最多。他記得的答案不是只有幾個工程師的新創，也不是官僚太多的大企業，而是中間那種。這對得上他的情況。公司說你有時間，給你兩個 sprint，去試這個開源工具。開源是因為 code 在自己手上。他們會 fork，所以 prompt 是自己的，model 自己選，想加什麼就加。公司變大時，座位數也不會變成問題。問答裡他說這個開源軟體就是 PR-Agent，最終的 prompt 可以去那裡看。

## 六週的 CI job，然後換成一直醒著的 listener

[6:37](https://www.youtube.com/watch?v=dTye2zVfSco&t=397s) 第一版大約六週，就是 GitLab CI 裡的一個 job，跑一個 image，留下兩種留言。`review` 是以資深工程師的角度做 pull request review。`improve` 是直接在 code 上給建議。六週都這樣。不好擴，控制很少，每次改設定都要再 push，下一筆變更才看得到 review。有正面訊號之後，他們做了專用服務。不再依需求跑 job，而是一個 Kubernetes pod 整天聽。Helm chart 和其他維運都在自己的基礎設施裡。

[8:14](https://www.youtube.com/watch?v=dTye2zVfSco&t=494s) 開發者在 GitLab 開 merge request，listener 聽 open、update、comment，以及從 draft 變成 ready。Event router 處理 slash command，或自動觸發。再來是他說的心臟：context retrieval。然後是 model chain。一開始用比較聰明的 model，因為他們真的想要好的 review。Bot 把留言寫回 merge request。架構裡從第一天就有 feedback loop。請開發者用綠色、黃色或紅色標記 bot 的留言，走 GitLab 的 emoji API，拉進 Grafana。

[9:41](https://www.youtube.com/watch?v=dTye2zVfSco&t=581s) 入口有兩個。想要控制的人每次開 merge request 可以自己打 slash command：`review`、`improve`、`describe`（幫你寫 pull request 描述）、`ask`（問 codebase 或這張 PR，也可以問別人的）。自動的規則是：開出來而且不是 draft，就跑 review；從 draft 改成 ready，再為其他人觸發一次。一種人只是樂於看到 review，另一種人很依賴它。

## 規則變多以後，讓便宜的 model 先挑章節

[10:57](https://www.youtube.com/watch?v=dTye2zVfSco&t=657s) Prompt 一開始很好，很快變難。公司只有五條或十條規則時，一個 prompt 就夠，結果也好。規則和文件一多，一個 prompt 裡東西太多，結果愈來愈差。第二版想過只對特定路徑跑規則：跟 DB 有關的只跑 data rules，TypeScript 只跑 TypeScript rules。但如果一個檔案又是 service、又碰 DB、又是 TypeScript，每個檔案都會炸開。

[12:19](https://www.youtube.com/watch?v=dTye2zVfSco&t=739s) 他們改成用 AI 幫 AI 選 context。輸入是 pull request 的 title、description、diff，一大庫規則和 markdown，再加上 Jira ticket 的描述。不能整庫塞進 prompt。先做 heuristic pre-filter：用 pull request 裡的關鍵字排名，不靠 AI，取出最相關的 30 到 50 份文件。這些文件常常已經 5,000 或 10,000 tokens。下一步用較便宜的 Gemini Flash，temperature 設成 0，讓結果穩定。依 diff 和 context 問哪些文件最貼這張 pull request。他們約定文件一定有標題、一定拆成 sections。再呼叫一次，只聚焦要的 sections。後面有 fallback chain。走完剩下 20 到 40 個 sections，每個最多大約 300 tokens，或更少，這才送給 LLM。

[14:55](https://www.youtube.com/watch?v=dTye2zVfSco&t=895s) 真實例子裡的關鍵字是 services、getting paid、payments、invoices、Stripe。最後一行看得到用了哪些文件：getting paid、service、Stripe，只用有關的。Prompt 裡放的是專案文件的 context：用了哪些檔、哪些 section、section 裡是什麼。他們也做了每張 merge request 五分鐘的 cache。`review` 和 `improve` 結果不同，context 相同，不必建兩次。

[16:30](https://www.youtube.com/watch?v=dTye2zVfSco&t=990s) Jira 放進 review 之後，他們發現 87% 的子票描述是空的。空描述放進去沒有差別，所以也拉 epic，並加一個檢查：這張 merge request 是否符合 ticket，寫的是不是該寫的 code。問答裡他補充，他們希望變更一天內做完，story 會寫完整件事，子票常常只剩標題，像「把這個做出來」。Story 通常不是空的。空的描述沒有價值，就往上一層拉，至少拿到一些東西來對。

## 從 OpenRouter 到 Gemini，以及 bot 自己核准

[17:13](https://www.youtube.com/watch?v=dTye2zVfSco&t=1033s) 一開始用 OpenRouter，因為還在試會不會成。一個 API 表面、很多 model、做得快，價錢和原廠一樣。問題是不是每個 model 都符合他們的安全政策，得改用廠商提供的。公司已經有 Vertex AI，選 Gemini 很直接：控制更多，監控、log、預算和安全都清楚。

[18:18](https://www.youtube.com/watch?v=dTye2zVfSco&t=1098s) AI review 是建議，是顧問。它會幻覺，也會給壞結果。他提到 Simon 前面講過 prompt injection 或真的出事時怎麼辦。所以它是 merge gate 裡單獨的一條。CI/CD 仍要照跑，linter、測試都在，還有 Snyk。AI 走在旁邊當顧問。

[19:03](https://www.youtube.com/watch?v=dTye2zVfSco&t=1143s) Bot 寫 inline comment。開發者可以套用建議，也可以跟提議的變更聊天，同意或不同意。比較後期，如果請求很簡單、沒有太多要改的，他們加了 `self review done`。開發者自己負責，說提議的變更都套用了。然後 PR-Agent 核准這張 pull request。若把它加進 code owners，核准之後可以沒有另一個人就合併。他秀的那張就是這樣：一個開發者、一個 bot，他記得內容很簡單，只是拿掉某個 JSON 檔。為什麼要讓人花很多時間審這種東西。

[20:42](https://www.youtube.com/watch?v=dTye2zVfSco&t=1242s) 上面還疊了幾件事。沒有發現時可以核准。可以跟 codebase 聊天；問問題時，context 依問題重建，不只看 pull request 的變更。Bot 裡有一層穩定機制，避免同時有五到十張 merge request 時漏掉指令。

[21:27](https://www.youtube.com/watch?v=dTye2zVfSco&t=1287s) Feedback loop 要從第一天做，是為了知道它有沒有用、有沒有價值。有一天他看圖，滿意度往下。他先翻 codebase，以為送錯東西或有 production incident。查到的是：已經在用 Vertex AI 和 Gemini，他們用的是最新版，對方送出的那個 model 結果更差。退回上一版，滿意度回去。

[22:30](https://www.youtube.com/watch?v=dTye2zVfSco&t=1350s) 幾個月後，即使還在 MVP，每週大約 300 則 review 留言。其他團隊來問能不能也裝、要花多少時間。

## 下週一可以做的，以及它仍然不是資深工程師

[23:05](https://www.youtube.com/watch?v=dTye2zVfSco&t=1385s) 他說今天是星期二，playbook 寫成五行，也許下週一就做。先評工具。AI 變得很快，工具每天冒出來，但開發者仍要為選對工具負責，開頭多花時間。第二，prompt 要是自己的。不知道底下怎麼運作，就不知道該期待什麼。第三，第一天就做 feedback loop，看它有沒有用、開發者開不開心，以及供應商會不會悄悄換 model。他口中的例子是 Google。第四，CI/CD 不放進 prompt。信任大部分該放在那裡。第五，依複雜度路由，失敗就 fallback，兩個 model。先用 pro，或像 Opus 那種；結果不好就落到下一個。Gemini 的順序是 pro，然後 flash。

[25:11](https://www.youtube.com/watch?v=dTye2zVfSco&t=1511s) 有人問為什麼這套檢索不做 vector database。他說 vector database 當時一直在對他們喊，但會多一層基礎設施和複雜度。他們走簡單的，而且看得出能動。他已經不在那家公司，也許現在變了，當時他覺得太複雜。

[26:18](https://www.youtube.com/watch?v=dTye2zVfSco&t=1578s) Pull request 太大不會動。100 個檔、20 萬處變更不行。公司內部本來就約定 merge request 要小，一天內能送，大多是幾個檔、最多幾百行。大型重新命名這種重構效果不好。每個人的 review 有 150,000 tokens 上限。超過的話 bot 會說太多了，它不處理，請拆開，或開發者自己審。Trunk-based、幾乎不開 PR 的做法，他們沒花太多時間。當時就是一般的 pull request。他知道那家公司現在想做 spec-driven：跑 spec，把 review 交給 bot，再看開發者真正需要出現在哪。

[30:44](https://www.youtube.com/watch?v=dTye2zVfSco&t=1844s) 有人問 agent 到底在審什麼，是不是只說「看看我的 code 好不好」。PR-Agent 的 prompt 是預先寫好的：你是 AI reviewer，做這些事。他們不同的地方是塞進公司自己的指示和規則，對齊法律相關的要求和安全。複雜的 pull request 不能太依賴它。仍要有資深開發者知道什麼叫好、該怎麼運作、最好的解是什麼。他把它看成幫手，免得自己再寫「這裡缺測試」。有 function 沒有測試，連普通的 model 都說得出來。Agent 能不能承認自己不會？可以再加規則：不確定就說出來。這套也會判斷請求多複雜、review 要花多少力氣，最後加標籤。五分裡的一分應該很簡單。看到四分或五分，就代表還有複雜度，要小心。
