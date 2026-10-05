# What GitHub's Ex-CEO Says About the Future of Developer Skills

Guy Podjarny 訪問 Thomas Dohmke。他不久前還是 GitHub CEO，現在回到新創，公司還沒有名字被講出來。片長約 56 分 5 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Snyk 聽成 sneak、把 Nat Friedman 聽成 Ned Freiedman、把 Claude Code 聽成 cloud code、把 COBOL 聽成 cobalt、把 Tessl 聽成 Tesla，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=VwJnowQ7Iio)

## 一句話

新創和大公司不在同一個量級，但做的是同一塊產品。誰都預測不了一兩年後開發長什麼樣，只知道既有的幾十億、甚至幾兆行 code 還要維護。未來工程師最大的技能不是穩在一種語言上，而是會學、會判斷、會把大問題拆小，並且知道哪一段該交給 agent、哪一段該自己改。只靠 vibe coding、不看幕後的公司，他覺得會把錢燒完。

## 不是同一個拳擊量級

[1:29](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=89s) 兩人是 2018 年夏天認識的。Microsoft 已宣布要收購 GitHub。Thomas 在收購團隊裡，一起的有後來當上 GitHub CEO 的 Nat Friedman，以及現在的產品負責人 Mario Rodriguez。簽約之後他們在想還能把什麼加進 GitHub。名單上有 Snyk。見面在當時 Nat 辦公室所在的 Twitter 大樓。Guy 還曾在成交前把 Nat 請到 Snyk 的全員會。那段時間他們只能探、不能動，因為在等收購完成，投資人則用更高的估值插進來。最後沒有成。GitHub 後來做出很活的安全業務，Snyk 也長得不錯。2018 年大家覺得 GitHub 75 億美元偏貴。他說以 2025 年的開發工具估值看，那幾乎像一輪 seed。

[5:03](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=303s) 創新兩邊都有，他用運動來比。F1 現在是 McLaren，前四年是 Red Bull。冠軍車隊的人會被挖走，因為別處有當車隊老闆的路。大公司打的是另一場。Microsoft 每年要雙位數成長，那是雙位數的十億美元淨新增，他說是要找到 300 到 400 億的淨新增營收，而且是在續約之上。小新創開心的是跑到第一個 100 萬、200 萬或 1000 萬的 run rate。拳擊不是同一個量級。但產品和功能在同一個空間：大公司在加 AI、在做 agent。中間是 AI studio，OpenAI 很大，Anthropic 也大，尺寸差很多，Mistral、Black Forest Labs 在中間。再外面是從第一天就 AI native 的公司。那種開發者早上不開 Jira，運氣好是 GitHub issues，更運氣是 Linear。他們開終端機，開 Claude Code、Amp 或 Gemini CLI，第一步是跟 agent 腦力激盪。大公司的既有 codebase 則是 Snyk 的發現、產品 backlog、技術債、on call。兩邊都會用自己的方式創新。

[9:15](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=555s) Guy 在創 Snyk 之前是 Akamai 的 CTO。那裡的商業論述是：幾年內能不能很快變成一億美元 ARR，不然很難在體系裡說得通。AI 讓人覺得短時間就能變成十億美元的生意，所以 incumbent 內部也敢押。Thomas 說營收和企業銷售也常被拿來當藉口，產品不再被顧，體驗可以很差。他在新公司想接一個工具的 SSO，連 Google identity 都接不上。大家在搶清醒的時間：Netflix、YouTube、工作、樂高。睡眠只能砍這麼多。新創排優先順序容易得多，尤其還沒有客戶。公司全員遠端，最近第一次面對面是在新加坡。他開場說，這會是這家公司最快樂的時候：沒有客戶、沒有 production、沒有人 on call，只在做原型。一年後若有產品、有人付錢，就要在想做的事和真正帶動生意的事之間取捨。Agent 會把不想做的接走。Dependabot 那類安全發現可以讓 agent 解到你只要核准上線。技術債也是。他手邊有 Gene Kim 和 Steve Yegge 的 vibe coding 書，裡面有人走進二三十年的 codebase，把從來沒動力碰的 issue 燒完，於是有時間去做酷的東西。

## 蜜月很短，終端機裡的平行 agent 誰都沒料到

