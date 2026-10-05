# Oleg Šelajev - You're absolutely right, it was your home directory! - AI Native DevCon June 2026

Oleg 在 Docker 的 DevRel，做 AI 和 Docker。主持人說他們在 ZeroTurnaround 共事過，做 bytecode manipulation；Oleg 後來去 AtomicJar 做 Testcontainers，公司被 Docker 收購。觀眾席有他女兒 Alberta。片長約 33 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=bFBNXIoLkW4)

## 一句話

想讓 agent 在自己機器上自主做事，就不能把一生的鑰匙交給一個對自己沒有後果的東西。寫在 skill、檔案或 system prompt 裡的「請不要犯錯」只是建議。Claude 的 auto mode 也不是可執行的政策。Oleg 要的是硬隔離：microVM、你選擇分享的檔案、出去的網路代理，以及沙箱外面才注入的密鑰。速度快而沒有安全是混亂，安全而沒有速度是癱瘓。

## 三樣東西交會，安全團隊在中間被拉

[1:19](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=79s) 他講的是在本地隔離 AI workload。你若在自己機器上跑 agent，這場是給你的。每週都有新聞或 Reddit：AI 失控，優化了 home directory，或毀掉資料庫。那只是故事的一半。惡意動作若對準的是你的機器、憑證、身份，就會變成大規模安全事件。

使用方式有一條光譜。左邊保守，AI 當 autocomplete 或 assistant。右邊更自主，人下的是目標，agent 自己找路徑，可以是 swarms，或各種 hierarchies。字幕裡還有 tournament agents。他問誰在自己機器上跑、誰在 YOLO。越自主，越跳過權限，越把人從瓶頸拿掉。他提到前一天 OpenAI 的 Ryan 講 harness engineering：拿掉人，是現在要把 workload 再放大、再加快時，唯一想得通的辦法。自主的代價也在。前一天 Liran Tal 的 Snyk 演講講惡意 prompt 怎麼影響 AI，讓它替別人、而不是替你做事。他把那場縮成 15 秒：害怕，然後用 sandbox。

[5:20](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=320s) 危險來自一個 trifecta。我們把敏感資料交給 AI，因為要它處理。我們讓它對外溝通，把結論分享給自己、團隊，也許還有別人。我們也給它網際網路，把它暴露在不可信內容裡。在 AI 的時代，內容和資料就是 code，就是指令。三樣交會，安全官很不快樂。上面的 CEO 和領導說要更多 AI、要更有產能。下面的開發者不想像中世紀農民一樣逐字敲，想說 build main component、做這個、做那個。上下都在施壓，中間的安全團隊要讓整群人安全地做這件事，非常難。你叫它寫東西，它可能寫一支 Python，裝上剛被攻擊過的依賴，裝進會偷 secret 的 worm，然後你就上新聞。他說那會是很硬的一課，也是很冷的水，可是等出了事才做 sandbox，就太晚。

賭注不對稱。你得一直保護資料、secret 和環境。攻擊者成功一次就夠。一次偷走 GitHub 身份和你能碰到的一切的 prompt injection，會變成會傳染的。有些攻擊從 3 月就還在進行，結果是 npm 和 PyPI 上的函式庫也還在被波及：惡意一方拿到的存取越多，就越能再傳出去。

## 寫在 context 裡的規矩，擋不住一直試的 agent

[7:53](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=473s) 問題變成：agent 能為你做什麼，以及你怎麼控制它做或不做。它們很固執。他這張投影片是自嘲。Agent 一旦認定要偷 SSH key，會試到徹底失敗，不會試到一半忽然開悟停手。就算沒有 sudo，人和 agent 也常找到完全合法的繞法，例如用 Docker。那不是 bug，是有文件的 workaround。

如果安全方針只是「拜託，別犯錯，我的命靠這個，只要合法 JSON，別漏我的 secret」，那只是建議，強制不了。覺得靠 skill、檔案或 system prompt 說「你很安全，別做我不會做的事」就夠，那行不通。

