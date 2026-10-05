# Neal Ford - The Intersection of Fitness Function driven Architecture and Agentic AI | DevCon Fall 25

片長 24 分 32 秒，英文自動字幕。Neal Ford，ThoughtWorks 的 distinguished engineer。主持人把他介紹進 Native DevCon，標題寫的是 DevCon Fall 25。主持人沒有在字幕裡留下名字。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 ArchUnit 聽成 ArcUnit，把 cyclomatic 聽成 cyclatic，把 brittleness 聽成 brutaleness；下文用校正後的詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=x4ZLSvVki3I)

## 一句話

用 coding agent 快速做出來的系統，長期維護和架構債很容易被忘掉。Neal 的做法是 architectural fitness function：任何能對某個架構特性做客觀完整性檢查的機制。程式碼裡的循環依賴可以用 ArchUnit 這類工具擋住，但微服務之間誰可以跟誰說話、拆開的資料庫還有沒有參照完整性，沒有現成框架。那些檢查多半是十幾行腳本，去讀系統裡已經有的 log 和資料。企業架構師若把實作細節寫死，專案一改就碎。MCP 讓專案在自己的 meta bounded context 裡提供工具，企業層只表達 intent。失敗不必當成錯誤，而是一場關於設計的對話。

## 架構也要有客觀的真假

[0:09](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=9s) 主持人說，AI coding assistant 和 coding agent 讓人忘了長期維護，以及快速建造時加進去的長期債務。Neal 要談的是 code quality 和可持續軟體眼看要出事，但主軸是把已經存在的東西接起來。

[0:55](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=55s) Architectural fitness function 定義在 2017 年的 *Building Evolutionary Architectures*。像 unit test，但對象是架構能力。定義是：任何能對某個 architecture characteristic 給出客觀完整性評估的機制。範圍比 unit test 大。可以用軟體度量、專門的測試程式庫、monitor、observability。架構不只是 codebase，還有 data、integration architecture，以及整個生態系。Chaos engineering 就是這種檢查。客觀是指結果要是真假，或是一個數字。分散式架構把資料拆開之後，資料庫之間仍想保住 referential integrity，那也是架構問題。

[3:10](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=190s) 他用 cyclic dependency 當例子。元件互相引用，再繞回原來那個。重用其中一個，就得把整團關係一起帶走。一個還好，一百個他就說 codebase 是一團垃圾，中間有個 tipping point。開發者在 IDE 跳出 auto-import 時通常不讀，直接關掉。Agent 更糟：你沒有明確說不要，它就會一直這樣做，因為它不知道這不該做。人不可能逐行看有沒有環。

[4:39](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=279s) 解法是寫一條 fitness function，用懂依賴的 ArchUnit，接進 continuous build。人寫、別人寫、機器寫，codebase 裡都不再有環。這是把護欄放在想長期保住的架構上。他點名的工具：Java 的 ArchUnit、.NET 的 ArchUnit.NET 和 NetArchTest、Python 那邊字幕聽成 Piest Arc、TypeScript / JavaScript / ECMAScript 的 ArchUnitTS、Go 的 Arch Go。

## 現成框架到不了的地方

[6:17](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=377s) 他真正想寫的檢查更難。微服務裡有 orchestrator、order placement、payment、inventory。設計上 domain service 不能互相說話，因為 workflow 的狀態在 orchestrator。它們一互通，狀態就亂。沒有工具可以下載來驗證「domain service 只跟 orchestrator 溝通」。他說這種工具不存在，也不可能存在。架構的問題是變數太多：各服務可能不同平台，通訊可能是 REST、SOAP、message queue、gRPC，資料庫也不一樣。沒有預先做好的框架。很多架構師看到這裡就放棄。他認為那是錯的。

[7:33](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=453s) 他們正在寫的書叫 Architecture as Code，要架構師把整個軟體開發生態系當成 codebase。書裡的口頭禪是：我需要什麼資料，那些資料住在哪。這個問題的資料是 domain service 在跟誰說話，住在它們會產生、而且他可以保證會產生的 log。Fitness function 就是：每個服務匯入過去 24 小時的 log，若不是在呼叫 orchestrator，就是作弊，違反檢查。他用 Ruby 寫。多數這類檢查不寫在實作系統的技術棧裡，而是用小腳本把生態系裡已經躺著的資料拼起來，常常 10 到 15 行。

[8:51](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=531s) Architecture as code 是在找架構和生態系的交會，再用 fitness function 定義那些交會。和 implementation 的交會很明顯，因為架構得寫成 code 才會動。和 engineering practices 也有：monorepo 或一服務一個 repo，兩邊都糟，只是糟法不同，可以寫 code 把副作用壓下去。他還列了 team topologies、integration architecture、enterprise、generative AI、infrastructure、data、business environment。

