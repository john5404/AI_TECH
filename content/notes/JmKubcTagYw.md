# James Ward & Josh Long - Hands On Building Agents | DevCon Fall 2025

片長 52 分 41 秒，英文自動字幕。DevCon Fall 2025 的 hands-on。James Ward 和 Josh Long 用 Spring 和 Spring AI，在 Amazon Bedrock 上做一個領養狗的助理，再把同一套東西交給現場改成獨角獸店。後面是工作坊，字幕沒有每個人的操作結果。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=JmKubcTagYw)

## 一句話

他們要示範的不是再挑一個更強的 model，而是用 Spring 把已經在 JVM 上的程式接進 LLM。先接通 Bedrock，再補上會忘記名字的 stateless API、用 RAG 把自家的狗放進 prompt、用 tool 讓模型自己決定何時去排程，最後把那個 tool 搬成遠端的 MCP。企業裡大部分資料已經被 Spring 程式守著，不必為了加 AI 全部重寫。

## 四根柱子，然後才是 AI

[0:09](https://www.youtube.com/watch?v=JmKubcTagYw&t=9s) 議程他們說是接下來兩小時。先講約 25 分鐘，再放手做 lab。只要筆電、瀏覽器和牆上的 Wi-Fi。其餘在雲上，已經配好 AWS 帳號，裡面有 Bedrock。問現場誰用過 Java、誰用過 Spring，用 Spring 的人不多。他們說今天會教一點。

[2:45](https://www.youtube.com/watch?v=JmKubcTagYw&t=165s) Josh 從 start.spring.io 開始，因為怕直接跳進 AI 會假設大家已經懂 Spring。應用隨便取名。Java 25，他說這是今天唯一該用的版本，其他選項是給做糟糕人生決定的人。加上 GraalVM native image，字幕聽成 Gravium，再加一個 web service。這時還跟 AI 無關。Spring 在底下把物件接起來。你要一個型別，中間有人改寫那個東西、加上能力，再交回來，而且多型上仍相容。Java 是物件導向。一個物件做一件事，那是業務邏輯。稽核、安全、可觀測性是正交的。若為三個關注點做三個子類別，階層會又深又重複。Spring 用 aspect-oriented programming 用通用方式把這些裝飾上去。另外兩根是 dependency injection，他說基本上就是用建構子，以及 portable service abstraction，讓底層基礎設施沒那麼痛。這三根以前叫 spring triangle。現在還有 Spring Boot 的 auto configuration，他開玩笑說變成正方形。

Java 25 可以把一段沒有外層 class 的 `void main` 當腳本跑，不必先 `javac`。他花了一段時間說這是三十年來第一個好的 Java script，跟 JavaScript 不是同一個東西。

[8:07](https://www.youtube.com/watch?v=JmKubcTagYw&t=487s) 例子是 customer service，建構子注入資料庫。他不在意是 Postgres 還是 MySQL，字幕把 Postgres 聽成 postgrad。測試時一處是 mock、另一處是真的，呼叫端不必改。`@Configuration` 和 `@Bean` 之後，Spring 看到一個方法回傳 data source、另一個方法需要它，就自己傳進去。也可以只寫一個介面上的 stereotype。`@Service` 和 `@Component` 一樣會被掃到，但 `@Service` 把角色講清楚。低階 JDBC data source 是糟糕的抽象。Spring 的 JDBC client 是流暢的 DSL：`select`、參數、mapper，拿回一份 customers。這是 portable service abstraction。`@Transactional` 把方法包進交易，丟例外就 rollback，否則 commit，不改變物件的形狀。這是 AOP。Data source 若要自己做連線池會很煩。給 username、password、URL，Spring Boot 的 auto configuration 會做掉。他說懂這四個角，就懂接下來的 Spring AI。

## 先有撥號音

[14:23](https://www.youtube.com/watch?v=JmKubcTagYw&t=863s) 範例領域是領養狗。Spring Pet Clinic 在生態裡幾十年，上週還更新過。Josh 講自己的狗 Peanut，再講 2021 年 4 月 7 日一則找領養的貼文，狗叫 Prancer，後來上了 People、USA Today、Buzzfeed、New York Times，最後有人領養。他們要做的是一個虛構收容所，讓人用 AI 問收容所裡有哪些狗，而不是靠新聞找到惡名昭彰的狗。

模型在 Amazon Bedrock。他說可以選 249 個。他們用 Amazon 第一方的，也提到 Anthropic 的 Claude、DeepSeek、GPT OSS，字幕分別聽成 cloud、DeepSseek。介面用 Spring AI。

回到 start.spring.io，專案叫 assistant，因為他說自己很會取名。加 web、Bedrock 的 embedding、Bedrock Converse。James 解釋：RAG 要用 vector embeddings，所以要一個在 Bedrock 上的 embedding model；聊天則要 Converse。兩個函式庫。向量庫邏輯上分開，但很多既有資料庫已經能做。專門的有 Milvus、Pinecone、Qdrant、Chroma，字幕聽成 mil、cudrint。既有的他點了 MongoDB、GemFire、Elasticsearch、Couchbase、Cassandra、Redis、Oracle、Postgres、MySQL、Neo4j，中間還有一個聽成 Patrick 的名字。他們用 Postgres，靠 pgvector 這個外掛。再加上 JDBC 的 chat memory、actuator、Spring Data JDBC。

[23:26](https://www.youtube.com/watch?v=JmKubcTagYw&t=1406s) 設定裡聊天模型是 Nova Lite，輕、便宜、快。Embedding 用 Bedrock 上的 Cohere，字幕聽成 cohhere。維度要對上 PGVector。會初始化 schema。背後是 Postgres。正式環境不該把帳密寫在 properties，該用環境變數；demo 先寫在檔案裡。這些 properties 觸發他剛才講的 auto configuration。

第一個 web controller 收 HTTP，再呼叫 LLM。Chat client 是 Spring AI 裡跟 LLM 說話的介面。用 builder 建起來，`prompt` 放 user prompt，再取 content。Josh 的 AWS 憑證已經設好，所以它知道怎麼連 Bedrock。回應回來了。他說這是撥號音：你看到的設定裡，到這一步其實只要大約兩行，程式大約六行。AI 那四行他說按了換行，合成一行也不會有人抱怨。模型回：嘿 Josh，很高興認識你。接著問「我叫什麼名字」。它說對不起，那是它碰不到的個人資訊。他說我們才剛見面，它已經忘了。API 是 stateless，得把來往的逐字稿給它。

## 記憶、系統提示，然後才是狗

[27:03](https://www.youtube.com/watch?v=JmKubcTagYw&t=1623s) Advisor 像攔截器，可以在打到 LLM 前後加工。這個 advisor 把整段對話存進已經配好的 Postgres。每次新問題，把一部分歷史推進去。他說用的是 windowed memory，只留一定數量的訊息。預設留 user messages 和從 LLM 回來的 assistant messages。它不是真的「知道」，而是下次把歷史再送一次。他們清掉上一輪的 `spring_ai_chat_memory`，但不要刪 dogs。重啟後表是空的。先說 my name is Josh，再問名字，它回 Hello Josh。

這仍然太開，等於一個洞直通 Bedrock 帳號。小孩會拿這個聊天機器人寫功課。他們加 system prompt。Josh 有一份寫好的。內容是：你是 AI 助理，幫人從名為 Pooch Palace 的領養機構領養狗。地點有 Antwerp、Seoul、Tokyo、Singapore、Paris、Mumbai、New Delhi、Barcelona、San Francisco、London，前兩個字幕聽成 Antworp、Souls。問有沒有 neurotic 的狗。它的口氣像是該答得出來，卻說目前沒有被標成 neurotic 的狗，可以介紹各地的性情。他們知道為什麼：它沒有他們的狗。

[31:08](https://www.youtube.com/watch?v=JmKubcTagYw&t=1868s) 另一個 advisor 做 RAG。James 說架構是：攔截 prompt，依 prompt 對 vector store 做 similarity search，再把結果放進即將送給 LLM 的 prompt。這是開發者決定把資料塞進去。後面的 tools 才是 LLM 自己決定何時需要資料。Dog 是要存的紀錄。Dog repository 只定義了介面，Spring 會做出實作，在 controller 被建構時注入。字串是隨便的，不必先給一個固定 schema。他傳一份只有一個元素的 list。大段文字也許要 tokenize、拆開，Spring AI 有一整層支援；這裡文字少，就用一份。Embedding 用雲上的 Cohere：給字串，回向量。使用者的 prompt 再去對那些向量，才找到要問的那隻狗。Spring AI 的 RAG 支援會呼叫 embedding 的 LLM，把 embeddings 存進向量庫。Advisor 做相似度搜尋，自動放進 prompt。它答：有，有一隻叫 Prancer 的狗，被描述成 neuronic，字幕把 neurotic 聽成這樣。

若要給系統其餘部分用，可以不要字串，改要一個強型別。同一題再問，回來的是強型別 JSON，整數可以拿去對。他這次其實要字串，只是讓大家知道另一種做得到。

## 三天後取狗，而且是模型決定要叫工具

[34:45](https://www.youtube.com/watch?v=JmKubcTagYw&t=2085s) 下一步是真的排一次領養。Dog adoption 服務有一個方法，給一個未來的時間點，讓人去店裡接狗。`Instant.now` 再寫死三天後。沒有接上真的排程系統，是假的。要把這個方法告訴 LLM，使用者一問排程，agent 就去叫它。加上 `@Tool`，description 用自然語言，因為那是 LLM 判斷何時該叫的依據。參數也可以標註，讓它知道怎麼填。Tool 的定義進到送給 LLM 的 prompt。若它判斷使用者要的事可以用工具完成，就回應「叫這個工具」。Agent 側執行，再把結果放進下一次呼叫送回去。Josh 用 with tools 接上。它找到 Pooch Palace 的 Prancer。再叫它領養 Prancer。回來的時間他念成 November，三天後。工具有被叫到，排程那支也跑了，再回答他們。

若要把這段業務邏輯給別的 AI 整合用，就用 MCP。把工具放到外部系統，做成 MCP server，不必跟 agent 同一個行程。MCP 不只給自己寫的工具，別的供應商、開源、現成的 MCP server 也能接到同一個 chat client。它把剛才那種 tool call 變成標準協定。Josh 把工具拉到另一個專案，跑在 8081。註解換成 MCP 專用的，字幕聽成 MCP tool 和 MCP ARG，比 `@Tool` 多一些只在遠端才有意義的參數。MCP inspector 裡看得到 schedule，有 dog ID 和 dog name。

[38:48](https://www.youtube.com/watch?v=JmKubcTagYw&t=2328s) 回到 Spring AI client，改成指遠端。Spring AI 1.1 剛出，他們還在適應。有 server 的依賴，也有 client 的。他們加的是 client starter，注入 sync MCP tool callback provider。連線設成 SSE，URL 是 `http://localhost:8081` 底下的 SSE，字幕把路徑聽得比較碎。左邊是 agent，右邊是 MCP。模型若已經記得某件事，有時會作弊，所以他先清。問何時能到紐約的 Pooch Palace 接 Prancer。它說有 Prancer，時間字幕記成 201121。右邊看得到它叫了 MCP。James 說模型有 agency：使用者的問題它原本答不了，它知道自己有這個工具，就自己去叫。他們也給了它資料。他認為這是關鍵：企業和組織裡大部分資料被寫在 JVM、寫在 Spring 上的程式守著。若能把那個存取交給模型，就不必為了加 AI 把那些東西全部重建。

## 工作坊換成獨角獸，帳號還能用一陣子

[42:32](https://www.youtube.com/watch?v=JmKubcTagYw&t=2552s) 開放提問時幾乎沒有人問。Josh 說他希望有人來自 Java、已經熟 Spring Boot，也希望有人來自別的生態、覺得有點亂。那是新的東西。James 說有問題可以喊，聚光燈照得他們幾乎看不見觀眾。

[42:28](https://www.youtube.com/watch?v=JmKubcTagYw&t=2548s) 接下來是動手。剛剛看到的，現場會再做一次，但是換成 unicorn store。登入有三個選項，第三個他說只有 Amazon 員工用得到。James 給一個網址，字幕連成 s12d.comspring-ai-native-com，這裡不把它改成別的拼法。他走 email 收一次性密碼。有條款，同意後加入活動。頁面底部是這個 AWS 帳號裡的 VS Code 網頁環境，之後寫 code 都在那裡，要複製一組 ID 和密碼進去。左邊選單是工作坊內容。第一頁先不要離開，先把那個環境打開。正式內容從 building Java AI agents with Spring AI 開始，就是剛才的架構：RAG、chat memory、MCP。小節是 setup、建立應用、chat client、REST controller、做一個 UI。這個 UI 是真的聊天介面，不像 Josh 用 curl 或 HTTP。Deploying on AWS 開始變難，observability 更難。帳號可用 48 小時。後來他看時鐘，還剩一天 18 小時。即使今天剩下的時間做不完，還能繼續。他只要求不要在這些機器上挖 Bitcoin，也不要放個人資料。

最近加了一節 Embabel，字幕也聽成 embable、Babel。它建在 Spring AI 上面。現場的 Alex 在做這個，有問題可以問他。Chat client、RAG、記憶之外，若要編排更大、更複雜的 agents，就是這一層。Rod Johnson 做的，也就是做 Spring framework 的那個人。算加分。部署可以走 EKS、ECS、Lambda，agent core 這個新服務也要放進來。昨天辦過同一場，碰到兩個 bug，已經修了，包含 local memory 再接到 external memory。他們在這裡待到 5:35，接著去紐澤西的 Java user group。明天市內有 New York Java SIG，也有一場 25 分鐘的演講，就是剛剛這場，他叫大家明天別來聽。第一個把 chat client 接通、拿到撥號音的人有襪子。他數了五雙。結尾有人做完了，他們問是不是把 Kubernetes、observability 和 Embabel 都走完。James 說那像一整天的工作坊，因為他們昨天就是這樣辦的。字幕沒有寫現場每一台機器做到哪。
