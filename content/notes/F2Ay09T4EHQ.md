# GitHub, Snyk, Docker & Anthropic on Securing AI Agents

片長 10 分 17 秒，英文手寫字幕。剪輯。大約四千個 skills 的掃描，他說大約七分之一有問題，同時指著一個寫著 30% 的東西。兩句都在，下面不把它們算成同一個比例。

- 原片：[YouTube](https://www.youtube.com/watch?v=F2Ay09T4EHQ)

## 一句話

Agent 拿到鑰匙之後，安全變了：prompt injection、被下毒的 skills，以及多數交給 agent 的工具根本沒有安全控制。GitHub Security Lab 的 Joseph Katsioloudes 說，大約每 100 個開發者才有 1 個 application security 專家。他不要再講 shift left，要講 start left。後段把 production 裡的 memory 講成要有版本、要知道根據哪份 transcript，以及寫入前比對 hash。

## 差距在左邊，所以從寫 code 的時候開始

[0:00](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=0s) 六月倫敦有一連串演講，談 agent 拿到鑰匙之後安全會怎樣。Prompt injection、被下毒的 skills，以及一個尷尬的事實：多數交給 agents 的工具完全沒有安全控制。

[0:18](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=18s) GitHub Security Lab 的 Joseph Katsioloudes。旁白說大約每 100 個開發者有 1 個 application security 專家，他主張不要再說 shift left，要說 start left。他今天要給的是你可以自己做的、用 AI 做安全的實務做法。Claude Code、Codex 都行，不只 GitHub Copilot。

[0:59](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=59s) 他說平台上有超過 1.8 億開發者，用來建和擴展安全的軟體。他的團隊是 GitHub Security Lab，任務是保護大家依賴的 open source。上週他們展示有人可以用 heap buffer overflow 打 7-Zip。他們找到並幫忙修了超過 1,000 個漏洞，其中 900 多個有獨立的安全識別碼。最重要的是幫人把那些修掉。這重要，是因為安全和開發者之間有缺口。若要量化，每 100 個軟體開發者只有 1 個 application security 專家。

[2:22](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=142s) 第一句話是：AI 可以幫著縮小安全缺口。第一件是寫出更安全的 code。他整個職涯都在聽資安高層講 shifting left。問題是你一直往左移，左邊仍然有缺口。它當然得碰到開發者，碰到 code 一開始怎麼被做出來。

## 七分之一的 skills，以及一把會拒絕的 Claude

[3:04](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=184s) 換了一段。他的團隊掃了大約 4,000 個已發布的 skills。大約七分之一有問題。大約一月、二月是高峰，他們掃的是 ClawHub 上大約 4,000 個 skills。他說這就是那七分之一，同時指著「這是 30%」。七分之一的 skills 有某種問題。

[5:36](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=336s) 畫面上是 Claude 在 auto mode。他叫它跑這個 skill，它合理地拒絕了。

[7:09](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=429s) 他看到自己的 SSH 目錄裡有 20 把鑰匙。看到之後，他把它們全遷進 1Password 或類似的地方。

## Memory 要能退回，也要知道是誰寫的

[8:01](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=481s) 再換一段，講的是自主的 memory。內容 maybe 寫錯了，甚至有人用 prompt injection 讓 agents 把壞東西寫進 memory。所以要有很多 guardrails，這些好看的自主 memory 才能在 production 運作。

[8:21](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=501s) 設計任何 memory 系統，都要能存版本，才知道發生了什麼，新版本不好時可以 rollback。你大概也想知道這次更新根據什麼 context、哪一份 transcript 讓你想改，以及是誰做的：哪個 agent、哪個人。

[9:11](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=551s) 幾千個 agents 共用同一套 memory 時，他們用的是 hash。Agent 決定要寫一則更新時先取一次 hash。真正寫入前再取一次。兩次不一致，就不能寫，因為中間已經有人改過。處理方式是重新讀 memory，依新內容再起草，然後再試一次 commit。這些是讓多個 agent 的架構、以及 memory，擴得上去的工程做法。

[10:00](https://www.youtube.com/watch?v=F2Ay09T4EHQ&t=600s) 片尾約十一月紐約的 AI DevCon。
