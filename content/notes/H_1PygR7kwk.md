# Dexter Horthy: Why We Stopped Trusting AI to Write the Plan

Guy Podjarny 主持，和 Simon Maple 一起做這檔節目。來賓是 HumanLayer 的 CEO 兼 co-founder Dexter Horthy，字幕常聽成 Dex。片長約 56 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 YOLO pull request 聽成 WhatsApp，把 sync 聽成 sink，把 CLAUDE.md 聽成 cloud empty。

- 原片：[YouTube](https://www.youtube.com/watch?v=H_1PygR7kwk)

## 一句話

他們想住在未來裡，所以照實驗室的說法做了幾個月：讀計畫就好，code 沒那麼重要。Codebase 變慢，改這裡、那裡回歸，最後整份產品重寫，共同創辦人 Kyle 在 VS Code 裡一個字一個字手打新的資料架構。Dexter 現在的說法是：計畫是在管預期的痛，按鈕顏色不用爭，資料庫 schema 要先對齊。可維護性沒有快速的 oracle，所以現在仍要讀 code。但若什麼都不審查，你只會得到和所有人一樣的產品。

## Dumb zone，以及計畫曾經只是為了讓它做更久

[3:33](https://www.youtube.com/watch?v=H_1PygR7kwk&t=213s) 旅程從 Opus 4 和 Claude Agent SDK 開始。那時候介面很小。他說現在的 Claude CLI 像 agent coding 的 JVM，大約 200 個 flag，是一艘戰艦。那是第一次可以把 Claude 的小 agent loop 放進更大、更確定的軟體裡。他們做 Claude Code 的 terminal multiplexer：平行管很多 session，收一件待核准的 inbox。花很多時間讓 agent 做得更久。

他認為 2025 年夏天到現在，最大的變化是規劃這場 metagame，很多人沒意識到。大家寫計畫，是因為產品有 plan mode，或網上看到 skill。回頭看，2025 年 7 月寫一份 plan file，最高槓桿的用途是可靠地讓模型做得更久，也比較跟得上指令。Spec kit 那類則想微管理：每一步結束回來，再吐出下一組精確計畫。有計畫至少比沒有更在軌道上，工作也比較能預期。那是 intent 的第一版壓縮：你要做的事可以寫成每一行 code，也可以收成幾百行 markdown，記下做了什麼、改了什麼，之後從乾淨的 context window 接下去。2025 年 7 月的模型不擅長長 context。

[6:03](https://www.youtube.com/watch?v=H_1PygR7kwk&t=363s) 他造了 dumb zone 這個詞。當時大約 10 萬 token，超過就結果差很多。那個數字現在更高，但 dumb zone 還在。Guy 說焦點太多就沒有焦點。你自己決定 context 裡有什麼、沒有什麼，比把資訊全倒進去更可能達到目標。

Sean Grove 當時是 OpenAI 的 researcher。Dexter 推薦去看那場：the spec is the new code。我們現在怎麼看 assembly，未來就會怎麼看 code。Spec 會是可驗證、可執行、編譯成 code 的東西。類比是寫一堆 Java、編成 jar、jar 進 production，repo 裡 commit 的是 code。未來基本上只 commit spec。2025 年 6 月，人們用 coding agent 的有趣方式仍是丟一串 prompt、拿出結果、commit、推進 production。真正高槓桿的是那段對話裡的 prompt，應該被記下來。跟 agent 長聊，然後丟掉聊天、只 ship code，會變成新版的蠢事：寫了 Java、編成 jar、把編譯後的 jar check in、把原始碼扔掉。

## 讀計畫、不讀 code，四個月後不能用了

[9:13](https://www.youtube.com/watch?v=H_1PygR7kwk&t=553s) 模型變聰明時，你不知道奇點在哪。要領先就試著住在未來。實驗室的 alpha 比外面多，他們說該做，就去做。OpenAI 說這套對他們有用。於是 HumanLayer 試 YOLO pull request：讀了計畫，code 就沒那麼重要。問題很多。計畫裡包含了將要寫的全部 code，簡直是 inline diff。你讀完計畫再去寫 code。若因為 drift 還要審 code，幾乎把同一種形狀審兩次。他們是三個人的新創，可以一直往前衝。他們也這樣建議過更大的團隊，甚至大約 50 個開發者。那些團隊讀了計畫，實作漂移了，他們還沒準備好放棄審 code，結果工作更多。Code 一旦寫下，你就承諾了一條路。改它常常比丟掉實作、丟一個新 prompt 或重做計畫更貴。Guy 補，審別人的 code 時，熟悉感和控制感比較低，意見比較難用編輯表達，寫的時候反而容易。

[11:09](https://www.youtube.com/watch?v=H_1PygR7kwk&t=669s) 實驗跑了四五個月，才發現 codebase 不能用了。愈來愈慢，這裡一改、那裡回歸。他們還讓模型擁有系統架構。人在迴圈裡問它會怎麼解。它要做 Golang daemon、Unix socket，把東西接起來。最後是大約六個服務：桌面 app 經 socket 跟 Rust 說話，後端是 Golang daemon，負責啟動和管理 Claude Code session，那些 session 再啟動 MCP server 處理核准，MCP server 叫回前端，經 Unix socket 寫進 SQLite，使用者核准之後再走回 MCP、Claude、Golang daemon 和 UI。模型若自己決定架構，就會長出這種複雜系統。Guy 分開三件事：模型不會做架構、現在還不會、還是沒給夠指引就不會。

他們判定這很糟，整個產品重寫。頭兩個星期，共同創辦人 Kyle 在 VS Code 裡手打每一個字，甚至不用 Cursor，把新版本的資料架構接出來。那些 pattern 留得很穩。新專案早期的決定會一直往未來Cascade。後來用 ElectricSQL 和 durable streams，資料單向流：後端沒有 signaling，前端也沒有接收 signaling，都交給 sync engine。他認為今天做的軟體都該用即時 sync 資料庫，客戶端連上就拿到即時更新。

也因此必須讀 code、懂架構。模型沒人看著，會放進很多 slop pattern。他歸給 Donald Knuth 或早期 C 的人一條原則，字幕沒有完全確定是誰：要 debug，你得比寫的時候更聰明。若你寫的是自己能想到最聰明的 code，按定義你就不夠聰明去 debug。做出來的東西必須比你的智力高峰更簡單。

他點名 Steve。他喜歡這個人，也要公開說：Steve 過去一年在各節目上說，若你還想讀 code，你不會成功，讓模型去煮。上週又說，他用 Fable 做的系統複雜到 Fable 自己 debug 不了。你得看著你在建的系統。Guy 說 Tessl 工程大約二十多人，合規仍要 code review 掛上名字，有些變更可以自主，也有人看複雜度，不是完全 lights off。

## 預期的痛，決定你計畫到多深

[15:37](https://www.youtube.com/watch?v=H_1PygR7kwk&t=937s) Guy 的反論是：你若去審 code、下手改，就沒有在建一套會按你偏好產 code 的機制。他把 spec 想成 determinism 和 adaptability 之間的滑桿，給 agent 多少自由度。結果達到了，中間就可以不在乎。意圖要寫進系統，靠持續互動，而不是靠審 code。

Dexter 說要平衡。做計畫或對齊，無論是你和模型，或再加上團隊，唯一的理由是你有一座工廠。他以前講過那些零件，這次不展開：有人提出東西、有人做、有審查、有 rollout、有監控。三四十年前的人學到，build 可以花數小時或數天，review 也一樣。所以先談架構、做 sprint planning，至少方向對，希望減少返工和審查時間。人人都讀過那種完美 PR：談了一小時，現在是 1000 或 2000 行，但跟著既有 pattern，很好審。有人說 PR 淹過來了。他的回推是：不是 PR 太多，是壞 PR 太多，因為寫的時候把腦子關掉了。字幕把 brains 聽成 brands。

也不要過度計畫。兩句 prompt 就 YOLO，大約 50% 要返工，他說的返工是再跟模型來回幾次。不要兩句 prompt、不讀 code、就丟給別人審。假設你會自己打磨。或者開會手寫很細的 spec，花五小時，也許還有 10% 要改，但少了。極端是全部手寫，就不會因為 agent 搞錯而返工，雖然三四十年來的 code review 仍可能要改。他用預期的痛來想：以後要改的機率，乘上有多痛。按鈕顏色他從不跟模型爭，不喜歡就再一個 prompt。資料庫 schema 錯了，大概得扔掉重來，所以要先對齊。落點看事情多大、codebase 多複雜、今天的 code 多好、裡面有多少壞 pattern 會被模型跟著學。計畫是槓桿，找甜點。他說要多練。他們有好幾種規劃流程：一份 design doc 然後 ship；design 再決定順序；PR 流程有三四個階段。依功能大小，用一個或多個階段切掉大約 50% 的壞結果，把結果空間收窄到值得花時間。

[20:45](https://www.youtube.com/watch?v=H_1PygR7kwk&t=1245s) Guy 問，計畫有多少是在指導決定，有多少是在表達意圖。你說架構要長那樣，隱含是想便宜地擴、想扛得住多幾個欄位，但你沒把為什麼說出來，等於把實作限在你自己的創意裡。Dexter 指向 Matt Pocock 的 grill me skill。它在全部 GitHub repo 的 star 裡排進前 25，在主要只放 skills 的 repo 裡排前三，因為人們不善於把意圖講清楚。好的 AI 輔助規劃，是讓模型先有夠多 context，再幫使用者最快說出意圖。最快的方式是隨口講。他開 voice mode，亂講 60 秒：必須擴到終端使用者、不能走這條、必須用 Redis 不能用 Postgres，因為他知道速度。你已經知道的就該寫明。不必坐六小時決定每一個細節。拿一個很大、規格不足的東西，讓 AI 不停地訪談：這是你要的，這是替代方案，你確定不要嗎，這裡有一堆開放問題，我認為是這些，然後走那棵決策樹。

## 沒有快速的 oracle，可維護性就訓練不起來

[23:21](https://www.youtube.com/watch?v=H_1PygR7kwk&t=1401s) Guy 問，若意圖抽出來了、驗證也定義對了，這兩件都很難，先把成本放一邊。模型愈來愈好。你還需要審 code 嗎。限制是模型還不夠好，還是別的原因，所以你叫人審 code，而不是把力氣放在意圖和 verifier。

Haskell 社群大約六個月前有篇文章：夠細的 spec 和 code 無法區分。Dexter 說那些是實作規格，是在口述演算法。Spec 強大，是因為你給模型一條它自己量得到的回饋，讓它對一個目標 hill climb，定性或定量都行，它會為你移山。計畫曾經讓模型無人看顧做得更久。好的 spec 加上他們說的 back pressure，是讓模型不用人就知道自己做得怎樣。它可以做兩小時，你再踢下一個，平行就多了。Guy 同意：完美世界裡意圖和 verifier 都表達得好，就不需要審 code。要看到什麼，才敢給自主。

Dexter 正在做一個小實驗，他自己也不覺得這是好產品：一個 code search harness。字幕裡有一個專門做 code search 的自訂模型，名字沒聽清。他這個 harness 是給他口中的 Jeff。Jeff 的 context 只有 32K 或 64K，放不進整個 codebase，也不能說這是我們目前所有資訊。得創造性地切開再合回來。他用類似演化演算法的做法：很多受試者試不同的事，在成本、速度、準確度的 Pareto 前緣上 hill climb。目前 45 個 code search eval，還會更多。那些 code 他沒在讀。若真的好，他會抓住根，請它把演算法解釋出來，收成 spec，再用乾淨的架構重做。現在到處是 slop，瘋狂的 regex、切割。為了證明可能、為了原型，不讀 code 可行。

Sonnet 3.5、Opus 4 那段日子，人們說 code 是 slop 沒關係，等我要修的時候已是 GPT-7 的問題。他說我們已經在六了。他認識的每個真正會做的人都提到，Astro 在 computer use、電玩 slop、Blender 上好很多，寫可維護的 code 卻沒有好那麼多。字幕後來又聽成 Astra。要訓練，需要 RL 環境。好的 RL 環境需要 oracle，能驗證產品是否滿足使用者。可維護性要兩個月後才知道壞了。軟體可維護性沒有快速的 oracle。他和在 Google 待過的 Addy Osmani 聊過，對方也這麼看。

Slop Code Bench 的高層是：給模型一個 codebase 和一個挑戰，叫它寫功能，然後必須繼承那個 codebase，再寫下一個功能。基準很不飽和。2025 年 5 月 GPT 5.5 是 14.8%。他們準備發表 Astra 的結果。這不是他的基準，是威斯康辛大學的一個實驗室。HumanLayer 提供過一些跑分。Astro 第一次跑是 16.3%。模型在「長期維護 codebase」這個維度在變好，但沒有大家想的那麼快。其他領域在 RL、在 hill climb，這條前線沒有那麼快。

## 品味先寫下來，每晚五張讓 codebase 好一點的 PR

[30:55](https://www.youtube.com/watch?v=H_1PygR7kwk&t=1855s) Guy 的反論是維護用的 agent。Tessl 從 spec 走到 context 和 skills，是因為厲害的開發者不只要知道你在做什麼，還要知道你怎麼做。Context 是那個寬度。他認為 skills 主要三類：spec，你的產品或別的產品怎麼運作；workflow，某個動作要怎麼走；以及意見、政策、最佳實務，沒有對錯，是你們的選擇。安全政策就是一種平衡。他大學後第一份工作在 Sprout Social，有一份清單：不要把 API 包進另一個 API，降低 code 穿越的深度。老闆 Allen 有一條叫 three copies, press hard。Endpoint 最上面永遠是記一筆 log、送一個 metric、再做另一件事。每個工程師都想收成一個 `sendMetrics`。Allen 說不要。一抽象，就會漏、會變複雜、會扛一堆責任。就在每一處把那三行重複呼叫。像修車廠：三聯單用力寫，簽名，一張給管理、一張去處理、一張自己留。這種品味是工程師五到二十年累出來的，還沒放進模型。模型幾乎按定義是通用智能，你用的和我用的是同一個意見。設計最明顯：有人愛 dark mode，有人恨。放不進模型，但放得進 context。那也是一種規劃：你打算怎麼建造。然後一群維護 agent 跑在 codebase 上，審實作 agent 依功能需求寫出來的 code，把品味寫死。

[34:31](https://www.youtube.com/watch?v=H_1PygR7kwk&t=2071s) Dexter 看得到那個世界。通常的起點是在 CLAUDE.md 或 AGENTS.md 裡一條一條加：永遠這樣、絕不要那樣。然後指令太多，大多數沒被遵守，因為 context 太多。HumanLayer 內部有些用確定性的偵測器，有些不確定但很簡單：我們不喜歡這個 pattern，想要的終態長這樣，而有一堆 code 長那樣。React Doctor 確定地把警告拉出來，oxlint 也是。每晚四五個他口中的 agent，其實是同一個 harness、不同的 user message，跑在 cron 和 GitHub Actions 上。每天早上醒來有五張 PR，各自讓 codebase 在某個維度好一點。難處是你必須精確知道要什麼，把所有意見寫在某處。大概不能全塞進 AGENTS.md。可以放進 skill，拆開。意見愈多，就愈得聰明地切開、平行、編排。那就是 context engineering。

Guy 說 Tessl 仍審 code，但內部 software factory 的賭注是從觀察裡抽出正確性。今天承擔一些風險，逼過程不要只靠寫 code、審 code，而是和系統互動。預設是你在 PR 和系統上說哪裡錯，再讓 skill 驅動的流程持續變好。他們多花力氣磨那些 skill，賭它以後會更好，也看到一些複利速度。這賭仍是 TBD。

Dexter 對複利很樂觀。他看到的反模式，多半發生在比他們都大的組織：有人興奮了，把東西全扔掉，從零設計一整座工廠，以後再也不讀 code。任何軟體都一樣，大設計先行會輸給每天或每週好 1% 的迭代。你付不起把 slop 放進 codebase。每一次放進壞 code，整個系統都變差。人們談 software factory，但傳統工廠和軟體工廠差很多。汽車在產線末端是壞的，買的人自己處理。軟體工廠若 ship 壞 code，之後每一件通過這座工廠的工作都變差，因為模型看得到更多壞 pattern。你要有一條每天或每週讓工廠變好的坡。但第一優先是止血，先把窗戶關上再打開空調。人在迴圈裡的工作，是確保沒有會讓品質變差、也會讓未來品質變差的東西進 production 或 codebase，因為 agent 看到會以為那樣可以。這個過程的廢氣，是一堆真實例子，可以拿去改進工廠。人在 agent 寫的 PR 上留言說這樣不對、我們不這樣做，agent 去修，沒問題，但每一次都該把那條抽走。就算只是 prompt，也該看團隊的 session trace，不必逐字讀，要分析人在哪裡挫折、在哪裡告訴模型它錯了，然後改整個系統：基礎 skill、code review skill，或其他。沒有變好就是在變差。他完全同意 compounding engineering，永遠在做那個會做出東西的東西。做得好，審個別 code 的時間愈來愈少，改進系統的時間愈來愈多。從在乎位置，轉成在乎速度。Guy 說這是從造車轉成造工廠。也補一句：引導工廠的 context 要改進，但最終引導工廠的主要 context 之一就是現有 codebase。裡頭全是 slop，agent 會合理地模仿它看見的 pattern。所以「技術債通縮、今天可以先積」只在每一張 PR 都不讀既有 code、從零生出來時才可能成立，而那不現實。

## 永遠有東西值得審，十二個月後堆疊會拆開

[41:34](https://www.youtube.com/watch?v=H_1PygR7kwk&t=2494s) Guy 問 code 還能當 source of truth 多久，兩年後是不是仍把決定寫在 code 裡，還是會有新的產物，code 更像 bytecode。Dexter 不預測時間。別人的預測不是太保守就是太放。他們和 Fortune 500、上市公司、大型私人公司合作。對方喜歡他們，是因為他們說不要為了未來把 codebase 抵押掉。也許有 1% 的機會錯過某種瘋狂的上行，但他們要讓你盡可能快，同時不放棄控制和品味。

大約六週前他在舊金山一頓晚餐，談 software factory 和當時叫做 loops engineering 的東西。AI 是否寫了你 100% 的 code，所有人舉手。還在讀 code 的大約一半。另一半說自己手寫了 70 條自訂 linter，抓到每一個 anti-pattern，總之是讓自己有信心 ship 的做法。多久以後不再審 code。他當時說也許一兩年，有可能。接著有人問，會不會有一天什麼都不審。一位老手說了一句他現在幾乎每天都在想的話：審查某樣東西，大概永遠有 alpha。不知道是什麼，接下來兩年大概會變。若什麼都不審，就是讓 AI 去煮，然後你得到和所有人一樣的產品、一樣的 email、一樣的公司。想高過中位數，不能只是花 token、創造價值那種沒有差別的形式。聰明、有創意、想得清楚、在乎的人，永遠有地方審某樣東西。現在他認為仍是 code。以後可能是別的。不知道何時、長什麼樣。永遠有東西可審，也永遠有東西可以加進那張圖。Guy 說 Claude 做的簡報有一陣子讓人驚艷，現在每一份都長得像 Claude 的簡報，人開始渴望一點不一樣。

[45:03](https://www.youtube.com/watch?v=H_1PygR7kwk&t=2703s) Guy 用外包和製造來想：很多公司設計，別人生產。做出記載偏好、意見、品味的產物，實作大部分外包給 agent。Dexter 說「新的模式是品味」這句很模糊。比較穩的說法是：把問題懂得比任何人都深，知道該向工廠要哪些功能，比別人懂客戶。那仍極有價值。你能因此用競爭者做不到的方式做 context engineering。品味有一部分只是你懶得寫下來的偏好，看到才知道。讓 agent 看得夠多次，它會抓住。它仍是差異：若你寫下來的品味在某個用途上比我的好，你的產出就比我好。品味應該被寫成規則。它不是人對 AI 那種捉摸不定的差別，是一個選擇。

Guy 認為軟體工程是創意職業。名字裡有 engineering，是歷史的錯誤，因為以前必須是工程師才創造得出來。真正要抓住的是品味、偏好和平衡，那些會變成你在建的單位。什麼叫安全、什麼叫好設計、要多細、你有多想控制。像 Apple 把最後一點設計完，或接受比較通用的 OEM 零件。你仍得知道用了哪些、誰依賴誰。改它們時仍要 eval 和 test，才知道沒有回歸。還要觀察、複製，多人一起做時要對齊。他相信開發會繞著 skills 轉，code 的角色會變小。Tessl 一開始有 spec 和 shadow spec：你創造的是 spec，shadow spec 抓住決定。Shadow spec 和 code 的差別，是自由度。今天用 Java，垃圾回收已經委派出去，不同系統做法不同，你不在乎，因為你信任它夠好。現在的對話是這段旅程：今天該建什麼，才不會把明天 stranded，同時今天仍走得動。這個平衡一直很難。

[50:16](https://www.youtube.com/watch?v=H_1PygR7kwk&t=3016s) Dexter 說，想創造價值的建造者，現在兩個最大的瓶頸。一是怎麼讓模型又有效率、又讓人心理上好受地把你的品味和偏好盡快吸乾。這點他們一致。二是若你仍在讀 code，對應的問題是：模型用什麼最快、最有效、視覺上最清楚的方式告訴你它做了什麼。也許不必讀每一行。從現在讀每一行，到有一天讀一份 spec，中間有梯子。不要告訴我 code，給我一個比讀每一行快 50% 或 80%、又幾乎給我同樣信心的東西。利用人怎麼想、怎麼懂，盡快放進模型的 context，再讓模型對人做 context engineering：用最快的方式解釋做了什麼，讓人有信心它能用。

他今天的建議和 12 個月前不同。有些幾乎 18 個月前就對、而且沒改：只要還在用 transformer 的 LLM，context engineering 永遠對。那是它們的數學。Context 用得少，品質更好。你永遠可以靠工程拿到更好的結果。接下來 12 個月他認為會變的，是基礎設施。整個 software factory 堆疊會分解成好的介面和開放元件，像過去十年的 Kubernetes。愈開放、愈可攜，愈可能被廣泛採用，也需要夠多的動能才會變成預設，像 VMware、AWS、Kubernetes 發生過的事。封閉花園做得到：harness 用 Claude Code，orchestrator 用 Claude automations，runtime 用 Claude 託管的 code sandbox 或 managed agents，整條垂直堆疊。他會繼續給的建議是，開發工具的堆疊大概會維持開放，或變得更開源、更開放的協定。為那個做準備。現在什麼都建得了。但不要完全不看 code，尤其是關鍵系統。

Guy 想起早先節目上 Netlify 創辦人 Matt：網頁曾有封閉的部分，開放的 web 贏了，大家因此更好。Agent 的封閉生態很誘人，因為各塊自然對齊。他相信開放、可組合最後會帶來更多創新和組織的彈性。Dexter 說那是另一場：籌碼或骨牌以什麼順序倒下。前線的工廠、Devin、OpenAI、Anthropic 到底領先多少。對他們來說每天都在打仗，因為開放那邊追上來的速度，比大家準備好注意到的更快。
