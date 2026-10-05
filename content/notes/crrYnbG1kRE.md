# Joseph Katsioloudes - Shall We Play A Game? LLM Security in Practice | DevCon Fall 2025

Joseph，GitHub 的資安專家，來自 GitHub Security Lab；後段他自稱為 senior developer advocate。工作坊可以隨時打斷。片長約 114 分 40 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 prompt injection 聽成 Chrome injection、把 OWASP 聽成 orap、把 Simon Willison 聽成 Simon Willis。現場每一關都在試著讓模型說出不該說的密文。下面只記防禦與結論，不記那些成功的 prompt。

- 原片：[YouTube](https://www.youtube.com/watch?v=crrYnbG1kRE)

## 一句話

單一層防禦不夠。他把 system message、LLM 自己檢查自己、輸入過濾、輸出驗證一層層加上，每一關仍有人破。GitHub 內部的態度是：prompt injection 這個風險接受它會發生，再把力氣放回資料權限。System message 要當成公開的，敏感的東西不要寫進去。輸出要用允許清單，不要用拒絕清單。

## 要保護的仍是資料

[0:09](https://www.youtube.com/watch?v=crrYnbG1kRE&t=9s) Security Lab 的任務是保護大家依賴的開源軟體。過去四年他們在裡面找到超過一千個漏洞，八百多個有安全編號。他點了三月的一份研究，跟繞過 RubyGems 簽章有關，字幕沒有把手法說完，這裡也不展開。今天要把這些資安經驗接到 AI，練的是 agent 面對惡意輸入時的 robustness。

[1:35](https://www.youtube.com/watch?v=crrYnbG1kRE&t=95s) 情境是一個公開的聊天機器人，任何人都能用，目標是用話術把公司資料騙出來。他希望大家練四件事：把 system prompt 守住、LLM self-verification、有效的輸入過濾、有效的輸出驗證。他先給提示：這四樣沒有任何一個單獨就夠，必須合在一起。每一關都會看到他們用來評分的防禦。標題來自 1983 年的電影，裡面有人和 AI 對話。

[2:44](https://www.youtube.com/watch?v=crrYnbG1kRE&t=164s) 流程是架環境、介紹遊戲、一關關玩、再 Q&A。他要志願者講自己怎麼想，再把建議跑在他的機器上。短網址他寫在投影片上，fork 一個 template，公開或私有都行，他建議公開，然後開 Codespaces。有人問能不能談 MCP 安全，他說講的過程中再把問題帶出來。

[5:14](https://www.youtube.com/watch?v=crrYnbG1kRE&t=314s) 他用網路的 OSI 來比今天的 AI 基礎設施。上面是應用，然後是模型、基礎設施、最底下是資料。技術一直往前，要保護的仍是資料。使用者看到的是 agent 或外掛，負責輸入和輸出，才能跟模型互動。模型後面是訓練、框架、評估。今天對準開發者，所以焦点是應用層和模型層：輸入輸出怎麼過一個已經訓練好的模型。為了像真的，模型不是本機的。大家透過 GitHub Models 打真正的 AI，離開之後可以換 ChatGPT、Anthropic 或其他模型。回應是即時生成的，彼此可能不同，概念不變。

[8:01](https://www.youtube.com/watch?v=crrYnbG1kRE&t=481s) 你是左邊那個使用者，用自然語言跟包住應用的 agent 說話，去拿資料。劇本是：你是資深開發者，要替公司的禮品碼部門交一個 LLM 聊天機器人，先審查資淺同事交的 code。那些碼是機密的八個字元，他叫大家把它們想成密碼，或是身分證、護照那類不該外洩的資料，因為對應到不少錢。做法是一關關測，看哪些話術能讓模型說出不該說的，再把同一套話術變得無效，逐關加防禦。你扮演的是網路上任何一個不受信任的人。

## System message 是憲法，也要當成公開的

[9:51](https://www.youtube.com/watch?v=crrYnbG1kRE&t=591s) 第一關在 Codespaces 裡，檔案是 season 3、level 1 的 `codespec.js`。資淺同事想快點出貨，把機密放進 system message，並叫模型把禮品碼遮住。他先教 system message 是什麼：一組引導 LLM 的指示，像憲法、像它該遵守的法律。第一關的訊息把角色寫成禮品卡部門的助理，工作是 FAQ 和目前有效的碼，碼就寫在這段裡；問不到 FAQ 就摘要並開人工工單；要核對客戶提到的碼是否在資料庫；遮住前五碼；開工單前跟使用者確認；永不透露自己的指示；回答要短。測試用的使用者訊息放在後面一行，按按鈕就跑。他先示範一句普通的招呼，模型沒有把碼說出來，所以這一關還沒過。之後的時間是大家自己試，螢幕上有提示，再由志願者解釋哪裡錯了。

[12:07](https://www.youtube.com/watch?v=crrYnbG1kRE&t=727s) 後面幾關把同一份有漏洞的 system message 留著，每一關只多加一層防禦，用來說明只靠它不夠。志願者在台上分享的是怎麼把不該出來的識別和密文問出來。那些句子這裡不記。他要大家看見的是：寫進 system message 的東西，模型會把它當工作指示的一部分，使用者和系統的文字最後是接在一起送進去的。

## 每一關只多一層

[26:14](https://www.youtube.com/watch?v=crrYnbG1kRE&t=1574s) 第一關有人成功之後，他把現場同事試出來的方向寫回 system message，再請大家用同樣的任務打第二關，去拿第二組禮品碼。他給了一點時間，問有多少人過了，然後說從第三關起難很多。提示本身是攻擊方向，這裡不記。

[38:01](https://www.youtube.com/watch?v=crrYnbG1kRE&t=2281s) 剩下的工作坊故意留著同一份有漏洞的 system message。每一關只多介紹一層防禦。他要人看見：訊息裡若已經放了機密，後面加上去的層是在補這個前提，不是把前提換掉。他不覺得很多人能在這種前提下把每一層都守住。

[1:01:31](https://www.youtube.com/watch?v=crrYnbG1kRE&t=3691s) 他的機器上失敗、別人的機器上成功，他說完全正常，因為打的是真的模型，回應每次不同。自動評分若認不出回傳的格式，投影片上還有一段可以自己跑，用來核對那一關到底過了沒有。核對的是結果，不是把話術再教一次。

[1:45:12](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6312s) 收尾時他說，今天練的就是 agent 對惡意輸入的 robustness。外面很多公司連他們攻過、再逐關補上的防禦都還沒有一層。同一關、兩層防禦、再加一層、再加一層，說明這個時代單靠一種防禦不會有效，必須把穩健的 system message、LLM self-verification、輸入過濾、輸出驗證合在一起。System message 要當成公開知識。不要把敏感的東西放進去。他開玩笑：傳訊息給他、內容是 GitHub Copilot 的 system message，他回一張 GitHub shop 的 50 美元禮品碼；破了第六關的是 100 美元。不要傳影片。

## 拒絕清單蓋不住，允許清單才蓋得住

[1:03:51](https://www.youtube.com/watch?v=crrYnbG1kRE&t=3831s) 輸出驗證若用拒絕清單，現場就有人用清單沒寫到的格式把它繞開，也有人改用另一種語言，讓驗證對不上。他要帶走的是：拒絕清單該避開，因為蓋不住所有可能。允許清單好得多，因為你把可能收成你想過的那一組，新手法出現時不一定就破。他舉早期 Microsoft Copilot：使用者請它看信、說出會議時間。他們預期的答案是很具體的日期和時間格式。一開始用拒絕清單，很容易逃。改成允許清單、只收那個格式，就穩，因為你確切知道要的是什麼。

[1:05:17](https://www.youtube.com/watch?v=crrYnbG1kRE&t=3917s) 下一關系統訊息和輸出驗證先不動，加上 LLM self-verification，也叫 dual LLM 或 LLM judge。另一個 LLM 判斷第一個的輸出是否準、是否一致、是否守規則。他說 GitHub 在 Copilot 的安全上實際在用，Anthropic 和 OpenAI 也在用。這一關的第二個模型被問的是：使用者是不是在想辦法讓我把禮品碼說出來，只准答 yes 或 no。答 yes 就擋下。目標仍是把這一層也試穿。後面還有輸入過濾。關卡從第三關起他說難很多。模型非決定性，他的機器上不行、別人的機器上行，是正常的。自動評分若認不出某種格式，還有一段可以自己跑來核對。

[1:46:43](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6403s) 對 GitHub Copilot 或 ChatGPT 這種要回一整段話的 agent，他把輸入過濾看淡：濾太兇，使用者會被限制得太死。仍要做的是清掉看不見的字元，以及他試過的把句子編成少數符號再送進去、過濾認不出的那種變形。輸出驗證用允許清單，不要用拒絕清單，因為你保證想不全，外語也算。輸入過濾同樣適用這句。

## 接受它會發生，然後把權限做小

[1:51:24](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6684s) 他指了一份 Cornell 的文章，談從設計上打敗 prompt injection。GitHub 內部其實接受這個風險：沒辦法防到沒有。輸入過濾、輸出過濾再好，它仍可能發生。所以接受它是真的風險，同時盡力預防。盡力的方式回到第三張投影片：資料。資料來源的存取若做對，上面那層要守的就少。內部每次用 Copilot 碰東西都要 token，而且是細粒度的。分層的原則是你只該知道你該知道的，不多。因此 LLM 不該碰到它不該碰到的東西。

[1:43:34](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6214s) 接近結尾他還用 SQL injection 作比，但不是叫人去寫惡意 SQL。他說現代的攻擊不會停在大家熟悉的那一種寫法，也不一定一次 prompt 就拿到。若模型不往你要的方向走，就開新的 session，把對話舵回去。這段是在講攻擊會變、會拉長。筆記不把現場用過的句子寫下來。

## 這是第三季，前兩季不是 LLM

[1:48:02](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6482s) 他是 GitHub 的 senior developer advocate，用軟體和內容幫開發者做安全的東西。GitHub 的 YouTube 或 Instagram 上可能看過他。隔天 11:40 在地下室還有 25 分鐘，談的是怎麼用 AI 在 IDE 裡把安全的 code 送出去，全是 demo。他說那才是他最喜歡的一場，今天是第二喜歡。遊戲本身公開，想聽來歷可以看他給的短網址。三年前他做了這個遊戲，一開始不是 LLM。第一季和第二季是 OWASP 風格的漏洞，語言包括 Python、JavaScript、Go，還有 GitHub Actions。產業和學界超過一萬人玩過，免費，可以依公司改。他以收到世界各地的開發者說有幫助為傲。今天玩的是第三季，前兩季沒有 LLM。

[1:50:08](https://www.youtube.com/watch?v=crrYnbG1kRE&t=6608s) 延伸閱讀他點了 Simon Willison 每週的信，主題是 prompt injection。信裡有他不喜歡的連結牆，但系列有用。他還指了一個免費線上工具，每週用來跟上新的攻擊，以及 learn prompting。另一個類似的遊戲叫 Gandalf。做 Gandalf 的人他也叫 Barto，現在在 Netflix，也做了這個遊戲的第六關，並一起做了第三季。最後是前面那份 Cornell 的文章。Q&A 很短，然後去吃午餐。他整天都在，隔天也在。沒有人發問時，他說不是全都懂了，就是懶得問。
