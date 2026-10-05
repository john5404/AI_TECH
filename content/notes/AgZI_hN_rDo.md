# Ordering Files for AI-Assisted Development with Guy Eisenkot

片長約 30 分鐘，英文自動字幕。講者 Guy Eisenkot。他說自己待過 application security 和 cloud security，是個 code scanning nerd，這套解讀 code 的技能幾乎只能用在工作上。公司字幕聽成 buz，大約一年前開始，網站他說是 b.co，研究多半放在 GitHub、LinkedIn 和 Twitter。問答由 Simon 主持，結尾他謝了 Tessl（字幕聽成 tesle）。字幕有幾段很亂，沒說清楚的數字不補。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=AgZI_hN_rDo)

## 一句話

他們想解決的是：pull request 給你的永遠只是一小撮檔案，還常常按字母排，人和 model 都得自己腦補下游。Guy 把「改變餵進 model 的順序」當成一條被忽略、成本又低的路，先用別的工具把 code grammar 理出來，再塞進 context window。靜態索引和 LLM 都試過。定義找得到，引用對不上。有用的分工不是把排序全交給 model，而是看 PR 的哪一段本來就該由人看、哪一段 AI 已經比靜態工具強。

## 語法早就在工具裡，PR 卻不按那個順序給你

[2:30](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=150s) 他用開車比喻。自己最早學的是 Python，文法像紅綠燈。簡化的例子裡，input validation 像停止標誌：不符合條件就不要往下，以免錯誤和崩潰。他想講的是 code 裡看不見的那層。就算沒有整齊地攤在一個或幾個檔案上，執行、解讀或編譯時，grammar 的零件都在。他會反覆區分 implicit 和 explicit。

[3:50](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=230s) 談 AI coding 時，他用一張 4×4。橫軸從 code completion 到 code generation：前者是幫你補已經開始寫的下一段，後者的起點可以只是一個 idea，沒有既有 code。縱軸上面是把更多控制交給 AI，用 agentic workflows 分多步去 plan、spec、evaluate、execute；下面是現在比較成熟的 co-pilot，人還在控制，用 tab 接受建議，或用 chat 把想要的行為改清楚。左下角主要靠 human in the loop。LLM 已經懂 grammar，所以那一格特別有幫助。愈往生成、愈把控制交出去，就愈需要過去的 context，或這個 codebase、這個專案裡已有的 context。他要 AI 也許寫得比人好，同時還守住舊專案的慣例。

今天不談兩條路。[6:28](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=388s) 一是 reasoning models，在給出結果前，用 chain of thought 問 code 該怎麼組成。二是把 context window 加大，整份 codebase 塞進吃得下那些 token 的 model，然後什麼都問、結果還一致，model 不會變懶或累。他說商業現成方案和 Hugging Face 上較小的 model，有時就會累。他們要談的是被忽略、幾乎低成本的那塊：改變資料餵進 model 的順序。這有點像 chain of thought，但也先用別的工具把 code grammar 弄清楚，再放進 context window。

[7:39](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=459s) 開發工具其實早靠 grammar 在動。IDE 用 language server protocol，從 definition 跳到 reference，靠跨檔案的節點關係導航，也可以用 plugin 或本機的 server。套件管理器，他點了 npm、Bun（字幕聽成 Bond）、Cargo、Maven，建的是 dependency graph。要的是這個專案需要的那一小組套件，不是你曾經想 import 的全部。有些語言做得比較好。他們已經看過：只把正確的依賴給 model，比把一切都給它好。

他覺得最不平凡的例子是雲端，也是他的 infrastructure as code 背景。HashiCorp 的 Terraform、AWS 的 CloudFormation，後端都是一張資源關係的 graph。改的時候只看增量，不該被這次改動碰到的基礎設施不會被拆掉。他說這是現代 stack 裡 grammar 最漂亮的一種實作，比 application code 順得多。

## GitHub 的四個分頁都只給你一個子集

[9:44](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=584s) 要打的問題是 pull request。不管喜不喜歡，它是把 code edit 送進既有 codebase 的主要慣例。code 不是孤立的。請同儕看一個大專案的變更時，我們只給一小撮檔案，然後假設他們看得見他說的 Matrix：像 compiler 或 interpreter 一樣，補出下游衝擊和 blast radius。人做不到。進公司不久，或對這門語言、對某些 grammar 不熟，就看不到變更的全部範圍。也許你本來就只該看那個子集。實際上 PR 常常忽略下游的 grammar，把一小段丟給你，再指望後面的 CI/CD、integration、build 抓到人很難外推的影響。

