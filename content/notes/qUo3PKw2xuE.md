# Nathen Harvey- AI as an Amplifier: State of AI assisted Software Development | DevCon Fall 2025

Nathen Harvey 帶 Google Cloud 的 DORA，也是 developer advocate。片長約 27 分 32 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Antigravity 聽成 anti-gravity、把 Tessl 聽成 Tessle、把 Dave Farley 聽成 Dave Farlay、把 METR 聽成 meter，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=qUo3PKw2xuE)

## 一句話

AI 在軟體開發裡的主要角色是 amplifier。採用幾乎已經全面，但團隊表現差很多；沒有把組織系統補好，局部變快會消失在下游的混亂裡。DORA 的 2025 報告要問的不是有沒有用 AI，而是哪些條件會讓採用放大你在乎的結果，而不是放大不穩定。

## 報告在說放大器，不在說某一家工具

[1:00](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=60s) 他先帶過前一天剛推出的 Gemini 3，以及 Google 的 agentic IDE Antigravity：免費，可以用 Gemini 3 和其他模型。他是 Google 員工，但這場不講 Google 自家產品。DORA 看的是什麼條件讓高效的技術團隊活得好，計畫跑了超過十年。縮寫已經拿掉了：有人問 DORA 代表什麼，答案是什麼都不代表。新的說法是，怎麼幫團隊變得更會變好。技術變太快，持續改進、持續學習本身就是練習。

[3:20](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=200s) DORA 在 Google Cloud 裡，但研究不限於 Google Cloud，也不綁特定平台。2025 年將近 5,000 份問卷，再加上超過 100 小時的訪談。報告 142 頁，他建議丟進 NotebookLM 先摘要，再決定要深讀哪一段。

[4:48](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=288s) 若只留三張投影片：AI 的主要角色是 amplifier；AI 投資報酬最大的地方，是有策略地處理底下的組織系統；沒有這個基礎，AI 只會造出一塊塊局部生產力，常常消失在下游的混亂。廠商說快 30%。快在寫一個 function？對整個系統、對客戶重不重要，不一定。

[5:55](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=355s) 他在 Brooklyn，用 Mentimeter 問：什麼阻止你把 AI 寫的 code 直接 YOLO 進 production？現場答案包括什麼都沒有、security vulnerability、客戶、客戶風險、恐懼。他說每一個答案都值得團隊認真看。也許 context 不夠，也許該去問 Tessl 怎麼把 code 生得更好。

## 幾乎人人都用，信任卻停在 somewhat

[8:12](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=492s) 資料主要來自問卷，不是大家的 telemetry。問工作上有沒有用 AI，90% 說有，10% 說沒有。他覺得採用已經近乎全面，明年大概不必再問，就像問有沒有用電腦。在說自己有用的人裡，95% 至少在某件事上依賴它。受訪者不只有工程師，也可能是用它寫 spec 或設計文件的 product manager。

[9:14](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=554s) 最近一個工作天跟 AI 相處幾小時，中位數是 2 小時。有人填 12 小時，他點名現場的 Steve（字幕聽成 Yagi），並叫那種時數的人停下來。996 是一回事，還是該休息。既有研究裡，軟體工程師真正寫 code 的時間大約 11% 到 32%，30% 差不多就是一天兩小時，跟這個中位數很近。所以你大概是在寫 code 的時候用 AI。

[10:19](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=619s) 很大比例的人覺得更有生產力，也覺得 codebase 品質變好。有人覺得沒影響。大約只有 10% 說變差。他開玩笑：若 code 變差，大概是你用得不對，再 AI 用力一點就好。但信任對不上這個感覺。大約 30% 對 AI 輸出只信任一點點，或完全不信任。46% 是 somewhat。非常信任的 7%，完全不信任的 11%。他想跟這兩端喝咖啡，因為他覺得兩邊都錯，somewhat 才對：trust but verify。Code、要寄給主管的信、給下屬的 performance review，都不要直接送出。

[12:29](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=749s) 互動模式更早。61% 說自己從未用過 agentic mode。問卷是 2025 年 6 月中到 7 月中，當時大約 40% 曾經跟 agent 互動過。他覺得今天會更高，但個人、團隊、組織能吸收的改變有限。社群上 agentic AI 很熱，團隊還沒用也不必愧疚；已經在用的人，是活在多數同業前面。

## 採用拉高之後，不穩定也會上去

