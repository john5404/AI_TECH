# Derek Ashmore - AI-Powered Application Modernization | DevCon Fall 2025

Derek Ashmore，DevCon Fall 2025。片長約 26 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 modernization 聽成 monetization 或 monitorization，把 Claude Flow 聽成 Cloudflow 或 clawed flow，下文用校正後的詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=LX_AAUS3MWU)

## 一句話

現代化在他這裡主要是把應用變得可搬上 cloud，而不是順手換掉 tech stack。他用 Claude Flow 帶一隊 Claude Code agent，對一個大約 2020 年後就少有維護的大型 Java CRM 做 12-factor 分析、排出修補順序，也去看能不能改搬 SaaS。產出要 trust but verify。速度快的價值，是管理層可以多問幾種「如果這段不做」的情境，而不是把 model 估出來的價錢直接拿去編預算。

## 現代化是可搬，不是只換技術

[0:09](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=9s) 他把 agentic AI 用在寫 code 以外：架構、大型專案規劃、市場分析、把應用換到別的工具或產品，以及 legacy code。外面常說 agentic AI 搞不定 legacy。他先這麼講，接著收回來：有些他試過的 tooling 組合成績不好，目前這套則對 legacy 很順。現場用過 Claude Flow 的只有一位；用過 Claude Code 的多一些。Claude Flow 底下跑的是一隊 Claude Code agent。

他先把詞講清楚。[4:34](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=274s) 很多人以為 application modernization 就是更新 tech stack。那比較像副產品。客戶來找他們時，真正要的是搬到 cloud，或字幕聽成 cube 的那個平台，用上 dynamic scaling 和較高的 availability。很多 legacy 做不到。所以他把重點放在 application portability，而不是 tech stack 本身。另一件一起發生的事是 code 變得很難改，每次 release 大家都怕不知道會壞什麼，所以現代化也是 code management 的改變。

[6:01](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=361s) 他用 12-factor app 當尺。2012 年，後來被 Salesforce 買下的 Heroku，有人整理出 12 個特性：應用若要放上 cloud、用到 resiliency 和 dynamic scaling，就該長這樣，讓 hosting 環境是選擇，不是烤死在裡面的要求。公司不會為了好玩去現代化。應用太難改，又想上 cloud，而且他們已經知道 lift and shift 沒有大家想的那麼管用。

## Claude Flow 替你組隊

[7:18](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=438s) Claude Flow 跑一隊 Claude Code agent。裝好，再加上一點 Claude Code 的設定，幾分鐘就能跑，不是幾小時或幾天。他不想把時間花在 plumbing。預設由它管團隊。Cursor 前幾週在 IDE 裡可以同時跑多個 agent 做不同的事，他覺得是很好的改進，但那會逼他 micromanage。Claude Flow 把這件事做掉。

[8:41](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=521s) 被分到任務的 agent 裡有一個 coordinator。它看他要團隊做什麼，再決定要 tester、coder、project manager、analyst、researcher，或其他角色。他可以插手這些決定，到目前還沒有必要。吸引力是易用：時間花在他要的結果上。

## 十分鐘的 12-factor 報告，一小時的覆核

對象是 Orienteer CRM。就他所知，大約 2020 年後大致停更。他選 Java，不是偏好，是因為外面的 legacy 有很大一塊是 Java。[9:48](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=588s) 以前接到現代化案，第一件事是組團隊去審計 codebase，看要修哪些東西才上得了雲，也就是哪裡違反 12-factor。他改成寫一連串英文指示，投影片上有整理過的版本，詳細指示有連結。請團隊做 12-factor analysis：原則在網上有定義，去讀；不要改應用；只要指出違反在哪，好知道要修什麼才能做 dynamic scaling 和 high availability。

