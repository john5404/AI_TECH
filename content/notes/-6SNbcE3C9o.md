# May Walter - From Blind Spots to Merged PRs: Runtime Intelligence for Continuous Agentic Performance

May Walter，Hud 的共同創辦人。主持人把這間定位成今天和明天真的能用的東西，並說她要講 agent 以為自己做得好、和實際上做得好之間的落差。片長約 31 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Hud 聽成 hood，把 Claude 有時聽成 cloud。

- 原片：[YouTube](https://www.youtube.com/watch?v=-6SNbcE3C9o)

## 一句話

效能問題會被擱著，是因為光調查就要先付一筆不知道換得回什麼的時間，從一小時到一週、甚至三週都有可能。Hud 要自動化的是調查，不是立刻修：用 production 裡的 runtime intelligence，每週交出高 ROI、低風險、人讀得懂的機會。自動開出的 PR 沒人看。人還得被說服這件事值得注意，合併才會發生。

## 調查貴到排不進 sprint

[0:55](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=55s) 她從一個熟悉的場面開始。PM 說這個頁面太慢。工程經理 Ben 說大概可以優化，但得先挖。PM 說那就算了。幾週後頁面真的太慢，問要多久。答案是不知道，從一小時到一週，得看過才知道。誰能接？只有 Dave，他是唯一搞得懂那個 codebase 的人，其他人進公司還不到五年。一位客戶就卡在「必須修、不知道怎麼修、又排不進去」。

她和共同創辦人、CEO 在做的是給 coding agent 的 runtime intelligence layer。Sensor 跟應用一起在 production 跑，抓住 agent 要對 production 推理時需要的東西：每個 function 跑多常、多久、有沒有失敗。出事時主動抓深的 forensic context，好讓「為什麼慢、為什麼失敗」有答案。

[2:50](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=170s) 寫 code 變容易之後，是一串 looks good to me 的 pull request。一個 agent 做，另一個說這主意很好。測試過了，production 裡 code 還是會用有創意的方式壞掉。Coding agent 不知道它實際上怎麼跑。她要講的旅程是：為什麼對那個客戶重要、技術上怎麼做、他們以為會成但沒成的地方、以及流程上怎麼接上人。

[4:28](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=268s) 人會先忽略，問題變差，變成危機，才排進去修。現場有人有同感。不是因為笨、也不是不在乎，是忙著做功能。一進危機就想趕快修完，回到建造。這天生是漏桶。研究階段是大問題：若知道一天修得完，大概會排。現在是先付錢才知道價錢，像把東西拿到收銀台才曉得要不要。看過之後總有能做的，只是事先不知道。一件事可能花一小時到三週，又不知道能優化多少，就不願拿它跟給客戶價值的功能比。

[6:16](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=376s) 所以他們想自動化的是調查，還不是修。每週或每兩週，依 sprint planning 的節奏，找出真正的甜點：打過分的高 ROI 機會。拖了幾個月的 performance sprint 就可以固定發生。聽起來好，做起來難。而且這不是把日常工作自動化。你不會每週叫工程師去找效能優化。但若有人在 Slack 跟 team lead 說，找到一件事，兩小時可以把這個降下 30%，對方會覺得了不起。那是改變行為的第一個楔子。

## 掛在已經信任的 GitHub、Claude、Slack

[8:01](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=481s) Agentic workflow 不想跑在自己電腦上，想跑在 cloud。不是每個客戶都有自己的環境。Cursor 和其他廠商把自動化做得很好裝，但就鎖在那個 vendor，規模上一說不通。他們要 vendor neutral：算力在哪跑、哪個 harness、哪個 coding agent、哪個 model。沒有人知道什麼最好，而且有季節。還要好切換、權限和 tool call 和認證要安全、不要從零造、用可信的東西。觸發要有 webhook，例如這很慢就去查，也要有排程，按 deployment 或每週，各團隊不同。最常被弄錯的是維護：agentic workflow 像 code，送出去之後會想改一小處。難改，人就不改。而「什麼重要」會跟著業務和產品變。

[9:50](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=590s) 他們選 GitHub Agentic Workflows。做這個的人就在觀眾裡。很多人已經有 GitHub Actions，知道、也信任。不是唯一解，但是走得通，不必再跟 platform team 搶一個全新的 agent 基礎設施。先選 engine，Claude 或 Codex 或其他，加上權限、網路、tools，以及這次的 Hud MCP server。Task 就是一份會定期或被觸發的 prompt：給這個 repo 的 AI performance and reliability engineer 週報。他們從 repository 開始，後來切得更細，因為很多人還在用 monolith。不是一份理論上什麼都能做的大報告，而是那個服務的 tech lead 只收到自己在乎的部分。Agent 可以是別的，他們用的是 Claude。Runtime intelligence 每週在 GitHub Actions 上跑，報告送到 Slack。客戶本來就用 Claude Code、GitHub 和 Slack，所以掛上去。她要聽眾找的是配合自己 stack 的路。

## 聽起來對，不代表會動到針

[12:26](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=746s) 流程是：從 production context 開始，agent 找 anti-pattern 和機會，再打分、標出來。不是做得到的都該做。Code 還是要 review、要 merge。沒有 impact 就不該為一次 deployment 冒險。效能上常見的是：先有一個說法，修了、上了，沒有預期中有用；staging 很好，production 的問題不是那個。想避開這個，先說服這件事值得做，再由人 review diff、合併 PR，迴圈才關上。

[13:26](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=806s) 第一版沒成。有些提議說得通，但沒驗證，就像讀 code 時覺得大概能優化，卻不知道是不是瓶頸。一件事花 20 秒或 5 秒，時間花在哪並不清楚。聽起來對的，不一定推得動針。Query 又特別複雜，取決於 code 怎麼跑、資料在哪。某個客戶一次從資料庫拿回 10,000 列，變慢並不意外，只是你不知道長相。最大的是他們叫的 lazy fix：有 exception 就 catch。若只對著語法錯誤或一條跑很久的 query 優化，問和答都停在當地。他們要的是比較寬的看法，像 staff engineer 對剛進團隊的人解釋：修法長什麼樣、我在乎什麼。

[14:58](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=898s) 需要的是 context，而 context 只有兩個問題：太多就看不出什麼要緊；不夠，agent 就會假設。工程師會加 log 或 metrics、部署、收集、找到瓶頸再修。Agent 會說手上有這些，走最短的路、先假設。不能這樣擴大，尤其不能拿一個站不住的旗標去打斷工程師的 flow：他們讀報告、開 PR、review、deploy，發現什麼都沒變，時間就浪費了。要的是剛好夠、讓人有信心這次真的會有作用。

Production 的語言是 service 或 endpoint。這個 endpoint 要 5 秒，P99 是 6 秒，P100 是 17 秒。Agent 推理的是 function、檔案、class method。它能猜兩者的關係，但不是同一種語言。有些問題靜態分析找得到。要從人主導改成 agent workflow，得有把握才算自動化。她說，90% 的時候有用，那不是自動化，是在幫人順流程。

## 把 production 對到 function

[17:14](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1034s) 他們做的叫 prod to code：production 發生的事，對到 function。上面是 endpoint、service、event consumer、cron job，下面是牽涉的 function。於是可以問「這個慢，為什麼」。也打開反問題：我要動這裡，會影響什麼，該不該在乎，會不會碰到 payments 和 authorization。Sensor 給的是連到 endpoint 的完整 function context；深的 forensic context 只在需要時抓。前提是不能為了這件事去翻幾 GB 的 log、span、trace。若每個 function 都連得上跑多常、影響哪些業務流程、花多久、有沒有失敗，就可以在那一塊再往下看 log 或 trace。那也是 coding agent 推理的同一層。

[18:46](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1126s) 底下是查詢層，他們用 ClickHouse，各團隊會有自己的。上面才是 skills。只把資料接上、叫 agent 自己看，她聽了五場談為什麼那會失敗。Skills 教的是怎麼處理 HTTP 500、memory leak、performance degradation。於是不是只有 Dave 點得進這份知識，也能把它擴出去。再上面是自動化：auto fix、清 dead code，建在 skills 上，skills 建在查詢語言上。Coding agent 有時需要她用話說不出來的東西，所以 tools 不夠。同時她不想把 token 和 chain of thought 花在自己已經知道的方法上。Memory leak 她會看發生的那個 pod、再看一個沒發生的，比哪裡不一樣。效能變差她要知道時間花在哪。對方法有一點擁有權，對他們影響很大。

於是可以叫它找人為的延遲，例如 sleep 和 timeout，找 N+1 query、缺的 index、同步的 blocking、一個接一個的 await。客戶的 codebase 有 15 年，這些東西一定在，要的是把它們挖出來。會有「這件事這樣六年了？」的時刻。正面看，是還有很多能做。自由跑，和用已知的工程做法引導，要取得平衡。PM 問 endpoint 為什麼這麼久，答案可以是：有一個 N+1 query 在 codebase 裡六年了。他們對這個結果很滿意。

## 人要被說服，PR 才進得了 main

[21:32](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1292s) 下一步他們想過：高 impact、低風險、不必 migration 的變更，全部自動開 PR。然後不行。沒人要看沒人會讀的 PR，也不想去看那 80 張。能用之後若要自動化，要想規模，也要想還在迴圈裡的人。現在還沒到沒人在乎的地步。自動開 PR 像打開 Datadog 和 Sentry 裡那 700 個 issue，結論是修不完，乾脆不試。他們確實從自動 PR 開始，發現沒人理；沒被排優先，就不會有人做。她不是在抱怨。建造的人有優先順序，是有理由的。沒有人有空去讀 agent 開出的一大堆 PR，還搞懂發生什麼。不想擁有那些。

[22:54](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1374s) 要說服的是人，這件事值得注意。不是說服 agent 它值得花 token，agent 永遠覺得值得。所以他們標 hot path：常被叫到的 endpoint、業務影響（payments、authentication，或你已經知道在乎的事）、以及風險。找的不是最好的優化，是最高 impact、最低風險、又小的變更。對開發者或 PM 說：就這麼小，大概能改善 30%。而且要人讀得懂。例子是一個 endpoint，P90 大約 100 毫秒，但偶爾要 45 秒，理論上不知道為什麼。答案是一直在用 MongoDB 的 distinct；若改成 search，大約能改善 30% 到 40%。這就可以排。Quick win 可以再挖、開 ticket，或開 PR。她不想規定團隊有多進階。兩種都標籤，才能量。然後那個偶爾 45 秒的 endpoint 不再那樣。學習是：讓人決定這值得。合併到 production 不是免費，只是變得比較便宜，之後才能多學一點。

[25:08](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1508s) 她要帶走的有幾件。還是得定義什麼重要。她覺得工程師以後很大一塊工作，是決定什麼值得 token、值得時間，不管 review 的是人或 agent。用對業務有沒有 impact 來打分。Agent 缺的不只是 runtime context，還有 business context。把我們怎麼看它們的產出告訴它們，它們會做得更好。第二，把調查自動化，是為了排優先順序排得更好。這次是效能，可靠性和別的也在做類似的事。不是說有了 agent，backlog 就該空。很多人用 agent 把已排定的事做快；這個用法是幫人排 ROI，不只是做任務。第三，context 比聰明重要。Agent 要看到發生什麼才有用。在這裡是 production context、知道位置、以及訊號很高的資料。Staff engineer 不能第一天換公司就 ship 到 production，就是因為缺這份 context。它會改變 agent 的行為，跟它改變人一樣。最後，agentic engineering 不是旁邊掛一個 agent 來寫 code。Workflow 要真的能做、而且對自己有信心。少做、做對的，比較好。她若建議一件不會成的事，過程的信任就沒了。自動化打開持續的 impact，也要求更高的信心。選 repo 和自動化程度已經成熟的事。

她問自己的是：什麼時候有些工程師、有些客戶公司會直接按 merge，修法就那樣進去。因為現在量得到，就可以一直變好。過程裡真正有意思的，是從仍然淨正面的東西開始，然後看卡在哪：洞察不夠好，還是夠好但難合併，還是合併了卻沒有那個效果。在完全自動化之前就邊學邊改。她的夢想是 80% 的時候做的就是同一件事，然後併進 main，那時才知道準備好了；在那之前一路都在提供價值。

[29:50](https://www.youtube.com/watch?v=-6SNbcE3C9o&t=1790s) 有人問，大家已經有 Datadog 或 Sentry，為了 production 指標吞大量資料，怎麼跟它們競爭，別人不會再每個月付 10-K。她說這對新創是大問題。他們把自己說成一家 espresso 店：只做一種，但是城裡最好的。若對方已有那些工具，就問：production incident 還在嗎，時間還是花太多嗎，還會被客戶回報的問題嚇到嗎。若是，就一起跑。例如已有 distributed tracing，就接到他們已有的東西上。Hud 聚焦的是 function 那一層的 context，以及主動抓到的 forensic context，並接到對方已經有的系統。
