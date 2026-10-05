# AI Native Development, make sense of these new tools and patterns - Patrick Debois

Patrick Debois 從比利時飛來，字幕說他還在倒時差。片長約 20 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Y6-TI7tIxgc)

## 一句話

他要整理的不是哪一個工具比較強，而是從 GitHub Copilot 的自動完成走到 AI native development 時，反覆出現的幾塊：把 coding 委託出去、用 specification 取代逐行指定、把更多 context 餵進去、用更多 AI 補洞，同時讓人還看得到、還能在失敗時接手。信任要先被賺到，不能先假設系統已經可靠。

## 委託寫 code，但信任還沒到

[1:25](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=85s) 他先講自己怎麼走到這場。有人認識他是因為 DevOps。他說 2009 年在比利時、房間裡大約 60 個人起步，後來變成大家知道的 DevOps 運動。他不說這場一定會同樣發生，但對的人聚在一起就可能長出東西。字幕裡他把自己放在 DevOps Handbook 的共同作者位置，也說自己刻意不站在單一廠商那邊。他做過 DevSecOps，近兩年把重心放在生成式 AI 與產品，最近則是用 AI 做工程。這場活動也是從這裡來的。

同一段他把現況收成幾塊。工具在幫我們寫 code，他稱為 delegated coding：人不再死磕每一次確切的呼叫，而是往 specification 上移。我們希望系統好到可以把信任交出去，但它得先賺到這份信任。我們餵進去的資料也多很多，codebase、Slack、Zoom 會議都算。他這兩年的體會是，出了問題多半再用更多 AI 去解，像一個 flywheel，賭最後會被解成一個好的樣子。最後一塊是 human oversight：機器不能自己跑走，失敗時人還得能處理。

## 從自動完成到回饋迴圈

[2:36](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=156s) 起點是 GitHub Copilot 那種被加強過的 autocomplete。他說這大概是賣進企業最多的東西：勾了 Copilot 就像打過勾、以為到了。但他覺得沒停在那裡。Chat 現在到處都有，早期是問 ChatGPT 再複製貼上，很笨重。Cursor 的 instant apply 是一步：生成之後直接套到 code 上。Tab 也不只是補完，它會猜下一次游標該跳到哪裡改。

[3:39](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=219s) reasoning models 加進來之後，它會想過、會做計畫，不再是單純的 code completion。更早有一輪「誰抄了誰」的爭論，大公司一邊說不能索引他們的東西，一邊又希望模型學會他們做事的方式。Fine tuning 太難，本地的 codebase indexing 成了中間解法。

[4:30](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=270s) 從改一個檔、一段 snippet，變成一次改多個檔。這是轉折，也立刻帶來新問題：生成的 code 多到要一直 review。Context 也不只來自 code。終端機上的錯誤可以餵回 chat 裡的生成；瀏覽器的錯誤也一樣。他把它看成一個大的 feedback loop。

[5:19](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=319s) 測試也進來了。他說大家本來很不會寫測試，但 AI 很適合寫，因為它一直想改東西，沒有測試就不知道它改得太過頭。所以重點從 code generation 擴到 test generation。Devin 會在這天被提到幾次。他覺得「它會搶走工作」不是重點，重點是他們比較早把這個 feedback loop 講清楚。再往前一步是：為什麼只有一個 agent，而不是多個 agent 同時改同一個 codebase。他說今天還很少人這樣做，但工具變好之後，平行做是有道理的。

[6:31](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=391s) 迴圈還能拉到 production。他舉一個把 code 送上線、再依 production 回饋自動調整的例子，像 A/B testing。Inner dev loop 不再是唯一的圈。

## 從 code 轉到 specification

[7:01](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=421s) 下一階是從 code centric 走到 specification。他用 Cursor 的 Composer 當例子：你進入連續的 prompting，不再自己寫 code。不喜歡就再下一個 prompt，打字愈來愈少談 code，只是把方向舵過去。

[7:24](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=444s) 也有人在專案裡放 markdown，叫它照 `specification.md` 做。意圖被存下來，不只留在當下的 prompt。他說這是在走向 intent-based coding：不是 ghost text，也不是 chat，而是一份 spec，再按計畫被寫成 code。字幕裡有個名字聽不清，這份筆記不把它補成某一個人。

[8:08](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=488s) coding identities 是同一條線。你可以說自己是 Python 開發者、喜歡這組 rules，或是做 React、有另一組 rules。這些 rules 可以加到專案上，這個專案用這套、那個專案用那套，幾乎是可重用的 prompts 和 specifications。

