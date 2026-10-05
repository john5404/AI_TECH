# Navigating AI Native Development with Simon Maple

Simon Maple 談怎麼從 code-centric 走到 spec-centric。原片約 75 分鐘，英文自動字幕。字幕把 Tessl 聽成 Tesla、Snyk 聽成 Sneak、Netlify 聽成 Netflix、Dion Almaer 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=NTpu0XuQsDY)

## 一句話

AI 讓你更快寫到 code，也讓需求文件、測試和文件更快脫節。Simon 要的 AI native 是把 source of truth 從 code 換成 specification：intent 加上測試。Code 是某個時刻從 spec 生出來的東西。同一份 spec 可以配上不同的 context，長成不同的實作。開發者還在，因為好架構和好設計是經驗，不是語法。

## Prompt 用過即丟，留下的仍是 code

[0:04](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=4s) 他先謝謝大家在大熱天不去啤酒花園。這場要講他們現在叫 AI native development 的東西。AI 之前，code-centric 就只是寫 code、做開發。也要講 Tessl 的 prompting 學習，然後翻過來：若 spec 是 source of truth，開發怎麼變。最後問 AI native 比 code-centric 多帶來什麼。

[1:29](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=89s) 他是 Tessl 的 founding developer。公司剛過一歲。現場有人聽過 Snyk，字幕聽成 Sneak、SNYK。他開玩笑說那是最大的秘密，現在你知道了，但其實沒人知道。Snyk 的創辦人 Guy Podjarny 到了 Tessl，帶了一批前 Snyk 的創始團隊，他也是早加入的人。他們在做的就是 AI native development。

[2:17](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=137s) 有 AI 仍然可以 code-centric。他為 OpenUK 的工作坊用 Bolt 做了一個小應用：吃 prompt、生 code、依後續 prompt 迭代，每次生成都跑一組測試。System prompt 是你是 JavaScript coder。目標是 pluralizer，吃一個英文單字、回傳複數。他故意用美式英文，免得函式名把模型搞混。第一次看起來短但合理，18 個測試過了。漏的是例外和規則：knife 到 knives、wolf 到 wolves。給具體例子時，模型常只修那一個例子。Prompt 要的是更一般的規則。他叫它考慮 f 和 fe 結尾。它把 f 改成 ves、fe 改成 ves，多了五個成功的測試。再叫它加不變的例外字。他同情非母語者，因為一寫才發現英文有多被揉爛。按更新之後，27 個測試過了。

[6:00](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=360s) 這裡的 source of truth 是什麼。聊天裡加的每一句都是一次性的。每個 prompt 只把 code 從一個狀態帶到下一個。換一個時間再用同一句，沒有意義，因為它只適用於第一個版本當時的狀態。除非你握有那個初始狀態、後面這些 prompt，而且 AI 以確定的方式每次做一樣的事。我們知道它不是那樣。所以這些都是丟棄的，想重用也重用不了。Source of truth 是 code。AI 只是讓他更快到達那裡。他 check in、維護、管理的仍是 code。

[7:02](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=422s) Copilot 他不示範，因為覺得大家都該用過。它不是最早的，但大概是最早進入主流的 coding assistant：打字時用 tab。常常一行或幾行，然後到整個函式，現在做得更多。Cursor 有趣得多。多檔變更，GitHub 現在也做。還有 chat，可以問問題、做更複雜、更 agent 的修改。例子是 Joe 的 code。他說 Joe 就像 Kylie 或 Madonna，大家只叫一個名字。Joe 用 Bolt 寫的，不是 Base44；Simon 自己用 Base44。那是 SimCity 風格。他說建築物要有很多不同的成本和等級。它想要改什麼、改多個檔。他轉述 Matt：盲目忽略它說什麼，accept all，用測試 vibe 過去，然後推上 production。他說這是他從對方學到的，Richard 會喜歡。改了 index、game，accept all，推上去。

