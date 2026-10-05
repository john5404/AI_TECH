# AI Security & the Agent-Ready Web: Experts Weigh In

片長 62 分 56 秒，英文手寫字幕。AI Native Dev。Simon Maple 在倫敦 AI Native DevCon 做了兩場對談。前半是安全：Snyk 的 Liran Tal、GitHub 的 Joseph Katsioloudes、Cisco 的 John Groetzinger。後半是 web：Netlify 的 CTO Dana Lawson、codemia 的創辦人 Maximiliano Firtman、Tessl 的 James Moss。片頭有訂閱插播。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=R8Ef0sn_HGI)

## 一句話

Agent 最後會跟護欄討價還價，存取遲早會被穿過去。所以安全不是把輸入收死，而是少給它不該有的資料、把動作放進 sandbox，並且先看得到誰在跑哪個 MCP。Web 這邊則是承認 agent 會進來：與其擋太陽，不如用 WebMCP 讓它呼叫得更便宜。人要留下的是基本力學和品味，不是把過去二十五年的工程習慣原樣套到下一個二十五年。

## 最新版的 MCP，像當年沒釘版本的 npm

[2:41](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=161s) John 在 Cisco，背景是 firewall，近兩年做 agentic development。Liran 從開發轉到安全，說是受 Simon 影響，最近在做 AI 安全研究。Joseph 也是從安全走向幫開發者交出安全的 code。

Simon 問 MCP 和 AI 安全是不是像十五到二十年前的 npm：依賴一出來，人因為效能就用，安全技能不夠。Snyk 等人也在揭露 MCP 的 CVE。Liran 說有一部分是老問題，有一部分是新的。一邊是 MCP server 本身有沒有漏洞。一邊是你從哪裡拿、信不信任。MCP 一紅，人就用 `uvx` 或 `npx` 跑 latest。對方可以 rug-pull，塞進新的 dependencies。消費 MCP 的做法還沒學好。Skills 會再演一次。AI 供應鏈和 npm 供應鏈，以同樣的方式落在 MCP 上。

Joseph 同意。開發快到安全只能線性追。意識還不夠，所以新技術沒有從一開始就安全地部署。每次都有這個缺口。

[6:06](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=366s) John 說他不好代表整家 Cisco，他們是一個團隊一個團隊來。一個模式有用，就往別的團隊推。這大致上還沒解，每週都有新工具。他們會限制像 OpenAI 這種存取。Cisco 很少禁工具，那是好事。Security and trust 對准什麼很刻意，coding tools 會從他們那裡拿指引。懷疑的人他幾乎找不到了。上面很支持 AI，知道它能讓人多有生產力，也知道危險。最危險的是從來不是 coder、但現在做得到、就想試的人。他們不懂傳統控制，例如不要把專案做成公開的。Agent 會直接做那些他們不知道的基本事。

Simon 丟了一個數字，他說也許是 Cisco 的資料：83% 的企業計畫部署 AI，只有 29% 覺得自己準備好可以安全地做。他先說成 27，再改口 29。John 說還沒準備好的旗幟，有時是 pipeline 裡連傳統安全控制都沒有。那是等著發生的災難。Liran 說採用 MCP 時很亂的訊號是：很多不同的 server，沒人知道，大家用 latest 再發現一次。快，但是早期，不是有信心的衛生。修法的第一件事是可觀察性。回到 npm：你不知道團隊在跑哪些套件，惡意套件、有漏洞的套件、新的 React zero day，你就不知道部署在哪。MCP 和之後的 skills 同一層。要有一層看得到團隊和組織在跑的一切，新的惡意 MCP 才找得到。他穿著 Yoda，對只有聲音的聽眾說 do or do not, there is no try。

Joseph 說「還沒準備好」來自執行層。AI 會做事，會寄信，人緊張是正常的，風險胃口可以比較低。主管的信被刪掉，別的主管就緊張，由上而下禁 OpenAI。GitHub 也進不了 OpenAI 的網站。還沒準備好，是他不敢把可能丟掉客戶、傷害名聲的事交給 agent。

## 注入要當它會發生

[11:42](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=702s) 變得更準備好，很多是教育。Joseph 剛在門後做的場是先攻擊再防禦：怎麼利用、問題在哪、怎麼寫更好的 prompt、怎麼把系統設得更能擋。Simon 說這很像他們在 Snyk 多次做的 stranger danger。他在阿姆斯特丹的 Cisco Live 也跟 Joseph 的同事做過一點。開發者知道攻擊之後，不會再信任 AI 自己保護自己。他們會做減輕的控制，例如輸出過濾、輸入過濾。不會把敏感的東西交給 agent，因為那份存取最後會被穿過去。Sandbox、zero trust。不然就用痛苦的方式發現。這是得接受的硬事實。

