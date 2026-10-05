# How This Broadcom Dev Uses Spring to Power AI Workflows | Josh Long

Simon Maple 在 Devoxx UK 訪問 Josh Long。Josh 從 2010 年就在 Spring，一路經過 Pivotal、VMware 到 Broadcom，是 Java 社群裡的 Spring advocate。兩人認識大約十五年。原片約 43 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=xa-jd8zrF2U)

## 一句話

Josh 認為大多數人用 AI，是把已經寫在 Spring 裡的商業邏輯和資料接到 model 上，不是自己訓練 model。Spring AI 把這件事做成你本來就會的元件模型：可換的 model、advisor、vector store、tool，最後再抽成 MCP。台上他做一個幫人領養狗的助手。記憶、system prompt、RAG 和 tool calling 都接上之後，問有沒有 neurotic 的狗，會找到 Prancer，並真的呼叫一個把預約排在三天後的方法。

## 九十 percent 是把文字送到 REST

[1:14](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=74s) 開場先扯到 virtual JUG。Josh 說那是早了疫情十年的主意，現在裡面幾乎有 20,000 人。Simon 說大家認識的 Josh 是 Spring advocate。Josh 說他 2010 年加入，和他們認識的時間差不多。

[2:31](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=151s) Spring AI 被他說成 AI engineering 的 one-stop shop。Java 和 Spring 社群的位置很特別：大多數人要用 AI，是接上既有的商業邏輯、應用和服務，而那些已經寫在 Spring、JVM、Kotlin 或 Java 上。他們只是想把 AI 掛到那段 code。驅動生意的邏輯、餵給生意的資料，都由 Spring 的 microservice 管。有人會用 Python 訓練新 model，那不是大多數人。就像大多數人不會用 C 自己做 SQL database。要上 production，要能擴、要快、要安全、要可觀察，他說 JVM 沒有別的東西像它。

[4:08](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=248s) Spring 是一組 framework，上面是 Spring Boot，再上面是不同用途的垂直層：microservice、batch、integration、data、security。其中一層叫 Spring AI。1.0 GA 他先說 3 月，又改口 5 月。曾經希望更早 GA，但 AI 變得太快。這是他們最忙的開源專案之一，star 的歷史像曲棍球棍，GitHub issue 和貢獻都在衝。每次以為可以安定、可以發 GA，又有一整個新範式掉下來。Simon 光聽討論的量，還以為已經 GA、已經成熟、一直有人在用。Josh 說他們想等到該有的東西都在。錄這集是 5 月 7 日。若一週沒有變動，或 5 月 20 日，哪個先到就發。他後來說也許是 5 月 27 日，又開玩笑叫大家當作今天已經出了，等你看到時也許連第一個 patch 都有了。

[6:11](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=371s) 他要把 AI 的創新配上 Spring 一直在做的那種寫法。支柱是 portable service abstraction，把不同 model 的差異隔開，包括 image、chat、transcription。再加上 dependency injection、aspect-oriented programming，以及 Spring Boot 的 auto configuration。他先說三根，又改口四根。目的是在這塊陌生的地上有個著力點。元件模型你已經會，只是把對 Spring 的理解用到這個新領域。

## 系統提示把作業題拉回領養

[7:07](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=427s) 時間緊，所以做一個很簡單的應用：幫人領養狗的助手。他常講狗。他自己的狗叫 Peanut，他說不是最好的，但是他的。疫情時他看到另一隻更衝的狗 Prancer。主人試了幾個月，沒辦法把這隻狗寫得容易被人接受。廣告寫它神經質、討厭人、討厭動物、討厭小孩、長得像 gremlin。想養 Chihuahua 的人大概懂。她說它就是那個 meme：50% 是恨，50% 在發抖。她一度比較喜歡它安靜躺在沙發上的時候。她以為它會變成一隻真正的狗，後來相信它比較像一個受創的維多利亞時代小孩，附在家裡。它才兩歲，大概會靠怨念活到 21 歲。廣告走紅，People、USA Today、BuzzFeed、New York Times 都寫過這隻「惡魔 Chihuahua」。Josh 說大多數人不是在網路上這樣找到狗。你去收容所，跟人家談話，面試出你夢想中的狗，或這次是噩夢中的狗。助手就是要陪人走完那個過程。

