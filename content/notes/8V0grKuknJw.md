# What Next Gen AI Infra, Voice and Video Looks Like | Datadog, Eleven Labs and Synthesia

Simon Maple 主持的 AI Native Dev 合集。片長約 34 分鐘，英文自動字幕。三段都是 Guy Podjarny（字幕聽成 Guy Pjani）的訪問：Datadog CEO Olivier Pomel、ElevenLabs CEO Mati Staniszewski（字幕聽成 Matty Stenki）、Synthesia 的 Victor Riparbelli（字幕聽成 Ripelli）。片頭先放三句：連續兩個 false positive 客戶就會把你關掉；語音比文字帶更多情緒，音訊還要一兩個 model 突破；Synthesia 早期因為年輕、沒有包袱，去問了幾百甚至上千人影片是什麼。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=8V0grKuknJw)

## 一句話

三家都是把 AI 做進自己的產品，但信任的門檻不一樣。Datadog 知道客戶嘴上要 false positive、實際上兩個就關掉，所以只在信心極高時自動動手，而且認為不把行動自動化，AI 就顯不出價值。ElevenLabs 把配音拆成聽、譯、說，開源拼起來品質停在使用者不會採用的地方，於是自己做 text-to-speech 和 voice cloning，途中發現 voiceover 比配音更急。Synthesia 2017 年先賭「神經網路能生出畫面」這項技術，配音改臉做了幾年、有營收，他們自己判定那是 vitamin，不是 painkiller。

## 可觀測性容錯很低，安全稍微高一點

