# The Graph Layer Behind NASA’s Breakthroughs

這集標題寫著 NASA，但英文自動字幕裡沒有出現 NASA。內容是 Simon Maple 在斯德哥爾摩一場活動上訪問 Neo4j 的 Michael Hunger，談 graph database、RAG，以及給開發者用的 MCP。片長約 36 分鐘。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=5pFdx9ZLIMI)

## 一句話

已經結構良好的資料，不該先變成文字、切塊、再塞進看不懂的向量。Graph 在寫入時就把關係變成一等公民，查詢只是沿著指標走，關係本身帶著業務意圖。向量 RAG 拿回碎片卻說不清為什麼。MCP 則讓 IDE 裡的助理跨過一個個孤立的基礎設施，但資料和指令還在同一層，權限不能交給模型決定。

## 關係在寫入時就存在，而且帶著意圖

[1:03](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=63s) Simon 說他們認識大約十五年。Michael 原本做 developer advocacy，現在轉到 product innovation，看生成式 AI 和雲怎麼進 graph database。這和他以前在開發者關係、Neo4j labs 做的事一樣，只是現在正式在產品裡推。Simon 在走廊和 keynote 都碰到他。Michael 在 Neo4j 也大約十五年。

[2:10](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=130s) 關聯式資料庫是列、欄、表。Graph 是節點和關係，就是白板上的圓和箭頭。實體上可以放任意資訊，關係上也可以，這點他覺得重要。你把人、事件、流程、產品接起來，傳統用途包括供應鏈、軟體分析、資安。關聯式資料庫在查詢時才計算連接；graph 在插入時就把關係物質化成一等公民，查詢時跟著指標走，複雜查詢因此快很多。Neo4j 開源很久，根源在瑞典，字幕聽成 Mamm，也就是他們說的瑞典出身。他加入時大約十個人：幾個瑞典人、一個英國人、一個美國人，還有他。他們拿這編成酒吧裡踢翻桌子、於是 graph database 誕生的笑話。Simon 說當時觀眾沒笑。

[3:51](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=231s) 在關聯式資料庫裡硬塞關係很痛。物件和關聯式之間的 impedance mismatch 甚至有專有名詞：豐富的領域模型塞進表，總是痛苦。Graph 比較自然，也不會弄丟業務的人。給業務看 250 張表，對方問你想說什麼；給他們看畫面上東西怎麼接在一起，他們會說我懂了，順手指出你漏了一條關係。Simon 說這帶著意圖：你在意兩個節點之間的關係，就是業務覺得重要的事。關係上可以放屬性，給意圖打分、加權重、放時間範圍，只在某段時間存在的關係也能記下來，用於推薦或偵測。重要的不只是實體屬性，還有它們怎麼連、何時連、連多強。

[5:18](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=318s) 再往下是 graph 演算法。字幕有一處聽成 Magenta，接著講的是 PageRank、clustering、節點有多近、一個節點在網路裡有多重要。詐騙者若中心性很高，表示已經有很多影響力；中心性很低，表示詐騙生意還沒開始，可以在事發前抓住。

## 向量碎片是黑盒，graph 能指出為什麼抽出來

[6:11](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=371s) Simon 說 Michael 這天有兩段：graph 怎麼幫 RAG 把相鄰的 context 拉進來，以及下午的 MCP。先談 RAG。他問大家熟悉的、非 graph 的基本 RAG 哪裡不夠。Michael 上週在舊金山的 AI engineering 會議上試了他們用向量搜尋做的會議助理。輸入自己的名字，找不到他的演講。請它列出 Microsoft 關於 MCP 的演講，他要的那場沒出現，倒是出現另外兩場。只對內容碎片做向量搜尋有幾個失敗：它是黑盒，不知道回應怎麼來的；它不看 context。MCP 是一個主題，連到其他演講。第一次向量搜尋沒中，仍可以沿著這個主題把其他演講拉進來。只限文字碎片，會丟掉資料裡已有的大量資訊。多數人除了文件，還有結構化、半結構化和其他來源。

[8:58](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=538s) Keynote 裡的例子是一張票：同一個主題還有哪些票、這家公司還開過哪些。一次請求帶出的不是字串，而是人、公司、關係。從客戶提問不能只看問題，還要看他們部署了什麼、開了什麼，再接回支援案件：以前問過沒有、是不是後續錯誤、試過哪些修法。這幾乎是 customer 360，整段故事展開，支援人員和 LLM 才能做出更個人、更相關的回答。向量索引吐回的碎片說不清為什麼。Graph 可以指著說：我們拿了這段，因為這條關係存在，而且關係上的分數高過某個門檻。有人想知道為什麼，就可以給他們看從哪來、為何被取出。有些產業要這份可解釋性做稽核或合規。答案不好時，也能看出缺了什麼，也許是匯入時少了一條本來該接上的關係。

