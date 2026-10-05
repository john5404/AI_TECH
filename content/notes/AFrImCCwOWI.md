# What’s Sizzling and What’s Stable? Inside the AI Native Tool Landscape with Patrick & Amir

Patrick 問、Amir 答的一場暖場對談。Guy 的 keynote 剛提過同一張工具地圖。片長 16 分 50 秒，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 vibe coding 聽成 divide coding、VIP coding，把 Karpathy 聽成 Karpati，把 POC 聽成 PC's。下文用校正後的說法。

- 原片：[YouTube](https://www.youtube.com/watch?v=AFrImCCwOWI)

## 一句話

工具每週都在增加，功能又在互相抄，所以活下來的不會是「最會寫 code」的那一個，而是能接進整條 workflow 的那一個。Vibe coding 對原型和輕工作有用，核心工作仍要人盯、要過測試。MCP 解決的是選好系統之後怎麼做，不是替你選系統。Amir 賭接下來六到十二個月是整併，以及這些方法從 POC 走進 core workloads 和企業。

## Coding 工具在爆，勝負在怎麼接

[0:45](https://www.youtube.com/watch?v=AFrImCCwOWI&t=45s) Patrick 說他們已經收了好幾個月的工具，這場要講什麼是新的、什麼正在來。字幕裡的網站聽成 landscape.dev.io，原稿沒有把網址說清楚。他每週都看到幾個新的 coding 工具，code 那一區在炸開。

[1:49](https://www.youtube.com/watch?v=AFrImCCwOWI&t=109s) Amir 用 Android 剛出來時大量應用湧現來比：開發者愛新技術，就會圍著它做一堆東西。現在這件新事是怎麼用 AI 把軟體生得更好。工具打的面很散，design、prototyping、testing、IDE 都有，IDE 附近最近特別多。要問的是哪些會被整併、哪些能一起運作。以前每波創新都是工具很多、彼此沒接上，人得自己寫 script。所以現在要評估的是什麼能在同一個 stack 裡一起工作。

[3:04](https://www.youtube.com/watch?v=AFrImCCwOWI&t=184s) Patrick 說他們一開始是按功能分類，這個是 agent、那個有別的能力。競爭變激烈之後，每個工具都在抄別人剛做出來的功能，幾乎是一場往下的競賽。活下來的未必是終極 coding tool，而是會看整條 workflow、把整合做好的那個。Amir 要的是東西一起運作，人不必替工具打工。近未來要看的是 prompt engineering、Cursor、testing 怎麼接起來。Patrick 把這段叫做新技術都會有的 chaos。

## Vibe coding 適合輕工作，不適合核心

[4:25](https://www.youtube.com/watch?v=AFrImCCwOWI&t=265s) 過去六個月大家盯上 vibe coding。Patrick 說它本質上不是新東西，但標籤一出來反應極大。Amir 覺得這個名字很糟，幾乎是貶義，幕後的過程卻合理：人說要什麼，跟 AI 一起做出來。它常被說成給不懂工程的人。Amir 自己是工程師，用它反而更有效。他不要做無限擴展的後端，只要一個簡單頁面，也不想碰 CSS。他寧願叫它 PM coding。這些工具不只要生 code，也會部署，把一部分 CI/CD 自動化，最後給一個可以分享的連結。

[6:46](https://www.youtube.com/watch?v=AFrImCCwOWI&t=406s) Patrick 寫過從 coder 轉成 manager：一邊 review 生成的東西，一邊在 production 出事時仍然負責。他說這個詞是從 AI engineering 社群來的。大家交 AI 應用時說 looks good to me，新 model 出來也沒有嚴格測試，社群開始叫這是 model 的 vibe checks。它會把人推進 flow，像寫 code 時那樣。

[7:57](https://www.youtube.com/watch?v=AFrImCCwOWI&t=477s) Amir 今天不會把 vibe coding 用在 security 和 compliance，但會用來做前端原型或簡單遊戲。工作越核心，人就越要檢查、維護，通過的不能只是 vibe check。輕量工作，例如行銷網頁，就適合 prototyping。他相信 AI 之後會更擅長核心工作。Patrick 把先做一輪原型、把問題看懂，再真正去寫，比成 exploratory testing 那樣的 exploratory coding。Karpathy 提到用聲音做：對機器講，它就收下。

## MCP 與自主 agent 還缺的那一層

[9:37](https://www.youtube.com/watch?v=AFrImCCwOWI&t=577s) MCP 是下一個被大家拿來談的東西。Amir 說成功的實作不多，Zapier 做得不錯。不接其他系統的軟體用途有限。MCP 是目前把 AI 接到既有系統的方式，像以前的 API。朋友覺得標準好、也喜歡 server，但缺的還很多。在他們的感覺裡，它進市場大約一個月，也許再早一點，仍是 work in progress。Patrick 把時間線排成：更早是 vector databases，去年是 eval，今年是 MCP。廠商可以把自己的 API 帶進來，不必先在 coding editor 裡做 plugin。

[11:41](https://www.youtube.com/watch?v=AFrImCCwOWI&t=701s) Amir 把問題分成兩層。第一層是為這個 prompt 選對系統，Slack、Jira，組織裡很多套。MCP 不解這一層。選對之後，它幫你在那個 system of record 裡把事情做出來。

[12:20](https://www.youtube.com/watch?v=AFrImCCwOWI&t=740s) Specifications 被帶過就放下：他們開始不只寫 prompt，也在寫 product 或 technical specifications。Patrick 為了時間跳到 autonomous coding agent。它是 headless、CLI，字幕說 synchronous，自己把工作做完。Amir 喜歡，因為這補上他覺得缺很久的 agency。出錯時它會問要不要修。他認為很快會看到有自己 agency 的系統。

[13:46](https://www.youtube.com/watch?v=AFrImCCwOWI&t=826s) Amir 賭接下來六到十二個月是 consolidation：工具被接上或被收購，舊的 CI/CD 和傳統 coding 要搬進這套做法。他現在看到的是 POC 和早期 mockup，不是 core workloads。企業採用會跟著來。Patrick 還想解「代替使用者做事」：authentication 是一件，access control 是另一件，誰能碰到什麼、agent 能用哪些資源。字幕裡的 aviolo mode 沒有說死是哪個產品模式，只接在「允許哪些資源」後面。他也在想人怎麼建立信任。Guy 說的是我們已經比較會描述自己要什麼。Patrick 看到的是另一面：怎麼寫出「好」長什麼樣子。Evals 裡有 LLM as a judge，但需要一個系統能說這是好的、這是壞的，不能只是跑得起來、或 linter 過了。
