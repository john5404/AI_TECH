# Claude, TypingMind, AMP & MCP Servers: The Future Dev

Simon Maple 主持 AI Native Dev。來賓是 Alan Pope，Tessl 的人，這集字幕沒有念職稱。上一集是跟 Max 的 agent 入門，這集繼續實作：怎麼用 agent，以及用 MCP server 擴充它們。片長約 53 分鐘，英文自動字幕。字幕把 TypingMind 聽成 typing mind，把 Popey 聽成 Popey、popy，把 DevRel 聽成 Devril，把 Grype 聽成 Gripe、GRE，把 Anchore 聽成 Ankor，把 Tessl 聽成 Tesla、Tessle、Teslao，把 AGENTS.md 聽成 agents.m MD。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=0xUZjRGSUA4)

## 一句話

Alan 說自己不是開發者，但 LLM 讓他能把想法做成可以發布的軟體。缺口不在再多聊一句，而在從聊天走到做完。他用 TypingMind 把多年部落格收成知識庫，讓文章聽起來像他；用 terminal agent 時，他從一句話的 vibe coding 改成很長、很具體的 prompt，然後讓它自己跑。MCP 把下載逐字稿、掃漏洞這類事接進流程，但沒人維護的 MCP 會從工具變成負債。他要的下一步是可重用的 spec，讓 agent 不必每次重新摸索、也不必每次吵架。

## 先用英文把想要的東西寫清楚

[0:57](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=57s) 正片前有 podcast 預告，90% 的聽眾還沒訂閱。Alan 是 longtime listener、first-time caller。朋友會笑他，因為他說自己不是開發者。他沒讀軟體工程，長期做 DevRel 和社群，會寫一些 code。過去幾年 LLM 把他從有想法，加速到做出能用、甚至放到網上給人批評、審查、使用、貢獻的軟體。他常卡在不知道用什麼工具、什麼框架，也不完全懂自己在做什麼。現在比較能把事情做完，日子好過一點。

[3:19](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=199s) 兩人第一次見面是在當地一家 Starbucks 喝咖啡，聊規格聊到忘我。Simon 問，什麼問題讓他從 prompt 風格，轉去把規格做大。Alan 說腦子裡早就想先描述自己要什麼。他覺得若能描述，總有一天會有時間和能力把它變成 code。第一步是用英文寫到自己和別人看得懂。他常寫的不叫 spec，叫設計文件，拿去給做軟體的朋友。有時會 nerd snipe 他們幫他做。有時只得到批評：這永遠不會動，或這是好主意、該有人做。然後就進了 Alan 有一天想做完的那張大清單。Spec-based development 開始有 traction 時，他覺得時機到了。那些文件他完全懂，但要傳達進一個開發者的腦子很難。傳達給一個盡其所能理解、並能把它變成可執行東西的 LLM，比較做得到。他缺的是更技術的規格，不是設計文件：要用 Python，用 uv 管相依，後端用某個資料庫，API 長這樣。有了 spec，他能指出最佳實踐，也能指出自己要怎麼實作。從跟 LLM 聊天到做出完成的專案，中間有缺口，常常是因為人們不知道自己不知道什麼。他很想把這段分享出去。

[6:03](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=363s) Simon 聽到的不只是要做什麼，還有很多指引，告訴 agent 該怎麼做。他們要談 Claude、Gemini CLI、TypingMind，以及 sequential thinking、Firecrawl、Tessl 的 YouTube 這類 MCP。Alan 一開始只是需要一個能動起來的東西。現在他懂了版圖，在找能讓他更快、或取代手動流程的新東西。例如 YouTube 逐字稿下載。影片裡字很多，可以拿去做社群貼文和部落格，這是 DevRel 會做的事。他已經寫過一支小 shell script，用 yt-dlp，但要手動跑指令和 URL。更好的是在寫部落格的流程裡，有一個 MCP 去做，不必跳出那個狀態，去用自己寫得很糟的 script 或第三方工具。跟 LLM 說話時，它可以分出去拿逐字稿、做摘要、再看人們在搜什麼關鍵字，把每件事外包給最會做的工具。難的是去哪裡發現這些東西。有時只是口耳相傳，跟朋友喝咖啡，對方講週末發現了什麼。對他有用，但不能擴展。Agent 的小設定也一樣。沒人有時間把所有文件讀完。他寧願要別人的推薦，以及有評分的工具和 MCP server，好讓他做定性的決定。

