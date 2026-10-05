# The Silent Update That Turns Skills Malicious (Before It's Too Late)

片長 6 分 4 秒，自動英文字幕。在談 Snyk 的 agent scan。Claude 被聽成 Cloud 或 doc cloud，Tessl registry 被聽成 test or registry。GitHub 路徑他邊想邊念，聽成 `GitHub.com/snyk/` 底下的 agent-scan，下面不把沒說穩的路徑寫成連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=BJSxktD4ezc)

## 一句話

攻擊常常不是第一版就壞。你先信任一個能看行事曆的 MCP 或 skill，下一次安靜更新才塞進副作用：多回一條指令、把憑證送出去、或裝一個 binary。Snyk agent scan 用靜態檢查加多個 LLM 當評審，給一個有細微差別的分數，讓你決定卸不卸。

## 信任，然後才動手

[0:06](https://www.youtube.com/watch?v=BJSxktD4ezc&t=6s) 最重要的是 trust。一個 MCP 的理由可以是「我能看你今天的行事曆」。它裝上去、沒做怪事。然後他們更新 skill，加一個 side effect，或除了行事曆項目還回一條 instruction。你已經信任那個函式。之後它可能安靜地換一種方式運作，副作用可以是把憑證送走、裝 binary，或其他。

[0:49](https://www.youtube.com/watch?v=BJSxktD4ezc&t=49s) Skills 裡這些東西多半會混淆。Unicode 有一段人眼和文字編輯器看不見，但 LLM 讀得懂。也可以換個名字、base64，甚至加密。攻擊可以分步：你信任之後，他先在 skill 或 MCP 裡關掉或改寫你的 guardrails，下一步才攻擊。多半不是 one-shot。

[1:51](https://www.youtube.com/watch?v=BJSxktD4ezc&t=111s) 這些 skills 常常就放在 GitHub repo，跟 open-source code 是同一個信任問題。你不知道作者住哪、背景、安全流程、專案衛生。公司裡的開發者因為它做了自己要的事就拉進環境，可能 check in，也可能分享給別人用。到現在還沒有同類的檢查。

## Agent scan 實際做什麼

[2:41](https://www.youtube.com/watch?v=BJSxktD4ezc&t=161s) 問的是使用者怎麼直接用 Snyk，以及在 Tessl registry 裡，找出惡意 skills 和 MCPs。Skills 可能裝在 Claude 或其他常見 agent。掃描器在 GitHub 上，他說背後有公司，所以他信任這個。它是 Python 專案，用 `uv` 啟動。它會掃機器上眾所周知的位置，例如放 skills 的那個資料夾，MCP 也一樣。你也可以指定路徑。它找的是異常。

[3:44](https://www.youtube.com/watch?v=BJSxktD4ezc&t=224s) 不是一次單純的掃描，也不是完全確定性的。有靜態掃描，也有多個 LLM 當 judge，問這東西脆不脆弱。多項檢查合在一起，在 terminal 告訴你哪些 MCP 函式或 skill 內容可能危險，並給分數。他舉 0.5：有可能被用到，但講得很有差別，所以你做得到決定。可以選擇卸掉。

[4:53](https://www.youtube.com/watch?v=BJSxktD4ezc&t=293s) 這是起點。有些被標出的行為其實是故意的。重點是先標出它想做什麼，再問這對不對。也可以看作者，決定你是不是絕對信任這個人。他自己做過一個很小的 MCP，用來找還開著的 Java 研討會和徵稿。它被標成會從外部拉資料。因為是靜態資料，真的脆弱的機會很低，但至少你知道這件事在發生，再決定信不信。
