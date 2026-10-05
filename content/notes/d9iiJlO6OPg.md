# Is AI generated code secure?

片長 95 秒，自動英文字幕。簡介把這段歸給 Guy Podjarny。字幕沒有再報一次名字。Snyk 被聽成 sneak，cross-site scripting 被聽成 Crosset scripting，AppSec 被聽成 absc。中間有一個人名聽成 Fest，下面不採用那個名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=d9iiJlO6OPg)

## 一句話

預設來說，AI 生成的 code 不安全。企業擔心的問題大約九成是 SQL injection、cross-site scripting、buffer overflow 這類標準問題。模型也知道安全寫法，但你得把它導向那裡。Prompt injection 則是 control plane 和 data plane 沒有分開。

## 兩件事

[0:00](https://www.youtube.com/watch?v=d9iiJlO6OPg&t=0s) 問「AI generated code 安不安全」，回答是 no。企業從安全角度擔心的問題，90% 是很標準的東西：SQL injection、cross-site scripting、buffer overflows。LLM 大多數時候最可預測的產出是 insecure code。但它也有那些安全寫法的知識，你得把它導向那個區域。

[0:45](https://www.youtube.com/watch?v=d9iiJlO6OPg&t=45s) 他舉 LLM 剛出來時，當時 AppSec 團隊負責人一週內、以很高的準確度和可靠度，針對 Snyk 自動標出的問題產出真正的修法：把 Snyk 的項目交出去，要一份安全、可靠的版本，它相當準地寫出可以當 PR commit 的 code。人名那一小段字幕聽壞了，不寫。

[1:07](https://www.youtube.com/watch?v=d9iiJlO6OPg&t=67s) prompt injection 本質上是 control plane 和 data plane 的問題。被分析的資料，和你下的命令，是同一種東西。你給的 instructions 和要分析的 data 沒有區分。他說這就是問題。
