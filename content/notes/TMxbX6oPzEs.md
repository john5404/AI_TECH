# The Model Context Protocol: A Universal Interface for AI Native Development with Doug Finke

Simon 主持這集，歡迎 Doug Finke（字幕唸成 Doug Frink）。Doug 是 16 次 Microsoft MVP，寫過 PowerShell for Developers，紐約的 meetup 現在改成一個月數場的直播，最近都在 AI。片長約 32 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=TMxbX6oPzEs)

## 一句話

MCP 是 Anthropic 的開放協定，讓模型接到工具和資料。Doug 的重點不是再講一個框架，而是同一份 JSON 契約可以進 VS Code、Claude Desktop、Cursor、Windsurf。模型不擅長乘法，就把乘法做成工具；人仍要按繼續，因為伺服器或對話內容都可能借工具作惡。認證和細粒度權限當時還沒到位，但他說那就是 code，不必等標準才在本地學。

## 一個函式、一次幻覺、工具才算對

[0:12](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=12s) Doug 說自己在業界待了很久，Microsoft MVP 十六年，生成式 AI 是近幾年才讓他著迷，下一章就是 Model Context Protocol。Simon 把 vibe coding 放在原型和可丟棄的 app，並說 Doug 會走得更深。Doug 先投影片、再 demo、再回投影片。他還預告下一週的 meetup 要做即興 prompt：現場出題，技術或行銷都接。

[2:53](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=173s) Demo 在 Visual Studio Code，裡面是 GitHub Copilot。它能 host MCP，和 Claude Desktop、Windsurf、Cursor 類似。他給一份簡單的 JSON，先做 stdio，也提了 HTTP 和 npx。Python 檔是 `server.py`，用官方維護的 FastMCP，字幕說其他語言也有 SDK，包括 TypeScript 和 .NET。他定義 `multiply`，回傳 A 乘 B，另外還有一個 `read CSV`，當下可能來不及示範。函式就是平常的 Python，加上 decorator。

[5:06](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=306s) 按 start、再 restart，才看得到 host 的訊息。它啟動、做 tool discovery。工具列上這個 server 已經有 multiply 和 read CSV。他問一個帶小數的大數乘法。Copilot 看到名叫 multiply 的 MCP 工具，先不執行，並警告：MCP server 或惡意的對話內容可能借這些工具濫用 code。你得自己判斷工具可不可信、是不是第三方、是不是 Anthropic 或其他你認識的廠商。繼續鈕是安全裝置。可以只准這次、這個 session、這個 workspace，或總是允許。人還在控制裡。它呼叫工具之後，他在主控台把同一組數字乘出來，結果一致。

[7:48](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=468s) 他切到 ask mode，相信這個模式當時不會用 MCP。現場的 AI 給出 43654，右邊的數是 43655。Claude Sonnet 把計算結果幻覺了。這就是要把工具交給 agent 的原因：乘法它不擅長，就改叫工具。用了工具才算數。

[8:46](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=526s) CSV 那段他沒跑，但講了流程。Python 打開檔、讀進 CSV、做成 dictionary。模型看到 prompt 想讀 CSV，就把函式名稱、簽章、參數型別、回傳型別，加上他的 prompt，交給 Claude Sonnet。Sonnet 說要呼叫函式，VS Code 或其他 host 去叫，繼續鈕在這裡彈出，讀檔結果回到對話，模型才知道檔案裡有什麼。他說這整段至少可以再講兩小時。

## 一份契約，工具跟著人走

[10:04](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=604s) MCP 是開放協定，把 AI 模型接到工具和資料。不限於 CSV。手邊若已有連 SQL Server、Cosmos DB、SQLite、Postgres 的 code，認證授權可以留在自己的 code 裡，再經 MCP 變成模型能用的工具。傳輸是 JSON，走 stdio、HTTP 或 SSE。HTTP 和 SSE 他看成網路上的遠端伺服器。

