# Stop wasting GPT-5 on trivial tasks — a Hugging Face engineer's warning

講者自報 Sean Smith，在 Hugging Face 做 MCP、agents 和開源。片長 33 分 51 秒，英文手寫字幕。標題寫的是 Shaun。他維護他們的 MCP server 和 skills，也是 MCP maintainer 和社群版主，最近大部分時間在 transports。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 `AGENTS.md` 說成 agents ND，把 GGUF 說成 goof，把 Gradio 說成 gradient。

- 原片：[YouTube](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4)

## 一句話

模型變強之後，harness 反而可以變得很薄。Skill 看起來只是 markdown，重點是模型能自己找、讀進去、然後照著做。Hugging Face 用 45 個 token 的工具足跡打開成千上萬種模型能力，也讓大約 3 美元的 fine-tune 變得隨手可做。他要人停下來：不要把 Opus 和 GPT-5 這種 frontier model 丟去解瑣事。那是浪費算力、錢、token，和水。

## 十八個月前，工具迴圈還很短

[1:09](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=69s) Hugging Face 有很大的社群，放模型、論文和資料集，Spaces 上有成千上萬的 AI 應用，也有 zero GPU，讓人開發、訓練、示範。

他從 tool calling 講到 skills，再講到比較複雜的評估。MCP 剛出來時其實很單純。把 MCP server 接到 LLM，用 JSON 設定，寫一個 prompt，看到 tool call，然後鼓掌。當時沒有特別好的 harness。有 Claude 桌面應用和一些很客製的程式，不好用、也不好設定。沒有 `AGENTS.md` 這種純文字檔來驅動 agent 行為，大家也還沒同意這件事值得在工具之間分享。也沒有長時間的 tool loop。你可以串兩三個 tool call。從一個 prompt 跑一兩個小時、沿途五六十個 tool call，那時候還不是一件事。

[4:19](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=259s) 改變來自實驗室知道，尤其是寫 code，可以把模型放進環境做 reinforcement learning。概念上直接：模型放進 harness 和環境，寫 reward function，給一個任務。Reward 多半是確定的，任務也許用 0 到 10 分判斷。產生資料，訓練模型獎勵自己，把迴圈繼續推下去，不必一直插手。Hub 上加了 agent Environments，幫人架這些訓練環境，自己試 RL。起點常常是訓練模型玩遊戲，reward 好寫。

另一件是模型從 harness 裡鬆開來。Harness 可以非常簡單就把事做完。他舉的是約 100 行的 Python，字幕說 many SWE agent。SWE-bench 上他記得 76，最新數字是 78%、78.6%。很複雜的 harness 還在，但一百行就能靠近當前最好的成績。過去一年，模型愈能幹，harness 愈簡單。通用模型現在直接給 shell。他加了星號：有時是比較安全的 shell，或像 just bash 這種環境。通常是給模型一條能自由進出外面世界的路。把模型按住的花招少很多。偶爾還是會往訊息迴圈裡塞東西，那些手法也簡單了。

一年前做 LLM 應用，你在翻函式庫、看 API、想怎麼把步驟編成 workflow。現在拿一個隨手可得的 tool loop 就開始用。以前用確定性程式寫死的流程，被兩件事接走：模型強到跟得上指令，或模型自己生腳本和 code 去完成目標。

## Skill 是因為模型會自己去讀

[8:04](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=484s) Skill 很容易被看成一堆 markdown，簡單到不值一提。另一件事在發生。模型會自己定向。你給任務，給它瀏覽的能力，它看內容、吃進去，然後依剛吃進去的東西行動。於是很複雜的任務，可以用很簡單的方式設定。

他們的 MCP server 和 Spaces 上有成千上萬的圖像、OCR、音訊、各種客製模型，最近還有 privacy filter。透過 MCP API 或 Gradio API 都能用。以前要在 MCP server 裡指定：用這個模型生圖、用那個做 OCR。現在可以動態給模型成千上萬種能力，工具足跡只有 45 個 token。模型說我想旋轉圖片、在兩幀之間移動、把這個網頁做成有聲書。它呼叫的是 Dynamic spaces 這個很簡單的工具，後面是一道閘門，用很小的 token 足跡碰到數百、數千個模型。不只是讀 skill 檔，而是對幾乎任何模型做推論，而且在執行時發現，不必事先接好。這是 RL 打開的能力，也是 skill 重要的原因。

