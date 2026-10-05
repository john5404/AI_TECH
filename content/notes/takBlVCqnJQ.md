# Why AI Coding Agents Are Here To Stay | Patrick Debois

Simon Maple 主持 AI Native Dev，來賓是 Patrick Debois。片長 48 分 15 秒，英文自動字幕。Patrick 大約一個月前去了舊金山的 AI Engineering World Fair，寫了七個教訓。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=takBlVCqnJQ)

## 一句話

Coding agent 已經從配角變成這場會的中心，但用法每六個月就過期一次。Spec 比 code 大，因為改 spec 就能再生成。長任務不該綁在會睡著的筆電上。平行做出很多版本之後，真正的下一關是怎麼審。生產力的倍數不是一個數字：任務簡不簡單、codebase 亂不亂、語言熱不熱，都會改那個 X。

## 一場不肯把 AI 栓在舊議程上的會

[1:03](https://www.youtube.com/watch?v=takBlVCqnJQ&t=63s) Patrick 說你分不出他是本人還是 AI。他現在玩的是 coding，以及它怎麼改 SDLC，覺得每天都在發現新的工作方式。他對 AI Native Dev 的貢獻之一是一份 landscape，用來跟上一批 AI 開發工具。

[2:57](https://www.youtube.com/watch?v=takBlVCqnJQ&t=177s) 很多會是傳統開發者會議或本來就在做 machine learning，再栓上幾場 AI。他覺得那是 bolted on。AI Engineering World Fair 是最早把 AI native 放在正中間的場子之一，談的是新東西，不是過去。辦了大約兩年到兩年半，一次比一次大。主辦從一開始就是同一批人，字幕聽成 Swix，也就是把 AI engineer 這個標籤做出來的人。新工具的 CTO、CEO 還見得到，因為大家都想站在產業要去的那個頭上。有給還不熟的人的 workshop，內容本身是往前的、在邊緣上。他們把大部分現場直播、免費，影片也免費，因為學習發生在社群和聊天裡。這次大約 3,000 人，對一個兩歲的會不算差。Patrick 不喜歡舊金山，但這場他願意破例。

[6:03](https://www.youtube.com/watch?v=takBlVCqnJQ&t=363s) Simon 說過去五到十年很多會搬離舊金山，可是投資和新創仍聚在那裡，所以 AI 工程的會留在那裡很自然。今年稍早紐約有一場 AI engineers summit，比較像邀請制，不是公開售票，是較小一群人重新聚集。以前有很多軌，例如 RAG；那一場整場就是 agent。Patrick 聽說秋天也許歐洲也會有，想辦得離家近一點。

[7:38](https://www.youtube.com/watch?v=takBlVCqnJQ&t=458s) 七個教訓：coding agent 真的到處都是；使用 AI 開發工具的想法得改；spec 變成新的 code；agent 跑在雲上；平行執行；CI/CD 是否往左移；生產力是幾倍。Simon 念部落格開頭的 TLDR，字幕起頭聽成 Cat ideas：把點子 pipe 進 spec，再 pipe 進非同步、平行跑的 agent，再進 review，然後 pipe 進平常的獲利。後面幾個字沒聽清。

## 到處都是 agent，但公司故事還很少

[8:52](https://www.youtube.com/watch?v=takBlVCqnJQ&t=532s) 前幾屆談的是 agent、RAG、embedding、fine-tuning，很寬的 AI engineering。這一屆是他看到 coding 佔了很大比例的第一次。以前 coding 是「有個 copilot，那就這樣」。因為它們變強，有一整軌 coding agent，較大的廠商也在發布。解釋常常是：AI 的用途很多，但 coding 變成特別有價值的那一塊。它不是旁邊的事，在這場會也在中心。

[10:19](https://www.youtube.com/watch?v=takBlVCqnJQ&t=619s) 使用者是不是更信任、更靠向自主，他說陪審團還沒回來。廠商在展示能做什麼。他很少聽到「我是一家公司，引进這些工具，得到這些價值」。那種比較經濟的故事大概是明年。紐約那場有一場關於 booking.com 怎麼引进，是他聽到最大的公司故事，字幕把引进聽成 introduced us。除此之外是廠商在辯護自己改進了什麼。會上的採用故事還很少。

## 六個月前的用法，現在就是錯的

[11:13](https://www.youtube.com/watch?v=takBlVCqnJQ&t=673s) 雲和手機是先有火花，再打磨幾個循環，看得到方向。AI coding 感覺每六個月就要重發明一次怎麼用。這點是 Sourcegraph 的人講的，字幕把名字聽成 beyond。你剛學會 completion，突然有了 agent，於是在下 prompt；然後有人說重點變成 spec。最大的錯誤是停在 completion，說我懂了。理想 workflow 還在找，但每六個月新工具會打開一種新做法。

[12:50](https://www.youtube.com/watch?v=takBlVCqnJQ&t=770s) OpenHands 的小例子，字幕聽成 OpenHand。以前是叫 agent 跑去，回來看 PR：agent A 做了這個，agent B 做了那個。他們發現需要一個對行動負責的人，於是把 PR 改成代表某個使用者。人對使用者的回應，比對一個 agent 來命令你好。另一件是大家剛習慣 IDE，又轉到終端機裡的 CLI。更自主、更非同步，因為它在別處跑，不必一直看，做完才回來。新功能是通知。我們討厭社群和內部聊天的通知，現在 agent 也會說：好了，你得做點什麼。

[14:19](https://www.youtube.com/watch?v=takBlVCqnJQ&t=859s) Simon 點名 Claude Code、Codex、Gemini，問是 TUI 還是另一個簡稱。Patrick 說 terminal UI。那個簡稱在比利時也可以是旅行社，他們決定不要用。Simon 看到的用法是：Claude Code 改完，人回到自己的 IDE 看 diff、理解、審查，再用 Git 回滾、維持版本。工具可以 headless，人並不一直留在終端機裡。Patrick 提醒，六個月前和 agent 聊天是同步的，終端機可以做同一件事。有人說 IDE 結束了。也許 code editor 會結束，審查仍在，所以還需要某種 UI 把結果看出來。若真的擁抱非同步，就要給更大的一塊，讓它跑幾個小時再回來。那表示得事先講得更完整，不能只丟一個小任務，否則它在猜，而你也不必留在那個迴圈裡。

## 改 spec，再生成，而不是丟掉的 prompt

[17:26](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1046s) 第三課是 spec 成為新的 code。OpenAI 的 Sean Grove，字幕聽成 Shawn Grove，講 model spec。Simon 說幕後在 Tessl 也分享過那段，字幕把 Tessl 聽成 Tesla。Model spec 用來引導某次生成。內部的說法包括：生成時永遠友善、永遠切題、不知道時該怎麼做。他舉的例子比較是訓練 model 去回應這些規則。同一套可以不用在訓練，而用在吩咐 model 做什麼。給它做某件任務或寫 code 的 spec，就是給較大的一塊。要改的時候，不是改那些從不記錄的一次性 prompt，而是改 spec，再從那裡生成。用 spec 訓練 model，和用 spec 生成 code，在那場簡報裡碰到一起。

[19:08](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1148s) 他們拿 spec 做 model 和 AI 的 alignment。Sean 也說，寫 specification 會把人對齊，因為得先同意手上的任務是什麼。Patrick 把給 model 的描述比成 code of conduct：我想要你這樣行為，烤進 model。對 code 也一樣：目錄結構、語言、慣例、流程。所以 spec 比 code 大：改 spec，就能從那裡生成 code。這和他們常講的 spec-driven development 對得上，字幕聽成 expect driven。意外的是它從 OpenAI 的模型訓練跨到 code generation，而且在那邊也成立。

[20:22](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1222s) Simon 問測試。有人說測試是 spec 的一部分，有人說測試比 code 更重要，因為它是意圖的證明。Patrick 轉述：若某個行為沒寫進 specification，它就不該重要；真的需要寫下來，就得在 spec 裡。這和幾年前的 executable documentation 是同一件事。它應該能處理的案例就是測試，是例子的一部分。AI 的 prompt 裡放多個例子，也很像把測試描述出來。他相信這有助於生成，因為 LLM 會看測試或例子，試著判斷成不成立。能不能完全信任，陪審團還沒回來。現在它也會生成測試，人仍要核對那些測試對不對。Spec 裡看得到例子，人可以從兩邊核對行為。

[22:28](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1348s) Simon 不久前在 podcast 上遇過 Baruch。那套做法用既有的 Gherkin 和 Cucumber，字幕把 Gherkin 聽成 Gerkin。用自然語言寫測試描述，人可以說同意，那就是 spec 的一部分，因為看得到意圖。Cucumber 把給定、當、則變成測試，中間沒有 LLM，也沒有非決定性，只要那三句是對的。Patrick 補：業務的人用行為測試描述功能，開發者寫出滿足測試的 code。現在可以用同一種語言當例子，讓 LLM 生成遵守那些 BDD 測試的 code。還不是 100%。但對應更順：不必自己寫，可以先長出 code，再看它跑。Agent 的迴圈不是以前 completion 或第一輪聊天在找的東西。沒過就看錯誤、再跑測試。那個迴圈對「應該達成什麼」有更多 context。

## 筆電會睡，桌面也複製不了

[24:54](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1494s) 第四課是 agent 上雲。非同步、跑很久的執行緒有三個煩：筆電合上就睡，長任務停掉；agent 吃 CPU，機器被佔住；一平行，限制更大。他最早看到的是 Amp 把 embedding 的 code indexing 放到雲上。大 codebase、機器沒有 GPU，本地索引很慢。然後是 Cursor 的 background agent，有託管的執行。其他工具跟上，可以選本地或遠端。

[26:52](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1612s) 難的是怎麼在雲上複製開發環境。第一種嘗試幾乎是把你的程式環境做成虛擬的影子，複雜到不行，因為你說不出全部裝了什麼，也不能叫一聲就 clone 開發環境。於是人們轉向已經在 CI/CD 用的 container，讓 agent 跑在 sandbox 裡，本地容器或雲上都可以。成形的模式是：已有一個 commit，要在上面做更新，請 agent 做某件任務。背後是拉 repo、checkout 那個 commit、在雲上跑 agent、開 feature branch、交回來。這比複製整台桌面可靠。複製桌面他覺得荒唐，也不會成功。

[28:27](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1707s) 跑 agent 還有權限。若還是保姆式的是、否、同意，一條長執行緒會很煩。在 sandbox 裡控制網路、控制它能用哪些工具，比在筆電上好。這是人往雲上移的兩個原因，主要的 coding 工具都在做。整個 IDE 會不會上雲是另一個話題。Cursor 上一週左右出了手機上的編輯視圖，可以從手機寫，不是在那次 summit。Simon 說自己錯過了，這個領域快到追不完。

## 做出三個版本容易，選出一個才難

[30:00](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1800s) 第五課是平行。一種是把任務拆成子任務，不同 agent 做，也許不同 model 做適合它的那塊。另一種是同一個做法跑三次，或三個 model 各跑一次，再選最好的。Agent 本來就要等，等得起就多跑幾個，做完再同步。Patrick 分成兩塊。一塊是更快交付：像五個開發者拆功能、各自做、再合併。現在拆計畫的是 coding 工具。難點和人一樣，最後要合併，東西會重疊。可以用 stacking 把幾個變更疊起來。另一塊是變體：三種框架、三種解法，或三個為什麼效能差的假設。

[32:25](https://www.youtube.com/watch?v=takBlVCqnJQ&t=1945s) Simon 喜歡叫做出來的那個說明為什麼比另外幾個好，甚至讓它們爭。Patrick 說這正是難處。五個人分頭寫，還是要一個負責的人說哪個最好。工具很會製造變體，挑選的負擔在人。也許可以請一個 LLM 依其他 agent 的輸入說哪個最好，或把 diff 並排、給出測量。他覺得下一階段是更好的平行審查。有些工具的新介面不是只顯示一個版本，而是讓你比較三個版本，或三個渲染結果。他和同事 Tom 想過：若常被要求 vibe coding 做出一個 app，能不能讓 agent vibe code 一個用來審查的 app，做出最適合挑選的介面。審查的負擔仍在人身上。降低認知負荷、幫人看懂，大概是這段旅程的下一相。

[34:59](https://www.youtube.com/watch?v=takBlVCqnJQ&t=2099s) Dagger 的 CEO Solomon Hykes 展示的是：從 IDE 叫一個 MCP server，說要幾個變體，它去做，拉回來時每個變體已經在一個 branch 上，點進去看，再合併你要的那個。不是一套完全不同的 UI。Patrick 補這條路怎麼走過來：去年有人發文開五個 IDE 視窗，在同一份 codebase 上一起寫，結果是災難。下一相是把目錄 clone 開、再併回去，也就是 git worktree，字幕聽成 get up work trees。環境隔離不夠，於是放進 container，最後放進雲。現在的問題是怎麼併回來。Cursor 有一套描述得不多的遠端協定，從遠端伺服器回到本地 branch。Dagger 類似，東西在 container 裡，幾乎像一次 git merge 拉回本地。所以從意圖、拆任務、平行執行，走到審查。不管喜不喜歡，審查是下一個前線。

## 回饋不必等合併，倍數要看你在比什麼

[37:41](https://www.youtube.com/watch?v=takBlVCqnJQ&t=2261s) 第六課讓 Simon 困惑：CI/CD 怎麼往左移。Agent 有了 spec 和例子，做的測試比我們平常持續做的多。人還在本地 branch 時，就可以把同一套 CI/CD 轉起來，讓 agent 跑。不是所有測試都得在中央的 CI/CD 上，code analysis 或其他檢查也一樣。以前做得到，但平行之後規模大了。過去總說 CI/CD 才有真正的環境。若 agent 能有自己的 CI 環境、做同樣的事，開發者的回饋會快很多，不必等整次合併才啟動，也不必等進 main 或 staging。

[39:11](https://www.youtube.com/watch?v=takBlVCqnJQ&t=2351s) 他還提到 Josh Albrecht，字幕把頭銜聽成 Blue CTO。嚴格的 spec 能在價值流更早抓住問題。Simon 問：意圖寫清楚，是不是更容易驗證實作是否遵守，也更容易生成該有的測試。Patrick 說，傳統上 spec 來自產品經理，我們把它拆成 code。安全掃描若只掃 code，code 只是一種實作。若它知道意圖、知道該有的行為，檢查會好很多。我們把那份資訊丟掉，像傳話遊戲，卻假設下一個 agent 或工具知道。若大家都能回頭看同一份 spec，理解發生了什麼的機會比較大。他比成拍電影：把沒採用的鏡頭和 take 都剪掉，只留最後成品，就不知道這部片怎麼拍的；要重做時，不記得用了什麼光。管線末端把 metadata 丟了，是類似的事。Spec 對齊的不只是人，也是整條流程裡的 agent，讓它們都碰得到那份核心意圖。

[41:42](https://www.youtube.com/watch?v=takBlVCqnJQ&t=2502s) 最後一課不是那個社群平台的新名字，是 AI 會帶來幾倍。會上有一位研究者講什麼在影響那個 X。簡單、重複的任務，AI 比較好，倍數比較大。任務複雜，它可能有幫，但你現在得花更多力氣調、改正。幫忙的力氣，和你自己真正知道的力氣，要平衡。跑很久的 codebase，多年下來有不同標準、不同約定、不同術語，會搞混 AI，就像搞混人。問 coding standard 在哪，五年裡可能有七套。不一致會讓效果下降。規模大，比較能用更大的機器做索引、找到該改的地方，他覺得這個因素比較小。最後是 LLM 受過訓練的語言：熱門還是冷門，會影響生成。這些都是某個時間點的快照。而且後來不只是一次生成，而是進入迴圈，迴圈裡有文件、有 spec，所以倍數在上升，但不是一個可以亂報的超額。小、新、現代、乾淨的語言，和較舊的企業或工具型 codebase，完全不同。他說「有了 AI 你是不是更有效率」大多是軼事，因為沒有講清這些條件。你到底在比什麼。

[45:00](https://www.youtube.com/watch?v=takBlVCqnJQ&t=2700s) Simon 念收尾：現在算好的做法可以變得很快，很難跟上。用六個月前的方式用今天的工具，就是用得很差。Patrick 的預測是審查會先被推進，然後是知識管理：自動化越多，越要記住 agent 學到的東西，把時間花在那裡。一直檢查工具很挫折。很多人說看過工具 X，對我沒用；也許隔天版本就跳了，或用法不同。他叫這是 innovation tax，得付嘗試新工具的稅。和以前的技術浪潮不同，以前會說它在成熟；現在是工作方式一直在變。Simon 說不能以為今天用的這套可以撐幾年。Patrick 請聽眾把學到的故事留在留言裡。
