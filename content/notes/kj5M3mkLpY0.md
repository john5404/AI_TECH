# AI-Powered Development: Hands-On Techniques for Immediate Impact with Lize Raes

Lize Raes 的演講，片長 37 分 23 秒，英文自動字幕。這是預錄，因為她擔心正式會議前生產；若你看到這段，那件事已經發生，問答時她可能帶著寶寶。她在 Naboo.ai 工作不久，也是 LangChain4j 從第一天起的協作者，背景是生物資訊與藥物開發，自認是很不會前端的 Java 後端。結尾在 AI Native DevCon 有一段現場問答，主持人沒有在字幕裡自報姓名。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=kj5M3mkLpY0)

## 一句話

她要的是今天就能用的做法，不是再解釋一次模型。ChatGPT 可以生出不能用真臨床資料的測試 JSON，也能在大約 30 秒做出能動的 HTML。LangChain4j 讓你宣告想要的 `LocalDateTime`，不必自己解析日期。模型會錯，所以要讓會錯的 code 和會錯的測試互相抓住，並用一個 query router 決定去文件、資料庫還是網頁。她不認為開發者快失業：機器拿走一些白的區域，人和機器合在一起又長出以前做不到的事。

## 三個今天就能跑的例子

[0:19](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=19s) 她把查詢貼上，免得大家看她打字打錯。第一個來自藥物開發：請給 10 個實驗室醫師在開發 biologic drugs 時會量的檢驗值，JSON。這是一套非專有、不受保護的測試資料。真的臨床資料通常拿不到、不被允許用、也不能拿出來秀。ChatGPT 做得很好，她很高興不用自己打。接著她這個很不會前端的人，請它做一個 HTML 頁，讓醫師輸入 protein identifier，也就是分子名稱，以及上面那些資料，按 submit 送到 `localhost` 的後端，並給使用者 uploaded successfully。她只要一個 HTML 檔，CSS 和 JavaScript 都塞進去，因為他們從來不知道檔案該放哪才找得到。她說自己很懶。貼進一個小 renderer 之後，頁面沒有標題，這點有趣；protein identifier 在。她填一個假值再送出，它回請填這個欄位：她沒規定，它卻把所有欄位做成必填。顏色和標題可以再來回改。這是能動的 HTML，大約 30 秒。

[3:54](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=234s) 現場她常問誰喜歡解析日期時間格式和時區，通常只有幾個搞笑的人舉手。她用 LangChain4j 示範，Python 的 LangChain、C# 的 Semantic Kernel 也能做，現在每種語言都有框架。先接一個 OpenAI chat model，設 key，選 GPT-4，建好就有 API。AI Services 是宣告你要什麼發生，而不是像平常那樣把演算法一步步寫死。她要一個類別，有方法從文字抽出日期時間，回傳 Java 的 `LocalDateTime`。使用者訊息就是：從這段文字抽出日期和時間。用的時候 `AiServices.create`，指定模型。例句是：2024 年情人節的三天前，離午夜只差 15 分鐘，Jane 發現 Jim 更愛他的 IDE。她說現在這些 AI 工具這麼好，這種事真的會發生。跑出來是午夜前 15 分鐘、2 月 11 日。她數 14、13、12、11，對，情人節前三天。不必自己 parse。她要大家知道不總是對：看你用的模型，大約 95% 正確，會犯錯，它終究是 AI。

[7:07](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=427s) 第三個是自然語言轉 SQL。她喜歡自己寫 SQL，但有些應用讓 AI 做很舒服。又是 Java，LangChain4j 加 Quarkus，一個已經在跑的 chatbot，她叫它 Movie Muse，幫她挑片。她要一部 80 年代的 fantasy。它回 Star Wars、The Empire Strikes Back、1980。它不可能本來就知道。背景有一個電影資料庫，LLM 從問題生出 SQL：從 movie 表選名稱和其他欄位，genre 像 fantasy，上映年在 1980 和 1989 之間，並依 rating 排序。她說 AI 做這種事真的很行。

## 會錯就配對，進階 RAG 要有路由器

[8:41](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=521s) 接下來她要人想 meta。LLM 好，但有時錯，而且有補救。它們寫的 code 有時有 bug，寫的 unit tests 也會有 bug；配在一起，兩邊的錯都很快被找出來，而且省很多時間。它們能為自己的解評分、排序，有時值得讓它們再想一次。它們能生成步驟，再讓別的 LLM 或專門模型去執行。它們甚至能決定一個任務適不適合 LLM。

