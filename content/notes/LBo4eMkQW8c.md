# Agents Aren't Stupid, They're Just Blind

片長 39 分 46 秒，英文手寫字幕。Tom Scott，Streambased。這是一場 meetup。上週他在 Big Data London 對 data engineer 講過大段相同的內容，那次的題目是 AI 為什麼在殺死 ETL。這週換到 AI、ML engineer，原則一樣。他說自己是資料的人，是 coding agent 的使用者，這場沒有 coding agent。他看了 Rob 的演講，很多原則撞在一起，事先沒有對過。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=LBo4eMkQW8c)

## 一句話

Agent 不是笨，是看不見。你控制它那個小現實裡有哪些資料、從哪個角度看。把每個系統都接上 MCP，它會因為同一份資料有好幾種樣子而做壞決定。省下來的是人和流程的時間，燒掉的是資料：掃整張表、把衝突判錯、把不存在的關係補上。Medallion 那套 bronze、silver、gold 是為一個利害關係人、一個問題設計的。他要的是在資料層做 context：用 federation 和邏輯 view 把選項留著，讓過濾發生在下面，而不是讓模型把 `SELECT *` 塞進 context。

## 四種看不見，以及三種拿資料的方式

[2:02](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=122s) 他先舉手。在 production 跑 agent 的人，比他以前見的多一倍。那些 agent 有沒有一組專門的資料來源？沒有人舉手。再問：你是不是已經有需要的每一份資料？他也知道不會有人舉手。他說自己不是來談 AI 的現況，他不夠格，也不覺得現況正在失控。他要做的是 hearts and minds：讓人換一種方式看驅動 agent 的資料。歷史告訴他為什麼必須換。

[3:49](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=229s) 他用 chatbot 當歷史。先是酷技巧，看起來像人。很快變成真的能做一些事。他把第二段算成 RAG 開始進來。他和 RAG 是愛恨關係，而且不把 RAG 當成認真在想資料。他認為是到了 MCP，才開始把還算合理的資料交給 agent，讓它做面對客戶的功能。然後升級得很快：從有點意思，到人人都有 MCP server，現在用 MCP 可以訂披薩。做軟體、碰資料、或要能採取行動，就得提供這種介面。他覺得鐘擺正在擺回來。把一切都暴露出去不是答案。要認真想怎麼處理資料、怎麼供給 AI。一組資料連線的 AI 系統，是現實的一個小模型。你控制那個現實裡有什麼、從哪個角度看。那會大幅改變能力，也改變成本和 ROI。

[6:00](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=360s) 盲點有四種。第一種最單純：模型很久以前訓練完，今天問它，答案是壞的。他放的天氣例子是他自己編的。至少那個例子抓到了，還留了一張註記。他知道有些模型不會，只是把同一份今天的天氣重複給你。Agent 根據過時、不準、或不存在的資料做決定。他不一定要叫這是幻覺，因為還有別的新說法。

[7:26](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=446s) 第二種現在到處都是：範圍錯了，或範圍太大。Chevy 經銷商的 agent 被問什麼是好的中價位車，試著賣你一台 Tesla。同一類的反彈是：有人部署了一個其實只是包裝的 chatbot，你叫它做什麼它就做，燒掉的是他們的 token，不是你的。這是現在到處都有的安全問題。

[8:10](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=490s) 第三種他覺得最被低估：缺了關係。內部 agent 該讓工作更好，卻不懂兩個部門、兩種產品之間的關係。少了那個 context，答案就不會準。他的例子是：Acme 是雲端產品的首要潛在客戶，一年賣他們一百萬 ARR，而他們已經在 on-prem 產品上一年燒 1200 萬，這樣做是在吃掉自己。造成這件事的是資料盲點。

[8:56](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=536s) 第四種是 unknown 不等於不存在。沒有資料，和不知道，差很多。教科書問題是：現在有沒有支援問題。Agent 走它拿資料的那條路，把 skill 裡定義的每件事都打過，可以自信且看起來準確地回答沒有。因為盲點，這個答案完全不對。它怎麼知道自己沒有自己所沒有的存取？人很會做這件事。我們多疑，會問：沒有是真的沒有，還是一種未知、還得再查。機器在這裡需要追上。

