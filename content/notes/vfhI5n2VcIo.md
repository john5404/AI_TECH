# Fixing API Misuse: How Tessl Improves Agent Accuracy by up to 3.3x

片長 2 分 9 秒，英文手寫字幕。Guy 在解釋 registry 上的 evals。標題的 3.3 倍對得上他舉的一個例子：約 25% 到約 84%。

- 原片：[YouTube](https://www.youtube.com/watch?v=vfhI5n2VcIo)

## 一句話

Eval 是一個 coding scenario 加一張記分卡，用來比較有沒有某項改變。他們從支援的 10,000 個函式庫裡抽 300 多個，各做 10 個情境，用 Claude 跑完並把結果放上 tessl.io/registry。

## 數字和為什麼要公開

[0:00](https://www.youtube.com/watch?v=vfhI5n2VcIo&t=0s) 他說 Tessl 用 context 讓 agent 把 open-source libraries 用得更好，這件事大家知道很久了，新的是 evals。Eval 就是一個能證明 agent 做得到某個動作、某個 skill 或某個函式庫的情境，通常包含情境本身和判斷表現的 scorecard。可以有改變、沒改變各跑一次。

[0:25](https://www.youtube.com/watch?v=vfhI5n2VcIo&t=25s) 對使用者來說，就是從 10,000 個支援的函式庫抽了 300 多個樣本，用 agents 各做 10 個 coding scenarios 和 scorecards，再用 Claude 跑。他們支援不只一種。結果在 tessl.io/registry，可以看到大概能期待多少幫助。

[0:52](https://www.youtube.com/watch?v=vfhI5n2VcIo&t=52s) 三個理由。第一，他們得確認自己的 context 真的有價值，而且已經看到幫助。第二，有人說「這對 agent 有幫助」時，應該養成問「把資料給我看」、去要 evals 的習慣。第三，會跑、會塑形 evals，會變成開發者對自己的內容也需要的技能。

[1:20](https://www.youtube.com/watch?v=vfhI5n2VcIo&t=80s) 例子：PyPI 的 async standard library 大約從 25% 成功率到 84%。Webpack bundle analyzer 大約從 80% 到 99%。公開的是 agent 能不能把 API 用對的百分比。他們也看到 agent 常常更有效率，常常快一倍或用更少 tokens。這部分的資料他說很快會公布。
