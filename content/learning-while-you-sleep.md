# Learning while you sleep：從 memory 到 Dreaming

Lamis Mukta（Anthropic Applied AI）在 AI Native DevCon 2026 年 6 月的演講。原片約 32 分鐘，英文手寫字幕 566 句。這份筆記先讀懂繁體中文字幕，再對照英文原稿，依論點重寫。專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=tTcxVv8HHNw)
- 講者：Lamis Mukta，Anthropic 技術人員，Applied AI 團隊。團隊位在研究、產品與上市之間，她主要跟新創與創辦人共事。這些使用者一直把模型和產品往能力邊界上推。
- 字幕：英文手寫軌（en-US）。以免金鑰翻譯成繁體，再用 OpenCC 把殘留簡體轉正。

> 機器翻譯把這場演講的關鍵詞譯歪了。Dreaming 被譯成「夢想」，agent 被譯成「經紀人」或「特工」，harness 被譯成「安全帶」，in-band 被譯成「樂團」，後段的 session 常常被譯成「會議」，memory 被譯成「記憶體」。下文這些詞保持英文。逐句字幕仍留在 `data/videos/tTcxVv8HHNw/`。

## 一句話

模型一年比一年聰明，但放進組織之後，intelligence 不會自己複利。缺的是 context。Anthropic 這一年把 context engineering 從一份 `CLAUDE.md`，走到 agent 自己寫的 memory，再走到一個叫 Dreaming 的 out-of-band 程序：趁 agent 沒在做任務的時候，回頭看一批 transcript，提議怎麼改 memory。人決定接受或拒絕。

## 這場演講要回答的四件事

講者在 [1:44](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=104s) 先列了行程。

1. 過去一年，context engineering 裡哪些 primitive 真的有用，哪些已經不夠。
2. 今天 memory 系統的現況。
3. 理論上好看的設計，放進 production 還要補什麼。
4. 持續學習的下一步：Dreaming。

## 為什麼 intelligence 不會自己複利

從 [1:20](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=80s) 起。新模型不會一開箱就知道「在你的組織裡，成功長什麼樣子」。那批知識跟模型 intelligence 是正交的：codebase 的慣例、使用者偏好、任務怎麼算做完。

沒有這層 context，會出現兩種熟悉的失敗。

- agent 不認識 codebase，也不夠認識使用者。
- 同一件事做第二次並不會更好。它沒有從錯誤裡留下可再用的東西，所以沒有持續學習。

context engineering 的投資會跟著模型變聰明而放大。模型越強，同一份整理好的 context 越值錢。

## 這一年的四個 primitives

Anthropic 的原則是做簡單有效的事。時間軸從 Claude Code 推出 `CLAUDE.md` 開始。

### 1. CLAUDE.md：session 一開頭就注入的 Markdown

[3:57](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=237s)。一份人跟 agent 都能讀寫的 Markdown，放 codebase 說明、組織慣例、使用者偏好，在 session 開始時注入 context window 的最前面。效果好得不太合理：它把 agent 導向重要的事，並依偏好調整行為。

不夠的地方也很快出現。檔案一長，一開頭就全部塞進 context，window 被占滿。重要偏好越多，越需要另一種管理方式。檔案本身仍然值得留著，因為人類可讀，agent 可寫，人也可以寫。

### 2. Memory tools：讓 agent 自己決定何時讀寫

[5:02](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=302s)。下一步是把 memory 的讀、寫、更新交給 agent 自己決定。這一切發生在 in-band：就在這一輪 session 的 context 裡。字幕把 in-band 譯成「樂團」，指的是這件事。agent 一邊做任務，一邊判斷這段值不值得從 memory 讀出來，或值不值得寫進去。自主性在這裡很有效。後來他們把工具的形狀放鬆，不再規定死一套專用 memory API。

### 3. Skills：progressive disclosure

[5:50](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=350s)。要解決的是環境一直變大。Skills 把你已經有意見的程序性流程寫下來。agent 先只看檔案開頭那幾句，需要時才把正文載進 context。細節可以很深，卻不會每次都占滿 window。

