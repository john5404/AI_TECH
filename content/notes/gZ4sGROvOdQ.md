# AI Evaluations and Testing: How to Know When Your Product Works (or Doesn’t)

Simon Maple 把四段舊對談剪成一集，共同主持很多場的是 Guy Podjarny。原片約 50 分鐘，英文自動字幕。節目開場把 Tessl 聽成 Tesla；對談裡的 Tesla 是拿來當 Fin 客戶的例子。字幕也把 Des Traynor、Rishabh Mehrotra、Tamar Yehoshua、Snyk、pass@1、HumanEval、Llama 3、Cody 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=gZ4sGROvOdQ)

## 一句話

生成式產品上線之後，你仍然不知道它有沒有用。這集四個人用不同的產品講同一件事：換 model 很容易，知道使用者會不會變差才難。Des 用 torture test 和真實解決率，Rishabh 說寫好 evaluation 比寫好 model 重要，Tamar 在看不見客戶資料時用 LLM 當法官，Simon Last 則把每一次失敗存成可以原樣重跑的回歸。

## Des Traynor：先從技術上做得到的開始，上線仍不知道有沒有用

[0:22](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=22s) Simon 說這集要問的是，組織改了 model 之後，能不能說這個產品變好了。那牽涉 eval、測試、回歸。四位是 Intercom 創辦人 Des Traynor、Sourcegraph 的 AI 負責人 Rishabh Mehrotra、Glean 的產品與技術總裁 Tamar Yehoshua，以及 Notion 共同創辦人兼 CTO Simon Last。

[1:14](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=74s) 開發者愛 ship code。用 LLM 做應用時，東西進了 production、使用者丟進真實資料之前，你並不真的知道它有沒有用。Des 有一句他喜歡的話：測試若夠簡單，他可以跟 Einstein 一樣聰明，因為兩人在那種題上都會考得很好。Torture test 是他說的，Fin 這個 Intercom 工具在真實世界會被丟進去的所有瘋狂情境。

[2:17](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=137s) Guy 說他們在 Tessl 做 LLM 產品有那種可疑的樂趣，他在 Snyk 也碰過。難評估自己有沒有做對，成本不一樣，CI/CD 不一樣，工具不成熟。他指的經驗大概是一年前。Des 說內部辯論很多。傘狀的答案是：一放進生成式 AI、機率系統，做軟體產品的方式整個變了。傳統像雙鑽石：研究、決定、做、ship、看有沒有用。AI 會多出很多鑽石。你不是從使用者的問題開始。你從技術上做得到的開始。例如一秒能讀 PDF，那對得上我們要替使用者解的哪個問題。對上了、好像解得了，軟體人的 DNA 仍是做完、送出、做下一個功能。問題是上線之後你還是不知道它有沒有用。無聊的 B2B SaaS 不是這樣。合併兩張收據這種功能，人用了你就覺得成了，你假設數學是對的。這些系統上線後還有幾乎一整段產品演化：它是不是照我們想的方式在工作。

[4:23](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=263s) 他們盡量不只測 happy path。重設密碼是 happy path。Unhappy path 是：帳號在丈夫名下、信用卡是我的，要改到他的卡，同時還要改地址。系統在那裡會大幅掙扎。它們都很會回答怎麼重設密碼。他和 Einstein 坐下來考基礎算術，他會看起來跟 Einstein 一樣聰明。所以要有更高的濾波器。在 AI 裡，現實仍然最後才上場。Fin 在很多情況很好，但仍有它到不了的口袋。

[5:09](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=309s) 讓開發者進這個 LLM 優先的世界，第一件事是把頭裡「事情就是有用或沒用」拿掉。現在全是光譜。核心工作也不再只是澄清、拿掉含糊。含糊到處都是。把針都穿過去、找到有用的解，是藝術也是科學。那還在坐到文字編輯器敲 code 之前。這時代多數原型就是對 LLM 下 prompt，看它對某些要求怎麼反應。行為穩定、可靠了，才開始想怎麼產品化、API 怎麼叫、UI 長什麼樣、怎麼描述。前置工作很多。

