# The Background Check You Can't Run on an AI Agent

Ian Livingstone 是 Keycard 的共同創辦人。Guy Podjarny 和 Simon Maple 在舊金山、AI Engineer 期間訪他，地點是 Ian 目前的據點。片長 47 分 42 秒，英文手寫字幕。Guy 說認識他是 Snyk 時期，以及他創過的公司。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=LNm5Wbsfp4c)

## 一句話

Agent 有用，是因為它能在大量資料上推理、猜測，而且 non-deterministic。從安全看，bug 就是這件事。雲端時代只要確認 Guy 是 Guy，就可以給很寬的權限，因為人做過背景調查，下一件任務還是同一個人。Agent 每次都是新的生物，沒有善惡感，也不會權威地說自己知不知道。所以身份不再只是認證。還要有任務當下的 mission：誰在做、代表誰、為了什麼目的。弄錯時，不能做出你沒打算的災難。

## 每一波運算都重問：誰能在何時何地做什麼

[3:43](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=223s) Ian 說身份跟運算一樣久。大型主機一有多個使用者，就要分 Guy 的檔和程式、Ian 的檔和程式，以及 Guy 能不能碰到 Ian 的東西。每一波都重問誰能做什麼、何時、何地。網際網路起來，TLS 帶來商務。雲端帶來 IAM、各家雲廠商的身份，以及 secret sprawl。Agent 是平台轉移，安全模型要重估。

[4:50](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=290s) 核心是它建在機率分布上，是統計訓練。美的地方是它能推理、能在大量資料上猜，而且 non-deterministic。那是功能。從安全看，bug 也是 non-deterministic，而那仍然是功能。功能和 bug 是同一件事。最後的問題是：agent 做的動作，是否對齊那個叫它去做的人的意圖。供應鏈安全和資料安全都是一部分。身份很基礎。想讓 agent 自主，也得先想身份。你要的自主愈多，安全方程式愈難。上一世代能用的系統，在新世代愈來愈不夠。身份問題收成：agent 犯錯時，怎麼確保它不會做出我沒打算的災難。

他舉兩種已經在發生的事。供應鏈攻擊讓資料庫密碼和金鑰外洩。最近的 LLM 攻擊，向量是把磁碟上長命的 API key 拿走，拿去把資料外送。另一種是六個月前很常見的：叫 agent 最佳化資料庫。一條路徑是把資料刪掉。Guy 接話：那樣確實變快。Ian 說那和使用者要的深深不對齊。這是授權和存取。和以前不同的是，他想依指派的工作或任務，給 agent 不同的東西。

[7:17](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=437s) Guy 把它拆開。Non-determinism 是安全：agent 多常選一件本來不會被同意的事。一部分靠 harness 和 context 把線畫出來。那比較是 agent workflow，不是身份。身份有兩塊：這個實體是誰，以及權限。認證、授權、身份，他這樣分對不對。

Ian 說，企業退一步問安不安全，或問我信不信任這個 agent 做這個動作。身份、存取、委派，每一代運算都是其中一塊。會有 deterministic 的控制，也會有 non-deterministic 的。安全工作常常是把模型偏往你要的方向，讓壞事比較不可能。安全方程式要的是有一組事永遠不要發生。他要的不是軟的 guardrail，是硬邊界。Sandbox 現在紅，是因為你永遠不能 100% 知道模型不會做這件事。要進 production、做這類任務，就得保證它不可能發生。最糟的情況從方程式裡拿掉。剩下的若做出怪事，不好，但不會毀掉公司，也不會弄丟客戶資料。Guy 補：它也許刪不掉整份收件匣，但還是收得到信。沒有紀錄的存取，就寄不出去。

## 共享密鑰，以及你對 agent 做不到的背景調查

