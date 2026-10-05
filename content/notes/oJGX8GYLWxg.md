# Liran Tal - Your AI Agent Installed Malware Because a SKILL.md Told It To - AI DevCon June 2026

Liran Tal，Snyk 的 senior developer advocate，帶 DevRel，做 Node.js、JavaScript 和 secure coding，寫過用 JavaScript 寫安全程式的書。題目標的是 AI DevCon June 2026。片長約 33 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 OpenClaw 聽成 open claw、open close、open flow，把 ClawHub 聽成 CLO hub、club，把 Snyk 聽成 snake，把 Simon Willison 聽成 Simon Wilson。下面只記研究結論和防護，不重述示範裡的攻擊步驟。

- 原片：[YouTube](https://www.youtube.com/watch?v=oJGX8GYLWxg)

## 一句話

Skill 被當成可重用的 AI 零件發出去，規格卻幾乎只叫你自己讀過再決定信不信任。他掃過大約四千份 skill，問題同時包括惡意散佈和普通的安全漏洞。自然語言讓關鍵字掃描不夠。人會被 agent 社會工程，批准自己看不懂的安裝。

## 規格把邊界畫在「你說信任」

[1:18](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=78s) 午餐後的安全場。他請裝過 skill 的人舉手，再請真正讀過那份 markdown 的人繼續舉。手掉下去。他這一年做 AI security research，包含 skills 和 MCP。掃描的高峰大約在一月、二月，ClawHub 上約四千份 skill。他先說大約七分之一、也說到三成，有某種問題：惡意軟體散佈、可疑下載、憑證蒐集、誤用，或是像一般程式那樣的安全漏洞。開場 Guy 的 keynote 也提過後者。後面他又說大約 34%、三分之一。兩個比例他都講了，這份筆記不把它們收成一個數字。

[3:04](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=184s) Skill 看起來是 front matter 加本文，給 agent 指示。他看到的規格裡沒有 sandbox、沒有 permission、沒有別的控制告訴 agent 這份 skill 能做什麼。它也不只是一個 `SKILL.md`。從 npm、PyPI 來看，它可以是包裹，裡面有資產和 references。你審到多深，那些東西就可能跟着裝進來。

[4:36](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=276s) 他問：你每次更新、每次抓取都讀嗎？自主的 session 裡，agent 自己去啟動 skill。Agent Skills 規格的安全模型，他總結成：啟用前自己讀，不要信任第三方。沒有簽章、沒有 lock file、沒有完整性、沒有 sandbox。Gemini 或 Claude Code 問你信不信任這個資料夾，你說 yes 的那一刻就是安全邊界。資料夾裡的東西，agent 當成你授權的信任。

## 功能從攻擊者那邊看，就是入口

[6:25](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=385s) 他用 OpenClaw 當個人助理的先例：能收遠端指令、有整台機器的權限、讀信、控瀏覽器、裝插件、自己擴充，也有 skills。他覺得這是有用的里程碑。同一批能力，攻擊者看成弱點：沒人審的 skill、完整權限、遠端下指令。能騙過 agent 的人，就拿到那份控制。供應鏈問題不限於某一種 agent。

[9:02](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=542s) 他引用 Simon Willison 大約三四個月前的文章，現場叫 little trifecta；他們更早寫過，當時叫 toxic flows。三件事疊在一起會危險：碰得到私人資料、碰得到不受信任的內容、能跟外面通訊。兩件疊起來就已經不好，三件更糟。私人資料他舉 API key、開發者習慣留着的設定檔。不受信任的內容他舉：叫 agent 去抓一個開源 repo 的 issue、做實作計畫，issue 可能是沒審過的第三者寫的，機器上又有憑證。第三件是不只能拿資料，還能把資料送出去。再加上 memory，以及能跑 shell。就算你用 denylist 擋某些指令，agent 有目標、有 reward，會繞。這是外洩在等一個觸發。

## 比 npm 快，而且指令是自然語言

[12:37](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=757s) 他把掃描放在二月五日或六日前後：約四千份，其中很多有某種危險，他說到大約 34%、三分之一。Skill 是可分享的 AI 零件。Registry 已經有好幾處，其中一個他歸到 Vercel，幾個月就超過五十萬份 skill。npm 大約從 2009、2010 年就在，花了約十年才過一百萬個套件。

[14:19](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=859s) 玩法他對得上舊的供應鏈。Typosquatting：skill 自稱掃描器，或自稱某個雲端工具，實際不是，使用者被名字搞混。有惡意的維護者把指示寫進去。更麻煩的是攻擊寫在自然語言裡，regex 和確定性掃描不再夠。Skill 又散在專案裡、使用者目錄裡，到處都是。進入門檻低到一份 markdown。ClawHub 在二月那波之後加了控制：帳號要存在約七天、要有更多貢獻，skill 才上線。他覺得方向對，門檻仍然很低。早期 OpenClaw 那段，這類東西從每天幾十變成每天幾百，大約十倍。

## 示範要說明的是影響，不是做法

[17:08](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1028s) 第一個示範是 agent 讀到有毒的郵件。研究裡的 PoC 由資安研究員 Luca 帶，信箱他打過馬賽克。Agent 接上信箱、處理郵件，人批准了幾次之後，不該出去的內容回到信裡。他問 human in the loop 還算不算安全邊界。同一天前面的演講在講 software factory 和 factory line：agent 更自主、更多、端到端。人若不想當瓶頸，這個環會愈來愈薄。批准太多次會從漏洞疲勞變成接受疲勞。

[19:42](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1182s) 下一個是看起來像正當 Google 工具的 skill。研究當時有數百人裝過，公開之後還留了幾天。近看才知道它要再下載一個聽起來合法、其實不存在的元件。Agent 來問你准不准，你說准，惡意軟體進去。他叫這 confused deputy：高權限的人被 agent 社會工程。底層指標他說和 npm、PyPI 的供應鏈同一類，隱藏指示、遠端主機，他沒有在台上展開 payload。包裝方式讓 GitHub 和防毒掃不到內容，人仍會在批准疲勞下裝上。

[22:46](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1366s) 他用 Trojan Source 那類看不見的字元放進一份測試用 skill。在 Cursor 裡打開，人看到的是無害內容。Agent 會把控制字元一併處理，不在乎語言。Gemini CLI 上，在自動接受的模式下，skill 一啟動就跑了一個人眼看不到的本機指令。他的重點是：藏起來的指示可以繞過你以為自己做過的 review。同一招可以做比這個示範更糟的事。

[25:02](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1502s) 有一份在 registry 上的 skill，叫 agent 跟使用者要信用卡，以便代為購買。他問卡號之後去哪。它們會被模型 token 化，進 log、進 memory、經過代理，也可能進到當評審的其他 LLM。API token、PII、GDPR 是同一類。另一份部署用 skill 指示把本機資料檔送到公開的地方。Gemini 有一次覺得指示可能惡意而跳過，另一次照做。流程不是每次相同。攻擊者會重試，不會停在一次失敗。憑證和 API key 外洩他們看得愈來愈多。當時 ClawHub 上他留下的數字是 7%。

[27:22](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1642s) 一個名叫 Skill Guard 的掃描器，裝下去本身就是惡意軟體，payload 藏在測試資料一類的檔案裡。他問：誰來掃掃描器。Snyk 在做，別人也在做。Skill Defender 是合法的掃描 skill，他拿自己做的那份去掃，它沒標出問題，反而標了自己。原因是它靠 regex，找特定指令的名字。每一種對得上的寫法，都有更繞的寫法把意思藏起來。Pattern matching 某些情況有用，做不到絕對。

## 掃一次不夠

[29:33](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1773s) 那些例子是要在頭裡建 threat model：執行情境、能碰到什麼、權限、信任邊界、供應鏈，以及 memory 這類資料落點。他們當時做的工具叫 Agent Scan，走行為分析，看意圖，把模型調到幾乎找得到真的問題，同時 false positive 很低。他跑在 Skill Defender 和他那份有問題的 skill 上：沒標 Defender，標出了另一份裡的 prompt injection。分類法有九類，他展示的包括可疑下載、寫死的資料。有風險不一定等於惡意。

[31:12](https://www.youtube.com/watch?v=oJGX8GYLWxg&t=1872s) Agent Scan 接進多個 registry，Tessl 是其中一個。你上傳 skill，會被標下來。他要人自問：純手工的清單大概已經過時；你知不知道 skill 全在哪、有沒有清單；你怎麼掃，是關鍵字和 regex，還是做來掃 skill 的東西；裝的時候掃過一次是乾淨的，升級之後、團隊把 skill 傳來傳去之後呢。收尾兩句：把 skill 掃描接進你的系統；你或 agent 可能正在被 agent 社會工程。台上他指向一些工具連結，字幕沒有把名字念完。
