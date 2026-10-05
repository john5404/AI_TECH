# George Fahmy - DevOps Agents That Can't Delete Your Database | DevCon Fall 2025

George Fahmy，Stakpak 的 founder 兼 CEO。DevCon Fall 2025。片長約 22 分鐘，英文自動字幕。字幕把 Stakpak 聽成 Stackback、stack pack，把 Warden 有一處聽成 worden，把 Claude Code 聽成 clock code，把 Replit 聽成 replet，把 Terraform 聽成 terapform。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=CrNTH7qGFbo)

## 一句話

DevOps agent 要能自己部署，就不能靠「請 model 小心」或命令黑白名單。LLM 很會繞路。Stakpak 把三個威脅分開處理：secret 在進 model 之前換成 placeholder、檔案操作做成可還原、雲端破壞交給本機的 deterministic proxy。最後那個叫 Warden，在流量離開機器之前擋下。

## 為什麼 DevOps 特別容易出事

[0:09](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=9s) 他做 developer experience 和 security，兩件事通常合不來。他們做開源 DevOps agent，因為 LLM 最差的往往是 setup、deployment、pipeline。有人甚至說，LMS 能做 DevOps、能設定 pipeline、能部署到 cloud，才算 AGI。

[1:03](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=63s) 理論上的原因是 domain-specific language，加上會過期的知識。基礎設施兩邊都有：很多 DSL、YAML schema，而且知識常變。所以他們用 Rust 做 Stakpak。過去兩週有開發者拿它做不同的事，特定 stack 的 containerization 成功率幾乎到 100%。可是只要發生刪東西這種事，準確率就不重要了。他不單指 Replit；Amazon Q 幾乎發生過，GitHub Copilot 也有，Cursor 也刪過檔案或檔案系統。信任一沒，self-driving infrastructure 就做不成。

[2:14](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=134s) 他預告會在 YouTube 上漏出 production secret，並嘗試清掉 production infrastructure。

## 威脅模型只留三條

[2:28](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=148s) Agent client（若用 MCP 就是 MCP client）收使用者輸入、呼叫 LLM。Tools 可以是一組 MCP server，或做在 agent 裡。Security context 是高信任邊界：agent 假設自己的 tools 可信。Tools 再碰到本機或遠端檔案系統（SSH、SFTP），或經網路打到 cloud API，去 provision、destroy、管理資源。

[3:53](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=233s) 今天談三個威脅。一，敏感資料漏給 LLM provider。二，弄壞線上或本機的設定、把機器弄掛。三，改 cloud 資源，例如刪 bucket、刪 database。資料流一跨過 security boundary，怪事就發生在那裡。Injection 他帶過：很多人已在看，而且它本身不可怕，可怕的是被注入之後能漏資料、改設定、改資源。

## Secret 不能只靠塗掉

[5:17](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=317s) 明文不放 secret 很直覺，但 agent 要自主跑基礎設施，就得產生 secret 並真的用它。env 檔還是存在，GitHub 上也還是看得到 OpenAI API key。

整段 redact 也不行。Agent 要設定 secret、拿它跟別的值比較，全塗掉就無法推理。請 LLM「好好保管」更不用說。

[6:24](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=384s) 他們做 secret substitution。規則來自 gitleaks 的公開 ruleset，用 Rust 做進 agent，Apache 2.0，少第三方依賴。Agent 是腦，tools 是手。中間插一層：secret 變成 unique ID，agent 只看到 placeholder；寫回去時再代回真正的值。

[7:13](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=433s) Demo 連的是 live production。他問 AWS 權限，privacy mode 連 account ID、public IP 也塗掉，這些其實不是 secret。他說自己有 administrative access，這對後面很重要。列出 EC2 時 public IP 被藏住。再叫它把 IP dump 到檔案：LLM 看到的是 placeholder，打開檔案才是真的 IP。對照表目前放在本機檔案系統，之後可接 secret manager。

[8:46](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=526s) 後續想把這層收成 local MCP proxy，讓第三方 MCP server 也能用。GitHub 上的 fuzzforge 比較過：LLM 比 gitleaks、TruffleHog 這類 deterministic static analysis 更能抓藏起來或動態組出來的 secret。這跟「不讓雲端 LLM 看到 secret」衝突，所以他想在本機跑小 model，補強規則，在送上雲之前先抓到。

## 弄壞設定檔，要能倒回來

[9:50](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=590s) 全部 codify 成 infrastructure as code，理想上可以，實務上總有手動的 escape hatch，也一直有公司在幫人補這件事。全部備份理論上也好，但 ransomware 還在，就是因為人沒有都備份。

