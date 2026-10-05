# Harness Engineering: The New Discipline of Agentic Dev

Dru Knox 在舊金山 AI Engineer 的場次。片長 49 分 5 秒，英文手寫字幕。他是 Tessl 的 head of product and design。前面是一段訪問，後面是他的演講。訪問的主持人字幕沒有自報姓名。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=D_cw-k0F1DM)

## 一句話

Software factory 不是終點，是把愈來愈多工作交給 agent 的一路。先讓 agent 少被糾正，再讓人敢少審查，品質先守住，最後才升高。做法叫 harness engineering，最近也有人叫 loop engineering：內圈在 PR 之前便宜地自查，外圈在 PR 邊界做貴的檢查，meta loop 看漏網的錯，讓同一個錯只犯一次。難的不是技術清單，是人沒有時間做這件沒排進計畫的工作。

## 三個指標，三個圈

[0:47](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=47s) 演講給已經在用 agent 的人。你同時開多個 session，簡單任務常常一次做對，中等複雜度有時也不用太多人插手。下一步是幾乎所有端到端的產品都由 agent 系統交出來，工程團隊改去提高 agent 和周圍系統的品質：更少插手、更少自己審查。最後的夢是，因為工廠的產能，做出比以前更好的東西。

Tessl 不把 factory 看成 AI native 之後的一塊巨石。把更多工作委派給 agent，你就在這條路上。不必很複雜，也不必走得很遠，就可以開始用工廠來想。三類。Autonomy：人要糾正幾次才到對的答案。很高的自主是給 Claude Code 或 Codex 一個 prompt，它跑 30、40 分鐘，結束時是對的，不用改。Automation 聽起來像，其實是你允許多少在沒有人看著的情況下被做出來。可以很高自主、很低自動化，因為你不信任輸出。信任要靠用工具、知道它哪裡會成功，也靠 harness engineering。Quality 是給使用者的產品有多好：平常的使用者分析、測試品質、覆蓋率。順序是先把自主拉高，才能走向自動化，同時把品質守住。工廠的回報是之後可以把品質做高。

[4:00](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=240s) Inner loop 是 agent 在做的時候自己迭代的東西：plugins、skills、測試。要快。Agent 邊做邊查。愈好，愈容易落到對的解。在一個 repo 裡，幾乎全部應該共享。Tessl 做自己的工廠時禁止本地設定。改進要進 repo，大家一起變好，才有複利。跨組織、跨幾個 repo，有些是專屬的：某個 codebase 裡做某個功能的 workflow、hooks、測試。風格指南、design system、安全政策要分享，而且幾乎是規定。

Inner loop 跑到 agent 開出 PR。Outer loop 在 PR 邊界。更慢、可能更貴，不適合讓 agent 無限空轉，但若能取代人的審查時間就值得。這裡放 agent QA，讓 agent 照腳本試產品；更深、更貴的 code review；還有 Tessl verifiers。希望它們一開始就是綠的，你也這樣規劃。它們給你信心：不必把 PR 拉下來手動驗，也不必讀每一行。Outer loop 幾乎只跑在某種 CI hook。希望內圈已經抓到幾乎一切，外圈只是最後閘門。

[7:07](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=427s) 第三個是 meta loop，包在外面，連續學習。內圈和外圈不會完美。東西會漏，你會審查、留評論、CI 會失敗。Meta loop 在背景看這個過程，自動建議怎麼改內圈或外圈，讓一個錯只犯一次。不要把同一件事跟 agent 講第二次，才把它寫進某個圈。一開始 meta loop 是人。那會讓你卡在局部最好。愈自動化，才看得到 agent 能自己做的量呈指數上去。

瓶頸會移動。先是 agent 開不出好的 PR。然後 PR 好了，你仍不信任，還得審查。他覺得產業裡很多人停在這裡，code review 是新的瓶頸。外圈幫你過這關。然後人才想把任務加大。現場有人在講 token max，怎麼讓一個九小時的任務跑到完。那種極端的好結果，要靠 meta loop 慢慢把 agent 系統的品質往上 ratchet。

## 先有看得到的控制面

[10:31](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=631s) 沒有人是走出一扇門就得到一座工廠。Tessl Agent 可以照你準備好的速度長。設計來自他們把自己做成工廠時踩到的痛，客戶也大致按同樣順序撞上。第一件事是 control plane。Meta loop 要觀察系統、找常見錯誤、把它們變好。若回饋鎖在不透明的地方，做不到。回饋放在讀得懂的地方，其他都會變容易。聽起來很進階，卻是起點。