講者的比喻是書房。每次有人說話，先掃過書背，標題相關才把那本書抽出來。有人突然用法語說話，就抽出法文字典，不必把七年法語課全部預載進 context。

瓶頸是：Skills 仍然是人跟 agent 一起決定「什麼值得做成一個 skill」。人還是很有意見。

### 4. 把 memory 建成 filesystem

[7:32](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=452s)。講者認為這是當時 memory store 的現況，也是他們採用的做法。前面幾步學到的東西收成三條。

- memory 用 Markdown 放進 filesystem。agent 本來就會用 `bash`、`grep` 這類普通工具，不必再發明一套專用的讀寫 memory 工具。
- 搜尋本身就是 progressive disclosure。索引做好，agent 可以先找到相關的檔，再決定讀多深。
- 寫入時把自主權留給 agent。

個人任務上，這樣就會有一直在學的感覺：同一個 agent 下次做同一類事會更好。

## 一進 production，這套想法會撞牆

[8:56](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=536s)。多個 agent 同時協作、跑很久、codebase 變複雜之後，同樣的問題反覆出現。

1. **同時寫入。** 好幾個 agent 要改同一個 memory 檔，怎麼收斂。
2. **一個 agent 改了所有人正在讀的東西。** 它遇到問題，就把結論寫進組織層級的 context。那裡如果寫錯，錯誤會放大到整支 agent fleet。
3. **人跟 agent 一起改 memory。** 要能追是誰、在哪一次 session、根據哪一份 transcript 做的更新。
4. **memory 會過期，也會被寫壞。** 昨天相關的今天不一定相關。寫錯，或有人用 prompt injection 讓 agent 把壞內容寫進 memory，都要擋。

所以自主的 memory 要在 production 運作，必須有 guardrails。

## Production 的四條原則

### Versioning

[10:42](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=642s)。每次更新都留 version，才能在新版本不好時 rollback。還要記下這次更新根據的是哪一個 agent session、哪一份 transcript，以及是哪個 agent 或哪個人做的。

### Concurrency：寫入前後比對 hash

[11:17](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=677s)。上千個 agent 共用同一套 memory 時，他們用的是 optimistic concurrency。

1. agent 決定要改某一則 memory 時，先取一次 hash。
2. 起草修改。
3. 真正寫入前再取一次 hash。
4. 兩次不一致，表示中間已經有別人寫過，這次不能寫。
5. agent 重新讀取 memory（講者說 ripple the memory），依新內容再起草，然後重試 commit。

### Permissions：組織知識唯讀，scratchpad 可寫

[12:11](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=731s)。memory store 從上到下不是同一種東西。

- 上層是組織範圍的知識：組織要達成什麼、codebase 的關鍵原則。這層是仔細策展過的，通常應該唯讀。不能讓單一 agent 自己決定改寫。
- 下層是這個 agent 自己的 scratchpad，記 working memory，高度個人，應該有寫入權。
- 中間可以是某個組織或某個切面共享的內容。

### Portability

[13:08](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=788s)。這份策展會越來越值錢，所以不該鎖在單一產品裡。要用乾淨的 API，讓多個產品表面、多個系統都能讀到同一套 memory。

## Guardrails 就位之後看到的效果

[14:10](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=850s)。

- **準確度。** 同一件事做第二次，因為記住了上次問題在哪，結果更好。
- **速度與成本。** agent 更常 one-shot，token 花得更少，latency 跟著下降。
- **人的注意力。** agent 自己在背景做這圈自學之後，做產品的人可以把 context 的預算拿去換產品上的勝負。前提是基礎設施先建好。講者說這段關係是共生的。

## In-band memory 的天花板

[15:23](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=923s)。in-band 是指讀寫 memory 都發生在這一次 session 裡。以 Claude Code 為例，新 session 的注意力在當下任務；從 memory 讀、往 memory 寫，都還是這一個 context window 裡的事。對一整支 fleet 的持續學習來說，這有結構上的限制。

**資源互相搶。** 你要它把眼前的任務做完，又要它投資 memory，好讓以後的自己更強。該分多少能力給未來、多少給現在，是一個很難的最佳化，而且會拉高這一次的 latency。

