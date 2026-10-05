# Ray Myers - AI Hates Legacy Code | DevCon Fall 2025

Ray Myers 在 AI Native DevCon。他在 OpenHands，開源 coding agent，他說前一天正式成為 series A startup。片長約 24 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla、把 Anthropic 聽成 Enthropic、把 SWE-bench 聽成 Swebench。

- 原片：[YouTube](https://www.youtube.com/watch?v=E5u2qFX1aGM)
- 投影片：他說在 raymyers.org/talks。

## 一句話

以 LLM 為核心的 coding agent，對付已經在 production、生意靠它的 code，裝備不夠。SWE-bench verified 超過 70% 是真的經濟價值，不是已經爬上 Legacy Mountain 的百分之七十。他要的對話是一起修，而且少一點把所有事都押在 model 上。

## 兩種親身經驗，都是對的

[0:10](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=10s) 他先講兩件不算酷的事。幾個月前，有人的 agent 明明被明確交代不要做，還是刪了 production database。他準備這場演講時，agent 改了他的 makefile，讓失敗的測試也報成通過。他把這類行為叫 reward tampering 和 hallucination。Anthropic 這類實驗室壓這些問題超過一年，有進展，下游用 coding agent 的人仍經常碰到。對做 agent 的人來說，這是在目前假設下沒有路徑可修的 bug。問題是那些假設要不要改。

[2:18](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=138s) 他畫了兩個地方。Pitch deck paradise 是 demo、prototype、新 code，綠地開發，AI 在那裡最有用。他自己來自 Legacy Mountain。兩邊都在報告真實經驗：一邊說 AI coding 是 game changer，另一邊說你的 AI 不能用，兩邊都對。Paradise 那側聽不懂差異，就說對方封閉、怪使用者，還威脅 you will be left behind。他說自己看過幾百個人這樣講，像在講被提，而不是在做有細微差別的技術討論。威脅不會讓它開始能用。他要的對話是 let's fix it。他代表 Legacy Mountain 停火，歡迎正在爬這座山的人。

[4:20](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=260s) 大家對爬到多高有分歧。SWE-bench 代表真實 GitHub repo 上真實做過的任務。他說有很強的共識：很多 agent 在 verified subset 超過 70%，這是經濟價值，不是虛榮指標。有人講得像 70% 就等於爬了 Legacy Mountain 的七成，這種說法在 LinkedIn 上拿得到分享。他比較接近另一個看法：那是某件有趣的事的 70%，但低到從那裡還看不到山頂。

## 怕的是舊系統，不是新工具

[5:50](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=350s) 他定義這句話：以 large language model 為基礎的系統，應付不了既有 production code 的挑戰。AI 可以指很多東西，它們也不會真的恨。他說的是現在做 coding agent 的那些假設。Legacy code 在這裡是任何已在 production、生意依賴的既有 code。大家口中的 legacy 挑戰，通常是舊做法、脆、沒測試、脈絡丟了、人走了，收斂成一件事：我們不敢改它。若 Paradise 以為這座山怕的是採用 AI，只對了一部分。更糟的是怕舊技術、怕自己的系統。軟體業相當於怕自己的 legacy。

[7:23](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=443s) 2023 年大家就知道，LLM 在低風險、脈絡清楚、結果好檢查的任務上容易有價值。他叫 ChatGPT 給一隻 silly goose，看起來就是。他補了一個玩笑：Opus 說那其實是鴨子，要找 avian pathologist。Legacy Mountain 常常正好相反：高風險，因為生意靠它；脈絡不清楚；結果不好檢查。LLM 會失敗，不然就要很費工的變通來管風險。

[8:26](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=506s) 他不收藉口。Models will get better 是真的，卻被當成萬靈丹：模型不會在每個想像得到的方向同等變好。要講的話，請指明哪個行為會變好、怎麼知道到了。Humans make mistakes too 技術上對，拿來結束思考就是 thought-terminating cliche。人和 LLM 犯的錯、原因都不一樣。它可以是解決問題的開頭，不該是句點。怪使用者更不行。這些工具在很多真實情境裡本來就難用出結果。怪人家沒背最新的二十個技巧，只會擋住產品變好。對使用者有同理心，才會做出更好的體驗。

## 使用者去學 craft，做工具的人給扳手

[10:17](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=617s) 聽眾重疊，但分成使用者和做工具的人。使用者他要的是 apply software craft。學 AI 很好，可是眼前還有軟體工程這套物理。大部分仍然相關，而且我們知道怎麼教。他推薦 Michael Feathers 的 *Working Effectively with Legacy Code*、Marianne Bellotti 的 *Kill It with Fire*、Dave Farley 的 *Modern Software Engineering*，以及這些人的 blog 和影片。那些洞察也能讓你把 AI 用得更好。

[11:37](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=697s) Craft 加上 AI 還沒走到知道怎麼教的地步，基礎知識變得太快。他點名前一天早上的一場 master class，講者在前排，字幕把名字聽成 A lot of Kessler。她和其他人，包括字幕裡的 Simon Technical Coaching Society，在一份 GitHub repo 收集怎麼用軟體工程裡已知的原則來用 coding agents。投影片上只是她前兩小時講得到的地圖，變通清單還只是表面。這應該回饋到工具：人不必背這麼多 workaround。那些技能多半在管 context、管風險（用 craft，或把任務縮小），以及自訂 agent。

[12:54](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=774s) OpenHands 第一版剛宣布：把讓事情往前走的核心 agent 抽成 Software Agent SDK，可以用真正的 code 編排怎麼用 agent，不必只靠 prompting。做工具的人則要幫使用者用上 software craft，並且讓行為清楚、可預期、學得會、信得過。現在的工具太像魔法盒。Legacy Mountain 要的不是魔法盒，是扳手：我知道它做什麼，而且握得住。

## 少押一點在 model 上

[14:01](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=841s) 若這不是一句喪氣口號，而是暫時得面對的狀態，解法就跟著出來：解法不要這麼依賴 large language model，把依賴降一點。他用兩軸看零件。Scope 是多通用，confidence 是我們對它在做什麼有多有把握。前沿的 foundation model scope 很高。演算法和舊的 symbolic AI，在設計給它們的很小範圍裡，信心很高。右上角是又廣又有把握。可以把 LLM 往信心推，也可以把演算法往範圍推。很多錢在前一條：把事情都塞進 LLM，模型變好就水漲船高。工程師兩邊都能用，組合很多。

[16:02](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=962s) 他舉自己二月在紐約的那場 Make tools that don't break：用 refactoring 演算法處理那種 code，不要讓人或 LLM 直接改檔。下一場是 OpenHands CEO Robert 的 Managing Fleets of Coding Agents with OpenHands，談長視野任務和大 codebase：先讀原始碼、做 dependency graph，再把任務交給一整隊 agent。再下一場是他朋友 George（Stackpack，後面字幕聽成 stackback）的 DevOps agents that can't delete your database，他點出的是 policy engine。

[17:30](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=1050s) 把前兩個想法合在一些 OpenHands migration 裡：靜態分析做出依賴樹，再切分、排序任務，讓 agent 平行做又不會撞在一起，責任盡量不重疊。能用語法變換改 code 的地方，就透過 agent 的 tool use，他點名的工具字幕聽成 as GP，另外有 Java parser。他說這像把 compiler 由內往外翻：有一個 LLM agent，其餘很像 compiler 內部。Compiler 很會想 code。LLM 不是 compiler。

[18:41](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=1121s) George 那套是偏 DevOps 的 coding agent，裡頭權限系統叫 Warden，用 Amazon 的 Cedar policy。Cedar 有形式上驗證過的部分。據他所知，這是 formal verification 第一次走進 coding agent 產品並上到 production。研究例子很多。他在收一份叫 awesome verified coding agents 的 repo，漏了他想知道。Cedar 是開源函式庫，解析誰能碰哪些資源的 DSL，有 forbid 也有 permit。引擎用 Rust 寫。若一件事又被禁止又被允許，禁止贏，他們叫 forbid trumps permit。他們要的不是測過的輸入，而是每一種想得到的輸入。做法是 Rust 有一份參考實作，Lean 有一份平行實作可以做數學證明。Fields medalist 用 Lean 核對結果。Cedar Spec 裡這類定理快兩千條。上面那段仍像 code，箭頭是 implies；下面是 proof script，一串 tactics。他過去一年很多時間在學 interactive theorem prover。右邊是 proof state，底下是要證的 goal。某一步是把 `isAuthorized` unfold 開來，再化簡到證完。這像測試，但能對所有輸入證明，不是只對測試裡的輸入。現場看過 tactic prover 的，他數到至少一位。

[22:48](https://www.youtube.com/watch?v=E5u2qFX1aGM&t=1368s) 計算機科學的過去、現在、未來都能用。唯一逃不掉的是舊 code。就算今天所有舊 code 都逃掉了，新 code 也會變舊。他希望爬 Legacy Mountain 時至少同意：不管用什麼技術、魔法、model 和機器，一起把 legacy 說成驕傲，而不是恐懼。
