# What AI Engineering Looks Like at Meta, Coinbase, ServiceTitan and ThoughtWorks

Simon Maple 在紐約 QCon AI 現場，分別訪問四位講者：Coinbase 的 Sepehr Khosravi、Meta 的 Ian Thomas、ServiceTitan 的 David Stein、ThoughtWorks 的 Wesley Reisz。原片約 73 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=OnM7sWLnAfw)

## 一句話

四家公司把 AI 用進工程，靠的都不是一句「全部遷移」。Coinbase 把日常放在 Cursor，把難的任務交給 Claude Code，並用 sub-agent 把 context 留在外面。Meta 用由下往上的社群，把每週使用拉過八成，再用無人看管的 agent 補測試。ServiceTitan 把 247 個舊 metrics 拆成可驗證的小任務，讓 agent 對著舊系統的輸出自我修正。ThoughtWorks 用 RIPER-5 把研究、發想、計畫和寫 code 分開，免得 model 覺得自己懂了就直接寫。

## Coinbase：八成日常在 Cursor，難的才進終端機

[1:38](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=98s) Sepehr 是 Coinbase 的 machine learning platform engineer，進這行大約兩年，之前賣過泰迪熊。他在 UC Berkeley 兼職教人用這些 AI 工具提高生產力或開公司，也辦一個免費的孩子學院 AI Scouts，從 11 歲到 70 歲，有爺爺來學。他要人記名字時，說可以想成果實 pear，字幕聽成 Supa。

[3:04](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=184s) 他自己最有生產力的環境是 Cursor IDE，終端機裡再跑 Claude Code。八成到九成的事在 Cursor。深入的任務才先問 Claude Code。公司在追開發者用多少 AI，而且是往採用推，不是因為貴而叫人少用。Claude Code 吃的 token 比 Cursor 多，所以帳面上看起來他用不算多，雖然他覺得自己用得比大多數人多。他因此去試 Claude Code。深入的任務上，Cursor 做不完的，Claude Code 做完了。

[4:35](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=275s) 他在會上列了大約 14 條 Cursor 技巧。給還不喜歡 AI 的人，他從 tab 開始。打開 Cursor，看它建議什麼。很多時候按 tab 就寫出 10 到 20 行，手不用抬。Cursor 有自己為 tab 完成做的 model，所以他比其他 IDE 更推薦這個。再來是他覺得被低估的 multi-agent mode。新 model 隔天就有一個，基準不夠當唯一標準：Google Gemini 最近排名很高，多數人仍說 Claude 更好。他的做法是一個 prompt 讓兩個以上的 AI 回答。ChatGPT 5.2 出來時，他讓它影子跟著他的日常主力 Opus 4.5，看幾次結果再決定要不要換。選的時候看它有沒有做完、code 喜不喜歡、回應喜不喜歡。他喜歡 Claude，因為回應常常比較有教育性，比較能懂它做了什麼。

[6:59](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=419s) Cursor 自己的 model Composer 特別會快。別的 IDE 沒有這個。常見的問題是打一句就要等兩到三分鐘，任務其實不複雜。這種他用 Composer。一個頁面 Composer 24 秒生出來，Claude 做相對類似的東西是 2 分 30 秒，結果差不多。Simon 說，tab 完成要的是一瞬間；agent 可以等 30 秒或一分鐘。但 30 秒和兩分半會打斷思路。Sepehr 說這問題大到 YC 投資了一家他稱為 brain rot IDE 的公司：等的時候跳出 TikTok 和遊戲。就像以前 code 在編譯、你在玩遊戲，現在是 agent 在做事。

