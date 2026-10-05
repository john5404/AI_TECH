# Don Syme - The Agentic Repository Automation Revolution - AI Native DevCon June 2026

Don Syme 在 AI Native DevCon 2026 年 6 月。原片約 34 分鐘，英文手寫字幕。字幕把 F#、2021、issue、package cache、N+1、sea change 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=kbvqRWY-bUs)

## 一句話

個人生產力把所有互相衝突的目標都壓在一個人身上。Don Syme 要補的第三根柱子是 continuous AI：跟 CI、CD 一樣，在 repository 裡自動、重複、可稽核地跑。GitHub Agentic Workflows 把你已經在用的 coding agent 放進 GitHub Actions，但輸出通道窄到夜裡跑也信得過。Pull request 仍然不自動 merge。

## 鏟子很好，但現在每人手上都是魔杖

[0:00](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=0s) 主持人說 Don 現在在 GitHub Next，是 F# 的發明者。Don 說這場會他想把錯過的演講都補看。業界正在大變：興奮、擔心、很多想法。GitHub Next 不是發 peer-reviewed paper 的研究團隊，但他們自己決定做什麼，管理層信任他們定方向。過去一年他覺得是在為業界、也為 GitHub 定方向。任務很寬：軟體開發的未來，而那就是 AI。最初做 GitHub Copilot completions、在 2021、2022 把事情踢起來的一些人，組成了 GitHub Next。他們繼承那股精神。Completions 可以，是的。

[2:11](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=131s) 他常用巫師的圖。以前做程式語言，很興奮，但他現在跟人家說自己是在做鏟子。想看英國人對鏟子的執著，去找 Ripping Yarns 和他口中的 The Tale of Eric White。程式語言是很強的機器、很好的建材：C#、F#、強型別、Java。今天人離開鏟子了。他們要魔杖，而且手上已經有。魔杖讓鏟子、機器、工具和建材自己跳舞。不可思議，也令人不安。開會像《魔戒》裡的巫師會議：散會後任何一個巫師走出去，當天就能把剛才講的東西變出來。一群巫師要怎麼管，是大問題。

[3:46](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=226s) 這張片子他也拿去倫敦 King's College 給大學生。下一代有這些力量，要學著引導、保持正向，也要懂責任。用錯會在臉上炸開。他不是特別喜歡《力量之戒》，但年輕 Gandalf 抵達中土把自己炸了，還有 Harry Potter 裡巫師炸自己的例子，都適合講風險。引導這件事，後面還會回來。

## CI、CD，再加上 continuous AI

[4:38](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=278s) 他要講的圖像轉變，是從 Copilot 到 continuous AI。Copilot 的圖像是你這個人，是個人生產力。Coding agent 環境、帶 agent chat 的開發環境、帶開發能力的 chat，業界都在往「讓個人更有產能」擠。軟體工具史上一直有兩個極：一個是 IDE 裡的個人生產力，歷史很長；另一個是 SDLC、自動化、必須持續進行的流程、團隊和協作。他覺得業界正當地追個人生產力時，可能沒把自動化和連續性放在焦點。GitHub 的核心正是連續性。

[6:22](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=382s) 一年前他們做了一個幾乎是語言學的概念專案：把 continuous integration 和 continuous deployment 的精神拿出來，說我們一直少了一根。不是 CI、CD，是 CI、CD，加上 continuous AI。一個詞要有身體。例子到處都是。業界已經有人在開發流程裡自動使用 AI：有的全自動、有的半自動，例如持續寫文件。感覺和個人生產力不一樣。把一切塞進個人，目標會互相打架：要有產能也要有品質、要有 flow、要消化進來的工作佇列、又要專心做一件。個人變成整個專案資訊流的擠壓點。

[8:10](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=490s) 用連續的方式想，就可以拆開。他想要 repository 裡的 continuous code improvement，而且這是真的。他的部落格寫一個典型的早晨：醒來，code 已經被持續改進流程變好了。躺在床上就能看為他開好的 pull request。工程師以一組改進直接送進 repository 來開始一天。還有 continuous triage，以及他說很大的一塊：continuous fault analysis。這場會上新創 Hud 的 May 也在用 agentic workflow 做 continuous quality 和 fault analysis，他後面會放她一張片子。Continuous accessibility 也一樣：他其實不太會做無障礙，也請不起無障礙工程師，但可以讓 agent 在持續系統裡把跑起來的應用走一遍，先檢查基本事項，請得起專家時再請。

[10:00](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=600s) Continuous AI 是自動的、重複的、協作的、整合的、可稽核的，而且變體很多。感覺就像 CI/CD。這是問業界：我們怎麼想 AI、怎麼想 AI 自動化。也是問 GitHub 和其他提供 CI/CD 的平台：若那些平台是某些自動化的答案，它們也該是 AI 自動化的答案。可以雙贏。流程可以混傳統的演算法計算和 AI。它們由事件觸發、主動，關的是協作和團隊產能，不只是個人。

