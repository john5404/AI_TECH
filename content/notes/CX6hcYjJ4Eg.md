# Leveraging AI Agents for Adaptive Real Time API Optimization and On the Fly UI Refresh in Production

片長 17 分 48 秒，英文自動字幕。講者是 Cisco Systems 的 senior software engineer 與 architect Indu。開場有主持人，字幕沒有把主持人的名字聽清楚。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 authorization 聽成 etherization，把 MCP 聽成 MSP，把 accounting 聽成 accountancy；下文用校正後的詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=CX6hcYjJ4Eg)

## 一句話

這場不是 code walkthrough。Indu 要講的是：使用者要的介面已經從固定功能變成即時、個人化的呈現，而 low code 以前讓人自己組的那一層，可以改由 GenAI 在 platform 裡做。公開模型不該直接碰到使用者資料。請求先經過 middleware 和 MCP，帶著 authentication、authorization、accounting，再決定資料要變成 table、chart，還是一段能做決定的分析。這樣就不必為每一種畫面再寫一批 endpoints。

## 固定介面不夠，GenAI 要進到 platform

[0:46](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=46s) Indu 說這場不走 code，談的是未來做法：動態設定 user interface，同時動到 backend infrastructure，讓 AI 跟 platform 一起做。

[1:26](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=86s) 她看到使用者期待已經變了，要 proactive、interactive、dynamic、productive、personalized，還要有 accountability。傳統介面是 reactive 的，功能預先定義、固定、受限制。Low code 變熱門之後，人可以即時做出介面，依自己的需要 personalize。她認為下一步是 AI 進到 infrastructure，即時接上。開發者以前為了用 low code 而寫的 code，改由 AI 接手：AI 決定使用者以什麼格式看資料，也決定怎麼控制資料。

[2:49](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=169s) 公開模型要怎麼連上使用者資料，是她一直在解的問題。她說沒有人想讓那條連線直接發生。她要的是 GenAI 和使用者專屬資料之間一層緊的綁定，走 authentication 和 authorization，兩邊即時合併，再產出使用者要的結果。

[3:40](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=220s) 她把 GenAI 在這裡能做的事分成三塊。Predictive rendering：預先猜使用者動作，先把 UI element 準備好。Context-aware：依行為和偏好調整介面。Self-optimization：從互動裡學，讓使用者知道平台還能怎麼用。

## 請求先到 middleware，再交給 MCP

[4:23](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=263s) 她對照現在的 LLM client：公開 prompt 直接打到 LLM server。她看到的未來是請求先到 middleware，那裡坐著 application data 和 API，再跟 LLM models 接上。Client 接著連到她說的 local server：資料庫、檔案、使用者手上的 resources。回來的資料經過整理、學習、個人化，再由 GenAI 交出去。

使用者可以說要 table 或 pie chart，在 application client 裡編譯，再依偏好送出。用久了，可能改要 statistical 或 contextual 的資料，卻不知道怎麼看才好，於是再 prompt：要這份資料，但要能做分析、能做決定的格式。背後是 client 先拿資料，再跟 LLM 說這是資料、請照使用者要的格式排，然後把整份結果送回介面。使用者再決定要不要存、怎麼排、要不要把這個介面留著反覆看。

[7:11](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=431s) 她說 low code、no code 平台以前做的整件事，責任可以交給 GenAI。資料還在，使用者知道資料在哪、怎麼跟它說話，再一起編譯出自己要的回應。

[7:35](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=455s) 她把突破點放在 Model Context Protocol。使用者為了資料連到 server，請求進 MCP client，MCP client 連 MCP server 取資料，GenAI 在背後接上那份資料，再以使用者要的方式送回。她也提到 agentic programming：有 file 和 folder，GenAI 連上它們，依需要修改，從伺服器拿 function 的參考，同時連 local data，做出 source code。平台若有一個 prompt 連到 MCP client，就可以在 client 裡做 authentication、authorization、accounting，讓使用者安全連上資料，也只跟 trusted source 的 GenAI 來回。她用 GPT 當例子：模型本身已有 ChatGPT 能給的能力，同時再接上使用者自己的資料來源，合在一起回覆。

## 即時改格式，以及問答裡的 control layer

[10:37](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=637s) 結論收在 real-time optimization。GenAI 若進到 platform、即時連上資料，格式化就在背後發生，不必依使用者需求開發一大批 endpoints。資料可以變成 table、chart、分析、counters、文字編排，或依那些資料產生的訊息。

[11:43](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=703s) 格式不對就再對 MCP client 下一次 prompt，背景重排再送回。不滿意就繼續這個 loop。她也說愈常經由 platform 上的 MCP client 連資料，它就愈會學你怎麼互動。Prompt 寫得不好時，GenAI 仍可能聽出你在找什麼，連上使用者有的 contextual resource 再排資料。她把這說成更好的 user experience，以及不必每一步都靠人的 scalability 和 efficiency。

[13:29](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=809s) MCP 在她口中不是單一 agent protocol，而是一對一。可以依情境建很多組 MCP client 和 server：一組給文字資料，一組給資料庫，一組給 time series，彼此不要撞在一起。

[14:27](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=867s) 她自己說這是約 15 分鐘、盡量壓短的一場。主持人謝謝她留了問答時間，並提到標準還在增加：Microsoft 官方也要支援 Google 的 A2A。

[15:36](https://www.youtube.com/watch?v=CX6hcYjJ4Eg&t=936s) 社群問題來自 Shrea：動態介面要怎麼保證 performance 和 scalability。主持人補問可以先做的低垂果實。Indu 回到 low code：使用者自己在平台上寫 query、自己排資料，效能比不上現在 GenAI 能生出來的。做法是把對的 structure 交給 GenAI，叫它即時寫出合併資料的 query，走最快或最有效的那條，也可以建議怎麼改 structure。她要拿掉 low code、no code 那一層，把 GenAI 和資料做在一起，但 MCP 要當 control layer：資料不是直接暴露給 GenAI，暴露是有限度的，上面還有控制。
