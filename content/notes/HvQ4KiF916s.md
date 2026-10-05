# Live demo: Front end app creation with Claude 3.5 and Cursor

Simon Maple 主持。來賓 Felipe Aguirre 是 data scientist、程式、有 PhD。這是上一集的很快續集：上一集談他怎麼用 Claude 3.5 的 projects 做應用，這一集分享畫面。只在 YouTube，因為大量螢幕；上一集聊天在 podcast 也有。節目由 Tessl 呈現（字幕聽成 Tesla）。片長約 42 分鐘，英文自動字幕。畫面有些地方他們說不必細看，筆記不把沒講到的畫面補成結果。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=HvQ4KiF916s)

## 一句話

Felipe 做了一個對照實驗，測 Claude 3.5 本身，而不是先靠 Cursor。他強迫自己走 product spec，不走一開口就要 code。Cards Against AI 從零開始，規格是 source of truth。後端第一次失敗是因為直接叫它實作 API；正確順序是 OpenAPI 定義、data model、service layer，再做 API。前端先要 React 視覺，六個 prompt 就有首頁和遊戲頁，他那時只看畫面。接到後端靠 OpenAPI 這個標準。換到 Cursor 之後，檔案可以拆開，但漏了 `package.json`、`index.html`、`main.tsx`，他說這正是 git diff 該在的地方。最後「給我一份品牌清單」跑起來了。

## 規格才是正本，一句話不夠

