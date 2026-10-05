# Tessl Raises $125M to Build AI Native Development

Simon Maple（字幕 Sam）這集反客為主，訪問 Tessl 創辦人兼 CEO Guy Podjarny，以及大約兩個月前加入、負責 product 的 Ben Galbraith。片長 35 分 22 秒，英文自動字幕。Tessl 常被聽成 Tessle、Tessel。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Y3k6HzkFxVo)

## 一句話

他們宣布總共 1.25 億美元：4 月由 Boldstart 和 GV 領投的 2500 萬種子輪，以及剛結束、由 Index 領投的 1 億美元。錢不是用來訓練 foundation model。Guy 的前提是今天的開發是 code-centric，what 和 how 焊在同一行裡，所以又脆又難維護。LLM 讓不完整的 spec 變得可行，也讓「它到底做了哪些決定」變成必須有一套手藝來處理的問題。

## 同一行 code 裡，做什麼和怎麼做拆不開

[1:05](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=65s) 宣布放在前 30 秒。種子輪實務上從 3 月談到 4 月，Boldstart 和 GV 領投。新的 1 億由 Index 領投，Accel（字幕 Excel）、Boldstart、GV 再參與。Guy 說這讓他們有燃料，朝那個大願景建。

[1:43](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=103s) Simon 通常是共同主持，在 Tessl 跑 DevRel。Guy 之前創了 Snyk（字幕 Sneak），把它做成 developer security 裡的一家數十億美元公司，更早在 DevOps 做開發者工具。Ben 從灣區搬到倫敦，太太和幾個孩子一起來。他在 Google 做過 Firebase、Chrome、identity 的 product 和 design。更早在 Walmart Labs 負責全球電商的 product、design 和前端工程。再之前是 Mozilla 和 Ajaxian，談當年的 dynamic web。他和 Guy 從 Walmart Labs 就想共事，大約 15 年。Guy 說，要合作，條件就是把全家搬到倫敦。他們拿氣泡飲料敬了 1.25 億。

[4:05](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=245s) Guy 的前提：今天的軟體開發是 code-centric。Code 把系統做什麼、以及怎麼做，耦在同一行。人或 LLM 讀實作，想從裡面同時拆出 what 和 how，頂多靠幾行註解。Code 變成 source of truth，愈長愈難拆。邏輯被精煉、被最佳化，邊界情況多一個 if，註解和文件因為沒有立刻的維護價值而失準。環境是動態的：相依、開源元件、framework、作業系統、你用的服務都會變。你改 how，這在維護時是必要的；你加一個功能，也可能弄壞另一個。每次都很難知道你沒有改到應用到底在做什麼。測試也把 what 和 how 混在一起測。拆成更小的元件沒有碰到核心。他認為 AI 有機會把這兩件事分開，讓軟體比較好做、比較好維護、比較不脆，也比較好改進。

[6:16](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=376s) Ben 說產業想做這件事很久了。大約 20 年前 Charles Simonyi 的 Intentional Software 也看到：文件和註解裡有一份系統描述，code 是平行的另一份重述。他想讓註解成為行為的正典，再由此導出系統。Ben 認為當時沒有需要的工具。現在 LLM 會補空。Claude 和 ChatGPT 都讓人體驗過：一句很短的描述，模型把空隙填滿。填完之後怎麼維護，用 chat 來回，大家都不滿意。他眼中的 Tessl，是把 LLM 已經證明很會的事接上一種可以持續維護的結構。另一個大問題是怎麼有意義地驗證它做對了。隨機性做在系統裡：這些模型都有 temperature，明示的意思是不要做你認為該做的，做一點隨機的。Gap-filling 必須配上一套驗證，spec-driven development 才活得起來。

## 產生 code 的 UX 很多，留下來的仍是 code

[7:54](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=474s) Simon 問，為什麼現在一堆 AI assistant 補不上這個洞。Ben 分成兩層。一層是加強你今天在寫的 code。模型非常會產生 snippet，你還可以多擲幾次。這很自然，也確實有用。退一步問怎麼用這個方式做出整個系統，就是另一個挑戰。這把他和那片工具海分開。偶爾有公司在碰，大體上仍空著：怎麼用 LLM 擅長的、承認它不擅長的，在上面做出真的能擴展的系統。他用 cloud 作比。真的想 cloud 能做什麼，不會把一台 VM 塞進某個 cloud host，而會為了用上 cloud 重新設計。AI native software development 這個詞，對他就是在說一種新的開發方式。

