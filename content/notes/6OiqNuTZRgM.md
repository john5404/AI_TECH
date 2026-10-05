# Guy Podjarny - Spec Driven Dev From Single Player to Multiplayer to Ecosystem | DevCon Fall 2025

DevCon Fall 2025 的第一場 keynote，紐約，他說外面在下雨。片長約 32 分鐘，英文自動字幕。講者 Guy Podjarny，Tessl 的 founder 兼 CEO（字幕把 Tessl 聽成 Tessle、Tesla、TESL，把姓聽成 Pjani、Gapari）。主持人說公司約 18 個月，他之前創過後來被收購的 Blaze，也創過 Snyk（字幕聽成 Sneak）。這是第一場實體的 AI Native DevCon。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=6OiqNuTZRgM)

## 一句話

Agent 很強，也非常不可靠。Guy 把 spec 和 context 當成同一件事：把腦子裡的知識交出去，讓任務在不再多給資訊的情況下，有機會被解掉。單人時的問題是講太多，每一句得到的注意力就變少，所以 rules 要短，知識要能被 agentic search 按連結找到。多人時，repo 裡的檔案、臨時去查、以及策展過的 context，三種分享方式各有該放的東西。長遠看，開源的 context 是 agent experience，該由維護者自己負責。

## 能力很大，幾次銀彈都沒把可靠度補上

[1:43](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=103s) 他先對齊：AI 在改變軟體開發，不是小顛簸。他看到兩波 AI augmented 工具。Copilot 和 Cursor 先把自動完成做更好，Cursor 再把 chat 做進來，讓你跟 code 說話。最近六個月、也許十二個月，比較真的 AI native 工具起來了，核心是委派：叫 agent 做一件事，再跟它互動。這些工具各自有價值，但都在往 agentic behavior 收斂。他認為那就是未來，所以這場只談怎麼讓 agentic development 運作。

[2:47](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=167s) 現況是 agents 超強，也非常不可靠。有時 spooky，有時 kooky。會做出讓你吃驚的事，也會犯很蠢的錯。它們不值得信任：沒做完會說做完了；你叫它做一個功能，它會把房子燒掉來交差。於是有一道 capability reliability gap。他舉 METR 的研究（字幕聽成 meter）：開發者覺得 AI 工具會讓自己更快、更早做完，實際觀察下來更慢。研究有很多但書，這塊本來就複雜，但大家都有同感：力量不容易變成真的生產力。把頭埋起來、不用 agents，很誘人，也短視。技術太強，不會消退。問題是怎麼幫 agents 成功，把那道縫補上。

[4:36](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=276s) 產業找過幾次銀彈。Fine-tuning：給幾十、幾百、也許幾千個「我喜歡怎麼寫 code」的例子，指望權重自己適應。教一個它原本不會的新技能時很有用。它已經會寫 code、已經有意見時，很難扳過來，像沒辦法教老狗新把戲。RAG：把 prompt 送進 embedding 和向量資料庫，拉出剛好需要的 context。自己的關鍵字和術語很有用，但搜集 context 比這細。常常該知道的東西不在最初那條路徑上。大 context：一百萬、兩百萬 token，全部告訴它，讓它自己想。他用自己的職業經驗說，十件聰明的事全講，每一件得到的注意力少於只講三件。LLM 一樣，context 裡資訊愈多，每一小段愈不被聚焦。

[6:53](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=413s) 現在多了兩樣。Agentic search 把找 context 這件事委派給 agent，給它工具，像人自己去 Google、翻檔案。範圍被約束時有用。叫人去找「任何資訊」，會花時間、找錯、沒有上界，還會掉進 rabbit hole。上面還要 context engineering：放棄魔法，問 agent 需要知道什麼才做得成。他引用幾個月前上過 podcast 的 Shopify 創辦人兼 CEO Toby。Toby 喜歡 context engineering 這個詞，因為用好 AI 的基本功是：把問題陳述到，不再多給任何資訊，這項任務仍然說得通可以解。靠它的 intelligence，但不要假設它會讀心。

[8:31](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=511s) 在他看來，這就是 specs。叫 spec 還是 context 不重要。把知識從腦子裡取出來，交給 agent。這場他兩個詞交替用。還有一句老話：不能衡量就不能優化。這話多半出現在 ops，因為伺服器有時好好的、有時當掉。現在開發裡也有這種統計行為。兩件事跟著來。一，放棄「agent 絕對做得到或絕對做不到」，改用成功率這種統計數字。二，要去評、要去衡量。後面他會拿資料撐一些說法。

## 單人：專案是底，講多了每一句都變淡

