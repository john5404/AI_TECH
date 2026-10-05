# Sneha Tuli: AI assisted code reviews  Quality and Security at Scale | DevCon Fall 2025

片長 22 分 32 秒，英文自動字幕。DevCon Fall 2025。講者是 Microsoft 的 principal product manager Sneha Tuli；字幕有幾次把名字聽成 Snehar。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=-aVBe6SlPTw)

## 一句話

Code 生得愈快，review 愈是瓶頸。她在 Microsoft 把 AI assisted code review 從 2023 年的小範圍 proof of concept，推到覆蓋公司九成以上的 pull requests。有用的不是再堆一個新介面，而是留在 PR thread 裡、語氣像同事、先用小模型擋掉噪音，並且讓人決定要不要接受。

## 九成 PR，人只看該看的那一成到兩成

[0:09](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=9s) 開場先把規模放上桌：超過 10 萬名 engineers、product managers 和 designers，每個月超過 80 萬張被建立、被 review 的 PR，15 萬個 repositories。各 team 的 conventions、best practices、frameworks、甚至 security requirements 都不一樣。在這個尺度上守 quality 和 security 是很大的事。

壓力是讓人又快又好地 ship。快不只是寫得快，review 也得快，而且不能把品質和安全放掉。現實是 PR 常常卡住，等第一輪 review 不是幾小時就是幾天。Reviewer 也未必想逐行鑽進別人的 code。換 team，review 習慣就不一致。時程一緊，明顯或不明顯的 critical issues 會進 production。

[3:03](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=183s) 假設是：例行檢查交給 AI，reviewer 只花力氣在真正需要專業的那 10% 到 20%。測完之後，今天公司裡超過 90% 的 pull requests 會經過這套 review，影響超過 95% 的 developers。不同實驗裡，PR completion time 改善 10% 到 20%，usefulness rating 在 50% 到 60%。被接受的 suggestions 是成百上千，省下的是數千小時。

做出來的三件事都掛在 PR 上。[4:02](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=242s) PR 一建立，先留一份高層摘要：這張 PR 在做什麼、關鍵改動是什麼，讓 reviewer 還沒看 diff 就知道自己要進什麼。接著 AI 立刻看內容，若有建議，comment 對準變更的那幾行，並給出怎麼改。最後是 PR thread 上的互動問答，例如這個 method 可以嗎、有沒有更好的做法。人和人怎麼在 thread 上說話，這裡也一樣，是同一個協作空間。

## Prompt 的小改會把 usefulness 拉開

[5:01](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=301s) 2023 年 AI 才剛開始，他們不知道影響會是什麼，所以從一些 repositories 小心做起。Roll out 之前就先做 feedback：thumbs up、thumbs down、逐字回饋，再加上他們自己想出來、用來估 suggestion acceptance rate 的辦法。逐字回饋整批送給 LLM，先看哪裡有用、哪裡要改。

Prompt 要夠清楚，不能複雜到 model 搞混，也不能短到它開始假設。真正有用的是 prompt version control：prompt 要版控，並跟著 usefulness 一起看。小改可以差很多。早期 comments 很囉嗦，得往下捲才看到建議到底是什麼。她說「得捲」是誇張，但意思在。Prompt 改成請它清楚、精準，usefulness 上升 5%。另一個方向他們以為開發者會喜歡：看到 high severity 就標成 critical。結果 usefulness 下降，因為 AI 只評論高嚴重度，不再給整張圖。那是他們的 miss，於是 revert。

## 要像人留 comment，不要像系統丟一塊

[7:08](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=428s) 訊號轉正之後，先開到公司 5% 的 PR。一開始為了不要洗版，所有建議合成一則 comment。開發者不要這個。他們要像人：會在某一行或某一段 diff 上留言，不會留一整塊。A/B testing 裡 usefulness rating 差了 20%。他們改成嵌進既有的 workflow。她說開發者要的是接上現在的經驗，不是另一套全新體驗。

建議好不好是一回事，接進去難不難是另一回事。開發者不想看完 comment、回 IDE 改、再回來。他們做了 apply change：在 PR 上直接開一個新的 iteration。

[8:34](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=514s) 她最喜歡的一段回饋是用詞。開發者說 AI 在「要求」我改，而且改錯了。她特別點出 asking 這個字：沒有人說它是在 suggesting。回頭看 comments，AI 有時太 assertive，會寫「這會因為某某原因失敗」。Prompt 改成鼓勵、支持的語氣，建議變成「這可能有問題，這樣做會更好」。Acceptance 上升，因為開發者把它看成 buddy，而不是挑錯的人。

信任是賺來的。早期 comments 太多，像在洗版。他們用過去的 reviews 訓練一個自己 host 的 small language model。PR 一建立，diffs 先過這個 SLM。成本降下來，而且只有重要、有風險的 diffs 才送到 LLM，噪音明顯變少。信任起來之後，才把門檻降到各 team 想要的風險程度。

## 每一個 codebase 都不一樣

