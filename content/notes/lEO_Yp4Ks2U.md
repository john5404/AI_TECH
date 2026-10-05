# Why Every Enterprise AI Team Needs Evals (And How to Build Them)

講者是 Tessl 的 research engineer，在做 agent 的 evaluation platform，結尾被稱為 Max。片長 34 分 8 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 evals 寫成 vaults、evolves、you've、Eagles，把 LLM as a judge 寫成 alabamas、lemmas、alarms。下文用校正後的說法。投影片上他沒念出來的數字，不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=lEO_Yp4Ks2U)

## 一句話

Eval 就是 agent 系統的測試：一個任務進去，agent 跑出解法，再用某種 grading 判斷好不好。Frontier labs 用基準行銷模型。對使用模型的人，有用的是針對自己 codebase 的基準。沒有這個，換 skill、看整個組織哪裡失敗、或要不要換成更便宜的 open source model，都只是 vibes。他自己覺得從零做整套平台很重，客戶的痛大致收成兩種：單獨的 context，和既有的 repo。

## 為什麼現在每個人都在談 evals

[0:23](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=23s) 平台要做的是：任何 agent、任何 model、任何 codebase，可以是專有的或開源的，配上任何 context，都能評。他講的是這種平台的積木，方便別人自己做或拿去用，以及為什麼難。三件事：為什麼 evals 現在要緊、核心概念、他們現在怎麼做、怎麼接到你的 codebase。

[1:30](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=90s) 他先問誰知道 evaluate an agent 是什麼。意見分裂，多數人沒舉手。正式定義：它是 agent 系統的測試。輸入是任務，像一個 prompt。Agentic system 在他們這裡總是 agent，Claude Code、Codex 或別的。它吃下任務、跑、產生解法，可能是一個檔案，也可能是整個應用。上面再加 grading：verification、unit tests、rubrics，或 LLM as a judge，決定這是不是好解法。你得到一個訊號：輸入有沒有被處理成有意義的結果。

[2:41](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=161s) Evals 本來就是機器學習應用的核心，但 LLM 之前幾乎沒人在意，只活在研究、活在論文裡。現在 frontier labs 用 eval 結果推新模型，每次大實驗室釋出，主頁就是基準。他舉最近的 GPT 5.4：主頁第一件事是新模型和前一代在一些基準上的比較，說能力變好了。接著是 4.6，字幕有一句沒聽清。它釋出時放了大約 20 個基準的快速預覽，說比自己前幾代好，也比其他廠商好。前一場有人提到 Google 最近丟了一個 Android benchmark，專門看 agents 在 Android 應用裡的能力。評價在驅動人們覺得模型有多好，有時也決定人用不用。那是另一個故事。

[4:15](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=255s) 對他這種使用模型的人，實驗室的行銷基準重不重要？他問的是：如果有一個專門針對你的 codebase 的基準，你會不會覺得有價值。多數人覺得會。理由依角色不同。Software engineer 維護 codebase，做了一個新 context，例如 Claude Code skill。怎麼知道有沒有效？他說不用 vibes、可靠的唯一辦法，是可重複的 evals。VP of engineering 在乎的不是一個 repo，是整個組織：agents 在哪裡失敗、瓶頸是什麼。要的是整體聚合，辦法仍是 evals。再遠一點：一家中國實驗室丟出一個很強的 open source model，更便宜，因為開源所以更快。要不要把昂貴的廠商模型換掉？唯一的辦法是可靠的測試。字幕沒有說出那家實驗室的名字。

## 先選學派，再選怎麼打分

[6:29](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=389s) 第一塊積木是你接受哪一派。Vibes 那派：新模型一出、有人寫了點東西，就跳過去。另一派是有系統的 evaluations、研究和監測，願意投資去看模型長期表現。短線、人還在開發時，第一派也許可以。組織、以及對 agents 的長期投資，很難靠 vibes 做決定。反正還是有人這樣做。

[7:18](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=438s) Eval 要有目的，因為它在量特定面向。依目標，他列了幾種，字幕把部分角色名稱吃掉了。一種是自動化程度，以及 agent 做得了多複雜的功能。你做了很多 skills 這類 context，想量它們好不好。需要的輸入是那個 skill，加上一個 greenfield 環境，agent 能用到 skill 來解題。一種是想知道 agent 在這份 codebase 裡整體表現如何，那就用歷史 commits 導出任務，把那些 commits 重放一遍，看出功能有多複雜。一種是組織層級、工程師和 agents 的互動，可以用 logs，從人的紀錄裡導出真正的 edge cases。

