# The Future of Scrum in an AI-Native World | Alex Gavrilescu

片長 6 分 14 秒，自動英文字幕。Alex Gavrilescu。Claude Code 被聽成 cloud code 或 clothe，ChatGPT 被聽成 CHP。活動網址聽成 a native.io/devcon，不寫成連結。

- 原片：[YouTube](https://www.youtube.com/watch?v=ABTOLOGJ6Oo)

## 一句話

就算你給足單一任務的 context，agent 仍不認識整個專案。他會先做一個用完即丟的原型，讓 agent 從人和 code 吃 context，若 context window 還在，再在乾淨的 domain-driven design 上重做一次。Scrum 不該整包丟掉，但兩週一次的審查，可能要變成一天兩三次的人類檢查點。

## 第二次往往更好

[0:00](https://www.youtube.com/watch?v=ABTOLOGJ6Oo&t=0s) 給足單一任務的 context，agent 還是不知道你的專案。他預期的做法是快速原型，讓 agent 自動吃進人和 code 的 context，建完就丟。Context window 還夠的話，在乾淨的架構、乾淨的 domain-driven design 上從頭再來。第二次結果可能更好。

## Scrum 要重構，不是扔掉

[0:36](https://www.youtube.com/watch?v=ABTOLOGJ6Oo&t=36s) 主持人問 Scrum 在這個未來還有沒有角色。他說這題很難。很多人努力成為好的 scrum master 和 agile coach。跟人類工作時這很重要，但流程要像重構 code 一樣重構：不是全部丟掉，是看什麼有用，再把它變順、變簡單。這些 agile 流程是為了人的某種工作方式。現在突然有無限的頻寬，交付檢查點不一樣，人要審的節奏必須比等兩週的 scrum review 快很多。未來可能一天要兩三次審查。

[2:00](https://www.youtube.com/watch?v=ABTOLOGJ6Oo&t=120s) Scrum 的核心是在一定時間內有交付物，並在團隊和利害關係人之間協調，好決定繼續還是改。可以學的是做 AI checkpoints：前一晚平行工作的 AIs 到達同一點，彼此 handshake，然後才需要 human in the loop。人驗證之後，才能再放下一批平行 agents。幾乎是一個 AI scrum，在對的時間把人引進來。

## 六個月後他預期的中樞

[3:16](https://www.youtube.com/watch?v=ABTOLOGJ6Oo&t=196s) 中間有一段 AI Native DevCon 的廣告，11 月 18、19 日紐約或遠端。網址沒有聽清。

[3:32](https://www.youtube.com/watch?v=ABTOLOGJ6Oo&t=212s) 要看曲線從哪來。Claude Code 大約三、四月發布，才幾個月，已經有幾次迭代，能平行、能用 nested agents。六個月後在指數曲線上會更強，很難預測。基本面是 agent 越來越像中樞，依人的互動決定做什麼。他預期它們 24 小時跑，不是你開一個、給任務、停掉、再換新 session。一個持久的 agent 當輸入點，自己的 context window 保持對「人要達成什麼」的理解，但盡量小，實際任務交給 subagents。它像團隊領導，需要時才生出 agents。它也可以主動。他看到 ChatGPT 一類功能會每天早上給你相關資訊。Agent 可以做得更好，因為能呼叫工具、接別的來源、也許在你自己的資料上訓練，然後做你交辦的事，或主動來說：太太下個月生日，該開始看禮物或辦派對。
