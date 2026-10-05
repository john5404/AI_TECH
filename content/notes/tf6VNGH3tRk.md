# Marc Sloan - Harness engineering beyond code - product & design constraints for agents - AI Native D

片長 28 分 14 秒，英文手寫字幕。DevCon 第二天開場。Marc Sloan 是 Tessl 的 product team。他在一場給開發者的會上談 non-developers：product managers、designers、executives。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=tf6VNGH3tRk)

## 一句話

給 coding agent 的 context 很多不是從 codebase 長出來的，而是 product 和 design 在 Figma、Linear、Notion、CRM 裡寫的。那些東西預設不住在 repo，會和 code 脫節，接上 MCP 又帶來 rate limit、成本和一直在變的 eval。他在 Figma 做 Dev Mode 時就遇過。解法不是把所有對話都倒進 repo，而是用同一套 harness 的辦法，把外面的 context 收成 agent 用得了、也評得了的大小。

## 對的功能，錯的按鈕

[0:17](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=17s) 過去 24 小時 DevCon 幾乎都在談一件事：給 agent 對的 context。他覺得過去 6 到 12 個月，做法從 spec-driven development——事先把 agent 要的 context 寫好——走到現在的 context engineering，再往 harness engineering 走。工具成熟得很快，但多半盯著住在 codebase 裡的 context，最近的形狀是 skills。Markdown 靈活，所以自然放 code 旁邊的 context。它跟它所描述的 code 住在一起，在 repo 裡被管理、被版控，也能上 evaluations 和 tests。他們還在學怎麼管。Tessl 產品裡那些功能，就是在搞怎麼把 skills 和 context 變成 code。

[3:11](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=191s) 例子是大家熟的。公司有一個 web app，客戶請 PM 在 dashboard 上放一個 export 按鈕。匯出原本藏在 settings，要點兩三層，客戶不知道有這功能，希望它顯眼。表面上看很適合丟給 agent：一張 Linear ticket，附上按鈕該放哪、長什麼樣的 Figma。Agent 出 PR，功能上線，客戶說很好。Agent 不是瞎做的。事先的 skills 教過架構、前端元件、testing 和 CI、怎麼用 API 拿資料。這是一家用 Tessl 管這些的公司。

它錯了一件事。它用了 codebase 裡的通用 React button，沒有用更特定的 export button component。那個元件裡寫著這家組織遵守的 accessibility，以及這種 async 操作該有的互動。對 harness 來說一切順利：票交出去、做完、PR 過了、功能到了客戶手上。Skills 和其他部分的 eval 看起來都好，缺的是這一次的 product 和 design context。客戶當下開心，以後 app 可能過不了 accessibility audit，卡住一筆關鍵的 deal。

[6:24](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=384s) Context 一直在 Figma 的 design system 裡。Design system team 早就想過這個按鈕該怎麼做、互動怎麼走。原始 Linear ticket 裡的 Figma 用的就是對的 export button design component。Agent 把 Figma 當成視覺，然後推論該用一顆自己改過的通用按鈕。

他看 Agent Harness 是包住 codebase 的一層，裡面有 skills、evaluations、hooks、policies。Product 和 design context 目前在這一層的外面，而且按設計就不住在 codebase，住在 PM 和 designer 每天用的第三方工具。Designer 會繼續用 Figma，因為有 canvas。PM 繼續用 Linear 和 Notion。客戶資料繼續在 CRM。只要這樣，agent 要做對事情所需的 context，以及用來判斷事情有沒有做對的 context，就在 codebase 外面。Agent 和 harness 也看不見。

## 抄進 Storybook 之後，兩邊還是會分叉

[8:41](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=521s) 第一個挑戰就是：對 agent 重要，但住在外面。假設團隊發現了，把 Figma 的 design system 整理進 Storybook，文件和互動都對上。下一張類似的票，agent 選對元件。世界還在變。新的 deal 是政府機關，帶來新的 accessibility。PM 寫一份 Notion，design team 改 Figma。Codebase 愈來愈跟不上，agent 仍用過期的 design system 出功能。

只要接受 product 和 design context 住在外面，兩邊就會脫節。他先講的是設計在變、code 沒變。反方向也會發生：愈來愈多 agent 在 codebase 裡從零做新元件、改舊元件，app 裡會有一整批 design team 不知道的元件。Context 也得往回送。

[10:46](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=646s) 這些工具今天不都有 MCP server 嗎？接上不就結束了？某種程度上對，但活的連線有新問題。Harness 被當成要管理、要一直變好的東西時，你得維持這條連線，還要對付 rate limits、成本、第三方是否在線。Skills 和 codebase 裡的 context 上的 eval，現在依賴一直在變、不一定有 canonical source of truth 的第三方 context。Product 和 design context 的麻煩正在於它永遠是最新的，幾乎沒有 definition of done，本質上可以是不完整的。Harness 若靠它，得非常小心。

他停下來收成三句。Agent 和用它們的 harness 要有效，就得算進 product 和 design context。這東西本質上住在 codebase 外，本質上會跟 codebase 脫節。維持一條活連線，又帶來一整組新問題。

## Figma 上就在解，只是那時還沒這些名字

[12:36](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=756s) 這不是理論。進 Tessl 之前他在 Figma 做 Dev Mode。Dev Mode 讓 designer 把設計交給人類開發者——他說那是石器時代——開發者拿到很多 context，再手工寫出實作。過去幾年這個功能變成 Figma 的 MCP server，同一份設計 context 直接給 agent。Agent 做出來的前端看起來像設計、行為也像 designer 要的。開發者看 code，卻看到它發明了一批其實已經存在的元件，或用錯，或完全沒意識到該對準 design system。這是他每天在客戶那裡碰到的。

