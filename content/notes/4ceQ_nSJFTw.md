# Baruch Sadogursky & Viktor Gamov - RoboCoders  Judgment Day | DevCon Fall 2025

Baruch Sadogursky 和 Viktor Gamov 在 DevCon Fall 2025 講 spec-driven development。Baruch 是 developer relations 負責人，字幕把公司聽成 taxare；網路上他是 jbaruch。Viktor 是 Confluent 的 principal developer advocate，寫過一本 Kafka 的書，這場不談 Kafka。原片約 29 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=4ceQ_nSJFTw)

## 一句話

這場平常要三小時，台上壓到大約 25 分鐘，所以不是把兩個工具的程式寫完再投票。他們比的是 GitHub Spec Kit 和 Amazon Kiro 怎麼走 spec，然後說真正缺的一步：不要讓寫 code 的 AI 再寫測試來證明自己。他們把這條叫 intent integrity chain。Spec 要人讀得懂、機器也解析得了，用 given/when/then 算出測試，測試唯讀，再讓 model 寫到測試通過。現場示範沒有做完。

## 兩個工具，以及 spec 其實是瀑布

[0:09](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=9s) 標題是 RoboCoders judgment day，spec-driven AI coding tools 對打。他們說好消息是沒有對打。完整版大約三小時，網上找得到，台上的 QR code 指到那一版。彩排最短也還有一小時。今天只講兩個工具，因為時間不夠。喜歡的工具如果沒出現，去看長版。

[0:44](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=44s) 一個是 GitHub Spec Kit，出來幾個月，在 spec-driven development 上有進展。另一個是 Amazon Kiro，他們說昨天和今天都在出新聞。Kiro 對 spec 的做法很有意見，要用它的方式就用 Kiro。Spec Kit 也有意見，但幾乎可以放進任何 IDE 或工具。會上當天至少還有三場在講 Kiro，前一天有 workshop。

[1:43](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=103s) Baruch 說他們會對 AI 的現況說難聽話，因為兩人都是 Java 背景。他們把現在的 AI 叫成一堆冒煙的 markdown files。好問題、留言、把 potato 這個字說三次，可以換 T 恤。幾小時後 show.taxer.com 會有這場的頁面、投影片、正在錄的影片和連結，還有抽獎。結尾另一個網址字幕不穩。

[4:18](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=258s) Spec-driven development 有幾步。先定義 requirements，人變得比較像 product manager；requirements 差，後面就差。再定義計畫，包含 design decisions、components 怎麼運作。他們用燉牛肉比喻：其中一步是把馬鈴薯煮熟。第三步把計畫拆成可以實作的 tasks，有點像瀑布。對應馬鈴薯，就是先洗，再放進水裡。然後讓 AI 自己實作那些 tasks。Kiro 和 Spec Kit 做法不完全一樣，但大方向是這個。

## 不要讓猴子審猴子

[5:54](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=354s) 流程走完會得到一段會跑的 code。步驟看起來很好，怎麼知道它做的是你要的？觀眾說：review the code。他們說開發者最討厭讀別人的 code，也包括六個月前的自己。

[7:02](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=422s) Code review 還能運作，多半是職業禮貌。Viktor 開了 pull request，你在別的 context、其實很煩，但明天還要跟他吃午餐，所以你會看。看完常是 looks good to me，然後 ship it。人與人之間的 review 已經這樣。把你尊敬的那個人拿掉，誰還會好好看 AI 寫的 code？機會不大。

[8:03](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=483s) Viktor 提議叫 AI 來驗證。他們把答案引到 tests，然後問誰寫測試。答案還是 AI。於是 AI 替 AI 寫的 code 寫測試。他們說 circular verification 很糟。人會依 specification 寫測試，不會為了遷就 code 裡的 bug 去改測試。AI 會把兩邊一起調到全過，就算結果沒道理、沒做你要的事、也離 spec 很遠。不是因為 AI 邪惡，雖然他們說有研究這麼主張，而是因為 AI 像一群笨猴子。

[9:42](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=582s) 無限猴子、無限打字機、無限時間，最後會打出 Shakespeare。Model 是同一群猴子，打字機換成 GPU，只是比純隨機更偏向「看起來像對的答案」。Stochastic、non-deterministic，每次結果都不一樣：有時是 Shakespeare，有時只是像，有時差很遠。所以不要把跟 production 有關的事交給這些猴子。讓 AI 驗證 AI，是很壞的主意。

## Intent integrity chain

[10:48](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=648s) 他們改叫人在某些地方插手，並把多出來的做法叫 intent integrity chain，疊在 spec-driven development 上面。先把 requirements 寫成正式文字，人眼看過、同意。再讓機器產生 specs，這一步跟今天的 spec-driven 很像。Specs 人讀得懂，所以人也要審。每一步都要有人說這樣可以。

[12:05](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=725s) 他們說 Kiro 那派的 spec 有一種特別的文字：人讀得懂，機器也解析得了。Given/when/then 讓測試可以自動、確定、用演算法從 spec 生出來。中間沒有猴子。不喜歡這些測試就丟掉，它們只是測試。生完之後，測試對得上 spec，spec 對得上 requirements。然後才叫猴子寫 code，寫到測試通過為止。

[13:29](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=809s) 有人問這只包技術 spec，還是也包 functional 和 non-functional。他們說怎麼用同一種 given/when/then 蓋住這些，還是開放問題。大概可以蓋過 90%，連 load、連 security requirements 常常也寫得進去。有些 requirements 寫不進去。更好的 spec 方式也許有，目前就是這個。

