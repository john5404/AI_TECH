# Shaun Smith - Connecting Context - Exploring Future Transports - AI Native DevCon June 2026

Shaun Smith 在 Hugging Face 做 open source connectivity，以及 MCP 和 agents。Alan 介紹他上台。他也維護 skills repository、一個叫 upskill 的工具，和一套他覺得不錯的 harness：fast-agent。AI Native DevCon 2026 年 6 月，片長約 29 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=nfwNjmZSKMY)

## 一句話

Hugging Face 的公開 MCP server 上線超過一年，Smith 用 production 數字說明：初始化次數和 tool call 次數都很容易誤導，他看的是連上之後有沒有至少打一次 tool。Stateful 的握手太吵，每一千萬則 protocol 訊息裡，initialize 有 120 萬則，tool call 只有 6.2 萬則。Transports working group 的 release candidate 改成 stateless HTTP，伺服器不能再主動開口，tool list 可以快取，elicitation 改成下一輪把使用者的回答帶回去。

## 一個公開的 hub，兩種連法都還在

[0:16](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=16s) Hugging Face 是機器學習研究的中心，放 datasets、models，也讓人發表研究。他們的 MCP server 在公開產品裡上線一年多，給 agents 和 assistants 當多用途 hub：搜 model、看 dataset、做研究。可以在 URL 上指定這次要開哪一組 tools，也有 UI。比較少見的是匿名和登入都能連。它同時是 inference gateway，透過 MCP 找到別的 model，產生圖片、影片，做多模態的事。整疊 stack 是 open source。

[3:14](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=194s) MCP 設計成雙向。Client 連 server，接近 peer to peer，一起改你正在用的 context。Client 用 tools 和 prompts；server 也可以向 client 要東西，例如掛著的 model 或檔案系統，有點像 LSP server 跟 IDE 的關係。

[4:11](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=251s) 推出時有兩種 transport：本地的，通常跟應用同一個 process，碰得到檔案系統；遠端叫 SSE。當時完全沒有 authentication。SSE 很難部署，後來有了 Streamable HTTP（字幕寫成 stream of HTTP），同時加上 authentication。一開始要 MCP server 自己當 authorization server，太複雜，改成 OAuth resource server（字幕聽成 water resource server）。他們就是從這裡起步。大約 12 個月前上線時，還不確定要用 SSE 還是新的做法，最後直接做新的。

[5:22](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=322s) 圖上黃條是每天的 initialization，按週看；藍線是透過 adapter 進來的連線。那個 adapter 讓只有 stdio 的 client 去連遠端 server，很早的 client 大多只有 stdio。流量掉下去了。Claude Code 一開始也只有 stdio，那條線同樣下滑；他說當下看起來還在掉，可能是因為他抓資料的那一天。透過這條路的遠端連線已經很少。從本地遷到遠端服務，大致做完了。

## 連得上，不代表有在用

[6:32](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=392s) 很多 client 連上來時，初始化多不一定是好事，tool call 多也不一定。圖上 tool call 對 initialization 的那條線有一根大尖峰，是某家 inference provider 的效能測試。他歡迎人用他們的 server，但先跟他說一聲比較禮貌。

[7:17](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=437s) 有些 client 每次打開工具就連一次，initialization 像是常駐安裝。有些會快取，真的要打 tool 才初始化。也有 client 不穩，陷進一直初始化的迴圈。Tool call 重複很多次，可能只是 tool 的設計把下游 agent 搞糊塗。透過互動系統用，和透過 ChatGPT 用，行為也不一樣。

[8:38](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=518s) 他看的是 session conversion：client 連上之後，有沒有至少打一次 tool call。OpenMCP 是 96.2%，不意外，那是 agent builder 的用法。MCP remote fallback test 從不打 tool call，它就是 fallback 測試。效率高不一定比較好：tool list 若被錯誤快取，就不會再打到 server。近幾週 Codex 是很有效率的 client，用的人變多，轉換率跟著上去，有用的 session 還在增加。

[9:53](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=593s) 他們公開一份 dataset，列出見過的 client、版本、capabilities 和 extensions。他說很快還會再放一些資料。

## Stateful 握手太吵，擴展也很痛

[10:24](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=624s) 協定假設 client 和 server 的關係是 stateful。Client 送請求，server 回已初始化，client 再送一則 notification，這時才握手完。Session 建立前，client 已經送了兩則。接著要 tool list、prompt list、resource list，四次呼叫之後還沒做任何事，然後才是 tool call，結果回到 client。兩邊都有 state，很難管，而且非常吵。

[11:47](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=707s) 他大概週日早上跑過，數字會隨 client 組合變。目前每一千萬則 protocol 訊息裡，120 萬則是 initialize，tool call 只有 6.2 萬則。維持這條 stateful 連線的 overhead 很高。有一種半記載、文件也不清楚的 stateless 跑法，但會失去抓 analytics 的能力。

