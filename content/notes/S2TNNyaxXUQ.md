# Why Agents Are Forcing Enterprises to Finally Fix Their Dev Process

Simon Maple 在倫敦 AI Native DevCon 2026 的座談。片長 60 分 11 秒，英文手寫字幕。來賓是 re:cinq 的 head of product Daniel Jones、Autonomy AI 的共同創辦人兼 CEO Tammuz Dubnov，以及 Tessl 的 DevRel Patrick Debois。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=S2TNNyaxXUQ)

## 一句話

Agent 沒有發明新的軟體問題，它把舊問題變成看得到的錢。CI 不好、沒有測試、沒有大家同意的標準，DORA 說會讓 agentic coding 變慢。以前可以說 Timmy 懶。現在 token 有帳單。他們要的不是每個人自建一條管線，而是把好的工程做成工廠：快的回饋、依風險決定要不要人看，以及測試裡寫給下一個 agent 的 context。

## 誰擁有這件事

[2:37](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=157s) Daniel 在 re:cinq 做產品，那是一家 AI native transformation 顧問公司。共同創辦人做過 cloud native transformation，寫過 O'Reilly 的 Cloud Native Transformation。他看到組織採用破壞性技術時重複同樣的錯：把技術丟進去，工作方式不變，然後驚訝沒有變快。他做很多 agentic coding 的訓練。Tammuz 的公司在 codebase 上做一層，讓非技術或半技術的人能有意義地貢獻，在 brownfield 裡做視覺迭代、做 backlog，最後變成該合併的 PR。Patrick 來自比利時。多數人認識他是因為 DevOps 和 cloud native。他喜歡產業裡每一段混亂，因為學習發生在那裡。現在是 AI coding。他看的不只是工具，還有這個領域成形時的新組織模式。

[5:10](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=310s) 誰擁有可治理的規模化。Daniel 覺得會出現新部門。一個客戶的 developer experience 和 platform team 重疊。由他們建、散佈、並保證 skills 的品質，說得通。Platform team 本來就是抬高抽象、降低認知負荷。讓 agentic coding 順利、context 被管好並給 agent 用，可以落在這群人。他也看過 DevOps 團隊，就是那些被塞了別人的 CI/CD 的人，被指定負責這些事。他沒有把那說死成 anti-pattern。

Patrick 說每次組織變化通常有一個小的孵化團隊。曾經有 agile team，後來不再談 agile team，因為大家都在做 agile。DevOps team 是把事情規模化的方式：一個團隊被複製，問能不能重複。現在的模式是落回一個中央團隊去養其他團隊。挑戰是 developer experience 和 platform 仍常專注在提供基礎設施，他們不是懂 AI 的人。所以公司裡有真空。他們不是最好的人選，但他們控支出、有 model、有 gateway，堆疊在擴大。不一定留在一個 platform 群。你可能看到 cloud platform、AI platform、data platform。不是因為有一個 platform 群，他們就得做全部。Feature team 也做不了全部，他們有特定焦點。小公司可以是同一隊。大公司會要不同技能。

[8:50](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=530s) Tammuz 說他們變快，是整隊對齊。有人找到對流程重要的 skill，就有辦法分享，大家用，它自己也學。R&D 把不需要工程師的東西卸給產品和設計，才能專注真正要緊的。有工程師這種 builder，也有不是工程師的 builder。要管非技術的人開 PR，也要管技術的人收 PR。兩邊都要做變革。點起來的時候，整隊才合得上。Patrick 說現在常出現的詞是 AI product engineer，像 DevOps 橋接兩個世界。日常愈來愈由 AI 做，就可以把人轉去問：我們是不是在建對的東西。產品焦點又變強。角色在混，不是每個人都適合，但對組織是好的對齊。Tammuz 補：設計師和 PM 在乎的，開發者honestly 不在乎。那些 builder 現在做那些事，而且有決定權。開發者可以去顧架構、擴展、sandbox 怎麼活。CTO 的焦點是 enable，而不是猛推非技術的人。把他們帶上速度，人就做自己在乎的事。

