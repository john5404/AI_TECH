# How Slack AI Agents Accelerate Dev Productivity | Samuel Messing

Simon Maple 訪問 Sam Messing，Slack 搜尋與 AI 的工程 VP。他在 Slack 四年，進來時是後端的個別貢獻者，軟體資歷大約十五年。片長約 52 分 11 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Tessl 聽成 Tesla 或 Tessell、把 Claude Code 聽成 Cloud Code，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=jCVvVVXcxbQ)

## 一句話

他對團隊常說的是 context is everything。企業裡的上下文大到搜尋和 LLM 必須一起做：搜尋負責找得到、權限守得住，模型負責綜合。開發上，AI 很會做機械的遷移和測試，也會一次吐出五千行。人剩下的是批判、把任務講具體，以及承認意志力一天就那麼多。

## 搜尋和 AI 已經是同一件事

[3:15](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=195s) 他帶 Slack AI。企業裡對齊很難，資訊過載來自產業變化的速度，也來自很多很聰明、很有魅力、很intense 的人各自生想法。LLM 的 context 還沒到 token 上限，品質就會掉。客戶的規模：IBM 十萬人在用 Slack，Salesforce 七萬五千人。所以他們認真做的是 context engineering，不是只做 prompt engineering。內部常問這是搜尋還是 AI。他的答案是現在沒差，是一件事。要照顧的不只是對 LLM 做什麼，還有送進去什麼。使用者不在乎是搜尋還是 AI，在乎結果可不可信。

[6:46](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=406s) 搜尋的天花板，他用一家大報當例子。他們接 Associated Press 的 wire，像 RSS，每則標題加大約一百字，讓記者感覺世界的脈搏。若把「保加利亞發生什麼」當搜尋，你會看到一堆文字，還得自己讀。搜尋在追相關，不在幫你做縱向的整理。AI Search Answers 把原始結果合成一段人讀得懂、帶引用的文字，再回到那些訊息。反過來，有些職位必須回每一則進來的訊息。他們要的是依時間排好、存下來、反覆 triage。這時綜合不是他們要的，coverage 和 recall 比較重要。LLM 的摘要幫不上。他要的是兩者並用，不是二選一。

[9:48](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=588s) 他特別得意的功能是 AI Explain。對單則訊息按一個動作，它會詳細解釋。他當工程 VP，被點進 incident channel，工程師還在處理，他不想拖慢他們。訊息裡一堆縮寫，以前要問人，不是拖到正在做的人，就是再拉更多人。現在用 AI Explain 自己追上：縮寫是什麼、為什麼重要。這同時是搜尋和 AI。先搜出更多 context，再用模型綜合，也帶進模型本來就有的知識。

## 權限在模型之前，不靠事後把關

[11:51](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=711s) 使用不是一條懸崖，過了大家就突然信任。不同功能給不同人。他最得意的之一是訊息翻譯，可以設成自動：對方的語言和你的 UI 語言不同就翻。有的公司和個人很需要，他自己大多跟母語英語的人說話，幾乎不用。採用深度也不同。很衝的例子是 Playtika，用 Agentforce 做可設定的主動 agent，帶銷售走完一筆生意：通話前準備、客戶研究分析、通話後摘要。三個 agent 平行，把業務準備通話的時間降下大約 50%，upsell 的 bookings 也升了大約 50%。另一端的客戶一次只試一個功能，很在意 change management 和 LLM 的邊界。

[13:54](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=834s) 他希望每個客戶知道兩件事。Slack 裡發生的溝通，是別處拿不到的 context。第二是權限結構嵌得很深。他們 HIPAA compliant，大企業的合規很緊，AI 功能也一樣。員工會不會透過搜尋看到不該看的。他們做了 just-in-time 的權限層。搜尋先只搜你有權限的頻道，結束前再查一次，因為權限會變，有 lag 和 skew，所以要有即時的那一段。這全部發生在 LLM 介入之前。他們不做生成式 AI 的訓練，用的是現成 LLM。Context 永遠經由有權限的搜尋填進 context window。用內容去訓練模型，他覺得危險得多。產業還不知道怎麼在那個層級控制 LLM，所以他們連探都不探。Simon 同意：資訊一旦給了模型，就得預期它按自己覺得最好的方式用，事後設閘很困難。

[17:06](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1026s) Dreamforce 在 10 月 13 到 16 日那週。他不能講細節，但 Slack 會推一個很個人化的體驗，他覺得市場上還沒人這樣做。地點在舊金山，他請人看 Slack 的 keynote。

## 內部開發：機械的活很快，五千行則是另一種工作

