# From AI Assistants to Agents: How Sourcegraph is Transforming Enterprise Development

片長約 45 分鐘，英文自動字幕。AI Native Dev。Dion Almaer 在 Tessl，訪問 Sourcegraph 共同創辦人 Quinn Slack。字幕把 Sourcegraph 聽成 source graph、Source craft，把 Tessl 聽成 tessel、Tesla。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=ZTLSMN8eISs)

## 一句話

Sourcegraph 從 code search 做起，是因為大 codebase 最難的是看懂它，也是為了有一天有個大腦能吃進全部 code 時，code 已經在同一個地方。Cody 不是為了從零生一個示範 app。Quinn 認為企業才是 code AI 該做的地方：同一個 prompt 給整個團隊用、把標準提前到寫 code 的當下、用 agent 拿走重複的遷移和測試。端到端取代人的那種 agent，他說今天做不到，而且不該等一顆按鈕。

## Code search 先讓人看得懂，也把田耕好

[0:42](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=42s) Quinn 一輩子都是開發者。他給 curl 送過 patch，其中一個 flag 是他加的；也送過 OpenSSL 和 GnuTLS。字幕把後面兩個聽得破碎。那些日子讓他知道，在巨大的 codebase 裡試著看懂那該死的東西，有多難。那是 AI 之前。

[1:37](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=97s) 大家現在知道 Cody，起點是 code search，靈感來自 Google 內部的 Grok。字幕作 grock。現在的客戶包括 Stripe 和 Uber 的每一位開發者，以及美國前六大銀行裡的四家。創立是因為他們自己痛過。寫 code 很難，也比該有的更重複。共同創辦人在 Google 痛過，他們一起在兩家美國大銀行裡寫 code 時也痛過。他們要加速人類開發者。Seed deck 的第二步就是自動化軟體開發。開始的時候，沒有技術能以那種魔法的方式做到。

[2:43](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=163s) Code search 會做兩件事。立刻讓人把軟體開發最大的問題，看懂那東西，做得更好。也把 codebase 這片田耕好：等到有個魔法大腦能吃進所有 code、做出驚人的事，全部 code 在一個地方，公司裡的開發者都在用它。他覺得這是必要的一步。結果 code search 不只是好的第一步，本身就很有價值。

[3:25](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=205s) 開始後前兩週最酷的一刻：他們做了一個方式，看開源世界裡還有誰在呼叫這個函式。他寫 code 時拿 Sourcegraph 看有沒有人做過，找到一個 Go package，做的正是接下來兩週要做的事。做了兩週，已經省下兩週。他說像永動機。Dion 在 Google 用過 Grok，很多離開的工程師會想念再也碰不到的工具。

## Claude 比 ChatGPT 更早進到他們的 Slack

[4:15](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=255s) ChatGPT 之前的那個夏天，他們已經在跟 Anthropic 合作，用得到 Claude，在 Sourcegraph 的 Slack 裡，也有 API。它能解釋 code，不只是當時唯一有的 code AI：自動完成。它能修 code、生單元測試、生整份檔案。之後兩年半又好很多，但那時他們就知道這是未來。他們有位置：大客戶用他們做 code search，code 都在，那些人已經在解「這該死的東西怎麼運作」。

[5:38](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=338s) ChatGPT 出來時他說，這就像我們已經有的 Claude。他拿去給父母看，它能寫歌詞。周圍的人覺得聊天沒什麼新的。他回頭看，那是業界的一個紀元分界。之後對 AI 投得更多。字面意義上每一週或每隔一週，客戶都用它做出令人意外的新事。他感覺 ChatGPT 之後，人像是以 300% 在工作。Dion 說多數人是從 ChatGPT 第一次看見那個時刻；Quinn 是從 Anthropic 那側先看到。現在 Claude Sonnet 寫 code 已經非常好。

## 多數 RAG 沒有真的切過、也沒有量過

[6:49](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=409s) Dion 問 code 和一般文件的檢索差在哪。Quinn 說有三群人：學術的象牙塔、企業的象牙塔、以及真的在用那東西的人。他們早就在做後來被叫做 RAG 的事。有學術的人問他怎麼看 RAG，他不知道那個詞。對方說 retrieval augmented generation。他說你是指用搜尋找到 code 再呈現出來。對方說對，那就是 RAG。他覺得兩邊的鴻溝很好笑。

