# Why AI Agents Need a Data Harness, Not Just a Lakehouse

Will Martin 是 Dremio 的 data and AI evangelist。他在大型強子對撞機做過統計分析，資料業約 15 年，最近寫了 Agentic AI for Dummies。這場約 37 分鐘，英文手寫字幕，談的是 harness engineering 裡的資料。字幕把 agentic 聽成 genetic，把 Dremio 聽成 Romeo，把 ACID 聽成 asset，把 knowledge graph 聽成 knowledge glow offs。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=xR-BiPz45-4)

## 一句話

給人用的分析可以等幾分鐘到幾小時，agent 不行。對話的節奏要次秒級，否則 pipeline 會錯、token 會浪費。他說現代的 data lakehouse 同時給三件事：看得到全部資料、定義集中所以不必猜、查詢夠快。這三層，catalog、semantic layer、query engine，就是他說的 performance data harness。開放標準是為了不要為了速度把自己鎖進一家廠商。

## 從倉庫和湖，到對話走得動的速度

[0:28](https://www.youtube.com/watch?v=xR-BiPz45-4&t=28s) 開場是一個被他說得很辛苦的雙關，data harness。無論工程還是分析，都是把資料優化、有效率地送出去。Dremio 自稱為 lakehouse 供應者，跟畫面上那些比較眼熟的標誌同類，差別是吉祥物比較好。他叫 Gnarly，好畫進部落格和活動。另一個是 Nessie，戴着他不知道英文怎麼叫的蘇格蘭帽。存不存在可以爭論。那是 Dremio 做的開源 data catalog，很多人沒把這兩件事連起來。另外兩個是 Apache Arrow 和 Apache Polaris。他們賣 lakehouse，也重金投開源標準。

[2:25](https://www.youtube.com/watch?v=xR-BiPz45-4&t=145s) Arrow 在 2016，和 Dremio 同一年、同一批人。先是記憶體裡的格式，現在也是處理 columnar 資料的傳輸格式，適合分析。一個數字：每個月超過 1 億次下載，而且只算 Python 的 PyArrow。別的語言函式庫他們不追。Iceberg 是 2017。他們沒有創造它，但是大用戶、也在教育，工程師在專案裡寫 code、做貢獻。Polaris 最近，2024 跟 Snowflake 一起推出，另一個 metadata catalog，類似 Nessie。原先只做 Iceberg metadata，現在也做 Delta。想要開源的 Delta Lake catalog，他說這比 Glue 這類東西好。教育面：他們為 O'Reilly 寫了 Apache Iceberg 的書，也寫了 Polaris 的書。

[3:41](https://www.youtube.com/watch?v=xR-BiPz45-4&t=221s) Lakehouse 常跟 lake 搞混。Warehouse 適合分析，儲存很痛，規模上去成本上去很多。Lake 適合儲存，分析很痛。Lake 加 warehouse 的 house，就是 lakehouse。低成本、可擴展的儲存，例如 S3，加上以前只有 warehouse 才有的可靠交易。版面上是湖，加上運算，那還是 lake 的布局。要變成 lakehouse 得加兩塊。Metadata catalog 把湖裡正確版本的資料集交給 compute。Metadata format，也叫 table format，是關於資料的 metadata：schema、歷史，適合回滾，也用來應付 Parquet 在變很快的分析裡會碰到的問題。一般長相是湖裡的 Iceberg 資料、各式 catalog、各式引擎。像真的蓋一間湖邊的房子：找一個 data lake，用 catalog 和 metadata 加一點結構。

[5:32](https://www.youtube.com/watch?v=xR-BiPz45-4&t=332s) 典型平台有四層：存資料的 file format、存 metadata 的 format、當中間人把對的資訊送給 query engine 的 catalog，然後是引擎。他們用 Parquet，因為欄位快。只用 Iceberg，用很久了，現在這個領域其他 lakehouse 都在用，包括 Databricks。Open catalog 由 Apache Polaris 驅動。Query engine 用 Apache Arrow。他說開源不是行銷，堆疊每一層都在用，因為快、好用。

[6:30](https://www.youtube.com/watch?v=xR-BiPz45-4&t=390s) 這跟今天的 harness engineering 有什麼關係。不用 lakehouse 時，典型是一座湖、資料散在各處：別的資料庫、catalog、物件儲存，天曉得還有 Excel，或是老式 warehouse。幾年前的 legacy 分析是 email 的節奏。查詢要幾分鐘到幾小時被認為可以接受，像寫信給同事，希望當天回。對人可以，對 silo、對 pipeline、對 warehouse 也可以。Agentic 分析，或任何用 AI 的東西，是對話的節奏。就算拿掉聊天介面也一樣。你問我一個問題，我想十分鐘才答，那不是好對話。Pipeline 大概會報錯，token 也被浪費。要這件事能動，需要次秒級回應。不是想要，是要求。人可以去泡茶再回來。Agent 不行。特別是一座 lake，做不了這種工作。

[8:14](https://www.youtube.com/watch?v=xR-BiPz45-4&t=494s) 他要講的是夠好的資料基礎，以及能送到分析或工程需求的平台。需求很像。Accessible：看得到整份資料資產，資訊齊了，評估和分析才準。Understandable：取用它的東西要懂，不必再問人這欄是什麼意思。Performant：對話的節奏。他認為現代 data lakehouse 三項都做得到，而且用開源標準，不鎖廠商。投影片上的 Gnarly 標的是他們自己的功能，他大多不講，因為不是來推銷。平台底層是資料，物件儲存或其他系統、warehouse、catalog。中間是執行層。上面是真正在用的東西。BI 他從投影片上擦掉了，因為今天談 AI。

[9:35](https://www.youtube.com/watch?v=xR-BiPz45-4&t=575s) 工程或分析，都是把東西接到 AI。他們有三種接法。內建 agent，不想自己做的人用。分析界推資料民主化很久，Databricks 曾拿這當口號。它就是 UI 裡的一個分頁。第二是 MCP，開源。第三是給終端機用的 developer CLI。他猜這個房間比較在乎右邊兩個。接得上沒有用，若接上去的東西本身不好。所以這場的焦點是執行層：query engine、semantic layer、open catalog。三者一起是 performance data harness。

## Catalog 讓讀取變快，也把權限收到每一列

[10:56](https://www.youtube.com/watch?v=xR-BiPz45-4&t=656s) Catalog 他們叫 Dremio Open Catalog，因為 Snowflake 也有一個 open catalog，同樣由 Polaris 驅動。他不知道大家為什麼都這樣命名，有點混亂。Polaris 今年二月離開 incubation，該有的 catalog 功能都有。上面再加幾樣。Iceberg clustering 是 partitioning 的替代：把相似的值聚在列上，但不把資料切成實體 partition。讀取更快，對大量的業務使用者也比較好懂。還有表維護，garbage collection 和 compaction，lakehouse 必需，大家都做。RBAC 是治理的一部分，可以按角色限制，細到列和欄。

[12:19](https://www.youtube.com/watch?v=xR-BiPz45-4&t=739s) 優化在業界很共通，不管哪一家 lakehouse。Small file problem：資料進來是很多小檔，開檔又慢又貴。想要合成大檔才快。Compaction 就是把它們擠在一起。Vacuuming 清掉失敗嘗試或不再用的 metadata，省儲存。Variant shredding 比較新。Iceberg V3 有一種新型別叫 variant，把半結構化資料放進表格的一個儲存格。Delta Lake 早就有，後來加進 Iceberg，也加進 Parquet，所以任何跑在 Parquet 上的 metadata format 都能用。Lakehouse 快的秘訣之一是 predicate pushdown。例如找 20 到 35 歲的軟體工程師，metadata 知道哪些檔、哪些 partition 裡有你要的資料。若只是把 JSON 塞進儲存格，在有 variant shredding 之前拉不出來。Shredding 把巢狀的資訊拉出儲存格，只打開需要的 partition 和檔案。

[14:08](https://www.youtube.com/watch?v=xR-BiPz45-4&t=848s) Catalog 也給端到端的存取控制，使用者和 AI agent 都一樣，每一層都能做。Polaris 對主要的 hyperscaler 做 credential vending，儲存層就能控。再往上，用 masking 和 filtering 做到欄和列。不管 agent 是在替人做事、你在訓練它、你在開發它，還是你在跟它一起工作。

## 沒有共同定義，模型會很有信心地猜錯

[14:53](https://www.youtube.com/watch?v=xR-BiPz45-4&t=893s) 中間夾着 AI semantic layer。前面那個 AI 不是重點，它跟以前的 semantic layer 差不了太多。業務詞是主觀的。這家說的 customer，下一家不一定相同。跟錢有關的指標，尤其 revenue，每家算法差很多。他做顧問和分析師超過 15 年，看過很多不找人問就完全不知道是什麼的欄位。Claude 不會更好。它訓練資料很多，但不是這家公司的資料。公司裡若只有一個定義，已經算幸運。客服眼中的 customer，和業務眼中的，常常不同。這些定義往往還不在工具裡，在更下游的 BI、試算表、data dictionary，AI 和下游工具根本不看。跟資料分開，不是好主意。

[16:16](https://www.youtube.com/watch?v=xR-BiPz45-4&t=976s) 沒有定義，模型會很有信心地猜。做出來的分析或工程結果，你得往下鑽，才知道自己看的是哪個定義。有好幾個定義也一樣：挑一個，再爭吵挑得對不對，結果還是不能信。所以要把 context 收成一層 semantic layer，放進平台。下游的 AI 只接一個地方，資料和 metadata 在一起。寫下欄位是什麼意思、指標怎麼定義、表怎麼關聯。很多地方已經很容易，因為表是用 SQL 定義的，從 silver 算出 gold 的方式就寫在 SQL 裡。這就成了 source of truth。Agent 可以回答帶着很特定業務詞的問題。他舉 Q2：你以為各家差不了多少，投影片上的例子是剛被 SAP 買下，兩邊的 Q2 差很多，所以同一家公司內部也會變。Prompt 被拆成任務。有 semantic layer，它才能可靠地行動：去一個地方找指標定義，靠命名或標籤知道哪張是 sales，靠欄位定義解釋這張表。簡單可以只是標籤，再往上是 wiki，再往上是 knowledge graph。業界在收斂，也在談怎麼把 semantic layer 標準化。

[18:27](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1107s) OSI 是 Open Semantic Interchange，去年由 Salesforce、Snowflake 等幾家推出，最近變成 Apache Software Foundation 的專案，仍叫 OSI。標誌是一隻沒有臉的袋鼠，他覺得不夠可愛。目的是標準化工具之間怎麼分享語義資訊。工具內部怎麼實作，仍然差很多。空間還在發展。

## 資料留在原地，引擎可以換

[19:01](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1141s) 最後是 query engine，做 data federation。他請 90 年代出生的人舉手。拆掉 data silo 這件事，跟他們的年紀一樣久，silo 還在，而且有理由。大家有點放棄了。資料進得去、出得來，拆掉很痛。Federation 就是現在的做法。像 lakehouse 那樣，資料在哪就在哪查，包括其他系統。靠 Polaris 這類東西可以支援多種 table format，還有其他 catalog、物件儲存、資料庫。把存取和治理集中，不要把資料本身物理集中。那是 warehouse 掉進去的陷阱。

[20:05](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1205s) Reflections 是他們自訂的查詢加速，他說不會細講，但 caching 要講。很多人做 cache。Query plan cache：查詢相同、資料變了，沿用同一個 plan，工作量減半。結果集也存：查詢和資料都沒變，就把同一份結果交回去。自訂的是 Columnar Cloud Cache，他們一直不知道該叫什麼，他偏好 C3。常被看的資料放在叢集的節點上，緊鄰 compute。有些客戶成本掉了 90%。他說這很基本。

[21:02](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1262s) 接着是 open data harness。有些方塊在投影片上是灰的。他們有自己的 query engine，很快，「好玩」這個詞他覺得太重。市場上還有別的，Kafka，開源的例如 Spark。他們也支援別的引擎：Snowflake、Athena、Trino，開源的可以，Fabric 則不太行。他們允許對 catalog 和底層儲存做完整的讀寫，他說這在市場上是獨特的，因為用的是開放標準。用了 Iceberg，平台就可以長成另一種樣子。Parquet 本身沒那麼要緊。Catalog 可以換，包括那個可愛的，市場上可愛的 catalog 還不少。Query engine 也很多。可以為了效能、成本、偏好來組，或是因為換了公司、對方不肯改。不必為了鎖在某一家而犧牲效能。這靠 Apache Iceberg，特別是 Iceberg REST spec，也就是引擎和 catalog 怎麼說話。左邊這些引擎可以開箱跟右邊這些 catalog 談，因為都走這份 spec。有一兩個但書，有些 catalog 的寫入有問題，也許跟 Unity 有關，Glue 也有一點。他說整座現代分析的空間都被這個撐着，連 Fabric 也在用 REST spec，Databricks 現在也是，儘管整座平台是圍着競爭格式 Delta Lake 建的。

[23:35](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1415s) 收尾：分析和工程要的資料是同一套。Accessible，公司裡的人都能用，但要安全，RBAC 和細粒度控制，從 bucket 到列，每一層都能放。Understandable，定義要大家同意，不要留給人各自解釋，那就是出錯的時候。Performant，資料在哪就在哪查，不搬、不清、不等讀取。頂多多一些 IOPS 的痛。這些由不綁特定廠商的技術送出，特別是 Arrow 和 Iceberg，還有別的。你要的基礎設施、資料交付和資料品質，可以送到正在做的工程或分析上。

[24:52](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1492s) 提問先問：agent 在跑查詢，例如已經有一份算好的資本數字，同時又把計算所需的原始資料給它，怎麼避免它浪費時間和 token、從頭自己算，而不是走對的資料路徑。他說設定裡有 tools、prompts、templates，用來把查詢的範圍箍住。他們這塊偏分析。MCP 一般是給建造者的，模型自己帶，guardrail 也在建造者身上。他們給的是離散動作，能看哪些資料集取決於你用來存取的憑證。Token 燒多少，他說恐怕也是你的問題。UI 裡那個 agent 限制比較多，花費很清楚。你也可以帶自己的 agent，他們會追花費。

[26:42](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1602s) 下一問字幕很碎，大意是多個領域、受保護的資料，agent 怎麼知道自己在查什麼。他說 query engine 只負責執行。Claude 接上他們的 MCP，知道自己能做的動作，例如執行 SQL。分析在這點上單純，很多就是在寫 SQL。Semantic layer 提供它需要的資訊，可以依你問的內容搜 schema 和關鍵字，向量搜尋幫它找對的東西。CLI 回的是 JSON，模型看懂能做什麼、某個動作會回什麼，再行動。對方說自己在做一條小流程：收資料、組合、清理、做成 data product，覺得基礎建設沒有更聰明的暴露方式，還是得自己組。他同意。你得自己從端點組起來。問它做事時，一切經過 semantic layer，雖然投影片上的分層有點歪。它從那裡知道整份資產、你有哪些資料集、作為使用者你開得到什麼，再把你要做的事對上可用的東西。該採取什麼動作，是 MCP 告訴它的。對方還在做某種給 agent 消費的標準，字幕沒聽清。他說那更適合 CLI，比較結構化、比較細，給不想有人在旁邊微管理的 workload 和 multi-agent workflow。對自己在做事的 AI 更省、更有效。划算，你的工作也少。連結可以再給。

[31:10](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1870s) 有人做基因體，問 agent 的存取控制：有些人看得到、有些人不能看，有沒有這套機制。他們的大客戶裡有 Genomics England，對方在用這個平台。他說其實很基本。AI semantic layer 就是 semantic layer 前面加了個漂亮的詞。Agent 的存取是把已經在的東西拿來再用。它透過一個使用者帳號進去。不管是他自己查，還是叫 agent 代查，看得到的東西相同。

[32:34](https://www.youtube.com/watch?v=xR-BiPz45-4&t=1954s) 有人問 Open Semantic Interchange 和 semantic web 的技術什麼關係，是不是從頭開始。他不太熟 semantic web。用 Arrow 當對照。Arrow 先是記憶體格式，讓每個系統在記憶體裡用同一種方式處理資料。系統之間搬仍然痛：A 的欄和 B 的欄，得先轉成列才能過去，再轉回欄。後來才有傳輸格式。OSI 就他目前所知是反過來的：先有一份標準化格式，在系統之間分享資訊，目前主要是 JSON。JSON 有效率問題，他覺得還會有更多 spec。系統 A 和系統 B 裡面長什麼樣，他不認為有硬性規定。它比較像是為了不要把業務 context 鎖死在某個工具裡。Semantic web 他說自己會再去查。

[34:21](https://www.youtube.com/watch?v=xR-BiPz45-4&t=2061s) 最後一問：接了很多資料來源，路徑有幾十種。有沒有辦法讓 agent 知道查詢的延遲，先走快的，再走聯邦查詢，而不是全部丟給引擎。他說比較高階、專門做 federation 的平台有人這樣做。他們不太做。基本做法是：想要快，就在湖裡建一張表，一種連過去的複本，拿掉相依，也免得查詢時一直敲來源系統。比較有趣的變通是 reflections。它看哪些查詢太慢，包括打到其他系統的，做成 materialized table 再替換進去。你還是可以問 Hadoop。假設要一分又八秒，它會做一張更快的表，塞進你的查詢，SQL 不用改。很多功能是為了不那麼技術的人，使用體驗好一點。你可以自己動手優化，有些人就是不想。它看着跑太慢的東西，把那些查詢加快。問的是同一句，執行時 query planner 換上另一張表。它會告訴你它在做，但你不用做任何事。沒有別的問題之後，他說自己會留在現場。
