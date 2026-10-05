# Amit Kushwaha - Benchmarking the Agent Era: Measuring Performance Beyond the LLM - AI Native DevCon

Amit Kushwaha 的舞台演講，片長 30 分 39 秒，英文手寫字幕。他是 NVIDIA 的 principal solutions architect，在 Deep Learning Solutions 部門。主持人請他上台後把時間交給他。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=guhTp2Q8VX0)

## 一句話

昨天的 benchmark 量的是單輪 chatbot，量不到 coding agent 真正在做的事。一則使用者訊息可以變成 20 到 40 次 tool call，context 一路堆上去，GPU 和 CPU 交替空轉。Amit 說要讓這種工作負載跑得動，prefix caching、KV cache-aware routing 和 speculative decoding 已經是基本功；要把它量對，得看分布、把工具時間算進去，並等 cache 暖機之後的穩態，而不是只報平均。

## 一次修 flaky test，就是一整條軌跡

[0:22](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=22s) 他說他們在意的是能呈現真實工作負載的 benchmark，而這些 benchmark 在過去大約一年半裡一直在變。起點是簡單 chatbot，現在是 agent。接下來他說約 30 分鐘講三件事：agent 工作負載長什麼樣子、已經有哪些最佳化讓它跑得有效率、現有 benchmark 漏了什麼。最後給一個試著補上缺口的例子，以及還沒蓋到的部分。

[1:46](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=106s) 左邊是他說的舊 chatbot：多數對話是單輪，問一句、回一句。Context 很小，1K 到 4K tokens，輸出也短，沒有工具。Agent 工作負載則有幾十次 tool call，LLM 被叫很多次。Context 從數萬炸到數十萬。輸出從數百個 token 增到數千。多數工作負載用不同工具來完成任務。他說投影片上昨天的分數，說明不了現在真實存在的工作負載。

[3:12](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=192s) 例子是使用者請 LLM 修 codebase 裡一個 flaky test。LLM 回來說去看某個檔、抓某些東西。接著跑工具。工具可以是 Linux 終端上的任何東西：bash scripts、他口中的 graphs、web search。工具的結果作為新資訊餵回 LLM，LLM 再叫它看下一個檔。開頭只有一則使用者輸入，整條軌跡可以走 20 到 40 次，視複雜度而定。綠色是在 GPU 上跑的部分，紫色通常在 CPU 上。所以這是 GPU 和 CPU 一起解的問題。一則使用者訊息可以引出 20 到 40 次 tool call。大部分 token 生在呼叫工具這一步：工具清單、叫很多檔、讀很多檔、再餵回去，所以多數 token 是輸入。輸出很小，因為 LLM 多半只是給短指令：叫哪個工具、怎麼叫。這和舊時代看到的輸出不一樣。整場主要談 coding agent；別種 agent 的工作負載可能不同。

## 快取、把回合送到同一份副本、以及用小模型起草

[5:32](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=332s) 這些最佳化已經在生產系統裡，而且要讓這份工作負載成立，它們很關鍵。第一輪是使用者輸入和一次輸出。到第二輪，整段都可以 cache。對多數 agent 工作負載，caching 非常重要，因為你在往上堆。到第 40 輪時 context 已經很多，但不必把舊工作重做。輸入若 cache 得對，只需要處理這條流程裡新的 token。第 40 輪結束時，大部分是 cached，不用再算。新的部分才是 GPU 真正要做的。沒開 cache，工作量會大很多，也會打到效能和 time to first token 這類指標。所以在這些工作負載裡，caching 幾乎是必備。到後面，絕大多數輸入 token 都可以 cache，因為它們只是疊在前一輪上。

[7:06](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=426s) 模型用多份 replica 服務時，caching 還不是全部。回合必須落到持有那份 cache 的 replica。若第一輪落在某一份 replica，round robin 可能把下一輪送到別份，而那份沒有剛才的 cache。他稱為 KV cache-aware routing：第一輪在 replica one，就讓第二輪也在 replica one。做法可以是記住 session，同一份請求回到同一份 replica；也可以做更乾淨的 cache-aware 安排。KV 就是 K 和 V 矩陣。在 LLM 裡，這是你存放已經發生過的歷史的方式。

