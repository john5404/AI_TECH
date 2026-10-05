# How Meta's Engineers Use AI Agents to Build iOS Apps (And What You Can Learn From It)

片長 35 分 18 秒，英文手寫字幕。Vivian 是 Meta 的 iOS engineer，Tessl 請她來講怎麼用 agent 做 iOS app。她做了快 15 年 mobile，日常是做 infrastructure，以及讓 agent 在他們自訂的 iOS framework 裡工作得更好的 context、skills 和 patterns。Android 她說自己只是勉強能做，但很多也適用。片頭約三十秒是後面問答的預告，正文從致謝開始。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=S1kUmkygP8E)

## 一句話

Mobile 比 web 難，不是因為 agent 不會寫畫面，而是 Apple 和 Android 閉源、文件常漏細節、驗證又慢，frontier model 裡本來就少這塊知識。她的做法是把範圍縮到最小，寫清楚 spec，再給 agent 一條能自己點 simulator、看截圖的驗證迴圈。沒有這條迴圈，手機上的失敗會一直轉，比其他 stack 更常轉到它承認自己不會。

## 閉源、每年破版、而且不能 hot reload

[1:27](https://www.youtube.com/watch?v=S1kUmkygP8E&t=87s) 她假設大家用 agent 做過 web 或 full stack，再談跳進 iOS 要多想什麼。三塊：什麼讓開發變難、她從每天跟 agent 相處和自己 side project 看到的做法、以及一份可以從零開始、也能自己改的 toolkit。

[2:21](https://www.youtube.com/watch?v=S1kUmkygP8E&t=141s) Apple 和 Android 本質上是閉源，iOS 更是。這會影響 foundation model 怎麼被訓練：底層 code 他們看得少。作業系統、平台 API、工具和語言都是專有的。她放的圖示綁著平台，連 iOS 26 都是很不一樣的 API。兩家對相容比較隨意。他們盡量向後相容，但版跟版之間有 breaking change。早期 Swift 從 1 到 2 到 3 幾乎是另一種語言，還得做遷移工具。那是 agent 之前，只能盡量做確定性的遷移。每年大版本常常再破一次，舊 API 定期 deprecated。很多平台 API 的細節沒有寫進文件。你又碰不到原始碼，社群也很難搞懂。

裝置更碎。她列的還不含全部。截圖裡有時還有 Apple Vision Pro。電話、平板、手錶，而且各有他們想強調的 UX。範圍要縮，agent 才比較容易成功。有人仍每年換手機，但裝置往往被鎖在某個最高 OS 版本，用來催你買新的。資料比較少、對價格比較敏感的市場，可能還在舊裝置、舊版本上。

[5:16](https://www.youtube.com/watch?v=S1kUmkygP8E&t=316s) 她每天在想的是：mobile 的驗證迴圈很慢。Web 可以開頁面，agent 甚至能直接看。Mobile 用的是專有 toolchain，給 agent 的新接法還在長。從 React 或 React Native 到 vanilla iOS，沒有 hot reloading。有工具能減輕，但基本上是寫 code、build 可能要幾分鐘、再看真正的 simulator 或真機。迴圈慢，錯誤和可靠性問題就多。Web 有 headless，不必在真正的 iOS 環境測 UI。iOS 不行。某些多點觸控仿不出來。Bluetooth 或定位得用真機。

## 最高 72%，Swift 幾乎還沒被量過

[6:49](https://www.youtube.com/watch?v=S1kUmkygP8E&t=409s) 兩週前 Google 發了她看到的第一份正式、比較完整的 mobile 開發 benchmark，建議去看。它把生態裡的缺口露出來。Google 發的，排行榜上他們的 model 最好，她覺得合理。她要標的是最高分 72%。其他像 SWE-bench、新 frontier model 發布時常見的，通常在八成到九成。缺口已經在，而且現在才開始量，還會變好。

她盯 Opus 4.6，字幕寫成 opus 46，因為這大概是大家現在會用的。她進 Android Bench，把 100 個任務分類。左上 UI 有 25 個，看起來很多。Meta 內部 UI framework 才剛開始量成效，光 UI 和 layout 就已經超過 100 條 prompt。還非常早，這只是模型表現的粗圖，之後可以更細。

[8:46](https://www.youtube.com/watch?v=S1kUmkygP8E&t=526s) Mobile 比較難驗證，不同任務的表現差很大。這也是她實務上看到的。架構和 dependency injection 還可以。再往下，裝置和媒體、build 和 migration，錯誤多很多。Opus 4.6 在一般軟體工程上很強。她下載 dataset 自己分析，同一任務跑十次。她點名的一個，字幕寫成 Bluetooth cloud，失敗率 100%。Bluetooth stack 她覺得難到人也不一定解得開。至少現在有數字，生態可以從這裡變好。Agent 擅長的事差很多，但它確實擅長不少事。

iOS 呢。她講了很多 Android。投影片之後可以看。同一天，Callstack 也發了 benchmark，字幕聽成 call stack。那是做 React Native 能見度的公司，所以 React Native 有一點訊號。Swift 的 iOS 還沒有扎實的 benchmark。最好的是 2025 年 5 月，一些研究者放了 28 個手做的例子，已經過時，也沒測最新的 model。才剛開始。若你覺得很掙扎，她說這很合理。Agent 做 mobile 的缺口，很多我們還不知道在哪。第一步是知道自己在哪。

## 先寫 spec，再讓它看自己做出來的畫面

[11:41](https://www.youtube.com/watch?v=S1kUmkygP8E&t=701s) 她覺得最要緊的是做出驗證迴圈。Frontier model 裡沒有那些底層知識時，尤其在 mobile，她看過無止盡的失敗循環。好的 model 或像 Claude Code 這種 harness 最後會停，說我不知道，換你來。她在 mobile 上看到的比其他 stack、比做 web 時多很多，字幕把 web 聽成 velopment。讓 agent 用真的生成出來的 UI、或跟 simulator 的互動檢查自己。訊號愈多，它愈能從錯誤裡回來，補上權重裡沒有的知識。

React Native 她覺得是很好的選項：一份 app，跨平台。Agent 補不了 framework 本身的限制。她全職做過幾年 React Native。高效能、會無限捲動的 feed，她不會選它。得來回穿過 JavaScript bridge，延遲本來就高。選 stack 的時候要懂這些，因為 model 自帶的 context 不多，得自己慢慢堆 skills、tools、rules。語言對語言的翻譯會把複雜度乘上去。React Native 的 app 翻成 SwiftUI 效果不好。iOS 和 Android 互翻人們很有興趣，她還沒講到那裡。轉一層可能非常難，有時從頭做比較好。

[14:30](https://www.youtube.com/watch?v=S1kUmkygP8E&t=870s) 她的建議是把專案範圍講到不能再清楚。要支援幾個 form factor、幾個 OS 版本、要不要旋轉、本地儲存用哪種、哪些能力要權限、要不要管資料和離線。若只是原型，範圍愈小愈好。以後再加，比一開始鋪很開、然後搞不懂 iPad 上 UI 為什麼怪，要容易。

最好的結果是很清楚的 spec 或專案計畫，加上能用的驗證迴圈。Agent 知道要做什麼，也能檢查自己的工作。他們試過把 SwiftUI 轉成自家的 declarative UI framework。比較好的做法是從 SwiftUI app 做出一份 spec，再把 spec 和另一個 framework 的 context 交給 agent 重做。直接給 code，它會搞混。Frontier model 更懂 mobile 之後，這也許會變。

她還有一套任務流程，裡面就有驗證。她注意到錯誤、複雜度會堆起來，agent 也不知道怎麼把東西接上。大約每 3 到 4 個任務，她跑一次 expert review：整體找 codebase 的問題、清一清，順便更新 skills 或文件。她覺得比較管得住。

## 一個空骨架，加上會自己點的 MCP

[17:34](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1054s) 她準備了 SwiftUI Agent Toolkit，給只想做一個 app 的人。很基本，烤進去的東西不多。右邊是模板怎麼走：一個空骨架，一些 skills、她寫的 plugin、設定文件，以及一個可以建 Xcode 專案的地方。她覺得這比直接跳進 Xcode 好。

Agent 這層以後會變。她用 Sonnet 4.6 很順，字幕寫成 sonnet 46。她說自己小氣，不常用 Opus，也不用 4.7。Claude Code 很好，可以直接用。要 IDE 的話 Cursor 可以，VS Code 也行。預設有一個 agent 會有幫助。最重要的是有人做的開源工具，字幕寫成 Xcode build MXGp，也就是接上驗證迴圈的 XcodeBuildMCP。它能跟 simulator 說話、點來點去、截圖給你看。

她把兩天前為這場做的 plugin 和 skill 拿出來。不一定是最好的版本，鼓勵大家做自己的，但對她已經有用。預設的 MCP：她叫它做一個 To-Do app。它有鍵盤，會幫你打字、按加號，全程截圖確認。她不必自己點。工具預設不懂 mobile 的慣例。Plugin 加的是：看 dark mode、不要壓到頂端的 Dynamic Island、畫面上的字和背景要有夠的對比，因為顏色會隨 light 和 dark 變。只是 MCP 外面薄薄一層。熟了以後可以再加，更貼 iOS guideline。

[22:16](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1336s) Toolkit 裡還有一個 placeholder images skill。她喜歡先做 wireframe，把左邊那張交給 agent 做 UI。它自己做的那張其實不錯，會到一個她記得的公開圖站下載很多圖，字幕聽成 Pick Image remote。它不知道那些圖是什麼。Skill 只是預先打包頭像、產品圖、hero、風景和建築。幾乎不用多寫 prompt，把畫面給它，它就知道上面那個圓大概是頭像，這些是產品，於是用包好的圖。這是一種 design template，讓最初的原型更豐富、更像真的。她的流程是先把 UI 和位置用 mock data 試完，再接真的資料和網路。一兩小時的 scaffolding，UI 會好很多。

[24:01](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1441s) Xcode 的 Apple Intelligence 剛推出。技術上可以在 Xcode 裡用他們的新 AI 工具，目前同時支援 OpenAI 的 API 和 Claude Code，字幕把前者聽成 open API。她覺得酷，品質差不多。對她是好不好用的問題。她現在的工具已經涵蓋大多數情況。Apple Intelligence 多給的是 preview：不用重新編譯就能看 UI。這可以是你要用它的理由。代價是得用最新的 Xcode，被鎖在那些 agent 裡，得用他們的 IDE。他們有 bridge 可以把指令送進 Xcode，但 Xcode 得開著，而且要批准很多次。開發體驗不好，以後會變好。她目前仍建議用那個公開的 MCP，可以走很遠。Toolkit 裡有說明和一個 skill，想試 Apple Intelligence 可以用。

入門她建議 SwiftUI，反正是 Apple 在推的未來，宣告式 UI 也是 mobile 在走的方向。要選 minimum deployment target，也就是 app 支援的最低 OS。她建議最近兩個版本。可以選現在的 iOS 26，但最近兩版在外面的資訊夠多，agent 知道發生什麼，又不必鎖在最新、比較容易出問題的 API。範圍再限：只做 iPhone，鎖住旋轉。

## 問答：技能太多，而且 simulator 不夠

[26:05](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1565s) 第一個問題字幕很碎，像是在問為什麼會切到 SwiftUI、是不是因為 model 就是這樣訓練的。她說兩邊都有。一是內部 framework 的 context 不見了。一定規模的科技公司，加上也許太自信、覺得自己做得更好的工程師，就會自己做一套。她說他們現在有點在吃自己的話。另一個是開發體驗和速度。Designer 想直接進來 vibe code 原型。Apple 的工具上面還有很多自訂。Meta 有很複雜的 build chain 和自訂 IDE，甚至有自己的 VS Code，為了能跑做了很多奇怪的事。不熟工程的人會非常複雜。用 SwiftUI 做原型，對習慣在 web 上 vibe code 的人熟悉得多，工具可以沿用。有驗證迴圈的話，IDE 也可以任選。所以他們看到 SwiftUI 被做出來，然後還得想怎麼放進不用 SwiftUI 的現有 app，或怎麼把那些 app 送到 App Store。

[28:00](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1680s) 再問 skills 的經驗。她說自己的答案可能不一樣。他們有 skill 好不好的驗證問題，Tessl 在解這個。Meta 的規模是數萬名工程師，多出來的問題是 skills 被寫得太多。Meta 的 code 是單一 monorepo，mobile、web、後端 infra 都在裡面。Agent 什麼都看得到，也常常不知道自己在看什麼。他們各種做法都在試。她沒在演講裡展開的是：做自己的工具，也可以延伸成改 code 本身。他們的宣告式 UI 跟 SwiftUI 很近，但重要的地方不一樣。若把它改得更像 SwiftUI，agent 第一次就做對，不必事後修。她說再過幾週來問，答案會不一樣，天天在變。

[29:46](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1786s) 有人拿 Replit 來比，問題本身聽不清。她沒特別試過 Replit，想法接近她看 React Native 的方式。她說自己是稍微有爭議的 iOS 工程師，不是純粹主義者。React Native 很好，解的是真的生意問題：很多人不想各寫一份 iOS 和 Android。Replit、Bolt 和其他服務幫你做 iOS app，也幫你送到 App Store。送到商店是她這場沒講、但很大的痛。離 bare metal 愈遠的風險是：Replit 不會做 Bluetooth 的時候，你卡住了，不知道底下發生什麼。她專門拿 Bluetooth 開刀，因為它太難。Expo 現在是正式路徑，她記得它曾經是可選的。Expo 有 eject，可以從託管環境回到比較原味的 React Native。她不知道 Replit 有沒有類似的出口。她會問的是：撞上工具的極限時，能不能走出來自己修。不能的話，你就被他們提供的東西限制住。她總會做一些 Apple 未必覺得是好主意的事，所以想直接碰到那層技術，盡量靠近底層。

[32:31](https://www.youtube.com/watch?v=S1kUmkygP8E&t=1951s) 最後一問是：這週做完，下週又要做別的，換成另一份 Claude 的檔、另一份 skill，怎麼知道新的比舊的好。字幕把這段聽得很碎。她說做法是組合，而且獨立開發者和 Meta 這種規模不一樣。因為 LLM 非決定性，字幕聽成 LMS，唯一能得到可靠數字的是 evaluations。即便現在，Meta 也很難在規模上跑 end-to-end 的 mobile eval，因為要真的 simulator，完整測試甚至要真機。他們沒有足夠的裝置、足夠的 Mac OS 環境來開那麼多 simulator。她僅有的退路是：做一些用來把別的 skills 變好的 skills，以及其他推廣 best practice 的辦法。他們也在做確定性的 linter 和其他一定會跑的工具，把非決定性 LLM 的一部分工作拿回來，交給 script 或 linter 去擋某一類問題。合在一起用。Eval 能帶你走最遠。沒有的時候，就只能手動下 prompt，而那很難擴。
