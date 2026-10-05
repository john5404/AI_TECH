# Edouard Maleix - How AI-First Dev Teams Build Collective Intelligence — One Attributed Mistake at

Edouard Maleix 的演講。原片約 33 分鐘，英文手寫字幕。字幕把 context window、OpenAPI、dogfooding、evals 聽歪。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=-sYhcsy5OwI)

## 一句話

Agent 每天都在 session 裡學到東西，團隊明天用不到。Edouard 不要再加一本 wiki。他要的是一座 knowledge factory：先給 agent 自己的身分，把犯錯和決策寫進 diary，再收成帶出處的 pack，用 eval 決定哪些指導還活著。人留著目標、判斷和責任。

## 綠燈的 PR 看不出教訓從哪來

[0:47](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=47s) Agent 已經在工作裡、在對話裡。他感覺下一輪轉變，是 agent 從各自隔離的環境，走到一起工作的團隊。若 agent 寫 code、review code，甚至開始排 sprint、往管理靠，他想問的是：我們的 agent 昨天學到的，團隊今天、明天、後天用不用得上。

[1:40](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=100s) 先講熟悉的障礙。半自主的 agent：Claude 的 auto mode、headless，或他稱為 open、今天風評不好的那種。Session 裡的小發現、小教訓、incident，很少走得出去，最後關在裡面。修正會蒸發。於是大家做 skill、rule、任何能注進 context 的文件。規則、skill、專案筆記堆起來，context window 也擠。你幾乎說不出它有沒有被用、還有沒有用、會不會在你預期的時候啟動。

[2:58](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=178s) Review 開始時，PR 可以是綠的，測試過了，描述跟著 spec。你仍然說不出哪些教訓塑造了這份工作。他覺得這很耳熟。

[3:26](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=206s) 人和 agent 都算進去的開發團隊，不需要再一本 Wikipedia。他也不認為團隊該和自己的 agent 鎖在一種融合關係裡。Agent 每天製造教訓，團隊卻沒在學。他要的是一座 knowledge factory：工作進行時抓住錯誤和中斷，變成指導，再檢查這些指導是否真的有幫助。有些會失敗，因為知識會衰變——model 進化、codebase 改變。不要靜態文件。東西會活、會死。接受就好。

[4:59](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=299s) 他是 freelance consultant，幫 tech lead 和 CTO 處理 authentication、應用效能、生產力。幫客戶的開發團隊採用 coding agent 時，他做了一套開源基礎設施和工具，想把各團隊反覆碰到的摩擦，變成可以一起站上去的共同地面。今天分享的是學習和一些 primitive。他強調全是實驗，不是「就該這樣做」。

## 先有身分，才有 diary，教訓才不會只屬於一張 diff

[5:52](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=352s) 解法從最低層開始，也就是變更這一層。若不想讓教訓消失，就要追蹤誰做的、何時、背後的推理、用了什麼知識。他需要證據。一個月前他為一個字幕聽成 festival 的 plugin 開 PR。維護者是 JS 生態裡有名、當時不太歡迎 agent 的人。他盡力抹掉 Claude Code 的痕跡。那張 PR 他認為 95% 是 Claude 寫的，他不羞於承認。測試、描述、issue、code 他都盡力弄好。所有 commit 掛他的名字，甚至有他的 GPG 簽章。幻覺很完美。問題是：誰能為這份工作負責？PR review 更糟。你收到隊友署名、其實是 Claude Code 寫的 review。他覺得這是侮辱。

[7:28](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=448s) 第一塊積木是給 agent 一個 identity。獨立的 actor、簽過名的 commit。Agent 不再躲在你的名字或某個 Claude 代號後面。它有自己的識別，就可以有自己的存取規則和授權，不再靠你這個人既有的權限。Access control 在這裡就是 access control。身分只打開 attribution：誰做的。它不告訴你，當時那個動作為什麼說得通。

[8:31](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=511s) 第二塊是 diary。名字很主觀，他需要一個名字。Diary 是工作和教訓不再被丟掉的地方：發現、他說的 what the f 時刻、決策。也是第一個可以轉動存取邊界的點。團隊共用、純個人的工作風格、鎖在 repository 或專案上，政策從這裡定。重要的工作和決定，要在消失前落地。

