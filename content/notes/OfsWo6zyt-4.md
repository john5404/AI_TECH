# What OpenAI, Stripe & ElevenLabs Devs Do Differently Now | AI Native Dev

Simon Maple 在倫敦的 AI Engineer 現場訪問。片長 65 分 52 秒，英文自動字幕。這是歐洲場，他說是這個領域很頂尖的活動，Expo 就在身後。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 OpenClaw 聽成 open flow、open claws，把 Qodo 聽成 Coda。

- 原片：[YouTube](https://www.youtube.com/watch?v=OfsWo6zyt-4)

## 一句話

實作變便宜之後，還沒被做出來的軟體很多，PR 的量也不是人那套 CI/CD 設計來承受的。Stripe 一週讓大約 1300 張沒有人幫忙寫的 pull request 落地，人仍做 code review。OpenAI 有團隊乾脆不准開編輯器，把 context 改成出事才注入。英國政府先把地下室的紙本規劃檔變成地圖。大家反覆說的是：對的 context 比更多 context 重要，一般模型負責編排，專用模型負責精確的領域。

## Stripe：點一個 emoji，複製一整個 Stripe

[2:36](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=156s) Steve Kaliski 是 Stripe 的工程師。他喜歡這裡的人是真的在場，不是只在線上讀。每天都有新模型、新技術，在場的人一出來就試，談的是前線怎麼看新工具。

Stripe 用 AI 做三件事：幫忙建 Stripe、幫客戶建 Stripe 整合、以及把經濟工具提供給 agent。內部 coding agent 叫 Minions，為 Stripe 調過。模型用常見的，例如 Claude 和 OpenAI。Harness 是從 Block 的 Goose fork 出來的（字幕寫成 blocks goose），跑在既有的開發環境裡。他看到 Jira，或客戶回饋，在 Slack 點一個 emoji，就會生出一整份 Stripe 的複本，照平常會做的方式，但接著用那個 prompt 跑 agent loop，用內部文件、工具和 CI 去解。現在大約每週 1300 張 pull request，沒有人幫忙生成，就這樣落地。唯一的人為介入是典型的 code review。人仍在審所有 code。

沒有商業邏輯影響的變更，例如文件裡的錯字，他覺得今天就可以考慮讓它落地，會從這個基底往上。有金錢影響的功能，更快落地的風險報酬，大概仍不超過讓人再檢查一次。像 GitHub 上 Dependabot 升級、CI 過了，他也許願意讓它落地。反過來，他提到 Axios 以及最近那些安全事件，自動套件更新不一定該直接進去。他不覺得人很快就會完全離開。

Context 就是一切。Stripe 超過十年，那十年的 context 不完全住在 codebase。支付方式、網路、資金怎麼處理，有法律和合規，試圖寫進 code，也住在文件和知識庫。人要讀那些，agent 要寫得有效也得有。自己做這套的好處是，Stripe 的工程和其他公司、新創、別的商業領域不一樣。也許 80% 的 coding 走幾條被祝福的路徑：改 API、改文件、引入新貨幣。能對上其中一條，就只放進把那件事做對需要的 context。改文件需要的，和跨境匯款需要的，差很多。先想清楚在做哪種產品、哪種變更，再把 context 放進去。不是把全部丟過來說祝你好運。那是普通人做不到的。

## CI/CD 是為人做的

[8:24](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=504s) Madison Faulkner（字幕先寫成 Ford）是 NEA 的 partner，公司在倫敦有辦公室，她住舊金山，在歐洲也有投資。她以前在 Meta 做 AI 研究，帶過資料和 AI 團隊。她的演講題目是為什麼 CI/CD 死了。現場的反應就是驚。她說這是 agentic 軟體開發下一個要想的類別。大家都在想 agent native engineering。她在這個領域有投資，叫做 Factory，這週也在這裡講。傳統 CI/CD 是為雲端之前的人做的。PR 裡卡住大量以前人不會有的量。人一週交兩份、也許三份 diff。現在是幾千、也許幾萬。Codebase 要把它們 merge 進去變得不可能。不能有這麼多 agent 各自拿同一份 code 的版本再 merge。她說需要更 inference-native。

她認為方向是取代，但現在還不像。現在最好是補一層，加快 build 和開發時間。她投資的 Namespace 和她一起講，加快 GitHub Action、Docker，以及那個生態裡的東西，這樣就不必坐著等 agent 部署。時間拉長，她覺得會取代 GitHub 和其他不是為這套基礎設施做的 CI/CD。GitHub 的 code 對微軟的生意很重要。她看到微軟很多重組，GitHub 的領導在離開，例如 Thomas Dohmke。她是一家她稱為 Entain 的天使投資人，Simon 說那家直接要當新的 GitHub。這個名字不在這裡改。她說微軟有很長時間的機會，沒有跑起來。為什麼不讓一個為雲端、為 agent 做的新工具來接住新 code，做出更好的開發者體驗。GitHub 一直是開發者的朋友，但不那麼好用，也不那麼 agent-friendly。Harness、CircleCI、GitLab，很多工具沒有真的擴到 agent-native。

沒人聽過、她最興奮的，先把 Namespace 放一邊：Warp 建在上面，Sierra、Decagon，OpenAI 是客戶，開發者很愛，品牌認知也許最低。她接著說 Golden Analytics，昨天剛從 stealth 出來。要把資料和分析的黃金時代帶給建造者。第一個真正為所有人、而不只為資料團隊，做端到端資料自主的工具。混在一起的是資料自主、分析和對資料的語意理解。她覺得最有說服力的第三塊是設計和說故事：問資料問題，得到完整的端到端故事，是去找到對的資料，不是只用手上已有的。她看好結構化資料在 vibe coding 時代的時刻。有很長的等候名單。

她來這裡是看一到兩年後，現有基礎設施哪裡會裂。為了投資組合，也為了她密切合作的企業資料負責人和工程負責人。哪裡不會動、哪裡會壞、新時代的思想領袖是誰。她對表格式資料的 foundation model、領域專用的 foundation model 有興趣。Harness engineering 已經很大，她想看它怎麼坐在 OpenAI 和 Anthropic 旁邊。

一般模型和專用模型：一般模型永遠對編排、以及把工作路由到其他模型很有用。也許長得像 mixture of experts，小模型上有特定專長。那是她在表格式資料上的賭注。她覺得 foundation model 進不來、建不出精確的結構化資料，但表格式架構也許是大型語言模型可以路由過去的一個。她整體看好不同領域的小型專用模型。Coding 她不覺得一定會落在那個專用領域，但 harness engineering 有大機會。材料科學不是大型語言模型做得到的。有一家在倫敦、她稱為 Cuspaider 的公司。主權和特定語言的模型她覺得有趣：美國的 Reflection、日本的 Sakana、歐洲的 Mistral。還有 CAD 的 foundation model，機械工程和產品設計，很難，不是丟一個大型語言模型或 coding model 就做得出來，但為那個用途、為多模態做得很精確。很多市場 AI 還沒碰到。

## Gemma 要塞進消費級 GPU

[16:48](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=1008s) Omar Sanseviero（字幕寫成 Sanseverino）是 Google DeepMind 的 developer experience lead，負責模型發布。上週發布 Gemma 4，開放模型家族的最新一個。生成媒體：剛出的 Lyra 做音樂，Veo 做影片，Nano Banana 做影像編輯和生成。Gemini 是旗艦，要最好的能力、最多的知識、很大的高效 coding。Gemma 是他們釋出的開放模型。Gemma 4 是塞得進消費級 GPU 的最有能力的一個。可以跑在自己的桌機、筆電，最小的還能跑在手機。盡量把每顆參數的智能塞滿。重點是大小，也是控制：跑在自己的硬體上，還能 fine-tune，改成自己的用途。例如法律、或專有模型沒看過的特定醫療資料。改完可以在自己的基礎設施和裝置上提供。

上週四發布，六天前。已經超過一千萬次下載，社群做出超過一千個基於 Gemma 4 的模型。他們和 Ollama、Hugging Face、Unsloth、Llama.cpp 合作，讓人用自己喜歡的工具試。Gemini 則和 LangChain、LlamaIndex 等合作。有人在手機上跑，甚至在手機上做 agent。發布時有 Google AI Edge Gallery，iOS 和 Android 都能裝。可以加 skill，控制手機，例如開手電筒，以及各種裝置上的 UI 控制。

Gemini 的 context 長得多，可以丟一小時的影片、很長的文件。Gemma 小，為裝置設計。Context 會吃 GPU，不能丟巨大的 context 而不燒更多算力。最小的 Gemma 大約支援 220K，較大的 256K，對裝置來說不錯，仍比 Gemini 短很多。所以整理 context、讓它小到模型用得對，重要得多。他們也看思考效率：不同開放模型要多少 token、多少推理才到答案。推理時不要生成超長的 chain of thought，要密集、有用的資訊。

他上次來 AI Engineer 是一年前紐約的冬天。和六個月前比，大家在做的事已經差很多。他想看六個月後站在哪。Gemma 4 收的是過去一年的回饋，例如 function calling 和 agent 能力、更好的授權。授權改成 Apache 2。这场也是在收做對了什麼、做錯了什麼。他們盡量像新創一樣執行，尽快發布模型、能力和工具，拿回饋再改。

## 電話亭裡的 Michael Caine，以及不准開編輯器

[22:55](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=1375s) Simon 進 ElevenLabs 的電話亭，題目是英國 AI。字幕沒有把問答摘全，他答了一個 2016、好像是西洋棋。Boris Starkov（字幕寫成 Starling）是 growth engineer，一點行銷、一點工程、一點像這個攤位的好玩專案。電話亭是他做的。最難的是逆向那支電話。他們用 Claude Code 逆向底層協定，接到 Twilio，再接到 ElevenLabs 的 agent。真的是一條電話線，另一頭有 agent 回答。聲音是 Michael Caine，他們有授權。

ElevenLabs 從文字轉語音開始，現在什麼都做：AI agent 平台、給創作者的工具、還有音樂產品。共同創辦人 Mati 在 podcast 上說過，語音會是開發者和工程師跟 AI 互動的方式。內部在 Claude Code 把語音做進產品之前，就做了用語音跟 Claude Code 工作的工具。還有一個內部工具用語音跟 OpenClaw，它可以打電話給你，你也可以打給它，是真正的對話。最近一輪估值一百一十億。攤位上的人對兩件事都好奇：把語音放進產品，以及放進開發。問答是入口，用來展示 agent 能做什麼。他會把對方剛才說到的那個 agent，以及那段對話，秀出來。

[26:10](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=1570s) Ryan Lopopolo（字幕寫成 LeCompte）是 OpenAI 的 member of technical staff，人在西雅圖，第一次來。他講 harness engineering，以及團隊過去九個月怎麼盡量把自己從寫 code 的過程拿掉。他差不多禁止團隊開編輯器。看能力多快堆進 codebase，讓 agent 做愈來愈多軟體工作。有人會害怕，IDE 裡寫 code 是快樂的地方。他也覺得會有不同的開發者，創造型的人會喜歡，因為寫 code 可以更快被拿走，創造可以更快。

他的初戀是 Ruby，metaprogramming 在骨頭裡，想把自己抬高一層，用高階抽象把工作做掉。Harness engineering 很像：透過 coding agent 裡一個很高階的 primitive 來生產 code。身邊的槓桿是修飾輸出，不是自己直接生成。團隊都是外部聘來的，直接全押。他說這就是做法，來前線實驗室是為了發明未來。

模型受兩件事限制：attention 和 context。要讓 attention 最大、context 最小，就讓 code、流程、測試盡量相同，agent 用最少的指令去煮，context 只在當下給，好尊重那份 context，讓它能跑很長的時間。不要把所有 context 事先塞進 AGENTS.md。Linter 失敗時，才即時注入怎麼修。這樣會有更長的黑盒：agent 在推理、在寫、在解自己的失敗。他看任務的開頭和結尾，不看混亂的中間。

他們用 skills，codebase 裡想集中的很少，五或六個，團隊工程師都貢獻。人的參與不必改太多，進入模型的入口是固定數量。然後想創意的方法把 prompt 注入 context。Skill 是 prompt。測試的錯誤訊息是 prompt。Review 回饋大多來自 agent，也是 prompt。要即時注入，而且要大致可靠地被遵守。模型製造文字，得想辦法給它們文字。

他不常用 plan mode。Simon 說愈來愈常聽到這句。那些大計畫他不想審，就按 yes。若計畫把錯誤的指令編進去，就是把 agent 推向錯的方向。他想花時間的是做產品過程裡最含糊、最難的工作。一開始不一定知道對的形狀。Agent 寫 PR 也一樣，要邊做邊搞清楚，從一大片空白走到精煉、高品質。沿路的回饋是很大一部分。他六月一日、二日也會在倫敦的 AI Native DevCon 講這個，不到兩個月。

反應是混合的。有人不想把手離開鍵盤，怕 code 對不齊，怕事後收拾更累。若把時間投資在「我不接受 slop、不讓 agent 產出 slop、把減少 slop 系統化」，用少很多同步的注意力，達到同一目標。要像 staff engineer 那樣想，手下有五個或五十個工程師。那樣的資源可以對減少壞 code 造成很大影響，而不必一路盯著。

他用 Codex。Simon 說 Twitter 上很多人覺得 Codex 把他們解開了。Codex 做完整件事。他信任它從 prompt 到 merge 的 PR，code 品質高，工作的再現方式和他期待人做的一樣。做後端，該部署到 staging。隊友不會過來看他的命令歷史。他在 PR 裡做一份證明，別人大致當它是真的。Codex 也能這樣，所以他有信心。他看它跑 6 小時、12 小時、30 小時。筆電扣在車後座，上下班一路燒 token，因為它做得了很複雜的變更。網頁產品他叫做 Chewie，他喜歡裡面的自動化。它一直在收拾自己，每小時確認 CI 是綠的，確認遵守他們對「好」的 golden principles。Simon 的筆電貼紙寫著 AI 在他睡覺時寫 code。Ryan 想學的是大家用這些工具到哪了，要什麼才會把信任和使用放大十倍，去做更多產品、解更多使用者的問題。還有很多軟體可以做，因為實作變便宜了。

## 地下室的規劃檔，以及家教要先有 benchmark

[35:02](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=2102s) Jordan Juritz（字幕寫成 Jerrett）是英國政府 Incubator for AI 的 applied AI team lead。大約 50 位技術人員，全是常任公務員，要證明 AI 可以當公共善的工具。他認為政府需要很強的技術能力，一支能把東西從零做到一、再擴到公共部門的產品開發團隊。

三件他們覺得很興奮的事。第一是政府諮詢。他們做了分析諮詢的預設 app，一年省下幾十萬小時、好幾百萬英鎊，而且比人分析更量化、更好。正在推到數位身份和其他進行中、很大、有爭議的政治議題。諮詢是政府就重大立法、會影響你在英國能做什麼，去問公眾的看法，是民主程序的重要部分。分析必須做對。他們得證明：人對這個 AI 分析工具的同意，高過人們彼此之間的同意。

第二是數位化規劃系統。他給 Simon 看英國某個議會地下室的照片，一箱箱舊的規劃紀錄，寫著這塊地能做什麼、不能做什麼。有人說希望地下室淹水，紀錄毀了，就不必每次申請房屋加建或新設施都下去看。申請進來，有人得親自下去找一張卡片：有這些許可，或這棵樹有保育令。非常手工、常常是紙。Simon 說這不是 AI 問題，是資料問題。他們用多模態 agent 把這些難搞的舊文件變成地理空間資料。地方規劃官員上傳 PDF。字幕裡有一個模型名聽不清，他接著說用 Gemini 做結構化擷取，再做很多額外的苦工：這張地圖在國內哪裡、上面的物件是什麼、把它們分割、把舊的像素座標轉成現代的地理座標。官員再微調、編輯、改正，上傳到規劃入口 planning.data.gov，開始填滿這張「英國的地能做什麼」的地圖。資料留著做 eval，系統可以自我改進，數位化更快。他們拿給首相看，他承諾年底前數位化英國的規劃系統。至少幾十萬份文件，幾百萬棵樹和舊田野，一整疊土地使用的歷史。規劃官員好好數位化一份紀錄常常要一小時，資訊也不一定填得完全正確。現在大約一分鐘到兩分鐘，他說成本大約 10 便士。英國沒有足夠的規劃官員，得想 AI 怎麼改變這個勞動市場問題。這是一層效率，省時間、省錢。上面還能做：在數位規劃堆疊上建 agent，當規劃官員的助理。申請進來，agent 去把需要的證據拉下來，建議決定。13 週的答案變成一週。英國很多 prop tech 公司也很想拿到這些資訊。他認為 AI 有角色去整理、再發布更多開放資料讓人往上建。

第三件是教育，他說是硬塞進來的。過去大約六個月，教育部對教育裡使用 AI 像是把手指塞進耳朵。孩子已經把 AI 當家教。不知道安不安全、有沒有效、是不是好的學習方式。政府有責任讓人學得好。他們在做第一個 AI 家教的 benchmark。主要是和老師、EdTech、教育部一起定義好的教學法：給孩子的建議對不對、是否有助於學習、不是直接餵答案、而是教怎麼學。也要安全：若在製造依賴或情感依附，能不能阻止。用更寬的指標分析這些長篇的師生互動。再和前線實驗室合作，變成他們可以拿模型去測的 benchmark，在進教室之前看安不安全、有沒有效。

這個孵化器被給了很多信任，可以自己控技術堆疊。他們工程優先，幾乎什麼模型都能用，也有很多經費可以玩。正在招 applied AI 工程師，履歷在 ai.gov.uk。部署仍要想負責任和安全。很大一部分工作是非常小心地評估模型輸出的品質。既想做東西，也想嚴格測試自己的工作、證明它是好的。

他想分享的願景是：人可以來政府做一輪 tour of duty，和他一起做職涯裡影響很大的工作，過程中影響全國每一個人。地方是 Incubator for AI。也可以看唐寧街十號的 Innovation Fellowship，給最上層的技術人才。他自己就是這樣進來的，之前在學界做計算生物工程、很深的生技，想做有巨大社會影響的事，後來選擇留下。他讚組織者 Shawn。他腦子裡還有一個問題：政府的 agent stack 長什麼樣。英國的技術設置很棘手，很多被委派的雲端環境、責任不同，和人們把政府想成一個組織的方式不符。他想和會場上像 WorkOS 這類部署和基礎設施平台合作，做出能無縫跨政府工作的 agent。

## 對的 context，不是整份 codebase

[45:43](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=2743s) Nupur Sharma（字幕寫成 Nipa）是 Qodo 的 solutions engineer。前一天在 Tessl 辦公室為 AI Native Dev 社群做過座談。她說自己是用 AI 解 AI 造成的問題，一個迴圈。用 AI 會產生多到實際上無法追蹤的 code，標準能不能被推上 production 也說不準。生產環境裡，包括大公司，安全問題一再出現。他們用 guardrail 和更多模式，讓安全的 code 能被推上去。Simon 記得最早叫 Codium，圍繞測試、產生 unit test，後來改名 Qodo，感覺更像 code review。她說三年前從 code gen 開始，測試是 code review 的一部分。長大之後明白，測試登場之前，主要缺口在 code review。過去這段時間他們不只做 review，還要減少通常沒人看的噪音。Code gen 那邊大家說愈多愈好。他們說不是愈多愈好，是品質愈好愈好。重心轉到 code review。

Simon 說兩件事。Agent 開發需要人在 loop 裡，或需要 deterministic 測試，判斷品質合不合理。第二是量。他轉述 Google DeepMind 的 Logan Kilpatrick：五年後生成的 code 會是今天的一百萬倍。這種量之下，code review 有多重要，才能快，又不把垃圾送進 production。她說這是現在 code review 這一行的主要焦點，不只是他們。大家想的是更快交付、做更多。代價是什麼。一週內送得更快，然後花也許兩週搞清哪裡錯了、怎麼修？還是帶著 guardrail 送得更快，確定給 production 的 code 夠好。平衡不是「送得更快」本身，是更快、而且 production 裡是有品質的 code。

速度和零問題哪個重要。以前資深開發者可以花幾週做完再送。有了 AI 更快。不該限制太死，否則是在限制正在追的技術。要分關鍵和不關鍵。不重要的東西可以實驗、走更快、用更實驗性的 guardrail。關鍵的工作仍要查得更好一點。人愈來愈習慣 AI 做很多自動化，可以先在不關鍵的地方實驗，舒服了再試關鍵的。要找平衡。限制太死，用 AI、送更多 code 的意義就沒了。另一頭也不能全交給 AI，否則要付很大的代價。

Context 和 skills：她說 context 現在很瘋，這題也很瘋。開發者聽到 context 重要，就想成組織裡的一切、整份 codebase、Confluence、Jira。模型的 context window 天天變大，但它真的懂整份 context 嗎。整份 codebase 倒進去，它懂嗎，它會看出什麼重要嗎。目前還不是。資料可以一直倒，LLM 不行。它們抓最前面和最後面，中間的 context 就丟了。要的是對的 context、對的 skill。成熟的開發者覺得自己能做 context engine、整個 vector DB 或對應。那真的值得花時間嗎。先弄清要打的目標、要解的問題，再選什麼重要、做哪種對應，而不是做一整個 context engine。可以用逐步縮減，或階層式的對應，讓結果更好。她來這裡最重要的是對話。做一個產品或一個組織，看事情會開始變窄。AI 的用法很多。跟人談才知道實際在發生什麼、問題是什麼。她是 solution architect，這些會變成下一次怎麼幫忙的新想法。

## Zed 讓 agent 說同一種話，Jellyfish 問 token 用得好不好

[53:23](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=3203s) Cameron McLoughlin（字幕寫成 McLaughlin）在 Zed。它是文字編輯器，也是一般的 coding 工具，想拿來 review 也可以。他喜歡它快。不是跑在瀏覽器裡，不是 Electron，從零用 Rust 寫，有自己的 UI framework，什麼都自己做。和 Cursor 比，快很多。Cursor 有時按鍵會慢一拍。Zed 每次都是下一幀。他們剛推出平行 agent。新的側欄可以同時跑很多。用 ACP，可以是 Zed 自己的 agent，或 Claude Code、Codex，或其他開放的 code。ACP 是他們做的。Simon 說這下就合理了。Cameron 記得 LSP 之前，每個編輯器都要自己做 Java 擴充、C 擴充。LSP 讓很多編輯器說同一種語言。他們覺得 agent 也需要類似的協定。你可以喜歡一個 harness，但不喜歡它的 UI，或不想一直換快捷鍵，有的是 shift-enter 送出，有的是 enter。摩擦會累積。Zed 為低摩擦優化，快，而且是你習慣的方式。

協作像 Slack huddle。可以加入、和隊友結對、說話。內建語音和螢幕分享，嵌得很深。每個 buffer 是 CRDT，一種複製的資料型別，diff 經他們的協定送出去。有伺服器，但實質上像點對點，同步你送出的 diff。他可以和 Bennett 通話，跟著他、看他在看哪。遇到不認識的函式就 go to definition，分開再加入，一起改同一份 code、跑同一份。他們用 Slack，但不用 huddle，要找人就進 Zed。Alt-tab 離開 Zed 會切到螢幕分享，所以 review PR 時可以看瀏覽器。路過的人他試著推銷，多數說已經在用，工作變簡單。很多人對 ACP 有興趣。對文字編輯器來說，那是用熟悉的快捷鍵和 UI 跑 Claude Code，不必困在終端機。對其他專案，那是把 agent 抽象掉。若要寫程式發訊息給十個不同的 agent，讓它們競爭最好的解，ACP 是好選擇。他記得有開源專案就用 ACP 當這層抽象，細節他不記得。JetBrains 在和他們一起做 ACP，是很大的合作。本來會以為兩家是對手。他覺得有這個標準對所有人都好，和 LSP 的對照很清楚。Simon 說是亦敵亦友。建議是多試。ACP 的好處是試的時候不必習慣一整個新環境。一個月前試的，現在很可能不一樣。Zed 和一月初比就差很多。繼續實驗，看喜歡什麼，做點東西。

[58:49](https://www.youtube.com/watch?v=OfsWo6zyt-4&t=3529s) Nick Arcolano（字幕寫成 Arcalona）是 Jellyfish 的 head of AI and research，公司在波士頓，做 AI observability，看公司怎麼用 agent 改變軟體工程團隊。他們在紐約的 AI DevCon 見過。六月一日、二日倫敦還有一場，他想再來。

Keynote 裡他覺得 Google 在大型語言模型以外做的事很迷人。例如 omnimodal embeddings，一個模型同時懂文件的視覺、空間和語言。天氣那段很酷。他一直喜歡他們的 world model。OpenClaw 那段很辣，這個專案前所未有，看幕後很有趣。他常在 Twitter 看到 Peter 在要貢獻，而不是只看到人在要功能。

他一直來，是因為一切移動太快。和幾個月前的差別最讓他興奮。Expo 和演講裡，有人說 MCP 還沒解，下次來就有整間公司在做那件事。新產品、開源、新公司把洞填上。你不知道缺口存在，然後知道了，然後它被填上。這個飛輪很快。Simon 說一年一次不夠，要每個月或每隔一週。Nick 說每一季。他的職涯裡，一年跑多場會議這麼有價值，是第一次。他更看重現場。內容線上都有，他可以在家看直播。只有在這裡跟人談、去 after event，才拿得到。終日在線上，對現實的看法是歪的。問別人自己的 agent 做得怎樣，大家說比 Twitter 上講的難。像 Instagram，線上放的是最好的自己。面對面、喝一杯，才知道學新東西、改變做法、把這些東西拼起來都很難。大家都在用一堆碎玻璃，想在最前線做出有用的東西。比讀別人貼文說自己的 OpenClaw 有多好，更難。

Jellyfish 的新東西在資料。新資料很快進產品。以前看 AI 採用，然後看生產力和轉型，團隊有沒有變快。現在進到 token。有效的 token 使用長什麼樣，有效的 agentic engineering 長什麼樣。他們能監看使用、理解 workflow，到 token、到模型、到 agent 的工具使用。不是用了最多 token 就好，是用得好不好。Simon 說很多公司的說法是：花更多錢、用更多 token，就是採用更多 AI。誰在這麼說，賣 token 的人嗎。 surprisingly 不是。組織裡有目標，說我們要多用 AI，幾乎不惜代價提高採用。大量 token 被當成更多業務在用它的證據。缺的是有效的使用。Nick 說一階上說得通，但你不會用用了多少電來經營一個工程組織。早期說得通，之後大家會想知道：若體驗不好，為什麼機器沒有照你要的方式運作。那是工程領導在做的事。

Simon 收尾時說，這裡很多人是來學一週前、一個月前、幾個月前的新東西，不是一年前的。跟人當面談，才是差別。Tessl 在現場贊助。他們自己的 AI Native DevCon 在倫敦，六月一日、二日。
