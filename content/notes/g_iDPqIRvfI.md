# Agents Write 95% of Our Code. Here's the Catch

片長約 30 分鐘，英文手寫字幕。Amy Heineike，Tessl 的 researcher 和 engineer，在 Tessl 辦公室講。她在做內部的 software factory，也在評估 agents、做放進產品的工具。這場接在 Dave 後面。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=g_iDPqIRvfI)

## 一句話

Agents 已經很會做被定義好的任務，benchmarks 在飽和，很多組織的 code 大多是 AI 寫的。靠近看，bugs 和 incidents 在漲，skills 裡的指令平均只跟了約 70%。她說工程因此更重要，不是更不重要。新的角色是 harness engineer：把 invariants 寫成可執行的檢查，用 analytics 看 agents 在哪裡反覆出錯，再依風險決定哪些 code 可以 auto merge。

## Benchmarks 飽和的時候，軟體邊緣在裂

[0:43](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=43s) 她要講 harness engineer 的興起。Agents 做愈來愈多 coding，工作會變，但不是回到舊的做法，而是找到能把 agents 用滿的新方式。

[1:38](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=98s) 第一個觀察：agents 變好了，大家用很多。Faros 的研究顯示 AI coding 工具採用率很高。她記得去年還很起伏，現在許多組織裡絕大多數 code 是 AI 寫的。Benchmarks 也飽和了。你能定義任務，通常就能叫 agent 做完。他們愈來愈難寫出以任務為單位、agents 做不到的 benchmarks。

[2:29](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=149s) 靠近看有裂縫。Agents 能做任務，但是不是可維護、會不會讓 codebase 長期健康，她說還有很多問題。同一份採用報告讓她吃驚：他們監控的 bugs 數量跳升，incidents 也跳升。她自己用軟體的感覺是每樣東西都更脆一點、邊緣有裂。

[3:12](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=192s) 新的 benchmarks 一換問法就掉下來。Slop Code Bench 讓一個長跑的 agent 做一連串任務，它不知道順序，所以必須增量地建。這種任務分數低很多，agents 掙扎得多。

[3:38](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=218s) 她知道很多人會想：模型會愈來愈好，更好的模型會解決這一切。她放一張 frontier 圖，橫軸是用 agent 的成本，對上一種 intelligence 分數，線上是每個智力等級最划算的模型。左邊的智力軸是線性的，改進是漸進的；底下成本是 log scale，左右差 100 倍。中間綠線是 10。以 medium reasoning 來說，跑 fable five 是跑 GPT 5.6 的十倍貴。更好的模型就算做得成，也是很貴的解法。組織的 agent 吞吐量一大，就會意識到這件事。Tessl 當週關了 600 張 PRs，她說他們是相當小的組織。

## Skills 換得了便宜，換不來聽話

[5:03](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=303s) 他們很想 skills，也推出產品幫組織管理：治理、最佳化、分享、看懂已經做了什麼。他們做了一個 skills benchmark：從開源 repos 拿 1000 個 skills，為它們做任務，再讓 agents 有 skill 和沒有 skill 各做一次。評兩件事：任務做完沒有，以及有沒有照 skill 裡的每條指令做。

[5:50](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=350s) Skills 可以大幅改變 agent 怎麼做任務。定義好的 skill，可以用更便宜、更小的 agent 達到同樣成功率。另一面是指令跟得不徹底。這些任務的完成率很高，skills 裡的指令平均只有約 70% 被遵守。各模型差距大，最好的模型也忽略很多指令。

[6:48](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=408s) 他們把 skills 按領域分類，instruction following 差很多。灰條是 agent 本來就會做的指令，有些 best practices 它已經學過。綠條是它有多願意改成你指定的做法。末端是它沒做的部分。她認為實驗室在 steering 的能力上轉得不夠，在 task completion 上轉得太多。

[7:44](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=464s) 所以是這個時刻：agents 很驚人，也很糟，因為你不知道它們在做什麼。Code review 和 guardrails 必須更有效率。有了 rocket boots、會生成大量東西，就需要實際查得出來是不是拿到想要的，而且不能信任自己一定會拿到。

