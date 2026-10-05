# Dana Lawson - Built for Humans. Now Agents Are Here. - AI Native DevCon June 2026

Dana Lawson，Netlify 的 CTO，在 AI Native DevCon 2026 年 6 月。片長 30 分 54 秒，英文手寫字幕。主持人說 Netlify 多年來是為一個還沒有 agent 的世界做軟體。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=ItTJpQz35CY)

## 一句話

平台是為人做的，agent 來了之後，那些假設全部露餡。她的論點是：為 agent 把錯誤、日誌和能力改成機器讀得懂，人類開發者也變快。Builder 不再只有開發者。Code 不再稀缺之後，稀缺的是 taste、何時該 ship 的判斷，以及 agent 能在上面工作的架構。

## 誰在建造，已經不是只有開發者

[0:27](https://www.youtube.com/watch?v=ItTJpQz35CY&t=27s) 她有點時差、咖啡因很多。Netlify 是 web application platform，幫人 build、deploy、做出體驗。現在任何人都能做。這場演講可能很快過時，看你走到哪。

她問誰自認是 developer。Builder 的樣子變了。平台當初服務的人不再只有開發者。我們仍是 builder，但不是唯一的。有了 agent，誰都能參加。IDC 預測到 2028 年會多出超過 5 億個新應用。她自己一天做一個，說自己是問題的一部分，比過去四十年加起來還多。四十年被壓進三年。不是工程師變多，是 agent 把 intent 變成程式語言。她說現在到未來最強的程式語言是英文。Claude Code、Cursor、Bolt、Lovable、Netlify，讓有想法的人用對話做出能跑的軟體。治療師、老師、小店老闆、學生、在店裡排隊用手機做東西的人。為這些新 builder 把平台改得更適合 agent 之後，開發者也變好了。這是悖論。

[3:05](https://www.youtube.com/watch?v=ItTJpQz35CY&t=185s) 她的朋友 Toria 是有執照的按摩治療師，也打鼓。她要的不是靜態網站，也不要上 Wix。她要一個 Barbados 按摩 retreat 的 app：社群、收款、內容。她不寫 code，她寫意圖。她在 ChatGPT 描述願景，叫 agent 做網站。工具裡每一條假設都是人類假設。Netlify 原本是給前端開發者的。第一關是 git。她不知道 git 是什麼。Dana 在 GitHub 工作過，告訴她你不需要知道。Agent 仍說一口流利的開發者語言，它們服務的人不會。修 Toria 的問題，也修了有經驗的開發者。那些人現在要用 spec、intent、context 來寫，就是 Guy 講的新 software delivery lifecycle。這些必須開箱就能用，因為新 builder 不知道。錯誤訊息變清楚、有結構，build 輸出給機器，拿掉不必要的摩擦，開發者也受益。拿掉的每一條人類假設，都讓平台對所有人更好。這個缺口他們叫 agent experience。

## AX 不是把平台做笨

[5:29](https://www.youtube.com/watch?v=ItTJpQz35CY&t=329s) 她從 1990 年代做開發、builder、QA。幾十年的護欄是為了防止人搞壞 production。現在拿掉護欄，叫人來玩。介面變了。Agent 處理 git、deployment、DNS。Builder 盯著願景。Agent 能碰到平台的 primitives，自己 deploy、設定、迭代，人可以完全不碰。她說這很可怕。AX 拿掉技術摩擦，好讓有想法、想把人變好的人做得到。這不是另做一個被簡化的平台。Netlify 仍和十年前一樣有力。幫 agent deploy 的那些結構化訊號，也幫工程師除錯、把 build system 做得更快。為 agent 設計，其實一直是在為人設計。

[7:19](https://www.youtube.com/watch?v=ItTJpQz35CY&t=439s) 核心命題：2012 年大家聽過 user experience。Spotify 的 Jeremiah 提出 developer experience。她的老闆 Matt Billman 去年說，新範式是 AX、DX、UX 收成一個學科。Builder 不再是你。重活是 agent 在做。終端使用者的互動也是 agent。在平台上寫程式的也不是 developer，是 agent。另一頭是說白話英文、期望它就會動的人。AX 不是為了讓機器開心。它是拿掉每一步的摩擦，讓想法用幾個 prompt 變成現實。結構化錯誤 agent 解析得了，工程師也看得更快。Deploy preview 給 agent 清楚的過或不過。這些給人清晰，而且常常被略過。終端使用者現在是任何人。AX 是設計人和 agent 怎麼無縫一起做。不只是把 API 呼叫變得對 agent 友善。要重想整條 stack：intent 怎麼表達、系統怎麼溝通、我們怎麼信任。

[9:14](https://www.youtube.com/watch?v=ItTJpQz35CY&t=554s) 兩年裡這些工具或 harness 爆開，名字還會再變很多次。她坐在台下想，Netlify 是 harness 上的 harness 上的 harness，要幾個 harness。命名仍是人的難題。Claude Code 是會寫、會測、會 commit 的 agent CLI。Cursor 和 Windsurf 跟你 pair program。v0、Netlify、StackBlitz 的 Bolt、Lovable 把自然語言變成應用。GitHub Copilot 的 agent mode 會自己處理 issue、送 PR。Software factory 這個想法存在多年，現在 agent 讓它真的跑起來。共同模式是 intent 進去、能跑的軟體出來。它們都需要懂 pattern、deploy target、CI pipeline、edge network 的基礎設施，而且要為 agent 設計。

## 三個生命週期的移動

[10:38](https://www.youtube.com/watch?v=ItTJpQz35CY&t=638s) 第一，從舊的 SDLC 走向 intent。Spec 仍然重要。大型技術平台她自己還在用 spec。她說網際網路對一般使用者就是一堆 app 和網站。科技公司覺得難，做體驗的終端使用者現在沒那麼難。傳統流程從 PRD 到 ticket 或 Linear，規格寫給人。AI native 從 prompt、問題描述、草圖、參考開始。輸入是意圖：我要一個能預約的 wellness retreat，不是五十頁需求。底下要有 software factory。Netlify 在自己吃這套，工具叫 Agent Runners。Harness 吃下 intent、生出 code，立刻進真實工程流程：preview deploy、自動化測試、production pipeline。她說以前要數百萬分鐘的事，現在幾秒。

第二，從循序交接變成共享的創造管線。以前是接力：PM 寫規格交給設計，設計做 mockup 交給工程，工程做出來。QA 大概只是一個 bot。然後交給 DevOps 去 deploy，因為沒人信任別人按那個鈕。要數週。現在產品團隊用 agent 生出能跑的原型。設計師直接在 code 裡改體驗，不是站在生命週期外面。工程師花時間驗證架構，寫現在才真正需要的護欄：context、spec、recipe，為了好講她也叫它們 skills。Agent 做測試和部署。大家都參加。週期從數週壓到數小時。

[13:29](https://www.youtube.com/watch?v=ItTJpQz35CY&t=809s) 第三，從被動的 CI pipeline 到開發迴圈。她以前跟開發者說，不必自己做 CI/CD，來 Netlify。現在是自主的開發迴圈。Agent 不只寫 code，它參加整個基礎設施生命週期：生測試、抓失敗的 preview、讀 build log、提修法。CI/CD 變成連續的回饋。Build 失敗時，agent 讀得懂他們改過的 log，診斷根因，提交修復，中間沒有人。這不是未來，每天在發生。Agent Runners 有保護。Agent 在 sandbox 裡有完整平台權限，自己 deploy、設定、迭代。每次變更有唯一的 preview URL。人在這裡回來：看畫面、繼續迭代。她說 vibe code 就是 preview、preview、preview。

Build log 是一個改過的表面。以前是人讀的敘事，適合掃、適合 DevOps 除錯，對 agent 很糟。不是 leet speak，是更糟的 log speak。他們改成結構化、有機器可讀的 error code，旁邊仍有人讀的文字。Agent 可以解析失敗、找出缺的 dependency、自己修。同一份輸出也讓工程師的儀表板更清楚。她仍不完全信任 agent，尤其她的 Claude bot，她說它有點恨她。想著 agent 會怎麼讀，人除錯也變快。

## 舊架構讀不懂，信任不能事後再加

[16:19](https://www.youtube.com/watch?v=ItTJpQz35CY&t=979s) 多數人不是綠地。Agent 被放進已經碎掉的系統。就算做全新的，她也要你在動手之前先想 AX。這些系統是 API、microservice、CI，設計給人操作。就算事情連續跑，迴圈裡仍假設有人。Agent 看不到服務邊界的另一邊。每個 API 一種方言。關鍵流程在某個人腦子裡、在 2022 年的 Slack 討論串、在沒有文件的 Terraform module。Agent 觀察不到，就不能聰明地行動。不能再靠走廊那頭的人。不能把 agent 栓上舊架構。架構本身得演進。

第一個移動是從 API 到 capability。傳統是 REST：對這個 POST、對那個 PUT、GET 這個資源。Agent 看著 200 個 endpoint，得自己找出對的 context、順序和參數。她說大家在笑 context window，若你不寫明 agent 在系統裡該做什麼，時間會先用完。Agent native 露出的是意圖層的操作：建立一個 site、deploy repository、provision edge compute。這是 agent 能推理的能力，講的是你要完成什麼，不是機械步驟。Netlify 的 API 兩種都留：既有整合用 REST，agent 用 capability。CLI 也一樣。人要按 yes、no、下一個參數。Agent 不行。他們得重想 CLI 怎麼被用。

[18:45](https://www.youtube.com/watch?v=ItTJpQz35CY&t=1125s) 第二是從 request-response 到 event-driven。傳統 API 是拉：送請求、拿回應。Agent 得 poll、猜、重試。AI-native 是推事件。Deploy 開始了、PR 建了，agent 訂閱然後行動。還在做非同步的，要想到 event。Kafka 或你喜歡的 streaming 都是一條路。Netlify 的 build system 本來就這樣：每次 deploy 發出事件。現在觀察的是 agent，不是人。

第三，也是她說最重要的：架構要讓 agent 讀得懂。分散式系統靠部落知識。懂服務 A 的人不懂服務 B。他們做了系統紀錄，叫 blueprints。那就是 skills、context、recipes。想成 `CLAUDE.md`、`AGENTS.md`、architecture decision records 和設計，讓 coding agent 在改之前理解系統。目標不是更好的文件，是 agent 能在複雜系統裡安全運作。

合在一起，是從靜態工具換成 agent 編排的系統。開發週期變成連續的人與 agent 迴圈。不再是交接，是同時參加。人留在迴圈裡提供判斷、品味、方向。迴圈以機器速度走。這不是取代工程師，是放大每個人當 builder 的能力。

[20:38](https://www.youtube.com/watch?v=ItTJpQz35CY&t=1238s) Agent 能 deploy code、配置基礎設施、改 production。信任必須是預設，不是可選。Netlify 三條原則。Sandbox：agent 不能逃出 sandbox、碰到沒授權的資源。預設有 human in the loop。她說自己聽到 software factory 仍不完全信任。人在迴圈裡要做有意義的那段：agent 建造，人核准。Audit 和 rollback：每個動作都記。事件重要，是因為今天很多 code 根本沒進 git，她說這很荒唐，但仍要有系統紀錄才能回滾。解釋不了 agent 做了什麼，為什麼信任它進 production。

組織上，門檻一低，全公司都在做原型、測假設、出點子，支援團隊做內部工具和給客戶的客製。不再被工程的 SDLC 綁住。她做 DevOps 二十多年的夢是：你們自己做，我來處理難的問題。工程從實作每個功能，轉成確保護欄、架構緊、skills、recipe 和 context 真的能用。AX 是讓這場民主化安全發生的學科。她仍相信開放的 web。

## 稀缺的變成判斷，Toria 說自己是開發者

[22:31](https://www.youtube.com/watch?v=ItTJpQz35CY&t=1351s) 她要帶走的：我們不再珍貴。平台不只服務職業開發者。為治療師、老師、學生、任何有夢的人設計。舊系統必須演進，API 要變成 agent 能推理的 capability。安全和信任是基礎：sandbox、人的審查、完整稽核。Agent 能 deploy 到 production 時，這些不是加分。明天就能做的是把結構化錯誤修好、做出事件訊號、讓架構可讀。她要大家去學寫 skills，說你的工作靠這個。字幕裡還有一句 expert spa，指的活動沒有說清。

最大的意外是，為 agent 設計不是拿 DX 或 UX 去換。它是乘數。Matt 說，任何人都能生出軟體時，code 不再是稀缺資源。幾十年的瓶頸是寫 code、找工程師、送功能。瓶頸在溶解。稀缺的變成 taste：什麼值得做。判斷：何時 ship。架構：大規模的系統怎麼設計。AX 逼他們把架構、結構和訊號講清楚，也讓他們成為更好的開發者。能做出 agent 可以一起工作的系統，是未來的工程技能。AX 要讓 agent 放大人的創造，而不是取代它。

[24:37](https://www.youtube.com/watch?v=ItTJpQz35CY&t=1477s) 回到 Toria。她撞上 git 和一大堆問題，沒有放棄。生態是為 agent、也為她設計的。她把意圖拖進 Netlify，它就動了。沒有 git、沒有 CLI、沒有部署設定。信任是預設，agent 處理全部。她打電話來說：girl，我是一個 developer。Dana 說網站不是她做的，是 Toria 做的。Barbados 的願景上線了。為 agent 設計，讓一個寫意圖、不寫 code 的 Barbados 按摩治療師做得出東西。那是人的體驗。她提醒：為所有人重新設計，才是 agent experience，不是只為 agent 設計。記住你服務誰。

[26:24](https://www.youtube.com/watch?v=ItTJpQz35CY&t=1584s) 提問把 5 億說成 50 萬，問的是何時談什麼不該做：環境、code 的複雜度。她說苦的事實是，你會做出一批大概幾個月、不是幾年就過時的東西。把 intent 放對地方，才留得下來。現在有很多 slop，這些應用會消耗資源。工程實務在這裡是核心：compaction、compression、做對的資源，讓網際網路繼續開放，也對環境友善。新 builder 不會懂這些。她對想進這行的人說，她自己可能不會當 builder，會把資訊科學的底子用在內部。體驗誰都能做。不要卡在那個陷阱。

問責：抽象底下的東西，建造的人不懂，責任在哪。她說是拉扯。很多東西會被商品化。以前簡單卻很難用的系統，現在是 plug and play。下一步會做出什麼還沒定。Netlify 很多使用者要的是網站和應用，他們把問責、context 和信任放進系統。Guy 那場講的那層，build、deploy、QA，是 Netlify 在做。大型組織仍是為開發者建的，有 control plane。他們在做 policy engine 和控制台，給 CSO、production、R&D、或任何負責護欄的人。她又說網際網路多半就是 app 和網站，通常是一些 JavaScript，也許一個資料庫，中間沒有那麼多 serverless function。人不再這樣描述。「做一個在葡萄牙看得到的網站」就是一個做地域的 serverless function。他們不會去寫那個函式，她來寫。他們只說要在葡萄牙。開發者的注意力要放在重要的地方。大型企業在意的問責，更多是 governance、policy、identity。Hobbyist 和 solopreneur 只想要它能動。
