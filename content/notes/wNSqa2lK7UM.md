# Simon Maple & Alan Pope - Supercharge Your Coding Agents | DevCon Fall 2025

片長 115 分 40 秒，英文自動字幕。Simon Maple 說他在 Tessl 負責 DevRel，Alan Pope 和他一起。這是 DevCon Fall 2025 的 spec-driven 工作坊，字幕裡的資料夾叫 Devcon 25NYC。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 多次聽成 Tessle 或 Tesla，把 MCP 聽成 MTP，把 spec-driven 聽成 spectrum。現場有一段安裝、登入和即時生成，下面只留和論點有關的結果。問卷網址沒有被聽清。

- 原片：[YouTube](https://www.youtube.com/watch?v=wNSqa2lK7UM)

## 一句話

只用 prompt，agent 會在第一百次把別的東西弄壞，也會在 context 被壓緊之後忘掉前面十次。API 幻覺有時是版本糊掉：訓練資料橫跨很多版，它不知道你對著哪一版寫。Session 一結束，你交代的 best practice 就沒了。出錯時它說 you're absolutely right，同樣的資訊再跑，只是在賭非確定性。Simon 的答案是規格。一種規格定義應用，能力就是測試。另一種是指引，告訴 agent 這個版本的函式庫怎麼用、組織的安全和政策怎麼走。Tessl 把這些做成 tile，放進 registry，用 MCP 拉下來。Alan 的反例是幾乎不給規格的 vibe coding：十分鐘做出一團霓虹綠。現場用 Python、UV 和 React 現做一個 YouTube 版的 Wrapped，先是假資料，後來接上他的真實觀看紀錄。

## Prompt 是用過即丟的

[0:09](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=9s) Simon 先把 AI coding 的經驗排開。很多人的第一次是 ChatGPT，他說大約三年前。打一句請它寫 code，貼進 IDE，壞了，把例外丟回去，通常最後有個解，但 UX 很糟，因為人在兩邊複製。Copilot 是他第一次在自己的 IDE 裡做真正的 AI assisted development，tab completion，或叫它做更複雜的事。Copilot 現在也有比較 agentic 的做法，他開始用的是協助那一面。然後才掉進 agent。

[2:24](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=144s) Assistant 通常做較小的任務，比較像聊天。你問，它答，你驗證，再問。Agent 是你把事情送出去，它自己做決定，maybe 用別的 agent 或 sub-agent，去用第三方服務。跑得更久，更複雜。沒有 agent 是完美的。不用規格時，他請 ChatGPT 畫了這些失敗，說那是 ChatGPT 很自我反省的一刻。

[3:18](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=198s) 第一個是 collateral damage。Vibe coding 時，不管是 Claude 還是 Codex，第一百個 prompt 它說會修好，卻弄壞別的東西。你要的那件事成了，另一件事壞了。不一定是例外或錯誤，可以是行為，但影響到另一塊。第二個是 context。到了第一百個 prompt，前十個還在不在。壓縮過往 prompt 時，它會忘掉一些指示。Prompt 是用過即丟的訊息，只是聊天。Agent 很難握住這一長串要求。

[4:31](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=271s) 幻覺在寫 code 時常常是一個你以為存在、其實不存在的 API。有時是真的幻覺。有時是 version blur：訓練橫跨很多版本，agent 沒完全懂你對著哪一版寫，打到那個函式庫的另一個版本。東西被 deprecated、被拿掉，或還沒進到你用的版本，它卻去呼叫。Spring 7 他說這個月要出。訓練資料裡當然沒有。他看 Claude 的訓練是今年一月做的。除了讓模型去找文件，或看它下載下來的依賴裡的 code，沒有別的辦法對著那個版本寫。Josh Long，Java 和 Spring 的 advocate，在另一個房間。他的演講會被錄下來，Simon 請人別現在跑去。很大的 legacy，或剛超出訓練資料的新東西，都是這個問題。

[6:23](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=383s) 還有缺乏持久的知識。一個 session 裡你終於把怎麼為你寫 code、best practice、做這件事時要寫哪些測試講對了。Session 一死，下次得全部重建，因為它不存在。最後是 you're absolutely right。他們的 T 恤上就印這句。出錯時你得到這句漂亮的話。他想寫一個小程式，掃 Claude 的歷史，算你每分鐘或每小時被說對幾次，好量那種挫折的迴圈。它說一次，然後完美答對。或者一次又一次，直到你很挫折，才發現你沒有給它更多資訊。除非它去做網頁搜尋，資訊量和剛才一樣。同樣的資訊很難變出正確答案。你是在靠非確定性，希望它幸運撞到另一個答案。

[7:41](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=461s) 怎麼讓 agent 更準、更可預測、用更當下的資料、有驗證，而且少一點這種螺旋。在 Tessl，也在 AI Native Dev，他們相信答案是規格。一大串 prompt，放進規格。Version blur，寫一份描述你的技術棧、你下載了什麼、怎麼用的規格。

## 一種規格是應用，一種規格是方向盤

[8:42](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=522s) 較長的願景是用規格定義一個應用。App spec 定義能力。能力其實是測試的另一種說法：我要你做這件事，等於我要寫一組測試證明你做了。也可以規定 API 該怎麼建。那可以是一個 markdown。另一條路是規格用來引導 agent 寫 code。第一種很 spec-centric，規格是宇宙中心，照它做出應用。Guidance 是：我能不能做一組規格，agent 把它們當 context，用特定方式來建。Tessl 稱為 usage tiles。例如 React，他隨口說 19.1 這種比較新的版本，裡面是 LLM 該怎麼用這個函式庫。也可以是組織的安全政策、TypeScript 想怎麼用和不想怎麼用、coding best practice。這場工作坊要走過這些。核心是協作：規格上傳到可以分享的地方。這個人寫了，那位想用，不該各自寫、隔離著用、從不分享。同一組織有很多相同政策。一個人上傳，另一個人用。或平台團隊提議一批規格，整個組織或團隊拉下來。這樣引導 agent 才可預測。

[11:39](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=699s) 他已經裝了 Tessl。指令是 `npm install -g @tessl/cli`，之後在哪都能跑。`tessl version` 他期望大約 0.5.0。登入會開新視窗。沒有帳號可以免費建，用 Google 或 GitHub。登入之後可以建 private workspace。Tessl 有一個 public registry，他們發布一批 tile，大家一般開發都能用。目前發布的是 usage tiles，是開源 code 的描述。拉下來之後提供給 agent，讓它知道那個版本的開源該怎麼正確使用。他搜 spring，看到好幾個 Maven Spring 的 usage tile，裡面有大量範例，說明 agent 該怎麼用。`tessl init` 會設定環境，試著下載需要的 usage tiles。它說有兩個 agent 需要設定，並為 Claude Code 和 Cursor 建了 MCP client，因為它認出本機有這兩個。Claude 裡 MCP server 在，工具有 install 和 search。安裝的意思是找到一份 usage spec，一份 markdown，拉到本地檔案系統，讓 agent 有 context。他不會把那些內容 check in。會 check in 的像 package.json，是一份 tessl.json，描述需要哪些 usage tiles。`tessl install` 就下載。

[15:41](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=941s) 示範是做一個應用，用骰子記法當輸入，把一組骰子加總，用 TypeScript，並用 Tessl 的 MCP 拿 usage tiles。他還說若真的在意，可以用 commander 這個 CLI 依賴。它立刻搜尋、拉 TypeScript 的 usage tiles，再找 CLI，應該會搜 commander 並拉下那個 tile。安裝之後有一步很重要。Usage tiles 和資料會非常多，不能把環境灌滿。它會依請求，用一個 sub-agent 判斷需要 usage data 或 context 的哪些部分，再交回主 agent，用在這次生成裡。時間關係他先停在這裡。

[17:54](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=1074s) 剛才是開源。若是私有 code、私有函式庫，或只是告訴 agent 我要你這樣工作、照我的組織來，他要能做自己的 usage tiles、自己的 context，上傳，讓 agent 用。`index.md` 是 Tessl 和 agent 找某一塊 tile 資訊的根。這份是 TypeScript style guide，告訴 agent 依組織 best practice 寫 TypeScript。裡面可以連到別的檔，例如測試怎麼做、什麼叫好、什麼叫壞。Agent 寫測試時抓需要的 context，拉進主 agent，照他要的方式寫。Code review 會看 style guide，給的是對這個組織的建議，不是通用輸出。發布用一份 `tile.json`。工作坊的 workspace 字幕聽成 AIND、aimed、dear workshop。Tile 叫 `/typescript`，版本 0.0.1。`tessl tile publish` 指向那份 json，就發到那個 workshop。回到 registry 裡他的帳號，那個 workshop 裡就有這塊 tile。再叫 Claude 安裝它，會拉進專案、寫進 tessl.json。然後說做一次 code review，它就用這套 best practice。Control-O 可以看到要修的問題，差不多都直接來自身邊那份 steering。Claude Code 做出來的東西，和他的 coding best practice 差在哪，它列了一堆。

[23:53](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=1433s) 有人問 tiles 和 CLAUDE.md 是一起還是互相打架。`tessl init` 最早做的事之一，就是寫進 CLAUDE.md，用 Claude 自己的方式鼓勵它用 Tessl。以後還會接 Claude skills 這類更原生的整合。他們不綁死任何一個 agent。任何用 MCP 的都可以用 Tessl。有人用 Claude Code，有人用 Gemini，有人用 Codex，同一份知識，他們試著接在對的階段。

## 不給規格，就得到霓虹綠

[25:04](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=1504s) Alan 要大家自己做東西，約束不多。概念是 Wrapped。這個時節 Spotify 會告訴你音樂品味有多糟。他的清單裡有 Michael Bublé，因為廚房的 Alexa 綁他的 Spotify，他太太喜歡。他堅持這是他的故事。Wrapped 是拿一大堆資料，做成視覺上想分享的摘要。他未必想分享。目標是做某種今年的 wrapped。挑對你有意義的東西。用 markdown 寫指引，做一個漂亮的儀表板。美是主觀的。上次在倫敦辦公室，一房間學生對美的定義和他很不一樣，他們用的詞是 brain rot。若你覺得需要把 brain rot 寫進定義，結果會很有趣。Maybe 它會把資料拉在一起，教你一件你不知道的事，例如他不知道自己喜歡 Michael Bublé。可以分享。有一個 git repo，可以 fork，他會走過怎麼做。真的很狂，可以上來給大家看。想自己留著，完全可以，不評判。

[27:33](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=1653s) 建議有 GitHub wrapped，今年在 GitHub 或 GitLab 或其他能把資料拿出來的地方做了什麼。Email wrapped 可能危險：讓 AI 翻完整個信箱，告訴你星期幾比較生氣，或用某種方式讀你溝通的人。Strava，或做運動的人拿得到的資料。更 meta 的是 Claude unwrapped，拿你和 agent 的對話 log，看你一直用的最愛的詞。他猜若問 Claude，maybe 是 awesome。Browser history 他做過，很好玩，可以看出你常去哪些網站，未必想分享。那是在工作筆電上做的，他說完全沒問題，但不會給大家看。倫敦黑客松有人看 Costco 卡的年度消費，事實上看的是女朋友的卡。他不是建議做違法的事，他還想再來美國。也可以看 Netflix，或自己架的 Plex、Jellyfin。有資料能碰，就拉進來做儀表板。

[29:38](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=1778s) 他自己的 GitHub 年度頁很糟，他喜歡綠霓虹，但沒有到這種程度，而且不是他要的。他沒有好好引導。這幾乎是從零 vibe coding。總事件、pull request，看起來不像 Spotify Wrapped。熱門語言裡有 GDScript，他這輩子沒寫過，不知道從哪來。Push、pull、這個月很瘋，其他月沒有。十分鐘做出來。他挑戰大家花超過十分鐘，並做出比這個好看的東西，他覺得不難。做法很基本。沒有用 Simon 講的 Tessl skills，也沒寫完整的 spec。他平常會寫。這次裝了 Tessl，讓 Claude 知道它在，並確認是新版本。Prompt 說這是工作坊範例，要快，只在筆電上跑，不上 production，別擔心。主目標是你的 GitHub 年，摘要過去一年的個人活動。他必須寫這是 2025，因為有一次它以為是 2024，把 2024 的歷史全找出來，沒什麼用。子目標包括做成大家能用的例子，以及貢獻可重用的 tiles 到 Tessl spec registry，他只是丟進去，希望它想出東西。他要兩個階段，這也是他建議參加的人做的：先做一個蒐集資料的過程，用某種方法把資料放到某處。再做一個網頁，用漂亮的方式展示。他好像說過 mono 字體、綠色強調，它看得太認真。他把整段 Claude 對話留著，但覺得不值得大家一起看。就是貼了那個 prompt。它問了幾個問題，看目錄，建資料夾，建 gitignore，寫一支 Node 去抓 GitHub 資料，也做了假資料好測前端。他幾乎不必互動。他說這是真正的 vibe coding 胡扯。最後一個資料檔是他在 GitHub 的貢獻。它試著做幾個 tiles，一個給抓 GitHub 資料，一個給視覺化，他不覺得特別有效。這些會放進 git repo，可以 clone 當起點。他不會放個人資料。若你放到 GitHub，他強烈建議別放個人資料。Repo 在 GitHub 的 AI native dev community，叫 AI ND workshops，裡面有 Devcon 25NYC，一些筆記和建議。Fork，按 star。當時只有他和另一個人。然後開始做。

[35:18](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=2118s) 他做出了一個東西，視覺上不特別動人，但可以再迭代。它沒用 Tessl tiles，因為他幾乎沒提 Tessl，也沒寫完整 spec。他要展示的是：別照他做。有更好的做法。這說明 Simon 剛才的點。你給它什麼，它就拿什麼。指示不完整，網頁就是單色霓虹綠的胡扯。那就是答案。

## 規格要講得很囉嗦，也要拆得很小

[36:43](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=2203s) 下一步的 readme 會一步步寫：建 Tessl 帳號，看你想建什麼 spec。怎麼逼或引導 agent，完全看你。可以用他們圍繞開源函式庫的 Tessl specs，或把指引加成 markdown。你也許已經在用 Cursor rules 或其他 steering。把它們加進工作坊。想貢獻回去，或用現場其他人做的，把 ID 貼到 Discord，或直接拿給他們看。`tessl whoami` 會給一個 user 開頭的 ID。到帳號頁可以改名。Alan 的使用者名稱是 Popey。把那個名稱給他們，他們把你加進 workspace。你就能看到裡面的東西，包括他剛加的 TypeScript tile，也有權發布和下載別人的 tiles。先花 20 到 30 分鐘寫你要的規格，看看 registry 里能拉什麼，再發布、分享，然後希望用這些 tile 的指引來做應用。舉手知道自己要做什麼的，有七個人。可以和旁邊的人一起做。Simon 和 Alan 會走來走去。安裝指令他再念一次，是全域的 npm，套件是 `@tessl/cli`，字幕中間聽歪了。

[41:38](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=2498s) Alan 說他的 prompt 超短，而他是個很囉嗦的人。Spec-driven 在他腦子裡成立，是因為把想做的東西講得非常囉嗦，對他很方便。把自己想成在跟外星人、三歲小孩，或祖父母解釋。他跟孩子說的是用你的詞。工作坊裡很多人用很長的 markdown，把你要什麼寫到難以置信的細節。他覺得這是讓 AI 照你的意思做的好得多的方式，至少對他是。

[45:41](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=2741s) 有人問做過 spec-driven 沒有，把東西寫清楚有沒有用，還是浪費時間。一個人說都有。他試 Claude Flow，想把一切拉滿，看能多快把 AI slop 湊出來。就算 spec 相當好，最後仍是 slop。還試過幾個 Claude 相關框架，字幕聽成 Gustav，以及 Google ADK。還沒試 Tessl。到目前沒找到一種方式，可以平行化、全部生成、YOLO，還得到好結果。Alan 說他不確定那是好的目標。好玩是好玩。要進入的心態是把你要的講得非常明確，並把那份東西當成下次的藍圖。你會帶著一份巨大的 spec 從一個專案走到下一個。那他為什麼只留給自己。他不想要一個巨大檔案。要拆開。原子的一塊是 TypeScript，一塊是 Python 後端，一塊是資料庫，可以挑。對方說原子這點很有道理。就算用較弱的模型，它們也很容易分心。不給很小的塊，就容易走歪。換到 token 更多的提供者，例如他換到 Gemini，心想可以塞更多，那是應付。像把手伸進廚房垃圾桶往下壓。某個時刻得把它拿出去。他覺得這問題開始有點荒唐，得解。

[48:19](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=2899s) 另一個人在 Cursor 裡做 spec-driven，做了一個 custom mode，一步一步。第一步把腦子裡要的東西弄出來，讓 agent 確切懂要開發什麼。第二步從真實 code 找相關檔案和 context，需求在這，code 在這。第三步弄清函式庫版本之類，和它討論，整個過程是協作。第四步把這些放在一起，實作前還有沒有缺的問題、缺口。第五步定義測試情境和驗收標準，以及實作時怎麼測。第六步才寫出 spec。他把那份 spec 拿到新的一條 chat，只給 spec，然後開始做。對他這套極好，他能把做出來的 spec 一次做完。但 spec 本身要 30 分鐘到一小時，開發只要 10 到 15 分鐘。

[50:09](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3009s) Alan 說在看 spec-driven 之前，他是讓別的人肉來做這件事。他對一個應用有想法，跟幾個朋友私訊，你覺得怎樣。他們幾乎是對抗式的：講清楚，你那句是什麼意思。他腦子裡應用是完整的，他看得見，但要向另一個人解釋。有時他把人 nerd snipe 到幫他寫出來，任務完成。有時回頭看那段對話，他們在做的是把一切問清楚。有些他沒想過，包括這件事當專案可不可行，或已經有人做過。洗澡時覺得這東西該存在，結果已經存在。和 AI 或和人做這段對話，朋友比較不會煩，他也得到可以摘要的東西。用 LLM 摘要，再拿到流程的下一步。他愛這個。它剛好合他的腦子。

[52:17](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3137s) 另一個人說自己很懶。想描述的東西有詞，但他想讓模型一直猜，猜到寫下來，看起來夠近了再開始做。然後保姆工作開始。為一個 codebase 想那些詞很貴，或就是累。他不是完美工程師，不知道哪些詞對模型正確實作有用。所以叫它給建議。不要用你想得到的東西限制它。我有一個模糊想法，你能想到什麼，幫助很大。Alan 說早上第一件事，那種發燒的夢，知道自己要什麼、必須把它弄出來，是做這段對話的最好時候。他有很多想法都寫下來了，都是大 spec。他從沒有足夠時間寫 code，變成不知道接下來幾小時該把哪一個真的做出來。這不是壞問題。

[53:46](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3226s) Simon 說可被很多人重用的 spec，所有權可能會換。不一定還是開發者在寫大量指引。可能是平台團隊擁有它、擁有散發，並和各路人一起把文字工作坊出來。從應用的角度看，你做的應用就是 spec。他覺得那裡有一個技術缺口，所以 Tessl 更重 spec registry，以及給 agent 的指引、怎麼把 agent 盡量變好。Oneshot、照一份 spec 一次做完，他認為是未來。Tessl 在朝一個願景做：事情寫得夠全，就可以 oneshot。以 LLM 現在的能力，他們還不在那裡。指引和開發 best practice，很有意思的是會不會被平台團隊接走。

## 規格是意圖，context 不能全倒進去

[56:44](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3404s) 有人問他們說的 spec 是不是 prompt，非常精細、有特定格式、而且是一種全域格式，tiles 是不是靠這個。Alan 想的是 Simon 投影片上那些事：agent 會偏離你要的 happy path。目標是做這個網頁應用，有一條 happy path，但旁邊有岔路，走一條很繞的路，或因為你沒講明要這個版本的 Python、那個框架、測試要符合公司標準，LLM 做了錯誤假設。有些它一開始就該知道的事實，我們有時以為它知道。把它們用一種不必全球統一、但標準化的方式寫下來。它們都是公開的 markdown。一般來說，spec 裡的細節是為了把 agent 導回 happy path。那 maybe 是指定工具、框架、版本，或組織規則下的合規。不同組織對 spec 格式的想法不同。共通的是一段人讀得懂的文字，講開發過程的一部分。

[59:04](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3544s) Simon 覺得大家用 markdown 很好笑，但有幾個理由。对人，視覺上好分段、好放標題。LLM 消費時也喜歡段落和標題。他們早期測 LLM 怎麼吃一份 spec，原本用類似 XML 的標籤標段落的開始和結束。有那種分類時，輸出好很多。很多想為自己的工具定一種規格風格的人用 markdown，不只因為人讀起來較整齊，也因為模型輸出會更好。Spec 該長什麼樣，沒有真正的標準。它是自然語言，試著抓住意圖，或我們想做的決定。若你不在乎 LLM 怎麼做那個決定、怎麼實作，有很多可以不寫。你 maybe 仍想把它當 context，好讓一輪一輪做出來的東西，版本之間不會差得太野生。有時給得愈少，結果愈好，因為它自己能做很多決定。Spec 其實是把意圖抓住。從 code 回到 spec 很難，因為 code 裡實作的噪音太多。把它想成一組意圖，分段寫到 LLM 懂你的意圖，再用那個 context，做出更符合你需要的東西。

[1:01:34](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3694s) 有人問 Tessl 怎麼避免 context 膨脹。MCP 裡有多少工具，有沒有制衡。Simon 說專案變大，context 可以完全失控。關鍵是一個 MCP 工具，他記得名字像 get library context。依你的請求來。若你有 commander CLI 的 usage spec，說給 CLI 加一個新東西，它會派出一個 sub-agent，做研究式的任務，在它有的、相關的 context 裡看，只把需要的量拉進那個 agent 的 context。不是全部拉過來。研究本身在另一個任務上，不佔用那份 context。拿到真正要傳進去的有限 context 之後，不該把 context window 炸掉。他們現在是 beta，還沒測到極端，大概會有過頭的邊緣情況。目前是 sub-agent，把事情從主 agent 拿開，避免 context 的膨脹堆在主 agent 上。

[1:03:37](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3817s) Alan 說若用 Claude，一個有用的指令是 `/context`。它會轉一下，然後給一個像直方圖的東西。團隊裡的開發者 Jay，不是隨便問路人。MCP server 本身的 token 大小他不知道，但他們依請求拉相關 context，不是把一切丟進系統的 context window。你要寫測試，它會拉出測試指南，不會把其他一切拉進來。有人問的其實是早期 MCP 的經驗。Context7 那個時候，或 Playwright。他接愈來愈多 MCP、把工具綁上 agent，很快發現 LLM 的結果差很多。Playwright 出貨就帶 128 個工具。開著不看，光放在那裡他就覺得吃掉接近 5 萬 token。所以他好奇。若畫面上只有 Tessl 的 MCP，大約 6 萬 token，已經不少。Alan 早先那個胡扯的東西裡不只有 Tessl，還有一堆別的。MCP 工具佔內容的絕大部分。Tessl 在很下面，只有幾千，因為他根本沒用它。

[1:06:31](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=3991s) 有人追問，這聽起來像對 MCP 做 lazy load。他以為它們不做。若知道怎麼做，想知道。Simon 說這個說法不錯。一個 MCP 工具被呼叫，他們請 agent 說明使用者要做什麼，再用那個去知識裡搜，拉出相關檔案。等於用一個工具做一次懶的 MCP 呼叫。Search 和 install 會把知識全拉到本地，你本地什麼都有。然後那個 context library 被呼叫時，只把相關的幾塊加進 context，不是灌滿。他們早期測試很快發現 context 會爆，所以需要那個研究步驟。另一個人給的比喻是 npm。`npm install` 把依賴拉進 node_modules，你不提交那個，它是設置的一部分，然後你 import 需要的東西。

## 現場做完了，假資料先亮，真資料也很嚇人

[1:10:33](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=4233s) 他們改成現場做。Alan 說自己不是開發者，這點很明顯。目標是他自己的 YouTube 觀看歷史，做成 Spotify Wrapped 那種頁，風格是 brain rot。兩個階段：用 YouTube API 蒐資料，再做網頁。後端有人喊 Rust，他拒絕，因為會把時間全花在建置上。改成 Python，套件用 UV。前端用 React。並去 Tessl registry 找 Python 和 React 能用的 specs。測試他先開玩笑說是輸家才寫的，又說是給時鐘上還有超過 44 分鐘的人，改天再做。先做一份詳細 spec 和 to-do。他平常會有一大堆 MCP，這次很生。觀眾喊做。Claude 找到一個 YouTube transcript API，不完全是他要的，但繼續。React 的動畫也有。他碰巧開著 Claude，VS Code 或 Copilot 也行。問大家用什麼，有 Claude、有 Gemini。他問還有沒有人用 OpenAI。

[1:17:37](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=4657s) 它懂了要用 UV，選了 Python 3.11。他說這是在 YOLO，已經 41 分鐘。Tile 被加進專案的 tessl.json 並被抽出。後端裡出現 tessle tiles。一份 steering 寫著你在一個大組織裡工作。前端它把自己搞混，把那次殺掉重來。有人看著你 vibe coding 是另一回事。他有一個 hook：若他被電視、煮飯或顧小孩分心，電腦會大聲說 Claude 在等人類回應，他就知道筆電需要他。語音合成叫 Piper，英語 GB 是他的聲音，真想的話可以讓 Claude 用他的聲音說話。假資料先跑起來：一個很棒的開場，然後世界變黑，主控台有錯誤。他說測試大概是個好主意。

[1:30:44](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=5444s) 等待時他提另一個幾乎百分之百 vibe coding 的小專案，nerdy.daytrips.org，找世界各地的 nerdy 地方，美國已經不少，歡迎加上去，也可以用 pull request 補說明。同事 Stewart 加了一個會 donk 的東西，他說網站存在幾乎就是為了那個。YouTube 那個用假資料做出來了。他不確定夠不夠 brain rot。有骷髏頭，和 questionable life choices。動畫是他要的。它動了。那是假資料，不是他的 YouTube。他說他們的工作完成了。隔天再在自己筆電上接真帳號，不會在投影幕上做。

[1:41:31](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=6091s) 他還是後悔地去拿了 API key。YouTube Data API v3，要先有同意畫面，應用名叫 YouTube brain rot，只給內部用，OAuth client 做成桌面應用，credentials.json 放進後端。手機在飛航模式。驗證走完。它仍顯示假資料，他告訴 Claude。然後真的是他的資料。畫面上他仍是 unhinged。前一個雇主、comedy news、一個律師、今天的網際網路，以及一個偏左的 YouTuber。最活躍的小時是晚上八點，最活躍的日子是星期五。他希望那一頁停久一點。最長連續看了 26 天。最長一次 binge 6.3 小時。另有一處說他連續看了 9 小時，他猜 maybe 在筆電前睡著了。Top 92% of YouTube addicts。他說不知道學到了什麼，但它能動，而且沒有他想的那麼可怕。他不會再做一次。有人鼓掌。他開玩笑說之後不會被放回美國。

[1:47:33](https://www.youtube.com/watch?v=wNSqa2lK7UM&t=6453s) 有人問到一種天天做的事，他們覺得現在做不到。Simon 說他們認為未來做得到，那是願景，正在往那個方向。他們覺得最急的，是指引和支持，幾乎是軌道，讓人開發時有東西可循。明天 Drew，他們的 head of product，會把 Tessl 講深一點，做 demo，比 Simon 剛才深。時間他記得是下午四點或四點十分，在 landing 的較低樓層，主題是 tools and action，keynote 前倒數第二場。Guy，字幕聽成 GIO、Gipo，是 Tessl 的創辦人，明天早上第一場 keynote，可以聽更多願景。Alan 很確定 Drew 和 Guy 都不會分享他們的 YouTube 歷史，而且一定比這個好看。