[10:02](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=602s) 今天把資料交給 agent 有三種，他講得很快。RAG 最適合大量、靜態或移動很慢的語料，擅長把範圍縮小。他比成開卷考試。他不覺得它是一套能用的框架，拿來做最新的即時資料，或做完之後還要採取行動的重操作。若它做得到，就不必發明 MCP。MCP 是一組工具，接資料庫、接 API，擅長拿到新鮮、範圍寬的資料，幾乎任何任務都行。也因此像西部：接、接、接，決定以後再說。他最喜歡的故事是把 agent 接到世界上每一個 MCP，它做壞決定，因為同一份資料有很多種表示。最常見的反應是把 agent 的範圍縮得很窄，每一個都做成專家，再在外面做 multi-agent。同樣的問題被推回 orchestration，那一層很快變得非常複雜。Skills 他提，是因為其中一步可以是去拿資料。但 skill 要定義的是可重複的任務和步驟，不是為了直接存取資料而設計。所以直接碰到資料的，是 MCP。

## Medallion 是為另一個世界建的

[12:48](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=768s) 左邊是他當 data engineer、設計資料系統時看到的世界。一個問題對一個解，利害關係人清楚，問題清楚，資料集為那個問題設計。Medallion：bronze 是又大又亂的原始資料，silver 清過、濾過，gold 非常面向業務，是可以直接給利害關係人看的彙總。那個世界他們做了四十年，也許更久，而且合理。右邊是不小心掉進去的世界：任何問題、任何時間、任何利害關係人、任何領域，都得應付。他請人同情 data engineer，也請人對他們好一點，並請他們為了新需求改一點想法。他看到多數過勞的 data engineer 正拚命繼續為 agentic AI 建那套東西，那會把他們壓死。

[14:28](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=868s) MCP 很好，但只回答連線。它不做傳統 data ETL 裡那些好事。從 bronze 走到 gold，你會放進業務意義，把新鮮度保證到某個節奏，保證正確，並做驗證。下一個還沒有人問的問題是：預算撐不撐得住。Rob 講指標和成本時，他的印象是很難把這些成本和業務價值換成錢。資料這邊很容易，做了幾十年，預算和目標都管得很緊，預測和估計的工具到處都是。Agent 對 Iceberg、data warehouse、data lake 做大範圍掃描，成本量得到，而且很大。若每個 prompt 都這樣做，才剛開始被學到。

[16:01](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=961s) 他留一個但書：這四件事當然可以做進 MCP。沒有人做。若你想為自己的業務目標全部客製，去做。他還沒看到。請有人做給他看，證明他錯。

[16:27](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=987s) 通常這時候有人舉手：所有 AI 問題的答案是更多 AI。為什麼不能有更聰明的 agent，把 data engineering 搬進 agent 的世界？他說今天做不到，不是永遠。大約一年半前他還說別信任 LLM 寫 SQL。現在它們好得嚇人，主要模型你可以整天信任。也許以後 agent 能處理仲裁、完整性、來源，並對資料來源做聰明的決定。今天不行。他給一個很做作的例子：三個版本的世界。物理決定你一定會有它們，因為資料變老時會慢慢穿過很多系統，每個系統的答案不同。投影片以前有他實際跑出來的例子。常常不是選一個。你可以追 MCP 呼叫。很多時候它不會三個都查，它決定哪一個是對的，然後給答案，並且百分之百相信。衝突是生活的事實。可以放更聰明的 agent 去處理，他要提的是另一條。

[18:24](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1104s) LLM 是很糟的 data engineer。只要資料基礎設施有一點規模，那個五步驟幾乎每個 prompt 都得做，而它每一項都不擅長。大家一談資料，就從橘色那格開始：context 太大、資料太多。那其實是最後面的小事。它會選完全錯誤的 schema，推論出不存在的關係，用錯誤的系統仲裁衝突、排錯順位，跳過你在 bronze 和 silver 之間隱含的隱私政策，然後用最不該用的方式碰資料系統。`SELECT * WHERE name = Tom` 的做法是 `SELECT *`，全部放進 context，再在裡面濾。大家都看過。所以談整個 agentic 系統的 ROI，這是主要的一項。它省的是人的互動、業務流程和維運上燒掉的小時。它在資料上殺你。

