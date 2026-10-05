# Can Claude 3.5 build production-quality apps without us having to write code?

AI Native Dev 的一集，由 Tessl 製作（片頭字幕聽成 Tesla）。片長約 37 分鐘，英文自動字幕。主持人 Simon 請到 Felipe Aguirre（字幕聽成 Filipe agir）。這一集只談經驗。用 Claude 3.5 實際建專案、看 git 流程的畫面，他們說會放在稍後、只在 YouTube 上的下一集。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=yikF4AGen8I)

## 一句話

Felipe 逼自己只用 Claude 的網頁介面，從零做一個他本來不會做的完整產品。AI 寫了 87% 的程式行數。169 個 prompt 裡，28% 算錯誤，他覺得多半是自己沒把規格講清楚。39% 的 prompt 花在寫 product specifications。他的結論不是不用再寫 code。MVP 變得容易很多，production 他還不放心，也不能盲信 LLM。開發者要變成 product owner 和 architect，code 退成實作細節，但還得有人審。

## 社群、關掉的公司，以及一行一行的 Copilot

[0:22](https://www.youtube.com/watch?v=yikF4AGen8I&t=22s) Simon 介紹他是 senior data scientist，電腦科學博士，在教育、研究、新創和政府有 15 年經驗，也是 AI Tinkerers 的組織者。全球社群，各地有分會。他的分會在哥倫比亞的 Medellín（字幕聽成 medin、colia）。他們常說運氣是準備加上機會，AI Tinkerers 是把機會做出來的地方。一個月聚一次，形式很鬆，不喜歡長投影片，想看 code 在跑，亂也沒關係，像在跟最好的朋友炫耀。Simon 說倫敦有一章，他上週在巴黎參加成立。

[2:35](https://www.youtube.com/watch?v=yikF4AGen8I&t=155s) 他也創過公司。三個共同創辦人，時尚產業，做了兩年。創業的滋味他嘗到了。市場難募資。產品有價值，但獲客成本很高，最後做了對的決定，把公司關掉。兩年前那樣做公司是對的。他學到的是，現在做 MVP 容易太多。production-ready 他還不敢說。前端他會繼續靠職業開發者，他自己不是前端。給客戶看、問他們願不願意付錢的第一個原型，以前要的時間，和今天他做得到的，差很多。他覺得這會認真改變這一行。

[4:18](https://www.youtube.com/watch?v=yikF4AGen8I&t=258s) Copilot 的私人 beta 他參加過，大約三、四年前。同事猶豫，他覺得很興奮。函式開頭、docstring、一段註解，它就把函式做出來，而且能動。他沒想到會走到今天。接著是 ChatGPT。他是資料科學家，前端經驗很少，內部工具多半是靜態 HTML。Simon 說自己也是後端出身，用 Copilot 得手術刀式地一句一句註解，不知道該要什麼。Felipe 同意：不懂前端的人，Copilot 做不出一整個 web app。他改用 ChatGPT，不算差，但來回很多，錯誤還得自己 Google。前一家公司的資料基礎設施也是它幫的。他不太會 infrastructure as code。ChatGPT 很會寫 AWS 腳本：Step Functions、Lambda、API Gateway。他覺得自己變強了，立刻給所有員工付 ChatGPT Plus。還不到後來 Claude 給他的那種信任：可以交給它做一整個前端，而且會動。

## 一個早上換掉四個月，然後他拆掉中間那層

[7:07](https://www.youtube.com/watch?v=yikF4AGen8I&t=427s) Simon 點了兩個用 Claude 做的東西：產品顏色目錄，和 product match explorer。為什麼是 Claude。Felipe 說是 Twitter 上的社會壓力。短版是：他在 Medellín 的 AI Tinkerers 演講，因為社群裡很多人用 ChatGPT，卻沒用 API 做產品。他做了一個很趕的 demo，從鞋子抽出顏色。一個早上，用 OpenAI 換掉他們用傳統機器學習做了三、四個月的模型，而且好很多。他發現自己把 ChatGPT 用得不夠。

他看到有人用 LLM 做出完整的 app。先碰到 Claude Engineer（字幕說 Cloud engineer），一位義大利人做的，字幕聽成 Petro，後來和 Anthropic 合作。很強。他是科學家，想碰這件事的 bare metal：自己直接對 LLM，測 Claude 的原始能力。於是強迫自己只用網頁 UI，不用任何會去叫 Claude 的 VS Code 擴充，並且把過程記下來。

[9:35](https://www.youtube.com/watch?v=yikF4AGen8I&t=575s) Simon 說這很痛：檔案在 Claude 的 projects 裡，不能直接在 IDE 裡玩。Felipe 同意，但這是實驗，不是往後該做軟體的方式。往後他會用 Cursor 或 VS Code。他要把中間層拿掉，直接面對體驗，再加上 Claude Projects 和 Artifacts。他用 git 做統計。每個 commit 記下用了幾個 prompt、其中幾個是在修 LLM 的錯，以及這個 commit 是後端、前端、資料模型還是 scaffolding。他說會放到 GitHub。

看完 Simon 先前的一集之後，他覺得對方把他的感覺講出來了：要走向 code-centric，還是 product-spec-centric。他相信開發者會愈來愈像 product owner 和 architect。實驗故意放在 Predicta（字幕聽成 predic、predicta）外面，從零開始，做一件他沒有先備知識的東西：Cards Against Humanity 的網頁版，他叫做 Cards Against AI。名字不重要。

## Projects 裡放的不是 code，是規格

[12:50](https://www.youtube.com/watch?v=yikF4AGen8I&t=770s) Claude Projects 很簡單，也很強。同一個環境裡多個聊天。一段類似 system prompt 的 instructions，管進這個環境的所有對話。一個資料夾，上傳檔案。Instructions 是他作為 product owner 和 architect 怎麼想像整個產品。檔案不是 code，是自然語言的 product specifications，加上可以當技術規格的東西：建資料庫的 SQL DDL、OpenAPI schema。環境要知道你在做 Cards Against Humanity、要用什麼文字、互動是什麼風格。他也喜歡叫它在相關時給 Mermaid 圖。

Artifacts 是聊天裡 Claude 認出可以另開一份文件時，右邊那塊預覽。Mermaid 同時看得到原始碼和圖。React 看得到 code，也看得到畫面。Simon 說這像專案裡的 REPL，在本地 sandbox 跑。Felipe 說實際很刁：它會做出三個檔，app 去引用別的元件，畫面卻不出來。得作弊，強迫所有元件放在同一個檔。沒有 Replit（字幕聽成 rep）那麼強。Replit 剛出了一個 LLM agent，他放假一個月沒試，Simon 開玩笑說大概要補一年。

[16:25](https://www.youtube.com/watch?v=yikF4AGen8I&t=985s) 每個聊天像在跟不同的軟體開發者說話。一件事一個對話，不能在一個聊天裡把整個 app 蓋完。後端可以有好幾個對話，資料模型也可以。開發者這個角色還在，因為人知道抽象層、什麼跟什麼放一起、角色之間的接點。他用過後端、軟體開發、資料工程。CTO 是 meta prompt。資料工程師表現不錯。另外有審計的角色，聊天之間不能互看。專案不只拿來寫 code，也拿來寫規格。若規格是未來，Claude 就該幫他寫規格，而且規格是原始碼的一部分。短的 prompt 產出較長的 spec，再從那些資訊生出 code。規格也進了 git，算進統計。39% 的 prompt 是在寫 product specifications，也就是 code 所來自的那份 spec。

做法是：一個前端角色幫他寫前端規格，一個後端角色寫後端規格，再叫一個 fullstack 讀兩邊，指出不一致、該改什麼。它會說你漏了一個資料模型，前端某一段會用到。實作之前，他大量讓不同規格互相批評。那個審計角色，他形容成沒人喜歡、但有用的同事。

## 28% 的錯誤，以及他開除的是自己

[19:37](https://www.youtube.com/watch?v=yikF4AGen8I&t=1177s) Simon 問到對話走進死巷、把角色換掉、以及 handover。Felipe 說他沒有開除那些角色，他開除的是自己。總共 169 個 prompt，錯誤率 28%。錯誤有兩種。他要一顆方形紅按鈕，它做出菱形藍按鈕。或是叫它實作前端，跑起來出錯，得把錯誤貼回去。他發現大多數錯誤來自不夠清楚。他沒有記下有多少修正是因為自己不夠具體，但主觀上覺得多半是。選 Cards Against Humanity 而不是 Predicta 的 app，就是想撞上「規格對我自己也不清楚」的情況。若那就是新的原始碼，錯誤就是證據：他不夠具體。

[21:23](https://www.youtube.com/watch?v=yikF4AGen8I&t=1283s) Simon 轉述一位叫 Dez 的人，出處字幕沒聽清，大意是：我們想把 prompt 寫短，反而搶走了把細節放進去的能力。短 prompt 很容易拿到東西，重要的資訊卻留在腦子裡。Felipe 完全同意，但他有一個他說防彈的解法。Instructions 裡寫：永遠問澄清問題。他可以懶。Claude 發現他在懶，就問很多。Simon 說這像一個一直在問「你是指這個還是那個」的角色，也解掉空白頁。想事情很難，以前找朋友當共鳴板，現在共鳴板是 Claude。

少寫、多想。[23:50](https://www.youtube.com/watch?v=yikF4AGen8I&t=1430s) AI 寫了 87% 的程式行。他用一個只為說明的假設，不是測量：八成到九成的軟體開發工作不必很聰明，他隨口把門檻放在 IQ 80 到 110、120 之間。Claude 把較低那段立刻自動化。機械的、打字時不用想的、開發者做了十到二十年會厭煩的苦工，很快消失。剩下高要求的工作。實驗很難，難在描述要徹底。他的腦子是封閉迴路，混亂自己知道怎麼跟自己說話。只有他在寫，混亂可以留著，code 還是寫得出來。多了一個第二個腦子，就不能用混亂說話。得先把腦子裡的秩序擺好，指令才清楚到讓它處理自己的混亂，寫出你要的東西。像教學：以為懂一個題目，要上台才發現自己大概只懂 10%，然後才去想邊界。

## 他做得出完整產品了，但還不能把審計交出去

[26:30](https://www.youtube.com/watch?v=yikF4AGen8I&t=1590s) 最大的意外是他做得出完整產品。他愛軟體開發，訓練卻是機械工程。電腦科學博士不會因此變成電腦科學家。他一直想當軟體開發者。資料科學家得寫一些軟體，他也不是只做 notebook 的那種，會做後端、會上線。他始終覺得自己沒有能力做一個完整產品。現在這些模型夠強，能幫他做出一個產品，甚至別人願意付錢的 MVP。它也夠聰明，讀得懂指示，還能比較前後端規格、提出主意。

他分兩層。Claude 這個 model 更強。Projects 和 Artifacts 同等重要。他不懂前端，可以在 Artifacts 裡先迭代 React 畫面，不必先去終端機跑 `npm run dev`。一開始他甚至不會把那個 Node.js 專案跑起來（字幕聽成 ogs）。看到喜歡的畫面，再叫它實作，並告訴他怎麼跑。

[28:54](https://www.youtube.com/watch?v=yikF4AGen8I&t=1734s) 下次他仍會用 Claude 網頁 UI 寫規格，看著 Artifacts 裡的 markdown 被寫出來、被改掉，很舒服。Mockup 也很好。Vercel 有做 mockup 的 v0（字幕聽成 versil、VC），他也許會試。寫 code 則換地方。一個月前他還想試 Claude Engineer，後來看到 Cursor 剛出的 composer：一句指示，改好幾個檔或生出好幾個檔，和網頁 UI 可比。他很想知道那會怎樣。

給今天想用這套流程的開發者，他的建議是換心態。[30:22](https://www.youtube.com/watch?v=yikF4AGen8I&t=1822s) 簡單工作會被自動化，剩下的難工作要另一種想法。當 product developer，不要只當 software developer。Code 開始變得沒那麼要緊。他一輩子是硬派 Python，現在考慮 Node.js，他說他不在乎，那只是實作。Cards Against Humanity 的後端他用 Python 寫，後來覺得前端若是 Node，後端放在同一個服務裡比較合理。Code 仍重要，但沒有以前那麼是中心。好的 code 重要。你得當過程的審計者。現在還不能盲信 LLM。它變成實作細節。把心放在為什麼做、誰用、體驗和 UI。他感覺只當後端或只當前端會愈來愈不夠。底要更寬，專長也許還在，但不能只有那個。Simon 說這比較像看整條從使用者到後端的流。

他補一句限定。[32:32](https://www.youtube.com/watch?v=yikF4AGen8I&t=1952s) 他是剛創過業的人，想的是要做產品的人、早期新創。企業裡的軟體開發者該不該聽，他不知道。Simon 說從零開始，和 Claude 得先認識一個巨大的既有系統，context 差很多，後者更刁。

他擔心的是下一代。這一代還得自己寫過 code，幸運的是還審得了。新一代呢。87% 是 LLM 生的，其餘是他補的規格或 code，他也確實寫了一點。一到十年後的平衡，他覺得「未來」這個詞已經很怪：可以是明天、兩週、幾個月。跟沒用 ChatGPT 或 coding assistant 的開發者說話，會覺得對方活在過去。只要腦子還動，他想繼續做產品，也許不再寫那麼多 code。但立刻、現在，LLM 還沒好到我們不必再寫 code。他仍然覺得需要寫。他夢想一個世界：產品從 product specifications 長出來，不是從 prompts。Prompt 太泛，像只說 English，沒說那是文章還是信。可以用 prompt 幫你把規格寫出來，解掉空白頁，問你這個想法的問題。最後要的是自然語言規格，加上技術規格，例如 OpenAPI schema，以及測試。優勢是 code 可以被驗證。規格好、測試好，他覺得走得到那一步。不知道什麼時候，希望不會太久。