[6:08](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=368s) 拿他最熟的 Fin 來說，周圍仍有大量普通的 B2B SaaS。有人要匯入文件、要有權限、要收費，那是定價功能。不是人人都是 LLM 工程師。報表引擎還是在畫圖，那不是新的。任何像樣的產品，引擎最後只佔表面的 10% 到 20%。業界常爭 thin wrapper 和 thick wrapper。Fin 很厚。裡面那個 resolution engine 是拼圖裡影響很大的一塊，單獨不夠。還要另外十六樣東西：vector search、內容匯入，諸如此類。所以有一大群人的工作方式不必改，也有相當一部分人必須改。

## 50% 掉到 40% 就是問題，新 model 不能直接插上

[7:24](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=444s) Intercom 從 2017 或 2018 年就有 AI 產品在線上，所以能跑得快，例如 vector search 引擎以前的產品已經做過。他跳過函式庫和 API 那些必讀的東西。這時代要當一個把表現做出來的工程師，得會審問資料、做一點 data science、量結果。他們大概對 Fin 的表現跑了 50 個不同的 A/B test。新人進來說要加一個很酷的功能，例如結尾總是問某個問題。這些都是 resolution engine 的不同迭代，工作終究是把問題答掉。弄壞了，附加功能多酷都沒用。而且不是二元的。今天 Fin 大約解決 50% 的進線支援量。有人推出酷功能，把 50 掉到 40，就是問題。若他們甚至不知道要查、要看往後 30 天的表現，問題更大。

[9:06](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=546s) 跟這些系統工作的技巧，是把一個機率性的結果裝進瓶子、做成產品。誰可以去玩那些機率，要搞清楚。這不是兩個世界。Messenger 團隊的人即使不寫 Fin 的 codebase，也可以損害 Fin 的表現：介紹 Fin 的方式錯了，人寫進來的內容就變了，Fin 的表現就變了。額外的技能是判斷這東西有沒有以很高的水準做它該做的事。要有辦法量、有辦法測、讓不同引擎對打，還要有接受的框架：跑了 30 天沒人抱怨，解決率看起來升了 4%，就 ship。這些技能以前在多數公司不存在，Intercom 肯定也沒有。

[10:09](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=609s) Guy 說這和持續部署有點像，feature flag、Facebook 那種慢慢放給一部分人。但那些可預測得多。對不是普通 SaaS 的部分，CI/CD 那種上線前評估的價值是不是幾乎被砍掉。Des 說他們有兩種測試。內部一種很貴，是 torture test：真實世界裡 Fin 會碰到的瘋狂情境，他們要確定它不會吐出來。沒有好理由就不跑。例如 GPT-4o 出來了（字幕聽成 GPT 4 Z、GPT 40）。誘惑，也是很多競爭者會做的，是新 model 插上就當沒事。他認為那說明推出的成熟度。同一組 API，想用 4o 就打得到，他們不是在猜怎麼接。他們的做法是先跑 torture test。測試故意給很難的情況，結果要非常清楚。例如 Tesla 在用 Fin，你會希望 Tesla 的 bot 把競爭者推薦得比 Tesla 更優先嗎？它不知道答案時，會希望它回答一個第三層的問題、或編一個答案嗎？這種大家多半同意什麼叫對的情境，真的有好幾百個，但 GPT-4o 未必同意。所以要控制和收斂行為。Torture test 過了、看過表現，才放上線，而且是漸進的，不會一次開給所有人。

[12:20](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=740s) Simon 收這段：把新 model 丟進應用超級容易。沒有事前測試和 evaluation，你不知道那對使用者意味著什麼，同一個問題的答案會怎麼變。改變很容易，不先測就改，不一定聰明。

