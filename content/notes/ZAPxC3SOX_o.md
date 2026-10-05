# DevCon Fall 2025 | Richmond Alake - Memory Engineering: Going Beyond Context Engineering

Richmond Alake 在 DevCon Fall 2025 的演講。主持人說他是 Oracle 的 AI developer experience director，前一天的 workshop 反應很好。片長 26 分 41 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 TLDR 聽成 TDR、把 few-shot 聽成 fot、把 ReAct 聽成 React、把 embedding 聽成 embedded、把 Anthropic 有一處聽成 enthropic。他說自己有投影片，口頭沒念完的格子，下文不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=ZAPxC3SOX_o)

## 一句話

Prompt engineering 是 maximization，context engineering 是 optimization，memory engineering 是 continuation。MIT 那份 GenAI divide 報告裡，95% 的組織沒從 GenAI 拿到價值，5% 拿到了；他說分界是 memory、intelligence、capability，拿到價值的那邊做出了會適應、會學、有 memory 的 agents。Context 仍是 LLM 的短期 working memory。Memory engineering 要做的，是把資料在外部儲存、context window、model 參數這三塊之間搬過去，而且讓那個世界留得下來。

## 95% 和 5% 的那條線

[0:09](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=9s) 他自稱這場是 propaganda。房間裡有兩種人：已經懂的，和還沒懂的。這個分裂也在 GenAI 產業裡。他引 MIT 的 GenAI divide 報告：95% 的組織沒有從 GenAI 計畫裡實現價值，只有 5% 有。分界是 memory、intelligence、capability。有價值的那 5%，應用帶著 adaptability、learning、memory，也就是在做有 memory 的 agents。前一天 workshop 的人他算在懂的那邊。這場的目標是讓大家站到同一層，知道怎麼自己往下探，把人從 95% 挪向 5%。

[3:08](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=188s) 他說自己是 AI 裡的 learner，學了就教。在 O'Reilly 教了好幾年，以前為 Nvidia 寫文章，YouTube 上也有演講，還跟一些人在 DeepLearning.AI、英國 Imperial College Business School 上過課。下一輪他要教的是 agentic system 的 AI memory management。他的個人看法：這是 AI 工程師剩下的最後一件 job to be done。解掉之後，就是 AGI。

## Prompt engineering 是把 context window 塞滿

[4:46](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=286s) 第一個想法：prompt engineering 是 maximization。技巧是盡量把 tokens、把字塞進 context window，讓 LLM 給出對的輸出。例子是一句「夏天幫我推薦好的度假地」。Few-shot 是給它你希望的回應樣子，例子越多，格式越靠近你要的。Chain of thought 是讓 model 一步一步想，仍是在塞 token。ReAct 再往前：有一個 thought，發出 query，採取 action，觀察輸出，再決定下一步。Action 由某種 tool 管，observation 是回頭看 tool 的結果，循環到 LLM 給出最終答案。還是在把 prompt 塞進 context window。

[7:02](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=422s) 他把 prompt engineering 定義成 word smithing：找出能讓 LLM 有用、某種程度上可預測的語言模式。限制是它沒有描述真正的 job。這個詞太寬，被媒體搶去放大。外人以為只是在寫聰明的句子。實際是有系統地想什麼該進 context window，用 RAG 把資訊送進去，還有一整條 retrieval pipeline。Prompt engineering 後面藏著工程。後來就有人說 prompt engineering is dead。技巧也很脆：改一個字，輸出就變，進不了 production。還有 context ceiling，今天的 LLM 都有 context window 長度。帶走的仍是那句：prompt engineering 是 maximization。

## Context engineering 是在優化，但還是短期記憶

[9:05](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=545s) 第二個想法：maximization 沒把工作做完，所以走到 optimization。Context 就是你正在操作的那個情境的資訊。同一句度假推薦，可以加上使用者喜歡什麼、不喜歡什麼、去過哪、跟這個 travel assistant 有過什麼互動。那才是 context。

[10:03](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=603s) Anthropic 談 context engineering 的那篇，他說把這次轉移講清楚了：從找字來描述 prompt，改成找一組對的 context configuration 送進 LLM。這比較有系統、比較 programmatic。他看過 LangChain、Anthropic、OpenAI，以及字幕裡的 manners，那些文章有共同主題，大家在收斂。他說有一個 context engineering flywheel，看到六個主題，口頭展開的是 context window 怎麼用、context 怎麼組織、context 怎麼取回。組織這點對他很直覺：人腦是有組織的，AI 在複製人類智能，送給 LLM 的資訊也該有結構。取回則是從 database、file system 拿，而且何時用哪一種 retrieval 很重要。有的團隊不是六樣都用。他說很快會寫一篇把這些技巧放在一起。Anthropic 那篇的重點是：一套策略，用來配置進 context window 的東西，並找出能得到想要行為的那些 tokens。所以 context engineering 是 optimization。

