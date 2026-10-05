# Modernizing Systems Observability with AI and LLMs with Jason Hand

片長 33 分 12 秒，英文自動字幕。Jason Hand，Datadog 的 senior developer advocate，平常講 SRE、DevOps，這場講 AI。問答由 Deion 主持。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Sonnet 聽成 Sonic；下文用 Sonnet。投影片和連結他說放在一個 GitHub repo，字幕沒有把網址念出來。

- 原片：[YouTube](https://www.youtube.com/watch?v=LcsGFQr7vqU)

## 一句話

系統產生的資料已經大到人看不完，答案卻在裡面。Jason 不逐家比較觀測廠商。他用 Gartner 的 magic quadrant 把市面上的 AI 功能收成大約十二項，再收成三個他覺得最常見的趨勢：incident management、預測，以及用自然語言問系統。Datadog 自己的例子是 Watchdog、RUM，和今年宣布、用一兆個資料點訓練的時間序列模型 Toto。他最後把這些都拉回同一件事：沒有好資料，這些能力都沒有著力點。LLM 擅長寫事件摘要，不擅長在沒有 RAG 時長篇創作。

## 全球的資料，和你平台上的資料

[1:21](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=81s) 他先做一個思想實驗：全球每年產生多少資料。大約從 2010 年起，每年的量穩定上升。讓他意外的是，世界上大約 90% 的資料是過去兩年產生的。從 2010 年算起大約 14 年，規模從約 2 ZB 升到 2024 年的 150 ZB 上下，他說是略高於或略低於 150。Petabyte 是 100 萬 GB，exabyte 是 1,000 個 petabyte，ZB 是 1,000 個 exabyte。他引用前面 Deion 的說法：大家在資料裡游泳，而且沒有變慢的跡象。到 2025 年，全球資料生成預計再增加大約 150%，可能超過 180 ZB。他引的一句話是，其中很多是連線使用者整天數位互動產生的即時資料。

[3:17](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=197s) 另一張圖是每一分鐘。大約 2.41 億封 email，觀眾看超過 43 年的串流內容。WhatsApp 大約 4,160 萬則訊息，他先說 a day，又改口是每一分鐘。Taylor Swift 的歌被串流 69,000 次，他說 per day，又說 per minute。平均每人產生約 102 megabytes。重點不是每一個數字都驚人，而是資料已經大到這個程度，而開發者、維運、甚至業務的很多問題，答案在這些資料裡。弄懂這麼大的量，是今天的目標。

[4:27](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=267s) 他知道聽眾會說那不是我的資料。從 observability 看，你要的是平台產生的：自己的伺服器、別人的伺服器、雲上的基礎設施和服務、使用者的互動，以及出事時生出來的資料。TechStrong 的研究說，受訪公司大約 63% 計畫在未來兩年投資 observability，大約 21% 說會是顯著投資。另一份 AI-augmented DevOps 調查裡，大約 46% 的受訪者所在組織計畫在未來一年用 AI 加強 DevOps 團隊，只有大約 20% 完全沒有計畫。

[6:09](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=369s) 他把採用方式分成兩桶，也可以看成四塊：development 和 testing，以及 operations 和 monitoring。預期好處包括生產力、縮小 skills gap、軟體品質、降低營運成本。他強調很多還很早，是預期，不是都已實現；也有團隊實驗一陣子，調查裡看得到生產力上升。調查連結在投影片底部。生產力再拆，一塊是寫 code：GitHub Copilot、ChatGPT、Claude、Sonnet。幫你寫得比較好、除錯、缺陷少一點、自動做 code review、寫得比較快、也比較懂結構。他自己這一年不太寫大量 code，需要寫的時候這些工具明顯幫上忙，而且他寫的還不是 production。另一塊是測試和品質：測試效率、測試腳本、自動化 QA，以及行銷材料裡常說的、在進 production 之前偵測、自動修復、甚至預測缺陷。

## 十二項能力，收成三個趨勢

[10:12](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=612s) 只看 observability，不看整個 DevOps，他要看的是這個領域的 leaders 和 visionaries。這兩個詞直接來自 Gartner 最近一份 observability platform 的 magic quadrant。他不逐家講產品，而是把畫出來的那些廠商在做的事收成十二項。Anomaly detection 很多工具早就有，Datadog 的 Watchdog 屬這一類：從 log 和進來的資料裡找人容易錯過的異常模式。Root cause analysis 這個詞他不喜歡，但懂那個過程；AI 版是幫你把底層問題和相關的東西接起來，讓事件比較快被理解和解決。Predictive analytics 是預報可能的威脅或系統問題，讓 incident management 主動一點。Natural language query 是用說話問系統，他覺得這加快了很多人從系統裡拿資訊的速度，而那正是 observability 的核心。另外還有：把相關事件分組、評估問題對業務的影響（Datadog 的 RUM 也用 AI 看這件事）、用 machine learning 做 log parsing 來找安全漏洞、AI 看 log 裡的 pattern、把事件聚在一起解釋它們代表什麼、用行為評估來提高可靠性並希望減少 downtime、虛擬 agent 從助理變成會自己去做的 proactive agent，以及在事情變糟之前先通知對的人。

[15:53](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=953s) 這十二項若再收，他看到最普遍的三個趨勢是 incident management、預測，以及 query intelligence。用自然語言跟系統說話，是為了更安全地在資料和系統裡移動。

[17:02](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1022s) 事件這一側，自動化 RCA 要把解決時間從幾小時或許多分鐘，壓到幾秒或幾分鐘。它可以排出最可能和事件相關的系統部分，讓你看見下游影響和那些關係。Intelligent classification 依預先定好的標準自動分類，再從過去的事件迭代，把類別改細。和人不同的地方，是它可以依實際衝擊或緊急程度做他說的 unbiased prioritization。即時自動化則處理常見事件：生成和優化解決腳本，執行 containment 和 mitigation，把人會先做的前幾步自動做掉。人到場時，角色已經不一樣。進階分析和報告是在 on-call 工程師進到聊天頻道時，已經有一份到目前為止的事件摘要。多起事件可以即時對上，也可以試著預告未來的事件。他特別喜歡的是 post-incident review：把 socio-technical system 裡的技術面和人的那一面放在一起，加快學習。

[20:07](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1207s) 預測這一側，是在事情變成嚴重問題之前看見異常。提早偵測也可以降低中斷的成本。效能上，即時看應用指標，或看 latency 和 throughput 的模式，找出可能的退化。安全和合規上，主動找漏洞和威脅、找可能代表資料外洩的異常，甚至在不該出現的地方自動偵測並遮住 PII。成本和效率上，縮短解決時間、在處理前用智慧過濾和抽樣把資料量壓下來，以及把例行監控自動化，減少人工。

[21:45](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1305s) 自然語言這一側，是不必再懂複雜的查詢語言和語法。個人化是系統預測你的下一步，依你的行為調整介面，他拿到的畫面可以和下一個人不同。Smart assistance 給的是跟當下有關的建議：某種錯誤或中斷該怎麼做，以及例行修復的自動化。他以前常講 ChatOps，覺得現在繞回來了：在聊天裡用普通話執行系統上的指令，對 observability 特別有用。多步驟的流程也可以自動化，讓多個服務和應用協調得比較好。

## 一兆個點訓練出來的預測，仍然靠資料

[23:54](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1434s) 他特別點 Datadog 的一張投影片，因為現在的廠商通常不是只有一項 AI 功能。他們今年稍早宣布 Toto，自己開發的時間序列預測 foundation model，用一兆個資料點訓練，專門為 observability 優化。基準測試裡，它在一般預測任務和 observability 指標上都優於既有模型，並在多個資料集上達到他說可以稱為 state of the art 的 zero-shot。他覺得在這個領域聽到 zero-shot，總是很驚人。

[25:00](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1500s) 他再看一輪各家的主要能力，然後把話收回來：這些 AI 和 LLM 功能最後都是資料。不管你被哪一項吸引，都是在管理開頭講的那種巨大資料量，從裡面找出對使用者有價值的答案。

[25:55](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1555s) 三個 takeaway。第一，廠商在做的很多是資料分析：自動理解資料、立刻偵測異常，讓監控更有效率。第二，generative AI 和 LLM 在複雜資料裡找人找不到的隱藏模式。第三，它們減少人工排查，讓人和系統的互動更直覺，可靠性和整體體驗跟著上去，observability 的做法也比較現代。資源和投影片在那個 GitHub repo，也可以掃 QR code。

## 問答：驚喜被他收成幻覺，寫太長就會迷路

[27:47](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1667s) Deion 問的是客戶有沒有被 LLM 嚇到的 aha：它找出人沒想到的東西，那種說不上來的感覺。Jason 把它收成 hallucination。這些工具是黑箱，不可預測，同樣的輸入不一定同樣的輸出，而且要看應用。Datadog 有 LLM observability，用來辨認進來和出去的幻覺，再做 pattern matching：這種輸入和預期輸出對不上，就看得出來。能力是廠商在提供的，抓幻覺、持續追蹤也是他們的事。但若你的服務裡有 AI 或 LLM 在回答使用者，怎麼看住輸出、確認答案是對的，對很多人仍是很大的挑戰。包括 Datadog 在內，有些廠商有工具幫忙弄懂。字幕裡沒有一個具體的客戶 aha 故事。

[30:05](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1805s) 下一題是 LLM 在 observability 裡哪裡不會很好。他的實驗裡，它們擅長文案，事件後的回顧和事件摘要也給了很多有用的資料。若讓它們寫太多，就會絆倒。摘要逐字稿這類事情它們很強。若要它們有創意地生出東西，又沒有一套扎實的 RAG 可以去抽資料，只靠預先建好的模型，就沒那麼好。所以要限制它為你創造的量，或至少分成比較小的塊。否則它想寫很大一篇，就會在情節裡迷路。這是他到目前的經驗。

[31:31](https://www.youtube.com/watch?v=LcsGFQr7vqU&t=1891s) Deion 說 Sonnet 3.5 寫 code 有一種合他胃口的 vibe check，問觀測這類任務是不是也有某些模型特別適合。Jason 說自己的實驗裡還沒分出來。他沒有把每家廠商的工具都試過，只能講 Datadog 裡的東西，以及 Sonnet、Claude、ChatGPT。他沒有最愛。ChatGPT 早期對他很好，最近比較沒那麼有價值。Google Vertex 和 Gemini 他做過一些有意思、也成功的事。他目前沒有「哪一個適合哪一種任務」的心智模型，而且最近才開始認真想這件事，因為現在不是只有幾個模型。每家都有很多個。光是弄懂 ChatGPT 每一個模型的使用情境，就已經比以前更大。