## 先把 invariants 寫成檢查，不要靠人記得

[8:22](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=502s) 她的結論是工程更重要，不是更不重要。以前累積知識、同儕 review、互相教，就能把 code 和工程塑形。現在讓 agents 衝，這些必須變得明確，編成經得起 agents 的做法。她看到三項和以前不太一樣的技能：systems thinking、analytics、risk and operations。

[9:34](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=574s) 做功能時，有些要求只屬於這個任務，有些是希望一直為真的原則。先找出 invariants，在系統層說什麼必須為真，再抓住並執行，才比較能維持一致和品質。例子是 design systems：不是設計單一頁面，而是版型、brand voice、元件、按鈕長什麼樣。也可以是架構：code 怎麼結構、用哪些 libraries、哪種風格、怎麼呼叫。也可以是有意見的做法：錯誤怎麼穿過 stack、怎麼命名、資料怎麼流。

[11:11](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=671s) 以前這些大概在某個 code owner 的直覺裡。你可以請他畫架構圖，跟設計師看 Figma，再一張張 PR 問像不像。現在要把它們收成要執行、要編碼的 prompts 或定義。

[11:46](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=706s) 執行方式有好幾層。寫 skills 描述在乎什麼，在對的時間載入。CI 裡放確定性檢查，例如 linters。她說四五個月前還沒聽過 ast-grep，現在一直在講。Agents 很會寫這種規則，以前寫很痛，現在很容易。可以規定 import 從哪裡來、某些 libraries 或某些名字不能出現。字幕這句例子沒有聽全。他們還有 verifiers：很窄的規則，用一個很快的 agent 量每一個檔案。再來是 agentic code review，用比較寬的 prompts 講要守的規則。

[13:18](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=798s) 他們在收 code review 裡 agents 一再重複的意見，變成一份相信的規則清單，讓每一張 PR 都以可重複的方式遵守。她覺得模型變會寫 code 的同時也變會判斷。準則清楚，判斷就乾淨。這是很強的工具。

## 看 log，再決定哪些 code 可以自己合併

[14:14](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=854s) 她接 Dave 白天的說法：要推理系統，得靠 analytics。工程師以前較少為了把工程做出來而去分析。自動化愈多，資料愈多。Agent logs 很有意思。現場有人會讀 coding agent logs，她說自己不是最怪的。讀了會看到 agent 在迴圈裡空轉、搞混，可以找出浪費時間的地方。他們的 agents 對 Linear 的 API 一直搞混，於是寫了一個簡單 CLI 去呼叫，觀察下來 agent 容易得多。

[15:23](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=923s) PR comments 可以看出反覆做錯的事，變成 guardrails、lint，或事先提醒 agent。也可以看 codebase 裡長出來的架構：跑 complexity analysis，看是不是變成義大利麵、所有東西互相 import。對測試跑 mutation analysis，看哪些測試其實沒有貢獻、覆蓋哪裡有洞。這些訊號變成假設：agents 哪裡走錯，以及想命名並執行的新 invariants，好讓那件事不用再擔心。可以人盯著資料想理想架構，也可以讓 agent 做一輪快速檢查，發現該加強的地方。

[16:57](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1017s) 第三項是風險和營運。新能力和控制項的行為跟以前不同，要能判斷能不能讓它自己跑、要多少 review。風險政策必須更細，而且更多人要在談。Tessl 有一道 auto merge 的階梯。研究用的 codebase 是自由區，想合併就合併，完全沒有規則。有些內部工具自動合併，一直有幾百張在過，沒有人看。別的部分絕對要做這個功能的工程師做最後的 merge。少數槓桿很高的部分，不該硬推，該問想過這塊的人。把這些風險等級寫進規則，放進 GitHub settings，不同部位有不同的 checks and balances。

[18:49](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1129s) 這整包她叫做 harness engineering。有些組織會有少數像 Dave 這樣的人整天活在 invariants、analytics、風險和政策裡。也可能是多數工程師愈來愈多時間花在這裡，同時仍要想要 ship 的功能。她說這是當 code 的園丁，旁邊還有在想交付的建造者。

