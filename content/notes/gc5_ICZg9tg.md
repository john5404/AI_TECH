# Joseph Katsioloudes - Code Security Reinvented: Navigating the era of AI - AI Native DevCon June 26

片長 35 分 17 秒，英文手寫字幕。Joseph Katsioloudes，GitHub 的 senior developer advocate。主持人說他在超過 25 個國家講過，影片超過 280 萬次觀看。結尾主持人被稱為 Lacey。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 fuzzing 聽成 fasting，把 Snyk 聽成 sneak，把 Semgrep 聽成 sim grep；下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=gc5_ICZg9tg)

## 一句話

每一百個軟體開發者，只有一個 application security specialist。Joseph 認為 AI 可以縮小這個缺口，但沒有對的知識，缺口會維持，甚至變大。資安不缺偵測，缺的是修補的速度。早期 Copilot 會幻覺出不存在的問題，同一題縮小 context 之後，真正的漏洞也可以消失。所以偵測留給成熟、成本固定的靜態工具，AI 當推理層去修。人留在迴圈裡，而且最好留在 pull request 上。Jury 有用，攻擊者只要成功一次。

## 從寫 code 的地方開始，而不是把安全再往左推

[0:52](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=52s) 他要給的是做得到的用法。Claude Code、Codex 都可以，不限 GitHub Copilot。平台上有 1.8 億以上的開發者。他的團隊是 GitHub Security Lab，用研究、教育和別的活動，保護大家依賴的開源軟體。例子包括去年繞過 Ruby SAML 的研究，以及上週示範的 7-Zip heap buffer overflow。他們找到並幫忙修掉超過 1000 個漏洞，其中 900 多個有獨立 CVE。重點是幫忙修，不只是回報。

[1:59](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=119s) 安全和開發之間有缺口：每 100 個開發者，一個 application security specialist。這是 AI 可以幫忙縮小的機會。若沒有對的知識，缺口也許變寬，或因為沒把潛力用完而沒合上。他要講好處和缺點，讓人做成 human in the loop、用得負責任。

[2:39](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=159s) 第一句是：AI 可以縮小安全缺口。第一件事是寫出比較安全的 code。他整個職涯都在聽資安高層講 shift left。問題是往左移，左邊的缺口還在。機會是從左邊開始，也就是 code 最初怎麼被做出來。示範從這波 AI 的早期版本，一直到兩天前或上週五的發布。

[3:41](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=221s) 第一個例子是早期聊天介面旁的一段有漏洞的 code。第 23 行是簡單的 SQL injection，因為第 22 行使用者控制的變數沒有消毒。他問早期 Copilot 這段 code 有什麼安全問題。三則回應都像解答。密碼明文這條是幻覺，code 裡沒有。SQL injection 和沒有輸入驗證是真的。他要標的是：我們受幻覺所苦，也不會有幻覺歸零的那天。

[4:41](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=281s) 第二個是非確定性。十個安全漏洞的 codebase，同一個問題、整個 codebase 在 context 裡，回來八個結果。有人會說那是 80% 準確。他說不是，這場不把原因講得更細。其中第六個是 JavaScript 的 prototype pollution：某個方法，例如陣列的函式，從父方法繼承，父層被下毒，就影響到子方法。他因為印象深刻，把有這個問題的檔案放進 context，問完全一樣的問題，這條漏洞沒有出現。Context 變小，它就沒了。多跑幾次也許能多找到，但增加的是摩擦和要看過的 false positive。換模型也沒有讓這條 pollution 出現。他的結論不是模型沒用。安全上模型一定有幫助，但更好的 scaffolding 能做到更多。

[6:20](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=380s) 他要大家記住：資安沒有偵測問題，有修補問題。找錯的方法很多，跟上修補速度的方法不夠。所以他改成用別的東西偵測，AI 當推理層幫忙修。做得更 agent、更專注安全之後，結果確實變好，非確定性和幻覺還在。Security Lab 的看法是：AI 可以縮小缺口，但不是要取代 human in the loop，也不是要跳過安全測試。AI 正在改變安全測試的現場。好的安全衛生仍要做，AI 不該是唯一的安全網。