[11:13](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=673s) 工具能力就是那份簽章，從 MCP server 交回 MCP host，模型像呼叫 API 一樣用它們。他說這裡沒有為每個工具再裝 plugin、也不必重新訓練。實際步驟是 FastMCP 的 decorator，加上大約五行的 `mcp.json`，按 start。協定由 Anthropic 標準化，Microsoft、OpenAI、Google 和其他人也在採用。

[12:05](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=725s) 多個 host、一份協定。IDE 有 Windsurf、VS Code、Cursor；CLI 字幕聽成 Ader 和 Klein；還有 edge devices。Host 說 JSON。學一次，到處重用。工具跟著團隊，不跟著某一套技術。他相信 JetBrains 當時已經有 MCP host，而 host 本身不難寫，還沒有的很快會有。這是跨心智，不只跨平台。味道有點像舊的 Java 口號 write once, run anywhere，後面再加一句 test forever。他說這不是同一件事。無關 bytecode、無關虛擬機、無關 code 在哪跑，而是工具怎麼說話，並把那場對話變成通用的。

## 從票券、SQL 到網頁，膠水變少

[13:22](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=802s) 用途他一條條點。Coding：經 Git、GitHub 的 MCP server 碰到整個 codebase、文件和開發工具，自動完成、PR review、重構會更好。資料：大公司讓你接 SQL Server，Microsoft 接到 Azure，Amazon 也在跟。企業流程有 Jira、Confluence。Zapier 有免費的 MCP，走 SSE：把型別改成 SSE、放上 URL 就接上。Google 試算表或 Gmail 仍要自己給憑證。AI 就能讀寫票券、摘要文件、觸發流程。看第三方在做什麼，是為了想自己每天的流程能接上哪段既有 code。

[14:55](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=895s) NLP 到 SQL 時，MCP 會先看即時 schema。他舉的問法是 2020 年賣出超過某個數量、播放約一個半小時的專輯有多少。它先查整個資料庫的 schema，也可以縮到一組表，再看 foreign key 和約束，把 SQL 組得比較準。Postgres 和 MySQL 都行。Host 也能分析即時業務資料，或 Elasticsearch 這類索引。網頁搜尋也經 MCP，他說自己有一支幾行 code 的影片。重點是今天的資訊，不是訓練截止日期裡的世界，類似 ChatGPT 的網頁搜尋。持久 context 則是經 MCP 碰檔案、專案、筆記或向量庫，讓 memory 跨 session。這也能做成比較好的 RAG。

[16:41](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1001s) 他想解鎖的是少一點膠水、多一點流動。一份介面，開發者和 AI 助理共用，幾分鐘內用 HTTP 或 stdio 把工具露出來，不必先扛起複雜度就走向 agent 流程。問 CSV 若答非所問，它會回去重讀、多看一點，用多個 turn 檢查自己有沒有回答問題。任何工具都可以這樣。權限由 host 仲介：你明確批准。稽核是選用的。有些廠商讓一部分自動打開，其餘選擇加入或退出。Anthropic、Microsoft、OpenAI、Google 在做標準。他說當天 MCP 剛放了一份文件，下一週有一場 MCP 開發者會議。浮現中的安全模式包括 prompt injection 的防禦和端點控制。

[18:31](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1111s) 它不是框架，是地基。從 VS Code、Claude、到沒有 code 的 Zapier。Azure 裡也有 MCP host，他相信 Fabric 是其中一個。從「跑這個工具」走到「擁有這個 loop」：你決定要不要繼續。建、修、部署可以不交接。可能得改寫一批 code，也得會 prompt engineering，並看懂 MCP 註解把哪些資料送進 context。他的收束是：MCP 是我們停止空談 agent、開始用它們建造的方式。他說這東西大約 2024 年 11 月放出，不到一年就催出一批應用：看懂整個 codebase 的 coding copilot、同時對付多個業務 app 的企業 bot、分析真實資料庫的助理、會瀏覽網頁或維持長期 memory 的 agent。字幕裡還有個大量使用 MCP 的名字聽成 Rue Ro。要解開這趟旅程，得學會怎麼建、怎麼 eval。

