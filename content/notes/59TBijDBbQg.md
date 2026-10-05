# The $600 PR: Where Software Factory ROI Really Comes From

片長 36 分 54 秒，英文手寫字幕。Rob 帶 Tessl 的 research，講的是 agentic workflow 的 ROI：今天的 model、今天的 agent，報酬主要從哪來。現場有人插話，筆記把那些問答收進argument裡。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=59TBijDBbQg)

## 一句話

他們約八成的 PR 走內部 software factory，但 coding harness 加 model 用的是 Anthropic、OpenAI、Google 開箱即用的東西。錢和力氣花在 agent 外面：什麼任務值得做、repo 裡的 context、能不能驗證、以及失敗怎麼餵回下一輪。有一張 PR 燒掉大約 600 美元，因為 review agent 和更新 PR 的 agent 都精確地做了被交代的事，沒有人教過它們「這樣就夠了」。

## 五段流程，最貴的是下一輪怎麼變好

[0:39](https://www.youtube.com/watch?v=59TBijDBbQg&t=39s) 他說 agent 在這裡專指 coding harness 加上 model。Factory 能動，是因為包在那外面的東西。他們有內部的 code review 工具，也對外放了，另外有一個 agent 負責改 PR。流程是推上去、收到 review、改、再 review。有一天早上，一張 PR 大約燒了 600 美元。兩個 agent 都在做被交代的事：一個依 comment 更新，一個再審那些更新。沒有「這就夠了」，也沒有「這張票的範圍就是這個」。相關檔案因為改了一行進了 context，也許該另開一張票。這些是人做工程時慢慢學會的流程和假設，agent 不知道。你給它「去更新 PR」和「去 review PR」，它就做。問題出在 agent 外面那層 context 和 intent。修法不是把「怎麼做好 code review、怎麼推回去」寫進 harness，而是改他們組這個系統的方式。

[2:56](https://www.youtube.com/watch?v=59TBijDBbQg&t=176s) 他把交付拆成五段。什麼是有用的任務：對公司有價值，實驗、產品、或工程師會做的任何工作。共享的 context，以及這個任務所在的環境：環境帶著 dev dependencies、tests、憑證，才能真的測、真的驗證。Agent 執行本身很單純：給一個 dev sandbox，在上面用 YOLO mode 跑，要能稽核，另一頭把東西拿出來。然後是驗證和交付：這份 PR 或這段 code 好不好、夠不夠某個品質，又不要掉進剛才那種 review 循環。最後，也是他覺得最重要的：下一輪怎麼讓整個 loop 更好。Agent 做成了、沒做成、或做成但中間走錯又自己救回來，這些都能拿來改系統。

他先透底：最後這段才是他們大部分力氣所在。若能自動吃進這些回饋，讓系統依看到的失敗模式自己改，前面幾段會跟著好。例如任務 context 不夠，就去改建立 issue 的 skills，多給 context、多問使用者。或 factory 缺一層驗證，因為這種 PR 總是被退。有人問：輸出餵回輸入，會不會一開始就不在 loop 裡、最後全部變成混沌。他說到目前還沒有。他不能保證時間夠久之後不會。

## 看行為，不看每一行

[5:02](https://www.youtube.com/watch?v=59TBijDBbQg&t=302s) 內部 factory 叫 Kikimora。跑 factory 的那個 codebase 開了 auto merge，不要求人 review。他上次看，95% 的 code 沒有人看過，是 agent 看這些 loop、修問題，或處理 Slack 和討論裡冒出來的功能，然後完全自己落地。他覺得還沒變成混沌，是因為人還在迴圈裡，但是在功能和行為那一層，不是在 code 那一層。他們不斷說系統要表現出某種行為。架的時候投了很多 end-to-end 的行為測試，以及從使用者看得到的輸入和輸出去建的 formal model，不是對著 code 本身。這一層目前夠用，不必盯每一張 PR 的表面。

有人問每一段的 ROI 量過沒有，報酬會不會隨時間掉下去。他說大概是，但又不是。整個產業對工程投資的報酬沒有公認指標。PR 好不好當指標，大家不同意。有過 DORA、SPACE，字幕裡還有一句 at 1.2。他們沒有做得比產業更好。比較容易看的是每一項任務的成本就是 token，不是他們沒追完整的、稀缺的人的注意力。輸入側因此清楚。可以換一個 model，看同樣形狀的產出能不能更便宜，或 time to first token 更快。他們大致把 PR 當成要最佳化的東西，並信任工程師在做該做的工作，就像多數組織信任工程師。實驗的問法是：輸入側改什麼，還能得到跟 baseline 一樣的結果。通常要的是更便宜或更快。改 context、加一個 skill，品質指標至少持平或更好。

有人說開始為 AI credits 付費之後，每一輪的價值變成很急的問題。他補：很多人的注意力成本沒被歸類。帳單上多了一行可以最佳化，不表示它比以前貴。那一行以前根本不在帳單上。

## 驗證對錯的目標，比多寫測試貴

[8:55](https://www.youtube.com/watch?v=59TBijDBbQg&t=535s) Context 是 repo 裡的一切，也是組織裡的一切：你們實際怎麼做一件事，綁著你們的風格和工程文化。想要網路上的通用智慧，不要給特定 context，直接問 agent。想要跟你有關的事，就得餵 context。慣例、限制、工具。還有一層傳送：repo 外面累積的 context 怎麼進 repo。Slack、對話、incident report，能不能變成 repo 裡的 context，讓 agent 知道別人在 Slack 上問過為什麼這樣做、歷史原因是什麼。那些原因第一次問 agent 時不在，所以他們才去問同事。Notion 若是架構決定的 source of truth，也得變成 repo 裡的 agent 吃得下的形式。

環境在他心裡比較不是「有沒有 dependencies」，那些可以從網路上載。比較是能不能驗證自己的工作：依賴起得來嗎、服務的 mock 起得來嗎、用有代表性的方式確認做對了嗎。這裡需要人。不能只說去對 production 測。可以，但風險高一點。Agent 不知道什麼是有代表性的 production 負載，不知道你的客戶、他們在意什麼、延遲限制、偏好。你給它資料，它就對那份 mock 測。Mock 不像現實，它會非常徹底地驗證一個錯誤的目標。這邊持續投資，才能放一千個 agent，再挑驗證過得最好、或最符合他們在意的條件的那個。

[11:09](https://www.youtube.com/watch?v=59TBijDBbQg&t=669s) 驗證讓委派變得實際。他不想看 100 張 PR 挑最好的。他想看 metadata：品質、evaluation、延遲、效能哪一張分數最高。然後對上 production。變更造成 incident，就該回去看那些變更的 traces、那輪 PR review、agent 怎麼做的。他們存 agent transcript，等於看進做決定的那顆頭，看什麼決定導致 outage。這在 agent 外面，但能長出驗證結構、更多 context 或更好的環境，讓同樣的事不要再發生。不只是多一個 test。Agent 很會偽造測試、繞過測試，或寫非常多測試。他要的是更高一層的 invariant。Outage 常常不是 agent 做錯一件孤立的事。有時就是 bug。更常是它違反了系統別處暗示的不變條件，資料壞了，或往下流動時出錯。

[12:36](https://www.youtube.com/watch?v=59TBijDBbQg&t=756s) 下一項任務繼承什麼，是他覺得該投資的地方。早期他們的 queue 一直在攪。那是 durable work queue：一個項目寫進去一次，只有一個 singleton，不能被領走多次，還能追狀態在多個系統間怎麼走。Agent 一直踩自己的腳：修好一個 bug，另一個 agent 又引進來，再修，再被引進來。這塊是系統核心，早期改得最多，bug 也最多，agent 花在修它的時間也最多。

他們用 Quint 做了 formal model：放上去、被處理、拿下來，以及相關的每一次互動。他知道 formal modeling 是什麼，在沒有 agent 的世界裡，他得抱著教科書坐很久。跟 Opus 或 Fable 坐下來就容易很多。這塊從加進去之後完全穩定。不是整個系統，是很小的一塊，但下游每一件事都受它影響。系統絕不是沒有 bug。完全由 agent 寫出來的 bug 一直有，那是他們在學的部分。這一塊是穩的。投資驗證、確認這段 code 正確，敲掉一整類 bug。Agent 很會對著一個最佳化目標撞。你說去滿足這個被留著的約束，它會撞到滿足為止。約束若是 formally verified，你有信心它會成立，那就是比 unit test 更好的牆。

## 標題成本下降，整張帳單上升

[15:02](https://www.youtube.com/watch?v=59TBijDBbQg&t=902s) 他們的 run success 是：agent 開了 PR，CI 過了。這樣可以換 model、換 harness、換做法。有一個實驗看 effort，用的是 Claude 這一類 model。先只看 run success，也就是最後 CI 過不過。High effort 更貴，medium 更便宜，兩者在這項上看起來相當。再往下看第一次 review 就被接受的比率，high effort 較高，medium 較低。他們也為 review 付費。第一次就過，review 比較便宜，不必付多輪。只拆開系統的各段，而不只盯著寫 code 的那個 agent，才看得到這些交互。若當時看了標題成本就出 medium，他們在最佳化的那項會下降，整份成本其實會上升。

指標重要，這不令人意外。難的是 agent 移動太快，人很難盯住整個系統。人的可觀察性他們放在 meta 層：用吞吐量、延遲和其他面向看整個系統怎麼動。

[17:14](https://www.youtube.com/watch?v=59TBijDBbQg&t=1034s) 另一種 ROI 來自你怎麼跟 agent 互動，而不是 agent 本身。他在 Slack 問：這張 PR 卡在 CI，為什麼這麼久。Agent 回 CI 的 P90 是 15.5 分鐘，然後開始找怎麼改進 CI。他們還有 merge queue。要合併時不只跑 CI，還得在佇列後面等。他們會把幾張 PR 分組一起落地，因為 CI 在分支上過了，merge 時 main 已經往前，就會引進 bug。他推回去問 merge queue 的影響。Queue 本身的 P90 是 52.4 分鐘。大約 35 分鐘在等，只有 15 分鐘在 CI。他手邊沒有分布。他記得 merge queue 最長大約兩小時到兩個半小時。Queue 沒有優先順序，下一個被 merge 的就是下一個，是時間序列。問題主要是分組不夠大：一次只落地五個、平行五組，其實可以往上、也可以往外加。有人問量了多少。佇列最長到過 60 到 80。兩週的資料大約 1,500 張以上的 PR。

他覺得自己一開始的問題規格很差。他真正在意的是 merge queue，卻問了 CI，因為當下他被 CI 惹惱。只因為在 Slack 這個公開表面上來回問，才問到那個數字。他不覺得更聰明的 agent 讀得懂他的心，在他明確問 CI 時長時告訴他其實該關心 queue。問得差，出來的就是某種隨機結果。他們的決定是放在公開的 Slack 裡做，別人可以幫忙把一個他自己都不知道問差了的問題問清楚。那會變成可搜尋的檔案。Context 不在 repo 裡，在 Slack 上，但能餵其他 agent workflow。跟 agent 說話的方式要改，讓它更適合繼續產生和消耗 context，也更適合重複、多個人一起的迭代。他覺得在 Slack 裡跟 agent 說話，比各自在本地 CLI 上好。他明確說不知道怎麼量這有沒有讓他們更有效率。

[21:40](https://www.youtube.com/watch?v=59TBijDBbQg&t=1300s) Evidence 是很多 ROI 的來源，而且容易量的是秒到分鐘：哪種測試、lint 過了沒、CI 這些基本的。機器可以確定地評，所以平凡。他真正在意的是客戶結果、incident、PR 得返工多少。跨時間尺度的想法是：去找便宜訊號之間的相關，比直接量那個很貴的結果便宜得多。秒級的訊號對上分鐘和小時，再對上天和週。工程組織自然會吐出很多這種資料。他們知道 incident 從哪來，卻不總是連回造成它的 agent session、缺的測試、缺的 lint、或缺的驗證。他的賭注是：哪些測試對上較少的 review 輪次、再對上較少的 incident，這比直接從 transcript 量更有價值。多幾層間接，就靠相關。他說每個工程組織都有這些資料，散在不同系統裡，要做的是跨時間把它們對上。

完整成本不只 agent。人的注意力也要算。能減少 code 落地時人要碰的次數，很難量，但那段時間比 token 帳單貴得多。完整成本是 retry、review、基礎設施、人的注意力。Retry 不只是同一件事重跑，也包括用不同 model 做同一件事、因為做得差而重做、還得再改。那是一張 PR、一個功能的完整成本。再拿去跟可比較的工作對。每項任務不同，也有點像。可以做分群。證據在輸入層，就是你花掉的 token。他覺得這計算有點怪：要多花錢才能知道自己省了錢，因為得做更多實驗才敢說 ROI 變好了。內部做法是 shadow 很多 production 工作。Factory 繼續跑，挑一部分票，改 context、model 或 harness，看影響。尾端有很多自動的品質閘門，才能看結果是否等價，再量輸入。做得到是因為它們是 agent，你可以叫它們做會被丟掉的工作，它們不知道這是浪費。叫人去做一場實驗、最後把工作扔掉，就難得多。

[25:56](https://www.youtube.com/watch?v=59TBijDBbQg&t=1556s) 他收回來的那個會重複的 loop 是：先定義什麼結果可以接受，那就是驗證。投資在這裡，才能把輸入放到你付得起的那麼寬。把時間、成本、人的介入都記下來，找出約束，改它，再跑。真的想玩，可以模擬 codebase：在某個時間點 fork，看不同 model 會走出什麼路徑。用 agent 的時間而不是人的時間往前推。他說他們還不知道怎麼做，也還沒做，只是在想。ROI 用 token 定義、而不是用你得付薪水的人來定義時，這種機會才開得起來。

## 問答裡他不肯給單一指標

[27:10](https://www.youtube.com/watch?v=59TBijDBbQg&t=1630s) 有人要一個會重複出現的約束。他給兩種。一種是實驗變數，例如跑哪個 model。他點名 Opus 5.5、Opus 5 或 4.8。換了就看下一批結果。這是約束，因為它驅動 token 成本：囉嗦程度不同，需要的 prompting 也不同。想把 Opus 5 用好，得改一大塊 context，那些成本在退回 Opus 4.8 時不必付。另一種是 agent 做錯或做失敗的原因。例如 Docker image 起不來，Postgres 起不來，資料庫測試就跑不了。把這個修好，它才能驗證，也才能再往下證明。

怎麼知道不是只對那一個測試最佳化。他們跑很多測試，也不想只對一個約束轉一個 loop。很多實驗平行跑，彼此有一點拉扯。他們想的是一整個還能接受的狀態空間，factory 的設定落在裡面就可以繼續。同時最佳化 Opus 5 的表現、review bot 的第一次通過率、Slack 上更好的問題、以及後來出很多 bug 的那一段 stack 的驗證。整體看，比較不會過擬合到一個局部最低點。仍可能掉進去，到時再想怎麼出來。他沒有比「做很多實驗」更好的答案，而實驗本身也很貴。

Formal model 怎麼接回 codebase。他說很簡單，然後說是 Fable。具體是他有一份 bug、issue、修法、以及修好又被修壞的清單。跟 agent 一起，把 Python 裡那個 queue module 隔離出來。Agent 把所有呼叫這個 queue 的地方走完、把行為分類，他只是在引導。再導出 formal model，確認它過既有測試，把發生過的 bug 對著 model 重放，看那些 bug 在 model 下還成不成立。那個範圍再出新 bug，就檢查 model 要不要更新。上面再疊 Python 裡的 property-based testing 和 invariant testing，抓假設跟 model 逐漸分開的地方。改相關的 code 時，model 也要改。這個例子比較容易，因為那塊 code 在最初開發之後不太再變。他們還沒認真面對 formal model 在高速變動的程式裡要怎麼維護。

另一問要例子，以及有沒有把 coding harness 拿去跟別人比，例如 SWE-bench 或 METR。Formal model 就是剛才的 Quint 和那個 queue。挑一塊 bug 多、又小到可以形式化驗證的。狀態一多，形式驗證的計算會變很貴。Model 是跟他一起工作的 agent 設計的，依給它的 context。商業邏輯事先就寫在 code 裡。他們驗證的是已經存在的那一塊，順手修了一兩個 bug。

Harness 本身他沒有那些 benchmark。他們有 Tessl Agent，但它是給 factory 任務的，不是通用 coding agent。他說請不要把它當 coding agent 用，它沒有那麼好，它在更高一層，帶的是他們附的 skills。Factory 裡真正在做事的，是 frontier lab 提供的 coding agent，Claude Code、Codex，或當下大家在用的那個。

最後有人問怎麼量化 software factory 裡的 developer experience，它是過渡的東西還是核心目標。對方提到他寫過一些他覺得也許是虛構的 ROI 指標，字幕沒把那篇寫清楚。他說 DevEx 很難。就他們在做的東西，現在更在意 agentic experience，而不是 developer experience，因為主要在跟 API、skills、平台互動的是 agent。Agentic experience 好量得多：把 agent 放在一個箱子裡，給它客戶在 production 會用的那種任務，看它做不做得出預期的事。仍希望人喜歡跟產品互動，不能只為 agent 最佳化。人還是要碰到產品表面，字幕這裡聽成 tessellations。那一層他們靠質性的：聽人怎麼說，不急著量化。以他們現在的階段，尤其企業客戶，跟大多數使用者有直接關係，可以去聽。內部 factory 的客戶就坐在旁邊，東西不好他們會過來說。
