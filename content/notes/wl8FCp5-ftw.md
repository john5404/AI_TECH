# How New Libraries Saw a 50% Improvement | Maria Gorinova

Simon Maple 主持 AI Native Dev，來賓是 Tessl AI engineering team 的 member of technical staff Maria Gorinova。人在倫敦 Tessl 總部，面對面談。片長約 41 分鐘，英文自動字幕。字幕把 Tessl 聽成 Tesselo、Tessel、Tessa、Castle，把 Gorinova 聽成 Goranova，把 matryoshka 聽成 troshka，把 SWE-bench 聽成 squee bench。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=wl8FCp5-ftw)

## 一句話

AI 之前，程式是決定性的，給了輸入就知道輸出。Agent 是機率的，一次成功或失敗不能當結論。Gorinova 他們做的 eval 不問程式能不能跑，而問 agent 有沒有守住函式庫已經提供的抽象。Tessl registry 裡超過 10,000 個 tile，平均讓 abstraction adherence 高 35%；近三年的新函式庫高 50%。原始碼也幫得上，但更慢、回合更多。剩下的難題是：agent 什麼時候該去拿這份 context。

## 抽象一層層疊上去，agent 卻常從零開始

[1:33](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=93s) 開頭有一段 podcast 預告，說 90% 的聽眾還沒訂閱。正片裡 Simon 說她是 longtime listener、first-time caller。她在愛丁堡大學讀 data science 和 machine learning 的博士，然後進產業研究，先是 Twitter，那時候它還叫 Twitter。兩人玩笑說在心裡它還是 Twitter，她對現在的名字 no comment。之後幾家新創，再到 Tessl。她一直在意程式、邏輯，和機器學習、資料的交界。博士和更早的專案都在那塊。碰到 Tessl 時覺得他們真的在做一件事，而且跟自己的路程對得上。

[2:02](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=122s) 報告是四個人：她、Max、Rob、Drew。Max 幾週前上過這檔 podcast，Simon 說他從不睡覺。還有後續在做。組織裡喜歡 AI engineering 團隊挖這些研究，因為 LLM 不是決定性的，大家只有軼事。使用者一聽「LLM 做了這件事」就說自己也遇過。但痛有多深、能力在哪，得往下量。報告在 Tessl 的 AI 部落格，shownotes 會放連結。

[5:46](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=346s) 她覺得這份報告打到軟體工程的根本：abstraction。軟體像套娃，從最底的 machine code 往上疊愈來愈高的 API。她不相信這件事該因為 AI agent 而改變，也不認為它會變。Agent 當然可以每次從零生成，甚至生成 machine code。但每次重造、從不用已經在那裡的抽象，聽起來非常貴。她自己用 agent 寫 code 時最煩的是，它們常常全部自己實作，不用函式庫；就算叫它們用，也用不好，她得微管理。有時沒關係，你就是想從零生成。有時很有關係。函式庫被優化過，效能好，省成本和時間。Simon 補了一句，它們也被更多人用過，比較可信任，外人對行為有預期。她同意。而且現在仍是跟 agent 協作的階段，人還是想看懂那些 code，至少到某個程度能一起工作。

[8:11](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=491s) 想讓 agent 把函式庫用好，第一步是量它用得好不好。就他們所知，幾乎沒有現成 benchmark 碰這件事。寫 code 的 benchmark 多半是功能正確：用測試看程式行為，像 SWE-bench。字幕還聽出一個 tea bench，沒有再解釋。那很有用，能說明 code 能跑，但漏掉函式庫的可重用。所以他們做了一個評估框架，產生的資料專門看 agent 有多遵守某個函式庫的抽象。Simon 說多數情況不是從零做綠地專案。組織裡是想把日常做快。開發者 95% 的時間在自己的 codebase 裡做小修、新功能。Agent 不是自己決定用哪些函式庫，而是必須用應用裡已經在用的那些。人不想突然看到它用自己的方式重造，然後問：我們不是已經 import 了這些嗎。

## 一次例子是軼事，eval 量的是有多常做對

[10:28](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=628s) Simon 說跟 AI engineering 的人聊天，五到十分鐘內一定會聽到 eval，他們大概一天說一千次，作夢也在想。她說 AI 裡一切是機率的。以前的程式是決定性的，給了輸入就知道輸出，可以測、可以預期。機器學習不是。拿一個孤立的成功或失敗做判斷很危險。你會據此決定產品、功能，或只是日常 workflow，而那只是軼事，不能代表平均，也不能代表母體。Eval 是在很多例子、一個母體上做，才能對 model、agent 或工具做統計判斷。重點不只是對不對，而是它有多常做對。她說永遠別說永遠，但統計上它不會在任何事情上 100% 正確。若在某個資料集上做成 100%，你很可能過擬合，沒有泛化到那個評估集之外。

[12:55](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=775s) 分數受很多東西影響。底層 model 能不能做那項任務是一件。Prompt、你給的 context，以及其他東西，是在提高成功機會。

