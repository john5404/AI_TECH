# Revolutionising Spec-Driven Development with Tessl’s Framework & Registry

Guy Podjarny 和 Simon Maple 在 AI Native Dev 宣布兩項產品。片長 37 分 11 秒，英文自動字幕。Tessl 常被聽成 Tesla、Tessle。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=fjbeqFnB3LY)

## 一句話

Agent 很強，也不可靠：衝去寫第一個想到的做法，說修好了但其實沒有，還會幻覺 API。Tessl Framework 用 MCP 接上 agent，先把 intent 收成 spec，再寫 code、再長出回歸測試。Tessl Spec Registry 則是一套給知識用的相依系統，裡頭已經有超過一萬份、按版本分好的 usage spec，讓 agent 不要用錯函式庫。他們把前者放在控管中的 beta，後者已經開放 beta。

## 審不完，是因為它太有自信

[2:04](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=124s) 他們說產品已經在 tessl.io（字幕 Tesl.io、des.io）。更大的那層問題他們講過很多次：軟體今天是 code-centric，code 裡忘掉當初為什麼要做這個產品。目的地是用 spec 定義軟體。這集要打的是更具體的 agentic development。

[4:08](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=248s) 用 agent 開發的人會看到：它們強，也不可靠，而且過度自信。你要一件事，它們衝去寫腦子裡第一個解法，常常是錯的，或聽錯你的意思，事後才修。它們會編。Guy 舉的話是：我修好了；或者 75 個測試過了 59 個，我覺得可以了。不行。它們幻覺外部資訊、幻覺 API、有時幻覺整個函式庫。專案愈大愈明顯。你把 agent 管束到一個安全點，加一個功能，別的東西又壞了。結果是永遠在審：它們做了什麼、對不對。錯了也很難事後修，因為你不知道要退多遠，還是整段改動都 revert。留下來用的人，每天的技術就是怎麼少審一點、讓 agent 做你要的事。很多人則是被擋住，進不了專業場景裡的 agentic development，因為系統太不可靠。他嘴上一度說成 too reliable，隨即改口。

[7:00](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=420s) Simon 的兩個痛。一是 vibe coding 一開始很魔：給一點、拿回很多。應用大到有一定功能，就碰到天花板。改一處，別的也跟著變，即使他早就說過那裡要怎樣運作。先前的話還在原本對話的 context 裡，agent 仍會忽略。把牠拉回軌道比繼續做更累。二是結死了，只能重來。這讓人到不了企業、正式環境要的那種可靠 code。

## Framework：spec 比這次改動活得久

[8:31](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=511s) Tessl Framework 是 spec-driven 的框架，用 MCP 接上 agent，支援所有有 MCP 的 agent。你說做一個 to-do app，它先靠 Tessl 的工具和指引寫出一份好讀的 spec，再說要建什麼，然後才去建。Simon 說這種衝錯，不是每天，比較像每小時。他愛短 prompt，因為快；另一種是大應用裡的小改動，agent 卻去改別的地方、把範圍撐開。

[9:43](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=583s) 第一個目標是把 intent 和實作分開。你對 intent、對做出來的東西放心之後，一個指令可以產生測試。Spec 一開始就帶著很多當例子的 test case。Agent 要多花力氣：架測試環境、迭代，但相當自主。那些測試接著變成回歸，避免 Simon 說的改一處、壞別處。先寫測試再創造，或先做出來再補測試，他們不規定。同一個人、同一家公司、不同任務，會不一樣。有時你意見很多、事情夠重要或夠獨特，例如一套新遊戲的規則，就值得先寫 spec、審 spec、確認測試代表你要的，再把 agent 放出去。有護欄，它可以比較自主地做到對為止。

[11:49](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=709s) 另一種他們開始叫做 vibe speccing（字幕 vibesing、vibespecking）。前一集 Datadog 的 CEO 兼創辦人 Olivier Pomel（字幕 Ollie）說過，客戶最大的謊言是：重要的話他們會花時間。實際上人和他們的使用者常常只想盡快拿到能動的 code。這種模式不先寫測試，你也不確定要什麼，就跟著走，決定仍由 agent 做，但那些決定被收進文件，後面才走得動。就算走隨便的那條，回歸測試仍護著以後的演進。最後拿到的是同一套東西：code、用來確認 code 滿足 spec 的測試，以及仍然握著 intent 的 spec。

