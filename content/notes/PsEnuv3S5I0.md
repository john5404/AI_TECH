# Luke Marsden - Giving Every Agent Its Own Desktop: Lessons from Dogfooding HelixML - AI Native DevCo

Luke Marsden，Helix ML 的 CEO，在一場他稱為 Tessl conference 的會上。片長 31 分 50 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=PsEnuv3S5I0)

## 一句話

他的命題是：所有資訊工作最後都會變成在管理 agent，軟體工程只是起點。五個 agent 擠在同一個工作目錄裡，會互相 `git stash`，隔天還有一個對 checkout 下了 `rm -rf .`。所以他要集中的、每個 agent 一台自己的電腦，用 spec 把人留在迴圈裡，並且用 Helix 建造 Helix。

## 先給 agent 電腦，不要給人一台共用的

[0:18](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=18s) 他自我介紹是 kind human，Helix 做 private agents。之前做過 MLOps，擔任過 Kubernetes 的 cluster lifecycle lead，更早在 Docker 和 Kubernetes 初期做過儲存的 DevOps 公司。AI 從軟體工程長出來，所以 agent 也從這裡開始；最後所有搬資訊的白領都得跟 agent 互動。

[1:26](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=86s) 投影片來自 Gastown 的作者 Steve。採用階段是：像 GitHub Copilot 那樣的 chat completion，然後單一 CLI agent，例如 Claude Code，然後厭倦在自己電腦上顧一個 agent，想並行跑很多個。天真的做法是很多 agent 共用同一個 working directory。他為了巴黎客戶的簡報，週一早起跑了五個。一個把其他人的工作 stash 掉。隔天另一個對 git checkout 下了 `rm -rf .`（字幕 RF dot）。這真的發生過。

[2:36](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=156s) 他從 2023 年就在做完全跑在自己基礎設施上的 agent、LLM 和 RAG。去年底迷上讓蛇咬自己的尾巴：用他們在做的東西來做它自己。客戶也把他們推向 coding agent。下面是意見，附上他為什麼這樣想，給也在做這類系統的人。

[4:07](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=247s) 第一個大決定：繼續讓每個開發者在自己那台像雪花一樣的環境上跑 agent，還是做一池跑在組織基礎設施上、很多人都能互動的 agent。他主張集中。集中不是把資料交給 OpenAI。可以跑在自己的 Kubernetes 上。好處是全球團隊能交接：東京日落、倫敦日出，另一個人接著同一個 agent 的工作，前提是那個 agent 真的有一台屬於這項任務的電腦。他們合作的 DevIcon 寫過：agent 寫 code 不是新鮮事；有趣的是從左邊那種每個工程師自己跑、不安全的做法，走到全公司、安全的做法。

[5:54](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=354s) 意見一：電腦要給每個 agent，不是給每個人。你不會雇一隊工程師然後叫他們共用一台電腦。

## IDE 還在；角色不要細到變成辦公室政治

[6:09](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=369s) 意見二：還是需要 IDE。Claude Code 讓他比較少看 code，他真心覺得自己變笨了。Agent 會做更長、更自主的任務，但要介入、要 pair，還是得看 code。一個跟著 agent 走的畫面，對理解它在做什麼很有用。

[6:53](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=413s) 東西必須快。他當 Cursor 用戶時，鍵盤輸入慢到受不了。Claude Code 是用 React 做的，結果像在終端機裡做了一個瀏覽器。他只想要一個能用的文字框。

[7:21](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=441s) 怎麼組織 agent，有兩派。一派按任務數量擴。一派做成組織：CEO agent 雇 VP of engineering，再雇工程師，還給他們名字。他們從左邊開始，因為比較容易，右邊還在研究。研究到的是：角色切太細、再給專門頻道像 Agent Slack，它們會退化成企業政治。訓練資料裡全是人類為蠢事爭吵，token 就這樣燒掉。他認為最後該混在一起。粗分角色，marketing、sales、engineering，因為工具和要接的系統不同。角色裡面再按任務擴，像一池蜜蜂。

