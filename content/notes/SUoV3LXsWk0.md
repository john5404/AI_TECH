# From Vibe Coding to AI Native Dev as a Craft

Guy Podjarny，Tessl 的 founder 兼 CEO。Simon 介紹他。這是社群活動的第二次，他說有好幾百人。片長約 33 分鐘，英文自動字幕。字幕把 Tessl 聽成 Tesl、Tessle、Tesla，把 ChatGPT 聽成 chach，把 Waymo 聽成 Whimo，把 Devin 聽成 Devon，把 Snyk 聽成 snake。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=SUoV3LXsWk0)

## 一句話

工具已經從三年前幾乎只有 GitHub Copilot，長到多到數不清。採用沿著兩條軸走：要改變多少工作方式，以及要信任它多少。Vibe coding 很魔，但 review 接不住愈來愈大的變更。他要的下一步不是再審一次，而是讓 stochastic 的工具對做出來的東西給出 commitment。

## 信任一軸，改變一軸

[1:35](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=95s) 大約三年前，真正有採用的 AI dev tool 只有 GitHub Copilot。現在他說有數千、也許數萬個。三月底他們發了 AI native dev landscape，不到兩個月整理約 150 個，現在快 300，大概還不到外面的 10%。工具夠多，才看得出演進。

[2:52](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=172s) 地圖是他去年九月寫過的 2×2，不限開發工具。橫軸是信任：從 attended 到 autonomous，這個工具要多可信才對我有用。縱軸是改變：我要改多少工作方式才用得了。圓點大小表示採用。自動停車、維持車道幾乎不改開車方式，但人要盯著，必要時抓方向盤。Waymo 這類 robo taxi 也不改「叫車、上車」的習慣，可是把命交出去，信任很高。兩者都朝右上角的全自駕走。文字生影片則是高改變：沒有攝影機也能做影片，以前貴的變便宜，反過來也有。

## 補完很好用，直到它發明 API

[5:08](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=308s) Coding assistant 仍是最廣的一類，從 code completion 起。大家已習慣 IntelliSense，現在片段更大、更聰明，按 tab 接受。改變少、信任要求低、全程有人看，所以採用最大。

[5:51](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=351s) Chat 熱潮把「用 Python 寫一個函式、用 Stripe 收一筆交易」丟給 ChatGPT。它帶進 Stripe API、交易和 Python 的知識。人看不懂產生的程式，出錯就把錯誤貼回去。於是 chat 進了 IDE，也出現 context management：選一段程式，請它寫 unit test 或提問，不必再複製。

[7:00](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=420s) 失敗主要是幻覺。一張公開 pull request 裡，它提議 `get spectral line list`，寫得很優雅，函式並不存在。另一個他很喜歡的例子在四月，他說是一年多前：Tessl 團隊的 Copilot 留下註解，大意是 TODO Kevin，這是讓 TypeScript 開心的 hack。團隊沒有人叫 Kevin。從此出事就怪 Kevin，他說現在大概也不能真的雇一個 Kevin。

[8:23](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=503s) 圖上，code completion 在左下，圓最大。Chat 產生程式信任要求仍低，因為你自己決定貼不貼，但跟搜 Quora 或 Stack Overflow 相比已是一種改變，圓也不小。Cursor 帶頭做 predictive edits：改一處，它猜你還要改別處，tab 可以跨行，後來跨檔。加上 chat，修改感覺像瀏覽器裡的 pull request，理論上仍有人監督。

[9:44](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=584s) 對 codebase 的理解也在加：從完全不懂、只是通用開發者，到看開著的分頁，到你指定要帶哪些檔，到 context window 變大、讓它自己弄懂專案。很多工具現在試著索引整個企業 codebase。這會進 completion、進你問自己程式庫的問題，也進新專案和新測試。副作用是 garbage in, garbage out：既有程式裡有該重複的模式，也有不該重複的。產業還在調這個。

[11:10](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=670s) 信任問題從單一 API 幻覺變成 slopsquatting。一份研究拿一批 prompt，五分之一建議的套件並不存在，比他親身遇到的高。43% 的時候，同一個幻覺套件每次都被建議。攻擊者可以先看 model 會編出哪個不存在的名字，再去發布惡意套件。名字看起來正當，使用者很難看出那不是自己要的熱門套件。

[12:10](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=730s) 多檔修改仍算低改變，像瀏覽器裡的 PR，但信任要求更高：它得常常選對檔，不然你會停用。問自己的 codebase 也要相信答案，不過多半還查得到。內部文件常常很快過期，所以這是新習慣，工作流本身還沒大改。

## 週末專案很好玩，專業軟體還沒接住

[13:08](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=788s) Andrej Karpathy 把一種行為叫做 vibe coding：叫 Cursor 做事，不再讀 diff，錯誤丟回去，程式長到超過自己能懂的範圍，於是也不再是好的 reviewer，有時走到死路。他說週末丟掉的專案沒關係，不是給專業用的，但很誘人。Cursor 底部的 accept all 讓這件事變容易，後來很多工具都有。YOLO mode 後來改名 auto run，他比較喜歡舊名。進了這個模式會多跑一些測試，也能給指引，但決定權大量交給 LLM。Claude Code 有 auto accept edits。

[15:13](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=913s) 這是零保證的環境，週末可以，顯然也被用在更多地方。圖上採用仍小，他覺得專業開發裡的採用比該有的高，因為太誘人。信任軸往上，但沒有到頂：你委託的是寫程式，產品還是該自己看。Karpathy 仍會檢查產品能不能跑。對比重自駕，或 Intercom 那種直接回答客戶、沒有人再驗證的 support agent。

