# Baz, Docker & Meta on Verifying Agent Code

片長 10 分 14 秒，英文手寫字幕。剪輯。旁白說 Shachar 把不希望重現的 bug 錄下來附在 spec 上，結果那個 bug 還是回來了。他本人在摘錄裡說到開發者回 Slack 說功能做完，後續沒留住。

- 原片：[YouTube](https://www.youtube.com/watch?v=DFDyRt4cU1Q)

## 一句話

很多人在說的是：證明它做了你要的事。Baz 的 Shachar Azriel 把一次按鈕重疊的錄影放進規格，要求不要再犯。前 Docker CTO Justin Cormack 用 agents 寫了 35 萬行 Rust，試過追 100% 測試覆蓋，發現 agent 會為不可能發生的事寫測試。Christopher Batey 則說，七千行的 pull request 進來時，系統層級的決定要先變成一份人讀得懂的 ADR。Agents 很愛寫 ADR，寫到沒有人看得懂。

## 錄下來的那個 bug

[0:00](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=0s) 六月倫敦很多講者在說同一件事的不同版本：證明它做了你要求的事。

[0:09](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=9s) Baz 的產品副總 Shachar Azriel。旁白說他寫了規格，附上他不希望再出現的那個 bug 的錄影，結果還是得到那個 bug。他本人說的是：他們想把這件事加進產品的 onboarding。使用者進 Baz 時，可以選擇整合他們已有的工單系統。因為他審每一個要發布的產品和功能，他要求先前整合另一個工單系統時發生的同一個 bug 不要再出現。他真的附上當時的錄影：continue 按鈕壓到幾天後才加的新整合上。開發者後來在 Slack 跟他說功能做完了。這句之後的結果，摘錄沒留住。

## 三十五萬行 Rust，以及不要迷信百分之百

[2:38](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=158s) 前 Docker CTO Justin Cormack 用 agents 寫了 350,000 行 Rust。他試了「追到 100% 測試覆蓋就好」的建議，發現 agent 在為不可能發生的事寫測試。

[3:01](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=181s) 他一直聽到：有了 AI，你只需要 100% 測試覆蓋就完成了。他試了。他開始追 100%，也量了不同意義上的 100%，從測試覆蓋到整合測試。他發現有些用法比追 100% 更值得花時間。他坐下來叫一個 AI agent 做到 100% 覆蓋，也問過：為什麼這份還沒到 100%。

[4:20](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=260s) 他的 codebase 有 75% 的檔案，測試覆蓋落在每個檔案的 75% 到 100% 之間。你可以有很多測試，而不必執著於 100%。他不覺得 100% 是對的目標。

[4:40](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=280s) 複製一個既有系統、像 S3，好在你有一個測試的 oracle。跑測試時可以對照 S3。他有 1,500 個對 S3 跑的測試，把它們的行為鎖住。中間有一段沒被摘到。

## 七千行的 PR，以及人先寫的 ADR

[7:01](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=421s) 收尾是 Christopher Batey：一張 7,000 行的 pull request 落地時你做什麼。他說 maybe 會進來一張大約 7,000 個變更的 pull request。

[8:01](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=481s) 他想留在工程師身上的思考包括：我們有沒有共用一個人類前端在用的 API，和一個 agent 系統在用的。什麼資料可以從 client 到被管理的那側，什麼可以反過來。被管理的服務幾乎每個 commit 都持續交付。Client 那側不一樣，也許一週更新一次，因為是部署到他們的系統上。

[8:30](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=510s) 他們現在做的一件事是：規劃下一週的工作時，若覺得有系統層級的決定，永遠單獨開一張 pull request，放在一份 architectural decision record 裡。沒聽過的話他說去查。那是把技術決定和 code 一起寫下來，讓人很快知道為什麼這樣決定，不必一再討論。他們用 ADR 很久了。

[8:56](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=536s) Agentic development 之後，所有 agents 都很愛寫 ADR。它們很會看到已經有 ADR，於是寫更多，而且更長、更囉嗦。沒有一個人類看得懂，完全打掉 ADR 的目的。所以他們改成從 ADR 開始。他本人會花很多時間審。他要圖，要視覺化，讓自己看得懂。審的人可以把力氣放在這些紀錄上。

[9:23](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=563s) 有了這些之後，agents 非常擅長拿實作去對結構良好的 ADR。不只最後落地的那次，之後的請求也是。他不覺得人擅長把所有 ADR 放在腦子裡，然後看後續那些也許悄悄改變系統架構的 pull request，例如露出一個新的 API。他們實際做的是讓 ADR 持續對照所有進來的 pull request。句子在這裡被剪掉。

[9:57](https://www.youtube.com/watch?v=DFDyRt4cU1Q&t=597s) 片尾約十一月紐約的 AI DevCon。