## 每個任務一台桌面，spec 先寫再做

[9:10](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=550s) 按任務擴，Kanban 很自然，因為你想限制並行。範例是一個 to-do list。在 backlog 按播放，三個任務長出三台電腦：加 dark mode、修 bug、加自訂分類。

[10:00](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=600s) 要讓 background agent 摸起來像 foreground，他們走到 GPU 加速的桌面。沒有 GPU 的桌面不好用。做 AI 基礎設施本來就有 GPU，同一批卡做 inference，也做 GPU 原本的圖形，還有硬體視訊編碼。他們借雲端遊戲那套，延遲和效能可以做到能用。

[10:50](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=650s) Agent 在 IDE 裡起來。他們用 Zed，因為快，而且 fork 過，可以遠端控制、把 prompt 注進去。Zed 支援 ACP，所以接得上主要的 agent harness：Codex 和 Claude Code。他們不打算把那套重做一遍（字幕 that bill）。

[11:32](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=692s) 這是 Tessl 的會，不談 spec-driven development 說不過去，而他本來就是粉絲。人的 prompt 很短，例如給 to-do app 加 dark mode。同一個 agent，先有明確的 planning，後有 implementation。先叫它寫計畫，結果好很多：方向錯了還能改；實作做到一半、根本誤解了什麼，就難轉。Spec 是人的 prompt，加上 planning agent 讀過 code 之後寫出來的東西，比使用者說的細很多。人可以評論，也可以批准。批准後才實作。每個 agent 有自己的桌面，網頁應用就可以自己測。Agent 在 GitHub 開 PR，人同時看 PR 和那台電腦上跑起來的應用。環境是 Docker，或 Kubernetes 上的 Docker，彼此不踩。它們可以各自開 Chrome，用 Chrome MCP 逛，不會互撞。

[14:10](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=850s) 示範裡三、四個任務，大約 30 秒到一分鐘，每個 agent 寫出自己的 spec。刪除 to-do 沒有從 storage 刪掉，短 prompt 被展開成詳細文件。他認為終端機裡的 Claude Code 很不適合審文件、留評論，所以加了 Google Doc 那種介面：對某一行留言，就會改 spec。Spec 都是 git repo 裡的 markdown，放在一條獨立分支，所有 agent 看得到彼此的 spec。程式彼此隔離，歷史卻共用。

[15:39](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=939s) 他加了一條：刪除時做火焰 CSS 動畫，項目像在燒。審完其餘計畫，按 Approve Design。實作被加速播過。他沒有在打字。Agent 打了 buy groceries、walk the dog，然後刪除。火焰不夠好。他說那有點爛，要看起來像在地獄裡燒。按兩次 enter 可以打斷背景裡的 agent。它想一想，做出更好的 CSS，人就在瀏覽器裡一起 QA。

[17:41](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1061s) 開發者不再整天看 IDE，常常一小時只跟每個 agent 互動幾分鐘，中間可以去健身房。所以他們把手機和平板做通。他在 LinkedIn 上的定位是：這是在健身房用 iPad 跑 Zed 的最好方式。有人回「I feel seen」。圖上是很多使用者看同一個 agent。他們加了類似 Figma 的多個滑鼠游標，多個人可以在同一台桌面上 pair，其中一個可能在健身房用 iPhone。

## 自己建自己：快取、token，以及工程以外

[19:29](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1169s) 蛇要咬尾、用這套來做這套時，下一個痛點讓他們停下來：整個 stack 在 Docker 裡從零建要 40 分鐘。Sandbox 生得再快也沒有用，如果 agent 要自己測試、自己 QA，卻得先等 40 分鐘。他們用 ZFS 做 clone。工作假設是多數開發環境在 Docker 裡。Docker in Docker 可以到 16 層，他們大約走 3 層。每個 agent 有自己的 Docker，但 data directory 會先灌好：用最新的 main commit 跑過最新的啟動腳本。一開機就是新鮮、已經快取好的環境。

