# What If Fixing Code Wasn’t Your Job Anymore? | Jonathan Schneider & Moderne

Simon Maple 訪問 Moderne 的 CEO、共同創辦人 Jonathan Schneider。Moderne 做程式的分析和重構，底下是開源的 OpenRewrite。原片約 36 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=oLSkc0KT_V8)

## 一句話

純 LLM 適合在一個 repository 裡寫東西。維護和現代化是橫切的，中型客戶就有幾百、幾千、有時幾萬個 repository。Jonathan 要的 actor 是確定的：用 recipe 當餅乾模，每次蓋出變異很低的變更。LLM 的新角色是把寫新 recipe 的成本壓到接近零，以及透過 MCP 去問整片 codebase，而不是取代那台機器。

## Netflix 的儀表板沒有讓人動手

[1:10](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=70s) Jonathan 從美國西岸搬到 Miami，覺得時區和天氣都更好。公司 2020 年成立，意外成立在 Seattle：第一個雇用的人在那裡，他就搬過去，最初在公園長椅上工作。公司快五年。OpenRewrite 這套技術幾乎十年，來自他在 Netflix engineering tools 的時候。他要帶組織做大規模變更，例如 Java 6 到 7，以及換掉一套 logging library。他們做了很早期的 internal developer portal，用儀表板告訴人離目標還有多遠。結果幾乎沒有人朝目標行動。問產品團隊要怎樣才肯從一件事移到另一件，答案是：你幫我做，不然我有別的事。功能壓力很大，這類工作永遠在後爐，除非被要求。框架就是從「真的幫他們做」開始的。

[3:51](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=231s) 他後來進 Spring 團隊，創了 Micrometer。也做過 Spinnaker，Netflix 出來的開源，做進階的 continuous delivery。共同創辦人 Olga Kundzich 和他一起跟大型銀行、零售商談進階的 continuous delivery。對方說一年後再談，因為還在把 Spring Boot 1 升到 2，或做別的遷移。問題重複、又到處都有，他們就被拉進去了。

[4:59](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=299s) 他聽到的數字是，大約 30% 到 40% 的工程時間只是在讓燈繼續亮。你用的開源第三方改了 API，就要不斷把應用縫回去，否則它停擺。新寫的 code 愈多，這個問題愈難。Shelter Insurance 是美國中西部一家中型的財產與意外險公司，他們在 backlog 上把 technical debt 和 maintenance 標成不同的東西。他覺得這個區分很細。技術債以前像是我走了捷徑，以後要還。他現在比較認同開發者的位置：就算今天、他舉 7 月 15 日，架構、語言、library 都選到完美，六個月後那件事已經移走了。這比較像車子或房子的保養。不做，就不能期待它繼續運作。

## 同一個變更不要讓人審一萬次

[6:52](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=412s) Simon 問純 LLM 能不能做維護和框架升級，甚至換語言。Jonathan 把純 AI 方案放在 authorship：IDE 裡開著一個 repository，或 CLI 像 Claude Code 指著一個 repository，請它做一件事，可能是功能，也可能是語言對語言。它會在那一個 repository 上花時間。維護和現代化是橫切的。就算中型客戶，也是幾百、幾千、有時幾萬個 repository。`cd` 進一個目錄、叫 Claude、commit、clone 下一個，擴不到這個問題。

[9:20](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=560s) Context window 變大有代價。Context window 和 attention 是反向的，這是 LLM 的根本機制。窗愈大，愈容易混亂、愈不聚焦。他把一本書丟給人、說讀完要考試，針對性會比問一個很具體的段落差。這個取捨他不覺得會消失。就算焦點很窄，系統仍是 probabilistic。變更可以很好，他自己也狂用這些工具。但同一個變更要打到幾千或幾萬個 repository 時，你不會想把人類 review 的量級擴到變更的量級。最後要的 actor 是 deterministic。做那台機器、那個餅乾模，蓋出變異很低的餅乾，這台機器本身可以用 LLM 幫忙做出來。

