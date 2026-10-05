# Liz Fong-Jones: 2x the PRs, 1.5x the Incidents

Simon Maple 主持的 AI Native Dev。來賓是 Honeycomb 的 Technical Fellow Liz Fong-Jones。片長約 50 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=2NhZWzBMm2E)

## 一句話

Honeycomb 三個月裡，每天合併的 pull request 從 30 張變成 70 張。內部的 Autobot 不是多數 PR 的作者，它一天大概只開五張，但它審查每一張。人的 review 注意力有限，所以他們要把人從抓小 bug 挪去看設計。長期平均下來，PR 大約兩倍，incident 大約 1.5 倍。AI 不會修好你已經有的問題，它會放大。沒有 ownership 的組織會更快把 slop 丟進 production。名字簽在上面，就不能說是 Claude 做的。

## 放大的是你已經有的做法

[2:02](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=122s) Liz 把自己的職涯說成可靠性領域的通才，專門把共事的團隊往上帶。從個人貢獻者開始，後來建議 Google 的 SRE 和 SWE 團隊怎麼做可靠性，再轉去管 Google 的 Bigtable，底下大約 12 人、幾年。她發現影響可以很大，但只停在一個團隊。外面很多人卡在怎麼把 SRE 做進組織，ops 不該只是苦工。於是走向 DevRel 和 field CTO：哪一根槓桿能把產業往前推，有時不是管一個工程團隊。Technical fellow 做的是跨團隊的 distinguished engineering，同時寫、上 podcast、當 Honeycomb engineering 的公開面孔，讓工程師能低頭做事，也培養想公開說話的人。品牌是給想得比較前面的工程團隊。她也說，工程師職涯裡至少當一次管理者會變成更好的工程師，看得到組織怎麼運作、資深工程師怎麼產生影響。不該把管理當成晉升的唯一路，也不該說自己永遠不碰。

[6:41](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=401s) Simon 把她的一句話丟回來：AI 放大你既有的做法。功能失調的組織會更失調，高 ownership 的組織會更快。她寧願講功能正常的組織長什麼樣，因為失調的種類太多，列不完。Ownership 是高或低功能的主要力量。開發者是否以自己的貢獻為傲，是否願意端到端擁有生命週期、負責、而且高興把名字簽上去。其他事情從這裡流出。可靠性差，多半是 ownership 不強，否則為什麼讓壞掉的 code 進 production 還留在那裡。開發者能不能跟著它進 production，不必先要五組權限，以及他們到底有沒有跟下去。

[8:36](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=516s) Shopify 的 CEO Tobi Lütke，十二個月前說他們現在是 AI first，每個人都該用 AI。大約一週前，他在嘆工程師把 slop bomb 丟向 production 和團隊。她覺得這後果看得清楚：叫人不要 ownership、只管用 AI 走快、後果以後再說，現在就在收成。方向比速度重要。火箭加了燃料、沒有轉向，只會轉圈直到炸掉。加速沒有方向就是轉圈。AI 不會修你已有的問題，它會放大。先把問題修好，再用 AI 加速你正在走的路。若對該 ship 什麼沒有對齊，你只是 ship 更多隨便的工程。客戶對 UI 能變多少耐心有限。若 Riverside 這套錄音軟體每週登入都不一樣，她會很快受不了。Churn 得有意識地花。

## 五種做法會變成六種、七種

[10:45](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=645s) Repo 是否 AI ready，第一件是 AI 會複製 codebase 裡已有的 pattern。一件事有五種做法，它會搞混，然後做出第六種或第七種。工程組織得先對齊怎麼做、共通 pattern 是什麼，再寫給 AI，也寫給新人：這些 pattern 在哪、怎麼用。CI/CD 要夠強，五分鐘能驗證，而不是 60 分鐘或 3 小時。要有好的 observability、好的可測試性，不是空熱量的測試。機器會複製。複製壞做法，做出來的東西會跟著壞；複製好做法，測試和驗證會比較容易。從測試開始，從高品質的註解開始。他們的 codebase 註解品質相對高，仍發現 AI 把他們拉回平均：很多很低價值的註解。你怎麼防止 AI 把 codebase 變差，怎麼把測試和 observability 的好 pattern 傳出去，讓東西更容易滾進 production。