[9:50](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=590s) 單人的示範是一個他說自己很認真做的、侏羅紀主題的 to-do。他叫 agent 給每個待辦加一個 edit button。agent 自己去讀專案裡的檔，不是全讀，已經在做 agentic search。他不必解釋 to-do item 是什麼、按鈕放哪。code 裡的資訊夠。這是 base context。但它做出一顆藍色按鈕，跟主題不合。code 裡沒有「請守住主題色」。

他加了明確的 context，例如一份 AGENTS.md（字幕說 agent MD）：永遠用主題色，拼字用英式。同一句「加一個 edit button」，按鈕就變成他要的顏色。專案的 code 就是 agent 的 context。文件好不好、有沒有指向舊資料結構、檔名合不合理，都會影響它載對檔案。code 裡沒有的，放進 AGENTS.md、CLAUDE.md、cursor rules 這類明確 context。主題色這種短指令沒問題。通常你想講的遠多於此：環境怎麼工作、你的風格。講十件，每一件得到的注意力就少於講三件。

[12:34](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=754s) 他們拿一個 vibe coding 出來的小遊戲，閃避方塊，叫 agent 加上登入，做成 session-backed authentication，遊戲要登入才進得去。這次用的是 Claude Code，其實試了三個 agents。另外用 agents 做了一張評價安全做得好不好的 scorecard，當成 rubric。三種跑法。沒有任何 context。把 OWASP，他說的 Open Web Application Security Project（字幕聽成 OASP），關於 authentication 的指引放進 AGENTS.md 或同等檔案，大約 3 KB。第三種是更長的 20 KB 完整安全指引，裡面包含那 3 KB，短的那份每個字都在長的裡面。沒有指引時字幕先冒出 65，句子和後面黏在一起；精準指引是 85%；把更多東西一起塞進去，降到 81%。方向和他預期的一樣，也因此更有把握。

[14:04](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=844s) 三個 agent 是 Claude、Codex、Cursor。沒有指引時都差不多，普普通通。加登入頁從安全角度看坑很多。對較深的 context，差很大。Claude 在精準指令時最亮，指令變長就掉一截。Codex 總分沒那麼好，但比較扛得住長 context。同樣的文字，背後有時還是同一個 model，agent 仍會自己做很多決定。每一欄背後 10 次，maybe 還不夠統計顯著，但結果差很多。不只要想你問什麼，還要想你問的是誰。

想講很多、又不能講很多，一個常見分法是 rules 和 knowledge。[15:19](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=919s) Rules 是少量、每次都塞進 agent、必須短。裡面放連結，引導 agentic search 去拿更多。那更多的就是 knowledge。Tessl 的 spec registry 是一套知識的依賴系統。你把 context 以他們叫的 tiles 發布出去，消費端的 agent 會拿到適配過的版本。Registry 裡他們先放了超過 10,000 份 specs，是分析、迭代、評估過的開源函式庫用法。

結構是：`tessl.json` 定義你要哪份知識，例如一批函式庫要怎麼用。每一份再拆成多個檔，agent 不必一次吸光，有些函式庫要講的太多，不能霸佔 context window。AGENTS.md 裡只放一點點 rules，連到知識，並稍微說明知識的結構，這一段永遠載入、但很小。點進 `knowledge.md`，agent 看得到有哪些函式庫、一點簡介、以及更深的連結。以 Next.js 為例，index 裡再連到更多。像人在網站上點連結、展開一個段落。靠它的 agentic search，但不要叫它自己上網亂找。

## 有 eval 才知道 context 真的有用

他用 Jerry Maguire 的「show me the money」帶出資料，還道歉說這梗可能暴露年紀。[18:25](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1105s) 第一個例子是 Vercel 團隊做的 Next.js（字幕把 Vercel 聽成 Versell、Verscell，把 Next.js 聽成 Nex.js、SJS）。大約 50 個測試，看 agents 會不會用 Next.js。有趣的是，Next.js 這麼紅、文件又清楚，幾乎是訓練資料裡的寵兒，做得最好的 agents 在這個 benchmark 仍只有 42%。他們問：自己做的 tiles 能不能把它拉高。他們的測試環境裡，成功率大約 40%，給了那份做得很徹底的知識之後跳到 92%。另一個較小的、中途的 prompt，只引導 agent 去看 lint 和 build errors，也明顯拉高。有時是知識，有時是叫它注意什麼。

[20:24](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1224s) 不是每個東西都做得起這麼深的 benchmark。沒有那種带宽時，可以用 LLM 產生評價資料。他們抽 270 個隨機函式庫，讓 LLM 出練習題和 scorecard，再讓 agents 跑，最後用 LLM 依 rubric 打分。畫面上是 Claude Code，Cursor 類似。平均成功率從大約 60% 到大約 81%，時間還短一點。

