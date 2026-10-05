# Tammuz Dubnov - When Our PM Started Writing Code: What Merge Rate Taught Us About AI Adoption - AI N

Tammuz Dubnov，AutonomyAI 的 Founder 和 CTO。片長約 27 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕有幾段口誤和聽打沒接上，下面只寫聽得清的主張。

- 原片：[YouTube](https://www.youtube.com/watch?v=KzhjnILSP0Y)

## 一句話

AI-native 不是多開 pull request。在乎一件事、又有權決定的人，要能讓 agent 把工作做出來，把交接從幾天幾週收成幾分鐘。花更多 token 不會自動讓功能更快到使用者手上。他用 merge rate 看非技術的人開的 PR 是不是真的進得了 production。

## 瓶頸是交接，不是寫 code 的速度

[0:12](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=12s) 主持人先提了 tube strike 和下雨，把他介紹成 AutonomyAI 的 Founder 和 CTO，還開玩笑這題目像 horror movie：PM 開始寫 code。Tammuz 說那不是這場的本質。本質是組織想變成 AI-native，這件事怎麼算一部分，以及你在推的時候怎麼量。

[1:09](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=69s) 他問現場有沒有跟 CFO、CEO 吵過 AI 花費，有沒有 PM 和設計師在開 PR，有沒有人把那些 PR merge。他說人人想當 AI-native，問定義卻答不出來，harness 也一樣。他聽到的半套答案是：PM、設計師、QA 更多人開 pull request。他認為那是症狀。

[2:56](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=176s) 他的定義是：在乎某件事、又有權決定的那個人，也能把工作做出來。AI 把這個缺口塌掉，由 agent 執行。瓶頸早就不是 code 寫多快，是交接。想法丟給設計師做 Figma，一週後再對齊；spec 滿意了再塞進開發的這個 sprint 或下一個；做出來才 review，做 pixel perfect，發現 ticket 寫錯，再繞一圈。Code 寫得再快，功能也不會更快到使用者。

[4:15](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=255s) 走向 AI-native 之後，在乎的人幾乎可以立刻用 agent 做、當場迭代，滿意了再送給開發者 review。設計和產品的 review 在開發者聽到這功能之前就耦進去了。幾天幾週收成幾分鐘。個人層級是每個人升級：PM 在乎的是功能不是 spec，現在做得出體驗；很多工程師更在乎系統、元件怎麼拆、依賴怎麼排；資深的人想做架構和更難的問題。大家去做自己真正在乎的事。聘人也不再是雇更多人做更多工，而是雇更多人做決定。他看到 product manager 的聘用速度比開發者快得多，因為走得更快之後，瓶頸是決策的人。

## 多花錢不會讓組織變快

[5:53](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=353s) 做錯可以很貴。他說 Uber 的消息大約三四天前出來：從 2024 年起 AI 花費增加六倍，那六倍在四個月內用完，今年剩下的時間沒有 AI 預算。若問「大家都拿得到想要的 token，影響是什麼」，得到的答案是成本愈來愈難辯護，token 用得愈來愈多，業務負責人卻看不到和功能變快的連結。多丟 LLM 算力修不好組織。要 AI-native，是給能決定的人執行的能力。

[6:56](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=416s) Microsoft 給了所有人 Claude Code，現在正在收回。他把「給愈來愈多人 Claude Code」說成燒錢的好方法，不是加快工作的方法。有人看過 2400 多家公司怎麼用 AI：每花 100 美元，只有 18 美元進到真正送到使用者的有意義 code。很多花在返工，以及 AI 自己生出來的 bug，因為對齊和模型怎麼訓練，形成愈花愈多、愈對不齊的迴圈。字幕沒有把這份調查的出處講清楚。

[7:48](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=468s) Shopify 他把當成做得好的例子，焦點不一定在開發者，也不是把 Claude Code 額度調高，而是把組織其餘的人補上能力：能在自己的領域決定，也能在自己的領域執行。他們量過非技術的人送出去的東西有多少有價值，說 50% 直接被接受，品質高到可以照原樣 merge，不必開發再無止盡地補。工程副總裁講得很清楚：成長最快的不是工程師，是其餘在乎組織、現在真的影響得到的人。Cursor 授權那段字幕沒接上，這裡不補。

## 錯的三種給法，和 harness 要擋住的事

[8:48](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=528s) 他看到的錯法有三。一，同一批開發者、同一類任務，只把額度和花費加大。人不想做的任務會整段交給 agent，讓它自己抓問題、自己修、再抓下一個，單一 session 吃掉大量 token。在乎的人會說方向錯了、往這邊走；不在乎的人感覺不到 token，就讓迴圈空轉。二，給 PM 和設計師更快的原型工具。交接沒解，只是 Figma 做得更快，然後更久地等開發。他比成美軍那句 hurry up and wait。三，Claude Code 發給所有人。名字裡有 code。不會看 code 的人不知道拿它做什麼。PM 和設計師每隔一天來桌子前：環境壞了幫我裝。或開出幾千行胡扯的 PR，開發團隊本來就有的 PR fatigue 再加重。

[10:35](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=635s) 對的做法是給那種使用者調過的工具。Claude Code 對開發者很好。他們自己也做了一個給非技術的人用的工具，字幕聽成 Tanya。把在乎的人變成做事的人。Pixel perfect 丟給不在乎長相的開發者，會無謂地吃掉 token 預算。另外不要放下既有的 guard。他跟跳得很猛、由上往下推 AI-native 的組織談過：主管在客戶面前才發現新功能和產品對不上。工程原則是多年經驗放進去的，一下子不見了。QA 要留着，避免 AI 往前衝、把產品帶去你沒要的方向。他在自己組織用一套叫 Plan, Merge, Polish 的做法，這場沒時間展開：保住那些 guard，code 速度仍然快，又不要左右衝突。

[12:25](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=745s) 非技術的人要敢碰 brownfield、很複雜、很 legacy 的 codebase，信心來自 harness。他的定義是：看到 agent 犯了錯，就讓它下次做不到同一個錯。放一道牆，下次自動得到回饋：這次錯了，改正。錯被發現之後 harness 要跟着改，不是用手一直扶，而是隨使用長出來。

[13:10](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=790s) 他們對內做 harness engineering 的原則：agent 要自己搞懂 code、自己 onboard，不靠開發者逐項交代；要聽得懂產品語言並對到 code，不能靠使用者指定檔案和行號；要撐很長的 session、保持 context 新鮮；要能檢查自己的工作，有自動回饋。對非技術的人，讀 code、守住 code 約束的是 agent，不必每次把約束翻譯給產品。沒有比過度自信的 agent 更糟的。而且要從所有使用者平行學習，成長才是累積的，不是只記單次 session。

[14:30](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=870s) 常有人說自己的 code 太難、裝不起來。他說他們還沒遇過做不成的，但要走對路。非技術的人更在乎使用者看得到的面。很複雜的 microservice 後端，不見得每次都該為他們裝起來，焦點放前面。他們跑過很重的 monorepo、多 repo、要先編譯 sibling library 才看得到的環境，也處理過 secret、私人 repo、裝着核心函式庫的 artifact。做不到的是另一條線：在乎的人不能做他們沒被授權的工作。工程師的位置是工程和架構的判斷，包括 DB 和後端。非技術的人做使用者看得到的變更，從文案、版面到新功能。這條線沒有聽起來那麼好畫。失敗會比預期多。他們要的 merge 不是 100%。一件事算不算碰到後端，非技術的人尤其看不清。

## 一張過千行的 PR，和三個數字

[16:31](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=991s) 他們自己有一張後來關掉的 PR，做事的是 PM，新功能，一千行出頭。想在網站某個很特定的位置放圖，讓人在版本之間跳的時候看得到其他版本長什麼樣。Agent 做成了，產品 review 時完全是要的樣子。一到開發者就說不 merge：agent 把東西做成 server side，圖存在那裡，使用者隔天回來圖就沒了。要先內部討論存在 meta DB 還是 bucket。Tammuz 說連他自己都不知道答案，不會照 agent 替 PM 做的決定走。他覺得這是健康的，對話被提前了。開發者拿那個 branch，留下前端和 UX，改了後端。期待不該是 PM 一開 PR 就 100% merge，也不該為了沒 merge 去怪開發者。那一段本來就是他們的工作。

[17:51](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1071s) 他們看的是上百家組織、每週每月幾千張跟他們開出來的 PR。第一，非技術的人開了幾張，最好能看到是誰，才知道每個人有沒有被補上能力。有人敢開，有人猶豫。第二，merge，避免開出噪音。他們的平均是：一個非技術貢獻者一季大約開 50 張，merge 大約 74%。四張裡大約一張越界。他說那不是 PR fatigue，開的人和 review 的開發之間仍然有信任。第三，額外工作不只是 review。有時 agent 不知道未來 roadmap，開發得再補 commit。他們看開了且 merge 的 PR 裡，有多少完全沒有開發再推修改，只有 merge 或 rebase 不算。這個數字是 84%。

[19:49](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1189s) 他收在民主化 authorship：要負責、有權的人做得到工作，不必干等組織裡其他人。多花 AI 的錢卻感覺功能沒有更快，斷開就在這裡。他要的是緊貼 codebase 的一層，讓非技術的人進得去，卻不必發給他們 Claude Code、也不必讓他們盯着一大堆 code。

## 提問：feature flag、測試，和 PR 看起來都一樣

[20:45](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1245s) 有人問 84% 那種「開發零改動」怎麼量，是自己的工具還是現成的。他們自己看。系統看每張 PR 的作者，log 裡有開這張的使用者，再看 merge 前的 commit。最後一筆若是 AutonomyAI 的 agent，之後有沒有別人推進去改了 code，merge 或 rebase 不算。

[21:49](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1309s) 另一個方向也在發生。開發者想快，不想等產品和 UX 決定。他們重度依賴 feature flag：開發者去做，連產品決定也先做，全部掛 flag，否則速度一來 merge conflict 會很密。在乎 UX 細節的人，包括 QA，再開發 follow-up PR 收拾。一個功能三四張 PR 他覺得沒問題。

[23:18](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1398s) 合併之後炸掉 production 怎麼辦。他們靠組織自己的 CI。Agent 會很深地跟着你的 codebase 寫：coding standard、component library、環境怎麼裝。你有 feature flag 的寫法，agent 就會帶出 feature flag；你沒有這個習慣，他們不會硬引進。測試少的組織，agent 也不太加測試，因為那不是慣例。他們準備加一個開關強制補測試。他看到組織要的是 harness 很貼着既有做法去適應。

[24:26](https://www.youtube.com/watch?v=KzhjnILSP0Y&t=1466s) 怎麼讓人看見開發花在 review 上的時間。他內部也有同樣的難處。他們把 agent 調成盡量少出行數、盡量重用、找得到既有元件，PR 變小，疲勞輕一點。Pull request 頁上每張看起來都一樣，所以他們讓一個 agent 給每張 PR 標風險和大小。開發者看到九張時，能分出三張是低風險小改、一張是 extra large，把注意力放在風險高的。Team lead 用大小和風險看每個人的負荷，再把負擔散開。提問時間在這裡結束。他們在展覽區有攤位。
