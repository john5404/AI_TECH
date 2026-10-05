# TDD and Generative AI - A perfect developer pairing with Bouke Nijhuis

Simon Maple 的 AI Native Dev podcast，來賓是 Bouke Nijhuis。片長 21 分 22 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla、把 ChatGPT 聽成 jet GPT、把 GitHub Copilot 聽成 get up co-pilot、把 Kotlin 聽成 goodlin、把 retries 聽成 Rees。公司名聽成 sync、syc，下文依他自述的阿姆斯特丹顧問公司來寫，不另造名字。這一集只有對談，畫面示範留到他說的下一集。

- 原片：[YouTube](https://www.youtube.com/watch?v=G1pwPKHA4u0)

## 一句話

人先寫測試，再請 AI 生出能通過那些測試的實作。測試在這裡有兩個用途：它是 specification，也是檢查 LLM 輸出的方法。全綠、而且你信任自己的測試，才談得上 production ready。AI 會給解釋、給編不過的 code、給沒過的測試，所以中間要有 feedback loop。這一集沒有把那個 loop 跑給人看。

## 他不是死硬的 TDD，assistant 是 pair

[0:20](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=20s) Simon 開場就定題：人手寫測試，再從那些測試生成 code。Bouke 在阿姆斯特丹的顧問公司，三塊業務：資料（Splunk、字幕裡的 cribble、data engineers）、DevOps（Kubernetes、Terraform、cloud providers）、開發（Java、Kotlin、Angular、React）。他約十年前以 Java developer 進去，在荷蘭一家大銀行做很多，後來當開發單位的 unit manager，兩年半前成為 CTO。2019 年起在國際會議演講。Simon 在 Devoxx 和 JBCNConf 看過他講相近的題。

[2:15](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=135s) TDD 不是他一開始就會的。大約十五年前學到，他覺得官方走法很難，自己走中間：寫一點測試、寫一點 code、再回到測試。不是 die hard，但覺得能讓他做得更快、更好。

[3:14](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=194s) AI coding assistant 他偏好放在 IDE 裡，因為這樣才知道自己在講的 context。按 Enter 會出提案，他更喜歡聊天：一起推理、請它生成、再請它改。請它生 test cases 時，前提是他已經有實作。他也用它找 bug。有時真的找得到，有時在推理時帶出他沒想到的 corner cases。Simon 說這是在補人貼著 happy path 想、沒看到的地方。Bouke 把整個用法收成一句：virtual pair programmer。

## 先有測試，再請 AI 寫實作

[4:43](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=283s) 這個方向來自他前一年的演講 the battle of the AI coding assistants。他比過 GitHub Copilot、JetBrains AI、ChatGPT，展示它們能依實作生出測試，而且做得還行。會後有人問：人寫測試、請 AI 寫實作，做不做得到？他說不知道，回去查。後來的演講就是 TDD and generative AI as a pairing：人寫測試、交給 AI、要實作，再用同一批測試看實作對不對。

[6:09](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=369s) 反過來、由 AI 生測試時，他仍然人工看。LLM 會說出不真或不對的東西，所以輸出都要查。他注意到它有時會補他沒想到的 corner cases，大致上總有 happy flow，多半也有 edge cases；沒有就可以再要。Simon 問另一個方向是不是比較不用逐行看 code。Bouke 說那個方向更好：你給的測試是你要什麼的 specification，同時也是檢查 AI 輸出的辦法。不是每個領域都有東西能查 LLM。軟體開發有 unit test，所以從測試到實作，他認為是更好的路。

[8:51](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=531s) 他聽過 Simon 和 James Ward 的一集。他同意 Ward 說的：測試還不夠，但應該擴大「什麼算測試」，讓 AI 有足夠的東西可寫實作，人也有足夠的東西可驗證。以現在的 JUnit 5 來說，security、performance 常常不在裡面。performance 可以先把斷言寫成這個測試要快於 20 milliseconds。security 可以在 pipeline 裡跑 scanner，看有沒有 security bugs。東西都在，只是還沒收成一個 package。他有一個 proof of concept，這一集只說它目前跑的是 JUnit 5，示範留到下一集。

## 測試變成比較重要的那一份

[10:26](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=626s) Simon 問：code 一直被重生成、人改的是測試，未來哪一份比較重要？Bouke 說答案簡單。如果我們信任 AI 生成的 code，意思就是信任我們的測試，那測試顯然更重要，實作就可以不再在乎。他玩自己的工具時，有時生出他很難讀的實作。在這套如果真的走得通的未來裡，那不重要，因為不必再讀那些 code。Simon 補了一句：還是可以請 AI 把 code 描述清楚，用那來幫忙 maintainability。

[11:45](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=705s) 測試的兩個用途，他說前面已經談很多的是 input：人寫測試，請 AI 給出能通過的實作。第二個是 validation：用同一批測試看這份實作對不對。他認為價值就在這裡。AI 會 hallucinate，測試讓你看見它有沒有給出一個 proper solution。拿到實作就跑測試。全綠，而且你信任那些測試，就有他說的 production ready code。

[12:49](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=769s) 他用約半年前的 Air Canada 說明 LLM 會編故事。航空公司網站上的 chatbot 用 LLM 變得更像人。客人問退票規定，chatbot 開始編。客人有先見之明，存了截圖。幾週後向真人客服要退票，客服說 chatbot 講錯了。客人不同意，上法院。法官說不管是 LLM 還是人放上網站，放上去就是真的，必須履行。Air Canada 退了票，隔天 chatbot 下線。他的重點是 chatbot 有用，但不能百分之百信任，最後那幾個百分點會給出假資訊。

## 兩圈 loop，五次為止

[14:45](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=885s) 測試沒全綠時，他先講 happy path，再講出錯。理想情況是人寫測試、AI 給出能編譯、測試全綠、可以 ship 的實作。現實有兩圈。第一圈：LLM 有時給的是解釋，不是實作；或 code 編不過，測試就跑不起來。就再要一次。第二圈：不是每條測試都過。把錯誤抽出來送回 model，請它給一版能解掉目前失敗的實作。一直做到解出來。有些問題解不了，所以有最大次數。

[16:24](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=984s) 次數看題目難度。LLM 不是 deterministic：同一個問題有時 one shot，有時解不掉，再跑一次又 one shot。他的工具在生成 code 停在五次 retries，跑測試也是五次。他說多數時候會成功。這一集的字幕沒有實際跑出那五次裡的某一輪。

[17:35](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=1055s) 下一集才會螢幕分享，這一集只預告流程。先從 odd/even 這種每個開發者都認得的小題開始，手動把測試貼給 ChatGPT，把實作貼回 IDE，再跑測試。接著是 prime number。手動很快就無聊，所以他做了一個工具：你給 test case，它跟 LLM 說話、把 feedback 送回去、做那些 loop，直到測試通過。工具很會生純 Java，職場上卻都在用 frameworks 和 libraries。他又做了一個 Maven plugin，讀 pom，知道你用哪些 libraries、哪些 frameworks。預告裡的兩個 Spring Boot 例子，一個是 hello world，一個是傳入出生日期、回傳年齡的 endpoint。他說不超複雜，但不是 trivial。

[19:02](https://www.youtube.com/watch?v=G1pwPKHA4u0&t=1142s) 工具是年初開始做的，大多跑在筆電上的 local LLM。年初那些練習 local 做得很吃力，演講進行到一半得改走 cloud。他說現在多數練習 local 做得了。Local 他玩過很多，最後 Llama 3 最適合這個用途；幾個月前換上 Llama 3，現在用 Llama 3.1。Cloud 以前用 ChatGPT，現在也用 Claude Sonnet 3.5。這兩個他還沒看出很大差別，但有人說 cloud 那個更好。Simon 說自己聽到的圖，常常是 Claude 和字幕裡的 40 很接近，再和其他 model 有一段差距。字幕沒有把 40 說成哪一個 model 的全名。
