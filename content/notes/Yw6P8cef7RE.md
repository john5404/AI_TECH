# The Downside of AI Coding No One Talks About

Simon Maple 和 Guy Podjarny 的第 100 集。他們回頭看大約 45 小時的節目，用舊片段對照現在的看法。片長約 55 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tesla、Tessle，把 Dohmke 聽成 Donker，把 Westpac 聽成 Westpacking，把 HashiCorp 聽成 Hashorp。

- 原片：[YouTube](https://www.youtube.com/watch?v=Yw6P8cef7RE)

## 一句話

第一集 Guy 說開發會從 code 轉到 spec，實作交給 AI。他現在說那只對了一半。Spec 還在，但是子集。真正要訓練的是程式員：agent 該怎麼做決定。人若仍逐行 review，就會把生產力吃回去。人該住在 context development lifecycle，agent 去跑 SDLC。手工寫 code 可以留成嗜好，當職業得放手。

## 規格的是程式員，不是程式

[2:05](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=125s) 第一段是 GitHub 前 CEO Thomas Dohmke，現在的新創叫 Entire。他說誰預測一兩年後的樣子都會根本錯。我們會繼續做軟體，同時維護已經在外面的數十億、甚至數兆行 code。Simon 把這句拿去對第一集的 Guy。

[3:05](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=185s) 當時 Guy 相信最大的改變是從 code-centric 到 spec-centric。今天你拿到需求、寫 code，在 code 裡做一百個不會離開 code 的決定，code 很快變成 source of truth。AI native 會是你指定要什麼，AI 給實作。他現在說這部分還站得住：code 會變成可丟棄的，實作是為 intent 生出來的，圍繞你要做的東西轉。他想修正的是從 spec 到 context。那集是 agent 出現之前。你講要做什麼，LLM 補缺口，這沒錯，但只是開發的一小塊。你要團隊裡的人做良好決定：何時更新文件、怎麼協作、怎麼測、怎麼在品質和速度之間取捨、怎麼用既有基礎設施、怎麼排查。口號是從 speccing the program 變成 speccing the programmer。Spec-driven 不會消失，它是子集。新的軟體開發該圍繞訓練 agent 用你要的方式來建。

[6:09](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=369s) Simon 用 onboarding 接。就算雇到最資深的人，仍要知道團隊和組織怎麼運作，把政策和工作方式帶進新環境。Agent 也該這樣。Guy 補上持續訓練：有的是個人學的，很多是團隊學的，要累積再訓練。這些人類比喻今天都落在 context engineering。被討論最多的 context 單位是 skills。把舊片段裡的 spec 換成 skill，仍是自然語言、仍是 intent，但不是程式的規格，是寫程式的規格：在這裡你要怎麼開發。他說自己必須錯一點，不然沒有東西可學。

## 人一審查，速度就回到人

[7:54](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=474s) Thomas 轉述 Simon Willison：得習慣不是每一行都審過才上 production。一個 agent 可以 24 小時寫，再平行十個，人永遠審不完，那個人變成主要瓶頸，把 agent 的生產力抹掉。第三集 Peter Guagenti 談過 agent 也許寫出人讀不懂的 code，接近 bytecode。Thoughtworks 的 Birgitta Böckeler 在第 69 集說，她讓 agent 寫到跟 code 脫節，自己不一定是最適合 review 的人。

[9:12](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=552s) Guy 同意人是瓶頸。他舉 Elon Musk 的試算表比喻：極多格子裡只有幾格要人填，整體就降到人的速度。Review 會疲勞，也會慢。瓶頸會往下移。部署之後，系統變太快，observability、root cause、哪一個 bug 要拉回來修、再部署，人都跟不上。進階組織得把 SDLC 每一步找出來。不可靠又回到 context。Tessl 講 context development lifecycle：agent 操作 SDLC，人住在 CDLC 裡當嚮導。現在像一線經理，player-coach，派任務、看著、把事情做完。想要更多 AI 勞動力，就得變成二線、三線。那取決於你能不能定義什麼叫正確、把指示傳下去、認出錯誤、修好。跟 agent 溝通靠 context：你給的 tools，以及能觀察發生了什麼的基礎。

[11:43](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=703s) CDLC 是：產生一段 context，知道自己要什麼其實很難；測試和評估，像測人，但是更軟體化的 eval，看指示有沒有被遵守；散給那群 agent，對的溝通、對的 agent、對的時間；觀察之後學習，code 變了、定價變了、新模型出來了，再更新指示。AI 的演化常常是解下一個問題。現在下一個是 code review，之後是部署。最便宜的短期修法是讓事情發生，開發者把自己從瓶頸拿掉：看一眼說沒問題，或根本不看。要在 AI 想生成的速度上做，同時要準。學會更快地 review code 說不通。Context 可以把很多從人身上拿走，人當二線經理才說得通。

[13:59](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=839s) Cloud 的類比：waterfall 時代很多 review 是人。上雲之後得自動化，policy as code、infrastructure as code、自動化測試，DevQA 才變成一件事。人是瓶頸，就把人的動作自動化。當時很不舒服：自動化以後會部署更多 bug。若迴圈是關起來的，bug 可能更多，但找得到、修得了、推得回去。持續部署的系統更安全、品質更高。若只是拆掉閘門讓它流，系統更破。Cloud 的教訓用得上，而且比 cloud 快，少了慢慢試的餘裕。人讀不懂的 code 開始被當成安全問題。有人主張安全要求應是：LLM 不准產出人無法 review 的東西，包括 binary 或它們自己的語言，就算更有效率，因為要監督 agent。他不知道這是不是誇大。他的預測仍是產出讀得懂的 code，再編譯。

## 最好的人從來不是因為打字快

[16:16](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=976s) Westpac 的 distinguished engineer Annie Vella：有人享受精英級的解題、排行榜、最快解最難的題。她認為那不會再很重要。很多工程師把這個技能當成「很強」的核心。面試裡、個人身上，都得學會放開。AI 能生出夠好的，為什麼還要當那個層級的專家。產業大多同意，也最不舒服，因為我們享受它，也把它看成卓越：最漂亮、最乾淨、解最深的問題，而且快。

[17:20](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1040s) Guy 把人分成被 craft 驅動，和被 impact、被做出來這件事驅動。後者會覺得 agent 很好：點子到執行變短。人再快，那段時間仍在，中間本可以想別的事。有趣的是把點子做成、調、做架構決定。寫 code 是路程裡的一步，不是目標。對另一群人，寫 code 就是工藝。短、簡單、寫得對的 code 有美感，抽象好的 Java class 也有。他比成工廠家具和手工家具。手工可以帶非常局部、幾乎只能用 code 表達的偏好。絕大多數家具，工廠做就可以。愈來愈複雜的 code 也一樣。手工的好處，比快速、便宜、更多人做得出來，小得太多。點子從一個人傳到下一個人、最後才到寫 code 的人，知識在掉。拿掉中間人更有價值。手工 code 會留在某些縫、某些藝術成分，可以是嗜好，像業餘做硬體。當職業，得放手。

[20:29](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1229s) 五年前最好的開發者，五年後還是不是。他不知道有多少人的「最好」主要來自打造 code 的能力。他說這些年最好的人，是真的懂要解的問題和架構取捨，寫 code 只是把英文翻過去的通道。還是同一批最好的人，但對有些人，寫 code 在那個組合裡佔更大，這部分會縮小。寫得慢的時候，你邊寫邊想架構。變快之後，那個時間沒了，更多決定得事先做。浮現的做法是：agent 在寫的時候，把架構講明白，就算決定是 agent 做的。Review 那個。不怕叫它全部拆掉重做。重做的能力比做的能力重要。抓下來靠 context，有時是 spec。架構是一種 context：我們建成這樣、重點是這些，整份拿掉，按要求改寫成 Java 或 Rust。Simon 說失去邊做邊想，換到更快的迭代、更快的回饋、更快丟掉。Guy 說最近 Chad Fowler 那集講 regenerative software 和 Phoenix architecture，就是這件事。

## Ops 要的 context 更廣，也更不敢放手

[23:19](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1399s) 第 19 集 HashiCorp 共同創辦人 Armon Dadgar：你可以雇到最懂 Terraform 和雲的 SRE，他們不知道你們 production 跑 Windows、Rails 還是 Ubuntu。組織標準化在 Rails 上，是有用的 context。其餘都是 Windows，這個人開始寫 Linux，幫不上。Context 是好 AI 和沒用的 AI 的差別，不限於開發。Guy 說 context 是現在被用得最濫的詞。要把 intelligence 和 knowledge 分開。你很聰明，但你知道什麼。他也提到較近的一集，字幕聽成 Mirao，DZero 的創辦人，談 observability 裡的 context、排查和 root cause。

[25:05](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1505s) 誰揹 pager、誰在嚴重 outage 時救火，那些人對系統的理解很寬：應用類型、部署模式、基礎設施、作業系統、擴展、過去的 outage、還沒排進優先順序的已知弱點。看到當下的資料，當機或請求變慢，很快翻成大概是這個問題、大概是這個解。Production 是全部交會的地方。DevOps 裡，root cause analysis 正在變成最有用的用法：系統怎麼運作的資料量很大，這是 AI 的長處，再加上組織的 context，不是只盲看 log。它相對無害。真正讓人不安的仍是 agent 去部署。寫一些 Terraform 稍微安心一點。

[27:56](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1676s) Simon 問企業級 Terraform 有沒有夠好的訓練資料。應用 code 在 GitHub 上很多，企業的 Terraform 不是。Guy 說早期確實保守，現在仍有一批公開 module 和文件，宣告式的 HCL、Rego 會容易一點。大家仍說 agent 不太會寫 Open Policy Agent 的 Rego，有進步空間。他從使用者那裡聽到實質進步。兩個原因：真實使用累積了資料，有些來自私人來源，不見得馬上能拿去訓練，但有訊號；實驗室愈來愈靠 synthetic data。Infrastructure as code 和一般 code 一樣，有時更強：生出來可以部署，看結果對不對，那就變成造資料。限制是公開和私人、以及造資料的價錢。另一個是時間序列。看 observability，順序很重要。LLM 比較像在想「它是什麼」。Datadog 的 Ollie 談過他們的時間序列模型 Toto。也有新創在微調這類模型，字幕把名字聽成 traceable。資料量一大，不會整段灌進 Opus，直到帳單來。要更聰明，用開放、便宜的模型。DevOps 的 context 也許更關鍵，也更謹慎。技術限制是一部分。Blast radius 是另一部分：搞錯了，是在 production 把資料庫丟掉，很難救。先解 code review，再往下。

## 八成在用，和八成在做小事

[31:23](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=1883s) Simon 在紐約 QCon AI 碰到 Meta 的 Ian Thomas。Peter Guagenti 引用 Gartner：企業開發者今天大約 10% 用 AI 工具，2027 年到 80%。Ian 說 Meta 從少數人在工作之外試出價值、資深工程師比較懷疑，慢慢長到他上次查超過 80% weekly active users。Simon 說 Meta 跟 AI 綁很深，數字有偏。Guy 加鹽。一是 haves 和 have-nots。領導層買帳、做得到、業務狀態容得下這種又擾動又貴的推動，那些組織在前面。他們接觸的很多組織，刺進去看，有一群先驅用得很細，絕大多數仍很早期，大家在用 code completion。那個 10% 的統計也早了大約一年。Meta 是大型、技術、很往 AI 推的公司。二是我們還沒有夠好的指標說明「在用 agent」是什麼意思。他看到多數開發者把 agent 用在較小的任務，仍高度監督。委派的是小能力，指示很細：寫這一段。或立刻用得上的：學一個 API、做很會重複的小事。

[34:41](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=2081s) 用 token 花費當採用指標，他覺得有爭議，而且短命。要求人多花模型的錢，說這話的人多半帶着道歉。模型正在變貴。會用 agent 的能力包括：何時用 Opus、何時 Sonnet、何時開放模型；指示對了，不必一千輪，一輪做完。他比較喜歡、也許還能用一陣子的指標是 merged pull request。Lemonade 在 PR 上再加複雜度。先看 merge 的速率。也許是小 PR。先有一個時點，看趨勢往上。開了幾張、merge 幾張。開頭可以用小 PR 取巧，但只能取巧一下子，之後還得把數字加快。這比 token 稍好。

## 放大一切，包括過時的知識庫

[36:50](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=2210s) Birgitta 在第 69 集說 AI 不分好壞地放大。設置差，就把差放大。設置好，事情會順。你的 pipeline 和流程撐不撐得住吞吐量上升。很多組織低估這層地基。不能只套上牛仔裝就做軟體。Guy 喜歡把 AI 當乘數。他想起 Intercom 共同創辦人 Des 很早講支援裡的 garbage in, garbage out：叫它學知識庫，很快發現知識庫有過時、不再正確的東西。Codebase 一樣。Agent 若只是複製你做過的，很多你並不想再做。曾經有一段想法是「我們會從你的 code 學，然後複製你的開發」。現在比較少聽到。今天更多是 context engineering，以及什麼叫正確行為。把它寫成可以一致執行的東西。就算從零做，也要讓 agent 把決定講明白，以後的 agent 才做得下去。還沒接上的是學習：部署出去之後，看到什麼會讓你覺得這個決定不好了、或不再對，然後改。Simon 問那是 context 要改，還是人的決定要改。Guy 說把回饋拉進來，找 root cause。他看到 Intercom 談怎麼管 skills：開發流程裡有測試，找到 bug 就到系統別處找同一個 pattern，那些地方也改。他不知道他們做到多自動。這種自我修復得在。整個 SDLC 由 agent 處理。人聚焦什麼是正確行為、哪些機制、哪些要 review、哪些對 context 的修改可以自主，以及改了 context 之後怎麼碰到 code。大家走得很快，還沒有夠長的里程。還沒經歷 context 過期、做法變了、安全問題變了。以後不會像現在這麼手動。Agent 在變好，人也更信任，自主會更多，不是更少。

## 不要在半夜醒來，但錯了要能收回

[42:10](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=2530s) 觀看很多的一集是 Datadog CEO Olivier Pomel。夢是再也不必半夜三點起來。問題已經被處理。跟這件事有關的精準度門檻必須很高，字幕把那個範圍聽成 mobility。三四年前，root cause 大多時候完全正確是科幻。現在看得到，在很多情況可以交到客戶手上。Guy 說 RCA 適合：要篩很多資料，錯了是浪費時間，不是把系統拿掉。像程式助手那樣，先給候選。有 context 之後，線索會更好。惡夢是攻擊者也變 agent。釣魚在變多、在往下游和中小企業擴。Agent 在開源函式庫裡找漏洞。供應鏈被放大：更容易找到漏洞，Axios 那次還有釣魚，agent 在較少監督下拉進很多函式庫。DevOps 的訊息常常很正面，系統會自我修復，self-healing 本來就是 DevOps 的詞。安全那邊是若不跟上，就得把處理從找到漏洞做到修掉、部署到 production。這逼出端到端的速度。他喜歡的是：你該擁抱完整的 agent 能力，才回應得夠快。這是 cloud 那步的極端版。起初覺得一天部署很多次不安全。後來變成不這樣做才不安全，因為漏洞會出現，問題是你多快回應。他預期這一年，agent 更多用在真實 production 時，安全會在前面。一種問題是人沒用 agent，攻擊者比防守者快，安全產業有意識，還沒有真正的解。另一種是 agent 自己不可靠。Anthropic 有外洩。Claude Code 那次他們很快說是人為錯誤，按鈕的人被推出去。Mythos 那個偏安全的模型也漏過，很諷刺。還會更多。

[46:52](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=2812s) 半夜三點要不要變成人在迴圈裡批准。他認為最好的設置是讓自己耐錯。讓 agent 做，但基礎設施使得錯誤決定可逆。Waterfall 容許的事，cloud 時代不再容許。Waterfall 裡最好的團隊已經在自動化，安全的 shift left 是例子。Cloud 裡你不能不把安全往左、不能沒有某種自動化測試，因為速度承受不了。Cloud 時代仍容許的一些事，AI 時代會因為速度而不再容許。同一種 pattern：本來是人的動作、人的 review。Cloud 時代最好的團隊已在自動化。AI 時代一般團隊也得做，不然在這個世界裡做軟體不可行。

## 可以嘮叨，委派之後就看不見

[48:32](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=2912s) ElevenLabs 的 CEO 兼創辦人 Mati Staniszewski：他們認為 voice 會是跟數位介面互動的未來，比文字帶更多情緒和理解，某種程度上會讀你的心。再往下是 Neuralink 那種較嚇人的選項。Guy 說重點不只是打字速度。說話有很多贅詞，錄音時會被剪掉。打字時你會停下來改、會想。對 agent 說話可以嘮叨，agent 拿掉那些，認知負荷下降。下指令仍要精準。Context 管得好的話，嘮叨可以變成 instruction file，再交給 sub-agent。像跟 project manager 說話，對方的工作是把嘮叨收成能執行的對話。他說 Mati 講 voice 有一點自利。那集之後 ElevenLabs 已不只有音訊。Claude Code 大量委派給 sub-agent 的做法，別人很可能跟著做。前面那個 agent 是 project manager，再把工作派下去。代價是看不見。在終端裡下指示，委派之後更難知道發生了什麼。Simon 說大約一個月前 Claude Code 有個聽麥克風的 slash 指令，他覺得自然，本來就喜歡跟 Claude 桌面版聊天。Voice 會不會比文字主導，和誰會贏，是兩個問題。

[52:26](https://www.youtube.com/watch?v=Yw6P8cef7RE&t=3146s) 錄的時候，Claude 那邊收緊了能在哪裡用，他們要自己的 harness 和介面。公司能力變強，Anthropic 正處於可能把花園圍起來的狀態：你就用我們的系統。另一邊 Nvidia 投入開放的 code 和 OpenClaw，可組合，比較像 web。較早一集 Netlify 的共同創辦人兼 CEO Matt 談開放 web 有多要緊，他們繼續投可組合的基礎設施。Vercel 支持一些開放的部分，但更多投資在自己圍牆裡的端到端體驗。會發生什麼，和要什麼才贏，在這個速度下是不同的問題。下一萬集他們還想聽聽眾建議來賓。他說應付這種變化，關鍵是社群一起學。
