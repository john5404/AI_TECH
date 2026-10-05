# Going from v0 to vInfinity with AI and Malte Ubl of Vercel

主持 Dion 在灣區，看著 Salesforce Tower，訪問 Vercel CTO Malte Ubl（結尾字幕 molter）。片長 30 分 29 秒，英文自動字幕。Vercel、v0 常被聽成 versel、vzer。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=pPY_bwuS9mo)

## 一句話

Malte 加入 Vercel 時這波 LLM 還沒爆發，ChatGPT 讓他確定事情會發生。公司的位置很自然：做 AI 應用的低階工具 AI SDK，以及幫人把前端專案開起來的 v0。真正的轉折不是「LLM 會吐 HTML」，而是當時的模型意外地很會寫 Tailwind。後面他談換 model 比想像中容易、evals 慢但能用 LLM 評分，以及小團隊真正的優勢是別人沒看過的資料。

## 他們剛好站在 developer experience 裡

[1:25](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=85s) 他加入快三年，大約兩年又三個季度，是 2022 年初，這件事還沒發生。他從 Google 來。Sundar（字幕 Sunder）大約 2018 年把公司宣佈成 AI first，內部已經有人被這些系統變好的速度搞混，所以他有心理準備。接著和大家一樣：試了 ChatGPT，覺得就是這個，事情會發生。

[2:22](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=142s) 他進公司的第一個專案，是把 function execution 基礎設施改成按 net CPU 計（字幕如此，沒有再解釋產品名）。理由很多。等到一分鐘的 AI API call 出現，手上剛好有很擅長這件事的產品，是競爭優勢。他說那是運氣，改完的時間點幾乎就是大家突然想這樣做的時候。

[3:03](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=183s) 他們在更廣的 developer experience 裡，他認為這裡是進階 AI 轉型的早期採用者。答案讓他覺得跟原本做的事是同一件事。他們是 framework 公司，做 Next.js，也支援其他 JavaScript framework（其中一個字幕聽成 SP）。所以該做一個建 AI 應用的 framework。但別家的東西感覺很像完整 framework，而當時沒有人知道人們要做什麼應用，framework 還太早。AI SDK 是你會需要的低階工具，不規定你怎麼做。在 TypeScript 社群裡很成功。第二個角度是 v0：幫人開始做前端、把專案踢出去，並且當他們支援的那些 framework 的 expert system。

## v0 的解鎖是 Tailwind，介面則來回改

[4:41](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=281s) v0 迭代過很多次。一開始大家的想法很直：ChatGPT 是 LLM，HTML 只是文字，所以該讓它做網頁。大約一年半前這樣做，結果又醜又不能用。舊金山有幾個人在同一間房間裡 hack。有人舉手說做好了，AI 做出來的網頁很好看。他事後發現那是簡單的部分。把開發者真的用得懂的體驗做出來，花了不少迭代。他們從改一個 chatbot 開始，出貨時變成很視覺的東西；大約一年後又走回比較像 chat 的介面。他承認還在找對的 UX。訪談前一天他們發了一個大版本：v0 可以做完整應用，在 chat 裡迭代時有即時預覽，可以部署到 production，能讀 Vercel 的 environment variable，把資料庫接上。

[7:01](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=421s) 那個「它會動」的洞察是：AI 很會 Tailwind。Tailwind 把 CSS 寫成 class，每個樣式有對應的 class，像一種比較能維護的 inline CSS。當時 OpenAI 領先，模型的資料截止他記得大約是 2021 年 12 月。巧合是 Tailwind 那時已經存在、有一定流行度，訓練資料夠它學好，但還沒有今天這麼紅。那個時期的模型很不會分開寫 CSS 和 HTML，兩邊對不起來；收成同一包就可以一次做好。HTML 生成很差，HTML 裡的 Tailwind 生成很好。這是從「這是垃圾」走到「這會成為一件事」的階梯。

[8:41](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=521s) Dion 問資料的甜蜜點：太大眾會被平均成普普通通，早期採用者寫的 code 可能更好，全新的東西則訓練資料是空的，會不會出現 king maker。Malte 說有一種可能的未來是創新變少：AI 選定了自己的東西，若人們不再自己寫正當的 code，它就學不到新的。

[9:44](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=584s) Dion 記得早期 v0 一次給好幾個版本。他有 Google 十個藍連結的 PTSD：好結果排第二，對人仍然很好；Google Assistant 或 Alexa 只回一個、又不完美，信任就沒了。Malte 說 v0 出來時 multimodal 還不是一回事，不能上傳設計、叫它抓那個 vibe。那現在是很好的 prompt 方式。當時的人只說「我要一個某某的 dashboard」。你想加一點創意，又不知道他們要什麼，所以做出完整的幾個版本，希望其中一個是好的。Dion 自己做過的工具裡，開發者常常開新 chat、從零 zero-shot；在每段 chat 底下加一個追問，才教會他們往下細修。Malte 說產品側能做什麼、必須做什麼，會被技術改寫；競爭者會立刻蓋過你，如果你沒接上最新的東西。

## AI SDK：同一套呼叫，以及會回傳 UI 的 tool

