# AI-Powered Documentation: Insights with Omer Rosenbaum, CTO of Swim

片長約 33 分鐘，英文自動字幕。AI Native Dev，由 Tessl 播出。Simon Maple 訪問 Omer Rosenbaum，Swimm 的 CTO 和共同創辦人。字幕把 Swimm 聽成 swim、swimswim，把 Tessl 聽成 Tesla、tessla，把 Snyk 聽成 sneak。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=C9NYb9b_pYs)

## 一句話

人寫文件不是為了擁有文件，是為了把知識交出去。文件和 code 脫鉤之後，人在 zone 裡 ship 完就忘了要改哪一份，寫了也會過時，需要的人還找不到。Swimm 的做法是把 code 的某一段和對應文件耦在一起，用 static analysis 追變更有多嚴重，LLM 負責寫成清楚的話，以及在人腦裡、code 看不出來的理由上把人叫回來。

## 文件有好幾種，真正寫不下的是為什麼

[0:21](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=21s) Omer 的根在資安，從訓練做起，先教資安再教程式。他發現就算有最好的訓練，工程師進一間軟體公司的第一個月仍然很難熟悉那份 codebase、以及這間公司怎麼運作。這個問題一再出現，他先解 onboarding，後來明白知識分享、看懂 codebase，是一直都在的。組織和 codebase 變大之後，有些部分現在團隊裡沒有人真正待過。字幕那句沒有聽全。他說這是軟體業活很久的問題，大家都知道。

[2:16](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=136s) Simon 要先定義 documentation。Omer 說除了少數例外，人不是為了有文件而寫，是為了分享知識給別人讀。文件只是其中一種解法。通常想到的是 README，一份 markdown，講這個 repo 怎麼開始；客戶看的，多半是 API docs，怎麼呼叫、有哪些參數；還有 wiki，高層說明、架構圖、code 裡實際怎麼運作。人把 wiki 留在比較高的層，因為一旦解釋到 code，文件很快就過時。Simon 補：有些東西 code 本身就明顯，塞一堆明顯註解會讓 code 更難讀，對 codebase 是負分。Omer 說 code comments 是很特定的一種文件，有它的位置，但只是很小的子集。人常把文件和註解當成同一件事。

[4:14](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=254s) 公司叫 Swimm，因為他們開始探這個問題時，別人說讓人熟悉 codebase 的方法是丟進深水，sink or swim。他們想幫人 swim。做法是幫組織理解自己的 code：用 code 和 static analysis 自動生文件。他的資安背景在這裡，很多靈感和技術工具從那個世界拿來理解 code、再生成文件。也讓開發者自己寫文件，然後在 code 演進時保持更新、並且好找。目標是讓你花最少時間把知識交給別人：能從 code 生的就生，人只寫只有自己知道的。例如為什麼選這個技術做法、不選另一個沒被實作的；或某個 if 是因為特定客戶要求。這些不管 AI 多好，都無法從 code 讀出來，只在某人腦子裡。他們要在相關的時候把那份知識抽出來。Simon 說，腦子裡的 context 比寫下來的難拿，人一走就沒了，而那往往是以後做決定、做變更管理時最關鍵的。

[6:31](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=391s) Simon 問他自己寫文件是容易、有趣，還是一直拖延。Omer 說近年這對他是很自覺的事，因為他一直在想 Swimm 的使用者會有什麼體驗。他自認是很怪的程式人：喜歡寫文字，也喜歡教，所以寫他對這段 code 知道的事，像在教。他以前不喜歡，因為知道寫出來必然過時。Swimm 解了這件事之後，他開始享受。

## 不更新，是因為文件和 code 不在同一個地方

[7:36](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=456s) 不更新和不寫，要分開。不更新的底層原因是文件和 code 脫鉤。人在 zone 裡寫功能、測試、debug、ship，知道自己動到一份別人以前寫的、或自己以前寫的文件，但就是不記得。不會把組織裡所有文件翻一遍，判斷該不該改。幾乎做不到。

[8:53](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=533s) 一開始不寫，他歸成三件事。好文件很難寫，多數開發者不喜歡寫文字，要想結構、什麼重要什麼不重要，他們寧願寫 code。第二，把時間投在必然過時的東西上很傻，這是他在 Swimm 之前的感覺。第三，就算文件很好、也還是新的，需要的人多半在需要時找不到，因為沒想到要去那裡看。沒人讀、讀到時已過時，何必 bother。

