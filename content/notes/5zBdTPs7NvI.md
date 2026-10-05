# The Hidden Security Risks of AI Coding Agents

AI Native Dev。片長約 41 分鐘，英文手寫字幕。主持人 Simon Maple，另一位主持人是 Guy Podjarny，製作人 Tom Dowler。這一集的來賓是 Joe Holdcroft，Tessl 的 member of technical staff、team lead。他在 Snyk 三年，大多在超高速成長期支援開源產品，中間做過 fractional CTO 和 mentoring。最近他做的是 Snyk 和 Tessl 的整合，把安全通報放進 Tessl registry 的 skills 和 context。大約六到九個月前他來過，那時他們對調 agent 工具來玩。這份筆記依英文原稿整理，專有名詞保持 English。下面記的是風險的名字、後果和他們建議的控制，不重寫攻擊步驟。

- 原片：[YouTube](https://www.youtube.com/watch?v=5zBdTPs7NvI)

## 一句話

Joe 認為 agent 沒有發明一套全新的安全學，它把舊的衛生習慣變成力量放大器，另外加了幾件以前不必想的事。最危險的組合是 Simon Willison 講的 lethal trifecta：碰得到私有資料、吃得進不信任的內容、又能對外溝通。多數 agent 預設三樣都有，離一次 prompt injection 的壞事只差一步。他最覺得被低估的，是 context 的供應鏈：大家裝 skills 的方式，像是 npm 出現之前隨手從 repo 拉東西。

## 三樣能力疊在一起

[3:32](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=212s) 他聽過把這件事講得最清楚的，是 Simon Willison 的 lethal trifecta。三個特徵幾乎所有 agent 都有：碰得到特權資訊或私人資料；接觸不信任的內容，也許來自外面；以及能夠對外溝通。預設三樣都在，就是危險的局面。

編碼用的 agent 坐在你的機器、你的 repository 裡，碰得到 code 和 secrets，那是私人資料。它會拉依賴、文件、issues、搜尋結果，那是不信任的內容。它能跑 shell、打 HTTP、叫 CLI，那是跟外面溝通。三樣叠在一起，就是離一次 prompt injection 只差一步。

Simon 說，在他點出 prompt injection 之前，其中很多聽起來和現在的問題一樣，差別是這次做事的是 agent。Joe 的第一句是：人寫的軟體要在乎的，agent 寫的也要在乎。把它想成 force multiplier。SCA、SAST（字幕寫成 SaaS scanning）、流程放對位置，這些衛生習慣變得更重要，不是更不重要。因為你可以把它想成一個你本來就不會那麼信任的人，例如進來寫很多 code 的 contractor。它大致會照你說的做，對內部系統有一定存取，監督卻不多。

## 文字開始帶有可執行的意圖

[6:07](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=367s) 新的維度裡，他覺得最有趣的是：文字可以有漏洞，可以帶可執行的意圖。一兩年前，沒有人會擔心組織裡一份 markdown 的安全。今天，交給 agent 的 markdown 可以寫進指示，叫它去做惡意或不安全的事。這是全新的情況。

Agent 找問題是往回看的，新的攻擊類型和漏洞會有一點延遲才追得上。但他認為，對現在能寫進文字和 markdown 的那類東西，有效的防禦幾乎只有再叫一個 LLM 當裁判，看內容像不像有風險。靜態分析在這裡不夠。同一件事可以換很多講法，不一定是在騙 agent，只是在鼓勵它做出消費者沒打算要的事。

所以經典問題的答案取決於情況：AI coding 工具讓開發者更可能、還是更不可能送出漏洞。Agent 讓你更有生產力，送出更多功能、更多 code，引入漏洞的機會就更多。它們也很會跟著既有模式。codebase 裡若有好的、站得住的模式，例如讓 SQL injection（字幕寫成 SCL）很難發生，它們會傾向跟著走。沒有好模式，或沒把 context 管好、沒鼓勵它用你要的方式做，它就退回訓練資料。訓練資料裡有大量不安全的開源軟體。

Simon 把這比成安全裡早就有的事：輸入改一點點，就能繞過既有規則。文字變成漏洞之後，不能為每一種講法寫靜態測試，所以常常靠 LLM as a judge。SKILL.md 本質上就是一段文字，描述並引導 agent 用某種方式做事。要判斷它是不是惡意，Tessl registry 最近加了 Joe 和團隊做的掃描：Snyk 的 agent scan。現在發布到 registry 的東西都會過這道 skill scan。他們也在為 GitHub 上的一批 skills 做索引和掃描。用 Tessl 安裝時，若他們認為有惡意或不良意圖，會警告你。

[10:29](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=629s) 很多風險是看情境的。Skill 接觸外面、或用某個 API，不一定是壞事。Tessl 自己有一個 skill 在用 Tessl API，那說得通。掃描器要有這個 context。更常需要的是把這件事露出給使用者：我能不能接受這個 skill 用這個 API、或這條 CLI，這和它宣稱要做的事相不相稱。他們在改使用體驗，不只標出明顯惡意的套件。很多情況更細：你若只掃過 SKILL.md，可能沒發現它還會去打 GitHub，把一些個人資訊貼上去。

## 幻覺出來的套件名，和 context 的供應鏈

[12:08](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=728s) 函式庫這邊，第一件事仍是速度。更多 code 代表更多套件被加進來，更難審，審查可能更不細。另一件是 agent 常常幻覺一個套件名，猜一個、看在不在、就裝。他說有個新詞叫 slop squatting：有人把惡意套件傳到他們認為 agent 在某種情境會挑的名字上，進你的供應鏈。還有，現在的 agent 挑套件不像人。人選開源套件不會只看第一個對得上任務的搜尋結果，還會看社會證明：星星、在不在很久、有沒有公司或個人贊助。Agent 通常不看這些。它也許挑訓練資料裡出現很多的，或剛好對上它在找的東西。

[14:04](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=844s) Context 的供應鏈是開發時期的事。不一定會把它送出去，而是用它引導 agent 寫出合適的 code。他覺得非常重要。大家對 agents 和 skills 太興奮，好像忘了十年、二十年軟體工程學到的供應鏈和開源教訓。人在從隨機的 GitHub repo 拉 skills，拉 main，常常更新，幾乎沒有監督。這已經不是我們對待第三方開源的方式。我們用有版本的軟體，常常只拉超過一定年紀的，為了擋愈來愈多的供應鏈攻擊，也在乎來源。這些多半被扔到窗外。Tessl 在投很多力氣，做一個給 context 的 registry，跟開源軟體的 registry 同一套做法。不是全新的方法，是把舊方法用到新的材料上。

他開玩笑說該丟出 C-bomb 了。podcast 上第一次。大家聽過 SBOM，software bill of materials。需不需要 CBOM，context bill of materials：這個專案、這個開發範圍，用了什麼 context、從哪裡拉、哪個版本。他說絕對需要，Tessl 也在看。而且可能比 SBOM 更複雜。你還得覆蓋只是全域跑在開發者機器上的 context。裝進 agent context 的範圍不一樣。專案裡看起來不可怕，也許還在 CI 裡用 Tessl CLI 檢查了，開發者裝在自己機器上的呢，怎麼限制，是另一層，他覺得連表面都還沒摸到。

什麼時候做這道閘，他說看使用情境，你想多嚴還是多鬆。根本的工具現在很多還缺。Tessl CLI 會在專案裡放一份 manifest，CI 才能檢查裝了哪些 context、安全評等如何、信不信任、在不在 allow list。沒有 manifest，這些意見無從產生，你甚至無法決定想把專案守到多緊。Simon 提過自己在 demo time 做的小工具：讀 `tessl.json`，看你在用的 context 和 skills，依 Snyk 經 Tessl API 的結果，拼成一份安全態勢報告，問題在哪。他覺得大家會愈來愈常被要求拿出這種東西，而不是隨便挑。

## 機密：它跑在機器上，像一個你信任的開發者

[19:23](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=1163s) 機密是方程式裡比較麻煩的一塊。Agent 對你機器上的特權資訊有很強的存取。常見的環境變數檔，你能不能、以及怎麼阻止它去讀。它讀得到，你就可以假設那份內容會出現在你不想要的地方。它也能把資訊貼到網路上。就算只是被讀進去，也會進到堆疊各處的 log，大概還包括 model 提供者那裡。它若能讀檔，為什麼讀不了那一個。

他建議開始看別的機制，例如 secret broker，發 just-in-time、很短命的憑證。字幕說短命的 TLS。就算有東西漏出去，大約 15 分鐘後就失效，不必那麼擔心。這仍是典型的安全衛生，但是在新的一層，更難處理，因為它跑在你的機器上，好像一個你會信任的開發者。

Simon 讀過一串 Reddit。有人在設定裡不讓 agent 把某個檔當檔案讀，字幕聽成 end file，從上下文是環境變數那份檔。Claude Code 沒有刻意繞過安全，它有一個要解的問題，於是用手上的工具換一條路，寫了一段 shell 去讀。很多人回覆：應該用一個在作業系統上根本碰不到那個檔的使用者去跑。Joe 說，叫 agent 不要做某些事，不會有太多成功，它會找到路，Simon 的例子就是。要在對的層級把存取勒緊。也許是網路出去的控制，能跟哪些網域說話。以能力為單位的權限：能碰哪些 repo、git remote 怎麼設、能推什麼、agent 推得上去的分支上跑哪些 actions。危險的動作用批准閘，而且不是「請停下來問人」。要在物理上做不到，除非有某種批准，產生一個 hash，才能推過去。

這裡沒有傳統那種權限升級。Agent 跑在開發者的機器上，通常和開發者有同一種權限。打到各種服務時，你通常分不出是開發者本人，還是開發者加上 agent，因為它用的是你的憑證，替你做事。

## 不要把自己守到破產：看這件事可不可逆

[23:48](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=1428s) Simon 問怎麼避免安全守到破產，成本開始撞上期限和交付速度。Joe 說這對話不舒服。第一件要接受的是這塊還很新，大家都在摸索。要用 agents，也許得接受某個時點會有一次 breach。所以要準備好，弄清風險容忍在哪。他喜歡用可逆性來想。低風險、可逆的，可以交給 agent 自主做：在一個 branch 上工作，推到 git remote，大概不是大事。要不要給它直接推上生產的控制，他大概不會。那比在 feature branch 裡工作不可逆得多。

線下他們把 agent 比成員工，信任大約像 junior，或像 contractor，要它夠自主，也要驗證它做的事。Joe 仍用一條風險的滑桿。他自己的 agent 大多直接在 code 上工作，從他的機器自主推。但 PR review 不一樣。同事或他們用的 AI PR review 給了意見，他想留在迴圈裡，而這風險不高。Agent 若貼了一則讓他看起來很蠢的評論，工作上不理想，但沒有打壞生產。他用一個 skill：叫 agent 分析評論、提出計畫、跟他談，在推出去之前等他批准幾次。推上生產的能力，它根本沒有。他不是靠一個 skill 去阻止那件事。

不可逆動作的檢查點，他個人還沒做。若檢查點只是自主系統的一部分，你怎麼信任 agent 會遵守。PR review 那個 skill 是他想做 review 時才叫出來，裡面寫著要先跟他確認，風險相對低。若要的是「沒有人確認就不能推生產」，那得在系統上讓它做不到，而不是說請在跑這條可怕指令之前先問許可，因為那條指令它始終跑得了。這是信任問題。那種事，你大概不該信任它。

[28:02](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=1682s) 人從來就不擅長讀別人的 code，量再變大呢。Simon 問要不要更靠測試、確定性的 code review，以及 AI code review，用「測過了、過了」來維持正確，而不是更多手工。Joe 說這不只是安全，是整個軟體工程都變了的那件事：不對稱的速度。Agents 可以做一大堆，你可以叫出一群，人沒辦法這樣複製自己。怎麼避免變成瓶頸。同一套原則：你在乎什麼。某個時點你也許很在乎 style guide，PR review 就圍繞那個。他覺得現在沒有人那麼在乎了。你在乎的部分，就做成自動化和 lint。注意力有限，要放在哪。挑哪些 PR 要更多人眼：碰到 auth service 的，大概需要。像是在處理新的客戶資料，也該多看。真正在審的時候，能不能用另一個 LLM 當裁判，先給你一份報告，而不是從零爬過所有 code。能自動化的自動化，把時間留給較高風險的地方。人永遠是瓶頸，只是瓶頸在開發流程裡的位置在移動。

## 出事之後：機器上發生了什麼，以及不該怪計算機

[30:39](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=1839s) 壞東西進了生產，可審計性和 log 怎麼被 agent 的做法影響。一個 commit 後面可能是一個人加一群 agents、多個 models。過去做的仍然算數：一個 commit 穿過 CD 進生產，再加上 telemetry。新的維度是開發者機器上實際發生了什麼，你怎麼走到被 commit 的那段 code。那能幫你弄清怎麼避免下次。除了把 commit 對上 issue，還要對上跟 agent 的那次 session、叫了哪些 skills、context window 裡有什麼。已有的 PR review 也要看：為什麼沒被抓住。回到供應鏈，skills 若有 manifest 和版本，會有幫助：這台機器上是這個 skill，哪個版本、裝在哪，為什麼沒生效。他覺得目前我們還不太有能力回答這些問題。

Simon 用英國版 The Office 裡的 Gareth 作比方。Gareth 打電話給計算機公司，說報價出了問題，其他可能都排除了，他認為是計算機。出事時要看的是跑 agent 的那個人、讓 code 進生產的團隊，還是 agent 本身。Joe 說怪 agent 能讓你舒服一點，但走不遠。它是工具，用來服務我們。要負責的是團隊，以及把你帶到那裡的流程。他相信這類事情通常沒有惡意。有趣的問題是這件事怎麼發生、我們怎麼允許它發生。怪 agent，甚至怪 frontier model 的公司，不會有太多結果。

## 治理看你扛得起多大的風險

中間有一段請觀眾訂閱，然後回到正題。[34:37](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=2077s) Tessl 自己非常 AI first。健康的懷疑，和過度信任，平衡在哪。Joe 說這很主觀，看使用情境和風險容忍。大型投資銀行和 seed stage 的新創，優化的東西和扛得起的風險都不一樣。對每個人都適用的是：我們的 AI governance 策略是什麼、誰擁有它。就算答案是「我們其實沒有，CEO 擁有」，也該想一下。他們談到的較大組織，對各種治理工具有興趣。很多仍是原本的衛生：branch protection、SAST、SCA、log 和保存期限，也許還要重想 secrets。他認為 agents 改變的一件事是：對人有效的 secrets 做法，碰到 agents 會開始散掉。然後是哪些 agents 可以用。再來是 context，也是 Tessl 在專注的：什麼 context 准許被拉進來，什麼要推給開發者，讓他們不會忘、也不會缺。

Simon 把懷疑理解成真正的可見度：看它們怎麼絆倒，承認這個 agent 不擅長這件事。Joe 說依風險容忍，也可以從鎖得很緊開始，再慢慢加能力。他也認為最快的結果來自 move fast and break things，但要先想你在打破什麼。打破生產可能不好。若你想走得快，打破開發流程本身也許值得。

[37:45](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=2265s) 他覺得組織採用 agent 工具時最被低估的安全風險，又是 context 供應鏈。他把自己說成破唱片。大家把 context 裝進 agents 的方式，像是各種套件管理器出現之前，從一個 repo 拉東西。開發者的機器上、repo 裡，找得到來自各處的 skills。人甚至不一定知道從哪來、誰寫的，也沒掃過。公司 maybe 有自己的 factory，你仍然可以把任何 skill 拉進任何 repo 或自己的機器。組織怎麼有更多監督和控制，怎麼更信任這些東西。他覺得這是大家在喊的治理問題，也是 Tessl 在這件事上加碼的原因之一。

給決定 all-in 的 CTO，一句高階建議：[39:13](https://www.youtube.com/watch?v=5zBdTPs7NvI&t=2353s) 把 agent 想成很能幹、很流利，但對你的情境還很生的 contractor。你會怎麼跟這種人工作。請他們進來，給他們 code 和專案。會慎重想給他們哪些生產系統。可以在 dev 裡工作，不會讓他們直接推上生產（字幕那句聽成 access fraud）。至少頭幾張 PR 要有好好的人審。查他們的來歷，也查他們的工作。這個框架有用：不要守到把鞋帶綁在一起，也要認真對待這裡有風險。Simon 補了一個畫面：在辦公室給人偶穿衣服，叫它 Claude，把它當比較資淺、經驗較少的 contractor。每次想把可能造成損害、或不可逆的東西交給 agent 之前，先問會不會交給那個人偶。大概不會。那就再想一次。
