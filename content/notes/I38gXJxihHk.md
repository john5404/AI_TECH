# Skills Clinic Episode 101: How to Build, Review & Optimize AI Agent Skills (From Sick to Healthy!)

Skills Clinic 第一集，兩人在現場把一份網上的 prompt 收成 skill。片長 26 分 11 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Claude Code 聽成 cloud code，把 Tessl 聽成 Tesla，把 LLM 聽成 lamb、alum，把 LLM-as-a-judge 聽成 dilemmas A judge。

- 原片：[YouTube](https://www.youtube.com/watch?v=I38gXJxihHk)

## 一句話

做 skill 的人常常只靠一次成功就假設它以後都對。這集先把 skill 定義成 agent 需要時才載入的可重複流程，再用 Sonar 看一份 todo REST API 有多糟，然後用 review 和 optimize 把 skill 的寫作品質從大約 37 分拉高。真正要問的影響，也就是有沒有這個 skill 任務會不會做得更好，他們留到 task evals，下一集才做。

## Skill 在等 agent 自己來拿

[0:47](https://www.youtube.com/watch?v=I38gXJxihHk&t=47s) Skills clinic 是要看一個 skill 好不好，再把它變好，從 sick 到 healthy。問題是作者通常不知道它有沒有造成影響，證據是軼事：做對一次，就假設其他次都完美。他們想拆掉這個假設。前一天在 QCon 和 Patrick Debois 談過壞的 context engineering，其中一種是 vibe eval，用直覺給 skill 打分。

在評估之前，他們先講怎麼開始。Skill 是給 agent 的結構化流程或 context，讓一件事可以重複做。通常是 markdown、純文字。上面有一點結構，後面幾乎不拘，你想寫什麼就寫什麼。它放在那裡等。Agent 覺得自己做不到、需要被推著照某個方式做時，才把它撿起來。Agent 系統的大問題是太急，會假設自己知道你要的結果。Skill 補上結構、流程和做法。

## 網上的 prompt，Sonar 給出一片紅

[3:11](https://www.youtube.com/watch?v=I38gXJxihHk&t=191s) 示範從網上找來的 prompt 開始，在 VS Code 打開，名字是 express REST API generator，要生一個 todo 的 REST API。他們掃過：Express JS、資料庫層、authentication、design philosophy 裡的 pragmatic simplicity、TypeScript 的 flexible typing、dynamic queries、observability。然後叫 Claude Code 用這份 prompt 做一個 todo app 的 REST API，要 authentication、在一般任務之上的 import/export，以及 mark complete。

做好之後要用工具看它好不好。他們說 Sonar、SonarQube、SonarCloud，品質和安全都測。中間 npm install 失敗，Claude Code 自己修，還把很舊的版本號往上抬。Commit、push 到 GitHub，再接上掃描。生成那段他們看到 1 分 36 秒。

[7:58](https://www.youtube.com/watch?v=I38gXJxihHk&t=478s) 結果很紅。安全評等的 E 很醒目，blocker 很多。其中一位說這是自己的安全背景在跳。他們把結果拉進 Claude。字幕說 MCP 接到 Circe，名字沒聽清。摘要是 43 個 issues、5 個 security hot，合計 48 個 findings。

## 加上 name 和 description，review 只有 37

[9:08](https://www.youtube.com/watch?v=I38gXJxihHk&t=548s) 任何 prompt 要變成 skill，只要在前面加一點 metadata：YAML 放進 markdown。他們說這是這行現在的做法，而且很糟。兩個欄位，name 和 description。示範的人說自己是懶開發者，把 name 抄進 description。檔名改成 `SKILL.md`，原來的 prompt 刪掉。

接著在命令列跑 skill review。Review 看的是 skill 寫得怎麼樣，不是它造成的影響，很像 unit test：結構對不對。平均分 37。Validation 過了，因為 name 和 description 都在。Judge 的評價很差，description 很糟，23 分。

好的 description 有三塊。Specificity，他的不夠具體。Completeness，要說它做什麼，也沒有。Activation conflict：若兩個 skill 都提到 Express，agent 該挑哪一個。Agent 在載入完整 skill 之前只讀 name 和 description，用這點決定這次任務要不要啟動它，或啟動另一個。

Judge 是另一個 LLM。內容算還能用、有邏輯分段，所以不是零分，他們說因此給 52。但內容本身不好，而且這份 skill 給了可執行的 code，教的卻是非常危險的安全寫法，和 Sonar 上看到的一樣。

## Optimize 改的是還沒寫出來的 code

[13:22](https://www.youtube.com/watch?v=I38gXJxihHk&t=802s) Optimize 不只審查，還會把找到的項目改好。這是用另一個 LLM 提建議，他們稱為 LLM-as-a-judge：一個局外人看另一個做了什麼。這裡改的是別人寫的那份網上 prompt。大約可以到一分鐘。

Diff 很大。他們先說 description 有些非指令句子和所有 code examples 被拿掉，review 當下 description 沒動；套用變更後分數從 50% 到 90%，三次迭代，約 40% 的改進。再跑一次 review，先顯示 90，又變成 89，他們把這叫做數學的 nondeterminism。Description 還沒到 100%，content 是 77%。打開來看，description 變豐富了，關鍵字有助於新 agent 的 activation。Workflow 改很多，有 setup、有例子，例子裡放進從 anti-pattern 學到的東西。

[16:02](https://www.youtube.com/watch?v=I38gXJxihHk&t=962s) 這次改的是未來的 code，在寫出來之前。不是保證，是一個承諾：接下來寫出的 code 會比較好。他們把它叫做 shift left 再往前。以前在 production 查，然後在 CI，然後在 code。現在是在檢查還不存在的 code，在 LLM 裡。

## Tile、rules，以及還剩一個 SQL 問題

[16:49](https://www.youtube.com/watch?v=I38gXJxihHk&t=1009s) 有了 skill，可以把它包成 context artifact：Tessl tile 或 Tessl plugin，他們說是同一件事。用另一個 skill，從 registry 安裝 tile create，再把這份 skill 包進去。Tile 像 plugin，可以裝 context。這次只裝一個 skill，也可以裝多個 skills，以及 rules。

Skill 是最後一刻才載。Agent 覺得需要讀，才讀。Rule 更像寫進 `AGENTS.md` 或 `CLAUDE.md`（字幕說 agent MD、code MD），每次都要讀，是 agent 怎麼做事的核心定義。Rule 塞太多，context 會被吃光。Skill 的好處是不用一次全載。

`tile.json` 是已安裝 tile 的 metadata。裡面有 tile creator，也有他們這份 Tile Express API generator。Claude 不只有 skill，還生了 rules。一條 security rule 就是從 Sonar 學來的那些糟糕寫法。這種東西要很小心，不能塞太滿。這份很短。Skill 會長很多，只有做那件事時才載。Rule 是每次生成任何 code 都該在的核心資訊。

[19:58](https://www.youtube.com/watch?v=I38gXJxihHk&t=1198s) 他們發佈到 registry，也在本地安裝。畫面寫 367 個 front-loaded tokens。背景在跑 Tessl，把資料拉給 client。這份是 private，也可以做成 public。不必重開，可以用斜線過濾 skill 名字確認它在。然後叫它依 skill 重寫整個 app。它不怕打字錯誤。這次有在處理 secrets，hardcoded passwords 那種情況沒有再出現。他們開 yellow mode，說這是最好的選項、可以信任，同時也笑說我的機器上能出什麼事。

Build 先失敗，和第一次一樣，接著乾淨的那次是 37 秒，比剛才更快。Sonar 再掃，從他們記得的大約 19 降到只剩 1，那 1 個是 SQL queries。歷史上 maintainability 從 25 降到 8。字幕還提到 from F，沒有把前後評等對完整。他們覺得這已經是很大的進步。

[24:04](https://www.youtube.com/watch?v=I38gXJxihHk&t=1444s) 還剩一個問題，是因為 skill 依他們覺得會有效的方式做成。Review 像 unit test，抓到寫作品質的問題。還可以做 skill 的 end-to-end。這集是先生成 code 再看好不好，等於在 AI model 的 production、在軟體交付的 production 裡測。他們說不該這樣，應該在 code 生出來之前測 skill。下一步是 task evals：review 看 skill 怎麼寫，task eval 看影響。同一個 LLM，有 skill 和沒有 skill 各跑，任務是變好還是退步，好多少，哪裡還能改。每個情境有自己的評分標準，依事後產出的東西打分，很好是 100%，不好就低很多。同一份專案他們想做到零問題。下一集再做。