[9:29](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=569s) 進階 RAG 的示意：retrieval augmented generation 是讓 LLM 知道它沒被訓練過的、你的文件脈絡。把和問題相關的文件片段一起送去，它就能依你的文件答得更好。基本 RAG 只用 semantic search，在文件裡找文字。但資料有時在資料庫，剛出來的東西可能文件裡沒有、訓練集裡也沒有，那就該上網。LLM 進場的地方是 query router：這個問題該看文件、看資料庫（schema 若傳給它，它知道），還是上網。它選得很好，也能組合，並把問題翻譯成好的網頁搜尋、SQL，或給 semantic search 的查詢。

[10:54](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=654s) AI 怎麼運作她講得很快。她喜歡的那張是影像分類：像素進第一層，在神經網路裡走，一個節點到下一個節點去多少，取決於權重。架構是神經網路；用大量資料訓練出權重，那就是模型，訓練過的神經網路，然後它做分類。那是示範用的簡單版。真實的影像分類層很多、平行計算很多，通常要 GPU 或更新的硬體。開發者要記住：輸入可以是任何數位化得了的東西，文字、影像，也可以是熱圖，真的什麼都行。模型本身只是一套計算方案，不是安全風險。安全或資料隱私的風險，出現在你把它當成供應商的 SaaS 來用、對方能對你的資料做周圍那些事的時候。模型自己只是在算、在傳。輸出也可以是任何東西：一個標籤、下一個字，甚至深度估計。不同模型周圍可以做很多應用。這是她不覺得我們很快失業的理由之一。

## 生命週期的每一段，以及看完整個 codebase 的 Cursor

[13:30](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=810s) 她先看 AI 怎麼幫 SDLC 的每一步，再看橫跨整個週期的工具。分析與範圍：很多人說客戶自己都不知道要什麼，所以還需要我們，工作暫時安全。她認為這正好是 AI 能幫最多的地方。她試過讓 ChatGPT 扮演完全沒頭緒的客戶；若它知道要幫她取出像樣的技術規格，引導、問邊界情況，做得非常好。這也許是 AI 很強的用途之一：做出好的文字規格，以及給專案管理、開發者、客戶簽核的版本。

[14:43](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=883s) 設計和架構：你得知道最近的框架、在特定點上怎麼比。AI 全都看過，是很好的顧問，幫你做更好的決定。她一直用它建議該用哪些 dependencies，也用它別忘掉邊界情況。實作和文件大概是最多人已經上手的。她喜歡一個預測：2030 年最流行的程式語言會是英文，然後是中文，依此類推。以現在的發展，她覺得可能對。仍會有人非常懂程式語言，就像今天仍有人懂 assembly、也仍被需要。但多數人也許會用英文編程，帶著註解。事情移動得很快。

[15:59](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=959s) GitHub Copilot 或 IntelliJ AI assistant 對你正在寫的樣板很好，但問題跨過類別、和其他部分溝通時會掙扎。有人在改這個，加上 graph RAG，讓答案正確得多。她認為這些 coding assistant 未來幾年會好很多。IDE 裡還有一個她稱為 Devo Jenny 的工具，可以選本地模型來引導寫 code。對受管制的環境這很重要：不是每個人都能用會走到 OpenAI 的 GitHub Copilot，IntelliJ assistant 走到哪她不確定。若要確定 code、也許還有 IP 留在本地，可以用這種工具。

[17:10](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1030s) Cursor 是她個人最喜歡的，因為別的工具掙扎的地方它做對很多。示範是一個 feedback analyzer：用 AI 把使用者回饋拆成主題。畫面上那則同時關於 examples 和室溫。送出後拆成兩則，再分類。影響可能是房間裡 100% 的人，嚴重度只有 10%。後面還有給管理員的儀表板，彙總有多少緊急問題、關於什麼。她要在 gender 後面加一個 profession 欄位，並讓它像 gender 一樣用到整個 app。Cursor 是 VS Code 的複本。她把整個 codebase 拿去聊天，不只當前檔案。這是它做得好的地方：看到整個 codebase，給的是真的聰明的解，不是也許只在一個檔案裡能動的東西。她的小技巧是要求答案用 apply diff。它找到所有要改的檔。`feedback.html` 套上 diff，profession 那格她接受。下一個看起來不好，她跳過。她說通常不會這樣，這次因為真的不好看而拒絕。你總得自己檢查。DTO 裡它加上欄位、getter 和 setter，Java 物件和 `toString` 也加上。開新檔時要先把檔案結構設對，然後可以讓 Cursor 寫全部：SQL、HTML、Java、Python。給既有東西加大功能她也很推薦。做完她通常回到 IntelliJ，因為在那裡她更快。

