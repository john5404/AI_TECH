# Using Artificial Intelligence, Safely with Tanya Janca

Tanya Janca，也就是 SheHacksPurple。片長 35 分 37 秒，英文自動字幕。她跟 Simon 提過，很多人用 AI 的方式她會定義成有風險。字幕把她的頭銜聽成 head of community atrap，公司名沒聽清。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=FRWpoRa9JGE)

## 一句話

ChatGPT 公開之後，她看到組織把控制交出去、不做監督、拿到結果就照用。她不要人恐慌，也不把 AI 想成 Skynet。它像鐵鎚，很有用，也會砸到拇指。系統裡每一個 AI 的決定都要有不被那個 AI 控制的檢查；code 要當成熱心的 junior 來審。同時它很適合寫正式文件、找漏洞、做 threat model，只要你還驗證。

## 決定可以做，但不能自己生效

[0:18](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=18s) 這場先講為什麼要安全地用、會出什麼錯、怎麼做得更好，再講怎麼把 AI 放進 secure SDLC，讓人更快、更有創意。下一本書二月出版，是 Alice and Bob Learn Secure Coding。她寫過書、做過研究、給過建議。

[2:19](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=139s) 她看到的不安全是：把控制交出去、沒有 oversight、拿到什麼就盲用，沒有用做其他軟體時那套安全習慣。興奮到好像丟了頭腦。朋友 Darren 寫了 *Uncontrollable*，有人怕 Skynet。她沒那麼擔心。想深入可以去看那本書。她要的是慶祝這個工具、常常用、用得好。

[4:42](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=282s) 她原本數到七，改口說六類。第一是 decision-making。AI 不該替系統做決定，卻沒有另一段不被這個 AI 控制的程式再查一次。她連另一個 AI 來查都不放心，除非還有人寫的 code。退款就是例子：AI 覺得該退，先跑 policy check，過了才准退，沒過就告訴它為什麼、下次做好。改機票日期、刪帳號、把使用者趕走，都一樣。

[6:04](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=364s) Stack Overflow 上的 AI 把她永久封鎖。她做事容易做很大，有一天想回答上面所有資安問題。有人問怎麼把某個結果壓掉，她回答不該壓，這裡有 XSS，並給修法，得到很多倒讚，因為那不是對方問的。她覺得這是錯。若它亂封不那麼固執、不會寫信申訴的人，那些人就離開平台。

[7:11](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=431s) 第二是 agency。電影裡的 Skynet、Terminator，都是因為給了完整的 agency。AI 不該對系統、組織、資料有權力，也不該控制自己或其他 AI。研究者公開承認還不完全懂 model 怎麼運作，所以幻覺一直在。她說 AI 還是很有個性。在還不能完全理解它怎麼學、怎麼得出答案之前，不該給完整控制。很多系統有制衡，是因為各種東西都會錯。讓一個沒完全理解的系統做重大決定，會產生明顯、不難、本可避免的錯。Air Canada 的 chatbot 指示客人做一連串事，公司不肯退款，客人說是 chatbot 說可以的。它不喜歡那條政策，就替客人改寫。對方告贏了。

## 敏感資料、著作權，以及永遠要再查一次

[9:19](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=559s) 她自己掉進過敏感資料。公司即將被收購，兩三天後才宣布。不是天大的秘密，社群上有人猜到，她還請人刪推文。她不擅長正式行銷文字，就用 AI 寫新聞稿，然後發現自己把敏感資訊放進去了。若它拿去回答別人呢。只有兩種情況可以放：你有許可，或這個 AI 是你自己在訓練的、資料也是公司的。她說很多人問 AI 健康問題。從 LinkedIn 很容易看出你是不是醫學生或醫生；若不是，就等於說你或你愛的人有、或懷疑有那個狀況。公開 AI 就像 Google 搜尋，會從問題認識你。它知道她想要一份 Tanya Janca 的簡介、想要很多 code sample；它大概不知道那些 sample 是她拿來當糟糕 code 的例子。

