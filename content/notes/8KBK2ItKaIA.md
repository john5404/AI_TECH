# What If There Was A Package Manager For Coding Agent Skills?

片長 2 分 15 秒，英文手寫字幕。對話解釋 Tessl 的 skills package manager。

- 原片：[YouTube](https://www.youtube.com/watch?v=8KBK2ItKaIA)

## 一句話

Skills 本來要被重複使用，卻沒有發行系統，於是大家複製 Markdown、在同一個 repo 裡為了不同 agent 再複製一次，舊的 skill 也不會更新。Tessl 用 registry、manifest 和 CLI 把這件事做成 package manager。

## 消費和發布

[0:00](https://www.youtube.com/watch?v=8KBK2ItKaIA&t=0s) 諷刺是：它們為了重複使用而做，卻沒有 distribution system。人把 markdown 檔和資料夾複製進 repo，有時同一個 repo 裡複製多次，因為不同 agent 都要吃。結果是跨 repo 的 sprawl，以及不會更新的舊 skills。對方說這就是需要 package manager。軟體裡打包、版本、用 manifest 記安裝內容都是解過的問題，只是還沒用在 skills 上。

[0:38](https://www.youtube.com/watch?v=8KBK2ItKaIA&t=38s) Tessl 發了一個給 skills 和其他 context 的 package manager。可以安裝 skill。任何 GitHub repo 的 skill 也能裝，但會經由 registry。Manifest 記住你裝了什麼，並提供更新。它不在系統裡複製內容。

[1:05](https://www.youtube.com/watch?v=8KBK2ItKaIA&t=65s) 消費端：從 npm 裝 Tessl CLI，然後 `tessl install` 某個 skill，或用 skill search 找。做完就有 manifest。Registry 上可以看 evaluations，用來挑比較好的。

[1:32](https://www.youtube.com/watch?v=8KBK2ItKaIA&t=92s) 生產端：用感覺很自然的 CLI 把 skills 發到 registry，再用 workspaces 和 access controls 分給團隊。發布時也會跑 evaluations。個人、社群、組織都可以分享。

[2:00](https://www.youtube.com/watch?v=8KBK2ItKaIA&t=120s) 他指向 tessl.io/registry。