## Rishabh：產業 benchmark 上升，線上的 Cody 可以下降

[12:53](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=773s) Rishabh 對 evaluation 很執著，機器學習的經歷很深。Simon 先點出他的收束：寫一個好的 evaluation，比訓練一個好的 model 更重要。Guy 問，若有人在 IDE 裡一行一行寫，也許還用 Cody 這類生成，測試是不是也該同步生出來，讓自動生成的 code 有保證。Rishabh 說錯誤會相乘。寫了很長才評估，更糟。愈早停、在本地除錯、修好再往下，比較好。

[14:02](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=842s) 他愛 evaluation。讀博士時以為數學和花俏的 graphical model 才是用機器學習造成影響的路。進業界一年就發現不是。要有 evaluation、有這些指標，要知道什麼時候一樣東西變好了。任何機器學習問題，在這些資料集上把 evaluation 從 0 做到 1，才是關鍵。

[14:32](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=872s) 0 到 1 是這樣。新的語言模型出來，人家說 Llama 3 寫 code 很好，因為有 HumanEval 和 pass@1。拆開來看，HumanEval 是 164 題，例如用這段 code 寫一個 binary search。你拿到文字、寫一個函式、看它跑得對不對。有 unit test，過了就加一分。很好的起點。但這不是人在用 Cody 和其他寫 code 工具的方式。企業開發者，例如大銀行，有兩萬個同事、三萬個 repository。他不是脫離一切在寫 binary search。他在一個被編輯了十年的巨大 codebase 裡，依賴在北京某個團隊，有一個他根本沒讀過的函式，也許還是他不在乎的語言。真實產品需要的 evaluation，和業界現有的 benchmark 不同。

[15:36](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=936s) 所以 0 到 1 是：第零天可以用 HumanEval 的 pass@1，然後你要做出自己的。他們把 pass@1 提高 10% 到 15%，放到線上的 Cody 使用者，指標卻掉了。他們寫過離線和線上相關性的文章。你信離線的 pass@1、把它做高、希望使用者會愛，不是真的。Context 差太多。你得為自己的功能做 evaluation，而且它要代表真正的使用者用這個功能時的感覺。產業 benchmark 變好，不代表使用體驗變好。銀行之間也不見得一樣，金融業以外更不一定。Pass@1 甚至不認得功能：它不管自動完成、單元測試生成或修 code。第一跳是做出關於你這個功能的資料集。單元測試生成、code completion、code edit、chat，各自不同。每個功能都要自己的 0 到 1。Evaluation 不會自然長出來。有了之後才問能不能跨產業重用，測試和 guardrail 會不會變成比 code 更重要的東西。

[17:20](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1040s) 他把自己放在極端：他想當業界、不只是寫 code、而是整個機器學習業界裡，最大聲主張 evaluation 的人之一。寫好 evaluation 比寫好 model 重要，也比寫一個更好的 context 來源重要。沒有辦法評估，你就不知道什麼叫更好的 context。Evaluation 走在任何功能開發前面。否則就是在黑房間裡丟飛鏢，有些靠運氣中。更重要的是任務成不成功，不只是把 unit test 當 evaluation。你看的是整體目標：我有沒有把這件事做對。把這些 agent 當编排對象時——Cody 的自動完成，或 Sourcegraph 驅動的任何獨立 agent——評估的是那個任務。假設今天 AGI 存在，基礎模型會愈來愈聰明，最後有幾十億、幾兆美元投進去，它們什麼都做得了。你仍是最懂自己領域、最知道現在目標是什麼的人。只有你能做出「怎樣算對、90% 對還是 92% 對」的 evaluation。從 92 到 94 的邊際，會比走到 90 難得多，硬度大致是指數上升。於是問題純粹在 evaluation、在 unit test：這個領域有哪些細微之處 model 必須做對，我們說不說得出來，生不生得出那些測試、guardrail 和 evaluation。Model 會聰明得多。什麼叫成功，由領域專家定義。這不只是寫 code。其他 AI 工具只是幫你做那份工作的工具。責任在你身上，去寫好 evaluation。明天也許有 LLM as a judge，有人在做專門用來評估的基礎模型，六個月後也許有專門生單元測試的 code 模型。那時你的角色是编排，而且是在 evaluation 上编排：這個角落做對了沒，這是系統的關鍵。付款閘道和認證那幾條鏈接弄錯，會出大事。人在迴路裡，你的輸入從這裡變得關鍵。