[10:23](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=623s) 上一代給軟體存取的方式是 API key，也許是 service account，也許代表使用者，因為那是使用者的 API key 或 personal access token。世界建在共享密鑰上。密鑰通常死綁一個身份，也死綁那把長命密鑰上的一組權限。漏了，拿到這把共享密碼的人就能做那件事。

他要的世界是：Guy 希望 agent 長時間代表他運作，能看 Gmail 或 Google Drive。但只要要寫，例如代發信，他大概該核准。他用自駕車的自主階梯。Level 0 是 deterministic 軟體。Level 1 是 GPT 到 Copilot，或 Cursor 的 tab complete。Level 2 是 Cursor 的 agent 和 Claude Code。人還在不在。你不能一邊要自主、一邊要人不斷在 loop 裡。Cursor 或 Claude 進到 tool call，常常問 Guy：要做嗎？永遠都做嗎？你不會想對每件事都永遠允許。存取系統就是在往上爬時，怎麼讓它留在路上，而不是衝出悬崖。

[13:36](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=816s) Guy 覺得「身份」這個詞會混。一個問題是：跑在我這邊的東西，我知不知道它是那個 agent。是我在說話，還是我的 agent。系統分得開嗎。也可以是我的 agent 再叫另一個 agent，一路往下。另一塊注意力在它的決定：這一輪的權限範圍。可以起草信，不准寄出。

Ian 說，雲端那一代真正要解的是：Guy 去 Google Drive 時，能不能確認他就是 Guy Podjarny。授權當時不太在問題裡。因為若能認出 Guy、也信任 Guy，就可以給很寬的存取。隱含地，我們做過背景調查、打過推薦人。他不是反社會，他在乎別人怎麼看他，想把工作做好，被開除會很慘。所以可以信任他意圖高、不會惡意。下一件任務來的還是同一個 Guy。

Agent 基本上每次都是全新的生物，context 不同。它們沒有這是好還是錯的感覺。不是惡意，只是不知道。也沒有一種權威的方式讓它們說：我知道，或我不知道。人做得到。所以以前是：知道是這個人、信任這個人，設定好就大致能動。現在要看你指派了什麼、它們手上關於那件事的資料是什麼，再依 context window 裡的東西給不同等級的存取。這一世代很多是授權：這東西能做什麼。也是：這個 agent 看過什麼、做過什麼，好知道它在一個有邊界的盒子裡。系統判不了，就可以去找 Guy：這個 agent 想做這件事，你先看過再讓它做。

[15:43](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=943s) 他把這比成把軟體做成 Waymo。模型變好時，用同一套底層給更多自主。純摘要、拉一堆 context、幫你摘要一份文件，讀取全部可以。交易超過 500 美元，人得說：我不信任 agent 代我做這個決定。組織也可以說：我不信任 agent 碰到客戶資料。每個人、每個組織，依 agent 是什麼、誰在用、它在要什麼，信任方程式不同。

Guy 喜歡身份加授權、而且依任務。他看到兩種用法。一種是 agent workflow，你在跑它，有時寬、有時窄，委派還管得住，執行的是被指派的那件事。另一種是本地的 Claude Code、Codex 或 Gemini，在 IDE 裡，常常是一場很長的 session。你剛核准刪這個檔、永遠允許，接著去做別的，那個允許還在。那是不是沒救了，還是該叫人用得更有方法。

[18:21](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1101s) Ian 說有更好的模型。你指派任務：每天掃網際網路回來報告，或掃我的收件匣告訴我發生了什麼。那是長命行程。你不會想每天早上點同意畫面。你是把權限委派給它，代表你做。要委派給這個 agent、那個 agent，就得能辨認 agent。Foobar 這個 agent，在這個 context、這個任務上，有這份權限。換一個任務，權限不同。下游系統收到一個隨便來的請求，要問：它有沒有被給予它正在要的那份權限。既要知道 Guy 確實給了 Foobar，也要能辨認 Foobar 和 Guy。系統會想把來自 Guy 的請求，和來自 Foobar 的請求，差別對待。

