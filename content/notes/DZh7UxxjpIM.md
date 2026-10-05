# GENAI4dev , 6 month later   REX about deploying coPilot and Cursor to 80 dev since oct 2024 with Hub

講者是 Hubert，在 XFabrica 做產品、技術現代化與 consulting，也做了很久的 AI。這場是一場 REX：怎麼幫一個法國、同時也有國際業務的客戶，把 coding assistant 放進日常。片長約 33 分 4 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=DZh7UxxjpIM)

## 一句話

客戶要的不是再買一個工具，而是把已經在 shadow IT 裡蔓延的 Copilot 和 Cursor 管起來，並且能量成敗。六個月實驗從大約一百人收到 80 個有動機的人。整體生產力他報大約增加 10%，覆蓋率上升，Sonar 評分沒有變差。他事後覺得該更早停掉不用的授權，而且授權不要一次簽一年。

## 實驗是為了控，不是為了一次鋪開

[1:01](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=61s) 他主要在法國，曾在 Learning Tree 當了二十年講師，最近在 Rakuten 學到 coding assistant：幾天內就能證明開發者的生產力和狀態可以變好。XFabrica 的主要客戶當時卡在一項 2024 年啟動、不確定 2025 年前做不完的計畫。他剛上任，客戶就請他做支援和 consulting。六個團隊一起上，開頭目標接近百分之百，最後是 80 人。這就是他要講的旅程。

[3:16](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=196s) 壓力來自開發者。有人已經在 shadow IT 裡用這些工具。有些事業單位很自主，不必等資安、HR，或他口中的 COP 同意就能自己裝。集團 CTO 想把這件事管起來：工具新、讓人害怕，也可能把秘密 code 散到網路上。初始需求是控制部署。挑戰是找到安全的解，並且能量成功或失敗。名字就叫實驗：好就繼續，不好就停。還要說服 CISO，以及不相信這些工具的開發者。

[4:54](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=294s) 做法很方法化。先做戰略規劃，CTO 強力背書，CEO 從一開始就在，把顧慮拿出來，他們試著逐條回應。部署是漸進的，不是一天 big bang：第一個團隊、調整、再第二個。三位有經驗的 AI 專家支援。兩個 DevOps 團隊裡，有一位專家自己就是 DevOps，講得了 Terraform 和 Helm。用 Cursor 寫 Terraform，和用它寫 Java 或 .NET，不是同一件事。Teams 上開頻道做社群，因為專家不是 24/7。至少每個 sprint，tech lead 要回報 code coverage 和 quality gate。

[6:57](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=417s) 診斷靠訪談，一路問為什麼，找痛點，也問各團隊現在用什麼。大公司、多種語言，工具要蓋到他們常用的 IDE。選了 Copilot 和 JetBrains。Continue 配本地 LLM 試了又停，因為筆電算力不夠，改走雲端。團隊條件很硬：沒有組織、沒有指標、沒有既有 code 的全新團隊不能上，實驗不想把東西打碎。要挑有好做法、有指標、壞了修得回來的成熟團隊。通訊要加密，要有軟體廠商的安全認證。他們本來就有 Microsoft 合約。開場有 solution architect 來安撫大家；字幕先說 GitLab，後來說 GitHub，沒有講清是不是同一人。

## 六個月怎麼陪，以及工作坊裡真的遷了 Vue

[9:30](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=570s) 實驗本身六個月。開頭選了 100 位開發者。前幾週、前幾個月看使用量，把比較沒動機的授權取消。主要是沒有真正參與的外部承包商，不是那些懷疑者，而是公司裡另有別的問題的人。他們只想聚焦有動機的人。

[10:23](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=623s) 上線前先跟管理和全部 tech lead 做 kickoff。團隊一個一個上，不是同一天，中間空三到四天，用來改流程、回答重複的問題。白板和便利貼：你怕什麼、你想用 AI 做什麼。結尾再做一次，讓他們自己看見落差。一位專家對兩個團隊，叫得出每個人的名字和所用的語言。第一季結束有期中會：全部指標攤開，聽哪裡順、哪裡不順、支援該怎麼改。

[12:33](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=753s) 他不是一個人。旁邊有 delivery manager 排會議。三位專家在法國的 GenAI 圈很有名。時程大約從九月、十月到三月底。第一季的工作坊是拉著每個開發者幫忙。後半改成主題：怎麼用 coding assistant 做 code review、怎麼重構、怎麼把 unit test 生得更好、從 wireframe 或截圖生 UI、Vue 2 遷到 Vue 3。不是 demo，團隊帶自己的需求來。一場 30 到 40 分鐘。他說 40 分鐘可以把一個 Vue 2 應用的 codebase 遷到 Vue 3，經驗可以帶走。也有 SQL：索引、命名、把結構很差的資料庫重組。一兩隊在用 PL/SQL 和很舊的 Java，非常懷疑。JetBrains 讓他們比較敢：可以 reverse engineer、比較懂、補文件，當成現代化的起點。

