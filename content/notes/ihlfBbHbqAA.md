# Vibe Coding SimCity: Prototyping Tiny Towns with AI Dev Tools

Simon Maple 主持的動手集，片長 43 分 19 秒，英文自動字幕。Joe Holdcroft 第一次上節目，他是 Tessl 的 engineering manager。Macey Baker 第三次上節目，出題。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla、Tessa，把 Base44 聽成 base 64、base 44。

- 原片：[YouTube](https://www.youtube.com/watch?v=ihlfBbHbqAA)

## 一句話

同一句很空的「做一個 tiny town simulator，你有 10 分鐘」，兩個原型工具走出完全不同的路。Base44 兩分鐘內交出一個能點、會過日、會算錢的城鎮，但幸福度一開始只會往上加。Bolt.new 生出一份看起來完整的 React 模擬器，人口卻停在零，事件不觸發，錢花不完。Joe 在修這個迴圈裡燒掉大約 25 萬 token。下一集他們交換 codebase，改用 Cursor 和 Windsurf。

## 一句話的題，十分鐘，兩種工具

[0:36](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=36s) 這是兩集裡的第一集。只聽聲音的人，他們會把畫面講出來。影片在 YouTube，網站是 ainativedev.io。這集用的是很原型的工具，幾個句子就能生出整個 app：Base44 和 Bolt.new。下一集下週，把生出來的應用拿去用更貼近 code 的工具加功能，Simon 用 Cursor，Joe 用 Windsurf，而且交換 codebase。

兩人都沒看過題目。Macey 故意不給完整 prompt，想看他們怎麼解。大約十分鐘 live coding。Simon 先用 Base44，Joe 用 Bolt。

[5:09](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=309s) 打開來只有一句：build a tiny town simulator。Simon 想到 SimCity。他拆成模擬引擎、要顯示它的 UI，以及計時，讓每一天或每一小時有事情發生，像人口太擠時要認得出來。SimCity 裡他記得住宅、工作與工業，第三類一時想不起來。Joe 說醫院、交通。Macey 說完全由他們決定。Simon 決定從小開始。

他選 Base44 是因為用過很多 Bolt，聽人說 Base44 是更好的 Bolt。他没碰過。畫面看起來像沒開 dark mode 的 Bolt。他只打「build a tiny town simulator」，看它會不會直接做出 SimCity。這類工具知道 SimCity 和其他城鎮模擬，可能不用他問就做很多。Joe 也覺得這是阻力最小的路：看它腦子裡有什麼，跟著玩。在一個很特定的願景上迭代，對原型工具會比較難。Prompt 和題目愈細，Base44 或 Bolt 愈可能做不出來。

## Base44：兩分鐘就有一座能玩的城

[8:01](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=481s) 它建了 building entity、town entity、building catalog、town grid，然後 town stats、new town 對話。偏 UI。有錯誤，它說會自動修。Lucide React 裡沒有 upgrade icon，它選了 JavaScript。很多這類工具走 React。Simon 說 Claude artifacts 先這樣做，Bolt 很像。它還回應自己：你說得對，我來換掉不存在的 upgrade icon。對只聽聲音的人，它說有錯誤、我會修，然後什麼都沒發生。他點開再點回去，畫面才出來。

人口 5、幸福度、treasury 也就是預算、收入。他根本沒想到預算。可以開新城鎮、可以存。建築目錄有 residential、commercial、industrial、special、park、hospital、school。格子排版，而且很會隨畫面縮。Workspace 是資料：building 表和 town 表。Code 裡有那些元件，兩個 entity。他覺得這比他要的複雜。編輯器和真正的 app 之間的線，他們一開始沒分出來。

[11:36](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=696s) 他接著要求：一個計時器，1 分鐘自動結束一天。新城鎮選項不要出現。變更時自動存。請拿掉存檔鈕。他說以後不知道這會走到哪，要對 overlords 客氣，所以說 please。他留著住宅來玩。放一棟房子，城鎮重載。公寓讓收入變、treasury 下降、幸福上升。再放 luxury condo，也要求能放路。

他說那句題目他兩分鐘就做完了，對這種原型軟體太容易。題目空，他給 Base44 的也空，回來的不是他腦子裡的東西。好處是極快，而且做出他沒想到的東西。壞處是他要的很簡單，心裡是 SimCity，這個有點像、又不完全像。改東西感覺比他用過不少的 Cursor 更容易。

## 幸福只會加，建議卻太急

[14:11](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=851s) Joe 問有沒有負的幸福，因為幸福是 100%。Simon 加了四條路，UI 很糟，幸福因為路加到 100%。他要求更現實的幸福平衡。計時器出現在右上角，顯示第幾天。每日收入讓 treasury 從 400 到 427，當日收入 27，來自建築。什麼都加幸福，幾乎沒有東西減，但路每天花錢，他說是磨損。小工廠會減幸福。發電廠減 10。他原本想在每棟房子旁放電廠，現在不行。第三天 treasury 454。他又要求路的圖要像路，相鄰的路要接起來。他兒子在玩 Jurassic World，他想看到的是那種。七分鐘時，已經比他以為十分鐘能拿到的多。

Macey 提醒下一階段 Joe 會拿到同一個 prompt，然後互相改對方的東西。Simon 說現在的瓶頸不是寫 code，是規格不夠，要 Macey 給更多才能再往前。它去改 building catalog 和 town grid，大概是幸福和路。Joe 喜歡元件上的載入圈。很多原型工具是把 prompt 射進虛空，不知道在發生什麼。Simon 用過很多 Bolt，覺得 Base44 慢很多，回來的東西卻完整得多。他感覺同樣的要求丟給 Bolt，不會有現在這種能力。

[18:07](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=1087s) 弄懂之後，他喜歡 workspace：這個 app 的控制、資料儲存都在一處，還有 custom domain，可以直接發佈。點進 workspace 之後，路變成純色方塊，他說像城裡一根巨大的方尖碑。路的幸福是零。公寓是減 2，小房子加 2，購物中心加 5。他要它以使用者身份建議下一步：房子太多就該說你需要更多商業或工業，像 SimCity。Joe 覺得人口和幸福應該會隨時間變，現在卻釘在這些物件上。重新發佈後狀態還在，從第六天到第七天，房子沒有被清掉。資料是靜態的。

回來的「建議」是一組沒用的 tips。它把問題理解成「我來加 tips」。Joe 說這是他跟 Simon 講過的，過度急著寫 code。它應該先問。聊天上有 revert。Simon 沒讀就按了，tips 很快被還原。有某種版控，但不像很大的版本控制，比較像單一使用者的還原、像狀態。從點進 workspace 之後他沒再點回去，只是說話和看。非常 vibe coding。

[21:25](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=1285s) 他對 Base44 的結論：從五個字到一個能點、看起來完整、做了他預期中某些事的 app。以他有限的前端能力，自己做要遠超過一週。他沒看 code，所以不知道品質和測試。對他這是魔法。Joe 更偏前端，大概會覺得這在糟蹋那個問題。

## Bolt 交出一座鬼城

[22:15](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=1335s) Joe 第一次用 Bolt。他想到簡化的 SimCity，或廉價 Duolingo 方案廣告裡那些種胡蘿蔔的農場遊戲。比較模組化。SimCity 那條路裡，你不一定是一個角色，你是在設計城鎮、蓋房子、管資源。他列住宅、公共設施、醫院、消防、警察。想要一點風險，正向和壞的事件。怕太複雜，所以事件種類和物件不要太多。

他的 prompt 比 Simon 長。做一個模擬 tiny town 的小遊戲。玩家設計城鎮，包含住宅、醫院、消防站、警察局、社區中心。隨機間隔發生事件，測試城鎮的配置和效率。例子不是完整清單：社區中心的音樂活動、某處失火、新人搬進來需要住所。他已經覺得範圍太大，不知道按下之後會怎樣，也不知道這算不算嚴重規格不足。

[26:17](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=1577s) Bolt 想了很多，比他放進去的思考多。環境很像 IDE。它在做 React、元件和 state management。Joe 說如果自己用 React 做，他會很氣自己接了這個任務，他不想用 React 做複雜的 SimCity。它推論出城鎮統計：有 treasury。他們沒說要怎麼計分，也沒說時間。開局 10,000 美元，幸福、安全和健康各 70%。他說有點緊。它沒漏掉他要的東西，規格也不特別好，還加了一堆。錢的概念是它加的。他放一排房子，錢還是 10,000，房子像免費的，除非換日才扣。操作有點不順。第二天收入 0。他說這是無限金錢，要是人生這樣就好，還用了 SimCity 的 Rosebud。再進一天，第三天，收入還是 0，什麼都沒發生。沒有人進城，沒有人花錢，沒有事件，統計不動，人口停在 0。

他回去跟它說它沒有交付。他想看 Bolt 的迭代和修 bug。它很快說主要問題在事件系統的時間，以及人口成長和金錢的遊戲邏輯。Joe 說這只是把他說壞掉的東西重複一次，不是某個 bug 的根因。它重寫一部分檔案，不是全部。事件間隔被縮到 10 秒，意思像是要他等。這不是即時模擬，要按按鈕進下一天。他不認為得等 24 小時。錢仍然無限。兩間醫院挨在一起。城裡沒有人，幸福卻掉很多。第三天收入 0、維護是減 0、人口 0。幸福 30%，所以人不會搬來，可是本來就沒有人。社區中心鋪滿也不會持續帶來快樂。統計改一次就停。他覺得任務可能太複雜。

[32:20](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=1940s) 失火造成顯著損害，條件是消防站距離等於無限，因為沒有消防站。回饋對使用者還算清楚，事件邏輯聽起來站得住。他的直覺是某個小 bug 讓什麼都不動，於是看起來像很多東西都壞了。剩下幾分鐘。人口不成長，其他統計就卡住。他可以故意把 code 弄亂來絆 Simon，但覺得不公平，因為它已經不能用。這是一座被設計好、立刻沒人入住的鬼城。

## 修不了的迴圈，和留給下一集的 code

[33:39](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=2019s) 他再試一次：請修人口成長，每天來一批隨機但合理的新居民，也可以是零。他說自己現在很信任 LLM 對「合理」的定義。以前不是這樣。現在只要說別讓它瘋狂，它就有個概念。Macey 聽不出他是不是在諷刺。然後卡住：訊息沒完成，一直轉。退回的方式是逐項 undo。前面的 undo 是停用的，也許只有上一版和現在這一版。game reducer 被改很多次，state 都在那裡，bug 顯然也在那裡。檔案很長。他好奇這些工具怎麼做 context management。人口還是不長。他不想鑽進 code。Code 讀得懂、站得住，但很多，不知道有多少真的被用到。IDE 不能 command-click 跳轉。他可以匯出，下載不算快。新居民這個事件類型存在，嚴重度是正的，只是沒發生。觸發隨機事件時會找一棟建築，在地圖上標出來。他試了三次，信心不高。事件系統寫著每 10 秒該有事件，他們看超過 10 秒，他不相信有在發生。

他改規格：不要盯著畫面等。進到下一天時才發生事件，一天可以多件，不要用 setInterval 在一天裡一直觸發。同一件事他說了兩三遍，自認是壞的 prompting。Macey 說這就是職業軟體工程師在對這種工具下 prompt。後面的 LLM 不是軟體工程師，想事情的方式不一樣。它更新了事件系統和 reducer。新居民進城可能被當成緊急事件。他覺得自己可能把本來會動的東西改壞了，若只是等，也許之前是好的。沒有 diff。只能退回一個請求。他還原，因為更不信。若要再查，就得掛 debugger 或打 console log。工具本身沒給多少幫助。他改問為什麼沒有事件、為什麼人口Never 超過零，而不是叫它修。它說事件系統沒有正確觸發，因為 dev server 在跑。Bolt 的重點就是跑這份 code、把輸出秀出來，畫面上是 `npm run dev`。LLM 不理解他是在 Bolt 這個情境裡。

[40:02](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=2402s) Simon 注意到 token 燒得很快，25 萬。很多花在「請修好這個」的空轉裡。Joe 說還沒看到這些 token 的價值。最初的骨架很驚人。把它弄到真的會動，就沒那麼好。預覽角落有一行 Tiny Town Simulator 的 copyright。

剩下的 token 他拿來做一件工作上不會下的指令：把函式和變數名換成好笑、有點難懂的名字，混淆下一個要碰這份 codebase 的人。若太過分，就用他下載的那份。它沒有改核心 code，只是 import 時取別名。chaos 的結果叫 YOLO meter，town vibes 叫 town mood。還有 initial chaos、YOLO prices、money drain。沒那麼令人困惑。初始的 chaos 是什麼都沒有，沒有人，一切都好。他想再撒誤導的註解，token 大概不夠。他覺得 Simon 光是現況就會有麻煩。

[42:17](https://www.youtube.com/watch?v=ihlfBbHbqAA&t=2537s) 第一集停在這裡。兩座 tiny town 都做出來了。Joe 用 Bolt，Simon 用 Base44。下一步交換作品，Simon 用 Cursor，Joe 用 Windsurf，加上 Macey 再給的一個新功能。下週。
