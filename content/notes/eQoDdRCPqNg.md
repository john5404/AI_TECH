# What we Learned from Evaluating 500 AI Skills Across 2,000+ Scenarios

片長 27 分 41 秒，英文手寫字幕。講者在 Tessl 做這套 eval（字幕寫成 T-cell），Simon 負責後面的問答。字幕沒有把講者姓名聽清楚。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 eval 多次聽成 evil、email，把 Kimi 聽成 Kimmy，把 SWE-bench 聽成 sweet bench，把 harness 聽成 harmony；下文用校正後的詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=eQoDdRCPqNg)

## 一句話

SWE-bench、Terminal Bench 和各種排行榜給出一個數字，他們已經不太敢直接信。講者說 eval 沒有壞掉，但怎麼評估 AI agent 本身還是一門研究社群沒做完的學科。同一套場景、同一套 harness，Kimi 2.6 的失敗率可以比 2.5 高大約 18 倍，原因是容器記憶體，不是模型退步。Skill 帶來的 6.25 倍進步，可以是 agent 根本沒做 OAuth、只是把合理結果幻覺出來。Judge 有家族內和跨家族的偏好，規模一大，Docker、沙箱和 pod 也會改分數。

## 數字先拆開，再決定信哪一段

[1:22](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=82s) 他們跑很多 eval，也吃過很多苦。投影片好看是因為 Claude，他說自己不會設計。Simon 說結尾留問答，中途舉手也可以。

[1:52](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=112s) SWE-bench、Terminal Bench、排行榜都有用，但它們是單一數字。別的因素會灌進那個數字，所以他們開始不太信。這場要講那些數字實際上在量什麼，怎麼拆成可信的訊號。只為了基準分數去最佳化，得不到他們要的結果。三個陷阱他覺得到處都有，實驗室也不例外。Eval 沒壞；他們跑得太多，不會說它壞了。錯的是把它當成「跑一下就好」，而不問你量到的訊號是什麼。

[3:04](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=184s) 上週一輪是為了當時的 Kimi 發布，比 Kimi 2.5 和 2.6。跑在 Kimi CLI 上，後面是官方的 Kimi platform。場景、harness、eval orchestrator 都相同，2.6 的失敗率卻大約是 2.5 的 18 倍。新模型基準他們會跑超過 500 個 skills、超過 2000 個 scenarios，這個差距出現在相當廣的 eval 上。若 2.6 該更好，這看起來就是退步。

[3:56](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=236s) 挖下去不是 Kimi，是他們自己，具體是跑 eval 的容器平台 Daytona。Kimi 2.6 的 CLI 不知為何吃掉更多記憶體，他們得把機器的記憶體調高。這件事相當穩定地停在 3% 左右，不容易抓，卻被記成失敗，因為 eval harness 沒有處理這種情況。標題數字變差的時候，他們心裡的先驗是：這該是更好的模型，實驗室也該做過 due diligence。

[4:44](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=284s) 每條 eval 都落在 synthetic 和真實專案之間。Synthetic 可控、便宜、可重複，狀態、場景、fixture 都已知，訊號比較糊，像 unit test。真實專案會隨時間累積 pattern、架構和功能，不能把舊場景原封不動跑在新的 timestamp 上，因為整個 repo 已經變了。它比較像工程師每天用 coding agent 的感覺，也比較像 integration 或 end-to-end test：貴，訊號較強。

## Outcome trap：必要，但不是充分

[5:56](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=356s) 第一個陷阱是只問結果。Code 對不對、測試過不過、任務完不完成。這是必要條件，不是充分條件。Skills 尤其在乎怎麼做，不只有做了什麼。Workflow 有沒有讀 security policy、有沒有套用、endpoint 有沒有保護、有沒有去 Linear 更新 ticket 再送 PR。很多 skill 是步驟序列，不是「輸出的 code 必須長這樣」。模型可以走捷徑，這個場景過了，換一個就不通用。只看最終結果，猜對、跳步、直接跳到看起來像成功的結論，都會算過。你可能交出一個其實沒被載入、沒在帶路的 skill，它只是碰巧到達。若沒有這個 skill 也能做完，skill 還有沒有價值，他說是另一場演講。

