# Identifying and installing usage specs for your entire project

片長 72 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tessle。

- 原片：[YouTube](https://www.youtube.com/watch?v=eqTrsvM4Zi4)

## 一句話

他叫 Claude Code 找出每一個 direct dependency，用 Tessl 的 MCP search 在 spec registry 對到 usage spec，再裝到本機。裝完後，Tessl 的 JSON、一份 knowledge Markdown、和每個函式庫的 `index.mmd` 會把這些 spec 接起來。

## 步驟

[0:01](https://www.youtube.com/watch?v=eqTrsvM4Zi4&t=1s) 要讓 agent 會用他選的 open-source libraries，每個 direct dependency 都得裝上 usage specification。

[0:13](https://www.youtube.com/watch?v=eqTrsvM4Zi4&t=13s) 他請 Claude Code 找出 direct dependencies，再逐個找 usage spec。Claude Code 用 Tessl MCP 的 search，在 spec registry 裡把專案用的 package name 對到 usage spec。

[0:32](https://www.youtube.com/watch?v=eqTrsvM4Zi4&t=32s) 對上之後，透過同一個 MCP server，把正確版本從 registry 裝到本機檔案系統。

[0:41](https://www.youtube.com/watch?v=eqTrsvM4Zi4&t=41s) 本機的 Tessl JSON 列出已經對上 usage spec 的 dependencies。knowledge Markdown 把它們映到專案裡已安裝的 local specs。`index.mmd` 是那個 open-source library 的根 usage spec，連到其他 usage specs。

[1:03](https://www.youtube.com/watch?v=eqTrsvM4Zi4&t=63s) 他說到這裡，agent 才有用這些 dependencies 寫 code 所需的知識和 context。
