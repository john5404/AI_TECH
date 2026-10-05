# The Importance of Context in AI x Infra: Your Infra is a Graph with Roxane Fischer

Roxane Fischer 在 AI Native DevCon 的收尾場。她是 Anyshift 的 CEO 兼 co-founder。片長約 18 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把公司名聽成 any shift、inshift，把 MCP 聽成 MCB、MTB，下文用 Anyshift 與 MCP。

- 原片：[YouTube](https://www.youtube.com/watch?v=NnSBat37v7o)

## 一句話

LLM 寫得出看起來合理的 Infrastructure-as-Code 片段，卻不知道雲上真正有哪些資源、哪些 dependency 已經存在。Roxane 的論點是：infrastructure 本身是一張 graph，repo 裡的定義只是其中一塊。沒有 live cloud 的 context，Copilot 和 Cursor 會補出不存在的資源，或漏掉只活在 console 裡的安全問題。

## 為什麼 IaC 生成會在最後一哩失敗

[1:11](https://www.youtube.com/watch?v=NnSBat37v7o&t=71s) 她先講 Anyshift 在做的事：一個 AI DevOps agent，能從 GitHub issue 做出 pull request。今天要講的是，infrastructure 上的 context 為什麼重要，以及你的 infrastructure 是一張 graph。

[3:16](https://www.youtube.com/watch?v=NnSBat37v7o&t=196s) 例子是日常任務：用 Terraform 建一條 AWS VPC peering。開發者常把值 hardcode 進去，code base 裡也留著 click-ops 建出來的資源。她認為該做的是 dynamic dependencies，避免以後的 breaking change。GitHub Copilot 比較懂這個習慣，寫出的是 dynamic、不是 static。可是它不知道這條 peering 該指回哪一個既有的 main VPC，於是繼續生成，另外造出一個新的 VPC。那樣跑得起來，卻不是她要的參照。LLM 沒有整份 infrastructure context，就補不出那些 dependency。

[5:56](https://www.youtube.com/watch?v=NnSBat37v7o&t=356s) 她期望的寫法是一個 data source，指向已經在另一個 repository 定義、而且正在跑的 main VPC。真實的 code 裡還有 hardcoded 值、纏在一起的 modules，以及只存在雲上、code 裡沒有定義的 live resources。那些 ID 只活在 live cloud data。Cursor 擅長在 code 檔之間做對應，心裡卻只有 code，接不上這條 VPC。要接上，agent 需要各帳號的 cloud access，以及資源的 ID。

## 現場對照：code 看得到的，和雲上才有的

[8:05](https://www.youtube.com/watch?v=NnSBat37v7o&t=485s) Demo 問同一句：有沒有不安全的 IAM users。Anyshift 的 agent 可以跨她畫面上的 GitHub、AWS、Datadog 等來源回答。Cursor 則去查 Terraform code base，包含 AWS 與 Cloudflare 的 repository。現場那一次還去搜網，她說這是 hallucination，於是改看先前的 chat。

[10:07](https://www.youtube.com/watch?v=NnSBat37v7o&t=607s) 從 code 裡，Cursor 找到 Stephan Jordan、Fisher、Anno 這類使用者，有明顯的安全問題和 admin access，也有沒做完安全檢查的帳號。Anyshift（她也叫它 Annie）同樣點出這些人設定不正確，而且因為同時有 cloud context，回答裡帶 AWS console 的連結。

更關鍵的是一個 temporary goof user：它有 administrator access，卻沒有寫進 code，Cursor 找不到。沒有這段 cloud context，後面就做不出 remediation pull request，無論是把這個只活在雲上的使用者寫成 Infrastructure-as-Code，或是改掉它的權限。她說，餵給 AI 的 context 會決定生出來的東西。

## Infrastructure 是 graph，兩種建法

[13:01](https://www.youtube.com/watch?v=NnSBat37v7o&t=781s) 一小張圖很好懂：EC2 連到 IAM user，放在 VPC 裡，資源是 nodes，連接是 edges。整張圖是另一回事：多個帳號、常常多朵雲、數以萬計的資源，還沒算裡面的 microservices。她秀的只是子集。

做 code generation 時，兩件事最重要。第一，edge 要有有意義的 label。VPC 接網路、VPC 接你加上的 metadata、或接到 EC2，不是同一種關係：有的是 configured by，有的是 linked with。第二，要在 cloud resources 和 Infrastructure-as-Code 之間做 deterministic mapping，才能把對的資源對回 code 裡的定義。

[15:01](https://www.youtube.com/watch?v=NnSBat37v7o&t=901s) 她給兩條路。Anyshift 走 graph DB：建並維護這張 deep knowledge graph，再拿來做 code generation 和 incident remediation。整張圖、dependencies、高品質資料都在 context 裡，但團隊自己維護很花時間。另一條是用 MCP server 即時抓 live context，例如 AWS 的 MCP server，能拿到 code 和 Cursor 看不到的雲上資訊。內部比較好做，可是視角是碎的，看不全關係，API 呼叫一多就會碰到 rate limits，無法一直擴。

[16:22](https://www.youtube.com/watch?v=NnSBat37v7o&t=982s) 收尾很短：context is king，garbage in, garbage out。Infrastructure 是 graph，就該照 graph 來建。她謝謝 AI Native DevCon，也說 Anyshift、Tessl 和這個領域的其他人，是在從頭到尾做這層給未來用的 context。主持人接著說，她提到的 MCP 限制在 infra 裡會怎麼變、Anyshift 在生態系裡會做什麼，會很值得看。留言裡有人從 Hawaii、Singapore 進來。