[11:13](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=673s) 解法是混合的。他十年前開始做的 OpenRewrite 是 refactoring engine，是一個程式，每次輸出確定，也有 unit testing，用來蓋住 code 裡本來就有的變化。以前碰到框架版本遷移，得把 recipes 全部寫出來。Spring Boot 3 的遷移，目錄裡現在幾乎有 3,400 個 recipes。Recipe 是一個會做特定 code 變更的程式：相依、property，或 API 從這樣改成那樣。升級說明裡的每一步，就是複合 recipe 裡的一個獨立 recipe。開源 recipe 有幾千個。問題剛好對上目錄，現在就能用。客製變更要寫新的。以前的成本是去學這個 framework。值不值得寫，看你要改 60 處還是 60,000 處，報酬會遞減。他現在看到的是，LLM 讓寫全新客製 recipe 的成本接近零。

[14:15](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=855s) 幾天前一位銀行的工程主管說，他們要從 on-prem 基礎設施改到 container。很多應用把 log 寫進檔案，現在得寫到 stdout，因為 container 上的 Splunk agent 會把 stdout 收走、送到 Splunk。Jonathan 把這段話轉成一段文字，叫它計畫 recipes、寫出來。他心裡知道這會是一大堆 logging 設定：logback、Log4j，以及各種變體。Claude Code 排出 6 步、10 步或 15 步，開始把 recipes 做出來。OpenRewrite 很宣告式，測試是 assert 改前和改後的文字，model 很難在測試上作弊。它先寫測試：logback 改前改後、Log4j 改前改後，再寫 recipe 的主程式，直到測試過。從他轉寫那段話，到前六個能用的 recipes，大約 20 分鐘。部署到那個 tenant，在將近 10,000 個 repositories 上跑，看出哪些應用要改、哪些用這一種、哪些用那一種。然後變成回饋循環：這個變更我不喜歡，去改 recipe。

[17:18](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1038s) 他們有一個 OpenRewrite recipe 叫 compilation verification。先跑另一組 recipes，再驗證那個檔案改完之後編譯器會過。不必跑整份 build，這條 recipe 本身有特別的做法。它當裁判：照 release notes 改完，看最後是漏了還是改錯，LLM 可以吃這個循環。很多變更，尤其設定，沒辦法只靠編譯、甚至常常也沒辦法靠 unit tests 驗證。

## 中央丟下來的 PR，像親戚的忠告

[18:15](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1095s) Simon 問，這會不會在每個專案開 pull request，然後誰來一起合併。Jonathan 說大規模變更時，開發者最自然想到的就是 PR，或大量 PR。他們區分 pull-based change 和 push-based change。他觀察大量 PR 的社會動力學：產品團隊收到中央團隊的 pull request，像收到姻親不受歡迎的忠告，只是在找拒絕的理由。節日餐桌上岳母說你胖了、該做點什麼，你會說忙、說自己在變老。若是自己照鏡子，覺得該去健身房，就比較願意聽。所以他們把問題以 IDP 的方式放在開發者面前：你相對目標在哪，這是資訊，不是命令。在你方便的時刻有一個按鈕，recipe 已經帶你走了 99% 或 95%。按下去。看到的是個別產品團隊對自己那一塊開 PR。接受率比中央發出的大量 PR 高很多。

[20:55](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1255s) 固定成本看變更種類。Log4Shell 這種高衝擊、時間很短的事，適合 push-based：由上往下，有人大量開 PR，有人拿著剪貼板確認大家都做了。Review 很簡單，到處是同一種變更。看過一張，就可以大量 commit，不必看每一筆。相依的漏洞修復也類似：直接和 transitive 的相依，若修復只離你正在用的 minor 一個 patch，就推過去，幾乎自動化。若修復是一個 minor 之遠，就比較看情況。Jackson 的 minor 可能讓應用不能用。同一條 recipe 兩種設定：一種全自動，一種也許一週一次，要一點人審。Simon 的背景是 Snyk。他說開發者被通知某個層級有漏洞、要升哪個直接相依才能吃到修復，幾乎是干擾。能帶著信心走完 99%，安全那份 backlog 就輕很多。Jonathan 說這是支柱之一。他們早就知道的兩根是應用現代化和安全漏洞修復。

## 第三根：在幾十億行裡問「這支 API 用在哪」

