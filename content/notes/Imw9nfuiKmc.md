# Tessl Skills Clinic - Nnenna Ndukwe from Qodo

Simon Maple（Tessl）在 Skills Clinic 跟 Qodo 的 Nnenna Ndukwe 現場跑一份 skill。片長約 17 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=Imw9nfuiKmc)

## 一句話

Qodo PR Resolver 先拿到 78%，套用 Tessl review 的修正後升到 89%。分數看的是 skill 有沒有貼近 Anthropic best practices，真正決定 agent 會不會用它的，是 description。人寫完再驗證過的 skill，比只靠 agent 生成的穩。

## PR Resolver 在做什麼

[0:20](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=20s) Simon Maple 是 Tessl 的人，來賓 Nnenna 帶 Qodo 的 developer relations。Skills 在 GitHub 的 `qodo-ai` 和 `qodo-skills`。目錄裡有 Qodo Get Rules 和 Qodo PR Resolver，她選後者，因為用得很廣。

[2:00](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=120s) Qodo 是對 pull request 自動跑的 AI code review。問題出現在 UI 之後，開發者在 coding agent 裡跑 PR Resolver、指向那張 PR，它會把 Qodo 指出的問題修完，再把摘要和程式變更推回 PR。

[3:25](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=205s) Tessl review 以 agent 跑測試，看 Anthropic best practices 在 skill 裡有沒有、在哪裡，缺的地方給建議。Simon 說分數掉一點不代表錯：組織不一定要完全照 Anthropic 的做法。這比較像用 Tessl 把 skill 品質穩在一條線上。另一套 evals 是情境導向，同一批任務有 skill、沒 skill 各跑一次，看對 agent 的影響。

[5:01](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=301s) Qodo 內部也用自己的 PR Resolver。Get Rules 則讓 coding agent 拉下相關的 coding rules，例如每個 Python method 都要有 docstring，想把 code quality 往左移。問到離 software factory 多近，她說朝那個方向走會愈來愈重要，要整個公司一起做 adoption 和 enablement。Simon 說他們用 Tessl agent 幫自己建 software factory；最要調整的是人，信任並跟上新 workflow，年資深的工程師比較難放手。這是 people problem，比技術本身大。

## 78%：description、重複、相對連結

[7:14](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=434s) 前一天她的 workshop 談品質：大家擔心 AI slop、把很差的 code 送進 production。她走一條從 planning、code generation、code review 到修問題的 workflow，讓 agent 有 guardrails，也有團隊要的 context。範例 repo 她讓現場的人 fork，GitHub 上也能拿到。

[8:07](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=487s) Review 分數 78%。有一則 validation warning：20 個缺的 relative links。Simon 說這常常只是寫法和 best practice 差一點，agent 多半還是找得到檔案，有時找不到。Strong actionability，但需要少一點重複。人常以為同一件事要跟 agent 講很多次，現在常常不用。Description 很強，還可以再加自然的 trigger phrases。Description 是 skill 上兩段 metadata 之一，agent 靠它決定要不要觸發。他建議補上 issues、code reviews 這類字。

[11:00](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=660s) 打開 `SKILL.md`，資源不多。多數觸發發生在 description，另外也可以用 triggers，告訴 agent 某些情況用這個 skill。裡面有 tools，連結用 markdown link 看起來合理。Simon 說 78% 算好的那一端。常見用法是把 Tessl review 放進 PR，例如 GitHub Action，push 之後確認 skill 沒有退步。門檻是不要低於 80。因為是 LLM as a judge，分數有雜訊，同一份沒改過的 skill 多跑幾次也可能到 80。這次比較像微調，不是大改。很多人的 skill 落在 20%、30%。最常漏的是 name 和 description 寫得太短。Description 不好，skill 就不會被觸發。

## 修到 89%

[9:46](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=586s) 他們跑 review fix：套用修正再跑一次 review。Nnenna 說 workshop 裡也有人要求，改完 code 之後 agent 要跑 linter 和 static analysis。

[13:26](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=806s) Simon 提到一篇研究：用比較有創造性、agentic 的方式生成的 context，確實能帶來人要的 uplift；人進去看過、改過、驗證過的 skill，分數會再跳一截。他記得論文說 human written skills 平均大約升 14%，純 agent 生成的平均低一點，有時在你的環境裡還會退步。Nnenna 自己用 Codex 的 skill creator plugin 生 skill，不確定它知不知道建 skill 的 best practice。

[14:19](https://www.youtube.com/watch?v=Imw9nfuiKmc&t=859s) 結果升了 11%，到 89%。`git diff` 加了一個 shared section，把重複的 fix 收掉、段落重組。少給一點 context，agent 有時反而比較跟得上。他們通常說 skill 不要超過 500 行，這份遠低於那個。修正也加了 validate-after-applied：有的話就跑 lint、type check、test。Simon 建議事後用 evals 比改前改後，看任務結果有沒有真的變好。他會把變更推上去，對 Qodo 的 repo 開一張 PR。
