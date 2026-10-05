# Navigating AI for Testing: Insights on Context and Evaluation with Sourcegraph

Simon Maple 訪問 Sourcegraph 的 Rishabh Mehrotra，談 Cody。片長約 52 分鐘，英文自動字幕。字幕把 Sourcegraph 聽成 Source craft，把 Cody 聽成 Codi，把 Tessl 聽成 Tesla。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=ExCpKtFgpHI)

## 一句話

測試不該是寫完一大包程式再看。錯誤會疊。Rishabh 把 coding assistant 看成很多個不同的 ML 功能：自動完成要快，修 bug 和產生 unit test 可以慢，但每一個都要有自己的 evaluation。產業 benchmark 變好，不代表企業 codebase 裡的人更喜歡。人審不完愈來愈多的測試，所以要把有限的時間花在不確定、又關鍵的那幾張。

## 大 codebase，以及一層層被沖掉的模型

[0:14](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=14s) 這集要談模型寫測試需要的 context、generated code 的 evaluation，以及測試該早做還是晚做。Sourcegraph 做了很多年 code search。企業的痛是 big code：他舉美國一間銀行，大約兩三萬名開發者、四萬個 repository。去年推出 Cody，住在 IDE 裡，想讓人更有生產力。他現在帶 AI。之前在消費端做機器學習，Spotify 的推薦、音樂和短影音。博士做搜尋，他說這和 LLM 需要 context 是同一件事。

[1:45](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=105s) 第一篇論文在 2009，大約十五年前，是傳統 NLP，不是 deep learning。他看過幾波：領域專家手刻特徵，embedding 沖掉它們；神經模型沖掉自訂的 topic model；LLM 再沖掉一批 ranker。2010 年代很多博士靠 latent variable model 和 Gibbs sampling 拿學位。他自己早期用 C 寫 sampler，後來才用 Python，不到必要不碰 C。框架把低階複雜度拿走，人去做更高的事。Cody 要拿掉的是苦工，讓人去想架構和有創意的部分。同事裡有人把這說成 Cody 的目標，字幕把名字聽成 biang。

## 自動完成等不了，聊天和測試可以等

[4:03](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=243s) 他不從 coding assistant 講起，從 Spotify 和 Netflix 講。人喜歡推薦，但那不是一個 ranker。每個接觸點是不同的模型、取捨、指標和 evaluation。使用者規模他隨口說到每月大約四億。Cody 也一樣。

[5:25](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=325s) Cody 在 VS Code 或 JetBrains 裡。Autocomplete 量很大：寫一個檔會觸發上百次，喜歡 ghost text 就按 tab。這極端要求延遲。他比成 Google 打字時的查詢建議。Simon 說這很情緒化，效率工具若不能讓人一直 tab，人會生氣到不用。品質要，延遲也要。慢個 400 毫秒人就煩了，寧可改去 code edit 或 chat。

[7:12](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=432s) 延遲依功能而不同。Autocomplete 他要 400 到 500 毫秒內選完。Code edit、code fix：選一段、叫 Cody 修，人可以等一兩秒看 diff，他說也許 3 到 4 秒、大約 3000 毫秒。Chat 要先打完比較複雜的問題，不期待 400 毫秒。Unit test 要蓋到角落、不能漏重要的東西，他願意等很久，不要在幾毫秒內交差。

[8:36](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=516s) Chat 是一顆盒子，裡面可以有上百種意圖，他說這對工程師是惡夢，因為 autocomplete 還能量得出單一功能好不好，chat 用自然語言把很多功能蓋住。設計也就不同。Autocomplete 不會去叫 400 billion 參數的模型。他要的是延遲低、品質夠，所以小模型、再 fine-tune。幾週前他們發過文章：Rust 的細節很多大型語言模型抓不到，可以為 Rust fine-tune，並守住這個功能的延遲。

[10:27](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=627s) 輸出變大，人就願意等。他用課程比喻：學程式不會從 multi-threading 開始。Agent 也還沒到後面的章節，簡單、中等、複雜要分開。另一個軸是左和右。左邊工具住在 IDE，你在開車，它只是協助。右邊是 agent：丟一張 GitHub issue，請它開出 PR。那裡模型要接手，但不是完全自主。CEO Quinn 有一篇談 code 等級的文章，從 level 0 到 level 7，有人發起的、也有 AI 發起的，用來看自主的光譜。Autocomplete 仍是人在開。卡住、任務更複雜時，才給它時間。Context 也跟著變：補一行也許只要本地，或把別的 repo 的相依帶進來。新檔或新函式就要看整個 repository，還可能改另外三個檔。Agent 的影響可以是三個檔、五個變更、兩個 repository。

[13:13](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=793s) 測試也一樣。人一行一行寫、也用 Cody 生成時，會希望測試跟著走，用來確認生成的程式是自己要的。他說錯誤會相乘。寫很長才評，比早點在本地停下來、修掉、再往前差。

## 產業分數上升，使用者指標可以下降

