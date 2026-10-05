# Why Your Coding Agents Need a Harness, Not a Prompt

Dru Knox 的現場演講，片長 53 分 34 秒，英文手寫字幕。他是 Tessl 的 head of product and design，大約一年到一年半前以 head of AI research 加入，ML engineering、product 和 design 都做。這是一場偏進階的演講，後面有觀眾提問。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=bUtAGFXPc3A)

## 一句話

Coding agent 需要的不是再一段 prompt，而是一組會自己檢查、審查、維護的 loop。Dru 把終點叫做 software factory：agent 的迴圈做出要交給使用者的產品，人在塑造 ticket，並把系統的 autonomy、automation 和 quality 往上推。Tessl 自己在吃這套。連續三到四週，每週送出的 PR 都比前一週多 30%，溝通反而變成最大的瓶頸。Review 常常比自主更早卡住。難的幾乎全是組織，不是技術。

## 工廠在監看流程，不是取代手藝

[0:29](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=29s) 投影片是兩個半星期前做的，已經有三個新詞在說同一件事：loop engineering、software factories、meta engineering。演講題目兩週裡改了四次。他懶得每出一個名字就改投影片，所以混著用，並試著把詞拆開。要開始做 harness engineering，得先把互動式的 coding agent session 用得還不錯。他說的不錯有三個條件。你已經相當規律地同時開幾個 session，不是一直盯著一個 agent。Agent 相當頻繁地一次做完簡單任務，也有一定頻率一次做完中等任務。那不是指它只吐出 code，而是它跑的時候你不必插手。最後，這是一種新的工作方式，很多其實是團隊和組織的轉變，需要 buy-in。不是零成本。他會講怎麼把它做得盡量便宜。

[2:37](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=157s) 他問現場有多少人覺得這在說自己。Agent 變好大概是六個月前的事。從技術變好，到整個房間都在中級到進階的用法，他覺得瘋狂。今天要講的技術，是你怎麼開始走向一個 software factory，也就是把更多工作交給 agent。工廠是不是我們認識並喜歡的那門手藝的結束。他不這麼想。Tessl 怎麼幫忙，他因為有這份工作得講一點，但那之前都是一般技術，不必用 Tessl。

[3:54](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=234s) 他想把工廠說得很簡單。終點是一個 agent 系統，一連串 loop，做出你交給使用者、客戶的整個最終產品。人做的工作是塑造 ticket、塑造任務，然後去改善系統的 autonomy、automation 和 quality。人在監看流程。流程在做那些零件。

## 自主、自動化、品質，要照這個順序推

[4:38](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=278s) Tessl 自己吃自己的產品，他說目前主要就是用 software factory 在開發。他們學到，推出 agent、再走入工廠時，有三個大維度要追。Autonomy 是：要得到對的答案，你得給幾次 course correction。很好量。字面上是幾次人類回合；若它開了 PR，PR 上需要幾則留言。這個指標要追、要往下壓。建造時大致照這個順序走。

[5:26](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=326s) Automation 相關，但不是同一件事。它是 agent 需要多少監督。你可以活在一個世界：agent 其實很自主，你不必糾正它，但它還沒自動化，因為你還不信任。你仍審查全部工作，仍在看它的肩膀，只是沒有做任何修正。這是他們看到人掉進去的主要坑之一。你本來可以委託更多，卻因為各種原因還不能。Autonomy 打開了、automation 還沒打開時，你最早聽到的就是 review 變成瓶頸。Quality 是容易的那個：產品還好嗎。開始用 agent 送更多東西時，你不想送出 slop。Tessl 相信 software factory 和 agentic coding 是通往高很多的品質的門。

## 更快只是起點，backlog 才是他興奮的地方

[6:39](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=399s) 為什麼要委託。除了你想讓股價上去、因為你說你有 AI 策略。多數人談的是更高的速度。多數人從這裡開始，回報很快。系統裡一旦打開相當程度的自主，用 agent 寫 code 會比自己打字快。更大的、也是我們正在過渡的，是送出去的 code 品質也更高。現在有個很大的取捨：你可以更快，但不是在送 slop 嗎，agent 不是在寫奇怪的 code 嗎。有些確實為真，harness engineering 就是用來減輕的。他要退一步，看六個月後，或六週後，誰知道速度。以他做軟體工程的年資，低品質有兩件大事。

