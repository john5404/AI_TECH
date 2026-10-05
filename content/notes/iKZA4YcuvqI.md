# Tessl Review: Turn Engineering Standards into Review Rubrics

片長 2 分 13 秒，自動英文字幕。產品示範。字幕把 Tessl 聽成 Tessel。說話的人是 Mark（product manager）和工程負責人 Gareth。

- 原片：[YouTube](https://www.youtube.com/watch?v=iKZA4YcuvqI)

## 一句話

自動化越多，越多決定是無人值守的 agent 做的。PR 沒達標時，常常追回一份寫得很差、把 agent 帶歪的 context 或 skill。Tessl Review 對一個 skill 評品質，也可以依組織標準自訂，並放進 CI 當門檻。

## 他們怎麼跑

[0:08](https://www.youtube.com/watch?v=iKZA4YcuvqI&t=8s) Gareth 說他們在自動化更多開發，於是有更多無人值守的決定，repo 裡也不斷加 context 和 skills 來引導，同時不能犧牲系統和產品品質。出問題時，常追到一份用詞差、令人困惑的 context 或 skill。他們一直在加 context，卻靠 vibes 相信它是好的。Mark 說客戶也是這樣講，所以做了 Tessl Review。

[0:49](https://www.youtube.com/watch?v=iKZA4YcuvqI&t=49s) 指一個 skill，它告訴你品質、以及能修什麼。指令是 review run 加上 skill 名字。Agent 會看內容、看格式和結構，再依 conciseness、ambiguity、clarity 等屬性評估內容和描述。這些可以改成組織要的標準。

[1:20](https://www.youtube.com/watch?v=iKZA4YcuvqI&t=80s) 可以放進 CI，拒絕沒過門檻的 skills。範例裡那個 skill 還不夠，用 review fix 讓 agent 看審查結果、改 skill、再跑一次，並告訴你改了什麼。放進 CI 就像 linter，不管誰寫的，skills 都有一定品質。自訂代表 codebase 不同地方可以有不同的「品質」定義。

[1:56](https://www.youtube.com/watch?v=iKZA4YcuvqI&t=116s) 開頭他說用 npm 安裝。字幕把套件名聽成 Tessel，不把沒聽清的套件字串寫死。裝完再用 review run。
