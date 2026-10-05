# Derek Ashmore - AI Powered Application Modernization using Claude Flow | DevCon Fall 2025

Derek Ashmore，Asperitas Consulting 的 Agentic AI enablement principal，他自己說頭銜不重要。這是 DevCon Fall 2025 的一場工作坊。片長約 102 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Adrian Cockcroft 聽成 Adrien Cochraftoft，把 Asperitas 聽成 Aspiritis，把 COBOL 聽成 cobalt。現場的 Git 操作失敗，工作坊沒有照計畫跑完，他改用事先跑過的分析，再跟大家談。

- 原片：[YouTube](https://www.youtube.com/watch?v=cRAB2kkvh-4)

## 一句話

現代化在客戶嘴裡通常是「搬上雲」：能隨負載伸縮，尖峰不必先買硬體，還能跨區容錯。底下是系統太難改、太貴。他用 Claude Flow 帶一隊 Claude Code agent，先做 12-factor 分析，再做給 agent 執行的改造計畫。報告要當架構師核對。同一件事再跑，結果不會一樣，所以版本控管和中途能插手，比一次丟很長的任務重要。

## 先計畫，再讓一隊 agent 做

[0:09](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=9s) 大約七月，他看到跟了幾十年、從九零年代就在看的 Adrian Cockcroft 的文章。Claude Flow 在底下跑一隊 Claude Code agent，替你管團隊。Cockcroft 用它做一個新應用。Derek 裝了 Claude Flow 和 Claude Code，拿一個他想做大改的複雜 Golang 專案照做。你不能只說去做。先計畫，把計畫拆開，確認給 Claude Code 和 Claude Flow 的指示連貫，沒有溝通問題。那次之後他上鉤。客戶允許的話，這是他偏好的技術棧。有的客戶不允許。

[3:39](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=219s) Cockcroft 讓他記住的是實作之前先規劃。他開始拿複雜 codebase 這樣做。它調查 codebase、給出詳細計畫的程度，他說像神一樣。於是他問：這套不只會寫 code，還能分析什麼、計畫什麼。他們拿它做架構、計畫大專案、查 codebase 裡想重構或修的爛東西、看測試覆蓋。今天要做類似的事。

[5:22](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=322s) 現場大約四成聽過 12-factor。那些原則大約 2012 年由 Heroku 提出，Heroku 後來被 Salesforce 買下。Codebase 若照著做，就很容易放在你想放的地方，不綁特定作業系統或 runtime，更能動態伸縮、有高可用。客戶說的 app modernization，通常是搬到雲上：尖峰不必先買硬體，要能長大縮小；需要的話從 US East 容錯到 US West。真正的需求常常是這套東西太難改、太貴，需要變好。

[7:08](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=428s) 他從 GitHub 拉了一個開源 CRM，名字他念不準，字幕聽成 IDM pair，codebase 在要 fork 的 repo 裡。他預期這是目標很多的環境：很多地方不適合動態伸縮，不管部署到哪朵雲或 Kubernetes，高可用都會難。分析回來之後，再計畫若要把這些都修掉要做什麼。Claude Flow 團隊給的會相當扎實。計畫常做出你不想要的，就用更具體的條件重做，例如他真的要一個自動化測試 harness，才敢安全地改。管理層看到工作量，常常接著問能不能把使用者遷到另一個產品，例如 SaaS。他的團隊做產品分析也還行。這次有殘缺：真實分析會告訴它使用者用哪些功能、不用哪些。不給這個，它必須假設每個功能都在用，分析會膨脹。

[10:02](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=602s) QR code 連到說明和 repo。先 fork，再從 main 開 GitHub Codespace。他對 Codespaces 沒有信仰，只是帶工作坊時不想處理每個人的本地環境。預設兩核在 Claude Flow 工作時會喊滿載、機器不夠力。不是硬性要求，他通常選四核。Codespace 要幾分鐘。接著從 README 貼幾條指令：裝 Claude Flow、裝並設定 Claude Code 的權限、登入。沒有 Claude Code 帳號的人可以把這場當示範，repo 他不會拿掉，之後自己跑。實際生活裡，一個 git 資料夾裡三四五個專案、共用一套 Claude Flow，並不稀奇。這次為了大家簡單，收斂了。

[15:39](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=939s) 有人問客戶為什麼不喜歡這套。多數客戶是 Fortune 1000。大組織有大法務。說 Derek 要進來，把 codebase 交給另一端是 Anthropic 模型的 Claude Code，說得容易做得難。另一人問 Claude Flow 能不能用 AWS profile。他看過文件。Bedrock 要指到被允許的某一個 Anthropic 模型，還要設幾個環境變數。Claude Code 若已經在 Bedrock 上能跑，Claude Flow 同樣能跑。

## 現場沒跑成，他拿出事先的報告

[18:03](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=1083s) Git 操作在 clone，伺服器失敗，他自己也 clone 不了。工作坊沒有照計畫進行。他後來道歉，也謝謝人留下來談。他改展示若環境正常，會下的指示，以及事先跑出來的結果。

[31:16](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=1876s) Claude Flow 像 Claude Code，是命令列工具，有一個很陽春的介面。他把一長串指示做成指令：對這個應用做 12-factor 分析，原始碼在 codespace 裡，結果放到 `12 factor` 資料夾，並告訴它原則的文件在哪，以免它不知道。他要知道這套應用哪裡達不到 12-factor，好評估若部署到公有雲，動態伸縮和高可用做不做得到。誠實說他要什麼、為什麼。先不要改應用，只要分析。若還需要資訊，讓它回來問，分析會更好。它做了他要的事。報告給一個合規等級，十二項逐項說合不合規。摘要下面有為什麼不合規、不合規的是什麼、它認為要改什麼才合規。他說會在演講後把連結貼出來。

[34:14](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2054s) 常見問題是報告又長又細，信不信。他的框法是：一份既有原始碼的 12-factor 稽核，可以交給自動化的 Claude Code 團隊，也可以交給人。拿回來都是 trust but verify。他不會照單全收。他會以架構師身分，逐項驗證它標成 blocker 的和它標成 ready 的。有些失敗是某些安全標準沒達到。他所在的企業也許根本不必管那些標準。指示裡他沒說哪些標準要適用、哪些可以不管，所以它在假設。

[36:32](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2192s) 為什麼是 Claude Flow，不是別的。底下有一個協調者看他的請求，決定需要什麼團隊、什麼技能：更多研究員、分析師、coder，還是測試。這種分析大概根本不會配測試。角色來自 Flow 裡既有的名冊，他沒有去改那些角色的 schema。沒有業務需要，他不增加複雜度。開箱大約 16 種 agent 規則，上次他數大約 60 到 70 種預先接好的 MCP，不必自己設定，想加可以加。他喜歡的是它通常就能動，這次現場沒看到。別的技術棧也能組 agent 團隊，但你會卡在微管：Cursor 剛放出在 IDE 裡跑多個 agent，仍要你自己指定這個做這件、那個做那件。他不是微管的人。他要專注的是要什麼結果、那些結果的具體條件，以及驗證拿到的是不是他要的。

[39:39](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2379s) 他離線逐項看過失敗。其中一項是 sticky session：可以往上擴，不能往下縮，動態伸縮和自動容錯都難。解法有，狀態放客戶端，或用 Redis 這類記憶體快取管狀態。目前都還沒解。若要動態伸縮，就得做。大體上他同意報告。有些他可能不會標 critical，會標 high。對他那是小地方。

[41:24](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2484s) 下一刀是：用那個資料夾裡的分析，再寫一份實作計畫，把應用升到符合全部 12-factor，放到 `12 factor plans`。假設執行的是用 Claude Flow 和 Claude Code 的 agentic 工程師。不說這句，Claude Code 很乖，會假設你交給人類團隊。他不是。仍先不要改應用，缺什麼再問。他拿到計畫，然後自己加強了。

## 非確定的，所以要能退回已知的好

[43:16](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2596s) 有人說 Flow 變異很大。同一件事，二十分鐘和十分鐘都做過。六種角色各自變異，再彼此協作，變異疊加，執行時間的散布很大。他說你挑不了那個時間。對方的專案星期五要完成。另一人要最小可用的 prompt，好降低變異，也要能見度，覺得現在有點瞎飛。十個 sub-agent 出去，不想三小時後才回來，想知道每個做到哪、在做什麼。長時間跑的時候有時要在中間推一把：停。長任務也不能一次做完。有人提到一份長任務基準，字幕沒把名字聽清：時間一拉長，表現會退化。LLM 是機率的。若有 5% 的時候會幻覺，一長串任務把錯誤放大。不在某些階段掌舵，就會完全脫軌，出來的是垃圾，或更糟，邏輯裡很細的 bug，送到產品才發現。

[45:23](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=2723s) Derek 說後端是 LLM，所以非確定。若工作坊照計畫、大家各自跑 12-factor，他保證每份報告會略有不同，也許抓到相同的事，格式不同。在他心裡那是小事，因為這個層級的分析不會直接進 production。他的工作習慣是：知道要五分鐘、十分鐘、十五分鐘的事，他不盯着。啟動之後去做別的，半小時再回來。不管 Claude Flow、Cursor 還是 Windsurf，原始碼控管是關鍵。永遠要能回到已知的好。他每件事都開 feature branch，限制那條 branch 裡有什麼，驗證之後才進主幹。一年到一年半前，他很少丟掉 feature branch。現在大概丟掉 30%。他不把這看成壞事，是他得換的做法。有人提 jj，比 git 輕，本地的 branch 和 commit，再決定什麼才是真正的 commit，拿來做本地快照。他說自己也用 jj。

## 錯了就回到已知的好，人仍要 merge

[50:26](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=3026s) 有人問自動啟動的東西怎麼調。他不接受沒有業務需要的複雜度。後門的可調參數他放在口袋裡，用了大約六個月，在這行算永恆，還沒需要動。文件預設要 alpha 標籤。有一陣子他用 native，因為早期 alpha 太 alpha，runtime 問題太多。除此之外沒調過。世界不完美，他碰到的錯多半是自己的：指示太模糊，它就跑去沒有的地方。發現之後回到已知的好，改指示，重做。他不修一條已經被污染的路，那很難。

[52:33](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=3153s) 他很看 code coverage。若你只說所有測試都要過，它會有動機把測試改到過關，其實沒在測。他arbitrary 地要大約 75 到 85 百分位。有人更高，有人更低。下令 100% 之後，測試碼會膨脹，因為什麼都得 mock。若有東西送出去他沒發現，他就把測試補厚，讓那種事不再發生。有人把測試碼和實作碼實體分開，保護測試。

[57:40](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=3460s) 他看 DORA：缺陷率、吞吐量、速度，四項或現在的五項，加總看起來好，偶發缺陷仍會出門。那是機率。沒有東西會完美。今天這場只是產生報告，風險低。他個人不用這套去 commit、部署到環境。他堅持 human in the loop。Agent 說你有這個錯誤、我提議這個修法、這是一張 PR，他完全可以。merge 不行。Git 就是人的監督。Feature branch 上要這個行為、做這些改動，他不信任它有權 merge 到 main。結束時他要看 coverage。偶爾仍要人手測，他並不喜歡。有人觀察他整場把 agent 說成自己的 dev team，這是很大的心智轉變，發生在過去六個月。那位以前帶二十人，也把 Claude 叫成自己的 dev team，以為自己很怪。他說歡迎加入。

[1:18:57](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=4737s) 自訂 agent 若比通用的 Claude Flow 好一截，是成本效益：多做的工值不值得好上 10% 或 20%。有時值得，有時用通用的，只在需要的案子上再調。現場有人看 commit：大約 2900 筆是一個人，下一名是 Claude，180 筆，第三名 7 筆。他說那個人在吃自己的狗糧。旁邊有一個 agentic engineering 社群在幫，但他一直在推，也在壓 token，新的 MCP 功能讓整段 token 降下來，因為帳單要付。

[1:20:38](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=4838s) 多年的專門知識，例如 Salesforce，怎麼給 Flow。12-factor 眾所周知，你自己的細節不是。他說若你能把那段知識說出來、告訴團隊，它就能用。他們曾替一家大型金融機構計畫一次很大的實作。技術上不該在對方環境之外用 Claude Flow 做這份規劃，所以他不說名字。計畫一出來就看到：有些在那個環境裡不是技術問題，是要向別的團隊提請求，這個階段還要治理委員會批准。他的團隊完全不知道。那種專門知識要再餵回去。

## 寫為什麼，以及 Java 的兩個老問題

[1:34:44](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=5684s) 管理鏈上不是每個人都想進 git repo 看 markdown。有人用 MCP 更新 Confluence、建文件，也用它走 Jira 的 epic 和專案。他把這收成另一個看法：程式層級的文件需求在變。若能叫 Claude Code、Claude Flow 或 Cursor 解釋一段 code 做什麼，就不需要以前那種靜態文件。不該用英文記載 code 做什麼，code 自己說了。該寫的是為什麼做、它連到什麼、關鍵是什麼。Spec 現在一樣重要。看 code，工具說不出你為什麼做 X、Y、Z。Spec 大概說得出。Commit 歷史也說得出，但那些也很大。

[1:36:43](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=5803s) 十二項裡，他最常看到這群 agent 卡住的是 sticky session 和 session state。那殺掉往上的動態伸縮，也殺掉容錯。舊的 Java 應用尤其常見。他跟 Spring 是愛恨，恨比較多。Spring 的 property 檔鼓勵人把預設憑證放進去，也讓人很難把設定注入進去。他不是在事後指責那個架構決定。他做 Java 做了十五年，寫過兩本書，不是在貶低。他說 Java 是新的 COBOL。現在的偏好：做 agent 或 MCP，用 Python，因為第三方工具較強。其他時候大概是 Golang。指定新應用時，他通常不微管技術選擇，讓團隊推薦。他以架構師身分不同意，就加一條約束，叫它重做計畫。一開始就微管，他學得比較少。有時它們想出他沒想到的好主意。現場有人說做 MCP 的人多半會選 Python 和 TypeScript。他同意，agent 也一樣。他也認識用 Golang 做的人。他喜歡 Rust 或 Golang 的一點是寫一次、為任何平台編譯，行為大致一樣，除非你在做驅動程式。關鍵是編譯。Docker 用 Golang，Terraform 用 Golang，幾十個甚至上百個產品用 Golang，就是不想為不同平台做不同執行檔。你拿到的是一個 binary，不必再裝第五次然後祈禱它能跑。

[1:41:05](https://www.youtube.com/watch?v=cRAB2kkvh-4&t=6065s) 他為工作坊沒有照計畫很抱歉，也謝謝留下來把這些談完的人。