**看得見的範圍只有這一次 session。** 跨 session 的重複錯誤，它感受不到，因為每一扇 window 都是新的 context。fleet 裡其他 agent 在別的環境撞上的失敗，這一個 agent 也看不到。

**memory 會陳舊。** [18:00](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1080s) 講者補上第三點：需要有人回頭檢查寫進去的東西現在還對不對。

## Dreaming：out-of-band 的第二層程序

[18:12](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1092s)。Dreaming 不是把 memory 再做一次，而是 memory 之上的第二階程序。它 batch、非同步、有自己的資源預算，專門讓 memory 保持有效，並幫助 agent 跨時間學習。

三層疊在一起。

1. **任務 context。** agent 當下真正參考的內容。
2. **in-band memory。** agent 在 session 中自己讀寫的那層。
3. **Dreaming。** out-of-band 整理前面留下的結果。

### 為什麼要有老師

[17:17](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1037s) 的學校比喻：很多學生交很多作業，科任老師各自看自己的科目，班主任看得到全體。專門幫人學習的人有效；看得到整隊學習者、能發現模式、再回頭改課程的人也有效。他們做系統時沿用這個結構。

### 程序實際怎麼跑

[18:52](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1132s)。

輸入有兩包。

- 現有的 memory store，也就是一組 memory。
- 一段時間內的 session transcript。紀錄不只是 agent、系統、使用者之間的對話，也包括 tool call、用過的 Skills，以及其他對表現關鍵的 metadata。

然後分五步。

1. orchestrator 派出一隊 subject 去分析這些 transcript。
2. 你可以 steer 它們：在你的組織裡，什麼算重要、什麼不算。memory 跟 Dreaming 都可以依組織來策展，不是一套通用口味。
3. orchestrator 看 subject 的回報，判斷哪些模式夠普遍，值得改 memory。
4. 它對 memory store 提出一條一條的變更。每條附上模式出現在哪些 transcript、有多普遍、為什麼值得改。
5. 人決定 accept 或 reject。

### 三個具體例子

**地理課缺了一整章。** 班主任看完 transcript，發現每個地理學生都把同一題寫得很糟。對照 memory store（這裡比喻成課程），那個主題根本沒放進去。於是提議補進課程。隔天 agent 再跑，就有了先前缺少的資訊。

**數學考卷全用弧度。** 題目要的是度數，全班都輸出 radians。對應到 agent，就是工具設定一直錯：tool call 裡同一種失敗反覆出現。修法像是補一條「計算機要這樣設定」。重點是審查不能只看對話正文，tool call 跟 metadata 都要看。

**全組織的風格。** 例如每個人都用了太多 em dash，而你不喜歡。這可以變成一則組織範圍的公告或 context 變更：不要這樣做。

### Production 裡怎麼組

[21:45](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1305s)。memory store 可以就是一個目錄裡的 Markdown 檔。transcript 是對話往返，加上工具 metadata 與用過的 Skills。orchestrator 派 subject 分析，再自己決定哪些模式夠格變成 memory 變更。輸出交給人審。

## 兩條程序並行，不是二選一

[23:52](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1432s)。

| | in-band memory | Dreaming（out-of-band） |
| --- | --- | --- |
| 何時發生 | 做任務的這一次 session 裡 | batch、非同步 |
| 資源從哪來 | 跟任務搶同一份 context 與 token | 另有專用預算 |
| 看得到什麼 | 只有這一次 session | 跨 session、跨 agent 的模式 |
| 效果多快 | 下一次 session 就會變好 | 較慢，但是在補 in-band 看不到的洞 |
| 人的角色 | agent 自主寫 | 人 accept 或 reject 提議 |

Dreaming 聽起來很貴。講者的算法是：有效的 memory store 會讓 agent 更常 one-shot，任務本身的 token、重試、latency 下降。額外的整理成本是用這個換來的。

## 講者要人帶走的三件事

[25:14](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1514s)。

