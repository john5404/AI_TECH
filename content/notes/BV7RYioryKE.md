# Maximiliano Firtman - WebMCP: Making Web Apps Faster and Cheaper for Coding Agents - AI DevCon

Maximiliano Firtman，可以叫 Max，人在布宜諾斯艾利斯。這場約 30 分鐘，英文手寫字幕，場合是 AI DevCon。字幕把 agent 聽成 Asian、nation、ancient，把 WebMCP 聽成 web MCB、Wembley、Wemyss，把 Claude Code 聽成 closed code、cloud code，把 OpenClaw 聽成 open claw，把 origin trial 聽成 narration trial。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=BV7RYioryKE)

## 一句話

Agent 今天瀏覽網頁，多半是在猜：截圖、DOM、accessibility tree，點下去再截一張。這燒 token、時間和 context window。WebMCP 讓前端暴露 tool，而不是像素。開發者定義 name、description、input schema 和 execute。它跟連後端的 MCP 不是同一條協定，網站不自己做就不會出現，而且不能取代對使用者行為的測試。

## Agent 跟 web 已經在四個方向碰上

[0:16](https://www.youtube.com/watch?v=BV7RYioryKE&t=16s) 題目是讓 web app 對 coding agent，以及每一種 agent，變得更快、更便宜。他做 app 快 30 年，web 做了 30 年，也做過 mobile。有書、有線上課程，也跟 OpenAI 的 Codex 有關，這句字幕不完整。他在寫一本 Vanilla Web 的新書，讀者不只有人，還有 agent。少依賴 library、framework，不只更安全，也對 context 更好。他說 agent web 還在很早的階段。

[1:28](https://www.youtube.com/watch?v=BV7RYioryKE&t=88s) 四件事同時在發生。Agent 想為 web 做東西：很多人要一個 app，做出來往往就是 web app。Web 也想跑 agent：可以在 web app 裡用 JavaScript 注入 agent，也可以是 MCP apps，在 Claude 或 ChatGPT 裡像 mini app 一樣跑，web app 跑在 agent 裡面。使用者想用 agent 瀏覽：至少在美國和其他一些國家，Chrome 裡有 Gemini，人在看網站時可以叫 chatbot 或 agent 對那個網站做事。Agent 自己也想瀏覽 web。他說今天聚焦其中三項，解法是幫 web 開發者加強 agent 跟網站共事的能力。

[3:17](https://www.youtube.com/watch?v=BV7RYioryKE&t=197s) 例子是一個追 FIFA 世界盃的網站：搜比賽、追球隊、date picker 看某一天的賽程。不管問的是 OpenClaw、Codex 還是 Claude Code，要它在這個網站查資料，都得先看懂介面。要花時間、token 和 context。Context window 是問題，不只是 token 用量。例如要看 16 強、準決賽和決賽，agent 像使用者一樣把網站點完，也許要幾分鐘。

## 現在的四種瀏法，都是在猜

[4:37](https://www.youtube.com/watch?v=BV7RYioryKE&t=277s) 第一種是 connector。可以是網站自己做的 MCP server，或一支 CLI。字幕把 npm、npx 聽成 NPN、NTP。Agent 若有終端機權限，就能從服務拿資料。第二種是老方法，用 curl 這類 HTTP 請求。它不跑 JavaScript，也不看介面，只拿到伺服器的 HTML。單頁應用拿不到真正的資料。

[5:38](https://www.youtube.com/watch?v=BV7RYioryKE&t=338s) 第三種是 browser usage。多半是裝在 Google Chrome 或 Chromium 上的 plugin，Codex 也有一個。Agent 跟 plugin 說話，plugin 讀 DOM、accessibility tree，並用 JavaScript 截圖再分析。也可以是內建瀏覽器。Codex 今天有自己的 browser，像 webview，讓 agent 像使用者一樣瀏覽。第四種是 computer use。例如你要 coding agent 用 Safari 看網站怎麼渲染，今天要接上 Safari 並不容易，於是就操作整台電腦：滑鼠、游標、對整個 app 截圖。

[7:03](https://www.youtube.com/watch?v=BV7RYioryKE&t=423s) 問題是瀏覽器變成猜謎。Agent 觀察截圖、DOM 或 accessibility tree，推論該點哪，例如 date picker，再截一張，看日曆有沒有打開，再修、再重試。每次點、每次重試都在燒 token、時間和 context window。多模態模型分析畫面上有什麼、該點哪，更貴、更慢。

## WebMCP 給的是合約，而且跟後端 MCP 分開

[8:03](https://www.youtube.com/watch?v=BV7RYioryKE&t=483s) WebMCP 想解決其中一部分，不是全部。前端暴露的是能力，不是像素。沒有它，agent 在看像素、selector、DOM，猜完再重試，還用圖像模型。有了它，就從推論變成開發者定義的合約。Tool 有 name、description、JSON schema，以及一個執行函式，例如 JavaScript function，agent 可以呼叫。不是把 UI 當成人來猜，而是暴露一個介面。

[9:27](https://www.youtube.com/watch?v=BV7RYioryKE&t=567s) 已經有 MCP，為什麼還要 WebMCP。Agent 在中間規劃，MCP 可以連，但 MCP 連的是後端：伺服器、API、資料、workflow。那有驗證問題。有些東西不在伺服器上：local storage、IndexedDB、web storage、File System API、感測器。他舉 Meta 的眼鏡，上面能跑 JavaScript web app，感測器的資料不會在後端。字幕把 IndexedDB 聽成 index CV，把眼鏡聽成 class。所以要有對前端說話的 WebMCP。不是二選一。看你要什麼：MCP server，或是 web app 裡暴露的 WebMCP tool。後者看得到目前頁面、捲動位置、表單裡已填的資料、UI state、整個 user session，以及每一個 client API。例如機器上接著一個 Web Serial 裝置，也可以用。

[11:31](https://www.youtube.com/watch?v=BV7RYioryKE&t=691s) 它受 MCP 啟發，但不是繼承來的，也不是同一個協定，API 也不一樣。他在 X 上看到有人說，WebMCP 之於 MCP，像 JavaScript 之於 Java。他覺得這個定義不差。他不記得是誰說的。它是提案中的標準 API，還不是 W3C recommendation，但朝那個方向走。網站作者提供給 AI agent 這個 context 用的 tool。Chatbot 也能用，但更適合 agent。Tool 可以是任何函式，也可以是網站上的表單。例如收 support ticket 的表單，收新工單的資料，那就是一個 tool。

[12:57](https://www.youtube.com/watch?v=BV7RYioryKE&t=777s) 若是現場看，隔天會進 origin trial：Chrome 149，可以對真實使用者開始用。不然就開 flag，或用帶 flag 的 Chrome 跑。若是看錄影，大概已經在了。網站沒提供 tool，agent 會退回其他技術。重點是它不會自動出現在你的網站上，想要就要自己做 WebMCP。

[13:49](https://www.youtube.com/watch?v=BV7RYioryKE&t=829s) 對 coding agent 來說，這不取代測試。測試是在測使用者行為。有了 WebMCP，你還可以對 tool 做 unit test，所以測試變多，不是變少。之後 agent 用 tool 操作 web app 會更快、更便宜，填表單時不必猜該填哪。也可以做 log 和 debug tool，接到現有的測試。例如暴露一個 tool，收集這個 session 裡發生的錯誤，或在完整的瀏覽器 context 裡跑 diagnostics、描述目前的 view、拿目前的 DOM、核對狀態。

## 世界盃的查詢，以及讓 agent 玩 Doom

[15:35](https://www.youtube.com/watch?v=BV7RYioryKE&t=935s) 每個 tool 就是一個物件：描述性的 name、description、input schema、execute。Description 要寫給 agent，不是寫給人。客戶是 AI agent。Input schema 寫這個 tool 要 agent 給的參數。Execute 由 web runner 在 agent 決定用這個 tool 時執行。跟 MCP 一樣，agent 會先跟瀏覽器或 web app 要目前可用的 tool，再依 prompt 或目標挑一個執行。Chrome 有一個 web inspector。他借 Chrome 團隊的標準例子，是訂機票、訂飯店：不在表單裡打字，改呼叫 tool。字幕把 flight 聽成 fly。

[17:17](https://www.youtube.com/watch?v=BV7RYioryKE&t=1037s) 世界盃網站上的 tool 包括依日期拿比賽、依球隊拿比賽、小組、搜尋比賽。問 England 的第二場，答案來自執行 tool。問阿根廷和 England 能不能在決賽碰上，agent 對好幾個 tool、帶不同參數呼叫多次。可以：一隊要拿下小組第一，另一隊要當小組第二，否則會在準決賽相遇。他問誰會贏冠軍，說自己來自阿根廷，明天還想平安回家，不確定要不要放下一張。後來還是給了 tool 的答案，說那場決賽他們有過。Chrome 裡的 model 是 Gemini，是 Gemini 在呼叫這些 tool。

[19:06](https://www.youtube.com/watch?v=BV7RYioryKE&t=1146s) API 有兩種。Imperative 是腳本：呼叫他口中的 document model context register tool，傳入那個物件和 execute。可以註冊很多個。不必在 page load 時全部註冊，可以依 app 的狀態增刪。Execute 期待一個 promise，非同步可以，前端再去打後端，或跟藍牙裝置說話，都可以。Declarative 是 HTML form，必填 tool name 和 tool description。還有一個 tool auto submit 的 boolean，表示作者接受 agent 自動送出這張表。Input、textarea、select，或作為表單元件的 web component，可以加 tool parameter description，補充該填什麼。Label 夠了就不必加，例如 first name。Agent 會看到有 create ticket 這個 tool，以及它的參數。

[21:33](https://www.youtube.com/watch?v=BV7RYioryKE&t=1293s) 他拿開源的 Doom engine 加上 WebMCP。可以說往前走 10 秒，它就在跑。也可以同時 rotate 和移動，因為 agent 一次能跑超過一個 tool。他說「像瘋子一樣玩 Doom 一分鐘」，agent 就用 WebMCP 在玩。玩的是 agent。

[22:53](https://www.youtube.com/watch?v=BV7RYioryKE&t=1373s) 今天要在 Claude Code、Cursor、OpenAI Codex 裡用，靠的是一座橋，而且那座橋是 MCP，不是 WebMCP：Chrome DevTools 提供的 MCP。Coding agent 只要支援 MCP，就接上 DevTools MCP。它開一個 Chrome。至少現在 WebMCP 不能在 headless browser 上用，它要真實 context，這以後可能變。活的 Chrome 打開網站，例如 Doom，列出 tool，再經這條通道執行。他說想在 Claude Code 上玩 Doom，就是這條路。以後 coding agent 的 browser tool 也許直接支援 WebMCP，就不必這座橋。例如 Codex 直接支援、ChatGPT 的 MCP apps，或 OpenClaw 的瀏覽 plugin。目前仍是實驗。

## Tool 是給 model 的 API，先從一個診斷頁開始

[24:54](https://www.youtube.com/watch?v=BV7RYioryKE&t=1494s) 設計 tool 就是在設計 API，消費者是 model，不是使用者。一個 tool 只做一件事，不要重疊，agent 才比較選得到對的。要有 state：登入和登出時，tool 不必相同，也不必一次註冊全部。用白話描述會發生什麼，因為你是在對 model 說話。回傳要嚴謹，錯誤要有意義。參數錯了就說明怎麼錯，agent 才能自己迭代，不必人介入。輸出要小，剛好是被要求的東西。Doom 的例子裡，他做了移動，以及看畫面上有什麼：截圖用 base64 的 PNG，字幕把 PNG 聽成 Pag；還有地圖上的位置，以及一個 boolean，猜你是不是正對牆。Engine 給什麼，就可以多暴露或少暴露。

[27:14](https://www.youtube.com/watch?v=BV7RYioryKE&t=1634s) 規格還在討論要加什麼、拿掉什麼，周圍的 actor 都在談。現場這天要開 Chrome flag。隔天進 origin trial：填網站的 origin，就能在 Chrome 裡當 trial 用。最終 API 也許幾個月內還會變。Puppeteer 也有，在實驗用的 flag 後面，coding agent 可以用。他說現在是最好的時候去學、去討論要不要支援，讓任何 agent，包括 coding agent，更便宜、更好地進你的 web app。

[29:27](https://www.youtube.com/watch?v=BV7RYioryKE&t=1767s) 建議是先挑 web app 裡一個高價值的 page state，只暴露一個 diagnostic tool。用呼叫和參數來評估，從 Claude Code、Cursor 或 OpenAI Codex 呼叫。再用 DevTools MCP 或 Puppeteer 把它自動化。這是今天的兩個選項。也許幾個月後其他 AI agent 會有原生支援，今天還沒有。然後你可以問：這一頁 QA 為什麼失敗。跑起來的 tool 就是 diagnostics。收尾：WebMCP 讓 web app 對 coding agent 更快、更便宜。它是實驗 API，tool 來自前端，不是後端，這是跟 MCP 的差別。它用完整的瀏覽器 context。現在就能用：給終端使用者的 Chrome origin trial，或 Chrome DevTools MCP，或 Puppeteer。他說還剩兩秒。
