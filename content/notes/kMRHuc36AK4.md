# Intent-Driven Development: Insights from Patrick Debois

Simon Maple 訪問 Patrick Debois，談 AI Native Patterns 和 AI Native Landscape。片長約 45 分鐘，英文自動字幕。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Tessl 聽成 Tessel。這是社群一起觀察的 v0.1，不是定案。

- 原片：[YouTube](https://www.youtube.com/watch?v=kMRHuc36AK4)

## 一句話

AI 若只是加在舊流程上，還不算典範轉移。轉移是工作方式必須重想，而且未知比已知多。他們不寫「你應該做 A、B、C」的 principle，只寫看得到的 pattern：從做事的人變成經理、從實作變成 intent、從交付變成發現、從內容變成知識。工具地圖是為了讓人知道這些做法做得到。

## 標籤先用，定義以後才會準

[1:57](https://www.youtube.com/watch?v=kMRHuc36AK4&t=117s) 他們和 Tessl 的人在做兩件事：一套 AI native 的 pattern，和一張工具地圖。要放進社群，才收得到貢獻，也才不會過時。Patrick 不是第一次上這個節目。

[2:19](https://www.youtube.com/watch?v=kMRHuc36AK4&t=139s) 他一生裡的典範轉移，常常是新技術：早期的 internet，然後 cloud、mobile、serverless，現在是 AI。問題是能不能只加一點、連提都不必提。他叫 slap-on AI：上面貼一層，就說自己有 AI 產品。一旦問表面之下還能做什麼、過去的做法不能再當成理所當然，才是轉移。新興的東西通常要一段時間才懂。人會試、會用過頭，好找出邊界。影響和好處夠大，才配叫典範轉移。

[3:54](https://www.youtube.com/watch?v=kMRHuc36AK4&t=234s) Simon 的判準是未知的數量。問題比答案多，就是轉移。新職稱出現，而大家還不確定這名字的工作存不存在，例如 DevOps engineer，也是。標籤討不討厭。Patrick 說我們貼上的標籤起初大概是錯的，因為還不懂，等懂了，詞已經生根。Cloud 後來才叫 cloud native。DevOps 起初是 dev 和 ops 坐在一起，最後每個瓶頸都進來：DevSecOps、HR、fin。Agile 的 manifesto 仍有無數問題。ITIL 有十五本書，仍有無數問題。精確定義很難。標籤好壞都有：人隱約知道方向，新故事找得到出口。新 hashtag 對上舊的，就知道新故事從哪來。產業裡 AI engineer 生了根：把資料和應用接起來、用新技術、把兩邊帶來的人。轉移若碰到組織，角色會移，過去有摩擦、或本來不必共事的 silo 又要接上。標籤的價值是追新東西從哪出現。

[6:43](https://www.youtube.com/watch?v=kMRHuc36AK4&t=403s) Simon 說 DevOps 和 cloud native 都被用過頭、各說各話。Pattern 是把標籤拆開、講清楚它是什麼。人的角色適應得慢，也更動情緒。技術有未知還好，人要理解自己五到十年後還相不相關，就沉重得多。Patrick 說 DevOps 早期也有人講：走開，不然我用 shell script 換掉你。新技術做掉你工作的一部分，冗餘感一樣。技術若影響夠大，會改角色、組織、共事方式。開發者不只寫 code：跟 product owner 談、看 production、解新問題。把任務拆開，有的被換掉，有的被加強，有的因為問題已解而消失。他用車比喻：車壞了他不會修，送修車廠，那層抽象已經解掉。在比利時他仍得會開車。把開車拿掉，就會有別的東西補上。技術若能把一件任務完全自主做完，影響是另一種。他拿 Tesla 的自駕來比成熟度：要一點幫忙、大致可以但有例外、或全部自己來。光譜很大。愈自主，人被影響得愈深。

## 先觀察，還不要規定

[10:33](https://www.youtube.com/watch?v=kMRHuc36AK4&t=633s) 成熟度很低的時候，先要能描述什麼叫好、描述我們在的空間，才知道哪些做了、哪些做差、哪裡要改。他們原本想寫 AI native developer 的 principle，再寫 practice，最後落在 pattern。Pattern 是你觀察到正在發生的事。Principle 是人應該做的，近乎規定：做 A、B、C。還沒到。人拿一堆工具亂踢、做一堆 practice，那些 practice 裡看出往 pattern 的趨勢，之後才蒸餾成「若你在這個情況，做這一二三」。起初以為可以直接告訴人該做什麼，以現在變動的速度來看太樂觀。所以用詞改成 pattern。

[12:40](https://www.youtube.com/watch?v=kMRHuc36AK4&t=760s) Simon 說這是觀察，離知道好長什麼樣子還遠。這集播出、再加上社群回饋，今天講的名字和活動都可能再改一點。Patrick 習慣在公開場合想，在社群網路上看說的話有沒有對上，有沒有落在分類外面的例子，再改。AI native 很廣，不能只盯經典的寫 code。這是 v0.1，不是刻在石頭上。Pattern 在 ainativedev.io，已經有幾篇 blog，還會繼續。回饋寄 hello@ainativedev.io，或直接找 Patrick。不分享故事，craft 怎麼變好。

## 從寫的人，變成說 yes 或 no 的人

[14:54](https://www.youtube.com/watch?v=kMRHuc36AK4&t=894s) 第一個 pattern：from producer to manager。典型是你在寫 code，工具把它補完，也許一整個檔，也許七個檔。人先注意到的是得證明這些東西。你變成 reviewer。Pull request 上說這好、這不好、這是我要的。你不再是做出來的那個人。重要的是知道什麼叫好。再往 production：出事了，你得說做這個、做那個。你不再有那種身在其中的 situational awareness，像經理，靠東西幫你理解。很多人不高興，仍想自己寫。這個 pattern 在把人往那邊推。

[16:09](https://www.youtube.com/watch?v=kMRHuc36AK4&t=969s) 不是百分之百，是一條滑尺。Copilot 仍靠近 producer，一次產出的量小，你幾乎在微管每一行。Bolt、Lovable、v0 在另一端：你看之前已經自動化更多，任務是功能，不是 code，指望它把缺口補上。工具允許不同的 practice。最小的經理是 yes 或 no。放大可以是早上七個 agent 回來，你說什麼叫好。Devin 那種會自己跑循環。Production 裡，bot 自己試幾件事，和 bot 只告訴你文件在哪，差很多。這不是天生綁在某個工具上。他們預期工具最後會把這些功能做齊，但現在各在不同高度。當經理的認知負荷是要懂整套系統。IDE 也許會改我們怎麼看 code、怎麼懂問題。最後還得訓練，因為人不那麼會寫了。這很像 DevOps 的自動化成熟度光譜。

## 生成之前先講 intent

[18:45](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1125s) 第二個聽起來像，其實不同：from implementation to intent。第一個是事後在營運上說好不好。第二個是生成之前：我表達它應該做的 intent。光譜從 IDE 裡按 tab 得到實作，到一段 prompt，到聊天裡的迭代，也就是大家開始叫的 vibe coding，再到我指定要什麼。再往上：給一張圖，前端照這樣做；後端要這個目錄結構。那已經是 specification，不是一句 prompt。最終是把技術和業務需求全餵進去，它產出，我這個經理說 yes 或 no。兩個 pattern 是一起的。人先注意到的多半是第一個。第二個是：我不再寫 code，我用某種方式表達要什麼。

[20:49](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1249s) Tessl 把很多這件事叫 spec centricity：更偏自然語言，全是 intent，描述一個元件或一段軟體要滿足的行為。Simon 覺得這對人更難。資深之後會想得更高，但仍是架構和 code 的想法。從實作走到 intent，是怎麼把資訊交出去的大轉變，心態近乎 PM。Patrick 說第一個 pattern 更像 ops：收進來、說 yes 或 no、出事做決定。第二個更近 product owner：我懂業務，它該長這樣。或架構師：我要它做什麼、技術該長什麼樣。工具正在把 spec 做進 IDE，不再是把 markdown 丟進 prompt 那麼笨。它會變成 IDE 裡的正式公民：描述你要的，再以較小的步伐走到實作。

[22:49](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1369s) Simon 問 IDE 還是不是對的地方。若重心是寫下來的功能描述、是 PM 的視角，也許該用更像 PM 的介面。從零建 AI native，而不是把 AI 貼上去，就得問工具的假設還成不成立。這集不展開。Patrick 說取決於工具好到什麼程度。若只做到一半，就不能全靠 spec，仍得搞清 code 在做什麼。需求互相衝突很有意思。開發者拿到看板或設計，盡力理解，做出詮釋。上線要快、又有效能要求、業務又說要便宜。那討論是協作，不是「技術會解掉」。它會把人和 PM 的對話推出來，PM 再去跟客戶或業務談。好的開發者本來就這樣，進到這個範圍會被放大。

## 交付變便宜之後，問題是做對的東西

[25:01](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1501s) 第三個：from delivery to discovery。不是不用交付。Simon 以為可以不用，隨即失望。交付也許已經自動化，CI/CD 愈來愈像解過的問題。生成若很便宜，可以生五個版本，發現哪一個對。過去只夠時間做一個，也不知道那個對不對。多個版本才能問客戶喜歡哪個。你更像在做產品發現，更快做出幾個原型。過去是低頭交付唯一選項，被那件事拖住。他說這很接近 build the right thing，而不是 build the thing right。也可以是技術上的發現：三個工具哪個好，三個演算法用哪個。那些選項寫進 intent，最後你去管做出來的那一個。三個 pattern 是扣在一起的。

[26:47](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1607s) Simon 想起和 Hana Fox 的一集。交付、寫 code、送上 production 這段慢的瓶頸拿掉之後，瓶頸更在 PM：什麼才是該做的。她想像很薄、很小的功能交付，收回饋，把回饋循環壓到最快，再決定下一個。Patrick 說過去用 feature flag 看客戶喜歡 A 還是 B。想像 AI 和使用者談話的同時就把 code 改了。那是在 production 裡做發現，也可以發現點子或技術。別的事省下的時間，希望能放進這裡。已有工具在降低這段摩擦。Simon 把這編成一句：我不常做 discovery，但做的時候是在 production。

## 競爭優勢是留在公司裡的知識

[28:32](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1712s) 第四個：from content to knowledge。他自己覺得聽起來有點無聊。若機器什麼都能做，人是經理，intent 講過了，也發現了一堆東西。公司要保住優勢，就把學到的、每份文件裡的洞察變成知識。那是你留在公司裡、跟別人分開的東西。可以是業務上試了這條、客戶喜歡。也可以很單純：新開發者要花時間學會 codebase；人離開，知識在腦子裡。很多放在 wiki，沒人管。把內容養成還在更新的知識，人和 AI 都受益。資料、內容、知識愈乾淨，結果愈好。讓他覺得這該自成一類的，是一個工具裡的對話，很像 vibe coding：你表達 intent，它一直問為什麼、怎麼做，然後突然說這很重要，要不要存成知識。它在跟你學，下次建議更好。新人可以拿 codebase，讓 AI 把它變成課，帶着歷史 context 去學。這比較貼開發，但組織其他地方也在發生。知識是那裡的價值形式。

[31:07](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1867s) Simon 問會不會過期。某個時點正確的資料，整理得差就同時是錯的。假設會絆倒人，資料品質要小心。Patrick 說管知識本來就包括看資料品質、這是不是我們的資料。幾年前的術語現在意思不同，有時效，也有歷史。工具換了，舊做法就不相干。得去 Slack、去會議裡找。技術趨勢是餵進更多 context 和內容，才能蒸餾並保持更新。它若在回饋迴圈裡，答案不對，就會提醒這過時了。經理或 reviewer 問你為什麼這樣說，然後更新。這又把 pattern 放大。

[32:25](https://www.youtube.com/watch?v=kMRHuc36AK4&t=1945s) 他們要回饋：這對不對得上你的看法，有沒有更重要的、該換掉的。命名很難，希望名字清楚。會先發總覽，再各寫深一點。請在 blog 上留言，讓大家看得見，在公開場合學。Discord 適合來回，不必五十則留言互相丟。

## 地圖是用來找到自己在哪

[33:53](https://www.youtube.com/watch?v=kMRHuc36AK4&t=2033s) 工具這集才碰到。錄的時候是上一週，這週或很快要放出 AI native dev tools 的 landscape：把生態分類，看工具坐在哪，整體地看。沒有工具就想不了這種轉移。DevOps 有人說重點不是工具，是人和 practice。沒有工具你做不到。目錄讓沒時間追每個小頻道的人知道外面有什麼。有了目錄，才能談那些工具裡的 pattern 和 practice，把兩邊連上。他們起初把工具分進 practice，後來發現 practice 不總是綁一個工具。經理可以在任何地方，discovery 也可以。所以退回大家現在認得的角色和任務：這個任務被 AI 改成什麼樣，再用 pattern 看那些工具該做哪些新 practice。幕後已經改過幾次，以後還會改。第一次就對，他會很驚訝。分類錯了、漏了工具，都是要的貢獻。

[37:10](https://www.youtube.com/watch?v=kMRHuc36AK4&t=2230s) 看地圖，人先找自己在哪。這些 practice 我們做了沒有，該往哪擴。工具也一樣。也許你只知道 GitHub Copilot，它很好，還可以拿別的補。第一個價值常常是：不知道居然有這些，眼睛打開。不知道做得到，就不會去想新 pattern。地圖會變，分類和用詞會變。Pattern 的用詞希望不要動太多，但現階段用詞變了沒關係。然後希望有人說：我找到你們還沒到的東西。邊緣的那些是「我沒想過」。別人做了新的，我們才學到，地圖才更完整。完整永遠不會到，也要避免資料發陳。網址字幕聽成 landscape.ai/nativedev.io，分類按今天怎麼想軟體開發：寫 code、測試，等等。

[39:44](https://www.youtube.com/watch?v=kMRHuc36AK4&t=2384s) 廠商很多，一個工具又做很廣的事，怎麼處理。現在的經驗是：某類若有大約二十個工具還好，爆開就一定有差別，不然不該全擠在一起，以後再拆。差別不一定找得到。今天你是 IDE，明天你會做 spec。Spec 或 agent 也許有七種做法。不能用「有 agent」來分，因為每個工具最後都會有 agent，也都會有 spec。有一條經驗：把 AI 拿掉，產品還能不能運作。那給你一個它算不算 AI native 的感覺。有的往平台走，想做很多事，也有工具被一家廠商買去，光譜變寬，像 SDLC 裡見過的。那時也許有主要分類和次要分類。現在比較像例外，他們盡量讓工具留在自己的類。很難。分類失敗還有關鍵字和標籤，例如想看開源，不能只說「這是開源那一格」，用標籤就能找。

[41:51](https://www.youtube.com/watch?v=kMRHuc36AK4&t=2511s) 一開始的分類圍着 SDLC。以後會有更 AI native 的新類。有的東西特別到、或膨脹到變成自己的工具生態，就會分出去。他舉技術實驗：現有工具裡沒有，同時試七種語言、七種 runtime，可能自成一類。知識管理也可能自成一類。兩邊都歡迎貢獻。他說這像一直在動的拼圖，有趣的是試着解它。
