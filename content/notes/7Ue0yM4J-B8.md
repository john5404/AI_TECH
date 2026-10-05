# Inside Anthropic: How Claude Tag Is Changing Agentic Work

Simon Maple 訪問 Anthropic applied AI team 的 member of technical staff Lamis。片長 57 分 32 秒，英文手寫字幕。她對上新創和創辦人，也做產品與研究的內部專案。這份筆記依英文原稿整理，專有名詞保持英文。Dreaming 是產品功能的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=7Ue0yM4J-B8)

## 一句話

Claude Tag 活在 Slack 裡，帶著 Claude Code 那套 connector、tool 和 context，但更主動，也能把一件工作撐得更久。Anthropic 產品工程團隊內部有 65% 的 PR 是它開的。Lamis 把這看成模型能力走到今天之後的日常駕駛：人要定義什麼叫做好，agent 在大家本來就工作的地方被拉進來，而不是每人關在自己的 session 裡。

## 它會自己來找你，也能把一整條流程做完

[2:56](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=176s) Claude Tag 是主動的隊友，目前寫在你工作的地方，也就是 Slack。和 Claude Code 相比，多的是主動，以及把工作看到更長時間的持久。它同時跟你和隊友協作。Tessl 內部也重度用 Claude Code，Slack 裡可以 tag Claude 做事，已經有一陣子。表面上很像。Lamis 說差別在底下。Tag 可以執行很久，做完再回來告訴你，用的是現在 coding agent 能跑很長任務的能力。你常常是去問，Slack 裡的 Claude 才回；Tag 有時會自己來找你，說有事需要你注意。記憶和 context 可以跨 channel，它慢慢懂一整個團隊在做什麼，因為它同時在跟所有隊友聊。互動不再是一次一次、一個人一個人的 session。它可以先開口。

[4:59](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=299s) Simon 描述 Tessl 的用法：在 Slack 討論需求、功能或 bug，@ Linear 開票，然後叫 Claude 用這條 thread 的 context 和 codebase 去實作，很快回一張 pull request，看過就合併。Lamis 說 Tag 的範圍可以調，基本上收到 channel。若這個 channel 一直在談 feature request，它就有歷史請求和流程的 context，也可以用 skills 把流程從頭做到尾。若給了權限，它還能搜其他公開 channel，例如客服 channel 裡問題是怎麼冒出來的，把你自己未必看得到的資訊撈出來。記憶的範圍更大。第二，你不必再打開 Claude Code 去執行。回饋進來時，可以設成 Tag 先撿起來，tag 它認為該負責的人，依 skills 和學到的流程自動開 Linear ticket，自己起一個 sandbox，在你有權限的 repo 裡開始跑，PR 好了再 ping 你。它也可以核對結果是否對上當初 ticket 的需求。從開票到問你要不要先有一個人的閘門、再到催人審查和部署，都更主動。

[8:09](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=489s) Simon 覺得自己比較在想功能，而不是「先開票、再把 Claude 拉進來」的機制。Lamis 說每個團隊要決定想在流程的哪裡掌舵。可以寫死：這些事絕對沒有權限，這些地方永遠要問我。Tag 的記憶累積之後，會摸清那些流程並調整。跨職能也因此比較做得到。客服 ticket 來了，可以 tag 那個客戶的 account executive 讓他們知道；把工程或產品拉進來看實作；Tag 帶回計畫之後，再在需要 code review 和部署時把工程師捲進來。這種 multiplayer，只用 Claude Code 或 Cowork（字幕 Co-op）一直很難。效果在這裡相乘。

## 單人的 session，變成公開、非同步的工作

[10:09](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=609s) 她用內部數字框影響：開始用 Tag 之後，產品工程團隊 65% 的 PR 由 Tag 開。他們當然已經採用 Claude Code；現在很多流程的起點改從這裡來。Claude Code 很單人。你進自己的 instance，也許在本地跑，一次開一個 session，在那裡說要達成什麼、管那次的 context，再跑結果、目標或 loop。Tag 比較沒有形狀。沒那麼以 session 為中心，也沒那麼單人。它可以直接問流程需要的人，不必開發者自己去 ping 產品或業務。工作可能發生在公開的地方，那些人一開始就看得到工程師給了什麼產品規格，想補 context 就補。他們自己的 Tag 也可能把事情 ping 過去。

