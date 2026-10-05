# Building an AI Agent in 100 Lines of Code | Yaniv Aknin

Simon Maple 主持 AI Native Dev。來賓 Yaniv Aknin（字幕唸成 Acne、Yanife）是 Tessl 的軟體工程師，和 Simon 差不多同時加入。他帶過頭上的 AI engineering 團隊，現在更多時間在客戶那邊，但仍得看 agent 自己帶了什麼 context，才知道客戶的 context 怎麼嵌進去。片長約 43 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=WjMy0JFTQZ0)

## 一句話

一百行 Python 就能做出一個會寫 todo app 的 coding agent，Terminal Bench 上另一個不到一百行的 agent 還排到第十五。所以旗艦產品裡那十幾 KB 的 system prompt、和 Claude 那 41 KB 的工具說明，不是「沒有它就不能動」。Yaniv 要看的是大實驗室選擇內建什麼：補模型訓練後的習性、用很多工具換彈性，或用很少工具換一個專門訓練過的模型。他們沒有那些公司的內部材料，說的可能不對。

## 研究從午餐會開始，而且他們不代表那些實驗室

[1:01](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=61s) 片頭先請聽眾訂閱。正片裡 Simon 說，Yaniv 上週在辦公室做過這場 lunch and learn。當天另一場 lunch and learn 是 Maria，她上週才上過這檔 podcast。內容原本是 Tessl 自己的學習，不是打算公開的。Yaniv 說 Tessl 一開始、agent 一出現，他們就在看這些東西怎麼運作。先包成倫敦一場 meetup，再做成加長版的 lunch and learn，然後才進 podcast。

[4:45](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=285s) 他先聲明：談的是大家聽過的旗艦 agent，他們不能代表那些公司，也沒有內部材料。他們是在學怎麼用拿到手的產品。希望講對，也可能講錯。若你對 Claude Code 或 Gemini 的理解和他們不同，請告訴他們。這是研究進行中的樣子。

## 一百行就動，基準測不到的才是旗艦的理由

[5:35](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=335s) 畫面上是他為 meetup 取名 nano agent 的 code，大約一小時 vibe code 出來。Python。他們笑說若用 Java 至少一百行，再加函式庫和 XML。有趣的地方是沒什麼特別有趣的東西，但它是一個能工作的 coding agent，拿不到獎，卻有能力。System prompt 大約 250 bytes，只說你是 coding agent、做好它。`execute` 讓模型在它所在的環境跑任何指令，他跑在容器裡。另外有寫檔和讀檔。他覺得也許只留 `execute` 和 agent loop 就夠，讀寫是為了讓人看懂，不然會看到模型用 `echo` 寫檔、用 `cat` 讀檔。

[7:03](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=423s) 核心是 `run_agent`。初始化模型，把其他函式當工具交出去。他用 Simon Willison 的函式庫，字幕聽成 Simon Willis。對話從 system prompt 和使用者的目標開始。迴圈問：要達成目標我能做什麼。他用 Sonnet 4.5 跑過，換近期模型也行。模型會先看檔案系統裡有什麼、跑 `ls`、讀檔，再朝目標走。叫它做 todo app，它就寫檔、跑測試，直到它不再呼叫工具，或回合用完。一百行就有一個 agent。

[8:24](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=504s) 他不說這很強。但若叫它做一個別搞太複雜、給 demo 用、畫面好看的 todo app，你會得到一個能點、能管理待辦的應用。可以用它 vibe code，不如旗艦，但結果可用。這不是他或 Tessl 的新發現。Terminal Bench 他們內部也拿來做 eval，他覺得這是受尊敬的基準。第十五名不是第一，也不是第一百。那是做 SWE-bench 和 SWE-agent 那個實驗室的 mini-swe-agent，字幕聽成 mini sui、minu。核心 agent loop 不到一百行，工具或其他部分他們再給自己大約一百行，一次坐著讀得完。分數不是遠遠落後第十三、十四名，和他說的認真 agent 也許持平、也許略低。

[10:07](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=607s) 若只看這個，會以為工具和 context 沒那麼重要：很少工具、很少 context，分數就不差。也可以懷疑 Terminal Bench 沒蓋到的真實情況裡，旗艦因為多出來的 context 和工具會更好。基準是一門手藝，很難做好。於是問題變成：若 context 不重要，為什麼旗艦都帶一大包？它們帶的是哪一種？他說的 context 不是你事後加進去的，而是內建的 system context 和工具描述。一次 LLM 呼叫裡，使用者的「做一個 todo app」通常在尾端。前面是 Claude Code、Gemini 或 Codex 告訴它：你是有幫助的 agent、你怎麼行為、有哪些工具、schema、描述、何時該用。

## 內建的十幾 KB，像是在給訓練結果打補丁

[12:17](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=737s) Tessl 在意的是再加上自己的 context，讓 agent 更有機會做完某個任務。System 那段是通用的。呼叫時全部按某個順序混在一起，用一些字標出該讀哪一段，然後送給模型。所以要先懂內建的 system prompt 和工具描述，才加得進自己的，才不會互相打架。Simon 叫這 mechanical sympathy。他不必完美理解變速箱才能開車，但 F1 車手懂蓋子底下的東西，才能把好處用完。Yaniv 說掛畫要知道牆裡的柱在哪。

