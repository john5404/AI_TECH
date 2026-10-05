# How DeepSeek leveraged Qwen and Llama to build its model in $5M

Simon Maple 訪問 OpenUK 的 CEO Amanda Brock，人在 London。片長約 40 分鐘，英文自動字幕。中間有一段活動宣傳。字幕把 Llama 聽成 Lama，把 Kimi 聽成 Kimmy，把 Qwen 有一處聽成 Quan。下文用校正後的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=t58F68SElhE)

## 一句話

標題裡的 500 萬美元，是蒸餾，不是從零訓練。DeepSeek 用 Qwen 和 Llama 做出對等的東西，成本從當時約 1 億降到 500 萬，大約 5%。Amanda 的主線是：多數被叫做 open source 的 model 只開放了其中一塊。Llama 有使用限制，也有用到一定人數就要回頭向 Meta 拿商業授權的條款。她要的開放，是每一塊都能讓任何人拿去做任何事，而且社群信得過這件事不會收回。

## 開放要拆開看

[2:19](https://www.youtube.com/watch?v=t58F68SElhE&t=139s) 這集問的是：open-source model、open weights、open training data 各是什麼，西方要向中國的開放學什麼才不會更落後。OpenUK 剛過六年，做的是 open tech：軟體、硬體、資料、標準、AI。別國的產業組織對準公司，最後只剩一小群，漏掉生態系的一大塊。他們對準個人，當召集點，做法律、政策、研究、技能，也辦 State of Open。Amanda 從九零年代末當律師，走過 dot com，2008 年進 Canonical，2018、19 年不做律師，2019 年開始 OpenUK。Simon 說她有二十五年法律經驗。她仍用法律技能，但不必再當律師。

[6:01](https://www.youtube.com/watch?v=t58F68SElhE&t=361s) 「什麼是 open model」她說這題很小、卻很容易惹禍。開源定義和授權磨了三十年，信任點是：任何人可以為任何目的用這份程式碼。她不願為還在變的東西寫死一個總定義。幾年前大家定義時只想到語言模型，沒想到 agent、機器人、embodiment。她要把元件拆開：model 或演算法、資料集、agent，各自問能不能給任何人、做任何事，以及授權是不是 OSD 相容。她點名 GPL、Apache、MIT。某一塊可以是 open source，整套 AI 不必是。

[8:04](https://www.youtube.com/watch?v=t58F68SElhE&t=484s) Simon 說，軟體有原始碼，加上 GitHub 和 CI，大致能做出來。Model 只有程式碼不夠。Amanda 說 open weights、open model 的差別是：你拿到的是 model 那一塊，幾乎一律拿不到資料。不是百分之百，但是幾乎。

[9:22](https://www.youtube.com/watch?v=t58F68SElhE&t=562s) 價值看你站在哪。對創新者，是本來用不到的技術可以拿來疊。2023 年先有 Llama 外洩，然後七月開放，創新速度她說前所未見。從 Meta 的 Llama 到 DeepSeek 的 R1，沒有前者就沒有後者。全球她看到中國和美國遠在前面，中間大約十個國家。沒有協作，負擔不起那兩國已經做出的規模，也負擔不起 AI 創新的成本。終端使用者和全球南方要的是成本和近用。她提到印度一場 AI 高峰會談 access for all。

## Llama 是開放創新，不是開源

[11:19](https://www.youtube.com/watch?v=t58F68SElhE&t=679s) Meta 說 Llama 是 open source，外界以為 Linux Foundation 背書。她說那是誤會，基金會沒有背書。2023 年七月，她記得是 23 日左右，OpenUK 是唯一把這次發布支持成 open innovation 的組織，而且從頭就這樣寫。授權有兩件事：acceptable use policy 加上限制；用到「X million」使用者就要回頭向 Meta 拿商業授權。沒有人知道那份商業授權的條款，因為她認為還沒有可追蹤的使用達到那個量。所以「任何人、任何目的」不成立，輸出也不能放心交給下一個人再迭代。當作 open innovation 她仍支持，因為把 LLM 打開是產業的轉折，她覺得會留在歷史上。

[12:57](https://www.youtube.com/watch?v=t58F68SElhE&t=777s) 現在坊間說 Meta 在離開開放。她認為是因為沒做成真正的 open source。他們自己原本也不那麼叫，直到 Zuck 在 Facebook 上貼了之後，就沒有人再退回去。有意無意，除非他說，不會知道。她最近見過 Yann LeCun。他想做跨國、跨邊界的全球 model，由國家一起出錢。她因此覺得他們懂 open source 是什麼。

[13:52](https://www.youtube.com/watch?v=t58F68SElhE&t=832s) 風險叫 open washing。開源軟體裡早有，她沒想到會上主流。《紐約時報》和《經濟學人》近兩年封面都出現過。意思是借用開源的好名聲，交付物其實沒有那份好處。說 Llama 是 open source 就是在誤導。別人不能同樣地拿去用、回收、再交給下一個人。真正的價值超過「有一張授權、把它打開」：是社群、協作、貢獻。若人們不相信開放會永遠在，生態系長不出來。她最近和 MCP 的一位創建者談過，對方把 MCP 放進 Linux Foundation 新的 Agentic AI Foundation，就是要它一直開著。Open washing 拿掉的是信任。

[16:04](https://www.youtube.com/watch?v=t58F68SElhE&t=964s) 開發者怎麼判斷。她說技術上對方比她懂該要哪一塊。授權上要是大家認識、而且沒被改過的 OSI、OSD 相容授權。然後看你拿到哪一塊、沒拿到哪一塊。文件很有用。DeepSeek 放 R1 時沒給訓練資料，但文件好到幾天內 Hugging Face 做出他們稱為 R1 open 的東西，因為有可複製的說明。

## 五百萬美元，以及西方沒在用的 Kimi

[17:25](https://www.youtube.com/watch?v=t58F68SElhE&t=1045s) Simon 在 State of Open 辦過 DeepSeek 的座談，大約在它出來後一兩週，有中國同事。蒸餾是拿 Qwen 和 Llama 裡已有的東西，做出對等物，不必從零建 model。她說價格因此降到 500 萬美元，而不是 1 億，當時大約 5%。她覺得那次蒸餾對那個時間點的創新很大。現在印度透過 Sarvam 放出小型 open model。她看到市場在往能放進手機的小模型走。DeepSeek-4 什麼時候來、會不會來，兩人都不知道。

[18:49](https://www.youtube.com/watch?v=t58F68SElhE&t=1129s) Simon 說人們常不知道後面還疊著別的 model。他當週在 Hacker News 或 Reddit 看到傳聞，說 Cursor 新的 Composer 2 核心是 Kimi。可能是釣人，證據他也不確定。愈來愈多人知道不是每個 model 都從零做起。十二月她去中國。幾年前她編過一本開源法律的書，640 頁，中國開源社群譯成中文。在那裡她有一通不能談內容的通話；字幕寫成 DeepMind。接著她說當地很大的是這家，以及 Qwen 和 Kimi。開發者幾乎都在用 Kimi，而且跑在前面。

[20:19](https://www.youtube.com/watch?v=t58F68SElhE&t=1219s) 什麼時候用貴的，例如 Opus 或 OpenAI，什麼時候用便宜的衍生模型。她說開放模型的採用比你預期低，很像二十年前的開源軟體：風險、不了解、不一定必要的恐懼。律師、採購、財務在合約上說不。後來圍繞 GitHub 才有動能。她認為不會是單一工程師做決定，而是整個產業變成常態，而且不可避免。不是美國或中國的人更是如此；在中國，大概已經在用開放模型。Yann LeCun 最近幾週在活動上也說類似的話。投資報酬現在還看不到大家期望的那樣。核心創建者、開發社群、終端使用者會慢慢移。她聽說測試上的差距已經很小，開放模型開始夠好。Simon 補：原型和不進 production 的快速嘗試，不想要慢、想很深的模型。

[23:34](https://www.youtube.com/watch?v=t58F68SElhE&t=1414s) 她從中國帶走的是對省 compute 的執著，因為他們沒有別人那樣的取得管道。地緣政治下，大家會更吝嗇運算和基礎設施，小模型、把模型打開、更多分享，會更有位置。Agent 能不能補上便宜模型的不足。她同意，這像 OK 繃，蓋住 model 的很多問題。Simon 說有時要問一百次才對一次，agent 可以把那一次給你，你不必自己熬過那 99 次。她另外在談 abstention：訓練 model 不知道就不要答。不全是幻覺，是它們總想討好。她覺得這對生意上的生產力、以及上面的 agent 層，會很關鍵。產業也在為自己精煉 model。一兩週前的 Mobile World Congress，GSMA 把電信業者和網路商拉在一起，用電信資料共同訓練。Agent 接上那個，才會真正有用。她覺得 ROI 會在這時候出現。

[26:24](https://www.youtube.com/watch?v=t58F68SElhE&t=1584s) 她點名西方漏掉的是 Kimi，Moonshot 做的中國開放模型，她記得大約去年底出來。她自己沒用過，是中國開發者口耳相傳。Simon 說這很像當初 Claude 和 OpenAI 靠口碑。她說開放生態系就是社群。過去二三十年，怎麼建社群、怎麼拿到貢獻、怎麼留住人、怎麼對待 maintainer，對不是開放出身的人像一門暗技。你不能做完就等人來。她舉了一個當時傳得很快的東西，字幕聽成 Maltbook：某個週六她還在想怎麼加進去。後面她說，跟非技術的人解釋「agent 有自己的社群媒體，還在自創宗教」，對方會以為那就是現況。

## 中間仍是開放的，國家也想當根據地

[28:44](https://www.youtube.com/watch?v=t58F68SElhE&t=1724s) 為什麼開發者仍預設閉源 API。她說這正在移。即使用閉源 model、閉源 API，中間多半還是開著的 MCP。API 開不開，是它能不能自由取用；大家通常會把 API 打開，好讓介面人人接得上。MCP 沒走過正式標準程序，是開放技術裡常見的事實標準，因為它把舊世界和新世界接上了。從閉源 model 到閉源 API，中間用的仍是開放的東西。

[30:42](https://www.youtube.com/watch?v=t58F68SElhE&t=1842s) 用了開放 model，agent 要不要也開放。她說是選擇。她會主張打開，因為才有社群、採用、自己迭代再分享。若目標是變現、而且認為只有抓住 IP 才做得到，人就會關著。2023 年五月 Google 流出一份備忘錄，她強調那只是一個人的意見，寫著 we have no moat。護城河通常是智財，用來擋人、用來收費。東西一打開，那條就不在了。她覺得 AI 大多會走到這樣。一部分是因為歷史：數位基礎設施最後在大約八家公司手上。她不希望 AI 的未來也是八家。三十年前開始那些大型科技路程時，人們還沒這麼懂打開的價值。

[32:28](https://www.youtube.com/watch?v=t58F68SElhE&t=1948s) 她想看到的不是單點採用。大約八年前中國把 open source first 寫進國家政策，政府和企业有具體動作。要跟中國已有的開放 AI 競爭，得看那整個版圖。三四週前英國 AI 部長 Kanishka Narayanan 說英國要成為 open source AI 的家。她問這要怎麼發生：向中國學，再多做一點，並看這八年世界怎麼變。她要的包括能力和技能、一個國家級的基金會，以及一個能替英國企業持有像 MCP 這種標準、或 agent、語言模型技術的機構。她覺得每個國家都會出現類似模式。當週有報導把 Linux Foundation 寫得像美國的國家基金會，談美國想抓住 AI 標準。中國也會做。德國和法國已朝這方向走，但還沒做完。擋路的是理解，以及能叫停的人。大約一年前，JPMorgan 的 CIO 說自己的供應鏈還不是 agentic 的用法，字幕聽成 user agentic。過去三十個月的報導讓很多人害怕。人怕失業就會抵抗。她要看的是工作的未來、影響可能沒有恐慌那麼快，以及訓練。

[36:49](https://www.youtube.com/watch?v=t58F68SElhE&t=2209s) OpenUK 接下來有持續的報告。去年底為了二月的 AI Impact Summit 做了第一份國際報告，對象是印度，人也去了。非洲報告這週出。他們在和中國開源生態系做一份中國報告，不只開源，也看 AI。國會有活動；上週才和保守黨的反對黨部長談開源需要什麼。主權會被談得更多。State of Open 今年巡迴：6 月 5 日愛丁堡 NatWest，7 月 8 日劍橋 Pembroke College，秋天大概再三場。獎項復活節後開放提名，大約十到十二個類別，11 月 5 日在 House of Commons。她提醒這天是 Guy Fawkes 試圖炸掉國會的週年。網站是 openuk.uk，研討會是 stateofopencon.com，人在 LinkedIn。Simon 提過一份他在國會看過的 DORA 與 OpenUK 報告。