[1:00](https://www.youtube.com/watch?v=8V0grKuknJw&t=60s) Simon 說這集回看幾家領先公司怎麼做自己的平台，有些還做自己的 model。他先點 Datadog：他們把一大堆評估答案可不可信的邏輯灌進 LLM。Model 不管怎樣都會回答，所以要給使用者一個信心。

[2:07](https://www.youtube.com/watch?v=8V0grKuknJw&t=127s) Guy 問現在抓 root cause、決定半夜要不要叫人的準度，以及使用者容不容忍錯。他們剛談過滑雪的例子，這段剪輯沒有把例子放進來。Pomel 說 Datadog 創業時最大的學習是：客戶會說系統若夠聰明，請把 false positive 給我，我自己判斷。那是謊言。連續兩個 false positive，他們就永遠關掉你。幾乎沒人願意因為機器指向錯的路就追下去。人叫你追，還可能追；機器不行。所以跟 observability 有關的東西，precision 要非常高。

[3:57](https://www.youtube.com/watch?v=8V0grKuknJw&t=237s) 三、四年前，多數時候把 root cause 完全說對還是科幻。現在看得到，他們在做的東西和 evaluation 的進展都指到那裡。Evaluation 是最難的部分。Guy 說在不可預測裡建造，是喜悅也是惡夢，但進步看得到。Pomel 說地平線上，技術已經好到能在大量情境交到客戶手上，門檻仍然要極高。

[4:51](https://www.youtube.com/watch?v=8V0grKuknJw&t=291s) 有趣的是安全的門檻低一點。使用者和客戶比較願意賭自動化的決定或通知，營運則比較不願意。風險報酬不同：為了避開資安事件而讓一個 workload 掛掉，可以接受；為了避免 workload 掛掉而讓它掛掉，就不行。Guy 用 Snyk（字幕聽成 sneak）的經驗對上：客戶一開始說不確定也告訴我，真正在意的卻是 false positive，只是不說。他也覺得判斷是不是入侵嘗試本來就比較不確定，人也不被期待每次都判對。Pomel 把營運和安全跟其他 AI 對比：自駕車現在剛開始能做，做的是 16 歲以上的人幾乎不用想就會的事。他們和客戶遇過的 incident，要一大群很資深的人、還有 PhD，花很多時間，有時事件過了幾週還在想到底發生什麼。

## 聊天不是終點，價值在把行動做完

[7:25](https://www.youtube.com/watch?v=8V0grKuknJw&t=445s) Guy 問系統不可預測、使用者又期待完美時怎麼前進：copilot，還是切窄的切片。Pomel 分成兩題。第一是客戶怎麼跟它互動。Copilot，還是自己做事的 agent；用語音還是按鈕。UI 會設定使用者的期待。產業還在找什麼有用。聊天是很好的起點，打開想像，但不是全部。他認為長遠大多數 AI 功能不會從聊天介面長出來。

[9:15](https://www.youtube.com/watch?v=8V0grKuknJw&t=555s) 第二是怎麼帶著信心進市場。可以用較低的 recall 換較高的 precision，先從角落、從所有 incident 裡很小的一塊開始，只做真正高 precision 的。天真的做法會撞上：LLM 特別不擅長知道自己知不知道，總是樂意回答，而且常常錯。他們在做的技術是判斷何時對、何時不對、何時機會高到可以主動猜，甚至直接幫客戶解，而不是什麼都不說。已經被用來做 observability 是優勢，可以挑選要自動行動的案例。自駕車沒有這種奢侈，不能說我只負責左轉。

[11:18](https://www.youtube.com/watch?v=8V0grKuknJw&t=678s) 行動是目標，他們看得到做得到的區域。最低的果子是錯誤：新應用上線，伺服器出現 500，很明顯要修。產生能修的 code 通常不難，難的是把那段 code 送過去、驗證、跑在 production。這是他們正在做、可以相當自動也相當快的一塊。幾年前他們開始讓客戶能採取行動：workflow automation，以及讓客戶做內部營運自動化的應用。這跟公司前十年很不一樣。前十年很小心，只收資料，從不行動、從不伸手回去。現在要關上這個迴圈。他堅信 AI 要顯出價值，就得把行動自動化。一直催人去做，不會成功。

## 波蘭配音是一個人念完全部

[13:34](https://www.youtube.com/watch?v=8V0grKuknJw&t=814s) Simon 轉到 ElevenLabs：試過很多開源 model，配音不夠，他們得自己做更有表現力的配音。Guy 說起源是 Mati 和 co-founder Peter 受不了波蘭電影的配音。Guy 在以色列長大，希伯來語使用者不夠多，沒人配音，片子用英文看。波蘭的配音則很平。

[15:21](https://www.youtube.com/watch?v=8V0grKuknJw&t=921s) Mati 說比品質差更糟：外語片在波蘭通常是一個人念所有角色，不分男女，沒有情緒、沒有語調，故意念平，讓你自己推情緒。他們從小就知道，而且今天大部分內容仍是這樣。技術會改掉它。Peter 是研究員，大學先做影像，後來在 Google 做 knowledge graph，靠近文字，沒做過音訊，但那些領域的想法可能用得上。他們知道這件事做得到、修得了。Mati 這邊看到的是音訊 AI 沒有好產品，他們對外問人，問題很清楚。大約三年前、2022 年，有些開源好一點，但多數聲音仍像 Alexa 或 Siri，一聽就是機器人。

[17:07](https://www.youtube.com/watch?v=8V0grKuknJw&t=1027s) 他們一開始就做配音。2022 年初的原型是把幾步縫起來。第一步 speech to text：誰在說、說了什麼。多數 model 分不出不同說話者或重疊。英文轉寫還可以，時間戳很難。這比轉寫多了對話切分。Nvidia 的 NeMo 在轉寫上是好的開源；他們花時間做 speaker diarization 和時間。第二步翻譯。配音要長度差不多，除非把影片拉長，多數平台不支援。這是大問題，他們知道自己修不了，用當時最好的。2022 年還沒有 ChatGPT，但有 GPT-2。他們把叫得到的 API 都試了。翻譯已經有大約 80% 的品質，看內容：旁白紀錄片不錯，短句加很多情緒就垮。用外部 model 也讓他們知道這領域在發生什麼。

[19:55](https://www.youtube.com/watch?v=8V0grKuknJw&t=1195s) 第三步 text-to-speech。最早用當時最好的。領域裡有名的開源是 Tortoise（字幕先聽成 Porto）。它是從 Siri、Alexa 走向像人的一步，但只在很短的片段穩。一長就劣化，聲音穩不住。他們想改 Tortoise 當自己的底，那是 2022 年初。要抓的是說了什麼、怎麼說、誰說。怎麼說以前沒被解掉。當時的想法是：樣本夠短，就複製原聲，短樣本裡有足夠情緒，換語言時把那點情緒帶過去。

[21:45](https://www.youtube.com/watch?v=8V0grKuknJw&t=1305s) 端到端原型做出來，還可以，以現在的可能來看不完美。三個當時都還不成熟的技術疊上去，總和並沒有大於部分，只是剛好。問創作者要不要試，品質略低於他們願意往下推的線。於是退一步：真要解，不能靠現成的音訊 model，得自己做，先做 text-to-speech 和 voice cloning，把最後一步補上。對外問配音時，另一個訊號同時出現：配音是未來的問題；若能不用自己的聲音做 voiceover、前後製、聽到劇本長什麼樣、做完再改，那會有用得多。研究不夠好，而且路上有另一個更大的問題，所以自己做 model。

## 冷信 Mark Cuban，以及維他命和止痛藥

[23:36](https://www.youtube.com/watch?v=8V0grKuknJw&t=1416s) Victor 的路不一樣。公司 2017 年、AI winter 時成立。Guy 說他現在像高飛的公司，記得對方宣布 ARR 超過一億，早期完全不像。Victor 說看起來像傻瓜三、四年，2017 年的賭注後來是對的。他在丹麥長大（字幕聽成 co Denmark），在當地新創圈做事，想創業，不想做會計或業務流程工具。他愛科幻。當時在做 HR 工具，學到東西，但個人想做 frontier。搬到倫敦花一年想做什麼。那時 AR、VR 正熱，Oculus 剛出，大家以為現在人人都該戴頭盔。他到今天仍愛 VR，但當時覺得障礙太多，不在他能控制的範圍。

[26:02](https://www.youtube.com/watch?v=8V0grKuknJw&t=1562s) 他遇到今天的 co-founder、教授 Matias（字幕聽成 Matias Ner）。對方也看過 VR，但是從內容創作，論文叫 Face2Face，他說那是世界第一次看到神經網路自動生出擬真的影片影格。引起很大騷動。現在回頭幾乎不能看，當時他覺得魔法在那裡：先改變內容怎麼做，再改變內容本身。他愛電子音樂，看到類比。音樂早就數位化：取樣、合成器，不必真的樂器，新曲風和製作的門檻跟著下來。現在是在把影片數位化。Guy 把它說成從實體吉他到電腦裡重現那個聲音，對上從相機拍到螢幕上生成。

[27:15](https://www.youtube.com/watch?v=8V0grKuknJw&t=1635s) 他當時 25 歲，紙面上完全沒資格開這家公司，只是著迷。說服 Matias 很久。組了團隊去募資，大約 80 到 100 個投資人拒絕。點子當時看起來瘋，要外推很多才看得到。倫敦那時大家想投 PhD，去雇最好的博士朋友做大 AI 公司。他覺得自己不是 PhD、會想商業，後來成了強項，當時沒人喜歡。

[28:43](https://www.youtube.com/watch?v=8V0grKuknJw&t=1723s) Co-founder Stephan 寫冷信給 Mark Cuban，信箱是從外洩的 Sony 資料裡找到的。信很短：我們在做這個，你懂技術也懂媒體，很合適。三分鐘內回，很有興趣，問了一串。他們用 email 連續談 10 小時，從來沒有通話。他投了一百萬美元，公司以此起步。Cuban 在家跟家教實作過 Face2Face，不必被說服十年後可以用筆電做好萊塢電影。他在評估團隊。做瘋事情要找已經分享那個未來的人。VC 很難被說服他們還不相信的事。你只需要找到一個，但有時得談很多人。Victor 說那種信可能寫了幾百封，甚至上千。回頭看，pitch 難是合理的：25 歲、點子瘋、使用案例不清楚、技術會不會成也不清楚。他感激 Cuban 下注。拿到錢是里程碑，難的部分才開始：沒人相信我們，有一百萬，現實上能做什麼、能賣什麼。點子在 2016 成形，第一筆錢是 2017 年 10 月。

[31:13](https://www.youtube.com/watch?v=8V0grKuknJw&t=1873s) 他們做了不該做的事：賭技術，不賭一個具體使用案例，再倒推能做什麼。落到 AI 配音：你給真實影片，不是生成的，他們翻成另一種語言，不只換旁白，還重畫臉，看起來像在說西班牙文或義大利文。歐洲廣告主看過嘴型完全對不上的德文版。若大約一萬美元能修好、讓廣告像在那個語言原生拍攝，就說得通。Netflix 花很多錢做內容，若能讓片子看起來像原生的德文或法文，也該有經濟帳。Guy 說這是歐洲更痛的點，幾年後 ElevenLabs 的 Mati 也從這裡出發；單一語言的生態比較感覺不到。美國 VC 聽得懂，但沒有親身痛過。

[32:58](https://www.youtube.com/watch?v=8V0grKuknJw&t=1978s) 當時流行的是 GAN。技術在你直視鏡頭、不看旁邊時確實能動。兩個 PhD 坐大約兩週，做出 30 秒。比較像一家有專有技術的視覺特效工作室。做了幾年，這樣做出大約一百萬美元營收，在那個階段不算糟，讓公司活著。但他們很清楚：做的是 vitamin，不是 painkiller。人覺得酷，若他們隔天消失，不會有人大叫。字幕在這裡結束。
