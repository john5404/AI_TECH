# Mastering LLM Prompting in the Real World by Macey Baker

Simon Maple 訪問 Tessl 的 Community Engineer Macey Baker。這集是 2025 年的 AI Native Dev。她人在 AI engineering 團隊裡，想辦法讓 LLM 聽話；產品當時還沒推出，社群也才剛開始。原片約 38 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=ENL9WJ93fVU)

## 一句話

Prompt 是目前跟 LLM 互動的介面，也是最便宜的那一層。Fine-tuning 會把你釘在某一版需求上；prompt 是會過期、也可以改的活文件。Macey 的技巧都從同一件事來：model 從第一個字就在猜答案，它不是神諭，也讀不了你的心。所以把限制寫成任務本身、給出好和壞的例子、把你在乎的細節講清楚，並在真正要它作答之前先用一輪對話把它帶進那個範圍。

## 最便宜的介面，以及兩家系統提示差在哪

[1:12](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=72s) Community engineer 這個職稱他們還在摸索。她現在深陷在讓 LLM 守規矩。產品推出之後，她會去跟別人談怎麼把產品用起來。Simon 說她常在 Discord 裡。聽的人可以進去吵。

[2:16](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=136s) Simon 說他常聽到兩件最便宜的事：prompting 和 context。為什麼先做 prompting。Macey 說它就是跟 LLM 互動的唯一真正介面，人把它的重要性打了折。跟 fine-tuning 比，它最便宜，也是活的：可以跟著你、跟著期待、跟著產品演進。Fine-tuning 可能把你釘在自己的某一版上。Simon 提到 Notion 共同創辦人 Simon Last 的團隊，正在少投資 fine-tuning，因為 model 變好之後，那份 fine-tuning 的價值往下掉。

[3:39](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=219s) 跨 model、跨版本，技巧並不穩定。她願意賭 LLM 會變好，時間表不知道。Evals 裡她主觀也客觀看到進步，字幕裡那個版本號碼聽不清。她拿 ChatGPT 和 Claude 當證據：她其實不確定兩者能力差很多，但很多人偏好 Claude，覺得比較好說話、比較懂自己。這偏好幾週內可能就變。看 Claude 的 system prompt，它被導向多一點個性。Claude 更有意見，對你要做的事感覺更強，一般也做比較好的假設。ChatGPT 比較不願意假設你要什麼，也比較沒有意見。Anthropic 和 OpenAI 的 API 不一定用同一套 system prompt，但這已足以證明 prompt 的影響力。若你要某種性格，可以在 OpenAI 那邊把 prompt 寫得更有意見，或在 Claude 那邊把它壓下來。另一個觀察是，長 context 裡 Claude 比較抓得到你的意圖，GPT 比較容易亂。她喜歡 Claude Projects，可以上傳東西再引用。

[6:16](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=376s) Prompt 是用過即棄的。反過來，spec 可以上傳到 Claude project 再引用。兩者語言不同。跟 LLM 溝通常常可以直接翻譯成人怎麼跟人說話。格式重要。他們會把區段標起來，她說那不是 XML 文件，只是在做標記。你不會丟給人一整面牆的文字，還期待一次消化完。短一點的牆連到另一面牆，再連到更基礎的文件，人才處理得了。Spec 和 prompt 在這一點上像。他們最近常說 canonical：spec 的一節直接對到一份輸出。寫「這個 function 把兩個數字加起來」，就對到產生那個 function 的過程。好改、比較準、LLM 好懂、人也好讀。Prompt 也是這樣，但 prompt 的語言會比較花。Spec 是技術文件，要快、要容易懂。短的、有人看著的 prompt 可以花一點、含糊一點，因為你會看輸出、說對或不對。Spec 要少含糊，後面一次次生成才比較一致。兩者可以一起用：用 prompt 幫你寫 spec，再把 spec 拆開，一次盯一塊。

## 限制不要放在最後，例子要給得出來

[10:13](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=613s) 第一條她去年寫過部落格，叫 task framing。當時他們還在實驗。她要 LLM 做一些 utility library，某些 function，不准用外部相依。LLM 是在網際網路上訓練的，真的那樣寫 code 的人很少。她把限制放在 prompt 結尾，拜託不要放外部相依，甚至寫若你放了我就不幹了。還是做不到。LLM 是依序讀指示的。很多人以為整份 prompt 交出去，它先完全讀懂再開始擲骰子。她說從第一個字它就在權衡可能的答案。所以 task framing 不是把限制換個順序，而是讓限制不再像限制，變成任務的一部分。

