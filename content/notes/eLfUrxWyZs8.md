# Building a Retrievable Codebase Memory Model with Nimrod Kor & Nimrod Hauser

Simon 主持，來賓是 Baz 的 Nimrod Kor 與 Nimrod Hauser。原片約 36 分鐘，英文自動字幕。字幕把 Checkov、Fastify、Baz、codebase、tree-sitter、Louvain、TF-IDF、Claude、Anthropic 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=eLfUrxWyZs8)

## 一句話

Baz 的 code review 什麼都說對了，卻像在複述 diff。他們要的是一段能注入其他 prompt 的 flow context：這塊 code 在系統裡到底做什麼。整座 repo 塞進 LLM 又貴又忘。最後不是為 module 寫一份總摘要，而是對著這張 PR，只把相關檔案的 method 和 class 名字送進去。

## 同一個符號，旁邊是字母就是 B

[0:12](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=12s) Simon 介紹：左邊的 Nimrod Kor 是軟體工程師，Checkov 的頭號貢獻者，那是很流行的 IaC 安全工具。右邊的 Nimrod Hauser 自稱新創裡的 serial first employee，跨軟體開發和 data engineering。Baz 是這場會的夥伴。Kor 說自己是 Baz 的共同創辦人兼 CTO，在 AWS 上做後端超過十年，開源還有 Checkov 和 Fastify，叫大家要用，並說自己完全沒有偏見。Hauser 是第一號員工，後端、資料工程、data science、dashboard 都跑。

[2:10](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=130s) 先講 Baz 在做什麼，才講得清 codebase memory。Baz 是 AI code review 平台。有一支他們稱為 state-of-the-art 的 review agent，做 PR summary、review comment（改了什麼、是不是在做壞事，含你們自己的原則）、把 diff 畫成 code graph 看連鎖、以及一個圍著 pull request 打轉的小助手。

[3:33](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=213s) 做出來、dogfood 之後，感覺少了東西。Reviewer 太機械。它知道發生了什麼，不知道為什麼、在哪裡、這樣做是不是最好。一則升級前的 PR 描述：改了這個 class、這個 method、輸入、結構稍有不同。每句都對，只是把發生的事乾乾地吐出來。缺的那個詞是 context。圖上同一個符號，一次讀成 B，一次讀成 13，只因為周圍不一樣。

[5:34](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=334s) 人做 code review 的心思他們拆成三層。最基本是看懂 code。再上一層是這次改動在系統的哪裡：多個 component、app、service，改了一處，什麼會跟著變。最高是使用者衝擊：改了這個 function，哪些 service 要更新，新功能露出、舊功能拿掉。用 AI 做時，三層做法不同。最簡單是把 diff 格式弄好一點送進去。全貌要 diff 以外的 context。業務衝擊則連到 Jira、Linear 這類票。這場的主軸是中間那層，他們叫 flow context，也叫 codebase memory。

[7:02](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=422s) 他們想要一段摘要，用整體的話說這塊 code 做什麼。Review、摘要、前面列的那些事都會因此變好，因為知道自己在處理什麼。PR 裡新建的參數叫 XYZ，而那也是公司名，就不是 typo。他秀的 flow context 又長又無聊，但是他們 codebase 裡真的一塊，在分析語言。系統裡本來就有很多 prompt：一條摘要 PR，一條做 review。這段話要生出來，注入其他 prompt。

[8:36](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=516s) 第一步必須是最瘦的、手動的 proof。把 prompt 跑一遍，看 PR summary，再人手寫一段 flow context 加進去重跑。他說你會驚訝：很多次以為加了 context，最後的摘要和原來是同一張圖，像 The Office 裡 Pam 那個 meme。這個過程證明有價值，也讓他們知道那段話該多長、多技術、多含糊、要不要例子。價值清楚了，才開始自動化。任務是把手上的 code snippet、diff 和其他資料壓成 LLM 看得懂的樣子，把 context 撒進去。

## 整座 repo 送進去，中間會被忘掉

