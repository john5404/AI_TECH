# AI Security Risks: The Impact of Generative AI in Developer Workflows with Liran Tal & Ashish Rajan

Fireside。主持人是 Simon，他說三個人都在 Snyk 待過（字幕聽成 sneak）。Ashish Rajan 做過不少 CISO，主持 Cloud Security Podcast，也開了 AI cybersecurity podcast。Liran Tal 的工程背景是 JavaScript，字幕說他在 Snyk 的 Seal team 當 lead。片長約 36 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=zm7WDxH7LLw)

## 一句話

Liran 被問 LLM 會不會寫安全的 code，他先說不會，再補：有時會、不是每次、不常、看情況，所以基本上不會。風險也不停在你自己的第一方 code。Ashish 樂觀，覺得品質會比人寫的好，但採用會從低風險自動化開始，醫院和健康資料仍要人看。真正新的盲點是你把 model 的輸出、S3 上的檔名、訓練資料當成可信；修補建議若沒有整條 code path，雙重 URL encoding 這種鏈就可以把你打穿。

## 自駕車可以撞，AI 寫的 code 不行

[1:17](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=77s) Simon 問 LLM 寫不寫得出安全的 code。Liran 說不。真的答案是有時會、不是每次、不常、看情況。Simon 問大家是不是只想第一方 code。Liran 說他的第一方可以是你的第三方：他維護一個 library，用 AI 寫了，下游拿去用。風險在各種地方碰到你。

[2:30](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=150s) 基礎設施也是 code。Ashish 偏樂觀。他在 podcast 裡用自駕車：一開始人人怕死，但人為事故遠多過自駕可能擋下的。Code 還沒到那一步，不論 cloud、JavaScript 還是 Java，比以前更接近能把品質做高。他提到 Simon 和 Guy 最近一集，聽完想到鋼鐵人叫 Jarvis 去做：你有想法、要實作、要架構，而不是先卡在 SQL injection 是不是當下最大的問題。

[4:55](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=295s) Simon 問是不是對 AI 的 code 設了比人更高的標準。人開車撞了算人，AI 撞了就怪電腦。Liran 說是，而且應該高。低了對我們不好。他要 code 而不是人去開鐵路、去開那些要規模化的東西；字幕裡有一句具體例子沒聽清。Infrastructure as code、security as code、everything as code，世界被 code 定義，因為 AI 把生產力換掉。錯誤率要非常低。還沒到。過去四到六年 transformer 那些突破，是在指這條路：要快，也要安全、要效能、要符合法規和政策。他說目標是從 A 直接到 D，不必經過 B 和 C。

[7:30](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=450s) Ashish 用 Uber 當對照：從小被告誡別上陌生人的車，後來車牌對了就上車。自駕之所以好，是有人類駕駛累積的海量公里。Simon 問風險是不是舊漏洞被放大：code 更多、更快、更自動，還是另有新風險。Ashish 說自動化走過這條路。大家先自動化低風險，沒有人一開始就自動化 production。Agent 寫的 code 也會一樣，Gartner 現在叫 agentic AI。人會決定哪一段可以交給它：半夜的後端函式，服務掛了也沒關係；醫院裡可能危及生命的，不要讓它造。生命比錢高。安全、合規、品質怎麼用 AI，看用在哪。低活動的任務會更常、更快被自動。資安維運已經在用它做文件和摘要。關鍵處採用會慢，不是因為緊張，是因為改動的後果：健康資料不該被丟上網，至少要有人先看。他說安全的人被當成負面、以為 Skynet 是真的；他想改這個印象，AI 也會提高生產力。

## 現在就能看的三個入口

[11:10](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=670s) Simon 問，就算不是最關鍵的服務，知道 code 是 AI 生的，workflow 跟現有自動化測試有什麼不同。Ashish 說 code 還沒到頂點，依今天回答。三塊。第一是開發者用的是被授權的 copilot，還是第三方。有人說我有 Microsoft E5，就讓大家用 Copilot。但現在搜 copilot 會冒出一堆，用這個詞當過濾器擋不住第三方。從 Hugging Face 或其他開源網站拿 coding agent，是很多人講的第一風險：你信的是不是對的來源。

[13:27](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=807s) 第二是有人叫 LLM firewall：進去和出來的資料。你交給內部或外部 LLM 的，以及它回來的，不能一次就信。理想是把 model 維持得很笨，管的是資料進出的安全，而不是先問「我的 LLM 安全長什麼樣」。多數組織用 wrapper 或 proxy 包住 ChatGPT 或 Claude，他說這是最流行的兩個。自己做 model 很貴，很少人在做。用的人多半有 Enterprise 協議，從 API 呼叫。字幕後段有幾個詞沒聽清。第三是無聊但還在的第三方風險：跟 Microsoft、Amazon、Salesforce 都有協議。長大的那桶是 ChatGPT 的資料若出事。他把薪資單傳上去，並不足以拿來訓練，但敏感資訊已經在裡面。

[15:40](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=940s) Liran 戴回寫 code 的帽子，講開發者的盲點。十多年前把檔案放到 S3，你以為安全：不在磁碟上，沒有 path traversal。前後端把這個資產當安全的，因為不是使用者輸入，檔名是我的。檔名裡若有 XSS 的 script tag，在 bucket 上只是字串，AWS console 沒事。你一信任它、塞進 DOM，又沒做 purify、跳脫、output encoding，就結束了。LLM 一樣。Prompt injection 大家想到的是叫它給密碼、訂車、用一美元訂飯店，也就是把行為扭去別處。若把輸出當來源寫進資料庫，注入可以生出 code；你沒有用 prepared statement，就變成 SQL injection。

