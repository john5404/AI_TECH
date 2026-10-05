# Fireside Chat with Alex Komoroske on the AI Dev Ecosystem

Alex Komoroske 人在 Berkeley，和一位字幕沒有說出名字的主持人做 fireside。片長約 32 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=M5e-FwST9W4)

## 一句話

Komoroske 把 LLM 當成 disruptive innovation：產業還在懸崖外，以為貼一層 AI 就夠。寫軟體的成本掉下去，用 model 執行的成本卻升上來；沒有 scaffolding，你得到的是幾乎免費的爛軟體。Micro app 是現在的甜蜜點，因為人還點得完。怎麼把它們縫成生態，以及安全和隱私能不能讓每個人都改自己的體驗，他認為都還沒有答案。結尾主持人說他的新創叫 Common Tools。

## Compendium，以及 ChatGPT 之前的那幾週

[0:32](https://www.youtube.com/watch?v=M5e-FwST9W4&t=32s) 主持人問 Bits and Bobs 怎麼來的。Alex 講 the compendium，多年來用來整理想法的 web app。公開頁看起來停更很久，他其實每天開著，私人工作筆記一天加幾百則，用 embeddings 找想法的共同處。週末小孩午睡，花幾小時把那週有共鳴的蒸餾出來。最早是向 Clay Bavor 匯報時的練習（字幕聽成 Clay bore）。Bavor 後來和 Brett Taylor 創了 Sierra。每週一寄信：見誰、在做什麼、幾條對方可能有用的想法。到 Stripe 這一段愈寫愈長，先在內部策略讀書會和內部 blog 傳，反思是私人時間做的，後來才公開。文件大約 700 頁，每週再加約 20 頁，慢到別人搜尋時 Google Docs 以為他們在打字，大約一天會建議一次隨機修改。他覺得這大概是 Google Docs 的壓力測試。

[2:34](https://www.youtube.com/watch?v=M5e-FwST9W4&t=154s) 他跟 Google Research 的論文很多年，早期 chatbot 做的事很傻。擊中他的是每年一次的討論：約 12 個人到樹林裡的 Airbnb，談未來十年。有一年是 crypto 和整個社會，下一年是 generative AI，他記得在 ChatGPT 出來前幾週。三天拉線頭，他事後寫 60 頁，寫到覺得這會改變一切，很多變化人還沒看見。幾週後 ChatGPT 像起跑鈴。LLM 不是一陣風，是根本的 disruptive innovation。很多人把它當 sustaining innovation，產業像 Wile E. Coyote 已經跑出懸崖，還說貼一點 AI 就好。它改的是寫軟體、體驗事物，以及一切的成本結構。

## 十分鐘的計牌器，和不會寫程式的朋友

[4:54](https://www.youtube.com/watch?v=M5e-FwST9W4&t=294s) 對他來說，AI native 不是把 AI 塞在舊做法旁邊。擁抱 LLM 是把軟體從 model 的腦子裡拉出來，不像跟另一個人協作，比較像 Tessl（字幕聽成 Tesla）在做的 spec 和設計。紙牌遊戲 Skyjo（字幕聽成 Sky Joe）若能數過的牌，叫牌會更好。他想做一個 web app 記已出的牌、算機率。以前週末要幾小時從零起專案。他用 Anthropic artifacts，10 分鐘：先寫函式、放進去、加 TypeScript 型別，就是他自己會做的步驟。做出來有樣式、undo 和 save。他沒寫 code，只是按順序哄。

[7:00](https://www.youtube.com/watch?v=M5e-FwST9W4&t=420s) 不太技術的朋友想看 AI 寫程式。ChatGPT 給 HTML，Alex 貼到另一個分頁，朋友不懂那一步，迴路慢，有時還得把一小段塞回 code。改成 artifacts 的即時預覽，他離開再回來，朋友做出還算複雜的小玩具，說自己現在是程式設計師了。

[8:20](https://www.youtube.com/watch?v=M5e-FwST9W4&t=500s) 以現在的散佈物理，他預期極度集中的 hyperaggregator，加上很多自己做不了什麼的小玩具。難的是讓 micro app 互相作用、加總。那要另一種 substrate，也是他們在做的。這行假設軟體貴在寫、便宜在跑。用 LLM 執行的 code 不會是未來全部，但會有相當一部分，邊際成本高於零。LLM 又很會幾乎免費地隨寫隨出很爛的軟體。沒有對的結構和 scaffolding，它常常不做你要的事。

[9:40](https://www.youtube.com/watch?v=M5e-FwST9W4&t=580s) Clay Shirky（字幕聽成接近 Shark）大約 2007 年的 Situated Software，原文已下線，他有鏡像。它貼在極特定情境，試算表公式就是。別人看會說又爛又不安全又醜，對寫的人剛好。情境破了就再貼一層。LLM 能幫你寫出剛剛好的尺寸，而不是 one-size-fits-none。

## 青蛙 DNA、centroid，以及需求為什麼省時間

[10:40](https://www.youtube.com/watch?v=M5e-FwST9W4&t=640s) 有人諷刺 micro app 碰不到企業專家的領域。他說 LLM 一定會跨過光譜，Tessl 等人在推上限。過去一年大家講品質，他覺得改掉能問的問題的是 context length。一本厚書的主要主題，RAG 答不了，主題不在單一 embedding。寬的 context 才看得到細模式。用 LLM 建大型軟體還在開頭。LLM 很會翻譯，英文可以成 code。Spec 幾乎是語意本體，code 像編譯結果。C compiler 幾乎總是可信的，初學者才會說它壞了。LLM 會糊，尤其 locality 低、跨檔案、某個詞必須一致。Scaffolding 和慣用法讓它比較停在好答案。主持人說用英文戳出來的步驟留在聊天裡就沒了，人只帶走編譯結果；若那份紀錄是正本，spec 就合理。

[13:20](https://www.youtube.com/watch?v=M5e-FwST9W4&t=800s) 侏羅紀公園：恐龍 DNA 的缺口用青蛙 DNA 補。不給例子，它就用最通用的背景。大家那樣寫的 React 它很強；教學和 Wikipedia 裡切乾淨的演算法它會重現。不典型的大架構、怪的呼叫風格，它開始丟情節。LLM 不會數。深層 JSON 分不清 object 和 array。它擅長見過的小塊；網路上 JSON 愈大愈少，訓練資料呈對數往下掉，又不能數。他說這是 vibes 調得很準的程式設計。主持人問進模型的 React 是不是普通開發者的平均，有沒有又夠多、又磨得很利的資料；全新語言還有沒有機會。Alex 說模仿好到像創新，其實是內插，拉向 centroid，寫作預設企業腔，程式是最基本的 React。Lab 抽的是人覺得有用才傳下去的文字。篩選若愈來愈是這種平均，更難離開 local maxima。沒有強烈意見，它就放進最明顯的答案，你也不攔。主持人在想怎麼把篩選推向「常常通過測試」。

[19:00](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1140s) 先定義需求能省非常多時間。腦子裡的 hyperobject 要向別人序列化，完整序列化是組合問題，再收成高層需求很花時間。人會說帶一點方向就好。後來發現別人沒懂根本的事，走去奇怪角落，整段工作丟掉。他比成沒有 memoization、順序還錯的 dynamic programming，每次計算做 20 次、30 次。需求就是把那個序列化蒸餾成更短、傳得動的版本。

[20:40](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1240s) 看 5 到 10 年，他要的是 AI 幫人的創造力處理無聊、不意外的部分。基礎設施是底層寫一次、給很多人，成本只有一份。LLM 也把枯燥因子化出去。用對了就能做新的事。有人重新寫詩，拿它當夥伴：更好的韻、八個例子、批評草稿，因為連給配偶看都不想先給很爛的版本。同樣容易變被動。工具該讓你想得更用力。

## Model 像電信商，micro app 還縫不起來

[22:30](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1350s) 兩人都做過 web。主持人說行動時代的開放形狀不一樣，keynote 裡有人提過。Alex 把去中心和集中看成 tick tock：新範式開頭開放，後來最佳模式複利，有趣的事做完，能不能存在看兩三家准不准。他希望 AI 把鐘撥回開放。一年半前他擔心資本太重，只有極少數公司訓練和代管，OpenAI 可能直接成 apex aggregator。後來 Anthropic 做出更好的 model，Sonnet 3.5 是他的 daily driver。Gemini 在進步。Zuckerberg 和 Meta 放出頂尖的 open weights，動態被健康地打亂。Model 生產者像電信商：資本重、定價權小、接近商品。一年前他賭的是，把好 model 當成既定條件的公司能做有趣的事；跟大公司搶 frontier 很苦。假設有多個又好又便宜的選項，品質上、成本下，誰贏不重要。

[27:00](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1620s) 主持人拿瀏覽器擴充當售後改裝：想改自己正在用的 StreamYard，不必說服那家公司。Alex 回到 Greasemonkey。朋友經營過 userscripts.org。它很強，也根本不安全。懂的人大概只敢裝 10 個，怕動到 Gmail 或賣資料。他不會叫爸爸去裝。安全和隱私模型要改到人人能一直微調，不能膠帶貼在舊模型上。

[28:44](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1724s) Min 問新手的 micro app 怎麼保證品質和安全。編譯過的 code 至少有不錯機會做對一件事；失敗就把 code 和編譯錯誤丟回去，像自動化 smoke test。難的是語意。Micro app 可以按五個按鈕看對不對，空間不大。愈大愈可能錯，測試就極端重要。先寫 spec，測試也好寫。人不寫測試是因為又慢又痛，感覺跟寫 code 不是同一件事，但它讓你後來走得快。LLM 不會無聊，願意寫煩人的測試，不一定全對，但比較可能在未來抓到錯，叫你進去查。

[30:38](https://www.youtube.com/watch?v=M5e-FwST9W4&t=1838s) Anthony 問把 micro app 串起來的例子，想到 Zapier（字幕聽成 zapia）。他說連第一局都沒進。GitHub Spark、Anthropic artifacts、Vercel 的 v0（字幕聽成 vzer）都有趣，但都是單獨的 micro app，還不一定發佈得出去。Anthropic 能分發 artifact 幾乎是事後想到的。生態發現 micro app 是 LLM 的甜蜜點，還沒想好怎麼縫。主持人說期待再聽到 Common Tools。
