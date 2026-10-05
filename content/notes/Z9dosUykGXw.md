# ​MCP Mayhem: Fun Ways AI Agents Write Bad Code - Andrew Oates

片長 16 分 12 秒，自動英文字幕。標題是 Andrew Oates。他自己說 Andrew Rhodes，在 Snyk，波士頓辦公室，帶 open source analysis，也在建新的 agentic development 團隊。Snyk 被聽成 Sneak。中間好幾個「出包」的故事只留下片段。

- 原片：[YouTube](https://www.youtube.com/watch?v=Z9dosUykGXw)

## 一句話

標題叫 MCP Mayhem，他說其實不是在講 MCP，只是頭韻太好吃。他要的是怎麼想 agents 和 LLM 的心智模型、出事時有多好玩，以及這個模型怎麼在變。三件他稱為 antics 的事：生產力、生成出來的 code 的安全，以及開發過程本身的安全。不要把 agent 單獨留在你的小孩或 production 資料旁邊。

## 第一個 vibe，以及名字被拿走

[0:00](https://www.youtube.com/watch?v=Z9dosUykGXw&t=0s) 他會講快，好留時間喝酒和社交。內容 Sonia 有幫忙，她今天來不了。序幕是他第一次 vibe coding 的重演，大概 2022。他想整理行事曆，不會寫 Apps Script，也不想學。當時還不是 Gemini，他記得是 Bard。他說寫給我。後面那次整理沒被摘全。

[5:22](https://www.youtube.com/watch?v=Z9dosUykGXw&t=322s) 他可以花兩小時看它怎麼設計時器、用哪些 API 和函式庫。他真正要寫的演算法很簡單。他想改的那個變更，句子沒說完。

[11:26](https://www.youtube.com/watch?v=Z9dosUykGXw&t=686s) 有人去抓了一個名字。是 Hugging Face CLI。他們把這個套件的名字設起來，說看看會發生什麼。三個月內超過 30,000。後面的後果沒被摘全。

[12:41](https://www.youtube.com/watch?v=Z9dosUykGXw&t=761s) 然後數學的骰子稍微偏一點，它就往古怪的方向跑。99% 的時候不會發生的事，現在發生了。它可以用幾秒做完你幾個月的工作，然後說對不起。他說好，但有點太晚了。這裡看得到它有能力懂數學、懂自己行為的影響。若沒有 guardrails 去觸發那個，或乾脆讓它發生不了，你會有很糟的一段時間。

## 三件 antics

[14:25](https://www.youtube.com/watch?v=Z9dosUykGXw&t=865s) 第一件其實關於生產力。第二件關於生成出來的 code 的安全。第三件他覺得有趣，是過程本身的安全。這是新的開發方式，有新的性質、新的問題。保護這個過程，和保護這個過程的產出，一樣重要。

[14:45](https://www.youtube.com/watch?v=Z9dosUykGXw&t=885s) Agents 需要被監控。不要把它們單獨留在你的小孩或 production 資料旁邊。Guardrails 很關鍵。最後一件他想過、但還需要更多探索：人類用的開發環境，和 agent 的環境不是同一個，也不該是。我們給它同樣的工具。它可以跑 CLI、碰 code 和文件，也常常在 CLI 裡運作。但你會想給它一個不同的世界觀。怎麼做一個跟開發者環境分開、而且受限得多的 agent 環境，是值得探索的。

[15:32](https://www.youtube.com/watch?v=Z9dosUykGXw&t=932s) 第三部，未來？他不知道。會找出來。以電腦科學的背景看，過去幾年的 AI 發展有多少是這些 LLM 的原始處理能力。一個月一個月、一年一年比，那些花俏的數學精巧了多少，很驚人。他的假設是這會因為成本而高原化。我們知道怎麼做，但貴得難以置信。他想拿電腦怎麼運作做類比。句子在這裡結束。
