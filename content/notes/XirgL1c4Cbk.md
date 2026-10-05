# Categorizing the AI Developer Tooling Landscape with Amir Shevat. #Copilot #Tabnine #CodeCompletion

AI Native Dev，由 Tessl 製作（片頭字幕聽成 Tesla）。片長約 48 分鐘，英文自動字幕。來賓 Amir Shevat（字幕聽成 shvat）。主持人沒有在字幕裡留下名字，他說上一集跟 Guy 提過 Amir。這一集不給解法，先把 AI 開發工具分成幾類，之後再逐類深挖。第一個要挖的是 code completion，下一集會找 Tabnine 的人。聽眾可以寫到 podcast 信箱，字幕聽成 T.io，或在 Twitter 上說缺了哪一類。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=XirgL1c4Cbk)

## 一句話

Amir 整段職涯都在 developer tools。他要聽眾先問痛在哪、哪件事每天在耗心神，再決定把 AI 裝在那裡。他們挑了五類深談：code completion、測試生成、文件、DevOps、監控和除錯。人還是比較會懂人要什麼，把大問題拆小，做成 spec 或架構，讓 AI 去生 code、測試和文件。任務愈小、定義愈清楚，結果愈可預期。愈靠近生產，需要的信任和意見就愈多。

## 先承認鏟子太多

[1:21](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=81s) 他有一套固定自我介紹，聽過一次就會覺得重複。大約一年前「轉向黑暗面」，做投資。之前大約 35 筆 angel，然後認真投資 developer tools。他說自己是 one-trick pony。Microsoft 從 .NET 那個時代開始（字幕說 net）。Google 做過 Chrome、Cloud、Android，以及新創計畫。加入 Slack 時，平台上線前兩週，離開時每週活躍開發者 25 萬。Twitch 很有趣，把串流平台和遊戲開發者接起來，他點了 Riot、Blizzard、EA。自己的新創 Reshuffle 被 Twitter 收購，Jack Dorsey 買下，後來 Elon 把 API 關了。他相信對開發者開放的平台和 API。

[3:29](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=209s) 現在做鎬和鏟子的人太多，這個幫你、那個也幫你。寫 code 的人要知道自己最大的難處在哪，哪件日常不想做、可以卸給工具，才比較有生產力。從企業到小新創都在用 AI 開發，那是優勢，但你得選優勢要放在哪。分類讓人能說：這些先做，那些認得出來、以後再投，要有策略。他們腦力激盪過很多類，這一集只挑主要的。歡迎聽眾說該合併，或漏了什麼。他當工程師的看法是：痛最大的地方、重複而不創造的地方，就是這一集要跟的類。

## Code completion：有自己的寫法，業務邏輯仍在你腦子裡

[5:39](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=339s) 他跟開發者聊，用得最多的 AI 是 code completion。Copilot，還有 Tabnine，他是投資人（字幕聽成 tab n、tab 9）。嵌在 IDE 裡，是以前 tab 補完、以及重構的延伸。他寫 Java 時，語言很囉嗦，IDE 懂你重構時要動什麼。他把這看成那件事的演進。大量 blueprint、table stakes 的 code 由 AI 做，你做微調、檢查，以及只存在你腦子裡的業務邏輯。

有人覺得省下很多時間，或在空頁上學會不熟的 API，工具告訴你下一行該寫什麼。也有人說它總用自己不喜歡的方式、另一種風格。他認為 AI 會變得更個人化。若你什麼都要手工，你不會喜歡它產出的東西。很難用你一個人當資料，寫出你的樣子。它會有自己有意見的寫法。Tabnine 意見少一點，用公司的資料集訓練，比較貼公司的最佳實務。Copilot 更像通用資料集，GitHub 上的 code。也許以後 Copilot 會懂你怎麼寫、拿你當訓練集，但那個集合比較小，不會準到跟你想寫的一樣。

[8:36](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=516s) Tabnine 有離線模式：把 model 下載下來，在自己的環境跑。火車上、飛機上、或他說的洞穴裡，仍能用。Amazon CodeWhisperer 若你在用 AWS services，特別會把你往那些 API 拉。