## 網頁上的 agent 可以帶著你的語氣，也可以直接寫進資料夾

[9:18](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=558s) Simon 說 agent 就是能很自主地去做事情、執行任務，也許再叫 sub-agent。它沒規定 UI。常常是聊天，有時在網頁上。Alan 說這件事一直在變。很多人就在網頁或 app 裡跟 ChatGPT 聊天，叫它做東西。熱門的 agent 隨時間進步很大。以前你會跟 agent 生氣，想讓它做你要的、懂你要的，最後 context window 滿了，它忘掉你最初問的。現在很多網頁版 agent 內建程式編輯器，有些還能在網頁裡直接跑和測 code。他早期用 ChatGPT 或網頁版 Claude 寫 code 的經驗，和現在不一樣。他自己做這件事大約一年多，他說那仍然不長，經驗可能被這段時間染色了。

[11:26](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=686s) 若你已經在用 Claude 或 ChatGPT 這種網頁工具，他會看 TypingMind。同樣是網頁式 UI，但非常能設定，可以接到外部工具：下載 YouTube 縮圖或逐字稿、上網搜更多資訊、直接連 GitHub，做研究和開發需要的事。裡面可以建立叫 agent 的東西。這個詞太滿了。在這裡它的意思是一種人格：準備好一份 prompt，也許還能碰到你上傳的知識。他的簡單例子叫 write like Popey。知識庫在左手邊，可以上傳文件，TypingMind 裡的 agent 能用。其中一份叫 Popey blogs。他大約從 1997 年就有部落格，把寫過的文章原始檔全放進去，讓 TypingMind 幫他寫一篇聽起來像他寫的文章。他知道這聽起來像以後都不自己寫了。這是測試，沒用很多次，只用過幾次。一旦它知道你的風格、語氣和寫法，新內容會看起來像你寫的，相當意外。

[14:27](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=867s) 現場他說 write like Popey，prompt 是用 Alan 會寫的方式寫一篇部落格，題目是命令列裡 MCP server 的新發展。TypingMind 不鎖一家供應者。他可以中途說改用 Gemini 或 ChatGPT，甚至把對話分叉、換模型。這是比起只坐在 ChatGPT 或 Claude 網頁裡的好處，因為兩邊互不給對方的模型。它找到他以前寫的一篇，Command line only laptop，關於他曾有的一台 ThinkPad，又讀了幾篇別的文章。出來的風格就是他會寫的：開頭放 TLDR，然後字寫太多，小標像 what on earth is MCP。他喜歡的是很多事在同一個介面裡：接不同工具、上傳知識，不只部落格，也可以是文件或既有的 code。他註冊之後任何地方都能用，包括手機。可以開始一段對話、開始做一些軟體，然後走開，換個地方繼續。

[16:09](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=969s) 另一個他覺得很酷的 MCP 叫 file system。人在網頁上，卻可以把工具限定到機器上的特定目錄，叫它直接把 code 寫到機器上。這摆脱了以前跟 LLM 聊完再把 code 複製貼上。它直接在那個資料夾建檔。之後他可以用 GitHub 的 MCP，讓它在 GitHub 建 repository、上傳整個東西和 README，甚至讓 README 聽起來像他、像他其他 README 的風格。他覺得這是一個好工具，很多不同的事在一個地方做完，不必在一堆工具之間切。若你喜歡網頁 UI，這很適合。它感覺很通用，不一定專為寫 code 或寫部落格。那就是 MCP server 的力量：agent 可以分出去，為特定任務直接呼叫。Simon 想做實驗，十篇部落格，五篇手寫、五篇用這個，看認識他文風的人猜不猜得出來。Alan 說他一定會改。它們有時還是太興奮，用他絕不會用的句子或最高級形容。說服力卻出奇地好。