## 代理人、審查，以及她還沒找到的文件工具

[20:24](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1224s) Devin 有一陣她記得大約 14%，那是 Upwork 任務，真的會被付錢的程式工作，它解了一部分。也有普林斯頓的開源 software engineering agent。那些數字已經是一年多前。同時 Devin 自己的 benchmark 在變好，也有 ChatGPT 的 o1 mini。值得上 YouTube 看它們怎麼運作：基本上是 LLM 或 code model，加上工具，能在 code 裡捲動、到特定檔、改、編譯、看錯誤訊息，很像我們自己解題。

[21:22](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1282s) Replit 當時很轟動，她試了。下一場 demo 她要一個購物助理，請它用 Java 加 HTML 前端。它說不行，只做 JavaScript 和 Python。她希望以後加更多語言。Python 版對一個標準網店，甚至提議要不要做使用者認證和信用卡驗證。她說好，因為她真的不太會。到這裡很好。她接著要微調：後台呼叫一個 AI 模型來決定產品建議彈出什麼。它開始失敗，進到一個迴圈，一團亂。基本程式真的不錯，值得試。生成要一點時間，它也會把東西渲染出來，問現在能不能動、能不能點按鈕、什麼行什麼不行，再依此改 code。

[22:42](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1362s) CodeRabbit 看 GitHub pull requests，也建議修法，有時帶 apply diff。她通常自己找得到一些 bug 或不喜歡的 code flavor，CodeRabbit 再找到她漏的。合在一起比她一個人好。另一個她叫 doot 的，在 GitHub issue 一定時間沒人回時進來，建議怎麼修、怎麼加。例子來自 LangChain4j 的 repository。Google 有人告訴她，那是關於 Vertex AI 的 Gemini 整合，建議真的不平凡、真的好，把他們推上了解這個 issue 的路。字幕裡的 doot，很像後來大家叫的 Dosu，她沒有把名字拼出來。

[23:46](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1426s) 文件她還沒找到真正滿意的工具，知道好工具請聯絡她。文件討厭寫、討厭讀，常常找不到你要的；code 更新了又忘了更新文件。她知道 AI 正適合把這些變容易：自動生成、依你改的 code 知道該更新、以及一個 chatbot，問怎麼做就立刻找到對的部分。測試方面，生成 unit test 超快，它知道要蓋哪些邊界。測試不會完美，但錯了會失敗，你看得到、修得了。自從用 ChatGPT 寫 unit test，她的覆蓋好很多，因為它抓到她想不到的。Selenium 也是：你知道想發生什麼，卻苦於那可怕的語法，AI 在這裡很強。合成測試資料甚至有整家公司拿來當商業模式。部署時人要跟很多伺服器和設定檔互動，每次又有點不一樣，AI 幫忙很大。維護已經有公司用 AI 自動看 log，找安全漏洞或單純的 bug，再回報。Bug 或漏洞被回報後，理論上 AI 可以把它派給對的人，並指出該修的那截 code。她很想聽別人是不是已經有這種工具，但她知道完全做得到。

## 打通孤島，以及膠帶修不好所有東西

[26:09](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1569s) 看整條生命週期，AI 也能橫著幫。那是她夏天前講過的投影片：若能對文字規格、Jira 票、code、bug 報告一起搜，就能打破資訊孤島，不必到處找。有人說這正是 Naboo 在做的，所以她現在為他們工作。示範來自他們自己的 Naboo GitHub repository。一個小外掛，問任何問題。她問怎麼測這個 PR，因為它一如往常有點謎。Naboo 看公司裡的整合：Confluence、Jira、GitHub、Google Docs，找出相關票，一步步告訴她該怎麼測。不必離開工作流程，也不必自己去找文件。

[27:23](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1643s) 不在那個 PR 的脈絡裡，她也可以問：有人抱怨 CRM 的報表生成壞了，客服這邊，這是已知問題嗎。不必到處打電話。是的，有回報，這是 bug 票；它還找到 workaround 指南，以及正在做 hotfix 的討論。她可以再問現在怎麼繞過，懶到連指南都不打開。它給文件裡的摘要。想核對，一點就在 Confluence 打開。

