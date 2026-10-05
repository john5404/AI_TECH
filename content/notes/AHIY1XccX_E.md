# Peter Wilson & Davide Eynard - cq - Stack Overflow for Agents - AI Native DevCon June 2026

Peter Wilson 與 Davide Eynard，都來自 Mozilla.ai。AI Native DevCon，2026 年 6 月。片長約 32 分鐘，英文手寫字幕。字幕多處把 Davide 寫成 David、把 Claude 寫成 cloud、把 cq 寫成 SQL。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=AHIY1XccX_E)

## 一句話

商業 AI 服務不是一顆 model，而是 agent、tools 和大量工程。Mozilla.ai 想把開源體驗拉近這段差距。cq 做的是其中一塊：某個 agent 撞到非顯而易見的解法時，存成 knowledge unit，下一個任務或其他 agent 可以先查再做。預設留在本機，往上才進團隊和公開的 commons。

## 他們不是做瀏覽器的

[0:36](https://www.youtube.com/watch?v=AHIY1XccX_E&t=36s) 主持人先提：ChatGPT 出來之後，人對 Stack Overflow 的貢獻大幅下降。Davide 說大家常問他們是不是 Firefox。會後可以試：Firefox 連到 `moz://a`，會打開約二十年前的 Mozilla manifesto。裡面講開放的 web、人要能主導自己的體驗、安全、開放程式碼、標準與互通。他把 internet 換成 AI 再讀一次，申請 Mozilla AI 之前就這樣做過。Mozilla Foundation 大約五年前、大爆發之前，也做過同樣的替換，決定資助一間獨立於 Mozilla Corporation 的新創，方向是 open source AI。他們和瀏覽器團隊是兄弟，不做瀏覽器。

[2:53](https://www.youtube.com/watch?v=AHIY1XccX_E&t=173s) 常見比較不公平：拿 open weights model 去對商業服務。商業服務是 LLM，加上 agent、tools、工程，以及上千名工程師。這造成使用者覺得閉源服務和開源差很遠。他們的任務是把差距縮小。他一度說成 OpenAI，隨即改口是 open source AI。

## 4K 會忘了問題，0.8B 讀到檔案就答得出來

[3:49](https://www.youtube.com/watch?v=AHIY1XccX_E&t=229s) Context 有壞例子。他們有個在瀏覽器裡接 local LLM 的工具，叫 agents。任務是連上 Mozilla AI 的 any-agent repo，問有幾顆星。它回的是說明書。當時預設 context 是 4K，工具從網路上抓的 token 超過視窗，log 使用者看不到。視窗被裁掉之後，model 忘了問題，只把頁面摘要出來。

[5:13](https://www.youtube.com/watch?v=AHIY1XccX_E&t=313s) 好例子用另一個開源工具 any-agent。他問 Claude 自己的生日，Claude 說不知道，名字也沒出現在任何地方。他加了一個只有兩個函式的 tool：瀏覽目錄、打開並讀檔。一個 0.8 billion 的本機小 model 找到 birthday 檔，裡面有 Ada Lovelace、Alan Turing、Charles Babbage，還有他自己，然後答對。他說這顆 0.8B 試了好幾次。接著提到更大的本機 model，字幕聽成 for billions、nine billions，這裡不另補大小。畫面裡 agent 會打開目錄、看到名叫 birthdays 的檔、判斷檔名可能有日期、再自己打開。

[6:57](https://www.youtube.com/watch?v=AHIY1XccX_E&t=417s) 他們覺得 context 還缺一塊：model 還沒遇過的解法。Agent 會自己試，但有時解法不在它找得到的地方，人插話之後它才做對，之後就順了。若能把這段存下來再用呢。Claude 已有 memories。他把話交給 Peter。

## 寫進 CLAUDE.md 的記憶，廠商也看得到

[8:02](https://www.youtube.com/watch?v=AHIY1XccX_E&t=482s) Peter 說，有人會覺得 `AGENTS.md`、Claude 的 rules，或現在的 memories 就夠了。問題是東西存在本機，最後堆進 `CLAUDE.md`，全域一份、專案一份，而且都要載進 context。Anthropic 因此看得到你的 context。Memories 本來想改進 rules，Claude 還是健忘。他請它檢查 memory 檔有沒有重複。Claude 說沒有，因為不是 byte identical、檔名也不同。他要求看意圖，Claude 才承認同一個 memory 寫了很多次，而且沒在用。他還列了幾件：不守規則、你說 no 它仍去做、記住又復發、有一次直接說自己 confused。

## Knowledge unit 先留在 SQLite

[10:03](https://www.youtube.com/watch?v=AHIY1XccX_E&t=603s) 最初的文章把 cq 說成 Stack Overflow for agents。投影片是示意。理想流程是：agent 遇到錯誤、找出做法，然後向 cq 提案，他們稱為 knowledge unit。有一個可掃的 CQ Exchange，也有 Mozilla AI 的開源 server，可以在 Docker 裡自己跑。單元存成 JSON，投影片上看起來像 YAML。Schema 裡有它認為自己所在的 domains、insight、採取的動作，以及 languages、frameworks，還能存一個 pattern。遠端模式要經過 human in the loop 審核。通過之後，任何連到他們 hosted 實例的 agent 都能用 query 拿到。Skill 會說：新任務開始前，先按 domain 問 cq。要的是很小、很準的一段，而不是一開始就把全部載進來。

[12:28](https://www.youtube.com/watch?v=AHIY1XccX_E&t=748s) Skill 外掛進去，並跑一個 MCP server。可以查已有的內容；找到能幫下一個 agent 省時間的非顯而易見問題，就可以提案。拿到指引要先驗證，不能盲用。試了有效就 confirm，累積信心分數；過時或完全錯誤可以 flag。Session 結束時人也可以叫它 reflect，整理可能的 knowledge units，再核准或修改。

[13:30](https://www.youtube.com/watch?v=AHIY1XccX_E&t=810s) 預設安裝只在本機放一個 SQLite，什麼都不外送，也沒有審核，同一台機器上的其他 agent 立刻看得到。可以再接到遠端：開源 server 做成團隊層，使用者有密碼，提案要審。他說審核介面有點像 Tinder，開源版可以左右滑。上一週釋出的 CQ Exchange 看起來比較正經。再上面是他們說由 Mozilla 策展的 public commons。私人 namespace 裡的東西可以提名，升上 Commons 之後大家看得到。

[14:57](https://www.youtube.com/watch?v=AHIY1XccX_E&t=897s) 風險他們不避。這有點像社群。找過安全專家，內部有一份威脅分析，字幕聽成 old stride。消不掉全部風險。Knowledge unit 可能讓 agent 做壞事，skill 裡也可能有個人資料。Skill 前面有一層檢查，協議也要求先驗證再照做。伺服器端還有 DDoS、身份假冒。開放 commons 和開放網路一樣，假設要小心。

[16:32](https://www.youtube.com/watch?v=AHIY1XccX_E&t=992s) 緩解是分層。登入 Exchange 或開源版會拿到 JWT，再簽短命的 API key 給 agent，代表你行動。API key 不能做 control plane。路線圖上還有簽章：公開金鑰上傳、選擇加入，確認單元來自你的機器。內容可以過 guardrail pipeline，查 PII，也可以跑 sandbox。現在堅持 human in the loop，上線給別人之前要審。要擴大時也許改成 human on the loop，但他們想先做對。

## 一次 Joplin 設定，以及還想做成協議

[18:26](https://www.youtube.com/watch?v=AHIY1XccX_E&t=1106s) Davide 說這還沒幫到所有人。他要接 Joplin 的 MCP。Joplin 是他用了大約十五年的開源筆記，他想要一種 LM wiki。四月初他問 Claude 怎麼加 MCP server，自己知道設定和 key。Claude 說裝好了，重開卻找不到。燒了一些 token 之後，他建議去 Claude 自己的網站找最新文件。解法是設定檔要放在另一條路徑。他再叫它 reflect、沿著 trace 找出修法。Agent 寫出 knowledge unit，提案並存下，當時仍是本機。他清空重來，Claude Code 自動到 cq 裡找到解法，直接用對的設定檔。之後不只 Joplin，其他 MCP 也會用對的設定，省時間和 token。下一步才是分享給團隊，或放進 commons。他問：這些工具要留在單一公司手上，還是很多人、你自己的團隊，以及更開放的 commons，都能用。

[21:36](https://www.youtube.com/watch?v=AHIY1XccX_E&t=1296s) 二月下旬開始談，四、五月在做，演講時是六月初。Skill 很難在對的時間觸發。他們沒先靠 hooks，想讓 agent 自己判斷，而且是任務開始時，不是每一次呼叫之前。Versioning 也還沒想完。Privacy first 是對的預設。內部談過 Web of Trust，希望協議本身多做一些。預設看不到是誰建立了某個單元，要 opt in。這樣比較慢，因為每一步都得想：現在這樣做，以後還能不能走到那裡。即使離線，找到的東西愈多愈有用。有一次直播要它寫 GitHub Actions，它總用過期大約兩個 major 的版本。不存進 cq，它就照訓練資料繼續，而且很有把握。心態上，Mozilla 想把協議和 schema 放進公共領域，但也許要先有平台、自己 dogfood，才知道 schema 該放什麼、先留什麼、哪些讓人自訂。他們要的是 protocols over platforms。

[24:36](https://www.youtube.com/watch?v=AHIY1XccX_E&t=1476s) 若 cq 不適合你，這個領域很多人也在做類似的事。Exchange 接下來要 namespaces 和 tenancy，不只個人、可以私有；提名後升上 commons 的 pipeline；前面的 signing 和 guardrails；把 knowledge unit 依開放 schema 匯出。協議側要看伺服器之間的 federation，也有人想組 working group。

[25:51](https://www.youtube.com/watch?v=AHIY1XccX_E&t=1551s) Davide 用一張 2006 年、做參與式系統時的圖收尾，講二十多年前讀到的參與冪次：從最低力氣到貢獻最多。連結也按這個排。GitHub 上 Mozilla 組織有他們稱為 choice first stack 的東西：agent framework、routing、本機 model serving、guardrails、encoders。再來是試網站、clone 下來玩、開 issue。他歡迎嚴厲的意見，也歡迎別人 fork 出同樣開放的專案。他要贏的是開放，knowledge unit 被共享，而不是只屬於一家公司。

[28:33](https://www.youtube.com/watch?v=AHIY1XccX_E&t=1713s) 問答只有兩分鐘。有人問大組織、多個 repo、不同 domain，以及像 bounded context 這種切法時，檢索會不會把錯的資訊漏給 agent。Peter 說大多由 skill 驅動：請 agent 摘要、判斷 domains、盡量一般化，不要綁死在當下專案，除非那個專案本身是開源工具。Domains 可以是一串，另外還有 languages、frameworks，以及一個自訂的 pattern 字串。送上遠端之後，靠 guardrails 和人審決定能不能進 Commons。Davide 說這本質是 retrieval，現在是第一版，知識庫變大之後還要做得更有效率。開源 repo 看得到伺服器怎麼評分、按相關性排序。同事有一張 PR 要加一種搜尋，字幕聽成 untick search，這裡不另定名稱。
