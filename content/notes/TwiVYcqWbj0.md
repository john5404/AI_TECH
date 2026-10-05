# Robert Brennan - Managing fleets of coding agents with OpenHands | DevCon Fall 2025

Robert Brennan 是 OpenHands 的 CEO 與 co-founder。DevCon Fall 2025 的現場演講，片長約 23 分鐘，英文自動字幕。開場主持人說，agent 開始能 fire and forget 之後，下一步是編排一整隊 coding agent。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=TwiVYcqWbj0)

## 一句話

單一個在工作站上的 agent 已經能把寫 code 的生產力拉高大約 20% 到 30%。再高一個數量級，靠的是把可重複的雜務拆開，讓一隊 cloud agent 各自做完、各自開 pull request，人只留下大約一成的檢查。OpenHands 的 SDK 把這條流程寫成程式：先掃 CVE，再為每一個漏洞派一個有自己 sandbox 的 agent。

## 還在第一局，但頂尖團隊已經在編排

[1:02](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=62s) Brennan 做 developer tooling 超過十年，主要是 open source，做 natural language processing 更久。他說自己現在每一行 code 都經過 OpenHands，不再開 IDE。即使技術今天凍結，文化和組織上也還有很多沒被做出來。他要講的是最有效的 agentic engineering 團隊在規模上怎麼用 agent。

[2:43](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=163s) 早期 LLM 會寫小片段，例如 bubble sort，對 codebase 一無所知，像是 Stack Overflow 的補充。接著是有 context 的生成，GitHub Copilot 接進 IDE，看得到你在改哪裡。過去大約 18 個月、尤其過去一年，tool calling 和 Sonnet 3.5 讓 agent 不只寫 code，還能跑、搜錯誤訊息，走完開發的 inner loop。現在冒出來的是平行的 agent，一起做單一 agent 扛不住的規模。

[3:51](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=231s) 市場從 plugin、AI IDE，走到 local agent。他覺得中位數開發者開始用 Claude Code（字幕聽成 cloud code）。早期採用者在用 cloud agent：自己的 sandbox，從 web、API 或 GUI 驅動，才能真的平行。最前面約 1% 的人在做 agent orchestration，讓多個 agent 互相接球。

## 編排給雜務，不給每一張 bug

[4:35](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=275s) 不是每個任務都該讓一群 agent 圍上去。修一個 bug、做一個新功能，不適合。適合的是高度可自動、可重複的 code maintenance 和 tech debt：修 open source 漏洞、寫文件或 release notes、把舊版 Java 升到新版、換一套 React state management、在 Python codebase 補 type annotation。叫 Claude Code 把整個 app 從 Angular 遷到 React，它會垮；這類事可以交給一隊 agent。

[5:35](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=335s) 他不期待每個工程師都這樣做。每人本地一個 agent、一次一件事，寫 code 大約有 20% 到 30% 的提升。有些人能認出團隊裡大塊的 toil，只對可重複的任務用 agent，遷移 codebase、自動解 CVE 這類事可以再高一個數量級。

[6:15](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=375s) 單一 agent 的迴圈很像開發本身：下 prompt、看改動、也許跑起來，再推一把或接受。多個 agent 要先把任務拆成分得開的塊，各自跑迴圈，最後收成一張 pull request 或一起合併。每一圈仍有人。他告訴大家不要期待 100% 自動，比較像 90% 自動化、10% 人在檢查。

## 怎麼拆、怎麼讓它們知道同一件事

[7:25](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=445s) Git 上的做法是先開一條 branch，寫上這次在做什麼，例如 Angular 到 React，或舊 Java 到新 Java。在 OpenHands 裡這叫 microagent，也可以是 agents.md，類似 Cursor rules，把說明 check in。先放 scaffolding，再把 agent 派出去。每個 agent 對這條 branch 開 pull request，工作積在上面。他的腦子大約在 3 到 5 個同時進行時開始不夠用；很小、很重複的任務，有人會開到幾十個。一張張合併進那條 v1 refactor branch，全部驗證完再進 main。

[8:30](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=510s) 拆任務要找幾乎能 one-shot 的：有信心 agent 做完，最多再補一輪。要放得進單張 PR，依賴要清楚：A 做完，B、C、D 平行，然後才做 E。愈能平行愈快，像帶一組人，一個做 front end、一個做 back end。還要能很快接受或退回。最好是 CI/CD 過了就可以信；不然就點一下 UI。重點是看 code、看 CI/CD，很快知道有沒有做對。

