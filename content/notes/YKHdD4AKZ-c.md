# Bolt.new shoots us into the future of prompt to deployed app with Eric Simons

Eric Simons，StackBlitz 的 co-founder 兼 CEO。主持人是 Dion。片長約 35 分鐘，英文自動字幕。字幕把 StackBlitz 聽成 stock Blitz、stack blets，把 WebContainer 聽成 Web container，把 Supabase 聽成 super base。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=YKHdD4AKZ-c)

## 一句話

StackBlitz 先在瀏覽器分頁裡跑一個完整的開發環境。今年夏天的 model 夠好之後，他們把這層和 frontier model 接成 Bolt.new：一句 prompt 寫出檔案、裝依賴、跑起來，再一鍵部署。上線七週、團隊大約二十人。他認為開發者不會消失，非技術的人則第一次能做出以前要拖曳編輯器才做得出的東西。

## 瀏覽器裡的作業系統，模型夠好才從架上拿下來

[0:54](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=54s) 公司是五到七年前和共同創辦人一起做的。論點是：Windows 有 Visual Studio，Mac 有 Xcode，夠強的平台都能為自己做應用。Web 一直沒有。Wix、Squarespace、Cloud9、Replit 不是在分頁裡跑作業系統和 IDE，不是在 VM 上付錢開伺服器，就是拖曳。WebContainer 讓 `npm install` 和 dev server 全在分頁裡發生，沒有 cloud VM。連結可以像 Google Doc 或 Figma 一樣傳出去，對方在自己的裝置上跑、改。

[2:46](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=166s) 直到大約六十天前，主要介面是基於 VS Code 的 IDE。IDE 本身很技術。夏天之後 model 開始能寫他說的 production grade 程式，沒寫過程式、但有一點技術的人也做得出完整應用。StackBlitz 一直想拿掉本機環境。把 frontier model 接上 WebContainer，開發者可以加速，非開發者也能做以前做不到的網站。

[4:36](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=276s) Bolt 的 pitch 是：Claude 或 ChatGPT，若手邊有瀏覽器裡的作業系統。今年稍早他們試過，當時的 model 寫不準、會有 bug、會幻覺，點子先擱著。五月或六月看到新東西的預覽，覺得現在做得到。結果超過預期。上線七週；前四週從零到 400 萬美元 ARR，每週數十萬人在用。二十人的團隊在撐需求。

## 一句話到可重新整理的網址

[6:04](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=364s) Demo 是「做一個好看的 to-do」。左邊像 chat，右邊是完整 IDE，檔案被寫出來，終端機在瀏覽器裡裝依賴。他說幾秒內若順利就會看到能用的 to-do。和只把程式貼回本機 IDE 不同，這裡的 agent 可以從零想到一個真的跑得起來的應用。畫面上他加了一筆，又叫它改成紫色主題。他說自己沒寫一行。用法像 PM 在給回饋。

[8:22](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=502s) 他認為 agent 裡最刺激的是把「想法到電腦給出結果」中間的步驟收掉。要上線就按 deploy。和 Netlify 的整合不用另登：瀏覽器裡做 production build、部署、拿回連結。想留下再把 URL 接到自己的 Netlify 帳號。他在那個正式網址打了 hello world，重新整理還在。

[9:47](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=587s) 七週裡有新創用它做 landing page。他說已有新創從這裡 launch，其中包括一個帶後端的完整 CRM。很多人一行程式都沒寫，只在 prompt。他自己上個月做完 Ironman，用它做過訓練計算機，算跑步、騎車、游泳。現場他又把這場的標題和摘要貼進去，請它做簡報，而且事先沒測過這個 prompt。簡報很快出來，還帶了背景圖。他點下一張，上面寫部署應該是即時的、應該是工作流的自然延伸、從想法到部署只要幾秒、不用設定、地球上的人都該用得了。他說這些都對，但自己可以做得更好。也可以叫它改第三張。

[13:41](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=821s) 他不認為開發者會消失。汽車出來之後騎馬的人的世界會改，人用新技術做出以前不可能的未來。工程師更該把時間從重複的事挪到難的、有創意的問題。Bolt 專案可以開進 StackBlitz 的 IDE，直接改、push 到 git；存檔後回到 Bolt 繼續 prompt。Bolt 裡也能直接改檔。非技術的人以前要用 Wix 或 Squarespace，學拖曳、選模板、自己打字。他說那些工具其實很複雜。在這裡可以說「我要一個婚禮網站、日期是這天」，按下去就有東西可以上線。有人因此改選 Bolt，他一開始意外，後來覺得合理。

## 多大算夠，以及生命週期還沒接完

