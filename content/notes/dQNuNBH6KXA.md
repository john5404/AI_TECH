# Spec Driven Development: Why your prompt chaos won’t scale - Macey Baker

片長 16 分 12 秒，自動英文字幕。Macey Baker。Tessl 被聽成 Tessle 或 Tesla。中間有幾段沒被摘到。

- 原片：[YouTube](https://www.youtube.com/watch?v=dQNuNBH6KXA)

## 一句話

跟 agent 聊天是在弄清楚你到底要做什麼，但你們說的是兩種語言。Code 不會告訴你它為什麼在那裡：是作者意圖裡承重的一塊，還是繞過某件事的 hack。Spec 用檔案之間的連結，避免和實作漂開。她用 document 工具從一段 Gemini 的聊天紀錄反推規格。有那段 context 時，鍵盤才是主要互動；沒有時，可點的字母按鈕變成主角。

## 聊天在弄清楚意圖，但留不下來

[0:00](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=0s) Prompt chaos 是跟 spec-driven 對照的。主要介面仍是聊天。你說想要某個東西。Agent 說好，給你一些 code。你說謝謝，但不太對。它再給一些。這個對話重要。你在弄清楚到底要做什麼。也許一開始就有很細的想法，也許你得繞過 agent 做得到或做不到的事，或在做的過程中發現，好吧，也許這樣做。真正發生的是你和 agent 在說兩種語言。

[2:04](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=124s) Code 不太能告訴你它為什麼在那裡。它不能說：我是作者對這個程式的意圖裡承重的一塊。也不能說：我在這裡只是因為作者得繞過某件事，我沒那麼重要，你可以重構我。

[3:45](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=225s) 若你沒做過表單，你會問那個 `setTimeout` 在做什麼。用了表單才知道：若它不在，你打第一個字，它就說這不是合法的 email。你會說，對，我知道。後面是你已經想過、解過的那種事，agent 卻說不在乎、不重要。

[4:51](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=291s) 就算你的工作場所在乎把這些維持更新，她的重點是現在那些東西加上這些 agent 對話，問題在複利。那只是你和你的 agent。這些對話是可丟棄的。

[5:35](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=335s) 她剛聽到 Intercom 的共同創辦人說，他們 100% 的設計師今天都被期待把 code 推上 production，即使以前沒寫過一行 code。

## 連結讓 spec 不跟實作漂開

[8:48](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=528s) 這是她用 Tessl 生成的一份 spec。她覺得有幾塊承重的東西。有一種高層的東西。她問大家看不看得到游標。

[10:19](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=619s) 她覺得重要的是檔案之間的連結。感覺瑣碎，但其實是它讓 specs 不跟實作漂得非常遠。Specs 很好，但它們在講什麼？

[11:49](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=709s) 底線是你現在真的能做的，是從這一點開始防止回歸。這仍然重要。

[13:56](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=836s) 她用 Tessl 的 document 工具。它從 code 推論出 spec。她抓了自己的聊天區塊，這是用 Gemini 做的。她把聊天紀錄加上一句額外的 prompt：我會給你聊天紀錄，請確定對話裡出現的核心決定都寫在這裡。她做了兩次。一次沒有那個 context，一次有。

[14:31](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=871s) 有額外 context 的那一塊裡，她在乎的是鍵盤優先。你打字母。可以看到：使用者用打字猜字母。最後才說字母按鈕也可以點，像事後才想到的。因為她要鍵盤是主要的互動。沒有額外 context 時，同一個能力被列成：可點的字母按鈕，也處理鍵盤輸入。它在描述功能，比較不是她對使用者怎麼跟這個「劃時代」應用互動的意圖。她順便說自己在募資。

[15:29](https://www.youtube.com/watch?v=dQNuNBH6KXA&t=929s) 她想留下的是過去兩年聽了一萬次的那句：這是軟體開發的新時代。陳腔，但陳腔是有原因的，因為它是真的。人要能很快看懂實作的 code，才能當 agents 的 tech lead。Agents 也要懂自己的工作環境。她覺得把意圖寫下來，就是在做這件事，也讓 codebase 和實作比較經得起以後。
