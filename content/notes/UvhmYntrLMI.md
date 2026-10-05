# Patrick Debois Maps the Patterns of AI-Native Dev

Simon Maple、Guy Podjarny 在舊金山的 AI Engineer 抓到 Patrick Debois，他說這是第三次或第四次上節目，隔天要在會上講。片長 47 分 38 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=UvhmYntrLMI)

## 一句話

DevOps 之後，Patrick 覺得 AI 是把工作方式的門拆掉的自動化，而技術棧已經看得出方向：prompt、spec、harness、loop，一層層往上加。大組織慢，不是因為 dark factory 技術上做不到，而是人還沒圍著它組織起來。他用社群訊號做成 Tessl.io/patterns，並把採用的指標從授權數、token 用量，改成你對共享元件貢獻了多少，以及人還要碰 agent 幾次它才做對。

## 第零層是 agent，上面還有團隊、平台和組織

[2:28](https://www.youtube.com/watch?v=UvhmYntrLMI&t=148s) Simon 用 DevOpsDays 當雙關，問 AI 為什麼抓他抓得比 DevOps 以後任何東西都緊。他說自己總是抓一項正在出現的技術：早期的 internet、cloud、協作，然後到 DevOps，字幕接著說 cops 和 mobile。他喜歡新技術混亂、正在成形的那一段，而且不只是技術，還有對組織和工作方式的衝擊。DevOps 的典型敘事就是 socio-technical。他直覺 AI 會把他們工作的方式用自動化拆開。

[4:33](https://www.youtube.com/watch?v=UvhmYntrLMI&t=273s) 隔天的演講：每個新技術都會打到組織。他覺得 AI coding 還不能寬泛地說已經成熟，但方向有了，從 context 到 harness 到 loop，再到別人說的 loop craft、loops of loops。技術細節在變好。組織裡還沒看到的，是這對開發者每天意味什麼。那一層常被談。他要談的是團隊和 team leader。團隊變得更有產出，需求會不會被抽乾？依賴你的 marketing 和 sales，若你一天有 100 個功能，他們怎麼包給終端使用者？團隊要吸收變化，又不能每個星期被搞亂一次。Platform team 也在變。若 loop of loops 收成一個 harness，再變成更像 factory 的東西，那能不能跨團隊重用，還是每個團隊做自己的可重用元件？他們要提供給新的開發者和新團隊什麼？VP of engineering 則要問組織怎麼圍著這個重排。

[6:12](https://www.youtube.com/watch?v=UvhmYntrLMI&t=372s) 他分四層。第零層是 technical agent enablement，他說整場會都在談這個。然後是 team enablement、platform enablement、organization enablement。後面幾層談得不夠，因為第一層變太勤，其他層的敘事被蓋掉。他想把那些故事帶出來。

## 棧在沉降；企業說做不到，常常是還沒準備好

[6:36](https://www.youtube.com/watch?v=UvhmYntrLMI&t=396s) Simon 覺得沒有成熟曲線：每次剛習慣，下一件就來了，prompt、context、harness、loop engineering。Patrick 說有東西在沉降。Prompt 和 specification 會留下。Harness 和 context 說得通。Loop 也會留下。不是每次都換掉，是往正在長的棧上加。新興時期很常見：第一刀是革命，然後在上面蓋。他不知道 code generation 技術上會怎樣；若有成隊的 agent 把整件事做出來，寫 code 這件事有一條路了。接下來會看到的是怎麼證明 agent 做對了，瓶頸從生成移到那裡，或怎麼評估進來的東西的風險。手藝成熟時覺得迷失是正常的，因為注意力每次稍微換一個地方。那是產業在弄清技術怎麼運作。組織的成熟是另一件事。有的人還停在舊的 completion，「這對我沒用」，然後做出壞決定。棧在成熟的過渡期，這就是挑戰。變化的速率驚人，但並非不可預測：會走到 agent loop、agents of agents。產業得把那一層做出來，讓多數人用得上，而不是每個人什麼都自己做。這是一場跟上的比賽。對一些人，跟上就是競爭優勢，幾乎要站在邊緣。另一些人想用新方式，但沒那麼快，風險承受不了，周圍還有更多東西。

[9:59](https://www.youtube.com/watch?v=UvhmYntrLMI&t=599s) 平均而言，大組織不高。把事情在組織裡擴開的摩擦，和一個人做、或五人團隊做，不一樣。有利害關係人，有既有流程。企業慢是正常的。典型圖案是一個團隊先衝，然後變成多個團隊，再去處理摩擦。他拿 DevOps 比：當初說 continuous delivery 對我們沒用，其實是我們還沒準備好，不是技術他們用不了。Dark factory 這個詞像褻瀆，好像一定不會動。他認為技術上會動，但你沒有圍著它把組織排好。

## Patterns 站聽的是社群，不是問卷

[11:19](https://www.youtube.com/watch?v=UvhmYntrLMI&t=679s) 近幾個月他做了 AI patterns，在 Tessl.io/patterns。產業變得愈快，新聞就愈碎，消防水帶一樣，舊的和新的疊在一起。他的工作是聽正在冒出來的東西，也聽它怎麼穩定成一件事。以前是一直滑社群、聽演講、找新想法、把它固化，也許做成一場演講。現在試著做成幾乎自動生成的網站。這和 code 有同一個問題：只讓它生成，會是垃圾。得放進他自己的 context。他說到自己的品味，以及 harness 會規定：不要變成廠商文這類東西，而且要有四個聲音才放得上去。他建的是一條研究鏈，不是那種 deep research，是策展過的。他希望有人能拿來用：我要向 CFO 捍衛 ROI，最新的想法是什麼。想法會迭代，例如先是花費衝破屋頂，然後又變。問卷太慢。現在對一個組織做 loop engineering 的調查，大家會問那是什麼，而產業裡的思考已經往那裡走。他覺得從社群上撿訊號、外推、再整理給所有人，比較有價值。

[13:56](https://www.youtube.com/watch?v=UvhmYntrLMI&t=836s) 實作上他用了 Karpathy Wiki，問了一堆問題，把資料拉進來。索引是手策的。若讓它直接掃社群，名字會飄，每個人的斜角不同。他收成幾組。站上他說總共五個區塊。

[14:27](https://www.youtube.com/watch?v=UvhmYntrLMI&t=867s) 第一塊是 agentic development，比較像扎實的開發者在做的事：從 vibe coding、spec coding，一直到 factory。幾乎就是他們談的那條進程。先是 prompting，然後你有了更好的 spec。這也是產業把技術敘事一層層蓋起來的方式。這裡已經有人。在這裡成功的人，會推動整個組織的採用和使用，然後才變成：我們需要一個平台，撐住每個用 agent 方式做事的人。

[15:11](https://www.youtube.com/watch?v=UvhmYntrLMI&t=911s) 第二塊是 platform。愈往可重用元件走，無論是 context、harness，或 dark factory 那條集中的 pipeline，他相信會由 platform team 或 developer experience team 當中央的一塊來提供。他們已經有一些零件，也許是 MCP proxy。慢慢會多一套新的：給所有團隊的集中 eval、一個 registry。大型組織的採用上，這一區很不成熟。但它常常是解開大組織、幫助擴展的那一塊，尤其是「我們怎麼防 X」這種大問題：要 guardrail、要政策，要在大組織裡分布。產業得在這件事上變好，解法會愈來愈多。

[16:39](https://www.youtube.com/watch?v=UvhmYntrLMI&t=999s) 有人用三種模式解釋：solo、shared、multiplayer。從 solo 到 shared 會解開另一層，然後還有 compounding。大家用同一套元件，就有精煉。一個團隊最佳化了，所有人都有那次最佳化。為那些空間補上 context 也一樣。他同意這也許比較不成熟。另一方面，產品裡的 AI 在元件上大概比 AI coding 超前兩年。他們已經有系統，已經有可觀察的系統，對 platform team 並不陌生。拿來做 coding 的用途大概是獨特的。Proxy 的方式、eval 的方式也不同：對象不是 model，是 coding agent。所以有新的東西在長。幾乎是把已經會的肌肉拿來，稍微換個方式用在新的工作上。

## 驗證會自己變成一區；寫 code 的 IDE 正在變成審的介面

[17:54](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1074s) Quality 和 security 在組織變大時，若做得不好、若人們不知道該做什麼，會更痛。寫 code 的品質和安全也一樣：不知道 guardrail 和工作方式就痛。他猶豫過要不要單獨成區。一方面它屬於 agentic development，在 harness 裡、在 specification 的 nonfunctional 裡。但他發現它有一點自己的生命。Agentic development 的焦點是把 code 趕出來，並讓那份 code 正確，不是驗證它是好 code。Harness 和 loop 改了一點，但 QA、測試、code security 都還在。非功能的東西大概該有自己的類別。若 coding 的瓶頸拿掉、specification 這個輸入也解了，接下來要解的是輸出的驗證。他相信這會走自己的路。較新的趨勢是：harness 做完之後，agent 的工作是說服你它做對了。不是丟一張 PR 叫你看 code，而是開始幫你做那個驗證。

[19:37](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1177s) Evals 裡也有演進。你用 prompt 寫 code，再用 LLM as a judge 來評，會有一大堆輸入和輸出，問它對不對，你還是得看。較成熟的人會建一套驗證，幾乎是一個專門對付所有 eval 的工具，用很快的方式說 yes 或 no。他同意那是在向你證明。品質這一區他也期待有事情發生。還有一種張力：我們還需不需要 IDE。他相信用來寫 code 的 IDE 已經移進 CLI，但現在又冒出來，變成 review 的介面。驗證像是給使用者的 situational awareness，說 yes 或 no。不一定是看 code。可能是更容易驗證 API 或網站的某些功能，有截圖，有 agent 點了什麼的錄影。那比終端機裡一張 checklist 多很多互動。他自己仍在 IDE 裡用 CLI，有時審、有時做別的。眼下的演進是 IDE 裡有一個 orchestrator，然後是 agent 失敗時跳進去。Augment 的 Intent 在做那種失敗時可以介入的事。再來是讓 review 變容易。他說這些都是外推，沒有水晶球。所以 quality 和 security 他先做成自己的一區，並認為那裡會有演進。

## 懷疑的人去寫 harness；要聘的是系統思考者

[22:45](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1365s) 角色怎麼變，他覺得最難預測，因為短期組織的形狀和長期不會一樣。悲觀的那種是「我做不到」或「我們不該用 AI」。後者比較像信念，而且還沒到那裡。他會說這是一種成熟：你可以加更多 rules、context、harness，把它收到某個樣子。懷疑的人，讓他們去寫 context、去建 harness。以前的感覺是它不會動，那能怎樣，別用。現在可以說：你花工夫，就可以讓它更好。有人說不用，是因為它不夠好；他覺得是因為他們還沒在問題上工作。另一個產業問題是：我們喜歡寫 code，我們簽的是寫 code，不是當一個被美化的 prompter 去寫 specification。有一陣子停在：我們都會變成完美的 spec 作者，code 被生成出來。Harness engineering 和 loop engineering 讓他對上了：那需要被做出來的技術元件。沒有只簽 context 的人，可以去弄 harness 和 loop。兩邊的人都顧到了：願意跳進需求的，以及還想做技術的。

[24:32](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1472s) 擴到組織，問題是有多少人會做 harness。也許只是現有人的一個子集，因為它是共享元件。元件一被共享就變得更複雜。這很像當初說 DevOps 會把自己自動化到沒工作；另一方面他們能做到以前想像不到的規模，然後人又被拉回來。他仍覺得撕裂。但現在想做技術、又想確保 agent 做得好的人，有比較好的出口。Review 那一塊他們也可以開始建，組織裡這件事還沒固定。Team lead 的趨勢是：不要只鼓勵一個人把自己的環境改好，要把他們推向共享。你的 skills 能不能重用？能不能當團隊把它改好？像是建一個共享的 library，而不是每人發明自己的。他會以 team leader 推動這種協作。他們會不會更像 product engineer，可以爭。他們有選項，可以做更多產品工程。Lovable 那邊會說 80% 在跟客戶工作，20% 在改進技術。不是每個人都適合。

[26:30](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1590s) 聘人：三年前讓人成為好開發者的條件，今天不再足夠。對好架構、對可靠性該放進設計裡的什麼，洞察仍然有用。但要讓工程團隊用上今天的 AI，並且持續改、持續用滿，需要另一種人：願意把自己丟進 AI，持續挑戰自己變好，試新東西，在覺得有益的地方採用。他今天會找、五年前不會當成關鍵的，是 system thinker，像架構師，在乎的不只是 code。這常常比較像較資深的人，但不表示必須資深，有興趣的 junior 也可以。大概不是那個把 code 寫得很優雅的人。品味要有眼光，但不是主項。你在改進系統。還有協作和改進的技能，不是來做個人技藝的。有人說喜歡語言 X，很好；若只有做這個語言才來，那就不要。你得能換語言。像以前定義的 full stack：前端後端無所謂，你能在不同空間裡走。問題是我們以前是靠職涯裡一步步的疤學會的。DevOps 也一樣，三四十歲、疤夠多、因此能適應的人。這裡也看得到。工作方式太僵，大概不是會被雇的地方。開放、願意發現、願意學。他會探：你怎麼跟上，你對哪些社群有興趣。若只說自己的語言和自己的 stack，就很窄。

## 先找成功的團隊；量的是共享，不是 token

[29:42](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1782s) 組織成熟速度不同。那種人組成的團隊，或隊裡這種人夠多、有動量，會在 bleeding edge，試新東西，學到較好的做法，再教其他團隊，成為別人要追的 ROI。他一直被問怎麼讓組織快起來。有兩部分。有些快不起來。人得走過一點 prompt engineering，才知道需要更多 specification、更多 context、更多 harness。那是學習階段。突然說要去 dark factory，大家會手忙腳亂，做不到。給一份教材不一定加快得了。Team lead 可以說，先做這第一步。大家對 prompting 有了公平的理解，就把 context 放進 repo 裡的 skills。那是一個 forcing function。然後會發現：這樣做我們需要測試，而且我不信任你的 context。他們可以拉著團隊跳到下一件事的節奏，像會解開鎖的自動化。他們控制分享。若他們不給跳躍的訊號，大家會繼續用舊方式：我們在用 completion，我們沒用 rules。學習的節奏有價值，從 solo 到更共享，從簡單做法到更有趣的東西。

[32:58](https://www.youtube.com/watch?v=UvhmYntrLMI&t=1978s) Simon 把團隊分成不肯變的、急著實驗的，以及大約八成願意變、但要看到價值、被好例子帶著走的。組織的力氣有限，長期的採用該壓在哪裡。Patrick 說，不管是現在這樣、是 agile，或任何改變，開頭都不要把時間花在負面的人身上。找到成功故事。那個做不成，其餘也不會成。他們會展示可以變成什麼、好處是什麼，吸引別人來試、來問你做了什麼。時間花在反對者身上，得不到同樣的東西。等採用已經多了，再問你為什麼還在抗拒：資訊給過了，組織裡也看過一部分，是什麼擋住你。原因會有很多種。也不要過度轉在一個團隊衝到盡頭、其他人都沒有。是 leveling up：他們當矛頭，然後把別人帶到旅程的某些段落，再讓那些人朝那個團隊開過去。快的團隊盡量快。Enablement 是給那些會分享的團隊：用領先團隊的做法教育，並讓做法適配你的團隊。這是典型的轉型：hackathon、lunch and learn、分享成功、慶祝做得最好的團隊。DevOps、cloud、developer security 都是同一種。

[35:59](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2159s) 組織 enablement 裡常發生的是：工具發給所有人，有些人撿起來，一路做到底，建自己的未來，變得很主動。一開始量採用，是不是每個人都在用一個工具。然後改看誰把 token 用得很兇。那是 usage，一種替代指標。至少很熱忱，但可能很沒效率。若他現在只放一個指標，會是這些人對共享元件貢獻了多少、有沒有在修系統，而不是用得更多、或只是擁有一個工具。一次 context 的改進會打到其他團隊。從「我個人很有效」到「這個 skill 幫整個組織」，是另一種技能。那個指標是：要讓 agent 做對，人還得碰幾次。這比數授權有用。放進實務會看到分享真的幫這個數字：為一個人修好，所有團隊的數字都上去。這是在推向更自主的 factory。對這個指標有貢獻的人，才是在這段旅程上幫到你的人，不是 token billionaires。

## 學習的迴圈是護城河；預算是用來逼你最佳化的

[38:21](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2301s) Simon 覺得這和他們在做的 Tessl agent 對得上。不願意走向 agent、因為覺得還不夠好的人，就讓他們在 skills 上做很多工作，那才是把價值挖出來的方式。Tessl agent 讓那些改動發生，不只有你的引導，也根據專案裡歷史上的 log 和 pull request。它不是開箱就給你一個 software factory，而是一條路，讓你一步步靠近。Context 和 skills 要持續最佳化，就得把最佳化的自動化放進每天的工作。

[40:09](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2409s) 他先拿 DevOps 平行。一開始是部署變快，並確認它真的在發生。然後監控變成 observability，那是自動化的回饋通道：我們該改進什麼。Agent 也一樣。Skills optimizer 可以放進一個 loop，讓它變好。Harness 工具可以偵測你一遍遍在做、若有更好的 context、或變成 script、變成確定性的東西就會受益的事。這些回饋迴圈幫你擴展，因為你本人能貢獻給系統的有限。若它幾乎是正回饋，還會提示你該證明什麼，就很有力。Loop 的危險是它也可以是負的。一條 rule 被接受之後可能走錯。所以 harness 和你放進去的任何東西都要測試、要回歸測試。不是改完就祈禱。他常說：若你有 continuous delivery、什麼都自動化了，現在又有另一塊被 AI 自動化，知識複利的地方是 continuous learning。那好像正在變成公司的 moat。你能多快學習、多快適應一個新想法、多快做完，就算那意味著把整個 codebase 重寫。沒有幫你改進的回饋迴圈，這件事做不到。

[42:03](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2523s) 成本也在 scaling the org 這一區。去年大家很自由，盡量實驗、盡量用，弄清什麼有效。今年預算緊一些，開始想 ROI 和怎麼管成本。他當過 VP，得看預算。AI 出來的第一年沒有 AI 預算，錢要從哪裡找。廠商調價或改計價，是他們沒有預備的。本能反應是全員停、把預算砍到限度裡。問題是這樣就走不了學習的旅程。人被限制，會因為 token 不夠而繼續手動做。另一些人開始指定更多 use case：不是 agent 變好了，而是它對這件事到底有沒有用。他看成本的方式是：要有一份給人學習的預算，也要有一份有用的預算。預算的約束應該逼你去最佳化那個 loop。很多人在盲燒 token，用最大的模型，同一件事做了一遍又一遍，其實一次 context 或 harness 的改變就能省下很多。組織不夠成熟時，會覺得自己用過頭了。Cloud 的平行是：大家都上 cloud，每個系統都是一台 VM，然後發現更貴，才學會放到同一個 instance。現在就在那個階段。VP 把整份預算關掉、停止使用，很危險，組織就沒有那件事。對的反應是：我們在哪裡花過頭。那需要 coding agent 的 FinOps 可觀察性。先做 telemetry，再說這些習慣、這件事不要這樣用，讓一個團隊去做最佳化，而不是只把預算關上。

[45:07](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2707s) Simon 問，VP 會不會把錢優先給實驗、表現最好的團隊，幾乎放任；其他人則不能花得荒唐，因為從他們身上學到的比較少。實驗的錢即使沒做成，也是在學這條路不要走，錢花得值。Patrick 說和 CFO 的拉扯是 ROI 在哪，有回報他們願意花。他不一定把預算給最好的團隊，而是把最好的團隊放到最重要的業務專案上，把回報拿回來。挑戰是他們不總是那些團隊，因為最大的 use case 也可能是最有風險的。細節很多。

[46:23](https://www.youtube.com/watch?v=UvhmYntrLMI&t=2783s) 站不是靜態的，他還計畫往上加。缺了什麼、或有有趣的故事，他想聽。片頭也預告倫敦的 AI Native DevCon 剛結束兩天，11 月 3 日和 4 日在紐約再辦，限時的 Super Blind Bird 票是 100 美元，主舞台有直播。