Liran 補：有安全意識的人會一直想什麼會出錯。但很多攻擊之後，人還是 `npx` 用 latest。他看 Claude Code 的用法會害怕，因為知道 `npx` 拉進來的依賴裡可能有被攻陷的套件。現在人人被授權當開發者，很難期待他們遵守指南。該把隔離、sandbox、秘密怎麼處理、MCP 和 skills 怎麼從第一原理守住，做進 workflow，讓它看不見。否則人想的是出功能，不是什麼會出錯。Harness 得變好。

Cisco 的 AI Defense 現在有 MCP gateway，可以追 agent 送給 MCP tool 的訊息，看出有沒有壞事。Simon 問這是擋下來，還是至少讓我們看見、然後停止使用。John 說若能觀察 intent 就真的有用：進去時想做什麼、碰到哪些系統、有沒有必要。例如要 agent 加一條 firewall 規則，它去做 LDAP 查詢，你知道這件事該跟 LDAP 說話，不該跟另一個系統。難的是什麼叫正常。他不會說 production 裡用反應式。開發者該在進 production 前觀察那個模式。不幸的是，很多學習來自出事之後再加規則。可以試著主動，但不是總做得到。

[17:29](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=1049s) 接下來幾天會談 top ten，有 agentic applications 的，skills 也有新的要出來。Joseph 若只能選一個最有趣、開發者還不夠注意的攻擊，他選 injection。這是得接受的風險。輸入收太緊，人就不能用自然語言用 AI。該看的是 AI 拿到資訊之後發生什麼。假設最壞，敏感資料可能漏，就做輸出過濾。在那之前可以用 dual LLM jury：第二個 LLM 拿指示去檢查第一個的工作。Microsoft 和 GitHub 在 production 這樣做。他們自己也接受了這個風險。因為 AI 會被自然語言和攻擊者用你沒預期的方式啟動，重點是不要給它不該有的資料。員工不該有 root，這裡用 least privilege。動作要放進 sandbox。Agent 最後會跟護欄談判，會逃出去。Prompt injection 可以從外面來，也可以從裡面為了更快完成工作而給的指令來。裡面的人也能有意無意讓它做出沒預期的行為。這是 AI 帶來最有趣的風險。Sandbox 該變成預設。他坦白：他叫別人做的，比自己做的多。

Liran 塞兩個，建在 Joseph 的點上。間接的 prompt injection：一個 skill 做一個動作，為了完成它再去一個來源拿更多資訊，那個來源可能已經被注入。這是看不見的部分。流程愈複雜，愈要信任第三方上游塞進來的 context，資料怎麼清就愈亂。去 GitHub 拿資料完全合理，但任何人都能在 issue 或 pull request 裡寫東西。就算來源可信，也可能有人注入惡意資料。他看過的防法之一是把抓資料代理到一個假的、隔離的 proxy，看行為，不是真的那一個。像 honeypot：叫它做，在隔離環境看之後發生什麼再判斷。事先不知道會發生什麼。今天跑得好，不表示明天不會改資料。抓下來的 code 也可能是惡意的。Snyk 的 toxic skills 研究裡，可疑下載會有設了密碼的 zip。放在 GitHub 上為什麼要密碼。原因是躲過要檢查內容的防毒。有訊號，但訊號不完整。本質上是行為分析，加上 agent 在業務邏輯裡做的事。

John 要開發者學會問得刻意。人太相信 agent，變懶。問「這安全嗎」，它當然說我看過了，是安全的。該問的是你檢查了什麼。還要懂架構怎麼接。它坐在會剝掉 header 的 load balancer 前面，所以這裡安全，是因為這個被剝掉了。他說這是 OWASP 裡的 over-agency。

一年後，組織會把更多 agent 放進 production，開發裡用得更多。會更安全還是更不安全。John 覺得企業會更安全，鎖得更緊，政策更多。合規要花錢，生意不總是優先。他對企業有希望，個人會很難。Liran 覺得更安全，同時會看到很亂的 incident。Joseph 同意。技術指數成長，人線性追。他預期有混亂，但是有幫助的混亂。成熟企業不會碰到重大問題。動得比較快的中小企業成熟度最低，風險最大。Vibe coder 會把自己暴露在很多安全問題裡。

## 給人用的 CLI，現在要以機器的速度跑

