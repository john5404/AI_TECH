# I Broke Production at 2 AM: How AI Agents are Fixing Post-Mortems

Merlin 講他們怎麼為 incident post-mortem 做一個 rich text editor。片長 22 分 49 秒，英文手寫字幕。他在 incident.io。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 incident.io 聽成 instant io，把 Tiptap、ProseMirror、Yjs、Hocuspocus 聽成近似發音，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=B57MLbmpdGw)

## 一句話

事故會一直發生，尤其 AI 把變更速率拉高之後。incident.io 認為 post-mortem 不該追個人的錯，該追讓情況發生的流程和缺掉的 guardrail。他們自己做編輯器，是因為整段 incident 資料都在自己手上，文件可以真正 data rich，AI 也能在你還在寫的時候於背景查 pull request。編輯器本身的難題他們不自己擁有，靠 Tiptap、ProseMirror 和 Yjs。

## 凌晨兩點，沒有人有全貌

[1:25](https://www.youtube.com/watch?v=B57MLbmpdGw&t=85s) Merlin 原本做設計，後來變成偏 frontend 的 product engineer。他共同創辦並帶領 mode at work 的工程，該公司最近被 UKG 收購。他也是 Samir 的早期員工，他說那是做投資研究的 RAG，由 Eric Schmidt 支持。九月起他在 incident.io。字幕裡他謝謝 Will 幫他拿到這份工作。

[1:40](https://www.youtube.com/watch?v=B57MLbmpdGw&t=100s) 他先問現場誰弄壞過 production。AI 提高了變更速度。有些 feedback loop 也許能降低 change failure rate，但變更量變成 5 倍或 10 倍時，出事的情況大概更糟。他舉 CrowdStrike：一次例行更新讓全球數百萬台機器當機。緊接著的句子字幕含糊，說系統出問題、接不了訂單、持續數週，損失也許是數億。後面還有 TfL 的重大 outage。三家公司、三套 tech stack，一旦壞了，客戶、錢、名譽、法規同時在線上。規模小一點的 incident，團隊也在固定遇上。

[3:00](https://www.youtube.com/watch?v=B57MLbmpdGw&t=180s) 裡面的畫面是凌晨兩點、電話響、人半醒著進通話。警報到處觸發，通話上另外三個人各有理論，沒有人有全貌，你卻得用遠少於決策所需的資訊做決定。每一分鐘都很貴。他說這是最糟情況，較小的 incident 也適用。事故不可避免，混亂則不是。

## incident.io 把回應拆成四段

[3:54](https://www.youtube.com/watch?v=B57MLbmpdGw&t=234s) 他們在做 incident response 和 management 的端到端平台，幾個產品一起工作。Core 要讓對的人的電話在凌晨三點發出很糟的聲音，並能 escalate 到該進房間的人。Response 把 Slack 或 Teams 變成 incident command centre，讓人講清楚、把任務交出去。AI 那個產品在你加入 Slack channel 之前就啟動調查、找 root cause，你到的時候已有一份還不錯的 context，也能自動化一部分解決步驟。Status pages 讓客戶和終端使用者知道發生了什麼。

[4:52](https://www.youtube.com/watch?v=B57MLbmpdGw&t=292s) 公司約 180 人。他說就是演講當天，客戶那邊的 incident 累計到 70 萬件；他覺得抱歉，不想太慶祝。客戶約 1500 家。Product engineering 在倫敦 Old Street roundabout 附近，New York 和 San Francisco 是 go-to-market 和 sales。

[5:35](https://www.youtube.com/watch?v=B57MLbmpdGw&t=335s) Incident 解決、塵埃落下之後事情還沒完：debrief、建立並追蹤 follow-up、以及 post-mortem。Post-mortem 是事件紀錄、對發生過的事做反思、也是學習的機會。它要找出真正的 root cause，寫下預防措施和你要做的改變。關鍵是 blameless：不把矛頭指向個人做錯了什麼，而看是哪些流程、或哪些 guardrail 的缺席，讓這種情況能夠發生。

## 現代的寫作體驗不是字型選單

[6:30](https://www.youtube.com/watch?v=B57MLbmpdGw&t=390s) 他用對立面來定義現代寫作體驗。以前的 rich text 是幾乎無限的樣式：很多字型、顏色、大小。舊版 Word 還能裝上一堆 power toolbar。他現在說的 rich text 是 data rich、動態、內嵌內容、而且不雜亂。軟體的工作是讓人專注在內容。Progressive disclosure 和 adaptive interface 取代了那堆雜物。

[7:53](https://www.youtube.com/watch?v=B57MLbmpdGw&t=473s) 多人編輯也是。他待過要把檔案用 email 傳來傳去、輪流改的地方；有伺服器時檔案會被鎖，一次只能一個人看。即時協作現在是 table stakes。

[8:17](https://www.youtube.com/watch?v=B57MLbmpdGw&t=497s) AI 這段他先替 Clippy 說句公道話：那不是 AI 產品，比較像一長串 regex。它有寫作助理的想法，當時超前，但大家一致覺得它煩、會打斷，不是想要的體驗。現在 AI 不該是事後拴上去的東西，而該嵌進產品怎麼運作，沿著旅程撒在各個觸點。

[9:01](https://www.youtube.com/watch?v=B57MLbmpdGw&t=541s) 他們做編輯器，是因為整段 incident 流程和資料都在自己這裡，最適合拿掉 post-mortem 的雜事。文件可以 mention 和 embed：你管的 service 或 app、公司裡的 team、客戶、pull request、Slack 對話、其他 incident。這批 incident 資料的語料會隨時間複利，人在用，AI 也愈來愈用它找重複的模式。若新 incident 和舊的模式相近，那可能就是 root cause。他把相關產品名在字幕裡說成 ISV，前文則稱為 AI，這裡不另造名字。

[10:17](https://www.youtube.com/watch?v=B57MLbmpdGw&t=617s) 把 post-mortem 做好，是為了以後少出事。他們也在做更快解決 incident 的工具，但沒有什麼比一開始就避開更快。一份寫出真正 root cause、而且 follow-up 足夠阻止重演的 post-mortem，長期會省下很多時間。

時程他列在 [10:50](https://www.youtube.com/watch?v=B57MLbmpdGw&t=650s)。八月開工。九月在 San Francisco 的 SEV0 conference 做了 demo。十月必須讓 demo 真的能動，因為現場有不少 smoke and mirrors。十一月給 early access，同時把獨立 demo 接進平台。十二月 general availability，和舊 editor 並行。一月關掉舊的，app 裡只留一種體驗。二月在做他稱為 Delight and Polish 的較小功能，並依客戶回饋改。下個月準備行銷發佈。

## 難的部分交給 Tiptap

[12:11](https://www.youtube.com/watch?v=B57MLbmpdGw&t=731s) Rich text editor 是硬問題。Content editor API 有很多粗糙邊角。瀏覽器裡的 selection state 不好管，也不貼近 React 看世界的方式。即時協作也難。這些不是他們有興趣自己擁有的問題，所以能靠 open source 就靠。

主幹是 Tiptap，他把它看成 headless 的開發者體驗黏著層，包住幾個元件。ProseMirror 是 editor 核心，管 schema 和變更。Yjs 是 CRDT，給即時協作用，多人同時改一份文件。他要人把它想成文件版的 git，差別是不會遇到 merge conflict：演算法一定會併成某個狀態，不必手動解。Hocuspocus 是 Tiptap 的 collaboration server。markdown-it 做 markdown 的解析和轉換。linkify 偵測連結、hashtag、mention。字幕裡還有一個工具名聽成 watch s，不在這裡猜。UX 上他們也直接借用自己喜歡、而且用得上的產品裡的 pattern。

[14:19](https://www.youtube.com/watch?v=B57MLbmpdGw&t=859s) Schema 嚴格定義什麼內容合法，而且不是單一檔案，是從丟進 editor 的 plugin 彙總出來。Tiptap 有 starter kit，他們也自己做了很多。文件裡每種能出現的東西都是 plugin。Node 是內容型別，heading、paragraph 是 node；他們還為 timeline、在文件裡追蹤 follow-up 做了自訂 node。Mark 是行內樣式：bold、italic、strikethrough，也可以是 highlight、comment、inline code。Decoration 不持久、也不會同步進文件，只在你的機器上短時間存在：送出前的 draft comment、建議中的 AI 修改、選了文字還沒決定連去哪的插入連結。

[16:14](https://www.youtube.com/watch?v=B57MLbmpdGw&t=974s) 文件可以在 HTML 和 JSON 之間互轉，主要為了複製貼上。剪貼簿上是 HTML，瀏覽器裡的狀態是 JSON。你指定的 HTML 不一定就是瀏覽器裡看到的，實際渲染交給 React，另外再定義每個 node 在剪貼簿上長什麼樣。

他用 mention node 當例子。它是 inline node，也是 atom：在 ProseMirror 裡代表游標不能放進中間，只能整顆刪掉或整顆加上。要提供 parse 和 render，告訴它複製時如何變成 HTML、貼回時如何變回 JSON。Attribute 像 React 的 props，會跟著文件持久化，每一個也有 parse 和 render。真正怎麼畫，交給他們 app 裡的 React。每個 node 還能加一段自然語言，描述它該怎麼運作、怎麼建立。這些描述會交給 LLM（字幕寫成 alarm），讓它一起改文件時知道怎麼做。

[18:29](https://www.youtube.com/watch?v=B57MLbmpdGw&t=1109s) 協作架構是先向自己的 API 拿 token，連到他們自己基礎設施裡 self-host 的 collaboration server。瀏覽器和伺服器之間用 WebSocket 雙向同步。伺服器再懶惰地和 API、Postgres 同步，Postgres 是備份。任一 replica 都可以獨立、同時更新，不必先和其他 replica 協調；不一致會自動解開。某一刻各 replica 的狀態可以不同，最後會 eventually consistent。

## 背景裡的 agent 在查那兩張 PR

[19:30](https://www.youtube.com/watch?v=B57MLbmpdGw&t=1170s) 送進 AI 的 incident context 包括 alert 狀態、telemetry、調查、Slack 訊息、連結、圖片、Scribe 的會議逐字稿、incident timeline、相關的人、已經發出的更新。用這些可以產生 post-mortem 初稿、重寫某些段落，以及審查文件：不準確、互相衝突、缺了 follow-up。Scribe 是他們的會議轉錄和筆記，同一份 context 對它也有用。

[20:49](https://www.youtube.com/watch?v=B57MLbmpdGw&t=1249s) Demo 他口述看得到的部分：線上的協作者、focus mode、mention 會帶出組織裡的 context、incident timeline、表格、pull request 連結、不離開鍵盤的 slash menu、圖片拖放上傳。Ask AI 可以劃選文件，請 AI agent 解釋或給 review。他划了兩張 pull request，要知道它們實際做了什麼。這件事在背景跑，他繼續改文件的其他地方，加了一條 follow-up，內容是還需要更多 unit test。答案回來之後，他說那就是那兩張 pull request 裡有什麼。字幕沒有逐字念出 agent 的回覆，這裡不補。

他說他們在招人，想了解可以來聊；字幕裡另一個名字聽起來像 Meg。
