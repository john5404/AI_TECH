# Use of fine tune in completion and agents with Nick Frolov

會議上的演講，片長 28 分 32 秒，英文自動字幕。講者是 Nick Frolov，主持人 Simon 先介紹他。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Unsloth 聽成 Anslaught、把 text-to-SQL 聽成 text to your scale、把 Aider 聽成 Ader、把 Claude 聽成 Clot。

- 原片：[YouTube](https://www.youtube.com/watch?v=3xKGAHKfroE)

## 一句話

更好的模型和更大的 RAG 不夠時，fine-tune 仍有位置，但只該用在你為它準備的那件事上。Nick 用 Refact 講兩種做法：用自己的 codebase 調一個小而快的 code completion；以及面對數百張表、數 TB 的資料庫時，先讓 agent 看懂 schema，再用真實 production queries 訓練一個小的 text-to-SQL 模型。工具軌跡也可以這樣蒸餾，但開源產品裡還沒有這一步。

## 調的是一小塊權重，不是重訓一顆大模型

[0:12](https://www.youtube.com/watch?v=3xKGAHKfroE&t=12s) Simon 說 Nick 做軟體大約 20 年，在荷蘭的 EPAM，從 software engineer 做到 head of development，帶很大的團隊。他也做開源的 Refact AI，Simon 相信是和一位前 OpenAI 研究員一起做的。Nick 確認：他們在做開源的 agent 和 code assistant，這兩件事正在混在一起。公司由前 OpenAI 研究員創立。他提到被 Gartner Magic Quadrant 報導、和 AWS 合作，也和 DeepSeek、他口中的 Infocrunch 以及其他人一起被提到。他們對最近的 SWE benchmark 結果很得意，已經把 pull requests 送進 SWE-bench，等被收進去，細節在網站上。他們也和一些大型企業合作。

[1:28](https://www.youtube.com/watch?v=3xKGAHKfroE&t=88s) 他謝 Simon 把介紹做完，只補一句：主持人漏了他在 X 上的 tagline，字幕聽成 wipe coder。今天要講 fine-tune、code completion，以及 agent 的一些用例，希望有 Q&A。他說這種場子讓他有上台的焦慮，卻沒有觀眾的反應，請大家在留言裡忍耐，他最後會看。平常他講 agent 和工具怎麼從裡到外運作；這次被要求專門講 fine-tune。

[3:46](https://www.youtube.com/watch?v=3xKGAHKfroE&t=226s) 大模型大是有原因的，訓練資料是海量。他舉 Llama 4，還不是最大的那顆，訓練量相當於在 GPU 上 750 萬小時。多數人做不到。能做的是調整其中一部分、改行為，用現成的 open-weight 預訓練模型，把特定任務的表現拉高，而不必為算力傾家蕩產。他承認投影片是線性代數。那個技巧是用較小的矩陣，存對開放模型權重的調整，再套回去。他說可以 on the fly；另一種套法字幕聽成 freconer，沒有聽清。他不打算逐行講怎麼跑 PyTorch 或 Hugging Face transformers。工具很多。他很喜歡 Unsloth 的文件，對怎麼準備 fine-tune 資料、各種 dataset 講得很深，也能用較少資源、甚至在筆電上跑一些技巧。Transformer Lab 有不錯的 UI，做 dataset 時還能用 LLM。

[6:19](https://www.youtube.com/watch?v=3xKGAHKfroE&t=379s) 閉源模型也能加 fine-tune。OpenAI 從很早就要 fine-tune jobs API。Anthropic 透過 AWS 提供一些支援。Mistral 也有，而且他最喜歡的一點是：跑 fine-tune 過的模型不改價，和用原模型一樣。

[7:02](https://www.youtube.com/watch?v=3xKGAHKfroE&t=422s) Fine-tune 名聲不好，因為準備資料又花時間又花錢。以前是這樣。現在可以用進階 LLM 生合成資料，做成 dataset。Dataset 本質上是在告訴模型什麼是對的行為，有時也放錯的行為，再用 loss function 測那些例子。他給一條 loss curve，也會切資料，看行為有沒有調到想要的方向。但要小心。他正在看的一篇論文說：對齊行為、loss 往想要的方向走時，也會覆蓋、讓模型忘掉別的行為。所以 fine-tune 出來的模型只該用在當初那個用例，不要拿去當主要 agent 的通用模型。

## Completion：學你們的樣板，不要學平均的開源倉庫

[8:46](https://www.youtube.com/watch?v=3xKGAHKfroE&t=526s) Code completion 他比成打了類固醇的 IntelliSense：在 IDE 裡補專案、補檔案中的幾行。要用特別的模型，通常相當小、為速度優化。拿大型 chat 模型來做，延遲會很長。開源專案裡常見的，是他點名的那幾個家族的衍生模型：DeepSeek Coder、Qwen Coder、Codestral、StarCoder。它們在大資料集上訓練，速度和表現的比例很好。缺點是訓練資料是平均的開源倉庫。平均來說很好，建議卻可能沒那麼貼你。你有自己的 login 寫法、安全模式。看一般企業的微服務，多半是樣板加上一點邏輯。若 completion 能抓住這些樣板會很好。

[11:01](https://www.youtube.com/watch?v=3xKGAHKfroE&t=661s) Refact 的工具組很複雜。Agent 那部分做主要的工作；伺服器端可以用模型，也幫忙做 fine-tune 的效能。畫面上他選多個專案，再選要繼續 fine-tune 的目標模型。字幕沒有描述畫面裡的其他數字。

[12:03](https://www.youtube.com/watch?v=3xKGAHKfroE&t=723s) 準備 codebase 的 dataset 時，他們拿程式檔，並有 privacy guardrails：若檔案裡放了密碼、SSH key、token，就排除，不進 fine-tune。再依副檔名和大小篩，拿掉二進位、很大的 JSON。能從公司授權檔或 license header 認出的外部 vendor 也拿掉。PII 用相當簡單的演算法去掉 email 之類。這樣得到客戶或使用者各個 codebase 的資料，依想要的 token 數切塊，通常大約 2,000 tokens，帶一些重疊，讓模型從不同側看；塊會打亂。他說現在是準備資料的黃金時代。若負擔得起，更好的做法是讓 LLM 跑過這些程式、寫上 inline comments。之後你自己打字、請 completion 補完時，那些註解會很有用。

## 數百張表：先搜尋，再用真實查詢訓練小模型

[14:19](https://www.youtube.com/watch?v=3xKGAHKfroE&t=859s) 他說 completion 今天不是最讓人興奮的。大家興奮的是 agent 和工具。他們有一個案子要把 agent 接到很大的資料庫。線上文章、或你自己在 ChatGPT 裡，通常是把表定義貼進去。但如果有數百張表、跨多個資料庫、到 TB 等級，怎麼做出夠快的查詢。第一步仍是準備資料，這裡 LLM 價值很大。多數線上例子假設表和欄位自明，他們這個故事不是。他們得分析每張表的每個欄位，寫額外說明，看裡面是什麼資料，甚至用很拚的方式推論表之間的關係和描述。

[16:02](https://www.youtube.com/watch?v=3xKGAHKfroE&t=962s) 這些放進一種 semantic search，也就是某種 RAG。Agent 有工具找相關的表，也有比較簡單的方式問某一張表的細節，還能真的跑一些查詢。有時很有用，但要有 guard rails：列數上限，以及 timeout。這樣可以生成查詢，但慢。Tool call 很多，又受 RAG 架構限制，那是 top-N，有些表不會回到 context。模型也會生出慢的、接合很差的、不理想的請求。

[17:09](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1029s) 於是他們從另一側看。拿真實 production queries 的 log，數以百萬計，去重，請現在的 agent 做相反的題：解釋每一則查詢想做什麼。Agent 已經能看表和表定義，於是做出很好的 fine-tune 訓練集。真實環境裡有的表用很多、有的很少，他們得看分布，確認相關的表都在裡面，再取出子集來訓練。SQL 生成被放進一個叫 text-to-SQL 的特殊工具。Agent 把請求轉給這個特別的、小型 fine-tune LLM。他說它變得非常快，也給出很多相關請求。其他工具仍可加，但要在 system prompt 裡告訴 agent：先用這個工具，不行再用別的工具修。

## 軌跡、128 個工具，以及用 Claude 當老師

[19:04](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1144s) 接下來不是只調一個模型的行為，而是 trajectories 和 tool calls，他覺得這今天更相關。模型會幻覺，標題常寫某公司做了什麼又得 rollback。他的看法是：摘要新聞比寫 code 難，因為 code 可以測。有軟體工程背景的人知道軟體品質是什麼、也知道怎麼把它跑起來。Refact 一直在加工具。讓模型拿到工具回饋的想法是：能跑自動化測試；沒有測試就編譯、看 warning、看 linter、看執行 log，甚至從瀏覽器看。回饋愈多，agent 工作的品質愈好。他們在 Polyglot benchmark 上有一個結果，那個 benchmark 是 Aider 創辦人做的。他們的差別是允許模型用測試自我驗證。他指著結果說，有了對的驗證工具，模型怎麼跑、怎麼給結果，大幅變好。字幕沒有唸出分數。

[21:01](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1261s) 除非躲在石頭下，不然你已經在用 MCP，或每天看到它。MCP 是很好的標準，讓各種服務和 API 更好接；對要管 LLM 行為的人，它也是噩夢。他第一次看到 OpenAI 回錯，說工具數量超限。他們的 tool call 支援 128 個工具。就算你加滿 128 個，在裡面挑選的表現也會很差。所以即使塞得進上限，加哪些工具仍要很挑剔。軌跡的數量現在很大，模型應付不來。他舉一個他們期待模型能走的複雜流程：到 GitHub 拿 bug 資訊，從 Sentry 或你用的系統拿 production 錯誤 log，找到相關 unit tests，重現、把對的東西加進測試、跑測試、繼續改。這種軌跡要做對，從你的聊天記錄準備 fine-tune 就很有用，可以從存下來的 agent logs 抽出來。

[23:10](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1390s) 這對 on-prem 更相關，他們也支援 on-prem。On-prem 安全性更好，但問題是上面跑的開放模型仍追不上閉源供應商的模型。另一種合成資料是用進階模型的 tool calls。以他們的經驗，Anthropic 的 Claude 目前在程式任務和呼叫工具上最先進。你可以跑一批符合預期行為的 chats 和 prompts，存下 Claude 怎麼呼叫工具、怎麼做這件事，做成訓練集，餵給要在 on-prem 跑的開放模型。Fine-tune 之後用更便宜的模型，放在 on-prem 或雲上，但就這些軌跡而言，讓它便宜。

[24:46](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1486s) 投影片到尾聲。他想說的是：今天 fine-tune 變得很簡單，工具已經能做很多事，開發者不必去看 TensorFlow 的程式。Dataset 也好準備，因為可以把合成資料交給進階 LLM。他請人去試 Refact 的 agent，或加入 Discord。

[25:40](https://www.youtube.com/watch?v=3xKGAHKfroE&t=1540s) 問答裡有一則不像問題，講 AI 隨時在、不評判、免費支援、依使用者個人化，他沒有接。Richard OC 問 Mac OS 上 fine-tune 有沒有好指南。他推薦投影片裡提過的 Transformer Lab，開源、有很多外掛，他用在自己的 Mac 上，印象很深。另一題是別人說模型在 15 兆之類的量上訓練時，那到底是什麼：token 是一個字還是半個字，15 兆長什麼樣子。他說自己得心算。平均而言 token 大約三或四個符號，視語言而定。那些數字很荒唐，可以把 token 就想成一個數。怎麼開始用：他們開源，多數程式在網站和 GitHub。微調你自己的 codebase 是最容易的用法。軌跡的 fine-tune 不在開源工具裡，而是他們幫企業客戶做的事。
