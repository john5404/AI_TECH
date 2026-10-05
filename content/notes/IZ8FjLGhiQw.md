# Shrey Shah - Testing and Securing AI generated code with Cursor | DevCon Fall 2025

片長約 1 小時 47 分，英文自動字幕。DevCon Fall 2025 的現場工作坊。講者自介叫 Trey，標題是 Shrey Shah。他是加拿大的 Cursor ambassador，也是舊金山一家新創 Vivven 的 senior AI engineer。2020 年就用 GitHub Copilot 寫 code，到這場大約五年。這是一場動手示範，很多畫面字幕沒有摘全，下面只記他口頭說到的結果。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=IZ8FjLGhiQw)

## 一句話

用 Cursor 可以生很多 code，但模型會幻覺、沒照你的意圖做，也會帶進安全問題和 bug。那樣不能拿去上生產。Shrey 的做法不是換一個更會聊的介面，而是把 context 做成會被每次聊天吃進去的規則：個人風格放 user rules，專案和每個 module 放 project rules，重複兩三次的事做成 command，安全規則在生成時就套上，最後再用會從多個角度掃的 review，而不是相信它說做完了。

## Cursor 的差別是 context engineering 做得容易

[0:09](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=9s) 這場的主題是活動本身：大家用 Cursor 生很多 code，模型卻在猜、沒做你要的事，有時有安全問題，裡面很多 bug。拿去部署、或在真正的 app 上工作，你不想讓那些問題跟著 code 走。他辦過 assisted coding 工作坊，也在各場會講 AI coding。他一直在找能很快、又保住品質的 workflow。

[1:29](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=89s) 不熟 Cursor 的人，他把它說成開發流程裡的 AI sidekick，當你的 pair coder。它是 VS Code 的 fork，已經熟 VS Code 的話，遷移不難。和 Claude Code、Amp、Kiro 這類比，字幕把後面幾個聽得破碎，他特別喜歡 Cursor 的理由是 context engineering 特別容易。他沒看過別的工具做得更有效率。他認為這是 Cursor 的秘密，不是你在催不同模型、也不是 UI。Agents 愛猜。給對的 context，它就不會那麼幻覺，輸出會好很多。Cursor 在幕後替你做很多 context engineering。

[2:55](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=175s) 他先問現場誰在用 Cursor rules、分不得分 user rules、project rules、Bugbot rules。舉手很少，所以他從基礎講。User rules 是全域的，套到你 Cursor 環境裡所有專案、所有 agent chats、所有 thread。每次送訊息，這份全域規則都會套上。Project rules 只屬這個專案。可以靠 path patterns 叫出來，可以手動把某條規則附進 context，也可以依相關性。畫面上的 apply intelligently，他說像 Claude skills。Cursor 這個做法當時已經超過一年。Agent 依你在做什麼決定要不要把那段 context 拉進來。也可以只套特定檔、手動套、或在這個專案永遠套。

[4:45](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=285s) 多數人不知道：monorepo 裡前端和後端可以各有自己的 Cursor rules，各管各的。那才是他說的 proper context engineering。他的用法是給 agent 那個 module 裡有什麼的記憶。每次 agent 讀檔或做那個 module，會先看那份記憶；做完還會自己更新，讓記憶保持新的。他說這是子目錄裡 Cursor rules 最有力的用法之一。現場他開一個空的 sample test folder 來示範，中間有人要他放大、換成淺色主題。那段畫面字幕沒有跟著走完。

## 個人風格不能塞給整個團隊

[7:00](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=420s) 他常用 Claude 4.5 Sonnet。它愛生很多 markdown，他討厭。它也一直說他 absolutely right，他也討厭。這些進 user rules，叫它別這樣。現在它改生文字檔、不生 markdown，但檔裡還是會寫摘要。重點是規則可以很開放。若你有自己的 coding style，要 agent 代表那種風格，放 user rules、全域規則。團隊共用的生產專案裡，你不能把個人標準強加給別人，所以才分開。他秀自己的個人標準都在 user rules 裡。每一條 chat thread 都會帶上。

[8:22](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=502s) 他問 Cursor 這個專案有哪些 user rules。他用 Composer 1，因為快。專案裡沒有東西，它仍列出那些規則。意思是 Cursor 預設把這些規則注入每一次聊天。他說這會讓輸出有白天和黑夜的差別。接著做 project rules。他建一個叫 test.mdc 的規則檔，設成 always applied。規則寫：每次回應結尾要有笑臉，以及 Iron Man 這句。他要明顯到看得出規則有沒有套上。理論上說 hi，結尾就該出現。Composer 不太會跟指令，所以他改切 4.5 Sonnet，才看得到套上。字幕說畫面裡似乎有一個 bug，沒有把後續點選摘完。

