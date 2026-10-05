# Why your Agent needs Memory, not just context

Simon Maple 主持的 AI Native Dev。來賓是 Oracle 的 AI developer experience 總監 Richmond Alake，人在倫敦。片長約 44 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 OpenClaw 聽成 open claw、claw bots 或 mobot。

- 原片：[YouTube](https://www.youtube.com/watch?v=-stDHMwbBRw)

## 一句話

Agent 記不住、也不會變，多半不是 model 不夠，是沒有 memory。Richmond 把 memory 看成一整組一起運作的系統：embedding、資料庫、以及 LLM 裡幾乎靜態的 parametric memory。Context engineering 是在有限的 context window 裡挑要放進去的資訊。Skills 則是組織早就寫過的 SOP，在他的分法裡屬於 procedural memory。檔案系統讓人做得很快，因為模型天生會讀寫檔；把並行、ACID、安全和隱私都做上去，你其實在檔案系統上自己做了一個資料庫。他看的下一步，是把 agent loop 裡取出的資訊送進 training loop。

## Memory 是系統，不是一句 prompt

[1:29](https://www.youtube.com/watch?v=-stDHMwbBRw&t=89s) Simon 這集要劃 context management 和 memory management 的線，也問開發者該不該拿資料儲存來實驗，以及 onboarding 人和 onboarding agent 差在哪。Richmond 的經歷裡，開發者一直放在前面。在 Nvidia 他是作者，對 machine learning 工程師和資料科學家寫演算法、computer vision 和當時的 deep learning。在 MongoDB 他是 developer advocate。到 Oracle Database，他是幫產品和功能朝開發者成形的人之一。Simon 還點過 Neptune AI。

[4:02](https://www.youtube.com/watch?v=-stDHMwbBRw&t=242s) Agent memory 這個詞，他盡量說簡單：一組系統和技術一起運作，讓 agent 記得、也適應。系統裡有 embedding model，把資料物件編成數值，才能做 semantic search。有資料庫，存、也取。有 LLM，它帶一種 parametric memory，是靜的，除非 fine-tune 否則不變。技術則是 context management、memory engineering、各種 context engineering。

[5:14](https://www.youtube.com/watch?v=-stDHMwbBRw&t=314s) 領域走太快，人會抓住一個東西就繞著它定角色。Prompt engineering 大約兩年前出現，在 AI 的時間感裡像過了二十年。那份工作是用語言模式把 LLM 導向某種輸出長相。後來推理變強，重心從 prompt 本身穩不穩，轉到你放進去什麼。Context engineering 是很有系統地挑選要送進 context window 的資訊，因為窗口有限。會不會有 context engineer 和 memory engineer，他說會，名字還沒定。Memory engineering 不是新的。它是幾個學科的交叉：database engineer、資料庫裡做搜尋優化的人、software engineer，再加上一點 AI engineering。這群人專注重 agentic 系統裡 retrieval pipeline 的優化，或那條管線的延遲。軟體工程和資料庫都得懂。

[7:39](https://www.youtube.com/watch?v=-stDHMwbBRw&t=459s) Memory 是不是 context 的超集，他覺得是有趣的辯論，而他有偏見：他什麼都看成 memory。他用人類的比方，是因為要同時跟技術和非技術的人說話。跟媽媽或外婆說 memory，她們懂。說 context，她們沒有那個 context。手機裡的 agent 需要記得。你給 agent 的每則資訊就是 memory。這樣才會開始想：怎麼提高被回想起來的機會，怎麼優化 retrieval。你也可以主張一切都是 context。看你站在哪。

## Skills 是給 agent 的 SOP

[9:18](https://www.youtube.com/watch?v=-stDHMwbBRw&t=558s) Podcast 前三四週都在談 skills。Tessl 自己也在網站上掙扎：先寫 skills 還是 context，兩邊有重疊。這個階段名字很重要，也很難，因為變太快。這個月說 skills，下個月可能換詞。去年初還沒有人在說 skills。他用人類來看：skills 不是新東西，對應的是 SOP，standard operating procedures。組織裡的文件，定義某件事怎麼做。你有一套做法，雇了新人，要把知識交出去，人類找到的辦法是用結構寫下來，一步一步走到某個結果。Skills 就是 agent 的 SOP。給任務一個任意的名字，用一定的長度描述它，給逐步指示，也許再給工具、script 或 MCP 的位置，讓它做出想要的結果。

[11:13](https://www.youtube.com/watch?v=-stDHMwbBRw&t=673s) 放進 agent memory，skills 是 procedural memory。人腦有一塊負責存和理解技能。他舉後空翻：那份知識存在 cerebellum，那裡放的是例行程序和任務的做法。從 agent memory 看，skills 就是 agent 的程序性知識。

[11:51](https://www.youtube.com/watch?v=-stDHMwbBRw&t=711s) Simon 說，行銷講過一句他其實喜歡的話：新人要 onboard。他們用 context 在做的，是 onboard agent。人需要 context 和 skills，agent 也一樣。組織若要一致，本來就寫了給開發者的做法。要做的是把那份 SOP 做成 skill。不會給一個新開發者零資訊，還期待他照風格、照測試、照 style guide 做出來。那對人會覺得很蠢。為什麼期待 agent 在沒有 context、memory、skill 的情況下做到同一件事。

## 成功要的是既有的 memory，不是再罵一次 agent

[13:25](https://www.youtube.com/watch?v=-stDHMwbBRw&t=805s) 很多人怪 agent，其實是沒給到它成功需要的資訊。跟新來的開發者說做這些，沒給資料，對方交差，你再說不對、測試呢、要照這份 style guide。不會這樣對人。Richmond 的簡單答案是資訊，而資訊就是資料。組織坐在大量資料上。然後是他的世界：給它們 memory。給已經存在、帶著你先前資訊的 memory，再給一個夠穩的系統，讓它們能適應、持續演變和學習。他在 Oracle。他說差不多所有、或大多數 Fortune 500 在用 Oracle 資料庫。公司超過四十年，看過幾個轉折：網路時代、雲的轉型、資料，現在是 AI。他說因為他們是變化本身的學生，所以懂客戶和開發者要什麼。多數他看到的 Fortune 500 資料坐在 Oracle 裡。因此他的推論是：Oracle 懂資料，就懂 agent 要成功需要 memory，也懂要在 agent 周圍做多穩的技術，它才會持續學習。

[16:06](https://www.youtube.com/watch?v=-stDHMwbBRw&t=966s) 人有一件 agent 比較不行。人知道自己被資料淹沒，也知道該去找資料。有時資訊剛夠交差，但知道不多拿一點就做不好。Agent 被塞太多，表現會掉。有時資料剛夠拼出一個答案，它們就衝去回答，還沒拿齊。Oracle 的客戶資料非常多。怎麼把 agent 帶到對的資料，他說很難。幾天前 OpenAI 發了一篇他們怎麼做 data agent。其中一個技巧是單一 agent 在不同層工作。它先掃資料庫裡所有表，看 schema 怎麼定義、彼此怎麼連，於是懂資料怎麼存、怎麼用。同一個 agent 再掃用來建立和管理這些表的 Python 或 Java。於是它懂這些表背後的想法、存了什麼、發生過什麼轉換。他的答案接回上一題：給 agent 很多關於組織裡發生過什麼的 memory。制度裡的知識、口耳相傳的知識。最好讓一個非常安全的 agent 走遍這些資訊。它有能力理解。走的時候存進一個取得很有效率的系統。Production 的資料是異質的：vector、JSON、非結構化、結構化、半結構化、knowledge graph。要裝備 agent，讓它在儲存和取得上都能對付這些種類，並且安全地掃企業資料的不同面。用很穩的 agent memory 做對了，你是走上一條做出可靠、可信、有能力的 agent 的軌跡。不會一次做完。是反覆實驗、把現有 agent 變好。

## 安全常常排倒數第二，記憶要分種類

[20:18](https://www.youtube.com/watch?v=-stDHMwbBRw&t=1218s) 「安全地」是關鍵詞。Agent 的請求，該有使用者該有的權限。他說 Oracle 四十年看過隱私的性質變了很多次，管轄機構對資料怎麼存、怎麼安全地取，要求也在變。這些嵌在 Oracle 資料庫裡，常見的 role-based access 是內建的。重點在 agent。他很坦白：跟產業裡的 AI 開發者談，他們在乎的清單上，安全排倒數第二。最後一名是什麼他不說，免得讓團隊難堪。他講的是整個產業，不是某一家。現在時間軸上滿是 OpenClaw 那類開源框架的安全問題。AI 開發者愛實驗、愛先讓東西跑起來。他看到的 Oracle 開發者不一樣，是因為 Oracle 把安全和資料隱私放在第一。用 Oracle 資料庫和 Oracle Cloud，他說你可以走得很快、少操一點心，因為安全是內建的、開發者拿來就能用。AI 本身很實驗。

[22:50](https://www.youtube.com/watch?v=-stDHMwbBRw&t=1370s) 單一使用者、還不在團隊裡。他從 agent 的角度說，需要一種他們稱為 entity memory 的東西。Agent 要很懂 Simon。兩條路。一是事先灌：Simon 在各種工具裡的資料吃進 agent 的 memory，在 entity memory 裡做出一個 persona。人也有這種。二是來回互動，慢慢形成對 Simon 的理解。或兩者：先有一些，再往上長。偏好、工作方式、stack、對某些語言熟不熟、喜歡的 library。不必重造輪子。神經科學幾十年來是把腦部分開，看哪一塊負責什麼。於是 Oracle 資料庫裡可以有一張只放 entity memory 的表，Simon 一列，喜好都在。可以是 JSON，也可以是喜好的 embedding，提問時做 semantic search。Entity memory 解決的是可信度：我和一個有智力的實體互動，這件事可不可信。商業工具裡看得到。ChatGPT 會問你喜不喜歡這個個性。他開玩笑說不喜歡、再做好一點。前沿的人也在試著讓這些計算實體可信，理解並修改 persona。那就是 entity memory。Simon 補的是，使用者最後是審查者：agent 交出來的東西能動，但人會說我想要它這樣動。知道工作方式、個性和這個人想看到事情怎麼被做成，agent 才交得出人會滿意的結果。

[26:10](https://www.youtube.com/watch?v=-stDHMwbBRw&t=1570s) 工作方式變得比較慢，比較像這個人是誰。API 可能兩個月後變、再一週、再兩週，agent 得知道。也有客觀的真假：用這個 library，API 就是這樣。幻覺和版本問題，都是要給 context 才做得準。

生命週期他用 memory 講，說你可以換成 context。技術上先 ingest。資料科學和分析師很熟：清資料，再編碼，把資料送進 embedding model，做出不同的表示，然後存。他存在 Oracle 資料庫。再想怎麼取：vector search、一般的 lexical search，或兩者都要的 hybrid search。和傳統資料管線不同的地方是你得能忘記。用 context 這個詞，遺忘或壓制不會自然出現。用 memory，開發者幾乎立刻知道要做一套忘記資訊的辦法。要能壓制，也要讓回憶被庫裡其他資訊影響。史丹佛一些人 2023 年左右的 Generative Agents 論文，談怎麼忘記，給每個 memory 單元的屬性加一個加權分數。循環是：ingest、編碼、儲存、取出、忘記或記得或強化記憶，然後再走一圈。

[30:21](https://www.youtube.com/watch?v=-stDHMwbBRw&t=1821s) 還有增強。Computer vision 和 deep learning 裡叫 data augmentation。以前影像不多，把圖轉個方向，讓 convolutional neural network 看見 production 裡可能出現的另一種樣子。Memory engineering 或 agent engineering 今天可以借用。LLM 給出的資訊，可以由一個 LLM 看著領域再補上可能缺的、值得放進去的內容，存回去，回憶和遺忘都會更好。他用 MCP 或 script 做一件具體的事：用 LLM 增強 function 的描述、理解那個 function，再用 embedding model 編碼，得到更豐富的表示，之後跟 LLM 工作時，就能對系統裡的工具做 semantic discovery。

## 同一個 agent 可以當抄寫員

[32:18](https://www.youtube.com/watch?v=-stDHMwbBRw&t=1938s) 單人的問題小一些。Context 過期，本人多半認得，可以修，或叫它更新。十人、二十人、三十人，或 Oracle 這種規模，人各自把東西放在本地，context 會陳舊。還有發現和跨團隊分享。以前大公司裡有人口耳相傳的知識，人走了，知識也走了。現在的差別是 agent 可以無所不在。同一個 agent 在 Slack、在 Google Workspace、在你用的其他工具裡。它走過流程、workflow、訊息，看到成功的事件，或看到其他工作者做成某件事，就可以幫你記下來，存成某種 skill。也許為這個沒有人寫下來的 workflow 生成一份新的 skill.md。或者就放進 skills，本質上是 workflow memory。Agent 能在安全的環境裡走過不同系統、看見互動。做得對，就不再有知識流失。像一個抄寫員跟著你，把做成的和沒做成的都寫下，再分享怎麼改好。

## 檔案很快，做完安全你就有了資料庫

[35:25](https://www.youtube.com/watch?v=-stDHMwbBRw&t=2125s) Agent 愛看檔案系統。你叫它用旁邊那個 MCP，本地若有東西、而且 context 還有效，它有時就直接抓。他在今天的 AI 開發者身上看到的檔案系統好處是速度。不必煩基礎設施、元件、工具選擇，不必想用哪個資料庫、stack 裡該有什麼，就是檔案。工具選擇那一段思考被拿掉，速度就在。代價是安全。那是他們花了四十年在解的事。檔案系統對 LLM 和 agent 仍是好介面，因為訓練資料裡有一大堆 shell 和 bash、怎麼讀檔寫檔。它們對檔案有天然的親近，今天大家在用這個。但不該停在這裡。1970 年代的 Unix 哲學講過 everything is a file，或 everything is a file descriptor。他看技術圈像土撥鼠日，同樣的事一再回來。2026 年又有文章說檔案就是你需要的一切。他說 1970 年代做過了。後來知道還要 concurrency、ACID transaction、安全、資料隱私。等你在檔案系統裡把這些都做出來，你會發現自己在檔案系統上做了一個資料庫。他跟開發者說的是：不要拿工具選擇來實驗。檔案系統好用，是因為它和 LLM 親近、介面簡單。把該有的保證做齊之後，你面對的已經是資料庫要解的問題。

## 下一步是把 agent loop 接上 training loop

[38:33](https://www.youtube.com/watch?v=-stDHMwbBRw&t=2313s) Model 變好之後，還會不會那麼依賴 context。他覺得 AI 裡的預測通常是錯的。Simon 說一年後會拿他今天的話來烤。Oracle 試著遵守的原則是，尤其在 AI，要比客戶早六個月。大家現在談 context engineering，他們說自己更早在談，談了很多年：你需要資料。早六個月看到的是，你不只要 context，還要一個辦法讓 context 被很有效率地取出。這些系統要在近即時或即時裡工作。Agent 怎麼在背景處理資料，同時又即時工作。他說這全部落到基礎設施和可擴展，那是他們在 Oracle Database 和 Oracle Cloud 上自認的長處。

[40:56](https://www.youtube.com/watch?v=-stDHMwbBRw&t=2456s) 他看到的方向是 continuous learning 變成常態。你不再只想「怎麼拿到對的 context」。你更想：怎麼從這個 agent loop 拿出對的 context 或資訊，送進真正 model 的 training loop，也許兩週後換上重訓過的 model。那個讓它工作有效率的核心 latent memory，會被剛收集的新資料改進。已經看得到痕跡。幾個月前 Cursor 寫過，他們拿從 IDE 收集的 agent traces，用來 fine-tune embedding model、提高表現。那就是一種 continuous learning。接下來六個月，他要看的是怎麼有效率地把 agent loop 和 training loop 接在一起。

Simon 把 context 分成會跟著使用者變的那一種，和幾乎是學習的那一種：99% 的人這樣做，這就是他們需要的。後者可以一直推回學習循環。前者比較像客製，像給自己的 skill，別的團隊、組織、個人可以有別的做法。Richmond 說，就是往那裡走：把兩個 loop 放在一起。
