# Niels Rogge - State of Open Source AI Coding Models | DevCon Fall 2025

Niels Rogge（字幕 Neil's、Neils）在 DevCon Fall 2025。片長 25 分 24 秒，英文自動字幕。他是 Hugging Face 的 machine learning engineer，也在比利時的 ML6 做顧問。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=eKYGLPdwgF8)

## 一句話

大家愛開源軟體，model 卻常跳去 Anthropic 或 OpenAI，因為比較能用。Niels 的論點是這段差距到 2025 已經很小，而且領先的開放模型多半來自中國實驗室。多數所謂 open source 其實只是 open weights。值得換或值得 fine-tune 的理由，常常是延遲、成本和自己的領域。

## Hub、以及三種開放程度

[1:11](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=71s) 他先把 Hugging Face（字幕多次聽成 Hacking Face、hugging phase）說成 machine learning 的 GitHub。GitHub 適合幾 KB 到幾 MB 的檔案，不適合模型和大型資料集。平台上現在有超過 200 萬個公開 AI model，來自 OpenAI、DeepSeek 等實驗室，資料集超過 50 萬，都可以免費用。側欄可以按領域篩，例如 computer vision、large language model、或 Whisper 這種語音辨識。

[3:04](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=184s) Hub 在中間。旁邊是開源程式庫：Transformers 最紅，GitHub stars 超過 15 萬；Diffusers 給 diffusion model；TRL 用來 fine-tune 開源 LLM。Spaces 是代管環境，可以跑 Streamlit、Gradio（字幕 grado）或純 Docker image。部署上，Inference Endpoints 做 serverless，他說很像 OpenAI API；Inference Providers 則是模型只為你跑的 dedicated inference。權重開源，所以也能下載後放到 Google Cloud、自己的 data center，或手機上。

[4:29](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=269s) Transformers 生於 2018，Google 在原始 Transformer 之後開源了 BERT（字幕 birds）。今天公開的 LLM 來自 Meta、Google、Mistral，也有 Moonshot 這類中國新玩家。他要把三層分開。Closed source 例如剛出的 Gemini 3：知道它是用 autoregressive 任務訓練的 transformer，但不知道訓練資料。Open weights 是權重在 Hugging Face 上，但訓練資料、確切目標和程式碼都沒有；他點名 Alibaba 的 Qwen（字幕 Quen）、Mistral、DeepSeek。Fully open source 則連資料集和訓練程式都有：Hugging Face 的 SmolLM（字幕 small LM）系列，可以在手機或筆電上跑；西雅圖 Allen AI 的 OLMo（字幕 Almo from Alen AI）也是。

[6:36](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=396s) 閉源的好處是開箱性能通常很好，壞處是依賴別人、很難客製。開源模型只為你跑，延遲可以更低，也能用自己的資料 fine-tune，但 fine-tune 和部署有學習曲線。2023 年 OpenAI 出 GPT-4 時，幾乎沒有好用的公開模型，後來的 Mistral 7B 差距仍大。他說 2025 年這個差距已經很小，尤其是中國玩家，幾乎可以跟閉源打平。Hugging Face 下載也翻過一面：Llama 曾經很紅，Llama 4 不算成功；今年換成 Alibaba 的 Qwen、上新聞的 DeepSeek，以及目前最強的 Moonshot。

## 為什麼要在開放模型上 fine-tune

[8:48](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=528s) Cursor 會拿 Hugging Face 上很強的預訓練模型，做成自己的 tab completion，預測你在 IDE 裡下一手要寫什麼。他猜 Composer 的底是某個中國模型，再用 reinforcement learning fine-tune。目的不只是讓它在 Cursor 裡當 coding agent，也是為了延遲：他用某個字幕聽成 set 的模型時，常在空等；Composer 快很多，而且大多打平。Semantic search 也因為在 Cursor 環境裡訓練過，勝過閉源模型。

[10:15](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=615s) Windsurf、Cognition（字幕 wind surf cognition）拿了當時 Hugging Face 上最好的公開 LLM 之一 GLM 4.6，做 reinforcement learning，再用 Cerebras 這種做專用晶片的 inference provider 把延遲壓低。另一則推文裡，字幕聽成 data do 的團隊用 fine-tune 過的 Llama 換掉 OpenAI，因為他們要低於 500 毫秒，閉源模型做不到；資料量很大時，按每 100 萬 input 和 output tokens 計費也比較貴。

## 從 BigCode 到 Qwen，再到能換掉 Claude 的模型

[11:26](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=686s) 這不是完整清單。他從 2022 年 9 月 Hugging Face 的 BigCode 講到今天的 Kimi K2（字幕 Kim K2），並說現在強的 coding model 都是中國的。

