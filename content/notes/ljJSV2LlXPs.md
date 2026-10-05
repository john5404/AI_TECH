# Inside the IDE Trusted by World-Class Developers | Anton Arhipov

AI Native Dev 的一集，主持人在 Devoxx，來賓是 Anton Arhipov。片長 36 分 17 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 IntelliJ 聽成 Intelligj、把 Kotlin 聽成 cotlin、Scotland，把 Junie 聽成 Juni、Juny，把 Cursor 聽成 Purser、Corser，把 Snyk 聽成 sneak，把 Grazie 聽成 Gradzi、gradi。Podcast 裡的示範沒錄成，後面切到 DevCon 上的另一段示範。

- 原片：[YouTube](https://www.youtube.com/watch?v=ljJSV2LlXPs)

## 一句話

用 Java 或 Kotlin，人多半還是回到 IntelliJ。Cursor 和 Windsurf 把聊天、生成、改檔、跑測試接進編輯器之後，使用者想要同樣的東西，但不想離開熟悉的環境。Anton 把協助排成一條光譜：你很清楚要寫什麼時，只要快、而且不要擋路的補完；你開始放手時，才是跨檔的生成，然後才是 chat，最後才是 agent 替你迭代。Tab 很省事，也會讓人頭爆。生成一大包 code 像在收一張巨大的 PR，所以 review 和把程式看懂的工具會變得更要緊。

## 他為什麼一直在講 IntelliJ

[0:54](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=54s) 他們認識很多年。Anton 2012 年進 ZeroTurnaround。那是幫 Java 開發者的生產力公司，做 instrumenting agents，讓 Java classes 不用把 JVM 停掉就能熱重載，用起來像 PHP：改完立刻在 app 裡看到。當年 application servers 很大。他們做過研究，平均啟動時間 3 分鐘。他看過最長超過 30 分鐘。主持人說聽客戶講過 90 分鐘，只為了重載 server。大家記得的工具是 JRebel。

[2:17](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=137s) 之後他到 JetBrains。第一個專案不是 IntelliJ，是 TeamCity，做了幾年 advocacy：回饋、跟使用者談、webinars。CI 不只 Java，還有容器、交付、PHP、Ruby、Python，測試和 build 還是要跑。主持人說這有點像他自己轉去 Snyk，變得比較不綁某一個生態。Anton 接著做了五年 Kotlin，大多在 server side，現在還在講語言新功能。這場會議他講了 2.2 和 2.4 要來的東西。IntelliJ 一直在。他說用 Java 或 Kotlin，你還是會回到 IntelliJ。

[3:57](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=237s) AI 很紅，也不可預測。兩年前，同一個 prompt 隔五分鐘再問一次，答案就不同。現場示範因此很有壓力。同事都推他去 demo。IntelliJ 裡的 AI 他歸成四個外掛。主持人知道 AI Assistant 和 Junie。另外兩個嵌在 IDE 裡。一個是 full line completion：整行，現在也可以多行，但是短片段。另一個是起點，Grazie，拼字檢查。AI Assistant、一部分 Junie，以及各種 completion，底下的平台來自那個拼字檢查專案。

[5:28](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=328s) JetBrains 的使用者很忠誠。Anton 說使用的人一多，用例就多，就會發現意想不到的用法，edge cases 覆蓋不到。Bug tracker 是滿的，每天還有新的。正評和負評都有。人氣是有代價的。

## 從補完，到你變成監督者

[6:39](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=399s) Cursor、Copilot 出來時震動很大。很多工具 fork VS Code，字幕裡還有一個聽成 Rukode 的。想用那些 AI，人就過去用那個 fork。Anton 的朋友現在的模式是：用某個 VS Code 做 AI，IntelliJ 繼續開著，用來看 code、導航、用手做真正的開發。

[7:46](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=466s) 他往回看兩三年。第一個是 Copilot 的 completions。他當時在做直播，來賓用 Copilot 做 live coding。那種 completion 擋路多過幫忙，模型也不夠聰明。現在比較聰明，品質比較好。然後出現把 code generation 放進工具裡的 forks，也就是聊天式寫程式。Copilot X 也在那時出現：有 chat，問 LLM，你自己決定怎麼把回答接進專案。這時候你自己是 agent。Cursor 第一個把 chat 和編輯器裡的生成做成可以快轉的 UX：先得到 code，再很快放回專案裡測，而且跨多個檔案。你仍是 agent，決定整合什麼、怎麼迭代、要跑整套測試還是一部分。Windsurf 第一個讓人看到這件事可以進 IDE：給一個高層任務，也許拆成多個，叫它自己迭代、生成、放進專案、跑測試。人變成 supervisor。使用者當然想在 IntelliJ 裡要同樣的東西，不想換到不熟的環境。主持人覺得 IntelliJ 使用者因為忠誠，受影響大概是各家 IDE 裡比較小的，他們會為那張授權抗爭。

[10:22](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=622s) 有些感覺像 AI 的功能，其實是平台裡做了很多年、而且可預測的東西。他們教人 refactor 二十年，重新命名就是 Shift+F6。現在人要的是 next edit prediction，因為那是 Tab。Tab-driven development 就是接受它丟過來的下一筆修改。IntelliJ 還沒有，團隊在做。Cursor 和 Windsurf 有了。他的朋友說這就是全部所需，也取代了很多 completion。平常打一個點，跳出清單。有 AI 之後是整行或一段，一行一行收。它仍是局部的。但 completion 不必落在游標那一格，可以在檔案別處。手動改函式名稱，下一步是改呼叫點，在這個檔裡，或在專案別處。那本來是 refactor 要學的事。人會懶。能按 Tab 做掉粗工，就會立刻覺得有生產力，也少犯錯。這是很貼身的 UX 問題。

[12:27](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=747s) 他在 Cursor 裡連續玩了幾小時 next edit prediction，覺得頭要炸了。補完一直流過來，得不斷判斷收不收、要不要繼續。主持人問這會不會變成一直按接受的 vibe coding，然後靠測試而不是逐行看。Anton 說那種時候你還是在看 code。Vibe coding 是不看 code，告訴 agent 要什麼，它生出來，你偶爾看一眼像不像，因為它可以生很多，像在收一張巨大的 PR。他認為一個後果是：PR 接受、code review、把 code 視覺化的工具必須變好。以前就有很多人試著把結構、架構、元件關係看出來。現在這件事變關鍵。Debug 也是。有 TDD、BDD 時，測試就是 debug 工具，為什麼還需要 debugger。LLM 能生測試，現場也有公司在做這件事。問題變成你信不信，那個測試到底對不對。若沒有測試、只有 code，審查那些測試幾乎會比審查生成的 code 更要緊。

## 光譜的左端：你還知道自己要寫什麼

[15:02](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=902s) Developer advocate Bap 插進來說，Anton 正要示範時，這集 podcast 罷工了。切到 AI Native DevCon。Anton 在那裡講 IntelliJ 裡的 AI tooling，從行內 completion、cloud completion、各種 AI actions、chat modes，到剛宣布的 agent Junie。他只有一張自己畫的投影片，其餘都在 IDE 裡。左端是最少協助：單行或單句補完。右端是 agentic mode，你不再追自己在生什麼 code，只引導工具要什麼功能。

[17:02](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=1022s) 示範是一個很小的 Spring Boot，一個 controller，algorithm 介面有幾個實作，是幾何 filter。情境是依一個設定選實作。第一階段他假設自己很清楚要寫什麼，要自己寫、要留在控制裡。他打一個依注入的 property 選 algorithm 的函式。這時 AI 協助很少。行尾才出現補完。IDE 裡有一個本地 model，來自 full line completion。它看游標上方同一個檔裡的 code，跳過註解，再給建議。他裝了一個只為這次示範用的內部工具來看統計。右下角 model 算出下一句有 36% 的機率是帶著 type 的 `when`，並畫在編輯器裡。下一個本地建議他覺得不相關，可能是紅字，可能是幻覺。這種你很清楚要寫什麼的流程，要的是快、而且不要擋路。他寧願不顯示，也不要顯示錯的或幻覺的。他要的一個值，字幕聽成 quick hole，下一行的建議變得相關、不是紅字，他就收下。這是 IntelliJ 裡 AI 協助的起點。可以依語言開關 full line completion，並下載對應 model。他全都下好了，所以是勾選；平常會有下載鈕。

[22:06](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=1326s) 下一階是知道要什麼，但懶得打，想要較大的片段。Cloud completion 可以給整段，不會生到一千行，可以一個 token、一行、或整段收下。IDE 裡的過濾可以開 focused，少一點紅字、少一點太有創意的 code；也可以要更有創意。他開的是 balance，說自己今天想冒險。Full line 會忽略註解。Cloud completion 會看他已經寫上的函式註解，也看得到 algorithm 的實作、介面、Spring Boot、要讀的設定，然後給出他說的完整、正確片段。鍵盤這時出問題，局部收下的那段沒看清。他可能不想要其中一部分，寧願在對不上任何設定值時丟例外。診斷左下角的 completion provider 是 Mellum，他們最近開源，可以下載來試。這是兩層：每一句都自己控，或稍微放手，讓它生多行。

## 跨出檔案之後，人還是那個 agent

[25:23](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=1523s) 再下一階是編輯器裡、用很短的 prompt 生成。人仍盯著正在寫的 code。他請它生一個工具函式，把一串元素依某個範例元素拆成多串。這像剛才的片段補完，差別是補完長在游標處，inline 生成會橫跨檔案：可能加 imports、改函式名、拆函式、再長出別的元件，並且會再查紅字和相不相關。Patch 就在 code 裡，可以追加約束，或直接收。也可以要求重做，不要 functional style，或要 mutable。AI actions 開始把你帶出目前這個檔。他叫它生 unit tests。AI Assistant 對上檔名後綴，建了對應的測試檔名和幾個案例。控制再鬆一點：不再是一行，也不再是局部片段，而是檔案裡不同地方，甚至不同檔案。他收下。不確定測試會不會失敗，假設有的該失敗、有的會過。這段的目標不是測 code，是說明走到哪一階。後來他說有些測試失敗了，有些沒有。用 AI Assistant 去修，不是現在的重點。

[28:49](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=1729s) 然後是 chat。焦點離開本地檔、離開編輯器。可以拿選取範圍開 chat，也可以拿整個檔，或只調整一個函式，請它改寫、換一種方式測、給建議。預設 chat 不會看整個專案。他們先把範圍隔離在一小段。也可以叫它為了這個問題掃專案，把相關原始碼補進 context。他請它把這段改成 imperative style。Chat 會改寫問題，問平台有沒有相關資源。這次沒有額外檔案，只有選取範圍和目前的檔，然後就有回答。到這裡，人就是 agent：決定哪段 code 要接回去、要跑哪些測試。還有一個模式能自動把 model 生的 code 接回去。他們當時在 chat mode。有個 beta 他不跑，因為想快點進到 agentic workflows。可以叫 AI Assistant 正確地整合，它會給出 diff。他接著要切到 codebase mode，讓 chat 能看專案裡有什麼。示範在這裡被打斷。

[32:25](https://www.youtube.com/watch?v=ljJSV2LlXPs&t=1945s) 下一場一分鐘後開始。問題被收成兩個：AI Assistant 和 Junie 的 stack、用什麼語言；Junie 怎麼理解既有系統，以及每個企業或專案的限制。他說有兩個外掛。畫面上他只示範了 AI Assistant，回答時讓 Junie 在螢幕上跑。AI Assistant 提供 completion、model 選擇、跟專案聊天。你是那個決定要整合哪段 code、要跑哪些測試的 agent。Junie 把這些自動化，對你問的問題自己迭代。他剛請 Junie 做 persistence layer，改動會橫跨整個專案：從 controller 到 services、設定檔、build 檔，也許還要加 libraries。實作是 Kotlin，因為他們為 IntelliJ 平台做的外掛大多用 Kotlin。它可以用在任何語言。Junie 想接的是跟平台或技術有關的工具：生 Java 就該能跑 Java compiler、Java linter、Maven 或 Gradle、測試和 test runner。這跟專案用的技術有關。生成 code 本身不依賴那個。就算 Junie 不支援某項技術，例如在 IntelliJ 裡跑 Python 測試是 PyCharm 的事，它仍能生出你要的 code。在 IntelliJ 裡生 C++、預設沒有 C++ 工具，也做得到。既有系統和企業限制怎麼被理解，這段回答沒有再展開。