[17:53](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1073s) Slack 是工程組織，要用最前面的工具。他們也做 AI 功能。他覺得開發者比誰都更早懂怎麼跟 agent 協作，所以他看全公司怎麼用 AI 開發，是在猜非技術角色的未來。他們採用 Cursor，也在試 Claude Code、Windsurf 和其他。花很多時間把內部工具接成 MCP：實驗和 feature flag、資料與分析、跨多種語言的 code search。他當 IC 時，有人問一個使用量，他該寫 SQL，但得先知道哪些表是真的、哪些數字可信。例如幾年前遷移留下的 `users_final2`。他們做了一個叫 Jimmy 的 chatbot，也做了 MCP，讓開發者探索表、理解怎麼問，並生出 SQL。任何工程師都該答得出自己功能的使用量問題。對還沒摸清 Slack stack 的 junior 特別有用。很多人用 Cursor agent 先懂 codebase，再把 prompt 寫具體。跟 agent 說話，具體很重要。他覺得這和職涯裡的技術溝通是同一條肌肉：賣得了想法、講得清自己做了什麼，以及對不同聽眾該細到哪。

[23:05](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1385s) 最成功的是比較機械的工作。Slack 像很多成熟的 web 產品，從 JavaScript 漸進走到 TypeScript，沒人碰的舊檔就留著。他們用 Claude Code 的腳本加速，而且 Slack 有自己的型別和組織方式，prompt 裡要寫進這些怪癖，工程師可以同時跑。過去六個月，超過 50% 的舊 JavaScript 轉成 TypeScript，再幾個月該做完。沒有 AI 時，他們原本想這要兩年，因為還得做新功能和修 bug。Unit test 也是。框架很怪，junior 會卡在怎麼把測試架起來，而不是在測功能本身。

[24:53](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1493s) 難的是推測性的東西。他和一位 principal 在做 Slack 裡的 MCP client 原型，企業合規軟體上這代表什麼，還要很久。後端是 Hacklang，他說 TypeScript 之於 JavaScript，就像 Hacklang 之於 PHP。Hacklang 沒有現成 MCP client SDK。那位工程師找到 Go 的實作，請 Claude Code 對著他們的 codebase 全部轉成 Hack，然後走開。它轉了兩小時，回來一份能動的實作。PR 有五千行。他不會讓工程師交這麼大的一張 PR，審查的負擔很大。他們還在學怎麼評估、怎麼讀。這不一定是問題，是另一種還在試驗的工作方式。Simon 補了一句老話：五行的 diff 可能有五百則意見，五百行的 PR 可能一則都沒有。Sam 說他們不是要變成那樣。

## 品質靠跑起來，也靠把意志力用在刀口上

[28:25](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1705s) 他一直在很大的公司、很大的 codebase，幾千甚至上萬工程師碰同一份 code。熵和看不懂變化，本來就在。能沿用的是 unit test、integration test 這類韌性。Code 能不能動，讀得懂不夠，最後要跑。他們也開始用 AI 看 production。Slack 的頻道依主題組織。以 huddles 為例，有一個 alerts 頻道，相關警報都浮在那裡。可以用 search answers 問發生什麼，頻道很吵時也可以摘要，看出隨時間的變化。

[30:04](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1804s) 比較難講的是人怎麼看自己的角色。他要團隊想兩件事。批判性思考是肌肉，得一直練。意志力一天有限。五千行沒人評論，是因為讀到後來沒力了。要選擇性地要求隊友，也要要求自己，把時間花在批判上，並承認該休息。他常說 slow is smooth，smooth is fast。這個時刻很難真的靠向這句，但他認為這才是為客戶做出最好、最有韌性的軟體的方式。

## Slack 被他看成工作的作業系統

[31:16](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=1876s) Simon 想起早期 Devin。Tessl 用過一小段，第一個介面就是 Slack：在 thread 裡聊天、它問幾個問題、花時間生 code、跑測試、把 code 交回來。有時行，有時不行。Devin 想當團隊裡的那個程式員，所以靠聊天。Sam 不接受把 Slack 只叫 chat app。他們想的是 work operating system：一組會互相作用的 primitive，讓你在上面做出東西。一般 OS 上長出來的是應用，Slack 上長出來的是一家企業。有聊天，也有視訊的 huddles、放結構資料的 lists、放比較鬆的文字的 canvas，彼此嵌得很深，AI 可以原生拿這些 context。透過 Agentforce，agent 可以生成 canvas、建立 list，甚至隨著事情進展開頻道。問 Slack AI 可以把這些都拉進來。他直接做的是 enterprise search。加上 work objects，他們在讓你看企業裡其他應用的 context。他為一個很興奮的提案寫了 Google Doc，在 Slack 分享。Work object 看得到所有關於那份文件的對話，包括他有權限、但不是成員的公開頻道。他看得到自己的想法怎麼在公司裡傳。