[8:02](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=482s) 現在任何一種 RAG，產業裡大多數從來沒做好。99% 的實作從來沒有做過 chunking，或從來沒有嚴謹地量過。他說這完全瘋狂。他們做很多嚴謹測量。而且已經過了 RAG 夠用的那個點。現在多數 context 是用某種 agentic 的方式去拿：第一次拿到的夠不夠、還要探索哪些詞、還要用哪些工具把 context 拉進來。他口頭說成 rag gentic。挑戰是嚴謹地問：這種取 context 對哪些 use case 是好的。其實是一盒很多技術的黑盒。AI 之前做的 code search，有 code index、所有 repos，本身就極有價值。他們又加了很多新的檢索和索引。結果幾乎全部對人類自己做 code search 也有用。他說這正是當初希望的位置：code search 是上面任何 AI 系統的好地基。

## Cody 的功能很多，企業要的是能自動化的規模

[9:12](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=552s) Cody 一開始是 chat，用來修 code、看懂 code。然後做自動完成、做 edits。他說他們是最早做出 code chat 的，當時大家在用的是自動完成。自動完成人人都用。Chat 有很多露出方式，企業和個人該不一樣。Edits 是選一段 code，按 option K，叫它去做。Auto edits 現在有價值：像自動完成，但也能建議檔案裡別處的修改。假期裡他在一個小 side project 寫了很多，他認為大約 50% 的 code 來自 auto edits。

[10:30](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=630s) 個人開發者可以自己摸索，一致性和品質不一定最重要，只是想快。他們完全聚焦企業。他認為那是做 code AI 最有趣的地方：巨大的 codebase，一天有上千次在生單元測試，規模大到真的能自動化。這和從零做一個 app、或低風險的個人專案，要的是完全不同的產品。他愛企業，因為真正的軟體在那裡做，最好的開發者、最好的軟體都在企業。若你不同意：一個開發者若真的那麼好，做出的軟體會讓公司成功，幾年後它就是企業。

[11:40](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=700s) Dion 說 Twitter 的回音室常是從零生一個小範例 app，對原型有用，但和 99% 的情況不同：你已經在既有 codebase 裡，企業裡可能巨大，也許是很大的 monorepo，也許很多 repos。他談過一位新進員工，有一點冒牌者症候群，用 Cody 那種 chat 去理解 codebase。系統隨時都在，不必等另一個時區的 tech lead。Onboarding 整個變了。客戶名字幕這段沒聽清。

## Prompt 不該每人現打；資深的人該把標準左移

[12:24](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=744s) 他們喜歡找那種退一步會覺得「大家這樣做很荒謬」的地方。RAG 是一個：人人在談，幾乎沒有人用想過的方式做 chunking，沒有人量 chunking 好不好，沒有人量 pipeline 的效果或準確度。有在做的公司，常常是另一個學術團隊有一堆技術，沒有進到生產。量了也沒有用。

[13:52](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=832s) Code AI 在企業裡皇帝的新衣，是開發者怎麼用 chat。大約一年前，大家各自臨場打 prompt，字幕說 chicken typing。兩個人要寫測試或加一個 UI 畫面，打法都不一樣，prompt 沒有共享。它還能動，已經很奇怪。他們的 context 取得相當好，找得到一些檔案。明顯的機會是：企業裡兩個人做同一件事，就用同一個 prompt。Stripe 有一個內部的一般用途聊天工具，公開談過他們做的 prompt library，讓人共享寫好文件、公開摘要、行銷文案的 prompt。他們行銷做得很好。為什麼 code AI 不做。於是他們有 prompt library：生單元測試、做新的 UI 畫面，用同一個 prompt。資深的人可以把它寫好，需要時再改。Prompt 是給 AI 的輸入裡這麼重要的一塊。他覺得瘋狂的是，這東西已經出來超過六個月，企業客戶大量在用，其他 code 工具還沒有。有客戶超過 80% 的 chat 是走 prompt library。品質更好、更一致，也省下每人自己打的時間。

[15:53](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=953s) 個人工具做不到。個人不會先花 20 分鐘，為一個一個月才做一次的事寫一份好 prompt。企業裡這是某個人的工作，tech lead 或經理，因為前面投入的時間會被之後每一次使用攤掉。Dion 說 principal engineer 想幫很多人，自己也有 code 要寫。能虛擬地站在所有工程師肩上，不是以 creepy 的方式，影響就很大。他也看到有公司因此把團隊改小，另有一個核心團隊在特定領域把這些東西裝好，小團隊少了協調成本，又可以快。