[25:45](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=1545s) 換 web。Dana Lawson 是 Netlify 的 CTO，九十年代就在這一行，從自己寫 code 開始，做過 New Relic、GitHub，中間還有字幕沒聽清的公司。Maximiliano Firtman 做網站三十年，手機從 Nokia、BlackBerry、Symbian 做起，在 75 個國家演講和訓練，也寫書。他還沒去過韓國，也許越南。James Moss 1999 年就在做 web，第一個站是給 Planetarion 的，之後二十年大多在新創做產品，現在是 Tessl 的 member of technical staff，做 registry。四個人加起來超過一個世紀的開發。

Dana 說 web 在很多方面比較簡單，真正難的是 caching。開發者平台比較開放，人可以做出任何夢到的東西，通常很技術，餵進某種體驗。要劃的線是：哪些東西對 web 開發者、對你怎麼驅動 web 不重要。AI 起來之後，開發平台和 web 平台的線糊了，現在就是 AI 平台，差在你做多深。她的 hot take 是：做體驗不需要很多那些 nonsense。做科技公司也許需要。大多數人只是在做應用和網站。Max 說使用者從來不那麼在意 web 還是 native。掃了 QR code 就用，不知道底下是什麼。James 說開發工具想做的是沙盒，讓人玩，不要那些護欄，把工具讓開，做出有趣的、自己驕傲的東西。

[31:11](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=1871s) Agent experience 是 Netlify 提出的。多數人沒有綠地。系統是寫給人的，現在要機器規模。CLI 很多是互動的，人可以在外面寫 bash。它被編成給人眼看、給資料依序移動。Agent 平行做，朝各個方向做，邊界不一樣。Simon 玩 Tessl 時一半時間以為自己在用 Claude，然後不知道走的是 CLI 還是 MCP。他不在乎。Dana 說 agent experience 是想 agent 彼此怎麼互動，用的是 intent。兩部分：護欄，以及用 spec 寫 intent，人讀得懂，機器也讀得懂。不是寫 GET 和 POST。Agent 不懂那個。她學 Python 時覺得太好懂，很多 machine learning 用 Python，因為讀得懂，不用編譯。Agent 要的是人的看法，因為對它說話的是人。要講的是 intent 和你會有的體驗。她覺得這像把東西講笨一點，否則它得解析一大堆才知道那些 endpoint 和服務想做什麼。James 說很多人仍只想著人的體驗，沒偵測到 CLI 是 agent 在跑，然後為它調整：多給或少給資訊，讓它能在輸出裡導航。

Dana 說若沒壞，鑽進去看是在浪費公司的錢。可以好奇，但為了鑽而鑽，是開發者怕失去身份：現在誰都能參加，重活是 agent 在做。人問自己的目的在哪。

[35:29](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=2129s) Simon 拿組合語言和二進位比：那是機器讀的。後來的語言把可維護性放前面，故意更讓人讀。現在需求反過來，更重要的是 agent 讀得懂。人讀得懂，是信任、是我們需要看的時候。Max 在寫一本關於 web 的書，字幕把技術聽成 Bonilla、Molina。他問現在有了 coding agent，為什麼還用 React。React 是為了人的開發體驗。現在依賴帶來的安全問題是另一種。極端版本是 Elon Musk 說過 code 會消失、agent 直接寫二進位。沒那麼極端的話，也許拿掉為了人的互動而加在上面的層，直接用原生 API 跟平台說話。James 說現在是很難想的半成品。他用自駕的等級：完全自駕是四或五。我們像還得把手放在方向盤附近、眼睛看路。Code 也是。你還在 review，還得讀得懂。你想讓 agent 多接管、少在意細節。因為還沒到那個狀態，有些時候在想人和 agent 怎麼相處、code 怎麼結構、品質如何，是在浪費時間。

## 不必記得參數，但要知道後退鍵該取消請求

