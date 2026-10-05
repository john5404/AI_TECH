# Hugging Face's MCP Server: Only 62K of 10M Calls Matter

片長 9 分 44 秒，英文手寫字幕。剪輯。前段是 Hugging Face 的 Shaun Smith。後段換到一段 Figma 的經驗，字幕說那個人在 Tessl 之前在 Figma 做 dev mode。中間有幾段沒被摘到。Agent 被聽成 Asians。

- 原片：[YouTube](https://www.youtube.com/watch?v=svSCh3e7cuI)

## 一句話

Hugging Face 的 MCP server 在 production 跑超過一年。每一千萬則協定訊息裡，一百二十萬則是 initialize，真正的 tool call 只有六萬兩千則。協定假設 client 和 server 的關係是有狀態的。後段的 Figma 經驗是：agent 能做出看起來像設計的前端，卻會發明不存在的元件，或沒看到設計系統。

## 一千萬則裡，多數不是工具呼叫

[0:00](https://www.youtube.com/watch?v=svSCh3e7cuI&t=0s) 六月倫敦有些最好的演講，談的是最不華麗的一層：協定、gateway，以及其餘一切依賴的結締組織。

[0:11](https://www.youtube.com/watch?v=svSCh3e7cuI&t=11s) Shaun Smith 在 Hugging Face 做 open source connectivity，以及 MCP 和 agents。他們的 MCP server 在 production 超過一年。數字用來說明有多少流量只是協定在跟自己說話。

[0:36](https://www.youtube.com/watch?v=svSCh3e7cuI&t=36s) Production 裡 MCP 給他們幾個挑戰。主挑戰回到最初的設計：若是一對 client 和 server，協定假設它們的關係是 stateful。實際發生的是 client 向 server 發請求，server 說已經 initialized。然後才終於有一則帶著資訊的 tool call。中間的握手摘錄沒有留全。

[2:07](https://www.youtube.com/watch?v=svSCh3e7cuI&t=127s) 目前每一千萬則協定訊息，也就是 MCP 的方法和呼叫，其中一百二十萬則是 initialize。那 maybe 有趣，但真正的呼叫只有 62,000 則。

[2:49](https://www.youtube.com/watch?v=svSCh3e7cuI&t=169s) 後面一段字幕把 agent 聽壞了。清楚的部分是：瀏覽器那邊像在猜。它推論該做什麼，例如要點日期選擇器，再截一張圖，再依推論出的資料點行事曆圖示，才看得到行事曆打開了。

[5:56](https://www.youtube.com/watch?v=svSCh3e7cuI&t=356s) 例如在 tool call 之前，或 tool result 之後。想法是他們不能控制 LLM 會不會呼叫它。但當它呼叫了，他們可以吃進去、濾掉一些東西，或對結果做點什麼。

## 同一份設計 context，交給 agent 之後

[7:34](https://www.youtube.com/watch?v=svSCh3e7cuI&t=454s) 說話的人說，到目前描述的都是他生活裡的真實挑戰。在 Tessl 之前，他在 Figma 做 dev mode。Dev mode 讓設計師把設計交給人類開發者。他說那是石器時代用的工具。它給開發者很多關於設計的 context，用來手動寫出實作那些設計的 code。

[8:08](https://www.youtube.com/watch?v=svSCh3e7cuI&t=488s) 過去幾年，這個功能演進成 Figma 的 MCP server，也就是 live connection。做的是把同一份設計 context 直接透過 MCP 給 agent。就在做這個的時候，他們看到前面那些問題。Agent 會拿起設計，做出看起來就像設計、也按設計師意圖運作的前端。開發者一看 code，它發明了一堆本來就存在的元件，或用錯，或完全沒看到該對準的設計系統。這是他每天在客戶身上遇到的問題。

[9:00](https://www.youtube.com/watch?v=svSCh3e7cuI&t=540s) 他們很快發現要補產品和設計 context 跟 agent 在做的事之間的缺口。早期開始做的是 Figma Code Connect。這個工具明確讓設計系統團隊把設計元件，連到 codebase 裡對應的東西。

[9:26](https://www.youtube.com/watch?v=svSCh3e7cuI&t=566s) 片尾約十一月紐約的 AI DevCon，網站是 ainativedev.io。
