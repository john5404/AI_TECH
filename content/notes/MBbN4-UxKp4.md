# Patrick Smyth - Agent Omelets & Other Forbidden Techniques | DevCon Fall 2025

Patrick Smyth（字幕唸成 Patrick Smith）是 Chainguard 的 principal developer relations engineer。平常他講安全與完整性，這場在 DevCon Fall 2025 改講 agent。片長約 26 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=MBbN4-UxKp4)

## 一句話

Agent 不是一段會自己長大的對話，而是一顆可以煎、可以分、可以回滾的 state。他所謂的 omelet，就是把這顆球改一改再送給 provider。再配上一層會留存的 informational layer，agent 才能交接、互相讀、在 context 老化之前把工作交出去。工具還沒全部跟上，他有的只示範過、有的還停在想法。

## 對話是幻覺，forbidden 指的不是訓練那條

[0:09](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=9s) 開場他先講蛋捲食譜，鹽、酥、鮮味，然後說今天不煮真的 omelet。Agent 很貴，又不容易做出有產出的工作。這些 forbidden techniques 理論上能多擠一點效果，用 token 換 performance，也從不同 provider 把東西掏出來。他做過很多重實驗：有時能告訴你現在的工具怎麼做，有時只是他自己跑通了。樂觀估計，工具還要幾個月才跟上。字幕裡有個聽不清的名字，這份筆記不補。

[2:03](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=123s) AI 訓練裡真有一條 “most forbidden technique”：不要用 chain of thought 的資料去訓練。把糟糕的想法餵回 model、想把它對齊掉，結果只是讓它們把想法藏得更深，壞行為還在。他說今天講的不是這條。

[2:45](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=165s) LLM 的 state，短版就是：湊好一大球，交給 inference server 或 provider，拿回東西。我們喜歡把它想成對話，chat 範式很有力，但那是一次次重送製造的幻覺。你想送什麼都可以，輸出也會不一樣。

## 回滾、分叉、自己改記憶、一次送多家

[3:36](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=216s) 大家已經會的較輕技巧是 rollback。他用《Prince of Persia》的時光沙漏做比喻。在 Claude Code 裡按兩次 escape，就能在歷史裡往上捲。當那個本來很強的 agent 用掉太多 token、開始老糊、不能好好工作，就把它捲回比較有活力的時候，再多派幾個任務。Fork 再多一步：捲回去之後，新的和舊的同時留著。Claude Code 的 resume 能做出乾淨的分叉，衰老的那個和較早的幾個可以一起跑。

[4:45](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=285s) Omelet 就是這個比喻：agent 是可操作的 state。可以煎脆、加蘑菇、拿掉蘑菇，再送給 provider。他接著借一位十九世紀語言學家的分法。字幕聽成 Ferdinand de Tour，講的是 synchronic 對上 diachronic。Synchronic 是看系統在某一刻的整個狀態，也就是我們把 LLM 送去 provider 的方式。Diachronic 是看它怎麼隨時間堆積。一邊把 agent 當成可丟棄的球射出去，另一邊讓它們看得到別的 agent 做過什麼，這組合很強。

[6:38](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=398s) Compaction 他個人不太愛。不是一場車禍，但不透明：你還看得到那段漂亮的 chat，model 對細節已經發霧。它把摘要和「挑一些東西塞回底部」混在一起，過程看不清楚。

[7:10](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=430s) 他玩過的是讓 agent 編輯自己的 memory。做一個 memory editing tool 交出去。若它被網頁搜尋或一段他懶得 rollback 的跑題分心，就叫它把那段 XYZ 從記憶裡擦掉。工具還可以連「自己擦過記憶」這件事一起擦掉。人也可以去改 Claude 的檔案，他在 Reddit 看過有人這樣做，但他覺得很容易把 JSON 改壞。他用工具有成功過。他也想過做一個像神經外科醫師的 agent profile，專門剪掉沒用的記憶，但還沒做，只是把改自己記憶的能力交出去。

[8:13](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=493s) 他稱為 hydro run 的做法更有力：把 state 養到一個有用的點，通常是大段執行之前、一場架構討論之後，再沿一條軸分開。可以是三個不同 prompt 的 fork，也可以把同一步分別送給 Anthropic、OpenAI，以及字幕聽成 Grock、Mistl 的另外兩家，看結果。再讓一個 agent 審查、挑最好的、整合。這也幫你建立自己的模型地圖：研究用 Gemini，coding 用另一個，字幕聽成 claw port 4.5，型號不另改。同一招也能讓它獨立拆成三個任務，例如更新 makefile、跑測試、寫 code。實務上可以派出一個自己去更新文件，主 agent 繼續做。他不把它想成「再新開一個 agent」，而是把你正在說話的那條主線變成 subagent，再派它出去。

## 給 agent 一個 internet，工作才能交棒

[10:45](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=645s) 資訊層是他做的一個函式庫，也許會開源，他叫它 SCA：一個給 agent 的 internet。原語不多：建立文件、用訊息互相談、在 roster 上登記。這裡的身份不必等於那顆被送去 provider 的 state。一整群 fork 或怪組合，可以掛同一個身份去發文，也可以讀別人做過的事、可以搜尋。他開玩笑：既然人都不喜歡 Slack 和 email，就讓 agent 去用。

