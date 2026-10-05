# Adam Larson - Evaluating An LLM's Ability To Code | DevCon Fall 2025

片長 25 分 19 秒，英文自動字幕。DevCon Fall 2025。Adam Larson 講他怎麼評 LLM 會不會寫 code。他做了約 21 年開發，2004 年入行，玩笑說從 unpaid intern 到 CEO 的角色都待過。最近是 Raleon 的 founder 和 CTO，字幕聽成 Railon；公司剛被收購約三週，他現在是 Mailchimp 的 principal staff engineer，字幕把 Intuit 聽成 at in。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=CKqpy8tl1Tg)

## 一句話

公開 benchmark 測的常常是一年級作業，不是他每天在大 codebase 裡改十幾個檔案的工作。他做了一套自己的 eval，用 static analysis、unit tests 和一連串 yes/no 的 LLM-as-judge，看 agent 加 model 能不能照 spec 做完。V1 對得上開發者的感覺，但語言、context、還有非決定性讓它跟不上；V2 更接近真實 repo，也貴到他自己做不完。

## Benchmark 測的不是每天的工作

[0:56](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=56s) 大約 18 個月前，X 上隔一篇就是 AI 要拿走工程師的工作，新 model 一出就是史上最好，YouTube 全是 hype。他受夠了。他沒看到工程師被完全取代的路，也沒看到可以把 human in the loop 拿掉的程度，覺得很多是行銷。他仍很喜歡 AI coding assistance。他在 YouTube 上把當時 startup 裡學到的東西講得現實一點：用得有效，也要知道極限。那個社群的名字字幕聽成 GOU coder，這裡不另取名。

[2:25](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=145s) Llama 4 出來前後他就在做這件事。當時常見的 eval 是 Terminal-Bench 和 SWE-bench，字幕把後者聽成 suede bench、SweetBench。很多題目是第一年 computer science 課的程度：寫一個函式做某件事。那根本不像日常。他覺得現在有在變好，SWE-bench 大概是比較好的之一，Terminal-Bench 也還行，例如 SWE-bench 會拿一個 commit 來解，方向對，但複雜度仍不到他認為該測的地方。重點是要能稍微信任 benchmark，也要知道它到底在量什麼。

真實工作，尤其大 codebase，一次會改 1 到 20 個檔，跨 business domain，還得蒐集 codebase context。很多 eval 沒在測這個。他舉自己最近做的一件：大約一天、13 個 commits、14 個檔、加了 2200 行，還有 tests。路徑不是 benchmark 那種離散題目。跟 AI 一起做常常像雲霄飛車：一直開新的 context window，不是直線。

## V1：至少八個檔，三種分數

[4:48](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=288s) 大約一年前他開始做這套，後來叫 go to eval，結尾的網址字幕聽成 go toe eval.com。動機是 coding agent 和 model 每隔一天就有一個據說更好的，但作為天天在用的 full-stack 開發者對不上：frontend、backend、AWS 上的 infrastructure、Python 的 machine learning。每個人的 stack 不同，他要的寬度很大，benchmark 說的卻不是他感受到的。

V1 的題很多直接來自他正在做的工作。原則是不要只改一個檔或兩三個檔，最少動八個，最好更多。他說 V1 很天真，但開始給出有用的東西，社群也覺得比標準 benchmark 更靠近開發者的感覺，即使偶有不同意。目標是盡量做複雜、最後還能評估品質，而這非常難。

[6:35](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=395s) 他上個月測了一批 coding agents，現場還有人提到 Gemini 前一天又出了新的、還沒測。有的更新、有的跟特定 model 更合。V1 的一個初衷是：我想用 GLM 4.6，哪個 agent 跟它最好。依他的 benchmark，確實有些 agent 明顯較好。難處是全部測一遍的規模會變得天文數字，而且開始太手工。

模型一個月他常常只能承諾五個，因為又花錢又花時間，就讓社群投票。票選裡有 Grok code fast，字幕聽成 Groc / gro。OpenRouter 上用量很誇張，他從不覺得這個 model 分數特別高，但跑完還算可以。

[7:56](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=476s) V1 的分數有三層。Static code analysis：lint，以及 spec 裡要求的 library 版本，這些檢查是他手動做的。再來是一組 unit tests，AI 若完全照他說的做就會 100% 過，寫這些測試本身就很花時間。上面再加 LLM-as-judge，因為可以過測試、做法仍然不對。

V1 的 judge 有很多毛病。他後來學到：AI 很會答 yes/no，很不會給 0 到 10 的分數，方差會很大。Judge 該是一連串 yes/no，合起來才是分數，而且要給這個題目的好例子和壞例子。左邊那些靜態檢查每次分數一樣；右邊的 judge 一定有方差。目標是把方差壓低。同一題跑五六次，最高和最低落在 5% 以內。V1 實際是 0 到 4 分，他覺得還行，但最初那版很有缺陷，才想做 V2。

## 它量得到指令，量不到語言和 context

[10:28](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=628s) V1 做得好的是：agent 和 model 一起，能不能把 spec 照你寫的完成，以及 instruction following。他發現有的 model 懶，做到一個點就停；有的做得比你要的多。Model 有個性。他沒有要那五份 markdown，Claude 4.5 還是給了。這也是缺陷：他沒有好好量 over-engineering。他認為不該做超過要求的事，也知道有人會不同意。

他說除了 Aider 的 polyglot（字幕聽成 IDER），這是第一個真正把 agent 和 model 放在一起測、讓人能客觀決定要用哪個工具、或某個號稱全面更好的工具是不是真的顯著更好的測試。