[11:31](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=691s) 著作權和授權：各國法律不同，它做出來的東西不一定屬於你。它說「用這個」時，圖片做反向搜尋，大段 code 上網查是不是別人的。已經有人因為「AI 給我的」惹上麻煩：AI 自己沒有著作權，轉給你，你在用，對方可以告。她說可以先判定，被告不會是愉快的事。

[13:00](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=780s) 它給的每一樣都要驗證。看不懂的 code 不要用，就像不該從 Stack Overflow 或網路上隨便複製再推進 production。字幕有一個網站名沒聽清。用 software composition analysis 和 static analysis 掃。把它當成一位很棒、很有熱忱、會犯錯的 junior。她曾請它列十家用了某種安全做法的公司，文章不存在、連結沒地方去、那些人也沒說過那些話，它卻自信地交了一整頁。字幕把謊言聽成 wise。連對了五次，第六次還是要查。這和她教 secure coding 一樣：前端呼叫 API，API 仍要驗證，因為前端可能被拿走、有人用 web proxy 改掉輸入。對 AI 用 zero trust。她幾乎每天用，覺得它非常好，但要安全地用。

[15:29](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=929s) 投影片沒寫、做完才想到的是 Shadow AI。Shadow IT 是業務自己找人，不等 IT、不守政策，留下技術債。Shadow AI 類似：code 裡在叫 AI，可能沒有授權、違反政策、帳單在你不知道的地方變很大。先問公司准用哪些 AI。她寫書時，出版社說不准把東西放進 ChatGPT。她說自己不會，除非是示範錯誤做法的 code sample。她會讓 AI 先做出不夠好的 sample，再一層層改到夠好。不要當那個 Shadow AI，不要製造老闆沒預期的帳單。

## 寫字、寫 code、找漏洞，都還是你的責任

[17:17](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1037s) 她覺得適合交給 AI 的有：寫作、漏洞、threat model、設計、註解、修 bug。她寫東西很隨口。解釋 polymorphism 時，她說同一個呼叫會因 context 不同：媽媽說「Miss Jacob，你倒洗碗機了嗎」和平常叫她 Tanya 不一樣。字幕把全名聽成 Jacob。正式的職務說明、新聞稿不是她的強項。可以把 design document 要的東西交給它做模板、問還缺什麼，也可以做 user story 和專案文件。改寫完一定要整篇讀。她不再有 writer's block：先叫它寫部落格，覺得糟透了，然後自己整篇重寫，但被推了一把。

[19:32](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1172s) 請它寫 code 時，她必須讀得懂才會用。她坦白說自己生鏽了，大約十年沒做企業級應用的開發，那之前很多年是正職，後來轉 AppSec，現在仍大量讀 code。前端尤其不要找她寫。把它當 junior：審、讀懂、做你平常會做的 secure SDLC，用掃瞄器、用自己的眼睛、確認它做的是你要的。有一次做教材，它一直做出完全不同的東西，最後她從頭自己寫。她說幸好自己還能寫，不然 sample 會和課程對不上。

[21:19](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1279s) 找漏洞是朋友 James 教的，字幕把姓聽成 bery。他寫過一篇：把 code 餵進 ChatGPT，請它找 SSRF 和 XSS，字幕把 SSRF 聽成 service I request fory，而它真的找到一些。買不起 SAST、但有 AI、也准你餵 code 時，可以請它找 OWASP Top 10。這不是最快最實用的，有些開源 SAST 可能更好，只是你可能不准用開源、或沒有預算。有時它會找到很有意思的類型。Jason Haddix 用 AI 做很野的事，字幕聽成 hadex。她很高興他是好人。若能訓練自己的 AI 找漏洞，會比把隨機的東西丟給 ChatGPT 好。

