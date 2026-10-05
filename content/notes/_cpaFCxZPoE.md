# Boosting Developer Productivity with Q Developer: Hands on Insights from James Ward

這是 AI Native Dev 的後續一集，主持人再次請回 James Ward，現場看 AWS 的 Q Developer。片長約 18 分鐘，英文自動字幕。James 說自己剛到 AWS，還在學這些工具，不是專家。片頭把 Tessl 聽成 Tesler。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=_cpaFCxZPoE)

## 一句話

Q Developer 是接在 IDE、AWS console 和 command line 上的 AI assistant。James 在 IntelliJ 裡覺得有用的，不是它替他打出腦子裡已經有的 code，而是解釋看不懂的區塊、在陌生 API 上接著問，以及幫測試這種不想花太多時間的工作起頭。他用的是免費版，價值最大的時候是走進自己不熟的領域。

## IDE、console、CLI，不只 AWS API

[0:33](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=33s) 這一集要看的工具是 Q Developer。James 的理解是：它是 AI assistant，有 IDE plugin，他知道 IntelliJ 和 VS Code，不確定還有沒有別的 IDE。在 AWS console 裡也可以開一個 Q，問「列出我的 EC2 instances」這類問題。另外還有 command line 版本。主持人說自己聽過，當你已經在用 AWS services、對著 AWS API 寫 code 時，它特別好用，那些整合被調得比較細。

[2:01](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=121s) James 為一場 Kotlin Conf talk 問過「AWS SDK for Kotlin 要怎麼做」，答案還不錯。他不知道訓練是不是比較偏 AWS。他也問 regex、問 pickle configuration language，所以它也有一般知識。主持人補一句：可以當 general purpose 的開發工具用。

## 解釋程式、寫測試、多行補完

畫面是 IntelliJ IDEA 裡的 Java。[2:48](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=168s) 這個專案正好踩在他不懂的地方：用 Java 的 Loom、structured task scope 做 structured concurrency。Q Developer 幫過其中一些部分。只聽音檔的人看不到畫面，主持人說完整過程在 YouTube 上。

[3:56](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=236s) 第一個他覺得真的比較有生產力的用法是 explain code。有時連自己寫的 code 也看不懂，Rust 和 Python 這種他不熟的語言更常這樣。他會框一段，叫它解釋。這段用了 forks 和 join，摘要說它在做 race：對同一個 URL 發兩個並行的 HTTP request，回傳第一個成功完成的 response。他覺得它能從程式看出這個目標。也可以接著問，或把 error message 丟進去叫它解釋。主持人說這對 code review 也有用：大段程式不必逐行看，先抓大意再找關鍵處。他自己兩個月前寫的 code 就已經難讀。

右鍵還有 refactor fix、optimize code、send a prompt。refactor fix 他幾乎沒用。[6:32](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=392s) send a prompt 可以對那一塊說「write a test for this code」。他說上一集提過，自己通常不讓 LLM 寫測試。它給出一份 JUnit 5、Mockito 的測試（字幕把 Mockito 聽成 Makita）。他還沒跑過，不知道那段 code 是否真的能過。

[7:09](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=429s) 主持人把測試和文件放進開發者不想花太多時間的 tedium。他自己比較偏 TDD。James 說，還在迭代時，測試可以先補 boilerplate；更有價值的是既有功能先有測試，避免以後 regression。主持人補：人還是要選。一條他認為的 golden path，可能有數十萬甚至數百萬次經過，需要很穩，就框那幾段叫它幫忙寫測試。這仍是人和 assistant 一起做。

[9:04](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=544s) 另一個常見用法是直接生成一段 code，以及多行補完。他要開始寫第 11 個 scenario，寫到 scenario 10 底下，它就猜下一個是 scenario 11。若從 scenario one 後面打，提示變成 1A。主持人說，看懂你在哪、前面是什麼、後面是什麼，不是每個 assistant 都做得到。James 說自己接受這些提示的比例一般偏低，因為 code 常常已經在腦子裡。偶爾會嚇一跳，提示正好是他要寫的，boilerplate 時特別有用。他大量寫 Scala 和 Kotlin，boilerplate 不多，多行補完有時有價值，有時只是干擾。

## Slash command、整份專案，以及不熟的 API

[11:17](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=677s) Slash command 他用得不多。`/dev` 是跨多個檔案計畫並實作新功能，他還沒深入。transform 用來升級專案的 Java 版本，他聽別人用過、覺得有幫助。新的 `@workspace`（字幕說 at workspace）應該讓他問整份專案，例如 summarize what this project does，而且應該已經為整個專案建了 local vector database。他前一天報了 bug：在他的機器上一直停在 indexing。他猜是因為跑在 NixOS（字幕說 NYX OS），一種比較怪的 Linux，而且沒有 GPU。一旦能用，就可以問這個專案本身，context 比單看一個檔案大。

[12:47](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=767s) 他用 Q chat 很多的地方，和別人用 Copilot、ChatGPT 或 Claude 一樣，是搞懂不熟的概念。現場他叫它寫一個 Java method：race 兩個 HTTP request，只回傳第一個成功的結果。出來的 code 沒有用 structured task scope。他猜訓練資料裡 CompletableFuture 遠多於這個還很新的 API，於是追問能不能改用 structured task scope。這是 Java 裡新的 structured concurrency，他認為仍是 experimental。追問之後，code 就很像他自己寫的；他得推一下，才會用新 API 而不是舊的。回答底下還說明為什麼這樣能動，並比較兩者的差別。前一則有連到 Stack Overflow。James 喜歡打開來看，它引的是 accepted answer、最高票，還是中間某種答案。主持人說，訓練資料若大量偏向某一種寫法，它就會給那種寫法，除非有 fine-tuning 或改過的資料。

[16:03](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=963s) 在 IDE 裡他就是這樣用。進 AWS console 時，他問的是 CloudFormation 怎麼設，以及自己的 resources。用得最多的地方仍是 IntelliJ，主要寫 Java、Kotlin、Scala，有時是 Rust 或 Python。他覺得最有價值的時刻，是走進自己不熟的領域。

[16:54](https://www.youtube.com/watch?v=_cpaFCxZPoE&t=1014s) 想試的話，AWS 網站上有 Q Developer 頁面，寫著 IntelliJ 或 VS Code 怎麼開始；或直接在 IntelliJ 的 plugins 裡安裝。裡面有 slash help。他還試著問 what should I use Q developer for，用對話把工具摸熟。James 補一句：給開發者有免費版，他用的就是這個，他認為只要有 AWS account 之類的就能用。
