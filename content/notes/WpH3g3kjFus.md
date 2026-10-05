# Why Faster AI Development Often Increases Rework | Cian Clarke

Simon Maple 主持。來賓是 Nearform 的 head of AI，Cian Clarke。片長 54 分 3 秒，英文自動字幕。他們五月在紐約 AI Native DevCon 同台，最近也在倫敦辦過 meetup。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 BMAD 聽成 BMA、BEMAD，把 Kiro 聽成 Keiro，把 Cian 聽成 Kean、Kieran。

- 原片：[YouTube](https://www.youtube.com/watch?v=WpH3g3kjFus)

## 一句話

需求有洞，模型不會去問，它會把洞填成一個它發明的功能。那就是返工、浪費的 token，和 repo 裡的 code smell。BMAD 是他目前看過最接近完整 spec-driven 的開源流程：把「做什麼」寫進文件，而不是塞進一次 prompt。規格要寫給人審。人還在迴圈裡的地方是架構和需求；故事拆好之後，他寧願讓 agent 在 sandbox 裡自己跑，再看 epic 的結果。

## 名字先於縮寫，發現來自一場會

[1:23](https://www.youtube.com/watch?v=WpH3g3kjFus&t=83s) Cian 的工作是在 AI 裡實現客戶的野心，近來很多是 generative AI。有時是把客戶產品裡的專有知識挖出來給終端客戶，有時是做 agent 系統讓團隊變快。他們也在想怎麼建，不只建什麼。Nearform 在 Node.js 時代長大，大家知道他們是因為這個。最近想的是 AI native delivery、coding model，和 spec driven。

BMAD 對他是目前對「完整的 spec-driven workflow」最好的近似。標語是 Build More Architect Dream。名字來自創作者。字幕在 Brian Madsen、Madison、Madson 之間晃，他們停在 Madison。先有名字，再去找 acronym，他覺得縮寫有點牽強。它是開源專案，這對 Nearform 重要，因為他們的來歷是開源，上游貢獻過 Fastify 和 Node core。它對 model 廠商開放，對 IDE 也開放。核心是聰明的 context engineering：給 model 最好的 context，讓它自己去建軟體。V6 剛出，可以選專案規模，有模組系統，可以帶自己的角色。過去幾個月演進很大，貢獻者很多。

[6:30](https://www.youtube.com/watch?v=WpH3g3kjFus&t=390s) 發現來自他們自己的流程。顧問裡他們常做一種叫 ignite 的 discovery，把利害關係人對準到底要建什麼。每家公司都有這種會：需求是什麼、會動到業務的哪些桿子，並且好好寫下來。他們用會議裡的 AI 筆記，把 context 收成 playback 簡報和需求文件。主持這些會的人發現，光是談要建什麼，就能得到不錯的需求和 backlog。他說 AWS 用 PRFAQ 和會前預讀做很多這件事，現在有個詞叫 squad mobbing。他們本來用 vibe coding 做之後會丟掉的原型。大約六個月前有個領悟，不是他，是團隊的 James，沿路發現 BMAD 很會拿那些文件去磨 model 的輸出。Cian 自認是 vibe coding 的懷疑者。突然可以駕馭 model 在做什麼，對他是 revelation。

## 模型會把缺口填滿，工程師以前會去問

[8:53](https://www.youtube.com/watch?v=WpH3g3kjFus&t=533s) 他要 vibe coding 長大一點，有護欄。不確定的地方不要讓 model 填，讓利害關係人填，確認需求是完整的。不完整的需求進到正在建系統的 model，含糊至少會變成它編出來的功能，也可能變成大量返工和浪費的 token，最後 repo 裡真的有 code smell。產出的東西也被傷到。他把它想成軟體專案的 context engineering 加強版：讓 model 盡量站在它在建的 what 上，也站在你要的 how 上。駕馭放在文件裡，不是一次 prompt。Simon 說 BDD 時代就在想這些。現在問題定義裡滿是 AI 的詞，問題更大，因為 agent 把以前就有的含糊需求放大了。

工程師若看到需求缺口明顯會影響使用者，會去問產品經理或利害關係人。會有點煩：sprint 進行到一半，為什麼沒想到。但缺口會被填上。Model 只是編。有時編對，很多時候不對。

到目前為止，BMAD 是 Nearform 裡想用 AI-native 方式推進的開發團隊的首選工具，另一個強的競爭者是 Kiro。他觀察它不適合快速原型、不適合打算丟掉的功能原型，因為流程重。V6 可以說你要建的層級，原型會簡化流程。他還沒有足夠上手時間形成意見。快速原型他仍會拿 Bolt.new。要建可出貨的 greenfield MVP，他覺得絕佳。Brownfield 到今天仍有挑戰，但它是他碰過、在大型既有 codebase 上最好的東西。

## 手感、資深，以及規格寫給誰

[12:54](https://www.youtube.com/watch?v=WpH3g3kjFus&t=774s) 他的背景不是顧問，比較新，大多在產品公司做工程領導。他用 developer empathy 想怎麼把工具推給團隊。銷售講顧客同理，工程領導要認開發者同理：你還在鍵盤上時，什麼讓你發瘋。他恨 infrastructure as code，CloudFormation 部署連續 rollback 十五次，還得回去手動刪。也恨半夜自動化測試爆掉，因為按鈕往右移了十個像素。還有文件。這些苦差事，能不能用 AI 放進開發生命週期，讓它不那麼痛。這套方法要在 markdown 上花很多時間。有的開發者喜歡寫文件和規格，有的不喜歡。他會想跟這些系統互動的是哪種開發者，他們實際得到什麼。

[14:52](https://www.youtube.com/watch?v=WpH3g3kjFus&t=892s) Simon 記得在 DevOps UK 的閉幕主題演講後，有人臉上帶著擔心：你投影的未來裡，開發者不寫 code 了嗎。他說很難找到人會堅持 code 永遠是那件事。懷疑者說不是這輩子。他覺得某時會發生，只是比現在再高一層抽象，問題是何時。在乎創造、架構、東西怎麼拼在一起的人，那些討論還在。完全黏在 code 本身的人，他認為那部分會減少，很多人也這麼看。Cian 說 code 變得比較不重要，不代表那個產物的品質不重要。這些年的最佳實務一樣重要。Code 要能 lint，才讀得了、維護得了。結構要好。選擇依賴變成工藝。他說不要選最新版的 Next.js，最近的事已經顯示過。挑哪些模組、依賴、架構，在他腦子裡變得更重要。逐行寫 code 變得比較少。

Nearform 一直雇資深的人。公司平均經驗大約八年，也有十年、十五年、二十年。他覺得那種開發者駕馭這些工具會更有生產力。接下來幾年，一般工程團隊的形狀會怎麼變，值得看。這個時代一個不幸的產物，是招聘管道變窄，初階開發者的未來變難。這讓他有點沮喪。Simon 覺得資深的人比較自然轉得過去，因為有經驗、知道規格為什麼要那樣寫。初階的路會不同，他們學的東西不同，也可能更 AI native，因為那就是他們學的路，使用 AI 的門檻更低。Cian 沒那麼擔心團隊突然只剩資深、初階人才枯竭。市場不會讓那件事發生。還是需要把初階養成資深。也許有一次小的清算。做得沒那麼久的人，對 AI native 的改變更開放，最後可能是優勢。

[20:17](https://www.youtube.com/watch?v=WpH3g3kjFus&t=1217s) 規格誰是主要讀者。人和 agent 都要讀：一個拿它生 code，一個要維護、確認功能對、寫得好。Simon 用 code 比喻：可以寫給機器最有效能，那就難維護；常常選擇可讀，讓編譯器去處理效率。Cian 說規格寫給人是絕對必要的，因為審查很重要。若產出只給 model 消費，你大概沒在審它生成了什麼。從逐字稿生一份 PRD 然後盲目接受，在他眼裡就錯過了 spec-driven 的目的。打磨那份規格，就算有些開發者不喜歡寫 markdown，才是這個過程真正重要的部分。Model 能不能解讀，他經驗裡考慮得不多。Model 非常能適應。把甘特圖的 PDF 丟進去，大概會很慘。他本來就用的 Mermaid，或 web sequence diagram 的語法子集，在技術文件裡非常有用。若你是在 GitHub 上用 markdown 寫規格長大的，會很順。若是 Microsoft Word，圖是用那些會拆成 XML 的結構搭的，就沒那麼順。開發者現在架構文件的方式，model 剛好很會讀。

## 規格會爛，文化要先把假設攤開

[23:15](https://www.youtube.com/watch?v=WpH3g3kjFus&t=1395s) 規格也會過期。有一條光譜。一頭是 spec as source：規格是基線，丟掉規格再生成，得到一樣或很接近的 code。另一頭是 spec-first：規格活過 epic、功能或任務的生命週期，然後丟掉。他覺得框架會走向 spec as source，重要的產物是規格，一路cascade 回 PRD。眼下確實看到文件腐爛、不同步、有點陳舊。BMAD 裡他看過一點解法：往 backlog 注入會改變開發方向的新工作項。那個工作項裡有這則 story 自己的規格，講期望的實作細節。會不會乾淨地回到 PRD 和架構文件？有時會，不總是。工具正往讓文件保持同步走，還沒到。

Simon 用 DevOps 當例子：人先過度轉向工具，後來發現要先處理的是團隊和文化。BMAD 是技術問題還是文化實務。Cian 說兩者都有，但一開始是文化。它強迫你在前面把專案裡的假設露出來。若開發進行中才挖到這些發現，結果會不穩。和所有利害關係人對準一份文件，講清楚到底在建什麼，對他是純粹的文化改變。SDD 工具也帶來技術實務的改變。他看過最糟的，是從團隊變成單一貢獻者。他們最想解的是怎麼把 spec-driven 擴到一整個開發團隊，而不是一個人同時當 DevOps、前端、後端，清單還可以繼續。那不是在企業裡建東西的好方式，協作要解得更好。眼下的限制是技術的：這些工具輸出的任務清單把前後端混在一起，假設 full-stack。其實可以把任務對到個別角色，讓人各自貢獻。他對更協作的文化樂觀，工具還要追上。Simon 說文化改變常常有心，真正逼人走那些步的是工具。工具訓練人，過渡期它幫團隊長得快，久了就不假思索。

## 規格要剛好，新創會覺得慢

[29:17](https://www.youtube.com/watch?v=WpH3g3kjFus&t=1757s) 細節到多深會開始拖慢。新創裡，把要建的東西寫得過度詳細幾乎是髒話，超詳細的規格會拖慢團隊。規格的正確大小是工具現在的另一個挑戰。BMAD 這類框架產出的規格規模可以過度冗長、過重。他們想修掉這一點。不只為了人的 context 把尺寸調對，也因為 model 能理解的量有限。Context window 被規格占得愈多，輸出品質愈下降。BMAD 是他看過最接近的，但不完美。它對很長的 PRD 和架構文件做 sharding：依 epic 拆功能需求，架構文件依元件拆，例如前端和後端。跟 model 互動時，那些共享文件只有子集進 context window。理論上每一行規格都幫 model，其實是在為 context window 做最佳化。現實裡會過量。規格多長開始有害而不是有幫助，是這些框架最該做對的事之一。

Simon 正在做大約 80 個 markdown，放核心安全實務和政策。全部丟給 LLM 做 code review，context 太多，它不會很小心地全做。他想改成對準特定流程，先從 authentication 掃一個很大的 app。Cian 說 sharding 的邏輯現在坐在 BMAD 裡。往上是 IDE 怎麼選最相關的 context 給 foundation model，再往上是 model 在做 coding 任務時自己決定拉哪些 context。我們能在標準化規格上對齊多少。現在有 `AGENTS.md`，然後是 `.cursor` rules、project constitution、`CLAUDE.md`。有點蠻荒。MCP 被放進一個開源基金會，他覺得很好，但跨 model 廠商和 IDE，規格的基礎積木還要標準化更多。框架裡的技术和術語會不會一路落到 foundation model 和 IDE，他覺得很刺激。Agent 無關的做法會很重要，因為一家公司裡的 IDE 和 agent 都不一樣，卻想要同一種風格。

[34:38](https://www.youtube.com/watch?v=WpH3g3kjFus&t=2078s) 新創重速度、交付、實驗。Vibe coder 會覺得這很挫折。從 20 分鐘到一小時看到產出，變成一場五、六小時的文件會議結束才看到產出。對習慣低 diligence、一路 prompt 到一個很酷的應用的人，這天生挫折。他的領悟是品質反映出你多放的那一點力氣。大約兩天寫規格、迭代 backlog，他覺得自己懂那個產物，否則要一個月，而且 code 大概比他自己寫的好。Repo 裡 code 有 lint，兩三百到四百個 unit test 和自動化測試，前後端在架構上分開，有 infrastructure as code。他覺得任何沒用這套建法的新創，會很難競爭。Y Combinator 的新創用 AI 工具的比例他不想引錯，但極高。誰都能拿一個 vibe coding 原型給投資人看閃的東西。把它變成能撐到前 500 或 1,000 個使用者的東西，是另一個問題。Spec driven 是做這件事的方法。

有人從 prompt 開始，再把 code log 送去說：從這些 prompt 看出我的意圖，從生成的 code 看出建了什麼、我滿意什麼，做一份代表這個的規格。純 prompt 會不會強烈限制想靠近 production、想在組織裡放大 AI 的人。他說不是不能做出完美的 prompt，把規格的 context 全包進去，把 context window 調到剛好，一個任務一個任務、一則則小故事。那做得到。Spec driven 加上框架，讓你更可能成功。他並不固執這就是 AI native 工程的未來，也不完全相信。Cursor 特別慢採用很多 primitive。最近的 plan mode 感覺像 spec-driven 或和它相容，但不是正好那樣。現在這是跟這些 model 工作的最好近似，包括 BMAD 本身。不表示明年還是這樣。過去九個月他學到的一件事是水晶球天生有錯，他會做出很糟的預測。

## 需求債、信任，以及 Nearform 在試的平行

[39:40](https://www.youtube.com/watch?v=WpH3g3kjFus&t=2380s) 規格很差的系統會變成什麼。是技術債，還是負債，因為 LLM 會照著實作並做假設。技術債至少該退到背景，因為用 agentic coding 去清 backlog 變容易了。有時那不像苦差，很有回報，但消除技術債這件事現在通常容易得多。於是真正對不齊你想建的東西，變成問題：定義很差的需求。三四天 spec-driven 之後，你突然有一個兩三萬行的 repo。沿路漏掉一些需求，是不是更難恢復。流程有沒有足夠彈性補上。他試過的做法是在 backlog 末端注入新項目，仍然跟著 spec-driven，而不是逃去 vibe coding。那很誘人。很難。需求文件這個產物的穩健程度也是。Kiro 團隊在研究什麼叫一份真的好、定義清楚、有結構的需求文件，他覺得用的是 formal methods，讓需求形式良好、完整，缺口也能被 model 認出來。

[42:13](https://www.youtube.com/watch?v=WpH3g3kjFus&t=2533s) 規格和 BMAD 是為了讓 agent 更自主，因為那是一份更細的腦內傾倒，還是仍要那種有人來回、因為護欄而更安全的聊天。他說兩者都是，拒絕只選一個。Backlog 拆解是現在有空間加速的地方，因為框架裡已經注入了一些安全和護欄。迭代架構文件和需求文件，他仍覺得要有人。一旦 backlog 拆好、重排到你滿意，每一則 story 用新的 context window 一個個做，形狀是好的，他就不确定坐在那裡核准 model 建議的每一條指令是不是時間的好用法。可以在 sandbox 裡跑，每則 story 之間強制 commit 和 push。它若去 `rm -rf`，沒關係，東西在 Git 裡、在容器裡。Vibe coding 把整個目錄刪掉的迷因，在有足夠護欄和 sandbox VM 時就沒那麼是問題。他想加速穿過一批 story，也許只審查 epic 的輸出。寫規格、對準規格，現在自主的空間比較少。若那一段也高度自主，會不會某種程度上回到 vibe coding，他不知道。沒有信任就沒有自主。信任是文化裡允許 agent 伸展開跑的那一塊。

他把信任輸出看成轉到自主的那根桿子。短期內，每個 context window、每則 story 都審查輸出，那就這樣。品質指標愈往右推，愈負擔得起自主，也愈負擔得起加速。有趣的是 model 愈來愈為自己做過的事寫測試。TDD 那些老技巧仍然成立。Model 能測試輸出，用一個完全分開的產物證明它宣稱能動的東西是真的，而不是只解讀 code，我們就愈能信任那份自主。那是我們一直用來信任一個產物、信任部署的傳統軟體工程技術，現在由 agent 在用。他偶爾想，會不會有一種 model 用來驗證 code 的新構造，是 SDLC 裡我們傳統不做的。研究也許往那裡走。Kiro 在這塊做得最多，他們叫 checks。一種查完整性的測試方法，不是 TDD，也不是 BDD。

[47:31](https://www.youtube.com/watch?v=WpH3g3kjFus&t=2851s) Simon 說 Tessl 早期在想規格裡怎麼寫一項能力。可以寫成我要應用做這件事，也可以稍微改寫成測試：當這件事發生，我要你回這個。規格變成你希望為真的清單，也就是測試案例。先寫能力，還是先寫測試。Cian 說 EARS 這種需求寫法，很適合接著寫出之後用來驗證那條需求的測試該長什麼樣。那比一場腦力激盪的傾倒重要得多。一句簡短的需求，又能當可測的產物，非常有價值。也許會走到：一個 Playwright 自動化測試只靠觀察做出來的介面，加上那句話，不看 code。Code 是黑盒。這是介面，這是需求，證明它真的能動。Simon 說那就是 LLM as a judge。Cian 說有幾篇論文顯示這是跑 evals 的有效方式，而且很準。

他們把 BMAD 推到團隊時碰到的挑戰，逼他們實驗，因為他們就是以團隊運作。他做過一點 spike，把團隊的規則寫進 BMAD。同事 Luca 在做很厲害的事：強迫 BMAD 的 backlog 產生器和 GitHub Issues 這類系統同步，並且不只在開發者機器上編排這些 workflow，也透過 GitHub Actions。工作紀錄透過瀏覽器讓全隊看見，而不是只在 IDE 裡。這也幫助平行。這是 2025 年下半年大部分的實驗。現在公司在玩的是要不要擁抱混亂，讓一群很聰明的人自己驅動實驗，開源的方式。希望 2026 能從這些點子收成一套更統一的 Nearform 大規模交付方式，補上核心框架的挑戰。是在 BMAD 裡加一個模組，自己做框架，還是貢獻回去，都還沒定。他覺得得貢獻一點東西，希望是開源，尤其是多個團隊平行的時候。

想跟上他們，從 nearform.com 開始，職缺也在那。Spec-driven 的實驗他說自己是他們部落格上最差的，最近寫在別人部落格上的比寫在自己的多。LinkedIn 上他不定期貼 spec-driven 的技術內容。Nearform 的 insights 帳號，以及幾位同事被主帳號轉發的內容，也很多。事情不順時他們也公開講。他下次來倫敦，他覺得會是一月的某個時候。