[10:57](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=657s) 一般 RAG 看起來像一堆浮點數，他說不妨當成二進位檔。Graph 那邊若助理支援，可以點下去，看到拉進來的資訊和它們怎麼相關。Eval 上也有人可以看一次請求、知道該有的 context 不在，再改。主動或間接的回饋會說這些答案本該出來。鑽下去會發現一整塊資訊斷開了，或不在索引裡；若那條關係在，就能沿著它取出。真正的 eval pipeline 可以拿低分的結果比結構裡缺什麼。終端使用者也能鑽進答案背後，再沿著 context 追問。

[12:53](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=773s) Simon 說用 Pinecone 時就是把東西丟進去，希望它有用。Michael 說是混著來的。他看過很多組織把文件資料庫、關聯式或 graph 裡已經漂亮的結構，轉成文字、切塊、塞進向量索引。他說這很荒唐：為什麼把好結構變成愚蠢的文字，再變成完全不透明的 embedding。結構化的部分留著：客戶、專案、員工、流程。非結構化的來自 PDF、研究報告、客戶票券。兩種一起用。非結構化那邊，LLM 很會抽取。以前是 NLP、Stanford、NLTK。現在給 schema、指示和文字，它就能抽出實體、關係和屬性。準確度不完美，也許 80%，有時 90%，仍比人手工走一遍好，也可以多跑幾輪。Simon 擔心它加上不相干的 context。有 schema 就能驗證、丟掉不要的。還有 entity resolution，以及在上面跑 graph 演算法：五個其實是同一個的，就合併。

## 開發者的 MCP：schema、雲、以及別再當複製貼上的人

[15:00](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=900s) 他選 MCP 是從開發工具看，不是從應用看。Anthropic 在 11 月最後一週放出文章和規格，他 12 月第一或第二週就做了 Neo4j 的第一個 MCP server。一開始只是資料，然後想到資料有 metadata、有 schema。開發者可以用 schema 生成 GraphQL 型別、Java class，或 Python 的 Pydantic class。再來是用 MCP 包 API，包括基礎設施 API。Cloudflare 等人已經能用 MCP 拉起 worker。他又做了一個包住 Neo4j cloud API 的 server：開資料庫、放大縮小。人在 Cursor 裡說給我我的實例、把這個放大、我要一個臨時測試實例，聊天後面就去做。GitHub 的 server 則可以在沒有文件時，去 repo 抓 llms.txt。

[16:48](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1008s) 雲廠商的 CLI 有一堆指令要記，那不是有價值的知識。他也不想在很糟的 AWS 介面上把服務點出來。這些決定本就在專案的環境設定裡：要部署什麼、為什麼、部署到哪、測試和 staging、負載測試要幾台 runner。接到包住基礎設施 API 的 MCP server，決定會比單獨去看 API 或 CLI、再用腦子重現全部上下文更好。手工做更容易漏。在 Claude Code 裡接上 server，就可以說幫我開一個測試資料庫、寫整合測試。他最近叫它在生成 code 的同時，把服務裡的查詢拿到真的測試資料庫跑一遍，驗證查詢是對的。這是給生成 code 的 LLM 的自我修正，不只 linter 和編譯器，資料庫和雲 API 也能這樣。這些主要是開發時，也可能在部署和 DevOps。給 agent 的資料 MCP 是另一題。

[19:04](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1144s) 對開發者，這像一個工具箱。以前基礎設施各自成孤島，連 AWS 裡也是一個個自己的宇宙。助理裡它們變成工具，助理幾乎在上面做一層聯合：帶著 code、專案、指示和對話，可以跨系統。例如從 CI/CD 的結果生出新的整合測試，或用雲上資料庫的資訊去某個環境拉一個容器。沒有這層，LLM 只告訴你步驟，你變成那個把東西貼進 Cloud Run 或 EC2、再把錯誤貼回去的初級開發者。對話裡先一起做出來，再叫 Claude Code 把剛剛做的變成腳本或 CI/CD pipeline。

## 資料和指令在同一層，所以先把範圍鎖死

[21:13](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1273s) Simon 說上一份工作在 Snyk，做了六年資安，現在是因為喜歡才繼續。他們談到官方 GitHub MCP server 上的注入，大約前一兩週。使用者同時有私有和公開 repo，請它看公開 repo 的 issue、能修多少修多少，這是常見用法。惡意使用者在公開 repo 加一則 issue，要它盡量抓私有資訊，寫得多白都可以。Server 以使用者的身分也能進其他私有 repo，於是在「修復」時對公開 repo 開出 pull request，把私有資訊帶出去。例子是改 README。使用者兩邊都有權限，並把授權委託給 MCP server。Server 本身只是今天就有的 API 存取。問題是 LLM 分不出要處理的資料和指令。資料面和控制面混在一起。這是 AI 系統的一般問題，不限於 MCP 或 coding assistant。他希望模型廠商開始標記：來自使用者、已驗證的才是指令，其餘是待處理資料。理想是模型只把前者當指令。

