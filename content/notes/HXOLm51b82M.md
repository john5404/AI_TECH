# How Too Much Information Destroys Agent Performance

片長 20 分 19 秒，英文自動字幕。主持人在 QCon 走廊先碰到 Qodo 的 CEO Friedman（字幕聽成 Freriedman、Kodo），再訪問 OpenHands 的 CEO Robert Brennan。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Claude Code 聽成 cloud code，把 Anthropic 聽成 entropic，把 Snyk 聽成 sneak，把 COBOL 聽成 Cobalt。

- 原片：[YouTube](https://www.youtube.com/watch?v=HXOLm51b82M)

## 一句話

開發者把 coding agent 品質差、會幻覺，很大一部分歸到 context。難的不是多塞資料，而是只留下對的那一份，而且優先順序要清楚。寫 code 的 agent 需要創造力；security 和 code review 需要另一套更結構化的 agent，換個 prompt 不夠。可重複的維護工作則要先拆開、再平行跑，人留在能核對的地方。

## 一個 agent 管全部，還是角色分開

[1:28](https://www.youtube.com/watch?v=HXOLm51b82M&t=88s) Friedman 當天的場次講 multi-agent system：為什麼軟體開發需要它，以及實作時的架構選擇。前半是動機，從 code quality、好 code 壞 code，到整個 software development life cycle 怎麼被蓋到。他還塞進一篇五天前的 Google 論文，內容這段訪問沒有展開。

主持人問，這是多個 agent 並行寫 code，還是不同角色互相看著：一個寫、一個 review。Friedman 說兩種都有。多個 coding agent 可以平行，也可以循序，你得先決定。也可以有不同角色。他舉一個具體摩擦：planning agent 和 coding agent 意見不合時，要不要再加一個 arbiter 來做決定。

[3:58](https://www.youtube.com/watch?v=HXOLm51b82M&t=238s) 有人以為不同 agent 只是換 prompt。那其實仍是一個 agent 管全部，再配不同 tools 和 prompt。另一條路是架構本身就不一樣，做決定的 graph 可以完全不同。

## Coding 要鬆，review 要嚴

[4:31](https://www.youtube.com/watch?v=HXOLm51b82M&t=271s) Coding agent 到目前為止需要被允許發揮創造力。開發者會撞上各種問題，再繞過去。核心由 LLM 做決定，對 coding agent 是好架構。他用字幕裡的 Swedbenge 當例子，語境像 SWE-bench，細節沒被講清。

Security agent 或 code review agent 則要結構化檢查。他說你可以有大約 100 條規則要遵守。那裡仍有 LLM，但 graph 裡 LLM 介入的點可能是 1 到 10 個，整體相當結構化，權限也可以不同。做 enterprise-grade、heavy-duty、brownfield，又要 compliance 和標準化時，這些 agent 必須彼此不同，context 也不同。

[6:12](https://www.youtube.com/watch?v=HXOLm51b82M&t=372s) 他談廠商的 DNA。他理解中的 Anthropic 相信 model 就是一切，要把一切的判斷交給 model，tools 則要夠簡單，甚至臨時給一個簡單工具就好。字幕把那個工具聽成 ASD grap。他覺得這套想法適合 coding agent。

三、四、五個月前很夯的 security review，prompt 常常是「你現在是 security review agent」，後面加一串排除項：不要看 DoS、不要看那個。他認為 security agent 需要的是相反的形狀：先給一份必須嚴格檢查的清單，其餘才允許創造。Coding agent 要把這條放鬆，security agent 要把他們在做的事做一個 one minus。所以 Claude Code 適合當 coding agent，不能只換 prompt 就變成所有類型的 agent，你需要不同的 vendor。

## Context 一多，品質就掉

[8:06](https://www.youtube.com/watch?v=HXOLm51b82M&t=486s) 主持人用 security 和大量 styling rules 問：任務塞到什麼程度，agent 就開始做得很差。Friedman 說 context 極重要。開發者回報，33% 到 80% 的人認為 context 是品質差和幻覺的主要問題，比例看你問哪種技術、怎麼問。這也是他們對 coding agent 的頭號改進要求。

Context 不是只有 codebase。它可以是漏洞資料庫。Qodo 做 code review，會依 stack 投射 best practices 和 rules，並從開發者在 context engine 裡的互動學這些東西。你得去抓對的那一份。

他把 context 放成一條光譜。一頭是太多、又不準。另一頭是剛好只有你需要的。中間可以是很多不相關、但相關的都在。最難的是把對的 context 帶進來，然後確定那裡只有這些，而且優先順序清楚。Security 公司有 coding agent 沒有的安全 context。像 Qodo 這種 code review 方案，有一般 coding agent 沒有的 best practice 和標準。帶進對的，再砍掉太多的。他要人去讀 Anthropic 和其他公司講的 context rot。

[10:14](https://www.youtube.com/watch?v=HXOLm51b82M&t=614s) 怎麼用也有差。他把 context 丟進 Claude Code 或 Cursor，對方常是把 context 一直推進自己的 graph。同一個 prompt、同一份 context 跑七次，會得到七個不同解。別的工具會把同一份 context 放進 workflow，分頭驗證。沒有完全照著 context 走，也和你怎麼建 agent 有關。

## 維護工作：拆開、平行、人留在核對處

[11:04](https://www.youtube.com/watch?v=HXOLm51b82M&t=664s) Robert Brennan 的場次講怎麼用 AI agents 放大 code maintenance。日常做功能，開發者已經習慣在筆電上跟 Claude Code 或 OpenHands CLI 搭配，臨時撿一張 ticket 很合適。真正還能再加一層自動化的，是超可重複的工作：把多個 agent 放到雲上處理。

典型項目是 dependency management、修開源漏洞，以及 Python 2 升到 3、舊版 Java 升到新版、COBOL 遷到 Java。這些雜務不太需要創造力或批判思考，多半是趕行程式，卻又常常大到單一 agent 一次做不完。他說 agent orchestration 可以先想好這類問題怎麼規模化到很多 codebase，自動化走到大約 90%，人留在最後那一小段驗證。

[13:18](https://www.youtube.com/watch?v=HXOLm51b82M&t=798s) 一個 agent 跟另一個說話沒有被什麼擋住，字幕還提到 ADA protocol。OpenHands SDK 走的是單一 framework：不同 system prompts、不同 tools、不同 MCP servers、不同行為，再讓這些 agent 互相協調。

最關鍵的一步是把問題拆成單一 agent 做得出的小塊。這裡最需要人想。可以跟 Claude 這樣的 LLM 一起拆，但什麼解得開、什麼人審得了，還是要靠自己的直覺：交出去之後，你要能很快核對它到底做了沒有。

[14:56](https://www.youtube.com/watch?v=HXOLm51b82M&t=896s) 愈能平行愈好。一個客戶每天要處理數千則新的 CVE，codebase 很大。他們平行派出 agent 去解。若一則一則做會沒完沒了。平行還有另一個好處：某一則解不開，整條不會卡住。大約 90% 能解掉，人再盯那 10%。怎麼拆才能平行到最大，仍然很難。

人要放在哪，看任務。Orchestration 的技術裡，一件要先想的是 human in the loop 插在哪，才知道事情有在往前，而不是 agent 走錯路、花上數小時和數百美元甚至更多。進 production 之前，人要 review，也要做過 QA。

[17:11](https://www.youtube.com/watch?v=HXOLm51b82M&t=1031s) 他建議從小開始。Dependency update 大家已經習慣 Dependabot 這類自動化。Agent 再往上一步，是 breaking API 只要改幾行的時候。小任務人比較驗得了。信任和直覺起來之後，再把規模加大。

起步是找出組織裡重複發生的問題。很常見的是一堆 repo 還在 Java 8，已經超出支援，要全部拉到 Java 21，也許有一百個 repo。先挑一個，用 OpenHands CLI 或 web UI 自己 prompt 到做成，累積對問題和 agent 的直覺，再用 OpenHands SDK 把這套直覺寫成 Python 或其他語言，編成可重複的 orchestrated pipeline。

[19:32](https://www.youtube.com/watch?v=HXOLm51b82M&t=1172s) OpenHands 接在開發者待的地方：Slack、GitHub、Jira、GitLab、Bitbucket。你可以對它說去做那件事。進階用法走 API。Datadog 裡某件事發生，就開一個 session 去修底層錯誤。就算錯誤發生在凌晨兩點，隔天醒來會看到一張修好的 pull request。
