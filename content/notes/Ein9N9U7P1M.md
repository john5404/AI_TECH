# Securing AI-native Commerce Without Breaking the Cart - James Wickett & Adam Dyche

James Wickett 在 DryRun Security，Adam Dyche 管 Commerce（前身 BigCommerce，他說可以想成 Shopify 的競爭者）的 application security。這場約 23 分鐘，英文自動字幕。字幕把 Dyche 聽成 Dish，把 OWASP 聽成 OASP，把 Snyk、Semgrep 聽成 sneak、sim grep，把 agentic 聽成 aentic、dentic，把 YOLO mode 聽成 yellow mode，把 WAF 聽成 WFT。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Ein9N9U7P1M)

## 一句話

Agent 已經能搜商品、結帳、動到信用卡和寄送資料。現場幾乎每個人都用 AI 取代 Google 問問題，但只有一個人願意讓它代買。傳統的 SQL injection、cross-site scripting 在下降，authorization 和 business logic 這類 contextual risk 在上升。商品目錄、評論、商家備註會變成 prompt injection 的入口，所以結帳不能只靠把 bot 擋在外面。

## 程式變多，經典漏洞在往下走

[0:28](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=28s) Wickett 先講他們看到的局面。背後的藍線是每年寫出來的 code，大約在過去兩年半翻倍。他問有沒有人覺得這會慢下來，答案是沒有。他讀到的說法是，接下來 5 年還會再變成三倍、四倍。同一時間，他們叫做 classic risk 的指標在下降，例如 SQL injection、cross-site scripting，也就是以前談的 OWASP Top 10。

[1:22](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=82s) 往上走的是 contextual risk，代理指標是 authorization 和 logic。這不容易從一般掃描看出來，得拉 bug bounty 資料。Snyk、Semgrep、CodeQL 這類工具看不見 authorization 和 logic，那不在它們的範圍。大約去年年中出現一個交叉：他們相信 AI 寫出來的 code，經典漏洞會變少，因為它學得會 pattern；contextual risk、business logic、authorization 會繼續升，因為人會犯錯，AI 加上人也會犯同樣的錯。這是 DryRun Security 看到的景觀。開場他還提了一句，Amir 說 security 配上 AI 很糟，他說如果你用 DryRun Security，其實不是這樣。

## Agent 開始替人搜商品、然後結帳

[2:25](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=145s) Dyche 說，當天下午如果有人在看 OpenAI，會看到一篇關於 agentic checkout 的短文，時間點剛好。他問兩件事。多少人日常用 AI 問問題、而不是 Google？全場。多少人願意信任 AI 代為購買？一個人。他說這就是 commerce 要去的地方：用 AI 幫忙做購買決定。

[3:10](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=190s) 很多事情落在 MCP server，特別是拿到電商網站的 catalog metadata。eBay、Etsy、街角的樂高店、把目錄放上網的漫畫店都算。你說想找某尺寸、某顏色範圍、某價位的新 T 恤，它搜 metadata，給你選項。中間還有一點 human in the middle。你選定、說 buy，它就代買，信箱接著收到訂單通知。他說 OpenAI 這套已經在 ChatGPT 上對任何 Etsy 店面可用，catalog 資訊是曝露的。這是會放大的風險，不只 security，還有 privacy 和 fraud，假期一到 fraud 還會再疊上去。

[5:03](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=303s) 跟 bot 打仗時，舊口號是 bot 就是壞的、把 bot 擋掉。reCAPTCHA、擋流量以免分析被歪掉、防止爬資料、防止自動化的信用卡詐騙和 carding。現在要分好 bot 和壞 bot。他說 Cloudflare 在做這件事，用 cryptographic signature 標 AI bot，OpenAI 也跟 Cloudflare 一起帶。有一篇文章是五天前貼的，他叫大家去讀。字幕沒有把文章標題念出來。

[6:00](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=360s) 實際流程是登入 agent，叫它找商品。它查有權限的 MCP server：Etsy、Shopify、Commerce、eBay。他猜 eBay 很快也會來信說自己有 MCP。然後依 reviews、descriptions、meta keywords 排序，把選項放回 agent。你再 select、purchase、confirm。這表示 agent 拿到信用卡、可能還有 PayPal、以及寄送用的 PII。Session 怎麼處理，要在這段流程裡講清楚。

## 目錄注入、權限太多、用量跑掉、價格被做手腳

[7:14](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=434s) 他們內部證明過：如果 agent 設定錯，例如跑在 YOLO mode，從商品 catalog 做 prompt injection 相當容易，還會走到 RCE。通過 MCP server 的資料要小心做 input、output 的處理和格式，才能說這是準確資訊。OpenAI 當天下午宣布的 Agentic Commerce protocol，他覺得是一條比較好的路，因為有機會變成標準流程。

[8:13](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=493s) 參與者也多。假期會冒出 fraud ring，賣便宜到不像真的東西，剛好落在你的價位。他問多少人在 Amazon、eBay 或別的第三方市集被騙過商品，說幾乎每個人都遇過，這只是再加一個管道。要有 fraud control，決定哪些 catalog 資訊可以送到 MCP server、再給 agent。他說這場對話在很多地方還沒公開發生，也許內部在談，但沒有分享出來。

[9:06](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=546s) 他們對著 OWASP Top 10 for LLM apps，挑四個：prompt injection、excessive agency、unbounded consumption，sensitive information disclosure 則織在裡面。舊的 appsec 仍然相關，他們先打比較大的。Wickett 說自己現在做夢都還是 cross-site scripting 和 SQL injection，但風險向量已經不一樣。

