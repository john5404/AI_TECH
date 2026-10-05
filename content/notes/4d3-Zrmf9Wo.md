# Simon Obstbaum & Rob Willoughby - Why evals are hard and how we're solving it - AI Native DevCon Jun

Simon Obstbaum 與 Rob Willoughby。AI Native DevCon。主持人先把場次說成 from Vibes to Metrics：怎麼量 agent 實際做了什麼。片長約 37 分鐘，英文手寫字幕。前半研究數字有好幾段聽不清，下面只寫對得上的句子。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=4d3-Zrmf9Wo)

## 一句話

產出看起來對，不代表 agent 用了對的工具、走了對的步驟。Simon 用史丹佛的大規模研究看採用之後誰變強、排序怎麼洗牌。Rob 把 skill 當成要檢查的結構：模型本來就會的不必再燒 token，模型不會的才值得寫進去。要分開量它有沒有被喚起、軌跡對不對、測試過不過。

## 開場，以及怎麼量產出

[0:03](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=3s) 主持人先秀 Granola skill，在 Tessl registry，路徑是這場 AI Native DevCon 2026、LDN。裡面是用 Granola 錄下來的演講，可以對那場提問。他說自己在主持、還沒細看，請大家回饋給 Tessl。下午工作坊加了名額，這間房間座位變多，app 可能要強制重新整理。有位子的人要準時，過一段時間才放候補。

[2:26](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=146s) Simon 是史丹佛 Software Engineering Productivity Research Group 的研究者，產業裡做過 CTO，也做研究和諮詢。宏觀那側看整個產業怎麼採用。

[4:04](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=244s) Stanford SEPR Lab 做的是他們稱為規模最大的軟體工程生產力研究。大約 150,000 名工程師以某種方式加入。合作公司承諾一年。他們看整個 source repository、所有工程師、各種程式語言，觀察行為怎麼變。結果上過一些媒體和研討會。第一篇報導裡有「大約 10% 的工程師」這句，出處名稱字幕沒聽清。

[5:17](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=317s) 他們不想只數 commit 和行數。做法是請專家看程式，問：你覺得作者花了多久、換你要多久，以及可維護性和彈性。小組內部、以及跨組，同意度很高。他說自己開過很多工程會議，人居然能同意一件事，是這研究第一個讓他意外的結果。同意度和實際花的時間、某些 ticket 對得上。接著訓練一個模型，模仿專家小組，才能放到整個資料集上跑。

## 排序在洗，控制組也消失了

[7:28](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=448s) 他們看過 46 個團隊。中途方法必須改：大家幾乎都在用，控制組消失了。團隊之間差很多。落後的那群產出沒有有意義的變化；他提到較低的百分位有在變好，從頭到尾的差距很大。字幕裡還出現 2023 年大約 5%、以及 July 2026 高到 60% 這類互相對不上的日期，這裡不把它們當成已經核對過的數字。

[9:40](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=580s) 個人差異是他說這研究看過最大的。研究從 2020 年開始，本來在想怎麼量生產力。他在矽谷工作時想證明某一種特別強的工程師並不存在，當時也看不到；字幕把那個類型聽成 connector。現在會做 agent、知道怎麼用的人，成果明顯更好。

[11:00](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=660s) 排序本來相當穩，一個係數是 0.70，後來掉到 0.45。以前讓你成為頂尖的做法，不再保證你今天還在上面。他的假設是：有些人以前忙著幫團隊把東西做出來，一部分工作被自動化之後，他們有時間了，表現衝上去。他後來說這些人 “killing it”。也看得到以前在上面的人往下。為什麼會這樣，他說自己還沒完全懂，只是觀察到了。

[12:40](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=760s) 較技術的部分在看人怎麼編排 agent，以及留下什麼 artifact。論文投給 IEEE 的 Automated Software Engineering，字幕把會名聽成 ace，審查進行到哪沒聽清。他們看 artifact、embedding，再跟前面的產出測量對。沒有 harness、工具、instruction 或 skills 時，agent 進來之後變更變難，產量在變，但不像真的變好。他說 tooling 和 instrumentation 是必要的。到他稱為 level two、level three 的團隊，看過的指標在變好。早期有人說採用只會引入缺陷；這兩層他說現在看不到那個現象。中間每一項指標的數字，字幕沒有聽清。

## 模型本來就會的，不必寫進 skill

[15:43](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=943s) Rob 接的是：結構要怎麼放進去，artifact 用 skill。他要看的不是單一連貫的任務敘述，而是 agent 怎麼把事情做完。

