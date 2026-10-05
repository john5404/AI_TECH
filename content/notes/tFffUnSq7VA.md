# Birgitta Böckeler - State of Play: AI Coding Assistants - AI Native DevCon June 2026

Birgitta Böckeler，ThoughtWorks 的 distinguished engineer。AI Native DevCon June 2026，她謝謝 Simon 和 Patrick。片長 42 分 1 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=tFffUnSq7VA)

## 一句話

過去十二個月，模型、coding harness、以及怎麼餵 context，都變得更強，無人看管的 agent 也變得容易。她要同事明天回公司時能講清楚：這不是魔法；session 不在 model 裡；任務要對上能力。人的工作變成經營 guides 和 sensors。自主是不平均的，減監督之前要看出錯的機率、衝擊、能不能發現。她真正擔心的是各種 surrender：認知的、安全的、以及不再教人。

## 模型：數學、沒有 session、注意力有代價

[1:07](https://www.youtube.com/watch?v=tFffUnSq7VA&t=67s) 三年前她得到一份全職，泡在 AI coding，以及軟體團隊怎麼用 AI，幫同事和客戶跟上。她跟團隊和客戶談，寫在同事 Martin Fowler 的網站上。主持人說其中一篇爆紅，在談 specs，當時的對照字幕聽成 Cairo；Tessl 之後又往前走了。這場是兩天之後的收束：過去十二個月的進展、不順的地方、二階後果。讓沒泡在這個領域的同事問「我該知道什麼」時，有答案。

[2:26](https://www.youtube.com/watch?v=tFffUnSq7VA&t=146s) 她從 model 開始，雖然這場會很少談 model，她也覺得周邊的生態和整合比較有趣。過去十二個月最大的事件是去年的 Claude Opus 4.5，讓一陣子沒試 AI coding 的人回來。幾乎每週有新 model，她通常不跟。

[3:29](https://www.youtube.com/watch?v=tFffUnSq7VA&t=209s) 使用者該知道的第一件事：不是魔法。非常有用、非常驚人，但是數學。很多技術同行也容易把它想成更多。第二是 stateless。Model 沒有 session。對話越長，agent 或 harness 每次都把整段歷史送進去。各工具會用 caching 之類的辦法優化，但它們沒有狀態。第三是 context window 和 attention 的關係。視窗變大，代價是 model 能不能同時注意那麼多指示和 context。第四不能靠一堂課學完：哪個任務用哪個 model。Autocomplete 還有人常用。只改幾個檔、指示很清楚，是一種。更大、更複雜、得先做 code research，是另一種。規劃、除錯、設計要多問問題、多推理。不同任務要的推理深度、context 大小、tool calling 都不一樣。她覺得不必先搞懂每個 model 功能的細節，更要回頭看任務：會碰到幾個檔、blast radius、自己還有多少不確定。這和估算裡討論複雜度是同一類事。泡在很強的 model 裡幾個月之後，值得在自己的開發筆電上跑一個小 model，看看現在已經視為理所當然的事，它做得到和做不到什麼。

[7:14](https://www.youtube.com/watch?v=tFffUnSq7VA&t=434s) 速度已經走很遠。她在 Apple M3、48GB RAM 上跑一個 3.6 的模型，用的是 OpenCode，字幕沒把模型全名聽清。速度已經沒有比 Claude Code 裡的 Sonnet 或 Opus 慢很多。Tool calling 仍掙扎。那個模型她在 64GB 的 MacBook 上第一次就崩了，而 tool calling 對工作流程很關鍵，雖然比大約六個月前好。指示一複雜，小模型仍會出錯；她記得大約一年前第一次用 Gemini 寫 code 也這樣。最近大家在談的較小、寫 code 相對能打的是 Gemma，字幕聽成 GEMA。她給一段小說明，自己知道該做什麼、只是懶得打。它做得不錯。她來回修了一下，因為複雜度高，字幕把 cyclomatic 聽成 psychologically。最後得到一支小工具，這件事她的 M3 跑得動。重點仍是知道任務，再對上要用多大的力。

## Harness 不是終端機那層殼

[9:09](https://www.youtube.com/watch?v=tFffUnSq7VA&t=549s) Model 外面現在被叫做 coding harness，口語仍常說 coding agent。它幫我們把 model 用在寫 code。引擎蓋下有 system prompt，以及其他通常看不到的 prompt，除非開源。最近大家瞥見 Claude Code 的；很多真正在用的大產品是閉源。它帶工具：改檔、讀檔、code search 很重要，每個 harness 附的搜尋都不一樣。多數有 sub-agent，字幕一路寫成 subjects，並決定何時生出來、一次給 model 幾個 tool call。有的有 caching。介面有的是終端機，有的在 VS Code 或其他圖形介面。擴充性和 observability 的程度也不同。Pi 現在很紅，因為它把「這個 agent 可以被改」拉到台前。Observability 則是 trace：拿來分析自己怎麼用 agent。她會在 session 裡看它讀哪些檔、寫哪些檔，估計 blast radius，字幕聽成 last radius。她覺得這還能放進 review。

[11:26](https://www.youtube.com/watch?v=tFffUnSq7VA&t=686s) 軟體一直有膨脹循環。新工具，例如 Spring，一開始很輕，幾年後又覺得太大。Claude Code 不到一年，就有人覺得也許太多。她比較 session 一開始，Pi、OpenAI Codex、Claude Code 各自已經塞了什麼。工程師要懂這些功能怎麼區分 agent，才能用得有效。Claude Code 爆紅時，她看到很多人把「終端機介面」和「它為什麼好」混在一起。她喜歡的另一個 harness 是 Cursor，引擎蓋下那一圈一樣強。所以不是因為終端機。

[13:20](https://www.youtube.com/watch?v=tFffUnSq7VA&t=800s) 約十二個月前，調節 context 的主要辦法是 rule 或 instruction 檔：AGENTS.md、CLAUDE.md，寫下典型的坑。現在還在做，但 harness 多了 skills、當時就有的 MCP、sub-agent、extensions、plugins、hooks。很滿、很亂，像這項技術的 storming。她估這場會至少一半的演講在講怎麼用這些功能，也就是給 coding agent 的 context engineering：用 harness 的功能，為自己的 codebase 和情境擴充它。

[14:27](https://www.youtube.com/watch?v=tFffUnSq7VA&t=867s) Harness engineering 這個詞大約二月開始有 traction。她自己也不確定：有人用它說「把這個 coding harness 擴出去」，也有人用它說「把 harness 本身做更好」。詞還很笨，她希望有人（例如這場的 Tessl）想出更好的。她也跟風寫了一篇。Tessl 在會上給的三件套，和她這裡一樣：model、harness、context。她覺得把 harness engineering 想成「給 coding agent 的 context engineering」是說得通的。

## 先餵對的，再讓它自己抓低垂的果實

[15:46](https://www.youtube.com/watch?v=tFffUnSq7VA&t=946s) 越過功能名，她現在看到兩件事。最常見的是把慣例、產品 context、workflow 放進 codebase 的 markdown，或透過 skills 取得。裡面其實混了好幾種：規範性的，像 coding conventions；資訊性的，像產品在做什麼、參考文件；以及指示，例如永遠照這個 workflow、永遠先寫一個會失敗的測試。有的直接在 workspace，有的從別的資料源動態載入。這些對她是 feed forward：預料 agent 會做錯什麼，也預料我們要它做什麼，希望第一次生成就對。它不會總是這樣。

[17:00](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1020s) 所以還要 feedback，最好在人看 code 之前就觸發自我修正，低垂的果實不要留著。現在最常見的是 code review agent。還有 AI 之前就有的工具，例如 static analysis。Agent 通常能看 log，可以先把應用程式跑起來。很多人給它瀏覽器，讓它看改過的 web component。差別是：review agent 是一個 LLM 在判斷另一個 LLM，她叫做 inferential，跑在 GPU。另一類她叫做 computational，跑在 CPU，static analysis 是最好想的例子。Guide 那一側也有 computational。她舉 code mods。Meta 的 Ian 剛提過。OpenRewrite 很擅長版本升級和 framework migration。她記得 Amazon 有個大標題，Java 升級省下大約 400 或 500 個開發者年，她不確定數字；底下大多是把 code mods 交給 AI。也可以換一種對超大 codebase 更有效的 code search。這些都是提高它第一次就做對的機率。

[19:06](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1146s) 人的一部分工作變成駕駛這組 guides 和 sensors。她引 Mitchell Hashimoto 的文章：每次發現 agent 犯錯，就花時間做出一個辦法，讓它再也不犯同一個錯。AI 可以幫忙做那些小辦法。例子：AGENTS.md 寫不要用 `console.log`，要用某個地方的 structured logger。她可以改成一條自訂 lint，訊息指向那個 logger。一週才錯一次的事，與其每次都塞進 context，lint 有效得多。另一個：後端 skill 規定哪一層可以呼叫哪一層。多數語言生態有工具掃 import。可以和 AI 一起寫規則，先抓住模組違規的低垂果實。

[20:44](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1244s) Sensor 放在通往 production 的哪一站，要刻意想。又便宜又快的，她認為應該在 commit 之前就跑。她過去十五年大約 80% 的 commit 直接上 main，多數人不是這樣。所以「整合」對有的人是 commit 前做完，對有的人是 pull request 上再跑一些 inferential sensor，字幕把 pull 聽成 poor。CI 裡已經有很多東西。她不要 inferential sensor 放進 CI：pipeline 的紅燈綠燈不該靠 LLM 的語意解釋。Computational 的可以。另外她聽到 ThoughtWorks 裡很多團隊，以及很多人在寫的，是持續的 drift detection。昨天有一場，字幕把團隊聽成 Team Rhines，在 OpenAI，他們叫它 garbage collection：技術債仍在累積，這裡可以放很多 inferential sensor。她自己的 codebase 有模組審查、dependency 是否新鮮、安全審查，不是每次 pipeline 都跑，大約一週觸發一次，看有沒有新東西。這種偵測需要團隊流程，很像安全漏洞：修不了就壓掉，然後忘記。Agent 可以開 pull request，人還是得處理。Production 上的 sensor 也可以給 AI，尤其是架構的 fitness：scalability、latency。這場也有演講用 observability 修 incident，或把 runtime 變好。

## 自主變容易，極端仍在實驗

[23:44](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1424s) 所以使用者要知道幾項 model 能力，要會判斷自己的任務和複雜度，要懂 harness 功能怎麼不同，不要只看成一個是終端機、一個是 IDE。最大的一塊是怎麼用它們。模型更強、harness 更強、context 更熟，這場競賽繼續：要更多 agent 自主、更少人監督。過去十二個月，無人監督變容易很多。截圖大概是去年六、七月，第一版 Codex。後來多數 coding agent 都有平台，可以選本機或雲端。有人拿來做完整功能，有人只先清 feature toggle 這類小清理。更極端、她覺得仍在實驗的，是 swarm，或暴力派出很多 agent，並讓 agent 自己決定要幾個。Gastown 大約一月出來，很受注意。Cursor 和 Anthropic 有更大的實驗，例如在瀏覽器裡做 C compiler。還有一個比 Gastown 更早、去年就有人玩的，字幕聽成 Cloud flow，她說現在名字不同。

[26:20](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1580s) 這是第四年。從 autocomplete，到 IDE 裡更多 context。Claude 3.5 Sonnet 是她的早期 model 時刻，從那之後她幾乎總是用 Claude Sonnet，因為寫 code 感覺好很多，字幕把 Sonnet 聽成 clouds on it。然後是當時她簡報裡仍叫 agentic coding mode 的東西：Cursor 等可以跑終端機指令。開源早有，沒那麼廣。那只是大約一年半前。接著 Andrej Karpathy 提出 vibe coding，一波人發現這些模式，覺得進步不少。然後是她剛講的 background agent，例如 Codex 讓事情在背景無人監督地跑。Claude Code 大概公開一年，開始得更早一點。Context engineering 大約一年前開始有 traction。然後是 Claude Opus 那一刻、skills。OpenClaw 也許也算一個時刻，雖然不直接是 coding。今年初又有一波人回來看，覺得變了很多。ThoughtWorks 內部的 AI coding 聊天裡，她看得到兩個黃色的活動高峰，中間持平，然後又一個；她不確定，也許一週中位數 250 則。今年初 Gastown、swarm、那些大實驗開始。Harness engineering 現在是 buzzword。她沒有再加新盒子：現在是大家在消化、在用，除了這些詞，沒有新的大鑄詞。

## 成本已經不是預測

[28:58](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1738s) 走很遠，成本也是，而且不只 token。安全：機器和環境裡的 secret 可能漏，生態系也在被攻擊，要比以前更想 dependency management 和 sandboxing。昨天 GitHub 的 Joseph 講了另一面：用 AI 把安全做更好。穩定：DORA 報告裡一個負面發現是穩定變差；這場也有很多演講講用 AI 把穩定做更好。可變更性：code 品質是以後仍容易改、改的風險仍低。她最近在一個還算新、全程由 AI 做出的 codebase 改一件事，碰到 41 個檔，本來不該這樣。那是味道：技術債已經讓變更更貴、更險。問題是 guides、sensors、static analysis 還能把這件事推進多遠。

[30:35](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1835s) Token 最明顯。2024 年初一場 keynote 說，生成 100 行大約 0.12 美元，拿去比開發者薪水。她先把「行數不是價值」擺到一邊。Pragmatic Engineer 最近有幾則引用，有人說有些開發者一天花 500 美元；字幕寫成 are not spending。若比成薪水，一年超過 10 萬美元，在最富的國家也是不錯的薪水。另一種成本是認知負荷和 burnout。它沒有讓生活更輕鬆。有人產出更多，工作時間也更多。Steve 用影集 *What We Do in the Shadows* 裡吸能量、不吸血的吸血鬼做比喻。很多人說連續做三小時就得去睡。

[31:57](https://www.youtube.com/watch?v=tFffUnSq7VA&t=1917s) 然後是 review crisis。Coding throughput 更高。寫得更快，審得更快、測得更快、送得更快嗎。到目前為止，審得更快的答案是不能。大家都在痛。而且不只 coding。同事說一個組織裡，若寫 code 更快，backlog 填得更快嗎。產品經理用 AI 大量吐 prototype 和點子，prototype 那一堆和 code 那一堆對不起來，兩個 silo，沒人知道怎麼收斂到真正要做的東西。她問這是不是走向 flow crisis。她要理解 flow 會看同事 James Lewis 在 YouTube 的演講。其中一場談 congestion collapse。James 和 Gene Kim 賭一箱啤酒，賭這會發生、會變成大話題：不同 silo 都超載，某時一切變慢然後崩。這來自 Theory of Constraints，他也引 product development flow 那本書的原則。會上多個人說，人被看成瓶頸。

## 減監督之前，先過這三關

[34:09](https://www.youtube.com/watch?v=tFffUnSq7VA&t=2049s) 信任、要多少監督、要多少 review，仍是大問題，而且看情況。AI coding agent 的自主已經在，只是分布不均。很多人已經拿它做某些事。她不認為任何情境、任何任務都能用。她現在用風險評估的三塊：probability、impact、detectability。機率是它會不會做錯或做對：我懂不懂工具、context 給了沒有、有沒有給它做對的機會，以及我對需求有多確定、我到底知不知道該做什麼。衝擊是用途有多關鍵：會不會星期六凌晨兩點因為 on-call 被叫醒，還是没那麼要緊、審查可以鬆一點。可發現性是它錯了我會不會注意到。這一切從知道對錯是什麼開始，常常是「合不合適」，也就是你的 feedback loop。然後才決定用哪種 workflow、審多少、讓它無人看管多久。她若自己還沒知道要什麼，不會讓它跑半小時再發現白做。要減少監督，得夠高才坐得上雲霄飛車。團隊和組織的 feedback loop 可以加強；context engineering、harness engineering、重構和現代化可以提高做對的機率。AI 對結構好的 codebase，比對一團亂的好得多。

[36:48](https://www.youtube.com/watch?v=tFffUnSq7VA&t=2208s) 誘惑是從 in the loop，到 on the loop，到 out of the loop。她每天都想不看 code。拉力很多，但成本已經在身上，不是猜測，也不是末日預言：token、風險、cognitive load、cognitive debt。Cognitive debt 是連 codebase 怎麼長的都不懂了。她有時想成 cognitive deferral：審查一直推給別人，那些人也在推遲去處理真正發生了什麼。最近有個新詞 cognitive surrender，字幕把作者聽成 Adios Mani。那篇把 AI 放進 *Thinking, Fast and Slow* 的 system 1 和 system 2：我們把真正在動的思考讓給 AI。Surrender 這個詞卡在她腦子裡。她覺得危險的投降不只認知。

[38:31](https://www.youtube.com/watch?v=tFffUnSq7VA&t=2311s) 她自己也會：這個變更太大，想太多，應該沒問題。自己很快做完，而不是教人。大家都在問 junior 怎麼學，她沒看到那麼多行動。有經驗的人在為自己做更好用 AI 的工具，卻比較少想還沒有這些經驗的人怎麼持續。懶得重試，就用最貴最大的 model。不想解這些問題，等 model 變好、token 再變便宜。做更多、產出更多，報酬沒變，那是不是也是一種投降。沒時間找更好的做法，不一定是個人的錯，周圍的誘因和壓力也算。Sandboxing 太煩，應該不會出事。沒有 AI 就不能在這個 codebase 上工作，那是她說的原本那種 cognitive surrender、cognitive debt。昨天 Hannah 談她留下什麼、丟掉什麼、在試什麼。有影響力的人要問：你是不是在造一個讓人投降的環境，只能趕 PR，沒時間把 context engineering 變好。覺得無力的人，仍可以看自己影響得到的小範圍。完全不用 AI，和完全投降、指望未來的 model，中間有很多選擇。不擅長溝通的人，可以找團隊裡擅長的，把資料和觀察交給他們。需要的技能是過去和現在的工具箱，有些東西要重新發現，加上批判思考、風險評估、某種耐心。生產力不一定等於打字。對領導者，這仍是 horizon two，還不是 horizon one。ROI 也許還不知道。也許得給人時間把環境做好，才能持續地、安全地、快地交付給使用者。字幕裡有一個詞聽成 sovereignty。
