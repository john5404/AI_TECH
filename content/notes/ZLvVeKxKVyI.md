# Bootiful Spring AI with Josh Long

Josh Long 在 Spring team 工作。片長約 17 分 46 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=ZLvVeKxKVyI)

## 一句話

Spring AI 要把 AI engineering 裡反覆出現的模式做成現成能力：system prompt、chat memory、tool calling、RAG 與 vector store，以及對輸出的評估。Josh 用虛構收容所 Pooch Palace 接上 OpenAI、Postgres 與 MCP，說明即將 GA 的 Spring AI 1.0 先把 oneshot 請求做順，下一步才是 agentic programming。

## 模型記不住，也不認識你的資料

[0:56](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=56s) Spring AI 的目的，是把人們做 AI engineering 時發現自己需要的模式商品化。他說 Java 與 Spring 社群很適合把 AI 接進應用。模型今天很強，但不完美。

[1:26](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=86s) 他點名幾個缺口。很難讓模型盯住一個結果，所以給 system prompt。模型無狀態，每次請求之後都忘掉前面說過的話，所以要自己帶一份 transcript，這叫 chat memory。模型不知道怎麼跟外面的世界整合，所以給 tool calling。模型不認識你的資料，可以把資料塞進送出去的文字，但每個模型能吃的量有上限；為了少花錢、少複雜度，用 RAG 與 vector store 做 semantic similarity search。最後，chat model 就算錯了也會很有信心地說，所以要 evaluate 輸出。GA 他說在 5 月 20 日，大約還有七天；release candidate 當天或很快就會出現。

## 收容所助理：記憶、人設、向量資料

[2:39](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=159s) 示範是一家狗收容所。靈感來自疫情期間一支爆紅的領養文案：沒有很大的市場，給那種 neurotic、討厭男人、討厭動物、討厭小孩、長得像 gremlin 的狗。他提到 People、Buzzfeed，以及 New York Times 裡那隻 demonic Chihuahua。

[3:36](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=216s) 他從 start.spring.io 用 snapshot 起一個 assistant，帶進 OpenAI、web、Spring Data JDBC。本機已經有帶 vector store 的 Postgres，所以用 PG Vector，再加上 GraalVM native image、actuator，以及 MCP client。模型他說可以換 OpenAI、Bedrock、Gemini、Ollama；vector database 也很多，口頭點到 Weaviate、ChromaDB、Elasticsearch。現場打字的 URL 與套件名有幾處字幕聽歪，上面依他後來講清楚的名字校正。

[6:40](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=400s) 第一個請求是「my name is Josh」，接著問「what's my name」。模型不記得，他比成電影 Memento。解法是 advisor：`PromptChatMemoryAdvisor`，用 `ConcurrentHashMap` 以 user 當 key，底層是 `MessageWindowChatMemory` 與 in-memory repository。他說也有 SQL 或 Redis 這種 durable storage。接上之後模型記得名字，但仍不知道資料，也不知道自己在做什麼。JDBC URL 他直接寫進程式，並說實務上應該放進 environment variable；OpenAI credential 則說已在畫面外設成環境變數。

[9:07](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=547s) system prompt 讓它假裝是虛構機構 Pooch Palace 的員工，地點包括 Antwerp、Seoul、Tokyo、Singapore、Paris。資料用 Spring Data JDBC 從 SQL 讀出，每隻狗寫成一份 Spring AI document（id、name、description），寫進 vector store。他強調 vector store 不一定要跟業務資料庫是同一個。再加一個 `QuestionAnswerAdvisor`，指向那個 vector store。問有沒有 neurotic 的狗時，回答是可以領養的 Prancer：一隻 demonic、neurotic、不喜歡男人、動物和小孩的狗。

[12:04](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=724s) 他不想每次都重跑 embedding，因為呼叫 embedding model 就算不是錢，也是複雜度。classpath 上的 Spring Boot actuator 提供 observability，可以看到來回送了多少 token。

## Tool、MCP，然後才是 agent

[12:25](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=745s) 下一個工具是 `schedule`，收入 dog id 與 dog name，回傳一個未來日期，用來確認這不是幻覺。tool description 寫的是在 Pooch Palace 預約接狗或領養。他強調 schema 要用很具體的文字描述。問何時能到 London 接 Prancer，回答是 5 月 16 日。他說今天是 5 月 13 日。

[14:15](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=855s) 這還只是本機上的 Java tool。他想讓別的語言也能重用同一段業務邏輯。Anthropic 在 2024 年 11 月推出 MCP，Model Context Protocol。Spring AI team 捐出的核心 Java abstraction 現在是 MCP 的官方 SDK；他說在 JDK 上做 MCP service，最容易的路就是 Spring AI。他把排程服務放到 port 8081，原本的 assistant 改成 MCP sync client，用 HTTP 連 `localhost:8081`。再問一次，仍是 5 月 16 日，這次是 assistant 經 MCP 打到另一個模組。

[17:12](https://www.youtube.com/watch?v=ZLvVeKxKVyI&t=1032s) 收尾時他說，這只是大約一週後 GA 的 Spring AI 1.0 裡的幾件事，元件從 start.spring.io 拿。有了這些 primitive，oneshot request 很容易；下一個自然步驟是把它放進一種 flow，推向更複雜的結果，他稱之為 agentic programming。
