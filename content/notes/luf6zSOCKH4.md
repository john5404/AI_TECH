# The Centrifuge Method: Spin the Stupid Out of AI

Lada Kesseler，Logic20/20 的 principal engineer。Simon Maple 在舊金山 AI Engineer 現場錄這集，當天是 7 月 1 日上午十點剛過。片長約 45 分 50 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。節目由 Tessl 製作，另一位主持人是 Guy Podjarny。

- 原片：[YouTube](https://www.youtube.com/watch?v=luf6zSOCKH4)

## 一句話

Agent 帶著討好人的預設，而且一次只做得好一件事。品質不是第一次就有。她的做法是 ground rules 叫它反對你，skill 的 description 寫給 agent 看，然後用她叫 centrifuge 的迴圈：一步、寫進檔、讀回來、再轉。轉得夠快，愚蠢會被甩出去。想一夜換成 software factory 的人，她覺得會淹死在垃圾裡。

## 幾乎什麼都交給 AI，但信要另外建

[2:00](https://www.youtube.com/watch?v=luf6zSOCKH4&t=120s) 他們在會場碰到，就改成當面錄。她在一家承包公司，據點已經遍布美國。去年十一月紐約的 AI DevCon 她講過一場，分數很高。Patrick 事後說一定要把她再請回來。

[3:38](https://www.youtube.com/watch?v=luf6zSOCKH4&t=218s) 她現在幾乎什麼都用 AI，不只有軟體。Code 是起點，系統裡有時有 agent。她真正在意的是把寫 code 這一段做對。跟 coding agent 工作，也會讓她更知道系統該怎麼寫，兩件事綁在一起。筆記以前很亂，Obsidian 不適合她。現在是一個 Dropbox 資料夾，叫它處理今天的筆記，有時反問她，然後自己歸檔。Simon 把自己的接到 Slack 和 Granola，它什麼都知道，還會說今天該做什麼。Lada 還在硬撐，不讓它讀信。Simon 可以讓它把信寫順，但還不放心讓它寄出。信是她在跟別人說話，對方以為是她寫的。把 AI slop 丟給別人讀，她和 Simon 都覺得失禮。

## Ground rules：給它反對你的任務

[6:15](https://www.youtube.com/watch?v=luf6zSOCKH4&t=375s) Agent 的預設幫不上忙，要在系統裡改。她的 ground rules 就是 CLAUDE.md 這一類。不能把所有歷史、整套 TDD、所有在乎的事都塞進去，記憶不夠。她有兩層。最大的那層套在所有專案上，專門打她在各種 AI 上都看到的問題。模型是黑箱，裡面有你看不見的 mental model，而且被訓練來討好你。所以規則裡要給它一個任務：不同意你、跟這個傾向打。其中一條是誠實、不要騙、不要討好。她一開始這樣做，它就沒那麼好說話。「你真棒」這類話她過敏，說自己可能需要治療。最新的 Opus 之前，效果很好。現在它還會標明自己正在誠實，她覺得煩。

[8:42](https://www.youtube.com/watch?v=luf6zSOCKH4&t=522s) 生產力規則是：發現問題就現在說，不要照她剛剛說的做下去。這寫在 ground rules 裡，算跟 Lada 工作的契約。做事當下她還要用 checklist 再加強一次。Context 大小不同，兩層都需要。Ground rules 放在 user level 的 CLAUDE.md，套到所有東西。她知道裡面每一行，共 72 行，很吝嗇。她覺得 Anthropic 的 system prompt 塞太多，不太好。另外有當下才叫的 slash command。專案層她很小心，比較像一份菜單：你有什麼、要再發現什麼，接近 skill 的 progressive disclosure。

## Description 是寫給 agent 的

[10:02](https://www.youtube.com/watch?v=luf6zSOCKH4&t=602s) 她每天最依賴的 skill 是 TDD。很多人說 TDD 跟 AI 不合，問下去，他們只是叫它「做 TDD」。她的做法是先跟它一起 TDD 一整個 session，她在旁邊微管理，然後叫它把剛剛做的全部記下來。之後開新 session，說我們來 TDD，她看它哪裡搞砸再改。它以前是 slash command，現在是 skill。Front matter 是寫給 agent 的，讓它知道何時該叫。舊式 MCP 把所有說明倒進 context，把 context 弄髒。Skill 只留一小段。Agent 看到：我有 TDD skill，每次寫 code 都該用。於是它會自己做。Simon 原本以為 CLAUDE.md 裡一行「永遠遵守 TDD」，再加一份 skill。她說兩邊都有一點，主檔裡的 code 規則不多，她喜歡簡單：能簡單就不要 hack。

[12:05](https://www.youtube.com/watch?v=luf6zSOCKH4&t=725s) Description 不是寫給人看的。人把它寫得很輕，skill 就不會在對的時候啟動。Skill 一多，它們在搶決定權。寫得太泛就重疊，沒機會選對。所以她有一個 skill factory，專門打這件事。Anthropic 預設的她覺得不好，front matter 太長。Factory 裡的一個流程是：在這個情境裡它應該長這樣，試很多次，再拿給她看。通常比預設好，而且短。

## 離心機：一步、寫進檔、讀回來

[13:09](https://www.youtube.com/watch?v=luf6zSOCKH4&t=789s) 她把這個 refinement loop 叫 think into a file。任何目標都可以。讓它朝終點走一步，只能一步。然後 commit，或寫進一個檔。她自己也用 AI 寫東西，包括會議用的短文，說出來有點怕，因為很多人堅持產物不是你的聲音、就是 slop。她覺得結果更好，而且裡面有更多她的工作。流程是起草、她標哪裡不喜歡、哪裡可以，然後叫它 go meditate：第一版寫進檔，停，讀回來，對著目標問夠不夠、要不要改，再寫回去。她叫這台 centrifuge。轉得夠快，愚蠢會出來。大約五圈之後，聽起來比她自己寫的更像她。

[15:22](https://www.youtube.com/watch?v=luf6zSOCKH4&t=922s) 她看到的期待是：AI 第一次就該好。從來不是。所以停止期待，用精煉換品質，而且中間要有很多人的輸入。不喜歡就再 meditate 一次。Simon 也用它寫很多，會guilt，想先把文字 de-AI-ify。他覺得重要的是方向和「這錯、那對」，不是每一個字是不是人手打的。有人公開說自己完全不用，也許是真的在做一個立場，也許不是。

## 一次只做一件事

[16:03](https://www.youtube.com/watch?v=luf6zSOCKH4&t=963s) Coding agent 的問題有兩層：AI 本身，以及人對它該怎麼工作的想像。新人把所有在乎的事放進 ground rules：TDD、best practice、不准犯錯。實務上不行。她沒有在訓練模型，但越來越好奇內部。她覺得它們有 attention，而這是大家最不懂的。前一天 HumanLayer 有兩場她很喜歡的演講。她不同意其中 Dex 的一句：若 AI 知道怎麼寫好 code，它就會寫好。她看到的是，人把任務和一整疊標準同時壓上去。她的經驗是這不行，因為它一次只做得好一件事。標準不能用這種方式硬套。它讀完一段之後，你叫它找出所有問題，它找得到。換方向，問題報告會好很多，再讓它修。不要一次做完，要很多次。

[18:48](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1128s) 這週他們推出 Tessl Agent。Simon 提 verifiers，是因為它對上她的說法。可以用它開 code review，裡面有一份還算可以的 review。若一次要查一百件事，叫它「去做 code review」只會做得還行，單項會漏。Verifier 一次只查一件很具體的事，有時對某些檔案做決定性的觸發，甚至指向 skill 裡的標準。每一個都很短。結果更好，也更快。Lada 和朋友在做類似的事：決定性觸發抓 code smell，例如長方法、dead code，然後可插拔。可以是一段專門收拾長方法的 prompt，也可以叫 linter 或 formatter。她想盡量自動化，但焦點是關鍵。

## 不懂問題，就先不要寫 code

[20:43](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1243s) 大任務沒有單一流程，差在她懂不懂問題。懂的、既有的專案，她會跟 AI 一起做原型：來回、叫它產出一份份 artifact，她逐份註解，再把意見整包送回去，有點像白板。她想要一塊跟 agent 共用的白板，自己也在做。完全不懂的問題空間，她連 code 都不開始寫。一寫就過度承諾某些檔案，看不見其他可能，盯著解法，忘了到底要做什麼。她看過太多人跳進解法。

[23:20](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1400s) 跟有些人玩的叫 sketch prototype，是 markdown。她把 code 換成一個 agent。千萬不要放進 production。Code 在這裡是檔案裡的指示。整個系統是一份 markdown 加一個 agent。Agent 走流程，她體驗使用者會怎麼走，學到很多，然後才承諾要寫 code，或走別的方向。Agent 可以暫代任何 code。它不會好，這個階段她也不需要好。像以前的紙上原型，只是更快。

[24:19](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1459s) AI 為什麼做不好架構。單一任務的範圍裡，它也許做得不錯。兩層問題。人常常跟不上。很多人不讀 code，腦子裡原本的問題空間和解法空間空了。放著不管會變差，熵是真的。在一個任務上迭代，它也許還行，但它裝不下全部，也不能一次做所有事。也許要在架構的不同層各跑幾個迴圈，不能只在一層。這很大部分是複雜度管理，以及誰握著 mental model。時間表她沒有概念。她覺得自己在做一個會建造其他系統的系統，這是她眼下最有趣的問題：能不能把工程做法烤進那個系統，讓她在更高的層做東西。人追這個誘惑很久了，也許夠得到。有些問題還沒解。若出現另一種更能邊做邊學的東西，也許會解。

## 你是決定者，路可以零成本被照出來

[27:48](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1668s) 人太容易把它當成一段對話：它問，你就答。她叫 reverse direction。你是決定者，不必跟著它走。它丟十個問題，有人坐在那裡一題題答，很痛。一次一題，或把檔案弄得更緊。另一件人不做的，是把它當視力的工具。她剛參加 Craft conference。Gojko Adzic 的一點是：抱怨比解釋你要什麼容易。先看到東西，才知道自己要什麼，也才生得出別的點子，可以把點子借來、合起來、整個換方向。她想像面前有很多看不見的路口。AI 可以零成本把它們照出來。要做選擇時，叫它自己選，用一個 emoji 標出選中的，例如星星，同時把沒走的路也給她。她以前手動做很久。Arlo Belshee 教她一個動作裡至少疊四個 pattern。然後她可以說：AI，你錯了，這個才對，因為如何。視野就寬了。

[30:34](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1834s) Simon 用 Tessl 的 change risk 對照：它判斷一次變更風險夠不夠高、要不要升到人審，或已經好到可以審。LLM 當 judge 時，有的決定該由人做，有的是人已經做了、只要它看過說沒問題，省掉無謂的來回。Lada 也把很多對話收成預設：技術棧是這個，不必每次重選。AI 審和人審不必二選一。先讓 AI 把愚蠢甩出去，再给人。而且 AI 要把東西呈現成好跟。現在還不好跟。審查過載她不允許自己走到那裡。

## 她信測試，比信 code 更少

[31:58](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1918s) 「系統到底能不能動」她要答得了。測試有兩層。TDD 的測試是給 agent 的，用來跟現實交叉檢查，不讓它漂太遠。她說這樣生出來的 code 意外地不錯。也用來阻止測試變得完全可怕。她信測試比信 code 更少。它會作弊、說謊、把測試註解掉。那像犯罪現場。這層主要給 agent、給 code 品質、給現實檢查。

[33:08](https://www.youtube.com/watch?v=luf6zSOCKH4&t=1988s) 系統層她要更高，連 Cucumber 都覺得太細。她寫的是 BDD 等級、像白板上的領域語言，要極好掃描。API 就是：這是我的 API、發生了什麼、回了什麼。遊戲就是：誰走了這步、然後怎樣。這層不該是 agent 很容易改的。裡面的實作它可以盡量改。她用 pytest。讀的時候必須能百分之百相信這些不會騙她。Approval test 她用來釘住行為，也是 legacy code 的技巧：這樣做會回什麼，看起來對，就批准成 golden standard。批准什麼要小心。可以先把整個系統釘住，再在裡面重構。這一層的測試她也用 approval testing，領域語言好定義。

## 一夜換成工廠，會淹死

[35:00](https://www.youtube.com/watch?v=luf6zSOCKH4&t=2100s) Software factory 她不想當工人，想當工廠的 architect。Agent 才是工人。她在做一個建造其他系統的系統，但不覺得它會像今天看到的工廠。她討厭很多做法裡那種用過即丟的 AI：agent 再生 agent，或讓 agent 寫 skill。產出變差，變成大量垃圾和噪音。她不知道別人怎麼沒被淹死，也許是她自己沒做對。她試過一點，包括 Claude Flow，也試過很多別的。她的習慣是新模型就拿同一組東西比。以她的經驗，Claude Flow 當時最差。也許她沒拿對。若你依賴的積木並沒有做你以為它在做的事，整個系統為什麼會動。

[36:52](https://www.youtube.com/watch?v=luf6zSOCKH4&t=2212s) 自主到什麼程度，她沒有答案。工廠是自己維護，還是只提建議、重要的仍由人驗證。她偷聽到有人在講他們的 factory，字幕先說 Gastown，又說 Gas City。她插進去問實務上怎麼做。對方很多話對上她的重構經驗：她指向一些東西，方向就對了。她只會相信自己做出來、而且真的在她的系統上工作的工廠。她要的是信得過的積木。重構流程已經有了：指向一段 code、也許幾個檔，它自己走，回來是好 code。她現在想要的是抽出知識。叫 AI 把東西存進檔，常常很差：噪音太多，或在更大的情境裡盯錯重點。這些積木若能組起來、又有驗證，她才肯自動化。該是 code 的部分她想盡量自動化。她還沒到。流程對她現在做的事夠好，她仍一直不滿意。所以她來開會。

[39:12](https://www.youtube.com/watch?v=luf6zSOCKH4&t=2352s) 以為可以直接切進 software factory 的人，會淹死在垃圾裡。夢見自己能長多快，是一場惡夢。信任要靠一次次變好。前一天 Dex Horthy 的演講她覺得有意思：他們試了半年工廠，不太行，現在走回去。她想聽試過的人。

[40:16](https://www.youtube.com/watch?v=luf6zSOCKH4&t=2416s) 工具上，她很早就用 agent，比那波晚了一個月。十一月開始的話，她十二月才開始，人在冬天。她愛 IntelliJ 的重構，覺得業界沒有可比的。Agent 卻住在 Windsurf，她得不斷切換。去年五月 Claude Code 對她出現之後，她換過去，沒再回頭。幾乎只用 console。檔案很少看。IDE 可悲地變成文字編輯器。會不會跟 code 脫節，取決於風險。她現在很多是 greenfield 和原型，不在她說的那種糟糕的 brownfield。若在 brownfield，她會狠狠自動化，測試套件要真的好、真的快。她的價值是教 agent 怎麼測。然後也許能高一層，但會離 code 更近。現在不必，所以她不做。

[42:16](https://www.youtube.com/watch?v=luf6zSOCKH4&t=2536s) 離開會場她想玩的太多，只有一個她，她覺得自己是瓶頸。一件是別人怎麼做 loop。她做很多，但覺得跟別人不一樣，想多看、多試。另一件惦記很久：event sourcing 和 event modeling。她上過 Martin Dilger 的課，沒時間試。那套好像同時解決跟得上、以及複雜度。他做 event modeling：先想流程，畫一張發生了什麼的小圖，每一片是一段行為，再為它們生 code。Slice 完全隔離，重複的 code 很多，但因為永不重疊，也許不要緊。兩個 Person 物件若永不交會，重不重要。她不確定實務上怎樣，有些地方擔心。Event sourcing 是不要把狀態折扁，每件事都是 event，之後可以拆開。UI 要的每一種東西都有 view，是聚合出來的，而且很多。看起來像重複，她擔心，仍想試，因為他看起來很快樂，而且依他的說法，很多問題好像被解掉了。
