# Wayve's Dave Kirk: Why Agentic Code Review Needs Evals

Dave Kirk 談 Wayve 怎麼做 agentic PR review。原片約 24 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=qLVbCFGcABU)

## 一句話

Agent 會做你沒叫它做的事。在做自駕車的公司，方向指錯的代價很高。Wayve 沒有把人從 code review 拿掉，而是用依檔案觸發的 prompt、sentiment、有沒有被採用，以及專門的 eval，逼自己用證據改 agent，而不是用 vibes。

## Rocket boots，以及兩天 1,600 的帳單

[0:00](https://www.youtube.com/watch?v=qLVbCFGcABU&t=0s) 同事的比喻是 rocket boots：穿上之後，你最好先確認自己朝對的方向。

[0:27](https://www.youtube.com/watch?v=qLVbCFGcABU&t=27s) Dave Kirk。寫程式 21 年，現場有人寫過 Linden Scripting Language。2015 年起做 DevOps，2024 年加入 Wayve，先做 dev tooling，包含工程師用的 VM。過去六、七個月負責把 agent AI 推進整個組織。這場講他們做 agentic code review 的動機、機制，以及怎麼評價 review 好不好。

[1:37](https://www.youtube.com/watch?v=qLVbCFGcABU&t=97s) 他抱怨業界採用 agent 仍相當 vibes based。他不在乎能接幾個 MCP server、有哪些 tool，若沒信心它會照你要的方式用。高風險環境更不能這樣：一輛兩噸的車從騎車的他旁邊開過。他要 agent 做他預期的決定。

[2:40](https://www.youtube.com/watch?v=qLVbCFGcABU&t=160s) 這來自他用 Claude multi-agent teams 的經驗。頂層 agent 接任務，再派給用 prompt 定義好的其他 agent。可以放著背景跑、真的會把東西做出來，也有很多地方不好。他第一次做這套，就在內部寫文章告誡同事：兩天花了 1,600 英鎊，他也說成 $1,600。典型編制是有人實作 ticket、有人 QA、有人處理 merge conflict。它們一直搞混角色，一直做錯動作。想改進時，他看不出改動有沒有幫助，多加一層 agent 對結果是好是壞也不知道。他做了 dashboard，自己也迭代過兩版 multi-agent software development factory。結論是 observability 關鍵。連單一 agent 都觀察不了，就很難做出可靠、能上 production 的 workflow。Agent 不可靠，而且 stochastic。

[4:45](https://www.youtube.com/watch?v=qLVbCFGcABU&t=285s) Alignment 有兩層：它有沒有做你交代的事，以及你交代的是不是你真正要的。讀到一篇文章，說某個 MCP endpoint 能讓全組織的 agent 共享 memory，那對結果有幫助，還是只在燒 token？人有 confirmation bias。做 agent 專案的人，很有動機相信自己的改動正在讓它變好。成熟的採用，是要搞懂它們的行為。

## 公開 benchmark 不夠，自駕車的 review 要能被轉向

[5:52](https://www.youtube.com/watch?v=qLVbCFGcABU&t=352s) Wayve 做自駕車。他們不是要把人拉出 code review，而是延伸人的能力：補人漏掉的地方，抓明顯的，也抓人會漏的複雜問題。更重要的是，用這次 review 的結果數據把流程改好。這也是一個 trailblazer，要當組織裡其他 agent workflow 的 feedback loop 範例。他們考慮過現成方案。

[6:53](https://www.youtube.com/watch?v=qLVbCFGcABU&t=413s) Agent 變好之後，公開 benchmark 愈來愈難認真相信，內容也不見得像他的 codebase。他引用 Cursor 的文章：把 Opus 4.8 Max 放進一個大力限制它作弊的 harness，就找出很多作弊方式；擋掉那些明顯作弊之後，成績大幅下降。從 4.6 Max 到 4.8 Max，這份 benchmark 上的多數進步，是 agent 學會作弊得更好。厲害，但不是他要的。

[7:56](https://www.youtube.com/watch?v=qLVbCFGcABU&t=476s) 另一個優先是 steerability。他請 agent 建議怎麼簡化、改好分支上的 code，每次都有意見，他會懷疑 Claude 在扯。回饋若永遠在，很多不會好，人就學會不讀。要很高的 signal to noise。Token 也貴。Codebase 很雜：robotics、ML、data scientist、full stack、DevOps，很多實作很 domain specific。所以轉向是依改了哪些 code 來做。

## 依檔案扇出，一個 prompt 一個 agent

[9:01](https://www.youtube.com/watch?v=qLVbCFGcABU&t=541s) 員工自己寫 prompt，引導 agent 留什麼回饋。哪些檔案改了，就留對應的回饋。一個 prompt 跑一個 agent。PR 打開且仍是 draft 時跑，從 draft 轉狀態時再跑。他口頭把那個狀態說成 “not ready for review”。不在每次 push 都跑，不然 Series D 的錢會燒很快。

GitHub Action 先決定要跑哪些 prompt，再 fan out。一支共同的 skill 規定回饋怎麼留，然後把各別 prompt 注進給 agent 的 prompt。留下回饋，再報 metrics。

[10:14](https://www.youtube.com/watch?v=qLVbCFGcABU&t=614s) 範例很淺，但做法能做有趣的事。Prompt 頂部在 A/B test 不同的 reasoning 或 effort。他們的基礎設施有怪癖：改到某些部分，Terraform apply 必須跑在對的地方，agent 就會在 PR 上提醒。底部選擇哪些檔案會觸發，也可以設跑的百分比。常被改的區域可以把機率調低，邊收集這個 prompt 好不好的數據，邊減少噪音。

## Sentiment 會上升，但上升不等於有用

[11:14](https://www.youtube.com/watch?v=qLVbCFGcABU&t=674s) Feedback loop 是要改 prompt，也要找出：給了這個 prompt 之後，agent 反覆犯、以後可以擋住的錯。做法是 thumbs up、thumbs down，也可以留言。Merge 之後另有一個 agent，逐條看回饋有沒有真的被用到。於是同時有「人覺得好不好」和「有沒有被採用」。資料夠了，就踢一支 skill 去看這些回饋、抽共同主題、改 prompt。還早，但他看到 sentiment 和 usage 兩條線都在往上。至少，這套會讓線往上。

[13:09](https://www.youtube.com/watch?v=qLVbCFGcABU&t=789s) 他想過拿 baseline：叫 GPT-5.3 Codex「把這張 PR 改好」。有些認真寫的 prompt 確實明顯更好。難的是 baseline 也會給出人喜歡的回饋。Sentiment 開始露出限制：喜不喜歡，不等於有沒有用，也不等於抓到人會漏的東西。把複雜的事壓成一個數字，會失真。

[14:09](https://www.youtube.com/watch?v=qLVbCFGcABU&t=849s) 他們還分模式：GitHub PR 第一頁的 top-level comment，對上某一行的 inline。整體差不多，但有的 prompt 人更喜歡其中一種。有個 prompt 的 inline sentiment 明顯好過 top-level。那個「這檔案改了就提醒你」的 prompt 不需要 extra high effort。資安工程師寫來抓 PR 安全問題的，就要 extra high。他覺得有趣的是：GPT-5.3 Codex 的 medium effort——他們現在換成 GPT-5.6——被採用的次數更多，即使 extra high 的 sentiment 更好。他能試著下結論，但承認需要更多資料。Pull request 的回饋是複雜、細緻、質性的問題。這份努力的主要結論是：這很難，必須在 eval 和 metrics 上用力，才有信心它們做得好。

[16:13](https://www.youtube.com/watch?v=qLVbCFGcABU&t=973s) Sentiment 不夠。Heuristic 只告訴你人喜歡，有用，但不夠。

[16:40](https://www.youtube.com/watch?v=qLVbCFGcABU&t=1000s) 他很興奮的一件事，是用 agent 評估另一個 agent 的回饋有沒有被用。投影片上是 Watchmen：誰來看著 Watchmen？他的答案是 script、test，以及 evals。他做了一批合成例子，也抓了真實 PR 和人手留的回饋，大約看了 50 例，還想要更多，但沒有無限時間。沒料到的是他做成 eval driven development：先有 eval，才寫那個評估用的 agent。Eval 抓到他 prompt 裡的問題，那些問題會讓評估 agent 做錯。這讓他相信抽出來的資訊是真的。改這個 agent 時，CI 會拿 evals 跑，確認沒有變差。

[18:13](https://www.youtube.com/watch?v=qLVbCFGcABU&t=1093s) 收束：要很多 heuristic、很多資訊，不能把複雜問題假裝成簡單問題。每個 metric 有自己的真話和謊話，要疊在一起才看得到較完整的圖。Multi-agent pipeline 做得到，但難，要用力，而且要用 scientific method 離開 vibes。他的家徽玩笑是：Lack of data leads to vibes. Vibes leads to trouble. 愈早把這種做法做成組織的文化愈好，不然就是燒 token 和混亂。

## 問答：舊 codebase、sentiment 的品質、稽核

[19:39](https://www.youtube.com/watch?v=qLVbCFGcABU&t=1179s) 有人問這是新 codebase，還是人就是知識庫的百年老碼。他說是長期維護的 codebase。Sentiment 是使用者對 agent 留下的回饋再做回饋：開 PR，agent 看 diff 給意見，人標好或壞。他們不是要把 domain expert 移開。他們要專家說「你這裡錯了，錯在哪」，然後把那件事寫進去，下次不必再處理同一個問題。

[21:41](https://www.youtube.com/watch?v=qLVbCFGcABU&t=1301s) 下一個問題是：sentiment 會不會拿去改 prompt？又怎麼客觀判斷這些 sentiment 本身品質好不好？會不會只是大家想讓日子好過，不希望 agent 批評自己做的東西？他說這個問題很好，而他們並沒有做到那種客觀判斷，也很難。這就是為什麼不能只靠 sentiment 一個 metric，它有自己的隱含缺陷。

[22:47](https://www.youtube.com/watch?v=qLVbCFGcABU&t=1367s) 有人問決策點很多，之後若要合規，有沒有 audit trail。Agent 的 log 在 Actions log 裡，留下的回饋在 GitHub comments。他老實說這不夠。他們正在接 LLM gateway，因為他要稽核、記錄每一次 turn、每一個 action。主持人說 Dave 會留下來，後面還有兩場，下一場是 Amy。
