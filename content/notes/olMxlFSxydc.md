# Transforming Dev Practices with Kiro’s Spec-Driven Tools | Nikhil and Richard

Simon Maple 主持。來賓是 Kiro（AWS）的產品負責人 Nikhil Swaminathan，以及 principal engineer Richard Threlkeld。片長 68 分 52 秒，英文自動字幕。字幕把 Kiro 聽成 Kira、Kuro、Hero，把兩人的名字聽成 Nikil、Thrrell。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=olMxlFSxydc)

## 一句話

Vibe coding 把幾天的功能壓成一小時，也把決定留在意識流裡。Kiro 不想再做一個 agentic 編輯器。他們要把 specification 從形式方法專家的事，變成任何開發者都能用的行為描述：requirements、design、tasks，放在 repo 裡，和 code 一起演進。人仍可改 code。下一階段他們看的不是更快寫完，而是團隊怎麼審、怎麼對齊、怎麼把線上的問題帶回開發。

## 一小時做出來，然後不記得自己決定了什麼

[1:14](https://www.youtube.com/watch?v=olMxlFSxydc&t=74s) Nikhil 在 Kiro 團隊大約六個月，感覺像好幾年。Simon 猜產品做了一年半，Nikhil 說當時是七月，大約十三個月。Richard 是團隊最早的一或兩個工程師，大部分時間在 specs，也做過和 Amazon science 團隊的研究。Kiro 的標語是 agentic IDE，幫你做最好的工作。他把它拆開：過去一年到一年半，agentic IDE 變很流行。開發者用自然語言叫 agent 生成 code。以前要幾天或幾週的功能或 prototype，現在幾乎幾小時。這也讓 vibe coding 流行起來。他把它想成給寫程式的人用的 ChatGPT，來回把功能做出來。

[4:30](https://www.youtube.com/watch?v=olMxlFSxydc&t=270s) 快的代價是把傳統 SDLC 和團隊日常的做法短路。他在 Amazon，之前也經營過新創。做功能時，常常要花幾天甚至幾週寫需求和設計才開始寫 code。就算一個人或小團隊協調少、動得快，還是會先想自己在做什麼。Vibe coding 把這件事改掉。一個人也能一小時做出東西，做完卻在想：我做了什麼、做了哪些決定。你移動太快，不喜歡就再改一句。和 agent 的來回有時就是意識流，要過一分鐘才回神：我到底完成了什麼。這是 Kiro 要解的問題。他們不是要再做一個 agentic 編輯器。他們認為和 AI 一起工作的方式會變，spec-driven development 會是往後大家都用的做法。

[6:28](https://www.youtube.com/watch?v=olMxlFSxydc&t=388s) Simon 說，vibe coding 的 code 裡，決定、該有的行為、假設、以及 LLM 自己的選擇混在一起。別人進來只能猜。Spec 把那層拉出來。Nikhil 比成 Slack：複雜題目常有五六十則的長串，決定留在串裡，而不是一份對齊之後才實作的文件。Simon 補：Slack 是那個時間點的訊息，只對已經發生的 context 為真。Spec 是你看到的那份結果。Prompt 只連接送出前的 code 和送出後的 code，之後再看，那句 prompt 可能已經沒有意義。

## 規格談行為，不是再請一群博士從實作倒推

[8:50](https://www.youtube.com/watch?v=olMxlFSxydc&t=530s) Richard 說，他們不是要再做一個 AI IDE，而是幫人塑造往後的開發做法。軟體工程裡有些從四零、五零、六零年代就在的東西，現在才進場。很多人聽到 specification 會想到形式方法，尤其系統深處的 safety，以及 liveness：系統有沒有朝目標前進，還是違反了某些性質，字幕把 liveness 聽成 livveness。看 code 很難判斷，大程式或 microservice 更難。整個系統要有 read after write，不能瞥一眼 if 就知道。得把定義抬高，執行時還要讓那個 invariant 一路被尊重。

[10:21](https://www.youtube.com/watch?v=olMxlFSxydc&t=621s) 他說傳統做法其實是倒著走。過去大約二十年，很多人很會做底層實作，卻不太能對自己的系統推理。於是再請懂深奧一階邏輯的電腦科學博士，用 TLA、AWS 在用的 Dafny、或 P 這類語言建模，字幕把 Dafny 聽成 Daphnia。他們從已做好的系統往回走，做驗證。Kiro 想把這股力量做成任何開發者都靠近得了的東西。AI 工具常說現在不會寫 code 的人也能寫程式，那是真的。他認為同樣重要的是：本來就很強的開發者，也能得到以前沒有的推理工具，力量是疊加的。Simon 說，開發者的重點不再是誰的 code 寫得最好，而是誰更能把業務邏輯溝通清楚、創造更多。

[12:40](https://www.youtube.com/watch?v=olMxlFSxydc&t=760s) 他對 spec 的答案是：談系統的行為，不是實作。歷史上最常見的是 design by contract：函式的前置條件、後置條件、終止條件、迴圈 invariant。他也提到 Lean 這類定理式規格，基於 dependent type theory，型別和邏輯有對應。那些是用形式語言做的產物。Kiro 走得更高，好讓系統演進時仍對得上這些約束。你在 Kiro 裡看到的頂層需求，用的是 EARS，Easy Approach to Requirements Syntax。不是他們為了把 prompt 自動形式化才想出來的巧思。它是 temporal logic 的延伸，而 temporal logic 又延伸自一階邏輯。這讓他們在背後更能控制 model 做什麼、怎麼驗證、怎麼做設計、再怎麼落到實作。接到 UX 之後，才能把 ground truth 帶進系統。

[15:33](https://www.youtube.com/watch?v=olMxlFSxydc&t=933s) 哲學上有兩點，來自一位英國的電腦科學教授，字幕把名字聽成 Lawrence Tre。一是 circular specification：你幾乎得把東西做完才知道怎麼規格化，可是你寫規格又是為了說出實作是什麼，兩邊來回。二是 observer effect：看見軟體這件事，會改變我們、也改變別人認為它該怎麼動作，連自己過一段時間再看也會變。所以 Kiro 有 vibe mode 也有 spec mode，可以做出來、再規格化、再來回。Simon 說，今天的 prototype 和 agile 就是邊做邊學。若回到 agile 之前、大約十到二十五年前的 waterfall，先寫死規格會比較說得通。和今天的做法比，vibe 和 spec 並存比較合。

## 需求、設計、任務，都是 markdown

[17:36](https://www.youtube.com/watch?v=olMxlFSxydc&t=1056s) Demo 裡，Kiro 是 Code-OSS 的 fork，字幕聽成 COSS，為了完全控制體驗。側邊有 specs、hooks、steering。Hooks 看 codebase，某些檔被碰就動作。他後來列的事件是檔案建立、儲存、刪除，以及手動觸發。像一個執行者：檔案被碰了就做某件事。示範裡有一支文件更新器，source 裡新建 TypeScript 就去改 README。客戶還用來做 component 的 SRP 檢查：新的 React component 不要同時處理太多事。也可以在加功能時把字串做成多語。Simon 說這是在避開以後會跟著你的債。

[18:55](https://www.youtube.com/watch?v=olMxlFSxydc&t=1135s) Steering 是每次和 agent 互動都帶上的規則，vibe 或 spec 都算。Nikhil 接手既有專案的第一件事，是產生 steering 文件。它們會自動生成：產品概觀、根目錄怎麼組織、這是 Next.js、資料層、狀態、型別，還有技術堆疊。這個示範是 React 加 Vite。檔案在 repo 的 Kiro 資料夾裡，就是 markdown，可以提交，也可以自己加。例如 UI 必須用 Tailwind，樣式要符合行銷團隊。早期客戶常問多個團隊怎麼對齊規則，他們說即將做、正在想。Richard 說這些都能組合：hook 可以在 spec 流程的階段、依檔案 glob 觸發；steering 也可以在 spec 流程裡被提到。常見做法是寫一份 steering，讓實作跟著你的 TDD 規則。Nikhil 打一句「讓 workflow 遵守 TDD」，按 refine，Kiro 產生新的 steering 檔，還把含糊的 prompt 改得更好。納入方式可以是手動，或每次都帶。

[23:02](https://www.youtube.com/watch?v=olMxlFSxydc&t=1382s) 應用上有一顆愛心，按了沒有作用。他用一句很粗的想法開 spec：要能把項目加進最愛。Agent 產生 requirements 的 markdown。第一版的原則是有意見、但要能改，steering 可以換格式，預設要合理。每個需求是一則 user story 加驗收條件，驗收條件用 EARS。他當 PM 的經驗是，Amazon 的 PR/FAQ 常常寫不到系統怎麼運作的細節和邊界，和工程團隊合作時，拆成 user story 和驗收條件最有用。故事是高階的：瀏覽商品的顧客想把東西標成最愛，以免再搜一次。工程團隊會問：能不能再按一次取消、要不要顯示數量。空清單要有空狀態。他可以在檔案裡改，或在聊天裡改。他個人偏好讓 LLM 改 spec，也會用自動完成自己打。他刪掉數量那條，說這幾乎是在對需求做 vibe coding。他們還想讓驗收條件更好讀，以及兩條需求衝突時怎麼讓人看見。Richard 說，大團隊可能有十到二十條，要比對邏輯矛盾，那是以後的方向，好讓專案在團隊流程裡走得順。

[30:11](https://www.youtube.com/watch?v=olMxlFSxydc&t=1811s) 需求是 what，設計是 how。Kiro 會讀既有 codebase 再寫 design markdown。他們內部在大量自己用：新功能先在 codebase 裡生出需求和設計，再拿這些產物和團隊坐下來決定好不好。一般會有架構、狀態管理、既有元件要加強、新元件、資料模型。這個 app 用本地資料。還有錯誤處理、測試策略、實作路徑。他可以改成現在只做 unit test、不做 integration。有取捨就寫在這裡，和團隊決定。他們的流程是把需求和設計當產物，在團隊裡把細節熨平。

[33:53](https://www.youtube.com/watch?v=olMxlFSxydc&t=2033s) 設計和需求衝突，目前是人手動解。設計應該反映需求。他把數量加回去時，設計也要跟著更新。Richard 說，他們用產生出來的需求，加上其他 context，以及 AWS 代管的 Kiro API 裡的一些處理，把東西往下一個階段捲過去，字幕用了 curry 這個字。接下來 Nikhil 會秀任務清單。客戶可以改設計、改到違反某條需求，系統仍會繼續做出實作計畫。他們做了一年、和人一起用之後，認為這樣可以。若每次都擋下來、對著需求重驗，開發體驗會很差。真實世界裡，你擁有的領域知識有時多過文件寫得下的。工具若把路堵死，摩擦會疊加。他們選擇給彈性，不禁止那個動作。

[36:13](https://www.youtube.com/watch?v=olMxlFSxydc&t=2173s) 任務清單是實作計畫，把需求和設計拆成可執行的項目，寫成 task.md。若用 vibe coding，他會從最上面那句 prompt 開始，生成之後一直改。現在是一條條任務：最愛的 context 和 hook、路由、清單元件、加強既有元件、無障礙測試、錯誤處理、邊界。他說若是 vibe coding，自己大概不會想到無障礙。Simon 問這些任務是給人加的，還是給 LLM 一個有秩序的結構。Nikhil 說是後者。結構幫助它把任務做完、做得完整，早期測試者也是這樣說。人仍可刪掉不想做的任務，例如不要改商品詳情元件。他們故意沒有「全部播放」。早期有人要這個按鈕。使用者測試看到：一點一點做，人比較知道發生了什麼。按開始之後，UI 顯示進行中，人可以跟著看變更，例如 mock storage、測試檔。因為他加了 TDD 的 steering，它先把測試框架裝起來，用的是 Jest，字幕聽成 justest。Simon 說他想看 LLM 當評判、也當 orchestrator，不必人去按每一個開始，比較非同步。他們說這是看過的功能需求。

[42:09](https://www.youtube.com/watch?v=olMxlFSxydc&t=2529s) Richard 指出任務上掛著需求，這是需求追溯：在整個執行的狀態機裡記錄關係，任務一個接一個處理實作計畫時也算。Simon 問，改一條需求，會不會只更新設計和任務裡引用到它的地方。他們正要按 refine，被一個 hook 插進來。

## 人還是可以改 code；spec 會漂，像註解

[45:21](https://www.youtube.com/watch?v=olMxlFSxydc&t=2721s) Richard 最喜歡、也覺得有經驗的工程師會喜歡的，是 context LSP，做在 IDE 和這個介面裡。在 markdown 打井字號，會給出指向檔案的 context。設計文件會變大，或多份設計想共用一塊，像 library import。他常用在 property-based testing。那不是完整的證明，但比 unit test、也比 integration test 有更寬的正確性光譜。他為所用的語言寫小的 markdown。寫 Python 時，hypothesis 是好的程式庫。人很會說性質該成立，model 再把那些性質量化成 code，CPU 去做 fuzz。他鼓勵做進階系統的人用足這個。

[47:37](https://www.youtube.com/watch?v=olMxlFSxydc&t=2857s) Simon 問，做到實作又想改一個實作細節，code 會變成真相、spec 會落後，怎麼避免開發者去碰 code。Richard 說，他們不把人改 code 看成問題。Spec 確實可能和 code 漂開。以後會有更穩的做法，但他不會勸工程師別改。提供 spec mode 和 vibe mode，某種意義上就是在鼓勵。你若是專家，知道要改哪一小塊，就用 vibe 去改那一小塊。生命週期他比成 code 裡的註解：寫下的那個時刻是時間性的，團隊一直改，它還在，也會漂。要把它當系統裡的同類產物，並在周圍做控制。

[49:29](https://www.youtube.com/watch?v=olMxlFSxydc&t=2969s) MCP 在 vibe 和 spec 都能用。他裝了 fetch，設計階段可以請它上網找某個框架或技術的做法。本地 MCP 用一份 JSON 加，可以聊天加，也可以自己改。Agent 決定在哪種模式要不要叫。Simon 問，若 MCP 和 hook、或和 LLM 自己就會的能力重疊，會不會搶。Nikhil 說看得到這種情況。系統不是決定性的，UX 得讓人能打斷：它正在做的時候告訴它改做別的。也可以把「用這個工具寫文件」寫進任務或 hook。

## 先證明什麼行不通，才落到現在這三步

[52:00](https://www.youtube.com/watch?v=olMxlFSxydc&t=3120s) Richard 說，在 Kiro 裡，specification 就是那些產物合在一起，但高層仍是行為。它們必須是可組合的文件：真正的業務案例、人可以放進去的 pseudocode、技術圖、錯誤處理、性質。做產品和做研究是平行的，後來接上。內部有幾版 spec 是大失敗，他們也證明了什麼行不通。Amazon 的 automated reasoning 團隊、形式方法社群是輸入。早期 Amazon 把規格用在支撐 IAM 和 S3 的系統上，字幕把 IAM 聽成 AM、IM。技術之外他最大的學習，是人和工程師之間的來回很多：一邊懂實作，一邊懂怎麼把行為建模。他看過一場內部簡報，辦公室之間畫成三角形，地毯被走薄，因為你在這邊定義行為，再去找實作 IAM 的專家，不斷走來走去。他們要讓人能在系統上這樣迭代。他說這很多是編成制度的知識和 SDLC，不是把某套模式硬塞給人。

[55:10](https://www.youtube.com/watch?v=olMxlFSxydc&t=3310s) 他們最先試的是每份 spec 都走 TDD：先有測試再生成 code。早期測試大致不錯。放到使用者和客戶面前，那通常不是他們工作的邏輯鏈。TDD 很好，如果人真的跟著做。強制之後規格變得很僵，回饋是這對我沒用。下一版是在檔案或資料夾上按右鍵、新 spec，為那個資料夾裡已有的東西生成說明。有趣，但那比較像 steering：描述那裡有什麼，不是拿去做出新的東西。最後落到 Richard 一直在做的 EARS 需求、設計，也看到強使用者已經在跟 agent 工作前做更多規劃、想得更細。體驗以需求、設計、實作計畫為中心。一推出就有不少正面訊號，也有很多問題。現在看到的大概是第四版。核心仍是這三樣。怎麼編輯、怎麼保持同步、怎麼審，他們從技術和 UX 兩邊都還在想，怎麼讓人願意用。

[58:54](https://www.youtube.com/watch?v=olMxlFSxydc&t=3534s) Simon 問不同檔案會不會有不同的主人。他們內部就是在自己吃這套：PM 擁有需求，工程擁有設計。很大的功能需求是需求在 Jira 或 Asana，怎麼帶進來、露出來。怎麼讓協調更好、省掉需求和設計前面的時間，又符合團隊本來的做法。他們不期待每個團隊的 PM 都進到程式編輯器裡做事，所以要看人在外面實際怎麼做，在那些工具裡也幫得上。

[1:00:37](https://www.youtube.com/watch?v=olMxlFSxydc&t=3637s) Richard 說，協調才是難的。他們會給更多控制，讓人看見流程裡的模糊和矛盾，也給更多進入這個 workflow 的入口。他覺得這種工具最有趣的效果，是把注意力從做完之後，移到 code review。Agent 和 model 正在產出很多 codebase，不管批評者怎麼說，對著很多 benchmark，它們正在變好。團隊得對這些東西推理：有效地審重構、審新功能、審變更的安全含意。他認為未來幾年這會是整個產業被照亮、而 AI 編輯器空間目前還沒被碰到的地方。Nikhil 從團隊的問題看：前面把需求和設計定下來，多個團隊一起就更難。審完、軟體到了外面、出了問題，怎麼把問題帶回開發團隊。他們看的是整個生命週期。有些核心問題不會因為 AI 消失：軟體送出去會有問題，怎麼修；需求和設計會模糊，怎麼讓那件事變容易。

[1:04:23](https://www.youtube.com/watch?v=olMxlFSxydc&t=3863s) 聊的時候任務已經做了一批。它很有方法地在產生測試。最愛可以按，也真的出現在清單裡。因為有那份 TDD steering，測試是先做、不是事後補。他故意挑一個簡單功能，而不是示範「幫我做一個遊戲」那種綠地。最愛看起來簡單，裡面有測試、無障礙、很多他不會自己想到的情境。Simon 說，就算不做 TDD，測試大概還是會在任務尾端出現。Vibe coding 缺的是能驗證、能說沒有把別的東西弄退步。這裡測試是預設就來的，每一步任務都能驗證。Hook 也把 README 更新了。

[1:07:22](https://www.youtube.com/watch?v=olMxlFSxydc&t=4042s) 當時 Kiro 在候補名單上，因為想試的人很多。他們說已有數千使用者，候補是為了把體驗做好給已經進得去的人，正在努力把人從名單上放出來。網站是 kiro.dev，字幕先聽成 kirao.dev，Richard 確認是 kiro.dev。Simon 請只聽音訊的人去看 YouTube 上的示範。
