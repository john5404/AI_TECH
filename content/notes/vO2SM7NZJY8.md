# Maximising LLM Accuracy with Search and AI | Samuel Messing and Slack

片長 5 分 54 秒，自動英文字幕。Samuel Messing 在講搜尋和 AI 怎麼一起用。他後來自稱是 VP of engineering。LLM 有一處被聽成 the LM。

- 原片：[YouTube](https://www.youtube.com/watch?v=vO2SM7NZJY8)

## 一句話

Context engineering 比只改 prompt 認真。對使用者來說，回來的是搜尋還是 AI 不重要，重要的是信不信。搜尋的天花板是你得自己讀一大堆文字。AI 的天花板是有些工作要的是每一則，不是一份摘要。Slack 把兩者接在一起，例如 AI explain。

## 什麼時候該綜合，什麼時候該全列

[0:00](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=0s) 新的流行語是 context engineering，而不是 prompt engineering。他們內部會問這件事算搜尋還是算 AI。他常回的是：還有差嗎？重點是認真想送進 LLM 的東西，而不只是 LLM 要做什麼，準確度才出得來。

[0:38](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=38s) 主持人說自己當使用者不在乎是搜尋還是 AI，只要信任結果。他問邊界在哪：搜尋的天花板、AI 明顯更好的地方，以及反過來搜尋仍然更強的地方。

[1:24](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=84s) 他舉一家大報。他們接 Associated Press 的 wire，本質是 RSS：每則新標題加上大約一百字，幫記者感覺世界在發生什麼。若把它當搜尋，問「保加利亞發生什麼」，會看到一大堆文字，自己讀很累。搜尋在追相關性，不是把事情沿時間整理好。他們的 AI search answers 會把原始搜尋結果綜合成人讀得懂的文字，並附引用，讓你回到那些訊息，但先有一個「到底在發生什麼」的感覺。

[2:42](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=162s) 反過來，有些職位必須回應每一則進來的訊息，要知道每一件發生了什麼。依時間把搜尋結果排好就很有用。使用者要的是把搜尋存起來、反覆回到同一個搜尋來分流。LLM 的綜合不是他們要的。他們要每一則。Coverage 或 recall 更重要。

## AI explain

[3:31](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=211s) 主持人說很多開發工具也是創意和準確度混在一起：有的用 AI，同時又看另一層來確認 code flow 實際在做什麼。他問是不是不該二選一。Samuel 說他們本來就想兩種技術一起用。

[4:13](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=253s) 他剛推出、自己很得意的功能叫 AI explain。可以對單一則訊息按一個動作，要它詳細解釋。他是 VP of engineering，處理 incident 時會被點名進頻道，工程師還在處理，他不想拖慢他們。訊息裡一堆縮寫，以前得問人，不是拖慢正在做的人，就是再拉更多人。現在用 AI explain 跟上他們在說什麼、縮寫是什麼、為什麼要緊，不必打斷任何人。這同時是搜尋和 AI：先搜出更多資訊和 context，再用 LLM 做綜合，也用模型已經有的較廣知識。

[5:36](https://www.youtube.com/watch?v=vO2SM7NZJY8&t=336s) 主持人說接下來會談 Slack 內部怎麼用 AI。這支片在這裡停。