[12:44](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=764s) 這和 AI 之前對「什麼叫好」的建議一樣：吃蔬菜。沒有人想吃，直到維生素缺乏。差別是 AI 讓吃蔬菜變容易，只要你叫它做，而不是只讓它把一堆新功能 slop 進 codebase。你多了一截工程頻寬，怎麼花由你決定。機器不會無聊，很適合叫它們加 telemetry、豐富的 wide event、attribute。以前得叫開發者刷牙。現在機器人只要被指示，就做得很勝任，也樂意做。必要性比以前高，因為要落地的 code 變多；做起來也容易得多。

## Autobot 審每一張，自己只寫少數

[14:01](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=841s) 三個月，每天合併的 PR 從 30 到 70。數字對，歸因不對。內部 coding bot 叫 Autobot，那些 PR 裡它一天大概只產五張，不是多數的作者。它是 100% 的審查者，好到開發者不必再在變更裡找瑣碎的 bug。PR 變成兩倍以上時，人的 code review 注意力是有限的。要放大的不只是產 code，還有審查。Autobot 指出問題，人就不必當人肉 lint 或人肉抓 bug。寫和交付的速度不是問題。問題是人能多快確認生成的 code、進來的 PR 有效、正確、測得好。她主張，至少現在，真正的 production 系統不該是 dark factory。需要人的監督、審查和問責。學到的教訓怎麼饋回去，標準怎麼維持。標準得來自人。她不認為機器人自己能發明並執行標準。車子有自適應巡航，不代表你可以完全放開方向盤。

[16:18](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=978s) Autobot 一開始是為了自動開小的、一口大小的 PR。他們花了不少時間，做成盒子裡的 Claude Code，對一張 Linear ticket 工作。這件事它還在做，但他們正在把它收掉，因為已經變成商品，有現成服務能在盒子裡做。四月或五月開始時，效果非常好：連不那麼熟 Claude Code 的開發者也可以說，這張票看起來相對簡單，沒試就沒有收穫，指給 Autobot，看它開出什麼 PR。理論是清掉不需要人一直盯著、一直把設計方向舵住的低垂果實。若每件事都拆成一張夠清楚的 Linear ticket，Autobot 就能做成 PR。請它跑的那個人先自己 review，再交給同儕。

後來發現這種小票的比例相對小。同一套東西也能在盒子裡重做 Anthropic 大約三、四月放出的 Claude Code review。那個貴得誇張，一次大約 20 到 30 美元，要跑 10 到 20 分鐘。他們要的是兩三分鐘以內、每張 PR 是幾美元不是幾十美元。於是把 Autobot 轉向 review。人反正已經能自己製造這一大批 PR。該聚焦的是怎麼讓人的 review 負擔變輕。

## 兩倍的 PR，一點五倍的 incident

[19:06](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1146s) 她說 Jev，後面有個 M，最近上了很多頭條，專長是 yes/no 或選擇題。他們首先想用它把 PR 分成：自動 review 之後就可以合併，以及不安全、必須人看。以前靠人自己標。他們在做實驗，希望大約 20% 的 PR 自動審查後落地、不必人再看。PR 加倍，要麼人花在 review 的時間不止加倍，要麼就得卸載：什麼比較不重要、什麼比較重要。以前是人和審查者標這張是不是高力氣的 review。現在可以讓 Jev 當那個直覺檢查：我能不能相信審查者對「能不能安全落地」的判斷，能的話就不必人介入直接合。Code review 仍是語言模型那一層。分類器做的是變更有多複雜、審查者有沒有提出重大疑慮、該不該合。

