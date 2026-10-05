# Unveiling LLM Observability with Traceloop's Gal Kleinman

Simon Maple 主持 AI Native Dev，來賓是 Traceloop 的 CTO、共同創辦人 Gal Kleinman。片長約 39 分 45 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla、把 Traceloop 聽成 Trace Loop、把 OpenLLMetry 聽成 open almetry 或 lomemetry、把 ChatGPT 聽成 SHA GPT 或 Chip，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=TD-wjNStTVM)

## 一句話

接上 SDK、把 OpenTelemetry 送出去，這一步不難。難的是為這個應用定義對的 eval，讓你從 production 的真實回應裡看出好壞，而不是只看 latency 和 token。Gal 的結論很老派：沒被量到的不能改進，沒在改進的一定會變差。LLM 不該被當成應用裡不用負責的那塊魔法。

## 產品是從一個沒上線的 agent 長出來的

[0:47](https://www.youtube.com/watch?v=TD-wjNStTVM&t=47s) 英國剛進春天，Gal 所在的地方已經是夏天，外面 25 度。進 Traceloop 之前，他在 Fiverr 當 group manager，帶資料科學團隊用的機器學習平台，另一隊做資料基礎設施。和共同創辦人、也是 CEO 的人一起離開。字幕把那位 CEO 的名字聽成 near。他們進了 Y Combinator 2023 年冬季班。

[3:22](https://www.youtube.com/watch?v=TD-wjNStTVM&t=202s) 那一批他們做的是另一個產品。生成式 AI 剛開始，OpenAI 剛放出 ChatGPT 和那些 GPT 模型。他們做多 agent 架構，要解分散式系統上的端到端任務。他說當時像火箭科學，今天每家新創都在做自主 agent。批次快結束時有了能動的 MVP，但不穩、不可靠。Gal 說大約 30% 在工作。樂觀的 CEO 說大約 60% 到 70%。他們不敢帶著它出 beta。新創第一天可以很糙，但必須看見 production 裡使用者發生了什麼，並持續改。他不覺得 AI 做得到 100%，他們想要的是自己覺得有 90%。於是在內部用 OpenTelemetry 做可觀測。然後他們愛上了這件事。那個 MVP 從未上線。之後做的就是 LLM observability。

[2:18](https://www.youtube.com/watch?v=TD-wjNStTVM&t=138s) 他說這是一般應用可觀測的衍生物，多出來的是 evaluation。即時監控 LLM 應用，也用大多是離線的評估，幫開發週期把應用改好。材料來自 production 和 tracing。

## 多數時間花在把 30% 推進到 90%

[7:31](https://www.youtube.com/watch?v=TD-wjNStTVM&t=451s) 他覺得大家會說同一件事。做出一個能動的 PoC 很容易。開發者以為自己比別人強，prompt 簡單、pipeline 簡單，行為自己知道，很快就會是 production grade。誤解。時間大部分花在把大約 30% 時候能動的 PoC，推進到 90% 能動。另一個誤解是：只要看得到 production 發生了什麼，有簡單的 tracing 或 logging，就能到那個 90%。這不可擴展。你沒辦法一條 trace 一條 trace 地看 production 流量，然後把應用改好。

[9:08](https://www.youtube.com/watch?v=TD-wjNStTVM&t=548s) 和傳統 code 的差別，Simon 先點了除錯。傳統程式可以一步步走。LLM 是丟一個 prompt、拿一個回應。同一個輸入、不帶 context，打十次可以得到十個答案。Gal 說非決定性讓除錯難很多。把 production 裡的例子原樣拿到開發環境去 mock，多半得不到同樣結果，測試和修復都更難。

[10:24](https://www.youtube.com/watch?v=TD-wjNStTVM&t=624s) 傳統可觀測有大家熟的指標：HTTP 500、例外、latency，哪條 flow 沒照預期走，最佳實踐很多。LLM flow 的好和壞、成功和失敗，不是二元的。他和 Simon 看 ChatGPT 的同一個回答，一個可以覺得好，一個覺得壞。他們合作的公司裡，人工標註通常一個例子不只一個人標，因為主觀、沒有清楚答案。你得自己設指標，判斷 production 裡發生的是好是壞。這是傳統可觀測沒有的難度。

[13:07](https://www.youtube.com/watch?v=TD-wjNStTVM&t=787s) 把所有可能的輸入畫出來也很難，所以好的測試覆蓋很難。LLM 本質上很開放，除非你把應用收得很窄。支援用的 chatbot 若只說「我是客服，什麼都問」，輸入的可能是無限的。好的做法是先限定它能做的事，輸入的變化就小，覆蓋會容易一點。Simon 說結構化輸入能把變異壓下來。

[15:08](https://www.youtube.com/watch?v=TD-wjNStTVM&t=908s) 幻覺很明顯，也需要引用，Gal 說這點他補不了多少。他更想講的是品質會漂。即使模型名稱和釋出日期的 revision 都沒變，OpenAI 仍常改的不是 foundation model 本身，而是處理 inference 請求的那層架構，結果你的呼叫品質可以下降。有個客戶把摘要的字數當品質的代理指標。某一天中位數突然少了大約 20 個字。整篇摘要他記得大約 50 到 150 字，他叫人別抓他這個數字。測過、上過線，某一天仍可能整個變掉。

## 追蹤不難，評回應才難

[17:52](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1072s) OpenTelemetry 是 CNCF 的開源專案，把分散式系統和 SaaS 架構怎麼報 metrics、logs、tracing 標準化，並給 SDK 和 collector。它主要包的是後端的 client library，今天客戶端和手機也有。目的地只要有 OpenTelemetry endpoint，就能收、能畫。Simon 問 OpenLLMetry 是不是一位很愛取名字的 Patrick 取的，字幕把姓聽成 Devoir。Gal 說是。

[19:40](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1180s) OpenTelemetry 自己有很多 instrumentation，也就是包住某個 SDK 的程式庫。他舉 Python 裡用 SQLAlchemy 當 Postgres 的 client：instrumentation 用某種方式從 SDK 的方法抽出資料，再以標準的 log、trace、metric 送出。他們當時在做 agent，覺得很像 microservice：有 orchestrator，agent 之間互相說話，某個 agent 是另一個 agent 的 tool。有經驗的工程師不該每個輪子都自己造。就算不是 agent，當時的 pipeline 也越來越複雜，還有 API 呼叫，而 HTTP 本來就是 OpenTelemetry 會量的。

[22:25](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1345s) OpenLLMetry 是在 OpenTelemetry 上加一組 LLM 開發常用 SDK 的 instrumentation，三類。Foundation model：OpenAI、Anthropic、Bedrock、Gemini 或 Vertex AI，以及其他。他說今天大約 40 個，自己已經懶得數。再來是 vector database。第三是 framework：LangChain、LlamaIndex、CrewAI、Haystack。加上 OpenTelemetry 既有的 instrumentation，資料可以進 Traceloop，也可以進任何支援 OpenTelemetry 的平台。Trace 裡有 prompt、回應、用了多少 token、每次呼叫的成本、從 vector database 取回的 top K 文件、LangChain 和 LlamaIndex 裡的 transform。初始化 Traceloop SDK 就有，他說是白送的。

[24:32](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1472s) 若只用 SDK 給的基本 tracing 和原始指標，你拿到的是決定性的那些：token、latency，可以設 alert。這是好的第一步，不夠。更重要的是在 production 裡對回應的真實內容做 evaluation，給回應本身打分，而不是只看 metadata。用 SDK 把 trace 送到 Traceloop 或別的廠商很容易。定義並做出對的 eval，才是重活，也才回得來站得住的洞察。

## 先讓人標得一致，再讓機器去撈有趣的 trace

[26:42](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1602s) Eval 可以從略嫌天真的代理指標開始，例如字數，有些情況夠用。再往前就完全看應用的情境，沒有萬用指標。經典 NLP 的 ROUGE，以及他接著說的另一個指標，字幕聽成 grun，他說都很好，但通常給不出你要的結果。你得先自己標資料。人要先知道自己想用哪些標準評，而且人評得了、不同的人結果還要一致。

[28:06](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1686s) Simon 問：eval 好不好，是不是要到 production、看到使用者高不高興才知道。結構化輸入輸出也許比較能量，不必全靠情緒。Gal 說，明白開口要的使用者回饋通常有偏，不是好指標。他要的是隱性分數。若產品在建議 completion，使用者真的接受了，可以算 thumbs up。主動問，多半只收到生氣的人。就算 90% 滿意，你看到的仍是生氣的那些。他們相信用真實的 production 例子。有些公司因為客戶隱私做不到。做得到的話，可以用這些例子訓練 evaluator，再拿回開發流程。

[30:22](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1822s) 訊號和噪音是問題。一開始一條條看 trace 沒關係，最大的公司也這樣，因為 LLM 功能先小規模上。然後用 latency 這類基本指標，以為問題解決了。到了有意義的規模就不能一條條看。若 evaluator 沒有先建好，一天一百萬次生成就擴不了。就算花錢、堆人，每天標一百萬個例子也很原始。要有對的 evaluation，在 production 給 trace 打分，只把有趣的撈出來查、用來改應用。

[32:06](https://www.youtube.com/watch?v=TD-wjNStTVM&t=1926s) 誰在做。AI 和 ML 的開發已經移向後端，甚至前端。以前是資料科學家，他們受過訓練，本來就有評估系統，做法比較有方法。後端工程師不習慣。很多力氣因此移到營運。傳統資料科學裡就有的標註團隊、在整理有標籤的資料集，仍然有用。Product manager、標註團隊、領域專家都可以。他舉一個生成式 AI 的醫生：該由醫生來排序、打分、標回應，不是後端工程師。Gal 說自己因為家人有一點健康方面的訓練，但一般開發者通常不懂健康。

[34:11](https://www.youtube.com/watch?v=TD-wjNStTVM&t=2051s) Simon 把 AGI 先放在幾年之後，問 agent 互相傳資料、同一個應用裡有不同模型時，可觀測會不會更難。Gal 說 flow 越複雜，可觀測越是主要角色。若每次只是同一個模型的一個 prompt，使用者出問題還算好懂。Prompt、模型、資料庫、tool 一多，就必須追整條路上發生了什麼。今天還能碰到整個 MCP 的世界，他們這集沒展開，例如 Google。除錯客戶工單需要它；他們更在意的是生成的健康和品質。總分也許是 50% 在工作，但拆不開。複雜之後，儀表上的零件變多，你要找出是哪一個在漏，才讓最後只有 50%。有可能其他零件都在大約 90% 的品質，只有一個失常。你要能追到是哪一個元件。

[37:11](https://www.youtube.com/watch?v=TD-wjNStTVM&t=2231s) 他留給開發者的話是那句老話：沒被量到的不能改進，沒在改進的一定會變差。在這個領域就是怎麼量回應的真實品質。量得到，才能改，也才能確定它沒有變差。Simon 補上：不要把 LLM 當成應用裡不用交帳的魔法。他記得幾年前，人把加進應用的 LLM 看得比今天嚴得多。它變主流、被接受之後，仍該用和傳統 code 一樣嚴的做法。
