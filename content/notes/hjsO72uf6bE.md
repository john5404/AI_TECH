# Let's Create a GitHub Copilot Extension! with Nick Taylor

Nick Taylor 是 Pomerium 的 developer advocate，來自 Montreal，Quebec。字幕裡他收尾時叫主持人 Bob。原片約 21 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=hjsO72uf6bE)

## 一句話

GitHub Copilot extension 是一個公開的 web endpoint，加上一個 GitHub App。Nick 這場只做 agent 那種，不做客製 skill set。最少要給 Copilot chat 的 read-only 權限；要讀編輯器裡的檔案，再加一項同樣是 read-only 的 context。他用 preview SDK、Hono，以及 VS Code 的 port forwarding，現場跑一個會提古怪產品點子、最後能產出 PRD 的 product manager extension。

## Copilot 本身，以及 extension 是什麼

[0:48](https://www.youtube.com/watch?v=hjsO72uf6bE&t=48s) Nick 說這場他講過幾次，有時一小時、有時 30 分鐘，這次是第一次壓到 15 分鐘。個人連結放在 nikkiet.online。

[1:34](https://www.youtube.com/watch?v=hjsO72uf6bE&t=94s) 他先講 Copilot 本身。它不只是 coding assistant，現在有 agent mode，可以一直迭代。VS Code 裡有，github.com 上也有。做 .NET 的人可以在 Visual Studio 用，做 iOS 的人可以在 Xcode 用。還有 CLI，以及一套 SDK，讓你把 Copilot 放進任何 editor。他說 JetBrains 已經有；野心夠大、自己做 editor 的人，也可以加進去。

[2:40](https://www.youtube.com/watch?v=hjsO72uf6bE&t=160s) Extension 就是把 Copilot 延伸出去：自訂的 AI 工具、接第三方服務，以及在允許時讀 editor context。

## 兩種 extension，今天只做 agent

[2:55](https://www.youtube.com/watch?v=hjsO72uf6bE&t=175s) 一種叫 skill set，方便把第三方服務和自訂 API 接進 Copilot workflow，他說可以想成 tools。另一種是 agent，對整個 request 和 response 有完整控制，可以開自訂 workflow、接其他 LLM 的 API，也能拿到整段對話和使用者互動。他說聽起來很花俏，其實就是：你允許的話，它知道你在哪些檔案上工作，也可以拿到 message history。時間不夠，兩種不會各做一個，今天走 agent。

[3:46](https://www.youtube.com/watch?v=hjsO72uf6bE&t=226s) Extension 幾乎在 Copilot 出現的地方都能用：github.com、Visual Studio、VS Code。他知道的例外是 GitHub Copilot CLI，當時還沒有。

[5:13](https://www.youtube.com/watch?v=hjsO72uf6bE&t=313s) 他特別把 VS Code 專用的 Copilot extension 劃出去。那些是他去年看的時候就存在、只屬於 Visual Studio Code 的東西。今天不做，因為他更喜歡能到處用的一般版。

## 怎麼呼叫，以及第一次會被擋下來

[4:22](https://www.youtube.com/watch?v=hjsO72uf6bE&t=262s) 聊天要先打 `@` 加上 extension 的名字，後面才是問題。他舉例：若你說 hey GitHub Copilot，再 `@` 一個叫 lama copilot 的名字、要它 memoize 一個 function，它會用 Copilot 自己，不會進到那個 extension。

[6:04](https://www.youtube.com/watch?v=hjsO72uf6bE&t=364s) 能動起來的最小權限，是使用者的 Copilot chat history，而且只有 read-only，沒有 write。要讀正在編輯的檔案，再加 context，同樣是 read-only，可選。

[6:39](https://www.youtube.com/watch?v=hjsO72uf6bE&t=399s) 第一次引用檔案時會問你。他的例子是 `index.ts`。畫面說想讀 active file 和 selection。一開始失敗，回 401。你可以只允許目前這個專案，或對所有 workspace 都允許。他說這是安全上該有的一步，不該在你不知道的時候就開始讀。

## GitHub App：名字、callback、agent endpoint

[5:38](https://www.youtube.com/watch?v=hjsO72uf6bE&t=338s) 一個能用的 extension 需要兩件事：公開可連的 web application，或至少能提供 endpoints；以及註冊一個 GitHub App。再加上你設的權限。

[8:06](https://www.youtube.com/watch?v=hjsO72uf6bE&t=486s) Preview SDK 目前只給 JavaScript 和 TypeScript。Extension 本身只要能提供 endpoints，語言不限，他舉了 Go、Elixir，野心大的話甚至 Assembly。SDK 是開源的。想用別的語言做出 SDK 裡的東西，他說也可以叫 Copilot 幫忙 port。

[9:56](https://www.youtube.com/watch?v=hjsO72uf6bE&t=596s) 他在 GitHub 的 developer settings 裡走一遍已經建好的 app。名字叫 product manager，在聊天裡會變成類似 `@the-rmgr`。Homepage URL 他先填跟 endpoint 同一個網址；若上線，他說比較可能是官網上的品牌頁。打開那個網址，看到的是 welcome to the co-pilot extension template。Callback URL 即使不用 OAuth 也要填。他說去年夏天這功能出來時，跟 GitHub 的人一起看過，這個欄位當時仍是必填、卻沒被用到，他就填同一個 URL。Webhook 不要開。

[11:49](https://www.youtube.com/watch?v=hjsO72uf6bE&t=709s) Account permissions 裡，Copilot chat 至少要 read-only。只有 no access 和 read-only 兩個選項，沒有這個就不會動。Editor context 是另一項，看 extension 要不要。Copilot 那個分頁預設是 disabled，這次要設成 agent。Skill set 是另一個選項，像一組 Copilot 能用的 tools，今天不走那條。Endpoint 是 Copilot 會對這個 URL 做 form post 的地方。他寫的說明是：你是一個古怪的 project manager，會提出幽默、離譜的產品功能點子。

## 現場：port forwarding、確認事件、以及一份 PRD

[13:11](https://www.youtube.com/watch?v=hjsO72uf6bE&t=791s) Preview SDK 有 helper。建立 acknowledge event 之後，Copilot UI 知道請求進來了，畫面會開始動。做完再送 done，叫它停下來。也可以拿最新一則 user message。還有驗證並解析 request 的功能，因為這終究是別人可以 post 的 endpoint。他用 Hono，只是 template 的選擇。

[14:12](https://www.youtube.com/watch?v=hjsO72uf6bE&t=852s) 本機要公開到網路上。他在 VS Code 用內建的 port forwarding，轉 port 3000，並從預設的 private 改成 public。聊天室裡他貼了那個網址，打開應會看到 welcome to the Copilot extension。

[15:02](https://www.youtube.com/watch?v=hjsO72uf6bE&t=902s) 他打 `@` product manager，再打 `/feature`。Debugger 裡先檢查 request 是否有效、payload 是否通過 GitHub 的特殊 headers。Extension 回了一個點子：procrastinator's pause button。他回饋說只能每五分鐘按一次，它把五分鐘加進去。他再打 `/done`。這個古怪 product manager 是他在 All Things Open 講完之後，朋友建議加上的。字幕裡那個朋友的名字聽不清。

[16:46](https://www.youtube.com/watch?v=hjsO72uf6bE&t=1006s) Preview SDK 還能輸出給 Copilot 的確認。它問要不要產生 product requirements document，他選 yes。討論被收成核心想法，他的建議進去了，後面是 requirements。他說這個 demo 很蠢，但拿掉古怪點子之後，當真正的 PRD generator 會有用：用一件你自己需要的東西去延伸 Copilot。

[17:55](https://www.youtube.com/watch?v=hjsO72uf6bE&t=1075s) 他秀 acknowledge 怎麼讓 spinner 開始轉。UI 在 github.com 和 GitHub Copilot 裡不一樣。點子存在一個 hash table 裡，再整理成比較好看的輸出，markdown 會清一下。他承認把 template 全部 inline 寫進去不是好做法，這只是小 demo。畫面裡還有一個他打算修的 TypeScript error。

[18:43](https://www.youtube.com/watch?v=hjsO72uf6bE&t=1123s) 第二次他停在 confirmation event，detach 之後按 accept。時間到了，Q&A 沒做。主持人說 template 值得一顆 star，請觀眾去 star repo，後續問題直接找 Nick。
