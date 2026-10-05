# Introducing Tessl: Keep Your AI Agents on Rails

片長 2 分 8 秒，自動英文字幕。產品介紹。字幕把 Tessl 聽成 Tesla，把 spec-driven 聽成 specd-driven 或 specdriven，把 agentic coding 聽成 agent decoding。

- 原片：[YouTube](https://www.youtube.com/watch?v=TRXnQT96RZM)

## 一句話

Agent 會急著寫 code、做錯的東西、還沒做完就宣布成功、幻覺 API，而且加一個功能打壞三個。Tessl 用 spec-driven development 把意圖先寫進 spec，用測試讓 agent 自己迭代，再用超過 10,000 份 usage specs 減少函式庫幻覺。Beta。

## Framework

[0:00](https://www.youtube.com/watch?v=TRXnQT96RZM&t=0s) 用 agent 的代價是無止盡的 review，以及事後才修。Framework 接上你的 agent，逼它在寫 code 之前先在 spec 裡定義產品功能。每份 spec 帶測試，用來確認 code 符合需求，agent 可以一直迭代到對為止。

[0:51](https://www.youtube.com/watch?v=TRXnQT96RZM&t=51s) Spec 不一定會拖慢你。可以先審 spec，確認意圖被抓住；也可以 vibe spec，讓 agent 從 spec 流到 code，只有出錯才看 spec。兩種做法裡，specs 都留在 codebase，當產品該做什麼的長期 memory。Agent 較能在這上面演進產品，測試用來保證不打壞已經能動的部分。

## Registry

[1:21](https://www.youtube.com/watch?v=TRXnQT96RZM&t=81s) Spec registry 幫 agent 用好 open source。超過 10,000 份熱門函式庫的 usage specs，用來擋 API 幻覺和版本搞混。它們像軟體模組一樣被打包、給版本。你也可以把自己的 custom context 發上去。

[1:40](https://www.youtube.com/watch?v=TRXnQT96RZM&t=100s) 兩者合在一起，是讓 agent 知道你要它做什麼、怎麼做。他說這能用很少的額外力氣讓 agent 變好，並把它們推進專業 codebase。Framework 和 registry 都在 beta。
