# Ryan Lopopolo - Harness Engineering: How to Build Software When Humans Steer and Agents Execute

Ryan，OpenAI。AI Native DevCon 第一天下午，現場也有 live stream。片長約 29 分 47 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=c8bE0cj7vHY)

## 一句話

他說 harness engineering 這個詞是他提出來的。模型已經能做掉軟體工程裡很大一塊，剩下的限制是人的時間、attention，以及一直被清空又填滿的 context window。做法不是把規則一次塞滿，而是把「什麼叫做好」寫成文字，在軌跡上剛好需要時送到 agent 面前，讓同一個 review 意見不必講第二次。

## 寫 code 不再是最貴的那件事

[1:26](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=86s) 去年六月，推理模型還是最早的 o3，Codex CLI 也才剛有。他想叫這個工具做自己的工作：讀 Slack 的 alerts channel，把一次 page 做 triage。當時做不到。他改成把自己當成模型的 tool，再不斷加上更強的 tool，以及「這份工作是什麼」的 context。有效用法很快滾成雪球。

[2:31](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=151s) 他說過去六個月，做軟體的方式變了很多。十二月的 GPT 5.2 和 Opus 4.5，讓 code 生產到達他稱為 singularity 的程度。這種打斷大約十年一次，上一次他想到的是 cloud。差別是現在每個 point release 都在改「什麼做得到」。不跟著每個版本重做自己的 stack 和工作方式，就會錯過工具真正能做的事。

[4:00](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=240s) 模型已經夠好，能做生命週期裡不只有寫 code 的部分：debug、triage、回客戶、規劃、排工作。組織和 roadmap 原本建在「產出 code 很貴、佔掉大部分人力、而且慢」這條公理上。現在一個 prompt 可以換到一個 PR，或六個。工程師、engineering manager、product manager、designer 的目標，變成幫這支執行團隊——coding agent——把想法做成產品。

[5:21](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=321s) 他留下三個限制。人的時間最稀缺。他自己筆電上大概最多三個同時的 session；要更高吞吐，就得把自己的同步注意力拿掉。人和模型的 attention 也是限制：LLM 裡 attention 必須加總成一，任務裡塞進互相衝突、過重的要求，表現一定會掉。所以要更平行，把任務 fork 出去，願意接受更小、更大、或更多的 PR。Context window 仍稀缺。以他用 GPT 系列的經驗，auto compaction 很好，他已經不太想 window；一個任務可以跑 6、12、36 小時還有好結果。但 window 會被清掉再重建，所以 context 要有結構，並且不斷重新浮出來。

## 寫下來，而且要在對的時候被看到

[7:42](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=462s) Agent 沒有站會，也沒有累積傷的長期記憶。什麼叫高品質，必須寫成它讀得懂的文字。LLM 要的是 text。他把「把好工作的定義寫下來」叫做 2026 年軟體團隊的新職能。只寫不夠。若「可靠的網路程式要一致地有 retry 和 timeout」這段文字從來沒進到 agent，就等於沒寫。要在對的時間拉進 context，又不能把 agent 打到無法創造、無法推理。

[9:36](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=576s) 對人，React 的 review 可以只講一次：這組 component 用 suspense，因為 front end 效能更好。人會放進自己對 codebase 的模型。Agent 不行。他改成先在 agent 的 PR 上給意見，再讓這種錯誤以後在靜態上不可能發生：缺的 context 寫在哪、哪條 lint 該失敗、要有什麼 test、能不能讓 reviewer agent 用這些 guardrail 看每一份 diff。點狀修補不夠。同一個 review 意見他不想講第二次。

[11:12](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=672s) 這就是他說的核心。Harness engineering 是把「什麼叫做好」變成 agent 讀得懂的 context，再沿它的軌跡 just in time 送上去，把輸出舵回你能接受的那條線：每一個 PR 都貼著你認定的高品質、對齊的軟體。

[11:41](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=701s) 跟 DevOps 的 shift left 相反。對 agent，他盡量把介入放在流程的右邊，減少自己同步耗上去的時間。PR 結果差，可以扔掉、改 prompt，多半能再得到好的，但這不持久，也沒有傳給團隊。再往左一階是寫下來。還不夠，就讓 review agent 判斷每一份 diff。再往左，是靜態可驗證的 lint、guardrail、test。

[12:57](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=777s) Agent 不是不會寫高品質軟體。訓練看過各種做法的排列組合。人要做的是剪掉 latent space，告訴它我們要哪一種選擇。Jupyter 裡做資料科學原型，和給資料庫加一種 index，是不同的任務。原型，以及需要 staged rollout、A/B test、feature flag 的 production 功能，必須寫清楚，並給工具去判斷這次變更是哪一種、該找哪本 runbook。有邊界，也留推理和創造的空間。

## 一個 PR 裡的三段 context

[14:16](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=856s) 餵給 agent 的每一段文字都是 prompting，repo 裡的 code 本身也是，不只文件。把 codebase 收成同一套 pattern，模型需要的 attention 就少。整疊都用同一套 observability，它可以把一邊看到的 context 平移到另一邊。若有六套，它會花時間問：這裡用哪一套、遷了沒有、什麼才是正典。

[15:22](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=922s) 他把一次 PR 的 context 分成三段。Agent 檔裡最重要的，是每次 rollout、每個 session 都要走的編號步驟。第一段先落地：文件知識庫、這張 ticket、爬過往的 ADR 和設計文件、看會影響哪些功能、看 critical user journey 和畫面，心裡帶著 QA 計畫。這段可以慢，因為要先把功能在全局裡的位置叫進來。

