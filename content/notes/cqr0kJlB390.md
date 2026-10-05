# What Actually Matters More Than Chasing The Best Models

片長 3 分 31 秒，自動英文字幕。對談。字幕沒有把名字念清。

- 原片：[YouTube](https://www.youtube.com/watch?v=cqr0kJlB390)

## 一句話

最新的 GPT 和 Opus 4.6 能力大概差不多。從 Opus 換到 Haiku 才會明顯感覺到差。更要緊的是 ergonomics、context，以及 agent 能不能看見自己做错了。Non-determinism 會養出迷信。Prompt 的措辭和 persona，他覺得沒那麼重要。

## 模型以外的東西

[0:00](https://www.youtube.com/watch?v=cqr0kJlB390&t=0s) 大家擔心哪個 agent 最好。最新 GPT 和 Opus 4.6 大概等價。換成 Haiku 就會注意到差別。他覺得更重要的是工效：有沒有讓你用自己的方式工作、不必一直顧著 agent 的功能，支不支援 skills，UX 是不是你要的。Productivity 比 correctness 重要，因為 correctness 你控制不了多少，模型訓練得好不好是那一邊的事。Frontier labs 正在互相追。

[0:59](https://www.youtube.com/watch?v=cqr0kJlB390&t=59s) 另一個人補：你怎麼問、怎麼給需求也有差，因為模型啟動 skills 和 context 的方式不同。所以「誰從哪個模型得到最多」會吵不完，可能只是誰的問法和那個 agent 合。

[1:22](https://www.youtube.com/watch?v=cqr0kJlB390&t=82s) Agentic coding 的 non-determinism 是迷信的溫床。以他和共事過的數百個開發者，prompt engineering 好像沒那麼重要。比較重要的是 context management，以及需求怎麼溝通。措辭、給 persona，他沒看到太大差別，雖然人很吃這一套。要緊的是把 context 框好、資訊在、agent 能察覺自己做錯，以及需求本身是否連貫。

## 三個建議

[2:19](https://www.youtube.com/watch?v=cqr0kJlB390&t=139s) 一，先用起來。二，弄懂 context management。三，perception：讓 agent 能看見發生了什麼，才修得了。

[2:35](https://www.youtube.com/watch?v=cqr0kJlB390&t=155s) 工具都差不多，先選一個，不要等它變成定論。Context 底下在做什麼並不明顯。經常清聊天、保持在題目上，不要給模型混亂的藉口，也不要把整個廚房水槽倒進 `AGENTS.md`。Perception 的例子是：agent 在 CI 裡把東西弄壞，你就不能怪它，除非它看得到 CI。加一個 MCP，讓它能查最新的 build。
