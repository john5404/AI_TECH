# Nnenna Ndukwe - Separation of Agentic Concerns: Why 1 AI Can't Rule Your Codebase | DevCon Fall 2025

片長約 24 分鐘，英文自動字幕。DevCon Fall 2025。講者是 Nnenna Ndukwe，字幕把名字聽成 Nana Dukquway。她最近加入 Qodo，字幕把公司聽成 COD、Codto、Kodo。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=VfUTkoYWsPQ)

## 一句話

一則推文說：agent 能寫 code 就能 review，大家用的是同一批 models，code review bot 賣的不過是 prompts 和一些 GitHub Actions glue。Nnenna 的回答是可以，但要看目標。要速度，一個 AI 走完很多階段說得通；要品質，寫 code 和找錯是不同的認知模式，不該交給同一個 agent。

## 一個 AI 統治整個 SDLC，聽起來像 vibe coding

[0:10](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=10s) 她說 separation of agentic concerns 這個概念對軟體工程並不新，她只是用它看 AI 工具正在走的方向。她原本是傳統的 software engineer，職涯裡一直做 DevRel 附近的事，幾年前正式轉過去。字幕把 DevRel 聽成 Devril。現在她在 Qodo 拿薪水沉迷 AI，焦點是 AI for software development：沒有 AI 時開發者的 workflow 是什麼，再怎麼把 AI 接進去才真的有生產力。

[1:33](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=93s) 那則推文她截圖留著，問現場誰同意。她說懂 LLM 的人會想：為什麼不把這些 use case 放在同一把傘下。她把這叫做 one AI to rule them all。不是字面只有一個 AI，而是一個 agent 處理 SDLC 的很多階段：planning、coding、testing、deployment。你描述想要什麼，AI 就做。她說這聽起來就是 vibe coding。市場正在大力推簡化造軟體，這有很強的 use case，現場就算有技術能力的人也在用。她是《魔戒》粉絲，這個名字是故意的。

[3:43](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=223s) 她的答案：可以，取決於目標。若目標是速度，一個 AI 工具走完很多階段，可能是最好的用法之一。若還要品質，而且不是 side project——開源維護者，或企業工程團隊——AI 進來之前的期待，進來之後還在。速度、生產力、品質要一起擺。所以她認為不該用同一個 agent 寫 code、review code、再做其他階段。認知架構需要專門的框架：生成時的創造力，和分析時的挑錯，是不同的 cognitive modes。

## 通用工具已經看到的品質問題

[5:11](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=311s) 她快翻一張問題清單。生產環境出現重大漏洞、重複的 code blocks。她說以 AI 的年份看，2024 已經很久，這仍值得想。25% 的開發者回報，每五個 AI 建議裡有一個含 functional errors；code quality 在退化，而且沒有變好。字幕這句有重複，數字以她口頭的 25% 和 one in five 為準。來源是不同報告，其中一份是 GitClear 和 Qodo 的 state of AI code quality。字幕把 GitClear 聽成 get clear。

[6:46](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=406s) 她認為通用 AI coding 的根本問題還包括 context window 和 context 本身。為生成最佳化，和為 review 最佳化，會互相撞。行為非決定性。沒有專門的 guardrails。通用 agent 像樣樣都會，沒有一樣真正專精。她口頭說成 jack of all trades but not really a master of none。

[7:25](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=445s) 她回到軟體工程：我們花了 15 年學會 monolithic architectures 不總是依需求擴展，microservices 是當時的解法。那 AI agents 為什麼不能用同一種心態？

## Context 就是認知架構

[8:06](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=486s) 她對那則推文的長答案只留在投影片上：context is cognitive architecture。坐下來寫 feature，和坐下來為它寫 tests，是完全不同的 mental models、不同的具名方法、不同的解題方式。人會為了達到品質標準，自己換一種心思。

[9:09](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=549s) 她認為 AI 系統也一樣。給 LLM 的 context 若是「寫能處理 edge cases 的 production ready code」，和「找出這段 code 所有可能失敗的方式並寫完整測試」，走的是不同路徑。模型不是只在預測下一個 token，而是在你建立的框架裡預測下一個 token。所以 separation of agentic concerns 就是 separation of cognitive concerns。先讓 AI 複製人解題時會換模式這件事，才比較站得住 multi-agent，而不是把一個簡化系統丟進多步驟的 SDLC。

[10:23](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=623s) Separation of concerns 她第一次是在 coding boot camp 學的：HTML 和 CSS 可以混寫，但初學時要把 styling 放在 CSS 檔，兩種心思分開。套到 AI：planning agents、coding agents、review agents 不同。目標若是 production grade 的 code quality，整體架構可以更好。

