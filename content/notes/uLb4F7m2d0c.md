# Joseph Katsioloudes - Code Security Reinvented  Navigating the era of AI | DevCon Fall 2025

Joseph Katsioloudes 在 DevCon Fall 2025 的場次，片長 23 分 27 秒，英文自動字幕。他以資安專長、也以 GitHub 的身份在講。日期他說是 2025 年 11 月 19 日。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 OpenAI 聽成 open AAI，把 harness 聽成 hardness，把 SonarQube 聽成 sonar cube，把 sink 聽成 scene。

- 原片：[YouTube](https://www.youtube.com/watch?v=uLb4F7m2d0c)

## 一句話

AI 在 IDE 裡可以幫開發者把程式寫得更安全，但不是拿來抓洞。資安缺的不是偵測，是修復：一個 application security specialist 對一百個開發者。用專家工具偵測，用 AI 提修法，而且自己讀過建議的 code。MCP、供應鏈調查、針對變體的教學、autofix，都是在這個前提下才有用。

## 用 AI 抓問題：幻覺，而且不穩定

[0:29](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=29s) 他先講怎麼不要寫出更安全的 code。右側程式第 23 行是 SQL injection。Prompt 是列出安全問題並各提修法，跑的是比較舊的 GitHub Copilot。SQL injection 被認出來，這點準。接著它說密碼是明文，那是幻覺，這份 code 沒有這個問題。靠 AI 偵測，幻覺是第一件會遇到的事。

第二天是不確定性。他把前一天的 code 放進來，season 1 和 2，season 3 這段不用。用 `#codebase` 問這整個 codebase 的十個問題。Copilot 回了八個。有人會說這是 80% 準確率，他不這麼說。其中第六項 prototype pollution 是他第一次看到 AI 報出來：父方法把資訊惡意塞給子方法。他打開那個 `code.js`，同一個 prompt 再跑，結果裡沒有 pollution。換成另一個 model，從 OpenAI 換到 Anthropic，pollution 還是沒出現。他每次 prompt 只跑一次。

[4:40](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=280s) 打開 agent mode 之後，一個偏安全、一個偏寫 JavaScript 的 agent，確實把 pollution 抓成第二項，修法看起來也不錯。他還是要大家記住：到 2025 年 11 月 19 日這一天，不要靠 AI 偵測問題。AI 可以縮小安全落差，不是來取代 security testing。那些測試有 taint tracking 和 data flow。現在的 AI 是在預測下一個詞，英文或程式都一樣，不擅長偵測。AI 不該是你唯一的安全網。

他要帶走的一句話：資安沒有 detection problem，有 fixing problem。這些年工具給了太多問題資訊，含 false positive，人沒有相應的技能。每 100 個開發者才有一個 application security specialist。AI 可以修，前提是你讀它建議的 code，確認沒有引進新問題。修復的結果品質高很多。系統裡有過濾器，避免建議有漏洞的寫法。不要依賴那些過濾器。

## Security MCP：理想還沒到

[5:44](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=344s) MCP 是標準協定，讓 agent 和 model 離開訓練時的資料，拿到即時、伺服器端的東西，例如帳號。用 AI 偵測會不穩定、會漏、會幻覺，但自然語言可以描述工具做不到的事。SAST 相反，給的是高信心、可重現的結果。他想要的是把兩邊接起來的 security MCP server。他們在做，但使用體驗還不好，GitHub 不會在那之前放出這種東西。MCP 是同步的。拿 SAST 或 code scanning 來接，體驗慢、很差。再放到 IDE，讓 agent 評論結果、編排工具，目前既不好也不工作。那是目標。

[7:38](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=458s) 他不信任自己還沒在用的 MCP server。已經用 Figma，信任他們的 server 就合理。不信任的原因：要的 scope 太寬，IDE 裡的東西會曝到外面；還有 indirect prompt injection。前一天 workshop 是人自己打 prompt。若對方備好一串 prompt 從裡面打你，他說百分之百可能。這是他排最前面的兩件事。

Registry 很多，VS Code 有自己的，GitHub 也有。安全相關他只看到兩個：一個公司的，字幕聽成 Kodasi；另一個是 GitHub。GitHub 那個不專做安全，但有 code security，最後兩項是 secret protection 和 security advisories。在 agent mode 呼叫這些功能，MCP 到伺服器端，你得先認證，拿的是伺服器上已有的東西：code 產生的 alerts、洩漏的 secrets。你可以跟 coding agent 聊，也可以先拿到一份 security posture 摘要和下一步。免責是：這能幫你起步，Copilot 不是安全專家，它是 coding assistant。資訊在伺服器上或在 pull request 裡，結構清楚，不該期待幻覺。拿它省時間、把東西拉到 IDE，這點它很行。

## 供應鏈、攻擊面、fuzzing

[10:05](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=605s) 供應鏈決策也許以後會變成 MCP server。這是他們過去幾個月做的，今天免費給。每次把套件放進 codebase，攻擊面就變大。他問現場有誰會花超過 10 或 15 分鐘決定一個套件，沒有人舉手。示範是問一個 Python 套件的社群健康和安全：一份結構化結果、executive summary，以及他們查過的 URL。指令放在一個網址，兩或三個檔案，可以改。兩三個人把它做成他敢公開demo 的品質，他大量測過。為什麼不只一個檔：單檔他們做不到那個品質，也許以後可以。把檔案放到 IDE，再問。

[12:01](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=721s) 內部計畫叫 secure opensource fund。他說給出 125 萬美元，字幕接著是「10,000 to 20 to 125 projects」，金額怎麼拆沒講清。後面他明確說這 125 個專案問的是同一題：你要怎麼駭我的專案、攻擊面在哪、問題是什麼。他在 Copilot 網頁裡打開自己不維護的 Bootstrap。這 125 個專案有專家回答。其他人沒有。專案是自己在用，或像 Bootstrap 這樣正考慮放進供應鏈，第一個問題都是：別人要怎麼靠它打我。專家得讀幾百萬或幾千行，才能寫出那種短清單。例子是 sidebar 要小心，因為有使用者輸入，可能有 cross-site scripting。短清單讓你決定要不要信別人的 code、要怎麼用。

[13:40](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=820s) Fuzzing 是由外往內。公開的 email 和密碼欄位丟進一百萬種輸入，可能變慢，也可能出現不想要的行為。他覺得 AI coding assistant 在這裡有兩件很強。一件是 fuzzing 的自動化與 harness：做一個系統去收輸入、去 fuzz 你要測的東西。另一件是「幫我產生 fuzzing strings」。資安案在這裡變慢，因為專家要生出畸形、很長、帶攻擊味的輸入。不是專家的人，這段 boilerplate 很有用。結尾那段自動產生的藍字是為了把對話接下去。他不懂下一步時，包含不是資安的開發工作，這段幫過很多次。

## 修，而不是再偵測一次

[15:23](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=923s) 教學那一段：第 23 行的 SQL injection 是為了讓大家看懂的簡單例子。實務上一個問題可以有幾十種發生方式，SQL injection 也有幾十種變體。開發者不會一眼全認出來。你可以要針對自己這份 code 上那個變體的答案、教學和程式例子。他自己讀書時漏洞都是理論。懂理論不代表實務認得出來。這把兩邊接上。

[16:38](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=998s) 最佳實務仍是在 CI/CD 做 code scanning。以前的經驗是伺服器上看到 alert，SonarQube、GitHub 或別的都一樣，回 IDE 修、再 push、看 alert 還在不在。Autofix 對開源免費，可以用前一天那份 code 試。他們兩週內修了 600 個漏洞，修復率從 50% 到 100%。客戶把 time to remediation 縮短。拖愈久，內部愈在搶優先順序。

新的樣子是你 push 功能、開 pull request，偵測仍用 code scanning，不靠 AI 偵測。AI 只提修法。說明會指出問題是什麼、發生在哪、vulnerability 的 source，以及 sink，也就是真正被執行的地方。PR 上綠色的是 GitHub 常見的 AI 建議。那段 code 保證會清掉這則 alert。你可以不 commit，也可以在 PR 裡直接改，不必回 IDE，也不必開 Codespaces。

[19:42](https://www.youtube.com/watch?v=uLb4F7m2d0c&t=1182s) 他收成六種用法。寫更安全的 code：不要用 AI 當唯一安全網，不要用它偵測，用它修，建議的 code 要讀。MCP：現在就能碰到伺服器端的資料，但離他們想要的還遠。供應鏈：用結構化問法做決定；不想靠它，就自己打開那些 URL。量身答案：教學對準你這份 code 的那個變體。安全指引：不熟的 code 先拿一份該小心的短清單。最後是找出並修安全 bug，Copilot autofix 是他們內部和其他開源專案變快的方式。

練習場是前一天玩過的 repo，字幕念成 gh.iose io/secure codegame，縮寫 SCG，網址沒有被念清楚。三個 season，也可以依 `contribution.md` 加入社群。先在那裡試，再碰你在乎的 code。
