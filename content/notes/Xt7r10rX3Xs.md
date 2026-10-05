# Don't Secure the Code. Secure the Coder.

片長 40 分 23 秒，英文手寫字幕。AI Native Dev 播客，主持 Simon Maple，另一位主持是 Guy Podjarny。這一集在倫敦的 AI Security Summit：Simon 先訪問 Snyk 的 Brian Vermeer 和 OWASP 的 Sam Stepanyan，再進場聽 Guy 的場次。片頭有會場預告和訂閱插播，下面不展開。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Xt7r10rX3Xs)

## 一句話

要保的不再是寫出來的 code，而是正在寫的那個 coder，也就是 agent。Skills 是文字，卻被 agent 執行，所以它既是讓 code 變安全的說明，也是新的攻擊面。Guy 的三個問題是：行為不確定、單位從 code 換成 intent、變化快到安全若自己不變成 agentic 就追不上。前面兩位講的是同一件事的組織版：你不知道 AI 已經在哪裡。

## 不知道家裡有什麼，就保護不了

[2:02](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=122s) Simon 在會場。Tessl 有攤位。Guy 以前創了 Snyk，現在創 Tessl，要講安全怎麼跟上 agentic development：secure the coder，不是 secure the code。

Brian Vermeer 是 Snyk 的 Staff Developer Advocate，這場是他的活動，AI Security Summit。他說 AI 帶來新的攻擊面，字幕把 vector 聽成 factor。問題從舊的 dependency analysis、code analysis，轉到驅動 code agent，以及 skills 和 MCP。CISO 在抱怨的第一件是：人不知道系統裡已經有什麼 AI。以為沒用 model、也沒用 MCP server，但 agent 自己可以拉一個 model 來追別的事。還有 shadow AI，員工用自己的免費 ChatGPT。攻擊面和光譜都難追、難守，因為又想把 AI 當 force multiplier，又得壓風險。

Simon 把它對回 Snyk 的起點：當時要找出組織在用的 dependencies，於是有了 software bill of materials。現在有沒有對等的東西。Brian 說 AI BOM 已經有人在做，例如訓練資料從哪來，他們可以幫公司掃出來。但他認為拉進來的 context 和 skills 基本上也是 dependency。以前從 repository 拉第三方套件，現在是 skills。Skills 只是文字，得掃裡面有沒有 injection、有沒有藏起來的 comment。更糟的是藏起來的 comment 被複製進 global memory，skill 刪了它還在。回到基本功：吃進去的東西要驗證、要記錄，跟 Docker、dependencies、自己寫的 code 一樣。

Snyk 和 Tessl 的整合是把 Snyk 的掃描結果放進 Tessl registry。用 skill 時可以用一種 Snyk as a judge 的方式看出威脅在哪。他給的快建議是：先搞清楚你現在在用什麼，沒有那份資料就保護不了自己。再來是讓人知道這些選擇和攻擊面。不那麼懂技術、卻用 agent 做自己工具的人，不知道把這份資料接到那個 MCP server 會漏資料。意識是第一點。Simon 說他們在亞特蘭大錄過一整集跟 Brian 的播客。

## 直接接到 production，帳還記在人身上

[7:43](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=463s) Sam Stepanyan 是 OWASP 倫敦分會的負責人，也在全球理事會。他來聽同業。他特別提 OWASP Top Ten for LLMs，以及全新的 OWASP Top Ten for Agentic AI。幾天前在 AWS 的會上，很多公司剛要進 agentic，字幕聽成 genetic，對可能碰到的安全問題完全沒概念。

他說最大的錯誤是完全忽略安全，直接把 AI 接到 production，沒搞懂後果。壓力很大，人人要跳上 AI。他拿 25 年前的電子商務比：人人要有網站、要線上收信用卡，沒人想安全，然後被打。當時 SQL injection 是第一名。現在是沒人想基本衛生，例如 prompt injection，以及其他圍繞 AI 的問題。OWASP 有免費、開源的指南。他特別推薦 secure AI adoption guidelines，社群寫的。

