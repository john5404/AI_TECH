# Reliable DevOps Agents for a Self Driving Infrastructure with George Fahmy

George Fahmy 從埃及開羅連線。主持人 Dion 把舞台交給他。他寫 code 十年，在幾家新創當過 founding engineer，做基礎設施和安全，也教人寫 code、做基礎設施。片長約 38 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=zaZOTMb9BLo)

## 一句話

模型寫普通 code 還行，寫基礎設施很糟，因為 DevOps 是冷門的 DSL、會一直變的設定、很慢的回饋，而且 context 多半在遠端。他要的自駕基礎設施不是《Doctor Who》裡取代人類的 Cybermen，而是一群要人引導的 minion。有些部署今天就做得到。能不能半夜放心睡，取決於你量不量得到終點、可靠度、步數和成本，而不是它有沒有一次成功。

## 三種人互相卡住，抽象層又在漏

[1:23](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=83s) 他們從創立以來每年訪談數百位開發者、軟體工程師和工程主管，字幕裡公司名聽成 stack。回饋被他收成三個人。DevOps 覺得開發者不懂系統內部、不懂那些工具、不懂他們把 app 部署上去的複雜基礎設施。平台工程師厭倦把大部分時間花在支援票，而不是做能省成本、或讓開發者好過一點的平台工作。開發者則覺得優先順序對不齊：他們要把功能送出去，基礎設施團隊要搬去 Kubernetes。內部開發者平台和各種抽象沒有把這個痛停下。

[2:47](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=167s) 難在有幾百種 DSL、參數、語言和 schema。他稱為 DSL hell。YAML 像一種資料語言，但設定這些工具有幾百種寫法。你不是在寫程式，你是在設定別的工具，而工具內部怎麼運作幾乎是機密，你得知道才寫得對。真正懂的開發者是少數。他很少看到有人懂全部，總是只懂一個子集。抽象幾乎都漏。Kubernetes 上給 pod 設 limit，那是分給工作負載的資源契約，開發者以為平台會遵守。然後 pod 因為記憶體用完被殺掉，他們連不上這和 limit 有關。底下那層，他說是 kubelet 在跑容器，超過限制就殺。人得把內部記在腦子裡。Cloud Native Buildpacks 很好，內部 Dockerfile 可以重用，卻因為角落案例很少真的能用。Terraform 也一樣：Google Cloud 一次突然的 API 變更，弄壞了很多對 Google 的 Terraform。

[4:56](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=296s) 實務上的抱怨是：LLM 寫 code 還可以，寫基礎設施很差，而那是設定裡最糟的一段。有人發文，一個月後投降：當 agent 能設定 Docker、接上 CI、把 app 部署出去，AGI 就算到了。這些是意見。有一篇論文指出它們不擅長 DSL 和設定。流行、多年不太變的語言它們很強；長尾的 DSL 和不流行的語言就不好。論文裡兩組資料比新知識和舊知識，新知識表現很差。DevOps 正好是這個混合。

[6:15](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=375s) 和寫 code 比有四個差。回饋迴圈：coding agent 有人在迴圈裡，改完就能驗證、很快再迭代。DevOps 常常要在 AWS 上開虛擬機或資料庫，至少等 15 分鐘才知道參數對不對。使用者知識：寫 code 的人對手上的任務很熟，不到 3% 的開發者是這類基礎設施的專家，也不到 3% 全職在做。語法：程式語言流行、語法和功能很少變；DevOps 工具變得快，設定語言是在設定那些工具，工具愈多愈難。Context：寫 code 多半在本機，能跑或能 mock。DevOps 的 context 多半在遠端，bucket、AWS API、帶著特定參數跑在 production 的 Kubernetes，本機沒有。所以 agent 會沒力、打轉、做不完。這是他們過去幾年的分析。

## 自駕是一群 minion，有些事今天就發生

[8:12](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=492s) 很多人把自駕基礎設施想成 Cybermen，更有效率、把人推開。他看到的是 minion：隨機的 agent，有時吐出胡言、做可笑的事、走來走去，但被引導時能把工作做好。想基礎設施上的 agent，請想 minion，不要想賽博人。

[9:10](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=550s) 理論上至少要四種能力。Agent 全天工作：背景維護、處理支援票、即時調系統，不必有人 on call。技術無關：不在乎用哪個工具或哪家雲，跨提供者和技術編排。動態的平台介面：像 vibe coding 能很快做出簡單介面或複雜原型，內部工具也該跟著使用情境變。這是在修今天內部開發者平台的靜態抽象。產品經理和開發者改不動開發者期待平台演化的速度，這件事可以自主發生。最後是成本和擴展裡還沒有的智能。工作負載在 Kubernetes 上，監控發現它更適合 serverless，就在一段時間內以零停機從 EKS 搬到 Lambda，因為那是更合適的運算。成本會大幅下降。人不必再在乎底下的運算平台。搬去 Lambda 再搬回 Kubernetes，或縮到零，都可以自駕。

