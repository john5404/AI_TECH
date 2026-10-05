# Christopher Batey - Building Product Teams in the Age of AI: What We Had to Relearn Every Quarter -

Christopher Batey 是 Core Engineering Consulting Group 的 CTO。主持人 Katie Roberts 在 Latent Space 這個舞台介紹他。原片約 31 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=tJUAef_dBtU)

## 一句話

AI 把他們寫 code 的速度放大了，也把原來做得不好的地方一起放大。他的公司現在大約 90% 到 100% 的 code 是 AI 寫的，但他不願意說有多少進 production 時完全沒有人看過，只敢說低於 10%。真正要守住的是 systems thinking、採用，以及從想法到有人真的在用的整條路。Token、commit、合併的 PR，都是中間那一小段的 vanity metrics。

## 兩年前的顧問公司，和現在這套自己在用的產品

[0:26](https://www.youtube.com/watch?v=tJUAef_dBtU&t=26s) 公司名字裡有 consulting。他們本來做 platform engineering 和 continuous delivery。大約兩年前，多數工程師在客戶現場，客戶是媒體、金融、醫療的大型企業。一種是顧問：看 continuous delivery、數位轉型、developer platform，告訴對方怎麼往前。另一種是派人進去做。知識型顧問公司靠領域專長增值，因為客戶的工程師在忙自己的產業。人一多，專長就很難保住，所以要做系統。

[1:54](https://www.youtube.com/watch?v=tJUAef_dBtU&t=114s) 兩年前的系統有三塊。內部訓練是 wiki、簡報、workshop、bootcamp。第二塊是大量文字和試算表，記錄 platform engineering 和 continuous delivery 裡什麼叫好：開發平台有哪些功能、path to production 做哪種測試，以及怎麼快速評估對方離目標有多遠。第三塊是參考資料。同一類東西在客戶那邊做了很多次，就留下帶 epics、milestones、tasks 的 roadmap，以及可以帶進去的 reference implementation。

[2:57](https://www.youtube.com/watch?v=tJUAef_dBtU&t=177s) 他說沒有 AI，大概不會走到今天。訓練變成內部的互動平台。新人學 continuous delivery 和 platform engineering，例如 versioning and promotion，或不同的測試，好讓軟體放得更快。然後系統會配一個接近真實的環境：GitHub repository、Kubernetes 裡的 namespace、一個 cloud account。背景有程式檢查他有沒有做到，例如部署一份不可變的版本化 artifact。以前工程師都愛的 wiki 和試算表，變成大家用來追成熟度的互動工具，範圍包括安全、為了 continuous delivery 的應用架構、測試和 promotion。

[4:17](https://www.youtube.com/watch?v=tJUAef_dBtU&t=257s) Roadmap 和平台功能仍給大型企業用，也用來做一套現成的 developer platform，裝進較小公司的 cloud provider。大公司內部要花數百萬英鎊才建得出來的好處，小公司可以先拿到一部分。那個內部工具後來變成 SaaS，企業客戶可以自己登入，他說這件事相當複雜。給中小企業的產品，他們自己是最好的客戶。蓋的時候沒想過要用它來做自己所有產品，現在就是這樣。其中一個托管的 managed service 用來快速看 path to production 各階段、各個 component 的成熟度。平台介面則看出哪個 component 的哪個版本在哪個環境。

[5:27](https://www.youtube.com/watch?v=tJUAef_dBtU&t=327s) 他要講的是兩種不能出錯的系統。第一種管很敏感的資料，漏出去大概就會結束跟那個客戶的關係。第二種管別人的 production 環境，出錯的衝擊很嚴重。他不是在講功能很基本的網站。社群媒體上說，沒有人類看過的軟體正在進 production。他覺得這已經不是假設。一個人的 side project 或一人公司快速上線，他覺得沒問題。他說的是握有信用卡、個人資料或醫療資料的系統。Code 對它拿得到的資料什麼都做得了。如果他的銀行或醫療公司開始這樣做，他會怕。

## 寫得出來，不代表有人懂

[6:53](https://www.youtube.com/watch?v=tJUAef_dBtU&t=413s) 樂觀有一部分是真的。這一區的人，尤其過去九到十二個月、往前看大約二十四個月，都看到 AI 非常會寫 code。他們開始做這些產品時，code 能不能編譯大概五五波。現在會編譯，也大概能動，他花的時間是在把行為修細。他不覺得 AI 同樣擅長 software delivery lifecycle 的其他段。所以他問：寫 code 是軟體工程最難的部分嗎？他覺得那正好是 AI 現在最擅長的。軟體工程又是不是做出成功數位產品最難的部分？他說的成功，是 production 裡被採用、可能帶來收入或其他影響的功能。

[7:55](https://www.youtube.com/watch?v=tJUAef_dBtU&t=475s) 他請觀眾只算正職系統，不算每個人週末都在錄的那至少二十個 side project。Code 有多少是 AI 寫的。低於 10% 的只有一兩個人，選項裡沒有零。低於 50% 的，他估現場大約 20%。到 90%、再到 100% 的人不少。他們公司是 90% 到 100%，工程師自己動手寫 code 已經很少。他說這是大家愛講的 vanity metric。主分支上的 code 現在都是 AI 寫的，但有多少完全沒有軟體工程師用批判性思考介入？他認為大概是零。

[9:47](https://www.youtube.com/watch?v=tJUAef_dBtU&t=587s) 比較刺的問題是：多少 code 進 production 時，沒有人類看過。看的人可以是下 prompt 的人、自動 agent workflow，或之後做 review 的人。完全沒有這種未看過的 code 的人，他數下來大約一半，他對這個結果還算滿意。完全沒有人看過就上線的，現場有幾個，他說這給他希望。他自己很想說公司是 0%，但沒辦法保證，所以選低於 10%。他更擔心的是：多少系統在沒有人理解的情況下進了 production。

[10:48](https://www.youtube.com/watch?v=tJUAef_dBtU&t=648s) 幾年前，產出數位產品的是有血有肉的 product owner、QA、developer。產出是數位資產：code、artifact、驗證、測試、監控和 alerting、文件。現在產出過程對大家愈來愈像黑箱，可能是 agent workflow、Codex 或 Claude Code。只要最後他仍擁有並理解那個產品，他不太擔心。滑坡是一直被推著更快，直到既不懂它怎麼被做出來，也不懂做出來的東西。有人會說看驗證就好：黑箱測試、acceptance tests、functional tests 對，就沒問題。他看到的是這很快變成沒有人懂任何一件事。

## 系統決策先寫成 ADR，再讓 agent 對著它做

[12:10](https://www.youtube.com/watch?v=tJUAef_dBtU&t=730s) 第一條是不要把 systems thinking 交給 agent。不是要求每個人懂每一行。他拿一個 managed service 的簡圖：後面是不公開的 backends，他點了 training、pulse、insights、teams；前面是公開的前端和某種 authentication。客戶登入，不知道怎麼實作，通常是因為他們把它弄壞了才會知道。另一側部署在客戶那裡，是故意的：它碰得到客戶的資料，客戶不希望那些處理離開自己的網路。那邊也有自己的前端。一直有功能要把兩邊接起來，managed service 的功能，加上在客戶側收集和處理資料的 agent。

[13:21](https://www.youtube.com/watch?v=tJUAef_dBtU&t=801s) 他可以只描述想要的功能，也相當有信心 agentic workflow 會做出來，然後來一張大約 7000 處變更的 pull request。他要審的是系統問題。客戶側怎麼連到 managed、連到什麼、怎麼授權。這是客戶側元件在跟一個 multi-tenant 的 managed service 說話。Managed 有哪些部分暴露到網際網路，他們對此很小心。給人用的前端，和給 agent 用的系統，會不會共用同一支 API。哪些資料從客戶到 managed，哪些從 managed 回客戶。部署節奏不同：managed service 幾乎每個 commit 都做 continuous delivery；客戶側因為部署在對方系統上，也許一週才更新一次。這種判斷他要留在工程師身上。

[14:29](https://www.youtube.com/watch?v=tJUAef_dBtU&t=869s) 做法是：規劃下一週的工作時，只要有系統層級的決定，就先單獨開一張 pull request，內容是 architectural decision record。他說沒聽過的人可以去搜。ADR 把技術決定和 code 放在一起，讓人很快知道為什麼這樣決定，不必反覆討論。他們用 ADR 很久了。一開始採用 agentic development 時，agent 很愛寫 ADR，看到 repo 裡有，就寫更多。文件變長、變囉嗦，沒有一個人讀得懂，目的就沒了。所以改成先寫 ADR。他本人會花很多時間審，要有圖，要看得懂。人把力氣花在審這些紀錄。結構好的 ADR 一旦在，agent 很會拿實作去對，不只有第一次落地，後續的請求也對。人記不住所有 ADR。後面的 pull request 會悄悄改架構，例如多暴露一支 API，人未必察覺。他們的做法是讓 ADR 持續對著進來的 pull request 審。

## 供應商可以換，採用速度沒有跟著寫 code 一起變快

[15:59](https://www.youtube.com/watch?v=tJUAef_dBtU&t=959s) 就算接受自己不懂 agent workflow 怎麼產出 code，他也把那個生產者拆成三塊。第一塊是介面，多數地方像主題演講那樣叫它 harness：Claude Code、Codex，或從 GitHub issues 出發的自動 workflow。第二塊是托管 model 的地方：直接打 Anthropic API、自己托管，或中間再隔一層第三方。第三塊是 model。黑箱是這三件你不懂的東西。API 可能在下午三點半停。他問有沒有人覺得，等美國人醒來、Anthropic 的 API 掛掉時，自己最有生產力。Model 本身他也不懂，如果有人願意解釋 Opus 怎麼運作，他願意聽。

[17:10](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1030s) 可以選擇不要跟這套 workflow 耦那麼緊。用開源的 harness，Anthropic 掛了就一條指令切到 OpenAI 繼續。結果會不同，每個 model 都不同，但做出數位產品的方式要能換供應商。自己托管 model 會限制能用哪些。開源權重，或至少訓練方式是開源的，也可以。他覺得這些都沒有「能很快換供應商」重要。Production 出事，最愛的 AI 供應商同時掛了，而工程師只能靠那個 model 除錯，那就自求多福。更重要的是理解做出來的產品，因為對方拿不走。那是你的智慧財產。若把互動做進產品裡，黑箱裡還有黑箱，就是另一回事。開發過程裡的 vendor lock-in 可以，雲端供應商、角色都一樣，但要是組織裡的有意識選擇，而且要知道那個生產者在關鍵時刻掛掉的後果。

[18:29](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1109s) 後面講的是已有真實使用者和真實資料的產品，不是綠地、下個 prompt 就走。想法誰都可以有。Product ownership 把想法變成對現有產品的具體修改，還要保持產品連貫。然後有人用新工具去做。常被忘掉的是推動採用，以及評估這個想法到底好不好。每次改產品都是實驗，不看結果、不學習，實驗就沒有意義。Agent 開發的好處是有些回饋可以馬上做。Path to production 如果夠好，人坐在客戶旁邊，可以即時改，再沿著那條路部署出去。

[19:41](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1181s) 他們的經驗是，這條路上各段被 AI 加速的程度不一樣。建造是數量級的提升。給資深工程師時間，現在想做多少功能就做得出多少，只是不一定是對的功能。Product management 和 product ownership 也大量用 AI：市場調查、分析使用者回饋、roadmap、把 issue 修細。但那裡決策非常多。做什麼、以什麼順序做，他不交給別人。所以那一段沒有得到和建造一樣的加速，有一陣還變難了，因為功能給客戶給得太多。新功能在前一個還沒被用起來時就掉下來，採用會更難。他建議去找摩擦：加速不均勻，就會卡在流程裡。

[20:47](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1247s) 最近執行的一條是：工程師對自己做的功能的採用直接負責，不准做完就去做下一個。否則會得到一大堆沒用的功能。如果 product management 沒有跟建造一樣加速，就要預期工程師會去做你不需要的功能，因為好玩。想法變成能跑的軟體，摩擦變低了。他把採用的摩擦和建造接在一起。工程師要先盡一切可能讓這個功能被用起來，才能做下一個。他從軟體開發走到 platform engineering，相信 DevOps 的文化面。他多年來說 you build it, you run it。現在要再加上：你得推動那個功能被採用，不然 production 裡全是沒用的功能。

## 一次只做一件難的，團隊縮小到兩到四人

[21:56](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1316s) 工程師的工作他拆成三步，都在前一張圖的建造盒子裡。技術規劃是架構決定、測試策略、怎麼接第三方和相依。這是用腦的地方，也是寫進 ADR 的東西。然後執行計畫，這段 AI 變得極好，寫 code 可以很放鬆。再來是 refine，他覺得魔法在這裡：依使用者回饋很快迭代。他們用的是 Superpowers 這類工具，他也推薦。Spec-driven 的框架對得上：發想像技術規劃，但不要把決定交出去。它會問很多問題，讓你覺得很有資訊，對的技術設計仍要你自己拿。然後才是寫計畫和執行。

[23:04](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1384s) 以前他花短時間做技術規劃，花很長時間配咖啡寫 code，他覺得療癒，然後驗證和部署。Superpowers 這個名字很貼：一開始覺得自己像超人，因為跟別人一樣可以很快；同時又覺得 AI 慢得令人挫折。設計講完了，為什麼一個 4000 行的變更要三十分鐘。於是大家開始做下一件，再下一件，最後都很累。平行是必要的。公司裡幾乎每個人同時被分到多個任務。但三件都要動腦想系統架構的功能，第一件會很好，第二件變差，第三件就是垃圾。就算沒把 systems thinking 交給 AI，腦子已經用完。原則是可以平行，但一次只做一件複雜的。其他標成可以在 agent 做事時撿起來、再放下的 issue。

[24:38](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1478s) 到這裡都還是個人。他說最難的是讓一個團隊一起用 AI 解決問題。他要的是能運作、演進、維護產品的一組人，不是一個英雄，也不是一套無法被問責的 AI。人要有責任，也要有真正的 agency，同時盡量用 AI 來做。Amazon 的 two-pizza team 把團隊壓在大約 6 到 8 人。他開玩笑說這很荒唐，八個人該有八個披薩，不過美國披薩比較大，就假設兩份餵得了一隊。若不處理，每個人會沉迷這個新遊戲，一直下 prompt。然後是一堆 pull request，他舉了 48 張。最常聽到的抱怨是 review 變成瓶頸。他覺得這很荒謬：抱怨的是我們做出太多有價值的軟體，卻沒時間看。過去幾十年發明那些做法，是為了對系統有共同理解。他點了 XP 和 pairing，後面一個名字字幕聽不清。目標是不要有知識孤島。把採用的摩擦放回工程師身上，他們就不會平行做出那麼多東西。這是好事，因為要的是軟體被使用的結果，不是 production 裡的功能清單。自我價值不能來自你 prompt 出來的功能。這不是 AI 的新問題。人一直比較想把 code commit 上 GitHub，而不是看別人的。AI 把這個問題放大了。

[26:45](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1605s) 他們把平常 6 到 8 人的團隊縮到兩人、最多四人，並給一個任務：讓特定客戶採用軟體。沒有盡力之前，不准開始下一個功能。Standup 上如果還沒跟那個客戶談過怎麼用前一個功能，就不要講下一個功能有多好。這個小分流要自己 review、修 bug、收使用者回饋。他再開一次披薩玩笑：拆成 2 到 4 人的分流之後你會拿到三份披薩，因為兩組不能分同一份。新問題和以前把大團隊拆成 6 到 8 人一樣，大家會走散。有任務、有焦點是好事，所以要想這些分流之間的 product ownership。讓他們隔離工作、審自己的東西，但關鍵架構決定仍要給對的人審。至少要有一或兩個人跨分流，知道全部最後怎麼接在一起。

[27:58](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1678s) 他一直問自己：AI 有沒有改變好的工程做法。投影片上那張速度圖他說完全是編的，沒有真數據。一開始很快，然後變慢，修一點，再變慢，也許最後比起點還低。開始時像在征服世界，後來是一個數位產品的穩定步伐。原因有兩個。技術債是明顯的那個：測試週期變長、相依變多、改 code 變難。Agent 在安全地修改 codebase 上，會遇到和人一樣的問題。另一個是成功，成功不一定是壞事：更多客戶、更多部署、更大的資料集。有些工程做法因此更重要。他只來得及講兩個。系統架構很重要。把東西拆成服務時，loosely coupled 這個詞很重要，否則只是分散式的一團亂。目的是短的回饋週期。功能變多，系統變大。他說的是複雜系統，不是簡單的網頁。每個 component 跑完一套能給他高度信心的測試，15 分鐘是絕對上限。軟體改得更快時，blast radius 也更重要：path to production 上一個實例出錯，最糟會怎樣。做法是設計成一個 component 掛了，產品大部分功能還在。測試類型的例子他沒時間講。

[29:54](https://www.youtube.com/watch?v=tJUAef_dBtU&t=1794s) 收尾是先定義使用 AI 的原則。人必須理解什麼、agent 可以做什麼；你接受哪種相依或 vendor lock-in。找出從想法到採用的真正瓶頸。不要被只量中間一小段的 vanity metrics 吸走，例如 token usage、commits、合併的 PR。AI 之前他用的是 production 裡的功能，那現在不夠。功能必須真的被用，而且要把這個暴露給工程師。用很具體的方式定義什麼叫好，再讓 AI 對這個標準負責。這場會整理成他們網站上的幾篇文章，現場有 QR code。
