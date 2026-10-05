# Rotem Tamir - Agents on GuardRails: Deterministic Safety for Database Operations | DevCon Fall 2025

Rotem Tamir 在 DevCon Fall 2025 的演講。原片約 21 分鐘，英文自動字幕。字幕把講者聽成 Otim、公司聽成 Origa／Orga、Ent 聽成 Ant。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=r7XSqUsLo_g)

## 一句話

Coding agent 已經能從一個 prompt 交出整張 pull request，下一步就是沒人看著也要動 production database。DDL 與 DML 出事的方式不同，解法是同一條：不要靠 agent 自己記得小心，用 deterministic 檢查和封閉的 tool 把能做的事框住。

## 一條 unique 約束怎麼把 production 打掛

[0:09](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=9s) 他說這場有 75 張投影片，結尾準備了一首兩分鐘的歌，正式版被剪掉，最後兩分鐘再放。字幕結尾只剩音樂，歌詞沒被摘到。

[0:34](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=34s) 他 40 歲，來自 Tel Aviv 附近。直到不久前是 Ariga 的 CTO 與共同創辦人。那邊有兩個資料庫開源專案：Go 的 entity framework Ent，以及他稱為 Terraform for databases 的 schema 工具 Atlas。現在他在字幕所說的 Honeybadge labs，幫早期、面向開發者的新創做顧問。過去五年他都在擋開發者把 production database 炸掉。

[1:09](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=69s) Agent 從 tab completion 走到 multifile edits，一個 prompt 就能拿到整張 pull request。照這個速度會走向 unattended software engineering，也就得把 production database 交給它們。他不想放棄這些效率，所以先講 agent 怎麼把資料庫搞砸。

[2:10](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=130s) SQL 他分成兩半。DDL 改 schema，例如 drop table、alter、建 index。DML 是 select、update、delete。

[2:39](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=159s) 產品經理只要一件小事：users 的 email 要 unique，報表才不會被重複值弄亂。開發者叫 Claude Code 改 data model，email 變成 unique true，再叫 Claude 產生 migration。字幕把當時的 ORM 與 CLI 聽成 SQLJS、SQLiz。他說做出來的 migration 在那個工具裡是對的寫法。

[4:09](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=249s) Pull request、CI 綠燈、團隊 thumbs up、過 staging，都照規矩。上線後系統炸掉：DB CPU 衝到頂，backend 關鍵 endpoint 100% error rate。他開玩笑說，這也對上 100% 不滿意的管理層。

[4:52](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=292s) Postgres 要把既有欄位改成 unique，得對 users 拿 access exclusive lock，期間不能讀也不能寫。他說為了 ACID 裡的 I——他口中的 integrity——要先驗證規則，等於 stop the world，從零建 index。大表就是 full table scan。鎖沒放之前，碰到 users 的請求都在等，connection pool 耗盡後，連跟 users 無關的請求也失敗。

[6:19](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=379s) 安全做法是先 create index concurrently，再用 using index 加上 constraint。Postgres 知道這欄已由該 index 保證 unique，鎖變成很快的 metadata lock。Agent 做了「對的」migration，還是把 production 打掛。

## 本地工具提醒，CI 負責擋

[6:48](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=408s) Atlas 的 migrate lint 對 DDL 做 static analysis。它重建資料庫現況，理解要做的變更，再跑 30 多個依資料庫而異的 analyzer。它會說這是 destructive change、會刪資料、會鎖表，也可以加自己的 policy。對上這個變更，lint 會說：在 users 加 unique constraint 會拿 access exclusive lock，讀寫都擋住。

[8:01](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=481s) 他說現在是 2025 年底，不該只在終端機跑指令。可以把 Atlas 包成 Claude 的 slash command，之後的 schema change 都走這條。示範是 slash schema，把 email 改成 unique。Claude 改 data model、排 migration、跑 migrate lint，然後停下來告訴你這會鎖表。

[8:54](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=534s) Agent 不會 100% 用你給的 tool，開發者也可能不知道這條 slash command。真的要穩，就接到 GitHub Action 或 CI：這類變更沒有明確核准就不能 merge。Pull request 會變紅，agent 產生或幻覺出來的東西外面有一道正式 guardrail。

[9:18](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=558s) Takeaway：用本地工具告訴 agent 風險，用 CI guardrail 執行安全。DDL 少見但風險高；接下來是每天的讀寫。

## 執行期拿掉 execute SQL

