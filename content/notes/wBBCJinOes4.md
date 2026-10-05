# Anthropic, OpenAI & Thoughtworks on Context Engineering

片長 10 分 8 秒，英文手寫字幕。剪輯，不是一場完整演講。Lamis Mukta 的完整論點在另一支片，筆記是 `tTcxVv8HHNw`。這裡只記這支剪輯實際留下的句子。

- 原片：[YouTube](https://www.youtube.com/watch?v=wBBCJinOes4)

## 一句話

幾乎每個房間都在說：跟 AI 工作，難的不再是 prompt。這支剪輯把幾段話接在一起：context 會在很長的任務裡被壓碎再重建；確定性的遷移工具能提高第一次就做對的機率；人該住在 context 的開發循環裡，把 SDLC 留給 agents。Skills 被說成新的 code。

## 模型聰明，還要變成用得久的產品

[0:00](https://www.youtube.com/watch?v=wBBCJinOes4&t=0s) 六月倫敦，幾乎每個房間都出現同一個想法：跟 AI 工作，難的不再是 prompt。

[0:13](https://www.youtube.com/watch?v=wBBCJinOes4&t=13s) Anthropic 的 Lamis Mukta。她是 technical staff，在 applied AI，團隊位在研究、產品和 go-to-market 之間。對內做專案，也直接跟在邊界上做 agents 的客戶工作。她自己跟新創和創辦人共事，覺得自己坐在最好的位子，因為這些人一直把模型和產品推到今天做得到的邊界。他們一起騎這條指數。不斷出現的問題是：要把今天的原始模型 intelligence，翻譯成耐久、可擴展、有用的產品，到底要什麼。

[2:01](https://www.youtube.com/watch?v=wBBCJinOes4&t=121s) 她說最後會談到 continual learning 這條路，特別是一個叫 dreaming 的典範。中間的四個 primitives 這支剪輯沒留住。

[3:34](https://www.youtube.com/watch?v=wBBCJinOes4&t=214s) 對她來說，有三件事仍是基礎限制。那時人和 agents 一起在生產軟體。這三件是什麼，剪輯沒有留在這一句裡。

[4:40](https://www.youtube.com/watch?v=wBBCJinOes4&t=280s) 她說大家大概都深深活在 model context window 裡。她可以讓一個任務跑 6、12、36 小時，仍然得到好結果。但 context window 在這些 auto-compaction 裡被打掉再重建，是你必須面對的事。

## 提高第一次就做對的機率

[6:50](https://www.youtube.com/watch?v=wBBCJinOes4&t=410s) 換了一段。最好的例子是 codemods。Meta 的 Ian 也剛提過。例如 OpenRewrite 這類工具，很擅長做版本升級和框架遷移。他記得很久以前 Amazon 有一個大標題，Java 升級省了 400 或 500 個開發者年，他說是「或某個類似的數字」。這些都是再一次提高 AI 第一次就做你要的事的機率。

[7:48](https://www.youtube.com/watch?v=wBBCJinOes4&t=468s) 人移進 context development lifecycle，agents 拿到軟體那一個。最後可以做出很有品質的軟體，但實驗室裡只能走這麼遠。你可以建、測、做安全、最佳化，然後某個點要走出去。監控那些東西，可以用來改善你已有的品質。可以抽出真實世界的 eval 情境和問題，用來更新和最佳化 skills。可以看 agents 整體的成功，從裡面抽出新 skill 的機會，或該拿掉的東西。

[8:31](https://www.youtube.com/watch?v=wBBCJinOes4&t=511s) 把這些工具合在一起，你該越來越看到一個開發循環。但它該是 context development lifecycle，不是 skill 的，也不是 software development lifecycle。人該住在 context 的循環裡，把 SDLC 留給 agents，或讓 agents 做得到 SDLC。人在裡面產生 context、評估和測試、需要時最佳化、用好的 package management 分發、安全地消費、觀察發生了什麼，然後一再重複。

## 新的 stack

[9:07](https://www.youtube.com/watch?v=wBBCJinOes4&t=547s) 摘要是：agent 開發有一套新的軟體 stack。它建在模型上，模型像 operating systems。我們做的東西要跟它們相容。不是每個開發者都會自己做 harness，但大概會有越來越多組織大幅客製 harness，若不是自己做。那些再組成感覺很像 pipelines 的 factory lines。可重複的輸入進來，成功的輸出出去，再進到工廠裡的整個開發流程。在那些裡面，skills 是新的 code，我們該那樣對待它們，並給對的工具。

[9:51](https://www.youtube.com/watch?v=wBBCJinOes4&t=591s) 片尾約十一月紐約的 AI DevCon。
