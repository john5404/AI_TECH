# Agents Observability with OpenLLMetry with Nir Gazit

Nir Gazit 從 Tel Aviv 連線，當地晚上 10 點。片長 25 分 54 秒，英文自動字幕。字幕把 OpenLLMetry 聽成 open LLM entry、Open LLM Metry，把他的名字聽成 Near。主持人提到稍早 Simon 問過這個名字怎麼來的。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Ilyhddkh3AI)

## 一句話

Agent 的 log 是一大串文字，看不出一步一步發生了什麼。Nir 的做法是把 generative AI 接上 OpenTelemetry 已經有的 logging、metrics、tracing。OpenLLMetry 用 instrumentation 去包 OpenAI、LangChain、Pinecone 這類 SDK，trace 以標準格式送去你本來就在用的平台。示範裡兩行程式，就能看見天氣 agent 的 tool call 和回傳。

## 名字是從一則推文來的

[0:42](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=42s) 開源釋出前兩週，Patrick 在 Twitter 上說他在等 open LLM telemetry。他們當時還沒有名字，只把它叫做自己的 SDK。Nir 看到那則推文，覺得這名字很好：沒人唸得準，但大家知道它站在什麼上面、要做什麼。

[2:05](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=125s) 他先講 OpenTelemetry，再接到 agent。OpenTelemetry 是 CNCF 最大的專案之一，CNCF 屬於 Linux Foundation，各大 observability 平台都支援。他點名 Splunk、Datadog、Dynatrace、New Relic、Honeycomb、Grafana。用了它，就可以在這些平台之間換，不必重做收集。

## Logging、metrics、tracing

[3:12](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=192s) 它是協定，用來觀察 production 應用。大約五到六年前開始，當時是給一般的 cloud observability，還沒有 LLM、generative AI、agent。規格裡有三種東西。

Logging 是任意事件。對 agent 來說，就是把 prompt、completion、function call 記下來。那些是很大塊的文字，你想知道它們發生過，也想看到確切內容。

Metrics 是要在不同時間尺度上加總的數據點。在 generative AI 裡是 token usage、latency、error rate。

Tracing 追的是多步驟流程。沒做過很多 microservice 的人通常不習慣。OpenTelemetry 其實是從 tracing 開始，後來才加上 metrics 和 logs。對到 LLM，就是 LangChain 的 chain，或一次完整的 agent 執行。他用一張 RAG pipeline 的圖：要看整條花了多久，也要看每一步。Retrieval 那步要看到從資料庫取回什麼；呼叫 OpenAI 要看到那一次發生了什麼。

## 裝 SDK、掛 instrumentation、必要時加 collector

[6:40](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=400s) OpenTelemetry 不只是協定，是一整個生態。SDK 涵蓋 Python、TypeScript、Go、C++ 等。裝上就能做 logging、metrics、traces。

Instrumentation 是現成的套件。你要記資料庫查詢，可以自己呼叫 SDK，也可以裝 Postgres 或 MySQL 的 instrumentation，直接拿到 log、metric、trace。字幕把 MySQL 聽成 my secret。做法是 monkey patch 進那個 SDK，在應用程式這側看方法被怎麼呼叫。他說裝好 SDK 和幾個 instrumentation，兩分鐘內就能看到系統裡發生什麼。

[8:07](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=487s) Collector 做送出去之後的處理。例如同一份資料要同時進 Datadog 和 Honeycomb，或要濾掉、清掉 PII。這些都是開源，可以免費開始用，接到你已經在用的東西上。

## OpenLLMetry：同一套，加上 LLM 和 agent

[9:53](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=593s) OpenLLMetry 大約一年前開始做。他們把 OpenTelemetry 擴到 generative AI、LLM、agent。Instrumentation 涵蓋 OpenAI SDK，以及 Anthropic、Bedrock、Chroma、Pinecone。他說今天在 OpenTelemetry 這套裡支援的 framework 和 provider 超過 40 個。裝上之後，任何動作都會自動送出 logs、metrics、traces。要去 Datadog，設環境變數或設定 collector；要改送 Sentry 或 Grafana，改設定就好。

