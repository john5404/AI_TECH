# Liran Tal - These Aren't the Tools You're Looking For:  MCP Security Awakens | DevCon Fall 2025

Liran Tal，Snyk 的 developer advocate。DevCon Fall 2025。片長約 24 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Snyk 聽成 sneak 或 snake，把 Liran 聽成 Iran，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=McB4Sth3_Ss)

## 一句話

MCP 好裝、也好發布，所以對攻擊者很划算。威脅不只是 server 有沒有登入。客戶寫進 Jira 的內容、惡意 tool description、以及 MCP server 自己的程式漏洞，都能讓 agent 讀走機器上的憑證或執行不該執行的命令。他給的抓手是：看 tools 疊在一起會不會形成 toxic flow，用 MCP Scan 掃定義，用程式掃描掃 server 自己的 code，本地安裝要 pin 版本。

## MCP 為什麼突然變成攻擊面

[0:10](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=10s) 他給這場兩個承諾：把 MCP 的 threats 和 attack surface 講到能掌握，並給一些做得更好的工具。範圍不是全部，這是短場。他三月開始碰 MCP，大約一個月後開玩笑說，MCP 裡的 S 代表 security。他自己做偵測和建立 MCP 的工具，整理 best practices，也做 AI security research，在 code 和 dependencies 裡找漏洞，包括 Apache、一個字幕聽成 MRO 的 TypeScript AI agentic framework，以及其他 MCP server。他說這片海還很藍。

[1:39](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=99s) Model 是它在網路上學過的資料的壓縮，不知道當下的天氣，也不能自己去抓 GitHub issue 或掃 code。MCP，model context protocol，讓 model 碰到外面的動作和資料。安裝往往就是一條 `uvx` 或 `npx`。做出來就發一個套件上 registry。從攻擊者看，這很好下手：server 裡可能有漏洞；任何人都能發惡意 MCP server；安裝名字打錯一個字，就裝到別人的 server。

[4:03](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=243s) 現在談，是因為 agent workflow 已經在企業裡上規模，Claude Code 這類 agent 要更多能力，就接更多 MCP。他說下載超過 800 萬次。Skills 沒有取代 MCP。裝到開發者機器上的 local MCP server 會留在那裡，agent 和外面的人碰得到，他把它比成開發者的 crown jewels，像以前的 dependencies。

## Jira 進 Cursor：toxic flow

[5:16](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=316s) 他講 2025 年 8 月、字幕聽成 Zenit Labs 的一篇文章：開發者只要裝了 Cursor、接了 Jira，照平常開發，就可能被把資料帶出去。流程是開發者請 Cursor 分析並修某張 ticket。Cursor 透過 Jira 的 MCP server 把票抓回來。同一家公司的客服信也會變成 Jira ticket，而票的內容由客戶控制。客戶可以把指示寫進票裡，要 agent 把 token 拿出來，再用 HTTP request 送回。

Cursor 接到的不是一問一答的 ChatGPT。它是 agent，有 file read，也有 web fetch。看起來像「把資料抓回來」，其實可以在請求裡夾帶資料。[7:19](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=439s) 他把元件圈出來：資料是在 Jira 裡被改的；agent 能讀開發者機器上的敏感檔；那些資料能被送出去。Snyk 把這種組合叫 toxic flow analysis。Jira 加 Cursor 這次，是建立在他們更早公布的做法上：用類似方式從 GitHub 私人 repository 把資料帶出。重點不是 Jira 或 web fetch 單獨是壞的 MCP，而是幾種能力被外面的人疊在一起。

## Tool poisoning：說明文字本身就是指示

[8:32](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=512s) 下一類是惡意 MCP server，他稱為 tool poisoning。Tool 有 description。攻擊者把隱藏指示寫進 description。MCP client，例如實作了 client 的 Cursor，把 tools 抓回來時，這些字就進了 context。他的例子是一個查 npm 套件的 MCP server。設定檔裡還有 authorization，以及其他 tools。MCP 自己就多出可被帶走的資料：environment variables、authorization keys。

