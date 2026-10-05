# Ryan Lopopolo: OpenAI's Framework for Shipping Code at 70 PRs/Week

Ryan Lopopolo，OpenAI 的 member of technical staff，在倫敦 AI Native DevCon 2026 現場接受 Simon Maple 訪問。當天稍晚他還要上台講 harness engineering。片長 55 分 28 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 slop 的清理迴圈寫成 anti-SLAPP ification，下文記成 anti-slopification。

- 原片：[YouTube](https://www.youtube.com/watch?v=MFQIKbr1IEo)

## 一句話

Coding agents 和很聰明的 models 已經能生出大量 code。Harness engineering 是把「什麼叫可接受」寫下來，在對的時間送到 agent 面前，再用 tests、lints、reviewer agents 和很長的重構迴圈，讓它向團隊證明這份 code 可以 merge。你真正有的槓桿只有兩根：給什麼 context、給什麼 tools。他在 reasoning models 出來之前就強迫自己不寫 code。團隊後來從每週大約 3.5 張 PR，走到 5.5 時的 70 張。人看的是介面和規格，實作可以在腳下換成另一種做法，工作流不必中斷。

## 給人的錯誤訊息，和給 agent 的不一樣

[1:46](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=106s) 他說 harness engineering 是他年初幫忙把話語定下來的那一塊：怎麼把 agents 設成能在 codebase 裡做高度複雜、自主的軟體工程，信心高，若做得到就幾乎 headless。要有很多 context 管理，讓 agents 從自己的錯誤學習、產出高品質 code，並且很久不用人介入。可接受、可信任、能拿來建業務系統的 code，中間有一堆小決定。Agent 要知道那些決定，就得寫下來。非功能需求要在對的時間浮出來。Context 放進 repository、agents 看得到的地方，在對的時間送上去，讓產出的 code 跟著「對我們來說什麼是高品質」那條線。Reviewer agents、tests、lints、大的重構迴圈，都是讓它把迴圈關上，向他和團隊證明可以 merge。

[4:25](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=265s) 跟 agents 互動，他認為只有兩根槓桿：給哪個 context、給哪些 tools。Harness engineering 是兩者合在一起，目標是 context 正確，agent 才能用推理生出好 code。他覺得獨特的一點是，他們用 tool calls 去 prompt inject，管理 agent 的 context window。給人的測試和 lint，和他給 agent 的訊息，結構很不一樣。給人會是一份完整的失敗清單，讓人在 log 裡找。Agents 叫工具的方式不同，訊息要壓縮，但語意要在。與其給一個機械的 eslint 失敗，他可以給一段散文：你在這個檔、用這種方式搞砸了，請打開，照檔案 X、Y、Z 裡的 run book 去修。我們看過你犯這個錯，也知道可以信任你會做對。

[5:57](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=357s) Simon 說他建過 Stripe 的效率工程團隊，也在 Brex 帶過 350 個工程師的 developer productivity。Ryan 說那有幫助。他習慣透過別人做事。350 人的組織，他不可能把手伸進每一張 PR，也不能直接改底層系統。他得在後面掌舵，讓對的事預設就會發生，組織才有高信任。這正是把 coding agents 從 pair programming 助手，推進到大規模平行所需要的。他說自己可以開著 15 個視窗，得在某個程度上放手。這種系統思考是他職涯練出來的。

## 不準人寫 code，是因為他厭倦當那個工具

[7:30](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=450s) 他自己和團隊加了一條約束：no human written code。當時是很激進的想法。他開始用這種放手的方式，甚至在像樣的 reasoning models 之前。GPT-5 是 2025 年 8 月出的，他 6 月就開始這樣做。那是 o3 時代，Codex Mini 剛出，Codex CLI 的最初版本。Models 能力差很多，放手很痛。他不得不把自己塞進去，當一個很粗的工具，模型卡住或需要做事時就委派給他。一開始它唯一能做的，是請 Ryan 幫它做。他厭倦了一直被問同一件事。最早是用 cargo 裝依賴，當時 Codex 做不到可靠。他在終端機打指令，把依賴交給 agent，然後把那一步自動化。這讓他開始很仔細看自己的時間花在哪，再做一個 tool call 把那段時間拿掉，然後找下一個可以變粗的工具。從零開始，他說你會很身體地經驗到 agent 的失敗。看它在寫 code 時犯的錯，才能建立信心，因為你也看得到它真正擅長的地方，然後把一週的做法改成靠向 Codex 擅長的事。它很會跟著指示，很會寫測試並把它們叫起來。把工程流程收成鋪好的路，信心才起來。Simon 說這幾乎和多數開發者相反。

[10:25](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=625s) 團隊變大時他很幸運，都是公司的新人，被丟進這個環境，只能把它當成現在的做法。通常大約兩週才跟上，早期有成長的痛，也有不少自己吃自己的狗食。他們在做的產品也有幫助：一個資料分析 agent，裡面用 Codex 寫 SQL、呼叫 Databricks。用來寫 code 的技術，正是這個 agent 要有效所需要的，形成一個循環。兩週的上手，一開始在教人不要產出 slop 上很痛。用這些工具維持高速度，很大一部分就是不准 slop 進 codebase。等想通之後，第五、第六、第七個新人，在那兩週裡，速度和 PR 吞吐量上升 5%、10%、15%。這不是常見的路。原因是 codebase 裡累積了更多 context、更多能力，每個人都把 Codex 當進 codebase 的唯一入口，預設就拿到所有人最好的部分，不必花一到三個月吸收團隊的做法。新人很快把自己的判斷和 context 補進去，於是大家很快都更有效。Simon 說這等於已經透過 agent 在做 onboarding。

[12:43](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=763s) Simon 用剎車來比：要快，得有剎車。快是 Codex 和 agents 比人手寫更快。剎車是測試和 review。他接著問零人工 review 會不會更令人擔心。Ryan 說 merge 之後才 review、甚至有時不 review，並不新。他職涯開始於 2010 年代早期，那是寫軟體的正常一部分：團隊高信任、偏向行動和吞吐量，只看有代表性的一份 code，其餘靠很多同步溝通，讓大家對系統有同一個心智模型。Agents 讓這件事回來，而且很有意思。若進 codebase 的入口永遠是 agent，團隊裡不是每個工程師都需要完整的心智模型，只要能信任其他人在讓 Codex 擁有那個專業。系統裡不是完全沒有 review。有些情況仍要兩個人、傳統的、merge 前的 review。大多集中在很複雜的計畫，以及要花一週的階段里程碑。那些計畫就是要給 agents 的 prompt。你靠一份文字驅動實作，裡面的字準不準、任務是說不足還是說得過滿，都很重要。說不好，出來的就是垃圾。所以大量的人的 review 放在這裡。Simon 說這和平常的 code review 不同，平常會吵細節、命名、幾乎像 style guide。現在看的是更高層、更有意義的決定，人也更抽離 code，有一部分必須信任，鑽太深進實作幾乎是浪費，因為那該被抽象掉，靠測試確認它成功。Ryan 把它比成他在 Brex 當 developer productivity 的 group tech lead。他的手不在每一段 Terraform 裡。他在乎的是高層原則：基礎設施要能重現、要佈建得快、要有模組解決常見的開發流程。底層模組怎麼結構、`for each` 用得像不像慣例，他不太在乎，只要局部連貫、解決他希望解決的業務問題。那個結構決定甚至可以隨時間改，不該時時都黏在上面。

## 星期五收垃圾，讓錯誤進 main 才能學

[18:05](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1085s) 信任分兩段。第一段是信不信它生得出 code。魔法時刻是在做今天 Codex app 很早的一個版本。跟隊友說真希望這裡有語音輸入，然後給一個 prompt，半小時後在 app 裡看到。信心變成：我的產能是把 prompts 排進這台機器，看想法活過來。工程師的角色是想辦法餵機器、排工作。第二段是這份 code 值不值得信任、品質高不高。這是被必要逼出來的。第三個工程師進來之後，PR 吞吐量大幅上升，同時跟不上 review，也擋不住 slop。他們開始踩剎車。每週五做 garbage collection。這種工作方式裡有很長的同步站會，為的是把心智模型社會化。一週裡蒐集不太喜歡的事。他們偏向吞吐量、偏向 merge，但仍要守住品質線。每個星期五是除掉那些 slop，也找出以後能系統性除掉的辦法。同一種回饋不想給兩次，就像你希望新工程師把「什麼叫做好」內化。那疊成程式化的護欄，然後是很長的外圈：自動化的 CI 找 slop、認出 slop、編一份什麼叫好 code 的 golden principles、在 codebase 裡找偏離、提出 PRs。那時他們看見 agents 寫得出他們期望的 code，只是要有對的迴圈，讓它自己關上回饋。

[20:56](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1256s) Simon 問那是用 context 還是 skills。Ryan 說在 skills 之前。以這場的時間點，大約八個月前。他們用了一個很便宜的 hack：一張 GitHub issue，工程師和 agents 在上面留評論，談好的軟體開發原則。怎麼正確做 React snapshot test、什麼叫可靠的網路 code、怎麼想一個 lint 的結構。最後是一張有 100 到 150 則評論的 issue。那是種子。Agent 去爬 codebase，把違規排優先順序，提出 PRs。有一個 on call，工作是監督所有 agent 產出的、所有 headless 的東西，因為他們還不完全信任，需要眼睛才建立得了信心。人用讚或倒讚、merge 或不 merge、留下 review。下一次 anti-slopification 迴圈轉起來，會看它產生過的所有 PR，吃進人的回饋，對上上次跑的 session logs。我犯了哪些錯、漏了哪些優先順序、產出了沒對齊的 code、為什麼。想出以後怎麼不做。寫成 markdown，存成那次 GitHub run 的 artifact。下次跑就多了從真實人的回饋學來的 context。

[23:07](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1387s) 是事後稽核再提 PR，還是寫 code 的當下就放進 agent？他說是混合。這些非同步迴圈是有效的一大塊。早期的 Codex Security，經由 Aardvark，也是同樣做法：code 進了 main 之後才做安全 review，也許發現漏洞，產出 patch，提 PR，人 review，然後 merge。他喜歡這個流，因為錯誤真的可以進 main，於是任何時候能做出修正，既要修掉，重複的模式還要更早拉進 pipeline。用 agents、迴圈和蒸餾找出來的，就是要往前拉的東西。

[24:16](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1456s) 這個專案沒有 continuous deployment。他們在做原生 app，手動切 release branch，做 smoke testing。Smoke testing 一開始全是人，看時間花在哪，再試著讓 agents 做一部分。他認為在這個世界，發佈流程仍要有一定程度的人監督。但有些錯誤的後果低，可以犯。他希望變資深的工程師從自己的錯誤學，也希望看見 agents 犯的錯，監督者才知道怎麼讓它們學。Code 變便宜之後，他認為至少在跟 agents 工作時，可以把 DevOps 的 shift left 反過來。最便宜的事是改 prompt：把一條 golden principle 放進那張 GitHub issue，或跟隊友講清楚的一個 prompt。那是修掉所產 code 最便宜的辦法。若錯誤更有系統，再往左拉：加文件，或做一個 review agent 用那些文件評每一張 PR，或更早放確定性的測試。他想從最便宜、又能把不良行為搖出來的地方開始。這些是魔法般的推理者，多數時候用很少的力氣就做得不錯。

## 先做出來，再把規格蒸出來

[27:06](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1626s) Simon 覺得會留下來的比較不是 code，而是 prompt、context 和功能需求。他帶到 Symphony，說那是一個 ghost library，因為它是 spec，講的是 specs 和 context，不是實作。傳統的 spec driven development 是先有 spec，code 做出來再把 spec 修得更具體，把藏著的決定和含糊逼出來。Ryan 說對 Symphony、對他們在產的那些清單、對關鍵使用者旅程、產品功能、點擊流程和畫面的文件，他發現先產 code 容易得多。Code 當一個 straw man，團隊對著它修，再把 spec 蒸出來。被接受為好的產物，不管是 code、試算表還是 Google doc，在「做了哪些決定」上資訊很密。他們交出去的 Symphony 很像一份 spec。開始時是 monorepo 裡用 TypeScript vibe 出來的一個實作。覺得它好、而且解了想解的問題之後，才做成一份 spec 跟世界分享。

[29:14](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1754s) 過程是三階段的 pipeline。把當時的 Symphony 交給 Codex，請它產出一份 markdown spec，要能重現這個系統。拿到 spec 之後，給一個碰不到原始實作的新 agent，請它照 spec 實作。它說做完之後，把那個系統、那份 spec 和原始實作交給第三個 agent 當 judge：我們在複製原本的 Symphony，這是給 agent 的 spec，這是它們做出來的。衍生出來的東西和原系統哪裡沒對齊，請改 spec，讓下一次更好。非常花 token。Simon 說他在 token 工廠工作，大概有折扣。最後是一份修得很細的 spec，能可靠地產出寫好的那個系統，同時留給這個 ghost library 的使用者含糊的空間，去適配自己的業務、repository、toolchain 和 issue tracker。真正要緊的業務邏輯寫得很緊、很細，其餘留給人按自己的看法演進。

[30:55](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1855s) Simon 說這很像純粹的原型：快速做、學到想要的樣子、UI 一改就弄斷好幾條流程。差別是開發便宜，所以可以扔掉，不必受誘惑去沿用，而是把學到的和功能需求蒸進 spec。迭代是為了補 spec 的缺口。Ryan 說這過程不新。他跟 data science 合作時，對方先在 Jupyter notebook 裡把模型湊出來證明想法，有信心之後才交給工程，放進 MapReduce pipeline，按規模運作。Figma 裡快速做設計再交去 production，是同一種 context。因為產 code 便宜，現在可以在 production 系統裡做這件事。他們的 Electron app 有一個 agent 可以打開的視窗，給它正在出貨的原生繪製畫布，以及完整的 design system 和 component library。它能直接在要部署的表面上做新畫面的原型，產出截圖給設計師。願景和現實是否一致，迴圈變得非常緊。

## 從每週 3.5 張 PR 到 70 張，以及腳下換掉的那條線

[33:19](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=1999s) 社群這一個月很多人從 Claude 這類 agents 轉到 Codex，說更有生產力、更準。Codex 的產品速度非常快。他們剛慶祝每週 500 萬活躍使用者。字幕裡的 Teboe 剛做了每週重置，叫人把額度燒完。Codex 本身的開發和研究團隊之間有一個很緊的循環，GPT-5 系列每一次修訂，能力都跳躍。他說從 5.2 到 5.3 是大抬升。背景的 tool calling、平行的 tool calling，讓 Codex 能一直做更多工作，在更複雜的改動上更快有進展。5.4 把一般的 GPT-5 model 和 Codex model 合在一起，於是不只是一個很強的產 code agent，也是一般意義上很聰明、文筆好的一個。他開始用 Codex 做軟體開發迴圈裡產 code 以外的部分。當天稍晚要上台的投影片，百分之百是 Codex 寫的，用的是 Google Sheets 裡的 app connectors。去年他想像不到。5.5 裡的 computer use、嵌在 app 裡的瀏覽器，讓關上迴圈容易很多。5.1、5.2 時代他們得塞進去的很多湊合，不再需要，因為工具更粗、更有力。Harness、他們部署的 app、研究環境、以及讓 model 會用這些東西，之間有一個良性循環，能力一直在往前。他喜歡 Codex 會把工作做完，不會給他很多廢話。可以把它當另一個隊友。他不會同時盯著七個隊友，做錯就敲他們的頭。他給任務，站會時偶爾看一下，信任會拿到一張或幾張把工作做完的 PR。他對 Codex 的自主和完成，有同樣的信任。

[36:52](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2212s) 移動指針的是 agent 的更新還是 model 的更新？兩者都有，但新的 model 釋出對他最興奮。增加能力最有力的槓桿，是繼續訓練 model，而且這件事隨時間愈來愈快。五系列從 5.2 起的每一次修訂，他覺得 5.2 是這些 coding agents 的奇點時代，PR 吞吐量一次又一次上升。5.2 時代開始時，他的團隊大約每個工程師每週 3.5 張 PR。現在用 5.5，是 70。超過線性。人和能力都有分。Model 這樣跳的時候，enablement 要花的力氣變少，harness engineering 變容易。技術相同，但為了把 agent 接到外面世界而做粗工具的需要，愈來愈少。

[38:38](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2318s) Computer use 之前，要讓 Codex 驅動他們的 Electron app，得在 Docker 裡開一個有圖形的 Ubuntu，加虛擬顯示和 X server，工程師在 Mac 上裝 XQuartz，代理到那個 headless 主機，再把 FFmpeg 接到這套很醜的裝置上，錄 agent 改了 app 之後的影片。App 裡一個開關打開 computer use，整套就過時了。Simon 說自己在業界 25 年，這像人們以前真的在寫 bytecode。Ryan 說他不必再寫 Tcl 來測 UI。

[39:44](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2384s) OpenAI Frontier 是他們的企業 agent 平台。從怎麼用 API、Agents SDK、Codex harness 來建 agents，到怎麼觀察和治理在企業裡跑的 agents。他覺得很酷的是各種 harness 都在對齊 Codex，於是他們在建的產品和研究之間有一個單一、槓桿很高的介面。Model 上的 post-training 改進，會累積到每一個產品。現在有很清楚的介面，用 plugins 把新能力注進 Codex。那些是 skills 和 scripts，仍是他一直在講的 context 和 tools。字幕寫成 IO, CTL 的那種可擴充。他說作為 agent 和產品的建造者，能給 Codex 的最大槓桿，是愈來愈粗、接到真正業務問題的工具，以及替它做 context 的整形和管理。他和團隊在 Frontier 上做的另一塊，是組織的 context 管理：企業裡實際在做什麼工作、資料倉儲的 data ontology 是什麼、那怎麼被用來回答指標問題。他們在實驗：也許企業裡每個 agent 都有一個 sidecar，持續替它管理 context。想法是所有 agents 都是 coding agents，所以該給它們原生的東西，小的 git repositories，可以 grep、可以搜。用來寫 code 的技術，會很自然地翻譯成在企業裡建 agents。這些都來自用那個基礎的 Codex harness。

[43:11](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2591s) Simon 問，今天、以及也許幾年後，code 更該讓 agents 讀得懂，還是讓人讀得懂。他自己也說幾年後的問題很難問，這週都想不遠。Ryan 說若只能挑一樣對他來說讀得懂，會是系統的參考文件：介面，以及把它們畫成 mermaid 的實體關係圖、系統圖和序列圖。那是今天。他仍會往下看 agent 產出的 diffs，像在看機器碼，但隨著信任增加，他愈來愈少這樣做，也愈來愈能在更複雜的任務上忽略正在產出的 code。不是全部，是愈來愈多。他和團隊提供最大價值的地方，是定義介面、系統有哪些元件、每個元件該怎麼結構、code 彼此怎麼相關。把系統依賴接起來，用像 Scala cake pattern 那樣的依賴接線，他覺得很值得注意，因為那表示他能在自己頭裡、也在參考文件裡把系統圖的線畫出來。那些東西的具體實作，坦白說他也許甚至不知道是哪一種語言。

[44:50](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2690s) 開場那段就是這個故事。他們要 Codex 連上 Electron app，用 Chrome DevTools protocol。開始是 MCP。後來他看了一眼 code，完全不一樣了。Codex 仍用 Chrome DevTools protocol 連 Electron app，但轉成一個本地的 TypeScript daemon，提供一個小的 CLI，不再是 MCP。因為他們發現真正需要的 tool calls 只有兩到三個，這樣更省 context、更快。這發生在他腳下，他不知道。他的工作流沒有被打斷。同一條依賴邊、同一個實體關係還在，他幾乎不必知道怎麼實作。Simon 問這是酷還是擔心。他說震驚，也覺得很好。他以非常真實的方式活在那個高信任關係裡。團隊裡有人想像世界可以更好，去做了，而且沒有打擾任何一個人。因為寫 code 的是 agents，它們對工具或結構沒有意見，只要給的東西能動、允許它們做事。Simon 覺得人會是適應這種信任最慢的。Ryan 說這是持續的挑戰：他的注意力、他同時盯住這些線的能力。

[46:38](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2798s) 他今天仍想看 code 的情況，可以畫成兩軸：含糊低或高，複雜低或高。又高又高的那一格，大致是兩種。一種是從零開始做全新的東西，介面的形狀、它住在哪、體驗是什麼，他還不知道。一種是他想做的最難的重構，得打破或重定義介面，也許得往回刪 code，但他不知道想要的終點形狀。這些是他最注意的地方，也是他想待的地方，因為那是往未來看六個月、替團隊清路。Code 在這裡便宜。他發現自己的做法和一年前不同：願意 vibe 出一張 5 萬行 diff 的 PR 然後扔掉，只為了學 agent 可能在哪裡失敗、在把他喜歡的介面放進去時會在哪裡掙扎。通常他會把那些 PR 推上去，立刻丟掉，再從裡面趕出 15 張 PR，做準備或搭台，為真正要切過去的那一下。

## 十億 tokens，以及團隊不該再練產 code

[48:26](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=2906s) 他先前說過，不用到一天十億 tokens，幾乎是疏忽。Simon 問他想搖誰的梯子。他說能從 models 抽出的智慧，在某種程度上和 token 消耗成線性。當時很有爭議，現在愈來愈真。這最終是 test time compute 存在的原因。要讓 models 更聰明、在世界上有更豐富的副作用，就要把工作流移到高 token 消耗。要到一天十億，思考必須比跟 model pair programming 更大：要平行，要有這些非同步迴圈，要建的 agents 能對組織和團隊產生副作用，不只對你自己。他們得發明一批模式：從 repository context 生出來的自動化，團隊裡每個人都能用，而不是單人模式。不是每個人今天說要消耗十億 tokens，然後魔法就發生。要做工，才能讓它安全、輸出對齊、tokens 燒在有生產力的地方、進得了 main、改善交給使用者的體驗。以現在的產業和技術，他們還沒有一套耐久、可擴、鎖死的模式。他這樣挑釁，是要逼人去弄清楚什麼會奏效。感覺像剛發明 CI/CD 的概念，大家在搶著弄懂那是什麼。十五年後它才變得相當標準、變成基本門檻。他認為 agents 和產軟體現在需要的就是這件事。

[51:09](https://www.youtube.com/watch?v=MFQIKbr1IEo&t=3069s) 若推到邏輯終點，每個專案都有 harness engineering，每個開發者每天用十億 tokens。他說 OpenAI 會很高興。那樣的工程團隊長什麼樣。他發現團隊在觀點、經驗和專長上多元，非常有價值。他自己偏向後端和基礎設施。團隊只有他的時候，他產出很糟的 React。有些元件長到 6000 行，一堆很差的渲染，`useEffect` hooks 裡有四個重疊的 closures，很難推理。把人帶進來說 Ryan 這是垃圾，真的有幫助。他覺得全端團隊非常有用。另一件事是，軟體工程師不必再把產 code 當成要培養的技能。他想看到工程師在職涯裡養的，是系統思考：怎樣把團隊設成會成功，能往未來看多遠來解決問題、提高產 code 和交給客戶的吞吐量。他的時間大概 30、30、30：最難的重構和從 0 到 1 的產品構想；跟客戶談；以及排優先順序、排程、配置工作。以前更接近 50% 或 70% 的時間在產 code。他能退後一步，做這些跨職能、高優先的工作，把一隊 agents 的產 code 解開。Simon 說最重要的是跟使用者談、把需求映回 app 的功能需求，而不是把後端的設計想成絕對完美。Ryan 同意。其中一部分是決定不要建什麼。他看到人們用 agents 時很常掉進這個陷阱，特別是因為寫 code 便宜，什麼都能建。仍要停下來問該不該建。消費的大多仍是人。也會有中間層讓別的 agents 和 apps 來消費，但人在用的時候，開發的速度也得是他們消費得舒服的速度。
