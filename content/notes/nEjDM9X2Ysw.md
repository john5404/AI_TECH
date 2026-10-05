# Richmond Alake - Building Memory Augmented Agents with MemoRizz | DevCon Fall 2025

Richmond Alake，在 Oracle 的資料庫部門。DevCon Fall 2025 的工作坊。他說概念大約三十分鐘，剩下約一個半小時寫程式。片長約 109 分鐘，英文自動字幕。庫的名字他承認是玩笑，字幕多半聽成 memories；下文寫 MemoRizz。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=nEjDM9X2Ysw)

## 一句話

沒有記憶的 agent 像每週換一天就忘記你的房屋仲介。Richmond 把 agent memory 拆成三塊：外部儲存、LLM 的 context window、以及權重裡那份靜態的 parametric memory。Memory engineering 是在這三塊之間搬資料的程式。Prompt 是把字塞滿，context 是只放對的字，memory 是讓那個世界下次還在。現場用 Oracle AI Database 跑他一年前寫的學習用程式庫，README 寫著不要拿去上 production。

## 星期二還要重新自我介紹

[0:09](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=9s) 庫名是他想跟同事證明 agent memory 會往哪走，順便耍帥。大約一年前寫成程式，讓人用 code 看他的判斷。現場問過誰聽過 mem0，兩隻手。LangGraph、LangChain 有人知道。LangMem 是 LangChain 團隊做的記憶層，還在開發。memGPT 的商業名字他說是 Letta。後面還點到 Cognee、Zep、剛募到很多錢的 Super Memory。他在英國知道最好的鬆餅店，也在收集紐約的推薦。Repo 開源，notebook 可以跟著做，做不完可以之後在 LinkedIn 找他。

[4:50](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=290s) 他引用 Andrej Karpathy：這是 AI agent 的十年。他的定義是：能獨立行動的計算體，背後有 LLM 負責他稱為推理的認知，能用工具或 function calling，能感知環境，而且被記憶增強。他有偏見，人在資料庫部門，也待過別的資料庫公司。他的意見是沒有記憶就沒有 agent。買過或租過房的人想像一下：星期一告訴仲介預算、地點、家人、想避開什麼；星期二同一個人不認得你；星期三再講一遍。你不會再用那個仲介。計算上的 agent 最後要代我們行動，所以要可靠、可信、做得到。更好的模型要，接上的記憶也要。有人問它們真的會推理嗎。他說看起來像，是在模仿，本質是 next token prediction。人也說不清自己怎麼推理，神經科學還沒搞懂大腦。模仿是最高級的奉承。他說若他在 OpenAI 也許辯得更好，但他在 Oracle。

[9:26](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=566s) 用途裡，工作流程自動化最常見：人給啟發式或 guardrail，agent 做決定。研究分析是 ChatGPT 和 Gemini 的 deep research，先澄清再上網、最後交報告。還有知識檢索、他愛用的 Cursor 這類寫程式、客服，以及 Notion 裡他其實不太用的那個助理。他看到三種應用模式。Assistant 是來回對話，不必有很穩的知識庫，ChatGPT 的聊天就是。Workflow 像 n8n，也可以用 LangGraph 用程式把步驟接成循序或平行、由 LLM 驅動。Deep research 是第三種。有人問寫程式的 agent 放哪。他今年稍早以為一個 agent 只能是其中一種。一位在紐約的教授到倫敦，他們吃鬆餅時談資料和 agent，對方說不要看得那麼二元，它落在光譜上。他用 Myers-Briggs 作比，自己是 INTJ。寫程式的 agent 會有 assistant 和一些 workflow，不會算 deep research：後者會鑽進來源裡的引用、再鑽下一層。若全場都同意他，他覺得自己講砸了。

## 飛機最後沒有拍翅膀

[15:22](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=922s) 人能留住、重用、召回資訊。大自然當過技術的藍圖。早期飛機模仿鳥和昆蟲拍翅，最後飛起來的那架沒有拍，途中很顛。Agent 的記憶也可以向人腦借，但不必照抄。他舉工作記憶、長期、短期：電話號碼當時講了，兩小時後多半忘，除非寫下來，或對自己重複十到二十次，才進得了較長的記憶。情節記憶像某次生日。語意記憶是關於世界的知識。紅色會讓人想到血或玫瑰，那是聯想。