[11:08](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=668s) 他發了兩次牢騷。Git 本可以解：git log 和 commit message 若能不斷改、用來錨定變更，就可以當一次 commit 或 PR 的 context 和 grammar。他拿 David Beckham 的梗說，實際不是這樣。打開他的 code，commit message 就是你想的那種。工具不夠，流程也不夠，接不起來。他覺得 stacking 加上 AI 也許能補這個縫，可能是下一場演講。

再來是在 GitHub 上按順序讀 PR。他想像有四個地方。[12:21](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=741s) description 是一條時間線：變更、主要說明、底下的 checks、merge blockers。看得到隊友的互動，看不到 code。commits 只有在你已經審完 PR 之後，才適合看增量；若有團隊把 commit 組織得很好，他想知道。checks 那一頁他不太喜歡，CI 結果通常被丟去 GitHub Actions，再倒回來，順序是亂的。百分之九十的時間花在按 A 到 Z 排的 files changed。那是 git diff 切出來的子集。他覺得不夠。每個分頁都只看得到變更的一部分，所以很難看出這次修改的線性。

這就是他們上路的動機：把 git 和 GitHub 的 PR 流程拆開，用一種新的順序重排。自動化要像人讀 code 那樣讀。他說最好的做法其實是把 branch checkout 下來、在本地跑、看 debug log 和錯誤，再在 IDE 裡走 definitions 和 references。起點是 code indexing，或他說的 code directionality。

## 靜態索引找得到定義，LLM 對不上引用

[14:53](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=893s) code indexing 不新。用了 IDE 十二年或十五年的人都碰過，它就是讓你從 A 到 B。他排了幾種。Microsoft 維護的 LSP。他說的 LF，從上下文是 LSIF，是在那個協定上的改進。GitHub 有兩個專案在 indexing 和 references 之間來回：stack graphs（字幕聽成 stag graphs）和 tree-sitter。Sourcegraph（字幕聽成 Sor graph）有個專案，想解 LSP 的一些問題。最近才加上 LLM。他特別談 OpenAI 的 GPT-4o（字幕說 40、4.40）。有人會說 Sonnet 3.5 更好，他說就這個用途，實證上結果相當一致。

三種看法。LSP 是一次性的：給一個 symbol，走到它被 reference 或 define 的下一處，開源，GitHub 和 Microsoft 的網站都有。stack graphs 很像，支撐 GitHub 一部分比較精準的搜尋。tree-sitter 是增量的，可以掃過整個 codebase，再掛上更多 context。這些他都算 static code analyzers，跟 AI 關係不大。另一邊是 LLM。你現在就可以打開 ChatGPT 或 Claude，塞進整個 codebase 或 repo，問某種語言裡 code 怎麼被定義、怎麼被引用。靜態分析輸出的是 abstract syntax tree，盡力代表執行路徑，像 interpreter 或 compiler，靠語言本身看懂 definition 和 reference。看得到的，model 就有不錯的機會抓到。

[17:44](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=1064s) 研究早期是 2024 年初。他們用 SCIP（字幕聽成 skip），也就是 Microsoft 那些專案能用的 indexing 協定的擴充，去分析 Java repo。標準用途有效，但不完美。local variable 的處理嚴重有限。package structure 的追蹤在基礎上就有問題，某些 Java 元素還輸出第 0 行。他們也許會回饋一個修。繞來繞去，還是沒辦法涵蓋所有他們想拿來排序的語言。

tree-sitter 很紅，是增量的靜態掃描，很多安全向的 static analyzer 在用，包括他以前的團隊用過其中一個子集，做 snapshot 很強。他們拿一個 Rust 專案來比。那個專案核心是 Rust，再用 JavaScript 和 Python 補特定用途。有些情況它能解析基本的 struct、field、field type，也建立了他們期待的 parent-children。缺點是 impl 的函式對不上 parent struct，整條鏈會斷。多行的 use statement 有時把 identifier 切壞。他們想過把 SCIP 和 tree-sitter 接起來。SCIP 對特定語言很強，但有些語言它會去跑 compiler 或 interpreter，他們不喜歡。兩者有重疊，沒有銀彈。靜態工具沒有把他們帶到要去的地方。

