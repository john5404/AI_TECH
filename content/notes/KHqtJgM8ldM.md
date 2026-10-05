# AI Driven Load Test Analysis: From Routine Toward Action with Andrii Raikov

Andrii Raikov（字幕聽成 Andre）是 Delivery Hero 的 principal engineer。片長 19 分 45 秒，英文自動字幕。主持人說自己以前在 Glovo，後來被 Delivery Hero 買下。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=KHqtJgM8ldM)

## 一句話

呼叫 model 只要三行程式，難的是讓結論每天都讀得懂，也經得起改 prompt。Delivery Hero 把 load test 報告從人工截圖、Go template、if-else 門檻，推到把 reliability manifesto、production 與測試資料、以及輸出格式拆開餵給 AI。補上 CPU 和 memory 之後 context 先爆掉；把數字裁過、講清楚每個 pod 的消耗，它才指出負載不均，值得去查 load balancer。

## 人工報告撐不住每週一次

[1:01](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=61s) Delivery Hero 一天送超過 1,000 萬張訂單，70 多個國家，全天候。2020 年疫情讓量指數成長，當時還沒準備好，出過很多跟無法擴展有關的 incident。大約五年前 CTO 公開了一份 reliability manifesto，其中一條是 we design for failure，load testing 是裡面的機制之一。

[2:06](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=126s) 當時的目標是相對 production 快速拉到 3 倍，或在較長時間拉到 4 倍，跑得更頻繁，用接近真實的操作模式，而且在 production 測。Latency 和 error rate 要低於門檻才算過。他說這張投影片已經舊了，現在的要求不一樣。

[2:57](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=177s) 五年前完全手工：一份 12 頁的 Google Doc，20 到 30 張截圖，來源是 Datadog、Grafana、CloudWatch 和 AWS，而且只對應一個服務的一次 load test。以前兩週一次，現在應該每週一次。他的雲端硬碟裡有 26 個服務，人手寫不下去。

## Template 只會算倍率

[3:51](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=231s) 他們用 Go 做 templating。Placeholder 可以塞既有資料，例如測試日期，也可以去查資料源。例子是查 Grafana Cloud，找出 production 負載最高的國家，再抽出 throughput、對上 load test、算出數字，文件裡也能畫圖。

[4:45](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=285s) 報告裡最重要的是結論。直到一兩個月前，結論就是把 load test 和 production 的數字相除，得到 multiplier；error rate 也是算出來再講低於 2%。結果還要回報給 CTO、director、vice president。評分方式是跟某個數字比大小。他說這很笨，但有用；五年前算傑作，技術往前走，他們決定用 AI。

## 三行程式，prompt 要拆成三段

[5:59](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=359s) 他說用 AI 很容易，實作幾乎就是三行程式。這三行不會變魔術。要先寫一大段 prompt。同一個 prompt 多跑幾次，結果也不一樣；不同 model、不同次執行會分叉，而且過一段時間會變差。他們每次都開新的 thread，把資料丟進去請它做 evaluation。用了一兩週，輸出會劇烈改變，prompt 得一直改。

[7:46](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=466s) 限制是 context window，不能把全部東西丟進去。還有 hallucination。Model 很愛講：你只要一個數字，它會把數字包在好幾段裡。

[8:29](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=509s) 他們把 prompt 拆成三段。第一段是定義和需求，也就是現在叫 engineering manifesto 裡關於 load testing 的部分：期望的 multiplier、error rate 和 latency 門檻、執行頻率。他舉的例子是一分鐘內快速拉到 2 倍。第二段是資料，分成 production 和 load test。Production 用來對照，算出應有的 multiplier；endpoint metadata 用來判斷測試像不像真實流量，而不是對 health endpoint 打一百萬次。Load test 則給 memory、CPU、latency、error rate、throughput，以及這次打了哪些 endpoint。第三段規定回應格式。他說這一段最敏感，改一個字，結果會整個不一樣。

[11:58](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=718s) 投影片上的格式是簡化版，不是他們真正在用的。例如時間戳是 unix epoch，model 會把那些數字印得到處都是，所以要求改成 UTC、人讀得懂的格式。他最在意的一句是：先寫數字，再寫解釋。每天要讀很多份報告的人，想在固定位置看到 multiplier、error rate、latency。還要求 throughput、異常、測試品質，以及有的話給建議。

[13:23](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=803s) 範例回應仍然很囉嗦，但內容他覺得很好：講了 ramp up、是否對上 manifesto。Error rate 很小，低於預期。Throughput 沒達到 multiplier。Manifesto 沒寫 latency 該是多少，model 說低於大約 500 milliseconds 應該可以。結尾說它給不出 CPU 和 memory 的建議，因為那次沒提供這兩項。

## 補上 CPU 之後先壞掉，裁過資料才有用

[14:54](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=894s) 他們補上 memory 和 CPU，結果把輸出弄壞。每次改 prompt，都要預期意外。Load test 的點非常多。上面那個例子只代表 150 個 pod（字幕聽成 ports）。真實 multiplier 負載時，字幕聽成 “it's,500”，對照 150，比較像 1,500，確切數字這段沒聽清。全部塞進去是幾十萬個數字。他認為碰到 context window 之後，model 開始亂抓。

[16:08](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=968s) 他們把 prompt 結構收好，砍掉一部分資料，並講清楚實際 CPU、每個 pod 大概多少。之後建議變得有用：能看出 CPU 的 outlier（字幕聽成 laners），其中一條是某些 pod 接到的負載比預期多，也許是 load balancer 的問題。他說這件事是真的，值得去查。

[16:58](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=1018s) 結論回到那三行程式：會把要求講清楚，AI 是日常有用的工具；不會講，它就幫不上。

[18:16](https://www.youtube.com/watch?v=KHqtJgM8ldM&t=1096s) 現場有人問 structured output 有沒有幫助。他說第三段就是在要求結構化輸出，有時有用、有時沒有。每次 load test 的時間範圍和結果都不一樣，model 的解讀也跟著變。他相信之後可以把這件事釘下來。