同一套測試對上函式庫的年紀。左舊右新，用 release date 當簡單尺度。Claude Code 對 5 到 10 年的函式庫最好，其他 agents 也看過，差距不小。很老的，網路上的資訊可能互相打架，或根本沒有多少網頁。很新的，網路上還沒累積夠，有些資料還在訓練截止之後。他們的理論是 tiles 會把這條線抹平，因為資訊已經給了。結果是整體被抬高。這也符合他們的經驗：對的 context 有時只是有幫助，有時是從做不到變成做得到。

[22:45](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1365s) context engineering 比他畫的多。一個值得一提的是 Claude 裡的 sub-agent，現在還有另外幾個 agents 也有：給它自己的 context，把焦點收窄。這塊值得投資。

## 多人怎麼分享，以及不該鎖在一個 agent 裡

[23:07](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1387s) 多人的問題是：團隊、組織裡，什麼 context、什麼時候給。三種。

第一種最直接，放進 repo。專案本身就是 agent 的 base context。AGENTS.md check in 之後，用這個 repository 的人都會載到。repo 專屬的知識，例如這套應用怎麼運作，完美。跨 repository 就彆扭：最佳實務、共用函式庫，要 check 進每一個 repo 嗎。第二個彆扭他拿 backlog.md 開了點玩笑。框架很好，前一天的工作坊也很好。真正採用 agents 的 repo 裡，重複檔案很多：GEMINI.md、CLAUDE.md、AGENTS.md、cursor rules，還有 skills、GitHub 那堆。問題不是檔案多，是內容重複。

[24:43](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1483s) 第二種是給 agents 工具去搜集。最常見是上網，也有比較聚焦的，例如用 MCP 去 GitHub repository 把 code 拉下來。探索時很好：還不知道要用哪個函式庫，當然沒有那份 context。動態資料也很好，例如系統實際怎麼跑的 production data。容易拿錯答案時就不好。版本是強例子：你用的不是最新版，agent 卻去了最新的 GitHub，就會拿錯資訊來操作。有細節的複雜題目也一樣，例如 authentication。而且反覆需要的資訊很沒效率。找對 repo、找對 commit、讀完 code，若一天要七次、一週五天，為什麼不搜集一次、存起來、評估、再優化。

[26:13](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1573s) 第三種他覺得是現在的前沿：策展過的 context。過去一兩個月，大的 agents 都在做可重用的 context 框架。Claude skills、Cursor 的 team rules、GitHub Copilot spaces。這些公司承認：不想讓 agent 每次重造，想讓你分享做法。他強烈建議去學自己環境裡的那一套。適合跨 repo。也適合跨用途：安全 code review 的 bot 在 review 環境跑，同一份 context 你在本地開發時想要，用另一個 agent 看 incident 時也想要。因為是原生的，跟 Claude 的 skills、Cursor 的 rules 接得很順。拿來放單一 repo 的資訊有點過重，也許還好。最大的問題是它們是單一 agent 的。

於是要問：長期來看，知識和 context 該按 agent 分開管嗎？你預期組織一直只用一個 agent 嗎？他認為不會。技術會各有所長，會移動。公司很大，人有偏好。知識應該是你的核心能力、你的資產，再按 agent 去適配，而不是鎖在某一家裡。Tessl 的做法是 `tessl.json`。裝上之後，它會改成 cursor rules、AGENTS.md，或那個 agent 要的形式。下載下來就是檔案，你可以用任何方式消費。他們有工具讓這件事更順，但你不鎖死非用那些工具不可。

[28:44](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1724s) 他順勢廣告：registry 要擴成完整的 Tessl agent enablement platform。幫你搜集這種知識、為它們建立並跑 evaluations、發到每個 repository、再隨著時間優化。這是商業產品。有興趣可以當面找他們；線上的信箱字幕聽成 contact.io，沒有聽清，不在這裡補。

## 開源的 context 該由做出來的人負責

[29:19](https://www.youtube.com/watch?v=6OiqNuTZRgM&t=1759s) 生態系的 context 今天有用，他剛也在稱讚 registry。長遠要問：這種開源 context 該誰寫。他們現在會跑去別人的函式庫，寫 agent docs、再跟著追。今天這樣做是因為有幫助。長期他認為不對。

開源 context 是 agent experience 的一面，是創作者的責任。你是開源維護者或廠商，做出好的 developer experience 是你的事，做出好的 agent experience 也是。投資在你手上。Context 既是文件，也是 UX：你說什麼、怎麼交到使用者手上、要單一 agent 還是多個。evals 是你的測試，是你定義什麼叫對、什麼叫不對的時刻。要定義它們，也要問使用者什麼時候有效、什麼時候無效。你不是一個人。可以用他們的平台，也可以找 AI Native Dev 這個社群。他希望一起做出能用的方法，以及真正的 context，讓大家把軟體消費得更好。做到了，東西就放在對的 context 裡。