[11:49](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=709s) 實際例子不是瑣碎維護。Kubernetes 大約每三個月一個版本。若一两年不升，就得一次補完。你叫它把 EKS 升到最新版本。它要排出順序，不能同時做。用 Terraform 這種基礎設施即程式碼會失敗，它不會自主做這種漸進升級。Agent 進叢集、讀版本之間改過的文件、遷移工作負載、測試、升 API server，直到最新。可以過夜，不用盯、不用一直教它怎麼修。Agent 擅長的是為一個目標走出還沒鋪好的路。

[13:03](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=783s) 另一種是有智能的抽象。防火牆已經變成高階意圖。資安工程師問：哪裡的規則允許所有進站流量。AWS 叫 security group，DigitalOcean 叫 firewall，Google Cloud 也叫 firewall。它要能翻譯、在混合雲上彙總，不必先定義死板的抽象。再一種是人睡覺時它繼續試。Buildpack 和 Dockerfile 範本不是每個環境都適用，因為應用不一樣。它要容器化、做計畫、列清單，不只吐出 Dockerfile，還要建映像、跑起來、測 health check。他秀的畫面裡，它讀 compose、測正在跑的 Dockerfile、在本地拉起資料庫、設變數和密鑰，確認 app 好了才交出最終 Dockerfile。設定要被驗證，不是只被生成。

[14:50](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=890s) 這和隨便 vibe deploy 不同。現有 coding agent 已經能在各種環境上 vibe deploy。難的是在你自己的雲帳號、你自己的基礎設施上做，而且跟著安全實務。他叫它在 AWS 上部署、設定 TLS、把一個網域指過去。設資料庫時，密碼不是明文吐在終端機，而是寫進檔案，再用那個檔把密碼加進 API，密碼夠長，有 TLS，也有 systemd，機器重開會再起來。Ray Myers 把這叫 vibe ops。細節多到開發者腦子裡同時放不下。他說這不是未來，DevOps agent 今天做得到。問題是夠不夠可靠，你能不能在它零停機升級 Kubernetes 時睡覺。

## 先定義 agent，再把思考和工具拆開量

[16:39](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=999s) 他們實驗裡最簡單的一隻叫 Norbert，裸體的 minion。它思考，然後在兩個動作裡選一個。兩個是最少，因為要有選擇，也可以有很多動作。做完要影響外部世界，要能觀察後果，才能迭代。第三件是可量的終點，否則很難說它做完沒有、成功沒有。不是每個領域都容易。容器化、部署、除錯，他們能用確定的方式驗證。生成文件或寫作就難得多。有終點，可靠度才觀察得了。

[18:16](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1096s) 可靠度拆成思考和動作。思考是觀察到記憶裡那份被蒸過的外部世界之後，選哪些動作、什麼順序。動作本身的好壞會大幅影響 agent。工具愈多，愈難湊出對的組合，像人的選項太多會決策疲勞。他們要的是可靠的思考，和可靠的工具。

[19:17](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1157s) 文獻裡成功有三種量法。終點最直接：app 跑不起來、Kubernetes 沒遷成、ECS 沒部署、沒容器化，就是失敗。終點一直失敗又不知道為什麼，就拆子目標。最複雜的是動作軌跡：給定記憶或狀態的快照，這一串動作對不對，起點可以固定。他們做了很多終點和子目標，軌跡還沒開始評，但在路線上。不同基礎設施任務有很多共同子任務，值得看那些子軌跡。

[21:03](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1263s) 指標要夠通用，別的領域也能用。pass@k 是給 K 次嘗試，至少成功一次的可能性。pass@1 是一次就成。pass@4 是四次裡至少一次。這問的是做不做得到，不是每次都可靠。十次裡成功一次，不代表每個使用者每次都會過。關鍵基礎設施承受不了。所以還有 pass^k：K 次嘗試裡 K 次都過。四次都過，比至少一次難，量的才是可靠。步數也要量。步數愈多愈容易幻覺，也愈久。從失敗的部署恢復、回滾、或確定性系統本來就能可靠做的事，agent 快點做完才是好事。若不壓縮狀態或 context，步數把 context 吹大，它會忘掉目標。他比成在 minion 前面晃香蕉，它會丟下任務去追。成本是成功要花多少。容器化可能跑 15 分鐘，成功率 50% 就可以過夜跑十次。若容器化一個 app 要 2,000 或 10,000 美元，就不划算。問題本身的成本也是問題：三年的現代化，agent 能不能把時間砍下來、砍下來之後值不值得。字幕把縮短後的時間聽成 80 months，這個數字不另解釋。