[9:35](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=575s) 實務上，agent 的 commit 連到一個 GitHub App，看得到 bot，以及一筆記載流程和推理的 entry。就可以少猜一點，不必只看 diff 和 commit message。接下來要抓的是下一輪 session 用得上的教訓：修正不再只屬於一張 diff，而變成可重用的知識。

[10:49](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=649s) 真實例子。週一，agent 更新 REST API，記得重產 OpenAPI spec，也記得從 spec 衍生的 TypeScript SDK，同一個 codebase 裡的 Go SDK 完全漏了。週二同樣的事，他用了自己覺得最狠的法文髒話，agent 保證不會再犯。週三 Go client 又過期。他說這種事 CI 本來就該在 merge 前抓住，重點不在那裡。重點是省迭代：在你 commit、push 之前，agent 可能已經用過期的 SDK 去改測試。他要系統像人一樣知道這條實務。

[12:16](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=736s) 週二的教訓留不住，是因為那次修正關在一個 session。週三的 session 不知道，別的團隊的 agent 也會踩同一個洞。它退回 context 裡已有的東西，或 model 本來就知道的東西。對不對靠運氣。

[13:05](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=785s) Diary 比這更細，裡面是 entry，用來描述不同事件。他說有四類，請現場看投影片。字幕沒有把四個名字摘下來。API 那個故事是 episodic entry，就是 what the f 的時刻。另一筆範例是 agent 用錯 DB driver 的方法，完全錯過 transaction session。想像沒有 rollback：重複寫入，或別的混亂。下一輪不該再做。這筆原本獨立，後來連到那則 PR review——有人說你不要這樣用——以及讓它不再發生的 fix。六個月後落到其中一筆，也該落到修法和教訓。

[15:12](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=912s) 這一階段其實是被動累積。Workflow 在，agent 就把 entry、incident、教訓、知識接住。要有夠多筆，才塑得成有用的東西。策展從「發現你有什麼」開始。他說這是有點神奇的時刻，因為你追不完所有 entry，新團隊更大時更是，有用的沒用的都有。先畫地盤、找 scope，再把 scope 切成具體 incident。他自己注意到的是資料庫那件。然後展開 entry、看關係。有直覺就做原始搜尋，他說就是純 RAG。主題相近的 entry 可以收成一包知識。

## Pack 不是玩具袋，而且要先被你當過裁判

[16:33](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=993s) Pack 是一小束策展過的 entry，某個時候 agent 該為了一項任務、一個真實區域把它拿起來。不是小孩的玩具袋，一團亂就收工。比較像畫廊展覽，那一包得自己說得通。他秀的第一包是資料庫實務，來自他用來建造這套工具的專案，dogfooding。每一筆都是真的壞過、再拿來組成這包的例子。

[17:26](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1046s) Pack 還不是 agent 讀的東西。中間有敏感的一步：這些知識怎麼載進去。他把原始 entry 渲染成 agent 用得了的 markdown。Agent 去抓 pack 引用的 entry，必要時裁到 token budget 裡，再把渲染結果載回去。每一節都指向一筆 entry，出處還活著：entry 識別、當時操作的人、agent 的識別。不是一份 skill 只說「事情這樣做」，而是「我們在某個會痛的地方被咬過，不想再來一次」。

[18:54](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1134s) 於是有一條迴圈：中斷變成 entry，對的 entry 變成 pack，pack 變成 agent 讀得了的東西，一個開發者或一個自主 agent 付出代價換來的教訓，變成團隊資產。他說今天還沒聽到一個詞，叫 compound engineering。

[19:28](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1168s) 更難的問題是誰決定什麼留下來。人的團隊裡沒有人單獨決定：ADR、wiki、code review 裡的痕跡、postmortem。那些以人的速度在動，字幕把這句聽成 Reg。現在卻想把步調改成 agent 的速度。Agent 整天寫很小的教訓，回饋迴路至少現在還沒有。很多個人在做的東西，產生修正的速度超過那些系統吸收得了的速度。所以需要儀器來判斷。他知道現場已經聽很多 eval，只簡短講。對渲染出來的 pack，要問它是否忠於那些 entry、有沒有改寫它們、是不是都收進來了、在真實情境有沒有幫助。另一件是 activation：skill 有沒有準時被載入。這場只聚焦 fidelity 和 usefulness。

