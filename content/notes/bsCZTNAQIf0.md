# DevCon London: Real Talk on AI ROI, Harnesses & Evals (BONUS EP)

Simon Maple 在 AI Native DevCon London 的 expo 跟講者、與會者、贊助商聊天。這是這個會的第四屆、第二場實體、第一場在倫敦，地點在市中心 The Brewery，靠近 Barbican。原片約 24 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=bsCZTNAQIf0)

## 一句話

會場上大家要的不是更多產出。Chris Baty 說該量的是 outcome，不是 commits 或 tokens。NearForm 用一個 AML 案例說明落差：人要做 3 到 4,000 小時的案子，agents 約 20 分鐘做完。AutonomyAI 把真正卡住的地方說成 change management。收尾時 Tessl 把人的槓桿從「叫 agent 做什麼」移到 harness：hooks、context、verifiers。

## 會場，以及先量 outcome

[0:00](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=0s) Simon 先進 expo。中場休息，人很多，贊助商攤位繞一圈，也有免費衣服。

[1:03](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=63s) 第一位與會者一個人在做 fintech startup，把 blockchain 跟 public、private markets 接在一起。他來找工具、practices、processes，讓產出更可靠。他記得的場次包括阿根廷來的 Maximilian、Web MCP、Dave Farley，以及一位他一時叫不出名字、在用 Pi 的講者。Simon 的回應是：agentic development 每個人做法不同，要走出自己的路，同時看已經在規模上做的人。

[2:36](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=156s) Chris Baty 做工程大約 20 年。過去幾年他在一家顧問公司裡組 product team，加人、做產品。演講講的是這個團隊採用 AI 的教訓，以及五年前做不到的事。他給走在同一條路上的人一句話：盡量避開 vanity metrics，例如 code、commits、tokens。看的是從想法到有人真的在用軟體的整條 delivery。摩擦通常不在寫 code，他們連 product management 的想法產出都還可以。瓶頸是找真人來用，並且很快把回饋收回來。

[3:44](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=224s) Simon 問愈高層的人是否接受這種指標、而不是 token usage。Chris 說愈往上，談 business outcomes 愈受歡迎：outcomes over output。追 vanity metrics 的通常是中階主管，因為好量。對更高層可以說，某批客戶在某個日期前做完這件事，那就是唯一的成功標準。他不在乎用了多少 tokens、多少 commits、做了多少沒人用的功能。功能現在太好做，大家都在受苦於做出沒人用的東西。能把 outcomes 做高、tokens 用少、產品裡的功能更少，更好。

## 工具變了，skills 卻散掉

[5:15](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=315s) Martin 在 Train Guard 的 AI automation team。Copilot 一開始告訴他該做什麼時，他就在試。他曾想把它做成 function 的 predictive text。他跟 Simon 約 18 個月前由 Alan Pope 介紹，在 Starbucks 第一次見面。當時他們談的是 model 的能力。不久之後 MCP 和 agentic 起來了。他覺得 model 本身進步很大，真正的 force multiplier 是模型周圍的工具：skills、MCP servers，把比較新的資訊送給 model。他喜歡一個 virtual SRE：看進現有的 observability stack，像一個看過歷史問題的 SRE，自動提出修復。現場他們把這個攤位對上 AutonomyAI。

[7:21](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=441s) Ryan 是 tech lead。他來找自己還不知道的缺口，找到的是 harness，對他是新概念，還有 evals。他馬上想試的是 evals：公司裡 skills 散落各處，想收攏，再看 evals。問題主要不是他先講的 distribution 或重複，而是 skills 進來得太快。中階到初階的人不知道自己該用哪些。所以是 consolidation，加上要知道去哪裡找。他接下來想去一場跟 test strategy 有關的 workshop，Simon 猜是 Tessl 的 Brooke 和 Macie。

## 先計畫，不要把判斷交出去

[8:50](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=530s) Manny Saka 長期支持 AI Native Dev。他從 software engineer 轉成 AI/ML engineer，軟體工程大約 25 年，近 8 到 10 年認真做 data science 和 machine learning。解 ML 或 AI 問題時，他仍戴著軟體工程的 best practices 帽子。

[9:32](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=572s) 他覺得現在的人讀得更少，把工作丟給 non-deterministic 的那一側。要逼自己把流程和步驟寫下來，降低 non-determinism。用一整群 agents 做出東西、卻不知道它做了什麼，接著就不會用。沒有計畫、一個 prompt 接一個 prompt 的 vibe coding，不是好做法。他對另一位與會者講 Einstein 的說法：給一個問題和一小時，他會花 55 分鐘理解問題，5 分鐘求解。AI 是來加強人的技能，不是把事情全部交出去、自己不再知道發生了什麼。它能讓人變成 10 倍，但要有紀律、有計畫、有結構。他點名 Guy 的開場、Patrick 怎麼在 AI 時代帶團隊，以及 Dave Farley 前一天的收尾。