## 10%，以及一個他故意估低的 ROI

[15:39](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=939s) 他們試著什麼都量，但不是每個團隊每次都配合。80 人裡有很強的、中間的、沒那麼好的。整體生產力大約增加 10%，區間他說是 5 到 20。寫 code 的時間下降，這段期間交出的功能變多，文件變多。Code coverage 從 60 升到他接著說的 85、89，兩個數字接在一起，這裡不替他揀一個。品質不能變差：入選團隊都要開著 Sonar，評分要持平或更好。

[17:00](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1020s) ROI 把客戶付的都加進去：XFabrica 的專案團隊和專家、軟體授權、會議和工作坊的時間，再減掉省下的時間。省下的時間來自問卷，也來自一個公式。他說這些生產力數字不算很嚴。他們把合理的每週省下時間定在大約三小時，取的是回收答案裡偏低的那端，故意不樂觀。公式得出六個月的 return on investment 是 150。他沒有在口頭把 150 說成百分比或倍數，只拿這個數字告訴客戶：這是一個好專案。

[18:39](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1119s) 用法會移動。開頭開發者幾乎只用 completion，結尾更多是用 prompting 解決問題或寫 code。他叫做從 completion 走向 vibe coding。經驗少的人一開始會接受每一個建議。他們一直強調必須批判、必須自己選、寫進去的東西自己負責。技術債他們試著用更多文件、更多測試去查有沒有下降，也加快了一些 framework 和函式庫遷移。

[20:28](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1228s) 風險跟大家一樣：幻覺，產出的 code 裡有時有大 bug。所以入選團隊要有跑得好的 CI/CD 和測試。他們也提醒智慧財產和安全。關鍵或非常敏感的專案不准參加。AI 建議的函式庫和任何東西都要公司核准，不是 open bar。

## 早一點停掉不用的人，授權也不要鎖一年

[21:37](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1297s) 若重做，內部阻力會更早處理。100 收到 80，是因為有人始終不信。這是實驗，不是要改變他們的人生，沒有時間耗。若更早做，也許能多出一兩週的產出。Tech lead 都說 KPI 沒問題，DORA 指標也可以給。專案一開始才發現很多數字給不出來。Copilot 和 Cursor 有使用量指標，第一天沒開。部署一個月後才看，有的團隊很有效，有的不是。

[23:05](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1385s) 客戶下一步是正式鋪開，而且只選 Copilot。過去六個月 Copilot 追了很多。六個月前 Cursor 好非常多，現在差距變小，但仍有人一直偏好 Cursor。他們還有 platform engineering，會把 coding assistant 和共用的 coding rules 接進去，當作 developer experience 的一部分。另外也有 agentic 專案。字幕裡「正式鋪開」那句沒有聽完整。

[24:00](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1440s) 他的建議：每個專案都有 early adopter 和懷疑者。照顧 adopter，讓他們當大使，在內部把熱度傳開。背書要到 CTO、CEO，也要到 CISO。HR 很少被拿來談：職位上寫可以做用 coding assistant，有助於吸引人，開發者也以用它為榮。開始要小，要常常量，因為生態每天在變。不要年約，留在月約。今天 Copilot 和 Cursor 都好，但他提到 OpenAI 和 Windsurf 的消息，下個月誰變強他不知道。若他在幫資訊長，會要求保持彈性。訓練不夠，還要自己做、看 demo、去 meetup 和研討會。人要留在迴圈裡，不要只丟授權、把人單獨留在螢幕前，要有人陪。

[27:15](https://www.youtube.com/watch?v=DZh7UxxjpIM&t=1635s) 問答裡，主持人說自己買 Bolt、Base44 也是月約，並問企業幾百人是不是會被逼成年約。Hubert 說可以談。廠商會用全年、全企業的價錢來賣。也許不是月，而是一季：價錢好，又不會鎖死。XFabrica 沒有現成的 security champions 制度，他說他們在這件事上很實驗、不太有組織。成功要講出來。期中和結束，管理層會吃飯，因為專案很好。他算時數時很悲觀，實際更高，他仍寧願不要太樂觀。人的臉從開頭害怕工具搶工作，到結尾覺得自己比開頭好。他們還發了徽章，讓做得好的團隊比賽，他說很好玩。要不要強制，他沒有標準答案，看團隊和心態。他不確定硬推有用。高層背書加上內部通訊，最懷疑的人最後會來。主持人補了一句：越逼，懷疑者越頂回去。