[14:17](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=857s) 蜜月不能待太久。待越久，越焦慮自己做的東西沒人要。得上線，才有 Amazon 說的 flywheel。若靠名聲募到錢，錢的問題先拿掉，感覺會很好，直到面對現實。Guy 把 Tessl 最初幾個月叫蜜月：還沒有人說產品爛，也還沒有人說技術上做不到。使用者說產品很棒也很滿足。兩面是同一枚硬幣。

[14:31](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=871s) 他 2009 年離開德國 Bosch 做開發工具。Bosch 做汽車保險桿裡的超音波感測器。他在汽車業六七年，因為 iPhone SDK 和 App Store 想再當 app 開發者。後來創了 HockeyApp，給行動開發者發 beta、收 crash 和回饋，2014 年底賣給 Microsoft。距離他上次當創辦人已十一年。之後在 Microsoft 和 Nat 做 App Center，把 Xamarin Test Cloud、Xamarin Insights 和 HockeyApp 拼在一起，然後收購 GitHub。他先是 GitHub 的 VP of special projects，再當 CEO。從手機、雲、到 Copilot 和 AI，他看到開發者怎麼改變世界，也看到做法本身一直在變。他最早在九零年代初寫程式，先是一台東德電腦，再是 Commodore 64。若把 Commodore 64 給小孩，他們大概會去玩遊戲，字幕聽成 Diana Sisters，多半是那台機器上的 Giana Sisters。叫他們打 BASIC，他們會問使用者介面在哪、Copilot、Stack Overflow、Google 在哪。網路一開，就回不去。開源、手機、雲，每次都改變一切。AI 也是，而且他認為革命還在開頭。Copilot 超過四年，ChatGPT 超過三年。去年是聊天和 agent mode。今年是完整的 coding agent、code review agent、security agent。SDLC 會根本改變。新公司要探索的就是這個。

[17:31](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1051s) 老話是高估短期、低估長期。回到 2024 年 12 月，誰想得到 2025 年底開發者回到終端機：Claude Code、Gemini CLI、Codex CLI、Copilot CLI，六個或八個終端機排開，agent 平行跑，還得搞 git worktree、怎麼合併，以及別讓 agent 刪光檔案或最近 30 個 commit。預測一兩年後的人會根本猜錯。知道的只有：我們會繼續做軟體，同時維護已經在那裡的幾十億、甚至幾兆行。

## 競爭是資金理由，也是更好的產品

[19:02](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1142s) GitHub Copilot 是從 incumbent 裡長出來的創新，開出 coding assistant 這塊。Cursor 長得更快，但不是以 Copilot 停掉為代價。Anthropic 很難歸類：公司很年輕、估值很大，很多地方仍像新創。它把終端機對上 IDE 這件事翻掉。Guy 認為，若打亂的是工作方式本身，而不只是把舊流程自動化，incumbent 最難接受，因為力量都在舊做法裡。Thomas 說那是由外往內看。由內往外沒那麼慘。他常想，對 Mercedes 最好的事，是 BMW 宣布一個 Mercedes 領導層原本不願意出錢的東西，你就有理由去要預算。新聞裡 Sam Altman 宣布 code red，Google 也有，Satya 任內也有過。競爭讓生意更好玩。IDE 其實穩了十年。他 2007 或 2008 年開始用 Mac，TextMate 當時是革命，TextMate 2 等太久，轉去 Sublime，然後 VS Code 當了幾乎所有人的預設。還有 Emacs 和 Vim。現在又有真競爭：Cursor、帶 Copilot 的 VS Code、Windsurf、Google Antigravity、Kilo Code、Zed。2024 年 10 月或 11 月的 GitHub Universe，他宣布 Copilot 從單一預設模型改成多模型，當時他記得是 Claude 3 和 Gemini 1.5 Pro。現在打開是一長串，還能帶自己的模型、接 OpenRouter。

[24:18](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1458s) Guy 問 GitHub 長期像瑞士那樣跟所有 IDE 合作，VS Code 不賺錢、是給生態的。現在 Microsoft 靠提供模型、靠跑 inference 賺很多，中立就有內部張力。Thomas 說瑞士也想賺錢。Microsoft 大概是最大的平台公司。Azure AI Foundry 上不只有 OpenAI 和 Microsoft 的模型，還有 Mistral、Black Forest Labs、很多開源，也可以部署自己的。平台要的是上面有很多玩家，GPU inference、CPU、儲存都是。新創的機會是用這個規模。Guy 說 Tessl 在各家的新創計畫裡都有，因為他們都承諾到你真的拿到為止。每個 B2B 新創會走到想用 Microsoft、Amazon 或 Google 的通路和企業銷售。那些團隊的規模和本事，小公司不經歷子公司、本地辦公室、本地聚會的人力投資就達不到。企業銷售仍是關係，AI 取代不了。

