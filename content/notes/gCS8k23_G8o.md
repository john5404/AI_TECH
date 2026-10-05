# Alex Gavrilescu - Backlog md: From zero to success with AI Agents | DevCon Fall 2025

Alex Gavrilescu 在 DevCon Fall 2025 講 Backlog.md。片長 25 分 29 秒，英文自動字幕。他是維也納的 lead developer。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Claude Code、CLAUDE.md、AGENTS.md 聽成 cloud，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=gCS8k23_G8o)

## 一句話

只靠 prompt，任務成功率大約一半，像在玩拉霸。加上 CLAUDE.md 和 AGENTS.md 之後到大約 75%，仍不穩，因為 agent 是 nondeterministic。他把大功能拆成塞得進一次 context window 的 markdown 任務，寫清 why、what、how、acceptance criteria 和 definition of done，成功率超過 95%。Backlog.md 是包住這套 loop 的終端機 kanban，任務以 markdown 存在 git repo 裡。

## 成功率是怎麼從 50% 拉上去的

[1:28](https://www.youtube.com/watch?v=gCS8k23_G8o&t=88s) Alex 說羅馬尼亞語、義大利語和英語，專業經驗超過 13 年，本業是 .NET、Kubernetes、Vue.js。Backlog.md 本來是他用來學 AI 的工具，後來熱門到他站在這裡講。

[2:39](https://www.youtube.com/watch?v=gCS8k23_G8o&t=159s) 他從 Claude Code 剛出來時的 prompting 開始。任務有時好、有時壞。他說的成功，是最後真的做完、不必把整份 code 丟掉；中間來回幾次仍然算成功。這樣大約 50%。

[3:21](https://www.youtube.com/watch?v=gCS8k23_G8o&t=201s) 接著是 agent instructions：CLAUDE.md、AGENTS.md。他可以規定 lint、formatting、testing 怎麼做，讓 agent 一直迭代到它知道自己成功。成功率大約 75%。他後來的結論是自己沒做錯太多事，只是在跟 nondeterministic 的 agent 玩，需要一個流程把更多 determinism 放進寫 code。

[4:17](https://www.youtube.com/watch?v=gCS8k23_G8o&t=257s) 第一件是 context window 一用完，品質就整個壞掉。所以大功能要拆成小任務，每一個都塞得進一整個 context window，而且每次都告訴 agent 為什麼做、做什麼、怎麼做。更好的是讓 AI 從你的描述寫出這份 specification。你說想在 Backlog.md 裡有 drag and drop，它翻成它理解的需求，這一步本身就是回饋。

Definition of done 來自他的日常。他問現場有多少人把 done 寫下來。測試做完、文件寫了、任務進到某個狀態，都是對齊隊友的做法，對 AI agent 一樣重要。

[6:01](https://www.youtube.com/watch?v=gCS8k23_G8o&t=361s) 任務放進 markdown。他一開始用一份巨大的檔，agent 一次看到太多東西就混亂。拆成小檔、用同一份 template，agent instructions 才能告訴它該檢查什麼、該實作什麼。檔案 commit 進 git，就可以在 Claude 裡指 task 1 到 3，叫它開始做。Loop 變得比較可預測。

早期 agent 直接讀檔，照 acceptance criteria 做。幾個月前 Claude 很不會守範圍：說做完了其實沒有，或做出你沒要的功能。Acceptance criteria 做成 checkbox 之後，它只有在全部打勾時才說做完。Definition of done 寫進 agent instructions，它只有在 testing、linting 這些都完成時才能說 done。他說這時成功率大於 95%。

他本來可以停在這裡，但想要一個工具把結構包起來。字幕說當時 Kio 還沒推出，五月幾乎沒有別的東西，所以他做了 Backlog.md。這個名字不在這裡改。

## 終端機 kanban，以及現場要補的 move mode

[8:24](https://www.youtube.com/watch?v=gCS8k23_G8o&t=504s) 投影片上那張圖是幾週前用 Nano Banana 生成的：把軟體做成 1995 年寄出的 CD。他說終端機裡的 kanban 在 1995 年其實做得出來，所以這張圖他之後都會用。

[8:55](https://www.youtube.com/watch?v=gCS8k23_G8o&t=535s) Backlog.md 的看板跑在終端機，也跑在投影片裡，因為可以用 tmux 在 slide deck 開終端機。欄位預設是 to-do、in progress、done，想加幾欄都可以。他保持簡單：被拿起來的任務常常幾分鐘、或大約一小時就做完，不需要很多狀態。可以打開任務看 acceptance criteria。他秀了一張已完成的任務，條件全部打勾。

[10:08](https://www.youtube.com/watch?v=gCS8k23_G8o&t=608s) 這不是 Jira 或 Linear 的替代品。他做給自己的 side project，簡單到能拿到好結果。他說前一天 workshop 有人告訴他，用了之後結果很好。

[11:06](https://www.youtube.com/watch?v=gCS8k23_G8o&t=666s) 當時的看板只能選任務看細節，不能搬。現場要做的是：一個指令或按鈕切換 move mode，看得到正在搬哪一張；上下箭頭在同一欄裡重排，左右箭頭在狀態欄之間移動；按 M 或 Enter 提交，取消則回到按下之前。Footer 裡的操作說明也要出現這個新按鈕。

## Agent 怎麼知道該下哪個指令

[12:08](https://www.youtube.com/watch?v=gCS8k23_G8o&t=728s) Claude 接上之後，第一件事是讀 Backlog.md 的 workflow。它透過 MCP 連到 Backlog.md，MCP 裡有給 agent 的說明。它先讀整個流程怎麼運作，再讀怎麼建立任務，然後跑指令，任務就建出來了。

任務是 markdown：front matter 的 metadata、description、acceptance criteria。這時就可以審 agent 有沒有聽懂，再進 implementation plan。Plan 要在開工前做：把任務放進 in progress，請 agent 從 description 和 acceptance criteria 理解需求、看 codebase 裡有沒有文件、再提出怎麼做。他請 Claude 依 workflow 寫 plan，並填進任務的 implementation plan 欄位。因為是現場、畫面一直在動，投影片沒抓到那張任務；他說成功訊息有出現，有時間再秀 Claude 實際寫了什麼。

[16:24](https://www.youtube.com/watch?v=gCS8k23_G8o&t=984s) 他認為最重要的審查在這裡：spec 加上 plan。Plan 代表 how，人要確認方向對，才叫 agent 開工。Agent 可以是 Cursor、Claude、Codex、Gemini。有 MCP 比較好；沒有就退回 CLI，例如 `backlog task create`、`backlog task edit`，和你在終端機下的一樣。MCP 會告訴 agent 哪個欄位必填、哪個選填，所以他通常建議用 MCP。做完而且真的做完，才把任務放進 done。

現場為了少出錯，他明確說「依 Backlog.md workflow 實作」。平常他說一句 implement the task 就夠。

## 它只是 repo 裡的任務，99% 由 agent 寫成

[18:11](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1091s) 等 Claude 做的時候他收斂定義：Backlog.md 是人和 agent 都能管任務的 CLI，如此而已。真正寫 code 是你到 Claude 或其他 agent，請它撿起一張任務。它不是可以把任務直接派給 agent 的指揮中心，比較像放在自己 repo 裡的 Jira 或 Linear，任務存在本地。電腦上有 git repo 就能完全離線跑。想看網頁就跑 `backlog browser`，它會在 localhost 起一個介面。

[19:12](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1152s) 它是 open source，有終端機介面和 web 介面。Agent 走 CLI 或原生 MCP。跨平台。他常聽到的用法是：小專案、已經知道要做什麼、想拆小任務，不想開 Jira 帳號，也不想架資料庫。在 repo 裡 `backlog init`，然後用 CLI 建任務，或叫 agent 建。

任務會在 branch 之間同步。同事把任務推到某個 origin，其他人看得到。底下用 git fetch 和其他 git 指令；使用者甚至不必自己 fetch，Backlog.md 會在底下抓。唯一要求是裝了 git 命令列。

[20:54](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1254s) 他說 Backlog.md 有 99% 是 AI agent 寫的。這是給自己的挑戰：不自己寫 code，也不把自己混進 agent 的產出裡，好學會用 AI。要調整就叫 agent 修。他真正自己寫的檔案只有 agent instructions。功能有來回，有些整個取消。Backlog 留下 spec，出事可以改 spec、重做同一個功能，也可以換一個 agent。

[21:44](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1304s) 結果回來了。畫面上有 move 按鈕。Implement move mode 被標成 done，花了幾分鐘，acceptance criteria 都打勾。先前沒看到的 implementation plan、implementation steps 都在，最後還有 implementation notes。那是他要求 agent 寫的，用來看見這張任務實際做了什麼。他按 M，任務被標出來，移到 in progress；他口述其中一次不如預期，再按 Enter，任務就在 in progress。他說這就是用 Backlog.md 做 Backlog.md，或做任何專案的方式。

## 三個審查點，以及 Agile 還沒接上的部分

[23:12](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1392s) 他認為這套有效，是因為 markdown 任務讓 context engineering 更準：每張任務只放做完它需要的資訊。一個 session 只做一張，比較不會把 context window 用完。可以回頭改 spec 再試。Acceptance criteria 把範圍定死，definition of done 讓 agent 不會多做或少做。審查有三步：任務建立之後、implementation plan 寫完之後、程式做完之後的 code review。多張任務可以並行，他提到也許用 git worktree，字幕這裡聽成 git works。

[24:00](https://www.youtube.com/watch?v=gCS8k23_G8o&t=1440s) 開放問題是 Agile 得為 AI-native workflow 改。AI agent 要被當成團隊成員。Backlog.md 是一個起點，他說一年後顯然不會還是這樣。Story point 和估算對人有用，對可以整晚跑、一個晚上做完一整個 sprint 的 agent 則不是同一套。人仍然要知道該做什麼、拿客戶回饋、回應變化。挑戰包括：自動化審查，讓任務做完之後還能 merge、deploy 到 production；解衝突；一次能並行多少任務；以及把人留在 loop 裡，好把軟體交給其他的人。