## Tamar：企業裡，同一次查詢兩次答案不一樣，CIO 不接受

[20:17](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1217s) Glean 做企業搜尋，來源很多，包括 HR 這類非常敏感的系統。產品允許多個 model，使用者自己選。Glean 不能直接看那些資料。要在多個 model 上做 evaluation，資料卻不在手裡，測試就很難。這段裡他們用 LLM 當法官，也當陪審團：不是叫 Glean 的員工去看 prompt 和查詢再驗證，而是讓 LLM 判斷查詢對不對。單一 LLM 的非確定性很麻煩，陪審團也許能減輕。

[21:47](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1307s) Guy 問，產品結果隨進來的資料變、成功率差很多，LLM 又快得像閃電，而且她甚至不替客戶挑 model。怎麼知道產品有用。Tamar 說非確定性是最有趣、也最難的部分。她進 Glean 的第一週跟 assistant 品質團隊的負責人談，發現他們很多時間在跟客戶說話。那些人對它能做什麼期待不對，或抱怨它不確定：這次查詢這樣，再查一次不一樣。大家開始習慣 ChatGPT 的非確定性。企業裡不一樣。CIO 花很多錢買軟體，期待每次答案相同。讓客戶舒服地知道 LLM 能做什麼、邊界在哪，是產品要做的事，不能只放在行銷和 enablement。產品裡得有辦法處理，讓人知道挑戰會是什麼。

[23:31](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1411s) 她解釋 RAG 架構。搜尋怎麼評估，團隊多數來自 Google 的搜尋排序，eval 工具就像 Google 搜尋負責人會做的那樣，是基本功。那是內部的，不是使用者那一面，用來判斷搜尋在這些資訊上是否正確。工程師看得到排序演算法、什麼被觸發、什麼沒有、分數多少。比 Google 再難一層：Google 可以用第三方評分者說這次改動好不好。這是企業資料，不能用第三方，只能用自己的工具和工程師看資料。回到差異：要懂使用者用這個產品時的心態，用 guardrail 幫他們搞清產品能做什麼，然後在一種沒有人完全懂它為什麼給這個答案的新技術上，評估它是不是照意圖在工作。

[24:49](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1489s) 產品裡的一個大做法是建議。Glean 懂你的組織。連接器包含 Workday 和 Active Directory，所以知道你是誰、同事是誰、團隊是誰。可以建議你的團隊在用的 prompt：你是 PM，這是另一個 PM 在用、你也許想試的。也有通用建議，他們各種都試過。這把人帶進真的拿得到價值的地方。Glean apps 是另一條：更結構化的 prompt 和觸發。IT 問題走這裡，要做客戶簡報就有一個專門的 app。公司裡大約 5% 真正懂怎麼跟 prompt 和 LLM 工作的人會去做策展，他們會幫忙，Glean 也會做得更多。另外有團隊專門做 eval：什麼該改、什麼不該、新 model 怎麼評。客戶可以決定要用哪個 model。他們先驗證、她說應該叫認證。Gemini 1.5 Pro 出來，要先替客戶認證，才開放使用。LLM 那一層讓客戶在 OpenAI、Anthropic、Gemini 之間挑。跟不同 model 共事，是另一件麻煩事。