[12:36](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=756s) Stateful 的難處還有：協定含糊；elicitation 和 sampling 這種 server 主動的請求，得維持一條開著的 channel。他們上線時很想送 tool list change notification，server 換了 tools 就通知 client。公開 server 上這件事非常難做。Session state 在協定裡不夠精確。Stdio 是連上一個 process；遠端有 MCP session ID，兩邊對不起來。Sticky session 加上要檢查流量才能把請求送到對的機器的 load balancer，讓升級、韌性、一般的擴展都變得很難。SSE 的連線和切斷時間也是。

## Release candidate：伺服器不再先開口

[14:00](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=840s) 過去大約十個月他和 MCP transports working group 一起做，Google、Microsoft 和其他人都有參加，拿 production 資料和部署經驗來討論。新的 release candidate 改了不少，就是要比較好部署。這次 stdio 上的 JSON-RPC 訊息也會變，遠端則是新的 stateless HTTP transport。

[15:07](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=907s) 最重要的簡化，是拿掉 server 在 client 先說話之前主動跟 client 溝通的能力。Anthropic 掃過找得到的 open source server 和其他 MCP server，一億個 token 的搜尋裡，用過這個功能的只有台上這個人。

[15:59](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=959s) 他做了一個他說不太明智的現場示範：MCP webcam。他請大家看鏡頭、微笑，然後說成了。按 sample 之後，webcam 的 MCP server 連向 client，client 描述它看到的畫面。他說這正是 context engineering 要緊的地方，你不一定想要 AI 眼中的自己。這個會被拿掉的功能，就是 server 沒有先收到 client 的訊息就開口。Sampling 和 logging 那條路也一起走。初始化握手也拿掉：以前 stdio 或遠端 server 會送 initialized、交換並存下雙方 capabilities。若還需要先知道 server 有什麼，改打 discover endpoint，拿一個 probe，方便在 UI 顯示有沒有 prompts 和 resources。List change notification 和 resource subscription 仍有一個 client 可以打的 endpoint。

[18:44](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1124s) 他最喜歡的一項是 cache control。Server 給 tool list 時可以說，下一小時或接下來幾天大概不會變，client 就能快取。更重要的是一隊 client：server 可以表示這份 tool list 可以在很多 client 之間共用，不必每次連線都重新發現，也可以從離線的 MCP server card 這種 manifest 讀到。若真的收到 tool list 變更通知，通知仍然優先。他說這對 agent、使用者和維運都有空間。

[19:56](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1196s) Client 側他點了三個：roots、sampling、elicitation。Elicitation 是 server 接到請求後暫停，跟使用者要指引。例子是你叫它 drop the database，它彈出視窗問可不可以，使用者回答 yes 或 no，多出來的資訊走這條確定性的 channel。現在的設計假設兩邊共同管 state，只送小訊息。改法是：client 送請求，server 不直接給結果，而是說需要停下來要輸入；client 處理使用者那邊，再把原始請求和那個回答一起送回，給下一輪處理。很像今天 API 的做法。他認為配上 HTTP 標準化，這會是很大的功能。

[21:27](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1287s) 標準化的另一半是：MCP 用 JSON-RPC，網路設備要拆 JSON 很貴。某些資訊保證放在 HTTP header，路由就簡單。Tool description 裡還可以指定某個參數抄進 header。例如 image generation，在路由當下就知道，把流量轉到對的 server。這對 MCP gateway 和 proxy 的效率很重要。握手變短之後，協定本身會快很多。對 agent 來說，一個 URL 就能連上一組已授權的 tools；tool list 和其他 metadata 可以 out-of-band 拿到。連到授權端點、派工作、做 inference，會變得比較值得做。因為是 MCP，那個「一個 URL 到已認證、就緒的資源」特別要緊。

[24:14](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1454s) Release candidate 他說上週已經放出。目標是這個月底有 beta SDK，協定預定 7 月 28 日發布。最後他提了一個叫 Monte 的 sandbox，用來跑 agent 產生的 Python。他們在共同贊助一筆 bounty：若你很會打破 Rust sandbox，他們想把這層基礎設施做安全。

## 包一層 API 不一定錯，CLI 和 MCP 也還沒有合一

[25:38](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1538s) 有人問，真正在做 agent 基礎設施的公司，和只是用 workflow 包 LLM API 的公司，差在哪。他說主要是測試。這行很快就把一件事判成很好或很壞。若你還不清楚 inference 要做什麼、context window 怎麼設計，直接包 API 有時完全正確，有時完全不對。差別在於你有沒有測試、有沒有 eval 過這兩種差。

[26:48](https://www.youtube.com/watch?v=nfwNjmZSKMY&t=1608s) 另一題是 CLI 和 MCP 怎麼選，例子是 Playwright，怎樣知道 agent 比較好。他說這些改動之後，兩邊會稍為靠近。MCP 很適合遠端資源：遠端訓練工作透過 MCP 派出去，比把資料全拉下來安全。Hugging Face 的服務 CLI 和 MCP 都有。從 client 用量看，企業比較偏 MCP，因為比較能管哪台機器上部署了什麼；他懷疑很多 coding tool 的流量就是這種情境。MCP apps 這類擴充則是互動應用，例如 ChatGPT，接起來容易，體驗可以做得很豐富。他心裡有這兩種受眾，之後可能會依此調整工具怎麼部署。