[11:30](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=690s) 簡單軟體，也許只要 AI code generation。複雜軟體的 code quality 還包括 maintainability、reliability、團隊或工程組織的 compliance，以及一整個 review 階段。品質不是只有生成那一段。

## 把專門的 agent 插進既有生命週期

[12:12](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=732s) 她的做法不是重畫 SDLC，而是把 AI 插進既有階段。Planning agent 可以讀 Jira 或你用的專案工具，在 IDE 裡計畫怎麼實作需求、怎麼拆任務。接著是 code generation：依計畫實作第一、二、三段，測試怎麼混進去看你是不是 test driven development。

[13:41](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=821s) Code review 是另一個階段，需要的功能和生成不同。可以在本機 IDE 先做，她說 Qodo 現在就能在送 pull request、到 GitHub review 之前做本地 review。再往上一層是 workflows：重複的事、團隊要套用的事，例如邊做任務邊生文件、把已經建立的 best practices 套上去，圍著 code integrity。底下供這些階段使用的 context，可以是 agents、MCPs，以及她後面要講的 Qodo context engine。

[15:14](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=914s) 這是 Qodo 在用的做法，市場上很多工具也開始這樣：把你要的系統接成一條流，至少對上、最好超過你沒有 AI 時的 workflow。

## Context engine：不要把 context engineering 全壓在人身上

[15:54](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=954s) 她叫這段 side quest。多個 agents 之上，還有會直接改變它們的底層系統。要知道什麼時候該是一個 agent，什麼時候該是另一套用來給 agents 更多能力的 AI 系統。多數工具能讀 code；她要的是隨著時間理解 code。

[16:36](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=996s) Context engineering 的討論她覺得很令人興奮，也擔心壓力全在開發者身上：為了高品質結果，人得懂所有面向再自己實作。她的反應是，那就該有系統替開發者處理。她沒說這可以完全沒有 human in the loop。她說的是：問題一出現，就知道該另建系統，AI 給軟體工程的架構才算在變成熟。

[17:41](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=1061s) 這個 context engine 透過有彈性的 MCPs 和 APIs 連接，把 codebase intelligence 嵌進 IDE、終端機、前面說的 workflows，讓各司其職的 agents 輸出能變好。她想像它在做 codebase indexing，也許每晚建一次。你在 code generation 給綠燈、在 AI code review 核准的東西，它都學；再混進團隊標準，系統就會隨時間變好。這是她區分「我們需要一個 agent」和「這問題複雜到該做一整個 engine」的方式。

## Planning、coding、review 各看各的

[19:09](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=1149s) Planning agents 是寫 code 之前的戰略：分析需求、拆複雜任務、評估架構、做出 execution blueprint。這是很多工具開始用的 plan before act。她說這種分離一開始不在 AI coding 工具裡，現在有了，表示實驗正在靠近：SDLC 怎麼拆，agent 的節點就怎麼拆。這張是故意簡化的。

[20:13](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=1213s) Coding agent 在 guardrails 裡、依 planning 階段已核准的計畫做執行。它生成實作，也可以按領域專門化：frontend、backend、security、performance。彼此用 shared state 溝通，不只是直接傳訊息。寫測試、跑測試、debug 她故意保持籠統，因為各團隊的方法、以及何時 build、何時跑測試，都不一樣。

[21:02](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=1262s) Review 是在真正的 QA engineer 拿到東西之前，先執行 code quality。Review agents 看品質、風格一致性，security 她認為也許該是另一個系統，或用別的工具接，例如 Snyk MCP。字幕把 Snyk 聽成 sneak。這一層可以找出重複的 code patterns，避免一次次迭代裡品質往下掉。Review agents 要抓的是 coding agents 引進的錯誤，打斷那種被記錄下來的 iterative degradation。她引用：44% 的開發者把品質退化怪到 context，40% 指向和團隊標準不一致。字幕把 cite 聽成 site。不同 agents 檢查略為不同的標準，是在提高抓到前段問題的機會。

[22:47](https://www.youtube.com/watch?v=VfUTkoYWsPQ&t=1367s) 她說這不只是一個 codebase。今天 AI 生成的 code 有很多問題，若從 SDLC、從我們早就分開的工作方式出發，把同樣的 context 用到系統上，結果可以是品質變好、technical debt 減少，以及能隨時間擴展的架構，而不是停在簡單的 AI code gen 和 vibe coding。