[8:41](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=521s) 建 eval 需要統一格式。一個任務通常至少三樣：要做什麼的 prompt、一個 Dockerfile 環境，寫好裝了哪些依賴、一開始 agent 能用什麼，然後是怎麼測。再包成可以重現的跑法。Docker containers 通常最容易，但是可選的。

[9:23](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=563s) 怎麼判斷解法，沒有唯一答案。三條路，看你的產能和評量規模。Verifiable graders 是 unit tests，或跑完之後做確定性的檢查。快、便宜、可重現。難在設計：要人工看很多 edge cases，也難擴。相反的是用別的 agent 或 model 當審查者，看任務和結果好不好。可以平行跑幾千個，很能擴。貴，而且非確定，還要校正。你得給很多 context、教它怎麼判，否則它會隨便說好或壞。第三種是人。大規模做不到，但早期原型他覺得非常重要：用眼睛看，確認 eval 大致在做你要的事，把你的偏好編碼進去。滿意之後，再在 verifiable graders 和 model graders 之間取平衡。

## 誤差大到不能下結論

[11:34](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=694s) 信任分數之前，他給了一個 terminal bench 的例子，跨不同 agents 和 models。最底下、最差的是大約 200 行的 agent，字幕寫成 mini suite，只能讀檔和寫檔，模型寫成 Sinatra 4.5，分數 42.5%。誤差棒很大。最樂觀大約 50%，那就追平 Codex CLI。誤差這麼大，你不能因此結論這個小 agent 比一套 Claude 系的方案差。不要對著雜訊過度優化。

[12:34](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=754s) 收成一個流程：agent harness，這裡是 Claude Code、Codex 或你有的東西；依廠商選的 model；一組任務，任務是 prompt 和指示；跑出解法、打分、聚合成績、再從這裡得到 feedback。沒時間講的還很多：codebase 在變，基準也得變；規模，100 個任務在筆電上跑，機器會死；還要支援更多 agents 和 models。他的觀察是，自己做這套平台感覺很複雜，他無法想像有公司會決定自己做。同時很多痛點可以歸類、用可重用的方式處理。客戶的痛通常聚成兩種，所以他們最近放了兩種 eval。

## 兩種他們已經在做的 eval

[14:13](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=853s) Task evals 適合獨立的 context，例如 Claude Code skill，或某個 framework 的 API 文件。他們拿 context，用引擎分析，導出它在真實設置裡會被怎麼用的情境。那些情境就是任務。然後跑兩組：vanilla agent 碰不到這份 context，另一組碰得到。比較分數。有提升，表示 context 帶來 agent 原本不會的東西。分數下降，表示裡面有互相打架的東西，值得看。完全沒提升也是一種結果。簡報模式裡他打不開示範，改到問答前。

[15:51](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=951s) Project evals 適合既有 codebase、你在裡面交功能。例子是你維護 Hugging Face，想知道 agent 在這個 repo 的任務上表現如何。他們分析 commit 歷史，挑出和你的目標相關的 commits。依設置可以再給 context。同樣是有 context 和沒有，重放那些歷史 commits。分數低，表示 agent 自己大概做不到真正的維護者當時做的事。分數高，表示自動化程度大概不錯。

[17:05](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1025s) 結論三句。Evals 現在要緊，不只是 frontier labs 的事。它們給你指引，去提高 agent 在 codebase 裡的自主程度；decrease 後面字幕沒接完。第二是從零做時要想哪些積木。第三是不想從零做，他們在做一個可以拿來用的方案，字幕結尾寫成 building a DSL。

[18:19](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1099s) 問答前他補了 task evals 的畫面。上傳 content、上傳 skill，他們產生合成案例。例子是 ElevenLabs 的 skill，字幕寫成 11 lab，用來打 text to speech 的 API。畫面有 skill 品質的整體 review、相對沒有 skill 的影響，也有安全檢查。每個情境都能看有 context 和沒有的表現。有的例子裡，沒有 context 時 agent 做不出任何合理的東西；context 越獨特、越複雜，它的價值越大。有人確認 rubric 和說明文字都在，不是只有 0 和 100。他說右邊有一棵樹狀的分數。

## 偏差、錢，以及沒有標準答案的科學題

