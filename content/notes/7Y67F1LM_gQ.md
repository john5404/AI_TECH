# AI Security Vulnerability Live Hacking with Liran Tal, from Snyk

這是 AI Native Dev podcast 的後段，Simon Maple 主持，來賓是 Snyk 的 DevRel lead Liran Tal。兩人螢幕分享、做 live hacking。片長約 23 分鐘，英文自動字幕。片頭片尾的贊助名稱被聽成 Tesla。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=7Y67F1LM_gQ)

## 一句話

Liran 要證明的不是「模型會寫出爛 code」，而是更技術的一件事：LLM 的輸出得當成使用者輸入。三個 JavaScript demo 裡，硬編碼的笑話、聊天回覆、只拿來寫 log 的模型文字，都可能變成 XSS 或 SQL injection。Snyk 的擴充功能掃得出來，但生成當下若不知道 `res.send` 和 `innerHTML` 在做什麼，惡夢是自己接上線的。

## 先用笑話把模型接上 API

[0:48](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=48s) Simon 說這一段要分享螢幕，用幾種方式看 AI 帶來的漏洞。Liran 說他比較怕的不是 LLM 的安全問題，而是 Simon 拿 JavaScript 來損他。實驗有三個 JavaScript 例子。他補一句：不是只有 JavaScript，也有 Python 例子，其他語言一樣會出問題。兩人先開玩笑，說 Simon 事先同意 JavaScript 是世界上最好的語言。

[2:41](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=161s) 第一個從 `index` 開始。這是一支 Express API，後面用 OpenAI API 跟 LLM 互動，笑話放在一個陣列裡充當資料庫，再暴露一個走 HTTP 的 jokes API。`request` 根本沒被讀。流程是從寫死的資料裡隨機挑，再 prompt 出輸出。Liran 把其中一則改成跟 Java 有關，拿掉另一則，好提高「中獎」機率。

[4:01](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=241s) 他們送出 “tell me a joke”。連著幾次都落在 Java 笑話上，Liran 說這可以記成四次裡面四次都在損 Java。他問：大概 40 行、資料還是硬編碼，能出什麼安全問題？那些方法只是把資料送出去。

## `res.send` 預設把模型文字當 HTML

[5:23](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=323s) 他打開 Snyk 擴充功能。字幕裡產品名多次被聽成 sneak，下文用 Snyk。掃描幾秒就標出一個問題：回應的 content type 是 `text/html`。用 `res.send` 時這是預設。若這段是 coding assistant 生成的，你可能根本沒注意到。

想像 LLM 回的不只是文字，而是會被當成 HTML 元素的文字。頁面上一個去抓這個 API 的元素看到 `text/html`，再把內容接上去，就可能是 XSS。Snyk 寫的是 XSS：來自 LLM 的未消毒輸入流進 `res.send`。它知道來源是寫死的資料、再經模型，仍然把它看成和使用者資料一樣糟。Liran 說，現實裡那些內容可以是惡意的。

## 聊天機器人：對齊擋得住直球，擋不住修 HTML

[7:38](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=458s) 第二個 demo 他戲稱自己做了一個沒人看過的 “chat with AI”，還想為它募到一大筆錢。字幕聽成 “h100 million”，金額不另補。用法很單純：prompt、來回對話。API 是 `/converse`，從 request 取出 message，放進要生成的 prompt，再回到使用者。畫面上的 UI 他說會看起來很糟。他打了一句常規互動：嘿，Java 為什麼這麼糟。模型回他可以改用較新的語言，例如 JavaScript。

[9:06](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=546s) 他把這支 API 想成 production。攻擊者不該能拿它做怪事。他試著讓模型生出 XSS payload，好從 local storage 拿走 token 再送出去。模型拒絕：對齊把 LLM 偏向「做好事」，不讓它跨過倫理界線。下一步是 prompt injection，讓那段 payload 變成回應的一部分，再打到頁面上。他說這是非決定性的，手上有備援；請它修一段故意寫壞的 HTML，好避開對精確字串的警報。

