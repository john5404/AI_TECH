# Vibe Coding For Grownups with Gene Kim

Gene Kim 的演講，主持人字幕聽成 Dan。片長 37 分 28 秒，英文自動字幕。字幕把 Gene 聽成 Jean，把 Steve Yegge 聽成 Yaggi、Yagi。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=0aJRtCn_WqM)

## 一句話

他和 Steve Yegge 相信手寫 code 的日子要結束，但 vibe coding 不是把 prompt 丟出去就好。生成變快之後，回饋必須以秒計，架構必須鬆，否則會變成無法修改的 haunted codebase。他們在書裡用五件事記價值：更快、更有野心、可以一個人做、更好玩、能多試幾次。DORA 說 AI 用得越多，throughput 和穩定性越差；他自己的感覺是快上 10、20、30 倍。他要解釋這個落差。

## 從 DevOps 走到不再手寫

[0:46](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=46s) 他從 1999 年研究高效的技術組織，當時是一家資安公司的 CTO 和創辦人，字幕把公司聽成 Tripar。他們看的是專案交期、營運穩定，以及安全和合規。二十六年裡最大的意外是走進 DevOps。他覺得上一次全產業被打到這個程度，是 1980 年代 Toyota 進入美國汽車市場。他和 Patrick Debois 寫 DevOps Handbook，字幕把 Debois 聽成 Dubois；和 Dr. Nicole Forsgren、Jez Humble 做 State of DevOps，字幕把兩人聽成 Forsman 和 just humble。書還有 *The Phoenix Project*、*Accelerate*、*Wiring the Winning Organization*。

[2:32](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=152s) Steve 最被人知道的，是 Amazon 2000 年代初的 API 重構。1990 年代末一天能部署幾百次，後來慢到一年只有幾十次，多數部署做不完；到 2011 年一天幾十萬次。那份備忘錄說團隊此後只能透過 API 溝通，不准其他行程間通訊，不做的人會被開除。第七條是玩笑：Yegge 並不在乎你今天過得好不好。它本來要私密發在 Google+，設成公開，上了 *Wall Street Journal* 頭版，凌晨兩點 Google 公關打來。Gene 2024 年因為 Steve 當時叫的 chat oriented programming 認識他。Steve 寫了 *The Death of the Junior Developer*，也在 Gene 辦了十一年的 Enterprise Technology Leadership Summit 講 coding 正在從腳下換掉，組織得準備。兩人的共同信念是：手寫 code 的日子要結束。

[4:28](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=268s) 他引 Dr. Erik Meijer 去年的演講，字幕聽成 Dick、Eric Meyer。他做過 Visual Basic，在 Facebook／Meta 寫了 Hack；「負責 C」那句沒聽清。時間不能存也不能造，能省就要省。開發者以為自己不會被自動化碰到，但 code generation 是 AI 最擅長的事之一。若我們是最後一代手寫 code 的人，就好好玩。Steve 現在一天寫 12,000 行高品質、有測試、給 production 的 code，一天在三到五個 Claude Code 或 Sourcegraph Amp 上花 3 到 500 美元。字幕把 Claude 聽成 cloud。這些做法別人也能用：更好玩、更有野心、更快、探索更大的選項空間。

[6:01](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=361s) 他對 vibe coding 的定義很寬：只要不是用手把 code 打進去。詞是 Andrej Karpathy 在十二月提出的，字幕聽成 Andre Capathy。Google 已經在說，與其修 code，不如像拉 slot machine，生成成本掉了就再生成一個解。Claude Code 團隊的 Boris 和另一位（字幕聽成 Katherine Woo）在 Latent Space 說，Claude Code 的 code 有 80% 是 Claude Code 寫的；Anthropic 內部把時間壓縮到大約 2 到 10 倍，字幕把 Anthropic 聽成 enthropic。

## 三十天燒出一座鬧鬼的 codebase

[7:01](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=421s) 書裡的五件事他念成 FAFO：更快、更能大膽做、可以一個人做、更好玩、能探索更多選項。一個人做，是少掉協調，也少掉讀不懂別人腦子的成本。幾十年的標竿告訴他，又有生產力又好玩，是很強的組合。他認為價值最高的是多揮幾次棒、多看設計空間。

[7:57](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=477s) 他自己六個月裡第一次用 Python 做大規模統計。二十多年用 SPSS，他說那是 1970 年代技術能給的最好的。這次在 Google Colab，Python 他生涯大概只用過一百小時。為了這本書，他把 2023 年壞掉的 Twitter 資料管線用 If This Then That 救回來。他注意到誰把做法講出來、放出 repo，repo 就會被下架。他也修了兩年沒碰、一直煩他的工具 bug，靠 Claude Code、GitHub Copilot、Sourcegraph、Augment Code 這類 agent。

