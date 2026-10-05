# Bots that don't suck: How to use agents that help you write code - Amir Shevat

Amir Shevat，基金的 general partner，投資 dev tools 與 AI。片長約 21 分 47 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Devin 聽成 Devon、把 OAuth 聽成 OOTH、把 Tabnine 聽成 tab 9、把 CodeFlash 聽成 code flesh、把 Tessl 聽成 Tesla，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=pbjJIkarY2E)

## 一句話

會寫 code 的 bot 一開始多半很糟，這可以接受，但不能停在 0.1 就判定它沒用。他把用法分成你當駕駛的 co-pilot、即將進團隊的 autonomous agent，以及他很討厭這個名字的 vibe coding。認真的產品不會靠 prompt 堆出來，要靠 spec、範圍，以及人來補 AI 還做不好的複雜介面。

## 為什麼現在要用，以及三種東西

[0:00](https://www.youtube.com/watch?v=pbjJIkarY2E&t=0s) 他從 Microsoft 的 SharePoint 與 .NET 做起，後來在 Google 做 developer relations，碰 Chrome、cloud、Android。進 Slack 時是平台上線前兩週，離開時有 25 萬 weekly active developers。之後在 Twitch 當 API 的 VP，接 Ubisoft、Riot、EA。自己的新創 Reshuffle 被 Twitter 收購：Jack Dorsey 要他把 API 打開，後來 Elon 又把它關掉、把他們解僱。大約八年前他寫了一本 designing bots，當時說人會用對話跟軟體互動，但沒有預測到 LLM。另一本是做 API。O'Reilly 封面是他爭取來的 Siberian husky。

[2:44](https://www.youtube.com/watch?v=pbjJIkarY2E&t=164s) 用 AI 寫 code，是為了更快、少做雜事。shift left 之後，工程師還被期待兼任 SRE、QA，也許還有 security。這些也能交給 AI。最後一條才是重點：不用就會被留下。

[3:35](https://www.youtube.com/watch?v=pbjJIkarY2E&t=215s) 他的分法有三層。Co-pilot 是現在多數人在用的：Claude、Claude Code、Cursor。你是 pilot，它幫忙。Autonomous agent 他覺得現場幾乎還沒有人真的在用；大約還要一年，每個組織才會有一個能做一件任務的 autonomous agent。Product Hunt 的 Ryan Hoover 把這種同事叫 synthetic humans，工程師會在 Slack、Jira 裡跟它們一起把任務做完。Vibe coding 這個名字他很討厭，比較像 PM coding：有意圖的 subject matter expert 在跟 AI 對話。它不是 co-pilot，因為不假設你是負責的工程師；也不是 autonomous agent，因為商業上的決定仍在你。

## Co-pilot 先放一邊，agent 才是這段的例子

[5:29](https://www.youtube.com/watch?v=pbjJIkarY2E&t=329s) Cursor 他不講，因為大家都在用。若公司要自己的雲、自己訓練、資料留在自己的 cloud，又有 HIPAA 或 FINRA 的顧慮，他推薦 Tabnine 當替代。

[6:25](https://www.youtube.com/watch?v=pbjJIkarY2E&t=385s) Devin 一開始很糟，大家以為那家公司會倒。他見過團隊，營收已經超過一億美元，而且在 production 裡。用法像團隊成員：在 Slack 叫它處理一個 bug，或做一次 production 變更。他的看法是，多數 bot 一開始都會很糟，像早期手機又重、電池又差，但會變好。不要卡在 0.1 就說不適合自己，要持續 test、evaluate。他認為大約一年內，就會有能持續幫忙的 productive agent。

[8:21](https://www.youtube.com/watch?v=pbjJIkarY2E&t=501s) heel.dev 用 black box 爬網站：什麼是好的體驗、什麼像 mobile、哪裡看起來不對，然後開 bug，開給你或開給 Devin。多個 bot 互相說話，價值才會疊上去。他說他們之後也會走到 API 與 backend。

[9:21](https://www.youtube.com/watch?v=pbjJIkarY2E&t=561s) 工程師多半討厭回答 marketing 和 sales。DOSU 會為應用產生文件，並在內部持續支援：customer success 在頻道裡問，它回答。它也會看人怎麼答，記下來，下次重複使用。他玩過，覺得重複的瑣事它答得很多。

[10:47](https://www.youtube.com/watch?v=pbjJIkarY2E&t=647s) 還有一類很窄的 subject matter expert bot。優化 code 不是通用 AI 的強項，因為真的會優化的工程師很少。CodeFlash 來自 Facebook 裡專職優化 code 的團隊，把 best practice 訓練進去。目前他覺得只做 Python，並往多個 codebase 與 open source 走。流程是先為一個 function 寫 test，再優化，確認 test 過了，然後送 PR。他預期還會看到管 security、優化、成本的同類 bot。

## Vibe coding 先拿來做原型

[12:20](https://www.youtube.com/watch?v=pbjJIkarY2E&t=740s) Vibe coding 做 prototyping 他覺得很好，但要 production ready，他覺得還沒到 100%。他跟 Lovable 的創辦人說過，用它做企業應用有機會，對方的問題是結果可不可預測、有沒有 guardrail。他轉述成：還不想讓 AI 把客戶資料刪光。所以若要在企業裡用，他目前只給 read only；等結果更可預測，才給 write。Rapid prototyping 他仍然喜歡。他看到的新方向是從 web 走到 iOS、Android 的 native prototyping。

## 現在擅長什麼，以及人還得補的洞

[13:54](https://www.youtube.com/watch?v=pbjJIkarY2E&t=834s) 這頁他標成 currently，因為兩三個月後可能就過時。現在好用的地方，是範圍清楚、有 spec。他相信之後不是 prompt driven，而是 spec driven，認真的產品沒有一條路是靠 prompt 建起來的，比較像 spec 再往下接 cascading spec。Web 與 front end 比 back end 好，因為模型是在網路上訓練的，而網路上多數是 front end。常見語言好過少見語言，JavaScript 大概好過 C++；熱門 framework 也一樣。他合作過的一家新創從 Astro 換到 Next.js 之後，體驗好很多，用 Astro 時幻覺多很多。

[15:16](https://www.youtube.com/watch?v=pbjJIkarY2E&t=916s) 做不好不代表不用，而是人要繞開。複雜任務是一個洞。他問過誰叫 AI 寫過 OAuth；他在 Slack 時，API 的頭號抱怨就是 OAuth 太複雜。Billing 也一樣。他跟 Base44 合作時的做法，是把 AI 會卡住的部分先做成樂高：OAuth 已經有一段能動的 code，叫它只接到那個 interface，把 front end 接上去。AI 比較會組裝已經能動的積木，不比較會自己把積木做出來。

[16:33](https://www.youtube.com/watch?v=pbjJIkarY2E&t=993s) 多系統、多 API 仍是問題。MCP 開始有幫助，但模型還是常搞不清該選哪個系統、哪支 API、哪個版本、哪些參數，所以要不就要寫得更具體，要不就用 MCP。大型 context、很多 repo 更糟：企業級 repo 最容易得到的是聳肩，context 越大，幻覺越多。指示含糊時，會掉進「fix it」的迴圈。Base44 現在甚至提供工程師來幫你 debug vibe coding 的結果，他覺得這大概是世界上最差的工作之一，也因此 spec 才說得通。

[18:08](https://www.youtube.com/watch?v=pbjJIkarY2E&t=1088s) 結果要可預測時，不要叫 AI 寫 SDK。下次再跑，函式名稱、參數順序都可能變，客戶會很生氣。Austin 的 Liblab 試過用 AI 取代 template，最後做不到穩定的 interface。問題不在實作，在介面每一版都在破。真的需要可預測的結果，他仍要人或 template。

[19:05](https://www.youtube.com/watch?v=pbjJIkarY2E&t=1145s) 他收在幾條實務上：把任務寫清楚，用 spec，定範圍；找到適合的 bot，會很糟的那些要持續測；AI 說做完了，還是要自己驗證。他投資的 Tessl 團隊在維護一份這個生態裡 bot 的更新。結尾他帶了一段在 Google I/O 幕後用的熱身舞，說公開演講在美國比死亡更可怕；那一段跟怎麼用 agent 無關。