[12:24](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=744s) 另一個差別是更非同步。Claude Code 適合你想在每一輪都在場：它做了什麼、要跟進什麼，你要緊緊掌舵。Tag 更常是長時間的非同步任務，靠的是最近幾代模型解開的能力。你 ping 它，也許兩小時後它把談過的功能從頭做到尾再回來。你可以離開，它做完再來。她說這受 Claude Code 已發布的一些功能啟發，但工作方式變了。

[13:21](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=801s) Simon 想起大約一年前問 Slack 的產品負責人：Slack 會不會變成開發者的新 IDE。開發者愛 IDE。Copilot 把助手放進 IDE，然後是多檔修改、Cursor 這類。Claude Code 打進終端機，又改了工作方式。他覺得下一移需要信任：離開 IDE，因為你不再盯著 code。未來也許信任高到不必看 code。今天在終端機裡，已經更依賴測試和驗證，而不是看 code 或 code review 的結果。再延伸到 Slack，等於再抽象一層。一年前這種從聊天裡驅動的工具不會被接受。現在比較信任 AI 做對的事，也信任生成的 code 可靠，才敢在離 code 更遠的地方用 agent。Slack 和聊天是不是新的 IDE？

[15:23](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=923s) 她不覺得是一對一的替換，各有位置。行為在變，原因之一是模型更好。Agent 能自主跑多久，穩穩地在指數曲線上。METR 的圖大致是每四個月，agent 能自主完成的時間翻倍。那是能力。Simon 問這是模型和 agent 的能力，還是人也在裡面。她說是能力。METR 的研究涵蓋幾個領域，量的是 time horizon：agent 能成功做完多長的任務。不完美，他們也用別的 eval 和 benchmark，但這個寬的指標很貼近跟這些模型互動的感覺。能做更久，常常就是在做更複雜的事：多步驟、在多個階段驗證自己的結果，再成功做完。那條對數圖每次你以為跟不上，它還是直線，已經大約十年。

[17:29](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1049s) 能力不只是跑得久。以前放在 harness 裡的行為，正在嵌進模型。具體地說，模型更會驗證自己的工作。本能上，回來跟你說完成之前會先檢查。若有工具，前端測試、跑測試、或自己做 eval，它們也更會用。信任和這件事一起走：你給驗證的工具，它們自己也更會做。開發者的行為則轉向：你能不能定義這個案子裡成功是什麼。不只寫 code，什麼都一樣。定義清楚就交給模型，它可以 loop，或讓另一個 agent 審，直到審的那個相信做完了。人用這些工具用得很兇已經大約一年，比較知道哪裡真的有用、哪裡要多監督，輸入可以調到兩邊一起好用。所以它不是新的 IDE，而是一個表面，讓 agent 靠近你本來就在做事的地方。需要更多 context 或想委託時，就把 agent 捲進來。有時是寫 code、做功能或 dashboard，有時只是這個縮寫是什麼、上週發生了什麼。你不必在「跟 agent 工作」和「跟團隊工作」之間切 context。

[19:51](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1191s) Simon 說，定義好的樣子若聚焦在 code，會想寫測試，很多人會靠 IDE。若要一起定義好的樣子，人自然會在聊天裡。在那個階段把 agent tag 進來、把「好」的 context 給它，很重要。

## 重寫 codebase 變得做得到；跟不上的是人和基礎設施

[20:36](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1236s) 當天 Tessl 辦公室有 hackathon，大約 100 到 150 人，採用程度差很多，有人剛開始寫 code，有人很久了。她看到的外部用法形狀很多。個人層級是單件工作更快、品質更高。擴到團隊和組織，有很誇張的事。例如 Stripe 把整份 codebase 重寫，本來要幾週或幾個月，變成幾天或幾小時。大家真的上了、這種本來會因為找不到資源而拖幾個月、幾年的計畫，終於做得成，人就可以去做產品和工程的其他部分。也有團隊一個月送出她說的大約一百萬行 code。人真的靠進去時，開發就是這個規模。更多團隊去做本來沒有時間、資源或容量的 moonshot。產品側會先做幾個點子或做法的原型，用工具或在內部測一批，再 all in 在最好的那個。實驗的空間變大，做產品更敢。Claude 這類工具讓快速做出來便宜很多，點子或原型可以很快變成真的在跑的應用。然後的問題是團隊要不要繼續維護。