[7:30](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=450s) Tessl 內部一位研究者的案例，從沒有 context 到帶入 skill，進步 6.25 倍，是他們看過、而且重複出現過的最高之一。Skill 內容、trajectory、場景和輸出都看了。第一步是對外部服務做 OAuth。沙箱裡沒有人去按同意，也沒有 API key 或其他認證，agent 出不去。評分標準卻假設 OAuth 會成功，因為它是 outcome oriented，只看「真的跟那個服務互動之後，合理結果長什麼樣」。Agent 對服務夠熟，又有 skill 的 context，就幻覺出一份看起來恰當的結果。

[8:57](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=537s) 所以他們開始看 trajectory，不只有這一案。人也是在做 workflow。評分要同時綁結果和過程，才能評估 skill 的影響，而不只是它的產出。他覺得這個陷阱，靠看 trajectory，後面可以撐住。

## Judge 會偏，基礎設施也會改報酬

[9:46](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=586s) 第二個是 judge。LLM as a judge 很好用：定 rubric，讓一批 LLM 評 trajectory 或結果，不必手改。文獻已經有自我偏好：Sonnet 當 judge，會把 Sonnet 的解答打得比 GPT 的高。他們看到這也跨家族。Sonnet 對 GLM 5.1 的偏好，高過 GPT 5.5 對 GLM 5.1 解答的偏好。不能只避免同一家族互比，還得知道跨家族的偏差。

[10:55](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=655s) 這來自 Simon 即將發在 blog 的結果，現場說是明天。一組 judge 底下，GPT 5.5 比 GPT 5.3 差，看起來很有意思。換一組 judge，再換一組，方向就變了。是某個模型家族對某一類解答有偏好。不是災難，不是從 0 到 75 或 75 到 100，但會改排名的方向。

[11:50](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=710s) 他們仍大量用 judge，所以要擋。做法是跑很多基準，弄清每個家族對族內、族外模型的偏好；用 rubric 壓低 eval 內部的變異，產物可以是人寫的或 LM 生成的，用來把分數釘住；再跨家族平均，不要挑一筆好看的。解本身他們一開始就跑多次，因為環境和非確定性方差很大。新的學習是 judge 那一側也要同樣嚴格，兩邊都跑多次。

[13:04](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=784s) 第三個是規模。研究人員在筆電上跑 500 個場景、人在旁邊按、辦公室 Wi-Fi 很穩，這很可重複。跑到 2 萬、3 萬、4 萬次，橫跨 Daytona、AWS 和其他基礎設施，還要在 Anthropic、Bedrock、Vertex 之間做 load balancing，設定錯誤和記憶體上限就不只造成失敗，還會造成分數差異。

[14:10](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=850s) 眼下最具體的幾件。Docker layer 是版本管理的慢性問題：雲上和自己機器上的 Docker 版本不同，他數不清幾次。流程會補上，但版本和 metadata 因此很重要。「我們退步了」有時只是 Claude Code 改版，次數多到他不願意承認。Daytona 會回覆沙箱正在關閉，沙箱卻晚一點才真的停；他們立刻再開一台，預期一台卻變成兩台，資源上限用完。還有零秒就卡住的情況，分不清是 Daytona、CLI 還是底層模型，不值得深查，但得偶爾去踢那些機器，要有 retry 和 refresh，免得浪費時間和算力。Pod 錯誤則是資源要求很緊時，一批任務失敗。Agent 寫 code、裝依賴、開很大的 VM，或塞進很大的 node modules 再全部 import。這被記成解答沒做完，其實是資源問題，給它機會模型會做完。

[16:10](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=970s) 他放的是一張 Anthropic 的投影片。字幕把二月發表的出處聽成 Ethiopia，文章名字沒聽清。他們幾個月後看到同樣的事，他說 Anthropic 照例走在前面。跑 Terminal Bench 的環境，只改給它的資源，模型表現就變，RL 裡的 reward signal 也跟著變。這和模型、agent harness 無關，是外面的東西。於是你以為在最佳化模型，其實是在你給那些環境的資源限制下，不小心地最佳化它。訊號比你希望的糊。

## 快的糊訊號，和慢的完整訊號

