# Deep Dive on AI Documentation: Live Demo with Omer Rosenbaum

這是 AI Native Dev 的下集。Simon Maple 訪問 Swimm 的 CTO 兼創辦人 Omer Rosenbaum（字幕 Omar、swim）。片長 33 分 21 秒，英文自動字幕。現場有畫面分享，點選和圖沒有被逐格念出來的地方，下面只記字幕裡說到的。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=p-1A1abSR9c)

## 一句話

文件的兩個痛點是：開發者不知道它在、也不知道它跟眼前的 code 有關；以及 code 一改，文件就漂走。Swimm 用 static analysis 和生成式 AI 做三件事：自動產生文件、在你最需要時讓你撞見它、並且跟著 code 更新。Omer 把兩種極端都示範了。你懂這段 code 時，AI 沒有你的上下文，他說有八成不是你要的。沒有人懂的 COBOL repo，則先用確定性的分析把流程拆開，再讓 AI 寫成英文，並标明還沒有人驗證。

## 在 git 的 code 裡撞見文件

[0:19](https://www.youtube.com/watch?v=p-1A1abSR9c&t=19s) Simon 先收前一集：要讓人知道文件存在、而且連到他正要改或正要學的 code；再讓 code 的改動和文件不要 drift。示範用 Swimm，但談的是這些問題本身。

[1:41](https://www.youtube.com/watch?v=p-1A1abSR9c&t=101s) Swimm 幫組織理解自己的 code。靜態分析加上生成式 AI，用來產生文件、在最需要時找到它、並在 code 變時保持更新。

[2:06](https://www.youtube.com/watch?v=p-1A1abSR9c&t=126s) 他從「文件已經有了」的那一端講。想像一個人要對不熟的 git 送出第一張 pull request，給 CLI 加一個新命令，跟 git add、git commit 並列。Omer 寫過一本 git 的書，知道一部分 code，但故意用新手的角度。Simon 說自己大學以後 20 年沒寫 C。

[3:03](https://www.youtube.com/watch?v=p-1A1abSR9c&t=183s) 開發者通常不先想文件，先讀 code。他搜到一個解析用的檔，字幕聽成 G.C。讀到一個叫 CMD struct 的 struct，旁邊有波浪圖示。那表示有人寫過文件、而且提到這段 code，作者可以是人或 AI。滑過可以看到：要讓命令被知道，必須註冊、把它加進去。文件標題是 adding a command。點開會在右邊打開。重點是他沒有搜尋文件，是瀏覽 code 時撞見的。文件裡的 snippet 就是那些行。

[4:12](https://www.youtube.com/watch?v=p-1A1abSR9c&t=252s) Swimm 文件是文字，加上三種跟 codebase 耦合的元素。Snippet 是 repo 裡某幾行。這份文件走過多個檔，說明加命令時要在 builtin 資料夾（字幕 my built-in）建新檔，還要改字幕聽成 built-in. Ag 的那個檔，以及 git.c。點 snippet 會跳到 code 的那個位置。Token 是一行裡的一段：這裡的 add 不是字串，而是第 485 行的那個 token。Path 是檔名或資料夾名。讀者一點就看到你說的 add 在哪。更大的好處是系統知道文件對到哪一段 code，所以改得動。

## 細改自動同步，有意義的改動要人補

[5:37](https://www.youtube.com/watch?v=p-1A1abSR9c&t=337s) 他在 code 裡改名、加註解，行號因此變了，並把 commands 改成 my commands。存檔後回到文件，Swimm 顯示前後對照：第 484 行的 commands 變成第 486 行的 my commands，snippet 也跟著變。這種他稱為 syncable。可以設定成自動按 accept，把 code 當成 source of truth。

[6:32](https://www.youtube.com/watch?v=p-1A1abSR9c&t=392s) 若是加一個新 flag，字幕把它聽成 tessel、Tesla、tesle，名字沒有再拼出來。這種改動系統找得到，但你會想補一句它什麼時候有用。新打的字一開始沒有連到 code，虛線底線表示它猜你指的是那一行的 flag。耦合之後，code 再演化，它會繼續對到同一個 flag。

[7:26](https://www.youtube.com/watch?v=p-1A1abSR9c&t=446s) 知道改動影響文件，有兩條路。Git hook 可以告訴你有東西過時，plugin 裡看得到是哪一份。圖示也會說話：過時的當下那個圖示不一定還在，改之前則看得到有文件對到這段。他們也接進 CI 和 PR。同一份 codebase 在 GitHub 上，這次改動讓一份文件過時，檢查失敗，寫著有 docs 需要你注意。點進去是網頁版，看起來像 IDE。這張 PR 把那個檔改名成 main.c，並把 commands 改成 sub commands。可以 accept，也可以在網頁上改字，最後 commit 回 codebase。文件是 markdown，跟 code 放在一起。

[9:19](https://www.youtube.com/watch?v=p-1A1abSR9c&t=559s) Simon 覺得圖示對從零看 codebase 的人很有用：這裡有東西能幫你懂，也幫你想怎麼改。若目的是要改 code，這些點就是可能 drift 的地方。不熟就讀，讀完再改；同時為了以後的人，把改動寫回文件。多數使用者偏好在 IDE 裡做，邊改邊接受。Omer 說找對文件時會有 wow：極端例子是有人寫了為什麼不要改，你正準備改，讀完才知道以前有人修過、而且解釋為什麼不是好主意。這種效果只有在你需要的時候撞見文件才會發生。圖示能放對位置，是因為連結一直維持著；指到錯誤或過時的 snippet，比沒有更有害。

[11:48](https://www.youtube.com/watch?v=p-1A1abSR9c&t=708s) 文件是 repo 裡一個資料夾中的 markdown，字幕把資料夾聽成 sswm。它們跟 code 一樣被版控。Checkout 某個 commit 或 branch，看到的就是對應版本。既有的 markdown 可以匯入，本身就能用；再走一遍，把對 code 的引用補上。沒耦合的字會出現建議，例如一個字母 T，它問你是不是指這裡的 T。檔名或變數就更有意義。

[13:51](https://www.youtube.com/watch?v=p-1A1abSR9c&t=831s) 沒有額外上下文時，AI 的建議他說有八成不是你要的。給對上下文，才做得不錯，八成這個數字他覺得公平。Simon 說這表示準確所需的上下文，很多仍在做改動的作者頭裡，所以這仍是 assistant 式的流程。PR 上的價值是政策：不能強迫每個開發者在 IDE 裡用 Swimm。十個人裡若只有兩個邊寫 code 邊改文件，另外八成會讓文件發陳。CI 讓整個專案都維持文件和 code 的對齊。

[14:51](https://www.youtube.com/watch?v=p-1A1abSR9c&t=891s) 文件格式經歷很多階段。一開始不是 markdown，是難讀的 JSON，重構過許多次。現在的 markdown 不用 Swimm 也能在 VS Code 或 GitHub 的預覽裡渲染。點了跳到對的檔、以及編輯器裡的那些方便，則只有 Swimm 有。

## 你懂 code 時，先選 snippet 再讓 AI 寫

[16:05](https://www.youtube.com/watch?v=p-1A1abSR9c&t=965s) 他要演兩個極端。一個是他引導 AI 写成他要的文件。另一個是沒人認識的 codebase：一個開源、很大的 COBOL repo，字幕叫它 Kell。

[16:35](https://www.youtube.com/watch?v=p-1A1abSR9c&t=995s) 多數人想像的是空白頁。他不喜歡空白畫面。他從 code 開始。若要向 Simon 解釋怎麼加一個 git 命令，會先給他看那個 struct。選取、右鍵、Swimm add to new doc，連結立刻建立。寫了內容之後，code 旁才會出現圖示。他再去定義、把 builtin 裡的 annotate 加進目前這份文件，再到實作處加第三個 snippet。這是他要講的流程，或這個例子裡反覆出現的模式。然後 generate draft with AI。標題是 how to add a new command in git。指示是用 annotate 當例子，說明怎麼加命令，結構要有 introduction、the process、adding a new command。

[18:46](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1126s) 出來的是一份已經做完重活的草稿：寫出文字、解釋在做什麼，並耦合到 code。例如先宣告 command function，再到 builtin 那個檔，然後實作命令邏輯，並照他的指示。不喜歡可以 revert、改 prompt。也可以自己改，或選一段叫 AI 寫短、寫好、寫得不一樣。他要抽出自己的知識時，引導方式是：這是我要你解釋的流程、這些 snippet、文件的結構。AI 生成能生成的，他再把只有自己知道的加上去。

[19:59](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1199s) 這個流程假設兩件事：你懂這段 code，而且你決定要寫文件。他自己實作完、想跟團隊分享時常用，因為可以精確引導，比全自動順手。對 codebase 的新人幫助不大。Simon 把它看成開發者在訓練隊友或團隊外的人，速度快很多，而且能點回 IDE 裡的 code。之後 code 再變，文件還在，所以不只在寫下的那天下午有用。

## 沒人懂的 COBOL：由下往上，用的時候再驗證

[21:37](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1297s) 換到那個 COBOL repo。使用者按 generate。先做 static analysis，弄清 codebase 裡的關係，然後建議一份模組清單，當作文件結構。模組可能是一個資料夾，或幾個資料夾加檔案，是邏輯元件。名字由 AI 幫忙修，把元件找出來、分開，則是確定性的。有幾套不同做法，不喜歡可以再建議一次。完全不懂 code 就挑一個、全部生成。若懂，下一步會說某個他稱為 VIP 的區段應該拆成 reports 和 transactions management。你可以拿掉 transactions，或加上別的。

[23:03](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1383s) 按生成之後，文件可以是幾十、幾百或幾千份，看 repo 多大。第一份是 overview：這個 repo 是什麼、元件怎麼互動，每個元件一段話，加上連到其他生成文件的連結。那些可以是元件的 overview，或一條完整流程。他認為沒人認識的系統，任何任務都值得先有高層概覽。

[23:55](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1435s) COBOL 的閱讀單位主要是 program。這種文件只為 COBOL 做，因為「一個 Python program 是什麼」說不通。文件解釋程式在做什麼，有一張圖。圖也會保持更新，因為圖上的元素耦合到 code。再逐步解釋每一段，點了跳到對應的 code。改 code 就更新。這份是 AI 生成的。Simon 擔心這裡對生成準確度的依賴大很多。作者不懂 code 時，要開發者逐份驗證又慢又難。

[25:26](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1526s) 每份都有聲明：這是 Swimm AI 自動生成的，還沒有人驗證。他們會多寫自己比較有把握的東西。讀者知道這是 AI、是來幫忙的。他不期待組織把所有文件驗證一遍，那不合理。開發者要改某段 code 時，像前面那樣在 code 裡找到相關文件，讀了有幫助，想加想改就當場改，不是一場大工程。反過來說，若生成的全錯，會誤導，甚至有害。所以他們花很多力氣給 AI 對的上下文，並在給使用者看之前驗證輸出。Simon 把驗證分成兩個時點：會寫的人是在寫的時候驗證；這裡則是真的要用來修緊急的安全或嚴重 bug 時，讀到哪裡就驗證到哪裡。Omer 同意，而且瀏覽 code 時那些片段就在 code 上面，複雜一點再點進文件。

[27:48](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1668s) 大組織裡，改 legacy 常常從業務需求開始。產品經理要決定改什麼、再去跟工程談，常常沒有人知道這東西在 code 的哪裡。所以同一份知識會生成不同版本。給產品和業務的版本幾乎沒有 code snippet，只講高層在做什麼。字幕裡的例子聽成：某個區段負責 evaluating and critiquing different fields，例如 contracts、album sequences，後面沒有聽清。產品經理可以告訴開發者大概要看這裡。點進去是同一條流程的技術版：程式叫什麼名字、呼叫哪個 section、再放大一段，說明每一段做什麼、呼叫哪些 section。懂了 codebase 之後，可以換成不同版本、不同語言、不同深度，給不同的人和用途。

[29:10](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1750s) Simon 說這不是 ChatGPT 覺得兩樣東西看起來像，就放進同一個盒子。核心是 static analysis 建出模型，再把 method call、物件收成放大後的 workflow、module、program，一直到業務側。Omer 說知識是由下往上建的。COBOL 的變數名常常沒有意義。他們用 static analysis 看所有用法，必要時讓 LLM 給一段文字描述，再在使用這個變數的 section 上依靠那段描述。他們一開始更偏 LLM、更 agentic：把 code 丟過去，叫它說自己需要理解什麼。試了很久、很多輪，它會把從一個地方開始、再跳到另一個地方的東西當成同一條流程，其實是完全不同的流程。要理解所有 code flow、再排出 overview 該記錄哪些、不該放進哪些，非常難。Overview 的難處是知道什麼不重要。得先畫出全部，收成幾塊，再決定這裡哪一塊重要。層級也在，例如分行作業之間的 bank transactions。所以要由下往上。Static analysis 加上 AI，最後才寫出通順的英文。

[31:31](https://www.youtube.com/watch?v=p-1A1abSR9c&t=1891s) 有免費 tier。他鼓勵聽眾直接聯絡，他們願意走一遍、看具體用途。企業客戶他們想先弄清慣例、以及什麼對你最有價值，因為同一份 code 知識可以生成很多不同文件，再依 repo 或組織客製。網站字幕聽得很碎，說的是 Swimm 的站。
