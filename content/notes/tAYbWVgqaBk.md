# Tessl Code Review: Catching 74% of Bugs Pre-Merge

Marc 是 Tessl 的 product manager，負責 Tessl Code Review。Colin 是 Tessl 的 software engineer，做了不少 code review 的架構。片長約 26 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=tAYbWVgqaBk)

## 一句話

從 issue 到 agent 再到 pull request，水管好接。難的是那張 PR 裡的 code 你敢不敢合併。Marc 把 code review 放進 software factory 的自我改進迴圈：通用審查是黑盒，改不了；Tessl 自己跑了幾個月之後，抓缺陷的比率從大約 50% 到大約 74%。做法是一組可換成 skill 的 review lens，依路徑挑要用哪一個，審查結果再餵回寫 code 的 skill。

## Factory 卡在信不信得過那張 PR

[1:04](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=64s) Tessl 在做幫人建 software factory 的工具，他們自己已經做了幾年。Marc 說 factory 不只是把步驟接起來。把 issue 交給 agent、生出 code、開 PR，相對直接。真正難的是 PR 裡有你信任、願意合併進 codebase 的 code。

[1:48](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=108s) 要讓 agent 寫出可信的 code，得有對的 context。Tessl 長期在管 context：盤點 repo 裡有什麼、評估好不好、持續改。他們在自己的 repo 上發現，context 幾乎一做出來就開始腐壞，放愈久，對 agent 的傷害愈大。所以要在 context 上加自我改進的 loop：看上次何時更新、對現在的 repo、code、agent 在做的工作還相不相關；也看生出來的 code、合併的 PR 對不對、有沒有開始失敗。觀察之後回到 repo 和 skills 去改 context。Skills 才不會過期，agent 才一直拿到最好的 context。

[3:22](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=202s) 一組互相餵、疊在 SDLC 上的 loop，就是調成你的 repo、你的團隊怎麼工作的 factory。Tessl 從管 context，做到管 loop，再往組成 factory 走。今天只講流程尾端那一圈：code review 的改進 loop。

[4:18](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=258s) 他說 code review 可以說是 factory 裡最必要的一步。Agent 怎麼寫不重要，若產出品質量低到批不準，人就得進來收拾，軟體工程師變成全職 reviewer。Agent 的審查要抓到問題，還要餵回 factory，讓那些問題下次不要出現。

## 黑盒審查改不成 loop，所以自己做

[5:04](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=304s) 他們用過各種 code review 工具，都不符合 factory 由 skills 和 loops 組成的想法。那些工具是黑盒，沒辦法在上面建自我改進。Code generation 和 context 的問題他們用 skills、plugins 在處理，審查卻還是舊的那一套。於是自己做，跑了幾個月，讓它符合 factory 的想法。

[6:04](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=364s) 結果是 Tessl 的 code review 抓缺陷的比率大約 74%，剛開始做的時候大約 50%。他認為跳這麼多，是因為自我改進做在裡面，而且驅動審查的 skills 可以依 repo 和工作方式微調，也會餵回用來寫 code 的 skills。這不是只有 Tessl 用得上。

[6:58](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=418s) 高層流程是：PR 進 Tessl Code Review 的 GitHub app。一組 skills 從不同角度看這張 PR。出廠四個，那四個很好改，也可以自己加。Tessl 經由自我改進又做了三個自己的 skill。這七個會依 PR 挑選。輸出是 PR 上的留言，以及 approve 或 request changes。

## 一張 ambient 音樂的 PR 怎麼被審

[8:35](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=515s) Colin 用 vibe coding 做了一個 ambient 音樂產生器，依據自己 PC 當下的效能和狀態。機器熱起來會更激烈，但因為是 ambient，不會真的很猛，仍然放鬆。畫面上是一張 PR，加了 atmospheric sub bass pulse generator。Tessl reviewer 批准了改動，但留了 optional 建議，其中一條是 telemetry 的小問題。

[9:50](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=590s) PR 一開就自動跑，看改動、標出誤用。留言之後可以修、可以忽略、也可以說這不是真的；他說大多相當扎實。他修完重跑，審查說已經處理，good to merge。GitHub app 用的是原生 check，可以 approve，也可以 request changes。他是用指令叫起 Tessl code review。

[11:09](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=669s) 安裝走 Tessl.io 的 org 頁面、integrations，把 integration manager 裝到 GitHub。還沒裝 Tessl 的人可以先裝 CLI，跑 `tessl agent`，由他們的 agent 帶；或先建帳號。然後在那一頁裝 GitHub app。

