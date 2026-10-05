# Jack Wotherspoon - Humans vs. Slop: Rewriting the Rules of Open-Source - AI Native DevCon

Jack Wotherspoon 是 Google 的 developer advocate，做 Gemini CLI，也做過 Google ADK，也就是 Agent Development Kit。他在 Google 的 open source 大約五年。開場人先說這是這一代的戰爭，又叫大家忘掉那句，改成人對 slop。Jack 謝了 Macy。原片約 32 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=HgA0spItnZI)

## 一句話

產生 code 幾乎免費，維護不是。Open source 以前是人對人：issue 背後有真的使用者，PR 是手寫的，兩邊有社會契約。現在一張 PR 可能是 Claude、bot 或 agent，而且沒有人看過。Jack 不喜歡 slop 這個詞，但 Gemini CLI 這種有 10 萬顆星、超過 700 位外部貢獻者的 repo，已經得用新規則把噪音濾掉，把時間留給還願意來回的人。

## 社會契約還在的時候，以及為什麼現在 code 像不要錢

[0:46](https://www.youtube.com/watch?v=HgA0spItnZI&t=46s) 他先講舊世界。Open source 長時間靠同一套社會契約。幾年前，maintainer 看到 issue，會認為是真的使用者碰到真的問題。每一張 PR 多半是有人想過、親手寫的。外部貢獻者應該先讀文件，確認壞的是 library 或 framework 而不是自己，看過 codebase，做一點設計，再依 maintainer 的 review 改。Maintainer 這一側則是給指引、教人，幫品質夠的工作合併進去。

[3:14](https://www.youtube.com/watch?v=HgA0spItnZI&t=194s) 現在不確定 PR 是不是某人的 agent 貼的，也不確定有沒有人類看過那些 code。Agent 很多，而且愈來愈能做長任務，可以讓 Claude 轉 24 小時。他說大家最近迷上 `/go`，本質上就是讓 agent 跑非常久，有人跑好幾天。另一個問題是 code 基本上免費，一個 prompt 就有。各大公司的方案補貼得很兇：你付 $20 或 $200，實際 inference 可能值幾千美元。使用者下 prompt 時不會去想那一筆錢，感覺資源無限，丟出去看看會不會動。

[4:36](https://www.youtube.com/watch?v=HgA0spItnZI&t=276s) 他舉 GitHub Copilot。他說從演講當天起，計價從訂閱改成依使用的 tokens 付費。科技網紅 Theo 示範的不是 exploit，而是把補貼用到反面：Copilot 以前用 request 計，不算 tokens，只算 prompt。Agent 跑得極久，一個 $20 或 $30 的方案可以擠出幾千美元。例子裡單一個 prompt 超過 6000 萬 tokens，若照 API 價錢大約 $200。理論上 $30 的方案可以換到超過 $30,000 的 inference。他說不要回家試，應該已經不能用了。台下有人說試過，他覺得時間點剛好。

[5:41](https://www.youtube.com/watch?v=HgA0spItnZI&t=341s) AI 生成的 code 已經很多，技術背景不重要。他說他媽媽幾年前才有智慧型手機，大概也弄得出 code。你可以叫 agent「把這個 repo 的 issue 全部修掉」，它就開始開 PR、產生成千上萬行，人不用想，成本是零，也沒有責任。

## 一張沒人要負責的 PR，維持者要花的時間不是零

[6:22](https://www.youtube.com/watch?v=HgA0spItnZI&t=382s) 他們自己的 repo 裡看得到標題完全不知所云、PR template 一個欄都沒填、右上角超過 30,000 行變更的 PR。那種不會過。他接著用 Gemini CLI 現場示範：叫它開十個 sub-agent，平行對一個 repository 建立沒有指定功能、純粹亂開的 pull request。大約 30 到 45 秒就會有十張。畫面裡出現 culinary slop chef，以及一個他完全看不懂的 bribe laundering engineer。他說再等幾秒就能證明十張都在；字幕沒有接著報最後的數字。

[8:03](https://www.youtube.com/watch?v=HgA0spItnZI&t=483s) 所以戰場在維護，不在生成。GitHub 公布 2025 年每個月合併超過 4500 萬張 pull request。他覺得以 AI 的速度，這個數字已經過時。他最後聽到的是，上個月超過 2 億張，他說那就是五倍。curl 遇過一群 AI agents 和 bots 送假的安全報告，系統全部被標記，頭痛得很。有的公司在貢獻說明裡寫明不收百分之百 AI 生成的東西。也有人直接關掉外部 PR，改成自己做。Ghostty 用的是另一套，他稍後講 vouch。

[9:31](https://www.youtube.com/watch?v=HgA0spItnZI&t=571s) 降低門檻本來該是贏：更容易貢獻。反面是 drive-by PR。你在用一個 library，看到錯誤，把 stack trace 丟進去、clone repo、叫 agent 修。你這邊大約 30 秒。就算假設生出來的 code 是好的，maintainer 仍要審。在 Google，他們仍大致人手看每一張要進去的 PR。可以先用自動化的 code review，最後仍有 maintainer 看過才 ship，安全漏洞也要人看。現在的規模下，他們確保人類看過每一件。Maintainer 留了兩點回饋，對方卻沒有打算再回來。Prompt 完就忘了。於是要嘛 maintainer 接手那張 PR，要嘛它漂走。

[11:12](https://www.youtube.com/watch?v=HgA0spItnZI&t=672s) 第二個問題是平行。十個 sub-agent 的例子裡，工作很好平行化。人還沒想出怎麼把自己的腦子也平行化。一分鐘開十張 PR，審那些 code 不會只花十秒。信任也在鬆。以前會來回問為什麼這樣設計。現在答案可能是「我不知道，是它叫我的」或「Claude 叫我的」。你不能假設貼 code 的人知道自己在做什麼。

## Gemini CLI 怎麼擋：先開 issue、限制張數、把人的步驟寫成 skill

[12:20](https://www.youtube.com/watch?v=HgA0spItnZI&t=740s) 後面是他們在 Gemini CLI 的做法。第一條很平凡：先開 issue 才能開 pull request。這大概去掉 90% 的 drive-by。他們會關掉那張 PR，請對方先開 issue。Agent 或 bot 多半不會回來，也不會去開 issue。人會花時間開，然後他們才看 PR。比較重的改動，maintainer 會先核准，來回問設計，覺得可以再動手。他說這一條大概解決 90% 的問題，因為對方已經買了票，做了該做的查核。

[13:36](https://www.youtube.com/watch?v=HgA0spItnZI&t=816s) 第二條是限制外部貢獻者同時能開著的 pull request 數量。剛才那種一次生十張亂的，會被擋下。GitHub Actions 裡很好做。他說 GitHub 最近也開始把這個功能做成預設，可以在 repository settings 裡給外部貢獻者設上限。正式 maintainer 或被允許貢獻的人不受影響。這樣就不會睡著醒來，發現有 40 個人 Overnight 想把整個 library 重寫掉。

[14:28](https://www.youtube.com/watch?v=HgA0spItnZI&t=868s) 第三條是自動化。對方用自動化生 code，你也該用自動化擋，而且不一定要用 AI，GitHub Actions 就行。他們有流程看有沒有回覆；60 天沒回，他就說這個期限大概偏寬，會把 issue 關掉，當成 stale。這是雙向的，另一側也要有投入。

[15:03](https://www.youtube.com/watch?v=HgA0spItnZI&t=903s) 再來是把 context files 放進 repository。Agent 應該讀說明，至於它讀不讀是另一回事。不要只 commit 給 Claude 用的那份。團隊用 Claude 開發沒關係，外面的人工具很多。其他 context 也放進去，或用 symlink，貢獻品質才會一起被抬高。內容可以很簡單：跑測試、照 PR template。Template 這一條差很多。

[15:59](https://www.youtube.com/watch?v=HgA0spItnZI&t=959s) Skills 不只能抬 AI 的品質，也能抬人的。Repo 裡有一批 skills，用來把一次性的貢獻者拉到能合併的水準。他最喜歡 PR creator：說一聲幫我開 PR，它會看 template、看改了的 code、跑測試、做 formatting。這是把人當 maintainer 會做的步驟寫進 codebase。沒有人喜歡寫文件，但文件對訓練 model、讓 model 去看，幫助很大。他們有 docs writer skill，強制 style guide，功能或 code 改了就要有文件。Code review 他這段跳過。放進 repo 的好處是外部的人也用得到，不只自己團隊。

[17:26](https://www.youtube.com/watch?v=HgA0spItnZI&t=1046s) 他秀自己的一張 PR，走過 PR creator skill。另外還有個人 skill，用 Playwright 對 code 變更錄影、截圖。他當 maintainer 時，PR 裡有截圖或影片，腦子會比較快進去，比較容易看出改了什麼，也比較覺得對方有想過。

## 休假、背書，以及只收 prompt

[18:03](https://www.youtube.com/watch?v=HgA0spItnZI&t=1083s) 他問誰聽過 open source vacation，現場沒有。概念像外出自動回信：這兩週不在，急事找老闆。專案版是團隊都去開會時，寫進 codebase，那段時間的 pull request 和 issue 會自動關掉，並說他們在 open source vacation。一個人維護、真的出差，回來就不會被幾百張 PR 或 issue 淹沒。訊息和結束時間可以設。Pi coding agent 的 Mario 用得很兇。他會拉很長的 OSS 休假，即使人沒有 out of office，只是不想收新貢獻，先把 backlog 清到零再打開，然後又被灌滿。

[19:32](https://www.youtube.com/watch?v=HgA0spItnZI&t=1172s) Vouch 是 open source 的推薦制。找工作時說「我認識 Jack，他可以為我背書」，這裡一樣。受信任的 maintainer 或貢獻者可以為別人背書。他舉例：我認識 Macy，她 code 做得好，我為她背書，她就可以開 PR、參與專案。新人可以先有一些權限，得到 vouch 之後權限更多。反過來可以 denounce：bot 或貼了 slop 的人會被擋。它和前面講的系統一樣靠檔案，字幕把那個檔聽成 TD file。放進 repo，GitHub Actions 去掃，本質是 GitHub handle 的兩份名單，一份好人、一份壞人。這是 Mitchell Hashimoto 做的。他做了 Ghostty，也是 Terraform 和 HashiCorp 的創辦人之一。Ghostty 用了幾個月。令 Jack 意外的是，Hashimoto 說 PR 品質上升很多，但他還是會看到那些 PR。系統是濾掉壞的，讓好的更能合併。Jack 說自己還沒完全站到這一邊。

[21:10](https://www.youtube.com/watch?v=HgA0spItnZI&t=1270s) 有些人更極端：完全不收 issue。Prompt 就是新的 pull request。不要給我 code，給我你用來生 code 的 prompt，我自己做。把細節給我，我來修。他覺得有點嚴，但幾家大公司在用。不要給輸出，給背後的 intent。早上的 keynote 也在講往 intent 和 context 走。若那個 prompt 是對的，maintainer 再用它去生 code。

[21:55](https://www.youtube.com/watch?v=HgA0spItnZI&t=1315s) 新的 playbook 還在變，沒有人定案。有 vouch、有 open source vacation、有各種自動化，也有人因為 AI 和一堆 bot 離開 open source。對 maintainer，他的版本是：先開 issue，限制外部貢獻的數量來濾噪音，加上 context 和 skills 去抬外面那些 agent，再試自動化，以及 vouch 那種信任。對貢獻者：討論你的 code，貼 PR 之前要懂寫出來的是什麼；標準還在。要願意回饋。把 code 加進別人的 codebase，就要預期有人推回來。試著學到東西，並且能解釋那個決定。

[22:55](https://www.youtube.com/watch?v=HgA0spItnZI&t=1375s) 未來是人和 agent 混在一起，不是只剩其中一種。信任還要有，vouch 就是在做這件事。他自己仍用 AI 生 code，但下決定時 intent 和對系統的理解要在。結構就是把 agent skills 和 context files 加進去，讓人和 bot 都能擴。Open source 一直站在 respect 上，現在 code 這麼好生，這件事更要緊：對 maintainer 有耐心，把自己解釋清楚。他希望大家更新 contributing 文件。以前寫的是人怎麼跟 codebase 互動。現在加一節：對 agent 或 AI 的貢獻規範。有些 agent 會讀到然後停下來；它們還不太會遵守指示，但寫下來有用。Context files 不要只覆蓋你自己的工具，也放通用的，例如 agents 那一類，別的工具才用得到。然後用自動化保護自己的時間，例如前面的 stale PR，以及 PR review。

[25:03](https://www.youtube.com/watch?v=HgA0spItnZI&t=1503s) 有人問，擋下這麼多之後，團隊自己的回應時間怎麼辦。他說是判斷。這些自動化是為了濾掉壞的，好讓 maintainer 的時間花在高品質、另一端仍是人的那些。他們會把期待寫下來，他記得 codebase 裡有大約兩天的 turnaround，讓開 PR 的人知道時間表。另一個人問，open source 使用者除了貢獻和捐款，有沒有比較好付費的商業模式，因為這本質是 SLA，開發者不該免費做支援。Jack 說他沒看到 fast pass。他們一切都在 GitHub，issue 一視同仁，不會有人被點名去看某一張。較小的專案可以先寫回應時間並守住，也許用自動化在快碰到 SLA 時提醒自己。他也說 open source 以前是他推薦人去學寫 code 的地方，像在累積履歷。看到有人真的持續參與，他們仍會想把人帶起來，而不是只說這份 code 很差。社群那一面要留。

[28:30](https://www.youtube.com/watch?v=HgA0spItnZI&t=1710s) 再有人問，與其過濾和退回，要不要改成教育。業界擔心誰來教 junior 和中階工程師，誰還知道什麼叫好。他說這不只是 open source 的問題，是 junior 軟體工程以後長什麼樣。Mentoring 仍很大。在場的人要刻意留時間教別人。他們有 Summer of Code，夏天收學生進 open source，那是 open source 計畫，不只是 Google 的事。教的內容也在變：怎麼把 prompt 下好、怎麼用工具，同時仍做 code review。PR creator 那種 skill 就是在把想貢獻的人的水準拉高。最後有人問 skill 吃 context，太多就不知道該啟用哪個。他們用「你超過一半的時間會不會用到」來決定預設開或關。開 PR、做 code review 這種主要的會開著。其餘通常做成 slash command 或 rules。
