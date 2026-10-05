# Instant PR Feedback Without leaving GitHub | Merrill Lutsky on Graphite

Guy Podjarny 主持。來賓是 Graphite 的 CEO 兼 co-founder Merrill Lutsky，字幕聽成 Mary Llutzki。片長約 46 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla，把 CLAUDE.md 聽成 claw MD，把 Claude Code 聽成 cloud code。Guy 說 Tessl 團隊在用 Graphite，而且喜歡。

- 原片：[YouTube](https://www.youtube.com/watch?v=kH_Z_k6hIwg)

## 一句話

Graphite 一開始解決的是人的 code review：把大變更拆成 stacked PR，審查和開發並行。Sonnet 3.5 之後，PR 堆成山，資深工程師埋在裡面。他們做了 AI reviewer，現在叫 Graphite agent，以前叫 Diamond，幾秒內做第一輪。Merrill 不認為終點是自己成為最好的 codegen。他要的是控制平面：很多 agent 生出變更，人在 Graphite 裡審查、合併、把知識餵回去。人的 review 會從逐行檢查，轉成教學和知識共享。

## Outer loop：從 Google 的做法到一支 reviewer

[1:21](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=81s) 他們從一開始就盯 code review，以及 PR 草稿完成之後、到 production 之前那一段 outer loop。靈感來自 Google 和 Meta 的內部工具：幾萬名工程師跨時區協調，還能那麼快出貨。Stacked PR 是借來的主要創新。大變更拆開，先把前面的片段送審，人繼續在上面開發。審查和開發拆開，並行。第一章是把這套放到 GitHub 上，給每間公司。

大約一年半前 Sonnet 3.5 出來，軟體怎麼被做出來整個變了。每個團隊在用 Cursor 和 Claude Code。原問題重要了十倍，同時也有了 AI 這個工具。有些情況 PR 多了十倍。每個工程師開著一堆 Claude Code 視窗同時做。功能做得比以前快得多，結果是一座等著審查的 PR 山。客戶說，很多最資深的工程師現在埋在初階同事用 AI 轉出來的 PR 裡。既有工具幫得上，他們知道還得做更多。

[4:38](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=278s) Graphite agent 要把人類 reviewer 的很多工作交給 AI：抓 bug、小挑剔、風格不一致、自訂規則、安全漏洞。做第一輪，作者幾秒內拿到回饋。人還在迴圈裡，但看的是更高階的問題，不必在每一行上挑。許多頂尖客戶已經擴去用它。大的變化是把 chat 放進 Graphite 的 PR 頁。你可以當場跟 agent 協作、請它改、問它問題，它也能進 codebase 找 context。PR 從一個驗證點，變成協作的地方。

## 看得懂 diff，還看不懂整座系統

[6:05](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=365s) 它很會找 bug 和邏輯錯誤。有一類 bug 人眼不容易立刻看到，型別檢查也抓不到，AI 反而好。風格指南、安全漏洞也行。至少在看 diff 的第一層，人 reviewer 做的大部分它做得到。

還不行的是更高層的架構決定。那仍要一位想著整個系統的資深工程師。Context 還不夠，雖然在變好。他們在探的另一個方向，是驗證這次變更 end to end 到底有沒有做該做的事：agent 在一台機器上把它跑起來、點過去、錄影、附在變更上。訓練集裡代表性不夠的語言比較難，偏門的更難。Kotlin 目前特別差，他們不知道為什麼，在 mobile repo 裡常常看到。

[8:39](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=519s) Guy 問，架構的限制是推理還不夠，還是相關資訊還沒送到模型手上。Merrill 說是後者。資訊若完美，推理在。好架構的考量來自很散的地方：兩年前建系統的某位工程師腦子裡、一份閒置很久的 Notion 文件、組織裡的部落知識。他們在做的，是把一次變更的這些 context 和 provenance 帶進 PR，讓 agent 有足夠的東西在那個尺度上想。他認為模型本身已經接近，甚至已經到了，前提是資訊對。Guy 補了一句：什麼叫好架構，訓練資料大概也比較少。Merrill 說這點公平。

## 分不出是誰寫的，規則是誰的福音

[10:24](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=624s) 產業沒有共識的標準，能在 git history 裡記下這段是不是 AI 寫的。他們看到工程師每週改動的行數，比 2023 年底多了大約 70%，認為很大一部分該算到 AI。GitHub 發表過，上面超過一半的 code 現在是 AI 生成的。依趨勢，他猜更接近三分之二到四分之三。沒有打到 Dario 說的 9 月 90%，字幕把名字聽成 Daario，但那條路很清楚。目前分不出 AI 和人。頂尖工程人才的組織裡，AI 的品質往往低於那裡的中位數工程師。也有些組織，AI 已經好過中位數。很多 Graphite 客戶明確還不是這樣，所以特別要檢查、打磨 AI 寫的 code。

[12:24](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=744s) Code review 很多是制度知識和風格。客戶可以自訂 reviewer，規則用英文，或給 regex，幫它鎖定某類問題。人比較喜歡自然語言，而不是 regex 那種受控的寫法。若 repo 裡有 CLAUDE.md 或 Cursor rules，他們會吃進去，保持一致。標準還在長，他們盡量把看得到的都吸進來。評論會標這是不是某一條規則觸發的。產品裡看得到哪些規則觸發最多、抓到什麼、沒抓到什麼。

誰來填這些。通常是 developer productivity 或 developer infra，他們是 GitHub repo 的 admin，也替組織設定 Graphite。大公司像 Shopify，他們會跟 Dev Infra 緊密合作，接對 context、把知識設好。小團隊則像 GitHub 一樣誰都能加、誰都能改規則。好處是輸入多，比較快收斂到一套。大組織則該集中，他們也要支援。

## 不是掛在 GitHub 上的一支 bot

[16:26](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=986s) Guy 說 Graphite 最早贏在使用體驗和方法，把難做對的簡單事情做對了。AI review 這塊，別的建造者描述起來會很像。怎麼才不是 LLM 外面的一層 wrapper。Merrill 承認空間裡很多人看到同一件事：AI 生成的 code 變多，就有巨大機會幫團隊審得更快。他認為差異是 Graphite 跨過 pull request 的整個生命週期，不是一支在某一個點留言的 bot。從 PR 建立開始：把變更描述出來、產生 description、拉對的 reviewer、做 AI review、幫作者迭代、幫 reviewer 看懂並帶著走、CI 失敗時幫忙、催作者接受變更再跑一次、解 merge conflict。還沒完全到。他看 Graphite agent 應該像一個同伴，把變更護送過每一步。

就算只看 AI review，最好的互動形式也還沒出現。生成那邊已經快速換過好幾代：Copilot 的 autocomplete、Cursor tab、Cursor agent mode，然後介面離開 code、只剩 Claude Code 的 prompt，現在是 background agents。在 GitHub 上留言的 bot，對他來說只是 autocomplete 的第一版。它的好處是人在哪它就在哪，是對的起點。再往下還早。把 chat 放進 PR 頁，是他們相信的下一步：不是非同步留下靜態評論，而是你一邊把 PR 準備好、一邊跟它一起改。

[19:39](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=1179s) Guy 問界線會不會糊掉。用了 Graphite 之後，Claude Code 或 Devin 還會不會留在流程裡，還是最後變成一個端到端產品。Merrill 說很難知道，每週都在變。模型廠商的興趣也分層。有一陣看起來 Anthropic 會專心做 code generation，OpenAI 走消費者，後來 OpenAI 又說什麼都要擁有。他的信念是，到目前為止，他們擁有應用，主要是因為那能把訓練資料餵回去、好做 RL。那是基礎模型公司的邏輯邊界：拿到好訓練資料所需的最小範圍。

Graphite 預期，誰在生 code、誰在提供 review agent，都會有很多競爭。若別人夠好，他看得到一個世界：Graphite 不必做第一方的 review agent。目標是介面層，是跟許多 agent 互動、控制它們改你的 code 的最好地方。每個 SDLC 任務都可以有最好的 agent，另外還有一個控制所有 agent 的 control plane。後者才是他們看到的最大機會。AI review 他們得自己做 agent，因為外面還沒有夠好的替代。Background agent 做 code generation 的公司很多，他們沒那麼想做一支 Graphite codegen agent。他們寧願你在這裡下 prompt，agent 出去開 PR，你在 Graphite 審查、在 Graphite 合併。建立、審查、合併都從這塊控制平面發生。

## Stack 沒有變多餘，review 也不只是驗收

[23:36](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=1416s) Guy 挑戰 stacked PR。人要審查，所以你得先發表一塊工作。若審查的是 AI，他想在開發過程中就消化，不必等到開 PR。那甚至可能降低 stack 的價值。Merrill 反過來說：AI 在生 code 時，stack 更有價值。Background agent 若放著跑，結果是幾千行、看不懂的 PR。PR 介面可以引導人看懂變更，但人仍得檢查。多個 agent、或更長的自主工作，變更必須能被理解、能被消化。他們做了 Graphite MCP。很多客戶讓 agent 自己建立 stacked PR，就是因為另一頭更好審。Guy 說這正好是 agent 的情況：它們不想等，你想逐步審。審查若有大修正，agent 可以退回那個點再繼續，人做這件事會很煩。Merrill 補可回復性：小塊、清楚的歷史，比較容易找出是哪次變更引入問題，回滾也更準。

[27:01](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=1621s) 很多人把 code review 的價值只看成驗證。那是主要好處之一。另外兩件常被漏掉。一是在團隊裡共享知識，讓其他工程師知道什麼正在進 production、什麼在變。二是教學：你拿到回饋，改進自己怎麼做專案。驗證和品質，AI 可以接。後兩件在很多方面比以前更重要，因為連開 PR 的工程師都可能不完全懂這次變更。更需要一個時刻把 codebase 裡在變什麼講清楚，告訴別人哪裡好、哪裡不好、想帶走什麼，再把系統性的東西餵回 reviewer，變成以後該看或不該看的規則。人的 review 會從驗證，轉向教學和知識共享。他甚至覺得，今天做 code review 的理由裡，這兩件可以說比驗證更根本。

Guy 說完全自動的審查，最後可能想當成 agent 開發的自然一步，而不是做到一半叫到另一個系統再回來。也許透過 MCP 不只開 PR，還把 review 跑完、把結果拿回來。長期剩下兩件事：stack 是時間點的分界，即使不是逐步審；以及拿已完成的工作來學習、指導 AI。那樣大概不能再審 code 本身，要審對 code 的分析。未來若只剩讀 code、評論、挑剔，會很不愉快。Merrill 內部的框架是三步。第一步他們已經有點在離開：IC 主要自己寫，或用 tab complete 生，review 是很仔細地看每一行。第二步正在進入：工程師的工作更像 engineering manager，指揮一隊 agent，它們交回變更。你仍會看 code，但很多是在看設計文件、架構、更高的點，需要時再鑽進去。細節更多由 AI review 處理。第三步還沒到。若一切夠好，會像跟外部開發代理合作：你給高層 spec，拿回完成品，審的是那個成品，也許根本不必看底下的 code。現在在第一和第二之間。接下來幾年有機會從二跳到三。Guy 說這和 spec-driven 對得上。前面定義得越多，後面要審的越少，或者審查變成：你有沒有遵守規格。

## 意圖要進 PR，座位費還能撐多久

[33:10](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=1990s) Guy 說 source of truth 就是這件事：CLAUDE.md 或風格指南，告訴審查什麼叫正確，以及組織裡誰在管它。Merrill 想把 chat history、prompt、agent log 放進 pull request，把對的 provenance 拉進來：spec 在哪、Figma 設計檔在哪、這次變更的意圖是什麼。今天一份 PR description 不再夠。要 agent 做高品質審查，甚至對人，審查裡的主觀若有更多 context 會好很多。他反問 Guy：怎麼最完整地抓住一次變更的意圖，讓另一頭的 AI reviewer 或人消化得了。

Guy 說規格本身在演變：怎麼寫、怎麼讀、裡面有什麼。Merrill 剛才說的是從狀態 A 到 B 的那次變更。他們也想長期活著的 spec，不是只對眼前任務，而是你在做什麼、你想怎麼做，以及怎麼遵守。因為 Tessl 接很多 agent，同一份指引，遵守程度差很多。一個頂尖 agent 可能 80% 照做，另一個 30%，差別也許只是用詞。Sonnet 4.5 要的 prompt 和 4 很不一樣，5 出來時也和前代不同。字幕把 Sonnet 聽成 Sonic。知識和這份共同的真實需要能見度和可觀察性。Spec-driven 會變成新的開發範式，過渡期仍然很有影響。永遠需要審查，但被審查的東西會變。

[36:08](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=2168s) Guy 問定價。他認為 Graphite 目前主要仍按座位，按多少開發者在用。AI worker 不會自己買座位。協作工具歷史上按座位收費合理，買家現在仍錨在那裡。他們在探用量：PR 數量、被審查的 PR、行數，參數很多。問題是什麼時候該把創新點花在定價上、要不要領先市場。目前仍按座位走。他看接下來一年，若公司擴張時不再招那麼多工程師、更多工作交給 background agent，就會更認真考慮用量制。他相信終態是用量，只是何時拉那根桿子。

Guy 用以前在 Snyk 的帽子說，他們保的是開發者的工作，貢獻的人越多，按人收費越合理。結果定價，例如每修一個漏洞，會立刻吵什麼叫漏洞、它當時算不算。按掃描次數收費，會激勵人少掃。審查次數對 Graphite 也棘手。Merrill 說有兩股力。他們不想懲罰自己希望使用者多做的事：多開 PR、做 stack。不該覺得因為照 Graphite 說的做，所以付更多。同時要對自己控制得了的東西收費。一位投資人，字幕聽成 goal Roger，是他在 Square 時期的產品導師，寫過 Google 為什麼按曝光收費，而不是按轉換或甚至點擊。你要收的是自己控制得了的。廣告文案很爛，使用者點不點進站，不是 Google 的事。Google 的工作是把廣告送出去。Completion 的定義也一樣。使用者輸入這邊主觀和變異太大，定價就難建模、難依靠。Guy 覺得好笑：AI 把開發者生產力的度量講得很重，人人都想按自己提供的生產力收費，前提是我們量得出那是什麼。

## 五年、十年後，工程師不是停在中間

[40:59](https://www.youtube.com/watch?v=kH_Z_k6hIwg&t=2459s) Guy 問五到十年後，以這為業的人還做什麼。Merrill 說會變成在高層定義體驗該是什麼、該用哪些技術、哪些硬問題要解，然後和 agent 一起找最好的解、迭代、交到終端客戶。更像 review，抽象層比今天的 code 高。有些情況仍得鑽進 code，知道什麼時候用什麼做法。有時 agent 告訴你，有時你告訴它們，像今天的團隊：不是每個人什麼都知道，人和 agent 同事一起找出解。

Guy 追問，若大部分時間在高層，會不會失去、或從來沒學過審 code 的能力。會不會停在一種幾乎會寫、又寫不到的 uncanny valley，得用別的工具補。Merrill 說這是大辯論。很多人今天不必懂 compiler，也不必讀 machine code。我們成功跳過抽象層。差別是那些層確定得多。他仍覺得學那些東西有原因，即使日常不用。每個 CS 畢業生現在都有 Cursor，和幾年前不同。樂觀的是人人更有產能、學得更快、做得更快、對這個領域更興奮。也可能有一整個新畢業的工程師階級，不再有能力往下一層抽象跳。

若現在有個 18 歲的孩子在考慮要不要讀 CS，他仍會建議走，但只有兩個角度。要嘛極深，成為一門深技術的專家，那需要很長時間和專門知識，AI 要很久才追得上。要嘛極寬：設計、商業、產品，影響和能力夠廣，才能更好地告訴 agent 該做什麼。他看到 product、design 和工程在不太遠的未來合成一塊。工程師的角色要嘛寬很多，要嘛深很多。以前那種停在中間範圍的做法，不會維持很久。Guy 說這是挑戰場，T 型在這個世界會有點難。字幕把 T 型聽成 t-shirt。