[8:48](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=528s) 前兩項都在 prefill，也就是輸入進來的那一側。第三項在 decoder，也就是模型開始吐輸出的時候。大語言模型有兩段工作：吃進輸入，以及開始產生輸出。Prefix caching 處理輸入側。輸出側要讓它盡量快，speculative decoding 就變得很常見。想法是：小的 draft model 幫大模型加速。輸入進去之後，小模型快得多，先吐出幾個 token。他舉的例子是 “Brown fox soft over”。大模型的工作只是驗證這些 token，而且一次請求就能驗完。小模型先預測四個 token，大模型一次檢查這四個。最後是一次就產出三個 token。沒有這一步，大模型得一個一個生。粗略可以想成大約三倍速度。味道有好幾種。一種是用大模型的資料去訓練 draft model。愈來愈多的情況是 draft token 跟著模型本身一起來，他稱為 multi-token prediction，也說了 MDPs。於是你可以把它打開，不必再做很多事。他先說三個 token 一次通過，並預告有一個但書。

## 固定形狀的 benchmark 量不到 agent

[11:32](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=692s) 他談這三項，是因為它們是 agent 工作負載的基礎最佳化。現有 benchmark 抓不住他剛講的複雜度。多數用固定形狀：你若做過 benchmark，想回答「這份工作負載要多少」，通常會把輸入和輸出長度定成固定值，形狀不動。他口中的 cell 和 our cell，就是這種固定長度。沒有 tool call。左邊就是現況：固定輸入輸出、沒有工具、剛才那些最佳化大多關掉、單輪、沒有多輪。這和 agent 工作負載在實務上看到的完全不同。軌跡會隨著你和系統互動、從工具收集資訊而變長，固定形狀會錯過那張圖。原本那套也沒有多輪。Prefix caching、KV routing、speculative decoding 大多關閉，也沒有工具。現在量到的效能，不代表真實工作負載。

[13:22](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=802s) 談 agent 的效能時，連怎麼說話都變得棘手。不能只談平均和中位數，要談分布。他給兩張直方圖。左邊是 time to first token，多快從 LLM 拿回 token；右邊是 token 速度，模型多快在生 token。做法是把工作負載打到硬體上，抓住打向 LLM 的所有請求，收集每次的 time to first token，再做成圖。TTFT 那張，左好右壞：左邊回應很快，右邊 token 愈等愈久。速度那張相反，左壞右好：左邊生得慢，右邊生得更多。使用者體驗死在尾端。就算很多請求坐在好的那一區，使用者一旦碰到那條尾巴，體驗就傷了。所以要把 P95 剪到一個跟客戶體驗相配的範圍。Agent 工作負載不能停在 mean 和 median，要談 P95、P25。他提醒統計：P95 是 95% 的請求，time to first token 好過這個值。P25 是 75% 的請求速度比那個值快。

[15:45](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=945s) 下一張他說跟不上可以略過，但仍要提。同一張速度分布，綠色打開 speculative decoding，也就是一次生三個 token、不必一個一個等。分布往右，速度整體高很多。藍色沒開，慢很多。若看錯指標，結論會倒過來。他說若看 P5，也就是他口中「95% 的請求產生輸出快過這個值」，綠色在這裡看起來更差、藍色更好，這不是全貌。你在懲罰一個其實很好的最佳化，只因為多數請求坐在右邊，而你選了錯的百分位。他補一句：對某些人，P5 也許就是他們不想妥協的標準。他們自己的情況是不該看 P5，該看 P25，否則會把 speculative decoding 的一種產物不必要地罰下去。重點是百分位和 SLO 要再挖一層：各種最佳化把分布變成什麼，以及你要怎麼對上客戶期待。這比 chatbot 式的工作負載更要鑽進資料。

## 工具讓 GPU 空著，暖機前的數字會說謊

[18:14](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1094s) 色塊的每一列是一位使用者，user one 到 user four。若忽略工具，你量的就不是對的工作負載。左邊假設沒有 tool call，也沒有那些在 CPU 上跑的紫色區塊。於是四位使用者把 GPU 塞滿。那整條是 LLM 被呼叫的時候。真實情況不是這樣。你不會一直讓 GPU 忙著。跑完 LLM 就去跑 CPU 上的 tool call，那段時間 GPU 沒在做事。空檔有多大，會改變你能支援的人數，因為你並沒有把 GPU 塞到極限。忽略工具，就會預測出錯的並行度、錯的硬體承載。他給一個數字：假設一次呼叫花一秒，tool call 也花一秒，你能支援的使用者可以是你以為的兩倍，因為一大塊負載在 CPU 上。中間有一句字幕沒聽清。重點是 agent 工作負載裡，那些在 CPU 上跑的灰色區域很重要，它決定一份 worker 能撐幾位使用者。

