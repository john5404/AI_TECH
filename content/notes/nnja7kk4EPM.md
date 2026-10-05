# Uber Burned 6x Its AI Budget in Four Months

片長 10 分 18 秒，英文手寫字幕。剪輯。Nvidia 那段他把 cache 說成 cash，下面寫成 cache。他有一句「we live in the Defense Department」，不把它擴成一套國防部署。

- 原片：[YouTube](https://www.youtube.com/watch?v=nnja7kk4EPM)

## 一句話

Demo 裡通常不談你實際付了多少。Nvidia 的 Amit Kushwaha 說，agent 的工作付多少，取決於 context 有沒有被 cache，以及下一輪有沒有回到存著那份 cache 的同一台機器。另一個數字是：花在 AI 上的每 100 美元，大約 18 美元到達真的出貨的 code。Uber 從 2024 年起的這筆支出變成六倍。開放權重的模型，在你自己的硬體上，現在可以做大約 80% 的工作。

## 快取，以及要回到同一台機器

[0:00](https://www.youtube.com/watch?v=nnja7kk4EPM&t=0s) 六月倫敦有幾場談的是 demo 裡通常被留下的那部分。

[0:07](https://www.youtube.com/watch?v=nnja7kk4EPM&t=7s) Nvidia 的 principal solutions architect Amit Kushwaha。旁白說有兩件事決定你實際為 agent 的工作付多少：context 有沒有被 cache，以及請求有沒有回到握著那份 cache 的機器。他說自己是 solutions architect，並說 “we live in the Defense Department”。看那個工作負載，production 系統裡已經有一些最佳化，而且對讓那個工作負載跑起來很關鍵。

[0:43](https://www.youtube.com/watch?v=nnja7kk4EPM&t=43s) 第一輪是使用者輸入，第二輪得到輸出。對多數 agent 工作負載，caching 非常重要。他說你在做的是 pilot。到了第 40 輪，已經產生很多 context，但你不必把所有工作重做。例如第四輪結束時，大部分已經被 cache，不必再對它做工。

[2:18](https://www.youtube.com/watch?v=nnja7kk4EPM&t=138s) 若第一輪落在 replica 一，而一個模型可以服務很多次，重點是後面的輪次要落在存著 cache 的同一台 replica。

## 一百美元裡的十八美元，以及六倍的支出

[3:22](https://www.youtube.com/watch?v=nnja7kk4EPM&t=202s) 花在 AI 上的每 100 美元，大約 18 美元到達真的出貨的 code。這個數字他說大概三四天前才出來。Uber 從 2024 年起把這塊支出增加了六倍。有人在看超過 2,400 家公司怎麼用 AI，不是深潛。你可以看到，每 100 美元裡只有 18 美元進到真的交給使用者的有意義的 code。

[5:29](https://www.youtube.com/watch?v=nnja7kk4EPM&t=329s) 旁白說他的發現是：你自己硬體上的開放權重模型，現在處理大約 80% 的工作。後面有人說他們也有這種機器，GLM 5.1 這類開放權重模型現在可以做你需要做的大約 80%。然後你可以不被鎖在 OpenAI 和 Anthropic 的生態裡，真的很難的東西仍可以臨時打到 Claude Opus 4.8。

## 文章改了，skill 自己改，人只看大的

[7:58](https://www.youtube.com/watch?v=nnja7kk4EPM&t=478s) 知識庫文章一改，模型會重寫對應的 skill 並跑 evaluations。人只在大的那些被拉進來。很多人說 wiki 是文件去死的地方。他大致同意，因為人就是不維護文件。但他們有強的文化，文件沒有在死，反而更重要，用來把 agents 定住。他們看到很多人做的 agent 系統會盲目使用任何內容，或讓 agents 自己建 memory，然後 memory 跟內容漂移。出來給客戶的答案，和它說自己引用的文章完全對不上。大家就對整個系統失去信心。這是他們過去幾年在掙扎的問題。

[8:50](https://www.youtube.com/watch?v=nnja7kk4EPM&t=530s) 工程師做的系統是：文章一改，就像 GitHub Action 被觸發，進一條有 LLM 的管線。它看變更，判斷是小改、中等還是重大，然後自己改、更新 skill，再跑 evals。小改，例如錯字或用詞，而且 evals 過了，就不需要人這道門，自動發布。比較複雜、重大、或引入新主題，才需要更多品質控制，那時才把人放進來。人要嘛在很左邊，要嘛在很右邊。中間不該浪費時間看一份文字 diff。若工程師在審 skill 的文字 diff，以他的經驗是在浪費很多時間。可以讓模型做，但你得真的告訴它成功長什麼樣子，它才做得出好的 evaluation。

[10:00](https://www.youtube.com/watch?v=nnja7kk4EPM&t=600s) 片尾約十一月紐約的 AI DevCon，網站是 ainativedev.io。