[12:36](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=756s) Dion 記得 AI SDK 最近有一次他認為是 4.0 的發布。Malte 說高階上有兩件事。一是各家 model API 的抽象，重點是把沒有人想自己寫的 streaming 做掉，再加上 JSON forcing、tool calling，以及模型之間的對齊。某個模型原生支援的能力，另一個沒有；走 SDK 仍可互換，因為露出的 API 相同，底層實作可以差很多。他把它比成 1990 年代的 JDBC，這一層不是 ORM。跟資料庫說話的方式固定了，Anthropic 和 OpenAI 看起來就一樣。

[14:13](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=853s) 另一塊他們重押的是把 UI 和 AI 接起來，有時叫 generative UI。這不是 v0 那種生成介面。範例是聯合航空的 AI：你要換座位，它回一張座位圖，你點了一個位子，AI 知道你剛做了什麼。UI state、AI state，以及其實不懂這個 UI 的 LLM，三者之間的 marshalling，是 SDK 的第二層。做法有好幾種。在 React 裡 component 就是函式，可以從 tool call 直接回傳 React component。問天氣時，AI 呼叫 get weather，回傳的是顯示太陽或雲的 component。更複雜的情況要自己寫一小段翻譯：使用者選了 seat 17C，函式把它說成「the user selected seat 17C」，LLM 才知道發生什麼，因為它不懂你點了畫面的哪裡。

[16:24](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=984s) Dion 把比喻接回去：換 JDBC driver 卻在寫 T-SQL，不能指到任意資料庫就動；換 OpenAI 和 Anthropic 也不保證能力相同。Malte 說實際學習跟他預期不一樣，而 JDBC 的比喻剛好。SQL 幾乎一樣，只要不走進語言最暗的角落。他說的是真的應用：有人花幾個月把 prompt 調到能處理各種邊緣情況。換 model 不是小事，但比他預期容易。理想是用 eval 告訴你做得如何再迭代；就算沒那麼講究，這些模型也收斂到換得動。Dion 說那就可以比較早從一個自己喜歡手感的 Sonnet 3.5 換過去。

## Evals 很慢；全端、專有文件，和 web 的第一輪

[19:33](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=1173s) 他以前做 search，Google 就是靠 eval，而且是人評的。資料中心大家知道，那主要是 capex，電費還是得付。他在的時候，一大筆錢花在人看搜尋結果、給分數，query 是數百、數千則，並排看哪個更好，有時寫為什麼。這套方法大致能搬到 LLM。大差別是現在可以用 LLM 來評，而且它們很會：模型做了一件事，你一問，它會說對、你一提我就看出來了。你知道答案時，讓一個 LLM 給另一個 LLM 打分很容易。這像 unit test，但因為有 LLM，所以慢，得退一步。他說真正新的東西常常這樣。Google 做過很長一段時間，Android app 沒有自動化測試，那些是十億用戶的產品。現在大家知道 eval 需要，但比 Android 的 unit test 難做。他們用 Braintrust，是滿意的客戶。字幕把「誰比較 opinionated」聽亂了；清楚的是它還不是走完 onboarding wizard 就結束的 SaaS，你得自己鑽進去。

[22:26](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=1346s) 他認為 full stack developer 會變得更真，這和 T-shaped 很像：你在一件事上深，AI 幫你到別的地方弄清楚。v0 對他自己就是例子。他做了 30 年，會調 CSS，但沒有從 Figma 檔做出網頁的技能。v0 做得到。結果可能不完美，他有足夠的能力再調。他覺得讓人走進自己不舒服的領域，幾乎毫無疑問是好事。Dion 說有開發者覺得這只是一個 junior developer；就算是，那也是什麼都會一點的 junior，而且其實沒那麼 junior。Malte 還看到一件今天還沒有、但很適合的事：incident analysis。什麼壞了、為什麼可能壞了。類似問題以前幾乎一定發生過。人的 pattern matching 沒有這麼好，而這東西的 recall 非常強。

[25:15](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=1515s) 面對花幾十億做 foundation model 的公司，他很樂觀，有兩個角度。若不看太遠的未來，Google、Anthropic、OpenAI、Facebook 的模型本質上一樣好，會往下競爭、把呼叫變便宜。要把產品做好，它們需要更多資料。他覺得人們低估自己握有的專有資料。他先想到堆高機，改口用 HVAC（字幕 HV systems），因為比較常見、大家都需要。文件現在只給認證安裝人員，因為很難讀。你甚至不用創新 UX，做一個 AI chatbot，用已經寫好、從未公開的文件回答，像對五歲小孩解釋。ChatGPT 沒吃過這些。這是相對有差異的產品。他不是說這樣就能跟 OpenAI 競爭，而是通用 chatbot 做不到，除非走很廣的平台策略。那些公司在試，這個角度上還沒有很成功。中途他的手機因為 Google 自己開講，那段字幕很碎，沒有形成另一個論點。

[28:18](https://www.youtube.com/watch?v=pPY_bwuS9mo&t=1698s) 兩人都在開放 web 上待很久。他覺得有趣的是舊金山 AI 新創潮，大約一年半前，趕著把東西送出去，沒有人有時間做 native app。一件你還不知道好不好、兩週後因為新模型可能丟掉的東西，沒有人考慮做三個版本。現在開始有人說消費端產品成了，來做 native app。但那一輪強力示範了 web 作為迭代、把東西送出去的媒介。他不是反 native。有了 product-market fit、事情稍微安定之後，native 才是他做的第三件事。一個短暫、零摩擦、讓所有人站到所有人面前的平台，價值就在這裡。
