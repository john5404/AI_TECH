# Spec-Driven Development: Specs Are the Program Now

片長 7 分 30 秒，英文手寫字幕。這支片把倫敦 AI DevCon 的三段話剪在一起。

- 原片：[YouTube](https://www.youtube.com/watch?v=606n8YC_-fU)

## 一句話

若你真正維護的是規格，code 就變成可以丟掉再生成的輸出。Simon Martinelli 用「兩週規格、五分鐘生成」描述工作往需求移動。Dave Farley 說程式會從精確的解，變成對問題的精確描述，由 AI 翻譯，而且安全和效能不能讓 AI 自己猜。Shachar Azriel 說他們指著 spec 而不是先寫測試，副作用是團隊知道 agent 會讀 spec 之後，spec 寫得更好。

## Simon Martinelli：工作往左移

[0:00](https://www.youtube.com/watch?v=606n8YC_-fU&t=0s) 六月倫敦的一組演講指向同一件事。規格才是你維護的東西，code 是輸出，可以扔掉再生成。

[0:14](https://www.youtube.com/watch?v=606n8YC_-fU&t=14s) Simon Martinelli 是瑞士的顧問，在真實的企業系統上做這件事。他的說法是兩週規格、五分鐘生成。他覺得規格很能持續，或希望將來能。他現在做的是把既有 code 逆向成 specs。有了 specs，大概可以用不同技術、不同 UI 生成同一個應用。也許根本沒有 UI，而是直接從 specs 來的聊天。業務的人可以自己改系統該怎麼行為，不必開發者在旁邊講或看。這會加速開發。問題是目前它只加速開發。需求和規格階段仍要時間。

[1:20](https://www.youtube.com/watch?v=606n8YC_-fU&t=80s) 例子是他為國會、為政府做的。他們有一套 business case management 軟體要現代化。概念驗證期間，只有他一個人在碰 code。有兩個只做產品需求的工程師在寫 spec，工作比他多。他信任自動化。他在做一條管線，讓他們改 model files，其餘自動生成。工作往左移，移到需求工程。以前若做 scrum，大概兩週需求、兩週實作。現在是兩週，然後五分鐘，然後又兩週，大概那樣。

## Dave Farley：程式變成問題的描述

[2:14](https://www.youtube.com/watch?v=606n8YC_-fU&t=134s) Dave Farley 把這個想法推得更遠。程式以前是精確的解，問題留在腦子裡、隱含在解裡面。他認為它會變成對問題的精確描述，由 AI 翻譯。

[2:30](https://www.youtube.com/watch?v=606n8YC_-fU&t=150s) 第一個問題是用精確度說出我們要什麼。過去的做法是把程式當成編成演算法的精確解。奇怪的是問題本身丟了。它隱含在解裡，我們留在腦子裡，然後建一個解，拿那個定義來工作。解本身卻是隱含的。他的例子是路由演算法，想達成的結果是找到回家的路。

[3:24](https://www.youtube.com/watch?v=606n8YC_-fU&t=204s) 未來的程式會是我們想要什麼的精確描述，他認為編成規格，由 AI 翻譯成可執行指令，並驗證我們得到了想要的。想要的東西明確成為程式的一部分。程式從聚焦解，移向更準確地描述要解決的問題。他描述的是一種 spec-driven development，但規格的形式是可執行的規格測試：既說明要什麼，也驗證得到了。

[4:18](https://www.youtube.com/watch?v=606n8YC_-fU&t=258s) 要做到那樣，是設計一種領域語言，用來精確說明要軟體做什麼，然後隨時詳細說明要達成什麼。那是系統的全部行為，不只是我們通常想的使用者行為。不是草率地測系統。結果要多快回來，若效能要緊。要多安全，若系統要安全。這些都是情境。不能讓 AI 推論、自己編，因為你到底要多安全是真的取決於你。把銀行等級的安全用在單人遊戲上是蠢的，會把遊戲過度設計，也大概把銀行設計不足。所以得具體說你要達成什麼。

## Shachar Azriel：spec 被讀了，人就寫得更好

[5:20](https://www.youtube.com/watch?v=606n8YC_-fU&t=320s) 收尾是 Baz 的 Shachar Azriel 回答聽眾：為什麼把 agent 指向 spec，而不是讓它寫測試。他對測試的問題是，它們測的是沒有人真正喜歡的東西，不是真實生活。團隊坐在那裡想不會在產品裡發生的想像情境。很多 AI coding 工具會生成 100、200、500 個 unit tests。最後仍有一個你沒想到的情境。他們選這個做法，是想用已經在那裡的資料。他不要有人去想也許會發生、也許不會的情境。用 specs 來做。

[6:31](https://www.youtube.com/watch?v=606n8YC_-fU&t=391s) 副作用是很多客戶告訴他的：當他們知道 specs 會被拿去讓 agent 驗證功能，他們就開始把 specs 寫得更好。他比喻成可再生能源。新工具改善 best practices，也鼓勵 product managers 和 designers 把規格寫得更具體。他覺得若測試就是答案，就不會有這件事的空間。

[7:13](https://www.youtube.com/watch?v=606n8YC_-fU&t=433s) 片尾約十一月紐約的下一場 AI DevCon，網站是 ainativedev.io。
