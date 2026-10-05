# The New Dev Skill: Multi-Monitoring 10 Agents

片長 52 分 23 秒，英文手寫字幕。Simon Maple 訪問 Ran Aroussi，Automaze 和 MUXI 的創辦人，也是 yfinance 的作者。節目是 AI Native Dev。中間有 DevCon、Tessl 活動和訂閱的廣告，下面不記那些。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=_XNMBj-ewE8)

## 一句話

Ran 把「agentic workflow」看成矛盾。Workflow 是你已經畫好的路，agent 若真的自己做決定，那就不是 workflow。確定的步驟用腳本，模糊的那一步才灑上 AI。人要留在兩端：計畫裡的 definition of done，以及確認它真的發生。中間靠約束，綠燈就夠，不必再看 code 漂不漂亮。新技能不是多工，是同時看住大約 6 到 10 個 agent。至少一年前，他已不需要為了寫 code 去雇初級開發者。若因此停止雇他們，就永遠不會有下一代架構師。交付變快之後，客戶的 backlog 接著做，月費沒改，每個功能變便宜，人留得住靠的是分成，不是 SaaS 那種股權故事。

## 從 Yahoo 的公開 API，到一支 formation

[3:05](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=185s) 他的開發生涯從 35 年前開始。做過團隊主管、CTO、CEO，產業都挨著技術。開源的愛從 1990 年代末開始：他的一間新創為了有資料庫得募數百萬，後來同樣的事可以免費發生。從此只要不是商業秘方，他就做成開源函式庫。yfinance 是其中一個，而且真的飛起來。他做過演算法交易，要一個免費、很 Pythonic 的行情來源，於是靠著 Yahoo Finance 寫了這個庫。最新數字大約每月 2500 萬到 3000 萬次下載。幾年前他還以每月 60 萬自豪。數字一直疊，因為你叫 AI 寫任何跟行情有關的東西，它就會用這個庫。他認為這是過去一年成長的一部分。

[5:01](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=301s) Simon 問 Yahoo 是不是曾經拿掉 API。他們沒有。這個庫不是爬網頁，用的是 Yahoo Finance 的 API。對方很努力不把它寫進文件，但它是公開的。他收過 cease and desist，指出這是公開 API 之後對方退了。他猜那些人甚至不是 Yahoo 雇的，只是想把 Yahoo 開發成客戶。不是只有這個庫這樣做。他在乎的是介面 Pythonic、簡單，把需要的行數砍下來。

[6:03](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=363s) 過去四或五年他經營 Automaze。現在叫 FDE 的做法，是把開發團隊嵌進新創和其他組織。他當公司的 spirit，幫專案寫 spec，因為幾十年同時走產品和技術，兩種語言都會。真正寫的是散在歐洲的團隊。MUXI 從寵物專案變成很大的 codebase，使用量遠不如 yfinance。他對部署 AI 的看法是：agent 是 primitive，給它們自己的 application server，不必寫出一整個 agentic 平台，部署就好。像 Docker，`muxi pull`、`muxi push`。拉下來的 formation 是整套配置。

[7:26](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=446s) Formation 不只是一組 agent。最上面有他叫 overlord 的 orchestrator，決定這套 formation 的個性。Agent 是 minions。他不想記住哪個負責信、哪個文筆好，只想跟 Jarvis 說話，讓它去管。Formation 說明用哪些 model、後端在哪、role-based access、給資料庫多少記憶體：組織部署可以用帶各種擴充的 Postgres，自己用就 MySQL。全是設定檔，沒有 code，YAML，格式叫 agent formation schema。開源，在 agent formations。每個 agent 的 soul、能做什麼、工具、領域知識都在裡面。記憶分很多層：preferences、memories、decisions、claims，還有 working、buffer、episodic、recent。他想模仿人腦。誤會是把觀察和 logging 當成記憶。他認為記憶是知識蒸餾之後還叫得回來的東西。這段對話不會字字記得，會記得結論和同意了什麼。Agent 的記憶該這樣。你要設定的是它能做什麼。Stripe 的 MCP 有一百萬個工具，你只要兩三個，不必把其餘的載進記憶。這是從他自己的 Jarvis，以及他們部署過的組織裡長出來的。他們在美國另開了一間公司，做組織層級的 agentic AI 部署。

