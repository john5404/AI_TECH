# Can AI Tools Be Trusted with Security-Critical Code? Real World AI Security Risks with Liran Tal

Simon Maple 主持 AI Native Dev 這一集，由 Tessl 贊助。來賓是 Liran Tal（字幕聽成 luran、lauran），Snyk 的 developer advocacy 負責人。片長約 37 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Snyk 聽成 sneak、snake，把 Tessl 聽成 Tesla。Simon 說自己在 Snyk 待過大約六年，這集主要聽 Liran。YouTube 上還有一段螢幕示範，不在這段音訊裡。

- 原片：[YouTube](https://www.youtube.com/watch?v=fWjXc32o9zE)

## 一句話

AI 會把威脅面加大，也能幫安全。Liran 不相信單靠 prompt 就能得到安全的 code，也不相信把 LLM 的回答當成可以存進資料庫的乾淨資料。Autocomplete 把 Stack Overflow 那種摩擦力拿掉了。叫它當安全審查員，自己會帶上過度的權限，而且同一段 code 跑十次答案可以不同。他要的防禦是懂 code flow 的靜態分析：存檔就掃，修完再掃一次，人再決定接不接受。

## 工具會被用，也會被濫用

[1:00](https://www.youtube.com/watch?v=fWjXc32o9zE&t=60s) Liran 說自己是軟體開發者，喜歡站在做開發者產品、自己找安全 bug、做安全工具、寫 writeup、再分享給開發者和工作小組的交叉口。開場先放了一段：非決定性對安全研究者和攻擊者都很困擾。他們想要已知輸入得到預期回應，才能用 fuzzing 調到要的結果。輸出一直變，就很難知道抓到是碰巧，還是哪個輸入造成的。找 bug 多半是黑箱，看不到完整的 code 和輸入輸出。

[2:16](https://www.youtube.com/watch?v=fWjXc32o9zE&t=136s) Simon 問 AI 是在加大威脅，還是能幫忙。Liran 說兩者都是。大家才剛開始用各種方式執行 LLM，任何工具都會被用、也會被濫用。問題橫跨開發者很深的工作流程，也橫跨消費者。他舉航空公司退款機器人的事件，以及一家安全公司的研究：Amazon 產品頁上的評論機器人被弄去回答「幫我做一個 React component」，而且有人在 Twitter 上說 Amazon app 裡也發生同樣的事，大概是接到了 API。

開發者用 AI 有兩條。一條是把 AI 放進應用，呼叫 LLM 做處理或業務操作，再把輸出給使用者。另一條是放進自己的流程：寫 code、CI/CD、code review。Simon 問 copilot 和 tab 補完。Liran 裝傻：你是說開發者用 code assistant、不是每一行自己寫？Simon 是 JavaScript 開發者，他順手嘲那個生態系的漏洞很多。

## Tab 一下就進 production，LLM 的回答也是汙染源

[5:33](https://www.youtube.com/watch?v=fWjXc32o9zE&t=333s) 前一兩名風險很難只挑一個。在 IDE 裡用 AI 補完，同事等於在建議一行或一種 pattern。人的目光鎖在業務、story、修 bug 上，少了判斷：這裡的安全問題是什麼。紅旗是 AI 剛剛補完這段。不只要搞懂它做了什麼，還要問它有沒有順便加進漏洞。他拿很久以前的 Stack Overflow 比。他不是在承認自己或 Simon 複製貼上過。那時候要不要貼、這段到底做什麼，人會多想一點，因為有摩擦力。Assistant 無縫地長在流程裡，按 tab 就補完，再送到 production。

Simon 問，看 Stack Overflow 的人真的會讀懂再貼，還是也是覺得看起來合理就貼，跟今天用 copilot 一樣。Liran 覺得不一樣，差在摩擦力。頁面上有其他答案、有人說對有人說錯、有上下票，你比較會去看哪個答案錯在哪。不是沒有人盲目貼，而是沒有容易到零思考。Prompt 一句「把這個測試補完」，接受，就結束了。Simon 說這有點像另一種 security through obscurity。

[8:59](https://www.youtube.com/watch?v=fWjXc32o9zE&t=539s) 另一個問題是 LLM 的回應本身。想像一個建在 LLM 上的聊天應用，只把模型回覆存進資料庫當稽核，不存可識別資料，也不存使用者問了什麼。開發者容易把這段當成從 OpenAI 或 Anthropic 來的資料，不是使用者輸入，覺得存進去沒問題。攻擊者若能用 prompt injection 讓回覆文字裡帶上 SQL injection，而不安全地存下那段回覆，就變成注入。他用 Bobby Tables 那種查詢當例子。安全術語裡，這是 source 到 sink：LLM 的回應是一種 taint source，卻常常被漏看。

## 拿 agent 當安全閘門，閘門自己有洞

[10:42](https://www.youtube.com/watch?v=fWjXc32o9zE&t=642s) 有人說可以用 LLM 當安全網：一個寫 code、一個 review、一個當安全 agent，認出惡意輸入。Liran 覺得這條評估可以做，但 code agent 一出現就自帶安全問題。他指向 OWASP 針對 LLM 的 top 10，Simon 熟這塊。尤其是 excessive agency，以及對敏感系統過度授權。自己在內部做會審內容、加安全屏障的 coding agent，更容易掉進這兩類，因為做的人往往不懂那些風險怎麼框。

大約一年前很紅的 Auto-GPT：給它任務，例如做一個網站，它自己跑 agent、弄清楚要做什麼、學 HTML 和 CSS。那裡有一個漏洞，在它會讀到的某個來源放進 prompt injection，就可以走到命令執行。LangChain 這類函式庫也有過。Agent 若能打 API、碰敏感系統，例如為了確認某段內容不在那個系統裡，整條流程就大很多，也可能被帶去把內容吐回來。

[13:34](https://www.youtube.com/watch?v=fWjXc32o9zE&t=814s) Simon 想起 Guy 先前和 Caleb 的一集。只靠 LLM 審查 code 有沒有漏洞，問題不只是答對或答錯。同一段可以跑十次，每次答案不同。改完再測，它說沒問題，是這次沒抓到，還是真的沒了。非決定性會留下缺口。Liran 說這是設計：統計模型會隨機走不同的推理層，否則它就只是一條很大的 if。他常做現場的 live hack，不先錄好。五分鐘前試過，第六分鐘的 demo 會不會成，他不知道。有一次他要模型生出一段若被不安全地放進頁面就會變成 cross-site scripting 的輸出，第一個 prompt 不行，換到第三個才成。對研究者和攻擊者也一樣亂：他們要的是已知輸入、預期輸出，才能 fuzz。黑箱裡看不到完整輸入輸出。

## 拜託它寫得安全，不夠；逃脫還要看上下文

[16:30](https://www.youtube.com/watch?v=fWjXc32o9zE&t=990s) Simon 問，在 IDE 裡明確要求安全的做法，例如 path traversal 要安全版本，模型會不會聽話，能不能把 prompt 寫得更有機會拿到安全的 code。Liran 說以他們的實驗，完全不會。Snyk YouTube 的 Brian（字幕沒把姓聽清）有一系列叫 AI 會讓我被開除。他裝不同的 AI coding assistant，全部弄錯。Prompt 是做一個簡單的 Node.js 網站，使用者可以建立、更新、刪除，而且安全很重要、會部署到真實世界、若不是百分之百安全他就會被開除、請認真，三個驚嘆號。生成之後大約一分鐘，用 Snyk 掃，裡面有漏洞，包括 SQL injection 和 open redirect。Liran 不說它每次都補出不安全的 code，但也不必試一百次，現場第一次就這樣。Simon 半開玩笑：是不是訓練資料裡不安全的 JavaScript 太多。他說自己用 Java，嘲 Liran 的 JavaScript 已經二十年，npm 套件漏洞太多。

[18:14](https://www.youtube.com/watch?v=fWjXc32o9zE&t=1094s) 那能不能指出 code 裡有 cross-site scripting，請它修。可以試，他不覺得看過可以完全信任、每次都成的情況。他常示範的是另一種。React 有 `dangerouslySetInnerHTML`，是有時開發者和函式庫需要的逃生口，名字也寫明了危險。預期的流程是用了它之後，在附近寫一個名叫 escape XSS、做 sanitize 的函式，按換行，希望 LLM 補上正確的跳脫。他換過很多次格式。補出來的、把輸出逃進 HTML 元素的 pattern 總是對的。若使用者輸入流進的是 HTML 屬性，那些 pattern 沒有一個對，因為屬性要逃的字元和元素不同。輸出到 HTML、頁面上的 JSON、屬性、CSS，跳脫都不一樣。錯不完全在 LLM。你叫了 escape XSS，它不會更懂，給你一份同時正確又錯誤的輸出，XSS 還在。他不信任它能看完使用者輸入所有流法、業務邏輯、資料怎麼走，再寫出他希望的那份跳脫或清理。

[21:12](https://www.youtube.com/watch?v=fWjXc32o9zE&t=1272s) Simon 說這讓他想到和 Swimm 的 CTO 的對話，字幕把人名聽成 Omar rosenal、公司聽成 swim。對方說若只用 LLM 理解 code 再產生文件，大約 80% 會失敗、文件不好。所以他們用靜態分析看 flow，底下先建出結構，再用 LLM 描述其中一些。這和 Snyk Code 這種 SAST 在做的事很像。關鍵是 context：漏洞是不是真的在，取決於缺陷在 code 裡的位置，不是它長得像不像外面那池子裡的漏洞。

Liran 用標資料來想。你在標的資料就是 code。分類器很天真，或標錯了，說這段沒有漏洞，之後吐出來的訓練結果就偵測不到、也修不好。Snyk 做的是真的懂 code flow 的機器學習引擎，能讀外面大量的 code。在那套 path engine 之外，還有安全分析師審過有漏洞的 code、做過分診：這個函式有洞，就是這一行沒做該做的事。例如 path traversal，因為用了很天真的 API，像把兩個字串丟給 path join，而不是正確地組字串、不要把一個接到另一個後面。Snyk 有那一池安全專業，可以和 AI 配在一起，跟對方講文件的方式一樣。回來的不只是比較確定，你也比較敢相信準確度。

## 存檔就掃，修完再掃；套件名字會被幻覺出來

[24:22](https://www.youtube.com/watch?v=fWjXc32o9zE&t=1462s) 防禦上，不管 code 是 copilot 生的還是手寫的，IDE 有擴充套件，也有叫 Snyk Code 的 SAST。從 ChatGPT 貼上來或補完，按存檔。他喜歡叫 Secure on Save。大約一秒分析完，不必先建置專案。他笑 Java 的人喜歡長編譯，可以去喝咖啡，TypeScript 有時也一樣，Snyk 不需要那一步。同一顆引擎也能放進 PR、UI 和 CI。在 IDE 裡，它不在乎 code 從 ChatGPT、Codium 還是別的 assistant 來，字幕這裡還聽成 D9。掃完在有問題的那一行畫紅線。還有修。修很難，因為 context 多到可能要重構整個應用。能修的時候，它改完會再掃，確認修補沒有再加進另一個漏洞或同一個。引擎走過 code，你比較有信心建出來還跑得起來、沒有弄壞，因為抽象語法會編譯。那層驗證讓你相信這不是 LLM 隨便丟進資料庫的東西，而是一個可以先測、有一點信心再接受的建議。

[27:37](https://www.youtube.com/watch?v=fWjXc32o9zE&t=1657s) 第三方函式庫更麻煩。模型依它看過的 pattern 建議套件，最流行的更常被提出來。Simon 問，是不是因此比較能接受，還是反而會拉進更不安全的。這題很重，因為它假設流行的比較不容易不安全。Simon 也同意流行不等於安全。大約一年前的研究：請模型給一個資料庫整合的安裝指令，它很友善地給了三個選項，其中一個在 registry 上不存在，搜尋是 404。攻擊者倒過來想：模型會幻覺出不存在的名字，我就先把想得到的排列註冊出去，安裝能成功，裡面放後門。某間企業的某個人裝了，就進到他們的系統。公司被打穿，是因為 AI 幻覺了一個名字，而有人先想到。這是真的風險。

他認為這把 LLM 給你的表面擴到你可能覺得不重要、其實很重要的地方。它若只給一個大約十行、做一件離散事情的函式，你可以自己看。它若給一個能動的 server-side API route，為了驗證、上傳和其他事 import 五個依賴，你加的就不是二十行，可能是幾百行甚至更多。先不談惡意：多出來的依賴有授權問題，攻擊面變大，也可能過時或沒人維護。明天有漏洞，誰出修補，你知不知道。從補完 code，變成補完 code 再加一份供應鏈問題。

[31:28](https://www.youtube.com/watch?v=fWjXc32o9zE&t=1888s) 這集的深入示範留到只有 YouTube 的下半，會分享螢幕。先留在開源。Snyk 從開源安全起家。漏洞資料庫也可以用 AI 標資料。給它一筆 CVE，不必逐行讀 code，就能先抽出 CVSS、影響、整份 vector、相關的 CWE，也許再建一棵樹。先從 LLM 拿資料，再分診、往上蓋。Simon 記得第三方常常不說自己修了一個安全問題，沒有 CVE，也許不是 CNA，也不知道流程。早期 Snyk 就有機器學習去認相似的 code 變更，甚至註解裡的描述，這樣即使維護者沒承認那是安全修補，你也知道該升級。問題還在供應鏈裡，只是不在工具能對上的公開清單。JavaScript 裡，絕大多數漏洞沒有進公開 CVE 資料庫，修了就修了，沒有建 CVE。所以需要更仔細整理的資料庫。

Liran 補 CVE 的危機：處理通報的組織嚴重缺人，積壓成千上萬筆。很多應用和第三方元件可能有洞，卻沒有人知道。Snyk 去抓那些沒被列出的：repo 裡有人回報、維護者修了，他們甚至不知道 CVE 是什麼。那不是一筆修 bug 的 commit，是一筆修安全問題的 commit，而且能指出版本。Simon 說攻擊者也能做同一件事，修補出現、CVE 還沒建立的那段空窗，就是他們動手、而組織還沒急著修的時間。兩人說這個題目可以講上一整天。音訊這邊先謝謝 Liran，螢幕上的漏洞和修補留到 YouTube 那一段。