## 技術債是再融資，審查該交給寫 code 的那個 agent

[29:23](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1763s) 人總想像工具會收成一套漂亮的 stack。他覺得那是工程主管的白日夢。重疊會一直在。換工具很痛，不值得為了完全標準化去花工程師的時間和錢。軟體裡熵一直在，stack 會變差，直到你投資清技術債。他當 GitHub CEO 時的笑話是：debt 這個詞不對，債應該隨時間還清。技術上我們只是再融資到下一個大事，舊債重構成新債。Guy 說商業上債叫 leverage。Thomas 比廚房：碗盤不會自己結束，除非你不吃飯，那你就死了。軟體也是，除非停止加功能。

[31:23](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1883s) 他看到的是 agent 跟 agent 協作。Guy 提過 Graphite 的 Merrill：review agent 不只要找出問題，還能當場修。若在 PR 才找得到，為什麼不能更早找到。界線在糊。Thomas 的問題是：若 code 是 Devin 寫的，為什麼把意見給人？給 Devin，讓它自己搞懂。人與人的團隊就是兩個工程師做到穩定，再來跟管理者說做完了。不要讓人變成生命週期裡的瓶頸。他轉述 Simon Willison 部落格上的意思：得習慣不是每一行都審過才上 production。一個 agent 可以 24 小時寫，再平行十個，人永遠審不完，生產力增益會被擦掉。所以下游別的流程也得自動化。

[32:54](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=1974s) 另一件被低估的是，coding agent 很會腦力激盪。他的開發者用 Claude Code 寫 code 之前，先用它搞懂一個主題、一支特別的 API、幾種實作、甚至寫架構文件。澳洲其他人還在睡，醒來就有東西可以接。這仍以人為中心：你得告訴它要做什麼。點子仍來自 product manager、工程師或創辦人。怎麼做是跟 agent 迭代。不會變成一個 agent 發明、一個實作、第三個審查並部署。Guy 說也可以讓同一個 Claude Code 換 persona、用 sub-agent、換模型。他擔心工具收成五巨頭的競爭。他要的是可組合的生態。Review 會更重要，因為你做得更少、審得更多。現在很多審查動作，包括測試，可能會消失。

## 切換幾乎免費，COBOL 不會消失

[35:58](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=2158s) Thomas 覺得比以前更可組合。今天 Claude Code，明天 Gemini CLI，星期天 Codex。IDE 和 code review agent 的切換成本幾乎是零。Code 還是放在 GitHub、GitLab 或 Bitbucket。Agent 這邊空間快到，錄這集的前一天 GPT 5.2 出來。在那之前大家說 Gemini 3 Pro 最好。等這集播出，可能又有下一個，聽眾會搞不清他們在比什麼。六個月前最好的，現在不一定。六個月後沒人預測得了。對照 React 換前端框架、GitHub Actions 換別的 CI，那些切換成本很高。

[37:48](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=2268s) Guy 挑戰：平台是為某種工作優化的。雲之前管機器的工具，管不了彈性、短命、不可變的雲。協作若發生在 agent 之間，git 和 pull request 還是不是那個點。他想的是不問平台「指派給我的工作是什麼」，而問 agent 下一步是什麼、Guy 在做什麼。Agent 像鋼鐵人的 Jarvis，底下有 sub-agent 拿技能。個人 agent 訂旅行、管行事曆、進開發環境，瀏覽器的分頁就少開了。Thomas 說同時仍有人在 mainframe 上跑 COBOL。那些專案大多沒有 DevOps、沒有 git、沒有 CI/CD、沒有 Snyk、沒有測試。它們撐著銀行、地方和聯邦政府。中間還有人在用 Windows 95 的 API 做月台上的顯示器，不是 Windows 11。光譜的一端是最前沿的人，像 Star Trek 的 Data 那樣對電腦說話，不必再上網站。這不是「AI 已經寫了 90% 的 code，舊東西都不需要」。改變是漸進的。中間有一大段工程師還得做的工作。他說接下來一個世紀都有事做。Guy 拿 Andrej Karpathy 的話對：這是 agent 的十年，不是 agent 的一年。應用安全公司像蟑螂，因為技術不會死。Guy 很樂意 Snyk 長生，他在做 Snyk 之前已在 AppSec 超過十年，看過公司聲量下降，但沒有消失。

