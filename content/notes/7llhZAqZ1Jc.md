# Bill Maxwell - Building with MCP: How Protocol Primitives Shape Dev Experience | DevCon Fall 2025

Bill Maxwell 在 DevCon Fall 2025。片長 22 分 48 秒，英文自動字幕。他說自己在 Obot（開場字幕聽成 Hobot），做開源的 MCP 管理平台；結尾又說人在 Obot 攤位。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=7llhZAqZ1Jc)

## 一句話

Coding agent 已經能改 code，但軟體交付還連著 repo、issue、ticket、pull request、pipeline。MCP 是讓這件事可攜、不必每次換 client 就重做的接法。他認為多數人只看到 tool call；真正決定開發體驗的，是 server 上的 tools、prompts、resources，和 client 上的 sampling、elicitations、roots 有沒有一起被用到。

## 先能接到系統，而且換 agent 不用重做

[0:09](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=9s) 他預告大約 20 到 25 分鐘，談 agent 和 MCP 為什麼有用，以及很多人還不知道、卻會決定體驗好不好的 primitives。

[0:38](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=38s) Coding agent 是目前最成功的 agent 模式，主要在 code 上工作，而 code 只是 SDLC 的一段。要看 end-to-end，就得接到別的系統。你可以叫 agent 拿 API key 自己寫一個函式，也可以用很早就有的 tool calling，但那不可重複：每換一個 coding agent 或 client，工具和系統互動都要重做。

[2:10](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=130s) Model Context Protocol 就是把 LLM 和這些系統接起來。他把它想成 AI 應用接上 tools、資料結構和其他系統的 USB-C。

[2:49](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=169s) 架構上有 MCP host，也就是 AI 應用：VS Code、Claude（字幕說 your cloud）、或一般 chat client。Host 裡再定義連到 MCP server 的 client。Server 很完整、client 卻不支援那些能力，體驗就會卡在中間。Server 側主要是 tools、prompts、resources。Client 側是 sampling、elicitations、roots。Client 支援這些，UX 和 developer experience 才會起來。

[4:28](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=268s) 一個只對到 API 的 tool 不一定有用。這些 primitive 讓你能回饋、確認、做出安全邊界。Model 不會每次做同一件事，所以要給它足夠的 context 才選得對。

## Tools、prompts、resources

[5:12](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=312s) Tools 是多數人以為的 MCP，也是動作的表面、價值最集中的一塊。評估時要看名字清楚、描述準、輸入清楚。`get github issue` 收一個 issue ID，像在跟人說話，model 比較懂。若只叫 `get issue`，旁邊又有 Bitbucket 或 GitLab 的 MCP server，隨口說 get this issue，model 可能分不出是哪一套。

[7:11](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=431s) Tool 要對準意圖。想建立 issue，不該先自己把後端要的每塊都查齊再串呼叫。好的設計是 `add note to contact`，參數就是 contact name 和 note，貼近使用者會說的話。壞的設計是把 CRM API 原樣拆成 get contact ID、get record、get note。Local model 甚至 frontier model 都不太會猜這條鏈，使用者只好自己一步步 prompt。

[9:00](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=540s) Prompts 是 server 上預先做好的模板，給使用者線索和動作，讓 agent 有機會做成。在 Claude 這類 client 裡，它們像 slash command 的表單。例如 create issue 要 title 和 repository name，client 會幫你填。Tool 名字夠好，自然語言就對得上。

[9:57](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=597s) Resources 可以是任何一段資料，而且不直接塞進 LLM，由使用者決定要不要傳。Tool 也可以產生 resource：加了一個 customer，就把 customer record 當 resource 拿回來。Client 通常用類似檔案或目錄的結構呈現，讓你選了再給 model。他前一天的工作坊做過一個 chess agent：用 MCP UI 回傳 HTML，在 chat client 裡渲染，可以拖放棋子（字幕說 test pieces），狀態由 MCP server 在背景管。

