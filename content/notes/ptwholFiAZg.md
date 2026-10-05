# AI Code Review That Understands Your PR's Intent

片長 5 分 30 秒，英文手寫字幕。Macey 和 Colin 在講 Tessl 要出的 Code Review。有一個 lens 的例子字幕聽成 random design，不把它當成設計系統的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=ptwholFiAZg)

## 一句話

寫 code 不再是瓶頸，審查和信任才是。Tessl 的 code review 會讀 PR 的標題和摘要，依這次變更的意圖來審，而不是一套跟你的文化無關的清單。審查標準是 repo 裡的檔，你擁有它。它也是 software factory 裡的一等元件。

## 跟其他審查工具差在哪

[0:00](https://www.youtube.com/watch?v=ptwholFiAZg&t=0s) Coding agents 可以寫幾千行、開幾千個 PR。審查和信任才是瓶頸。Review 是責任所在，是 code 交到你想信任的客戶之前的最後一道門。

[0:55](https://www.youtube.com/watch?v=ptwholFiAZg&t=55s) 差別之一是它很清楚這張 PR 的意圖。它讀 summary 和 title，知道你這次變更想到達哪。有的公司是 fix-forward，不想審太嚴，只想出貨。有的有很嚴的要求。你不用把這件事再告訴它，它會照著審。

[1:30](https://www.youtube.com/watch?v=ptwholFiAZg&t=90s) 現有工具的信任問題是：它們找了一堆問題，你很難知道真不真、準不準、符不符合你的標準。如果裝了 code review 還得再審一次它的意見，盤子上一點都沒少。

## Review lenses

[2:03](https://www.youtube.com/watch?v=ptwholFiAZg&t=123s) Review lenses 本質上是 skills。可以評估、分發，也可以改成正好是你的 repository 標準。再用 globs 把它們套到 codebase 的某些部分。可以有專門給某一類設計的 lens，也可以有專門給 security 的。預設就有一套，不設定也有價值。真正的力氣在能把審查調細。

[2:42](https://www.youtube.com/watch?v=ptwholFiAZg&t=162s) 最先感覺到的是比較少花時間把一張 PR 顧到完成。越調，知識越複利，審查越好、你越信任，agent 也更能以適合你的方式自己做。標準是你的。它是 repo 裡的檔，可以是 skill 或設定檔。你擁有、可以給版本、可以照你的方式分享。不是別家產品網頁裡的一個設定，也不是黑盒。

[3:37](https://www.youtube.com/watch?v=ptwholFiAZg&t=217s) 因為 lenses 可以版本化，同一套審查可以套到每個 repo，再用別的 lenses 處理個別 repo 的差異。於是組織有一條基準線。

[4:01](https://www.youtube.com/watch?v=ptwholFiAZg&t=241s) Colin 說 Tessl code review 是 software factory 的 first-class component。Factory 相對自主、出很多 code。你得確定那些 code 可信、而且是你要它做的事。所以它直接接進 factory。

[4:34](https://www.youtube.com/watch?v=ptwholFiAZg&t=274s) 最簡單的開始是拿 Tessl agent 對準 repo，叫它設定 code review。它會設 workflows、actions、設定檔，並幫你調自己的 review lenses。也可以把你常用的 agent 指向網站上的文件，網址他說是 tessl.io。