[27:07](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1627s) Guy 說，把先行者的用法散給組織其餘的人，對任何產品都有用，不是 LLM 專屬。另一面是失敗時怎麼辦。搜尋也許找到相關資料，你覺得不錯，但它懂了嗎、處理對了嗎、呈現對了嗎。認證新 model 或軟體在演化時，手上有什麼工具知道它變好了。Tamar 說產品裡客戶可以 thumbs up、thumbs down。Thumbs down 總是多過 thumbs up，人就是這樣，但有用。那些查詢回到他們這裡，就有一組壞查詢。搜尋比較好量：有沒有人點、找沒找到要的東西。Assistant 比較刁，因為可能給了答案、也可能沒給。若有人在 assistant 裡試了幾次，然後去搜尋、找到需要的文件，他們就知道 assistant 沒給出答案。他們有一個從搜尋 assistant 來的滿意指數，看得很重：多少壞查詢、多少 thumbs down。這些都是人在用產品之後的代理指標，用來做 hill climbing，看是在往上還是往下。

[28:32](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1712s) 評估本身非常刁。他們開始用 LLM as a judge。Assistant 會錯的方式很多：送給檢索引擎的查詢挑錯了；檢索找不到文件、找到錯的、或漏了；生成時答案不完整、沒有扎在事實上、拉進公開資料而不是你有的資料。於是有完整性、groundedness、factualness。他們用 LLM 在這些面上審 assistant 的答案。不完整最容易拿到 thumbs down，他們把 thumbs down 和 LLM 對完整性的判斷對上，這是 LLM 最好評的一項。Grounded 是它有沒有告訴你 context 從哪來。Factualness 最難。她把 factualness 定義成你沒有幻覺；groundedness 更對準幻覺。Glean 的幻覺問題不大，因為是 RAG，而且有引用。有時沒有扎在企業文件上，是因為你問的是某公司的股價，那可能只是公開知識。Factualness 危險在於 LLM 非常有自信，它很有把握地說某件事是對的，使用者不會 thumbs down，他們就假設是對的。那些最危險。他們在做的是一組 golden set：讓 LLM 從文件抽出查詢，再量找不找得到。這套怎麼量最好，他們還在做。已經有的是一套可重複的流程：LLM 當法官，有一個 eval 框架。新 model 出來就轉動把手，用這些指標評估新 model，也評估 code 裡的改動。不完美，但比工程師手動看每一則查詢和結果好很多。Golden set 得按客戶做。他們常用自己的資料做一部分，但 eval 會在客戶的環境、客戶的部署裡跑查詢。他們不能看內容，但可以跑、可以評估、可以拿到評估結果。

[31:35](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1895s) Guy 確認：不能看資料，卻要確認你的檢查沒有用他們的資料製造問題。協議是你可以在他們的平台上、用他們的資料跑一批並非功能本身的測試，你不存取資料，只拿結果，像另一種 thumbs up 和 thumbs down，用來決定要不要部署這個新版本、或升級到這個新 model。Tamar 說他們對客戶資料的協議非常嚴，但絕對會跑回歸，那套過程本身就很有意思。LLM as a judge 是 LLM 看答案，說 golden set 裡的結果和線上產品給的結果夠熟、夠像。她部落格裡還有 LLM jury。就是字面意思：不要只聽一個聲音，要多個聲音對齊。一部分是因為評估者自己也是隨機的、非確定的。她覺得這和人類司法裡既有法官也有陪審團， oddly 地對得上。

## Simon Last：舊世界裡想法慢一點也送得出去

[33:14](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=1994s) Notion AI 是跑在真實世界裡的 AI 應用。Simon Last 講他們怎麼把失敗記下來，而且能原樣重現，於是累積一組帶著回歸的失敗。迴圈是收集失敗、改 prompt、重跑 evaluation、再用那些 evaluation 驗證修復。隱私上必須 opt-in，資料只為評估而分享，測試和 production 要隔開。

