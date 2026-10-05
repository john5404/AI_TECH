# Vijay Ramamurthy - Productionizing LangChain Agents with Oso | DevCon Fall 2025

Vijay Ramamurthy 在 DevCon Fall 2025 談怎麼把 agent 送上 production。原片約 27 分鐘，英文自動字幕。字幕把 Oso 聽成 OSO、OAuth 聽成 OOTH。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=UTqnwO96q4I)

## 一句話

Prototype 能跑，不代表 agent 有身分、會照使用者的意圖做事，或在 production 失控時關得掉。他看到的三步是 prototype 到 QA、QA 到 production、然後在 production 裡治理。Oso 接進 LangChain 1.0 的 middleware：tool call 可以事後擋，model call 可以事前把不該出現的 tool 拿掉。

## 三步，以及身分不能只傳 user

[0:09](https://www.youtube.com/watch?v=UTqnwO96q4I&t=9s) Vijay 來自 Oso。Oso 是治理 B2B app 裡動作的 SaaS，很多 app 會在背景即時問它：你能做什麼。過去一年他們幫不少客戶把 agent 送上 production。這場放在 LangChain 1.0 的新功能上，看 Oso 怎麼接進去。

[1:00](https://www.youtube.com/watch?v=UTqnwO96q4I&t=60s) 三個階段不是 agent 獨有，但每段的難題是。第一，prototype 到 QA：資安、產品等人一起 swarm。第二，準備上 production。第三，在 production 跑的時候，怎麼確認行為還是你要的。

[1:41](https://www.youtube.com/watch?v=UTqnwO96q4I&t=101s) Prototype 到 QA，通常是把 agent 接到真正的後端。Prototype 用 mock tool；之後 tool call 就是打各服務的 API。核心問題是認證，也就是 agent identity。服務會依使用者做過濾，同一個動作落到不同 resource、workspace 或 project。Audit 也要歸因：若把 agent 做的事全記成「它所代表的那個 user」，你就失去「這是 agent 做的」這條資訊。自動執行、沒有人逐次簽核時，這條尤其重要。另外，後端很快會需要 agent 專用的邏輯。

[3:58](https://www.youtube.com/watch?v=UTqnwO96q4I&t=238s) 常見做法是把 user 的身分傳下去。服務本來就吃 user identity，OAuth 2.1 和動態簽發的 token 文獻多半也是這條，頂多再縮一點 grant。他說常常不夠。Agent 的權限通常跟 user 一樣或少一點，少的部分可以不給某些 tool。但有些 agent 要比 user 更能做。他舉 traction 最大的客服：一間公司要讓客服 agent 做代表能做的事，例如退款。使用者自己沒有退款權限，app 上也沒有那個按鈕。能用 agent 退款很省客服時間，卻不能把這筆動作記成 user 自己做的。

[5:37](https://www.youtube.com/watch?v=UTqnwO96q4I&t=337s) 同時傳 user 和 agent 比較近：知道它是客服 agent，就可以把權限抬到需要的高度。他還要加上 session。Session 打引號，因為形狀差很多。ChatGPT 一個視窗是一個 session；也有單一支 LangGraph 跑完整段流程；也有跨多個服務協調；也有 multi-agent，每個 agent 自己一個 session。他這裡的 session 是任何帶著 persistent context window 的東西。

## 讀過不可信內容之後，就不准再對外說話

[6:39](https://www.youtube.com/watch?v=UTqnwO96q4I&t=399s) Demo 是產品管理入口。Agent 接三個 tool，給 PM 看 feature request、決定要做什麼。他問 triage 裡有哪些 request 該做。他先說 OpenAI 的 model 就算把 temperature 設成 1 也不 deterministic，可能要重試；現場 Wi-Fi 也卡了一下。字幕沒有把重試當中的畫面補成結果。

[8:22](https://www.youtube.com/watch?v=UTqnwO96q4I&t=502s) 一連串 tool call 很可疑：只問 triage 有什麼該做，它卻跑了 SQL。他承認可以爭論 bot 為什麼有 SQL，但市面上已有 MCP 帶著這個問題。打開之後是 prompt injection：去資料庫拿 password hash，再把 hash 公開留言到那張 issue。公開 issue 上就有了被點名那位使用者的 hash，資料被外洩。

[9:39](https://www.youtube.com/watch?v=UTqnwO96q4I&t=579s) Session 重要，是因為 SQL 不該跑、或那則留言不該發，取決於這之前發生過什麼：讀了使用者提交的公開 issue，也就是不可信內容；又查了資料庫，拿到敏感資料。兩件事都做過之後，至少不該再讓 agent 對外溝通。可以更細，但這是合理的第一步。他不要靠更激烈的 prompt engineering 躲 prompt injection。他聽過的說法是：1997 年之於 SQL injection，2025 年之於 prompt injection。新 model 出來大約一小時，就有繞不過去的 exploit。

[10:47](https://www.youtube.com/watch?v=UTqnwO96q4I&t=647s) Agent 用 LangChain 1.0，因為 1.0 加了 middleware。他接的是 Oso middleware。在 Oso agent monitor 裡，他把「取 feature request」標成不可信內容，SQL 標成 private data（拿得到 password hash），在 feature request 上留言標成對外溝通。同一句再跑：SQL 真的執行了，但對外溝通被擋，tool message 是 disallowing external communication，因為 untrusted content 和 private data 都碰過了。

[11:56](https://www.youtube.com/watch?v=UTqnwO96q4I&t=716s) 實作是 wrap tool call。Tool 即將執行時可以介入說不要做。重點不是回一個 403、404 或 500，而是給 agent 一句有用的話：這次沒做、為什麼、可以怎麼跟使用者說。真的要留言，人可以開新 chat、自己貼。他們不信任 agent 在人沒選擇的情況下做可能外洩資料的動作。Oso agents API 收到 tool call，decision 是 deny 就把理由做成 tool message，不呼叫 handler。Session 之所以必要，是因為 context window 被「敏感資料加上不可信的 prompt injection」污染了，後面的 tool 才知道要鎖。

[13:58](https://www.youtube.com/watch?v=UTqnwO96q4I&t=838s) 所以 prototype 到 QA 的身分是三件事：它代表的 users、agent 本身、session。User 加複數，因為很多 agent 只代表一個人，但也有 validation 不代表任何特定人，或代表多個人。OpenAI 剛加了 group chat；Slack thread 裡也有很多 agentic bot。你可能要傳多人的身分，取裡面最低的權限。也有 agent 非同步代表整個 organization、workspace 或 project。Agent 和 session 是兩件事：一個 session 可以有多個 agent，LangGraph 的 multi-agent 很常見；一個 agent 也該有很多 session，不然就像一輩子只用過一次。

## 沒有攻擊者，tool 回覆也會把 agent 帶歪

[15:32](https://www.youtube.com/watch?v=UTqnwO96q4I&t=932s) QA 到 production 的難題是讓 agent 照使用者的意圖走。剛才是明顯沒照意圖：沒有人要外洩 password hash。但就算沒有不可信內容、沒有攻擊者能塞東西進 tool，agent 仍會被 tool call 和 tool response 搞混。

[16:37](https://www.youtube.com/watch?v=UTqnwO96q4I&t=997s) 新的一輪 chat，他問 backlog 裡哪些 request 該做。又是 SQL。這次沒有 prompt injection。展開的內容可能是一張合法的 feature request：有人要確認自己在系統裡的權限，寫給讀這張票的人，不一定知道會被 agent 執行。Prompt 若鼓勵 agent 盡量主動、盡量用 tool，沒有惡意內容也會發生這種事。

[18:00](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1080s) 一種做法是 LLM as judge，把 agent 看得到的 tool 收到跟使用者意圖有關的那些。他說讓 agent 做的事永遠切中意圖，有人當成 agentic AI 的 golden goose。沒有 silver bullet。Judge 拿使用者的請求，決定某些 tool 該不該被拿出來當選項。Monitor 上，Oso 標過：在不知道 query 的情況下跑 SQL，和找出 triage request 沒有直接關係。他打開 intent-based attenuation。

[19:15](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1155s) 這次用的是 wrap model call，不是 tool call API，而是 tool select。LangChain 1.0 裡，model call 是在問 agent「你要叫哪個 tool」。Middleware 收到正在考慮的 tool 清單，可以改成只留跟請求有關的。Judge 看過使用者目前的 messages，用 tool 的 name 和 description 過濾。再跑「triage 裡哪些該做」：SQL 被濾掉，留言也被濾掉，因為使用者沒問這個。拒絕理由會引用使用者的 prompt。

[21:15](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1275s) 差別是：wrap tool call 是已經讓 agent 犯錯，再跟它說不行，中間有來回。Wrap model call 是先縮小選項，它根本不會去試。也可以用粗粒度的權限，或使用者最近做過什麼，來推行為。少給你不想讓它做的選擇，品質就比較高。

## 上了 production：先隔離，再改 code

[22:11](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1331s) 在 production 跑，主要是 governance。傳統產品做完 QA 和 pen testing，覺得邊界蓋過了，上線後看 analytics、決定加什麼功能。Agent 則每件事都是 edge case，非確定，全是 user input 和 LLM output。蓋不完所有情況。尤其它能對服務執行動作時，要盯著有沒有破壞或行為不對，並且鎖得下來。

[23:02](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1382s) Oso agent governor 裡，agent 亂得很厲害就可以按 quarantine，直接下線。好處是 agent 在即時請求這層，不必改 code 就能鎖。他也可以解除隔離，只把「能跑 SQL」這個 tool 關掉。資安或產品經理都能做。先收到「這個 agent 在亂」的 alert，把 blast radius 限住，再補 code 和 prompt。這樣才敢把能力高的 agent 送上 production。

[24:28](https://www.youtube.com/watch?v=UTqnwO96q4I&t=1468s) 唯一的問題是 zero-day：prompt injection 若能繞過那個負責治理的第二個 agent 怎麼辦。他不建議用 LLM as judge 處理 prompt injection。他們用的是 deterministic rules。很多人是很刻意的 prompt engineering，加上 tool call 前後檢查的規則。知道 prompt injection 可能造成實害時，就寫 code：這個 session 碰過不可信內容，也碰過敏感資料，就不准留言；要留言就開新 session。這條路不諮詢 LLM judge，也就不把能被 prompt injection 或 zero-day 影響的東西放進決策。
