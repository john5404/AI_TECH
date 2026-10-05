# What is AI Native Development - and how can we prepare for the journey with Guy Podjarny

片長約 31 分鐘，英文自動字幕。AI Native DevCon 開場。Simon 把舞台交給 Guy Podjarny，Tessl 的 founder 和 CEO，先前創了 Snyk。字幕把 Tessl 聽成 tessle、Tesla，把 Snyk 聽成 sneak。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=e1a3WuxTY-k)

## 一句話

軟體一直在用少一點控制，換更多人能做出東西。LLM 把這條路推到自然語言，但也交出太多控制。Guy 認為解法不是把今天的流程畫快，而是把 what 和 how 拆開：變更累積在 spec 上，code 從 spec 和 context 生成，並永遠拿 spec 來驗證。他把它叫做 AI native、spec-centric 的開發，而且認為這是一套範式，不是一個產品。

## 從打孔卡到一句英文，每次都交出一些控制

[0:20](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=20s) 他說 AI 對軟體開發的影響很大，演進該是社群一起做的。Tessl 會繼續投在這個社群，讓分享經驗和工具變容易。這場講他們怎麼看 AI native software development，以及社群和 Tessl 自己前面的路。

[1:51](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=111s) 軟體開發的旅程一直是讓它變容易，因此更包容。打孔卡要懂很多、肯花時間、還要摸得到機器。Assembly 要熟練和耐心，但很強。C、C++ 更好做，更多人進來，當時也有人抱怨真要控制還是得下到 assembly。Java、JavaScript、再到 Python，每次敘事都一樣：更好做，就有更多人，代價是交出一些控制。

[2:44](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=164s) 他用數檔案行數當例子。C 裡你管 file pointers、fopen、記憶體 buffer，控制多，風險也多。Java 沒比較短，但 buffered reader、read line 更像英文，也更安全：很多選擇移到系統，不能隨便覆寫記憶體，強迫你處理 exception。Python 和 JavaScript 更像英文，記憶體配置、怎麼開檔、預設值，大多不在你手上。

[4:02](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=242s) LLM 讓你用自然語言說：印出 example.txt 的行數。這在軟體演化的軌跡上，他想要。風險是控制交得也許太多。你無法量到它印的是那些字的意思，而不是把字印出來。今天沒有量這個的方法。要從第一原理重看開發。

## Code 把 what 和 how 綁在一起，最後只剩 code

[4:57](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=297s) 今天的 code 把軟體做什麼、和怎麼做，耦在一起。他放一個故意不命名的函式，看得出 for loop 和計數，要自己推出這是 sort。函式名稱和註解是我們靠的描述，但做過軟體的人都遇過名稱不對、註解不見，因為沒有功能上的壓力讓它們保持正確。

[6:05](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=365s) 另一個也是 sort，what 相同，演算法是 merge sort。Selection sort 比較好懂、記憶體少、比較沒效率；merge sort 快，但很多遞迴和記憶體。兩者都合法，說明同一個 what 可以有多種 how。看到這段 code，看不出原本的需求是開發者一時興起，還是有意符合要求。就算當時根據資料做的選擇，資料變多變少了沒有、是不是很多人共用這個 utility，都無從得知。字串陣列還會得到 case sensitive 的排序，那是故意的，還是從來沒被寫下來的實作決定。這些都變成應用的事實。真相坐在 code 裡，code 同時描述行為和實作。

[7:35](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=455s) 於是開發變成 code-centric。簡化地說：需求做出 code，打包給人用，然後希望你花時間寫文件和測試。希望而已，因為沒寫也不會立刻出問題。時間一久，真正留下的是 code。兩年、三年、四年後找到當時需求的機會很低。套件是建置產物，沒有要珍惜的本體。文件和測試是局部的，代表不好。增強把 code 加大，修 bug 在各處加小塊，edge cases 加進不優雅的 if，生態系變動逼你做不自然的升級。Code 變亂、變大、裝不進腦子。於是談 onboarding、做很貴的 refactor。文件和測試跟 code 沒有功能上的連接，應用沒有它們也能跑，只是開發和消費會比較差，於是過時。變更變得有風險，人變得怕風險。新作業系統、新依賴、服務改變，每一項都貴又險。幾年內，幾乎每個專案都有一大塊時間在 keeping the lights on。他說這不是在怪誰，幾乎是軟體開發的必然。