[17:57](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1077s) 另一個是訓練資料。可以毒 pickle 和 PyTorch 檔：序列化的資料進了第三方，被塞 payload，反序列化之後 model 做了不該做的事。開發者不會去想 training set、model 這些。這是攻擊面。以前不明顯，因為資料是你信的。他說十五年前的機器學習資料是內部 data scientist 吃進去的，還有一點保證：裡面沒有 SQL injection，也不會有不想要的行為。

## 公開的 bucket 會變成預設，修補也看不到上游

[19:03](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1143s) Simon 說訓練資料本來就不完美，也有 data poisoning。他引用 podcast 上 Armon Dadgar（字幕聽成 Arman dadgar）的對比：開源的 Java 或 JavaScript 裡，有你想學的好例子，企業或非企業都有。Infrastructure as code 不一樣。企業級的 IaC 檔會不會被放上公開 repo，接受度不同。Armon 的例子是世界上公開 bucket 多得多。企業預期公開的應該很少。你向 LLM 要一個 S3 bucket，它最可能給你公開的，預設就不安全。是不是每個 AI 生的 S3 都會是公開的？給企業用的 IaC 訓練資料是不是根本不夠貼？

[20:59](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1259s) Ashish 說他談過的企業，做自己的 chatbot 多半用內部資料。前提是人已經在生產爛 code，所以也在用爛 code 和爛 IaC 訓練。他把問題翻成：你拿去訓練的內部資料有多可靠？有沒有人有時間把結構化、非結構化的都看過、信它的品質？若走外面，agent 幫你做出很漂亮的 code，幕後用的卻是所有公開 S3。那是平衡。他看到很多 LLM agent 走 Enterprise 授權和私有部署。Azure 可以有完全私有、不連網際網路的 LLM，但它仍在看裡面。人要舒服還要時間，訓練資料一直會是問題。大家都想跳上 AI，然後發現六年前有人留下一袋沒標籤、沒人碰的爛馬鈴薯，現在 LLM 想要一塊。他後來又說成爛番茄。他覺得還在起步。

[23:29](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1409s) Simon 問依賴建議的修補有什麼風險。Liran 說修補來自統計模型和它以為自己有的 context，但 context 常常不對。一離開 benchmark 用的範例 repo 和 to-do app，事情變複雜，就需要大量 context 和 code flow。例子是在處理 URL，它建議做 URL encoding 或 decoding，那一步本身是對的。上游另一個 service 或 controller 已經 encoding 過，就變成 double encoding，漏洞在等。它若不會追 code path、不知道不該再編碼一次，你就中了。所以不能只是統計模型。漏洞多半很細、串在一起：prototype pollution 到 code injection，到 command injection，再開一個 shell。Demo 裡單一個 XSS 不是真實世界。也許以後 model 加上另一套邏輯會變聰明。現在很基本，像是省了你去查 path validation 怎麼做的時間，還不到可以交給它修、然後你放心的程度。

## 職稱還早，稽核模型和稽核套件不是同一件事

[27:44](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1664s) Simon 問平台團隊、DevOps、paved road 之後，會不會有一條 AI security 的 paved road 坐在平台團隊裡。Ashish 說很多公司已經在做 AI 專案，現在是 platform engineer 在扛，因為做 AI 應用的零件沒怎麼變：底層仍是 Kubernetes（字幕聽成 cuties），仍有資料庫。要等 AI 應用的數量超過一般應用，才會像當年 Cloud 長出 cloud security engineer、Kubernetes 熱了再長出 kubernetes security engineer。那時那些非 AI 的可能已被叫做 legacy。現在還不會。

[29:53](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1793s) Liran 同意，現在就叫 AI security engineer 太早。AI engineering 團隊則不早，LLM 已經在我們之間。他開玩笑說有時它們假裝成 Java LLM，那種不要信。Kubernetes security engineer 已經很窄，還得看工具、生態和基礎，風險在某種程度上能外包給第三方。我們連怎麼好好保護都不清楚，所以還早。

[31:01](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=1861s) Min 問，開源以前被看成比專有更安全，因為漏洞是透明的；對 model 和 agent 是不是不再如此。Ashish 說開源和專有都不能信，緊張的基礎在這。對內，那袋爛東西還在，組織裡有沒人碰的部分。對外，他學寫 code 時的第一個 GitHub repo 還在；他教雲端時（字幕聽成 cities and cloud）有成熟的 repo，兩個是完全不同的經驗，第一個他不好意思再提。他不會說哪一邊更安全。Liran 說更細，第三方套件和第三方 model 的基礎不同，很難比。稽核開源套件看得到 maintainer、貢獻者、git log、修復何時進 release、它用了哪些第三方，還有版本怎麼發布的 provenance 和簽章（字幕聽成 provan）。Model 沒有這個層級。別人告訴你怎麼訓練，你看不到實際怎麼訓練。寫 code 的標準和訓練 model 的標準還不存在。要稽核 code 還是稽核 model，這點很重要。

[34:00](https://www.youtube.com/watch?v=zm7WDxH7LLw&t=2040s) Macy 問團隊用 generative AI 時的 social engineering，能做什麼，還是太早。Ashish 舉一個：開發者想知道他的薪水，因為他在網路上看起來很闊。現在的說法是要有某種 data access manager，依角色管不同身份能碰什麼。他覺得 AI 世界反而可能做得更好，因為你更知道資料在哪、是什麼、誰能拿、該拿來做什麼，而且是實作，不只是政策文件。有趣，但也很早：還沒看過規模化的 AI 攻擊，不知道 social engineering 會長成什麼樣，這一部分可能太早。Simon 說下一場幾分鐘後開始，把他們請下台。
