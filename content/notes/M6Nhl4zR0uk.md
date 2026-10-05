# Emma Burrows - How PMs can set up a product brain and become an agent orchestrator - AI Native DevCo

片長約 27 分鐘，英文手寫字幕。AI Native DevCon，主持人說 welcome back to the latent space。Emma Burrows 創辦 Rezonant 之前，在 Stripe 英國帶了四年工程；職涯從 Google 的 PM 開始。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=M6Nhl4zR0uk)

## 一句話

寫 code 這件事，她說已經大致被 agents 加速了，product management 還沒跟上。工程師變快之後，PM 被拉進日常拆票，真正該問的是做什麼、以及做得有沒有 taste。Product brain 是一套會學習產品直覺的系統：自動吃進客戶與產品的現況，再讓 agent 依這份理解決定是直接做、先寫 PRD，還是回來問人。

## 工程師已經在編排 agent，PM 還在拆票

[0:00](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=0s) 主持人介紹她曾在 Rezonant 工作、曾任 Stripe 英國的 CTO。她更正脈絡：Rezonant 是她創的 product workspace，幫人寫 specs、產任務、然後很快 ship。做這個產品時他們發現，PM 的角色必須變，而且要比他們已經做的工具變得更快。

[1:01](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=61s) 她要講的是一套 reinforcement learning 系統，學會你的產品直覺，讓 PM 回到公司策略，並跟上工程師。她在 Stripe 四年、帶英國工程，之前是 Google 的 PM，也在一間電商公司帶過 product、engineering 和 design。她說過去六個月，對工程師和 PM 的期待都變得很劇烈。

[1:50](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=110s) Coding 她說算是大致解了，下一個是 PM。大家忙著用 agents 加速寫 code，產品這邊沒人跟上。跟 CTO、CPO 談，常見的是 PM 被拖進日常：工程師因為 agent coding 快太多，於是「做什麼、怎樣做得有 taste」變成核心問題。多數 PM 還在做基本 workflow，例如把事情拆成 tickets。Rezonant 這些也做得好，但她要去的地方是軟體工程師已經變成的樣子：agent orchestrators。找出哪些 PM 工作可以端到端自主做完，這需要一個會學習、懂你產品的系統。

[3:06](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=186s) 她排了一條路：多數人用 ChatGPT 跑 workflow，然後開始編排一組 skills，再往下才是有 taste、有 coherency、也知道自己極限的 agents。工程側已經走過：Cursor 從逐行協助開始，後來不止於此；然後是 Claude Code；權限上夠勇敢的人，現在有 OpenClaw，可以把 agents 端到端跑完。PM 的自動化更難，因為工作和訓練資料都沒那麼一致。你得自動收集客戶、Slack、email 的資訊，還要設計 human agent control plane：agent 和 PM 之間的 checks and balances。他們做了 product brain，交給一些 design partners，也在把它backport 回 Rezonant。

## 攝入、合成、然後才是你自己的 workflow

[4:39](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=279s) 第一塊是 live ingestion。跟客戶在 Granola 開完會，就該自動處理並更新你對產品的理解。GitHub 說明產品今天在哪、做什麼。Email、Linear tickets 都要自動吃進來。系統不是最新的，就跑不了自主 workflow。

[5:08](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=308s) 第二塊是 product brain 本身，把這些輸入合成成自主 agent 可以很快處理的形式。第三塊是上面的 workflows，而且是公司的 taste：客戶票不清楚就回去問；規格夠好就端到端 ship。自主到哪一步，各公司自己決定。最後、也是她說最重要的，是人的輸入，讓系統強化學習迴圈，懂你怎麼想產品。

[5:59](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=359s) 她秀的圖是概念之間、不同層級的連結。上面的 workflows 完全依他們的端到端流程客製。Agents 有三種。Action agent 跑 workflows。Input agent 和 brain agent 處理輸入並重組。Organizational agent 處理會過時的 wiki，也處理團隊自己在重組這件事：圍繞公司組織、團隊和構造來整理。

[6:43](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=403s) Demo 從一個 GitHub repo 開始，是他們的 Rezonant product brain，上面做了匿名，因為裡面有客戶對話。Linear 裡是上次執行後更新過的票，通常每天跑。結構很簡單：每天處理的 inputs；sources 是原始資料，不全留，否則會淹沒 agent；wiki 有 customer insight、features、product principles（用來表達 taste 和 coherency），以及描述前端流程的 technical context。還有週五的 Granola、手動資料、GitHub diffs。處理比這段演講的時間長，所以她直接秀結果：feature 層的 context、以及描述全部前端流程的 technical context 都更新了。東西從 input queue 移走。一個具體例子是它理解到 JIRA 認證不再是 team scoped，改成 OAuth scoped，並寫成之後 agent 能用的形式。UX flows 也做了一輪合成。

## 兩張看起來都像功能請求的票，走出不同的路

[8:54](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=534s) Rezonant 首頁能建 PRD、specs、tickets，再很快交給 coding agents。她要為 product charter 寫一張票。主介面給 agents 和人的其實是 Slack：除非事情直接相關，否則不要叫人進這些系統。

[9:41](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=581s) 第一張票假裝是客戶回報：首頁的 product charter 讓使用者困惑，不知道它是什麼，也沒辦法看懂。第二張比較複雜：大家想在 agent 開工前估計任務大小，也就是 story pointing，是 Rezonant 裡常見的功能請求。兩張表面都是 feature request。若 brain 真的懂產品，後續動作應該不同。

