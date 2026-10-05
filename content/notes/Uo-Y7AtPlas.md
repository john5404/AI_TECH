# Lars Trieloff - Building AI agents in the browser, for the browser, of the browser - AI Native DevCo

片長 31 分 43 秒，英文手寫字幕。主持 Katie Roberts 把場子交回 Latent Space，介紹 Adobe 的 principal scientist Lars Trieloff，他做 cloud native content 和 API first architectures。題目是在瀏覽器裡、為瀏覽器、屬於瀏覽器的 agent。現場大量操作 Slick，有幾段他說自己弄壞了或跳過，筆記只寫字幕裡他講出來的結果。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Uo-Y7AtPlas)

## 一句話

他把 OpenClaw 那種「住在你電腦裡、什麼都控得了」的 agent，收進瀏覽器這個他本來就在用的箱子。做一個叫 Slick 的東西：agent loop 在分頁裡跑，也能控制自己所在的瀏覽器。Skills 把理論上很強的模型變成實際上會用那些 API 的機器。很多企業 SaaS 的側邊欄 agent 接不起來，是因為連接得由 harness 的人做、還得等 IT 批准。

## 不想裝 Docker，箱子就是瀏覽器

[0:47](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=47s) 故事從 IKEA 餐廳開始。他拿著 hot dog 和 soft serve，想到龍蝦，特別是 OpenClaw。又著迷又怕。那是 agent 的夢：一種智能，活在對你要緊的世界裡，這裡是你的電腦、你的 Mac mini，並且控制它。也因此很可怕。人們在想怎麼約束：harness、container。他知道 NanoClaw，把這個 claw 放進幾乎是 Docker 的小容器。他討厭 Docker，也不想裝在系統上。機器在企業管理下，裝了 Docker 就會收到信要他解釋。他討厭解釋。

他想到自己有一個容器：瀏覽器，而且相當自足。想把 agent 放進箱子，但每放進去就沒那麼有用。他大部分工作發生的箱子剛好是瀏覽器。大公司裡有幾千個 SaaS，很多他從不用，有些常用，有些每隔幾個月用一次而且很討厭。

[4:00](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=240s) 很多產品把 agent 放在側邊欄，這是 agent enablement：既有 UI 旁邊坐一個 agent。典型是 Copilot，坐在文件旁邊，你說幫我改這段。他嘴上把 Word、文件和 Gemini in Google Docs 攪在一起，意思是那種看得到你正在看的文件、也能改的東西。資訊在 Slack、在 GitHub、在別處。光是他想要、agent 也想要還不夠。連接得由做 agent harness 的人實作，還得被啟用。至少在他那裡，批准很謹慎、很慢。他們還在等 Copilot 的功能 rollout。

所以他想要一個坐在瀏覽器裡的 agent，能連上他所有工具，跟那些 API 說話。Web app 的 API 通常是 HTTP、JSON、HTML、一點 DOM。有些 API，model 熟到你說遠端控制 Slack，它只問 token。有些它會說沒聽過你做的這個怪東西。Skills 就在這裡：把理論上很強的機器，變成實際上很強的機器。

## 簡報本身就是那個 agent

[7:02](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=422s) 他做的 agent 跑在瀏覽器裡，不是雲端跑 loop、瀏覽器只負責顯示。它還要能控制自己所在的那個瀏覽器。他把它叫做 self-licking ice cream cone，網址他念成 slcc.com。他確定瀏覽器能顯示 HTML。突然不能做的也很多：不能 transcode 影片，不能碰本地檔案系統。這些限制他可以接受。探索裡讓他意外的是，瀏覽器能做的比他敢想的多。

[8:24](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=504s) 他揭曉：過去十分鐘不是簡報，是 Slick，就是要講的那個 agent。然後把說明翻回側邊欄。Slick 裡一個大想法是臨時生成的 UI。軟體變得很好做，他說變得 disposable，好到可以只為一場簡報存在。畫面上那頁用 three.js 和奇怪的動畫，就是一次性的應用。他打字，希望 Slick 不要笑他。字幕記下它回的一句：很高興終於見到這 80 個他只從 Lars 那裡聽過的 Latent Space 的人。他說它把 say 看得很字面，而 say 是他覺得好玩的一個 macro 指令。

[10:46](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=646s) Sprinkles 是載在側邊欄 iframe 裡的 HTML。他把「agent 在側邊欄」反過來說：app 在側邊欄，agent 才是主體。它能自己看有哪些 sprinkles、打開它們。換頁時送一個叫 LIC 的事件給 agent，因為在講冰淇淋。Agent 就逐頁評論。也可以做一顆按鈕，按下去只告訴 agent 按鈕被按了，下一步由它決定。他點了一下，Slick 解釋 cone：那是你在互動的使用者介面那一塊，可以當場改 UI，或在聊天裡生出來。字幕沒有把畫面變化寫全。

Lick 不一定從 sprinkle 裡發。可以是 cron，做重複工作；也可以註冊 webhook，一條公開 URL，HTTP 進來就把事件送給 cone 或某個 sub-agent。接著他弄壞了。Webhook 走 WebRTC gateway，有時會睡著、忘掉。QR code 被換掉，可能不能用，而且指到 localhost。他決定跳過、不重載。字幕說他們在 silicon AI 上有一個 host，用來把 localhost 變成公開 webhook，中間一句聽成 non log。他說這對 browser automation 很有用：例如新的 Slack 訊息要通知時，在 Slack 應用裡用 JavaScript 攔截，每次發生就 POST 到那個 webhook，再進 agent。

