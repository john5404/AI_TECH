# AI Product engineering - how AI is changing our products with Patrick Debois

Patrick Debois 講 AI coding 這類產品怎麼往前長。他說大家興奮超過一年半、快兩年。投影片切得很快，demo 和投影片可以之後再看。片長約 34 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=D_iNSIa3FF4)

## 一句話

多數人認識的還是 GitHub Copilot 補完，或把 ChatGPT 的 code 貼進 IDE。他要講的是產品已經走到更遠：套用、多檔、自帶模型、把 context 灌進編輯器、用規格驅動計畫，然後人的工作從寫 code 變成 review。瓶頸換了地方。信任要靠執行、指標和權限，不是靠感覺。收尾他說我們該停下來做東西，改做會做東西的東西。

## 編輯器先把複製貼上拿掉

[0:17](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=17s) 起點是大家都知道的 Copilot：寫註解，AI 補完。然後 ChatGPT 來了，變成問一句、生成、讀過、滿意就貼上。那不是這場要停的地方。

[1:33](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=93s) 新功能第一件是直接 apply，不必再複製貼上，他稱為 instant apply。Tab 也不再只顯示一行，而是整塊多行編輯。再進一步，Tab 預測的不一定是下一行：人在改下面的函式，它會猜你要回到第一行，並幫你跳過去。這些是 IDE 裡後來才有的事。

[2:38](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=158s) OpenAI 的 GPT 以外的模型出來之後，多數 IDE 可以自帶模型，甚至在本地跑。他覺得有點諷刺：人以為模型會是獨特優勢，編輯器卻向各家 SaaS 打開，也把模型那件事交出去，同時省成本、對隱私是改進。Reasoning model 把他看到的用法分成兩種：一種負責編輯，一種負責產生任務。他舉的工具字幕聽成 ader，用推理把 code 當架構來看。這會在 coding IDE 裡愈來愈常見。

[3:38](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=218s) 不是只看一個檔。GitHub 早就索引公開 repo，現在開始索引他本地的東西，好更懂他要的風格。生成測試之外，還能看測試覆蓋率，讓生成更貼他要寫的東西。這些功能當天就有，即使標著 experimental。Cursor 打開多檔編輯之後他真的興奮：一個 prompt 同時改這個檔、那個檔。他自己打的 code 變少，改成連續 prompt。不喜歡就再下一句，幾乎不碰 code，只 review。他說做新應用的速度衝破屋頂。

## 把 context 灌進去，規格才開始驅動

[5:16](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=316s) LLM 想吃更多資料。IDE 裡的第一種 context 是 `@`：不只打問題，還指定檔案，也能加終端機、文件資料夾、URL、甚至票券。`@workspace` 懂整個工作區。前端和後端都在裡面時，可以一起改。這些當天就能用。

[6:17](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=377s) 還有幫手把 context 帶進來。一個玩 GitHub 網址的東西，字幕聽成 GitHub UB，把外部 repo 收成一個大檔，適合帶進函式庫、框架、或別人的 code。文件則靠爬網。他秀 Cursor 裡一堆框架文件：若同時有框架文件、你的 code、以及你在跑的版本，結果會比單純生成好，因為文件可以自己更新，本地 wiki 也能加進來源。另一個工具把 URL、YouTube 影片或 npm 套件都收成 context。他看到一股把更多 context 推進 IDE 的驅力。

[7:37](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=457s) 廠商開始把文件優化成適合當 context，不必再經一層轉換。像 SEO、像為手機優化，接下來是為 AI 優化的文件。社群慣例也能進來：Next.js、Python、JavaScript、Java，各有約定。Code、文件，再加上「我們這裡怎麼做」。連模型沒怎麼訓練過的語言也行，他在 Objective-C 上覺得這是救命的。

[8:45](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=525s) 大家一直想要「請找出我們這裡怎麼做事」。GitHub Copilot 較早說可以 fine-tune，但是雙面刃：公司不想把自己的東西拿去公開訓練，又渴望有自己的風格。他覺得這條路滑，也還沒完全到位。繞法像文件一樣，做一組規則：行動開發怎麼做、目錄結構、資料庫怎麼設。這是個人風格，也可以是公司風格，問 LLM 時加進 context。元件也算：指定前端要用哪種 UI 元件、哪個框架。Context 超出單純的 code 和文字。

