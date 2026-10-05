# The Cost Nobody Budgets for When Building With AI Agents

片長 5 分 19 秒，自動英文字幕。對談裡有人叫 Guy。字幕把模型名聽成 Opus 4/6。

- 原片：[YouTube](https://www.youtube.com/watch?v=TFz0spBvAq4)

## 一句話

Agentic development 的難處是非確定、知識過期、偏好重寫而不重用，以及先便宜後變貴。他們手上的鎚子是 context。用好它要先把想要的行為寫下來，再像監控伺服器一樣評估它。

## 問題

[0:00](https://www.youtube.com/watch?v=TFz0spBvAq4&t=0s) 新典範是 agentic development。主要挑戰是 non-deterministic。LLM 和 agent 的知識至少比最後一次訓練舊幾個月。它們偏向重寫，不重用，因為做軟體比以前便宜。然後是先便宜後貴：人的力氣少很多、做得快很多，但開始用之後成本會疊。他舉的例子是頂層模型的 fast mode，速度大約 2.5 倍、成本 6 倍。

## Context 是鎚子

[0:56](https://www.youtube.com/watch?v=TFz0spBvAq4&t=56s) LLM 最後是無狀態機器，你把一批 context 送進去，它算權重、決定下一個詞。管進去的字，就是主要工具。對人來說，管團隊的工具是溝通：你回應什麼、怎麼回應，用來激勵行為。

[1:18](https://www.youtube.com/watch?v=TFz0spBvAq4&t=78s) Context 有好幾種。Rules 是你明確、用力推進去的。Skills 是暗示、讓 agent 可以拉下來的。Docs 是放在那裡、等 agent 自己去找的。以後還會有別的方式把 agent 導向對的 context。

## 先寫下來，再評估

[2:03](https://www.youtube.com/watch?v=TFz0spBvAq4&t=123s) 迴圈的第一步是定義並寫下你要 agent 做什麼。這常常很難。生日禮物的類比是：別人問你要什麼，你會說「你應該知道」，但清單還是有用。團隊更難，因為意見和偏好不一致，得先談完再寫下來。

[3:03](https://www.youtube.com/watch?v=TFz0spBvAq4&t=183s) 正確行為有很多層：某個產品某個畫面，或全公司的做法、生態系的 best practices。可以用 agent 和 LLM 幫忙寫，再由人修。這些文件要人審、要確認是對的。叫 specs 或 docs 都行。

[3:33](https://www.youtube.com/watch?v=TFz0spBvAq4&t=213s) 寫完要評估好不好用。二十頁又重複又打比方，會比一組精簡條列難懂。這跟對人一樣，但實際更複雜：不同模型對溝通格式的理解不同，有的指令更吃 code examples，有的更吃鬆一點的說法。所以要建立 evaluate 的能力。

[4:36](https://www.youtube.com/watch?v=TFz0spBvAq4&t=276s) 他覺得最好的類比是監控執行中的系統。最接近非確定系統的是伺服器：要裝儀器、要觀察。DevOps 教過這件事。Agentic development 也要能評估某件事多常成功，才能監控、試、看頻率。