[23:30](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1410s) 第三根比較意外，是大規模的 impact analysis。OpenRewrite 一開始只想改 code，他沒想過大規模搜尋。Moderne 成立一兩年後才明白，recipe 除了改 code，也可以把某件事標成找到了。搜一個 API 的某種用法，全部找出來。用的是 lossless semantic tree，不只是 abstract syntax tree，而是編譯器知道的一切，包括所有 transitive dependencies。所以可以準確指出一支 API 的每一次使用。再下一步是要整體畫面：這些 call site 在幾千個 repositories 裡長什麼樣。OpenRewrite 加了 data tables。Recipe 依自己的 schema 吐出一列、帶欄位。很多 repository 各吐列，匯進同一張表。查一支 API，結果是 CSV 或 Excel：每一次出現、在哪個 repository、哪個業務單位。就算 recipe 是在改 code，也開始產這些表，因為有用。

[25:26](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1526s) 時間拉到 2024，LLM 有了 tool、function calling。他們手上、也是社群手上，有幾千個會產各種 data table 的 recipes。把描述文字寫好，就能把這些 recipe 栓成 model 的 tools。問的是整個 code，不是眼前這一份。Model 讀 recipe 的描述、選項、data table 是什麼意思，選一個、跑、再把輸出聚合。他說這是過去八到九個月的大海嘯。Simon 確認這是透過 MCP server。Jonathan 說兩邊都有：可以直接聊天問 code，不一定是一個 repository。最大的客戶之一，管理中的原始碼將近 50 億行。也可以暴露成 MCP。上週他在一個 microservice 裡要加 middleware cache，而且要跟 codebase 其他地方一致。Claude 的訓練集不知道什麼叫一致。這個 repo 自己沒有 middleware cache，也推論不出來。Claude 就去問 MCP：找出這種 middleware cache 用在哪，一次從不同 repository 拉一個例子，再用那些例子寫這邊的新 code。

[29:23](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1763s) 對客戶他們做 mass ingestion，把整個 codebase 收成 lossless semantic tree 的成品。資料模型和開源 OpenRewrite 相同，只是序列化到磁碟。MCP 因此可以在很大的業務單位上運作，不必一個一個 parse。私有 code 做的事，開源也做了，目前接近 40 億行。這是免費服務，字幕裡的網址聽成 app.mio，透過 GraphQL API。Model 可以同時看專有 code 和他們知道的開源，方式對等。

[30:23](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=1823s) 他認為價值一直是這份資料：不是語法樹或文字，而是編譯器知道的一切。這很難產，因為得側身插進編譯器，而對任意的企業 repository 去叫起編譯器，本身就是一層層的問題。這座很深的 code data lake 不會消失。用法會繼續變。讓 coding agent 去查 code 在別處怎麼用，是一兩年前他想不到的用法。Spec-driven 他覺得已經是現在。他自己用 coding agent 一定先叫它把計畫寫出來，寫到磁碟上，不要只留在記憶裡，做的過程中繼續改那份計畫。最近他還會把文件用 submodule clone 進 repository，若有空間就更新文件，並且一邊做功能一邊寫部落格，解釋這次一起做的事。三件事同時發生：更新文件、寫那篇說明、維持一份做過什麼和要做什麼的詳細計畫。

[33:28](https://www.youtube.com/watch?v=oLSkc0KT_V8&t=2008s) 肩上的責任是把這座湖擴大：一直加語言，深深接上它們的工具和編譯器，抽出盡量密的資訊。過去幾年加了 JavaScript、Python、C# 之後，發現這些語言的 lossless semantic tree 和當初的 Java 高度重疊，於是讓它們延伸 Java 的那棵樹。有些原本為 Java 寫的 recipe，會以令人意外的方式自動在 C#、Python、JavaScript 上運作。例如 find SQL，找含有 SQL 的字串字面值，或字面值的二元串接。因為這三個語言沿用同一個 literal 結構，那條 recipe 也適用。每加一個語言，像在世界另一個角落開燈。想試的人，OpenRewrite 是開源的。網站他說是 moderne.ai，也連到 OpenRewrite 的文件；直接去的話是 docs.openrewrite.org。