[10:06](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=606s) 資料那一側的例子：架構師為了 fault tolerance、change control、scalability，把資料庫拆成兩個 domain database。Product owner 說可以，但兩邊都有的 trouble ticket 不能丟。這件事記在哪？他最近一場工作坊，大家的答案都是某張 spreadsheet。驗證則是另一回事。Customers 和 tickets 拆開之後，每張 ticket 仍要對得上 customer。他從 customer 資料庫拿 customer keys，從 ticket 資料庫拿外鍵。Queue 沒有待處理訊息、系統處於 at rest 時，assert TC 是 C 的成員，也就是 ticket 那邊沒有 customer 這邊不存在的資料。這是在架構層驗證兩個資料庫之間的 referential integrity，好像它們還是同一個。應用層他們做了很多年，很好用。企業規模就難了。

## Meta bounded context 讓遠處的檢查變脆

[12:15](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=735s) 他造了一個詞：meta bounded context。Bounded context 通常指領域。專案另外有一層 meta bounded context，是這套東西怎麼被實作出來，高度專屬於這個專案，例如 fitness function 裡那些資料庫的細節。

[12:55](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=775s) Enterprise architect 做的就是架構和企業的交會。他這次要的是 global governance，尤其是全域的 code quality。順帶他給了一個找 AI slop 的單一指標：normalized distance from the main sequence。它看的是用蠻力做出來、缺少抽象、實作細節太多的 code，這種 code 在這個指標上分數差。他說這是他們真正看到比較有用的那種整體治理；cyclomatic complexity 也一樣，沒有 codebase 會因為過於複雜或結構很差而受益。但他們想更動手。最大的全球客戶在 enterprise architecture 團隊裡設了 evolutionary architect，在生態系裡實作 fitness function，從企業層治理。

[14:46](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=886s) 問題從 2017、2018 做到現在已經清楚。Enterprise architect 離應用很遠。檢查若寫死實作，對方一改就壞。遠距離的 fitness function 必須穿過 meta bounded context 去碰實作細節，所以脆。為了無關的原因常常壞，人就會覺得不值得，然後停做。

## MCP 分開 intent 和實作

[15:01](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=901s) Agentic AI 和 MCP 是他看到的解法。MCP 之前，直接呼叫得知道精確的 API、metadata 和格式。他把 MCP 說成最好的 integration hub：可以查 capabilities 和 tools，再反復接起來。Primitives 裡，tools 做得到資料庫呼叫；resources 可以給 log 和檔案內容，他做 log 比對時常常從這裡拿；還有 prompt libraries。

[16:13](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=973s) Enterprise architect 仍想保證專案的資料庫有 referential integrity，但不想寫死細節。經由通常負責執行這些檢查的 service mesh，說一句「我要驗證 referential integrity」。專案在自己的 meta bounded context 裡放一台 MCP server，知道怎麼做，並把這件事提供成工具。收到要求時，它知道意思是：Q 等於零時，assert TC 是 C 的元素。之後若加上也有 ticket、也有外鍵的 experts，fitness function 的實作要改，intent 不用改。MCP 把 intent 和 implementation 分開。他說 service mesh、agentic capabilities、fitness functions 加在一起，就是 fitness function-driven architecture，也很大膽地叫做 21st century enterprise architecture。

[19:20](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=1160s) 還有一個附帶用法。架構師設計 domain、元件、依賴、coupling 和 cohesion，交給開發者。做出來之後，ticket assignment 消失了，customer registration 不在，多了一個從未設計的東西，時程壓力把乾淨設計做成混亂。Architecture as code 讓人用 pseudo code 定義 domain 和關係，並 assert 類別只住在那些 domain 裡。LLM 的第二個 L：把這段 pseudo code 交給它，請它產生 Java 或 .NET 的 fitness function，驗證的是目錄結構。規則留在 pseudo code，Java、Golang、.NET、Python 都能生成對應檢查。他比成建築圖：房間怎麼排、水管走哪。這是要讓架構師和開發者合作，做出來的是架構師要的東西。

[21:54](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=1314s) 和 unit test 像的地方：最好每次變更都驗證，確認正在蓋的東西沒被弄壞。不像的地方：失敗是設計決策的對話佔位，不是責罵。多了一個元件不是 error，是一場該發生的對話。他不想罵人，只想知道它發生了。Architecture as code 是他在乎的架構變化的快速回饋。

[22:51](https://www.youtube.com/watch?v=x4ZLSvVki3I&t=1371s) 和 test-driven development 像的地方：邊做邊驗證。不像的地方：它是 evolutionary architecture 的機制，不覆蓋每個細節，只覆蓋重要的。他說這不是要做架構警察。企業層定義真的想落地的規則，但不進入實作細節。Agentic AI 讓這種整體治理不必一直因為脆弱而壞掉。細節他們剛發在 O'Reilly 網站的一篇文章。Architecture as Code 這本書，他說明年稍後應該會出來。結束時他說還剩 30 秒。
