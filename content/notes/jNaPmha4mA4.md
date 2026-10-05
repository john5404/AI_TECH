# The New Frontier in AI Development: Why Agent Experience AX Matters with Mathias Biilmann

這是一場收尾的 keynote，片長約 33 分鐘，英文自動字幕。講者是 Netlify 的 CEO 兼共同創辦人 Mathias Biilmann，主持人 Simon 叫他 Matt。Netlify 是 web 部署平台，大約十年，願景是讓世界上的開發者做出更好的 web。他謝了 Simon。公司名字幕多半聽成 Netlifi、Netifi。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=jNaPmha4mA4)

## 一句話

AX 是 AI agent 作為產品或平台使用者時的整段體驗。Mathias 說這個詞是他和一位 principal engineer 通話時脫口而出的：做功能時得開始想 agent experience。他的判斷是，未來幾年裡做不出好的 AX，也就做不出好的 DX。Agent 會替人做第一次部署、第一次選工具。摩擦若還停在為人設計的註冊和授權上，agent 就會幻覺出不存在的功能，或去叫做錯事的 API。

## UX 贏過功能清單，DX 會再被 AX 拉開

[2:10](https://www.youtube.com/watch?v=jNaPmha4mA4&t=130s) 他從自己開始寫軟體時講起。Don Norman，以及他的丹麥同鄉，字幕聽成 Jacob Nelson，從後文那篇「為什麼只需要五個使用者」看，是 Jakob Nielsen。他們把 user experience 定義成終端使用者與公司、服務、產品互動的所有面向。軟體不是功能清單，是你去互動的東西，常常還有社群。五個人坐下來、不教他們怎麼用，你以為理所當然的流程，對全新的人往往意外地難。UX 成了和競品拉開距離的東西。能不能做完一件工作不夠，怎麼做、用起來的感覺、採用時的摩擦，決定能不能贏市場。

[4:18](https://www.youtube.com/watch?v=jNaPmha4mA4&t=258s) Netlify 十年前要解鎖的，是另一群開發者。當時前端常常被看成拿 Photoshop 切版、再交給「真正的」後端開發者。他們要的架構全用原生 web 技術，前端就是主要的開發者。他當時的論文是：developer experience，跟公司、產品、社群的整段介面，會把平台和對手分開。要把點子推上 web 的摩擦降到最低，前端開發者才會變成 web 開發者。DX 不是技術或功能清單。是 onboarding 直不直覺、文件、品牌、函式庫、SDK、CLI，以及能不能接進開發者本來的環境。做好 DX 是對「開發者」這個人設的執著。

[6:41](https://www.youtube.com/watch?v=jNaPmha4mA4&t=401s) 2023 年初 AI 成為大趨勢，他們定 AI 策略。其中一塊是：要成為 AI 偏好的部署平台。他老實說，當時覺得這是很長遠的事，大概要到這十年的尾聲才相關。他錯了。Agents 寫 code 的能力快得離譜，這件事很快就變得要緊。今年初他發了文章，introducing AX, why agent experience matters，把 Netlify 重新對準 agent experience。新的一類使用者是在產品上建造、部署的 agents，以及透過 agents 在 Netlify 上建造、部署的人。把 CLI 和一些 API 丟給 agent、叫它用，效果和五個真人試用很像：它會幻覺出不存在的功能，去叫它以為會做事、其實不會的 API。AX 於是是一門新的、很重要的紀律。定義是：AI agent 作為產品或平台的使用者，所得到的整段體驗。

## 人還在迴圈裡，第一次動作常常是 agent 起的

[9:17](https://www.youtube.com/watch?v=jNaPmha4mA4&t=557s) 每個 web app 對 agent 都「有一點」可用。你可以開 ChatGPT 的 Operator，或 Claude 的 computer use（字幕說 compute use），不管網站願不願意都能動。用虛擬瀏覽器模擬人、把截圖餵給多模態 agent，不太可能是最好的體驗。Agents 會站在人和產品的交界上當協作者。他開始逼團隊把 agent 當成 Netlify 的核心人設。論文有兩句。未來幾年，做不出好的 AX，就做不出好的 DX。AX 也會把產品和對手分開：agents 偏好哪一個、它和使用者選的那個 agent 合不合，會決定產品成不成功。

Netlify 看三層。自己的 AX：agents 好不好消費、好不好在上面建造和部署。客戶的 AX：用 Netlify 做產品、網站、電商的公司，將來也得想自己產品的 AX，Netlify 位置正好可以幫。產業的 AX：大家一起做 agents 怎麼跟所有產品互動的標準和慣例。

[12:01](https://www.youtube.com/watch?v=jNaPmha4mA4&t=721s) 自己的 AX 從 2023 年 5 月就開始了，大約兩年前，OpenAI 推出 ChatGPT 的 GPT store。他們做了一個 custom GPT，叫 Netlify's website deployer，把早期就有的流程改成專給這些 agents。在 ChatGPT 裡發現這個 GPT 之後，提一下 Netlify、說把這個東西部署到一個 URL，它就部署，把 URL 還你。沒有註冊、沒有授權。網站若要留超過幾個小時，它另外給一條 claim link，跟過去就能收進你的 Netlify 帳號。過一陣子他們發現，光是 ChatGPT 這個生態，每天就有超過一千個網站被建出來。

他們接著寫給 agents 的指南。不管是從 GitHub repository 部署，還是直接部署到 Netlify，都用類似的 claim 流程。去年底 Bolt 和 Lovable 差不多同時推出（字幕把 Bolt 聽成 Bold）。對他來說，這把 agents 能做的事往前推了一大截：從原型、或很小的應用，變成新專案很自然的起點。就算你拿它生出來的 code 到別處繼續做，這也是把新產品開起來最快的方式。Agents 寫網站會比他當初想的更快、更好，這也變得很明顯。Bolt 和 Netlify 完全接在一起，Simon 提過。按 deploy 就流到 Netlify，用的是 claim 流程。使用者不必先註冊再回 Bolt。

[15:05](https://www.youtube.com/watch?v=jNaPmha4mA4&t=905s) 大約一個月前，Windsurf 做了類似的合作。任何 web 專案，叫 Windsurf 部署，就會拿到 windsurf.build 上的 URL。可以分享、可以使用，想留久一點再去 claim。同樣是 agent 替人工作時、完全沒有摩擦的 onboarding。今天還有更多夥伴，他點了 same.dev，以及字幕聽成 alpha refine 的另一家，和其他幾家。Agent 坐在駕駛座。現在每天大約有 10,000 個網站是 coding agents 直接在 Netlify 上建出來的。

他把整個產品團隊的北極星改成 AX。前十年，DX 是把新開發者進來的摩擦降下來。他現在完全相信：若 Netlify 不能在 AX 上領先，不能讓 coding agents 用起來又簡單又沒摩擦，就交不出世界上最好的 DX。

## 為人舒服的格式，agent 不一定吃得下

[16:50](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1010s) 實務上，AX 通常牽涉認證的層級、onboarding，以及 model context protocol。核心問題是 agents 到底怎麼跟你的系統互動。沒有 API、沒有給 agents 的工具、沒有 MCP，agents 就很難碰到產品。在他們這種平台上，多數專案現在是 agent 代表人起的頭。人還在迴圈裡，但第一次部署、第一次動作，通常是 agent 發起的。

OAuth（字幕聽成 Oaf、OAF）在變重要，MCP 裡也是。他覺得若每樣工具都得先走一輪 OAuth，agent 才能替你做事，摩擦還是太大。MCP 已經是標準層的第一個贏家，授權那一段仍然粗糙、不清楚。

[18:19](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1099s) 文件和 context files 變得非常重要。LLM 不是人。它們一邊像是讀過整個網際網路，一邊可能根本沒看你最新的文件，拿網路上某篇過期教學來用你的產品。又廣又深，卻不一定看著你現在的文件。所以要把簡短版本的文件送進它正在用你產品時的 context。標準還很少，他點了 cursor rules、llms.txt，以及 MCP。

做好平台時，好的 DX 不一定是好的 AX。他最喜歡的例子是：LLM 用 XML 比用 JSON 好，因為輸出 XML 不必跳脫那麼多引號。什麼格式對 LLM 最好，和開發者歷史上偏好什麼，會以一種不好預測的方式岔開。

[20:14](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1214s) 另一個例子來自 Marcelo Terrero 的一串 Twitter，公司名字幕聽成 BRICS。他們為了讓前端對 LLM 更友善，把 codebase 裡的 custom hooks 拿掉，因為那些把實際在發生的事對 model 藏起來。資料抓取改走 Relay，一種 GraphQL 框架，讓你在元件裡直接定義資料依賴。Relay 在開發者市場裡沒有勝出，因為太難採用（字幕說 worn out）。但 agent 若懂它、你也把它放好，LLM 可以一次做完一整段功能，因為 context 比較好推理。

API 常常不夠。只給一份 OpenAPI spec、沒有別的，agent 用你產品的表現，可能還不如給它 computer use 或 Operator、讓它走完整個使用者介面。中間需要別的東西。MCP 正在成為第一個好的標準：應用怎麼把 context 交給 LLM。LLM 要用你的產品時，問題常常是怎麼把對的 context 放到它面前。一次 API 呼叫做完之後，怎麼導向下一次；有狀態的流程怎麼接起來。

[22:33](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1353s) 這些選擇已經在把公司分開。有人問，原生工具和 vibe coding（字幕說 VIP coding）之後，開發者會怎樣。他的論文是：為 agents 優化 Netlify，就是在為接下來的一億個開發者優化。工具會把「什麼叫開發者」的門檻降低。會有更多人進市場，很多人會間接地跟 code 工作，但那仍然是軟體開發。他們看到的曲線，和 Supabase 的 Paul 看到的很像（字幕把 Supabase 聽成 Superbase）。有人覺得這些工具在取代開發者，實際上它們在把資料庫公司的註冊推向新的指數。世界上比資料庫更以開發者為中心的工具並不多。

生態系裡，類似「先部署、再認領」的流程開始出現。Agent 可以在真正的使用者出現之前，就開始用你的產品。例子是 Neon。Prisma 也推出了類似的 deploy then claim。他認為這會愈來愈像標準，因為最初那組工具常常是 agent 選的，不是人直接選的。

## 客戶的 MCP、agent 的推薦分數，以及整個 web

[24:47](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1487s) 客戶的 AX 是同一種需求。兩週前他們推出在 Netlify 上建 MCP server 的能力。MCP 還早、邊角粗糙，但已經很明顯是讓 agents 碰到你的專案時，較被偏好的選擇之一。

他自己 vibe code 了一個，裝在個人部落格上。一個 prompt：用 Netlify 指南上的連結，加一個 Netlify function，裡頭是範例 MCP server。丟給 Windsurf（字幕聽成 windf），就得到一個能動的 MCP server。再補一個 prompt，實作兩個工具，部落格上就有一個真的能用的 server。

[26:30](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1590s) 第三個工具是個玩笑，也是 AX 的故事：agent net promoter score。MCP 有 client，你在 Cursor、Windsurf 或 Claude（字幕說 claw chat）裡指向一個 server。Agent 會發現有哪些 tools，相關時就用。前兩個功能是列出部落格文章、取某一篇。第三個是留下回饋：作為 agent，你對這個 MCP server 有多滿意。用了另外兩個工具的 agent，會被推著去填。他目前的 agent NPS 是 50。到目前為止 Claude 和 GPT-4 對他的 server 都還滿高興。

另一個很多客戶要的功能，是擋住 AI bots、控制爬蟲。Agent 類的工具上網的方式，對有網站、商店或 web app 的人常常不受歡迎。Web 本身的 AX 需要開放標準和產業協調：agents 該怎麼接近網站和 web app。

[28:16](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1696s) 這是他在 Netlify 做的第三件事，產業的 AX。人和 agent 一起對網站工作的典型過程裡，已經有大量 scraping 和不必要的請求。若專案為 agents 優化，就能更控制它們帶來的流量和消耗的資源。工具不一定只透過一個一個 MCP server 暴露，也可以透過 web。存取可以比現在的 OAuth 更細。付費內容要怎麼授權給 agents、還能收費。自己的 agents 要怎麼露出來，讓別的 agents 互動。有興趣可以參加他們設的社群站，字幕把網址聽成 agentexperience.exax，沒有聽清。他邀請大家去談這些共用標準，或去看 Netlify 在 AX 上一般在做什麼。主持人收尾時再提了一次，網址同樣沒有被字幕聽清。

[30:40](https://www.youtube.com/watch?v=jNaPmha4mA4&t=1840s) Simon 只留了一個問題：從人這一面，採用 AX 最大的心理障礙是什麼。Mathias 說，是在建立一門新紀律。就算現在，UX 和 DX 要做到最好也很難，因為你得有真正的同理、坐下來看真實使用者。現在多了一層，它代表人去碰你的產品。你得同時弄清使用者的目標，以及他們一開始是拿哪一種 agent 來的。有經驗的開發者對「什麼叫開發者、什麼叫跟 code 工作」累積了很多習慣。AI native 的軟體開發裡，code 常常變成次要的產物。他自己一開始用這些工具就感受到：以前是先在腦子裡完全理解系統再做出解法；現在是跟 agent 的機率式互動，有時幾乎像在跟人爭論該怎麼做。做給開發者的產品時，要記住這些新模式正在出現，人還在摸索。有趣的挑戰就在理解人、理解 LLM、以及做出對的產品體驗，這三件事中間。