[9:26](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=566s) Guy 接的是：使用者常常用話講出 intent，LLM 補空，當下有用。然後呢？今天多數工具是不同的 UX，走完一段或長或短的過程，最後產出 code。Code 才是從一個版本活到下一個版本的資產。那些應用自己往往沒有更長的生命，你匯出之後繼續在 Python 裡改的仍是 code。How 和 what 繼續混在一起。Spec-centric 是讓 spec 抓住 intent：你要什麼，以及怎麼驗證做出來的東西滿足它。驗證怎麼定義，他們還有很多工作。這份東西才是一直養下去的 artifact。有了這個說出你要什麼、以及怎麼確認它是對的中心，才能把 LLM 的創造力接上：好幾段非決定性的、由 LLM 或其他方式驅動的最佳化，去改實作。若新資產沒有被做出來，你就永遠得從 code 裡回推，哪些是實作上的打算，哪些才是原本的 intent。

[11:19](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=679s) 他要標出兩個解鎖。機器會寫 code，這比較明顯。另一個容易被當成理所當然：你可以給不完整的 spec，系統會補。你說做一個井字遊戲，不必講規則，因為 LLM 知道。這讓 spec 變得可行。對比以前那種正式 spec，痛到用不下去。同一件事也是麻煩：它做了哪些決定？你怎麼跟那些決定互動？Spec 和實作之間的自由度怎麼定？這些都要一套手藝，那就是他們在建的。

[12:23](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=743s) Ben 想到 test-driven development。TDD 想推動的就是這種開發，但人和測試、和實作都要自己寫，勞動太多。少數團隊做到，多數人到不了。他不認為 spec 會感覺像一份測試清單，但手藝會讓做過 TDD 的人覺得熟。他出身工程，過去大約 12 到 13 年多在產品側。他不在乎 Swift 或 TypeScript 現在流行什麼，也不想學列舉資料結構或非同步 callback 的新模式。他很願意和 LLM 一起，在高一層寫系統該有的行為。Spec 該停在哪一層，要跟社群一起找。現在的實作有具體想法，對不對還要看。

## 這筆錢是為了走長，不是為了買 GPU 訓練模型

[14:23](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=863s) 種子輪讓他們起步，也找到路上的夥伴：Boldstart 的 Ed Sim，GV 的 Tom Hulme（字幕 Hume）。Guy 說自己是控制狂，不喜歡放掉控制，但需要向周圍的人和投資人解釋，這種課責是健康的。這輪是開場：這不是他隨口講的念頭，是一個任務。Ben 當時還在外面，覺得第一輪表示認真的人相信這個願景；更大的一輪則驗證了 Guy 和團隊一起長出來的概念。團隊現在大約 20 人。有足夠的資本走完這段，不必為了活下去走奇怪的路。這是一個大膽的新類別，旅程會很長。

[16:57](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1017s) 這輪不必發生在現在。2500 萬還沒花掉多少。機會是 Index，以及他認識超過十年的 Carlos。Carlos 之前是 GoCardless 的 CTO。Accel 也參加。Guy 認為找對投資人不會單獨改掉公司軌跡，但對的人很有價值。他們從整個市場看，團隊則看到 bits and bytes，視角才完整。人也要一路跟著走，才知道什麼該守住。他們想的是一家活很久、最後會上市的公司，重要股東要對方向有信念，不只是對 traction 興奮。還早，投資人興奮的是團隊、願景，以及一起做。Ben 補了一句：有些大額募資明顯是要做新的 foundation model。那不是他們的願景。他們認為站在既有的、以及生態系裡冒出來的模型上面就到得了。不要把這筆錢看成跟模型廠商比燒錢。2500 萬請得起 Simon；Simon 接梗說，那 1 億就是再雇 19、20 個人。

[20:29](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1229s) 已經公開的有這檔 podcast、11 月 21 日一場談 AI native development 的虛擬會議，談組織今天怎麼開始用 AI 工具，以及上週啟動的 AI Native Dev Discord。社群不綁單一廠商。

## 第二代平台、開放生態，以及模型會作弊

[20:29](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1229s) 平台本身是讓 AI native software development 發生的東西。到目前為止是各種迭代，跟友善使用者試，看哪裡糟、哪裡有吸引力。自己團隊在用，也辦 hackathon，做他們稱為 tile 的軟體單位，看喜不喜歡。還沒見光，已經在第二個主要世代上大幅改，目標是 2025 年初的 beta。他們相信要 ship，讓人說產品很糟、並說為什麼。沒有第一次就做對的幻覺。同時要尊重別人的時間，不要讓所有人去撞他們已經知道、也修得掉的問題。要讓人看見夠多那個未來，才有得參與。

