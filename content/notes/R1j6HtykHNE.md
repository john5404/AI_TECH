# The Hidden 50% Drop in AI Agents Following Your Rules

Guy Eisenkot，Baz 的共同創辦人兼 CEO。感謝 Tessl，也感謝 Sam 的邀請。這場他自己稱為 Steer，講 coding agent 的 steering，以及多個 agent 怎麼把 agile 拆掉。片長約 29 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=R1j6HtykHNE)

## 一句話

AGENTS.md、CLAUDE.md、skills 這些靜態指示，不是穩定的方向盤。Baz 在客戶的 code review 資料裡看到，一次 model release 之後，agent 去叫這些檔案的次數掉了將近 50%，而這件事幾乎沒人注意到。有 guideline 時，review 意見比較容易被接受，但那是他們的 harness 強迫 model 去用你的文字，Claude Code 這種現成 harness 不會替你做。檔案若沒人養，下游的 agent 仍會把它當成唯一的真相。

## 沒人知道誰在掌舵

[0:56](https://www.youtube.com/watch?v=R1j6HtykHNE&t=56s) Guy 說自己在這個問題上打了快七年。上一間公司 2019 年在數位轉型中間開始：大家從 on premises 搬到 cloud 上的 web application，採用 Terraform、CloudFormation、Kubernetes 這些新的寫法，也製造大量設定錯誤和漏洞，把客戶的私人資料露出來。他們做出掃描這類 infrastructure as code 的事實標準，到今天每月 600 萬次下載。公司叫 Bridgecrew，跑了大約一年半，被 Palo Alto Networks 買下。他和團隊在那裡做的 application security 生意還在，保護超過 50% 的 Fortune 50。大約兩年前他離開，創 Baz，因為問題在變糟：AI coding 帶進幾百萬、幾兆行沒有人真的在看的 code。

[3:04](https://www.youtube.com/watch?v=R1j6HtykHNE&t=184s) 他用 Spider-Man 的圖說，工程師今天並不確定是什麼把 code 推向同一個方向。沒標名字，可以想成 Claude、OpenAI、Cursor，也可以想成 AGENTS.md、CLAUDE.md 和一份 skills file。給 coding agent 指示的路有很多條，但不知道誰在掌舵。過去一年，agent 吃進這些 steering file、這些設定檔的方式改過好幾次。大約 14 到 16 個月前開始用 AGENTS.md：Anthropic 發現同樣的 context 被反覆塞進 coding agent，於是讓人把指示寫死在 repository 上。第一版是載進 context window。到了他所說的 Opus 3.7 家族，他們觀察到這些檔開始被 compact，因為 codebase 裡這類檔變多，steering 開始各走各的。Skills 加進來之後，是插在 context window 的另一段。今天沒有人真的知道全貌。對某一個 steering agent 的遵守變好了，剩下的問題還很多。這場主要是資料，而且他說本來就要讓人害怕。

## 瓶頸換地方，一致的結果靠 setup

[6:09](https://www.youtube.com/watch?v=R1j6HtykHNE&t=369s) 社群上那些小有病毒的推文，他覺得不是你的現實。共識是瓶頸在哪：開發者一拿到 coding model 就停不下來，免費的 model 可以無止盡地組 code。三、四年前開始這段旅程時，ritual 是用來把人對齊、決定下一步做什麼。很多 ritual 被丟掉。以前的瓶頸是某個問題上沒有足夠的工程師，現在常被叫成 PR bottleneck：能做出、能送出很多新路徑，但現有系統一個循環要幾十分鐘到幾小時，而且還是要靠同儕確認寫的東西站不站得住。字幕裡那批系統寫成 60 systems。

[7:04](https://www.youtube.com/watch?v=R1j6HtykHNE&t=424s) 再下一層是同一個 repo 裡不止一個 coding session。就算這些 agent 用同一個作業系統、同一個 harness，或從同一個 registry 拿 skills，它們的 coding trajectory 也不由那些檔決定。決定的是 shared memory，以及每一次 session 從 codebase 抓回來的 context。那會大幅改變 Claude Code 給你的 plan，以及做出來的東西。若不能有一致的信心，相信結果會遵守 steering file 裡重要的事，那我們在做什麼。

[8:26](https://www.youtube.com/watch?v=R1j6HtykHNE&t=506s) 他引用的研究說，協調確實會複利、創造價值。但一致的結果不是來自一條 instruction、一個 skill，也不是 shared memory。排第一的因素是 setup：若能做出和某次 coding task 起點一模一樣的 setup，那最能預測後面會得到一致結果。

## 艦隊怎麼知道哪份指示有用

[9:04](https://www.youtube.com/watch?v=R1j6HtykHNE&t=544s) Baz 跑一隊 agent，在很特定的子領域做 code review。他要聽眾先知道這些資料的重量。他們把 agent 做成帶超能力的領域專家，綁在 SDLC 裡的特定問題上。例子是 security reviewer，後面有一座 prompt factory，持續寫出跟你的 codebase、它容易有的漏洞有關的 prompt，並問：攻擊者若把這段 code 當成機會，會做什麼。它有自己的 tools：compiler、interpreter、static analysis、dynamic analysis，也能進 dependency registry 把依賴拆開。他們想被記住的是，能看出這些東西能不能被利用。

建議若從 GitHub 或 GitLab 的留言送出，他們留下開發者的反應。接受留言，或照建議改了，那個 prompt 配上那個 context 就算成功。反方向也算：有人罵 agent，代表這次做得不好。這些 use case 對客戶做了大約兩年，現在有一份匿名資料庫，看人怎麼回應不同 agent 的 feedback，藉此判斷他們的 steering 是在貢獻合規、正確、沒有 bug 的 code，還是壞的設定和 instruction file。

[11:50](https://www.youtube.com/watch?v=R1j6HtykHNE&t=710s) 第一個對照不是他們自己的庫，是 Tessl 的 skills registry。他先為在場上點到競爭者道歉。他在意的是人把東西下載進安裝裡的趨勢，而且這很可能偏向正在做 harness 的人：你會像從 npm 匯套件一樣，反覆更新 skills。前十名裡很多是 code review skills。就算對自己的 codebase 很有信心，人還是想要指引，會去向像 Matt Packer 這樣的人要做好 code review 的範本指示。這段時間大部分下載是平的，他覺得這開始在說 skills 的採用。四個月前大家在找的 skills，字幕沒有把用途聽完整；再早幾個月，大家要的是別讓 design system 漂掉。現在則收成前端、後端等領域的一些 best practices。這些 skills 讓人感覺，在每個時間點 coding agent 擅長什麼。

## 一次 model release，叫用次數掉了將近一半

[13:46](https://www.youtube.com/watch?v=R1j6HtykHNE&t=826s) 他們追客戶 codebase 裡各種靜態指示檔被使用的情形。最常見的是 Claude 那份，因為 Anthropic 仍強迫你用它。緊接著是 skills。後面還有 Cursor rules、CodeRabbit 和其他。圖上有一處他稱為原力裡的擾動。現場有人猜是 model，他說對。日期有點歪，因為 release 稍早一點。他們相信這次 release 讓這些靜態檔被叫到的次數嚴重下降。客戶大多是企業、codebase 很雜，很難抽出單一結論，但這件事對你是看不見的。問題是：為什麼 agent 使用這些 instruction file 的次數掉了將近 50%？

[15:07](https://www.youtube.com/watch?v=R1j6HtykHNE&t=907s) 下一張圖也不該讓人安心。他們看得出建議有沒有被人或 coding agent 接住。過去這個夏天有多次有意義的 model release，兩條線是有 guideline 和沒有 guideline 時，留言被處理的次數。Agent 若遵守 instruction file 裡的 coding guideline，開發者的接受度較強，是強相關：人寫了指示，他們的 agent 撿起來，那些發現就比較被遵守、被接受。用客戶的 instructions 和 skills 去找問題和 bug 時，baseline model 會跟著走，接受率較好。Guideline 也和較高的 review 接受度一起出現。留言說這裡會有 bug、會有漏洞；若把你自己的 guideline 放進用語或語氣，開發者比較會用。這在現成的 harness 上不會發生。用 Claude Code，你得不到這個。這是他們的 harness，因為他們強迫 model 用你的 guideline。夏初的資料就是：放進 instruction file 裡已有的語言，被撿起來的可能性較高。他們認為是相關，也有一些例子說明不是因果。

## 沒人養的檔，會變成舊的真相

[17:13](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1033s) 若你在寫自己的 harness、AGENTS.md、自己的 skills registry，要認真想：你有沒有辦法持續維護檔裡的知識。不管它最近有沒有更新，下游的 coding agent 都會撿起那個細微差別，把它當成你仍在用的單一真相。Baz 在這點上和 GitHub Copilot、CodeRabbit、Cursor 沒有不同。反過來說，大團隊、大型 mono repo 裡的 skills、guideline、instruction file，若過去 6、12 或 18 週沒更新，你也沒有在自己的 harness 或一份 global ruleset 這種中央控制面上特別點名它們，你會得到一個自己不斷修正、卻持續遵守那套舊 agent stack 的 agent。就算那些指示已經不相關，就算下游已經做了別的決定。

[18:32](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1112s) 有些指示和高接受度的相關更強。競爭者 CodeRabbit 用一份結構化的 JSON rule set。跨 model、跨組織，這套規則特別能逼 agent 做事。就算一年前只是試用 14 天，檔還留在 codebase 裡，它也會壓過 CLAUDE.md、你最新的 skills，以及你改去用 Cursor 或 AGENTS.md 之後的指示。他叫這個 hydra 問題。

## Spec、驗證、合併，取代那些 ritual

[19:32](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1172s) Agile 那邊，事情若在看板上，就有人拿去做成。Daily、每週、retrospective 用來把好壞做法收進知識和工程習慣。他說在他們看過的也許幾千個團隊裡，這些 ritual 在消退，意思是它們不再真的決定工程結果。取代的大致三件事。第一是 spec。Spec file 長得很快，寫成 markdown，或連到一張 Linear issue。Plan file 也是，包括用 Claude Code 做規劃。這大概是讓 coding agent 走在一條特定垂直上的首要辦法。一起做規劃還沒被 Claude Code 完全解決，他舉了一個該去看的開源例子：Plane。一份人寫得好的 spec，對結果的影響大到讓他吃驚，底下那團設定有多亂都一樣。第二是 verification。他承認這是本業，做了七年。若把 GitHub 看成做決定的 choke point，把工具放進 GitHub Action 或現成工具裡拿到驗證，就能壓住 steering 打滑帶來的壞行為。第三是還很新的 merge tactics。以前是把 diff squash and merge 進 main。他建議看更有創意的合併。Merge queue 已經是 GitHub 內建，不是小眾產品，讓你比以前更能 cherry pick；若 spec 寫得好，也更能判斷最後 code 該包含什麼。

[22:14](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1334s) 他把「coding agent 的作業系統有最好的衛生」看成幾乎無望，因為環境走得太快。建議客戶用這三個鏡頭重新想 collaboration 和 agile。不管你在做 software factory，或只是圍繞 coding agent 做基本的現代化。想看數字的話，baz.ai 有 Rework Calculator：填團隊人數和平均 PR 速率，估你有多少工作和錢花在反覆重做上，那些重做來自多套作業系統和不一致的 coding agent。完整報告叫 The State of Rework。

[24:00](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1440s) 有人說自己的 eval 也看到 model 一換就出現同樣的退步，並問：檔被砍、model 變好之後，code review 的指引是在變少，還是指引本身換成比較不那麼規定、或更具體。這正是讓他和一些客戶不安的問題。有軼事證據說事情就是這樣。較新的 model 較會遵守 baseline instruction。問題是我們從不把行程 pin 在同一個 model 上。他所說的 Opus 5 出來之後，一次 coding 旅程裡很少從頭到尾用同一個 model，常常先用大一點的 model 做 plan，再換另一個。變數太多：model 在底下換，作業系統和範式也在換。Lab 對 session 裡 context 怎麼被吃進去、怎麼被注入，不夠透明。就算你押注自己的 skills registry，OpenAI 若做出更會 compact、更會把 skills 注進 session 的 model，你仍不知道它在檔案、資料夾、repo 哪一層怎麼做。遵守程度目前也看不清楚。

[26:59](https://www.youtube.com/watch?v=R1j6HtykHNE&t=1619s) 另一問是 long-horizon、會把工作拆開的 agent，以及像用 DeepSeek 自建的 setup，該怎麼讀這些資料。他們有一個比較穩的例子：過去十個月裡很大一部分時間在做整個 codebase 的掃過，資料庫很厚，用來看 model 和 instruction file 在長程裡守不守得住。比短任務一致得多。原因是回合和迭代多，比較有機會在較長的時間裡踩到對的 instruction file。但使用者那邊在急跌：人不想花很多時間寫 code，要更快的回應，現在不想用貴的 long-horizon model。取捨是，較長的旁支任務遵守可能較好，下游的開發者卻要快的回應、快的驗證、快的迴圈。問題在那裡最嚴重。