[21:04](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1264s) 這就是用 Helix 建 Helix。他加了一個任務：審查一份外部貢獻。旁邊還有進行中的，例如為某個用戶做 Notion integration。桌面閒置一小時會自己關，可以再叫起來。他現在做技術工作的一天，多半是在審 spec：找到 agent 寫錯、設計不好、或沒看見另一塊 code 的那兩行，留評論。之後把改動推到接近可合併，就比較機械。PR 會叫 agent 對改動截圖，他也常常只看自己喜不喜歡那個變化。PR 會自動連回用來建造它的 spec。

[22:49](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1369s) 他預告要談 token 成本、privacy 和 Donald Trump。口頭講完的是成本。Token 支出在爆，對 bootstrap 新創很痛。他們有機器跑 open weights，例如 GLM 5.1，他說現在能做掉大約 80% 需要做的工作。一個有規模的組織可以把未來三個月的 token 預算，拿去買硬體，例如八張他稱為 RTX 6000 Pro 的卡（字幕 RTX six K pros），再做一個能在 agent 和 model 之間切換的東西。這樣不會鎖進 OpenAI 和 Anthropic，真的很難的事還可以爆出去用 Claude Opus 4.8。乏味的工作用本地模型，只付電費。

[24:00](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1440s) 最後他對自改進的公司有興趣。最底層是自改進的 codebase：把 issue 放進 Kanban，現在就做得到。再接上產品和支援的 agent，就能依使用者回饋改產品。再加上 sales、marketing、finance、legal，以及創辦人那層：假設是什麼、市場往哪走。全程有人在迴圈裡，但同樣的人可以走得快很多。他也拿這套登 LinkedIn。Agent 會請他做兩階段驗證。LinkedIn 以為他是人，而他某種程度上是：人穿著 agent 這套機械服，做自己沒耐心做的開發。他叫它列出 200 個灣區行要聯絡的人，真的約到一批好的會議。

[25:33](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1533s) 收束：集中優於本地；還是要 IDE；先從按任務擴開始，組織形狀值得研究；spec-driven 是必須；做成手機、多人；把開發環境的啟動弄好；現在不痛的 token 成本很快會痛；並且想到軟體工程以外。

## 安全、桌面怎麼跑、IDE 用來看什麼

[27:01](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1621s) 有人問讓 agent 登 LinkedIn 的安全。他的第一層論點是：這已經比在 Mac mini 上跑 OpenClaw 好（字幕 open floor、open claw）。他看到 OpenClaw 的 1Password extension 時的反應就是這個。只登一個網站，就只有那一個登入，不能再去登別的。也可以按專案決定暴露哪些 MCP server。他認為還需要能鎖權限的工具，Ivan 在這個方向上有東西。他們不一定想自己啃這塊，寧可跟做得好的人合作。愈多人問 agent control plane 的治理，他就愈覺得該在產品裡放一個 governance panel。

[28:43](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1723s) GUI 怎麼跑：他們在 Docker 裡跑 mutter，也就是 GNOME 的 compositor。遊戲社群有一個 C++ 專案叫 Wolf。他們用了很久，他寫 C++ 寫到煩，而且不穩：所有 container 擠在一個 process，一崩潰全部倒下。最後只留下核心，特別是處理 Nvidia CUDA 的 Rust plugin。東西在他們的 GitHub 上。

[30:08](https://www.youtube.com/watch?v=PsEnuv3S5I0&t=1808s) 還需要 IDE 做什麼，而且不必長得像 2020 年的 VS Code。他們嵌的就是 Zed，Rust 寫的，快。一台機器上跑幾百個的時候，記憶體佔用更要緊。他喜歡看 agent 在檔案之間穿梭。看著它做，會在旁邊把 codebase 吸進去；現在的 Claude Code 則是黑盒。事情變難、agent 需要幫忙時，手上已經有一個能搜尋、能環顧的 IDE。他的結論是裡面要有 IDE，外面還要有 meta IDE：所有 agent 的 control plane，和比較高的那一層視圖。
