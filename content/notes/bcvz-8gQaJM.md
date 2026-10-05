# AI For "The Other 70 Of Enterprise Engineering SRE:PE:DevOps with Kyle Forster

片長 18 分 12 秒，英文自動字幕。Kyle Forster 的 lightning talk，他是 RunWhen 的 founder；字幕把公司名聽成 Runwen，把 SRE 聽成 SRS。開場主持的名字字幕不一致，這裡不寫。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=bcvz-8gQaJM)

## 一句話

AI coding tools 讓他們寫得更快，也讓 codebase 和 open source 堆得更快，於是「踩到別人的 code、第三方、或 infrastructure」變成會把全部生產力收益一次抵消的 landmine。他要做的不是再跟 observability 來回問，而是像 Cursor 一樣、但是給 SRE 和任何可能踩雷的 developer：先把上千個檢查編成 tools，再用一種帶位置的 search 挑該跑哪幾個。權限因此變簡單，MCP 在上萬個 tools 時則還解不開。

## 寫得更快，雷也更明顯

[1:14](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=74s) 他先講自己團隊的數字，並說這不是很科學，是翻一批 repos、做 quarter-to-quarter 和月平均的 back of the envelope。大量用上 AI coding tools 之後，每人寫出的 lines of code 大約高 25%。中間那個他更在意：一個 sprint 交出的 story points 大約高 30%。他說 code 過得快、花的 mental energy 少了，多出來的力氣才放回 design 和 end user 的問題。右邊那個是 production 裡實際在跑的 lines of code，月成長大約 55%，因為這些工具帶進環境的新 open source 非常多，tech stack 長得很快。他補一句：codebase 很成熟以後，stack 會比較少動，這數字以後會變。

[3:27](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=207s) 他們開始把同類的 PR 分開，叫做 landmine：developer 撞上 blocking issue，因為別人的 code、第三方 open source、或第三方 SaaS 和 infrastructure 做的事跟預期不一樣。這在重用 AI coding tools 之前就有，現在變得非常顯眼。沒踩雷的 sprint 飛快；踩到一次，他就看著任何 AI tool 帶來的生產力收益被 100% 抵消。

[4:37](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=277s) 他自己的 uptime、downtime 沒有同樣好的統計。客戶那邊對應的 SRE 版本是：一個 SRE 撞上必須打電話找同事的 blocking issue，尤其要多個 team 一起進來，MTTR 會跳很大。他說看得到、感覺得到，但沒有好數字。

## 不走 observability 來回問，走大量 automated checks

[5:07](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=307s) 兩條路。他們走的是在 FAANG 看過、只有少數地方複製過的做法：automation，但想成跨 infrastructure、第三方 open source、platform 一直往上疊的大量 unit tests。前期工作量很大，他在上一支團隊看過；一旦跑起來，signal to noise 極好，而且失敗時的 human readable text——這是一個 check、它失敗了、為什麼——對後面要發生的事是很好的 hint。

他們沒走的是只跟 observability tools 來回。前期工作少，但缺很多 context。metrics 和 logs 單獨餵給 LLM，要再補很多別的資料才有用；很多最有趣的排查資料幾乎沒有 human readable text。他覺得給人有用的 troubleshooting data，對 LLM 幾乎完全沒用。所以他們很早就決定：會跟 observability tools 合作，但主力是把這些 automated checks 做出來。

[6:50](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=410s) 設計目標後來收成：做一個他們都喜歡的 Cursor，但是給 SRE 的工作，也給任何可能踩 landmine 的 developer。狀況是「有東西不對，我不覺得是我的 code」。能不能很早避開：跑 20 個 checks、30 個 checks，然後解釋發生什麼。production 裡也一樣，SRE 看到沒見過的東西、不確定是什麼、甚至不確定是哪個 team。

## 七百個 tools，和不能丟進 context 的 search