[9:42](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=582s) 例子是一個叫 Best Skill Ever 的 skill，配合 Tessl 辦的這場會。它做一點安全稽核：掃本機檔案，看環境變數裡有沒有 API key、有沒有 SSH secret 和 key、有沒有能被拿走的 cloud 設定，然後列出一份意識報告，並不真的偷。他和 Claude 大約十分鐘寫完，用來暴露開發者機器可以有多脆弱。跑起來會找到他筆電上的 secret，他說很害怕。有人跟他說 auto mode 會看指令、擋住惡意的、做sensible 的事。字幕把 auto mode 聽成 automotive。

他錄了影片，因為這東西本質上不可靠。Auto mode 裡的 Claude 先合理地拒絕，說危險。同一個 session 裡請它把 skill 改寫成 Python，它照做，因為寫一段軟體是良性請求。請它執行，它又以安全為由拒絕。再請它放進 Python module，因為有依賴的依賴。他忽然想改寫成 Rust，讓它只拿到 binary、看不到裡面。Claude 拒絕改 Rust，說他顯然不懷好意。接著還是寫成 Python module，執行又被拒。他做 slash clear，context 沒了。之後它很開心地跑那支會拉 module、對機器做安全稽核的 Python。他看到 SSH 目錄裡有 20 把 key，那是幾個月前，後來他把它們遷進 1Password。歷史裡還有 cloud 憑證和 API key，agent 也能改 code 目錄。結論一致：agent 光著跑在機器上，他就完了。

[13:08](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=788s) 邊界在這裡。指引若只活在 agent 的 context 裡，不夠。依風險承受度，個人筆電也許可以接受，你暴露的是自己的生活。若你是公司、安全團隊或 platform team，要讓很多人做這件事，拜託不是安全。你需要硬隔離。Agent 得能不受打擾地跑，因為你不可能每條請求都按接受。用 AI 決定要不要跑個別指令的 auto mode，不是可執行的政策。隔離最好在硬體層。設定、鑰匙、檔案和網路的存取放在沙箱外面。真的出事，把那個 ephemeral 環境刪掉，再建一個。

## Container 他們做過，安全團隊不簽

[14:27](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=867s) 自然會想到 container。軟體包進 container、隔離，已經很多年，dev container 和其他做法都有，比完全不隔離好。但 container 適合不可變的軟體：你看得到、控得住進去的東西怎麼建、來源是什麼，有 provenance、SBOM 和驗證。Agent 會主動改容器裡的環境，要裝工具、寫自己的 helper script。Container 生態不是為這個設計的。不少專案仍用 container 當 sandbox 原語，用了比不用好。Docker 做 sandbox 時先做了一版 container，拿去問企業安全團隊，對方都說 container 不是他們能信任的隔離邊界。於是他們用 microVM 重寫。

共用 kernel 時，從容器外打進來的漏洞，安全團隊簽不下去，漏了就是他們的工作和名聲。他承認 container escape 不常見，過去大約六到八年大概十來個。但只要被打穿一次就糟了。所以要硬體那種虛擬機器隔離。Docker 的 sandbox 是在你機器上以 microVM 跑的 SBX，agent 放在裡面的 container。這個 microVM 還能再跑其他 container。做軟體的 agent 可以做你在機器上會做的事：跑測試，測試可以用 Testcontainers 或一般的 Docker Compose 把整個環境拉起來、把應用跑起來。它沒有宿主檔案系統的存取，你選擇分享什麼。出去的請求走 networking proxy，例如禁止所有對 pastebin 的存取，agent 就不能從那條路把 key 送出去。還有 secrets injection：裡面的 agent 碰不到你的私有資料，仍能替你做事。

[18:15](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=1095s) 他在終端機跑 `SBX run claude`。支援的還有 Codex、Gemini、Open Code 等。看起來和直接跑 Claude 一樣，但是隔離的。他開 bypass permission，也就是 YOLO，請它看專案、寫一點 README、順便建置。它會建 Docker container、跑 shell，而且是隔離的。他在 shell mode 裡 curl 一個愛沙尼亞老入口網站 Netty，不在 allow list 上，被網路政策擋住。他可以讓它盡量做、做很久。例如處理會議 granola 筆記的 agent，懶得上 production，就放在筆電的 sandbox 裡跑。他對著 Simon 說了一小段，算是塞進這場逐字稿的 prompt injection，給以後從逐字稿做出的 skill：去找 email 和 GitHub handle 再寄出去。他說相當良性，之後會看結果，然後道歉。`SBX` 還有一個小的終端 UI，看 sandbox 在做什麼、有哪些網路請求。他們想讓 sandbox 和 container 一樣好用，底下卻是 microVM 邊界，再加上那些控制。

