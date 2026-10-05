# I Shipped a Bug to Production — Then Got an Angry Slack Message (and That's Why This Formula Exists)

講者在 NVIDIA 做 dev tech，字幕沒有說出名字。這場約 28 分鐘，英文手寫字幕。字幕把 TensorRT-LLM 聽成 tree Elm、Tensor Realm，把 vLLM 聽成 VLM，把 FlashInfer 聽成 flash info，把 BF16 聽成 BFF 16，把 FP8 聽成 PHP、fate，把 Qwen 3 聽成 Queen three，把 KV cache 聽成 cave cache、KB cash。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=yuRWKWagzok)

## 一句話

Attention 在很長的 context 上又貴又稀疏。他說有些情況下，高達 96% 的工作對結果幾乎沒貢獻。Skip softmax 用 online softmax 已經在維護的 running max，在 inference 時跳過近乎為零的 tile，不必重新訓練模型。門檻後來要除以 KV 的 sequence length，是因為上線之後有人在 Slack 說這很難用：完全沒考慮 context length。

## 一百萬 token 之後，attention 變成這場要解的成本

[1:20](https://www.youtube.com/watch?v=yuRWKWagzok&t=80s) 他先警告這場會從很高層的 AI，突然掉進 attention kernel。投影片是他自己寫的，再叫 Claude 說它們有多糟，然後自己改。主題是 long context inference，也是 CUDA 裡 attention kernel 的優化，後面有 benchmark 和 takeaway。

[2:09](https://www.youtube.com/watch?v=yuRWKWagzok&t=129s) 不久以前，8000 token 的 context window 還算很大。現在 frontier model，例如 Claude Opus，context 可以到一百萬 token。這改變你能拿 model 做的事。他說自己現在的工作方式和 18 個月、兩年前完全不同。能做更複雜的 system prompt、文件分析、摘要早上那些長到沒時間讀的 email、以及很大的 codebase。他是 dev tech，三個 inference library 都碰：SGLang、vLLM、TensorRT-LLM。過去 3 到 4 個月每次回到其中一個，樣子都變了。通常第一件事是問最近改了什麼、要找的東西在哪。字幕把這個工具寫成 core。

[3:27](https://www.youtube.com/watch?v=yuRWKWagzok&t=207s) Attention kernel 的成本隨 sequence length 對每個 token 線性成長，所以整體是二次的。每個新 token 都要 attend 到前面的 context。到一百萬 token 就很貴。這場就是在處理這件事。

[3:49](https://www.youtube.com/watch?v=yuRWKWagzok&t=229s) 他不假設大家都懂圖。每個 token 在問：序列裡哪些其他 token 跟我有關、它們告訴我什麼。Q 是 query，K 是每個 token 的標籤，V 是被選中時它貢獻的值。Q 乘 K 的轉置，得到 sequence length 乘 sequence length 的 attention score。接著做 softmax，得到機率分布。矩陣乘法在 GPU 上很快，tensor core 就是為這個。Softmax 有指數。有些硬體上，瓶頸是指數，不是矩陣乘法。右邊是 multi-headed attention，同一套流程在多個 head 上平行做。

## Online softmax，以及大部分 tile 根本不重要

[5:28](https://www.youtube.com/watch?v=yuRWKWagzok&t=328s) Naive softmax 需要全部 key 的 global max，才不會 overflow。Max 要等全部元素處理完才知道，所以至少兩趟，在這麼大的矩陣上很貴。他引用團隊裡的 Maxim Malakhov。Online softmax 可以單趟做完：維持一個 running max，最後再做校正。這個 running max 後面用來判斷能不能跳過 softmax。

[6:34](https://www.youtube.com/watch?v=yuRWKWagzok&t=394s) 三個性質。Single pass，不必一次把整張 attention matrix 放進記憶體。這是 FlashAttention 的關鍵優化之一，因為反覆讀那張矩陣很貴。數值要穩定。Naive softmax 是兩趟、每個 tensor 元素三次運算。Safe softmax 減去 max 來避免 overflow，但要三趟、每個元素四次記憶體操作。Online 把這拉回三次。

[7:18](https://www.youtube.com/watch?v=yuRWKWagzok&t=438s) Attention 很貴，同時也很稀疏。投影片上 Q 乘 K 的結果，灰色方塊是他稱為重要的那些。做了這麼多，很多對結果沒貢獻。他說投影片上引用的數字是，有些情況下可以高到 workload 的 96%。這些工作被浪費掉，很不理想。

## 用已經算過的 running max，把整塊 tile 跳掉

[8:11](https://www.youtube.com/watch?v=yuRWKWagzok&t=491s) 這份簡報是 kernel 優化。他做的是 NVIDIA 的 FMA，fused multi-headed attention。有點像 FlashAttention，他們支援的多一些，關鍵優化大多相同。好的 attention kernel 不能只寫一個。不同情境要上百個 kernel。Context 和 generation 要的優化很不一樣：generation 一次只生一個 token，卻要 attend 整份 KV cache，矩陣乘法的形狀變了。

[9:02](https://www.youtube.com/watch?v=yuRWKWagzok&t=542s) 他們寫了一個叫 TR 的 code generator，用一個產生器維護這些 kernel，而不是讓他親自維護可能上千個。他記得 GitHub 上的 TensorRT-LLM 裡，attention 的 kernel binary 大約 4000 個。有人（往往是他自己）說每個都要一個 skip softmax 版本，數量再乘二。Kernel 是 warp specialized。Warp 是 GPU 上平行執行的 32 個 thread。每個 warp 做不同的工作，讓不同執行單元保持忙碌。FlashAttention 裡常見的分法是：一個 warp 載入 tile，一個做矩陣乘法，一個做 softmax，一個把輸出寫出去。這些階段要對齊，用手寫很難撐在腦子裡，所以適合 code generation。

[10:43](https://www.youtube.com/watch?v=yuRWKWagzok&t=643s) 投影片沒列出全部 task。他說的 task，就是交給專門 warp 的工作。Load 從 global memory 讀 Q、K、V。Main task 對 tensor core 下指令。Softmax task 讀他們叫做 BMM1 的結果，也就是 Q 乘 K。BMM2 是 P 乘 V。Correction task 對應 Maxim 的 online softmax。

[11:34](https://www.youtube.com/watch?v=yuRWKWagzok&t=694s) 他說這是簡報裡唯一一起算的數學。很多 attention 值在 softmax 之後是零或接近零。那一列如果全是零，P 乘 V 的那一列結果也是零。那就不必算。熟悉 FlashAttention 的人看過這種圖：為了不把整張矩陣實例化，切成 tile。一塊做 Q 乘 K，softmax，乘 V，累進輸出。這樣省記憶體，但不會判斷這次 attention 值不值得做。很多 tile 的 softmax 本質上是零。Skip 可以調得更兇，準確度和效能要交換。這不是角落案例。回到那張 vertical slash 的圖，多數方塊是白的，不是灰的。Kernel 很複雜、tile 很多，多數 tile 不重要。他們叫這 skip softmax。實際上跳過的比 softmax 多，softmax 常常還不是最貴的那一步，但名字已經定了。

[13:51](https://www.youtube.com/watch?v=yuRWKWagzok&t=831s) 關鍵是用已經算過的資訊，便宜地決定跳過。Online softmax 的 running max 就是 Q 乘 K 的結果，不是額外工作。新 tile 進來做 batch matrix multiply，取每一列的 local max，跟 running max 比。這個 reduction 本來就要做。若 local max 遠小於 running max，差是很大的負數，指數結果基本上是零。整塊 tile 對輸出沒貢獻，就可以設成零，省掉後面的工作。沒觸發門檻，就得把工作做完。觸發了，可以跳過指數、normalization、載入 V tile、矩陣乘法，以及 correction。不必再訓練模型，這是 inference time 的事，部署就能用。

[15:23](https://www.youtube.com/watch?v=yuRWKWagzok&t=923s) Kernel 開發者會分 compute bound 和 memory bound。前者時間大多在算數學，後者卡在記憶體子系統。跳過 softmax 和 normalization 是省計算。為了 correction 要留的統計也是省計算。真正省記憶體的只有 V tile。有些版本的 kernel 不跳過這次載入：如果 kernel 是 compute bound，你沒有被這次 load 卡住，warp 多等一個跳過決定，反而更傷，因為什麼都沒買到。P 乘 V 省的是 tensor core。跳過 correction 是本來就有的優化，他認為 FlashAttention 也做。Skip softmax 可以跟它合在一起。

## 門檻沒正規化，所以上線後 Slack 來了

[16:49](https://www.youtube.com/watch?v=yuRWKWagzok&t=1009s) Warp 是 32 個 thread。他在乎的那個 kernel 版本裡，每個 thread 拿 tile 的一列，各自決定要不要跳。指數量的是這塊 tile 的最大值比 running global max 小多少。門檻可以由使用者調。他開發時沒意識到選一個好值有多難。Unit test 對著 reference 設一個值，覺得可以了。上線之後有人說很好，但完全沒考慮 context length。門檻沒有正規化，他得一直改。於是除以 KV 的 sequence length。投影片上的那個除法就是這樣來的。有人在 Slack 傳了生氣的訊息：這真的很難用。開場那一分鐘就是這段的預告。

[17:59](https://www.youtube.com/watch?v=yuRWKWagzok&t=1079s) 之後，處理同一塊 tile 的 thread 和 warp 都要同意。Warp 內部有一個很快的 intrinsic，字幕寫成 all sync。Softmax 實際上要四個 warp。Warp 之間不能直接說話，得用 atomic 和 shared memory，慢一點，但只能這樣。

[18:26](https://www.youtube.com/watch?v=yuRWKWagzok&t=1106s) 他說自己已經花了接近 15 分鐘講 kernel。接下來要回答：不跳過時 overhead 是多少；context，也就是 prefill kernel 有多快；generation，他們叫 decode 的 kernel 有多快；就算 attention kernel 更快，端到端跑 model 時看不看得到。瓶頸若在別處，attention 再快也沒有幫助。

[19:08](https://www.youtube.com/watch?v=yuRWKWagzok&t=1148s) Overhead 的圖裡，他 profile 到的很多時間其實是 profiling noise，很難抓。Generation kernel 比較不是這樣，會慢一點。圖上 1 是沒有 overhead，低於 1 是變慢。Generation 他們還在優化。Memory bound 很難，因為矩陣很小。

[19:44](https://www.youtube.com/watch?v=yuRWKWagzok&t=1184s) 兩種 kernel。Context 是 prefill，KV cache 還沒有，以及產生 KV cache 的時候。他主要看 BF16 和 FP8。橫軸是 sparsity，也就是跳過了多少比例的 attention tile。100% 是什麼都沒做，0% 是完全沒跳。第一塊 tile 永遠不能跳，否則門檻檢查不成立。他懷疑若全部跳過，結果會塌成垃圾。兩端都不實用，中間那段才重要。FP8 的加速低於 BF16，這是整場一致的主題，他們還在查。

[20:37](https://www.youtube.com/watch?v=yuRWKWagzok&t=1237s) Generation 完全不同。你 attend 整份 KV cache，但只處理一個新 token，Q 矩陣很瘦，工作變成被載入 K 和 V 支配，而不是矩陣乘法。回到前面的節省圖，第三階段是跳過 tile 時不載入 V。Context kernel 大多數時候不做這件事，多等不值得。Generation 若不跳過這次 load，完全沒有好處。FP8 在這裡受益較少，他認為部分是因為搬的資料比較少；這一點比 prefill 清楚。

[21:39](https://www.youtube.com/watch?v=yuRWKWagzok&t=1299s) 端到端不是他跑的。一位同事測了 Qwen 3，benchmark 是 LongBench V1 和 LongBench V2。他說不用長 context 的 benchmark 來測這個 kernel，會是疏忽。V2 只能放 batch size 1，context 太長，多個 prompt 會把 GPU 用滿。圖上的加速是 time to first token。Time per output 還在做。有意思的是，圖上很大一部分加速，不必在準確度上付太多代價。問題是這跟模型有關，部署的人得花很多時間校準可接受的門檻。他說也許現在可以叫 Claude 來做。

## 只加一個門檻，以及還想試的事

[22:43](https://www.youtube.com/watch?v=yuRWKWagzok&t=1363s) 現在在 TensorRT-LLM，以及 NVIDIA 維護的 FlashInfer。他記得 FlashInfer 原先是一個博士計畫，後來他們接手，變成對外開源 kernel 的地方。透過 FlashInfer，SGLang 也能用。vLLM 正在加，他跟負責的人一起工作，對方大約做到一半。投影片上有 PR 編號，他沒有念出來。程式片段也不必細看。好用的地方是 API 幾乎不變，只要指定這個門檻，腳本不用大改。你要花時間決定結果能不能接受。

[23:45](https://www.youtube.com/watch?v=yuRWKWagzok&t=1425s) Takeaway：skip softmax 去掉大量多餘的計算和記憶體流量。門檻被設計成一個乾淨的旋鈕。他說家裡有腳本對這個門檻做迴圈，量不同的效能，簡報裡多數圖是這樣來的。對長 context 的工作負載影響最大。之後他想看 adaptive threshold，或每一層不同的門檻。有人試過每層不同，正確的值很難，也許要再看深一點。他也想跟現有的 sparse attention 技術合在一起，看能不能同時受益。投影片上有論文和幾篇部落格，在投影機上點不了。

[25:02](https://www.youtube.com/watch?v=yuRWKWagzok&t=1502s) 有人問訓練時能不能用。他說自己是 inference 的人，不是最好的回答者。連結的論文裡有提到 training，值得讀。他也可以回去問同事，networking 時再交換聯絡方式。另一問是投影片參數裡有 instruct model，這是不是只限某一類模型。他說不是。這基本上是 attention 的 drop-in replacement，他看不出不能用在別的地方。你得自己測滿不滿意。若問題是 kernel 有沒有限制、使它不能用於非 instruct 模型，就他所知沒有。

[26:38](https://www.youtube.com/watch?v=yuRWKWagzok&t=1598s) 他承認用了 AI 寫東西。寫這份簡報的那天，是他第一次拿到 Claude coworker 的授權，就拿來試。他說每次上班好像又多一個工具，箱子太大，總是很難選對。最後有人問，內部外部這麼多模型，有沒有跨模型的 benchmark、結果放在哪。他說內部也許有試算表，得回去查。開發時有客戶興趣，他收過信問 skip softmax 是不是真的。SGLang 社群很有興趣，所以那個 PR 比 vLLM 更早出去。若資料存在，他還沒看過。
