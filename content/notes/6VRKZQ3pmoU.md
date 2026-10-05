# James Moss - Using skills to pay the bills: graduating from solo hacks to a team workflow - DevCon26

James Moss 在 AI Native DevCon。Tessl 的同事 Macy 介紹他：member of technical staff，做 registry，也做新創裡的其他事。片長 32 分 39 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Snyk 聽成 sneak、snake、Sneaker，把 CLAUDE.md 聽成 Claude, MD，把 sprawl 有一處寫成 Sproule。下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=6VRKZQ3pmoU)

## 一句話

個人 vibe coding 用 skills 是一回事，企業裡是另一回事。門檻低、效力大，所以組織裡會爆出一堆 skills，卻沒有版本、沒有可見度、沒有共同的來源。失敗的樣子是重工、版本落後、沒人知道有沒有被用、skill 和它描述的東西脫節，以及一個 repo 裡塞太多、description 被截掉。他的藥方是把 skills 當 software：拆小、放進 repo、review、registry、用 evals 量，不要再花十年重走 PHP 沒有套件管理的那條路。

## Sprawl：看不見，就改不了

[1:04](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=64s) 他在業界超過二十年。標題不是致富術。若只看標題進來，後面會失望。這場講企業裡 skills 的採用和管理，跟個人專案要的做法不同。三塊：skill sprawl、skills 是 software（接著 Guy 早上的 keynote）、最後是 context development lifecycle。

[2:41](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=161s) Skills 大多是文字檔，有時加幾支 scripts。自己加、或從 GitHub 裝第三方，都很容易。一小段文字就能大幅改變 agent 怎麼工作。所以團隊面對的是組織內部的 Cambrian explosion。Guy 早上的投影片：GitHub 上超過 200 萬個 skills、44,000 個 repos。那還只是公開的。它們散在 GitHub、Claude Marketplaces、開發者自己的機器上。看不到在哪被用，就不能量、不能改。這是他們從客戶聽到的問題。

[4:03](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=243s) 他念了幾則。一家 AI services 公司的 lead architect：skills 散在太多 repositories，幾乎不可能想清楚怎麼統一、集中、分發。還有人說現在是自由落體，各做各的，Wild West。這些是聽過名字的公司裡有經驗的工程師。他問誰對團隊裡每個在用的 skill 沒有清楚畫面，很多手舉起來。

[5:01](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=301s) 失敗有幾種。Overlap：多個團隊各自做了達成同樣結果、做法卻不同的 skill，力氣重花。Drift：新版出來，團隊沒跟上。Matt Pocock 的 grill me 是跟 agent 訪談、建立共同理解；他後來發了展開更多細節的 grill with docs。很多人還停在舊版。Activation：做出來的 skills，agents 和人有沒有在用，現在多半沒有可見度。Guy 也講過：skill 描述 code、code base、流程或 workflow，兩邊很快脫節；過期的 skill 常常和沒有一樣糟。Overloading：一個 repository 裡 skills 太多。多數 coding agents 對 skills 數量有上限，常以 context window 的百分比來算。Name 和 description 會被注入每一次 context 的開頭，agent 靠這個決定要不要啟動。大多數 agents 會把 description 截短，關鍵資訊不見，skill 就不會被叫起來。結果是未定義的。

[7:49](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=469s) 他們做了一個接上 GitHub org 的工具，字幕寫成 skills of entry。把各 repo 找到的 skills 拉進來，可以依 repo、依 skill 看，分第一方和第三方，看 token usage，把剛才那些失敗模式做成報告。若用到的第三方 skill 在他們的 public registry 裡，也會帶上 reviews、eval 分數、安全掃描。Private beta，很新。他當天其餘時間在 Tessl 攤位，可以示範。收束是：開始量組織怎麼用 skills，而且要跨時間追，才改得了。

## Agent 是 model、harness、context 的函數

[9:44](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=584s) Agent 是 model、harness、context 的函數。改任何一塊都會改變輸出和品質。Model 和 harness 多半改不動，或組織已經綁定。Context 是最能拉的槓桿。Instructions、skills、prompting、hooks 都在這裡。Skills 特別能寫進 model 沒被訓練過的業務或領域邏輯。

