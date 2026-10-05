# Armon Dadgar, Hashicorp co-founder, on AI Native DevOps: Can AI shape Autonomous DevOps?

片長 46 分 11 秒，英文自動字幕。Guy Podjarny 訪問 HashiCorp 共同創辦人 Armon Dadgar，節目是 AI Native Dev，由 Tessl 製作。字幕把 Tessl 聽成 Tesla，把 RHEL 多次聽成 real 或 rail，把 Ansible 聽成 anible。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=jhKNccjrseI)

## 一句話

今天的模型已經能在幾乎沒有你環境的情況下，寫出還不錯的 Terraform，也能把兩萬行收成一段摘要。危險不在它寫得出來，而在你沒說的地方它會自己填。公有或私有的 S3 往往只差一行，模型會往訓練資料裡比較常見的那邊靠。Armon 不把這叫幻覺。輸入根本沒說清楚，測試也判不了對錯。那是使用者的幻想：以為 LLM 讀得懂你的心。下一步是 context。世界上最好的 SRE 進公司的第一天，也不知道你們 production 跑的是 Windows、RHEL 還是 Ubuntu。多數企業連一份機器讀得懂的清單都沒有，OpenSSL 出事時還是開試算表。他看到的三到五年，是規格生成 infrastructure as code，修補和 right-sizing 先在 staging 跑完，再由人按合併，而不是直接去動 production。

## 先看生命週期，再看工具