[11:21](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=681s) Foundation model 和 provider 基本上都有。Bedrock 和 Gemini 是跟對方一起做的，有些只是 monkey patch。Vector database 有 Pinecone 等。Framework 有 LangChain、LlamaIndex、Haystack。全部開源，可以自己擴。

[11:53](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=713s) Pinecone 的例子是一條 RAG：使用者問問題，查自己建好的 index，拿回可能有用的 context，再交給 LLM 回答。Instrumentation 會記所有 query、index、回傳的 vector 細節，以及 latency 和 vector database 給的各種 score。

## 兩行程式，看見天氣 agent

[13:14](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=794s) Demo 是一個 LangChain agent，只有一個能搜尋網頁的 tool，模型用 OpenAI，用 LangGraph 執行。Prompt 本來寫 I'm Bob，他改成自己的名字，人在 Tel Aviv，問天氣。搜尋那個 tool 的產品名，字幕沒聽清。

[14:16](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=856s) 使用方式是加上兩行。SDK 用 `poetry add` 或 `pip install`，套件名字幕聽成 tracer-sdk。加上之後就會 instrument OpenAI 和 LangChain。第一次跑出舊金山的天氣，因為他忘了存檔。再跑一次，答案是 Tel Aviv 晴、18.1°C，比他想的冷。

[16:30](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=990s) 終端機上的 log 很亂。Trace 的時間是 10:21。LangGraph 裡看得到 agent call 和 tool call。Query 是 current weather in Tel Aviv，tool 回了一段來自 weather API 的 JSON。後面 OpenAI 用這些資訊回答，畫面上寫的是晴、18.5°C。他說看整條 trace，比看一串 log event 清楚。而且格式是標準的，之後可以在規格上自己做圖，例如把 agent 執行畫成 graph。

## 問答：換平台、既有的 OpenTelemetry、生產環境的圖

[19:55](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=1195s) 有 latency 這類 metrics，就可以平行跑、比較不同 provider。他們發現 OpenAI 有一個 fingerprint 欄位，告訴你這次 prompt 跑在哪套系統上，而且常常變。很多人會覺得這個 model 這週比上週笨；字幕沒把那個產品名聽清。他說很多時候不是換了新 model，而是 fingerprint 變了，內部架構有改。Token 長度也可以拿來找品質、latency、效能的平衡。他喜歡開源和開放協定，因為可以選擇自己用得順的工具。

[21:45](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=1305s) 他接下來最想做的是把 agent 執行畫得更好。大家談 agent 很久了，現在才開始更多進 production。只靠今天這種基本 tracing 不夠，上面要有更好的視覺化。主持人提到 reasoning token、chain of thought，以及 LLM 自己也在變，很難決定觀測要疊在哪一層。Nir 說 OpenAI 過去一年在 bare LLM 外面加了很多東西，例如 JSON schema 和 assistants。他希望那些內部步驟將來也看得到，不然出錯時很難判斷是哪一層。字幕裡有一句把出錯位置聽糊了。

[23:47](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=1427s) Uneeb 問：codebase 裡已經有一般的 OpenTelemetry，要怎麼加 OpenLLMetry。他說 GitHub 上的 instrumentation 是分開的套件，OpenAI、Anthropic 各一個。已經在用 OpenTelemetry 的話，單獨裝這些套件就會動，它們走 OpenTelemetry 的 auto instrumentation。Demo 裡那兩行是給還不會裝 OpenTelemetry 的人，用來補上安裝和設定的缺口。

[25:03](https://www.youtube.com/watch?v=Ilyhddkh3AI&t=1503s) 收尾他歡迎大家進開源討論、貢獻更多 instrumentation。他們和 OpenTelemetry 社群有在一起做。主持人說之後在 Discord 繼續。
