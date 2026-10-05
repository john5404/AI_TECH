# Why Most Observability Platforms Won't Survive the AI Agent Era

Guy Podjarny 訪問 Mirko Novakovic。Mirko 創了 Instana，賣給 IBM，現在是 Dash0 的 founder 兼 CEO。片長約 56 分鐘，英文自動字幕。字幕把 Dash0 聽成 Dash Zero，把 Tessl 聽成 Tessal。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=wueNYL-wNiU)

## 一句話

可觀測性平台若只負責存資料，價值會發生在 Cursor 或別的 SRE agent 裡，自己就變成資料庫，價格往下比。Dash0 押的是另一條：資料從頭到尾保持 OpenTelemetry，因為 model 讀得懂這種文字；人看的不是圖，而是 agent 先做完分析之後還能一起改的畫面。公司裡真正會查 production 的人很少，那些知識在他們離開時一起走。

## 格式標準了，欄位卻常常不在

[1:48](https://www.youtube.com/watch?v=wueNYL-wNiU&t=108s) 他們一開始不叫 AI native，叫 OpenTelemetry native。事後看，那是 AI 的好地基。OpenTelemetry 統一遙測格式：metrics、traces、終端使用者事件，以及叫做 semantic convention 的標籤。例如主機名現在是 `host.name`。平台只收 OpenTelemetry，也以 OpenTelemetry 存放。看一條 trace 時，log、metric、底層基礎設施靠這些約定放在同一個 context 裡。上線要容易，走 PLG。

[4:08](https://www.youtube.com/watch?v=wueNYL-wNiU&t=248s) Guy 記得早期有人太樂觀：接上系統、對方有 OTel，就以為需要的資訊會魔法般出現。不是每筆資料都齊。Mirko 說 OTel 之前，每個廠商包括 Instana 都用自己的格式。那個 agent 是裝在主機上的舊式採集程式，抓 CPU、log、trace，不是 AI agent。好處是平台要的欄位可以自己補，例如跑在哪台主機就把主機名加上。雲端廠商推動標準，是因為 AWS Lambda 這類代管服務若要吐遙測，不可能同時做二十種格式，他點名 Datadog、New Relic。

[6:20](https://www.youtube.com/watch?v=wueNYL-wNiU&t=380s) 很多廠商說支援 OpenTelemetry，意思只是你可以送這種資料進來。他估計仍有 90% 會轉成內部格式，標籤系統就沒了。Dash0 讓資料一直是 OpenTelemetry。強制的標籤只有 `service.name`。一切發出遙測的東西都是 service。payment service 的 log 和 metric 都帶同一個名字，就能在服務層把 metrics、logs、traces 對在一起。

[7:41](https://www.youtube.com/watch?v=wueNYL-wNiU&t=461s) 這也是問題。客戶一開始送來的資料常常缺欄位。你問某個 pod 或某台主機的 log，若 log 上沒有 pod 名和主機名，就對不起來。專有 agent 以前可以自己補，現在得靠客戶送對 context，缺了補不回來。有公司專門看遙測品質，字幕把名字聽成 Ali Garden：看出跑在 Kubernetes，卻缺 cluster 名和 pod 名，然後給提示。他覺得 AI 也可以看資料、主動補設定。他們做了一個開源的 Kubernetes operator，幫你把 Kubernetes 和主機資訊打上，並在執行中把採集程式注進 Java 或 Node.js。他再次說，這些 agent 不是 AI agent。可觀測性和資安裡，agent 這個字現在都歧義。

## 一條 trace 像程式碼，一百萬條就要工具

[10:38](https://www.youtube.com/watch?v=wueNYL-wNiU&t=638s) 他們內部用 Claude。把一條 trace 丟進去，那是 OpenTelemetry 規定的標籤文字。標準公開、有文件，model 訓練時看過，所以知道 `host.name` 是主機名，也知道 HTTP 404 是問題。格式有語法、有語意，分析起來像分析程式碼。他說輸出當時讓他們很驚訝。Guy 補：DevOps 的 trace 通常留在你自己的系統裡，不像 GitHub 上的程式那樣公開。Mirko 說還是有一些被捐出來的大量 log 和 span 可以當例子。

[12:48](https://www.youtube.com/watch?v=wueNYL-wNiU&t=768s) 開源的 OpenTelemetry 範例應用裡，問題寫得很清楚。他們問 LLM 那支正在跑的範例有什麼問題，答案總是完美。後來發現 model 也訓練過那些問題的文件，等於作弊。別的系統就沒那麼神奇。

[14:23](https://www.youtube.com/watch?v=wueNYL-wNiU&t=863s) 兩件事要分開。一條有錯的 span 丟進 Claude，它通常說得出問題。若 metadata 裡有 Oracle 的資料庫狀態碼，它會去查那個錯誤，告訴你是連線池耗盡、文件上建議怎麼做。這就是人會做的事：看到代碼再搜。它不擅長的是幾千、幾百萬條 trace 裡找異常，因為吃不下那個量。所以要給 AI agent 工具。他們的 triage 拿大約一百萬條 trace，看錯誤的那些是不是總帶某個 tag，例如同一個 customer ID，再把結果交回去。這個工具經 MCP 給 agent，agent 會自己決定要用它。API 得做成 agent 消費得了的形狀。

## 開發者留在 IDE，出事的人留在工具裡

[17:42](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1062s) Agent Zero 起初是一個 agent，後來變成放很多 agent 的平台。最顯眼的一類是 AI SRE：凌晨三點出事，要它幫你查。他們給這個排查 agent 起名 Seeker。它得先懂系統和相依，才知道往哪看，再挖 log、span、metric，找相關。典型步驟是：哪個服務受影響、底層基礎設施是什麼，向他們的伺服器要那個服務的錯誤 span 和 log，以及那個 Kubernetes pod 的 CPU。多數錯誤是文字，agent 看得懂下一步。Guy 說目前最成功的領域多半是文字很重的。

[20:11](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1211s) 他們兩條都做，Mirko 還不確定長期會怎樣。一條是 MCP，接到 Claude Code 或 Cursor。開發者留在 IDE 裡問：這個服務在 production 的錯誤是什麼，並建議程式上的修法。Agent 連上 MCP、縮小範圍，再用 Cursor 對上程式。他問：開發者為什麼要鎖進第二個工具。另一條是 Slack 或 PagerDuty 說 payment service 錯誤率變高。你想點進去，在儀表板、span、log 的 context 裡看完整分析。那個 agent 在 Dash0 裡面，就是 Agent Zero，它會帶你走 UI。

[22:12](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1332s) 他剛開完產品會議。他認為軟體的互動會被 agent 改掉。現在很多 agent 還是聊天，丟一個答案給你。他要的是人和 agent 來回。他用 Google 簡報裡的 Nano Banana 當反例：它把簡報做成一張圖，好看，但你不能再改字級和文字。他想說「幫我把這張變好看」，然後自己還能改。排查也一樣。現在 agent 告訴你根因是什麼。他想要的是它在工具裡做好篩選、指出位置，人可以說「這個錯誤拿掉，再分析一次，我知道這不是真的問題」。他們現在仍比較像 Nano Banana，他不認為這是終點。Guy 把層次拆開：最底下是存取系統的 API 和 MCP，上面是會決定下一步的分析工具，可以組合。呼叫處可以是人已經在的終端機，也可以是事件發生時自動跑的無頭流程。真正還在成形的，是排查時人怎麼跟 AI 一起看結果。他剛和 Graphite 的創辦人 Merill 談過 code review：很多今天的審查問題應該更早發生，但審查 AI 寫出來的結果會更根本。對的 UX 還沒定。

[26:23](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1583s) 對 Dash0 這是存亡問題。若使用者在別的工具裡用可觀測性，他們就只是資料庫，價格往下比，價值發生在 Cursor 或其他 SRE agent。人為價值付錢，不為資料付錢。大型組織有數百人註冊可觀測性，真正在用的只有一小部分，因為排查要專家。Agent 有機會讓幾乎所有使用者自助，跟著工具裡的下一步走。Guy 說軟體生命週期裡最清楚的生產力，是你不再依賴另一個團隊，或整步被跳過：有人報 bug，背景 agent 查完，你在 pull request 才碰面，以後 maybe 連那步都自動解決。後端到前端再到部署，也可以由一邊走完。

[29:07](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1747s) 另一塊是拿掉苦工。一個服務出現在 50 張儀表板上，服務更新後你得手動把新 metric 加進那 50 張。Agent 可以建議、建立、更新儀表板，警示規則也一樣。再來是更多 context：接 Linear、Jira、Notion。資料庫 schema 出問題時，maybe 有一張改 schema 的任務，或 Notion 裡有文件，或 GitHub 上有對應的程式變更。Agent 用這些做出更好的答案。Guy 說企業抱怨的是工具之間無限相連：每樣東西都要接 Linear，另一群工具又想讀 Dash0 的 log。他在 Tessl 愈來愈把 context 看成跟特定 agent 無關的核心：系統、知識、做法、程式該做什麼、某個程式庫怎麼用。很多 agent 各自從系統裡抽出這些，再存進自己那裡。問題是知識要在二十個地方維護，還是放在一個中央。

[32:31](https://www.youtube.com/watch?v=wueNYL-wNiU&t=1951s) Mirko 沒有完整答案。他看到幾層：給出去的工具本身就是知識，例如怎麼在 trace 裡找異常、怎麼看 tag。還有怎麼評估 model、怎麼確認根因分析做的是你要的事，以及給它一份 to-do，讓某類問題不要每次走不同的流程。最後是體驗：從單人變成多人。排查本來有 war room。現在 agent 也在裡面，也許一兩三個平行查，人處理它們給的資訊，再補 context。誰做出最好的協作方式，誰就佔上風。他把持久的系統知識想成給 agent 用的企業架構管理工具：怎麼運作、怎麼設定、有哪些規則，集中放、大家都讀得到。Guy 說很多舊實務當初是對的，只是跟不上速度和規模，agent 也許讓它們做得到。他在 IBM 起步時，每個專案要維護一份 architectural decisions：用了哪個框架、為什麼。新人問的時候指給他看。Agent 進來問「為什麼這樣做」時，maybe 有它看不懂的理由，這份分類過的知識也該在，而且人還能改。

[37:18](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2238s) Guy 把 AI native 說成把工作委託給 AI。委託要兩件事：對方有沒有足夠資訊，意圖和系統知識在不在；以及你怎麼驗證。那就是 context 和 evals。Evals 不會涵蓋每一項，不然就不必委託。你做的是抽查。你不能強迫 model 聽話，但它懂不懂取決於 model。

## 圖是為人腦畫的

[38:52](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2332s) 他們現在設計產品，先從 AI agent 的角度看：agent 能不能做這件工作、長什麼樣、資訊怎麼回到人、人能不能理解、能不能追溯。使用者最在意的是：你為什麼得到這個結論。若它說問題在資料庫，下一個問題就是為什麼。人要跟著步驟走。他們不再把使用者當主要的互動點。Agent 做大部分工作，人在自己有知識、能讓 agent 變好的地方才插進來。

[41:10](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2470s) 儀表板是例子。以前 payment service 上面是紅色的數字：呼叫數、回應時間、錯誤數。現在他們先給一段文字：服務運作正常，效能落在過去 30 天的範圍裡，但最近出現兩個沒見過、可疑的錯誤。你說查它們。它跳到 trace，context 已設好，只留下那些問題，再指出只發生在那個客戶、那個情境。步驟很短。產品設計不再從圖和數字開始，因為看圖的是 agent。Guy 說，任務從來不是「給我一張圖」，而是「我想知道服務狀況」。圖只是人習慣的看法。

[43:05](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2585s) 圖對人有用，對 agent 沒有。人看一張圖就看得到尖峰。Agent 看的是底層資料。人看不了 5,000 個點裡的尖峰，大腦不是那樣工作。圖是為了讓人指出異常。Agent 已經說「我找到異常，要不要查」，圖就多餘了。他們覺得使用者體驗一直在補人腦的弱點；現在重的部分可以交給 agent，人跟著走。Guy 補了另一面：若 agent 只能用畫給人看的那層資訊，它會做得更差，因為它不像人那麼會讀圖。

## 聖誕樹全紅的時候，專家才知道從哪看

[45:04](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2704s) 排查通常落在組織裡少數人身上。他們要對整個系統有很寬的理解。很多開發者只深懂自己的服務。一千個微服務裡，真正懂它們怎麼接在一起的人很少。大問題時系統像聖誕樹，全部在閃，因為全都連著，全部變紅，紅本身就不再指出來源。專家會說：大概是這顆連到所有東西的資料庫。所以真正用得好可觀測性的是這些 power user。Agent 擅長看比較寬的範圍再縮小，於是可以把整體 context 給每一個人。他說還沒到那一步。目標是每個需要的開發者或 SRE 都能很快看懂系統，不必先變成專家，新人進來也不必。企業裡那兩個人一走，知識就沒了。它通常不在 Notion 或 Confluence，在人的腦子裡。

[47:29](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2849s) Guy 把這拆成智能和知識。Agent 給你智能：看很多 log、找尖峰、搜尋、找相關資訊。知識是系統是什麼、過去的 incident、角落那顆資料庫。人常把兩件事混在一起。他的說法是假設它有智能，不要假設它會讀心。沒有知識，它不是直接失敗，就是每次都得重新學，非常沒效率。

[48:31](https://www.youtube.com/watch?v=wueNYL-wNiU&t=2911s) 今天客戶怎麼走。倫敦《The Telegraph》的 CIO 在 LinkedIn 上公開說過，incident 的 playbook 變了，字幕裡還有一個聽成 Sero 的名字，和 Agent Zero 一起。第一步變成問 AI，不再先走完那張排查清單。這和寫程式先問 agent、或在 LinkedIn 發文先問 Gemini 是同一種改變。兩邊都在學。聊天介面讓使用者做出他們沒設計過的事。有人問儀表板的使用報告，他們從沒想過這個功能，agent 答得出來，他們才知道使用者在意這個。他比成 ChatGPT 早期看到很多人問程式，後來才做出寫程式的 agent。客戶已經在改 incident playbook。他覺得再過一段時間，AI 會變成可觀測性裡拆不掉的部分，今天已經很難想像沒有它。Guy 說 DevOps 對 AI 整體仍謹慎，可觀測性走在前面，因為有大量資料分析，也有大量苦工可以拿掉。閉環要等系統更可靠。

[52:45](https://www.youtube.com/watch?v=wueNYL-wNiU&t=3165s) Guy 問還要不要讀資工。Mirko 的兒子剛開始讀，他仍推薦。電腦科學訓練的是看問題、數學、物理。他自己從小寫程式，不是在大學學會的。大學給的是解難題、把事情結構化，這不會消失。兒子喜歡硬體，他覺得機器人、無人機和 AI、軟體的組合會很有意思。Guy 同意硬學位本身就是在學怎麼面對困難。他不太相信大學能跟上，把 AI 時代需要的知識教進來。學位旁邊還得自己碰 agent 工具。他開玩笑問：那個零是誰。