[1:34](https://www.youtube.com/watch?v=jhKNccjrseI&t=94s) Guy 要的是現代雲端基礎設施怎麼管，先不談 AI。Armon 把工具和流程放下，看基礎設施生命週期裡真正在乎的結果。Day zero：在 hyperscaler 開帳號，做出 landing zone，VPC、vnet、security group。Day one：把應用部署進那片空白的雲。Day two：既有應用要修補，例如新的 Linux kernel。Day three：要 scale up 或 scale down。Day four：安全事件，例如 JDK 漏洞，得做一批 remediation。最後是應用的盡頭，把它 decommission。

[3:03](https://www.youtube.com/watch?v=jhKNccjrseI&t=183s) 技法很多。Infrastructure as code，尤其 Terraform，特別適合 day zero、day one 的佈建，以及最後的除役。Chef、Puppet、Ansible 比較像 day two、day three：修補、remediation、設定。也可以手動點，或用雲廠商的 SDK。生命週期那些點才是根本的。

[3:33](https://www.youtube.com/watch?v=jhKNccjrseI&t=213s) Observability 橫跨整段。多半在 day one 跟應用一起設定 APM，一路營運到 day N；應用除役之後大概就不再監控。部署本身還是可以用 Terraform，和應用同時上去。成本控制、安全態勢管理也類似。Wiz、Palo Alto 這類，字幕把名字聽得不太穩，他說多半 day zero、day one 放進去，活到結束。FinOps 比較像 day two、day three：東西還沒部署，不太知道要花多少。帳單比預期高 30%，才把工具找來問為什麼。

## 沒有 context 也能寫，也能讀

[4:47](https://www.youtube.com/watch?v=jhKNccjrseI&t=287s) 他造了一個會再回來的詞：context-free AI。去 Claude、GPT 或 Gemini，說寫一段 Terraform，佈建一個 S3 bucket 和一台 EC2 VM。它不需要知道你現有的基礎設施。通用的 foundation model 就能吐出還算合理的 Terraform。挑一個現代模型，他說大約 90% 相當好。這是單向翻譯：高層的 intent 變成實作。反方向也行。兩萬行 Terraform，不想讀，叫它摘要。新工程師剛進公司，要管這個應用，與其讀兩萬行，不如先聽一句：這是在 EC2 上部署一個 Java 應用，帶一個 S3 bucket。兩個方向都不需要 intent 或程式本身以外的 context。Day zero、day one 可以少掉很多起手時間。Infrastructure as code 對模型來說就是 code，Java 或 Python 它都用同一種方式懂。

[6:51](https://www.youtube.com/watch?v=jhKNccjrseI&t=411s) Guy 想分開 infrastructure as code 和一般程式。Armon 說 IaC 是極端：Terraform 可以用很少行寫完，複雜度不在行數，而在你剛讀到的東西意味什麼，例如 VPC 怎麼設。環境很容易燒起來。模型在這個領域的知識如何，有沒有工具幫你抓住它生成的、看起來天真的 code。他看到的好處是 Terraform 很精簡、很宣告式，沒有多少命令式邏輯。複雜函式有很多分支和條件，若不懂執行流程和資料路徑，很難知道結果。Terraform 很平、分支很少，模型不必推理資料怎麼流過執行路徑，所以可能做得更好。Guy 補：有些工具把需求寫成 pseudo code 或更簡的 meta language。Terraform 離 pseudo code 不遠，它是 API 之上的語言，選項少一點，生成你要的東西的機會就高一點。

## 公有 bucket 不是幻覺，是你沒說

[8:57](https://www.youtube.com/watch?v=jhKNccjrseI&t=537s) Guy 問後果怎麼讓使用者看見。寫 Java、Python、JavaScript，環境一樣可燃，但你會寫測試，有防禦。若你不懂基礎設施，讓 LLM 生成 VPC，它變成任何人都能存取，你怎麼知道。Armon 說這是他們看到的最大風險之一：模型對安全後果、什麼叫 secure by default，沒有好的感覺。你不能期待它預設就安全。你要一個 S3 bucket，它大概會給你一個公開的。那可能是你要的，也可能不是。可燃性在這裡是一行設定：private 等於 true、等於 false，或你省略了、它預設成 true。好壞的差別不是字元很多、也不是邏輯大錯，是漏了宣告式的 private 等於 true。模型今天沒有適當的語意，不懂安全邊界。一個設定欄位和另一個，對它們一樣重要。發生的是 pattern match：訓練資料裡公開的 S3 比私有的多，它就往公開靠。

[10:41](https://www.youtube.com/watch?v=jhKNccjrseI&t=641s) 他認為要信任一部分輸出，就得在另一側投資安全護欄，做自動化推理。他們常講 policy as code。使用者用 AI 生成 Terraform，你仍要有一套信任的政策當 belt and suspenders。檢查可以說：S3 bucket 必須標成私有。生成了公開的，就叫它再試。人回到迴圈裡，把提示改成私有，或直接改生成的 code。Guy 說這是一般程式裡也在發生的事，被拉到極端。他提過另一集，來賓名字字幕聽成 Caleb SEMA，談過生成的 code 安不安全，很難下很強的結論，因為它不是一件事。極端比較容易感覺到。S3 不是對或錯，是公有或私有，是一個決定，你懂不懂後果，也很容易沒注意到被省略的那一行，或 true 和 false。別的語言也有省略，只是沒這麼明顯。Code generation 是 stack 的一部分。你沒叫它做安全的或私有的 bucket，只說建一個 S3，就不能假設生成的 code 神奇地合用，還得有別的方法驗證什麼對、什麼錯，例如 policy as code。

[12:49](https://www.youtube.com/watch?v=jhKNccjrseI&t=769s) 有人問他，是不是因為沒寫測試；若模型也生成 Terraform 的 unit test 就好了。他說不是。這在根本上不可知。你可能在做行銷網站，公開的圖片就該是 public bucket；也可能在放客戶資料，就該是私有的。輸入根本 underspecified。沒有任何測試能告訴他對或錯，因為他不知道你要什麼。這不是幻覺。Guy 把開場那句接上：不是幻覺，是幻想，幻想 LLM 讀得懂你的心。在 Tessl 他們談 spec-centric development。規格有好有壞：你沒說的，LLM 會把縫補上。你需要工具把模型做的決定標出來，你仍得注意，也許還要 policy as code，看它符不符合公司或你自己的規則。它不會在補縫的時候讀你的心。

[14:11](https://www.youtube.com/watch?v=jhKNccjrseI&t=851s) 中間有個張力。少說一點，讓模型填；說到極限，你等於在寫 Terraform。他要一台 EC2，沒說作業系統，但它一定會跑某個東西：Windows、Red Hat、Debian 或 Ubuntu。你發現不是要的，就回來補：跑某個版本的 Red Hat Enterprise Linux。然後還有大小、區域、可用區。你愈寫，宣告式的輸入愈收斂成 Terraform 本身。能留多少不說，是個平衡。基礎設施裡細節通常要緊。叫它寫 Java 把 list 排序，只要排好了，他多半不在乎；清單很大、結果是 bubble sort，你才會在乎。Context-free 生成的極限在這裡出現。

## 能排序的是程式，不是上線之後發生的事

[15:28](https://www.youtube.com/watch?v=jhKNccjrseI&t=928s) Guy 說 infrastructure as code 裡有大量洞見，但只看 code 看不到後果：它做了什麼，不一定是對的，也不知道後來發生什麼。一般程式可以跑、可以測，模型公司很依賴那些資料來分開好 code 和壞 code。DevOps 和現代基礎設施裡，他不覺得有一份公開的知識體，講可營運性、部署失敗怎麼補、成本、效能、安全特性。這是產業的上限，還是解得開。

[16:35](https://www.youtube.com/watch?v=jhKNccjrseI&t=995s) Armon 看到幾股力量。Terraform 社群有人在寫高品質模組並公開。Hyperscaler 自己會發 landing zone 和常見模式，經由他們的 public registry 和 GitHub 給客戶。同時 Terraform registry 有數萬個社群維護的模組，下載量、版本歷史、更新頻率是有用的訊號。常常更新、比較新、下載超過某個門檻，可以當成還算有品質，再拿那子集去訓練，仍然是很大的一體，數萬個例子。那仍是在給 code 排序，靠的是社群，不是更深的營運洞見。Terraform Cloud 則讓他們看得到哪些 run 失敗、哪些成功，對得上哪些 codebase 和模組版本。連續失敗十次，大概不是好教材；成功率很高的，某種意義上品質較高。

[18:18](https://www.youtube.com/watch?v=jhKNccjrseI&t=1098s) Java 的程式宇宙會比 infrastructure as code 大很多。反過來，IaC 比較簡單、比較受約束、沒有複雜分支和資料路徑，需要的訓練資料可能沒那麼多。文件也很有價值：程式語言的文件常常是很底層的函式，IaC 面向資源，文件是更豐富的輸入。Guy 同意 LLM 比較容易生成 infrastructure as code。陷阱是：它會成功生成能動的 Terraform，那樣基礎設施對不對，是更難的問題。Java 跑測試就看得到。IaC 做得到，可以架雲端環境去跑，他猜也許有些模型提供者在做，但更繁、更貴。雲廠商自己也深深在做 foundation model，他們看得到平台上的資料，用不用來引導，一邊是組織會很不高興，一邊是他們站得住那個位置。Terraform Cloud 也有同樣的問題。他不在這集挑戰這件事。

## 最好的 SRE 第一天也不知道你們的標準

[19:58](https://www.youtube.com/watch?v=jhKNccjrseI&t=1198s) Context-free 的生成和摘要很有用，摘要尤其好，有前面的好處、沒有那些壞處。生成仍要守住門檻和 policy as code。下一步他們已經點過好幾次：context 是今天和想去的未來之間的關鍵。你可能雇到世界上最懂 Terraform 和雲的 SRE，進組織的第一天卻什麼都不知道。Production 跑 Windows、RHEL 還是 Ubuntu。他三種都可能很熟，但組織已經標準化在 RHEL 上，這段 context 才讓他有用。你的 stack 是 Windows，他開始寫 Linux，幫不上。他得知道組織怎麼運作、標準化了什麼、現有基礎設施長什麼樣，生成的東西才跟環境有關。這個「知道或不知道我的環境」，延伸到生命週期的每一點。

[21:24](https://www.youtube.com/watch?v=jhKNccjrseI&t=1284s) 就算 day zero 只說給我 S3 和 EC2。SRE 若知道這是 production 的計費應用，就有幾個後果：大概不該公開，你不必再聲明 bucket 是不是 public。若已經標準化在 RHEL，他也不該再問作業系統。Assumption 這個詞很重要：你希望模型做的那組假設，要變成顯式的。從 production 環境、法規（計費應用也許要 PCI）、作業系統，到區域，永遠在 us-east-1 或永遠在某個區域。

[22:18](https://www.youtube.com/watch?v=jhKNccjrseI&t=1338s) Guy 問這是坐下來訪問首席架構師，還是自動發現。粒度是主要技術棧和 best practice 就夠了 99%，還是魔鬼在細節，要懂這個組織的微選擇和應用之間怎麼互動，才比得上一個好的 DevOps 工程師。Armon 覺得大多是 80/20：80% 的價值在於把 20% 的假設寫成明文。對多數人就是雲廠商、區域、作業系統，以及你說要資料庫時，是 MySQL 店還是 Postgres 店。核心技術棧大概十來個關鍵變數，若弄清楚，大概是你在乎的表面積的 80%。最後 20% 會變得非常細、跟每個應用有關。高頻交易有一整組很特定的後果，那個工作負載很獨特，不代表大多數。多數是三層式 Java，有些空白填了也沒關係。高頻交易才會真的在乎效能、延遲、尺寸、作業系統。那些變數很重要，但只屬於那個工作負載。

## 清單不存在，模型就沒有輸入

[24:00](https://www.youtube.com/watch?v=jhKNccjrseI&t=1440s) Guy 問有沒有人走到底：把 observability、Terraform state、部署環境和歷史都檢視過，微調一個本地模型，而且對準你的目標，例如你要降成本，它就照那個選。聽起來像新創會做的方向。大公司或既有廠商有沒有試。Armon 說還沒有。這接到 context 的第二個挑戰：缺的是把基礎設施真正的樣子 normalize，讓它變得 legible。Code 是版本控制裡的一個扁平文字檔，要知道的都在那裡。基礎設施某種意義上活在真實世界、雲的世界。它在跑，有各種短暫的屬性，有累積了幾十年才出現的性質。怎麼讓 LLM 讀得懂。缺的是用一致的方式盤點，再適當地向量化、分類，讓模型能有結構地推理。人很會處理這些環境的含糊和複雜。你不能叫模型登進 AWS console 點一圈，弄清 production 長什麼樣。Guy 說也許人做得到，但信任和爆炸半徑會擋路，可燃性又回來了。

[26:10](https://www.youtube.com/watch?v=jhKNccjrseI&t=1570s) Guy 挑戰：跟模型參數、理論上數十億種語言比，這仍然很小。若資料夠多，模型也許接得上那些鬆散的線。資料不公開，就沒有龐大的語料讓它們來接。一個組織的資料可能不夠。Armon 說實際更糟：不是資料不公開，是多數組織自己沒有。很真實的例子是 OpenSSL 漏洞。他們跟數千家企業合作，絕大多數遇到這種事，是開一張試算表，手動盤點應用、哪些在 production、上面是哪個版本，再手動修。那就是起點。有人手動做出試算表之前，給 LLM 的輸入不存在，只是有東西在跑。

[27:24](https://www.youtube.com/watch?v=jhKNccjrseI&t=1644s) Guy 覺得這很挫折。資料技術上存在，在 API 能碰到的系統裡。技術上也知道怎麼把相當無結構的資料接起來。難的是資料的所有權，以及誰有權去做那件苦工。沒有很大的量，接不起那些點，就得退回 normalize，事先列出所有變數，而變數多到列不完。Armon 不覺得無解。第一步是把資料拉出來，用說得通的方式讓人查。一個表示：在跑的資源、上面的套件、應用版本，再標 production、staging、development。於是有 metadata：應用、環境、資源怎麼連在一起。某種意義上是 knowledge graph。從 production 走到應用，走到那 50 台 VM，再走到上面的套件。基礎設施從「有東西在跑」變成可查、LLM 能以比較有結構的方式互動。然後才能回答一組開放的問題。前面大約十個變數問人，其餘從圖裡推。圖上 90% 在跑 RHEL，大概可以推論已經標準化，不必問。沒有那張圖，只有 VM，你不知道那 50 台上面是什麼，推論無從做起。有了之後，使用者體驗可以簡化，不必列舉所有假設，模型也能做更進一步的推理：某個應用受 OpenSSL 影響，是因為那些關係存在。

[29:48](https://www.youtube.com/watch?v=jhKNccjrseI&t=1788s) Guy 說，若你手邊已經有接近這種資訊，你管理現代基礎設施本來就相當好，大概在很前面。這可能把差距拉大：讓已經好的變得更好，拖不動原本不好的。除非有人做出自動的東西，接上這些 API 並分類。安全裡已經在發生。他說的是安全態勢那一類，字幕聽成 csbm、dbm。很多至少從態勢這一個鏡頭，靠自動發現你的資產、做分類，大致正確，再由人補。也許可以從有清單，跳到 AI 分類，再在上面做 AI workflow。Armon 說技法很多，重點是收在一起，並幫這些組織跨過他們很多人都有的 skills gap。若你已經有這一切，他會說你輕易就在成熟度的頂端百分位。怎麼把鐘形曲線的其餘部分帶上來，才是問題。

## 規格往上走，修補仍先停在按鈕前

[31:11](https://www.youtube.com/watch?v=jhKNccjrseI&t=1871s) Guy 問五年後的 AI native，自主的 DevOps：修補這類事能不能自動做。是五年還是二十年，以及怎樣算初步成功。Armon 看五年以上，會在幾個維度演進。一個是規格的層次。原始的雲端 API 和 SDK 像組合語言，直接呼叫去建 EC2，非常低階。Terraform 像往上走到 Python：我要一台 VM，怎麼建、怎麼管、底下大約二十個 API，是它的事。再上一層，他甚至不想寫那個 Python，只寫規格：這是 Java 應用，需要 MySQL、需要 S3。它生成 Python，他可以審、可以改，但不必親自寫。那把他和組合語言隔開。

[32:40](https://www.youtube.com/watch?v=jhKNccjrseI&t=1960s) 這帶來的是 day two、day three、day four 有多少能自動化，而不打破你給的契約。契約是這個 Java 應用加 MySQL。Day two 他可以看 JDK 的 CVE 清單，知道有漏洞要補。自動訂閱漏洞或 Linux、JDK 的新版本。核心應該是：拿應用、拿新的 OS 和 JDK，部署到 staging 這種較低的環境，看 observability。Unit test 過了，指標在某個餘裕裡一致，就準備好交給人：修補做了，code 的變更在這，測試和指標的差距在這，看起來正常，大約加減 1%，要不要按按鈕合併到 production。這種系統給人控制和信心。不是說我去自動修 production，也許把你的宇宙炸掉。若你說了一百次可以、從來不必說不，也許就讓它在某些條件下自動走。也可以分級：核心銀行別動，手機 API 隨便。信心是隨時間累的。

[34:21](https://www.youtube.com/watch?v=jhKNccjrseI&t=2061s) Day two 替世界上每個應用修補，他想其中大概 99%，若不是 100%，可以自動化。只這一件，修補和漏洞管理，價值就很大。Right-sizing 也是。他没遇過真的把任何應用的尺寸調對的開發者。很煩：部署、看 telemetry、試另一個大小。誰要做。可以自動試，也許該是 5 台 VM 不是 10 台，逐步刪、看有沒有壞。若 AI 說你利用率不足，CPU 2%，我從 10 台調到 5 台，而且守在護欄裡，例如 CPU 維持在 50% 以下，你在乎嗎，大概不。這種 day three 的尺寸和成本，大概可以全自動。Day three、day four 很多是這類。Runbook 也是：從 Datadog 看到 log 把磁碟塞滿，就自動跑 Ansible 清 log，不必先來告訴你。

[35:35](https://www.youtube.com/watch?v=jhKNccjrseI&t=2135s) Guy 覺得這像一個現代新創可以把自己架成去自動化這些流程，比一個已經有環境的企業容易。類似 infrastructure as code：從一開始做，位置會很不一樣。一旦漂移發生，甚至不是漂移，只是手動做了一堆，要收回來很難。也有 AI 新創在做：讀 production 的狀態，生成 infrastructure as code，仍要人驗證對不對。他喜歡那個終點，也和 Tessl 對齊。一小組東西：一份規格，說你要做什麼，並說多少自由度留給它決定、多少由你指定；然後是生成 code，Terraform 比別種 code 更做得到；部署之後，關鍵是能驗證、能看見沒有壞。有趣的是，這個世界的 best practice 不是把每個變數都預料完，也包括 canary：先加到一小部分流量，看沒有明顯偏離，再繼續。很多是既有的、在規模上的做法，難的是你沒有全部做的時候，塞不進去。那有點像數位轉型，比較難淺淺地試。

[37:30](https://www.youtube.com/watch?v=jhKNccjrseI&t=2250s) Armon 說這完全對。有和沒有的差距會變寬。在 ITIL、工單驅動、手動流程裡長大的企業，會更難。一開始就是 DevOps 或 infrastructure as code 的，跳進他描述的世界沒那麼難，因為積木相同：高層規格生成 IaC，IaC 也能幫忙合成更高層的意圖。若起點是沒有意圖，一堆工單造出一堆基礎設施，外面有工具能反向工程，永遠缺的是 intent。分不出環境裡哪個性質是意外、哪個是故意。S3 公開是弄錯了，還是你就要它公開。幾乎沒辦法。像把 Humpty Dumpty 從一千片拼回去，卻不知道 Humpty 原來長什麼樣。很多大企業沒有人知道，因為這套基礎設施跑了 30 年，當初佈建的人退休了。Guy 說好消息是 AI 也能稍微幫忙，自動分類、學到一些，但那是必須發生的過程。

[38:49](https://www.youtube.com/watch?v=jhKNccjrseI&t=2329s) 他們把時間線畫出來：現在是 AI 生成的 infrastructure as code 和摘要；上下文化感覺沒有很遠，至少基礎那層；再往後才是比較原生的自主流程，而且可能得所有零件都在才做得到。Guy 問今天的 SRE 和五年後的差別，他覺得五年已經很實質，不必想更遠。Armon 說他們談的很多是三到五年，不是二十年。

## 槓桿變長，抬的石頭也變大

[39:15](https://www.youtube.com/watch?v=jhKNccjrseI&t=2355s) Infrastructure as code 對很多 SRE 做過的事，是把你從工單佇列的接收端、手動編排，移到真正的工作：設計、評估結果，再翻譯成 IaC、自動化和 pipeline。這件事是給那些人一根更長的槓桿。若你已經認為工作是設計、評估、優化，槓桿會長很多。若你認為工作是寫 Terraform，或執行基礎設施的動作，其中一些會被拿掉。就算今天，也不該再手動開工單、用手改防火牆規則。產業裡仍看得到很多。工具已經在。下一層是：你還該不該寫 infrastructure as code，還是只管理那組 intent 和規格。

[40:39](https://www.youtube.com/watch?v=jhKNccjrseI&t=2439s) 技能上仍然相關的，是你得懂領域。防火牆是什麼、VPC 是什麼，以及模型可能沒那麼懂的那些跡象。公開的 bucket 不如私有的安全，也許很基本，但還有更多。有價值的是 SRE 的領域知識，然後把焦點放在用自動化幫業務達到結果。基礎設施到頭來沒有人把它當目的，它是手段。你站在那個角色上問：我交付的是手段，讓業務交付應用或運轉，怎樣用自動化、把規格抬高，再用領域知識確保安全、合規、划算。這個世界就變成更長的槓桿。

[41:28](https://www.youtube.com/watch?v=jhKNccjrseI&t=2488s) Guy 說他們在節目裡談過應用開發者的兩條路：一條走向產品、懂業務要什麼，一條走向架構、看更高的層。SRE 可能兩條都得走，因為很多工作匯在一起。要有領域專業，用架構的方式看，靠主題知識做取捨，也要懂業務現在的倡議和軌跡。他希望對很多人是正向的轉變，但對骨子裡是系統管理員的人，又是一跳，而且離原來更遠。Armon 覺得公平。最好的 SRE 其實就是 PM 和架構師的某種組合：把業務的需要翻成架構，再翻成基礎設施這邊的路線圖。應用開發裡，PM 更面向使用者和客戶，和架構師分得比較開。基礎設施的使用者和客戶是內部應用，架構師和 PM 很大程度上是同一個人。對系統管理員，這些工具的學習曲線他預期會比從系統管理員跳到 infrastructure as code 低。那一跳得學一套語法、工具和流程。走向 AI 驅動，會更像自然語言。躲不掉的是：你的價值仍是懂一個寬很多的領域。若你只做系統管理、改防火牆規則，你懂的領域很小。你大概不會要一個只懂防火牆規則的架構師，太窄。槓桿變長，他也期待你抬起更大的石頭。

[43:34](https://www.youtube.com/watch?v=jhKNccjrseI&t=2614s) Guy 補，用資料驅動、懂更寬的後果，變得很重要。甚至要對模型會犯的錯有一點直覺。AI 做更多動作時，不讓自己出事有兩條：一是用資料觀察，這個技能要比今天更利；二是預先感到麻煩，像有經驗的人會覺得這個配置系統不會喜歡。也要感覺模型在那些時刻會怎麼回應。Armon 說很多會落到流程設計。若你的測試就是部署到 production，你對一整類錯誤都沒有防禦。若比較有紀律：先到 test，再到 stage，再到 prod，每個環境都有資料驅動的驗證，或在 staging 做流量影子。那種流程設計會擋住很多模型會犯的錯，在更早的階段抓住，而不是 YOLO 上 production、在 production 才發現。人寫 code 也有一定的錯誤率，不會全抓到，所以才有 staging。壓力會更大，得更嚴謹。有些組織真的做得好，很多則相當隨便。Guy 的正向講法是：這更關於自動化的流程，更多步驟可以自動通過。希望是 LLM 拿走苦工，但它們要求我們更懂自己要什麼，並定義達到它的方法。Armon 說，正是這樣。