[8:33](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=513s) 下一條是 Cursor rules。很多人只用 agent，沒有做能把工具用好的地基。地基是 rules，另一塊是 MCP。Rules 有四種：每則 prompt 都套、由 Cursor 依 context 決定、依特定檔案、或 Cursor 自己永遠不看、只有你手動說要套才套。Simon 說這和 Tessl 把實體分開載入很像。為什麼 context 重要：把 AI 當成一個初階工程師。不給完整需求，他就做不出來。Code 裡常有缺口，AI 讀完 code 仍不懂。給它文件的 MCP，它讀了就能補洞。Simon 問怎麼給够、又不給到拖累表現。Sepehr 同意：太多就不要每次都塞，改成手動，或讓它聰明地決定何時套用。還有一條是 context 用到大約九成時，你再問，它會給短答案，因為它想在用完之前先吐一點東西。你可以告訴它：context 快結束沒關係，你可以 compact，給我最好的答案。Simon 補 Claude 的 `/compact`：後面可以加文字，說下一步要做什麼。它會依這個丟掉下一步用不到的 context。

## 深入的任務，把多餘的 context 留在 sub-agent

[11:44](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=704s) Sepehr 說 Claude Code 和 Cursor 用法像，場合不同。Cursor 有視覺、比較快、token 較少、可以換 model。難的、要深入的任務，Claude Code 想得更多、token 更多，通常給出工程上更好的答案。工作上有一個專案兩邊都丟過。Claude Code 搜網、找開源 repo、分析，給出像樣的解，省下好幾個小時。Cursor 是挑一個做法、實作、結束。Prompt 裡的用詞會改變它想多深。打 think deeply 會加量。打 ultra think，是他知道的最深那一層。

[13:31](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=811s) Sub-agent 是他覺得 Claude Code 勝過 Cursor 的地方。你可以設不同 agent，各給一套 MCP 工具，而且各有自己的 context window。複雜任務比較適合。例如一個 PagerDuty 調查用的 sub-agent：page 進來、叫 Claude Code，它看 Slack、找 alert、進 Datadog、研究、帶回一個解。特定流程需要特定工具時，這很有用。Simon 說，它為了拿到一小塊資訊而塞進 context 的那些額外工作，留在 sub-agent；只把那一小塊交回主 agent，其餘 context 就丟了。他們在 Tessl 也這樣做研究。Sepehr 說 context 管理幾乎就是一切。目前 sub-agent 不互相說話，都只跟主 agent 說。連 Claude Code 都還沒有他們覺得未來可以有的那種程度。Simon 提到 Claude Flow 的 Hivemind：一堆 agent、共享記憶、可以互相寫、互相學。另一個工具 Claudish 長得像 Claude Code 的終端機，但可以叫 Gemini、ChatGPT 或其他 model。適合喜歡那個介面、公司卻指定別的 model 的人。Sepehr 不會一般推薦。若不在乎，目前最好還是 Claude Code 配 Claude。也許以後會變。

[16:22](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=982s) 用這些工具時要評：它是在幫忙，還是在拖慢團隊。很多團隊一開始會先慢一點，那是學習曲線，之後才爬上去。沒有完美指標。他追很多東西，例如合併的 PR、從開 PR 到合併要多久。公司和你要對管理層講一個質性的故事，有這些數字才能在對的時候挑出能當證據的那些。Simon 說以前的採用比較像上面推你一定要用。現在有人在問生產力上的價值。他前一天跟要做 QCon 閉幕演講的人聊過，字幕把名字聽成 Tracy Vannin。對方在分 value 和 velocity。Velocity 只是一個可以被做高的指標。價值是這個 agent 給了生意什麼。Sepehr 引用一份他說方法很複雜、涵蓋超過 10 萬名員工的研究：AI 幫人多生了 30% 到 40% 的 code，但其中 15% 到 25% 是後來要重做的垃圾。他們估真正的生產力增益大約 15% 到 20%。他覺得用對的話會更高。輸出和結果不是同一件事。15% 到 20% 仍令人印象深刻，而且他預期會再長。

## Meta：由下往上，proof 才贏得爭論

