# AI assisted programming: from inline completions to agentic workflows with Anton Arhipov

Anton Arhipov 的現場示範，片長 22 分 51 秒，英文自動字幕。字幕沒有點出場合名稱。結尾主持人稱他 Anton，並說下一場還有一分鐘就要開始。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 IntelliJ IDEA 聽成 intelligj、把 Junie 聽成 Juni 或 Juny、把 Kotlin 聽成 cotlin、把 Mellum 聽成 Melum，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=UtAa9sMxSuU)

## 一句話

AI 協助不是一個開關，而是一條光譜：左邊你很清楚要寫什麼，只需要不擋路的單行補完；右邊你只描述功能，工具自己改整個專案。Anton 用同一個 Spring Boot 小專案，從 full line completion、cloud completion、編輯器內生成、AI actions、chat，走到剛宣布的 coding agent Junie。到 chat 為止，做決定的 agent 仍是人；Junie 才把迭代和整合接走。

## 左邊很少幫忙，右邊不再盯每一行

[0:13](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=13s) 他說整場幾乎只有一張投影片，其餘都在 IntelliJ IDEA 裡。那張圖是他自己用來解釋的階段，不是他把所有工具都做出來。最左是最少的協助：編輯器裡的單行或單句 completion。最右是 agentic mode：你引導工具要什麼功能，同時不再追蹤自己到底產生了什麼 code。

[2:15](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=135s) 示範是一個很小的 Spring Boot 應用，只有一個 controller，以及 algorithm 介面的幾個實作，他說那些基本上是 geometry filters。情境是依設定選實作。這一階他假設自己很清楚要寫什麼，不想讓 AI 代寫，要留在控制裡：一個依設定注入的屬性來選 algorithm 的函式，型別是 string，再做成一個 bean。

## 本地 full line：寧可不顯示

[4:00](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=240s) 一行結尾才出現 completion。打字時 IDE 裡有本地 model，來自名為 full line completion 的外掛。它看游標上方、同一個檔案裡的 code，跳過註解，再給建議。他裝了一個內部工具，只為這次 demo 把按下按鍵時 IDE 在算什麼視覺化出來。

[5:21](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=321s) 右下角的 model 算出，下一個該滿足需求的陳述有 36% 的機率是帶 type subject 的 `when`，編輯器也畫出來。下一個建議他覺得不相關，可能是標紅的 code，也可能只是 model 生出來的無關內容。他要的是很快的補完，而且不要擋路。工具擋路最討人厭，所以他們寧可不顯示，也不要給不正確或 hallucinated 的補完。他打出 `quick` 這個值之後，下一行的建議才相關、也沒有標紅，於是他接受。

[7:14](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=434s) 這是 IntelliJ IDEA 裡 AI assisted programming 的起點，而且可設定：inline completion 能依語言開關 full line completion，並下載對應 model。他已全部下載，所以畫面上是核取方塊；平常那裡會是下載按鈕。

## Cloud completion：註解也算，但仍可只收一部分

[7:50](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=470s) 下一階是你知道要什麼，但懶得打，想要較大的片段。Cloud completion 可以建議整段 code。它不會生出一千行，但會給還算合理的片段，可以逐 token 或逐行部分接受。IDE 裡的 filter 有幾檔：想少一點標紅、少一點太有創意的 code，就選 focused；想更有創意、接受有趣片段，就放寬。他開的是 balance。他說自己今天想冒險，於是打開 cloud completion，用同一個情境再跑一次。

[9:10](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=550s) Full line completion 會忽略註解，只看 code。Cloud completion 會把註解算進去。他已寫好想要的函式註解，一打字它就看到 algorithm 的實作與介面、Spring Boot 的脈絡、要讀的設定，並給出他認為完整且正確的片段。可以部分接受，也可以整段收下。他有一段鍵盤不順，字幕沒有把按鍵結果說完。他也不一定要片段裡的每一段，例如對不上任何設定值時，他寧願丟例外。診斷區左下顯示 completion provider 是 Mellum。他說 Mellum 是他們的開源 completion model，最近開源給社群，可以下載來試。