## 瓶頸是舊的開發，不是新的模型

[12:41](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=761s) Daniel 說滾出來的瓶頸，常常只是軟體開發沒做好。接下來幾年我們會花很多時間重複過去十到十五年說過的話。CI/CD 好不好。有沒有測試。有沒有人真正同意的 coding standard。這些被曝出來。DORA 報告顯示，軟體開發實務不夠成熟，agentic coding 很可能讓你變慢。做得好，就會變快。問題是不知道轉折點在哪。就算採用成功，他也看過產品被打個措手不及：backlog 裡東西不夠。那很難加速，因為它是策略，要深想，要跟客戶談。把 QA 放在事後，也成了瓶頸。他一般不推薦那個模式。產品會變成瓶頸。要給那些人更多自由時間做策略和 discovery，而不是寫開發者會抱怨的 Jira ticket。

Patrick 用 DORA 的順序。先是採用，幾乎是在趕新 code，很長一段時間就是生產力的行數。然後學到它得在 production 裡能動，於是帶進返工：不好的話要重做幾次，像缺陷率。生成和缺陷不能失衡。他喜歡的新代理指標是：agent 要多少 turn 才能把工作做好。換 model、給對的工具、給更好的 context，可以把這個數字壓下來。不再是我能不能在 production 寫出更好的 code，而是我的 agent 能不能。從開發者搭配 AI，翻成開發者指示 agent 去用 AI。

[17:08](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=1028s) Daniel 覺得又好笑又有點沮喪。軟體工廠成熟之後，會有無限可調、可量的開發方式。看用了多少 turn、多少 token。和人不同，可以 A/B：一套 prompt 和工廠對另一套，清掉記憶再跑一次，看哪次更好。不能對工程師做 Men in Black 的記憶清除。人在做的時候，說法是 Timmy 懶，所以東西沒交付。沒有足夠去看流程和 value stream。人可以受苦。換成 agent，那就會花錢，而且很容易看見它在花錢。於是大家突然在乎。

Tammuz 說他們的 agent 在 160 多個組織、差異很大的 codebase 裡工作。品質高的，agent 更快、做得更好。品質低的相反。有一套 onboarding：做過幾個任務，agent 會自己熟悉 repo。難的專案要更久才到好品質。他們不能跟業務領導說，給我們一個 sprint 重構，好讓 agent 過得比較舒服。對方只在乎速度。所以是一邊快做使用者看得到的工作，一邊寫那個組織必須慢慢重構的 code。他們叫 Pact：做事的時候一點點重構，下一個 agent 到這段 code 會比較容易。不要叫開發團隊「把這裡弄得方便我們的 agent」。工作切小，才不會變成 PR 疲勞、讓人略過。領導高興因為功能在交付，開發者高興因為 PR 不會太大，PM 和設計師高興因為他們做得了，同時慢慢把 coding standard 推好。

## 自我，以及非技術的人開 PR

[19:43](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=1183s) 技術這邊有 ego。Tammuz 說從他們平台出來的 PR，比開發者自己用平台之後做出的，更能對上你們的寫法，也更能記住既有元件。有客戶 2700 個元件，沒有開發者知道該用哪一個。他們做 data science，可以排序、挑選。得先過開發者收到 PR 時的 ego。他們對開發者比較溫和。

非技術這邊是信心。PM 開了 PR，開發團隊推回去。請 team lead 看 code，對方說這是扎實的 code。為什麼推回去。因為不是開發者來的。他們跟 PM 說：交付物不是寫一張 ticket，也不是做一個跟 codebase 斷開的 HTML 原型。那是 Figma 裡的一張票。要在 codebase 裡做原型，改既有的東西。跟 agent 工作時，codebase 的約束已經在裡面。按下去送給開發者、變成 PR 時，要敢。非技術的人有冒牌者症候群，怕答不出技術問題，怕被審得更嚴。他說不用。Agent 知道 codebase。你給的是產品內容。Agent 交出看得到、在 app 裡跑著的東西。用你的 persona 做產品審查時，要有信心 code 照你要的方式運作，品質在那裡。後端的判斷留給開發者。