## 同一個 prompt 丟給多個模型，並叫它測到能動

[18:14](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=1094s) 他轉到當時新的東西。Workers 是同一個 prompt 叫多個模型，平行把工作做完，workflow 會快很多。還有內建瀏覽器和 Playwright MCP，字幕先聽成 play at MCP，可以在 Cursor 裡做前端、用 Playwright 做測試和 web automation。Hooks 他用很多，拿來對 Cursor 的 workflow 做 reinforcement learning，把這些 workflow 當成 agents 來對待。字幕把 reinforcement 聽成 reinfusement。

[19:25](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=1165s) 示範的 app 是他用來分享自己多年收集和自己做的 Cursor 資源：rules、MCPs、commands，點了就能加進你的 Cursor。他覺得沒有簡單的分享方式，所以要加一個分享連結，一個小功能。他要用多個模型同時做：Composer 1、Gemini 3.0、Sonnet 4.5。他說 Google 大約一小時前才放出 Gemini 3.0。字幕把 Gemini 聽成 Geminina，把 Sonnet 聽成 plots onet。Prompt 只有一句：實作 resource sharing，並且一直測到它能動。他做了兩件事：實作，以及叫它自己測到能動。他沒有寫嚴格需求。平常他會先做一份有計畫和 spec 的 markdown。為了示範不要拉太長，這次從簡。

[31:47](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=1907s) 其中一個，Composer，把功能做得很好，開箱就能動，省下他回頭修的時間。他說可以把一個 git worktree 的變更帶到另一個，確認能動；也可以叫 agent 把兩邊最好的合進真正的分支。示範完他把檔案丟掉，不想留。這是 Cursor 2.0 裡 Composer 1 和 git worktrees 的多模型做法。過程中 agents 也叫了 Playwright MCP，試著測自己的工作。畫面細節字幕沒有逐項留下。

[32:34](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=1954s) Hooks 有很多用法。他在生產裡用來把模型的輸入和輸出做成 CSV，收集某個 workflow 的幾個例子，再用 DSPy 做 reinforcement learning，把 prompts 改到他要的、比較確定的 workflow。字幕把 DSPy 聽成 DSPI。他秀的 audit hook 很直接：把 JSON 輸入寫進 agent audit log。他在 Cursor 裡做的每件事都被記在某處。他說這對企業想知道開發者怎麼用 Cursor 很有用。用 shell script 寫 hook，幾乎可以做任何事。也可以寫一個 hook，在 prompt 到模型之前先自動最佳化。

[34:20](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=2060s) 測試 AI 生成的 code，他已經示範一種：叫模型做的時候就測自己的變更，也可以寫進實作計畫。他平常不給這種隨口的 prompt。他會有一份 statement of work，規定驗收標準、變更要怎麼測。那樣回應會連貫得多。

## 做了兩三次，就把它收成會叫對工具的 workflow

[52:13](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=3133s) 他要快，所以用 Composer 1。他確認 Snyk MCP 還開著，字幕把 Snyk 聽成 sneak。他有一個叫 create new workflow 的流程，會問一串問題，弄清他要從這件事得到什麼。平常在 Cursor 裡，同一件事、同一個 prompt、同一個任務做了超過兩三次，他就跑這個，做成 workflow，存進 Cursor commands，下次不用自己寫 prompt。他說會更有生產力，結果也更準、更對點。這次它找到三個問題，沒有自動修。他接著說：為 Snyk 做一個新 workflow，用 Snyk 掃目前的 diff，然後自動修。他強調要寫出 MCP 工具的正確名字。每個工具帶的工具不同。寫死名字，workflow 才有確定性，每次都會叫到你要的那個，不會叫錯。在 MCP 區段把工具展開，看得到描述和參數，就把同一個名字寫進 workflow。以後還可以對這些 workflow 做 reinforcement learning，讓它正好做你要的，但他說那會拉得比較遠。按下去之後它問了幾個問題，工作流程名稱它自己往下做，開始建。最佳做法是做完你還是手動看過，確認它做的是你要的。若不對，就再改。

