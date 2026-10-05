# February Roundup: AI Model Wars, GPT-4.5 vs. Sonnet 3.7, and the Future of AI Dev Tools

Simon Maple 和 Guy Podjarny 的二月月報。片長 41 分 27 秒，英文自動字幕。AI Native Dev，由 Tessl 製作。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 GPT-4.5、Sonnet 3.7、Grok、Claude、Tessl 都聽歪了，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=kjAs_isf-Vs)

## 一句話

二月模型很多，大家盯的是 GPT-4.5 和 Sonnet 3.7。4.5 把 EQ 做成像 Claude，價格和訓練成本高一截，盲測和 Tessl 自己的 eval 都沒有壓倒性。3.7 把 reasoning 放進同一個 model，讓你調想多用力。兩邊都在抄對方。實驗室同時想當別人信任的平台，又想自己做成解法。開發者這邊，一個人同時用好幾個工具，還是這段實驗期的常態。

## 發布像賽車，人還沒被鎖死

[0:54](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=54s) Simon 說這個月大約 17 個模型，也許少一點。大新聞是 GPT-4.5 和 Sonnet 3.7，月初還有 Grok 3。他覺得人最被吸過去的是前兩個。Guy 開玩笑說他的訓練資料被自由派媒體毒過，所以也偏向它們。

[1:56](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=116s) Simon 問這是不是雪球：一家發了，別家立刻跟上，像賽車每五分鐘擠到前面。壓力來自生意、投資人、行銷，因為別人也在同一個星期發。Guy 說壓力很大。一部分是新聞週期。這件事已經進主流媒體，大玩家不願意讓另一家獨佔任何一段時間。另一部分是實驗本身很快。興奮的使用者若放太久，會開始固定習慣。

人會不會長期黏在一個 model，還是開放問題。現在感覺可以互換，從 Claude 的聊天換到 OpenAI。Anthropic 最新一輪的大投資人相信有些軌道正在被鋪上，像雲端：一開始覺得 EC2 或其他雲差不多，細節變多之後，搬家一點也不容易。AI lab 也許會這樣。現在還沒看到。所以目前更像搶新聞、搶使用者。

## 4.5 更會安慰人，沒有贏得壓倒性

[3:54](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=234s) Simon 以為 4.5 先出。Guy 說 Sonnet 3.7 先出，4.5 是反應。他們從最近的往回講，先講 4.5。

OpenAI 的行銷強調 EQ 比以前的模型高。例子是考試失敗、正在難過。GPT-4 試著解決問題。4.5 更有同理，想弄清人到底要什麼：是想聊，還是想知道有人在。Simon 說更像 Claude，也更像人。他覺得人會親近 Claude，是因為它比其他 GPT 更像人。Guy 說這承認了不只是 benchmark，還有情緒。Claude 的強項被指認出來，OpenAI 在對。人也有風格偏好。他說女人來自金星、男人來自火星，4.0 來自火星，4.5 來自金星。有一種他覺得合理的反推：你 maybe 不想要一個模型一種風格、另一個模型另一種，而想在當下說這次對話要哪一種。Claude 的下拉選單可以選正式或個人，預設個人。EQ 沒有一個能贏的 benchmark，由人群來判。怎麼量「多像人」，幾乎反直覺。Simon 把笑話收在 Grok 來自天王星。

[6:26](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=386s) OpenAI 自己的測試，他強調是他們的日常查詢：57% 的人偏好 4.5 勝過 4.0；專業查詢 63%；creative intelligence 56%。Guy 說這塊領域太大、太主觀，實驗室出來的數字很難照單全收。他提到有個「3」發表過一批後來被懷疑的數字。這不是說 OpenAI 做假。你不會把自己的負面統計發出去。Karpathy 在 Twitter 做盲測，A 和 B 在 4 和 4.5 之間輪替，他預期大家選 4.5。結果偏向 4.0。Guy 覺得不過癮。

[7:44](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=464s) 4.5 是 GPT-4 之後數字第一次往上跳。GPT-4 大約兩年前、2023 年 3 月發出。期待很大。估計訓練貴了 10 倍，token 依輸入輸出貴 15 到 30 倍。人會期待被嚇到。OpenAI 那種略為偏好，對不上這個期待。大家心裡比較像 GPT-3 到 GPT-4。他們只加了半號，也許那就是表態。Reasoning model 真的把 LLM 能做的事抬上一層。4.5 則讓人覺得不夠。就算 OpenAI 的數字略偏 4.5，盲測在另一邊。Karpathy 想過，對 LLM 輸出口味細的人，也許會像他一樣偏好 4.5。Guy 說，就算 4.5 穩定地只比平均好一點，以這個價差，他進場時期待的是壓倒性。沒有。