[9:21](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=561s) Bolt.new 是另一層 vibe coding：還是 code-centric，會給你看變更，也許事後跑測試，人在 IDE 裡，VS Code 或它的 fork。再下一步是不看 code，幾乎是用點的方式測。他叫 Bolt 做一個用隨機噪音打斷心流的 app，例如開罐聲。Bolt 會想很久，把 token 用掉，先說它要做什麼，再建結構。可以點進 code。他覺得到今天它不太會好好給你一份 diff。Cursor 會問這些變更要不要接受。Bolt 可能只改一兩行，卻重寫整個檔，很難看出變了什麼。它裝了 npm 相依。很有意見：要持久儲存就接 Supabase，幾下點擊，還會改權限和表的大小。部署接的是 Netlify，他先說溜成 Netflix。沒有帳號也能一鍵免費發布，之後再推到自己的帳號。他沒看 code 的變化。預設、控制項、可選的聲音，都用文字改。沒有叫它寫測試，它也沒有測試。同樣叫 vibe coding，層次完全不同，看的是 UI。

[13:46](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=826s) Claude Code 他建議沒玩過的人去玩。空目錄裡叫它做一支腳本，吃骰子表示法，例如 2d6，兩顆六面骰，總和在 2 和 12 之間，回傳總和。全程在終端機。它有一份待辦，做完就勾掉。它跑去某個網站查，他說那很像在賭博。它要用 Python 寫 dice roll。沒有測試，只有原始碼；叫它寫測試它會寫。他答允執行 bash，python 找不到，改 python3。它跑了幾次、帶著預期，看起來能用。還出現他沒看過的 3d8+2，只是末端做了算術。因為是 CLI，可以從別的地方呼叫，他喜歡這個流程。本機上有 code，但他們現在不想看 code，只想看它能跑。這些全部仍是 code-centric。它讓你更快到達 code，也讓你離開那些本來會擋住問題的步驟，因為你寫得更快，忽略 Matt 講的那些好步驟。

## 短 prompt 偷走細節，約束要變成你怎麼開口

[17:03](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1023s) 他在示範裡寫的是播客上那種盡量短的 prompt。Intercom 共同創辦人 Des Traynor 有一句他總是記錯的話，大意是：我們能寫很短就讓 LLM 做事，這反而奪走了把想要的細節講給它的能力。因為短的也能蒙過去，他就這麼做，常常沒放進真正需要的資訊。

[17:40](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1060s) Prompt 有時幫不上。Context 太大，或迭代輪數太多。模型的 context window 現在極大。給那麼多，它幾乎不可能知道該用哪一段。不必靠近窗口上限。大概到四分之一或三分之一，你就會看到價值在掉。Attention decay 要緊。子 token 的任務也難。誰用 LLM 做過 code diff？幾乎不成功，因為一個 token 跨超過一個字元，它很難認出改了什麼。文字操作也差。他放三個 anagram，沒有一個是。其中兩個根本是同一段文字兩次。它不擅長文字，也不擅長數學。有些可以用函式。例子裡它把那個數當成 11 而不是 9。

[19:16](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1156s) LLM 在你把 prompt 讀完之前就開始處理回應，回應在你讀完 prompt 之前就在構造。所以最重要的話要放最前面。留到最後、它已經在造答案，你可能漏掉。兩個做法。一是 prompt sandwiching，像對孩子說話。他九歲的孩子在室內玩足球，他會先說不要玩那個球，中間再交代別的事，最後再提醒一次不要玩球。開頭重要，結尾再提醒。二是結構。Tessl 早期做過嚴格的 XML，後來是在 prompt 裡用 XML 標籤：這些是提供的材料、這是 specification、這是可以參考的 template code，spec 裡可以很容易指到別的片段。模型喜歡這種結構。比一整塊巨大的 code block 更能得到準的回應。

[20:46](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1246s) Macy Baker 在他們的 podcast 和部落格談過 task framing。回到模型還沒讀完 prompt 就開始造答案。約束寫在最後：「不要用任何外部相依」。你要的是一個軟體元件，而它最想做的就是用元件。例子是一個 JavaScript 套件，內容是 markdown 規格。訓練資料裡大量例子用第三方相依。約束放在結尾時，它讀到前面就已經在用那些相依來構造。他們跑起來幾乎總是用了第三方。可以把約束搬到最上面。Task framing 更進一步：不是下禁令，而是把任務框成你要的樣子。「不要用外部相依」變成「一個 self-contained 的 JavaScript package」。那不是約束，是你要的套件風格。Self-contained 就不會用第三方。

