# John Groetzinger - Skills Everywhere: AI Native DevCon London 2026

片長 30 分 18 秒，英文手寫字幕。AI Native DevCon London 2026。John Groetzinger 是 Cisco 的 principal engineer。主持說自己不久前在阿姆斯特丹的 Cisco Live 跟他一起講過。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=78KQVxMTAQ4)

## 一句話

大型企業裡很多團隊都要 skills，問題不是再換一個更聰明的 model，而是 context 只有一份、eval 守得住、人和 agent 讀到的是同一份。他在 Cisco 用兩條路講這件事：把 TAC 的知識庫編成 agent 自己維護的 skills，以及用一個 skill 讓全球八個團隊用同一套方式寫 agent 的 evals。

## 中階模型就夠，前提是 skill 帶得走

[1:03](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=63s) 他先講一句可能得罪 frontier model 的話：今天要的商業價值，不需要更聰明的 model。不是在談博士等級以上的智力。Model 已經做得到。缺的是更聰明的 context，和 context engineering。

過去幾年他一直換 harness，追最新的，workflow 不斷壞掉。一換到比較弱的 model 就出事，他立刻怪 model，回到 Opus。Skills 出現後看法變了。尤其 harness 裡的 agentic fan-out：model 設成 Opus，一個很大的 prompt 生出 15 個 sub-agent，字幕聽成 sub in。成本真的在漲。大型企業已經開始限制 model 使用，因為這筆錢和 fan-out。

他問自己為什麼不能全部用 Sonnet，然後發現可以。過去幾個月他大多用中階：Sonnet、GPT 的 medium reasoning，很少碰高階，除非是很複雜、context 很多的 planning。他要求工程師以中階為底，需要才往上跳。原因是 harness 和 model 都在訓練、也都遵守 skills。Context 可以在 harness 之間帶走。Claude Code、GitHub Copilot CLI，以及字幕裡沒有寫清楚的 dev，三邊的 skills 若都通，行為大致一樣。

要管的是：打包一次，發給所有人，只有一個管理來源。真正的鑰匙是 evals。字幕有幾次聽成 valuations、evils、emails。做得對，重複的流程可以用很低階的 model，而且更確定。他問現場：這個流程用 Opus，或用 Haiku，更快、更便宜、結果一樣，你選哪個。沒有人會為了貴和慢而選貴的。

兩則故事都不是「必須這樣做」。一是人已經在維護的 context，怎麼變成 agent 能維護的，又不重做一套、兩邊也不漂移。二是開發團隊往後以 skill 當起點。開發期限很緊，因為高層說有了 AI，同樣時間可以交更多功能。支援團隊則是高嚴重度案件，時間該花在客戶身上。

## 知識庫要變成 skill，人不要去看 diff

[4:17](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=257s) 他在 Cisco 約 14 年，透過收購 Sourcefire 進來。那套 intrusion prevention 到今天仍是 Cisco firewall 的核心技術之一。大約 12 年在 TAC，也就是企業客戶的技術支援：金融機構、銀行、醫院、關鍵基礎設施一斷，他是要把人趕快救回來的那個。他想自動化，因為那些狀況很煩。過去 12 到 14 年做 full stack。最近 2 到 5 年，很多 edge case 不好硬寫進自動化。AI 改了這件事：大約 50 個 edge case 不必再寫 if/else，丟給帶 context 的 agent 就處理得不錯。過去一年重心在 production。幾週前 GA 了一個從零做成 AI native、對外的平台，幾週內超過 1000 個使用者。今天的故事來自真的在出貨的 agents。

[5:44](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=344s) Skill 可簡可繁。他們團隊有一個 repository standard。技術債很多，新人用的 model 訓練資料不夠新。說一聲建一個 Python 專案，就吐出 `requirements.txt` 和 pip install。他只要大家用 UV。放進 skill 之後，工程師裝上 skill，讓 agent 建專案，就不會用錯方式。Skill 可以帶 rules，也就是更多 markdown、scripts、scaffolding。重點是加 eval：定義這份 skill 永遠該做好的最低限度。往上加功能時，舊的不能壞。Edge case 做到還可以，出現了再補 eval。

[7:53](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=473s) 支援團隊的故事是：已經有給人的內容平台，怎麼讓 agent 用。TAC 的知識庫是文化。工程師一直在換，價值在經驗。我幫客戶解了一個很複雜的問題，別人一定還會碰到，寫下來，下一個工程師不必再苦一次，客戶也不必等那麼久。內容是高度整理過的。他們最早只給一個工具去搜、把文件拉進來，讓 agent 自己想。偶爾有用，幻覺很多，因為知識庫裡仍有過期文章。不能什麼都讓 agent 吃。