[12:22](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=742s) 部落格裡的真實例子是 CSV parser。前面 90% 在描述一種程式，而那個任務的最佳答案、正確答案，正好會用外部相依；她的限制反而可以不做。等它讀到限制，已經在兩條路之間打架，而對的答案可能已經被選成百分之百要走的那條。改法是從一開始就寫：寫一個 self-contained 的 CSV parsing library。不是開頭加一句「不要用外部 library」。Self-contained 就是任務本身。她後來把「我要完成什麼、怎麼盡早說清楚」烤進所有 prompt。Simon 猜，比較像人的說法，也可能讓它找到比較像人寫出來的例子。她不確定，但這樣會把 LLM 帶上對的路。

[14:36](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=876s) 第二條是給例子。Prompt 可以跟你一起長，它代表你到底要從 LLM 拿到什麼。Fine-tuning 即使有用，也假設你要的東西是靜態的。需求一變，之前那些例子上的時間和算力可能白花。所以她覺得 prompting 神奇，而那句話聽起來很傻：給例子，說明你要什麼。她常在標記裡寫 good，放一個好例子，再寫 bad，放一個很像、但是壞的例子。人下 prompt 時腦中有畫面，卻沒把資訊傳過去。它不是神諭。例子不必那麼結構化。LLM 傾向更複雜、更囉嗦的解法。你要它少囉嗦，就給一句花的、一句你要的那種直接句子。做 code generation 時，若某個 function 有含糊空間，或某個參數可能搞混它，就寫 do 和 don't，跟你對人說明一樣。人和 LLM 都讀不了心。他們提過一集跟 Intercom 的 Des Traynor 談短 prompt 和長 prompt。Macey 以前在那一帶工作過。短 prompt 能要回東西，是因為 LLM 會補洞，於是人寫得很少也拿得到相當完整的結果。那會搶走我們把細節放進去的能力。

## 細節放在你在乎的岔路，context 不是愈大愈好

[18:50](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=1130s) 第三條是細節的層級。給太多或太少都會拿到一個結果，然後對結果挫折。LLM 很神奇，退一步看它們是預測機器，這能幫忙，也會咬人。他們做過一個實驗：一批這樣描述的程式，每個走 workflow 十次。有一批災難性地失敗了十次裡的九次。成功的那一次，spec 裡的細節常常是最好的。她的解釋是，你描述的若是它看過很多次的問題，一句話就打開全世界。再拿 CSV parser：一句「寫一個 CSV parser 的 library」，它可以挑任何它覺得好的解，並一路跟下去。若是常見的工程問題，spec 裡放了非常多細節，它有時會亂：資訊給了大部分、又不完全。選擇像漏斗被收到這裡，然後它問，接下來走哪。若你判斷它對這個問題點子很多，也許最好讓它用自己的方式解。她說這很看情況。Simon 把它收成：哪些決定你在乎、一定要走某條路，哪些你不會那樣做但沒關係。細節放在對的地方。CSV parser 也許你不在乎怎麼實作，但在乎它快。那就把任務框成：我要一個非常快的 CSV parser，能處理她隨口說的 50,000 列。若後面再跟一套它必須遵守的嚴密實作細節，她覺得反而比較容易出問題。或者檔案有一百萬行，你不要它全部放進記憶體。使用方式是 LLM 不知道的，那些細節要給。

[22:34](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=1354s) 下一條是怎麼結構輸入，來自很大的 context window。很多人把 window 塞滿，她覺得酷，也想學怎麼把它用得有用。她的經驗是窗愈大，LLM 愈有機會混亂。他們的對法是把 prompt 拆開。不要在行內寫「你會拿到使用者需求，需求是這些，然後請你寫某個東西」。先說我要給你這些材料，用條列點出來，再說我要你用它們做什麼，然後用她說的假 XML 把 user requirements、system requirements 標出來。它是依序讀的。你說了會提供材料，它就在等；讀到的時候，它已經知道要做什麼。這仍是一個 prompt，不是五、六、七次對話。只是這一個 prompt 裡的區塊分得很開，XML 或別的標記都行。若這份文件是你跟開發者溝通的唯一機會，之後不能再說話，拆成消化得了的塊，人最有機會懂。LLM 也一樣。