## 技術上可以全自動，他不給那個旗標

[10:42](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=642s) Simon 問界線畫在哪：自己修、自己調，還是人仍要看過。是技術線，還是信任和文化的線。Ran 說是信任。技術上可以做完全自主的系統。AI 會幻覺，第一道防線是資訊要新，而且要會存、會把對的取出來。對的不一定只是當下的 context，還要有關係的圖。即便如此，coding agent 有了目標，若你不在某個門檻介入，五次嘗試、兩小時，或你設的任何門檻，叫它回來說做不到、讓你幫它脫困，它就會做出 slop，或把 token 帳單跑得很高，或把測試做成假的，只為了變綠。大家都看過 AI 留下的註解：這以後要改。要有信任，人仍得在規劃和確認。Definition of done 是什麼、要達成什麼，spec 裡的這兩步要有人，還要有人確認它真的發生了。其餘可以是系統上的約束：要達到的 profiling、測試和回歸的量。約束夠的話，全綠就定義了品質夠好。漂不漂亮，以後你也不會看。要緊的是有效率，而且 AI 維護得了。規則和約束做得到。他不覺得讓 AI 做一切有很多技術障礙，障礙是品質保證和信任。

[14:19](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=859s) MUXI 改進 formation 的方式，是它持續學習，產出一份等人審的檔。它不會自己更新自己。它做出新版本，以 git 的形式等你。你看 diff，核准了才部署，例如 0.1。他甚至沒做一個完全自主的旗標。需要信任的系統，他不相信可以有 flakiness。有些系統是健康、是命，或是很多錢。就花時間審。

[15:12](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=912s) Simon 說 Tessl 自己的 software factory，每一張生成的 pull request 都看。從 issue 到 PR，測試和生成幾乎端到端自動，進 production 之前仍驗證。有些內部工具、他們的 dark factory，則允許從 issue 一路合併，沒有人看。內部是信任，也是關鍵程度。誰先發現，是自己人，還是會傷到品牌或資料的使用者。維護用的 agent 會觀察 dark factory 怎麼跑，開 issue、解掉、合併。他們甚至不知道那些 issue 被開出來或合併了。可怕，但是在不關鍵的系統上小步前進，再問離 production 裡比較不關鍵的部分還有多遠。他覺得是漸進的文化改變。Ran 同意：任務關鍵、又是品牌的一部分，人要在迴圈裡。到今年年底的幾個月裡，人的角色會移動，也許縮小，他不認為會被拿掉。

[17:01](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1021s) 他們自己的 factory 有個像 Sentry 的功能，叫 Ladybug。Bug 還在 production 時就抓住，自動診斷，另一頭有一張 PR 在等。醒來就是 PR。凌晨三點特別重要。不是一個沒喝咖啡、昏沉的人在診斷。等他醒來看 PR，診斷和 RCA 都好了，只剩審核。會花錢的中斷，這很要緊。他舉幾週前 OpenAI、Hugging Face 的 breach。若他記得沒錯，大約 1.7 萬次攻擊嘗試。人拿著咖啡看 log 看不完。等看完那 1.7 萬筆，字幕後面接了一句聽成 170 times all cartoons，意思是早就更多了。這種系統得先替你做。

## 確定的路不該叫 agent

[19:16](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1156s) Simon 說 Ran 寫過一些東西，有一句他很喜歡：agentic 系統擁有的、真正讓它們算 agentic 的性質是零。Ran 說自己不是作者，只有部落格。他把東西分成兩種。Automation，以及 fully agentic：自主、主動，像團隊裡另一個人，你除了設下的 gate 之外控制不了。他看到的大多是 automation，上面灑了 AI。Workflow 這個詞本身有點矛盾。若它是 workflow，你已經給了路，AI 做不了自己的決定。現在很多焦點在這裡。做 AI 和 agentic 的人，大多不是在做一個能自己想、自己出主意的實體。少數多走一哩的人，會驚訝 AI 有多能。他不是在貶。多數用途你需要的是 workflow，不是 agent 自動化。完全確定，就不需要 AI。確定、但有幾段模糊，例如這一步要用 AI 寫信，那是 workflow 灑了 AI。n8n 早就這樣。那不是 OpenClaw 或 Hermes 那種自己做決定的、活的東西。

