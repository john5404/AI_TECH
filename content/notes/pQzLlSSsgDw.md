# Adding tests to your specs

片長 1 分 53 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tesla 或 Tessle，把 Vitest 聽成 Vitus，把 spec-centric 聽成 specentcentric。

- 原片：[YouTube](https://www.youtube.com/watch?v=pQzLlSSsgDw)

## 一句話

Spec 裡已經有 capabilities。他叫 agent 把這些變成可以跑的測試情境，並產生文件。Tessl 會自動輪流修失敗：改 spec 讓它更清楚、改測試讓它成為有效案例，或重寫 code 讓它符合 spec。

## 這圈怎麼轉

[0:01](https://www.youtube.com/watch?v=pQzLlSSsgDw&t=1s) 應用的能力和功能已經寫在 spec 的 intents 裡。接下來加測試和文件。他叫 agent 把 app 做扎實，產生 docs 和 tests。會出現一份 plan，把這些階段走完。

[0:28](https://www.youtube.com/watch?v=pQzLlSSsgDw&t=28s) Spec 裡已有 capabilities 清單。要做的是把它們變成可執行的 test scenarios，用來確認生成的 code 符合 spec。測試生成後全部跑。Tessl 會自動處理失敗，修法三選一：把 spec 改清楚、把測試改成有效案例，或重建 code 使它符合 specification。

[0:54](https://www.youtube.com/watch?v=pQzLlSSsgDw&t=54s) 影片把這圈快轉。大部分核心測試通過之後，他可以繼續用 agent 或手動走到完整覆蓋。

[1:07](https://www.youtube.com/watch?v=pQzLlSSsgDw&t=67s) Spec 裡的 capabilities 還在，但多了散在各個測試檔的對應案例。可以點進檔案系統看覆蓋夠不夠。字幕說這些是 Vitest 檔，可以自己跑。測試依 capability 分檔，跟你現在可能的分法一樣。另外有一份 plan，記下上一輪跟 Claude Code 做的事。

[1:43](https://www.youtube.com/watch?v=pQzLlSSsgDw&t=103s) 他說現在有一個以 spec 為中心、用 Tessl specs 的應用。下一步是把它做成一個 Express server。
