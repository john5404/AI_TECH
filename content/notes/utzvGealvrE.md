# AI's Disruptive Force: Alex Komoroske's Insights

Simon Maple 主持 AI Native Dev，這集重播一場 AI Native DevCon：Dion 和 Alex Komoroske（字幕聽成 Kamaroski）談開發者生態。Alex 人在 Berkeley。片長約 31 分鐘，英文自動字幕。節目由 Tessl 呈現（字幕聽成 Tesla）。錄音當時，2025 年 5 月 13 日的春季場 CFP 和免費報名都還開著，11 月另有一場。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=utzvGealvrE)

## 一句話

Komoroske 把 LLM 看成 disruptive innovation，不是在舊流程旁邊貼一層 AI。軟體變得幾乎免費就能寫出來，但常常很爛，除非有 spec 和 scaffolding；用 LLM 執行的 code，邊際成本又不再是零。他要的是 situated software 和 micro app，以及一個還沒做出來的底層，讓這些小東西能加總。Model 供應則比較像電信商：資本很重、定價權不大，上面才長得出開放生態。

## 破壞式創新，不是在旁邊貼一層

[1:45](https://www.youtube.com/watch?v=utzvGealvrE&t=105s) Dion 問 Bits and Bobs 怎麼來的。Alex 講的是 the compendium，他自己做來整理想法的 web app。公開頁看起來像死掉了，他其實每天開著，私人筆記一天加幾百則，用 embeddings 找想法之間的共同點。週末小孩午睡時花幾小時，把那週有共鳴的蒸餾出來。起點是他向 Clay Bavor 匯報的時候（字幕聽成 Clay Bour）。Bavor 後來和 Brett Taylor 創了 Sierra。每週一寄信：這週見誰、在做什麼、幾條 takeaway。到 Stripe 之後這一段愈寫愈長，先在內部策略讀書會和內部 blog 傳，因為是私人時間做的反思，後來公開。文件大約 700 頁，每週再加約 20 頁，慢到別人搜尋時 Google Docs 以為他們在打字，一天大概會建議一次隨機修改。

[3:43](https://www.youtube.com/watch?v=utzvGealvrE&t=223s) 他追 Google Research 的論文很多年，早期 chatbot 做的事很傻。真正擊中他的是每年一次的討論：約 12 個人在樹林裡的 Airbnb 待幾天，談未來十年。前一年是 crypto 和整個社會，下一年是 generative AI，他記得是 ChatGPT 出來前幾週。三天把線頭拉開，他事後寫了 60 頁，寫的時候覺得這會改變一切，很多變化大家還沒意識到。幾週後 ChatGPT 像起跑鈴。LLM 不是一陣風，是根本的 disruptive innovation，要照那樣行動。很多人把它當 sustaining innovation，像 Wile E. Coyote 已經跑出懸崖，還以為貼一點 AI 就行。它改的是寫軟體的方式、體驗事物的方式，以及所有東西的成本結構。

[5:36](https://www.youtube.com/watch?v=utzvGealvrE&t=336s) 對他來說，AI native 不是把 AI 塞在舊做法旁邊。擁抱 LLM 之後，寫軟體像是把軟體從 model 的腦子裡拉出來，不像跟另一個人協作，比較像 Tessl 在做的 spec 和設計。他舉紙牌遊戲 Skyjo（字幕聽成 Sky Joe）：若能數過的牌，決策會更好。他想做一個小 web app 記已經出過的牌、算機率。以前週末要花幾小時從零開始。他用 Anthropic artifacts，10 分鐘做完：先寫一個函式、放進去、加 TypeScript 型別，順序就是他自己會做的步驟。做出來有樣式、有 undo、有 save。他沒寫 code，只是按對的順序哄出來。

## 幾乎免費的爛軟體，和剛好夠用的軟體

[7:27](https://www.youtube.com/watch?v=utzvGealvrE&t=447s) 一個不太技術的朋友想看 AI 能不能寫程式。他們用 ChatGPT，朋友講需求，Alex 把 HTML 貼到別的分頁。那一步朋友完全不懂，複製貼上很慢，有時還得把一小段手術式塞回去。改成 Anthropic artifacts 的即時預覽之後，Alex 離開 20 分鐘回來，朋友做出一個還算複雜的小玩具，說「那我現在是程式設計師了」。即時性改變了手把手的感覺。

[8:46](https://www.youtube.com/watch?v=utzvGealvrE&t=526s) 以現在的散佈方式，他預期會同時長出極度集中的 hyperaggregator，以及一大堆自己做不了多少事的 micro app。難的是讓這些小 app 互相作用、加總成更大的東西。那需要另一種 substrate，也是他們在做的事之一。

[9:22](https://www.youtube.com/watch?v=utzvGealvrE&t=562s) 這行假設軟體貴在寫、便宜在跑。LLM 兩邊都打亂。用 LLM 執行的 code 不會是未來全部，但會佔相當一部分，邊際成本高於零。同時 LLM 很會幾乎免費、隨點隨寫很爛的軟體。沒有對的結構和 scaffolding，它常常不做你要的事；有了，你會重新想軟體該用在哪。

[10:00](https://www.youtube.com/watch?v=utzvGealvrE&t=600s) 他提到 Clay Shirky（字幕聽成 Clay Shark）大約 2007 年的文章 Situated Software，原文已不在網上，他有一份鏡像。Situated software 貼在極特定的情境，試算表公式就是。別人看會說又爛又不安全又醜，對寫的人卻剛好。情境破掉時，人會再在旁邊貼一層。LLM 幫忙寫之後，可以得到剛剛好的尺寸，而不是現在那種 one-size-fits-none。

## Context 變長之後，spec 才是語意本體

[10:48](https://www.youtube.com/watch?v=utzvGealvrE&t=648s) 有人諷刺 micro app 只是玩具，企業軟體專家碰不到。他說 LLM 一定會跨過整個光譜，Tessl 等人在推上限。過去一年大家講品質提升，他覺得真正改掉能問的問題的是 context length。問一本厚書的主要主題，RAG 做不到，因為主題不在某一個 embedding 裡，得有寬的 context 才看得到細的模式。用 LLM 建大型軟體，還在很前面。

[11:57](https://www.youtube.com/watch?v=utzvGealvrE&t=717s) 他喜歡 Tessl 的地方是 LLM 很會翻譯，英文可以翻成 code。Spec 不只是文件，幾乎是主要的語意；code 像是把 spec 編譯出來。學 C 的人早晚會說 compiler 壞了，然後學會 compiler 幾乎總是可信的。LLM 會糊，最容易糊的是 locality 低、跨很多檔案、某個詞必須到處一致的時候。Scaffolding 和慣用法可以提高它停在好答案上的機會。Dion 的體會是用英文戳出來的步驟留在聊天裡就消失了，人只帶走編譯結果。若那份紀錄才是正本，spec 就說得通。

[13:39](https://www.youtube.com/watch?v=utzvGealvrE&t=819s) 他用侏羅紀公園比喻：恐龍 DNA 的缺口用青蛙 DNA 補上。你不給具體例子，它就用最通用的背景補。大家都那樣寫的 React，它很強；教學和 Wikipedia 裡切得很乾淨的演算法，它也會重現。稍微不典型、呼叫風格怪的大架構，它會開始丟情節。LLM 不會數。深層巢狀 JSON 會搞不清自己在 object 還是 array，因為難計數。它擅長「見過的物件」：網路上的 JSON 尺寸呈對數衰減，愈大愈少訓練資料，又不能數，就跟丟。他說這是 vibes-based programming，只是 vibes 調得很準。

[15:26](https://www.youtube.com/watch?v=utzvGealvrE&t=926s) Dion 問，進模型的 React 多半是普通開發者，不是核心開發者，有沒有一種磨得很利、又有足夠內容的「鯊魚 DNA」。全新語言還有沒有機會被做成主流，品質資料和 golden path 扮演什麼角色。Alex 說 LLM 模仿好到有時像創新，其實是在很寬的人類經驗上內插，會被拉向 centroid，寫作預設是企業腔，程式則是最基本、帶貶義的那種 React。Lab 不是在所有可能存在的文字裡隨機抽，而是抽人類覺得有用、因而傳下去的文字。人在幫它篩。若篩選愈來愈來自這種平均，訊號會掉，更難逃出 local maxima。你對某段 code 沒有強烈意見，它就放進最顯而易見的答案，你也不會攔，於是又多一塊平均的東西。Dion 在想怎麼把篩選往「這套軟體常常通過測試」那邊推。

## 需求是把腦子裡的東西蒸餾成能傳的版本

[18:14](https://www.youtube.com/watch?v=utzvGealvrE&t=1094s) 他說先把需求講清楚能省下非常多時間，最近幾週又再次碰到這個老模式：腦子裡有個 hyperobject，以為大家懂了就可以執行。向別人解釋是序列化，要序列化完整是組合爆炸，再收成更高層的需求，非常花時間。於是人會說先帶一點方向就好。做不好的後果是別人走去奇怪的角落，整段工作丟掉，對方覺得被甩來甩去。他的心智模型是沒有 memoization、順序又錯的 dynamic programming，每次計算做 20 次、30 次。需求流程就是把那個 hyperobject 的序列化，蒸餾成更抽象、更短、能有效傳給別人的版本。

[20:01](https://www.youtube.com/watch?v=utzvGealvrE&t=1201s) 看未來 5 到 10 年，他興奮的是 AI 當人的創造力工具：無聊、不意外的部分執行得快很多。基礎設施的價值是底層寫一次、給很多人用，成本只有一份，把很多人工作裡最無聊的部分因子化出去。LLM 也在做這件事。用對了，它延伸創造力。他聽過有人重新寫詩，把它當發想夥伴：找更好的韻、給八個例子、批評草稿，因為連給配偶看都不想先給很爛的版本。這是選擇。同樣容易變成愈來愈被動。他認為工具應該幫你想得更用力。

## 集中與開放，以及 micro app 還縫不起來

[21:47](https://www.youtube.com/watch?v=utzvGealvrE&t=1307s) 兩人都做過 web platform，喜歡那個開放的時代。Mobile 是另一種開放，Dion 說 Guy 在 keynote 提過。Alex 把去中心和集中看成 tick tock：破壞式範式一開始開放、分散，後來最佳模式被找到，複利優勢讓它集中，有趣的事做完，能不能存在取決於兩三家大公司准不准。他希望 AI 把鐘撥回開放。一年半前他擔心 AI 天生集中：資本太重，只有極少數公司訓練和代管，OpenAI 可能直接變成 apex aggregator，從集中跳到超集中。後來 Anthropic 做出更好的 model，Sonnet 3.5 是他的 daily driver，至少有好幾匹馬。Gemini 在進步。Zuckerberg 和 Meta（字幕聽成 Madi）放出真正頂尖的 open weights，他把這看成健康的打亂。Model 生產者變得像電信商：資本密集、定價權不大、接近商品、選擇很多。對社會有利，因為單一營運者戰略權力沒那麼大，上面可以長開放生態。

[24:31](https://www.youtube.com/watch?v=utzvGealvrE&t=1471s) 他一年前的賭注是：把好 AI 當成既定條件的公司，可以做有趣的事。跟大公司搶 frontier model 非常苦。假設會有競爭、有多個又好又便宜的選項，品質往上、成本往下，誰贏不重要。這個假設現在相當安全，上面的開放生態他覺得很令人興奮。

[25:08](https://www.youtube.com/watch?v=utzvGealvrE&t=1508s) Dion 拿瀏覽器擴充套件當售後改裝：想改自己正在用的 StreamYard，不必說服那家公司，因為那樣無法規模化。Alex 回到 Greasemonkey（字幕聽成 Gree Monkey）那個黃金時期，小腳本可以塞進去。他一個朋友經營過 userscripts.org。問題是根本不安全。就算是懂的人，曲線也就到此：大概只會裝 10 個，因為得信任它們不會動 Gmail 或賣資料。他絕不會叫爸爸去裝。要改安全和隱私模型，讓人可以一直加、每個人都能微調，不能用膠帶貼在現有隱私模型上。

[26:46](https://www.youtube.com/watch?v=utzvGealvrE&t=1606s) Min 問新手做 micro app 怎麼保證品質和安全。他說某些語言編譯過，至少有不錯機會做對一件事；編譯失敗就把 code 和錯誤丟回 LLM，像自動化的 smoke test。難的是語意。Micro app 是甜蜜點，因為你可以按五個按鈕，組合空間不大，看它做不做你要的事。愈大愈可能有錯，測試就極端重要。先寫 spec，測試也比較好寫。人不寫測試，是因為又慢又痛，感覺和寫 code 不是同一件事，但它是後來能走快的原因。LLM 不會無聊，願意寫煩人的測試。不一定完全正確，但比較可能在未來抓到錯，讓你知道該進去查。

[28:33](https://www.youtube.com/watch?v=utzvGealvrE&t=1713s) Anthony 問把 micro app 串起來的最好例子，想到 Zapier（字幕聽成 Zapia）那種 workflow。他說連第一局都還沒進。GitHub Spark、Anthropic artifacts、v0 都有趣，但都是單獨的 micro app，還不一定發佈得出去。Anthropic 能把 artifact 分出去幾乎是事後才想到的，別的常常不能。生態發現 micro app 是 LLM 的甜蜜點，還沒想好一堆 micro app 要怎麼縫。這題還沒有人真正掌握。結尾 Dion 說 Alex 的新創叫 Common Tools。
