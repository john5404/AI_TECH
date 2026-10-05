# Ian Thomas - AI Native Engineering - AI Native DevCon June 2026

Ian Thomas，Meta 的軟體工程師，人在英國 Yorkshire，遠端工作。這段案例來自他在 Reality Labs 的 Horizon Experiences。片長約 31 分 35 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。開場的人說，他是在紐約 QCon AI 認識 Ian 的。

- 原片：[YouTube](https://www.youtube.com/watch?v=NVzKtCSeoRA)

## 一句話

領導要把工程師花在 toil 上的時間從大約 50% 降到 5% 以下。真正讓採用長出來的，不是一紙命令，而是一小群願意失敗的人、一套團隊自己跑的成熟度模型，以及先從 bug、測試、重構這種控得住的工作下手。週使用率從不到一半，走到他離開時遠超過 80%，他現在看到的是九成中後段。

## 先打營運，不先打全新的產品探索

[1:06](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=66s) 過去十二個月，Horizon Experiences 從幾乎不會用 AI 工具，走到很多工作流、工程內外都在用。中間有一段人在拖。他現在在 Meta 的 risk team，做 transparency and choice 的 tech lead。之前兩三年在 Horizon：協作式 3D VR 的 Workrooms，後來是 Horizon Worlds。

[1:52](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=112s) 領導的願景是讓工程師離開營運、toil、沒有差異的重活，回到探索和創新。他們估計 toil 大約佔工程師時間的 50%，想降到 5% 以下，把時間放回產品。他介入時是 2025 年年中，多數工作仍是手動，on call 和 bug 佔掉大量產能。

[2:55](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=175s) 大家都知道工具會改變工程，但採用不均、充其量是隨興。結果品質差，工具和問題配錯，流程也不一樣。成功鎖在小團隊裡。人看不到時間投進去的回報。

[3:41](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=221s) 他先講結果。社群有機長到開始時的 40 倍以上。他停手時是今年一月，遠超過 500 人。每週使用從不到一半，到遠超過 80%。他說現在穩定落在九成的中後段。某些工作流的時間收益很明顯。他們做出成熟度模型，也把實驗出來的模式從小小的成功圈推到公司裡。

[5:20](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=320s) 他們不先碰功能開發和產品探索，因為那本身就是新流程，變數太多。控得住的是 code modernization 和行政性工作。規模是問題：他進公司時，Hack 已經有五億行，全在一個 repo。圖上 Haskell 那條細縫仍有五十萬行。他當時的區塊是 C++ 和 C#，平台基於 Unity。所以起點是 bug 和營運負擔：AI 怎麼幫 engineering excellence。那件事有三塊：implementation quality、production excellence、better engineering。實作品質每天都重要。有意思的是事件回應、服務和 bug，以及怎麼做內部工具和做法，讓所有人變快。

## 由下往上的社群，比儀表板先存在

[7:38](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=458s) 他用那張組織結構的 meme。Microsoft、Amazon、Apple 他沒待過，但 Facebook、現在的 Meta，那張圖他覺得是真的：事情靠把人帶上路。工程採用沒有真正的由上而下。要的是由下而上、有證據。Engineering excellence 已經有一小群想讓自己和 codebase 變好的人，剛好拿來讓 AI 採用順一點。

[8:26](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=506s) 帶這件事的人少，會把它當成自己團隊的挑戰。小社群裡可以失敗、可以問，不必擔心 performance review。需求可以講得很具體，摩擦少，決定快。核心先對齊，再靠口碑長大。公司文化很在乎 impact，人容易去量好量的東西。他們反而先顧社群裡難量的部分：歸屬感。沒有儀表板能顯示多少人覺得自己屬於這裡。這是請人跳一下。他們同意 AI 會永久改變每天的工作，不是用一用就換下一個工具。

## 六個維度，每三到四週自己評一次

[10:32](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=632s) 大約去年八月，小組裡的模式和外面的世界對上了。他們用 DORA 的研究加上自己的經驗，做成熟度模型，讓團隊知道自己在採用曲線的哪裡、自己的情境該怎麼用工具。六個維度，他口頭點到的包括 workflow integration、prompting 好不好、prompt 和資訊怎麼在團隊裡分享、個人的生產力能不能分享、團隊層級有沒有變好、哪個 use case 有槓桿、哪個還很吃力。等級有五層，工程師習慣，所以從 0 編到 leap。維度大致獨立，可以分頭補。Workflow integration 這一軸，從「知道有工具但不用」，到「跨很多流程接好了，自認 AI native」。投影片很小，他請人拍照，字幕沒有把整張表念完。

[12:56](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=776s) 模型本身不夠，要用它推動團隊對話。他們會協助第一次，講每個面向是什麼意思，然後每三到四週再跑，回饋進度。因為是團隊自己的，缺口和做法都不一樣。沒有量測時，模型讓人看見：試過的東西有沒有嵌進流程、某種 prompting 有沒有價值、哪個工具會多用。

[14:12](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=852s) 形式很簡單，像 kaizen retro。先講描述，人在 Miro 這類白板匿名投票，重點是討論。預留 20 到 30 分鐘，常常超過 45 分鐘。Meta 內部的 Workplace 就是內部版 Facebook。每次評估都把結果和洞察貼出去，別的團隊看得到，網路效應才起來。

[15:01](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=901s) 幾乎每場 workshop 都冒出：code 能不能信。資深工程師猶豫，是因為想自己掌控、想保留手藝。這告訴領導群該做橫切的改善。測試就是一個。AI 很會幻覺出看起來有用、其實沒有的爛測試，CI 負擔上升。他們做了 anti-test-slop：在 CI 上用另一個 AI 工具，自主判斷這些變更的品質。這件事從 Horizon 長出來，Test Slop 的工具後來被 infra 採用，推到全公司。他說到現在，只要 diff 裡有顯著份量的 AI 生成測試，幾乎都會跑。

[16:29](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=989s) 動能起來之後，由上而下的支持才進來。領導看見了，把它從本地團隊打開到整個 metaverse 組織。他覺得這是臨界質量：夠多人知道、夠多人分享，數字就自己長。

## 四個把時間做出來的例子

[17:20](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1040s) VR 的測試本來就痛。要 headset、裝置實驗室、多使用者，難寫也難維護。工程師 Balraj 找出現有儀表和表：哪些檔沒被覆蓋，以及這些檔怎麼被改、是不是產品關鍵變更的熱點。他教 agent 去找資料、評估、排出該補測試的優先順序。大約三小時，做完他平常要半週的事。這是早期採用者，別人可能沒這麼快，但模式可重複。那些表覆蓋的是 Meta 生態裡的很多檔，不只 Horizon。這一輪最初的努力，將近 60 個 diff 被 merge。

[19:13](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1153s) VR 開發多半在很強的 Windows 機器上，大 GPU，一人一兩台，很多事只能單線做。重構要盯很底層的舊模式，風險高，沒人當好玩。有工程師把自己怎麼想重構教給 AI，再去找 codebase 裡相似的模式。時間大約砍半。他找到多個能重用的區域，讓 agent 以團隊的方式平行做，自己改當 reviewer 和架構上的監督，避免系統被改成不想要的樣子。

[20:47](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1247s) 另一個人問：機器真正要渲染的是什麼，什麼事其實不需要那台巨大 GPU。若給模型更好的 context，能不能在比較標準、隨需的環境裡做。結果是一個 MCP server，橋接 Horizon Worlds 背後的資料：世界狀態、東西怎麼被建出來、model、texture。模型因此知道 Horizon 怎麼運作，可以在多個隨需環境裡各自做，Windows PC 這道牆就去掉了。平行之外，輸出品質也上去。

[22:04](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1324s) Meta 有很強的 code mod 基礎設施，infra 在試把 agent 接進去。2023 年那五億行 Hack 之後只會更大。很多 code quality 問題，不自動化就不值得找。他們給 AI 的規則和 runbook 看起來就像 skills 或 context 檔。它不斷跑：找到、修好、送出 diff、等人 review。當時自主生出 30 個 diff，他覺得這個數字偏低，現在他有把握高了好幾個數量級。那只是開始。人從全程監督，變成事後大體上無人監督的 review。

[23:18](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1398s) 這些贏的共同點：問題定義清楚，不是散彈打。願景釘在 engineering excellence。盡量用全公司都會用的共用工具，一個人改好，其他人受益。人的監督先留著；太早全無人監督，他覺得會失敗。再加上多年 agile 的迭代、開放、分享。這些用商業工具就做得到，不是 Meta 內部才有。

## 平台還在，虛榮指標則不算

[24:16](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1456s) Code 只是交付的一段。若要 AI native，得從想法到 production 整條看。他事後覺得真正有差的，是底下對 platform engineering 的投資。畫面上那些工具接的是既有平台，有入口，才能相對快地接到全公司工程師。這不是小工程，到現在還在還本。就算 AI 讓人變少，他仍認為要能集體做更多，不只個人變快。

[25:30](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1530s) 底下還有 Confucius：大家在上面做很專的 agent。他在紐約跟 Simon 講過這場之後，花了很多時間做維護模式的 agent。它們看 diff、依已知條件標旗、找核准訊號，決定可以過或要退回。這不是硬塞，因為他們正在把產品從舊版 Horizon engine 遷到新版，想把人花在舊產品上的時間壓到最低。共用工具上的客製 agent，讓這類無人監督很快鋪開。另一個他稱為 doctors 的東西跑在公司每一個 diff 上，依這次變更有多可能造成事故給風險分。從「太險，先別做」到「看起來不險，盡快進 production」，而且會隨時間變準。

[27:09](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1629s) 有用的是從小開始、接上既有工作方式、由工程師往上長。由上而下的命令，在他待過的大公司裡都不怎麼成功。還沒證明的是：code review 會變成什麼、變快之後會不會在別處造出新瓶頸（他說 theory of constraints 這裡適用）、以及九、十二、三年之後的成本。大量快速生出來、人不需要懂的 code，他開始看到人跟 code 的擁有感在退後，因為 context window 變大、餵得進更多資訊。長期品質仍有人盯著。

[28:38](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1718s) 他們一度迷每週多少人用工具、生了多少 diff、agent 寫了多少行。他現在叫這些 vanity metrics。Token 用量只說明有人在用，不證明創造了價值。怎麼量生產力和增益，他覺得還在結果。完全自主他們當時排除了，不覺得現實；可以做的是選哪些工作流適合無人監督、哪些仍要人看。

[29:31](https://www.youtube.com/watch?v=NVzKtCSeoRA&t=1771s) 他留下的策略是：允許失敗和分享，不要懲罰，繩子放長，但先做風險較低的，例如內部工具和測試。由下往上才有可信度；到了一定質量，仍需要領導說這件事大家該站在後面。品質要守，教育要持續，把做成功的例子亮出來。想跟著做，找兩三個人就開始，不必先申請許可。先把成熟度模型和 workshop 擺上，讓人自己找到缺口，先打小目標。願景他認為仍成立：把 toil 卸給 AI，人把時間放在只有人做得到的事上。
