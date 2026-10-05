# What You’re Missing About Agent Design | Yaniv Aknin

片長 7 分 22 秒，自動英文字幕。Yaniv Aknin。模型名以字幕為準：GPT 5.1-codex、Sonnet 4.5、Opus 4.5。子代理被聽成 cy sub agents。

- 原片：[YouTube](https://www.youtube.com/watch?v=0kIBwaQNxgs)

## 一句話

Claude 的工具說明大約 41K，Codex 大約 1.1K。這是哲學差，不是小調整。Codex 用很少的工具、很短的說明，能力比較像訓練進去的。Claude 把細節寫在說明裡，換工具不必重訓，但那些 token 一直佔著 context。規劃也一樣：Codex 和 Gemini 的計畫只是對話歷史裡的字，Claude 的 harness 會提醒它下一步。

## 工具說明是裝飾，還是真的介面

[0:00](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=0s) 41K 對 1.1K，他覺得差很顯著，但更該看成哲學。Codex 用很少做很多。七個基本工具，說明很短。Claude 的工具定義詳細得多。他會訝異 Codex 若沒有針對這些工具的訓練，還能做出這種結果。他們跑的是 GPT 5.1-codex。所以 1.1K 的工具說明之外，還有烤進訓練裡、讓它會用這些工具的東西。說明幾乎是裝飾，讓帶著訓練的 agent 知道該用哪一個。核心在訓練。

[0:55](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=55s) 他猜 Claude 在工具上的這類訓練比較少，因為說明囉嗦。若只看工具說明的量，大約是 20 倍，不是 2 倍。訓練看不到，只能推測。他們自己的評估裡，目前的感覺是 Sonnet 4.5 和 Opus 4.5 在使用沒見過的工具、也就是自訂工具時，比 Codex 模型好。Codex、Claude、Gemini 都支援 MCP，都可以加工具，也可以像 nano agents 那樣在自己的程式裡叫模型、給任何工具。他們讓 Sonnet 使用任意新工具的成功率，至少高過 Codex。不是說 Codex、GPT 5.1 不會用工具，而是沒那麼有彈性。

[2:22](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=142s) 取捨是：這些 token 一直在 context 裡，即使有 caching 也佔窗口、也花錢，但換來不必為了換工具而重訓。也有理由相信模型會更有能力。他們在別的基準上也看到，對沒見過的新工具，比較像通才的那一方比專門被訓練在那些工具上的一方好。

## 計畫是歷史，還是流程控制

[2:54](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=174s) 他把叫出一整個獨立 agent 也暫且算進規劃，但不確定該不該，因為那是很大的一塊。先不談子代理。平常說的規劃是：複雜任務不要隨便做。先寫給自己。研究支持模型先把問題想一遍、寫出計畫，那些 token 進 context，然後跟著計畫走。

[3:53](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=233s) Codex 和 Gemini 有一個叫 update plan 或類似的工具。模型呼叫它，說想走哪些步驟。步驟被加進對話歷史，就這樣。沒有東西提醒它跟著走，也沒有東西說你跳過了一步。它隨時可以再發一次 update plan，使用者看到的是最新那份。通常它不會隨便改。若原本是 1、2、3、4，它會再發一次同樣的 1、2、3、4，只是把做完的劃掉。你感覺有進度，其實模型可以做任何事。跑在模型外面的 agentic harness 不會提醒它。

[4:50](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=290s) Claude 不一樣。它有好幾個規劃工具，update plan、task complete 這類，比較細。Harness 會支持模型：你做完第二步了，提醒你之前說接下來該做第三步。在 Codex 和 Gemini，計畫只是模型說出來、被加進訊息歷史的 token，模型比較可能跟著走，是因為它看得到剛過去的 context。在 Claude，計畫是一種流程控制。有一個不是模型的東西在問：你有沒有照計畫、做完了沒有。

[5:39](https://www.youtube.com/watch?v=0kIBwaQNxgs&t=339s) 他覺得這是實質差別。規劃是 agent 行為很重要的一部分，哲學卻差這麼多。這些 agent 都很強，最後計畫都做得不錯，底層實作卻不同。若有一種明顯更好，大家會立刻靠過去。所以比較像實作選擇，不是一邊對、一邊錯。他不記得是 Codex 還是 Gemini，其中一個的 repo 是開放的，已經開始把某些工具改得更像那一套比較豐富的工具。也許他們在改路線。Claude 和 Codex 的差別大到顯然想過，而且不是第一版。主持人說這不是它們第一次玩 LLM。他回：對，這就是它們的第一個 LM。