[10:53](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=653s) 不要寫巨大的 monolithic skills，拆小。多數 agent coding tools 支援 plugins：一組相關的 context，裝進 agent，agent 再挑要用的部分。拆開之後每塊有自己的 description，比把關鍵字塞進一個大 description 更容易被啟動。Skills 可以呼叫 skills。人叫起一個，它再叫一串。他們做過一組 UI skills：把 Figma 設計餵進一個 skill，拆成元件，再交給別的 skills 實作。低階是按鈕這類元件，高階是頁面，中間是表單，由表單去組合按鈕和文字輸入。人如果只想做一個小 widget，可以只叫那個低階 skill。

[12:52](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=772s) Skills 是文字，也會進 repo。直接在 git 裡改第三方 skill 很誘人。不要。隊友不會喜歡。要 extend：自己寫一個第一方 skill 去叫那個第三方的。Agent 大致懂意圖、懂哪一段要蓋過哪一段。回到 CS 101 的 SOLID，S 是 single responsibility，不要把一個 skill 塞太滿。

[13:51](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=831s) 避免 global skills，也就是 works on my machine：裝在開發者機器上、活在 repo 外面。Agent 的行為就取決於誰在跑。同一段 code、同一個任務，一個人有 skill、另一個人沒有，或版本不同，輸出差很多。Skill 不在 diff 裡、不在 review 裡、不在 CI 裡，沒有紙本軌跡。修法跟把 lock file 交進版控一樣：會影響輸出的 skills，要和它們作用的東西一起版控，不要浮在家目錄。同事最近在一個小論壇聽到 Claude Code 的作者 Boris Cherny 說：他們禁止任何 local setup。Hooks、skills 這類 agent workflow 的改進，都必須 check in，給所有人。James 開玩笑說 Boris 已經在跟他的指南。

[15:09](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=909s) Skill review 像 linter，也像請 agent 為一個模組寫測試。改完可以在本地快跑，也可以在 CI 擋品質退步。他拿開場那個致富 skill 跑過：很多綠勾，是合法 skill，行數不會太長，front matter 沒問題。另一段用 LLM as judge，給了 20%，說它有本質上危險的金融操作。以 Tessl 的門檻，這個不會被發布。

## Registry 站在 GitHub 和機器中間

[16:21](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=981s) 現在多數人從 GitHub repo、Claude marketplace，或字幕裡的 NP Skills 指令載 skills。那是阻力最小的路。Registry 多出來的是單一真相：大家拉同一個 pin 住的版本。GitHub 上大量 fork，很容易出現兩個同名、看起來做一樣的事、其實不是同一個 skill。Registry 讓你知道有更新、看 diff、rollback。針對 overlap，集中的地方讓人找得到、就不必自己重寫，也可以把該用的推給你。客戶把 skills 推給非技術的人時，skills 住在私人 GitHub repo，就得為用不到 GitHub 功能的人買座位，每個月付錢。Registry 放在原始碼前面，這個問題就小了。

[18:01](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1081s) Registry 也是執行點。可以規定只用核准過的 skills：第一方全開，第三方只留一小群，看公司的風險。他們和 Snyk 合作，掃描進 registry 的東西。可以要求只有最高等級的安全檢查通過才能裝。Minimum release age 很個人，但可以設成幾天，比這新的套件不能裝。大約三到四週前，字幕寫成 mini Shiloh tech 的事件打到他們依賴的一批套件。Tessl 很吃 npm。那是供應鏈攻擊，特別在於它有持久性：在機器上加了一個全域的 Claude Code hook，試著把自己留在使用者機器上。這也是 skills 不要用全域狀態的理由。他們沒中，因為 node 的套件管理設了幾天的 release age。發現問題的團隊很快清掉，開發者不可能裝到。Skills registry 上這還不是最大的事。他轉述 Guy 早上的數字：OpenClaw 有 20% 的 skills 是惡意的。他預期會擴到其他 registries。直接從 GitHub 裝，中間沒有東西擋住被入侵的 code；registry 可以擋在中間。

[20:26](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1226s) 不要把 skills 鎖死在一個 agent。他從 skills repo 截了一張專案路徑的圖，只排到字母 K，也就是第十一個字母，已經多到數不清。有人用 agents 那種目錄慣例放 skills，他仍覺得瘋狂。六個月後在用的 agents 可能和今天完全不同。他說 token 成本在上升，open-weight models 越來越多人用。Skills 是留得住的資產，agent 只是 runtime。不想每次版圖一變就重寫這筆投資，也不想因此不敢試新工具。Package manager 的價值是寫一次，由它裝進你正在用的 agent。