[13:02](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=782s) Guy 說這是軟體開發以前沒有的長期記憶。Spec 進了 codebase，記下產品該做什麼。文件、地下室那份落灰的 PRD、碎掉的需求、使用者文件都在，但它們不是變更實際套用上去的那份檔，所以會過時。Framework 真正的價值在你繼續長的時候。能的話，改檔要經過 spec。呼叫 Tessl 的 edit，先改 spec，再改 code。Agent 亂來，或你有正當理由直接改了 code 或測試，他們有辦法偵測並把 spec 補回來。Spec 裡累積愈多，就愈能用 LLM 試很多種做法：讓 code 更快，或從 Python 換到 TypeScript、再換到 Java，而不必擔心功能在過程中壞掉。

[15:26](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=926s) 他要澄清產業裡 spec 常常指從狀態 A 到狀態 B 的轉換。他們不是這樣想。Tessl 的使用裡會自然產生 plan，plan 的壽命是這一次變更。Spec 是描述功能的那份確定文件，壽命跟 codebase 一樣長。

## Registry：函式庫怎麼用，是另一種 spec

[16:26](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=986s) Spec Registry 對上的痛是：agent 不知道，而且不知道自己不知道。最明顯的是第三方 API 和開源函式庫。主流的它們很厲害。偏一點、熱門函式庫的舊版，或模型訓練時還不存在的新版，它們就現編，用錯的 API，有時卡在那裡燒時間和錢，有時最後摸出來，但實作留下一團。Simon 用 Java 世界作例：函式庫的 API 過很多年一直變，模型學到的是最紅的那版。他不是總在最紅的版本上，有時是舊 stack，有時是 bleeding edge。這不完全是幻覺，而是它假設你跑的版本，卻沒有拿對的 context 來生成。

[18:16](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1096s) 這是 context 問題。有時資訊根本不存在，例如全新版本。有時統計上不夠顯著。有時它不可能有，例如團隊自己的做法。Registry 把這份知識變成專案的一部分：一套給 spec、給知識用的相依系統。專案裡多一份 manifest，指向 spec pack，也就是帶著對的資訊的 spec 套件。開源這塊，registry 已經先放了超過 10,000 份 usage spec。它們是分析特定版本的函式庫程式，再加上網上那些版本的用法，全部有版本意識，包成 agent 好消化的一小塊。Markdown，有章節，拆成多個檔，讓 agent 在對的時間載對的那份。舊版就用 Tessl registry search 找到 usage spec，寫進 manifest，下載到專案裡，像 node_modules。之後靠 Tessl 的工具，甚至 agent 自己，都能找到。資訊是對的、屬於這個專案、所有 agent 都拿得到，不必指望它們想起要去找，或找錯。Stack 或做法變了，給 agent 的資訊也變。

[20:25](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1225s) Simon 把兩種 spec 分開。Framework 產生的是藍圖：我要你這樣建應用。Usage spec 是告訴 agent 這些函式庫和元件該怎麼用。他比喻汽車的 Haynes manual（字幕 Hannes）：那本書告訴你每個零件怎麼運作，不告訴你怎麼開車。只知道有哪些 API，是半套故事。Usage spec 給的是用法、例子、最佳做法。Guy 說他們正在定義 functional spec 和 usage spec。以後做一個函式庫，用來把函式庫重新生成出來的，可能比較像 functional、也比較技術；給使用者和以後的開發者看的，則比較像 user spec。現在幾乎沒有軟體是用 spec 定義的，所以他們是在為 code-centric 做出來的軟體，寫給 agent 的文件，並且做成 agent 好用的形式。推論的錢他們先花了，你現在裝上，就能讓 agent 把開源用好一點。

[22:53](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1373s) 他認為 agent 需要的不只 usage spec。例如在我這個組織裡怎麼加 analytics、怎麼跑安全掃描並修漏洞、該用哪個 logger。Agent 可以猜，猜出來的會不一致，也常常錯。這份資訊要一直在這個專案裡，而且跨 agent，因為團隊會換工具。現在先拿來把開源用好；之後再想你會往 registry 發布什麼、還想在裡面找到什麼。

## 一個開放，一個先卡住；路是找了快一年半才對上

