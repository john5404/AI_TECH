# Sean Roberts - AX⚡️DX  High voltage dev workflows | DevCon Fall 2025

DevCon Fall 2025 的 keynote，主持人說大約 30 分鐘，字幕到約 28 分鐘，英文自動字幕。講者 Sean Roberts，在 Netlify 帶領 AI 計畫（字幕把 Netlify 聽成 Netifi、Netlefi、Netlifi），頭銜在介紹裡是 VP of applied AI。他說自己很長一段時間都在讓 web 更安全、更快，在 Netlify 則想著平台上最好的 agent experience，以及 web 和 agents 怎麼一起工作。主持人是 Simon。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=tGmwqBHoWFM)

## 一句話

Agent experience 是 developer experience 的延伸，不是要取代開發者。人已經把工作委派給 agent，agent 能不能做出同樣的成果，取決於你給它的那一段體驗。管 codebase 的 DX 的人，現在也管 AX。這是一門紀律，不是裝一個 MCP server 就結束。Sean 用 crawl、walk、run 把起點講完：先搞清團隊每天用什麼，再把 context 和回饋補上，最後才是共用的 sub-agent、跨 repo 發佈，以及用 evals 衡量 AX、並把只會變長的規則剪回來。

## 你已經有 AX，只是可能很差

[2:03](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=123s) 他先問誰是 senior 以上、或負責一個 codebase，再問誰覺得自己是這份 DX 的 steward。他謝謝這些人，因為這常常是吃力不討好的工作。好的 DX 大於零件的總和：文件、onboarding、直覺的設計，都是有意做的。但只要有人在你的平台或 codebase 上開發，你就有一份 DX。那不表示它好。有使用者的軟體就有 UX，同一件事。

AX 也一樣。[3:11](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=191s) 已經過了臨界點。問題不是 agents 會不會碰到你的 codebase 或平台，它們已經在了。問題是你支不支援。AX 指的是 agent 跟你的系統或 codebase 互動時，那一整段體驗。

他用一張圖說明。一邊是手寫、他開玩笑說漂亮又沒錯誤的 artisan code，從起點到結果的品質由 DX 決定。另一邊是開發者把其中一段委派給 agents。AX 就是中間那條線：它們能不能幫你完成同樣的工作量。整段是為了線另一頭的人。跟取代開發者無關。今天他談的是 codebase，但這門紀律更寬：電商要服務讓 agent 代買的顧客，機票也要處理 agent 代訂。現在 agents 最擅長的仍是 codebase，而 Guy 已經說過，還有很多可以變好的空間。

[5:30](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=330s) 他再問一次誰負責 DX。手放下了一些。他說舉著手的人，大概全場都算，現在也負責 AX。以前也許還是問號，現在不是。服務開發者，就得承認他們也用 agents 來碰你的 codebase。

## 一人樂隊湊不成一個 band

[6:12](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=372s) 用 agents 不是新事。新的是他說的 mini one-person band。每個人自己離開團隊，摸出一套有效的做法，拼成自己的世界觀。兩天前 Gemini 3 出來，有人自稱用 Antigravity IDE 有十年經驗（字幕說 anti-gravity），叫大家停下手上的、改用這個。有人會改。團隊的表面積就擴大。下週還有下一個工具。各自出去摸索，長出一片 sprawl。

四、五個人同時各玩各的一人樂隊，沒有人看過那種演唱會，因為那不是一個 band。一個 band 用的是為這件事做的工具，朝同一個目標，給觀眾一場好體驗。合在一起能做的，遠超過任何一人樂隊。喜歡管弦樂的比喻，他也放了一張。

[8:17](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=497s) 沒有「做完這一件就可以收工」的解法。AX 是紀律，不是某個工具。以為要支援 agents 就做一個 MCP server、打勾、結束，把問題看太窄。MCP、ADA、ACP 都只是這把傘底下的解法。大家還在摸索，今天相信的做法明天可能被推翻。