[18:47](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=1127s) Ian Thomas 是 Meta 的軟體工程師，場次叫 AI Native Engineering。這是他的團隊和更廣的組織、Reality Labs 這一塊的案例：由下往上的採用計畫，給想實驗、想把 AI 放進工作流程的人。過去幾個月他們拿到各種工具，看能不能加快、做出更多產品上的結果。他只能說自己的組織。過去六個月變化很大。一開始少數人很積極，在工作之外就覺得這些工具有價值，想用到 Meta 內部。Meta 的工程很內部：自己做工具和平台，有些做法不能把架上的東西直接套到 codebase。另外有一批很資深的工程師比較懷疑。後來公司整體也在推：這件事必須認真看，工具你們都有，去用。他上次查，每週活躍超過 80%。量法悄悄改過：現在是七天裡有四天，用了任何 AI 輔助工具。內部主力是 Meta Mate 和 Dev Mate，一個比較像聊天，一個做寫 code 和 agent 流程。也有 Gemini、Codex、Claude Code 等第三方。團隊在找適合自己的。內部工具也能用到 Claude Code 那些 model，所以可以比較「比較懂內部」和「外部」的版本。他們用的版本通常為 Meta 裁過，比一般公開的更受限，但仍然很強。

[22:01](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=1321s) 社群重要，是因為 Meta 的文化是工程師被賦權。你若能讓工程師從地上支持一件事，可以走很遠。有一句流行的話：code wins argument。這裡他改成 proof wins argument。人圍著這些想法，把使用拉到別人看得到價值的程度：我這樣用、這是有用的。其他人就會想，也許我的情況也行。社群帶來真實感，人覺得自己是其中一份。由上往下的命令，工程師常常懷疑、有點犬儒：既然必須做，那就做吧。由下往上是：我們可以讓它運作，而且會是好事。社群在 Workplace 上，那是 Facebook 上面一層給工作用的，直到不久前都不是對外產品。可以發文、留言，像工作用的社交。人來問問題、說我在試這個、你看過這些工具嗎，也讓大家知道正在發生什麼。沒有強迫加入，沒有自動註冊。上週到 400 人。對一個草根計畫，他覺得不錯。

[24:19](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=1459s) 成熟度模型他本來給團隊用，裡面也有一維是個人生產力，可以回頭看自己怎麼拿到價值。團隊版的好處是打開團隊裡的對話。每個團隊的 context、能力和興趣不同，所以行動計畫要是自己的。模型盡量不綁特定工具，而且要耐久：可以一次次重評，看自己有沒有前進。他們偶爾小改，大致保持一致。真正的價值在團隊跑評估工作坊、討論。

[25:21](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=1521s) 早期的贏是有人說，每天在 VS Code 裡用 Dev Mate，拿它把 codebase 看得更懂。也有人拿一個大問題丟一句 prompt，運氣不錯；同樣有人完全不行。後來出現可重複的模式：測試、code quality、降低複雜度。他們開始試無人看管的 agent。例如測試覆蓋有缺口：找出和這段 code、和這個 on-call 有關的檔，挑缺口最大的，照他們寫好的 runbook 去補，產出 diff。本來是很多小時的手工。後來工具可以自己查資料、做分析、產生任務、再去修測試、補覆蓋。結果大約 93.5% 的覆蓋，開始時遠低於 60%。大約三小時做完。一個工程師說我有個直覺，去玩，找到能重複的模式，分享到群組。另一個工程師說測試能跑，但太慢，不夠格在 diff 上跑。他用同樣的做法把執行時間壓下來，大約 1,900 個測試被改善。這種工作本來可能根本不會做。價值不只是省時間，是品質變好。Ian 問那位工程師：不只是修了多少測試，這些測試現在夠格在 diff 上跑，實際擋下多少問題。對方查了數據：自從上線，至少 200 個變更被擋下，因為這些測試現在會跑，以前不會。這種價值指標不是每件事都容易拿到，但這是能說服人的那種。

## ServiceTitan：247 個 metrics，先讓它能檢查自己

