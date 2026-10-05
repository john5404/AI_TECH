# Paul Stack - The Humans Architect the System, the AI Writes the Code - AI Native DevCon June 2026

Paul Stack 在 AI Native DevCon 2026 年 6 月。原片約 31 分鐘，英文手寫字幕。字幕把 Claude Code、CLAUDE.md、any、Pulumi、merge 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=wuGJNWhUOoE)

## 一句話

人負責架構，AI 寫每一行 code。Paul 要的不是 vibe 出來的程式，是一套可執行的約束：手寫的 pull request 會被刪掉，計畫要跟一個很兇的 adversarial agent 互打，過了五道 gate 才自己 merge。瓶頸從寫 code 變成決定該做什麼。

## 一月把六年的程式庫丟掉

[0:49](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=49s) Paul Stack。他只要 25 分鐘，論點是：人把系統架構出來，AI 寫 code。Code 不再是那件事。上台前他已經踢了一輪他們公司裡撰寫系統的流程，結尾要秀結果。他說從一月底起自己沒再寫過一行。這不是叫大家都該這樣，但不需要再管 code，他覺得解放。過程會講細，而且都是開源。區分是寫 code，以及建造那台寫 code 的機器。Software factory、他口中的 dark software factory，最後都收成很像的流程。

[2:31](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=151s) 瓶頸不再是在軟體裡把想法想完。以前要把一個想法推到使用者、驗證假設，前期得沉很多思考和流程。他之前的公司是 System Initiative，花六年做產品，想改 infrastructure as code。那是他見過架構最漂亮的 Rust codebase：分散式系統、很多 microservice、經由 event bus 交談。一月他們把每一行都扔掉。不是 code 差，是進 agent 時代這個產品對不上，得重想。當時團隊被放下，五個人留下。1 月 25 日從一塊 Miro 開始，整套系統一行 code 都還沒有。上週他們在這套做法上開了新公司 Elder Swamp Club。

[4:10](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=250s) 這場投影片兩個月前第一次講，當時他說兩個月的成果就很興奮；現在他說被做出來的東西嚇到。不是因為是他做的，而是這是他當營運的人一直想用的產品。他在 HashiCorp 做過 Terraform，也在 Pulumi 待過（字幕聽成 Plume），在開發者工具裡很久，意見很強。他來自北愛爾蘭，預告自己可能會罵髒話。

## Vibes 不會擴，手寫的 PR 直接刪

[4:56](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=296s) 他不寫 code 的時候在做什麼？大約兩年前他就不愛寫 code 了。一通 Zoom 上五個人在爭 NATS 的命名，他想發瘋。對方很享受、想做到完美，他不在乎。現在他擁有產品，但只做跟著產品走的架構：設計決定、約束、invariant、讓系統對使用者跨時間仍然連貫的東西。工程師把架構上要什麼講清楚，就會穩定拿到好的輸出。

[6:12](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=372s) 大約三週前他寫了〈The Vibes Don't Scale〉。一句話：不會擴。Vibe coding 加一行 prompt 會走到某個地方，但長期不會是最安全、最有用的工具，而且會燒很多 token。他們要的是具體、不含糊的約束，並且禁止手寫 code。公司裡沒有人能送出自己寫的 pull request，那種 PR 會被刪掉，不是關掉。不是 guideline，是做法。Agent 寫每一行。Repo 裡看得到；他不敢說很棒，一定有你不喜歡的排版。那是品味，是最不重要的部分。他聽過更荒唐的：有人說 class 超過 100 行就該拆成自己的 microservice。

[7:59](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=479s) 他們每天做的是系統設計，以及 agent 必須待在裡面的約束：pattern、boundary、架構限制、必須守住的 invariant，還有過去失敗過、要餵回去免得再犯的事。Agent 會犯錯，還會跟你說它沒犯。這不是文件，是可執行的約束。

[8:54](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=534s) 因為自己不寫 code，也不收別人的 code。他相信開源的規範在 AI 世界沒有跟著變。很多專案被 AI 產生的 code 淹沒，維護者不願意養。Mitchell Hashimoto 做了一個字幕裡叫做 voyage 的工具，要你看著並表明自己不是 agent。他們則是任何形式的 pull request 都不收。不是不信任你的 code——他說他絕對不信任——而是要守住 supply chain。他有 binary 的終端使用者，不想開一個比他聰明的人能注入 code 的攻擊面。Trivy 幾個月前被打得很慘。上週一場小型的 Shai-Hulud，364 個 npm 套件有風險。AI 會大規模生出看起來很像、格式很好的測試和 code。若還得人去讀，就分不出 supply chain 攻擊和真正的變更。所以他們乾脆不收。Issue、feature request、你覺得更有趣的設計規格、code 哪裡不好，這些他收，系統會往前推。