Filesystem overlay 他覺得最乾淨：改在 overlay 上，之後再 persist，也能 revert。但要 root，他們還在查，沒做成目前的解法。

[10:47](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=647s) 現在是 recoverable filesystem operations，不完美，LLM 仍可能不走你給的工具。Create 好還原，看 history 把檔刪掉即可。String replace 不能只把操作倒過來。他舉四、五行 Python：把 hello 換成 hey 沒問題，運算元對調就會得到 false。解法是讓 string replace 的輸出變成 unified diff，帶上下文，才能反過來。Remove 工具會備份：遠端編輯時把遠端檔備到本機，本機則備在本地。很多人用 Stakpak over SSH。Demo 裡刪檔、遞迴刪目錄，tool result 回 backup 位置，再還原。他說這像在 terminal 裡重做一次 trash。LLM 不一定會乖乖用這個工具。

[12:44](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=764s) 之後想做 user space 的 overlay。他也剛看到 agent FS：在 SQLite 裡做一層檔案系統，方便檢查、還原每一次操作。

## 白名單和 sandbox 都擋不住刪庫

[13:05](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=785s) 第三個威脅是 agent 毀掉 cloud。他自己若沒把握，不會拿 Stakpak 在背景用 CLI 查 incident。Least privilege 對人已經很難：事前不知道要哪些權限，查 incident 時只有 read、不能 revert，就卡住。Kubernetes、AWS、GitHub 各有 API，有公司專門做跨 API 的存取管理。所以就算做到 least privilege，自主 agent 仍要 defense in depth。

[14:15](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=855s) 最流行的是 whitelist、blacklist，加上 hooks。Agent 很會繞。他在紐約一場 cloud native meetup 逼 agent 只產生 100% 合法的 Terraform。叫它做不該做的事時，它生出 null resource，把 script echo 到檔案系統再執行。黑白名單擋一條，它改走 Python 或第三方工具。

[15:13](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=913s) Code sandbox 也對不上這個 threat model。要擋的是打出去的 API，不是只擋本機檔案。VM 裡只要有 API key，一樣打得到雲。

[15:58](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=958s) 用另一個 model 偵測惡意指令，他也不信。有人做到他說的 99.9999% 準確率，仍躲不開 adversarial machine learning：找一個例子讓網路做錯。語言 model 可以被 jailbreak；視覺 model 也一樣。他提到 2017 年的論文，字幕說一個 neural net 把 hamster 認成 nipple；後者很像聽錯，這裡不另補論文名。改一個 pixel 就能讓惡意指令被判成良性。2021 年更能 3D print 出騙自駕車的物件。研究曾認為 lidar 加影像的 multi-sensor fusion 更穩，一個白色小立方體就讓模型做出攻擊者要的動作。找這種例子的方法，是再訓練一個網路。所以不能 100% 信任。這場用的手法都是 deterministic。

## Warden 在流量出去之前擋

[17:47](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=1067s) Warden 是 transparent proxy，把 agent 和 MCP tools 的流量接住，用 Cedar 套 policy。他說有人（字幕聽成 Ry）提過 Cedar。大約 30 行就能擋掉全部存取，並留一條回 Stakpak API 做 inference。這 30 行讓你能在 AWS 上工作、又不能搞破壞。攔截發生在本機、離開網路之前，CLI、自寫 Python、Terraform 都一樣。他叫這 network sandboxing。

[18:42](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=1122s) Demo 是叫它 nuke 全部 EC2。團隊不會高興。Warden 攔下 destroy 那次請求，回 denied。

[19:33](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=1173s) 還沒做完的是 UX。他得把 Stakpak 和相依一起放進同一個 sandbox。他想縮小到單一命令或單一 MCP server，同一段裡安全和不安全操作可以混用；session 中途開關；政策能當場改。Cedar 可以 deterministic 地判斷兩份政策是否等價、或是否為子集，所以可以讓 LLM 當場寫政策，仍有保證。他也想把這做成 spec，跟做 agent 的人一起定 sandbox 要長怎樣。

[20:28](https://www.youtube.com/watch?v=CrNTH7qGFbo&t=1228s) 他已在跟 Anthropic 的一位工程師聊。對方也做了類似 sandbox，但是靠 CLI 遵守 system proxy，不是所有 HTTP client 都做得到，所以他們堅持 transparent proxy。StrongDM 的 Leash 同樣做 network sandboxing，另外還攔截 filesystem 的 system call。他邀請大家把這些努力接起來，LinkedIn 找他就行。