[22:31](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1351s) 細節給得愈多，你期待它在愈小的集合裡找結果。只給你在乎的約束。LLM 很會填空。只說你超級在乎的，其餘用後面的迭代做小改。另一件是他們叫 model say 的做法。一次把 context 全部灌進去，模型會說這問題很有趣、讓我想想。他們只要答案。他叫它改 code，它回「我更新了 code」再加上一堆話。這很像他的小孩：你說一件事，他們把回應扔掉。重要的是先把 context 放進這段對話，然後問一個很直接的問題，只抓住那個回應。等於先用 context 把模型備好。模組化也很重要。問的範圍要小，再組合，就像今天做軟體、元件互相重用。Prompt 也一樣。不要什麼都丟給 LLM。認清該用在哪、不該用在哪，應用裡和應用外要有平衡。

## Spec 活著，生成的 code 只是那一刻

[24:42](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1482s) 離開 code-centric，談 spec。他回到那個 prompt、生 code、跑測試的場景，這次用 spec 的方式。仍然可以用 prompt，因為可以用 specification assistant 幫忙生 spec。版本之間的動作仍是丟棄的。該留下的是 specification 本身。它是 source of truth。從它生出來的 code 只是這份 spec 存在的那一刻的 code。模板可以寫他在乎的功能、API（吃一個字、回一個字）、以及一批測試案例，然後從那裡生 code。他叫它做 pluralize 的 spec。它給了功能、API、測試案例。直接從 spec 生成，第一次好得讓他意外。他說那是一種絕對糟糕的語言的 51%，他說的是英文，不是 JavaScript。之後不管用 prompt 還是直接改，狀態留在 spec 裡。他可以從這裡生出任何他要的，也許是一個做同樣事的 Java 應用，spec 不必改。某些詞像 function 也許會動。若用語言無關的 OpenAPI 風格，可以跨語言，甚至跨不同口語的複數規則。

[27:50](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1670s) LLM 很神奇。他說做一個簡單的 to-do 頁，它做出來。打字、按新增，當然不能用。他說按新增沒有反應，它就實作了，按下去有用。但它為什麼改按鈕顏色。他沒叫它改。它錯了嗎。沒有，因為他沒說不要藍色，也沒說一定要藍色。這個決定今天記在哪。Code 把 what 和 how 耦在一起，intent 和 implementation 在一起。看別人的 code，那是他們隨手選的，還是設計、是需求。不知道。他會去改，然後弄壞。所以他現在是 developer advocate，不是開發者。

[28:55](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1735s) 今天的開發是 code-centric。從一份需求文件開始，一份很棒的 PDF。從它生 code。他諷刺那份文件完美、每個邊界都寫了、作者完全懂怎麼做軟體。第一次就生出 code，YOLO，打包，寫文件，大概寫測試。什麼是丟棄的、什麼是長命的。需求很快過時。Code 變成長命的 source of truth。兩者通常配得不錯，因為跑在 CI/CD 裡。文件描述的是某個版本的 code，而且通常每次都建。強化來了，他改 code，沒人碰需求。Bug、邊界、拉丁文複數，他加進 code。生態變了，Spring 又更新，介面得改，codebase 突然很難看。現在看這段，是設計還是實作選擇，是 intent 還是 how。人很難答。回頭看那些丟棄的、真正有用的 intent，也很難知道哪次變更從哪來。很多東西不像 code 那樣有版本控制。文件他連講的時候都會忘，更別說更新。文件脫節，測試脫節。不是缺測試，就是測試一壞就不再跑。他問誰沒經歷過。維護循環非常痛。這變成 legacy，人人害怕碰，不知道是不是故意的，改了會不會弄壞別的，變成義大利麵。AI 開發工具做的是把這件事加速。問題和修復進來的速度一樣，若也用 AI 找問題，會更快從這個階段走到下一個。因為 AI 很快就生出 code，而我們不做 code review，對吧 Richard。Accept all，推上去，壞了會有人送 bug fix。他說這絕對不是 AI 真正的潛力。

## 測試驗證 intent，LLM 把空缺補上