[21:03](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1263s) 新聞裡三件事：成本、速度、信心分數。速度和成本是加分。已經花了五分鐘和 10 美元的 token 做 review，真正要的是自動的信心分數：能不能安全落地。他們不是打算比以前少花 review 的時間。是把時間放在設計 pattern，而不是瑣碎 bug；放在較複雜的 PR，而不是簡單的。轉一個設定旋鈕，多數時候不是大事，有些時候足以把 production 打下來。人可以整個退出自動 review，說這張要特別小心。高自主的組織裡，開發者多半很認真，不想造成 outage。Outage 發生在沒預料到的事：以為很簡單，結果不是。語言模型做 review，或 Jev 做「這能不能立刻落地」的檢查，是要超過兩倍所需要的槓桿。她坦白，他們已經撞上能構想、能審查的 code 量的天花板。

[22:57](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1377s) 一開始看起來，outage 的增加是次線性的，change failure rate 似乎在下降。拉長平均之後，PR 大約兩倍，incident 大約 1.5 倍。人能處理的 incident 有上限。其他風險也得開始拆。審查過和理解過不是同一件事。500 行的 PR 和 10 行，被盯的程度不同。500 張 PR 對一張，很多會在人的能見度變低時過去。不要變得無所謂、只是把 PR 推過去。她覺得更好的討論位置常常是專案和 ticket，而不是 PR。尤其生成 code 很便宜、可以做五次的時候。為什麼死抓這一份實作，而不是更大的設計 pattern。該對齊的是方向對不對，不是這份實作是否分毫不差。語言模型可以幫你懂每一行。宏觀上該怎麼行為，是監督這些系統的人得在腦子裡保持一致的那張圖。

## 工具要永遠安全，不能把判斷交給會亂殺 pod 的機器人

[25:19](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1519s) Telemetry 是資料，observability 是真的懂系統的能力。人不必自己寫那些 code，也不必自己下查詢。但查詢的輸出得由人看，才能內化這次 outage 怎麼發生、還有哪些類似的東西該看、怎麼避免再來。資料要能查、對人和 AI 都讀得懂，回饋迴圈才建立得起來。不只在 outage 那一刻。開發循環裡，語言模型該到 dev 環境查它自己產生的 telemetry。加了一個 attribute，它在不在。能不能偵測事情開始 backlog、開始排隊。把 telemetry 變成理解，是人和機器人一起的責任。

[26:51](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1611s) 能多信任 AI 在 incident 裡碰資料，取決於你過去十年的做法做得好不好。Feature flag 已經有十到十五年，看你怎麼算 Netflix 早期的東西。若 feature flag 做得好，有 MCP 的機器人可以找出哪一個 flag 能解決問題、把它翻掉。Telemetry 會留給即時診斷的機器人，也留給你。隔天早上你可以拿著咖啡或 Diet Coke 看。控制論裡，observability 和 controllability 是對偶。兩者都有，就不必凌晨兩點起來。甚至可以不完全懂，先把問題修掉，事後再用類似飛航記錄器的東西看發生了什麼。她說我們相當接近，若且唯若你有能用的自動 rollback、能用的 feature flag、能用的 observability。沒有這些，agent 就是在猜、在扔飛鏢，造成的混亂可能比它解決的多。這很依賴 production 的成熟度。不是你信不信 AI，是你信不信 AI 跑在其中的那套系統。工作是讓機器人手上的工具安全。讓 AI 自己判斷能不能殺掉這些 pod，她覺得非常危險。不該給它們在 production 裡亂殺 pod 的能力。該給的是中止 rollout、還原 rollout 的工具。工具要永遠可以安全使用，機器人有權用它們，而不是信任機器人決定要不要呼叫。這對團隊裡最資淺的開發者也成立：讓他們不可能意外造成 production outage，對機器人也好。