[20:32](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1232s) 最後一塊缺口比較細。指標要時間才會穩定。Cache 還沒暖、系統還在暫態時，time to first token 和速度仍在變。若你在那一點量到 TTFT 的 SLO 是 10 秒，會說這次部署失敗、太慢，其實不是。它還在他說的 ground state，還沒穩。Agent 流程把 cache 和更高階的最佳化帶進來，它們需要時間。看你在意的指標時，要確認它已經穩定。把指標對時間畫出來，看尾巴是否變平，是一種做法。速度也一樣。若把還沒穩的線當成 SLO，你會說部署很差；讓系統穩下來，它可能是完全符合這兩條 SLO 的部署。

## 一個還沒公布結果的 benchmark，以及問答

[22:16](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1336s) 他舉 Artificial Analysis 這個第三方。他們幾週前提出這個 benchmark，結果還沒出來，再過幾週才看得到各家硬體的表現。它打開了他談的多數東西：多租戶裡的 KV cache-aware routing、speculative decoding、以及剛才的 SLO 設定。目前兩個模型，字幕記成 deep before 和 GPT-OSS 120，名單還會變長。他們想回答的是：給定幾檔 SLO，例如 token 要多快生出來、time to first token 是多少，一份硬體最多能撐幾位使用者。資料集是他們整理的多租戶軌跡、真實世界資料。也會有每美元一類的指標。他說這會開始補上缺口，並更靠近多數生產應用的真實 agent 工作負載。

[24:12](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1452s) 收束時他重講：多租戶軌跡、caching 和 routing、speculative decoding、用 SLO 而不是 mean 和 median 想效能、工具、以及不要在暫態裡量還沒穩定的數字。他說這仍是開頭，是 agent 工作負載的基本功。還沒有的很多，這個領域還會變好。他現在講的是單一軌跡、一個 agent 和工具互動。多個 agent 互相作用時怎麼量。品質他也跳過了：agent 有多好、多快能解完一件事。他主要談效能，但兩者要放在一起：模型跑多快，以及它把任務解得多好。Session 會愈來愈長，agent 可以跑兩天、三天，cache 一直長，記憶體得有辦法管。這次全是 coding。別種 agent 呢。CPU 怎麼真正參與，他只談到延遲那一層；接下來 GPU 和 CPU 得一起把事情做有效率。指標也可以改談 task completion time。好的指標長什麼樣子，還有很多工作。一句話：今天的 benchmark 追上了 chatbot 時代，agent 世界的 benchmark 還在建，才剛開始。Artificial Analysis 的 agent benchmark 在試著補上。

[26:44](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1604s) 有人問 speculative decoding 能不能用在非零 temperature，還是 benchmark 都假設伺服器上的使用者用零 temperature。他說非零也可以。對方不想像模型怎麼驗證一個從選項裡隨機挑出來的東西。他說兩邊的分布仍然對得上。就算是 speculative decoding，你仍是從一個分布抽樣，不是隨便抓一個。分布若還匹配，你仍有較高機率預測 target 會生出什麼。

[28:04](https://www.youtube.com/watch?v=guhTp2Q8VX0&t=1684s) 另一題問那兩張直方圖是不是同一條工作流程、同一批請求，還是整套 agent 請求。他說開頭那個修測試只是一條軌跡的例子。他們收集了成百上千條，打到硬體上才得到這些數字。對方覺得較難的問題本來就該有更長的 time to first token。他說這就是 caching 的位置：若大部分 prefill 已 cache，time to first token 要做的只是新的那一塊。Cache 關掉，你得對整段輸入算，TTFT 會差很多。有人確認：這裡的 time to first token 是其中一個綠色區塊、也就是一次請求，不是最後答案出現的那一刻。他同意。若某次 tool call 回了很長的內容、模型得慢慢嚼，你會預期那裡有一個很高的峰，因為問題更難。他說正是如此，所以 prefix caching 是優化這些流程的基本功。可惜多數 agent benchmark 抓不到這一點。時間到了，他願意會後再答，主持人請大家去找他。