他們訂了幾條。不再有人寫的 code。不再有互動式的 coding agent session。後者在現場引起倒抽氣，沒有人想被拿走 Claude Code 或 Codex。他說沒有聽起來那麼極端。若你已經在管多個 session，簡單到中等的任務常常一次做完，他們要移去的地方是：開一張票。他們用 Linear。Agent 撿起來，做到開 PR，你對 PR 做 code review。很多人發現自己已經這樣做了：叫 agent 去做，切到另一個分頁，完全無人看管直到做完，然後在本地審查，等於用聊天介面做 PR review。做了之後，一切經過持久的帳本。Issue 裡是最初的 prompt。PR 裡是全部回饋。都在耐久、用開放工具拉得下來的地方。這是連續迴圈的地基。

[12:42](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=762s) 他們做了自己的小型 orchestrator。他說沒有聽起來那麼難，而且你會想自己擁有，才能照公司需要改。研究團隊的 Maria 做了第一版，用了自己的 GitHub 憑證。有幾週，所有 PR 和後續評論都從 Maria 來，她衝上貢獻榜。對她好玩，對她的通知匣不好。生產力數字會好看穿幫。你很快需要 Linear app、GitHub app，而且要能互相說話：把 issue 委派給那個 app，再在 GitHub 上跑。任何人想把票交給 agent、讓它開 PR、回應回饋，都會碰到身份、webhook、怎麼反應 PR 上的評論。Tessl 把自己用的做成 Tessl Linear app 和 Tessl GitHub app，很基本、很有意見，只是把兩邊接起來。你可以定義標籤、票裡放什麼、GitHub 上跑什麼 workflow。身份他們處理。Tessl Agent 不強制你用。

現成 orchestrator 從 0 到 0.5 很好。要做到能一直在 production 用，團隊和公司有太多小脾氣。讓黑盒擁有整個 SDLC，很快就會磨人。字幕說 quickly greats。他們要能設定、要能拉進喜歡的工具。所以幫人建工廠的方式必須開放、模組化。有預設，不想管就可以開始。也容易拔掉，換成自己做的或喜歡的。沒有一家會在生命週期的每一段都是最好，就算是，也不會對上你流程的每一個怪癖。Linear app 和 GitHub app 都可以拔掉。

最後要有地方跑 agent。可以從 GitHub Actions 開始，他們也是。很快會撞上：不便宜、不是為多小時的長任務做的、要一個 sidecar 去更新 GitHub token、權限常常不允許再觸發後續 CI/CD。他們做了一個小工具 Tessl Launch Skill，一個 CLI，把 workflow 編成 skill，丟進 Tessl 代管的雲端容器。不強制。預設會用對的身份貼文，帶著 GitHub 憑證。合起來就是：開票、觸發 GitHub workflow、選一個 skill、在更適合長任務的雲端環境啟動、skill 再回 PR 留評論或開 PR。目前聚焦 Linear 和 GitHub，因為他們自己用這些，其他服務還會來。

[17:29](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=1049s) 組織開始建流程時容易分析癱瘓。最好的辦法是先開始，弄清什麼能用、什麼要改。要先住進房子，才知道家具怎麼擺。成功走向工廠的客戶，和他們自己，都看到同一件事：把工作方式一次 lift and shift 成一整塊，注定失敗。產業還在快變，承諾三個月的建置，三個月後樣子會不同。風格指南人人知道有多痛。比較會留下的做法像一顆倒過來的 jawbreaker，一層一層加。找一個大家大致同意的 workflow，框起來，設成自動。或找幾份做功能的 playbook，加成 skills。新功能時在 issue 上貼標籤來用那個 skill。幾個月後你也許發現 60% 已經自動化、不需要人審查。從來不是一大步，也不是全隊先對齊。一段不行就拆掉換。Tessl Agent 內化的是一次一個 workflow，不是把你從今天遷到工廠。

## 審查抓沒想到的，verifier 鎖住犯過的

[20:06](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=1206s) 很多人最先想加的，是更長的 agent 流程裡怎麼審查。控制面就位之後，他們下一個大問題是 PR 太多，怎麼審得更有效。就算還沒走到從 issue tracker 到 PR，被審查淹沒已經是痛點。他們一再碰到三塊，先講第一塊：一般的 agentic review。不是人坐下來拿一份規則看過 diff 的每一處和其餘 codebase。要有別的東西先掃過，清掉低垂的果實。他們做了 Tessl Change Review，一個指令。內建幾種鏡頭：安全、可讀性差的地方、沒有重用平台既有零件的地方。經典例子是用了標準 logger，而不是公司自己的 logger。還有一些，覆蓋他們覺得常見的檢查。它由 skills 驅動。你發現還在乎風格、無障礙、視覺設計，就加一個 skill，讓這次審查也看。預設是五個鏡頭。內部的 Amy 對預設 plugin 給的有用洞察非常興奮。

