# AI Adoption at scale in an engineering team, Thomas Bentkowski , Product Manager of Doctolib

Thomas Bentkowski，Doctolib 的 AI platform product manager。片長約 21 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=RTCKpPnxe6g)

## 一句話

Doctolib 從五月 30 人的 pilot，在一個 quarter 裡把 AI coding tools 發到整個 tech 組織。目標先是每天都用，而不是先證明生產力。600 位工程師裡，他說目前 60% 是 AI 的 daily active users，weekly active users 在 75% 到 80%。卡住採用的是品質、不會用、怕被取代、成本和碳排、以及沒時間。採用上來之後，多出來的 PR 又把 review、story 和 deployment 變成新的瓶頸。

## 從 30 人 pilot 到整個 tech 組織

[0:00](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=0s) Thomas 要講的是把 AI 採用從 30 位工程師擴大。Doctolib 是病患向執業人員預約的線上平台，業務在歐洲。他說公司有 600 位工程師，當下 60% 每天在用 AI，點名的工具是 Claude Code 和 GitHub。Weekly active users 在 75% 到 80%。

五月先有一個 30 人的 pilot。領導層想靠這些工具拿到生產力，同時已有工程師自己在用，公司裡出現他們不想要的 shadow IT。[2:00](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=120s) 他跳過 pilot 細節。大約一個月後回饋偏正面，於是在 Q3 一開始把 license 發給所有工程師，當成整個 tech 公司一個 quarter 的實驗。單一目標是讓每個人每天用 AI。理由是 agent coding 還新，use case 每週都在出現，所以先把實驗和一起學習放在前面，之後才放大 impact。

他做的是 tech 題目的 platform product manager。做法是把工程師當成客戶：大量訪談、聽抱怨和痛點。今晚要講的，就是這 600 人裡最主要的採用摩擦，以及對上去的動作。

## 品質、不會用、以及怕被取代

[4:07](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=247s) 第一個摩擦是 quality 和 reliability。工程師擔心工具生出來的 code 很差、進不了 production，有時也覺得 LLM 的輸出不能拿來做。新進的人一進公司就先受訓，對齊內部建議。文件空間放 best practices：怎麼用 Claude Code 寫 unit test、怎麼處理 documentation、怎麼把 React Query 從 v4 換到 v5，也寫 pitfall，例如 LLM 每次都對工程師太客氣。

[5:47](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=347s) 第二個摩擦是沒信心，也不知道手上三個新工具該拿來做什麼。人很難判斷怎麼把 LLM 用到自己的 codebase，也不知道別人已經做出哪些 use case。七月初他們辦了一週的 AI camp，給整個 engineering team。資深工程師帶 hands-on，小組大約 10 到 15 人，把工具設對。另外每週用 Slack、email 等管道發 digest，把特定團隊的成功案例傳給其他團隊。

[7:28](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=448s) 第三個摩擦在一開始就很重：工作會不會被機器換掉，以及抗拒讓機器寫 code。Camp 裡請了一位字幕聽成 “Google VM” 的人講 LLM 是什麼、token 怎麼運作，把「不是魔法、後面有技術」講開。為了回應被取代的恐懼，他們和 CTO 一起寫了 “AI augmented engineer vision”，在 camp 上分享：他們相信該怎麼用 AI 來增強工程師，並把這看成產業下一步該接住的事。

## 帳單、碳排，以及 10% 到 20% 的實驗時間

[9:16](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=556s) 第四個摩擦是成本和環境。他舉了一種很貴的 model，字幕聽成 “ongo”，以每百萬 token 的美元計價，帳單可以變得很大。LLM 要資料中心的算力，最後是碳排。成本這邊，領導層背書整個 tech 組織去實驗、找新 use case、彼此分享、再往上疊。環境比較難答：他說還沒有夠大的論文能講清這些 LLM 的碳排。他們試著放回整體脈絡，若 LLM 幫你省下幾小時寫 code，也許也省了一點電，但這不好量。另一條路是本地跑 model。他提到 OpenAI 不久前放出 gpt-oss、200 億參數，適合本地，於是在特定 use case 上用它，減少打到資料中心的呼叫。

[11:47](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=707s) 第五個摩擦是拿不到 license，以及沒時間：roadmap、專案、deadline 都在。他們做了清楚的 onboarding。有人偏 CLI，字幕裡的例子是 neo；有人用很重的 JetBrains IDE。建議依現在的 IDE 給對的工具，文件裡放一張 map，免得去要錯工具。時間則寫進制度：每位工程師每季都有個人目標，他們要求 engineering manager 把 10% 到 20% 的時間設成純粹實驗其中一種工具，並回報 feedback。

## 採用之後要量的不是 PR 數量

[13:22](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=802s) 焦點從 adoption 轉到放大並測量 impact。三個月前相比，pull request 若變成兩倍，不代表生產力翻倍，因為 bug 也可能翻倍。所以他們同時看工程輸入，像 PR 數、程式碼行數，以及 DORA 那類指標：deployment frequency、lead time to change；再用一組對照 KPI 看本週引入多少 bug、多少 incident、change failure 如何。

夏天他們發現產業在同一題上往前走。這不是業配。一家叫 DX 的公司有三層 framework：adoption、AI impact metrics、以及對 business 的影響。他建議去看。

[15:16](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=916s) 目前的力氣幾乎都花在寫 code。PR 變多，review 也變多，工程師每天要看更多 PR。Story 被消耗得更快，可能變成瓶頸；deployment 若跟著變頻繁，流程也得跟上。只推 coding，software development life cycle 其他地方冒出他們今天還在找的瓶頸。他們在想的是整段怎麼用這些 AI tools、怎麼形成 AI 文化。

## 現場問答：還太早，IDE 也還沒換光

[17:33](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=1053s) 有人覺得 lead time、從想法到交付，在這些數字裡特別醒目。Thomas 說 DORA metrics 作為產業標準值得看，但他們還在把這些 framework 套到自己的指標和 feedback 上，影響還說不出來。DX 這類正在變成標準的東西，至少能告訴你方向對不對。對他們來說還太早。

[19:08](https://www.youtube.com/watch?v=RTCKpPnxe6g&t=1148s) 另一問是訪談裡有沒有看到人從重型 IDE 轉到比較輕的框架，後面掛著 Claude Code。他說工具使用上有：一開始採用領先的那個工具，字幕沒有聽清名字；現在領先的 AI 工具是 Claude Code，多數工程師在用它。純 IDE 這邊，JetBrains 的使用者仍然很多，因為綁著他們在寫的語言，例如 Java 和 Kotlin。後面關於 license 的句子沒被聽清。
