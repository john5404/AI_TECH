# What Holds Devs Back From Multi-Agent Thinking | Guy Podjarny

Guy Podjarny 是 Tessl 的創辦人與 CEO。這是第一場實體的 AI Native DevCon，紐約，外面在下雨。片長約 33 分鐘，英文自動字幕。開頭有一段 podcast 預告。字幕把 Tessl 聽成 Tessel、tessle、Tesla、Tesl，把 Snyk 聽成 Sneak，把 Guy 聽成 Gipo、Gourney、Gaparani，把 AGENTS.md 聽成 agents MD，把 OWASP 聽成 OASP，把 METR 聽成 meter。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=EmgLPwmhBD8)

## 一句話

Agent 很強，也非常不可靠。把十件聰明的事全說完，每一件得到的注意力會少於只說三件。Context engineering 在他看來就是 spec：把任務講到不靠讀心也有機會解出來。規則要短，知識用連結讓 agent 自己去取。測過之後，精準的指引比把整本安全文件塞進去更好，而這套知識不該鎖在單一 agent 裡。

## 兩波工具之後，問題變成可靠度

[1:08](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=68s) Podcast 預告說這是給把 AI 放在核心的開發者。點名的來賓包括 Datadog CEO Olivier Pomel、ElevenLabs 的共同創辦人（字幕聽成 Matty Stanisowski、11 Labs）、Synthesia 的 CEO 與共同創辦人（字幕聽成 Victor Ripelli），以及 Tessl 的 Patrick，字幕聽成 Dwis。90% 的聽眾還沒訂閱。

[2:05](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=125s) 介紹說 Tessl 當時是 18 個月的公司。Guy 創過 Blaze，後來被收購，也創了 Snyk。主持人認為，當年把人的心態推向 developer security，和今天推向 AI native development 很像。這場要談 AI 怎麼協作著做。

[3:00](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=180s) 他謝謝大家冒雨來紐約。題目是 spec-driven development 怎麼從單人，長到團隊，再長到生態系。AI 改變軟體開發不是小打嗝。他看到兩波 AI augmented development。第一波是 Copilot 和 Cursor 帶頭的自動完成，以及 Cursor 帶頭的、可以跟 code 聊天、搞懂事情。最近六個月、也許十二個月，出現更接近 AI native 的工具：重點是委派，叫 agent 做事再跟它互動。這些工具各有價值，但都在往 agent 的行為收斂。他認為那就是未來。

[4:44](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=284s) 今天的現實是 agent 超強，也極度不可靠。有時嚇人、有時古怪。會做出讓你吃驚的事，也會犯很蠢的錯。不可信：沒做完會說做完了。你叫它做一個功能，它會把房子燒掉來完成。於是出現 capability reliability gap。他舉 METR 的研究：開發者以為 AI 會讓自己更快，量出來反而更慢。研究有很多但書，這塊本來就複雜。但他覺得大家都有同感：這股力量不容易變成真正的生產力。不能把頭埋進沙子。不用 agent 很誘人，這個房間裡大概沒有人這麼說，但那是短視。技術太強，不會fade。問題是怎麼幫 agent 成功，把這個差距補上。

## 銀彈都沒打中，剩下你要決定告訴它什麼

[6:33](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=393s) 他用一條鬆的時間軸講產業找過的銀彈。先是 fine-tuning：給幾十、幾百、也許幾千個「我喜歡怎麼寫 code」的例子，指望權重自己適應。這對全新的技能很有用，對模型本來就會的寫 code 很難掰過去。像人，老狗學不會新把戲。有用，不是銀彈。

[7:28](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=448s) 下一波是 RAG。Prompt 丟進 embedding 和向量資料庫，希望撈出剛好需要的 context。自己的關鍵字和術語上很強。但蒐集 context 比這細，很多東西不在最初那段 prompt 裡。仍然有用，不是銀彈。

[8:04](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=484s) 再來是超大 context。一百萬、兩百萬 token，全部告訴它，讓它自己搞懂。他職涯裡常聽到：你有十件聰明的事要說，若十件都說，每一件得到的注意力少於只說三件。他自己也還在學著別把想到的全說出來。LLM 一樣。Context 裡資訊愈多，每一小塊愈不被專注。

[8:48](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=528s) 現在多了兩樣。Agentic search 是把「找出 context」這件事委派給 agent，給它工具，像人去搜尋、看檔案。有約束時有用。若只說去找任何資訊，會慢、會找錯，沒有上限，還會掉進 rabbit hole，把事情變糟。強大，但沒有單獨解決問題。上面還要 context engineering：放棄魔法，去想你要告訴 agent 什麼、它成功需要哪些資訊。