模型變強之後，兩件事。更好用，不必整隊把 code review 指南 prompt engineering 到極致才有好結果。更重要的是把好的工程原則平白講給 agent。自己擁有 code review，比一年前入門的人以為的容易。Agent 看得深，也讓他看清：agent 寫的 code 會走向更高品質，不是更低。現在有人說，走進工廠就是用較低品質換較高吞吐。他覺得那是遷移期的短期。他們把這五個鏡頭用在人寫的 PR 上時，工程師抱怨回饋太多、沒時間修、小題大作、現在不重要，也許一年後規模大了再做。那些是真問題，能提高送出去的品質。另一頭若是 agent，反應是好觀點，去修。容量在那裡。不再有 backlog 這種東西。Agent 找得到的問題就能被修。中長期他希望 code 品質更高、更快、也更好做。字幕把 shipping 聽成 worshiping。

[24:47](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=1487s) 若給 agent 一大張要常常檢查的清單，它也許做到 80%。一般審查擅長抓大類、沒預料到的問題。下一個最大來源是你叫它做的一長串，有時被忘掉。95% 好，5% 搞砸。大概比人好，但他要 100%，要鎖住。他不要一般 code review 變成洗衣清單：每個前端元素都要有 ARIA、每個設計都要用這個綠色的 hex。他們做了 verifiers。想成很小、很快、很便宜、由 LLM 驅動的 lint。通常從 repo 裡的 skills 看起，但不一定要用 skill。你定義一個想要為真的不變條件：每個前端元件必須有 ARIA，這些是我們的設計色，每次 logging 必須用內部的 logger。Tessl 幫你做成針對性的 LLM 檢查。你給一組 glob，可以是整個 codebase，也可以縮小來省成本。問題很窄：這個檔案有沒有缺 ARIA 的前端元素，有沒有呼叫不是這個 logger 的 logger。範圍很小、黑白分明時，成功率很高。他說現在問 agent 這個 JSX 元素有沒有 ARIA，100% 會對。一年前，人還知道就算直白的指令，LLM 也可能錯。現在可以平行跑，快、便宜，他們加進 lint 和測試。Agent 開 PR 時有一顆綠勾：skills 裡說過的、以及你看過 agent 犯過的每個小錯，這裡都沒有。審查抓你沒預料到的。Verifier 抓你看過的，讓它不再發生。技能會不會被啟動，取決於 agent。這些檢查每次都會跑。

## 演講：工廠為什麼值得，以及為什麼人做不到

[28:50](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=1730s) 演講裡他再定義一次。沒有嚴格定義，術語變得讓他挫折。大致是：送給使用者的端到端產品全部由 agent 做出來，工程團隊去建工廠，讓它更自主、更自動、品質更高。團隊上的每個人變成內部工具的建造者，系統才是在生產產品。先提高自主，再提高自動化，品質保持不變。回報在最後。多數人把工廠看成更快出貨：會有一點 slop，但功能多很多，ROI 值得。他覺得這是短期。Agent 上線、變好之後，你確實會更快。每個團隊都有想做卻沒時間的 bug、改進和探索。工廠裡 backlog 這個想法消失。你有容量做測試品質、架構重構。Tessl 相信過渡時品質保持不變，或只有很小的下降，最終產出的 code 應該更好。非技術角色更容易貢獻想法，探索更多、視角更多。工程更專注在大家用來把功能推給使用者的那套系統。開發體驗更動態、更包容。

[34:54](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=2094s) 怎麼到那裡，是 harness engineering。過去幾週也開始被叫 loop engineering。你在建的是讓工廠自動化、並提高品質的迴圈。內圈在 PR 開出來之前，快、便宜、agent 一直跑，提高自主，不用人進來糾正。PR 開了之後是外圈：更貴、更徹底，不適合功能迭代時反覆跑，但編碼了否則人必須驗證才能信任的事。貴，但拿走的是人的審查時間，所以可能值得。例如跑 mutation testing 看測試套件的品質。字幕還說 something like a show，那種檢查沒聽清。貴的東西在 PR 開出時跑一次，agent 再依結果迭代。Meta loop 在開發過程外面。它觀察 coding agent、看日誌、PR、issue tracker、使用者回饋，找已經漏到使用者、或要人糾正才擋住的錯，餵回內圈和外圈，讓那個錯不再發生。有了三個圈的基礎設施之後，把「我有多 AI native」往上推的，是投資 meta loop。