## 對 AI 好的，就是對人好的

[22:38](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=1358s) Patrick 做了 Tessl Patterns，網址是 tessl.io/patterns。背景用了 Karpathy 的 wiki 做法。現在做調查，散佈極大，有人很懂、有人不懂，效果很難講。他改看社群上人們怎麼做，抓住那個訊號。問題是廠商會說自己做得很好，實作者也在說。把舊點子濾掉。很多人做類似的事，就煮成一個 pattern。又意外又不意外的是：對 AI 好的，對人也好，反過來也一樣。給 agent 好文件，它就做得更好。給測試，你才知道它還能不能動。有可觀測性，你可以預期。儀式也一樣。Team lead 習慣 scrum 和 retro。若 sprint 結束時讓 agent 審查缺了什麼、他們有多有效呢。領導為人設目標、設量測。也有人兩個人一起寫 context。那是 pair programming，但對象是 context。

他給正要走向 agentic 的開發者一個建議：不要重複自己。不要一直口頭告訴 agent 該做什麼，寫下來。若你用工具驗證它有沒有做，就把工具給它。這和「我們來協作」不同，是讓它把工作做完。這個心態會把你壓向對的工程點。AI coding 一出來，典型說法是 coding 結束了、不再有工程。要拿到全部價值，帶進去的仍是好的工程。工程變成建造 software factory，或他說的 assembly line。Daniel 看到開發者會分叉。在乎把有價值的功能交到使用者手上的，會更產品。喜歡把 code 做乾淨整齊的，會更想做最好的 agentic 流程，去扭那些旋鈕。工程心態不消失，只是不再用在 code 上，而用在製造 code 的機器上。

[27:36](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=1656s) Patrick 說上雲的時候，每個人都想自己重做 kernel。夠好了，不需要每個人做自己的 kernel。這些年有人跟他說我們很特別、那套對我們不行。產業後來說那個迴圈在軟體開發裡是普遍的。他對 platform team 的建議是：首要工作是告訴人們，他們在建的 code 沒有那麼特別。差別是心態，是他們怎麼接近問題、帶進什麼。每種新技術都有學習期。Vibe coding 做出一個 app 的故事都很好。帶進組織的成熟，是說大概不需要每個開發者建自己的管線。那常常是同一件事，加上兩個變數。Platform 的心態是跨團隊可重用。

## 無限人力之後，PR 不該開著等

[29:05](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=1745s) Tammuz 回到生成式 AI 之前。若有無限人力和時間，有人開 PR，他會想標高風險還是低風險。合併後等兩週，看日誌，做成了沒有，有沒有漏掉的邊界。有了 agent，就沒有藉口不做你曾經想叫人做的每一件事，然後讓 CI 自動做。他們所有 PR 由 agent 自動標風險，進 staging 做 QA。發布前另一個 agent 依風險看日誌。日誌是給 agent 查的。每一張 PR：意圖是什麼，日誌長什麼樣，有沒有蓋到它該改的，有沒有漏邊界。高風險的 PR 常常仍漏東西，就算工程師很 agentic、有 QA、有測試。在 staging 一週後再回頭，還找得到更多，而且常常容易，agent 一下就處理。邊界只出現一次，因為產品因為 AI 不是確定的。心態是：若我有無限人力，我會叫他們做什麼。做一次、兩次，然後自動化，放進發布節奏。

Patrick 說這很像管理。風險不同，管法不同。風險很高，你大概在微觀管理，而且需要。有護欄、或不那麼重要、或產品裡有辦法減輕，就讓回饋晚一點來。他們把風險接到 PR 疲勞：高風險給更多人看。也接到 token 預算：低風險不花很多 agent 去查。像在經營一門生意。

