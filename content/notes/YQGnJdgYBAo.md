# Make tools that don't break - Ray Myers

Ray Myers，All Hands AI 的 Chief Architect，他們做 coding agent OpenHands。片長約 21 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 ASCII art 聽成 ask art、把 Sonnet 聽成 Sonet、把 o1 聽成 01。下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=YQGnJdgYBAo)

## 一句話

新模型會把很難的舊 code 改壞。他接受這件事，改用不讓 LLM 直接改檔的做法：人決定要不要做，安全的工具執行，測試守住行為。新 code 容易，舊 code 才難，而新 code 會變成舊 code。

## 一塊看不懂的 C，模型都把它改壞

[0:28](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=28s) 他研究 legacy code，用能找到最極端的例子驗證方法有沒有用。這次是 Andy Sloan 的作品，2006 年 International Obfuscated C Code Contest（IOCCC）的得獎程式。編譯執行之後，畫面中間是一顆旋轉的 3D donut，後面有一面搖擺的棋盤，上方橫幅寫著 IOCCC 2006。

[1:48](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=108s) 他問的是：星期一進公司，repo 裡的 code 長這樣，不修好 payment system 就會壞，什麼工具還信得過。他玩這份程式是 2023 年 3 月，GPT-4 剛出來。程式小到塞得進 prompt。叫 ChatGPT improve this code，它說當然可以，吐出來的東西不但不是改進版，根本不是 code，編譯不過。他稱那是 code-like substance。裡面對「想對這份 code 做什麼」仍有一些合理洞察，只是得用別的方式執行。

[3:39](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=219s) 他用兩年的模型回顧那句 the models will get better。GPT-4、Claude Opus、GPT-4o、Claude 3.5 Sonnet 都會把這份 code 改壞。Sonnet 很強，他不想貶低，但病理級的例子、甚至只是中等難的 legacy code，讓它直接編輯就會壞。推理模型也一樣：o1 會弄壞，幾週前的 DeepSeek R1 也會。他說 R1 在訓練裡的 reinforcement learning 突破，震撼到股市出現一兆美元的修正，然後它還是把 code 改壞了。有些 code 它不會弄壞，有些弄壞了也不要緊。對另一群人，新魔法就是會弄壞他們的 code。

## 舊魔法：測試、formatter、手不要碰

[5:04](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=304s) 接受這件事，意思是舊魔法還要留著，也許兩者一起用。這支程式只是吐出一大串輸出，測試相對容易：抓前 5,000 行，那已經超過旋轉的一整圈。改完再跑，log 相同，就可以相當有把握沒弄壞。

[5:47](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=347s) 為了在現代系統上跑，他先補上 `main` 的參數型別。C 裡 `main` 的參數一直是 `int` 和 `char **`。外層迴圈最後加了 `sleep`，讓動畫在現代電腦上慢到看得見。Commit message 前的 `@` 表示這次是用手改的。他說這是最後一次用手改，手太不安全。

[7:02](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=422s) 下一刀是 formatter。這種 code 上，formatter 也可能弄壞。他編譯、跑 formatter、再編譯，比對兩份 binary，相同才存檔。格式化之後至少看起來像 code，不再像 ASCII art。

## 只要建議，用 IDE 做安全重構

[7:43](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=463s) 他再問 ChatGPT，但不要新 code，只要他能用安全工具執行的建議。這很像 LLM tool use。當時用的 prompt，後來做成 GPT store 上的 Refactor GPT。他沒有在這場展開 prompt。建議之一是把 `p` 改名 `render_glyph`。他用 JetBrains IDE 做安全的 rename 和其他 refactoring，不用手改。自動的語法變換幾乎總是過測試，測試在這一步幾乎是多餘的。他也用 linter 補上迴圈的大括號、把 ternary 改成 if。

[8:47](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=527s) 把全域的 `b` 改名 `frame_buffer` 很有用：字元先寫進這裡，再畫到螢幕。終端寬度抽成常數。某個變數會傳進 sin 和 cosine，所以叫它 angle A 說得通。他把函式 `e` 改名 `render_donut`，後來發現是錯的，可以叫 LLM hallucination，或只是壞建議。重點是它沒弄壞任何東西，只是名字一陣子會誤導，code 繼續能跑。