1. **至少先做簡單有效的事。** `CLAUDE.md`、Skills、讓 agent 自己管理 memory，對表現的影響已經很大。
2. **規模變大再加 guardrails。** agent 變多、單次跑很久、長期在同一個 workspace 或很複雜的領域裡開發時，memory 的管理要安全、可驗證、可稽核。versioning、concurrency hash、permissions、portability 就是這層。
3. **真的要把迴圈關上，就加一條 out-of-band 程序。** Dreaming 用來 consolidate memory、刪掉不再相關的、補上 agent 一直缺的、把 memory store 整理乾淨。

這不是 coding task 專用。講者自己做簡報時也用 memory：她怎麼寫、簡報長什麼樣子，會隨時間累積。

收尾時她說，這整條 context engineering 的路，很多是過去一年才發生的，仍是開放的研究與工程問題。她鼓勵聽眾繼續想、繼續學、繼續 dreaming。

## 問答裡三個實務問題

### 企業上該用什麼 memory store，而不是筆電裡的檔案？

[27:38](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1658s)。提問者要的是比「檔案放在筆電上」更 enterprise 的做法。講者說他們本來不該在台上做產品呼籲，但既然被問到：她講的 versioning、hash 這類 production 機制，做在 Claude Managed Agents 的 memory 與 dreaming API 裡。若要現成方案，她指向那裡。

### 幾百個使用者、permissions 各不相同，Dreaming 怎麼沿用同一套 guardrails？

[28:56](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1736s)。提問者提到 Claude Code 外洩資料裡，memory 與 Dreaming 是最有趣的部分，並問：Dreaming 發生在 out-of-band，context 跟使用者當下使用 agent 時不一樣，怎麼保證它遵守同一套 permissions。

回答是：觸發一次 Dreaming job 時，你可以精確決定要附上哪些 session transcript。它不是「把某一段時間裡的全部 transcript 都吞進去」。可以那樣設定，但也可以只搜尋跟這份 memory store 擁有相同 permission set 的 transcript，讓兩邊對上。Dreaming 的 permissions 應該鏡射 agent 本身的 permissions，而不是另開一個更寬的視角。

### 這是不是在從第一原理重造資料庫？

[30:16](https://www.youtube.com/watch?v=tTcxVv8HHNw&t=1816s)。講者認為這是在找一條界線：哪些事讓 agent 自主做，哪些事應該是寫死在 harness 裡的確定性程序。

一開始他們讓 agent 把想寫的都寫進 Markdown，想 commit 就 commit。等看夠哪些 primitive 真的有效，就把那些 primitive 編進 harness。hash 與 versioning 是舊的軟體工程做法。現在要做的是讓自主的 agent 能有效地跟這些做法互動，而不是重新發明輪子。訊號已經夠了：這些事應該確定性地做。

## 詞彙對照

字幕機器翻譯與這份筆記的對應。讀原始 `zh-Hant.txt` 時可以用這張表。筆記裡的說法就是英文專有名詞。

| 字幕裡常出現的詞 | 這份筆記的說法 | 英文原稿 |
| --- | --- | --- |
| 夢想、做夢 | Dreaming | dreaming |
| 經紀人、特工、代理商 | agent | agent |
| 安全帶、線束 | harness | harness |
| 樂團、帶內 | in-band | in-band |
| 帶外 | out-of-band | out-of-band |
| 會議（中後段） | session | session |
| 記憶體、內存 | memory | memory |
| 草稿本、便箋本 | scratchpad | scratchpad |
| 成績單、筆錄 | transcript | transcript |
| 受試者 | subject | subject |
| 協調器 | orchestrator | orchestrator |
| 技能 | Skills | skills |
| 漸進式揭露 | progressive disclosure | progressive disclosure |
| 護欄 | guardrails | guardrails |
| 雜湊、哈希 | hash | hash |
| 外箱 | out of the box | out of the box |
| 情境工程、上下文 | context engineering、context | context engineering |

## 材料從哪來

- 整理後的筆記就是本檔。
- 逐句繁體字幕：`data/videos/tTcxVv8HHNw/zh-Hant.txt`，另有 `.vtt` 與 `.srt`。
- 英文原稿：`data/videos/tTcxVv8HHNw/original.txt`。校正時以英文為準。
- 對照原片與同步字幕的播放頁在 `/videos/tTcxVv8HHNw`。影片檔沒有下載，播放用的是 YouTube 官方嵌入。