[30:40](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=1840s) 多數團隊沒想到、但她覺得不可談的起點，是 hermetic 的 CI 和 CD：快，而且可重現。那是一切的基礎。Least privilege 她贊成。她發現 Claude 在碰到 Amazon profile 時，若同時有唯讀和可寫，會自己改用唯讀，即使可寫技術上可用。也可以強制：用唯讀 profile 的指令自動批准，用可寫的必須人批准。一層一層，defense in depth。她覺得現在過度信任的，是人一直按 Yes，這擴不了。注意力稀缺時，分類器比人做得好。你得先有一定次數自己按 Yes，才開始信任自動模式；也得先看見一定次數自動 code review 抓到你自己不會抓的問題，才開始信任它。最後你可以信任自動轉向，但眼睛還在路上。那和把方向盤握死不一樣。人傾向微管理，也傾向以為自己永遠比機器人好。錯在過度信任自己在時間壓力和壓力下做決定的能力。不會累的機器人，在那種情況下會比你好。

## 名字在上面，就不能說是 Claude 做的

[33:25](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2005s) 出事了，是機器人的錯還是操作者的錯。Honeycomb 的 AI 價值寫著：if your name's on it, you own it。她說這不是歸咎。是誰負責收拾，以及怎麼把系統做硬，讓這件事不要再發生。理想上，一件事出錯不該把整個 production 打下來。該把失敗的爆炸半徑變小，而不是幻想能完全防止。問責上，不能說機器人做的、不是我的錯。「Claude did it」不是好藉口。要看是什麼結構性的偏誤，讓你過度信任這份輸出。

[34:31](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2071s) 上週她在分析一個團隊的 rollout，想依 shard 或 partition ID 做 A/B。助理找不到 partition ID 的 telemetry 欄位，就編出必須新建一個欄位。她該重跑查詢、自己打 partition，看它會不會自動出現。不該在它輕率斷言沒有這個欄位時就相信。她還叫它：若缺了，就開 PR 把欄位加上。欄位一直都在。浪費了 token，也浪費一位 principal engineer 五分鐘去看一張會加上重複欄位的 PR。可以怪 Claude，也可以說她該更懷疑。她本來就該知道他們有 partition ID，該自己跑過查詢。她簽了名。那是她的責任。比較日常的是，不要把十頁的 Claude artifact 當成 slop bomb 丟給別人。名字簽上去，就該站在後面。理想上，你讀和產出它的時間，不該少於讀者要花的時間。更有意思的是：你 ship 出去的 code 不管為什麼是錯的，怎麼把學習包起來，讓 Claude 不要一錯再錯。那是人要弄清楚怎麼把工具用得更有效。

[36:43](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2203s) Simon 問，若 AI 已經能自己建、測、審、部署，也許是小的、不複雜、非關鍵的系統，人完全沒參與，能不能說名字是 Claude 或 Codex 的，就由 bot 擁有，並接受很小比例會錯。她說，那時負責的是做出 workflow 檔、引導那個 loop 的人類團隊：品質控制、檢查、調到它該有的效果。儘管新聞怎麼寫，並沒有完全自動的遞迴自我改進。總有某種程度的人在引導。就算機器人自己開票、解票、推上去、在 production 裡除錯，仍有人擁有那份 system prompt，有人在付 quota，有人在等結果。Ownership 在那：偶爾抽查一些 PR，對 system prompt 做 eval。還沒到可以完全放手。若你準備完全放手，把支票簿交給她。只要還是人在付錢，人就有權檢查結果。還有沒有 process owner，而那個人對結果負責。

## 開源先收 bug，大改要先跟人談

[38:55](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2335s) 錄音當天是 9 月 22 日，Hacktoberfest 就在附近。以前大量、很差的人類 PR 惹惱 maintainer，後來多用 opt-in 解決。現在就算 opt-in，更大的擔心是 AI slop 的 PR。她考慮過因為這種洪水，不再收外部貢獻。決定是：為了安全和 code style、可維護性，maintainer 仍該繼續收 bug report。收不收 PR 由他們決定。一份裝備好的 bug report，可以讓你自己的 agent 用你喜歡的風格寫修法。為什麼要信任別人的 agent，檢查那份工作可能和自己做一樣費工。Bug report 只要格式好就一直有價值：預期發生什麼、實際發生什麼、你覺得問題可能在哪。不必提案修法，留給 maintainer。另一件是標準不要放鬆。AI 做的 PR 不該比人做的標準低。學術界、開源和商業裡，都有人要求提交前先做一份關於這份工作的測驗。基本問題答不出來，就不該提交，因為你不知道發生了什麼。像 PR 版的「我不是機器人」。她說這是用 slop 打 slop：可以讓 agent 拿 PR 出一份你必須通過的測驗。也可以用 AI 做 triage。

