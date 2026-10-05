# Google DeepMind's Logan Kilpatrick on Why AGI Won't Be a Model

Logan Kilpatrick 上 AI Native Dev。主持人說他先前帶 OpenAI 的 developer relations，現在是 Google DeepMind 的 member of the technical staff。錄音當天是 4 月 1 日，也是他進 Google 兩年。片長 38 分 17 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 SWE-bench 聽成 SweetBench，把 Claude Code 聽成 Cloud Code，把 Antigravity 聽成 anti-gravity。開頭有一段倫敦活動預告，下文不記。

- 原片：[YouTube](https://www.youtube.com/watch?v=nU_Ou3aUkkM)

## 一句話

AGI 不會是一顆 model。它會是某人做出來的產品：一個 harness、一個 CLI 或 IDE，把 model 用起來。現在更接近的說法是 narrow superintelligence，例如一個系統能用 code 做出任何東西。學術上的 generality 還沒有，模型仍會被人類很容易的事絆倒。對一般人，工具已經在創造經濟價值。開發者要拿到前沿的生產力，就得接受用法每三個月都在改。Prompt engineering 他看成 bug。Skills 現在有用，是因為能省 tokens，長期他預期 model 會自己寫、或從一份領域技能庫裡拿。

## 十二個月前 agents 還是笑話

[2:17](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=137s) 他說這一週 AI 生態又是混亂，社群上像野火。主持人提到 Anthropic 有意或無意地把 Claude Code 開源了。Logan 在 2022 年底進 OpenAI，ChatGPT 推出後一週，參與推出 GPT-4，也出過 chat completions API、assistants API、plugins、GPTs。十二個月前開發者圈裡談 agents 還像科幻，會被笑說那東西根本不動。現在人在做 agentic 產品，也在用 agents 做當初答應的事。他和團隊在想下一組今天仍有點像科幻的東西。他們在 DeepMind 的研究組織裡，內部用 research to reality 這種說法：責任是把研究接到現實，為 builders 和 developers 做產品。每天就是出產品、出功能、做平台，讓那個飛輪轉起來。

[5:07](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=307s) Google 的難處和好處都是生態很寬，碰到開發生命週期的每一段，也碰到 web、mobile、cloud。AI Studio 他用一句話框：一個平台，幫你從 prompt 到 prototype 到 production，用他們的 AI 基礎設施，而且要快。以前它是 UI playground，用來試 DeepMind 最新的 models，再拿到 Gemini API 上做產品。過去六個月平台繼續長。Playground 還在，新 model 第一天就能試。另外有一整段 vibe coding。這是 playground 的自然延伸：幫人把 model 放進產品、把想法做出來。人也變多了，不只開發者，還有以前用不了這些工具的下一代 builder。他說把技術帶給盡可能多的人，是 AI Studio、大概也是 DeepMind 裡的使命。到 ai.studio/build 可以用 vibe coding 做整個 app，底下是 Firebase 這種儲存、用 Cloud Run 部署、用 Google Search、用 Google Maps 做 grounding。按幾個鈕，不必註冊八個帳號。

[7:41](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=461s) 幾種表面他這樣分。Gemini app 是日常的個人助理，那天早上他拿它問了一串醫療問題。Gemini CLI 是給本來就活在命令列裡的開發者。Antigravity 是 full-stack 的 IDE、agentic developer platform，和在 Cursor 或 Claude Code 裡做的事類似，拿來當日常駕駛，寫很複雜的 codebase。AI Studio 則是電池裝好的 app builder，加上別人可以蓋上去的基礎設施。

## 用法不會收成一種，規則在腳下改寫

[8:40](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=520s) 主持人問，五年前 99% 的開發者用 IDE，今天已經裂開。Agentic development 變成常態之後，會不會收回一種典型做法，還是終端機和視覺會一直並存。也有人覺得 vibe coding 給非開發者，資深工程師不必改工作方式。Logan 假設會持續並存，因為這是個人偏好。AI 之前就有人用 IDE。他自己一直是 IDE 使用者，用過 VS Code，也用過 GitHub 在微軟收購前自己做的那個 IDE，他很喜歡。同時一直有 Vim、Emacs 這類終端機工具。這是舒適度，也有人體工學和生產力的取捨。他認為取捨會變多。做新軟體的成本在下降，所以會有更多探索、更多怪東西。每個開發者最後可能有一套很客製的建造方式，因為心智模型不同，學的語言不同。開發者也會為自己做很多這種東西。極端想像是每個開發者都有自己的 VS Code fork，編輯器是一塊，agentic 的那塊自己做、自己調。答案大概在中間：在人原本所在的地方碰面。生態不同，對 AI 和工具的熟悉也不同，所以產品體驗該不同。今天要做一個高度可擴充、可客製的產品，對正在做產品的團隊來說很難。

[11:49](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=709s) 主持人轉述他說過的用法：vibe coding 若要三十件事，第一個 prompt 就問三十件。Model 現在夠聰明。以前得先問小的再疊，因為一次給太多 context 會淹沒 model。Logan 說這個現象會繼續。他自己也在會覺得困難的那一群，沒有覺得自己想通了。要有改變的 mental plasticity。今天使用 AI 工具的方式和三個月前不同，再三個月前又不同。想要前沿的生產力，就得繼續進化。這對人很難，但這是現實。十二個月前他只敢問最小的一件，否則 model 和 agent 會自己絆倒。現在他不斷踢自己：也許該多問三件、四件、五件，或想要的全部三十件。速率的限制變成你能多快把事情問出去。這個轉變就在過去六個月，一年前不是這樣。規則在腳下被改寫。要嘛騎上這波，要嘛拿不到那種前沿增益。

## Prompt engineering 是 bug，skills 是短期的省法

[13:59](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=839s) 他在 Antigravity 裡做 AI Studio 的工程時，工程團隊做了一大堆 skills。這對他有用，因為他不是 Google 裡天天寫 code 的工程師，不知道很多系統怎麼運作。那些 skills 把 context 帶進來，也影響架構決定。

[15:02](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=902s) 他一直覺得 prompt engineering 是 bug。去問使用者，他們不想做 prompt engineering。你叫他們補上的東西，往往已經存在別處。在 LLM 或 AI app 1.0，人提供的價值就是 context engineering：把散落的來源找出來，放進小聊天框，送給 model。世界觀在 deep research 出來時轉了。你可以丟一個很不成形的問題、想法或假設，Gemini 自己去瀏覽、找資料來源，當場做 context engineering。介面會顯示它在看哪些網站，有時幾百個，有些情況幾千個。那是他的頓悟：產品會往這裡走。人做的是人會做的事，問很薄的問題。系統負責去找。Coding tools 已經這樣：在一百萬行的 codebase 裡要一個改動，model 自己 grep、把對的 context 拉進來。你不該還得說它在某個資料夾的某個 HTML 檔。給很少的 context，model 該自己搞懂。他很高興寫 code 這側已經往這個方向走，也希望其他領域跟上。解鎖是 model 當場做 context engineering。

[17:08](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1028s) Skills 今天顯然有幫助。他預期方向類似：models 大概會學會當場做 skills。原因是省 token。一份帶著對的 context 的扎實 skill，能讓 model 少走彎路。不然它會對 Google Drive API 發一百個都不成功的請求，自己修正很多次，讀二十個網頁，看七十個例子。它最後搞得定，但花時間、浪費 tokens。短期內 skills 是繞過這件事的辦法。時間一長，他預期 model 會預先寫好一批，或從一份領域權威的 skills 庫裡拿，讓人不必再像今天這樣手工做 skills。主持人補了一點：產業的平均做法，和一家公司的政策、很特定的呈現方式，不一定一樣。Model 也許能在本地找出來。但 skills 一旦在，不管是人做一次還是 LLM 做的，就該放在某個 repository，需要時再拉。

## 軟體變多之後，缺口還在；AGI 是產品

[19:15](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1155s) 主持人引用他先前的說法：十年後軟體的量會是現在的一百萬倍。那對開發、對要看顧這麼多 code 的人的價值會怎樣。Logan 說十年後所謂的 development 看起來會差很多，但仍有相似的事：人還是在用軟體修問題。工具怎麼被拿來用、範圍、細節到哪一層，他覺得還懸著。他對軟體工程、以及工程這個學科相對樂觀。世界上的軟體變多，自己做軟體、或請人為自己做軟體的人也變多，問題就會很多，不能動的東西、edge cases 都會很多。工具做得到、但一般拿著工具的人做不到的那條前沿，永遠會在。缺口的位置會變，缺口也會一直在。就算 models 和工具變得非常好，傳統軟體工程的開發者仍會在那個缺口裡提供很大的價值。

[21:13](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1273s) 他覺得這段對話很容易掉進教學法。他想的軟體工程是一種解決問題的方式、一種看世界的方式，不是我按鍵、字元出現在螢幕上、那些字元代表 Python 或 JavaScript。很多地方的 computer science 教育就是在教解題。AI 不會把那個價值變小，反而會加速它。按鍵讓字元出現的價值大概會下降，但仍會有理由、仍有價值。他慶幸自己花過時間想這些，而且它顯現在他今天怎麼做東西。主持人問這是不是一種 mechanical sympathy：懂東西怎麼被做出來，才能把應用做得更可靠。他說是。需要有人有那個深度。是不是每個人都要？大概不必。你要有專家能進去、問對問題。做軟體的手段大幅增加之後，很多技術決定沒有真正的答案，只有一個意見很強的人。往往不是單一正確方向，而是很多可能。人依自己活過的經驗、直覺、對技術限制的理解做決定。這些會繼續。

[23:59](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1439s) 幾年前他在 X 上問離 AGI 還多久，Musk 回明年。沒有發生。主持人引用 Logan 自己的說法：會有人在產品層把對的元件和一個很聰明的 model 織在一起，然後人們會叫那是 AGI。他覺得這段對話隨時間更複雜。幾年前、甚至十年前，沒有工具做得到這些事，討論很學術、很哲學，定義來自那個階段。當時最先進的是 AI 在玩遊戲，還沒泛化。過去三年，產品採用和這件事怎麼進到生活裡，變得非常劇烈。他幾乎把自己從一部分 AGI 對話裡解開。需要有人做學術上嚴謹的那一面，他沒有那個觀點。他的觀點放在一般人會怎麼跟這東西互動。把今天的技術帶回三年前，人家會說這就是未來。門柱一直在動。他覺得我們接近人們會感覺到的 narrow superintelligence：一個 model 或系統能用 code 做出任何東西。在那一點上人類比不了。學術上的 AGI 問的是 generality。他認為 models 仍沒有 generality。他現在可以用 AI coding tools 做出幾乎任何想要的軟體，同時仍能用人類很容易做到的蠢事把 model 絆倒。在 poker、chess，或人類可以相對擅長的那些事上，打敗 model 還挺容易。嚴謹的論點是：在 model 不再被這些事絆倒之前，沒有 general intelligence。對一般人，這不重要。工具已經很有衝擊，已經在創造大量經濟價值。他的世界觀是 AGI 不會是一顆 model，會是某人創造的產品。就算持嚴謹觀點的人，看現在的 models 大概也會同意：要做 coding，你需要 agent harness，還需要一個產品，CLI 或 IDE，把 model 用起來。還有 capability overhang。所以不太會是某家實驗室丟出一顆新 model，大家就覺得那是 AGI。比較像是三個月前出的一顆 model，一支很聰明的產品和工程團隊找到一種有趣的用法，放進一個系統，然後人們普遍覺得那是 AGI。

[29:43](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1783s) 誰來做。他沒有答案。他慶幸在 Google，因為產品分布在很多垂直，那些地方若真要有這種一般智能，你會預期它們得夠好。他預期 Gemini app 這種個人助理，若它是一般智能的，就該能調度、跟不同工具和生態合作，幫他完成任何想做的任務。Tool use 和其他正在進到 app 的東西，是往那個方向。一個系統也許依賴很多其他系統。他覺得大家低估了解這個問題所需的廣度、深度和複雜度。若最後只剩一個聊天介面，你問一句，大家說這就是 AGI 因為它什麼都能做，他會非常驚訝。比較可能是編排過的、很多不同的東西、大量的 UI 複雜度，比那個簡單的 AGI 想法囉嗦得多。

## 快問：算力、基準、十年後誰在碰 code

[32:27](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=1947s) 他這陣子在 Google 比較好玩，覺得那是做產品的好地方。Sam Altman 被低估的一件對的事：算力的量級。Sam 近乎狂熱地確保他們為那樣的 AI 消耗準備好資源。Logan 跟 Sam 的第一場會議，Sam 就在談這個。大家已經給 Sam 很多功勞。若要賭五年後哪一家 lab 不存在，他的賭法比較是：我們今天把它們看成 labs 的方式會不一樣。其中一家大概會變成不像今天這種 lab 的東西。他的感覺是生態裡會有很多贏家，人會轉向不同的事。社群媒體的比喻不一定準，但早期產品長得很像，後來大多數人看得很清楚：Snapchat 是和 Instagram、和 X 完全不同的生意和產品。

[34:10](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=2050s) Agents、RAG、prompt engineering 哪個最被高估。他說人已經離開 RAG 和 prompt engineering。它們以前也許被高估，現在大概評得剛好，就是大家沒有把很多賭注放在上面。概念上仍然重要。前沿已經移走。最被炒作的基準，他說自己很喜歡 SWE-bench。做的人持續推出更好的版本，做得很好。他的唯一意見是，某些早期版本完全偏離他認為大多數人做開發的分布。數字他記得不準，他說可能有偏差：原始 SWE-bench 裡大約 40% 是 model 在架 Django。能測這個很好，但開發者大概不會把 40% 的時間花在那裡。所以不一定是被高估，而是新的 SWE-bench 有在跟上這個時刻。

[35:26](https://www.youtube.com/watch?v=nU_Ou3aUkkM&t=2126s) 十年後軟體開發者會更多還是更少。絕對人數他覺得大概很接近。會有新的角色輪廓。每天碰到 code 的人也許是現在的 10 到 100 倍。Member of the technical staff 這種輪廓就是例子，那些人大概在做別的事。開發者的絕對數相同，碰到 code 的人會多非常多。過去幾年最重要的論文，他選 scaling laws，或最早的 transformer 論文。兩者撐住了這個產業，影響很大。最被低估的公司，他說是 DeepMind。每六個月他問自己，Google 是不是世界上做這件事最好的地方，每六個月答案一樣，是。人才、以及 Demis 經營 DeepMind 的方式，和他很合。Google 是大船，方向對的時候事情會走得很好。他希望開發者不要再問 rate limit。不是因為煩，他很能同理。AI Studio 和 Google 其他產品都在從產品側解這個問題。他要的未來是算力充裕，開發者做想做的事，不必擔心 rate limits 和 quota。那需要一批產品工作。他自私地希望大家停止問，是因為問題被解掉了，不是因為他討厭這個問題。