## 今天的 AI 工具把線畫快，沒有把圖換掉

[10:23](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=623s) 他是很多 AI dev tools 的粉絲，Tessl 和 Snyk 都在用，也建議別人用。它們很有幫助，但沒有改變那張大圖。它們讓線更好、更快：增強、修 bug、edge cases、遷移、文件和測試的苦工都比較好做。留下的仍是 code。Prompt 和那種新的使用方式，是用語言互動，然後生出更多 code。有人說它們生得太多、太快，維護負擔反而增加，因為很會生 code，卻不負責之後的維護。

[11:22](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=682s) 他認為 LLM 可以拆開 what 和 how，有幾個原因。說你要什麼比以前容易：語言、mockups、畫面、口頭，不必正式結構。機器現在會寫 code。兩者加在一起就是你在 Claude 或 ChatGPT 裡做出一個應用時看到的事。字幕把 Claude 聽成 claw。第三件比較少被討論、他認為是很大的 unlock：LLM 會補缺口。你可以說做一個 tic-tac-toe，而不解釋規則。以前每次都得把每個小節講完，唯一不用講的是底下已經完全解決的問題，例如 Java 的記憶體管理，而且你被限制在已經做好的 building blocks 裡。用 LLM 的平台可以愈來愈會補這些缺口。

[13:19](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=799s) 他比喻合作過的代理商。若對方已為你做過五個行銷網站，第六個只要很小的 spec：他們認識你、認識這個領域。第一次合作，spec 要大一點。若他們從沒做過行銷網站，要給更多。若是你不太信任執行、只想要火力的低價代理，也要更多。LLM 一樣。把它訓練到認識你、認識一種應用，它就比較像團隊裡最資深的人，給很少規格就能做；否則像最資淺的。

[14:13](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=853s) 所以 LLM 讓 spec 變得實際。以前的 spec 結構差、難做、過度詳細，而且只能用到預先做好的積木。現在可以有彈性、可以補缺口。變更不再累積到實作：增強、修 bug、edge cases、生態系變化，改累積到需求。需求旁邊配上測試，放進同一份 specification。Spec 說系統做什麼，並帶一些例子和保證，只驗證到你在乎的程度。你可能要一顆按鈕，不在乎顏色。文件、software bill of materials、各種 attestation、mocks、API 文件，這些附屬物變成生成物，永遠對著 spec 核對，所以能跟上。他們把這種 spec-centric 的新範式叫做 AI native software development。

## 知道它在做什麼，然後才談自主維護

[16:07](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=967s) 第一個好處是你永遠知道軟體在做什麼。Code-centric 裡，從 merge sort 改成 quick sort、或改按鈕顏色，可能無意間改了應用在做的事，因為除了那些沒有功能的附屬文件，沒有地方更新「你改了什麼」。Spec-centric 裡，每條會改 code 的路徑都先確認 spec 仍被遵守。Spec 被系統性地套到 code 上。

[17:38](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1058s) 軟體也比較不脆弱。今天加一個功能就可能弄壞另一個。你測了新功能，但你碰了 code，只能靠很少完整的測試知道沒弄壞別的。Spec 裡，你把想改的功能寫進那份已經列著其他功能的文件，先看得到牽連；code 每次生成都拿整份 spec 來驗證。理論上不會弄壞應用，實務上總有 edge cases。你更知道它在做什麼，改得更快，也比較敢試，而不是停在害怕裡。

[18:23](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1103s) 再往下是可攜。Compiler 讓同一份 code 跑在多種平台和架構上，相對 assembly 像魔法。Spec 再往前：同一份規格可以生出不同語言和 stack。要 JavaScript 或 Python、iPhone 或 Android 都可以，但取決於系統對那個生態系熟不熟。功能的定義在 spec 和驗證裡。他開始問語言無關的軟體該怎麼想。也可以選更安全、更精簡的 Rust，或偏 web 的 JavaScript。生成時還吃你提供的 context：偏好、環境、是不是受預算限制、你自己的模式和取捨。Context 可以變得很細。Spec 加 context 餵進生成，軟體就能適應已知的 stack，或只屬於你的東西。