[13:29](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=809s) 這份報告的資料集是一對一對的：一個寫 code 的問題，加上評分標準。問題不是憑空來的。字幕把 thin air 聽成 TeenAger。他們拿一個現有的開源函式庫，用 agent 分析它，再依真實 API 產生問題和評分標準。任務性質是：人，或 agent，能不能有效、正確地用這個函式庫。不是 agent 習慣的那種 leetcode，從零實作 breadth-first search。比較像：你有 Pydantic 這個 Python 函式庫，用它生成某種帶驗證的 class。要評估一個方法，就叫它解那題，再用另一個 agent 當評審，依先前生成的標準打分。標準全是 API 怎麼被用。Simon 說測試有兩層：這是題目，這是我期待的。也許必須用這個函式庫、這個方法、傳這些資訊、看到某種結果。LLM 仍可以在寫法上發揮，但要打中那幾件正確用法。

[15:56](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=956s) 失敗長什麼樣。Simon 猜的是幻覺出不存在的 API，常常是拿錯版本。她說版本問題確實會發生。Pydantic 就是例子，第二版和第一版差很多，LLM 常搞混。更根本的是新的、或私人的函式庫，不在預訓練資料裡，沒有既有知識。突然叫它用，它什麼都不知道。若只是 LLM，就會幻覺。若是 agent，也許上網搜、讀文件。那很貴、很長，而且函式庫若文件不好，它可能找不到。冷門的、社群小的、背後是學術社群的，會被忽略。私人函式庫更不用說，既沒有既有知識，你也可能拿不到多少關於它們的知識。聽眾不會覺得新鮮，只是不是每次都發生。

## Context 分成能去拿的知識，和要塞進去的行為

[17:53](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1073s) 怎麼讓 LLM 更可預期，讓 eval 更高。她說當然是 context。Tessl 推出 Tessl Registry，超過 10,000 個他們叫的 tile。Simon 說兩人之間知道舊名字，聽眾也許不知道，他看她差點說出來，還是沒說。Tile 是一份 context 的集合。這超過 10,000 個是關於不同函式庫、以及那些函式庫的不同版本，全部有版本。把專案裡正在用的函式庫的 tile 給 agent，abstraction adherence 會更好。也就是用某個函式庫時，更可能正確使用那些特定 API。

[19:41](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1181s) Simon 把 tile 想成 context 的套件，像 npm 套件或 Java 套件是原始碼的一組。他說 context 有三種，今天主要談文件。三種是 documentation、rules，第三種 commands 比較是以後的事。文件描述開源套件、也可以是私人套件的最佳用法。Rules 描述你要 agent 怎麼行為，是在把流程或方向舵過去。

[21:08](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1268s) 她的分法是：文件是知識，是事實，不是行為。Agent 可以在不知道怎麼用函式庫時伸手去拿、問一個問題、去找。Rules 是行為，是在駕駛。Agent 不太知道該怎麼「伸手去拿行為指示」。那比較像已經被寫進它裡面，或已經被要求要做。沒有數學公式能把兩者切開，她是用「它問這個有沒有意義」來分。Simon 從份量看：文件是大的知識庫，不會整包推進 context；規則應該短得多，留在 context 裡沒問題。她說不只是預期。其他實驗裡他們觀察到，steering 的 context 愈長、你愈想叫它用很多方式行為，它就愈不會遵守其中任何一條。Simon 拿小孩比喻。LLM 像小孩，或是他的小孩像 LLM。知識是給它們在對的時間自己決定要用。規則是你始終期待它們遵守的。

## 守住抽象，意思是用那一行，而不是自己重寫

[23:29](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1409s) Abstraction adherence 就是 agent 有沒有遵守函式庫或私人專案給出的抽象，還是自己實作。部落格裡有一個機器學習社群會懂的例子：PyTorch 的 attention。某個版本之後，她記得大概是 2.0，不很確定，PyTorch 有一行就能做的 attention。若問的 LLM 是在那之前訓練的，它會從零寫 attention。若給它使用 torch 的 context，它會用那一行。那行實作是優化過的，快很多，有論文這樣寫。他們要的就是這個：用了預定的抽象，還是從零做。

## 三種跑法：什麼都不給、把原始碼放進去、用 registry

[25:22](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1522s) Baseline 是原味的 agent，Claude Code 或 Cursor，讓它自己做。沒有限制，可以搜網、可以讀 code，但沒有明確叫它做這些。Simon 問哪一個比較好。她說不能講，去看部落格。部落格很好。

[26:15](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1575s) 在他們的做法之前，還有一種：明確叫 agent 去讀套件的原始碼。專案裡放一個有原始碼的資料夾，告訴它可以讀原始碼來核對實作。他們想放進這個情境，因為這像是沒有蒸餾、沒有特別策展的 tile。原始碼本身就是 context，只是膨脹得很厲害，體積巨大，不是為了給 agent 讀而優化的。也不是永遠拿得到。Simon 來自 Java，編譯之後 agent 讀 bytecode 比讀 GitHub 上的原始碼難得多。她說這也會取決於語言和框架。

