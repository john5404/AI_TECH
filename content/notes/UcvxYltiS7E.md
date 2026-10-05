# The Creator of Spring on Why AI Coding Agents Will Wreck Your Codebase (If You Let Them)

Rod Johnson 是 Spring 的創造者，也是 Embabel 的創辦人與 CEO。Simon Maple 主持，這集約 57 分鐘，英文手寫字幕。開頭有一段倫敦 AI Native DevCon 的宣傳。字幕把 Guy Podjarny 聽成 Guy pigeon，把 OpenClaw 聽成 open claw，把 Jürgen Höller 聽成 Jurgen Hurler，把 LangGraph 聽成 land graph，把 LangChain 聽成 Lange chain，把 anti-pattern 聽成 Andy pattern，把 Kotlin 聽成 Colin。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=UcvxYltiS7E)

## 一句話

企業應用已經寫在 Java 裡，LLM 只是一次很簡單的 HTTP 呼叫，不在你的 Python process 裡跑。他把「全部改寫成 Python」看成搞錯了相鄰的系統。Coding agent 可以寫掉他大部分的 code，但你不能 vibe 嚴肅的軟體。設計若沒有人看著，每加一個功能就再爛一點。Embabel 把規劃放在模型外面，用遊戲 NPC 的確定性演算法，並且跟 Java 的型別綁在一起。MCP 推了產業一把，他仍然不把它當萬用鎚。

## 音樂博士回到寫 code，是因為產業到了轉折