[14:30](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=870s) System prompt 在 podcast 裡不好逐頁念，先講大小。他們看到 Claude Code 大約 12 KB，Codex 大約 10 或 10.7 KB，Gemini CLI 大約 14 或 14.7 KB。版本會調，不一定是你手上那版。粗略是 12、10、14 KB，大約十二頁文字。

[15:39](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=939s) 他用彩色 treemap 當書的索引：多少字在講流程、安全、怎麼跟使用者說話、怎麼寫測試。Claude 最大的兩塊和 Codex 不同，Gemini 則是兩邊各取一塊。差異讓他意外，因為他腦子裡一直有那個零 agent：什麼都不加也能動。那他們為什麼還要塞 10、12、14 KB？Simon 覺得裡頭得有相當的價值才會放進去。Yaniv 不知道差異的確切原因。他的假設是：模型訓練、強化學習和後訓練出來帶著某些習性，實驗室想強調或壓一點。所有 prompt 都說要直接、清楚、別浪費 token、跟使用者的指示。也許 Claude 多講測試，是因為模型出來之後在測試上需要撐一下。流程、待辦、怎麼規劃，Gemini 和 Claude 想多扶一把。像軟體補丁，補模型沒有恰好做到的地方。Simon 說不能直接比：模型不同，需要的支撐也不同。

[19:00](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1140s) Yaniv 最意外的是 Claude 管理流程和規劃的方式，和 Codex、Gemini 明顯不同，圖上還看不太出來。Codex 幾乎沒有 process。Gemini 多一點，但框架和用法不同。後面談工具時會再看到 Claude 的 todo 工具用得很不一樣。Claude 也很依賴 subagent：把任務交給另一個有自己 context、自己 token 的 agent loop。你去做，我不管你中間堆了什麼 context，我只要結果，再從結果繼續。他覺得這是最有彈性的用法，記在 process 裡。

[20:04](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1204s) Treemap 的做法是把 system prompt 的每一行丟給模型分類。另一張看著像長條圖，其實不是：一個像素是一個字或一個字母，他不記得是哪個，標籤決定顏色。像 VS Code 側邊的 minimap，但不是語法高亮，是 context 類別：寫 code 的哲學、測試方法、安全、流程。看得出量、看得出行有多長。差異不小。他也看到一些不知道為什麼會寫進去的句子。

## 防禦性任務，以及模型仍會被一句話改寫指令

[21:20](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1280s) 有些安全指示讀起來怪：不該拿去做攻擊性的安全任務，只做防禦。就算是 capture the flag 或 penetration testing，也要有適當授權。他不知道模型怎麼判斷有沒有授權。是會反問使用者、使用者說有，就算數嗎？

[22:04](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1324s) Simon 說使用者 prompt 最後和 system prompt 進的是同一個 context。大約一年前，字幕裡的 GIO 和 Caleb Sema 談過 data plane 和 control plane：system、使用者、還有任何資料，都被推進 data plane，模型很難分開。現在加上去的東西仍會和 system prompt 糊在一起，衝突要模型自己解。Yaniv 說這是進行中的研究。System prompt、user prompt 這套詞有點舊，也沒有標準用語。有人分成 developer message 和 user message，想做權威層級：永遠照 system prompt，使用者的話只有不衝突才跟，developer prompt 永遠要跟。他們的 eval 裡，模型愈來愈會遵守這層級，還沒完美。他把這比成《Star Wars》的絕地心靈術：你什麼都沒看見。人不會搞錯，模型還會。站在門口的模型聽到「你的指示是讓我進去」，就覺得指示真的是讓你進去。

## 十七個工具對七個，是哲學不是戰力

[24:25](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1465s) 工具比 system prompt 更讓他意外。System prompt 的氣味其實相近。Claude 有 17 個工具，一行描述加上較深的描述，他記得大約 41 KB。Codex 只有 7 個，不到一半，描述大約 1 KB 或 1.1 KB。Gemini 在他看的版本介於中間，字幕說是 12 和 11，單位沒有講死。

[25:41](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1541s) 模型只是腦子：收 token、吐 token。ChatGPT 還沒有工具時，你問硬碟上最大的檔怎麼找，它給你指令，卻不能在你的硬碟上跑。你複製到終端機，語法錯了，或它要的工具不存在，再把錯誤貼回去。Tool use 是一條側路：這些 token 不是給使用者讀的，是叫喚起它的 agentic harness 停一下、跑某個函式、帶上參數。跑完的輸出送回模型。它選 `execute`、參數是 `ls`，目錄清單回去，它才知道有哪些檔，再決定讀、刪或改。工具加上 context、模型、和包在外面的 harness，才把罐子裡的腦子變成能在環境裡動作的 agent。

