# Katie Roberts - Stop Maintaining, Start Evolving: Applying AI-Native Practices to Brownfield Codebas

Katie Roberts，Nearform 的 technical director。片長 28 分 43 秒，英文手寫字幕。她前一天半在 latent space 場次當主持。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=5SKh-FmjX7U)

## 一句話

Greenfield 上 AI native 的數字很好看，企業軟體卻有大約六到七成是已經成功、也已經長得很亂的 brownfield。Katie 不把這種 codebase 看成一團泥，而看成一座城市。演進要切片，不要整包重寫。Agent 沒有範圍時會通過測試、同時製造新的技術債。她的做法是先聽在維護的人，用客觀資料排優先順序，再把 plan、component、developer 做成 skills。

## 綠地很快，城市已經在那裡

[0:24](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=24s) 她在 Nearform 六年。之前在 BBC 的數位平台做過不少專案。Nearform 是顧問公司，這場的贊助者，樓下有攤位，也在招人。

[1:12](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=72s) 她說 AI native engineering 在 greenfield 上的好處無從否認。產品和架構決定可以放在同一份 spec，agent 做實作，產品經理更能進開發過程，prototype 和 UX 回饋更早，也更早開始測和觀察。她看到的數字包括 kickoff 快 80%，sprint zero 縮短，因為 discovery 的產物直接拿來啟動，到 MVP 快 50%。她還說看到四倍，字幕寫成 four times development philosophy，沒有把單位說完。省下來的時間拿去從第一天處理 accessibility、security、performance。她引前一天 Hannah Foxwell：速度問題已經不太是開發問題。

[3:04](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=184s) Brownfield 不一樣。成熟 codebase 估計佔企業軟體的 60% 到 70%，能活五、十、十五年，是因為它們很成功。一起累積的是技術債、只存在離職者腦子裡的知識、落後的 dependency。升級到最新的 Node 可能要兩個月，不是兩天。有些地方脆弱到沒人敢碰。測試在壓力下會被留下，或脆到沒意義；Cypress 的 integration 和 user test 死掉之後被人忽略。系統緊耦合，契約看不見。開發者花更多時間讀 code、修 bug，而不是做新功能。每個決定當初都是好意。有人叫它 ball of mud。她比較想叫它城市：上週末她在倫敦一棟摩天樓頂拍的照片，有清楚的路，也有沒人維護的死巷。

## 三種走法：分支出去、從外面包、從裡面換

[6:09](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=369s) 第一種是 pseudo greenfield。舊系統太耦合、速度已經在爬的時候，把新功能拉出去，當成綠地做。一開始很快，合併回來就慢。做的人變成觀光客，學不到底下的問題。authentication、logging、error handling 這類舊系統已經解過的事會再做一份，複雜度變兩倍。隔離越久，分支差越多，接回去越貴，臨時隔離會變成永久 fork。整合要到最後才測得到，bug、測試和重構會堆在那一次。字幕把那個時間點聽成 last .0.4。

[8:08](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=488s) 第二種是 strangler fig，Martin Fowler 大約在 2000 年定義的。藤從樹上落下種子，根往下長，慢慢把養分抽走，老樹被拿掉。一次只從舊 code 拿走一片責任，適合整套系統要在旁邊換掉、又不能 downtime。Uber、Netflix、BBC 走向 microservices 時用過。舊系統若依賴多到你的機器已經編不起來，就在邊緣攔截，production 還在跑，責任先被拿走。新 code 是 greenfield，但依據是舊功能，壞模式可以留下。Facade 是邊界，舊系統凍住。Routing 天然適合 feature flag、A/B、canary、流量回滾，新舊流量都看得到。代價是兩套系統、兩套基礎設施，找出抽象點要時間，而且必須做完。半套 strangler 會變成雙重維護。

[11:06](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=666s) 第三種是 branch by abstraction，字幕先聽成 brands by extraction。這是在 codebase 裡面做：放一層 interface，新實作藏在 feature flag 後面。適合內部改進、清掉腐掉的模式、拿掉嵌得很深的元件。Trunk 隨時可發布。兩套實作同時活著，可以在 production 比較。隱藏的依賴會被這層縫露出來。缺點是多一段 code，要寫、要維護、最後要刪。沒刪完的抽象會增加認知負擔。大型 brownfield 裡把它們找出來很煩，這是 AI 能幫忙的地方。她用換腎比喻，然後道歉。

## 先聽人，再讓 AI 畫現在的地圖

