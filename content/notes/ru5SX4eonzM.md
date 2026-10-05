# Datadog Deleted All Its AI Context. It Worked.

Guy Podjarny 與 Simon Maple 訪問 Datadog 的 Simon，Language Foundations 的 director。原片約 61 分鐘，英文手寫字幕。字幕把 POC 聽成 posse、steering 聽成 streaming、Claude Code 聽成 clockwork、OpenClaw 聽成 Open Claw。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=ru5SX4eonzM)

## 一句話

Datadog 把寫了一年多、放在 repo 裡的 AI context 整份刪掉，eval 分數反而明顯變好。那些檔是 Sonnet 3.5 之前寫的，到了 Opus 4.8 和 GPT-5.5 的世界，很多變成佔位、甚至有害。Simon 用這件事說明：context 會腐爛，沒有 eval 你不敢刪；四千個工程師的 agent 採用，瓶頸很快從「能不能寫」變成 code review。

## 門一開，一個月就有一千人在用 Cursor

[1:49](https://www.youtube.com/watch?v=ru5SX4eonzM&t=109s) Simon 是 Datadog 的 director，管 Language Foundations。範圍是開發者一天的前端：人每天互動的東西、工作怎麼做。服務大約 4000 個工程師。大約一年前他們成立 AI dev 小組，做內部的 AI 工具，一開始只是看看這件事有沒有腿。

[4:31](https://www.youtube.com/watch?v=ru5SX4eonzM&t=271s) 故事從 2025 年初開始。Vibe coding 這個詞被提出來，用 AI 寫 code 開始像真的可行。驅動的是 Cursor。內部 POC 原本希望 100 人、也許 200 人來用，收一點訊號。一個月內幾乎每天在用的開發者很快到了一千。那是很強的訊號。Guy 說這是純粹的 pull：門打開，人跑進來。他們於是覺得這會改變這個產業、改變工程師怎麼工作，需要一支團隊擁有這些工具和開發體驗。招募貫穿 2025 年夏天。在那之前是他組織裡的人，一位 staff engineer 接手 Cursor 的 POC，還沒有專門的 AI 職稱。

[7:07](https://www.youtube.com/watch?v=ru5SX4eonzM&t=427s) Claude Code 是第二波。產品本來就在用 Anthropic 的模型，合約和 API key 都在。Claude Code 出來的那天，人基本上就能用。當時 hype 很大，有機長起來。SSO 設不好，得手動把 email 加進允許名單。整個夏天有一位 PM 在管存取，直到 SSO 的 bug 修好。需求大到他們還沒準備好那一波。

[8:29](https://www.youtube.com/watch?v=ru5SX4eonzM&t=509s) 到 2025 夏末，兩者採用速度他覺得差不多，但服務的人不同。Datadog 有很大的 monorepo，VS Code 在上面表現很差，Cursor 的底座在一些 monorepo 上不夠快，採用因此受阻。那些人用終端機裡的 Claude Code 體驗好得多，不必把 IDE 開著。Power user 很快轉過去，因為他們大部分工作可以不開 IDE。

## 兩支大約六人的團隊，考題是會出事的 pull request

[10:51](https://www.youtube.com/watch?v=ru5SX4eonzM&t=651s) 早期的 champion 在 Datadog 內部，他們請對方換隊來組這支新團隊，也有人轉進來。什麼都想做，但得決定從哪開始。一開始死盯 metrics：發生什麼、影響是什麼、成本是什麼。他們已經知道這很貴，所以要能 benchmark 不同模型、什麼是最好的方案。那支團隊開始做 eval，做一個 agent 和 coding tool 的 eval 平台，幫 Datadog 決定該 onboard 哪個 model、哪個工具。Guy 說 Tessl 也很早擁抱 eval。

[12:28](https://www.youtube.com/watch?v=ru5SX4eonzM&t=748s) 第一個很具體的應用是 code review。太挑剔的工具不好用，不是人的挑剔者更糟。他們很早停在一個區分上：把 AI 放進 code review，是為了擋住 incident 或重大 bug，當進 production 前的最後一道 guardrail。第一批 eval 是重放已知造成 incident 的 pull request，看 review 能不能指出這會失敗。Datadog 本來就把很多 incident 資料收在資料集裡。他們做出一個平台：重放 PR、跑完整個 agent review，再用一個 agent judge 問：這則 review 有沒有指出後來會造成 incident 的地方。Guy 說這聰明，因為「什麼叫對」通常很難定義，歷史 incident 把答案給了。

[14:10](https://www.youtube.com/watch?v=ru5SX4eonzM&t=850s) 快轉到現在是兩支團隊。年初那支第一隊盤子已經滿了：eval、metrics、成本。很難再切時間去重想工作方式。同時，假期前出來的 Opus 4.5，採用快得誇張。他說大家看到的 pull request 量幾乎一夜翻倍，流程和 CI 的瓶頸比以前嚴重得多。當下最大的是 code review。他們需要更多人專注在跟 AI 一起工作的體驗，而不只是治理和訊號。年初附近成立第二支團隊。Guy 喜歡那兩個名字：Signals 和 Flows。兩邊都瞄準大約六人，第二隊還在招。大約 12 個人對 4000 個工程師。槓桿比例他覺得不算好。

[16:39](https://www.youtube.com/watch?v=ru5SX4eonzM&t=999s) 工作方式變了，度量沒有劇烈改。他們用很多 DORA metrics。那些是落後指標，不是領先指標。領先指標需要更多創意，比較不像兩塊乾淨的訊號，也很難孤立是什麼把它們推動的。更看得見的是成本怎麼想、用了多少 token。全公司都在用 AI、而且用得更多，給 AI 的預算在增加。他們要更有意識，確認花得合理。沒有做 token 配額。若你手上的工作本來就需要很多 token，他們希望人有機會、對自己的用途有意圖。聽起來又熱又冷。他們找的是系統性減少 token、壓縮輸出這類做法。Eval 有了更多資料之後，問題變成怎麼把它變成行動。生產力指標本身仍主要看耐久的整體訊號。

## 自己用 Go 做，創意那一塊先承認量不到

[19:41](https://www.youtube.com/watch?v=ru5SX4eonzM&t=1181s) Guy 說就算到今天，用 agent 做開發、或談 agentic workflow，vibes 仍很主導。他喜歡 Datadog 把 eval 做出來。Simon 說這套是全客製的，用 Go 寫，有 sandbox。開始時看過一些開源選項，都不夠成熟，就自己做。對純粹的 AI agent 使用情境，沒有複雜到做不了。Datadog 的 metrics 平台很好，餵進去再從 Datadog 消費很容易。今天 eval 盯兩件事。一是新 model 的表現，尤其 open weight，什麼時候能當可行的替代、以什麼方式。二是 steering document 改了之後，eval 表現變不變。擁有那些文件的往往不是他們，有時該由別的團隊擁有，因為 repository 裡的所有權本來就難講。他們追的是有沒有問題、該不該改、以什麼形式改。

[22:20](https://www.youtube.com/watch?v=ru5SX4eonzM&t=1340s) 他對客製還是用現成平台沒有強烈偏好。重要的是能支援多種 harness、多個來源的 model。多數平台做得到的話，用現成的就很好。寫 code 今天沒那麼是問題，他們湊起來也相當容易。Guy 說跑一個 agent、有記分卡、把資料彙總，都在核心能力裡；若沒那麼客製，為什麼重造，是開發者很熟的取捨。

[23:51](https://www.youtube.com/watch?v=ru5SX4eonzM&t=1431s) 使用情境變複雜之後，「什麼叫對」不再那麼清楚，誰來寫 eval。現狀是他們先寫了第一批很常見的使用情境當基線，然後幾乎去找所有平台團隊，請他們為自己的平台用法加 eval。所有權散到公司各處。 downside 是：開發者用 harness 或工具時，不只做很特定的事，很多工作在創意那邊，找點子、該做什麼、問題的正確做法。那些他們的 eval 不覆蓋，因為太寬，很難知道該試什麼。每次都是同一個問題，就只蓋到一小片。創意他覺得很難用 agent 量。他沒有好答案，知道這是一個洞，目前願意跟這個缺口一起住，也許以後再回來。

[26:04](https://www.youtube.com/watch?v=ru5SX4eonzM&t=1564s) Guy 複述：現在看得到價值的，是真相清楚、可重複的流程。情境寫得相當集中，平台團隊在寫，不是終端開發者。從真實情境抽出來，變化節奏稍慢。一年後每個開發者都會寫 eval 嗎。Simon 不認為。他們正在做的、他相當有信心會是往後的解法：追蹤 agent 的軌跡，Datadog 裡 agent 的使用已經有很多資料。從原始資料看 prompt 進來、agent 做了什麼，抽出反覆出現的情境、和某個平台常見的互動類型，再用一個 agent 把它們變成真正的 eval。用真人怎麼用 agent 的資料，去覆蓋實際使用的重疊。他很有信心大部分可以自動化。Guy 說這和他們的經驗一致：愈錨在具體案例愈真實。開發者不愛寫文件、不愛寫測試，叫他們再寫 eval 不會成功。觀察他們、從迴圈裡抽出情境比較容易。但這些東西是動態的。你把情境收成檔案、放進 repo，時間一久會腐爛，不再代表系統。总得有人維護，最好是能代表在這個 repo 裡開發的人。Simon 同意，但回頭看以前建的案例很難，量通常很大。他們把重心放在自動化：讓 agent 做清掃、把訊號抬出來，最後也許甚至決定哪些案例今天還相關。Guy 說每引進一個人就造一個瓶頸。Eval 的作者和使用者很可能都是 agent。要把它們造出來，但不一定是那個人自己寫。

[30:07](https://www.youtube.com/watch?v=ru5SX4eonzM&t=1807s) 今天是每晚跑一次。針對 eval、大改 steering document、真的想改結果的 pull request，可以做 ad hoc。Eval 不總是很穩，要跑幾次才有統計上說得過去的結果。看起來有回歸就指出給那個人，不擋在路上。這和前面一致：跑在你真的知道的事情上，而不是投機地提前猜。Eval 很貴。他不確定數字，但還沒貴到讓人卻步。跟 coding agent 的使用比，不算什麼。他們仍在意。若每個 PR 都跑，顯然太貴。Guy 說他們和客戶實驗過，便宜的開放模型可以拿來評估回歸。DeepSeek 在多種任務的 skill 提升上相關性不錯。它不必在任務上整體一樣好，但若用 skill 來量，又快又便宜，也許可以放進 CI 做一部分篩選。昨天的改動明天才回頭找人，很煩，是重工；放在流程裡更好，但要權衡。他覺得 eval 會像測試一樣擴張：有些進 CI，有些太貴或太慢。Simon 同意。事後跑的成本，是 revert、rollback 的成本，對上你現在付的等待、才能 merge 的成本。不是純粹的交換。要同時意識到犯錯的成本，以及等待或為 inference 付費的成本。

## 刪掉整份 context，分數更好

[33:42](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2022s) Context 在 Datadog 有兩個大來源。一是 commit 進 repository 的檔案。他選的主要是 skills，不是 skills 的東西不多。Skills 採用得相當好。二是集中的 Claude marketplace，裡面也有很多 skills。

[34:45](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2085s) 早先有效的是人人貢獻，尤其還沒有中央團隊時。把人 onboard 上去，早期不要太多結構，才能試、才能看出什麼有用。障礙和摩擦很低。他覺得那大概是對的：要人貢獻，要最好的點子贏，而且容易分享。Guy 說轉型一開始是在推採用，先讓人上船。然後他們看到兩次：使用者愈多，愈難改。影響從大約 200 人的 POC、大家用同一個工具，變成影響 4000 個在 repository 上工作的人。弄壞這麼多人的東西，壓力大得多。規模也變得難管。Claude marketplace 有數百個 plugin。裝了之後，你知道哪個好、該用哪個、哪個表現更好嗎。他們把人導向以團隊為單位的 marketplace，分享團隊自己的流程、團隊專屬的東西，或特定平台的擴充。文件會建議：你若用平台 X，就裝那個 marketplace 和那些 plugin。Context 文件也可以讓 agent 建議去裝。Guy 說這是一組一組的 context，人知道自己從哪裡接近、由自己控制。重用可能稍稍受阻，不同團隊會各做各的，但混亂被收一點。

[37:08](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2228s) 年初 Pi 變得相當紅。很多人開始暗示，Pi 不知怎麼就是比他們已有的替代方案表現更好。Guy 補充：Pi 是非常可客製、可亂改的開源 harness，OpenClaw 建在它上面。預設它不會載入那麼多 context。他們的直覺是：大約一年前、Sonnet 3.5 之前寫的 context，在 Opus 4.8 或 GPT-5.5 的世界裡，今天還相關嗎。也許不。於是他們問：若把 repo 裡的整份 context 刪掉，會怎樣。Eval 開始表現好得多。違反直覺，但很大。那些檔在列不一定有用的東西，或不該放進 steering document 的東西。Guy 說這是 context rot 的真實版本。軟體從有用、到沒用、到有害，大家很熟。對 context 和 skills，這條肌肉記憶還沒有。

[39:05](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2345s) 沒有資料撐著，這個決定會很有爭議。說清楚：這是前端團隊擁有的，跑在前端 monorepo。Eval 是他們的，測試是他們做的。他們寫了新的指南，告訴人 context 之外該做什麼。完全由他原本組織裡的那個團隊擁有，不是 AI 團隊。資料很清楚，表現好得多。很多人對這個決定驚訝，但一看資料就很容易同意。

[40:01](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2401s) Guy 以為是因為他們開始做 harness，不只是模型變好。Simon 說做 harness 是他們現在在做的，不是導致那個決定的原因。所以主要仍是模型進步，或那些 context 檔是某個時點寫的，不再代表 agent 面對的現實。新模型不再需要它們，或者它們現在就是錯的。他不覺得它們本身是錯的。早期有很多基本功，你會試著再訓練 agent。前端 repo 裡有一整段怎麼用 yarn。他相當確定那已經在外面那些模型的訓練集裡，不必再教一次。Context 是稀缺資源。累積夠多，就會把別的東西擠掉。有人說模型會進入 dumb mode。治理上，他們看到人傾向直接往 agent 檔裡加東西。常常更簡單的是：那個工具的錯誤訊息清不清楚，有沒有告訴你下一步該做什麼。他們在推：agent 沒照你要的做時，能不能在需要的時候提供 context，而不是提前把所有做法訓練進去。現代的 repo 發生的事太多，不可能把全部 context 事先給完，而且那看起來有害。

[42:14](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2534s) Guy 收成幾課。Eval 讓你能用資料做決定。Context 會隨時間腐爛，要有重新評估的計畫，那又回到 eval；就算只是在 vibe，也要主動更新。寫新的 context 時，去解已經出現的問題，不要提前猜。最好的做法往往不是預先解題，而是當下解掉，並做出辨認、管理 context 的迴圈。他記得 Simon 的一個理論：context 在 repo 裡累積，是因為損失厭惡。寫的時候很辛苦，刪掉會害怕，也許它在某處有用。Simon 說，有人提議從根上的 AGENTS.md 拿東西走，連 PR review 的留言都會問：你確定嗎，也許它對某處的某人有價值。拿掉一樣東西又不拿新的補上，本來就難做。一次影響數百或數千個工程師時，更難有把握。沒有資料，很難跨出那一步，或覺得自己有好理由、有許可。

[44:06](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2646s) 照這邏輯，每個團隊的 marketplace 裡，共享的 skills 也需要 eval，否則同樣的問題會再來。Simon 確定會。另一個挑戰是那些 skills 怎麼發出去：人在需要時有沒有裝上。今天的做法是本地 agent、每人自己設，最終可能有極限。他還不確定往後的正確解。Meta harness 很有意思：有一個 classifier，知道這次碰到平台 A，就用預先裝好那些 skills 的 agent 來跑。若這是集中的，體驗可能好得多。基線更好，不必靠口耳相傳或某人讀過文件。Guy 覺得人低估了 evaluation 裡環境定義的重要。他們把這做成 project eval 對上 skill eval，其實是同一類東西的名字。Skill 那層隔離來測，適合看有沒有回歸，但「什麼叫對」很難，因為它是一起跑的。然後你實際跑的時候裝了 30 個 skills，不是一個。在那個環境裡它還行不行，基本上是無限的：什麼時候裝了哪些。環境管理在變靈活，也在變複雜，得想怎麼收回來。兩邊都是在消滅「在我機器上能跑」：定義什麼叫對，也定義那台機器。團隊那些 marketplace 實務上還沒有 eval。

## 開放模型還差大約五成；面試改看判斷

[47:51](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2871s) 依他們的 eval，open weight 要變成完全可行，而且假設這個領域的門檻不再往上移，得比今天好大約 50%。這句還不是對 GLM 5.2 和最新那些說的。那些還低一階。他們還沒在那些上面跑 eval，但很興奮。附帶條件是創意：未知的任務、較大的任務，而不是執行那一段。這部分他們的 eval 沒有訊號，看公開 eval，也看使用者回饋。像 code review 這種高度可重複的流程，今天仍是 frontier model 在寫。

[48:57](https://www.youtube.com/watch?v=ru5SX4eonzM&t=2937s) Code review 他們有 background agent。第一個放出來的是：CI 失敗若是 lint 或格式，就讓 agent 去修，你不必自己回來處理。他們在各個地方拿掉摩擦。很多這種任務可以用便宜得多的 open weight，因為不需要創意，路徑很清楚：跑一個指令，或做某件特定的事。現在的想法是，把你會走出 Claude Code 去做的很多事，編成 background agent，替你推一把。然後要找平衡：什麼可以信任，不要改掉一張 PR 的核心決定。比較是 nitpick 和小修，不改變被提議的那次 code change 的意思。Guy 說這很一致：先用在沒有爭議、agent 顯然有幫助的地方。不要先爭它對不對。可以稍稍擦到判斷，但主要靠向你能無可爭議地說「這是對的」的區域。Review 和整個 repo 裡，他們在找周圍那些煩人的事來解。那塊肉很多，忙著做那些，還沒有進到功能本身。

[51:45](https://www.youtube.com/watch?v=ru5SX4eonzM&t=3105s) 他個人一直討厭 LeetCode 式面試。訊號低，用來濾掉一些候選人，卻常常導向錯的結論。他不覺得那是好的雇人方式，自己也不喜歡做。AI 開了一扇門，讓他們有理由重新看面試，尤其是寫 code 的面試。他們組了幾個 squad，各自擁有不同的題。面試裡有 AI，能做的比以前多得多。可以在大得多的 codebase 上，問接近日常的真實任務，訊號比「40 分鐘內寫完、測試全過」更多：判斷如何、取捨如何、懂不懂這段 code。多數面試的新流程是：這裡有一個相當大的 codebase，你需要 AI 才搞得懂它在做什麼。然後談一個工程問題。也許擴充這個 codebase。也許有一份 diff，某人想 merge，像一次 code review，我們該給什麼回饋。更像真實世界。這只能發生在較大的 codebase 上。沒有 AI，走完、懂完全部 context 幾乎不可能，更像靠運氣。Guy 說這更接近現實，還暗暗考了你的 agent 本事：你多會駕馭 agent。一次測兩件事。這意味著得當面做，不是帶回家的 code review 或寫程式練習。他接受這在「能談的人變少」上有一點沒效率。

[55:11](https://www.youtube.com/watch?v=ru5SX4eonzM&t=3311s) 今年他們也重看了職涯指引。一群人一起想，今天什麼期待變得更重要。高層幾件。較資淺的角色，大家看到的是對他們擁有的工作複雜度期待更高，往前推。指引改成反映新的基線：你可以擁有一整個專案，需要人幫忙時會問對的問題，會學，工程師的核心能力還在。以前通常是在較大的專案裡當支援。現在多數時候他們自己擁有一整條 workstream，因為他們做得到，只要確保問對問題。較資深的是兩件事。一是 POC 和實驗。二是判斷：該不該做、什麼時候開始、這個解是不是對的、客戶碰到的是什麼。更多是判斷，還有產品和架構的品味。以前會花很多時間在文件和 RFC 上，討論這是不是那個問題的正解。那些問題仍有價值。但現在若先做 POC，更能確定這會不會成。用 AI 做 POC 這麼容易，你可以做幾個、比較選項，再決定長期要投資哪一個、哪一個要做成 production ready。變成先試，再把學習帶回來看，然後做對的決定。以前得把一切想完，因為做一個 POC 很貴。今天是試一件、跑跑看、發生了什麼，再拿那些學習來決定。Guy 說他常講：建造的成本變低，對齊的相對成本就變高，因為把人拉進房間談話還是要那麼久。多建造一點來降低對齊成本，對齊的時候已經有具體、比較被證明過的東西，顯然是對的交換。討論裡有具體的東西幫助很大。你擔心這不會成，但口袋裡已經有一個、而且它成了，就多一點方向上的把握。怎麼討論一個解的正確設計，整場遊戲變了。

[59:24](https://www.youtube.com/watch?v=ru5SX4eonzM&t=3564s) 他往前最興奮的，是能做出更好的商業決定。他們談到的最後就是這個。他對 AI 的信念是：生產力很好，但不是真正的 game changer。能知道、能做更好的決定，才是關鍵。他希望商業世界裡發生的是：因為試了多件事、看見什麼有用什麼沒用，我們送出更好的產品。而不是一整季做一個其實偏了的專案，然後因為時間都投了，就得秀出一點什麼。什麼可以拿掉、什麼時候可以說這不行、帶著已經有的學習從頭來，今天比過去可能得多。Guy 說他們在會上做過圓桌，有人說這不是在提高生產力，是在提高野心。他覺得 Simon 講的就是那句。
