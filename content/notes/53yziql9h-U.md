# Am I Still a Software Engineer If I Don’t Write the Code? with Annie Vella

Annie Vella 是紐西蘭 Westpac 的 distinguished engineer。Simon 主持，這次現場、不再剪。片長 37 分 19 秒，英文自動字幕。她在奧克蘭大學兼讀工程碩士，研究 AI 對軟體工程的影響。字幕把校名聽成 Oakland，把 Westpac 聽成 Westpak。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=53yziql9h-U)

## 一句話

軟體工程師把上游和下游交出去，只留下別人覺得獨屬於我們的那段：寫 code。生成式 AI 正好很會寫。Annie 不認為這個職業死了。她擔心身份被掏空：少寫、審沒有多很多，信任起得太高，工藝被跳過，人變成輸出的操作員。她要校準過的信任，以及一條可以來回擺的身份。

## 角色被削窄之後，AI 接走了剩下的那一段

[0:44](https://www.youtube.com/watch?v=53yziql9h-U&t=44s) 她當軟體工程師二十多年。前半是 IC，大約一半時不情願進了管理，之後在 Charity Majors 說的 engineer-manager pendulum 上來回。她推薦有機會的人都走一走。她自稱 nerd。

[2:46](https://www.youtube.com/watch?v=53yziql9h-U&t=166s) 六歲的 Commodore 64 和兩本 BASIC 手冊把她勾住。從空氣裡做出東西有魔法。過去幾年她覺得有東西在移：大家慶祝 AI 讓我們多快，她問軟體工程師的核心會怎樣。對有些人這像被掏空。她引 Frederick Brooks：程式設計師像詩人，只跟純粹的思想隔一層，用想像力從空氣蓋出城堡。做出對人有用、漂亮的解，build 過、測試過，是一陣 dopamine。它也幾乎總是比該有的難。環境、可靠、韌性、規模、負載、安全，都在裡面。

[5:03](https://www.youtube.com/watch?v=53yziql9h-U&t=303s) 複雜度用分工來管。Product owner、architect、quality、platform、security。很多組織裡軟體工程師被削窄，是設計，不是意外。上游下游交出去，留下寫 code。產業還發明了 product engineer，給那些仍做軟體工程師以前被預設去做的全部事情的人。

[6:06](https://www.youtube.com/watch?v=53yziql9h-U&t=366s) 生成式 AI 非常會寫 code。不完美，但好過很多人以為可能的程度。她的頓悟是 Windsurf：她請它改東西，它發現自己刪太多，道歉，然後修好。Anthropic 的 Dario Amodei（字幕寫成 Stereo Armaday）說未來六個月 90% 的 code 由 AI 寫，不久到 100%。Zuckerberg 說 AI 大概 12 到 18 個月內可以自己寫大部分 code，而且會比頂尖 coder 好。正在選職業的人開始問入行是不是太晚。

她幾個月前寫了身份危機的文章，是她寫過最受歡迎的一篇。部落格她斷斷續續幾十年，通常覺得沒人在乎。這次陌生人感謝她，有人寫長信。Charity Majors 也貼了。她一直覺得這門學問一部分是科學、一部分是藝術：有約束仍有解釋空間，很少只有一條對的路。2024 年初插畫家 Beth Spencer 做了 created with human intelligence 徽章。她不是叫工程師同樣起義。情緒反應是自然的，採用卻在衝，她覺得我們比較矛盾，不是抗拒。

GitHub 2023 年調查 500 位美國開發者，92% 已在用 AI coding assistant。Stack Overflow 2024 年近 61,000 人，62% 已用進 workflow，另 14% 計畫當年開始。HackerRank 2025 年的報告裡，全球近 13,500 人有 97% 至少用一個 assistant。這些工具才幾年。

## 少寫很多，審卻沒有多很多

[11:08](https://www.youtube.com/watch?v=53yziql9h-U&t=668s) 她約七個月前的調查有大約 160 位正在用 AI 的專業工程師。開放題裡三種幫助：時間，尤其 boilerplate、原型、測試；認知支持，解釋複雜或 legacy code、像 pair programmer，有時把人推到問題定義和系統設計；flow，AI 取代 Stack Overflow、Google 和文件，人留在 IDE。她還歸到解題、探索新技術、減少 analysis paralysis、當學習輔助、讓有些人去接以前不會接的角色。參與者原話字幕沒有逐字留下。

[13:19](https://www.youtube.com/watch?v=53yziql9h-U&t=799s) 84% 覺得感受到的生產力至少有提升。樣本自願，可能偏愛這些工具。生產力的增加幾乎沒爭議。另一側才剛開始被研究：我們失去什麼。參與者明顯少花時間寫 code、重構、寫測試。審 code 和除錯只略增。她問：寫少了那麼多、審卻沒有多很多，我們真的懂自己在建什麼嗎？生成那麼快，review 追得上，還是注意力下降，也就是 vigilance decrement？AI 把地形抹平，人可能不再注意到自己跨過了什麼。

[15:18](https://www.youtube.com/watch?v=53yziql9h-U&t=918s) AI 聽起來有信心、幾乎不表示懷疑，所以信任起得高。它卻是 non-deterministic，也會 hallucinate。對人的信任從低開始，靠互動堆上去。對 AI 從高開始，因為期待被誇大，輸出一不穩，信任掉得快。2025 年 GitClear 報告分析 2020 年 1 月到 2024 年 12 月的 2.11 億行。光是 2024：複製貼上增加 17.1%，重複的 code block 增加八倍，code churn 增加 26%。Churn 是寫好、推進 git，兩週內被 revert 或大幅修改。

若這就是生產力，定義也許要改。我們要的是更快而且更穩。2024 State of DevOps 報告發現這件事因 AI 在下降。工作假說是 code 產得更快本身是問題的一部分：變更集更大、送得更快，加上 review 時注意力下降，短期有得，長期穩定和還沒被看見的技術債付出代價。

## 十年的工藝不能用 prompt 跳過

[17:53](https://www.youtube.com/watch?v=53yziql9h-U&t=1073s) GitHub 的 CEO 等人說，省下的時間會拿去設計高層架構、系統思考、專注 intent 而不是語法。那些不是更好的 prompt 變出來的。它們來自經驗、刻意練習、摩擦和失敗。1980 年 Stuart 與 Hubert Dreyfus 的模型認為，任何技能從新手到專家要十年辛苦而且多變的工作。每一步增加情境記憶、整體辨認、直覺決策和被吸收的覺察。抄近路繞過工藝，就是她說的風險。

[19:12](https://www.youtube.com/watch?v=53yziql9h-U&t=1152s) World Economic Forum 她說到 2023 年最要緊的技能：systems thinking，以及 resilience、flexibility、agility、leadership、social influence。他們認為較不必要、也不太會增加的，包括閱讀、寫作、數學，還有 programming。Curiosity 和終身學習仍重要。沒有自己的判斷基礎，就無從知道架構穩不穩、抽象有沒有意義、系統擴不擴得了。有經驗的人現在大概還好。從未把系統從失控裡拉回來的人，未必認得出事情開始不對。技能不練就忘。太依賴 AI，人變成輸出的操作員，不是系統的工程師。Calibrated trust 是長期真的有益時靠它，也知道何時放慢、用自己的判斷。

研究裡學習的負面大多是過度依賴和技能侵蝕：為了速度複製貼上、記不住、沒想通。有人覺得自己變笨了一點，也有人已在降低依賴。開發者以那些必須剛好才會動的寫法為傲，多年的 leetcode（字幕寫成 leak code）是為了面試。失去這些並不愉快。

[22:23](https://www.youtube.com/watch?v=53yziql9h-U&t=1343s) 這像她十多年前轉管理。時機對，她不想離開 code。不每天 tinkering 會生鏽。她得信任團隊做她習慣自己做的事，像把工作和滿足外包出去。Patrick Debois（字幕寫成 Dvoir）寫了四種 AI-native 模式。第一種從 producer 到 manager：自己寫，變成審查和接受，人去編排 agent 團隊。另外三種字幕沒有展開。她沒有水晶球，但沒有選擇，只能學會在新系統裡工作。

## 把角色收回來，把接縫露出來

[23:50](https://www.youtube.com/watch?v=53yziql9h-U&t=1430s) 若專精寫 code，去收需求、做設計和架構、測試策略、自動化測試和 evals、DevOps、運行、維護、除錯。用做來學，去補那個永遠缺的供給。AI 之下，當初為了複雜度而拆開的角色，可以在 AI 補缺口時壓回較少的人。很多新創已經用更少的人把想法做起來。

新問題包括：prompt engineering；把 prompt 或 spec 放在它們生成的 code 旁邊，變成一等公民，source control 也要應付大量生成的 code；建造、測試、除錯 non-deterministic 系統；把權限交給代你行事的 agent，卻不交出全部 credential；一個流量大多由 AI 互動構成的網際網路；人和 agent 的高效團隊怎麼設計、協作怎麼量。

[26:16](https://www.youtube.com/watch?v=53yziql9h-U&t=1576s) Google 研究者提出 seamful AI：不要無縫，故意把接縫照出來，創造力和學習在那裡。GenAI 不表示懷疑。做不到有信心時該說。多個解也該說，讓人選擇，並把沒被選的選項留下，不只留最終輸出。工業革命裡工匠的手離開工具，多數人沒有消失。他們設計工廠、修機器、看懂流動。我們也許碰不到每個檔案，但仍要看見系統。覺察可以變成新工藝的一部分。

她第一次當經理時以為永遠離開工程。後來在 IC 和領導之間擺了不止一次。身份不是固定的。職涯不必是直線。軟體工程沒有死，但不會像過去。角色被增強，沒有人比從業者更適合重新想像它。更好的問題是：你還在解決問題、塑造系統、把工藝往前帶嗎？若是，你仍是，只是被重新想像過的。本質是解決、建造、思考。

## 問答

[30:13](https://www.youtube.com/watch?v=53yziql9h-U&t=1813s) Juan 問該不該一邊工作讀線上 AI 碩士，他打算讀 Texas University。Annie 說任何學習都值得：你學的是怎麼學，也會被送上不知道的路。已在產業裡則看角色。有邊做邊學的機會，learning by doing 最好。若日常都是已知的，而你承受得了讀書像第二份工作，她說問她就知道，那就值得。

[32:31](https://www.youtube.com/watch?v=53yziql9h-U&t=1951s) 有人問大學和高中的學習會被什麼取代。主持人轉述，有人不會建議孩子讀現有的 computer science，因為它給不出未來角色要的東西。Annie 已在和教授、Google 的研究者談，順利的話今年稍晚會合作論文。她二十多年前的第一份工作沒用上大學那些可指認的技能，但基礎在沒察覺時幫忙。她學過 Java 和 C++，從未靠它們工作；學過資料存在硬碟上，所以知道該多用 cache，少讀寫正在轉的磁碟。前一天有人在 YouTube 說不必再微管自己的 code，因為靠向 vibe coding。教育仍值得，教育者得教往前仍然相關的東西。

[35:48](https://www.youtube.com/watch?v=53yziql9h-U&t=2148s) Jean Kim 問分析裡最大的意外。她意外那麼多人感覺那麼強，別處卻幾乎只看到兩極：工具太棒，或它們永遠取代不了工程師，因為一直 hallucinate。很少人問你會不會想念這門工藝、下一代還有沒有同樣的好玩。她說有五萬多人似乎有某種這種感覺。愈談，就愈能一起做點什麼。
