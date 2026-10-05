# Inside the Dark Factory: AI That Ships Code Solo

Simon Maple 主持，來賓是 Tessl 的 AI engineering lead Rob Willoughby，第一次上 podcast。片長 58 分 38 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=APYUJoQkVUo)

## 一句話

Tessl 上一週在全公司 offsite 時仍開了 516 張 pull request，再前一週 608 張。Dark Factory 不是把人從責任裡拿掉，而是把實作變便宜之後，把信任做進 repo：context、驗證、審查的迴圈。上週大約 65% 到 70% 的 PR 走這條線。生產程式碼仍要人審。他們自己的工廠程式碼，Rob 上次看，大約只有 5% 的 PR 有人看過。自主是賺來的。

## 週末也能出貨，因為佇列比當下的打字重要

[1:44](https://www.youtube.com/watch?v=APYUJoQkVUo&t=104s) Rob 帶的工程團隊做的是全公司的 agent enablement。任務是在內部做出 dark software factory，並推動採用。兩個理由：自己要更快、更多、品質更高，也要把 agent 用得更好；同時拿自己當試驗場，把怎麼跑工廠的假設放進產品，幫別的公司沿著採用曲線走。

[4:01](https://www.youtube.com/watch?v=APYUJoQkVUo&t=241s) 他們先開兩張 Linear ticket，說播完再看。一張是稽核發現：GitHub repo 的資料可能注入網站上顯示的 Tessl agent 指令，字串跳脫的問題。改的是網站上看得到的東西，所以要人審 PR。把它翻成 to do，等於交給 Dark Factory。工廠開一個 container，人就放手。另一張打在工廠自己身上。內部名字叫 Kikimora。他們沒有記下 inference 跑在哪個 geo，就分析不了 cache，因為請求可能跨 geo，cache 率和成本都會被影響。這張在 Dark Factory 自己的 codebase 裡，政策是全部 auto merge。若不能 auto merge，就表示驗證還不足以相信這套寫 code 的流程。標籤會讓 bot 在 GitHub 上選 auto merge，CI 綠了、review agent 核准了就進去，沒有人介入。

[6:53](https://www.youtube.com/watch?v=APYUJoQkVUo&t=413s) 比例每週會動。上一週 65% 到 70% 的 PR 走 Dark Factory，裡面包含用工廠來蓋工廠。生產的部分，registry、web UI、CLI 那一類，大約 40% 的 production PR 是工廠開的，而這 40% 都要某種程度的人審。Auto merge 只開在研究用的 codebase、Dark Factory 自己的 codebase，以及 GTM 團隊用工廠做自己內部流程的東西。佇列有工作，它就週末做、過夜做。它尊重 Linear 的 blocking 和子任務。Rob 想的不再是這週我能寫多少，而是我能餵佇列餵多久。兩個週末前的星期五很忙，兩個人的工廠在週末出了 150 張 PR，他們在倫敦熱浪裡閒逛，那些全部 auto merge。

## 加速舊流程，瓶頸換到驗證和審查

[8:51](https://www.youtube.com/watch?v=APYUJoQkVUo&t=531s) 以前他稱為 single-player agentic engineering。本地 agent，或雲上的 Claude Code、Cursor 的 cloud agent，字幕把 Claude Code 聽成 cloud code。仍是工程師坐在駕駛座：弄清工作、和 agent 一起界定、實作、在本地測、推上去、合併。和 LLM 之前的流程很像，只是實作變便宜，時間被壓縮。人還是帶著一張票，沿路有很多接觸點。

[9:54](https://www.youtube.com/watch?v=APYUJoQkVUo&t=594s) 同一條流程加速，瓶頸換地方。驗證是一個。他們是 monorepo，建置依賴很多。要測就得在本地建起來，打一堆 endpoint，或在 UI 上按一堆按鈕。實作功能上免費了，仍要付「去確認它做了我要的事」的成本，不能只看 code。另一個是 code review。工程師一天的主要工作從寫 code 變成審 code。以前很少人會說審 code 是工作裡最重要、也最喜歡的部分，但它是分享做法和文化的地方。本地 agent 一天可以吐 20 張。若每張都要人審，團隊就去審那 20 張，他們自己也在吐，你再審他們的。PR 變陳舊，出現 merge conflict。以前沒碰到這個瓶頸，是因為根本沒產出那麼多 code。

[11:34](https://www.youtube.com/watch?v=APYUJoQkVUo&t=694s) 所以星期五若沒把週末準備好，就是壞的星期五。心態從這一週往回看做了多少，變成往前看能不能把工作排好、疊好、排隊。人在管理 agent 的工作，不是一分鐘一分鐘餵任務。抽象也往上：不再想這張票，而想這個功能、要拆給像 junior 或 intern 的步驟順序。我在意的正確性、UI、按按鈕、打 endpoint，要編成我信任 agent 會做的形式。另一個槓桿是可以確定地把 context 載進 context window，強迫它讀過。很難叫人去讀一份最佳實踐。因此他比較信任產出的 code，也可以再疊程式風格、測試、強制執行。能 autónomously 跑的佇列，最低限度是不弄壞既有功能；理想是就算不是自己會驕傲的 code，也是自己寫了可以接受的 code。

## Orchestrator 很簡單，槓桿在 repo 裡的 context

[14:03](https://www.youtube.com/watch?v=APYUJoQkVUo&t=843s) 兩個概念。Orchestrator 拿票、交給 coding agent、照看 PR 走完。Repo 裡給 agent 的 context 和環境，他個人認為槓桿更高。他們先做 orchestrator，因為那是想得到、做得到的。從 Linear 票到產出 code 的機制，他說死簡單、不難。大的學習是：若不投資周圍的層，就回到先前那種被審查淹沒、或 code 沒有把整個系統往前推的狀態。Orchestrator 不是在編排一群 agent 的 agent，是 workflow 的整合器，接 agent 和其他工具，Linear 是例子。

[15:41](https://www.youtube.com/watch?v=APYUJoQkVUo&t=941s) 起點是一支 Python queue，接 Linear 和 GitHub，在 Docker sandbox 裡本地跑 agent。有一個工程師大約一週不能合筆電，因為它就在那台機器上，內部採用比預期多。設計盡量簡單，能用別人當 source of truth 就不自己造。Linear 是「該做什麼」的真相。只要會留下耐久產物，進 codebase 的 PR、Notion 文件、工廠的其他產物，都得流過 Linear，才有稽核、除錯、能見度，也能用它的 blocking、子任務、標籤做報表。他們現在是 poll，想改成 webhook，還沒排到優先，因為除了測試，polling 還沒把 Linear 打壞。Poll 的是委派給工廠、狀態是 to do 的工作，放上 queue，依專案、優先順序、是否被擋住來排，再交給 coding agent。

[17:15](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1035s) 一開始在某人機器的 Docker 裡，要的是隔離，agent 彼此不要互相干擾。每一個原則上是一次做完的實作。技術上它們看得到別的：票的描述常引用其他票，agent 會去看那張票或相關 PR。他說這是長出來的行為，為了湊齊實作需要的 context。現在跑在 Daytona 的 sandbox，用他們自己的 Daytona 環境，為了隔離和安全。盒子相對大。他先說 VM，再改口是 container，才能把整個 monorepo 的測試堆疊轉起來。本地工程師能做的，除了不給 agent 的那些 credential，agent 都要能做：完整測試含 integration test、把 repo 轉起來、在 UI 上點。一個好處是 agent 把影片和截圖貼回 PR，人不用 SSH 進去自己點，看證據就知道流程長怎樣，用來建立它做對了的信心。

[18:57](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1137s) Agent 做完，過幾個 hook，推上 PR。他們相對有信心這張至少過 lint、能建、測試過，適合短的實作。GitHub 上有兩個審查：Code Rabbit，和他們自己的 code review agent。內部的錨在 skills 上。目前三個，還會再加：安全、legibility（長期好不好維護）、以及兜底的功能正確性。對外是 Tessl change review，字幕聽成 tehsil。這些是 PR 上的訊號，讓 agent 去修。Code Rabbit 和內部工具留言；CI 失敗、mutation testing、property based testing 也貼回去。Orchestrator 看著 PR，有留言就再叫 agent。Agent 讀留言、推理、在該回的地方 inline 回，或用頂層留言把事項標成解決，也可以升級給人：暫停，把問題貼回 Linear，通知人。流程是票、orchestrator、盒子上的 coding agent、PR、機器人和 CI 的循環，直到狀態夠好，再翻成 in review，人在它盡量好的狀態才進來。人有逃生口：把 branch 拉下來改再推。他們想推的是在 PR 上用留言互動，這樣能追蹤，也能折回審查哲學，讓人不必再指出同一件事。

## 人仍負責拆工作，verifier 把品味放在 diff 旁邊

[22:02](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1322s) 任務的擁有和拆解，目前故意留在人身上。不是把 Q1 計畫丟給工廠。是像交給 junior 或中階工程師那樣，給一張範圍清楚的 Linear 票。預期事先有設計、白板、討論，寫進票裡再引導實作。工作不再是拿票去實作，而是和同事白板，用 Granola 的逐字稿或截圖留下，再和 agent 把它翻成工廠能做的一組票。實作功能上免費，仍要付 token。有幾個想法就開六個、七個，不要 auto merge，去看 code。若你不在意解法的寬度，就接受任何滿足條件的。若不確定，就用 agent 探索那個狀態空間，用真實的 code 來判斷手感，而不是只在抽象裡想介面這樣比較好。

[24:27](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1467s) 他們給工程師的機制是 verifier：一句自然語言，對某段 code 可以收成 yes 或 no。用來把原則放進 codebase 的特定部分，只有那些部分被改才觸發。觸發是確定的，判斷交給 LLM as a judge。例如這些檔案只准從其他 library 檔 import。技術上可以寫很彎的 regex。也可以寫成原則：library 是單一真相，不該從 codebase 裡其他模組 import，好維持乾淨的依賴。這種品味很難寫成確定規則，以前靠 code review 抓。Agentic code review 又貴又慢。把這些離散的塊做成放在 code 旁邊、人讀得懂的句子，讓 agent 在 CI 裡把頭撞到通過為止。

[25:51](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1551s) Simon 說範圍小，比塞在一場巨大的 code review 裡更不容易被 LLM 漏掉。Rob 同意。哲學是：agentic code review 是漏網的兜底。一旦認定某件事重要，能做成 verifier 就該移過去。它便宜，是對 diff 的一次 LLM 呼叫，而且一個 verifier 一次呼叫，只推理這一條，不用在腦子裡平衡互相衝突的優先順序。他們要的是從很多點畫出可接受 code 的邊界，不是在一份 skill 裡畫一條光滑的線。能做成完全確定的，就該做成確定的。以前人很少寫很複雜的 lint，因為煩、挑剔、拖慢人。現在這個迴圈裡沒有人；agent 不介意煩，願意撞牆。那樣就只付 CPU，不付 LLM。順序是：很快的確定性 lint；對 diff 的 LLM-as-judge，自然語言、太模糊以致難寫死、但好的 reasoning model 懂；然後才是兜底審查。每晚看 agentic review 和人審留下的 PR 留言，判斷有沒有該升成 verifier 的。持續往左移：更快、更便宜，也更好讀。看一條 verifier，比讀一份很長的 skill、猜它會不會在一堆取捨裡把你在意的事加權正確，容易得多。

## 信任是賺的；queue 壞過，Elixir 重寫露出盲點

[29:01](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1741s) 早期的偏見是：從必須在旁邊盯著，變成 log 在雲上的 sandbox，根本看不了，所以票要超小、像 intern。這是文化不是技術。他們慢慢放寬，問工廠最大能接多大、還能產出相對成立的東西。叫 Dark Factory，是因為運作當下不看 log，事後才看。開票的人仍對產出的 code 負責。生產的部分仍要審 PR。不是工廠做了就可以卸責。信任會慢慢長，而且不會結束，因為範圍和驗證總還能再加。Simon 說自主是賺來的，不是打開開關就能全速。

[30:54](https://www.youtube.com/watch?v=APYUJoQkVUo&t=1854s) 他們的團隊故意跑在前面去撞牆。問題分 context 和驗證。Context：他們團隊比公司另一個團隊略小，每週在自己頻道發的 Slack 卻是 10 到 15 倍。因為做得快太多，又開了 auto merge，東西以他們不太懂的方式在變，所以什麼都得過度溝通。上次看，Dark Factory 自己的 codebase 大約只有 5% 的 PR 有人看過。他覺得大家也不再看 code，都在用 agent。因此那 95% 沒有人看過。這只指工廠自己，不是生產程式碼；生產有人審。他們仍在找辦法讓大家知道彼此在做什麼、放心自己的工作會過去、並理解 codebase 怎麼變。有些早上他會醒來覺得那個點子不好，為什麼進去了。用意是過度分享 context，然後 fix forward，不因為不是想要的就回滾。漏了什麼驗證：若是人的概念就做成 verifier，若是壞事就做成測試，繼續往前補護欄。

[33:20](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2000s) 早期核心 queue 改了很多次，因為驗得不夠用力。具體是 PR 留言被算兩次，同一件事進 queue 兩次，兩個 sandbox 的 agent 都在回，可能產生兩個 commit。有時第二個 sandbox 在第一個已經 commit 之後才起來，才發現工作做完了，很沒效率。修好一天又退回。大約兩到三天裡有 60 張 PR 都在修這件事。他們仍讓 agent 做它們想做的，所以改去靠驗證。做了一個 Quint 的 formal model，字幕聽成 quints，專門是往 queue 加東西的那一塊，每個 PR 都驗沒有把這個模型弄壞。沒有 agent 的世界他知道 formal verification 是什麼，但不會做。和 Fable 大約一天，再用 Dark Factory 實作。之後零復發。痛在當下，尤其正在擴規模。洞見是：以前靠測試、人共同的 context、以及相信人知道這段 code 敏感。現在要更用力。Agent 沒有那份 context，他們也不想全塞給它，因為 token 更貴、更慢。

[35:41](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2141s) Offsite 期間的實驗他很期待，但沒有照他要的方式成功。信念是：驗證若夠強，而且對準組織在意的行為、不是實作，就不該在意按按鈕之後結果怎麼出現，只在意結果有出現。那樣應該能只靠驗證層，用新語言把整個系統重寫。他們現在是 Python。Elixir 的 actor model 適合。只給驗證層：沒有 unit test，只有 end-to-end 或 integration test、那個 formal model、以及表面上的性質，不是內部動態。Agent 規劃並從零做出 server。它做出了東西。Queue 完美，formal model 撐住。兩道牆讓他們不能叫它成功。盲點是：Linear 的 label 是很重要的路由，卻沒有正式驗證，只在 unit test 裡，end-to-end 只測快樂路徑。把 end-to-end 移過去之後，PR stacking 壞了，因為那只在 unit test。核心功能沒有在外部被驗證，Elixir 版就壞了。就算他們有 sandbox 的生產環境，也推不上去，他得手動盯著 agent。他們想投資的是讓工廠在 sandbox、最後在 production 做非破壞性的變更，把人移出迴圈。另外 GitHub 上不只有留言，還有 CI 的批次：把失敗訊號一次送出，而不是一串。End-to-end 沒抓到。他打開、立刻壞、修好、再打開、弄壞別人的 PR。學習是這件事做得到，走得相當遠，而且比 Anthropic 的 Rust 重寫更有野心，因為那次還把原始碼當輸入。他覺得這樣更能寫出慣用的 code。他不是 Elixir 專家，LLM as a judge 說那是慣用的 Elixir，不是 Python 移植。他還不知道怎麼持續把覆蓋拉高，除了繼續做這種實驗找缺口。邊界仍要人審；等到穩到可以重寫，才敢讓 agent 盡情跑。

## 新人第二天就能加 verifier；組織要一層一層

[40:08](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2408s) 有新人第二天就在給 Dark Factory 加 verifier，而那是最重要的部分之一。可以讓新人上來，但需要一種心態：agent 不是同一件事做得更快，而是軟體工程裡新的 workflow primitive。他不認為工程師會消失，仍需要懂系統的技術判斷。修車的人不是造車的人，車壞了要能查。工程師會更像在工廠外面：建造它運行的環境、查它為什麼壞、再改好。仍是工程，是系統層的工程，本來就是 senior、staff、principal 該做的。現在是要求 junior 候選人也一開始就做這個。

[42:58](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2578s) 生產 codebase 的其餘部分是漸進採用。他們不會說 Tessl 每個人必須用 Dark Factory。到 65% 或 60%，是說服人這很好玩、很新、能加速，並幫他們把自己擁有的部分用這些驗證工具抬上去，建立對自動化的信任。具體是先把 repo 裡的 context 做好，本地流程就會變好。他認為組織對 repo 裡的 context 要更有意識，因為那就是進 agent 的東西。給的 context 改變結果，比換一個 model 更多。然後才疊驗證，讓人信任本地工程師驅動的 agent，因為產出被驗證過，而且超過以前會做的。他要的是什麼都測：end-to-end、integration、行為測試。在意的不是 code 做了什麼，是行為、是產品表面。這會讓內部先行的團隊覺得 agent 自己就產出更好的工作，也讓品質隨時間變高。再來是不那麼確定的：verifier，人仍審得了、讀得懂，但能編碼 lint 寫不死的模糊概念。確定性的訊號可以餵回本地 agent 或 Dark Factory。然後是 agentic review。這些是走向全自動工廠的積木。

[45:41](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2741s) 文化上最重要的是工程師仍擁有 codebase 的品味和品質，不是把品味交給 agent，而是把品味擴到所有會跑在那份 code 上的 agent。以前 staff 負責某一塊，靠審 PR、簡報、文件、style lint 來維持品質。現在編成一組 verifier，不只你的 agent，公司裡每個人的 agent 碰到那一塊都會跑。影響擴到所有人，也可以把從業累積的學習交給 agent。不只是讓自己的本地 agent 更好，而是 commit 進 repo，讓所有 agent 更好，並成為走向 Dark Factory 的底座。

[47:03](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2823s) 很多人今天用 Tessl，是用 registry 存 context、評估、改進、在私有和公開 workspace 裡分發。Tessl agent 被想成自然語言介面，用來做 Dark Factory 的積木。它知道 CLI。內部 code review 是 Tessl change review，verifier 是 Tessl change verify，還有 Tessl change risk，判斷一張 PR 要不要人審。這些 primitive 烤在 agent 裡，它知道怎麼在你的 repo 裝起來。Orchestration 他覺得沒有差異化，大家應該自己做，因為簡單，也能接自己的內部系統：用 Jira 還是自己的工單、知識在哪。有差異的是上面的迴圈，以及可以組合的 primitive。Tessl 會用你的 context、你的做法帶你裝。開源 repo 他們建議 GitHub Actions，便宜、到處都有。例如每週看這個 repo 落地的 PR，從中得出 verifier。他強調是 with you，不是 for you。驗證仍是人的槓桿，是核心工程工作，因為那是在編碼品味。寫 GitHub Action 這種事，他不想做，agent 會做。

[49:25](https://www.youtube.com/watch?v=APYUJoQkVUo&t=2965s) 新專案、已經有 agent、skills 和 context，兩個指令立刻想到。一是請它稽核 codebase：你有什麼 context、agent 在哪裡打轉。若用 Claude Code，它知道 log 在哪。這留在你的機器上。看出一直打轉的事，要不要寫成 skill、要不要發布和做版本。二是迴圈：讓 agent 建議第一個 loop。他個人會先看 PR 表面，或文件更新、維護，那些知道該做但永遠不想做的事。然後找出對你價值最高、人仍在迴圈裡的，或你放心讓它自己跑的。醒來看到維護 agent 過夜找出三個問題、開了 PR、設成 auto merge。他說那不是自己要想、要發起的工作，是找到一個想讓它上升或下降的訊號，交給維護 agent。CLI 裝好之後，在終端機打 `tessl agent`。

## 播完兩張票都合併了

[51:36](https://www.youtube.com/watch?v=APYUJoQkVUo&t=3096s) 記 inference geo 的那張，PR 已經合併。摘要來自 Kikimora。Code Rabbit 跑了，他們自己的 review harness 也跑了。Kikimora 回了留言並標成解決，Code Rabbit 也留了意見，CI 失敗有被修，核准之後由 Kikimora 合併。直到 Simon 打開來看之前，沒有人看過。這就是 Dark Factory 裡那 95%：沒有人看就合併。Rob 也不打算看，因為測試過了，至少不是壞的。若是壞的，會發現，然後 fix forward。

[52:58](https://www.youtube.com/watch?v=APYUJoQkVUo&t=3178s) 網站上字串跳脫那張也合併了。四十六分鐘前開的 PR，是他們交給工廠之後大約十到十五分鐘。找到一批問題，Kikimora 回應，Code Rabbit 核准，然後團隊工程師 Sahil 核准並合併，因為碰到生產、政策要求人審。從 Linear 票到 production，人的接觸點就是那次必要的審查，以及有人按合併。Rob 相信會有完全信任的階段。近程要投資的是 PR 的風險分類。他希望低風險的、依那個分類，可以直接進 production。分類要是人看得到、可以推理的機制，不是不透明的二元分類器：給 agent 一份 skill，寫下他們覺得重要的事，再調到那個風險。他說像這種使用者看得到、但是偏文件的變更，以及完整的資料庫 migration，因為好驗證、偏機械，以後也許能 auto merge；換成 pipeline 跑在哪套基礎設施，可能仍要人。字幕把這幾個例子接得有點緊。

[55:36](https://www.youtube.com/watch?v=APYUJoQkVUo&t=3336s) 這一集做出兩張票，都合併了，一張進 production，一張進 Dark Factory。這週 Tessl 大約會有 600 到 700 張 PR，其中約 60% 到 70% 由工廠建立。要到 100%，是建立信任，以及同時往左和往右。從 PR 往左，是幫工程師把 PR 做出來。往右，是驗證產出、讓人信任。他們歷史上更著重往右，先建立「agent 做的 code 大致正確」。品質還能再做。現在想加倍投入的是讓它變成在 Tessl 做事最容易的方式，不只是最快或吞吐最高。內部 Slack bot 會在頻道裡環境式地聽，並幫你開 Linear 票。他們想讓它提案、做拆解、進到規劃，從 PRD 開始當同事一起發散。預設會用它，不是因為強制，而是它接在每天用的工具上。