[10:05](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=605s) 為什麼不把整個 repository 的原始碼丟進去叫它摘要？貴，而且慢。這些 model 出了名慢，token 一多就無法擴展。再來是 lost in the middle，或他說的 context fatigue：prompt 愈長，LLM 會忘、會亂、會忽略部分指示。圖表寫得很清楚。沒有比塞進過多 code 更能把 prompt 撐爆的辦法。Context window 如今有巨大的，但少。窗口一大，就只剩最慢、最貴的 model。最後，code 變得很快。產品說至少一天要跑一次，再高頻更好。流程又重又貴，就對不上。

[12:01](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=721s) 已經有人在做整座 repo 的摘要。右邊是 gitingest（字幕聽成 get in ingest），左邊是 DeepWiki。鼓勵去看，但資料常常過期，多半就是上面那些原因。所以他們自己做。

[12:33](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=753s) 兩個詞。Module 是同一個套件管理器底下的 code：同一份 package.json、pip、Rust crate、Maven pom，或子 module。Application flow 是他們自己也說含糊、甚至循環的詞：系統裡一連串說得通的邏輯步驟。一個 endpoint 後面、一條 queue、一個 batch 都算。

[13:21](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=801s) 旅程是把一整個 module 擠進 LLM。Baz 常用 module，因為它是甜點：repository 常常責任太多，module 通常結構較好。Polyrepo 裡 module 可能就等於 repository；monorepo 的人會感謝這個切法。他們原本想靠 batch 和預先計算。劇透是後來走了另一條。若你不摘要整個 module、改走單一檔案，要記得 PR 裡沒有的文件也可能重要。A import B、B import C，A 和 C 在 PR 裡，要懂 application flow 仍然該把 B 算進去。

## 專有名字 TF-IDF 抓得到，普通的 web server 抓不到

[15:04](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=904s) 第一招是 TF-IDF：term frequency 和 inverse document frequency。NLP 裡一堆文件組成 corpus。他們讓每個 module 當一個 corpus，看每個詞的 TF 和 IDF。實際上看的是 class 名和 method 名。getValue、getItem 出現很多次，好像很重要；拿到別的 module 一比，到處都有，獨特性就掉下來。IDF 本質是獨特性：野外很常見，就不獨特。analyzeDiff 在別的 module 不常見，只出現在做靜態分析的地方，分數就高。他們用這個鎖定重要、獨特、專有的文件、method 和 class，以為這樣摘要得出 module 在做什麼。產出是依獨特性排序的重要檔案和方法，餵給 LLM：這是一個 module，這是方法清單，告訴我它做什麼。效果很好。

[17:36](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1056s) 現實來敲門。不是每樣東西都是性感的專有邏輯。還有普通的 web server、queue handler、event handler。愈不獨特，TF-IDF 愈混濁。而且不能只在自己常碰的那座 repo 上迭代。那樣有手感、有基準，也是陷阱。換到前端和 BFF，也就是 backend for frontend，東西比較通用，就垮了。

[19:04](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1144s) 旁邊他們還做了 connection graph。Module 裡的檔案直接互相呼叫，不是從別的套件灌進來的輸入。用 tree-sitter 掃，他說這個開源專案分析 138 種語言。語言的積木不同：有的是 class，有的是 struct；有的是 function，Go 還有 receiver function。他們抓 code element，分成 import、function、class、enum、invocation，再解關係。改一個 function 要知道誰在用；改一筆呼叫要看到函式本體。一度想丟掉 TF-IDF，把 module 裡所有 method 和 class 的名字列成清單送進去。仍然太多，和送整份 code 很像，會爆。一張 module 的 connection graph 很快就讀不了。

[21:00](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1260s) 他們試 Louvain（字幕聽成 Luvine）。他說這是在圖裡找 strongly connected components。例如 main 檔 import 幾個彼此分開的檔，各自有 service、DB、controller，每一團就是一個 component。再在每一團裡找最重要或最獨特的代表檔，只拿那個檔的 class 和 function。尺寸問題解決了，仍可預先算，也避開 TF-IDF 在「野外」失真的問題。然後摘要的定義就是丟掉比較不重要的東西。有些 PR 改的是中心、是次要點、或是摘要裡根本沒有的新功能，於是什麼都不相關。Louvain 在技術上做了它該做的事。他們問錯了問題。

## 對著這張 PR 摘要，名字就夠，裁判請換一家

