# Changing the Developer Documentation UX Workflow using AI with Amara Graham

AI Native Dev 這集請來 Camunda 的 Amara Graham，她是 head of developer experience。片長 32 分鐘，英文自動字幕。主持人沒有在字幕裡報名字。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Camunda 聽成 kunda，把文件上的 AI 工具 Kapa 聽成 Kappa。下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=Ucz9OgnQvVw)

## 一句話

Camunda 的文件要同時服務很淺和很深的人，不能假設進來的人都習慣跟 AI agent 說話。他們在文件站上放了一個對話式 agent，Amara 把它叫做加強版搜尋。她選工具時最在意的是：會引用來源、會說我不知道、不會編出不存在的 URL。文件仍是產品怎麼用的 source of truth，也綁著合約。Agent 不是上線就結束，論壇、舊版產品、不準的貼文都要人定期清。

## 使用者差很多，所以搜尋先變成對話

[1:23](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=83s) Amara 的團隊管文件，也管產品旁邊、比較動手的技術元件：API reference、怎麼用 API、SDK。她說那是產品之後、或貼著產品的工具，開發者會碰到的東西。她從 developer advocate 做起。埋頭開發不適合她，當時在企業環境。她走的是三根柱子：community、advocacy、developer experience。現在人在 developer experience。做了幾年這件事，她說昨天查過，字幕沒有說出年數。

[2:29](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=149s) Camunda 做 process automation 和 orchestration。她先向行銷的 Anya 道歉，說自己會把官方說法講壞。範圍從人要走完的任務清單、核准、兩段式流程、入口網站，一直到完全自動、不經手、接上多個企業或非企業系統。有傳統的視覺化 workflow，看得到流程怎麼走，也有把這些接起來的配線。

[3:51](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=231s) 主要使用者不是單一角色。有傳統軟體工程，有支援平台基礎設施的 DevOps，也有直接做應用、跟引擎互動的人。真實答案是每個人。文件因此要有光譜：有人只要很淺的理解，知道怎麼用到自己的組織；有人要很深的案例，而且要立刻套用。有人剛接觸 Camunda 但很懂 process orchestration，有人則完全陌生。

[6:19](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=379s) 所以不能說開發者一定習慣 early access、bleeding edge，一定懂怎麼跟 AI agent 互動。企業客戶可能是第一次在業務情境裡碰這種東西。他們要的是人願意信任、不會轉頭跑去跟 support 說：文件裡這個幫我找。她看到的行為變化是搜尋：從關鍵字，變成想要一場對話。Agent 要感覺安全。它該是第一輪收集知識或排查，同時要很溫和，因為有人會說：給我真人。

## 它還不夠聰明，但必須會說不知道

[8:24](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=504s) 站上的 agent 是聊天介面。Amara 說它還沒那麼聰明，也沒有做很多她稱為額外的分析來源。她想用的詞是 superpowered search：關鍵字搜尋的下一步。以企業背景來說，安全很重要。它不該去拉瀏覽器歷史這種侵入性的東西。對話裡累積的 context 則應該幫助人在文件裡找到資源。這是在介紹 agent，也是在溫和地帶人離開純關鍵字。

[10:08](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=608s) 主持人提到之前 Glean 的 Tamar：人若知道自己在跟聊天介面說話，答案會比只丟搜尋詞好。Amara 看過差異，依據是 Kapa 後台的分析。使用者很少回報這次對話最後有沒有找到想要的東西。有讚和倒讚。她是從行為推論成不成功。有人用 ChatGPT 那種方式，完整句子、當成人在說話。也有人仍把它當搜尋框用。她覺得有點好笑，因為搜尋框是另外一個、故意分開的體驗。把 agent 當搜尋框，就解鎖不了他們要的價值，但能看出以後人會怎麼用。也許要改位置，或加一段說明：這樣用，會更快找到。

[12:18](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=738s) 成功有兩層：agent 有沒有給出被要求的文件，以及那份文件本身好不好。Kapa 的 dashboard 會標 uncertain。她說至少一個月會看到一次。團隊去看那些話題和對話：是 agent 搞混了，還是使用者一開始就迷路到不知道怎麼把自己拔出來。

[13:25](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=805s) Agent 可以回答「我不知道」。她評估要放上文件的工具時，這點很重要。文件是產品怎麼運作的 source of truth，對齊合約、條款，必須清楚、準確。「我不知道」好在它沒有 hallucinate、沒有編一個會誤導人的方向。它也標出缺口：有人問了我們應該答得了的問題。然後調查。是文件缺口、產品缺口，還是我們知道永遠不會做的事。AI 後端可以加一則特定回答，當短期辦法；若永遠不做，也可以是長期辦法。若人誤解了產品怎麼被行銷，就交給 product management 或 product marketing。那比較是定位，不只是文件。

[15:05](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=905s) 「我不知道」是 Kapa 自己會做的，不是他們再疊的一層。它不會把人轉給真人客服。有些流程會這樣，他們今天沒有。它會把人導向文件裡能自己繼續的地方：社群論壇、傳統的 support 工具，或換一個空間把對話接下去。她覺得使用者常常拿到這個回答就滿意了，自己再挖：也許還沒在 roadmap 上。她自己則做她說的 investigative journalism。內部 Slack 偶爾冒出很像文件裡某個匿名問題的東西，例如客戶在問 roadmap。文件那邊是匿名的，她對不上人，只能自己把點連起來。

