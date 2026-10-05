# The Missing Gap In Workflows For AI Devs | Baruch Sadogursky

Simon Maple 在斯德哥爾摩的 AI Focus 訪問 Baruch Sadogursky（字幕先聽成 Sadagursky，他確認唸法接近）。這場會是 Matthias Karlsson 辦的，從 JFocus 分出來，兩人都去過很多次。他們認識快二十年，ZeroTurnaround 早期就認識，Baruch 2010 年代初在 JFrog。前一晚的講者晚餐上，Baruch 說 Simon 在 Tessl（字幕聽成 Diesel）做 spec-driven development，跟他想的是同一種語言。片長約 48 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=IROQbZJt54s)

## 一句話

Vibe coding 各種口味，少一點 vibe 或多一點，最後都是不信任生成的 code。不是有人要害人，是人本來就不會像看自己寫的那樣看別人寫的。機器沒有職業標準。Baruch 的補法不是把 code review 做嚴，而是把幾十年的 guardrail，也就是測試，放到前面，而且不要讓猴子來寫測試。人讀得懂的 spec 編譯成測試，測試鎖成唯讀，再讓 LLM 打字打到測試通過。他管這條叫 intent integrity chain。Code 可以丟，因為是猴子寫的，沒有人看過。

## 人不看別人的 code，機器又沒有標準

