# Dru Knox - Unlocking agent beast mode with Tessl | DevCon Fall 2025

片長 33 分 17 秒，英文自動字幕。DevCon Fall 2025。講者是 Tessl 的 head of product and AI，字幕把 Dru 聽成 Drew，把 Tessl 聽成 Tessle 或 Tesla。整場是 live demo，他說自己在挑釁 demo 之神：全部現場做，而且跑的是當天已經自動更新四次的 tip of tree。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=YGURXcSIA3U)

## 一句話

Tessl 想做的是組織規模的 context engineering：一個給 markdown 用的 registry。建立、評估、發出去、再從 agent 的失敗裡改 context，四件事裡今天能下載試的主要是發布和安裝。他用一個 CLI 待辦示範：style guide 和文件可以像套件一樣釘版本；model 不該知道的私有庫，靠裝進來的 markdown 才用得起來。Demo 沒有一次過，而沒過的地方正好是他要講的：agent 會重做一個它覺得很簡單的功能。

## 四根柱子，今天只秀能用的那截

[0:09](https://www.youtube.com/watch?v=YGURXcSIA3U&t=9s) 他說 Tessl 是 agent enablement platform，剛公開，現在免費，可以去註冊。最簡單的理解是：在團隊、組織、社群裡做 context engineering。核心是一個 context 的 registry，他說最還原的講法是 npm for markdown，字幕把 npm 聽成 mpm。

人要開始用 agent 時，常常有 5 到 10 年的組織資訊：style guide、security policy、內部 API 和工具的文件。Agent 不可能知道。也有用了六年沒進 mainline 的舊版 open source，agent 是用較新的版本訓練的，一直犯錯。第一件事是把這些知識 onboard 成 agent 友善的格式。野心是接 Notion、Google Docs，或從歷史 PR 裡常出現的 comment 推出 style guide。現在的建立體驗集中在你擁有的 platform、framework、內部 API：接上 GitHub，產生文件，庫本身有新 PR 時幫你保持更新。

[2:39](https://www.youtube.com/watch?v=YGURXcSIA3U&t=159s) 有了 markdown，它真的有幫助嗎。下一根柱子是依你的用途評估 context。內部的庫，或公開的 SDK，都想知道 Cursor 用得比 Claude 好不好、Codex 會不會在某個 API 上失敗，字幕把 Codex 聽成 codeex。他們幫你產生跟使用這個庫有關的 coding challenges，用 harness 把 agents 跑過，回報哪一段不好、哪一段好、加上這份 context 好多少、新版本有沒有變好。

理想情況是做出來、確認有用、再 rollout。Distribution 是他今天要秀的，也是產品裡 ready for prime time 的部分：registry。發布文件，裝進專案，有你預期 registry 該有的版本。還能看誰採用了、誰沒有、誰在最新版。可以像 Dependabot 那樣把知識加進下游，對方接受 PR 就能用。

最後一根是 optimization，部署之後從 agent logs 看人卡在哪，再自動修 context，或建議新的 context。他說平台很多是未來願景，想找 design partners 和 early access。今天只秀現在下載就試得到的。

## 把 style guide 釘成依賴

[5:11](https://www.youtube.com/watch?v=YGURXcSIA3U&t=311s) 例子是一個只跑在 CLI 的 to-do。目錄是空的，只有一組他不打開的 OpenAI key，和一份 gitignore。他跑 `tessl install`，裝的是 Tessl Engineering 內部的 Python style guide。核心用途是 library team，但任何你會當 context 交給 agent 的東西都能發布。裝完之後它偵測到他在用 Cursor 和 Claude Code，建了 `AGENTS.md` 和 `CLAUDE.md`（字幕聽成 cloud MD），也設了 MCP，讓 Tessl 能被跑起來，另外有一份 `tessl.json`。

他要 context 愈靠近 code，生命週期就愈像 code。這份 style guide 是 0.2。若有人大改 Python、把版本抬到 1.0，他不想週一進來看著要改功能、結果整天在遷到新 style guide。所以先不升。你可以釘在已經在用的知識上。另一頭也能看到誰更新到 0.1、誰沒有。維護模式的可以留在 0.0。Context 該被明白宣告成 dependencies。

[8:17](https://www.youtube.com/watch?v=YGURXcSIA3U&t=497s) `tessl` 資料夾裡裝進來的叫 tile，就是一個 Tessl 套件，像 Ruby gem 或 Rust crate，名字本身沒有別的意思。打開是 markdown。裡面規定用 UV 當 package manager。Agent 很愛自己寫 package manifest，幻覺出 dependencies 再裝上去。他寫明不准，必須用 UV。這是他每個 Python 專案都要的，現在有辦法走到哪都一樣。

他有先寫好的 prompt，免得現場打字。要一個 CLI：用他剛裝的 Python setup；`todo add` 把待辦寫進一個全域 SQLite；`todo list` 用方向鍵瀏覽；CLI 用 typer 和 prompt toolkit。它進了 plan mode。他一邊等，一邊回答問題。那個 tile 裡還寫了用 UV、以及字幕聽成 pym 的方式設 dependencies。權限都還沒接受，看得出是新環境。它在讀 `tessl.json`、跑 `uv init`、用 `uv add` 加上那兩個套件。

[11:50](https://www.youtube.com/watch?v=YGURXcSIA3U&t=710s) 私有 repo 之外，公開依賴也能搜。他 `tessl search typer` 再裝上，給 agent 文件；prompt toolkit 也一樣。他說 Tessl 已經為 10,000 個 open source 庫做了對版本的文件。沒有的可以填 request。他假定用最新版。已有專案時，跑 Tessl 會掃 `package.json` 或該語言的 manifest，推薦他們有的 open source tiles。

有人問 monorepo。他建議進每個資料夾跑 sync。理論上 monorepo 不該擋住，但他們還不能從任意位置發現多份 `package.json`。一個消費者庫裡很多語言、只用一份 `tessl.json` 全列出來也可以，只是 agent 搜尋時會跨所有語言的文件，有一點 bleed。他們想加更乾淨的區分，這塊支援還不好。會後可以再談。

[14:44](https://www.youtube.com/watch?v=YGURXcSIA3U&t=884s) Agent 說做完了。`uv run todo add`，內容是 give awesome demo，他說成功了。`todo list` 有鍵盤導覽，有些項目是它測試時自己加的。Enter 切換完成，Escape 離開。他說喜歡 demo 真的會動。沒有 due date，什麼都像很急、都是現在。他想加自然語言的到期日：打 do this tomorrow 就能抽出日期。

## 私有庫只是 markdown，demo 在這裡裂開

[15:35](https://www.youtube.com/watch?v=YGURXcSIA3U&t=935s) 庫叫 NL dates。吃一個假定含有自然語言日期的字串，回一個程式用得上的 date。文件是他叫 Claude Code 寫的，Tessl 也能生，但你不必。不是專有格式，就是 markdown。已有的可以當起點，之後也能改。他沒發上 PyPI，字幕把 PyPI 聽成 Pi，只放在 GitHub。特別的檔案是 `tile.json`，拿來發布的 manifest。版本 0.0.4，文件描述的是這個版本的庫，用標準 package URL，結尾帶版本字串。進入點不必叫 `index.md`，叫 `foo.md` 也行，字幕聽成 fu.mmd。`tessl tile publish docs` 裡的 docs 只是放著 `tile.json` 的資料夾名。他不在台上發布，因為已經發布過。

Registry 看起來像 npm 或 PyPI。這個 tile 是私人的，只給自己用。他用自己的帳號搜 NL dates，字幕把帳號聽成 DF ball。好笑的是有一個 1.2.4：有人把他的 demo 機器拿到另一個房間，發了一個隨便的版本。實際上沒有 1.2.4，有的是 0.0.4。裝進來後多了 tile 的 `index.md` 和 `tile.json`。

檔案放進 repo，一是冗餘：Tessl 掛了也不該讓你失去文件、寫不了 code，agent 隨時可以 grep。也讓你能在文件上做自己的工具。他們更推薦已裝好的 MCP，更快、更準。可靠來自很多層 fail-safe。這份文件在他的個人 GitHub 上，除非 OpenAI 今天正在訓練他的個人 repo，model 對它一無所知。

[19:28](https://www.youtube.com/watch?v=YGURXcSIA3U&t=1168s) 下一個 prompt 要它看 NL dates 的文件、學會怎麼裝。不是從 PyPI，是 git URL。然後加上抽出自然語言描述，並一定要有 due date。他承認自己寫得比較死，是為了安撫 demo。他們已經在 agent 裡加了 steering，讓它去叫 Tessl。你若寫 use tessl，啟動率接近 100%，但他們想做到不必寫這句。

有人問 steering 是不是只在你加 tile 時把事情派給 Tessl，加了 tile 不必改 agent 或 Claude；若下一個是 Codex，就再加一份 MD。他說對。使用端要像 `npm install`：一個人把知識加進去，repo 裡的人就有，只要裝了 Tessl 就有 MCP，不必一直重同步 dependencies。

`AGENTS.md` 是 `tessl init` 時自動填的，指向 `tessl` 的 rules。Tile 裡有兩種 context。Documentation 是被動的，agent 得去要，走 MCP 或 grep。Rules 像 Cursor rules 或放進 `CLAUDE.md` 的東西，主動登記，規定某件事必須用某種做法。他的 Python rules 被引進 `AGENTS.md`，連結追下去就是剛才那個 tile。加 tile 時這些會自動處理。

[22:41](https://www.youtube.com/watch?v=YGURXcSIA3U&t=1361s) 有人問 model 到底會不會照做，是不是只有少數 model 真的聽。嚴謹的答案是 eval。這個功能正在做，應該很快能用。你把 context 上傳後，可以選擇建立 evaluation scenarios，對最流行的 agents 跑，給硬數字。Scenario 是要跑的 coding task 加上要檢查的 grading criteria，仍是你可以拉回 repo、修改、再加、再推回去的檔案。他的 gut feel 是內部看到的：Cursor、Claude Code、Codex 大多不錯。Claude Code 通常最尊重你給的 context。Cursor 比較 ornery，字幕聽成 orary，比較不愛叫 tool，要多推一下，但不嚴重。講清楚、沒有很多互相衝突的要求時，他說大多數事情在 80% 以上。問的人說這比較像在評使用中的 agent 和底下的 model。他說兩邊都有：可以對不同 harness、不同 foundation model 跑，例如 Claude Code 用 4.5 對 4.1，字幕聽成 45 和 41；或 Cursor 用 OpenAI 對 Anthropic。

## 它把功能做對了，但是自己重寫了一遍

[24:44](https://www.youtube.com/watch?v=YGURXcSIA3U&t=1484s) 它說做完了。`uv run todo add finish the demo before Saturday`。快得可疑。List 裡看得到那件事，沒有 due date。他直接跟它說：我跑了指令，沒看到日期被抽出來。

他一邊等一邊講兩個問題。日期會被抽出來，但沒有把日期從任務文字裡拿掉，任務還是 do a thing by tomorrow。而且什麼都會被標日期，連 buy groceries 也會。他要改 NL dates：不要從字串算出一個日期，而是把日期抽出來，拿掉跟日期有關的字，回傳日期加上改寫過的任務，沒有日期就回 none。這個 prompt 他沒測過，點子是開場前才有的。會把 calculate date 換成 extract date，更新文件，把庫的版本和 `tile.json` 的版本一起抬高。這是 breaking change。他要發新的文件和新的庫，但不想在自己升級之前弄壞現有的。發布時是另一個版本。升到 NL dates 0.2 之後跑 `tessl sync`，偵測到版本往上，就把新的 tile 拉進來。他們把它設計成適合放進 CI：merge 到 main 時看文件有沒有變、升版本、再發布。台上不做這段。

[29:05](https://www.youtube.com/watch?v=YGURXcSIA3U&t=1745s) 有人問怎麼知道它用的是本地 markdown 還是別的。搜尋若呼叫了 MCP tool，那個 tool 是在本地跑。他們大概會加全部放雲端的選項，換更多平行。目前全在本地。磁碟上的檔案幾乎是 cache，免得一直走網路。沒叫 MCP，就是它自己在 grep。

他再跑 `todo add finish demo before Sunday`。慢。他說畫面上的 1123 看起來對。List 甚至多了一個以前沒有的寫法：due in six days，而不是只寫某一天。日期被抽出來了。然後他發現好笑的地方：它把他要的功能做在 NL dates 上面，自己實作了一遍。功能是好的。他打算等這段結束，再叫它改用新版 NL dates。他說這正是文件有用的原因。大家都看過，agent 很愛重做事情，尤其簡單到它自己做得到的時候。

時間到了，他只快速講發布會怎麼走。`tile.json` 改成 0.2。文件版本和庫版本不必綁在一起，是他當時一起開始寫才綁的。庫可以改成 0.3 或 1.0，看 `pyproject.toml`，字幕聽成 pi project。然後 `tessl tile publish docs`，這條也可以放 CI。另一邊 `tessl tile update` 會找新版本。他還沒更新套件，所以現在不會動。要先把套件更新，再 sync 才會更新。他說時間到了，保證這樣會通，然後結束。
