# Context Is Eating Software Development

Simon Maple 和 Guy Podjarny 在 AI Native Dev 這集對談。片長 30 分 35 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Guy 的姓聽歪，把 tessl.io 聽成 testal.io，把 Opus 4.6 聽成 Opus 46。下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=z6mgrQCg1NM)

## 一句話

Agentic development 不是把 coding 加快而已。它 nondeterministic、圍著 intent 轉、而且快到人來不及在出事時插手。Guy 認為手上的鎚子是 context：LLM 是無狀態機器，你送進去的字就是對齊、制度知識、以及你能管住 agent 的方式。Context 要像軟體一樣開發：寫下來、eval、分發、觀察，再繞回來。他們把這條 loop 叫做 context development life cycle，不確定這個縮寫會不會留下。

## 六個挑戰，前三個是主軸

[2:34](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=154s) Simon 把問題攤開：agentic development 只是用 agent 寫得更快，還是開發實務要換一套。Guy 先講團隊層的三個主挑戰。

第一是 non-deterministic。我們習慣 build 編過一次就會再編過；「在我電腦上可以」是例外，其餘大致確定。可重複的流程變難做，整套考量就不同。

第二是圍著 intent，不圍著 code。他們從一開始就說開發會變成 spec-centric，code 會變成可丟棄的。兩年前這比較有爭議，現在仍不是人人同意，但他覺得已經清楚：開發錨在你想做什麼、以及約束。要處理的是這些 intent 的片段怎麼寫、怎麼強制。

第三是速度，而且是倍率。DevOps 出現時，人找出問題、介入、預防的流程就碎了，才有 continuous process。現在又快了一到兩個數量級。不能再靠「注意到事情偏了再改」。一個人可以生產到別人很難監督。

[5:09](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=309s) 他接著加三個，並說這六個也不是完整清單。LLM 和 agent 偏向重寫，不偏向重用。寫軟體比以前便宜，有些地方重用沒那麼要緊；但該呼叫 library 的函式時，它選擇自己實作，你就不能升級或修那塊功能，還會多出新 bug。有些人也有這個偏向，在模型上則非常明顯。

第二，它們永遠有一點過期。依訓練方式，知識至少比上一次訓練舊幾個月。

第三，先便宜、後變貴。便宜是因為同樣的東西用少很多人力、快很多就能做出來。用起來之後，他舉當時的頂端模型：Opus 4.6 的 fast mode 是 2.5 倍速度、6 倍成本，帳會累上去。從省錢變成一筆要管的支出。人的支出知道怎麼管，雇用、地點都有辦法。Agent 的支出該怎麼管，還是問題。

## Context 是鎚子，loop 像 DevOps

[7:19](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=439s) Simon 猜解法是 context。Guy 承認。有些挑戰是人的，得另外處理。他看這些釘子，手上的鎚子是 context。LLM 最後是無狀態機器：送進一批 context，他說它算出權重、決定下一批字。能管的就是送進去的那些字。那既是人與人之間的對齊、制度知識怎麼留下、團隊和生態系怎麼一起工作，也是你對 LLM 說話的方式。管一個團隊的工具是溝通：你回應什麼、怎麼回應，就是在激勵行為。所以 agentic development 的核心能力是 context management。

載入方式他分成幾種，並說以後還會變。Rules 是你明確、用力推進去的。Skills 是提示給 agent、讓它自己拉下來的。Docs 是放在那裡、等它需要時去找的。Rules 像人和組織都要遵守的規定。Docs 像參考文件：人不會全部記在腦子裡，但知道去哪裡學。這比較像在幫 agent 做 onboarding。

[10:00](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=600s) 用 context 的關鍵有四步。先寫下你要 agent 做什麼。團隊意見不同，制度知識很多。可以叫 agent 幫忙寫、幫忙改，但人要審、要懂寫了什麼，並在可能性裡選一個。第二是評估 agent 聽得怎樣。他補一句：真正在變的是 model，不是 agent。有的比較會用 tool，小 model 需要更明確的指令，大 model 靠 intelligence。定義之後還要調整你怎麼說，看對象。第三是把話送到該聽到的 agent。第四是看真實世界發生了什麼。Eval 像上線前的測試，是你拿訊息試過的那群對象。觀察則是事後去問結果。Runtime 的伺服器也是 non-deterministic，不能事先斷定它會不會倒，只能監控再回應。Agent 一樣。