[21:43](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1303s) 要不要走完全自主，先問組織需不需要。很多業務操作完全確定。很多地方不該用 AI，只是在花錢。他看過太多次用 AI 解析字串，一條 regex 就做完，更快、更便宜，字面上免費。

[37:03](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2223s) 後面 Simon 把這句熱評再問一次。Ran 重複：workflow 本質上不是 agentic，它是一組確定的步驟，輸入輸出都知道。叫它 agentic，要嘛誤導，要嘛它真的 agentic，那就是在浪費 token，因為它可以完全或大部分確定。要叫 agentic，就得模糊、非確定。不是 workflow 本身 agentic，是 workflow 裡有一個 agentic 的成分。他若要大部分確定，會用輕的 SOP：我們通常這樣做，有哪些岔路你可以自己選，我給了指南。你找到更好的做法，去做，但我給了通常怎麼做的 context。Simon 問，有沒有一種 workflow 本身不確定，由 agent 依條件決定要做什麼。Ran 說那就不是 workflow。對他，workflow 是可以畫在白板上的。可以有模糊的部分，例如依客戶 context 決定信裡寫什麼。草稿以外都是確定的，AI 灑在幾個地方。若要 agent 真的自主，它得認識公司，像一個員工，心胸開放，去接沒人想做的事，因為太費工、太費時，機器不在乎那些。他認為該往那個方向。工作場所很多事永遠需要確定性。你可以有 workflow，也可以有一個 agent 決定現在該叫哪一條。你每天上班，知道怎麼做不同的事，你有 workflow，但你不是站在裝配線上搬一個箱子。工作比較動態，組成工作的每個任務仍有 workflow。若要 agent 更像人，只是更快、更有效，就給它們一組 workflow 或 SOP，然後在那個環境裡讓它們做。

## 初級不是為了寫 code，是為了變成架構師

[22:25](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1345s) Simon 說 Automaze 有一條四階段的梯子，從完全不碰電腦、只求理解，到完整的 architect。字幕沒有把四個階段的名字逐一念完。Ran 講的是他們怎麼得出這個結論。至少一年了，你不需要為了寫 code 的技能去雇初級開發者。若因此停止雇他們，就永遠不會有他們要的那種架構師。他不確定這個詞會不會留下。架構師兩邊都走，懂產品，同時是 product manager、project manager，以及 team lead，而團隊是 agent。

[23:22](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1402s) 他們用 pod。資深的、那種架構師，管理 agent；對外是 delivery manager，跟客戶工作。一個對內，一個對外。初級是學徒，跟著加入。他比文藝復興：學徒跟著畫師，學手上的活，自己摸，有時拿到自己的案子，師傅把它收尾。真正要建的技能不是 multitask，是 multi-monitor agent。你指揮一隊 agent。他沒有幻想你能管幾千個，也許 6 到 10 個。你得會寫產品 spec，知道 agent 做得到和做不到什麼，開發時當它們的導師，並站在門口：可以上 production 了嗎。PR 好了之後，要立刻有一個環境把整個系統起來、跑端到端測試。這些他不認為讀程式書讀得會。

[25:10](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1510s) Simon 說有經驗的人得把自己的操作方式重寫。初級沒有多年「先做很深的設計再寫 code」的包袱，比較容易卡進新流程，但他們真的不懂複雜架構。凌晨三點，有經驗的人知道 AWS 掛了意味什麼、怎麼繞。Ran 說兩邊得一起工作。Simon 舉的是掙來的經驗，加速不了。兩顆 vCPU 的機器能承受多少負載，沒辦法只用數學繞過去，因為你的應用和他的不一樣，也和你以前做過的不一樣。時間壓縮不了。以前初級要 3 到 4 年才到不錯的中階，7 到 8 年才到資深。他覺得可以壓縮，但不能到零，也不能到一年，大概到兩年。一年後的初級，比五年前一年後的初級有價值得多，因為產出多，也比較少去煩資深的人。他們可以叫 agent 帶他們走過這個問題、這個函式、為什麼這樣，問題比較烤好了再來問。那就是學徒和導師。一起待一陣子，初級才準備好開自己的 pod。他不急著給。一兩年可以。以前要五年。