## 先盤點，再讓它少瞎編

[9:33](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=573s) 若團隊還是一堆一人樂隊，或根本沒做，就從搞清楚開始。不要只憑感覺說我們很 AI native。問他們在用什麼、什麼有效、什麼無效。一份 Google 表單就行，或 vibe code 一份。不要再問一年前、兩年前那個問題：你有沒有試過 agents。大概每個人都試過某個 AI 工具。要問的是每天或隔天在用什麼。這能把後面的 AX 工作圈出範圍。走 spec-driven development，和很投入 Lovable 或 Bolt，長出來的 AX 不會一樣。

接著建內部社群。不用很勤，把人湊在一起談碰到的問題和用的工具。想學到東西，就從看板拿一張 ticket，看對方怎麼解，自己用自己的方式解。這是有 AI agent 在場的 pair programming。你會看到大家對 codebase 的理解和著手方式差在哪，社群也從這裡長出來。

[11:51](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=711s) 下一步是讓你必須支援的那些 agents 變好。Guy 稍早用資料說明，LLM 本身不夠理解你的 codebase。知識有缺口時，它會很有信心地編，或替你做決定。不一定是假的，可能只是完全不同的選擇。他舉 Guy 的例子：選了一個不對的 theme。

先把時間花在 context files。依工具不同，是 AGENTS.md、steering files、Claude Code 的 CLAUDE.md（字幕說 cloud code、cloudmd）。他的經驗法則：簡化不了，就把它寫到明顯。很多 codebase 跑測試是一條不直覺的魔術指令，這種東西要放進 context。架構若是拆開的，前端、後端、資料層彼此怎麼接，它不一定知道。你不寫清楚，它每次都會自己接，而且接錯。大家以為很明顯、其實不明顯的事，也要補進 agents files 和 steering files。

[13:53](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=833s) 再來是核心依賴的文件：前端依賴這個後端、在哪裡、怎麼用、資訊去哪裡找。第三方模組、甚至第一方但分開的模組也一樣，Guy 講得很細。這件事煩了他很久。brownfield 尤其嚴重：model 的訓練停在 API 的 version 1，最新是 version 3，開發者卻在用 version 2，十次有九次會搞亂。把這件事做對的工具今天還不好。他寫這段時看到 Tessl 的 registry（字幕聽成 Tesla），覺得很值得再看，也同意開源社群得負起更多責任，把這些東西交出來。他的比喻是：若每個依賴的 types 都得放在別處，文件其實也該在那裡。開源還有第二層：在上面建造的人，和使用它的人，要的文件不一樣，愈想優化愈難。大家都還在一起摸索。Context7 也有人用，他碰到的問題是版本處理不好。關鍵的第三方依賴，尤其資料庫這種又密又工具很多、很容易搞混的題目，一定要寫進 context。

[16:12](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=972s) 很大的 codebase 每次問它做事，它都得自己把結構摸一遍。愈大愈慢、愈貴，也愈容易漏掉或搞混。knowledge graphs 就是事先做出架構和彼此關係的理解，做事之前先查那裡。實作很多。Cognition 最近放了 DeepWiki 和 code maps。

## 回饋要有強制力，規則不能只進不出

[17:02](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=1022s) 回饋迴圈很重要。內部社群若已經在聚，就約定：人不得不手動介入 agent 的流程時，把那次寫進 context。那位待了 15 年、腦子裡全是 tribal knowledge 的 senior，每次你去問他，若沒寫回文件或 context，他不知道你在做什麼。agent 不像你，不一定問得到那位資深的人。要有 forcing functions。

他自己喜歡的做法是一個 MCP：agent 明顯走歪時，讓它回頭看這次哪裡可以更好。他叫這 agent therapy session。具體就是更新 context files，當時若說得通，再讓它重試。他說結果不錯。

