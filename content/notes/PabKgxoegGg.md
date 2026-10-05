# Cisco & Stanford on Why Skills Are the New Code

片長 9 分 44 秒，英文手寫字幕。這支片把倫敦的幾段話剪在一起。中間有幾段沒被摘到。有一個百分比字幕明顯聽壞了，不把它當成數字。

- 原片：[YouTube](https://www.youtube.com/watch?v=PabKgxoegGg)

## 一句話

台上的結論是：外面已經有幾百萬個 skills，我們做了一大堆還不知道怎麼管的東西。Guy Podjarny 要把它們當 code。Stanford 實驗室量過 500 個 skills、1000 個任務、19 種模型和 harness 的組合。其中一個清楚的數字是：就算 skill 不在，模型仍有 55% 會跟著那些指令走，因為那些資訊已經在權重裡。

## Skills 會和它描述的東西脫節

[0:00](https://www.youtube.com/watch?v=PabKgxoegGg&t=0s) 六月倫敦有很多關於 skills 的演講。現在有幾百萬個。台上誠實的結論是，我們做了一大堆還不知道怎麼管理的東西。

[0:14](https://www.youtube.com/watch?v=PabKgxoegGg&t=14s) Guy Podjarny，Tessl 的 CEO 和共同創辦人，要講為什麼 skills 該被當成 code，以及周圍正在形成的 stack。Tessl 是兩年多前創的，信念是軟體開發從圍繞 code 和 instructions，轉成圍繞 intent。他改口一次：從圍繞 code 和 implementation，轉成圍繞 intent 和 instructions。中間的 stack 這支剪輯沒有留住。

[3:59](https://www.youtube.com/watch?v=PabKgxoegGg&t=239s) 一個 skill 可以描述某段 code、一個 codebase、一個流程，甚至一個 workflow。這兩樣可以很快不同步，skill 卻從不更新。東西會變。

[4:56](https://www.youtube.com/watch?v=PabKgxoegGg&t=296s) 問題其實是你需要更聰明的 context，以及更聰明的 context engineering。

[5:21](https://www.youtube.com/watch?v=PabKgxoegGg&t=321s) Skills 出現之後，有人的看法變了。尤其是 harness 裡新的 agentic fan-out：模型設成 Opus，一個很大的 prompt，它生出 15 個 subagents。

## 500 個 skills 的測量

[6:48](https://www.youtube.com/watch?v=PabKgxoegGg&t=408s) 最後是 Stanford 實驗室的 Rob Willoughby 和 Simon Obstbaum，他們真的量了：500 個 skills、1000 個任務、19 種模型和 harness 的組合。

[7:14](https://www.youtube.com/watch?v=PabKgxoegGg&t=434s) 他要講的是什麼樣的任務，以及他說的完整完成和 instruction following 是什麼。500 個 skills，1000 個任務，19 種模型和 harness 的排列，因為它們會互相影響，也影響表現。任務是合成的，但錨在 skill 本身，是你會期待這個 skill 被觸發的事。例如 skill 說怎麼做 API security，任務就會是實作那個，或把驗證從密碼改成別的機制，或另一件不一定相關、但期待它會注意到安全的事。不是要把它們推到超難的邊界。比較像範圍清楚的票，期待工程師做得成的那種。

[8:21](https://www.youtube.com/watch?v=PabKgxoegGg&t=501s) 這裡有一句百分比字幕聽壞了，不採用。他接著說，若你有自己內部的做法，想規定某件事要怎麼做、或要更新哪一種監督而不是另一種，那些資訊放進 skill，然後編進他們看到的 instruction following 改善裡。

[8:47](https://www.youtube.com/watch?v=PabKgxoegGg&t=527s) 這個數字裡真正有趣的是：就算 skill 不在，仍有 55% 會跟著 skill 的指令走。意思是 skill 裡編碼的資訊，其實已經在模型的權重裡。它本來就會那樣做。所以這有價值，因為若模型本來就會做，你卻在推論 token 上燒錢。你真正在意的是這些 skills 或變更的結構：它怎麼做、做得好不好。

[9:27](https://www.youtube.com/watch?v=PabKgxoegGg&t=567s) 片尾約十一月紐約的 AI DevCon。