[13:55](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=835s) 他愛 evaluation。博士開始時以為漂亮的圖模型和數學才有影響力，進產業一年就知道不是。你得有指標，知道什麼時候變好。他說的 zero to one，是先有一組真的代表使用方式的資料。新模型出來，人們說 Llama 3 寫程式好，因為 HumanEval 和 pass@1。那組資料是 164 題，例如寫一個 binary search，函式跑過 unit test 就加一分。這是起點，但不是企業裡的用法。銀行裡有兩萬個同事、三萬個 repository，你不是在真空裡寫 binary search。Codebase 被改了十年，相依在別的團隊，函式你沒讀過，語言你 maybe 也不在乎。

[15:29](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=929s) Day zero 可以用 pass@1。他們把 pass@1 提高 10% 到 15%，拿到 Cody 使用者身上，線上指標掉了。他們在寫 offline 和 online 對不上的文章。Context 差太多。每個功能要自己的 evaluation：unit test、completion、edit、chat 都不一樣。做起來不自然。有了之後能不能跨產業、跨使用者再用，是下一題。

[17:04](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1024s) 推薦產品裡他看過：現在每天五千或一萬活躍使用者，多半是早期採用者；一年後可能是十萬、五十萬。早期 A/B 的學習，六個月或一年後不一定還成立。產業之間不同，語言之間反而有同質。前端在不同公司做的事很像，預訓練也看過很多初級流程。Fine-tune 的好處不在那些。Python 的難任務它做得好，Rust 和 MATLAB 的難任務做得不好。企業客戶在 Rust 裡做複雜的事，訓練 Llama 或 Anthropic 的模型時 maybe 沒顧到。Evaluation 讓他們知道哪裡差，再去收公開例子、把模型往那裡推。

[19:18](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1158s) 他用短影音做即時個人化：TikTok 上二十分鐘大約四十支，五分鐘大約十支，前九支你會跳過、按讚或追人，第十一支就可以很個人。Coding assistant 看的是接受率。某些語言、某些用法，建議被接受；另一些很差。那就該拿去訓練或 fine-tune。Simon 問：模型評估變好、建議更準，是不是就可以少靠一點測試。他沒有說可以不測。Unit test 生成本身是高價值、產業必須做對的用例。他在 Spotify 和前公司在意的是不滿意，不是已經滿意的人。少掉不滿意才賺得到錢。Simon 把測試分成幾層：能不能跑、好不好、快不快、使用者開不開心。

## Unit test 是欄杆，覆蓋率不夠

[22:32](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1352s) 獨立的 binary search 他做得出 unit test，程式和測試住在島上。企業和專業開發不是這樣，要在更大的 codebase、很多 repo 裡判斷對不對。Unit test 不是為了讓自己或主管開心、看到覆蓋率。它是不讓壞程式進系統的 guardrail，有點像對抗：一邊想讓壞事發生，一邊要擋住。以前不小心的 bad actor 是開發者，現在還有 AI。他還沒看到不愛 TDD 的人會為完美測試套件而活。覆蓋率低是有原因的。不是每張測試都無聊。無聊的小函式可以交給模型。付款路徑弄錯，又沒有 observability，公司會在一段時間裡損失很多錢，他說到數百萬美元。函式不是一樣重要。若只有兩位 principal、預算有限，關鍵元件的測試要他們寫，或至少由他們審過 agent 寫的。

[25:54](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1554s) 明天會有更多助理在寫程式。對抗設定裡，壞程式可以來自人，也可以來自成千上萬的 agent。愈靠自主的那一端，一次丟給人的內容愈多。Simon 說兩行的 pull request 會有一百則 review 意見，五百行可能一則都沒有。人的認知裝不下每一處變更。用了幾個月還會開始信任系統，這讓他害怕。

[27:57](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1677s) 2015 年的 Alexa 多半只會報天氣。社會用對話助理十年，先問簡單的，答得出來就慢慢問難的，然後信任它去做那些事。Spotify、Netflix 的人對動態也更信任，因為還有出口：不信推薦就去資料庫或搜尋。推薦是推，搜尋是拉。有些人幾乎不搜尋，活在高信任裡。Google 也很少有人翻到第二頁。Unit test 生成一旦被信任，就會接更難的問題，人不再看角落。六個月前的程式、三個月前疊上去的程式，測試 maybe 是 agent 寫的，人參與愈來愈少。基礎若不穩，會出大錯。他的辦法是更認真對待 evaluation。覆蓋率是他過去看 repo 最常見的數字，但不夠：有沒有角落、複雜度、嚴重性。

[31:08](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1868s) 測試的測試，要自動的，也要人。領域專家仍要標。Anthropic 和 OpenAI 在 Scale AI 上花很多錢，Scale AI 最近的估值他說到十億美元，因為要人來標。搜尋可以請使用者標結果對不對。複雜的 Rust 找不到那種 crowdsource。Amazon Mechanical Turk 上的人不存在於這個領域，你也不會用很低的時薪買這種回饋。字幕裡的時薪沒聽清。這不是末日，但是長路，evaluation 會有好幾代。先找出重要函式和嚴重性，再從那個角度看測試生成。

## 一百二十張裡，人這週只看五張