[31:56](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=1916s) 他們相信真正的潛力是 spec-centric。改變是：需求變成長命的，code 變成生成的。這類變更做在需求文件裡。裡面只有 intent，沒有 how。只要測試過了，他不在乎怎麼做，因為測試在驗證 intent。核心是：specification 是需求、intent 和測試的組合。他在多場會上聽過一個好論點：測試就是 intent，因為測試說了東西該怎麼跑。那是 TDD。先寫測試，code 只是為了讓測試過。測試滿足，intent 就滿足。Code 不是只從需求生，是從整份 spec 生。文件不必再是那種描述性的東西，也可以從 spec、甚至從實作生出來。

[33:20](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2000s) LLM 把 what 和 how 拆開，把 intent 和 implementation 拆開。What 很容易描述：語言、聲音、影像，也許有一天用一支描述性的舞來做應用，LLM 拿那個 what 去建。Spec 和 intent 不必完全窮盡，因為 LLM 會補空。BDD 當年很好，但必須把每一個案例寫滿，很難落地。你說做一個 tic-tac-toe，它知道那是什麼、這類遊戲以前怎麼做、UI 長什麼樣，空缺它補。所以 LLM 不只讓 spec 變得實際，也讓 BDD 這類我們喜歡但難做的東西變得實際。

[34:23](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2063s) 這就是他們說的 AI native development。Spec first、spec-driven。Code 是生成的，測試是 spec 的一部分、也是 intent 的一部分，文件和其他東西對齊。做功能或修 bug，要麼改實作；若 spec 需要改，寫 spec 時不只是就地改 code，它可以按需要把大塊 code 重新生出來。

[34:55](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2095s) 示範的工具叫 specify，作者 Dion Almaer，字幕聽成 Almare。傳說他做過 Google、Shopify 的 DevRel 負責人，也在 Augment Code。Augment Code 是頗酷的 agent 式 coding assistant。他想看 spec-driven 能走多遠，大約兩週 vibe coding 出這支 CLI，也許用的是 bolt.new。Specify 把你從一個狀態推到下一個：從 brief 到 spec、生 code、生測試、跑測試，甚至把結果丟進一個 REPL。Brief 很短，又是骰子：CLI 吃字串，像 d 的表示法，回傳指定顆數和面數的結果。沒有參數就預設 1d6。要印出正在擲什麼，以及結果。擲 1d6 可能得到 5。他用的是 OpenAI 的 GPT-4o。它選了 JavaScript，他不確定是不是預設、能不能改。Spec 是一個叫 dice roller 的元件，有 JavaScript API、函式 dice roll、notation、要跑的測試類型，還有一些輸出驗證。他 YOLO，從 spec 生測試，也生實作，再拿測試去跑。看測試是 spec-driven 的大罪，因為那是在看 code。但他說看測試可以，測試是 intent，他在確認測試真的在測 intent 要求的事。Agent 做更大的事會久一點，沒關係，因為比他寫一行要做的多得多。他跟 Cody 或也許是 Tabnine 的人聊過：使用者寫完到東西出現，慢個幾百毫秒人就煩。這裡可以花 10 到 20 秒。Agentic 甚至有人晚上踢下去、隔天早上回來，因為工作量不同。13 個測試全過。他說這其實不尋常，有時會失敗。過或不過，他開玩笑說都 ship。進 REPL，有 dice roll，傳 4d6，四次六面：2、6、2、5，總和 15。兩顆十面是 7 和 4，總和 11。

[41:36](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2496s) 他在 Cursor 裡把 spec 當 context，叫它改 spec：輸出要有骰子表情符號，個別點數仍要顯示，而且各在一行。它也在改 specification 裡的測試，改的是它預期會看到什麼。套用之後跑 spec to code。重跑代表一切會重新生成。用聊天來做還有一點：spec 很長、或有多份 spec 時，它應該能把那些案例都更新。若是 code、只改一處，其他地方會忘。LLM 在書面語言上知道該改哪裡。再跑測試，四個失敗、九個通過。他還是說 ship。終端機不擅長顯示那個表情，但有換行，點數是 2、3、5、1，合計 11。核心是 LLM 可以拿失敗測試的輸出去改輸入。Specify 的 fix 吃 spec 路徑和一些檔案，理解測試為什麼失敗。若是 code 或測試的問題，它學習、再生成。錯誤可能在幾個地方。若是 bug，改的是實作，不是 spec。若是 intent 的問題，先改 spec，再改實作。要認清問題在哪。