[25:36](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=1536s) Simon 說半年到一年前，token 還是真的限制，現在能丟進巨大的 context，反而給人藉口，以為丟進去它就會處理。能給不代表該給。更多 context 也是你的更多工作，你得確定它全部說得通。LLM 常常能做合理假設，但讀不了心，到某個點會開始亂。更大的 context 也帶來更多 variance：同一個 prompt 跑很多次，結果會更不一樣。想壓 variance，較小的 context 大概比較好。她也覺得也許談的不是 context，是較小的 scope。大 context 常常等於這件任務的範圍很大。Canonical spec 的意思是，一塊 spec 直接對到一個可以指望的確定行為。一個 function 把兩數相加，就寫出那個 function。一個數學 library、一份巨大 context 描述 30、40、50 個 utility function，variance 會變多，而且你要的 function 不見得每個都出現在最後的 code generation。範圍小一點，行為就稍微更確定，因為做成那件小事的替代路徑比較少。

## 先說一輪不要的話，再要它作答

[29:02](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=1742s) 最後一條是喚起思考，以及他們的 `say`。實驗期間冒出來的，她覺得很多人也跳上了這條。Context 不只有那份巨大的任務說明，也有對話裡的 context。LLM 的溝通很特定：我說一句，你說一句，我抓住回應再做點什麼。整段對話可以變成任務的 context。他們在 reasoning model 出現之前就做了一個很原始的 reasoning：一個工具函數叫 `say`，就是對 LLM 說這句，然後把回應整個丟掉。不在乎它說什麼。要的是這句話幫下一句做準備，下一句的回應才會被留下。例子是：我在想怎麼把這個程式寫得有效率、效能好，我要描述我想要的程式，你準備好一起想了嗎。她不一定先講這是 CSV。LLM 通常說這聽起來很好玩，我準備好了。他們不在乎這句。在乎的是這段對話的範圍已經被 priming，下一則 maybe 才是 CSV parser library 的描述。它會想著要快、要有效率、要寫好。實驗時意外地有效。這和 system prompt 裡「你是注重細節的資深 JavaScript 開發者」不一樣。那是規定它怎麼反應。這裡比較像為這件特定任務做 onboarding，給的是這件任務的背景。回到預測機器：可能的解在 prompt 被處理時就在加權。到了 `say` 這一步，已經有一份 prompt 被處理過，context 被填上，後面某些回應的機率更靠近一開始要的東西。她說這很不科學，但她的經驗是這比長 prompt 好。先談你要的輸出，再描述任務，比直接給 10,000 字有效。她也覺得有點殘忍，因為他們把 LLM 想說的話丟掉。

[33:15](https://www.youtube.com/watch?v=ENL9WJ93fVU&t=1995s) Simon 把時間推到 2026 年 1 月，問 prompting 還重不重要，model 會不會好到 prompt 的附加價值變少。她覺得會，到某個程度，而且看這些公司要把 model 帶去哪。會有一個比 o1 更能幹的版本，2026 年大概不會再叫 o1，但它仍然可以選擇不做一個有意見的 model。那是有效的選擇，只是你得用不一樣的方式和它互動。也可以有一個一樣能幹、但更有意見、更偏向某些答案的 Sonnet，那會讓它在別的事上非常有效。她預期這些具體技巧會變得比較不重要。你仍然得在意怎麼用這台機器真正吃得下的方式跟它說話。她前幾天喜歡 Simon 說的 mechanical sympathy。這個詞是 Martin Thompson 提出的，比較像 F1。車手用的是介面，換檔、開車，但知道變速箱怎麼做的，才知道高轉速時何時換、慢的時候要不要換一種方式、要不要跳檔，才能把變速箱用滿。任何系統都一樣：用它運作得最好的方式去互動，你拿得最多。目前 prompt 就是通往 LLM 的那把鑰匙，所以對 LLM 要有這種 mechanical sympathy。Prompting 會一直重要。其中一些技巧，她承認有點像在應付它們還沒完美運作的事實。變速箱是很慢、一次改一點點。LLM 底下現在變得很快，所以對機制的知識得跟著變，prompt 也得一直調。片尾請聽眾把有用的做法寄回來，信箱字幕聽成 tesla.co。也可以到 AI Native Dev 的 Discord 找她。