[9:28](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=568s) 他引用 Shopify 創辦人兼 CEO Toby。幾個月前上過 podcast。Toby 喜歡 context engineering 這個詞，因為用好 AI 的基本功是：把問題連同足夠的 context 陳述出來，讓任務在沒有額外資訊時也有合理的機會被解掉。關鍵是靠智力，但不要假設它會讀心。Guy 認為 context engineering 基本上就是 spec。他們剛爭論過該叫 spec 還是 context，對他不重要。都是把腦子裡的知識碎塊交出去。這場他兩個詞互換用。

[10:54](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=654s) 進單人、多人、生態系之前，他提醒不能優化量不到的東西。這句在 ops 最熟：伺服器有時好、有時壞、有時當機，所以要量。開發現在也有同樣的統計行為。兩件事：放棄「agent 絕對做得到或絕對做不到」，改看成功率；以及真的去量、去評估。他說會拿資料撐後面的說法。

## 少放一點規則，讓它沿著連結自己找

[11:46](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=706s) 單人的 context engineering，他用一個侏羅紀主題的 to-do 當樣本，說自己花了很多力氣。請 agent 給每個待辦加 edit 按鈕。Agent 會自己讀專案裡的一些檔，不是全部，已經在做 agentic search。Code 裡有足夠資訊，不必告訴它 to-do 是什麼、按鈕放哪。這是基礎 context。但它做出一顆藍色按鈕，跟主題不合。Code 裡沒有「請守住主題色」這件事。於是加明確 context，例如 AGENTS.md：永遠用主題色，用英式拼法。同一句話再問一次，按鈕就對了。專案的 code 就是 agent 的 context。文件好不好、有沒有指向舊資料結構、檔名合不合理，都影響它載對檔案。Code 裡沒有的，放進 AGENTS.md、CLAUDE.md、Cursor rules 這類明確檔案。難的是你通常想說的遠多於主題色。說十件事，每一件被嘗試的次數少於說三件。

[14:26](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=866s) 他們拿一個 vibe coding 出來的躲方塊小遊戲，請 agent 加 session-backed 的登入，讓遊戲放在登入後面。這次是 Claude Code，其實試了三個 agent。另外用 agent 做了一張安全分數卡，看加上去的東西安全不安全。他說今天已有好 rubric 的標準。三種跑法：沒有任何 context；把大約 3 KB 的 OWASP 驗證指引放進 AGENTS.md 或同等檔案；再放 20 KB 的完整安全指引，裡面包含那 3 KB。沒有指引是 65%。精準指引是 85%。告訴它更多，掉到 81%。三個 agent 是 Claude、Codex、Cursor。沒有指引時都普通，加登入頁從安全角度看坑很多。對較長 context 的反應差很多。Claude 在精準指令時最亮，指令變長就掉一截。Codex 總分沒那麼好，但比較扛得住長 context。有些背後是同一個 model。Agent 仍會做很多決定。每一欄背後是 10 次，也許還不夠統計顯著，但結果差很多。你要問的不只是問題和飽和度，還有你在問誰。

[17:02](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1022s) 想說很多、又不能把表現說壞，一個常見分法是 rules 和 knowledge。Rules 很少，每次都塞進 agent，必須精簡，而且要有連結，引導 agentic search 去拿更多。那多出來的就是 knowledge。Tessl 的例子是 spec registry，一套知識的相依系統。你把 context 以他們叫的 tile 發布，再消費到自己的 agent，它會適應本地的 agent。Registry 裡他們預先放了超過 10,000 份 spec 或 context，幫 agent 把開源函式庫用得更好。那些是分析、迭代、評估之後做出來的。

[18:22](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1102s) 結構先是一份知識庫，例子裡寫在 tessl.json：這些函式庫，我想知道怎麼用。每一份再拆開，agent 不必一次吸光，尤其有些函式庫要說的很多，不能把 context window 佔滿。然後在 AGENTS.md 放很少的規則，給知識的連結，也稍微說明知識的結構。點進那份 markdown，agent 看得到有哪些函式庫、一點簡介、以及去哪裡學更多。再往下有 index，例如 Next.js，檔案裡再連到更多。像人在網站上點連結。靠它的 agentic search，但不要叫它自己上網摸索。

[19:58](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1198s) 他要資料。這是 Jerry Maguire 的「show me the money」，他發現不是每個年齡層都懂。第一個例子謝謝 Vercel 團隊在 Next.js 上的工作。Next.js 很流行、文件清楚，是訓練資料的寵兒。Vercel 發了一個 benchmark，大約 50 個測試，看 agent 能不能用好 Next.js。做得最好的 agent 也只有 42%。他們問自己的 tile 能不能更好。自己的測試環境大約 40%，加上那份做得很徹底的知識，成功率跳到 92%。中間還有一種較小的 prompt，只引導 agent 去看你在乎的 lint 和 build error，也明顯拉高。有時是知識，有時是告訴它該注意什麼。

