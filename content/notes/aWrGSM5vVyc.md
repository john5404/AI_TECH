# Shachar Azriel - Executable Specs: Building a Verification Layer for Agentic Coding - AI DevCon 2026

Shachar Azriel，Baz 的 VP of Product，人在 Tel Aviv。AI DevCon 2026。片長 30 分 39 秒，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=aWrGSM5vVyc)

## 一句話

2026 年最好的 coding agent 仍讓 code review 變成瓶頸，因為它們會寫功能，卻不會把 spec 抽完、再對著已經部署的功能核對。Shachar 和 CTO 做的 Spec Reviewer 把這件事拆開：一個 planner 抽需求，很多小 agent 平行驗證，而且要看 base branch 的 code，不能只看 diff。未知的 preview URL 放進 AWS Agent Core 的暫時 sandbox，不在放著客戶資料的環境裡點。

## PR 變多，速度反而變慢

[0:25](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=25s) 他問：為什麼 AI code review 和 code review 仍是工程團隊的瓶頸。他做產品十年，Baz 要做市場上最精準的 AI code review agent。不在辦公室就在海上衝浪。幾週前從 Tel Aviv 飛倫敦看起來機會很低。公司要在 San Francisco 開據點。

[1:55](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=115s) 他每週見幾十個團隊，從 5 到 10 人的新創，到 1000、2000 個開發者的企業。用的是最好的 coding agent、最貴的 model，人還是得審 code。工程經理說等待 merge 的 PR 變成五倍或三倍，速度變慢而不是變快。重複出現的主題是信任：人不相信 agent 能把回饋迴圈關起來。使用者說 agent 多次忽略 spec 的大部分，做出來的功能也不是他們要的樣子。

[4:05](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=245s) 他自己的 sprint ticket：讓客戶接上工單系統，Jira、Linear，以及較少人用的 Fibery，字幕寫成 fiber。要加進 Baz 的 onboarding，字幕把 Baz 聽成 bus。他附上一次舊整合的錄影，當時 Continue 按鈕蓋住新加的整合，要求這次不要再犯。幾天後開發者在 Slack 丟 preview 連結。按鈕就在他明確說不要放的位置。他說這麼簡單的前端都會錯，複雜任務只會更糟。

[6:11](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=371s) 現在很容易做出東西，但 coding agent 的重心是生成功能，不是把寫好的 spec 全部抽出來，也不是驗證功能本身。驗證功能不是拿 code 比 code。有 preview、staging、資料庫、以及其他接在一起的功能時，要把功能部署上去看它長什麼樣子。好消息是 spec 已經在，不必再造一份沒人有的資料。

## 一個 session 會爆，所以拆開、再平行

[7:25](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=445s) 他和 CTO 畫的架構叫 Spec Reviewer。它讀工單系統裡的 spec，可以是 Jira、Linear、Monday、Notion 或 GitHub；讀設計裡的視覺素材；也讀 staging 或 preview 上已經部署的功能。它要抽出每一條需求，逐條看有沒有真的做。他想的是 agent 在產品裡切換角色、點下去、試不同案例。

[8:35](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=515s) 他已經在寫 code，就問 Claude 能不能做。他說太太這樣回他會很高興，Claude 這樣回他就該擔心。按下之後 context window 爆掉。一個 agent 同時拿 ticket、spec、設計，再去驗證，session 會垮。他認為這也是 coding agent 不做這件事的原因之一。

[9:49](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=589s) 解法是拆成兩個 agent，他也覺得這是其他 agent 任務能用的做法。Planner 只做一件事：從 spec 抽出需求，並想驗證時要看哪些失敗案例。Verification agent 再去走檔案、UI、設計，看 planner 給的 spec 有沒有被滿足。Session 不再垮，結果卻很差。Ticket 有 10 或 12 條需求，有時流程有 20 條，agent 穩定地跳過其中一些。抽出來的需求和驗證品質也不穩。拆成兩個之後，單一 agent 的 context 還是太多。

[11:34](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=694s) 他這場只放一張圖。Verification agent 拿 planner 的失敗情境，從第一條需求走進檔案、測 UI、下判斷，再做下一條。到第五或第六條，前面大量 context 已經和這條無關，agent 變笨。所以每條子需求交給不同的 agent。不要一個 agent 依序查 10、12 或 15 條，改成 12 或 15 個 agent 平行跑，各自給一個 verdict，最後由 orchestrator 收齊。字幕把 sub-agent 寫成 subvariants。

## 只給 spec，agent 會發明沒人要的需求

