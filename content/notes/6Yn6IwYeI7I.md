# Tessl Product Demo

片長 3 分 23 秒，自動英文字幕。產品導覽。字幕把 Tessl 聽成 Tessle 或 Tesla。文件網址聽成 docs.tesle.io，不寫成可點連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=6Yn6IwYeI7I)

## 一句話

在專案裡 init 之後，agent 用 create 寫 spec、用 build 生 code、用 document 從既有 code 反推 spec、用 build test 加測試。另外有 plan 檔，以及一個免費的 spec registry，裡面是版本化、給 agent 看的函式庫文件。Framework 還在分批開放。

## Framework 的幾條工具

[0:00](https://www.youtube.com/watch?v=6Yn6IwYeI7I&t=0s) 在專案目錄 init。要做一個 MCP server 的 spec 時，他叫 agent 用 Tessl 做。Agent 視情況再問問題，然後用 create 產生 spec。這種 spec 是 Markdown，但有約定：generates 連結指出這份 spec 代表哪段 code、可選的 API blocks 必須被實作、測試對到特定行為、以及對 dependencies 的明確控制。

[0:44](https://www.youtube.com/watch?v=6Yn6IwYeI7I&t=44s) 有了 spec，用 build 生 code。create 和 build 這類 MCP 工具各做一件事，讓整段 session 比較有產能。Spec 讓你看的是行為，而不是 agent 怎麼做。

[1:10](https://www.youtube.com/watch?v=6Yn6IwYeI7I&t=70s) 已有 code 時，document 可以從它生成 spec，先當文件。之後把 describes 連結改成 generates，再用 build，就可以沿 spec 演進這段 code。

[1:27](https://www.youtube.com/watch?v=6Yn6IwYeI7I&t=87s) 迭代到滿意後，build test 把測試加進 spec。測試和指定的行為對得起來，也當以後 session 的回歸保護。Tessl 還會引導 agent 先寫 plan、放在專用資料夾、做的時候更新。他說這提高一致性、留下稽核、並鼓勵人和 agent 增量來回饋。

## Registry

[2:01](https://www.youtube.com/watch?v=6Yn6IwYeI7I&t=121s) 第三方 code 上，agent 常幻覺不存在的 API、混版本、或卡住。Registry 裡是數千個 open-source library 的版本化、為 agent 最佳化的文件。可以用 CLI 搜和裝，也可以叫 agent 找。Usage specs 的套件版本對應它們描述的 code。Registry 今天免費。Framework 未來幾週分批開放，要在網站登記。文件網址這支字幕沒有聽清。