[16:31](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=991s) 另一類是 prompt-centric：Lovable、Bolt、v0、Base44。看得到程式，但產品設計是你給 prompt、看成品、審的是產品不是 code。只有失敗、要做很特定的事時才碰 code。很多使用者不是開發者，用途也不是專業軟體。它們擅長一次性的東西：給朋友的 quiz night、功能原型、工作坊工具，用完丟掉。小，所以改動審得完，也不在乎壽命和正確性。一長大就開始不穩。他放了一段他看過很多次的影片：先做一個會讓我發財的多人飛行模擬，再把飛機改藍，然後一直說 more realistic。他用另一個顏色把這類畫成 toy dev。沒有長期擁有、維護、正確性，目前也不假裝有。採用和價值是另一個用途，他不低估。

[19:28](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1168s) 這條路的終點是把這種能力帶進專業開發。Model 變好，MCP 讓 agent 更好接 tools。他分成兩格。一是窄的：發現問題、修好、提案，接受仍由人決定。例子是 Snyk 找漏洞並提案修復；還有一家做效能的，字幕聽成 code flesh。測試、文件也類似。有一些自主，但還不算 autonomous。二是寬的：展開需求、走 SDLC、部署、修問題。比剛推出時好很多，代表是 Cognition 的 Devin。自由度大，企業的專業開發很難整段接受。企業真的在用，多半是較窄的：產生測試或文件、blast radius 小、還審得了。寬的用法在右上角，還是未來。他請人去看 landscape，當天的 tools track 還會從需求、測試、文件生成到 DevOps。

## Review 不是終點

[22:32](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1352s) 重複出現的是：系統做更大的事，多半做對，卻不能為結果背書，所以要人 review。他認為 review 贏不了。讀別人寫的，注意力少於自己寫的。效能問題，或「少了一個安全控制」這種缺席，都容易漏。要審的愈多，每一塊得到的注意力愈少。Accept all 若從 2 個檔、31 行，變成 2,000 個檔、13,000 行，等於沒在審。需要 review 的任務，規模就被卡住。

[24:05](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1445s) 用了幾個月、程式幾乎不是自己寫的，你還審得動嗎。他覺得不行。有人誤按 Cursor，得到一段話：我不能再幫你寫，你應該自己發展邏輯，才懂系統、才維護得了。那是按錯，Cursor 還是會繼續寫。但那句話是真的：沒寫過就維護不了。Review 在範圍和時間上都擴不了。若工作變成每次相依升級、每次 API 變更都審，人就是瓶頸，寫程式省下的時間換成審稿。而且 review 不好玩。他希望 AI 拿走苦工，不是把人變成全職 reviewer。

[25:44](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1544s) 乾脆跳過 review、相信它通常對，在軟體變大時也很難。部署次數、系統數量、變更次數乘在一起，就算單次機率小到字幕寫成 01%，也會爆開。AI 不負責，人和公司要負責。社會還會問：把決定交給 AI 從何時變成過失。自駕車撞人，公司說我們交給 AI，它 99.99% 的時間是好的。什麼時候這不夠，必須有安全控制。關鍵系統被一個 bug 打下來呢。他不知道門檻在哪，但問責是信任的一部分。

## 兩種承諾，兩條路

[27:04](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1624s) 生態系該要一種 commitment：工具自己是 stochastic 的，仍要對創造物做出承諾。社會靠承諾累積信任。雜貨商承諾食物是新鮮的，外匯承諾幣值守得住，飛機承諾安全；做不到就受罰。組織裡，開發者對職責和 API 有約定，團隊對組織、組織對使用者也是：資料安全、飛機安全、價格低。要從 attended 走到 autonomous，得把人的 review 換成結構化的承諾。他說 Tessl 在做一部分，但這比 Tessl 大，他還沒有完整解法。

[28:47](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1727s) 承諾有兩種。產品承諾是「建出來的是什麼」：永遠有結帳按鈕、永遠能匯出資料、某段數學永遠用那個標準算法。寫進 spec，用測試或驗證硬性守住。軟體要能互相依賴，就得承諾功能和介面。另一種是「怎麼建」：永遠做安全測試、有長期維護、有更新機制、可稽核。這是使用者信任、法規，也是協作。只有功能、沒有品質，走不遠。

[30:12](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1812s) 邊界也有三層。開發者要 AI 守住自己的承諾；團隊才能對組織說準時、準預算、合規；組織才能對使用者承諾。還得有辦法講清楚你承諾什麼、不承諾什麼。

[30:49](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1849s) 演化他看成兩條。Big brain：一個系統吸進所有資訊，愈來愈準，旁邊的工具只是 Chrome extension 或 Slack app 那種延伸，力量集中在一兩三個平台。他覺得這條令人沮喪，創新者沒有空間。另一條是協作者的生態系，彼此在介面、功能、品質上承諾。有人專精測試生成、文件、程式、特定 stack 或業務，使用者自己混搭。Tessl 押開放生態系，以及一種帶著 AI 的魔力、又能做出 commitment 的軟體做法。他問聽眾：你準備好承諾了嗎。

[32:22](https://www.youtube.com/watch?v=SUoV3LXsWk0&t=1942s) Simon 接話時，Guy 補了一句：很多是 meta 的零件。工具各有強弱，要的是一條滑桿，一邊是可預測、有承諾的軟體，一邊是適應性、靠 AI 智力的軟體。
