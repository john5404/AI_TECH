# Context Engineering Is the New Backend for AI Agents

片長 8 分 19 秒，自動英文字幕。講的是 Tessl 的 spec registry。字幕把 Tessl 聽成 Tessell，把 Next.js 有一處聽成 SJS。中段有一段沒被收進摘錄，下面不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=jz1hdTGjBUg)

## 一句話

一百萬、兩百萬 token 的窗口不是讓你把十件聰明的話一起說。Rules 要短，負責把 agent 指向知識。他們用 Vercel 的 Next.js 基準和 270 個隨機函式庫量過：加上整理好的 context，成功率會跳，而且五到十年的函式庫本來就最好用，太舊和太新都比較差。給對的知識可以把那條線抬平。

## 窗口越大，每句話越不被看見

[0:00](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=0s) 窗口已經到一百萬、兩百萬 token。你若有十件聰明的話全說了，每一件得到的注意力會少於你只說三件。他的例子是一個侏羅紀主題的 to-do。叫 agent 加一個編輯按鈕，它把 code 讀進 context，卻做出一個藍色按鈕，跟主題不合。可以加不靠 agentic search 的明確 context，例如 agent 的 MD 寫「永遠用主題色」。通常你要說的遠多於此，所以這是問題。

[0:44](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=44s) 常見分法是 rules 和 knowledge。Rules 是少量、硬塞進去的，會放在 agent 的 MD，每次都看得到，所以必須短。它們該做的是放連結和參考，引導 agentic search 去拿更多資訊。那部分才是 knowledge。

[1:07](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=67s) 他用 Tessl 的內容當例子。Spec registry 是知識的依賴系統。你可以把 context 發上去。他們也預先放了超過 10,000 份規格或 context，幫 agent 把 open-source libraries 用得更好。那些是分析過、迭代過、評估過、策展過的。後面有一段摘錄沒蓋到，這裡跳到他拿出的基準。

## 兩組數字

[3:52](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=232s) 他先謝 Vercel 團隊在 Next.js 上的工作。他們作為 AI 這塊的 thought leader，發了一個基準，量 agent 能不能用好 Next.js。大約 50 個測試，跑過不同 agents。有一個仍然只有 42%。這已經有點讓人清醒，也讓人問 context engineering 能不能改善。他賭現在所有 agents 都在處理這個。

[5:10](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=310s) 比較兩個測試之後，可以。在他們的測試環境，用 Next.js 的成功率大約 40%。拿到那份資訊之後跳到 92%。

[6:02](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=362s) 沒有頻寬為每個函式庫做深的基準時，可以用 LLM 造評估資料。他們拿 270 個隨機函式庫，叫 LLM 出練習題和記分卡，再讓 agents 跑。這裡的資料是 Claude Code，Cursor 類似。最後用 LLM 依量表當評審。270 個平均，open source 的使用成功率大約從 60% 到 81%，時間還短一點，更快一點。

## 函式庫的年紀

[6:58](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=418s) 同一套測試裡，Claude Code 的成功率和函式庫年紀有關。左邊最舊，右邊最新，用的是發布日。五到十年的最好，其他 agents 也看到，差距不小。很舊的，網路上的資訊可能很亂，或真的太老、網路上很少。很新的，網上還沒累積夠，而且有些資料在訓練資料之後。

[7:46](https://www.youtube.com/watch?v=jz1hdTGjBUg&t=466s) 他們的理論是，用他稱為 tiles 的那層，可以把這條線抬平，因為資訊已經給了，agent 應該用，而它們也用了。結果被更廣地抬高。這也符合他們的軼事：對的 context 有時只是有幫助，有時是從不能動變成能動。
