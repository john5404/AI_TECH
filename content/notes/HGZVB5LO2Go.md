# Beyond Vibe Coding: AI Code Assistance for Production Software with Matthew Belcher

Matt Belcher（字幕聽成 Belchure）談怎麼把 AI code assistance 用在會跑真實業務的 production code 上。片長 37 分 44 秒，英文自動字幕。他在英國負責 emerging tech。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Codurance 聽成 coants、Cojant，把 Claude Code 聽成 clawed code，把 DORA 聽成 door。

- 原片：[YouTube](https://www.youtube.com/watch?v=HGZVB5LO2Go)

## 一句話

Vibe coding 和 AI 寫 code 不是同一件事。前者把控制交出去，適合短命的原型。Production 要被看懂、對得上架構、撐得住多年、測得到、也要安全。他們在真實系統上用 Cursor、GitHub Copilot 和 Claude Code，靠五條原則把人留在駕駛座：設計仍由人擁有、prompt 要練、用整個 SDLC 量影響、實驗要有框架、授權要是組織級的。

## Vibe coding 適合短命的東西

[0:03](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=3s) 他過去一年多在幫組織切開炒作，也把 AI 工具和服務放進工作流程。Codurance 是顧問公司，核心是 software craftsmanship 和 XP，想把產業的軟體品質拉高。Sam 介紹過，他們 2010 年從倫敦的 software craftsmanship 社群長出來，十五年後大約 6,000 個成員。

[1:27](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=87s) 他問現場 vibe coding 是什麼。有人說 slot code、prompting、不在乎品質、YOLO。詞來自二月的一則推文，作者是 OpenAI 的共同創辦人之一。第一句是：有一種新的寫法我叫做 vibe coding，你完全交給 vibe，擁抱指數，忘掉 coding 甚至存在。後面很長。效果是把控制和權力交給 AI 工具和 LLM，看它帶回來什麼。這有用，也有不該用的時候。

他經驗裡它真正好的地方：快速原型。Codurance 裡，連非技術或技術較少的同事，都能很快做出應用來 demo 一個想法或新功能。還有 discovery、technical spike，以及應用周圍的 scaffolding 和 boilerplate。

這些情況有共同點。Code 壽命短。你要的是速度：證明一個想法、決定下一步、時間該投在哪、值不值得再投。功能壓過 code 品質。有人提到品質可以放掉，字幕聽成 code swap。在這裡大概沒關係，因為你在乎的是功能能不能 demo、實務上動不動、想法可不可行。關鍵是這些 code 不會跑在 production，不支撐關鍵業務流程，也不是面對客戶的。

[5:36](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=336s) 同一則推文裡他標出來的句子：忘掉 code 存在。永遠全部接受。我連 diff 都不讀了。Code 長到超過我平常能理解的範圍。很適合丟掉的週末專案。而且它大致能動。沒有一句聽起來像該怎麼對待 production code。

很多人把 AI coding 工具和 vibe coding 畫上等號。他說是兩件事。Production 仍可以用這些工具，但要用對的方式。用工具不等于要跟著那套做法。

## Production 要的品質，五條原則

[6:55](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=415s) 跑在 production 的 code 要被看懂，你要讀得回來。設計要對得上業務目標和整體架構，並且往對的方向演進。要能擴：進新市場、更多使用者和流量時仍然夠快。要能維護。Production code 活很多年，不是幾週或幾個月，而且會一再改。要能測，周圍有安全網，才能安全地改。要安全。他說零售業最近看到 code 不安全時會發生什麼，沒有點名事件。還有效能和其他品質指標。Vibe coding 對不上這些條件。

Codurance 已經在真實的 production 系統上用 Cursor、GitHub Copilot、Claude Code。做法是用原則和模式管怎麼跟這些工具互動。高層是把工具的力量，和大家知道的好軟體工程基本功放在一起，用有紀律的方式和 LLM 互動。原則很多，他講五條，用在有客戶流量、支撐客戶業務的系統上。

[10:32](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=632s) 第一，設計的所有權和控制留在人這裡。名字是 assistant，就該繼續當助手，不要接管 code。Human in the loop。Cursor 或 Copilot 的 agentic mode 特別容易很快失控，因為吐出來的 code 量很大，看起來都合理，一次要理解的負擔很重。他們偏好很強的人在迴圈裡：看回來的輸出，確認還走在 codebase 和架構的方向上，或是不錯但還要再修一點。開發者仍開著整體設計和開發的巴士。

第二，prompt engineering。已經重要，往後會是軟體開發的關鍵技能。我們跟 LLM 互動的方式，每個人都得磨。包括 one-shot、few-shot，在 prompt 裡給例子，也要把互動收得精確，講清楚要什麼回來。把任務拆小。很高很模糊的 prompt 會得到一個合理的回應，但你開了一扇大窗，讓 LLM 假設什麼對你的 codebase 是對的。它多半不會為你的情境做對取捨。指引愈多、例子愈多，你愈能留在控制裡，輸出品質也愈好。

他們在 Codurance 看到 prompt 本身變成軟體開發流程裡的產物。用來跟工具互動的 prompt 會變成一等公民。要版控、在團隊裡分享，放在 codebase 旁邊，或放在自己的 repo。他建議跟著走：版控、分享、一邊用一邊改、和 code 放在一起。

[14:29](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=869s) 第三，量影響。採用這些工具，但是否以對的方式在幫。產出的行數不是有意義的指標。問開發者覺得更有生產力嗎、對方說是，也不夠。要用系統思考看整個 SDLC。你能不能更快把變更送到客戶？Lead time 有沒有下降？因為品質變好，change failure rate 有沒有下降？把 SDLC 當一個系統看，寫軟體那一段常常不是瓶頸。用 AI 把 code 生得更快，可能只是把壓力點照到生命週期的別處，那些地方要用或不用 AI 都得處理。指標可以是 DORA 或其他，但要對齊業務目標和整個 SDLC，不是個人生產力或行數。

第四，實驗。工具空間快到好像每半小時一個新工具。也有新模型。他說 Claude 4 今年稍早出來，他記得二月還是 3.7，間隔在縮短。技術也在出新的。不小心就會變成蠻荒，工具和手法亂飛。要有框架去實驗新的 code assistance、新的 AI 服務或 API，再決定從實驗推進成組織裡的一等工具，或是覺得沒加到價值、不推進。像 tech radar：這個工具的成熟度、有沒有加價值、值不值得擴大採用。實驗要有控制。模型進步這麼快，要有空間和自由，也要有治理說：我們有信心，這值得推進到一般使用。

[18:56](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1136s) 第五，很多客戶還在試 Cursor 或 Copilot，用的是免費層或個人授權。盡量不要。組織級授權好得多。若擔心工具變太快、不想綁太死，可以用月或季，但仍是組織級。對比個人免費層的好處：privacy mode 可以強制。個人可以自己開關，讓資料不被存起來、之後不被拿去訓練。組織層可以強制這件事不發生，放心沒有資料會出去、被用來訓練後續模型。你可以追整個組織和團隊的使用與採用。這些工具有儀表板，看模型用量、和工具的互動。這些資料點用來想採用有沒有在動、有沒有加價值、人有沒有在用。還有成本，集中計費。以及接上既有系統。安全很重要。組織級設定讓你接上 single sign-on，多一層安全。

## 三個他們量到的結果

[21:20](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1280s) 他給三個在 production 裡、帶著這些原則用 GitHub Copilot 和 Cursor 的結果。有些團隊把重構時間減少 50%，靠的是自動生 code，但 prompt 是收過、講清楚的。一個專案要把前端框架遷到另一個，估計要好幾週。他們用 Cursor 做了大部分，團隊安全地在幾天內做完。還有一個客戶，codebase 很大很複雜，一開始不是 test driven，很多 code 沒有測試。替沒被測過的 code 補測試通常難、複雜、花時間。他們想改這段 code，但要有測試當安全網。團隊用 AI 工具先補上一套測試，再改。測試覆蓋率增加 30%。他說還能舉更多。重點是 production 裡用這些工具，加上治理和原則，看得到成績。不是只有 vibe coding。

[23:51](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1431s) 他收回來。Vibe coding 過去幾個月占了很多空氣，解釋很多，人也常把它等於使用 AI 工具。推文應該已經指出它們不同。原型、discovery、technical spike 是有效的用途。至少對他，不該用在 production。企業級、production grade 的採用，要有清楚的原則。團隊要知道什麼情況用這些工具、什麼功能、何時用 agentic、何時不用。Prompt 怎麼寫、怎麼分享。也要回到基本功。我們學會把軟體寫好，靠的是那些軟體工程原則。AI 沒有把它們作廢。若有什麼不同，是讓它們更重要。好的設計、可測的 code。仍要利用工具，但不要犧牲那些基本功。

他再數一次他們在做的事。人維持對生成 code 的控制，開發者開車，不是 AI 接管。值得把 prompt engineering 當成團隊裡的技能和實作，重金投入。Prompt 成為一等公民會很有價值。看整體影響，不是為了採用而採用。Lead time 有沒有變短，code 品質有沒有變好，整個 SDLC 有沒有變好。同時要有實驗文化：給團隊空間試新工具、新模型，判斷什麼該從實驗升到一般使用、什麼不該，而且要安全、有護欄。

他們即將發一份更完整的報告，他說下週會出來，請看那個網站，網址沒有被念清楚。今天是片段。外面很多材料是把 AI 工具用在 POC 和 demo，怎麼用在 production 的材料不多。

## 提問：拆小、關掉大部分 agent、版控的是模板

[28:27](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1707s) 有人問 human in the loop 的疲勞：變更集太大，就變成一直接受 AI 送過來的東西。他們把任務拆小，常常走一個迴圈。先有一份高層計畫，和 LLM 一起定義它。有 prompt 幫忙拆成一組任務，人和模型來回幾次。人審查那份計畫，也許得到五到十個增量步驟，然後進入 act，逐步走完那些小步。變更變小。整體計畫仍是人在開。AI 幫你做計畫。一路都在用工具，只是更有控制。

[30:19](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1819s) 主要在用的是 GitHub Copilot 和 Cursor，也有一點 JetBrains Junie，Claude Code 在實驗。技巧大多在 prompting。大部分工作會關掉 agentic 功能，不是全部，這樣一次回來的變更量可控，變更集更小。One-shot 和 few-shot 有好處。例如驗證邏輯，不要只給高層 prompt，而是給一個輸入和應該的輸出，再給另一個。幾乎像 unit test 的案例，交給 prompt，回來的回應會更聰明。用 Cursor 的話，Cursor rules 也能扛很多，讓回來的東西對上你們的寫法和風格。他給不出某一條特定 prompt。看到的好處在技巧，不在某一句咒語。

[32:43](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=1963s) 什麼 prompt 值得版控。他覺得 prompt 在某些方面會和生出來的 code 一樣有價值，甚至更有。例如把一個 user story 規劃出來的那個結構，不是某一則故事的內容。他喜歡 prompt template 這個說法。模板可重用，最該版控。某一種情境的某一句，沒那麼需要。若同一句一再出現，就可以。他們常分析 codebase，找 domain boundary 的高層跡象。想快速看這份 codebase 健不健康、邊界合不合理，可以做出一條跨團隊重用的 prompt。

[34:49](https://www.youtube.com/watch?v=HGZVB5LO2Go&t=2089s) 最後問要不要生輔助文件幫 context。模型在換，有的 context 很大、有的很小，要不要重新 index。第一次碰到客戶全新的 codebase，他們會做一批調查式的 prompting，弄清地形：結構、主要功能、主要使用者旅程、用的資料庫、技術棧。存起來，那是高層 context。新人可以拿那條 prompt 再跑，幾乎免費拿到一份 onboarding，而且 codebase 變了，prompt 跑出來的也會跟著變。Cursor 和 Copilot 也會用 embedding 做索引，有一部分是現成的。內部他們玩 Claude Code 較多的是大型 codebase 的探索，不是生成那一段，問有什麼功能、在用哪些函式庫、domain 結構長什麼樣，有不錯的結果。
