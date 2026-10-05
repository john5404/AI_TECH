# Beyond Coding assistants: Cursor as an API, Coding with gestures and more with Patrick Debois

Simon Maple 主持的 AI Native Dev。來賓是人稱 DevOps 之父的 Patrick Debois。片長約 36 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla，把 Aider 聽成 ader。

- 原片：[YouTube](https://www.youtube.com/watch?v=RmvX9Oshfp4)

## 一句話

Patrick 覺得 LLM 加上 tools 和 agent，結果會好非常多。Cursor 真正解開的不是另一個聊天窗，而是讓人留在寫 code 的流程裡：表達意圖、改整個 codebase、用濃縮過的變更來審查。他後來把 Cursor 包成自己的 agent 可以呼叫的 API，又用鏡頭看手指，在沙發上切換打字和執行。螢幕能被看、能被操作之後，他會把它關在虛擬桌面裡，因為幻覺還在，而人很快就會對每一次詢問按同意。

## Cursor 把複製貼上收進原本的流程

[0:40](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=40s) 這集不談 DevOps。Patrick 說兩者仍有連結：DevOps 做很多自動化，他現在興奮的是能自動化更多 code generation，也用來把工作變得一致、更安全。機器不會累。他以前做 VP engineering，要把 best practice 擴到所有工程師；現在有東西可以整天幫開發者做這件事。

[2:06](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=126s) 早期，ChatGPT 出來時，第一批 plugin 比較像 ChatGPT 加 Copilot，在 VS Code 裡。GitHub Copilot 已經有，但他那時寫 code 不多。一條路是在編輯器裡寫註解、讓它生成或自動完成。另一條是聊天：問它、叫它做事。一開始丟一塊 code，很少真的跑得起來。他說的是大約兩年前。自動完成比以前的 completion 好一點，但還不夠；現在好非常多，卻有時擋路。聊天也好，可是一直複製貼上，像跑去 Stack Overflow 再回來，不完全是你要的，只是和第二種方式和 LLM 互動。

[3:53](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=233s) Simon 提到一份把 change 和 trust 放在一起的文章。Claude 的 artifacts 可以問、可以寫、可以改，只要你不打算在原本的寫 code 流程裡改。那個改變很大：人不在 IDE 裡。Cursor 的 Composer 讓你說要改這個、要跨檔，然後推回 IDE。它減少複製貼上，但也把人推回比較熟悉的流程，而不是更後面的那種流程。Patrick 說，ChatGPT plugin 早就有 refactor、解釋 code，但那些落在旁邊。現在是對著 codebase 做，而且寫進 codebase。Codium、Cody 和其他人也朝這個方向看。Cursor 解開的是 UX：怎麼表達想要的意圖、怎麼改那段 code。審查時它不只給 diff、不只給行內變更，還給一份濃縮、說明什麼在變，幫人驗證。寫、表達、好不好、再審查，這條流程被磨過。

[7:12](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=432s) 在 flow 裡要利落：資訊在你要的時候來，然後你審查。第一次覺得 Cursor 的循環把他留在 flow 裡。以前是走到旁邊，先是 Stack Overflow，後來是聊天。現在是：這是我在看的問題，這是下一件要想的，給我結果。答案不完美。Code completion 只給一個，不對就按掉。他們做成多行、也有多個 completion。Composer 則是：我要一個這樣做、並印出那個的檔。不滿意就說改這裡。對話不在聊天窗，而在 code 上，而且是整個 codebase，不是單檔。他發現自己愈來愈不打 code，只是推 LLM：我要這個，再像那樣一點，這個好、那個不好。

## 失敗時人還是得看得懂

[8:55](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=535s) 還在不在乎實作方式，還是只在乎功能。他的兩難是：還在不在乎 code 長什麼樣，這還算不算你的 code，還是只剩你對 code 該做什麼的描述。他仍然在乎，因為它失敗時，人還是想懂它怎麼運作、為什麼這樣。codebase 不能變成一堆叫 a.py、b.py 的檔。他現在常做的是：一個很具體的問題，幾乎從空白專案開始，用 Cursor 和 Composer 迭代，東西定義清楚，再帶進較大的專案。大專案裡規則更多。除了整個 codebase，Composer 讓你寫生成該遵守的規則，他們叫 Cursor rules。他的例子是前端用 React，而且總是要有一份用 OpenAPI spec 寫的 API test。生成時不只拿 codebase 當 context，也拿這些 guideline。小專案有時會被這些規則妨礙；大專案就是靠這個讓整個 codebase 一致。

[11:48](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=708s) 他有一套基本要求放在專案裡，跨專案重用。做特定事情時再加特定檔，例如前端就加 front end spec。文件也一樣，當下決定帶什麼進來。指定太多，它會不高興或互相衝突，code 也不一定好。他是一小塊一小塊觸發。不加這些 context，終點也許一樣，但得在 prompt 裡迭代更多：不是我想要的，我要這樣。Simon 引過一句：人願意只寫短 prompt，會少掉該給的細節。Patrick 說這像人，兩個字後面有很長的歷史。很多工具有 prompt compiler，把簡單 prompt 變成較複雜的，好拿到更好的結果。前提仍是你給更多 context，把腦子裡的細節交出去。

## 不要把整份 code 塞進模型

[14:04](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=844s) Cursor 之前他用過開源的 Aider，比較偏 CLI，像在 CLI 裡跑一個 daemon，用聊天的方式說想要什麼，它改 code。品質他覺得真的好。跟他作對的是它會自動 commit 它認為好的 code。可以關掉，但問題是我們真的要這個嗎。它也能用語音，他在 Cursor 上也試過，坐著跟它說話。為什麼還在打字。Simon 補：坐在鍵盤前，心裡的檢查常常跳過；要說出口時會想得更清楚。Aider 常寫他們怎麼做內部 diff、把小塊送給 LLM，免得整個 codebase 壓上去。Cursor 也會排哪些 context 對這段問題有用，為了速度和 context。給太多就是問題。Aider 後來加了一個 architect：還是 LLM，換一個身份，在 code 生成時批評它，你就不必自己做。延遲是大問題，你要 code 快，不想等一分鐘。他們很公開，可以從原始做法學到很多。

[16:45](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1005s) 他覺得有人看 ChatGPT 生一次、不喜歡，就把整條路打發掉。LLM 配上 tools 和 agent，結果好非常多。切 code 時不能切在一句或一行中間，所以有人用 abstract syntax tree 解析、切成對的塊。生成管線裡，他希望能指定並生出測試。其中一種是把 prompt 轉成 functional test。有些編輯器他一時忘了名字，會先寫測試、幫你寫測試，再讓 LLM 寫 code。有了 test harness，成功機會較高。TDD 本來就是在把你要什麼、你想看到什麼磨清楚，再給更好的提示。生成後可以 lint，語法對不對是容易的，錯誤餵回去。要跑 code 就得 sandbox，有各種安全問題。管線裡可以看它能不能執行、測試過不過，再餵回去。還有 code smell：他在改 code，smell 變多，他就不要那段。餵回去，不行就再生一次。CodeScene 那些人做很多這類偵測。重構就是不讓 smell 上升。使用者看不到這層。管線愈長，延遲愈長。若是不在編輯器裡、自己一直跑的 coding agent，就可以整天跑、看有沒有變好。也有人依 code 和 guideline fine-tune，故意放進錯誤，看抓不抓得到。另一個學到的是改小塊，不要一次把所有 context 塞成一大塊。人需要的幾乎是編輯器視野再加減一點。大家正從「把所有 code 塞進 LLM 看會怎樣」退回來。太多 context 就是超載。

## 把 IDE 包成自己的 agent 可以叫的工具

[20:31](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1231s) 他看過很多管線，也自己試著讓它們能用。有時你只是想用。Cursor 是較好的幾個之一，結果不錯，他想把那整套邏輯放進自己的專案。Cursor 是 IDE，不是設計來給你這樣改。他寫了一個 VS Code plugin 讓人可以打字，加上一個 OpenCV 專案看螢幕、看 Cursor 開著沒有、把文字抓下來。最後把 IDE 包成 API：叫它跑這個，把生成的聊天交回來。原本想拿來跟 Copilot 和其他工具比，用最好的那個。多數工具關在 IDE 裡，你做不了什麼。於是他可以驅動 code generation，把它加進自己的 agent 當一個 tool。成功不是「結果比較容易被接受」，而是他能用在自己的工具裡。整條管線不用自己寫，別人寫了，他在下一步消費那些資料。Simon 接著想的是：五個工具各自做，人來選；或再一個工具審查、指出最好的、說明為什麼。那就像當這些 AI 開發 agent 的 team lead。Patrick 說，審查的 agent、寫 code 的 agent，就是他想玩、並做成 API 的動機。

## 舉手才聽，手指決定是打字還是執行

[23:09](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1389s) 他發現自己更多時間在審查、在 code 上留言。先試語音，免得打字。VS Code 的語音助理只打進 code editor，不打進 Cursor 的欄位。改用無障礙的語音之後，太太走進來說話，螢幕上就出現東西。有時啟動仍要鍵盤快捷鍵，他不想那樣。他看過一個用聲音操作的工具，字幕聽成 cursor L：用像「紅色的下一個字」這種說法去點，把編輯器標起來，複雜得像 what3words。他最後做的是：想讓人聽你說話，你就舉手。鏡頭看著他，他举起手，就改成語音聽，而不是打字。再說「做這個」時，是在打字，還是要執行。他用手指在兩個模式之間切。人坐在沙發上。兩根手指可以把 Composer 叫出來，然後說他要打的內容。手指反過來，他就說那是在生氣。

[25:10](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1510s) 他很喜歡 OpenAI 的即時互動。很多人覺得笨拙，但它能用很好的方式對話式地回你，而且你可以打斷，免得它把整份 diff 念完。他先做快捷句，聽到 open compose 就打開。再進一步：LLM 可以看他的文字，接上 function calling。它若判斷該觸發 open compose，不管他怎麼說，就打開。不必再記觸發詞。不知道觸發詞也沒關係，它聽的是對話，工具還可以一直加。走到瀏覽器時，大概該截圖、上傳到 Cursor，讓它看了再生成他要的前端。Simon 想到白板畫架構、以及問「我螢幕上有什麼」。

[26:59](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1619s) 錄音當時不久前，Claude 有測試版能看螢幕上是什麼，還能互動。等於有一個會寫進你 IDE 的人，就算那個 IDE 沒有 AI。Patrick 覺得合理。在店裡用 ChatGPT，他會拍照問該知道什麼。在 IDE、在作業系統上，就是「螢幕上有什麼、怎麼改好」，下一階是允許它在本地執行。還是一個 tool，只是跑在本地。Microsoft 也有把螢幕上發生過的事錄下來、之後回想的做法，例如上週五一起看的那張試算表。他的工具還得判斷螢幕上是 Cursor 還是瀏覽器，他是看 process list。某個對話框在哪，也可以訓練模型去看；明天畫面又不同，一長串 if 不會有效率。若有一個模型懂今天這些軟體、認得出這是什麼畫面、人在這個畫面前面該做什麼動作，就不一樣。也有人接 accessibility inspector，看按鈕能不能點、畫面上的提示。研究專案 OSWorld 在虛擬機裡做：開一個桌面，試各種情境，開螢幕、開瀏覽器。一旦知道那裡有什麼，下一步就是 function calling 那種接法。

[29:53](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1793s) 它能看到螢幕上任何東西，下一刻跳出什麼你不知道。Simon 說授權是更大的問題。他們聽過的講法是 Glean 把授權放在 LLM 之前：先算出這個使用者真正能存取什麼，再把該看的給模型，而不是讓模型自己判斷。Patrick 會把這種東西跑在虛擬桌面上，確定給它什麼。不是每個人都那麼懂技術。LLM 天生會幻覺，他們在減少，但永遠不能確定它會做什麼。最好的辦法是限制它能做什麼。若它要改文件，你會不會每次都擋；若每次都問能不能改這份文件，人就會說好、隨便。合規讓人擔心，因為這技術不是每次都可重複、不是每次同一個結果。但能跨應用分享 context，會非常有力。意圖也可以跟著變：在這個 app 裡使用者要的是這個細節；進了 IDE，就要真正的實作，要低很多的層級。

## 從前端、整天寫 code，到對的工具做對的事

[31:53](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=1913s) 他常加的價值，一個是 v0，做前端生成。你指定想要的網站，它生 code，你可以迭代，現在也能送回編輯器。Cursor 這類不太專注在這件事。另一個是 runme.dev，用 notebook 寫 DevOps 指令，不必把 script 全寫死，裡面可以混文件。他自己的文件通常寫在行內，規格之一是寫了東西就要加文件。Sandbox 他想到的是 e2b，他會把字母記混。用來沙盒執行 function，執行很快。和 Replit 像，但這個很專注 sandbox 和執行，code 好接。還有一個他一時想不起全名、字幕聽成 AI inspect 的，在 VS Code 裡做 evaluation，跨多個 LLM 看哪一個對這個面向最好。很多 evaluation 很久，跑在別的地方，例如 LangSmith；這個 plugin 讓他留在 VS Code。

[34:07](https://www.youtube.com/watch?v=RmvX9Oshfp4&t=2047s) 若很前端，他會從 v0 開始。若要生成整個應用，另一個是 bolt.new。每天寫 code、後端也做前端也做，他放的是 Cursor。Anthropic 的 artifacts 也能幫一些生成。這些工具在互相學，希望最後在一個工具裡靠得更近。例如接下來的 GitHub Copilot 有一種會看 test coverage 再建議測試。這也是他把東西包成 API 的另一個理由：對的工作用對的工具。結尾他說，過幾個月也許連這集 podcast 都用像 NotebookLM 那樣自己做，人可以去海邊看自己的工作被做得更好。
