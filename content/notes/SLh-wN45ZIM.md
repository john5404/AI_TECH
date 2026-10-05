# Docker, Adobe & tldraw: Where Should Your Agent Run?

片長 10 分 8 秒，英文手寫字幕。剪輯。四個答案沒有全部留在摘錄裡。容器為什麼過不了安全審查，中間的技術說明也不完整，下面不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=SLh-wN45ZIM)

## 一句話

「Agent 該跑在哪」得到完全不同的答案。Docker 的 Oleg Šelajev 先用容器做 sandbox，企業安全團隊說容器不是他們信任的隔離邊界，於是改建成 micro VM。另一個意見是：電腦該屬於每個 agent，不是每個人。還有人把 harness 放在畫布上，讓你看見誰在想、誰在審，並叫三個一起下井字遊戲。

## 容器共享核心，安全團隊不簽

[0:00](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=0s) 六月倫敦，一個聽起來簡單的問題得到四個完全不同的答案：agent 實際該跑在哪。

[0:09](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=9s) Docker 的 Oleg Šelajev，DevRel，做所有跟 AI 有關的事。他們做 sandbox 時先做了一版容器。去問一批企業安全團隊，所有人都說容器不是他們能信任的隔離邊界。身為好工程師，他們做了什麼？後面他說，容器對 micro VM 聽起來 maybe 差不大，但若你共享一個 kernel，又有一批可以從容器外面利用的安全漏洞，那不是安全團隊會簽核的東西。句子在這裡被剪掉。摘錄沒有把重建的步驟留全，只留旁白說的結論：他們改建成 micro VM。

[3:21](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=201s) 他認為第一個大決定是：你要繼續讓每個開發者跑自己喜歡的 agent，還是公司裡大家用同一個 agent，但跑在各自的開發環境上。

[4:17](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=257s) 例如全球分散的團隊。東京日落、倫敦日出時，另一個人可以接著做某個 agent 正在做的工作，尤其若那個 agent 真的能被交接。句子沒說完。

[5:08](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=308s) 他的第一條意見：你該給每個 agent 自己的電腦，不是給每個人。

[5:42](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=342s) 他想到的是一個坐在瀏覽器裡的 agent。中間換到另一段示範。

## 畫布上的 harness

[7:52](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=472s) 每一個都是活在畫布上的那個 harness 的一個實例。一開始只是把 agents 視覺化：它們在哪、哪些存在、哪一個是哪一個。你可以設定它們、換帽子，或因為需要兩樣東西而改變腿的長度。可以把牠們扔來扔去。也可以跟牠們說話。可以把它們的狀態視覺化：在想、在審，或在工作。也可以叫牠們做事。他說這和先前看過的那個 harness 大致相同，中間有一個「桌上的貓」的例子，摘錄沒有解釋。他說這在現場寫 code 時更糟。

[9:13](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=553s) 也許可以讓牠們當團隊。抓住三個，說下一整局井字遊戲。其中一個會被選成領導，起草計畫。翅膀變色，表示同一隊。可以有多個人共享同一個體驗。Coordinator 做出 to-do list，再把任務派給不同的 fairies，也就是不同的 agents。

[9:50](https://www.youtube.com/watch?v=SLh-wN45ZIM&t=590s) 片尾約十一月紐約的 AI DevCon，網站是 ainativedev.io。