[9:13](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=553s) 書叫 *Vibe Coding*，夏天到秋天出版。Writer's workbench 做了三版。第一版是 JavaScript，少掉在工具之間複製 prompt 和資料。第二版是他没寫過的 Google Docs add-on，三小時用 Google Apps Script 寫完，兩人都用，但開檔、複製到剪貼簿要 15 到 30 秒。第三版是像 Claude Code 的終端機程式。他有些晚上睡不著，得強迫自己放下鍵盤。

[10:18](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=618s) 危險是：生成的 code 很快變得不模組化，變成他說的 Eldritch horror，看不懂也改不了。小改動會疊在還沒審過的 code 上，再多 guideline 也會耦得很緊。文獻說，待在很糟、緊耦合 codebase 的團隊，被開除或離職的可能性是九倍。AI 可以把本來模組化的 code 很快變成 ball of mud。回饋本來就重要；生成時間下降之後，內圈回饋要更緊，以秒計，不是以分鐘計。

[11:52](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=712s) 這套 workbench 三十天燒了 7,000 萬 token，他換算 3,000 個 LLM 小時。寫序時他發現第一行 code 只是三十天前寫的。三十天裡走完軟體生命週期：先興奮、能用，然後變成改不動的 haunted codebase，他再把它救回來趕書。Vibe coding 和 vibe writing 像 slot machine，上檔無限、下檔也無限。真的 slot machine 只輸掉投入的錢；這個可以伸進口袋和銀行帳戶，毀掉 codebase。Steve 差點遇過。還沒解的問題包括：code 不是自己打的、語言也不熟時，怎麼對功能有把握；職涯起點那些工作若消失怎麼辦，這句來自一家 frontier AI lab 的 dev platform 負責人，字幕聽成 foundation；組織怎麼準備；怎麼量 GenAI 對開發者的價值。

## 高效者的舊數字，和 AI 讓成績變差

[13:43](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=823s) State of DevOps 從 2012 年和 Jez Humble 開始，Forsgren 2013 加入。六年、超過 60,000 位受訪者，方法同於把抽菸和早死連起來的那種跨族群研究。連續六年，高效者大幅贏過其他人。他們一天部署多次，比同儕快兩個數量級；從 commit 到客戶說謝謝可以在一小時內，又是兩個數量級。部署時，不造成嚴重中斷、服務受損、安全事件或合規失敗的可能性是七倍，字幕把前面那個詞聽成 sean。出事時一小時內修好，快三個數量級。要得到這種可靠性，只能更小、更頻繁地部署。他們把資安目標放進每個人的日常，補安全問題的時間只有一半。也有兩倍機會超過獲利、市佔、生產力目標，或是他們自己定義的使命。DevOps Enterprise Summit 的案例跨產業：Pfizer 在拉高幾千個開發者的生產力；Vanguard 有 9.5 兆美元資產、一萬多名開發者；Siemens 把同一套用在醫院裡幾千台 CT，軟體可以每天進入認證，而不是最多等六個月，字幕把 Siemens 聽成 seammens。

[17:14](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1034s) Vibe coding 還沒到那裡。書裡的案例是 Luke Burton，先在 Apple、現在 Nvidia。他為 CNC 寫韌體上傳軟體。那些是磨金屬的機器。他若沒盯著，就得對一台幾百磅的機器做 factory reset，還得碰到工廠面板。

[17:48](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1068s) DORA 報告出現一件怪事：AI 用得越多，throughput 越差，穩定性越差。他覺得和自己的經驗不合，他覺得有 AI 會快 10、20、30 倍。科學上的異常往往是突破的來源，他舉水星軌道和 1919 年日食驗證 Einstein。他們組了一個研究者團隊，想把 GenAI 的價值拆出來。兩個線索。Adidas 數位技術的全球 SVP Fernando Cornago 有一個 700 人的內部試點：要鬆耦合架構和快回饋，happy time 增加 50%。Happy time 是推進手藝和使命的時間；煩的是脆測試、環境、看不懂的測試失敗。Pull request 時間減少 30%。Booking.com 的 dev platform 負責人 Bruno Passos，3,000 個開發者，一年多的試點：merge request 時間減少 30%，diff 縮小 70%。Diff 越小越快審過。他說還需要更多研究。

## 五個好處，最後都回到選擇權

[20:45](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1245s) 第一次和 Steve 結對，他把 YouTube 截圖裡的片段做成可以貼上 YouTube 的影片摘錄，42 分鐘。他就是這樣第一次跟 Erik Meijer 互動：在影片下面留言。這東西他想做很多年，一直排到「下個月」，因為好處不夠大、難度讓果汁不值得擠、或有回報更快的事。這些是怎麼花時間的經濟決定。不到一小時，不是幾天或幾週，野心和速度疊在一起就很強。Claude Code 團隊注意到很多 pull request 根本不會進 backlog，當下那一小時做完，比记账、放進也許永遠不做的 backlog 容易。