[11:50](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=710s) Context window 是他愈做愈在意的問題。現在有 100 萬 token 的視窗，但認真用過就知道它們會嚴重老化。早則 8 萬 token，通常在 10 萬上下、加減 2 到 3 萬就開始打轉，有時能到 20 萬。超過 20 萬就別指望它真的做任務，問問題或許還行。Provider 落在 compaction，他不愛。他落在自己稱為 ignition and torch 的正式交接。做著做著發現一份工作自己的餘裕不夠，就寫一份 brief 貼上那個 internet，另一個 agent 再撿起來。Ignition 是他盯著它們在 codebase 裡定位：讀 brief、讀必讀材料、再讀和題目相關的東西，說自己準備好了才開始做。收尾是 torch：寫下想法、把摩擦貼上網，roster 上改成 retired。他原本覺得這只是怪實驗，後來這個 intranet 一斷，感覺像以前 Stack Overflow 掛掉、大家就想回家。

[14:02](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=842s) Agentology 是另一個有時很準的用法。他載入一個 agentologist，去歷史裡找真正做得好的 agent。有的是廢物，有的像天才，差別常常只是 context 開頭的一件小事、你說過的一句話、或它們被拉起來的方式。Brief 由 agent 寫給 agent 之後，啟動方式更雜，個性也更怪。找到強的那些之後，再問是什麼把它觸發成那樣。他留下兩個有用的：assayer，被測重、計時、檢查迷住，適合拉起來把系統收緊一點；fool，對另一個 agent 反覆問很簡單的問題，適合寫文件，或用來問「這是不是太複雜」。

## 分身要通訊，平行要隔離

[15:52](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=952s) Shadow cloning 是在 hydro run 和 fork 之上再加上資訊層。一個 agent 被你養好，然後裂開；裂開之後它們在資訊層上互相更新，少踩到彼此。他說這比較像願望：基礎設施有了，它們還是會互踩，但看著很有趣。

[16:38](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=998s) 他更在意的是 omelet reference。Agent 貼文件時，附上「這個 agent 在某一輪、那個狀態」的位址。之後可以用這個位址把當時貼出 brief 的它叫回來。計畫是做 XYZ、你想多問一點，就把他從 ether 裡拉回來問為什麼。若計畫很好，也可以直接叫他繼續做。

[17:34](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=1054s) 完整性他用《Fantasia》裡的掃帚作警告。十份 brief，要不要自己盯、還是平行跑？全在 master 上跑會出事。他在這場會上聽過 container 式的 agent enclosure。把它們隔離開，再接上資訊層：各自在 work tree 裡做、能測就測、寫報告。另一個 agent 讀完全部報告，決定合併哪幾份，再 mint 一個新的 master。他稱為 tender：交出報告、審查、合併。也許午夜合併，早上九點再看，因為你不一定想讓它們直接進 master。正式把 agent 平行化時，隔離和 review 要一起有。

[19:12](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=1152s) 手離開方向盤、流程變正式之後，他把整類痛苦從 agent 面前拿掉。Chainguard libraries 取語言生態系的原始碼，送進他們的安全 factory。字幕說這套建置是 salsa 2、營運上很安全。來源有的就盡量建，再放到你可以拉的 package repository。Agent 寫得愈來愈快，供應鏈攻擊也愈來愈多，字幕點到一個聽成 shy hallude 的事件；一邊要 code freeze，一邊又想加速，兩頭撞在一起。這類東西不只告訴你不安全，而是拿掉一整類風險。他特別點 Python 的 Chainguard libraries。Containers 是另一個產品。

## 別把 subagent 特殊化，然後去參加怪比賽

[20:49](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=1249s) 熱點子第一條：subagent 這件事有點走歪。讓 agent 呼叫別的 agent 就涵蓋了「去找一個網頁、別弄髒我的 context」：叫完不必再跟它說話。真正有用的是較長的對話，以及看管別的 agent 的 quartermaster 或 boss：依 brief 把它們拉起來、盯流程。現在的 subagent 流程做不好這件事。他沒把自己的東西接上時，會叫 Claude Code 把對那個 agent 說的話再餵回去，湊一段較長的對話。他要的基礎設施是：不要特殊化，agent 是一等公民，誰把它拉起來不重要。

[22:13](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=1333s) 第二條他可能唸錯，叫 pokey，原詞字幕聽成 bakaok，意思是防呆：讓 agent 搞不砸。工具順手、明顯，表現會好。但新工具不必一開始就防呆。他從一套有彈性的系統裡看 agent 實際怎麼做，再鋪 desire path，用經驗決定它們該走哪裡。第三條：這場會很多力氣花在坐在這些小東西旁邊，叫它們做正事、可靠、別古怪。他喜歡 spec-driven development，也喜歡 evals。但語意空間還有一大塊沒被摸過。現在適合實驗，接受這些會做事、也有點可怕的小傢伙。

[23:39](https://www.youtube.com/watch?v=MBbN4-UxKp4&t=1419s) 收尾是 Chainguard 主辦的 Vibe Olympics，偏社群。十二月進行，12 月 1 日開始，19 日直播，由一組 CEO 決定贏家。三個挑戰還沒公布。可以試還沒用過的 vibe coding 平台，字幕裡出現 Kira。冠軍拿 1,000 美元捐給自選的慈善機構，參加者有週邊。他也把它當成這奇怪一年的慶祝。工程師問能不能參加，他們說可以。報名已經不少。評審裡有字幕只聽到名字的 Guy，以及他們的 CEO，字幕聽成 Dan Lawrence。台上有 QR code。
