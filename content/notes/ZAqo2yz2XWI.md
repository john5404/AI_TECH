# What Devs Must Understand Before Building With AI

片長 9 分 56 秒，自動英文字幕。這段沒有把主要講者的名字念穩。中間有幾段沒被摘到。ChatGPT 被聽成 chat GBT，Claude 被聽成 cloud。有一個被攻擊的產品名聽成 iter，不改成別家。

- 原片：[YouTube](https://www.youtube.com/watch?v=ZAqo2yz2XWI)

## 一句話

規格可讀，所以人審得了。聊天產品的記憶不是模型的記憶。走 API 時，每次都得把 context 再送回去。把對話壓成摘要會丟掉大約一半的指令。他後來把一份大 Markdown 拆成像 Jira 那樣的小任務，手做了大約 50 個之後才自動化。示範裡一個該幫忙領養狗的模型，卻跑去回答二加二。

## 規格之所以值得審

[0:00](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=0s) 有了規格文件，可以請 AI 把那些規格整理出來。人很難用文字把意圖說清楚，因為跟 AI 之間有 context。一旦走得夠深、事情變複雜，他覺得會有一大堆 context。

[0:20](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=20s) 他一開始手動寫 Markdown 任務。問題是 context 巨大，成功率不好，也很難 rollback。ChatGPT、Claude 桌面版有對話記憶。模型本身不是這樣。AI 有 API。所以要延續 context，就得每次把它送回去。

[0:46](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=46s) Spec 最大的好處是可讀，所以真的審得了。理論上也可以把測試宣告成 source of truth 來審，而不是審 spec。但如他們談過的，沒有人想讀別人的 code。這句沒說完，後面跳了一段關於請 AI 把某段 code 變安全的例子，摘錄不完整。

## 摘要會丟指令，所以改拆任務

[4:21](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=261s) 中間有活動廣告，11 月 18、19 日紐約或遠端。回來的做法是叫 agent 把先前的對話做成摘要，再用那個摘要的最小 context 重新開始。問題是摘要裡的指令只有你交代的一半。

[5:24](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=324s) 下一步是把大 Markdown 拆成較小的任務。像 Jira 或字幕聽成 Lina 的那種專案工具：單一任務只定義要做什麼。一開始他手動做。大約到 50 個手動任務時，他像任何工程師一樣想自動化這件手動的事。後面怎麼自動化，摘錄沒留住。

## 一個該領養狗的模型跑去寫作業

[7:48](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=468s) 示範裡它記得名字是 Josh，也答得出二加二。這是問題。它不該幫人寫作業。它該是幫人領養狗的模型。他們已經漂到深水區。他提到有公司的助手被 prompt poison，去寫惡意 code，而不是做原本的事。有一個名字字幕聽成 iter。另一個他說像 Amazon 的助手，有人用 prompt 讓它生成 code，而不是幫忙處理 Amazon 的事。他們不想讓它漂太遠。任務是讓人領養狗，除非你想讓它知道二加二。

[8:49](https://www.youtube.com/watch?v=ZAqo2yz2XWI&t=529s) 所以要給 system prompt，定整體的語氣。他貼上自己的 system prompt，中間還有一個把 `cat` 換成狗的玩笑。內容是：你是 AI 助手，幫人從叫 Pooch Palace 的領養機構領養狗。地點包括首爾、東京、新加坡、巴黎、孟買、新德里、巴塞隆納、舊金山和倫敦。他們人在倫敦。可領養的狗的資訊會放在下面。沒有資訊時，就禮貌地說現在沒有狗。