主持人把 AI assisted 和 AI native 分開。前者是同一套流程裡讓你更快。後者是因為把 AI 放在核心，工作方式要改。寫一行、一個函式、一段 snippet，還是一個 module，兩邊都靠得上。Amir 說有些類會更走向 agent：從 assistant、co-pilot，到 autopilot。測試這類事，你想要的不只是幫忙，而是把整件事拿走。開發者把任務卸出去，做事的方式就變了。這些 co-pilot 住在 IDE 裡，因為它們不改變你的一天。走向協作之後，會需要他說的 synthetic humans。Product Hunt 的 Ryan Hoover 造了這個詞：工程團隊裡，做人類不想做的無聊事的合成人。這一類幾乎都是為此事新做的工具，不是把舊工具改個用途。

## 測試不會膩，但不會說你的登入很難用

[11:37](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=697s) 下一類他很有感覺，因為他是在 test-driven development 那個階段寫 code 的。AI 能幫你生測試：效能、penetration testing，以及 code 有沒有達到測試標準。他說 Codium 走在前面，很多開發者在用。另一家是他投資的，字幕聽成 heel：black-box。你做好網站，給它一個 dev URL。測試者不看 codebase，按按鈕，看哪裡不夠快、登入流程、輸入的邊界。做過測試的人知道這很難。工程師常對該寫的測試是盲的，因為 code 是為某一組功能寫的。放到真實世界，大家用它、甚至濫用它的方式，和你想的不一樣。AI 可以看輸入的各種排列，從 pen testing 到 unit tests。這塊又無聊又瑣碎，正是 AI 有用的地方。

主持人說，code completion 讓人怕工作被拿走。測試不一樣。除了把 TDD 當呼吸的人，測試常常被擠掉，或只測 golden path，邊界沒蓋到。AI 不懶，可以做透。Amir 用產品負責人的經驗補：最重要的流程常常沒被測，就是 onboarding。開發者做完網站，登入一次就不用再登。測自己的 SaaS 時，不會每天再走一遍 onboarding。流程壞了、不舒服、新瀏覽器有新標準對不上，開發者幾乎總是盲的。每天重走很煩，他不認識想做這件事的開發者。AI 不會膩。

[15:55](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=955s) 反方是 false positive。主持人以前做安全，那是開發者的痛。成熟度夠不夠，會不會只是製造挫折。Amir 聽到的是還算有用，因為它不是把每種排列都自動生出來。它比較知道這類 code 上跑過什麼測試，就在那個區域生。你要看的是它有沒有做完、蓋不蓋得住你要的 use case。false positive 一定會有。另一個反方：開發者不用自己的 code 去試，就不會對客戶有熱情。SDK 可以測試全過，體驗仍然很差。他舉 OAuth（字幕聽成 your o）要 15 個參數，沒人想用。AI 大概不會說你的 login 因為 15 個參數而很糟。所以就算有這些測試，他仍鼓勵 dogfood，用自己的 code，看對客戶是不是愉悅。主持人把這收成：在乎的是 use case 的覆蓋，不是行數和分支，那些讓工具去算。API 可以測試全過，仍然建構得很差。手藝要好、要讓人愉悅、開發者之間的服務要接得上。自動化測試還沒到能保證百分之百愉悅，那仍是人的工作。

## 文件接近八成是過期的，人留下「人要什麼」

[18:53](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=1133s) 他以前愛寫文件，現在自認是懶的開發者，不愛了。第一次寫可能興奮，人也寫得好。然後你或別人改了一小處，文件該更新。任何待過企業的人都知道，文件有 20% 到 80% 是過期的，比較接近 80%：還沒寫、缺了、大塊不在。AI 的價值在兩個方向：我要懂 code，以及我要向別人解釋 code。

主持人說，測試、文件和 code 是三條活的流，不一起更新就會岔開。測試會爆，因為它可以測正也可以測負，但新功能有沒有新測試是另一件事。文件也一樣。若寫了文件，測試的 AI 讀懂你要它造什麼，再依那個脈絡生測試，工具彼此接上之後，開發體驗會好很多。

[20:52](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=1252s) 使用者文件和 code 文件放在同一類。一邊是 Swimm（字幕聽成 swim）：code 的可解釋性。這段是誰的、歷史、跟別的 code 怎麼互動。幫人 onboard 到新 codebase、訓練別人。另一邊是向非技術的人解釋：產品是什麼、怎麼設定、有哪些選項、一個流程怎麼走。那是 technical writing。通常有人跟著 git 和 Jira 的變更。跟 SDK 或 API 有關時，常常是 developer relations，然後更新客戶文件、網站上的 code，一直到給 sales 和 marketing。這裡 AI 可以變成 documentation as a service。另一家字幕聽成 Tata，在看什麼事件該觸發文件改動：source control、Jira、Slack，然後改網站和其他地方。