[10:22](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=622s) Prompt injection 可以放進 catalog、product description、merchant notes。對 agentic checkout 來說，很多是商家提供的 catalog，所以比較像 third-party risk，不是 first-party risk。他比成用 vibe coding 做新 web app、結果裝到惡意 dependency：那也是第三方風險。User review 也是 metadata，會被併進去。現場有人正在做 LLM app、擔心這個層級，他數到六隻手。

[11:44](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=704s) Excessive agency 的笑話是 bot 失控，門口堆滿包裹。Dyche 問誰看過 OpenAI 那則 MCP server 曝出一大批 Gmail 紀錄的 bug report。他說就是同一件事：agent 對外面資源的權限太多。不管是內部工具（字幕聽成 make IO，產品名不確定）、Slack、Atlassian，都是 agent 或 tool 的設定問題。要有 fine-grained permissions，讓它不能把 Gmail 整包拿走，再送到 Cloudflare 的 Sam、進某個黑市網站。他是在舉失控的例子。有疑問就去問 legal 和 privacy。

[13:16](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=796s) Unbounded consumption 是 loop 壞掉，或搜尋太兇、進入 agentic mode 去看一大堆 code。Dyche 的做法主要是 rate limiting 和 monitoring。熟悉 GraphQL 的人知道可以加 complexity score；agent 打出去的呼叫如果是 GraphQL API，也可以做類似的事，避免 token 用得比預期多、成本被墊高。他說 commerce 後端其實都是 API，rate limiting 會是最好的朋友。前面還有一個 robot 幫你。

[14:37](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=877s) Catalog spoofing 和 price manipulation 收成一句：不要完全信任第三方輸入。有 fraud 時，要決定哪些資料可以接到 agent。例如他今晚開一間 Etsy 賣蠟燭，會不會立刻出現在 OpenAI 的 ChatGPT 上，還是有一段等待期，確認他不是要 prompt inject Sam 或 James 的 agent？他們不知道對方怎麼決定。每家公司對 fraud 的可接受風險不同，最後要有一份 legal 和 compliance 都過得去的 acceptable risk。

## 從合規到 runtime，context 比 pattern 看得到更多

[15:48](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=948s) 新專案一開始就要把風險和 security 算進去，必要時拉 legal 和 compliance。他點名的框架有 PCI、GDPR、HIPAA、FedRAMP。字幕把 HIPAA 聽成 HIPPA、把 FedRAMP 聽成 Fed ramp。架構要從底層就有 security，若會碰到合規框架，legal 和 compliance 也要在裡面。

[16:35](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=995s) DryRun 把風險分成 context-based 和 pattern-based。他們的 contextual security analysis 看 surface、language、intent、design、environment，用來推理 authorization、data flow、side effect。每個 agent 可以再拉出 sub-agent，去找系統裡更多事實，補出正在建立的 context。這樣能看到傳統工具以前找不到的問題，例如 insecure direct object reference，有些 SSRF 也很難抓。OWASP LLM Top 10 裡的項目也在範圍內。

[17:35](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=1055s) 他們還沒公開全部資料，說很快會放。比較對象是其他 AI-native SaaS 工具：Snyk、Semgrep、GitHub Advanced Security、CodeQL。做法是對一筆一筆 commit 跑，看 prompt injection、sensitive information disclosure 這類找不找得到，再計分。他們這次表現很好。四月做過類似實驗，對 pattern matching 找 cross-site scripting 和 SQL injection，context-driven 大約好兩到三倍。這次的威脅向量全是 context-based，他說有點像把場地畫得對自己有利，但新的一類工具確實在起來。你若在做 LLM app、MCP server，或在產出會進這套系統的 catalog，就得看這個層級的風險。

[19:02](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=1142s) DryRun 自己覆蓋的是 code 寫出來到 build time。往 runtime 走，控制大致收成 scopes，以及 human in the middle。敏感動作要有某種核准：寄信、完成購買，甚至開一張 Jira ticket，視資料敏感度而定。字幕把 Jira 聽成 Jurro。另外是 multifactor authentication、正確的 API scope，以及一個好的 WAF。已經有公司在做以 AI 為中心的 WAF，新創會做，他猜 Cloudflare 有、但自己沒看到；Google 的 Vertex AI 和 model armor 也有方案。再來是持續的 monitoring 和 alerting。他說紅燈愈多愈好，先叫人來確認。基礎建設和 web application 上用來擋低垂果實的控制，這裡一樣要有。

[20:55](https://www.youtube.com/watch?v=Ein9N9U7P1M&t=1255s) 帶走的想法是：agent 需要 guardrail；對 AI 這類 bug，context 勝過 pattern；fraud、privacy、GRC 要在建造早期就處理。Dyche 的收尾是 agent commerce 已經在這裡，還會再長。PayPal 正在把 agentic payments 放進來，也在接 catalog，OpenAI 同樣在做。一個月或一年後信不信任，還不知道。他預期接下來 6 個月到一年，在場的人都會用 ChatGPT、Gemini、Perplexity 或某種 agent 買過東西，Amazon 也很快會有購物 agent。Agentic commerce protocol 是當天出來的。Wickett 另外放了一份 DryRun 關於那次 SaaS 準確度比較的報告。字幕在問還有沒有提問時間時結束，沒有問答內容。