## 為 context 設計，不要為一個問題設計

[20:15](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1215s) 怎麼修，是該拿給 data engineer 看的那張。停止一對一的問題對應，停止資料從 bronze、silver 優雅地老化到 gold，停止資料集在 ETL 末端變成面向業務、範圍很窄的東西。開始想 context。他不是指 context window。意思是一層一致的資料，好用的詞都被佔了，fabric 是 Microsoft 的，所以他暫時借用 context。要做更大的資料集，把選項留給 agent。設計資料、資料集和介面時，不要把路封死，要能回答多個問題、走向不同方向。直播有人問這是不是 AI-centric data warehouse。他說絕對是，而且下一張會說它還是很多別的東西。要的是原則，不是一種技術。

[22:07](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1327s) 有人問 graph 放在哪。他把 knowledge graph 放在 RAG 那一類。Graph 很強，是做底層的好方法，但不是所有資料都適合，而你現在用 agentic AI 的主要情況多半不適合。查航班訂單這種資料，knowledge graph 對不上。對得上、而且四十年來一直對得上的是 SQL。它不死，是因為很擅長表達我們要解的問題。Knowledge graph 適合把大量靜態或慢速語料縮小。高度互動的東西很難管。

[23:34](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1414s) 另一個人說，問題是 context 不夠，一百萬列放不進去。人拿到一百萬列也不會一列一列讀，會看模式，所以模型也不需要把每一列放進 context。他百分之百同意，那才是該有的做法。缺的一步是：它得知道資料的形狀、意義、意圖，以及它在用的系統能做什麼，才能把過濾推到最有效率的地方。人懂這個。你不會把過去五十年每一場足球比賽的賠率貼進 Excel 逐行看。他看過 LLM 做類似的決定，只因為它不知道有別的做法。所以他說的是今天；明天再看。這接上他的一句：describe，不要只是 transform。他覺得完全缺的是語意模型，一種把 semantic model 統一交給 AI 的方式。RAG、MCP、skills 之外還有這個洞。OpenMetadata 是在試的好專案，在 GitHub 上。

[25:42](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1542s) 舊做法是到處做一個專門的東西。新做法是退一步，為 context 建，不為一個業務問題建。他請人對 data engineer 溫柔，是因為他們眼前的答案仍是多做舊的那種。把事情變藍的答案，不是再多建橘色的。

[26:18](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1578s) 工具已經有幾十年。Federation 預設就把選項留著。一個查詢可以對上多個資料集、多個系統，給出一個邏輯服務。他放了 Iceberg、Kafka 和一個 CRM，但想像下面是 API 和所有來源。你延後 materialization，延後抓取、彙總和定位，把事情在架構圖上盡量往左推。Federation 接著就是 view。不是事先做好、也不必一直維護，是當下就能用，選項還在。Agent 因此面對的是更寬的 context，不是被定義得很死的東西。投影片上其他格子他留給之後的問題。

[27:36](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1656s) 他討厭那張具體例子的投影片，但眯著眼還是一個例子。最好懂的是他們叫 temporal consistency 的東西，也就是時間。Apache Kafka 管的是從一毫秒前，回到三天、四天、七天，然後就截止。傳統上會有一個 job 把資料搬出 Kafka，放進長期儲存、warehouse 或 lake，例如 Apache Iceberg。這迫使 LLM 自己決定：兩個系統都得抓，還得自己縫。中間放一層 context，縫合由 data engineer 做，交出一個從一毫秒前一直回到五年的邏輯全貌。時間只是一個維度。要帶走的原則是：跨多個系統做 federation，建成可以消費的邏輯 view。

[29:16](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1756s) 產品那張他先承認：Streambased 做的就是把即時系統和 lake 縫在一起，給你一層統一的治理 context，再給 agent 用。請拍照，拿去給資料團隊。那是今天的作業。