多數人已經在 codebase 和 CI 裡用 AI review。他只加一件：除了指出這次錯在哪，也建議 context files 缺了哪種 pattern，缺了它以後還會再犯。這是把回饋迴圈自動化的一步。

[19:00](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=1140s) 他很喜歡 ephemeral environments。Netlify 可以做 preview deployments，agent 或開發者要幾個就幾個。對不是 code 本身的東西特別有用，例如樣式和版面。人可以看，也可以讓 agent 替你看。agent 發現版面錯了，去修，同時寫進 context。他看到的完整循環是：人把工作委派出去，agents 產生 code，AX 就是它們在這裡拿得到的條件。context 的回饋讓它們比較做得對。reviewer agents 發現這次應該換一種做法，就讓它們以後知道。審的不只是 code，還有 code 跑出來的結果，再提出下一次怎麼更好。

[20:36](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=1236s) 再往前是 shared sub-agents。Guy 稍早提過，簡單說就是 markdown，定義一個專門的 agent。預設的 agents 都是 generalists。fullstack 能把工作做完，specialist 通常會好一點，有時好一截。例如設計的方法、帶著 voice and tone 的 copywriting、data migrations。你交代一件事，它會判斷該讓哪一個 sub-agent 去做，那個帶著專門的 context。想像你有五個要磨細的專門領域，全塞進一份 CLAUDE.md 或 AGENTS.md，行不通。context 過載，它開始搞混，注意力也被抢走。所以現在才有這些檔案。它們讓同一套做法跨 codebase、跨開發者共用。

檔案一多就會問怎麼發。超過一個 repo 之後，Guy 也說過，有些東西永遠該留在該 repo，有些是全域的：品牌的 voice and tone、style guides、review 怎麼做。開發者可能是幾十人，也可能到幾千人。他個人偏好把全域的集中到一個 shared repo，再用一支 CLI 讓人更新。Guy 的演講讓他知道 Tessl 平台也有這個能力。他覺得這是好問題：規則在單一 codebase 裡有效了，才需要推到多個 codebase。而且不能收進單一 agent 裡。第一步的盤點除非所有人都只說用 Claude Code、或所有人都只用 Codex，否則押一個 agent 是災難。就算現在全員只用一個，也是在給未來埋問題。不用 Tessl 這類平台的話，一個集中的 GitHub repo 加一支做同步的 CLI 也可以。

[24:21](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=1461s) 他覺得最前沿的是對 codebase 的 AX 跑 evals。agent evals 就是把 agent 放進某些條件、叫它做某些任務、再評它做得如何。他問有沒有想過把 Claude SDK 或 Codex SDK（字幕說 cloud SDK、codeex SDK）丟進 eval：在我的 repo 上試著做事，然後告訴我該交代你什麼，你才不會再做錯這些。Guy 和 Tessl 團隊在開源那邊做了很多。拿來對自己的 repo 做，能把「文件裡已經清楚的」和「還缺的」之間的縫補上。

它還處理 one-way ratchet。他開玩笑叫這 Asmov's law of bureaucracy，還說自己昨天之前就完全知道：法規一旦上路就只會單調變長，不會縮，也不會被實質廢掉。context rules 正在發生同一件事。漏了一項就一直加。怎麼有信心把某些要求剝掉，而且修了這個不會弄壞別的？他認為針對 AX 的 eval 會很重要。

[26:17](https://www.youtube.com/watch?v=tGmwqBHoWFM&t=1577s) 收尾時他回到職責。大家本來就負責 codebase 的 DX。AX 不再是選項。不是因為想支援 agents，是因為想支援使用 agents 的開發者。樂隊的成敗不看人數，看合奏得好不好、出不出好的結果。工具商說用了這些你就是 10x developer，於是一個人想當一人樂隊，另一個 10x developer 也想自己一組。真正奇妙的是 10x team：知識是共享的，人是一起做的。他引用 AC/DC 的 Bon Scott，把那句想搖滾就得走很長的路，改成跟朋友、跟自己的 band 一起走，會好走很多。