[7:49](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=469s) 第一是審查不完整。東西過了 review，因為人走得快，或審查的人並不熟這個系統，帶著某種偏見看。Coding agent 一旦有了好的 agent code review，像終極的 code reviewer。它們不知疲倦，什麼都查。你可以有 15 個，各自很專地查一個鏡頭：security、reuse、usability。也可以跑 agentic QA，讓 agent 去戳。你能投在 review 上的能量和 token，不再被一個人把頭往牆上撞、厭倦審查 code 給封頂。靠近 agentic 採用前端的公司，例如 Intercom，已經注意到過了 review 的 bug 在下降，因為他們把放進審查流程的力氣放大了。

[8:56](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=536s) 第二件，以他的經驗，軟體裡多數 bug 是已知的，只是 backlog 上某個 P2。沒時間修，不是優先。使用者流程常常是知道有 bug、還是帶著它出貨，因為修太貴。所以能把更多工作交給 agent 時，最讓他興奮的之一是 backlog 這種想法大致消失。不是完全消失，但容量大得多，把找到的問題都修掉的能力高非常多。度過工廠的長牙期之後，他認為會看到軟體好很多，尤其是利基用例：以前根本不會被排優先去修的那些人。

[9:49](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=589s) 第三，依定義，誰能寫 code 不再被守門。你可以做更寬的探索，把 GTM、design 的人帶進來。一個半星期前，people ops 有人送出了第一張 production PR，很讓人興奮。對他個人，這也是更有趣的工作方式。寫軟體時，一個雕得好的 module、一個雕得好的函式，有種真的好玩的東西，我們都有罪。對他，好玩的是架構、系統設計、這東西隨時間怎麼擴。他等一下要秀的是，這些在建造工廠的世界裡都還在，而且你幾乎把全部時間花在那件工作上。就算前面說的都不存在，速度一樣、品質一樣、做的人一樣，他仍會選工廠，而不是傳統寫法。你的里程可能不同。

[11:00](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=660s) 該不該建。看大家舉手，你們已經在建。工廠不是一次拆掉再送出新東西。它是漸進的：找出 workflow，放進一個 agent 讀得懂的盒子，互動地跑幾次建立信心，然後自動化。最好一次一個 workflow，一點點推向更高的 automation、更高的 autonomy。更好的問題是你想成為百分之多少的工廠，而不是該不該建。

## 內圈讓它一次做對，外圈讓你敢少看，meta 讓你不用自己盯

[11:44](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=704s) 在 Tessl 看到的、他覺得正在變成業界常態的新工程形式，是不再把焦點放在寫 code，也不再放在看著 agent 寫 code、糾正它的錯。你把焦點放在建造並監看那些自己在審查 code、審查系統健康的 loop。有三個大的。

[12:29](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=749s) 內圈驅動 autonomy。它幫 agent 第一次就得到對的答案。這是你本來就在對着開發的東西：unit tests、linter、推 PR 之前用自己的眼睛做的手動驗證。相對快、相對便宜，反覆跑，對著結果往上爬。若你曾叫 agent 用 red、green、TDD，你就在做內圈。對自己和對 agent 的最大差別是：unit tests 和 linter 現在不必你寫、不必你維護。第一個解鎖是意識到內圈可以煩非常多。Lint 可以迂腐到極點。可以有規則檢查某些 module 不准 import 另一些。以前你會告訴自己這會 bit rot，別做，大家討厭。現在它一失敗，agent 看見、明白、修好。所以每次看到 agent 犯錯，就該想：我怎麼把這放進一個檢查，讓它再也不發生。你會得到巨大的 lint、巨大的測試套件。過一段時間會想拿掉一些，所以要有流程重新評估還需不需要。另一個是產品對 agent 好不好用，它能不能用 CLI 碰到。

