# Reinstalling Usage Specs

片長 67 秒，自動英文字幕。短教學。字幕把 Tessl 聽成 Tessle，把放 specs 的目錄聽成 tzle。目錄的正確拼法字幕沒有給清，下面不寫死路徑。

- 原片：[YouTube](https://www.youtube.com/watch?v=3GnI8860wNY)

## 一句話

Usage specs 不進 git，跟 `node_modules` 一樣。把專案拉下來之後要重裝兩次：`npm install` 裝程式庫，`tessl registry install` 裝 usage specs。

## 步驟

[0:01](https://www.youtube.com/watch?v=3GnI8860wNY&t=1s) usage specs 沒有 check in。專案從零拉下來時，要重裝它們才能繼續開發。他把它放在跟平常 `npm install` 同一套儀式裡，因為流程可比。

[0:19](https://www.youtube.com/watch?v=3GnI8860wNY&t=19s) `package.json` 裡有應用程式依賴，tessl 的 JSON 裡有 usage specs 的資訊。實際的 usage specs 不進 git，所以兩樣都要重裝，專案才算設好。

[0:38](https://www.youtube.com/watch?v=3GnI8860wNY&t=38s) 他在 terminal 做，也可以叫 agent 做。先 `npm install`，再 `tessl registry install`。做完會看到 `node_modules`，以及 Tessl 目錄底下的 usage specs 資料夾。字幕把那個目錄名聽成 tzle。

[1:02](https://www.youtube.com/watch?v=3GnI8860wNY&t=62s) 到這裡，usage specs 裝回來，可以繼續開發。
