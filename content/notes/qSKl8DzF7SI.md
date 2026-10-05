# Monthly Roundup: Gen AI and TDD, Understanding vs Generating Code, Speciality vs General models...

AI Native Dev 的月會，由 Tessl 播出。片長約 34 分 58 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla、把 Jason Warner 聽成 Jason War、把 Bouke Nijhuis 聽成 Bala nigh house、把 Codeium 說成 Codium 再加一個 e，下文用校正後的名字。對話裡被點名的主持人是 Guy；另一位沒有在字幕裡自報姓名。

- 原片：[YouTube](https://www.youtube.com/watch?v=qSKl8DzF7SI)

## 一句話

這個月的四集把同一件事拆開：LLM 是比較會懂 code，還是比較會生 code。若「懂」很難，市場會收成少數真的懂你 codebase 的平台；若「懂」會被做平，工具就會各專各的。開發者若不想變成 reviewer，下一站比較像 product、architect，或用 test 和 spec 建立信任，而不是盯著每一行。

## 懂，和生，不是同一件事

[0:20](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=20s) 這是第二集月會。他們開始一週一集，這個月不含月會有四集。Itamar，Codium AI，談 AI testing。James Ward 從多年的 Java 交情來，人從 Google 到 AWS，做 AI 與 Amazon Q Developer 的 developer advocate。Jason Warner 先前是 GitHub CTO，現在是 Poolside CEO，談 code generation model。Bouke Nijhuis 那集很動手：人先寫 test，再用 TDD 把 code 生出來。他的工具是一個人在會議上被問「為什麼不能反過來」之後去做的。當時跟 Codium 談的是從 code 生 test；有人問，若 code 是從 test 生出來呢。他們稱之為 conference driven development。

[2:16](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=136s) 生成文件、測試、新 code，常被假設成難在先懂這套系統。Itamar 說得很硬：最難的是知道該測什麼，懂 code，分得出什麼是對的系統、什麼是錯的。該測什麼的知識不全在 code 裡。知道之後，生 test 不是沒成本，但是比較容易的那一段。所以他們的工具繞著「已經懂了的東西」轉。更早一集，Sourcegraph、做 Cody 的人（字幕聽成 Rashab）也說過：兩百個 test 裡，要幫人把注意力放在真正該看的那塊 code，是幫 AI 知道測什麼，不是比誰生得多。

[4:40](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=280s) Jason 把懂和生拆成兩件事。他覺得今天的 LLM 在懂 code 上走得比生成遠。生成還在演進。這些模型還不是 junior developer。Guy 聽到的含意是：東西失敗時，要先問是不是沒懂你的 context、沒懂既有 codebase。Context 裡也有很多不該模仿的東西，但它仍得懂那段 context 是什麼。名字叫 gen，人就往生成靠；他認為現在回收到的價值，有不少仍來自分析、來解讀，用的還是同一類 LLM。

## 一個平台，或各做各的

[7:24](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=444s) 若懂 code 是最難的、會變成重心，少數平台會很懂你的 code、懂什麼是對的、怎麼運作，然後附帶生 test、生文件、在旁邊加 code、修 bug。公司會押一個平台和它那套工具。另一條路是：懂 code 會被商品化。LLM 本來就懂，或再改進的報酬遞減。你指一下 codebase，大家懂的程度差不多。之後要比的是 best of breed。測試工具要真的懂測試，也許還要懂產品分析、真實流量、什麼對業務重要。文件工具要懂你怎麼散佈、接哪些平台。生成或修 bug 也許跟你的平台、跟安不安全有關。決定因素是：從 IP 和實作來看，懂你的 code 有多難，以及那會不會變成勝負手。

[9:25](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=565s) Guy 希望是第二條，因為生態會比較活。若一家深度理解的平台拿走所有牌，就沒有競爭、也少了創新。若理解是那個中心，做出理解的人會變成平台，別人接上去。他用人類的理解來比：懂到一個夠用的程度之後，寫文件、寫測試，比的是那項手藝。Amazon Q Developer 是例子。它是通用的 coding assistant，但專在 AWS。對著 AWS API 寫，它很會接到既有服務。做 Amazon stack 的人，能走得更遠。生態裡的東西會專，是因為有人投資過那一塊。

## 不要停在審 code

[13:28](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=808s) Jason 的話他們記成：AI assistant 在演進，但離把它們想成自主的 junior developer 還有一跳。人還得把手放在鍵盤上，因為還沒到全自動。他說的包含自己的平台。Guy 補了先前跟 Intercom 的 Des 聊過的自主：能不能自主摘要一封信，今天做得到，但任務太小，不會被叫做自主。Junior 的範圍本來就沒講清。Jason 沒有明說、但被聽成：它比較能用相對資深的方式解釋 code，比較不能把事情執行完。接下來幾年，他仍把 AI 主要當 assistant。Guy 覺得一直審生成的 code 很悶，也許只是過渡。幾行還看得下去；五百行可能掃過、沒意見就收。工作變成 reviewer，這不是有趣的工作。信任不是盲信它會寫，而是 test 和 assertion 過了。一旦信任，平常的流程就不再鑽進 code。

[16:40](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1000s) Jason 把之後的開發者分成 product 和 architect。Guy 同意，也不希望終點是 code reviewer；因為不想，所以不會停在那裡。信任夠了、配得上自主這個詞之後，有人會往產品靠：使用者要什麼、軟體該提供什麼。有人是被解題吸進來的，會往 architect 走。Architect 其實不太碰 code。Guy 說自己現在離線、也生疏了。他做 architect 時懂 code、在乎 code、看得懂後果，但工作不是寫 code。越往架構走，越自然變成 polyglot。Jason 還談到各種冷門語言和把它們生出來。被「寫一段就有一個會做 X 的系統」吸進來的人，可能往 product manager 走。被解題吸進來的人，往上解解析度更高的問題，code 本身變成已解的問題，就像現在送網路請求不必自己寫線上的 byte。

[18:55](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1135s) 測試這條把最重要的成品從 code 換走。Bouke 說開發者越來越是 test writer。Test 變成應用該長什麼樣的規格，應用再被生出來。Test 是 source of truth。Test 好、又過了，你幾乎不必在乎怎麼實作。主持人想看實作，Bouke 說不用看，能動就好。Itamar 談的未來是 PRD 和 specification，test 直接從規格生出來，比較接近 AI native 的做法。Guy 覺得對多數人，親手寫 test 不會比審 code 有趣。它的功能是把人推向 PRD 和 spec。十八歲的人不會為了當 test writer 或 code reviewer 去讀大學；會不會為了寫產品需求、或當 architect 而來，那兩條他覺得是真的。今天要從 LLM 拿到價值，要嘛讓它寫、你審，因為還不信任，而且審得越來越少；要嘛你提供 test 來建立信心。兩種都是在驗證它的工作。他預期會變成比較協作的模式：你信任它做這一段，自己做更高的事。Jason 還說，但願自己又是 25 歲，接下來二十年會完全不一樣。

[22:10](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1330s) 給剛進場的人，Guy 覺得事實的部分很難爭：接下來二十年會不一樣。要不要希望自己是 25 歲，則不一定。人生上的建議是韌性、能適應、學會學習。原則仍像不要迷上一種語言。他自己從 Pascal 學到 C、C++、Java、.NET、JavaScript。都是程式，都是手段。Code 不是身份，是這門手藝的工具。

## 還要不要讀得懂，以及通用模型會不會贏

[24:06](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1446s) James 問：若 AI 能做對，code 為什麼還必須以人讀得懂的形式存在。Bouke 說 test 夠好就不必看 code，要信任生成的 code，test 才是最要緊的。Jason 很難吞下這個看法。他仍認為會有專家需要懂 code，也很難預見完全不必懂 code。Guy 分兩層。若更高階的表示值得信任、背後的 code 或別的做法真的交出你要的功能，就沒有理由再看 code。同時很多開發者把自己當 coder，開源世界在乎的是 source，人對手藝有驕傲。他比數位繪畫和畫筆、比真正發聲的樂器跟數位、跟 EDM。這是新的創造方式，要時間。Mainframe 開發者還在，而且很貴，因為技術不會死。但他很難想像五年後、更別說十年後，站在前沿的人還會寫很多 code，如果還有的話。

[26:46](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1606s) Poolside 在做專門給 coding 的模型。Jason 的句子是：資源無限時，通用模型是通往 AGI 的關鍵；現實裡能量、資料、時間都有限。Guy 說這是以現在 foundation model 的創投規模來看的數十億美元問題。轉折在 scaling。若你相信繼續餵更多資料、更多算力，結果就會明顯更好，專用模型的價值會下降，包括 Poolside、某種程度上的 robotics model，以及 Itamar 提過的測試專用模型。他不確定那些模型怎麼建成。另一邊有傳言，訓練到了局部高點。GPT-5 這一級會很難，比較像 4.1、4.2，要再花兩到四年。電力也許是限制，這句字幕沒有聽清。那就會回到演算法。若你從海量資料裡挑出跟 coding 有關的子集，而且挑得準，目的打造的模型可能好很多。別的領域也一樣。他當消費者，樂見錢去試兩條路。環境成本不是可忽略的，他也不覺得這很好。當投資人，這很難決定，因為若押對，金額很大。對在 LLM 上做工具的人，這是另一個理由相信生成 code 會繼續變好：很有能力、資金很夠的公司在兩條路上同時試。

[29:55](https://www.youtube.com/watch?v=qSKl8DzF7SI&t=1795s) 他們把時間接到九月初、秋天的第一週，八月的 AI 新聞很多。Cursor 宣布 6,000 萬美元的一輪。跟來過節目的 Codium AI 不同、名字多一個 e 的 Codeium，募了 1.5 億美元，投後 12.5 億。他們公布 70 萬 active users，他不知道 active 怎麼算；就算是至少用過一次，也已經很大。客戶超過一千，他也不確定是不是以個人開發者計。Magic Dev 比較像模型公司，很保密，募了 3.2 億美元，宣稱靠某種摘要，在跟 code 有關的事情上做到一億 token 的 context window。這加強兩件事：很多公司用不同方法把 code generation 做更好，錢在流進來。這不是只有 Copilot 的世界。問人「一個 AI dev tool」，大家很容易只說 Copilot。Copilot 的數字：Satya 說 GitHub 今年成長的 40% 來自 Copilot。開源開發者平台的 run rate 到 20 億美元。採用 Copilot 的組織超過 77,000，比前一年增 180%。量級不同，但不是只有他們在長。GitHub 和 Microsoft 把熟悉和信任做出來，人也會發現自己不喜歡的地方，新廠商才有門。全新的做法很難被打亂，因為最資深的使用者也許只用了五分鐘。他們把自己做成起點：接觸很多人，同時所有沒做好的地方都被放大，一堆新創在補。他知道九月和十月還會有消息。下一週要放的是 Glean 的 chief product officer Tamar。