[9:48](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=588s) 做大任務時會一路學到新東西，必須讓所有 agent 都知道。最笨的是人對每個聊天窗打「用 1.2 不要用 1.1」。也可以用 agents.md 或 OpenHands microagent 分享，agent 自己也能更新。再進一步是定義 tool call，讓 agent 互相傳訊息。

## 用 SDK 掃一個 repo 的 CVE

[10:26](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=626s) Demo 是一支用 OpenHands SDK 寫的 script：看一個 GitHub repo，找出 CVE，再為每個漏洞派一個 agent。他先掃 Polaris 這個 repo。第一個 agent 自己決定怎麼掃：看語言、有沒有 Dockerfile、裝 Trivy、跑 Trivy。列出漏洞之後，每一個再派一個新 agent。一個 agent 解全部很容易迷路；一百個漏洞時，他看過 agent 解完三個就叫你去雇一隊人。拆開之後，一百個裡合併九十個、十個卡住，仍然是 90% 的勝利，而且比較快拿到部分成果。每個 sub-agent 研究能不能修、更新相關 dependency、必要時修 breaking API，然後開 pull request。現場 scanner 找到三個漏洞，派出三個 agent。

[12:50](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=770s) 偽碼裡，agent 拿到 terminal、file editor 和 task tracker，訊息是：用 Trivy 掃這個 repo 的 CVE，結果寫進 JSON。讀出 JSON 後，for loop 裡每個漏洞再送一個 agent 去解那個 CVE ID。SDK 讓每個 agent 有自己的 workspace，像各自一台筆電，不會搶著改同一份 code。Script 可以連到 Docker container 或 Kubernetes pod，本地或雲端都行。Repo 裡還有 scanner 和 solver 的 prompt：怎麼調查、pull request 的格式、style guide。Python 只負責叫 SDK 把這條流程跑起來。

[15:14](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=914s) 畫面裡它們在用 npm 裝套件、在 package.json 裡找要修的套件。問答進行到後面，三張新的 pull request 出來了，各關一個 CVE。

## 衝突、小 model，以及什麼時候不要用艦隊

[15:48](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=948s) 有人問 12 張 PR 改到同一檔案怎麼辦。他說 agent 修 merge conflict 非常好，常常比人好，因為會看原本改動的意圖。第一張合併後另一張衝突，就要再跑一輪，所以 script 常會盯著 PR：一有衝突或 CI/CD 失敗，就再送一句話請它修。

[16:43](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=1003s) OpenHands 對 model 沒有綁定，local model 也能用。他們和 Mistral 發過 Devstral（字幕聽成 Devstcrol），他說這是目前最適合本地跑的小 model，從 30 億到 320 億參數都發過；30 億不算厲害，但能動。Qwen 3、以及他相信的 Kimi（字幕聽成 Kimmy 2）本地跑起來也不錯。他們有公開各 model 在 OpenHands 上的 benchmark。

[17:44](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=1064s) 他自己的日常主要是 web app：連上 repo，講要做什麼。做這個 CVE demo 時，他叫 agent 用 OpenHands 的 software agent SDK，把 GitHub token 接成 secret。右邊看得到 terminal 和 VS Code，跟用過 Devin 或 Jules 的人很像。差別在 SDK：可重複的流程用 Python 驅動，pull request 要符合固定樣式，critical 優先於其他。非決定性的 agent 迴圈，被比較決定性的 workflow 接起來。

[19:48](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=1188s) 前一天有人講 Claude Flow，他說自己不熟。聽眾補充那是讓多個 Claude Code 成群跑的編排。他的看法是：很多人用 tmux 開好幾個 Claude Code，幾個還行，但都在同一台機器上，裝不同版本會互相踩。把每個放進雲端 sandbox、Kubernetes，或至少本機 Docker，分隔才有用。艦隊適合會一再重複、不值得對每個聊天窗打字的任務，想要的是程式裡的決定性流程。

[21:22](https://www.youtube.com/watch?v=TwiVYcqWbj0&t=1282s) 新功能開發他通常開幾個聊天窗，一個 front end、一個 back end，因為不夠重複。若每個功能都是一頁 React 加一個 API endpoint，也許可以做 boilerplate，把同一條 workflow 重複跑。這套東西真正發亮的地方仍是 tech debt 和 code maintenance。