他用信用卡 chargeback。你叫 agent 代你交易，然後說：等一下，我沒給它這個權限。中間人要能說：我們有紀錄，你告訴 Foobar 去做這件事，而且可以花到 500 美元，它做了，所以這筆 chargeback 我們不處理。上一世代的身份系統分不出 Guy 給 Foobar 的是這個任務還是另一個，也沒有 Foobar 在這條鏈上的位置。以前的安全姿態不必建這個。現在要。

## Mission：誰、代表誰、為了什麼目的

[20:33](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1233s) Guy 聽到三層。一，把我和我的 agent 分開，用各自的身份。二，授權對齊你剛給的任務。三，任務若不是事先定義好的短任務，而是長命 agent，還有一個當下才出現的東西：現在在做的任務是什麼。從這一刻、最後幾則訊息裡gather 出來。人不會每次都介入，所以得推論。

Ian 說前兩層是舊東西的規模問題：我們有系統、給它任務、給它一組權限。第三層是新生物。若去讀正在出現的標準，他們談的是 mission。使用者或其他人把工作派出去，你會想：我派給這東西的 mission 或 quest 有哪些。學到新東西，使用者會更新 mission。Mission 是把使用者的意圖寫成具體的東西。我打算讓這個 agent 完成這類任務。授權系統就能拿存取請求去量：這和人的意圖對齊嗎。Agent 的身份和它在做的任務，才能跨系統旅行。今天完全沒有。你叫 agent 替你在 Uber 訂位，Uber 無從知道它做的動作是否對齊你最初的請求。委派就是：這東西被指派去做什麼，我才能判斷它正在要的，是不是被指派的。

所以有人的身份、非人的身份，現在還有 mission 身份。他把它接上 session。1990 到 2000 年代的網站，登入產生 session，常常是瀏覽器裡的 cookie，用來辨認你是誰。現在 session 不只是你是誰。還是你代表誰在行動，以及為了什麼目的。三層。目的決定你能做哪些事。這是 agent 逼身份系統加上的複雜度，好在系統之間處理那些安全顧慮。Session 也會失效：閒置太久，或某個動作要求重新確認。觸發有很多種。

## 先找影子，再鋪一條能走的路

[25:16](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1516s) 他先不講單一產品。安全的人坐在椅子上想兩件事。一是找出 shadow agent 或 shadow AI。安全永遠在問：有哪些事在發生是我不知道的，才能量化。Guy 說他們對影子很執著。治理和安全裡很多錢，是在量化風險。二是 golden path。很多風險不是人意圖錯了，是不知道怎麼做對。那就是安全的路徑。市場通常先找風險、量化風險，再給一個該去的地方。 Consolidation 之後常常變成同一件事。從影子走到路。路通常是基礎設施。

他用舊市場比。社群網站起來，OAuth 起來，Auth0 讓開發者很容易做社群登入和使用者管理，那本來很難。內部流程是 Okta，一條登入的 golden path，再加上治理。雲端是 HashiCorp Vault 和 Terraform，用來設定 IAM，或放長命密鑰。上一世代問的是 golden path 在哪。

Agent 打破這些東西怎麼拼在一起的假設。它們跨系統，可以代表客戶、代表你自己，也可以只是你堆疊裡的一段程式，在維護 software factory、部署、除錯。互動不再由人驅動，但它們存在。怎麼管。

[28:07](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1687s) 新技術要做的是 session 和 mission 的證明。OAuth 裡有人想接手。Okta 提出的 Cross App Access 解了一部分，不是全部。看的人他稱為 ID-JAG。另外有一個全新的協定叫 Agent Auth，Dick Hardt 寫的，用新做法處理 mission 和 session 的方向，並離開長命密鑰。今天的做法一邊是找出並量化風險，在端點、production、或雲端帳號。另一邊是 golden path：讓開發者、客戶或員工能找到、建出、並成功地用 agent。