[9:58](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=598s) 他到 start.spring.io。資料庫裡 Prancer 的 id 是 45，在 Postgres。應用叫 assistant。Model 用 OpenAI，因為好、很多人拿得到，但不是唯一的。在很在意資料隱私的歐洲，也許更想用 Llama，或 Bedrock、Gemini。官方支援的 model 有幾十個。沒官方支援的，很多會講 OpenAI 的 API，就可以走那條整合。他也加 web、Spring Boot Actuator，以及 vector store。打 vector store 會看到 Milvus、Neo4j、Pinecone、Weaviate、Redis、Qdrant、Elasticsearch、MongoDB、PGVector 等等。他選 PGVector，因為 SQL 已經在 Postgres，這是一個 plugin。這些依賴會進 Maven 的 pom，建置時把 Java 依賴拉進來。台上他漏了 devtools，又選較舊的里程碑，因為下一個里程碑改了慣用寫法、他一時想不起來。IntelliJ 若在加 devtools 之前就開專案，就不會啟用那層整合，所以他重做了一次。

[13:08](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=788s) Controller 有一個 inquire。Chat model 經 OpenAI 連出去，key 已經放在環境變數，Spring Boot 會把它正規化成那個 property。資料源是本機 Postgres 的 JDBC URI。Chat model 上面可以建很多 chat client。他注入 builder，設預設值，用使用者的 request parameter 當 prompt，回傳 content。第一句問完，它說很高興見到 Josh。再問名字，它已經忘了。ChatGPT 或 Claude 的桌面版有對話記憶，model 的 API 沒有。每次都要把 context 送回去。做法是加一個 advisor：每個使用者一張 map，沒有就新建，存在記憶體。Chat memory 這個介面還有別的實作，他點了 Neo4j、JDBC，Redis 好像也在來。Advisor 像過濾器，是送給 model 之前的前處理。對話會按使用者存成逐字稿，之後每次請求都再傳一次，它才記得談過 A、B、C。接上之後，它答得出「我叫 Josh」。

[17:15](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=1035s) 問題是它也答 2 加 2。這不是作業輔導，是領養助手。Simon 記得有公司的助理被 prompt poison，拿去寫惡意程式，也提到 Amazon 的助理有一陣子被這樣玩。Josh 貼上 system prompt：你是 AI 助手，幫人從名叫 Pooch Palace 的領養機構領養狗，據點包括 Antwerp、Seoul、Tokyo、Singapore、Paris、Mumbai、New Delhi、Barcelona、San Francisco 和 London，London 就是這場 Devoxx 的所在。狗的資料會列在下面。若沒有資料，就禮貌地說目前沒有狗。System prompt 決定語氣和走向，試著把所有回答框進這個任務。他說它可以很嚴：「任何跟這件事無關的，一律不要答。」那就是 prompt engineering，使用者也會反過來說服它其實可以答。他再次說 Java 和 Spring 的位置好，因為 90% 的 AI engineering 是寫文字、送到一個 REST endpoint。魔法發生在 OpenAI 的伺服器上。對他們來說就是一次 REST，沒有 schema，就是人類語言。

## 十八筆也不要全送：先做相似度

[20:40](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=1240s) 問有沒有 neurotic 的狗，它走對了方向，但說沒有 Pooch Palace 的具體資料。資料在資料庫。他用 Spring Data JDBC，Java record 有 id、name、owner、description，再加一個 repository。他可以把全部資料給 model。表裡大約 18 筆。他說 Gemini 的 context 可以到大約兩百萬 tokens。Token 不完全等於一個字，但這些 model 按送進去和拿回來的資料計價。18 筆塞得下。原則是不要為了沒有理由的東西付那個成本，不管是錢還是複雜度。要做的是只挑跟這次查詢有關的紀錄，再送去給 model 做後續分析。那就是在 vector store 裡做相似度搜尋。用資料來影響回答，叫 RAG，retrieval augmented generation。

[23:19](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=1399s) 先把資料放進 vector store。Spring AI 可以幫你初始化，就是一張帶 vector 欄位的表。對 SQL 裡的每隻狗建一份 document：id、name、description。這裡沒有 schema。重點是前後一致，否則不能比。每次 `vectorStore.add` 會為那段文字做 embedding，打到 OpenAI 的 embedding endpoint，再寫進 vector store。為什麼不自己打 OpenAI：因為有抽象。你注入的是 vector store 這個介面，換 embedding、換 Neo4j、Elasticsearch、Weaviate 或其他店，或同時用好幾個，都是同一層 portable service abstraction。他說對很多家做過 demo，抽象相同，所以是 agnostic。Spring AI 裡也有一個記憶體版，大約 300 行，他改口 307。不要把它部署到 production。它像本機用的資料庫，讓你看見發生的是語意相似度，演算法是 cosine similarity：給兩個陣列，找出最適用的那個。