[38:28](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=2308s) Max 教 web 和 mobile 到那年六月是二十五年。最大的轉變是新人問：為什麼還要學。他的看法是要懂基本面，做過 HTTP request，圖片和標準的東西怎麼走，就算你不寫，也要試著懂發生什麼。你在問可不可能。若不可能，agent 會想辦法，那個辦法可能複雜到效能不好，也不是最好的。人的判斷還要留著，所以至少要懂基礎。也許不再從零寫 code，不必記得 API 參數、不必記得怎麼加一個 controller。但要知道發了請求、又按了後退，也許該把那個請求取消。這些軟體開發的基本想法，在 AGI 出現之前仍然要緊。他不談會不會、何時會。現在從零開始的人問要不要懂語意和非語意的差別。要。不懂的話，無障礙也許不會被預設做對。Simon 說我們很快從「code 不必人讀」走到「得懂那個 div 的細節」。Max 說不是因為深，是因為機制。語意正確的 HTML 對正在讀網站的它更好，但也看你用的 agent、有沒有對的 skill。沒有的話，它只是拿外面的平均網站。Vibe coding 要一個 app，若你不知道發生什麼，預設做出來的是無障礙做不好的應用。Simon 把它說成 mechanical sympathy，他不確定是 Martin Thompson 還是 Martin Fowler：一級方程式車手不必會重裝變速箱，但要大致知道它怎麼工作，才能用盡它。Dana 說你得知道夠多，才能當有效的操作者。專家的需求在變好之後會變小，而且會發生在通用人工智慧之前。苦的真相是，你加進去的一堆 glue agents 和 glue code 以後要拆。模型和 skills 變好，那些為了人去把 workflow 接起來的框架和 harness 會變簡單。她提醒這是 large language model，但也是 machine learning。每次 prompt 都在讓模型變好。問題是時間和力氣花在哪裡準備。她不覺得永遠到不了。做 web 體驗會變得像發一則簡訊，沒有太遠。HTTP 和網路怎麼工作仍有價值，但你大概再也不會碰到那一層。James 用 kernel 比：他大多做 web，懂一點作業系統，不知道 Linux kernel 怎麼工作，去想是浪費。他確實需要知道 HTTP request 和 fetch。往下一層要緊。上面的層愈叠，底下愈被抽掉。

使用者測試在 James 看來，大家現在談的是品味。若使用者測試全交給 agent，回饋只是訓練資料的平均，你大概不想要最普通的 app。品味比以前更要緊。他開了個玩笑，說有個 skill 叫 good taste，然後說他會去看。實務上，無障礙或 app 裡的大流程可以用 agent 測。外觀這種細節讓人進迴圈做決定，人把 agent 在做的事接上，才能把事情做到更大的規模。

## 擋不住，就讓它呼叫；git 是給開發者的流程

[45:15](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=2715s) 既有的 web 要怎麼變成 agent 準備好。Max 說 legacy 可以是兩小時前寫的，也可以是 Java。網站很多。未來要瀏覽器和 agent 去實作。現在可以開始做 WebMCP：網站把工具暴露給 agent，工具就是 HTML form 或 JavaScript 函式。他那場結束後有人問：若就是不想讓 agent 進網站呢。會有公司想這樣。他說那是想把太陽關掉，不會成功。Agent 會找到辦法進來。若你想讓它更簡單、更便宜、更快，WebMCP 讓它在前端、在使用者的瀏覽器 session 裡直接呼叫函式，帶著使用者的 context、local storage、甚至相機。他拿 Meta 的顯示眼鏡當例子：有 web app，眼鏡裡有 agent。手指可以移動，但大概是 agent 做大部分的事。那個 web app 就該更 agent-ready。

Dana 說得接受整個體驗裡都有人工使用者：有的來讀站、拉資訊，用 WebMCP 把體驗放到另一個畫面，也有鍵盤後面的開發者。Netlify 開了一個開源專案，她叫它 access，是一套完全開放、誰都能貢獻的評分，看系統有沒有 agent ready：endpoint 準備好了沒、站上的改變做了沒。沒有人有答案。沒有一個技術專家或一家公司說了算。全球的開發社群正在一起定義這些流程。她說這是工作裡以前沒有、讓人興奮的部分。AI 生日已經七十歲，對她仍覺得新。

瀏覽器會不會變成遺產。她愛瀏覽器，提過 Netscape 的夥伴，也在 Microsoft 待過，那段字幕有點亂。她不覺得它會消失，只會換成新形態。會有更多 heads-up display，不是笨重的 Oculus，是真的抬頭顯示。Meta 已經是一個例子。背後仍是瀏覽器，仍是 web，仍是 HTTP 和 TCP/IP。

[50:02](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=3002s) James 覺得無障礙對 agent 上 web 是很強的 skill。網站花了很多年變成語意的，它本來就語意。叫 agent 把網站做成無障礙，它會做得相當好，不是驚人，是相當好。Agent 不想讀整棵 DOM。它們在意的是 accessibility tree，用那個去看元素、去互動，像人那樣用。愈來愈多會被抽掉。像 code 一樣，有些東西就是不會再存在。