[20:24](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=1224s) 然後他們看 GPT-4o。這段工作大約始於五、六個月前。手上已有基準：靜態分析在特定語言裡怎麼走、缺口在哪。一開始是驚喜。定義的光譜很全，多語言比預期好。他甚至假設很新的語言也能處理 variable assignment、construct、alias。最大的問題是 reference matching。LLM 不像前面那些工具會去走 graph。它們吃進一段 code，用同一個機率模型讀它。他說，那個模型拿去寫一首情歌，也拿來把 code 解釋給人聽。只靠 LLM 做直接的字串比對，就處理不了最常見的幾種：alias、parameterized name（字幕聽成 paralyzed name）、contextual method call，以及其他幾個。研究沒有漂亮的終點，但值得繼續花時間。

## 人看慣例，AI 看修得動的 log，以及會不會打破生產

[22:03](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=1323s) 他叫這張圖 PR grammar gradient，時間不夠，只講最後一版。三塊。最需要人、最手工的是 review 和 suggestion，人的回饋迴圈。第二是 testing、回饋和修復。第三是把 code 部署進生產，用 integration 和 CI build 排除問題。每一塊裡，deterministic model 加上 LLM 都有能拉開差距的地方。

底下那一層是 semantics 和 conventions。意外的是，這正是人特別在意的，卻不是 AI 最強的地方。logical 和 syntactic correctness 才是 AI 擅長的：把 CI 的 log 用 bash 的形式丟進去，問最好的修法，回答通常相當準。最後是 coherence，用 model 判斷這段 code 最終會不會碰到生產裡已有的 artifact。code 怎麼變成 service、infrastructure 和 API，把那些屬性拿去問：會不會被影響、會不會是 breaking change。

他看到的是：人在這張圖的左側比較強。AI reviewer 在測試和修復上開始很有效率，碰到 coherence 時還勝過靜態模型。後面還排了更多研究。他點名同事，字幕聽成 Hower，GitHub 和 LinkedIn 上都有。那位同事在用 sequence analysis，混合靜態和動態工具看大型 codebase，過去幾個月也在做更複雜的大型 codebase 研究。字幕沒有把排序本身的準確率講成一個數字，這段以這張梯度作收。

[25:05](https://www.youtube.com/watch?v=AgZI_hN_rDo&t=1505s) Simon 問下一步。Guy 建議拿現有 model 對自己的 codebase 試：公開的 console，餵一個檔案、一份 diff，或整個 repo，問 Claude 3.5 Sonnet，摸清它們哪裡強、缺口在哪。想再鑽，就把 tree-sitter 或 SCIP 的輸出當 prompt 的輸入。例如一份 diff 已經由 tree-sitter 分析過，再問 AI 什麼會壞，看結果是不是比以前好。

Richard 問他看過最差的資料順序對 model 表現如何。他答的是最差的 model：o1 出現之前的上一批 OpenAI，GPT-4o 之前，model 甚至沒有穩定去解析常見的 code struct。他說大約一年前、也許九個月前看到的那個狀態，和現在差得很遠。最好的則分兩半。o1 最會回答「這次改動守不守得住慣例」：讓它理解程式的 contract 或 API spec 之後，最能判斷下游會不會變成 breaking change。若要的是可解釋，Anthropic 的 Claude 3.5 Sonnet 是他目前看過最好的，比上一版好一截，他也會從這個 model 開始。

本機和雲端差很多。他們測過小型 model，也測過很大的 instruct model，不能比。這類工作的 context 是多變的：一份 JSON 在描述 diff，格式像 git 的輸出，code 則從 YAML 到 Python 都有。他說可惜，開源 model 不如商業的。

Min 問把公司的 code 餵進 model，隱私和安全怎麼看。他說這是過去工作就關心的題目。先講明顯的：這些 model 在寫 code 上的效率，使我們遲早會承擔一部分暴露。他在 Palo Alto Networks（字幕聽成 paral networks）這類大公司待過，聽說對方現在在用 Sourcegraph 的 code 產品。若對方做過研究、覺得這筆交換值得，他就會建議走。他說自己團隊已經深在用 Copilot 和 Cursor。Simon 補：大公司去問自己的法務，他們多半會告訴你這個範圍裡什麼能用、什麼不能用。
