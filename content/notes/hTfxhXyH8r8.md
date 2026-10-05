# Hacked 7 YC Startups in 30 Minutes | René Brandel

片長 8 分 22 秒，自動英文字幕。René Brandel。中間有幾段沒被收進摘錄，下面不把空白補成他沒說的攻擊細節。

- 原片：[YouTube](https://www.youtube.com/watch?v=hTfxhXyH8r8)

## 一句話

Y Combinator 春季班 16 家公開上線的公司，他在 30 分鐘內打進 7 家。大家都在用 AI 做軟體，然後用寫 code 的方式加了一個功能，那個功能帶進新的漏洞。語法正確率從大約 17% 到 98%，安全基準卻是平的，甚至略降。他建議在規格旁邊放一份 `access control.md`，寫角色和使用者該做什麼，做完再拿來核對。

## 量變了，就得從攻擊面看

[0:00](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=0s) 16 家裡打進 7 家。這些公司都在用 AI 做軟體，但生命週期不同。然後他們只用寫 code 的方式加了一個新功能，最後把一個新漏洞放進系統。軟體的量在變，未來測試新軟體最好的方式，是從 offensive security 看。

[0:39](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=39s) 他覺得現在只是含義的開頭。想像較大的公司以更大的規模採用 AI，又沒有同樣想安全。他預期會看到很嚴重的大型外洩。那時候整個產業會重新看，在每天幾萬行 PR 的這個技術時代，安全要怎麼做。

[1:21](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=81s) 他查到一個統計：LLM 生成的 code，語法正確率這幾年從大約 17% 到他上次看的 98%，幾乎是 100%。Code 在變好。安全基準卻是平的，甚至突然略降。中間有一段摘錄沒蓋到。

[3:12](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=192s) 從安全看，LLM 到達一個答案的路太多。若解法的可能是無限的，你要怎麼開始給指引、說什麼叫對。這句之後又有一段沒被摘到。

## 安全不能脫離業務

[6:04](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=364s) 這不只是軟體工程，也不只是安全工程。安全不能單獨看，要放在業務的 context 裡。隨機掃描器會對你暴露的 URL 標警：這個照片 URL 是公開的，你一定弄錯了。但如果那是 Google Photos，而你故意把那張照片公開，那是業務決定。今天的安全技術缺語意，於是有一堆誤報、吵雜的警報，人被分頁叫醒，工具卻不知道這件事其實不重要，因為系統就是設計成這樣。

[7:04](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=424s) 他預期安全會被壓進軟體工程，但會慢一點，因為要綁在一起的東西更多：業務 context、安全的典範，以及軟體工程的典範。

[7:28](https://www.youtube.com/watch?v=hTfxhXyH8r8&t=448s) 用規格開發的人，他建議在堆疊裡放一份小小的 `access control.md`。寫你期待終端使用者做什麼、有哪些角色、這些角色該做什麼。實作完之後對這些規則驗證，看有沒有被影響，標回來，或把變更照這些再實作一次。這麼簡單的東西，立刻把語意 context 加進生成的 code，LLM 就能幫你做得更好。