OpenAI 也給了準確度。Simon 看著圖估：簡單 QA 比 4.0 和 o1 再高大約一成到兩成，比 o3 mini 高大約四成到四成五。幻覺相對 4.0、o1、o3 mini 下降。Guy 比較願意信這些，因為別人會重跑，發出會被打臉的數字沒有好處。

## Tessl 測下來，4.5 比 4.0 差一截

[10:04](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=604s) Simon 先澄清：Tessl 在做的不是 model。他們在 code generation 和整個開發流程裡用別人的 model，也建了自己的 eval。多個模型同一週出來，eval 團隊像安全漏洞那天全員上線。Guy 說產品團隊對漏洞那種興奮還多一點。

他們測了 4.5。結果一點也不興奮。不只 codegen，也包括寫 specification、理解它們，很多是系統理解。它比 4.0 差，而且不是小差。他加了但書：一種測法是把上一個模型的 prompt 和流程丟上去看。再往上還有優化。他們看過優化之後超過你原先優化對象的例子。差距不小，所以數字還不夠準，不分享精確數字，仍在評。但實質上明顯低於 4.0。

過去六個月，同一個模型、4.0 的各次發布，也不是直線進步。有的更有創意，有的更分析。同一模型的 codegen 也出現過退步。和 OpenAI 合作時這是真的：模型不同區域有不同能力。奇怪的是他們要做的比較分析，4.5 在那裡不好。若重點是幻覺下降，那裡應該更好。這也許對上他們強調 EQ 和人的互動，而那對 Tessl 的用途沒那麼重要。陪審團還沒回來。這是第一批，也許還會大改。他想看建在 4.5 或 4.0 之上的 reasoning model。到來沒有嚇到他們，有點像退步。很難說願意為了換過去多付一個數量級。他也還沒看到有人真的對它發誓。

## 同一個 Sonnet，自己決定想多用力

[13:08](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=788s) Simon 嘴上還會說成 3.5。Sonnet 3.7 的大東西是 dynamic reasoning。他們說這是市場上第一個混合的 reasoning model，同一個模型。一步一步想，類似 DeepSeek。DeepSeek 說得非常囉嗦。

Guy 分三點。第一，看到 Anthropic 的 reasoning model 很興奮。思考模型由 OpenAI 開路，現在被當成對的路。Anthropic 選擇像 DeepSeek 一樣把思考攤開，但沒有 R1 那麼碎碎念。很話多，會心疼 token，下決定要一段時間。看它怎麼想該怎麼回答才安撫人，有一陣子很迷人，然後就擋路。可以把它摺起來。較新的版本更能藏。比 OpenAI 開放。OpenAI 把推理藏起來，並沒有依他們也許計畫的那樣拖住別人，因為別人發 reasoning model 的速度就在那裡。看到推理過程，也能知道 prompt 哪裡對、哪裡不對。

[15:09](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=909s) 第二，dynamic reasoning 作為真的做出來的東西是新的。概念 OpenAI 和 Google 提過，他不確定 Gemini 那次算不算。你可以告訴模型要想多用力。OpenAI 的世界是你選：不思考或快的，像 4.0 或 4.5；或者去 o1、o3、o3 mini 那些會深想的。這裡是同一個模型，你說幾個循環、幾次迭代。他不知道背後的數學。從使用者看比較合理。他不想做二元選擇：要想，還是要想到頂。希望是它自己會判斷。3.3 加 3，或某個東西的最新版本，不該想很久。七位數相乘，就該拿紙筆。也許還會再有一層，決定要想多少。Simon 從產品感覺能同意，對模型本身沒有強意見。你可以想像一個秒回的模型和一個深想的模型，本來就該很不一樣。

[16:59](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1019s) 他最早看到反應的是 Bolt.new。他是粉絲，拿來做有趣的原型。他自己是 Java 後端，前端很差，設計也不行，問 Guy 為什麼雇他。Bolt 補他不自然的那塊。他們把 dynamic reasoning 做成開關，還在 beta。依使用者的請求決定要不要深想。改個顏色、或像複製取代那種不必鑽進 code 的事，就快做。大的架構重整，就要想深。

Guy 說 Claude 這邊的賭注有一部分是：人想控制哪些動作需要想。OpenAI 則是打給這個模型或那個模型。難的是什麼時候要它想 40% 用力、想 60% 用力。快答和深想好說。想得很用力但不是最用力、願意付一些延遲但不是全部延遲，比較難講。API 上 Claude 比較偏企業用途，MCP 的做法比 OpenAI 宣傳的簡化 tool use 更有彈性。不同味道、不同軌道。