[2:04](https://www.youtube.com/watch?v=UcvxYltiS7E&t=124s) Simon 說 Rod 是自己的英雄之一，也是 fellow Java champion。Rod 來自澳洲，現在又住雪梨，在倫敦住過七年。Spring 被創造出來時，後來變成 SpringSource 的早期大多在倫敦，之後他在灣區又住了幾年。第一個公司名字是 Interface 21。Simon 當時在 IBM，Andy Wilkinson 等人過去。辦公室在 Southampton，他記得是 Romsey way。Rod 說那個辦公室在 Southampton 是奇怪的意外。他們喜歡想成是把人解放出來，從 IBM 帶走 Andy 和幾個很好的工程師。Andy 還在，做得很好。Spring 故事裡讓人驚訝的是人留很久。其中 Jürgen 在 2003 年初加入 Spring 專案，Rod 說他大概從 2003 年五月起就全職做 Spring。收購之後他過得不錯，這是他想做的，而且做得特別好。對 Java 社群是好事。

[4:11](https://www.youtube.com/watch?v=UcvxYltiS7E&t=251s) Simon 對一段背景很好奇：Rod 有十九世紀巴黎鋼琴音樂的博士。他是鋼琴家。第一個學位主修音樂和電腦科學，決定不了要繼續哪一個。然後拿到很慷慨的澳洲政府研究獎學金，去做音樂博士。他在雪梨音樂院教過幾年音樂史，但一直想寫 code。90 年代中他寫過 Windows shareware，當時那是一件事，中等成功，人們真的寄支票來，他很意外。若繼續當音樂學者，他看不出怎麼買得起雪梨的房子。於是決定一個是嗜好、一個是職業，而且他原本放反了。後來忙到十年沒彈琴。這不是奇怪的繞路。他大概 80 年代中第一次寫 code 之後，沒有很長的時間完全不寫，因為會一直回來。他愛這個。現在大部分 code 是 coding agent 寫的，興奮感還在，因為他仍在控制、仍在創造和塑造。只要結果是他要的，大部分 code 不是他打的，一樣滿足。

[6:20](https://www.youtube.com/watch?v=UcvxYltiS7E&t=380s) SpringSource 被收購之後，他做董事會、做投資，然後推出 Embabel。讓他覺得值得做的，是產業到了轉折。他記得是 GPT-3、ChatGPT 突然變得有用，不再重複自己、不再掉進奇怪的洞。怎麼讓這件事對生意有用，是個很難的問題，動機很強。在那之前大約兩年，他為了自己的樂趣寫了很多 code，個人專案進了 TensorFlow 和不少低階的東西。他已經對 AI 有興趣，自然變成想做一個框架來解這些問題。

## LLM 不在 Python 裡跑，相鄰的系統才決定語言

[7:38](https://www.youtube.com/watch?v=UcvxYltiS7E&t=458s) 今天很多企業團隊被要求幾乎放棄 Java、改寫成 Python。Simon 說 Rod 寫過，這是 Python 在 AI 裡支配的最後一年，而且這是錯的方向。Simon 同意，問為什麼。Rod 說完全不合理。有一個生意問題，要看它相鄰的是什麼。你大概在跟資料庫、企業服務、既有 codebase 工作，另外還有新的東西，LLM。那些相鄰關係裡，LLM 不是在你的 Python process 裡跑。宇宙會先結束，Python 才執行得了 inference。LLM 只是一次非常簡單的 HTTP 呼叫。任何一種語言對這麼簡單的呼叫有天生優勢，他完全無法理解。人們慢慢在懂。例如 OpenClaw 不是用 Python 寫的。Peter Steinberger 用他偏好的語言寫。很多企業應用顯然是 Java。關鍵的相鄰是既有的商業邏輯、那些應用在互動的企業服務。正確的事就是從 Java stack 發出那些很簡單的 HTTP 呼叫。

[9:24](https://www.youtube.com/watch?v=UcvxYltiS7E&t=564s) 人們會這樣想，是把資料科學、AI，和商業應用搞混了。它們完全是不同的事。回到 Java、做 Embabel 之前，他寫了大量 Python。大約兩年前，他的 Python 比 Java 流利得多。若像當時那樣用 TensorFlow，他會用 Python。微調、某些模型訓練、某些資料處理和擷取，他也用 Python。重點是任何任務都該用最適合那個任務的語言。把生成式 AI 接進既有應用，這個任務在應用已經用 Java 寫的地方，比用 Python 好得多。Embabel 幾乎全是 Kotlin。多數例子是 Java，他們花很多力氣讓 Java 使用者完全無縫。使用者大多在 Java。不會看到奇怪的東西，是很順的 Java。字幕裡 companion、a Kate 那句不完整。他做核心框架時用 Kotlin，做範例應用時用 Java。Java 風味的 API 好到即使在 Kotlin 裡用框架，也差不多一樣。整合很順，Kotlin 可以直接進 Java。

[11:19](https://www.youtube.com/watch?v=UcvxYltiS7E&t=679s) 他大概十三年前做過很多 Scala，喜歡那個語言。但跟 Java 的整合很痛，每次碰到 collection 都是Misery。Kotlin 的創造者在 Java interop 上做得很好，也沒有 Scala 那種 breakage、缺少 binary compatibility。Kotlin 很好用。Java 自己也進步很多。他很煩人們愛用 Java 的稻草人，假裝 Java 沒有演化。他跟 Guy 天天吵，Guy 總說 Java 很古老。Rod 覺得 Guy 其實是在說他。

## 從上面下令用 AI，以及從來不問軟體是用什麼寫的

[12:27](https://www.youtube.com/watch?v=UcvxYltiS7E&t=747s) 幾週前，或他覺得可能是一兩個月，兩人都在 Atlanta。Rod 在 Devnexus 做閉幕主題，字幕聽成 Nexus。他談 AI 幾乎是被栓在外面的一層，沒有整合進既有系統，於是造成失敗。他看到的最大問題，是從最上面下來的命令：所有東西都要 AI。人們在做 AI 專案，沒有真正的商業理由，也不確定 AI 適不適合。一個主要的反模式是：我們必須多用 AI。為什麼，為了什麼。他熱愛也著迷於 AI，但任何一件事若能不用 LLM 就做成，當然就不用。更便宜、更確定、更快。你想得到的每一個指標都會更好。組織第一件該想的是怎麼從這裡走到那裡。澳洲一個客戶從很小的事開始。網站上有一張表，客戶填了之後要有人評估他們說了什麼。95% 是很簡單的事，複雜到沒辦法用正則表達式之類去解析，但仍然相當簡單。他們拿掉那個摩擦，在那 95% 裡讓客戶立刻往下走，不必等員工。他覺得這是很好的起點，慢慢把成績記上板子，建立信心。

[14:52](https://www.youtube.com/watch?v=UcvxYltiS7E&t=892s) 另一個問題是他說的 alien stack，傷在兩處。技術上一切都更難。而且常常是錯的人在驅動策略。不懂核心生意、從沒看過核心商業應用的人在定策略，而你要賦能的正是那些應用，這不會動。去年他跟一家非常大的澳洲公司的首席 AI 架構師聊過。對方是 Python 的人，禮貌地聽，興趣不大。通話結尾，大概想客氣，說我確定我們某處有 Java，我去問問。Rod 沒在那家工作過，但以澳洲產業裡多數人會知道的程度，大約 70% 是 Java 寫的，其餘是 .NET，而且正在淘汰、改用 Java。這個人做了快一年，從來沒想到去問：順便問一下，我們的軟體是用什麼寫的。顯然不重要。他對這會怎麼發展沒有好感覺。

## 介面可以 vibe，嚴肅軟體不行

[16:15](https://www.youtube.com/watch?v=UcvxYltiS7E&t=975s) Simon 說開發者和實作之間的斷開愈來愈大，過度依賴 AI，很多決定被卸出去，知識留在實作那側，人被抽象掉。Rod 說開發者要掌握的技能，是用這種新方式工作，同時留下真正要緊的控制。有些類別的 UI app 可以 vibe，反正是用過即丟，agent 非常擅長。你不能 vibe 嚴肅的軟體。他是 coding agent 的重度使用者，大概最多自己寫 5% 的 code，也許更少。但他非常在控制裡。從設計看，agent 錯的時候多於對的時候。他知道這點有不同看法。他認為仍然理解架構、仍然知道在發生什麼、不要太信任，是極重要的。一進到複雜應用，若沒有那種架構上的監督，很快變成一團。Agent 會很高興地加新功能。每加一個，設計就再退化一點，code 變得很討厭。

[18:11](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1091s) 那個 5% 不是他故意少寫、好保住控制。開源專案裡他寫的超過 5%，他大概偏保守。某些內部應用更接近 95% 是 agent 寫的。但你讀那些 code，會以為是他寫的。設計非常清楚。他會坐在那裡看 diff、看輸出，非常頻繁地停下來說：不對，你把這個寫死了，那應該是一個 strategy，拉出來。他相信這可能產出比只有人、或只有 coding agent 更好的結果。跟 coding agent 一起寫，比他自己能做的快很多，品質也比他自己單獨做稍好。若全部留給 coding agent，他相信品質會戲劇性地變差，最後大概也會更慢。

## 規劃用遊戲 NPC 的演算法，因為順序不能交給模型

[19:41](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1181s) Embabel 的 planner 是路徑尋找，GOAP，goal oriented action planning。原本為遊戲裡的 NPC 做的。關鍵是它是確定的。LangChain 那類框架，最終是 LLM 在決定下一步、決定規劃。LangGraph 公平地說是確定的，你事先定義狀態機。他一開始用的就是那個做法。但要先談為什麼要規劃。你當然可以把一堆工具給模型，讓迴圈處理。有些情況這樣說得通。要把一個商業流程自動化成一致、可預期的方式，那就不夠。你不知道 LLM 會用什麼順序呼叫工具，也不精確知道它會給什麼參數。所以讓使用者把流程拆成若干步驟。步驟可以呼叫一個或多個 LLM，也可以只是 code。這件事 LangGraph 做、他口中的另一個 AI 框架做、Microsoft Semantic Kernel 也做。把事情拆小是熟悉而且被證明過的想法。也表示步驟裡的 LLM 可以按需求用不同的。例如夠小、又高度敏感的事，可以用自己防火牆後面的本地 LLM，客戶資料永遠不出去。好處很多。問題回到這些步驟怎麼排、用什麼順序。

[22:17](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1337s) 狀態機做得到。他在做很接近後來成品的東西時發現兩件事。加狀態和轉移很瑣碎，要擴充就得重新接線。型別也有問題：狀態轉移通常跟個別 action 的型別需求是正交的。GOAP 有兩點不同。它是動態的，規劃發生在 runtime。它跟型別系統完全整合。人們可以做自訂條件，但 action 的順序通常由 Java 方法的參數和回傳型別定義。一個 action 在當下沒有它需要的參數時，絕不會被呼叫。GOAP 本質上是 A*。先辨認一個目標，再看哪些步驟能從目前的世界狀態走到目標，做法是把 action 串起來。目標有前置條件，世界狀態裡必須為真的條件。Action 有前置條件和預期的後置條件。前置條件是絕對的。那些條件沒滿足，不能宣布目標完成，也不能呼叫任何 action。後置條件本質上是承諾：我會造成這個副作用。Planner 先從目前世界狀態找出到目標的計畫。它也可以說沒有計畫，這是合法的，而且值得知道。於是它不會做沒有意義的事。然後執行第一個 action。它會列出能達成目標的 action，執行第一個，然後重新規劃。每執行完一個，就看當時的世界狀態，問現在怎麼到目標。大多數時候快樂路徑會成立。Action 承諾執行後某些事為真，planner 檢查世界狀態是否如預期，再走下一步。這完全自動化。Java 開發者通常不必知道 planner 的內臟。他們提供輸入的方式是定義他們叫的 action method：在 Java 方法上加註解，參數和回傳型別基本上就給了 planner 串接的資訊。有些情況還要自訂條件，進一步控制流程。到一個目標可能有一條以上的路，它可以選最便宜的，因為你可以給個別 action 指定成本。成本甚至可以是動態的。若某個 action 要呼叫的系統負載很重，可以把那反映成動態成本，它可能自動換一條路。這是 runtime、依當下世界狀態決定的。

[26:15](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1575s) 因為很確定，你可以問為什麼做成這個決定。他們可以給你當時形成的計畫，以及世界狀態裡什麼東西讓他們形成那個計畫。Planner 和整個 Embabel 會發出很多事件。你可以寫 listener，把它們持久化，或放進你要的稽核日誌。你可以解釋它為什麼做一件事，並確保每次做同一件事。當然，一旦進到 action 步驟裡呼叫 LLM，那就不會完全確定。另一方面，這讓你把呼叫的尺寸配對。若像一個 bot 那樣，三頁的 prompt 再加上他說的 32，字幕沒有說明 32 是什麼，你永遠不會有完全的可預期。若是很小的 prompt、三個工具，會高度可預期。顯然不是 100%，但你花在 prompt engineering 上的時間會少非常多。整體上系統變得更可解釋、更確定。

## MCP 把工具這件事推開了，Plan A 仍是直接暴露你的 stack

[27:55](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1675s) 大家曾把 MCP 當成解決 agent 的黃金子彈，字幕聽成 MCC。開發者還沒看到的缺口是什麼。他說 MCP 在促成整個生態系上扮演了極重要的角色，也是催化劑，讓多得多的人理解工具能做到什麼。然而他有點是 MCP 的懷疑者，有幾個原因。第一，若你在做前面說的、用 AI 賦能一個企業系統，為什麼要繞過 MCP，而 Embabel、Spring AI 或 LangChain4j 都能輕易把 Java 方法暴露成工具。既然那麼容易，為什麼要多跳一個圈。尤其你還能在領域物件上暴露工具：你已經用 repository 之類拿到正確的領域物件，現在暴露的這個東西，不太容易經由 MCP 暴露。所以第一個想法常常是，我可以用自己的 stack 暴露它。為什麼不暴露一個 Java 方法或一個 Python function，然後就這樣做。這不只 Java stack 如此，但在 Java 裡大概更重要。

[29:46](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1786s) 第二，MCP 的理由是它是專門為 agent 設計的 API 規格。若是 API 規格，我們已經有 OpenAPI、Swagger、GraphQL。為什麼需要一個新的。MCP 的論點是因為它專門為 agent 設計。他最近開始得到的結論是，對任何一個給定的 agent 完全正確的東西，很可能是那個 agent 獨有的。例如可以有一個 MCP server 暴露一個服務，但若已經有 OpenAPI spec，你也可以連上它，用那份 spec 做出形狀符合你這個迴圈需要的工具。他確實認為 MCP 對產業往前走是很大的淨收益，但不是一種尺寸適合所有情況。很多時候直接跟 API 規格工作更說得通。Plan A 永遠應該是從你現在的 stack 把邏輯暴露出去。中間有一段請聽眾訂閱。

[31:47](https://www.youtube.com/watch?v=UcvxYltiS7E&t=1907s) Simon 提到 Karpathy 的一則推文，說模型跑在它們上面的產品前面。Rod 在 Embabel 做編排層，是不是已經落後模型。有趣。看他們怎麼建造，coding agent 的進步比他預期大得多。十一月底、十二月有一次相當戲劇性的跳躍。模型確實在變好，但很多根本問題還在。若你在自動化商業流程，把規劃從模型的控制裡移出來、用某種確定的做法，他認為仍有價值。可解釋性仍然重要。模型上面的框架、agent harness，仍然非常重要。好例子是 Claude Code。Sonnet 4.6 比以前的模型好非常多，但 Claude Code 也好非常多。今天的 Claude Code 對比四五個月前，工作方式完全不同，而且因此更有效。他不覺得聰明的模型和聰明的 harness 有衝突。兩邊都要進步。你一定會看到模型吃掉 harness 的情況：確定性不重要、給模型一堆工具、有點不可預期也沒關係。那個空間他認為跟企業應用特別不相關。

## 他看得懂架構，所以能糾正；context 一大，它就忘

[34:05](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2045s) 今年一月他提過，自己的 Claude 流程有很多設計上的來回，很長的規劃，然後才寫 code，結果常常比手寫好。他也提過 Claude 不懂某些東西，一則推文裡的例子是 companion object。用 Claude Code 建 Embabel 的一部分，而 Claude 不完全懂架構時，人在那個迴圈裡是什麼感覺。他說能動，是因為他完全懂架構，而且常常糾正它。他確實擔心，開發者若愈來愈常選簡單的路、不去理解。他覺得自己在一個很甜的位置：完全懂架構和 codebase，現在很懂這門語言，Spring 也懂得很清楚，stack 的各部分他其實都知道。那使他能有效接手控制。他會很擔心不懂這些的人。關於寫 code，他不認為開發者該把很多時間花在寫 code 上，因為把注意力放在你獨特加值的地方，槓桿大得多。AI 會不會給他一個他沒想過、而且更好的設計。不常有。有用的是來回討論。確實有不少次，在討論一個提議的變更時，它指出他沒想到的問題。他覺得它做這件事，比想出原創點子好。原創點子大概不是它的強項。整體他非常滿意。

[36:48](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2208s) 也有挫折。過去幾天一個內部產品，他在每一層做相當精細的測試基礎設施：用真的 LLM、Testcontainers 的資料庫、真的 LLM，以及把所有工具做成假的。字幕把 LLM 聽成 alarms。Claude Code 做得驚人地差。他認為一個原因是它沒看過這個，因為這大概是相當新的測試形式。要讓 coding agent 有最大的自主，你得對測試執迷。這既是它看過的測試量更極端，也是有些測試類型它大概以前沒見過。儘管指示清楚，它仍掙扎到令人意外。Simon 問 skills 和 context 有沒有幫上，讓建議更接近他要的。他試過一點 skills，也試過 CLAUDE.md。不幸的是，coding agent 在 context 變大時會忘記。很奇怪的一點是它一直想在 code 本文裡放他討厭的寫法，他比較想用 import。字幕聽成 FCN 和 inputs。那件事寫在 CLAUDE.md 裡，大約 50% 的時間它仍然忘記。那是 agent 必須讀的，甚至不是漸進式的學習。就是注意力掉下去。

## 大語言不會因為訓練資料就永遠贏，生產環境的理由也沒變

[38:51](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2331s) Simon 讀過他在 The New Stack 的文章，說 TypeScript 是今天最重要的語言，很大程度上是因為它對典型 JavaScript 做了什麼，那句字幕不清楚。既然他認為今天最重要的不是 Java 而是 TypeScript，怎麼同時主張建在 JVM 上。他說 TypeScript 非常聰明。以前靜態和動態型別的語言，某種程度上在收斂。多數現代 Python 大量用型別提示，Python 的型別系統現在其實變得相當好。TypeScript 顯然是在 JavaScript 上加了一層型別。他覺得它漂亮、很重要。還會不會說它是最重要的，要看應用的類別。很多種從零開始的應用，他大概會用 TypeScript 做伺服器，配 React。企業應用則不是。沒有那麼多寫在 Node 上，也不該有那麼多寫在 Node 上。看 JVM、Java、Kotlin，那個類別的應用會得到一整批真正有價值的東西。TypeScript 語言再漂亮，在那裡不太增加相關性。現代 Java 絕對比他大概說那些話的時候更好。Kotlin 是很值得考慮的優秀語言。它和 TypeScript 相當不同，但他會說大致並駕。他仍然想念 union types。他可以長篇抱怨 sealed hierarchy 絕對不如 union types。Kotlin 裡也有一批比 TypeScript 更好的東西，所以他說它們並駕。TypeScript 的另一個問題是，雖然做得非常好，底下仍然有一層瘋狂，有時你會碰到，而且藏不住。Kotlin 是一個現代語言，坐在更穩、更可預期的東西上面。

[41:50](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2510s) 五年內 AI 的進展會不會打破這些。對他來說不尋常，他不知道自己的意見。他可以說服自己語言不重要，也可以說服自己語言重要。首先，很多人想像訓練語料會讓暢銷語言有天生優勢，而且會被鎖死。那絕對不是真的。他用 coding agent 的三門語言是 Java、Kotlin 和 Python。哪一門 agent 做得更好，沒有疑問，是 Kotlin。理由完全不是你會想的。Java 和 Python 都存在了很久，而且過去幾年演化很快。你現在不該寫 2019 年的 Java，更不該寫 2019 年的 Python。訓練資料多到你當然可以說永遠用 var、用加強的 switch、Python 永遠用型別提示，但你是在跟那堆訓練資料的重量對抗。他不是說它們不好，對 Java 和 Python 仍然非常非常好。Kotlin 明顯更好，讓他意外。Kotlin 沒有演化那麼多，因為它一開始就是現代語言。早期進去的人大概也相當熟練。外面沒有那麼多很糟的 Kotlin，不像 Java 或 Python。所以暢銷語言不會因為訓練資料就被鎖死。LLM 對任何它看過夠多的東西都非常好，而我們聽過的任何程式語言，它都看過夠多。那接下來的問題是，為什麼不把每件事都寫成對那件事最完美的語言。前面說過，有些事他絕對不會用 Python 寫、而會用 Java。LLM 既然在每門語言上都是大師級，為什麼不讓每件事用理想的語言。這個服務用 Rust，那個用 Go。還有什麼值得繼續用 Go 跑。他個人覺得沒有。問題是我們在微服務熱潮裡看過的，還有其他成本。現在你在維護上得到一整批成本。除非我們願意完全信任機器，而他主張不該，他不認為那是好主意。從 stack 本身，以及人要維護它。安全的版圖每多一種語言、或多一個被反映到多種語言的函式庫，就乘一次。他大概落到這個想法：至少此刻，事情不會改變那麼多。我們選擇語言和 stack 的理由，大概也不會改變那麼多，因為把它們放進生產、在生產裡為它們負責，這件事沒有改變多少。

## 開源要有生意，Spring 活過收購是因為有人全職修不刺激的東西

[45:48](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2748s) Embabel 是開源的。他提過，支持開源專案的公司從第一天就需要商業模式。Embabel 最可能是 open core。他認為開源的支援模式歷史上就很難，有了 coding agent 之後會難非常多。框架上面會有產品。他們還沒準備宣布，但他覺得會比框架高相當多。目前的想法是把框架當競爭優勢，用來做甚至可能不是面向軟體開發者的產品，而是更面向一般的知識工作者。框架本身是 Apache License，跟 Spring 一樣。歡迎社群貢獻。有活躍的 Discord 和 GitHub issue。請大家來貢獻、加入社群。

[47:20](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2840s) Spring 活過 VMware、Pivotal，現在是 Broadcom 的收購。很多開源專案在收購時枯萎或死掉。是不是只因為 Java 生態裡的聲量和社群。他說第一次收購是 2009 年底，那時 Spring 已經是怪物，巨大的慣性。Simon 說自己就是在 Java 裡開始的。另外有幫助的是，有相當數量真正熟練的開發者被付錢全職做 Spring。不刺激的事會被修好，因為修它們是某人的工作，興不興奮都一樣。他仍然堅信開源真的受益於背後有一門生意。Spring 可靠、是相當穩健的軟體、裡面發現的嚴重問題會很快被修，部分反映了這一點。他們不依賴志願者。社群貢獻當然很好，但背後有那種專業性是重要的。Simon 說那是完整的產品式開發。

[49:02](https://www.youtube.com/watch?v=UcvxYltiS7E&t=2942s) 快問。JVM 上 Python 世界不知道自己錯過的、最被低估的是什麼。效能當然是，但他更認真的答案是寫在上面的 code：商業邏輯、領域模型，在理解關鍵生意上有incredible 的價值。關於 AI agent、多數開發者會反推的不受歡迎意見，大概是他對 MCP 相對的懷疑。不是認為 MCP 不好。是 MCP 變成了那一把鎚子，人們到處在找釘子。告訴一個被要求去學 Python 的 Java 開發者什麼。去讀他的部落格。他有一系列把 Python 例子和 Java 例子對照。給老闆看其中一個，或者更好，自己寫一點，證明 Java 的 code 跟 Python 極具競爭力。已經在生產中的專案，LangGraph 還是 Embabel，只能選一個。先問是 Java 還是 Python。若是 Java，一定選 Embabel，否則就是把 alien stack 帶進來。Embabel 目前是 0.3.5，相當接近 API 穩定。從現在到 1.0 若有東西壞掉，他會意外。大概接下來四到六週會到 1.0。老实说他不認為採用它是很大的風險。若有一個 Java 專案，卻帶進完全不同的 stack，再讓它去跟 Java 的商業邏輯說話，對他來說風險大得多。等你把那些做完，Embabel 已經 1.0，你會很氣自己。

[51:09](https://www.youtube.com/watch?v=UcvxYltiS7E&t=3069s) 今天開始的全新企業專案，Kotlin 還是 Java。看團隊大小。直覺是少於 20 人，會認真考慮 Kotlin。更大、而且他們還沒有 Kotlin 的技能，就留在 Java。Simon 問現在從 Java 學 Kotlin，學習曲線還有沒有以前學 Scala 那麼陡。他老实说不知道，因為他來到 Kotlin 時，做過的 Python 大概更多。回到 Kotlin 之前他做了幾個月 Java，但他在 Java 以外的語言做了太多，不是從那個起點來的。絕對比 Scala 容易，多數東西都比 Scala 容易。他覺得這門語言相當好學。另外兩件事。每個開發者原則上該每一兩年試著學一門新語言，因為他認為這改善你怎麼想。其次，從來沒有這麼容易。LLM 可以幫你很快學會任何語言，門檻明顯降低。他沒有一本 Kotlin 的書，也沒讀過。Simon 說讓 LLM 批評，比叫它創造，錢花得更值。學語言時，叫它描述發生了什麼、為什麼這樣做，有時比叫它做完再自己猜更好。Rod 說兩者相近。尤其你是有經驗的開發者。他學一門語言時，常常問 LLM：我知道的語言裡這個特性，在這門語言的對等是什麼。例如 Python 裡有沒有 TypeScript 那種型別寫法的對等，字幕聽成 type codes。你若已經能解釋概念，LLM 可以出色地把那些概念對到一門特定語言上。

[53:29](https://www.youtube.com/watch?v=UcvxYltiS7E&t=3209s) 每天用的最愛 AI 工具，不是 Claude Code。大概是 Claude desktop。有一堆工具可以做競爭研究，他用它做一整個範圍的事。Spring 上他做錯、在 Embabel 會不一樣的一件事。很小、但有趣：logging。他想在 Spring 上事後加上「log 來自事件」這個想法，太晚了。Embabel 裡他們做了。這保證所有事件是完整的。你可以把它們透過 SSH 串出去、聽它們，也可以改變 logging 的個性，讓 log 看起來像 Yoda 在說話。小事，有趣。某種程度上 Embabel 的風格接的是現代 Spring，加上一些在 Kotlin 裡更容易做的東西。例如他們不用很多 builder，在 Kotlin 裡可以更優雅，即使從 Java 來用的人也是。最後一問：若五年後 Embabel 不存在，是什麼殺了它。他完全沒有想法。因為五年後，人還在參與寫應用，還是違背了他的建議、讓機器完全接手。他會說，這絕對是最後一波由人來選擇的框架。選擇會愈來愈由我們的工具做出。我們處在幾乎獨特的環境，五年後，甚至一兩年後，都很難說。Simon 提到最近一集有人說，任何人試著預測兩年以上，會完全偏掉，字幕把名字聽成 Thomas drunk。他們第一百集剛把 Guy 一兩年前的預測拿出來對過，很好玩。Rod 說這是有趣的談話。

[56:14](https://www.youtube.com/watch?v=UcvxYltiS7E&t=3374s) 片尾說這個 podcast 由 skills 和 context 的 package manager 帶來。主持人是 Guy 和 Simon，製作人 Tom Dowler。它也是社群，每月在倫敦市中心的 Tessl 辦公室有聚會。字幕把網址聽成 Tesla IO。
