# Topo Pal - From Concept to Prototype | DevCon Fall 2025

Topo Pal 是 Fidelity Investments 的 vice president，負責 enterprise architecture。這是一場 DevCon Fall 2025 的 case study。原片約 26 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=9UzravDoyP8)

## 一句話

Fidelity 已經有一份內部應用的 dependency graph，缺的是大家願意自己查的 dashboard。Topo 幾乎不寫 Neo4j 的 Cypher，也不寫 TypeScript。他先把需求和企業的非功能條件寫下來，再跟 GitHub Copilot 連續做了五天，得到一套 React 前端、Node TypeScript API，以及超過八成的 test coverage。Copilot 估一個一般的 agile team 要 12 到 18 個月。這套東西後來在 production 跑了兩個月。他願意把這種內部工具交給 coding agent，還不願意讓它寫碰錢的軟體。

## 這是誰的經驗，以及 SBOM 要看的是整包軟體

[0:09](https://www.youtube.com/watch?v=9UzravDoyP8&t=9s) 開場人介紹他是 enterprise architecture 的 vice president。Topo 先講免責：這是 Fidelity 經驗的 case study，他不替任何廠商或技術背書。台上說的是他的意見和經歷，不一定代表 Fidelity Investments 或其關係企業。

[1:47](https://www.youtube.com/watch?v=9UzravDoyP8&t=107s) Fidelity 總部在 Boston，是大型金融機構。大約 77,000 名 associates，美國各地加上 11 個國家的 14 個據點。Assets under administration 是 $16.7 trillion，discretionary assets 是 $6.4 trillion。客戶每天平均 430 萬筆交易。他強調受監管的大企業，做事方式和新創、中型公司不同。

[3:07](https://www.youtube.com/watch?v=9UzravDoyP8&t=187s) 他在 architecture and engineering group 管兩件事：software delivery 這一域的 architecture、strategy、roadmap 和平台；以及 open source program office。之前在 Capital One 十年，Home Depot 待過一陣子，也在 Circuit City 待過比較久。中間還有一段雇主名字字幕聽不清，只聽得出那家公司被收購、現在在 Microsoft 底下。更早他在學界，博士是 semiconductor physics。幾年前跟別人合寫 *Investments Unlimited*，講大型企業和金融機構裡用 DevOps 做 automated governance，由 IT Revolution 出版。

[4:14](https://www.youtube.com/watch?v=9UzravDoyP8&t=254s) 他們的假設是：GenAI coding assistant 可以加快開發、讓 code review 更順、提高 test coverage、縮短 delivery cycle。他說前面 Microsoft 的場次剛講過類似的話。他自己大部分職涯是親手寫 code，Java 最熟，也寫 Python。當過 team lead 和 support lead，登過 production，也搞壞過 production。他開玩笑說每次搞壞都被升官。現在寫得比想寫的少，因為工作變成帶人或直接告訴人怎麼做才對。

[5:43](https://www.youtube.com/watch?v=9UzravDoyP8&t=343s) 他在乎的 open source governance 是 software bill of materials。Josh Corman 大約在 2015 年把他帶進 SBOM。2021 年 12 月 Log4Shell 之後，大家都覺得每家公司該有一份。他認為 SBOM 不只是安全，是軟體的健康，像食品包裝背面的成分表。目標很單純：你在做軟體，就要知道裡面的 components。

## 圖有了，報表把團隊拖住

[7:54](https://www.youtube.com/watch?v=9UzravDoyP8&t=474s) 過去兩年半，一個後端團隊做出內部應用的完整 dependency graph 和 metadata。資料從 repository、artifact、runtime 收進來，放進 graph。問一個 library，幾秒內要能說出它在哪個 repository、嵌進哪個 artifact、包進哪個 Docker image、跑在哪裡。下一次遇到 Log4Shell 這種事，至少要在幾秒內知道衝擊。團隊很會 Python，工作本質是從多個來源收資料的 ETL。

[9:02](https://www.youtube.com/watch?v=9UzravDoyP8&t=542s) 企業裡的人開始拿這份資料做別的用途。團隊被報表拖住：這個有授權的 library 誰在用、多少應用在用、這個十年的軟體誰還在用、要找誰才能拿掉。他們想做一個使用者可以自己查的 dashboard。

[9:41](https://www.youtube.com/watch?v=9UzravDoyP8&t=581s) 架構是 repository 到 artifact、到 container image、到 runtime，全部放進 graph，用不同 relationship 連起來。他們先用 Neo4j 附的開源 NeoDash。它免費、能直接連 graph、幾乎可以拖放。輸入企業裡的 application ID，會看到 metadata、用了多少 libraries、多少 repositories、漏洞和風險。輸入 library 名稱，會列出哪些 repository 在用。截圖有打碼。問題是體驗不夠好，沒辦法在全企業推。沒人愛用，就會回頭找團隊要報表。

[11:52](https://www.youtube.com/watch?v=9UzravDoyP8&t=712s) 他會 Java 和很多 RDBMS，不會 Neo4j，也不會 Cypher。他想從架構師的角度自己弄懂。心裡要補的是一組 API，和一個真的能用的 dashboard。API 給 dashboard 用，其中一部分也可以開放給更多人呼叫。

## 先把需求寫在紙上，再連續做五天

[12:42](https://www.youtube.com/watch?v=9UzravDoyP8&t=762s) 第一個實驗是問 Copilot 能不能拿出 Neo4j 的 schema。它給了一條指令，他貼到 Neo4j browser，schema 出來了。再把 schema 和用例餵回去，問某個 library 用在多少 repositories。它給的 Cypher 貼回去能跑。他接著出更複雜的用例，查詢也對。他守兩條：不在 production 上跑，他不想再搞壞資料庫；查詢裡不能有 delete、drop、detach。

[14:13](https://www.youtube.com/watch?v=9UzravDoyP8&t=853s) 他再問能不能做一個單頁、把這些數據點秀出來。Copilot 大約一小時做完，他很意外。成功之後他停下來，把筆電合上，把 API 和 dashboard 要的東西全部寫在紙上，再打進 Copilot，並加上企業才有的非功能需求。他要的不是一個不能放進企業基礎設施的東西，而是能送進受監管金融機構 production 的東西。

[15:13](https://www.youtube.com/watch?v=9UzravDoyP8&t=913s) 他把這些餵進去，叫 Copilot 用它對 SBOM 的知識寫一份詳細的實作計畫和 task list。大約 45 分鐘生出來，他花大約一天半審。接著問：一個普通的 agile team，五到六個開發者加一個 scrum master，要做多久。Copilot 想了幾分鐘，估 12 到 18 個月。他說這不會發生，沒有人會為了一個 dashboard 和一組 API 排那麼久。

[16:07](https://www.youtube.com/watch?v=9UzravDoyP8&t=967s) 接下來五天，含晚上，他對著 Copilot 把 task list 走完。中間換了很多 model，失敗、再從失敗裡恢復，因為他同時在學這個流程。五天結束時有：React 前端、Node TypeScript 後端 API、企業預設要有的 SSO、feature toggles、企業標準的 logging、end-to-end request tracing 和 correlation、performance monitoring hooks、unit 和 end-to-end tests、超過 80% code coverage、lint 和 code quality 問題是零、一份 Dockerfile、一條 CI pipeline、部分的 deployment pipeline，以及全部用 markdown 寫的 architecture diagram。還有一些 functional bugs。他自己一行 code 都沒寫。

## 五天的體積，以及他敢把什麼送上 production

[17:23](https://www.youtube.com/watch?v=9UzravDoyP8&t=1043s) 新 dashboard 的截圖也有打碼。高一層看的是企業觀點：主要的 technology stacks、vulnerability chains、license risk 的分布，不同授權、風險、library 的分布，圖表和字型都是現代 dashboard 的樣子。進入某個應用，會列出 dependencies、漏洞、其他 dependencies、transitive dependencies、授權、建議動作。他強調這是呈現和 API，資料本來就在。

[18:23](https://www.youtube.com/watch?v=9UzravDoyP8&t=1103s) Log4j 這種情況可以搜 library。他打 Log4j，比對結果出來；搜尋結果裡有 Commons Collections，選一個看 usage，會列出用到它的 repositories 和 artifacts。Graph 是 Copilot 幫他即時畫的。給一個 application，藍色是 repositories，紅色六角形是 application。例子裡那個應用有六個 repository，每個下面是 direct 和 indirect dependencies，可以拖開，停在上面看直接的 dependencies，也可以看 transitive dependencies。

[19:35](https://www.youtube.com/watch?v=9UzravDoyP8&t=1175s) 他叫 Copilot 數規模：Node.js 後端大約 36,000 到 37,000 行，React TypeScript 大約 30,000 行，270 個原始碼檔。演講前一天再數一次，API server 的 codebase 長了 5%，前端長了 45%。這是五天 vibe coding 之後的 baseline。他再換一個 model 看這個 repository 好不好。貼上投影片的評語說，這需要 senior 以上、全端、做過企業軟體、懂 security domain 的人；這種專案能讓你去 FAANG 面試，證明你能設計並做出 production grade 的企業軟體。他說自己在台上炫耀，卻一行都沒寫。

[21:16](https://www.youtube.com/watch?v=9UzravDoyP8&t=1276s) 他開始時沒有信心可以不寫 code 就送上 production。五天之後他會 Cypher，因為 Copilot 教他；他讀得懂 TypeScript，知道結構，也能寫。做為開發者的教訓是：不要百分之百信任 AI coding agent，它們會騙你。要用 scanners 和 linters。

[22:04](https://www.youtube.com/watch?v=9UzravDoyP8&t=1324s) 他以架構負責人的身份擔心的是速度。GenAI coding agent 的速度會在後面的 software delivery 造成 back pressure。Agile 曾經把壓力推到 dev 和 ops，所以才有 DevOps。這一次的量級大很多：從一個 sprint 做完一個功能，變成一天做完十個。流程要怎麼調才接得住，他還不知道，所以才來這種會。問題不再是能不能用，而是怎麼用。他也說 vibe coding 很上癮，問他家人就知道。

[23:39](https://www.youtube.com/watch?v=9UzravDoyP8&t=1419s) 有人問內部系統登記、真正跑上 production 花了多久。他說這套已經在 production 兩個月，由一組開發者維護。他們一開始和他一樣不懂 TypeScript API 和 UI，現在懂了，也在維護。過去一個月 code 成長大約 40%，全是 Copilot 做的。另一個問題是：你敢把最後要上 production 的解法交給 AI 嗎？他反問自己。用 GenAI coding agent 寫碰錢的軟體？還沒有。把大企業裡這種沒有風險的內部工具，像這份 BOM dashboard，交出去？他說百分之百可以。

[24:59](https://www.youtube.com/watch?v=9UzravDoyP8&t=1499s) 最後有人問，SBOM 以後會不會標一種 vibe 等級，表示開發者到底懂不懂自己寫的 component。他說他們在看。他管 open source program office，擔心的不只是自己在 vibe coding，而是整個 open source 世界。有意和無意的安全漏洞誰在追。別人產生的速度，已經快過他能追蹤自己正在消耗什麼。會場上有些工具可能有幫助，其中一些是不錯的開源。