## 會學習，並且知道哪一行不該叫 AI 改

[44:50](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=2690s) 他從大學就覺得軟體開發者的學習沒有做完的一天。沒有穩定態。覺得自己到了穩定態的人，是在計畫退休，自願或被迫。COBOL 和 IBM mainframe 不是成長機會，團隊會越來越小、工作越來越無聊。你可以因為老闆找不到願意做 COBOL 的畢業生而要更高的薪水。長期那不是穩定，是慢慢衰退到接近零。最大的技能是知道怎麼學新東西，以及怎麼把它跟你正在做的事放在一起。不是每件看起來興奮的都該跳。跳上新列車可能讓專案倒退兩年。Apple 第一次放出 Swift，很多人興奮，從 Objective-C 遷過去發現還沒準備好、更慢、下載突然胖了大約 100 MB。要會學，也要會用這十年的手藝和品味說：走這條，不走那條。

[47:03](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=2823s) 有了 agent，工程技能更要緊。把一個大問題拆小。不必大到做 Facebook，但大到你不知道要做多久。一直拆到下一個抽象層該寫哪個方法、哪些 unit test。怎麼拆自己的一天，怎麼跟隊友分。你得知道什麼能交給 agent、而且它做得有效率，什麼必須自己做，才有生產力。一直試錯，試到某次你其實知道該改哪一行 CSS 的背景色。那種一行的修改，若你清楚位置，用 AI 是傻的。你也可以故意看 agent 怎麼失敗，拿去發文。Guy 問剛出大學的人：花時間搞懂該改 CSS 的哪一行，機會成本是不是該拿去練把想做的東西講尖、練產品感覺、往 architect 或產品定義走。小孩學 AI 可能比做了十年的 senior 快。

[49:48](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=2988s) Thomas 看自己小孩交的作文，也能看到別的小孩的。誰用了 AI 一目了然。他覺得酷，尤其是截稿前趕出來的。老師大概也看得出長破折號。那些小孩還沒有工程技能，但會更快擁抱 AI。下一次他們會審輸出，再叫 AI 做成老師看不出來的版本。他認為很早、大約一年級，就該教小孩用 AI：不是考試作弊，而是迭代、修改、核對它說的是不是對的答案。下一代會是 AI native 的人，像 Gen Z 或 Gen Alpha 跟智慧手機一起長大，WhatsApp 和 Signal 很自然，而他們成長時要打市話，先過父母那關，更糟是要解釋為什麼現在該跟未來的女朋友說話。他覺得下一代生活更好，有挑戰，但是解放的、民主化的。父母沒技術背景、學校教不好，小孩仍能靠一直在的 Copilot 或 ChatGPT 學寫程式。它不評判、不說你笨、不說你三年前就該會。多笨的問題它都會答，直到你自己沒耐心。它不會沒耐心。

[52:14](https://www.youtube.com/watch?v=VwJnowQ7Iio&t=3134s) Guy 用圖像比：你不必會畫，也能引導 AI，你得知道要什麼、怎麼講、怎麼驗證。十年後工程的深度還是不是必要，他比較偏向知道要什麼、講得出來、驗得了，並放下一些寫 code 的本事。Thomas 說我們已經能認出 AI slop 的圖，糟糕的就不會再看那個 Substack 或那場簡報。這逼創作者變好。這是新手藝。十年前手藝是 Photoshop，或鉛筆。二十年前也可以說 Photoshop 取代筆和紙，結果仍有 Photoshop 專家比我們好很多。AI 圖像也會一樣。拉回軟體：商業專案長期要有利潤，最好是健康或成長的利潤。若你不懂幕後發生什麼，這不會成立。跟 agent 做出能付薪水、還有利潤的產品，需要工程技能和商業技能。夠快學會這些的公司，和以為可以把一切 vibe coding、不必留意的公司，是兩種。後者會把錢燒完，沒有競爭力，活不下來。要追他的下一階段，X 上是 Ash，LinkedIn 是 Ashtom 或全名。最近幾週在隱身做新創，比較安靜，2026 年會有更多。