[14:23](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=863s) 外圈建造 automation。理想上是一組較慢、較深入的檢查，堆起你對「這張 PR 是對的」的信心，讓你少花時間審查每一段 code。起步的基本款是 agentic code review。能做多少就做多少。他說 Claude Code 估計一次 PR review 大約 25 美元。聽起來瘋，但再想一個人會花的時間，也許沒那麼瘋。Tessl 認為可以便宜很多，所以別擔心，25 美元不是 PR review 的市價。但你會感覺這些東西更貴、更費事。他們發現很有用的，是拉進一個盒子：把產品建起來、跑起來，讓 agent 點過去、截圖，把動作中的東西給你看，你再審查。Cursor 也有工具做這個。任何不適合在 agent 建造當下跑、但你想看了才有信心它能動的東西，都是外圈。

[15:35](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=935s) Meta loop 基本上是剛才說的一切打開自動駕駛。你會先做內圈，再把 code review、agent QA 收拾整齊，然後你會非常厭倦自己做這些，於是開始設一些看著它的 agent loop。一個 agent 看過去一週所有 CI 檢查，說這三個錯一直在犯，我要加 lint 規則，讓它們進不了 CI。或 agent 犯了這三個錯，PR 留言說不要這樣做，讓我收回來，加一個 skill，或在這個區域加 unit tests。Meta loop 是回饋進去的那一層。你最終大部分時間會花在造 maintenance agent：它們看著其他一切，做變更，你審或不審，看你的舒服程度、以及技術棧那一段有多重要。

## 難在你不想丟 PR，以及 OpenAI 那份五倍

[16:42](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1002s) 他希望剛才聽起來不複雜。大多是有好的 unit tests、好的 lint，對放進那些套件的東西再挑剔一點。然後就是有問題就用 agent 修。那個 loop 相當直。Harness engineering 難，答案幾乎完全是組織的。對很多人是不同的工作方式，而且不好玩。他會講怎麼讓它好玩。知道怎麼寫一個好的 agent、何時該擁抱新技術，知識一直在變。跟上很煩，那不是你的日常，你想送功能。

[17:34](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1054s) 一部分感覺像計畫外的工作。你在做一件東西，開一張票，agent 撿起來，開始做，然後壞了。Harness engineering 的答案不是叫 agent 去修。停。把那張 PR 丟掉。回去想：什麼能讓 agent 不會犯這個錯。會是 unit test，會是 skill。做那個變更，再擲一次骰子。希望這次成。不成就再丟、再做一張。沒有人喜歡這樣工作。像吃角子老虎，而且是最糟的那種。做完、最後送出去了，你兩小時前本來就可以送，只要當時直接改。很難向老闆或客戶主張：先去做一點科學，不要先把功能交給客戶。最後是可讀性很差。大家開始用 Claude Code，都在犯這些錯。你沒意識到大家在犯同一個錯、或撞上同一個痛點。很難知道，我們是不是都在 codebase 的這一區有問題。它是慢慢從談話裡出來的，或你發現某些區域比較難做。很難快修。

[19:19](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1159s) 若只能給一個建議，從這裡開始。改變你跟 agent 工作的方式。就算你用 Claude Code、Codex，什麼都一次做完，貼上 prompt、切走、它開 PR、你在 PR 裡做、再回到 session 裡改、繼續。改成：我開一張票，它在背景做，開出 PR，我在 PR 上留言，它自動撿起來改。感覺幾乎一樣。他保證不是。不信的話，OpenAI 有一份白皮書：他們把那些一次做完任務、在互動 session 裡完全不互動的人，改成走 ticket 和 PR。兩到三個月裡看到五倍的生產力增加。原因之一是逼你一開始就做對，因為你不能快速 course correction。你不能說等等、不要刪資料庫。沒做對，它就刪了。他補一句，他們知道它不會刪資料庫。另一個原因是你和 agent 的互動都落在一個讀得懂的表面上：ticket，以及帶留言的 PR。於是很容易再指一個 agent：把上週所有留言修掉。任何反覆的任務或反覆的回饋，找一個能修掉它的 codebase 改進，開一張 PR。這讓 harness engineering 的 loop 變容易。更重要的是，你不必再 revert 然後重試。留言、讓它修，另一個背景流程替你做 harness engineering。或你自己做，但至少你收得到自己留的所有留言。看起來小，卻是走向更多 automation 最關鍵的起步解鎖。

