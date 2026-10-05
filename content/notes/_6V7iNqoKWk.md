# The Developer's Guide to Multi-Agent Automation | Itamar Friedman and Robert Brennan

片長 11 分 33 秒，自動英文字幕。Itamar Friedman 和 Robert Brennan。中間有幾段沒被摘到。A2A 被聽成 ADA。

- 原片：[YouTube](https://www.youtube.com/watch?v=_6V7iNqoKWk)

## 一句話

多個 coding agents 可以平行或依序寫 code，也可以分成不同角色。一種是一個 agent 配不同 prompt 和工具。另一種是架構根本不同：審查或安全的 agent 可以很結構化，一百條規則裡 LLM 只出現在少數步驟。很重複的工作，例如依賴和漏洞、Python 2 到 3，常常大到單一個 agent 一次做不完。編排可以自動化到大約九成，人只留最後一點驗證。怎麼把問題切開，是人想得最多的地方。

## 一個統治全部，還是圖都不一樣

[0:00](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=0s) 為軟體開發生命週期做多 agent 系統時，可以有多個 coding agents 平行或依序寫 code，你得決定怎麼做。也可以有不同角色的 agents。有些任務超可重複、超可自動化。把它們丟給雲上的多個 agents，可以再多一層自動化和生產力。

[0:29](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=29s) 問不同模型、不同 agents、不同廠商做不同角色有沒有價值。有些人想到不同 agents，第一個念頭是給不同的 prompt。那個架構基本上是一個 agent 統治全部，你只要給不同工具和不同 prompt。那是一種。另一種是 agents 的差別大得多。整個架構、它們怎麼建的圖，可以完全不同。

[1:05](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=65s) Coding agent 要真的做它的工作，是一種圖。安全 agent 或 code review agent 也許要更多結構檢查，例如 A、B、C、D。你 maybe 有 100 條規則要確定被遵守。那個審查 agent 要結構化得多。裡面有 LLM，但它的圖 maybe 十步裡只有一步有 LLM，其實相當結構化。你也可以給不同權限。所以有一場討論：你是要一個 agent，還是要這些差別。中間有一段沒被摘到。

[4:58](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=298s) 開發者回報的比例從 33% 到 80%，取決於你問的是哪種技術、怎麼問。他們認為 context 才是品質差和幻覺這類問題的主要原因。那也是他們對 coding agent 的第一個要求：把這件事改進。中間又有一段沒被摘到。

## 重複的大任務，自動化到九成

[8:44](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=524s) 很典型的是依賴管理、修 codebase 裡的 open source 漏洞，以及一些更長的任務，例如從 Python 2 升到 Python 3，或從舊版 Java 升上去。這些會吐出很多行 code，但很多時候仍大到單一個 agent 一次做不完。他們叫 agent orchestration 的做法，是先想這個可重複的問題要怎麼解，而且能跨很多 codebase 擴展，然後自動化到大約 90%，人只留在你需要最後那一點驗證的地方。

[9:40](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=580s) 多個 agents 不必是同一個。他覺得待在單一 agent framework 裡有幫助。沒有什麼必然阻止一個 agent 跟另一個說話，也有被聽成 ADA 的協定。他們用 OpenHands SDK 試著做的，是一個框架，讓你做多個不同的 agents：不同的 system prompts、不同的工具、不同的 MCP servers。讓那些 agents 互相說話，給你一個座標多個 agents 的單一框架。

[10:18](https://www.youtube.com/watch?v=_6V7iNqoKWk&t=618s) 一個大任務通常有好幾個 agents 可以一起做。他們不會把那個大任務直接丟給整群。得拆開。怎麼拆，是過程裡人想得最多的一步。你可以跟 Claude 這樣的 LLM 把問題談一遍，幫忙拆成咬得動的任務。但你也得靠自己的直覺：什麼真的解得了、什麼人審得了。你能交給 agent、它交回來時你能很快驗證它做了還是沒做的，才是那種任務。