## 五圈計畫、五道 gate，然後自己 merge

[11:02](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=662s) 從想法到 merged code 的流程：先 triage 一張 issue。他們寫了一支 skill，背後是 CLI；skill 就是把正確的 CLI 當 guardrail 跑起來。Issue 或 feature request 先分類，然後進入 plan、generate、review 的迴圈，而且 review 是對抗的。一個 agent 說這是最好的計畫；他寫了一個很脾氣差的 adversarial review：不信任世界上任何 code，要證明沒有 injection、在架構上符合 guideline。兩邊互打，最多五圈。還不同意，人就得進來當仲裁，判斷這是不是對的功能或 bug fix、為什麼。然後才實作。Bug 會再驗證；功能則開 pull request，再過另一輪 review，失敗就回到實作。接著發布，通知提出的人。

[13:03](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=783s) 這不是一堆 shell script。是 skill 加 CLI 裡的 state machine，簡單，但他可以隨時擴。整個系統的入口是那份 MD。他們是 Claude Code 的使用者，也可以換成 AGENTS.md。對他們來說那份檔是可執行的契約，是重心。每次 Claude Code 或 CI session 預設會讀它。他們不靠堆文字。裡面是這種約束：TypeScript 必須 strict；不准 any，因為 any 是魔鬼（字幕聽成 knees）；必須 named export，不准 default；每個檔案頂端要有 AGPL 版權；不准 fire-and-forget 的 promise，免得把人的狀態弄丟。架構上每樣東西都要有 log 和 JSON endpoint（字幕聽成 Jason），都必須從 mods 匯入，內部路徑不能漏出去，那是實作細節。檔案底部還有一句：這次 session 若撞上不明顯、以後的使用者或 agent session 會再絆到的問題，先記下來，提議更新那份 MD，再繼續。

[14:40](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=880s) 測試是 unit、integration、contract、property、architectural，然後 binary 結束。Binary 建好就送到另一個 repo，脫離原本的 context，當成使用者來跑。他稱為舊式的 UAT：跑這個 script、意圖是什麼、跑這條指令、會產生什麼。不要把用詞寫死。上面再疊 adversarial：試著注入、執行中殺掉 process、毀掉資料、刪掉東西。使用者本來就會這樣做，不是故意的。使用者是最好的 QA。進來的 bug 再餵回 adversarial。

[15:42](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=942s) CI 有五道 merge gate（字幕聽成 marriage）。Code review 還是要。Adversarial review：假設一切是壞的，試著證明它壞了。使用者體驗：檢查指令（字幕寫成 CLA），不要讓對外行為退步，指令結構要對，動詞盡量是已知的，例如 create、get，而且這必須編成一個 review 步驟。CI security review：有人會往 pipeline 裡塞東西，要在開始前抓住。最後是 skill check：不只 skill 本身，還有 content、format、layout、trigger。這是硬關卡。系統是給 agent 驅動的，agent 的體驗必須好，內容或體驗一退步就擋。

[17:00](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1020s) 全過就自己 merge。他上台前那張 pull request 就是 agent 開的：第一輪 review 過了，然後一大塊 review 說不行，agent 自己推了修改，在 context 裡重現、確認建議沒問題，然後自動 merge。他們不是在做什麼特別的事，只是信任一個一直在磨的流程。真正送到使用者之前還有 UAT。有人 merge 了，不代表終端使用者拿得到。他們每天都在這層抓到 regression，pipeline 會被擋住，修好之前沒有人能發 release。UAT repo 裡有一行：測試是 source of truth。不要改測試，先查是不是 binary 的 regression。

## 一個月 217 張，瓶頸是想清楚要做什麼