[17:04](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1024s) 這組實驗有 500 個 skills、1,000 個任務，以及 19 種 model 和 harness 的組合。組合會互相影響表現。任務是合成的，但設計成你會期望那個 skill 被觸發。例如實作 API security、把密碼認證改成別的機制，或一個表面無關、仍該讓它注意到安全的任務。難度像範圍清楚、工程師做得到的 ticket，不是在推邊界。他口中有一個達標門檻，字幕聽成 1,993%，這個數字不採用。

[18:33](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1113s) 一個他覺得有意思的數字：即使 skill 不在，仍有 55% 會跟著 skill 裡的指示走。那些內容已經在 model 的權重裡，你問它，它本來就會做。這件事值得知道，因為你在燒 inference token、在付錢，買到的是它本來就會的路徑。Skill 的結構改變的是它怎麼做、做得好不好，不是每一條都值得塞進去。

[19:22](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1162s) 他反覆看到三類才值得寫。一是你們自己的規範，例如只允許某一組程式庫。二是環境才知道的設定：要打到某個服務，就得把 API credential 配好，而且要在它跑起來之前就位。Agent 不會自己知道。三是禁止或已棄用的模式，例如不要做出暴露到網際網路的東西。

[20:38](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1238s) 例子是訓練截止日期之後才出現的做法，具體 API 字幕沒聽清。你叫 agent 用新的寫法，它讀到的仍是舊的，因為舊寫法在訓練資料裡，很多 agent 都這樣做。只看測試會過。新寫法要等進下一次訓練資料，他說可能是幾個月以後。Skill 是用來把標準改掉。改善最大的，是你想做得不一樣、近期訓練資料裡先驗不多的地方：在地慣例、安全與合規、你們的基礎設施、測試要長得和外面常見的不一樣。資料轉換這種只有幾種做法的通用步驟，硬塞 context 的價值較小。價值在對業務重要的在地約定。

## 喚起、軌跡、結果

[23:37](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1417s) 他要量的不是只看最後。第一是 discovery：description 預設吃掉 1.2% 的預算，所以要評估它會不會在該出現的情況被用到，並把 description 調好。中間一段從幾分到幾分的數字沒聽清。第二是 trajectory：走了幾步、用了哪些工具、順序是不是你要的流程。第三是它有沒有把事情做成、測試過不過。換掉包住 model 的 harness，分數可以動到他說的 200%。不能只測某一個 model 版本，或只在某一個系統裡測；他提到 OpenHands 這類環境。測的是整個系統。量測是從他口中的 level 1 走到後面幾層的方法。分析是開源的，在他們網站上。

[25:12](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1512s) Simon 說研究還缺一塊：產出和結果，怎麼接上實際花費。適當的量有多少，他們也不確定；字幕把那個量聽成 consent。他們用參與者的資料發布開發者狀態。組織可以註冊、提交自己的資料，換更多分析。有些組織已接上，也在接 agent 和實驗室的資料。他們還做不到替每家做預算，正在看怎麼選 token、怎麼把 token 用完。

[27:20](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1640s) 有人問分組有沒有年齡。沒有。法規下這類資料可以退出，所以他們不收。有 tenure、地區，也用職稱粗推，有些相關。有些公司裡的人待了十年以上。提問者說這場聽眾年齡偏資深，想知道是不是從管理回到動手。Simon 說今年看到很多 staff 這層的時間結構在變：以前可能在幫忙、沒時間做自己的，現在有別的方式處理那些時間，他們可以做得很好。

[29:39](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1779s) 另一問是：有員工因為不用 AI 被打差評，這會不會讓統計把不用的人自動當成表現差。他說不會。他們看所有工程師，用不用都看。排名來自專家小組那套對產出的分析，不看「有沒有在用 AI」的資料。

[30:44](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=1844s) 有人問 harness 的資料會不會定期公開。Rob 說重點是你有 harness、而且指示清楚，他們主張這有差。那 19 組的數字，他們想往後更常分享，不只一篇論文。程式品質會不會影響結果，Rob 說他們現在量的是有沒有跟著指示走，不是另一套生成品質；各組織要怎麼對齊，很特定，他們沒有去定一套新慣例。正在準備的論文會接 application performance management 工具。Simon 補充：專家小組裡品質很主觀，同意度較差的題後來分開處理。他們另做了維護性的分析，看好不好維護。方向字幕沒講完。

[34:21](https://www.youtube.com/watch?v=4d3-Zrmf9Wo&t=2061s) 最後一問是要多久才進到高表現，有沒有觸發點。觸發分析他們還沒做。一旦被分成 AI 上的高表現者，傾向留在那裡，比較像心態。個人衝得動；若不必拖著整個團隊，就留得住。提問者補了一句：有人因為團隊的做法跟不上而離開。Simon 說有參與者看得到一份分析，字幕後段像是有單位在失去這些人、也有單位在雇他們。時間在這裡結束。
