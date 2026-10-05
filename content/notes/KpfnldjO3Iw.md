# Skills are the new Code

Guy Podjarny（Tessl CEO、創辦人）在 AI Native DevCon 2026 年 6 月的開場。原片約 31 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=KpfnldjO3Iw)
- 講者：Guy Podjarny，和 Simon Maple 一起辦這場會。Tessl 是他兩年多前創的。
- 字幕檔：`data/videos/KpfnldjO3Iw/original.txt`。字幕把 CLAUDE.md 聽成 “cloud MD”，把 Snyk 聽成 “sneak”，把 OpenClaw 聽成 “open claw”。下文用校正後的名字。

## 一句話

軟體開發的中心從 code 和 implementation，轉到 intent 和 instructions。在這套新 stack 裡，context 是寫進 model 的程式，而可重複使用的那一層叫 Skills。Skills 會像 code 一樣爆炸、腐壞、被攻擊，所以要用同一套軟體工程工具來管：static analysis、evals、security、dependency management、observability。

## 這套 stack 長什麼樣子

從 [0:41](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=41s) 起。Tessl 成立時相信會有一套新的開發範式，但還不知道長相。他現在看到的是一層一層疊上去的 stack。

1. **Models。** 最底層的新 primitive。他後來把 models 比成 operating system：上面寫的東西要跟它們相容。
2. **Tools。** 讓 model 變成 agent 的手腳，也能比把每件事都丟給 model 更便宜、更快、更穩。
3. **Context。** 引導 model。他說這一層才是新的 code。
4. **Harness。** 用 deterministic software 包住 probabilistic model。
5. **Factory line。** 把多個 harness 接成一條 pipeline。
6. **Factory。** 整條開發流程。

他說這些名字都還在變，harness 目前被用得最濫。但已經夠用來推理。Tools、harnesses、factory lines、factories 本質上仍是包住 model 的 software。真正新的運算單位是 model，以及會進到 model 裡、改變它在做什麼的 context。

## Tools：不一定每次都要 raw intelligence

[2:11](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=131s)。Tool 是 utility。常見三種：CLI、agent 直接呼叫的 MCP、以及 API。

`grep` 讓 agent 在很多檔案裡找東西，不必把那些 token 全載進 context。FFmpeg 剪片比 model 自己改影片更不容易錯，也更便宜。Tools 可以 pipe、可以寫 code 把它們組起來，所以不只有通用工具，也可以做成當下要的 custom tool。

## Context 的三種內容、三種載入方式

[3:30](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=210s)。對 LLM 來說最後一切都是 context，也就是你放進那一次呼叫的東西。人寫進 repo 的 context，通常是 agent 不知道、或自己找會很貴、很容易錯的資訊。他分成三桶。

- **Policies and practices。** 這個 framework 我們怎麼用、security policy、API design。是房間裡講好的約定。
- **Specs。** 他定義成 product 的說明：你在做的產品，或你在用、變得很快的 API。Agent 可以 trial and error，但貴，而且做不好。
- **Workflows。** Incident response、code review 要怎麼走。有時是因為 agent 自己還做不好，有時是因為你要每個人都能對上的同一套做法，而不是每次即興排查。

載入方式是另一條軸，[4:49](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=289s)。

- **Rules。** 每次都塞進 context window。例如 CLAUDE.md、AGENTS.md。要管大小。
- **Skills。** 需要時才載。使用者叫它，或給 agent 一點 hint。
- **Passive context。** 放在 repo 裡的文件，例如 ARCHITECTURE.md。希望 agent 用搜尋自己找到。

接下來他為了講得簡單，把 context 大多稱作 Skills，但這三種載入並不相同。

## Skills 像 library，而且會互相呼叫

[5:28](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=328s)。Skills 會呼叫 tools，很多 skill 就是在教 agent 怎麼用 tool。Skills 也會呼叫別的 skills。Incident response 可以先叫一個 skill 用 Datadog 收 log，再叫一個做 root cause analysis，再叫一個把事情寫進 Linear 或 Jira。

他用寫網頁不必自己寫 kernel 來說明：composable 才是 software 能疊上去的原因。

只做一次的事，用 prompt 就好。你覺得會再做，才做成 skill。所以 skill 的設計就是 reusable，像 library。[10:53](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=653s) 他把人提供的 context 排成一條：當下的 prompt、放在 code 旁邊的 docs、專案用的 rules，然後才是跨專案重用的 skills。

## Harness：deterministic software 包住 model

