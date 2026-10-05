# Stop Guessing! Master Agentic Context Management & Deterministic Evals with Tessl 🤖

片長 2 分 45 秒，英文手寫字幕。產品說明，字幕沒有報講者名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=XH1OwTrfiEE)

## 一句話

Context 現在多半是傳來傳去的 Markdown，沒有人檢查它有沒有讓 agent 變好。Tessl 要把它變成可以版本化、分享、評估的一等公民。產品裡今天有三種 eval。

## 三種 eval

[0:05](https://www.youtube.com/watch?v=XH1OwTrfiEE&t=5s) 他說 context management 感覺像藝術不是科學，而且是 vibes。生態變得很快，所以這樣還可以，但該開始把 context 當成軟體和流程裡的 first class primitive。Tessl 讓你 version、share，並評估它是否真的改善 agent behaviour。

[0:58](https://www.youtube.com/watch?v=XH1OwTrfiEE&t=58s) Task evals 看的不是 context 的內容本身，而是有它和沒有它時 agent 的行為。情境依你的 context 來做。

[1:26](https://www.youtube.com/watch?v=XH1OwTrfiEE&t=86s) Skill review 他覺得叫 eval 有點俏皮，比較像 skill linting。他們把 Anthropic 和其他來源的 skill 寫作慣例編進去，只評內容寫得好不好、符不符合那些慣例。

[1:50](https://www.youtube.com/watch?v=XH1OwTrfiEE&t=110s) Repo evals 依最近的 commit history 產生寫實情境，再看你的 agent 在有、沒有這份 context 時的分數。LLM 和 agent 是 non-deterministic，所以他們做了正規化、排除離譜離群值。沒有 eval，context 就只是 Markdown。免費起點是 tessl.io/registry。