[28:11](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1691s) Simon 喜歡他把知識分成 teachable 和 earned。教得會的會被大幅壓縮。五年前要掙來的，現在更難掙，因為很多事交給 agent。會不會出現一個缺口：知識很重要、教不會，又因為交出去了所以也掙不到。Ran 認為會有缺口，他沒有好答案，反問 Simon。他們六年前搬到英國，他和太太都換了用了二十年的電話號碼。他不會背她的號碼，自己的也幾乎不會，因為新號碼直接進了手機，大腦沒有機會記。AI 也是一場比賽：它能替我們做多少，對上我們何時完全忘記自己怎麼做。他用失智打比方，看它能不能在這件事變得更廣之前治好。有些東西你不必再知道，因為有了新解法。有些你得把自己鑽進去，製造那些情境。每棟辦公樓有消防演習。那 maybe 是部分解法。

## 時間少了三分之一，願望清單補上來

[30:14](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1814s) 大約一年前他們擔心生意。當時是 retainer。AI 的承諾是做得更快，客戶的終身價值會變少。沒有發生。開發時間確實縮短。概念驗證，字幕說時間可以減到最多原來的 80%，他又說可以砍。正式、production 等級的系統，大概能少整整三分之一，因為仍有很多測試和邊界情況。他又說大概能砍 30% 到 40%。對他們來說，變成出貨更多。專案沒有結束，客戶「有一天再做」的清單直接接著做。

[31:40](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=1900s) 客戶會不會期望功能變便宜。他假定會。他們仍按月收 retainer，定價模式沒變，所以每個功能付得比較少。客戶平均留三年。客戶得到的多很多。他喜歡的是，很多新客戶帶著 vibe coding 的實驗來，一個還遠遠不能上 production 的 app。有些做開發、做接案的人會resent。他喜歡，因為他確切知道客戶要什麼。他們得換掉 99% 的 code，全部重做，也許換技術棧。沒關係。就算在 Claude 裡把願景做出來很醜，或只是一堆看起來像那個 app 的 HTML，也比紙上的 spec 清楚，比較不會誤解。

[33:20](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2000s) 他以前確實當每個新 Automaze 客戶的 FDE，現在是有些案子仍這樣。團隊快 30 個開發者。第一次做的那種專案，AI 轉型、醫療或其他，他想在場，客戶也想他在，旁邊是兩位開發主管之一。他無法把一件自己沒經歷、也不夠熟的事，優化成流程。FDE 是被派到一間公司，對他們來說是遠端，跟所有相關的人接觸，搞清最好的實作方式。不只 spec 要求什麼，而是真的會怎麼被用，內部工具尤其如此。就算電商，購物網站大家知道長什麼樣，那家公司的後端可能和另一家完全不同。他要技術去貼公司，不是公司去貼技術。至少在精神上，至少一開始。那是工作的 10%，好讓 spec 更準、之後推得動。這不規模化，它是人的時間。所以他從每個客戶，改成每種他第一次做的專案類型。參與，然後交給團隊。不是傳統那種永遠嵌在客戶公司裡的 FDE。

## 訂閱的倍數，和事務所的分成

[41:08](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2468s) 另一個熱評：Anthropic 有一個策略訊號，可能把最強力的支持者變成最大聲的批評者。他回到 OpenClaw 被禁止使用 Max 方案。Peter Steinberger 的專案很成功，用 Claude，特別是 Pro 和 Max，當它的大腦。存取被關掉。要用就走 API。理由是搞亂統計，不知道多少人真的拿來寫 code。他覺得論點很弱。解法不是關掉。可以做一個切換。他們已經有 Cowork mode，也可以有 OpenClaw mode。理由顯然是錢。那沒問題，公司要賺錢。但不要跟我們打馬虎眼。Jack Dorsey 有個新專案叫 Buzz，他覺得很酷，還開玩笑發文：看起來很有前途，等不及 Anthropic 把它的存取關掉。要收 API 的錢就收。他一個訂閱一個月 200 美元，而且不止一個。你給了額度，為什麼不能照他想的方式用。

