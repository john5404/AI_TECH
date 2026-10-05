# Matthias Lubken - Piece of PI – Embedding The OpenClaw Coding Agent In Your Product - AI Native De

Matthias Lübken，做商業流程和自動化用的 AI agent 的 AI engineer，也是創辦人。回到倫敦。片長約 32 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 OpenClaw 聽成 open Claw 或 open Klaus，把 Pi 聽成 pie 或 pipe。

- 原片：[YouTube](https://www.youtube.com/watch?v=Ex1Zu0qel8M)

## 一句話

OpenClaw 看起來會自己學會，是因為 coding agent 有工具、又在迴圈裡跑，碰到不會的檔就用 Unix 工具去看。他要問的是，產品裡能不能嵌進同樣的魔法。Pi 極簡到沒有權限視窗、也沒有 MCP，但你可以叫它把缺的那塊寫成 extension。客戶的報價原型把工具定義、tool call 前後的檢查，和每個 case 的 session log 分開設計。流程保持開放，寄信這種邊界仍由工具本身卡住。

## 語音訊息背後，是工具在迴圈裡跑

[0:38](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=38s) 今年一月有 OpenClaw 這件事。朋友在科隆辦活動，找他演講。他翻 code，找到一個 coding agent，後來覺得它把場面接了過去。兩個月前，包含他自己，沒有人會為 Pi 舉手。他用 Pi 做了一個原型。問題是：怎麼設計系統，讓它交出和 OpenClaw 一樣的魔法。他和 Evan 是一間小 agency，幫英國和德國的客戶做系統。這場還早，投影片看起來很完整，其實只是把 primitive 和 pattern 稍微排開，最後收到 malleable software。

[2:40](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=160s) Peter 和早期的 OpenClaw。當時基本上是聊天介面，能把訊息傳來傳去。他比較意外地送了一則語音。Agent 開始想，然後回了一則文字。從外面看有點魔法。工程師要看幕後。粗略說，agent 有一般指示，OpenClaw 有 AGENTS.md 這些東西，工具則是讀、寫、改檔、bash。這是簡化。它看到那個檔，發現不是文字。用常見的 Unix 指令去看，以為是 wave 檔，再用它知道的 whisper 解，失敗了。指示裡有字讓它想到可以送給 OpenAI API，中間還缺一步：它去找一把 key 才能送。這些在迴圈裡重複，直到目標完成。他又說這是過度簡化。他現在懂了發生什麼，想把這個魔法用進自己的工具。

[4:46](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=286s) 他的定義：agent 是帶著工具、在迴圈裡跑。Coding agent 再加 bash，所以有 Linux、Unix 工具和某種 runtime，也有各種 sandbox。他設計系統時的 primitive 就是：這些東西要怎麼嵌進系統。

## Pi 沒有的，可以叫它自己做出來

[5:31](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=331s) Pi 是維也納的 Mario Zechner 做的，非常小的 coding agent。極簡是它的功能。定義 Pi 的方式是它不是什麼：沒有 MCP server、沒有 subagent、沒有權限彈窗、沒有 plan mode、沒有內建的待辦、沒有背景 bash。想要其中某些，就叫 Pi 做出來。Hello world 是：做一個 Pi extension，在要把 main branch push 到 remote 時先問過。它沒有權限系統，也沒有那些彈窗，但他現在要這個彈窗。它建了檔，permission gate 叫做 pre-push guard，是 TypeScript 和一份 markdown，還有它做了什麼的摘要。之後 push 時會問：允許這條指令 push 到 remote 嗎。Agent 忽然照他要的方式工作。這讓他想，軟體會因此變成什麼樣。

[11:29](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=689s) 他補一句：Pi 嵌在 OpenClaw 裡這件事，大約兩週前起就不再是真的。他們把 Pi 拿掉了，演講標題該改，但那樣標題就不好聽。

## 一個客戶一個 agent，一個 case 一個 session

[7:24](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=444s) 例子不是開發工具，是幫客戶做的原型。他們的報價系統太慢。售後賣零件，詢價信進來，後面很多手工。這件事不是非用 AI 不可，但 AI 讓它簡單很多，長遠也更有力，能多解一些 use case。信箱分析客戶請求，查 CRM 等後端，產生報價和草稿。架構受 OpenClaw 啟發：有 gateway 做路由。每個客戶一個 agent，各自的 prompt，他比的是 SOUL.md 那類檔，但是按客戶拆。每個 case 一個 session。

畫面上是 dashboard：基本 KPI、活動、信箱。他們先複製信箱，之後會放進 Outlook，使用者不必離開自己的工具。信進來就找 case 或建一個。Case 有 KPI、客戶資料、步驟，讓人看得出發生什麼。打開細節才看到底下：system prompt、這個客戶的 context、各種 tool definition。那是深入檢視，不是一般使用者的畫面。Session 裡的步驟看得到 tool call。一個去 CRM 看 case 的實際狀態，一個去 ERP 查零件。兩個都是外部 API，都做成這個 case 的工具。最後是一封 email draft。他們還不直接寄出，使用者可以再改。論點是：審查再寄，會快很多。

## 工具定義是第一個設計決定

[12:18](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=738s) 下面的 primitive 不是只有 Pi 才做得到，別的 SDK 也行，Pi 只是好的起點。他用的是 coding agent SDK，和開發者在桌面上跑的是同一個。你定義 model、工具、session 怎麼用、要載哪些資源。資源這邊，平常啟動會載 AGENTS.md；他改成一套可重用的 AGENTS.md，不同 agent 共用：一份講整體業務，一份偏任務、怎麼查這個客戶，一份是客戶自己的 context，例如折扣。Skills 他們還用得不多，但想法一樣：由他們控制 skills 怎麼載進來。啟動其實很簡單。

[13:56](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=836s) 架構上先想的是給 agent 哪些工具。一般指示可以生出來。系統其餘部分怎麼跟它相處，就是工具。啟動時把工具交出去，大型語言模型決定何時呼叫。你可以引導，最後仍是它決定叫哪一個。現在三個：跟 CRM 談、了解 case 狀態的那個，字幕聽成 K state；查零件的 ERP；以及 email。幾週前他們的講法是：不要讓 agent 猜。Tool definition 要精準、讓意圖露出來、範圍收在這個任務。工具也可以中途換。回到 OpenClaw，魔法是它手上有很多工具：懂檔案的、用 whisper 轉語音的。沒有事先定死的 workflow，而是這些會被叫到的工具。第一個大的設計決定就是定義工具。要實驗。依 model、依你怎麼做，工具有哪些、怎麼用，常常是 agent 自己揭開的。在 Pi 裡很常看到它用 `--help` 去叫工具，或去看錯誤訊息。也可以圍繞這個來設計，讓它去做對的事。

[16:39](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=999s) 不該用的工具就不要交出去。他們有一個叫 Data Box 的工具，用來幫使用者處理這件事，但他說這是普遍的 pattern：指示裡寫不要用這個工具，工具卻還是交了出去，然後驚訝 agent 把資料庫刪了。你給了工具，它就會假定該用。若事先定不了工具，Pi 的 extension 也能引導。他講的是 event：agent 和 session 的生命週期可以掛進去。他們做的 extension 大多在 tool execution，也就是 tool call 和 tool call 的結果。控制不了語言模型會不會叫，那就是魔法；它一叫，就可以插進去過濾，或對結果做點事。他們的例子是起草 email 之後再做一次檢查：地址要在客戶的網域。到目前都是綠的。他們不靠指示，而是確定網域一定對。別的驗證、各種業務邏輯都能放這裡。Agent 怎麼走可以保持開放，某些 guardrail 仍然在。

[19:46](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1186s) Tool call 也適合塞資訊，也就是 context engineering：讓模型拿到剛剛好的量。不是所有資訊都想、或都能事先給，因為有些是動態的。他們可以在做的過程中把查到的東西注進去。

## Session 是一棵事件樹

[20:26](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1226s) 最後一個 primitive 是 session，也是 Pi 的一大塊。Mario 做的是一棵事件 log。你自己用 coding agent 時若走偏、想把那段丟掉，很容易回去。可以走一條路再走另一條，整個 context 還在，也好導航。格式是 JSONL：訊息、model 變更，以及其他。你可以寫自己的自訂訊息，有些會送給語言模型，有些不會。應用的切法是每個客戶一個 agent container，每個 case 一個 session。有了這份 audit log，就可以想別的 agent 處理同一份資訊、重做或改掉某些步驟，因為有人手動或自動做了決定，也可以重用 pattern。他們在試的一件事，是走完 session log，從裡面做出一個 skill，再拿去做 evals。他認為樹狀資訊以後會很有用，但他們還沒怎麼探。

[22:44](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1364s) 這些 primitive 怎麼變成流程，第一個就是剛才那個應用：給它一些問題、一些工具、一些 extension，做成順的 workflow。他覺得會很有力，因為 agent 會適應進來的東西。更原始的一種，是既然有工具和 context，為什麼不給 power user 一個完整的聊天，把嵌進去的 coding agent 用起來。他比的是系統裡的 Cowork。工具和 context 重用，流程卻很不一樣。他們其實還沒有真的在用這個的使用者人物，這比較是形式上的想法。可以用既有 session，也可以開新的，而 session 就是 case。再往下想 session，再加上 MCP 的延伸、MCP UI 和 MCP app，中間可能有一種：不只是聊天，而是用別的方式和 session 互動。零件查詢不再顯示原始 JSON，而是可以互動的介面，例如改需求數量。卡片從一邊混到另一邊。

## 軟體若能改自己

[25:26](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1526s) 他收在 malleable software。一篇他很喜歡、字幕把作者聽成 encode switch 的文章，談的是軟體不該是事先定死的系統，而比較像生態：任何人都能以很小的摩擦，把工具改成自己要的。文章裡的例子是廚房。一支很精巧的切片器；在德國有個頻道整天在賣這種東西。或者就用一把刀。刀要點訓練，但能做不同的事。作者主張的軟體沒有那些預定流程，而是小的、可重用的工具。想法比 AI 老，文章後來接到 AI native。他覺得加上剛才那些 pattern，空間很大。若這些系統能改自己，像 Pi 那樣呢。Extension 只是 TypeScript。為什麼使用者不能說：不要寄出不在客戶網域裡的信。Power user 也許就能改。

[28:02](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1682s) 有人問，power user 自己改軟體，安全怎麼管。不懂，或是惡意，都會有下游效果。他說自由始終要留在邊界裡。草稿信那個工具就是照這樣設計的：系統不能寄信，只能做 draft。最後你控制它能做什麼。額外檢查是他想的那種 extension。有些 power user 只是大量產出，使用者類型不同；另一些人則開始加 guardrail 或自動化。一層在工具設計，一層在 extension。語言模型仍可以因為一個你事先沒想到的理由去起草信；extension 再在外面加一組 guardrail。

[30:28](https://www.youtube.com/watch?v=Ex1Zu0qel8M&t=1828s) 另一人做了一個 Gmail 的 MCP server，問這和 Pi 差在哪。他先說自己做 MCP server 很好。你已經在定義工具，例如一個只讓你在星期六下午建草稿的 Gmail 工具。問題是拿這些工具做什麼。他假定對方是在某個 coding agent 裡用，Claude Code 或其他。他看到的未來是：系統就是圍繞工具和 guardrail 被做出來，power user 持續使用，Cowork 是其中一個例子。一旦定義了 MCP 工具，若把它們嵌進更大的軟體，例如一個郵件自動化工具呢。他的主張是去看 Pi 或其他 coding agent harness，把這些 MCP 工具重用進去，用來做那個軟體。這是這場的核心想法。