兩個工程師做了大約兩年，幾個月前做出一個平台：不是把每篇文章塞進去，而是人在維護的高品質文章轉成 skills，再為它們建 evaluations。想像客戶開案、有問題描述、花三週收 log 才修好。為什麼要三週。能不能第一天就從描述走到解法。人寫文章，再交給 agent 把這件事再自動化一層。

[10:39](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=639s) 他問現場誰寫過 skill，大多數舉手。誰是用手寫的，少數。他說別再這樣。Skill 不是寫給你的，是寫給 agent 的。人的文件可以有。你不該在意 skill 裡面的 context 長什麼樣，該在意用了之後的結果。人最貴的時間是驗證品味、品質、什麼才要緊。那就是 eval。最初的知識庫和中間那段，讓 agent、讓 LLM 做。若你希望小 model 跑這個流程，更好的是讓小 model 為自己建 skill。他們有不少這種經驗：問它這是給你的，你要怎麼整理才更有效率，放進 pipeline，用輸出品質當 eval。

他大致同意「wiki 是文件去死的地方」，因為人通常不維護文件。他們的文化強，文件沒有在死，反而更重要，用來把 agent 定住。他看到的問題是：有的系統盲目吃任何內容，有的 agent 自己長 memory，然後 memory 跟內容漂移。給客戶的答案和它聲稱的來源文章對不上，整個系統就沒人信。這是他們這幾年一直在掙扎的。

他們的做法是文章一改就進 pipeline，想像成 GitHub Action。LLM 看變更，判斷 minor、moderate、major，自己改 skill，再跑 eval。過了，而且只是錯字或用詞，不必人來擋，自動發。比較複雜、或引進新主題，才插人做品質控制。人要嘛在最左邊、要嘛在最右邊。中間不該浪費在看 skill 的文字 diff。他的經驗是，工程師在 review skill 的 text diff，就是在浪費時間。新主題就要新 eval。可以讓 LLM 寫，但你得告訴它成功長什麼樣。

## 八個團隊，一份 eval skill

[12:34](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=754s) 第二則是怎麼把 skill-first 的 context engineering 種進工程團隊。幾週前上線的平台是 multi-agent orchestration。他們不叫 orchestrator，因為是 Cisco，叫 semantic router。它把事情分給多個 agent。今天有八個 specialist agents，這一季已經在做另外十個，還在長。不同開發團隊、有的是不同組織，全部進同一個平台。客戶看到一個介面、不同的 app 和頁面。每個後面有自己的 pipeline、資料庫和 agent，但不把這層複雜度露出來。到處都有一個 AI assistant，也有嵌進去的 AI 按鈕。有的按鈕直接送到某個 agent，也有自由對話。人坐在 configuration best practice 那個 app，問自己開了哪些 TAC cases，不該進 configuration agent，該進 cases agent。系統做得到。敢這樣出貨，是因為他們做了很重的 evaluations，而且這套工程文化是後來才建起來的。

他被派去決定這東西夠不夠好、能不能 ship，go 或 no-go。他覺得很多人卡在字幕寫的 sea phase。不能放出很糟的東西。看過 agent 把車賣成一美元那種災難，他們不要那種公關。

[14:49](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=889s) 他們用 LangChain、LangGraph、LangSmith 看 agent，後者有不錯的 eval 文化。但他要的是能比較所有環境，一般做 dataset 的方式對不上。Agent 平台的訊號來自 traces。早點上、看、再依人怎麼用它來調。自由對話什麼都問得出來，預測不了，只能從 production 把 eval 拉回來：這個問題走不好、走錯 agent，或走對了但答案差，就為它建一條 eval。在自己筆電上修好，通常是改了 prompt 或 tool。修這一個，又打破了什麼。沒有 eval 你不會知道。

所以要做成 unit test 那種。對企業來說，軟體放大之後 unit test 必要；在 agent 的世界，eval 就是 agent 的 unit test。他要大家用同一份基本 dataset schema，dataset 跟 code 一起放在 repository。JSON 常常是一整行，1000 個例子會把 context 炸開。全部改成 JSONL，一條 eval 一行，coding agent 才能精準改。他們沒時間手改 dataset。他寫了一支 script，同一份 code 在筆電、dev、staging 都能跑。

傳統 unit test 是 import 函式、餵輸入、對輸出。黑盒的 agent eval 可以一樣做，但中間發生什麼你也可能在意。那看 LangSmith 或任何 observability。他們不是 Python import，是打一個 endpoint，eval 指向它去叫 agent，再查：有沒有叫到預期的 tools、參數對不對、token 是否大概在預期、這次 latency 跟上一次的 baseline 比怎樣。這些都要進 eval。