[11:15](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=675s) 外層 for 迴圈裡有一塊又算又更新 frame buffer 的東西，他先抽成 `update_frame_buffer`，之後再搞懂。先前那個 `render_donut` 其實該叫 `render_banner`。剩下的 for 迴圈用消去法：那一段只往 frame buffer 寫 `.` 和 `#`，動畫裡棋盤也只有這兩種字元，所以是 `render_checkerboard`。控制碼他沒自己查表，ChatGPT 足夠說明第一個是 clear screen、第二個是把游標移到 home，他加上註解。

## 一輪之後，還剩什麼看不懂

[13:03](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=783s) 那一輪停下來的時候，上面是一堆常數，還有幾個難搞的 global。看 data flow，把它們拿掉、改成非 global 其實不難。抽出五個 helper。`render_donut` 用很重的三角函數畫 3D donut，底部那條 magic string 是由淺到深的陰影，用來做很原始的 ray tracing。他說這仍是複雜的事，但已經比較不像故意混淆。`render_checkerboard` 只用一個 sine 讓它左右搖，再用數學投影方塊，白格黑格分別畫 `.` 或 `#`。`render_banner` 還是謎：兩個 helper 被建議叫 `code_to_index` 和 `render_glyph`，名字還算合理，語境裡仍看不懂，那條巨大的 magic string 他標成 mostly lost。`print_frame_buffer` 印出一幀。`main` 開始能看出階段。

[14:57](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=897s) 這還不是 great code，也還不是 clean code，但他已經能在上面加功能。人幾乎沒有直接碰 code，自動化做了大部分修改，LLM 只給建議、從不直接編輯，沒有弄壞，測試也很少失敗。

## 把循環收成工具，banner 仍得人解開

[15:39](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=939s) 用到的東西各做各的長處：懂 legacy code 的人、GPT-4、JetBrains 的 refactoring 和 clang linter，再加上做法。Naming as a process 來自 Arlo Belshee。測試比一般 TDD 更嚴，是 Kent Beck 的 test commit revert：測試一失敗就把變更清掉。測試型態是 approval testing，Emily Bache 和 Llewellyn Falco 推廣的。主循環是：AI 給建議，他決定做不做，IDE 做 refactor，跑測試，增量 commit。收成 headless loop 之後，另一份同比賽的作品可以看著建議被產生、套用、測試、commit，code 即時改形狀。他說實務上會想放慢，並看到哪些建議要留、哪些要丟。

[17:39](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=1059s) Refactoring 再強，也不是唯一想做的事。他前一年大多在學 formal methods，YouTube 頻道上大概做了 12 支影片，字幕把頻道名聽成 craft versus CR。他問的是：已經有 automated theorem prover，為什麼還把這麼多賭注押在 LLM 會不會表現出推理。現場用過 proof assistant 的人不多；他說用過 Prolog 算半分。新 code 對 AI、對人都容易，難的一直是舊 code。新 code 會變成舊 code。只盯著新 code 上什麼有用，不是長期策略。

[19:06](https://www.youtube.com/watch?v=YQGnJdgYBAo&t=1146s) 有些問題 AI 不會順便解開，例如 banner 怎麼運作。2023 年 3 月他把第一輪貼出去，原作者 Andy Sloan 留言，說十五年沒人搞懂 logo 怎麼編碼，他覺得有趣，ChatGPT 也做不到。六小時後 Ray 解開了：先做 run-length encoding，再用兩套不同的 Huffman encoding，得到一長串 binary，切成 6-bit、無緣無故反轉，再用大於符號到波浪號之間的字元做成 Base64 風格的編碼。作者確認，而且他是第一個解開的人。他能換掉那條 magic string，橫幅從 IOCCC 改成 AI Native Dev。他對 Patrick 說，這名字很好，這支程式也許更該叫 Dev native AI。