[28:40](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1720s) GitHub Copilot Workspace 她不確定當天是否還在候補名單。它號稱幫整條生命週期。她試過：它只在 GitHub 上、只在 main branch，而你通常不想讓 AI 改那裡，有點煩。它做得好的是，她說要給網店加訂購功能，它先問是不是已經有適當的方法來存訂單產品。她喜歡這點，因為那是一個 POC，她自己留了一些還得回頭的斷點。它找到 shopping database 裡已有 `save order`，但假設 client ID 和 product ID 是同一個。聽起來正像她會做的事，於是她知道該去哪修。然後它給的修法用了根本不能動的方法。她說這些方法不能動，它說那我幫你加上、讓它們真的能動，而不是去看已經有哪些方法。她已有一個 order 物件：客戶、地址、他買的項目清單、總價。綠色是 Copilot Workspace 改的，一個 user ID。她已經有客戶名稱、產品名稱、一整份產品清單和數量。她覺得這有點太蠢，不想處理這種樣板，半年後再回來看這個工具有沒有變好。

[30:24](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1824s) 要小心的事：氣候上 AI 不是最好的，它要很多算力。但模型在變小，品質上升很多。他們有一陣用本地模型跑 code completion，一台 gaming engine、200 瓦，可以服務 200 個開發者。她覺得有趣。AI 會不會像膠帶，修不好就再用更多。看起來很像。膠帶可以漆車、做一件漂亮的胸罩、修飛機，甚至拿來當育兒。最後 AI 或膠帶仍不是每個問題的解。要聰明選應用。Linter 這類東西不必用 AI 就做得很好。

[31:32](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1892s) 我們會失業嗎。她有一張她稱為 H graph 的圖：白的是人能做的一切，黑的是機器能自動化的。機器拿走很多工作，白的區域會變小。有趣的是，歷史上、以及現在會再發生的，是人和機器合在一起能做的多很多，而且總有一塊在以前可能的範圍之外。我們多數人的開發工作，沒有機器根本不可能。她相當確定 AI 會再讓這件事發生。另一個趨勢：電腦和軟體工程一直有讓寫 code 快很多的演進和革命，編譯器、高階語言、框架。你會以為寫得愈快工作愈少。看到的是相反：到現在為止，世界似乎還沒有夠多的軟體開發。她預期這個趨勢會繼續。她希望大家開始在日常工作裡試幾樣，有好點子可以聯絡她。預錄在這裡結束，她說問答見。

[33:05](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=1985s) 現場問答裡，留言提到 Swimm，Thomas 也提到。她說錄音前被人告知、玩過 Swimm，但因為懷孕併發症沒能現場講，現在很高興在。Swimm 能自動生成文件，那是她夢想清單上的一項；也能自動同步，code 一改，文件就更新。有趣的是，code 裡做了蠢事，文件裡會再看到，像一次 bug 修正，然後你說那不是我要的。她也喜歡文件和 code 的連結：在 IDE 裡看得到這段 code 可用的 Swimm 文件。

[34:30](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=2070s) Macy 問有沒有她最愛的、與 IDE 無關的 AI 整合。大家都愛自己的 IDE，要人離開、去一個 VS Code fork，是很大的要求。她自己也掙扎，所以在兩邊複製來複製去。就她所知，還沒有。Devo Jenny 正在從 IntelliJ 移植到 VS Code。除此之外她不知道。她搜過，它們都跟某個 IDE 綁很緊。字幕裡還有 kodum 和 Codium 兩個不同工具，也許更好，她沒有展開。對她來說是 Cursor 的品質：一次走過所有檔案。所以她即使在 VS Code 裡不那麼順，也會過去。那些是 VS Code 的 fork，大概嵌得很深，要移植到別的 IDE 會非常難。她希望有一天會移植。她看到他們募到錢，也許就有人手做這件事。

[35:45](https://www.youtube.com/watch?v=kj5M3mkLpY0&t=2145s) Leslie 問 Naboo 裡怎麼評估 prompt。他們目前在內部做 benchmark，用 ChatGPT 對很多工具和整合生成大量假文件，工作量不小。然後可以人評、讓 LLM 評，或做關鍵字檢查，有點像這些日子評估每一個 AI 回答的方式。Patrick 想多要一點時間，他是下一場。問題是自動化之下測試有多重要。她說若講的是 unit test 和 coverage，你若想大量靠 AI 寫 code，它們就變得非常重要。測試有點變成對抗 bug 的安全措施，因為模型本身不太安全，會生出 bug。測試驅動的設計加上 AI 生成的 code 是很好的組合。她也喜歡測試和 code 都用 AI 生，問題不知怎麼就冒出來。你得非常倒霉，錯的測試恰好用那個方式驗證了錯的 code，然後你漏掉。那非常少見。