[21:13](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1273s) Judge 跑的環境他想多講。Agent 任務該在受控環境裡。他做的是自己的 sandbox，有點像 Codex 和 Box，但環境由你控：哪些檔案、哪些網路呼叫。外面漏不進來，裡面也漏不出去。LLM 在那台 VM 裡工作。每個任務的輸入是 prompt template、用來評分的準則、一些參照，以及要在當下載入的 context。在這個例子裡，被評估的就是那份 context。

[22:38](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1358s) 評渲染 pack 的 fidelity，三條簡化準則，各自二元計分。第一眼很好，綜合分幾乎是 1。他開玩笑說白撿的勝利、免費午餐、他是天才。多看 eval 就知道：懶的 prompt 或校得不好的準則會反噬，給你假的安全感。跑 LLM judge 之前，你自己就是 judge。先做 judge 會做的事，看準則能不能真的抓到東西。Prompt 該反映你自己的問法和評分方式。

[23:33](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1413s) Usefulness：給 agent runtime 一項會重現你已經有的 incident 的任務。任務不要現編，也不要從很久以前硬撈；你已經有情境、故事和任務。他拿 Go SDK 漏掉那件，沒有 context 跑一次，再帶著渲染好的 pack 跑一次。要的是那個 delta，再用 judge 依準則打分。他想秀成功，但說這是 n 等於 1（字幕聽成 a new and one）。沒有 pack 時，Go SDK 每次都不在 agent 的工作裡，他給的失敗數字是 67；有 pack 之後，同一任務重複跑都過。意思是不要重複同一個錯，用 pack 把對的知識餵進去。

## 討好欲先拿掉，任務讓 agent 自己領

[25:19](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1519s) 時間不多，最後一幕他縮短。若 agent 愈來愈自主、能自己學、自己注入知識，什麼擋住完全自主？有一種虛榮：agent 很想討好我們，被討好也很舒服。他認為第一道心理限制，是放下「永遠有人給你剛好的建議」。放下之後，任務可以自動產生：做這件事、完成這張 issue、做這次 PR review。一大桶任務，志願性質。你不指派。Agent 帶著一組能力，對得上就自己領。建在前面的工作上，這些自主任務仍然讓 attribution 活著，知識和修正累得更快。人留著目標、判斷和責任。Agent 留著連續性、重複，以及一批工作的緩衝。身分還可以再長：專門的 coder、critic，也許還有管理用的 agent。它們專門領任務，並保證會好好完成，信任才有得開，有點像公司裡的 individual contributor。

[27:37](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1657s) 他留給現場的問題是：你的 agent 昨天學到的，團隊今天還知道嗎？QR code 通向他說的那整套基礎設施。歡迎評論、舉杯或吐槽。試了之後告訴他哪裡壞了。

[28:38](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1718s) 有人問這和 Palace、或很多個 Palace 是不是平行的。記憶是其中一個元件，但他大部分時間不是在打磨記憶怎麼存、怎麼取。他在乎的是整條 workflow 的 primitive 和工具。記憶單獨存在，回答不了團隊之間怎麼共享知識。

[29:10](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1750s) 下一個問題是，開發者的生活比「修好再掛一個新屬性」更細，中間有一長串。自己用的時候，這個簡單模式在哪裡不夠？他說沒有講起來那麼即時。抓住 incident 的那筆 entry 還在，fix 多半不會同一天落地。Workflow 要有能力去撿已經存在的 incident，拿來跟現在的比。沒有復發，就是一次性的，可以不在乎。常常發生，才是建立關係、把 workflow 收攏的時候。

[30:17](https://www.youtube.com/watch?v=-sYhcsy5OwI&t=1817s) 最後問 codebase 和產品變了，一個月前為真的知識怎麼維護。他說若你已經在用 skill，差沒有那麼多。Entry 就是累積，不必逐筆煩。真正渲染成 pack 之後，那些東西就是 skill：markdown 再轉成 skill，維護方式和現在維護 skill 一樣。用團隊在用的 model 定期跑 eval。不夠有用、帶不來好處，就讓它死。還在帶來好處，就留。追問怎麼管時他補：策展一開始是手動的。這是新習慣。任何 workflow 在交給 LLM 之前，人要先掌握，因為你得解釋給它聽；你自己講不清，就不能指望 LLM 替你做。人開始策展，agent 幫忙把你想發現的東西撈出來。模式清楚了，再把策展也交給 agent。主持人說會後可以找他，接著是 coffee break。