[39:42](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2382s) 在斯德哥爾摩一場叫 AI focus 的新會上，有人叫 Baroo，講了一個他覺得很有趣的想法。誰聽過 Gherkin 和 Cucumber 這種 BDD 工具。寫平常的 given、then、that，讓 Cucumber 跑成測試。那裡沒有幻覺，LLM 根本不靠近那一步。你只要確認 given this then that 寫對了，測試就會是對的。他們這次只是用 LLM 在 YOLO。

[46:22](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2782s) 他插播 AI Native Dev：部落格、podcast、會議。Sammy 在辦會。他差點宣布還沒公開的事：十一月有一場實體會議，離倫敦大概 3000 英里，也會有直播。Patrick Debois 在上面寫很多。他是 DevOps 之父，比利時人，對開發工具很跟得上。辦了 DevOpsDays，寫了 DevOps handbook，這個名字是他提出的，是這場運動的核心。他在 Tessl，以前也在 Snyk 待了幾年。他去了舊金山的 AI engineer summit，寫了平行 coding agent 的興起：一次踢出一堆 agent，依 spec 或依 prompt 和需求自己跑，最後回來，你看各自做了什麼，可以合併。有工具在做這些流程。他點名 async code agent、crystal、CC manager、split mind、claude squad、claude code crew。不只單一路徑，可以平行跑，再看出哪個做得最好，從一個拿一些、從另一個拿一些。未來是一隊 agent，人當那個團隊的經理。

## 同一份 spec，換成 Java 或換成別的環境

[48:24](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=2904s) AI native 的好處在這個循環。對 specification 做功能變更，spec 生出 code。關鍵是驗證：code 必須是 spec 的有效表示。也許先用 Node 實作。為什麼要停在 Node。依 context 走到更好的實作，例如 Java。這是可適應的軟體。他可以說 spec 沒問題，但這裡有 context：建在我現有的、很棒的 Java stack 上。維護帶來的 context 不該改 spec，該改 context。政策、預算、業務需要，都是 context。它們不改 specification，改的是我們怎麼建那個目標。Agent 和模型愈來愈會寫 code，我們更重要的是把驗證做好：每一階段都寫測試，每次 code 變更都過那些測試。然後就可以說生成、讓它更快、加強安全，context 要求什麼就餵什麼，再驗證回 spec，吐出一個映像。到了系統遙測、進了 production，它實際怎麼表現，把那些訊號和 flag 送回當 context，再生成。Spec 不變，因為那是這次實作、這個環境專屬的。同一份 spec 可以被幾百個有不同 context 需求的人使用。

[50:30](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3030s) 這也讓開發包容得多。他當了二十幾年開發者，不是所有技能在新世界一樣有用，寫 code 的技能變得比較沒那麼有趣。那些年累積的是智慧：知道怎麼部署、好架構長什麼樣、好設計是什麼、怎麼部署到能擴展。真的要做企業級、production 的環境，是的，任何人都能做，vibe coding 就是打幾行字。但需要那些年磨出來的經驗，才能說這是好架構。也需要好的 PM，說使用者要的是這些。不同的人一起，帶著知識、智慧和經驗，才能把應用做更多。空間會更包容。還有一堆問題沒有答案。Tessl 想透過社群去看。最重要的是 AI native 是新的開發典範，不能用 code-centric 的方式去想。若一份 spec 有一個版本，實作卻有好多個，又因為 context 變更而有不同修訂，你怎麼版本化這些可適應的實作。怎麼讓那個實作版本指向它來自的 spec 版本，又在每次都觸發。AI native developer 的角色是什麼，他們有一些想法。開發者絕對還會在。這不是一個只會 YOLO 的 AI 世界。對一次性的應用可以：每五秒打斷一次，他可以打電話給你，或寫那個應用，但不會放進 production。Matt 講過很多理由。一次性的 app 很棒。

