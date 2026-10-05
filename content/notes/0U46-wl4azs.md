# CTO of $7B Snyk Talks AI Security, Risky Software & Enterprise Adoption

片長約 35 分鐘，英文自動字幕。AI Native Dev。Guy Podjarny 訪問 Danny Allan，Snyk 的 CTO。兩人從 Sanctum、Watchfire 就認識，IBM 收購 Watchfire 之後 Danny 繼續做安全研究，後來在做備份軟體的 Veeam 當 CTO，字幕把 Veeam 聽成 VH，再進 Snyk。他提醒自己是從 pen tester 開始的。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=0U46-wl4azs)

## 一句話

Snyk 的企業客戶裡，遠超過 80% 已經在組織裡用 AI。安全是他們最大的顧慮，但比較像顧慮，不是擋下採用的東西。Danny 認為模型不會自己把一切變安全，雲當初留下的三個問題會再來一次：設定、過度寬鬆的存取、以及看不見。他要人現在就用，同時把驗證輸入、編碼輸出、身份與授權從一開始做進去。

## 開發者已經在用，安全團隊也想用

[0:00](https://www.youtube.com/watch?v=0U46-wl4azs&t=0s) 開場先放一句 Guy 聽來的話：能用就叫 ML，不能用就叫 AI。Danny 自己說 AI 時，多半指比較新的 generative AI。他二十年前用一串 FPGA 破解 hash，機器學習早就在。Snyk 裡各種 generative AI 都在玩，最常被問的是生成 code。

[5:01](https://www.youtube.com/watch?v=0U46-wl4azs&t=301s) Guy 問安全是不是真的擋住企業把 AI 放進系統。Danny 說沒有，人 unequivocally 在往前。企業客戶裡很多是 coding assistance，也有很多 chat bots 和支援技術。遠超過 80% 的客戶在組織裡擁抱 AI。這樣做時最大的顧慮是安全，但它沒有擋住，採用率極高，尤其在開發社群。

[6:27](https://www.youtube.com/watch?v=0U46-wl4azs&t=387s) 安全的人不是希望 AI 沒被採用。他談的開發者都想用。組織不允許的話，他說超過五成的機會，人還是在環境裡用 Windsurf、Codium、Cursor 或 Copilot。字幕把前兩個聽成 Windsor、Kodium。大家都興奮。唯一的犬儒是：現在人人都是 developer，會跟 prompt 說話就算 developer 嗎？即便如此，他們都在採用。

[7:15](https://www.youtube.com/watch?v=0U46-wl4azs&t=435s) Guy 覺得很多安全組織的人技術很強，但不是好的 coder，於是用 AI 做自己系統裡的小工具：整合、自動化，不是用來辨識攻擊者。雲的時候他感覺安全團隊更排斥、寧願不用；現在他們自己也是使用者。Danny 同意，而且拿來滿足好奇心。他職涯從 COBOL 開始，熟的是現在算舊的 C、C++、COBOL，以及做安全測試時的 Python。他承認不擅長 Golang，想做一件 Go 的事就打開 coding assistant。開發社群用它補沒有的技能，也用它試日常生活裡怎麼用。

## 雲留下的三件事，AI 正在重演

[8:52](https://www.youtube.com/watch?v=0U46-wl4azs&t=532s) Guy 用雲做類比。當時有人期待平台自己解決安全，後來是 Snyk 這類、以及 Wiz 這類做 CSPM 的，疊在雲上面。字幕把 Wiz 聽成 whiz。他問：人是覺得模型會自己變安全、生成的 code 會自己修好，還是需要專用的安全方案。Danny 說 AppSec 的人相信它不會自己變安全，開發者比較樂觀，覺得會。他認為兩者都對。

[10:01](https://www.youtube.com/watch?v=0U46-wl4azs&t=601s) 雲起飛後兩三年，留下三件現在還在處理的事。儲存的安全設定錯誤，例如打開的 S3 buckets，當時沒人管。過度寬鬆的 IAM 和存取控制。可見性和 logging 很差。他說這三個概念同樣適用於 AI。知道這件事的安全人員會說：若不從現在把安全算進去，就是在為失敗做準備。

[11:01](https://www.youtube.com/watch?v=0U46-wl4azs&t=661s) 單一模型也許會想自己變安全。企業今天不是押一個夥伴。Snyk 自己就有多個 coding assistants，多模態，一件事用 OpenAI，另一件用 Claude 3.7。字幕把版本聽成 claude 37。他說這很典型。要跨工具、跨模型做治理，就得有這些環境外面的東西。有的模型比別的更會把事情做安全，但沒有任何一個模型能把一切做安全。組織該知道各種弱點長什麼樣。

## 他長期擔心授權，以及查不到的非決定性

[12:18](https://www.youtube.com/watch?v=0U46-wl4azs&t=738s) OWASP 一直有漏洞 top 10。2023 年，他說兩年前在這個領域已經是一輩子，他們發了 LLM 的 top 10。第一個是 prompt injection，接著是 model poisoning、data theft、data exfiltration。其餘他叫人去查。這兩年裡，那些漏洞他覺得已經偏舊。Agent 對 agent 說話，那些漏洞清單裡沒有這個概念。變得很快，標準組織和 OWASP 很難跟上。有些被過度宣傳，有些比較真實，也會留得比較久。

[14:07](https://www.youtube.com/watch?v=0U46-wl4azs&t=847s) 他個人長期很擔心兩件。第一是 identity and access management。LLM 用各種資料訓練，組織裡不是每個人都該碰到全部資料。這被說成 jailbreak，或拿到不該拿到的資料。Agent 透過 MCP 跟另一個 agent 說話時，嚴重十倍：沒有把 authorization 傳下去的概念。Authentication 做了，authorization 是另一個模型。寫 code 的例子是：LLM 裡有全部內部 code libraries，某一組的不該暴露給另一組。次級的 coding assistant 怎麼知道可以碰這一套、不能碰那一套，怎麼遮住。資料存取是他最前面的顧慮之一。

[15:15](https://www.youtube.com/watch?v=0U46-wl4azs&t=915s) 第二是非決定性。安全的人習慣線性：丟進這個 payload，就能利用系統做不想要的事。AI 和它生成的 code 依定義不是決定性的，於是 audit trail 和合規很難。Guy 說這像一種新的攻擊節奏：這次 injection 沒成，五分鐘後再試，也許新版本有洞。Danny 說 red teaming 時，同一串 sequential prompt injection 做第二次可能就成功，第一次沒有，只因為非決定性。那會給人膨脹的信心。在決定性的安全世界裡，這是問題，因為你無法對任何事證明它有 longevity。

[16:30](https://www.youtube.com/watch?v=0U46-wl4azs&t=990s) 他從不建議不要用 AI。授權開始被做進底層框架。MCP 有擴充在加 authorization。Snyk 是 consortium for secure AI 的成員。另一個是 Google 在大約一個月前的 Google Next 宣布的框架，字幕聽成 A to framework，當時沒有 authorization，工作小組已經在加。Microsoft 也擁抱同一概念，兩個巨人在同一件事上。他希望長期會把授權和 IAM 做進系統。Guy 說標準還在變硬，在乎又能參與的人就去參與；在那之前，先避開還沒被滿足的題目。Danny 對大量的 agent 對 agent 很猶豫。給六個月、給一年，他覺得可以。這不是叫人現在不要擁抱 AI，而是到「互相說話」那一層時要更小心。

[18:43](https://www.youtube.com/watch?v=0U46-wl4azs&t=1123s) 企業裡的 agentic 系統，以他們碰到的客戶來說，還是「這很酷，在角落試試」。他分成三桶。高度自主的，像 Devin，字幕作 Devon。中間的，像 Augment，能做很多，但不是完全自主。再來是助手，Cursor、Copilot 那種。客戶裡走到完全 agentic 的很少。大多數在比較低自主的 copilots 和 cursors。大概 20% 到 30% 在中間，做更多 augmented 的 code assistance。

[19:48](https://www.youtube.com/watch?v=0U46-wl4azs&t=1188s) 合規怎麼過，他看到很多 logging 和可見性。雲早期第三個問題就是這個，好消息是人在記，也在拿出指標。一家大型金融機構客戶說 11% 的 code 是 AI 生成的。他想不出 11% 怎麼來的。對方是把送進 source control 的 code 都記下來，再把生成的 code 記下來，做簡單的除法。準不準另說，正面的是他們在追。

[20:51](https://www.youtube.com/watch?v=0U46-wl4azs&t=1251s) 他覺得被說得太大的是幻覺。不是說不會發生，而是模型會在回傳前自己測，幻覺會變少。IAM 他認為時間久了會走出這個問題。Data theft 是真的，但若用風險而不是「安不安全」來評，被利用的可能性很低，也許是短期風險。會留很久的，他回到雲的那三件，因為人不記取教訓：AI 的設定，包括過度寬鬆、以及用什麼資料訓練；過度寬鬆的資料存取，例如把全部支援資料放進 LLM 再讓客戶碰，對方可能跳出自己那一組資料；以及可見性和 logging。他擔心兩三年後又會像雲一樣，不知道東西在哪、怎麼發生的。

## 更多 code 就是更多漏洞，護欄是為了跑更快

[23:17](https://www.youtube.com/watch?v=0U46-wl4azs&t=1397s) Guy 分兩種：新技術本身的安全問題，以及把舊模式放大。雲、DevOps、更早的 agile，都是愈來愈快；創作變容易，盯著它的熟練和專業就變少。他自己用 AI 做圖很不專業，也不會拿那個做生意。Danny 完全不主張放慢，該用、該擁抱。他每次都回到：安全要從一開始做進去。每次擁抱新基礎設施，雲、伺服器、虛擬化、或 AI，人都忘掉基本功：驗證輸入、編碼輸出、加上身份與存取控制。攻擊因為基礎設施不同而不同，根因他說二十年來一樣。Guy 自己更擔心使用量爆炸，而不是那些基本功；組織最後被打穿的，常常是安全衛生。Danny 說今天和二十年前不同的是系統後面的資料多太多。被入侵時風險更大。錯的人拿到，可以非常有害。

[26:15](https://www.youtube.com/watch?v=0U46-wl4azs&t=1575s) 這場叫 the age of risky software。新技術一開始總是最險，因為業務壓力是用 AI、更有生產力、快。我們在早期，還不理解它。他週末聽 podcast：在 iPhone 語音訊息裡說 Dave and Buster's，訊息不會送出，他說今天仍是如此。有些東西我們就是不懂 AI 怎麼運作。快，卻沒有真的懂它怎麼運作、怎麼保護、該做的事有沒有做。

[27:29](https://www.youtube.com/watch?v=0U46-wl4azs&t=1649s) Guy 記得基礎設施曾經相當安全，由一小群很專業、很有安全意識、但太慢的人管。雲打開之後，更多人做得更快，常常不理解自己在做什麼。設定錯誤後來成了入侵的巨大原因，也許是最上面的原因。現在每個人都能當創造者，既有開發者也快很多、審查少一點。Code 裡的漏洞會不會變成以後的 Achilles heel？技術反正會被採用，是不是只能接受？Danny 是樂觀的，長期會自己理順。標題之所以如此，是因為我們在把 coding 民主化，走得快，把開口放得像雲一樣大。結果是更多 code，更多 code 就是更多漏洞。時間久了會把控制和 guardrails 做進去。更多人能做開發，不會取消對開發者的需要。他兒子讀 computer science，問以後還需不需要開發者。他說那很荒謬。我們是把開口打開。需要的是 guardrails，免得走到雲後來的位置。

[30:15](https://www.youtube.com/watch?v=0U46-wl4azs&t=1815s) 有人問 agent 之間傳遞授權，是否像傳遞智財的所有權、或用 micropayments 交換價值。Danny 說問題相似，但是分開的。AI 的智財所有權是真問題，他不想縮小它：音樂、藝術、code、語言、書都是。他可以叫 AI 寫一本書，那應該有人拿到報酬，他不確定答案。另一個相似但不同的問題是：他們該不該碰到那些音樂、藝術、文字、code。Micropayments 重要，是因為若要 AI 繼續擴散，就得有歸屬的模型，否則把資料貢獻進 LLM 或背後 diffusion models 的人會消失。Guy 想的是帶著保護在移動的資料資產，有點像 DRM，內容和安全一起傳。

[31:48](https://www.youtube.com/watch?v=0U46-wl4azs&t=1908s) Jason 問 attestation 在 AI agents 和 supply chain 裡會怎麼扮演。Danny 通常不喜歡用法規管新技術，新創特別難。但現有合規，例如 PCI DSS，要求驗證某些事，於是會要求對 LLM 支撐的 AI native software 做 attestation。他覺得這會自己解決。他唯一擔心的是碎裂：不要每個國家、美國每個州都有自己的 GDPR。最好收成一套想清楚的共同要求。字幕把 attestation 聽成 stationation。Guy 補：AI 可以不可預測，沒有理由不可追蹤。你可能不知道會發生什麼，但你想追得到。

[33:21](https://www.youtube.com/watch?v=0U46-wl4azs&t=2001s) 最後問開發者現在能把哪些檢查做進 agents。Danny 說兩件。他擔心 AI coding assistants 在某種程度上取代開源元件、改成自己生一套，因為下游還有那些開源元件的修補和更新。實務上：驗證你拉進來的套件；自己寫的 code，可以用 AI 測資料怎麼流過那段 code，並生成修正。確認自訂 code 的流程沒有在別處把建置弄壞。Guy 說自動化愈多，跑得愈快。Guardrails 聽起來累贅，但橋上有欄杆時你跑得更快，因為不怕掉下去。
