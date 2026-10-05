# Brian Douglas - The beginners guide to training AI on your own code - AI Native DevCon June 2026

Brian Douglas，網路上是 bdougie，在 GitHub 待了大約五年，現在的公司叫 Paper Compute。這場約 32 分鐘，英文手寫字幕，場合是 AI Native DevCon，他說人在倫敦。字幕把 sweeper 和 super agent 混在一起，把 PyBoy 聽成 PyGameBoy，把 Ollama 聽成 Omaha，把 Tessl 聽成 Tesla，把 H100 聽成 H1 hundreds。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=o-IunU6b1t8)

## 一句話

每次 agent 互動都可能是訓練材料，但多數人用完五小時的 token 窗口就丟掉。他用寶可夢紅把這件事做成可重複的迴圈：錄下 session、寫成觀察、抓異常，再變成 skill。更進一步是把 skill 嵌進小模型。DPO 他試過，貴，而且在小模型上不值得。離開會場前他只要大家先把 session 留下來。

## 寶可夢是用來驗證錄下 session 之後能不能學

[0:22](https://www.youtube.com/watch?v=o-IunU6b1t8&t=22s) 他說沒有東西要賣，談的是過去幾個月開源的東西。攤位在樓上 expo hall，觀眾拿到的是最早的版本。這不是工作坊，沒有 step one、step two。旅程他寫過一篇有步驟的部落格，晚一點再給。他說這套用法也曾讓他的 Claude 帳號被封，自行斟酌。

[1:48](https://www.youtube.com/watch?v=o-IunU6b1t8&t=108s) 案例是 Game Boy 上的 Pokémon Red。他讀了一篇論文，想用開源的東西在很大的規模上驗證。目標是每次 session 速通一千個 turn，每次 session 是一個 epic。卡住就把資料留下來學習。Paper Compute 開源了兩樣。tapes.dev 把 agent token 收成 tape session，再變成 skill。攤位上講了很多這個。另一樣是 Stereo，會場上較少談。它是 agent 的 runtime，像 sandbox，但是電池裝好的。多數人還是在自己的 MacBook 上跑 agent；真的很熟，才用 cloud 或 sandbox。他覺得這條曲線還早。

[3:37](https://www.youtube.com/watch?v=o-IunU6b1t8&t=217s) 遊戲從家裡醒來，去 Professor Oak 的實驗室拿第一隻寶可夢。PyBoy 是 Python 的 Game Boy 函式庫，可以無頭跑 ROM，不必盯著看，交給 agent。Claude Code 或 Codex 來跑它。他說 Claude Code 雖然名字裡有 code，其實是相當通用的 harness。他要 agent 跑 1000 個 turn，錄下 session，找出學習的模式。過不了橋就記下來。每十個 turn 截一張圖，卡住時可以回看。目標只是進實驗室、選寶可夢，沒有戰鬥。他跑了好幾個小時，幾乎沒進展。後來發現忘了叫 agent 跟遊戲裡的人說話。第一個線索是跟媽媽說話，她會告訴你去哪。規則是不能上網查怎麼玩，只能在他給的環境裡自己學。Agent 沒有在學，只是有禮貌地幻覺進度，跑完一千 turn 就慶祝。時間是二月。字幕後面接的模型版本那句不完整。

[6:04](https://www.youtube.com/watch?v=o-IunU6b1t8&t=364s) 他把 context 倒回給 agent。樓上有人每週坐下來摘要 session，他覺得那樣很強，但他自己不這麼做，而是全部倒進 tape 資料庫。一開始用 SQLite，後來改 Postgres，因為 SQLite 一次只能一個人寫。這套是十個寶可夢 agent 同時跑，各一千 turn，一直在學。Tapes 存 agent 的原始 log。另外有一個 memory 資料夾，概念來自一篇 observational memory 的部落格，出處字幕不清楚。一千個 session 寫成一則觀察，像一天結束寫日記。觀察由 agent 寫，人讀得懂。例如：沒跟任何 NPC 說話，對世界沒有意識，這要放進 loop。還有一份 observer state 的 JSON，很特定於寶可夢：上下左右。過門有七秒冷卻，不能在洞穴裡來回走動刷等。這是他看文件、用蘇格拉底式問答把 agent 問出那個 loop 之後學到的。你的 codebase 裡對應的東西會不一樣。

[8:26](https://www.youtube.com/watch?v=o-IunU6b1t8&t=506s) 這套是活的，走 Pokemon Kafka。十個 agent 同時經 Kafka 錄下來，並做異常偵測。異常包括不願意過門。打到戰鬥之後，HP 低於某個程度就該吃樹果或換寶可夢，這些細節都得讓 agent 自己學。他最後做出一個 self-healing 的基礎設施 loop，能走到遊戲開頭那幾秒：狂按 A。A 是角色的名字，也是寶可夢的名字，然後速通去拿 Professor Oak 的寶可夢。Observer 還學到：選寶可夢時先不要按 A，因為他會問 yes 或 no，要用 B 離開。他說 codebase 也是這樣。有人 ship 了 15 或 20 年，也許只有五年，裡頭的細節是邊做邊學的。現在卻是每五小時換一次 session，cloud session 刷新、token window 變多，就往下一個走，從不學習過去五小時。

## 你在租 token，session 三十天後就沒了

[10:01](https://www.youtube.com/watch?v=o-IunU6b1t8&t=601s) 暴力搜尋 codebase 仍然有用：search、grep、找出該懂的檔案。他喜歡寫 codebase 的部落格，不是要自己寫那些 code，而是要知道它怎麼運作，才能跟工程師討論。寶可夢這套是一個便宜的模擬器，用來試論文裡冒出來的做法。開源，可以拿走，或換一款遊戲。會場上的人都在用 AI。Claude Code 會存 session。Codex 的 session 在機器上留 30 天，之後刪掉。字幕把路徑聽成 routine。那些 session 在他機器上，因為 harness 是 Claude Code，但價值在流失：付了錢，只是在租 token，沒有留下產出。他說價格是 200 美元，猜換成 180 英鎊，不確定換算對不對。

[11:33](https://www.youtube.com/watch?v=o-IunU6b1t8&t=693s) 寶可夢後來變成他叫的 super agent。他覺得大聲說這個名字很好笑，實際上是 sweeper：掃過 codebase。去年夏天他用 vibe coding ship 了一批 code，之後沒再碰，很多是垃圾。如果拿去 lint、大量修，或開十個平行 agent 寫文件、做出工程師能看懂的 context。Sweeper 用前面說的 Stereo，一台一台分開的 VM，每台都在錄 tape session。十份 tape 可以產生 skill、文件、context，之後才談到 fine tune。資料量很大。企業若在付錢，就該把價值抽出來。有些公司跟 Anthropic 有協議，資料拿去訓練、換很大的折扣。他把資料給 Anthropic 可以打折，但那很貴。他說 Cursor 目前有一筆至少 100 億美元的交易，對象字幕聽成 space，沒有講清楚。他過去幾年跟很多 AI 公司工作，人家在賣你的資料。所以資料該留在自己這裡，並拿去做點事。Sweeper 也開源，寶可夢和 super agent 都有部落格。

[13:14](https://www.youtube.com/watch?v=o-IunU6b1t8&t=794s) Agent 不一定要最大的模型。兩天前出了 Opus 4.8，他說似乎比 4.7 好，但過去表現不能保證以後。Sweeper 用 Haiku，十個 agent 的規模，因為工作很窄，像上下左右。可以更便宜，也許更慢。若是背景 agent 週末或過夜跑，沒有人會發現。Paper Compute 在抓 trace。他用課本角落的火柴人翻頁比喻：不管 code 是人寫的還是 agent 寫的，做出來的東西該留下來、傳出去。他做完寶可夢的同一週，auto research 的 repo 出現了。Karpathy 有一個關於 auto research 的 repo。Qwen3 把 auto research 做進開源模型。Self-healing 的基礎設施，今天在阿里巴巴的一個中國模型裡已經有。他說這些，是因為 Claude 後來把他解開了。帳號是因為同時跑十個 super agent 被擋。他寫了部落格、寄信道歉，說自己跑的是 sweeper，字幕聽成 sleeper。一個舊 repo，不到一小時修好他躲了好幾年的 lint。專案大約 100 個使用者。這是六個月前的產品，六個月後被拉到現在的標準。部落格出去大約 12 小時，帳號解開。回信的是機器人。

[15:28](https://www.youtube.com/watch?v=o-IunU6b1t8&t=928s) Tapes 收集 trace，也做異常偵測。十次 tool 失敗，要問發生了什麼。成功也可以是異常：十個 session 裡冒出 26 個 skill，大概有好事。很多人連要拿去 fine tune 的有價值片段都沒在看，只是丟一句 prompt：不要出錯、code 要乾淨，然後走。就算這麼簡單的 prompt 也有得學。所以 trace 要留。Token 的算法是五小時一個窗口，還有每週配額。儘管在付錢，配額用完可以再買、可以開 Claude Code 的 fast。他說價值就在看這些資料。

## Session 是一條 Merkle DAG，skill 從裡面長出來

[16:55](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1015s) Tape 怎麼從 session 生出 skill，是共同創辦人設計的，字幕把名字聽成 back。結構是 Merkle DAG。Git 的每個 commit 坐在 DAG 裡，每個 commit 有 hash，還有分支。Session 由 turn 組成。寶可夢是一個 session 一千個 turn，你跟 Claude 或 Codex 說話也一樣。Claude 會把 session 拆得很怪，以後他們會想辦法讓這件事看得懂。你打字給 Claude，那就是一個 session。Clear 是新的 session。關掉再打開也是新的。一旦這次說的話都進了 trace，就可以做一個叫 check the tapes 的 skill。機器上的資料會留 30 天，他可以回到六個月前，問：寶可夢那個過門冷卻是哪些 session 解的，怎麼變成一個故事。他不太用 git blame，因為六個月前做過一堆看起來像 git blame、但做得更好的工具。其中一個叫 On Top of Landscape 的 Git Blame，有部落格，他覺得不夠好，不再用。

[18:48](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1128s) 最近他用 prompt 做出他們 cloud 產品的整套 wireframe。合約設計師來了，問能不能把 prompt 給她。他不存 prompt。有 tapes，就可以依 wireframe 為每個功能開 GitHub issue，裡面有 prompt、intent、token 用量，以及設計師需要的那些品質資訊。他自己的 wireframe 很粗。Check the tapes 可以再往資料庫裡看。當時用 SQLite 的 tapes 時，他們有在標資料，例如這是表單、這是設計。他說現在沒有在標。

[19:53](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1193s) 樓上問得多的是 tapes deck。開源，不用註冊，建在命令列上，用來觀察 tape session。名字來自磁帶，他說那是最耐久的媒介。點進 session 可以看到 input、output、token、prompt，全是原始資料。有人問 prompt 裡若有敏感資訊怎麼辦。他反問那你為什麼把敏感資訊放進 prompt。資料在你的機器上，怎麼對待、怎麼清，是開放討論，而且是開源。目前很原始。字幕有一句像是叫人把 secret 放進 code，語意不完整，不要當成他的建議。畫面上的齒輪是 tool call，每支鉛筆是一次 skill 呼叫。Tape stack 寫在 tapes.dev 的文件裡。這個 skill 功能他們只有一篇部落格，這場才開始公開講。資料庫也是向量資料庫，字幕聽成 vector eyes。可以用自然語言 tape search，把相關 session 找出來，再叫它做成 skill。

[21:33](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1293s) 他很小氣，主力用一個大約一年前、很便宜的 model，字幕沒把名字聽清楚。第一版 skill 可以做得還行。他建議人眼讀過、清過，再決定要不要用。Skill 上線、被呼叫之後，再用 tape session 看它多常被叫、有沒有用。再往下也許用 Tessl 做一張 scorecard，看 skill 到底有沒有用。他想跟 Tessl 的人談這個。

## 小模型可以把 skill 寫進書頁邊，DPO 先別做

[22:18](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1338s) 他以前在 Continue，訓練過一個叫 next edit 的模型，那時 tab completion 還很酷，用的是 specialized fine tuning。他說 Cursor Composer 2 也是拿你的資料這樣調的。Cursor Pro 的使用者，資料正在被賣掉，對象同樣被字幕聽成 space。做法他寫在部落格，細節比這場多。他有 77000 個 tape session，一月開始錄，寫過的東西都進一個資料庫。大約 4 GB，一週大約 1 GB。放到一年，可能接近 50 到 100 GB，躺在機器上沒人看。也許有幾個人星期五會跟它聊天。他用披頭四做比喻：他們故意用更少的音軌，把人找進房間現場演奏。少可以做更多。但他現在是多。

[24:07](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1447s) 兩條路，他不講深，叫大家之後去讀論文。Specialized fine tuning 是 Cursor 拿來做 Composer 的做法。DPO，direct preference optimization，更特定。工具是 QLoRA，大家大概用 PyTorch 或 Unsloth，在自己的資料上調。他把 model 比成一本書，所以同一個聊天可以搜寶可夢，也可以搜餐廳。Specialized fine tuning 像把 skill 寫在書頁的空白。他拿 Qwen 4B，把 skill 嵌進這個小模型，結果其實很好。時間不多，資料也不多，是他自己的 skill，加上另外三個隊友的。為什麼要嵌進模型，而不是在 harness 裡呼叫 skill。他的答案是 why not，只是想試。在 MacBook 或 Linux 上的小模型，效果還可以。用途像寶可夢、對一個陌生專案做 onboarding、或硬啃一份文件。這是很窄的小模型問題，不是每日驅動。它不會取代 Claude Code，也不會給你 Sonnet 等級的互動。若是機械、怪語言、記憶體管理這類很特定的情況，這是一條路。他跟幾家企業談過，他們就是這樣做。

[26:42](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1602s) DPO 是從偏好來的強化學習。兩個選項，永遠挑最好的那個。很貴。他不建議做，除非你是研究者、在 Meta 工作，而且問題貴到值得。Specialized fine tuning 他在一台 4070 的遊戲機上跑得很順。DPO 跑不起來。他說需要 32 GB 的 VRAM，自己有 24，所以換了一張 32 GB 的 5090。結果只是普通。一位在 NVIDIA 的朋友，他不說名字，給了他一些 H100。他用 Cliff notes 比喻 DPO：不上那本大學教科書，拿簡本去考試。不推薦。DPO 在 40 億參數上不好，不值得。大概一週要燒 1000 美元的算力，換一個不能用的東西。70 億參數可以試，但一樣很貴。他做這段是為了把談話收圓。下一步是去找真的會做研究的人。對他這是支線任務。他用 Matthew McConaughey 早期電影裡那句 all right 收 DPO：它做的事就是每次都選對的那個。

[29:12](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1752s) 第一步是把 session 抓下來。今天離開就去看 Claude 的 session。想把資料拉出機器，tapes.dev 是開源的。下一步其實差不多：多人一起寫 code。他說的 multiplayer 是每個人仍在自己機器上單機。就算有第二台機器，資料大概也沒有傳來傳去。把知識傳出去，看起來最好的形式是 skill。然後你才有模型的自由。這週 Codex 比較好，就把 skill 轉到 Codex、Pi coder，或其他東西。他知道 Anthropic 未來幾個月要 IPO，SEC 文件已宣布，他要在飛機上讀。他學的是金融，審 SEC 文件是嗜好。再來是模型選擇：不必每次都用最大的，可以用 Haiku，或某個中國模型。最後另一隻鞋會掉下來，得開始想成本。Trace 資料，用學到的東西加強它。人在 expo hall。

[30:48](https://www.youtube.com/watch?v=o-IunU6b1t8&t=1848s) 只剩一分鐘。有人問它能不能用於 Codex，字幕把問題聽得很碎。他說今天不行。曾經可以，但變得很快。目前適用 Claude Code、Conductor 和 Ollama。若有人說需要 Codex，他們很樂意做。這是唯一的限制。他整天都在攤位。接著是咖啡時間。