[1:06](https://www.youtube.com/watch?v=IROQbZJt54s&t=66s) Simon 問怎麼讓 AI 生成的 code 以容易的方式可問責。Baruch 說 vibe coding 的各種比例，都收成同一件事：不信任生成的 code。人很自然不會把全部注意力給別人寫的 code。Simon 補：vibe coding 時我們往往少寫測試，完整性更差，自己也不去驗證。不讀。相信 AI，或點過去說這大概就是那樣，看起來可以。

[3:40](https://www.youtube.com/watch?v=IROQbZJt54s&t=220s) Baruch 說這不是因為混進了 AI。同一隊裡你請他 code review，他看了覺得還行，就 ship。這很糟，也是軟體很糟的原因之一。多數軟體仍能動，是因為完整。兩個人之間的完整是人的完整：你是專業的，有標準，他信到一個程度，交給他 review 的 code 不會是絕對的垃圾。Simon 笑說自己很久沒寫 code 了。機器沒有完整、沒有標準，通常對自己在生成的 code 毫無概念。更糟。我們仍不會做嚴格的 code review，因為這不是我們做得了的。問題是怎麼把完整自動化，放進另一頭看到的 code。

[5:05](https://www.youtube.com/watch?v=IROQbZJt54s&t=305s) Guardrail 存在幾十年了，就是測試。把它們放到前面。然後就不那麼在意 code 的品質。可以寫測試，或生成測試，但要想辦法信任那些測試。一旦信任測試，就得信任通過測試的 code。Simon 說照這樣，測試變成最重要的那份 code：測試差，code 就差。Baruch 說那是好的 guardrail。下一問是我們也不想寫測試。測試若是生成的，同樣不信任，所以得讀。而我們不想讀 code。若測試定義軟體做什麼，需要發言的人比開發者寬。Product manager、業務利害關係人一定不會讀測試。他們才有比較強的意圖，知道軟體該做什麼。開發者只是把意圖放進 code 的 code monkey，會被另一種 code monkey 換掉。真正要緊的是 PM、業務和客戶。

[7:04](https://www.youtube.com/watch?v=IROQbZJt54s&t=424s) Simon 攔他。幾週前他在 DevOps UK 的 keynote 說，開發者仍會是創造者，做法會變，更多看規格、更少看 code。最後一張投影片是 keep calm and carry on，因為開發者得演化。結束後有人很擔心：怎麼能放那張片子，意思是我們不再看 code。那個人愛寫 code，安全區是 IDE，腦子極技術，愛挑戰和深度。Baruch 說他講的「不想看 code」，主要是不想看不是自己的 code。人自私、以自己為中心，聽別人說話時已經在想聰明的回答。他愛自己的 code，不太想看你的 review；一個月前自己的 code 也像別人的。AI 生成的 code 就是別人的 code。現在因為新鮮，會出於好奇去看，覺得精彩或很爛。六個月後生成的 code 更多，你只會說這是別人的 code。非技術的人更不想看 code，他們要看意圖：這個測試做這件事，我讀得懂。

## TDD 沒有接管世界，Gherkin 差一點

[9:33](https://www.youtube.com/watch?v=IROQbZJt54s&t=573s) 他猜測試用 code 寫、只有技術人讀得懂，是 test-driven development 沒有接管世界的原因之一。字幕先說成 DDD，他接著說的是 TDD。若只有開發者能寫、能讀測試，他的經驗是：我有問題，我偏行動，腦子裡已經看到演算法，我想去寫 code。事後寫測試確認 code 做該做的事，他不介意。若畫面裡只有開發者，一開始就從測試寫起對他沒有道理。

[10:34](https://www.youtube.com/watch?v=IROQbZJt54s&t=634s) 大約二十年前 behavioral-driven development 就是在處理這個。若測試不定義在 code 裡，而定義在 spec。BDD 的 spec 是一種準自然語言，叫 Gherkin：Given 一個情境，When 某事發生，Then 期望這些結果。人讀得懂，本來也希望人寫得了。PM、業務、甚至客戶可以參加。Simon 說 Agile 的 use case 很像，語言稍有不同：身為某個角色，我想做這件事。Gherkin 的美是拿演算法把 spec 編譯成測試。這往他們講的完整走了一步。技術和非技術的人可以一起坐下來寫。Spec 編譯成測試，測試就是 spec。Code 實作測試。通過測試，就是測試要的。測試是我們同意這應用該做什麼之後編譯出來的。你在乎的地方，測試愈多愈好。不在乎的地方，讓 LLM 推它想推的 code。若錯了，就是少了一個測試，少了一條 spec，少了一個 given-when-then。Simon 說那是沒被抓住的意圖。

[13:09](https://www.youtube.com/watch?v=IROQbZJt54s&t=789s) BDD 也沒接管世界，他覺得甚至比 TDD 更少見。他猜結構化的意圖對非技術的人還是太重。讀得懂，寫起來煩。跟業務和 PM 談，他們是自由的靈魂，想寫莎士比亞，不想寫僵硬結構。PRD（字幕聽成 PDD）像詩。他們不做，開發者更不會做。Simon 補另一個問題：BDD 的意圖和後面任何東西沒有硬連接，留給某人去實作。業務一變就過期，跟 PRD 一樣。沒人回頭看 PRD，因為過期了，code 才是 source of truth。

## 猴子可以寫 spec，不可以寫測試

[14:31](https://www.youtube.com/watch?v=IROQbZJt54s&t=871s) 若從 spec 一路自動化到成品，spec 很重要，但沒有人想寫那個討厭的 Gherkin。AI 可以幫。有一份規格文件，隨便你叫 software definition document，請 AI 把 given-when-then 列出來。它會 hallucination。規格不會剛好是我們要的，兩個原因。一是它會幻覺。二是人很難用文字把意圖說完，腦子裡的 context，LLM 沒有。Prompt 和意圖之間有一道溝：我們叫它做的，和我們真正要的。所以規格不會完美。但它讀得懂，我們審得了。理論上也可以把測試宣布成 source of truth 來審，可是我們不想讀別人的 code，非技術的人根本不能。規格用你的語言。Gherkin 有幾百種語言翻譯，想用烏爾都語讀也可以。桌上的人可以對齊：規格裡的是不是我們要從 prompt 生出來的。不是就來回改，或直接改規格，它幾乎是白話。

[16:48](https://www.youtube.com/watch?v=IROQbZJt54s&t=1008s) Simon 說人會懶。Code review 也是：改動愈多，愈容易掃一眼說看起來可以；只有兩行，反而會質疑變數怎麼取名。一大份測試或規格，我們真的會看完嗎。可能需要 LLM 當裁判，當備份，人和自動化兩層。Baruch 說可以用不同 model：一個生規格，另一個問意圖有沒有被抓住，再迭代。人讀得懂的規格仍比測試或 code 好審。整條鏈是：prompt 說我想要一個做 ABC 的應用，請列出能滿足的規格。我們不信 LLM。它是非決定性的，只比隨機 code 產生器好一點。他的比喻是無限隻猴子、無限台打字機，終究會打出莎士比亞。LLM 只比隨機打字的猴子好一點，有時幾乎做對。你不能信任猴子寫莎士比亞，尤其不是第一遍。Simon 說這句可以當這集要帶走的話。不管你是 spec-driven、spec-centric 還是 code-centric，都能同意：別信任猴子寫莎士比亞，或任何名著，或 code。他看過一些 code，那不是莎士比亞。

[19:30](https://www.youtube.com/watch?v=IROQbZJt54s&t=1170s) 猴子生規格，第一遍大概不對。再找別的猴子。最要緊的是人看規格：它押韻，但不是莎士比亞。換一個稍有不同的 prompt，或直接把規格補上。有了規格之後，仍不能信任猴子從規格生出正確測試，而我們決定不審測試，太多了，又是別人的 code。Cucumber、以及一般可解析的 spec 的美是這裡不需要猴子。演算法把 spec 編譯成測試，每次都決定性。跑十次是同一份。用 LLM 會有細微差別，而我們不審測試，根本不知道錯了。這一段猴子退場。

[20:47](https://www.youtube.com/watch?v=IROQbZJt54s&t=1247s) 有了測試，再把猴子放出來，在打字機上打到測試通過。要保護測試，因為猴子會想改測試讓它過。檔案設成唯讀，放進 Docker，讓它們碰不到，怎樣都行。然後讓它們打，打到過。鏈就齊了。Prompt 保證抓住意圖，因為我們審過規格。Code 保證對上規格，因為測試不是猴子生的，而且 code 通過測試。從發想到成品可以百分之百信任。這是 intent integrity chain：意圖的完整被保證進了 code。

## 改需求就丟掉服務，規格才是正本

[22:07](https://www.youtube.com/watch?v=IROQbZJt54s&t=1327s) 發出去之後世界很美好。他說我們有黃瓜田，也有猴子，分開關、分開放。有人要改：bug、功能、新功能。怎麼不讓猴子去攻擊黃瓜。他說一個你最沒料到的詞：microservices。Intent integrity chain 最好的朋友。Code 夠模組、服務夠小，你就丟掉。新需求或 bug，回到 prompt，把功能加進去，或把意圖說得更準，整條重跑，新服務換掉舊的。Simon 說這是可組合推到極端。不是說這份 code 永遠不能再用，別的東西可能依賴它；是找到另一個用不同方式做這份工作的，換上或加進去。API 很好在 prompt 和測試裡定義。API 定了，每一塊都可換。因為你改好了 prompt，就能用更好的版本換掉每一個元件。Code 從一開始就是垃圾，猴子寫的，沒有人看過，只要測試過就不在乎。

[24:25](https://www.youtube.com/watch?v=IROQbZJt54s&t=1465s) 新功能從哪份文件改。永遠從 prompt 開始。Prompt 指向一份大概由 PM 維護的 software definition document。改那份文件，prompt 說我們有新增，整件事再做一次。規格跟著變。可以走很多方向：規格很小、範圍很窄，好換；規格模組化，prompt 只改一部分；改動小到一行，直接改規格比整段 prompt 容易。怎樣都好。最後要確定的是規格是 source of truth。人還讀得懂，可以同意、可以迭代。寫起來太難就用 LLM 生，沒問題。大家同意的是規格。換掉、編輯、重生，隨你。

[26:09](https://www.youtube.com/watch?v=IROQbZJt54s&t=1569s) Simon 說 Cucumber 他幾十年沒碰。變老的好處是挖出新一代不知道存在的東西。現在說 BDD，多數人會問那是不是新的 TDD。改既有的東西，Cucumber 好不好。想法是整份重做，所以 code 要小、要模組。不只為了 Cucumber。我們不看 code，重構時不知道它好不好、做沒做我們要的。需要新的測試，而測試我們也不看。唯一看的是規格。規格一改，下游全部重生，才保證對得上。然後 code 對上測試，鏈才工作。Cucumber 只是一個現成的想法。Gherkin 不完美。有些概念 Given-When-Then 說不出來，例如安全約束。效能勉強可以：給定某種負載，使用者變多時，回應要在某個時間以內，但已經很彆扭。其他非功能需求，尤其安全，表達不了。BDD 要表達的是行為，橫切的非功能關切很難寫成行為。他拿 Gherkin 和 Cucumber 示範，只因為它們在。若有更好的方式表達規格，為 AI、為這個問題而生，intent 那條鏈不變，只是 spec 到 code 這一段工具更好。不信任猴子、意圖有沒有被抓住、prompt 和意圖之間的溝，概念一樣。

## 非決定性不會被訓練掉

[29:18](https://www.youtube.com/watch?v=IROQbZJt54s&t=1758s) Simon 說那種硬化，以 LLM 被訓練的方式，大概不會發生。Baruch 說永遠不會，因為 LLM 依定義是非決定性的。神經網路得有這層自由，才能生出跟被問的不一樣的東西。它要猜一個跟你問的有關、但不是你問的那句的回答，否則就沒用。溫度太高，hallucination 更多。太低，它能搜正確答案的範圍被限制，你得不到想要的回應。除非溫度是零，而那會讓 model 完全不能用，非決定性行為是內建的。不信任猴子這件事不會消失。同一個請求會有不同回答，只有一個是對的，其餘依定義是錯的。Simon 說除此之外就是資源被用得太多。Baruch 說因為有這套框架和 guardrail，不信任猴子其實不是問題。讓它打不是莎士比亞的句子，直到莎士比亞出現。其餘丟掉。

[31:26](https://www.youtube.com/watch?v=IROQbZJt54s&t=1886s) 他說 Cucumber 和 Gherkin 大概三十年了。往前看，SDLC 要怎麼變。他們談的是很窄的一塊：怎麼信任生成的 code。後面整條交付，build 和其他，AI 可以改進，但大致在 intent integrity chain 之外，因為大多已經是演算法。Build 完全是演算法問題。會變的是抽象被抬高，也就是 Simon 在 keynote 講的演化：規格之後的一切，可以看成 build 的一部分。口說的、寫下的規格，被編譯成能動的 Java 或其他 code，build 再編譯到機器、到他說的 liquid software，再部署到資料中心。用一個非決定性系統做成 compiler，很浪費，也很好玩。再餵給下一個 compiler 做成 bytecode，再放到資料中心。從規格往下都是 compiler。規格變成我們的程式語言。字幕最後把其餘的東西聽成 LDLT，沒聽清那個詞。

## 專業不會走，Tessl 補的是行為以外

[33:56](https://www.youtube.com/watch?v=IROQbZJt54s&t=2036s) 誰能當開發者會變寬。今天的開發者呢，五到十年後長什麼樣。Baruch 說不會走、他覺得永遠不會走的是專業。專業是抓住電腦工程或電腦科學裡什麼做得到。非技術的人寫 prompt、讀規格，對機器來說可以完全不可想像。功能需求可以不切實際，非功能也是，效能需求可能永遠達不到。他們能學到一個程度：觀察到這做不到，但不懂為什麼。技術的人懂為什麼，所以更能坐在那張想像的桌子上。桌上有業務、客戶、產品、安全，每個人讀規格時都有話。有人說要把應用做得更快（字幕聽成 taste faster）。開發者說不行，而且說為什麼。得走另一條，重新架構。抽象抬到架構問題。有人在乎意圖，我要它做這件事；有人在架構側說我可以靠這些改變幫你到那裡。技術判斷還很多：你要生成的服務太寬，每次變更都重生會很浪費資源，也許該切小。不只是最終應用該做什麼，還要懂 intent integrity check 怎麼工作、什麼該進 code、什麼不該。跟今天沒有不同。我們對 code 品質有意見，變數名字不好、該這樣重構；對架構也有意見，誰該跟誰說話。翻譯過去稍有不同。在乎實作細節的人，可能會去在乎這套 compiler of compilers、也就是完整性檢查機制怎麼實作。在乎架構的人仍在乎架構，只是不談介面名字和實作類別名字，而談規格、微服務誰跟誰說話。技術專業對軟體工程仍然絕對關鍵。領域知識突然更重要。

[38:29](https://www.youtube.com/watch?v=IROQbZJt54s&t=2309s) Baruch 把問題丟回 Simon。Tessl 就是規格。他剛才說若有更好的東西抓住規格再翻成 code，聽起來 Simon 有東西能放進這條鏈裡還不完美的那一段。Simon 說這是他們在看的核心：spec 為中心，加上驗證、檢查和回饋，比較能說這就是我們要的。讓 LLM 補空，測試又是最重要的。Code 是可丟的產物，只要測試好，code 就被證明夠好。元件化也很貼。

[39:56](https://www.youtube.com/watch?v=IROQbZJt54s&t=2396s) Baruch 要一個實驗：用 Tessl 把這條 intent integrity chain 走一遍，拿為 AI 時代生的東西，換掉那個二十年、又不太合用的技術。他假裝是 PM，不讀 code、不懂 code，有一份像文學的 software definition document，要把它變成有完整鏈的 code。Simon 說三件。第一是 capabilities：這個軟體單元、這個元件要能做的那一組。可以請 LLM 把那份文學翻成給 Tessl 的 capabilities。第二是測試，而且測試是規格的一部分。每個 capability 底下，哪些斷言必須為真，或必須不為真，這件事才算實現。仍是同一套生成：LLM 讀文件，列出 capabilities 和測試情境。人，PM、業務、技術，一起審，說這不是我的意思。改文件重生，或就地編輯。第三是可組合：API，我怎麼向別人描述這個元件，微服務和可替換。API 是在告訴 LLM，我要這個元件被怎樣使用。互動和能力都要寫。這是那份規格的第三塊，字幕聽成 amorphic。這些大多能用 Gherkin 勉強寫，API 則真的不行。這裡有更強的工具。

[43:04](https://www.youtube.com/watch?v=IROQbZJt54s&t=2584s) 他看到的未來是規格和測試能生成，code 也能生成，但規格外面還能加一層 context。規格寫行為，不太寫純粹的實作。Context 可以說我在乎的：語言、效能、stack、可用性、無障礙。這正是 Cucumber 那條只有行為的鏈缺少的。於是一份規格可以生出多個實作版本。往下仍都是 compiler。

[44:03](https://www.youtube.com/watch?v=IROQbZJt54s&t=2643s) 安全問題或 bug，有時只在實作裡，後來才發現，也許少了一個測試。或第三方新漏洞。那是改實作還是改規格。Simon 覺得十次有九次不是規格變更：實作有 bug，要用這個版本不要用那個。Baruch 說在原來的鏈裡這仍是問題，因為我們不讀 code、不讀測試，更不讀規定版本的 build script。理論上可以寫「用的時候用 Spring Boot 3.5 不要 3.4」，但很彆扭，跟行為驅動無關，它不是行為。Simon 說若一次生出很多 stack，他不會要每個元件語言和 stack 都不同。某時要一致，因為攻擊面和把它們撐起來的力氣都會變小。一致性是實作細節，不一定寫進規格。行為變更去規格；部署和實作變更，改的是生成時的 context。Baruch 說這是他描述裡缺的一塊。若 spec 到 code 這段用 Tessl，非行為的關切可以用 Simon 想的那種原生方式加進去，不必濫用規格去裝它沒打算裝的東西。Simon 說否則幾乎是污染規格。他喜歡的是迴圈。SDLC 進到 production 之後，很多地方都能迴：品質測試、效能測試，一路到 production 的 observability，把有用的資訊拉回生成。驗證是它還符不符合規格、符不符合描述它的人在乎的事。描述得好，在乎的事寫在那裡，就可以讓猴子一直跑，直到規格被滿足，同時為非功能和業務需求做調整。Baruch 說這是雙贏：intent integrity chain，但比 BDD 有力，蓋住他覺得不舒服的問題，安全怎麼辦、你在乎又不想讀 code 的那些細節。他們把這集停在這裡，Simon 說還想看完 AI Focus 剩下的議程。