CI 要改的關鍵，是平台必須容易被 agent 查，做任務當下能驗證，事後也能回頭查。環境要讓 agent 很容易用。Skills 會自己調，產品變、查詢方式變，它們繼續變好。開 PR 的方式、DevOps 的動作，都變得很 agent。要有回饋機制，agent 才有更高信心。Agent 不只寫 code，它是信心層：品質在、風險被管、東西移動更快。二十張 PR 開著，哪張重要，agent 會說，並推審查者去動。他說這在想清楚之前是流動的，想清楚就寫死，因為不想重複，要把心智負荷拿掉。

[33:48](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=2028s) Daniel 做功能時的鏡頭是：先讓它動，再可維護、可讀、有效能、安全。Agentic 開發要把這些鏡頭確定地套上，而不是希望一個 agent 一次看完，靠把所有東西塞進 `AGENTS.md`。他做了個小工具叫 Assembly Line。你或 agent 做了變更，另一個 agent 帶著一條確定的 prompt 起來：查 dead code、缺的測試、這個、那個。工程資源是無限的，為什麼不從所有鏡頭看一遍，並盡快把回饋給正在做主要變更的 agent，讓它不要偏太遠，能折回來。LLM 非確定地工作很有力，但不是時時刻刻都要那樣。他知道有人用 agent skills 去想怎麼部署到 production。他說去做一個平台。平台做了十年，確定、直接。也許用 agent 去建平台，不要用 agent 取代平台。那是在燒 token、重造輪子。確定性的位置，是先探索，再決定這裡該跑這種檢查。

Tammuz 說他們有兩個 harness，一個在產品裡，一個給內部 R&D。他不要 agent 一次走完整條你指定的路線。要它大步走這邊，統計上說得通，再大步走那邊。你不再跟 LLM 打架。它不想把一二三合成一步。它想做一、二，再一、二、三。品質會更好。Daniel 叫 assembly line，他們叫 nudging。內部的 R&D harness 得把人算進去。人是最慢的部分。他做了叫 pump 的東西：plan、merge、polish。Code 走太快，不能讓 PR 開著。若開著還要做 QA、產品審查、設計審查，做完時衝突已經很多，一切看起來不同，得重來。他說企業裡以 pull request 為基礎的流程是很蠢的主意。在開源、人們策略上不對齊、彼此不信任時，它很有道理。因為速度，回饋必須盡快回到正在改 code 的 agent。好的軟體交付根本沒變。快的回饋以前對人重要，對 agent 繼續重要，而且因為變化速率，更重要。

PR 一開，他們想盡快合併。人立刻看，讓它進去。要過 CI。不要等 QA、產品或設計。全部 feature flag。然後是 polish。東西已經在 code 裡。每個新功能從同一份 code 長出來。PM 可以審查，用他們的平台把 UI 和 UX 磨對，看見開發者在使用者面上做的壞決定。開發者讓功能動了，沒有磨光，沒關係，有別的角色。一個功能不該是一張 PR，該是三四張：開發者一張，PM 改功能一張，設計師調 UI 一張，也許 QA 最後一張。

[39:16](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=2356s) Daniel 和 OpenAI 的 member of technical staff Ryan 談過，字幕裡的姓是 Bobbili。他們有些專案完全拿掉人的審查。Tammuz 說他一直在看，回到風險。高風險，他要人。風險也看碰到 codebase 的哪一段、有多敏感。除此之外，他在把 PR 的評論和解決評論自動化。Agent 為團隊裡每個開發者建模，看他們過去的評論，字幕說 few hundred dollars。PR 一開，一批 agent 用他們建好的方式檢查。然後不同 agent 模仿不同的人來評論。再有 agent 去解決那些評論。然後 retro：錯誤日誌，它有沒有照你要的行為。風險不高時，他在走向可以跳過人。有些開發者完全反對，因為他們要開發者擁有它。他在讓他們舒服。也看可逆程度。Patrick 說 DevOps 自動化時，人們說我若自動化，就可以刪掉一切。測試和 CI/CD 的 harness 是那個保險。敘事是初階的人可以推上 main，測試 harness 會抓住。改運算的 code，和改資料模型，人們覺得風險不同。自動化有成本。把每樣東西擺上，現在是很多工作。技術成熟時，要拿到下一層全部的力量，通常更複雜，不是更簡單。

