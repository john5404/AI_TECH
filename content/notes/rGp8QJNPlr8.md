# AI, MCP, and Enterprise Workflows | Steve Manuel

片長 7 分 27 秒，自動英文字幕。Steve Manuel。他自己跑 MCP servers。產品名他說是 Turbo MCP，以及 mcp.run 的自架版。

- 原片：[YouTube](https://www.youtube.com/watch?v=rGp8QJNPlr8)

## 一句話

MCP 已經走出開發者的圈子，銀行和金融業也在接。你不能信任隨便找到的 MCP server，因為你不知道工具被呼叫時，模型從 prompt 抽出的資料會被送到哪。STDIO、跑在你機器上的那種，權限跟你一樣，是最高嚴重度。遠端比較好鎖，但公網代理不該經手企業的敏感流量。

## 信任從第一方開始，但不夠

[0:00](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=0s) MCP 剛公布時太偏向開發者。現在從新創到受管制的銀行和金融服務都發現：若要讓員工用 AI 提高產能，下一步就是把 AI 接到內部的工作應用和服務。它已經離開開發者的房間。

[0:31](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=31s) 問的是離真正信任 MCP server 還多遠。他說不能信任任何現成、隨手找到的 server。這話來自一個自己經營 MCP servers、當然希望大家信任他們的人。你不知道幕後發生什麼：呼叫那個工具時，模型從 prompt 抽出的資料被送到 server 之後實際做了什麼。第一步是用提供者自己的 MCP server。就像你會信任自己去接的 Spotify、PayPal 或 Google 的一般 HTTP API。他們應該、也希望將來會提供第一方 MCP server。那能減輕一部分信任問題。

## STDIO 和遠端不是同一種風險

[1:50](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=110s) 自己架、甚至在本地跑，風險低很多，但你仍得信任它正確處理你傳的資料。托管的 server 能做筆電和本地機器在規模上做不到的事。他越來越相信 standard IO 的 MCP server 從來不是對的選擇，除非是你自己寫的。風險已經到你這台機器、而且權限跟你這個使用者一樣。它讀得到環境變數，可以用任何協定、任何工具隨意打網路，可以讀寫檔案系統。他說這是 MCP 使用者會碰到的紅色警報、最高嚴重度。把它們搬到遠端或雲上的托管端點，拿掉的是終端、使用者電腦那一層風險。

[3:41](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=221s) 仍有必須用 standard IO 的時候。開發工具要呼叫你機器上的 CLI，或專案只在本地、MCP 要看 IDE 的診斷，就上不了雲，除非你在用某種托管的雲端程式產生平台。他覺得遠端大致更安全，但你得信任端點是真的，而且要能連上、能驗證。沒有硬規則說 STDIO 或遠端哪個傳輸比較好。要看資料是什麼、資料住在哪、驗證是什麼、安全風險是什麼。這些傳輸都存在，是因為各有使用時機。他覺得正在離開「在使用者機器上執行的本地 STDIO」，因為遠端實作變多，也比較容易信任。

[5:01](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=301s) 在自己的基礎設施上遠端跑，和連上網路上別人給的 URL，又是兩件事。提供者沒有 MCP server 時，你可以自己包一層 API，放在自己的網路裡，從自己的基礎設施連。很多公司往這走，是為了控制和透明：團隊的 MCP client 到底接了哪些工具。

## 公網代理和自架

[5:55](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=355s) 他順帶提產品：一個自架的 MCP 平台，提供透明、稽核和安全。名字是 Turbo MCP。這主要是從提供 mcp.run 學到的。大組織和更在意安全的人，不會信任一個公開代理把 MCP client 的流量，包括資料庫或 SaaS 裡的敏感資訊，轉到上游。為了讓人能控制那個代理、擁有那段流量，他們做了 mcp.run 的自架版。這比較是給更偏安全的企業客戶。

[6:47](https://www.youtube.com/watch?v=rGp8QJNPlr8&t=407s) 個人用公開代理仍然可以，但你在承擔一點風險：信任那個單位不會把你的 Notion 頁面或行事曆送到某個廣告服務；若他們被入侵，他們就有你的 auth tokens，以及從郵件抽出、也許存在他們資料庫裡的明文。
