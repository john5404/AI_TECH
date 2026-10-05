# Monthly Roundup: AI Security, AI Documentation, Enterprise AI Strategies, with Ben Galbraith

Simon Maple 和 Guy Podjarny 的 AI Native Dev 月回顧，來賓 Ben Galbraith。片長約 30 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tessa、Tesla、Tessol，把 Snyk 聽成 sneak，把 Swimm 聽成 Swim，把 intent-driven development 聽成 I needed development。

- 原片：[YouTube](https://www.youtube.com/watch?v=ddISeYuDGC8)

## 一句話

九月的幾場都在問同一件事：LLM 單獨做不穩的地方，要跟既有系統接上。Guy 用 change 和 trust 兩軸看 AI 產品。安全上，LLM 分不開 control plane 和 data plane，生成的 code 也不能假定是安全的。企業要的是同一題今天和明天得到同一個答案。

## 九月四場，以及 Ben 為什麼離開 Google

[0:22](https://www.youtube.com/watch?v=ddISeYuDGC8&t=22s) 這集回顧九月。Guy 跟 Tamar 談 enterprise AI，涵蓋 Glean、enterprise search，以及怎麼做這類產品。Simon 跟 Swimm 共同創辦人 Omer Rosenbaum 談怎麼用 AI 讓文件保持更新，並且在開發者碰到有文件的 code 時通知他們。Guy 跟 Caleb Sima 談 AI security。Caleb 自己主持 AI Security podcast，這集比較有意見，方向偏正面。月底 Felipe Aguirre Martinez 來倫敦。他盡量不要自己寫 code，用 prompts 和 specifications 把應用做出來。

[2:37](https://www.youtube.com/watch?v=ddISeYuDGC8&t=157s) Simon 把 Guy 請出房間，說隔壁樓是 HR，請 Ben Galbraith 坐下。Ben 十二歲開始做專業開發，中學讀到一半就全職工作，先在大平台上做，後來去把平台做更好。他帶過 Walmart 全球電商的產品設計和工程，在 Mozilla 做 dev tools。Palm 有一次想讓 web 成為手機上的作業系統，他參與了，不願把它叫成 misadventure。Ajaxian 是他參與帶領的 Web 2.0 和 Ajax，也是一系列研討會。最近在 Google 約八年：帶 Firebase 的產品和設計，願景是拿掉 app 開發的 toil，讓人專心做讓產品特別的部分。大部分時間在 Chrome，做 web platform、Chromium、V8、media codecs，也推 Core Web Vitals 和 Baseline。

[5:17](https://www.youtube.com/watch?v=ddISeYuDGC8&t=317s) Simon 問他為什麼離開加州的 Google，到下雨的倫敦進這家新創。Ben 說自己做過幾次 startup，八年夠長了。他和 Guy 很久以前就認識：他在 Walmart，Guy 在 Akamai，後來看著 Guy 在 Snyk 的過程。今年二月他傳訊息給 Guy，說想離開 Google 做 startup，用的是他們現在叫 intent-driven development 的原則。Guy 回了一個 wry emoji，說大概該談談。他原本覺得倫敦太大。夏天來過，見了 Guy 和 Tessl 的團隊，本來準備解釋為什麼現在變動太大、也許當 advisor，離開時覺得自己必須加入。家人以前在他進 Google 時在香港住過兩個月。這次當成另一次家庭冒險。天氣他沒先講。看 expat 影片時天氣一直出現，太太說這不在約定裡，但應該沒問題。

[8:25](https://www.youtube.com/watch?v=ddISeYuDGC8&t=505s) 兩個意外。一是倫敦本身。他一直覺得紐約可能是世界上最喜歡的城市，在 Google 也管過倫敦的人。現在大部分時間在這裡，城市和英國鄉間都比預期更喜歡。二是有多少開發者跟這檔節目講的願景一樣：不要停在 code completer 和 co-pilot，從根上重想軟體怎麼做。Simon 前一週在 user group 講未來，以為會有恐懼，結果人想學、想碰現有的 AI dev tools。

## 採用最多的，是少改工作、也不必太信任的那一角

[10:33](https://www.youtube.com/watch?v=ddISeYuDGC8&t=633s) Guy 這個月寫了一篇在心裡燉了一年多的模型，投資人角度看 AI 解法，開發以外的領域也適用。細節在 Tessl 的 blog。兩軸：change，為了用這個產品我要改多少工作方式；trust，它得多對我才用得上。

[11:19](https://www.youtube.com/watch?v=ddISeYuDGC8&t=679s) Synthesia 做 text to video，不是在今天的剪片流程裡加一個 co-pilot，而是整段重做，才有機會換掉瓶頸。做培訓或媒體影片的人得做完全不同的事，供應鏈要重想，團隊技能可能不對。變動大，也是新創進得去的破壞。另一軸是 robotaxi。你在 Uber 叫車、上車、下車，人開或 AI 開，體驗一樣，工作方式幾乎不用改，信任卻極大：這輛車得把你活着送到。

[12:42](https://www.youtube.com/watch?v=ddISeYuDGC8&t=762s) 今天採用最多的在左下：低 change、低 trust。開發用的 co-pilot 就是你打字，它接上現在的寫法，結果可以用眼睛看。有安全含意，你可能沒看夠。只要夠常對，就讓你更好，沒理由不用。它是增量，不重想 workflow，也不把問題整個解掉。右上是他們口中的 AI native future，spec-centric 那些，離現在遠。

[13:48](https://www.youtube.com/watch?v=ddISeYuDGC8&t=828s) 轉貼和 LinkedIn 稱讚不算最強的訊號。有人自己寫自己的領域怎麼用，他覺得有用。同一週 Microsoft 和 Salesforce 都有大發布，走不同的路。Microsoft Copilot Pages 讓多個人各自帶着 AI 一起改文件，也許把 app 合在一起，他放在 change 那條，看起來會怪。Salesforce 的 Agentforce 用自動化 agent，他放在 trust：工作一樣，開出 ticket，履行的可能不是人而是 agent，你得信任它做對。

[15:20](https://www.youtube.com/watch?v=ddISeYuDGC8&t=920s) Simon 跟 Felipe 看工具時開始用這四格。Felipe 用 Claude 生出 code，還是想放進 IDE 再玩。工具不是一跳到位。先有一大步，再被人拉回 IDE。Claude 的 projects 把事情往前推；Cursor 讓你在 IDE 裡對話、它在裡面做完，離習慣更近，下一步看起來就小。Guy 說 change 那條的機會是重想基本假設：機器會寫 code，也會補上需求裡你沒講的缺口，這打開什麼。那些東西怎麼變成現實是一個過程。人會說我還不能用，因為得離開 IDE。網頁上可以寫一堆東西把應用做出來，其餘工作仍在 IDE。問題變成能不能把那個體驗帶進 IDE。

## 控制和資料在同一句話裡

[17:16](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1036s) Tamar 那場安全也佔很大一塊，因為碰到資料。Caleb 的講法是：LLM 的世界裡，control plane 和 data plane 沒有分開。SQL 裡 `SELECT ... FROM` 是結構，`WHERE` 後面等於的文字是資料。LLM 沒有欄位、沒有結構，就是一句話，系統分不清你說的哪一段是資料、哪一段是指令。Guy 說他還沒看到今天有人做出確定性的解法。

[18:48](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1128s) 所以做給企業的工具會 Awkward：資料存取很重要。Glean 的做法是 LLM 本身不持有資料，只碰 control plane。它學的是系統怎麼走：怎麼去 HR 系統把資訊取出，怎麼去 Zoom 或 Gong 取出錄下的對話。使用者真的要做時，用 RAG，而且只把這位使用者在傳統授權下看得到的相關資料帶進這次對話。只有這個 session 的 context 裡，LLM 才知道這份資料。更廣的資料它不知道，取資料走的是使用者的權限。他加了星號：不是消滅外洩，是大幅降低使用者碰到不該看的資料的風險。Simon 說重點是不讓 LLM 自己判斷能不能用這份資料，只餵它這次請求被允許用的。

## 生成的 code 不會自動安全

[20:18](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1218s) Simon 問過 Caleb：LLM 能不能給出完全沒有安全問題的 code。答案對着 Guy 前一家公司的成績：不行，它不能每次都產出安全的 code。Caleb 的實用講法是，LLM 用人類的 code 訓練，人類的 code 整體並不安全，為什麼生成的會更安全。指令本來就是從不安全的 code 來的。不要假定 code 是安全的。

[21:26](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1286s) Guy 拿走兩點。一，它會變好，因為我們會標這段 code 好、那段不好，在企業 codebase 上訓練的公司也讓使用者標 golden pull request。二，他更興奮的是：機器自己寫 code、進到 autonomous workflow 之後，可以把測試的自動化嵌進開發過程。重點不一定是 LLM 產出的 code 比較安全或比較不安全，而是機器不懶。人不會把每件苦工做完。機器會繼續跑安全測試、修漏洞，而且做得徹底。

[23:07](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1387s) Swimm 有一句他覺得好。若不用靜態分析去判斷哪段 code 對哪段文件，你對「這次 code 改動必須改這些文件」會多準、多穩。他差點說只用 LLM 的話，八成輸出會是噪音。真正把體驗做出來的，是靜態分析建出 AST，再讓 LLM 用它把 code 和文件連上。他把它當成防 hallucination 的 ground truth。安全那邊也一樣。Snyk 這類掃描比較確定：同一份 code、同一套規則，結果相同。LLM 是統計的。同一份 code 掃十次，也許八次找到漏洞、兩次沒有，有時還幻覺出 false positive。你能不能蓋「沒有漏洞」的章？要不要掃十次？Caleb 的挑戰是：看它多有價值。若那八次非常準，也許接受。祝福之前掃三次，覺得統計夠了就蓋章。一邊是讓它更可預期，那是 trust，怎麼知道它做對。另一邊是 change，方法本身要不要改。

[25:55](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1555s) Glean 還把 symbolic AI 和 LLM 接在一起，加上搜尋。Tamar 說一進企業，CIO 在軟體上花很多錢。今天問、明天問、甚至同一天稍後再問，他們付了錢，要同一個答案。要嘛接受 LLM 的變異，要嘛用 LLM 但仍追蹤答案、把一致性做進去。兩邊都還有工作。人付錢，它最好能用。

[26:52](https://www.youtube.com/watch?v=ddISeYuDGC8&t=1612s) 錄的時候已經十月。下個月安全主題會續，Simon 提過一位字幕聽成 Laurent Tau 的來賓。Guy 當天稍後要跟 Patrick Debois 談 cloud 那波和 DevOps 那波，跟 AI native 有什麼可對照、若走同一條路可以預期什麼。他說 cloud native 是 AI native 很好的角色模型。DevOps 和 cloud native 對 Snyk 很重要。他們沒有造出一個 security native 的口號，那次改變沒有那麼大，但那些教訓對把安全嵌進開發很有用。他想從那些路程和 Patrick 的判斷，拿來用在 AI native。