[12:07](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=727s) BigCode 有數千人參加。當時 GitHub Copilot 最強，比較像加強版自動完成。目標是做出類似的東西並公開，而且是 open science，讓別人接得上去。第一個成品是 StarCoder。他說那是 500 億參數，在 80 種程式語言上訓練，context window 只有 8k tokens。預訓練用了 OpenAI 論文裡的 FIM，fill in the middle：給前後兩段，讓模型補中間，用來做他稱為 step completion 的模型。Hugging Face 也放出訓練用的 The Stack：3 TB、來自 GitHub、授權允許再使用的原始碼，含濾掉低品質程式的 pipeline 和論文。

[14:08](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=848s) 2024 年的 StarCoder 2 有 30 億到 150 億三種大小，資料是 The Stack v2，他說在 4 兆 tokens 上訓練、放出 9000 億個不重複 tokens，context 也變大，而且不只是 code。當時 benchmark 上 DeepSeek Coder 大概最強；他說在 50 billion 這個區間，StarCoder 2 是最好的之一。

[14:52](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=892s) 2024 年底 Qwen 2.5 Coder 成為 open weights coding 的新 state of the art，已經在跟當時最強的 Claude 3.5 Sonnet 比，大小從 5 億到 320 億。論文寫了 file-level、repo-level 預訓練，以及用合成資料做 post-training。別人開始往上疊：開源 IDE Zed（字幕說 Z）把 Qwen 2.5 fine-tune 成 next edit prediction、tab completion，模型叫 Zeta（字幕 Zetta），資料集也公開，並用在正式環境。Fast Apply 也是 Qwen 2.5 的 fine-tune，負責看檔案現況，決定 coding agent 產生的修改要貼在哪。

[16:26](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=986s) 2025 年 DeepSeek R1 第一次讓開源模型進主流新聞，還影響了 Nvidia 的股價。它仍是 open weights。技術報告裡的方法是 RLVR，reinforcement learning from verifiable rewards，他說頂尖實驗室都在把這件事做大。想看 RLVR，可以讀字幕稱為 Lenai 的技術報告。因為 DeepSeek 只放了權重，Hugging Face 做了 Open R1：訓練資料、程式和整個流程都在，GitHub 上也有。

[17:30](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=1050s) Qwen 3 Coder 改成 mixture of experts。他說總參數 4800 億，每個 token 有 350 億是 active。只放出 instruction-tuned、沒有 base，也沒有論文，但別人仍能往上建。緊接著是 GLM 4.5 和 4.6，同樣是 MoE，總參數 3550 億，拿來跟 o3（字幕 open 03）和 Claude Opus 比，並有 thinking 與 non-thinking 兩種。論文寫了 pre-training、介於 pre-training 和 post-training 之間的 mid-training，以及用 FIM 訓 code。他們還開源了 slime，給大規模 RLVR 用的 reinforcement learning 架構，而且相容 Claude Code 和 Cline（字幕 clin、Klein，一個 VS Code extension）。圖上閉源是粉色、開源是藍色，diff edit 成功率他說都高於 94%。文件也寫了怎麼把 Anthropic 的 model 換成 GLM。有人做成迷因：謝謝中國，一個月 3 美元就有用不完的 Claude Code。他說這些模型便宜很多，換掉 API key 就行。Cline 作者貼的圖是閉源和開源的差距變得很小，使用者立刻有感，因為工作成本大約是一成。

[20:47](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=1247s) 眼下他最看重的是 Moonshot 的 Kimi K2。它跟 GPT-5、Claude Sonnet 4.5 比，仍是 open weights，沒有訓練資料細節。在 Artificial Analysis 的 benchmark 上排第三。參數一兆，其中 320 億 active。他說這是現在 Hugging Face 上可以免費拿到的 state of the art。Tim Dettmers（字幕 Tim Dmers，以 QLoRA 和 quantization 聞名）說它好到自己這個 Claude 迷也在認真考慮換掉。Google 前一天發了 Gemini 3，卻沒跟最強的開源模型比；Hugging Face 的人把 Kimi 補進表裡，它在這些大模型之間仍然有競爭力。

## 從課程開始；GPT OSS 不要拿來寫 code

[22:28](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=1348s) 入門他建議 huggingface.co/learn。那裡有免費課：LLM 的 inference 和用自己的資料 fine-tune、agent、MCP，也有 computer vision、他口中的 OO（字幕沒有再解釋）、以及 deep reinforcement learning。LLM 只是目前最吸睛的一塊。

[23:45](https://www.youtube.com/watch?v=eKYGLPdwgF8&t=1425s) 有人問 GPT OSS 為什麼沒出現在 benchmark 上，是不是不如中國模型。他說一開始大家不滿意，大約一個月後又覺得可以。它們比不上最前線的 frontier model，那種要像 Kimi 一樣到一兆參數。但做 on-device 很好：llama.cpp 的主要貢獻者告訴他，GPT OSS 是那裡最好的模型之一，適合手機或筆電。他自己不會拿它們來寫 code。
