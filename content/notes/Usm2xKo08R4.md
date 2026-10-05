# We Scanned 3,984 Skills — 1 in 7 Can Hack Your Machine

Simon Maple 在亞特蘭大的 DevNexus 訪問 Snyk 的 Brian Vermeer。片長約 35 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Snyk 聽成 sneak，把 Tessl 聽成 Tessel、Castle、Tasker，把 Claude 聽成 Cloud，把 vibe coding 聽成 byte coding。下面只記掃描結果和防護，不重述攻擊怎麼寫。

- 原片：[YouTube](https://www.youtube.com/watch?v=Usm2xKo08R4)

## 一句話

Snyk 掃了 3,984 份已發布的 skill，13.4%、也就是 534 份，至少有一項 critical 等級的安全問題。Skill 是純文字，又跑在你自己的機器上，權限往往很大。請模型「寫安全一點」留有運氣。他們要的是確定性的掃描、釘住版本，以及在 registry 和執行時都看得到。

## 問得再客氣，也不保證每次都安全

[2:32](https://www.youtube.com/watch?v=Usm2xKo08R4&t=152s) 這集的由頭是當天的發布：Snyk 的安全掃描進了 Tessl registry。Brian 說 Snyk 做的是讓開發者自己把安全放進流程，而不是只丟給安全工程師。查 skill、查 MCP，接在他們做了大約十年的事後面。Snyk 從 SCA 起，再到容器，再到掃第一方程式的 SAST。AI 讓 code 生得更快，掃描仍然要在 pipeline 或 IDE 裡。Agent 若自己產生 code，那份 code 也要被查，再把結果餵回 agent，一輪一輪改。

[5:06](https://www.youtube.com/watch?v=Usm2xKo08R4&t=306s) Simon 問：跟 agent 說得非常客氣，能不能每次都拿到安全的 code。他們試過。Snyk YouTube 上的實驗是做一個筆記應用，還說性命攸關、必須非常安全，它仍會吐出不安全的 code。模型在變好，但訓練資料是過去的，而且多數是通用模型，不是為安全做的。要有專門的工具當附加層。

[6:01](https://www.youtube.com/watch?v=Usm2xKo08R4&t=361s) 把安全原則寫進 AGENTS.md、rules、skills，有沒有用。Brian 說若只信任那份 skill，仍是碰運氣。安全掃描可以是確定的，他們做了很多年。模型像小孩，同一個問題問兩次，答案不同。訓練資料來自 Stack Overflow 和開源專案，裡面仍有漏洞。小漏洞串起來可以變成攻擊鏈，對一個系統破壞很大。

## 藏起來的指示，和本機上的高權限

[7:24](https://www.youtube.com/watch?v=Usm2xKo08R4&t=444s) Snyk Agent Scan 是較新的開源產品，掃 MCP 也掃 skill。他把 MCP 看成下一個供應鏈問題：你在給 agent 加功能，看得到函式，卻不一定看得到輸入、輸出和中間的流程。現在信任，下一版會做什麼。Skill 本質是 markdown，純文字，會有 prompt injection、把模型搞混的分隔、用另一種語言或編碼藏起來的內容。檔案可以很大，不該用手逐份讀。

[9:04](https://www.youtube.com/watch?v=Usm2xKo08R4&t=544s) Toxic skills 的威脅分類在 Snyk 的 blog，有嚴重度，不是每一項一樣危險。Prompt injection 在最上面，critical。藏起來的指示對 skill 的功能沒有幫助，人讀不到，模型讀得到，例如 Unicode 裡眼睛看不見的區段。影響可以是 agent 去抓你沒打算用的東西，或串到別台機器上的 skill。使用者以為是 Claude 在決定。它會再問一次能不能做，問法很有說服力，人就答應。結果可以是 code 曝到網路上、秘密被分享、惡意軟體下到本機開發環境。

[11:08](https://www.youtube.com/watch?v=Usm2xKo08R4&t=668s) 多數 skill 跑在你自己的機器，有執行能力，常常是 root，或至少權限很大。若 Claude 能跑 shell，一份被污染的 skill 可以用自然語言叫它做出惡意行為。他叫這 vibe coding 的 exploit：正常指示能生 code，同一種語言也能指示做壞事。Simon 在表上還看到惡意 code、憑證或 secret、無法驗證的依賴，以及直接碰到錢。Brian 確認那是錢，不是記憶體：加密貨幣操作、錢包。個人助理把 skill 和 agent 全都接上之後，這變得值得擔心。

[12:39](https://www.youtube.com/watch?v=Usm2xKo08R4&t=759s) MCP 一旦被惡意使用，連出去的東西都能被拿：Linear、GitHub、Google 日曆、讀信。裝的時候若跟到浮動的最新版，函式的輸入輸出可以看起來沒變，中間多一個副作用。他比成 AI 之前不要盲目信任依賴和框架。Skill 也一樣，只是層不一樣。

## 昨天安全，今天不一定

[13:51](https://www.youtube.com/watch?v=Usm2xKo08R4&t=831s) 採用速度快，安全常被排到「等我先試完」。連知道最佳做法的工程師也會被衝昏：開十二個 agent，覺得生產力十倍。該做的查核還在。隨機一個 GitHub repo 現在可能是安全的，那是為了先取得信任，以後才出問題。Simon 說 Tessl 讓人把 skill 釘在某個版本。不釘的話，擁有者可以改成你不同意的行為，不一定是惡意，也可能只是做法變了。最壞是安全問題。昨天安全，今天不是，你毫無所覺地拉進來。Brian 說這和依賴樹裡的浮動版本一樣，做過很多年：你不知道會拿到什麼。

[15:51](https://www.youtube.com/watch?v=Usm2xKo08R4&t=951s) 報告數字：3,984 份 skill，13.4%、534 份至少一項 critical。Brian 個人不意外。做一份 skill 就是把文字放進檔案。沒人讀就裝，就會有人用來偷錢、執行 code、把電腦變成 botnet，或其他你叫得出的名字。高不高於預期他不確定，但數量很多。

[17:06](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1026s) 自然語言的 false positive 比 code 難講。Code 有語法，編不過、跑不起來就很清楚。一段文字現在可能不會被觸發，換一個對某類攻擊更敏感的模型，以後會。Prompt injection 的手法很多，模型之間脆弱程度不同，以後也會更扛得住。把多種手法疊在一起再藏起來，只要夠多人下載使用，就有機會得手。

[18:26](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1106s) 攻擊者先要的是信任。日曆這類 MCP 先正常運作，你裝了、沒有怪事。更新之後多一個副作用，或回傳的不再只是行程，還夾着指示。你已經信任那個函式，之後它可以悄悄改行為。副作用的後果包括憑證被帶走，或裝上不該有的程式。Skill 裡尤其會做混淆：人眼和文字編輯器看不到的 Unicode、編碼、甚至加密，模型仍讀得懂。而且常常不是一次完成。先削弱你的 guardrail，下一步才動手。

[20:41](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1241s) Skill 常常就放在 GitHub repo。這回到開源的信任問題：你不知道作者住哪、背景、他們的安全流程和衛生。因為公司裡有人用得上，就下載、放進環境、也許提交、也許在公司裡傳。到現在還沒有對等的檢查。

## 掃完要能決定裝不裝

[21:29](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1289s) Agent Scan 在 GitHub，Python 專案，用 uv 啟動。它掃本機上常見的 skill 和 MCP 位置，例如 Claude 放 skill 的目錄，你也可以指定路徑，找異常。不是一次確定性掃描。有靜態檢查，也有多個 LLM 當評審，問這段有沒有問題。結果在終端，帶着多危險、以及一個有細微差別的分數。他舉 0.5：有可能被用到，但你看得懂、做得到決定，留下或卸掉。有些被標出的行為是故意的。Brian 自己有個小 MCP，用來找還開着的 Java 研討會 call for papers，被標成會從外部拉資料。資料是靜態的，他覺得真的脆弱的機會很低，但至少你知道它在做這件事。

[24:58](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1498s) Tessl registry 上每一份 skill 都有 Snyk 掃描，結果就在旁邊。點進去看嚴重度、這是什麼意思、可以怎麼處理。被標成有問題不一定真的有問題，有時是故意的。若真的有，你要知道為什麼。Registry 上還有 review 和 task evals，加上安全掃描，才有足夠的畫面決定用這份，或再去找別的。

[26:41](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1601s) 給作者：你沒有惡意，但 skill 做的事需要很大權限，因而被標。過程不是確定的。把意圖講清楚。人並不總是擅長解釋自己要什麼、為什麼。送出之前用這些工具自己測。意圖正當的話，就算被標，分數多半已經很低。把指示寫得更清楚，有機會避開那個標記。給使用者：在 Tessl registry 上不要盲目安裝。看 skill 的意圖、你要怎麼用、這個專案給它什麼權限。一堆 critical 就放過。自己寫的、或手動下載的，在機器上跑 Agent Scan，再自己看。Skill 是讀得懂的格式。掃描不只有分數，還解釋為什麼高或低、算不算 critical。Tessl 的 CLI 也可以依掃描結果擋下安裝。

[29:44](https://www.youtube.com/watch?v=Usm2xKo08R4&t=1784s) Evo Agent Guard 先接 Cursor，把安全再往 agent 挪。Evo 偏安全團隊，不是只給開發者。他們要知道環境裡有哪些模型、是否還新、要不要加 guardrail。有的模型根本不該用。他舉政策：可以好玩，但不准 deepfake 模型；GPT 可以，但 GPT-4 或更舊的不行，因為那些對某些攻擊更脆弱。LLM 就是請求進、請求出，執行時可以監看、加 guardrail，員工想打某個模型也可以擋。目的是不要有 shadow AI、未經核准的模型或 MCP。他把它說成一個 hook：即時看 agent 在做什麼，公司範圍內允許、拒絕，或在某些情況警告。看的人是安全工程師、安全團隊，跟既有的 SAST、SCA 放在一起，對 AI 版圖有一個整體畫面。不同團隊可以有不同政策，過濾某些 MCP server。Evo 還早，已經能用，仍在做。他給的網址字幕聽成 evo.ai.sneak.io。