他先坦白：沒有協助的 harness engineering 難，原因是人的心理。第一，希望會過去：這是新學科，變得很快。進去的團隊基本上變成 AI 研究者，讀論文、看部落格，最佳實務下週過時，兩週後變成 anti-pattern。要先想好怎麼留時間跟上每週在變的知識。第二，他覺得更持久：這根本是沒排進計畫的工作。你開始送一個功能時，無法預期 agent 會不會失敗、怎麼失敗、要多久修好。把 agent 變好的工作和出貨競爭，會拖慢功能。不做，就卡在 agent 永不變好的局部最好。做了，錯過期限。於是沒有人做。第三，時間和空間有了之後，你要的資訊卻不在。藏在本地 coding agent 的日誌、某人的機器、某人的腦子。要把流程搬到一切都被存下來、之後最佳化迴圈拿得到的表面。

[39:53](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=2393s) 該做的他分成三層，他說不是標準名詞，歡迎幫他取名。依 Tessl 認為的順序。第一，control plane 要對。例子是：所有工作從 issue tracker 的 issue 開始，送到 sandbox 裡的 headless agent，agent 開 PR，工程師用 PR 評論互動。仍有手動糾正和介面，但每一次接觸都讀得懂，工具才能拉下來變好。大家會來到三樣：從 issue 追蹤並踢出 agent 工作；一種審查，GitHub PR review 大概最容易；一種把 workflow 和 playbook 標準化、散出去的方式，通常是 skills registry 或共享的 GitHub repo。

第二層他叫 Agent It。像把很多本地設定的專案交給別人架，才驚覺你以為隔離乾淨的依賴並沒有。Agent 也一樣。你以為 agent 容易碰到的東西，CLI、API、讓它點過你的產品去建，他保證比你想的糟。沒有人進來時說不會太難、離開時還這麼說。這大概是最沒排進計畫的一段，花一週或兩週做完。要寫下公司怎麼把工作做完、workflow 是什麼。內部服務要給存取，那就有治理和 API。想給 production log 的存取，就有合規立場。還要一個環境讓 agent 執行它在跑的 code。其餘很看公司。你試著讓 agent 在你不插手的情況下把 code 送上去，問題會自己出現。

第三，你最後會花最多時間的，是改進迴圈，也就是內圈、外圈、meta loop。會放進 meta loop 的元件包括：repo 維護，每天、每晚或每週掃 codebase 找問題；常見開發實務的 playbook，例如怎麼給 CLI 加功能；找出重複任務並自動化，而且要快、要容易，否則人不會做；以及持續看輸出品質，把改進帶回來。例如 agent 犯了這個錯，就更新「給 CLI 加功能」那份 skill，以後不要再犯。

## Tessl 幫的是小步，量的是人還插手多少

[44:00](https://www.youtube.com/watch?v=D_cw-k0F1DM&t=2640s) 前面都是技術，可以自己做，也有很多工具。Tessl 想把走到前沿變成相對可迭代、可維持的一串小抬升，而不是一條蛇一次吞一隻麋鹿。Batteries included：他們跟上知識，你拿到的 agent 體驗知道 harness engineering 的當前做法，替你保持更新。模組、開放，因為工廠的每一塊不會都由一家做到最好，你要能挑對你的 stack 最重要的。也有自動化迴圈可以裝上，你只對提出的變更做反應。六個月後也許發現已經走了 40%，從來不必停下來延後出貨。

控制面：skills registry，可以發佈和版控 workflow 與自動化，內建治理，安全審查、品質審查、誰能發佈和更新。Issue tracker 到 GitHub 的連接器，現在是 Linear 到 GitHub，開一張 Linear 票就能跑 GitHub workflow，更多連接器還會來。還有一套 code review 工具，方便設 agentic code review 的標準，以及更針對的檢查。他給了一個例子：貼到 registry 的 workflow 會被掃安全性、品質，以及它實際把 agent 輸出改進了多少。現場接著播一段影片，字幕沒有描述畫面。

Tessl Agent 幫你建立並維持改進迴圈。第一，變更管理：怎麼找出時間，把重複任務做成自動化。Agent 去翻 PR 和 issue，例如每週都在抓 flaky test，就把它設成 skill，放到 GitHub Action 上。一次一個 workflow。第二，很多開箱的維護：每週掃架構品質、code 重複、測試套件好不好、有沒有安全漏洞。用的話可以一鍵裝上，每週改進 codebase，不必另外費力。第三，任何 skill 都能變成自動化 workflow，指令叫 Tessl Launch。Skill 把 workflow 寫下來，你選一個 coding agent 來做。可以是 Tessl Agent。多數寫 code 的任務他建議用 Codex、Claude Code、Gemini，他們都接得到。跑在有適當權限的 sandbox，可以跑很久，有 GitHub token，能開 PR、回應你留的評論。

做這些時要盯的是：手動接管下降，人在 PR 上的評論下降。那是你離工廠還有多遠。時間一長，想看到更多不經人發起的 PR，那表示自動化變多。品質先守住，然後再往上推。想多知道的人，Tessl 的攤位就在那邊。
