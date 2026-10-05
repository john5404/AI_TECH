# Rethinking Software Development: James Ward on AI's Role in Software Testing and Coding

Simon Maple 主持 AI Native Dev，來賓是 AWS 的 developer advocate James Ward，之前在 Google 做 Kotlin 的 product manager。兩人都是 Java Champion，James 也是 Testcontainers Champion。節目由 Tessl 呈現（字幕聽成 Tesla）。片長約 37 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=81ZYyI2_cWs)

## 一句話

James 在 Twitter 上寫：若 AI 能迭代寫 code 直到通過測試，人為什麼還要看到那份 code；有 bug 就寫更好的測試；未來的 compiler 會把這件事做進去，人要擅長寫出業務和營運需求的測試。他事後發現這很像 Wikipedia 上的 fifth-generation language：人寫測試，更未來的語言則寫 proof。今天的測試還不夠，因為效能、安全和生產特性多半不在測試裡。他要留下型別、介面和測試，讓 AI 填實作。人也還不能把腦子關掉：Rust 上他把編譯錯誤丟回去，model 在警告和錯誤之間打轉。

## 推文把助手推到極端，XML 曾經也這樣

[0:16](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=16s) James 用 AWS 很久。資料中心的機器半夜要人進去修，AWS 一出來他就覺得得救。進 AWS 還很新，工作是讓企業開發者用 AWS 更有生產力，背景仍是 Java 和 Kotlin。中間在 Google 做了幾年 Kotlin 的 product manager。Simon 說兩人在 Java 圈認識很久，他自己也穿著 Java Champion 的衣服。他仍把那個網站叫 Twitter。

[1:51](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=111s) Simon 念出那則推文：AI 若能迭代寫到測試通過，為什麼還需要真正的 code；有 bug 就寫更好的測試；未來 compiler 會把這些整合進去；人得擅長寫出商業和 operating requirements 的測試。James 說他愈用這些工具，愈不確定五到十年後怎麼用。若它寫出的就是對的 code，為什麼還要看 code，為什麼 code 還在他的 codebase 裡。發完才想起來聽過類似的東西。4GL 有點像後來的 low code。他去查 fifth-generation language，描述幾乎就是那則推文：你寫測試；更未來的語言不一定寫測試，而寫 proof。點子不新。有趣的是反應。現在很多人用很互動的助手，擅長小工作，把 AI 接進既有流程。例子是 AWS CodeWhisperer，已經改名成 AWS Q Developer（字幕先聽成 AWS developer）：一行一行幫你寫下一行，或寫你想要的測試。推文把這件事推到極端。有人想看見未來，有人懷疑這是不是真的路。懷疑有道理，hype cycle 太多。

[5:35](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=335s) 很久以前 Denver Java User Group，講者沒來。一個他不認識、灰鬍子的人上台，說要講一件改變世界的事：XML。當時沒人聽過。XML 後來確實改變很多，但跟當時水晶球不一樣。中間有 SOAP、WS-*（字幕聽成 Ws Splat），現在看到的是 JSON、Protobuf。那個位移很重要，十到二十年後長什麼樣沒人知道。AI 也在這個點。有人說開發者不需要了，另一端完全相反。事情是迭代的，你無法想像所有回合。

## 人讀得到的 code 不一定要留下

[8:12](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=492s) 今天有人先寫一點 code，助手補 boilerplate。他常因此少想一點該寫什麼。他問的是：若 AI 能做對，那份 code 為什麼必須是人讀得懂的。也許除錯還需要。若規格夠，為什麼還要人讀的 code。推文裡兩個難處他展開了。規格必須夠，才能知道功能是他要的。很多東西摸不著，尤其營運。你可能知道某個函式會在 100 milliseconds 裡被叫一百萬次，開發時會為那個生產需求去優化。那些生產需求為什麼不寫進測試？測試框架一般不碰營運需求，也不碰安全。他說測試得能寫：我期望 0.5 milliseconds 內回來，記憶體只用這麼多。那些要求通常在開發側，不在測試側。要搬進規格，而不是在 production 裡摸到一個以為對的版本。