[12:40](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=760s) 他個人認為這仍沒有抓住 job。他跟工程師談的是怎麼把 agent 和 RAG pipeline 變好：retrieval、用 pre-filtering 或 post-filtering 降 latency、quantization、hybrid retrieval，也就是 vector search 加上 keyword search。那不只是 context engineering。另一個對照：prompt engineering 是把 cognition 預先裝載進去；context engineering 只在 LLM 的短期 working memory 上工作。Memory 要再走遠一點。

## Agent memory 有三塊，工程是在它們之間搭鷹架

[14:02](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=842s) 第三個想法：memory engineering 是 continuation。他用人腦當參照。電話號碼你也許記得前 5 秒，演講結束就忘，那是 short-term。上次生日想得起來，那是 long-term，更具體是 episodic。想到紅色可能想到血或玫瑰，那是 associative。神經科學還沒把記憶講完，但仍可以像別的技術一樣向自然借。飛機今天不拍翅膀；早期飛行器有人在拍。他搭來的那班沒有在拍。

[15:24](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=924s) Memory engineering 是學科。作用的對象是 agent memory：資料和資訊在 agentic system 裡流過的那些元件。三塊。External memory 可以是 database 或 file system。第二塊是 LLM 的 context window。第三塊是 parametric memory，也就是 model weights 和 parameters，靜態的；除非你走 fine-tuning，否則 agent 裡做什麼都不會改它。他稱 agent memory 是 AI agents 的 computational exocortex。中間投影片出了問題，他說不會把每一種都講完，也不會重開 Chrome。

[16:54](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1014s) Short-term 是暫時的，不跨 session，有限，有人叫 scratchpad。Working memory 可以是 context window，或某種 session memory。Semantic cache 也是一種 short-term。他說 LinkedIn 上很快會談 semantic hash，這場沒時間解釋；昨天 workshop 的人懂 semantic cache。Long-term 會留下，跨不同 session，應付比較長的任務。Agents 也需要這個。Coordination 是特別的一種：multi-agent 要有一塊記憶空間，才能彼此行動、彼此溝通。

[18:03](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1083s) 定義：memory engineering 是一套 scaffolding，把資料和資訊在剛才那三塊之間搬動。這就是 job to be done，也是第一線讓 agent 在 production 裡真的能動的人正在做的事。Life cycle 他講成：吃進資料，用 embedding model 轉成 embeddings，和資料一起存進 database；組織資料，data modeling 對要在 production 裡可靠、有能力的 agent 很重要；retrieval 上 vector search 不是全部，還要 hybrid search、quantization，把 pipeline 優化；然後是 LLM 的 processing 和 inference。他特別想讓更多人知道的是：從 LLM 出來的資訊可以送回去，以某種結構存進 database，再被用一次。資訊在系統裡轉一圈。

[19:40](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1180s) Prompt 是關於世界的字。Context engineering 是 world building，用字告訴 LLM 我們在哪個世界。Memory engineering 是 persistence，讓那個被描述的世界繼續、並且發展。他要的個人化是：agent 記得我的偏好、記得互動。Memory 這個詞比較貼那裡。第一線已經在做，只是名字還沒對上。Google 約一週前談 context engineering，他覺得該叫 memory engineering，因為他們講的是 sessions 和 memory，不是他說的那圈 flywheel。Cursor 幾週前講怎麼用 semantic search 改進系統，並且用 agent traces 重新訓練、fine-tune embedding model。Anthropic 也有一篇。重點是第一線知道 job 是什麼，工程師做的事需要被描述出來。

[21:39](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1299s) 他說有 code。到 GitHub 搜 memories，會看到他拿來當 playground 的那個 library，用來把一些抽象做出來給人玩。LinkedIn 上他在做 100 days of agent memory，這天是第 60 天。目標是走到第 100 天。

## 兩種模式，以及 stack 裡該投資的層

[22:47](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1367s) 收尾前的兩件事，他說會很快帶過。Application mode：他看到 agents 落在三種模式，可以是光譜，一個 agent 可以佔一種以上。Assistant、workflow agent，或 deep research agent。投影片上的描述字幕沒念出來。他只補了對 memory 有用的差別：workflow agent 不需要 conversational memory，要的是依序或平行把步驟跑完。Deep research agent 可能需要更多，甚至需要前面講過的全部 memory。

[23:48](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1428s) Agent stack 他幾乎是點過去。口頭留下的是：這是做出可靠、production ready 的 agentic system 的藍圖，重要的是 memory core。AI leader 看上面和下面兩塊。Application 和 interaction 是客戶經驗到的。大型或小型組織的 leader 還得想 infrastructure 和 memory core，那是整個生意的地基。戰略上投資客戶看得到的 application，也投資地基；他要人特別注意 tooling 和 customer experience。其餘可以辯論。投影片上其他層的名字，字幕沒有。

[25:16](https://www.youtube.com/watch?v=ZAPxC3SOX_o&t=1516s) 他進 Oracle 大約兩週半，說在 AI 裡這已經算久。打開那包東西時很興奮，因為玩具對得上 agent stack 的各個面。他做的是 Oracle database，也就是他說的 memory core。Oracle 其他產品給開發者的，是能做出有效率、他口中 security graded、而且安全的 agents：reliable、believable、capable。
