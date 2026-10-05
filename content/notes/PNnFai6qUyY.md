# Yang Mou - Mixing AI Coding in IDEs, CLIs, and Cloud | DevCon Fall 2025

Yang Mou 在 DevCon Fall 2025 的演講。他是 Fonzi 的 CEO 和 technical co-founder，做 AI recruiting，之前在 Oscar Health 和 Google 當 software engineer。片長 23 分 56 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Claude Code 聽成 clawed code、Cloud Code，把 Codex 聽成 codeex，把 Replit 聽成 replet，把 Devin 聽成 Devon，把 AGENTS.md 聽成 agents MD。

- 原片：[YouTube](https://www.youtube.com/watch?v=PNnFai6qUyY)

## 一句話

IDE、CLI、cloud 不是三個互相取代的產品，而是控制權從高到低的三種做法。Cloud 拿來做小、低優先、第一次做對最好、做不對也還好的事。CLI 拿來做範圍清楚的核心功能。IDE 拿來探索、微調，以及訓練資料裡不常見的怪東西。他說 2025 年 11 月的預設是 CLI 先搭骨架、IDE 再拋光。真正的 agent manager 還沒到。

## 這場講的是 AI coding，不是 vibe coding

[0:16](https://www.youtube.com/watch?v=PNnFai6qUyY&t=16s) 他自己先把兩個詞分開。Vibe coding 是全程用 AI 工具做開發，人不需要是工程師，用對話把軟體生出來。AI coding 用的是相近的技術，但根還在工程師本來怎麼開發，再用 AI 取得 leverage。光譜的一端是 Replit、Bolt、Lovable 這類 vibe coding 工具。中間是比較會話、但仍面向工程師的工具。另一端是從一開始就為工程師做的 IDE。這場只講 AI coding。

[2:46](https://www.youtube.com/watch?v=PNnFai6qUyY&t=166s) 他問現場誰用 Cursor 這類 AI editor、誰在終端機用 Claude Code、誰在用 web agents 或 cloud agents。三種都有人，也有人同時用。

[3:22](https://www.youtube.com/watch?v=PNnFai6qUyY&t=202s) IDE 從 GitHub Copilot 開始：AI 直接放進編輯器，通常是 VS Code，或字幕裡那個聽起來像 fork 的說法。他把它形容成 pair program，也有人叫 fancy autocomplete。人還是主要待在 codebase 裡，控制最多。

[4:08](https://www.youtube.com/watch?v=PNnFai6qUyY&t=248s) CLI 是下一型。人不在 IDE 裡改，而是在終端機跟 AI 說話，由它改 codebase。這要更好的 tools 和 reasoning：指令可以很模糊，它讀 codebase、推 intent、再翻成 code。中間是大量 reasoning 和 tool use 的 agentic loop。他說第一個是今年二月的 Claude Code，感覺已經很久，其實還很新。

[5:07](https://www.youtube.com/watch?v=PNnFai6qUyY&t=307s) Cloud 是這條線的盡頭。它像 CLI，但 CLI 仍是即時、互動的；cloud 比較 asynchronous，可以平行踢起多個 agents。他說第一個真正釋出的是 OpenAI Codex cloud，像一支 AI agent 軍隊同時做事。各家很快把三種 modality 都補上。時間線他說大約四年前是 GitHub Copilot，也提到 2021；Codex 這個名字既是當初驅動 Copilot 的 model，也是後來那個 autocomplete 產品，容易混。Cursor 大約兩年前。今年才是 CLI 和 cloud agents 一起爆開。他做投影片時才發現自己沒認全這些產品。

[6:34](https://www.youtube.com/watch?v=PNnFai6qUyY&t=394s) 差異沒有看起來那麼大。有的在某一型比較好：Claude Code 從 CLI 起家，可能調得比較準；Codex 先是 cloud；Cursor 先是 IDE，也是 IDE 裡最大的玩家。他建議都試。今天基本上到處都有。

## 用哪一個，看任務，也看 chart 會往上移

[7:10](https://www.youtube.com/watch?v=PNnFai6qUyY&t=430s) 「該用哪一個」的第一個答案是 yes，接著才是 it depends。Cloud 最自主，來回最少。適合簡單 bug、改文案、改顏色、backlog 裡低優先的事。第一次做不對也沒關係，做對了是驚喜。好處是不用打開 code editor，就能踢出很多小任務。

[8:05](https://www.youtube.com/watch?v=PNnFai6qUyY&t=485s) CLI 他放在核心功能：範圍清楚、可以先跟 AI 把計畫談完，而且你有信心它會照計畫做完。IDE 強在你還不知道 spec、要很快試很多想法的時候。CLI 和 cloud 的 latency 高很多。改顏色這種事，IDE 只是讓你打得更快。另一處是離開 happy path、很特定或很 niche 的工作。那種時候 AI 自己寫一大段正確 code 的機會不高，CLI 和 cloud 比較難拿到好結果。

[9:21](https://www.youtube.com/watch?v=PNnFai6qUyY&t=561s) 三種現在都有位置，分類也會變。Model 和背後的 harness 變好之後，他預期更多工作往圖的上方移：以前必須在 IDE 做的，可以進 CLI；以前必須在 CLI 裡盯著 agent 的，可以更容易在 cloud 裡 one-shot。

## 2025 年 11 月的三種工作法

[10:07](https://www.youtube.com/watch?v=PNnFai6qUyY&t=607s) 他講自己公司、以及他在別的公司看到的做法，稱作截至 2025 年 11 月的 happy place。很多開發從 CLI 開始：對話、規劃，讓 AI 把大塊、boilerplate、scaffolding 搭起來。然後進 IDE 改特定幾行、調文案、做拋光。功能放出前，在 IDE 裡收尾比較快。他說這是現在的預設，六個月後一定會變。

[11:12](https://www.youtube.com/watch?v=PNnFai6qUyY&t=672s) 第二種他叫 commuter，因為人在紐約、會搭地鐵。任務在 cloud 上踢出，對話發生在手機的 app 或瀏覽器，不必在終端機裡。地鐵上可以跟 cloud agent 來回，不需要立刻、也不需要完美的網路。到辦公室再把 branch 拿進 IDE 或 CLI，繼續開發、拋光，然後才進 production。他說這是新的開發方式：不用打開筆電，也能在地鐵上寫 code。

[12:21](https://www.youtube.com/watch?v=PNnFai6qUyY&t=741s) 第三種叫 agent manager，他認為方向在這裡。AI 更強、人更會引導之後，更多任務可以留在 cloud。夢是不再管理一組 junior engineers，而是管理無限個 cloud agents：給 context、踢出去，釋出前偶爾親手收拾。他說 10x engineer 的真正 leverage，是背後一直有一群 agent 在 cloud 裡平行做。今天多數任務還到不了。AI 還不夠強，但這是大家要去的地方。

## 問答：視覺 QA、context，以及手機怎麼接到 code

[13:46](https://www.youtube.com/watch?v=PNnFai6qUyY&t=826s) 有人說自己喜歡在火車上用手機寫、到公司 code 已經在；他心目中的夢是坐在沙灘上。Yang 沒有接這句。

[14:11](https://www.youtube.com/watch?v=PNnFai6qUyY&t=851s) 下一個問題是前端 QA。提問者覺得自己的前端常常不到位，得把圖貼進去手動 debug，正在試 Playwright sub-agent。Yang 說 agentic 這邊有 Devin 這類早期 AI coding agent：會跑 code、做 QA、不對就自己 debug。那比較像功能上的 QA。視覺 QA 他還沒看到好例子，至少還沒看到 AI 有夠好的 visual taste、能修好設計。

[15:30](https://www.youtube.com/watch?v=PNnFai6qUyY&t=930s) 有人問第三種要怎樣才到得了。Yang 說一部分是 model 更懂 intent、更懂業務 context。有時那不會自己發生，人得給更多 context，例如 AGENTS.md 或 Cursor rules。他現在真正缺的是 business 和 product context。也需要更好的規劃流程，把 spec 在前面寫清楚，才有機會 one-shot。一位說自己在 Tessl 工作的聽眾補充：spectrum 對把事情留在軌道上很有用。他朋友用 Love2D 寫遊戲程式庫，做了一個看螢幕的 agent，以 0.1 frame a second 跑，看玩家和 aliens 有沒有在動。他說程式在 GitHub，字幕沒有給出連結。

[17:30](https://www.youtube.com/watch?v=PNnFai6qUyY&t=1050s) Commuter 實際用什麼：Cursor 有 cloud agents，OpenAI 有 background agents，他也說 Codex cloud 有一版。Claude Code web 大約兩週前推出，有另一個 UI，不只是在 GitHub issue 裡叫 Claude。聽眾接著講自己的接法：Typing Mind，筆電上跑一個 gateway，用 MCP 碰到特定資料夾；手機上對話，用自己的 key 到 Claude、Gemini 和其他 model，在檔案系統上寫 code 再 commit 到 git。檔案還是得寫在某台機器上，那台可以是 AWS 或一台 droplet。也有人用 VS Code tunnels，從瀏覽器進自己的 dev box，直到被擋。另一人用 Tailscale 做便宜的版本，後面有幾個字沒聽清。Yang 說 cloud 產品把這些抽象掉了，會自動開 sandboxed VM，人不用想這些。

## 招募那邊，AI 先把舊流程轉成死亡螺旋

[20:07](https://www.youtube.com/watch?v=PNnFai6qUyY&t=1207s) 一位應屆畢業生問 Fonzi 怎麼幫忙、用了哪些 AI，以及自己抓職缺、摘要、做客製履歷的流程，算不算他剛講的那些 workflow。Yang 說 Fonzi 可以講好幾小時，現場只剩五分鐘，所以只講高階，不進產品細節。字幕裡沒有那些實作。

[21:15](https://www.youtube.com/watch?v=PNnFai6qUyY&t=1275s) 他看到的是 AI 被用在一個本來不是 AI 的世界上：job boards、職缺。AI 很會寫大約一百封 cover letter、照職缺改履歷，也會編出你沒做過的事去對描述。每個缺湧進幾千份申請。雜訊大到招募者要花一週看，或乾脆放棄。字幕接著含糊，大意接的是對不上的履歷，或 hallucinated resumes。候選人等不到回音，就用 AI 把投遞量再放大。他叫這是 flywheel，也可以叫 death spiral，兩邊體驗都差。Fonzi 要切過去：誰真的好、誰真的在市場上、哪家公司真的在招。市場小很多，訊號高很多。那是他說的 AI native、從 first principles 來的短答案。

[22:45](https://www.youtube.com/watch?v=PNnFai6qUyY&t=1365s) 第二問他收成：AI 角色會很大。舊系統的死亡螺旋已經在發生，只會更糟。聘人與找工作都得重做。他自己抓職缺、做履歷的那條自動化，字幕裡沒有被放進 IDE、CLI、cloud 的哪一格。