[28:42](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=1722s) David Stein 是 ServiceTitan 的 principal AI engineer。場次是 Moving Mountains：把舊 code 的遷移從年縮到週。ServiceTitan 是工種的作業系統，給住宅和商業的服務業：水電、電工、HVAC、屋頂、車庫門。平台從客戶關係、收款到接電話。他舉的 AI 用途包括 job value prediction：幾十個技師、很多客戶、一天很多工作，總部要決定誰去哪一家。產品裡的排程和派遣用這些情報讓生意跑得更有效率。還有語音 agent，24 小時幫客戶的客戶約維修。演講講的遷移是另一塊：報告產品。客戶要看營運、財務和生意的 metrics 和 KPI，底下的基礎設施很複雜，他們定期把機器換到更新的基礎上。大公司待超過幾年都會遇到：舊元件不再像你今天會重做的那樣。寫的人可能不在了，context 不好找，卻得搬到更好的平台。這種專案以久、以苦力理解舊 code 出名。

[34:31](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=2071s) 他們要從舊架構搬走。舊的是 C# 加 ORM，打正式環境的 SQL。新的像 data lake：一層 semantic layer，上面一個 query engine，同樣的 metrics 查詢，但是在非正式環境的架構上。細節包括 DBT MetricFlow，一層在 Snowflake 上的 metric store。你不能打開 Cursor，叫它把幾百個 metrics 全部遷到新抽象、新框架，順便從 C# 改成 MetricFlow 用的 SQL 和 YAML。他們試過，不行。Context 不總是在你需要的地方，複雜度太高。要把山拆成小塊，拆成一批相似、可以用同一種方式驗證的任務。聽起來明顯。人決定任務清單：第一階段遷哪幾個 metrics，第二階段哪幾個，目標架構是什麼。人也在 AI 工具幫忙下，把要給 coding agent 的 context 組起來。

[37:34](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=2254s) Agent 要的 context，和工程師一樣。看參考 code 裡點到的表，就要知道表裡的範例資料和 schema 長什麼樣，也要確認目的地：Snowflake 裡這張表、資料在不在。人類工程師要看到才能在新平台上把 metrics 寫對的東西，agent 也要看得到。他們把取得 context 的工具標準化。不是複雜到 MCP。就是工程師本來會用的 CLI，設好，讓 agent 拿得到。另一塊是讓 agent 有地方跑 code。演講裡他把它比成 physics engine，其實不是物理，是一支 script 或程式。Agent 用它在一個像舊應用的環境裡試自己寫的 metrics code，產出可以直接跟舊 code 的產出比。Simon 理解成：這時候不用正式資料，搞砸要在安全的地方搞砸，但夠用來驗證。上線前另有一套驗證，因為給客戶看的資料必須對。他不確定那些細節能講多細。Simon 說關鍵是重播：把以前正式環境看過的東西再跑一次，確認新 code、新流程的輸出和舊的等價。David 說 replay 是對的詞。他們有舊系統收到哪些查詢的 log，可以拿去打跑在新平台上的引擎。

[41:47](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=2507s) Agent 不必和人類工程師一樣聰明。重點是自我修正的環：它能檢查自己的工作，驗證沒過、新系統算出的 metric 和舊的不合，就再改。這個專案真正啟動，是今年五月 Claude 4 Opus 出來的時候。之前他們試過各種 coding LLM 懂不懂舊的 metrics code。懂到一個程度，但第一次好到可以相當不錯地為新平台改寫、重組，是 Claude 4 Opus，當時比較大的 model 之一。所以他們的情況需要它相當聰明，但不需要完美。人常卡在機器人會幻覺、是不是真的和人類工程師一樣好。那不是重點，只要有這個環。而且不是想一次、跑一次就把所有 metrics 遷完。前 10、15、20 個他們做了很多次，才把 system prompt 裡的標準 context、他在演講裡說的 migration goals.txt、任務怎麼拆、拆多細、以及 validator 和 simulator 的行為調到 agent 能穩定走完。它會以為某個 metric 已經成功改寫，連做幾個之後，人在出貨前檢查，發現有問題，就回去改 context、改進 validator 和 simulator，之後才比較好。它也會卡住，因為知道自己推不動。他喜歡的例子是測試資料不夠：它無法確認改寫會動。人類工程師沒有足夠的測試資料，也會有同樣的問題。