[13:33](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=813s) 他們把問卷收成各項能力與結果的分數。AI adoption 分數 7 是什麼意思，他說沒有意義，只是一個數。有意義的是模擬：若從 7 拉到 9，下游會怎樣。組織裡不要做「A 組可以用 AI、B 組不行」這種實驗，得不出站得住的資料。把研究當預測。

[15:01](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=901s) 拉高採用之後，個人效能明顯上升。軟體交付的不穩定也上升，這不是想要的，但數據就是這樣。組織表現、花在有價值工作上的時間、code quality、產品表現、交付吞吐量都上升。Burnout 和 friction 統計上幾乎是零。他覺得合理：你已經對工作犬儒、工作與生活分不開，新工具不會治 burnout。好消息是新工具也沒有把 burnout 推高。

[16:31](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=991s) DORA 長期的重心是軟體交付。大家知道的 four keys，過去兩年其實是五個，他承認自己算術不好。看的是 throughput 和 stability，多年下來兩者不是交換：要嘛又快又穩，要嘛又慢又不穩。他引 Dave Farley：你可以要更好的軟體而且更快，或是更差的軟體而且更慢。加上 agent 也不見得要換一套指標，這些仍然說明交付做得如何。

## 七種團隊，以及讓 AI 放大結果的條件

[17:46](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1066s) 今年他們把團隊表現、產品表現、個人效能、有價值工作的時間等放在一起看。約 5,000 人的樣本裡浮出七種團隊，從 foundational challenges、legacy bottleneck，到 harmonious high achievers。有的每項都好，有的不是。雷達圖他叫大家別硬讀，資訊太多，去下載報告。重點是：AI 採用近乎全面，團隊表現卻差很多。若全是採用造成的，這些團隊應該更像。所以不是。

[19:03](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1143s) 他們提出 DORA AI capabilities model：哪些條件會讓採用去放大你在乎的結果，例如團隊表現和產品表現。做得好的團隊傾向有七個條件。他口頭展開的是：組織裡對 AI 怎麼用，有清楚且已經講出去的立場，否則會帶來 friction、burnout、變慢；健康的資料生態，以及讓 AI 碰到內部資料，這就是 context engineering，政策、做法、團隊慣例都要進得去；扎實的 version control，AI 一邊寫就頻繁 check in，才知道它做了什麼，也才能回到上一個好的狀態；小批量，人比較會解小問題，今天的 AI agent 也是，未來會不會變他不知道；以使用者為中心；以及品質好的 internal platform。

[21:21](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1281s) 用法是從你要的結果往回看。假設一個 legacy bottleneck 團隊產品表現很差，上面又規定要用 AI，而且用起來也有趣。產品表現這條線往回，他點出三個該先補的條件：碰得到內部資料、小批量、清楚且已溝通的立場。人在哪一種團隊，這個模型都是用來把 AI 的效果拉滿。

## 把報告當假設，指標是為了改變做法

[22:45](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1365s) 研究看的是全世界，不是你的公司，也不是你手上那一個服務。把發現放回自己的情境，當成團隊下一個實驗的假設，不要照單全收。他也把人留在 AI native dev 社群，以及有數千位領導者、從業者和研究者的 DORA 社群。報告比這 20 多分鐘細，他當天都在，方法論可以當面問。

[24:23](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1463s) 有人問以前的 operational excellence 為什麼從 DORA 指標拿掉。他說營運表現他們仍在乎。過去把它不準確地叫成第五個指標。營運表現和軟體交付表現是兩件相關但不同的事，沒有刪掉，只是現在講得更清楚。

[24:54](https://www.youtube.com/watch?v=qUo3PKw2xuE&t=1494s) 另一問是相關和因果分不開，高層會說因為用了 AI 所以效率高了 x%，但其實夏天本來就會把東西交出去。他的回答是先有 baseline。很多人問 AI 能不能把生產力提高 30%，他先問你今天怎麼量生產力。若答不出來，那就可以說提高了 30%：指標可以隨便設，然後證明它漲了 30%。組織不可能只改一件事。看趨勢：去年夏天漲、今年夏天也漲，中間多了很多 AI，漲的速率有沒有不一樣。任何指標先問兩件事：要回答的問題是什麼；這個數變成兩倍或砍半時，行為要改什麼。指標存在的理由是打開對話，對話是為了改變工作方式。
