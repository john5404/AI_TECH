# The Skills-First Agent Workflow: Reusable Agent Intelligence

Simon Maple 和 Guy Podjarny 的 AI Native Dev。Guy 是 Tessl 的 CEO 和創辦人。片長 44 分 15 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla、Tesl，把 CLAUDE.md 聽成 cloud MD，把 Windsurf 聽成 Windsor，把 Vercel 聽成 versel，把 Sonnet 聽成 set，把 `.claude/skills` 聽成 dotcloud/skills。下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=ntkM-hRblfo)

## 一句話

Skill 是給 agent 的一份標準 context，教它做一件事。它不是新發明，Cursor rules 早就有，Claude skills 大約從九月就在。突然變熱，是因為 Anthropic 在去年很晚丟出一個叫 agent skills 的開放定義，其他家在大約一個月內排上。可重用的東西，大家卻在複製。Guy 要人把它當成 software：能測、能發、能長期擁有。他們跑過的例子裡，一個 skill 把成功率從大約 28% 拉到 71%，另一個概念相近的把 85% 的基準往下拉了大約三個百分點。 Anecdote 不夠。

## 標準來了，飛輪才轉

[1:44](https://www.youtube.com/watch?v=ntkM-hRblfo&t=104s) 這集要定義 skill、它和別種 context 差在哪、怎樣才算一個好的、以及 Tessl 前一週宣布的 agent skills 支援。Guy 說 skills 是給 agents 的標準 context 單位，教它們獲得一項能力。最初由 Claude 的 skills 帶出來，和更早的 Cursor rules、其他 agent 裡內建的指引非常像。Claude skills 把這條路鋪開。實際上是一套檔案結構：一份 `SKILL.md`，寫它做什麼、一些 metadata、agent 何時該用，再加上按某種方式排的支援檔，讓 agent 能用一種對 LLM 合理的方式學會它。核心之一是 progressive disclosure：知識分成小塊，agent 在對的時間載入對的那塊，不要塞爆 context window。

[3:57](https://www.youtube.com/watch?v=ntkM-hRblfo&t=237s) Simon 說這不是新東西。Cursor rules 他已記不得何時出的。Claude skills 他也說大約從九月就有，現在才熱。`SKILL.md` 仍是純文字。人怎麼寫，決定 agent 讀完之後做什麼。Guy 說關鍵和 MCP 類似：它變成一個標準。Anthropic 在去年很晚提出一個開放定義，standard 這個詞有點好笑，他們是自己鑄了一個，叫做 agent skills，並公開定義。產業排得相當快。短時間內，也許一個月，Cursor、Codex、他記得還有 Gemini 和其他家都說要支援。使用者、創作者可以做一件東西，然後鋪出去。年初 Cursor 說會擁抱 skills，並把 rules 淘汰。兩者很多特質很像。生態就此爆開。

[5:52](https://www.youtube.com/watch?v=ntkM-hRblfo&t=352s) Anthropic 另一件聰明的事是做了一個 create skill skill，讓人很容易開始累積。Skills 起初在 Claude 裡比較不是開發功能，而是給非開發者的指令：做一張 Excel，或做某種字幕聽成 musical review 的事。這套做法對 agent skills 整體也成立。非開發者開始做可重用的東西，在團隊裡分享，可重用的 workflow，嚐到一點軟體開發式的重用。這些加在一起變成飛輪。Tessl 一直相信 context 該可重用，不該重造輪子，而且 intelligence 和 knowledge 是兩件事。

[7:10](https://www.youtube.com/watch?v=ntkM-hRblfo&t=430s) Simon 提到他和字幕裡的 codeguard 的人做過一点事：一份講怎麼按很特定的安全規則 review code 的 context。他們看到的缺點是，消費者有人用 Windsurf、有人用 Cursor、有人用 Claude，得做成多種結構。一個所有 agent 都能接的標準，讓人可以交一件東西，只要大家開始支援，別人就能拉進去。

## Rules 硬塞，skills 留麵包屑，docs 等被找到

[7:58](https://www.youtube.com/watch?v=ntkM-hRblfo&t=478s) Agents 最後仍是 LLM 的介面。每次請求的問題是哪些 tokens 進去。各種 context engineering 都是在選對的字放進那則訊息。這是零和：放太多，鋪墊把真正的指令淹沒；放太少，該知道的不知道。外部 context 他分成三桶。Rules 是不管你喜不喜歡都塞進 context window。放進 CLAUDE.md，或 Cursor 裡的 must-use rule，雖然 Cursor 有時會忽略。它們是強制的、很重要，但佔空間。不能把整份文件塞進去，所以貴。常常只是一段開頭指令，加上指向別處的連結。

[9:59](https://www.youtube.com/watch?v=ntkM-hRblfo&t=599s) Skills 像 Cursor rules。只有一小段進 context window，讓 agent 自己決定要不要叫。你也可以像命令一樣主動叫，那就不必留那一小段。若期望它在相關的時候自己叫，就得留一點麵包屑。有人在做把這塊分開、讓 agent 去查某個目錄，但現在的現實是麵包屑。Docs 只是放在那裡給 agent 找，它不會自然找到。要嘛用 rule 留麵包屑，要嘛把名字取成 grep 和其他 agentic search 找得到。它們按需載入，沒有代價。一千份 docs 只是可用。一千個 skills 載進去，今天就可能真的傷到 agent。問題變成哪一份 docs 在對的時間載入、它找不找得到。三類之後還會有更多。都是可重用的 context，讓 agent 不必每次都靠 intelligence 自己推論。

[11:18](https://www.youtube.com/watch?v=ntkM-hRblfo&t=678s) Simon 把這接到 activation。他開玩笑說 MCP 的日子像三十年前。做 MCP server 時，tool 的名字和 description 必須清楚，agent 才會在對的時候用。Skills 一樣：名字和 description 要清楚，它才不會因為自己做得到就自己做，而不去用 skill。Guy 補：格式是標準，model 不是。同一段文字會被不同 agent、不同 model 載入。他們有反覆的資料：同樣的字不會讓 Haiku、Sonnet、Opus 做同樣的事。Opus 比較像 smartass，可以說我更懂、我不做。Haiku 可能需要更細的指示。Skills 目前不解這個。它是一份標準 context，但不保證同一段字對不同 agent 都是最優的。仍值得押。Tessl 在押。這可能是目前重用 context 最標準的方式。但像 MCP，它是拼圖的一塊，後面還會有各種想重用的工具。Simon 說標準像一顆標準螺栓，接得上，但跑起來的里程會因 agent 而異。

## 把 skill 當 software：測、發、養

[13:23](https://www.youtube.com/watch?v=ntkM-hRblfo&t=803s) 個人、愛好者、開源、組織都可以用。組織用它描述方法、流程、要求。Guy 說魅力在於立刻有感：一份靜態 markdown，用 create skill 做，成本很低，當下就能 anecdotally 看到它有用。和軟體一樣，一次它動了，和一份你得長期一起生活的資產，不是同一件事。這是你想在團隊裡重用的能力。到專業、到團隊、到組織，最好不要把它想成 markdown，要把它想成一個 software 單位，一項可重用的能力。

[15:00](https://www.youtube.com/watch?v=ntkM-hRblfo&t=900s) 他要人先盯三件。一，要能測。想讓它繼續能動，或只是評估它今天行不行，都得先想什麼叫對，然後測。在 AI 裡那叫 evaluate。二，怎麼發。現在有個容易但可悲的現實：人把 skills 複製得到處都是。它們被設計成可重用，我們卻在複製。這部電影看過，知道結局。三，長期怎麼擁有。它們會像文件一樣過期。Models 會變。新 model 會覺得自己很聰明，或者你想配一個便宜的、開放的 model。要維護、要更新。寫的人離開組織之後，團隊還要能一起改。那就是整個 life cycle。Simon 說 Tessl 前一週正好放出這三樣：評 skills、用 package manager 式的機制發、以及更完整的生命週期。他說去 tessl.io/registry 看。Guy 的句子是 thoughts become things。他也把這歸給團隊做得又好又快。

## Review：Anthropic 自己的 canvas design 內容只有 27%

[17:19](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1039s) Eval 最廣的意思是回答：我的 skill 有多好。塞無關的字、或對 LLM 漫談一小時，不會好。可怕的東西很容易想像，所以需要一套有系統的說法。Simon 說今天靠的是 anecdotal，不夠。寫 code 不會因為感覺能動就 ship。Skills 若是工作流的關鍵，為什麼可以。Guy 舉了一種沒用的寫法：從我小時候講起，最後才說 commit 時用大寫。那種 context 沒有用。他們現在有 review evals 和 task evals，以後可能再加。

[18:40](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1120s) Review evals 看 skill 是否遵守 Anthropic 公布的 best practices。Agent skills 是跨 agent 的，但 Anthropic 明顯在帶。那些指引說要簡潔，concise is key，要設適當的自由度，結構要對。Review 就是拿這些指標去評。已經有一些有趣的結果。用 Anthropic 的 create skill skill 做出來的，分數確實相當高。不意外。坦白說他們是用 Claude 在評。Claude 在創造時用的就是那些指示，輸入裡大概已經有一批。所以用一個 skill 去創造 skills，這些路徑上大概會得高分。

[19:47](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1187s) 對 Anthropic 也有幾點。他們自己可能沒用 create skill 來做。他們已經對幾百個、也許超過一千個不同的 skills 跑過 review evals，其中包括一批 Anthropic 的，有些分數並不好。他挑 canvas design。名字的意思是幫你設計 canvas 的內容。他們把 description 的分數和 content 的分數分開。Content 偏低，27%。他喜歡 Claude 寫給自己創造者的那段文字。Conciseness 是四分之一：極為囉嗦，craftsmanship、masterpiece 這類概念大量重複，有哲學性的填充，以及 Claude 不需要的多餘解釋。設計哲學講了好幾次，同樣的原則在不同段落重複。Progressive disclosure 也是四分之一：一整面牆的文字，沒有指向外部檔案的詳細指引。Simon 很高興是 Claude 在家裡打 Anthropic。Guy 說這完全不是 canvas design 的作者不會做 skill。這是工具的需要。它必須自動化。也許一開始是用 create skill 做的，也許比 create skill 更早，後來沒被維護。Review 就是讓你結構良好，並說你把 best practices 用得怎樣。

## 任務情境：28% 到 71%，以及稍微變差的那個

[21:38](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1298s) Task evals 再走一步：做出情境，讓 agent 跑，看做得怎樣。這也是 Anthropic 建議的 best practice：先做 evaluation scenarios，再做 skill，先知道好長什麼樣子並記下來。很少人真的做，因為更費工。Tessl 已經對他們說的 tiles 做過：做一批文件類 context，也做一些 coding 情境，有那份文件和沒有都跑，確認文件是好的。Skills 同樣做。他說 skills 的 task eval 更像 work in progress。有個有趣的問題：怎樣從 skill 裡抽出評量情境，又不要把太多指引漏進任務本身。下面的例子他要人拌著鹽聽。

[22:39](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1359s) 兩個概念相近的 skills，各做了 10 個 coding 情境。一個是 Vercel 的 agent browser。Agent 試著實作時，成功率從大約 28% 到 71%，提升非常大，這個 skill 很有價值。另一個叫 browser use，也是 agents 裡怎麼用瀏覽器。基準平均是 85%，用了 skill 之後輕微為負，大約掉三個百分點。也許任務不對。但它示範了：這個 skill 可能沒什麼幫助。他們看過幾個這種例子。有些 Anthropic 的 skills 不算壞，只是沒什麼幫助，因為它在描述 model 已經會的事。又回到：現在的評量是對某個 model。Haiku 也許需要，Opus 也許不需要。

[23:50](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1430s) 還有一個。有人把 Karpathy 對 skills 的 best practices 摘要編成一個 skill 並發布。他們跑過，對 agents 又是輕微的負面。10 個情境，有些很好，有些更差。最差的一個例子是它把一個簡單的 CSV 任務過度複雜、過度工程了。所以你得知道 skill 行不行，得定義模擬它的情境，然後在 skill 演進、models 演進、或換 agent 時重複測。

[24:43](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1483s) Simon 的收法有兩面。消費者要這份資料，才知道拉進來的 skill 會對 agent 有什麼影響。生產者不能做完就憑感覺說好像更好。情境讓你看見哪一段很好、描述留著，哪一段要改。消費者再依資料挑。每個人的環境不同，最後仍會有一點 anecdotal，但這是需要的起點。Model 一變、訓練資料一變，依賴舊資料或新資料的 skill 行為就不同。也許同一個 skill 要依 agent 或 model 有不同層級。

[26:45](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1605s) Guy 比成真實世界的測試：works on my machine 對 skills 也是真風險。有人愛寫測試，很多人不要。人會避開「什麼叫對」這個難問題。Tessl 會幫你產生、幫你把那些東西做出來。但時間一長，什麼叫對、這個 skill 該做什麼，比你用的那些字更重要。字會隨環境、隨 model 變。以前不在訓練資料裡的，後來在了，你就可以縮、可以少說，某個時點也許根本不需要這個 skill。比較不那麼會動的，是你要的結果。需求變了、系統變了、API 的叫法變了、業務目標變了，那個定義才要跟著演進。Evals 讓你今天把 agents 用好，也讓你不要隨時間退步。好長什麼樣子，比 context 本身更重要。

[28:12](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1692s) Simon 說這像從一個已有的答案裡抽出問題。Skill 定義了想要的做法和終點。情境不該把 agent 餵向那個終點，而該像一般人會怎麼試著到達，然後看它會不會按 skill 的方式做。好的 eval 像好的測試，很難做好。Tessl 的 AI engineering 團隊在做這個框架。Guy 說現在是旅程。他們在為不是自己的、公開的 skills 做情境，資訊有限，只有那份 skill。產生文件時資訊多得多：有 code，可能還有其他呼叫者，比較抽得出正確性。真正對的情境，是他們和完整客戶合作時，先去看現實。可以從 git history 和做過的事抽出很多，時間一長也可以從 agent logs 學。組織為自己做 skills、持續調，就有真正使用者的回饋。第三方 skills 比較難。他們希望像文件一樣：今天先替別人的 skills 做 evals，但鼓勵擁有者來，他們會把 evaluations 和情境的所有權交過去，讓擁有者調、改，然後 Tessl 只負責跑和發布。

[30:31](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1831s) Simon 在 registry 上點：有 featured tiles，也有表現最好的 skills 和 tiles。可以打開情境，看有 skill 和沒有、有測試和沒有，看見它擅長什麼。再挖可以看到 Claude 評估時寫的文字。娛樂性就夠把它留在網站上，而且有很具體的建議。那句 monolithic wall of text 很好笑，也是很清楚的指引：該拆開。Simon 想要一種模式，讓 Claude 對脆弱的他溫柔一點。Guy 說很快會有一個 optimize 按鈕，他們今天已經對客戶這樣做。按下去就做一版新的。LLM 擅長這個。但若文件是 LLM 生的、評量也是 LLM 生的，兩邊對不齊，你得選相信誰。他們想相信 evaluation，但擁有者必須 blessing。一旦 blessing 了，做一條 agentic pipeline 去優化 context、達到那個目標，就沒那麼複雜。

## 複製進 repo 不是發行，manifest 才是

[32:32](https://www.youtube.com/watch?v=ntkM-hRblfo&t=1952s) Package manager 比較技術，但來自把 skills 當 software、不當文件。今天要裝一個 skill，不是去複製，就是自己做一個放在某處讓團隊複製。Skills 的核心就是散到團隊，所以那樣很不方便。Vercel 有一個很好用的 skills.sh。一週內就起來了。人跑 `npx skills`，給一個 GitHub repo，它把東西從 repo 拷進 skills 資料夾，然後你 commit 進自己的 repo，也就是複製一份。上游更新了，你不會知道。更糟的是團隊裡有人用不同的 agent，同一個 skill 被複製進 `.claude/skills` 和 `.cursor/skills`。還有一個好笑的效果：各種 agents 都去讀 `.claude/skills`。這不是快樂未來的配方。

[34:04](https://www.youtube.com/watch?v=ntkM-hRblfo&t=2044s) 軟體裡這題解過了，叫 package manager 或依賴系統。內容要有版本、有識別，也許還要 semver 式的差量和順序。Manifest 記下你下載了什麼，才能 update、install，也許再加條件，把 dev 和 production 分開。這些是已解的問題。幾乎每種語言都有自己的依賴系統，因為依賴關係、安裝、環境有細但重要的差別。需要的是 skills 的 package manager，而且他說是 skills 和 context，因為 skills 不是唯一一種 context。這就是 Tessl 在做的。Registry 很早就有，概念一直是：這份 context 有版本，能以專業軟體團隊的方式消費。現在擴到 skills。`tessl skill install` 你要的那個。若你只想從一個 repo 下載，他們不擋。不加額外力氣，也會在 manifest 裡記住你從哪下載，並允許之後更新。會裝到你要的 agent。預設仍 commit 進 repo，這樣還沒裝 Tessl 的隊友不受阻。他認為對的終點是改掉那個模式：停止把那些依賴 vendor 進 repo，停止 commit 和複製，只留 manifest。就像在 repo 裡 `npm install`。`tessl install`，或只要 skills 就 `tessl skill install`，會按那個人在用的 agent 放到對的地方。Skills 需要更好的發行系統。

[36:48](https://www.youtube.com/watch?v=ntkM-hRblfo&t=2208s) Simon 把兩種差分開。有些解法更像目錄，不自己放內容，只指向別的 skills，有好處也有壞處。比較像傳統 package manager、自己放內容的，可以管版本和 manifest。發布到 Tessl，就有 eval、版本這些。若只想輕用，指向一個 GitHub repo，不必在 registry 裡發布或擁有，仍會進 manifest。缺點是沒有 eval，也挑不了版本，因為 GitHub 上那樣不一定是 registry 裡的一個版本，比較像指向最新。他把這看成開發工作流裡的一等公民：專業開發，以及稽核。我用哪個 skill 做出這些，去看 manifest。Guy 不想貶低現有能力。JavaScript 在 npm 之前就活得很好，Java 在 Maven 之前也是。它們不是產生價值的必要條件。但現在一切發生的速度，他認為得快。之後也合理期待 Tessl 做 package manager 裡的其他事：檢查 skill 是不是惡意；他們已經在跑 evals，給消費者指標。例如看見 17 個不同的 skills 想做同一件事，給一些訊號說哪個可能比較好、哪個比較差。向過去學，而不是忽略它。

## 從 PR 到上線之後的 log

[39:18](https://www.youtube.com/watch?v=ntkM-hRblfo&t=2358s) 生命週期的需要，幾乎都從「skills 是軟體」推出來，清單變得很明顯。Skills 要演進，所以要版本，原始材料要 commit。協作時要知道一次改動沒有退步，那就是 evals。每次 pull request 或修改都要能查。Skills 很少單獨活著。它們描述一種做法，但常常描述的是一個系統或一個 library，做法本身也會變。所以要有辦法保持新鮮。你改的不是 skill，而是旁邊的 API 或其他東西時，要能追蹤、知道 skill 該不該更新，並確認沒有退步。建構時要定義它。需要一套 CD。前面談的是 git 式的和 CI。還需要部署：現在發布到 registry，或若有變就 commit 到相關 repos，自動化，不要被忽略，也不要變成手工。最後是 observability。Evals 和合成測試都好，但它們不是 production，不是已部署的那樣。觀察 production 裡的 skills，就是觀察 agent logs。從裡面抽出 skill 沒起作用、使用者得手動叫它或糾正它的情況，以及失敗重複出現、也許該做一個新 skill 的情況。完整的系統是：一起編輯和協作 skill 的 code，一套 CI/CD，然後 observability，把迴圈關上。這些 skills 都需要。

[41:51](https://www.youtube.com/watch?v=ntkM-hRblfo&t=2511s) Tessl 的願景一直是：軟體開發會從以 code 為中心，轉成以 spec 為中心，或以 intent 為中心。開發團隊協作的是 intent、能力、怎麼做軟體、以及你在做的是什麼。Skills 是這個的一個很好的顯現，所以周圍需要軟體開發的那套範式。他們還會擴到 debugging 和其他。這是他們一直在做的一個版本。一些比較前瞻的客戶，在 skills 出現之前就用這種方式做 context，Tessl 在跟他們學。之後會有更多能力，包含 self-serve。他們想讓開源 skill 的開發者以很少的手工維護這些，組織也一樣。Self-serve 會再宣布。等不及的人，他說寫信到字幕裡的 contacts.io。Simon 補：想看 evals、用 registry 上的 skills、或發布，去 tessl.io/registry，拿 CLI，發布和消費都可以。Guy 說他們加了核心能力，但沒有主動對好幾千個 skills 跑 task evaluations，覺得還沒準備好。若看到缺的、或想讓他們評某一個，那裡有一個簡單的按鈕。Simon 說也許最後還會 acquire 一些。Guy 說不要過度承諾，要過度交付。