[10:00](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=600s) 系統已經嵌進 PR loop、也有了信任，另一半問題才開始：公司裡那麼多 codebase，一個 method 在這個 team 會因為 performance 被拒絕，另一個 team 則有必須走的 security 步驟。他們讓 team 可以寫 repository-specific instructions，或為自己的 repository 做 custom prompts，review 時會納進去。想要不一樣的經驗，就有地方調，user base 才能擴大。

Context 是老問題。只送 PR 細節，而某個被用到的 method AI 根本不知道定義，review 就會無關。他們用 semantic search 和 GraphRAG 補；字幕把 GraphRAG 聽成 graph rack。她說到現在還在做，什麼樣的 context 對 LLM 才是一場最好的 review，還沒有定論。

[11:25](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=685s) Review agent 之外加了 critic agent。與其一股腦把指令塞進 review agent，不如讓 review agent 先出建議，critic 再看這些建議是不是真的對在這張 PR 改過的行上。LLM 有時會對開發者沒改的地方給 recommendations，開發者不要那個。Review 加 critic 對他們有用。語言也有差，包含 C++ 和檔案類型，所以又做了 language-specific agents，把該語言真正要的 best practices 放進去。

A/B testing 不再是產品的 good to have，而是 core capability。新 model 出來，不能直接換進產品、改掉整個使用經驗。要先驗證它是不是真的有顯著差別。也許只是邊際，也許一樣。

## 人決定收不收，模型只負責建議

[13:05](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=785s) 產品能跨公司擴、品質也還可以之後，security 從一開始就有 guardrails。流程要抓出並忽略惡意指令，避免 prompt injection。credentials 這類不安全或敏感的輸出不能出現。異常時有 emergency brake：立刻 rollback、關掉，必要時回到純人工 review。字幕把 brake 聽成 break。

Human in the loop 是原則。AI 可以建議，值不值得接受是人的決定。跟人類 review 一樣，comment 留下之後，developer 可以接受、駁回或爭論。任何 AI suggestion 都要標明來自 AI。Review 它的人要負責，接受前得用自己的判斷。

她收斂成四件對他們真的有用的事：跟著使用者回饋走、讓 team 能自訂、透明、嵌進既有 workflow。

[14:48](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=888s) 往前看，她預期會有一個 planner：診斷、再決定下一步。API 更新要有 authorization 和 authentication；複雜的 business logic 要有對的 unit tests 和 integration tests；dependency 更新要看 downstream compatibility。Review 得看更深一層。

更多 context 不保證更好的決定，AI 會搞混。Agent 得自己判斷這次該看什麼：有時是先前的 commits，有時是文件。要做到這一點，得用安全的方式給對的 tools：要拉歷史 PR 就有那個 tool，要拉 unit test 檔也有。

Memory 是下一層。某個 team 反覆駁回同一類建議，就該進它的 best practice 或 knowledge base：這種建議不要再給這個 team。Production 出了 defect，要回灌進 review，讓它不要再發生。透明則是把推理講出來。例如要求加 validation，並指出過去哪張 PR 加了它才避開 injection attacks，開發者就比較願意接受。

她用咖啡收尾：AI 以後也許會幫人排 coffee break，但今天要喝 espresso 還是 latte，決定在自己。AI 是來增強經驗。要給對的 context 才有好的輸出。它可以說這個 method 比較好，是不是真的比較好，仍是人的決定。

## 問答：這是內部的，Copilot 是另一套

[17:56](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=1076s) 有人問最新的 Copilot 裡有沒有這個 agent。她說這是內部學到的，那些學習影響了 GitHub Copilot code review。GitHub 有 code review 服務，跟這套略有不同；內部這套有更多他們自己 codebase 的 context。Copilot 的 code review 經驗裡確實有。

另一問把稍早的「5% 的公司 PR」聽成現況，並問有沒有一個總控、是不是都是內部 codebase。她說對，都是 internal-facing。字幕聽成 internal spacing。控制點就是 pull request 被建立的時候。

[19:05](https://www.youtube.com/watch?v=-aVBe6SlPTw&t=1145s) 接著三個問題裡，字幕清楚的是兩件。不同 LLM 審同一段 code 結果會不一樣，品質怎麼量；monorepo 和公司裡分散的 repos、有相依的 microservices，缺的是整體畫面，怎麼解。

Monorepo 她先答：不只 repository，每個 branch、甚至每個 folder 都可以寫自己的 instructions 和 best practices。Monorepo 裡各 team 本來就有內部做法。他們有兩個 monorepo 在大量用這個能力。Usefulness 則持續看開發者的投票，也用自己的辦法估有多少百分比被接受。模型比較她點名 o3-mini、o3 和 GPT-4，字幕把 o3 聽成 03。他們按語言、按模型看這些指標，當下哪個最好就用哪個。她希望以後的模型不會再那麼不一致。

線上有一則接前一場 Neil 的想法：把 code review agent 和 fitness function 合在一起，例如抓到依賴了不對的 API，就從 enterprise catalog 建議更好的。字幕裡沒有她的回答，主持接著結束。