[12:02](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=722s) 何時跑：他設成 PR 打開或被提到時；也可以每次 push。行為可以 enforce，用來 approve 或擋住 PR；也可以 advisory，先試水溫。Marc 問第一次是不是該用 advisory。Colin 先說不要，直接 forcing；他用很久了。接著又說，第一次若只想把腳沾一下水，就開著跑一段再看。還有一項：所有 Tessl thread 都 resolve 之後自動 approve，把 thread 點成 resolve、留一句話，它就批准。這些按 repo 分開設，規則可以不一樣。

## Lens 是審查用的 skill，而且可以鎖路徑

[13:27](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=807s) 他展示一支 audio DSP and synthesis engine skill，專門講怎麼審音訊處理的 code。例如 glitch 和 pop 的預防是 must fix：產生的聲音 clipping 或 popping 必須被標出來。這種指示不會出現在出廠審查裡，因為太貼音樂產生。這支 lens 是他叫 Tessl agent 看 codebase、建議能抓到他在意的 bug 的 lens 之後做出來的。Agent 看了原始碼、Readme，以及一些主要文件（字幕寫成 major MDS），判斷 best practice，也放進音訊訊號處理既有的做法。

[15:03](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=903s) 用一份 YAML 黏起來。嚴格程度他設成 relaxed，因為這是 vibe code 專案，除了觀眾不會有別人看。Lenses 底下可以給 lens 的 ref，並指定在哪條 path 跑。Audio DSP lens 只跑在 source audio 底下，免得去審跟音訊無關的 code。可以巢狀很多支，對準 codebase 裡很窄的位置。留言裡會標是哪支 lens 抓到的，這次寫著 audio DSP。

[16:16](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=976s) GitHub 之外可以用 CLI：`tessl code review` 配上剛才的 profile，對本機還沒存的改動跑。開 PR 之前就能迭代。Agent 在改 code 時，也可以先跑幾次審查，希望大部分問題在進 GitHub 前被抓到。改自訂 lens 也適合這樣測：改 lens、重跑、看有沒有抓到你要的東西。

[17:22](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=1042s) 預設四支 lens 在公開 repo 裡，不給 profile 就跑這四支：correctness and data integrity、security and privacy、scale and resilience、maintainability and code quality。他們調很久，認為這組合蓋住絕大多數一般 codebase，不限語言或 framework。Registry 裡有一支 skill，agent 用得到，也可以裝進你正在用的 agent，用來裝 code review，以及隨時做自訂 lens。他覺得設得愈細，對你愈有價值。

## 下週出 beta，以及三個現場問題

[20:32](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=1232s) 產品目前在 beta，還在開發。他們計畫下週在紐約的 AI DevCon 把它帶出 beta。同時會放出第一個公開的自我改進 loop：現在用 beta 做 lens 仍是手動、臨時的；之後可以排程，設一次就持續自己改。這是一系列 loop 的第一個，不限 code review，會放到 Tessl 其他產品。Marc 回到開頭：skills 上面一層層 loop 疊起來，才是 factory。

[22:03](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=1323s) 很大的 PR 或 monorepo：他說單純用預設已經不錯。有用的是 lens 的 custom glob。Monorepo 裡可以有幾十到上百個專案，不會想讓同一支 lens 打在全部上面。後端或某個系統用它自己的 lens，大 PR 就被拆成小段，各段用對得上的 lens。Marc 補：repo 夠大時，lens 可以多到幾十支，但若限定在哪裡生效，就不會叫 agent 用每一種方式審每一張 PR。可以有一支全組織都跑的，再加只在特定地方跑的。

[23:41](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=1421s) 不同 repo、不同種類的改動：每個 repo 可以有自己的 profile 和自訂 lens，codebase 不同區塊也可以不同。還能設 effort：簡單的 lens 用低 effort，複雜或 critical path 用高 effort。每一輪 PR 跑幾次，要看 PR 多大。他們監控裡跑過三千到四千多張 PR，平均一張 2 到 3 輪。大而複雜的會更久，因為人還在改；有些小改一輪就過。

[25:18](https://www.youtube.com/watch?v=tAYbWVgqaBk&t=1518s) 試用可以在 CLI 打 `tessl install code review`，或去網站註冊，onboarding 會帶著做 code review 的設定。
