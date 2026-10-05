# 850 PRs a Week: How Tessl Runs a Software Factory

片長約 51 分鐘，英文手寫字幕。AI Native Dev。Guy Podjarny 和 Tessl 的 Head of Product Dru，談過去兩三個月他們怎麼從 skills 走到 loops，再走到自己的 factory。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=GRixg2mdJJA)

## 一句話

他們內部一週最多大約 850 張 PR，其中大約 85% 到 90% 全程由 agents 處理。多出來的產能沒有全部拿去趕新功能。有人拿去修一致性、文案、品牌語氣、不該在的邊框。Dru 和 Guy 的主張是：factory 必須是 context centric。先寫下什麼叫正確，再把它變成會自己變好的 loop，最後人的時間花在維護這些 loops。跳過寫下來那一步，code review 會有一次多巴胺，然後停在一個小幅提升上。

## 多出來的產能，先拿去把積壓清掉

[0:00](https://www.youtube.com/watch?v=GRixg2mdJJA&t=0s) 開場的數字是一週大約 850 張 PR，85% 到 90% 全程由 agents 處理。很多人想到 software factory 會期待加速。他們看到的是，多出來的產能不會全部轉去趕功能。設計團隊有人剛合併 13 張 PR，全是修一致性、文案、brand voice，以及拿掉不該在的邊框。以前會留在 backlog 上的事，現在做得到。

[2:02](https://www.youtube.com/watch?v=GRixg2mdJJA&t=122s) Guy 說 Tessl 最讓他們興奮的，是從「幫你擁有 context」擴出去。Skill registry、把 skills 做對、最佳化，他們仍認為是這套新範式裡極大的一塊。然後是 loops，Tessl agent 上線時談過。現在愈來愈把 Tessl 想成可組合的 factory，或幫你建 factory 的平台。他們的說法是：從 skills 到 loops 到 factory，一座 context centric 的 factory。

[3:23](https://www.youtube.com/watch?v=GRixg2mdJJA&t=203s) 他們發過一支關於 Kikimora 的短紀錄片，大約 13 到 14 分鐘，製作是 Tom。Kikimora 是東歐的精靈，Dru 引用 Maria：它會在夜裡打掃你的房子，但只在你好的時候。你把房子弄亂、不尊重，它會讓事情更糟。他們覺得這很像 agents。房子有秩序，agents 給你超能力。不負責任，它們會把你交給它們的東西弄得更糟。字幕裡有一句聽成 anticipate powers。Kikimora 是他們 dark factory 的名字。這集不把紀錄片重講一遍。

## Skills 是工作單位，loops 會複利，factory 是一種工作方式

[4:45](https://www.youtube.com/watch?v=GRixg2mdJJA&t=285s) Dru 先定義，因為兩個星期後詞就會變。Skills 今年初變流行，有人叫 plugins。他們說 skills 時，指的是一個工作單位：要完成的 workflow，或要 agents 遵守的 policy、standard。裡面包括 hooks、MCP tools，任何可以捆進 plugin 的東西。Skills 只是最流行的叫法，他們互換著用。

[5:35](https://www.youtube.com/watch?v=GRixg2mdJJA&t=335s) Loops 是自動化了的 skills。至少啟動時沒有人立刻介入。跑的時候通常有一個 meta process：這一次讓下一次更好。於是有複利。Agents 把生產力往上拐，比線性快。所以叫 loop：從一次 agent workflow，回到起點時帶著某種學習。第二次或第一百次該比第一次好。Loops 是你第一次看見軌跡真的起飛的地方。

[6:23](https://www.youtube.com/watch?v=GRixg2mdJJA&t=383s) Factory 在很多意義上是一種工作方式。幾乎全部開發都移到建立、維護、監控 loops。Loops 產出大部分軟體，或產品。一種看法是：factory 裡有一些 code，那些 code 大多是 loops；交給使用者的產品也是 code。人的時間花在哪？移到 factory 之後，大多花在維護 loops、想怎麼讓它們更好。Guy 說這就是整個 SDLC。Loops 像是 pipeline 的演化。他想讓 factory development lifecycle 這個詞成立，縮成 FDLC。還沒流行。

[7:21](https://www.youtube.com/watch?v=GRixg2mdJJA&t=441s) Tessl 今年初走同一條路。內部開發一開始非常 skills driven。寫下什麼叫好、code review 該怎麼運作、做 CLI 和做 UI 時有什麼不同，就是把事情寫下來。覺得那個位置夠了，才開始把工作交給 agents。自動化愈來愈多任務，人不必按按鈕或在文字框裡打字才能啟動。第一兩個 loops 一就位，立刻發現這會很快失控，得換一種工作方式，把解法烘進問題本身。於是決定做 full factory：基本上所有工作、所有 PR 由 agents 建立。人更專注於塑造工作，也就是建 issues；以及審查，看 PR 被開出來。愈來愈多 code 讓 agents review，人只投在高槓桿的點。他們做的軟體工程是可觀測性。監控在 loops 裡。常常是做 loops 來監控 loops，或做 dashboard 當 loops 的 control plane。內部走到的數字，是一週高峰大約 850 張 PR，大約 85% 到 90% 全程由 agents 處理。

[9:34](https://www.youtube.com/watch?v=GRixg2mdJJA&t=574s) Guy 補，傾斜進 factory 之前，感覺是有很多高自動化的環境，但彼此分開。有的人自動化得很深，有的人還用比較標準的方式。自動化的那些人也是在迭代自己的工作，相當孤立。Factory 也是從單人到多人、進到協作的路。從安全看，東西開始在雲上、在定義好的 workflows 裡跑，你才看得到裝了什麼、找得到風險、關得住。系統是透明的，什麼都觀察得到。他曾經以為 cloud IDEs 會更早流行：後面有強的機器，任何地方都能做。結果沒有真正流行，只是有人用。等到 agentic workflows、人主要透過聊天互動，開發者的機器比較像《駭客任務》和更早電影裡的駭客畫面，這件事才說得通。管理的角度看，速度在複利，組織在往裡靠，GTM 也更多在裡面。

[11:27](https://www.youtube.com/watch?v=GRixg2mdJJA&t=687s) 功能速度是本來就在瞄準的。Dru 說另外兩件，事先不一定猜得到。一個是品質變好。多出來的產能沒有全部拿去趕新功能。就是開頭那 13 張 PR。另一個是 fungibility。他說這是很無聊的商業用詞：每個人都能做一點每一件事。設計師開的 PR 會被合併。GTM 可以改行銷網站，不必等工程。工程可以自己寫 specs。人去做當下槓桿高的事，不必想誰有空接手。

## 先定義什麼叫正確，否則生日禮物每年都會失望

[12:45](https://www.youtube.com/watch?v=GRixg2mdJJA&t=765s) Factories 很流行，很多公司在談自己的路。同時有懷疑：品質軟體是不是一個流程、準備好了沒有。很多情緒是瓶頸從生產 code 移到審查 code，生出來的 code 到底好不好。Tessl 長久以來用 specs、context、skills 看世界。根是先定義 spec：你要做什麼。核心信念是，要自動化一件事，得先坐下來定義什麼叫正確。

[13:41](https://www.youtube.com/watch?v=GRixg2mdJJA&t=821s) Guy 從一開始就用生日當例子。你生日想要什麼？不知道，你決定，vibe 一下。你可能滿意，也可能不。每年都用這個方式買禮物，有些會失望。他覺得一批軟體就是這樣。Context 是核心，是操作公司和 workflows 的手冊。他們談 factory 時的看法是：它該是 context centric。所以才反覆說 skills、loops、factory。

[14:32](https://www.youtube.com/watch?v=GRixg2mdJJA&t=872s) 一兩個月前他們上了 Tessl agent，幫你建 loops。跑它，它幫你找系統裡的自動化、改進、最佳化，然後做出一個會一再跑的 loop。團隊裡的 Tom 做了一個自動化，Guy 記不得確切流程，記得大概是 test coverage 那一類。同一件事用普通的 Claude、用 Tessl、再用另一個和 factory 有關的 agent 各做一次。另外兩個其實把解做出來了，cookie cutter 的解還快一點，因為它們寫了一大堆 code，產出主要是做出跑那些測試的 pipeline。Tessl agent 的做法幾乎不是故意的，就是他們的世界觀：先做出一串邏輯，什麼叫正確的定義、它會怎麼運作的 specs，再在上面建。更是 context driven。多花了一點時間，更強。有些地方更有韌性、更好改，也能找到更多情況並讓它們運作。多一點力氣，但之後更能演進。Context centric 深到他們怎麼建東西裡，於是自然長出來。

## Code review 的第一下很爽，兩週後就停了

[16:40](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1000s) Dru 說 code review 既說明 context 為什麼關鍵，也離大家很近。多數人採用的方式是：外面有很好的工具，裝一個 GitHub app，按幾個按鈕，agents 就在 review PR。找到 bug，也許合併更快，或至少抓到更多問題。感覺很好，像多巴胺。AI 常常很容易到第一個 demo、第一個哇。怎麼從那裡擴。很多人覺得我在做 agentic code review，我真的活在裡面。兩三週後發現：多找到幾個 bug，或合併快一點，然後沒有再變。小幅提升，不是指數、不是複利。又卡住。Code 品質仍是問題，PR review 仍是問題。

[17:56](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1076s) Tessl 的哲學是，你撞牆是因為跳過了。想練大肌肉卻沒有練，想健康卻不吃蔬菜。有一定程度你得寫下什麼叫好。我在乎什麼，品質在這個 codebase 裡怎麼顯現。跳過的話，工具只是說別擔心，我來 review。最後會碰到兩個大問題。第一，你會想在別處用那些標準。Code review 適合在最後抓。若要省成本、或功能做得更快，做功能的時候就該讓 agent 看見標準，用正確的方式寫。不是每件事都會被 review 抓到。你也想要定期的自動化掃 codebase：有沒有不符合標準、漏過去、或累積起來、需要拉回來修的。想在很多地方用。沒寫下來，就不能重用。新專案、另一個 repo、有人在測原型，標準怎麼帶過去，讓他們馬上開始得對。寫下來之後，也比較好推理、改進，甚至為 codebase 的不同部分做專門版本。前端很在乎 ARIA、無障礙、邊框的嵌套對不對。後端 PR 那些都不重要，不要浪費時間和 tokens，去看脆弱性，或某些元件有沒有被重用。

[20:02](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1202s) 這種特異性，在走向 factory 時愈來愈重要。Factory 的量會逼你把人移出 code review 的迴圈。通用的 code review 不會到 100% 的品質。你得能說：這個元件，要檢查的是這些。沒寫下來就做不到。Guy 說，正確可以寫到你要的粒度。有時跨產品棧共享，review 和寫 code 都要用，跨 repos。有時更細，這個子目錄。他開玩笑：Dru 寫 code 時，要檢查他沒有又做了某件 X。Factory 得往更高的自主走，那必須帶著什麼叫正確的定義，所以是 skill centric。

## 掃過所有 repo，找出過期、重複、和 code 已經漂走的 context

[22:21](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1341s) 上次談的時候，Tessl agent 是大塊：用它做 loops，loops 再回頭幫你找該寫下來的新 context。之後加了一個大功能，他們叫 Skills Inventory，也叫 Context Inventory。是命令列，也是可以裝到整個 source estate、所有 repos 的 GitHub app。它掃描、找出所有餵給 agents 的 context。最常見是 skills，也可以是 AGENTS.md、plugin marketplaces 這類。然後幫你推理。發現包括過期的 context：這個 skill 是從 Anthropic Marketplace 裝的，現在落後四個版本，要不要更新。內部也一樣：同一個 skill 出現在五個地方，看起來真正在維護的是這個源頭，要不要把下游版本都連過去並更新。也可以找重複的 context：幾個人在解同一個問題，彼此不知道。幫你收成一個，然後為所有人改進。也看過時的：你寫了怎麼對後端做貢獻的 skill，code 已經漂離那個 skill。找出來，讓它跟上。他們會繼續投：持續掃 code estate，找出 agents 在用的 context，抽出來，告訴你怎麼改進、重用、分享。重複、過時，以及怎麼提高關鍵 skills 的表現和品質，是平台上的一大步。

[24:51](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1491s) Guy 說 inventory 他們以為是個快功能：在 repos 裡找叫某個名字的檔，再跑他們已有的 skill review，打分。然後發現這些看起來在做同一件事。人想 skill 的點子時想像力很貧乏，重複很多，這說得通，但造成問題。不只浪費，因為知識沒有積在一個地方，還造成系統裡的不一致和沒對齊。於是有發現對的 skill 的問題。他們加了 recommended skills，推你去用對的。安全評估那些 skills 可不可信，已經做了一陣子。還有可行動性，以及做廣泛掃描的平台團隊和擁有 repos 的人之間的動態。Inventory 變成進到 Tessl 那些工具的入口：安全政策、治理、要求 brand voice 或 code review 的 skill 在每個 repo 裡。現在可以找到那些 skills 並設政策。它變成有人在想怎麼跨組織管 skills 時的 control plane。他用自己來自的安全世界比：Snyk 是掃所有 repos、找所有 dependencies，再深進哪些有漏洞，立刻有可見性。雲的 security posture management，CSPM，Wiz 這類以此聞名。類似。

[27:07](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1627s) 他們也把支援伸出工程以外。Context 盤點完之後，可以版本化、散佈、部署給 GTM、sales、support。內部也在用。Guy 特別喜歡和 marketplace 同步。人喜歡 Claude marketplace 的方便，推到 Cowork 或其他地方，但不想被 Anthropic 綁住。OpenAI、ChatGPT 的 marketplaces 呢。字幕有一句沒聽清。在 Tessl registry 集中管，再同步到對的地方，他覺得很吸引：與模型無關、有版本的生命週期、防止退步。現在非開發者也用得到，不必教 sales 團隊 git workflows。

## 寫了 markdown，不代表 agent 會照做

[28:23](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1703s) 他們自己的 factory 裡發現，skills 真的是一個 workflow 的 code，是什麼叫好的那份 code。那是你想寫下什麼重要、agents 會怎麼看的介面。但每個人都想要多一點把握：我寫下來了，可是 agents 不必遵守 markdown。它真的做了嗎。Verifiers 是他們在 Tessl 做的東西。可以想成把 skills 變成、或從它們做出非常聚焦、高準確、很快、很便宜的 LLM as judge 工具。例子：一個 skill 說所有前端元件都必須有 ARIA attributes。從它生成一個 verifier。很簡單的情況：每個改過的 TSX 或 JSX 檔，掃描所有 React 元件，問它們有沒有 ARIA。Prompt 很簡單。當 judge 的 LLM 可以很小、很便宜，實際上每次都對。快到、便宜到可以放進 CI。他們在 Tessl 就是這樣做。於是你得到一個 skill 的執行那一半。寫下什麼叫好、什麼叫成功，再生成 verifiers 放進 CI/CD，才知道 skills 有被遵守。他們愈來愈靠這個。正在做的是：一建立 skill 就為它建 verifiers，讓執行感覺是確定的。這把人拉回軟體開發裡習慣的那個世界。

[30:27](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1827s) Guy 把它看成 trust but verify。跑 agent、給指令、信任、得放掉一些。然後建 verifiers。Verifiers 還在成形。可以拿 agent 的動作對 logs，可以查它做了什麼的產出。可以是確定性的，也可以是 judge。他認為它們會和 skill 並行走：context 是你要它做什麼，verifiers 是檢查它有沒有真的做。

[31:09](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1869s) Evals 又有人感興趣。它們比較像純粹主義者的領域，當時很多人在 vibe。世界成熟了，人碰到那些難關。坐下來把所有路徑寫完，可能讓人害怕。他們大約三個月前開始擁抱的解鎖是：很多正確性其實可以從歷史行為抽出來，然後編成、抓住、再迭代。Verifiers 和 evals 愈來愈是這樣抽出來的，Tessl agent 的例子也是。不是你得痛苦地坐下來把所有指令寫完。若有一件事你在 review、你擁有，那就該是你的指令的領域。你愈審查、愈信任那套指令和那些 verifiers，就能給 agents 愈多自主，得到愈多價值。

[32:34](https://www.youtube.com/watch?v=GRixg2mdJJA&t=1954s) Dru 說 Tessl agent 的存在，是讓這件事不要像去健身房或吃蔬菜。你可以把它指向 repo、PR 歷史、tickets、Slack，任何你要的。它的工作就是把 context 抽出來、抓住。不是按一顆按鈕就得到 code review，也不是花三週讓整個團隊看過去三個月的 code review 留言、寫一份標準文件、再從那裡演進。很容易開始，然後隨時間變好。Loops 從這裡進來。

## Loop 把 skill 磨利，code review 只是其中一條

[33:55](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2035s) Guy 說他們幫客戶做出很好的 context，但公司的做法會演進。若不做 loops、不做 factory，那份精心做的 context 或那些好 skills，你未必有裝備去用到好處。Tessl agent 的起心是也幫你做那些 loops。Code review 是例子：定義什麼叫正確，把它當成 skill 演進、改進，得到更好的 review。系統裡很多自動化本來就該反覆做。他們在做兩類維護用的 loops。一類是對軟體的維護：找 flaky tests 並修、定期看架構、補測試覆蓋、處理 dependency 升級。這些都可以由 skill 驅動，Tessl agent 很容易幫你裝好，再去最佳化。對一個組織不是大工程。不必怕 factory。一次一個，而且始終以 skill 為本，所以你擁有核心。可以先手動，確認能動，把 skill 跑幾次，再變成 loop。也可以把它拉回來。人在駕駛座。

[35:51](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2151s) 另一類是最佳化的 loop。Tessl agent 幫你設 skill 並跑它。幕後不那麼顯而易見的是，一開始跑，就需要幾樣基本的東西。要能跑 skill 並留下執行的 logs。要有一個集中的地方改模型，例如跑了一批 evals 之後知道可以用便宜的模型，就相對容易地改。Tessl projects 那類基礎設施在支撐建立和跑這些 loops。他強調他們仍把世界看成 skill centric。Loop 最後做的是把一個 skill 磨利，也許外面有一個 harness。Skill 用寬的意思。磨利之後可以在很多地方用，不必只用在那一個 loop 裡。

[37:17](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2237s) 他們上了 Tessl code review，當作一個專門的 loop，也是怎麼做一條好 loop 的例子之一。另有專門的影片。核心是他們對 context driven code review 的立場：它是 context driven factory 裡你會用的一條 loop。他們自己有過一個 code review 工具，現在仍喜歡，仍是好工具。但愈走愈深進 factory，就無法複利，到不了他們要的「花更少時間 review code」。退一步想缺什麼。第一，要把標準左移：code review 裡發生的事，開發的時候也要發生。第二，要有信心，從縫裡漏過去的會被抓到。所以要有 code review 之後的自動 loops，去找漏掉的。所有進 code review 的標準都要寫成文件、分開，才能在別處用。Tessl code review 的核心是由 skills 驅動。他們叫 lenses。你可以給任意多個 skills，不只一個，把 codebase 裡某種「好」編成規則。可以說這些 lenses 適用哪些檔、哪些檔案 pattern。和其他 code review 工具一樣，用 GitHub app 裝好。每次 PR 開出來，依檔案 pattern 觸發對的 lenses，review 你的 code。但現在它是一組 skills。所以也可以在 agent 開發時給它，或給維護用的 agents，或給掃 codebase 的自動化。可以在很多地方重用。它是你擁有的東西，接到 Tessl 其餘的 context 平台。可以評估這個 code review skill、最佳化、跨 repos 給不同團隊分享。它也開始回餵 context 平台。他們學到 code review 是「哪裡出了問題」很富的來源：缺哪些 skills、哪些 skills 沒在作用。Review 在跑的時候，不只讓 review 變好，也讓 codebase 的 context 變好。它在找缺的 context，或沒被觸發、沒有你要的效果的 skills，並建議怎麼改，好讓以後不必在 code review 才抓到。Guy 說，你要這些東西彼此接上。開發用的 context 和 code review 的標準不該分開。要互相回餵，才有複利。

[40:44](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2444s) 他用人類比。團隊裡的開發者做 peer review。他們 review 時拿得到的知識，和他們建造時的知識是同一份。Loop 像是有人收到一則留言，內化，回來說我們要不要為這件事做一個標準或文件。下一個人來就有。對他們來說下一個人是下一個 agent。和外面那些通用、很強的 code review 工具比，他認為關鍵差別是你擁有它。是你的 skills、你的調整。可以收到你的特定需要：不只看什麼，還有掃描多深、不同模型花多少。他們對此做過一些研究。因為這樣收過，它其實就更好。他們有資料，在自己的系統裡看過。他不認為是因為有什麼了不起的演算法改進。大概只是擁有它的副作用。找到更多問題、找得更快、噪音更少。特異性是所有品質的尺。任務很具體、指令清楚，會好過通用的「怎麼找 code smells」。第三，它是通往 factory 的路。說 code review 時人會想到 pull request。若你在跑一個 agent workflow，或一座拿 ticket 去實作的 factory，不必等它被 check in。把那個 skill 拿來，把 review 當成 factory 的一部分跑。

## 每間公司該擁有自己的 factory，而且它不是終點

[43:13](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2593s) Factory 對他們仍比較新生。因為他們是陪公司走這段。比較立即的需要是 skills，然後 loops。現在才進到更寬的 factory。從客戶和自己的 factory 學到：要更多零件，factory 才跑得順。Dru 說 context centric factory 他會像壞掉的唱片。你要從寫下 workflow、什麼叫好、什麼叫成功開始。但不能停在那裡。一個很好的 skill，你仍得手動跑，或貼到所有想用的地方，就拿不到寫下來的價值。客戶一般來說，現在需要軌道或管線，把那個 context 部署出去，以自動化的方式替你做愈來愈多工作。進到這個世界之後，建 factory 比較像連續體，不是終態。不是做了幾個 loops，兩個月後就完成。你會一直做 loops，直到 loops 多到你大部分工作是在維護它們、以及做 loops 來觀察它們。愈來愈 loopy，然後無縫變成 factory 的工作。會是混著的。

[45:11](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2711s) 為了這個，第一個做出來的是 automations 平台。把你造好的 context 部署成依排程跑。很快會有 webhooks 和更多自動觸發。你已經做了 workflow、定義了標準。Automations 讓你說每晚跑這個 workflow，或給它存取。平台很大一塊是控制它跑的環境。這個 workflow 需要 Slack、需要 Notion，然後每週五跑。可以組在一起。它由他們已有的 context 工具驅動。你可以評估那個 workflow，挑最便宜、品質仍夠、不會付太多的模型。前半是 context 讓自動化真的能動。後半是 automations 平台接回 context 平台。那些執行會留下 logs。你可以再做自動化去看那些 logs，依真實使用改進 skill。它也接到其餘的 context 平台：這些 automations 預設是多人的。像你能看見 repo 裡所有 skills 一樣，你能看見團隊做的所有 automations，可以分享，可以設權限。

[47:02](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2822s) Guy 要強調的是，他們認為每間公司都該擁有自己的 factory。事實上會有複數的 factories：不同 repos、事業單位、或區段。Factory 是你該擁有的東西。它是你對什麼叫正確的客製定義，是新的軟體工程。那不表示每一塊都該自己造。他們當工具提供者、這個 agent 時代的促成者，工作是把一批東西給你，讓很多事變簡單。這些零件來自他們認為可重用的部分：可觀測性；當然還有 context 的全部，抓住它、評估它；以及排程、存取控制、dashboard 和畫面這類公用。什麼樣的 dashboard 或 factory 才有效，該學什麼。他們的工作是把產業的學習和自己的學習收起來，把各處重複的工作抓住。Factory 的零件目前仍相對少。還有一個世界要建，而且是故意的。他們和客戶一起前進。很多客戶想建自己的 factory。有些東西真的該是客製零件。他們會幫忙建那些零件。再強調一次：factory 該是 skills centric、context centric，從你對正確的軟體開發的定義開始。他們想當的是一個 SDLC 平台，有一連串零件幫你套用你的開發流程。那就是 Tessl：幫你建 factory、讓它演進，也在過程裡幫你學。

[49:23](https://www.youtube.com/watch?v=GRixg2mdJJA&t=2963s) 發生了很多事。每週在看這週要來什麼。團隊被授權，在做零件、和客戶工作。下一週，以前可能是一季的工作，做完了。接著做什麼。感覺不能眨眼，興奮，也讓人卻步。若這段有趣，他希望人去試擴大後的 Tessl。Skill review、evals，以及做了很久的那些零件仍可以跑。他們對 Tessl agent、用它來做 loops 的採用很興奮。也可以把 Tessl 當平台，去建一座更寬的、context centric 的 factory。他們很面向社群。試了之後，也想聽人對這套哲學的看法：factory 該漸進地建，從 skills 到 loops，再到 factory。
