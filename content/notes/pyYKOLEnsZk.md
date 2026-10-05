# Hannah Foxwell - The Reinvention of the Dev Team - AI Native DevCon June 2026

AI Native DevCon，六月場，一天接近尾聲。片長約 35 分鐘，英文手寫字幕。講者 Hannah Foxwell，獨立顧問、作者，做「AI for the Rest of Us」，給各種角色和背景的人做比較好接近的 AI 學習。主持人介紹時把名字和題目說亂了，她當場訂正：這一場不講 AI 工具。她要講的是 agentic software development 對團隊、對我們怎麼組織自己，代表什麼。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=pyYKOLEnsZk)

## 一句話

她進科技業以來，每個主管都在追 velocity，甚至用 story points 量。現在那個速度到了，很多團隊還不知道拿它怎麼辦。她用三個不會因為 coding agents 變強就失效的錨來走：做值得做的東西、速度需要安全、人重要。對的答案不是把更多東西做得更快。產品決策、上線路徑、以及還能不能讓人可持續地值班，會先爆開。

## 速度已經超過「做什麼」的決策

[1:42](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=102s) 她經歷過會改變速度的轉型。雲端轉型之後，不用再等幾週才有一台伺服器跑軟體。DevOps 把上線路徑自動化，不用再走一週的測試週期。每一次都帶來新的組織難題、新的成功模式。兩三年前你還會在台上講 developer experience、developer productivity，還有整場研討會圍繞它們。那段對話安靜了。速度到手了，接下來要搞清楚拿它做什麼。

[3:20](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=200s) 一張投影片借自 Luke Marsden。字幕寫成 identity coding 的成熟度：從 narrow IDE agent 到第八級的 agent orchestrator，例如 Gas Town。停在第 2 或第 3 級完全正常。她不認識多少人真的在第八級，更沒有人能有說服力地說自己是安全地在做。今年稍早 Cursor 寫軟體開發的第三個時代：在他們平台上，agentic task 開始超過 tab complete。團隊做不做是一回事，這已是軟體被寫出來的方式。她的三個錨是：做值得做的東西、速度需要安全、人重要。

[5:25](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=325s) 第一錨是追 outcome，不追 task。要解一個問題，而且問題要清楚。Code 是怎麼解，不是解的是什麼。典型組織是：使用者有問題，有人把問題翻成 requirements，開發者用 code 交付，產品送出去，使用者受益，做得好就成一門生意。使用者的問題永遠多到一個團隊解不完，所以要過濾。Product manager 濾掉雜訊，盡量從產品擠出價值，決定做什麼、不做什麼。這件事沒變。變的是解題的速度。她看到的是產品這邊的 back pressure：決策和分析的速度，跟不上典型團隊寫軟體的速度。對的答案不是做得更多、更快。每個點子、每個使用者請求都答應，產品會腫，體驗變差，最後產品受害。

[7:28](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=448s) 這一行新的事實是：用真的原型測想法，變得愈來愈便宜。她坐過產品，也坐過工程，談過「下一件做什麼」。當產品人時，手上有三年的 backlog，很難正當化花工夫做一個原型。那不再成立。可以又快又便宜地做原型。

她看到幾種做法。[8:28](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=508s) Vibe coding 的 product manager 自己做原型、自己測，流到開發團隊的工作已經被一個真的能跑的原型驗證過。後排就有人是這種 PM。若 PM 不習慣做原型，就把開發者往前推，更貼近使用者、更探索，和產品一起確認做的是對的東西，證明有價值之後，其餘的人再做成正式功能。

Forward deployed engineer 不是 sales engineer，也不是 solution architect。是一個有權限的工程師，跟使用者並肩坐。看到產品缺口，就有權修，把價值交給那個使用者。回饋迴圈被壓得很短。就在兩三週前，Google 宣布要建立這項能力，讓 forward deployed engineers 去做他們的 AI 產品。

[10:02](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=602s) 另一個壓短使用者和工程師距離的角色是 product engineer。incident.io 有文章在寫這個角色，字幕中間有一段時間碼黏進去。這些工程師改善產品不必先問 product manager。若你做的產品就是給軟體開發者用，這特別有效，因為同理心本來就在，你就是那個使用者。incident.io 就是在做給軟體工程師的產品，所以他們有權自己去改。

## 六到八個工程師加一個 PM，她覺得已經不平衡

[10:41](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=641s) 她合作的新創裡，有一家拿了 pre-seed，雇了典型的工程團隊，六個工程師。很快就沒有夠好的工作可以交。她要挑戰現在所謂正常的開發團隊：大約 6 到 8 個工程師、一個 PM。感覺不平衡，瓶頸尤其在決策。有人在試不同比例，兩個開發者對一個 product manager。她看到一家公司正在實驗，字幕寫成 NPM，用這個不習慣的比例，看能不能放出更多價值，也就是每個開發者旁邊放更多產品的人。