大約 10 到 11 分鐘後，回來一連串 markdown。投影片只放了 executive summary 最上面。它走完 12 個因素，後面還有違反的位置，以及它認為要改什麼。[12:06](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=726s) 他不當成可以直接收。人做的分析他也是 trust but verify。現場沒時間，他事後把生出來的 20 到 30 頁逐行看過，大致站得住。它把項目分成不同 status。有幾處標成 critical，他可能會改到 poor 那一檔。這種挑剔，他對人做的報告也會有。結論是：應用不支援 dynamic scaling，用 stateful sessions，有 hard-coded credentials，沒有 health checks，是 monolithic，沒辦法單獨擴某幾塊。團隊 10 分鐘交卷，他大約花一小時看完。

[13:49](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=829s) 下一步：假設每個問題都要修。用資料夾裡那份分析，給一份 execution plan。先不要改 code。要修的順序、怎樣做才安全，再加上一套 automated acceptance tests。Legacy 常常沒有好的自動化測試，他每次現代化都會加上，希望改壞的東西在 deploy 前有機會被抓到。回來的東西含估計的人力、哪些是人做、哪些是 agent、runtime cost，以及依當時市場行情他要付多少。他說那是 Claude Code 訓練裡的說法，不會直接拿去跟管理層要預算。第一次他忘了講：不要假設全是人類 coder，要假設用 agentic 做法、Claude Flow 和 Claude Code 的 agentic engineers。所以改過幾版。

## 管理層改範圍，以及乾脆換 SaaS

[16:16](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=976s) 當架構師把變更影響拿去給管理層，對方第一不喜歡價錢，接著會問某一段建議不做會怎樣。以前人去重算，幾天有答案。Claude Flow 大約 10 到 20 分鐘。他還是要看有沒有幻覺，以及自己有沒有把想推演的變更講清楚。他不喜歡寫 80 頁的發現報告。

[17:42](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=1062s) 換成人類團隊，他一樣 trust but verify。預測不管是人或 Claude 的團隊，都有誤差，沒有水晶球。他在意的差別是：Claude 沒有公司政治，也不會被上面的人叫去把結論扭向某幾個事實。速度快，管理層就可以多問幾種情境。換位想，高層猶豫開口，是因為知道要付錢、人要花幾小時或幾天、顧問費他們不愛付。若知道他是拿回 Claude Flow 團隊、一天內能回來、而且沒那麼貴，他們就會多問。

[19:50](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=1190s) 現代化的痛一旦被看見，就會有人問：能不能把使用者搬到一個大致合用的 SaaS，配一配就好。他要團隊拿這份 codebase 去找可以搬過去的 SaaS，優先保住功能，因為業務該做的事不能少，同時優先安全和搬遷。這次久一點，大約 15 到 20 分鐘，依 Orienteer 的功能給出前三個 SaaS。團隊等於被綁著手：若是真的安裝，他可以告訴它使用者用哪些功能、不用哪些，分析會不一樣。他沒有那些資訊。在他給的條件下，建議是 Salesforce。時間不夠，這段他講得快。

## 故事會變大一點，但還不是一次做完

[22:07](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=1327s) 收束：這件事超出 coding。架構師可以用它做架構規劃，團隊常提出他沒想到、但值得聽的主意。Team lead 要知道工作是小、中還是大，才能跟高層講。Agile 團隊用它拆 story。在他看，這個世界的 story 會比純人的團隊大一些。人的團隊常把 story 切到兩天以內；外面宣傳的是一次做完。他把它看成一條線：agent 讓團隊做得了稍大的 story，但還沒到 one-shot。

[24:21](https://www.youtube.com/watch?v=LX_AAUS3MWU&t=1461s) 有人問，若採用 spec kit 這種 spec-based framework，因為已經離開 vibe，Claude Flow 會跟它搶還是可以合在一起。他沒有具體試過，所以這段是他會怎麼試，不是已有的經驗。他會告訴團隊這個 spec framework、已經有哪些 spec 產物、該怎麼解讀和使用，看它做出什麼，並讓它在自己的 feature branch 上做。不喜歡就再試。他預期要試幾次才會得到能用的結果。