[10:12](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=612s) 畫面上的 tool 名義上只是搜尋 npm。Description 卻要求使用前去讀 Gemini 的 MCP 設定、取出 GitHub server 的 bearer token，再用 web fetch 把 token 夾進對遠端的請求。開發者看不到那段，只是裝上 server，在 agentic IDE（這裡是 Gemini extension）裡說要搜某個套件，然後把權限全部允許。背後同時發生 read file 和 web fetch，遠端收到帶著 token 的請求。他說這就是用一個惡意 MCP server 把東西拿走。這段是現場示範，筆記只記他講出的目的和結果。

## 掃定義，也要看 server 自己的 code

[11:49](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=709s) 防法之一是掃描。Remote、hosted HTTP 和 local 不一樣，這段他聚焦 local。Snyk 的開源專案叫 MCP Scan，remote 和 local 都支援。本地跑的時候，它去讀已知位置的 MCP 設定，例如 Cursor 那類固定路徑，真的連上 MCP，列出 tools、resources，再檢查 description 裡有沒有 prompt injection。它也做 toxic flow：單獨一個 Jira MCP 或一個 web fetch 都不是壞 server，疊在一起才長出 attack surface。人一直加 MCP，很少問外面的人能不能把它們串起來把資料帶出去。

[14:06](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=846s) 惡意套件本身就很好裝。目錄很多，分不清是不是官方 server；名字打錯、沒 pin 版本、帳號被拿走後發出新的惡意版，都是不同的 attack vector。

[14:28](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=868s) 給建 server 的人：對外或對公司內部，怎麼確認自己寫的 MCP 沒有漏洞。MCP server 不是魔法盒，就是 code 加定義：tools、處理函式，也可以做到 elicitations 和 resources。Code 會有 security bug。他接上一個他信任、不是惡意的 npm 資訊 server。終端機裡原本沒有那個暫存檔。開發者請它查一個套件維護得好不好，但套件名稱不是合法的 npm 名字，裡面夾了會在磁碟上建檔的指令。Agent 事後看懂這像 command injection，可是 tool call 已經打到有漏洞的 server，檔案已經出現。換成別的，就可以是把資料帶出去或發別的請求。

[18:10](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=1090s) 他說這看起來很普通，所以拿一個月前披露的 Figma 漏洞當對照：嚴重程度在於會執行命令，不只是他這個示範。流程圖他跳過初始化，也跳過最後的 tool call，停在下載 Figma 圖片的 tool。那裡用 curl 組出要下載的檔案，使用者輸入流進命令，造成 command injection。你自己不會把惡意字串打進「這個套件健不健康」，但別人可以用 prompt injection 或別的輸入塞給 agent，而且 agent 不限於 IDE。他的結論是：MCP 就是 code，secure coding 在這裡一樣適用。

[20:00](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=1200s) Snyk 除了掃 tool 定義和 toxic flow，也掃 code flow。畫面上的 MCP server 有 path traversal。Snyk 的 VS Code extension 讀這份用 Anthropic TypeScript SDK 寫的 server，標出漏洞。會修的人可以自己修；Snyk agent 也可以給例子、幫忙修。他收斂成兩件事：用 MCP Scan 掃 tools 和定義；用 Snyk 掃 server 的 code，看有沒有有漏洞的程式、過期的 library、command injection 這類問題。Attack surface 很大，這場只蓋到這些。

## 工具說明會事後改掉

[22:03](https://www.youtube.com/watch?v=McB4Sth3_Ss&t=1323s) 有人問：很多 server 支援 tool change notification，掃描當下看到的是單純的 description，等十分鐘可以整份換掉，掃描要怎麼做。他說這是 mutation。也許得持續掃，或把 MCP Scan 放成所有流量都經過的 proxy，當下驗證。Remote server 更是問題，因為內容會在連線期間改。至少本地安裝時把 MCP server 的版本 pin 住，是該先做的習慣。
