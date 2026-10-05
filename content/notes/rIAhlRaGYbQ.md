# Jennifer Sand & Brandy Pielech   Beyond Tests  What to Verify in AI Generated Code

Jennifer Sand 與 Brandy Pielech 的演講。片長 23 分 6 秒，英文自動字幕。字幕把 Jennifer 聽成 Sans，把公司名聽成 Codential，後面才清楚說到 Credential 和 credential.ai。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=rIAhlRaGYbQ)

## 一句話

功能測試過了，不代表 code 是對的。Agent 會安靜地塞進 race condition、長期才爆的效能問題，以及狀態組合爆炸。他們主張先寫下必須永遠為真的 invariant，再叫 agent 照著寫、照著查。範圍可以是任何 repo、這個專案，或某個功能；查到之後可以警告、讓 CI 失敗，或叫 agent 修。

## 測試抓不到的，才會在凌晨三點響

[0:09](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=9s) Jennifer 是 Credential 的 CEO 和共同創辦人。她做過大型、分散式、任務關鍵的 SaaS。之前在雲端資安新創 CloudLock 當 VP of product，賣給 Cisco，後來在 Everbridge 做產品策略，追蹤大型企業和政府的實體與數位威脅。Brandy 跟她一起從 CloudLock 進 Cisco，後來在 Toast 帶工程團隊，做的是食物外送，不是軟體交付。背景是架構、模式和驗證。

[1:31](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=91s) 這場少談產品 demo，多談他們為什麼做。QA 方法、工具、人力都丟下去之後，還是有一類問題會進 production：凌晨三點叫醒 on-call，最大的企業客戶在叫，工程團隊走上三週的 death march 去找根因。測試對的是特定 test case，漏掉真實場景裡的 edge case 和 concurrency。測試沒找到 bug，不表示沒有 bug。

[3:02](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=182s) 她說 coding agent 會把同一類問題安靜寫進去。功能測試全過，架構上的小問題還是進 production。三個月後才發現，當初的 code 已經忘了。投影片上有 bit.ly，連到示範用的 GitHub repo。他們說今天就能帶走一個做法，讓 agent 一開始就不要生成那種 code。

## 太難測、太貴、組合太多

[4:02](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=242s) 三類他們稱為 untestable。不是完全不能測，是不實際。

太難測的例子是 race condition。你得先想得出會發生哪些，再寫測試，還得剛好撞上那個時序。太貴的是效能。多數 performance 和 load testing 看的是短暫尖峰。很多特性只在長時間持續負載下出現。複製它要重複的基礎設施、production 等級的資料，以及能撐住那段負載的工具。太複雜的是 combinatorial state explosion。排列一多，測試的人力和成本就撐不住。

[6:28](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=388s) 第一個具體例子：兩個使用者同時買最後一件庫存，或碰到 soft failure。測試常是 flaky、間歇失敗，你分不清是測試壞了還是真的有問題。多執行緒測試難寫，模擬也得事先列完所有案例。

[7:45](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=465s) 第二個是 MongoDB。查詢不用 lean，回傳功能上是對的，但回來的是整份 Mongoose document，不是畫面要的 plain JS object。測試資料庫很小，記憶體影響看不出來，除非用 production 資料集，而那在企業規模往往貴到做不起來。

[8:42](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=522s) 第三個是商品在各個狀態下是否仍有效。加入購物車時，不能只看有沒有庫存。企業級、分散倉儲下，狀態可以是有貨、缺貨、停產、正在運往倉庫。還要乘上購物車狀態、產品生命週期，以及使用者做了什麼。乘開來超過 2500 種排列，不會有人寫 2500 個測試。他們的 design partner 讓使用者自建很複雜的 workflow，同樣無法測完每一種組合。

## 先寫永遠為真的事，再讓測試出場

[10:22](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=622s) 用 invariant 驗證的不只是 code 能不能跑，而是它正不正確。以前的順序是寫 code、寫測試、測試過、出貨。他們要的順序是：先想哪些事必須永遠為真，叫 agent 把那些事寫進 code，agent 再寫測試，你驗證那些事仍然為真，然後才跑測試、出貨。