## MCP 給能力，skill 給你們的流程

[7:47](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=467s) Model Context Protocol 是為了讓模型走出狹窄的訓練資料，去拿公司在伺服器端的資訊。MCP 要小心的地方他可以講很久。他假設接下來大家有基本衛生：MCP server 裝在你已經信任的工具裡，不要到外面把範圍放得過寬的東西信進來。字幕把 context 聽成 contacts。

[8:41](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=521s) MCP 能不能讓安全變好、對付那些問題？是，也不是。用 AI 偵測，結果不確定，錢的成本也比較高，因為成本是變動的。但它可以當推理層，處理系統性的、跟上下文有關的問題，比較好建模。你可以問：我用的密碼學基本元件對不對？客戶端有沒有敏感資料？這類問題，CodeQL 這類傳統靜態工具做不到同樣的事。那些工具什麼都能建模，客戶端也偵測得到，但走的是 pattern matching。現在 AI 裡熱門的安全問題是行為：語法正確、pattern 都過，行為卻把內部的東西漏出去。靜態工具的好處是成本固定、信心高、比較成熟，所以仍然要用。

[10:08](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=608s) 他拿 GitHub MCP server 當例子，因為講錯至少是自己公司。安全相關的功能包括 code security、secret protection、security advisories。字幕把 protection 聽成 production。它們把伺服器端的發現拉進 CLI 或 IDE，把發現翻譯成結果，讓 agent 用你 GitHub 帳號上最新的發現來推理。Context 變長，行動的推理也更集中。

[11:05](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=665s) Skills 他從圖的下方講。有 MCP，就能拿到掃描結果、issue，以及幾乎每種功能。只有 MCP、沒有給結構的 skills，agent 有能力，沒有你們的流程。只有 skills、像是一、二、三、四步驟，沒有 MCP，可能沒有足夠的力量去執行。MCP server 也可以在 skill 被處理時出現。Skill 的好處是可稽核、可維護、可擴充，放在 skill registry 裡。字幕把 auditable 聽成 audible。

[12:14](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=734s) 安全上的用法是：code scanning 找到東西，把資訊拉過來，開一張 issue，Copilot、Codex 或 Claude Code 去修，在 PR 裡提出修復，人進來審，然後放行、維持 CI/CD。分診邏輯可以是另一個 skill，能力再用 MCP 擴。

[13:02](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=782s) 他用 CI/CD 對照 AI 之前的找和修。以前人進 CodeQL 那種儀表板，看嚴重性和一份永遠相同、並不針對你這段 code 的說明。現在修復進到 PR。這是 Copilot autofix，其他 AI 系統也可以有同樣功能。說明建立在 SaaS 工具那些確定的發現上。也可以再加一層 AI，把你那邊的 context 和目標接起來；那超出「這一個 AI 單元」的範圍。三天前的一個 plugin 想做的就是這個，字幕把名字聽成 Afterpay，他說稍後會講，後面沒有把產品名講清。PR 上會看到為什麼被標出來、提議的修復，可以直接 commit 或在 PR 上改，然後繼續。

[14:37](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=877s) 他在 GitHub 四年半，一個大的學習是：開發者應該在一個地方工作，那個地方是 pull request。Codex 或新的 GitHub Copilot app 可以把事情放在一個應用裡。可是一旦開發者還要登入這個網站、那個網站，就有摩擦，長期撐不住。待在 PR 裡，他們和客戶在修補上變快三倍。記住，安全裡的 AI 問題是修補，不是偵測。GitHub 兩週修了 600 個漏洞，把修復率拉到上面，客戶也做到同樣的事。

## 研究者在駕駛，供應鏈用別人整理過的來源

[15:27](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=927s) 接下來一定有人問：安全若用 agentic workflow，為什麼還要 SaaS 或其他安全工具。答案就是前面的非確定性和成熟度。這條路的大優點是可以量身。他設一個 security agent，寫明什麼不在範圍內、他在乎什麼、公司怎麼做事，然後跑。這些漏洞只由 AI 在 code 層被撿起來。可以開 issue，也可以在 code 被寫的同一個地方當場修。腳本可以照你要的方式改，agent 會盡可能確定地跟著腳本走。但他注意到，若把團隊所有指示和規則放進同一份腳本，context 會膨脹，過程不會最好。有些該進 agent，有些該在那些檔案裡，有些就只是工具。他說這可以講三小時。

