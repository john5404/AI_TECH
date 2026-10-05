# The Evolution of v0 and Vercel's AI SDK with Malte Ubl

AI Native Dev 播客重播 AI Native DevCon 的一場對談，片長 25 分 44 秒，英文自動字幕。來賓是 Vercel CTO Malte Ubl，對談的是 Tessl field CTO Dion Almaer。開頭介紹這集的主持人沒有在字幕裡自報姓名。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Vercel 聽成 Vel、把 v0 聽成 vzer、把 Tessl 聽成 Tesla。

- 原片：[YouTube](https://www.youtube.com/watch?v=wrRsHlhpubY)

## 一句話

Vercel 把自己放在 LLM 的破壞裡，不是再做一個模型，而是做框架和上手工具。v0 真正難的不是讓模型吐出網頁，而是做出開發者願意用的體驗；AI SDK 則像 1990 年代的 JDBC，只把各家 model API 抹平一點，並處理 UI 狀態和 LLM 之間的翻譯。Malte 對小團隊的看法是：模型正在變成商品，被低估的是你手上沒公開過的專有資料。

## 為什麼是 framework，不是另一個模型

[0:51](https://www.youtube.com/watch?v=wrRsHlhpubY&t=51s) 主持人說這是 DevCon 的 keynote 之一。會上有他很尊敬的人在聊天裡寫：正在講的這個人，也許是地球上最好的 web engineer。他因此把這場聽完。預告裡他先講了兩件事：ChatGPT 很會生文字，不見得會生網頁；以及 AI SDK 想讓你在 OpenAI 和 Anthropic 之間切換時，少改自己的 code。

[3:22](https://www.youtube.com/watch?v=wrRsHlhpubY&t=202s) Dion 問 AI 這波什麼時候打到他。Malte 說自己加入 Vercel 快三年，那是 2022 年初，這件事還沒發生。他從 Google 來，Sundar 大約 2018 年宣布公司 AI first。內部已有人被這些系統變好的速度搞糊塗，所以他有心理準備，但還是跟大家一樣：試了 ChatGPT，覺得就是這個、這件事會發生。

[4:38](https://www.youtube.com/watch?v=wrRsHlhpubY&t=278s) 公司從很多面向在消化。他覺得自己運氣很好：第一個推向市場的專案，是把 function execution 基礎設施改成以他口中的 net CPU 為基礎。那不是為了 AI 做的，但一分鐘長的 AI API 呼叫出現時，手上正好有很擅長這件事的產品。更大的問題是 Vercel 在這場破壞裡站哪。他對答案很滿意，因為它貼著他們本來在做的事：他們是 framework 公司，做 Next.js，也支援 Svelte 和其他 JavaScript 框架。所以該做的是給 AI 應用的框架，也就是 AI SDK。在 TypeScript 社群裡它很成功。角度是：別家的東西感覺像完整框架，但還沒人知道大家要做什麼應用，現在做框架太早。AI SDK 是你會需要的低階工具，不規定你怎麼做。第二個角度是 v0：幫人開始做前端、把專案踢動，並成為他們支援的那些框架的 expert system。他說這對他們相對明顯，而且很成功。

## v0 的解鎖是 Tailwind，不是「HTML 也是文字」

[6:19](https://www.youtube.com/watch?v=wrRsHlhpubY&t=379s) v0 改過好幾輪。一開始大家的想法都一樣：ChatGPT 是 LLM，HTML 只是文字，所以叫它做網頁。大約一年半前那樣做出來的東西很糟，醜、也不能用。舊金山有幾個人，公司大致遠端，但那天都在同一間房間裡。有人舉手說：我弄好了，AI 做出的網頁看起來很棒。Malte 事後覺得那是容易的部分。讓開發者覺得說得通的使用體驗，花了不少迭代。他們從把 chatbot 硬改成這個形式開始，後來出貨的東西偏視覺；大約一年後又移回比較像 chat 的介面。他承認正確的 UX 還在找。

[7:39](https://www.youtube.com/watch?v=wrRsHlhpubY&t=459s) 就在對談前一天，他們發了一個大版本：v0 可以做完整應用，在 chat 裡迭代時有即時預覽，也能部署到 production。它能碰到你的 Vercel environment variables，所以可以接上資料庫。

[8:12](https://www.youtube.com/watch?v=wrRsHlhpubY&t=492s) 那個「居然能用」的洞察，是因為人在現場才撞上的，而且巧合到他覺得荒唐：模型很會 Tailwind。Tailwind 把 CSS 寫在 class 裡，每個元素都有對應 class，比較像還能維持的 inline CSS。當時 OpenAI 領先，模型有很長一段時間的資料截止，他記得大約是 2021 年 12 月。巧合是 Tailwind 那時已經存在、已經流行，但還沒有今天這麼流行，訓練資料卻夠讓模型做得好。那個時期的模型很不會分開寫 CSS 再寫對的 HTML，方向反過來也不行；收成同一包、用 Tailwind 寫在 HTML 裡就很好。網頁生成從很爛，變成 Tailwind 生成其實很好。那就是從「這是垃圾」到「這會成一件事」的階梯。

[10:03](https://www.youtube.com/watch?v=wrRsHlhpubY&t=603s) Dion 問訓練資料的甜蜜點：太大眾會不會只學到平庸的平均，早期採用者寫的會不會更好，全新的東西則根本不在資料裡，會不會出現 king maker。Malte 說有一種可能的未來是創新變少：AI 選好了自己的那一套，如果人不再自己寫真正的 code，它就學不到新東西。

## 機率世界裡的介面

[10:16](https://www.youtube.com/watch?v=wrRsHlhpubY&t=616s) Dion 記得早期 v0 一個 prompt 會給好幾個版本當起點。他覺得 LLM 本來就會給選項，也想到 Google 的十個藍色連結可以藏住很多錯：第二名很好，對人就是好結果；Google Assistant 或 Alexa 只回一個、又不完美，信任就掉了。Malte 說這些選擇也跟著模型品質、人怎麼下 prompt、以及 multimodal 在變。v0 出來時 multimodal 還不太算一回事，不能上傳設計稿、不能說「做成這個，但抓這個感覺」。現在這對 v0 是很好的 prompt 手法。當時人只會說「我要一個給某件事的 dashboard」。你想加一點創意，又不知道他們要什麼，所以做完整的幾個版本、希望其中一個好，是有幫助的。

[11:43](https://www.youtube.com/watch?v=wrRsHlhpubY&t=703s) Dion 補一個自己做過的工具：他以為開發者用過 ChatGPT 就會聊下去，很多人卻每次開新對話、從零做 zero-shot。在每則 chat 底下加一個追問，才教會人把需求說開、也才能協作。Malte 說一切變得很快，而且會改掉產品該建什麼；競爭多，不撿起最新技術，別人馬上就蓋過你。

## AI SDK：一點點抽象，加上 UI 和 AI 的翻譯

[12:29](https://www.youtube.com/watch?v=wrRsHlhpubY&t=749s) Dion 提到他印象中最近有一次 4.0。字幕裡 Malte 沒有確認版本號，直接講 SDK 在高階做兩件事。第一件是各家 model API 的抽象層，重點是把沒人想自己寫的 streaming code 做完。他們一直在加 JSON forcing、tool calling，以及模型之間的對齊：某個模型原生支援的東西另一個沒有，透過 AI SDK 仍可切換，因為露出來的 API 相同，底下實作可以差很多。他把它比成 1990 年代資料庫的 JDBC，不是 ORM。這一層只是說有一種方式和資料庫說話；對 Anthropic 或 OpenAI 說話，走的是同一條。

[13:43](https://www.youtube.com/watch?v=wrRsHlhpubY&t=823s) 第二件他們大力投資的，是把 UI 和 AI 接起來。名字有時會混淆，他們叫它 generative UI。他說不要把它想成 v0 在做的那種生成介面。範例是航空公司的 AI：你說要換座位，它回一張座位圖，你選了座位，AI 知道你剛剛做了什麼。UI state、AI state，以及其實不懂這個 UI 的 LLM，三者之間的 marshalling，是 AI SDK 的第二大層。做法有好幾種。在 React 裡元件就是函式，tool call 可以直接回傳 React 元件。最簡單的是問天氣：AI 呼叫 get weather，函式回一個元件，畫出晴天或雲。複雜一點的，變更做完之後你寫一個小函式：使用者選了 seat 17C，就翻譯成「the user selected seat 17c」，LLM 才知道發生什麼，因為它並不真的懂你在 UI 上點了什麼。

[15:21](https://www.youtube.com/watch?v=wrRsHlhpubY&t=921s) Dion 把 JDBC 再推一步：換 driver 不代表任意資料庫都能跑同一份 SQL，換 OpenAI 和 Anthropic 也不保證能力或結果一樣。Malte 說自己的學習有點意外。SQL 幾乎相同，不去最暗的角落可以走很遠。真實應用裡，有人花幾個月把 prompt 微調到能處理各種邊界。換模型不是小事，但比他預期容易。理想做法是有 evals 告訴你做得如何，再迭代。就算沒那麼講究，看起來很嚇人，最後這些模型也收斂到夠接近，切換是一個選項。Dion 說那就不必怕從 OpenAI 換到 Anthropic 會浪費全部 prompt 工程；若他比較喜歡 Sonnet 3.5 的感覺，可以早點換、少痛一點。

## Evals、T 型，以及沒公開的文件

[17:23](https://www.youtube.com/watch?v=wrRsHlhpubY&t=1043s) Dion 請他講 eval driven development。Malte 做過搜尋，Google 就是靠 evals，而且是人評的。他談 Google 的營運開支：資料中心大多是資本支出，電費得付；但他在那裡時，很大一筆錢花在人，對數百、數千筆查詢的搜尋結果做並排評分，哪個更好、也許為什麼。這套大致能搬到 LLM。大差別是現在可以用 LLM 來評，而且它們很會：模型做了一件事，你一提它就會說對、你這麼一說就對了。你知道答案時，很容易請一個 LLM 給另一個 LLM 打分。於是可以自動化，基本上像 unit tests，但因為有 LLM，它很慢，你得退一步。他覺得真正新的東西總是這樣。他不想多講 Google，但有很長一段時間，公司做的 Android app 完全沒有自動化測試，而那些是十億級使用者的產品。現在這階段大家知道需要 evals，但它們比 Android 的 unit tests 難做、不快。他們用 Braintrust，是滿意的客戶。和 AI SDK 一樣，Braintrust 沒有強到規定你怎麼做，也還不是走完 onboarding 精靈就結束的完整 SaaS。你得自己鑽進去摸。

[19:46](https://www.youtube.com/watch?v=wrRsHlhpubY&t=1186s) 談未來的開發者，他說 full stack developer 會變得更真，而且很像 T 型：你在一件事上深，AI 幫你到其他領域搞清楚。v0 對他本人就是例子。做了 30 年，他沒有從 Figma 檔做出網頁的技能，會調 CSS，不能從零開始。v0 可以。結果可能不完美，但他有足夠能力再調。他覺得讓人走進自己不自在的領域，幾乎一律是好事。Dion 說有時開發者覺得它只是 junior developer；就算只是 junior，那也是什麼都會的 junior，而且其實沒那麼 junior，還有完美的 recall。Malte 說有一件今天還不是產品、但他看得到的用途是 incident analysis：我知道壞了，為什麼可能壞。幾乎可以肯定類似的問題發生過，人不如它會對模式，而它的 recall 非常好。

[21:49](https://www.youtube.com/watch?v=wrRsHlhpubY&t=1309s) 有人怕跟花幾十億做基礎模型的 FAANG 競爭，自己是不是只能做薄薄一層。他很樂觀，說自己的多頭論點有兩個角度；字幕裡展開的是模型商品化這一支。若不看更遠的未來，現在 Google、Anthropic、OpenAI、Facebook 的模型本質上一樣好，會往下把自己的產品做到盡可能便宜，呼叫也會更便宜。要在上面做出好產品，需要更多資料。他覺得人低估了自己碰得到多少專有資料。例子是 HVAC：大家都需要，也有文件，但現在只給認證安裝人員，因為很難讀。你甚至不必創新 UX，做一個 AI chatbot，用已經寫好、從未公開的同一份文件，給出 ELI5 的答案。ChatGPT 沒吃過這些。這是相對有差異的產品。他不是說你會以此和 OpenAI 競爭，而是你加的價值，通用 chatbot 做不到，除非走一條很寬的平台策略；他不說他們沒在試，但那個角度他們還不太成功。

[23:42](https://www.youtube.com/watch?v=wrRsHlhpubY&t=1422s) 最後問 AI 對開放 web 和 web 開發者是幫助還是傷害。他覺得有趣的是，舊金山的 AI 新創熱大約一年半前開始之後，大家趕著把東西做出來，沒有人有時間做原生 app。一件你還不知道好不好、兩週後可能因為新模型就丟掉的東西，沒有人考慮做三個版本。現在才開始有人說：消費端的產品成了，去做原生 app。他認為這強力示範了 web 作為迭代、把東西送出去的媒介有多好，也改了很多人對優先順序的看法。他不是反原生，但那是他有了 product market fit、事情稍微安定之後才做的第三件事。一個短暫、零摩擦、讓所有人站到所有人面前的平台，價值就在這裡。
