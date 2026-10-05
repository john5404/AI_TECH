# Automating Code Performance Optimization with AI with Saurabh Misra

Saurabh 是 Codeflash 的 founder 兼 CEO。他在印度長大，現在住舊金山，軟體工程和 machine learning 大約 8 年。在 NVIDIA 做過給晶片架構師優化 GPU 的效能工具，在 Cresta 帶過 ML，也在 Meta 做過 ML 和 gen AI model。片長約 35 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Codeflash 聽成 Code Flash，把 Pydantic 聽成 Pedantic。

- 原片：[YouTube](https://www.youtube.com/watch?v=Y1Q_TmS0yV4)

## 一句話

功能要先能動、要先 ship，效能常常排不進去。Saurabh 把第一份能跑的實作當成 spec，行為由人負責，效能這種非功能需求交給 AI，而且要同時守住正確性。他的論點是這不是未來，Codeflash 現在就能對 Python 做：產生候選、用很多輸入比對行為、再把 runtime 量到能分出雜訊。LLM 很會提出「也許更快」的改法，它不負責證明那句話。

## Python 贏了，直覺卻會猜錯哪一行比較快

[0:18](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=18s) 大家都想要 code 很快，但壓力是先讓功能動、趕快送出，從來沒有時間優化完。他要講的是：第一個能工作的版本就是 spec，然後 AI 怎麼在守住正確性的前提下把它變快，並且整段自動化。

Python、JavaScript、TypeScript 是現在最前面的語言，因為開發者喜歡、最好寫新軟體。他故意說得尖一點：Python 贏了，正在帶 AI。這場用 Python 舉例，概念適用其他語言。可讀，是因為關鍵字像英文、換行讓程式看起來分開。可攜，寫一次、到處跑。標準問題多半已有函式庫。它是 data science 和 ML 的預設語言，Pandas、NumPy、PyTorch、TensorFlow 都在。少量程式就能做很多事，生產力高。

[3:19](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=199s) 同一批優點也讓它慢。可讀代表直譯器得在 runtime 把人讀得懂的 code 轉成機器指令。可攜可能代表它沒有把機器指令用滿。函式庫太多，很難單就效能做決定。資料科學和 ML 的函式庫多半是編譯過的，瓶頸仍可以是 Python 本身。高生產力養成的文化是：能動、測過、送上 production，就去做下一件。開發者不會把效能排很前面，而且 Python 裡什麼比較快，本來就不好推理。

[4:39](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=279s) 他問兩句哪個比較快：兩個整數相加，或兩個 double precision 浮點數相加。聊天室有大約 10 秒延遲，主持人猜整數，Saurabh 自己原本也這麼想。結果浮點比較快。Python 的整數不是 32-bit 或 64-bit，是物件，長度可以任意，處理這件事有 overhead，整數加法甚至比浮點慢。

效能今天多半被忽略，直到真的很慢。沒有時間讓所有應用都快，backlog 在等，deadline 在前面。優化要經驗和很深的領域知識，要進到系統和演算法裡找更有效的做法。實務上要先做 end-to-end benchmark，profile 找 hotspot，然後變成開發者的創意題，做一段研究，試幾個想法，看有沒有弄壞、有沒有更快。他自己有過花上數小時或數天，優化後的 code 比原來慢，然後放棄。結果就是軟體可以比它最高效率的版本慢很多，使用者抱怨，成本上升。

## 第一份能跑的 code 就是 spec

[8:45](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=525s) 他想像的未來是：開發者負責行為規格。今天 keynote 裡 Guy 講了 spec-driven development。Saurabh 現在的 spec，就是第一份事情能動的實作。AI 會以現在這種 copilot 的方式，幫人很快到達第一個能工作的版本。然後 AI 自動處理非功能需求：安全、找 bug 並修、自動部署、降低成本，以及效能。開發者實務上不會、也不能花那麼多時間在效能上。他要說的是，這不是以後才會發生。

[10:22](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=622s) 示範是開講前剛推上去的 pull request。函式在一串文章之間找共同 tag：迴圈、做 intersection、更新共同 tag、回傳一個 set。他寫了兩個測試。輸入有 title 和 tags，三篇文章的共同 tag 是 Python 和 AI。Repo 裡已經裝了 Codeflash。它會裝好 Python 環境和 pip 依賴，在目前的 git diff 裡找一個要優化的函式，並發現 repo 裡已有 361 個 unit test。它找到剛 commit 的測試檔，再產生新測試和新的優化：兩個測試檔、四個優化。

原始碼兩個測試通過，31 個新產生的測試通過，benchmark 是 774 milliseconds。第一個候選全部通過，8.4 milliseconds，大約 90 倍。第二、第三個也大約 90 倍而且正確。第四個 34 倍，測試也過。它選最快且仍然正確的那個，寫解釋，把建議放回 PR：改成用 set 初始化，用 `intersection_update`，沒有共同 tag 就提早 break。774 milliseconds 變成 8.4。他覺得可以，就 commit。意思是你先把變更送出，Codeflash 當 CI check，能優化的就在背景優化。

## 它改的不只是小迴圈

[14:16](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=856s) 有人會覺得那段 code 太簡單。他舉已經合進去或自動找到的幾類。演算法：LangChain 的 cosine similarity top K。兩個矩陣 X 和 Y 做逐列 cosine，類似 Cartesian product，再取 top K 的 index。原來是全部排序。陣列若到 1,000，就是 1,000 的平方，n 平方。Codeflash 改用 NumPy 的 `argpartition`，他比成 quicksort 的 pivot：top K 放前面、較小的放後面，只排序那 K 個。合進 LangChain，快了 148%。

函式庫：大家都用 Python 的 JSON，它找到 ORJSON，Airbyte 這段快了 70%，而且是自動發現的。簡化計算：判斷 data frame 有沒有 null，原來對兩個軸各做一次 sum，改成取出所有值再做 `.any()`，快了 433%。比較不尋常的是遞迴。遞迴深了要建整條 call stack，在 Python 特別貴。它改成自己用 stack，append、pop，放進迴圈，不必呼叫函式。Pydantic 的 JSON ref parser 因此快了大約 34%。

他也秀自己上週寫的錯。往 dictionary 加東西時，想知道 key 在不在，在就警告，不在就建新 key。他把那個函式呼叫了兩次。優化是呼叫一次、存進變數。這在 Codeflash 自己的內層迴圈，這段操作快了 40%。另一段 Pydantic：某個 name validators 是 false 時，原碼仍做很多處理才回傳 schema。提早離開，快了 100%。

它還有很多類型找不到，他們一直在改。但他說它已經是通用優化器：丟 Python 進去，通常能找出較好的版本，而且把工程師那整段流程自動化，包含正確性。它是軟體，不需要人盯著問「這能不能更快」。他們常下載一個套件、跑 Codeflash、把優化貢獻回開源，觀眾也可以試。既有 code 和新 code 都能做。裝成 GitHub 上的 optimizer，就是持續優化，讓以後寫的 code 也快。

## 三件事：想得出來、沒有改行為、真的比較快

[19:46](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=1186s) 背後拆成三個問題。第一是產生優化候選。先看懂整個 repository：測試在哪、函式在哪、彼此怎麼連。再把這段 code 的 context 從各處抓來，交給 LLM 的優化模型。它會試好幾個想法，有些好、有些不好，它自己不能確定。

第二是正確性。不能合進會弄壞的 code。新 code 換掉舊的之後，行為必須一樣。做法是產生一批輸入，原始版和優化版都跑，比對給定輸入下的輸出，以及所有行為規格，兩邊必須完全相等。輸入從好幾種技術來：既有 unit test、LLM 產生的新測試、把 end-to-end workflow trace 下來做成 replay test，還有比較不尋常的 concolic test。幾十到幾百個輸入。不能在理論上證明等價，實務上可以非常接近。

第三是 benchmark。通用 code 上這件事很刁。他們產生多樣的效能 benchmark，看不同輸入下 runtime 怎麼走，自動插樁量時間，依 benchmark 的好習慣把 code 迴圈跑很多次以求穩定，並把量到的 runtime 去噪。這樣才有很高的信心說新 code 真的比較快。

[23:21](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=1401s) 他希望大家把自動優化放進軟體工程流程。使用者採用之後看到明顯加速，寫 code 的方式也變了：不必先問這是不是最好的寫法，只要問能不能動、對不對，優化交給 AI，人因此更有產能。現在就可以 `pip install Codeflash`，用在 Python 專案上。有 Discord。他說目前想試多少都可以，是免費的。他們在招聘。

## 問答：候選很容易，證明很難

[24:33](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=1473s) Guy 問，LLM 做這些優化，和生新 code 比起來有多好，有沒有特定 model 的看法。主持人把姓唸成 Pajani。Saurabh 的 aha 是 GPT-4 出來時，他發現它真的很會優化，而且越來越好。現在的 model 很會產生候選：也許這個快、也許那個快。你不知道它有沒有改壞、有沒有真的更快，所以 benchmark 那整段才是關鍵。複雜度可以再加。極限是把整個 code base 丟進去、重新架構、全部變快。他覺得還沒到，也許有一天，也許有些事做得到。從理論上看，優化對 LLM 可能比從零生成容易。Prompt 若是「幫我做一個 tic-tac-toe」，問題定義很差。優化給的是第一份能跑的 code，規格清楚，可以執行。所以優化大概比 zero-shot 生成應用容易。

Orry 問 false positive 和 false negative 的比例。他說 false positive 在這裡是指它找到一個其實不是優化的優化。他們花很多力氣把這個壓得很低，而且現在已經做得很好。真實 code 很複雜，要覆蓋更多輸入空間、做 coverage，所以有四五種測試，很快還要再加一種，benchmark 也要能分出系統雜訊。真實程式有 side effect、網路、資料庫查詢，更難。經驗測試從理論上到不了 100% 正確，那是計算機科學的開放問題，但測得越多可以非常接近。

[28:41](https://www.youtube.com/watch?v=Y1Q_TmS0yV4&t=1721s) Macy 問最難的是想出優化、確認真的更快、還是不要 regression，或者全部都是。他跟新的候選人說，這是他解過最難的問題，也很刺激。說來好笑，優化本身是比較容易的部分。今天把一段隨機 code 丟給 ChatGPT，它就能做得不錯。把它自動化，標準要抬到另一個層次。現在最難的是正確性驗證。Benchmark 實務上也很難：跑在 VM 上，系統雜訊很兇，他們因此有過很多 false positive。現在會迴圈跑幾十萬次，從中找出穩定的 runtime。很難，但現在能用。

Kevin 問，Pydantic 快了 100%，是不是真的有 PR 被真實專案接受。他說有，已經有人用在 production workflow。他們的做法是下載 Pydantic、裝上 Codeflash、跑 `--all`，掃整個 repository，通常會開出幾十張 PR。Pydantic 想改善效能，他們做了，他記得合進了 12 張。主持人提過自己以前在 Snyk，會為了安全元件開很多 PR，問開發者願不願意付審核的成本。Saurabh 說開發者通常猶豫，尤其是 AI 寫的、還宣稱問題已解決的 code。那表示標準更高。他們的解法是比開發者自己會做的更多：產生幾十到幾百個測試，人可能只寫三五個，benchmark 做得很嚴。接受的門檻因此更高。主持人說那就是變更的成本，以及對這張 PR 的信任。

Sarthak 問非決定性行為。他說大概不行，但看情況。若要優化一個真正隨機的 random number generator，無法知道行為是否還一樣，他會說不行。很多其他情況可以把非決定性變成決定性。例如 `datetime.now` 可以 patch 函式庫，讓它永遠回一個固定字串。隨機整數可以先 seed。有些非決定性處理得了，極限情況不是全部。

Farhat 問它能不能上網拿到最新函式庫。若明天有一個快五倍的新函式庫，要不要手動加。主持人開玩笑說 JavaScript 社群每 10 到 20 秒就有一個新函式庫。Saurabh 說他們用「不解決」來解決：經驗上驗證效能。你在用第二版，第三版出來，就直接拿你的 workload 測，看是不是真的更快。不做假設，因為效能取決於你的 context。更快才開 PR。目前不會直接升級函式庫版本，那會弄亂 Python 環境，算未來的工作。他們可以建議別用 Python list、改用 NumPy 這類改法。裝新函式庫比較麻煩，但肯定做得到。
