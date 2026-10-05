# The Skill-Building Method Nobody Talks About

片長 3 分 23 秒，自動英文字幕。訪談摘錄。這段沒有把兩個人的名字念清楚，下面不補名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=viKMm_IYHpM)

## 一句話

他不自己寫 `SKILL.md`。他先跟模型一起乾跑一次真實任務，再叫模型把剛才做的事收成 skill，那次乾跑就是第一份 evaluation。一個例子裡，有 skill 比 baseline 好 1.79 倍。給大團隊用時，不要太早把所有人拉進來。

## 怎麼做出一個 skill

[0:00](https://www.youtube.com/watch?v=viKMm_IYHpM&t=0s) Agent 會用兩種方式跑情境：有 skill，以及沒有 skill 的 baseline。有一個例子 code 做得很好，大約是 baseline 的 1.79 倍。他說自己曾經懷疑到底需不需要這個。他們想給 agent 很多工具，但也擔心安全、會不會把資料外送。Agent 失控時這些很難觀察，而且這已經超出傳統軟體。

[0:33](https://www.youtube.com/watch?v=viKMm_IYHpM&t=33s) 從零做 skill 的做法是跟模型一起建。他沒時間自己寫 skill 檔，也會問模型怎麼想。常常不是先寫 skill。他告訴模型要做什麼，然後說要一起 dry run，做完再回顧全程、把那次收成 skill。那次就是第一個 evaluation，因為是他真的拿來做想做的事。之後再調整。

## 何時跑 eval，何時找別人

[1:19](https://www.youtube.com/watch?v=viKMm_IYHpM&t=79s) 他還在摸。他贊成一直 eval，但沒有預算每次改一行都跑。會跑的時機是 workflow 的大改，一個情境的改動可能影響另一個。若用 semantic versioning 類比，他把它放在中間那個版本，不是每個最小改動。這是成本和表現的平衡。

[2:10](https://www.youtube.com/watch?v=viKMm_IYHpM&t=130s) 給較大團隊做時，他想盡早把使用者拉進來，但太早意見會太多。有時先讓一個人 hack，找出什麼能用，再拿第一版跟別人談，而且要能解釋你怎麼走到這裡。太早找很多人會浪費時間。主持人把他收成兩個迴圈：一個是你自己用 evals 打磨，另一個才是更廣的團隊，或額外的 agents 和 LLMs。打磨太久才進第二圈沒有意義。