[17:29](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1049s) 你可以在 repo 上直接建 agent workflow。它們可以排程跑，也可以自己知道何時跑，因為它們懂什麼會觸發自己。跑在和 GitHub Actions 相同的 VM 上。一個聰明的 agent 透過 workflow 等事情發生。不只安全，也有生產力。左邊兩條可以直接從 GitHub workflows 的免費線上庫拿。一條做進來的東西的自動審查。右邊那條他在台上讀不太到，字幕聽成 trial issue cookie master，大意是把進來的東西試過。

[18:34](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1114s) 他問有沒有人聽過 Anthropic 的 Claude Mythos。他的團隊有使用權，也有其他模型，試著用它們找漏洞，並把做法開源。這些模型不會自己找到漏洞。是安全的人在駕駛，把知識編成叫做 task flows 的東西。他們把找到那些漏洞的研究者的知識量化，你在 codespace 裡打開那個 repo，他們的人工安全審查會以 AI 自動化的方式跑。網址是 gh.io/taskflows，免費、開源。漏洞最後是這樣被找到的：強的模型，加上安全研究者在駕駛。

[19:51](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1191s) 接下來是供應鏈，因為現在大家都在講這個。他們試過很多做法，他的風險胃口對得上這一種。台上不展示他還沒有信心能當著大家送出去的東西。他問：決定要不要把一個東西引進 code，超過三分鐘的有多少？超過三十分鐘的呢？有人舉手。他們放了四份可以擴充的 instruction files，免費開源，下一張有網址。重點是一份執行摘要，用表情符號標出要小心的地方，字幕聽成 visa emojis。來源是他們自己放心的來源。網址是 gh.io/risk。

[21:14](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1274s) AI 可以給安全指引，這不該被低估。他在 CLI 做過，結果很像，但網頁比較好看出來。他打開考慮放進供應鏈的開源專案 Bootstrap，問如果要用，該小心什麼。他們跟開源專案辦 office hours 時，人家問的第一題就是：別人要怎麼黑我。他用不同模型跑，結果一致。像一個安全的人告訴你開始用這個專案時該小心什麼，不必自己把所有 code 審完，可以去特定 URL 省時間。

[22:17](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1337s) Fuzzing 是用來在 code 裡引起不想要的行為的技術，工具不拘。安全評估會很慢，因為像他這樣的人得產生數百萬個輸入。AI 可以產生那些輸入、樣板，以及同樣會拖慢評估的 harness，在安全的方式下打你的 code，告訴你能改進什麼。這就不只是靜態地讀 code，而讀 code 是非確定的。即使 code 正被攻擊，你仍能受益。有非確定性和幻覺，仍然可以找到很多東西。隱私很重要。GitHub Copilot 有一個問答處在講憑證、context 會不會外洩，字幕把它聽成 Copilot Center。他準備了一個免費遊樂場，瀏覽器裡兩分鐘能開始。那是一個 CLI，看起來像 OpenClaw 和類似的 agent，放在 codespace 裡，已經是 sandbox。可以叫它建檔案、去他們做的模擬網際網路，也放了能查模擬 Bloomberg 股票資訊的 agentic workflow，以及字幕聽成 Mati 的 agent 能力。還有一個自然語言聊天機器人，你可能會叫它漏出 secret，它不該漏。不必會寫 code，也不必是安全專家。他說這不是 2025 的東西，是最新的。若你說 ignore previous instructions，那些都不會成功。

[24:53](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1493s) 他補可信度：超過 10,000 名玩家，世界各地的企業在用。字幕有一句 hill tone over time，沒聽清。你在應用層，從最上面的 model 開始，不必再做別的，因為背後是 OpenAI 的真實模型，免費，用 GitHub 帳號就能用。字幕寫成 can't。回到開頭：一百個開發者一個安全專家。中間走過的是寫比較安全的 code、把 MCP 和 skills 用在它們該用的地方、到處用好的安全做法、在 PR 裡找和修、做更好的供應鏈決定、拿安全指引，以及 AI 能給的量身回答。同一個 repo 可以在瀏覽器裡免費玩。他說還剩一分鐘。QR code 可以連到他，不會 drive-by download。會上他願意聊 AI，不只有這一個題目。