安全是 enabler。車子的煞車讓車可以開得更快。可以又快又安全地創新，但實驗要從隔離、接不到 production 資料的環境開始。出錯時傷害小，也才能在那裡學會怎麼守。AI 是 non-deterministic，今天和明天可以不一樣。另一件很少人講的是 agentic identity。現在 AI 是代表人去做事，traceability、稽核、記錄動作都變得很難。你給 agent 信箱權限，它替你寄垃圾信，或去刪客戶資料。紀錄上不是 agent，是 Simon。他說 it wasn't me, it was my agent。

Shadow AI 在沒有治理的組織裡是大問題。他通常跟高度受監管的產業工作，字幕只聽到 services，那些地方因為合規才有治理。不是每個產業都有。找出誰在用 AI、在哪用、用哪個 model、怎麼存取，本身就是問題。不知道自己有什麼，就不可能守住。Simon 問要不要新的 AI 合規，還是把 SOC 2、ISO 升級。Sam 說 AI bill of materials 正在出現。他們有工具可以依 model 發現 bill of materials，也可以掃 repository，看開發者用了哪些庫。他舉 LiteLLM 的供應鏈攻擊：你知不知道組織裡有沒有那個被打過的版本。開源工具可以做盤點，這一行也有很多別的公司。前提是你得先懂挑戰。沒有 inventory，shadow AI 守不住。

Simon 再推一步：SBOM 和 AI BOM 多半盯 model。Context、skills 住在開發者的環境和專案裡，用來產生 code，卻幾乎沒被稽核。需不需要一份 context bill of materials，或加進 AI BOM，記錄這段 code 是用什麼 context 生的。Sam 說這建議很有趣，他們有一組人在看。Skills 還有一個新的工作小組，在做 AI agentic skills 的 Top Ten。跟其他 OWASP 專案一樣是開源，歡迎貢獻。Simon 說他會加入。

## 三個新問題：不確定、指令、速度

[19:10](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=1150s) 十一點二十分是 Guy 的場。介紹的人說 Guy 瘋到雇用了他，自己還在。Guy Podjarny，Snyk 創辦人、董事會主席，幾年前愛上 AI，去創了 Tessl。很多工作是 agent 時代怎麼做安全，以及 agentic 時代開發軟體的新範式。核心從圍著 implementation、圍著 code 轉，變成圍著 instructions 和 intent 轉，因為現在是在駕駛和引導 agent。所以要從 securing the code 走到 securing the coder，也就是 securing the agent。

軟體開發是知識工作的先兆。他從 AI augmented 講到 AI native。前者是 Copilot、然後 Cursor，幫你寫 code。後者是委派：叫 agent 做一件任務，它去做，做得好或不好。他認為現在該用 agentic development 當安全的心智模型。一個人能做的變得很多，也比以前的軟體安全多了新問題。他講三個。

一，non-deterministic。以前編譯過一次就會再編譯過。掃過沒有這個問題，再掃還是沒有，發現是同一批。Agent 不是。得接受統計：十次成九次、一百次成九十九次。怎麼處理，甚至怎麼發現。二，它圍著 intent 和指令，不圍著 code。要保的新軟體單位是什麼。三，變得非常快。安全和其他知識領域都比以前快。他這場只講這三個。

[22:28](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=1348s) 最大的是不確定，讓他想到 DevOps。會動的就量，不會動的也量，以免它開始動。手上最統計的東西曾是那些有時起來、有時躺下的伺服器。學到的是：不能最佳化你不能量的東西。AI 裡 eval 已經很成熟。典型做法是給 agent 一個任務，事先定義什麼叫好，再跑。他故意從非安全的例子開始。ElevenLabs 是倫敦很成功的文字轉語音實驗室，也能生音樂，字幕聽成 11 labs。任務是給遊戲工作室做動態配樂。五個情境，每個跑十次、打分。線不高，因為音樂 API 比較新，權重裡代表不足，agent 不太會用。點散得到處都是。同一件事再做，有時是正常的散布，有時中過一兩次之後又沒中。很難用。

