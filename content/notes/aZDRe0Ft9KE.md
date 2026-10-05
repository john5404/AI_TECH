# Making Agent Skills Secure - How Tessl and Snyk Are Solving The Next Big Security Issue

片長 2 分 20 秒，自動英文字幕。Snyk 的 Brian 在講。字幕把 Snyk 聽成 Sneak，把 Tessl 聽成 Tessle 或 Tesla。片尾網址聽成 tesleio/registry，不把聽錯的網址寫成連結；registry 的正確入口在其他片裡是 tessl.io/registry，這支片沒有念清。

- 原片：[YouTube](https://www.youtube.com/watch?v=aZDRe0Ft9KE)

## 一句話

已發布的 skills 裡，13.4% 至少有一個重大安全漏洞。小漏洞串起來可以變成攻擊鏈。Tessl registry 上的每個 skill 都跑過 Snyk scan，結果就放在 skill 旁邊。

## 為什麼掃 skill

[0:00](https://www.youtube.com/watch?v=aZDRe0Ft9KE&t=0s) 13.4% 這個數字先丟出來，然後問使用者能做什麼，才不會把可能惡意的 skills 放進開發環境。Brian 說模型會變好、也會寫出更好的 code，但訓練資料裡還是有很多漏洞。小漏洞串成 attack chain 可以破壞很大。

[0:32](https://www.youtube.com/watch?v=aZDRe0Ft9KE&t=32s) 整合是把 Snyk 的安全掃描放進 Tessl registry。他把 MCP 看成下一個 supply chain 問題：你在給 LLM 或 agent 加功能，它會執行那些東西。現在信任不夠，下一版會做什麼才是問題。

[1:02](https://www.youtube.com/watch?v=aZDRe0Ft9KE&t=62s) Skills 也掃。因為是純文字，會有各種問題，例如用 base64 編碼的 prompt injection。Skill 檔可以很大，不該用手看。Registry 上每個 skill 都有一次 Snyk scan，結果就在旁邊。可以點進去看嚴重性、這代表什麼、能做什麼。

[1:30](https://www.youtube.com/watch?v=aZDRe0Ft9KE&t=90s) 他的建議不是盲目安裝：看 skill 的意圖、你打算怎麼用、它能碰到什麼權限，再做決定。片尾感謝 Brian。