[13:13](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=793s) 下一個問題是 context 的品質。Agent 開始發明沒人要求的需求。早期一份 Spec Reviewer 報告裡，它決定要加一個新的 responder command，也要求維持向後相容。產品經理和設計這張票的 CTO 都沒寫這兩條。原因是只給了 spec。Agent 知道目標和當下的 intent，卻沒有用 code 落地，就不接現實。Spec 是這次任務的快照，code 才是把它按在現實上的東西。

[14:35](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=875s) 兩個改法。給 base branch 和改動前的 code，不要給 diff。Diff 會偏向工程師已經選的解法；改動前的 code 讓 agent 對那個解法更開放，也更挑剔。再來是把審查範圍收窄。審前端功能就不必擔心後端問題，否則只是噪音。做到這裡，session 在跑，需求抽得出來，驗證也開始像样。

## 未知的 preview，不要在自己的桶子裡點

[15:39](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=939s) 要上線時，客戶得把 Baz 接到自己的 preview。那表示要開很多未知 URL，像一個月點一百次簡訊或 email 裡的釣魚連結。他們的 agent 坐在 S3 bucket 上，裡面是 code、資料、客戶資料，以及 OpenAI 的 credential，字幕聽成 Cardinals。不能在那裡跑任意 code。

[16:33](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=993s) 這是他們自己的做法，別的做法也可以。碰到資安能力這種危險區，他寧可買第三方，不要自己做。他說現在很多人用 coding agent 在 vibe coding，這套隔離沒有改變驗證結果，只是把開發工具公司不想自己扛的事交出去。他們用 AWS Agent Core，每一條正在驗證的需求開一個 ephemeral sandbox，裡面有 browser session，對著 preview 查那個功能，再把 verdict 送回雲上的 agent。

[17:51](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1071s) 他等了將近六個月。畫面上是 agent session，不是人，在走他們的 UI：看 dashboard 的資料是否完整、找整合並試著啟用、走 Stripe 訂閱（這步有時會壞，他說產品經理最挫折的就是有人要付錢卻付不成）、用 Google 帳號做 onboarding。每個 PR 跑幾十次，用來對每個功能、做回歸，並確認功能真的如描述。

[19:02](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1142s) 想自己做的話，三點。2026 年 context engineering 仍然難。Context window 很大、token 很多，看起來容易，但 coding agent 盒子外的任務需要大量 context engineering：規劃和執行分開，每件任務再分給多個 agent。第二，spec 和 code 就夠，合在一起是金礦，不必再造別的資源。第三，SDLC 或架構裡的高風險區，用已經被證明的第三方工具。他另外說，看 Twitter 會覺得打不贏 Anthropic、Cursor、Codex，但大公司會漏掉真實團隊要的裂縫。Spec Reviewer 就是對準 coding agent 沒補上的痛。

## 關鍵流程、以及為什麼不先生成幾百個測試

[22:01](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1321s) 第一版只確認 spec 裡的東西真的做了，例如顏色、解析度、各種狀態。客戶接著要求一組不能壞的關鍵流程。他舉訂閱：看過一段螢幕錄影，客戶要訂 100 個座位，沒成功，然後離開產品。他說這種事每個 PR 都要查。

[23:44](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1424s) 有人問兩種做法怎麼選：開一個 agent session，用例如 Playwright MCP 對著 spec 走產品；或先寫測試情境，讓 agent 寫成腳本，提交進 codebase 再跑。他對測試的不滿是它們測的不是真實生活，團隊會想出不會發生的情境。AI 工具可以生成 100、200、500 個 unit test，最後仍漏掉那個沒想到的情境。他們要的是已經存在的 spec。副作用是：人知道 spec 會被 agent 拿去驗證功能，就會把 spec 寫得更好。他比成可再生能源。若測試已經是答案，就沒有這件事的空間。

[26:15](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1575s) 抽需求和驗證用不同 model，OpenAI 和 Anthropic 都有。抽需求用重的 model，因為人寫 spec 不一致：有人寫「早餐談過，這是截圖，祝你好運」，有人寫很長。要一個能把真正需求接地的大 model。驗證用小 agent，只要走到對的畫面，看顏色、解析度、點擊成不成功。探索性測試他不掃整個產品。Token 和 agent workflow 放在最要緊的 1% 或 5%，其餘可以用靜態測試看 code。他不願為了驗證每一處花上萬美元。

[29:37](https://www.youtube.com/watch?v=aWrGSM5vVyc&t=1777s) 最後有人問兩件事：怎麼確定 agent 沒有中途丟掉 spec，以及只顧 spec 和核心流程、不管生成出的 spaghetti code，下次改功能或修 bug 會不會進入惡性循環。他說只剩三秒，可以會後再談。字幕沒有他的回答。