## 一份 markdown，硬化成夜裡跑的 Action

[11:11](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=671s) 問題要有實作。他們的叫 GitHub Agentic Workflows，今天就能用，開源，加在 GitHub 上，緊貼 GitHub Actions。它拿一份 agentic workflow 的規格，硬化成一個 GitHub Action。不是編譯。裡面是 prompt，再包起來。硬化主要是安全：你要信得過這條 workflow 實作的流程。

[12:03](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=723s) 另一個詞是 repository automation：把每個 repository 變成 software factory。CI/CD 自動化了建置和部署，這裡自動化 repository 裡一大片主觀的活動。跑的是你認識的 coding agent：Claude、Copilot CLI、Claude Code、Gemini CLI 或 Codex，宿主是 GitHub Actions，帶著很強的 guardrail，而公司和你多半已經在用這個平台。Actions 有一種特質：公司一採用，等於給開發者一座自動化遊樂場，可以在自己的工作情境裡領取雲端資源——運算、網路、儲存，以及 AI、LLM、coding agent。等於讓每個開發者在工作情境裡做很多座 factory。組織也許有規矩，但通常不必再去跟管雲的人要資源，透過 Actions 領就好。這很賦權，也是 Actions 成功的一大原因。他們把 agentic automation 放進這個平台。

[14:00](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=840s) 例子很單純：front matter 加 markdown。Check in，硬化成 YAML，它就跑。一座 factory 是一個檔，加上它的硬化檔。上面是 trigger，做 Actions 的人很熟。這個每週跑。有 safe output 規格。Agent 每週在 Actions 裡跑的時候你在睡覺，半夜 repository 中間突然有一個 coding engine，怎麼會安全？它們唯讀、不能直接碰 secret、跑在 container 裡，輸出通道極窄。這個例子只准開一張 issue。輸出交出去，有點像 plan 然後 apply；apply 不走 MCP，是第二階段，兩段之間有 threat detection。不是給一組任意權限去寫 issue 或改 repository 內容。有一些 tool，也有 prompt，也就是自然語言的程式，通常刻意含糊，而且那種含糊真的有用。它假設跑在他稱為 GitHub information fabric、也就是 GitHub data model 上。可以安全地開 issue、用 tool 讀各種輸入。權限設對，可以跨 repository，甚至在整個組織上跑。Front matter 裡可以有傳統的 Actions job 先做資料收集。產出是 GitHub 上的 pull request 或 issue。它們從不 merge pull request。Pull request 是硬點，人永遠在這個迴路裡。

[16:22](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=982s) 另一個例子是 triage：issue 被打開或重開就跑（字幕把 issue 聽成 miniature）。起步是裝上那個 extension，也就是 hardener，他說你可以把它想成編譯器，但重點是硬化，再對一個典型 workflow 跑新增精靈。然後就有 agentic automation，把 pull request 或 issue 分析送進 repository。

## 自動化裡，軌道愈好，火車愈快

[17:03](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1023s) 要自動化就得認真對安全。有人講自動化卻不講安全，你就該問問題。和個人生產力不一樣，安全和產能在這裡的關係是衝突的，但方向相反。技術人員可以把 coding agent session 鎖起來：只能用某些 MCP、每個 tool call 都要核准。個人會說全部關掉，他只要寫 code、只要產能。自動化像鐵軌。軌道品質愈好，火車愈能快。你愈能自動化，就愈有信心蓋出待在預定邊界和通道裡的 factory。

[18:24](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1104s) 仔細看你拿到的是不是一套安全架構。不要把 coding agent 直接丟進 GitHub Actions 或任何 CI/CD，而沒有某種安全架構。所有自動化都該有，agentic automation 更是。執行和 sandbox 的權限收到最小。Agentic 那一步唯讀、沒有 secret、safe output 很窄。常常前面有一個演算法的 preload，把 CI log 之類收成一大包，讓 coding agent 在 sandbox 裡掃。然後窄窄地輸出到預定通道，blast radius 極小：也許一張 issue 或一張 pull request。中間有 threat detection。人的監督由 issue 和 pull request 保證。他們關掉共享的 package cache（字幕聽成 coaches），避免 cache poisoning。出去的網路有防火牆、受控。

## 一座 workflow 做很多事，休眠的 repo 可以再動

[19:48](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1188s) 有了這套哲學和實作，業界有幾條路。一條是 Agent Zoo，或 agent factory。他團隊上的 Peli（字幕聽成 Pelli）走這條：幾乎為每一種工作都做一條自動化的 agentic workflow，做了好幾百個。他們寫成 agent factory，也做了部落格系列 Meet the Workflow。主題包括持續簡化 code、持續重構、把大檔拆開、套上風格。這些很主觀，agent 做得到。點進去看得到因果鏈。Semantic function refactoring 那個 workflow，142 張裡 merge 了 112 張：某張 issue 被分析，程式組織的機會導向某張 pull request，再導向某種結果。