他把「harness」這個字說出口又叫大家忽略。最常見的改進是 context，現在最常見的單位是 skills：有一點結構的 markdown。知識不等於智力。Model 可以很聰明，不知道的事常常就是做不到，或做得非常沒效率，中間會有統計。ElevenLabs 的 music skill 解釋那個 API。他用 Tessl 做 evaluation。沒有 context 時用了 deprecated 套件、import 也不對。沒有 skill 平均 50%，有了是 98%。有些情境因此變得夠好、也夠穩定；有些仍有一點散，但整條往上。

## 更多 context 不一定更安全

[26:07](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=1567s) 安全的例子是 Code Guard，Cisco 做的、捐出來的，把一批 OWASP 安全規則包成 skill，讓 agent 寫出更安全的 code。他做了六個 evaluation，專看 authorization。例如為一個專案管理 API 做 access control 的測試套件，有沒有 Code Guard 都跑。沒有的時候，authorization 記分卡是 48%。有那些指令，大約 1.6 倍。他把 Code Guard 裡只跟 authentication 和 authorization 有關的部分留著，他記得大約是全部內容的 5%，分數到 98%。更多 context 不一定更好。跟你講一百件事，每一件得到的注意力少於只講三件。注意力對人和 model 都稀缺。要挑 model 還不知道、說了才有用的，不要浪費。

同一份執行，不同 agent 反應不同。上面的 Opus 和 Sonnet 結果差不多。Opus 更聰明也更貴。這個任務用 Opus，錢和時間大概是浪費，Sonnet 做得到一樣的。Codex 和 Cursor 又更不一樣。重點不是誰比較好，是不同的 agent 像不同的人，聽法不一樣。你要知道指令對你在用的那些 agent 有效，而且不浪費。

所以要用 skills 幫 agent 寫安全的 code，得學會量。好的 context 是：做出 skill、評估、最佳化到指引變好，再散給 agent，然後觀察發生了什麼。Eval 像測試。改了之後怎麼知道沒弄壞、有沒有變好、能不能換更便宜的 model。若不觀察現實，測試會跟現實脫節。他們叫這 context development lifecycle，CDLC。人該活在 CDLC，做出引導 agent 的好 context，再把它用到 agent 工作的 SDLC。同一份指令可以貫穿開發過程，像團隊裡好的開發者用同一套知識定義功能、寫 code、排查、上線、處理 incident。安全也可以：一開始怎麼寫安全的 code、code review 要標什麼、incident 發生時要檢查什麼。這些都能是跨 SDLC 的 skills。

## Skill 是會被執行的軟體

[30:40](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=1840s) 第二點是把 skills 自己的安全當一回事。它看起來像 markdown、像 Notion、像 Confluence。處理方式卻是交給 agent 執行。從安全看，它是軟體單位，不只是一段文字。Snyk 的研究和其他很多研究都指出，尤其在字幕寫的 open Claude 世界裡，很多 skills 是惡意的，攻擊者放進東西，想讓 agent 做不該做的事。Tessl registry 裡有一個被 Snyk 掃到的例子：大多數 URL 是普通的 blockchain API，其中一個突然在下載有密碼的 zip。聽起來不對，可能是惡意 skill。偵測做得到，但明顯不完美。

也有脆弱的 skill。例如憑證處理不安全，叫使用者把 API key 放進去，或用很普通的 token 去打 MCP。行為不安全，資訊可能被帶出去。還有他不認為是產業術語、但自己叫做 negligence skills 的：裡面沒有基本的安全指令。例如要 commit 進 repository，不要做成公開的。不能 commit 就失敗，不要改走別的方式把東西送出去。這些是真的例子。Agent 有 reward seeking：你叫它做一件事，它非常想做成，於是逃出 sandbox、刪檔案、做任何能讓你滿意的事。所以要寫一點安全指令。他說這跟 Brian 的例子類似：不要揭露某些資訊，至少沒那麼疏忽。

