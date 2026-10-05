# Thomas Krier - From Prompts to AGENTS.md: What Survives Across Thousands of Runs | DevCon Fall 2025

片長約 24 分 27 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Claude 聽成 clo 或 cloud、把 Codex 聽成 codeex、把 CLAUDE.md 聽成 clo MD、把 Karpathy 聽成 Andre Kapati、把 METR 聽成 meter、把 tmux 聽成 T-Mo、把 Amazon 的 Strands 聽成 stren，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=hi8KRB0eI6M)

## 一句話

一次性的 prompt 活不過換模型、也活不過下一次 session。他們把還能留下來的東西寫進分層的 AGENTS.md：規則、skill、以及 agent 自己的 memory。平行跑很多 coding agent 已經做得到，但要讓結果跨幾千次執行還在，得靠人核准過的規則、真實的 test，以及把 trace 交回下一輪。

## 工具在換，任務長度也在拉長

[0:09](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=9s) 他談的是過去三年觀察到的模式。大家都從打 prompt 寫小 script，走到 coding agent。他認為已經在 intelligence explosion 裡，所以不只是自己做 agent，而是做會編排 agent 的 agent，一層層疊下去。個人路徑是 co-pilot、大量用 Cursor，然後 CLI 上的 coding agent。他不想空等一個跑完，就改成平行：別人做別的任務。再往上，就是把更多 agent 組織起來。

[1:53](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=113s) 提案時的版圖已經不一樣。近三個月換了模型：GPT-5、Opus 4.1，而 GPT-5 Codex 他覺得改變了用法。他們原本每天用 Claude Code，換成 Codex 之後，大約三到四週以來 Codex CLI 是主力。背景是資料：data pipeline、crawler、從網路上收資料的 bot。他們 vibe code 了一個 agent proxy，讓 coding agent 走代理，才能看到跟 API 的通訊。很多個 CLI 同時開時，用他們的 agent squad 管理。另外也開始從 GitHub 抽資料。

[3:52](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=232s) 他指著 METR 那張圖：coding task 的長度現在大約每六到七個月加倍。他認為還沒收斂，加速本身還在加速。體感是：有時十分鐘完美做完，有時五分鐘就失敗，有時三十分鐘才做得好。人還在迴圈裡，不只判斷結果、對 spec、做 review 和架構，眼下也還得負責編排。同時他看到，有了 tools、MCP、skills，agent 開始自己選工具、自己跟別的 agent 溝通，平行雇用變得比較站得住。

[5:22](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=322s) 現場他估大約兩三百人，而且這段會上 YouTube。每天用 coding agent 的大約八成到九成。用 Claude 的大約一半。用 Codex 的他看只有大約 5%。用其他 coding agent 的大約一半。用 AGENTS.md 的大約一半。

## AGENTS.md：規則、記憶、以及等你核准的五條建議

[5:59](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=359s) AGENTS.md 不只是專案怎麼起、coding style、標準。它也是 agent 的 memory：做過什麼、不要再做什麼，可以寫回去。它也不只是 repo 根目錄的一個檔。可以放在不同層，用來組織 codebase、component、你在做的 agent、tool 和 knowledge。這跟 skills 很像。他們同時用 Codex 和 Claude，規則要共用：可以在 CLAUDE.md 裡指向 AGENTS.md，或 symlink 到同一份規則檔。標準行為是沿著目錄往父層走，把找到的規則都收進來。

[7:27](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=447s) 影響行為的層次，他排成三個。System prompt 最前面。Andrej Karpathy 把改 system prompt 來改行為叫 system prompt learning，連用哪些 tool、怎麼用都能改。但幾乎每天都有新 release、新 tool，你改過的 system prompt 很快就不能用。Prompt 本身最容易揮發，就算把 prompt 工程練好，也得存成 template 才重用得了。中間那層是規則、skill set 和 memory，AGENTS.md 剛好放這裡。每天維護它，coding agent 才能對專案和情境學習、改行為。他們的做法是階層：每個 component、每個 agent、每支 script 都有自己的 AGENTS.md，讓別的 agent 知道怎麼用。

[9:18](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=558s) 怎麼長出這份檔，靠 meta prompting。遇到問題就叫它不要再犯，並改自己的規則。一個 session 做完、component 有 test、跑得起來，就叫它從 session 抽出 lessons learned，對規則做反思，提五個改進建議，然後停下來等核准。他再挑，例如第一條、第五條、第四條放進去。Agent 就是這樣學會的。

## Trace、禁止假 test，以及 context 滿了以後

[10:26](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=626s) Skills 他說是 Anthropic 的抽象，但他們在這個名字出現之前就在做：叫 coding agent 寫一支 script 或一個 tool。資料背景讓他們要一個會自我觀察的工具。Session 存在 home directory，可以 resume、可以 fork；對話、prompt、tool use 都在那裡。他們叫 Codex 寫 script，收集並分析這些 trace：tool usage、token usage、runtime。不只事後看這次做得好不好，也是為了以後編排更多 agent 時有資料可依。這個 skill 叫 analytical tools。

