# Jonathan Vogel & Onur Dogruoz - Context Aware Development in Kiro | DevCon Fall 2025

片長約 22 分鐘，英文自動字幕。DevCon Fall 2025 第二天。Onur Dogruoz 帶 AWS 北美的 developer advocacy，Jonathan Vogel 做 Kiro 的現場 demo。字幕把 Kiro 聽成 Kira、Curo、Kuro、Hero，把 Vogel 聽成 Vogle，把 Onur 聽成 owner。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=2CXr9T1J-Bk)

## 一句話

模型會以很快的速度吐 code，但你不確定它是否照你的規格在做。Kiro 想把 software development life cycle 的做法放進 IDE：specifications、hooks、steering、MCP。現場他們用 Strands 做一個 dad joke agent。沒有 Strands 的 context 時，它寫出不該出現的 JavaScript；接上 MCP、再產生 steering docs 之後，才寫出 Python，並部署到 Amazon Bedrock AgentCore。

## 光速吐 code，之後還是要盯

[0:18](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=18s) Onur 先問誰這週寫過 code、誰用了 AI、誰花更多時間在修 code、寫文件、跟 code 糾纏。他說這些事用 Kiro 不必這樣。

[1:23](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=83s) 這幾年從 code completion 走到模型自己寫 code。問題是它們像在以光速吐 code，後面仍要大量 oversight。你從來不能百分之百確定它運作正常，或正好符合 specification。他比喻成請承包商改建這間房間：要多功能、牆上要有藝術。問不同的人、在不同時間問、做法不同，至少會有幾千種結果。

[2:28](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=148s) Kiro 要把這些未知拿掉，把軟體開發的 best practices 放進一個你能信任產出的 IDE。當天稍早 Al 講過 spec driven development，Burk 和 Victor 講過市面上不同工具。他重述三塊。

- **Specifications。** 你說要做什麼、要它做什麼、你會跟著哪些步驟。
- **Hooks。** 他說可以簡單想成在特定動作上跑的 agents。存檔時 hook 可以自動跑，不必一次次重新 prompt。
- **Remote MCP。** 從別的系統補 context。文件是最容易的一種，其他系統也能接。

這場不放投影片，改做 live demo。他先自我介紹：自己帶 AWS 北美的 developer advocacy，然後把 demo 交給 Jonathan。

## 沒有 MCP，它會寫出看起來能跑的 JavaScript

[5:21](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=321s) Jonathan Vogel，AWS 的 developer advocate，也深在 Kiro 社群裡。他說今天從 abstract 倒推：context-aware AI coding，然後真的做 agents。時間不夠，所以這段用 vibe，不走 Al 講過的 specs。

[6:10](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=370s) 畫面右側是 Kiro 的 let’s build prompt。他要做一個 Strands agent，呼叫 LLM 產生 dad joke。Strands 是 AWS 的開源 SDK，當時只有 Python。Auto mode 底下叫的 model 可能沒有 Strands 的訓練資料。它開始生成 JavaScript。他說這就是 AI coding 工具的典型：code 看起來很厲害，其實完全不對。

[7:02](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=422s) 他用 Kiro 的 checkpointing 回到當時的 snapshot。他說你仍該用 version control、該 commit，但這一步更進一步：把 context 也拉回去。這個變更不可逆。有人插話這全是幻覺，他同意。

[7:41](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=461s) 左側是 specs、hooks、agent steering、MCP。他從 MCP 開始，把 Strands agent 的 MCP server 接到 Kiro。到 kiro.dev 的 MCP server 目錄，一鍵加入，寫進 JSON，再啟用。Prompt 改成：去參照 Strands agent MCP server 拿需要的 context，demo 只留幾行，用預設 LLM。

[8:57](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=537s) 它先問能不能呼叫 MCP tool。允許之後，它用 search tools 搜文件、抓文件，context 進到 model，再生成 code。出來的是呼叫 LLM、產生 dad joke 的 Python。他說幾行就能做一個 AI agent。前提是他已經配好 AWS 帳號、credentials，以及 Amazon Bedrock，用來呼叫 Anthropic Claude 這類 foundational models。字幕把 Anthropic 聽成 enthropic。