[27:53](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1673s) 第三種是 Tessl registry，裡面是描述開源套件的 context。Simon 把三種收成：baseline 基本上是訓練資料；原始碼全部攤在面前，agent 自己判斷；registry 是策展過的 context。

[28:22](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1702s) 用 Tessl tile，abstraction adherence 平均高 35%。近三年釋出的新函式庫更高，改善 50%。Simon 把它說成：多了 50% 的可能，會用開源函式庫裡他們設下的、也是開發者或 agent 該用的那種方式，去解給定的問題。她說實驗裡還有很多東西，叫大家看部落格。例如原始碼那個設定表現也不錯，但慢很多，回合更多。資訊在，只是沒為使用優化，很亂。Agent 得去搜、一直抓，很多回合，就慢下來。這裡的 turn 是 agent 自己的回合，不是跟使用者一來一往，是它為了到達而走的步驟。步驟多，token 就更貴。Simon 問 context 會不會也被撐爆，還是多半在 sub-agent 裡做。她說問得好。Claude Code 尤其大量用 sub-agent，所以他們不一定觀察到那種情況。但她預期，複雜專案會更糟。他們的任務很小，若抽象用對，不算特別複雜。若是要實作一整個功能，agent 得手動發現的東西多很多，問題會更多。

## 新的、舊的、冷門的，tile 把線拉平

[31:09](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1869s) 較新的函式庫或較新的版本問題更多，Tessl 在那裡也比較成功。比較不可能在訓練資料裡，外面的例子也少。Simon 問非常老的 legacy。很多聽眾有不敢碰的舊系統，agent 很適合進來讀懂，但能不能信任它去改。她說 baseline 在相對舊、以及非常新的套件上都比較差。圖長那樣。她覺得合理：訓練資料大概集中在相對新、用得比較多的函式庫，但不是最新的那些，因為最新的資訊比較少。用 Tessl tile 時這條線相對穩定，不太取決於函式庫多舊或多新，而且每一段都高於 baseline。

[33:02](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=1982s) 熱門函式庫在開源 repo 裡例子極多，會進訓練資料。Agent 也許把版本搞錯一點，但有機會接近。冷門的呢。直覺和資料一致：agent 對冷門函式庫有負向偏差。冷門用 GitHub 上的 fork 數來判。Fork 少的，baseline 更差。Tile 那邊有很大的提升。再用 tile 時，冷門和熱門在 abstraction adherence 上差不多同一個水準。

[34:55](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=2095s) 報告裡有一個她說很亮眼的案例，LangGraph，是另一位作者 Rob 做的深度案例，特別看新功能，也就是他們知道是在訓練截止之後才加進去的功能。她記得截止大約是今年一月，模型字幕聽成 solid 4.5，她叫大家去對部落格。那些功能不在預訓練資料裡。LangGraph 是好例子，因為釋出頻繁、變化看得到。不是所有函式庫都這樣。用 LangGraph 的 tile 時，agent 在那些新功能上好了 90%。她覺得合理，因為現在把 context 給了它們，容易很多。Simon 說這也很酷，只是把事情變簡單。

## 還沒修好的是：它知不知道該伸手

[36:52](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=2212s) 是不是一切都修好了。她覺得最大的剩餘問題，是讓 agent 正確使用這份 context，也就是 steering。它怎麼知道什麼時候該去拿、什麼時候不該。她一再看到 steering 很難。它也很難評估，而開頭就說了，要改善就得先能量。難的地方是，他們受訓練模型的人擺布，受大實驗室擺布。那是 agent 行為的最大因素：它怎麼知道下一步，後訓練放了什麼資料才讓它這樣行為。他們在 Tessl 很忙著能控制的部分，但這是硬問題，也很有趣。

[38:47](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=2327s) 想試的人去網站上看 Tessl registry。公開函式庫誰都可以裝了就用。它是一個 MCP server，加到 agent 上，agent 透過 MCP 讓 Tessl 安裝 context、搜尋 context，再提供 steering，讓 agent 在請求裡用上它。也可以用 CLI。從產出的那一側，你也可以做自己的 context。私人函式庫，或你的開源函式庫不在那 10,000 個 tile 裡，可以寫一份像 markdown 的 spec 當 context，發到私人 registry，甚至要求把它放進全球 registry 公開。消費者和想幫別人使用自己函式庫的人，兩邊都能做。

[40:09](https://www.youtube.com/watch?v=wl8FCp5-ftw&t=2409s) Simon 謝謝她，也謝謝 Rob、Max、Drew。他說自己總愛聊 eval，這不會是最後一次。部落格在 Tessl，字幕最後聽成 Castle。Shownotes 也會提到。