[21:50](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1310s) Issue tracker 和 PR review 成了你駕駛、糾正 agent 的主要介面之後，你會開始長出很多 workflow。給 CLI 加功能的 playbook，怎麼做 security review，PR 之後怎麼寫或更新文件。你會從五個開始，一週後有 1500 個。它們瘋長。你得想怎麼分給團隊上的人，怎麼確保大家有好的那份，怎麼不要一遍遍寫同一份，以及你更新一份時好處到每個人。Registry，想成給 skills 的 npm。

[22:41](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1361s) 他稱為 agent IT 的，是 software factory 的壕溝戰。你會震驚有多少服務依賴一個人在某處登入。不在專案裡，只是全域的：我有這個功能的權限，我有這個資料庫或這些 log。每一個都是 agent 做不了的那類功能。這有點苦工。開 PR、開 issue，發現 agent 做了蠢事，然後說它需要自己起一個 sandbox，用 Playwright CLI 把產品點過一遍。然後發現沒有辦法在沒有某樣東西的情況下登入。像打地鼠。你會想要一個 company brain：把你知道的東西放進去，Slack、Notion，或其他人用的工具。他還點了 Google Docs、Quora。內部服務，為了除錯 production 問題要給它存取，大概只讀，把一些資訊拉進來。然後 agent 真的能跑的環境。他確定很多人看過筆電開著走路的人。他們的 head of legal 開著筆電走，說我現在是開發者了。那是真的，她在送 production code。理想上在雲上，不在你的筆電上。中間投影片掉了，他怪 Claude 推了更新。他說若有人沒用 Claude，這不是付費廣告，但做投影片太好了，他再也不用手做投影片。

[24:56](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1496s) 最後一塊是那些 meta：怎麼到一個你不必自己找、不必花時間修所有這些零件的地方。改到 issue tracker 和 PR 流程，就是從這裡開始回本。Tessl 叫它們 maintenance agents。看過去一天的一切：agent log，因為它們跑在他們有存取權的雲端環境；issue、PR 留言、CI 檢查。開始提議修法，再開 PR。低風險區域就合併。重要的 production code path，人來審。這裡會出現這類功能的 playbook，而且可以很專：給前端加功能，或給前端裡的 eval 表面加功能。任何能修 agent 輸出的東西。也可以開始找任務：看我上週開的所有 issue 或 PR，告訴我過去 90 天或過去兩週我重複了什麼，向我提議自動化。你想盡量活在回應建議的世界，而不是得自己主動出力。你想把時間花在為客戶做功能，不想做自己的內部開發。早上醒來有兩、三張 PR，看起來合理，接受。比昨天更 AI native 一點，然後回去出貨。

## Tessl 想做的是讓這件事變好玩

[26:43](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1603s) 接下來他說有點像廣告。Tessl 幫以上全部。他們把自己稱作建造 software factory 的平台。你想把更多工作交給 AI，沿路會有很多問題。Tessl 試著幫你找到那些問題，並有工具讓修改變容易。你不必用他們。他們試著 batteries included。事情一直在變，所以有一個 agent 介面，試著抓住他描述的很多最佳做法。打開 Tessl agent，說幫我設定 code review，它知道好的 agent code review 長什麼樣。下週變了，它會進來說又變了，抱歉你在休假，並帶你走過那些差異。他們也非常努力地開放、模組化。積木提供跑不同 workflow 的軌道，但驅動它們的資訊是活在你 repo 裡的標準產物。Code review 工具由 check in 進 repo 的 skills 驅動。想搬到別的地方、想用別的工具，都在那裡。你有控制權。沒有藏在黑盒子裡。因為都是寫下來的檔案，用或不用 Tessl 都容易在周圍做其他自動化。同一個 code review skill 可以在 CI 或本地用，團隊也可以打開讀：我們相信這是我們的 style guide 嗎。他們也努力讓一切自動化。Tessl agent 坐在那裡爬，看 PR、issue、CI，找到改進之後會問：要不要我每晚替你看。它會把自己自動化。採用是漸進的。不必整個團隊買帳、停工三個月去建工廠。一次做一件。

[29:10](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1750s) 他講的 control plane 有一個 skills registry，或 plugin registry。該有的都烤進去：私有和公開 registry、品質審查、跑模擬 eval 看 plugin 是否真的幫到 agent、安全檢查、安裝政策。把 workflow 在公司裡傳來傳去需要的東西。預設的 app 幫忙從 issue tracker 交到建立 PR。內部他們用 Linear 和 GitHub，從那裡開始。若你在那個 stack 上，恭喜，工具選得好。若不在，工具選得也很好，但 app 還在來。他們想聽你最希望他們做什麼。還有一批開箱的 code review 工具。若你在 code review 上花太多時間，他們可以幫你拿掉一些痛。

