# Patrick Debois - The Rise of Agent Enablement - AI Native DevCon June 2026

主持人介紹 Patrick Debois：Tessl 的 AI Product Engineer、AINativedev.io 的策展人、人稱 DevOps 之父。2009 年在 Ghent 辦了第一場有組織的 DevOps day，也是 DevOps Handbook 的共同作者。那段介紹是 LLM 生成的，主持人說自己從長破折號看得出來。這是 AI Native DevCon June 2026 的演講，片長約 31 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=I9RWrW32QEw)

## 一句話

Agent 不會自己在組織裡規模化，團隊也不會。Patrick 要的職能叫 agent enablement：不是教一個人把 agentic coding 練得更厲害，而是像當年的 developer enablement 一樣，有人負責把這件事養進組織。他的對照很硬：對人好的工程習慣，對 agent 也好；對 agent 好的，似乎也對人好。人該修的是會產出 code 的系統，而不是跳進去把這一次的 code 改對。

## 做的是會做東西的那個東西

[1:04](https://www.youtube.com/watch?v=I9RWrW32QEw&t=64s) 這場週五才開始寫，他說有點實驗性，因為原本要講的被別人先講掉了。現場有人正在跟組織裡的 agent coding 規模化搏鬥。開發在變：我們不是在做那個東西，而是在做「會做那個東西的東西」。Context、Skills、harness engineering 都在，但目前多半還是技術拼圖。他要講的是用這些東西是什麼意思。

[2:09](https://www.youtube.com/watch?v=I9RWrW32QEw&t=129s) 人人重造輪子，新技術來時有助於學習，但不能每次都這樣。DevOps 早期人人自建部署，雲的早期人人自建自己的 S3。Developer enablement 不會自己發生，組織裡要有人主動養它。好消息是你已經知道怎麼做：多年來對人有益的工程實務，對 agent 也有益。也許是因為 LLM 學的就是我們的行為，字幕用的詞是 buried。這不只是 vibe coding 做出一個 app，還要讓它能維持、能運作、安全。工程從這裡再進來。他說這本來可以講兩小時，當時只剩大約二十分鐘，所以只走 enable agents、enable team、平台，以及組織。

## 改系統，不要接手這一次

[3:58](https://www.youtube.com/watch?v=I9RWrW32QEw&t=238s) 像 DevOps 一樣，出現了新稱呼：AI product engineer。只叫 AI engineer 會混淆，因為 AI 和「產品就是 AI」分不清。產品工程師把顧客放在前面，也把「要做什麼」和「怎麼做」揉在一起。他要人換的心智是：agent 做錯時，人會跳進去改那一次。該做的是改進產出 code 的系統，讓下次不必再改。不是修 code，是修系統。做系統和平台的人比較自然會這樣想。他覺得業界現在最常見的錯，仍是跳進去改、把工作接過來。

[5:35](https://www.youtube.com/watch?v=I9RWrW32QEw&t=335s) 什麼叫好，沒有新東西，只是用新心智重講一次。Claude 學會了先規劃再做。要有測試，才知道 agent 做得好不好，或是它偷改了你不想動的功能。他沒想到會看到開發者自己開始寫文件：寫下 spec，或你怎麼稱呼那份 context，事情就變好。加上 observability，agent 可以觀察自己並改進。可重用的 spec、harness 元件、tools，都該能再拿來用。別不理 production。開發者以前不習慣被說：唯一要緊的是終端使用者出了問題。訊號不好，就改系統。任務要小。大任務裡 agent 會往各方向衝。在那發生之前就要量。

[7:19](https://www.youtube.com/watch?v=I9RWrW32QEw&t=439s) 人人自建 context，網路上互相複製 `CLAUDE.md`，不能持續。團隊和 codebase 裡要把它收成函式庫。他說現在有五、六個 harness 在被做出來，對學習很好，做完之後大概只該留下少數幾個。Spec 要維護，不是寫一次就結束，它會過時。Triage、票券、review、客戶資料庫，這些接上去時存取控制常常沒設好。這是進行中的問題。做法和以前對使用者一樣：把 agent 能碰的 blast 限住，字幕說的是 blast wall。

[8:35](https://www.youtube.com/watch?v=I9RWrW32QEw&t=515s) 若只能對已經在做 agentic coding 的開發者講一句：每次做完一件事，就想怎樣不要再重做。這也是 DevOps 自動化的心態。不是 it works on my machine，不是 it works with my agent，也不是我這台 snowflake。要能重複。重複才會把你推進改進。

## Team lead 同時對人和 agent 負責

[9:18](https://www.youtube.com/watch?v=I9RWrW32QEw&t=558s) Team lead 不只幫人，也幫 agent，因為它們是團隊成員。過去要為開發者的表現、交付和品質負責。愈來愈多也要為 agent 表現得好不好負責，它們是系統的一部分。你擁有一套 microservice，也擁有你在做的那一塊；現在用來做東西的工具，同樣是你該追蹤的責任。

[10:18](https://www.youtube.com/watch?v=I9RWrW32QEw&t=618s) 對 AI 好的，對你也好。目標要清楚。想讓 token 花費衝破屋頂，就給它一個含糊的指令。想讓它跑一整夜再來看它花了什麼，沒有用。Context 要共享，目標要可預期。

[10:49](https://www.youtube.com/watch?v=I9RWrW32QEw&t=649s) 他不想再講那種通用轉型：叫大家多用 AI、辦 hackathon、發工具、然後宣布畢業。正在變的是團隊怎麼一起寫 context：你的風格是什麼、放進什麼、什麼重要。Definition of done 不再只是 code 出去了沒有，也包括 agent 有沒有盡力、表現如何。他喜歡的一個指標是：agent 要幾個 turn 才做對。量這個，就是在看自己和 harness 有多有效，很像看團隊成員怎麼共事。有的團隊把 retro 從「我們怎麼工作」改成「我們的 agent 怎麼工作」，做完餵進下一輪。Velocity 很好，但還有 rework、還有 turn 數。

[12:21](https://www.youtube.com/watch?v=I9RWrW32QEw&t=741s) 不是每個人都擅長用 skills 和散文寫清楚，所以要教育，就像以前訓練人寫 code。難的是把 coding rockstar 轉成能把事情講給 agent 聽的人，他稱為 Agent Whisperer。不是每個人想碰 code。懷疑者說 AI 做不到我會做的事，那就請他們把自己做的事寫下來，agent 才會變好。共享函式庫放在 repo 裡有好處也有壞處：誰擁有哪一批 skills。他要 team lead 問的是：agent 是隊員，目標和 KPI 在哪，怎麼量表現，怎麼讓它們跟團隊配合。都是你已經知道的事，只是換了一層。

## 平台把重複的東西收到中央

[14:05](https://www.youtube.com/watch?v=I9RWrW32QEw&t=845s) 常見路徑是一個開發者、幾個開發者、一個團隊，然後才是平台與規模。每個新技術都有孵化小組：agile、DevOps，現在是 agent enablement，字幕聽成 athletic。先在一個團隊改，再複製到下一個，最後收到共享層，免得人人重做 boilerplate。這些人是在為「替那個會做東西的團隊做事的團隊」而做。他們自然會問：skills 能不能跨團隊一起用、`CLAUDE.md` 能不能拆出可重用的片段、harness 和 pipeline 能不能再拿。

[15:12](https://www.youtube.com/watch?v=I9RWrW32QEw&t=912s) 他覺得還不夠的心態，是去攤位問 AI coding 廠商：你們收到回饋、agent 在變好，那你們有沒有從它在 production 裡做的事學習？對方沒有這個問題，也沒有人這樣要求。另一群廠商講平台裡的 AI 和 observability，兩邊卻沒合起來。這和以前一樣：沒有從放出去的東西學習。人把「放到外面」理解成測試環境裡跑過了，而不是 coding 真正出去之後。他要的是一份 memory、一條所有 agent 共用的 backbone。不是每個還在實驗的團隊都該自己建。最後它會沉到中央。

[16:31](https://www.youtube.com/watch?v=I9RWrW32QEw&t=991s) 好的平台對人好，也就對 AI 好。Self-serve：不要讓人複製 skills 跳過一串關卡，拉對的東西進來，摩擦要小。最佳實務和安全掃描若得自己全做，就給一條拉得到的路；推進去時要有 context 的監控。Coding agent 在整個組織裡做了什麼，不該每個團隊各起一套監控。中央工具才能看出 context 缺了什麼，再長出新的 skill 或工具，知識才跨得出團隊。Code 有 registry，skills 也該有，而且要有版本。MCP、skills、harnesses、agents、agent pipelines 都是同一種模式：中央可發現、可重用、自助拉下來。產品團隊用 AI 時很早會放 gateway 和 MCP。Coding 這邊不能再等。一群 agent 開始一起工作，他就會說需要一扇 entity gateway、需要 observability，由平台集中做。字幕沒有把 entity 解釋成另一個產品名。

[18:35](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1115s) 擁有權是舊問題。平台團隊的 repo 人人共用，有的被放生，沒人知道還活著沒、誰維護。以前還得買工具去搜 repo。現在一樣。寫測試是好主意，人總說專案做完有空再寫。寫 evals 也一樣，字幕聽成 evolve。把它變容易、變自助，是平台團隊幫得上的。分享 skill 時，對方覺得 99% 喜歡，改一點點就變成 fork。你想保留自己的做法，就得讓中央那份可延伸，而且人人往那裡貢獻。不能只在開發者腦子裡測過。還要維護：還安全嗎、還優化嗎。Model 一換，就像外面的公司改了 API，你什麼都沒改，測試卻失敗。Skills 和 harnesses 一樣。沒有測試和可重複，問題會再來。有人推進共享元件時要問：誰擁有、誰維護、預算在誰。

[20:44](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1244s) 他想打破的句子是：你這個人很特別，但你的工作方式並不特別。DevOps 時很多人說我們做不到、我們很特別、你不懂我們怎麼工作。過一陣子人人都做得了。Pipeline 也一樣。自己編譯 kernel 因為你知道自己要什麼，然後呢，它是一台 VM，轉起來就好。不是叫你不要想，而是客製化要放得更刻意。人也會說 coding agent 必須很快，結果它在背景跑，他們其實没那麼在乎速度，在乎的是結果對，而不是即時回覆。

## 組織要看得到痛，一層一層把木桶補上

[21:55](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1315s) 最後一層給 VP of engineering：建立那個組織，它再去為那些團隊建立團隊。這是最寬的 enablement。現在的掙扎是工具發了，然後呢，於是開始盯每個人的花費。他不說這個職位會被換掉。還是該雇工程師，以能維持的步調送出可靠的東西。但他們要做的是讓系統被 enable：人開的票要能順暢流進 agent 碰得到的地方。平台團隊可能要等到 VP 把某些群組解開，兩邊才肯一起做。他比成遊樂場上的兩個孩子。

[23:17](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1397s) 好的組織同樣是對人好的那些事。責任要清楚，擁有權才會驅動改進，不然事情掉進縫裡。A 團隊要這個、B 團隊要那個，方向得對齊。步調要能維持：一個團隊產出多到別人看不完變更，你得平衡誰還在掙扎、誰需要教育投資、誰需要平台團隊幫忙把新環境架起來。成本也要管。投資不能停在幫所有人買工具授權。教育、把 pipeline 改好、監控它們表現得好不好、你有多在乎，這些才是分水嶺。一邊是「工具在這，自己跑」；另一邊是「我在乎，我定方向，我用這個量你」：有多少是在重做同一件事，效率從哪裡來。

[24:50](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1490s) Governance 包括 skills 和 context、誰能碰什麼、是否強制安全掃描、是不是只准用已審過的 skills，像以前的 registry。別的可以經流程從外面帶進來。KPI 他承認講起來還空，他正在做的是 enablement，而不是更貼著 context 的假具體建議。但 agent 品質要有自己的 KPI，不能只量產出物品質，因為它是系統的一部分。業務現在就要回報，所以痛要看得見。資安也一樣：說不出有多少漏洞、風險多大，就不能用「兩倍、十倍、我看著不錯」來證明投資報酬。他要避開 quick wins 的獎，真的把 enablement 團隊做出來。它像平台團隊，需要投資。沒有 playbook，邊做邊學，這很令人不滿。改進是一層一層的。

[27:08](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1628s) 他的模型是一隻桶。任何自動化都一樣：過去開發時，桶上有一塊特別低，水就從那裡漏走。技巧是每個階段都走一小步，治理改一點、自動化改一點，按層走。把一切都自動化、治理卻沒有，說不通。這是他的 pet peeve。

[27:54](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1674s) 他從 continuous integration、continuous delivery 接到現在。Context 和工具在累積，行業在學怎麼把工藝做得更好、做得更快。新技術一變成業務優勢就要能換進換出，問題變成我能多快採用新東西。Continuous delivery 問的是我能多快交付、既有的能不能更穩。現在則是組織裡、跨團隊累積知識，讓業務做得更好，做出更可靠的工具。對他來說下一步叫 continuous learning。

[28:58](https://www.youtube.com/watch?v=I9RWrW32QEw&t=1738s) 他在做一個研究工具，字幕說它在測試上。Agent 看社群貼文，把它們蒸成模式。難處是廠商會說「就該這樣做」，他想要一個能忽略廠商的系統，但廠商有時真有好主意。同一件事要找到多個來源，還得分辨它們是不是在轉同一篇文章，字幕點了一個聽成 Brigida 的例子。問卷太慢。不能等到大家說我們在適應、我們用 Claude 或 Copilot、這樣就好。他要聽的故事是你怎麼改心智、儀式怎麼變（字幕聽成 iTunes ceremonies）、怎麼跟 CFO 談。投影片可以在 LinkedIn 上換回饋，他說好的開發者就是這樣。