[17:39](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1059s) Quinn 說資深開發者和 tech lead 對團隊的影響力在左移。以前等到 code review，那是事後的微管理，最討厭的一種：一堆討厭的留言，而且希望你在我寫完整張 PR 之前就告訴我。現在可以影響 code 正在怎麼被寫。下一步是每一行寫出來的 code 都跑過 codebase 定好的標準，立刻有回饋。不只在生成新 code 時，人自己寫的 code 也走這條。他覺得這比等資深工程師 review 好得多。他說 code review 裡每一則留言都是一次失敗。不是說 code review 不好，該做；失敗也許是個重的詞。想成工廠：輸送帶上的零件有缺陷，不是說有人搞砸，是流程失敗了。每一則留言是：寫的人不知道該做得不一樣。不是他的錯。系統要問怎麼讓他以後不會犯。把那些笨的、重複的事實移出人腦，人才能想更高的事。他們想減少 code review 留言，不是把 review 扔掉，它有目的，而是讓它沒那麼必要。很多客戶在推這條前線。

[19:16](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1156s) Dion 拿無障礙當例子。他沒看過有公司在這上面投得夠。常常是很小的專家核心，或團隊裡幾個人懂。有一位工程師對可測試性很有熱情，code review 時十次裡他在一次，於是十張 PR 裡一張的無障礙是好的。若放進系統、變成 best practice，這個問題就消失。效能、安全，這些橫切的事，不能期待每個人都有那個程度的專業。專家可以更早影響。Quinn 說這是從「教育每一個人類開發者」轉成「讓系統本身有高的無障礙」。他認為這裡有一種道德評價。每個人在個人層面知道、在乎，是好的。他母親過去五年失明，他看到她怎麼用裝置。Apple 的無障礙很驚人。Cookie 橫幅讓網站很難逛。這對他是個人的。他用 Sourcegraph 的 AI 搞懂 ARIA、元素上的 roles，以前不知道。字幕把 ARIA 聽成 Arya。他有自己的 prompts 和手法。但要改掉「當軟體開發者就該知道所有低階的事」。我們已經接受過別的演化：不寫 assembly，很多基本的事不知道，多數程式人不會一些基本的 CS。產業已經走到那裡。拿掉那種道德評價。開發者今天其實就不全懂安全和效能，你卻覺得那該是他們的工作。不如讓系統有好的無障礙、安全、效能，讓坐在肩上的 AI 幫忙。這只在企業做得到，因為這些東西依 codebase、stack、產品、業務需求而不同。只有企業會事先花時間把執行這些事的系統做好。

## 遷移不是一顆按鈕；能拿掉 96% 就該拿

[22:20](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1340s) Dion 問依賴和遷移。每間企業都在做從這裡遷到那裡，從商業價值看像浪費，但維持更新很重要。能不能不要累積到需要一個 Project Phoenix 從零重建。Quinn 說這常常出現。每間企業有幾十個、也許幾百個想做的 code migration，大多數沒在做，有一些在做。客戶開始在 Sourcegraph 上做 agents。2024 年 12 月一場活動，客戶談他們做的 agents。Palo Alto Networks 做了一個 code review agent，字幕把名字聽成 palalo。Booking 做了一批 code migration agents，是一次性的，給大遷移用，例如這一部分 code 從 monorepo 到 microservices。這類 AI 驅動的遷移，他們看到很驚人的結果。重點是這不是一顆按鈕。他們不賣按鈕。你做不出一顆按下去就自動完成的按鈕。那沒關係。

[23:57](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1437s) 回到三群人。學術象牙塔，他批評他們的 RAG 做法。企業象牙塔：有些人要等到它是一顆按鈕才肯試，於是永遠坐在塔裡。有很驚人的東西，但不是按鈕。若能拿掉 96% 的工作，那是他們在這些遷移上看到的一種客戶結果，他就該天天收下，不要再等按鈕。

[24:29](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1469s) Agent 對他是：任何把軟體開發自動化、拿走一些重複苦工的東西。日常語言裡，籃球員請的 agent 不替他投籃，也不接管工作，是做他討厭的那部分：簽合約。Quinn 說自己是 coder，不是籃球員。他喜歡打球那部分，不喜歡簽約。他覺得圍繞 agent 的把關很好笑。今天真有影響、真的在運作的那些，才是他想的未來。客戶在他們平台上做，還會有更多 API。過去六到八個月加速得很快：code migration、code review、測試生成。今天能運作的，是自動化重複、笨的流程，不是端到端取代人類開發者。這不是道德聲明。他不是說想取代人的人是壞的。他是說那些今天做不到。它們只有在一層比較簡單、真實、能自動化具體事情的 agents 上面，才會做到。