## NearForm 的數字，Snyk 的信任

[11:58](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=718s) NearForm 的創辦人說，從 CFP 開放到現在，harness engineering 變成一件事；三個月前還不是。CFP 大約三、四個月前開，開會時什麼會熱，當時不知道。另一件大家在問的是：幾個月後要怎麼付得起這些費用。

[12:44](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=764s) 客戶要的是怎麼從 1、2 個比較先進的團隊，走到 100 個團隊。他們做手把手的 workshop，拿幾個 lighthouse projects，跟客戶的團隊一起做，把信心做出來。也有 applied AI。一家金融機構的 AML 專案裡，KYC 這類工作交給 agents，一批 AML cases 大約 20 分鐘清完；同樣的事以前大約要 3 到 4,000 小時的人力。另一個現代化案子，幾年前報價超過 €10 million，程式庫又大又老。AI 之前他們估過。最近重做，同一件事低於 €2 million，時間大約是原來的 35%。

[15:21](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=921s) Snyk 這段沒有把受訪者的名字說清楚。Simon 看到採用程度差很多：從謹慎但好奇，到幾乎 YOLO。兩邊都有辛苦換來的判斷。謹慎的人要的是讓 AI 留在軌道上，同時放出速度，而不是放手接受全部風險。對方把問題收成 trust：不必盯著每一件事，也能相信它沒有跑掉。Snyk 想提供的就是這種可以依靠的東西，讓人不必把方向盤握死。而且要能 scale、要能寫進程式、要嵌進 workflow，不能把事情拖慢。

## 沒有工程師也能 ship，以及 Tessl 的 harness

[17:01](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=1021s) Ali 是 AutonomyAI 的 founder 和 CEO。產品 Fei 被說成是長在既有 codebase 上的 operating system：讀懂現有程式、components、design system 和 design library，然後讓 PM、designer、professional services 這類非技術或半技術的人直接在 production code 上做完，不必跟 engineering 來回。技術的人習慣 CLI。他們給的是 web。PM 不知道平台的限制；Fei Studio 讓他們按一個按鈕，pull request 會理解整個系統。PM 要會問畫面上的事、產品上的 KPI，不必知道背後的 code 怎麼寫。他們的 CTO Thomas 也有一場演講。

[18:43](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=1123s) Ali 聽到的抱怨是錢和力氣花很多，指針幾乎不動，大約只有 5% 到 10%。他們跟人不先講產品，先看 workflow 裡真正的瓶頸。卡住的通常不是寫 code 的速度，是組織裡的流程。他要人多花時間的那一個詞是 change management：工具不是只為了寫得更快，而是怎麼編排整個組織。

[19:28](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=1168s) 下一位受訪者的名字字幕沒接上。他聽到的是：人對 agents 很興奮，到處安裝，做出很多 skills，然後緊張起來。擔心安全，也擔心怎麼追蹤、怎麼分享。Simon 把這收成 distribution、以及能不能驗證它們好不好、安不安全。對方還期待一場講 GitHub automation 的演講。他覺得 GitHub 和 GitHub Actions 會是之後自動化的一大塊，但也把問題丟回去：GitHub 有這個機會，抓不抓得住是另一件事。Action 本質上是使用者定義、在雲上跑的 workflow。Agent 可以放進這個順序、停放和分支裡。但 code 現在很便宜，人可以叫 agent 自己在本機寫一套 orchestrator。所以關鍵是：讓 agent 去用 GitHub Actions，要比自己再寫一套更容易。

[21:35](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=1295s) Guy 的場次宣布了 Tessl agent 的 early access。說法是人要往上移，做 harness engineering，而不是只告訴 agent 做什麼。環境要讓 agent 跑得起來：hooks、context、verifiers，用這些讓它產出對的 code。Tessl 幫你把環境、生態和 codebase 設好。人的槓桿點變成定義 agent 該怎麼運作。它該做什麼，比較容易收進一張 ticket。有興趣的人去 tessl.io/agent 排隊。

[22:41](https://www.youtube.com/watch?v=bsCZTNAQIf0&t=1361s) Simon 在給講者和部分 VIP 用的房間收尾，說腦子塞滿了演講和 hallway track，明天開始把這些拿去用。片尾他和 Guy Podjarny 是主持人，製作人是 Tom Dowler，倫敦 Tessl 辦公室有每月聚會，連結是 tessl.io/community。