[13:11](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=791s) 不能把 AI 直接放進 brownfield。沒有嚴格 guardrail 時，agent 通常不是惡意失控，而是過度最佳化：生成通過全部測試、卻破壞隱含架構約束的 code，再製造看不見的技術債。字幕把那種 code 寫成 dart code。她拿到 Cursor 的第一件事就是想重構全部，看到一團亂，沒有推進 codebase。她說現在是 2026，大家應該知道這是壞主意，但還是在發生。前一場 Don 說的是 safety、safety、safety。

[14:26](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=866s) 她不從 code 開始，從每天在上面工作的開發者開始。她提到 Adam Tornhill 的書 *Your Code as a Crime Scene*，把 codebase 當現場做 forensics，開發者是目擊證人。他們全遠端，用 Miro 畫 value 對 complexity。大家各自指出哪裡值得技術改進，AI 就對準那些已知問題，而不是一次做完。後端有很多 dead code，他們找 dead path、重複、模式不一致、複雜度熱點，也做了 OWASP 風格的掃描。她說這不能取代正式的安全掃描，只是看哪裡開始發臭。接著產生 dependency graph，以及 code 現在在做什麼的地圖，不是文件說它在做什麼。文件會腐。AI 仍會自信地幻覺，所以要人審。

[17:04](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1024s) 意外的效果是資料變客觀。那不是團隊裡最聰明的人寫的，是 AI 寫的，所以更多人願意說對或不對。以前 principal engineer 說了，大家就跟著走。Bike shedding 也少了：不再只是各說各的優先順序，而有 coverage gap 這類指標，可以排出要做的事，也有一個目的地。原則是不要盲信 AI 的輸入，範圍要小，之後要有人讀得懂，一切進 version control，建立 findings backlog 再排優先順序，寫給全隊看的文件。Guardrail 是測試、log、靜態分析。真正改 code 之前，他們先把 SonarQube 開起來、讓它如預期回報，並確認對現有測試有信心。一次只做一塊，可以是功能需求，也可以是技術需求。Skills 要寫明想多看到哪種模式、少看到哪種，並且跟 code 放在一起，避免 agent 把壞模式再抄一次。

## 八週對六個月，以及五十萬行裡的 AG Grid

[19:45](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1185s) Pseudo greenfield 的例子在 Nearform：感覺像六個月的範圍，八週送出去。大量產品需求寫了卻沒實作。他們用 AI 從那些文件反推產品需求，從數月縮到一週。從既有 codebase 反推文件、做成 AI context，從兩週縮到幾小時。Story mapping 從 PRD 自動做出來，再開 Jira ticket。她說值得花時間做一個誰都能拿去用的 skill，工作才平行得起來。上市更快，也比一位競爭對手的估計快四倍。她說這方法不是每個專案都對，這個剛好對。

[21:15](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1275s) Branch by abstraction 的例子她更近。五十萬行，她先說成五千行再改口。緊耦合的分散式 monolith，從另一家供應商繼承來的。舊團隊可能已經不在，沒有 architectural decision records，測試很少。他們只想把 AG Grid 升到能用新功能。格子是一個一個做的，沒有繼承，也沒有共用抽象。第一次升級她沒有精確數字，記得大約一個月。AG Grid 自己也在快速演進。Greenfield 會預期有 discovery 和規劃；brownfield 常常是直接跳下去做。他們改成 AI native 之後，規劃反而變長：要做 codebase 的考古，標出好的路徑，要有結構化的 roadmap。

[23:47](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1427s) 產出是一個 plan skill，收進技術和產品考量，再用 component skill 拆工作，交給 developer skill。那是 multi-agent：orchestrator 看需求，別的 agent 做檢查、建測試骨架、看實作、跑靜態分析和 quality gate，再有一個 agent 審自己的工作，然後開發者做 human review，human in the loop 簽核，進主流程，最後回頭更新 master plan。這種東西若有 80 個，前面幾次會慢，把 skill 做穩之後會出現 flywheel，開發者幾乎可以放在背景跑。副作用是 codebase 裡累積一批 skill，說明什麼叫好的 skill、流程該怎麼走，再拿去改別的區域。

[25:52](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1552s) 她要人記住的是：先有地圖，不要一開始就 migration，字幕寫成 math。Spec 是契約。想 slice，不要整包重寫。複雜度本身是機會。Brownfield 會比較慢一點，一旦這個方式跑起來，結果來得很快。這是用 AI 開始償還技術債。

[27:28](https://www.youtube.com/watch?v=5SKh-FmjX7U&t=1648s) 有人問，如果像 monolith，skills 要怎麼分給不同 feature team。他們在 epic 這層切，再交給 feature team。團隊可以從四五個人縮到一兩個人，跟 agent 一起做。要注意 skills 不要各長各的，字幕聽成 gills。跨團隊要協作、要審，不要做出一座座 skill 的 silo。