[18:13](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1093s) 前一份工作他用這套寫 webinar 摘要。他看可能來談的人，刮下對方 LinkedIn 最近每一則貼文和社群媒體，再到對方維護的開源專案，刮最近五次會議紀錄，全部放進去，說：給我一份這個人能有權威地談、而且顯然喜歡的題目的 webinar 大綱。再給公司用的摘要格式。出來的摘要幾乎正中。老闆說就是要這個。對方說這些我都能談。Simon 笑說這集 podcast 其實也該這樣做。

## 一句話讓它跑，很快就累；他改成先把話說滿

[19:26](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1166s) Claude Code 也能做類似的事，而且大概不會抱怨。但它更是開發者工具：改 code、開新專案，是好的起點。Terminal 上的 AI agent，Simon 說大概是今年較早才出現。Alan 很喜歡。Claude Code 剛出來時，他用 VS Code 和 GitHub Copilot，大家看過的圖形 IDE，側邊跟 agent 聊天，直接在 IDE 裡更新或建立專案。Claude 不一樣，看你怎麼用。可以跳進 terminal，建一個資料夾，他當場叫它 project five，說這是今天第五個專案，然後啟動 Claude，叫它做東西。沒有 IDE，他不看 code，也不在別的工具裡，直接跟 Claude 說話。

[21:38](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1298s) 這不是準備好的 demo。他猜著做，中間有一次 API 錯誤，它恢復了。他說用一種自己不懂的語言，做一件自己想做的事。他喜歡 RSS reader。底下當然會在這個資料夾裡寫 code。他不知道有沒有裝 cargo，也不知道相依齊不齊。它會用自己的知識和工具能找到的東西開始寫。能不能動，他不知道。他幾乎沒做準備，就那一行。這很自由：面前不是整套 IDE，只是跟一個也許做得出、也許做不出你想像的東西聊天。他心裡想的是一列 feed，點一個 feed 看最近的文章，再點一篇展開。他不確定做出來的是不是這個。他說這就是幾個月前敢說出來的 vibe coding：吐出一行，叫它做，它做出一個東西或做不出，可能能動也可能不能。他不想這樣。他要能清楚說出自己要什麼。只說用 Rust 做一個 RSS reader，他覺得不夠。

[23:44](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1424s) Simon 問他是短 prompt 再迭代，還是一開始就很長、把風格、技術堆疊和能力寫清楚。Alan 說自己從短 prompt 進化到長 prompt，他覺得很多人也是。你心裡有想法卻沒說全，agent 只能依拿到的資訊盡力做，這很累。他現在非常清楚、非常具體，幾乎太囉嗦，因為想從一開始就掌舵。權限那些跳出來的小提示，問要不要安裝、要不要改目前目錄的檔，他常常全部說 yes，或在 Claude 設定裡允許它編輯那個資料夾。他要給一段很長的 prompt，然後讓它走開一陣子，回來時有東西可看，而不是畫面停在一個傻問題上。他喜歡多工。看電影或給家人做晚餐時，Claude 可以在跑。他有個設定，等他輸入時會出聲說 Claude is waiting for input。喇叭開著或戴著耳機就聽得到。若一小時前它問了問題他沒注意到，那段時間就浪費了。出聲用的是他自己的聲音。他在 Linux 上用過 Piper。許多年前他把聲音捐給一個開源專案。因為名字是 Alan，聲音模型在 Hugging Face 上排得很前面，別人下載來用，他自己也用。電腦用他的聲音說 Claude 在等 prompt，他自己覺得很可笑。Simon 說家人若在看電影會受不了，開放式辦公室更糟。Alan 說他會讓它發生。

