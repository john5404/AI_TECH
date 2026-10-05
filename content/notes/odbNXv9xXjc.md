# Simon Martinelli - Lessons from Spec-driven Development - AI Native DevCon June 2026

片長 31 分 38 秒，英文手寫字幕。Simon Martinelli，瑞士的 Java 顧問，做商業應用 17 年，客戶是保險、批發、零售、政府和大型企業。他不做工具、不做產品。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 spec 聽成 spectrum，把 Vaadin 聽成 voting，把 Quarkus 聽成 quarks，把 Java 聽成 travel，把 Confluence 聽成 confidence；下文用校正後的詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=odbNXv9xXjc)

## 一句話

他用 Windsurf 很快做出一套志工系統，下一個活動要改功能時，他卻不知道自己實作了什麼。Spec-driven 對他不是 Kiro 那種從 PRD 到 plan 再到 task 的工具鏈。企業裡的人要一起讀得懂規格，所以他用 system use case 和 entity model，跳過 plan 和 task，直接生成 code。規格不夠，還要對準技術棧的 skills、MCP 和 guardrails。現代化也不是把 COBOL 換成 Java。工作會往需求移動：規格要兩週，做出來可能只要幾分鐘。

## 做出來了，卻改不動

[0:33](https://www.youtube.com/watch?v=odbNXv9xXjc&t=33s) 他從瑞士小鎮的體育俱樂部講起。他們做田徑，兒童比賽已經 45 年。他從 1997 年開始幫他們寫軟體。排名這件事以前要 12 到 15 人，後來只剩他和軟體。2024 年夏天，瑞士公共假期，俱樂部的人說志工管理系統過時、不能用了，又聽說有 AI，叫他重做。字幕把那聲招呼聽成 Sam。他秋天開始用 Windsurf，很快就有一套系統。問題是音樂祭的人也來要。他不知道自己實作了什麼，也不知道怎麼改功能去滿足另一邊。

[2:09](https://www.youtube.com/watch?v=odbNXv9xXjc&t=129s) 這把他帶到 spec-driven development。他在當時還叫 AI native、現在是 Tessl 的網站上，讀到 Simon Maple 的文章。字幕把題目聽成 AI 90 development，吸引他的是 spec-driven。這個詞很舊，2000 年或 1990 年代末就有；跟 AI 一起用則當時還新。他做的是商業應用，所以看法和工具圈不同。

[3:21](https://www.youtube.com/watch?v=odbNXv9xXjc&t=201s) 生態系裡有流程，也有工具。流程是他自己的 AI Unified Process。工具有 Amazon Kiro、GitHub Spec Kit，以及字幕裡的 BMT method。Tessl 在 2025 年也做了 spec-driven 工具，字幕聽成 Tesla。他覺得這些都太以開發者為中心。企業裡你不是一個人單打，字幕把那個詞聽成 solar planner。你在大組織、不同角色裡。網站就叫 AI Unified Process。

## 利害關係人讀得懂的規格，才拿去生成

[4:19](https://www.youtube.com/watch?v=odbNXv9xXjc&t=259s) 綠地通常從 vision 開始收需求。他很少做綠地，後面會講 brownfield。International Requirements Engineering Board 做了一份 AI for requirements engineering，字幕把名字聽成 microgrid angel，裡面有 prompting guide 和 skills，在研究怎麼用 AI 加快 requirements engineer。

[4:55](https://www.youtube.com/watch?v=odbNXv9xXjc&t=295s) 他要的規格，AI 懂，專案裡所有利害關係人也懂。他停在 system use case。現場很少人聽過。這套東西 1987 年就有，後來是 UML 和 RUP，1980 年代末到 1990 年代初。他 2000 年代初在 Swiss Railways 用它當利害關係人和開發者之間的溝通規格。當時有效，他就問為什麼不能跟 AI 一起用。另外要一個 entity model，比較像 domain model，看你做不做 domain-driven design，最後通常就是資料。再加上軟體架構，就可以直接生成 code。

[6:10](https://www.youtube.com/watch?v=odbNXv9xXjc&t=370s) 和工具的差別在這裡。Kiro 是 product requirements document，生成 plan，再成 tasks，最後 AI 實作。他跳過 plan 和 task，用 use case 和 entity model 直接生成。Use case 只定義行為。長相要另外的東西，例如用 MCP 接 Figma。做 API 就要 API spec。順序也不同。他多半做 full stack。有 UI 時，test-driven development 很難，因為得先知道畫面長什麼樣才能寫測試。做 API 他就一定先寫測試，再用測試導出 code。最後總有 review。要審多少是風險管理，AI 或手寫都一樣。

[7:44](https://www.youtube.com/watch?v=odbNXv9xXjc&t=464s) 他正在幫瑞士最大的批發公司現代化一套 ERP。模組的關鍵程度不同。產品或庫存壞了，用的人可以去喝咖啡。訂單那一塊壞了，公司可能賠錢；字幕前一次把它聽成 auto management，後面他明確說 order management。審查的厚度按這個分。

[8:34](https://www.youtube.com/watch?v=odbNXv9xXjc&t=514s) 綠地的規格由 requirements engineer、product owner、business analyst 做出 entity model 和 use case，也可以從需求導出。再 review，有 definition of done。軟體工程師、AI 和需求工程師一起決定規格何時做完。然後才是 agent，帶著 skills、MCP、guidelines、guardrails。因為沒有 plan 和 task，中間這層最重要：skill 必須對上結果，知道 code 和測試該怎麼生，而且不是永遠同一套。他目前六個客戶都在用這流程，skills 全不同。有 React 加 Spring Boot，有 Vaadin 加 Spring Boot，有 Angular 加 Quarkus，也有內部框架。他後來不再為更多技術棧加 skill，組合太多，那是公司該做的事。

## 現代化是重想工作方式，context 要放得進一個垂直切片

[10:22](https://www.youtube.com/watch?v=odbNXv9xXjc&t=622s) 他很少做綠地。企業應用現代化他做了大約八年。流程反過來：從 code、測試和文件抽出 use case 和 entity model。文件通常散在多個產物裡，字幕把其中一種聽成 confidence，上下文是 Confluence 那類東西。業務的人審過，再生成新 code。有人說可以直接轉，例如 COBOL 到 Java，Anthropic 也這樣講。他說那從來沒成功。三十年前就做過 COBOL 到 C 或 C++，那是 lift and shift。現代化不是換技術，是重想人怎麼用軟體，把原來沒有的功能加進去。使用者的正面回饋來自這裡：不是從一種技術換到另一種，而是對著 use case 和 entity model。兩年前專案開始時的規矩是：同一個系統、另一種技術、不加功能，免得引入新 bug。現在可以加，因為改的是規格。

[12:11](https://www.youtube.com/watch?v=odbNXv9xXjc&t=731s) 為什麼不是 user story 或 PRD。Use case 定義得很清楚，存在很久，AI 知道怎麼寫。有 precondition、postcondition、scenarios，一條主要成功路徑和替代流程。一則 user story 通常只是 use case 裡的一條 flow。他的經驗是 use case 比較好，因為比較大。Postcondition 像 acceptance criteria，可以放進測試裡檢查這條 use case 最後是否成功。

[13:05](https://www.youtube.com/watch?v=odbNXv9xXjc&t=785s) 示範是 Spring PetClinic。Spring 用它，是因為以前 Java Enterprise Edition 有 Pet Shop，他們想留在寵物這個行業；字幕把 Java 聽成 Travel。他反向工程出 use case 的 UML。Actor 是 visitor 和 clinic user，也是系統裡的角色。Use case 分成模組：歡迎頁和醫師、飼主、寵物、就診。反向工程他就停在這一層。Entity model 通常從資料庫模型來，圖上是型別和關係。

[15:52](https://www.youtube.com/watch?v=odbNXv9xXjc&t=952s) 這些專案裡他們不 prompt。什麼都做成 skill，不斷改，在組織裡分享。問題是大家不一定用同一個 agent，所以要有 skill 的發佈方式。示範用 Claude Code，而且跑在 IDE 外面，只是為了 demo。CLAUDE.md 裡東西不多，重要的是指到指南：架構怎麼切、套件長什麼樣、用哪些工具。多數東西在 skills。他的流程自帶 skills，兩層：一層主要給規格，一層給他在用的某一個技術棧。

[17:39](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1059s) 架構決定這套做法好不好用。過去大約 15 年大家做 microservices，他的客戶多半做得很天真，盯著 micro，服務太多，變成分散式的 big ball of mud。一家保險公司大約 500 個 microservices，也大約 500 個 micro frontend，前後端一對一。那是最糟的情況。AI 要改系統的某一塊，context 得在一個地方，至少在你工作的那台機器上。五個微服務再加一堆元件，拼起來就很難。

[18:54](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1134s) 有人從微服務走回 monolith 或 modular monolith。他說停，那也不對。巨大的單體可以有幾千張表、很多模組，context 太大。他要的是比較少人知道、大約和微服務同時出現的 self-contained system：把應用切成垂直切片，UI、業務邏輯和資料庫通常在同一個 repo，或至少同一個專案。現代化時這樣切，AI 就能正好做在那一塊上，skills 也依技術而異。庫存用他 demo 裡的 Java 網頁框架 Vaadin，訂單管理的前端是 React。不同的 self-contained system 可以用不同技術。但若能停在同一個棧，例如只做 Java，或只做 JavaScript / TypeScript，skills 只要為一種技術做和維護。客戶常見的是 React 或 Angular，後端再加 Spring Boot 或 Quarkus，skills 得做兩份、維護兩份。

[20:54](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1254s) 對團隊的影響才是大變化。這家公司比較單純，團隊不大，已經在維護模式，不太做 scrum，沒有固定 sprint，看要做什麼功能。規格當輸入，以前 user story 在 scrum 裡也是這樣。他們現在很快，等不了兩個禮拜。規格也許要兩週，軟體不必再花兩週。每個 self-contained system 是一到兩個開發者，最好兩個，好交換知識，一個人做也可能無聊。人數從五到七人降到一或兩人。不再有 sprint，改成 continuous flow，用 use case 以 Kanban 的方式追進度。

[22:13](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1333s) 醫師列表那條 use case大約一分半做完。他不喜歡 PowerPoint，因為一投影什麼都變了。這種簡單列表，系統裡很多。能成，是因為 guardrails。他的建議是永遠不要讓 AI 建立專案。那是在浪費 token，而且很容易得到一套過時的應用。Java 這邊有 Spring Initializr，依賴是新的，也是 Spring 團隊目前認為該怎麼建應用的方式。工具若有 CLI，用 CLI，不要用 AI。規則也不要全部塞進 CLAUDE.md 或 AGENTS.md。蘇黎世一所大學的研究說，system prompt 愈大，幻覺大概愈多。沒有這些檔案，可能比一個巨大的檔案更好。架構可以用 arc42 那種格式寫成文件。Skills 要小，所以內部框架那種巨大文件走 MCP，用 vector search 直接查。迭代做得好，結果會接近確定：刪掉再做一次，結果大致相同。人仍要依風險審查。系統壞了或有 bug 會怎樣，就決定審查加多重，人審或 AI 審都可以。這些專案目前不做 pull request。他們做 trunk-based development，審查是持續的 peer review。兩個開發者一起做，把自己做的部分講給對方聽。

## 工作往左移，改規格是在既有 code 上套用

[25:36](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1536s) 結論那句字幕有點亂。聽得清的是：specs 不夠，還要 harness，以及周圍讓它真的能動的 context。他沒展開、但認為 specs 會很耐久，或希望將來如此。他現在做的是把既有 code 反向工程成 specs。有了 specs，同一個應用可以用另一種技術、另一種 UI 再生出來，也許根本沒有 UI，而是聊天。業務的人可以改系統該怎麼行為，不必找開發者看 code。這會加速開發。問題是目前它只加速開發。需求和規格那一段仍要時間。

[26:39](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1599s) 他在幫政府、議會現代化一套 business case management。Proof of concept 期間只有他在碰 code。兩位 product owner 兼 requirements engineer 在做規格，工作比他多。他在做一條 pipeline，讓他們改 model 檔，其餘自動生成。他說工作往左移，移到 requirements engineering。以前若做 scrum，需求大概兩週，實作再兩週。現在是兩週，然後五分鐘，再兩週，大概是這個形狀。最重要的是你得懂自己的架構和領域。這會接到開發者該怎麼訓練，他在這裡停。

[28:03](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1683s) 問答第一題：是不是先用 PlantUML 生圖，再從圖生出詳細的文字需求和 markdown。字幕把 PlantUML 聽成 plant。綠地他會從需求目錄或 PRD 開始，先生 use case 圖，拿去 review，這張圖甚至可以提示怎麼把應用切成模組，再往下生細節。Use case 就是把 user story 裡的步驟寫全。需求工程師和 product owner 大量用 AI 檢查 use case，找重複和缺漏。他們一條一條做。有人說 spec-driven 是瀑布，他說不是。它就是需求，然後測試和實作，agile 也是這樣。他們不做 big up-front design。

[29:28](https://www.youtube.com/watch?v=odbNXv9xXjc&t=1768s) 下一題：user story 錯了要更新，是整個應用重生，還是再附一份需求文件。他用醫師列表說明。規格寫著顯示名、姓，以及逗號分隔的專科。若分隔方式不對，他還是下同樣的 implement。他們要讀既有的 code。可以扔掉重來，但 git history 會不好看，變更也比較難審。有些人認為 AI 不需要原始碼。他是 Java 開發者，執行的是 bytecode，AI 可以生 bytecode，沒有必須生原始碼的理由。也許。或者將來的程式語言更適合 AI、更不適合人讀。他不知道。目前就是照著手做時的方式：改 use case 或 entity model，然後說把變更套上去。時間到了，剩下的問題主持人請大家自己去找他。
