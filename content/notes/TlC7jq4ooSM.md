# Stop Prompting, Start Engineering: The "Context as Code" Shift

Dru Knox，Tessl 的 head of product and design。片長 29 分 35 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕有幾處仍含糊：app sign、agents at MDE、scales say、energetic review or less judge、powers。下文只在語境夠清楚時校正，其餘保持原詞。

- 原片：[YouTube](https://www.youtube.com/watch?v=TlC7jq4ooSM)

## 一句話

人現在做的是 tech lead 的工作，只是對象換成 agents：維持標準、做決定、寫下 context、把品質線畫出來。所以 context 在某個意義上是新的 code。Code 有的靜態檢查、測試、observability、自動更新、套件管理，context 都該有對應物。對不上的地方是 LLM 非確定、常常沒有唯一對錯，以及這些「程式」是在描述別的東西，會和它們描述的對象脫節。

## 從覺得自己是工程師，到覺得自己是圖書館員

[0:25](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=25s) 進 Tessl 之前，他在 Grammarly 帶 language modelling 團隊，也在還沒成功的新創 Cantina 做過，那是 AI first 的社群網路。他兼職寫 code，自認不如 Tessl 團隊裡真正在寫的人。這場要談的是用比較專業、比較嚴的軟體工程心態來做 skills，更廣一點是 agents 的 context。

[1:33](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=93s) 每年都有人說這是某件事的一年。有人說今年是 context engineering。他說也許是、也許不是。一做下去，會經過同一段：結果很好，然後突然不知道這東西怎麼運作、有沒有用。以為自己是工程師，結果覺得像藝術家或圖書館員。要問的是怎麼把 agents 和 context engineering 變回他熟悉的那種可靠、可預期的工程。

[2:20](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=140s) 第一件要認的事：大家在做 context engineering，是因為人從 IC 變成了 tech lead。工作不再是自己寫出好 code，而是確保好 code 能被寫出來。維持標準、做決定、寫下來、把 context 給團隊、為其他人設品質線。現在這件事是對 agents 做。Context 是新的 code。他說有人會討厭這句，把它當隱喻。若 context 是 code，我們就會問程式對不對、快不快、怎麼重用、怎麼把煩的重複工作自動化。Code 這邊已有 unit tests、integration tests、analytics、observability。他要論的是：這些在 context engineering 裡都有對應。他會用 Tessl 舉例，但概念是通用的，不必用 Tessl。

[4:19](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=259s) 不能直接對照，有三個問題。LLM 非確定，跑一次成功或失敗，不能就此說 context 是好的。叫 agent 做一件事，有時做、有時不做。其次，context 常常沒有唯一對錯。Style guide 或程式庫文件，不能寫一個 unit test 就宣布 agent 做對了。評輸出很難。第三，這些程式現在是在描述別的東西，兩邊要保持同步。App 改了，溝通得跟著改；公司某一處的流程改了，要散到整個組織。

## 靜態檢查便宜，eval 才是在問它有沒有幫上忙

[6:11](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=371s) Code 裡的 static analysis，在 context 這邊比較像 LLM as judge：一組固定的 best practices、規則、驗證，拿去跑你的 context。一位 Tessl 客戶在檔案裡加了一個字幕寫成 app sign 的東西，突然觸發多數 agent 的 import，字幕裡的 MDE 沒有說清是哪一套。整批 context 壞了，他們沒發現。所以 linting 和 CI/CD 仍然要有。

[9:04](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=544s) Skills standard 有一批靜態格式可查。他相信有一支 reference CLI，能驗證 skill 是否 compile。寫 skills 的人該把它放進 CI/CD：skill 檔一改就驗證。很多人的 context 根本沒載入，自己不知道。Anthropic 有一份 best practices。編譯用驗證測；best practices 則丟給 LLM as judge。把那份指南放進 prompt 就是很好的起點，再調 prompt 可以更好。它會告訴你 context 夠不夠具體、有沒有講清何時該用。Skills 常常不啟動。不真的跑 skill，也有具體辦法估計它被觸發的可能。這些便宜、快、放得進 CI/CD，對「context 到底有沒有用」提升很大，像 formatter 或 linter 一樣是 table stakes。輸出還可以餵回 agent 請它修。

[10:57](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=657s) Evals 要回答的是：這份 context 有沒有幫上忙，agent 在這件任務上做得怎樣。他舉一個程式庫。沒有 context 時，agent 不擅長用 list function，可能自己實作，或換一個 library；async 也差；stream 的組合和 zip files 則還行。這種對照讓你知道 context 該補在哪。有時你寫了一堆，發現沒有也沒差，tokens 是浪費。有時寫了反而更差，因為過期，或只是多塞了 tokens。理想是有它更好，而且 tokens 只花在有差的地方。

[12:30](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=750s) 做法是寫幾個真實任務的 prompts，任務得用到你寫的 context，或至少得做 context 說的那件事。同時要能在沒有 context 時再測一次，看 agent 是不是自己就夠聰明。再寫評分 rubric，不要寫一堆 unit tests。原因有二。Unit tests 很煩、很慢，每個 context 都做範例專案和 test suite 的話，你很快就不做了。更重要的是，agents 會為了讓 unit tests 通過做出很難看的事。功能對不對不是唯一要量的，尤其對 context：code 是否 idiomatic、有沒有用你要的 library 而不是自己重寫。這些 unit tests 量不到。字幕寫成 energetic review or less judge；依他前面已經在用 LLM as judge，這裡指的是用評分而不是只看測試綠燈。

[13:50](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=830s) 他們把這些放在 markdown。Tessl 會生，你也可以自己寫。Prompt 是把東西做出來、需求是什麼。Rubric 要夠細，LLM 的結果才穩：解法應在 method 裡某處用到這個確切的 API，或先初始化這個再初始化那個。每份 context 大約五則，他們覺得是夠穩的量。前面要花工，之後像 unit tests 一樣可以一直用。每次改動就重跑，看有幫還是有害。不一樣的是，context 沒改也要重跑，因為 agent 和 model 在變。Agents 變好之後，常常可以開始拆 context。Python style guide 就是例子：Claude Opus 4.6 的 Python 已經夠好，不再需要。Evals 會告訴你該刪，省 tokens。也會有 regression。最近某個 Gemini 很聰明卻不聽話，覺得不必用 tools、不必讀 context。他們發現退步，就加強要求 agent 去用那些 context。

## 整份 repo、log，以及不要讓 context 腐爛

[16:01](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=961s) Repo evals 對應 integration tests，他不展開太深。只測單份 context 能幫你 debug：你有沒有說對、有沒有過期。你還要在完整的 coding 環境、所有 context 都裝上時，測真實情境。他當天稍早聽了一場談 dumb zone：context window 裡的 context 和 tools 太多，agents 就持續變差。Repo 先從大約五個代表平均開發任務的情境開始，同一套 rubric，偶爾跑一次。看 tech debt 是否已讓 agents 不懂怎麼在這份 code 裡工作、context 或 tools 是不是裝太多。Tessl 也在做。一個有效的做法是掃過去的 commits，轉成任務；固定節奏抽上個月五個隨機 commits，更新 eval suite。做 ML 的人會認這是 input drift。覺得太重，就先做一點再改。

[17:40](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1060s) Analytics 他覺得酷，也有點可怕。Context 在推進 repo 之前驗證過，軟體仍會看 crash logs、metrics、usability funnels。Agent 這邊其實有：各家 agents 把 chat logs 存在碰得到的檔案裡，可以自己寫 script。Tessl 能收集，opt in，因為很敏感。可以看 tools 有沒有被叫、某份 context 多常被用、某個模式多常真的出現在 code 裡，例如在 function 中間 import 一個 library。請團隊各跑一次，把 log 聚起來，看該為哪些共同問題寫新 context。一個簡單訊號是 agent 道歉：搜 sorry，搜 you're absolutely right。他保證大家機器上有三到四個月的 Cursor logs 可以挖。

[19:16](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1156s) Context 要保持更新。CI/CD 裡，PR 出現就掃一次：有沒有 markdown 該改。PR 通常很集中，agents 很會找到該改的地方。字幕說 if your powers are too big，依前後文是 PR 太大，就把它改小。Tessl 可以自動化，例如 logging levels 加了一個 case，文件也要更新。這段可能最重要：context 一過期，agent 表現就垮。寫了 context 就必須有更新辦法。Agents 很會做這件事，不要用手做，因為你不會做。

[20:38](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1238s) 要重用 context 就需要 package manager：code review skill、怎麼用 React 的文件、best practices。Skills.sh 大概最流行，他說這話有點痛。Tessl 也有，不是最流行，他認為最好，但不在這場推銷原因。不一樣的是，你裝的很多 context 是在描述別的套件。例子是 PyPI 上某個 library 的文件，綁定特定 package、特定版本。Library 升級時，文件要鎖在同一個版本。不要拿字幕裡的 context seven、對著最新的 React，自己卻 pin 在 React 17。和 dependencies、tools、APIs 保持同步，是新的 drift。事情不一定難，難在跟著 agent 變化的速度改。

## 鷹架會變少，steward 不會消失

[23:05](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1385s) 有人問六個月或十二個月後，Claude 4.6、Codex 5.3，以及之後的 Codex 6、Claude 5、Gemini，還需不需要這麼多 scaffolding。他先按 greenfield 和 brownfield 拆。從零為 agents 做的 app，會比 enterprise Java 容易得多。需要 context 的事情會變少。Python style guide 六個月前還很夯，現在沒人需要。但你們自己的內部 logging，永遠得寫，因為它不在 training weights 裡。他預期最後幾乎不會再主動把 context 塞進 window，而是像 progressive disclosure 的路標：agent 覺得需要才看，像一般開發者。很多 context 會改在 review 時用。做一個 review agent，看有沒有破 style guide、有沒有把東西重寫一遍。那是控制，不是事先教育。Evals 用來判斷何時把東西移出 context window、改到 review，或直接刪掉。

[24:57](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1497s) 下一問字幕很碎，聽得出是在問評分要不要更細、要不要 one pagers。他的回答是：Tessl 可以給更細的粒度，但 agents 幾乎總是 0 分或滿分。只用 0 或 1，結果差不多。再一問是要不要先用 4.6 快速做出一個不完美的基準。他確認問題是：要不要很用力優化你在用的 agent。他自己很忙。日常就從最好的 agent 開始，一般駕駛直接開到最大，除非有理由不能。等你有一批很重複的任務，再去找最便宜、還過得了的那一檔。Context 常常讓你用更小的 model 做那些事。

[26:59](https://www.youtube.com/watch?v=TlC7jq4ooSM&t=1619s) 最後一問同樣很碎，他丟出一個自己稱為 spicy 的看法，開場片頭也先放了這段。我們已經有通用的 agent 開發機器五十年，只是當時叫 software engineers。你不會只丟一則 Slack，就期望對方完全無人監督、自己做完所有最好的決定，把整個系統建起來。他太太是 Meta 很資深的 staff engineer。她說就算複製一個自己，還是會 code review 自己的 code，不會接受沒看過就交上去。所以他認為永遠需要技術架構師、steward，有人守 codebase 的品質。角色會變。現在是很細的決定、review、帶人，大約 1 個 PM 對 5 到 10 個工程師。他想像這個比例會反過來：一個 technical steward 想整體設計、持續 review agent 的 code、看出反覆失敗的點；把那一塊抽成 agents 能用的元件，one-shot 就更穩。另外 5 到 10 個偏 product design、product engineering 的人去探產品的前沿。Steward 幫他們把 code 落地、維持可維護、再改進。何時到，他不確定，可能兩週，可能兩年，大概是個位數年。完全 AI native 的 greenfield，明年內開始、並且能用這套模式，他不會驚訝。Brownfield 會更難。
