# How Can You Tell if Your AI Agent Skills Are Working?

片長 2 分鐘，英文手寫字幕。Guy 在解釋 Tessl 剛放出的 agent skill support。問的人字幕沒有報名，從語氣是訪談。

- 原片：[YouTube](https://www.youtube.com/watch?v=3j1K_1QDyHQ)

## 一句話

已經寫好的 skills 可以當成軟體，而不只是被複製的文字：打包、版本、發布、測試、擁有、跟著所描述的軟體一起演進。Registry 裡的東西會先被評分。評分有兩種：review eval 對 Anthropic 的 skill 慣例，task evaluation 則真的跑一輪有 skill 和沒有 skill 的 agent。

## 已經有 skills 的人得到什麼

[0:00](https://www.youtube.com/watch?v=3j1K_1QDyHQ&t=0s) 問的是 Tessl 剛放出 agent skill support，對已經做了 skills 的人是什麼意思。Guy 說可以把那些 skills 當真正的軟體，不是拿來複製的文字。可以打包、給版本、發布給別人用，可以跑測試和 evals 看好不好，也可以長期擁有，在它所描述的軟體自己演進時跟著改。

## 分數怎麼幫你選

[0:25](https://www.youtube.com/watch?v=3j1K_1QDyHQ&t=25s) 外面有幾萬個 skills，不知道該用哪個。Guy 說 registry 裡索引到的東西會立刻評估、給一個分數。例如兩個都是操作瀏覽器的，你會看到哪個分數高一點，也可以鑽進細節看那代表什麼、適不適合你。

## 兩種 eval

[0:54](https://www.youtube.com/watch?v=3j1K_1QDyHQ&t=54s) Review eval 看 skill 是否符合 Anthropic 為 skill 訂的 best practices：夠不夠精簡、有沒有拆成小檔、有沒有正確的 activation instructions 讓 agent 載入。這一種對所有 skills 都跑。

[1:16](https://www.youtube.com/watch?v=3j1K_1QDyHQ&t=76s) Task evaluation 先定義一個代表「這個 skill 該做什麼」的任務，讓 agent 帶著 skill 跑一次、不帶再跑一次，看 skill 實際幫了多少。這種比較好，但更綁 evaluation data，也更重、更貴。他們有一些，清單還會變長。

[1:46](https://www.youtube.com/watch?v=3j1K_1QDyHQ&t=106s) 更多內容他指向 tessl.io/registry，可以發布自己的 skills，也可以看已經在那裡的。
