# The DevOps Godfather on AI's "Dark Factory" Problem

講者在 Tessl 工作，這場講的是組織，不是技術細節。片長約 22 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕沒有說出講者姓名。

- 原片：[YouTube](https://www.youtube.com/watch?v=b6dKwe00GpQ)

## 一句話

他假設組織會走向某種 dark factory，也就是某種自主運作。會上大家都在優化 agent 的 loops 和 harnesses，他覺得那些最後會變成 commodity，甚至可能由 frontier lab 做成服務，不會是你的差異。差異在團隊、platform、以及整間公司怎麼改。他聽到的「這裡行不通」，訊號不是技術做不到，而是還沒準備好。

## 2009 年聽過的那句話

[0:56](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=56s) 2009 年很多人跟他說 continuous delivery 很荒唐。他覺得 dark factory 現在處在同一段時期。反覆聽到的是：it will not work here。他聽成的是 we're not ready yet。技術不是做不到，他們終究想做，只是現在的結構接不住。

他從這裡出發：採用這套做法的人，包括 Tessl，協作方式會變。他提到 Conway's Law，組織方式和工具怎麼互動是連在一起的。今天不談怎麼把 agent 用得更厲害，談的是 team dynamics、platform、organization。

## 工程師的身份，以及懷疑的人該放去哪

[2:51](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=171s) 一個人對著 Claude Code，和一整個團隊圍著 Claude 或其他 coding agent，不是同一件事。常見敘事是 developer 變成 conductor，變成 agent 的 orchestrator，甚至是 agent 的 manager。他覺得這條路是對的。摩擦也在這裡：很多工程師說自己沒簽約要做更好的 prompting、寫更好的 spec。他們要的是技術工作。

Context engineering 把第一步從「只是一個 prompt」往前推：測試、評估、分發、優化 prompt。還是有人覺得只跟 prompt 和 specification 工作很空。等 harness、loops、以及組織裡更自主的工作進來，技術路徑又打開了。他們開始幫 agent 做 tooling，用程式的方式幫它。他說抽象一直往上疊的時候，craft 忽然又有了新的工程位置。

[5:02](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=302s) 有人問他怎麼幫那些懷疑的人。他的做法是請他們把知識放進 agent 的 context，也放進 harness，把 vanilla coding agent 做出來的品質問題，拿來把系統改好。他給公司的建議是心態轉換：不要修 agent 生出來的 code，去改系統。會上不只他一個人這樣說。他引用一句話：不要做那個東西，去做那個會做出那個東西的東西。還緊緊留在 autocomplete 和 prompting 裡的人，得把思考抬到系統。

目標是把 human touches 降到最低，工程習慣還在。一開始的敘事是 vibe coding，一個 prompt 就有結果。現在除了用 prompt 下指令，也在要求：請寫 tests、請更新 documentation。以前對好工程師說的話，現在對 agent 說。還在 YOLO 的人，他會叫他們停。工程習慣同時服務兩件事：人要維護這套系統，agent 也要因此變好。

## 團隊儀式、兩個指標

[7:29](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=449s) 比較前面的團隊，planning 和 retro 談的不再是 code 出了什麼問題，而是系統出了什麼問題。Retro 會問：agent 一遍一遍撞上這個問題，我們能不能修系統。Planning 則出現分裂：範圍夠清楚的，agent 可以直接拿，因為 harness 在變好；留給人的，是還沒框好、團隊得用對話決定的事。

開發者的學習順序他看得很清楚：先是 prompting，然後更好的 spec、context、harness、loop。產業也在這樣學。Team lead 的工作是把節奏和限制放進去：先停掉只會 prompting，把 context 做成可重用，然後再跳下一階。不能只說自己去摸索。

產出變快之後，下游的 GTM 跟不上，使用者也跟不上。Harness 不能停在寫 code，得延伸到那些人。需求收集也一樣，輸入若跟不上團隊的速度，那條 workflow 也要接進來。

[9:49](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=589s) 指標很多人都在談 token spend。他開始相信的是兩個。第一，量還要多少次 human touch，agent 才做對該做的事。這個數字該下降。Harness、context、guidelines 越好，它越低。第二，從個人系統走到共享系統，那是乘數：修一次，所有人受益。不是一個人變成 10 倍的人，是一次把 agent 優化好，影響到所有人。

## Platform：從團隊共享到組織裡的多人系統

[10:53](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=653s) 團隊可以在同一個 repo 裡共享 context、一起做 harness。要放大，就進到 platform。Platform 的人常常還在看 infrastructure、cloud、MCP gateway。新冒出來的是 skill registries、給 context 用的 eval systems、專門給 coding agent 的 guardrails、以及 identities。需要有人把這個計畫趕起來。Platform team 和 developer experience team通常不擁有那些基礎設施，做開發的人又不做這塊，中間要有一個 owner，不能只留在單一團隊，否則沒有 paved roads。

他看到的重用，很像雲上的 paved path，只是收進 platform 的 registry。Authentication 不該每個團隊各發明一次，放進 registry。Harness 也一樣：如果大家用同一套 linters 和同一套 security tools，那就是可重用的元件。字幕把 linters 聽成 winters。

[12:30](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=750s) 誰都能往 repo 丟東西，就會 sprawl。這個 skill 誰在維護，那個人 fork 了一個很像的，我該選哪個。某個領域要有 owner，在乎它可測試、模組化，讓別人能擴充 context 或 harness，例如一支 security scan。它要被維護、被保護，而不是組織裡隨手傳的檔案。共識很難，他不說這是 tabs versus spaces，但有時感覺很像。兩個開發團隊要對工作方式達成共識，溝通和仲介成本很高。所以大概不會只剩一條路，而是三四條 paved roads 的 catalog。人還是可以走自己的，但那算在自己的預算上。集中維護的那幾條，才是容易採用的路。

Platform 還得讓成本看得見。看得到花費、看得到它幫了多少，人才會想優化，例如減少 agent 要跑的 iteration 次數。只看最終結果，就不知道該優化什麼。他要的路徑是：solo developer，到團隊共享的 context，再到組織裡的 multiplayer system。改進的飛輪才能往多個方向轉。

## VP Engineering：授權、用人、以及一間 dim factory

[14:50](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=890s) 再上一層，VP engineering 要問的是怎麼讓組織做得到。Hackathon、lunch and learn、分享成功、共用 Slack channel、champions program，都是通用的轉型手法，agile 這樣做過，DevOps 也這樣做過。另一邊，只發 license、辦教育、let a thousand flowers bloom，他認為行不通。他主張把授權交給 team leads 和 platform，讓他們開始做這件事，而不是留給 solo developer。

[16:22](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=982s) 對外找人很亂。新職稱一大串：AI product engineer、forward deployed engineer、agentic engineer、AI engineer。他說這些名稱沒有意義，也判斷不了成熟度，因為還沒有人真的很成熟。職缺最多是個訊號，讓有意圖的人來看，不是技能的驗證。面試他聽到的做法分三步。先給一份練習，讓對方盡量用 AI 解。過了之後做 walkthrough：解釋發生了什麼、為什麼這是個好主意。這裡測的是判斷和工程能力。順序是先 AI，再 engineering。第三看協作：願不願意分享，是開放還是 solo player。要找的是能把東西做成可共享、可重用、達到 engineering grade 的人，不是讀過 ML 或 AI 的人，也不是字幕所說 decoding 方面的專家。三項不一定在同一個人身上，缺的就用 mentoring。不要把三種能力壓成一個 junior 或 senior。

對外說明這筆投資時，license 數量、更快的交付、更好的品質，有的能承諾、很難證明。他回到前面的指標：agent 要幾輪、這條路上改進了多少、重用了多少。這比拿「有 agent 和沒有 agent」的生產力來比，更好進那些討論。有人覺得費用高得離譜、想直接限縮支出時，反射不該是全面限額，而是優化：選對 model、教人怎麼用 model，也給更好的 context 和 harness，成本會跟著下來。字幕這裡把收費的一方聽成 defenders。

[19:20](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=1160s) 小而含糊的團隊也好談。一個人什麼都會做是夢想，通常還是會配上互補的技能，例如 PM、design。其中一人休假就需要備援，人數回到三個。還得有人看 production 和進來的 tickets。真的很有產能時可以是同一批人，但一邊修 bug 一邊做功能，功能速度會掉，這和品質有關。Junior 也要上路，在這三塊裡的某一塊學會什麼叫好。他不認為每個團隊會縮成一個人或兩個人。經驗很多，但教育還是得繼續投。

Dark factory 大概會是一間 dim factory。你得看自己願意為哪些功能承擔多少風險。不是所有功能都會自主。可以多投在審計：provenance，誰改了 code；verifiers，檢查這段 code 有沒有用。失敗時則投在 situational awareness。從 micromanager 到自主核准，中間是一條光譜，風險由你定。他認為你的 moat 是把知識收進來：放進 skills、context，也許放進 harness，用你約束系統的方式留下 business context。字幕把 moat 聽成 mode。

[21:06](https://www.youtube.com/watch?v=b6dKwe00GpQ&t=1266s) 對他來說，continuous delivery 因此接到 continuous learning。能多快把新東西換進、換出，是反應模式。改善這個，最終不是讓整個系統更可靠而已，而是在改更多系統的同時，還能維持可靠。他在做一個網站，整理這次沒講完的 agent enablement patterns，也在收集各組織的故事。唯一要帶走的是：贏的不會是 solo player，而是不同層級上，組織怎麼變好。
