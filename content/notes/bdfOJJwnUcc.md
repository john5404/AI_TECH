# Wiring up your AI with Breadboard by Dimitri Glazkov

Dimitri 在 Google 做開源專案 Breadboard。片長約 32 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。現場幾乎是一邊接線一邊跑。字幕有幾段店名和輸出沒聽清，下面只寫他口頭確認過的結果。

- 原片：[YouTube](https://www.youtube.com/watch?v=bdfOJJwnUcc)

## 一句話

他不喜歡 prompt engineering 這個詞。Model 上面那一層，是把智慧放進去的手藝，不是再灌一次資訊。LLM 已經有幾十億個參數組成的知識消防栓。Breadboard 上他從一個 prompt 長出一套多步驟系統：先設計 podcast 的場面，再做有根據的研究，再寫逐字稿，再生成封面。可預測的客服遲早會被優化完。他興奮的是那團擴散開來的好結果，以及把某個人的方法系統化之後，看出人自己看不到的東西。

## 要給的是怎麼挑，不是知識本身

[0:28](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=28s) 他要講的是 model 正上方：怎麼讓 model 做我們要的事。他寧願叫它把智慧賦予 LLM 的藝術和手藝。重點是過程的 how，不是 what。教孩子在 YouTube 時代寫程式，學習方式這十年已經岔開。資訊到處都是，不必再把資訊灌給孩子，要教的是怎麼挑：什麼重要、什麼該忽略、什麼是寶石。LLM 也一樣。參數裡技術上什麼都存了，它們仍需要我們看事情的方式，才能追目標、完成任務。

他打開 Breadboard，要做「從題目生成 podcast」。先放一個 model，prompt 寫 generate a podcast based on this topic，把題目餵進去。題目是 Brownian motion。跑出來有開場音樂、host、音效、guest，他說還行，但很泛，不是要的。

[3:36](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=216s) 他加一條 system instruction：你是 podcast transcript writer。他把 model 裡那團知識想成黏土，不要想成堆肥。工作是看它生出什麼，再塑成要的形狀：提醒它已有的知識、把沒接上的點接上、補每個 model 自己的盲點。這是一輪一輪的發現。他常塞的一句是：你是團隊的一員，不要跟我聊天，直接交工作成果。再跑一次，出現一個名叫 science snacks 的 podcast，讀下去仍然很簡單。

## 先想像場面，再寫逐字稿

[5:00](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=300s) Podcast 有趣，是因為主持人之間有事情在發生。他不要自己寫死 Bob 和 Jill、誰累誰暴躁。再放一個 model，system instruction 是：你是創意寫作者，工作成果是你想像出來的、很具體的 podcast 場面，討論 context 裡的資料。這個元件改名叫 design podcast setting。它要去戳 LLM 裡對的那一塊：好的 podcast 通常有張力，兩位主持人有名字、有怪癖、有長處和短處，而不是泛稱。

[8:01](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=481s) 現在有兩段。題目進去，先設計場面，再把場面和題目一起交給寫逐字稿的那一步。Brownian motion 再跑，場面裡出現 Anna 和 Benny。他描述他們之間有張力、有 exasperation，是在對話，不再是一段空話。他說這像是把智慧放進了系統：寫之前，先把場面想像成獨立的一步，寫的時候像從這份原料重新開始。

[9:45](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=585s) 有些問題的好結果是一團很緊的 point cloud，你要正中靶心。客服就是這種：結果得相當可預測，又要有彈性。也有很多問題，好結果是散開的，有趣的東西在邊緣。主持人之間的張力會讓 podcast 不無聊，產出可能有點不尋常。多 prompt 的 AI 系統擅長收穫那團擴散空間裡的價值。寫歌、做音樂、任何低風險又想讓人高興的創作，系統會忽然很在行。

## 推理不是天生的，研究要接地

[11:08](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=668s) 再加一個 researcher。參數裡已經有 Brownian motion 和 podcast 的知識，他更想要有根據的研究。他認為推理不是人類天生就會的。人類沒有推理的時間，比有推理的時間長得多。推理是相當現代的發明，是科學或技術上的突破：把問題拆成任務，一步一步想，把複雜的東西變成能處理的東西。前一位講者提過，這可以教給 LLM，因為它是學校或父母教的，不是本能。

[13:03](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=783s) Researcher 的工作是用題目產出之後要拿來做 podcast 的原始研究，盡量找相關資訊。每次只看目前的對話，想下一步。他問兩個問題：回頭看對話，我找完了嗎，有三到五筆結果就算完成；然後給一個 response，內容是想法，用白話寫下一步要做什麼。再叫它呼叫工具。他接上搜尋 Wikipedia、Google custom search、抓網頁內容、Google Places API，另外一個工具是做完就呼叫它，語法上會多出一個 output。Prompt 只有一句：仔細想，決定下一步。

迴圈接回自己。這是多步研究，但每次只做一步，上一步的結果留在 context 裡。沒做完就繼續研究，做完才去寫逐字稿。他換了一個自己喜歡的店當題目，字幕聽成 I sandwiches、love and sandwiches，沒有再講 Brownian motion。系統照常設計場面，然後做了兩次研究，呼叫工具，回到逐字稿。節目名字幕聽成 between the bread。他沒告訴它店的全貌，它自己上網搜，還找到創辦人開業的資訊。他再丟一個可能很新、參數知識裡還沒有的題目：Simon Willison。在 Breadboard 裡不必想 function call 的細節，把點接上就會跑。做出來的是：先做有根據的研究，再依設計好的場面寫逐字稿。

## 封面，以及把智慧做成系統

[19:13](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=1153s) 他不打算停。好的 podcast 每集有封面。又一個 model，專門寫 text-to-image 的 prompt：給定場面和題目，寫出封面用的 prompt。他口頭補，可以有點俗、有點業餘，節目名稱用大字。Topic 和 setting 接進去當參數。圖像他用自己剛做的 Ideogram 元件，字幕聽成 IDE diagram。他說 DALL-E 不錯，但他更喜歡 Ideogram 的美學。再用一個叫 Content 的東西做模板，把圖和逐字稿拼成輸出。同一家店再跑一次。生圖要等。出來的不只是逐字稿，而是可以分享的一整集：人在說話、有打斷、有張力。畫面細節字幕沒有再描述。

[23:09](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=1389s) 他反問：如果 prompt engineering 是賦予智慧的手藝，你有什麼智慧可以放進 LLM，或者你認不認識願意把智慧交出來的人。這團擴散空間的用處，是智慧可以嵌進 AI 系統，按題目把智慧系統化。這個系統能生 podcast，另一個可以很會做問題分析、商業研究，或 superforecasting。你要找到方法，找到 how，再用一串 prompt 放進 LLM。他說英文和哲學主修，可能比工程師更有位置，因為他們有世界怎麼運作的智慧，更多人可以透過系統用到那份智慧。

可預測的客服任務我們會釘死、會優化到爬完。讓他睡不著的是能預見下一隻 black swan 或下一場經濟災難、幫人看見自己看不見的東西的那些系統。把 LLM 的隨機性和什麼都知道，接上智慧，帶出沒見過的東西。一個問題給多個人、多個 persona。像 Deloitte 那樣的公司會花很多錢，通常只拿到三、四份分析。字幕把名字聽成 deoe。有了 LLM 可以做一千份，再讓 LLM 篩，找出沒被預測到、但值得看的結果。

## 問答：接進後端，以及什麼時候不要用

[26:19](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=1579s) 有人問，工程師能不能把 board 當服務，接到自己的後端，前端自己做。他說這就是 Breadboard 的方向。他們不想要你摸出 AI 系統的 pattern 之後，再重寫一次。今天已有 board server：上面每個 board 都有 API endpoint，變更推進去，endpoint 立刻可用。再往下是很強的 object-capability model，為大量分散式運算設計。他說自己這輩子都在做元件系統。輸入和輸出就是 API，一個是 request，一個是 response。

評測他還不能多說。側邊那條活動會被記成一次 run，每次都存下來。你可以累積一份 run 的資料集，拿來比較，甚至在上面做 hill climbing。

Guy 問智慧、prompt template 和 board server 之外怎麼分享。Board 可以分享成 URL，也可以是 API endpoint，還可以變成另一個元件。他剛拿出來的 Ideogram，就是他自己做的一小塊 board。他的興趣是 composability。Breadboard 裡他們說 everything is turtles all the way down：一切由 board 建成，board 由 capabilities 建成。Capabilities 是很底層的東西，例如從網路上 fetch，或讀 secret store。

[30:16](https://www.youtube.com/watch?v=bdfOJJwnUcc&t=1816s) 有人問除了創作，有沒有人拿它做技術工作、當 workflow engine。他承認自己偏向那團擴散的 point cloud。也有人把範圍釘死，只要精確的機械任務。他的建議是：如果你不需要反覆改、搬動、折騰，Breadboard 大概不適合，你已經知道要做什麼，寫 code 就好。它的強項是那一段高度迭代、搞清楚怎麼把某種智慧放進系統的過程。那份智慧不必是創作，可以非常技術。試紙是：我是不是得大量改 prompt，才能弄懂它怎麼運作。