[24:07](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1447s) 今天已有人提案，用一層層的 LLM。最下層看得到資料、也接到指示，但回給上層的不是可能再被當成指令的純文字，而是 token 或檔名這種指標。內容不進 LLM，走側路，只在 UI 上顯示，像一般介面。或者下層只做資料處理，不准走出範圍，例如只能碰公開專案。根問題是資料和指令在同一層，而計算機架構早就把這兩件事分開。另一個問題是範圍和誰能碰什麼，幾乎要 sandbox。就算改用 API 呼叫也會一樣，所以更像 LLM 的問題。MCP 只是把它變容易，因為服務變成可以組合的樂高。第一條規則仍是只用可信的 MCP server。

[26:02](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1562s) Simon 拿開源元件比：要做盡職調查，認得出來處。這些東西還能執行動作。這又是軟體供應鏈。Michael 說這個領域還在長大。關鍵系統他會避開最前沿的東西，寧願人把 A 複製到 B，那比自動化安全。探索階段、無害的專案、開源專案才適合。他自己的 GitHub 整合只給公開 repo，從不給私有的，以免洩漏。Token 不好切時，他就另開一個只有公開 repo 權限的 GitHub 使用者。Simon 要的是把授權放在有確定性、帶著認證授權的系統裡，不要把資料交給 LLM 去決定什麼該送出去。Michael 補的是把處理分開：處理 issue 不必再經過 LLM，而是用已經生成的內容去呼叫建立 issue 的 API，內容不被模型再看一遍，也就不能變成指令。有人問 MCP 裡的 S 在哪，他說這像以前問 IoT 裡的 S，S 代表 security。找漏洞和注入有助於把東西做牢，但也是軍備競賽。新技術的毛邊要修。

## 自己做一個 server，比黑盒信任安全

[29:02](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1742s) 他實際在用的：Anthropic 的 extended thinking MCP server 有用。Anthropic 還有一個記憶體 MCP server，表示法選了 knowledge graph。他們做了 Neo4j 版本，把對話裡的資訊累積成結構，甚至可以在團隊間共享。想像團隊在寫專案規格，對話被抽出來放進共同的知識庫。他還用現成的 Cloudflare、GitHub、一點 Slack、Notion。上週知道一個叫 Pipe 的整合器，大約 2,700 個 MCP server。別的 registry 很多。一個字幕聽成 MRA AI 的 JavaScript agent 工具甚至有 registry 的 registry。Pipe 讓做應用的人快速接上他們驗證、部分自己代管的 server，像是整理過的 Notion、Slack、Salesforce。做整合時可能很好用。

[30:58](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1858s) 他真正建議的是自己做。拿你正在做的 API 或基礎設施，加一批 tools、prompts、resources，才知道背後發生什麼。全是黑盒時，人不是完全不信，就是盲目相信，兩邊都不好。先學會再做有意識的決定，決定會好得多。今天用 FastMCP 這類東西，一兩個小時就做得出來，也可以 vibe code。大約 200 行，就夠讓人懂 MCP。Simon 補 Snyk 有 MCP server，問 code 裡有沒有安全問題，它就跑 Snyk 的檢查。Context7 則按你在用的版本文檔或 API 給建議，而不是把所有版本混在一起。Michael 的朋友推薦 ref：一個提供給 LLM 優化過的文件的 MCP server，像是給各個框架的 llms.txt，支援幾百個框架。

[33:05](https://www.youtube.com/watch?v=5pFdx9ZLIMI&t=1985s) 從安全看，代理式的 MCP server 會有趣：一個 server 代理另一個，過濾通過的內容，在進去第三方服務之前先驗證。他覺得公司會做出類似閘道的東西：組織允許哪些 MCP server、加上授權和過濾、什麼可以送到外面的工具。Simon 說這很像字幕裡的 Lira 在進出 LLM 的內容上加守衛，只是對象換成 MCP。Michael 覺得氣氛像 2016 年 GraphQL 出來：有規格、有工作小組、人人跳進來、開源、能量很高。他想起當時在 Facebook 和 GraphQL 工作小組。Anthropic 提出來，然後靠貢獻者長出來，大廠多半是被開發者的採用推上船。Google、Microsoft、OpenAI 被開發者逼著加入，這種 FOMO 通常是反過來的。Simon 五分鐘後要上台，Michael 說他會坐第一排。想聊 graph 和 RAG 的人可以再找他。