[22:20](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1340s) Next.js 那套 benchmark 很深，不能每樣都做。沒有頻寬做深 benchmark 時，可以用 LLM 產生評估資料。他們抽 270 個隨機函式庫，請 LLM 出練習題和評分卡，再交給 agent 跑。這裡的資料是 Claude Code，Cursor 類似。最後用 LLM 依 rubric 打分。270 個平均從大約 60% 升到大約 81%，時間還短一點。另外一張圖把同一套測試的成功率對上函式庫年齡，左舊右新，用 release date。5 到 10 年的函式庫，agent 做得最好，其他 agent 也看過，差距不小。很舊的，網路上的資訊可能混亂，或根本沒有多少網頁。很新的，網路上還沒累積夠，有些還在訓練資料之後。他們的理論是 tile 能把這條線抹平。結果是整體拉高。有時只是有幫助，有時是從不能用變成能用。Context engineering 比他投影片上的多。一個值得提的是 Claude 的 sub-agent，現在還有另外幾個 agent 也能把 context 交出去、讓它專注。這塊值得投資。

## 團隊裡的 context 不該每換一個 agent 就重寫

[25:03](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1503s) 多人的問題是：團隊裡、什麼時候、提供什麼 context，怎麼共享。三種。第一種最直接，放進 repo。專案本身就是 agent 的基礎 context。AGENTS.md check in 之後，用這個 repository 的人都會載入。適合這個應用怎麼運作這類 repo 專屬的事。他強烈建議。比較弱的是跨 repository：最佳實踐、共用函式庫，放進一個 repo 很怪，放進每一個更怪。第二個毛病他拿 backlog MD 開刀。那是好框架，前一天有工作坊。擁抱 agent 的 repo 裡會冒出很多重複檔：Gemini 的、CLAUDE.md、AGENTS.md、Cursor rules、skills、GitHub 的東西。問題不是檔案多，是內容重複。

[26:40](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1600s) 第二種是給 agent 蒐集 context 的工具。最常見是上網，也可以更聚焦，例如用 MCP 去 GitHub 拿 code。探索時很好：還不知道要用哪個函式庫，就不會先有那份 context。動態資料也很好，例如系統怎麼跑的 production data。不適合錯答代價高的時候。版本是強例子：你用的不是最新版，agent 卻去拿最新的 GitHub repo，就會拿錯資訊來操作。認證這類細緻、複雜的題目也不適合。而且若一天要七次、一週五天，為什麼不蒐一次、存起來、評估、再優化。

[28:08](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1688s) 第三種他說是今天的前沿：策展過的 context。過去幾個月，大的 agent 都在做可重用的 context 框架。Claude skills、Cursor team rules、GitHub Copilot spaces。這些公司承認不想讓 agent 每次重發明，要讓你分享做法。適合跨 repo，也適合跨用途：安全 code review 的 bot 用的 context，本機開發時想要，另一個 agent 看 incident 時也想要。因為是原生的，互動漂亮，Claude 的 skills、Cursor 的 rules 都是。對單一 repo 有點殺雞用牛刀。最大的問題是它們都是單一 agent。長期來看，知識和 context 該不該按 agent 各管一份。他認為一個組織不會永遠只用一個 agent。技術會各有所長，會移動。公司很大，人有偏好。知識該是你的核心資產，再去適應每個 agent。Tessl 的做法是 tessl.json。裝上之後，它會改寫成 Cursor rules、AGENTS.md，或那個 agent 要的形式。知識以檔案留著，他們有工具讓它更好用，但你不必鎖在那些工具上。

[30:41](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1841s) 他們在加碼，把 registry 擴成完整的 Tessl agent enablement 平台：蒐集你看過的那種知識套件、為它們建立並跑 evaluation、發到每個 repository、再隨時間優化。這是商業產品。有興趣來找他們，或寫信，信箱字幕聽成 contactes.io。

[31:16](https://www.youtube.com/watch?v=EmgLPwmhBD8&t=1876s) 生態系的收尾是：registry 裡這種跨生態的 context 今天有用，但長期誰該做開源的 context。他們現在跑去別人的函式庫、寫 agent 文件、追著更新，是因為今天有幫助。長期他認為不對。開源的 context 是 agent experience 的一部分。維護者、廠商要負責。你要有好的 developer experience，也要有好的 agent experience。Context 既是文件也是 UX。你決定說什麼、怎麼發、要單 agent 還是多 agent。Eval 是你的測試，定義什麼叫對。請使用者告訴你什麼時候有效、什麼時候無效。你不是一個人：可以用他們的平台，也可以用 AI Native Dev 社群。一起做出方法和真正的 context，讓大家把軟體消費得更好。做到了，東西就會放進對的 context。字幕最後把 context 聽成 contest。