[17:22](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1042s) Guy 問今天和明天能做多大。Eric 說那個 CRM 還內建 AI chatbot 和日曆，快得讓他們意外。Power user 每天在做這種規模。限制主要不是技術，是要很熟工具才走得完，中間會有人放棄；底層還有一些 plumbing。已經有幾十個他願意稱為真的新創、帶著正式應用的例子。他不會訝異一到四個月內，新創的第一個 MVP 以及之後繼續做，會很常走 Bolt 這類工具。團隊正在把這種規模做順。

[19:14](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1154s) 畫面好不好對，程式本身呢。因為是完整開發環境，可以叫它寫測試、接上那些測試。記憶體洩漏這類是長尾。他說現在打到的是 80/20，接下來一兩個月；最後一哩是正式環境裡的錯誤怎麼幫你查。他們和 Chrome DevTools 的人談過：東西跑在瀏覽器裡，DevTools 看得到記憶體洩漏。理論上可以把訊號抽出來餵給 agent。難的是要有訊號、不要一堆噪音。Landing page 和要長期放在 production 的東西，這段的重要性不同。

[21:01](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1261s) 生命週期裡，部署是大項。Git 整合也在做。今天可以從 StackBlitz push，還不能在 Bolt 裡 push，這是最常被要的功能之一，已經排進時程。CI 那些 hook 他希望直接接上。另一塊是設計師和業務不用再留言「按鈕改藍」，而是進同一個協作空間，直接叫 LLM 改，開發者看過再按。後端開發者問 OpenAPI 或 GraphQL：他說這就是該走的路。下一週要宣布、但其實已經放出去的，是檔案系統裡一份 prompt file，字幕把路徑聽成 tobolt prompt。每次開 chat 都會把內容灌進 context。把 API spec 放進去，愈短愈省每次訊息的錢，它就知道怎麼呼叫你的端點，而不是去實作那些端點。自訂元件、設計系統、自訂 API 都可以餵。

[24:18](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1458s) 資料庫遷移比「按鈕從藍改紅」更外面。現在有人用 Firebase 和 Supabase。Supabase 的情況是它給你遷移指令，甚至可以複製貼上。他們在做兩邊（以及之後其他家）的直接整合：Bolt 看得到目前的結構，能在裡面跑 migration、做 snapshot。他要的手感是：有沒有網域、建應用、建資料庫、要遷移，能自動就自動。

## 它被拿來當實務測驗，而且不是許願精靈

[25:46](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1546s) 用量有沒有變成改進迴圈。他們在找第一位 analytics engineer，同時也像 GTM。這七週主要是定性：跟使用者談、修、改。他講的很多是這些學習。眼前是 P0：明顯的 bug 和限制，以及把 token 用得更省，讓每一美元換到更多訊息。接下來幾個月是正式等級的流程：後端即服務、git、協作。

[27:22](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1642s) Model 一直在換，怎麼評。他說 codegen 的 eval benchmark 一年前有用，現在代表不了真實應用，也不代表會不會對真實程式庫幻覺。幾乎沒有好的 benchmark。他們把 Bolt 的核心和 WebContainer 開源，別人 fork、換 model。他比成 2000 年代 PC 遊戲的「能不能跑 Crysis」：新 model 出來，大家問它跑不跑得動 Bolt。一兩個 prompt 就知道實務表現。Dion 補了一句：很多 eval 是缺一行、看 model 補不補得對，不是開發者整天在做的事，像拼圖只缺一片。Eric 說那些對過去幾年量 codegen 的爬坡可能很有用，但已經過了轉折，所以 Bolt 現在才存在。最好的辦法是放進像 Bolt 這種正式應用，看它交回來的東西好不好看、能不能跑、庫用得對不對。開源的 fork 也許能給做 model、做 fine-tune 的人一個共同靶。

[30:31](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1831s) 商業和開源怎麼分，價格怎麼算。Bolt 的採用超出預期，所以兩件事一起放。StackBlitz 有兩門生意，類似 Anthropic 的聊天產品和 API：一邊是 Bolt，一邊把 WebContainer 當 API 賣，瀏覽器裡的運算，加上到 npm 和其他建置所需的網路。開源那邊他們會把這幾週的學習 backport，別人也在試不同 model 和做法。Bolt 的價格按一個月的用量分級，從 20 美元到 200 美元；若每天幫客戶做網站，就會走到高的那檔。StackBlitz 在 Bolt 之前就投資開源，主持人提到他們對 Vite 的支持和贊助。

[32:19](https://www.youtube.com/watch?v=YKHdD4AKZ-c&t=1939s) 那麼多 prompt 進來，有沒有用 LLM 分析大家在做什麼。他們現在盯的是用得最成功的人，看那些人的 prompt 和做法。很多人把它想成阿拉丁的精靈，說一句就出現，然後失望。他想把 power user 腦中的做法做進產品：該問使用者什麼、什麼時候他們正走向一個不會有好結果的做法。他說這是前沿問題：怎麼為非技術的人做一個技術產品。