[11:10](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=670s) Simon 說規格會變得很寬：行為可以用斷言，也可以用功能描述，例如計算機把兩數相加，測試是給 2 和 2 要得到 4。再加上非功能：安全、效能、架構風格。James 說他愛型別系統。人該寫出型別、class、介面。他提議的是：class、介面、測試都寫了，實作交給 AI。他仍要型別和函式定義，才能跟那些物件互動，測試則驗證功能和生產面向。

[12:43](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=763s) Simon 問這是不是假設 Java 或 Scala（字幕聽成 skyar）；若不太讀 code，能不能叫它挑最適合的語言，而不是你熟的。James 說測試 DSL 已經很多，Cucumber、Groovy 那套都有人用。他現在喜歡測試就是普通 code，不要特殊 DSL，也不要花俏的 assertion library，就是 `assert true`。測試裡的 code 和別處一樣，不是只為測試存在的怪語言。這不一定是 AI 能動的條件，但也許會長出新的測試規格語言。5GL 的描述就是會有更對準這個看法的新語言。理論上任何語言都做得到。他想要好的型別系統，因為型別是規格的一部分；別人來用你的 API，型別和函式要定得很具體。動態語言他不知道怎麼做。

## 今天的測試不夠，問問題比叫它補測試有用

[15:14](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=914s) 回覆很多。一類說測試不夠：只抓住 code 能做的一小部分，有些東西很難測；還是要有人維護，行為不對時要查為什麼；還想指定型別和約束。James 覺得是好回饋。今天的測試不足以支撐那個願景，但他的看法是測試應該更夠。測試的用處是當下寫 code 更有生產力，以後改東西時確認沒有 regression。成熟專案的做法是：有人找到 bug，先寫測試證明它存在、能重現，再修，再看測試過。這樣既確認修好，以後 CI 也會在你弄壞時斷掉。

[17:19](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1039s) Simon 說過渡期可以用 Q Developer 把今天該有的測試補起來，同一天發布的下一集有 demo。James 說有人拿現成 code 叫它寫測試。若功能已在、測試還沒寫，這條可行，AI 愈來愈會。他不是嚴格的 TDD，但常先寫測試，或先寫型別和函式簽名。邏輯複雜時他先寫測試，因為不描述在測試裡，他還不懂要做什麼、要驗證什麼。中間會來回改功能和測試。有時完全不寫，因為很難測，或測試加不了多少價值。他本人還沒有圈一段現成功能叫它寫測試，但別人那樣做可以有價值。

[19:37](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1177s) 他實際用助手的方式，是鑽進不懂的地方：新語言，例如 Rust，或不熟的領域。以前會搜尋，打開大約 300 個分頁，Stack Overflow、blog、Reddit，自己在腦子裡組知識。現在進 Q Developer 直接問。好處是那 300 個分頁它已經組過，他可以再追問、把答案收到自己要的形狀。別人也用 ChatGPT、Copilot、Anthropic 的 Claude。Simon 看過有人把整本書和以前的節目丟進 Claude，讓它產生流程和問題。這種摘要常常準，但也有 hallucination。

[21:49](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1309s) James 說有經驗的人會有蜘蛛感應，覺得不對勁、跟自己理解的世界不合。不夠有經驗的人會鑽很深的兔子洞，太晚才發現被帶錯。這仍是開放問題：model 變好、hallucination 變少，或社群幫忙檢查，拿去給有經驗的人看。Simon 說同一週有來賓談信心：LLM 不願說不，就算沒有答案也要給一個，hallucination 常從這裡來。希望它說不確定、需要更多輸入或人。James 看過有人在新 session 開頭寫：不知道就說不知道。不是所有 model 都這樣，有些信心不高時會說 I don't know。他還沒看過 LLM 反問。開發者常說 it depends。它不會說 it depends、再多告訴我一點。改進空間是先弄懂 context 和相關的事，再吐答案，像人會說先讓我搞懂那一塊。