[6:12](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=372s)。Harness 決定怎麼跟 model 互動。Claude Code 就是一個 harness：它知道怎麼載 rules 和 skills，用 config 限制 container 裡能做什麼，也決定哪些 tools 可用。

它愈來愈像可擴充的 framework。你可以加 plugin，把自己的 tools 和 skills 放進去。也可以加 hooks：每次 prompt 進來先跑一段 deterministic code，改掉它，或不准它走。每次 tool call 也可以這樣攔。這些東西比再叫一次 model 更便宜、更快，而且確定。

兩個他舉的控制例子。

- **Intercom。** 相關 skill 沒被載入，就不准開 GitHub pull request。Agent 知道 skill 在，不代表它會載。Harness 把選擇權從 model 拿走：這次一定要載。
- **OpenAI 的 Ryan。** 他們自建的 harness 有一條常見規矩：沒有達到指定 test coverage，不准 commit。

[8:47](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=527s)。Harness 也可以組成 factory line。Product harness 把 feature request 展開，coding harness 做出東西，security harness 做安全，DevOps harness 負責 deploy。一頭進去的是 feature request，另一頭出來的是已經 ship 的 feature。

不是每個開發者都要自己寫 harness。愈來愈多組織會大幅改 harness，或自己做一個。

## Skills 正在爆炸，企業開始失控

[11:18](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=678s)。他剛做完的 GitHub 分析：上面大約有 200 萬個 skills，年初幾乎是零。有的開源、有的閉源，品質高低都有。企業內部也在同樣的坡上增加。他用一張 John Travolta 的圖說多數企業的感覺：skills 在變多，人正在失去控制。

## 三個已經很熟的問題

[12:21](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=741s)。他說這三桶在不同組織裡出奇地一致，而且都是 code 早就遇過的問題。

### Security，然後才有 governance

Skill 是被 agent 執行的，所以可能有害。

- **Malicious skills。** 做出來就是要造成傷害。他說在 OpenClaw 生態系裡，超過 30% 的 skills 是惡意的。這是一條很容易進來的路。
- **Negligence。** Skill 催你做事，卻沒有安全邊界。例如叫 agent 更新資料表，卻沒寫 “do not drop the table”。這種事已經在幾個地方發生過。
- **Vulnerable skills。** 指引本身把你暴露出去。最常見的是把 API token 或其他 secret 放進 log 看得到的地方。Agent 拿得到，就有機會被弄出去。

有風險就要問：我到底在用哪些 skills、誰在用、哪一個有風險、被入侵時我知不知道。中型以上的組織需要 supply chain hygiene。他認為每個人至少都該知道發生了什麼。

### Reuse 失敗的那間獨角獸

[14:00](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=840s)。一間超過 1000 個開發者的獨角獸告訴他：大家都愛 skills，也都在做自己的。Code review、test、跟 app 有關的 skill 被重複做了很多次。於是他們做了一個 shared repository。

很快變成一團。重複的版本全進了 repo。新人想用現成的 code review skill，面前有七個，沒有任何訊號說哪個好。有 “works on my machine”：一個人的 agent 上好用，換一個 agent 就不好。也有 PR 停在那裡：有人提議改一個 skill，作者無法判斷這次修改是變好還是變壞，因為沒有工具。最後沒人敢信 repo 裡的東西，大家又回去自己寫。

他認為缺的是品質訊號，以及 dependency 管理。

### Lifecycle：skill 會腐爛

[15:35](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=935s)。不維護的 software 會停、會變成有害。Skills 一樣。今天好用，之後 model 變了、旁邊的 API 變了、部署的基礎設施變了，skill 就會給錯指引。他投影片寫三個月，口頭說在 AI 裡可能兩週就過時。

維護是棍子：不維護就會造成損害。也有胡蘿蔔：agent 在的話，維護可以變成優化。看 agent log、pull request、production log，把實際發生的事轉成新的、修改過的、或該刪掉的 skills。

兩邊都指到同一件事：高品質、由 agent 驅動的自主維護。

## 把五種 code 工具用到 Skills 上

[17:50](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1070s)。Skills 不是 intranet 上的 Notion 或 Confluence 文件。它們是 software。他要的五樣是 static analysis、dynamic tests、security tools、dependency management、observability。

### Static analysis

不執行，只檢查。Code 這邊從 lint、型別，到看 data flow 的 security analyzer，再到看程式在做什麼的 review，都可以不跑程式就擴大規模。

