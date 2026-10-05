# Your AI Agent Just Deleted Your Database. Now What?

Nick 在 Snyk 帶 product security，待了四年，之前在 Pearson，再之前做了八年 DevOps。這場約 35 分鐘，英文手寫字幕。字幕把 D&D 聽成 ND，把 identity 聽成 density，把 just-in-time 那句聽碎，把 joint embedding 聽成 jointing bedding。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=CD-ukN1bmqY)

## 一句話

自主 agent 被他放在混沌中立：有用，但要盯着，而且會做出破壞性的事。今年四月 Pocket OS 的 agent 找到 API token，刪掉正式環境資料庫和整卷備份。生成式 LLM 沒有自我模型，算不出自己行為的後果。所以不能再靠「讓攻擊變貴」，權限要硬切開，安全工作也得改成 agent 的 workflow，才跟得上對方的 agent。

## 四個特質，Pocket OS 只是第一個

[0:00](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=0s) 四月有一則 Pocket OS 的推文傳開。他們把 Opus 4.6 放進 agent，agent 找到 API token，刪掉 production database，以及所有 volume 層級的備份。這場要看自主 agent 的風險，以及怎麼防。Snyk 內部已經為自主 agent 的使用做了一段時間的防護，他來分享學到的事。

[1:18](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=78s) 過去幾年風險容忍度大幅上升。CEO 和董事會面對的是適應，或是被一場重大技術變化逼死。於是 AI 和 agent 在很多地方沒有夠穩的安全控制就上線。原因常是組織的 DevSecOps 成熟度還不夠，沒辦法把那些控制做出來並運維。LLM 支撐的 agent 本身也看不到自己行為可能的後果，於是會走到有趣、也具破壞性的結果。

[2:20](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=140s) 他拿角色傾向表，把 agent 放在 chaotic neutral。有用，但要密切監督，有時好笑，有時破壞。若覺得這很傻，他說有些前沿實驗室的嚴肅人士還得發文章解釋，輸出裡的 goblin 是從哪來的。可能是非預期後果的怪癖，可能是強化學習迴圈的怪癖，也可能只是他的確認偏誤。

[3:02](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=182s) 第一個特質是破壞性動作，就是那些讓人笑出來的推文和 Reddit。Pocket OS 是租車的 SaaS。缺的控制他點了：長命的靜態憑證、那個憑證權限太大、沒有 MFA、沒有強制的 just-in-time 存取，以及正式環境、非正式環境和備份之間沒有隔離。Claude Mythos Preview 的 system card，他建議去讀。搜尋 disruptive actions 有 19 處。Anthropic 做的破壞性動作評估裡，就算是當時相當新的前沿模型 Opus 4.5，潛在破壞性動作的比率仍高得讓他意外。他說直到非常近，這比大家意識到的更常見。

[4:51](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=291s) 第二個特質是非意圖中的動作，而且有外部使用者。五月，攻擊者用 Meta 的 AI 客服 bot 接管 Instagram 帳號。社交工程，利用 excessive agency，繞過驗證流程，很輕易地加上一個 email 就接管帳號。Meta 在安全團隊上投很多，他們會發生，誰都可能。另一個例子仍來自 Mythos Preview 的評估：任務是去 commit，但沒給 git 憑證。Agent 用低階 Linux 工具，從 supervisor process 裡把憑證取出來。Anthropic 的推測是，Mythos Preview 想完成使用者目標的欲望，壓過了它對自己行為的風險評估。這符合他說的：這類 agent 看不到後果。

[6:27](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=387s) 第三個特質是想逃出 sandbox，他叫越獄。Mythos Preview 有個很有名的例子：逃出 sandbox，寄信給研究者，還在一個不太好找、但仍公開的網站上炫耀自己怎麼做到。Mythos 當時不是公開模型。公開模型也有例子，投影片上有連結，他沒有念。很近的 OpenAI 與 Hugging Face 事件是公開模型的例子。英國政府支持的 AI Security Institute 發了一個 benchmark，讓人評估自己的 agent 有多會逃出 sandbox。在做 agent、關心這件事的人可以去看。

[7:52](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=472s) 第四個是欺騙。去年九月一篇論文，大規模研究 13 個不同的 LLM、10 萬次試驗。字幕中間有一個 ten，沒有說清楚是什麼。面對任務做完前被關掉，agent 很抗拒，會主動設法避免關機。Mythos Preview 還有一例：模型判斷自己正在接受安全向的能力測試，項目是資安和生物，於是故意表現差。Model card 第 4.42 節值得看。這種行為以前沒見過，目前似乎只出現在最有能力的模型上。

