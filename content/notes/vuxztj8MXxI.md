# No More Screenshots. Web MCP Lets Agents Talk to Your Website Directly

Guy Podjarny 訪問 Maximiliano Firtman。他做 web 開發三十年，1995 年開始，第一個網站在 DOS 的編輯器裡寫，再用 Windows 3.1 打開 Netscape、手動開 HTML 看。寫過 mobile web、效能和 JavaScript 的書，現在在寫第十五本，講 vanilla web，而且約定不用 AI 來寫。原片約 60 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=vuxztj8MXxI)

## 一句話

Agent 現在逛網站，最常見是截圖、用圖像模型看、再去點那個座標。五到十秒裡 JavaScript 把按鈕移走，點就落空，再截一張，時間和 token 都花掉。Web MCP 是 Chrome 裡還不穩定的實驗 API：網站用 JavaScript 函式，或甚至只用 HTML 表單，把工具註冊給 agent，它改為執行函式，而不是用眼睛和手。另一條線是把小 model 放在使用者的瀏覽器裡跑。他認為 web 沒有在死，因為 vibe coding 做出來的那些 app，本身就是 web app。

## 截圖會過期，DOM 又沒有語意

[2:13](https://www.youtube.com/watch?v=vuxztj8MXxI&t=133s) Guy 是在行動 web 變快的那些年認識他的。他做過原生 iOS 和 Android，Objective-C、Java、後來 Kotlin，人也在 web 和 mobile 的交界。Vanilla web 這本書在 AI 時代有用，是因為對 context 比較好，agentic 工具寫 web app 時不必背一大堆相依。OpenAI 的 API 一出來，大約三年前，他就開始寫文章、開課，講怎麼把網站和 app 接上、怎麼為 app 做 prompt engineering。ChatGPT 做出第一個瀏覽 plugin 時，他研究它怎麼渲染你的網站，若想為那個優化內容該怎麼做。

[6:25](https://www.youtube.com/watch?v=vuxztj8MXxI&t=385s) Web MCP 是實驗 API，還不穩定。Chrome 團隊提出，目前在 Google Chrome 裡要開 flag 才動。想法是給 AI agent 另一條使用 web app 服務的路。他點名的 agent 包括 ChatGPT、Claude、Gemini 的 agent mode，也許在逛網站的 OpenClaw，以及 agentic browser：ChatGPT Atlas、Perplexity 的瀏覽器，還有 Chrome 和 Edge 自己的 AI mode 或 agent mode。

[8:01](https://www.youtube.com/watch?v=vuxztj8MXxI&t=481s) 現在通常兩種逛法。最常見是截圖，丟給圖像模型，說要點這個座標，再在螢幕那一塊觸發點擊。這要幾秒。若那五到十秒裡 JavaScript 把按鈕移走，就點不到。再截一張，agent 猜也許捲動了、內容變了。時間和成本都不划算，成本是 token。另一條是分析 DOM。React 之後，送給使用者的 DOM 常常沒有語意，就是一百個 div，通用標籤，什麼都不表示。只靠 DOM 去懂，不是每個網站都有用。原生 iOS 也可以截圖，但還有 accessibility tree，和螢幕閱讀器用來理解 app 的是同一棵，他覺得這很有用。Web 上可以做類似的事，他看過一些測試，結果並不好，所以大多數仍用舊的截圖。Guy 說，就算是專家打開那個 DOM、不看畫面，也很難分出什麼是什麼。Max 說那是為人腦優化的。

## 註冊一個函式，航空公司不必再教日曆

[10:48](https://www.youtube.com/watch?v=vuxztj8MXxI&t=648s) Web MCP 是網站開發者暴露給 agent 的 API。你說：若你想跟我的網站說話，這裡有幾項服務。你註冊一份服務或工具清單，就是暴露給 agent 的 JavaScript 函式。Agent 逛一個支援 Web MCP 的網站時，會看有哪些服務，試著找一個適合它目標的，然後執行函式，而不是用眼睛看、用手點。函式在客戶端的 JavaScript 裡跑，但可以用一般的 web API 去連雲、用藍牙連硬體。

[12:17](https://www.youtube.com/watch?v=vuxztj8MXxI&t=737s) 最簡單的例子是航空公司網站。搜航班要找到出發、目的地，打開日曆或打日期。每家航空的日曆都不一樣，agent 得先懂那個日曆。改成提供一個工具：`search flights`。你指定輸入的 schema：出發、目的地、兩個日期、單程或來回，看你要定義什麼。再把一個 JavaScript 函式交給 Web MCP API，說 agent 要執行時就跑這個。函式裡可以做本機的事，也可以去自己的後端。還可以和標準 UI 共用函式。有一個旗標可以看現在是 agent 在執行還是使用者，若你想分兩種做法。回傳是非同步的，agent 會等。等待時可以去雲、去硬體、去感測器，甚至問使用者。

[13:56](https://www.youtube.com/watch?v=vuxztj8MXxI&t=836s) 若是下單或確認會花錢的事，網站可以說需要問使用者。API 讓你打斷 agent、去叫使用者。精確地說，你是問瀏覽器。瀏覽器告訴 agent：你等，我去問人。畫面上可以是一個對話：「你確認要買這張機票嗎？」使用者說 yes，再回到 agent、確認操作。這和使用者正坐在瀏覽器後面有關，例如 agentic browser。若你只是問 ChatGPT 或 Claude、它自己跑去，瀏覽器並沒有在跟你互動。他說標準還得把這個弄清楚。以現在的實驗功能，Web MCP 只在看得到的瀏覽器上工作，不在 headless。這不是協定的意圖，只是最初的實作聚焦在那裡。

[15:23](https://www.youtube.com/watch?v=vuxztj8MXxI&t=923s) Guy 問，這和公開一份 OpenAPI、讓 agent 直接程式化地跟系統互動，差在哪。Max 說沒有 web 的 MCP 世界也有同樣的問題。OpenClaw 或其他 agent，例如 Claude Cowork，可以接 MCP，也可以直接在終端機跑 CLI，所以不一定需要 MCP。你若已有 REST、別種 API、MCP 或 CLI，就不一定需要走網站。他認為要看專案。有些工具要驗證，客戶端有很多本機資料庫，在瀏覽器的 context 裡、從安全來看，會更好。你不想把 API 開到外面。而且 Web MCP 不會自動套到你的網站。你得去 JavaScript 裡實作。Guy 把新穎的地方放在：接收者是頁面上的 JavaScript 函式。頁面有豐富功能時，你不想讓 agent 自己在系統裡挖，你想給它一個對 agent 友善、可程式化的客戶端介面。伺服器側的活動，和 OpenAPI 有重疊。

[18:00](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1080s) 一個比純伺服器好的例子是 Apple Pay 或 Android Pay。要把付款做完、要用 Apple Pay，必須在客戶端。你不會把信用卡資料送過 REST。所以購物車常被拿來當 Web MCP 的例子：購物車活在客戶端，不在伺服器。真正下單那一步還是會到伺服器。為什麼 agent 不直接去伺服器下單，是個公平的問題。他覺得現在比較是在跟著標準的 UX 流程，而不是做一個百分之百為 agent 優化的 web app。也許以後會有只給 agent 的系統，那會是完全不同的架構。

## 和 MCP 同概念，但是另一套 JavaScript

[19:33](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1173s) 這些 agent 大多用 Playwright 或 Puppeteer。那兩樣本來是瀏覽器自動化，會開一個 headless browser 去跑你的 web app。ChatGPT 一開始只是把 HTML 轉成 markdown，甚至不執行 JavaScript，最初的 plugin 很簡單。老實說，你請 ChatGPT、Claude 或 Gemini 讀一個 URL 並摘要，大多數情況仍是下載你 HTML 的 markdown 版。網站若百分之百是客戶端渲染，它會說讀不了。Agent 是下一步，通常在扮演使用者，這時才用 Playwright、Puppeteer。他不確定 Chrome 團隊會不會多想 headless。他們的目標是加強 Chrome 的 agent mode，所以在做這支 API。他希望更多公司，也許 OpenAI，進到 W3C 討論給那些 agent 的 API。他說 OpenAI 是 OpenClaw 的贊助方，字幕把名字聽成 Open Claude。他們以前不在 web 社群裡，這對他們大概是新的。做 MCP 的 Anthropic 也許也有興趣進 Web MCP，他還沒看到這件事發生，猜接下來幾週或幾個月會有，然後這支 API 會更新。Guy 說 Anthropic 在圖像分析上沒有某些對手強，對他們來說走正確的程式介面也許更划算。

[23:03](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1383s) 和標準 MCP 相似的是概念。看技術細節，是兩套協定。標準 MCP 是 JSON 進、JSON 出，有不同版本。最早走 HTTP，用了一種很舊的技術，他說是大約三十年前一本書裡的做法，因為當時不支援 websocket，所以是 HTTP 上的 long polling。本機還有二進位 socket。你暴露服務，就是打一個名字、一段英文描述，再加上正式 schema：四個引數，第一個整數，第二個字串。Web MCP 是同一個想法，但不能把現有的 MCP 匯過去，得重寫，因為架構完全不同，它是 JavaScript。寫法很簡單：`navigator.modelcontext.registertool`，三個引數，名字、一段較長的英文描述、一個 JavaScript 函式。Agent 會去查這些工具、讀描述。它要改機票訂位，就看哪個描述對得上，再用你要的輸入 schema 把引數傳進那個函式。你的 API 可以回布林、整數、訊息或物件，物件以 JSON 回到 agent，再交給 LLM。Guy 說這種簡單，也是 MCP 能被採用的原因之一：複雜度放在那一行自然語言和那個消費者身上，回傳也可以因此變簡單。門檻比 REST 還低，REST 本身已經是一次簡化。

[26:47](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1607s) 還有更簡單的宣告式版本，只有 HTML，不必寫 JavaScript。表單上加一些屬性，告訴 agent：若要觸發這個動作，這是表單，這些是要填的欄位。另一件現在沒有的能力是：網站無法知道自己正被 agent 管理或使用，連做 analytics 都不行。他說 X，也就是 Twitter，改了一些東西來阻止 agent 發文，而且說他們在驗證是不是真的有一根手指碰螢幕。在 web 上你看 touch event，但 Puppeteer 或 Playwright 可以模擬觸控，網站永遠不知道那是 agent。Web MCP 在 window 上加了可以聽的事件：tool activated 和 tool cancel。API 裡把 agent 叫成 tool。它在控制網站時，你可以改 UI。也有 CSS pseudo class，agent 負責時可以改介面。若使用者看得到畫面，你可以告訴他 agent 正在負責，不只靠瀏覽器自己的那則通知。

## 電商會先做，報紙可能拒絕

[29:08](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1748s) Guy 把這放進一個更大的趨勢：AI 在把以前拆開的東西合回去。API 和網頁分開，很多方面是好架構，兩者不耦合。但 agent 要編排很多個實體時會混亂。Monorepo 興起，是因為 agent 載入一個 repo 就全都在手邊。Web MCP 的一個好處是把動作放進網頁，單位更完整，agent 比較好互動。誰會先採用？他覺得最強的動機在電商。你要賣產品或服務，不在乎是人或 agent，你要的是消費者的錢。所以會盡快提供盡量多的工具，讓他們快點買。部落格、報紙他有時看到相反的事：作者拒絕 agent。因為智慧財產，也因為使用者不會進站，只拿到內容，作者身份和功勞就出去了，功勞不夠。那裡仍可以做 Web MCP，他不覺得很有意義。客服比較有用：電話帳單出問題，你叫 agent 去解，處理 support ticket 會是不錯的用例。宣告式 API 作用在表單上。網站沒有表單，看起來就沒有用例。

[33:03](https://www.youtube.com/watch?v=vuxztj8MXxI&t=1983s) Guy 問 end-to-end 測試。畫面一直變，測試不必每次 pull request 都重寫，會不會是用例。導覽可以，而且同一個表單可以標成 tool，同一個 JavaScript 函式可以既被網頁叫、也被 tool 叫。Max 說現在的 E2E 也是 Playwright 和 Puppeteer，和 agent 逛網站是同一套工具。他覺得 Web MCP 比較像單元測試：你在測一個函式是否正常。看起來像人的端到端、東西長什麼樣，仍要另做。那不表示不能開始用 LLM，也許還有本機的圖像 model，來提高那種測試的速度和準確度。已經有非常小的 model，本機就能把 web 測試做得不錯，不必花雲端 token。想現在試：要 Chrome 146、打開 flag，再裝一個叫 model context tool inspector 的擴充，用來除錯。他說很簡單，不必花兩個月訓練。比較難的是想清楚你要哪些動作、哪些使用者流程，不是技術複雜度。Guy 的摘要是：有複雜 web 應用的人該盯著。它在實驗階段，以 AI 的變化速度，畢業也許比想像快。目前聚焦在互動式網站和看得到的瀏覽器。最該注意的，是想擋 bot 的人，像那則 X 的貼文，以及想打開瀏覽器側功能的人，例如電商結帳。

## 瀏覽器裡的 model，不必是 Opus

[36:44](https://www.youtube.com/watch?v=vuxztj8MXxI&t=2204s) 今天幾乎所有 AI API 或 AI 應用都在用雲：Gemini、OpenAI、Claude，或任何在雲上做推論的供應商，你付 token。另一條每年在長，他叫 web AI，不確定所有開發者都用這個名字，也叫 client-side AI。意思是在使用者的裝置上執行 AI model，甚至 LLM。不是在你的 web server 上。沒有最新 Opus 4.6 的能力，很多時候也不需要。例如只是幫一篇貼文分類，或檢查使用者的文字裡有沒有仇恨、侮辱，要濾掉。非常小的 model 就夠，而且比較便宜，因為不必付雲。這和 Ollama、LM Studio 是同一件事的另一種變體。那些是把 model 下載到你自己的電腦。這裡是下載到瀏覽器裡、為使用者執行，使用者甚至不知道，也不必安裝、不必懂 model。

[40:05](https://www.youtube.com/watch?v=vuxztj8MXxI&t=2405s) 第一種是內建 model。今天只有 Chrome，而且只有桌面，Android 要來了。Chrome 可以下載一個小的 Gemini，Gemini Nano，任何網站都能用 JavaScript 在客戶端推論。它比雲上的 Gemini Flash 還小。翻譯相當好，他說測試裡大約 25 種語言過關，完全在客戶端，JavaScript API 對到使用者 Chrome 裡已經有的本機 model。預設安裝 Chrome 時 model 不在。第一個要求使用這支 API 的網站會下載、裝到使用者裝置上，之後這個網站和其他網站都能用。大小大約 8 GB，所以不跟 Chrome 一起來。下載之後是 4 到 8 GB，因為其實是三個 model，看你要求哪一個。比 Chrome 本身還大。也許以後做進作業系統，瀏覽器問作業系統有沒有 model，網站就在本機執行。他覺得正往那裡走。只有 Chrome 還不夠好到可以只用這個、別的都不用。

[42:38](https://www.youtube.com/watch?v=vuxztj8MXxI&t=2558s) 另一條是函式庫。每個瀏覽器，包括 Safari 和 Firefox，都有低階 API：WebAssembly 用 CPU，WebGPU 用 GPU。有些作業系統還有 WebNN，電腦裡若有專用的 AI 晶片，JavaScript 可以用它。這三個低階 API 上面，現在大約有八個開源函式庫，來自 Chrome 和其他供應商，可以在 CPU、GPU 或 AI 晶片上跑 model。他說晶片有人叫 TPU，也有別的名字。你的 web app 可以下載開源 model，Llama 或 Google 的 Gemma。有些版本是半個 GB，500 MB。用 JavaScript 下載，在客戶端執行，iPhone 上的 Safari 網站也行。不適合當治療師，也不適合教歷史，那些 model 沒那麼好。摘要、分類、客服聊天可以。你可以做一個小的 RAG，把你自己的資料接上 LLM，做成客服 chatbot。推論成本發生在客戶端。你仍要有雲端 API 當退路。Google 有一個 Firebase API，客戶端執行，若客戶端推論不了，就退到伺服器上的 model。

[45:13](https://www.youtube.com/watch?v=vuxztj8MXxI&t=2713s) Guy 說數字聽起來可怕，直到拿來跟一支 YouTube 影片比。半個 GB 不是每個頁面載入都該要求。Max 說也可以用 API 存成離線，回頭的使用者只下載一次。價值有成本：客服 bot 或翻譯 bot 不必人人來敲你的雲。有延遲：圖像方面他覺得有時和雲一樣；文字要看你送多少，很短的標籤，本機 model 可以很快。還有隱私和安全。某些 SaaS 想讓功能只發生在客戶端，端到端加密，伺服器永遠看不到資料，就不能用雲上的 LLM。本機跑就可以，他舉 WhatsApp 那種在你自己的 app 裡。他也說不必把 LLM 當成唯一解。Apple 發了一個開源 model 做圖像偵測，大約 200 MB，客戶端。鏡頭對準東西，它告訴你這是什麼。可以有完全本機的 OCR、偵測物體，甚至沒有網路、離線，針對很特定的用途，而且真的能動。有時它們是從更大的 model 蒸餾、再優化來的。Guy 說這既不大、也不一定是語言。Qwen 有一個 5 億參數的版本，很小，你可以在自己電腦上微調，不必很大的機器，用你的資料。微調前它對事實很差。微調後你有一個還不錯的小 LLM，懂你的東西，可以在每台裝置上本機跑，包括手機。

[49:07](https://www.youtube.com/watch?v=vuxztj8MXxI&t=2947s) Guy 說今天這樣做是在前沿，聽眾裡真正對得上力氣和回報的用例大概很少。開放 model 在變好，而且是 AI 的速度，通常落後大約六個月。若用例夠具體，微調可以再把差距補上。就算沒有，若你在做新生意、新的互動方式，這是該放在心裡的核心能力：什麼該上伺服器，什麼留在客戶端。像當年的 responsive website，更像 progressive web app，很多伺服器功能已經移到客戶端。他看到最有趣的採用是客服 bot。Token 帳單可以變得很高，尤其是有人在 hack prompt、他們對花出去的錢失去控制的時候。他們有興趣換成客戶端：你要 hack prompt 就去，那是你的電腦，你在 hack 你自己的 model，他們不在乎。第一個專案、MVP，也許 50 美元還可以。規模上去，也許收到一張 100,000 美元的 token 帳單。那時才看能不能把一部分移到客戶端，品質不變、把帳砍下來。Guy 把它說成升級：你先跟第一線、也就是本機 model 說話，然後說讓我跟你的老闆談，就上到雲。客服是最早被換掉的角色之一。他在 Tessl 的開場投影片裡有一條：agentic development 先便宜、再變貴。一開始便宜，是因為一個人能做很多；然後帳單來了。大多數人還沒到那裡，仍在發現階段。Max 說若看一些他們並沒有的數據，他猜用 client-side AI 的公司不到 1%。品質、成本和效能每年都在變好。若其他瀏覽器也做，例如 Safari，他提到和 Google 的一個新的 open intelligence 合約，也許也會在本機放 model。那樣的話，web app 裡會看到更多內建的 AI API。

[53:55](https://www.youtube.com/watch?v=vuxztj8MXxI&t=3235s) 他們還沒談瀏覽器的 sandbox。和 Ollama 比，你仍在 sandbox 裡。兩個分頁，扣掉瀏覽器支援的分享，理論上各有自己的副本和資料。一個惡意網站不能把另一個分頁的資訊吸走。今天先把可能的漏洞放一邊。Max 同意。LLM 今天仍是黑箱，你送輸入、拿回東西。兩個網站送的是不同輸入，沒有綁在一起，只是對同一個 LLM 的兩次 prompt。有沒有 LLM，安全那件事是一樣的。Guy 把整集收成：瀏覽器是 AI 的 sandbox。Web MCP 是怎麼讓它跟 agent 互動，很多圍繞安全、驗證、購買，也就是信任的委託。本機 LLM 是另一條路，但同樣指向瀏覽器自己會有 LLM 的能力。第一層比較像中介或介面，再往下它可能真的帶著引擎去做。對做網站的人，先想 agent 怎麼互動，再想怎麼把 agent 的功能嵌進你本機的 web。

[56:16](https://www.youtube.com/watch?v=vuxztj8MXxI&t=3376s) 他覺得這會更重要，因為又有人第 n 次以為 web 正在死。看 vibe coding 和 AI 寫出來的那些新 app，它們是 web app。Web 在長，不是在死。所以更有機會開始用這些新架構。往後三年，他預期原生 app 會變少，至少在手機上 web app 會變多。桌面上現在反而有一波人在做原生 app，他覺得那是安全問題。手機上他看到更多 web app。也許以後不叫這個詞，只是一個連結、一個 QR code、一個使用者和 agent 都在用的介面。也許改叫 AI app，或 vibe coded app。它仍是 web。本機 AI 的價格和品質未來幾年會進步很多，帶出很多新用例。不是全部本機，也不是全部是 web app，但他看到很多會移向那個更快、大概也更有效能的未來。Guy 說每次 web 變強，就會再爭一次：為什麼還需要原生。若功能更 agent、介面因為聊天或因為 API 而變簡單，這場辯論會再來，而且 web 會贏。Max 說他這麼認為。今天大概仍是先驅者，以及電商，或非常在意怎麼控制 agent 行為的人。以 AI 的速度，很快就會和更多人有關。
