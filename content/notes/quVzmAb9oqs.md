# Every Repo Is a Software Factory Now | Don Syme, GitHub

Guy Podjarny 訪問 GitHub 的 principal researcher Don Syme。他長期做程式語言，大量貢獻開源，做過 F#。片長 64 分 35 秒，英文手寫字幕。他在最近的 AI Native DevCon 講過，也是倫敦社群的一份子。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=quVzmAb9oqs)

## 一句話

Continuous AI 要補的是聊天和個人生產力旁邊的盲點：協作、自動化，以及放在某個情境裡的自動化。它跟 CI、CD 相鄰，不放進 CI。Agent 是容易的部分。要能晚上睡著，靠的是把 context 圈住、把護欄做成軌道，以及人仍然站在合併那一點。Don 說工廠創造者的工作，是交出高品質的 pull request，並且把審查者裝備好。

## 主觀的事也要連續做，但不能弄髒 CI

[3:52](https://www.youtube.com/watch?v=quVzmAb9oqs&t=232s) AI 產業的盲點是太集中在聊天、個人生產力。ChatGPT 爆開之後，增強都繞著那個模態。缺的觀點是協作、自動化，以及 situated automation。去年在 GitHub 他們看已經有的 situated automation：CI 裡的 continuous integration、continuous deployment，以及人們還想用連續方式做的一整排事。軟體業的變更通常發生在 repository，也可能是組織或很多 repo。Continuous 的意思是不斷把變更、事件和差異折進去，並且一再重建關鍵的不變量：軟體真的能跑，或部署是對的。CI/CD 在乎的是決定性、一切要恰好正確、重複、堅持它一定發生。現在多了一桶主觀的事：持續改進效能、持續修 bug、持續分診、讓每個 issue 依某個 schema 標對、持續找重複的 bug。每一件都可以做一次，但最後都得放在變更的情境裡，變成永久在跑的營運。人很容易停在「我能在 repo 裡找到重複 bug」，卻沒有把它變成持續的。所以他們把 CI/CD 配上 continuous AI。關鍵是 continuous，也是主觀的，並且用 AI 實作。這個詞放出去之後有共鳴，因為別人沒在談這件事。

[7:33](https://www.youtube.com/watch?v=quVzmAb9oqs&t=453s) Guy 聽到兩條路。一是從單人到多人，再自然織進自動化。AI 有 jagged edge，有時好得驚人，有時不是。很難事先知道哪一刻要人介入、下判斷，那是擴展的阻擋。這像 continuous integration 之前：有人手動跑，也有很多自製的自動化，PR 要跑過組織的 gauntlet，後來收成 GitHub Actions 和其他 CI/CD。AI 工作流現在也有很多自製，該收成有系統的想法和做法。另一條是重複做，從自製收到 CI/CD 那種基礎設施，但擴到 AI 現在做得到、本質上比較不決定性的動作。於是還要定義怎麼追蹤：什麼叫失敗的 build、什麼叫成功、怎麼繼續。這些都收在 continuous AI 裡。

[9:42](https://www.youtube.com/watch?v=quVzmAb9oqs&t=582s) 另一個關鍵是把 context 圈住，也把自動化裡可能發生的事圈住。談自動化 AI 的對話，若沒有真的坐在一個有界的情境裡，常常會脫軌。我們在這個 repository 裡、要這些特定結果：每次跑可以開一張 pull request，或一張 issue。每次只拿這幾種輸入，別的都沒有。外面有一道防火牆。人已經很熟 CI/CD，很多人用 GitHub Actions，所以這是自然的起點：我們已經一起在做了，現在把一些由 AI 驅動、主觀的部分也自動化。這對很多人反直覺。CI/CD 是他們的決定性，不想讓 AI 靠近。Don 一個朋友說那是大人在的地方，真正確立系統如它所是地能運作。很多人的 CI/CD 已經有一堆問題。團隊的重心是把不變量立在那裡、拿到綠勾。他們什麼都用它，因為太有用。把標籤、issue 分診或修 bug 這種主觀活動加進去，會讓人不安。所以他們不說把 AI 放進你的 CI。CI/CD 維持原樣。Continuous AI 是另一桶。你可以完全不做，也可以做很多，自己調。不能拿行銷去動 CI/CD 的核心，以及它在產業裡有多關鍵。品質是在那裡確立的，他們希望人在那裡加碼。

[12:21](https://www.youtube.com/watch?v=quVzmAb9oqs&t=741s) Guy 覺得定義 context 很像 CI/CD 裡的環境：從 works on my machine 變成被定義的東西，continuous deployment 定義的是正式環境。Context 也許會變得很複雜，但像一種新的環境變數。他自己的演講把棧寫成 models、tools、skills、harnesses，harness 上面很難命名，他寫了 factory line。Loop 這個詞大約下一週就流行了。他問這些是不是同一件事的不同說法。Don 覺得有些對話是正交的。他最在意的轉移，是從個人生產力，到更連續、屬於團隊、嵌進某個具體 context。Loop engineering 可以全部用在 continuous AI 裡。紀錄的帳本可能不同：他們通常用 repository、issue 和 pull request，也許再加一些東西；你若在自己的開發機上做 loop，帳本可能是另一種。概念可以很自由地流過去。個人生產力那邊，下一層叫什麼，概念上很競爭。他說那不是他們在做的，他們在另一邊。把好想法帶過來，重新想 loop 在這裡是什麼意思。

## 一天一張 PR 的慢迴圈，以及已經公開預覽的工作流

[15:21](https://www.youtube.com/watch?v=quVzmAb9oqs&t=921s) 例子是 continuous goal traces。一天一次，朝某個定義好的目標前進一點。每天得到一張朝那個目標的 pull request，你把它合進去；下一張也許要等前一張做完。它像 loop，因為朝目標重複開 PR，但是一個合作的、動作很慢的 loop。企業可能正好想要這個，用來一點一點啃產品裡一大堆無障礙 bug。團隊有每天改進的節奏，目標可量，經理看得懂發生什麼。若是個人的 loop engineering，開發者說我修了一千個無障礙 bug、這裡有一千張 PR，請大家放下手上的事來審，那就打亂團隊怎麼一起工作。慢下來，節奏可以不一樣。

[16:50](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1010s) Guy 仍覺得有兩件事。一是 pipeline：一種輸入進得來、處理完、以可重複的方式得到某種水準的輸出。另一件才比較像他說的 loop：一遍遍看它怎麼做，再改進，一條會自我改進的 pipeline。CI/CD 上也可以加 loop。他們用 test agent 修 flaky tests：那不一定是一條自己的 pipeline，而是找出 CI/CD 的失敗並修掉。Factory 這個詞還可以爭，因為還有主動發起，例如一個 bug 被回報，那是事件驅動。他問 GitHub 的產品蓋的是哪一塊。

[18:44](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1124s) GitHub Agentic Workflows 已經 public preview，是 GitHub 產品線的一部分。他把它想成 GitHub 上的智慧自動化。具體地說，是把你熟的 coding agent，Claude Code、Copilot CLI、Gemini CLI 這類，配上很強的 guardrail，在 GitHub Actions 裡、以自動化的方式跑。不把你綁死在 Copilot。Copilot 是很好的 coding agent，但你可以選 agent、選 model、帶自己的 key。它也是開源的，可以看它怎麼運作。Guardrail 是關鍵。軌道愈強，自動化就能跑愈快。很多人在自動化、在 continuous AI 裡漏了這件事。你得能在不在場的時候讓它跑、回應，並且信任它。完整性、資訊怎麼流，都要對、要審得了，確認沒有在漏資訊。Guy 說 Sierra 的 Ori 在這檔節目講過：若你允許 agent 做某件事，跑夠多次，它幾乎必然會做那件事。所以約束要設得很硬，還有 information flow integrity。不要讓跑在公開 repo 裡的 agent 碰得到私人 repo。分診、開 issue 時，要對第三方來的 issue 想兩次。他們大多用 opt-in：預設忽略不受信任的貢獻者開的 issue。Agentic workflow 若要處理那種資訊，你得自己打開。這是起點。Continuous AI 會有很多實作。GitHub 還有叫 GitHub automations 的東西，比較是個人生產力的自動化。光譜很寬。他把 DevOps 那種 CI/CD 的心態帶進這場。

[22:24](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1344s) Guy 覺得以他的比喻，這比較像 pipeline，不是 loop。它是事件驅動的。一個 issue 來了可以觸發，但它不隱含逼你做 loop。你可以另設時間排程，每天做。Don 說也可以把它想成 loop 的一步：拿 issue 做成 pull request，拿目標走一步，拿 backlog 做一小段，一次實作一、五或十個修復。一次跑不一定是一張 issue 對一張 PR。它可以開多張 PR、處理多張 issue、做別的工作、拿 backlog 當輸入。也可以是規劃，或研究。很常見的是每天研究這個 repo 怎麼改進效能，先不做，做很多調查，寫報告：改善效能的前五個機會。維護者或貢獻者再拆開，決定真的做哪些，也許只做第一和第三。這些來回協助的流程不超快，像 CI/CD，因為你在做深度研究，可能要建產品、截圖、研究產品。這和產業裡漂著的其他自動化不一樣，因為他們預期這些步驟很多時候在做真正的軟體工程。可以建、可以跑、可以吃正式環境的 telemetry。例如拿站上最新的十次失敗，排出優先，寫網站可靠性怎麼了的研究報告，把主觀資訊浮成有用的報告和做得到的下一步。Guy 說這是放在情境裡的 cloud agent。

## Repo 是生產的現場；太大或跨 repo 時邊界會毛

[25:19](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1519s) Guy 覺得它和別的 cloud agent 的差別，核心是以 repo 為中心。網頁上有一句：把每個 repo 變成 software factory。定義在 repo 裡，執行時預期活動都在那裡，別的 agent 也可能做得到，但這是核心。Don 說對，而且是從 CI/CD 類比出發的關鍵設計。那些流程和自動化也高度以 repo 為中心。一旦回答運作的邊界在哪、跑在哪、定義在哪，很多事就變簡單。把定義配在那裡，有利有弊。DevOps 社群為了自動化的定義該不該坐在 repo 裡，來回很多年，還有一整個 GitOps 的世界。名詞上，他把 repo 想成生產的現場，價值在那裡被做出來，結果也許是一座工廠，但價值還有別的做法。電影工作室不是工廠，也是希望產出價值的地方。工廠的比喻在重複、相同、從 pipeline 流過的任務上最有用。AI 的用途這麼廣，也該找別的比喻：studios、productions、workbenches。

[28:04](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1684s) 組織採用 CI/CD、採用 GitHub 或類似平台時，真正在說的是：這裡有一個叫 repo 的地方，組織給你在這個邊界裡自動化的許可。開發者最知道自己的 repo 需要什麼自動化、什麼 CI/CD。所以把許可給你。你可以做 workflow，去認領那些能力。那是安全邊界，也是決策權的邊界。去吧。也許有組織指南、可重用的 action、一個團隊維持一點平台的中心。這決定很有力。開發者突然有一種有限的雲端資源：運算、網路、快取之類的有限儲存。他們變得非常有生產力。這是 CI/CD 成功的原因。有一個有界的 context，開發者被授權去認領資源，不必去跟公司的 cloud team 要一台新機器，也不必去要預算。預算會被量到，但這個組織動態是關鍵。他相信情境裡的 AI 自動化會走同一條路。會有成本中心，像 CI/CD 一樣要錢。會有會計控制，因為看得到流向。有授權的 context：在裡面你可以依指南和政策用 AI。這讓人非常有創造力。他在意產業裡的工作討論：有證據顯示，若你讓靠近現場的人用 AI，他們會找到驚人的生產用途。他說的是比喻的 coalface，不是真的煤礦。他喜歡 GitHub workflows，因為它賦權給 repo 的維護者、離軟體更近的人，去弄清怎麼用 AI 最好。例如做兒童軟體的人說，文案被寫成給 15 歲，他需要適合 10 歲。AI 可以做那種判斷，讀文件字串和文字、把語言簡化，然後一天一天連續做。

[31:48](https://www.youtube.com/watch?v=quVzmAb9oqs&t=1908s) Guy 同意 repo 是很方便的單位，資料收在那裡，自動化、code、其他資產和 context 都可以放。GitHub Actions 和別的成功 CI 功能上很像，崛起大概是因為做進 repo 裡很方便。但他提兩邊。一是跨 repo 的動作。人們把 CI/CD 說成一件事，CD 常常不是單一 repo，於是變得棘手，變成另一個 repo。二是 AI 的世界裡 monorepo 又起來了。它不曾消失。模型很多被訓練成在單一 repo 的 context 裡工作，卻又常需要別的 repo 的資訊。最容易的解是全部收成一個 repo。現代的 repo 可以巨大，不再是一件事。拿 repo 當存取單位、安全單位、誰可以做什麼的賦權單位，邊緣就開始毛。Tessl 的現場團隊為了 agent 好拉，去開那些 repo 的權限，方便，但 repo 作為一個專案的身份就丟了很多。Don 說他打中了。中間有個甜蜜點，有些專案在單一 repo 裡一切都很順，大小剛剛好，部署也設好。另外有拉力把東西往各方向扯。GitHub 還有工作要做：repo 不該是唯一有效的 context。可以有一組 repo 當協作 context，他說 friend repos，或以後加上的功能。這在 GitHub 確實有人討論。組織整體也可以是 context，但組織可以巨大，成千上萬個 repo，要擴到那裡是大問題。企業還可以有多個組織。收成 monorepo 的效應在 AI 之前就有。他在一些專案裡也說該合併，合在一起會好得多。人會把東西拆開、再合上、再拆開。GitHub 能做的是給更有效的解，讓你不必被迫全放進一個 repo，多一點選擇和控制。Monorepo 裡的授權他不是專家。

## 什麼留在 repo，什麼放在旁邊

[37:11](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2231s) 正式環境的資料本來就不在 repo 裡，很多時候有好理由。什麼該留在 repo，Don 不給一條硬規則。網站上的設計模式是團隊在探索的結果。有些情況一個 repo 裡跑一整座 agent 動物園。他們寫成 Peli's Agent Factory、Peli's Agent Zoo，記錄了 20、30、40 個 agent，都是 repo 裡想重複發生的事，有些很意外。很多是改 code、效能。也有風格這種很主觀、很意外的。GitHub workflows 含一個 GitHub CLI extension，字幕叫 GA，有終端機輸出，他們想要它好看。Workflow 在 repo 裡跑工具、檢查輸出，說可以排得更好。很多的 PR 合併率有 70%、80%。你可以追重複動作的因果，拿出統計。Guy 說風格的定義很可能想套到很多 repo。Don 說當然，那就是匯入 skill 函式庫。個人生產力世界正在冒出來的東西，skills 的函式庫，Tessl 做過這類工作，帶進 workflow：直接引用 markdown，或把 skills check in 進 repo。執行定義在這裡，skill 拉進來；若要共享對系統的存取，skill 可以跨 repo。MCP 也是類似的共享存取。這些都屬於 continuous AI 的敘事。Continuous AI 比 agentic workflows 更寬。GitHub workflows 當然可以帶 MCP。GitHub 是開放平台，自動化也可以在外面跑，很多工具跟 GitHub 整合。他們的觀點是給一個可信、有力的預設。資料完整性、保留政策、法律或隱私，可能讓你不該把 repo 複製到 GitHub 平台外面。Issue 和 pull request 的 metadata 能不能拿出去再放回來，你可能已經在組織裡批准過。深度的專長，安全 agent、滲透測試，會發生在外面。有人混著用。以色列新創 HUD，在 AI Native DevCon 講過，焦點是產生正式環境的資訊，需要把探測到的 bug、問題、產品效能定期報進 repository。對他們，真正的系統價值在正式環境的探測，也許那裡就有 AI 處理；GitHub workflows 是配角，用一點智慧把資訊浮出來。這種輔助會很多。

[43:26](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2606s) Guy 收成三層。一是跟 repo 裡的 code 或其他內容直接有關的資訊，甜蜜點是把運算帶到資料那裡。二是 repo 只是方便你做重複的事，於是你再開一個 repo。GitOps 就是 repo 純粹拿來自動化。Side repo 裡跑自動化，目標 repo 是別的東西。你已經是 GitHub 用戶的話，企業的法務、安全和批准很方便。Side repo 還能控制誰可以改自動化、誰可以跑、誰是工廠的執行者。用 side repo 去管一個 monorepo，是挺有效的模式。三是需要別的最佳化，例如爆出很多運算，或用專有的 AI 知識工具，那會活在旁邊。

三層都還是 continuous AI。差別是主要的智慧坐在這份 repo 裡、坐在旁邊那個只負責自動化的 repo，還是坐在 repo 外面。

## 一座動物園很好玩；要上線時他偏好一個注意力焦點

[45:07](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2707s) 一條 workflow 做很多事，還是很多條。Guy 把 Agent Zoo 理解成上百條在跑的 agent workflow。Don 自己的偏好比較是一條 workflow 做多件事，一個成本控制點。他的合作者 Peli 更想要很多條，所以叫 Peli's Agent Zoo。那有一部分是在探索空間。Peli 很厲害，他們不想限制他，做出愈多 workflow、看會冒出什麼、一直學。但真的要把自動化放進開源技術的 repo、給維護者時，動物園也是維護負擔。你得照料。Don 的注意力有限，不想被吸走時間。他要一個注意力焦點。他維護多個 repo，所以還得跨 repo 看。他做了一個小 IDE，幫自己照料不同 repo 裡的多條自動化。例子是 Repo Assist，寬譜的 repo 助手。它幫你標 issue、對 issue 做第一回應、研究並回覆，也可以選擇開 PR 去修。它不會合併 PR。他每天的工作是看它昨晚做了什麼。這是一種監督者、編排者的模式。Workflow 可以選擇委託給更強或更弱的模型，那對成本很重要。他偏好它，是因為概念簡單，讓生活簡單，想的是一個實體。成本控制在這裡真的要緊。他覺得五條 workflow 比一條複雜得多。

[48:43](https://www.youtube.com/watch?v=quVzmAb9oqs&t=2923s) 這些 workflow 常常是排程的。Issue 分診可以每張進來就做深度研究，也可以整批。每天看新來了哪些，一次跑裡補上一批，還能跨 issue 收集資訊，結果會有趣。中間可以想像服務政策：半小時內分診所有 issue，半小時內做研究。Repo Assist 是排程的，節奏寫死在 workflow 裡，要改就改 workflow。這很重要，因為你可以把自動化調高或調低。Repo 很熱、你顧不過來，就調高；什麼都沒發生、軟體有人維護、剩下的 issue 不多，大概就調低。每種情況他大致估得出成本。歷史裡看得到每次跑的平均成本，依模型可能是幾美分，或一美元左右。邊界算清楚。GitHub workflows 裡有很強的成本控制，他認為絕對必要，也是 harness 討論裡缺的。Harness 該有成本控制和預算。這在自動化世界很自然，在個人加成的世界有點不自然。重複做之後，才能從成本和指標評估能不能跑。他們加了功能：同一時間、同一件工作，多個模型一起做。它會選比如說第一個當結果。你可以打開一天，拿來考試。他叫它 examination。一屋子模型在同一時間做同一件事，給它們考試。用共享帳本時這很要緊。若有人寫進帳本、暗示了答案，例如關掉一張 issue，其他模型會找到，說看，另一個模型用這張已關的 pull request 做過了。所以那些模型必須同時考。打開一天，再看哪些模型考得比較好。

## 垃圾就丟掉；審查者要被裝備，不是被淹沒

[52:01](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3121s) Guy 把話題轉到回歸和非決定性。這些流程跑夠多次會犯錯、會造成問題。CI 裡測試失敗看得到，人會去最佳化，而且測試是人寫的。AI 的指示含糊得多，自由度大，尤其會自我最佳化、修改自己的流程。什麼叫正確，不能只靠感覺。Don 先澄清是軟體的正確，還是自動化的正確，然後說在這個世界裡，人始終在迴圈裡，特別是在 pull request 或 issue 那一點。Issue 或請求被建立，沒有人批准，pull request 不會被合併。自動化能在多大程度上修改自己，也有限制。GitHub Actions 本來就限制 action 去開會修改那些 action 的 pull request。理由是不想讓惡意的人去弄你的 CI/CD pipeline。有些想法延續過來。可以有自我改進的 loop，它們可以寫新的 skill、更新 skill，那和那個系統是分開的。但他要說，有多少這種想法被帶進這個世界，有重要的控制，有些繼承自 GitHub Actions。

[55:32](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3332s) Guy 說沒有 PR 會自動合併，作為終點站不住。變更變多之後，人真的審得完嗎，有沒有一條不把 PR 自動化也擴得了的路。Don 說對 GitHub Agentic Workflows 而言，這在某方面是另一個討論。他們的觀點是人在迴圈裡，而且肯定在修改帳本的那一點，不是整本帳本。帳本的一部分可以改，issue 可以寫。Code 一直是另一回事，是事情究竟如何的黃金標準。他理解人審是瓶頸。當然可以有 agentic workflow、別種 AI 自動化、別種演算法自動化，去做審、審、審。蓋工廠時，很多工作在 quality gates。沒有道理為了低品質的東西去打擾人、請人審一張 pull request。要做盡可能多的高品質閘門，把它們自動化，減少你從人身上吸走的注意力。有些產品幾乎可以自動合併。可以用堆疊的 pull request，或一張長跑的 pull request，用自動化往分支推，把一個功能越做越大。有些 loop 就是這樣。他們也有讓 CI 變綠的 workflow：看所有 pull request，找紅的，弄清哪裡錯，然後真的再推上那個分支，因為只是推到分支。他們允許對 pull request 分支做自動化推送，而且通常可以收成只限自動化自己開的那些 pull request。產業和不同專案會停在哪，沒有唯一答案。他理解有愈來愈大的壓力，要把軟體的建造、把一切都自動化。他們不往那個方向走。他們在負責。Human in the loop 是這裡的核心指南。

[58:29](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3509s) Guy 理解這個驅動，也覺得比較安全。但他想到工廠時，想到更高的控制面。現在控制面裡包括對 code 的修改，應該渴望讓它變成 agentic。於是下一組問題是：這些連續的動作，以協作的方式發生在 repo 這個共享帳本上，你提出它們。很多組織到了這一步，變更已經多過他們接得住的。在 Snyk，今天常常不是找不到問題。他知道一整個世界的漏洞。問題是修。若你把東西送到終點線前，卻過不了終點、合不進去，就只是製造審查疲勞。而且老實說，那時候人未必裝備好，code 不是他們寫的。Don 說那正是。他一部分工作是把 GitHub workflows 用到 GitHub 內部的工廠。例如一座改善 CI 效能的工廠。GitHub 是大產品，CI 要跑很久。他們想逐步、穩定地改進：找跑很久的測試，也許 matrix 太大，也許可以變成 fixture。作為工廠創造者，他的工作是交出高品質的 pull request，讓審查者被裝備好。他喜歡 equipped 這個詞。要給審查者所有需要的資訊：為什麼做、風險、取捨、是不是最小的改動、上面有盡可能多的品質閘門。在這個情境裡，CI/CD 的品質閘門是第一號。這個例子是在改善 CI 效能，證據就在面前。一輪是零改動，或 main 上最新的一輪；另一輪是這裡。測試那裡花 120 秒，這裡花 15 秒。這個改進可以入帳。你把證據給審查者。若沒有證據，這張就該關、自動關，把生產線上的次品丟掉。這個世界裡丟掉的比以前多。工作變便宜，丟掉比較容易，因為它只是相對便宜地跑過，或它是夜裡跑的。便不便宜都一樣，這是工廠的本性。產出垃圾就丟掉。車上有刮痕就丟掉。他想在下次團隊外出時去看真的工廠，也許是電影工作室。人到底怎麼做東西、怎麼組織、怎麼分辨好壞。

[62:33](https://www.youtube.com/watch?v=quVzmAb9oqs&t=3753s) 他在演講裡用的標題是 agent repository automation revolution。他認為這會在實務團隊做的很多事的中心，尤其是企業，也在開源。Guy 請聽眾去看他在 AI Native Dev 頻道上的那場演講，實務內容比這一集更多。片頭也說 6 月倫敦的 AI DevCon 賣完，11 月紐約再辦三天，早鳥價到 9 月 30 日，聽眾可用 POD15 打 85 折。
