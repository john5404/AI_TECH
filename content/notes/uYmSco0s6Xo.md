# Is Your Team Ready for AI-Driven Modernization? | Birgitta Böckeler

片長 56 分 9 秒，英文自動字幕。Simon Maple 訪問 ThoughtWorks 的 distinguished engineer Birgitta Böckeler。節目是 AI Native Dev。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Snyk 聽成 Sneak，把 Birgitta 的名字聽成 Brigitte。

- 原片：[YouTube](https://www.youtube.com/watch?v=uYmSco0s6Xo)

## 一句話

Birgitta 關心的是用 AI 把軟體做出來，不是把 AI 放進產品裡。Coding agent 把任務變大之後，人常常落後，一天前的 code 就已經像 legacy。真正的 legacy 更遠：沒有原始碼、資料庫方言換了、COBOL 還在。她不做一步把舊 code 餵進去換成新 code。先反向工程出一份夠完整的描述，再拿去做正向工程，每一步才用 AI。確定的升級交給 OpenRewrite 這類 code mod，LLM 補 pattern 蓋不到的地方。Amazon 說 AI 省下數千個開發者年，她懷疑重活是 OpenRewrite 做的。人不懂 codebase 時，一個不夠好的 prompt 會把重要的 code 刪掉。

## 雷達上進 adopt 的，只有 RAG

[2:00](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=120s) Birgitta 整個職涯都在軟體顧問，二十多年，她說自己是會做 PowerPoint 的顧問，但一直動手。在 ThoughtWorks 快十三年。最近兩年全職泡在 generative AI 和大型語言模型怎麼給軟體團隊用，有趣，也很緊，像在炒作的壓力鍋裡趕進度。讓她著地的是 Technology Radar。ThoughtWorks 一年發兩次，是他們在客戶那裡當下看到的快照，不是大型市場報告。通常大約 100 到 110 個條目。上一版超過一半和 generative AI 有關。Simon 問今年有沒有進 adopt。她想有一個在 assess。Adopt 裡的是 retrieval augmented generation。Generative AI 一開始在 assess，因為是新技術。RAG 夠高階、夠抽象，就算技術還早，也可以進 adopt，因為它是大家現在都在用的一般技法。工具則沒有。

[5:28](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=328s) 她先把範圍釘死。她是有效軟體交付的領域專家，把 AI 用在這個領域，不是把 AI 做進產品。前者影響軟體開發裡的每一個人，後者只影響做那種產品的人。Simon 說這差別很細，但 AI Native Dev 在乎的是工作流。若它進了 production、變成應用的材料，那就不是工作流。若它幫你建造和交付，那是工作流裡的工具。兩者有重疊：大組織若值得自己托管模型、做 guardrails 和 evals，做產品要用，做內部工具也可能要用。分開看，有時才聚焦得起來。

## Agent 把任務變大，人開始落後

[7:44](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=464s) Agentic 這個大詞常常指很不一樣的東西。她說大約二月、三月才真正爆發。Coding assistant 在去年秋天，她說十月、十一月，開始放出更 agentic 的工具。有些開源更早。Cursor、Windsurf、GitHub Copilot 大概是去年底。進到大家意識裡，是 vibe coding 那個迷因。Karpathy 的推文是二月的第一週，她說六個月前。Simon 問是哪一年，感覺像五年前。

[8:45](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=525s) 在 coding assistant 裡，這表示模型拿到更多工具。以前大致上是改檔案，而且常常一次一個。現在可以改很多檔，更重要的是相當自主地進終端機、跑指令、跑測試，並立刻對回應做反應。一次能做的任務變大了。一種是開發者在 session 裡來回。稍晚一些產品放出可以丟到背景的自主 agent：OpenAI Codex、Cursor 的 background agent。Devin 很早就是第一批。現在愈來愈多產品這樣，你把它送出去，中間不插手。和自己在流程裡一起做，是很重要的分別。她覺得開發者自己一起做，目前仍比較常見。再加上 MCP，更強：可以碰測試資料庫，可以在瀏覽器裡看網站。

[10:22](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=622s) 任務變大之後，一切又不一樣。以前她想的是一個函式、一行一行，AI 讓她更快。現在 AI 做太多，她常常落後。開發者得想出更精緻的新流程，才有合理的東西出來。Simon 說我們變成那些流程的管理者。Patrick Dubois 寫過把這些 agentic 流程平行化，尤其是非同步的：一次放出五條，回來再審。也許做不同的事，也許做同一件事，你從中挑。

## 沒有原始碼，就先做出一份描述

[11:33](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=693s) Simon 說人很容易一直按接受，和 code 不再親密。他總說一天前寫的 code 就是 legacy。任何你沒有在根本地、積極地改的 code，都算。真正的 legacy 更遠：原始碼可能不在了，應用還在跑，你想換框架、換平台。這些是非常不同的挑戰。工具和流程該不該同一套。

[13:14](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=794s) Birgitta 說 legacy migration 正好讓你坐下來想怎麼用 agent，不像日常 coding agent 已經有的那些做法：計畫、拆開。大的倡議，例如要對 50 個元件重複做的事，可以寫可重用的 prompt。這時前面分開的兩塊又疊上：你想建一個 agentic 系統來幫這個倡議，就得更懂怎麼自己做 agent、有哪些工具。

[14:28](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=868s) 最近一個客戶說，這個應用的原始碼已經沒有了。壞掉的廠商分手，她後來發現並不罕見。很久沒能升級。Simon 補，也可能是安全漏洞或一般維護。她說營運風險很大。他們連資料庫都不能升，因為新版本的方言有大改，code 裡的 SQL 改不了。她一次又一次看到，包括仍有大型 COBOL 的客戶：通常不是把 legacy code 餵給模型，一步換成新 code。兩邊離太遠。你看平常怎麼從 A 到 Z，從 COBOL 到 Java，再問每一步怎麼用 AI。這裡一樣。先反向工程：做出一份完整描述，這個應用現在在做什麼。有了描述，再做正向工程。

[16:10](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=970s) 有些資料捕捉在 AI 之前就是 legacy migration 的典型做法，例如 change data capture。一個實驗是在資料表上放 trigger，每次 update 和 insert 記進 audit table，看運行中的應用發生什麼。若是事件系統，就抓事件。現在還可以讓 AI 瀏覽應用，網頁比較做得到，別種介面不一定那麼容易。它描述看到的東西，走各種點擊路徑。每次點完，去資料庫的 audit log 看按那個鈕改了什麼。Simon 說這像鑑識。

[17:28](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1048s) 她發現不必先有一個巨大的平台。她也懷疑，需要做這種鑑識的老系統，每次都會不一樣。SQL、COBOL 都有很多方言。ThoughtWorks 有一個帶去客戶的 accelerator，每次都客製：有沒有 COBOL、有沒有 C、是不是某種方言，載進 knowledge graph，得到更豐富的資料集。客製的好處不只是語言。還可以依目標決定還要載什麼。若用 LLM 把功能描述補進圖裡，問 codebase 在發生什麼、XYZ 用了哪些驗證，回來的是功能上的答案。更多人不想知道函式或模組的名字，只想知道功能。也可以用來找能力之間的縫，看怎麼拆開。很大的 codebase 或很特定的目標，才走這種客製。

[19:58](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1198s) 那個丟掉後端 code 的例子，他們用的是現成的 coding assistant，指向手邊有的東西，再加幾個 MCP。瀏覽網頁用 Playwright 的 MCP，它知道 DOM，不只看畫面。她喜歡當場做小的 MCP server，其實很容易，尤其是以後可以丟掉的小工具。資料捕捉那個，MCP 只提供現在的時間戳，以及查那張 audit table。Agent 先拿時間戳，按一個鈕，再問從那個時間戳之後改了什麼。Coding assistant 加 MCP，就能組出你要的流程。每個 legacy 情況都有點不同，這種彈性有用。

[21:29](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1289s) Simon 問目標是做出規格，還是給 AI 足夠資訊去開發新功能。她說第一步，他們叫反向工程，就是做出非常完整的描述。有了描述才能做更多事。可以拿去給主題專家核對對不對，因為你可能根本沒有全部資訊。那個沒有後端 code 的客戶，他們不知道後端還藏了什麼、有沒有呼叫別的服務。網路資料他們抓了一點，但不是服務之間的。反編譯之後，看到像是 mainframe 呼叫的跡象。鑑識做了，還需要一個活在那個年代的人來複核。描述也可以再補上你想現代化或想改的東西。

[22:57](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1377s) ThoughtWorks 有一個團隊在做開源的病歷系統，存在很久，前端仍是 Angular 1。技術棧急著升，還想更符合病歷領域的一個標準，也想改善前端長什麼樣。他們會走過前端元件，描述今天在做什麼，再補上標準要求和想改的 UI，然後用那個去生成新的。仍在開發者監督下，但開發者會快很多。

## 沒有測試時，風險評估不會停

[23:47](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1427s) Simon 說 legacy 裡 what 和 how 綁在一起，很難分這是故意的行為還是只是實作。測試是知道變更沒有回歸的好方法。有原始碼已經很幸運，更別說帶著好測試。那個真實案子完全沒有測試。就算後端某處有 unit test 也幫不上，因為是單元層級。真正有用的是一大套端到端測試。他們也看過 AI 能不能加速做出她稱為 fidelity fitness function 的東西，也就是一套端到端測試，用來測對等，可以同時指向舊應用和新應用。她說這是在用漂亮的詞。Playwright 這類瀏覽器測試對 DOM 裡不同的 selector 寬容很多。理論上 AI 還能更有彈性：叫它在某一欄找加號按鈕，它會去找，你甚至不必用 selector。想法是把 AI 生成的規格拿來當輸入，更快寫出那套端到端測試，最後能同時指向舊的和新的。瀏覽器測試本來就出了名地不穩。再加非確定性，不一定有幫助。他們還沒推到能說這真的可行。她有點懷疑，但也覺得有潛力。

[27:18](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1638s) 整體是不斷的風險評估。AI 搞錯的機率、怎麼補、怎麼找更多資訊，例如反編譯 binary 看有沒有漏。應用多複雜，錯了的業務衝擊多大。經典的 legacy migration 發布策略仍在：能不能分段上，或新應用在給使用者跑的時候，把新結果和舊結果比。這個應用不算特別複雜，是一堆表單，那是好消息。更複雜就得在風險評估和緩解上花很多工。

[28:24](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1704s) 簡單那個，他們只做了做法的開發和評估，還沒真的開始建。她對結果印象很深。手上有前端 code、schema、stored procedure、binary 和截圖。很快就得到一份全面、而且說得通的描述。兩位同事鑽進反編譯的 binary，把 assembly 餵給 AI。前面有很多手工：拆成多塊，因為不能一次全餵，assembly 又非常囉嗦。有些線索，例如看得到 stored procedure 的字串名字。他們和 AI 一起對 assembly 推理，提出假設，找到他們相當有信心的那段 code。這主要是替先前 AI 推論出的結果增加信心。之後若做 change data capture，信心還會更高。他們發現似乎有 mainframe 呼叫，得去弄清那是什麼。她也驚訝大型語言模型能把 assembly 轉成人類讀得懂的 pseudo code。Simon 說看到 mainframe 呼叫很可怕。

[31:37](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1897s) 信心還有另一面。他們用的模型常常不太聽指示。做法是把問題準備好：這是前端 code、這是截圖、這是 schema，推論在發生什麼，或有哪些驗證。同一張表單跑很多次，看結果差多少。若每次大致相同，就相對有信心。再加上人的理智檢查。這樣才看得出工具的保真度：是完全出軌，還是給出說得通的東西。

## 重活常常是 code mod，不是模型

[32:35](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=1955s) Simon 問比較大的正向工程。COBOL 到 Java 很重大，但現代化裡不算最不尋常。框架升級、架構整個換，有沒有。她說框架升級就是前面那個例子，Angular 1 到 React，另外還有要一起現代化的東西。若只是技術升級，Java 語言或框架版本，沒有 Angular 1 升到最新 Angular 那麼劇烈，那是稍微不同的一類。有確定性的軟體能幫忙：code mod，例如 OpenRewrite，Sourcegraph 也能做很多。可以寫 recipe 和進階 pattern。有趣的是把大型語言模型和這些 code mod 合在一起。讓模型幫你寫升級需要的 pattern。確定性的 pattern 不夠的地方，再用 LLM 補。

[34:42](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2082s) 她記得去年某個時候 Amazon 有個大標題，說用 AI 做 Java 升級，省下數千個開發者年。底下用的是 OpenRewrite，一種 code mod 框架。她懷疑重活是 OpenRewrite 做的。她不是說 Amazon 那整套工具不好。她覺得把那些年全都算成 AI 省下的，有點誤導。AI 和我們早就有的好工具配在一起，魔法才發生。Simon 說這是把創造力和確定性混在一起。他們前幾天剛訪問 Moderne 的 CEO，對方做很多 OpenRewrite，談的是用 AST 真正理解應用裡確定的流程。大變更時，你要一個確定的是或否：流程還是一樣，或不是。AI 給不了那個。再用 LLM 的創造力提出修復，然後用比較確定的方法測。他說一次又一次看到這個組合。Snyk 和 Snyk Code，以及其他很多工具，也是確定性加在 AI 方案裡。

[36:44](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2204s) 她說軟體開發者現在得在機率上想得更多。不能再升級一個應用，是巨大的風險。換成有一些 bug 的風險，好過什麼都不做。你可以做不同的事來加速替換，並提高做對的機率，然後不斷想取捨、風險、縫怎麼補。

[37:16](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2236s) Simon 問，尤其是比較小的，會不會很快就沒有 legacy：與其做這一整套，為什麼不從頭重建，而且在比較現代的技術棧上會快很多。她說可能會發生。已經看得到的效應是，有數百或數千個微服務的組織。開發者做一個服務，大到某個程度，常常還不算很大，就說太大了、要拆、要開一個新的、看不懂了、推不了了。結果每個服務裡兩個實體，那也不是對的做法。也許該把服務內部的模組化做得好一點。這種心理反射讓她覺得，現在可能變成：看不懂了，用 AI 快點重寫。有時坐下來看怎麼讓它變好，可能更有效。再看。

## 五十個檔案改完，文字 diff 不夠

[39:13](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2353s) 人要怎麼變，才能繼續擁有並跑這個流程。她說這是大題目。大家都擔心新進這個行業的人沒有過去的疤。她沒有全部的答案。有經驗的資深開發者現在有責任想，下一代要怎麼長出來。有經驗的人不是從樹上長的。大家都是撞上問題才長出來的，例如凌晨兩點被叫起來，然後想下次不要再這樣。

[40:56](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2456s) 一個大挑戰是：我們不再理解 codebase 裡在發生什麼，那會不會是問題。有人說不是，因為 AI 也會維護它。她碰過相反的情況。一個不夠好的 prompt，加上她不知道 codebase 裡有什麼，AI 把重要的 code 刪了。她當時不知道該告訴它不要碰那裡。所以她仍認為應該大致知道有哪些元件、依賴是什麼、改這裡會有多少地方在呼叫、風險多大。她希望有更好的工具來審很大的變更。我們習慣看文字 diff，那 maybe 不再夠規模。也許用 AI 幫我們視覺化，把以前不願意湊在一起的自動資訊湊起來。以前是我自己寫的，我不需要靜態分析和覆蓋率，我知道我做了什麼。現在去吃午餐，把 agent 送出去，回來改了 50 個檔，她 maybe 想要一個儀表板，一種 impact analysis。不能只靠文字 diff。

[42:49](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2569s) Simon 問我們在審的是 code，還是決定。測試也許是更好的驗證，審核要抬到決定那一層。那是一段旅程。她說你還是得審測試。她看過 AI 做測試犯很多錯：測試什麼都沒做、mock 太多、測試資料裡假設錯了。你以為有一個綠的測試，它測的卻是錯的東西。尤其改了很多的時候，怎麼快點發現。Simon 把偏差也放進來。她說有 AI 的偏差，也有我們的。寫 code 時她不一定叫它偏差，但她看過它用假設把她 prompt 裡的縫補上，而且它們非常 sycophantic，很想討好、把任務做完。領域邏輯上會不會把有偏差的東西做進應用，她還沒想過。另一邊是我們自己。AI 把每件事都說得很有信心。就算知道它是機器、是 stochastic parrot，仍會影響我們。它自信地說這是 best practice，眼睛掃過那幾個字，就覺得聽起來不錯。一旦拿到一個解，人會被錨住，出事時更難想像別的解。還有一種奇怪的沉沒成本：它生成很多不能好好動的 code，我們花兩小時去修，而不扔掉，因為它已經在那裡，而且快好了。這像 production 壞了時往前修，而不是還原。還原快得多。AI 的 code 常常也得這樣。技能是批判思考、理解這些機率，並且不斷越過這種會操弄人的技術帶來的心理效果。

[46:57](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2817s) 交付也會變。Simon 問交付經理在一切變快時該更意識到什麼。她說幾十年發展出來的好工程實務仍然很要緊。Generative AI 是不分好壞地放大。設置很糟，就放大那個糟。設置好，也許一切順利。你說的速度會是關鍵：組織的 pipeline 和流程撐不撐得住吞吐量上升。測試能不能更快，backlog 能不能填得更快。若起點是不穩的持續整合，或不穩的測試，怎麼辦。她覺得很多組織仍低估需要的地基，以及可重複的自動化當安全網。她當開發者，看到 AI 出軌，常常回滾，放手。交付經理或 product owner 看著團隊不斷吐出更多東西，周圍的零件轉得更快，不能只是回滾。她感覺我們仍低估正在失去的控制。人想要控制，有些地方 maybe 得放手，讓 AI 做它的事。她懷疑若太多 agent 在替我們做事，而我們不知道在發生什麼，會碰到麻煩。

## 鑑識要知道地下室裡有什麼

[49:27](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=2967s) Simon 問開發者以後怎麼辦，要不要去當農夫。她說此刻仍很需要經典的經驗和技能。他把 legacy migration 叫成鑑識。鑑識得知道往哪看，知道地下室裡的屍體在哪，把它們放進資料來源。Simon 用 Martin Thompson 的 mechanical sympathy：對底下怎麼建的有同情，才知道怎麼用工具和系統。同一個鑑識裡，資深的人會走到對的路徑，因為知道在找什麼。初級會問很多好問題，也會漏掉很多。今天的資深者對那個未來角色會裝備得好。初級怎麼學。是跟著資深者的鑑識走嗎。那是另一種學習。

[51:11](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=3071s) 她說 legacy migration 一直需要還熟悉某些東西的人，例如什麼是 application server。日常建造現在的應用時，那些技能出現在她說的風險評估裡。我能不能信任這段 code，該審多少，有沒有安全網，什麼會出錯，業務衝擊，這段多關鍵、複不複雜。這些是很傳統的開發者技能。你比較不會魯莽。同時，比較有經驗的人仍得累積和 AI 相處的經驗，知道何時能信、何時不能。她希望現在進這個行業的人，會用我們以前的方式學：犯錯，然後從中學。她希望大家比較魯莽、把錯誤的吞吐量拉高的那段，愈短愈好，然後都長出批判思考。她當實習生、還沒上大學時，在一間新創刪掉了 production 資料庫。當時只有一個環境。最終是他們的錯，讓一個初學者碰到。她學到不能隨便跑一支可能覆蓋所有表的腳本。Simon 說第一句大概不是「你們為什麼讓我做」，而是「糟了，怎麼救回來」。她說那是她這輩子臉最紅的一次。極端，但直覺和反射就是這樣練的：自己做錯，或看過別人犯錯，之後會想也許該往那裡看。她希望團隊仍有那種環境，幫別人不要犯那些錯。這是她比較正向的看法。

[53:41](https://www.youtube.com/watch?v=uYmSco0s6Xo&t=3221s) Simon 說，開發者仍得做的那些事保持一致，是好事，因為那才是難的。會變的是我們怎麼做。不必總是自己寫 code、自己建基礎設施或架構，很多可以用 AI 做類似的事。他想，會不會更快撞上那些痛。初級若讓 AI 做任何事，仍會撞上那些問題，也許更快。她說那 maybe 是把痛提前。他可以怪 AI，而不是怪自己在 production 資料庫上打了那條指令。他同意，不論實作怎麼變，今天最難的那些需求，未來很多年仍會在。
