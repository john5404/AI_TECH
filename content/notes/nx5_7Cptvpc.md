# The Population Test Your Agent Must Pass | Maria Gorinova

片長 5 分 22 秒，自動英文字幕。Maria Gorinova 在講他們放出的一份報告怎麼做 eval。Pydantic 被聽成 pantic、pyantic、paidantic。LeetCode 被聽成 lead code。

- 原片：[YouTube](https://www.youtube.com/watch?v=nx5_7Cptvpc)

## 一句話

一個孤立例子只是軼事。產品和日常流程的決定要靠對一整群樣本的統計。他們的資料集是：真實 open-source library 的 API，配上一題 coding question 和一份評分標準，再用另一個 agent 當評審。失敗常出在版本搞混，以及訓練資料裡沒有的新函式庫或私人函式庫。

## 為什麼要看一整群

[0:00](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=0s) 以前的 code 是確定的，給輸入就知道輸出。現在不是。危險在於你會憑一個孤立例子決定產品、功能或日常流程。那只是 anecdote。所以 eval 要在一個 population 上統計做得好不好。

[0:33](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=33s) 分數受很多東西影響。底層模型能不能做那件事是其中一個。Prompt 和你給的 context 也會提高成功機會。

## 資料集怎麼來

[1:07](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=67s) 他們生成一份 evaluation data set。每一筆是一個 coding question，配一份評分標準。題目不是憑空來的。先拿一個現有的 open-source library，叫 agent 分析它，再依真實 API 出題，題目和評分標準一起生。任務性質是：人或 agent 能不能有效、正確地用這個函式庫。

[2:00](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=120s) 這不是 agent 常見的那種從零實作，例如 LeetCode 式的 binary search。比較像：這裡有 Pydantic，用它生成某種類、帶某種 validation。焦點是使用函式庫。

[2:32](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=152s) 評估一個方法時，先叫它解題，再另外用一個 agent as a judge，依事先生成的標準評解法。標準全是關於 API 怎麼被用。主持人把它收成兩層：這是挑戰，這是我期待的。解法仍可以有創意，但得打中幾件事，例如用這個函式庫、用某個方法、傳某些資訊、看得到某種結果。

## 失敗長什麼樣子

[3:23](https://www.youtube.com/watch?v=nx5_7Cptvpc&t=203s) 過了就是 pass。失敗裡，版本問題一定會發生。Pydantic 第二版和第一版差很多，LLM 常常搞混。更根本的是新的或私人的函式庫，預訓練資料裡沒有。純 LLM 會幻覺。Agent 可能去上網搜、讀文件，但又貴又長，而且文件不好的函式庫會找不到。小社群、學術社群背後的冷門函式庫容易被忽略。私人函式庫更沒有既有知識，也不一定碰得到多少資料。