[21:36](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1296s) Context 要是團隊資產，不是個人設定。保持 DRY，一個真相來源，共同擁有，不要一個人或一個團隊擁有全部。很多人依賴的 skill，別人會不敢改。CI 和門檻是為了讓人覺得改了不會把內部生態弄壞。Evals 他把 skill 的成功看成實驗。不能量就不能改。他貼了幾則他不信的說法：有個 Claude skill 能減少 overthinking、把 token 用量砍 60% 到 80%，他反而希望 Claude 想多一點；coding accuracy 增加 44%；四條規則加進 CLAUDE.md，準確率從 65% 跳到 94%，他說自己也不知道 coding accuracy 指什麼；每個 prompt 加 20,000 tokens；有個魔法 prompt 能在 bug 被寫出來之前殺掉 90% 的 production bugs。他問：如果它從未存在，那還算 bug 嗎，有點像 Heisenberg。Adam Savage 的話在這個靠感覺的世界更重要：screwing around 和 science 的差別是寫下來。Evals 就是寫下來。回到那個方程式，evals 讓你改 model、harness 或 context，看輸出發生什麼。可以對單一 skill 或好幾個跑，也可以對真實 code base 跑。它回答手動測試不好答的問題：這個改動會不會讓 skill 變差、換很多 model 之後還行不行、你到底還需不需要這個 skill，因為 model 已經變好，有些流程不必再寫進 skills。

[24:07](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1447s) 收束：拆開、做 review、依公司在乎的事做 registry 和政策、團隊共有、用 evals 把成功做成實驗。Context development lifecycle 是：讓 code 健康的每件事，context 都有直接對應，只是大家還沒在做。Skill reviews 像 linting 和 unit tests。Evals 比較像 end to end tests。Context registries 像 code registries。寫 skills 的反射和寫 code 一樣：組合、避免全域狀態。人的因素也一樣：不要把知識關在一個人身上，避開 bus factor。

## 2005 年的 PHP，以及問答

[25:19](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1519s) 2005 年，Myspace 正紅，The Killers 的 Mr. Brightside 在榜上。還沒有 iPhone，還沒有 GitHub、containers、DevOps。他剛出大學，第一份工作寫 PHP。PHP 當時沒有 package manager，Composer 是七年後的事。要裝東西就去 SourceForge 下 zip，解進 code base 的 vendor，不做安全審查。想要一個日期函式庫就放進去。Semantic versioning 還沒發明，更新看作者高興。部署讓他現在還會皺眉：用 FTP 把檔案直接拷進 production。他們不是徹底的怪物，用的是 SFTP。現在不敢再這樣。產業花了大約十年才補上，至少對 PHP 是如此：package manager、lock files、registry、CI、測試、dependency scanning、簽過名的 releases。不會再把檔案拖進 production。Skills 和 context 現在有點像當年：跳過 package manager，直接從來源裝，CI 也沒有。好消息是結局已經知道，不必再花十年重新發現。把 SDLC 學到的用到 CDC，不要再犯同樣的錯。

[27:47](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1667s) 問答大約四分鐘。有人已在用 Tessl registry，問從 skills 遷到 plugins 之後，多個 skills 要不要包成一個 plugin。經典答案是 it depends。他們打算仍允許上傳個別 skills，雖然現在聚焦 plugins。相關的一組就該包在一起。也可以把大家都用的包成公司裡的 standard library，給人一個依賴去更新。兩種都想支援。下一句字幕很碎，沒有形成可記的問題。

[29:11](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1751s) 怎麼把這套分享給公司裡非技術的人。例如用 Jira、用 skills 更新 tickets，還要給業務的另一半。他說這是現在很大的問題，沒有好答案。期待那些人在終端機跑 CLI、在本地 build skills，會很難。也不想再傳 zip。他猜多數人最後會有某種 GUI，但沒有承諾。

[30:13](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1813s) 有人問 APM 能不能解他說的一些問題。他玩過，覺得很好，適合就用。沒聽過的人：那是套件管理，一開始是 Microsoft 一個人做的，後來歸到整個 Microsoft 底下。

[30:48](https://www.youtube.com/watch?v=6VRKZQ3pmoU&t=1848s) 不同 package 裡的 skills 怎麼表達依賴。通用的一組和專用的一組，目前沒有標準。Peer dependencies 是大家有點不敢碰的。Guy 早上講過依賴管理和解析有多痛。字幕把 Snyk 和 Tessl 聽得很亂，只確定在場有人吃過這個苦。他覺得最後也許就是 peer dependencies，也可能沒有更好的。Peer dependencies 也許是舊世界的產物，那個世界要求可預測、確定。另一個解法是 agent 讀了 skill，自己說還需要另一個 skill。