[18:44](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=1124s) Agent memory 有三個零件。外部儲存，他偏資料庫，也可以是檔案系統，這份可以是動態的。LLM 的 context window 是當下的工作記憶。權重和參數裡的 parametric memory 是靜態的，不會自己改。Memory engineering 就是把資訊在這三塊之間搬動的程式。他用一句話收束：它是 AI agent 的 computational exocortex。目標仍是可靠、可信、能幹。可信對要跟人互動的助理特別重要。他說 ChatGPT 最近的更新在磨這個，可以改人格。他自己還沒試。

[22:01](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=1321s) 三大類是短期、長期，以及多 agent 才特別需要的 coordination。短期裡有工作記憶、semantic cache。程序性記憶是技能和例行程序：該用哪個 MCP、REST API 的 JSON schema、要呼叫的函式，存進資料庫就是。工作流程記憶把某次任務的步驟存下來，成功或失敗都是下一次的經驗，避開失敗的路。短期不是為了很長的任務，過一段時間或沒有活動就清掉。長期要跨過 session、跨過你不用它的那段時間。多個 agent 共用的那塊他叫 blackboard：大家對同一個記憶空間讀寫。也可以不共享全部 context，只由 root agent 把指令交給 subagent，否則很容易掉進 context engineering 要解的問題。

[25:53](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=1553s) 工作記憶像 scratchpad。Context window 就是例子，chain of thought 發生在那裡。他在飛機上讀了 Google 的技術白皮書，覺得很好，也擴了他的想法，但有一處不同意：對方把 session 和 memory 分成兩件。他認為 session 就是一種短期記憶。論文後面也寫，很多人把 session 算進短期。空間還在長。Anthropic、LangChain、Manus、Google，以及他所在的地方，都在交換怎麼讓 agent 更可靠。

[28:08](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=1688s) Semantic cache 用來降營運成本，可以設 time to live，所以仍算短期。一次呼叫會花錢。快取存的是查詢、查詢的 embedding，以及 LLM 的回答。下次「我忘了密碼」和「我想不起密碼」語意相近，用 vector search 算出來，就直接用快取，不必再做一整次推理。程序性記憶他跳過細節。情節記憶是你和 agent 的來回，加上時間戳就能按時間查，或讓一個記憶單元有主題。摘要也是情節記憶，同時是 context engineering：視窗有 token 上限，快滿時把現有內容摘要進一個乾淨的視窗再繼續。Cursor 介面上看得到 context 用了多少百分比。MemoRizz 每次迭代也算。Deep research 時他讓 agent 自己摘要，避免 context bloat。

[32:15](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=1935s) 語意記憶是知識庫、實體、個人。做過 RAG 的人就是在用知識庫，把回答錨在相關資料上。實體記憶：遊戲角色跟環境裡的其他角色互動，把對方的特徵存下來，下次再更新。人也是這樣記別人。投影片動畫順序亂了，他快轉過去。

## 提示詞是塞滿，記憶是讓它留下

[33:50](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=2030s) 他問這算 context engineering，還是該有一門新學科。他跟很多 AI 團隊工作，看到工程師在做 context，但一要降低檢索延遲、讓 agent 即時跑在 production，就會碰到搜尋最佳化、資料庫工程師熟悉的 prefiltering、postfiltering、改查詢、embedding 的 quantization、量化過的索引。一家很大的招募公司有專門的 AI memory 團隊。Cursor 今年有一段時間，只有一個人負責讓它留住、召回、重用資訊，那人在 LinkedIn 上自稱 memory engineer。還早，但工作已經出現。他把 memory engineering 再說一次：在外部儲存、context window、parametric memory 之間搬他稱為 memories 的資料，那些 harness 和鷹架。還沒被解掉，所以誰都能參與。Cursor 一個人，或上百人在做聊天和 Claude 的記憶，都可以。他覺得記憶一解，就會走上他說的通往 AGI 的陡坡。這是他心裡最後一件該做的工作。

[37:32](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=2252s) Prompt engineering 是最大化：few-shot、chain of thought、in-context learning，都是把更多 token 放進視窗，好讓格式對。那是把認知提前裝好。模型變大、參數變多之後，要逼出行為所需的 prompt 變少。可是把 context window 塞滿並沒有帶來那種性能。Needle in a haystack、中間的資訊消失、context rot、bloat、confusion 都在。Context engineering 他覺得 Anthropic 定義得最好：找出該放進視窗的那組 token，不是能放多少放多少，是把錢花在刀口上。所以是最佳化。Memory engineering 因為有三塊要搬，最大化與最佳化都要。從視窗拿出來的東西可以加料，下一輪才有更多 context。摘要可以存進記憶庫，那是最佳化。檢索管線、quantization、過濾、查詢也是。兩者合起來是延續：記憶要持久、要變好，agent 才會隨著時間學習。