[27:13](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1633s) Claude 是他現在第一個會跳進去的。Token 用完、不想再對一個專案砸錢、預算要緊時，他轉去 Gemini，因為他有 Gemini 帳號。很像，但 Gemini 對你能怎麼 prompt 似乎限制多一點。他覺得沒那麼自由，儘管 context window 大得多。它有時會說不，我不做。在 TypingMind 裡也看得到：同一份 prompt 給 Claude 會動，給 Gemini 不會。另一個他最近用的命令列工具是 AMP。模式有趣，有一個免費、廣告支持的層級。這週他試了，叫它做一個網頁版 RSS reader，它做了，他很意外有多好。沒給任何工具，沒接 MCP，純粹用 AMP。很像 Claude，但 UI 不同。Simon 先說 AMP 是 Sourcegraph 的 coding agent，又改口說這是很大的假設，之後再查。字幕把後面的公司聽成 SourceCraft，把 Cody 聽成 Kodi。兩人都沒有在這集裡確定。

## 大家在複製同一批 MCP，放著不管會過期

[29:02](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1742s) MCP server 的 registry 一個接一個，Simon 覺得甚至有 registry 的 registry。他們做过一集 MCP.Run，一個能代管 MCP server 的 SaaS。中場有一段 AI Native DevCon 的宣傳：兩天實作、深談、以及什麼叫建造 AI native 軟體的老實對話，11 月 18 和 19 日在紐約，也可以遠端。票和細節在他念出來的 a native.io/devcon。

[30:05](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1805s) Alan 有自己愛用的，但別人有偏好。他沒有在社群上做民調。他請 Claude 幫忙寫一支 script，去刮 GitHub 上人們列出 MCP 的設定檔。常見的是 mcp.json，結構化地列出 MCP。字幕有時聽成 mcb.json。報告是刮 GitHub 來的。不是每個人都會把 mcp.json 放進專案，有人的專案是私人的，有人用 GitLab 或其他託管，有人完全在內部。所以這不是每個人在用的完整清單。他意外的是，同一小撮工具常常排在最上面。他覺得這就是前面說的：人們向別人學，複製貼上，幾乎是一種 cargo cult。也有 repository 專門收集別人的設定檔，讓人學習。有點西部荒野，也有重複。看得到他提過的 file system、sequential thinking、memory。還有 Brave search。用某個搜尋引擎搜網是一種選擇，也有別的 MCP，用字幕聽成 KI 的那個、或 Brave，他猜也許還有 Bing，他沒查。這些出現在設定檔裡，所以顯然有人在用。他想再挖哪些是真的在用，哪些在看不到的 repo 裡。把人們在用的 MCP 露出來，是個機會。對新人來說，該挑哪個仍然未知、也嚇人。

[33:16](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=1996s) Simon 說不只想看設定檔裡有哪些，還想看 session 裡哪些真的被用。他不知道 MCP.Run 會不會分享用量。這打動他的是，人們大概太孤立地在為自己學最佳實踐，缺少容易被發現的分享方式。他猜很多人，尤其在組織裡，在自己做。組織外要加上「這是好的 Cursor rules」或某種 agent 設定，難得多。Alan 說還得小心，有人把 secret 放進 MCP 設定。他們不是不想讓人知道用哪些工具，而是不想意外分享 GitHub personal access token 或其他更重要的 API token。於是有一種不該分享的感覺。他覺得仍該有一個 MCP 資料庫，依熱門程度評，也依品質、有沒有軟體更新、是否還在維護來評。有時你在 agent 裡設定了一個 MCP，然後它消失了，因為 repository 搬走、被別人買下，或他們放棄了。MCP.json 裡掛著一個你以為還有價值的工具，可能已經是負債，不再對專案有益。這些工具需要稽核。已經有一些組織在做，免得人們用不再維護、不安全的工具，把自己弄進麻煩。

## 逐字稿和漏洞掃描，都該在流程裡面，不是事後