[10:40](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=640s) 模型要能瀏覽。列出檔案、在 skill 裡搜尋，格式要 token 密。用 shell 沒關係，重點是密。一個 token 可以列出一些檔。三四個 token 可以搜尋並拿回結果。這是模型把 context 拉進來、再採取下一步的極有效方式。也可以先放好文件以外的東西：現成或可改的腳本，做比較大的確定性動作，或輕易改那些動作，把能力大幅延伸。

## 三美元的 fine-tune，和 Upskill

[11:39](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=699s) 他們特別在意訓練、微調、部署。先找要微調的資料集。拿一個現有模型，用資料告訴它以後每一輪該怎麼表現。他舉的笨例子是說海盜話的對話配對。跑過若干迴圈，出來一個新模型，下載，在 llama 或 LM Studio 這類工具裡跑。在有 skill 之前，這不是隨手做得到的事。現在用 Claude Code 這種現成工具，加上 skill，它會帶你建資料集：要自己合成，還是用別人的；需要什麼硬體。很基礎的 fine-tune，常常大約 3 美元的算力。它會跑訓練腳本、架好監控讓你看 loss 曲線，再轉成 GGUF，以便在本地跑。就算案例很簡單，建造、調整、微調一個本地模型，都變得容易碰到。

[13:55](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=835s) 他們剛在談寫 kernel。他不是專家。Hub 上現在放 kernel。前一場講過，特定硬體、特定演算法仍有可做的最佳化。Kernel 的好處是結果相當確定：有沒有動、比上一版快或不快、省不省。他們維護 kernels、transformers、diffusers 這類函式庫。他們發現更有價值的做法，是讓人下載 kernels 或 transformers，再用自己的 CLI 把 skill 加進本地目錄，例如 `transformers add skill`，而不是靠另一個第三方安裝器。這樣打包比較安心。

他們做了也還在維護的工具叫 Upskill。可以看既有的 trace 或 skill，生出新 skill。可以評估這個 skill 有沒有用，或比較兩個 skill 在同一個任務上的表現。也可以用大模型生指令，再交給小模型，讓小模型拿到接近的表現。他說這幾乎是很粗糙的蒸餾：大模型教小模型，小的可能更快、更便宜、或更適合。他們要這套在很多 open weight 和專有 frontier model 上都適用。有時一個模型變差、其他變好，是移動中的取捨。有個很誇張的例子：改進版 skill 大多明顯變好，Grok 4 卻掉到地板。他說那個模型一直很怪。

[17:23](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1043s) 早期在本地開發 Upskill 時，agent 失控的那些笑話都成真了。任務是寫 CUDA kernel，或把一個 pull request 做完。模型互相踩、偷彼此的結果、行為不當。現在一次典型的 Upskill 是寫、整合、測速、最佳化 CUDA kernel。自動化測試顯示效能變好，代價是更多 token。現場示範沒有跑完。你可以給 skill 檔，指定生成、評估、測試、測速各用哪個模型。它為每個 eval 開了 sandbox，其中一個在分析 transformers 的 pull request，標籤清楚。隔離的 sandbox 不會搞亂你的電腦。Kernel 效能測試可以放到像樣的硬體上。當下跑的是基本 CPU。Skill 坐在微調的麻煩和「為這個任務用更合適的模型」之間：比微調簡單，又給很大的額外推力。字幕有一句 tutoring installation，那句沒聽清。

## 用對的模型，然後把 frontier 留在該用的地方

[21:06](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1266s) 下一塊他說還在進行。人愈來愈用自然語言互動。他們的 API 不算巨大，但大到不好逛。模型很會生 code 和腳本。Tool builder 是另一個 skill，會去看他們的 OpenAPI spec，做出可以組合的 shell 或 Python 腳本。

