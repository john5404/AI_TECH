# The Framework Powering Autonomous AI | Reuven Cohen on SPARC

片長 6 分 34 秒，自動英文字幕。Reuven Cohen。SPARC 被聽成 Spark。他說名字是向 Sun Microsystems 的 SPARC 處理器致敬，是 Spark 後面加一個 C。

- 原片：[YouTube](https://www.youtube.com/watch?v=DoyjBq1tBlc)

## 一句話

他說 95% 的 agentic 專案失敗，原因很可能是 99% 的工程師不知道怎麼建 agentic system。人還在用為了慢慢做而最佳化的流程。SPARC 是一份規格，加上偽程式骨架、架構、然後用倫敦學派的測試驅動，讓多個 agent 平行把應用至少做三到四次。寬鬆的語言會讓錯的東西也能跑。Rust 這種嚴的語言配上嚴的規格，做完比較知道它真的能動。

## 為什麼規格得比一個函式大

[0:00](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=0s) 95% 失敗。99% 的工程師、程式設計師、開發者不知道怎麼建。大家仍用以人为中心的模型：審查週期、拉很長的 sprint，那是為了慢慢、逐漸做而最佳化的。現在幾乎可以隨時複製任何東西。這是讓開發者用更少做更多。

[0:46](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=46s) 主持人說可預測的做法是 rails 或 guardrails，並問 SPARC 的動力。大約一年半前，就算 agent 還沒這麼紅，這些 coding 系統也被規格本身限制。開發常常是一個函式一個函式：修這個、貼進系統、像自動完成。那是不錯的起點。一旦要做更大、有互相連接的關係、資料結構、使用者體驗、基礎設施，就需要一份 AI 能跟著實作、測試、驗證的規格。

## 四段，以及兩種 TDD

[2:20](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=140s) 名字向 25 年前他在 Sun Microsystems 做 SPARC 處理器致敬。他說 AI 很會造縮寫，RUV 對他來說每隔一天就代表新東西。規格先說「我在做什麼」，像一份 PRD。他不要一次把整個程式寫完，第二段是偽程式大綱，讓 AI 在實作前懂結構，也就是整個應用各部分的粗骨架。然後才有依這份程式定義的架構。精煉是迭代：有了大綱和含所有部分的架構，才開始真的建。

[3:25](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=205s) 精煉在平行開發時變得有趣。知道所有部分之後，不同 agent 可以各自做不同部分，透過架構相連，用測試驅動當作完成條件。

[3:57](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=237s) 他分兩種 TDD。底特律學派是傳統的：邊寫 code 邊寫測試。一個函式或一部分，寫測試、寫 code、過或不過。對人很好，對自主 agent 不好。倫敦學派用骨架。開發者討厭它，因為你要把整個應用做好幾次。像他在 SPARC 架構裡定義的：先做所有部分和它們怎麼配合的大綱，然後才建。它會失敗，而且總是失敗，然後再做一次。至少做三次，可能四次。Agent 不會抱怨做四次，而且很快、同時做。幾個月或很多週的事，一個下午可以發生。測試都過了，而且不是完全模擬的話，應用大致能動。

[5:33](https://www.youtube.com/watch?v=DoyjBq1tBlc&t=333s) 語言不一樣。很多人問最佳語言。Python、Node、JavaScript、TypeScript 這類是寬鬆的，有很多缺陷也能跑。Rust 的定義很明確、確定，很難做出壞的東西，不對就不會動。把嚴的規格用在比較不寬鬆的語言上，才能做又複雜又廣的專案，而且做完比較可靠地知道它能動。
