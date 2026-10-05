# Stop Guessing If Your AI Skills Are Good Enough — Tessl's Skill Optimizer Does It For You

片長 5 分 29 秒，自動英文字幕。受訪者是 Mark。字幕把 Tessl 聽成 Tessel。網址聽成 tessel.io/registry，不寫成另一個網域的連結。中間有一句聽成 butter apples，不採用。

- 原片：[YouTube](https://www.youtube.com/watch?v=FXYom-EA3Lk)

## 一句話

Skills 用來收 context、管 context，也讓人對 agent 的輸出有一點控制。一旦要分享給團隊，問題變成它到底好不好。Skill optimizer 會評、會改、再評一次，看改動有沒有變好。品質至少有三層：寫得好不好、會不會在該用的時候被選中、以及對任務成功有沒有貢獻。

## 外掛怎麼走一圈

[0:00](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=0s) 訪問者說，跟開發者談 workflow 時最常聽到 skills。分享給組織和其他人時，問題是這個 skill 好不好、有沒有幫 agent 做成任務。

[0:50](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=50s) Mark 說最容易建立信心的方式是 Tessl 的 skill optimizer plugin。到 registry 搜 skill optimizer，複製指令，一次裝上 Tessl 和這個外掛，然後叫你常用的 agent 去 optimize 那個 skill。

[1:13](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=73s) 外掛看 skill，決定怎麼評品質，評完用回饋想怎麼改，跟使用者一起改，再跑一次，看改動是不是正面的。它盡量把流程自動化，讓人從「不知道能不能分享」走到「知道可以分享」。

## 引擎蓋底下

[1:47](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=107s) 「好」會因情境和人而不同。訪問者聽到的三種意思是：符合 best practices、寫得好；在 agent 需要時於對的時間被啟動；以及對任務執行的成功有貢獻。

[2:19](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=139s) 外掛是一組 skills，配 Tessl 的 evaluation CLI。Skill review 看內容符不符合 Anthropic 的 best practice，適合正在改 skill、想要快回饋的時候，但不會告訴你實際表現。另一種在模擬沙盒裡對寫實情境跑 skill，看它做不做該做的事。較新的一種是：那些情境裡，agent 會不會自己選到這個 skill。這是在量真實情況裡的 activation。

## 不要放著過期

[3:24](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=204s) 更多人用同一批 skills 之後，下一個問題是怎麼讓它們不要變舊。Tessl 自己的 toolkit 一直在變，所以他們用 skill optimizer 來優化 skill optimizer 裡的 skills。也把不少 CLI 指令放進 CI/CD，在 skill 檔一改時抓回歸。這不只用於對外的外掛，也用於團隊內部的 skills。這些工具客戶也能用。

[4:41](https://www.youtube.com/watch?v=FXYom-EA3Lk&t=281s) 開始方式他再講一次：到 registry 搜 skills optimizer，選 Tessl 的外掛，複製指令，一次裝好，然後叫 agent 優化一個 skill。
