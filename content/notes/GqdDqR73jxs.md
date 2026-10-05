# Creating a spec with Tessl

片長 3 分 9 秒，自動英文字幕。教學。字幕把 Tessl 聽成 Tessel，把 Claude Code 聽成 Cloud Code。

- 原片：[YouTube](https://www.youtube.com/watch?v=GqdDqR73jxs)

## 一句話

範例是做一個 Hangman CLI。Agent 先問語言、測試框架和基本需求，寫進 `AGENTS.md`，建好目錄和 Vitest，再用 Tessl MCP 的 create 做出 spec。之後用 edit 加上視覺化的絞刑台。下一步才是 build 出 code。

## 從想法到 spec

[0:01](https://www.youtube.com/watch?v=GqdDqR73jxs&t=1s) Spec 會是 source of truth。他在 agent 裡說要做 Hangman CLI，不必一次灌太多資訊，因為 bootstrap 會再問。細節可以以後當正常開發補上。

[0:28](https://www.youtube.com/watch?v=GqdDqR73jxs&t=28s) 問的是偏好的語言、testing framework，以及一些基本需求。環境設定包含 `tsconfig`、`package.json` 和 Vitest。目錄分成 spec、生成的 code、測試。這樣才能驗證生成的 code 符合 spec。

[1:02](https://www.youtube.com/watch?v=GqdDqR73jxs&t=62s) Spec 經由 Tessl MCP 建立，由 Claude 呼叫。檔案系統上，語言和測試偏好寫在 agent 的 MD。source 和 test 目錄還是空的，因為還沒生成。依賴和測試環境已經設好。specs 資料夾放專案所有 specs。

[1:42](https://www.youtube.com/watch?v=GqdDqR73jxs&t=102s) Hangman 的 spec 有一段簡述、一份 capabilities（有些是 bootstrap 時問過的），以及一個他覺得可以的 API structure。他臨時加一項：每一回合之後要有視覺化的 Hangman。這可以叫 agent 改，也可以在 IDE 裡手改 spec。他建議用自己最熟的環境。

[2:22](https://www.youtube.com/watch?v=GqdDqR73jxs&t=142s) 這次 MCP 走的是 edit，不是 create。改完的 spec 多了一節視覺化絞刑台，描述絞架和各個階段。他滿意了。下一步是用 framework 的 build 把 spec 變成應用、生成 code。