Skills 直接適用。Tessl 有 lint，檢查欄位和格式。他們用 Tessl review 對 Anthropic 的 best practices：有沒有做好 progressive disclosure、夠不夠精簡、activation 有沒有講清楚。也可以做針對內容本身的 review。他說難的不是工具，是先停下來定義什麼叫好、什麼叫正確。

### Tests 在這裡叫 evals

[19:50](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1190s)。不寫 test 的話，隔天要改就無法疊上去。Skills 的對應物是 eval：定一個環境，真的讓 agent 跑一項任務，再判斷結果。

- **Skill evals。** 像 unit test。Skill 是一個 software unit，隔離來測。可以只跑你在乎的 agent，或用便宜的 open model，確認沒有 regression。
- **Project evals。** 一個 repo 上裝了多個 skills，例如 20 個。更接近 production。可以把舊的 pull request 抽成 scenario，看分數。用來優化專案的 context，也用來決定加一個 skill 是有用還是有害，以及該刪什麼。
- **更完整的 eval。** 像 end-to-end。用來回答組織層級的問題：這項任務能不能改用便宜很多的 GLM（他提到 GLM 5 或 2.6），還是得用 Opus，甚至升到他口中的 Opus 4.8。新 model 出來時，也能看它有沒有跨過你一直失敗的那關。

Scenario 的品質跟 test 一樣。有的 test 覆蓋率 100% 卻抓不到 bug。有的 scenario 很有用，有的只是在燒 token。

Tessl 用 Tessl eval 幫你產生 scenario 並跑。Static 和 dynamic 的結果可以收成一個 quality score。在那個 shared repo 裡，分數不完美，但能讓你知道哪一個方向上比較好。

### Security testing

[24:19](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1459s)。Static scan 可以直接用。他很高興各家 app 開始做 skill scanning，Snyk 是其中一個。Tessl 把 Snyk 接進自己的 registry，也願意試別家。他創辦過 Snyk，所以這段是把他對 security 嵌進開發流程的看法搬到 skills。

Dynamic 這邊還早，比較像 red teaming。Skills 的功能差很多，什麼叫預期行為不好定。Supply chain 則一定會來：LLM 和其他 supply chain attack 已經很多，skills 正在或即將發生同樣的事。你得追蹤自己在用什麼。

### Dependency management

[25:24](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1524s)。沒有人覺得 dependency management 有趣。升級會弄壞應用，彼此衝突，太舊就用不上新系統，太新可能已被入侵。Package manager 存在就是因為這些是真問題。

Skills 也需要。有了它才有 registry 可以發現 skills，才有 version：出問題時知道是哪一版，修好再推一版看有沒有好。Tessl 安裝 skill（或打成 plugin）時會記住你裝了什麼，之後可以更新，這也是 supply chain visibility。然後才能設門檻：什麼品質、什麼安全等級才准裝進 workspace、才准發布。

跨 agent 也該像 npm：npm 不在乎你是 Windows 還是 Linux。Skills 不該綁死在某一個 agent。

### Observability，然後換成 context 的開發循環

[27:02](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1622s)。實驗室裡的品質有上限。Runtime observability 是去監看 coding agents，從真實運行抽出 eval scenario，更新 skills，也從整體成功率裡挖缺口：該新增什麼、該刪什麼。

他把這些工具收成一條循環，但名字不該再叫 software development lifecycle。人應該活在 context development lifecycle 裡，把 SDLC 留給 agent：產生 context、評估和測試、需要時優化、用 package management 發出去、安全地取用、觀察結果，再重複。

## 他要人帶走的模型

[28:18](https://www.youtube.com/watch?v=KpfnldjO3Iw&t=1698s)。

- Models 像 operating system，上面的東西要相容。
- Tools 是 utilities。
- Context 是新的 code。
- Harnesses 像 frameworks。
- Factory lines 像 pipelines：固定類型的輸入，穩定的成功輸出。
- Factories 是整套開發流程。
- 在這裡面，Skills are the new code。要給它們對得上 code 的工具。

他希望人去試 Tessl 的工具，但說 mental model 比產品更重要。

會末他宣布 Tessl agent 還很早，是一個 vertical agent，用來開發 context、harnesses、factory lines 和 factories。可以在本機用，可以放進 pipeline 裡持續優化，也可以從 Tessl Control Center 用。要 early access 的人去攤位，或在線上從 Tessl 的 agent eval 登記。

收尾時他說新的開發範式不是某一家廠商的工作，是社群一起做的。這兩天除了聽，也要把自己的學習分享出去。
