# How We Shipped More Code in 3 Weeks Than 3 Months Combined

講者沒有在字幕裡自報名字。這是他第一次在這種場合正式演講，人在 Tessl。片長 33 分 34 秒，英文手寫字幕。標題寫三週對三個月；他口頭說的是二月最後三週，比九月和十月幾乎全部加起來還多。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=NM0LCfjISfY)

## 一句話

他大約從 2025 年 9 月起不再手寫 code，團隊每個工程師都把流程改成 AI native。人數沒怎麼變，送出的 code 變多，change failure rate 大致持平、二月還略降，lead time 在縮。做法不是把 agent 加進舊流程，而是人把時間放在審查，agent 做計畫和實作，再用 feedback loop 讓它自己驗證，最後才平行。

## 同一組訊號，才看得出變快沒有變糟

[0:25](https://www.youtube.com/watch?v=NM0LCfjISfY&t=25s) 他先問什麼叫 AI native，以及結果是什麼。Developer velocity 很難量。他用的定義是：多快、多可靠地把想法變成能用的軟體。訊號不必完美，但同一段時間要用同一組。Deployment frequency：他們幾乎每個 commit 都部署，而且每天都在部署，所以用 commit 數。Change failure rate：變更裡有多少造成 incident、有人 on-call 被叫、然後要 rollback。Lead time：PR 從開到 merge 多久，以及 Linear issue 停在 in progress 到 done 多久。

[3:05](https://www.youtube.com/watch?v=NM0LCfjISfY&t=185s) 過去六個月的 commit 圖是他們自己的。二月最後三週送出的 code，比九月和十月幾乎全部加起來還多。Change failure rate 大致一樣，二月還降一點。PR 的 lead time 往下，merge 更快。Linear issue 停在 in progress 的時間變短。那幾週 headcount 沒怎麼變。圖上有 P50 和 P90；有些 Linear ticket 會把資料扯亂，字幕中間幾個字沒聽清。他每天用的工具是 Claude、Codex、中間的 Conductor、Cursor（他說既是 coding agent 也是 IDE），終端機用 Warp，換別的也行。

## 人留在審查，執行用新的 context

[4:45](https://www.youtube.com/watch?v=NM0LCfjISfY&t=285s) 舊流程是：拿到任務先計畫、收集 context、想解法，自己或同事審計畫，然後寫 code，再請人審變更，出貨，再審一次。新流程裡，計畫和執行大部分交給 coding agent。工程師把重心放在那些審查。

[5:58](https://www.youtube.com/watch?v=NM0LCfjISfY&t=358s) 大而複雜的變更，他建議從 plan mode 開始。把 agent 當同事：一起看 codebase，弄清要改什麼、為什麼。Prompt 要清楚、要短。Agent 的回應當成一份小的 design doc 來審結構、看是否滿足需求。可以來回。這也是早點介入的時候。以前技術設計做完才有人說應該換做法，整份實作都要改。這裡原則一樣。

[7:07](https://www.youtube.com/watch?v=NM0LCfjISfY&t=427s) 執行時用全新的 context window。塞進不需要的東西，agent 更難判斷什麼相關，更可能犯錯。多數人在這裡碰到 agent：寫出壞掉的 code、卡住、不知道怎麼修。

## Feedback loop 是神經系統，複雜步驟放進 skill

[7:55](https://www.youtube.com/watch?v=NM0LCfjISfY&t=475s) 若 workflow 是骨架，feedback loop 是神經系統，讓 agent 能對發生的事做出反應，並驗證自己的工作。Loop 越好，越可能得到符合需求、能跑的輸出。Repo 裡多半已經有：用 CLI 跑測試、type check、lint、format；瀏覽器，也就是 end-to-end 的另一個介面，讓 agent 在 context 裡看到畫面上發生什麼；系統 log，例如 Docker container 裡的 log 檔；以及 MCP server，用比較結構化的方式和外部系統溝通。

[9:11](https://www.youtube.com/watch?v=NM0LCfjISfY&t=551s) Agent 怎麼知道這些存在：AGENTS.md、CLAUDE.md 這類檔案會加進每一次新對話，不必反覆重講。要寫的是有哪些 feedback loop、怎麼叫、什麼時候叫。他們的片段很直接：可以 install、跑測試、跑 lint、對單一測試檔跑測試。字幕把指令聽成 but install、bug test，聽起來像 bun。設好之後，agent 做完會自己跑 lint 和測試，至少確認 code 能跑。簡單、幾乎自我說明的流程這樣就夠。複雜流程若全塞進這個檔，會開始被忽略：越複雜，每一則資訊越不重要。

[11:11](https://www.youtube.com/watch?v=NM0LCfjISfY&t=671s) Agent skill 補的是這個。一般 markdown 說明某件事是什麼；skill 是一步一步說明怎麼做，像程序指南，也給 agent 新能力。還要寫什麼時候該用。Agent 可以自己判斷現在適用，再把那個 context 拉進來，所以是 lazy load。例子在 Tessl registry 上。一個是 systematic debugging，教它怎麼一步步查 bug，包括要叫哪些 API 才知道某個區域有沒有問題。另一個是做 MCP：把重複的步驟包成 playbook，讓它把每個新服務抽出成自己的 MCP server，而不是每次即興，或每次重貼同一段 prompt。行為更穩，也是你能控制的 feedback loop。

[13:13](https://www.youtube.com/watch?v=NM0LCfjISfY&t=793s) 他幾乎每天用兩個。Code review skill 放在每個 coding thread 的結尾，在新的 context window 裡跑。它看風格、架構、bug、code smell，出一份報告，不自己改。人決定哪些要做。Code simplify skill 是因為 agent 常寫太多：膨脹、不必要的重複、做法比需要的多、把 codebase 裡已有的概念重做一遍。它保住行為，減少行數。他說每一行都是負債，以後得維護、得測、得讓人或 agent 還有 context。

## 等待變成瓶頸之後，才平行

[15:08](https://www.youtube.com/watch?v=NM0LCfjISfY&t=908s) 到這裡還解釋不了從一個月幾百個 commit，變成一週 300 個。串列流程是計畫、等、審、等、PR、等、部署。等待是新瓶頸。單條 workflow 先跑通，平行才有力量。

[15:49](https://www.youtube.com/watch?v=NM0LCfjISfY&t=949s) Conductor 用 git worktree 把 agent 平行起來。他到去年稍早才知道 worktree。字幕把 worktree 聽成 lecture：同一份 repo 的另一個 checkout，共用歷史，在同一台機器上。不必每次為了功能再 clone 一次。Agent A 在做計畫時，可以叫 B 開始，再叫 C。人在中間移動，審計畫、審 diff、跑 simplify 或 review、再給方向。時間從等待變成指揮。Conductor 裡按 new workspace，它會 clone，再掛上一個 coding agent。多個 worker 各有自己的變更；他舉例第一個已經開了 PR、在 review。

[17:40](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1060s) 三四個變更同時進行，每條 branch 還是要自己驗證。若每次 clone 都要做一長串安裝，就不會覺得快。他們把啟動收成一支放進 repo 的 script：裝 dependency、複製環境變數、跑 dev script。Conductor 開新 workspace 時可以自動跑。他用一個 alias，從筆電上已有的檔案複製環境變數，另有一支 script 找到相關 port、殺掉、再重開。同一台機器可以走兩條路：允許多個 instance，或啟動時自動關掉其他正在跑的。Next.js 或 Vite 可以自動換 port，字幕把 Vite 聽成 Veet。他選第二條，比較適合他們的 repo。舊 port 他還是會清。

[20:18](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1218s) Cloud agent 再往前一步。本地 agent 是手在迴圈裡；cloud agent 是丟到背景、之後再審。Claude Code 有內建的 web agent，也可以自己做。開一個 container，拉 repo，像在自己電腦上跑 Claude Code，改完開 PR。例子是 registry 頁面上 skills 的篩選有個小問題。Slack 上討論完 context，他跟 Claude 說去看。沒有在本地架環境。Claude 拉 repo、改、開 PR，他稍後審。能這樣，是因為它會 lint、format、跑測試，知道自己做的是否符合需要。

[22:28](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1348s) 他停掉 agent 已經做得又快又好的部分，把時間放在 agent 還沒有足夠 context 的事：在一組約束下做決定、指揮產品。那些決定會影響整個事業方向。Plan mode、worktree、cloud agent、平行、feedback loop、skill、fresh context，拆開看都是舊觀念。你知道任務開始要先想，知道不重疊的事可以平行，也知道要花好幾天才能知道做對沒有有多痛。這些用在 coding agent 上一樣。

[24:01](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1441s) 接下來 24 到 48 小時他建議三件，也是 Tessl 看到改善的地方。第一，用現有 agent 走 plan、review、execute：plan mode 裡做完，再在新的 context window 執行。第二，把 feedback loop 做成功，寫進 agent 的 markdown。他說最近做的幾乎都是把 loop 變好，讓 agent 能盡量自主，這一點怎麼強調都不過分。第三，Conductor 是免費的，會偵測既有的 Claude Code 或 Codex。用 worktree 時會立刻看出，clone 這份 repo、讓另一個人跑起來有多難。

[25:15](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1515s) 寫更多、更快，code 會不會更差、服務會不會變糟。他說 velocity 上去，change failure rate 下來，lead time 縮短。不是只把 agent 加進去，而是把 feedback loop 收緊，讓 agent 能驗證自己的工作，再平行。單條 workflow 先盡量自動化，也先把品質守住，審查和 guardrail 留著。他接著說，就算把平行停掉，品質還是會掉一點，得再把那條 workflow 接回去改進。他說自己現在整天在跟機器人說話。QR code 是演講裡提到的連結，在他的網站上，不是折扣。

## 手會退步，複雜功能不要硬平行

[26:59](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1619s) 有人問：六個月沒寫 code，若下一份工作必須手寫怎麼辦，以及成本。他說這是產業問題。若生產力的好處明顯蓋過 coding agent 的成本，下一份工作不准用 agent 的機會不大。若一切崩潰、得回去寫他說的 artisanal code，那就跟重新學一件事一樣。他同意寫 code 和審 code 是不同的技能。審很久之後再動手寫，會比以前經常寫的時候差很多。他說自己也不知道，但相信能想出辦法。成本確實很高。若能清楚證明比以前快五、六、七倍，就算一年花掉一或兩個工程師那個量級，也已經回本。

[29:31](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1771s) 另一個人說小 bug 很好平行，但會改到抽象、要權衡的新功能很難，而且每行都得審。他同意 context switching 是問題。任務越複雜，能同時做的就越少。他的做法是手上有一件重的，旁邊撿一兩件積灰塵的小 backlog 或小 UI。公司階段影響最大：早期新創可能同時要做很多件、平行因子高；大公司若定義得很清楚，又是另一種。他自己也碰到同樣的問題。

[32:11](https://www.youtube.com/watch?v=NM0LCfjISfY&t=1931s) Merge conflict 他盡量避開：兩張票會碰到同一處 code，就不平行。就算用 Graphite 或 stacked PR，衝突仍然痛。他做完那一段再回來。團隊其他人會被衝突拖慢，他們還在看怎麼改進。他看過有人做專門在背景清 merge conflict 的 agent。他說這對他們仍是開放問題。
