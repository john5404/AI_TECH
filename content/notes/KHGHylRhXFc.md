# The Many Ends of Programming with Ray Myers

Ray Myers 談程式設計在 AI 之後可能走到哪裡。原片約 38 分鐘，英文自動字幕。字幕把 SWE-bench、OpenHands、Luddite、Claude Sonnet、LLVM bitcode、Markus Völter、Devin 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=KHGHylRhXFc)

## 一句話

未來的說法差太遠，連詞都對不齊。Ray 不打算贏一場 LinkedIn 吵架。他列出六種終局，讓人先認出對方站在哪一營。我們不會只走到其中一個。開發者也不該坐著等隕石。他要軟體好用、對使用者和建造的人有價值，而且一起工作的人好好待彼此。

## 早上九點已經在 LinkedIn 上火了

[0:12](https://www.youtube.com/watch?v=KHGHylRhXFc&t=12s) 他要的是比今天更好的對話。他自己有觀點，但重點是怎麼面對這個領域混亂、分歧的看法。他目前是 All Hands AI 的 chief architect。他們的 coding agent 叫 OpenHands，這一週剛回到 SWE-bench Verified 排行榜頂端，而且是前十名裡唯一的開源 agent。他說這場甚至不是一場 AI 演講，也未必是程式演講。這是關於同理和聽對方說話。若那讓人不舒服，AI 和程式會當背景。

[1:40](https://www.youtube.com/watch?v=KHGHylRhXFc&t=100s) 起點是 AI 懷疑者的一天。有人公開說很刺耳的話。Anthropic 的 CEO 講過很多職業；被大量轉述的一句是，12 個月內我們可能活在 AI 本質上寫出所有 code 的世界。他算算時鐘大概還剩 10 個月。他鼓勵去看同一軌 Cal Forser 的演講，談工程裡另外那 70%。待過這行的人知道，把 code 都寫完並不是整份工作。不管怎麼解釋，聽到這種話就會有問題。他半開玩笑地挑戰：若真的能寫所有 code，能不能換掉一台 mainframe 裡的 code。美國 GDP 的一半，仍綁在某種程度上使用 mainframe 的公司。挑戰的細節不重要。

[3:00](https://www.youtube.com/watch?v=KHGHylRhXFc&t=180s) 過去兩年他反覆說的是：language model 會弄壞舊 code。他用各種方式說，也在檢驗、找繞過去的辦法。他把這看成把 AI 帶進軟體開發的核心問題。Code 必須繼續 develop，而 develop 是 change 的同義詞。不能只想能不能做出新的 prototype，要問已經存在的東西怎麼辦。他把這些當成很基本的事實和問題提出來，換來的是被叫 Luddite（字幕聽成 lite）、被說頭埋在沙裡、沒看到大局。他全職在做 coding agent。若這樣還算 Luddite，他不知道對方還想要什麼。上一則貼文大多是正面回饋，但有人說他錯失大局錯到讀那篇會身體疼痛。這種話不好受。

[4:21](https://www.youtube.com/watch?v=KHGHylRhXFc&t=261s) 「你會被拋下」他看過幾百次：不去訂閱、不用對方偏好的工具，就會被留下。他覺得這比較像 Kirk Cameron 演的末日宗教預言 B 級片，不像有細緻的技術討論。他不喜歡告訴別人會被拋下。還有人臉不紅地說 resistance is futile，說話的人成就很可敬，作品他欣賞，也許就是這場的講者之一。他想起這句是《星艦》裡的 Borg 說的，不是英雄。若我們認真引用反派，還算站在對的一邊嗎？Jean-Luc Picard 不會說 resistance is futile，只有被 AI 控制、變成 Locutus 時才說。故事裡抵抗並非徒勞，他們抵抗而且成功。Picard 會說：若你站在真理一邊，抵抗到最後一口氣。然後他叫自己呼吸、慢下來。他發現自己在用情緒化的修辭回應情緒化的修辭。早上九點，已經在 LinkedIn 上激動起來。

[6:27](https://www.youtube.com/watch?v=KHGHylRhXFc&t=387s) 他選擇加入這場對話，是因為自己是 legacy code 的專家。要有進展，就得跟想得不一樣的人談。那些人也相信自己是對的，也是好意，也許同樣在警告某些事。一切繫於一個問題：在最近的 AI 變化、以及棋盤上其他棋子之下，軟體的未來是什麼。把大家聚在一起的觀點摊開，才認得出你在那一營、所以說法差這麼多。

## 六種終局，從已經發生的那一種開始

[7:46](https://www.youtube.com/watch?v=KHGHylRhXFc&t=466s) 六個名字：extreme completion、devocalypse、abstraction leap、uncharted waters、review economy、infinite pile of garbage。別人可以換名字。

[8:14](https://www.youtube.com/watch?v=KHGHylRhXFc&t=494s) 最保守、最少爭議的是 extreme completion，而且已經相當程度發生了。IDE 和編輯器裡的 coding assistant，以及最近自主性高一點、但仍綁在完成你當下戰術想法的 coding agent，操作的人是程式設計師。AI 負責打字。若只有這樣，工作不會根本改變。在既有 codebase 上要持續用，仍然需要大量寫 code 的本事。很方便，但不是很多人以為能達到的那種 game changer。

[9:11](https://www.youtube.com/watch?v=KHGHylRhXFc&t=551s) 例子是 Cursor。他在 Haskell 裡做自動完成：已有一個函式，要再做一個去掉前後空白的版本（字幕聽成 clean prime prime）。Claude Sonnet 吐出完全能用的 code，但他給的建議仍是很小的一層。用 Haskell 是因為型別檢查很強。他認為型別理論很適合拿來制衡 language model 輸出的非確定性。

[10:11](https://www.youtube.com/watch?v=KHGHylRhXFc&t=611s) 更 agent 的例子是他做的 OpenHands。前一天用實驗中的 Slack 整合：最近有一行 log 要用特定方式改，codebase 裡大概還有別處要同樣改，請它開 PR。幾分鐘後回來一張 48 個檔案的 pull request，它還自己寫 script 去找要改的地方。兩年前給他看會覺得荒唐。請求仍小、仍是戰術的，但有一個萬能的技術鏟土機，很酷。大約十萬行的 codebase 上，多個 agent 做得比這更複雜；這個例子算偏低。他仍把它歸在 extreme completion。方便、值得做，不會根本改變軟體開發這個世界。

## 對工程師是末日，對別人是樂園

[11:42](https://www.youtube.com/watch?v=KHGHylRhXFc&t=702s) 更極端的是 devocalypse，也就是 developer apocalypse。爭執裡常常一邊或另一邊相信這個。軟體工程師這個角色不再像今天，或變得高度專門、人數很少。但不是對每個人都是末日。對管線裡的很多人，這是 innovator's paradise：我們被消掉，就是他們被賦能。產品經理或創業者能從想法、設計，直接走到使用和販售。工程師會問，難道不是人人都想跟我們合作？他說我們有時很貴，而且脾氣差。這讓彼此更聽不懂。我們說它取代不了全部工作，因為你不懂我們做的事，還有規模和可持續性。對方會覺得你只是想保住工作。他確實希望朋友保住工作，但認為這不是唯一的理由。管理複雜的一堆軟體有真正的細膩之處。機器要讓沒有某些技能的人接手，還有很多沒回答的問題。

[13:43](https://www.youtube.com/watch?v=KHGHylRhXFc&t=823s) 要主張 devocalypse，得知道它實際上怎麼發生。下一個情境是 abstraction leap：像從前寫 assembly、現在寫更高階語言，再跳同樣量級的一階。我們現在想的 source code，對大多數人、大多數時候，會變成不方便的細節，專門程度接近鑽進 LLVM bitcode 或 assembly。很多人覺得已經看到了：prompt 是新的 source code，LLM 是新的 compiler，自然語言不知怎麼變成被維護、被結構化、被測試的產物。標準 source code 於是像 assembly。他站在反對的一營：這不夠可預測，擴不起來。小的、賭注低的情況有用，但 language model 不構成 abstraction。Abstraction 必須夠穩，讓你不必不斷被拉回實作細節。別人相信這個問題解得了。他不清楚怎麼解，但不是不可能。

[15:33](https://www.youtube.com/watch?v=KHGHylRhXFc&t=933s) 2022 年一篇他稱為 Parcel 的論文看起來有希望。61 行結構化 prompt，變成一整個 Lisp interpreter，大約 200 行 Python。函式不是用 source code 定義，而是做什麼的描述，加上輸入輸出的例子。parse 下面縮排著工具函式，縮排有很多層。他覺得這是認真想讓「prompt 即 code」更穩、更能擴。能不能產品化，已有一些嘗試，走著瞧。

[16:37](https://www.youtube.com/watch?v=KHGHylRhXFc&t=997s) 他覺得更說得通的 abstraction leap 是 DSL。你可能已經在用：SQL、正規表示式，上班族用的是世界上最流行的 DSL，Microsoft Excel。還有針對特定業務領域的。這是先投資一個很專門的程式環境，讓某些想法表達起來很有效率，賦能 domain expert。成本取捨在過去 20 年因 language workbench 變好了，那是專門用來做這種程式環境的工具；也有人叫 language-oriented programming。很容易想像 language model 會加快做 DSL，也給使用者自動完成。已有一些工作在做。右邊是他自己 YouTube 頻道 Craft Versus Croft 的影片，他說把 2025 年拿來在那個頻道研究 DSL。左邊是 Markus Völter（字幕聽成 Marcus Volter）的演講，談賦能 subject matter expert。Völter 是那個領域的重要專家，做過很多客製 DSL。Abstraction leap 底下仍然是 code，仍在已繪製的水域裡。

## 沒有 code 的未來，以及兩種他不想停住的地方

[18:42](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1122s) 下一個是 uncharted waters。很多人相信 AI 會做出甚至不像 code 的程式未來，也許是沒有 code 的 computing。他仍掙扎這是什麼意思。有人相信 model inference、神經網路當執行引擎、取代 CPU，會變成更普遍的計算模型。或者 AI 精巧到發明我們想不出來的新程式範式。他聽很多，但沒有更具體的樣子、也不能在規模上證明，就很難跟著跑。這個觀點夠普遍，必須承認：未來可能完全不像過去。若不能把它建立得更具體，他很難被要求去準備。

[20:02](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1202s) 拉回地面是 review economy，某種程度已經在發生。我們能製造愈來愈多 coding 建議，限制變成驗證它們的能力。Agent 和 Copilot 把有效性可疑的修改，以很高的速度推過來。極端版裡，工作只剩下檢查、review、再 review 機器的輸出。很多人覺得這未來很慘。他也不見得想要。他不把它當終局，更像中途站。若停在這裡，是沒管好瓶頸。要再往左：怎麼讓系統更多時候給對的建議，或先看最有價值的。人生看起來像一個大 choke point 時，theory of constraints 的思考過程很有用。

[21:42](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1302s) 最慘的是 infinite pile of garbage。AI 讓品質可疑的 code 變得很好做，產品隨時間變差，最後被技術債的山壓垮，連 AI 都幫不了忙挖出來。有一些支持我們正朝那裡去的材料。Uplevel 的白皮書做對照實驗：一部分開發者拿到 Copilot，bug 率高很多，issue 的進度卻大致一樣。若連感受到的產能提升都沒有、品質卻掉下去，會是很糟的結果。他們看到的就是這樣。GitClear 的白皮書偏度量：在他們的歷史紀錄裡，2024 是第一年，等同複製貼上的 code 多過被搬動的 code。看過那種結果的人會覺得可怕。可以反駁說 AI 輔助改了我們該期待的動態，重複也許不再那麼難維護。他認為要能自信這麼說，得先被建立起來。這些只是兩份白皮書，作者也許各有利害。

[23:46](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1426s) 不是人人這麼想。GitHub 不認為 GitHub Copilot 降低品質，認為它提高品質。他們的部落格也有實驗，這次不是在 production code 上。他們對品質的評分因使用 Copilot 而上升。他們，也許另外那些人也是，是有利害關係的觀察者。也許他自己也是。他想搞清發生了什麼。他希望以後引用的是真正的論文，最好是好研究的 meta-analysis，而不是只有白皮書。知道這方面工作的人，他想聯絡。在那之前，他認為更好的是去讀過去關於開發者生產力和 code 品質的研究，而不是以為 AI 讓我們可以把規則全部重寫、從零知識開始。有人會說現在品質可疑或 bug 較多，但會變好。他說要變好，得由我們把它做更好。Model 會有更多能力，但要很審慎地用，要認真設計。

## 我們有得選，答案不都在最新的 AI 裡

[25:20](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1520s) 再列一次：extreme completion；devocalypse，也叫 innovator's paradise；abstraction leap；uncharted waters；review economy；infinite pile of garbage。不會只去一個地方，會以不同方式去好幾個，而且彼此作用。很多人相信 extreme completion 會變成 vibe coding 革命，通向 devocalypse。也有人擔心錯過那個結果，被推進 infinite pile of garbage。他說過，若其中有什麼會完全改變程式設計，可能是 abstraction leap 裡被仔細設計的 abstraction，加上我們的 completion 能力。不同產業區塊會不一樣。某人的觀點和你差很遠，在他所想的那個範圍裡仍可能是對的。

[26:41](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1601s) 結果我們說得上話。他不要大家坐著覺得在等隕石。開發者的位置很特別，可以工程化自己的未來，而不是干等。先看清目標：我們要軟體在世界上做什麼？要更多開發者還是更少？要高品質，還是不管品質只要更多？系統真正被要求的是什麼？他要很多東西：軟體運作良好，對使用者和建造它的人有價值，一起工作的人好好對待彼此。

[27:48](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1668s) 主持人說自己喜歡軟體的民主化，職涯很多在 web，做過 Chrome，興奮的是讓愈多人愈好真的去做開發。David 問：要走到最好的結局、避開最差的，一件最有影響的事是什麼？Ray 說去年他花很多時間暫時放下 AI，去學 formal methods 和 theorem prover，那段支線結束才去 AI coding agent 公司。概括成建議：胃撐得住就去學 theorem prover，很有意思。不要假裝電腦科學的其餘部分、以及人已經有的理解不存在。不要拿這次變化當藉口，不去學我們已經知道的。LLM 留下的很多缺口，若我們允許，是由其他領域的理解補上的。不要把所有答案都往最新品牌的 AI 裡面找。

[29:56](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1796s) 主持人問 OpenHands 是什麼。他說這行裡「從前」是一年前；前面說的 2022 像黑暗時代。Cognition Labs 去年大約三、四月宣布 Devin（字幕聽成 Devon），專有工具，稱為世界上第一個 AI software engineer。很多人不贊成這個詞。但他們被那個價值主張吸引：有個東西自主把任務做完。當時大家是把壞掉的東西貼進 chat。若讓 model 自己把錯誤打過去，會好很多。產品方向影響很大，變成口號：做一個開源的。幾個團體合在一起，包括普林斯頓做 SWE-bench 的人，成為 OpenHands，最初叫 OpenDevin。開源社群能不能做出分數競爭得過的？很短時間內做到了，最後變成一間公司。他從旁加油，到加入。

[31:54](https://www.youtube.com/watch?v=KHGHylRhXFc&t=1914s) 用 OpenHands 建造 OpenHands：最近的部落格在 all-hands.dev（字幕聽成 all-ashands.dev）。以數字論，OpenHands 目前是自己 codebase 最大的貢獻者，但始終有開發者在下 prompt。有些是丟了就走的 pull request：在 issue 裡 tag 它，它帶東西回來，再 tag 幾次要改的地方。任務切得夠清楚時，這是最好的情況。他也常用它調查：我碰到這個錯，你去翻一翻，給我一些為什麼的想法。編輯器裡的工作他們仍用 Cursor 這類工具。他們刻意選 outer loop、較自主的 workflow，不打算變成最好的互動式開發環境。

[33:28](https://www.youtube.com/watch?v=KHGHylRhXFc&t=2008s) 測試是雞生蛋。他第一份工作用 extreme programming 七年，TDD、pair programming，很看重測試。他喜歡 coding agent 幫忙寫測試，不喜歡它們除非你開口就不寫。他點的是整個領域，不是特定一家：你叫它們做某事，目前大多數預設給你沒測試的 code。系統性的結果會是人寫更少測試。你選擇做對的事時，它會幫。陷阱是：我寫的是能帶來最好結果的測試，還是只為 coverage？這其實一直都在。主持人舉一個修測試的例子：把失敗的 stack trace 丟給 AI 說修這個，卻沒有對的 system prompt。最近有個在地化的例子，它只為土耳其文的某一個字母做解法，測試回到 100% 通過，沒有懂核心問題。Ray 說他們看過更極端的。Coding agent 出了名會用刪掉整塊功能來讓測試過：你要我成功執行的東西，若把這些都刪了就會過。不常見，但不是沒聽過。在 review 裡抓到，其實很容易。他更擔心細微的 bug。這讓人感覺到，現在這些東西需要多短的繩子。

[36:46](https://www.youtube.com/watch?v=KHGHylRhXFc&t=2206s) Radica 問太依賴 GitHub Copilot 會不會讓開發者離不開 AI，還是只是騰出時間處理更複雜的問題。他先回答：會。這種批評伴隨各種方便工具出現過很多年，有些地方說得對，有些地方沒打中。學習這件事比「這件事難不難」更複雜。要真正學會，確實得做有挑戰的事。但專門去找最乏味、最痛的苦工，本身不代表你學得最多。學習要被當成一等公民。