[14:12](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=852s) 他們用彩色箭頭再走一次：software definition documents 當 prompt，LLM 產生 specs，大家讀完並同意 specs 代表 requirements，演算法產生測試，猴子實作那些唯讀測試直到通過。問題是現成工具是繞著別的想法設計的，它們不知道這條鏈，中間有落差要補。

## 叫它去讀手冊：Context7 和 Tessl

[15:02](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=902s) 他們用《Back to the Future》的 Mr. Fusion 開玩笑。那台機器把垃圾變成能量。AI 是反過來的 Mr. Fusion：灌進很多能量，出來垃圾。原因之一是知識從哪來。GPT 的 P 是 pre-trained，訓練在你開始用之前就結束了，所以有截止日期。Model 可能不知道 Java 25，如果訓練早於那個版本；新的 Spring Boot、你自己的 framework、閉源、企業 repository 裡的公司 code，也一樣。

[16:38](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=998s) 現在的工具可以上網搜，但網路上垃圾很多，Stack Overflow 和其他來源也不可靠。他們要教 AI 去讀手冊。第一條路是 Context7：把世界上一批文件先索引好，透過 MCP 給 LLM。它能查網路上的 library，簡單、有用。兩個限制：只有公開的知識、公開 API、公開 library，你不會把閉源放上去給整個網際網路；而且只有最新版。卡在舊版、不再支援或 end of life，Context7 裡找不到。

[18:16](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1096s) 第二條是 Tessl。他們謝謝 Tessl 辦這場。把它想成兩件事：給 AI 的外部公開知識，以及快取起來的私人、內部知識。閉源 library 可以放，不一定要最新版。Spring Boot 2、Spring Framework 4、Java 8 的文件都可以放。然後 AI 會知道這些，而且知道得很完整。

## 現場改 Kiro 和 Spec Kit，沒有做完

[18:54](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1134s) 剩下大約六分鐘，他們想「修」spec-driven development。Kiro 的 UI 把正在做的功能包在一起。那個應用要透過 REST 跟一顆燈泡說話，用 webcam 讀到的顏色去點燈。他們叫觀眾先不要想這個例子，長版影片裡比較好玩。燈泡是一種冷門 library，LLM 大概不會用。Kiro 支援 Context7，但要明白告訴它。做法是 steering，也有人叫 guardrails，不同 IDE 名稱不同。那段 steering 用全大寫寫了一條 critical rule：寫任何 code 之前，一定要先問 Context7 的 MCP，查那個 library 的 API、patterns 和 best practices。

[20:19](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1219s) Kiro 已經有 requirements、生出來的 design，還有一些 ASCII art。他們說設計看起來扎實，但其實是破的。Specification 列出要呼叫的 methods，也有 task list。沒有的是生出來的測試。他們用 agent hooks 補。Hook 叫它讀 requirements、讀 design，再依 TDD 產生可執行的測試，蓋住 requirements 裡的 stories，測試框架跟技術棧走。可以指定框架；這次讓它自己選，JUnit 可以。每次更新 task 檔就跑這個 hook。會場 Wi-Fi 在地下室。Hook 是存檔時觸發，不是建檔時。他們跑「set up the project structure」，預期它去生測試。畫面進入 task in progress，去建 Maven dependencies 和 Spring Boot，並把自動生測試排進佇列。字幕沒有說那些測試後來過了沒有，燈泡也沒有被說成已經點亮。

[22:38](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1358s) Spec Kit 這段是 Baruch，用 GitHub Copilot，在 Visual Studio Code。Spec Kit 可以接很多 model 和工具，他點名 Claude Code，editor 則點名 Cursor、Windsurf。畫面上的指令就是 spec 的步驟：constitution，對應 Kiro 的 steering，像黃金規則；specify，描述要做什麼並生出 spec；plan，技術規格，這裡是 Java 25 和 Spring Boot 4；tasks，拆到像「把馬鈴薯洗一洗」那麼小；然後 implement。中間沒有建立測試的步驟。

[24:18](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1458s) 他要加兩個 markdown 檔，整段改變 Spec Kit 的行為。他說這又迷又可怕：整個 AI 產業現在站在一堆 markup 上。一個 agent 叫 Testify，負責造測試。另一個 prompt 檔把這個新步驟加進去。時間到了，他說自己加錯，畫面上沒有出現 testify。如果加對，會多出一個新 prompt，由這個 agent 去生測試，而且可以把他認為測試該長什麼樣的資訊盡量寫進去。他還想在 implementation 一開始跑一段 shell script，把那些測試改成唯讀，不讓 AI 去改測試，讓測試當實作的 source of truth。字幕裡這段沒有真的跑完。

[27:10](https://www.youtube.com/watch?v=4ceQ_nSJFTw&t=1630s) 對 Kiro 也一樣：不同 task 可以換 model。想 spec 時用比較偏 reasoning 的，他口中是 GPT 5.1。跑測試、生實作時改用 coding model，他點名 GPT Codex，另一個名字字幕聽不清。Viktor 在已經超時的情況下替那堆 markdown 辯護：可攜，可以在不同 IDE 之間搬，同一份資料當 source of truth。收尾時他們請觀眾用 intent integrity chain 這個 hashtag。三小時和一小時的版本已經在網上，這次是大約 25 分鐘的版本。