[8:38](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=518s) 設計也能當規格。上傳一張圖，叫它照圖做前端 UI。規格不必是文字或 prompt。後面他說自己也不知道畫面上發生了什麼，這段視覺沒被字幕蓋住。

[9:01](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=541s) 新工具開始想：何不管理產品需求文件，讓 coding 從那裡長出來。他說技術上還沒到，但把需求拆成較小的塊，今天做得到。工作方式會更 specification centric。有趣的是雙向：改 specification，code 跟著改；改 code，specification 也跟著改。Copilots 以及其他廠商都在往「先指定、少做細節 coding」走。字幕裡的 Amazons 沒有被講成一個清楚的產品名。

## Context 從文件變成可再用的 knowledge

[10:00](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=600s) Context 在爆。整個 workspace 塞不進去，也不再是索引一個檔。他舉把外部 code library 加進來當 context、在自己的 code 裡重用。文件也開始被加進來：既然有最新文件，為什麼要讓 LLM 現編。他預期這種 context 還會在工具裡繼續炸開。

[10:54](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=654s) 文件本身會被改到適合當 context，像網站做 SEO 那樣，只是優化目標變成「能被加進系統」。Production 的 OpenTelemetry 資訊也是 context：這個 function 最近幾天被用了非常多次，那你大概不該隨便碰。字幕說的是 “like a million times”，是他的舉例，不是一份量測報告。

[11:32](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=692s) 餵給 Devin 更多文件和 context 之後，它會說這段重要、存成 knowledge，下次生成還能用。人得到可留存的描述，AI 得到下一輪的材料。路線是 documentation，再到 context，再到 knowledge。Memory 則是「先做了這件、再做了那件」，用來追 specification。他說這種一小步一小步疊上去，通常比一次塞一份大 specification 好。

[12:19](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=739s) 有了這些，agent 也能回 pull request。Code 生成完、PR 送出之後，agent 用餵進去的 context 回答別人的問題。他稱為一種 auto engage。

## 信任要靠檢查，人還得看得懂

[12:41](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=761s) 他把 AI 比成一台還會繼續存在的 slot machine：你沒辦法總是控制生成好不好。繞過的辦法是檢查。Linter 過了是好的回饋，但還要問它跑不跑得起來。系統會在背後把 code 跑起來，看它能不能 compile、能不能 run。Editor 旁邊有一個 shadow environment，當作 runability check。改動之後也要回報影響了什麼。字幕後段有一句講文件核對，聽不清楚，這份筆記不把那句補成具體行為。

[13:57](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=837s) 生成出來的 code 還可以量複雜度：人還讀不讀得懂，檔案會不會愈拉愈長。這些 quality metrics 過了，信任才增加一點。安全可以做 threat modeling。他還提到以後也許能做 verified refactoring，證明改動仍是預期行為。字幕沒有展開做法。

[14:46](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=886s) 信任到哪一步，才會讓 agent autocommit？字幕說某個工具比較早把這做成功能，名字聽成 “ad”，這裡不另取名字。他自己還不會覺得安全到可以自動 commit，但可以 revert。Checkpoints 和 rollback 是另一層 fail safe，讓它先試、再看影響。Windsurf 的 lock file 則像 access control：這塊 AI 不能碰；哪些 commit 可以自動，哪些不行。

[16:07](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=967s) 人的 oversight 卡在 cognitive load。他色盲，紅綠 diff 對他不好用。Chat 把變更解釋得很完整，但他沒時間全讀。右邊那種濃縮檢視用自然語言把一段 code 收成幾行，他只讀那幾行。生成愈多，這種減負會愈需要。多檔 review 也要拆任務：先看這個、再做那個、再下一個。人無法一次把所有檔案吞完。

[17:25](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=1045s) 他要即時回饋。等 agent 愈久，就離當下的結果愈遠。另一種回饋是把生成結果畫成圖，而不是讀一段 S3 bucket 發生了什麼。Code editor 因此更像針對特定任務的 domain specific browser。他用別人說的 moldable 來形容：編輯器要能被延伸，好讓 review 的認知負擔降下來。

[18:33](https://www.youtube.com/watch?v=Y6-TI7tIxgc&t=1113s) 收尾時他說這不是工具評比，不是 A 比 B 好，而是一份檢查清單：這些片段重不重要、你在各工具裡找不找得到。他覺得現在還早，人還在轉換。他的摘要是：implementation 走向 intent，交付走向 solution discovery，documentation 走向 knowledge，少去 micromanage chat、讓它更自學，同時不要盲自動化然後兩天後再回來。人要有辦法引導，也要知道它怎麼走。
