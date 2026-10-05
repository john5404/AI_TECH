# Why Tracking AI Usage Drives Better Results | Justin Reock & DX

Simon Maple 訪問 DX 的 deputy CTO Justin Reock。他在南卡羅來納州的 Columbia。片長約 51 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Reock 聽成 Rio，把 Abi Noda 聽成 Abby Nota，把 Nicole Forsgren 聽成 Forsrren，把 Laura Tacho 聽成 Laura Taco，把 METR 聽成 MER，把 Goldratt 聽成 Gold route。

- 原片：[YouTube](https://www.youtube.com/watch?v=0tmE09uzs5Q)

## 一句話

AI 的目的仍是加強開發者能做的事，以及隨之而來的生產力。100 倍的說法資料撐不住。比較像速度提升兩成到三成，而且可能把技術債往後推。不量就不知道該押多少。DX 的框架按順序看使用、影響、成本。影響最大的組織，不是只押 code generation，而是找真正的瓶頸。

## 量產力的方法沒有根本改掉

[2:14](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=134s) DX 大約四年，在這波 AI 之前。創辦人 Abi Noda 做開發者生產力和體驗的研究，把 Pull Panda 賣給 GitHub，也就是 Microsoft。Nicole Forsgren 發表 DORA metrics，後來賣給 Google Cloud。Margaret-Anne Storey 是 SPACE framework 的主要作者。產品把 Microsoft 的生產力研究，和英屬哥倫比亞大學 Victoria 那邊的研究，收成量 developer experience 的資料，再看對生產力的連帶效果。Core 4 和 Developer Experience Index 都早於過去這一年的 AI。

[4:03](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=243s) 他承認產業在重想一直當成理所當然的事。對 DX 來說，推出 AI、助手和 agent，從軟體工程看，仍是要改善、加強開發者能做的，以及體驗變好之後的生產力。容易在炒作裡忘掉為什麼做。量體驗對組織的影響、拆開發者體驗的驅動因素，仍然相關。方法和開發者的角色要重想。怎麼量一個組織的生產力，他認為沒有根本改變。

[5:22](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=322s) Simon 用 IDE 比：工具讓你更快做到能 check in、能跑、能完成某個功能的狀態。更長的問題是維護會不會花更多時間。Justin 說他們的 AI 量測框架收成兩根槓桿：velocity，以及 quality 和 maintainability。速度的收穫不能只是把技術債往後換，codebase 更難維護，或品質垮掉。一年後會不會把東西弄壞，很多組織想的是縱向的影響。Codebase 改得更快之後，新的瓶頸常常是人的 oversight：PR 吞吐量變高，要 merge 的變多，監督變多。組織之間的長期影響還要時間。現在顯然在加速，但不是 100 倍。那種數字適合訂閱和按讚。比較實際的是速度提升 20%、25%、30%，已經有影響。

## 不量，就不知道 FOMO 對不對

[8:23](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=503s) Simon 說大家都跳進「必須有 AI」，忘了該不該。為什麼還要量一件本來就想靠過去的事。Justin 說非技術的主管現在用 Claude 或 ChatGPT，對這技術有一點感覺。上一輪 cloud 的炒作不是這樣：非技術主管不會談多雲遷移、容器工作負載。所以現在有 FOMO：不強制用 AI、開發者沒用 AI，就會落後、失去競爭力。也許有幾分真。不量就不知道。有的組織把感測和資料接上之後，某些情況反而變差。

[10:34](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=634s) 他指 METR 那份研究。樣本不大，任務也不見得代表整個 SDLC，結果要加鹽。它提供的資料是很多開發者其實變慢。不量就不知道。要看的維度：誰在用，尤其大型工程組織；重度使用者和不用的人，模式差在哪；對 junior 還是 senior 更有幫助。然後是品質：code 還能不能維護，語意有沒有漂離組織習慣，變得更難讀、不像這個文化的寫法。速度：PR 是否變多，交付率有沒有因為投資這些工具而上升。最後才是成本：投了多少，回報對不對。也許一年後 AI 花費會像行銷費用，花出去能證明帶來更好的結果。他不認為現在已經普遍知道。沒有資料，不知道往哪走。這些數字決定押多重、投多少。

## 先看誰在用，再看影響，成本放後面

[12:51](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=771s) 框架主要是歐洲的 CTO Laura Tacho，加上執行長兼共同創辦人 Abi，Justin 也出了意見。大約 96 小時趕出來，先用平台裡已有的 AI 工具使用資料驗證。Booking.com 和 Intercom 等公司開始用。他說 DX 有資格做這件事，因為公司就在量生產力，Core 4 和 DXI 已經在數百萬個資料點、數百家公司上驗證過。他們有個 oh：得把東西放出來，公司需要能量。做法沿用 Core 4：把 DORA、SPACE、DevEx 蒸成一個框架，個別指標對到維度。Core 4 的維度是 effectiveness、quality、impact。AI 框架的維度是 utilization、impact、cost，而且建議按這個順序。

[15:38](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=938s) 使用先看誰在用：組織裡的 daily active users、weekly active users。哪些進到 codebase 的貢獻是 AI 協助的。最容易的是 pull request 上做 experience sampling，一個小框：我有用 AI。最終想看進到 production 的 committed code 有多少是 AI 生成的。這個比較難抓，可以看檔案系統等方式。他舉例：進到 production 的 code 有沒有 20% 是 AI 生成的。工具已從補完走到 SDLC 裡的 agent，所以還要看多少任務分給 agent、多少分給人。這是量測成熟度的第一步。

[17:31](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=1051s) 影響仍是開發者生產力。Core 4 的大指標還在：PR throughput，速度，以及感覺到的交付率。DXI 有 14 個驅動因素，只是 Core 4 裡 effectiveness 的一部分。他預測其中一些會改對到組織或個人用了多少 AI。品質是 code maintainability、change confidence：接受 agent 或自動補完做出的 code 時，會不會覺得更容易弄壞。Change fail percentage 仍是主要品質指標，DORA 裡一直可靠。還要看開發者對工具滿不滿意。他不想點名廠商，但 Cursor 這類有壓倒性的正面滿意度，開發者大體喜歡。若文化是強制用大家不喜歡的東西，這很重要。體驗變好，組織的吞吐量才變好。時間節省要看一週還給開發者多少小時，也要看那些時間拿去做什麼。還了時間，不一定去做新功能或真的提高組織生產力。還要看 agent 完成的、相當於人的工時，才知道回報對不對、工程師有沒有被教會怎麼用。不能指望打開開關，大家就會最好的 prompting 和最高價值的用法。那要在組織裡 enable。最近的 DORA 說，大型組織裡工程師一週真正坐下來寫 code 大約五或六小時。影響不能只想 code generation。

[21:59](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=1319s) Simon 問從零開始要多久才能裝好、多久才有有沒有 AI 的有意義比較。Justin 說看你在量哪一項。三個維度故意排成成熟度：先 utilization，再 impact，最後 cost。和 cloud 一樣。到現在仍有新公司專門幫人量雲端成本。AI 的炒作循環可能更快，順序類似：誰在用、先鋪給所有工程師，然後才問做了什麼、影響是什麼，成本更晚。遙測不完美。Copilot、Cursor 這些 API 正在把指標露得更好，但仍常不完整、對不上現實。Copilot 很流行的是建議行數對接受行數。工程師必須在 IDE 裡按 accept，API 才知道。建議出現後繼續打、或複製貼上而沒按，數字就不對。系統指標最好蒐，也最容易，但缺完整 context。DX 的哲學是把質性、自己報的，和系統裡的量化合在一起。

## 問的是系統，不是人

[25:09](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=1509s) 有效的問卷他們想要全組織 90% 到 95% 以上的參與，很難。較廣的問卷是另外寄的，工程師大約五分鐘。三腳凳的第一腳是把問卷設計好。不是在問個人。Developer experience 是系統問題，不是人的問題。Deming 和統計過程控制，以及 Goldratt 的限制理論：Deming 有名的說法是，一個組織 90% 到 95% 的生產力產出由系統決定，不是由工作者決定。題目要問系統、平台、文化、周圍流程表現如何。Experience sampling 是當下的，例如 PR 表單加一題：你有沒有用 AI 做這件事，使用資料可以近乎即時進來。很多工程組織拿不到能行動的參與率。不該放棄。問卷要讓工程師想填，因為他們知道這是聲音，資料會用來決定改平台的什麼、改體驗的什麼。做得勤，可以很有效。若系統指標和問卷衝突，信任問卷，再查系統指標為什麼沒對上：抓資料的方式錯了，或資料過時。系統指標不是銀彈。使用這類數字第一天就有用：誰在用、有沒有在 prompt，不必等接受對建議。Maintainability、change confidence、change fail 要累積趨勢，才知道變好還是變壞。那些比較是影響指標。

[28:55](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=1735s) Simon 說主要該跟自己比：現在的基線、哪裡能改、哪裡意外。每個組織不同，橫向比較難。他們仍提供產業基準，給持續改進的目標，也給組織一個槓桿，去建自己想要的成熟度文化。P50，產業第 50 百分位，對有的組織就夠。想做世界上表現最高的工程團隊，就看 P90。他們看 P50、P75、P90，科技公司對非科技公司，還可以再細到金融服務。DXI 裡某個驅動因素，例如文件或 code maintainability，也許落後產業 P50 二十分，或落後 P75 十分。那就有優先順序，知道改流程、改平台，去追下一個基準。

## 資料說的是個位數到四成，不是十倍

[32:18](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=1938s) AI 特別亂。幾個月前的 DORA，在 DORA 社群網站可以下載 AI impact reports。整體採用增加 25%，code documentation 改善 7.5%，那是那份研究裡最高的。結果都是正的，但有些產業範圍的改善只有 2% 或 3%。工具一年前遠沒有現在好，所以懷疑轉成非常樂觀，是很大的移位。公開資料裡，客戶 Intercom 的 AI 帶來的開發者時間節省增加 41%。他說這是現在該預期的數字。10 倍、100 倍，資料沒有支持。40% 可以接受。Simon 說 Intercom 共同創辦人 Des Traynor 上過節目，也在 AI DevCon 講過。他們不只在做 Finn，內部也非常 AI first，所以這個數字不太讓他意外。

[34:23](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=2063s) 組織要想到 code generation 以外。SDLC 很多段跟寫 code 無關。影響最大的，是對 AI code review 很有創意的那些。一個一直開着的 agent：開發者 commit，它立刻看 diff，也許用 MCP 懂這次變更的 context，立刻回饋。可以是 CodeRabbit 這類現成的，或自己做進平台：自架模型，或用既有的 GPT API。回饋可以在 PR 留言，或直接是 code comment。Code review 和等 review 是工程師 context switching 的大來源，會拖慢人。立刻的回饋影響可以很大。文件也一樣。DORA 裡最大的收穫是文件整體變好，不太意外：多數工程師並不熱愛寫文件。Agent 先起草變更說明，或更好的是行內註解，讓以後好讀，省時間，提高吞吐量。非技術、或他說的 non-builder，也被補上能力，做低風險的 code：技術性的 product manager、靠近專案但過去不寫 code 的人，做 API 層、plugin 這類相對低風險的東西，組織吞吐量也上去。有的地方從客戶回饋生成 PRD，規劃的第一段交給 agent。

[37:23](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=2243s) 他回到 Goldratt：若改進的不是限制，下游不會變好。找出吞吐量的瓶頸，再想 agent 或其他 AI 能不能幫那個瓶頸。若過度押 code generation，而那對很多組織不是主要瓶頸，就要預期結果較低。Simon 說很多人今天的答案是「我們在用 Cursor」，那是很可預期的地方。真正能自動化或協助的，常常不是多開 PR、不是逐行寫 code。

## 差距來自有沒有教會人用

[39:54](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=2394s) 他用一個詞概括被漏掉的事：enablement。四月他們開始看這件事，結果很不均。有的組織覺得是正的，有的不確定，甚至覺得是負的。他訪問資深主管，也對回報有正向時間節省的工程師做較廣的調查，寫進網站上的 guide to AI assisted engineering，看這些文化差在哪。差在人被怎麼教會用工具。Prompting：metaprompting、multi-shot、怎麼改 system prompt，Cursor 叫 Cursor rules、temperature 怎麼影響結果、怎麼餵對的 context。廣調裡請工程師把最省時間的前五個用途排序。第一名是 stack trace analysis，甚至不是生成。他從九零年代末就專業寫 code，而且是 Java，習慣 build 失敗就一行一行看 stack trace。讓助手解釋，真的省很多時間。然後是腦力激盪和規劃。他喜歡的流程是：你是 project manager，我是 senior React architect，一次只問我一個問題。助手會把寫 code 之前的規劃問到比較完整。他說自己早期規劃總會忘：資料 schema、高可用、容錯。這些會提醒你。再把整段對話貼進 reasoning model，拆成工作單位，甚至附上以後能用的 prompt 例子。再把那份規格餵給生成 code 的模型，把專案骨架搭起來。文件、寫 code 之前的 review，也能把別的瓶頸鬆開。先懂自己的工程文化、自己的 value stream。AI 仍相對 nascent。他再推一步：開發者生產力和體驗本身也還沒成熟。研究很多，問十個主管，可能仍有十個答案。然後就快轉到 AI，最初那個問題沒解。所以量仍然重要，不能忘掉什麼叫好的 developer experience、它怎麼影響 value stream。

[45:53](https://www.youtube.com/watch?v=0tmE09uzs5Q&t=2753s) 從哪開始。他承認有偏見：先讀他們已公開的研究。getdx.com 首頁橫幅就是 AI measurement framework。有長篇白皮書，寫這些指標和維度。也有量 AI 影響的問卷模板，可以拿去用。免費。今天就可以把一些題目和 experience sampling 放進去。更重要的是誰要用這份資料。量開發者生產力時，人常跳過這題。他的朋友 Max Kanat-Alexander 在 Google 做過 developer experience，在 LinkedIn 發表過 developer productivity and happiness framework，現在在 Capital One。Max 教他的是：很多時候受眾比資料重要。若你說不出誰會因為這份資料不在而Upset，甚至癱瘓，因為他們靠它做決定，那不如不要抓。只會有沒人看的儀表板。先想誰收、它告知什麼決定，再決定資料從系統指標、experience sampling，還是問卷來。永遠不要過度押單一指標。只看 PR throughput，或只看 AI 生成的 code 百分比，拿來激勵或武器化，Goodhart's law 立刻出現。教科書的例子是一週要十張 PR，星期一改十次 README 就交差，沒有貢獻價值。找出受眾，再想他們要做的決定，才知道複數的哪些指標重要、指標之間的張力在哪。白皮書、問卷模板可以放進 Google Forms。持續想哪些指標對你的文化最要緊。不要抄近路：不只遙測，也要給遙測提供 context 的質性資料。找他最好走 LinkedIn。