他們有一個一般的查詢工具。它生 code，不對結果再做後處理，直接給答案。當下用的是 GPT-120B，他說是個還可以的模型，但非常快。他們想盡量壓延遲，把對的模型用在對的工作。示範的問題是：名稱裡帶數字的訓練模型占多少。Code 很快生出來，也很快有答案。另一個是某個組織有多少追蹤者，一樣很利落。這暴露成 MCP 工具，還要再調。有了一批 trace、輸入，以及已知的好輸出，就可以在很大的資料上評估什麼叫好，然後想到更小、更快的模型。再往前是即時生 UI：一個知道怎麼生 UX 元件來回答問題、顯示比例的模型。若能為這些任務客製、訓練、專門化，成本和速度才站得住。

他沒有講 MCP tool description 的評估，那是幾個月前的大題。他們仍在看，模型面對多個選項時怎麼避免混淆。

[24:38](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1478s) 他收成四句。模型可以訓練別的模型，也可以合理地使用別的模型。自我改進已經在這裡，如果你要。擁有並有用地客製自己的模型，完全做得到。去試。你也許得貼幾次錯誤訊息讓它自己修，但會比你想的快很多。訓練一個模型認得你的寵物，也比你想的快。Frontier model 被用過頭了。Opus 或 GPT-5 這種大模型的價格效能並沒有那麼貴，我們卻一直把各種瑣事丟給它們。不該這樣。浪費算力、錢、token、水。該習慣的是，已經有很簡單的技術和工具，能把我們帶到需要的價格效能。Open weight 是你的。你可以調、可以跑、可以照你的需要做。你不必受制於別人任意決定 API 上允許什麼。把所有權拿過來。最後，推論和執行在混合。複雜 harness 在往「讓模型做得到」塌下去。Responses API 這類更進階的 API，或更多本地執行，讓推論環境和執行環境開始變成同一件事。

## 提問：先拿去用，再算微調值不值得

[26:57](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1617s) 有人問資源少、沒有 Python 或 JavaScript 那麼大的程式語言，自我改進有沒有被用在那裡。他當下想不起直接的例子，但同意那是成熟的區域。他知道有人在特定 codebase 上做了不少 fine-tune 實驗，做了通常覺得值得。對小團隊，維護大概還沒有回本。他說那裡 ripe for exploitation。

[27:55](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1675s) 另一個人對照 12 到 18 個月前，當時需要這整套工具。現在 harness 變輕，能力被折進模型。再過 18 個月呢。他說這可能有點犬儒。接下來 12 到 18 個月真正該看到的，是把這些模型拿去部署、拿去解問題，而那些問題本身不是「部署和使用模型」。現在爆出來的軟體，很大一部分就是在問我能不能做推論、能不能做剛才講的那些事。我們不斷從模型裡抽出訓練資料，然後說太棒了。該開始把方案部署到更普遍有用的用途，而不是做工具來做工具。我們很會做鶴嘴鋤和鏟子。該開始用它們。以現在模型的能力，不該再有東西把我們擋住。他希望 12 到 18 個月後看到的是聰明的商業和社會應用。他覺得我們還沒拿到全部價值。

[30:18](https://www.youtube.com/watch?v=Nr9f_Ew1tJ4&t=1818s) 最後一題是大量處理個別項目，人正在用 frontier model，也看到可以用較小的模型，有人告訴他很小的一個十分鐘就做完。他沒做，是因為不確定結果會是什麼、怎麼評估好不好，是不是要 eval 或一個 judge。另一半是：新模型能力高很多時，自己的開源模型要時間才追得上，訓練可能得改。微調自己的，還是繼續用 frontier。

他把問題收成成本效益。在某個量上，frontier model 的成本和你拿到的表現，會超過微調要花的工夫和錢。怎麼量化，要看是個人好玩、有一千萬筆資料，還是五百筆。規模愈大，那個窗口愈往微調、自己架、自己做評估那邊傾。量愈大，愈值得客製和微調。等式另一邊也在靠近：做這件事、跑評估，變得簡單、也變便宜。他老實說，很多情況大概還沒到交叉點。你大概得坐下來，用試算表或 Claude Code 算一算。若有個對你重要、而且已經能用的案例，他會想握住可以自己架的 open weight model，就算你現在沒自己架。擁有基礎設施，還能擋掉另一些風險。
