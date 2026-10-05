# Hubris, Hallucinations, and the Humbling Experience of AI Engineering with Nathan Peck

Nathan Peck 從 New Zealand 連線（主持人先說成 Australia）。片長約 17 分鐘，英文自動字幕。他在 Amazon 做 Amazon Q Developer。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=rfpWgd9CbCU)

## 一句話

他用 Amazon Q 在 Visual Studio Code 裡做一款 crafting game，最難的是 physics engine。95% 的程式是 agent 寫的，但單次 prompt 做不出沒有 bug 的模擬。人得先給對的 context、把檔案切小，再自己抓出命名、效能和時間步長造成的錯。

## 先把 agent 帶到對的檔案

[1:03](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=63s) 他在 AWS 裡的 two pizza team 用 Amazon 的 generative AI 寫這款遊戲：ghost 角色從 dispenser 拿物品、檢視，之後要能 crafting。最難的是 physics。他切到 starter branch，角色卡在原地，準備從零重現一次 vibe coding。

[2:59](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=179s) 第一個 prompt 是請 Amazon Q 做一套 physics simulation，讓角色和物品能動。他先打開 game items 那個檔，讓 agent 看到結構。沒有 context，agent 也能自己挖 codebase，但這份 repo 很大：client 的 assets、components、helper、views，server、infrastructure as code、跟 LLM 互動的 handlers。愈早把它帶到起點，成功率愈高。

[5:16](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=316s) 他用 TypeScript。`physics` 欄位指向 `physics.ts` 裡還沒實作的 interface。Agent 沿著型別找到 placeholder，開始寫一個 physics system。

## 檔案太大，agent 會變慢

[5:18](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=318s) 第三個 tip：coding agent 傾向把東西塞進同一個檔。檔愈長、token 愈多，context 愈滿，agent 愈慢，也愈貴。他舉例，等它去算 200,000 tokens，回應要等很久。他跟著 Martin Fowler 把 codebase 拆成各自只做一件事的模組：item system、websocket、game objects。Agent 看出這個佈局，自己做了一個解耦的 physics system，透過較高階的 view reference 跟 game objects 互動。他點名的那個檔只有 51 行；socket system 是比較大的，約 200 行。

[6:59](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=419s) 前端用 Vue。一個 component 把 logic、template、CSS 放在同一個檔，agent 比較找得到要改的地方。它加上 physics system、imports，還加了一個 debug panel。他說這次底下是 Claude Sonnet 3.7，有時會做得很深、很貪心，所以他中途停掉。重新整理後角色可以走，dispenser 也吐得出物品。

## `active` 讓牆從模擬裡消失

[8:35](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=515s) 角色直接穿牆。他說這是第一個嚴重的 hallucination。牆在初始化時 `active` 是 false，原本只是不想對靜態物件太頻繁重算 physics。Agent 卻只把 `active` 的物件留在模擬裡，靜態的牆被整段拿掉。他認為 API 的語意有差：若叫 `paused`，比較不會被理解成「完全移出 simulation」。

[11:32](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=692s) 他跳到修好之後的 checkpoint。牆在了，但物件一直微微彈、停不下來。用 inspector 看 physics，velocity 極小而且不衰減；一旦真的衰減，物件又變成完全靜態，撞上去推不動。

## 切分頁會把時間步長拉爆

[12:55](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=775s) 另一個他很喜歡的 bug：切到別的分頁再回來，物品會大彈，角色也可能穿牆。現場沒有每次都重現。他請 agent 修「tab out 再回來，角色穿牆或物品亂彈」。

[14:26](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=866s) 他的結論是 vibe coding 不夠。單次、一次到位、完全沒 bug，目前做不到。人要自己測、找效能問題、找 bug。行銷說 AI 要拿走工作，他看到的是這些工具仍需要人幫忙判斷。

[15:27](https://www.youtube.com/watch?v=rfpWgd9CbCU&t=927s) Agent 的解釋是：分頁不在前景時，browser 會暫停或放慢 animation frames，回來時距上次更新的 time delta 太大，物品一步跨過牆，或彼此撞得極重。它加上 visibility state tracker，切走時暫停 physics，並設 maximum delta time cap，太大就壓小。他時間到了，沒有進 Q&A，建議試 Amazon Q Developer 的 VS Code 或 Q CLI。