兩邊的意圖不同。一邊是使用者：我要用你的 API 做什麼、怎麼用，不在乎實作。另一邊是讓開發者從架構和實作看懂 code 怎麼流。主持人喜歡從文件開始，文件寫測試，測試再寫 code。角色會不會從 code 倒向測試和文件，實作就讓 AI 發生。Amir 把工程師的工作拿掉會議那些之後，剩下的是蒸餾業務邏輯：大問題拆小，更複雜的給 senior，較小的給 junior，把人要的（那是 PM，應用該有什麼）接成 code 實際怎麼做。人遠比 AI 懂人要什麼，然後做成 spec、架構，或某種新的產物。AI 再把它變成 code、一組測試、一套技術文件。人會強在懂客戶要什麼，以及做出能讓 AI 生成其餘東西的資產。把自己想成 AI agents 的經理，這個 agent 做這件，那個做那件。至少現在，AI 不擅長清楚理解人要什麼，再拆成任務和能力。信任、以及我們願意給流程的自主程度，也還沒到能跑完那條流。他跟開發者談，任務愈小、定義愈清楚，AI 愈好、愈可預期、亂生的東西愈少。他不喜歡 hallucination 這個詞，覺得技術上不對，以後可以再挖。

文件的成熟度，他覺得正打在 AI 的強項上。AI 比他認識的多數工程師更會寫字，而不是只會寫 code。對客戶和對 customer success，語氣可以不一樣。工程師不想做的那些資產，AI 可以生很多。他對未來由 AI 寫文件很樂觀。能依讀者調整層級，是這一行一直做不好的事。

## DevOps 是一筆稅，自我修復以前就有，泛用還沒有

[28:11](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=1691s) 第四類是 DevOps。曾經 shift left，有 SRE，GitHub 試過推 ChatOps。想法是不要有專責團隊跑你的 code，責任移回寫出那段 code 的工程團隊。Twitter 大多就是這樣：login 那個團隊負責 login 服務對其他服務是起來的。問題是你需要的知識不在寫 code 周圍。AWS、Google、Azure、大量設定、跑可擴充系統的複雜度。工程師已經抱怨，而且抱怨得有理，大部分時間在開會、寫文件、測試，現在還要維護、把 code 跑起來、半夜當機時醒來。若 AI 能做呢。這件事多數開發者不想做，相當重複、相當瑣碎。

他最近看到一家叫 resolved 的，很有趣。叫開發者示範你實際上怎麼部署到生產，它就做出可重複的 playbook。問任何開發者：一件事做超過兩次，就該寫腳本。resolved 抓住你部署到雲端的方式，下次要部署就生成 runbook，並且知道怎麼自動跑。他說這很棒。他的夢還沒看到有人給他：寫完 code 就自動跑起來。部署到 source control，甚至先在自己電腦跑，然後告訴 AI：讓它在雲端跑。該擴充就擴充，不該就不要。安全與合規問我幾個問題，然後跑這段 code 是你的工作。他覺得不遠，但還沒看到那個解。他不想做 DevOps。對做這行的人這是有趣的職業，對他這個工程師，DevOps 是不得不付的稅。他想專注在 code。CI/CD 一結束他就什麼都不必做，AI 接手，半夜醒來的是 AI。主持人說，幸好它已經醒著。

[31:55](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=1915s) 愈靠近生產，需要的信任愈高。叫它寫測試、寫 code，中間還有幾道閘可以驗證。再往右推，九成很好，一成把生產打下來，或讓一些服務不可用，怎麼辦。這比較是人的問題。關鍵是：要把 DevOps 做對，你得有多強的意見。十五年前他在 Google，有 Borg，談的是自我修復。工程師部署了不夠好的東西，Borg 自己把它滾回去。會自我修復、會從壞變更回滾的雲，他們很早以前就有。關鍵是 Google 極其有意見：要用 Google 的框架、Google 的部署結構、很多護欄。把這個問題泛化到每家公司、每種做法、每種意見、每種語言，很難，到現在還不可行。也許用 AI、資料集用得夠好，可以做出一個 DevOps agent，信任你的環境、資料庫、語言、使用模式是 B2B 還是 B2C、你會看到哪種攻擊。正在靠近，還沒到。