[30:13](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1813s) 他簡短秀 Tessl agent 跑在他們的 monorepo。他認為這是讓 harness engineering 變好玩的方式。它做的第一件事是幫你發現可以自動化的工作。找你一遍遍做的任務。可以很簡單：每週你在某幾組函式庫上 bump dependencies。也可以更進一步：每週你在開關於測試 flakiness 的 PR，於是他們自動化了一個會去搜那個的 agent。Maintenance agent 有很多開箱就做：讓文件保持最新，搜 agent 在浪費大量 token 的區域，然後建議你可以寫一個 CLI，agent 就會知道怎麼用。看 code review 的回饋，把它翻譯成 codebase 的改進，像是 agent readiness。Tessl Launch Skill 給一個標準方式，去跑你喜歡的 coding agent：Claude Code、Codex、Cursor，以及雲端環境裡的 Cursor CLI，一次簡單的 CLI 呼叫，可以放進 GitHub Actions。於是你開始得到雲的好處，而不必買進一個巨大的編排框架。

[31:44](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=1904s) 有了這些之後，走向工廠時你想看、想往下壓的是手動接手的次數。在這個新世界裡會明顯很多，因為就是 PR 上人類留言的數量。也可以是你把一張票拆開的次數：你自己把票分解了幾次。系統裡的人類觸點。然後你想拉高由 agent 自動發起的 PR 數量。這是 automation 在增加的好訊號。多半由 maintenance agent 驅動，大多是把你自己的 codebase 改得更適合 agent。過一段時間可以接上 production log 和 bug report，然後一張你只審查的 PR 就開出來。當然要改善 codebase 的品質。他主張不要一次全做。先以品質不要退太多為目標。第一件會逼出來的是：我到底怎麼量品質。那會是它自己的一場唐吉訶德。有了之後，再看怎麼真的追求提高你送出的 code 的品質。不要只說我更快了，但 code 一樣或稍差。他認為你可以瞄更高。

## 問答：什麼能自動合併，以及人還在定品味

[33:35](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2015s) 有人問完全沒有風險時，你們出不出功能。目前沒有。他們還在把品質門檻拉高，所以任何碰到 production、碰到真正終端使用者端點的東西，仍有人類 code review。有幾個但書。他們試著把 codebase 切塊，整份資料夾或小節是安全的：編排他們自己 agent 的那個 harness、文件、unit testing 的函式庫。那些允許自動合併的 PR。他覺得已經是多數，再加上 agent 自己找到東西並改進。若你用 Tessl，他們叫它 change risk analyzer。它依你和團隊同意的政策掃描 PR。很多公司為了合規在做這件事：你得能指出一份產物，這就是決定我們 code 品質標準的東西。你設政策，agent 審查每張 PR，說這張需不需要大量人類審查。他們開始實驗，但還在校準，所以仍審查一切，來決定它行不行。

[35:15](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2115s) 另一人說業務告訴他們，把圖拿給 agent、把 harness 全拿掉、只寫漂亮的 skills。以及文化：老闆為一個新專案寫了一張大約 10 萬行的 PR。內部沒有討論怎麼塑造寫 code 的文化、怎麼放指引。若大家都和他一樣，你寫一份提案沒人看，然後開票就開始做。Dru 說先從容易的問題開始。Skills 對上你在周圍建的 harness：模型一出，你該有流程重新評估包在 agent 周圍的膠水。他無恥地推 Tessl：有一套 eval，看有 plugin 和沒有時幫不幫得上，於是你能指出升到他口中的 fable 時，能不能丟掉很多。專門用來修錯誤的 skills 和 hooks，壽命短。做幾個月，拆掉，換下一個模型。最後留下的大多只是描述 workflow、標準、政策，也就是我們在這裡怎麼工作，任何智力水準都需要的東西。答案主要是：要有辦法定期評估，這還需不需要。