## 審查、REST、A2A，以及還沒來的認證

[21:18](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1278s) Frank 問：人工審查 MCP 無法規模化，忽略警告又危險，有沒有細粒度的 MCP ACL。Doug 說自己從 2022 年底就在講 AI。開發者的工作不會因為能從聊天視窗複製貼上就結束。Stack Overflow 和 Google 的時代也不能把找到的東西丟進編輯器、編譯、送上 production。要審查、要測。用得愈多，愈把機制內化，才愈快、也愈敢信任。ACL 他指到下一週的開發者會議：Microsoft 會講怎麼接到 Entra、做 SSO。他不認為這東西會在系統上失控亂衝。Anthropic 不會想要第一天打開就接管你的企業。

[22:49](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1369s) 追問是：怎麼確認能力描述和它真正要交付的一致、而且不是惡意的。Simon 拿 SCA 和惡意的第三方函式庫比，覺得 MCP 還沒有那種依賴圖。Doug 同意還沒有。企業當年也很怕把 npm 的開源帶進來：誰審查、壞了誰負責。現在同一處。AI 不是科幻，不做盡職調查就會出問題，而這對軟體工具並不新。

[23:54](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1434s) Frank 和 Michael 問，MCP 是不是更高一層的 REST，或遠端函式呼叫。他說類比有用，但類比不是它本身。你可以把自己的遠端呼叫或 REST API 用那份 JSON 定義成工具，host 負責跟 AI 互動，覺得需要時才叫你。美的地方是不必學一套新東西：把 Python 函式註解好，任何有 MCP host 的地方都能跑。函式、遠端函式、Azure Function、Lambda、一組 REST API 都可以。但若把 60 個 REST 端點全包進去，模型會跟你一樣困惑：選哪個、何時選、為什麼。函式名、參數名、一小段說明會變成 context，而 context 基本上就是被放大的 prompt。

[25:54](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1554s) MCP 和 A2A 不一樣。MCP 在 11 月放出，A2A 是前一個月才放出，字幕聽得很碎，他請大家給點時間。Agent to agent 用來編排不同地方的多個 agent，對象可以在網路線上，也可以是遠端 MCP server。MCP 則是在跑它的那個行程裡，不論是 IDE 還是某個雲廠商裡的生態。Google 在 agent to agent 上放了不錯的東西，值得看。Simon 覺得採用快得離譜。他自己玩過 OpenAI 的 custom GPT，對方本來要做商店，後來退了；看到 MCP 時他一度以為又是一個 custom GPT。宣告從每月變成每週，他覺得會走到每天。

[28:35](https://www.youtube.com/watch?v=TMxbX6oPzEs&t=1715s) 認證他再次指向 Entra ID，也就是 Microsoft 的 AD。Anthropic 等人下一週會在會上談，Anthropic 的 GitHub 空間裡有 repo 和 RFC，公開在做。他有信心他們解得了，因為他自己解不了。還沒好，不要因此不去本地試。Simon 把現階段放在「看看能做什麼」，同時承認離能依賴的 production 等級還缺什麼。Doug 用早期 GPT-3 作結：prompt 前面放 JSON、中間是問題、後面再放 JSON，就能得到很強的能力，OpenAI 後來把那種研究訓進模型。MCP 的認證今天就能做進自己的函式，因為你只是被 host 當成函式呼叫。標準來了再把這塊卸下去。他自己做過沒有 LangChain 的 agent loop：模型說要呼叫某個函式，他就在 code 裡叫，把結果送回，並知道何時停。MCP 把這件事做掉，而且做得更好。他討厭這麼說，但那就是有 LLM 可用的 code，只是讓工作容易一點。