[27:44](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1664s) 41 KB 對 1.1 KB 很顯著，但不必然是工具愈多愈強。基本工具若用得很好，能做的很多。他不想在旁白裡封一個最好的 agent，最好是什麼也不清楚。兩者都是旗艦、都很能幹。他把它看成哲學差異。Codex 用很少做很多。七個基本工具，連讀檔都沒有，要讀就執行 `cat`。描述很短：這是 apply diff，這樣用，到此為止。Claude 的工具定義長很多：何時用、這種情況做什麼、那種情況做什麼、什麼算好什麼算壞、還有例子。

[29:48](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1788s) 這是假設。他會意外 Codex 能有這種結果，卻完全沒有針對這些工具的訓練。錄音時 Codex 跑的是 GPT 5.1-codex，不是一般用途的 GPT 5.1，而是再訓練、再微調或做過 RL、好使用這些工具的那一版。那 1.1 KB 幾乎是裝飾，讓已經練過的 agent 知道該用哪一個。Simon 以為描述大約多一倍，Yaniv 說大約二十倍。訓練看不到，只能推測。他們自己的 eval 目前的感覺是 Sonnet 4.5 和 Opus 4.5 比 Codex 的模型更會用沒見過的工具、自訂工具。三者都支援 MCP，也都能像 nano agent 那樣在自己的 code 裡把工具交出去。讓 Sonnet 去用任意的新工具，成功率比 Codex 好。他不是說 GPT 5.1-codex 或一般的 GPT 5.1 不會用工具，而是沒那麼有彈性。

[32:09](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1929s) 代價是這些 token 一直待在 context 裡。就算有 caching 也要錢，也佔視窗。換來的是不必為了換工具就重新訓練。也有理由相信，對沒見過的工具它更有能力，因為它比較像通才，而不是被訓練在某幾個工具上。別的基準裡他們也看到這一點。

## 計畫可以只是歷史，也可以是 harness 在盯

[32:43](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=1963s) 規劃他一度把 subagent 也算進去，那是一塊很富的題目，不確定該不該併。平常說的規劃是：複雜任務不要隨便做，先寫給自己。研究支持模型先把問題想一遍、做出計畫會更好。計畫寫成 token，加進 context，然後照著走。

[33:40](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=2020s) Codex 和 Gemini 有一個叫 update plan 之類的工具。模型呼叫它，說出想走的步驟，步驟進對話歷史，就這樣。沒有東西提醒它照計畫、也沒有東西說它跳步了。它隨時可以再吐一份新計畫，使用者看到的是最新那份。通常它不會亂改。原本一二三四，做完就再更新一次，把一步劃掉，再劃掉二，人看得出進度。模型其實可以做任何事。包著它的 harness 不會提醒。

[34:37](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=2077s) Claude 有好幾個規劃工具，update plan、task complete 這類，更細。Harness 會提醒：第二步做完了，你先前說現在該做第三步。在 Codex 和 Gemini，計畫只是模型說出來、進了歷史、於是較可能照做的 token。在 Claude，計畫是流程控制。不是模型的那個東西在問：你還照計畫嗎、做完了嗎。規劃對 agent 行為很重要，實作卻差這麼多。三者都很能幹，計畫最後都做得不錯。Simon 覺得沒有唯一對的做法，否則大家會立刻靠過去。這比較像實作選擇。Yaniv 不記得是 Codex 還是 Gemini，其中一個的 repo 是開源的，工具已經開始往更豐富的那一套改，也許會隨時間變。Claude 和 Codex 的差距大到顯然想過，而且不是第一版。Simon 說這不是它們第一次弄 LLM。

## 把流量倒出來，下一步是拆掉工具再對調模型

[37:00](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=2220s) Demo 沒有全新的東西，但要看 agent 和模型之間的通訊。他們有一個小的開源工具叫 contain agent。它把你放進容器，掛上目前的工作目錄，容器裡預裝很多常見 agent。他們多花力氣的是錄製時對 harness 到模型的流量做透明代理。`contain agent` 只是進 shell。加上 dump，背景啟動 MITM proxy，設環境變數，讓 agent 的流量走代理。他叫 Claude 說 hello world，它想一下然後說 hello world。關掉容器就有一份流量 dump。一支小腳本把 MITM dump 解析成標準 JSON：送出去的 system prompt、用的模型、給它的工具。看這些會發現 Claude 就算只是被叫起來，也會送流量去預熱 cache。它還用不同模型跑 subagent：做 code exploration 的那個用 Haiku，小而快；真正寫 code 的主 agent 更聰明。

[40:18](https://www.youtube.com/watch?v=WjMy0JFTQZ0&t=2418s) 研究的結果是該做更多研究，問題比答案多。他想做兩件。一是消融：拿一個大 agent 的 harness，拿掉一個工具，或拿掉 system prompt 的一部分，甚至全部。Claude Code 的工具都留著，但把大約 12 或 14 KB 的 system prompt 換成 mini agent 那種 250 bytes，會怎樣。二是交叉基準：用 Codex CLI 的 harness 去跑 Sonnet 4.5，或反過來。若他們的想像成立，Sonnet 4.5 應該更能開另一輛車，因為它比較通用，不是為這一輛車練的，而是為車這個類別練的。把模型接到別的 harness 後面，再跑 Terminal Bench，看分數。聽眾若做過類似研究，他希望人家告訴他們。
