# Cian Clarke - From Vibe Coding to Spec-Driven Development | DevCon Fall 2025

Cian Clarke（字幕聽成 Kian Clark）在 Nearform 工作，總部在愛爾蘭東南部，人也在美國、加拿大、義大利、英國、東歐。片長約 25 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Kiro 聽成 Kira、Kirao，把 BMAD 聽成 bad method，把 Tessl 聽成 Tessle、Tesla，把 CLAUDE.md 聽成 claw MD。

- 原片：[YouTube](https://www.youtube.com/watch?v=13EDVjfWKJM)

## 一句話

打開 Copilot 不算 AI native engineering。跨檔案的 agent 有一些可量到的增益，但有天花板。Cian 把 spec-driven development 看成現在的 state of the art：逼人和 model 先拆問題、寫下 why，再用緊的 context 一個任務一個任務做。同一隻獨角獸，vibe coding 做出臘腸狗，spec 做出還能改鬃毛顏色的東西。代價是慢很多。

## 從逐行補完到多團隊

[0:09](https://www.youtube.com/watch?v=13EDVjfWKJM&t=9s) Nearform 的前十年長在 Node.js 和 event-driven programming。他們在想下一個十年能把記號留在哪，於是靠 spec 把 AI native engineering 做成一套比較前進的做法。他要講的是過去 6 到 9 個月的經驗。

[1:49](https://www.youtube.com/watch?v=13EDVjfWKJM&t=109s) 他把旅程分成幾段。公司打開 Copilot，勾一格，就說自己在做 AI native engineering，其實不是。逐行協助帶不來那種大規模的生產力。再進一步，用 agent 跨多個檔案，增益量得到，但他認為 agent mode 這種 AI augmented workflow 有真實的天花板，不引進新的技術和 framework，就會撞上 model 做得到的上限。Spec-driven 在他眼裡是現在的 state of the art，增益比較量得到，也比較能拿掉那個天花板。再往前是怎麼擴到多個團隊。他喜歡 Guy keynote 裡從 single player 到 multiplayer 的講法：用 spec 和 agent 一起交付，而不是一個人把任務跑完。早上許多講者對這件事 violent agreement，都想看到更多進展。

[3:27](https://www.youtube.com/watch?v=13EDVjfWKJM&t=207s) 時間被壓得很緊。Copilot 從 2022 年 6 月就在。Vibe coding 這個詞是今年 2 月才出現，最多大約 10 個月。Cursor 6 月出 1.0，大約兩週前出 2.0。中間 AWS 推出 Kiro，他認為這是第一個把 spec-driven 的手法收進介面的 IDE。過去九個月裡有東西在發酵。

## 一隻獨角獸，兩種做法

[4:26](https://www.youtube.com/watch?v=13EDVjfWKJM&t=266s) 他承認用 traditional 形容一個 2 月才出現的詞很諷刺。Demo 用 Kiro 的 vibe coding mode，要求做一個在瀏覽器裡渲染獨角獸的 3D engine，各種配置都要。現場把 live demo 和 model 的非決定性放在一起。典型流程是 oneshot prompt。然後發現漏了需求，要把鬃毛顏色做成可調。然後發現它用 Vue.js，而他只會 React，要求重做。然後先前的需求只放了一個 stub，功能沒做完。Model 卡住之後，他說每一次都會去重做 test runner：從 Jest 換成 Node 內建的，手上的問題沒修，只是給自己找忙。接著它加了他沒要的功能，他要求退回。然後 token 用完。

[6:31](https://www.youtube.com/watch?v=13EDVjfWKJM&t=391s) 現場做出來的東西，他說不算太糟，但不太像獨角獸，比較像臘腸狗。他另外準備過的結果更不穩定：有時上下顛倒，有時悲劇性地少一條腿。另一個先前的例子，他看成犀牛，不是獨角獸。

[7:14](https://www.youtube.com/watch?v=13EDVjfWKJM&t=434s) 用 spec 走同一題，做法像工程師：強迫自己拆問題，把 why 講清楚，再拿那段 context 去建。Model 吃同一套。先請它起草一份獨角獸渲染引擎的 PRD，人再審需求，補上怎麼畫一隻獨角獸。接著請它產生 tech spec，也就是架構設計文件，裡面寫死要用 React 不要用 Vue。PRD 裡它幻覺出來、其實不需要的需求可以直接刪，就不會被做出來。人對輸出的方向有多很多的控制。他說這會慢非常多，結果則是不加疑問地好上幾個數量級。有了 what、why 和 how 之後，請 model 產生 backlog，把需求和 tech spec 拆成任務，一個一個放進各自的 context window。

[9:23](https://www.youtube.com/watch?v=13EDVjfWKJM&t=563s) 他在 Kiro 裡秀這份 requirements。關鍵差別是先定義獨角獸是什麼，並限制成 Minecraft 那種視覺、Three.js 裡有的 primitives，不要太有野心。Vibe coding 的 3.js 做不出很細的獨角獸，不如接受，做低一點的。架構文件他幾乎沒改。Backlog 裡每個任務只帶剛好夠完成的 context。做出來的那隻，他說不完美，但合理得多：有鬃毛，顏色能改，預設還帶彩虹，身體顏色也能改。

[11:00](https://www.youtube.com/watch?v=13EDVjfWKJM&t=660s) 他歸結為什麼變好。Spec 把輸出錨住，比較確定，少掉中途重做工具、加減功能的浪費。它同時處理光譜兩端：overeagerness，做了沒被要求的事；undercompleteness，要求了卻沒做完。PRD 定義需求，架構文件約束怎麼建，再拆成 backlog，model 拿到的工作單位小得多。PRD 的 what 和一點 why，加上架構文件的 how，每個任務的 context 剛剛好。架構文件裡寫死工具版本之後，任意重做工具的循環也少了，例如從 Jest 換成別的 test runner。

## Nearform 怎麼把 spec 裝進專案

[12:59](https://www.youtube.com/watch?v=13EDVjfWKJM&t=779s) 他們常用 Kiro 來建。另一套大量在用的是 BMAD method，並且把 Nearform 自己的角色加進去：很專門的角色定義，每個角色一串指令。他同意早先講者的方向，agentic 工具會從 generalist、full stack 走向專門角色。他們已經寫下 technical director、QA tester、backend engineer 是什麼意思，也有 PRD 和架構文件的模板。這套 framework 會跟著每個 spec-driven 專案一起走。

專案裡的 spec 分幾層。PRD 是 requirements，what 和 why。架構文件在 Kiro 裡叫 design.md，講 how。還有一套不準 model 打破的 golden rules：spec kit 叫 project constitution，也可以看成 CLAUDE.md 或 Cursor rules。他抱怨每個 IDE 名稱都不同，希望以後能統一。然後是拆開的 backlog。每個 story 有自己的 spec。他們讓 agent 寫 work log，記下這個任務做了什麼，下一個任務就能拿先前的故事當 context。很常，上一個 story 會決定 model 下一步怎麼做。

[15:20](https://www.youtube.com/watch?v=13EDVjfWKJM&t=920s) 他們依賴很多開源模組。Foundation model 常常不認識最新、最前沿的版本，也不認識沒有 critical mass 的很舊模組。Tessl 的 usage specs 用來教 model 怎麼用最新的 Fastify，或那種舊模組，減少幻覺。

## 多人並行，以及這套方法還不行的地方

[15:54](https://www.youtube.com/watch?v=13EDVjfWKJM&t=954s) 他再次用 Guy 的 single player 對上 multiplayer。現在多數 spec-driven 工具假設一個人依序把 story 做完，這是他們最大的困難。他沒有全部答案，但有個方向，而且看起來有希望。Agentic 專案不再是 12 或 15 人的團隊，可能是三或四個人，仍然需要多於一個人。

他的解法是 story 分給多個貢獻者平行做，任務再對到那個人的專長。假設團隊有 frontend、backend、DevOps，拆 backlog 時每個 story 只打架構的一塊，而不是橫跨整個 code base。現在的工具多半假設一個什麼都能做的 full stack developer。角色變專門之後，協作會比較自然，任務對上 code base 的區域，比較不會 merge conflict，也能從串行改成並行。

代價是有人忘記 commit，後果大得多。背景的 code base 不是以平常的速度在動，而是以 agentic team 的速度在動。忘了 commit、rebase、拉最新的，落差會很大。所以開發週期裡要有一道 staging gate：沒有 commit、push、對 master rebase，就不能往下走。Backlog 還要能透過 MCP 同步到 Jira、GitHub Issues 或 Linear，讓比較大的團隊看得到 agent 在做什麼。

[19:12](https://www.youtube.com/watch?v=13EDVjfWKJM&t=1152s) 真實專案上的教訓：spec-driven 很適合真正的 MVP，不是 prototype，而是要交到 stakeholder 和客戶手上的產品。Greenfield 很好。大型 brownfield 到目前為止他做得很掙扎。有些工具有 ingest spec 的流程，理論上能讓 model 在 brownfield 上做事，但早期實驗不好。他相信接下來幾個月會有明顯進展。現代化則不錯，例如卡在 Node 10、要升到 Node 22，這種對開發者是 toil 的工作，適合丟給一群 agent。商業案例很難成立的專案也用得上：五六個月、團隊不願意承諾的東西，如果時程能砍半甚至砍到四分之一，案子就比較站得住，前提是對方接受這是很前進的做法，不是沒有風險。

目前不行的還有 model 不擅長的專有或 legacy 語言。他們打算和 Tessl 一起處理這塊。簡單的 prototype 也不適合，spec-driven 對一個前端原型來說太重，不如用 Kiro 的 vibe mode、Bolt.new 或其他 vibe coding 工具。

[21:45](https://www.youtube.com/watch?v=13EDVjfWKJM&t=1305s) 他問現場過去一個月用過 spec-driven IDE 的人，超過一半舉手。入門他推薦 Kiro：有幾小時、想相對快，介面是很容易的 on-ramp。想花幾天走深，就用 GitHub 上的開源專案 BMAD method，能裝進 Claude Code 或 Cursor，角色定義細，workflow 也細。

他認為接下來 6 到 12 個月，hyperparameter 競賽可能不是成功的路，更像是怎麼和 foundation model 互動的技術被打磨。他對開源裡的 BMAD 有信心，覺得那是目前對未來 spec-driven 最好的近似。Kiro 大約在 6、7 月把一些 spec-driven primitive 收進產品。兩天前 Google 推出 anti-gravity，裡面也出現一些 spec-driven 的東西。想再讀，他指向 Martin Fowler 部落格上 Brigetta Buckler 的文章，同時評方法也評工具。字幕這個名字沒有再校正。時間不夠提問，他會留在現場。
