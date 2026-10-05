# The Tessl Agent: Build Your Software Factory on Autopilot

Guy Podjarny、Simon Maple 宣布 Tessl 的新產品 Tessl agent，來賓是 head of product Dru。他說上節目等了一年半。片長 52 分 52 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=7PKEXIq25H0)

## 一句話

Tessl agent 不是拿來寫 code 的。它是接上 Tessl 工具的介面，也是一步步蓋 software factory 的 agent：幫你把重複的工作收成 skill、放進 CI，再讓一個 loop 看人還在改什麼，把下一次的錯誤補進規則。Dru 的目標是它最後會建議你把事情設成週期任務，讓你少開互動式的 session。成本不要從每一次開 Claude Code 去省；先把會重複的任務圈起來，那才省得動。

## 終端機裡像 Claude Code，但它在推你離開它

[1:54](https://www.youtube.com/watch?v=7PKEXIq25H0&t=114s) 這集也會談 loop engineering，以及 AI 時代 DevTools 的易用，還有在這個時代做產品的學習。Dru 說 Tessl agent 有兩塊。第一，它是 Tessl 所有工具的新介面。Tessl 今天幫你把 skills 擴到整個組織；agent 幫你把那些工具接成更有彈性、更聰明的流程。第二，它是走向 loop engineering、走向蓋 factory 的第一步。它是 factory building agent：從把 skills 擴到組織，走到一塊一塊蓋你的 software factory，用 loop 讓 agent 隨時間更有效。

[3:41](https://www.youtube.com/watch?v=7PKEXIq25H0&t=221s) 你在終端機下 Tessl agent 的指令，感覺像 Claude Code。你可以叫它寫 code，甚至寫一首詩，它會寫，但他們不建議，那也不是 eval 的一部分。現在很難把 agent 釘死，因為什麼都問得動。它要熟悉，是因為你打字，它挑對的 skills 和動作。另外它被設計成對自動化友善。讓 agent 成功、把 factory 蓋起來的工夫，你會想離開互動式 session。那些 session 是過渡：弄清什麼有效、什麼可以委託、要什麼流程。終點是很多工作在背景跑。所以它幾乎是為了讓你停止使用它而做的。做完它會說：有些可以設成週期動作，這個可以做成 CI/CD check。它把你往 loop engineering 推，自動化它自己的工作，也自動化你的 coding agent 的工作。

## 一句話，三種審查，然後每天再看一次

[5:29](https://www.youtube.com/watch?v=7PKEXIq25H0&t=329s) Dru 最興奮、他們自己也在用的，是用 Tessl agent 建立 agent code review 的 harness。和團隊同意什麼時候人必須審的風險政策，再設一個會隨時間把審查變好的週期 loop。你把時間花在審 code、送功能，其餘會自己變好。

[6:18](https://www.youtube.com/watch?v=7PKEXIq25H0&t=378s) 你打 set up agentic code review，或 I want to spend less time reviewing code。它先做有證據的發現。指示它去看 pull request（字幕說 peers）、issue tracker，以及它拿得到的 coding agent session log。Log 可以在本地，若你用 Tessl 一陣子、有上傳，也可以看那些。Guy 說那是潛在的知識。它找 style guide、agent 常見的失敗、團隊在 code review 裡經常留的評論。找到之後先告訴你，你能改掉不對的地方。對 agent 有用的，常常對人也有用。

[7:27](https://www.youtube.com/watch?v=7PKEXIq25H0&t=447s) 然後走幾個具體元件。第一是一個以 skill 為本的 PR code review。和很多一鍵丟上正式環境、然後忘掉的工具不同。Tessl 和 Tessl agent 的原則是：人會想擁有並自己蓋 factory。這會變成軟體工程紀律的一部分，不是買現成的就照單全收。它幫你做出一份對上你 code review 做法的 skill，但 skill 是你的：可以改、可以加、可以分享、可以放到流程的別處。設好之後，每張 PR 都有 agent 審查。

[8:21](https://www.youtube.com/watch?v=7PKEXIq25H0&t=501s) 接著是真正的自動化：PR 一開，帶著那個 skill 的 agent 就跑。Tessl 提供基本零件：在 CI 裡跑 agent、在 GitHub 上留行內評論，也就是每個團隊最後都會自己做的那些方便。它故意是模組的。你已經有、已經喜歡的東西，它設定時可以一起用。它會學你的偏好，也有他們覺得好的預設。可以是 GitHub Action，或他們的一個小 app。用預設零件的話，還有 cloud sandbox，審查的 log 看得到。Agent 和 model 無關：Codex、Claude Code、Gemini，以及開放的 model 和 agent，登入 Tessl 再選要用哪一個，不必每個都設定。Code review 一直在跑，成本很值得最佳化。Guy 強調：這套裡真正在審的不是 Tessl agent。它不是 coding agent。它跑的是你選的 agent，而且以後換得掉。Eval 可以幫你選。Tessl agent 很多時候是在編排別的 coding agent，有時也編排它自己，那會有點 meta。

[11:02](https://www.youtube.com/watch?v=7PKEXIq25H0&t=662s) 下一個是人的閘門。很多公司上了 code review 之後問：現在什麼時候我還得審，什麼時候 agent 審就好。簡單的、他們判定不危險的 PR，讓一次好的審查處理；人把時間放在複雜或較危險的。常見做法是和 security、privacy，以及該在場的人，先同意一份政策，再對每張 PR 做分析：依政策要不要人。Tessl 給的叫 change risk verifier。可以用自己的政策，也有相對直接的開箱版，往寬或往嚴調。寬是盡量讓 code review 做；嚴是大多數 PR 仍要人看。它會設成 CI/CD 裡會跑的 action。

[12:22](https://www.youtube.com/watch?v=7PKEXIq25H0&t=742s) 最後它走過 repo 裡既有的 skills 和 context，做成他們稱為 verifier 的東西。很小、很準、很快的 LM linting 規則。看進來的改動，對上你寫進 skills 的各個面向。例如設計指南規定新元件的無障礙特性該怎麼處理，字幕說 RA properties，在這個脈絡裡比較像 ARIA。Verifier 只看碰到前端的檔，問那些屬性有沒有用對。堆很多個、每個保持聚焦，就可以又小又快又便宜，像 lint 一樣對每個改動跑。抓的是 agent 沒有遵守你寫進 skills 的東西。Guy 說這三種審查是：用 coding agent 審 code 本身；審改動的風險，決定合併、自動合併，或只是給人一個旗標，也就是把政策寫成 code；以及 verifier，審 agent 有沒有遵守你給的 context。Verifier 把他認為真正把 skills、plugins 和生出來的 code 關成迴圈的東西。我叫 agent 做這些，它有沒有真的做，而且要快、要能擴、不能每次問都燒一百萬 tokens。

[14:26](https://www.youtube.com/watch?v=7PKEXIq25H0&t=866s) Tessl agent 總會把你推向 loop。最後設的是每日或每週、看你要哪種，再掃一次所有 PR、CI check、PR 評論和 coding agent session，找還漏過去的新錯誤。你可以從比較嚴開始，大多數 PR 仍由人審。人留下審查意見時，它在看，並做出新的 verifier，或更新 review skill 去抓住那些問題。再用 Tessl 平台做 eval 情境，把這張 PR 多模擬幾次，確認若有那個修正，你就不必再留那則意見。於是每天或每週，你會收到 Tessl agent 的幾張 PR，讓你再 AI native 一點：skills 更穩，審查多抓到一些錯。你不一定覺得自己在投資，但會看到審查更快完成、花的時間更少。某時你可能說，大約四成到五成的 PR（字幕寫成 4,050%）已經沒有人看。從來不必做一場大專案。開始做你本來在做的事，時間一長就能多委託給 agent。

## 兩個陷阱：只出貨，或停下來做幾個月內部工具

[16:04](https://www.youtube.com/watch?v=7PKEXIq25H0&t=964s) Guy 把原則收成：一次設一個 loop。定義會反覆跑的東西，放在會一再跑的自動化裡，然後一遍遍看。因為是 loop，你看得到它變好還是變差，再決定回饋是什麼。Dru 說，若有人在 2026 才開始碰 agent，蓋這些 loop、做 loop engineering，感覺像進階題。依他們自己和客戶、依他們自己蓋 factory 的經驗，這其實是該開始的地方。

[17:00](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1020s) Loop 解的是 agent 開發裡的一個大問題，也是他們做 Tessl agent 的主因之一。讓 factory 成形、讓 agent 更有效、跑得更自主、把工作委託出去，全是計畫外的工作。你無法預期 agent 會在哪失敗、何時失敗、要花多少工夫才不再失敗。多數團隊用傳統方式：叫起一個 agent，開始互動。Agent 犯錯時，要選：硬推、把功能送出去，還是暫停、回滾，做一點科學，讓它以後做得到。人掉進兩類。一類只顧出貨，卡在局部高點，永遠不花時間把 agent 修到更高的自主。另一類有紀律，真的顧自主，但面前是幾個月或更久的落差，速度掉下去，因為工作都轉成內部工具。早一點進 loop 做兩件大事。Loop 跑得很可讀。Agent 怎麼失敗的洞察，不會鎖在本地的 session log 裡；若它跑在 PR review 上，你拿得到，才開始改得了。Loop 負責粗活：開一張 PR，說我看到這個錯，我認為這樣修。你只要說這說得通、接受。投資和時間尺度對得上。你繼續出貨，agent 會在你一邊用的時候自然變好。

[19:02](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1142s) Guy 喜歡測試是從觀察裡長出來的。開發者不愛寫文件和測試，但又得寫。Loop 至少把撰寫測試挪到觀察：人仍要審，有時仍得事先定義測試。用 Tessl 的流程，他們會因為看過 issue，幫那個 plugin 做出一些 eval。你也可以從過程裡抽出一個 eval。要不要自主接受，可以再辯。測試案例來自真實情境。你持續在改，也因為一邊做出 eval 而更有信心。同時沒有要求開發者額外做這件事。最後若不容易，人就不會做。

## 互動時用最好的模型；重複的流程才拿來殺價

[20:50](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1250s) 成本最近熱得多。Guy 說一個月前談成本像是 Luddite，不夠 AGI。現在談反而是跑在前面，還包括 open model。要做看得遠、又對得上人今天在哪的產品，因此很難。Dru 說內外都在問怎麼想成本、怎麼變便宜，又不要不必要地拖慢開發。有 ROI 就願意付，但不想只是因為這樣而付。他會變成破唱片，又拉回 loop engineering。第一條建議是：不要最佳化你的一般成本。若想的是每次有人開 Claude Code，都選對模型，用 Opus 規劃再交給 Haiku，他覺得是一場會輸的遊戲。兩個原因。人不想在開始做事時想這些，總會回到自己的偏好。也很難事先知道工作何時變複雜。你以為是 Haiku，或字幕裡的 GPT-4.1，結果是一個難很多的任務，字幕聽成 A55。日常互動的駕駛，用你舒服的最好模型，讓它有彈性，結果最好。

[23:05](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1385s) 旁邊若你擅長把重複任務找出來、收成流程、從通用路徑上狠心地切下來，做成專用的 skill 或 plugin，例如我們怎麼給 CLI 加新命令、怎麼做 version bumping，那些才是最佳化的好目標。把任務圈起來、設成自動化，本身就是成本最佳化。然後才找得到瓶頸。Code review 每張 PR 都跑，一天 50、60、70 次，又很重要，就得在成本和品質之間拿準。這時用 Tessl 其餘的工具：skill 已經寫下 code review 的流程，做出一批假設的 PR 讓它審，小模型、open model 都跑跑看。也許差 5%，便宜 80%，他願意付那個代價。Tessl agent 就是幫你做這個過程。它看你怎麼跟 agent 工作，看你開的 PR，一點一點把重複任務移進有結構的流程，然後才幫你最佳化。

[24:41](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1481s) Guy 說他們的 eval 一直觀察到可以用 DeepSeek，而不必用 Sonnet 或字幕裡的 GPT-5.5。難的是易用：不能期待人每次都記得生一個 sub-agent 或換模型。隱藏的接線是，設環境時不只有 skill 和 plugin，還用一個叫 Tessl Launch 的指令跑。那比較像環境管理。你對那個專案或 plugin 下了結論之後，切換很容易，走的是漸進的路。沒有 agent 的時候，他們發現往 factory 蓋太難。你沒有的知識每幾週就在變。人做自己的 harness，然後改、再改，再把東西拼在一起。他們做的是把一個專注這件事的垂直 agent、好的工具、以及替你保持最新的知識，放在一個地方。你仍可以帶任何 agent 來，但他們想讓它容易。

[26:23](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1583s) Skills 平台、治理、安全、標準都到位、準備擴 loop 時，團隊立刻會重複做同一批零件：把 issue tracker 接到某種 agent 環境來開工、一整套 agent code review、任務結束要回寫 issue tracker。所以和 agent 一起放出一批積木。Tessl Launch 是可以丟進去的 coding agent 環境，跑在雲上，把 log 收齊，讓你對著那個最佳化 loop 看。預設也好：可以跑超過 60 分鐘，不必一直刷新 GitHub Action 的 token，agent 之間好切。其餘會寫在發布的網誌。你不必停下來做基礎投資，先做一個 Linear app 和一個 GitHub app 讓它們對話，再想 polling。找到一個任務、放進自動化，再找下一個。不會覺得你停下來做了一場大專案，只是慢慢走向自動化。

## 工廠是你的紀律，不是買來的黑盒

[28:09](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1689s) Guy 把 Tessl 愈來愈看成可組合的 factory。跑 agent、用 Tessl 的工具，包括既有的 eval、收 log、分析，以及新放的能力。Agent 把這些服務拉在一起。客戶常問的是蓋 factory 還是買一個。今天說每個人都得走向 factory，還不爭議。有爭議的是你最後停在什麼狀態：是不是被引进一套必須用他們零件的圍牆花園。

[29:26](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1766s) Dru 說自己職涯從開放的 web platform、web standards 開始，對這件事有點 bleeding heart，但他也覺得這是好的生意。Tessl 認為你蓋的 factory 是技術，是團隊擁有的差異，是軟體紀律的一部分：建造並維護這座 factory。Factory 會有重複的元件，但每個人的會因為偏好和你用的服務而稍微不同。Factory 平台會比較像 platform，比較不像 framework，或買來就用的端到端黑盒。最重要的理由是，做軟體產品的總和很大。很難想像一家公司在每一塊都是最好的：設計、mockup、code review、真正生成 code、法務、業務。這些都得隨時間進 factory。買進單一方案，堆疊裡某處你買到的就不是最好的那塊。所以要開放、模組。Tessl 想給好的預設，你不在乎就不必想；你在乎的部分，要能插上自己做的，或最好的那一個。

[31:14](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1874s) 另一個理由是這座 factory 對公司有多關鍵。它就是產出你的產品的東西。完全整合、對方對你有完整定價槓桿，是很敏感的地方。你烤進去的流程很具體，那會變成你的 IP、對競爭者的 moat。若那些讓公司成為公司的工作屬於別人，對方可以說一切都在我們的生態裡，然後把 token 成本轉高。所以 factory 要建在開放、模組、你信任它會評估自己工作的框架上。最佳化 factory 是 factory 的一部分。它說這次真的要用最大的模型、token 要多花 50%，你不想懷疑那種建議。最後，有 factory 跑在上面的軌道，也有驅動軌道的 artifact、知識、context。那些 artifact 應該是你的，才能換供應者。秘密配方是你的。Code review 的例子：應該有一個一般的 harness 提供 code review，但 code review 的大腦不該鎖在那個 harness 裡。你找到更好的工具就搬走。花工夫做出的流程和 style guide 只是一個 skill，check in 在 repo 裡，可以插上任何一個大腦。

[33:13](https://www.youtube.com/watch?v=7PKEXIq25H0&t=1993s) Guy 說這和他們對 context、skills 的想法一致。未來會有很多 agent，因為它們會專精不同的事，你得跟它們共享 context。你也會有多座 factory、不同的 factory line，最佳化開發的不同階段。他們談的是 software factory，但預期會擴成 agentic factory。

## 從 skills 的混亂走到 loop，不是另起爐灶

[34:01](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2041s) Guy 說這聽起來可能像偏離了一直在談的事：擴展 skills、治理、安全、context 是新的 code。他不把它看成轉向，而是擴張。Loop engineering，以及大概需要另一集才談得完的 harness engineering，和 agent 怎麼接。Dru 說產品團隊一直問新功能該不該由他們解。以 Tessl 的使命 agent enablement 來看，這是比較容易的決定：要幫你讓 coding agent、以及未來所有 agent，做真正有產出的工作。這是同一目標的自然延伸：有效地部署、委託，做出真的工作。

[35:22](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2122s) 機械上，它們是同一套解法的不同面，看你從哪開始。多數已經用 agent 的公司開始感到 skill sprawl。成百上千、甚至數以萬計、他說到數十萬個 skills，不知道哪個好、哪裡重複。那些人想從治理那端開始：清點 skills，用 Tessl 做安全審查、找漏洞，再定政策讓這件事不再發生。對 skills 做品質審查，把最佳做法寫下來。這是把一股由下往上的湧現接住，讓它在公司裡擴得有效。非開發的 skills 他們也看到很多採用：sales、marketing、product。那些世界通常還沒準備好聽到 factory 這個詞，更多是把最佳做法和用法包成 skills 和 rules 來分享。他把這看成由下往上的 factory。他愈來愈覺得這全部都是在蓋 factory。差別是你先聚焦元件：找到流程、放進 skills、訓練團隊怎麼跟 agent 工作、怎麼審它們的工作；還是你比較靠前，想先從 factory 開始，自動化的流程跑起來之後，再把要緊的元件拆開，補上治理和標準。另一個方向可以一進來就說：設好 code review，或 agent 不會做我們的前端版面，把它變好，並且再也不要變差。那是從 loop 開始。若團隊第一次接觸 agent，這是好的起點，因為焦點是讓 agent 有效、把工作委託出去，通往價值的路短。也能把變化隔離：一個團隊先開始，先不必擔心治理和安全。證明了、他們自動化了很多、想用自動化的方式和別的團隊銜接時，治理和標準的零件才進來。那時會讓全公司把 skills 丟進 registry。這些東西以 agent 的速度跑。第一週你說才開始用 skills，第二週就有 15,000 個，發生了什麼。所以這些零件得比你平常以為的更早放進來。看你先做哪件：讓 agent 走進整個組織，還是在某幾條 agent 流程上走深、把它們自動化。

[38:43](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2323s) 他們用可組合的方式蓋，控制權在你：context、plugins、流程，現在還有 loop 和他們幫你最佳化的 harness。Agent 也是很多別的事的介面。客戶拿它客製政策、處理清點。網頁介面旁有一個小 agent 聊天，在簡報或分析入口做一串動作，大家已經習慣。命令列上仍覺得是比較大的改變。所以先做本地 CLI，彈性最大，也最有力量。很快會有給不習慣命令列、或只想要簡單 GUI 的人用的介面。

## 用結果說話；loop 還可以包 loop

[41:03](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2463s) Guy 從做產品的一面說易用。Snyk 時期他就談安全的易用：你有多在乎，對上它有多難，在乎得超過難度才會行動。現在的問題不是新的，但大得多：你跟不上。Loop engineering 這個詞頂多幾週。技術上可以用 Codex、Claude、Gemini 跑，但你得知道自己在做什麼，工作量很大。Agent 把那份知識收進來。不必先自備七種基礎，以後可以改、可以換，也可以推他們把工具做更好。他們做了工具、給了使用者、為了容易也給了 skills。人在自己選的 coding agent 裡跑。作為做產品的人，很難看到發生什麼、很難修看過的問題。Agent 走歪，或新的 Anthropic 模型突然比較不聽話，這種情況他們遇過很多次，也很難調。Harness 給他們那個。他愈來愈覺得 AI 時代的產品有四塊：一套工具，也就是以前說的能力；一套 skills，也就是體現出來的專業；一個 harness，提供 UX、把那些捆在一起，這是他們的 harness，他們也幫你做你的；以及某種控制中心，跨時間、跨人協作，那是平台給的。

[43:53](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2633s) Dru 設計新產品時把它收成：易用一直重要，agent 又加了幾層，尤其是開發工具。以前開發工具很著重表達力，模組、可組合的基本零件，做高價值的任務。預設是價值夠大，開發者會學你的新詞彙、自己把它們接起來。Agent 讓所有人變成不知足、以結果為取向的機器。以前說做這件事就依序呼叫這幾個指令，得學一點但值得。現在是我告訴你我要什麼，我期待全部發生。用結果說話，不用你的產品的語言。這一刻比以往都極端。第二，知識的可用性被放大。Agent 把產業變得太快，新概念很多，而且學習不再是一次。持續學習一直都有，但現在是每天或每週。可用性裡很大一塊，是替使用者處理這件事，替他們保持最新。產品公司自己更會用 agent 之後，出功能的速度會超過 GTM，最後超過使用者消化變化的能力。於是又回到要有一個 agent 介面跟上產品的變化，讓使用者盯著穩定的東西：他們的生意、他們想做的事。Agent 不斷把那翻譯成你產品裡最新的做法。Guy 說答案一直是更多 agent。

[46:23](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2783s) Code review 以外，他克制地點幾個。可以問：我能把什麼委託給 agent。它會看哪些重複任務成功率高，建議做成自動化的 CI/CD。某一種元件或功能 agent 一直做不好，就說幫 agent 做我的前端，或讓它們更會設計版面。它會去分析失敗。另一個起步是 make my repo agent ready。會做很多事，其中一項是預設的 repo 維護：每日的架構審查、測試品質檢查。用比較通用的方式立刻把一批工作交給 agent。所以起步可以是：設 code review、修一處 agent 一直搞砸的棘手問題、設 repo 維護，或叫 Tessl agent 幫你把更多工作委託給 AI。每一件變 loopy 之後，可以做週期的架構審查、週期地修 flaky tests。有了一組 loop，還可以在 loop 外包 loop：每日架構審查跑起來之後，再設一個 loop 看它，讓它每天或每週更有效。Loop 套 loop 會顯得壓迫。Tessl agent 是設計來處理這個的。你給任務、給你看到的問題。它主要在想怎麼拆成 loop、建議自動化，讓你同一件事不必做超過一兩次。很多自動化聚焦在 repo 本身，常常落地成排程的 GitHub Action。也可以設更廣的自動化。

[49:16](https://www.youtube.com/watch?v=7PKEXIq25H0&t=2956s) 他們同時推出 Tessl Learn，有一些 agent 的模式和教育。這集專講 agent，但出貨的速度起來之後還有更多。接下來：剛發布，想要回饋。可以預期它在談過的事情上更快、更便宜、更聰明。然後是怎麼從任何起點，無論你在擴 skills 還是在試幾條自動化，更順地走向 factory，少一點力氣、少一點不確定、少一點信心不足，但仍是漸進的路。他們想當那個帶你從今天走到 factory 的工具，而不是叫你把一切扔掉、從綠地做出最前沿的 codebase。Guy 說每個人都落後，沒有人覺得自在，每個人都想更快。開始的方式是到網站下載 Tessl CLI，叫它做事。輸入 tessl、按 enter，像其他 agent 一樣開一個 session。叫它設 code review，或把一些工作委託給 AI。它是 agent，別的也能問。你一邊用，更多東西會進自動化。也可以讓不同的隊友跑，因為它會看他們的 log。若聽到某人卡住，讓那個人試 Tessl agent，是個有趣的實驗。它能看本地 log，也能幫你把 log 放進共用的地方。起步有時就是坐下來，拿過去一個月的 coding agent session，問什麼壞了、什麼花掉很多時間。回饋可以到 AI Native Dev 的 Discord。