[9:56](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=596s) AI 可以幫這三件，但不是把 codebase 丟給 AI、它就寫完全部文件。那太簡化。平衡很細。它可以幫忙寫、在 code 變時保持更新、在你需要時找到。Simon 認為第一個難點是意識：已經有哪些文件、哪些和我正在改的有關。AI 能吃進大量文字，有機會拿掉這個意識問題。他接著問：它判斷哪一段文件相關、橋接得有多準。

[11:46](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=706s) Omer 說這是他們在 Swimm 設下的第一個任務，而且在 LLM 變成主流之前就開始。做法是把 code 的某些部分和對應的文件部分耦在一起，追那些 code 怎麼變。很瑣碎的變更，內部更新就好。細微的變更，可以自動改，但也許要人核准。Breaking change 則看發生得頻不頻繁；若不多，就趁 pull request 還新鮮時讓人看：這是改之前的文件，這一段變得很劇烈，你該依這張 PR 來改。AI 可以建議現在該寫什麼，人在迴圈裡做有根據的決定。演算法的目標是讓你知道這次改動對上哪一份文件，以及你得不要手動介入，還是交給 AI 更新就夠。Simon 說第二部分會在 YouTube 上示範 Swimm，這份對話裡沒有那段畫面。

[13:54](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=834s) Simon 問 workflow 為什麼是助手式的：是開發者現在就想這樣消化變更，還是模型還沒好到能在背景把文件和功能自動對齊。Omer 說兩者都有，還有第三個：有些變更再好的 AI 也不知道為什麼，得從人腦抽出來。人要能說：我這樣做是因為 product manager 跟客戶談過、對方要求的，我要把這句寫下來。AI 的工作是提示：這裡看不懂你為什麼這樣做，我需要你的輸入。他認為這是健康的協助方式，也是開發者現在比較自在的互動：一次變更一次，像助手。耦得緊也能縮小 context：知道整份文件和周圍相關的 code，但因為追得了 code，就精確知道哪裡變了。結果準很多。

## Static analysis 扛結構，AI 負責說人話

[15:53](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=953s) Simon 提到自己以前在 Snyk，工具裡有 AI，也做 static analysis，問 Swimm 是全靠 AI，還是兩者平衡。Omer 說生文件時很依賴 static analysis。AI 有些事很出色，不是每件事都是。真正理解大型 codebase、把同名但不同實作的函式分開，LLM 沒那麼好。Static analysis 做重活：這是你要的流程，從哪開始、走到哪。再翻成連貫清楚的自然語言，是 AI 擅長的。少呼叫一個試圖理解一切的 AI agent，也更快、更便宜。確定性的分析先做，最後才是 AI 這個原料：變成文件，或用自然語言和人互動。

[17:44](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1064s) AI 變好之後，有些任務可以多交出去，但平衡會留著。實務上是成本和延遲；也是你想控制品質到什麼程度。AI 回得差，你可以一直調，最後仍不確定會發生什麼。確定性的東西可以一次次迭代改好。他覺得可見的未來兩者都要。Simon 說確定性讓你能在 AI 之外驗證，緊的耦合比較能避免 drift。

[18:45](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1125s) 開發者絕大多數想在 IDE 裡、工作流程之中消化這些，零中斷，自然發現要不要改、或有沒有文件能幫上。組織層則通常要強制文件是新的，或至少在你要合併的 pull request 上看得到它動到了哪些文件。這該在 PR 的 CI/CD 裡。Simon 用 Snyk 時期的經驗說：IDE plugin 是人想用才用；PR 是兜底。在 IDE 做了，PR 就不會嚇到；沒做，團隊仍要達到期望的水準。一個人做、其他人沒做，沒有意義，否則還是會 drift。Omer 補，尤其有人用 Vim，不該強迫特定 IDE 或特定 workflow。組織仍想確保文件是新的，或依賴裡不引進漏洞，所以 PR 流程也要能強制。

## 沒人認識的 code，以及寫給 agent 看的文件