[22:36](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1356s) 設計是另一個朋友先做的。你描述想要的東西，它幫你起稿。她跟 Tessl 談過他們的產品，覺得有點像這樣、而且更多，字幕把 Tessl 聽成 tessla。設計出來仍要走完整 SDLC，和安全的人一起白板，看有沒有缺陷。再聰明的設計師也會有設計缺陷，因為你在想怎麼解問題，不是想怎麼打破它。她剛開始時也不擅長打破。

[23:48](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1428s) 註解：職涯早期她寫得很好，後來變懶。不要寫成小說，但要有效。私人公司的 code 先取得許可再餵。可以請它在檔案頂端寫一小段這段在做什麼，或寫 pseudocode。修 bug 也要先有許可。很多安全工具已經內建 AI，指出 bug 並建議修法。沒有那些工具時，可以把靜態或動態掃描說有某個漏洞的那段丟給它問怎麼修。結果可能不錯，仍要審、要再測。她當開發者時其實喜歡修 bug，知道自己是少數。

[25:34](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1534s) 她後來發現自己有第八項：threat modeling，她覺得最好玩。告訴它系統做什麼、誰跟誰說話、可能出什麼錯。能自己訓練的 model 會越來越會找威脅。有些威脅很差，不必跟進，真人一起做 threat model 也一樣。小行星砸到 AWS 資料中心，不能靠重新設計系統來防，就放一邊。它也會提出你漏掉的。做 threat model 的人說：所有 model 都是錯的，但有些有用。最後是發揮創意。無聊的長信、每季給董事會看的正式報告，她把事實寫好，請它變得專業，她覺得好上一百倍。

[27:43](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1663s) 她要人記住這些，不要栽在明顯的地方。針對 AI 的攻擊很野，邊緣案例可以請 penetration tester。若連驗證輸入這種基本衛生都不做，這個特別強的工具會讓你麻煩很大。有戒心，不要放縱。它像火箭燃料，不要失控。

## 免費的課、週一的導師，以及一份寫錯的簡介

[29:15](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1755s) 資源：對方收購了她的小公司 We Hack Purple。學院字幕聽成 sura Academy，是原來的學院加上新內容，有 secure coding、即將上的 security headers（她覺得 header 很酷）、functional programming，完全免費。書不便宜是因為資本主義，但沒有世上有些東西那麼貴。她覺得自己的書不錯，媽媽讀了第一本的一部分，說還可以。Cyber Mentoring Monday 從 2018 年起每個星期一在 Twitter 和 LinkedIn，用一個 hashtag 讓人提供或尋找導師，配對、喝一場線上咖啡，順利的話變成長期友誼。她不保證配到，會一週週轉發，直到找到或你放棄。通常兩三週。她不當媒人，她是連接的人。朋友的電子報 tl;dr sec 免費、每週，不摘要新聞，摘要那週的安全研究。她讀 AppSec 那一段，字幕聽成 aback，也讀開頭的小故事。作者名字幕聽成 clarent。她有 YouTube、Twitter、BlueSky、LinkedIn。她說自己沒有 Instagram，接著說那是謊、該把那頁拿掉。她謝謝這場會，也謝謝主辦，字幕把 Tessl 聽成 Tesla。

[32:25](https://www.youtube.com/watch?v=FRWpoRa9JGE&t=1945s) 主持人說導師這件事是真的，看過她轉發。最讓她意外的是請 AI 寫簡介、列出成就：它寫了一堆她沒做過的，漏掉很多公開的事，還以為她做過電玩。她有更正。大學做過一個小 puzzle，她說大學作品不算。它沒把她寫成美國人。她是加拿大人，很多網站把她寫成美國人。這次國籍對了，其他都錯。主持人說開發者太快跳到「它能不能幫我寫 code」，其實它適合做我們不喜歡、也不花時間的事，例如 threat modeling 和設計，文件也是。主持人自己不確定 AI 寫的註解對不對。他有她的一本書，不知道還有第二本，推薦 Alice and Bob。中間有一段在看畫面，字幕沒聽清。