[21:47](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1307s) 他擔心每個新技術、尤其是 AI，會偏向圍牆花園：小、封閉、意見很強的生態，因為破壞性的東西在窄的脈絡裡比較好懂。很多公司自然走向「我做端到端」。Netlify 的 Matt 在談 web 時也提過：是一個懂整份 codebase、然後什麼都給你的產品，還是可組合的。他們要開放生態。技術會移，不同的人做不同的一塊。他們想做一條自己就夠用的端到端流程，同時認為對的未來是可插、開放、可延伸。工具的人做片段，團隊再組成自己的建置流程。社群從明年初開始，會指出平台裡的荒唐，產品改了再把圈子放大。

[23:27](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1407s) Ben 說產品上有趣的決定是何時交給社群。願景在很多維度上都很大，有里程碑，誘惑是第一個里程碑就放。他們在想 generator、系統怎麼產生文件、以及幫人建哪一類系統。Decomposition 是大塊：複雜系統怎麼拆成仍然有效的簡單部分，decomposition engine 要投多少。最近一次測試的學習是資訊不對稱。輸入可以很短，例如一個在色彩空間之間轉換的小工具，系統能生出大量東西。他們做得到一次大生成，拆成許多塊、寫出各塊的 spec 和很多 code，但人消化不了。有些人想被帶著走，沿路看系統補了哪些空、並影響它。有些人只要最好的一擊，再決定喜不喜歡。兩種最後都合理。有時先做基本的再加，有時一開始就設計得很細。現在要縮成能 ship、讓人開始用的東西。客製也是同一種拉扯：只示範一條 spec 流程，對上的人就少；每個點都留延伸和修改，體驗就不那麼順。

[26:50](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1610s) Guy 覺得最大的學習是 LLM 今天什麼做得好、什麼做不好，以及怎麼把一次生成收成可以往前送的計畫。他起初低估它們有多願意作弊。Spec 裡如果附上測試，團隊擔心它會寫 if：你說給三就回七，它就寫成拿到三就回七。他當時覺得模型是為了給正確答案，不是為了作弊。結果它們作弊得很漂亮，帶著許多人類的習性。對付的方式也像對付人：在 prompt 裡強調不要這樣做，或加一個 critic 問它有沒有作弊。叫它做 QR code generator，它交一個 placeholder，也是同一類。他認為應付這些怪癖是主要洞察。有些問題他們會自己解，有些會把流程和系統交出來，讓別人用自己的情境去解。

## 估值、以及 2025 年初

[28:43](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1723s) Simon 問那些募到離譜金額、估值也離譜的 AI 公司。Guy 先開玩笑說本來可以估更高，他們選擇穩健、估得謙虛，然後承認其實估得不錯。數字沒有說出來。他認為原因有好有壞。有些人和投資人被數字晃到。投資人的誘因很複雜：carry，以及管理費。最 Cynical 的讀法是趕快把錢部署出去，費就賺到了。也可以是必須留在場上試，幾筆失敗可以接受。也有真的相信其中少數會變成 OpenAI 那種：估值嚇人，生意卻很快長到數十億營收。大額募資他粗分成兩營。一營是要買 GPU、訓練系統。他比較難抓，覺得像工業：模型折舊很快，蓋一座工廠來訓練，然後把它燒掉，電力也在流失。Ben 剛到英國，比喻成預算帽之前的 F1：鞋帶預算也能組隊，但大概輸給 Ferrari、Mercedes，也許還有 McLaren。OpenAI、Google、Anthropic 這場，他很難想像新創就算募得很大也走得完全程。玩這場就得有那筆錢。另一營是他們這種：大額是因為任務大，想走完全程。

[31:14](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1874s) 不募資有兩個理由。一是選擇權：每募一次都是加倍押注，因為出場或被併購的估值被抬高了。他們和團隊進來就是要做大的，這個因素比較小。二是錢花在還沒準備好花的時候，用花費製造產品市場契合的感覺。他們靠團隊和自己的經驗，準備好了再踩油門。Simon 問，所以麥克風前才是蘋果汁和氣泡水。

[32:01](https://www.youtube.com/watch?v=Y3k6HzkFxVo&t=1921s) 問得出貨的月、日、時間。Guy 先說 15 號下午 4 點，然後說日期還沒定。Simon 以為聽到 12 月 15 日。目標是 2025 年初有東西，不更具體，但要在公開場合和社群一起做，而不是在實驗室裡做兩年的 R&D。Simon 說那就是前 12 個月之內。他們不要一個 Tessl 專有平台，再請志願者來把它養肥。要的是一起把這個類別定義開來。人用這套工具練出來的技能，應該是這個新類別裡通用的技能。Waitlist 已經開了，去 tessl.io（字幕 Tessel.io）登記，多講一點自己，比較早被拉進來。他們要早期社群裡有各種使用者。Discord 和幾天後的會議也在。下一集 Guy 回到主持。