[20:29](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1229s) 他說 adaptable software 最大的好處可能是 autonomous maintenance。維護的定義是改 code、不改 spec：新作業系統、依賴升級、換一個服務，應用還是照舊運作。只要平台知道 context 變了，就用新 context 再生 code，而且永遠拿 spec 驗證。做不到的 edge cases 會浮給人，不會突然嚇你。絕大多數這種變更本身不難，難的是那份保證，以及能在 context 裡描述變更。維護負擔拿掉之後，既有軟體可以繼續跑，活系統上的開發者可以把時間放回創造。

[22:00](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1320s) 能驗證功能，就能做自動最佳化。加 agents 讓它更快、更安全、更可及。這些也靠 LLM 看 code 再改好，今天很難信任，因為不可預測、控制太少、可能弄壞應用。能對 spec 驗證，就可以掛上一串改進：漏洞出現就找出、修掉、確認沒壞；補合規；找最佳化，甚至知道不同瀏覽器的新技巧。部署之後也能自我最佳化。今天看 telemetry 再改，很貴、變更有風險，所以做得不多。Spec 讓你從資料看到瓶頸、生出處理它的 code、驗證、再部署。軟體自己 harness 自己。成熟軟體本來就會變好，這裡是更自動、更細、更快。還可以做動態版本：晚上便宜、白天快；或依使用者、依環境個人化。這些都是 adaptable software 的延續。

[24:38](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1478s) 旅程最後回到那件事：開發變得更包容，因為創造的容易程度被拉到語言。他摘要成：用很少的字做出很大的東西，同時有夠強的控制，才能把開發變好 100 倍，而不是在今天的問題上繼續打補丁。

## 規格怎麼寫，以及這不該關在少數平台裡

[25:39](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1539s) 他承認這有點理想，還有很多要建。第一個開放問題：那個神奇的 spec 是什麼、怎麼驗證。他們在 Tessl 有一些理論上的答案，還在做。他認為指定和驗證都會有很多種。手機遊戲、pacemaker、行銷網站，強調的東西不同。驗證也不同，有的需要已部署的環境；infrastructure as code 要怎麼驗證，就是例子。這是生態系的事，所以是社群的事。

[26:41](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1601s) 行為不對的時候怎麼辦。若 code 不是你寫的，runtime 要怎麼 debug、怎麼觀察。這和 assembly、Java bytecode 不完全不像，仍得處理：怎麼知道有問題、怎麼找到根、怎麼修、怎麼在 spec 這個較高的層觀察正在跑的系統。很多力量來自把決定交給 LLM，例如 tic-tac-toe 的規則對不對、它選了 merge sort 還是 quicksort、你什麼時候在乎。自由度要有新的方法去碰，不能只是黑盒、然後希望它對。那不是夠好的控制。要能在需要時覆寫，並把決定提升進 spec。

[27:44](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1664s) 部署上，這種會變的軟體要怎麼做版本、怎麼打包。他比成資料中心裡的機器，對上雲裡的 elastic compute。最大的問題可能是 AI native developer 的角色。他把它想成一門會變好的 software creation craft。多數軟體技能仍然適用：systems thinking、理解使用者、收成解法、往前看的取捨。今天最好的開發者不是因為 code 寫得最好。人會更往 architect 或 product manager 那條路走，用那些技能。但這個角色怎麼不同，仍要定義。

[28:41](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1721s) 所以他們把 AI native development 當新範式，像 DevOps、像 web development。不是一個產品，不是一個平台，是一套新的 best practices，因此是社群的練習。

[29:09](https://www.youtube.com/watch?v=e1a3WuxTY-k&t=1749s) 新範式會搖船：web、mobile、個人電腦，現在是 AI。它亂、難懂、和慣用的東西不一樣。在一個意見很強、範圍比較窄的封閉環境裡，比較容易吸收。他認為那樣 AI 發揮不了全部潛力；若未來只剩兩三個、三四個主導平台，像 mobile 那樣，對軟體開發是很可惜的。他要的未來是開放、可組合。做工具的人可以為不同 stack、不同情境做元件，專門化、演進、做出新能力；做軟體的人再把它們組進自己的環境。Tessl 投在 AI native developer 這個社群，請做工具的、在實驗的、只是有意見的人來談學到什麼、提出什麼、一起把這個範式做出來。
