# Your Coding Agent Deletes Its Memory After 30 Days

片長 9 分 25 秒，英文手寫字幕。這支片把倫敦 AI DevCon 的幾段話剪在一起。中間有幾段沒被摘到，下面不補。有些專有名詞字幕不穩，不改成沒說清楚的產品名。

- 原片：[YouTube](https://www.youtube.com/watch?v=Xn7gXeNtoZI)

## 一句話

Agent 解決了一件難事，session 結束就沒了，明天再犯一次。`AGENTS.md` 和 `CLAUDE.md` 會被整份載進 context，提供商看得到。Claude Code 和 Codex 把 session 留 30 天然後刪掉。你付了那些思考的錢，然後把 transcript 扔掉。

## 規則和記憶還是本地的一坨

[0:00](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=0s) 六月倫敦很多人在繞同一個挫折：agent 解了一件難的，session 結束就消失，明天再犯同樣的錯。

[0:11](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=11s) 先是 Mozilla.ai 的 Davide Eynard 和 Peter Wilson。他們在做的東西，自己描述成給 agents 的 Stack Overflow。有一段是叫 Claude 審計自己的 memory 檔。旁白說光這段就值回票價。

[0:26](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=26s) 有人會說已經有 `AGENTS.md` 和 `CLAUDE.md`，加規則就解決了。或者說現在有 memories 了。問題是這些存在本地。你最後把一切放進一個 `CLAUDE.md`。可以有全域的和專案的，但那些都得載進 context，也就是說 Anthropic 和同類的人看得到你的 context。你 maybe 不想把那些送上去。Memories 他覺得本意是想比規則更好。這句之後摘錄跳到下一個人。

[2:44](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=164s) Robert Overweg 用硬的方式做組織記憶：將近 1200 個研究檔，大多沒有結構。後來他說這將近 1200 個檔的設置，可以應付這些事，不必再加別的東西。中間的做法摘錄沒蓋到。

[5:24](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=324s) 第二個 primitive 是 diary。他需要一個名字，diary 適合描述：工作和工作裡的教訓不再是用完即丟的地方。它也是第一個可以放會輪替的存取邊界的地方。例如團隊共用的 diary、純粹個人的工作風格和偏好、範圍在 repository 或專案的。這是你第一個能定義那些政策的點。

## 三十天後 session 被刪掉

[7:08](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=428s) Coding agent 把 session 留 30 天然後刪除。你為那些思考付了錢，然後把 transcript 扔掉。他說大家都在用 AI。Claude Code 會存 session。Codex 在你的機器上搜 session，30 天後刪除。他走完那些他比喻成寶可夢導航的基礎設施和學習之後，因為他用 Claude Code 當 harness，那些 session 也在機器上。價值卻在流失，因為大家往下五小時、下一個窗口、下一天、下一個月走，再付下一個 200 美元。他猜對方付了 180 英鎊。意思是我們在租 token，然後沒有留下產出。這裡有很多機會。

[8:08](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=488s) 那些寶可夢變成他叫 super agent 的東西。他說講出來很好笑。也叫 sweeper agent，它掃 codebase。去年夏天他用 vibe coding 交出一批 code，之後再也沒碰，有很多垃圾 code。若走進去 lint、大量修呢？或開十個平行 agents 寫文件、做 context？它用分開的 VM。每個 VM 有一段 tape session 被錄下來。於是有十段 tape，可以用來生成 skills、文件和 context。他說還會講到微調模型，但這是大量資料。若你在企業裡為這些付錢，就該把價值抽出來。

[9:07](https://www.youtube.com/watch?v=Xn7gXeNtoZI&t=547s) 片尾約十一月紐約的 AI DevCon，網站是 ainativedev.io。