[23:29](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1409s) Simon 問，變得最快的產業裡，人是不是最慢的那一塊。她最近在幾個歐洲城市跟創辦人社群，愛問誰有 FOMO，覺得自己日常不夠 AI。整間屋子的手都會舉起來，Anthropic 的員工也舉。誰跟得上。Karpathy 的推文說自己從未覺得這麼跟不上。若他都這樣，規模和速度就超過一個人的心智。她說這已經超過一份全職工作，她自己有時還發現公司有她不知道的功能。另一個故事更難：這有沒有變成對人的實際影響。產品和建造者能不能讓交給客戶的價值、以及內部流程的影響，跟上那條指數。原始的智慧在，有沒有基礎設施把它變成價值。那包括 harness、你怎麼管 context 和 memory、怎麼管工具、怎麼把 agent 需要的東西給它，而且要安全。權限是他們設計 Tag 時想很多的問題。還有怎麼代管和部署這些模型、怎麼處理 inference。閃亮的東西很驚人，但每個人該盯緊的是這些問題。紙上看得到價值，要讓人真的感覺到，是更苦的工作。

## 六個表情符號，然後一半的人每週在用

[26:33](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1593s) 內部怎麼做軟體，她從第零天講。Boris 把它當 side project 在做，後來叫 Claude Code。Anthropic 的文化很實驗，人總在做自己的工具。他在 Slack 貼出來時，大約六個 reaction。她說這提醒你資料不完美，沒有完美流程能告訴你什麼是好產品。幾個人看到、很興奮、繼續做。很短的時間裡公司內採用驚人，大約一半的人每週在用。另一個原則是：模型再好一點、能把 coding 任務撐很久之後，採用才真的起飛。早期迭代沒那麼 agentic，比較像拿回一塊一塊的 code。後來才能用不同工具、在 codebase 上做得很有效、壓住很多 context、保持對目標的方向。他們總跟開發的人說：為模型將來會在的地方建造，不要為今天建造，因為動得太快。

[28:22](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1702s) 這是內部 dogfood 的成功。工程師用得這麼廣、價值這麼大，就該產品化。當時大約一半的團隊每週用 Claude Code，對一個新產品來說很誇張。內部的產品市場契合讓他們覺得該更廣地發布。Tag 是同一個故事。發布前，65% 的 PR 由 Tag 提出，它靠在今天的模型能力上，而且已經是日常駕駛。Claude Code 先是工程師靠它很快送出大量 code，然後 Anthropic 所有團隊都 all in。行銷有人早上還在查終端機是什麼、怎麼用，當天結束就把一個要 30 分鐘的流程自動化成 30 秒，並在那段時間做出廣告。每個人都看得到這些工具的力量，也能創造性地對到不是寫 code 的流程。驗證和 context 在那些領域比較難。你沒有整齊的檔案系統、GitHub、版本控制和 unit test，得更有創意。方向仍是定出結果和成功標準，例如一份好文件或好簡報的 rubric。人改變資料怎麼產生、放在哪，讓 agent 更容易拿到。他們故意在 Slack 裡很公開地工作，好讓 agent 把沒有一個人看得到的點連起來。她除非真的私密，否則跟 Tag 的工作都在公開 channel。沒見過面的同事會傳訊說看到她在做某件事，想用、想一起做。這個規模的連結，是因為有這些工具才可能。Simon 說 Tessl 的法務團隊也用 Claude Code 做 app、加 skills、把 skills 放進 Tessl registry。