[19:38](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1178s) 第三，API 和使用者產品不一樣。用 Claude 的產品時仍是二元的，比較像 o3 和 o1。他們還發了 Claude Code，比較像 CLI 的 code generation，又是那種要彈性的感覺。3.7 裡比較少被討論的是這塊。兩件事：他們靠向應用。聊天產品已經有，這是 Anthropic 第一次給一個比較完整的使用案例。另一件是這和建在他們上面的人怎麼處：Cursor、Bolt.new。所有 AI lab 現在都有這個複雜度。哪裡要當平台，讓人信任你不會做完就來搶、還限制他們的存取。哪裡要自己把解法變現。軟體工程這邊，這些實驗室愈來愈想自己當那個解法。Anthropic 特別敏感，因為 AI 開發圈有很多粉絲建在上面。你得小心自己什麼時候說：請直接用 Anthropic 的解法。

Simon 把 CLI 看成給別人延伸的點。以前 Claude artifacts 能做小的 React app、把前端立起來，那是最接近專為開發者互動做的東西。Claude Code 是更大的一步，獨立發布，他覺得目前是 beta。他不認為開發者想用 CLI。Aider（字幕寫成 ADA、Ador）早期在走這條，現在還在，當時算創新，沒有人真的跟上。所以 Claude 也許不是在做給開發者的完整 UI，而是給 builder 和 tinker 的人。Guy 說這理論不錯，平衡很刁。他指到這個月和 ElevenLabs 的 Mati 那一集。

## 抄得動，也包括 dynamic reasoning

[22:46](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1366s) 二月初 State of Open Con 有一場現場 AMA。感覺很久以前。一月月報談過。DeepSeek 他們覺得講夠了，等 Hugging Face 推出那個美國核心再談。法律和其他面向，那場面板還值得看。

Simon 還是問了一題：DeepSeek 從別的模型蒸餾。dynamic reasoning 蒸餾得了嗎，還是得像外掛。Guy 說若 distillable 這個詞成立，最近的歷史是都能模仿。簡化之後你需要的是資料：這些輸入、這些 token，你期待這種回應，或你能評估這個回應。能從別人那裡抽出合成資料，就能訓練。解讀還有演算法，比這複雜。核心是你碰得到模型、看得到它怎麼回應，就能生成愈來愈多資料去模仿。Dynamic reasoning 是一個設定。Temperature 仍是有點巫術的參數。0.6 和 0.5 的差別，你大概說不太清。也許人會習慣三四檔這種巫術等級，然後把它蒸餾過去。

4.5 和 3.7 都是大家一起往前走的遊行。4.5 這段是 OpenAI 在模仿 Claude 的 EQ。Claude 這段是在模仿 OpenAI 的 reasoning，也許還有一點對上 canvas 的程式生成。做法有細差，根本是在抄。Grok 也這樣。更大的差異是 Grok 和 DeepSeek 在訓練上幾乎相反。DeepSeek 在底層、從舊硬體擠出最多。Grok、xAI 砸很多錢買最新的 Nvidia。做出來的東西卻可比。Anthropic 押 Amazon 的 GPU。他還沒看到一種感覺能持續拉開的差別。

[26:39](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1599s) Simon 推薦 Macy Baker 那集，她是 Tessl 的 community engineer，先前談過 prompt engineering。她做了兩個遊戲，一個是狼人，另一個字幕聽成 split steel。模型互打，很好笑。想看 EQ，等 Llama 和 DeepSeek 那段。下一週播出。

去年十一月的 AI Native Dev 大會很好，一年太久。2025 春季場，不要和 Java 的 Spring 搞混。會更大。三條軌：今天怎麼用 AI 開發工具；AI-native 開發的工具、實務和節目的未來；新的一條是 AI tools in action，上手。CFP 悄悄開了，筆記裡有連結，下週起在 tessl.io。可以註冊、可以投稿。Guy 說這個社群就是讓人分享學到的東西。做工具的、用工具的、或對軟體開發會怎麼被影響有話要說的人，都該有舞台。

## 工具帶還不會收成一把

[28:54](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1734s) Simon 和 Farhath Razak 談過。他在社群裡認識這個人。最大的收穫是：作為使用者，他不黏一把 AI 開發工具。依他要的結果，對的時間用對的工具。很多時候同時用好幾個。有些付費、有些 premium。這是一條工具帶。Guy 說很實際。那是一個人，不一定剛好是你，但是一幅比較完整的圖：這些工具怎麼跨在軟體開發的很多面上。