[42:27](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=2547s) 有人說投影片字太小。他連上網路，把檔案丟給 Alan，再放進 Discord。概念講了大約四十五分鐘。有人問：若不計成本，這不就是在模型外面訓練模型嗎。他說方向是對的，最後會到 continuous learning。機器學習早就有 feature store、線上學習、對付 model drift。生成模型很大，重訓的延遲和算力都高，但會走到。他現在講的 memory engineering 只做了一半：沒有去改權重裡那份靜態記憶。明年再講，就會談到 fine-tune。Cursor 上週的文章說他們用 agent trace 去 fine-tune embedding model，語意搜尋變好。他們有錢。一般人在 Jupyter notebook 上還做不到。他說自己三十多歲。

[47:46](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=2866s) 他用三行把一篇他正在寫、超過一萬字的文章收掉。Prompt engineering 是關於世界的用字：換幾個字，行為和輸出就變，哪些語言模式有效屬於 LLM evaluation。Context engineering 是在建一個 LLM 懂的世界，而且要建得有效率。Memory engineering 是讓那個世界在每一輪都還在。他再問誰同意 context 和 memory 是兩門事。一開始三隻手。結束前他說大概十五隻。全同意或全不同意，他都算失敗。

## 資料一被換了一種表示，就開始像記憶

[50:12](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=3012s) 「資料什麼時候變成記憶」這句，他在投影片上越搬越前面。生命週期在各種 session、memory、context 的白皮書裡都有。外部來源收集、清洗，做以前資料科學那套。然後做成另一種表示。生成式 AI 最常見的是 embedding：數字抓住語意。可以和原文一起放進 Oracle AI Database，做 vector search，或跟其他搜尋合成的 hybrid search。再來是資訊怎麼組織。他後悔大學沒把 data modeling 聽進去。結構會影響人和 LLM 怎麼懂。Anthropic 那篇 context engineering 有一張他們模型理想的視窗排列。Google 上週那篇也談 session、memory，以及視窗裡項目的順序。

[52:56](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=3176s) 檢索不是只有 vector search。它好用，但不該被當成唯一。向量資料庫熱過一陣，後來才發現要更穩的檢索才減得了幻覺。寫程式的助理用 grep 或 bash 在檔案裡找關鍵字，今年和去年底幾乎被看成可以取代資料庫檢索。上週一家站在最前面的 coding assistant 發文：他們不是只用檔案搜尋，也用資料庫做的語意搜尋，兩者一起更好。然後是他把 context window 裡的東西寫回儲存，迴圈再走一次。再往後，重訓 LLM 或 embedding model 也會進這個週期，投影片他過幾個月會改。記憶就是資料。人們開始把它看成記憶，通常是資訊被轉換、換成另一種表示的時候。建 agent 時，把資訊想成既要被記住、也要被忘掉，會有幫助。

[56:27](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=3387s) 他不要給一個已經解完的方案。他要的是往後六個月到一年，agent engineering 裡最要緊的那塊的思考鷹架。他希望大家把工作做好，因為記憶要快點解，他覺得一年內會有很穩的做法。今年稍早在希臘，他講了 Prometheus：把火給人，因而受罰。他不是說自己是 Prometheus。然後進程式。

## 記憶層是做法，記憶核心是資料庫

[1:00:17](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=3617s) Agent stack 裡，通訊和協議是 MCP、A2A，IBM 那個他不確定是不是叫 ACP。Oracle 在看怎麼讓 agent 跨框架搬家：在某個框架裡建的，搬到 LangGraph。他比成以前用 ONNX 把 PyTorch 的模型拿到 TensorFlow。他兩週前加入 Oracle，就是因為看到這份想把 agent engineering 拉到前面的工程。有一篇 open agent spec 可以看。編排層是 LangGraph 這類，字幕裡還有一個聽成 hstack 的。推理層是模型供應商。記憶層是別人已經抽好的常見手法：mem0、LangMem、Cognee、memGPT、Super Memory、偏知識圖譜的 Zep。Memory core 是真正存資料、提供檢索的資料庫。記憶層幫你做出那些記憶類型、資料模型和取法。MemoRizz 也在做這件事，但是為了證明這個領域要做的工作。README 寫不要上 production。它是學習工具。

