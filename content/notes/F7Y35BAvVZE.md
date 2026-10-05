# From Code Completion to Multi Agent Coding Workflows with Itamar Friedman

Itamar Friedman 是 Qodo 的 CEO 和共同創辦人，Qodo 以前叫 Codium AI。片長 35 分 22 秒，英文自動字幕。他在以色列，七月下旬要搬去 New York。主持人住在美國 Boulder, Colorado。這是他第二次來。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Qodo 聽成 Kodto、Cotto、kodo，把 RAG 聽成 rug。

- 原片：[YouTube](https://www.youtube.com/watch?v=F7Y35BAvVZE)

## 一句話

Autocomplete 和 chat 是在放大開發者，人還在自己寫 code 的地方被協助。他要說服人的下一階段是端到端 workflow：agent 變成團隊成員，而且大量工作不在 IDE 裡。Vibe coding 會替你選一條路把功能做完，重型軟體還要可維護、合規、測試和 review。那些要高精確度，不能也用 vibe 的方式糊過去。他把生成叫藍隊，把驗證叫紅隊。紅隊靠的是前處理和後處理，不是再叫一次 LLM。

## 三代工具，第三代才離開 IDE

[1:03](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=63s) 他說自己在明天的場次，雖然 Qodo 今天和明天都做，他會混一點今天在做的事。他從 Guy 停下的地方接，再用自己的角度走一遍。世界上有好幾個 Codium，各走各的。他要講的是從 code completion 到 multi-agent workflow。他覺得這還不算未來學：multi-agent workflow 就是該走的路。

[1:51](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=111s) 橫軸他放的是企業開發者，最在意品質，也在意生成。Gen 1.0 是 autocomplete。他說這其實很舊，九年多前就有玩家，但真正的時刻是 GitHub Copilot。已經會開發的人很喜歡，可以做更多。最右邊那種人可能覺得 autocomplete 煩了很久，但多數專業的人是被幫到的。

Gen 2.0 是 chat，2.1 是 agentic chat。人開始喜歡這套技術和體驗。沒那麼專業的人也能做到以前做不到的。Autocomplete 時英文轉 code 已經可能，但不如 chat。他在概括：對一部分專業的人，chat 直接給你一個功能，會帶來風險或沒效率。你拿到一大堆 code，還得審。他說這是現在的 intelligent coding，不是在講未來。

[3:46](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=226s) Gen 3.0 是端到端 workflow。已經有 early adopter、公司、產品和 open source。他相信 intelligent software development 到了 game changer 的時刻。Autocomplete、chat、agentic 是放大器，在協助你。走到端到端，它們變成團隊成員。仍然非常早。

階段上先是 IDE plugin，然後是 IDE fork。都是在你平常寫 code 的地方協助你。端到端則是 AI 橫跨 SDLC（字幕寫成 CLC），產品不必只做在 IDE 裡。他說這正是 Qodo 的焦點。

## Vibe coding 只保證走到，不保證怎麼走

[5:16](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=316s) 他講了約四分鐘才提到 vibe coding，自己覺得不好意思。Andrej Karpathy 提出這個詞，其實沒多久。他看到它和 Sonnet 3.5 這類新版本、以及 Cursor 開始真的好用，時間對得很緊。現場影片也許聽不到，他改用嘴講。開發者 Alice 想著自己在 code 的哪裡、要做一個新功能。AI 來救場。開發者問要往哪走，那隻貓問你想到達哪裡。開發者說我只想把功能做完。AI 說怎麼走不重要，我帶你走一條路。條條大路通羅馬，或通到這個功能。順口告訴你：你那邊有個 bug，那邊也有。這就是 vibe coding。

[7:36](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=456s) X 和 LinkedIn 上他看到的說法是：兩個開發者用 vibe coding，生產力可以 5 倍、10 倍、也許 25 倍，同時 technical depth 也是 25 倍。字幕這個詞聽起來像技術債，他沒有改口，下文保持他說的 depth。他覺得誇張。自己在 X 和 LinkedIn 問了一圈。多數人認為兩個開發者有 5 倍生產力，這已經很驚人。Depth 他說自己沒講清楚，可能和以前一樣、2 倍、或比你預期再多 2 倍。多數人說生產力有增加。他沒有給「沒有增加」的選項。多數人也說 depth 在長。LinkedIn 上 depth 這一側更糟。

[8:55](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=535s) 他的理解是：簡單軟體，例如從零做一個簡單遊戲，什麼叫簡單本身在移動。簡單軟體只要 code generation，那是冰山一角。重型企業軟體底下還有可維護性、code coverage、合規、測試、best practice、規模、DRY。這些用 vibe coding 或聊天介面很難拿到。

[9:45](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=585s) SDLC 最基本的一段：把功能和技術 spec 計畫準，寫或生成 code，再驗證正確性、標準和規模。那是 testing 和 review。Qodo 分成藍隊和紅隊。藍隊是多數 code generation 投注的地方，UX 好，大家都愛上了。幻覺是以為計畫和寫 code 就夠了。Vibe coding 在某個程度上就是在這兩步之間迭代。做新功能很有效，既有 code 也行，從零開始特別好。現實裡尤其是重型軟體，大量是在改功能、重構、修 bug，而且新功能也要被測試和 review。紅隊是他說的明天。明天他指的是 2025 下半年，以及 2026，AI 給軟體開發者的下一個價值。Testing 和 review 要很高的精確度。若把它們也 vibe 掉，紅隊的目的就沒完成。

Workflow 在他這個脈絡裡可以是三件事，而且不互斥。一，把一個任務端到端做完：plan、write、test、review 當成一條。二，前處理和後處理，用來加強和驗證計畫、寫 code、測試、review，其中幾段或全部，或其他 SDLC 段落。三，覆蓋 SDLC 的不只一個面向。這聽起來像第一種，但他分開：端到端任務可以只是做完一個端到端的 integration test，或做完一次端到端 review；覆蓋多個面向則是又寫 code 又測試。要到第三階段、讓很多 coding 發生在 IDE 以外、並且把品質拉高，workflow 是必要的，尤其在紅隊。

## 前處理才知道不能連到 air gap 外面

[13:29](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=809s) 修 bug 時很多人就是叫 LLM 試試看。他看過這種感覺，沒有自己做那張圖，出處不好找。Bug 在等著反打回來。幾天前，提出 vibe coding 的 Karpathy 寫了另一面：他真正、專業上在意的 code，對比 vibe code。Itamar 把這翻成品質、可維護，以及他前面說的重型軟體。Karpathy 給了建議。第一條是放入相關的 context，能放多少放多少，或全部相關的。不只這一條，他列了一到六。Itamar 說那本身就是一條 workflow。他要聚焦的子流程是軟體品質，以及把相關 context 帶進來。兩者都落在前處理和後處理。

[15:54](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=954s) 回到 Alice。你要的功能大概不會給出完整 spec。若 spec 寫到 100%，那基本上就是在寫 code。你給的是指令，給多少取決於你多在意路徑。Vibe coding 讓 AI 選路。一條路會考慮 SLA、架構、best practice、規模和 spec，另一條不會。兩條看起來可能一樣，其實一條從後面進到城堡，一條穿過危險的地方。那些圖是他在 Google Slides 裡用生成圖片做出來的。他覺得很酷，中間有不少錯誤，仍然很好用。

[17:12](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1032s) 品質的問題是 best practice 和標準差很多。1 個、10 個或 1,000 個 repo，每一組都可能不同。Qodo Merge 是他們做 AI code review 的工具之一，可以自動為每個 repo 生成一份 best practice markdown。做法是分析過去 12 個月的 PR 討論，也從互動裡學。這是生成 code 之前、code review 之前的前處理，比叫 LLM「請看我的 PR，做一份 best practice」更嚴。他指回自己在 AI Native DevCon 的舊演講，談怎麼做 workflow，以及 AlphaCodium（字幕寫成 alpha codium）。

例子是給一個 Chrome extension 加 favicon，寫在 Jira 裡。Vibe coding 做完之後，Qodo Merge 建議：不要連到那個圖片資產，把它放進套件裡。他通常不想把 Chrome extension 的套件做大。建議來自這個 extension 過去的討論：它要做 on-prem，air gap，不該連到外面的資產。沒有那段前處理，LLM 做不到。他說 Qodo Merge 有 15 種 workflow，其中一個叫 scan repo discussions，就是產出這份 markdown。

## 沒有索引時，autocomplete 的指令是假的

[20:09](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1209s) 同一張票、同一個聊天介面的 Chrome extension，產品要 autocomplete：輸入斜線，列出他們某個工具的全部指令。Extension 是前端 repo，指令在後端 repo。他把這個前處理開玩笑叫成 James Bond 式的名字，然後改口：那就是 RAG，retrieval augmented generation，在你拿去生成 code 之前跑。生成 code、測試或 review 的當下，還有一條 just-in-time 的 workflow。他簡化成兩邊各兩三步。

一邊是事先把 codebase 變成 graph 和 vector DB。要依語言分析，也要依雲。Swagger 檔和 C++ header 不能同樣處理。還有階層式的 chunking。另一邊是檢索，workflow 完全不同。他建議在慣用的工具裡試三種問法：找相似的 code、找使用某個東西的 code、找做某件事的 code。

為什麼不把一切推進 LLM。很多論文說，即使你把 context 送進去，也要排對順序、分優先、組織好。那也是 workflow。他說你不會想靠 needle in a haystack。

[23:01](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1381s) 沒有 RAG 的前處理和後處理，拿領先的 code generation 工具去做這個 autocomplete，你會得到一個真的能動的功能。可惜畫面上那些要被自動完成的指令大多不是真的，多數是 hallucination。若有適當的索引，例如每晚跑，就能把真正的指令帶進來。一個 prompt 裡就能做出聊天的 autocomplete，例如 GitHub 上的 Chrome extension。

[24:12](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1452s) 他把點連起來。軟體開發大致是：定義要什麼，那是 spec；實作；然後測試、驗證、review。助理型 agent 可以幫你把 chat 做完。另外還有 agent 和 workflow。他這裡先不區分真正的 workflow 和 agent。它們做前處理，讓 agent 有依據。那是紅隊。也有專門的 workflow，把 spec 轉成 test、把 spec 轉成 code，可以非常細。你把這些 workflow 交給 agent，而 agent 就是會呼叫工具的 LLM。它會再去叫更專門的 workflow 和其他 agent。他要的未來是有信心的 vibe coding：一個 super agent，用一群更專門、建立在 workflow 上的 agent。同時有很多 IDE 以外的 workflow：code review、測試、生成、root cause analysis。他嘴上還說了一次 root code。那就是 gen 3.0。新手和企業看起來不同。新手可能拿到包好的東西，像 Bolt 和 Lovable（字幕寫成 bold）。企業拿到很多積木，要自己改到符合自己的 SDLC 和開發標準。

Qodo 在 qodo.ai。New York 的辦公室已經開了，Boston 也有。他們在積極招人。服務企業時，他們不相信只靠 chatbot 服務客戶，所以也雇人。

## 綠地仍然要舊 repo；context 不要整包塞進去

[28:04](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1684s) 聊天裡有人問：既有專案可以產出 best practice，有沒有 workflow 能指向一個 golden repo，或公司裡的其他 repo。他說從綠地開始supposedly 比較容易，vibe coding 可以就這樣很好用。他同時強烈暗示：即使從綠地開始，也可以用過去已經存在的資訊把 vibe coding 定住。這兩句有點矛盾，他承認。時間只夠講一種 workflow、一種做 best practice 的例子，還有很多，他鼓勵自己去看。

企業裡的綠地有兩種設法的第一種：新專案開在已經有倉庫的公司。以他們的經驗，即使開新專案，repo 也常常是幾千、幾萬，或更多。你會想用已經存在的 API、用被驗證過很多次的 code，原樣拿來，或放進 context，讓新專案也寫出重型、高品質的 code。

從零開始的新創，他說老實話：move fast and break things。他仍會建議用 best practice，甚至先用那些能從零幫你做出整個網站或幾個產品的工具，做一個 POV，看行不行。走下去再把 best practice 和知識帶進組織。

他們選擇讓 best practice 可控制、可觀察：給你一份像 rules 的檔案。本可以訓練一個 model，但你就看不到實際學到了什麼。這份檔可以自己填。不必叫 Qodo Merge 去看過去的 PR 討論或其他 repo。你可以從零寫自己的 best practice。

[31:35](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1895s) Min 問 gen 3 workflow 去哪裡看更多。他趕時間，是因為要去一場現場會議專門講 gen 3.0 workflow。建議追蹤他，X 上是 itamar。也許會做 webinar。搜 software 3.0，在 Google、Perplexity 或其他地方會有東西。再搜 agents versus workflows。他這兩個詞常互換，其實互補、但是不同。

[33:06](https://www.youtube.com/watch?v=F7Y35BAvVZE&t=1986s) 最後一題是額外的 context 會歪：Jira、文件。Code 比較像真相，它是正在跑的東西。其他那一大團怎麼辦。他理解成：code 可以很大或很小，旁邊還有 Figma、技術設計、Jira 裡的 specification，也許還有寫在 Tessl 裡的 spec（字幕寫成 Tesla）。你想把它們吸進來。大致兩派。一派把一切推進愈來愈大的 context window。另一派用進階的 RAG，以及他說屬於明天的 agentic RAG。口音讓他一直說成 rug，他道歉並改口。Agentic RAG 會在巨大的 context 上跳，抓到對的那一份。他說 Qodo 和其他公司都離真正進階的技術很近。他認為未來是 RAG，不是全塞進去，因為 needle in a haystack，以及其他他不確定很快會被解決的問題。主持人以為又多了一個叫 rug 的檢索縮寫。