[10:17](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=617s) 很多專案從設計開始。工具能生成完整設計，而你通常已有要實作的畫面 mockup。現在可以上傳設計，問怎麼做出類似這張截圖的 UI。多模態給你一個起點。做錯了還可以說不要長這樣、要長那樣。開發者也開始自己留 session：個人風格、專案細節、做過的決定和步驟，像 changelog，當成 memory。它記得先前的規格。有了規格，還可以叫它做計畫：先這步、再那步，這是推理的一部分。他說 keynote 提過，有些事在 chat、有些在編輯器，然後走向規格、驅動計畫、最後到 code。把規格留在 coding 旁邊，類似 ADR 或決策記錄，才不會忘掉。再往前是產品需求：我們想要事情怎麼做，以及我們想要什麼，兩種混在一起很有力。

## Review 變成瓶頸，看的方式要換

[13:03](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=783s) 規格在生成大量 code。他覺得工作從寫 code 變成 code 被生成、人愈來愈在 review。瓶頸移到這裡。Diff 大家習慣，chat 會解釋，現在可以用 AI 減認知負擔：哪些變了、哪些要緊。既有 code 拿掉 boilerplate。他舉濃縮檢視裡的一句描述，大意是把下一行結尾的 I 拿掉。這樣 review 生成的 code 會快一些。另一種是拆步驟：這個檔因那個理由改了，那個檔因別的理由改了。一整塊大 diff 會把腦子塞滿。部分接受也出現了：這個檔可以，那個要改完再進 PR，另一個還想改進。

[14:35](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=875s) 生成變便宜，所以看到的可能不是一個版本。這個例子裡前端有三種味道，要挑一個，回饋還能改進下一輪生成。成本下降，選擇變好。即時回饋是大家愛的。他叫它做一個影片應用，結果大家被 rickroll，因為它就是會這樣。要緊的是做出來的東西要能看到它怎麼運作，工具愈來愈把呈現和影響秀給人。

[15:30](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=930s) 有一張他說有點糊的投影片：左邊規格、右邊 code，兩邊要好切換。Code 改了，文件或規格要更新；規格改了，code 要更新。不一定是文字。生成 infrastructure as code 時，它用圖給他看影響，認知負擔換一種看法就能承受。整個 codebase 的視覺化也是在換一種看問題的方式。模態也可以換。Prompt 打得愈來愈多，為什麼不能用語音。他幾乎不打 code，以前開口唸冒號那些符號很痛苦，現在用自然語言追問就好。也有人把探索想成 canvas，只是 canvas 上混著 code、需求和設計。資料科學流行的 notebook，被拿來當雲端環境的可執行文件。他要編輯器適應使用者的心智模型：不一定是文字編輯器，可以是針對領域或問題的東西。

## 信任來自跑得起來，也來自不准碰

[17:48](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1068s) Review 變好之後，問題是信任多少。Devin 較早讓人看到回饋迴圈：chat 裡是需求，瀏覽器、編輯器、shell 連成一個不斷修正的系統。它看瀏覽器、複製貼上、看終端機的錯誤、改 code。這把人手工做的 boilerplate 拿掉。自動化常常是信心變夠之後才接手。終端機錯誤可以加進 chat，或叫它修這段 code。瀏覽器錯誤也行。Chrome 裡也有 AI 能解釋，再送回編輯器。Lint 和錯誤還不夠，真正難的是執行：sandbox、preview branch，回饋怎麼拿。他舉一個 shadow environment，AI 在裡面試不同做法，檢查東西是否還能執行。

[19:42](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1182s) 可以查 API 的 breaking change：改了什麼、文件變了什麼、解釋給我。重構一大塊舊 code 時，品質有沒有下降。覆蓋率之外，還有 code familiarity：讀的時候人還懂不懂。CodeScene 這類工具追這些指標，再餵進改進迴圈。自動化的 threat modeling 也能當回饋。我們做過的工具都能餵回那個 AI loop。有趣的是什麼時候信任到可以 commit。他很掙扎要不要 autoc commit，還是仍要驗證。門檻是它對某次 commit 有多確定。可以收回。問題是我們怎麼知道夠好，人自己又怎麼判斷夠好。版本控制可以回到 checkpoint。資料仍要另外適應。這和環境裡處理失敗很像。

