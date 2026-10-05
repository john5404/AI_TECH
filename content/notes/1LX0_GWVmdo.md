# TDD and Generative AI in Action!

Simon Maple 主持，這一集接著上一場聊天，改成螢幕示範。來賓是 Bouke Nijhuis，字幕聽成 bala knous。片長約 40 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla，把 ChatGPT 聽成 jet GPT，把 Ollama 聽成 AMA，把 Anthropic 的 Claude 3.5 Sonnet 聽成 entropic、Cloud 35 sunet。

- 原片：[YouTube](https://www.youtube.com/watch?v=1LX0_GWVmdo)

## 一句話

人先寫測試，測試就是元件的規格。模型負責交出能通過的實作，人不再改那份實作。要新功能，就再寫會失敗的測試，把工具重跑。Bouke 把複製貼上做成一支工具：編譯不過就再問，測試不過就把錯誤餵回去，每個迴圈最多五次。本地的 Llama 3.1 做得到簡單的 Java，Spring Boot 和日期計算常常要換上雲端模型。他在意的不是模型懂不懂，是你有沒有辦法檢查它的輸出。

## 兩個迴圈，做不到就承認

[0:21](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=21s) 流程圖左邊是人寫的測試，交給生成模型，請它想出能通過的實作。中間跑測試。全過，那就是可以進 production 的 code。兩個迴圈。小的那個是 code loop：模型有時不聽話，回一段說明，說明不能拿來跑測試；有時 code 編譯不過。就再問，直到拿到能編譯的實作。測試沒全過，就抽出失敗的錯誤，餵回去，請它給更好的實作。兩個迴圈各五次，通常夠。不夠就說找不到這組測試的實作。

Simon 問這是不是真的 TDD：生成之後人再寫下一個測試。Bouke 說舊日子要加功能，就是再寫 code，最好先寫測試。現在不準再碰實作。要功能就加測試，重跑工具，直到也通過新測試。他一開始還會自己看失敗的測試和 code，因為不確定工具對不對。現在交給 AI。每次跑都會有 `generator.log`，看得到步驟、哪個測試失敗、新的 prompt。工具出錯時拿來當 debug。剛開始用的人會想看它怎麼錯，用熟了就愈看愈少。

他總是先用本地模型。Ollama 像大型語言模型的 Docker。最近用 Llama 3.1，這個用途上最好。本地解不了就換雲端，因為雲端就是比較好。

## 奇偶和質數：它在對 pattern，不是在懂

[4:54](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=294s) 先手動，用他最熟的 Java，其他語言的人跟得上。測試期待一個叫 odd even 的物件，有 `isEven`。偶數回 true，奇數回 false。他複製到 ChatGPT，請它給一份能通過測試的實作。測試對象裡先放一個永遠回 false 的假實作。貼上模型的 code，跑測試，綠了。

Simon 問，若把 odd、even、`isEven` 這些字拿掉，它還會做模數，還是把 0、2 寫死。Bouke 試過，改成 A、B、C，沒有人讀得懂的字，它仍找得到解，但對的詞彙確實幫得上。他們當場改：類名、方法、套件都匿名，清掉 context，貼上同一組數字。模型還是看出奇數，並給出能用的解。Simon 說它不是懂你要做什麼，是測試和實作的 pattern：一邊 2、4、6、8，一邊 1、3、5、7。把 odd 和 even 寫回去，對上 pattern 會更容易。

[9:28](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=568s) 下一題是 50 以內的質數。類別 `PrimeNumberGenerator`，方法 `generate`，參數是上界。給 50，就要那些質數。假實作回 null。ChatGPT 這次慢一點，貼回去是綠的。Bouke 說他不擅長看這類演算法，大概也不是最好的，他甚至不完全懂。這就是這套工作方式：你不必知道怎麼實作，測試過了就信任。Simon 看了一下，它在檢查比那個數小的數，模完是不是沒有餘數。Bouke 說他不會回去改實作。概念證明了：人寫測試，AI 交出實作。

兩個大問題。第一，手動步驟太多：IDE 複製到瀏覽器，等，再複製回測試對象，再跑。開發者重複太多次就會不開心，然後自動化。他做了一支工具，就是一個 jar。把質數測試的路徑餵進去。它在跟本機的 Llama 3.1 說話。Code loop 等到有東西能編譯，test loop 看測試過不過。出來的實作和剛才不同，沒有平方根，有一些乘法，測試過了。他說現在是跑工具、去拿咖啡、回來就有能用的實作。

## 用既有測試換掉自己的爛字串處理

[13:53](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=833s) 前面都是生新東西。開發者一輩子寫過幾百甚至上千個測試，工具也能吃既有測試。他拿工具改工具自己。裡面有 code container：留下模型給的 code；在 Java 裡檔名必須等於類別名，所以要從 code 抽出檔名；有 package 時，資料夾必須等於 package，所以也要抽出 package，例如 `org.example.primenumber`。

抽出檔名的測試期待 `HappyFlow.java`，中間故意放空白、class、public class，以及各種答案。他在斷言裡加了訊息。測試失敗時，這句話會餵回去當下一輪的提示。就算沒有 AI，他覺得加訊息也是好習慣。抽出 package 也一樣，有多層 package，也有可選的、完全沒有 package 的情況。

他坦白實作很爛。正規表示式可以解決，他不擅長，所以一開始是很差的字串操作，希望工具給出能放回工具裡的更好版本。本地模型第一次找到兩個測試，零個通過，就把失敗餵回去。Prompt 寫明：你是專業 Java 開發者，給單一檔案、完整、能通過測試的實作，不要把測試回回來，不要片段，要含 import 和正確 package。30 秒逾時，本地模型沒解出來。開發者的第一反應是再試。模型每次不一樣，有一種模糊。第二次先有一個通過，然後兩個都過。測試對象裡是兩條 regex，一條抽檔名，一條抽 package。既有測試因此可以拿來改既有 code。

[19:27](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=1167s) Simon 說奇偶和質數到處都有，模型好找；這題很特定，所以花了三次，仍然讓人吃惊，雖然那只是相關和 token 的對上。Bouke 說開發者每天解不同的問題，但大概 99% 已經被別人解過，變數名字不同，煮到底是同一題，所以大多數問題應該走得通。

Temperature 他不動，預設就夠好，這問題很多人問。Simon 提起先前節目：有人把 chatbot Finn 的 temperature 調高，請求次數多了更可能成功，也更可能說出不真的話。Bouke 補了一個還沒談的因素：錢。本地模型成本幾乎是電費，筆電電池較快沒。他用這工具練習、在研討會和 meetup 示範大約八個月，花在 ChatGPT 上大約 10。每個測試都打雲端，很快會變貴。另一方面模型在變好、變快、變便宜。他看到的未來是：寫測試、跑工具、拿咖啡，成功就省下幾小時，成本大概一杯咖啡。失敗也只花一點錢，測試還在，你照舊自己寫；或者看它哪裡錯，會逼你想得更清楚，之後寫出更好的實作。除了那一點錢，他覺得沒有 downside。

## 新功能只加測試；框架要看得到依賴

[23:24](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=1404s) 加功能的示範：質數產生器若拿到負數，應該丟例外，因為沒有負的質數。他用 JUnit 的 `assertThrows`，例外型別用 `RuntimeException`，再加上一個 lambda。他只打了前幾個字，IntelliJ 免費的補完就從 context 猜出他要的，他沒有付 JetBrains 的 AI。先跑測試：50 以內仍過，負數不過，因為那段 code 還沒有。同一條指令、同一個 prompt，檔案裡從一個測試變成兩個。它更新實作，把第二個測試也顧到。Simon 說這就是 TDD，做到測試通過的最小程度，code 和好壞跟測試綁在一起。

還剩一個大問題。到目前為止它很會生純 Java。日常工作用函式庫和框架，工具現在不知道 Spring Boot、不知道 Quarkus。輸入只有測試，怎麼知道你用哪些。他的解法是碰建置系統。Java 通常是 Maven 或 Gradle，他 Maven 熟得多，所以做了一個 Maven plugin。Plugin 能碰到所有函式庫。他做的是自訂 class loader，把依賴載進來，生成的 code 才能在用了函式庫或框架時還能跑。編譯那一步必須知道這些函式庫。

[27:11](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=1631s) `pom.xml` 裡插件叫 test driven generation Maven plugin，設定一樣是測試檔路徑。測試是一個很簡單的 Spring Boot hello world：隨機 port、`RestTemplate`、對 localhost 根路徑做 GET，期待 `hello world`。要跑得了 Spring Boot，才需要這個 plugin。Maven 指令啟動插件，插件再用那個 jar。輸出和他剛才用 jar 時一樣。本地模型先出錯，錯誤餵回去。這是第一次在 code loop 裡打轉，因為要建的 Spring 應用複雜得多。後來 build success。出來的是 `EndpointApplication`：Spring Boot、`RestController`、根路徑的 mapping、回 `hello world`。他說若有人請他寫，他也會寫成這樣。

Simon 問，加質數那個負數測試時，有沒有把上一份已通過的 code 當 context，讓它從那裡改，而不是每次從零開始、更不容易撞上重試上限。Bouke 說現在的例子都從零開始，這件事在待辦裡。Context 越多，結果越好。多輪迴圈裡它知道前面幾輪做過什麼，但不是整份先前的實作。Token window 愈來愈大，以後可以把整個專案放進去，命中率會上去，工具會更有用。

## 算年齡：本地大約一半，雲端一次就過

[32:25](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=1945s) 最後準備好的例子還是 Spring Boot。URL 裡給生日，算出年齡。今年 1 月 1 日出生是 0 歲。2000 年 1 月 1 日是 24 歲，2000 年最後一天是 23 歲，難在這裡。路徑預期是 `/age/` 再接生日，打在 localhost 的隨機 port。他先前玩過，解不出來，是因為自己把兩個數字對調了。Simon 聯想到一開始匿名奇偶測試：若把某個 2 改成 1，模型會不會仍覺得夠像 mod 2。他們沒有在這集試。

Bouke 覺得這題若自己寫，至少 50 分鐘，也許更久。本地還是 Llama 3.1，逾時 30 秒。第一輪沒有能編譯的 code，第二輪編譯了但測試不過，而且把測試複製進實作裡。他說你其實不想看這些，你只想要通過的測試，然後人在別處喝咖啡。Demo 不能等太久，所以逾時設 30 秒。今年初，本地模型大約 5% 的次數解得了這題，通常得上雲端。換成 Llama 3.1，他說大約 50%。他沒耐心，改打 Anthropic。第一次就 build success，用的是 Claude 3.5 Sonnet。本地已經讓人印象深刻，雲端好太多。出來的是 age calculator：Spring Boot、`RestController`、路徑變數接生日、用 ISO 日期解析、拿今天和生日的差、取出年數。就是他會寫的那樣，大約五秒。

[37:44](https://www.youtube.com/watch?v=1LX0_GWVmdo&t=2264s) Simon 喜歡的是你從驗證開始。愈複雜，愈能依靠這份 code，因為測試和斷言在最後被確認過。Bouke 說這套做法有趣的地方就是驗證：你有辦法檢查大型語言模型的輸出。他拿 Air Canada 的例子說明這會愈來愈重要，人會一直犯那種錯，而且會花很多錢。寫 code 這時總算有檢查的方法。字幕沒有把那個例子再講一遍。

他會在事後給 Simon 四個連結，放進節目說明。字幕清楚說出的是：叫 AI Native Dev example 的專案、做出 jar 的 repo、做出 Maven plugin 的 repo。這是他的 proof of concept。他喜歡被丟離稿的題目。