Dips 是同一個想法，更快、更短。渲染 HTML、把字寫進聊天，仍是 iframe，隔離好好的，但是即時互動。

[16:18](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=978s) Scoops 是裡面的一些 agents。這段他說自己不知道它做了什麼，然後數出五個：IKEA 簡報、一個寫了 haiku 的詩人、一個做了 Dunbar 計算的數學家、一個講了笑話的喜劇演員。它說 80 人大約是 Dunbar's number 除以二。他又開了一個研討會議程的 scoop，在背景跑，他繼續講。他想看 Slick 對 scoop 能力樂觀還是悲觀，字幕沒有把那個判斷記下來。

## 四塊：模型、Pi、終端機、程序

[18:21](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=1101s) 架構他要講四塊。第一塊是那團軟的，Slick 基本上接你想得到的 LLM：Codex 訂閱、Copilot 訂閱、xAI 的 Grok（字幕聽成 ex AI）、Anthropic 的 API key、Bedrock、OpenRouter（聽成 open root），還有其他。Model 愈好愈好玩。他擋住所有 mini 和 nano，不准它們跑 cone。Cone 仍可以把這些 model 派給 sub-agent。主 agent 很有權力，他不要一個笨的東西握著這份權力。

第二塊字幕寫成 agenda group，由 Pi agent 驅動。就是 Mario Zechner 原本寫的那個 agent，也驅動 OpenClaw 和 NanoClaw。他說下午有一場專門講 Pi，推薦去聽。他拿 Pi 當 framework 用了好幾個月，才開始把它當 coding agent 看。

[20:08](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=1208s) 第三塊是終端機。畫面上跑過 sprinkle 指令，也跑過 bash。他打開終端機，看到一份 skills 清單，裡面有 GitHub skill，瀏覽器裡也能跑 git。背後是 isomorphic-git，一個用 JavaScript 寫的小 git。

第四塊是底下那個齒輪，字幕聽成 cock wheel。一開始幾乎一切都在 main thread，架構很簡單。後來他打開 Slick 自己的程式目錄。每個功能都用 worktree，字幕聽成 block trees，做完多半不刪，都留在同一目錄。他叫 Slick 在自己的原始碼裡找一個東西，Slick 跑了 find。他不知道那是一個 50 gigabyte 的目錄：幾十個 worktree，很多份 `node_modules`。不只慢，渲染整個凍住。他很快弄懂原因。現在有程序管理。他跑 `ps`，字幕也寫成 PSA，列出從 page onload 以來的 prompts 和指令，不是從系統開機。可以中途打斷。

## 協定、Electron，以及不讓 token 進 context

[23:42](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=1422s) 協定。HTTP 很明顯：人用 HTTP 連進來，agent 也用 HTTP 看世界，可以跑 curl。再來是 Chrome DevTools Protocol，用來開分頁、控分頁、改某個分頁的字型。Slick 裝了一個看起來像 Playwright CLI 的東西，其實是包著 CDP 的很薄一層，像真正的 Playwright CLI。他看過 Playwright CLI，說他們在熬的神秘東西其實是水。WebRTC 用來做前面那些遠端 link，也就是沒重載成功的那次。多個 Slick instance 可以連在一起。Slick Start 不只是把 Chrome 配上 Slick 開起來，還能找到正在跑的 Electron app，用 debug mode 啟動，把 Slick 的 bootstrap 注入進去。闖進 Slack 很容易，他說是 child's play。最難的是 Claude。他以為 vibe coded 的應用不會有這些防禦。對方有會在有人碰 debug port 時殺掉 binary 的觸發，他後來說成把 fuses 拿掉。寫 Electron 的人在 Anthropic，做 Claude 桌面應用，字幕把 Claude 聽成 cloud。他仍進得去：改 binary、拿掉那些 fuses。他說 you can just do things。

[27:28](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=1648s) 工具箱裡有 bash 和 coreutils（字幕聽成 core U-boats）、SQLite、Python、ImageMagick、處理 PDF 的工具。上週加了 Biome 和 TypeScript compiler。因為 Slick 在對 Slick 開 PR，字幕聽成 pairs，lint 全失敗，上一輪 session 散出了隨便的 code。他給 Slick 一個能在 sandbox 裡跑的 linter。

MCP 是一條指令，用來加 MCP URL。他不支援最常見的 stdin/stdout，只支援 HTTPS transport。字幕把後面要講 MCP 的人聽成 Max，也把 WebMCP 聽成 when CP。要把 WebMCP 放進 Slick，就是叫它去搜 WebMCP，它會找到對的 skill，然後說這很容易，就是 document 上另一個它可以互動的屬性。這段他說自己投影片順序亂了，中間也有一句不知道畫面上發生什麼。

最後是 OAuth token 指令，字幕聽成 oath、o off。走完 OAuth flow，把 token 存起來，並且不讓 token 漏進 context。他說 hiding from the lens。

[30:33](https://www.youtube.com/watch?v=Uo-Y7AtPlas&t=1833s) 最後一頁叫 Slick 幫他拍照。命令列拍照他說用 ffmpeg，再開資料夾看，然後讓 Slick roast 它看到的。他念出來的句子是：三種黑、一個 headset mic、一把不怕人的鬍子，頭後面兩盞 scoop 形狀的燈。Lars，這個 cone 到哪都跟著你，連舞台上也是。字幕把 cone 聽成 comb。時間到了。想再了解，他要人去一個沒講完的網址，或直接跑字幕聽成的 `npx clicky`。