[32:01](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=1921s) 產品方向有多少來自內部 dogfood。單人看起來很棒的點子和體驗，擴到企業是另一種問題的形狀。Tag 的互動他們很早就知道有效。Anthropic 分享資訊相對慷慨，當然有很強的界線，什麼是團隊的嚴格私密。那些界線設在 Slack workspace 裡。在已知可信任的空間裡，人可以很開放，agent 才表現得好。設計原則之一是每個 channel 的權限做得很小心。Workspace 和 channel 各有權限範圍：能用哪些工具、各服務和 connector 的 API key、還能進哪些 channel。他們想分享讓 agent 工作得好的文化，其中一項是公開工作；同時產品要把 guardrail 烤進去，這樣才擴得進企業。另一個架構改變是 agent identities。和 Claude Code 或 Cowork 的大差別是：那些假設用的是你的權限、你的 API key。Tag 給 agent 自己的權限和 key，它可以自主做，不是代表某一個人，而是代表團隊。稽核容易得多。它是以它自己的身份在做。這是 multiplayer 需要的。團隊會補各種使用者和情境的回饋，同時很多工作是讓它真的擴到企業、讓人拿得到價值。

## Harness 可以變小；Dreaming 是在整理記憶

[35:21](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=2121s) 學習分開發和行為。開發上，為模型要去的地方建造，不是為今天。Claude Code 這邊，每個新模型在某些維度更有能力，他們就很規律地重看 harness，也很樂意刪東西，讓它更簡單、更輕，把重活留給模型。時間一長，harness 變小，因為某些能力可以更信任模型，留下的是 tool use 和它需要的基礎設施。新模型不表示再塞更多 prompt 和更多架構。有時少即是多。

[36:32](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=2192s) 她在 AI Native DevCon 談過 Dreaming。跟新創工作時，很多人問 memory 和 context 的基礎設施，沒有一種尺寸通吃。人會很有創意地設計記憶庫。他們在 managed Agents API 的做法很簡單：一個記憶用的檔案系統，靠 agent 自己讀和寫。過去試過索引過的記憶庫，也試過規定得很細的讀寫工具。問題是對 agent 該怎麼碰記憶太有意見。模型更有能力之後，最好別管，讓它們自己管。它們很會用檔案系統，以及本來的 bash 和 grep。他們拿掉一些抽象，也不再規定記憶結構。索引並不是他們認為普遍的最佳做法，簡單的檔案系統更好。這些仍是開放的研究和開發，以後還會有更多做法。Simon 說，模型和 agent 一變，你給的 context 或 memory 就可能多餘。不必改自己的 code 或 context，也該重跑，看這份東西現在還有沒有價值，會不會只是把 context 撐胖，或這個模型該換一份 skill。她說 applied AI 測新模型時，會看哪些行為還得用 prompt 圍，哪些因為模型更好了可以放鬆。每次發布都會給新模型的最佳做法，也幫客戶遷移。

[40:24](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=2424s) 工程以外，她說整個公司跑在 Claude 的軌道上。過去一年，公司願意委託給 Claude 的工作量翻倍，從大約 30% 到 60%。行銷那個是廣告或文案的 pipeline。Incident response 的基礎設施也在一定程度上靠 Claude 分診、把對的人捲進來，能做的時候開始診斷 code 的問題。不同解法是不同的 agent 配置。業務團隊有每週簡報，Claude 掃每個人那週做了什麼，給統計和 dashboard，開會前就好，沒有人熬那些投影片。那是排程跑的，時間省得很明顯。Incident 則是回應式的，它知道何時跳進去、該多主動。她做產品時會有介面，把對原型的回饋打進去，Claude Code 在背景做。每個人都在做自己的工具。Tag 就是要讓所有團隊都進得去。主動程度可以調：只在被 tag 時回應、排程跑任務、或覺得有相關 context 就主動跳進 thread。從 Claude Code 和 managed agents 學到排程、以及該多主動。最糟的是一個 bot 什麼都回、還附煩人的 context。主動是一條光譜，他們調到它知道哪裡該進、哪裡不該、什麼該排程。團隊也可以掌舵：它做了不合偏好的事，你告訴它，它會更新記憶。