[37:27](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2247s) 文化改變，誠實的答案是他們沒有全部的解。值得對周圍每個人有一點寬容，事情變得太快。Tessl 內部談很多溝通。最大的瓶頸變成跟上 codebase 變化的速度。連續三到四週，每週送出的 PR 都比前一週多 30%，而且沒停。人說我連旁邊的人在做什麼都不知道，更別說團隊其餘的人。這是新問題，還沒有解，得自己摸。有幫助的幾件。起點是得為溝通留時間。我們習慣讀文件、開會是工作的必要。以前要開 PR，你得跟這些人談。現在人只是把 agent 指到一切，摘要會議、摘要文件，自己不讀。在找到更可持續的做法之前，他聽過最有效的是每週五一小時，所有人坐下，談自己做了什麼，問問題，把文件彼此分享並讀。這是權宜。任何靠紀律的東西都不是永遠的解。那張 10 萬行的 PR，他只能致哀，相當粗。他們開始注意到的一件是：風險驗證器若說這張不需要人，理論上可以自動合併。他們仍在審，確認它運作良好。但若你把對的東西寫成規則，一張小的、包住的、疊在上面而不是一整塊的 PR，若那些變成低風險，人的行為會開始移，因為他們不想要人類審查。於是會把一張 2 萬行的 PR 拆成一堆 200、300 行的，因為那樣就會自動合併。有些情況的答案是我們一直知道為真的事。若你把它寫成遵守了比不遵守更容易的做法，人會自然開始做對的事。這些是部分答案。文化改變是大家都還在弄的事。

[40:16](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2416s) 多常審查 PR，票的範圍改了多少，才能得到更好的輸出。今天他們仍審查每一張進 production code 的 PR。希望以後不必那麼多，但想先有相當嚴格的品質控制。大約 24 個工程師，上次查大約每週 700 張 PR。PR 大小、複雜度，很多指標在做這件事的過程中相對持平。他們開始談的大事，是能不能把審查從單張 PR，移到你擁有一個區域、圍繞它定義一些品質指標，然後每 50 到 60 張、或每十張，依系統有多複雜來定，在更寬的一片上審查，讓你跟得上 PR 的量。更大的一件是相當重的 agent review，建造的 agent 會自動回應。到人手上時，多數低垂的果實已經被摘了。他覺得多數人花最多時間的地方，他看著工程師們要他們揭穿他若他在說謊，是把 PR 拉下來、建起來、點過去，確認它好用。他們在想怎麼讓那本身變成自動流程。

[42:21](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2541s) Company brain 接上 agent 之後長什麼樣。公司技術棧的架構、沒有用的會議紀錄，有用和雜訊的線畫在哪。他愛這個題目，像每個說過要自己做待辦追蹤器的人。短答是沒有一個答案，很看你的情況。更好的問題是：怎麼判斷什麼對你有用。定義一個 plugin 時，它可以包含 skill 和 MCP server，那通常就是你把 company brain 的某些面交出去的方式。然後圍繞它做 eval。Tessl 的工具會幫你定義模擬任務，例如做一張需要 Notion 或這些會議紀錄裡的資訊的 PR，跑了看幫不幫。不必用 Tessl。Claude Code 有內建的 eval，會起一批東西來試。最好的答案是有和沒有都試，看什麼有幫助。經驗法則：原始來源往往更划算，因為你不必花很多力氣。Tessl 用 Granola。把一份 Granola 逐字稿接進去幾乎總是有用，尤其是一對一。剛打完這通電話，你能做這個動作嗎。感覺很好。文件他們用 Notion，有幫助，但過時非常快，過時的資訊是大問題。所以不要隨便接上之前，你想要某種解法或流程。他承認 Tessl 還沒有。他們在談剪掉不再相關的東西。Agent 會讓這更糟，因為你走得更快。Slack 也還不錯。這些動態資訊來源，最有用的時候是你談了一堆，然後說我準備好做這件任務了，再把一張 issue 指到那個來源。給它 Notion 的存取，但告訴它拿這份文件、做文件裡的那件事，或拿這份逐字稿、做逐字稿裡的那件事。

