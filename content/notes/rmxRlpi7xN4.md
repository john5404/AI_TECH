# Robert Overweg - One Brain, No Filtering - AI Native DevCon June 2026

Robert Overweg 在 AI Native DevCon 2026 年 6 月、當天這個廳的最後一場。片長 31 分 24 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 evals 聽成 evils、把 wikis 聽成 Vickie's 和 Vikings、把 cron 聽成 grand job、把 24/7 聽成 20 for seven。OpenClaw 有一處寫成 open clause、一處寫成 Open Claw，下文用 OpenClaw。他是小團隊，不是大型企業；公司名字幕沒有說。

- 原片：[YouTube](https://www.youtube.com/watch?v=rmxRlpi7xN4)

## 一句話

他們做時尚品牌的大量影像，人少、產出巨大，不能把時間花在找資料夾。One brain 是把公司知識和製作線上的知識接進同一個可以問的地方：會議、研究、客戶給的檔案、code base。不再搜檔案，改搜想法和 context。搞起來很亂，加新東西會變成全職工作。所以先讓一個人受苦，不要一次鋪給所有人，而且知識要留在自己的 stack 上。

## 人少、量很大，所以不能靠記憶

[0:14](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=14s) 主持人來自 Tessl。他們一直在做從 linear issue 到 merged PR 的 orchestration。做得越多，越覺得前面才是難的：decision making 和 scoping，後面相形之下變得 trivial。

[0:57](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=57s) Robert 知道自己擋在派對和啤酒前面。他們仍是 startup，實驗比較容易。起點是挫折：檔案在哪、簡報在哪、得去追人。他早上五點或深夜要很快做一個 prototype 時，需要知道那是 500 個 SKU 還是 5000 個。沒人講清楚，他就很難把東西架起來。若接得上組織裡的知識，包括會議和對話，就能把那些東西導進手上的工作。

[3:13](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=193s) 他們主要做時尚大品牌的大量影像。畫面上是他們做的一位數位人物，正在被用到 Tommy Hilfiger、Calvin Klein，以及字幕裡的 GE star。影像和影片用 AI 做，而且是規模化的。這不是唯一模組，還有五、六個。內容量太大，不能忙著找資料夾，得以 AI native 的方式工作才應付得了。他認為這種壓力對創新有幫助：必須持續學，也必須在對的時間把對的資訊浮出來。

[4:35](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=275s) 兩種資訊。公司知識：領域裡的新東西，例如 Codex、字幕裡的 goal、新的 skills、他們做的 research wikis，以及把會議知識變得安全、可取用。製作線上則是把 evals 變嚴、把 skills 優化。

## 從 sandbox 開始，回報是手機上的公司知識

[5:07](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=307s) 起點很簡單，他建議別人也這樣。OpenClaw 放在 sandbox。GitHub 放研究這類資料。Obsidian 在自己機器上瀏覽。他覺得 Obsidian 比 Notion 好，Notion 載入慢、難用；Obsidian 快。Telegram 是他可以 24 小時說話的表面：早上醒來問 agent，或走在路上對手機講，用來找資訊或丟資訊。他說這有一點像 psychopath。後面的圖會更複雜，但適合從這裡自己往上蓋。

[6:36](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=396s) 回報是手機上有大部分公司知識。一個例子：他忘了 CI/CD pipeline 要做的那件 Microsoft 的東西，只記得大約四個步驟。問 agent，答得準，而且因為懂他的 context，還問這是不是為了這場演講。他叫這是 sparring buddy。搜尋對象從檔案變成想法和 context。

[7:41](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=461s) 一個 agent 主動幫他搜，一個 agent 解讀他自己找到的東西。OpenClaw 上的 cron 追蹤 X 上某些帳號和某些詞，例如 agentic engineering，也追和他那些 pipeline 有關的詞。有些帳號他覺得 niche，其中一人也許 12 萬追蹤。他不看報紙，但每天早上會收到一份圍繞 agents 和 AI 的報紙。這些不能全進 vault。他先把真正重要的 promote 進去，過一陣子確認重要，再做成 wiki 給整個團隊。他不想用自己的研究去煩所有人，東西得在現實裡站得住。

[9:39](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=579s) 他找到 Google 的 Addy Osmani 一個較大 skill pack 裡、用來拆大任務的 skill，字幕寫成 Adios Marni、Adios money。他問 agent 對他們有沒有用。Agent 知道他們有哪些 skills、code base 怎麼擺、他們想做什麼。他得推一把：我們不是已經有那位合作開發者做的、字幕裡的 surgery starts breakdown？Agent 再看一次，結論是那個 skill 沒有他們還沒有的東西，他們的 task files 更細。畫面時間從八點過五分到過六分，大約一分鐘就有結論，所以不放進 vault。

[10:50](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=650s) Vault 左邊是大量研究，幾乎沒結構，將近 1200 個檔。這套布置應付得了，不必再加東西。他們試過額外的索引，字幕寫成 rack and factors，他說其實不需要。檔案裡有 to-dos、相關筆記，有時他自己把兩個檔連起來，當成共同的 memory hub。他問聊天 agent「Opec+ search 又怎麼運作」，agent 先請他澄清，再給出做法。他說這樣也能跟上自己發明的東西。每日更新裡有安全狀態，也有別人開過會、transcript 已經可以看的通知。

[12:41](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=761s) 另一個 vault 是客戶資料。客戶用法很散：有人用 Miro 畫，有人用 PowerPoint，有人用字幕裡的 inodes，有人用 Figma。很難叫人改工作方式，所以他們改為把對方給的東西解讀進自己的系統。整個系統用自然語言。可以問 Calvin Klein 從某兩個人交來的最後一批檔案在哪。跑 production 時，「資產在哪」不再是問題。

## 能數位化的才算存在，但不是全都攤開

[13:43](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=823s) 他引用 Jack Dorsey，Twitter 和 Block, Inc. 的創辦人：AI 的出現第一次挑戰了「階層是必要的」這個前提。企業裡的中階是拿來溝通的，也有很多問題。若資訊可以即時被建模、理解、分發，組織仍需要以人為中心的協調。Agents 大多夠聰明、能持續解讀，雖然有時解錯。所以他們想把盡可能多的東西交給 AI：每段對話、會議、研究，以及 code base。

[14:51](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=891s) 靈感來自他大約十到十五年前讀到的 Ray Dalio。他先想不起名字，然後說到 Bridgewater：當時已經把每場會議錄下來。他那時覺得怪，也許是自己處在低信任的環境。現在他覺得沒被數位化的東西等於不存在，不做就已經落後。他們訂了 Omi，開源，錄下說的話，等了三週還沒到。外面喝咖啡時放在桌上，錄完送到自己的伺服器，沒有訂閱，資料自己擁有。Granola 把會議轉寫得比較像樣，還可以同時打自己的筆記，完整 transcript 會圍著那些筆記整理。他看得到共同創辦人的會議筆記，也能用 MCP 或 API 接上。有了筆記，可以用字幕裡的 cloud design 或 open design，半自動生出要寄給對方的簡報初稿。人若更遠端、更數位，把東西都錄下來更有益，距離遠的時候反而更有用。

[17:13](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1033s) 有個還沒做的想法。他是共同創辦人，人在 production，也在做 sales 和 positioning，有時會忘了該問的銷售問題。那些問題他們其實知道。若 chief of staff 能在那通客戶電話裡把該問的浮出來，就是在一起想。他不想把知識只放在 cloud 或別人的 context window 裡，想盡量留在自己的 stack 和伺服器上，才能查。

[18:07](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1087s) Keeping it real：做這些很亂。載入有衝突。Obsidian 上更新，會和 GitHub repo 發生 merge conflict。知識分享本身就難：你真的要把所有會議分給所有人嗎？萬一說了不該漏出去的話。他們用一些設置把這件事變小，在人、團隊、客戶之間畫了邊界，知識在 stack 裡移動。AI 可以同時很聰明又很笨，會看不見你以為已經講過十次的明顯事情，也會不懂很基本的東西。Scripts 壞、jobs 不跑。架好之後它能動；一開始加新東西，就變成全職工作。

## 搜尋怎麼分層，以及先讓一個人受苦

[19:48](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1188s) 他的私人 vault 放研究，接到 GitHub。他加了 G-Brain，來自 Gary Tan，他說他想是 Y Combinator 的 CEO。透過那個又加了一個字幕裡的 big factor，也用 ZeroEntropy：vector、keywords、頁與頁的 graph relations。以他現在的檔案量，他覺得還不太需要；量大了之後會更有用。Chief of staff 在另一個 instance，避免互相滲漏。他用 Telegram 溝通，用 Obsidian，還在看 Neo4j，想再加一層過濾。

[21:19](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1279s) OpenClaw 的搜尋他拆成幾層。Memory search 是對 memory 和 topic files 的 semantic search，還有 services、preferences、decisions、pulse context。Vault context 依類型載入相關切片；coding 那類會載入 Ava，那是他們的 enterprise、self-serve stack。比較大的搜尋才用 G-Brain，另外也可以直接讀檔。當天的例子是演講問題直接打到 DevCon 的投影片。有些東西他放在 Haiku 上，因為這套一直開著很貴，尤其給多個人跑。

[22:11](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1331s) 建議是從小開始。先讓一個人受苦，不要鋪給所有人。可以先跑在自己的筆電上，把安全加固做好，並對齊你到底被允許拿這些資料做什麼。設一個 chief of staff agent。人常說沒時間，因為一直在開會、一直在找東西。若有個 agent 能削掉那些討厭工作的 20%，時間會回來，才能去做優化。Research agent 則是透過你策展過的鏡頭，持續把世界上的資訊帶進來。然後再決定什麼要 promote 給更大的一群人。他叫這幾乎是 hive mind。

## 問題：規模、時間、團隊，以及 dark factory

[23:47](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1427s) 主持人覺得一年內這會變成 tech 裡的 table stakes。有人問客戶檔案變多之後怎麼擴，G-Brain 夠不夠，還是要走到 Neo4j，字幕寫成 near 4G。放公司檔案的那個 brain 仍完全在一個人的筆電上，因為他們還沒決定怎麼暴露出去。他沒有答案。本地已經能把需要的東西浮出來，但權限、以及資料繼續分桶隔離，都還要看。不同資料類型會是真正的麻煩。

[25:09](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1509s) 架起來並讓它自己跑、再維護，花多少時間。他第一個念頭是多到離譜，但這也像嗜好，會上癮，他本來就會一直讀新東西，所以不太像工作。也許一個月把這些架好。OpenClaw 配上對的 containers、Docker、權限，本身就會出問題。架好之後它是一支 script，可以是 30 分鐘，也可以是 30 秒。主持人抓住了那句 30 秒。他也說，有人受苦架完之後，更新會衝突，新版本來的那天，他有一半東西壞了。

[26:22](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1582s) 團隊怎麼用，以及客戶那些質性資料是讓 AI 自己依語意理解，還是他們有結構地刻畫。互動上，你看到的大約 80% 先留在領導團隊，再把 wiki promote 給更廣的人。那一批少很多，也許 10 到 15 個，但內容很密，例如怎麼把某個字幕寫成 generic 的東西用得更好、怎麼減少 bugs。客戶資料現在他估計超過 50 萬個 data points，記的是 art directors 喜歡什麼，很主觀，他們就是解讀，而且有一套系統把這餵回 production。細節字幕沒有再拆。

[27:59](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1679s) 為什麼選 OpenClaw。他覺得適合，是因為將近 1500 個相當大的 markdown 檔，不必靠 G-Brain 來索引也能工作。他沒有做過整個產業的掃描，它釋出後不久就開始用。他喜歡它會主動。同一個 orchestrator 上可以照需要再疊 agents。被 promote 的 wiki 放在另一個 database，別的 agents 可以跟它說話；他不想把那塊放在自己的 OpenClaw 上。

[29:21](https://www.youtube.com/watch?v=rmxRlpi7xN4&t=1761s) 有人問 Hermes，以及有沒有拿它一起寫 code。Hermes 比 OpenClaw 晚出。他想過再設一個 agent，專門排那些一直壞的東西，也許用 Hermes，但沒有心力。既然這套大致能動，就沒有理由去看。寫 code 的部分他們在做一條完整的 dark factory pipeline。OpenClaw 當 orchestrator，觸發對的 skills，讓別的 adversarial agents 做 review，也接到 Codex，大量工作由 Codex 做。Orchestration 和 agent harnessing 是他們自己的。他不願叫這是戰鬥，但說這是持續的實驗。
