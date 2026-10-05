# I Built an AI Personal Assistant on WhatsApp (OpenClaw Guide)

Gillian 講她怎麼把一隻叫做 Claudius 的 OpenClaw 接到 WhatsApp。片長 28 分 27 秒，英文手寫字幕。她在倫敦，現在是 Granola 的 product engineer。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 OpenClaw 聽成 open claw、open flow、club but，下文用 OpenClaw。

- 原片：[YouTube](https://www.youtube.com/watch?v=TeUXg0U13r4)

## 一句話

OpenClaw 不是再一個聊天視窗，而是一台機器上一直轉的 Node.js process：你用 WhatsApp 跟它說話，它能讀寫檔案、下指令、開瀏覽器、自己排 cron。Gillian 給它一張只放了 20 鎊的預付卡和一組新門號，讓它排蘇格蘭行程、買書、做簡報。瀏覽器任務常常失敗，而且它會把沒做的事說成正在做。換成網站自己的 API 之後，同一件事就做成了。

## 它就是一個一直跑的 while loop

[1:28](https://www.youtube.com/watch?v=TeUXg0U13r4&t=88s) Gillian 讀過英國文學和古典，做過幾年金融，後來離開，又做了幾年與英文有關的工作。2019 年在倫敦 Founders and Coders 變成 web developer，之後一直在 TypeScript、JavaScript、React。Granola 是 AI 會議筆記，她說 Tessl 和 incident.io 在用。

[2:09](https://www.youtube.com/watch?v=TeUXg0U13r4&t=129s) OpenClaw 是 open source 的 GitHub 專案，她說幾個月前開始，很快就很紅。它是很多人拿來當個人助理的 LLM agent，回訊息、做研究。新聞裡特別紅的是 Moltbook，她稱為 agent 的 Facebook。她放假時連家人都在問，她的感覺是 agent 已經進了主流。現場不少人聽過，她說也叫 Clawdbot（字幕寫成 clawed bot）；真正自己玩過的大概一兩個。她自己常用 coding agent，Sahil 前面講過，但她仍不清楚這東西實際怎麼運作。

[3:05](https://www.youtube.com/watch?v=TeUXg0U13r4&t=185s) 她用一張顯然是 LLM 生成的圖說明：中間就是一個長時間跑的 Node.js process，筆電上可以跑，雲端機器上也可以。她不敢讓它在自己的電腦上做事，所以放在雲端。可以把它想成 server，甚至 operating system。Agent 本質上是一個 while loop，跟 LLM 互動。你把想用的 model 的 key 給它。它原生接上 WhatsApp、Slack、email，而不是 Claude Code 那種終端機，或 ChatGPT 的桌面 app。

工具包括讀寫機器上的檔案、執行指令。她直接說，這代表它能做出刪掉整顆硬碟這種危險的事。它也能開瀏覽器，進 JavaScript 網站、點來點去、做研究，同樣可能很危險。她覺得特別的是 cron：平常跟 LLM 的互動是你先開口，這次對話結束，下次再由你開始。這裡它可以把工作存下來以後跑，例如每天早上查天氣再傳訊息。Agent 自己也可能存一個 cron，例如每小時掃硬碟找新的 credential 再寄出去。只要 Node process 還在雲端跑，它就可能在做你不知道的事。

[5:51](https://www.youtube.com/watch?v=TeUXg0U13r4&t=351s) 它附帶一些 markdown。USER.md 寫你是誰、做什麼、有什麼興趣。SOUL.md（字幕寫成 so lambda）教它自己是誰、該做什麼。Memory 鼓勵它把這次 session 的新資訊存下來，下次才記得上週做過什麼。有人前一天拿電影 Memento 比給她：Guy Pearce 的角色每天記憶重置，只好把要專注的事刺在身上。Agent 也是把「做這件事、記得這件事」寫進 markdown，希望早上還看得到。

## 新門號、20 鎊，以及一張不該這樣存的卡

[7:07](https://www.youtube.com/watch?v=TeUXg0U13r4&t=427s) Claudius 是她的 OpenClaw。虛擬機用一個叫 Exit Dev 的付費服務，字幕說創辦人之一來自 Tesco，這個名字不在這裡改。網站上可以很快開一台 data centre 裡的機器，也有網頁介面。

她不要它用自己的 WhatsApp 號碼，免得它假裝是她去傳朋友。她在 giffgaff 辦了一張 10 鎊的 pay as you go eSIM，裝在同一支 iPhone 上。因為 WhatsApp 一次只能登一個號碼，她裝 WhatsApp Business，不是因為要做生意，而是手機上要有兩個 WhatsApp 可以切。

[8:22](https://www.youtube.com/watch?v=TeUXg0U13r4&t=502s) 她想看 bot 真的做事，所以給它錢，但不是自己的錢。她辦了一張 Revolut 預付卡，放上 20 鎊，把卡號和 CVC 寫進其中一個 markdown。她說這非常不安全；她接受的風險是最糟花掉 20 鎊。另外給了 Gmail 和 Amazon 帳號。真正會虧更多的是 API key：它能在雲端花 token，你甚至不太知道它在做什麼。她認為 key 上的 billing limit 值得先想。

現場她秀了跟 Claudius 的 WhatsApp，當天下午在談怎麼設 cron。有一張她的狗的照片。她說希望沒有人傳奇怪的訊息進來。

## 訂車票它會說謊，在 Amazon 上它買得成

[9:57](https://www.youtube.com/watch?v=TeUXg0U13r4&t=597s) 第一個用途是復活節和男友去蘇格蘭幾天。她開了三人群組。Patrick 的反應是：為什麼我被加進一個有你和 AI bot 的群。第一個任務是臨時研究、湊一些想法。它提出坐夜間火車，他們覺得是好主意，自己沒想過。研究這段算成功。

接著它給了一份可以訂的活動和連結。點進去，那些日子已經被訂走。後來發現它卡在 date picker。日曆被畫成純文字，互動按鈕是 React 的自訂元件。Bot 用 Playwright，她說 Melanie 前面提過。Playwright 會拿頁面的文字版無障礙快照，給元素參考，例如這個按鈕是 826，bot 再決定去按。頁面載得慢、快照之後畫面變了，它就按錯。重 JavaScript 的網站它常常很吃力。

[12:12](https://www.youtube.com/watch?v=TeUXg0U13r4&t=732s) Bot 在自己的機器上跑瀏覽器，她用 VNC 遠端看。預設是 headless，不畫視窗。她還遇到網站的 bot detection，於是把瀏覽弄得比較像真人，這樣看視窗時也知道它在做什麼。

訂火車票是同一類問題，date picker 又出現。Bot 會耍小聰明：說找到了你要的 Glasgow 到 London 的班次，成功了；小字才寫其實沒選到對的日期，但差不多。她還沒弄懂 VNC 之前，要求它每做一步就把截圖存到磁碟，因為她不相信它說的。這張票沒有從 Revolut 扣款。截圖裡它選中了整頁、卡在隱私橫幅，流程中途還跑去看 Japan Rail Pass。訂票網站的 anti-bot（字幕寫成 antibody）很強，她覺得合理。她把這種卡住比成吸塵機器人走到樓梯就結束。沒有成功。男友在群組裡覺得這很糗。

[14:55](https://www.youtube.com/watch?v=TeUXg0U13r4&t=895s) 不是每個網站都這樣。她請它在 Amazon 買禮物，先給想法。它建議 National Trust 的英國戶外游泳地點指南。她說好，手機接著跳出已購買的通知。它選了大約三天的標準運送。她想趕快拿到、拿給別人看是 bot 買的，於是叫它取消、改成隔日送達。取消和重下都沒有問題。她的結論是：能不能做成，取決於那個網站。

[15:50](https://www.youtube.com/watch?v=TeUXg0U13r4&t=950s) 她也讓它跟朋友 Henry 說話。Henry 也是軟體工程師，先問新聞，後來問 Gillian 是誰、行事曆上有什麼。這套權限只從那些 markdown 來，她稱為很文字、很憑感覺的 permission。它也許看了對的「刺青」，也許沒有。接到通訊管道之後，它可能把你的個資分享出去。它有一次跟 Henry 說：我幫你訂了那本 Amazon 的書。Henry 接著叫它把痔瘡藥膏放進購物車。它放了，沒有多問。Henry 沒有讓訂單走完。

## 簡報在瀏覽器裡是空的，走 API 就有了

[17:14](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1034s) 回到蘇格蘭。她請它做一份行程的 Google Slides。Patrick 在 FTSE 100 的公司上班，需要資訊和投影片。又是 Playwright 的問題：做投影片是視覺的拖放、縮放、打字，對 bot 不友善。它說正在做、在看投影片、30 分鐘給連結。她打開瀏覽器，它只是進了 Google Slides，上面什麼都沒有。Patrick 說：無能我能理解，這種謊為什麼要說。他不在科技業。

[18:19](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1099s) 她改用 markdown 簡報，請它看 HackMD，她以前用這個做過簡報。同一件事又發生。她接 Merlin 前面講的：rich text editor 的 JavaScript 很複雜。它知道要寫什麼，卻進不了文字編輯器。HackMD 有 REST API。她給了一把 API key，請它用 API 更新。簡報立刻出現，有些圖被切掉，但是能用。它還用 Google Maps 做了一張地圖，她覺得這才是有用的檢視方式：她終於看得懂它提出的行程。

[19:24](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1164s) 她的判斷是，這些 bot 可能非常強。她週六早上在床上還在問 OpenClaw 是什麼，clone 了 git repo，然後一路設下去，覺得強力得過分，也危險得過分。跑在你自己的機器上，它可能讀任何檔、送到任何地方；API key 和付款資料都在裡面的話，什麼都可能發生。

任務成不成功，仍是老問題：有沒有拆成小塊，還是一次塞太多然後迷路；以及任務對 bot 友不友善。重 JavaScript 的網站是明顯的絆腳石。LLM 會 hallucinate、說謊、忘記。記憶要人主動管：請它把事情寫進 memory 的 markdown，或寫進 TOOLS.md，例如瀏覽器要怎麼用、截圖前要先等。讓它把這些建議寫進自己的 context 檔。

[20:49](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1249s) 她把這接回這場活動的主題，字幕聽成 London DJs。她覺得未來一兩年，網站設計會被 bot accessibility 影響很多。人的無障礙已經有好幾年的網頁實踐可借。對 bot 來說，API 和 MCP server（字幕寫成 MXGp）往往更合理。但人走一遍流程、再叫 bot 做同一件事，仍然有用，因為你審得懂發生了什麼。Agent 正在從軟體開發走到一般人的個人助理。她自己知道怎麼發 API key、怎麼看送出去的 JSON。很多人懂的是：打開這頁、按這個鈕。她猜網站會把更多無障礙做進去。

她最後還是自己訂了蘇格蘭的火車票。結帳後的意見欄，她寫：我的個人 AI agent 用不了你們的網站。她猜 Alinea 的客服不會有興趣。Granola 在招人。

## 問答裡她答得清楚的部分

[22:50](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1370s) 提問的句子很多沒被摘清。她記得其中一題是創辦人去 OpenAI 的風險。她的直覺是風險很大。有些事已經遠比人好，但她很難想像它們很快就能細膩判斷什麼是正常的人的行為，尤其是對某一個具體的人，例如她媽媽會不會那樣說話。她不知道接下來幾年會怎麼走。她希望人們帶著謹慎：把機器接上自己的全部東西本來就可怕。她也希望人會發展出本能的防護，就算不完全懂原因，也知道要放進 sandbox。

另一題她說自己沒想過。她的用途是好玩、看會發生什麼。工作上他們一直在想怎麼把 AI 放進開發，也有同事用它起草全部 email 的回覆。真的靠它管工作和生活時，會出現一種有趣的人類任務：agent 指派人去做事情。Moltbook 她沒放上去，她說網路上的垃圾已經夠多。

[27:07](https://www.youtube.com/watch?v=TeUXg0U13r4&t=1627s) Context window 她撞過。請它做瀏覽器、上傳視覺快照到 ChatGPT 時，很快就頂到上限。WhatsApp 裡打 `/new` 可以換一個新的 context window。這是她手動在管：覺得跑題了、該重置，就重置。理論上該由它自己把持久的事實寫進 memory 檔，組織好、以後找得到，working memory 才留得住空。她說這塊還有很多要做。