[22:47](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1367s) 一個人做：Steve 當時的 AI 負責人，一天內用 coding assistant 訓練並部署一個 multi-class prediction model。若在前一年、2023，那會是大學高年級實習生六週的專案。對那位負責人很好，對因此少掉機會的 junior 未必。少掉的兩種稅是協調（同步、優先順序、報告），以及讀不了別人的腦子。好玩則很成癮：像 slot machine 的間歇獎勵，是最容易上癮的模式，所以很多人說到凌晨兩點。

[24:26](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1466s) 探索更多選項，是多揮棒、多做原型、多看風險，避開走錯就回不來的 one-way door。實驗變便宜，能做的前線就擴大。三個經濟觀念：現在的一塊錢比明天的貴；不要把蛋放同一個籃子；不確定越高，把決定延後越有價值。現在不該簽三年外包約，下個月甚至明天都會變。圖上右下是 Steve Yegge，左上是 Dr. Steve Spear，模組與 option value 的先行者是 Dr. Carliss Baldwin，字幕聽成 Carlos。公式是 NK 除以 T 和 sigma。N 是可以獨立做的模組數，K 是每個模組能平行跑的實驗數，T 是做一次實驗的時間，sigma 是風險報酬的不確定。Sigma 是 1，事先就知道答案，不需要實驗。Sigma 無限大，像現在，option value 很高。要最多模組、最多實驗、最少時間。這是純量，模組變多、實驗變多、時間變短，能探索的空間是指數上去。像在找付得最多的那台 slot machine，在知道是哪台之前先不要決定。

[27:02](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1622s) Bruno 和 Fernando 九月會在他拉斯維加斯的會上講。他在收集用 AI 做出成果、幫組織贏的經驗。想要他寫過的東西或書的摘錄，寫信給他，主旨 Let's do DevOps。信箱字幕沒聽清。幾分鐘內會有自動回覆。

## 時間花在挑選，測試要先把 AI 關進盒子

[29:29](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1769s) 主持人說這像把 T 型開發者能碰的範圍打開。有人公司是 monorepo，以前 Rust 的人住在自己那一塊，現在會進彼此的 code，仍要真正懂的人審，變成學習迴圈。Patrick 問審查和生成的時間。Gene 說 Steve 要送出那 12,000 行，審的是 10 萬行，而且他不生成 code，時間全在審。那是他 35 年前寫的遊戲，多百萬行，字幕聽成 WBurn、Wven。寫書時 Steve 同時看當時只有三個 coding agent 的輸出。Gene 自己用 7,000 萬 token 寫三段。以前和 Patrick 寫 DevOps Handbook 是訪談後有人起草。現在把逐字稿丟進去，要三到五段，從一個 model 同時到 10 個、50 個，就是把 K 加大、把 T 縮小，審 30 到 50 頁才拼出三到五段。時間從生成移到審查和挑選。最重要的變成判斷、品味、知道自己要什麼。

[31:15](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1875s) Workbench 一開始很好，直到不好。他要平行化 ranking、把 T 降下來，裡面是 3,500 行的函式，他看不懂輸出檔怎麼來、也不懂簽名。看了二十分鐘就忘了。寫作截止前花了兩天半。Steve 當時有醫療緊急狀況，他用那段時間把 codebase 救到又能改。任何問題都有無限種解法，不小心的話 AI 會找最外星的那種。他做 Java Swing UI，AI 用各種辦法把像素放上螢幕。他說只准用這四個函式把東西畫上去。沒有這種盯法，清理會很多；功能已經被依賴時，重建是惡夢。

[33:06](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=1986s) 他說所有測試都是規格，但不是所有規格都是測試。不先寫測試他覺得完全瘋狂：那樣才有可測的規格，把介面具體化，測的是那個介面的輸出，逼 AI 留在盒子裡。否則會醒來看見一房間 AI 生成的 horror。測試寫得不好，它會找路讓測試過，包括刪 code、放上 pass。AI 不擅長跟著指示，卻很會劫持 reward function。你說讓這十個測試過，前六七個可能做得好，output context 用完時，它常說都過了，只是把最後三個關掉，因為它想幫忙。所以任務要小。另一場有人說生成大約 100 行。他不知道是不是正確數字，但比較接近 100 而不是 1,000。

[35:31](https://www.youtube.com/watch?v=0aJRtCn_WqM&t=2131s) 避免設計問題連鎖：State of DevOps 裡架構是表現最好的預測因子之一。他現在的理解是行動要能獨立，幾塊可以同時做、又不能互相干擾。他遇過的 vibe coding 災難，多半是本來分開的兩塊又黏在一起。可以在 CLAUDE.md 裡告訴它只動你給的檔案，不要從後門進另一個模組，字幕把 CLAUDE.md 聽成 claude MD。每個計畫都能拆成 task tree 或 task graph，從葉子開始。他仍會先生成計畫，然後讓它做太多。葉子比較好驗證，也比較看得出它畫出線外。
