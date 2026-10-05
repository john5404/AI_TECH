# The Control Plane for AI Agents | Alan Pope on TypingMind

片長 5 分 53 秒，自動英文字幕。Alan Pope 示範 TypingMind。ChatGPT 被聽成 chatpt 或 chat GBT，Claude 被聽成 Claud 或 clawed，子代理被聽成 sub aents。活動網址聽成 a native.io/devcon，不寫成連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=50T27Wc-ntk)

## 一句話

如果你已經在用網頁版的 Claude 或 ChatGPT，他會看 TypingMind：同樣是網頁介面，但可以設定、可以換模型、可以中途分叉對話。他做的小測試是把大約 1997 年以來的部落格原文放進知識庫，讓它用他的語氣寫新文章。

## Agent 在這裡的意思

[0:00](https://www.youtube.com/watch?v=50T27Wc-ntk&t=0s) 他說 agent 這個詞太擠了。在 TypingMind 裡，agent 比較像一種人格。一般說的 agent 則是可以自己跑去做一件事、甚至叫子代理的東西。

[0:39](https://www.youtube.com/watch?v=50T27Wc-ntk&t=39s) 他的入門例子叫 write like Popey。左邊是知識庫，可以上傳文件給這裡的 agents。其中一份是 Popey Blogs。他從大約 1997 年就有部落格，把所有文章的原始碼放進去，讓 TypingMind 寫出聽起來像他的文章。他說這聽起來像以後都不自己寫了，但其實只是測試，沒常用，只用過幾次。一旦它知道語氣和寫法，新內容會很像他自己寫的，他覺得很意外。

## 示範裡他在意的幾件事

[1:47](https://www.youtube.com/watch?v=50T27Wc-ntk&t=107s) 那個 agent 的 prompt 是用 Allan 的方式寫一篇部落格。也可以接 MCP servers 和知識庫。他請它寫一篇關於命令列裡 MCP servers 新發展的文章。底下顯示的是 Claude Sonnet。TypingMind 不鎖一家供應商，可以改用 Gemini 或 ChatGPT，也可以對話做到一半就分叉、換模型。這是它比單獨待在 ChatGPT 或 Claude 網頁裡強的地方。中間插了一小段 AI Native DevCon 的廣告，11 月 18 和 19 日紐約兩天，也可以遠端。網址字幕沒有聽清。

[3:23](https://www.youtube.com/watch?v=50T27Wc-ntk&t=203s) 它找到他以前寫的一篇，關於一台只剩命令列的 ThinkPad。再讀幾篇之後，文風對上了：開頭放 TLDR，然後寫太長，小標像 “what on earth is MCP?”。

[4:04](https://www.youtube.com/watch?v=50T27Wc-ntk&t=244s) 他喜歡的是很多事在同一個介面：接不同工具、上傳知識（不只部落格，也可以是文件或既有 code）、因為有帳號所以手機也能接著談，甚至開始讓它寫軟體然後換個地方繼續。Filesystem 這個 MCP 可以只開放機器上的某些目錄，讓它直接把 code 寫進資料夾，不用再從對話裡複製貼上。之後可以用 GitHub MCP 建 repo、上傳、連 README 都寫成他其他 README 的口氣。他把它當成一個地方做很多事、又不用在一堆工具之間換，而且適合喜歡網頁介面的人。