## Sampling、elicitations、roots

[11:44](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=704s) Sampling 名字很怪。它讓 tool 請 client 再跑一次 AI 查詢。例如拿一批紀錄並要一份摘要：請求送回 client，理想情況是人批准、可以選 model、也可以限制 tokens。控制權回到使用者，server 仍用得到 AI。

[12:45](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=765s) Elicitations 是確認，或跟使用者補資料。Tool 可以問你要不要做這個動作；缺一欄時不必失敗退回 LLM，直接請人補上再確認。他舉刪資料庫：沒有 elicitation，它說好，然後刪掉它以為你指的那一個。有 elicitation，它可以說要刪的是 production database，你再確認或拒絕。他認為這對 MCP server 和 tool 的設計很關鍵。

[14:09](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=849s) Roots 是 client 起來時告訴 server：你能碰這些目錄。Server 列檔案時要落在那個範圍裡。這不是安全強制邊界，只是給 server 的建議，幫 agent 知道自己在哪工作。好的 client 會自動發現、請你提供路徑，也可以問要不要給 `/` 的存取。你說不要就可以。

## 建一張 GitHub issue 時這些怎麼接上

[15:14](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=914s) 使用者打 slash command，拉出 prompt 清單，其中一條是：在 repo 裡用這段描述建立 issue。送進 chat 後，model 看到有建立 issue 的 tool 就呼叫它。Tool 寫得好，但沒有 title 欄，於是依使用者的描述送出 sampling，請 client 產生標題。使用者可以看見或確認。接著 tool 再問：要用這個產生出來的標題、在這個 repo 建立這張 bug 嗎？描述就照原樣放進去。使用者說好，tool 建立 issue，model 回答 issue 21234 已建立；路徑字幕聽成 `/reo`。

[16:52](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1012s) 這比一次 tool call 然後指望它做對，多出來的是確認和補齊。

## 挑選、傳輸，以及別忘了舊的安全習慣

[17:05](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1025s) 要讓 MCP 安全、讓使用者信任：tool 要定義清楚，名字大概是最重要的。他說無聊的話可以試試隨機 tool 名配上很好的描述，model 還是會搞混。不要讓人盯著空白畫面，所以要有 prompts。有 side effect 的動作用 elicitation，讓人確認或拒絕。對話已經很長時，不要直接失敗、逼使用者重填；缺最後一點資料就問。若在動 source code，用 roots 把範圍留在目前的 git repository 目錄裡。

[18:31](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1111s) 傳輸有兩種。Standard IO 通常跑在自己的筆電上，要連遠端系統就帶 API key。Streamable HTTP 可以集中託管，用 OAuth（字幕說 OOTH）讓人登入，控制權集中。

[19:10](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1150s) Client 很多。要確認它真的支援 elicitation，server 要確認時你進得了迴圈。Sampling 很好，但不是每個 client 都有；有的話要能對那些請求做 rate limit。

[20:06](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1206s) MCP server 會帶來新的攻擊面，但舊的安全習慣不能丟，把它當任何一份要跑的開源軟體做盡職調查。優先用可信第三方做的。遠端託管若適合就用：GitHub 有遠端的，字幕裡另一家聽成 Lassie，沒有再被說清楚。要檢查所有 tool 的名字、參數和描述，看有沒有往 code 裡注入惡意內容。企業要擴到整個組織，可以考慮 MCP gateway，他說像 Obot（字幕 OOTTO）做稽核紀錄，也有開源替代，他舉了 MCP jungle。Tool 名字和參數要持續掃描，因為 code 會變。認證要集中，還要能過濾，避免 tool call 把資料送到不該去的地方。

[21:57](https://www.youtube.com/watch?v=7llhZAqZ1Jc&t=1317s) 問答時主持說自己做過 MCP server，沒先聽這場，覺得很羞愧。