## Steering 讓後面的回合還帶著同一份 context

[10:23](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=623s) Steering 是讓這份 context 在後面跟 agent 的互動裡一直附著。他按 generate steering rules。Kiro 生出 markdown：product 是用 Strands 做的簡單 dad joke generator；structure 是怎麼組織、有哪些 conventions 和 code patterns；tech stack 是 Python 和 Strands。字幕把 tech stack 聽成 text stack，把 joke 聽成 choke。

[11:12](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=672s) 他先證明 agent 能跑：建 Python virtual environment、裝 Strands、跑程式，叫它講一個 dad joke。準備 demo 時他發現模型偏愛同一則：why don't scientists trust atoms，because they make up everything。字幕把 atoms 聽成 Adams。他提醒人還是可以直接改 code，不必事事靠 LLM，於是改 prompt：用獨特主題當種子，不要再用那則 atoms joke。

## 把 judge agent 部署到 AgentCore

[12:40](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=760s) 接著做 multi-agent，把 agent 部署到 production。Amazon Bedrock AgentCore 讓 agent 在生產環境擴展，不必自己管 infrastructure。他打開 AgentCore 的 MCP server。他說其實可以叫 Kiro 去 curl 文件網址、自己搞懂怎麼加，但這次他從文件貼上設定。

[14:01](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=841s) Prompt 是事先寫好的，live demo 仍然非決定性。他寫明：用 AgentCore 做 dad joke judge；產生出來的 joke 會交給一個 production agent 評分；用 AgentCore MCP 文件、Python AWS SDK、Strands；payload format 和 response structure 都講死，避免它走錯或幻覺。他說它仍可能亂做，他們有準備。時間緊，所以繼續用 vibe mode，不做 spec。他允許它跑 AgentCore 的 MCP tools。

[15:31](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=931s) Onur 幫不熟的人對一下：Kiro 加 MCP server 是為了拿到文件和當下的資訊；Strands 是用來建 agent 的 SDK；AgentCore 是 agent 住的地方。它可以住在桌機或其他地方，生產環境通常不會是你自己的環境。AgentCore 是受管理的環境，不必自己處理擴展和部署。

[16:17](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=977s) Jonathan 連跑幾次腳本，出來 scarecrow joke 和 elevator joke。他知道文件要求先裝 dependencies，於是自己先裝，同時讓 Kiro 依 MCP 收回來的 context 列出要做的事，再叫它去建。

[17:10](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=1030s) 新的 Strands agent 是 dad joke judge。AWS console 裡已開著 AgentCore。回到 Kiro，code 寫好、開始部署。他指出和 Strands 相同的概念：簡單的 import、簡單的 agent prompt，再加上 Bedrock AgentCore app 的 import 和一個 decorator。他說不到 20 行就能在 AgentCore 部署一個 production agent。

[18:19](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=1099s) Kiro 還在 prototype 流程裡繼續，但 agent 看起來已經部署。沒部署的話只會呼叫本地版本；這裡確實部署了。Console 上看到 runtime agent judge 和時間戳。終端顯示 agent 被推到 AWS 的 US East 1。他們用一則 dad joke 測過，回應給了分數：為什麼是 8 不是 10？Because I didn't think of it first。

## 概念可以帶走，Kiro 本身不必有 AWS 帳號

[19:20](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=1160s) 開場延遲，他趕著收。今天示範的是用 Kiro 當 AI coding 工具，用 Strands 或你想用的 library 建 agent，再用 MCP 把 context 接進你偏好的工具。他口頭把 MCP 展開成 multicontext protocol，字幕如此。他說這些概念可以套到別的工具，也歡迎試 Kiro、給回饋；他們在社群裡聽開發者的聲音，放進路程。

[20:16](https://www.youtube.com/watch?v=2CXr9T1J-Bk&t=1216s) 結尾是 QR code 和 kiro.dev，他說今天就能下載使用。字幕有一句像是週一的產品消息，聽不清楚，筆記不補。Onur 補一點：部署 AgentCore 需要 AWS 帳號；用 Kiro 本身不必，可以用 social login 或 builder ID。也有 free tier，不必先付費。後半那句字幕不清。
