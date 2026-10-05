# Using AI to Refactor Legacy Code: A Practical Guide with Scott Wierschem

片長 18 分 32 秒，英文自動字幕。主持先謝 Bob、Nick，再請 Scott Wierschem 上台；字幕把他的姓聽成 worish、Reisham。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=B7Yt-WmlW2I)

## 一句話

大家在談 AI 怎麼產生新 code，Scott 問的是它對 legacy code 能做什麼。同一段很短的 Java，五個工具抓到的問題並不一樣，所以不要只靠 ChatGPT。真正卡住他的除錯和跨檔重構，是在沒有文件的舊系統上用 JetBrains 的 Junie 做完的。

## 五個工具看同一段短函式

[1:37](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=97s) 主持說他有超過 40 年經驗，是 Java champion。Scott 說自己職涯大部分都在 legacy code 裡，上週寫的 code 也已經是 legacy。

[2:19](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=139s) 最直接的做法是把 code 丟給 AI，問有什麼問題。範例是一個刻意寫簡單的函式：把字串清單轉成大寫，留下長度五的那些，加進結果再回傳。有經驗的 Java 開發者大概會說不要用 forEach，但裡面還有別的問題。

ChatGPT 建議改用 collect，這才是慣用的 Java。它也指出對 Unicode 呼叫 toUpperCase（字幕說 two uppercase）有時會把一個字元變成兩個字元，五個字元的檢查就會偏掉。它還建議改名，讓人看得出是先檢查再轉換，並且不要用 `java.util.*`，改成明確的 `List` 和 `ArrayList`。

[4:35](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=275s) 他是 Windows 使用者，所以也試了 MS Copilot。Copilot 抓到大寫會改長度，並建議先 filter 再 map。Google Gemini 指出該用 collect，以及沒有 side effect 的寫法可能跟函式名稱讓人預期的不一樣，但沒提到長度問題。ChatGPT 還特別標出 Gemini 漏了這點。

[4:48](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=288s) Grok（字幕聽成 Grock）抓到 forEach 和 Unicode，還多說 ArrayList 不是 thread safe：若改成 parallel stream，結果未定義。它也指出沒檢查 null 會丟例外，給了處理的 code，用範例跑出預期輸出，並提議用全部建議重寫。

[6:53](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=413s) Claude 建議先 filter 再轉大寫，但沒抓到 forEach 是不好的 Java 風格，而且說程式照現在寫是對的。對照表上 Grok 贏、Gemini 最弱。他用的是 ChatGPT 的 pro 版本，結論仍是拿兩個、甚至三個工具互相比。

[8:13](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=493s) 上千行、甚至他說的數十萬行，不要拆成 15 行片段去重寫。要切到塞得進 AI window 的大小。超過一百行，結果就不會那麼好，像請同事看 code：15 行很快找到不同問題，100 行可能只掃一眼。某個他叫做 beta 的字元轉大寫會變成 SS；他自己也不確定是哪個字元。後面談問時他謝 Michael，說這正是 AI 抓到的例子。

## 一個人，一套 20 年的程式

[9:46](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=586s) 他一個人工作，在維護一個 20 年的應用，沒有文件。某個方法一直回傳 null，他盯了二三十分鐘，後來說至少盯了一個小時。字幕把工具聽成 Juny、Jeie；他後來說這是 JetBrains 的工具，下文寫 Junie。

Prompt 是：這個物件初始化不如預期，呼叫這個方法永遠回傳 null，要怎樣正確初始化才會回傳值。Junie 看了物件結構、打開別的 Java 檔、確認 constructor、再看測試資料和預期輸出。最後發現測試裡的 fake object 覆寫了 table model，卻沒有覆寫 get table data item。它還把方法加進 test class。

[13:35](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=815s) 有人問到 fake data loader。他說那是 Java Swing 的 table model，用法像 Excel 表格。測試不想走 UI，所以做了 fake override，把往 UI 送的訊息接住。

[12:31](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=751s) 時間快到時他點了別的工具。Moderne 或 OpenRewrite（字幕是 Madern、open rewrite），他強烈建議去看。另一個 IntelliJ 和 VS Code 的 plugin，字幕聽成 Kodto，名稱沒有再被說清楚。還有 Refact.ai。他喜歡它們都有免費版，因為每個工具一個月 15 到 20 美元，加起來很快。

## ApprovalTests 把路徑翻過來

[14:17](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=857s) 他參與 approval test 專案。檔案路徑組法不如預期，新函式要改大約 20 到 30 個地方，不是 find and replace，得把呼叫翻過來。Junie 花了大概 10 到快 15 分鐘掃整個專案，拿掉三行、加進三行，並給了一份變更報告。他們本來不信，看完 code 發現確實照預期翻過來了，還清掉多餘的寫法：原本自己拼 file name、再 `new File`、自己塞 Windows 或 Linux 的 separator。File 的 constructor 可以吃 path 和 subpath，separator 它自己加，連他們那個函式都不必再呼叫。

[16:36](https://www.youtube.com/watch?v=B7Yt-WmlW2I&t=996s) 他的建議是：用 JetBrains 就用 Junie。主持說那張對照表讓人心跳漏一拍，還以為 Gemini 會更好，並把 refactoring legacy code 說成現在最大的一塊；這塊沒做好，其他新做出來的東西也會過時。
