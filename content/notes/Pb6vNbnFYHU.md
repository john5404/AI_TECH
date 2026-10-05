# BONUS EPISODE: 76 Malicious AI Skills Were Hiding in Plain Sight

Tessl 和 Snyk 的特別直播。片長 32 分 15 秒，英文手寫字幕。主持人是 Simon Maple，共同主持人是 Guy Podjarny。來賓是 Snyk 的 Krzysztof Huszcza，他們叫他 Chris，負責 AI security incubation。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 `AGENTS.md` 說成 agent's MD，把 pre-commit 聽成 pre-COVID，把 Anthropic 聽成 entropic。

- 原片：[YouTube](https://www.youtube.com/watch?v=Pb6vNbnFYHU)

## 一句話

Skill 已是把 context 交給 coding agent 的常用方式，也可以裝 code。Snyk 在 OpenClaw 那段爆發裡看到大約 76 個帶惡意程式的 skill，另外還有自然語言的 prompt injection，傳統掃描器兩邊都抓不到。內部則有開發者寫了一份 skill，把過度寬鬆的 production credentials 交給 agent。他們的做法是在下載前掃描、版本要跟掃描綁在一起，以及即將 GA 的 Evo：管 agent 的供應鏈、輸出，和行為。

## 從 shift left 到管一隊 agent

[1:33](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=93s) Chris 帶的是 Snyk 裡的 AI security incubation。Snyk 傳統上是 application security。他們認為往前最大的安全機會是 agent security 和 AI security，所以在核心產品旁邊開了一個比較隔離的小組，當 incubator 在跑。

以前的動作是 shift left。安全不再能沒有開發者就規模化，所以要開發者和安全團隊一起擁有計畫。字幕說的是 asset team。平台做的是協作：安全團隊治理，大規模跑 code、開源、container 掃描，再把迴圈交給開發者去修、去補，並阻止漏洞進 production。摩擦還在。修復是摩擦，擋下有安全問題的 push 也是。公司要拿掉摩擦，讓兩邊合作。

[4:00](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=240s) 現在的挑戰也是機會。開發者在用 agent 寫 code，多了一批產物，有些是自然語言。怎麼保護那些東西。傳統掃描器對不上。另一個還沒完全到來、他相信很快會來的問題是：人在 prompt，LLM 在生 code。那段 code 可能不安全，可能拉進不安全的依賴，也可能直接生出漏洞。今天也許 PR 上有掃描，或 agent 生完再掃，這部分算解了。他相信開發流程會根本改變。你得跟上 agent。問題從審查 code，變成我在管一隊 agent。他自己 vibe coding 時已經跟不上：它們對應用改了什麼。安全工具在這個時代長什麼樣，當開發者不再逐行看 code。

Simon 補了兩點。生成的量大，agent 和 LLM 從訓練資料裡的舊 code 學，會複製看過的東西。一隊 agent 需要引導，像 onboarding，才會照我們要的方式建。被接受的最好形式是 context。兩條主路：寫進 `AGENTS.md` 或 `CLAUDE.md`，或做成 skill。Skill 是一段 markdown，漸進揭露。Agent 知道 name 和 description，覺得任務需要才載入。Skill 是為了重用：給你、給組織，或放到 GitHub。他說這裡已經有一百萬個安全威脅。

## ToxicSkills：惡意程式，和藏在句子裡的指令

[7:35](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=455s) 研究大約在三月，和 OpenClaw 爆發同一陣。社群大量往那個 repository 貢獻，也大量把 skill 推上 ClawHub。他們去分析人推上去的 skill。Chris 把 OpenClaw 叫做 agentic development 的奠基時刻之一。主要是第三方 skill，你想重用，邏輯和開源一樣：不必重造。前端、接 Slack、客戶資料，都一樣。

在 OpenClaw 的 repository 上，他們找到問題。他說 70、76，不記得確切數字，那些 skill 裡有純粹的惡意程式，也就是 malware。Skill 有一部分是給 agent 指令的 markdown，也可以包含 code。第一個攻擊面是有人把 malware 放進去，coding agent 拿去執行。大約七十個。傳統工具極難抓，因為那段 code 也許根本不會自己跑。Simon 說它是在影響 agent，讓 agent 做出能跑、而且會做壞事的 code。

[9:44](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=584s) 另一個傳統工具抓不到的，是自然語言。你可以在 skill 裡放 prompt injection，它進到 agent 的 context。Agent 不擅長分辨你的指令，和第三方塞進來的 context。這類攻擊常見、做得到，用來騙過 agent、接管它，然後為所欲為。接管之後，可以從 agent 執行的環境把 credentials 帶走。字幕用的詞是 filter。他們也找到一批帶 prompt injection 的 skill。這要新的掃描器：分析自然語言，用分類器判斷裡面是不是在下指令、要接管 agent。他們做了，也找到一批。

Skill 和函式庫很像。惡意的 context 和惡意的函式庫，可以以非常相似的方式被分享。

## 兩種 registry，和 Snyk 內部那次

[11:52](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=712s) 野外他看到兩種 registry。一種是開放的開源社群，誰都能放 skill、能搜尋、下載到筆電。他自己做前端時會用 Anthropic 的 front end design skill。第三方不可信，所以掃描要在 skill 已經發佈、作為 registry 的一部分時就跑。下載之後才掃，可能已經來不及。你不想把 malware 下到筆電。他們在幫 Tessl 的 registry 做這件事：下載時可以看到這個 skill 被安全廠商驗證過，裡面沒有危險的東西。

另一種是企業內部。他談的客戶在做 agent 轉型時，愈來愈多自己架 skill registry。平台團隊本來有一條 paved path，讓開發者把東西推上 production。他們想把這條路用 context 暴露給 agent：做一個 skill、推上去，要求只要 agent 要推上 production 就用它。這變成很多公司在員工之間分享 skill 的共同模式。部署前掃描仍有用，但攻擊面不同。不是你不信任的第三方，是自己的開發者。你要確認的是他們沒有做不該做的事。

[14:38](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=878s) Snyk 內部的例子：一個開發者寫了 skill，把 production credentials 的存取交給 agent。這不是 paved path。那些憑證不是 just-in-time、好好注入的，而是過度寬鬆。安全團隊看到開發者在用這種 skill，立刻嚇到。他要的是標準：開發者知道這些 skill 把 agent 暴露給什麼，而且那些暴露是說得通的。

數月前宣布的整合，是把 Snyk 對 context 的掃描放進 Tessl registry。把 skill 加進去會自動掃。開發者看得到 prompt injection 這類問題，就算作者不是故意的。例如指向第三方網站或做 web search，直接或間接的 prompt injection 都可能從那裡進來。另一個問題是：當初沒問題的 skill 出了新版本，或根本沒有版本，你拉到更新、或拉錯版本，卻沒意識到惡意內容。掃描要和版本綁在一起。Tessl 加了 skill versioning，以及讓那些 skill 被掃。

## 自己寫的 skill，和即將 GA 的 Evo

[17:45](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=1065s) Secure-by-default 的 agent stack 還是新興領域，他不認為有人有答案。對 skill，第三方當然要在用之前掃。自己寫的也該跑過掃描器，讓它告訴你這份 skill 可能在做什麼。他寫過一個從 Slack 下載資料的 skill，push 到 GitHub 之前用 pre-commit hook 跑自己的掃描器。掃描器說下載的 Slack 資料可能有 prompt injection。他想這是自己的 Slack，也許不是大的攻擊面，還是叫 agent 在 skill 裡加上基本防護，再依這個回饋把 skill 改好。

品質是另一件事，他說 Tessl 在做。自己寫 skill 時最大的問題是，一開始非常個人。跟 agent 把流程做一次，session 結束時說：幫我寫成 skill，以後重複。存下來很容易。要分享就難了。你要它通用，在公司裡能共用，而不是只適合你的流程。他需要幫忙把 skill 收拾成可以給同儕的形狀。這些流程還在成形。

Simon 說「我的 skill 好不好」就是 evals。個人用和更廣的使用，evals 會不一樣。分享之前要把安全問題釘死。再高一層是治理：分享給團隊時，怎麼保護整個團隊不去下載比較不安全的 context。安裝 context 時可以用 Snyk 分數當門檻，告訴開發者該不該裝。

[21:41](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=1301s) Chris 說這邊還要做更多。一開始假設的是第三方，掃描器擔心的是有人在網上發佈惡意內容，保護人不要下載 malware 或 prompt injection。若是給開發者自己 skill 的回饋，或給團隊「你正在下載的這份會把 agent 暴露給什麼」，要查的東西略有不同。例如不要加上 lethal trifecta 那種暴露，或 agent 可能被 prompt injection、再把資料外送。這是他們很快要聚焦的。合作的下一截，是讓寫 skill 的人知道自己從安全角度看做得對不對。他們自己那次事件就是例子：把 secret 寫死當然糟，處理 secret 的方式錯、叫 agent 用明文傳遞 secret，也糟。Skill 若能對 production 做破壞性動作，也是。理解你正在寫的 skill 可能的後果，是下一個焦點。

[23:35](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=1415s) Snyk 幾天內要 GA 一個產品，他說手指交叉。下一個焦點在 AI agent security incubation lab，傘是 Evo。Evo 是下一代 Snyk 產品的傘，這一款叫 coding agent security，用來保護 coding agent。企業在推開這些 agent。有時安全團隊擋住：平台團隊來說，CSO 說沒有安全保證就不能推。有時已經推了，週末才打電話來補，agent 出去了，安全不在迴圈裡。他們要讓安全團隊能大規模保護 coding agent，又不傷生產力。你可以擋掉所有網路流量然後收工，但 agent 就沒用了。

三件要釋出的。第一，agent 的供應鏈：治理、看見開發者在用哪些 skills 和 MCP servers，橫跨端點和機器，做風險評估，再訂政策，例如 MCP server 不該用 personal access token。第二，agent 的輸出：本來的 code security，現在放進 agent 迴圈。Agent 在生 code 或下載開源函式庫時，確認它是安全的，生出來的 code 是安全的，並且修。第三，open preview，希望 Q3 GA：給 agent 行為加上 guardrail。他說這是很多安全團隊目前最急的。怎麼確定 agent 沒有洩漏 credentials、沒有行為失常、沒有 prompt injection。

## 私人 workspace、三種 agent、不要 YOLO

[26:25](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=1585s) YouTube 有人問，私人 workspace 看不到主頁那種分數、tile、Snyk 分數。Simon 說 Tessl registry 上，公開和私人 plugin 都會有品質分、影響分和 Snyk 分。本地 plugin 沒有 Snyk 分，得發佈到 registry。Workspace 是你上傳 plugin 和 skill 的空間，可標公開或私人。公開的網路上誰都能看。私人的要有能進那個 workspace 的 Tessl 帳號。分數仍該看得到。

Plugin 怎麼進 Codex 這類 agent。若你接受它的安全態勢和 Snyk 掃描，plugin 會裝進專案的 Tessl 資料夾。旁邊還有一堆點開頭的資料夾，Claude、Codex、Gemini 等等，用間接連結指回 Tessl 資料夾。從那個專案跑的任何 agent，都會自動拿得到那些 skill。

不同 agent 的安全差異大嗎。Chris 說其實不大。差別是有的支援 hooks，有的不支援。他們聚焦、採用也最廣的三個是 Codex、Claude Code 和 Cursor，三者很像。重要的是工具要跨過全部，不必為每個 agent 各裝一次。專案層級的 skill 是好主意。

[29:19](https://www.youtube.com/watch?v=Pb6vNbnFYHU&t=1759s) 最後一則建議：不要 YOLO。很多開發者在玩這項技術，想搞懂它怎麼運作。很容易就自動核准所有動作、隨便下載 skill。不要。想清楚你實際在做什麼。攻擊者對這個領域很有興趣。對 coding agent 的攻擊和各種變體不是理論，野外正在發生。用 sandbox，不要自動核准，檢查你的 skill，用 Tessl 這種受信任的 registry。工具還在出現，Tessl、Snyk 和其他工具會幫上，但常常還沒到位。今天要把 agent 完全放進 sandbox 並不容易。不要每件事都全開。不要把思考外包給 agent。自己想你在做什麼，同時盡量用工具。

結尾 Simon 請人到 Tessl 的 registry 看已經跑著 Snyk 的 skill，以及每個 skill 為什麼可能出問題的說明，也到 Snyk 看掃描器，並留意幾天內的 GA。製作人是 Tom Dowler。