Guy 複述。OAuth 那邊是讓 agent 以 agent 的身份出現，而不是扮成人。今天常見的是登入打開瀏覽器，你以人認證，再把那把 key 交給 agent。協定要讓 agent 以 agent 認證，並有適當的權限。那是技術路徑，不解 mission。

Mission 的權限誰來定、什麼時候定。每次都叫人過來說：你在起草信，所以這些權限；你在最佳化資料庫，所以也許可以改 index。這站不住。

[30:26](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1826s) Ian 分兩段。個人和公司，尤其公司，會有一些事：沒有我在，agent 不能做。對他個人，大概是超過某個金額的花費，或刪資料。寄信他也很在意。那些不是 mission 決定，是地面規則。Mission 決定才是 LLM as a judge 出現的地方：用一個推理引擎判斷這件事合不合理。若不合理，誰決定接下來。撞上 deterministic guardrail，例如永不允許刪除，就直接否。或者它想做 X，要不要送給安全團隊的系統審，還是回到被代表的那個人：這個 agent 想做這件事，和你要完成的對齊嗎。

今天 agent 安全最大的挑戰是不要變成 consent fatigue。Yes、no、allow always 最糟的地方是你直接按 yes，因為你不會讀。安全系統若不是在適當、相關的時候才響，訊號就全部消失。Mission 的零件，一是協定和功能到位，好把「這個人說這東西該做什麼」聯邦出去。二是周圍那個真的能做判斷的系統。判斷愈好，打斷使用者愈少，做出的決定風險輪廓愈低，信任愈多，才有路走向更高的自主。

## CLI 沒有身份，MCP 有；Keycard 想三樣一起做

[33:02](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=1982s) 生態系在打 CLI 對 MCP。CLI 工具基本上沒有內建的 auth。MCP 出廠就有 OAuth。要當 MCP 就得有 OAuth。那條路能承接他講的一些概念。有些解法只做 MCP，有些只做 CLI。夠不夠。有一類 agent，尤其 coding agent，CLI 是看家本領，所以快。Opus 和 GPT-5 是電腦使用上的突破模型，把自主推到新的一層。另一邊是只有 MCP。要問的是：agent 需要哪種工具、我的生態系裡該跑哪種 agent、怎麼接。若 agent 在公司裡運作，他大概想接上 IDP，但 agent 和使用者的 IDP 問題不太一樣。

市場上的工具，一類像 IDP。一類像 MCP gateway，很常見，為 MCP 設計，是一個大 proxy。還有專門做聯邦式的 agent 對 agent 溝通。這是目前兩種地景。上一世代還有 Privileged Access Management：怎麼讓人碰到跑在 Amazon 或 GCP 上的 Postgres。CyberArk 被 Palo Alto 買下，是例子。再一桶是：我在做別人會用的 agent，我的 agent 或 MCP 怎麼讓使用者認證，好把身份和存取帶下去。

Guy 說這聽起來都很企業。個人或團隊在自己的流程裡，也會想要 mission 身份和 mission 權限。有沒有那個解析度的解法。

[36:31](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=2191s) Ian 說 Keycard 想讓團隊很快撿起 agent，也很快建自己的，不被 MCP、CLI 或某個規模卡住。不是 MCP 或 CLI 二選一，也不是 PAM。三樣合在一起。不同身份、不同姿態，放進一個好採用、好拿來建的系統。

開發者的感覺是：用 Claude Code，想給一些存取。下載 Keycard CLI，用 Keycard 跑 Claude、Cursor、或他說的 Pi，或你的 harness。他們接 hook。你告訴 Keycard 這個 agent 能碰哪些東西，可以是一組 MCP、一組 CLI，或代你做的 tool call。從那時起，不再是 yes、no、allow always。Keycard 做決定。若是刪除，你大概該審。本地、sandbox、或雲端，同一套。一個插入點，讓 agent 長成 software factory 並有自主。另一面是你在做服務、agent，或給 agent 呼叫的工具，想用最新的協定，又不想變成 auth 專家。可以用他們的 SDK。