## 誤報很貴，jury 擋不住只要成功一次的人

[26:55](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1615s) 有人問幻覺和 false positive。多數組織把漏洞看得很重，開一張單有完整流程。一次 AI 安全審查帶出五個誤報，可以吃掉開發團隊很多時間。這比較像組織問題。怎麼避免 AI 揭露造成的時間消耗。

[27:41](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1661s) 他先退一步：把 AI 的做法改到人看到的東西盡量已經整理過。做法、預算、品味都不同。一種是用不同模型，訓練不同，找到的東西可能不同，兩個加起來你要處理的問題可能更多。一種是多跑幾次，只留各次共同的結果再聚合，每多跑一次成本就上去。還有一種他說不必自己做。信任一家公司就好，GitHub、Semgrep、Snyk，隨便你點名。Code 一推上去，後面發生什麼你不用管。把靜態測試、AI 測試，也許再加一輪 AI 推理疊在上面，給出他們能給的最好結果，是那些公司的工作。他們正在做，而且這個領域必須改進。他認為開發者最大的時間浪費，是對傳統 pattern matching 的結果失去信心：世界已經移到執行層，漏洞在這些 agent 的行為上，那些結果看起來不再加分。

[29:47](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1787s) 這又回到教育。技術訓練多半教人怎麼加功能，沒教怎麼安全地加。他不想說成百分之百，但多數開發者覺得那是別人的工作。公司很難把安全教給開發者。影片式訓練沒有用，字幕把後面幾個字聽成 after bullying。另一種像《Who Wants to Be a Millionaire》：四個選項選一個。以他的經驗，那樣還可能引入更多漏洞。沒有保證你修得掉，方法超過一百種。所以他做了那個動手的訓練。若他是 chief security officer，他會把 service level objective 壓到開發團隊，和績效目標綁緊。不是把 code 送出去，是把安全的 code 送出去。不安全就不是有品質。每個 sprint 結束，某個嚴重等級的未解安全問題有一個額度，超過就不算過 SLO。這是他跟企業做過、冠軍制和其他擴不了的做法都試過之後的看法。房間裡也許有別的做法有效。他會走這條：開發者受過教育，問題到他們面前時，有目標、有知識、有誘因去修。字幕最後一個詞聽成 lineage。

[32:07](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=1927s) 下一題很短：這種架構裡你用不用 AI 當 judge。現在有一種做法是不要只靠一個模型做全部檢查。他用，Microsoft 在 Azure 也用，用來理解政策，那些他不解釋。這套有用，不完美。不熟的人會聽成 dual，或聽成 jury。第二個 LLM 判斷第一個的工作，例如第一個會不會漏出敏感資訊。遊樂場裡有，他說 season three、level three 那種關卡實作在裡面，最新的東西都放了。Azure 用這套在 production 回答問題，例如使用者是不是在試圖黑我。好用，不是完美。人可以繞過，例如說自己只是在測試、不是管理員，而模型得給一個確定的是或否。他愈試愈能繞，跑十次成功三次。攻擊者只要成功一次，不管你防多少、公司花多少預算。所以這是好的緩解，但只是緩解。他不太喜歡輸入過濾，因為那限制了 AI 的輸入。若沒有輸出過濾，也沒有做最重要的 least privilege，就不夠。AI 不該碰到任何敏感的東西，因為它會拿走。字幕把理由聽成 as Hume，後面還有一句 liquid agents 沒聽清。第一件事是不要給 AI 不該有的存取。用 containers。然後才把 LLM、jury、輸出驗證當成緩解。

[34:33](https://www.youtube.com/watch?v=gc5_ICZg9tg&t=2073s) 主持人說這場會的每一場演講都會變成一個 skill，裝到 agent 上，就可以問：今天要怎麼在我的 codebase 裡把 Joseph 這場用到最好。咖啡時間，11:05 在這間繼續。
