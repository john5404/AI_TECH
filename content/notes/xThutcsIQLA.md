# ​The impact of genAI on development and the SDLC with Patrick Debois, AI Native Dev

Patrick Debois，當天最後一場，在 AI Native Dev 的 meetup。他造過 DevOps 這個詞，寫過 DevOps Handbook。片長約 39 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 CLAUDE.md 聽成 cloud MD，把 Tessl 聽成 Tesla，把 Kiro 聽成 Kira、Curo，把 vibe coding 聽成 V coding、five coding。他說現在還不是原則，是 pattern。實作在變，pattern 大致沒變。

- 原片：[YouTube](https://www.youtube.com/watch?v=xThutcsIQLA)

## 一句話

AI 在寫 code，人變成管 agent 的人，也變回 wall 另一邊的 ops。真正要重想的不是生成更快，而是 review、你到底要做什麼、怎麼發現對的功能，以及把過程留下當知識。這四件事正在開發者的筆電上長成一條像 CI/CD 的流程。中央的 CI/CD 要等這條先站住，才看得清會怎麼變。

## 生成變快之後，你在管 review

[0:44](https://www.youtube.com/watch?v=xThutcsIQLA&t=44s) 他做了一份給 AI developer tools 的地圖，比照 CNCF landscape。一月大約 200 個工具，現在接近 500。他每天把看到的放進去，讓人不必追整條生態。他從 DevOps 走到 DevSecOps，覺得那十到十五年的 CI/CD 只是換詞，仍酷，但他想學新東西。Cloud、mobile、serverless 他都在早期混沌裡待過，現在是 AI。他為 AI Native Dev 社群策展，旅行時順道辦 meetup。

[2:21](https://www.youtube.com/watch?v=xThutcsIQLA&t=141s) Cloud native 開頭大家以為只是把同樣的事搬上雲。Microservices 之後，VM 不再是那回事，存取控制也得不同。AI native 一樣。很多人只是在既有做法上栓一點 AI。他認為 workflow 要重想。先認識工具很好，工作方式本身在變。

[3:10](https://www.youtube.com/watch?v=xThutcsIQLA&t=190s) 這場不談 code generation。前兩場已經說生成更快、更好、品質更高，review 變成瓶頸，agent 一次吞更大塊。若 AI 在寫 code，他們在做 dev，我們變成管那些產出的人，管做 review 的 agent。

[3:59](https://www.youtube.com/watch?v=xThutcsIQLA&t=239s) 他是色盲，紅綠 diff 很難。很長的說明他沒胃口讀完。若變更被收成帶註解的摘要，context 立刻有了，認知負荷下降。人還在迴圈裡，但這跟生成無關，是讓 review 更快更好。Infrastructure as code 也不必看 diff，一張圖就能看出沒接上的地方。Google 的 NotebookLM 把 code diff 做成 podcast，放進他們的 codegen。想像 agent 整晚在寫，早上聽五分鐘。大家在試驗不同的 review。

[5:34](https://www.youtube.com/watch?v=xThutcsIQLA&t=334s) 他叫這 moldable development environment。IDE 以文字和 code 為中心。人待在裡面的時間變少，它得更會幫你 review。可以是圖、是 code，也可以跟着任務變：改 data model 或改 UI 時，review 系統自己塑形。大多仍是概念。Glamorous Toolkit 可以試。同一套 pattern 是 moldable 的例外環境，agent 出錯時幫你看例外。出事時負責的仍是你。

[6:44](https://www.youtube.com/watch?v=xThutcsIQLA&t=404s) 這個社群常談 vibe coding，很少把它當成 review 一個 app 的方法。他覺得金句是問 agent：證明這真的能動。Agent 做出一整個用來證明的 app，review 做得更好。UI 元件、領域專用的東西都可以。有的工具夠有把握就自動 commit，把桌子翻過來：先 commit，不喜歡再 revert，不必每次說 yes。要做到這樣，開始看到 checkpoints。聊天、呼叫、批准都可以退回某一點。不要讓它跑很久，你說不喜歡，它再整段重來。說到這裡為止我不喜歡，然後繼續。Checkpoint 是安全 review 的基礎。

[8:19](https://www.youtube.com/watch?v=xThutcsIQLA&t=499s) AWS 的存取控制是最複雜、最不想碰的東西之一，現在發生在瀏覽器裡：agent 可以做什麼。他知道有放行一切的模式，也可以跑在容器裡，仍有些事不希望 agent 改。幾乎要為 agent 做身份和存取管理。你不只是 reviewer，你在管整套系統：誰能碰、它在做什麼、yes 還是 no。上面還有成本。第一場 Thomas 說先別管成本，直到第一張帳單。像 AWS，也像 cloud native 的 FinOps：消耗多少，能不能把這段交給更便宜的模型。先盡量用是常見話術，然後才看這些模型是不是花得有效率。Max、unlimited 的授權出現了，直到發現有人真的無限用，又得加上限。有人為了四小時一個 checkpoint 去調整睡眠：能寫一段、不能寫一段、再回來。生活在變。以前是先想清楚、討論、進入狀態再寫。現在 agent 一直要你的注意力、要答案，像老闆在微管。他不想這樣，但在 review 變好之前，也許是目前最好的。恭喜，你現在都是 ops。DevOps 之前的 ops 就是這樣：code 從牆那邊扔過來，你沒看過、沒寫過，卻要負責跑。

## 你要做什麼，變成 intent

[11:16](https://www.youtube.com/watch?v=xThutcsIQLA&t=676s) 你變成了經理，卻還沒談要做什麼、怎麼做。那本來是 QA、架構師的活：需求、做法。這也在變。很輕的一步是把「我想怎麼被做出來」放進 Cursor rules，或其他味道的規則檔。早期很簡陋。現在在標準化。CLAUDE.md 還在，另外有 AGENTS.md、Gemini 的 markdown。工具可以共用，也有工具把 Cursor rules 轉過去。像 S3 bucket 變成標準那樣，標準往往從第一個採用者長出來。這不是 review，這是在指定我們要什麼。

[12:38](https://www.youtube.com/watch?v=xThutcsIQLA&t=758s) 有人把它排成 prompt engineering、context engineering、然後 intent engineering。指定要什麼，機器在你給的指南裡負責實作。很早的 GitHub 研究就這樣：聊天裡仍有 code，但你指定要什麼，先有計畫，再生成。Kiro 大概是第一個把這件事做進 IDE 的。AWS 在 Amazon Q 之外做的 IDE。它把「今天就寫 UI 和 code」和「先寫規格」分開。規格用 EARS，也有別的格式，他大多看成帶例子的 BDD。Spec kit 仍是實驗，又有一家公司在撐規格這件事。他幫忙的 Tessl 有 usage specs：把開源套件轉成文件，你用那個 library 時把用法規格引進來。不是「我想怎麼被建」，是給 agent 用的文件。

[14:43](https://www.youtube.com/watch?v=xThutcsIQLA&t=883s) Spec 裡可以放要做什麼、怎麼做、設計、流程先後、規則和片段。也可以叫 agent 更新這些檔。他常寫完 code，再請它把剛才得到的東西寫成可重用的規格，像把工作的記憶存下來，再從那裡繼續。反過來也成立：legacy code 變成規格。有了規格，就可以改成把這套 Java 系統改寫成 Rust。大概不會那麼完美，意思在。規格讓 agent 和人對齊。待得夠久的人還記得 UML：寫下來也讓人對齊。你說我不是這個意思，那就改。對你不清楚的，對 agent 可能也不清楚。規格又在上升，大家以為寫得完美就有幫助。規格也是政治的。以前可以寫了一套、實際做另一套。對 agent 來說，「我其實要做別的」不存在了。政治要怎麼跟規格一起處理，會很好玩。

[16:52](https://www.youtube.com/watch?v=xThutcsIQLA&t=1012s) 規格會長大：安全、QA、效能。不能把所有願望存成一份規格再叫它上。變長就要拆小，像人不會叫別人一次做一百件事的功能。難的是怎麼拆、任務不要重疊、不要互相依賴。Robert 提過的依賴樹，要用規劃自動拆，很挑戰。拆完就進看板。你看着 agent：做這個，做完。它們一起往前。於是你比較不在乎特定實作，在乎 intent 有沒有被寫下來。從低階開發者往架構師走，問題變成你怎麼告訴 agent。

## 先發現該做什麼，而且一次做很多版

[18:21](https://www.youtube.com/watch?v=xThutcsIQLA&t=1101s) 怎麼知道該做什麼。覺得是好主意，也許該問使用者，哪個功能真的有價值。Vibe coding 在這裡最亮。以前 product owner 得求開發者，對方說沒時間、丟進 backlog，看不到東西。就算開發者有空再做，中間那種迭代被忘掉了：做出來一看，不是要的，感覺不對。發現的過程是可丟棄的實驗。Vibe coding 適合「不是這個、我沒想到這個」。

[19:31](https://www.youtube.com/watch?v=xThutcsIQLA&t=1171s) 為什麼只生成一個。三個網站設計，挑最好的。同一個演算法做三版，看哪個好。選擇不再只有一個解。Vibe coding 仍有點線性，能同時轉出很多個就很有力。平行有兩種：拆開的任務同時做，或同一任務的多個變體再選。兩者都幫你決定 intent 該怎麼寫。目錄可以叫 version 1、2、3。Git worktree 讓筆電上不同目錄、不同 git tree 同時做。Agent 開始在本地 snapshot、commit，以便回滾。版本系統前面又有一層版本系統。有人用很輕的 commit，字幕聽成 gh，再 merge。可以在筆電、雲上或容器。Docker 的創辦人現在的公司叫 Dagger，在容器裡轉出多個 coding agent，掛上 MCP：我要兩個變體，就起兩個容器。他希望大家看到：比較不擔心交付，比較擔心發現。該做的是什麼，而不是我們只負擔得起這一個，就做這個、再控住它。

## 知識要留下，中央的管線先別急着加 AI

[22:08](https://www.youtube.com/watch?v=xThutcsIQLA&t=1328s) 最後一塊是把整個循環學到的變成知識。文件是一種。Context7 做了一個介面，生成 code 時用最新文件，因為 LLM 是在所有版本上訓練的。Codebase 可以變成課。新工程師想學這套 code。有人離開，知識不會流失，AI 幫人看懂、跟上。Claude Code 也有學習模式：探索、問 codebase，不只生成。更早的做法像一本日誌：先做了這個功能，再做那個，怎麼套用的。像 changelog，明年才不會把同一個功能重做一次。Devin 的畫面會說這看起來重要、像知識，要不要存。大概是最早的。Claude Code 可以用井字號把東西存進 memory。工具裡會愈來愈多這種當場發現、當場存。再跨 agent、跨工具重用：檔案、memory、知識庫，由一個 orchestrator 決定什麼該進去。

[24:42](https://www.youtube.com/watch?v=xThutcsIQLA&t=1482s) 再往外是還沒畫好的地圖：起一整群系統，像 swarm。他比成 coding agent 的 mob programming。一堆規則，各自角色，晚上再跑。指定得清楚會有好結果。跑得愈久，review 愈難，因為變得太大。這又回到第一個 pattern。知識不只服務生成。有人問 agent、問 PR、問當初為什麼這樣決定，知識都在。

[25:46](https://www.youtube.com/watch?v=xThutcsIQLA&t=1546s) 這就是四個 pattern。資深的人多半已經往這邊走：在乎系統真的在跑、在乎架構。更資深的更靠近業務，想知道該做的最好是什麼，也開始為旁邊的人寫下來。整件事把人往更資深推，工具幫忙走。新的流程是：管 intent，拆成 plan，平行做一些，review 仍是 yes 或 no，全程把知識存下。可以想成 CI/CD，但發生在開發者的筆電上。大家開始採用之後，中央那條 CI/CD 很可能會變，因為本地已經 merge 一次，回去又做一次，感覺重複。他不知道方向。那些說要把 AI 放進 DevOps 和 CI/CD 的人，他認為要等這個 pattern 先沉下來。

[29:10](https://www.youtube.com/watch?v=xThutcsIQLA&t=1750s) 有人問：code 才是真相，自己寫 spec 仍像瀑布，markdown 躺在那裡，agent 有時拿、有時不拿，code 和 spec 怎麼持續對上。他看到的是規格裡愈來愈多例子，幾乎像可執行的，至少是 pseudocode：這一段描述應該被這個測試蓋到。Kiro 和其他人的 BDD 可以寫那些例子。AI 又寫 code 又寫測試確實棘手，有人用多個 agent 想控住。他目前最好的答案是：把規格的一塊連到可執行的測試，再讓它生成，至少有一條鏈。提問的人用 Playwright，很脆、常壞。他說 Playwright 沒有 AI 以前就脆，選擇器很笨重。他指的是一般的 TDD、BDD，結果通常更好，再進瀏覽器。

[32:07](https://www.youtube.com/watch?v=xThutcsIQLA&t=1927s) 另一人說 review 本來就是 CI/CD 很大一塊，管線會長大去幫忙 review，而不是縮小。他沒有要反駁。中央的 CI/CD 不會消失。它會演進，也許學 agent 在裡面已經做過的回饋，而不是什麼都不信、到中央再全做一次。想像十二或三十條 feature branch，不同的人、不同的工具在測，平行發生，而不是只在中央管線。不能直接進 code，所以他強調 review。把 AI 放進 CI/CD 對某些品質、對 MLOps、AIOps 有幫助。要接上一大群在 review、在改東西的 agent 時，問題是你要多少風險、多少 review，這又回到測試覆蓋。他覺得筆電上這套得先變，才看得清對中央系統的影響。

[34:43](https://www.youtube.com/watch?v=xThutcsIQLA&t=2083s) 最後一問：code 是給人看的，機器最後吃的是更低的形式。AI 做粗活之後，還需要中間的程式語言嗎，能不能直接寫到 bytecode，再用別的方法確認我們滿意，即使看不懂中間的 code。他說這常被提起，抽象一直在往上，像上雲之後不必看磁碟、不必看網路。失敗時才想看。不是每個人都要看失敗。若例外的介面塑成他看得懂哪裡壞了、不必看中間的 code，很好。他不站在「砸夠多錢和資源，生成的 code 就會完美」那一營。他仍是 ops：不信任，沒有證明可以確定它不會幻覺、不會做壞事。可以加 static analysis，可以用 Rust 把系統做硬一點。他會不會在不看的情況下讓它上線，取決於風險可不可接受，而那對每個人意思不同。實習生推進 codebase 再推進 production，若有測試 harness 擋住，他可以接受。若一次變更只碰到兩個使用者、影響低，也可以。問題變成你願意讓 AI 碰哪些系統、承担多少風險。他很想看到有人敢說這塊夠信任、可以直接進 production，因為他想接上 DevOps 走到生產的那條線。他還沒看到那樣的跡象。有人承担風險，說壞了沒關係。以前的自動化是一台系統變成一百台，但在某個意義上可預期。這一個，他仍然不安。