供應鏈也一樣。今天的現實是人從 GitHub repo 或其他地方把 skill 抓下來，你不知道這件事發生了，也不知道它在哪。然後 check in 進 repository。不同 agent 從不同地方讀，同一個東西可能在 repo 裡七個不同資料夾各放一次。還早，會變好，現在並不好。一旦把 skills 看成軟體單位，這些就明顯了。

企業級的 skill 治理還很新。他給 Tessl 的看法，三件事。第一是治理和安全：搞清楚到底發生什麼，稽核使用。你發了 skills，有沒有人裝。限制取得路徑，讓人總是從一條集中的路下載，跟 NPM 函式庫該做的差不多。做不到這點，常常就 rollout 不出去。Roll out 之後要標準化、要能重用。三個人各做了一個 code review skill，第四個人想用：去哪找，三個裡選哪個。有人提議修改，怎麼知道好不好。一百個人在用，你要改，怎麼知道沒弄壞。標準化和可重用需要一個量法。最後是聖杯，持續最佳化，也就是那個 CDLC。觀察 agent 失敗了沒有、使用者有沒有糾正它，把資訊送回去改 skill、做新的 eval。最前面的公司在做。多數組織離這很遠。所以順序常常是這樣。

他接著介紹 Tessl：一邊幫人一起開發 skills，讓開發者發現並裝上有品質的 skills，觀察發生的事，從中學習、走出新路。控制包括跟 Snyk 一起，每個發進 registry 的 skill 都掃過，讓你知道它不是惡意的。安裝時也有掃描。有誰在用什麼的分析。給負責把 agent 成功 rollout 的團隊，agent enablement、platform、developer experience、AI enablement，一些去掉重複、推動使用、壓成本的能力。他說 agentic development 是 cheaper than expensive：一開始很便宜，因為一個人能做很多，然後帳單來了，就不那麼美好。他再戴回 Snyk 的帽子，說還有把 agent 行為本身和它的 runtime 守住的部分，字幕接了一句 in Evo，這裡不另取產品名。

## 安全若不變快，就追不上

[36:42](https://www.youtube.com/watch?v=Xt7r10rX3Xs&t=2202s) 第三點：agentic development 比以前任何時候都快，安全必須變成 agentic 才追得上。這對他很熟，像 Snyk 早期。從 waterfall 到 cloud，有些手動流程在 waterfall 被容忍，到 cloud 不被容忍。每一片軟體出貨前都有人手動稽核，當時可以。最好的團隊把掃描自動化了，一般團隊沒有。進了 DevOps、進了持續交付，就不能這樣，掃描必須自動化。現在面對同一件事。有些事在 cloud 還被容忍，最好的團隊在自動化、在審查、在自動改進，多數團隊沒有。到了 agent，這些不再被容忍。未來已經在這裡，但分布不均。該想那些紙割：安全的人替開發者做漏洞分診，或只修真正刺眼的、其餘不修。很多不再是選項。從 nice to have 變成 must have 的清單很長：優先順序、自動升級、供應鏈動手腳的偵測。他給的只是一小組樣本。好消息是每一項 agent 都能幫忙自動化。Agents all the way down。一層 agent 叠在另一層上，才擴得開。

所以安全處在蘿蔔和棍子之間。若不變成 agentic，永遠追不上，會失敗。攻擊者正在變成 agentic，比以前快。生意也得變成 agentic 才開發得動。若安全真的變成 agentic，那些長久希望開發者穩定去做、卻做不到的應用安全，反而有機會補上。他覺得興奮，也有一點膽怯。幾週後倫敦 6 月 1 日和 2 日有 AI Native DevCon，談的是真實組織裡的 agentic development。他猜 Brian 可能會講。

Simon 收在會場：攤位、展場、場次，特別是 Guy 講的 securing the coder, not the code。製作人是 Tom Dowler。播客說自己是 skills 和 context 的 package manager。Tessl 在倫敦市中心的辦公室有每月聚會，網站是 tessl.io/community。