[7:55](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=475s) 兩年前像一點火花的想法，要做成需要非常多 tools。他們的 library 現在大概七百或八百個，一個月大約再加 10 個。自動安裝進一個 dev environment 時，通常是 5,000 到 10,000 個 tools，因為那大約就是一個很高階的人要排查 infrastructure、platform、open source、第三方 SaaS，一直到 application logs 和 metrics 時會用到的 corpus。多，但不是無限。他說這是很大一批 skills，叫作很大一批 tools。

[9:01](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=541s) 在這個 tool 規模上用 agentic AI，不能把全部倒進 context window 再祈禱 tool selection 會好。他們要解的比較像 search：從 corpus 裡先選出值得跑的 tasks。難在一般 search 是關鍵字對關鍵字；這裡的 query 多半在描述問題，像 alert 的本文，或「我覺得這個掛了」，那些字幾乎不會出現在任何 automated tool 的說明裡。所以有一層 lexical translation。

還有 location。他用自己以前團隊、學 Kubernetes 時的 canonical 例子 Online Boutique：人說要查 cart service 這個 deployment，真正有趣的 tasks 在 online boutique namespace，而 query 根本沒提 namespace。他以前叫這 New York versus London，或 dev versus prod。用這個 Cursor 式工具時，以為在查 dev，結果飄到 staging，更糟是飄到 prod，代價很高。

[10:40](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=640s) 他用 Google Maps 類比：搜 Thai food，結果標題是 restaurant、是 Thai 和相近菜系，網頁上常常連 Thai 這個字都沒有，而且不會把整個地球的泰國餐廳都撈回來，只撈跟你位置相關的。他們的 vector search 因此不是只有傳統 semantic search，semantic 是 vector 的一部分，裡面還有很多別的資訊，search 才真的好用。他說這塊很特別，而且是這個領域的 agentic AI 要做得好所必須的。

[11:41](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=701s) 因為 tools、tasks、capabilities 事先都列舉出來，RBAC 變得很容易。字幕這裡聽成 back。有人可以在 dev 做 remediation，不能在 production；有人可以在 production 大量蒐集資訊，改 config 時必須找組織裡的別人。他說這組問題出奇地好解，而做「另外那 70% engineering」、做這些 troubleshooting 的 AI，很多在這裡非常辛苦。

往前看，他們自己還沒解的是：做一個帶 10,000 個以上 tools 的 MCP server，他很確定這在 straining MCP 的 intent。字幕後面接了一句聽不清的 “data A”，這裡不補。再加上 Jira、Confluence 這類整合，tool count 會在他們自己的 10,000 之上再墊高。他預期接下來一到兩年，MCP servers 變大時會冒出很多 best practices。他們自己在這個問題裡，也猜現場其他講者的早期產品已經開始碰到。

## 一顆 Celery 的雷

[13:25](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=805s) 講完他交給問答。聽眾 Macy（字幕後來寫成 Messi）問：一顆很 gnarly 的 landmine 長什麼樣。

[15:16](https://www.youtube.com/watch?v=bcvz-8gQaJM&t=916s) 大約六週前。他們在 infra 的一處用 Celery 當 job runner，跑一連串 offline、long-running 的 automation。根因是字幕寫成 Stellar 的東西在把記憶體用完：在小 dev environment 裡那些 calls 合理，到比較大的 test environments 就下載非常大量的資料。它是共享的 test infrastructure，表現得很怪：Kubernetes cluster capacity 被吃掉，別的東西間歇失敗，而且只有某些 test runs 才會把自己吃到 out of memory。很早期的 code 還假設那些 Celery tasks 多久會跑完，以及 task 還在跑時使用者又做幾個動作會怎樣——那是他們自己的 design error。他們沒有早看到 Celery 的問題，也沒早看到記憶體的問題，其他問題先冒出來。

兩個 backend 的人，幾乎兩天半到三個整天。兩年前，一個兩週 sprint 裡兩個人掉兩天也許只是個 issue；現在他們已經這麼有生產力，這是很大的損失。它同時是 infrastructure issue 和 application issue，又剛好落在他們 library 還沒 tool 起來的區域。