[17:09](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1029s) 慢而完整的 eval，例如會隨時間漂移的真實專案、在一台機器上轉起整個開發生態系，代表性高，但不好從中學習。一輪要 24 小時，reward 很難拿回來。窄的 synthetic 比較便宜、比較糊、快很多。要的是能趕快拿去訓練和最佳化的近似，還是更接近現實、但 RL 或 context 最佳化轉得更慢的那一種。

[18:14](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1094s) 他的背景是軟體工程。記憶體不夠、網路、這些討厭的基礎設施，不是「只是平台工程」。那是研究投資。否則訊號是噪的，研究品質一起壞。研究投資不只有 eval 設計、評分標準和環境，底層基礎設施一樣算，因為它們連在一起。

[19:11](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1151s) 三個陷阱都要拆。Outcome：從只看結果，改成看 agent 的每一步。有時只在乎做了什麼，有時只在乎怎麼做，常常兩個都要。Judge：不要問「品質好不好」「code 對不對」「安不安全」，改成小的、可核對的主張。Rubric 愈細，不同 judge、不同家族愈一致。Opus 4.7 很強，prompt 寫得很糟也能想出東西，但拆開會更穩。Scale：留一條又快又窄的，也留一條大約要一天的完整評測，看這個循環裡哪種訊號有價值。若 100 個 unit test 能給他 end-to-end 95% 的信心，他寧願跑那 100 個。

[21:01](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1261s) 更大的點是：我們還不太知道怎麼好好評。最早的 LLM eval 是給一段文字、拿回一段文字。現在有環境、agent harness、外部依賴、檔案系統，哪一段壞了都會影響分數。社群得決定哪些要報。別人說 Claude Code 配 Opus 4.7 在 Terminal Bench 拿了某個分數，若不知道 Claude Code 的版本，那個分數對他沒有意義，因為 Claude Code 改版會改表現；資源配置也一樣，盒子比較小，它寫不出那麼多 code。

[21:59](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1319s) 他要的是誠實的心智模型：eval 告訴你什麼、沒告訴你什麼。單一數字可以拿來最佳化，也可以拿去報告，聚合還是需要的。但要知道每一塊是什麼。若你只看結果、不看過程，那是模糊近似，可以，只要知道盲點在哪。能把不對的地方和不知道的地方講出來，才比較敢信，也才知道接下來要補哪裡。

## 問答：平行很多小場景，過程仍想直接看

[23:09](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1389s) 有人問，若你只擅長其中一種、又得把 eval 跑得快，喜歡什麼工具。他對 Daytona 有很多挫折，也因為那樣喜歡它。他們投資了自己的 eval orchestrator，計算都跑在 Daytona 上，因為啟動是次秒級，一次開很多 eval 容器很有幫助。他們沒有大筆投資去調快單一環境，寧願在環境和場景之間平行，而不是把任何一次跑得超快。後果是把場景做得盡量小，只拿想要的訊號，而不是一個又大又複雜、同時量很多事、也更久的場景。

[24:22](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1462s) 下一個問題他說可能有爭議：真的要評過程嗎，還是用一大組設計來觸發那些過程的代表性資料就夠。他停了一下。他們非得看 trajectory 的失敗，有沒有辦法做成一個場景或一個結果來觸發，也許可以。你大概能人工做出讓流程裡任一步失敗的場景。但他一時想不出那個做法長什麼樣，所以還是想直接看 trajectory：你叫 agent 走一連串步驟，就看它有沒有走，而不是設計一個結果、再反推它走過。他覺得可能做得到，不確定會不會比較容易。

[26:02](https://www.youtube.com/watch?v=eQoDdRCPqNg&t=1562s) 最後一問字幕沒聽全，大致是要多少、要多久。單一場景大約 10 到 15 分鐘，能平行就平行。新模型的基準是 500 個他們覺得有代表性的 skills；字幕在「拆成多少 scenarios」那一句斷掉，前面他說過這套基準超過 2000 個 scenarios。牆鐘時間大約一小時，因為他們沒有全部同時跑，也不覺得需要。產品 PR 上的回歸測試他們試過，大約 15 分鐘，覺得太長，沒有採用。比較認真在看的是每晚跑：完整套件花一小時，過夜做完。還不到 unit test、人在迴圈裡的那種速度。他希望能到那裡，但現在對準的時間尺度比較像 PR review。字幕最後幾個字聽成 turn off。