兩個價值。一是一個聰明的引擎，判斷誰該核准什麼，並吃你的輸入。二是應付 agent 增殖：很多 agent，同一套邏輯放在不同地方。再接到上層：中央平台團隊怎麼把決定下到不同桌面。他們先讓個別開發者成功，再讓一組人跨 harness 一起走：什麼資源、什麼情況。時間拉長，中央安全和平台團隊既要能在全組織鋪開，也要有信心對高度自主說 yes。

[40:55](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=2455s) Guy 信由下往上，也信開發者體驗。世界同時很熱中中央控制。張力不是誰對誰錯，是不同時候強調什麼。他帶走的是 mission 身份，以及由 agent 決定的那組權限。定義、強制、觀察、隨時間改、圍繞它們推理、再強制，都是系統以後的演化。新的實體是 mission 身份和權限。

Keycard 最後聚焦的是：怎麼理解 agent 在做什麼。怎麼讓它們做事，卻不必人為地寫死所有嚴格、長命的政策。用高層描述：哪些情況我真的不能接受 agent 做。對他，很多是刪除。其他情況，他可以接受系統代他判斷允不允許。這樣才走向更高自主，又不會有糟的下游。他跟企業和個別開發者談，概念上都覺得好，問題是怎麼鋪。高層政策加上 LLM as a judge，讓人看見：我不必坐在那裡人工寫幾百行政策檔。上一世代很多安全工具，部署就是死在那裡。對人的時候我們也做不好。Agent 之前那些麻煩但還能湊合的問題，現在不能忍受。他常說：雲端的 best practice，現在是 agent 的基本要求。Sandbox 和雲端環境仍是。從 waterfall 到雲端時也一樣。

## 三年後，逼出來的會是企業的錢

[43:22](https://www.youtube.com/watch?v=LNm5Wbsfp4c&t=2602s) Guy 問三年後身份生態系會怎樣。三年感覺像一輩子。Ian 說新協定會真的被部署。現在坐在上一世代那種像 OAuth 的實作上，其中多數並不好。你用喜歡的廠商的 MCP，會問為什麼不是我想的那樣、為什麼要這麼多。他認為網際網路的未來、以及 agent，會讓一切感覺可插拔，互操作非常重要。想要 agent 優先體驗的公司，會把跨 agent client 的互操作放很高。多數人會去建全新的 auth 元件。對終端使用者，把一堆工具拉在一起會容易很多、好很多。

企業那邊，以前很多 silo，是因為政策太難寫。他預期 silo 變少，生產力更高，context 分享更多。有很大的承諾，也因為身份和存取系統會升級到允許互操作。企業允許這些東西互相溝通，安全團隊仍有保住公司安全需要的東西。系統以前不連，常常就是因為沒有好方法管資訊分享。

Guy 說這很樂觀。三年內標準會被定義、系統會做到，並不是給定的。那是志向。驅動力是 agent 強到成為 forcing function，沒有選擇。身份和存取過去 30 年的歷史是：逼出演化的通常不是消費者。線上購物加 TLS 是例外。真正推的是企業。他們要生產力，或有安全要求，就對所有廠商說：你得實作這個，我才繼續把那 2500 萬美元花在你身上。廠商不會把那筆收入推開。這一代特別的是，工作場所的 agent 採用比家裡快得多，ROI 高得多。有些以前的模式被反過來。所以他預期下一代安全堆疊會比他通常估計的演化得快。Guy 覺得有點樂觀，但 forcing function 很強，VC 也因為這份急迫在資助轉換。

想看 Keycard，在 keycard.ai。他們願意示範，怎麼規模化地採用 coding agent、並建自己的 agent。