[26:10](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=1570s) 他加 QuestionAnswerAdvisor，classpath 上要有 Spring AI 的 vector store advisor。Chat client 處理請求時，一個 advisor 把對話存進記憶體，另一個在送出之前先查 vector store 裡有沒有相關的東西。這些又是過濾器。再問有沒有 neurotic 的狗，它回答去見 Prancer。回傳可以不是字串。他做了一個有 id、name、description 的 record，讓它給出有意見的 JSON，也就是 structured output。示範完又改回字串，因為他們要的是 content。

## 工具就是一個方法，簽名就是 schema

[28:10](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=1690s) 下一步是有人想領養。他做一個元件，方法是 `scheduleAdoption`，帶狗的名字和 id，並把它輸出成 tool。Tool 就是 model 工具箱裡的東西，用來碰他們的商業邏輯。實作很任意：把日期往後推三天，印出來確認被叫到。描述用自然語言：幫人在 Pooch Palace 的據點預約領狗或領養。他說這就是媽媽講的 use your words。描述重要，因為 model 靠這段 metadata 決定。Tool 就是一個函式。Builder 上可以加任意多個，由它選。台上他一度把狗的資料庫刪掉，又救回來，也說當初應該先把 devtools 加好再啟動，自動重載才會順。問能不能預約去接，它排出 5 月 10 日。當天是 5 月 7 日，加三天仍是 10。方法確實被呼叫。他沒有另外提供 schema。方法的簽名就是 schema，再加上描述裡的自然語言。

[34:07](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=2047s) Simon 問它什麼時候決定要用工具。Josh 的想像是：它看得到可用的工具。這個問題它大概答得出來，但若有一個工具承諾可以答同一個問題，它會選工具。這確實是 non-deterministic，不過大多數時候做得不錯。他覺得有趣的地方從 tool calling 開始。使用者介面變成聊天框，因為它可以從那裡呼叫商業函式、推動真正的變更。這也是很多公司急著把你從人工協助轉去 IVR 的原因。現在那些系統變得相當好。能不能解決所有問題，要看能力有多窄，除非你把 prompt 修得很細。即便如此，光是 tool calling 就能做多到誇張的事。問題是，寫成這樣只對這一個 Spring 應用有用。他想把邏輯集中、抽出來。自然的做法是 Model Context Protocol。

## 把三天的演算法搬進 MCP

[35:24](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=2124s) MCP 來自 Anthropic，也就是 Claude 桌面版和 Claude 這個 model 的作者。它是一個協定，用來把應用和 model 接到商業邏輯。他在 start.spring.io 再開一個服務，當排程器，只加 MCP server 和 web。原本的應用補上 MCP client。他把那個被他戲稱 patent pending、其實只是加三天的方法剪過去，叫 Spring AI 把它輸出成 MCP endpoint，工具物件就是 dog adoption，埠號 8081。原本的應用裡留下一個編譯錯誤形狀的洞，用一個 MCP sync client 補上，走 HTTP，再 `initialize`。他說這段設定有點多餘，因為協定非常新。Spring 是最早做支援的之一，而且寫了 MCP 的 Java SDK。到 modelcontextprotocol.io，Spring AI 那套函式庫是官方推薦的 Java 實作。他們把程式抽出來放在共用的地方，再在上面做 Spring AI 的 auto configuration。宣布之後的 11 月頭幾個星期就做了。兩個應用接上之後，再問有沒有 neurotic 的狗、能不能在 London 預約，一樣排到 5 月 10 日，但這次走的是 8081 上的 MCP，不是本機工具。

[39:38](https://www.youtube.com/watch?v=xa-jd8zrF2U&t=2378s) 他接著用 Maven 的 native profile 編譯 native image，並把 Actuator 的 exposure 設成全部。Metrics 裡有 genai client 的 token usage。他看到到目前為止打了四次 model。這層是 Micrometer，也可以接到時間序列資料庫。他提醒那些 AI 或 AWS 帳單：有人自動擴到像一百萬個節點，然後破產。Token 數量一樣要盯。Production 要夠格，這很重要。也該把 virtual threads 打開。每一次打 model 都是網路呼叫，會佔住一條做 blocking IO 的 thread，這種該放到 virtual threads 上。Native image 跑起來之後，他用 RSS 看記憶體，算出 147 MB。他說這就是端到端、夠格上 production 的 AI 系統。Simon 問數字太高時該看 RAM 還是 tokens。Josh 說看 metrics 裡的 tokens。要知道自己的用量。它不是無限的，也不是免費的。對方的生意是你花愈多 tokens，他們賺愈多。你想把 AI 提供給使用者，他們提供 AI，這點是對齊的。但要一直確認這仍然為真。尤其對話會把整段歷史一次次送回去，prompt 愈來愈大。