早期用來補這個缺口的是 Figma Code Connect：讓 design system team 把設計元件和 codebase 裡的對應物明確接上。他不展開 Code Connect。重點是這些不是新問題。Product team、design team 和開發者這幾年天天在處理，而且在那些詞彙被定義到一半之前，就已經在解 product and design context 對上 agent harness 的問題。

[15:30](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=930s) 三個教訓。做 Code Connect 時他們知道，企業裡這條連接需要專人維護。有整支團隊的工作就是讓連接保持更新、兩邊等價。原因就是設計和產品的 context 不斷跟 codebase 脫節，兩邊各有各的速度和理由，對齊要花專門的力氣。第二，有時並不希望兩邊完全同步。設計、產品、開發的節奏不同，本來就會分開。那支團隊的工作是讓現狀能用，並持續追蹤。他覺得這不只 design 和 code，product 和 design context 一般也是這樣。第三是生意和結構上的限制。Figma 很保護 design system 的 IP，不想把鑰匙交出去。要在支援 agent 和用 agent 的開發者，以及不拆掉多年 moat 之間找平衡。他覺得這在所有 product 和 design 的 SaaS 都成立，不只有 Figma。

## 打開、中間放一個 agent，或把 context 吞進 repo

[17:22](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=1042s) 他看到 harness 可能走的三個方向，時間夠的話還有偷偷的第四個。

第一，這些工具繼續打開。已經在發生：第三方 MCP server 的數量在爆，也在擴自己的 API 和 CLI，字幕把 CLI 聽成 cliffs。限制和 rate limit 還在，這層表面也會變成新的收費路徑。不會是所有資料突然都開放，但能走一段，而他們正走在中間。

第二，在第三方的 product、design context 和 harness 的 agent 之間再放一個 agent。他學到的是這條連接要專人維護、隨時修剪，而那些團隊愈來愈用 agent 來做。Harness 自己也開始有 agent 來建、來管 harness，他點名 Tessl 的 IO agent。那種 agent 的範圍可以從 codebase 裡的 context，擴到外面的 context。

第三，住在外面、沒被管理、沒被版控的 context 被 repo 吞進去，直接由 harness 管。難處是仍得在 non-developer 所在的地方跟他們碰面。Designer 還是要在 canvas 上設計，不管資料最後住哪。CRM 也一樣。但 context 若在 harness 裡能被管理、版控、評估，拉力可能大到資料自己被拉進來。這個方向也對上另一件事：non-developer 愈來愈像開發者。昨天和今天都有談 PM、designer 在開 PR、直接貢獻 codebase。那可能就是把每天產生的 context 折進 repo 的理由。

[20:51](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=1251s) 他把例子倒回去，假設這次根本沒有開發者。像他這樣的 PM 跟客戶談完，用 Granola 轉成文字，送進 Claude Cowork。他自己的 skills 會看逐字稿、找出功能、做成 Linear ticket；有一個 skill 寫著他的 roadmap，用來確認這件事符合 roadmap、優先順序對。他點出：non-developer 可能在 codebase 外面開發這些 skills。它們沒有版控，harness 碰不到、也不知道。這也許是第一條把那種 context 帶進 codebase 來管的路。Claude 把 Granola 裡的功能做成 Linear ticket，前面那條流程跑起來，功能做好，客戶開心。

PM 不知道的是，匯出藏在 settings 後面是有原因的。過去某個架構決定讓匯出客戶資料貴得誇張，所以不希望它隨處可用、高頻運作。結果是一張改動很大的 PR。PM 在電腦前拍自己的背，覺得自己能推 PR、自己做功能，這些他看不見。

他帶技術團隊時，決定做哪些功能，非常看重跟團隊談過技術工作量和會不會製造 technical debt。對 PM 來說，知道什麼時候不該做，和把 backlog 當成丟給 agent 的待辦清單，一樣有價值。所以到這裡為止他都在講把 product 和 design context 帶給 coding agent；反過來，也得把 coding context 帶給 codebase 外面、但仍會影響它的決策。一個演化是：產品團隊裡每個角色有自己的 agent 和 harness，這些 harness 得互相說話。那也許才是解的樣子。

[24:05](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=1445s) 方向還不清楚。接下來 6 到 12 個月會有很多進展。他確定的是：product 和 design context 對 coding agent 極重要。接下來幾個月做 coding agent 的 harness，得把它算進去，並找出怎麼過今天講的那些坎。

## 線畫在哪裡

[25:10](https://www.youtube.com/watch?v=tf6VNGH3tRk&t=1510s) 有人問：已經在餵 context 了，再加要加到哪、怎麼分組、什麼時候才餵需要的那一點。職場上有過一場要決定什麼該進 codebase 的活動，願望清單很長，包含設計，人人都想把 Slack、Teams、email、跟客戶的對話全放進去。Context 很重要，但哪一部分算數很主觀。

他說這就是 context engineering 和 harness engineering 的核心問題。先拿掉 product 和 design，光是把 repo 裡的 context、架構和慣例編成夠短、又跟這次工作相關的東西，已經很難。所以才要有 evaluation 這類結構：把 context 收到剛好的大小，並確認它真的有在幫忙。Product 和 design 是同一個問題，更難，因為更亂、更多、散在很多地方。現在只能用同一套工具：分出設計 context 裡的 signal 和 noise，也許用 agent 幫忙辨；收成能當 codebase 裡的 skills、或另一種 agent 碰得到的格式；再用一組 eval 確認 agent 是被抬起來，而不是被淹沒。多出來的那一層難，是因為它在外面。聽眾補了一句 trial and error and evaluate，他說對。