[1:07:50](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=4070s) 安全是生成時就套規則。若再做一次、尤其是新的前端功能，他會套上剛才做的那條安全規則，讓它生出比較安全的 code，問題會少一些。即便掃過、測過，他仍確定裡面還有一堆問題，還不是 production ready。所以要有人好好 review。他帶到 CodeRabbit。他測過很多 review 工具，沒有一個完美。他喜歡 CodeRabbit 是因為它碰得到的工具：可以從很多角度掃 code，因此一般更能找到問題。畫面上是和他本地相同的變更，只是開成 pull request。摘要不是他寫的，是 CodeRabbit 生的：改了什麼、哪個檔、還有一張 sequence diagram，讓他比較容易懂這張 PR 在做什麼。後面的審查畫面字幕沒有逐條摘。

## Review 工具他換過一輪；模型他不交給 auto

[1:17:15](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=4635s) 有人問團隊各自的 workflow、不同專案，規則怎麼還相關。他從自己這份基本的開始，另外有一條 command，幫他把規則改成這個專案要的。它會看 codebase，再問：我注意到這些，你還要用這條規則，還是要改一點。他也有 workflows，例如 Linear：票的樣式寫成 AIC-XXX，AIC 是那個專案在 Linear 上的代碼。換專案，代碼就不同，工具都要改。可以拿一份基線，讓 agent 把整份文字改成新專案的。他建議用一個吃得下整個資料夾的模型，字幕聽成 CLET，因為那個模型懂他現在有哪些規則、這個專案要更新什麼。有人接話：維護變多，但是會讓你加速的維護。

[1:31:10](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=5470s) Rules 目錄是一堆 markdown。某個 module、或前後端，可以放自己的 Bugbot markdown，agent 在 git 上開始 review 時會套用。這和別的 review 差在輸出品質、抓到的問題不會像 CodeRabbit 那麼好。他試過 Greptile，字幕作 Graile、Grappile；Graphite；CodeRabbit；一個聽成 Guitar 的工具；Cursor 的 Bugbot；以及用自己的 Claude 擴充、依自己的標準來 review。他要的是抓到真正相關的問題，而不是幻覺。到目前他最 Impressed 的是 CodeRabbit，抓得對、幻覺較少。字幕有一處聽成 code driver。Cursor 有時仍會把不是問題的東西報成問題。他以前用 Bugbot，現在不用了。主要用 CodeRabbit，也用 Greptile，因為 Greptile 會依他的 coding standard 來 review。以前他得在生成之後手動跑一條 command，問生成的 code 有沒有守標準，沒有就修。團隊裡不是每個人每次都做。Greptile 會抓住沒守的。

[1:36:37](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=5797s) 他依任務選模型。Review 一律用 GPT 5.1 Codex，他說它極會 review。也可以同時點 Composer、5.1 Codex 等，叫它們 review 目前的 git diff，並確認守 coding standard。有人問 auto mode 不是就該在後面幫你在模型和供應商之間選嗎，手動切是不是多餘，而且單一模型很容易把 tokens 用完。現場有回音，他聽不太清楚。他的答案是他從不用 auto mode，因為他要自己選。Auto 會挑它認為最適合任務的模型，那不是他要的。複雜的實作他總是用 Sonnet 4.5。做計畫用 GPT-5 Codex。Review 也用 GPT-5 Codex。有了計畫、要平行實作，他用 Composer 和 Sonnet 4.5。他發現 auto 若犯錯，你會花更多 tokens 去修。所以手動切不是白做。

[1:44:11](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=6251s) 有人問很大的遷移。他會先描述那個模型該做什麼，把那些檔合在一起，叫模型測自己的工作，或等整個 app 遷完再測那個 module。它要能看出這是舊功能、現在這樣做是否還能動。你還得給 context：我在把舊的 COBOL 遷到 Python。它才知道以前是 COBOL，現在看到的是 Python，以前的功能是那樣。模型夠聰明，知道這種遷移會出哪些問題，大概也能幫你修。沿路做成可重用的 workflows，才會快。不做的話，每次都得手動 prompt，整個遷移不會一致，codebase 也不會一致，最後錯誤可能更多。他說這就是他會用來遷 legacy codebase 的做法。

[1:45:32](https://www.youtube.com/watch?v=IZ8FjLGhiQw&t=6332s) 沒有更多問題，工作坊結束。主持人說看他現場做了好一陣子，學到的 Cursor 比別的都多。他秀的那個放了很多 rules 的 Git repo 是公開的，可以拿去用、拿去學。連結在 Zoom，也貼在 Discord。下一場三點開始。