[26:14](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1574s) 今天可以自動化 code review 的很大一部分、測試生成的很大一部分。若能自動化到 80% 或更多的工作是以相當規定好的方式完成，他相信一個真的要寫新功能、或修任意問題的端到端 agent，成功率會高很多。那些東西今天失敗的地方，常常不是難的那部分，而是寫出符合我標準的好測試，以及其他要編進規則的事。那些老實說還不行，而且在 agents 把開發裡更重複的部分拿掉之前，不會行。他叫水平的 agent：這件事是公司裡每個開發者都在做的，把它拿走。垂直的是試圖端到端取代人的，今天就是還不行。Dion 說有些 demo 能動，是因為從零給一個 to-do list 的 web app，可以一次做完。Quinn 同意。

## 別拿完成率當成績；頑固的人請按別人寫好的按鈕

[27:24](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1644s) 企業從「我死也不讓 AI 碰我的 codebase」，很快變成「不用這些工具就競爭不過」。然後要算 ROI。Dion 覺得早期用 completion rate 有點滑稽，後端一調，完成率可以差很多。他退一步看，很多時候不是給你完美的一行 code，而是不要卡住：能繼續拉著一條線往前，把任務做完，留在 flow 裡。

[28:34](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1714s) Quinn 說變化很大。很多人先說永遠不用，然後讓步成：等它和人類開發者一樣準再用。他愛問：那你的人類開發者有多準。對方把咖啡噴出來。他們不量。若量了，大概會不好意思。他們得懂企業的心理，尤其象牙塔裡的人，怎麼讓他們走下來。這不是一顆完美的按鈕，他們也沒有這樣宣稱，也許那也不是對方想要的。今天就有真的東西。客戶試 Sourcegraph 和其他 AI 時，會做一個快測：開發者花一天，也許十個人各用不同工具，試一批有代表性的任務。他喜歡任務真的難、在既有 codebase 裡、帶著開發者的混亂。看做完要多久、code 的品質，再做質性審查。他們贏過很多場。這開始有一點嚴謹。產出指標當然有，例如百分之多少的 code 是被寫出來的。他們量的是百分之多少的 code 被合併，門檻更高，因為過了 code review。

[30:10](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1810s) 他認為開發者最後不能再躲在產出指標後面。企業工程主管或大公司 CEO 眼中，軟體工程以外的每個部門都要報告：賺了多少、省了多少、降低了多少風險。開發者很多年靠「我們很努力，你不能量我們」過關，薪水又高很多。多數大銀行裡，職稱是 software developer 的人比任何其他職稱都多。這會變。開發者會被要求有業務影響，因為未來能切掉很多摩擦，更接近「我們做了這個產品，產生了這些營收」。開發者很聰明，懂業務，能跟客戶工作。新創裡從暗房裡的 coder 變成很會賣的人，說明這件事要高的 IQ。量開發者影響的方式，就是業務影響。Agent 讓你靠近得多。例子：codebase 要符合歐盟 Digital Markets Act，意味著 10,000 個變更，做成能少繳 1.5 億美元罰款。若有 agent 能自動化其中 95%，他們有客戶做到了，他會說那個 agent 值 1.5 億美元。這比「開發者生產力要怎麼量」漂亮得多。

[32:04](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=1924s) Dion 在 Google 看過誘因：職等要求某種技術複雜度，人就去做那個複雜度，而不是用最簡單的方式解決業務。另一個他喜歡的：產品有一部分在 IDE 裡，讓客戶看見開發者平均真正在寫 code 的時間。有人以為開發者一週工作六天、每天至少寫八小時 code。資料是每天寫一小時，其餘在會議裡。Quinn 說開發者其實想多寫 code，這是和主管對齊的地方。有人怕被量是壞事。沒有 CEO 希望開發者把時間花在會議或苦工上。燈一照，對大家都有幫助。業務影響更大，人也賺更多。

[33:57](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2037s) 團隊裡的 Steve Yegge 寫過一篇，標題像是 junior dev 之死，很會吸引點擊，後來改成頑固開發者之死。字幕作 Steve Yi、Stevie。他負責做過很多 Google 內部的 code search，是 Sourcegraph 的靈感，現在在團隊裡。他也提出 chat oriented programming。其中一個用途，是告訴企業象牙塔：開發者的工作在變。重點不是 AI 會做完全部工作。重點是所有開發者把它當同伴，它錯的時候一起走過去，熟悉它。他跟很多開發者和客戶談，自己也在寫，看這些東西怎麼運作。做 code AI 的人和一些開發者之間仍有很大的斷開。Quinn 一個朋友的公司相對 AI 前進、也相對開發者前進，即便如此，其他開發者仍很懷疑。他們說 AI 做不到。你問試過沒，他們說沒有。你請他們坐在旁邊看你做，他們想掙開。他有個三歲小孩，被抱起來時會全身發軟。那種感覺一樣。他們不想看見 AI 做得到。頑固消失得很快，Steve 想讓它更快。有時得對這些人很直：他們以為可能的方式，已經不再可能。Junior 是一種心態。可以是 50 歲的 junior，也可以是剛出校園的。結果很多最年輕的開發者，從一開始寫 code 就在用 AI 工具，反而有優勢。靠做來學。不是職涯前五年把期待放低。坡道變了，而且是變好。高 IQ、高驅力的人會在這個世界裡起來。訊息正在被收到。AI 明顯有轉變力，某人一改口說這其實不錯，你問他曾經反對過嗎，他會說沒有，我一直贊成。兩年後大家都會說自己早就知道。