[46:24](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=2784s) 演講裡的數字是 247 個 metrics。飛輪轉起來之後非常快。前 20 或 30 個，加上把工具和 fixtures 做對，大概一到兩個月，他不確定自己的估計是否精確。從那裡到清單幾乎結尾，只要幾週。沒有 AI，他在演講裡估要幾個季度：工程師讀另一種語言的 code、看底層資料、把邏輯放進新抽象。那些人就不能做別的產品工作。很多公司，包括他以前待過的，有些大遷移因為優先級夠高、儘管成本巨大還是會做。還有一批技術債和「想換更好的基礎」、但因為太久而排不進去的。若能用演講裡的方式把問題拆對，那些一直想做的遷移可以快很多。錄製時 ServiceTitan 在招人，他說可以在 LinkedIn 找他。

## ThoughtWorks：研究階段不准寫 code

[49:51](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=2991s) Wesley Reisz 是 ThoughtWorks 的 technical principal，他們也叫 technical partner。他帶一個帳號的技術面：美國一個大型州政府機構，大約 10 個開發者，加上設計、專案、產品，一共大約 18 人。他們在做一個給州機構的 knowledge graph，用 deep research agent 去建、去填，再做應用來回答問題。這個專案他做了大約三個月。場次是 AI first software delivery，在創新和已經證明的做法之間取平衡。他談規格用到多深：從協助開發，到以 spec 為中心。Simon 提到 Birgitta 的文章，她之前上過這檔 podcast。

[51:18](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=3078s) 框架他自己沒發明。今年大約三月，在一篇文章或 Cursor 論壇上看到，他們叫它 Ripper five。五個字是 research、innovate、plan、execute、review。你和 LLM 聊天時，心態不一定一樣。你在研究，它跳去寫 code；你在計畫，它跳去寫 code；你在寫 code，它卻沒有在計畫。這套指示在 Cursor 裡當成命令傳進去。Research mode：問我問題、分析你所在的 codebase。不能做的和能做的一樣重要。不要寫 code，不要做計畫。現在只要懂 code、懂我的 spec 想做什麼，好讓我補細節、把 spec 修細。他們把這個執行模型和開發者 pairing。Simon 說，LLM 常常覺得資訊夠回一句，就跳到下一步，而不是問自己資訊夠不够給出使用者要的回應。

[53:55](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=3235s) 他們從 spec-driven 開始：一份寫清楚的 spec，有 acceptance criteria。他們正把行為驅動的測試放進去，讓測試在 code 之前。若讓它生完 code 再寫測試，測試會去貼 code，而不是先有測試、再讓 code 去滿足。他常問別人：spec 在哪一層？Epic 還是 story？他們的團隊是新帳號才組起來的，跟傳統的州機構工作，來不久，領域知識不多。所以他們用 Ripper five 定義怎麼從 spec 開始跟 LLM 工作，再讓開發者配上這個流程。命令放在 submodule，拉進 repo，整個團隊共用。Research：把 spec 和正在做的 codebase 給它，要它搞懂、問問題。問題的答案寫回 spec，繼續修。他們這邊主要是問開發者。可以加網搜，若有帶更廣 context 的 MCP 也可以用。現在開發者在前面，而且是一對 pair 在做這段研究，是監督得很緊的做法。領域知識和生意怎麼運作的 context 多了之後，可以放 evals，做更自主的事。研究結束由開發者決定。

[57:27](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=3447s) 下一步 innovate。軟體有很多做法。它可能給一、二、三、四個選項，你說我要第二個，或第二個再改得更像事件。那會回到 spec，補的是怎麼做。他們用的就是 markdown，開發者和 LLM 一起把檔案寫厚。Wesley 推的是這個階段一定回到 spec。他相信 code 一旦做出來，code 才是 source of truth。這個階段仍在修 spec。然後是 plan。像 scrum：故事寫清楚了，團隊裡三四個開發者，不知道誰會撿。規劃時說這是一個 React component、服務要這些方法、也許要這個 model、這個 repository、資料庫遷移。把任務寫下來，另一對人撿起來也有同樣的心智模型。命令是 do plan。它先拆成任務，pair 再看要不要重排。他昨天舉的例子是 Python 專案，它沒有先設 virtual environment。他要一切在 sandbox 裡，不要動到自己的機器，所以叫它把 virtual environment 加進計畫。任務盡量原子，最好像一次獨立的 commit，不要漏到別的任務。這樣可以拆開做、可以平行，有相依就寫進小的任務計畫。

