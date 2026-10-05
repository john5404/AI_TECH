# Automating Development: AI Beyond Coding Assistants with Devin Stein from Dosu

Simon Maple 主持的 AI Native Dev。來賓是 Dosu 創辦人 Devin Stein。片長約 34 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla，把 Dosu 聽成 dosey 或 dos。

- 原片：[YouTube](https://www.youtube.com/watch?v=ah6diDQ9wyw)

## 一句話

IDE 裡的 coding assistant 要快。Dosu 做的是 IDE 外面那些會把工程師打斷的事：回答問題、issue 的第一輪 triage、維護文件。那裡多幾分鐘可以找 context，所以精準比速度貴。答錯會製造更多工作，不答只是維持現狀。大 codebase 裡，人用產品語言說話，model 卻要對回檔案和 function。他不把英文當成下一層程式語言，他要的是像 REST API 這種更高、但仍然具體的 primitive。

## 非同步的工作，錯一次比慢更貴

[0:14](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=14s) Simon 說這集要看 coding assistant 以外的用法，從自然語言產生 code，一直到把元件定義成 specification。Devin 在幾間新創當過早期工程師，最近一間是汽車領域的 ML 新創 Viaduct，和現在做的事不同，但有不少平行。大約一年多前開始 Dosu。焦點是自動化工程師在 IDE 之外的工作，把事情從他們桌上拿開，好讓他們真的去寫 code：回答問題，免得被打斷；issue triage 先走一輪；幫忙維護文件。

[2:11](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=131s) IDE 裡，例如 GitHub Copilot，速度很重要，要很利落。Dosu 的問題是怎麼讓工程師不被打斷。Slack 上一個問題，或 Jira 裡客戶的新 ticket，人得離開手上的事。從被 ping 到回應，中間可以是幾分鐘，背景就有較多時間去集對的 context，再把有用的資訊送回去。

[3:03](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=183s) 多出來的時間，是希望少錯。Code completion 要趕在開發者想動的那一刻；PR 和 ticket 這邊，有幾分鐘仍然要非常準，而且不要替開發者製造更多工作。使用者一致的說法是：非同步、比較像工作的這個領域，precision 真的要緊。寧可一則好回答，不要五則普通的。Dosu 的產品策略一直很公開，很早推出，是為了弄清開發者會收到哪些請求。他們內部有一個 confidence threshold：什麼時候該回應，什麼時候它認為自己有好答案或相關 context。給錯資訊可能製造更多工作；不回應是現狀；高品質的資訊才省下大量時間。什麼時候該開口，他們在變好，還有很多要做。他覺得 LLM 這個領域比較少談 robustness，也就是什麼時候該回應。現在的偏差是總是回應、總是說好，因為它們是這樣被訓練的。建模和產品兩邊都在把這個拆開。

[5:16](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=316s) Simon 自己試過叫 AI 掃 Tessl 網站，找主題相近、可以連出去的 blog 和 podcast。找不到時，它會編出不存在的內容，連標題和連結都生好。Devin 說他們花很多時間收 context，讓回應前看到的最後一份 context 品質夠高。找不到，就說找不到相關資訊，也許再問使用者要資料。還沒解掉的偏差是：LLM 想跳進解法。它可能已經發現使用者要的做不到，卻仍說你也可以試試別的。正確答案是做不到。他們在這外面建 guard rail，輸出過濾和幻覺檢查在這個領域很重要。

## 產品語言要對回檔案

[7:35](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=455s) Dosu 盯的是大 codebase。維護負擔跟著程式碼的大小、複雜度、以及有多少人在上面工作一起上升。他自己用 LLM，則是從零到一。他覺得 LLM 很會寫 code、寫 script：一個網頁要做某件事，或一段 script 自動化工作流程。這時它們靠 pre-training 裡已經知道的東西，不必煩惱該用哪個 dependency、風格對不對、這個 function 是不是 codebase 裡已經有、該 import 而不是重寫。放進大 codebase，挑戰變成：生出來的 code 風格要對、用的 library 和版本要對、要跟著 best practice，還有某個工程師很早開始強制、大家因為標準化而必須跟著的怪 pattern。另一部分是 code 該寫在哪、該住在哪。

[9:06](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=546s) IDE 外面，人常常不用 code 的方式談 code。對 Dosu 提 issue 或問題時，用的是產品語言：這個產品功能裡，這個情境怎麼處理。沒有 class 名，也沒有檔名。他們大量的工作，是做出一張地圖，把產品層的概念對回工程世界：檔案、function。規模一大，人就是用產品來談開發。他們說的是要改這個功能、想知道這個產品功能為什麼會這樣，不會鑽進 function 名。

[11:05](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=665s) 風格沒有一刀切的答案。你得描述想要什麼，而 codebase 的風格很難描述。有些地方有寫好的 style guide，他看得到 LLM 能照那個風格生 code 或做一次編輯。即使 guide 很細，還是有細處：utility function 放在 mono repo 的某一塊，新服務要用某種命名並建一個新目錄。很難全部寫完。但若給一份很完整的描述，以今天來說可以做得相當穩。他讀過 Google 一篇談他們怎麼用 LLM 做 code migration 的文章。LLM 表現好的一個常見 pattern，也是 Dosu 在靠的，是例子：給出想要的風格，再給幾種變化。LLM 很會從例子學隱含的風格。若能找到這個開發者過去的 code 當例子，也許能隱含地學到風格，而不是只靠寫明的 style guide。

[12:44](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=764s) 前端要接到對的後端，他說仍然是 context 問題。從產品看，會在 codebase 這些分開的部分之間形成自然的分組。Dosu 自己的例子是網頁上有一頁列出 data source，後端則有處理和儲存 data source 的 code。把兩邊都看成「data source 時該看的地方」，才連得起來。多數公司不是全部 mono repo，而是很多 repository。這個功能要改哪些 repo、那些 repo 裡哪些檔，很難。還是把請求拆開、找到相關的片段。他認為從產品優先來想，潛力很大。

[15:42](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=942s) 架構也是一種可以交給 LLM 的抽象，幫它理解依賴。就他們所見，LLM 目前的形式不太擅長推理較高的架構和它的後果。他們自己的系統相當非同步，是 pub/sub、事件驅動。LLM 明顯難以推理 exactly once delivery、idempotency，以及那意味著什麼。LLM 不是魔法，跟輸入一樣好。看任何公司的 backlog，ticket 通常很稀疏，因為有大量隱含 context，寫細要很多工。Dosu 做得好的一塊，是 context 的收集：你保持高階，它找出相關資源，覺得你在談這類檔案，附上相關 PR 和找到的文件，再用來把描述補厚。很多 AI 開發產品是 human in the loop：你說對、就是這個，或叫它改去找別的。一次性把想要的東西描述精確，開發者一般沒那麼好，因為那是大量的工作。他們本來也不必對一個不會像人一樣跟你討論的對象，把事情講到這個程度。

## 改檔比生新檔容易錯

[18:29](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1109s) Simon 說，比起改既有檔案，LLM 較擅長新建，因為既有 context 裡出錯的路很多、做對的路較少。Devin 覺得這很公平，而且有兩層。模型這一層，以目前技術，LLM 出了名地不擅長 patch。現在常常最好的辦法是整份檔重寫，而那擴不了，外面有很大的檔。他覺得這可解。Patch 剛好很偏離模型訓練的分布。他幾乎敢說，未來一年、也許更短，會有很會生 patch 的模型。另一層是大 codebase 裡，有意義的功能通常要改很多處。LLM 是機率的。若改一千處，錯誤百分比再小也會錯。要改的地方越多，出錯的可能越高。從零到一沒有這個問題。

[19:35](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1175s) Patch 比整份重寫難，是因為它不像別的東西。它是一種 domain specific language。只在 code 和文字上訓練的模型可以生出 patch，但格式有嚴格的 schema，錯法很多，也不直覺：加這個、刪那個，還得在更大的檔案裡推理這份 patch。開箱使用，對這個格式還不是很可靠。

## 把它當新來的工程師

[20:27](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1227s) 人常把 LLM、AI 軟體開發者或更一般的 agent，比成員工：AI software engineer、AI sales development rep、AI executive assistant。他覺得這個比方很貼。你不會期望新來的軟體工程師讀完整份 codebase 就知道該做什麼。你期望他讀、抓個感覺、試一張 ticket、犯錯，然後在 PR 或對話裡被改正，或自己問：我想做這個但不懂這裡，該做 A 還是 B。靠這些改正和回答，慢慢變熟。Dosu 想靠的就是這件事。LLM 會錯。怎麼從 feedback 學，讓它不要犯同一個錯兩次。你越投入、它看到的例子越多，就越接近你對一個員工的熟練預期。

[22:40](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1360s) 今天描述 code 變更的方式，大家大致對齊成拆子任務。講一個較高的問題，LLM 做計畫或拆成小塊，一次做一塊，再把結果合起來。Dosu 很接近這個做法。問題是很多步會錯。拆成 12 步，那些子計畫還會再拆。每次呼叫或每次修改，失敗的可能就高一點，所以常常要人在迴圈裡看計畫、看進度。計畫太模糊也是他們在 production 常見的：人會 under-specify。不夠具體時，它會去找跟問題無關的 context，而更多 context 也會把 LLM 搞混。往前看，他覺得軟體工程一直需要更好的抽象和 primitive，讓 LLM 不必想得那麼細，才能比今天更可靠地做大範圍的修改。

[24:24](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1464s) 多少 context 才對，他們的非同步場景有多一點時間。他們看到輸入的 token 量和輸出長度有相關。複雜問題的答案有時只是一兩句，精簡是他們花很多力氣的地方。太多 context 的做法，是花時間把 context 修細，像雕塑，從一大塊裡鑿到只剩他們相信和這個問題有關的部分。最後那份 prompt 最好只有特定資訊，較小、資訊較密。

[26:04](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1564s) 下一集才是螢幕分享，這集沒有示範畫面。他預告 Dosu 現在在開源裡很常用，幫 maintainer 用維護來支持和長大社群，裝在數千個 repository 上。因為開源是公開的，看得到它做得好的例子：靠 codebase 的 context 回答文件沒寫好、但答案在 code 裡的問題。對他們重要的是把 code 當成 source of truth，像開發者那樣。也有它用 code 和文件一起、自己把 issue 解掉的例子，以及它給出一個解、但不是最好的解。那接回前面：LLM 想給你一個解，而解也許是沒有解。

## 英文太鬆，REST 這樣的 primitive 才夠

[27:37](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1657s) 未來很難預測，變得很快。多年來一直為真的是：軟體開發往前，抽象也升高。他相當確信，若要 LLM 或 AI 像我們期望軟體工程師那樣真的把應用做出來，今天這樣的 code 不一定是對的抽象。做一個功能或改行為，要動很多處。程式語言內部的抽象，過去十到二十年沒有真的變多少。有 Rust 這類新語言。Python 仍是較抽象、較高階的語言之一，也剛好是 LLM 很會的。要讓 LLM 更會做應用，需要圍繞「應用是什麼」的抽象，讓它們能在那裡面想、能改。他第一個想到的是 REST API。圍繞 REST API 和 code generation 已經有很多工作。它是現代 web app 的核心 primitive。可以想像一種語言、spec，或圍繞 REST API、RESTful service 的抽象，讓 LLM 在那個領域運作，不必操心實作細節。它們想的是要支援哪些 filter、輸入和輸出是什麼，再由工具編成也許是 Python、或底下的 code。

[31:00](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1860s) Simon 問，英文是不是太含糊，所以需要像 Python 那樣的寫法。Devin 提 Python，是因為它是今天較高階的語言，讓開發者更有生產力，不必太操心底下。有人相信英文是 code 的未來，他對此會擔心。Code 之所以需要，是因為它幫你具體。抽象的難題，是找到 LLM 把工作做好真正需要的那個具體程度。REST API 是容易的例子，表面積沒有那麼大。若要做一種抽象用的 DSL，已經有 OpenAPI spec 和圍繞它的 code generation。用輸入、輸出、參數來想，就能從那裡生出很多 code。

[32:15](https://www.youtube.com/watch?v=ah6diDQ9wyw&t=1935s) 開發者不會消失，但會更有生產力，也被期望做更多。門檻會降低，類似 Python。用 C 寫，進門很高，會撞上難除錯、難推理的錯誤。Python 讓自學的人比較容易寫 script。LLM 也會這樣，尤其是較簡單的 CRUD 應用。非工程師，或 PM、設計師這類相關角色，能為 side project 和內部工具把 web app 轉起來。工程師本身則是更有生產力。下一集才會動手看 Dosu。
