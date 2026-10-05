# Josh Long & James Ward - Building AI Agents with Spring & MCP | DevCon Fall 2025

James Ward（AWS，做 agent 和 MCP）與 Josh Long（Spring team）。DevCon Fall 2025。他們說這是大約 25 分鐘的現場示範，片長約 27 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=eXKQZPzszK8)

## 一句話

業務邏輯和資料多半已經在 Java 裡，agent 就該放在那裡，而不是另起一套。他們用 Spring AI 在現場疊出一隻領養狗的 chatbot：Bedrock 換 model、Postgres 存 memory、PG vector 做 RAG、先呼叫行程內的 tool，再把同一個 tool 拆成 MCP server。Josh 的收法是，這就是 REST 和 glue code。

## 從 start.spring.io 開始，model 只是設定

[0:11](https://www.youtube.com/watch?v=eXKQZPzszK8&t=11s) 範例領域借用 Spring Pet Clinic 的精神，改成領養。Josh 講疫情期間一則爆紅的送養文，狗叫 Prancer：neurotic、討厭人、討厭其他動物、討厭小孩、長得像 gremlin，像一個受創的 Victorian child 附在家裡；才兩歲，大概會靠 spite 活到 21 歲。People、USA Today、BuzzFeed 都報過。他想做一個連這種狗也能被領養的地方。

[3:43](https://www.youtube.com/watch?v=eXKQZPzszK8&t=223s) Model 用 Amazon Bedrock。Marketplace 裡有 249 個 model，包含 Anthropic、DeepSeek、Amazon 自己的。一個 API，後面換 model 只是設定，Java 程式不用改。Josh 的筆電已經登入 AWS。

[4:26](https://www.youtube.com/watch?v=eXKQZPzszK8&t=266s) 專案從 start.spring.io 開，服務叫 assistant。他開玩笑說 production 才是網路上最喜歡的地方，start.spring.io 是第二。Java 他只肯用 25。字幕把另一個選項聽成 2017，對照他說的 21，應是 17。他示範 Java 25 可以不先編譯，像 script 一樣跑 `void main`，並說這是史上第一次出現好的 Java script。相依有 web、資料庫、Postgres、PG vector、Bedrock 與 Bedrock Converse、Actuator、MCP client、chat memory。Embedding 走一般的 Bedrock，chat 走 Converse API。

[7:11](https://www.youtube.com/watch?v=eXKQZPzszK8&t=431s) Chat model 設成 Amazon Nova Lite，他強調 249 個裡隨便一個都可以。Embedding 用 Bedrock 上的 Cohere，維度要對上 PG vector。另外打開資料初始化、virtual threads，以及 observability endpoint。Virtual threads 是 JVM 上改善執行緒效率的功能。PG vector 讓同一台 Postgres 同時當 SQL 和 vector store，邏輯上仍是兩個元件。

## 沒有 state，就要自己組 memory

[7:54](https://www.youtube.com/watch?v=eXKQZPzszK8&t=474s) Controller 收一個 question，路徑上還有 username。Chat client 注入 builder 就能用。幾行把 HTTP 請求裡的問題交給 LLM 再回傳。資料庫裡有 dog table。Prancer 的 ID 是 45，描述就是那則送養文，沒有飼主。

[9:43](https://www.youtube.com/watch?v=eXKQZPzszK8&t=583s) 「My name is Josh」會得到 Hello, Josh。再問名字，model 說自己沒有個人資料、答不出來。LLM 沒有 state。Memory 就是在送出前多塞進 prompt。他們用 Postgres 存，型別是 message window chat memory，滾動視窗，預設他們確認是 20 則，不要永遠全留。

[11:08](https://www.youtube.com/watch?v=eXKQZPzszK8&t=668s) Spring 用 advisor 接上。Advisor 是 interceptor：請求出去前可以改、可以加資料，回來也可以攔。Chat memory 有現成的 advisor。Schema 初始化後，表裡看得到使用者和 assistant 的來回。一開始是全體共用的 memory。他們改成從 URL 拿 user ID。正式環境會從 security 拿身份，這裡只是把 Josh 放在路徑上。

[13:05](https://www.youtube.com/watch?v=eXKQZPzszK8&t=785s) 還要給任務，避免有人拿來寫功課或寫程式。System prompt 說：你是領養助理，機構叫 Pooch Palace。地名他先說成 Antwerp，當場改成 Brooklyn，另外還有 Seoul、Tokyo、Singapore、Paris、Mumbai、New Delhi、Barcelona、San Francisco、London。問有沒有 neurotic 的狗，它提到 Pooch Palace，卻說目前沒有。任務對了，資料還沒接上。

## RAG 把描述變成找得到的狗

[14:32](https://www.youtube.com/watch?v=eXKQZPzszK8&t=872s) RAG 是把資料注入即將送給 LLM 的 context。Question answer advisor 拿使用者的 prompt，對狗做 similarity search。狗和 prompt 都變成 vector，用 PG vector 裡的 cosine similarity 找出最接近的狗，再放進 prompt。平常應在建立和更新時向量化。他們這次是手動做一次：Spring AI 的 document 送進 vector store，store 去問 Cohere embedding model，把向量寫進 PG vector。Embedding 就是一串數字。啟動時向量化很慢，所以他把它註解掉，重啟不再重算。

[16:55](https://www.youtube.com/watch?v=eXKQZPzszK8&t=1015s) 再問一次，回答說 context 裡有一隻叫 Prancer、被描述成 neurotic 的狗。若要把結果傳給別的 API 層，純文字不夠。他們改向 model 要一個型別：`int` ID、`String` name、`String` description。LLM 吐 JSON，Spring 解成 record，再序列化回 JSON。這個 demo 有點繞，所以畫面上仍留文字，但型別這條路是通的。

## Tool 先在行程內，再搬到 MCP

[18:10](https://www.youtube.com/watch?v=eXKQZPzszK8&t=1090s) 要預約去店裡接狗。他們沒有真的排程系統，tool 寫死：三天後可以領養。Tool 跟 agent 在同一行程，還沒到 MCP。`@Tool` 的自然語言描述決定 model 何時該叫它；參數描述決定值填進哪個槽。問 Brooklyn 何時能接，回答是 November 22，而他們說今天是 19 號。流程是：請求帶上 tool 清單，model 要求呼叫 schedule，Spring 端用對的參數執行，結果餵回 model，再回給使用者。

[20:21](https://www.youtube.com/watch?v=eXKQZPzszK8&t=1221s) 若 tool 不想留在記憶體裡，或要接別人的 MCP server，就把本地 tool 抽成 MCP server，換一個 port 避免衝突。MCP inspector 連上 8081，列得出 schedule。Agent 注入 sync MCP tool callback provider，設定裡給 HTTP URL。兩個 Java process：scheduler 在 8081，assistant 在 8080。他們先清 cache，避免 model 靠舊 memory 作弊、不再真的呼叫。再問一次，log 裡看得到 remote MCP call。

## 觀察 token，以及這層本來就在 Spring 裡

[22:43](https://www.youtube.com/watch?v=eXKQZPzszK8&t=1363s) 這套是加在既有的 Spring Boot 旁邊：system prompt、memory、RAG、MCP。他說機構裡多年累積的程式就是現成的。型別一路都在，不必另交一份 schema 去告訴 Python 形狀。Token 很貴這件事他們也點了。這次用 Bedrock，他們說 demo 到這裡還沒花到一 penny，但服務若爆紅就得看用量。Actuator 加 Micrometer 把應用的 metrics 送出去，Spring AI 的 token 數字也在裡面。現場看到的是這次 session、而且在記憶體裡；Micrometer 可以把 metrics 和 distributed traces 送到任一時序資料庫，包含 Amazon CloudWatch。

[25:31](https://www.youtube.com/watch?v=eXKQZPzszK8&t=1531s) 用的是上一週發布的 Spring AI 1.1，全程都是這版，支援完整 MCP specification。Josh 說 Anthropic 去年十一月公布 MCP 後，Spring AI team 同一個十一月就做出 Java 實作，後來捐出。官方 Java MCP SDK 是他們寫的程式再 rebase 上去的，Spring 之外也能用；Spring AI 只是把它變好接。收尾時他說，別人把 AI engineering 講得很了不起的時候，可以提醒對方：這就是 REST API、整合、當代的 glue code，JVM 開發者做了幾十年。
