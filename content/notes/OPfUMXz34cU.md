# Enterprise AI Solutions Need to be Different - Glean CPO on RAG, Changing Behavior and BYO-Model.

片長 46 分 32 秒，英文自動字幕。AI Native Dev。主持 Guy 訪問 Tamar Yehoshua，字幕把姓聽成 yushua。她做過 Amazon 的 A9、Google 的 VP，在 Google 負責過 search，在 Slack 當過 chief product officer，當時也進了 Snyk 董事會，字幕把 Snyk 聽成 sneak。現在是 Glean 的 president of products and technology，標題寫的是 CPO。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=OPfUMXz34cU)

## 一句話

企業版的 ChatGPT 不能把公司資料烤進 model。Glean 先用權限做 retrieval，通過的片段才進 LLM。搜尋是 2019 年就在做的事，生成是後來加上去的介面。難的不是再換一個 model，是人不知道能問什麼、CIO 又期待每次答案一樣，而且客戶要自己選 OpenAI、Anthropic 或 Gemini。

## 找得到，也寫得成一份簡報

[1:32](https://www.youtube.com/watch?v=OPfUMXz34cU&t=92s) Glean 讀所有 SaaS 的內容：Microsoft 365、Google、Slack、Salesforce、Jira。跨工具找資料，也用自然語言問。她說可以想成企業裡的 ChatGPT：ChatGPT 問的是世界，Glean 問的是企業裡的專有資訊。還有平台，她稱為企業的 knowledge graph，走 API，以及 no-code，讓人在這些 SaaS 資料上做 AI。

兩種都做。上客戶電話前可以問這個帳戶的 AE 是誰、CSM 是誰，字幕把 CSM 聽成 CSN，也可以問最近的 outage，或叫它寫一份客戶簡報：最近的會、Salesforce 裡帳戶的狀態、該知道的 outage。她仍要自己寫 prompt，決定想怎麼消化。問一個 prospect 在哪個階段、該知道什麼，就不必再請 CSM 寫 briefing。ChatGPT 有的能力他們盡量做，也一直加摘要和洞察。

介面有兩個。一個像 Google，但是搜你的企業。一個是聊天。搜尋裡有 AI answers，類似 Google 後來的 AI overviews。也有類似 custom GPT 的東西，叫 Glean apps，把某一個用途的系統提示和企業資料的一個子集定下來。

[4:48](https://www.youtube.com/watch?v=OPfUMXz34cU&t=288s) 多數客戶想做一個 HR app，指定 HR 的正典文件。某人在 Slack 頻道裡答錯了，就不該被撿到。知識庫在這、什麼時候觸發、用什麼 prompt。你在 Glean 問休假政策，它會自動路由到 HR app。HR 團隊還能做動作，透過那個 app 真的去請假。不用寫 code，不會寫程式的 HR 也能做。

## 權限在檢索，不在模型裡

[6:10](https://www.youtube.com/watch?v=OPfUMXz34cU&t=370s) 早期最重要的是安全與隱私，不是先做搜尋再補隱私。超過 100 個 connector，每個 app 的隱私和治理、以及 metadata 都要懂。Slack 知道哪些頻道是私人、哪些是公開、哪些是私人訊息。Google 文件用「有連結的人都能看」分享給她，沒分享給旁邊那個人，Glean 必須知道她看得到、對方看不到。他們看得到她的 email、Teams、Slack，才知道有沒有被分享。沒看到被分享，就不給存取。

Guy 用 CISO 的角度問：也許不希望全公司都能碰到沒鎖好的東西。那是 security through obscurity，以前你根本找不到那份文件，現在找得到。例如問下一次 RIF 是什麼時候，字幕聽成 riff，若 HR 有一份權限設錯的文件，就會被找到。所以上線前有 AI governance：評估不該公開的文件，標出類型給人審。可以 red list 或 green list。整個目錄、或某一類文件，不管權限如何，永遠不出現在 Glean。

[9:12](https://www.youtube.com/watch?v=OPfUMXz34cU&t=552s) 他們不用企業資料 fine-tune。她同意：一旦 fine-tune，或把全部資訊塞進很大的 context window，LLM 就會知道那些事。這正是企業很難做的原因。所以是 RAG。強制執行在 RAG 的 retrieval。自然語言問題先進 LLM 的 planning，翻成搜尋查詢，retrieval engine 依你的權限找回相關片段。那些片段才是送進後面那一階段、讓 LLM 產生答案的 context。你沒有權限看的，永遠不會進 LLM。

另外，資料可以放在客戶自己的 GCP 或 AWS 專案，不離開他們的雲。

不在客戶資料上訓練，犧牲的她覺得在這個產品裡沒那麼要命。你仍可以把指南當輸入：行銷怎麼寫、design doc 的模板、PRD 的模板。但使用者得明確說「照這些指南」，Glean 不會在沒人告訴它的情況下自己懂組織的風格，因為他們不是把所有 code 吃進去再歸納文風。實務上還沒變成問題。他們不是照碰到的資料去再生一份新東西，而是找到並解釋。想要用標準格式看一筆客戶資料，就做一個 Glean app 定義那個格式，再把對的資料填進去。一旦有 actions，自動化就多了。他們的 PM 團隊做過一個 app：吃進 Gong 的通話，字幕聽成 gone，把通話裡的資訊拆進試算表，再看客戶最常提出的需求。這是多步驟，不必把一切都餵進 LLM。

## 搜尋做了四年，助理是加上去的

[14:49](https://www.youtube.com/watch?v=OPfUMXz34cU&t=889s) Glean 2019 年開始。創辦人是 Arvind Jain，字幕聽成 Arvin Jane，早期 Google search 的基礎設施工程師，做過最初的搜尋基礎設施。她 2011 年左右在 Google 跟他共事過。他後來是 Rubrik 的共同創辦人，字幕聽成 rubric。Rubrik 變大時，生產力下降而不是上升，很多是找不到資訊。客戶也常說：我們長大了，找不到做事需要的東西。所以從企業搜尋開始。

他從 Google 知道搜尋裡已經在用 AI。BERT 那些 LLM 的前身是 Google 為了把搜尋做好而做的，她記得大約 2016、2017 就在搜尋裡用 vector embeddings。Glean 一開始就是 AI search：用 BERT，在大家還沒談 vector database 時就在做 embeddings，還按每個企業 fine-tune 自己的模型來建 embeddings。所以企業搜尋比市場上其他的好，但那是搜尋。丟進查詢，找出文件，答案更相關。用的是當時的 ML，不是生成式 AI。

[17:41](https://www.youtube.com/watch?v=OPfUMXz34cU&t=1061s) GPT-3 出來時他們已有 AI 團隊，不是突襲。他們開了 war room，把助理做出來，架構就是她剛才說的，把生成放進產品。原本一直賣企業搜尋，再加上助理，曾經可以分開買，現在是一個產品。她不叫這 pivot。為搜尋建的技術就是 RAG 裡的 R。四年的領先是 connector、隱私和安全、以及 retrieval engine。給企業搜尋用的那台引擎，就是助理在用的。使用經驗和定位很不一樣：助理是消化你找到的東西，多半不是把你送到權威來源。人當時也在 Google、ChatGPT、Perplexity、Gemini 之間換。Glean 裡可以在搜尋和助理兩個介面切換。部署和安全的地基沒變，上面是新的 UI，行銷和訊息改了，也有一支新團隊在做助理。大約六個月前又加了平台。每一次都是把功能往外擴。

## 人會忘記自己有這個工具

[20:29](https://www.youtube.com/watch?v=OPfUMXz34cU&t=1229s) Guy 用兩條軸看 AI 工具：要你改多少工作方式，以及你得多信任它做對。愈自主，愈得信任。他舉 Intercom 的 Fin：放在客戶前面，不能每筆都叫人查，那就失去意義。他的假設是產品若本來就是文字，搜尋或聊天，引進 AI 的改變比較小。

她說行為改變很難。看 ChatGPT 的留存：人試過、玩過，然後忘記，因為它不在每天的例行裡。改變要大量重複。文字介面有幫助，Slack 本來就在打自然語言，Glean 本來就在打查詢。最大的絆腳石是人不知道能做什麼、不能做什麼。Google 搜尋剛出來時，人也不懂什麼是 query。現在人人會改寫再搜一次。助理正處在那個階段。工程師懂它怎麼建的，有心智模型。沒用過 AI 聊天的人會問「下週我的優先順序該是什麼」。客服機器人不一樣，問題集合很小；這裡宇宙是開的。Glean 不可能知道那個答案，因為它沒有那份資訊。人還不知道哪些問題答得了。她舉的 Gong 分析，產品以外的人根本不會想到能這樣做。她認為下一代跟 ChatGPT 一起長大，會像跟 Google 一起長大的那一代。模型也會更好。

[24:31](https://www.youtube.com/watch?v=OPfUMXz34cU&t=1471s) Guy 覺得 Google 把 AI 答案放進同一個介面，先不論反托拉斯，對 UX 很好：人用原來的方式搜，先看到一個答案，往下捲還是舊的結果，同時被暴露在新答案裡。Glean 做得到。他們有 AI answers，而且在 Google 的 AI overviews 之前就有。點 more 會展開完整答案。他們小心觸發頻率，因為想確定那會是對的答案。人對搜尋和對助理的說法不一樣，知道自己是來跟助理聊，品質會更好。很多跟助理的互動其實來自搜尋介面裡的 AI answers。她覺得以後不會有兩個介面。助理還會告訴你它拿哪一條查詢去問 RAG，以及用了哪些文件。有引用，也有那份文件清單。助理回得了搜尋，搜尋也通得到助理。她猜一年內會合成一個。

Guy 說企業知識再廣，仍比整個網小得多。也許可以接受：誰能看什麼優先，就算因此少了一些把全部資料餵進 LLM 才連得起來的關係。她同意這是公平的交換。

## 客戶選模型，他們不能看客戶的資料

[27:29](https://www.youtube.com/watch?v=OPfUMXz34cU&t=1649s) 做這種產品，非決定性是最有趣也最難的。她進 Glean 第一週跟助理品質團隊的負責人談，發現他們很多時間在跟客戶說話：客戶期待錯了，或抱怨不確定。同一條查詢做兩次，結果不一樣。人開始習慣 ChatGPT 的不確定，但企業的 CIO 付很多錢，期待每次答案相同。讓客戶舒服地知道 LLM 能做什麼、邊界在哪，是產品的一部分，不能只放在行銷和 enablement。

搜尋怎麼評，團隊多數來自 Google 的 search ranking，eval 工具像 Google 內部那套。這是內部的，不是使用者那面。工程師看得到 ranking、什麼被觸發、分數。Google 可以用第三方評分者看一次改動是好是壞。企業資料不能交給第三方，只能用自己的工具和工程師看。這是多出來的摺痕。

產品裡怎麼幫人懂。一個大的是建議。Connector 包含 Workday 和 Active Directory，所以知道你是誰、同儕是誰、團隊是誰。可以建議你團隊裡的人在用的 prompt：你是 PM，另一個 PM 做過這個，你也許想試。也有比較通用的建議，他們各種都在試。Glean apps 則是更有結構的 prompt 和觸發：IT 問題去這裡，要做客戶簡報有一個 app。公司裡大約 5% 真正懂 prompt 和 LLM 的人來整理，其他人跟著用。另外有團隊專門做 eval、看該改什麼、新模型怎麼評。

客戶可以選 LLM：OpenAI、Anthropic 或 Gemini。他們先驗證，她說應該叫認證，才開放。例如 Gemini 1.5 Pro 出來，要先認證。跟不同模型共事本身就麻煩。

[32:51](https://www.youtube.com/watch?v=OPfUMXz34cU&t=1971s) 失敗時，產品裡有 thumbs up 和 thumbs down。Thumbs down 比較多，因為人就是這樣。那些查詢會回到他們這裡，成為一批壞查詢。搜尋比較好量：有沒有點、有沒有找到。助理比較難，因為也許拿到答案、也許沒有。若某人在助理裡試了幾次，然後去搜尋、找到需要的文件，他們就知道助理沒給到答案。搜尋和助理各有一個 satisfaction index，看得很重，用來 hill climbing。

LLM 會錯的地方很多：送給 retrieval 的查詢錯了、沒找到文件、找到錯的、漏了、生成的答案不完整、沒有站在事實上、拉了公開資料而不是你的資料。他們分成完整性、groundedness、事實性，用 LLM 當評審。不完整最容易拿到 thumbs down，他們把 thumbs down 和 LLM-as-judge 的完整性對上，這也是 LLM 最好評的一項。Grounded 是它有沒有告訴你 context 從哪來。事實性最難。她說要一份 golden set，才知道沒有幻覺。Groundedness 最對得上幻覺。Glean 的幻覺問題不大，因為是 RAG，而且有引用。有時答案不是站在企業資料上，例如你問股價，那可能是公開知識，字幕把資料聽成 stock。事實性的麻煩是 LLM 很有自信，使用者不會按 thumbs down，以為它是對的。那最危險。他們讓 LLM 從文件抽出查詢，再量找不找得到，用來做 golden set。事實性怎麼量最好，還在做。已經有的是一套可重複的 LLM-as-judge 和 eval framework。新模型出來可以轉一下，對這些指標評新模型和程式改動。不完美，但比工程師逐條看查詢好。Golden set 得按客戶做。有些他們用自己的資料。Eval 會在客戶的環境、客戶的部署裡跑查詢，因為他們不能看內容，但可以跑、可以拿評估結果。客戶資料怎麼處理有很嚴的協議，也跑 regression。

Guy 讀過她的文章，問 LLM jury。就是不只一個聲音，要多個聲音對齊。評審自己也是非決定性的。她同意，人也是非決定性的。

[39:05](https://www.youtube.com/watch?v=OPfUMXz34cU&t=2345s) 消費者的 ChatGPT 跑在公開的網路上，不必擔心權限。企業搜尋和消費者搜尋的排序訊號也不一樣。消費者有很密的點擊，幾百萬甚至幾十億人，同義詞和語意相似有很多資料可靠。企業的點擊太稀，不能當錨。他們有別的資料：活動，上週很多人在看這份文件，就把它抬高。還有團隊。我要的是自己團隊的 onboarding 文件，不是行銷的，我會用工程或同隊的人那份當模板。活動，以及看那份文件的人跟我有多近。個人化在 Glean 的排序裡是很強的訊號，在消費者搜尋裡弱得多。團隊頭幾年就是在搞企業排序需要哪些訊號。架構的前提是：先在企業裡找到相關的片段，生成式的使用經驗是你怎麼跟那些資料互動。

## 董事會要一個 AI，人卻變得最慢

[41:43](https://www.youtube.com/watch?v=OPfUMXz34cU&t=2503s) 企業比她想的更準備好。CIO 說我們需要一個 AI 方案，出去評各種方案。一部分是打勾，因為董事會說要有。也有很多是真的有興趣。大公司的 IT 用 OpenAI 自己做。不少人一年後過來說：我們試著做了，很難，沒想到 RAG 這麼難，應該用你們的 API。她覺得有意願。也有恐懼：就算你說你很安全，我就是不要 AI 靠近我。那些他們連談都不談。讓她鼓舞的是想引進來的人很多。引進來之後，要有很會說、又真的搞懂怎麼用的 champion。最大的 change management 是教育每個人，工作可以好多少。就像 ChatGPT，人會忘記，甚至想都沒想到。人變得最慢。

她想像的遠處是：今天很多苦工被自動化。高階主管有助理，以後你做的每件事都有一個助理。不必再寫文件的第一版，不必再為客戶做準備。他們有個財務的人做了一個 Glean prompt，幫她算業務的薪酬：讀試算表，看哪個業務依做了什麼拿到什麼。這些現在是手工。人會習慣，甚至忘記以前得手工做，那個技能也不再需要，時間可以放去更有創造、槓桿更高的事。

Guy 問這是不是每個人都變得更資深、更像管理。她聽過一種說法：像帶著一隊實習生。她不認為每個人都會更像經理。她相信的是實習生把容易自動化的重複工作做掉，人去做有創造的工作。若每個人有五六個實習生去寫這段 code、那份文件、那份簡報，她覺得大家會更滿意自己怎麼花時間。