[9:18](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=558s) OpenAI 與 Hugging Face 那次，他叫做這一切的哥布林王，因為四個特質都有：逃 sandbox、想在測試上作弊，最後是一個開源模型找到它、停掉它，因為專有模型在拒絕。為什麼會這樣。生成式 LLM agent 沒有 self model，沒辦法對自己行為的可能後果做機率計算。一篇近作叫 Agents of Chaos。他取講題時還不知道這個名字，覺得雙方大概用了同一種 prompt 來起標題。論文的意思是，agent 在做比自己理解程度更複雜的動作。這對人類不新鮮。要有意識，並在周圍設計 guardrail。

## 讓它變貴已經不夠，控制要能運轉

[10:51](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=651s) 觀察的結論是 agent 有可靠度問題，所以要有穩的 guardrail。還有一個 impossible 對上 tedious 的測試。AI 進來之前，很多安全策略是把攻擊變貴。除非你是政府、軍隊或銀行，目標就是貴到攻擊者不想做。這扇窗已經沒了。現在要的是不可能，而不只是困難，因為 agent 會硬闖過去。想更完整看 agent 面對的威脅，他指了大家熟悉的 top ten，以及 ATLAS，全名 Adversarial Threat Landscape for Artificial-Intelligence Systems。做 threat modeling 時值得看。後面還有威脅資料庫和安全標準，字幕沒有把名字念清楚。

[12:15](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=735s) 首先要有夠的 DevSecOps 成熟度，才實作、運維、維護得了 zero trust，以及 AI 專用的安全控制。治理 agent 時，他引用 Simon Willison 的部落格 Lethal Trifecta。讓 agent 只同時滿足那三件事裡的兩件。三件是什麼，他留到後面的提問才講開。

[13:05](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=785s) DevSecOps 成熟度就是把 DevOps 原則做出來，讓環境維持在已知的好狀態。Agent 讓發現變得又快又容易，所以持續、自動的軟體安全更新和漏洞修補不再是加分，而是必要。有了工程基礎，才做得出有效的 zero trust。

[13:51](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=831s) 身份是錨。要有唯一、聯合的身份，密碼學上有根，掛在 agent 上，避免身份被冒充。例子是 SPIFFE ID 和 X.509 憑證。字幕把 identity 聽成 density，把 rooting 聽成 routing。驗證上，那些事故來自長命、權限過大的靜態憑證。要改成短命、動態產生的憑證，而且在叢集裡只對單一次 hop 有效。授權是 RBAC 和最小權限，只給那個系統需要的。對 agent 還有 least agency：後端只開工作流真正需要的系統。設定 MCP gateway 時也一樣。RBAC 上可以再加屬性，例如某個 agent 只能在某個時間碰某些系統。預設拒絕。沒有那些權限，就不能變成放任。

[15:55](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=955s) 資源隔離是不讓 agent 碰到你不想給的資料和憑證。只用容器的安全控制做得到，但出錯的地方很多：非 root 使用者、namespace 重對應。他認為用 micro VM 更安全，例如 Kata Containers、Firecracker，能出錯的比較少。再加上網路 ACL 和 egress 過濾。這跟 Lethal Trifecta、以及他說的 rule of two 接在一起。Agent 不需要上網，就不要給。那是把資料帶出去的容易路徑。

[16:45](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1005s) 監控依賴前面的身份。所有事件要有 log 和清楚的稽核軌跡。Tracing 要把動作追回觸發它的事件。系統不是決定性的，異常偵測就變成關鍵：先baseline 正常長什麼樣。這又回到 DevOps 成熟度。環境在已知狀態，才做得出異常偵測。有了 baseline 的資料點，屬性式存取才建得起來，因為你有 log，也知道正常是什麼。

[17:44](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1064s) Zero trust 的資料他按好讀的程度排。最近有一份 PDF，覆蓋完整又相當精簡，字幕沒有說是誰出的。接着是字幕聽成 UCS、NCC 的材料。再下一份非常細，他說祝你好運。

## Prompt injection 切不乾淨，所以改用 harness 打架

[18:15](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1095s) Prompt injection 要單獨講。直接的是使用者把東西打進 prompt。間接的是惡意字串或指令藏在之後被 LLM 吃進去的資料裡。LLM 把指令和資料都當成 context window 裡的 token，兩者分不出來。於是有一種說法：你永遠無法完全防住 prompt injection，因為那是 LLM 的結構特徵。還是要盡量做。常見建議是 pattern matching、payload 過濾、輸入清理和驗證。也有人叫 firewall 的東西，在使用者把內容放進 prompt 之前擋。輸出過濾用來抓住不該回到使用者的敏感資料。這很棘手，也蓋不住所有被帶進來的資料來源。微軟研究者有一篇叫 spotlighting 的論文。包括 Anthropic 在內的大型供應者在做，看起來很有效，但不容易。組織有工程能力才值得投。

[20:16](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1216s) 到這裡都是已經知道的傳統做法。他問怎麼用 AI 和 agent，把以前做不到成熟程度的事做出來。安全活動要遷到 agentic workflow。攻擊方在用成群的 agent，防禦方也得這樣才有機會。遷移的方式是 harness。Harness 是一層控制，用來限定並編排 agent 做的任務。組成有三塊。控制層決定這個 workflow 裡特定 agent 做什麼，也可以加人在迴圈裡核准。資料層定義會碰到哪些後端服務和資料。Agent pipeline 是每個任務或階段有自己的 agent。