[34:24](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2064s) 一開始他們沒把它想成平台團隊，就是一支端到端的產品團隊，目標只是送出有用的東西，邊做邊學 eval。後來想把它變成平台團隊，把做過的東西露出來、讓別人重現。這其實很難。很多方面他們不做模型訓練。就是拿外面最好的 model，包進產品，讓一切運作。那包括用對的方式做 logging、把 prompt 設好、做 eval。平台這一面技術上沒有那麼難。難的是怎麼做的最佳實務、步驟的知識、甚至怎麼想。沒有 context，很難讓別人做。最成功的方式是，有人想做 AI，就暫時加入 AI 團隊，參加 standup，每天跟他們一起在細節裡，很快撿起怎麼做 eval、怎麼迭代 prompt。另一條路是丟各層的程式指標、這是跑 inference 的東西，他們覺得難。Code 沒那麼複雜。複雜在實務和心智模型。Guy 想起 Patrick Debois。DevOps 時代的類比很多是平台團隊和重用，也是把人嵌進來、用對方的鞋子走一英里。為了同理，也為了技能分享。他說 DevOps 的字母快用完了，得換策略，但做法本身很有效。

[37:00](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2220s) Des 在早先一集講得最清楚：建在 AI 上時，很難知道產品有沒有用。Simon Last 說這非常難，和 AI 之前的世界真的不同。他多數經驗是做 Notion、做產品。 honestly 很痛。新技術讓他興奮、幾乎著迷，但很痛，他想念舊世界。舊世界裡他有一個想法，也許比預想久，但一定送得出去。AI 的世界裡，他常常有想法，然後驚訝它以某種他沒料到的方式不行。他把它看成兩重。你測過的情況，要確定它們能用、而且不回歸。然後是一片你根本沒測過的朦朧空間，可以任意大。你要填夠這片空間，才有信心它對得上使用者會請求的分布。永遠無法完全對上。

[38:26](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2306s) 他要一套可重複的引擎。先把 logging 做好，互動失敗時能再叫出來。Log 必須是錯誤的精確重現，然後你要能用完全相同的輸入重跑那一次 inference。做不到就完蛋了。這比一般有儀表的系統更需要完整的 log，也帶來隱私問題。他們很認真。有一個 opt-in 的早期使用計畫。用 Notion AI 時會跳出小視窗，預設是不分享。選擇加入之後，資料不用來訓練，只用來評估。Thumbs down 時他們看得到帶輸入的 log，可以加進 eval 資料集。Production 資料被隔開，避免和其他來源污染。使用者夠大，即使只有很小比例加入，資料仍然很多。

[39:45](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2385s) 下一步是把失敗收成資料集。為這個任務整理出我們在乎的情況，以及已知的舊失敗。再來是能評估某個失敗還在不在。Eval 有很多做法。能用確定性的就用。不行再用 model-graded。後者愈具體、愈特定愈好。他看過很多人做 model-graded eval 失敗，因為太泛，或任務太難。若你的 model-graded eval 對 model 來說不是穩定地容易，你就得為 eval 再做一個 eval，新的一疊問題，無限迴圈。一開始要為想做對的事做一組測試，也為有問題的情況做一組。那是合成的。功能做出來之後，要能碰到真實世界的情境，在選擇加入、願意幫忙改進系統的使用者裡，策展出失敗案例。

[41:10](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2470s) 好的案例他也收，但沒那麼在乎。也許留幾個當健全檢查。可行動的價值在具體的回歸：修好，然後確保它維持修好。時間拉長，就是在棘輪：以前不行的，現在行了，資料集成長出一批繼續能用的東西。也常發現有些問題就是修不了。Model 有極限。他們不是基礎模型公司，能修的很多，修不了的就等下一個 model，希望它修掉。人為評分的 eval 可以，但很快會失控。真正關鍵的下一步是進入迴圈：發現新的回歸，加進資料集，用某種方式改 prompt，重跑資料集裡的例子，判斷變好還是變差，理想上盡量自動，然後 ship。不斷地：新例子、改 prompt、讓產品跑。