[16:26](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=986s) 中間很亂：寫 code、跑 test、探索。Agent 會呼叫很多 tool。他就利用這一點，在 tool 回傳時 just in time 把輸出舵回基線。給 agent 的 test 和 lint 跟人的不一樣。Agent 會截斷 tool 輸出，也很吃會指向 runbook 的錯誤訊息。這種瑣碎檢查他願意寫很多。缺 timeout、缺 retry 的跨服務呼叫，他說耗掉的工程時間很驚人，卻仍沒有程式在斷言 retry，也沒有現成的 ESLint plugin。Code 變便宜之後，可以一次 vibe 出一套有 100% code coverage、exhaustive table driven test 的 guardrail，把 codebase 一次遷完。以後每寫一個 fetch 就當場失敗。不必先塞滿 context window。Auto compaction 時 tool 輸出的權重較低，所以是即時修正，原本那個複雜任務還能繼續。

[18:24](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1104s) 跑完之後，diff 是靜態的，guardrail 也是靜態的，可以用很多 LLM as judge：什麼叫可靠、什麼叫效能好的 React、好或壞、壞在哪。Judge  craving text，可以在 PR thread 上跟實作 agent 來回，把 diff 再拉回基線。

## 護欄放在失敗發生的地方

[19:12](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1152s) 他要的是一張地圖：哪種工作該看哪段 context，而不是在 agent 檔裡塞滿規則。塞太滿會把 latent space 切碎，模型也比較難有創意地爬 codebase。他會指向一組整理過的 review persona，本質是條列的 guardrail。這對人也便宜：Slack thread 裡講完一次效能回歸該怎麼修，tag agent，叫它把這些收進靜態 guardrail 並開 PR。同一套可以用來寫產品功能、critical user journey、這個 app 為什麼存在、解什麼使用者問題。

[20:47](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1247s) 中段可以用很粗的鎚子：對 AST 的 test、對磁碟上檔案結構的 test、行數、有沒有 snapshot test。要求每個 React component 都有 100% branch coverage 的 snapshot test，模型就會自然把東西拆開、能純就純、少做 prop drilling、把 hook 放近資料。寫一支在磁碟上把 snapshot 對上 component 的程式，現在幾乎免費。型別也一樣。他禁止函式使用 `any` 或 `unknown`，除非是在 root handler 或從資料庫解析輸入。ESLint 禁掉那種型別，codebase 要 100% typed。再加上 100% code coverage，亂探型別的行為會自己消失。失敗的檢查要告訴 agent 為什麼失敗、該改做什麼，它才能自己修好。

[22:43](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1363s) 進 review 時，把模型當必須說服你才能 merge 的隊友。他不會在 VS Code 或 vim 裡看著同事打字；同事說測過，他就信。不確定就看 staging 的 log，或請對方貼在 app 裡操作的截圖。Agent 也要交同樣的東西。有 computer use、browser use 之後容易很多，他很推 Codex app。沒有也可以：Docker 裡的 headless display，用 FFmpeg 錄一段重現影片。那段接線的 code 可以很醜。他說 Codex 用 FFmpeg 大概比這房間裡的人都好。

[23:52](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1432s) 接受 diff 時，他比照人類隊友：benefit of the doubt，偏向 merge。先問 P2 以上、他非看不可的是什麼。Reviewer agent 其實是一個 matrix CI job，指向一堆 markdown 來評判，把修補做完，coding agent 接去改，reviewer 滿意就走。他沿途看哪種 review 意見一直浮出來。若總在這段才出現，那就是該再往左搬的訊號。人和 reviewer 才能把時間留給更特別、更複雜的變更。

[24:52](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1492s) 團隊該系統化收下所有人的回饋：每則 review、每次打斷 agent、每次介入、每次建置失敗、每次 production 例外。這些都是訊號，表示實作 agent 缺了 context，沒想到這段 code 部署之後的後果。他們想做的，也是下一場會講的，是把這些資料吸進來，每晚 dream：用一群 sub-agent 蒸餾人的 prompt 能怎麼更好、codebase 缺了哪條 guardrail，然後走向更 headless、更少等人插手、更能把複雜工作交給 agent。Vibe coding 在這裡是必要的，因為很多 guardrail 只影響自己的本機，code 可以醜。他就能像 group tech lead 或 org lead：不看每個人的鍵盤，只看不變條件、介面，以及元件是否高可靠地做到它宣稱的事。

[26:56](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1616s) 有人問：lint 不是比 review 意見更好嗎，為什麼要留在右邊？他說結構一旦能在對的時間把要求送上去，agent 多半會自己發現。它們會標出哪類變更該看哪些 guardrail 檔，例如 backend、design system，再把對應的 persona 叫進 context，所以他常常看不到那種反覆的壞模式。要再往左的訊號，是某條 guardrail 經常跨過 15 個 context window 還需要，而那時檔案內容已經被 auto compaction 清掉。前提是自動發現本身要可靠。

[28:35](https://www.youtube.com/watch?v=c8bE0cj7vHY&t=1715s) 實作落在他的開源。他以前用 Rust 寫過 Ruby interpreter，叫 Artichoke，現在還在維護從那裡出來的 crate。他建議看 `artichoke-rand-mt`，一個 Mersenne Twister。他用 Codex app 的自動化，讓不少開源維護不用手握方向盤。Review agent 還沒放上去，他說就快了。