[18:33](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1113s) 過去 30 天開了 295 張 issue，含功能需求，不只 bug。他 ship 了 217，關掉 81 張，是重複或他們不做的。Triage 的中位數是 4.6 小時，這是一天裡流逝的時間，不是工時。從 triage 穿過所有 gate 到出貨是 1.6 小時。五個人，每人一份他稱為 closed code Max Pro、一個月 $200 的方案；整段 CI review 再花大約 $1,500 到 $2,000。現在一個月約 $3,000，出貨比以前快很多。

[19:22](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1162s) 更要緊的是系統學會自己除錯。Swamp 碰到錯誤會把出錯那個版本的原始碼從版本控制拉出來，試著重現，然後替你開 issue，還會先查後來的版本是不是已經修了。Agent 交回來的 bug 格式完整、context 很多。他們不是只在自動寫 code，是在做讓系統繼續跑的那整套。Bus factor 也不再需要：以前總有一個人是半年或一年才會改到的那塊架構的入口。Agent 每次都是全新的 context。過去大約兩個月他沒再跑過 slash clear，因為每份報告都是一棵新的 Claude worktree，範圍很小。

[21:05](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1265s) 最小的起步：把慣例收成約束。坐下來想，若把 agent 放上你的 repo，有哪些事它無法從版本庫自己讀出來。先把那件只有一個人知道的事寫進去。把迴圈跑過一次，它在哪裡斷，就是下一條約束。從小的開始調。不能把 agent 推向整個 repo 然後指望它會好。做對的話，AI 會把你進這行原本想做的工作還給你：解使用者的問題、為終端使用者做系統、做架構和系統設計。上週他寫 intent 是新的架構。前面 Guy 和 Dana 的場次也碰到同一點：context 是新的 code，intent 是往前驅動系統的方式。

[22:55](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1375s) 開講前他跑了 swamp 的 image triage，指令是 triage issue 518。它載入 skill、跑了幾條 swamp 自己的 CLI、抓 issue、讀 codebase 和 operations 檔、給一份發現摘要、把它分類成 bug、說資訊夠了可以寫計畫，然後交出結構化計畫和裡面的 adversarial 警告。他說這不是特別聰明，就是 guideline 和 guardrail。Swamp Club 的 issue triage 和這些 factory 都開源。他在網路上是 stack72，過去四週寫了很多怎麼蓋這套的文章，站是 stack72.dev。

[25:28](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1528s) 有人問瓶頸是不是 Claude Max、筆電，想不想放到 cloud。他說瓶頸是決定要做什麼。他不讓自主 agent 坐在那裡 triage 每張進來的 issue，那會瘋，因為一定有人注入東西。永遠有人先看：這值得 triage 嗎、我們在不在乎。想的是什麼對使用者重要。他可以同時轉起十個 agent；若功能是錯的，只會做出沒有方向、不一致的大系統。

[26:27](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1587s) Agent 談不攏、人要進來仲裁時，context 從哪來？每次跑那個指令，計畫和 adversarial review 都在 swamp 裡存成結構化輸出。他們用 swamp 查：哪些對得上、哪些對不上。看不懂就殺掉 session 重開，大約只丟十分鐘，不是幾千美元。

[27:51](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1671s) 商業模式是賣軟體授權。他說因為大家現在更在乎 supply chain 和可維護性。要 fork、自己建，請自便，授權是 AGPL v3。不能拿去開一家競爭公司，那寫在 terms of service。他們在跟想要這份授權、想要有人維護、不想自己養這套的人合作。

[28:54](https://www.youtube.com/watch?v=wuGJNWhUOoE&t=1734s) 五個人的做法能不能放到上百個 microservice、以及需要領域專家的規模？他轉述 Dana 上一場：guardrail 在的時候，組織裡的人被賦能去做對的事。他們不相信得把公司擴到幾百個工程師。要的是有架構視野、在乎產品能不能用、願意把系統往前推的人。知道要做什麼之後，多個 agent 可以同時跑。他此刻筆電上就有五個。他相信 junior 會變得很重要。現在 junior 進工程組織做的是低階、小塊的 code，因為你不能把整個系統交給他們。以後他們學的是架構約束，不必再那麼在乎語法；code 仍然該讀，但約束和系統思考會學得比以前快。核心那群人要釘在使用者回饋好不好。

有人問：六年的工作扔掉，四個月就滿意，是不是蜜月期。他說絕對是。四個月後他大概已經把系統在底下重設計四次。也許會來一次 Bun 那種用 Rust 重寫——他說他不會。剩下的問題會後再找他。