[0:21](https://www.youtube.com/watch?v=HvQ4KiF916s&t=21s) Simon 說 Felipe 關心 AI 生成 code，以及 AI 在軟體開發裡的未來。Felipe 補給沒聽上一集的人：這是 control experiment，要測 Claude 3.5 的原始力量。他可以用 VS Code 擴充或 Cursor，但想測 Claude 本身。他覺得未來是 product spec 為中心，不是 code 為中心，所以強迫自己這樣做。Cards Against AI 從零開始，他自己也不清楚要什麼，想看 Claude 怎麼幫他寫產品規格。

[2:36](https://www.youtube.com/watch?v=HvQ4KiF916s&t=156s) Simon 對比：很多人找 GPT 的第一句是給我一段做這件事的 code。Felipe 走的是從 prompt 和討論做出規格，再拿規格做應用，路比較長。規格在那裡，比較具體，是 source of truth。你向 GPT 要 code 時，正本是什麼？Prompt 留不住，除非只有一句，而那一句本來就比較像規格。

[3:15](https://www.youtube.com/watch?v=HvQ4KiF916s&t=195s) 專案叫 cars against AI。指示寫成：你是創意公司的 CTO，發想設計時要簡短、技術中立，下決定前盡量問澄清問題。這把它變成對話，對空白頁有幫助。上一集他們說人會懶，以為一句話就生出想要的東西。這段指示擋著那件事，因為一句話不夠清楚，Claude 會問。他也要求 Mermaid 圖和一些文字細節。Mermaid 有用，因為 artifact 上能畫出來。偏好的技術棧和設計原則是個人口味，他覺得沒那麼要緊。這些指示是整個專案每個聊天共用的 system prompt。做這個 app 用了很多個聊天。可以加任何文字檔，不限 Claude 產生的；artifact 也可以叫它收進專案結構。規格都在一個資料夾裡。

## OpenAPI 是膠水，git 用來審 diff

[5:06](https://www.youtube.com/watch?v=HvQ4KiF916s&t=306s) 他打開 OpenAPI 那段來說明怎麼把東西拉出 Claude、放進 VS Code。開頭一行是角色：你是資深後端，很懂 API design，請看後端規格、前端規格和資料庫設定，這就夠你設計 API。API 是前後端的膠水。請提 OpenAPI 規格，並問澄清問題。它問很多，他答完，artifact 裡可以審、可以改，同一份檔會跟著改，然後貼進 OpenAPI。Simon 確認角色不是 Claude projects 裡的一種結構，就是開場那一句，設下這次對話的 context。他認為每次請求都會把該聊天裡的東西當 context，角色就延續下去。他要的是 OpenAPI 這個標準，任何 framework 都能接。出來是 YAML，但他說自己要的是標準，不是特別指定 YAML。

[6:27](https://www.youtube.com/watch?v=HvQ4KiF916s&t=387s) 另一則仍是同一個角色，但把它轉成稽核：對一下規格和 SQL script，名字要一致，不相容就改。它發現錯誤、改了一些。Simon 好奇他當時說不知道改了什麼。Felipe 說他知道，只是當下沒在看。他的做法是用 git。檔案放進 VS Code，先 stage、不必 commit，再貼上修改，看 diff。他說除了前端那塊他是出於好奇才看，其餘都得審。不能只信 Claude 對改動的描述。他們覺得還沒到可以不看的地步。

## 第一次後端是死路，三十分鐘可以丟掉

[8:09](https://www.youtube.com/watch?v=HvQ4KiF916s&t=489s) 失敗的路是他自己走錯，第一次做後端。他看到 API 是前後端的膠水，以為要從 API 實作開始。不對。該開始的是 OpenAPI 定義，不是實作。有了定義，再做 data model、service layer，context 才夠，API 才能一次做直。他當時直接說實作 API，愈改愈亂。他懂後端，知道這條不對。於是叫它摘要做了什麼、建議以後怎麼做、給一張 Mermaid。圖他不喜歡，叫它簡化。討論裡他說事情沒有走通，請摘要哪裡錯、什麼沒用。最後的建議是：先寫詳細規格、審 data model、設計 service layer、再做實作、API schema，然後才是 API 實作。他的錯是跳過前面兩步，直接做最後一步。它總想給一個答案，所以 hallucination 很多。下一次後端他先盯 service layer 和 API schema，他說完美做完。

[10:14](https://www.youtube.com/watch?v=HvQ4KiF916s&t=614s) Git 上就是一條後端 branch，打一個 dead end 的 tag，換另一條 branch 繼續。不花俏。那條路上的 code 全部丟掉，不回頭看，只留下學到的順序。便宜到無所謂。第一次失敗覺得痛，然後想到只做了 30 分鐘到 1 小時，丟掉重來。他說開發者怕重來，因為以前那是很多工作；跨過那個恐懼才是這件事好看的地方。學了什麼，帶進下一條，讓它更順。他會要一份 handover：建議的實作路徑、關鍵學習、該改進的地方，放進專案。細節他們沒有逐條念。他說往後 Cursor 也能做出類似的事，但 React mockup 和自然語言的產品規格，他仍會用 Claude。

## 先釘視覺，六個 prompt，先不要整份實作

[12:14](https://www.youtube.com/watch?v=HvQ4KiF916s&t=734s) 前端角色是資深前端，很會看細節。叫它去看前端規格和 OpenAPI 的 YAML，先給整體想法，幫他設計前端，先給 React 視覺。這句很重要：不說的話它會把整份做完。他要先把設計釘死，拆開，再對一塊一塊點頭。首頁、遊戲頁他有不喜歡的地方，他們說細節略過。他叫它改：加第三欄、把分數和送出鈕放到上面。畫面上看得到 app 在演變。到能動的時候，他說蓋子底下改得不多。他數 prompt：六個。Code 有沒有問題？他說不知道，也不在乎，因為這一刻只看視覺。六個 prompt 拿到首頁和完整遊戲頁的視覺。

[14:15](https://www.youtube.com/watch?v=HvQ4KiF916s&t=855s) 下一則他也放進規格，當成契約：前端依 OpenAPI 跟後端互動，小心弄懂怎麼接、每次 API 回什麼資料。首頁元件這樣動，遊戲頁那樣動，也就是哪些情況打哪些 endpoint。然後才進實作。他會在關鍵處結尾問：這樣夠清楚嗎，有沒有漏。叫它問澄清問題很有用。它說有些建議的 endpoint 還沒做，問怎麼繼續。再來是先建議資料夾結構。Simon 說把這些搬進 VS Code 很痛。Felipe 總是另外要 scaffolding：至少把資料夾和檔名生出來。之後出錯，不是自動餵回去，是他自己把錯誤貼上，它再改。它很會道歉。一個具體錯誤是首頁按開始遊戲，頁面變空白，沒有進遊戲頁。Claude 有時只給要改的片段，不給全文；他會叫它給全文。Artifact 的渲染壞了他也不管，他要的是 code，複製貼上。從零做一個 app，他說重點就是這些。

## 跟資料庫聊天：標準檔不要讓它發明

[17:01](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1021s) 第二個例子是他們在 Predicta 做的、用來跟資料庫聊天的 app。後端已經能動，前端也有一份，這次只是再做一個當練習。角色仍是會做 React 的資深前端，口味問題，套在這個專案每一次討論上。專案知識裡有他要的版面說明，以及後端的 OpenAPI schema。OpenAPI 是從後端拿的，不是叫 Claude 寫的，這樣別的零件接得上。Simon 說這是最不該 hallucination 的地方：不該期待不存在的東西。Felipe 說這就是標準的好處，開放標準大家認。版面說明是他自己寫的，很簡單，覺得不必叫 Claude 寫。

[18:43](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1123s) Prompt 是：依 `frontend.md` 設計前端，先不要實作全部 code，給 React mockup。它知道 `frontend.md`，因為檔在專案知識裡。那天早上一個常見狀況：它從 `component/ui/button` 這類地方 import。Artifact 畫不出來，因為那些元件不是他們提供的。對真正在開發的人這是好習慣，這裡卻擋渲染。他改口：所有元件放在同一個檔，並加上 mockup 資料。它提到要實作 API，他先不管，只想看畫面。按鈕被內嵌進去。Simon 說若之後真的要 import，拉進 VS Code 時一直內嵌會很煩，也許先假設這些 import，匯出前再改。

[20:45](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1245s) 畫面上只看得到輸入，其他卡片沒有。它用了一個外部 library。他叫它不要用；字幕下一句聽成 “do not use react”，完整指示沒聽清。接著 Claude 像是卡住，他問是不是把 Claude 弄壞了。Simon 問：為什麼改上一則 prompt，而不是再追加一句。Felipe 說是降噪。它沒有真的做錯，只是拆成兩個元件檔，artifact 畫不出來，他看不到就不能驗證，所以要求留在同一個檔。否則 context 裡會同時有兩檔版和單檔版。這樣 context 比較乾淨。

[22:59](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1379s) 還是沒有整頁。Simon 說非決定性：同一句若跑四五次，有些會成、有些不會，有點看運氣走哪條路。後來整頁出來了，沒有他想要的那麼好看，但可以再迭代，例如把思考過程和解釋放同一列，同意和不同意放在送出鈕旁邊。他們跳去實作。

## 先 stage 規格，能跑了再 commit

[24:07](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1447s) 實作用 OpenAPI 契約。前端依 `openapi.yaml` 跟後端走。他說只有兩個 endpoint：ask 和 feedback。Ask 是送出查詢，拿回思考過程、解釋和查詢結果。Feedback 是同意或不同意，也就是這次回答要不要豎拇指。他為了快，用一份寫好的 prompt：這是前端 API 契約，依它跟後端互動，做完實作，給出所有必要檔案和結構，給一支 bash 來 scaffold 骨架，給全文而不只是可編輯的片段，並說明怎麼安裝和跑。必須在同一個聊天，因為需要前面的 context，除非把那段拉成另一個檔再當 context。他用 mockup 的方式，是把它當成產品規格的一部分。

[26:15](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1575s) Simon 問依他的經驗，什麼時候把 code 或規格抄出來 stage、什麼時候 commit。現在適合 stage，不適合 commit。流程是 `git init`，先 `git add` 規格，commit 訊息寫 initial specifications，他說這不是最好的訊息。接著 add scaffold，然後停。停是因為還不確定能不能動。若下一句是你錯了、改這裡，不會希望每一小步都 commit。迭代到 Claude 給的東西能動，那個里程碑再 commit。

[28:11](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1691s) 測試呢。前端他說不知道怎麼測，他是後端。會叫 Claude 生測試，或自己點一遍。使用者視角的測試他會做。若要寫死的測試，也是叫 Claude 幫忙。後端的測試他自己寫。拉進 IDE 之後也可以用別的 AI 工具，他說到 Codium 這類。下一步本來是依它的說明把東西貼過去跑。那支 script 應該叫 `setup.sh`。

## Cursor 可以拆檔，漏掉的檔靠 git 才看見

[29:21](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1761s) 他說一開始是要測 Claude 的原始力量，真做會不一樣，改在 Cursor 的 composer 裡做同等的事。他把 code 抄進去，存成 JSX。Cursor 既是 IDE 也是 AI 助手，生成時會自己放進檔案結構。他說自己沒有用 Cursor 用到想用的程度，中間停了一個月，這會是下一步。Simon 問底下是不是也用 Claude 3.5，他說是。這裡做 import 比較合適：不是在一個必須把元件塞進同一檔才能跑的包裝裡，可以直接用那些元件。Accept all 之後東西都在。拆成不同檔在這裡是對的。

[32:12](https://www.youtube.com/watch?v=HvQ4KiF916s&t=1932s) 他們照說明跑 `bash scaffold`。跑完了，但結尾有點 hallucination，重複了一些其實不必的東西。Felipe 說錯在自己：人已經在 Cursor 裡，還叫它 scaffold 整個專案、加上設定檔。Cursor 本來就會 scaffold，於是做了兩次。他拿掉「給全文、不只給可編輯片段」這類只在 Claude artifact 才需要的話，改成：依 mockup 實作前端，跟著前端 API 和 OpenAPI 去跟後端溝通，並給出怎麼跑的說明。他覺得變快，也許是 UI。Accept all，`npm install`，進到 analytics 的前端，少了東西：沒有 `package.json`（字幕聽成 page Jon）。他指出它忘了。還要給後端 API 的位址，寫進 env。`npm install` 之後跑 dev，他說這次是直接能跑，他本來會很驚訝。中間查過 port 上是不是已經有東西。

[38:25](https://www.youtube.com/watch?v=HvQ4KiF916s&t=2305s) 打開 URL 得到的是很泛的錯誤。他不是前端，也不熟 Node.js。生成的時候看起來很好，一碰到細節就失守。Simon 說現在是一個 Python 開發者和一個 Java 開發者在除錯 JavaScript，不是好位置。他們叫它檢查進入點、確定有 index。它新建了兩個檔。Felipe 說這裡早該開始用 git，才能看出它改了什麼、好比較 diff。它也開始提供他們沒有明確要的東西；Simon 覺得前面幾乎太具體，app 需要的檔案反而沒生夠。他們加了忽略 `node_modules` 的 gitignore，stage 全部。回到 composer 才看見 `index.html` 原本是空的，還缺 `main.tsx`。他說這就是把 git 當夥伴的例子。再跑一次，輸出變了。他說「給我一份品牌清單」，然後說成了。

[40:54](https://www.youtube.com/watch?v=HvQ4KiF916s&t=2454s) Simon 說這段比較端到端，YouTube 上能看到怎麼開始，也看到兩個後端的人，Python 和 Java，做出 Node 的前端，並用規格把前後端接上。Felipe 說這兩天的對話很愉快。