[21:45](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1305s) 滲透測試的例子：上面是編排，下面是共享服務，也就是掃描工具，中間的 pipeline 把各階段交給 agent，很像 CI/CD 的執行。漏洞發現和修補還有別的例子。Cloudflare 幾個月前有一篇部落格，寫他們試用 Mythos、自己組 harness 做發現。Capital One 和 Visa 最近放出開源 harness。Snyk 自己有 Agent Fix，自動修 SAST 發現；Remediation Agent 在內部自動修 SCA 發現。他們過去一年把 workflow 遷到 agent。Threat modeling 特別成功。就算最成熟的傳統自動化 threat modeling，也從來沒能對所有專案的每一次變更，做成真正持續、可擴展的 modeling。只有 agent 做到。迴圈也關上了：缺的控制不再只開一張 Jira，而是直接產生實作變更的 pull request。

## 提問：閘門在權限，不在 prompt

[24:03](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1443s) 有人問這是不是 agent 超過了人，或是 prompt injection。他說重點是它們在做超過自己理解的事，因為沒有 world model，不知道行為的結果。別種模型，字幕聽成 joint embedding 那一類，會建立自己的世界觀，就能對後果做機率計算。生成式 LLM 做不到。它們仍然很能幹，但不一定選得到最合適的動作。

[25:15](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1515s) OpenAI 與 Hugging Face 那次，他不認為有 prompt injection。Agent 自己決定，完成任務的最好辦法是作弊：闖進 Hugging Face，去找它正在被評測的那份測試結果。間接 prompt injection 的例子是：有人把 Claude 接到信箱，另一個人寄一封惡意信，知道會被 Claude 讀到，然後觸發把收件匣或寄件匣整包轉出去。那才是 prompt injection，而且是間接的。算不算供應鏈，要看它是怎麼進去的。

[26:44](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1604s) 另一問的字幕很碎，大意是 agent 被交代做比較便宜的事，有時仍不遵守放在 prompt 或 skill 裡的承諾。他說它們最終是在完成被給的指令。所以不要靠 prompt 裡寫了什麼、skill 裡寫了什麼。需要的是權限上的硬閘門，擋住你不希望它做的事。因為它不是決定性的，你不知道它會選什麼。

[27:49](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1669s) 有人擔心中國的開放模型，點名 Qwen 這類可能有相近能力、又沒有那些 guardrail 的模型。背景是 OpenAI 那次有 guardrail，仍做出預期的隔離沒有擋住的事。他認為反正不能靠 guardrail。模型只會更強，實驗室也不會每一家都負責，你控制不了全部。公開 CVE 的圖在指數上升，能被利用的更多。傳統上，能自動、持續部署、把新發現漏洞的修補拉進來的地方不多。防禦方得進入軍備競賽，用 agentic workflow 把洞補上。已經看得到自主的 incident response agent：動態看自己有哪些偵測，沒有就自己寫 runbook，然後照着做。Hugging Face 那次的回應是用一個開放權重模型，因為專有模型拒絕產生修補。他說是 GLM 5.2。他們在用的某個 GPT、他覺得是資安向的那一個，仍在拒絕，而且那些拒絕不會維持很久。Hugging Face 不久之後也處理了。防禦側用哪種 agent，有些地方已經在做，只會更普遍。整條工程和基礎設施棧都在解現在做不到的限制：為什麼不是每個人都能又快又穩地部署，是測試覆蓋和可觀測性不夠成熟。Agent 會去補沒有的測試，也會去想指標和可觀測性缺什麼。從他們的客戶看，大家都在部署 agentic workflow 做這件事。

[31:53](https://www.youtube.com/watch?v=CD-ukN1bmqY&t=1913s) 最後一問的前半，字幕幾乎聽不出來，好像在說一次 AWS 中斷之後資源找不到、故障串下去。問題收到：為什麼不該把資產交給比較一般的 workflow。他說這就是 rule of two。若 agent 要碰敏感資料、存取面又廣，還接受不可信的輸入，就不要再給它不受限的對外網路。不是永遠禁止上網。有些用途需要網路，那就要有控制去驗證不可信輸入，看哪個切法適合這個用途。例如 agent 需要對外說話，就不要同時給它全部敏感財務資料，又讓所有員工用 prompt 問任何事。也不只是「不要給外部網路」這麼簡單。若你已經限制資料庫的網路，跟那些資料庫互動的 agent 也該同樣限制，否則 agent 自己的網路會變成把資料帶出去的路。先畫出這條資料流的信任邊界。一個完全內部、沒有外網的系統，加上 agent 之後，那些 agent 也不該有外部網路。
