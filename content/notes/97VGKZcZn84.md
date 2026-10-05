# Bill Maxwell - Building Next Gen Agents with MCP | DevCon Fall 2025

Bill Maxwell 的工作坊，Patrick 介紹他上場。DevCon Fall 2025。片長約 74 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 chess.js 聽成 chest.js，把 ASCII 聽成 ASKI，把 Nanobot 聽成 nanomot。畫面裡的程式他多半是貼上再講，字幕沒有把每一行都摘全。

- 原片：[YouTube](https://www.youtube.com/watch?v=97VGKZcZn84)

## 一句話

這場是把一個會下棋的 MCP server 從加法工具做到可拖曳的棋盤。MCP server 像 AI 應用的 USB-C，工具可以在支援 MCP 的 client 之間帶走。加法只是證明模型會叫對工具。下棋才看出問題：沒有自己的狀態時，每一手都是新局，模型只能靠自己記得棋盤，還會走出違規的棋。規則和棋局放進 server 之後，模型不再當裁判。MCP-UI 再把同一份回應裡的文字棋盤換成 iframe 裡的圖，不支援的 client 仍能讀文字。

## Server 是埠，client 還有另一組能力

[0:09](https://www.youtube.com/watch?v=97VGKZcZn84&t=9s) 他不把 MCP 的內臟講完。隔天另有一場講內部。這場的工作定義是：MCP server 像 USB-C，把系統插進 model，讓它好用。支援 MCP 的 client 都能用那些工具。連接主要兩種。大家看過的 JSON，裡面是 `npx` 或 `uvx`，通常在本地跑，走 standard IO，client 直接把訊息傳給本機行程。這是一開始的做法。

後來演進到 streamable HTTP，可以集中託管，client 遠端連，也可以當第三方把 server 提供給客戶。更早的遠端試過 SSE。索引還在抓那些舊 server，品質還沒被篩，所以還碰得到。

[2:46](https://www.youtube.com/watch?v=97VGKZcZn84&t=166s) Server 這邊大家最先想到的是 tools，也就是 agent 和 client 能做的動作：拿紀錄、改資料庫、查資料庫、呼叫 API。另外是 UX 和資料。Prompts 引導使用者怎麼跟這個 server 互動。Resources 是檔案、URL，或資料庫裡要被引用的紀錄，由 server 呈現給 client。今天會用到 tools 和 resources。

Client 那邊還有 sampling，名字他自己也覺得怪：server 請 client 去叫一次 LLM。例如拉了一些文字，請 client 摘要，再送回 tool 處理。Elicitations 很要緊，回來跟使用者確認或拒絕。他的例子是：你真的要把一百萬美元存進去嗎，資料對不對。Roots 他覺得沒什麼人用，就是告訴 server 檔案系統裡哪些地方可以碰。

## 第一個 tool 只做加法

[4:44](https://www.youtube.com/watch?v=97VGKZcZn84&t=284s) 現場需要一把 OpenAI key。投影片上有一份給這場用的 key。他上次用 QR code，結果進了大家的手機，這次改貼網址。Agent 用 Nanobot，Obot 的開源專案，輕量的 agent framework，他自己說是完整的 MCP client。Agent 的定義就是 model、instructions、tools。Tools 由 MCP server 提供。還要 clone 一個 repo。棋局在 chess MCP 目錄。做的時候進 workshop live。迷路就看 solutions、readme，和他在用的投影片。他坦白會開著另一份 readme 貼程式，不想全打。

要做的棋局會從文字記譜走到可拖的棋盤。

[9:19](https://www.youtube.com/watch?v=97VGKZcZn84&t=559s) 要做的是能真的下棋的 MCP server。後端有工具可以走棋、規則會被執行。接受代數記譜，例如騎士到 E4。他自己也不熟，常常要問 model 他剛才那步是什麼意思。會有狀態、有棋盤顯示，然後講 MCP-UI，做出可拖曳的棋盤。需要 Node.js、基本 TypeScript、他用 VS Code、命令列要開兩個：一個跑 server，一個跑 Nanobot。相依是 MCP-UI 的 server、model context protocol 的官方 SDK、當棋引擎的 chess.js，以及 Express 和 Zod。

[11:36](https://www.youtube.com/watch?v=97VGKZcZn84&t=696s) 最小的 server 在 `source/lib/server.ts`，檔案原本是空的。他貼上 imports：Express、middleware、SDK 裡的 MCP server、Zod。建立 server 時給一個名字和版本。第一個 tool 只是把數字相加，故意簡單。定義名稱、描述、input schema，左運算元和右運算元，用 Zod 說它們是數字，並寫描述給 model 看。他說做 MCP server 若想成功，tool 名稱最重要，其次是每個欄位的描述。要寫得很具體、很準，model 才不會猜。Tool 本體回傳 type 為 text 的 content，內容是左右相加的和，然後把 server 交回去。Express 掛在 `/mcp`，這是 streamable HTTP 的慣例，聽 port 3000。Middleware 讓 MCP 和一般 HTTP 走同一個 port。

[16:50](https://www.youtube.com/watch?v=97VGKZcZn84&t=1010s) 這一步的 Nanobot YAML 要比 repo 裡給後面步驟用的那份簡單。Agent 就是 model、instructions、tools。Tools 來自剛做的 server。Model 用 GPT-4.1，指示就是去用它有的工具。`npm run dev` 把 MCP server 拉起來。跑 Nanobot 之前要在同一個終端機把 OpenAI key 放進環境變數，它才拿得到 key。`nanobot run` 那個 yaml，聽 port 8080。瀏覽器裡是 Nanobot 的 UI。他說 add 9 + 8，它知道要叫 tool，打到 MCP server，拿回他們規定的格式，答案是對的。有人已經在下棋，抱怨皇后被兵吃掉是違規。Model 被罵作弊之後把棋子放回去。也有人說這就像以後小孩可以當場說今天遊戲怎麼玩，然後照那樣玩。

[27:56](https://www.youtube.com/watch?v=97VGKZcZn84&t=1676s) 安裝若只下 `brew install nanobot`、沒有 Nanobot AI 那個 tap，那個版本是壞的。他們還在跟上游修。要先卸掉，再裝帶 tap 的那個。另一個常見錯是瀏覽器開到 3000。那個 port 不會說 MCP。Nanobot 的畫面在 8080，而且 Nanobot 行程要先起來。YAML 要在 live 資料夾，並用這一步的版本蓋掉原本的。改了 server 名稱卻沒重開，也會對不上。他說這些 dev server 不會自動重啟。

## 每一手都是新局，直到 session 寫進檔案

[31:11](https://www.youtube.com/watch?v=97VGKZcZn84&t=1871s) 加法跑起來之後，換成棋。用已經裝好的 chess.js。它有完整規則，他說是挺好的後端，可以畫 ASCII 棋盤、驗證走法，但他補了一句，驗證看起來並不很好，也會幫你管棋局。他們刪掉加法 tool，註冊 chess move，參數是一步棋。真正走的時候建一個新的 chess 物件、走那一步、回傳狀態。重開 MCP server 和 Nanobot，沿用剛才的 yaml。新對話裡說 E4，它知道要叫 chess move。回應仍是 text：目前棋盤、合法走法清單、ASCII。再說 E5，它又走一次，但這一階每一手都是新棋盤，狀態沒留住。

有人以為狀態還在，他說多半是 model 記得 tool 回應裡的棋盤，不肯放手。

[41:15](https://www.youtube.com/watch?v=97VGKZcZn84&t=2475s) 接下來才是能撐過好幾回合的狀態。每次連上 MCP server 會有一個 session ID。用它把棋局存到檔案系統，每步之前先載入這個 session 的局，才能接著下。新檔是 `lib/store.ts`。用寫檔、讀檔、建目錄、看檔在不在，再加上 chess 的 game。`saveGame` 拿 session ID 和棋局。目錄不在就建一個 games，再把 JSON 寫成以 session ID 為名的檔。`loadGame` 也拿 session ID，去 games 裡讀那個 JSON，有的話還原成 chess 物件。Server 不再每次新建一局，而是 await load。沒有載回來的局，或是新的一步，就走棋，走完立刻存。回傳的 content 和之前一樣。重開之後他說 E5，再說 show board，雙方的子都動過，而且輪到黑方時後端允許黑方走。他要大家看 games 資料夾，局是按 session 存的。

[47:16](https://www.youtube.com/watch?v=97VGKZcZn84&t=2836s) 他強調，做 MCP server 時業務邏輯可以全放在 server。這樣就不必靠 model 和它的 guardrail 做對選擇。把邏輯嵌進 tool、嵌進後端，會多一點安全，系統也比較可靠。

YAML 再換回比較完整的那份，他一度貼太超前，改回第三步。加上 starter messages：聊天窗通常是空白，starter 做成按鈕，按了就開場。畫面出現棋子標誌和按鈕，例如我先下。他說我走 E4，agent 自動接下去。他記得騎士可以到 F3。文字可以來回下。缺點是一切都在文字裡，得會記譜。會記譜還好，但它不視覺、不好想，UX 很差。他覺得聊天就是在這裡掉下去。

## 聊天切掉導覽，棋盤放在 sandbox 裡

[51:35](https://www.youtube.com/watch?v=97VGKZcZn84&t=3095s) MCP-UI 是 Shopify 一個團隊的專案。每個 Shopify 帳號的店面都有自己的 MCP server。他們想在互動式聊天裡仍然能購物。支援 MCP-UI 的 client 連上像 Allbirds 那種店，說要買鞋，會拉出目錄、可以點輪播，還是看得到東西。也可以加進購物車，結帳仍要到外面完成。聊天帶來的是不必自己走導覽：不用進網站、打搜尋、點男鞋、再點球鞋。做網站時一半時間在想使用者怎麼從 A 到 B。聊天切掉很多那段。

他們喜歡 MCP 這個協定，就在上面延伸。標準化了 client 和 server 的 SDK、介面、以及怎麼往返。渲染時放在 iframe 裡 sandbox，因此對裡面跑的 code 有一定程度的信任。可以在 UI 裡點，也可以用聊天讓 UI 做事，雙向。可以嵌東西，也可以是原始內容。延伸的方式不會把人畫死在角落。他相信 OpenAI 新的 Apps SDK 只是 MCP-UI 能做的能力裡較小的一個子集。

[55:21](https://www.youtube.com/watch?v=97VGKZcZn84&t=3321s) Server 端是在 MCP server 裡渲染 UI resources，寫在一般 MCP resources 上面。規格裡 tool call 可以回傳 embedded resource。回應可以同時有文字和這些資源，client 決定怎麼用。於是可以降級：client 不支援 MCP-UI 或這些延伸，就只畫文字，根本不知道有 UI。也可以偏好 UI，或兩種一起。URI 的樣子是挑 UI、給元件名稱、再給某種 instance ID。Client 另有 SDK，看 URI、驗證，再畫。iframe 和應用之間用標準的 postMessage。預先定義的動作包括使用者的意圖，例如加進購物車、代使用者送一個 prompt、直接做 tool call，以及從 iframe 連出系統的連結。

[57:52](https://www.youtube.com/watch?v=97VGKZcZn84&t=3472s) 第一輪 UI 只回簡單的原始 HTML，還不做互動。回傳不再只有文字，也有 UI 元素。Resource 的 URI 是一塊棋盤，編碼是文字，HTML 就是把 ASCII 倒進 `<pre>`。UI metadata 告訴會渲染的 client library，iframe 偏好 700 乘 700。重開 Nanobot、新對話、走 E4，每次都畫出這塊預先格式化的 ASCII 棋盤。檢查時看得到 pre，iframe 是 client 做的。不是每個 client 都支援這些 UI 延伸。關鍵是兩種都回，client 決定顯示什麼，server 仍可移植：不支援 UI 的 client 會退回文字。

## 拖一下，就是再叫一次 chess move

[1:03:57](https://www.youtube.com/watch?v=97VGKZcZn84&t=3837s) 接下來用 chessboard.js 做圖形棋盤。Server 裡加一個產生 game UI 的函式，因為這段比較長，他是貼上再講。Metadata 這次偏好 500 乘 500，仍是 text、仍是原始 HTML。想更花俏，可以在 MCP server 裡放模板系統，渲染完再以原始 HTML 送出。他說這樣就能用 MCP server 做很複雜的應用。樣式表把棋盤弄好看，叫 piece theme，畫出 board，放進 body。回傳仍是文字加上圖形元素。重載之後他說 E4，得到真正的棋盤。他叫它走下一步，覺得比較沒那麼有趣。可以來回走，等於在跟 model 下棋。它不擅長改錯，或在你下錯時把它修好。但這比每次打記譜有趣得多。

[1:08:16](https://www.youtube.com/watch?v=97VGKZcZn84&t=4096s) 走棋仍是在叫稍早做的那個 chess move tool。UI 的 handler 處理拖放，用 postMessage 告訴 Nanobot 的視窗去叫 chess move，然後 UI 更新棋盤。他說現在有一套能玩的做法。想加強可以加工具：合法走法、悔棋、棋譜、分析局面。大約一小時，他們比他預期更快做完最後一段。檔案儲存可以換成資料庫。再加上字幕裡聽到的 O，就可以託管，讓人連上來跟 agent 下棋。UI 可以顯示被吃掉的子，或可能的下一步。Workshop 目錄外面的根目錄是完整實作。他跑起來，這份工具更全。他移動棋子，agent 知道要再走，棋盤會更新。他還沒贏過 GPT-4.1，不過他猜它會作弊。剩下的時間他留在現場排錯。有一張 100 美元的 Visa 禮卡，隔天到攤位領；也會抽一台 Nintendo Switch 2。Andrew 謝謝他，並說隔天他會再講 MCP 的內部。問卷要填。字幕裡後段的拖放畫面只有他口述的結果，沒有把每一手下完。