[1:02:13](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=3733s) Simon 問有多少可以跨專案重用：風格、工作方式、測試驅動、團隊熟悉的 stack。Wesley 用 Cursor 回答，但他說跟特定工具無關。進 Ripper 5 之前先有基礎規則：做出來的東西用 Mermaid 畫圖，程式抽象的一般規則。有人會放 DDD 或 clean architecture。規劃時發現橫切、想留下的，就做成規則。他目前的專案用 Spanner，他對 Spanner 還算新。做 DML 或 DDL 時撞到它處理更新的方式，就把那條加進規則檔，經 submodule 分享。別的開發者做另一份碰到 Spanner 的 spec，就會拿到他加的那條 DML 規則。全部 check in。一個 Cursor submodule 放 rules 和 commands。這個案子大約五個 repo，不是 mono repo。各 repo clone submodule，拿到最新規則。

[1:04:07](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=3847s) E 是 execution。Research、innovate、plan 階段不能執行、不能產生 code。這樣 LLM 和開發者在寫 code 之前是對齊的。到了 execution，不再計畫，照計畫做。若執行中發現要回規劃，一般規則是回到 spec 再計畫。LLM 有時要想一分鐘，所以小改計畫是不被鼓勵的，但做了也沒關係。他沒找到「每個變更都必須回到 spec、spec 永遠是 source of truth」對他成功的平衡。太低，spec 會互相撞。他用的是 spec-first：spec 用白話定義要做什麼，審過、生出來、再審那裡有什麼。小變更有一個同事教的技巧。他在 Equal Experts 的同事 Marco Vermeulen，是 SDKMAN 的核心貢獻者。Code 生出來、pair 審的時候，在 code 裡丟一個 to-do：這裡不要巢狀 for，要用 streams。再讓 LLM 掃所有 to-do，從那裡更新 spec。他試過幾次，有用。其他時候他直接改 code，因為在他們的 spec-first 裡，code 是 source of truth，spec 是幫忙對齊、幫忙想、幫忙自動生一些 code。往前走時，他們現在把 spec 丟掉，至少從會被吃進去分析的東西裡排除，以免 spec 和 code 變成兩個 source of truth。他覺得很快會完全移走。執行留下的就是 code。

[1:07:44](https://www.youtube.com/watch?v=OnM7sWLnAfw&t=4064s) 測試若放在生完 code 之後，叫它做 95% 覆蓋，LLM 會拿 code 去寫測試。測試變得非常脆。他花很多時間修，最後乾脆刪掉重產，覺得這樣不誠實。所以現在把測試推進 spec。規劃時 spec 裡就有 BDD。生 code 的時候，測試跟著來，不是事後。Simon 說 Tessl 很早也把能力和測試分開，很快發現能力只是測試的另一種說法，測試也在描述能力，於是合併。Wesley 說他們沒有專門談過，卻收斂到類似的做法，他覺得很有趣。最後的 R 是 review，他覺得大家太常漏掉的 QA。Plan 和 execute 已經進了 Cursor 這類 IDE。Ripper 多的是：驗證做出來的東西是否符合 spec。看計畫、看 code、標出 drift。有清單，對的打綠勾，不合的標紅。推回給開發者決定。有時 drift 是你要的。他在演講裡說，LLM 強大是因為 non-deterministic。若它是純函式，我們早就有了：給輸入、得到精確輸出，那叫 template。你若喜歡那個 drift，就在 review 裡指出來，叫它回去更新 spec。想多讀的人，ThoughtWorks 還沒有為此寫文章。演講幾週後會公開。他主要在 LinkedIn，也在 Bluesky。原始出處是他三月看到的那個 Cursor 論壇。