[22:33](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1353s) 目標不是為了有一份 module 摘要，而是給即將分析的那張 PR 上下文。請 LLM 摘要這個 module，但假裝 module 唯一在做的就是這張 PR 關心的事。BFF 很雜：AI chatbot、事件、queue、endpoint、通知中心。PR 若在通知中心，就叫它只當 module 在做通知中心，重要的東西才進得了摘要。每次都不一樣，就不能再用以前那種預先計算。

[24:17](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1457s) 每張 PR 看裡面的文件，再加上不在 PR 裡、但連得很緊的文件。圖上節點是文件，紅的在 PR 裡，藍的不在但高度相關，那些也收。用 connection graph 把 context 延伸出去，再把選中檔案的內容送去 LLM。結果正是他們要的：摘要和 review 都準。沒有整份預先算完，但還有可檢索的部分：整張 module 的圖很重，那張難讀的 import graph 仍預先算好；當下只決定要切哪一段去分析、送進 LLM。混合的做法。

[26:11](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1571s) 每個檔實際送什麼，很像 TF-IDF 那次：全部 method 名和 class 名，不是整份原始碼。玩過之後這就夠讓 LLM 說出 module 在做什麼。Token 少很多。

[26:43](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1603s) 還沒完，因為要談 evaluation。Data science、ML、AI 專案都缺不了。這個問題很軟：PR summary 反正會有，好不好是風格和用詞。一開始覺得太機械，怎麼量？先用眼睛，那不是懶，是為了快。一開始自動化，就要有 benchmark。兩種 LLM as judge。一種：把 summary 和 flow context 給它，問最終摘要有沒有引用這段 context，大量例子，數它說 yes 的次數，每次改動都跑，防 regression。他覺得更酷的一種：像那個 meme，做兩份摘要，有 context 和沒有，問哪份更好，數「有 context 的贏了」幾次。這會變成文化。例子池是策展來的，日常有人說這例不錯就加進去。Evaluation 讓他們更有信心推進 production。

[29:14](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1754s) 小提示：judge 用另一個 model。不要叫 Claude 審 Claude。讓 Anthropic 審 OpenAI，或反過來，通常更好，因為 model 會偏愛自己生成的東西。他說它們像人。

[29:42](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1782s) 收束四點。不要急著做。手很想放上鍵盤，先搞清要做什麼、長什麼樣、有沒有影響。對改變開放。他們想分析整個 module、想預先計算，兩件都沒成，就改。不要愛上單一例子。他太多次準備簽字說這能用，換一座 repo 就垮。然後是 evaluate。那是你知道自己還在軌道上、品質沒有變差的方法。

[31:03](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1863s) Simon 問和 Sourcery（字幕聽成 sorcery）、Graphite 怎麼比。Kor 說他喜歡這個領域的競爭者。兩年前他沒想過 AI 會 review 他的 code，現在沒有很難過。Baz 的差別是第二個解法裡暗示的那套：真正懂語言、找出重要的東西、找出連結，再送進 LLM。要先走進物件的空間，再走回文字。他們把圖直接送出去，模型會幻覺，所以必須變成文字。用物件、function、class 跟它說話，而不是行和文字，它比較懂。整個系統建在這上面。

[32:34](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=1954s) 下一個問題是現在的 LLM 能不能有意義地推論大 module。Context 遠在窗口上限之前就會變差。他說 model 依 module、依廠商而異。Lost in the middle 也不一樣：Anthropic 的 model 較注意 prompt 結尾，OpenAI 較注意開頭。Model 也偏愛自己的輸出，因為那是它被訓練過、看起來熟的東西。很多是試出來的。他們很少把一大坨 code 塞進去，這正是這場的重點：縮小、聚合、過濾。Context 一長，LLM 就忘：不照你要的結構回，也忘掉「不要做某件事」，然後還是做了。

[35:03](https://www.youtube.com/watch?v=eLfUrxWyZs8&t=2103s) Discord 上的 Richard Doc 問 TF-IDF 有沒有範例 code。他們把那段刪了。Hauser 的毛病是太多東西寫在 SQL 裡；那是大約 600 行的 SQL，他覺得沒人想看。TF-IDF 本身是公式，很簡單，Wikipedia 上搜得到。懂了要旨，實作就直接。Simon 說自己是糟糕的主持人，已經超時一分半，謝謝兩位，也謝謝 Baz 連續兩年支持。
