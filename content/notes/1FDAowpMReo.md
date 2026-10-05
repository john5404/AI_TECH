# Introducing Tessl Verifiers: Enforce AI Coding Standards in Every Change

片長 4 分鐘，自動英文字幕。Macy 訪問研究團隊的 Amy。字幕把 Tessl 聽成 Tessle 或 Tesla。片尾網址聽成 tesla.io/agent，不寫成連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=1FDAowpMReo)

## 一句話

Agent 寫得更快之後，審查端被 PR 淹沒。Verifier 坐在 code review 和 lint 中間：規則窄到一次 judge call 就能對一個檔案說有沒有遵守，所以可以每筆 commit 都在 CI 跑。他們跑幾萬次判斷，帳單大約等於一兩次 code review。

## 它補的是重複出現的同一句話

[0:10](https://www.youtube.com/watch?v=1FDAowpMReo&t=10s) Amy 說 agent 和人寫 code 都變快，審查端出問題。工程師要盯很多 PR，還要讓 agent 跟著他們在意的慣例、做出一致的使用者體驗。他們想要更多工具，來表達你對 code 的期望和想固定的 invariants。

[1:06](https://www.youtube.com/watch?v=1FDAowpMReo&t=66s) Verifier 在 code review 和 deterministic 的 lint 之間。還是需要一點判斷，但可以收成一條很清楚的規則，一次 judge call 看一個檔案就回答遵守了沒有。比較像 checklist，不是請 agent 去開放式調查。它跟 code review 並排很好用：審查裡 agent 或人會一直抓到同一類事，一直說「記得我上次講的那個細節」。他們不想靠 agent 每次都記得，想把那條規則寫死，而且每次都遵守。

## 規則長什麼樣子，以及怎麼開始

[1:58](https://www.youtube.com/watch?v=1FDAowpMReo&t=118s) 這些是 codebase 裡你希望守住的不變性，用 model as a judge 檢查。他們自己的例子：前端每次顯示錯誤，都要同時告訴使用者下一步能做什麼；所有使用者看得到的文字要用美式英文，不是英式。他們人在倫敦，這條對自己也很難。因為規則窄，每筆 commit 都跑得起。他們就是這樣做。幾萬次判斷的帳單，平常大約是一兩次 code review 的成本。

[2:59](https://www.youtube.com/watch?v=1FDAowpMReo&t=179s) 最簡單的開始是 CLI 裝好之後，跟 CLI 裡的 Tessl agent 說。可以開放式問怎麼設定 verifiers，也可以觸發現成的 loop。其中一個是：看我的 PR，告訴我能做什麼。它可能建議改 skill、加 linter，也可能建議 verifiers。片尾的網址字幕沒有聽清，另外也可以從文件開始。
