# From Prompt Engineering to Flow Engineering: Moving Closer to System 2 Thinking with Itamar Friedman

Itamar Friedman，Qodo 的 CEO 和共同創辦人。片長約 37 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Qodo 聽成 Codo、Cotto，把 o1 聽成 01，把 Latent Space 聽成 Latin space，把 Kahneman 聽成 kahanan。他說這場講哲學和動機，不講該用哪個 framework。

- 原片：[YouTube](https://www.youtube.com/watch?v=23v9GBJvcrc)

## 一句話

把 LLM 當黑盒，它是在配對訓練過的 pattern，複雜問題、一致性、除錯和推理都不夠。OpenAI 說 o1 打開了 System 2，他認為誇大了，比較像 System 1.5：多想幾步，但不知道自己缺了 context。人仍是 System 2。把開發者解題的步驟做成 flow，每一節交給模型，比把整件事交給一次 prompt 穩，也比較不挑模型和用字。

## 黑盒只會配對 pattern

[0:48](https://www.youtube.com/watch?v=23v9GBJvcrc&t=48s) 名字他要主持人念第三種。Qodo 大多代表 quality of development。Codium 現在指他們的模型：LLM 很會懂一行一行的 code，不太懂整條軟體開發流程。Qodo 想讓開發者把 AI 用在 code review、測試，和提高開發品質。這場不談產品。LangGraph 這類工具他點名但不展開。

[3:02](https://www.youtube.com/watch?v=23v9GBJvcrc&t=182s) LLM 當黑盒：輸入自然語言或 code，輸出例如生成的 code。訓練資料是一大批開源 repo，希望是可允許的資料。進來先 tokenization 成向量，裡面學 pattern，出去再變回 code。它做的就是為輸入配上對的 pattern。進來的東西、以及它訓練時看過的 pattern，決定輸出。

[4:31](https://www.youtube.com/watch?v=23v9GBJvcrc&t=271s) 直接當黑盒用，有幾道限制。複雜問題難處理。它本來就該貼 pattern，但常常給你某個輸入的平均，不會自己考慮所有 edge case，除非你放進 context。Code 一致性也不能指望：codebase 裡某處已有同樣的寫法，你再要一次，它不會自己維持一致，除非外面有產品去要求。除錯也一樣。Context 有限，它不會自己知道要 debug 什麼、怎麼處理。這些限制很多是缺 context。他另外強調：就算人蒐齊了相關 context，還是要推理。直到不久前，推理是另一道障礙。新模型好很多。他說自己在 Eric 之後講，Eric 是 Bolt.new 的 CEO，兩人剛錄了約十天後要上的 Latent Space。這類工具大約十二個月前做不到、現在做得到，是因為模型開始很會看 code snippet，也能做還算合理的推理。

## System 1、1.5，和還沒到的 System 2

[7:40](https://www.youtube.com/watch?v=23v9GBJvcrc&t=460s) OpenAI 說 o1 打開 System 2。他說誇大了，這場結束前會看到離 System 2 還有距離。名詞來自 Daniel Kahneman，諾貝爾獎，他說去年過世。書是 *Thinking, Fast and Slow*。System 1 快、反應式、幾乎是 heuristic。開車開頭幾年很專心，十年後幾乎自動。System 2 是分析的、有方法的、慢的，給複雜問題。它仍在環境裡自動導航，但目標不是下一個 token，而是做完一件事或一個決定。他說話當下自比 System 1，也許 1.5：依前面的 token 吐下一個。

[10:07](https://www.youtube.com/watch?v=23v9GBJvcrc&t=607s) o1 是 Chain of Thought。不只想接下來幾個 token，還決定要不要對接下來幾個想得更用力，沒到結論就再迭代。他不認為這是 System 2。模型對環境沒有知覺。Context 不夠時，它不一定知道自己缺了 context。人解一個完整功能時，會先判斷資訊夠不夠、要蒐集什麼、用哪些工具，不是邊寫邊在飛。o1 不是那樣。

[11:22](https://www.youtube.com/watch?v=23v9GBJvcrc&t=682s) 他畫一張很普通的生成系統：輸入、蒐 context、prompt 模型、輸出。重點是輸入和輸出都不是很具體的定義。Prompt 沒定義好，context 沒定義好，輸出可以很模糊。圖像很好懂：豪豬騎駱馬、後面有月亮。你在乎品質，但不存在唯一一種構圖，所以 System 1 就夠令人興奮。System 1.5 是 o1，或你自己把幾次推論串起來並用工具，AlphaCodium 就是。它會把輸入問清楚，輸出也因此比較具體。豪豬那個例子，它可以說有三種構圖，你要哪一種。System 2 再往上。他願意把 agent 當 buzzword，但意思是一台會看環境、額外資訊、工具、其他 agent、已知和未知的機器。它知道自己在更大的系統裡，並用 Kahneman 那種框架：大而重要的問題，先看環境、目標、手上有什麼。他認為我們可以、也應該走到那裡。o1 還不是。

## 競賽題上，flow 比一次 prompt 高

[14:25](https://www.youtube.com/watch?v=23v9GBJvcrc&t=865s) 證據用 Codeforces。DeepMind 把幾場比賽收成 CodeContests。AlphaCodium 自動去比，對手有 DeepMind、OpenAI、Meta、Salesforce，他們大概是第五。字幕還聽到另一家，名字沒聽清。o1 比 System 1 更靠近一點：有引導的思考、一些推理、結構清楚的問題它處理得來。幻覺還在。他看到一個 meme：GPT-4o 讓滑板的人撞車；o1 像同一個人跳過幾階、轉幾個圈，然後再摔。用起來就是這樣，幾步看起來在推理，最後仍幻覺。幻覺變少，但有時不是小錯，是很華麗的錯。

[16:25](https://www.youtube.com/watch?v=23v9GBJvcrc&t=985s) 其他隊伍是逼模型自己從 System 1 走到 1.5，或想走到 System 2，他認為他們走到的是 1.5。人還是 System 2，模型還沒那麼好。所以把開發者解競賽題的步驟做成 flow，每個節點用 LLM 解那一步。題目有時零個測試、有時五個。先反思你讀到了什麼，再看那幾個測試，推理題目到底是什麼意思。想出不同解法，例如四個 pseudocode。排名，決定先做哪個。若走 TDD，再多生幾個測試。然後寫程式、跑測試。過了就繼續用題目給的 ground truth，並迭代 AlphaCodium 自己生的測試，直到做出解答。

[18:48](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1128s) 沒預料到的性質：每一步的 prompt 變小。改一個字、加一行、刪一行，模型沒那麼敏感。直接做 prompt engineering 可以非常敏感。拆成很多塊之後，用字沒那麼要緊。投影片為了簡化畫成大約十步，實際十二步。他說 flow 的工程大約花了 25% 的時間，prompt 本身大約 5%。後面回答問題時又說大約 95% 的時間在設計 flow，因為好的 flow 比較不用花時間在 prompt。兩句字幕都在，比例對不起來。他們試過較舊的 DeepSeek、當時前一版的 Sonnet 3.5、GPT-4o，prompt 不用改很多。若把思考全交給 o1，你會很依賴那個模型和那份 prompt。自己設計 workflow，prompt 可以簡單，敏感度也低。

[20:42](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1242s) 圖的橫軸是模型，縱軸是競賽正確率。解出大約 78% 的題，大約是參賽開發者的第 95 百分位。紫色是某個模型加上 AlphaCodium，推論次數、計算量跟他們很用力調過的直接 prompt 大致相當。o1 明顯贏過 GPT-4o。正確率變成兩倍，在真實世界裡代表的解題能力不止兩倍，因為 GPT-4o 解掉的約 23% 是比較容易的。78% 對 55%，多出來的那大約 23 個百分點是很難的題。他們沒有、他說也沒去要一般的 o1，或那個為程式競賽和數學奧林匹亞微調過的模型，字幕聽成 o1 II。o1 preview 配 AlphaCodium，結果高過那個為這題微調過的最好模型。他認為這是模型還不是 System 2 的證據：AlphaCodium 這套流程並不複雜，模型若真的會想，應該自己想得出來。

## 測試是最難的那一節

[23:08](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1388s) 他只展開測試，說這是最難、也許最關鍵的模組。想像一道題，oracle 給了正確解，畫成左邊一塊。就算把最好的 context 丟給直接 prompt，連 o1 也只是拿出看起來能用、其實歪掉的解。中間是給幾個測試，也許是比賽附的，要求模型讓這些測試過。可以是直接 prompt，也可以是 AlphaCodium 裡還沒真正跑 code 的那半邊。通常會 overfit 到那幾個公開測試。右邊是再產生測試，不只明顯的，還有 edge case。這一步很難。有人會問：模型生得出測試，為什麼一開始生不出正解。他說開發者也一樣。想得再徹底，很多時候沒有 sanity test、更沒有 edge case，就寫不出完美的 code。寫 edge case 的是同一個人，因為換了流程、也用了不同工具。AlphaCodium 就是用特定的 prompt 和工具去生那些測試。

[26:05](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1565s) 他承認這是廣告：Qodo 很押測試生成。IDE 擴充字幕聽成 koden，有三種以上的測試生成，還有更多要來，各自有自己的 flow。他們還有 multi-agent 平台。不完美。你可以說把測試解掉，就解掉軟體開發。測試生得好，解也生得更好。他沒有展開怎麼挑測試、怎麼知道測試本身是錯的。錯的測試會把 AlphaCodium 帶歪。工具完全開源。

[27:12](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1632s) Meta 的研究把 code 執行的結果拿去訓練，用 reinforcement learning。解法跑測試失敗是負向，通過是正向，也可以用錯誤和 log。點子很好，也真的有幫助，就算配的不是最好的模型。他願意賭很多 Tesla：把他們的模型放進 AlphaCodium，計算量相同，AlphaCodium 會更好。因為這些模型還不是 System 2，他也不認為 System 1.5 已經做完。圖上 AlphaCodium 配 o1 高很多。對方用的是第一版 AlphaCodium，不是最新版，所以才是那個結果。

[29:04](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1744s) 收尾：prompt engineering 有趣，也很難，每個字都算數。o1 這類模型推理好很多。若你知道自己會怎麼解，就做成一張 flow 的圖，例如用 LangGraph。正確率會更好，沿路可以放 guardrail，也可以讓模型用工具。推理能力在單一節點裡就有用。不要信任現在的模型替你做完整個 System 2。主持人說下一場 Demetri 會示範怎麼把這些 flow 接起來。他自己一直把推理放在模型外面、把直覺放在裡面，現在兩邊一起在變。

## 從 spec 到測試再到 code

[30:48](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1848s) Mike 問這是不是 TDD 或 BDD。Itamar 說軟體開發有三種檔案：specification，例如出現在 Figma 裡的；code；測試。有人把 TDD 定義成從測試開始。AlphaCodium 從 spec 開始，先有一輪搞懂題目，再到測試，再到 code。他覺得這是未來軟體開發一種說得通的看法。實務上很難，開發者想要所有起點都開着：有時先寫測試確認自己要的行為，再讓 AI 幫忙 spec 和 code；有時測試、code、再 spec；有時 spec 直接到 code。不同產品會走不同方向。Qodo 認為不同類型的開發受益於不同方向。競賽題是要解問題，spec 已經在手上，然後測試，然後 code。硬要回答是不是 TDD，他說是，但更像 spec-driven，或 BDD，或 business-driven。

[33:06](https://www.youtube.com/watch?v=23v9GBJvcrc&t=1986s) 怎麼評估 flow、為什麼是這一套。頭和尾很清楚：要通過的測試。競賽有一個他喜歡的性質：用來評分的一部分測試是私人的，你看不到，要提交才知道。比較不容易 overfit，也不容易拿去訓練。有些 benchmark 會 overfit，因為資料在外面。他們用比賽給的 validation test 來長出 flow。中間比較難。拿掉一個節點，最後可能變好或變壞；中間改好了，下一節卻接不住，也會看起來沒進步。他建議中間節點放你自己的標準。例如有一步把題目描述改成技術描述，你可以規定結構該長什麼樣。有些標準不用統計。有些用 LLM 當評審，Gemini、GPT、Sonnet 都可以，按標準看這一節的輸出好不好，只迭代那一節。標準要想清楚，這招可以相當好用。場上還有問題沒答，會到 Discord。主持人想再談高品質測試和 edge case，因為很多工具只生平淡、簡單的測試。Code review 他也覺得是很重要的一塊。