[35:38](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2138s) Demo 用 Claude。開起來就看得到 mcp.json 裡設定的 server。他說做 /mcp 可以看到它們都連上了。這次用不到全部。旁邊有一支 YouTube 影片，他要描述、一些社群貼文，和一篇深入的部落格。叫它抓附上的影片逐字稿，再做出這三樣。Claude 愛先做計畫，一組 to-do，然後逐項做。它立刻說要用一個工具，判斷要用 YTT，他同意。AMP 做很類似的事，但 UI 不同，他很喜歡。右邊有一個盒子，to-do 一直留在畫面上。Claude 常常捲走，他不確定它這時在做什麼，雖然可以捲回去。Simon 說輸出直接進 terminal，除非你明確叫它存檔，或它知道要改程式檔，否則不一定寫到磁碟。Alan 說這是他喜歡 TypingMind 的一個原因。網頁 session 裡它做出的東西，旁邊就有複製鈕，跟 ChatGPT 和其他網頁版一樣。還能帶格式複製，貼進 Google Doc 時格式是好的。

[38:39](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2319s) 他被自己打斷，說這不稀奇。影片描述裡有人的名字，他問 Simon 是否對得上那次對話。社群貼文比較麻煩，這些 AI 工具寫出來的社群貼文常常一股 AI 味，真的需要人再修。它給你一些想法，適合發想和摘要。部落格很完整，至少字很多。Simon 說就算只有這樣，也是好的起點，避開 writer's block，先有一批可以想的區塊。Alan 承認自己是 yolo，只說寫部落格。他該做的是先要一些題目，再一起迭代。作為快 demo，它說明他不必手動去拿那支影片的逐字稿。例子很簡單，但這類東西很多。全部接起來、由 agent 編排，會大幅加速，因為你不必沿路手動做。那就是把他整個加速起來的東西。

[40:07](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2407s) 他自己寫過一個 MCP，在清單最底下，叫 Grype。他在 Anchore 工作時，Grype 是漏洞掃描工具。他想要一個 MCP server，掃他正坐在裡面的 repository，確認沒有漏洞。他最近沒測，不確定能不能動。Demo 是先做一小段軟體，再掃。新資料夾，Claude 又問要不要那些 MCP。他想觸發它：做一個會用到過時軟體的東西，強迫用舊版，也許能找到漏洞，假設他的 MCP 有用。他叫它用 Django 4.0.0 做一個 hello world Django app，相依用 uv。他覺得 4.0 聽起來很舊。它會建一點 code，用 uv 建虛擬環境，裝把專案拉起來需要的 Python 套件。Simon 問 uv 是什麼。很多人用 Python virtual environment，每個專案一個隔離目錄。多數時候用 Python 的那套，還有別的做法。uv 比較新，用 Rust 寫，比用 Python 快很多。所以不是 python pip install，而是 uv pip install。MCP server 常用 uvx 交付，相當於 Node 套件用 npx。Grype 的 MCP 就是這樣交付的，用 Python 寫。mcp.json 裡放 uvx gripe mcp，字幕仍把 Grype 聽成 gripe，它就會去找。這是把 Python 專案的相依收在一個目錄裡的好方式。

[43:17](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2597s) 專案小結構出來後，他叫 Grype 的 MCP 掃漏洞。有趣的是他覺得自己可能沒裝 Grype。這個 MCP 會去找 binary。路徑上找得到就用，找不到就去拿。過時了會試著更新。找到而且跑得起來之後，還得下載漏洞資料庫。每次第一次跑，會拉下一份，他說大約 100 MB 之類。他猜當下就在做這件事。下載完才掃目錄。他說 yes，掃這個目錄。它應該有機會在這個 Python 專案加上的相依裡找到一些漏洞。他設想的用法不是手動做，而是寫進 AGENTS.md 或 CLAUDE.md：commit 之前掃，或上傳到 GitHub 之前掃。他不想先發布再掃，或先測它能動再掃。他要漏洞偵測就是流程的一部分。有一個漏洞掃描器，Grype 或其他的，做成 MCP server，它就在開發流程裡，不是事後才想到的。還可以放政策，不只放流程。畫面上回來了兩則他稱為 high 的漏洞。他們不要任何 high 或 critical。Medium 和 low 也許對某個特定政策可以。幾乎可以叫它不要 check in 任何有高嚴重性漏洞的東西，除非使用者明確說可以。它沒有給他非常詳細的問題說明，他當然可以自己搜。若他要更多細節，它現在有漏洞的名字，可以描述、給細節、說該改什麼。那可以餵回 Claude 或他在用的 agent，agent 再去修。它說建議做這件事，他說好，去做。於是漏洞找到了，也可能讓 Claude 修好。他自己犯了個蠢錯：他說用 Django 4.0，其實想說的是 Django 4.2。字幕沒有把掃描畫面上的每一條漏洞念完。

