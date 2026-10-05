# GPT 5.5 Is Smarter Than Me — But I Have More Context

片長約 17 分鐘，英文手寫字幕。講者在倫敦，從舊金山飛來，現場沒有投影片，直接開 Codex app。字幕沒有說出講者姓名。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=uGc3OfEVcgE)

## 一句話

GPT 5.5 已經比多數人、也比講者自己更聰明。他說自己還能當更好的工程師，只因為手上有更多 context。Codex app 把 plugins、skills 和 computer use 接上這些 context，讓 agent 在背景做事，人還能繼續用自己的電腦。

## Codex app：並行 agent，以及 120 個 plugins

[0:22](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=22s) 他週日晚上在舊金山臨時起意，隔天落地時報名已經超過 600 人。路上問 VB 和 Jimmy 該講什麼，VB 說不要投影片，只要 vibes。於是直接打開 Codex app。

[1:07](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=67s) CLI 仍是他們愛的起點，而且開源；Codex 的 harness 也在那裡，同樣開源。App 只是另一個介面。做它的原因是開發者的螢幕很快從兩個 agent 變成很多個：Peter Steinberger 曾同時開大約 15 個來做 OpenClaw。人會搞不清哪一個 agent 在要注意力、跑在哪一台機器上。

[1:42](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=102s) App 把專案放在同一個地方，介面會依當下需要變形。他當場請它做今晚的插圖，也把放很久的 wanderlust 丟出去：升級 Next.js 和 node modules 的 dependencies，並確認沒有 security issues。這可能要 10、20、30 分鐘，他不在意，晚點再回來看。

[3:00](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=180s) 新的是 plugin catalog。一開始十幾個，現在大約 120 個，每週還在加。目的是讓 Codex 拿到大家常用工具的 context。

[3:17](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=197s) 他重講標題那句：GPT 5.5 已經更聰明，讓他還比較好的，是 context。把這些 context 給模型，它就能變成幫忙的 teammate。例子是 Gmail、Linear、bug tracker、Slack。

## Computer use 不搶你的游標

[3:47](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=227s) Computer use 當時還沒到歐洲，他仍想現場示範。他說別的實作都是 agent 在你的電腦上點，你自己就不能用了。這個版本不是。

[4:21](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=261s) 他叫 Codex 建好並跑起 app，再打開 simulator，從第一個 tab 點到第三個。用 mention 之後，電腦上的 app 也能給 Codex，不只是 Gmail 這類 plugin。送出後，agent 有自己的 cursor，他的 cursor 還在自己手上。

[5:23](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=323s) 他接著叫它看信：VB 寄來的 Codex community event，抽出今晚獲准參加的三位。它去翻 Gmail。稍後他說三位已經選出來，再叫 Chrome 開三個 tab 去拉 LinkedIn。這台 demo 筆電沒裝 Chrome extension，它改走 Chrome plugin。

[5:57](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=357s) 另一個是 in-app browser。字幕先聽成 inner browser，他接著說的是 in-app browser。做 web app 時不必只靠 Chrome dev tools 改 CSS。他在自己的 fitness app 上直接註解：把這裡改成今天的日期、這個放大、那個縮小、這裡加 animation。幾秒後他看到今天的日期出現了。

[8:03](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=483s) Chrome 在背景被控制時，他又舉 Slack：隊友說 Vercel incident 該 rotate secrets 的 keys。他叫它打開 Reminders，設一個今晚要做的提醒。游標在動，人還能繼續用電腦。這些都可以同時很多個，發生在背景。

[8:53](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=533s) 他收成一句：plugins 接上各種 context，skills 定義公司怎麼寫 code，computer use 去操作其餘的 app。雲端和本機上，Codex 都能拿到這些 context。

## 設計、遊戲，以及軟體以外的工作

[9:24](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=564s) 他承認 GPT models 做設計有一段時間不是最好，下一版他們很有信心。眼前的補法是 Build Web Apps plugin：用 image gen 先做出你看過、審過的設計，再叫 Codex 去實作。他說這是 image gen 2.0 交給 GPT 5.5 實作，而不是在看不見設計的情況下 vibe coding。字幕裡的 Imogen，上下文是 image gen。

[10:28](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=628s) 做遊戲素材時，他先取了一個字幕聽成 Sits Your Crossing 的名字，再改成 Codex Crossing，要 Animal Crossing 的感覺，但是給開發者的素材。產生圖片已含在訂閱裡，沒有另外的 API 計費。VB 在旁邊提醒了這一點。

[11:53](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=713s) 他請 Codex 生一個能玩的預設 Space Invaders，邊玩邊改。觀眾要 health bar，他加上；再改成 goblin 主題，壞人是橘色螃蟹。這段用的是 Codex Spark，跑在 Cerebras 晶片上。它比 5.5 小、沒那麼聰明，通常回得比較快。他後來覺得這個 model 快要超出 context window。遊戲被他叫做 Goblin Guard。再叫它接上無線 Xbox 手把，他說最難的是連上控制器，實作本身很快，接著他就玩起來了。

[14:00](https://www.youtube.com/watch?v=uGc3OfEVcgE&t=840s) 軟體以外也可以做。他用下載的 spreadsheet，叫 Codex 在 Google Drive 做一份舊金山房產銷售簡報，並用 image gen。他說這是 Zero Shot 做出來的整份 deck。Q&A 前他還剩一條 Super Bowl 廣告的鑰匙圈，叫 Codex 從今晚在場、而且在名單上的人裡隨機挑一個。它去看了 checked-in 的時間戳，挑到 em。