[43:35](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=2615s) Simon 想起 Datadog CEO Olivier Pomel 談過：人凌晨三點因為嚴重事件起來，這還能維持多久，多信任 agent 去做可逆的修復，早上再決定要不要換做法。他想像觀測資料進 Slack，Tag 問要不要開 incident，然後改、寫下它在做什麼、送出。Lamis 說 incident response agent 是他們看到運作得很好的模式。她當過 on-call 工程師，知道凌晨三點 PagerDuty 的恐懼。要做得好，得給好的資料：data warehouse、log 和 metrics，也許還有 repo，它才能開始診斷。這是不錯的起步套件。另一件進了 managed agents 的設計：人和 agent 之間的閘門要放在哪。大規模推出需要一段信任的旅程。一開始可以讓 Claude 試，同時留著原來的流程，用你的成功門檻核對。然後更有信心，委託更多。或它先診斷、把修復交給工程、夠嚴重才叫醒人、或先開一張草稿 PR。內部看到的是事件解得更快。團隊該自己想 Claude 在哪裡要你批准。他們可以建議看過有效的做法，但這是高信任。Simon 以前的筆電貼著 AI works while I sleep，他覺得會突破到 AI fixes production while I sleep。診斷和找根因，agent 會更快更準。停機的損失，有時比人慢慢診斷、找原因、提修復更貴。她寧願被叫醒時聽到：有這起事件，我認為這張 PR 能修，這是我跑過的測試，這是爆炸半徑。就算仍有人的閘門，交過來的資訊也不一樣。她很樂意凌晨三點批准那張 PR。

[48:04](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=2884s) 她幾週前在倫敦的會上講了 Dreaming。紐約的會她說是 2026 年 11 月。Dreaming 是 managed agents 上的 research preview。Managed agents 讓你在正式環境更快建造和部署 agent。Anthropic 這邊接下 harness、一部分基礎設施和可觀察性。他們把做這些 agent 的學習做成具體的 primitive：agent、environment、session，讓你很快組成並部署。Context 這麼重要，所以有記憶。Agent 學到事情時可以對不同的 memory store 讀寫，而且存取管得很緊。有組織層級、很重要、只能讀的 context，也有 agent 放當下工作的 scratch pad。跑久了，記憶會陳舊、過時、缺東西、或寫得很亂。Dreaming 就是你按自己要的節奏跑工作：放進一些 memory store，和 managed agents 的 session transcript，也就是 agent 做了幾件任務的痕跡，交給另一個 agent。它看紀錄和記憶，找不一致。也許缺了 context，agent 會做得更好；也許裡面有誤導、在拉低表現；或只是找到更好的整理方式，讓 agent 更好搜、更好浮出來。它給修改的假設，附上它認為有證據的那些 session，你決定實作哪些。這條路是 continual learning：今天跑，依可以最佳化的地方，明天再跑，看到它們變好。很大程度可以自動化，你再批准覺得相關的。客戶跑這種流程之後，部署出去的 agent 表現好很多。她的那場演講在線上。

## 從每日簡報開始

[52:05](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=3125s) 想把 agent 和工作流再推進組織的人，她鼓勵去裝 Claude Tag。請 Slack 管理員打開、做一點設定，不會很久。她第一個設的是每日簡報。因為 connector 和 context，它能講過去 24 小時的事。跟國際團隊工作時，舊金山的人做了什麼會直接浮出來，不必醒來面對一牆 email 和 Slack。它也知道她進行中的流程，例如這場演講之前也許該看哪些文件。另一個是它知道哪些 channel 對她重要，有緊急、跟她相關的事就即時 ping。公司公開工作很好，但 Slack 上太多，她看不完。團隊層級，Tag 做各種每週報告。Applied AI team 有一份：這週團隊學到的不同事情。這鼓勵人繼續分享 context，把知識在組織裡放大。最後還可以叫 Tag 做客製軟體，部署進她說的 Claude Code artifacts，當成個人 dashboard，或跟團隊分享，用來追某條流程。

[54:36](https://www.youtube.com/watch?v=7Ue0yM4J-B8&t=3276s) Simon 說自己麻煩在回顧和 check-in。他做了一個 app，看 Slack、email、Todoist，也看會議的 Granola 筆記，補上待辦，像一個 EA。每週、每月回顧和每日 check-in 很改變生產力。她還喜歡叫 agent 說你這週做得好的三件事、可以最佳化的地方，因為 AI 的世界發生得太快，人不一定有時間反省。Simon 也把剛做完的年度回饋放進去，以及管理團隊希望他做的事，讓它依他實際在做的給回饋：有沒有在走下一步，團隊需要的他有沒有做。