## 95% 走進 factory，以及三個起步練習

[19:36](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1176s) Tessl 內部在做 software factory。她說這週大約 95% 的 code 走過這條 factory，過去一個月超過 90%。想試可以裝 Tessl CLI，他們也開始放 Tessl agent 的內容，可以跟它談、看有哪些工具。Factory 的想像是更多 coding 進到遠端執行，載滿 skills 和 context；guardrails 是 CI 裡的確定性檢查和 verifiers，加上自動 code review；中間有一道 triage，判斷要加多少風險和多少小心；然後是更新迴圈，監控、學習、改 stack 的每一段。

[21:02](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1262s) 若這不是全職工作，她給三個起步。第一，為你在寫的 code 描述 invariants。她說這其實不舒服：你要講出哪些精確規則應該永遠為真。第二，至少把其中一條做成 CI gate，看它有沒有抓到你在乎的問題、多久響一次。第三，做一份資料集。Agents 很會做這個：叫它抓 repo 裡最近的 50 筆，摘要反覆出錯的地方，留言裡重複說了什麼、重複的錯誤、在哪裡觸發 CI 失敗。再用這個回頭問自己在乎哪些 invariants、哪裡可以改。

[22:46](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1366s) 有人問 factory 對工程師是什麼意思。提問有一段字幕不清楚。她的流程是：prompt 是一張 Linear ticket。他們有寫 ticket 的 skills，規定細節要到哪、何時該推回去要更多。她常在 Conductor 裡開 agent session，先探索，準備好就叫它讀 skill、把票發出去。票一進 Linear，有一個 orchestrator 盯著，撿起來推過所有步驟。Slack 上也有 bot：@ Dark Factory app，說該為這件事開票。它看過那個 thread，開出票，那就是起點。

[24:12](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1452s) 另一人問怎麼防止矛盾。PR 裡先後講了相反的事，人忘了；agent 很容易同意相反的東西，prompts 和 skills 被改到互相矛盾。Factory 裡你可能不知道矛盾正在發生、是哪一步走歪。Factory 裡和外都要看。她說 code review 很難，很難信任 agent 做的 review，也很難知道那些發現是否都站得住，字幕這句沒有聽全。重點是沒有任何一方該以為自己是權威。不要叫 coding agents 修掉所有問題。要叫它們考慮這些發現，再決定要不要回應，要能權衡，然後放棄。長的答案是把系統當資料。她不認為這容易，或他們已經知道答案。發現問題就問能不能變成 analytics query，例如來回留言的數量分布；改了 prompt 之後，監控有沒有變好。用科學方法試。起點是：這些東西沒有一條永遠為真、必須絕對執行，否則人會瘋掉。

[26:42](https://www.youtube.com/watch?v=g_iDPqIRvfI&t=1602s) 有人把 70% 和降成本攪在一起，提問聽不清楚。她拆開。Benchmark 裡他們強迫 agents 去讀 skill。真實寫 code 時，除非用了指令，否則不會。Agents 常常根本不讀，一部分是 description 的問題。Tessl CLI 有 Tessl Review，可以把 skill 傳進去，檢查 disclosure 好不好。Description 要寫成給 agent 的廣告：你該讀我。又不能太煽，否則它會在不該讀的時候讀。第一個問題是對的時間讀到。第二個才是那 70%：他們把 skill 拆成每一條指令，看遵守了幾條。常見的錯是寫得太規定、指令太多。一個練習是把給 agent 的整份 prompt 讀完，可能已經被 skills、rules、context 塞爆。兩個互相矛盾的 skills，agent 會覺得乾脆都不做。有些是作者的問題。她也說 agents 會累，祝福它們；那是巨大矩陣裡的一堆數字，裡面發生什麼是個謎。有用的是分清楚：哪裡 agent 容易做對，哪裡你在推一件被訓練得很深、它就是不會去的事。時間到，她說之後還會留在現場。