## 七十二倍，以及不該做的事

[42:32](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=2552s) Daniel 的一個客戶，團隊在需求收集、逐字、寫 story、實作上都擁抱 AI。他們現在快 72 倍。八年的工作，三分之一的人，軌道上是 11 個月做完。他們放棄了人的 code review。每個開發者拿一個 epic。有的用 BMAD，先寫 spec，有的先 vibe。自己合併 PR 之前，跑大約七八種 code review，不同工具看不同的東西。做久了，有信心不需要人看。資料搞砸，資料就沒了。我們要不要走到 event sourcing，讓資料轉換有可重放的歷史。趨勢一直是：用一道檢查阻止壞事，是錯的答案。資料庫從用交易防止不一致，那很慢、不能擴，答案是 eventual consistency，事後調和。Cloud native 發現你不能把一千個 microservice 全部做整合測試，你部署，然後看發生什麼。要有好的可觀測性，要能很快向前修。讓壞事發生，但反應更快。Agentic coding 也許走到 outcome driven development：你要的業務影響可被觀察。應用有沒有做它該做的，使用者能不能做他們該做的。工廠往外丟功能，然後看回歸，例如購物車結帳次數掉了，那時再反應、向前修。使用者接不接受按鈕換位置。有人講過非確定的想法，字幕說 non-deterministic impotence：同一份規格、同一份需求，agent 跑兩次，得到兩樣略有不同的東西，但使用者行為相同。像醒來發現 Apple 改了相簿，年長的父母很煩。會不會每天都這樣，功能快速翻動，略有不同，但我仍完成得了結果。

Patrick 用測試 Facebook 當例子。規則和功能多到很難寫一致的測試。他們加了在用 Facebook 的 agent，帶自己的規則，例如這個 agent 不該得到朋友、不該出現在任何清單。只有接到 production 才做得動。那是新的想法：不走僵硬的測試流程，而去追行為。壞行為出現時，用另一種方式看可觀察的東西，而不是只看日誌。他也覺得 digital twin 會更有未來，用來預測會發生什麼，再把風險帶回來：有一個 model，跑過它，看見發生什麼。

Tammuz 從另一面看 Facebook：大規模 A/B 的基礎設施，任何開發者做什麼都能被測。紙上很好。他們談的很多組織沒有這套。上週一家快一千人的，產品在往下螺旋。開發太快，PR 疲勞。PM 和設計師不再走完那些 PR。前端負責人在跟客戶的通話上發現新功能，長得不像其他功能，不符合 design system，功能上他覺得沒道理。跟客戶一起現場發現。事後問開發者，兩週前合併的。有沒有人看。看了，是審查的一部分。若有 A/B，至少會被擋住，不會立刻打到所有使用者。這家超過十年、品牌很大、使用者依賴多年，很快採用了 agentic coding，卻沒有夠好的護欄，現在往回旋：等等，我們得控制。不能把按鈕移走藏起來，那是核心流程。Agent 對 UI 變化沒問題。麻煩的是人。也許幾年後按鈕會被別的互動方式取代。我們仍是視覺的生物。會上有一場談白板，因為有些事白板比打字好表達。擺錘很有趣：曾經是 CLI，現在回到 orchestrator 的審查工具，因為我們得看見發生什麼。只要人還要對風險做決定，就得被說明。若我們自己不再做，這就是挑戰。

