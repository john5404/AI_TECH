# DevOps with AI: Identifying the impact zone, with Roxane Fischer

AI Native Dev 這一集，由 Tessl 贊助。來賓是 Roxane Fischer（字幕聽成 Roxanne），Anyshift 的 co-founder 兼 CEO。片長約 28 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tessian、Tessi，把 Snyk 聽成 Sneak，把 Claude 聽成 cloud。主持人的名字字幕沒有說。

- 原片：[YouTube](https://www.youtube.com/watch?v=eOTSG8UXGaw)

## 一句話

大家把 AI 用在寫 code、review code，DevOps 和 CI/CD 裡還有一大段沒被用到。Roxane 的分別是：同一種 LLM，synthesis 是從已經存在的大量資料裡找 pattern，generative 是在開放世界裡生出新東西。Infrastructure 訓練資料少、又敏感，生出來的 Terraform 容易 hardcode、缺政策。她要的是兩根柱子一起：一張 deterministic 的 graph，加上 AI 拿這張圖做查詢、解釋和 remediation。

## IaC 的訓練資料不夠，生成就會漏

[0:46](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=46s) 她是前 AI researcher，在 fintech 公司以及 Samsung 做過 vision 和金融資料。創業時遇到共同創辦人 Stefan。他前一家公司做 driftctl，後來被 Snyk 收購。字幕把公司聽成 Cloud Shift、工具聽成 Drift CTL。Anyshift 才開始幾個月，想補上 DevOps 和 AI 之間的缺口。她把產品說成接到 cloud 的一張 graph，提高 DevOps 日常流程的可見度。

[2:40](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=160s) 主持人問，是不是在 code completion 和 coding assistance 上轉太兇，pipeline 其他地方用得不夠。她覺得 GenAI 很好，也該用，但它讓 code 以指數增加，legacy 也生得更快，reviewer 卻有限。Review 變得更關鍵，Infrastructure-as-Code 更難，因為 infra 的測試層不像 application 成熟。所有權也變淡：團隊有時不記得自己生過的 code。

[3:48](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=228s) Terraform 相對新，她說大約 10 年。GitHub 上公開的 Terraform modules 只有大約一兩千個，字幕聽成 models。拿去訓練做 completion 的那些 generative model 的資料，比 Python、Java 少很多。沒人願意把 infra 明文放上 GitHub，太敏感。所以 IaC framework 的生成不會有其他框架那麼好。

[5:23](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=323s) Model 靠大量資料學 pattern。資料不夠，就不會是你期望的那種生成。他們在 sandbox 裡請 GPT 做兩條 VPC 之間的 peering。它做得出來，日常也有幫助。Context 不夠時，VPC 的值會被 hardcode，metadata 會缺，auto-accept 會缺，tags 也會缺。那些東西本該對上公司政策：infra 要一致、tag 要一致，免得以後出錯。Hardcode 的 dependency 會把未來的 outage 打開。使用者得自己把對的資訊餵給 LLM，讓輸出不只準，還和你要建的東西有關。

## Synthesis 是找，generative 是生

[6:43](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=403s) Synthesis AI 是她用來分開兩種用法的詞，文章裡也有人這樣講，背後技術相同。Synthesis 的輸入是 logs 和其他 metadata，要的是洞察：更快的 root cause analysis，從成千上萬條 log 裡走過去。Generative 的輸入也有，但目標是生出東西，例如一段特定 configuration。開放世界什麼都能生，指令就得非常精確。Garbage in, garbage out。她認為 synthesis 比較成熟：吃進大量資料、找 haystack 裡的 needle，找到的是已經在某處的資訊。Generative 仍然缺 context。

[8:40](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=520s) 主持人把它聽成一條流水：synthesis 把巨量資料煮成洞察，再交給 generative 去生，免得把整包 context 丟給不擅長長 context 的 LLM。她說可以這樣串，也可以給別的 context window。實作上，synthesis 用 GPT 的方式和生成一樣，只是 prompt 換成：把我的 logs 當輸入，找出某一項 configuration 的關聯、連結、可能的問題。這和 RAG，Retrieval Augmented Generation，是同一原則。先把 logs、文件或其他資料做完處理，encode 進 latent space，再查。處理完之後，查大量資訊會快得多。

## 機率模型旁邊，要有一張確定的圖

[11:17](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=677s) GenAI 是 probabilistic。呼叫 LLM 會給答案，但答案帶著機率，本質上不能 100% 確定下次相同。Deterministic 演算法則是同樣輸入、永遠同樣輸出。要有品質的內容，兩者都要。Cloud 上有成千上萬的資源和 configuration 時，你確實知道的那份 deterministic context，和拿它來生洞察或生 code 的 LLM，一樣重要。

Cloud resources、Kubernetes 那些東西，連接方式就是一張 graph。VPC 裡面是 subnet，還有 IAM，全部是連在一起的 nodes。回到 VPC peering：要生出沒有 hardcoded value 的最佳實踐，得知道要參照的其他資源在這張圖的哪裡。沒有這份關於自己 infra、自己文件的 context，LLM 什麼都做得來，同一顆 model 可以生 pattern code、Infrastructure-as-Code、文件，較小的專門 model 也仍然很強。複雜問題要精確答案，就要精確 context。你可以在 prompt 裡把每件事重講一遍，那幾乎等於自己寫。或者把 deterministic 的企業知識接進去當輸入。

## 出事時怎麼查，以及人還得擁有這段 code

[14:58](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=898s) 部署或 infra 出問題、log 很多、要做 root cause 時，她說看你是哪一種團隊、接了哪些輸入，資訊越多越好。Logs、metadata、cloud、API、社群，甚至客服。前端 laggy 是一段投訴文字，要和 latency 的 logs 對上。把異質資料接進 model、找回關聯，她認為是這些 model 最大的強項，所以 synthesis 這條她覺得已經 ready。有些工具很會做 root cause、很會讀 log。真正的工作在基礎設施：pipeline 裡整合什麼，整合完怎麼 dump、encode、再查。她點名聽過 Cluvio，字幕補了一句 That's IO，她沒用過，覺得應該不錯。Datadog 這類大廠也在用 AI 讀 log。Kubernetes 上還有不少新創在做。

[17:18](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=1038s) 主持人問，開發者越靠 AI 生 infra 和部署產物，會不會把 production 推遠、把 ops 丟給 AI，所有權更薄。她覺得這是問題，也是好處。她說他們超過 50% 的 code 由 Claude 生成。主持人後來複述成 50%，並說有人、他猜可能是 Google，最近講過 25%。她沒有清楚答案，自己也在想。人變得太有效率，就記不住做過的每件事。她認為需要更多 safety net。Prompt 很差或 model 不夠好時，可能生出對所有人開放的設定，那是很糟的做法。因為是機率的，你不能 100% 依賴它，她要人去看 Snyk 這類檢查，擋住攻擊和壞設定。效率更高，仍然要擁有自己的 code，記得推了什麼、為什麼推。連哪一行是生出來的都不記得，就是問題。

## Impact zone：圖怎麼畫，查詢才問得動

[20:02](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=1202s) 她相信 AI/DevOps 的未來是兩根柱子：AI，以及偏基礎設施的 determinacy。Infrastructure 是 graph，cloud 資源、不同 provider、DNS 都連在上面。要幫 DevOps 生內容、也要做 remediation，兩根都要做。Determinacy 這側是圖，然後用 AI 查詢和修復。

Schema 怎麼畫，決定你怎麼查。VPC 和 subnet 可以用一條 edge 連，也可以因為 tag 相近而連，例如都是 data team。給 SRE 做 remediation 和 code generation 之前，得先有這張圖、這個 schema，再查。她舉的查詢是：這台 EC2 過去 24 小時的所有 dependencies，以及擁有它、做出那次變更的團隊。Schema 得適應這種又特定又全局或局部的問題，才能又快又準。Schema 是他們自己定的，價值在於知道 infrastructure 怎麼運作、之後怎麼查。有趣的是，schema 就位之後，他們也用 AI 把資料填進這張圖，讓開發更快。

[22:55](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=1375s) 任務是把可見度還給 SRE。有些簡單問題現在仍然難答：這個資源在 code base 的哪裡被定義、誰擁有、dependencies 是什麼。範圍跨 cloud、Kubernetes、DNS、data provider。做法是做 infrastructure 的 digital twin，類似 resource catalog，用查 graph 來回答。他們從很 shift-left 的地方開始，類似 Snyk 和其他工具：問題發生前先擋，或至少在部署前讓這次變更更看得見。接進 pull request。你一改，就查這張 dependency map，多給 context：你改了這個 module，會影響其他資源或 repository，真的該改嗎。AI 用在教育內容上，接近她說的 synthesis。圖和 dependencies 很複雜，團隊對整份 infra context 的掌握變少，就要用 AI 解釋發生了什麼，以及基於這份 context 的 explainability。

現在就可以訂閱、在平台上試。他們先做的是 graph 的 deterministic 那一塊：一次變更的 dependencies，也就是 impact zone。

[25:30](https://www.youtube.com/watch?v=eOTSG8UXGaw&t=1530s) 內部兩邊都用。他們寫 Go，不是每個開發者都熟。LLM 是很強的翻譯，但你最後得精確知道自己要什麼。它會做出你需要的 80%，然後你得 review，開發因此快很多。這是現在開發者都在做的。他們更有意識的另一段，是自動把 code 和內容送進 LLM，用來生成那張 graph。

她的建議像做遞迴：先有 test case 一、test case 二，才有 n+1 的迴圈。要很精確地知道自己要做什麼，才看得見 edge cases，才問得準。直接丟給 model、期待魔法，有時真的會發生。要做大規模，就先盯 edge cases，弄清你要的輸出，再看 pattern。主持人確認這仍然很刻意。她說是，但一切都在 coding 裡，兩個月後這些話可能就不適用。主持人謝謝她，並說頻道上會有 AnyShift 實際運作的影片。