[20:01](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1201s) 有人問：model 打分時，要不要用一個和產生答案不同的 model。他說偏差很多。同一個 model 解題、再由同一個 model 打分，就算 agent 不同，本質上會有偏差。他們看到 Anthropic 的 models 比其他家不那麼偏，所以這件事更要擔心的是 Anthropic 以外的 model。可以打亂：用一家的 frontier model 產生某些面向，換一個來評。沒有銀彈。理想是兩個訊號一起用。Verifiable 的是 unit tests 和確定性檢查。LLM as a judge 通常給更細的看法。若把測試怎麼跑的結果餵進 judge，它會去看那些結果，而不是只做自己的判斷，偏差也會小一點。

[21:44](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1304s) 下一問是 eval 只是現況的快照，有沒有玩過 optimizer。字幕把那個工具寫成 G and，說它比較偏文字。他說只抓 codebase 現在的形狀不夠。大問題是做一條 pipeline，讓 evals 跟著 codebase 一起變，而且最好把優化迴圈接進去。他們在測的不只是評量，還有優化迴圈：依 feedback 產生建議，怎麼改 context、減少錯誤。短答案是他們在玩自己的 optimizers，沒用外部方案，迴圈是自己做的。

[23:00](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1380s) 有人問引擎如果容器化，底下是不是 Claude 的 agents SDK，以及怎麼把 Claude Code 叫起來。他說他們用的是 autonomous mode，在隔離環境裡把 agents 拉起來，東西都準備好，撞壞了也不危險。不同 agents 預先裝好、模式不同。要追 activation rate 時，若發現 agent 決定不撿起 skill，他們想提早停。SDK 看得到過程，也可以把行程關掉。所以是混著用。

[24:24](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1464s) Model graders 很貴，有沒有省法。原型階段他們完全不省，想做盡可能多的實驗，在 evals 上再疊 agent reviewers，把那些跑的結果收成有意義的圖。交給客戶時有 cache：codebase 沒變就不重跑，只重跑大概被這次改動、或這個 feature commit 影響到的情境。避免重做那些沒碰到先前 context 的東西。他承認非常貴，這也是換成 open source model、不必付廠商的吸引力。

[25:55](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1555s) 科學 agents 是開放式的，解的是我們不知道答案的問題，沒有 verifiable grader，兩條軌跡都是好幾千 tokens。他說這題很好，他沒有完整答案。若不知道理想回應是什麼，一種做法是人去看 agent 找出的公式，看它是否符合你覺得該有的感覺；同時平行轉很多 reviewer agents，把它們偏向你想看到的某種模式，用這個目標去 prompt，至少幫人縮小要驗證的範圍。另一種是在軌跡裡放 checkpoints 或 milestones，確認 agent 至少做了你期望的某一步，解法沒有整個跑偏成廢話。偏好可以編碼進去，不能編完整，但能濾掉很差的解。若是他來做，會這樣做。

[28:13](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1693s) 費用比例那問字幕很碎，聽得出是在問 token 花費和其他花費怎麼比。他的數字是：每個 eval 都不一樣，看基準、codebase、任務複雜度。UI 更貴，因為 agent 要先把應用跑起來，再叫 vision model 看它有沒有做有意義的事。演算法題會是另一個量級。他到目前的經驗，用 frontier models，一個任務讓 agent 跑完解掉，平均大概超過 2 或 3 美元，打分超過 1 美元。照這個可以算一個月 21 天、每天都做新東西、跑 1000 次要多少。後面有人說更像五五開、token 比另一項多，他說他懂問題是在問一個數字，但沒有給出那個比例。

[31:13](https://www.youtube.com/watch?v=lEO_Yp4Ks2U&t=1873s) 最後一問字幕也碎，他聽成：怎麼把工程師和 agent 的工作結果放在一起，以及這怎麼進 SDLC。他最近從一個 design partner 聽到的是，他們把 eval 接進 CI/CD。交一個 skill 就自動觸發 eval，確認它有帶來東西，例如 task eval 沒有明顯變差，也沒有明顯失敗。另一個是他們正在原型的協作開發：工程師還在迴圈裡，決定任務是什麼，看 agent 決定實作什麼，檢查中間步驟喜不喜歡。工程師用聊天的方式和做任務的 agent 討論：我喜不喜歡、資訊夠不夠、unit tests 行不行。人不再寫，而是確認 agent 沒有跑偏、沒有發明一個很精巧但做作的任務，而是貼著真實情境。有時只要改一兩下，就能把它帶出死迴圈。
