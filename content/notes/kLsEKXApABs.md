# Redefining Developer Workflows in the AI Era with MCP | Steve Manuel

Simon Maple 的 AI Native Dev，來賓是 Steve Manuel。他在舊金山灣區，公司字幕聽成 Dilipso，下文用 Dylibso。他做 mcp.run 和 Turbo MCP。片長 50 分 8 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Claude 聽成 cloud，把 stdio 先聽成 STD。MCP 是 2024 年 11 月宣布的，他說感覺像十年前。

- 原片：[YouTube](https://www.youtube.com/watch?v=kLsEKXApABs)

## 一句話

MCP 解的不是「模型會不會叫工具」。Tool use 早就有。解的是每家描述工具的方式都不一樣，介面得重寫。一個 MCP server 對上一份資料、一支 API 或一個服務之後，任何 client 都能用。Steve 把它看成所有 AI 軟體的 plugin 系統，而 Dylibso 原本就是用 WebAssembly 做隔離的 plugin。信任還沒到。現成的 server 不能信。stdio 若不是自己寫的，權限就是你這台機器的權限。比較能信的是提供者自己的端點，或你放在自己網路上的那一份。

## 同一條線，接到任何 client

[1:32](https://www.youtube.com/watch?v=kLsEKXApABs&t=92s) Simon 開場要講 MCP 的架構、mcp.run、Anthropic 新的 registry，以及對開發者和產業的未來。Steve 說自己走上 MCP 多半是意外。Dylibso 從一開始就在做運算隔離，用 WebAssembly 做 plugin 系統，讓應用能超出原本的設計被擴充。終端使用者把新的 code 注進應用裡，靠的是 Wasm runtime 的安全模型。這是擴充第三方軟體的一種實際、安全的做法。2024 年 11 月 MCP 一宣布，他這個做 plugin 的人看得很清楚：這是所有 AI 軟體的 plugin 系統。若接受所有軟體都會變成 AI 軟體，那麼要緊的就是這個 plugin 系統。他們很早採用，把協議做在自己的隔離 Wasm stack 上。公司因此有了新的動態：把可擴充性帶進新地方，也探索還能透過 MCP 這層連接，把功能送進應用和大型語言模型之間。

[4:49](https://www.youtube.com/watch?v=kLsEKXApABs&t=289s) Simon 說 Anthropic 那句他大概用太多次了：MCP 像 AI 的 USB-C。USB-C 的價值是同一套接法接到處都是，人知道怎麼用。MCP 解了現有 API 模式沒解的什麼？Steve 喜歡這個比喻。USB-C 更像一個連接埠，電話、電腦、相機，線是標準的，旁邊任何一條都能用在很多裝置上。MCP 一樣。一旦某個資料集、API 或服務有了 MCP server，同一個 server 可以用在任何端點、任何 client：ChatGPT、Anthropic，或一個為了多種任務特別做的 agent。他說這是 write once, run anywhere，而且特別提，因為 Simon 穿著 Java 的衣服。

[6:33](https://www.youtube.com/watch?v=kLsEKXApABs&t=393s) 核心問題，他確定核心團隊會氣他把問題收得這麼窄：就是 tools。Function calling、tool calling、tool use 不是新能力。但每一個 model、library、framework 描述工具的方式都不同：參數怎麼給、值怎麼回、工具長什麼樣。簽名是什麼？是 JSON 檔，還是自由文字？於是大家得在不同 model 或 agent framework 之間重寫工具，或至少重寫工具介面，非常累。Anthropic 意識到可以讓人更容易分享、重用這些實作，跨過各種工具和服務。Simon 記得 2024 年 11 月的發布幾乎很安靜，但看得到它怎麼讓 LLM 做決定，而且是以跨 model 的標準方式解開。

## Server 對著上游，client 挨著 model

[8:44](https://www.youtube.com/watch?v=kLsEKXApABs&t=524s) 協議像很多 client-server 協議，尤其像 HTTP，拆成兩段。Server 是你跟上游資料來源或服務溝通的方式：做一個動作、讀一封信、呼叫一個能給 model 額外 context 的系統。Client 是 server 和 model 之間的攔截者，透過協議拿資料、叫工具、管資源。Client 就在 model 旁邊，通常包在規格所說的 host 裡。Host 可以是 ChatGPT、Claude desktop，或一個有工具的 AI agent。MCP client 知道怎麼發現並連上 server，也會做規格裡的功能：列出工具、呼叫工具、找 resources。人把 client 裝在 Claude desktop 或 Claude Code，或任何想用 MCP servers 的地方。大挑戰是要選哪些 servers，也就是發現。

[11:09](https://www.youtube.com/watch?v=kLsEKXApABs&t=669s) Anthropic 和做協議的社群小組已經有官方 registry。他不想代他們說話，只轉述已經公開的目標：一層通用、可發現的基礎設施，提供指標和列表，servers 可以住在別的 registries、GitHub 或任何地方。社群還能在上面做子 registry，例如只收行銷工具、開發工具，或金融服務，全都從這一層拉。他點名花了很多時間的團隊，主要來自 Block、Pulse MCP，以及字幕裡的 Throped，還有更多人。實作是開源的。MCP 剛宣布時是一片蔓延：工程師把 CLI、本地執行檔接到聊天應用。最好的找法是在 GitHub 裡翻，看誰的 NPM library 把自己呈現成 MCP server。需要一個地方找到高品質的 servers，也要用身份把生態守住：發布的人要能證明他們發布的是自己擁有的、可信的東西。信任和品質管理還有很多工作。至少有一個大型的通用 registry 是對的方向。官方 registry 出現之前，很多公司和團隊先做了 registries 來補空檔，他們自己也做了。

[13:48](https://www.youtube.com/watch?v=kLsEKXApABs&t=828s) mcp.run 不一樣。它放的是使用者的 code，那些 MCP servers 由 WebAssembly modules 實作。可以在很隔離的環境裡執行。他說這種安全，以同樣的效率、成本和效能取捨，別的技術比不了。不必跑 Docker image 或整台虛擬機，只跑 Wasm module 裡實作 tool calls 的一個小函式。目標一直是給第三方 code 最安全的執行環境。同時他看到很多 MCP servers 搬去自己的遠端主機。PayPal、GitHub 和其他公司意識到，應該像發布 HTTP API 一樣發布一個端點，讓更偏 agent 的 client 來用。他對這個方向興奮：最後會是第一方提供者自己掛的官方 MCP servers。

## 現成的不能信，stdio 是紅燈

[15:23](https://www.youtube.com/watch?v=kLsEKXApABs&t=923s) Simon 的背景是 Snyk。一聽到開源第三方程式庫的漏洞和惡意程式庫，他就會抖。破壞可以很大。他用過別人的 MCP servers，看 GitHub repo 時覺得得做一次完整的 code review，才知道合不合法、會不會有點不對勁。第三方在跑 MCP servers 讓他害怕。若是來自可信來源、驗證過的，那就是網路上他們提供的另一個服務。他問離真正信任還有多遠，以及新創、中型公司、企業有沒有已經在 production 裡用。

[17:00](https://www.youtube.com/watch?v=kLsEKXApABs&t=1020s) Steve 說宣布之後有一段相對安靜，他當時覺得意外。一開始太面向開發者。開發者很快看見潛力，然後在 2025 上半年爆開。現在協議在夠多種 client 裡實作了，非技術的人也看得到。他看到每一種公司規模都有，從新創到很大，連受管制的銀行和金融服務也開始明白：若要讓員工用 AI 提高生產力，下一步就是把那個 AI 接到內部的工作應用。人在接 Salesforce、HubSpot 或 CRM，做 prospecting、加強 leads、寫信、回信。客服很大。Intercom 有一個叫 Finn 的 agent。Finn 做了 MCP，客服團隊可以把服務和工具接到 Finn 上，讓它對正在處理的客服問題做更主動的資料查詢或動作。它已經走出開發者的房間。

[18:53](https://www.youtube.com/watch?v=kLsEKXApABs&t=1133s) 信任是大問題。你不能真的信任任何現成找到的 MCP server。這話來自一個自己在經營 MCP 服務的人，他當然希望大家信任他們，但你不能信任任何東西，因為你不知道幕後發生什麼。Model 從你的 prompt 抽出資料、送到那個 server 之後，呼叫那個工具時實際發生了什麼。第一步其實是只用提供者自己的 MCP servers，就像你會信任對 Spotify、PayPal 或 Google 的一般 HTTP API。他們應該、也希望有一天會提供第一方的 MCP server。那能減輕一部分信任問題。Simon 說，沒有提供者自己的 server 時，問題才開始。他私下聽過有人做了一個助理，吃進全部行事曆、郵件、Notion 和 Linear。來自原公司的 MCP servers 少得可憐，於是最敏感的資料靠第三方開源工具。做對了生產力很大，但你把自己打開了一點。

[22:08](https://www.youtube.com/watch?v=kLsEKXApABs&t=1328s) 他愈來愈相信，standard IO 的 MCP servers 從來不是對的選擇，除非是你自己寫的。風險很大，而且風險在你的機器上，權限和你這個使用者一樣。它可以讀環境變數，可以用任何協議、任何工具隨意打網路，可以讀寫檔案系統。這是使用者會面對的紅燈、最高嚴重性。把 servers 搬到遠端或雲上的受管端點，拿掉的是使用者電腦這一層風險。仍有時候需要 stdio：你主要在用開發工具，得叫機器上的 CLI；或專案只在本地，server 在處理 IDE 的診斷。除非你用某種受管的雲端生成 code 平台，否則那上不了雲。他說 Simon 這邊大概知道幾個好的。遠端比較安全，但你還得信任端點是真的，並且連得上、認證得了。沒有死規則。看資料是什麼、資料住在哪、認證是什麼、安全風險是什麼。各種 transport 存在，是因為各有使用的時機。他認為我們正在離開在使用者機器上執行的本地 stdio，因為遠端實作變多，也遠比較容易信任。

[24:18](https://www.youtube.com/watch?v=kLsEKXApABs&t=1458s) 在自己的基礎設施上遠端跑，和連到網路上別人給的 URL，是兩件事。提供者沒有 MCP server 時，你可以自己包一支 API，放在自己的網路上，再連過去。很多公司往這個方向走，為的是控制和透明：團隊的 MCP clients 到底接到哪些工具。他打了產品：有一個自架的 MCP 平台，Turbo MCP。這是做 mcp.run 之後學到的。大型組織、更在意安全的人，不會信任一個公開的 proxy，把 client 的 MCP 流量、資料庫或 SaaS 裡的敏感資訊，經公開 proxy 送到上游。為了讓人擁有那個 proxy 和那些流量，他們做了 mcp.run 的自架版，比較大，面向更在意安全的企業客戶。個人用公開 proxy 仍然可以，但你承擔一點風險：信任對方不會把你的 Notion 或行事曆送到某個廣告服務；若他們被入侵，他們手上有你的 auth tokens，以及從郵件抽出來、也許躺在他們資料庫裡的明文。Simon 確認：mcp.run 由他們全管，Turbo MCP 可以在自己組織裡架起來用。

## 只要實作那次 tool call

[26:49](https://www.youtube.com/watch?v=kLsEKXApABs&t=1609s) 上面可以放兩種東西：MCP servers，以及 servlets。Simon 說很多年沒聽到 servlet 這個字，還為這個時刻掉了一滴淚。Steve 說 servlet 和規格、和 MCP 完全無關。這個詞很早選的。若能倒帶，也許不會用。但它太貼了。Java 裡 servlet 是 HTTP 的一個子集，讓你重寫一個跑在 Java 裡的 HTTP server：攔截請求、跑 code、把回應送回 host。mcp.run 的 servlet 是 MCP 的一個子集：攔截一次 tool call，實作它，回一個結果。開發者只要擔心想支援的那些 tool call 函式，不必自己站起整個 MCP server：選 transport、想認證方案，以及很多不是「實作一個工具」這門生意核心的事。這是他們對 MCP 簡化的玩具用詞，也是 serverless、不做基礎設施、只交一個小函式。Simon 問會不會也出 applets。Steve 說不會，要把世界從那個麻煩裡救出來。

[29:28](https://www.youtube.com/watch?v=kLsEKXApABs&t=1768s) mcp.run 底下是他們另一個服務 XTP，大致是 plugin system as a service。若你想給應用加 plugin 系統，XTP 讓你容易接進客戶或使用者的第三方 code，並在應用裡執行。想發布到 mcp.run 的人，介面的是幕後的 XTP。下載一個 CLI，它把你放進一個 MCP servlet 專案。語言可以是 JavaScript、Zig、Rust、Go、Python、C#、C++。樣板有兩個函式：一個是 tool call handler，一個是工具的描述。你填實作。例如一個叫 get email 的工具，連到 Gmail API，依你在描述裡定義的輸入參數搜尋，再回 tool call 的結果。目標是把人放進型別清楚的樣板，自動完成比較好。限制是這些實作都編成 WebAssembly modules，限制是故意的。若你跑一個不信任的 MCP server，又透過它認證 Gmail，那個 server 有你的 token，也有能力把資料送到別的地方。資料一進 server，就是別人的 code。他們可以把你的郵件清單寫進磁碟，或送到第三方，你不會知道。他們的做法是：開發者註冊要發布的 server 時，必須列出 code 可能連出去的網域 allow list、執行時需要的環境變數 allow list，若要檔案系統，還得事先列出想核准的路徑或目錄。使用者在 mcp.run 上安裝時，允許那些網域、變數和路徑可用。於是你清楚這個 Gmail servlet 只會跟 api.google.com 說話，不會跟開發者碰得到、或會漏資料的第三方。資料留在你預期的地方。這至少是降低風險的起點。Simon 說這很像市集上的 app 宣告自己能碰什麼。

[33:20](https://www.youtube.com/watch?v=kLsEKXApABs&t=2000s) 認證是協議早期較大的問題之一，因為沒有標準或建議。大家用各種 hack，把 token 或 key 塞進 transport。現在協議採用了 OAuth 2 的一個子集，叫 dynamic client registration，好讓 MCP server 對上已經標準化的認證流程。使用者可以把存取委派給一個 AI agent 或應用，去用 Slack 或 Salesforce。大致是按一次登入，剩下的流程處理。不必從某個儀表板複製 API key，貼進機器上或某個 client 裡的 JSON。對非技術使用者順很多。還不完美。實作 dynamic client registration 仍然難，現在有一批服務在幫忙。Turbo MCP 決定幫開發者做掉這塊：不管他們的 MCP server 怎麼做認證，client 仍能對使用者的單一登入 IDP、Okta 或 Keycloak 認證使用者。Dynamic client registration 只要他們實作，server 再用別的認證方案連上游。站起來、部署到自己雲上的人，不必做完整的端到端 OAuth。他們從 Turbo 的 authorization server 拿一個 token 就能走。

[37:12](https://www.youtube.com/watch?v=kLsEKXApABs&t=2232s) Production 的光譜他覺得很寬。開源、讓終端使用者自由安裝，也得 production ready，因為使用情境很多。要透明：實作在做什麼、怎麼跟第三方溝通、向上游要了什麼資料再交回 client。那是信任和透明。企業裡使用者常常不是技術人員。請行銷部門的人產生 API key、搞懂 scopes，可能太多。要想這個人怎麼走 IDP 或單一登入的一條容易的路，怎麼嵌進他們的工作流。不然對很多人摩擦力仍然太高。

## 一個 prompt 加工具，就是一個 agent

[38:31](https://www.youtube.com/watch?v=kLsEKXApABs&t=2311s) Simon 喜歡 mcp.run 上的 tasks：一個任務在背景跑，通常透過它碰得到的一組 MCP servers，也有 webhook。還問互動能不能超出文字。Steve 說 mcp.run 一開始，人想的是用一個 server 自動化一個動作，做一次快速搜尋。當時這些聊天應用裡甚至沒有網頁搜尋，所以一個能讓 model 去搜網的 MCP server 是大事。然後清楚的是多輪對話：使用者給一個大 prompt，AI 把它拆開，做成待辦，多個步驟自己做。每一步可以連到不同的 server。一步從 Notion 讀專案資料，下一步拿 Notion 裡的一個詞去 Linear 對一項具體工作，再下一步在筆電上打開 code 專案開始做那個功能，做完把 Linear 票從 in progress 改成 done。一個 prompt 裡，model 分辨在可用的 servers 上、何時叫哪個工具。那是燈泡：這些就是 agents。它只是一個掛了工具的 prompt。不是一個獨立的成品，不是一份新的 codebase。於是他們做一個 runtime：放一個 prompt，讓你掛工具，再用排程、手動，或 webhook 觸發。Tasks 就是這樣來的。它像一個沒有指定方向的圖，一個 workflow builder，只是 prompt 加工具。從工作流自動化看，它在跟 Zapier 或 Integromat 競爭，但是大幅簡化：寫一個好 prompt，給它工具，看後面發生什麼。

[42:00](https://www.youtube.com/watch?v=kLsEKXApABs&t=2520s) Simon 說 Zapier 仍得手動把東西接起來。這裡的 task 比較自由，很多決定在背景發生。Steve 說很多其他選項還在箭頭和方塊的時代：做一個元件，拉一條箭頭，若發生這件事就到下一個方塊。Models 現在夠好，依 tool call 的回傳值處理不同情境，本來就是 model 的能力和知識。甚至不必用很大的 foundation models。他們看到小型語言模型也很會用工具、把順序排對，把工作流做準。

[43:15](https://www.youtube.com/watch?v=kLsEKXApABs&t=2595s) 文字之外還有很多空間，很大程度卡在 MCP client 的支援，以及各 client 怎麼呈現文字以外的媒體，並不一致。協議要求多媒體編成 base64 字串。一開始 client 就多一步：編碼、送到 server、再解碼來用。有辦法繞，但大致仍得把圖片、影片或 GIF 編成文字才能送過 transport。若更多 client 支援多媒體，送出去和把 server 回的圖片畫出來，會解開一些用例。另一個不一定跟多媒體有關的專案叫 MCPUI。Client 把 server 的訊號解讀成：在聊天應用或 client 所在的地方，畫出一種新的介面。使用者不只是送一句、收回一句，可以按一個按鈕，拿回一份產品清單，畫得像電商網站，有描述、價格、購買鈕。一個 MCP server 可以做出整個應用，完全經 MCPUI 畫在各種 client 裡。更豐富的媒體，以及在這些 client 裡動態畫 UI，會出現現在想像不到的用法。

[45:35](https://www.youtube.com/watch?v=kLsEKXApABs&t=2735s) 這集播出時，MCP 發布大約十一個月。還不到一年。再一年會怎樣，會不會仍是大事，還是下一件大事把注意力帶走。Steve 不預測 MCP 以外的未來。採用還有很多，我們只看到冰山一角。缺的一塊是更多不必認證的服務和資料來源，像瀏覽網頁。你不是總帶著身份上網。你讀文章、看某個主題的更新、讀別人的 blog，不一定登入。現在的 MCP clients 過度配置。你得非常明確：用哪個 server、怎麼被建起來、裡面有哪些工具、這個要核准、那個要核准。那是好事。他覺得有趣的自主互動，會出現在人決定把自己的小應用、blog 或網站先做成 MCP server，而 client 可以選擇用 MCP 連上，不必使用者事先把 server 加進 client。像今天上網：畫出一個頁面，點一個連結。那個連結在更自由的 MCP client 裡，就可以是一個 MCP server。你在 servers 回來的內容裡走，結果裡也許嵌了一個 MCP server 的 URL，model 跟 client 說去連那個 server，使用者不必知道，然後自動叫工具、拿更多 context，走出一張完全基於 MCP 的新網。Simon 說那就是你自己策展的網，新的瀏覽器、新的入口，也問 MCP 的瀏覽器該長什麼樣、client 還得做什麼。他自己已經放棄預測。他想一年後再請 Steve 回來，看當時想的有多近。Steve 說錄這集的這一個多小時裡，大概已經有東西變了。一個半月前他休了十天，再也不敢，太難追上。

[49:12](https://www.youtube.com/watch?v=kLsEKXApABs&t=2952s) Simon 要人去看 mcp.run 和 Turbo MCP。更多資訊在 mcp.run，或字幕裡的 delipso.ai。Twitter 是 nilslices。信箱字幕是 hello@delipso.ai。