## 可重用的 spec，讓它不要每次都走歪

[46:25](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2785s) 很多人已經在用 MCP，下一件該想的大事是什麼。他說答案可預期，是 spec driven，也就是做新軟體的過程。像他這種人，能用英文說出要什麼，但不一定知道每一個相依怎麼建、怎麼扣在一起、該用哪些 API。若他自己試著向 agent 把這些講清楚，是在浪費時間。一定有別人做過。一定有人建過這個 library、用過這個 API。所以該有可重用的小塊，就像他在 GitHub 上到處刮到的設定和 mcp.json。他覺得有真正的機會，把那些小段指示、那些 spec，散在專案裡，去做他平常得親自描述、或讓它自己搜、自己摸、還可能摸錯的工作。他要一個 repository。Tessl 的 MCP 和 spec registry 基本上就是那個。把他拉向 Tessl 的，是這座知識庫，agent 可以叫它來，用安全、有效率、可靠、可重現的方式做軟體。

[48:12](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2892s) Simon 說 registry 裡的分享很重要，因為它開始提供一種協作的開發規格。Agent 只會做得跟規格和指引一樣好。要把指引、政策、風格做對很難。有時絕對是個人的，你可以覆蓋某些設定。但一到團隊，你不希望每個人用不同方式開發。你要同意一種做法、一套 stack、一份大家都遵守的政策。有一個平台、一個空間，人們可以貢獻、可以拉下來，agent 自然被這些政策和工作流引導，他認為這是協作開發的核心。

[49:21](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=2961s) Alan 說這也省下大量重複。他若在趕一堆小專案，不想每次都告訴它：Python 永遠用 uv，或永遠做這件事。他寧願有可重用的小塊，拉下來，說這是我的 stack，它就去拿那些 spec。函式庫或框架更新了，spec 也該更新，而且可以再拉下來。缺了一份，他很主張分享，應該能用很直接的方式貢獻回去。他是開源那一代的支持者。這些小段 markdown，是在回饋那些已經在做這些小段的人。他覺得大家都可以做一點點，堆出一座引導 agent 的最佳實踐語料。不要每個人都 yolo 過去，不斷把 agent 趕回來、不斷修正。你想說的是：我要這個，我要用這些框架、這些工具，去做。而不是一直說我先前問過、你沒做，我已經告訴你了、你還是沒做。Spec 可以讓它留在軌道上，讓這次開發跟上一次一致，而不是全部走樣、全部出錯。他偏好這種一致，勝過跟 agent 吵架。跟 agent 吵架感覺是很糟的一天用法。

[51:07](https://www.youtube.com/watch?v=0xUZjRGSUA4&t=3067s) Simon 請想看 spec registry 的人去看。時間到了。他謝謝這些 demo，覺得對剛開始碰 MCP 和 agent 的人有用：看有什麼、別人在用什麼、開始用 MCP 其實多容易，以及它怎麼真的擴充 agent 的能力。Alan 期待更多 MCP 出現，也期待人們分享自己在做什麼。Simon 希望最大的收穫不是每個人都該有那段語音，宣布 Claude 在等人類。開放式辦公室裡那會多令人挫折。Alan 說他會讓它發生。Simon 也想聽大家在用哪些 MCP server。
