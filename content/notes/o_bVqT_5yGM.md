# Rene Brandel - How we hacked YC Spring 2025 batch’s AI agents | DevCon Fall 2025

DevCon Fall 2025 的一場演講。片長約 23 分鐘，英文自動字幕。講者是 Rene Brandel（字幕多半聽成 Renee）。他說自己是 Kiro 的發明人（字幕聽成 Kira），之前在 AWS 和 Microsoft，現在自己創業，做 autonomous security testing，人也在 Y Combinator。主持人沒有在字幕裡留下名字。這份筆記依英文原稿整理，專有名詞保持 English。下面只記漏洞的名字、後果和修法，不把攻擊步驟重寫一遍。

- 原片：[YouTube](https://www.youtube.com/watch?v=o_bVqT_5yGM)

## 一句話

他們給 Y Combinator 裡 16 家已經上線的公司各 30 分鐘，打進了 7 家，而且收斂成三種很常見的 agent 問題。Rene 要分開的是 LLM security 和 agent security：prompt injection 很醒目，真正傷到生意的是後面那些箭頭，資料怎麼被拿、code 在哪裡跑、請求帶著什麼憑證出去。修法都是 web 做過幾十年的事：授權、消毒輸入輸出、不要自己做 code sandbox。

## 十年前要自己接線，現在 stack 長得差不多

[1:29](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=89s) 他先放一段 11 年前的片子：自己用語音對 agent 說話，叫它做網站，還叫它載入舊金山的照片。語音辨識當時很差，還是作對了。這個專案贏過歐洲最大的 hackathon。他開玩笑說，當時若繼續做，也許可以去當 Lovable 的 CEO。

[2:54](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=174s) 十年前沒有 generative AI。他得把一堆 API 硬接在一起：Chrome 做語音辨識，Microsoft 的 LUIS 做 intent recognition（字幕聽成 Azure Lewis，他還說當時甚至不叫 Azure），再加上 language entity extraction，最後用 IBM Watson 做 text to speech。勉強能動。

[3:43](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=223s) 他現在看到的典型 agent stack 是：前端對 API server，API server 對 LLM，LLM 再去叫 tools、內部或外部資料庫，以及 on-demand code。stack 變得普通，技術才能專心做商業用途，不必再操心怎麼把怪技術黏起來。

[4:14](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=254s) 多數人聽到 agent security，想到的是 LLM security：prompt injection，或叫 model 吐出不該吐的內容。他認為那些對 foundation model 的提供者很重要。若你是在消費 LLM，該看的是圖上其他箭頭。他們發現，對真實生意造成損害的，多半在那裡。

## 從一句標題倒推

[5:13](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=313s) 創業最重要的是 launch。他們想在 Y Combinator 論壇裡發一篇很搶的貼文，標題先寫成「我們打進了 Y Combinator 的 AI agents」。這招後來有用：這場演講被邀去很多地方講，那篇貼文也成了論壇史上第二高的 launch post。

做法是從標題倒推。每家公司設 30 分鐘。假設是：system prompt 一旦漏出去，就可能把公司拖下水，因為 prompt 裡寫著公司不希望 agent 做的事。他們會看 prompt 裡可疑的地方，再往下找漏洞，並且一直跟對方溝通。16 家已上線的公司裡，7 家被打進去，共通漏洞有三個。

## 跨使用者拿資料：登入了，不代表這一行是你的

[6:56](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=416s) 最常見的是跨使用者的資料存取。agent 去拿資料，範圍沒有收好。一個很短的問題，問 agent 有哪些 tools、參數是什麼，多數 system prompt 保護會直接放過。他說你可以拿自己的 agent 試。

例子是一家做文件聊天的客戶，像是 Notion 和 Slack 合在一起。工具可以用 identifier 拿文件、訊息、使用者資料。只要看到「用 identifier 取資料」，就對上 insecure direct object reference：只檢查使用者有沒有登入，登入了就把那個 identifier 指到的東西交出去。大家覺得 identifier 很難猜。問題是它們到處都有，產品 demo 的截圖或錄影裡就有。從一筆使用者資料出發，還能再走到訊息和私人文件，因為工具變好之後，identifier 常常連到更多東西。

[9:21](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=561s) 修法很單純：authenticate 之外還要 authorize，確認這個人該不該看到那一列。web 開發解這件事解了幾十年，agent 卻一直再犯。原因在那一格，跟 LLM 本身無關，卻是 agent 的一部分。他們問過這些公司。開發者很會 pattern matching：LLM 跑在 server 上，就被當成 API server，於是給它 API server 的權限。它們比較像 users，server 側要套上使用者那套控制。

他的短清單：不要讓 LLM 決定授權；不要用 service level 的權限，例如資料庫上的 global read only；輸入和輸出都要 sanitize。AI agent 的 frameworks 還在成形，所以這些事被人忘掉。他認為這是目前最常見的一個。

## 自己做的 code sandbox 守不住

[10:54](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=654s) 第二個是做壞的 code sandbox。他先提一篇 Anthropic 的論文，依職業看 AI 用量。離群值是軟體工程、跟電腦和數學打交道的人。大家已經知道，叫 LLM 寫 code 來算數學，通常好過叫它自己心算。於是 agent 會現場寫它需要的工具再執行。這一段要做對很難，自己手刻常常危險。

另一家的 system prompt 寫著：改檔時不要把 code 直接給使用者，除非對方要求；一律用 code edit tools，而且每回合最多一次。prompt 等於告訴攻擊者，開發者不想讓你做什麼。對方確實想過：只能跑特定的 Python，不能隨便 import，能跑的檔也有限制。同時這個 agent 又能寫、又能讀檔。sandbox 的檢查就寫在那個實作裡。既然能寫檔，那些檢查就可以被改掉，保護消失，伺服器上變成任意程式可以跑。

[14:58](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=898s) 這家客戶用 GCP。token 的權限過大，從那裡可以碰到 BigQuery 裡的整份客戶資料。他拿 web 世界來比：現在還有人自己做 auth 嗎？沒有。自己做 code sandbox 是同一種風險，還可能留下一張很大的 AWS 帳單，不確定對方會不會退。

[16:22](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=982s) 現成方案他點了 E2B（開源）、Daytona，以及 Blaxel（字幕聽成 Blackille）。用它們，就不必自己扛這段風險。開源的不付費也可以。他後來補：他們看過的客戶裡，手刻 sandbox 的每一家至少都有一個漏洞。

## 請求往外走，憑證還留在上面

[16:49](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=1009s) 第三個是 server-side request forgery，他們也常看到。agent 多半部署在你的系統裡，資料多從自己的資料庫來，這沒問題。偶爾它要去外部抓資料。這時它人在系統內、拿得到系統的憑證，又在對外面發請求，安全研究會盯這裡。

這家有點像 Lovable：可以做 UI，也會幫你建資料庫。其中一個參數有預設值，指向一個私人 GitHub repository，用來拿 Postgres 的範本。使用者通常看不到，因為它是選用的。把這個請求指到別的地方之後，agent 仍把原本那個私人 repo 的授權資訊留在請求上。憑證就這樣被帶走。有了 git credentials，不止那一個檔，整間公司的 source code 都拿得到。他們通知了對方。好笑的是對方當場在修，至少 observability 是好的。他不知道用的是哪一家，但公開謝了那家。

同樣的結論：輸入和輸出都要 sanitize。

[19:26](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=1166s) 三個 takeaway。agent security 大於 LLM security，prompt injection 很酷，後面發生的事才造成生意上的損害。把 agents 當 users：授權模型、輸入消毒，沿用 web 世界早就熟的那套。不要自己長 code sandbox，那非常難設對。

## 人用的 sandbox，撐不住 agent 的節奏

問答裡有人提到 CNCF 和其他專案，想把 sandbox 做統一，問舊技術能不能拿來用。[21:15](https://www.youtube.com/watch?v=o_bVqT_5yGM&t=1275s) Rene 說需求已經不一樣。給人用的 codesandbox.com，開機花五分鐘、一個使用者每五分鐘開一個，都還可以。他們自己的 agent 要在一秒內開出數百個 code sandbox，跑完、拿到結果、再回來。舊技術可以重用，但給不出你要的那種客戶體驗。