## 引用、抽查，以及為 agent 寫文件

[17:32](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1052s) 主持人說 Kapa 能標出資料從哪來。Amara 說她還沒見過它編出 URL，或完全編出一份文件。早期評估時她不願意冒這個險。以他們的客戶、以及她從 support 聽到的互動，那會完全不能接受。她也說這在任何地方都該不能接受，只是技術還早，有風險。她最在意工具會引用來源。需要驗證時就抽查：隨機挑對話點進去。他們的對話常常很短，比較像搜尋，幾個詞、一個答案、人就離開。她假設人拿到了要的，或很快決定沒有。也有較長的來回。她讀那些來回時，看使用者有沒有說這就是我要的，或再要某一塊更具體的資訊，幾乎是看人走過一棵樹。

[19:46](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1186s) 她每個月複查。Dashboard 上有 Kapa 標成 uncertain 的答案，也有使用者的讚、倒讚、問題回報，他們盯得很緊。這些回饋有一部分會影響工具，但大部分是回到她和團隊：這段文字人讀得懂，Kapa 和其他 AI 工具也讀得懂嗎。客戶會用 AI agent 來讀他們的文件，所以 agent 變成又一個要為之寫作的 persona。她聽到的普遍說法是不要太靠 prompt engineering，不是專為 AI agent 消費而寫文件。要放在心上的是：人和 agent 都能解析、都能拿到需要的東西。這幾乎是在強制好的衛生：引用來源、在技術文件各區之間互連。再用人和 Kapa 的互動、以及它怎麼回答，來檢查自己有沒有把資訊放出來。

[21:45](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1305s) 主持人把引用看成信任：沒有一份靜態文件寫規則和流程時，人對 LLM 說「你該這樣做」的信任差很多。Amara 說信任的使用數據是軼事。上線初期她看到人在試：我信不信這個東西，或更廣一點，信不信這種技術。有些是內部員工，不是惡意對抗，是在試它有多準。她靠抽查對話，把它當成又一份她在管的報告：表現如何。沒有專門的信任指標。

## 論壇會說謊，Camunda 7 和 8 不能混

[23:26](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1406s) 工具裡有 source analytics。Kapa 可以用多個來源，不只文件。她要文件繼續當 source of truth，而且是它先去的地方。其他來源包括 status page、論壇、Marketplace、他們的 podcast 逐字稿。社群內容和很長的論壇討論，她要它引用最準的那份。她看它是不是偏愛文件以外的東西，細到特定頁面或論壇的某個區域。她要避開的是：有一個人在某處發洩自己的使用情境，工具讀進去之後說 Camunda 不能做這件事。她說這有點偏執，但她會看。

[25:00](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1500s) 主持人接著問論壇裡的 prompt injection、誤導資料、敏感的使用者資料。Amara 的做法落在來源上：她很小心多加哪些來源。來源設定裡可以選全部拉進來，或只拉一個子集。社群很久了。現在有兩個產品，Camunda 7 和 Camunda 8，兩套 source code。Camunda 7 有很長的歷史和使用案例。Camunda 8 是接下來支援的產品，codebase 完全不同。他們要 agent 分得清。判斷是只引用較新的論壇貼文，並意識到那會拉進多少則。然後再刷新、再檢查這個策略還成不成立。看到不準的貼文，就從 Kapa 的資料集拿掉。這是例行維護。她說你不能部署一個 AI agent 然後放著跑。她不會。要確認它給使用者的是最新、最準的。答案變怪時，要決定是拿掉那個論壇主題、把近期主題整批刷新，還是把「近期」的定義再收緊。

[27:41](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1661s) 使用者資訊不夠、又牽涉多個版本時，這個實作不太會再追問。她不太想說它完全照字面，但它是依你給的資訊盡力回答，然後很快補一句：更多細節請看 Camunda 文件，也許再給一篇它覺得相關的論壇貼文。有時人會回來改問題。把它當加強版搜尋的人，會開始加更多詞。她當天看到的例子是 API 的 parameter：對方要的不只是這個參數是什麼、怎麼用，還要某個程式語言。Kapa 先給一般做法。對方回：可以給我 Spring 的嗎。它就給一段程式：若你有 Spring Boot 應用、用 Camunda，這個參數可以這樣用。她覺得這是在引出使用者多給一點 context，還不是牽著手走完。

[30:12](https://www.youtube.com/watch?v=Ucz9OgnQvVw&t=1812s) 同一個例子裡，Kapa 接著說這段程式是假設的例子，未必適合你的 context，請看官方文件。它把重量放在：這是我認為你要的，請幫我驗證對不對；也請自己做功課，不要把 UI 裡的東西直接貼進程式，它也許不如預期。

後面有畫面要分享 Kapa 的 dashboard，字幕沒有描述那些畫面。Amara 說自己管文件，一開始有點緊張。她覺得現在的工具、不管是 Kapa 還是別的，保障已經不少。人在用，互動很多，她覺得有幫助，也鼓勵同樣管文件的人冒這個險。