[11:10](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=670s) 第一張她承認有先準備，因為寫 code 比較久。Rezonant 在 Slack 問她 product charter 的困惑。它認為規格夠好，可以直接做到實作，給兩個選項：快速修一個窄的 fix，或併進 Rob 正在做的 onboarding。她選窄的 fix。它把建議寫進留言，在 Rezonant 建了任務，並送給 coding agent。那張任務和 PR 已經端到端做完。她說送出前仍該由工程師看過。這是在做完整的自主 PM workflow，但在動手前先問了她產品的 coherency 和策略。

[13:04](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=784s) 第二張 task complexity estimator，它不建議直接進 agent coding，建議先寫 PRD。策略上它說是很強的 yes，但和別的工作重疊。她同意寫，並強調 story pointing 對每個客戶都極度個別，這必須是工作本身的一部分。PRD 裡有為什麼做、怎麼減少模糊、和策略工作及相關工作的關係，以及她要求的那塊複雜度。做完的工作會回到 brain：product charter 的困惑已寫進一個 input session，下次 brain 跑的時候會讀，形成一整圈。

## 可以用 GitHub repo 自己做，Q&A 在問界線

[15:14](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=914s) 她說你可以自己做。他們刻意用 GitHub repo 當底座，工程師也能丟自己的輸入。他們在跟不同規模的公司一起想。熟悉 OpenClaw 的人會看到很多相同概念；隱私怎麼設、要哪些 MCP connectors、團隊怎麼組織、之後怎麼調，是他們和 design partners 累積的部分。

[16:33](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=993s) 有人問客戶若問資料去哪、送給背後的模型怎麼辦。字幕把模型名聽成 Afrobeat，她後面講的是 Anthropic。Brain repo 住在客戶自己的域，不是 Rezonant 的 repo；demo 這個是他們公司自己的。設計夥伴的放在對方 repo，基礎資料在那裡。若把對話送去 LLM 做索引，要在第三方處理協議裡揭露，或做匿名。她現場這份是先匿名才秀的。加上只有團隊看得到的對照表，她說系統就不會把 Anthropic 能拿去用的資料送出去。這句話尾字幕沒接完。

[18:01](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1081s) 開發者可以怎麼用產出：inputs 有一個 manual 資料夾，現在是空的；也可以把它當一般 GitHub repo，從 org 拉下來，用自己的 coding agent。沒有一套適用所有人的接法。他們和 design partners 找的是一開始就很有價值、又朝自主光譜走的 workflows，取決於對方怎麼工作、核心產物是什麼。她同意，這是在推 PM 把文件放進 GitHub，而不是 Google Docs，讓開發者和 agents 有依據。這是 Rezonant 的核心想法：對 coding agents 有用的 context 很多還在 Google Docs，對他們來說已經顯得過時。她不認為那種文件工具有很好用的 MCP connector，但想攝入的話仍可走 MCP。

[20:23](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1223s) 有人問 user stories 會彼此堆疊，輸入是否要重構成當前狀態。她說會自動做。Wiki 會標出底下引用的 tickets，例如一串 Linear 參照。它像對 GitHub 做 diff 一樣對 Linear 做 diff，再寫回 wiki。

[21:19](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1279s) 另一位觀眾說 PM 對產品工具愛恨交加，問 Rezonant 是否讓人不必再進那些工具、主要透過 agent，還是仍要一個 UI。她認為往後的工具更在維護策略和 product principles，不一定是管一大堆 tickets。很多 AI native 團隊已經把一張 ticket 當成完整功能，而不是再拆成前端和後端。能推多遠，她說還看人。

[22:20](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1340s) 合規與監管工作要能事後說：這是人看過的，錯了是人的錯，不是 agent 自己冒出來的。所以 workflows 必須可設定，agent 和人的介面很重要。在監管較重的領域，可以規定 agent 永遠不能在沒有文件的情況下寫 code，並做出有記錄的 approval flows。PR 往下一層走，某種意義上就是 approval。人有沒有真的讀 PRD，取決於公司、以及人有多認真對待合規目標。

[23:32](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1412s) PM 和工程師的線在模糊。她看到兩個方向：product builder，是 PM 往下走；另一個是 PM 往上，更像 GM 和策略。短期不會只有一個贏家。Stripe 和 Google 本來就比較把 PM 當 GM，這只會更明顯。她若要預測，比較是這條，工程師則更多走向 product builder。現在很多實驗正在發生。

[24:42](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1482s) 既有公司有幾百萬行 code、文件散在 Confluence，大量攝入會不會很貴。她說典型 rollout 是一個團隊先看。部署這種基礎設施，要先懂團隊怎麼排、資料如何隨變更速度攝入。每間公司的 product brain 都要依資料變更速度略有不同，並守住成本。Design partnerships 是在找有多少一致性，好讓系統能初始化一個 brain，而不必花很多時間顧問。對他們這還是一門藝術，想變成可編寫的科學。

[26:22](https://www.youtube.com/watch?v=M6Nhl4zR0uk&t=1582s) 最後有人問是直接送給 agent 開始寫，還是人先看過。字幕這句問法聽不清楚。她的答法是：product brain 用 Rezonant API 建立 coding agent 的工作，然後在 main 上開 PR，由人 review。這是她的做法，別人可以不同。