[18:02](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=1082s) 他要在一兩週內，把這個觀念交給全球八個團隊、數百個工程師。開會講一小時測試，沒有開發者會聽。測試不讓人興奮，所以要盡量替他們做掉：怎麼進 CI、怎麼知道環境、dataset schema、一致性。他的想法是做一個 skill，大家裝上，讓 agent 幫他們建 eval。Plugin 裡有 `SKILL.md`、範例、scripts、範例 evaluations。他先跟一個 agent 把模式做扎實，再叫那個 agent 把剛剛做的壓成一份 skill，給別的 coding agent 用。慢慢分享：第一天一個團隊的回饋，第二天另一個，第三天大家。工程師跟 agent 說：做這件我不在乎、但是 John 要我這週做完的事。一週結束，每個 agent 團隊的 dataset 長得一樣，指標也類似。若只是叫八個團隊各自去建，他預期會完全不一致：有人 0 到 10、10 是好；有人 0 到 5、5 是差；有人 0 到 1。得講同一種語言。Skill 可以版控，大家一起出。

## 經理不在 git 上，README 要同步到 Confluence

[20:30](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=1230s) 然後主管來問：那個 evaluation framework 進度如何，某人說喜歡，給我看。他說你問你的 coding agent。對方沒有，因為是經理。缺口還在。他不想寫一份 Confluence，然後再不更新、開始漂移。所以全部在 repository。Skill 背後是 git，字幕聽成 gate。可以發到像 Tessl 這種 registry，但維護在有版控的 git。Agent 讀 `SKILL.md`，人讀 `README.md`。Coding agent 可以兩邊一起改。人驗證 README，skill 給 agent，eval 確認它有用。

很多經理根本不在 git，只活在 Jira 和 Confluence。不能叫 100 個經理去開 GitHub 帳號。用開源工具或自己寫 script，把專案裡的 README 送上 Confluence。Markdown 的一級標題變成 H1，這是確定的轉換，不必用 LLM 去改 Confluence，那很燒 token。讓 agent 寫一支確定的 script，把 markdown 同步成另一個系統裡的 HTML。之後有人在 WebEx 問這套 agent framework 的資料在哪，他丟那份 Confluence 連結，它和 repo 裡的 README 是一對一。Agent 讀的和經理讀的是同一份，只維護一個地方。

文化要改成先問：這是不是一個 skill。WebEx 上有人說今天有新工程師，DevOps 資料在哪、怎麼拿 Kubernetes cluster 的權限。他的反應是：先問我們有沒有一個 skill 可以裝進 agent。這得刻意做進團隊。現在的預設是：有人有這個 skill 嗎。沒有就一起做、一起維護。不要 15 個工程師為同一件事做 15 個 skills。Token 預算已經是問題，那是很浪費的工程。有 coding agent，就該一起維護，只要 eval 定義了該有的行為。他說這比聽起來容易。

[23:43](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=1423s) 回去先做小的，不必先做他們那種撞了兩年牆才有的平台。挑一個你不斷對不同對象解釋的流程，做成 skill。想清楚受眾和平台，README 能不能同步過去。一定要加 evaluations，先定義最低限度：該幫人做什麼、怎麼驗證。先自己用，當成 0.0.x，再 semantic version。1.0 表示第一次就幾乎沒摩擦地做到它該做的事，否則信任沒了。穩了是 0.x，很多人說很好用才升到 1.0。

Agent 架構每天在變，下週、下個月又是一套，預測不了。Context 才是耐用的投資。花時間做 context engineering，維持在一個地方，再分發到多個系統讓它們同步。Pipeline 今天就建，因為其他東西反正會變。

## 問答

[26:21](https://www.youtube.com/watch?v=78KQVxMTAQ4&t=1581s) README 和 skill 差很多嗎。他說大多數大概八成像。通常先寫給 agent 的 skill，再請它寫成 README。看起來浪費，但 LLM 在維護，多出來的不多。

技能變多之後，使用者怎麼在需要時找到對的那一兩個。問的人說的是 scales，他聽成 skill 爆炸、以及怎麼把對的 skill 拉出來。開發團隊用 Tessl，有一個 server 幫你搜 skills。一般答案是把 skills 做成 agent 搜得到的索引，做法看工具。簡單的是全部放在一個 GitHub repository，讓 agent 去 grep，今天幾乎不用額外力氣。要更穩就得看更完整的系統。

Skills 是放在跟專案分開的 GitHub repo 嗎。對。每個工程團隊有自己的 skills repo，他們也有一個放全團隊 skills 的 repo。

誰決定 skill 該更新。Evals 就是答案。任何人可以提 PR，把它當 shared library：不能弄壞別人的功能。你在意的行為就寫一條 eval，每次更新都得過。跟有 unit test 的 shared library 沒有不同，只是 LLM 非決定性，eval 要多想一點。概念上一樣。

有人問哪裡可以再讀 eval、今天有沒有現成的可以用，還是自己寫一個 skill。他沒有指一個公開資料，說這個他可以講一整天，會後可以一對一聊。
