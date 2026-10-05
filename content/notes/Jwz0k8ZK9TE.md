# We Scored Oracle's Database Skill Live: 95% Isn't Enough

片長 14 分 34 秒，英文手寫字幕。Simon Maple 在舊金山 AI Engineer、Tessl 攤位的 skills clinic。來賓是 Oracle 的開發者倡導 Anders，負責資料庫。現場示範有很多句子沒被摘全，下面不把沒聽到的畫面補成結果。

- 原片：[YouTube](https://www.youtube.com/watch?v=Jwz0k8ZK9TE)

## 一句話

現場跑出來的成功率是 95%，Simon 說這已經非常高。標題說這還不夠。真正早被 agent 用到的，是 `SKILL.md` 裡的 name 和 description。後來的修改把它推到 100%，過了門檻，寫進 `SKILL.md`，並加了一條建議順序：explain、wait events、optimizer stats、AWR reports。

## 攤位上的資料庫 skill

[0:02](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=2s) 開場就說它給你 95% 的成功率，而且非常高。Anders 說自己做 skills，是要把開發者時的模式編進不同的 sub-agent workflows：把 SDLC 的步驟拆開、拉回來、收拾好。

[0:28](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=28s) Simon Maple 在 Tessl 攤位的 skills clinic，地點是舊金山的 AI Engineer。Anders 是 Oracle 的 developer advocate。Simon 開玩笑說 Oracle 是街角誕生的小新創，自己去過總部。Anders 覆蓋所有資料庫的事，範圍很大。他特別想讓沒聽過 Oracle 的開發者覺得資料庫好看、好用、好接近。

[2:48](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=168s) 他們開始跑。Simon 叫它看這個目錄裡能找到幾個 skills。每個目錄是一個獨立的 skill。這個例子裡有一份 `SKILL.md`。然後他們審查這個 skill。中間有一段沒被摘到。

[6:06](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=366s) Simon 說一件關鍵的事是，從 code 建 SQL 查詢時，他們知道有一批軟體安全漏洞。後面他說，若打開 database containers 那個，應該有 Docker 指令或連結。再叫它打開 containers。中間的畫面沒被摘全。

## 95%，以及 name 和 description

[8:28](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=508s) 它給出 95% 成功率。Simon 說這已經非常高。

[8:47](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=527s) `SKILL.md` 的 metadata 裡有兩件事，agent 很早就會用：name 和 description。這對觸發很有幫助。內容看起來很好。它建議一個小改進，以及針對慢查詢診斷這類事情的驗證。

[10:15](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=615s) 這重要，是因為牽涉很多人、很多不同領域，大概沒有一個人握有全部資訊。

[12:13](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=733s) 它也會把資料存成歷史，所以之後還能回頭用。

## 改完到 100%，寫進 skill

[12:26](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=746s) Simon 問 Oracle 內部怎麼用 skills。Anders 說自己整個職涯都是軟體工程師，後來進了 DevRel，但仍大量動手寫 code。SDLC 對他很重要。做軟體時要跟著對的流程。它簡單，而且是漂亮的 code。所以他做 skills，把這些編進不同的 sub-agent workflows，拆開 SDLC 的各步，拉回來、收拾好，把開發者時的模式編進去。

[13:19](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=799s) 它做完了，也改了一些。那些改動把它推到 100%。門檻達到，而且被套用。這些變更寫進了 `SKILL.md`。

[13:46](https://www.youtube.com/watch?v=Jwz0k8ZK9TE&t=826s) 他們想丟進一張 pull request 看。它加了一個任務，帶著建議順序。這些事情之後它會告訴你去看 explain、wait events、optimizer stats、AWR reports 等等。Simon 覺得真正有趣的是在這裡做一些情境，看有這個 skill 和沒有時，對原來的管理有沒有價值。Anders 可以回一張 pull request。Simon 謝謝他來 skills clinic。