## 編譯錯誤丟回去會打轉，人是慢的那一半

[25:03](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1503s) 另一類回覆說 AI 還沒準備好，Copilot、ChatGPT、Claude 仍常錯。James 說一件開始發生的事：他在一個工作小組，一堆公司想把 Java 轉成 Kotlin，其中一個想法是交給 LLM。問題是它有時會錯。實驗是在 LLM 外面包一層：Java 轉 Kotlin，跑 compiler 和 build，編譯錯誤餵回去，叫它再試或改。也可以換 model 或參數。下一步可以把真正的測試放進迴圈，迭代到能動的東西。他在一個 Rust 專案試過。他不是 Rust 專家，有個 compiler warning，丟進去叫它修。拿回來放上，警告變成編譯錯誤。再把錯誤丟回去，它還回帶著 warning 的那份 code。迴圈解不出一個能動的版本。Simon 問是不是 context 不夠，它沒記住上次失敗，需要跳出框。James 說這些東西是模糊的，也可以換一個 model。多個 LLM 的迭代回饋可能更接近能用的解。他知道的人裡，還沒有人把這種迴圈接進一般開發流程。還在這趟旅程的開頭。

[28:25](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1705s) 還有人說終究會到，但目前要有人在迴圈裡。Simon 把問題翻過來：技術可以一夜變，人改 workflow 很慢。我們會不會是最慢的那塊。James 說現在是 co-evolution。人和 AI 都在變，纏在一起往前，所以一開始才說不知道會去哪。同事的話是：你還是得用腦子。工具在幫你。你要能看 code 說這不是我要的。LLM 寫 JavaDoc 非常有用，你仍要讀，問它對不對。是工具和腦子的配對，腦子裡有經驗，也懂你在解的業務問題。有人說這只是另一層抽象：叫電腦做事、跑、驗證、再來。James 覺得某程度是真的，只是手在做的事變了。

[31:00](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=1860s) 有人說未來的開發者就是 business analyst，把業務需求翻成規格。他不知道未來是不是那樣。他不會很興奮，因為他喜歡解問題、進到 code、找出對的模型和測試、那些機制。理解使用者和需求並不讓他興奮。Simon 說人做開發不是只因為錢，是喜歡解問題和寫 code。那個解出來的時刻還在不在。James 希望 AI 拿走不有趣的部分，人做有趣的。他不知道若整天只寫測試、型別和介面，那份工作還樂不快樂。Simon 說用 spec 把應用堆起來仍是創造；AI 可以做你不喜歡、花時間、又不是創造本身的事，測試和文件都算，開源套件的完成度本來就差很多。

[33:32](https://www.youtube.com/watch?v=81ZYyI2_cWs&t=2012s) 還有人說他走得不夠遠：未來被叫做開發者的人只寫測試規格，測試也交給 AI。它是同伴，測試和 code 都寫，手是乾淨的，能當開發者的人變多。停在哪。James 說 low code、no code 試過很多次，有些成功，空間很寬。仍會有地方需要會寫 code、會除錯、肯進 gore、解硬問題的人。也會像 low code 那樣，能做東西的人變多。他的 podcast 共同主持人 Bruce Eckel（字幕聽成 Bruce eckel）常講他們在科羅拉多小鎮（字幕聽成 crb）的書店。管書店的軟體很糟，因為沒有人有動機組 20 個開發者去做好的書店軟體，太貴，好處不夠。很多領域軟體可以解得更好，財務動機不夠。人要花很多年才學得會建系統。若能把網拉寬，他的朋友 Arvin 就能得到現在沒有的好書店軟體，因為經濟誘因不存在。他不認為未來只剩不會寫 code、只會用 AI 工具的人。會是一個大帳篷，很多問題、很多人、很多工具和經驗。水晶球是：開發者不會很快被 AI 換掉，但會用這些工具變得更有生產力，把時間放在有趣的部分。下一集他們要分享畫面，看 Q Developer 怎麼幫人寫更多、更好的測試。
