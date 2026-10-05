# Agent Experience Is the New Developer Experience | Sean Roberts

Simon 介紹這是進主議程前的第二場 30 分鐘 keynote。講者是 Sean Roberts，Netlify 的 VP of applied AI，字幕把公司聽成 Netifi、Netlefi。片長約 30 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 CLAUDE.md 聽成 cloudMD，把 Tessl 聽成 Tesla、Tessle，把 Codex 聽成 codeex。

- 原片：[YouTube](https://www.youtube.com/watch?v=CeN6hWCoriA)

## 一句話

Agent 已經在你的 codebase 和平台上工作。問題不是有沒有，是你有沒有支援它們。Sean 把 agent experience 看成 developer experience 的延伸：文件、onboarding、刻意的設計，加總之後大於零件。這一切是為了把工作委派給 agent 的人，不是為了換掉開發者。沒有單一工具可以勾完。缺口在的時候，它會很有信心地編，或替你做決定。

## 有 developer experience，不代表它是好的

[2:53](https://www.youtube.com/watch?v=CeN6hWCoriA&t=173s) 他在 Netlify 領導 AI 計畫，長期在讓 web 更安全、更快，也在想平台上最好的 agent experience，以及 web 和 agent 怎麼一起工作。他先請資深或負責 codebase 的人舉手，再請覺得自己在照顧這份 codebase 的 developer experience 的人舉手。他說這常常是吃力不討好的工作。好的 developer experience 要有好文件、onboarding、直覺的設計，是刻意做的。可是只要允許人在你的平台或 codebase 上開發，你就已經有一份 developer experience。那不表示它好。有使用者的軟體就有 user experience，同一件事。

[4:49](https://www.youtube.com/watch?v=CeN6hWCoriA&t=289s) Agent 已經過了臨界量。Agent experience 是 agent 和你的系統或 codebase 互動時的整體經驗。他用一張對照：一邊是人手刻、漂亮、少錯的 code，從這邊到那邊的品質由 developer experience 決定。另一邊是開發者把一部分工作委派給 agent。Agent experience 就是那條連線：它們能不能做出同樣分量的工作。強調的是連線另一頭的人。今天先談 codebase，但這門紀律更寬：電商得服務用 agent 代買的顧客，機票也得處理 agent 代訂。他說 agent 目前最擅長的是 code base，而 Guy 講過，它們還有很大的改進空間。負責 developer experience 的人，現在也負責 agent experience。問號沒了。服務開發者，就是承認他們用 agent 來碰你的 codebase。

## 一人樂隊，以及這不是一個勾選項

[7:43](https://www.youtube.com/watch?v=CeN6hWCoriA&t=463s) 用 agent 不是新事。今天的狀況他叫 mini one-person band。每個人離開團隊自己摸出一套世界觀。兩天前 Gemini 3 出來，有人號稱用 anti-gravity IDE 有 10 年經驗，叫大家停下來改用它。有人會改。團隊的表面積就變大。下週還有下一個工具。每個人各自出去摸，就變成這種一人樂隊的蔓延。四個、五個同時各奏各的，那不是一個 band。Band 是為了同一個目標、用 purpose-built 的工具合在一起，為觀眾做出體驗，合起來遠超過任何一人樂隊。喜歡管弦樂比喻的人，他也放了一張。

[9:42](https://www.youtube.com/watch?v=CeN6hWCoriA&t=582s) 沒有「做了這件事就收工」的解。Agent experience 是一門 discipline，不是一個工具。為了支援 agent 就做一個 MCP server、勾一格，想得太窄。他接著列了 MTP、ADA、ACP，都在這把傘底下。大家還在摸，今天覺得有用的，明天可能被證明是錯的。他建議用 crawl、walk、run 來開始或加碼。

第一步，如果團隊是一群一人樂隊，或根本沒在做：先弄清楚。不要只憑感覺說我們很 AI native。用 Google form，或 vibe code 一份，問他們每天或隔天實際在用什麼 agent、什麼有效、什麼無效。不要再問一年前、兩年前那種「你有沒有試過 agent」。Spec-driven 的 agent experience，和沉在 Lovable 或 Bolt 裡，長得不一樣。這會幫你把後面要做的範圍框住。然後建內部社群。不用很勤，把人聚起來談撞上的問題和在用的工具。更好的學法是從看板上拿一張 ticket，看對方怎麼解、自己怎麼解。這是有 agent 在場的 pair programming，會照出大家對 codebase 和問題的不同理解。

## Context 先寫明顯的事，大 repo 再給一張圖

[13:26](https://www.youtube.com/watch?v=CeN6hWCoriA&t=806s) 下一步是讓你得支援的那些 agent 變好。Guy 前面用資料說明過，LLM 本身不足以理解你的 codebase。知識有缺口，它會很有信心地編，或替你決定。不一定是假的，也可能只是完全另一回事。他舉 Guy 的例子：選了一個不對的 theme。先把時間花在 context files：AGENTS.md、steering files、Claude Code 的檔、CLAUDE.md。他的經驗法則是，簡化不了就把它寫得明顯。很多 codebase 跑測試是一句魔法指令，那不明顯，就該放進 context。Frontend、backend、data layer 拆開的架構，它不一定知道那些連接，你不寫清楚，它每次都會自己接一條。以為很明顯、結果不是的東西，也要持續補進這些檔。

[15:31](https://www.youtube.com/watch?v=CeN6hWCoriA&t=931s) 核心 dependency 的文件是另一層。Frontend 依賴這個 backend、它在哪、怎麼用、資訊去哪裡找。第三方模組、甚至分開的第一方模組也一樣，Guy 講得很細。這件事煩了他很久。Brownfield 的現實是：model 訓練在 API 的 version 1，最新是 version 3，開發者都在用 version 2，十次有九次會搞亂。把這件事做對的工具今天還不好。他寫這段時看到 Tessl 的 registry，很興奮，打算再看。他也認為開源社群得扛更多：文件應該像型別一樣跟 dependency 放在一起。但建它的人和用它的人要的文件不同，越想優化越難。Context7 有人在用，他在版本這側碰過做得不好的情況。關鍵的第三方依賴，尤其資料庫這種又密又容易混的工具，一定要寫進 context，而且要用對。

很大的 codebase 則需要 knowledge graph，實作很多。Cognition 最近放了 DeepWiki 和 code maps。每次叫它做事，它都得自己把 repo 摸一遍。Repo 越大，越久、越貴，越容易漏或搞混。Knowledge graph 是事先產出架構、彼此關係和摘要，做事之前先查那裡。

## 回饋要寫回去，專長不要塞進同一個檔

[18:40](https://www.youtube.com/watch?v=CeN6hWCoriA&t=1120s) Feedback loop 很重要。人不得不手動介入 agent 的流程時，記下來，放進 context。那位待了 15 年、部落知識都在腦子裡的資深工程師，每次問他，若沒寫回文件或 context，Sean 說他不知道你在做什麼。Agent 不能自己去問那位資深的人。他喜歡的練習是接一個 MCP：agent 走歪時，要它回頭看這次哪裡可以更好，像一場 agent therapy，然後具體改 context files，合理的話再試一次。他說結果不錯。

CI 裡的 AI review 他不展開。他要加的一層是：除了指出哪裡錯，也建議 context files 缺了哪種 pattern，才能避免下次再發生。這是在把 feedback loop 自動化。

[20:38](https://www.youtube.com/watch?v=CeN6hWCoriA&t=1238s) 他很喜歡 ephemeral environments。Netlify 做 pre-prod 或 preview deployment，agent 或開發者要幾個都可以。它們是程式碼以外的回饋：樣式、版面、有沒有在編。人可以看，也可以讓 agent 替你看。合在一起就是：agent 發現版面錯了，去修，也寫進 context。開發者委派，agent 生 code，因為 context 的回饋而做得更好。Reviewer agent 指出以後該怎麼做，也能看 code 的實際輸出，而不只是 diff。

[22:14](https://www.youtube.com/watch?v=CeN6hWCoriA&t=1334s) 再往前，shared sub-agent 是一個解鎖。預設 agent 是 generalist。Full stack 能把工作做完，specialist 通常會好一點，甚至好一截。Sub-agent 就是一份 markdown：這是我們的 design 方法、這是帶著 voice and tone 的 copywriting、這是 data migration。你叫它做事，它會判斷該把哪一個踢起來，各自帶專門的 context。五個專長全塞進一份 CLAUDE.md 或 AGENTS.md 行不通。Context 過載，它會混，也會偷走注意力。所以現在才有這些檔。它們讓不同 codebase、不同開發者共享同一套做法。

馬上會碰到怎麼分發。Repo 專屬的留在 repo。全域的是品牌的 voice and tone、brand style、review 怎麼做。字幕把 style 聽成 styons。人可能是幾十個，也可能上千。他個人偏好把全域的集中到一個共享 repo，用 CLI 更新。Guy 的演講讓他知道 Tessl 平台也有這個能力。這是好問題：規則在 codebase 裡真的有用了，才需要傳播到多個 repo。不要把這些東西鎖死在單一 agent 裡。盤點的第一步若不是所有人都只用 Claude Code、也都只用 Codex，選一個 agent 就是災難。就算現在所有人只用一個，也是在給未來埋問題。不用 Tessl 的話，一個帶 CLI、用來同步的 GitHub repo 也可以。

## 用 eval 才敢把 context 刪掉

[25:59](https://www.youtube.com/watch?v=CeN6hWCoriA&t=1559s) 他說最前面的一截，是對 codebase 的 AX 跑 evals。Agent eval 就是把 agent 放進特定條件、叫它做特定任務、再評表現。他問有沒有人想過把 Claude SDK 或 Codex SDK 丟進 eval：在我的 repo 上試著做事，然後告訴我該怎麼吩咐你才會更好，你現在做錯了什麼。Guy 和 Tessl 團隊在開源這側做了很多。拿來跑自己的 repo，能補上文件裡已經清楚、和仍然缺掉的缺口。

它也用來解 one-way ratchet。他稱為 Asimov 的 bureaucracy 定律，字幕聽成 Asmov，還開玩笑說自己昨天之前就完全知道。定律是：法律和規章一旦生效就單調成長，不收縮，也不會被實質廢除或減少。Context rules 正在發生同一件事。漏了一條就一直加。Eval 讓你有信心把一些要求剝掉，修了一個問題卻不弄出別的問題。

[27:55](https://www.youtube.com/watch?v=CeN6hWCoriA&t=1675s) 收尾：照顧 codebase 的 developer experience 本來就是大家的責任，agent experience 不再可選。不是因為要支援 agent，是因為要支援用 agent 的開發者。他喜歡 band 這個比喻，是因為人數不決定成不成功。重要的是合奏得好不好。工具商說用了就變 10 倍開發者，於是每個人都想當自己的一人樂隊。真正奇妙的是一支 10 倍的團隊，大家共享知識、一起做。他引 AC/DC 的 Bon Scott：it's a long way to the top if you want to rock and roll。他改成：和朋友、和自己的 band 一起走，這段路會好過很多。最後請大家喝水。結尾還有一句字幕沒聽清。
