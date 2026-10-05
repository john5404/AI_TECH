# Brian Douglas - Virtual Tool Calling and the Future of Portable AI Toolchains | DevCon Fall 2025

Brian Douglas 在 DevCon Fall 2025 講 Continue 的 virtual tool calling。這場約 25 分鐘，英文自動字幕。他要大家 Google 自己，字幕把稱呼聽成 Boggy、Buggy。字幕也把 Ollama 聽成 OAMA，把 Qwen 聽成 Quinn、quent，把 Claude 聽成 Quad，把 Sentry 聽成 Century、centry，把 Snyk 聽成 sneak，把 Seer 聽成 Seir、sear，把 Vercel 的 Guillermo Rauch 聽成 GMO RO、Verscell。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=k5IYvORccGo)

## 一句話

各家 model 的 tool calling 不相容，很多本地 model 根本沒有原生 tool calling。Continue 的做法是 virtual tool calling：把 tool 定義用 XML 塞進 system message，讓同一個 agent 經驗可以跨 model。他要把這套可攜性帶出 IDE，做成對著 Sentry、Snyk、PR review 的 custom agent，由錯誤當 trigger，再把修補收成一個可以 eval 的 loop。

## 一站直達，以及本地 model 還在谷底

[0:09](https://www.youtube.com/watch?v=k5IYvORccGo&t=9s) 他從舊金山來，人住 Oakland。用紐約地鐵當開場：本地車六站，在 36th Street 下；特快一站就能從 Barclays 到會場。他說這就像只呼叫一個 function，得到 one-shot。他在 GitHub 做過 developer advocacy，是 Netlify 早期員工，現在在 Continue 做 DevX。另外經營過兩年的公司，賣給了 Linux Foundation。他加入 Continue 是因為他們 open source first。字幕把 Netlify 聽成 Netifi。

[3:28](https://www.youtube.com/watch?v=k5IYvORccGo&t=208s) Continue 要 ship 更快的 continuous AI。他說這是過去兩個月在送的東西，12 月 1 日會有大宣布。起點是 custom agent。他們很早讓 VS Code 配上 Ollama，用本地 model 跑 coding agent，時好時壞。現場有人在用本地 model。他說本地 model 正處在一個谷底。Kimi 剛出來不久，GPT-OSS 120B、GLM、Qwen 3 coder 都在，Qwen 3 coder 是好 model，但總有怪癖。前一晚他跟 ByteDance 的人在一起，說這支片子出來時對方應該已有宣布。

[4:39](https://www.youtube.com/watch?v=k5IYvORccGo&t=279s) 他把 Continue 的 open source 使用者叫做 freeloaders：一直在對免費 model 做負載測試，想逼近付費的 foundation model。他說你不會得到 Claude Sonnet 4.5 那種體驗。想要 Sonnet 就付錢；想要本地 model，就自己 fine-tune、做 eval，頂多到差不多能用。也可以乾等下一次訓練送來更多開源 model。Continue 把 custom agent 拆成 models、rules、tools。Model 選本地或 hosted。Rules 是夏天花很多時間做的，類似 Cursor rules，但是在 Continue 裡。Tools 才是這場的主題。

## 沒有原生 tool calling，就把 XML 寫進 system message

[5:49](https://www.youtube.com/watch?v=k5IYvORccGo&t=349s) 他本來投的題目跟樓上 Robert 正在講的 agent 管理很像，主辦改要他講本地 model。Virtual tool calling 一直是難題，很多人早期就自己解過。OpenAI 的 function calling 很好用。後來演進成 agentic 的 function、tool calling，model 可以 reason 再回應。Qwen 3 coder 對 Continue 是大問題：model 很好，但做法跟別人不同，他們得介入，才能給出使用者預期的經驗。做法是注入 XML 來做 tool calling。他們叫過 virtual tool calling 一段時間，實際上是 system message tools：把帶 XML 的 tool 塞進 system message。投影片上紅色標的就是這段。他道歉紅綠色對無障礙不友善，並說文件裡有這些概念。他很得意自己有一個網域，字幕聽成 OSSFY，沒有把網址念清楚。

[7:39](https://www.youtube.com/watch?v=k5IYvORccGo&t=459s) Demo 是一個計算機，repo 叫 AI native dev calc。畫面先壞掉，清 cache 重開後出現 67，他用來證明計算機本身能動。前一晚用 vibe coding 加了彩蛋，例如 1337。程式是 JavaScript 加 HTML，在 VS Code 裡。真正的 bug 是按 percent：888 再按百分比，得到的是小數，不是百分比。他原本想全程用 Whisper Flow，後來還是打字。

[10:50](https://www.youtube.com/watch?v=k5IYvORccGo&t=650s) 他在 agent mode 裡說百分比壞了、請修好。這套就是他們的 virtual tool calling。他說若用 OpenAI 的 model，反正一定會動，所以臨時換 model。他先切到 plan mode，只要 read-only 的 tool，不想事後收拾一堆 code。第一次示範沒有打到任何 tool，他承認這不是好例子。接著換 Gemma。他喜歡 Gemma，model 很小。他自己用 32 GB 的機器，常在 BART 上工作，也常離線。不能切到 Qwen 3，那會把機器跑到過熱。Gemma 4B 預設沒有 tool calling，是 agentic flow 出現之前就出貨的。它還是去呼叫了 search tool。他要用這個證明：沒有內建 tool calling 的 model，一樣可以打到 tool。重點不是計算機，是 tool calling 的可攜性。

## Tool 怎麼呼叫，每家都不一樣

[13:48](https://www.youtube.com/watch?v=k5IYvORccGo&t=828s) 他把 agent 的突破放在去年夏天前後。他最早看到的是 CrewAI，讓 agent 跟 agent 說話；不久 coding agent 開始出貨，Cursor 也許是第一個，日期他不敢打包票。迴圈是想、處理、推理，再呈現結果。在 Continue 這種平台上，痛的是 tool calling 碎片化：一個 model 的 tool 做法，換一個 model 就不一樣，很難管。過去三個月他們的說法是：這是建議的 model；要別的就來 contribute。

[14:49](https://www.youtube.com/watch?v=k5IYvORccGo&t=889s) 投影片顏色他來不及改，口頭用 1 到 5 帶過。Stateless 像 Claude Code，不存 state，做得又快又短。Codex 也是低摩擦。Autonomous 很像 OpenHands，像人按特定步驟走，而且會存 state。字幕裡的 compiler agents，他說是 Ry 前面講過的；Cursor 的互動方式大概落在這一類。Model provider，包含開源 model，總會問他們 tool calling 怎麼處理。答案是注入 XML，盡量靠 stateless；有些情況仍得加 state。下一場是 George 的 Stackpack，他認為會落在 domain specific，以及為 DevOps pipeline 做 planning 和 routing。他說幾乎每個週末，Continue repo 會開出大約 10 張 issue：一個沒聽過的 model 不能用。他一直在貼文件。這場談話就是為了回答這件事，之後也許寫成部落格或一系列。答案就是 virtual tool calling。

[17:04](https://www.youtube.com/watch?v=k5IYvORccGo&t=1024s) 平台要同時管本地 model、hosted model，以及沒聽過的 provider。MCP 也一樣難：不管你用哪個 model，都想呼叫 MCP，而 MCP 進場大約一年，狀況仍然很散。他說真要做一個 coding agent，工作量很大，不如來 Continue。

## 離開 IDE：Sentry 當 trigger，再自己選 agent

[17:35](https://www.youtube.com/watch?v=k5IYvORccGo&t=1055s) 他們在實驗他口中的 legacy dev tools，也就是 AI 之前的工具。Sentry 是例子。他說 AI 之前，東西沒壞就不會去看那些 error；壞了才進去翻。Agentic workflow 適合拿來 triage 和 debug。幾週前 Cloudflare 告訴他，過去 7 天單一個任務就有大約 6000 萬筆 Sentry error。他覺得合理，因為對方當時掛了，他當天早上讀到 postmortem，是 SQL error。時間點很巧。Continue 在試的是：你選的 model，配上你要的 MCP，去解一個範圍清楚的問題。這就是他們說的 continuous AI。

[18:53](https://www.youtube.com/watch?v=k5IYvORccGo&t=1133s) IDE 有 VS Code 和 JetBrains，另外做了 CLI。CLI 很多，他們要的是可插上的現成情境：解 Sentry error、解 Snyk vulnerability、做 PR review。這是他們對 custom agent 的版本，部署之後 set and forget。CLI 是夏天、大約七月的實驗，用 Ink，也就是 Claude Code 底下那套。

[20:00](https://www.youtube.com/watch?v=k5IYvORccGo&t=1200s) 網頁示範前他先把網路關掉，用來證明本地可以跑，所以還得等網路回來。Sentry 有一個工具叫 Seer，是他們的 agentic flow，按鈕文字是 code it up。他用 Codex 時對方回了 heck yeah，他覺得尷尬。畫面上有一個 solve。過去 5 天他收到七筆這類事件。想法是踢一個專門的 task：custom agent 沒起來，他就去看那筆 Sentry error。計算機的 clear 按鈕，他希望按下去看到 all clear。Prompt 已經做在這個 task flow 裡，依 Sentry 的內容去修。也就是 model、給 Sentry 的 rules，再加上那個 MCP。中間多幾步，讓你自己選下一個事件。他認為多數 coding agent 會往這裡走。

[22:07](https://www.youtube.com/watch?v=k5IYvORccGo&t=1327s) Vercel CEO Guillermo Rauch 兩天前推了一則調查：coding agent 你是 synchronous、async，還是 background。Background 大約是回覆者的 5%。樣本是追蹤他的人。Douglas 覺得這還很早。Continuous AI 的 workflow 是：trigger 是 Sentry error，結果是修好它，形成一個 loop。用 Seer 可以標 high、medium、low。Low 常常能 one-shot，像那班只停一站的車；多數要拆成多步，先開 issue。踢 task 時可以自己選 agent。不一定開 PR，也可以只開 GitHub issue。他會前開過幾張，例如 backspace 不能用。Continue 會打開一份 plan，讓你再踢出去。

[23:31](https://www.youtube.com/watch?v=k5IYvORccGo&t=1411s) MCP cookbook 裡另一個例子是 PostHog。他不是 product manager，但 session 資料可以消化成文字，再回成 issue 或修補的 PR。若 onboarding 壞了、轉換只有 25%，就問 PostHog 的 MCP，用 Continue 或任何 agent，產生一批計畫去測試、分發。他覺得最有用的下一步，是在 PostHog 設一個新的 tracking metric，事後看修了有沒有用。他一直推 Continue 的工程師做這最後一步。他們沒有 PM。人少，就得讓工程師用 product engineer 的方式想。

[24:23](https://www.youtube.com/watch?v=k5IYvORccGo&t=1463s) 收尾是 amplified dev：不是取代開發者，是放大他們。沒有提問時間。他住在 Brooklyn，叫大家 Google 他。