[41:35](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2495s) 她太太做 Google Chrome 的安全。他們開始要求：安全漏洞若要快速處理，必須給能用的重現，或證明你讓一個 Chrome process 崩潰。沒有 crasher，就不 triage。否則全是 slop 報告。真的讓瀏覽器崩潰，才是你碰到真東西的訊號，值得投人去查。Linus Torvalds 公開說過 AI agent 有有價值的角色。上週她有一台 Arm64 的 dev box，硬體配置不尋常，在 Linux 6.19 和更新的版本上開不了機。在字幕寫成 Claude Fable 的幫忙下，她找出 bug 和能用的 patch。Patch 只有六行，並不複雜，她是第一個碰到的，而且解決的是一整類硬體的一般問題。送上游，走一般的 Linux 審查，超過兩個月才落地，但落地了。她覺得這表示事情照設計在運作：夠小、理由夠好的真 patch，不管是不是人做的，都能進去。

非 maintainer 不該在沒先跟 maintainer 討論時，建議大的方向性變更。那就是 slop bomb 的來源。做得到、也能送出一萬行的 PR，不代表該送。先跟人談、拿到同意，然後才像內部被信任的 maintainer 那樣進行。路徑是先開 issue，討論長或若很明顯就短，之後 maintainer 有了你想做什麼的 context，再分享 PR。

[44:18](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2658s) 開源有結構問題：自動 review 和 triage 的 token 誰付。外面可能有一百萬開發者，每人付一份補貼很重的、一個月 20 美元的訂閱，用的是 OpenAI、Claude 或 Gemini。得防止他們對開源 maintainer 做成 denial of service。關鍵專案像 Linux kernel 或 Kubernetes。Linux kernel 有一個自動 review bot，她稱為 Sashiko，由 Google 全額付錢。企業贊助有幫助。商業關愛較少的小專案非常掙扎。Anthropic 的 Project Glasswing 把 Mythos 的使用權給了一批安全上很關鍵的專案，像 curl 和 OpenSSL。更大的問題是 token 誰付，以及 maintainer 怎麼有資源、不要燒盡。她覺得是以前就有的問題，只是更快。差別是主管現在有錢可花。以前叫人做 observability，對方問預算在哪。現在是：不做 observability，你的 AI 努力就會失敗。於是有了預算。

[45:56](https://www.youtube.com/watch?v=2NhZWzBMm2E&t=2756s) 兩三年後，observability engineer 還會不會是獨立職稱。她說已經看得到：site reliability engineering、security engineering、observability engineering，大致都落在 platform engineering 這塊平台上。它們是跨功能的，每個開發團隊都需要，也有自己的專門技能。工作是做出開發者做事需要的共通標準和工具。併進 platform engineering 已經在進行，她還點了 security、accessibility、test engineering。不該要每個開發者都成為每一項的專家，但在某種程度上，確保自己的 code 符合組織標準是他們的工作。Observability engineering 不一定是自己做一套 observability 平台。外面有廠商。規模同樣大時，也許有一個 observability 工具團隊。對開發者的 outreach，她覺得會由整個 platform engineering 擁有，裡頭來自不同專長的人一起把專業帶到需要的團隊。Simon 說他在 Snyk、AI 之前就看到愈來愈多事情集中，尤其是安全的 best practice。她說對得上：安全、observability、測試、可靠性。你不要每個開發者都是 service level objective 的專家。你要每個開發者都有 service level objective。

想追 Honeycomb 在做的事，工程 blog 上不只有她，還有 Charity Majors、Christine Yen 和 Honeycomb engineering。網路上到處可以找到她，名字是 Liz the Grey。