Simon 點到的包括：Perplexity 做研究和發想，看有哪些文字、最好的 library、各種專案的 API。Claude 做原型，用 Claude rules 調成他的開發風格。Cursor。Windsurf（字幕寫成 clinurf）。Eraser 從 DevOps 和部署來看。另外兩個名字聽成 ruode 和 swim，他說其中一個給他 agentic 的網頁搜尋，不在這裡猜是誰。

Guy 最被打到的是同一件工作用不同工具。Windsurf 和 Cursor 他都用。一年前、三年前問人用哪個 IDE，答案是單數，當時大概是 VS Code。同時用多個 IDE 的人很少。AI 裡變多了。他賭這仍是實驗期：每一家會在某個窄領域短暫超前。過一兩年或某一段時間，人會回到一把工具，九成的事都夠好，不值得再切一把。這些 IDE 至少是 VS Code 的 fork，所以熟。有趣的是人願意保持開放。

## ElevenLabs：先做窄的，並且先說會搶你

[31:49](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=1909s) Mati 是 ElevenLabs 的共同創辦人。Guy 說他們是今天 AI 音訊的領先者，三十億美元的公司，數百萬使用者，文字轉語音、文字轉音訊的事實標準。他認識倫敦圈的 Mati。對方不太上 podcast。這集比較不像開發，比較像 AI 創業。三個收穫。

第一像教科書。大願景是配音，零件很多：聽一種語言、捕捉、分辨聲音、誰在何時說了什麼、再翻譯。他們收斂到文字轉語音，這個用途本身就有價值，做出技術突破，再加上 voice cloning，兩個核心能力做成了。現在擴回較寬的配音願景。錄音前幾天他們推出 speech to text，能知道誰在何時說了什麼，有精確時間戳。叫做 Scribe。Guy 試過。臨時找文字轉語音的用途比語音轉文字容易。他想用在多人會議。Zoom 上每人一台電腦，誰說了什麼很容易。同一間房裡好幾個人同時說話，他就想試。錄音的房間叫 Champagne，是一位 tessellation 藝術家。他們的會議室都以這類藝術家命名。Zoom 逐字稿有時變成他和 Champagne 的對話。

[34:36](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=2076s) 第二是產品對平台，接回前面實驗室的問題。ElevenLabs 一直兩者都是。UI 裡貼文字、選聲音、產出音訊，不必是開發者。他覺得大約一半使用者這樣用。API 則把文字轉語音接進你的應用。兩邊都在長。API 還長出更大的積木，例如對話式 agent。從人實際拿 API 做的事，看出哪些可程式化的用途該變容易。Guy 推他的問題是：你建在 ElevenLabs 上，怎麼預知他們何時會出產品來跟你搶。很多 AI 新創在想這個，因為這些實驗室在某些面上明白地走向應用層。Mati 的回答錨在透明。這是計畫、這是願景，他講了 call center 和配音。若你用 ElevenLabs 做配音解法，就該預期他們會來搶、會有產品。這個宣告也等於說出他們不打算做的事。

[36:41](https://www.youtube.com/watch?v=kjAs_isf-Vs&t=2201s) 第三是組織。很多人以為要很多錢、很大很硬的團隊，加人才能更快。ElevenLabs 不是。大 AI lab 的數學不一樣，GPU 和訓練是另一桶錢。團隊仍不到 150 人，對一家年經常性收入他說超過一億美元、數百萬使用者、估值三十億的公司，又小又靈活。長期研究和漸進研究：他們在建新模型，也在做只好一點點的東西。這段值得聽原集。建下一個突破模型的團隊是五個人。另一個做漸進的，他記得是五到十人，或七八人。仍然很小，服務數百萬人。他覺得鼓舞，也佩服。

他們拿掉全公司的頭銜。大膽。探下去，還是有 team lead。他用教養來比：不要跟孩子說你很笨，說你做了一件笨事；不要說你很聰明，說你做了一件聰明的事。用行動判斷行動。「你在管這個團隊」，不是「你是這個團隊的經理」。有功能性的半頭銜，但選擇不讓年資寫進頭銜。和 Tessl 的氣味不同。Simon 開玩笑說 Guy 不准人看他的眼睛，要稱 royal highness 或 grandmaster。Guy 說 Tessl 也在談 head of insight 這類，想避開 CXO，保持靈活。這套怎麼放大、在偏資源的組織和偏產品的組織裡哪邊更好，還值得想。

訂閱數快到一萬。下一週是 Macy 那集。春季大會可以回 CFP、也可以註冊。