做得不好的地方，Discord 裡有人用 Apex，或沒那麼冷門的 Elixir，指出：在他的測試上分數好，在他們的語言或 framework 上可能糟透。測到的只是某段技術、某個 framework、某段 code 的範圍。換到 Elixir、PHP 或 Apex 可能就不行。

[12:43](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=763s) Agent 和 harness 變得比他能追的快。前六個月他就得把測試退休。一版放出去時沒有人打到 100%，六個月內一批已經被做滿。當時這些 agent 的更新週期很誇張，邊做公司邊追非常花時間。

另一件現在更重要的是 codebase navigation 和 context gathering。AI 變好之後，他明顯感覺得到：肯花時間把需要的 context 蒐齊再決定，和讀到第一個東西就跳結論，出來的品質差很多。Plan 和 implementation 都是。V1 沒測這個。

## 四十次呼叫以後，分數會散開

[13:51](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=831s) 以前做 machine learning，同一個測試反覆跑會得到同一個數字。LLM 的方差大。他舉的那題可能對 LLM 打 40 次 API，每次的小差異會疊成明顯差距。第二圈做了一個決定，跑到最後可以差很遠。同一套 eval 上，他可能看到三個接近的、一個很差的、一個特別好的。這是 non-deterministic。有些變數能控，例如送進去的 prompt；Claude 在他們伺服器上做什麼、LLM 怎麼解 tokens，他改不了。大約一年前他就在建這個測試難題的模型。

現在 Codex 和 Cursor 讓你把同一件事跑四五次再挑最好的，字幕把 Codex 聽成 codecs。工程上這能把方差抹平一些：GPT-5.1、Composer 1 或其他的，可以平行跑再選。他覺得那些系統還有點不穩，但就是在繞這個問題。Claude 4.5 跑五次會有五個略為不同的答案，其中一個多半更好。

## V2 更真，也貴到一個月跑不完

[16:18](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=978s) V2 加了語言：C++、C#、Kotlin（字幕聽成 Cotlin）、Java、Rust。開始用 open source repos 和他自己的 private repos，把 commits snapshot 下來，在上面做 feature 或 bug fix。另外應很多人的要求加了 Unity 3D。他以前做過 gamedev，大家說 AI 在 gamedev 仍有很多做不好的地方。檔案下限從 8 個變成 12 個，有的到 20 到 25 個。

V1 全部跑完大約六到八小時。V2 是四台電腦、通常 15 個 agents、五個 models。他有 20 個在用的 evals，另外三到四個還在 test mode、還沒拉上來。若每個再跑五次、在一台機器上一個接一個，是 75,000 分鐘，一個月做不完。所以他得在 24 小時內同時跑 40 到 50 個。能自動化的有限。Cursor IDE，以及字幕裡的 Kira、Cline、Roo Code（Klein、Rue Code），得把文字貼進去按按鈕；API 出錯還得人去點。他覺得自己把它做得太複雜，想做的評估追不上了。

[18:42](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=1122s) V3 他想拆開，而不是每次都從頭跑到尾。先做 smoke test，看 model 在 agent 裡 tool calling 做得好不好。別人叫 virtual tool calling 的，他一直叫 prompt-based：就在 LLM 的文字裡，得自己 parse。他不確定有沒有正式名字。Native tool calling 又有三種格式，也很煩。再把 codebase context gathering 拆出來：像 Augment Code 那種在雲端索引、讓你可以搜的系統，或其他做法，量的是開始寫 code 之前有沒有拿到對的 context，而且可以更快。語言和 framework 也不該每次都寫完整的 end-to-end。應該能很快知道 GLM 4.6 不擅長 C++、但 HTML 和 CSS 很強。

[20:46](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=1246s) 有幾家公司出過相當多的錢，要他的測試、或要跟他合作。他沒興趣。這不是為了賺錢，是好玩，也想幫社群知道什麼有用、什麼沒用。他擔心全部開源會被刷榜。Llama 4 就是 benchmark 全過、vibe test 沒過、達不到預期。他想要這套框架有一部分對所有人開放，一部分保持私有，留在被 gamify 的 LLM 遊戲外面。否則擴不起來。這件事坐在所有 AI 公司外面：Claude 會希望 Claude Code 或自家 model 最好，OpenAI 希望自己的最好，Cursor 希望自己的 agent 最好。沒有公司真的想資助一個大型的獨立計畫。但他覺得需要 checks and balances。例如 Droid 很棒，卻沒有比已經在外面的顯著更好，就不該 overhype。

Spec 和功能測試他仍想留著，尤其 plan mode 已經很好。若能把 spec 做到 80% 到 90% 完成，對工程師是很大的加成。

[23:04](https://www.youtube.com/watch?v=CKqpy8tl1Tg&t=1384s) 另一件花太多時間和錢的是開放模型。他是 open source 的支持者，自己跑很多，希望什麼都能用它們。上 OpenRouter 或任何代管，provider 之間差很大。他做了工具，依量化方式和預設設定挑某個 model 最好的 provider。於是變數又多一層。跑 Qwen Coder（字幕聽成 quin coder）時，除了 model 本身的方差，還有 inference、預設值、temperature。Temperature 0 很糟，0.7 還可以，0.4 很好。沒花這些時間的人，聽到新 model、接上去，很難拿到好結果。

連 Anthropic 自己都測不穩。Claude 有過一次很大的 degradation，大家都覺得變差，他因此有一陣子不用 Claude。他請人去看那個 eval 站，之後會放 Gemini 3 的結果。