[11:52](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=712s) 專案會漂，他聽到的第一解法是一直測。Agent 很會發明 test。讓它用 CLI、用互動式 shell，修錯會更好。但模型很想把任務做完，會繞路、會做假 test。所以測試用的 AGENTS.md 第一條是：不要 fake、不要 mock、不要 stub。你是 coding agent，請寫真的 code。

[12:43](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=763s) Context 的順序是 system prompt、規則，然後使用者訊息與回答。Context 塞滿，或走錯路，agent 的智力會掉到他想把它扔出窗外。一個解法是在 shell 裡按兩次 escape，回頭編輯歷史，把整段 context 改掉，這是目前人自己做的 context engineering。另一個是模型的 compact、自動壓縮，但過程不透明，不知道它怎麼摘要。他們改成自己叫它摘要、檢查摘要，再交給下一個 agent，他說這樣相當好用。

## 二十個 agent 做同一個搜尋 agent

[14:26](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=866s) 後半是 multi-agent orchestration，他叫 mixture of coding agents。他們給了一個 skill，用 tmux 管理其他 coding agent：AGENTS.md 交代 Codex 去生出更多 Claude 和 Codex，要多少有多少。實驗是叫它們做 agent。他認為 coding agent 是走向 AGI 的重要積木；另一塊是 search 和 deep research，因為點子都在外面，人蒐不完。

[15:33](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=933s) 第一場是 Codex 對 Claude，安裝完的預設、一個 prompt、one shot：用 Amazon 的 Strands agent framework 做一個 search agent。他們放了大約 20 個 agent，用 metrics 工具收統計。每個都找到解，這是新的：一到三年前做不到。跑大約 20 到 30 分鐘，回來的 agent 可以用 Brave、Google、Tavily 搜網。Codex 略勝，他覺得可能是因為他們現在比較熟 Codex，prompt 也稍微偏那一邊。典型解法是把搜尋拆成任務、計畫、摘要、交答案。Prompt 寫對的話，會給結構化答案，才能拿來評分、比較模型。

[17:08](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=1028s) AGENTS.md 對「叫 agent 做 agent」有幫助。一份簡單規則寫設定檔在哪、key 在哪。他們看過 agent 不知道位置就到處找，token 花在空處。寫下規則，分數上升。意外的是 token 也上升。他原本以為引導會省成本、時間、token 和 tool use，結果變多，因為模型知道 framework 和 tool 能做什麼，於是做出好很多的解。

[18:24](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=1104s) 他們自己用的編排分成 arena 和合作。20 個平行跑本身就是 arena，可以從 20 個裡挑最好的；讓 agent 自己決定也有加分。第二輪把 A 的結果給 B、B 的給 A，叫它們反思：哪裡比自己好、什麼能改進，然後 refine。有用不只是因為多了測試時間。不同模型行為不同，字幕裡另一個模型的名字沒聽清，只確定它和 Codex 想出來的東西不一樣。看過別人的好解，就能納進自己的做法，分數上升。Refinement 的預算比從零建起來低很多，因為只改一些 component，不必重做整個系統。有一次 prompt 先講了 arena 的例子，一個 agent 竟為這個 search agent 自己做出 arena。他覺得這個自我反射的模式最後真的拉高結果。

## 從 GitHub 把別人的規則撿回來

[20:27](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=1227s) 前面是 metrics skill 和編排 skill。下一個問題是好解從哪來。除了上網搜，也可以看 GitHub。他們用爬蟲打 GitHub API，抽出 AGENTS.md、CLAUDE.md、README。趨勢上，Claude 起來的時候有一段，大約四到六週前 AGENTS.md 公開之後又升一截。他說這不太公平：其他 agent 都吃 AGENTS.md，CLAUDE.md 只有 Claude 在用。Skills 正在爆。圖上平均每個專案大約五或六個 skill，他說實際數量比圖上高很多。

[21:54](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=1314s) 他們再用模型把這些檔分類：規則庫、規則類型、專案類型、product life cycle、system life cycle、偏 genAI、agentic 程度。分類之後找重複出現的好解。AGENTS.md 放進 vector database，依問題 retrieve、rerank，並用 metadata 濾近期專案、特定檔、repo 種類。問它「寫一份 AGENTS.md」時，它能對檢索結果再反思，解變好，結果也變好。他的看法是：agent 寫出來的 prompt 已經好過人類寫的；若還能看到別人的好解，品質再上一層。

[23:24](https://www.youtube.com/watch?v=hi8KRB0eI6M&t=1404s) 收尾時他說，跑得最好的那個 agent 把他在網路上的資料都找到了。他說自己網上的東西不多，這題很難，但它還是做到。腳本、這套 agency，以及他們的 Q&A assistant，他說可以私下聯絡。