[42:35](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2555s) Notion 在 eval 上很開、很有彈性，自由度很多。非確定的評估很容易想到，因為看的是文字和非結構化資料。結構化的例子很多，任何把輸出格式化的都算，也許是 XML，也許是 JSON，那最理想。他覺得有問題時，最好的解法是用 validator 解：把輸出結構化，讓不合法的輸出變成不可能，你能確定地說壞輸出是錯的。這是解任何問題最好、也最好評估的方式。另一個他們一直用的確定性東西是小型 classifier。他說的 classifier 就是一次 inference，輸出一個 enum、一組可能的值。例如聊天體驗裡要決定搜不搜尋，基本上是 yes 或 no。還有只有兩個可能值的。它們很好評估，因為有 ground truth，實際和預期一比就有分數，可以收很大的資料集。

## Fine-tuning 聽起來很酷，他把新創這樣說當成負向訊號

[44:12](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2652s) 他們大量試過 fine-tuning。他個人撞牆很多次。他覺得自己若不是在 OpenAI 上建立 fine-tune 次數最多的人，也在第 99 百分位。大問題是這讓工作至少難一百倍。你得收一整個資料集。Fine-tuning 過程可以很難，尤其比較慢的時候，得等它訓練。除錯非常難。你造出一個黑盒，新的例子在一次又一次成功的 fine-tuning 裡，可以毒害整個資料集、把 model 弄壞。所以你必須有極好的 evaluation。他有過為了搞清問題在哪，真的花掉幾週，難到極端。他 honestly 不看好基礎模型公司以外的公司做 fine-tuning。碰到新創說他們在 fine-tune，他現在把那當成負向更新、經驗不足。你買下那個承諾，它在真實世界裡並不那樣兌現。他自己也被這個 bug 咬過。聽起來很酷，工程師想要更多控制、想做技術上酷而有力的事，他完全無法免疫，做的時候也很有趣。他現在是 in-context learning 的大粉絲，而且它會變好。另一個大理由是，你若不是基礎模型公司，就想在任何時刻用最好的 model。進步太快。現在不行的，很有機會在不久的將來行。Fine-tuning 等於把自己鎖進一個慢而複雜、很難更新的過程。In-context learning 的好處是，新 model 來了，隔天就能換。

[46:24](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2784s) 換 model 能多快，取決於 eval 好不好：它們能不能有信心告訴你，這次改動會讓整體體驗變好。這是 eval 這麼重要的原因之一。改 prompt 大概比改 model 更常發生，但同一套 eval 兩者都用。他也說，作為產品公司，不該被不斷冒出的新 model 牽著走。要真正懂你的產品獨一無二在乎的那項任務。你的 alpha 是深深懂這項任務、懂什麼叫好結果、以及周圍的產品體驗。看著新能力出現，在它們出現時放出來。重點是你和你的產品。Model 是達成那個目的的手段。新 model 常常閃亮、很酷，但對你在乎的任務未必多給你多少。

[48:14](https://www.youtube.com/watch?v=gZ4sGROvOdQ&t=2894s) Guy 問他最喜歡的 eval 例子。他說是一個挺簡單的 app，但碰到他覺得有趣的每一塊：熱量追蹤。一張表，食物和熱量，一個輸入，你打什麼都可以，它要抽出每一項食物和熱量、加進表。裡面有資料庫、後端、前端，還得寫 prompt、呼叫語言模型做抽取。他上次試，初始版本做出來了，再要一個小功能的改動，從那裡就不行。他們有巨大的進步，非常驚人，但他覺得還沒到。Simon Maple 謝謝 Simon Last，也謝謝 Tamar、Rishabh、開頭的 Des，以及共同主持很多場的 Guy。他說把過去幾集裡重複出現的學習抽出來，很有意思。若聽眾覺得還有跨集共通的題目，可以告訴他們，再做這種剪輯。