[52:55](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3175s) Specify 只是 YOLO，甚至不是開源，用來問我們能做什麼。Tessl 在做的是一個框架、一個平台，讓你做這些事。他們不自己包辦。他們相信這是開放的空間，每個做 AI 工具的廠商和人都該能接進來，在流程裡當一個步驟、一個元件。文件想用他口中的 swim，測試想用 Kodo，都可以加進流程，但流程必須是端到端的。AI native landscape 是一份資源，開源 repo，可以送 pull request，也有 Google 表單，把你用的或你做的工具加進去。投影片在這裡卡住，他確定簡報結束了。

## 改 code 可以，但不能讓它悄悄變回真相

[54:45](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3285s) 有人問：要改東西時，是先改 spec、再改測試、再驅動開發，還是先改已經有測試托著的 code，確認對了再回去改 spec。在很寬的 vibe coding 裡，15 個變更裡他也許一個都不想收，先改 code 好像比較不浪費。也可以讓系統看出 code 的變更，建議 spec 該怎麼改。Simon 說兩條都成立。先改 code，需要一個很懂這份 code 的人。現有團隊擁有特定元件時，這很容易。愈走進 spec 的世界，人會愈脫離 code。今天大家仍然很懂 code，有時改 code 更快，這合理，但只有在你把變更帶回 spec、而它生出的 code 方式相近時才合理。若改了 spec，它做出完全不同的變更，它可能覺得有更有效率的重構。這是選擇。今天更舒服進 code 的人會選那條。只要不要只改 code、不更新 spec。那樣 code 立刻又變成 source of truth。那個後盾是百分之百的。

[58:20](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3500s) Specify 花了兩週做出來，是 vibe coding 的，大概有一百萬個地方是錯的。Tessl 在做貴得多、更接近 production 的版本，正在 private beta。有興趣寫信到 simon@tessl.io。他希望不要太久就能 open beta。不要拿那個 YOLO 的東西直接上 production。

[59:28](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3568s) 下一個問題是開發者的技能不會消失。Spec 裡有大量例子和需求，使用者要做這件事。那能不能變成架構紀錄：元件要內聚、要以某種方式解耦，spec 描述系統怎麼設計，context 對應變動的需求。Simon 說，架構定義在 spec 裡，或在一份旁邊的 spec。把元件拆成他們知道是對的方式，AI 可以試，有時對、有時錯。它需要 context，因為業務需求和部署需求不同，他會把應用架構成不同的樣子，把元件組成容易這樣做的形狀。今天我們知道怎麼讓東西可重用、讓服務一起運作。在 Tessl，你提出一件事，他們拆成多個步驟、元件和階段。那可能對、可能錯。要能回饋：我要它更像這樣，這些元件之間的 API 要這樣工作。那是因為你有智慧，他覺得這個詞重要，是經驗帶來的智慧，知道好設計和好架構長什麼樣。這是開發者要放進新流程的東西：好的應用怎麼被做出來。另一塊是能力，那是好的 PM 擅長的，能把在乎的需求講清楚。瓶頸幾乎在那裡。交付變快之後，我們交付多少、拿到多少使用者回饋、怎麼迭代。好的 PM 和壞的 PM 會在這裡分得很開：後者交付太多壞東西，回饋不夠。開發者要往架構和設計升級。不是去精確定義效能長什麼樣，那些 LLM 學得會。認出非功能的部分並建進去，非常重要。

[1:02:55](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3775s) Spec 一改，code 是不是每次整份丟掉重來，還是可以漸進。他們正在學的一件事是：生成實作時做了哪些決定，要記下來。是人做的決定，還是 LLM 做的。有趣的決定可以提升進主 spec。或者放進他稱為 shadow spec 的東西，坐在 specification 下面，抓住 LLM 做的一批實作決定。他們不要每次完整重生，那只是不斷擲骰子，直到測試終於全過。真正要的是知道 codebase 哪幾部分該變，只改那些。拆成非常模組化的空間，幫助很大。若必須重生，帶著這份 shadow spec，沿用使用者沒做、但先前 LLM 做過的決定，行為才不會變：按鈕不會從藍變黑，實作方式變了不會讓這些 unit test 變成垃圾、還得重做。做法可以是 shadow spec、把 code 當 context、或拆到小到只重生一部分。沒有唯一答案，也沒有唯一正確的做法。但不能留給那種每次都變的非確定性。把應用組成很多元件，小到你只需要認出該改哪些、只重生那些塊。那又是架構選擇。