[21:54](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1314s) Agent zoo 不是他的風格。他做一條 workflow、做很多事。樣本有 continuous test improvement、codebase 上的 continuous performance engineering。他最想講的是離心很近的 repository 維護。他自己維護大約七個開源 repo，也很在乎世界上的維護者。現在壓力很大。若有 200 或 400 張 open issue，每張要一個白天或一個晚上的業餘時間，repo 會休眠，向前的速度變成零。他仍想維護，但卡住了。

[23:01](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1381s) Repo assist 是其中一條。它讀自己的 memory，再從一桌任務裡挑幾件。維護者可以改、刪、加。每天或某個節奏醒來，在 repository 裡做這些事。前一天 Google 的 Jack 講過維護者放假。人不在時可以開，但限制任務：也許回覆說我在放假，不過 AI 對這張 issue 是這樣說的。也可以當一般的背景助手。Triage、提議改進、更新、管 label，由你選。他用來「以更好的 code 開始一天」的就是這個。

[24:23](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1463s) 他叫大家猜他從哪裡開始用。圖是 open issue 的數量，時間在三月。Repo 是他維護的 FSharp.Data，原本休眠，一大疊沒人會看的 backlog。打開 repo assist 之後，他再次覺得當維護者有樂趣。他們做了三次主要發布，把整個 issue backlog 走完，有問題也有功能需求。AI 會在 issue 上留下很好、很準的評估，甚至回到 2018 年的 issue，其中仍有有價值的。這是一種 data mining：backlog 變成向前的進度，休眠變成速度。Deedle 是另一個幾乎休眠的函式庫。整組圖裡不是每座都由他維護。別人拿 repo assist 去改成自己的需求，結果範圍不同。有的還有新東西進來，有的更休眠。報告叫 The Impact of Automated Repository Maintenance Assistance。不是全部，但大多數得到向前的速度。

[26:20](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1580s) 這導向另一種想法：factory thinking、流程模型。Repository 已經透過 CI/CD 是自動化工廠，現在生產線上多了一批處理 issue、pull request 和其他活動的機器。可以做子工廠，不必把整個 repository 都打開，用 label 或 issue 標題切出一塊工作。他們寫了部落格：repository as a human-agent knowledge factory。他現在想到 repository，就是人和 agent 一起來、為團隊和那個生產過程取得向前速度的地方。

[27:34](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1654s) 一旦用流動來想，有的堵住、有的在流、有的閒置，因為沒有新輸入。堵住的那些，其實是被人類的需求閘住。這沒關係。工廠永遠可以慢下來。家裡的小工廠，你不會想讓它整晚跑、半夜把你吵醒。可以用人和組織的需要去閘。人是這個過程的一部分，人的需要始終優先。Repository 的主人大概要變成工廠或流動的設計者。若目標是把人的顧慮算進去的產能，就要讓生產以高品質、對的成本流動。會看到更多流程工程的想法。去讀化學工業、機械工程和其他工程學科的書，再帶進軟體開發。

[29:13](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1753s) 東西會卡。很多人正處在大堵塞中間，清開一段，驚嘆這些 agent，然後流程另一段又堵住，因為交出去的人根本沒處理。企業要從堵塞走到流動，現代的企業軟體開發還有很多事要做。

[29:53](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1793s) May 在 HUD 的工作是每週報告。大家看每週報告的樣本會問：我真的要每週一份 repo 報告嗎？也許不要一份普通的研究報告。但如果報告來自探進 production 的探針，分析故障、問題、請求失敗，每週把資訊送到團隊呢？一部分是資料、探針、以及你對工廠和產出品質的觀察好不好。May 說，效能衝刺通常幾個月一次，突然可以每週一次。

[31:19](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1879s) 當天早上他在做 GitHub 裡的兩個子工廠。一個處理一種問題：演算法看 production 和 CI 的資料庫請求，找出 N+1（字幕先聽成 one problems），全部編目，再讓工廠流動。他的工廠目前沒在流，品質關卡不夠。與其手動修一張張 issue，關鍵是退一步，給工廠加品質關卡，讓整座流起來，因為這種 N+1 有好幾百個。另一座是降低 CI 時間，同樣要加品質關卡。

[32:21](https://www.youtube.com/watch?v=kbvqRWY-bUs&t=1941s) 收束時他說，未來的工作不是一份固定的工作量。有一大堆該做的事，以前單純因為人力被卡住、太貴，所以沒做。May 的例子就是：效能或品質衝刺做得不夠勤，現在可以每週做，而且整段自動化。以前沒被做的工作，現在做得了。汽車帶來以前沒有的旅行，工廠帶來以前沒有的大量高品質產品，醫學治療以前沒治的病。整體上更多工作被做完，更多產出。他相信若想對，AI 可以是軟體業品質上的 sea change（字幕聽成 see change），流程要朝向品質，不只是朝向 slop。GitHub workflows 今天就能用，歡迎回饋。現在是 technical preview，很快進 public preview。