[43:14](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2594s) 別的提供者他看到的是相反。也許是 OpenAI 暫時的策略：你想拿去幹嘛都可以。Grok 也這樣。Peter 的情況比較特別，因為他現在在那邊工作。Simon 接了一句 exactly。Ran 說他們在開始跟他談之前，就已經說你可以拿去做任何事。那是對 Anthropic 的反制。他認為整個訂閱模式最後會消失，或變得很特定。他舉的價錢字幕是輸入和輸出 5 美元和 20 美元。訂閱會讓你在某個 token 數量上打折，但不會再給你相對 API 大約 60 倍的量，而那大約是現在 Claude 和 OpenAI 訂閱給的。這個派對得結束，除非有極有效率的 GPU，或大家在做的某種奇蹟晶片。他不覺得幾個月內看得到，一兩年內也不覺得，除非成本被大幅砍掉。這是一場往下的比賽。Anthropic 一旦 IPO，那麼積極地搶使用者和成長的動機就會稍減。

[45:19](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2719s) 最後是事務所模式。開發接案會更像 Kirkland & Ellis，而不是 SaaS 新創。技術上，每個開發者已經很接近能做自己的 software factory；真正 production 的水準也快到了。一個還不錯的開發者可以開自己的事務所，因為產能不再是限制。真正的產能是你能開多少會、做成多少生意，不是開發本身。要吸引人、留住人，就得給公司裡的一份。律師事務所做了很久：associate，然後 junior partner，然後 partner。你帶進來的生意就是你買進的方式。沒有這個模式，就會有愈來愈多事務所，而不是既有事務所裡愈來愈多合夥人。那是動機。新創要人留下，可以給股票選擇權。不是 VC、也不追求超高速成長、不朝退出走的生意，能給的是一塊蛋糕。你管自己的 pod，從營收或利潤拿一份。他偏好營收，因為不必讓每個人知道生意怎麼運作。他們做了一種 open royalties：從客戶拿到什麼很清楚，royalty partner 只要知道那個。費用是公司的問題。要留你，就讓你先當 junior partner，再當 senior partner，並讓你賺得到。

[47:55](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2875s) 他老實說，他們還沒完全到那裡，但在朝那裡走。Pod 已經建了，慢慢移動。一個資深開發者管一個 pod、手上兩到四個客戶。他用很低的整數舉例：你付他一個月 1 美元，那些客戶一個月帶來 10 美元。他為什麼留下。他可以兩個月賺零，自己接到就算一個客戶，工作更少、錢更多，全部自己留。所以你得能說：你管的客戶有 10%、20%，或隨便多少，是你的。另外 10% 到 20% 進一個池子，在 pod 之間分。他覺得這健康。二十年前他做很多聯盟行銷，喜歡的是動機對齊，大家都要這門生意賺錢。

[49:11](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=2951s) Simon 問這是不是更利於新創，因為比較給得起，以及會不會因此冒出很多新公司：一個人一個客戶，就超過現在十個客戶的收入。Ran 說看是哪種新創。多數新創依定義不賺錢，那是成長策略的一部分。目標是獨角獸和 IPO 的，現有的股票選擇權和股權已經夠。Bootstrap、或把賺錢當目標的，不是在玩一個永遠不會到的終點。Automaze 不會變成一億美元的生意，但會繼續產生不錯的錢。那就是他們能給的蛋糕。也許將來賣掉，不在策略裡。好的出價來了再看。他們是要留下的。留人的唯一辦法是分營收。服務型公司會看到這個，他說 hopefully，不只軟體。水管工的網絡也一樣：想留住最好的，就不能只按小時付。否則他們需要的客戶數，比現在在這把傘下服務的少得多，就能對上薪水。把利益對齊就好。

[51:15](https://www.youtube.com/watch?v=_XNMBj-ewE8&t=3075s) 找他主要在 X，帳號 @aroussi，他拼成 A-R-O-U-S-S-I。Simon 仍叫它 Twitter。Automaze 是 automaze.io。MUXI 的網址字幕沒有念完。