[35:37](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=2137s) 他不覺得 Slack 會是未來的 IDE。他覺得 Slack 是你建造、運行、執行整家企業的方式。他們私下玩過一個極端：一個 solo 創業者的 workspace，裡頭 10 到 100 個 agent。他已經在做一個來玩。問 Cursor 改產品，Vercel bot 送 preview link，他點開看，回到 thread 說不要紅的、要黑的。也接了 Perplexity，問競爭者、問別的公司，對話轉到一個頻道，再用 AI search 看市場。還有稜角。可以想像 Cursor 讀到別家的新功能就主動生功能，Vercel 通知可以試，GitHub 開三張 issue，Cursor 看到又去修。他們在暗裡摸 agent 彼此、以及跟人之間怎麼配合。

[37:41](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=2261s) Simon 覺得決定在進 Cursor 之前就做完了：文件、討論、Slack 和 Google Doc 裡的 context。缺的是把那些關鍵決定送進 Cursor。Solo 是不是未來，還是仍是一小組人帶討論、agent 在對的時候插進來。Sam 說 solo 只是把想法推到極端，他不覺得那是現實方向，團隊會比那大。Agent 不是人，替換不了人。它們現在尤其擅長比較受約束、比較機械的部分。他把它們看成加速器，拿掉冗贅和摩擦，讓人去做有創造性的事。還是得有人寫 prompt。Agent 可以互相生 prompt，但他不覺得它們會像人那樣想像未來，也比不過人的創造力。他覺得幸運的是 Slack 的人很聰明、觀點很不一樣，最好的點子從這個多樣性來。現在的痛是意見都很強、都對，分析癱瘓。有效的是承認說到臉發青也不會知道，要做出來試。Slack 一直是 product-led：在乎用起來的感覺。他看得到 agent 讓這件事變容易。兩人對 Slack composer 有不同想法，各自用 agent 做出簡陋版本，才能感覺哪一個好，也才能讓團隊往前。

## 未來的工程師，以及要做給 agent 用的介面

[42:25](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=2545s) 工具從單行建議、多行，走到 agent 接更大的任務。好工程師的技能他覺得不會換：好奇、有同理、會批判、會自我反省、一直在學。這個產業一直在被打斷。他給團隊最大的建議是去試，問自己還有哪些用法。以前一位音樂老師說，練樂器有時最好的方式是去美術館看畫。你不能只做一件事。他現在用 ChatGPT 玩遊戲 Oblivion，畫不出跟工作的直線，但他在用 agent、在玩、在想。好奇和願意實驗，是因為沒有人知道這會去哪。Simon 說 Tessl 也鼓勵人在工作之外泡進 AI。做 AI 工具的人，要知道自己喜歡什麼、別人在發明什麼，才對使用這些工具的人有同理。

[46:15](https://www.youtube.com/watch?v=jCVvVVXcxbQ&t=2775s) 使用者也開始包含 agent。Salesforce 和 Slack 有 Agentforce。Slack 做功能時會問：agent 會怎麼用，怎麼把動作暴露成 Agentforce 上的 action。暴露給人的方式和暴露給 agent 的方式不必一樣。他們在做 real-time search API，十月會有早期 GA，是對著 LLM 的。人在 Slack 裡看到一則搜尋結果，可以點進 thread。給 agent 的 API 要更多 context，所以他們先給那則周圍的訊息或整條 thread。他們還在試要不要教它人是誰、誰跟誰工作、關係、職位。這些不會在第一版。產業裡的 agent 體驗大多仍是單人。Slack 內部開始有多人的做法：有人為 codebase 的某部分寫 CLAUDE.md，別的工程師用到更好的 agent 體驗，甚至不知道是誰寫的。他們也在試頻道裡多個 agent、多個人同時讀、同時說，怎麼讓它有價值，而不是堆成一團。有的原型是頻道裡一有問題 agent 就回，有的要你把它叫進來。他在意的是 early adopter 和還沒發現功能的人。他常說 show don't tell。Canvas 的 AI 仍比較像單人。他每週五寫一段 prompt：把這週做的事依主題摘要成一份文件。每週一：讀所有未讀 DM，給他行動計畫，誰該回、什麼最急。體驗很好，但得自己發現。他們在試怎麼做成範本、分享出去，同事每週五也能跑同一段。