這四步是 define、evaluate、distribute、observe，然後再來。不是連續跑完立刻學完。它嵌在現有 workflow 的不同時間點。

[12:25](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=745s) 對開發者，他建議想成 DevOps 那個無限 loop，Simon 說是 8 字形，可以從任何一點進入。偏 dev 的左側：分析現況，你已經知道 codebase、發生過什麼、人想要什麼，這就是 define and capture；再生成文件、做 evaluate。覺得不夠就再分析、再生成。Context 夠好了，就到偏 ops 的一側：分發，類似 deploy；然後真的跑這份 context。啟動這件事不輕，activation 很複雜。接著觀察運行中的系統。觀察帶來新資訊，你會改 synthetic test 去代表真實世界，發現問題，再重新生成 context。

他說這條 loop 需要的東西和開發很像。有 build time、互動式的開發期系統。Eval 像測試，不必涵蓋一切，但要夠代表現實，改動才不會 regress。Runtime 要能規模化，可以抽樣，不必每件都查；要的是統計上成功，不必完美。他們把這想成 context development life cycle，補在 SDLC 旁邊。

## 小 eval 常跑，torture test 等新 model

[15:09](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=909s) Simon 說 eval 快，是因為用的是當下手上的資料，不一定最精準；回饋再把 eval 改得更接近對。Guy 用測試的階梯比：unit、integration、end-to-end，愈往上愈貴、愈難跑。改一條 policy、或一份 library 文件，可能每次都要 eval 那一塊 context。整個 repo 裡一大堆 context、agent 吃不吃得下，這種評估更貴，像 end-to-end，隔一段做一次，不是天天做。一對一的類比未必成立，但會有從輕量、本地，擴到整個系統的 eval。

[16:44](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1004s) 他舉這檔 podcast 的第一位來賓，Anthropic 的 Dez。當時 coding agent 還不太是一回事，他們對自己做的 agent 已有 regression eval，用來知道它有沒有做對；另外有 torture test，是那種很完整的。不是每次改 prompt 都跑 torture test，新 model 來的時候才跑。Guy 說我們也要為進到自己環境的 agent，做出 regression eval 和 torture eval。Simon 覺得 torture test 這個名字比 end-to-end 好。

## 三種要送出去的 context

[17:32](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1052s) 他說這部分是看真實世界之後變最多的。現在看到三種。他道歉說自己老是講三個。

第一種是 policy 和 best practice。安全政策、什麼算好的設計、預算和速度之間怎麼取捨。常常包在 skill 或其他文件裡，不綁某一段 code，應該能在整個組織重用。企業裡它是分層的，就像對人溝通：公司級，事業單位可以稍微覆蓋，某個應用或團隊再更具體。彼此 augment、inherit。他對聽眾裡的 Java 愛好者開了這個繼承的玩笑。這裡的核心是把字寫下來。Eval 時要定義好長什麼樣。「把 code 寫得安全」太寬，要具體。Eval 常常才是在說你那些字到底是什麼意思。沒有先投資 eval，就會把不該優化的東西優化了。然後分發到對的 agent，隨時間更新，並觀察行為。

[19:49](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1189s) 第二種也許最常見：把自己的內部平台寫成文件。自己的 library、計費系統、所有應用都要部署上去的雲端基礎設施。Agent 沒有理由知道這些。除非早期某波 LLM 的權重裡洩漏過，否則不在它的 weights 裡。它有時能自己在 codebase 裡翻出來，但容易錯、貴、沒效率，因為這份資訊會一再需要。用平台的人常常不是建平台的人，錯了也不容易被發現。所以把生態系和技術的知識集中 rollout，非常常見。這裡通常有 source of truth：平台自己的 code，以及使用範例。生成常常可以相當自動。Eval 是為了改動不要 regress。再 rollout 給所有用這個平台的人，然後觀察。這一種還必須維護：library 和平台會變，要有固定流程去更新。

