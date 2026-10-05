# Agentic workflow powered by Dagger with Kambui Nurse

講者是 Kambui Nurse（主持人叫他 Kim）。人在 Atlanta，出生於 Trinidad，在 New York 長大。片長約 24 分鐘，英文自動字幕。現場是 live demo，有一段首頁改動沒在畫面上對上。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=sQpTCatsb7M)

## 一句話

Cover AI 用 Dagger 把產生 unit test 的迴圈關在 container 裡：coverage 低的檔先做，測試失敗就帶著錯誤再跑，過了才由另一個 agent 開 pull request 給人看。他拿自己用 Lovable 長出來的網站當例子。vibe coding 能把站做出來，但進階功能一壞就難查，而 Lovable 拒絕自己接上測試。

## 兩個 agent，外加可插拔的測試工具

[1:29](https://www.youtube.com/watch?v=sQpTCatsb7M&t=89s) 他先把一段 prompt 貼進 Lovable：為新 agent Cover AI 寫首頁介紹，語氣要 friendly、confident、lovable。給它的 context 只有一份 mermaid flowchart。Lovable 在跑的時候，他改講同事 Tyrese Dixon 寫的 README。Tyrese 在 New York，在他們這裡實習。

[4:02](https://www.youtube.com/watch?v=sQpTCatsb7M&t=242s) 前置是 Dagger。字幕把版號聽成 185，這裡不另補。Repo 要能跑測試並產生 coverage report，結果是 JSON。可以一次限一個檔。產生的測試要存到被測程式旁邊。`dagger call` 要帶 branch、GitHub token、要產生測試的 repository，以及一個字幕聽成 log fire 的 access token。模型走 OpenRouter，或改給 OpenAI API key。OpenRouter 是通往多個 provider、多個 model 的 gateway。

[6:25](https://www.youtube.com/watch?v=sQpTCatsb7M&t=385s) 內建 Jest 和 pytest，所以 JavaScript、TypeScript、Python 可以直接用。其他語言要自己做 plugin，實作四個函式：取出 code under test、拿 coverage HTML、拿 coverage reports、解析測試結果。Jest 有一份範例。

[7:22](https://www.youtube.com/watch?v=sQpTCatsb7M&t=442s) Workflow 有兩個 agent。Coverage agent 讀 coverage report、產生 unit test，在 container 裡跑。失敗就繼續，直到它判斷寫不出來，或成功。成功時回一個 code module，他說這是 structured response。Pull request agent 負責 commit、push。先看 PR 在不在，沒有就開，有就更新。

[8:34](https://www.youtube.com/watch?v=sQpTCatsb7M&t=514s) 整段從建立 container 裡的測試環境開始，取出 coverage，依百分比排序，先處理最少被測到的部分，再叫 agent 產生測試。成功的話，準備一個帶著測試的 PR container，開 PR 給人看，因為 agent 有時在做什麼並不清楚。失敗也開 PR，但多給失敗原因和留言，讓人有個起點。

## Lovable 做出網站，也留下看不懂的 codebase

[10:02](https://www.youtube.com/watch?v=sQpTCatsb7M&t=602s) 年初他決定圍繞 technical debt、測試和實務組公司。前一年他寫過 technical debt 的文章。他在意的是把障礙拿掉，讓開發者去 ship feature，而不是一直維護、被 bug 改掉一整天。

[10:55](https://www.youtube.com/watch?v=sQpTCatsb7M&t=655s) 他用 Lovable vibe coding 把 agency services 的網站做起來，然後自己把 Lovable 弄到出錯。他說兩人是 love-hate：它幫他起步，但以一句話把東西做出來時，你不知道它在建什麼。vibe coding 的副產品就是 technical debt。網站起來之後，再要進階功能，build 開始失敗。他的做法是跳上 Lovable 同一條 branch，跟它 pair。

[12:11](https://www.youtube.com/watch?v=sQpTCatsb7M&t=731s) Cover AI 已經在對那條 branch 送外部 commit、產生測試。Lovable 不喜歡，因為它不是為了產生測試、檢查自己而做的。他問過能不能接上 Jest，它拒絕，所以他自己接。大約五天前 Cover AI 開了一張 PR，在 Lovable 正在改網站的同一條 branch 上產生測試；他說這段大約四天前開始。

[14:05](https://www.youtube.com/watch?v=sQpTCatsb7M&t=845s) 一天結束時，他拿到一份自己不熟、壞了也很難 debug 的 codebase。兩個 agent 加上 coverage report 之後，測試用來確認 Lovable 做的東西確實能動，而且都是 unit test。要新功能之前，coverage 是 95%，只有一個檔在 78%。他說這種數字以前沒從 agent 拿到過。同類專案他至少重做過七次。

## 終端機上的數字，和沒出現的畫面

[15:49](https://www.youtube.com/watch?v=sQpTCatsb7M&t=949s) 終端機先看到 351 個 passing tests。他說這至少表示，向 Lovable 要的新功能之後，這 351 個案例還在。`git pull` 之後一度看到功能被改壞，menu bar 壞了；再跑一次又全部通過。他本來希望這場結束前把東西 launch 出去。`dev` 起來之後，畫面上沒看到那次首頁改動。他說 live demo 危險，先改講 agent 怎麼建。

## 用 trace 看它怎麼改到通過

[18:35](https://www.youtube.com/watch?v=sQpTCatsb7M&t=1115s) 他打開先前幾次 Dagger trace，說明自己怎麼走到後來口中的 551 個 passing tests。這個數字和剛才的 351 對不上，字幕沒有解釋。其中一次跑在 Mother's Day。`generate unit test` 會拉起三個 agent。Review agent 在開發過程中被拿掉，因為它沒有實際用途，只在燒 token。Log 裡還看得到，但沒有輸出。

[19:42](https://www.youtube.com/watch?v=sQpTCatsb7M&t=1182s) Cover AI agent 正在為 navigation menu 產生測試。Structured response 裡有 strategy：他說這讓人看見 model 打算怎麼把 coverage 拉高。然後是它要寫的程式。若在 container 裡一輪輪跑出錯誤，錯誤放在另一個欄位。

[20:42](https://www.youtube.com/watch?v=sQpTCatsb7M&t=1242s) Reporter 走 Jest plugin，抓 coverage HTML，container 裡會載入 `package.json` 看 dependencies。幾天前、他說是 11 號的那次，agent 第一件事就是生出測試，在 container 裡執行。測試失敗。他們輸出的是 JSON，reporter 再解析成讀得懂的錯誤。它繼續生、繼續跑，直到 coverage report 解析後沒有錯誤，才把通過的測試交給 pull request agent。

[22:20](https://www.youtube.com/watch?v=sQpTCatsb7M&t=1340s) PR agent 在 container 裡先看 git status，發現新檔，是產生出來的 navigation menu 測試。它 add，commit message 寫著 cover AI adds test for navigation menu to improve coverage from 0%。後面一句字幕沒聽清。主持人在這裡把時間收回，稱這段是 test-driven，也說 AI native development 的論點就是事情應該 test driven。Lovable 這類平台現在沒有這層，是該補的地方。Push 和開 PR 的後續沒有在這段字幕裡講完；前面 README 那段已經描述過那兩步。
