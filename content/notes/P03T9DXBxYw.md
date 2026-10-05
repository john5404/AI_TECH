# NVIDIA, Docker & Hud on Agents in Production

片長 10 分 4 秒，英文手寫字幕。剪輯，不是一支連續演講。中間有幾段沒被摘到。有一句效能數字字幕不完整，下面不把它補成一個架構。

- 原片：[YouTube](https://www.youtube.com/watch?v=P03T9DXBxYw)

## 一句話

用 agent 寫 code 談得很多。凌晨三點還得有人把東西跑起來。公司裡每個人都透過 agent 出貨時，你需要的是 production 的 context，不只是事後的 root cause。沒人要看的 80 張 PR，和 Datadog、Sentry 裡 700 個你根本不會修的 issue 是同一種東西。給 agent 一段過夜的 trace，比丟一個無法重現的罕見 bug 有用。

## 二十四小時都在出貨

[0:00](https://www.youtube.com/watch?v=P03T9DXBxYw&t=0s) 六月倫敦很多時間在談用 agent 寫 code。但還是得有人在凌晨三點把東西跑起來。有些最有趣的故事在那裡。

[0:13](https://www.youtube.com/watch?v=P03T9DXBxYw&t=13s) 臨時組的一場是 Stéphane Jourdan、Simon Rohrer 和 Pini Reznik。問的是公司裡每個人都透過 agent、全天候出貨時，什麼會變。現在每個人都有 agents，每個人都在 production 裡做事。你怎麼知道這二十四小時的影響？它是持續的，你真的需要主動的 agents 和全部的 context。這個服務和那個服務是什麼關係？你怎麼知道它連到對的東西？名字曾經就是 IP。所以不只是 root cause analysis。是 production、多個帳號、所有那些知識的 context。他們說 DevOps 有點回到這個空間，因為 DevOps 的人有很多工具。那些資料和 context 就是現在的重點，包括讓 agents 二十四小時修這些事。

[2:21](https://www.youtube.com/watch?v=P03T9DXBxYw&t=141s) Agents 能有的知識，可以在 30 秒裡解決開發者要幾小時、甚至幾天才能完全弄懂的問題。只用在開發 context 裡的人，真的該看看這個。句子在這裡被剪掉。

## 沒人看的 PR，和最小的高影響變更

[3:36](https://www.youtube.com/watch?v=P03T9DXBxYw&t=216s) 他們不要沒有人會看的 pull requests。就算那 80 張 PR 存在，他們也不想去看。還沒到沒有人在乎的地步。開一張 pull request，有點像打開 Datadog 和 Sentry，裡面 700 個 issue 都在說：我修不了，所以連試都不會。

[5:14](https://www.youtube.com/watch?v=P03T9DXBxYw&t=314s) 他們在找最高影響、最低風險、做得完的變更，好去跟開發者或 PM 說：就是這麼小，而且會有大約 30% 的改善。

[7:25](https://www.youtube.com/watch?v=P03T9DXBxYw&t=445s) 有一些指標。假設一次呼叫要一秒。若一個 tool call 要一秒，後面那句字幕不完整，不把缺的名詞補上。聽得清的結論是：你能支援的使用者可以是你以為的兩倍，因為有一批工作負載是在 CPU 上做的。

## 過夜的 trace，比猜一個罕見 bug 有用

[7:47](https://www.youtube.com/watch?v=P03T9DXBxYw&t=467s) 有人覺得最有用的除錯投資，是讓 AI 幫他做一個 tracing framework。把一個沒有重現步驟的罕見 bug 交給 agent，它會猜。把一段過夜執行的 trace 交給它，它找得到東西。

[8:11](https://www.youtube.com/watch?v=P03T9DXBxYw&t=491s) 不必接到 production。任何能給它 trace、讓它拿來看的東西都非常有用。這個案例有一些 overhead，所以拿來做效能測試會有點誤導。但它告訴你大的效能缺口在哪。除錯非常有用：跑測試、讓測試套件找 race condition 或錯誤，把 trace 給它，說這是過夜跑出來的。它就能鎖住真正的問題，而不是猜。

[9:02](https://www.youtube.com/watch?v=P03T9DXBxYw&t=542s) 若你給 AI 一個 bug，卻不知道怎麼重現，而且很罕見，它會浪費很多時間。它可能自己也重現不出來，或猜一個解然後猜錯。若你給它 trace 和一些 trace 工具，讓它坐在那裡試著重現、看是不是同一件事，它通常做得到。所以不必接到 production。可以就是讓 AI 幫你做一些 tracing 工具。

[9:46](https://www.youtube.com/watch?v=P03T9DXBxYw&t=586s) 片尾約十一月紐約的 AI DevCon。