[21:36](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1296s) 一個 agent 已經這樣，多個會更難管它們造出來的東西。沒有一定程度的自主，人會卡在一直 review。工具不該只修錯誤，還要找知識：問它這件事重不重要、該不該存成事實。下次它就知道。PR 也一樣：它有 context、有 code、有我們想要的做法，就可以回答同事，再把回饋送回 code。我們仍說允不允許，但這是 coding 工具的方向。最後他舉一個用終端使用者的 A/B testing 回饋來改 code 的工具，問我們會不會走到用 production 的回饋改 code 或設定。

[23:19](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1399s) 他自己遇過多次，AI 改他的規格檔。他要一個機制說這些東西不能碰。找到的例子字幕聽成 log the file。也可以規定它不能改某些東西，或什麼都能碰。這變成 access control：agent 能做什麼、人能做什麼、覆寫在哪。這些不是實驗室裡的東西。他希望人看到 AI 開發產品進化到哪。這個時代要停止做東西，改做會做東西的東西。那是新的抽象層。投影片可以在 LinkedIn 上跟他要，談話也在他的 YouTube。

## 他的 stack，以及做不下去時就重開一場

[25:06](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1506s) 主持人問他真的在建造、不是在玩的時候，環境長什麼樣。他現在的 IDE 是 Cursor，但換進換出不難。他也用 v0、用過 GPT Engineer，評估過 Windsurf。它們都在模仿 VS Code，外掛還能用，所以下一款領先就打開它。按鍵類似、能幫他解問題，他就沒那麼在乎是哪一個。瀏覽器回饋這類仍有一點膠水 code，他覺得會被自動化。能手工做的就能自動化。

[26:34](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1594s) 產品 UX 怎麼被 AI 放大，他只短短碰過前端設計。使用者流程和 persona 的規格，工具裡還沒接好。他相信現在工具裡最常見的技術需求，會變成業務需求的一部分。兩個世界仍有落差，但會靠近。分析可以餵回去，他舉過真實使用者的 A/B testing：什麼重要、什麼不重要，當成需求或事實，開發新功能時就多一個回饋圈。

[27:58](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1678s) 開發者的角色是被加強，還是工作流其實沒變？他說自己大多在下 prompt，偶爾才改 code。因為他仍懂 coding，才知道自己要的 code 是什麼。有幾次文件目錄結構沒設對，五輪之後他看不懂它怎麼走的。人在往架構和技術上的設計決定移動，也更花時間在業務需求：這不完整、還要這個；它生成了，但我不喜歡那樣。迭代愈來愈發生在失敗上。你仍是開發者，得自己理清。工具愈來愈會修工具。你仍得知道什麼叫好，也許要多讀 coding 準則。他覺得諷刺的是，這變得比較像 Ops 而不是 Dev：看顧 agent、把它推回方向、處理失敗。

[29:53](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1793s) 有人問他還想要什麼產品功能。他把 production 的東西餵進來。兩邊工具仍嚴重斷開。討論過餵 log：迴圈裡它會看正在執行的 log，但 production 裡真正失敗的 log 呢。那會開一扇門，也幫你判斷改動的衝擊。他說也許只有兩個人在用，但那兩個人可能付很多錢，所以服務等級上的回饋圈也算數。主持人把它接到下一場講 code 效能的場次：把 production 的真實效能拉回設計和開發決定。

[31:16](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1876s) Dan 用 Cursor 或 Copilot 做 prompt driven development，實作壞在 AI 自己解不開，怎麼辦。Patrick 說，想像給了它 50 個 prompt，全部貼成一個大檔叫它當規格，多半不會成。要像開發者一樣走小步，漸進，中間有測試和驗證。步子愈小，他發現實作愈少壞。也會進兔子洞：他說不好，它堅持該是這樣。他就把對話重設，叫它忘掉其他的，重新給一個提示。不是換一個 seed，是開一場新的對話、換一個看問題的角度。主持人補了公司朋友 Filipe 的做法：先請 LLM 摘要它學到的，再用那份摘要開新對話。要從既有 context 裡拿掉或改東西非常難，重開比較容易。

[32:51](https://www.youtube.com/watch?v=D_iNSIa3FF4&t=1971s) 最後有人問 Figma 到 Next.js 的 code，哪個工具最好。他說自己不是前端專家。Figma 大概有某種整合，但他多用的是 v0，也就是 Vercel 那個。他不知道它有沒有直接接 Figma。主持人把問題丟回聊天室，並謝謝他這場。