[9:35](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=575s) 去年 11 月 Anthropic 發布 MCP，讓 model 拿到更多 context 和 tool。他問還有什麼 context 比資料庫更好：裡面是 state，是資料。今年 4 月 Google 放出 MCP toolbox for databases，他稱為 agent 與資料庫之間的 connective tissue。brew install，加進 MCP servers 的 JSON，就能叫 Claude 介紹連上的資料庫。它用 list tables 做 schema introspection。示範是一個 CMS 部落格。再問誰是 top author，它用 execute SQL 查出 Bob。

[11:02](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=662s) 自己在本機、又是信任的使用者，還能在 tool call 出去前逐條看，勉強能用。若 agent 是給使用者直接用、卻仍連著資料庫，就不一樣。他說自己是連續第二個提到 Jason Lemkin 資料庫被刪那件事的人，字幕聽成 Jason Lmin。資料庫沒了，公司就沒了，或至少非常麻煩。

[11:50](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=710s) 他把這個 MCP server 放上 rails：停用 execute SQL，改成 structured tools。tools YAML 定義 data source，再給一組封閉的 query，只有這些能對資料庫呼叫。每個 tool 寫明 model 能轉的 input。edit post 用 $2、$3 這類 placeholder，執行時才代入。他叫 agent 代表 Bob 改最新文章標題。Claude 想用 execute SQL，已經沒有了，就改用開放的 tool 完成。另一個 prompt 看結果，標題變成他說的 hacker caps 寫法。

## 身分由 code 填，不由 prompt 填

[13:19](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=799s) “You're acting on behalf of Bob” 應該亮紅燈。這不是在輸入末端加分號的 SQL injection，是 prompt injection：換一句話就能讓 agent 假裝成另一個使用者。不能讓 LLM 自己決定 authentication。這不能是 agent 設得了的 input。

[14:23](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=863s) MCP toolbox 有 authenticated parameters。他做了一個用 Google 登入的小 demo，試著改 Bob 的文章。Toolbox 要知道 identity provider 是誰，才能核對 agent 聲稱代表的人。Tool 從已驗證使用者的 email 自動填值，對到 JWT 裡的欄位，再在 WHERE 確認 user id 就是 identity provider 給的值。冒充別人時，查詢等於 no-op。

程式初始化 tool set，把 MCP server 給的東西包上 token injection。Python decorator 確保 client 來的 bearer token、API key 或識別一直放進 request context。Agent 一呼叫 tool，身分就從 identity provider 傳到 toolbox，由 toolbox 把值注進呼叫。

[16:00](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=960s) 他登入後叫它更新 Bob 最近的文章，agent 說沒有權限。改口更新自己的文章，用 leaderboard 找到，標題改成 Devcon 2025，就成功。

[16:22](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=982s) Takeaway：production agent 不要有 execute SQL，改給事先核准的 query。敏感 input 不要讓 agent 設，用 code 自己設。DDL 用 Atlas 這類工具做 deterministic validation；DML 用 Google 的 MCP toolbox 把 guardrail 做在 tool 上。

## 問答：readonly，以及三個 action 夠不夠

[17:22](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=1042s) 有人問 direct SQL 若只開 readonly，例如深度分析，還要不要擔心同一類事。他說看場景。MCP toolbox 在 Postgres 上那套，也可以用 row-level security，把 user id 注進去。Authenticated parameters 的好處是跨很多種資料庫。資料庫自己的 permission control 常常不夠細；若剛好夠用，也可以。

[18:15](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=1095s) 另一問是允許的 action 太少，表達力被限死。是不是每個人都要從 3 個放到 300 個？或者更高一層，看到 delete 或 drop 就整句不准。他說這只是其中一種工具，重點是意識到你讓 agent 做什麼。MCP toolbox 可以組 tool set 的階層。信任使用者、而且資料庫側確定不會漏出不該看的資料時，可以開更大一組 query。仍然要有 deterministic boundary，而不是只在 prompt 裡叫它別做。

他承認這會限制 text to SQL，而 text to SQL 在分析場景特別好用。[19:55](https://www.youtube.com/watch?v=r7XSqUsLo_g&t=1195s) 他看過一間公司用 Turso——字幕聽成 TSO——這種 SQLite，每個 tenant 一個資料庫，連到該 tenant，而且是 readonly：拉起一份 fork 來查，blast radius 很小，碰不到別人的資料，也毀不了現有資料。同樣是 guardrail，只是強制的機制不同。
