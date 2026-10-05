# Aidan Cunniffe - Tracking AI generated code with Git | DevCon Fall 2025

Aidan Cunniffe 在 DevCon Fall 2025 的演講，人在 Brooklyn。片長 19 分 33 秒，英文自動字幕。字幕把名字聽成 Aiden Knife、Aenk Kniff，把 Git AI 聽成 get AI、Gitai。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=irK4G2SzhpA)

## 一句話

Agent 儀表板說這週生成了 45,000 行，GitHub 上只進了 6,000 行。Aidan 不想再用 AI 去猜哪些是 AI 寫的，所以做了開源的 git extension：Git AI。它用 git notes 把每一行對上產生它的 prompt，merge、rebase、cherry-pick 之後還跟得住。留下的 prompt 也是以後能用的 context。

## 儀表板不可信，所以做成 git extension

[0:09](https://www.youtube.com/watch?v=irK4G2SzhpA&t=9s) 他用 Steve Jobs 的比喻開場：電腦是心靈的腳踏車。人跟腳踏車各自不快，合在一起比動物界任何動物都快。年初 coding agent 出現後，他覺得機會很大，卻不知道怎麼一邊騎車一邊同時顧好幾件事。有時按 enter，兩小時沒進展；有時立刻就成了。

[1:31](https://www.youtube.com/watch?v=irK4G2SzhpA&t=91s) 國慶日煙火的時候他在寫實驗用的 code，想用 agent 的資料讓自己寫得更好。他想知道自己的 code 有多少真的是 AI 寫的、抓到的 bug 是不是沒看就核准的 AI code、後來重寫了多少，以及從 Twitter 抄來的 prompting 哪些真的有用。

[2:10](https://www.youtube.com/watch?v=irK4G2SzhpA&t=130s) 各家 dashboard 說這週生成 45,000 行，GitHub 上只有 6,000 行進得去。他不確定是為了生意灌水，還是技術上本來就難算。用 AI 去偵測 AI code，他覺得像以火攻火，而且很貴。他一度想重寫 git，後來改成寫 git extension。

## Git notes 記的是行，也是 prompt

[3:02](https://www.youtube.com/watch?v=irK4G2SzhpA&t=182s) Git AI 裝在自己的電腦上。Agent 寫 code 時，它把那些行標成 AI 產生的，然後在 merge、rebase、cherry-pick 這些會弄亂 commit 和 diff 的流程裡保住 authorship。

[3:36](https://www.youtube.com/watch?v=irK4G2SzhpA&t=216s) 示範用的就是 Git AI 自己的 repo。他在 Cursor 裡用 Composer 請它寫一個偵測 WSL 的 helper，再正常 commit。工具回報那段 code 100% 由 AI 寫成，並用一條長條圖比較人寫和 AI 寫的比例。`git ai blame` 打開檔案後，上面是 Aidan 和 Sasha 的行，底下是 Cursor 的行。

[4:55](https://www.youtube.com/watch?v=irK4G2SzhpA&t=295s) 做法是給每個 commit 掛 git notes。Notes 不只標哪些行是 AI 寫的，還把那些行對上產生它們的 prompt。他舉的那個 commit 裡，某個檔案的第 52 到 91 行來自某一次 prompt。因為寫在 git notes 裡，協作者拉下去也能看到。

[5:53](https://www.youtube.com/watch?v=irK4G2SzhpA&t=353s) 他們在跟 Cursor 以及其他 agent 團隊整合。字幕點到 Claude Code、Copilot，還有一些較小的工具。有的用 hooks，有的直接回報哪些行是 AI 寫的。Git AI 負責寫進 notes、跟 upstream 同步，並在 reset、rebase、merge、cherry-pick 時把 notes 改寫正確。

[6:54](https://www.youtube.com/watch?v=irK4G2SzhpA&t=414s) 專案要開源，也要 multi-agent。採用的公司常常同時用兩到五個 agent，有的是吃到飽，有的自己做。他要同一種資料、同一種視圖。他們選擇 explicit：不去猜，而是去敲做 agent 的人的門，做成社群標準。它是 git native，不必為了追 AI code、存 prompt 就改掉每天在用的 git。

## 人變聰明，agent 也變聰明

[8:01](https://www.youtube.com/watch?v=irK4G2SzhpA&t=481s) 對他和早期使用者，價值是看 ROI 從哪個 agent、哪種 code、哪種語言來，以及哪個團隊用得比較好。工具很貴，這件事就重要。Code review 也會不一樣：知道是 AI 還是人寫的，審查方式就不同。他跑過 blame 之後才懂某段 code 為什麼長那樣，因為看得到 prompt 和 intent。

[9:00](https://www.youtube.com/watch?v=irK4G2SzhpA&t=540s) Prompting 以前靠猜、靠最新一則推文。他從一次打十頁再按 enter，改成跟它當 companion 迭代。往前看要做兩件事：讓 agent 更聰明，也讓人更聰明。他相信平均的 model 配上更好的 context，會打敗很強但 context 很差的 model。開發者整天在寫 prompt，丟掉很可惜。好好存下來給以後的 prompt 用，他覺得 agent 可以再聰明 10、20、30 個 IQ。這部分還很實驗。另一面是：會用 coding agent、拿著平均 model 的工程師，會贏過不會用、卻拿著很強 model 的人。

[11:17](https://www.youtube.com/watch?v=irK4G2SzhpA&t=677s) 問答裡，prompt 若是一大包 context 和指令，messages 和 tool calls 會收，writes 不收，因為那些最後都會進 git；tool results 也不收，裡面可能有不想分享的資訊。拿掉之後通常很小，目前沒有硬上限。`git ai blame` 目前只在本地。資料在 notes 裡，其他工具也能用，但不會一夜之間發生。雲端 agent 他覺得可以用作者 email 對回去，例如 Codex at OpenAI、Gemini at Google；很多 code 還是會拉回本地再改。他們有 mixed authorship：AI 寫了、人又改了。

[14:03](https://www.youtube.com/watch?v=irK4G2SzhpA&t=843s) 人重寫 AI code 的比例，他說文章快來了。粗略經驗是大段 one-shot prompt 時後來重寫很多；改成一次一個 function 或一個 test 之後降下來，大約從 60% 到一週或兩週後接近 20%。Codex 當時還在等 hooks。他堅持不猜哪段來自 AI，所以普及會慢：一個月前幾乎沒支援，現在多很多。若各家自己做標準，他賭資料會留在任何單一 agent 外面，因為大家想互相比。現場有人希望 coding agent 有一套標準 telemetry，字幕後面接的對照沒聽清。