[23:47](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1427s) Simon 說 shut up and take my money，今天就能用嗎。Guy 說幾乎。Spec Registry 是 open beta，到 tessl.io 點幾下就能裝進 agent 環境，他們要回饋。Framework 仍是 controlled beta。活動零件多，用法很多，自由太大，使用者容易射到自己的腳。這仍是大規模的控管 beta。他們要先把 onboarding、護欄和該學的東西磨好，讓大家不要在同一套做法上碰到同一批問題。正確的 spec-driven 方法他們沒有宣稱解完，這是一個版本，要跟社群迭代。可以登記、要求存取。他們打算邊學邊放很多人進來，但會錯開，避免所有人同時撞上同樣的問題。希望相當快進到 open beta，然後才收錢。文件開得更多，沒有存取權也能看 Framework 怎麼用。tessl.io 上有影片。他們還想再請 Macy Baker 上節目做示範。Discord 裡 AI Native Dev 社群有 Tessl 頻道。有用的回饋，就算是批評，也可能把你在等待名單上往前推。Guy 說那是有用程度的比賽，不是人氣比賽。

[27:20](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1640s) 公司快一年半。Spec-centric 是未來，這點一直沒變，很多核心概念意外地還是同一套。他們也知道自己錨在未來，而當時的 LLM 還做不到。幾乎一年裡他分成幾章。一開始是天真的一章：做一個在網頁式環境裡用 spec 產生軟體的平台，對一段時間內能做多少很樂觀。大約六個月才比較懂當時 LLM 的能力，路還長，想法太多。接著改成很受控的網頁式路徑，用來做軟體元件。這次能力對得上：可以用 Tessl、用 spec 做出軟體程式庫，字幕把那個體驗聽成 next next。使用者有興趣，但太窄，改變也太大，意見太強。要先停在某個階段，再 code gen，再測試，再匯出、發布。他們改過好幾次，想弄清流程該不該是線性的、使用者想不想跳階段。元件當時不夠好，所以得牽著手走。最後那個產品不值得這一大跳，窄到你其實不能用這個方式開發軟體。

[30:16](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1816s) 他覺得對上的這一章，是放棄封閉的網頁式環境，回到本地、以檔案為本、開放、可以動手改的環境，以及 CLI。Agent 從兩方面成為關鍵。能力上，它們能生出更多；之前的迭代裡他們其實已經在做一種 agent，但 Claude Code 和終端機那套明顯做得更多。更重要的是，它把要解的痛做成了立刻看得到的版本。原本的痛是：做著做著，過幾年忘掉軟體該做什麼，只剩下 code，軟體變脆。Agent 是那個問題的縮影。它們失憶。今天叫它做的，明天就忘。Code 是它們寫的，所以沒有人懂裡面的意思。Code 裡的資訊不夠。其他症狀也像軟體開發，只是更快：會聽錯，就像開發者也會，但迭代快，所以更快做出錯的東西，事後修更難。好的開發者聽到「我要這個改動」會停下來問產品影響、要滿足哪些 use case，才能排工作。他們是在讓 agent 做這件事。概念仍是一年半裡反覆改的那些，但現在有一個真實使用者、一份可以漸進處理的痛：讓這個人把 agent 用得更好。他說以前知道目的地，不知道路從哪開始；現在找到了 trailhead。

[33:00](https://www.youtube.com/watch?v=fjbeqFnB3LY&t=1980s) Simon 說這是他第一次這麼早加入一段新創旅程。新創可以很快說這條路不對、那條才對，而 AI 在幾個月裡把產業改得比什麼都多。Guy 最以團隊的適應為傲。現在大約 37 人。他們寫過很多 code，後來刪掉，有時是因為章節換了，有時是 LLM 的演進讓那些 code 不再需要。人很容易黏在自己做的東西上。團隊盯的是把願景做出來、給使用者價值。內部最大的抱怨是想要更多使用者。探索的時候一直有使用者，但量不大。他說團隊沒有 ego，人變多了仍能對齊，最近幾週為了這次發布做了很多。接下來最好的機會是跟使用者打交道、回應問題、用現在的速度繼續做。他自己會在 Discord，但解問題不是他最擅長的；想聽哲學式的閒扯可以找他。他們沒有宣稱解完 spec-driven development。會迭代、修你碰到的問題、聽還沒解的需求。Simon 說有趣的部分現在開始。