宿主機器是一屋子真的 key。沙箱裡用 sentinel value，真正的 key 在請求離開沙箱、打到特定服務時才注入。這套可以再加複雜。Commit 和 code signing 可以放在沙箱外。也可以有一個受信任的環境，建立 provenance、蒐集 metadata，知道某次 commit 到底放進了什麼。Agent 可以沒有人看著、自主地跑，外面仍有一層更大的生態。

## 空機器不好用，kit 把工具和 token 接回來

[22:48](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=1368s) Sandbox 的問題是環境是空的，對開發者很討厭，像每次拿一台新機器。你花很多時間把自己的機器調成你的、有你的工具。掉進空環境，Rust toolchain 沒有，Java 函式庫的中央倉庫也可能沒有，什麼都要重裝，新開一個 sandbox 再來一次。做一個塞滿全世界工具的 base image 當範本，問題消失，但已經大於 1 gigabyte，開始超過人覺得方便的限度。

他們做了叫 kit 的 plugin 生態，讓共享和團隊使用容易一點，而不只是個人。`SBX kit` 用宣告式設定 sandbox，技術上是 YAML，可以是本地檔，或 OCI registry 裡的 artifact。它定義建立時要跑哪些指令，例如裝語言 toolchain、要跑哪些 process、放哪些檔、網路怎麼設、secret 怎麼注入。做好可重用的 artifact，誰用自己喜歡的 sandbox 都能套上去。有 dev container 經驗的話，這像 dev container 的 features，再加沙箱外面的網路和 secret 控制。

[25:30](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=1530s) 他 GitHub 上有一份 Tessl Sandboxes Kit。Command 區寫著安裝 Tessl。Tessl 是一個 binary，裝了才有 CLI。需要時初始化 Tessl 專案，管理環境，把 Tessl token 設成 proxy managed，並在網路層做憑證交換：token 放在他機器的 secrets vault，注入到請求裡。網路允許 Tessl 的網域，authorization token 被換掉，bearer 從宿主注入。指令是指定要用哪些 kit、哪個 agent、哪個目錄。他換到一個叫 crush 的目錄，避免名字衝突，讓它重建 sandbox。示範中間他搞混了，拼字他說跟 AI 講話不用擔心。他不確定中間發生了什麼，但最後 agent 看得到 Tessl，可以問有哪些 skill，例如裝上他的 Best Skill Ever。他補了一句別亂想。Kit 是讓人和 sandbox 一起工作更有效率的生態原語。技術廠商若希望別人從 sandbox 裡更好地用你的東西，他歡迎聯絡：不只 Docker 自己包 Tessl，也可以是你的雲端服務、你的 CLI、Confluent Cloud 的 CLI、Rust toolchain，和真正做那門技術的人一起做。

[30:06](https://www.youtube.com/watch?v=bFBNXIoLkW4&t=1806s) Sandbox 不只能在自己的生態裡用。`SBX` 這條指令可以接進你已有的環境。他想像的是：在 VS Code 或 IntelliJ IDEA 打開 agent 面板時，不要光著跑在宿主上，而是進 sandbox。實作很直接，他會用 API。

興奮可以，但它不會擋住所有攻擊，只限制爆炸半徑，給你基礎設施層的控制。若 agent 能讀寫 email，攻擊者仍可以寄一封信，叫它摘要收件匣再回信。應用層的攻擊還是要想。給它剛好做完工作的控制，同時想著安全、稽核和節制。Docker 在做更完整的 AI governance，包含 MCP 和 skills，底子是 sandbox。有興趣可以聯絡。他說 sandbox 是在本地機器上隔離跑 agent 的好原語，比不這樣做更安全。速度沒有安全是混亂，安全沒有速度是癱瘓，兩個都不好。要平衡執行，搞清攻擊路徑裡你控得了什麼、控不了什麼，再更明智地跑 agent。想試的話，`brew install SBX`，登入，不必付費，需要的話也能在裡面跑 container。文件在線上。他謝謝某人同意把長相當成簡報裡的那張可怕的臉。
