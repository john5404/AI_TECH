# Why LLMs Break for Infrastructure—and How to Fix It Roxanne Fischer

片長 11 分 52 秒，自動英文字幕。講者字幕聽成 Oxan，標題是 Roxanne Fischer。公司聽成 any shift，標題語境是她在講基礎設施。Copilot 被聽成 G propilot。MCP 被聽成 MCB 或 RMCB。現場有一段在調麥克風，下面不記。

- 原片：[YouTube](https://www.youtube.com/watch?v=u8UJ8M0uPN0)

## 一句話

幾乎大家都用 AI 生成 code。每天寫 infrastructure as code 的人少很多。她的例子是：工具看不到你在雲端供應商裡的 ID，就會自己發明一個新的 VPC，而不是引用你已經有的那個。MCP server 可以給即時的基礎設施 context，但跨廠商的依賴仍然缺。他們自己做的是一張把不同來源對在一起的知識圖譜。

## 它會發明一個新的 VPC

[0:00](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=0s) 她先為法文口音道歉。他們在做基於基礎設施深度知識圖譜的 AI 服務。今天要示範為什麼 LLM、Copilot、Cursor 有時會把基礎設施做壞。她問誰在用 AI 生成 code，幾乎大家都是。誰每天在寫 infrastructure as code，人少很多。她會盡量講簡單。

[1:54](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=114s) 例子是連接兩個 VPC，正常會是你公司的，和另一個廠商的。她說給一個軟體工程師的第一個答案會是那樣。中間有一段沒被摘到。

[3:27](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=207s) 因為她不再引用自己 VPC 的 ID，就缺了對 VPC 的參考。Copilot 會試著讓這個參考說得通，然後繼續生成 code、定義一個新的 VPC。問題就在這裡。後面有一段沒被摘到。

[5:20](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=320s) 因為 Cursor、Windsurf 這類工具拿不到你在不同雲端供應商裡的 ID，它們生成不出對的 infrastructure as code。它們可以做出 80/20 的東西，但永遠不會是對的那個參考。

[8:17](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=497s) 一個 EC2 連到一個 IAM、再連到另外兩個 instance，還不是全部。你可以有多個帳號、多朵雲、十個或幾千個資源。實際上複雜得多。

## 圖譜，或只有單雲的 MCP

[8:54](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=534s) 第一個做法是建一個 graph DB。這很花時間。你要處理從不同資源來的那些即時資料，內部做又重、又難維護。第二個已經很好的選項是用 MCP servers。房間裡很多人知道、也在用。例如 AWS 的那個。Kubernetes 的也剛發布。它們已經可以給你基礎設施的即時 context，但缺跨廠商的依賴。你若想理解自己有一個 EKS cluster，裡面是 Kubernetes、在 AWS 上，你會漏掉：有多個來源的多個 instances 在互相作用。她說這部分沒時間講。

[10:35](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=635s) 問他們是什麼。她說他們把自己標成 SAB。有一個聊天機器人，可以問任何關於基礎設施的問題：成本、合規、管理、為什麼連不上、發生了什麼。也做 code generation。你可以問：我的 code 有沒有沒定義好的東西、我剛有一個 incident、該做什麼。它會從分析做出一張 pull request，然後是修補。她說可以把他們看成基礎設施的某種東西，字幕最後那個詞聽成 dein，不改成另一個產品。

[11:30](https://www.youtube.com/watch?v=u8UJ8M0uPN0&t=690s) 你可以用他們的 MCP server。它對應那張把不同資料來源對在一起的知識圖譜。在 Cursor 裡呼叫它，會得到她說的超級 code generation。