[10:52](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=652s) 到這裡已有兩層：要控制每一句，或把控制放鬆一點，接受多行片段。

## 編輯器內生成，然後走出這個檔案

[11:17](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=677s) 再往右是編輯器內生成，prompt 仍然很短，注意力還在正在寫的 code。他試著生成一個工具函式：依某個範例元素，把一份 list 拆成 list of lists。這會叫起本地 code generation，和剛才的片段補完相似，但補完只發生在游標處；inline generation 可以橫跨檔案，加 import、改函式名、拆函式、補額外元件，並再檢查標紅和相關性。畫面上出現 patch，可以 follow-up 修正需求、加約束，或直接接受；之後也能要求重生成，例如不要 functional style，或改成 mutable。

[13:23](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=803s) AI actions 會把你帶出目前畫面和目前檔案。他請它產生 unit tests。AI Assistant 對上他呼叫 action 的那個檔名或後綴，建出對應的測試檔和幾個 test cases。控制又鬆一截：不再盯單行，也不只盯本地片段，而是檔案裡不同位置，甚至不同檔案。他接受之後說不確定測試會不會失敗，先假設有的會失敗、有的大概會過。這一刻的目標不是把 code 測完，而是標出我們在哪一階。他接著看到有的測試失敗、有的沒有，修測試可以交給 AI Assistant，但那不是當時的重點。

## Chat 裡，agent 還是你

[15:36](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=936s) 從 chat 起，焦點離開本地檔、離開編輯器。他用剛生成的函式，以選取範圍開啟 chat，也可以帶整個檔，請 assistant 轉換、換一種方式測、或給建議。預設 chat 不會看整個專案；你拿一小段 code 去問，這個動作本身就是在隔離。你也可以叫它為了相關性掃描專案，依你問的內容把額外原始碼放進 context。

[16:56](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=1016s) 他請它把這段改成 imperative style。Chat 會改寫查詢，再問平台有沒有相關資源可放進 context。這次沒有額外檔案，只有選取範圍和目前檔案，然後就有回應。他說這時候你自己像 agent：決定哪段 code 要整合回專案、要跑哪些測試才敢說它是對的。把 model 生成的 code 自動整合回去，有一個 beta 功能；他沒有當場跑，因為想快點進到 agentic workflows。他可以叫 AI Assistant 正確整合，它會顯示套用片段的 diff。他也切到 codebase mode，讓 chat 能觀察專案裡的東西。

## Junie 把迭代接走，示範被問答截斷

[18:52](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=1132s) 主持人插進來：問題很多，下一場一分鐘後開始，請他一次回答挑過的幾題。問題是 JetBrains AI Assistant 和 Junie 的 stack、基於哪些語言，以及 Junie 怎麼理解既有系統和各企業或專案的約束。字幕裡他沒有另開一段專講「既有系統怎麼被讀懂」，而是對照兩種外掛。

[19:49](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=1189s) 他說到剛才只示範了 Assistant 那一支。回答時他已在畫面上讓 Junie 跑一則查詢：請它實作 persistence layer。Assistant 提供 completion、model 選擇器，以及跟專案聊天；整合哪些 code、跑哪些測試，決定的人是你。Junie 則把這些自動化，並對你提的問題反覆迭代。以這次為例，變更會橫跨整個專案，從 controller 到 services、設定檔、建置檔，也許還加上額外的 libraries。

[20:59](https://www.youtube.com/watch?v=UtAa9sMxSuU&t=1259s) 實作上，這些外掛當然是用 Kotlin 寫的，因為他們為 IntelliJ 平台做的外掛大多是 Kotlin。它可以用在任何語言，但 Junie 要接的是平台或技術專用的工具：為 Java 生成 code 時，要能跑 Java compiler、Java linter、Maven 或 Gradle，還要接 test runner。這跟專案用的技術有關。Code generation 本身不依賴那一層。就算 Junie 還不支援在 IntelliJ 裡跑 Python 測試（他說那是做給 PyCharm 的），它仍能生成你要的 code。預設沒有 C++ 工具時，要它生成一些 C++ 也行。主持人謝謝他，並說很多人是從 JetBrains 開始寫程式的，Junie 出來讓人很興奮。