[24:26](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1466s) 他們最早的一張表，任務是在 AWS 上部署有狀態的全端應用，帶著 TLS、安全密碼、私有資料庫、由下而上的 security group。應用和技術棧盡量散。量了 pass@1 和 pass@4，還加了部署時間這種專用指標。通用指標之外可以加很具體的東西。兩個結論：有的任務成功率又高又快，幾乎像確定性的，不必再優化。有的 pass@1 很低，pass@4 高很多，他說從 50% 到 93%，字幕中間先蹦出 39。容器化這種不那麼關鍵的，可以過夜重試，每次大約一小時。他自己部署這種 app 要四小時。不是每個應用都付得起多次嘗試。關鍵的時候 pass@k 會誤導，要用 pass^k 看它是不是穩定，而不是一次幻覺就把基礎設施做壞。

## 沒有公開資料集，工具要少而強

[26:28](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1588s) 這個領域幾乎沒有公開資料集，有的也很舊。他們先彙整 GitHub 上的開源基礎設施 code。多數很舊、品質不高，也不代表現實，因為設定通常在私有 repo，被組織看得很緊。只能當提示。然後做合成資料：跑 agent、生成 code、拿來建 eval，意外地好。複雜任務連人都沒有 100% 成功率。合成資料大約 70%，他說若給人同樣的時間，成功率大概也是這樣。品質最高的是真實客戶支援案例，研究之後再做出有引導的合成資料。評測集總是先用手工案例播種，處理角落，品質最高、數量最少。

[28:06](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1686s) 上了 production 之後，LLM 的可觀測工具他覺得差不多。他們當時用 Langfuse，字幕聽成 length use。它給工作流和 agent 的 trace：prompt、順序、輸入輸出。出錯時從 production 抽出樣本，加進手工的評測點。這不只是看 production，也是把評測資料磨利的飛輪。

[28:50](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1730s) 工具那邊他們主張少、但品質很高。這比很笨的工具讓 agent 聰明得多。與其走 20 步才得到結論，不如一步做完，context 不會爆，也把工作交給更強的流程。評工具比評 agent 拗：資料比較好做，成功標準卻每個工具都不一樣。取 context 時他們用 recall，因為要優化的是從環境裡撈回多少相關的基礎設施，好回答問題或做外科式的修改。Terraform 不能只看 code 好不好，要能在 production 套用。他們的指標是 zero-shot 的 terraform plan 成功率：code 拿到 sandbox 裡試著 apply，或至少對那個環境做 plan。他覺得這對 Terraform 生成目前已經是夠高的門檻。每個 tool call 都要自己想怎麼評。可以先做最低的果子，分數上去之後把目標再調難。

[31:06](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1866s) 他喜歡科幻，引了 Isaac Asimov，字幕把姓聽成 Kazimov：曾有一段時間人類獨自面對宇宙、沒有朋友，現在有生物幫忙。這些 minion 對乏味、痛苦的基礎設施工作很有用，也好笑。把牠們管好，人才能睡得著、重新享受寫 code。想談 agent eval 可以找他的 LinkedIn。

## 信任來自看它怎麼想，也來自它承認做不到

[32:52](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=1972s) 主持人問過強化學習。George 說一定考慮。思考最難的是在對的時間選對的工具，強化學習的政策可以用成功的執行來優化選擇。難的是獎勵函式要優化成功率。有的論文把終點和過程混在一起，用加權和同時看子目標和終點。還需要很多好資料。他們正在做。主持人想像 minion 在隔離的世界裡試、像 DevOps 版的 AlphaZero。George 說有趣但很慢。他們有雲上的 sandbox，有一座 minion farm，agent 在裡面自由跑，一個任務有時 15 分鐘、長則 60 分鐘，慢到很難產生夠真實的資料來更新。

[34:31](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=2071s) 怎麼信任到可以睡覺，而不是凌晨兩點擔心它。他們還在摸。有用的一件是把思考過程給開發者看：它怎麼得到結論、怎麼打算完成。除錯時他們自己看的 trace，愈多給使用者，信任愈長出來，期待也比較準。當你看見它考慮到你沒想過的角度，例如密鑰放進加密檔而不是明文，你會覺得它比想像中可靠。另一件是把基準公開。去年第一次推出 agent 時，他們附了一張大表，寫它擅長什麼、什麼很糟。有一列是部署不了 Supabase，多次嘗試成功率仍是零。讓人知道哪些情境有在優化、有在評，哪些還沒被好好探索。

[36:10](https://www.youtube.com/watch?v=zaZOTMb9BLo&t=2170s) 沒做過 DevOps 的人現在該不該進來。他說該。很多人怕弄壞：防火牆規則開著、資料庫公開。這些 agent、聊天或 code 生成，比較容易對齊到具體的安全政策。預設往往比一般開發者更安全，因為人害怕去碰。至少可以看思考過程，也可以自己做，而且有教育效果。他看 agent 工作時學到新的 AWS CLI。他以前不知道有一個子命令可以等某個資源就緒，總是自己寫 bash。主持人謝謝他熬夜講完。
