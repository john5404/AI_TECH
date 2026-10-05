# Why Most Observability Platforms Won't Survive the AI Era

片長 12 分 28 秒，自動英文字幕。講的是 Dash0，字幕聽成 Dash Zero。中間有幾段沒被摘到。OpenTelemetry 有時被聽成 Open Telemetry。

- 原片：[YouTube](https://www.youtube.com/watch?v=hsiF0OXN0_U)

## 一句話

很多廠商說支援 OpenTelemetry，意思只是你可以把那種資料送給他們，他們再轉成自己的內部格式。他說大約九成仍是這樣。他們做的是資料一直保持 OpenTelemetry，因為模型預設就懂這個格式，於是能像對 code 一樣對它工作。公司一開始推的不是 AI-native，是 OpenTelemetry-native。那後來變成做 AI 的好基礎。

## 格式若是專有的，模型就得先翻譯

[0:00](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=0s) 若你在跑 AWS Lambda 或任何托管服務，想提供那個服務的 telemetry，怎麼做？要嘛用二十種格式，例如 Datadog、New Relic、Dash0。要嘛用一個大家都懂的標準格式。OpenTelemetry 是第一個把這個格式標準化的做法，於是你沒有專有資料。很多廠商說支援 OpenTelemetry，意思是你可以送 OpenTelemetry 資料給他們。他們收下，轉成內部格式。

[0:30](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=30s) 他們做的是資料一直是 OpenTelemetry。因為所有模型預設就懂這個格式，所以真的能用它工作，類似它們對 code 能做的事。

[0:55](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=55s) Dash0 是他今天在做、在經營的 AI-native observability 平台。開始時他們不推 AI-native。一開始是 OpenTelemetry-native。那後來剛好是做 AI 的好基礎。想法是 observability 有一個新標準，把 telemetry 的格式標準化：logs、metrics、traces、終端使用者事件，也標準化標記系統。

[3:22](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=202s) 他再講一次同一個選擇：二十種格式，或一個大家都懂的標準。他會說，你仍可以把 OpenTelemetry 資料送給那些廠商，但大約 90% 的廠商還是把資料轉成內部格式。

[6:11](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=371s) 中間有一句是在理解 context，例如 HTTP status code 404 是什麼。前後沒被摘到。

[8:27](https://www.youtube.com/watch?v=hsiF0OXN0_U&t=507s) 他覺得是兩個分開的問題。一個是你有一條 trace，裡面有問題，例如一個錯誤的 fan。若你把那條 trace 丟進 Claude，他覺得它一定會給出什麼。句子在這裡被剪掉。
