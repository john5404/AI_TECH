# Cisco Principal Engineer's Fix for AI Code Security

AI Native Dev 播客，片長 33 分 29 秒，英文自動字幕。主持人 Simon Maple 人在阿姆斯特丹的 Cisco Live。來賓是 Cisco principal engineer John Groetzinger，CX engineering 團隊。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Claude Code 聽成 Cloud Code、把 Tessl 聽成 Tesla。

- 原片：[YouTube](https://www.youtube.com/watch?v=aI5-oKjfgo4)

## 一句話

Coding agent 學過大量不安全的寫法，預設就會把那些習慣平均回來。Cisco 的 CodeGuard 把安全做法收成 skills，讓各家 IDE 少一點摩擦力就能用。John 原本懷疑有沒有必要，Tessl 的 task eval 給了一個對照：沒有 skill 時，單純的 Claude Code 是 47%；加上 skill 是 84%，大約 1.79 倍。他真正在意的不是再吵哪個 model 比較好，而是 skill 夠瘦、會被叫起來，以及人還留在審查迴路裡。

## 安全 skills，以及工具比模型更難

[2:04](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=124s) Simon 把問題講成：能不能引導 coding agent 一開始就寫出安全的 code，並從既有 codebase 或變更裡看出漏洞。他們當天早些時候在 Cisco Live 講過一場。John 說那是他第一次在 Cisco Live 上台，內容是自己作為開發者，過去兩年怎麼在企業裡收拾 AI coding，尤其是安全的 code 很難寫。他是 principal engineer，天天做 AI。團隊大約兩年，想弄清楚怎麼用 AI 給客戶更多價值：幫客戶做 agent、做平台，讓 Cisco 那些很複雜的技術能幫上他們。

[3:34](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=214s) CodeGuard 可以想成給 AI coding agent 的 security skills。Cisco 希望各組織的開發者用 AI coding，因為它加速做軟體，但要符合他們的標準、而且安全。Security and trust 組織在想怎麼賦能開發者、又不把自己的腳打穿。CodeGuard 是內部的第一次嘗試：一份 skills 清單，寫什麼是安全開發、寫 code 時要看什麼。真正的問題是怎麼送到所有開發者手上。Cisco 是收購來的公司，工具不統一。他希望以低摩擦送進 Windsurf、Cursor 或 Claude Code。工程師不需要更多摩擦。Omar Santos 是 CodeGuard 的所有者之一，隔天和後天還有場次。

[5:02](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=302s) Simon 說 agent 學的是大家的壞習慣和最差做法，再平均回來，所以指導很重要。John 不能代表整家公司。他做內部訓練，看得到一部分組織在做什麼，也有看不到的口袋。他看到的是高階主管真的讓人擁抱、去學。這是新技術，沒有路線圖。他們讓人發揮、試新東西，但要安全，也不能把預算炸掉。他覺得自己被賦能去試工具、找出有生產力的模式，再分享回組織或跨組織。字幕裡他說文化 “kind of green”，沒有聽成更清楚的詞。

[6:19](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=379s) Simon 用早場講過的石器時代走到今天的文明來問：什麼東西打開了新的工作方式。John 說是組合，但 tooling 是關鍵。早期只是聊天視窗，模型很少，人也還不太拿來寫 code。他當時很投入 live coding，在工具之間複製貼上，很笨重，卻想讓別的工程師試試。Agent IDE 出現時他才覺得這就是要的、像魔法。他現在總是先做計畫和 specification。Cursor、Windsurf 都算。就算是 specification driven，用哪個 IDE 不再那麼要緊，Tessl 的 tile 幫很多。模型會變好幾乎是給定的。若拿今天的工具、配上兩年前的模型，他覺得大概仍然很好。難的是怎麼有效地做。他覺得自己常在火邊被燙到，又一個閃亮的新工具。

[7:53](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=473s) Simon 把經驗拆成三塊：tooling、agents、以及底下的 LLM。人常常把它當成一次體驗，它也的確是一條 workflow，但成功靠好幾件事。人有時把 model 想得太重。對他來說，好的 IDE 或終端體驗，加上會規劃、會帶你走的 agent，有時比 model 更重要。沒有 workflow，它比較像一個 bot。John 同意。他以前也會跟人吵這個 model 比較好，但為什麼。Simon 說那是 Reddit 上的火焰戰爭，以及 “trust me bro” benchmark。John 說他不信任那個。Simon 開玩笑說那現在是他唯一聽的 benchmark。

## 把 OWASP 收薄，再送到每種 IDE

[9:10](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=550s) CodeGuard 在 security and trust 組織裡長出來。他們拿了很多 OWASP 最佳做法，以及 Cisco 內部已經在用的業界標準，再把 context 收小。OWASP 規則很全，餵給 agent 也無法對上你的 code。人和 agent 都需要同樣的簡化，然後再打包。說到底它是文字，是你在運送的 context。內部試過不同方法。一個大家都懂的簡單做法是把它當成 code 放在 repository。哲學問題還沒解：要不要 commit 進自己的 repo，它一改怎麼辦。

[10:17](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=617s) Simon 問這是不是仍在看同一套安全問題，能不能拿去掃人寫的 code，裡頭有沒有 agent 專用的東西。John 說主要就是傳統 code，而 AI agent 產生的也是傳統 code。大約兩週前他們加了 MCP security。想給 agent 一堆工具時，那些工具安不安全、會不會把資料外送，agent 失控時很難觀察。Skill security 他也說還在來，細節沒展開。所以已經超出傳統軟體。

[11:06](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=666s) 分發是為每種 agent 做的 skills，例如 Cursor rules、Claude skills。John 說自己是 CodeGuard 的使用者，那些工具都用，只能談安裝經驗。它像一個套件，解壓縮到某個位置，Windows 上這樣還行，但維護很難。他希望大家至少在 `agents.md` 上標準化。有些 IDE 聲稱遵守，其實沒有。Windsurf 改去跟那個標準，舊的 rules 就不再做。於是每個人都得維護那一整份 context。摩擦太大，人就不做。這讓他不想用 CodeGuard，因為太難保持最新。他要的是永遠最新、agent 輕輕鬆鬆就能拉進來。

[12:26](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=746s) 用下來，它很貼你放進去的那個工具，他也因此學會自己在某個 IDE 裡原來用錯了。說到底是一疊 markdown，標題直覺對上你要的安全做法。不是每種做法都適用每個 repo。可以挑：這個 repo 的 session management 是大問題，或是 SQL injection，就拿那兩份 skill。人讀得懂，再餵給 agent 審查 code，然後跟它談。他不總是同意 agent，有時假設是錯的，得把方向扳回來。安全他希望變容易，因為沒有人知道所有把 code 外送或利用的方式。

[13:39](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=819s) 要不要 commit 進 repo，意見很多。有人說 commit 才會一直在。但團隊用的工具不同，就會用每種 IDE 的 dot files 把 repo 撐胖。他自己讓 Claude 寫過一支 script，他稱為 agent symlinker：只寫一份 `agents.md`，跑 script 造出目錄，再 symlink 回單一來源。Repo 還是被一團東西撐胖。他不同意把 CodeGuard 這類東西 commit 進去。每次更新都要 merge，PR 變吵，而那不是核心 codebase。Repo 該反映它自己，不是外部的東西。就像 NPM，不會把整個套件 commit 進去。後面他說要像 Tessl 那樣對待；字幕接著聽成 Tesla 或 Porsche，沒有聽清。

## 叫不起來就問它為什麼，再讓它改自己的 skill

[14:48](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=888s) 立刻的學習是啟動。為什麼這次用了 skill，那次他想用卻沒用。他得特意問：這次有沒有用 CodeGuard 裡的 skills。Agent 說沒有，然後才去改 code。他覺得時間被浪費了。這是任何 skill 都會遇到的，不只 CodeGuard。Claude Code 可以試 hooks，但那也不完美，有時更糟。

[16:03](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=963s) 他做 skill 時放在心上的是保持精瘦。`skill.md` 一腫就沒用。在裡面引用別的東西才是路。對話中模型沒抓到重點，他就問：為什麼沒抓到 `skill.md` 裡關於 security review 的提示。再請它去改 `agent.md` 或 `skill.md`，讓下次真的會撿起來。讓模型修自己。Simon 說這像自我修復。John 說還有誰比模型更該問，而且自己少想一點。懶，但出奇地好用。

[16:58](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1018s) Context 多大該強制讀、多大只是引用，他不知道平衡在哪，還在找，只有軼事，沒有時間去工程化 context management。他要交付軟體，不是陪 AI coding、當保姆。很可惜，因為他認為要拿到最佳表現，正是要工程化 context 怎麼被撿起來、不同 model 怎麼對上、工具怎麼插進去。那是很複雜的矩陣。

[18:09](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1089s) 太多 context 永遠是問題。他多數 `skill.md` 是 agent 寫的，所以過度冗長，這個問題很早出現。他覺得交叉引用表現好得多：一個大概念就說放進新檔，再從 `skill.md` 引用。它仍不總是在該引用時引用，而且每種 model 的最佳做法差很多。跑 eval 之前，他怎麼知道 context 對不對，largely 是 vibe。有沒有好的感覺、事情有沒有有效率地做完，還是 Stumble 很久、想個十分鐘。他仍苦於找不到像評估軟體那樣評估這些模型的方法，沒有好的、有資料撐住的做法。他會在自己做了兩次、結果不錯之後，才分享給別的工程師，再收他們的軼事。對方用不同工具、不同 model，體驗差很多，他也沒時間追。Simon 說那也可能根本不是 skill 的問題。

## 47% 對 84%，以及 session 活多久

[20:25](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1225s) 他們跑了 Tessl 的 review eval 和 task eval。Review 對 John 是意外的好玩。他以為 agent 會很久，可能走開了，回來發現很快，大概幾秒，面前是一份 rubric。不只是分類過的回饋，對他更重要的是能動手的回饋。模型被人要求給回饋時，傾向嚴厲評判，不給建議，或給太多選項。這份是落地的：這裡錯，因為這些原因，或某些地方也許能改。他不一定同意那些分類。他要的是迭代，希望它們盡量做，但自己得留在迴路裡。不能讓它審查自己然後一直跑，那是浪費錢，最後可能更差。他看 rubric，不同意這一點、很同意那一點，就先聚焦同意的。請它建議怎麼改那一部分，它調整、再 eval、分數變好。改善在眼前發生，因為人在迴路裡，也懂為什麼。說到底是讓模型改進它自己要用的 skills。Simon 說他是在監督更新：他決定要不要改，模型去改，背景的 Tessl 再測、給新回饋，直到他舒服。

[22:20](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1340s) Task eval 更接近真實使用。若干情境是這個 skill 很可能會碰到的。Agent 跑兩次：有 skill，以及沒有 skill 的 baseline，再看成功率。CodeGuard 做得很好。Simon 說大約是 baseline 的 1.79 倍。John 確實嚇到。他懷疑過自己真的需要這個嗎。他可以叫它去讀安全資料再做。它是被優化過的。1.8 倍在有 baseline 可比時很扎眼，因為你能問它到底哪裡更好。不信的話可以自己去試。Simon 說 task eval 還很早，情境可以審查、更新、送回去再評，不準或不真實就可以改。Baseline 是 47%，那是單純 Claude Code 對這些情境、依評估標準得到的分數。加上 skill，agent 成功率 84%。他看 scenario five：沒有 context 時左邊全紅、全是叉。有 context 時五項裡四項變成 100%，一項仍是 0%。

[24:35](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1475s) John 喜歡依情境，因為不是每個人要同一種安全。他覺得 scenario five 是 session fixation。登入後繼續用同一個 session ID，有時是壞做法。那個 ID 活多久，學派不同。他們在舊金山很 zero-trust，活得很短，至少一天要換一個。消費端常常登入很煩，也許就不在乎。所以企業和消費端該是不同情境。要能看出 agent 知不知道、基礎 model 知不知道；不知道的話，skill 怎麼把那個 context 給它。完美的安全不存在，層級不同，安全會讓你變慢。不想被拖慢，但要對這個應用夠安全。

[25:28](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1528s) Eval 資料對他有用的地方包括：有些它幫忙造出來的情境，是他沒想到、但其實適用的。他不想自己想出所有情境。Rubric 思考和解釋的方式跟他不同，但更好，更科學。他很討厭那種感覺：覺得有幫助、卻不知道、還在浪費時間、甚至沒有變好。它讓他留在軌道上，給一座要爬的山。他評自己的 agent 時也在問：我們要做什麼，好到底長什麼樣。這給了一個好的例子，或至少解釋了好應該長什麼樣，以及你差在哪。填空、爬上去，摩擦小很多。Greenfield 從零寫，或 brownfield 做 code review 和小改，他說到處都有用。但他不想讓它擋住簡單的 side project。只有自己用、資料無所謂、只是好玩，就不需要。做好玩的東西想分享、或真的要 ship，它就該一直在。

## 先一起做一次，再寫成 skill

[27:44](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1664s) 若今天從零做一個 skill，他知道自己的做法不是最好，三個月後也可能不同。他跟模型一起做，自己不寫 `skill.md`，沒那個時間，也會問模型覺得該怎麼做。這幫他懂一些原本不懂的，也幫模型懂他在做什麼。他常說要做某個任務，它對過程有很多錯誤假設。所以他常常不先做 skill。他告訴它：我要做一個 skill，你先跟我 dry run，做完再回顧我們剛剛做的一切，把它做成 skill。那次本身就是第一次評估，是他真的拿來做想做的事的情境。然後叫模型依此做 skill，再調整。很放手。Simon 喜歡的是：你說這不是我想要的做法、因為某個理由，它就學到基本路線被你否定，於是寫進 skill。做對了、你沒評論，它也不必寫下來，只要它夠穩定、每次做類似的事。

[29:30](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1770s) 何時跑 eval，他還在摸。他很贊成 eval，會說永遠都該 eval，但沒有預算每一行變更都跑。工作流程大改、改一個情境可能影響另一個、他又沒把握時，會跑。沒有通用規則。他把它比成 semantic versioning 的中間那個版本，說想在第三次發布時做；字幕沒有把對應講死。還是成本和表現的平衡。大團隊做 skill 時，他喜歡盡早把使用者拉進來，但太早意見太多，就是太多廚師。有時先讓一個人 hack 一陣，找出行與不行，做出第一版再分享，比較行得通。你得能解釋自己怎麼走到這裡；別人不同意可以試別的。太早很多人，他覺得不好，可能浪費時間。Simon 說成兩個迴路：一個是跟 eval 一起打磨，但不要打磨太久才去要更廣的團隊、或其他 agent、其他 LLM 的外部回饋。John 說另一條路是五個人或五個模型非同步各做，再把結果合併。趕的話也許那樣。仍看這個 skill。

[31:57](https://www.youtube.com/watch?v=aI5-oKjfgo4&t=1917s) 下一步是他們把它捐給 Coalition for Secure AI。他說那有點像 Linux Foundation，但是做 AI coding 的安全。他們想跟世界分享。用它找到很多 zero day，顯然有價值，希望別人用起來容易。它也在 Tessl registry 上，他們拿它跑過 task eval 和 review eval。Simon 說目前在 `cisco/software` 底下的 secure software-security，不一定永遠留在那裡。想看他們第一個 tile 做了什麼，可以去玩；若搬走或改名會再說。John 請人拉下來，看看能不能在自己的 repository 裡找到漏洞。
