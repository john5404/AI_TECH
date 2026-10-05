# Is Code Dead & The $1B Solo Startup Myth - Tom Hulme's conversation with Guy Podjarny

倫敦 Gen AI meetup 的爐邊談話，社群由 Google Ventures（GV）辦。Tom Hulme（字幕 Holm）問，Guy Podjarny（字幕 Pagani、Gipo）答。片長 28 分 22 秒，英文自動字幕。節目包裝把 Tessl 聽成 Tesla、Tessle。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=reU8W2aH30Y)

## 一句話

AI native 不是把生成式 AI 塞進現在的流程。Guy 要先想像信任夠了、人也願意改工作方式之後的終點，再設計走過去的路。工具地圖上大約 170 個產品大多長得很像，而且停在 copilot。Tessl 押的是 spec-centric：人留下真正要的決定，其餘交給 LLM。一人十億美元公司，他覺得價值做得到，收入拿不到。

## 先想五年後，再決定今天怎麼走

[0:54](https://www.youtube.com/watch?v=reU8W2aH30Y&t=54s) 主持說明這是 GV 倫敦聚會的錄音。Tom 說他們認識 Guy 快十年，從 Snyk 時期開始（字幕 sneaks）。多數人聽過 Tessl，還不知道它在做什麼。

[2:46](https://www.youtube.com/watch?v=reU8W2aH30Y&t=166s) Guy 說 AI 是破壞性技術，但現在最常見的用法是 sustaining：放進既有流程，把其中一段自動化。軟體開發也一樣，只是多了幾種產生 code 的 UX，那些有價值，卻不是機會本身。真正的機會是重做 workflow。他用稍後會出場的 Synthesia（字幕 Cynthsia）作比：用 AI 把攝影機畫面變銳利很有用，text-to-video 才是 100 倍、1000 倍地改掉你能做的事。Cloud 也一樣。彈性、cloud storage 很好，cloud-native 的好處來自擁抱那一整排服務的做法。

[4:09](https://www.youtube.com/watch?v=reU8W2aH30Y&t=249s) 所以 AI native development 是一種授權：從第一原理問，有了 LLM 這種新能力，這件事該怎麼做。可以直奔 level five autonomy，也可以一層層蓋。他談兩個軸：你有多信任它做對，以及你要改多少工作方式。新創應該錨在五年後更需要的東西。先想像信任已經建立、改變也被接受之後的終點，再想怎麼走過去。一開始就站在終點，沒有人會用，產品也還不配那份信任。

## 170 個工具，範圍不清，也沒有忠誠

[5:39](https://www.youtube.com/watch?v=reU8W2aH30Y&t=339s) 當天他們發布了 AI native dev tool landscape。策展很重，不是把所有 AI dev tool 收齊。建立時大約 170 個，上線幾小時就有社群提交。他們把工具放在開發生命週期上：產品設計、需求、原型、coding、quality assurance、DevOps，再加上一塊 AI infrastructure。開發者通常只認識五六個，而且聽起來都一樣，連一份分類都難做，因為變太快。這是 AI native dev 這個運動的一部分：收提交、自己策展、補 case study 和 demo，之後也會接上新聞。

[7:42](https://www.youtube.com/watch?v=reU8W2aH30Y&t=462s) Tom 強調這是 UGC，跑在 GitHub 上。Guy 說運動不是單一產品。他們辦虛擬會議、做 podcast。Repo 開放貢獻，但要有人判斷這只是行銷，還是對想用 AI 做軟體的開發者有用。

[8:26](https://www.youtube.com/watch?v=reU8W2aH30Y&t=506s) 看完整張圖，他的觀察是亂。工具範圍沒有定義：IDE、build system、git platform 大家知道是什麼；這裡每個人都說自己什麼都做，卻沒有人做到完整。功能從流程的不同段落拼過來，什麼才是一個完整的價值主張仍在變。Coding assistance 比較清楚，可是那些產品也開始加 chat，然後問自己算不算 agentic system。第二是忠誠度很低。兩年前問人用哪個 IDE，答案大致是一個；現在會這裡用 Windsurf、那裡用 Cursor，observability 也換著試。原因是沒有人完全兌現承諾，做出來的只是承諾的一塊，差異化很少。第三是幾乎全是 copilot 和 assistant。真正宣稱自主的，幾乎都在 waiting list 後面。Demo 和可靠產品之間有一道鴻溝，自主產品更遠。浮現的 UX 包括 chat、在畫面上點和留評論、設計端愈來愈主動的視覺，以及讀圖變強。幾乎每個類別都有正在長出來的開源。自然語言介面變普遍，一部分是因為 LLM 的轉錄已經夠好。

[11:34](https://www.youtube.com/watch?v=reU8W2aH30Y&t=694s) Tom 把軸畫成：一端是傳統開發，另一端是完全 agentic；旁邊是 citizen developer，他點名 Lovable、Bolt，也許還有 Vercel，並說其中有他們興奮的 portfolio company。Cursor 和 Windsurf 則常被說成兩分鐘就能換，因為 VS Code 的 UX 一樣、底下的 foundation model 一樣，沒有 moat。

## 更快、更大的模型，還不是目的地

[12:13](https://www.youtube.com/watch?v=reU8W2aH30Y&t=733s) Guy 同意它們很像。今天的差異化多半是「我完成得比較好」，這種宣稱很難驗證，比較像 vibe check。他太少看到有人真的去改 workflow。把產品賣進現有流程、做自動化，這座山裡的金子太多，所以大家追同一件事。長期要靠想得更遠。小的會淹沒在人群裡，同一件事可以有一百家公司。有臨界質量的，他點了 Bolt、Lovable、Base44、Vercel。它們會撞牆：功能堆到一個程度，若流程沒有重想，價值就有上限。

[14:03](https://www.youtube.com/watch?v=reU8W2aH30Y&t=843s) Tom 用 OpenAI 當反例。技術被認為會很快被打亂，它卻靠 PLG 變成消費業務，到現在仍是突出的那一家。那些不到六個月就到 1 億美元 revenue run rate 的公司會說：它可能有黏性，先做品牌和規模，再用資料 fine-tune 自己的 model，或把 workflow 往前推。Guy 說 Cursor 的採用量已經很大，大概有資料可用。但他認為把 model 做得更好，還沒證明是很深的 moat。流程一樣就容易被換掉：發誓只用 Cursor 的人仍會去試 Windsurf，而且覺得有趣。消費端的 chat 反而比較忠誠，因為習慣已經養成。把 memory 嵌進去、讓它「懂我」，在還不能匯出時像是 moat。Tom 原本以為 chat 只是一個文字框，摩擦是零；foundation model 會被 distillation 變成大宗商品，帶 memory 的個人化版本大概也能被蒸餾。

[16:07](https://www.youtube.com/watch?v=reU8W2aH30Y&t=967s) 問到空缺，Guy 說沒有完全沒人翻過的石頭。從 copilot 到自主這一段很缺。他把它分成四桶。產品、設計、需求這一側工具少、成熟度低。Code 最擠、使用者也最多。QA 很多是企業向，有一種希望能把測試重新做起來；鎖在特定 stack 和 niche 上目前可行，技術今天就做得到，空白仍大。DevOps、SRE 那邊的人很怕把自主放進去。少數公司在做自主 agent，字幕把那個區間聽成 calendar sale plane、traversal，沒有再講清楚。更多機會仍是在資料裡篩。能在一個具體領域裡提供自主，他覺得是真機會。

[17:52](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1072s) Tom 說他們一直在問：生成式 AI 今天哪裡夠可靠。完全 agentic、又夠可靠的工具，他們還沒找到。最可靠的是訓練最乾淨的地方：coding，還有 legal，所以他們在 legal 投很多；customer service 的文字和語音也開始夠用。Coding 可能預告其他產業，因為它最早、最快變得可靠。Guy 補了一句：那是 copilot 模式。自主寫 code 就算在最頂尖的公司，現在仍是一批一批地失敗（字幕 failing by the dros）。

## Spec 把決定從 code 裡救出來

[18:55](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1135s) Tom 說 code 會爆炸，而且大概是壞 code。從 code-centric 走到 spec-centric，是他認為 Tessl 最重要的一段。Guy 的第一原理是：人和機器之間需要一層翻譯，今天這層是 code，整個開發都繞著它轉。你拿到需求、寫 code，寫的時候做了一百個決定，那些決定沒有離開 code。需求後來被丟掉。他比喻走進這間房間，看窗簾、螢幕、桌子、高度和燈，分不出哪些是無障礙合規、哪些是設計、哪些是預算、哪些是企業色。看 code 也一樣：我能改什麼？只能猜，很多資料已經丟了。系統一大就變脆。

[20:19](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1219s) LLM 讓人可以在更高的抽象談系統，用自然語言和視覺描述想要什麼，同時自己畫一條適應的線：坡道和紫色是人要守的決定，電視怎麼擺可以交給 LLM。電視以後換了，不必再維護那個決定。今天去 Bolt 這類工具，多半是聊一聊、把很多決定交出去，卻沒有辦法標出什麼對你重要。留在 code 的世界，則每一個改動都要審、都要准。那是死路，因為你審得完的 code 有限。

[21:35](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1295s) Tom 提起 Guy 幾年前的說法：產品裡 90% 是外部相依，開源、要擴展的需求、一層層疊上去。舊的技術債還在，新的 Gen AI 工具可能讓技術債指數上升。他們播了一段 flight simulator 的片子。字幕裡的對白是：這會讓我發財；這全是 hype，工程師不會消失，你不能 oneshot 一個 flight simulator；這是魔法，工程師很快會消失；把飛機改成藍色；不要，改回之前那種寫實。Guy 說 LLM 是魔法，所以可以委託，但要劃清界線：哪些決定屬於人，屬於要對系統負責的人；哪些地方要借用 LLM 的適應力。全部由人監督，或全部由產品監督，他都看過，兩邊都是死路。Tessl 在試這個新 workflow，有些會對、有些會錯，最後仍是社群的事。

## 開發者還在；十億美元是價值，不是報價

[23:37](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1417s) 軟體開發者會好好活著，軟體仍關鍵。定義會變。一條路往上走，做架構：取捨、品味、偏好，要簡單還是要可擴充。AI 可以幫忙，但那是手藝。簡單的電商網站也許人人能做，新的系統仍要學。另一條路是產品感覺，知道什麼對使用者更重要。他認為 code 會消失，像 assembly 和 bytecode 還在，只是很少需要碰。他愛寫 code，也覺得有趣。社群和 Tessl 的任務是把創造的樂趣留下，而不是讓人覺得自己只是監督者。Tom 說某幾種語言會消失這件事他想像得到；沒想到的是英文，而且是美式英文，正在變成開發語言，絕對不是英式英文。

[25:07](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1507s) 最後一題是一人十億美元新創。Tom 說有公司長得比以前快，因為 PLG。字幕把一家新的 portfolio company 聽成 Stack One、Bulk：14 週從 0 到 4000 萬 run rate，逼近每位員工 200 萬美元。大家因此開始談第一家十億美元的一人公司。Guy 把美元和價值分開。他相信離「一個人做出的價值，等於今天十億美元營收」不遠，但那個人拿不到十億美元。2000 年代中，能做動態、即時的網站就很難，公司可以因此收更多錢；今天那是預設，不能加價。一個人做得到，旁邊的人也做得到。高品質軟體的供給會在，價值會波動。他認為「一人公司賺到那筆錢」這個想法有問題，因為它忽略供給會大幅增加，需求則持平或只漲一點。會有一小段窗口出現極有效率的公司，然後消費者會期待更多。Tom 把這個邏輯推到極端：那些公司得在 24 小時內從 0 衝到十億美元 run rate，因為複製任何東西的速度是以前沒有的。這是一場每個人都得跑得更快的比賽。

[27:22](https://www.youtube.com/watch?v=reU8W2aH30Y&t=1642s) 節目尾聲提醒倫敦的 GV Gen AI meetup，以及 5 月 13 日的 AI Native DevCon。報名網址字幕沒有聽清。