[1:08:04](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=4084s) 範例在 GitHub 上搜 memoriz，進 examples 裡的 single agent，再進 local。`pip install` 之後有 CLI。Notebook 會用 Docker 在本機裝 Oracle AI Database。有完整版，也有較輕的映像。現場有人問到硬碟上大約 9 GB。也可以看 Oracle Cloud。裝好後會把需要的表和 vector index 建起來。螢幕太小，他請有興趣的人把椅子搬到前面。

[1:15:01](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=4501s) `MemAgentBuilder` 用一段 instruction 當 system prompt，接上 Oracle 這個 memory provider，以及 OpenAI 或 Hugging Face 的 LLM 和 embedding。一建好就自動掛上工具。Context window 統計讓每個 agent 知道視窗長度，才能自動摘要，不超過門檻。Cursor 和 Codex 的介面上有類似的表。還有摘要登錄，以及查詢、寫入實體，因為 agent 會跟環境裡的其他實體互動，並自動存下來。這個庫很有意見。建出來的 agent 帶著對話記憶、長期記憶和 persona。他再次聲明這是個人專案，不是 Oracle 的官方產品。存檔時，agent 的資訊進資料庫，一組 agent 共用一個 memory ID，好在另一個環境把同一個 agent 載回來。

[1:18:55](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=4735s) 範例輸入是：你好，我叫 Alice，我愛在山裡健行。他的名字不是 Alice。Log 顯示之前的對話記憶是零。Context 用了 513 個 token，他同時提到視窗長度 128，這組數字在字幕裡並在一起，這裡照錄。接著執行工具，把實體 Alice 寫進實體記憶，類型是人，屬性是喜歡山裡健行。再查回來，context 變長。回答是你好 Alice，我記下你愛健行。工具的 JSON schema 也在資料庫裡。他把工具說明做成 embedding，每次查詢用向量相似度只選需要的工具，避免把全部工具塞進 context。有人問為什麼不傳結構化的「name: Alice」。他說那句話只是輸入的 prompt，是例子。

[1:33:47](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=5627s) 每個建出來的 agent 都有 semantic cache，他之前沒講。問法國首都，回答巴黎，他記了一次時間。再問一次，時間更短，因為回的是快取。問「用 small caps 說法國首都」沒有命中，答案仍是巴黎。改成 lowercase 之後命中，因為和 small 語意近，不必再付一次 OpenAI 的推理。Embedding 仍用 OpenAI 產生，所以沒有完全繞開 OpenAI，只是沒有再叫 GPT。他設了一個相似度門檻，字幕說大約 0.8 到 1 就用舊回答。有人問用哪種資料庫。是 Oracle AI Database，他說這示範不是最優。Oracle 另有 True Cache 可以看。多租戶的安全問題，這個庫沒有處理。他再說一次：不要上 production，這是他在學。

[1:39:36](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=5976s) Deep research 用 Tavily 做搜尋和爬頁，LLM 用 OpenAI，也可以換成 Hugging Face，本機就能跑。Deep research 會進一個連結、再進裡面的引用，他有設定搜尋結果的上限。這是多 agent。Root 收查詢，分派、看進度、協調綜合。三個 delegate：財務、市場、風險，各有職責、工具和自己的記憶。綜合 agent 把報告收成給使用者的輸出。查詢是為 Apple 做三年的股票分析，突出財務趨勢、市場動態和主要風險。Log 裡看得到它先看 delegate 各能做什麼，再用 Tavily 搜，把結果放進 context。Delegate 做完交給綜合。他說可以很長，因為要走很多連結。為了時間，他放出已經跑完的報告：一篇短文，按季度給了 Apple 的財務數字，來自網路搜尋。本來還想做 workflow agent，時間不夠。

[1:45:00](https://www.youtube.com/watch?v=nEjDM9X2Ysw&t=6300s) 他最後再問一次。同意 context 和 memory 有清楚區別的，從三隻手變成他估計的十五隻左右。他謝謝大家給了他兩小時。有人問情節記憶的用途：其他記憶已經能綜合資訊，為何還要存整段過程、多佔 token。他說助理這類模式會用到情節記憶，摘要進 context 再存起來就是一種。問題沒在麥克風前講完，他約對方會後再談。主持人先叫成 Richard，再改回 Richmond，請大家在他趕飛機之前去找他。他下午還在。午餐在 52A，午後再開始。