[32:40](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=1960s) 若生出二十張，他希望受信任的工程師至少看一些。那些人的工作不是寫測試，時間有限。這週若生出 120 張，principal 不會看完。也許這週只有兩小時，看得了五張。這就變成機器學習問題：哪五張最該給人。不確定性模型產業做了二十年。他很有把握的可以不給你看，偶爾抽一張確認自己沒看錯，然後學。其餘走資訊最大化：我不知道的給你看。可以一次給五張，也可以給一張、學到東西、再從剩下的 119 張裡選下一張。他在 Spotify 做過子集選擇，有理論保證，規模是每月兩億活躍使用者。這不是一個 LLM 就能解的題。

[34:27](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2067s) 誰來標哪些路徑必須防彈。他不是最適合講現況的人，但看得到訊號：bug 在哪、每次 incident 的嚴重性、漏了哪段程式、人已經為哪裡寫了測試、多久修好。再加上程式裡誰呼叫誰。公司裡有編譯器專家，他點名 Olaf 等，做精確的相依。一個函式進來出去的邊很多，下游就多，可能比較重要。這只是程式。觀察資料是 SEV0、SEV1 這類嚴重錯誤最近幾個月出在哪、之後的機率，以及人把測試時間花在哪。兩層合起來，可以做成對這個 codebase 個人化的模型。問題可以是：若我得在一天前預測明天會冒出的那個錯誤，它會在哪。那是另一個模型，用來指出關鍵元件，再把 unit test 接上去。他比成短影音：剛上傳沒有互動，只能看內容和作者；一小時後上千萬人互動過，就有行為。推薦系統本來就是內容加行為。

[38:50](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2330s) 整合測試的意圖更靠近使用者怎麼用。那些流程也會指出哪些程式重要。今天怎麼開始。他半開玩笑說先用 Cody。他進 Sourcegraph 之前，面試是拿一個開源 codebase 改東西，而不是只聊天，他心理上就先被說服了。實務上先用現成的 unit test 生成，看哪裡行、哪裡不行。Cody 有 custom commands。一個 LLM 功能在他眼裡就是：英文 prompt，加上該帶哪些 context，例如同資料夾的測試、或該知道的相依，再送給模型。Staff engineer 可以做一條更好的指令，在企業裡分享給所有人。要寫得好，還是回到 zero to one：現在哪裡失敗、哪種測試做得成、這個 codebase 哪裡特別。改 prompt，或加一個 context 來源。

[42:04](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2524s) Open Context 是 Quinn 以個人貢獻者開始推、團隊做出的協議。企業裡有太多異質的 context，沒有人能一次接對。你可以為自己加來源，Cody 和其他遵守協議的 agent 都能用。SEV0 這類資料預設沒給 Cody，但可以用 OpenCtx 加進去。五個失敗例子，改 prompt 或改 context 之後開始工作，就是你自己這個目標的 mini zero to one。他討厭空泛地說 AI，寧願說 machine learning，但聽眾吃 AI 這個詞。大家會變成在編排系統的 applied scientist：哪裡好就用，哪裡不好就回饋或改工作流。在 Google 加引號、加加號，就是已經在學這些技巧。領域專家、風險分析、業務助理也一樣。Guardrail 會幫 unit test 補上人會漏的地方。

## 人的眼睛該放在評估上

[45:46](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2746s) 愈自動化，開發者的時間該放哪。他退一步：你有工作是因為有任務要完成。不是因為寫出更好的 unit test 就有薪水。薪水來自做完任務，並且讓以後做同樣的事更輕。若能從五小時變二十分鐘，路徑就是更快變成編排者。Cody 想讓人做創作、不做苦工。技術會往前走，人也會被推到光譜上的某處。有人就是愛寫程式，那也得看技術給到什麼。

[48:06](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2886s) 最高風險是交出去的不是對的解。他把心放在 evaluation 上，想在機器學習產業裡大聲講這件事，不只 Cody。寫好 evaluation 比寫好模型重要，也比找一個更好的 context 來源重要，因為沒有評估就不知道什麼叫更好。沒有評估就是在暗房裡丟飛鏢，有的會運氣落地。在那個世界裡，unit test 和 evaluation 要排在單純寫程式前面。但更上面是任務成功：這一項事情做完了沒有。編排者把 Cody 的 autocomplete 或任何獨立 agent 都當成工具時，評的是任務。

[49:37](https://www.youtube.com/watch?v=ExCpKtFgpHI&t=2977s) 就算假設今天就有 AGI，基礎模型會因上千億、上兆美元變得更聰明、什麼都會，你仍是最知道這個領域目標的人。只有你能定義怎樣叫對、90% 和 92% 差在哪。從 92 到 94 比走到 90 難得多，難度會往上陡。模型再聰明，領域裡它必須被證明的那些細處，得由人講得出來，並做成 guardrail 和 evaluation。六個月後 maybe 會有專門做 unit test 的程式基礎模型，或用 LLM 當 judge。那時人的工作是編排評估：這個角落對了沒有、付款和認證這條不能壞。Human in the loop 的價值在這裡。