[1:05:59](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=3959s) 有人把上一場的問題換一種問法：最後還是在跟 LLM 說話，context window 又來了。Spec 的單位是什麼。專案變大，是一份涵蓋一切，還是要拆。旁邊還問：spec 裡要不要放很具體的 persona，例如開發者、測試這些角色。Simon 說絕對要拆。一份很大的 brief，他會做一份頂層 spec，下面每個元件是一棵樹。每個元件有自己的 specification、自己的 API、自己的測試。要改時只改你正在叫的那份 spec。使用那個小元件的父元件，現在就是它的整合測試。元件裡的測試比較像這個元件的 unit test。這很重要，因為上線時不要當成一整塊送出，要當成每一個可重用的單元。做另一個 app 時不必全部重做，這個元件、那個元件可以直接拿來用。開發者寫的有一半是膠水。有一半已經在外面、在開源裡。我們寫那少數幾樣，codebase 的 80% 是借來或用來的。若不這樣做，就是在打破過去 20 年軟體開發最大的一些收穫。Persona 他覺得很有趣，而且他不認為 spec-centric 或 code-centric 有差。就是不同 agent 帶著不同背景、用不同方式看 code。也許有一個測試者 persona 在長測試案例。那是在用我們從 LLM 學到的最佳實務。他還會更進一步：不要停在 persona。生 code、寫 spec、生測試，用不同的 model。每個 model 擅長的事不同。同一個提供者裡不同味道、或一組 model，也依這個任務什麼最好來換。

[1:09:36](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=4176s) 有人把 spec 想成一棵很大的樹，最上面是公司使命，就說去做、交出那 10% 的成長，再往下是部門、組、產品。Simon 不會把樹做得那麼大。他希望他們在做的東西維持相當淺。愈深、這整件事愈大，就愈難管。開發者會大幅把自己放寬，去懂平常不會看的大塊應用。他仍把這些看成小得多的單元。應用的尺寸會不會大改，他不知道，但他不覺得有必要改。尺寸維持相近就好。業務決定、該被重用的東西，適合分享。他喜歡 prompt 被分享這件事。Cody 有 prompt library，可以把 prompt 存起來。AI 工程團隊可以說這是 prompt library，各團隊用各種 prompt，例如一個能把測試寫好的 prompt。應用仍然可以是兩個披薩的團隊那種大小。對方擔心會出現更局部的最佳：一個團隊為自己的情況過度優化，傷害公司其餘部分。他說那正是我們設計和架構應用的方式。不能讓 LLM 做它想做的任何事。我們不能當 LLM 的 agent。Agent 要為我們工作。若它做的事在架構、維護、公司或團隊上我們不同意，我們就改，告訴它這是錯的。不管是一個 app 的架構，還是它想怎麼做多個應用。那是我們的事，不是去 accept all。

[1:12:16](https://www.youtube.com/watch?v=NTpu0XuQsDY&t=4336s) 最後 Farath 問他看過像 Wise 那種會適應使用者的軟體。靜態的 spec 怎麼放進一個軟體會跟著使用者變的世界，使用者改它，或要求它以某種樣子出現。Simon 說 spec 不必是靜態的。用和 code-centric 完全一樣的方式問，你會把 code 當成靜態的嗎。對方問那是不是每人一份不同的 spec。他說這不是他想過的使用情境，但是個好問題。他反問對方。對方覺得模組、小塊有點道理，依使用者怎麼用軟體，實作某些部分、改其他部分，像 OpenAI 有某種 memory，記住這個人喜歡這樣用軟體。Simon 說他喜歡大約 20 年前的 OSGi：你當時丟進什麼軟體，它就即時反應、把東西生起來。用一些舊技術，依使用者需求把東西丟進去，改變長相。可以從那裡學。他肯定沒把這個使用情境想過。他說對方是先驅。他們本來要寫新介面時代長什麼樣。站是 ainativedev.io/blog。他說這篇該由提問的人來寫。然後去走廊繼續喝啤酒、聊天。