[45:17](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2717s) 全新專案、技術棧每兩三週就在換，這套怎麼用。Greenfield 其實容易不少，因為你不必處理組織改變，而那才是限制。現實地說，挑一個，然後從一開始就想內圈、外圈和 meta loop。若要再偏見一點，他看到人走兩條路。一條是極度押在分布上：TypeScript，字幕接著聽成 with white，然後 React、Next.js 那類，希望 agent 從第一天就盡量做對。另一條是挑一種真的討人厭、非常型別安全、編譯檢查很多的語言。Rust 正在有它的時刻。Elixir 有一陣子被 OpenAI 隨口提過。那種情況他會非常用力靠內圈，放上瘋狂的檢查。他大概說得像比較喜歡 TypeScript，但他已經開始用 Rust 做很多 side project。它的工具鏈非常整合，套件管理、測試套件，都不是 agent 能搞砸的東西。就他個人，非常挑剔型別的語言，加上一套很整合的現代工具，是條好路。然後是 GitHub Actions，把一批東西自動化。

[47:16](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=2836s) 有人問重複出現的問題、要搜公司歷史上所有對話，context 很快就滿，是不是在用向量搜尋。現在沒有，他們只用 agentic search。這裡的救贖是：要從 agent 得到好輸出，任務得相當聚焦，於是它們吃進去的 context 也相當聚焦。不要有一個 maintenance agent 只是說請把它變好。要說：你看複雜度，例如他講的過去十年，在看起來太大的地方改進；或專門看測試覆蓋低的地方，判斷那合不合理。他看到業界在「軟體工程作為一個職業是什麼」上走的方向，其實是大量創造並監督這種 maintenance agent。會有一個 code owner，想著所有可能出錯的方式，然後造 guard rails、造檢查。它們會非常細，那也有幫助。然後 agent search 的彈性勝出。檢查重複問題是專門的。他們還沒多到讓 agent 去建議 agent。六個月後再來大概會。它只是一直往堆疊上面移。然後你在造那個找 agent 的 agent，而且感覺持久。有些談超級智能的人會說，你終究會把任務做完，agent 會全部做掉。他的哲學是：我們已經有 AGI coding agent 八十年了，只是當時叫它們 software engineer。就算在那個世界，我們仍需要懂技術的經理。CEO 不是設完營收目標就回家。他們對該怎麼建有意見。下面還有 PM、設計師、架構師有意見。他認為持久的那一層是人的品味、人的慾望，知道什麼是該做的對的東西。意見一旦摸清，建造會愈來愈是 agent。

[50:24](https://www.youtube.com/watch?v=bUtAGFXPc3A&t=3024s) 最近到處都有 code review 功能。Tessl 的和外面那些，價值差在哪。誠實的答案是，為什麼是任何人的 code review：它們都在做同一件事。他們用 CodeRabbit，也很愛。正在用自己的工具換掉 CodeRabbit。第一，他們覺得這不是很有差異的東西。沒有很多理由為一次 PR review 付 25 美元，而那件事最終是和團隊同意一個 skill，再 check in 進 codebase。他們認為可以便宜很多，而且這大概是你該擁有的東西。它是你工程紀律的一部分。若要更技術一點，他們有一個叫 verifiers 的概念。非常小、非常便宜、非常快、由 LM 驅動的 lint 規則。例如每個 React 元件都該有 aria 屬性。非常針對的檢查，你拿三年前的 Haiku 來跑，大概也能做對。也許不是三年，但你懂意思。想法是把很多東西從那個又大又貴又重的 agent review，移到這些非常快、非常便宜的 verifier。那讓你做兩件事。往左移，它變成內圈的一部分，而不是外圈。第二是便宜非常多。他們覺得每張 PR 上跑著超過 100 個 verifier。費用他會丟一個方向正確、但別拿他準的數字：用它做一整天的 PR review 大約 0.30 美元，而一次 agentic review 大約 25 美元。他們覺得這相當聰明，也相對有差異。更大的一件是它全部嵌進更寬的平台。你做一個 code review skill，可以在 registry 上分享、可以 eval、可以拿去做別的事。有人問是不是把決定性的 linter 和其他檢查綁進同一次 code review。他們提供的多數流程是 LM 那一塊。但 Tessl agent 會幫你把決定性的東西也設好。在建立 agent review 時，第一件也會幫你做出第一個 review skill。它會推你去看 CI/CD，若你還沒有，也許先加上。他說可以在台上待一整晚，之後會在場內走，歡迎來找他。