[11:03](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=663s) Simon 確認：這支 API 沒有檢查 XSS，只是把輸出印回螢幕，並信任 LLM。第一次就成功，頁面上跑出 alert。Liran 說，就是 LLM 的輸出自己構成了 XSS payload。模型試著修好那個元件，而他們故意把它弄壞，又放進 alert，於是它把東西加成頁面上的 DOM 元素，而且真的執行了。

[12:35](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=755s) 前端把 HTML 送回來。頁面從 CDN 載入 lodash，有送出按鈕，把輸入和模型回覆都印到頁面上。有經驗、也有一點安全意識的前端會知道：瀏覽器這個 DOM API 用來把資料加到頁面上並不安全。內容若是圖片標記，它會真的嵌進一個 image 元素。人若大量用 LLM 生成 code，或不熟 vanilla JavaScript、只習慣前端框架的 API，就容易踩到。

[14:00](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=840s) 再打開 Snyk。`index` 又是 XSS，以及沒有用 JSON。`index.html` 還多標幾件事：從 CDN 直接引 lodash 很難管版本，即使沒寫進 package manifest，Snyk 仍指出它有安全問題；`innerHTML` 被標成 XSS 的 sink。Simon 把結論說死：AI 的輸出必須和使用者輸入一樣被消毒、被檢查。Liran 同意，來源是模型還是使用者並不重要。連一開始那些寫死的笑話，最後也可能變壞。

## 只把模型回覆寫進 SQL，users 表還是沒了

[15:55](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=955s) 第三個 demo 有資料庫。字幕前段聽成 sqli，後面他說這是本機的 SQL，不是分散式的問題。他們建了 conversations 和 users，並種了一些使用者資料。介面仍是跟 LLM 對話，但在把回應印回去之前，會把模型的回覆寫進資料庫當 log 或稽核。他強調：只記錄 LLM 自己的回應，不把使用者輸入寫進去。商業理由說得通，蒐集資料、做訓練和分析。

[17:33](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=1053s) 正常問一句 “can you teach me about SQL injection”，模型就開始教。攻擊者從外面看不到程式怎麼寫，但可以猜查詢是串起來的、沒消毒。Liran 準備的句子要模型教人怎麼安全地加引號，同事總是在講某一種寫法；他用括號和分號把前一段查詢關上，接著 `DROP TABLE users`，再把後面變成註解。對模型來說這不是 SQL 情境，它只是把 token 切開，那些橫線沒有特別意思。他準備了好幾種變體，因為模型非決定性，有時 exploit 成立、有時不成立。

[19:11](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=1151s) 這次送出後，他看資料庫：conversations 還在，users 沒了。Simon 損他沒把使用者取名 Bobby Tables。Liran 解釋路徑：輸入被放進查詢，又回到 LLM 的輸出，再掉進被記錄的那段回應，於是把查詢關上並做別的事。有時會看到查詢錯誤，因為這是 multi-query，一部分成功、其餘對不上。他說這仍然算成功。

[21:00](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=1260s) Snyk 再次標出 XSS，也標出這次的 SQL injection。問題出在用不安全的 API 把字串接成 SQL，而且用了允許一次跑多段查詢的 `exec`。他說若改成 insert 或 get 那類呼叫，只會跑單一查詢。`exec` 壞在好幾個理由上。Review 時你可能會說：這又不是使用者輸入，只是 LLM，能怎樣。Snyk 的答案是這裡仍有 SQL injection，LLM 本身就可以是問題。Simon 覺得，叫模型說出某一句，感覺比攻擊者自己送 SQL injection 更窄，但這正是這段要讓人看見的事。

[22:43](https://www.youtube.com/watch?v=7Y67F1LM_gQ&t=1363s) 收尾前他們還笑 Snyk 的唸法，Simon 承認自己以前會唸成 Snick。然後 Liran 說他還想再跑幾次 Java 笑話。Simon 謝謝他分享螢幕和例子。