[50:57](https://www.youtube.com/watch?v=S2TNNyaxXUQ&t=3057s) 該停的事。Patrick 說仍有一種傾向：跟 agent 一直對話，就表示我們在控制。要走到下一哩，得放手。去指導另一個，而不是自己做。做了很多年的人，這很怪。那幾乎是他們覺得自己是專家的身份。

Tammuz 先說控制 AI 支出。人們放出很瘋的預算，想讓每個開發者 token max。若任務是開發者有興趣的，他們會更投入那個 session。若是沒興趣的，他們會把心智負荷全卸給 agent。PR 品質差，token 花得更大。沒興趣的人會說讓 agent 去測，而不是自己測、看出問題、說這就是問題。Agent 做七輪 QA，session 的 token 瘋掉。給人不在乎的路徑，是很快花掉 AI 預算的好方法。另一個他看很多的錯，是一頭栽進 AI native，辦法是把 Claude Code 給所有人。名字裡有 code，對開發者很好，他喜歡。對非開發者絕對不好。他們不知道怎麼架環境，會問到讓開發團隊發瘋，或者做不出有意義的工作。若開了 PR，就是垃圾進、垃圾出。他看過產品 VP 在通話上炫耀昨天開了一張 PR，旁邊的 CTO 說對，很棒。不是該走的路。Enable 的時候，工具要為那個使用者最佳化。他們為 PM 和非開發者最佳化。給錯工具，預算很快花掉，人挫折，開發者這邊 PR 疲勞，很差的 PR 讓疲勞更重，最後大家都失望。

Daniel 說不該再做 2025 那種零碎：CTO 讓人用自己舒服的工具。結果不一致，組織學不到東西。要有明確的命令：AI 這班車要開了，請上車。Multitudes 的研究把這顯示成 agentic coding 採用成功的強指標。Token max 的另一極端也不要。他看過一個月 100 歐元的 token 上限。100 歐元做不了多少，還加上認知負荷：這件事該用 Cursor 嗎，這是我這個月最重要的事嗎。中間某處才合理。

然後重新想什麼是測試。他引 Beyoncé：若你喜歡它，就該在上面放一個測試。你在乎的東西，就要有東西去斷言。可以是功能測試，可以是帶著特定鏡頭的 agent 掃過一個顧慮，可以是用 MCP 把 agent 接到可觀測性，讓它發現自己建好、部署出去的東西正在壞。要有那些回饋迴圈。若 agent 單獨一個，你期待它第一次就全對，又不能感知自己可能犯的錯，你會得到壞結果。先弄清你在乎 code 的什麼：架構站不站得住、品質高不高、測試覆蓋好不好。然後確定有東西證明它在那裡。不完全是測試，是把非功能的面向當成測試來想。

Tammuz 加上時間和 context 提示。每個測試要經得起時間，要長青，也要是給 context 的機會。失敗時，斷言、註解、錯誤回應裡要有足夠 context，接到它的 agent 才知道怎麼做。懶的說法是我用測試蓋過了。不夠。測試還要有 context 提示，未來的 agent 才知道拿它做什麼。這對 agent 管理複雜 codebase 很有影響。Daniel 說這一直是好的開發實務。沒有比跑測試只看到 assert true 失敗、錯誤十三比十七更糟的。我現在拿這個做什麼。

座談最後他們各預告一場。Patrick 講從個人、團隊、platform team 到 VP 的層次，進這個 agent 世界需要什麼心態。不是辦一場 hackathon 那種泛泛的轉型，而是怎麼擁抱這件新事。Tammuz 講變成更 AI native 的組織，非開發者真的在開 PR。該看的指標是合併，不是開了多少張。看合併率，才知道是品質，還是只是變多。Daniel 和 Tomasz 一起講，字幕裡單位聽成 Adam。他們把 120 個開發者帶上 agentic coding。他開玩笑說那場最重要的是看見他穿螢光衣。三場都有錄，節目說明裡有連結。若只能看一場，他們說三場都看。