工作負載決定你想有多有意見。做網站，他不在乎語言，也許在乎 React 還是 Vue（字幕聽成 view），不在乎 UI 框架的細節，或單頁和伺服器之間傳什麼參數。他只要一個頁面，行銷用途就好看。他想跟 ChatGPT 說：做一個網站，部署上去，這是我的網域，把 DevOps 那些 DNS 魔術做完。Wix 這類公司在試。那是很輕的負載。若是伺服器對伺服器、很複雜、吞吐量很高、API 很有意見，例如重做 Stripe 的 API，他就要非常有意見。愈複雜、愈是任務關鍵，你愈想理解得深。多數開發者不知道、也不在乎 UDP 和 TCP 的差別，只想讓資訊從一台電腦到另一台。很硬核的人則非常有意見。任務本身定義你要有多有意見。

## 監控還早，其餘的類往 autopilot 走

[37:14](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=2234s) 第五類是監控和除錯，比較回到 co-pilot 的時代：code 寫了、部署了，想知道它跑得怎樣、哪裡錯。這類工具很久以前就有。Digma 看生產裡的資料，拉回 IDE。AI 也能幫。他看到 Second（字幕聽成 second dodev）有趣，幫你維護 code，也做遷移，從舊的 code set 到新的。寫完之後要確認它跑得不錯、不對的時候除錯、再用維護把它改好。這些未來都會有 AI 幫忙。

和 code completion 不一樣。那邊幾乎全是新工具、新公司，或既有公司的新工具。監控已經很擠。會看到很多既有監控方案加上 AI，也還有新創的空間。到目前為止，自動和半自動的除錯、監控很多。AI 可以把那些模式當訓練集，看正常的一天長什麼樣，再告訴你這不規則。看流量，懂什麼是好的一天，也許看過一整年：聖誕節購物的人變多，那不是 DoS，是真人。訓練夠、資料夠，它知道標出不規則的事。監控的 false positive 很多。AI 要學會什麼真的是監控事件。他不確定那是不是 LLM，但一定是大資料問題。這一塊的 AI 工具比較不成熟，還需要再長。既有廠商在創新。他覺得現在的痛在開發、測試、文件。除錯和監控會有很多創新，但會等我們對 AI 更信任之後。

[41:03](https://www.youtube.com/watch?v=XirgL1c4Cbk&t=2463s) 五類深談結束。剩下的是子集，不是全集，歡迎社群補。CI/CD 在 AI 裡長什麼樣，更好的開發流程、分派、做 PR。他看到一家叫 pseudo 的在這個區域。AI code explainer 他們覺得機會大：更好地讀 code、更輕易地改。效能工具，一家叫 Codeflash（字幕聽成 code FL、code flash）。他十年前花六個月讓一段 Java 更快，前三個月有趣，之後一段一段改就很痛、很花時間。AI 也許能幫，而且這是資料很重的空間，適合找異常。還有給安全的 AI、給 UX 的 AI。他是後端，完全不懂使用者體驗，也許有 AI 能幫他做好看的前端。

Code review：在 Slack，他們最好的工程師之一很會審 code。他們看他的 review，做了一個 AI bot 複製他，每次做他會做的那些檢查。主持人說，有了解釋、測試、文件，review 應該容易很多，而且解釋得好。Amir 想看到一個 code reviewer。資料管理也是一類：資料庫、本地儲存、S3，任何資料。

最後是 autonomous agents。Devin 的影片曾經把網際網路炸了一陣子（字幕聽成 Devon）。那也許是這行的使命：做出能寫 code 的 agents，也許現在還只是夢。方向是從 co-pilot 到 autopilot。Devin 是不是真的、多有用，陪審團還沒回來。他認為至少有些任務會被這個初級的 AI 開發者朋友自動化。人類和 AI 工程師組成的團隊，一起完成一件事。

主持人推薦 CrewAI，他用過不少。字幕說那是一家 bold start 的公司。你可以組一隊 agents，每個有自己的背景故事，可以是開發者、code reviewer、各種背景，各自有任務，用不同方式看事情。拆小、每個 agent 雷射般只做一件特定的小事，其實相當好。串起來，比到一個普通的 GPT 問一句很泛的問題、吐一個答案，強得多。Amir 也喜歡 CrewAI。他再補 Codeflash：每個團隊裡那個脾氣不好的老人，負責大家的效能，說這段 code 很好，但改幾處會快很多。他以前有那樣的人，後來自己變成那樣的人。Codeflash 看 code、生測試，然後像那個 synthetic human 一樣開 PR，把 code 改好。往前走，會看到 agents 的不同面向。

這一集是進行中的分類。下一集先挖 code completion，會跟 Tabnine 的人談。