[11:01](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=661s) 他們給的機制是 invariant verification taxonomy。Scope 有三種：任何 codebase 都該成立的、這個 codebase 專用的、某個 feature 專用的。第一種常常是工程師用經驗換來的 battle scars。類型他們當下分成 performance-based 和 logic based。違反之後怎麼辦：只發警告、讓 continuous integration 失敗，或叫 agent 修。

## 同一個購物車，三種查法

[12:08](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=728s) Brandy 先問誰還記得課堂上的 invariant。她說自己在大學演算法課用過，之後就淡了。現在跟 agent 一起工作，它們有用。示範是一個購物車，原始碼現場的人都能拿到。他們在 Claude Code 裡把 test coverage 生成到 100%，然後指出它還是不完美。

[13:02](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=782s) `reserve items`：找到商品、看數量、寫入保留、更新。出錯時只回傳 false，沒有把保留退回。兩條 thread 同時進來，`find one` 拿到同一個數量，然後一起寫。她說這是 AI 生成 code 裡很典型的模式。他們把這當成 global concern，任何專案的交易都該對。檔案是一份 invariant 說明，放進 source root 或 agent 會讀的目錄。結構是：這是什麼問題、為什麼重要、好的 code 長怎樣、壞的 code 長怎樣，以及怎麼驗證。交易這件事很重要，不能只叫同一個 agent 自己判斷有沒有違反。他們做了一個小 MCP server，叫做 transaction analyzer，用她稱為 hacky 的 regex 看交易，再把結果傳回去。Claude 會指出哪裡有、哪裡沒有，並問要不要修。之後生成 code 時，會在對的時機呼叫這個 MCP。

[15:43](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=943s) 太貴的那個例子，可能在 production 好好幾個月，直到 Black Friday 伺服器記憶體耗盡。他們自己用 Mongoose，agent 查詢寫得很好，卻常忘記讀取時加 `.lean()`。`.lean()` 會把多餘的東西剝掉。示範裡的 code 呼叫 `exec` 之後立刻 `toObject`，記憶體多跳一下。這條 invariant 放在 project scope，因為不是每個專案都有 Mongoose，不想弄髒 global context。嚴重性較低，所以只叫 Claude 做 code review，不另開伺服器。接著請它產生 `get items below price`，生成結果已經自動帶上 lean。

[17:36](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=1056s) 組合爆炸他們沒辦法在 demo 裡一次查完 2586 個狀態。要的是做完之後系統沒壞。`add item` 已經檢查商品是否正確、價格、數量不能是負的，大約四五項，但還沒查 reserved、還沒查倉庫在途。Invariant 是一道 backstop：不管中間做了什麼操作，庫存最後要處在一致狀態。做法是 pre-save 和 pre-update hooks，提交交易前跑驗證，不行就在 runtime 用清楚的訊息失敗。Postgres 可以用 database trigger，其他 persistence layer 有對應做法。這條只適用購物車模組裡的那組函式，不該鋪到購物車的其他部分。Claude 分析之後找到漏掉的地方，然後開始補 hooks。

[19:49](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=1189s) 三個例子是三種技術、三種 scope。還有很多別的查法。他們說這套結構在自己的工作上夠有效。

## 這週先做三件，這一季做成 library

[20:06](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=1206s) 當天是星期三。這週的作業是：在你正在做的 feature 或 module 上，挑三件你希望 agent 別再做、或開始做的事。下載範例，用模板。裡面有一份 AGENTS.md，丟進去就能讓 agent 開始用。看改之前和改之後。

[21:01](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=1261s) 這個月把驗證做進 codebase：哪些要擋在 CI/CD，哪些不准 merge。可以用 agent 把檢查放進 git，也可以落成組織裡的其他流程。這一季開始建 invariant library，放進設計流程，讓 agent 一邊做一邊寫 invariant，當成 spec-driven development 的一部分。

[21:56](https://www.youtube.com/watch?v=rIAhlRaGYbQ&t=1316s) Jennifer 收尾：今天給的是現在就能用的做法。Credential 在做的方案要找出這一類問題，以及其他 functional、logic、memory safety 的 bug，而且不必先 deploy、測試、執行你的 code。網站是 credential.ai，上面有 waitlist。