[21:33](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1293s) Simon 把自動文件指向 legacy：也許一週前的 code 已經算 legacy；更典型的是當初寫的人都不在了，沒人想改，因為怕改到行為，又沒有文件，連什麼做什麼都不知道。Omer 先講極端：幾十年前的 COBOL、Fortran，新創通常不會選，生產環境仍很多。大型 COBOL 常在 mainframe 上處理金融交易，一個 bug 可能損失幾百萬。寫的人通常已不在公司，痛很大。Legacy 也可以定義成沒人知道的部分，或只有一個人知道、於是變成任何變更的瓶頸。

[23:09](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1389s) 他們主張先自動化能自動化的：分析 codebase。Static analysis 按語言做，求準；上面再加一層與語言無關的演算法，例如排出 codebase 裡最該先解釋的流程。新人該先懂主流程是什麼。這是靜態做的，不吃營運資料。原因是分析要快，而且要能跑在開發者機器上，或至少客戶的網路上，因為 code 通常很敏感。找出有趣的元素，決定第一步該記錄什麼，把能從 code 本身理解的東西放到一份會持續更新的文件上。知識仍有缺口。先給高層：這些元件、這些主流程。人通常不是要把 codebase 從 A 到 Z 讀完，而是手上有任務。給概觀，再用他們的游泳比喻，潛進某個 module 或 feature：找已生成的文件、當場再生，或用 chat 問。Chat 是 AI 發亮的地方。這樣開發者先拿到解這個問題時、能從 code 理解的全部 context；修 bug 或加功能時，再提示他們把新知道的寫進文件，或擴充既有的。

[25:29](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1529s) Simon 問人是用 chat 補文件，還是直接改已經生成的內容。Omer 說人和 chat 互動時會像對任何 AI 助手那樣來回，得到有用的回應，可以按「從這裡建一份文件」，那是草稿，然後在文件編輯器裡改。他們看到人在 chat 裡教 AI「這段再解釋多一點」，但真要寫進文件時，通常是在編輯器裡做。

[26:47](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1607s) 收尾前 Simon 往前看。AI 也在別處，包括生成 code。Code 愈是 AI 寫的，人就愈不懂實作，也不懂專案裡那些細的部分。資訊離開開發者的腦子，或至少變成更高層。那 code 的文件還有沒有意義，如果人不再寫、也不再那麼維護？是不是專案文件會重要得多，因為人和 codebase 更脫節？Omer 同意。若 legacy 的定義是組織裡沒有人知道的 code，那 AI 一寫完，它立刻就是 legacy。中間有一段過渡，code 仍很重要，code 的文件也更重要。等到 AI 寫很多的時候，專案文件會重要得多，而且不只給人。AI 助手可以靠文件生出更好的 code、答得更好。他們在同一份 codebase 上測不同的 AI 助手，有 Swimm 文件和沒有，結果差得驚人。Code completion、生成、chat 問問題都是。有一份把事情講清楚的文件，任何 agent、每個 model 都更容易給出好答案。他說我們正在看到文件的新角色：給 coding assistants、給 AI assistants 的文件。

[29:45](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1785s) Simon 提他跟 Devin 談過，公司名字幕聽成 Dosey，後面把這個 agent 叫做 Devon。它能從文件拉很多 context；文件不存在時就得鑽進 code，可能拉到不該存在、或不是故意的 workaround，再建議使用者不該做的事。過時文件被當成 source of truth，就會誤導，AI 很難分辨。於是 drift 對這些依賴文件的工具會更嚴重。人也因此把 code 稱為 source of truth。他猜 PRD 和 spec 變主流之後，重要的文件會是把人為什麼這樣規定、為什麼做這個決定，從腦子裡拿出來。Omer 說也許要兩種文件：一種是真正的 PRD，一開始想要什麼；另一種是這份 PRD 的 working copy，code 現在長什麼樣、在後來改過的情況和要求下現在做什麼。Working copy 是 code 的當前反映，能幫 AI 懂現在發生什麼。若要懂歷史、為什麼走到這裡，就要追文件的變更，或看原始版本。

[31:44](https://www.youtube.com/watch?v=C9NYb9b_pYs&t=1904s) 這段對話在這裡結束。他們說接下來只在 YouTube 上進畫面，示範助手式的 workflow，以及還沒有文件的專案要怎麼做大規模文件。那些畫面不在這份字幕裡。
