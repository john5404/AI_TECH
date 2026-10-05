# Intelligence ≠ Knowledge: Why Context Beats Bigger Models

Simon Maple 和 Guy Podjarny 的年終對談。Guy 是 Tessl 的 CEO 和創辦人。片長 71 分 54 秒，英文自動字幕。節目大約 18 個月，這是第二次回顧，他們正式把它變成傳統。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla、Tesl，把 Guy 聽成 Garney。

- 原片：[YouTube](https://www.youtube.com/watch?v=2IiKVJhrWQQ)

## 一句話

模型變得很聰明，知識卻不是同一件事。開發者要的往往不是一個正確答案，而是他想看到的那種正確。2025 年開發世界大約在四、五月轉成 agent。他們回顧自己的預測只拿了部分分數，並把 2026 放在三件事上：把 agent 用得有效、從單人變成多人、以及在重複工作上多用更便宜的 open model。Context 是你還握得住的手段。

## 一百萬次觀看，以及 prompt 已經像很久以前

[1:31](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=91s) 他們要回看 2025、預測 2026，也要拿去年的預測來對。2025 有 53 集，一週一集。AI Native Dev 的 YouTube 一年超過一百萬次觀看。Guy 先猜 87。全平台訂閱者剛過 45,000。190 支 shorts，正片也會剪成大約十分鐘的版本。收聽最高的是 Guy 和 Datadog CEO Olivier Pomel 那集，那則超過 50,000 次觀看。Guy 說那家公司若數字沒記錯，大約是 400 億美元的規模，人仍貼著金屬。

2025 第一集是 Macey Baker。她在 Tessl，做 AI engineering，現在在 DevRel，是 community engineer。題目是 prompt engineering，當時像流行語。他們玩了欺騙遊戲。Guy 說那是比較純粹好玩、享受 LLM 的一集。看年初，LLM 和 prompt 感覺至少像十年前。現在更靠 agent，對純 LLM 是 context，不是 prompt。Simon 還有一集和 AI engineering 團隊的 Max，做 agent 的 101。另一集是 Yaniv，像 man-in-the-middle，看 agent 和 LLM 之間的往來，拆 Claude、OpenAI 的 agent 和 Gemini CLI 在工具數量、工具用法和 system prompt 風格上的明顯差別。

[7:03](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=423s) 從 Macey 到 agent 101，都是在逆向這些東西怎麼行為。用工具卻要推論工具的行為，這是新的。線從「prompt 裡它們怎麼動、我們怎麼告訴它們」接到「agent 模式裡它們怎麼動、怎麼跟工具互動」。仍是怎麼引導。現在有兩個黑盒。LLM 怎麼得出這個回答。Agent 會怎麼去要這個回答、用哪些工具、拉哪些 context、何時搜網、何時讀檔案系統。Guy 說要記得，始終是 model。Agent 裡面沒有智能，只是把組合串起來的 Facilitator。有趣的是 model 有多少是為 agent 調過的，有多少只是通用 model，agent 是介面。他舉 Boris 建 Claude Code。想用這些 LLM 做更多，就碰到更多自由度。以前找魔法咒語。現在有給 agent 的工具，也有管理 context 的辦法。所以從 prompt 走到 context。Prompt 只是 context 的一種。

## 來過節目的人，後來發生了什麼

[10:09](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=609s) 年底和 Graphite 的 Merrill 談過。年底 Cursor 收購了 Graphite。對話是：若 review agent 能自動找出問題，為什麼前面的 agent 不先找到。若能在 review 當下改掉、不必退回去，那不就是一個 agent。這兩個產品該不該分開。當時他有好回答，沒辦法說 Cursor 正要怎樣。他們笑說 Any Sphere 在聽這集。Simon 和 Slack AI lead Samuel Messing 談過，開發者和 coding agent 的終端機互動裡，chat 變成更有趣的溝通。IDE 的終端 UI 做得沒那麼多，雖有替代。若把自己錨在 chat，已經有比終端更好的聊天環境。為什麼不在已經最適合討論、有頻道、能協作的地方做。為什麼不是 Slack。他們談了 Devin 就是從那裡開始，後來加了 Slack 整合。他們談完幾個月，Claude Code 也放出 Slack 整合。Guy 用一個叫 Steve 的成熟度模型來看：從必須在 IDE 裡改 code，到聊天窗從小變大、變成主畫面、你只是看 code，再到終端。Slack 像這條線的延續。有的 IDE，例如 Anti-gravity，自己做更多 chat。有的本來就有聊天介面。

[13:39](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=819s) Base44 那集比較像把明顯的事說出來。來賓字幕聽成 more。大約六個月做出一個 Lovable、Bolt 那種 vibe coding 平台，被 Wix 以一筆他說很荒唐的金額收購。對方說六個月內你可以用 Base44 做出 Base44。Guy 沒時間測，現在聽來沒那麼牽強。Wix 的 Q3 財報裡，成長沒有慢下來。宣布時服務 200 萬使用者，他記得比收購時大約七倍，中間四五個月。每天新增超過一千個付費訂閱。數字很誇張，但還沒到 Lovable 走向 2 億 ARR 那種誇張。收購快、對 Wix 貴，紅利在付。Base44 基本上就是他一個人，完全 bootstrap，收購前大約一個月才雇了一個人。今天的 agent 愈來愈好，這種事開始想像得到。

Guy 和 Tom Hume 拆過「十億美元的一人公司」這個神話。Base44 大概是最接近的。他仍站在當時的說法：一個人可以產出幾年前值十億美元的價值，但因為一個人做得到，很多人也做得到，基線變了。今天有很多價值套利，屬於走得快的人。他們做出 Lovable 那樣的系統，然後靠品牌。那些能力本身不再那麼有差異。可以用 Base44 做出 Base44，就表示做出 Base44 很容易。更要緊的是上市時間，然後能不能用網路效應、品牌和規模經濟拿下。聽不到失敗的那些。走得快又成功的人很快撕下很多價值。他仍不認為會有一人十億美元的公司，因為別人會模仿。

[16:47](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=1007s) 他們列了一張名單，笑說上這個節目是運氣，好事情會發生，標語可以改成收 2% carry。Quinn Slack，當時 Sourcegraph 的 CEO。他們推出開發 agent Amp。在很難突出的世界裡做出一批獨特的東西。之後公司拆開，Quinn 當 Amp 的 CEO，另一個人經營 Sourcegraph。ElevenLabs 的 Mati，那之後募了兩輪，最後一輪他記得大約 60 億或再多一點。他們清楚自己是音訊 AI 公司，最近的宣布裡也做一些影片，產品範圍在混。當時無職稱的說法有爭議，Tessl 後來也採了。玩笑是現在只剩 Guy 和小跟班，那是私訊，不是正式說法。Synthesia 的 Victor，傳聞在大約 40 億左右募資。Lera 的 Matteo，做 AI 安全，被 Check Point 收購。還有前面的 Merrill。若你是做出令人興奮東西的創辦人，上了這集，被收購或募到一輪的機率，他們說在統計上很顯著。聽眾讓飛輪轉起來。建議寫到 podcast 那個信箱，字幕聽成 tesla.io。

## 四月、五月，開發變成 agent 的

[20:31](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=1231s) 市場上最大的震動是 agent，也改了 Tessl 怎麼想產品和定位。這一年如年初稍有預測的，是 agent 之年。開發裡是 Claude Code 和 Sonnet 3.7。Claude Code 更早存在，Sonnet 3.7 出來後才真正發亮，編碼能力跟上。他說大約四、五月轉了一個彎，開發 agent 變得實用。之前就有 agent 框架，也有 Devin。這次讓它變得可做，採用和使用看得到轉折，像 Tessl 這樣的公司可以押在 agent 上。之前有很多進展，從開發來看，世界大致在那個時段變成 agentic。

Simon 問推理是不是成功的一部分。Guy 說是很多事加在一起。OpenAI 用 o1 把推理帶出來。Sonnet 3.7 是第一個有漸進思考、有 thinking budget 的，他覺得有角色。更重要的是 Anthropic 做出更會寫 code 的 model，再用 Claude Code 這個介面去互動。他們內部先用，知道它成功。Boris 常說，對他幾乎是意外才開始寫 code，他是在做一個通往 model 的介面。很多細節後來才演進。那個介面讓你不盯著 code，人在終端裡，code 是次要的。再加上 agentic search，能用終端裡的本地工具去搜。很難指某一件。可以很清楚說的是，Claude Code 的介面以很有力的方式碰到那些長處，讓魔法出現。這一年團隊加上 hooks、Claude skills，年底還有瀏覽器整合。

## 正確，但不是你要的那種正確

[35:31](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=2131s) 開發者的挫折，從想要的程式風格，到組織政策和這份 codebase 今天怎麼寫。LLM 很常給一個正確答案。若不是使用者想看到的那個正確、不是他想看到的方式，就有挫折。Agent 的價值變少，因為對了，卻還得進去改，才能照現狀 check in。Context 讓你不只看事情可以怎麼做，而是應該怎麼做。Guy 再強調：你得先審查，本身就是生產力的大限制。愈能事先說清楚、並信任它會被用上，就愈能委派。

Tessl 一直說 spec-centric：抓住 intent 和知識，用聰明的方式交給 agent，這並不容易，再讓 agent 去建。世界在往那裡走。它有兩個樣子。一個是 spec-driven development。Agent 接手任務時，寫 code 之前先停下來做計畫。Claude 常常預設進 plan mode。Anti-gravity，他說是 Windsurf 在 Google 收購之後的改名，或站在 Windsurf 背上做出來的，會先做計畫和實作計畫。還有 GitHub 的 Speckit，以及上過節目的 Kiro。互動變成一起形成計畫：這是我想要的，加上你對我現況的理解，做出計畫，我們審，再照計畫執行，大致留在線內。從「開什麼玩笑，這是overhead，我不要變慢」到「當然是這樣建」，大約三個月。Tessl 放出的 framework 就是叫 agent 等一下，先寫 spec，然後才去更新。那不是他們今天很專注的 spec registry，是用 spec 生成 code 的建法。它最後變成 SDD，而且必須嵌進 agent。

[39:36](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=2376s) 第二種 context 是活得比較久的規格，講你想怎麼建。環境是什麼，agent 產生軟體的正確方式，在我的環境裡好軟體長什麼樣，有時包括產品功能怎麼運作、怎麼用，以及留下功能的痕跡。這些不歸 SDD，歸 context engineering 或 context management。市場一直在重複這個詞。Tessl 現在很多焦點是怎麼一開始就做出對的 context。不要要求 agent 事先把資訊全內化，東西是動態的，那不相干。也不要它去讀巨大的 codebase、還要讀對、不犯錯、再讀文件。你得有意圖地寫那些文件。他們和 Yaniv 那集談過怎麼做評估情境。你說了字，它不一定照做。

他用 enablement 類比。很厲害的開發者加入，你仍不期待他落地第一刻就知道怎麼在這個組織裡建得好。要有他該讀的材料，之後還有持續訓練。開發比較難系統化，因為靠個人技能和制度知識。業務 enablement 更近：組織變大時，你只想要業務有限度地發揮創意，你要他們重複 playbook。新人和每年 kickoff 的舊人，都要學流程、階段、簡報、訊息。然後量、看哪種隨機行為成功、哪裡漏了，再改實務、再訓練。Agent 更像這個。目標是 agent 在你的開發、你的 codebase 裡建得好。要裝備什麼知識，怎麼評估、角色扮演、測試。對人做不到那麼要求，對 agent 可以。怎麼散佈知識，怎麼觀察行為真的發生了沒有，再最佳化。看 agent log，有些你放進 context 的指令它就是忽略。有和沒有那些指令做 A/B，它反正做同一件事。叫它用 git，它本來就會用 git，那你浪費了 context。叫它改用 `gh` 這個 CLI，得用很特定的方式說，去抵銷直覺。說了 git，浪費。`gh` 說錯，得不到結果。觀察到問題之後，你的工具是改 context。組織要 agent 為你工作，就得 enable 它們。Context 的管理和最佳化是你做這件事的手段。

[50:02](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=3002s) 另一個他最近常講的詞是 agent experience。組織裡做的是 agent enablement。若你是開源維護者，有一個函式庫或 framework，你想要開發者成功使用，就投資 developer experience：命令列的衛生、安裝是否容易、出問題時會不會自己修好、能不能組合。因為你想要人用你做的東西，用對，不要拿愚蠢的錯誤來煩你。Agent 是同一種需要。你要它們用你的軟體和工具，而且用對。Context 常常就是你擁有的手段，同時是 UX 和文件。不管你是組織、開源或閉源函式庫的維護者，想提供好的 agent experience，就是想 enable agent 來消費你的工作。他承認自己泡在這壺 Kool-Aid 裡：開發正在變成以 spec、以 intent 為中心，而不是以 code 為中心。你捕捉和溝通的是要做什麼，不是 code 裡的實作。

## 去年的預測，和 2026 要問的問題

[52:18](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=3138s) 2025 的三類預測，他們快速打分。Simon 預測會看過 day one，不只在 day zero 拼命吐 code，而會看測試和維護。沒有那麼發生。Guy 給部分分數。長出來的大多是 agent 能把一開始的事做得更大。確實出現一種 AI native 開發者，用很富 context 的方式工作，專注委派，會把產物存下來，所以對壽命有一點想法。但還沒到團隊。仍是單人。還不是品質，是純粹的功能。Simon 同意。生成 code 的審查做了很多，仍很 day zero，停在正在交付的那張 pull request，不是 day one：這東西已經存在，我們怎麼維護。

第二類是會不會有唯一的 model 領袖。當時他說不會，組織也不會選定一個就黏住，2024 那種互相超過會繼續。他覺得發生了。人也會依任務挑，這個要不要推理。看你在哪一個月，榜首是不同廠商，彼此追著，對產業是好事。Gemini 大約十一月的新 model 突然站上各種 benchmark。Cursor 推出自己的 Composer model，更快，有些事一般覺得沒那麼好，另一些事很好而且快。差距縮小了。開始有口味，和 model 做朋友。忠誠仍低。多數組織仍是多工具、多 model。他們談的企業不認為這會變。

第三是採用。Cursor 和其他高採用工具繼續長，企業在投資。他在多場會議裡驚訝有多少企業真的押 AI。平常是新創押大、企業慢。這裡不是。中間有個打嗝：一份研究說企業大多數 AI 專案失敗，有一陣擔心大家會退。金融市場仍擔心 AI 泡沫。整體他仍看到採用。比較亮的一點是，2025 年中之前會有更多眾包 benchmark。很接近。SWE-bench 仍很常用，tbench 出現了，還有別的評估。Spring 有自己給 Spring 應用的 benchmark，Vercel 有給 Next.js 的。字幕把 Vercel 聽成 basel。人發現有需要，而且是眾包的。發一個 benchmark 變成很時髦。他們是 tbench 的粉絲，上面用 harbor，當作較新的版本。有人寫開發者會變成資料科學家。Guy 不喜歡這個類比，但有一點真：你用指令讓 agent 生產軟體，沒有確定性，不能說這個能動、那個不能。你需要統計。Eval 給你那個手段。定義、執行 eval 的能力會在個人和組織裡成長。組織需要自己的 benchmark，問這個 agent 在我的環境裡能不能做。Tessl 把 eval 做成他們正在建的 context 管理平台裡的一等公民。要比較 agent 或 context，你有辦法。每個開發組織最終都需要 benchmark，問這個 agent 能不能在我的環境裡工作。

[59:49](https://www.youtube.com/watch?v=2IiKVJhrWQQ&t=3589s) 2026 他先把 day one 的開發留成以後的問題。2025 大家跳上 agent，問題是能不能拉進組織、能不能採用、能拿它做什麼。2026 是下一層：使用是給定的，怎麼用得有效、怎麼調。一部分是 context。一部分是學會用：也許平行跑，把任務拆開交給不同 agent。合在一起，希望能開始用真實資料和數字談 ROI，不只個人，也是組織。Guy 不知道 2026 能不能走到，但心態會轉去問這些問題、做測試來給資料。

大組織是培養一小群用得極好的人，還是讓每個人都用。Simon 說大型組織沒有一個成熟度。每個團隊不同。有的仍停在 2025，只要進到人的手裡。有的走得遠，能看清他們在做什麼、影響多大，再把教訓散出去。會是混合。Guy 說這像雲端或 DevOps 的採用，要有先驅，證明成功之後才興奮地鋪開。也像他們在 Snyk 看到的，開發者採用安全，是個人先有那股熱情。

會不會有一個明顯領先的 agent。Claude Code 今天可能是開發者最成功的 agentic coding 工具之一。其他會靠近，開始互相超過。競爭需要這種輪替。他希望看到今天還沒出現的新廠商。Guy 隊列裡有一條相近的：agent 和 model 會分開一點。像同一個 IDE 用來寫不同語言。今天很多 agent 支援很多 model，Claude 也能配不是 Anthropic 的 model。直覺仍是 Claude 配 Anthropic 的 model 最好，別家也有同樣假設。他預測 2026 會有更多不屬於 model 公司的 agent 被採用，或某種開源貢獻。Goose 是一個例子。多數使用者仍會用 model 和 agent 捆在一起的全包。同時會有一些分開的、被喜歡的 agent 得到採用。今天已經有不是 model 公司的工具，例如終端裡的 Warp，以及一層更高的 agent orchestrator。很多人把 agent 想成和 LLM 差不多的 AI 工具，界線模糊。

他更具體地說，會有一整波最佳實務和工具，從單人走向多人。今天很多 AI native 開發仍是獨自，最多兩個人，靠很多對齊。那幾乎是魔法。若把他們想成經理，他們能管多個。組織仍要對齊，系統之間仍有依賴和承諾。怎麼互動，又保持 AI native。有些會進到 model，也許是更被承諾的行為、更硬的內建測試。技術上今天做得到，但 agent 常常會去改那些測試。還會有 agent enablement。他覺得比較伸出去的一條是 open model 會被用得更多。年底 SOTA 仍在，變化的步伐在縮小，真的好的 open model 變多。組織用 agent 愈成功，就會花很多錢。當下的花費可能很值，因為它換掉的是更貴的人力，但數字仍大。人會開始問，這件事需要 Opus 嗎，甚至需要 Sonnet 嗎，還是一個便宜得多的 open model。他說 Nvidia 收購 Groq 也有一點在這條趨勢上，字幕說的是收購。他預測 2026 在開發、在重複的活動上，open model 會有實質得多的使用。人在桌面上想要最大的力量。重複、可以評估的任務，可以感覺一個 open model 有多好。這也回到 benchmark 會繼續，以及對效果和 ROI 的關注。會留下少數完全開放的人：開放的 agent 加開放的 model，跑在託管或自己控制的伺服器上。很多成功的手段是方法：何時給對的 context，那些互動怎麼做。Open model 裡的智能，夠做很多那種工作。

他們說 2027 再來對這些預測，一次一年。已經錄好的有 GitHub 前 CEO Thomas，談打造 AI 開發工具，以及他為什麼又去建另一家 AI 開發新創。還有 D-Zero 的 CEO 和創辦人，字幕聽成 Mirao，談可觀測性裡的 agent、什麼是 AI native 的可觀測性、營運需要什麼 context。營運常常更在意風險。他們笑說 2026 大概會很安靜、很慢，並且會讓 2025 顯得安靜。祝聽眾 2026 好。