[37:06](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2226s) Dion 還聽過懷疑者說，這像在跟一個很差、懂很少的 junior 配對。就算把它當 junior，那也是一個什麼都知道的 junior。每個人懂的區塊不同。他討厭 junior 這個詞。可以是這個技術的專家、那個技術的新手。他告訴過一些人：公司 monorepo 裡後端全是 Rust，他們是 TypeScript 的前端，以前從不碰 Rust，現在碰了，而且沒問題。它不是那麼 junior。也不完美，不是一顆按鈕，不懂你全部的意圖，你得跟它工作、告訴它事情。Prompt library 在這裡是很大的解鎖。在任何一間企業，他們的工作是贏過 100% 的開發者。不能說那 10% 沒救了，否則企業客戶不會高興。最後那 10% 頑固的人，不要叫他們自己寫 prompt。他們不擅長寫，這就是問題的一部分。讓他們按一個按鈕，跑團隊裡別人寫好的 prompt，生出一份好的單元測試。然後他們會說這居然真的可以。再去看自己得寫什麼樣的 prompt。常常有人說這不好用，一問用的是什麼 prompt，人又發軟。找出那個 prompt 之後，問題就很明顯。

[38:58](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2338s) 他在客戶現場，大投影機，一位很聰明的開發者走自己的流程，說這個不好用。他想摘要一份很長的 CI 錯誤 log。給 Sourcegraph 的 prompt 是 please explain this in detail。問題是太長，他只想要摘要。他們說那你叫它摘要呢。他說我有。摘要出來仍有點長，大約兩段。再問：若叫它用 50 個字以內摘要呢。他做了，然後就成了。這是他們不得不做的手把手。為什麼不是每個人都在用，就是這種事。整個行為要改變，有很多阻擋和處理。他們把這看成難的工作。他覺得 Tessl 也是。

[40:00](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2400s) Dion 說英文會有多少進到建造裡。需求文件和註解裡早就有。現在加上 chat 和 specifications，重點比較不是鑽某種語言的語法，而是把問題拆開、想清楚要做什麼。那就是開發。少做那些苦工是可以的，也是安全的。仍有很多事要做，而且該是更高、更有價值的。他的小孩一開始寫 code 就有這些。若把它關掉，對方會覺得你瘋了，像連語法高亮也拿走。Quinn 的一個好測試：公司面試工程師時，允不允許在面試裡用 AI。他認為答案該是絕對允許。Dion 笑說有人會說絕對不行。

[41:34](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2494s) 他覺得已經相當具體的是：現在有一張路線，可以迭代地自動化更多開發過程。很多重複工作可以做 agent。生測試不是 100% 準，但相當好。更新 changelog、切一個 release、做一個新的 UI 畫面，都可以。在企業裡看開發者最常做什麼、什麼能自動化，兩者的交集就是希望客戶能做一個 agent 去做的。還有很多工作，尤其是回饋迴圈：那樣做對不對，不對就再跑一次。這可以佔掉他們和客戶往後很多年。像是把軟體開發變成工廠。他說工廠是好事：不必再在家裡手工做。他想的不是開發者在工廠裡，是機器在工廠裡，開發者之後在輸送帶上拿到做好的東西。

[42:55](https://www.youtube.com/watch?v=ZTLSMN8eISs&t=2575s) 不清楚的是，取代某些端到端人類開發任務的聖杯，什麼時候會好到足以應付絕大多數開發。絕大多數開發發生在企業、複雜、賺很多錢、不能壞的 codebase 上。他們的想像是把一堆小的微自動化疊起來。不確定性很大。也有競爭中的想像：GPT-9 就會吐出完美的 code，不知怎麼就做完我們需要的一切。字幕作 gp9。他覺得那是空想。這是戰場。他們在招人。他說這字面是一個數兆美元的問題。