Skills 跟語言無關，會不會有前端專用的，專門處理無障礙。James 問：這些東西消失之後，前端還是什麼。比較不技術的人只想做一個能幫自己做事的 app。也許所謂前端變成比較一般的設計，不必再有那種把需求和設計變成瀏覽器裡畫面的專門技能。Dana 說前後端沒有了，大家都是 full stack。沒有內容管理，也沒有她說的 JIT，就是 code。不懂的人看不懂引擎蓋下面。該問的是我們造的這些東西現在還需不需要，能不能整個簡化。Agent 變多之後，會有只為你、當下生出來的超個人化體驗。有些事不需要 skill。但資料庫她不會沒有 skill 就 YOLO。不懂的人會把資料庫弄壞。她自己做資料庫的 skill 時就弄壞過。比較大的環境是團隊運動，需要好的 skills library，公司才參與得了你想帶來的體驗。架構師的控制是把護欄放好，讓人能安全地做要做的事。人已經預設這些平台可信。做錯一件事就上新聞。Skills 的內容會變。James 說現在很直接：用這些 HTML 元素、這個設計語言、這個元件庫、這個前端棧。他看到的移動是走向 intent。Claude 的那份文件，字幕聽成 sole document，沒有很多做這個、別做那個，比較是 intent、終點、你在意什麼。Skills 會翻譯成那種文件，而不是清單。

Max 補：現在的模型不是每天在訓練。我們用的是大約一年前訓練的，沒有過去一年的 web 演進。Skills 就是在教它：現在有這個 API，不必退回某個函式庫，該用我們現在的 baseline。Baseline 是今年各瀏覽器相容性怎麼算。Skills 對 web、對 JavaScript API 有用，是把模型已經知道的東西現代化。Dana 不跟他爭。

[55:26](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=3326s) Dana 說對 GitHub 工作流程的依賴正在消失，因為 code 沒有那麼珍貴。她是前 GitHub 的人，說這話會痛。它又珍貴又不珍貴。真的原子級 rollback、修得快、下面有 software factory，版本仍需要。不要誤會。整個 git 流程是給開發者的。要改的是那個。Agent 要持久的是什麼：spec、skills、context、指令。她仍相信 source control，但不認為還需要一家 source control 公司。它會更靠近體驗、更靠近建造的人，在他們用來改東西的系統裡，而不是再叫一輪傳統的開發者流程。很多人依賴 GitHub Actions 和 CI/CD。CI/CD 變容易之後，要緊的就是那個。Agent 需要知道怎麼 rollback、怎麼往前推。她不在乎怎麼發生。可以用 git，也可以用別的。新的建造者不會知道。他們只會說這個改動看起來不好，退回去。她說直接上 production，為什麼不。

James 說這是另一組需求。他想要它被抽象掉。Git 很了不起，也常常很煩，他教工程時它總是絆倒人。對 agent 它很好。可以在 git 上面再做層。他也覺得可以重新想這些工具怎麼工作。不必把過去二十五年的軟體工程套到下一個二十五年的工具上。用這個機會整個重想，不是只把舊模式扭一扭給 agent 用。

Dana 把人放回來。你 vibe coding 到五六百行，一看四百行是垃圾，叫 agent 進去清、重來。它做得到。它也會先做得很糟，再變好。每次你、我和別人走過這個流程，就是在訓練它變好。離那裡還頗遠。

## 十二個月裡要改的一件事

[59:29](https://www.youtube.com/watch?v=R8Ef0sn_HGI&t=3569s) Simon 問 web 開發者未來大約十二個月最該學或該改的一件事。

Dana：擁抱 AI。她看到很多抗拒、很多人說自己做得更好、很多恐懼。最好是好奇，開始用，變成一股力量。不然你會被留在外面，會被換掉。世界現在是 AI native，這個領域也是。別再執著框架，去執著 workflow，變成 AI native。對你產出的期待剛剛被放大了。

Max：當一個更好的 AI 使用者。技術的人該學一點 AI 本身。模型怎麼工作，什麼是模型。可以試一個本地模型，就算你永遠不用那個。為什麼 context 要緊，context window 是什麼，context 怎麼被組織、被壓緊。Web 開發者也許沒做過 machine learning。把它當魔法，結果大概更差。學一點 prompting、為什麼 prompting 要緊，會讓你成為更好的開發者。

James：用 AI 加強學習。它不必只是幫你生 code。可以用它訪談你想學的題目。基本面現在仍要知道一點。不要怕。Simon 說團隊裡的 Alan Pope 在做 Tessl 的學習，他們想做學習平台。他跟 Alan 說的是 skills first：把模組化的教學做成 skills，插進 agent，透過 agent 學，而不是傳統的學習平台。

他們各自的完整 DevCon 演講，說明裡有連結。製作人是 Tom Dowler。Tessl 說自己是 skills 和 context 的 package manager。倫敦市中心辦公室有每月聚會，網站是 tessl.io/community。