[21:23](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1283s) 第三種是 application context，或 repo 裡的 context。Agentic development 逼人比較有紀律地寫下這個 app 做什麼。否則你叫它改，它走偏了，你不知道偏在哪，因為從來沒有「什麼叫對」的定義。Context 會像軟體一樣腐爛。文件建過，若沒有辦法知道它仍然是好的、沒有 regress、跟上了變化，就不夠。

這條流程從 evaluation 開始。第一個問題是：agent 吃不吃得下我的 codebase？夠小、寫得夠好，也許不需要額外 context。系統變大、團隊變大、決定變得更細，就需要更多支持。做法是拿 repo、回到歷史、抽出有代表性的 commit 或 pull request，把典型工作變成 evaluation scenario。這本身就能看出 agent 在這裡開發得怎樣。從失敗看出該加什麼 context、該拿掉什麼。有些文件 agent 完全懂，留著只是浪費 context。有些地方它一直失敗，不懂某個 type system，或在某一段 code 上反覆出錯，那些才該補 context。補完要確認它拿得到，觀察真實情境，並保持新鮮。Simon 說六個月、一年後，專案看起來會不一樣。

[24:01](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1441s) 每一步的重量隨團隊和應用而變。有的團隊很快、應用夠小，只觀察就夠：看到 context 失敗，寫一段新的，直接 rollout，不做 eval。Eval 要力氣。他認為系統變大之後會後悔。每次改 context，你無從知道有沒有引入問題。新平台、新 model、或想換便宜一點的來跑，也無從知道能不能動，只能上線指望最好，或看 log。先從 eval、觀察或生成開始，都是選擇，順序會變。三種用途裡，這些步驟都會以不同次序重複。

## 同一個 tile，從本地開發用到 incident

[25:28](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1528s) 他們說這套已經做成產品幾個月，和合作對象一起做。業務上叫 agent enablement platform：把 agent onboard 到你的環境，帶上那些 policy 和 practice，然後持續教它、持續改 context。技術上比較像 context 的開發和分發平台，把 CDLC 交出來。Guy 說這個縮寫選得可疑，不確定會不會繼續用。它幫你生成 context、做 eval、從既有知識抽出 evaluation scenario、跑、觀察。你開發並擁有自己的 context，他們再幫你分發。他們說自己是 skills 的 package manager，組織內部和對外都支援。Eval 和 context 分發也要開放給 open source 的 context。

[26:56](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1616s) 他回到根上：agentic development 是新的開發範式，和以往的軟體實質不同，但不是取代 SDLC，而是嵌進 SDLC 的各個地方。同一份 skill，或他們說的 tile，也就是 context 的包裝，會在人本地開發、想讓 agent 成功時被用到；code review 時會再用到；部署時、或 incident review 要弄清發生了什麼、系統怎麼運作時，還是同一份。同一份 context 跨 agent、跨 model。Context 是你要單獨開發的資產。SDLC 現在非常關鍵，過幾年會更接近一個 build system：仍然關鍵、值得投資，但主要由 bot 跑、bot 用。人負責架設和設定，裡面大部分活動是自動化 workflow。

對外他們會大量說 skills。Context 比 skills 寬，skills 目前是人搬來搬去的一個 context 單位，所以他們沿用。術語大概還會再變三四次，那不是重點。CDLC 也許太早，因為它假定那個 C 會留在名字裡。他們的旅程從 specs 開始。Skills、context、tiles、specs，叫什麼不重要。他們要幫人建立、擁有、隨時間開發。他認為這會變成軟體開發組織的核心能力。

[29:26](https://www.youtube.com/watch?v=z6mgrQCg1NM&t=1766s) Simon 說想自己試，可以到 tessl.io：發現、下載使用、也可以發布自己的 context、skills 和 tiles。環境比較大、比較複雜，寫信到 contact@tessl.io。Guy 說自己是在轉述團隊做出來的東西，也謝謝早期使用者和客戶把這些做法刻出來。