[11:46](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=706s) 今年稍早，Andrew Noon 在 Davos 的一場高峰會上說，典型團隊也許會變成兩個產品的人對一個開發者，因為決策夠快，一個開發者追得上兩個 PM 推進的 backlog。她說自己不知道，也不是上台來背書任何一種。她只是在講別人為了把 agent 開發的速度用起來，正在試什麼。

一家顧問公司的 CTO 看得到很多團隊。他們多半沒有縮編，但期待產出高很多。只有兩、三家是因為覺得人太多而故意縮小。這只是一個樣本。新聞上的裁員她不看成必然要減人頭，而是人要在對的位置做對的工作。動態已經根本改變。

[13:16](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=796s) 去年她幫新創，今年想自己做。產品是一個管理 container base image 的平台，字幕後來叫它 BIM。假設是 zero-CVE 的 base image（字幕寫成 zero CV）會變成新的常態，多數組織在不久的將來會從現在用的 image 換過去。換的時候，何不有一個平台幫你自動化。他們是兩個人，一個開發者對一個產品的人。她戴產品的帽子，很具體地感覺到多出來的速度有多痛。

他們給自己兩週做 MVP、第一個迭代。第一天決定那週要做什麼，午餐前就做完了。第二天她要搭火車去倫敦，跟 Stu 聊該做什麼，人還在月台上，收到簡訊：11 點，好了。她會幻想工作若只存在於早上九點到十一點、其餘時間都是自己的，該有多好。這場會裡好幾場演講的共同主題是：速度會讓人更有野心，也必須更有野心。她得把一整套產品工具扔掉，包括狠心排優先順序、把功能切薄。不能只盯一件事，得想得遠得多：這個產品的終點、她希望它整個怎麼運作。

[15:36](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=936s) 兩週用來測一個想法。他們在 KubeCon 測，反應很好，於是做了一個有依據的決定：再多投時間。她很興奮，因為每個想法都能測，決策更有資訊。不用去敲 VC 的門，只說我有個好點子。她真的做出來，並且測過它是個好點子。

[16:26](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=986s) 她留下 empowered product teams：幫使用者不必先請求許可。跟真實使用者的快速回饋是超能力，問題本身得真的懂。當每個人都能很快地做，UX 和 usability 會變成差異。丟掉 two-pizza team 和六個月的 roadmap。今年稍早有人把團隊叫做 teeny tiny tapas team，小碟，她很喜歡。正在試的是 forward-deployed engineer、做開發者工具時很有力的 product engineer、快點做原型、壞點子快點失敗，以及更小的團隊和對的人數比。

## 寫完 code 之後，不能在上線前撞車

[17:45](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1065s) 第二錨是速度需要安全。可以很快，也可以把東西打破，使用者不會謝你。上線路徑非常重要。pipeline、以及支撐它們的平台怎麼演進，會變成差異。你若已經有這些能力，就能從 agentic software development 放出很多價值。她在幾個地方看到的是：從想法到上線本來順暢，code 寫完、價值還沒交到使用者手上，中間變成一場車禍。路徑上只要有手動步驟，就會堆積。Code review 會，測試套件也會。瓶頸只是換地方。要真的用上 AI 來做軟體開發，就得投資上線路徑、pipeline、自動化。高信心永遠需要測試。想要又快又有信心，就得把測試自動化。

[19:19](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1159s) 她喜歡 AWS 去年的一篇文章，事情也許已經變了。他們為了把多出來的量和速度安全送進生產，得把上線路徑整個重想。組織若還沒畫這條路、找瓶頸，問題今天也許還沒出現，她覺得終究會。好消息是 AI 非常會寫測試。路徑上的手動或慢測試，正適合用 AI 來補。JP Morgan 用 AI 做持續的元件測試，覆蓋更好，就能把更多變更安全送進生產。今天的團隊不一定人人都該做功能，可以有人看 pipeline、有人看測試覆蓋。

[21:05](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1265s) 她的經驗是，day two 的成本永遠大於 day one（字幕寫成 cost of data）。把一個有真實使用者的應用擴充並維護下去，長期比把第一版交到使用者手上貴得多。這件事講得不夠。使用者也在乎。不會有人提需求說「不要送出漏洞」，但他們期待你做到。可靠性出問題會上新聞，尤其你在一個熱門平台上。必須把速度和可靠性放在一起。使用者也許不在乎你一個月送出 100 個功能。他們在乎你說要做的那件事，你可靠地、安全地做了。

很少有客戶來敲你的門說請務必安全，他們只是期待你這樣。好的安全看不見，是問題的缺席；壞的安全會毀掉名譽。過去要在 backlog 上跟使用者要的功能交換時間。現在不一定還得交換，至少該試著都做。[23:02](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1382s) Progressive delivery 讓大量變更交到使用者手上仍然安全。Feature flags 把功能上線和軟體部署拆開。Blue-green deployments 讓新版本先給一部分使用者用。沒有這些能力的話，現在也許就是試的時候。速度和穩定要平衡，幸好已經有語言。她會一直為 site reliability engineering 說話。SLI，service level indicators，告訴你產品對使用者的目標做得對不對、要多常做對才夠，以及 error budgets，系統裡可以被原諒的失敗。持續量這些，才能好好談：要不要故意把送到使用者的變更放慢，好一直達到他們對可靠性的期待。

