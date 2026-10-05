# Why Context Beats Model Choice for AI Agents

講者沒有在字幕裡自報姓名。他在 Tessl 兩年，之前在 Snyk 六年，稱 Guy 為 founder。場次他稱為 Context is King。報名超過 100 人。他說自己把一場 75 分鐘的內容壓進大約 20 分鐘，片長約 30 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=dans3VeY8GM)

## 一句話

2025 年大家在拚採用速度，今年要的是效果和 ROI。他排出的順序是：context 的品質決定你能不能 one-shot，agent 決定 model 被用得多好，model 本身只是其中一層。Skill 放進去之後，Opus、Sonnet、Haiku 的分數差距變小，貴 model 的優勢也被壓縮。

## Context 先於 model

[0:00](https://www.youtube.com/watch?v=dans3VeY8GM&t=0s) 比 model 更重要的是你選的 agent。價值往上跳，常常不是 model 變好，而是 agent 在 rotate、loop，把 model 的能力擠出來。再上一層是 context：當 one-shot 變多，是因為它比較懂你要做什麼。Context 讓你用好 agent，agent 讓你用好 model，三層合在一起才是價值。

[2:37](https://www.youtube.com/watch?v=dans3VeY8GM&t=157s) 他拿一個叫 “first to five best practices” 的 skill 做過測試，模型有 Opus、Sonnet、Haiku。Opus 仍會比較好，但有了 skill，彼此差距沒有那麼大。再把成本算進去，model 之間的 ROI 差距更小。數字他說之後可能會變。

[3:31](https://www.youtube.com/watch?v=dans3VeY8GM&t=211s) Context 是 agent 碰得到的一切：memory、本機檔案、載入的 skills 和 rules、第三方或自有程式庫的文件、對話訊息、測試輸出、linter 回傳的結果。

## Rules 一直在，skill 用到才載

[4:14](https://www.youtube.com/watch?v=dans3VeY8GM&t=254s) Rules 是行為約束，agent 總是會讀，例如 `CLAUDE.md`。它們不看使用者這次問什麼，組織規定常常放這裡。Skills 則像 callable procedures，跟當下任務有關，需要才呼叫。內容是 progressive disclosure，agent 覺得該用才載。它若認為自己會做，可能根本不呼叫。

[5:35](https://www.youtube.com/watch?v=dans3VeY8GM&t=335s) `SKILL.md` 開頭的 metadata 是必填的 name 和 description。Agent 決定要不要 activate，一開始只靠這兩項。Activation 的意思是：我需要這份 skill 裡更多資訊，於是再讀、再載進 context，而且可以依任務決定載多少。一下子從什麼都不知道，變成剛好知道該知道的。

## 視窗有一個剛剛好的區間

[6:27](https://www.youtube.com/watch?v=dans3VeY8GM&t=387s) Context window 是有限記憶，裝檔案、skills、專案或使用者檔案。填滿不會跟很空時一樣好用。太少，任務做完了，但做法不是你要的。太多，agent 被淹沒，漏掉關鍵資訊，表現下降。他要的是 Goldilocks zone。比喻有兩個：三隻熊的故事，以及恆星周圍能維持生命的距離，太近太熱、太遠長不出東西。視窗大小各家不同，不要以為可以塞滿而不掉效能。

[8:14](https://www.youtube.com/watch?v=dans3VeY8GM&t=494s) 也可以把 token 釋放出來。視窗滿了會自動 compaction。手動 compact 時可以附上下一步要做什麼，摘要就會照著那個目標留資料，不必把別的東西再載一次。

## 把每場演講做成一個 skill

[8:54](https://www.youtube.com/watch?v=dans3VeY8GM&t=534s) Demo 的應用叫 Talk to Skill，本身也用一個 skill。他們要在 Dev Con 把每一場 session 變成 skill：向講者提問、拿來對自己的專案試想法、用那場的教訓回答「我的情況該怎麼做」。當天中午的 lunch and learn，Guy 演示過 keynote。

[10:10](https://www.youtube.com/watch?v=dans3VeY8GM&t=610s) 來源是 Granola 資料夾。逐字稿一進來就放進資料夾，程式大約每 30 秒刷新，發現新檔就用 skill 自動做成 session skill 並發布。產物有完整逐字稿、引文、上傳到 Tessl 的 tile JSON、大綱，以及帶 name、description、用法的 `SKILL.md`。他用 npm install 把含有 skill 的 tile（他說也是 plugin）裝進環境，開 Claude，問為什麼該把 context 當 code。Skill 自己 activate，讀了 outline，把相關片段載進 context。

[12:23](https://www.youtube.com/watch?v=dans3VeY8GM&t=743s) 他隨口問誰在過去兩週從 Claude 換到 Cursor。上個月他看到三個人。跟辦公室的 Alan 聊時，一個給 demo 用的 pirate skill 花了三分鐘，他怪 deep thinking 太慢。回來後，skill 已經用引文回答，而且 skills 的行為像 code：要版本化。他再問講者提到的 CDLC。字幕同一段還出現 clock，這裡不改寫。他希望這像在跟講者說話，引文之外也可以用到外面的資訊。Dev Con 每場都會這樣做。

[13:46](https://www.youtube.com/watch?v=dans3VeY8GM&t=826s) 在 Tessl 裡，流程是建立 skill、發布到 registry。他當天加的這筆是 1.0.1。接著 review：對照 Anthropic 公布的 best practices（他說不是 Codex），看像不像，並改過去。然後是 optimisation：同一批測試，有 skill 和沒有 skill 各跑一次，看影響多大。Registry 上這份比沒有 skill 好 1.3 倍；品質從他原本的 82% 到 90%。另外用 Snyk 做 security scan，以 LLM 當 judge，找惡意內容或壞的安全寫法。Evals 會標出好、壞，以及 context 反而把 agent 搞混、成績退步的地方。

## 技能一多，啟動和衝突比撰寫更難

[17:00](https://www.youtube.com/watch?v=dans3VeY8GM&t=1020s) 規模化他列了六種情況，不管用不用 Tessl 都該有辦法處理。上百個 skill 若只在每個人本機，別人發現不了，需要 registry。同一個專案每人裝的 skill 不同，就沒有一致性；組織可以規定 always-on，專有程式庫的 context 也該人人都有，不然 code review 會一直寫「你必須用這個」。這種話不想對人說，也不想對 agent 說。裝了很多卻不知道有沒有被正確 activate，skill 再好也沒用。到處安裝就要稽核，直接用 Snyk 或透過 registry。他說還沒發生「惡意 skill 進了 production」那種頭條，但頭條在等。五個人做了同一個 skill，另外大概還有 20 個別的，你得知道哪個品質高、影響大、哪個有惡意，並把重複的從視野裡拿掉。最後是過期：把 context 當 code。程式變了，context 要變；model 變強、agent 已經會的部分，context 裡也許該刪。

[20:22](https://www.youtube.com/watch?v=dans3VeY8GM&t=1222s) 寫 skill 的教訓來自一輪大量 pull request。在倫敦 AI Engineer 第一次講時，GitHub 上的 skill 十四週從十一月的 12 個長到 5,500，現在大概更多。放上 GitHub 之後，十次有九次再也不更新。一開始就完美的機會幾乎是零。他們送出 622 張 pull request，從中看出大家最常錯的地方。

[21:37](https://www.youtube.com/watch?v=dans3VeY8GM&t=1297s) 最大的問題是 description 寫得很爛。寫得具體、點到你用的工具或技術，agent 較會用，因為訓練資料裡這類東西較少。泛泛的 “A helpful skill for code review and quality improvement”，agent 以為自己會。改成用專案規則跑 ESLint，觸發就高很多。

[22:40](https://www.youtube.com/watch?v=dans3VeY8GM&t=1360s) 沒有用 slash command 強迫時，skill 只有 41% 的次數會 activate。他下一句又說 41% 不會。兩句方向相反，這裡採用他先說的啟動比例。原因之一是 god skills：一個 skill 什麼都做。Plugin 裡若有 50 件事，特定任務可能啟動錯的 skill，或因為重疊太多而一個都不啟動。另一個是 context bloat，塞太多，agent 抽不到對的片段。Anthropic 的建議是 `SKILL.md` 低於 500 行。優化過的 skill 少用 40% token，任務時間少一半。做法是去掉重複，以及 agent 本來就會的步驟，然後跑 evals。

[24:42](https://www.youtube.com/watch?v=dans3VeY8GM&t=1482s) 有人問能不能用 hooks 每回合檢查該不該用 skill。他說可以，但裝了 100 個 skill 時，hook 還是得選哪一個，選錯的機會很大。Slash command 可以強迫。報酬更高的是改 description，以及怎麼打包：太多重疊就拆開；總是一起做的幾件小事可以收成一個。不能量的東西不能改。他們新的 skill optimiser 會跑 activation tests，也能看到何時被啟動。Hooks 可以留到後面，問「這次能不能用某個 skill 做得更好」；若你同時又維護一份清單，工作幾乎做了兩遍。

[26:48](https://www.youtube.com/watch?v=dans3VeY8GM&t=1608s) 另一問是兩個 skill 意見衝突時怎麼辦。他認為 skill 一多就幾乎必然發生，企業部署是他們想加進平台的項目。很難單獨測。從很多地方裝進 50 個 skill 之後，兩個不同意見可能被選邊，也可能被折衷到兩邊都不滿足。需要 conflict detection，指出意見不同，有時連太相似也要指出；還需要 merge resolution，決定誰贏。更可能的出路是拿掉或改掉其中一個，把衝突移走。現在還很早，大家剛開始往環境裡丟 skill，這件事只能再拖一下子。