[29:41](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1781s) ROI 是左邊邏輯上做出一組層，agent 可以無限消費。完整歷史、完全新鮮的資料、能用來推論關係和意圖的 semantic model、一致的定義、治理和政策。這一層是為了讓 agent 攝取而建的。更好的決定之外，他更想講更準的資料，而最重要的是更大的範圍：可以放心讓 agent 打多個系統，回答遠超出它當初被設計來回答的問題。自動化也更好，人的審查可以少，因為一致性做在底層，不是加在上面。他現在最討厭的解法是用 multi-agent：抓、抓、抓，再調和。那是最貴、最花時間的做法。底層多想一點，大部分成本和時間可以避開。他比成販賣機：把每個按鈕都砸一遍，直到對的東西掉出來。夠快的話你不會注意到，但那不是最好的 ROI。成本則很單純，記錄得很清楚。去問 data engineer，他們有很多成本指標。這能阻止沒必要的資料操作，因為工作被推到資料層，context window 會縮小，回應也更快。

[32:09](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1929s) 最後一張他說是行銷部門的。ROI 更低。Agent 不笨，只是看不見。若我們在建 agentic 系統時不得不把焦點放在資料上，就要讓資料更可得、更看得見，把意義講明白，只給 agent 它需要的，並讓它能把需要的東西推回資料層，而不是把一切都抓上來。

## 問答：原則先於產品，品質的錢很難算

[32:55](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=1975s) 有人問他是不是在說，串流資料送到 agent，再由 context 過濾，產品是不是也往那裡走。若你想用 Streambased 的 MCP server，他說那是個好主意，別的產品也有。他要推的是原則。Streambased 特別放在即時 context。你若不需要即時 context，就不需要 Streambased。Federation 和邏輯 view 仍然適用。

[33:41](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=2021s) 下一題說最難的兩件事是過濾和剔除，才不會把同樣的東西帶進下一次互動。即時過濾的工具早就有，資料系統也早就夠快。他在 Big Data London 的講法是 AI 為什麼在殺死 ETL，房間裡全是 data engineer，反應可想而知。這份簡報少了一張：它沒有把 silver 和 gold 完全殺死。那些資料集必須真的有用，才找得到位置。舊的起點是為一個特定問題而建。要把這個反過來：為一大片問題建，試著建一致的 context。有時仍會為了效能或成本，做一個更特定的東西。改的是想法。

[35:14](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=2114s) 受監管的環境裡，合規和稽核很重要。現在是把每個資料平台收成一個 view。有些資料點的權限不同，例如文件 maybe 只有 C-level 以上看得到。這個 view 怎麼處理合規。他說這是今天 data engineering 最大的挑戰，而 catalog engineering 會是組織最重要的東西。幸好最近有一波很大的推力，走向開放的 table format 和標準。Federation 那一層上面坐著一個總的 catalog，治理和政策加在那裡。他來自 Iceberg。Databricks 和 Snowflake 在推 Apache Polaris。這些專案動得快、維護得好，試著把能加的治理和政策吞進愈多資料層。像 Databricks 這種大型資料提供者，解決這個問題符合自己的利益，他很高興他們在做。Federation 的安全他補一句：他看過的幾乎每一種做法，包括 Streambased，都走底層資料系統公開廣告的那條路，不另外挖一條特殊通道。因此你繼承那條路上的治理政策。不完美，但經由 federation，你從底層系統繼承到相當多的安全。

[37:34](https://www.youtube.com/watch?v=LBo4eMkQW8c&t=2254s) 最後回到 ROI：怎麼衡量多加一個資料來源的邊際價值，確認多出來的能見度真的讓結果更好，而不是複雜度和噪音。他以為會被問資料存取的成本。壞的存取很好算，例如一次 Snowflake 查詢花了大約 1,200 美元。多出來的範圍和可得性，他說自己不知道，也不假裝知道。那非常主觀。答案品質因為看得更寬而變好，這個數字要怎麼標。若有人有辦法，他想知道。好幾個客戶都卡在這裡。他說自己在直播上，不該講，但老實說：那種情況他們會退開，去看在 Snowflake 上幫你省了多少錢，也就是既有工作負載的成本，而不是 ROI 裡那個機會的好處。他很想把這個問題解決掉。
