# AI Agents Beyond Context Limits | Maksim Shaposhnikov

Maksim Shaposhnikov 是 Tessl 的 research engineer，Simon Maple 請他做一集 agent 入門。片長 57 分 41 秒，英文自動字幕。他在 Tessl 第一次做 code generation，目標是讓 agent 產出你信得過、不必花幾小時驗證的 code。之前在大公司的 foundational LLM 團隊做 pre-training，規格是自然語言、text-to-speech 和其他多模態，coding 是後來才碰的微調任務。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=BQbuAykmleQ)

## 一句話

Bot 照腳本走，co-pilot 在本地補一行，assistant 等你下指令，agent 可以自己把長任務做完。實務上人仍把 Claude Code 這種 agent 當成 assistant 用：下命令、看結果、不滿意就重做。Context 是硬限制。Agent 只是包住 LLM 的一層，修 bug 的 log 會不斷追加，視窗很快滿。Subagent 各自帶一份 context，只把結果交回去。規格沒寫清時，它自己做的選擇不是 bug。要進專業環境，還得隔離、快照，以及一份它訓練時沒看過的 API 說明。

## 四種東西，差別在人還在不在 loop 裡

[3:56](https://www.youtube.com/watch?v=BQbuAykmleQ&t=236s) Max 把圖畫成四種：bot、co-pilot、assistant、agent。Bot 最老，自動化超簡單、寫死的任務，沒有多輪。對話是事先排好的樹，你能預知它會停在哪個節點。邏輯全是腳本。偶爾有很簡單的 ML，分類或 named entity recognition。就是我們又愛又恨的網站 bot。他覺得這股風潮從 Alexa 開始，大約 2015，第一版 Alexa 和 Siri。當時很多人希望 bot 就是未來。顯然還沒到。它們是規定好的、很有限，沒有 environment。Environment 這個詞他說後面很關鍵。

[6:03](https://www.youtube.com/watch?v=BQbuAykmleQ&t=363s) 下一層是 co-pilot，也就是 autocomplete。你在打一個函式，它收本地 context：檔案裡已經有的、以及後面的資訊，補中間一小段。範圍很小、很本地。關鍵是要即時、非常快，按 tab 就像自動完成。Simon 記得早期和 Tabnine 談過：答案快到以零點幾秒計，會大幅改變開發者用不用。回應短，你知道該期待什麼，多半自己也打得出來，常常一行，依據就是那個 method 的本地 context。早期速度極端重要，因為它們做不了複雜的事，人很挑剔。現在這個要求放鬆了。人願意多等，如果它能執行很複雜的情境。他舉定義一個 class、寫一份可以很複雜的 docstring：意圖、class 長什麼樣、做什麼。Co-pilot 現在夠聰明，人可以接受再等幾秒。容忍度在長。核心仍是小、快。

[8:41](https://www.youtube.com/watch?v=BQbuAykmleQ&t=521s) Assistant 是他覺得 agent 能力開始出現的地方，還不是全貌。用途是協助使用者的任務，而任務可以是任何事：生成 code、規劃、做市場調查。它回應請求。Assistant 的意思是它等你，交出執行結果，再等澄清或下一道命令。以聊天來回。它不做長計畫，不盯長視野的任務，只盯你現在要做的。決定始終是人的，人在 loop 裡。這是他用來分開 agent 的因素。

現在 agent 被大量採用，實務上人仍把 agent 和 assistant 混著叫。Cursor 右邊開著互動分頁，你其實在用 assistant，因為你一直在跟模型聊、在修。Claude Code 技術上是 agent，你仍很常把它當 assistant：打命令、驗證、不高興就叫它重做。Simon 問：它們有 agent 的能力，我們典型的用法仍是 assistant。差別幾乎是用法，不只是能力。不同實作會更擅長長期自主，或更擅長另一種。Max 把邊界畫在：assistant 跟你互動、等人、人做決定。Agent 是主動的，長視野、很難、多步驟，有時不需要人在 loop 裡。在這四層裡 agent 在最上面，因為技術上可以人不在場就把任務做完。

## 從 IDE 爬到終端機，是信任在變多

[12:31](https://www.youtube.com/watch?v=BQbuAykmleQ&t=751s) Simon 問 IDE 和終端機，有沒有一種最好的用法。Max 說差別在互動。Cursor 這種看得到的 IDE 擴充，等於你同意人在 loop 裡，一直在看發生了什麼。UI 簡化、加快上手，不取代你。它在旁邊幫你寫某個檔、某個 unit test。有按鈕，不必記命令，一個框打字就執行。Cursor 和 Windsurf（字幕寫成 WinServe）給你很多 UI，好讓日常主動用起來。終端機上的 agent 依定義不需要按鈕。複雜的事用按鍵組合或命令。給更進階、還想再加速、不需要視覺、可以住在終端機裡的人。Vim、Nano（字幕寫成 Nana）或 Git 用熟了，就不需要 UI，直接在終端機做很難的事，省時間。比較難，因為互動少，容易失去發生了什麼。生成的資訊量有時壓過人，要技巧才導航得了。Simon 說在 Cursor 裡翻檔案很容易，終端機沒有這個。但他在終端機就是覺得更快。

[15:20](https://www.youtube.com/watch?v=BQbuAykmleQ&t=920s) 終端機還有一個好處：比較能把 agent 放在背景跑。Claude Code 或 Codex 的 CLI 可以用非互動模式，給一個 prompt，生出背景行程，自己把複雜請求做完。Cursor 也在往這邊走。幾個月前它碰不到終端機，錯誤訊息得複製貼進文字框。現在可以讀你在終端機裡的資訊，也推出了自己的 agent，可以非互動或走 CLI。兩邊的人都想蓋到。

從哪開始，看經驗和角色。完全不寫 code，有 Lovable 這種即時做前後端的平台，零程式知識，你在那裡驗證、核准。愈靠近 code、規模愈大，工具愈進階，可能要很多手動解問題。軟體工程師若要做很多 code 上的事，先從 co-pilot 看它有沒有讓你寫得更快、更好。滿意了，下一步是 Cursor 這種 IDE，把複雜的 assistant 當同伴。自主的範圍會變大：不只委派一個函式，而是整個檔案。那也習慣了，再上到頂端，在終端機用 Claude Code、Cursor 或 Gemini CLI。這時你知道它們的強項、知道能委派什麼、也熟悉工具怎麼運作，才能把更大的範圍放進全自主的 pipeline。沒有 code 知識就從最簡單的開始；已經有知識，就再往前。

[19:47](https://www.youtube.com/watch?v=BQbuAykmleQ&t=1187s) Simon 把這收成信任。學開車不會一上來開 Ferrari。小步。自主變多，就是信任變多。熟悉 IDE，就從 IDE 裡的 GitHub Copilot 開始，再考慮 Cursor。愛終端機，再從那裡探出去。

## Subagent 是主 agent 生出來的另一個自己

[20:39](https://www.youtube.com/watch?v=BQbuAykmleQ&t=1239s) Subagent 是主 agent 生出來、由它控制的另一個 agent 實例。任務複雜到一個 agent 不夠，或有不同路徑要探，就用。兩種情況：問題大到要拆小，或要搜尋、探索空間、再選一個選項。它就是被要求解一個特定問題的另一個實例。他用 master-slave 來想。你在終端機跟 master 說，做一個有前端和後端的服務。一個 subagent 做後端，一個做前端，各自做，再回到 master。Master 看結果滿不滿足整體目標。不滿就把資訊轉回去，它們依回饋繼續改。

寫 code 以外、需要探索時，subagent 可以是同一個 agent 的平行實例，從不同角度看問題。例如回答一個問題：一種查詢去 Google，一種去 Wikipedia 的文章，一種查本地資料庫。都是在不同來源找資訊，由不同 agent 做。他說某個未來也許不再需要 subagent，因為 master 夠聰明，不會弄丟 context，自己就能在複雜結構裡走。另一個動機是速度。Agent 非常慢。平行起來是一種做法，結果更快。十個實作，也許一兩個是好的、做了你要的。那是延遲和吞吐，對上閒置。

[24:27](https://www.youtube.com/watch?v=BQbuAykmleQ&t=1467s) 代價是成本大致線性增加。有時全部生出來，卻沒有收斂到任何東西。啟動方式也不只一種。主 agent 可以自己啟動。Claude Code 現在有這個能力。你可以在 prompt 裡明確說，用平行 agent 分析這份複雜文件，它就會自己生出多個版本。你也可能想要專門的 subagent，不是通用搜尋，而是鎖在問題的某個切面。那就得額外客製，仔細設計給它的指令。設計 subagent 是一門功夫，要花力氣。不設計，主 agent 會自己做，品質可能不同，指令裡重要的片段它可能漏掉。

Simon 問人會不會繞過主 agent 去跟 subagent 說話。Max 說看系統設計。Claude Code 裡很難控。Subagent 在背景啟動，你不能直接看它們在做什麼，只能看 log。打開 Claude 的 JSONL，看得到它們在背景下了什麼命令，終端機上不一定看得到。思考、路徑、每個 subagent 的計畫，也不一定看得到。所以你得更信任它。進到 subagent 的世界，你更得相信它會做出有意義的東西。

## Context 有上限，修一個 bug 就在往裡塞

[28:16](https://www.youtube.com/watch?v=BQbuAykmleQ&t=1696s) Agent 背後是 LLM，訓練時有固定的最大 context 長度。他舉 256k token 或 100 萬 token。能放進 context 的資訊有上限。Agent 是包住 LLM 的一層，不斷把新東西追加進去。你開一場 session，叫 Claude Code 做點什麼，它建出一堆檔，這些都進 context，已經佔掉幾千個 token。每修一次 bug，trace log、traceback 再追加。很快就頂到 context 記憶的上限。

Subagent 幫得上，因為不同實例有自己的 context window，可用的 context 就變多。每個 subagent 維持自己的視窗，預先放進主 agent 給的指令和任務，其餘的 context 不受影響。Simon 用研究來對：subagent 做了一大堆研究，只有 10% 有效，那 90% 不該回到主 agent，它只回報它認為最有效的 10%。主 agent 拿到要的資訊，視窗不會被廢話灌滿。Max 說，subagent 可能生成幾千個 token，進到主 agent 記憶、用來繼續主任務的，只是極小的結果。其餘清掉。容量掉得很快，所以要壓縮工具。多數現代 agent 都有。壓縮很難，因為什麼已沒用、什麼仍有效，並不總是明顯。Session 一開始放進記憶的檔案初始狀態，中間你改叫它解另一個問題，後來又指回開頭，那段可能已經過時。Agent 得弄清為什麼，多花 token：context 過時了，清掉是安全的。壓縮是另一件難事。Context 一高到要再壓，這件事會一再發生。

## 規格寫清楚，就有一個大致能動的原型

[32:22](https://www.youtube.com/watch?v=BQbuAykmleQ&t=1942s) 開發者該期待 agent 大多時候很會什麼。若你把要解的問題講得非常徹底，coding 就是一份很小心的 specification，抓住產品、決定、需求的必要面向，你可以期待一個至少很接近的原型。他說這已經令人意外：我們可以用白話填一份很大的文件，描述複雜的東西該怎麼運作，agent 自己拿出一個大致能動的解。通常不會正好是你要的，仍要手動介入、修正、驗證它做錯的決定。人在 loop 裡仍然必要。這不是 bug，是 feature。需求總是鬆的，我們總是 underspecify。沒寫清楚時，LLM 得自己決定怎麼走。規格沒說用哪個資料庫，Postgres 還是別的（字幕寫成 post person），就由它來想。那不是 LLM 的問題，是你沒寫明。指令乾淨、細節夠，它的 instruction following 已經好到能做出前後端都接近你期待的原型。限制可能來自規格不足，或它給出不夠有效率、無法擴展的解，你仍得重構，而那通常也是規格鬆。One shot 或 few shot 可以做出瀏覽器裡能玩的遊戲、本地能跑的 server，有時甚至部署也全自主。至少 Lovable 是這樣：前後端的生命週期和服務都由它維持，你不必做那些決定。

## 隔離、快照，以及訓練資料裡沒有的 API

[36:01](https://www.youtube.com/watch?v=BQbuAykmleQ&t=2161s) 專業開發者要推進 production 之前，先看環境。Claude Code 在本地有整台系統的存取。本地 repo 給它完整權限，某次它可能意外下 `rm -rf`。沒有 checkpoint 就麻煩了。Reddit 上很多 Claude Code 失控這樣做的故事。你自己可以做的是，總是在隔離環境裡啟動。單獨的 Docker container 放 repo 的複本，命令送到那裡，agent 在複本上工作。這是處理權限、以及害怕刪東西的一條路。

另一類更難：API key。公司在做 agent，為了測這個 agent，它可能需要 API token。給了它，它可能開始做無限的任務，把預算燒光。除非完全切斷網路，否則很難有安全解法。主要做法仍是 sandbox。另一種是限制可用工具：某些目錄下不准寫、不准改。人在 loop 裡定這些規則，禁止它碰敏感的 library 或目錄。Gemini CLI 出廠就有 sandbox。從目前目錄用 sandbox 開一場，它會在隔離的 Docker 裡 clone repo。你也可以指定哪些命令或工具可用，例如斷網。它就在隔離環境裡工作，不必你手動去生環境。

[39:52](https://www.youtube.com/watch?v=BQbuAykmleQ&t=2392s) 記憶也有細的控制。Gemini CLI 可以做 checkpoint，把某一刻 agent 記憶裡的 context 做成快照。快照之後可以結束 session、關掉終端機，改天重開，從那個時間點的 context 恢復。Simon 說這對專業環境很有價值，不必像對小孩一樣重複：不要這樣、要那樣。有時你自己也不確定最後要哪個解，跟 agent 聊出好幾種實作，每一種都快照，以後回到最喜歡的那個，把 context 倒回那個做法。環境變乾淨、好控，不必記得改動 commit 到哪個 branch 才不會弄丟 agent 已經生成的東西。你可以把一些也許沒用的資訊從自己腦子裡拿掉，因為快照明確存著。對同時做很多 branch、很多功能的人特別有用。

[42:01](https://www.youtube.com/watch?v=BQbuAykmleQ&t=2521s) 組織裡還有共享知識、政策、風格、平台團隊要你做或不做的事。多數工具盯的是本地 context。你可以有 Gemini MD、CLAUDE.md 或 AGENTS.md（字幕寫成 agent MD），明確指向其他 markdown 和文件，agent 一啟動就有安全準則和 code 準則。問題是指令塞太多，agent 會混亂，在他說的像 terabyte 的資訊流裡迷路。指令也可能互相衝突，不知道該聽哪個。怎麼有效把公司的 tribal knowledge、安全準則、寫 code 的準則放進去，讓 agent 做的時候一直用、不忘記、一直尊重，是研究題，也是產品題。他不認為現有廠商明確解掉了，但有做法。Gemini CLI 讓你把記憶直接寫進 agent，他稱為 flash memory：一個 prompt 會被附加進 Gemini MD，並在 context 裡刷新。這是把非常新的資訊直接放進去的一種方式。Claude Code 則是 skills：一批獨立的 skill，依情況動態抓進 context。廠商用這些來尊重你的特定選擇。Simon 補，Tessl 也在做這塊：組織資料的 context，以及開源和專有的 usage spec。

[45:20](https://www.youtube.com/watch?v=BQbuAykmleQ&t=2720s) Usage spec 最好用第三方依賴來解釋。你在用一個有很多依賴的 library 或 framework，想做一個跟某個依賴有關的功能。Agent 得非常懂那個依賴。若它不流行、才剛發布、不在 Claude Code 或任何基礎 LLM 的訓練資料裡，LLM 就不知道 API 長什麼樣。一條路是看原始碼，很沒效率：clone repo、在幾千個檔裡走。另一條是 import 進來，在一個假腳本裡試功能，回合數也很沒效率，agent 會花很多時間搞懂怎麼用。Usage spec 是這個 API 的壓縮表示，從 Tessl 的 registry，或從給公司用的私人 registry 取。Tessl 也在做公司的 registry。那是一批文件，說明這個套件的 API 怎麼設計。Agent 直接拿到很清楚的知識，不必掃幾千個檔。省 token，也省回合。他們花了很大力氣讓這些 spec 有價值、資訊夠。不只方法簽名和定義，還有怎麼用、最好的情境、用這個 API 的底層含義。用來給 agent 一份它 pre-training 沒看過、不流行、或是私有的 library 的知識。

## SWE-bench 多半只動一個檔

[48:36](https://www.youtube.com/watch?v=BQbuAykmleQ&t=2916s) 專業開發要能測。Eval 本身可以再做一集，他試著用幾分鐘講。Eval LLM 本來就很難，因為它們幾乎什麼都能做。就算把範圍限在 code generation，仍然很複雜。社群、研究和學界現在最常見的是 SWE-bench，尤其 OpenAI 推起來的 verified 版本。某種意義上它反映真實開發：拿功能還沒做進去之前的 repo，請你實作那個功能。給你功能出現前的 repo、功能該長什麼樣的需求，也許還有 API、以及打算怎麼實作。然後啟動 agent，補上缺的檔和功能。生成的 patch 拿去對一份有真人核准過的 unit test 的 commit，當成 ground truth。Patch 過了測試，就算成功。

這種 benchmark 很難設計。不能隨便 clone 一個 GitHub 套件、挑一張 PR 來用。很多 PR 缺文件，不寫設計選擇。資料要很兇地過濾，只留 agent 理論上有機會解的。PR 和 issue 的描述必須含足夠資訊。缺了 API 定義、缺了某些假設，agent 理論上沒有機會做出對的解。SWE-bench 這類最常見，但很有限。他看 SWE-bench pro 的任務，通常只碰一個檔，很少兩個。那不是真實的軟體開發。你送一個功能，常常是五六個檔，很多地方要改，import 和 unit test 都得很準。真實 PR 比 SWE-bench pro 難得多。需要同一種格式、下一級的 benchmark，要求改的是一組檔，不是一個。Simon 說那比較像一個信號，不是會完全對上你的經驗。這類 eval 也主要是後端。若 agent 產生 UI，怎麼評 UI 是否符合 prompt。若 agent 會改資料庫狀態，又是另一種複雜度。社群正在做專門的 benchmark。他說這只是冰山一角。

[54:07](https://www.youtube.com/watch?v=BQbuAykmleQ&t=3247s) 他期待的下一世代有三件。Agent 該學會寫更好的 code。現在的品質有時就是垃圾，感覺像一次性腳本，你不會想以後回來在上面繼續做。很多 LLM 生成的 code 又亂、又不能擴。多給寫 code 的準則可以應付一部分，整體品質仍是開放問題。第二是 UI。多數現有 agent 很難依你的具體指令做出真正好看的 UI。他期待核心模型在那裡變好。第三是更難的 SWE-bench。有人在做，例如 SWE-pro，難很多，要改多個檔，準確率掉得很厲害。這讓「agent 能做長視野任務」的說法變得不太成立。真正複雜的 PR、要在多個檔裡改的任務，才是讓它們能做長視野任務的路。他期待學界和更多人投入更好的 benchmark：怎麼信任、怎麼確認它能生成複雜 code，以及這些 benchmark 上的準確率本身要變好。