她看到的組織設計裡，platform engineering 和 SRE 會比以前更重要，因為它們放開的是服務使用者、在做功能的那些團隊的速度。平台團隊用自動化讓快變得安全。SRE 當內部顧問，幫團隊投資可靠性，而不是拿可用性和效能去換速度。

[25:10](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1510s) 回到她那兩個人的第一個產品。第一版兩週就好。之後呢。她老實說，看起來非常像 platform engineering 和 reliability engineering。功能開發不多。是擴充能力、安全、把事情做對。做出一個能動的應用很便宜。花時間的是讓它準備好擴充、而且這樣做是安全的，穩到真實的企業客戶能用。時間不是花在交功能。她看得到一個世界：現在 platform、SRE、安全團隊，人數被做功能的開發者大幅超過。這個平衡會移動。平台和 SRE 的重要性會再升高，因為他們讓那些對齊功能的團隊的價值放得出來。

這一錨留下 SRE 實務、progressive delivery、內部平台，這些讓事情安全。丟掉上線路徑上的任何手動步驟。不是不能做手動測試，只是不能放在關鍵路徑上。用 feature flags，讓你送出一個有 bug 的東西仍然安全，使用者不會注意到。她會用 AI 處理 tech debt、提高測試覆蓋、讓問題容易被看見、加快 migration 和 refactor，也會把 SRE 團隊找回來當內部顧問。

## 最小的團隊，得先養得起一張 on-call 表

[27:28](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1648s) 第三錨大概最重要：人重要。為這個新時代重組團隊，必須把人放在心裡。要創造值得做的工作。她先講一句會有爭議的：審 AI 寫出來的那些行程式，不是有趣的工作。她緊盯那些在試新做法的組織。與其堆積一大堆 code review，他們在做什麼。有幾家公開說過，不做強制的 code review。不是完全不審，而是不是每一次變更都強制審。有些把 peer review 往左移。以前是送到資深工程師，由他抓問題。左移之後，也許是在你為 agent 寫 spec 的時候，就把決策、監督、以及「做的是不是對的東西」這層同儕審查看過。

[28:52](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1732s) 她喜歡 Joseph Russia 的一句話，字幕人名如此：錯誤會是把沒被讀過的 code 當成紀律的失敗，而不是一個訊號，表示紀律本身必須改變。她沒有答案。她只知道，叫工程師去審成千上萬行 AI 寫的 code，會製造很多很不快樂的工程師。得另找辦法把品質和保證做進流程，又不會造出無法持續的工作。

另一件她確定人不想做的，是支撐一個脆弱的服務。Agent 不能拿 pager（字幕說 hold the page）。工程團隊得處理：生產裡的服務是誰的。On-call 還在。輪值必須能持續。不能一個人永遠 on-call。不公平、不對、無法持續。團隊能小到什麼程度，她反覆回到這件事：能維持一張可持續輪值表的最小團隊是多大。她認為是四個有能力在生產裡支撐那個產品的人。因為永遠要有 primary 和 secondary，而且一個人不能超過一半的時間在 on-call。很多人連一半都不願意。最小可行的人數，會被這些角色決定。

[30:34](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1834s) 第一天、第二天都沒工作了。圍在團隊外的儀式也許不再增加價值，兩週一次的 sprint planning 是現在需要的決策節奏嗎。當主管很難，因為這個角色要演變成什麼還不清楚。她請大家看 Sophie Weston 去年在 QCon 講的 broken comb，而不是 T-shaped：廣的理解，加上幾處深度。有人會靠向產品，有人靠向平台，職涯教練該幫人把現在需要的技能長出來。她未來要組的團隊，關鍵是 user empathy。不能坐在使用者旁邊、聽懂問題、設計解法的人，會變成要被餵 requirements 的瓶頸。這在這一行已經變正常，她認為該結束。

[32:39](https://www.youtube.com/watch?v=pyYKOLEnsZk&t=1959s) 最後一張把三個錨收回來。留下可持續的 on-call、談 error budgets 和可用性的語言，以及對準今天而非昨天的職涯規劃。丟掉沉重的規劃。兩週的 sprint 現在絕對太長。強制 code review 無法持續，得換別的方式保證品質。她會用 spec-driven development 把 peer review 往左移，也鼓勵管理者養成 broken comb，而不是只有 T-shaped。大家都在路上，不知道要去哪，興奮，也可以很嚇人。試新東西、分享所學，但是跟人們一起做，不要做在他們身上。不管 agents 多好，組織仍對準使用者，投資又快又安全的方法，並留下待著開心、職涯值得追的團隊。問題她留到啤酒的時候。
