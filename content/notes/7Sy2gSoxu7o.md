# Steve Ruiz - Agents on the canvas with tldraw - AI Native DevCon June 2026

Steve Ruiz 是 tldraw 的創辦人兼 CEO。這是 AI Native DevCon June 2026、午餐前的一場，他說不會講太細，主要放 demo。片長約 29 分鐘，英文手寫字幕。這份筆記依英文原稿整理，專有名詞保持英文。

- 原片：[YouTube](https://www.youtube.com/watch?v=7Sy2gSoxu7o)

## 一句話

tldraw 的 canvas 不是一塊畫布元素，而是一整個 React 應用。Steve 這幾年的實驗是把 AI 放進這塊無限畫布：先讓視覺模型把圖變成可跑的介面，再讓 agent 跟你用同一套形狀說話，最後讓多個 agent 像其他協作者一樣待在畫布上。Demo 故意很寬、也有點沒目的；他賭的是客戶會把同一批想法收窄、做成真正的產品。

## 賺錢的是 SDK，示範才知道它能做什麼

[0:06](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=6s) tldraw 是倫敦的新創，人在 Finsbury Park。它像 Miro 或 Excalidraw 那種線上協作白板，但有兩點他想先講清楚。第一，他開玩笑說它非常好。第二，你看到的是一個普通網站：畫布上的內容本質上是一個大 React 應用，沒有 canvas 元素，是 div 裡面的 div。他說這點等一下會變得重要。

[1:23](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=83s) 它也是 SDK，這是他們賺錢的方式。公司若要在產品裡放一塊 canvas，不必自己做整套，就像需要編文字時不必自己做一整個文字編輯器。授權 SDK 就好。他快轉了一輪客戶：字幕裡的 new canvas、以及 Luma AI 用 canvas 生圖和影片。他說 2026 年若看到酷的 canvas 產品，多半是用他們做的。

[2:05](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=125s) 既然 SDK 的承諾是「你能用它做酷東西」，他的工作就包括自己先做給人看。過去幾年很多實驗都跟 AI 有關。畫布上可以嵌一個仍能播放的 YouTube 影片。他拿 Notion 比：文件編輯器，但裡面也是普通的東西。tldraw 一樣。

## Make Real：圖和註解就是輸入

[2:58](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=178s) 後面幾乎都是 demo。2023 年 11 月，GPT-4 with vision 上線，這是第一次有夠好的視覺模型能從開發者 API 拿到。API 還在 preview，他說大概一天 30 次這類的量，貴得離譜，但人終於能拿它做產品。Twitter 上的 Make Real 是他覺得第一個「用 AI 產生 code」、衝出小眾 ML 圈子的東西。在它之前最接近的，字幕寫成 Carpathians 那種選單視覺化，名字不另改。

[4:15](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=255s) 這也是很早的 vibe coding。那個詞當時還沒有，Lovable 也還沒有，AI coding 要到 2024 才以後來那種方式到達。想法很單純：畫布上可以畫，AI 看得見，就讓它把你畫的東西做出來。模型比 2023 年好很多，應用還能用。純文字他可以要一個橘色計時器、開始停止、加減時間，現在的模型做得到。Make Real 用圖也能得到接近的結果。把截圖貼進 Cursor 再叫它做，同樣行。

[5:33](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=333s) 對很多人，這是第一次做出技術的東西：沒有 code，用的是本來就會的技能，畫方塊。更有趣的是迭代。純文字你會說「改成藍色」或「把這兩個按鈕對調」。畫布上那個已經能動的網站還坐在畫布裡，他可以直接畫上去，寫 green，再把網站和註解一起選起來送出。新的截圖進模型。對調按鈕沒成功，綠色成功了。註解可以當語言模型的輸入。他說用 SDK 的客戶把這件事走得很遠，他點了 Google、字幕裡的 Mixed borders 或 Stitch、Lit、Luma、Runway。

[8:00](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=480s) 當下的模型是 Gemini 3 Flash preview。這功能是 bring your own token，他們沒有拿它變現，他保證不偷 API token。下一個例子用語言會很長：使用者的相機畫面、點陣或顏色的開關、點的大小、底部一排先前畫面的縮圖。語言加上 Figma 也許做得到，但 canvas 適合這種來回。他像烹飪節目一樣在旁邊放了做好的備案。結果沿用了前面的設計語言。顏色、點陣、點的大小他都說有動，也能捕捉。輸入幾乎是一張圖，加幾個字，輸出是一個東西。理論上可以繼續標記、做下一輪。

## 聊天不適合分支，畫布適合

[10:13](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=613s) Make Real 之後他們做了 tldraw computer：用 canvas 做那些聊天也能做、但聊天不是對的介面的事。一維聊天之外，分支對話、以及可重複的多步 prompt，在聊天裡很難，用 code 或後來的 workflow editor 則很平凡，但他覺得那些不好拿來創作。畫布可以擺有向圖，也可以很動態地組 context。

[11:14](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=674s) Demo 像 Madlib。觀眾給了運動項目 real tennis、上一餐是馬來西亞菜。他畫了一面自己也不確定的馬來西亞國旗，想要一個 logo。每一格是一小段有結構、可重複的 prompt，依輸入產生腳本再執行。指到元件上的東西就是輸入。一條線是依規則寫一篇冠軍賽的報紙摘要，規則來自文字；另一條帶著那張他自己說很爛的圖，去設計 logo 的 3D 模型；報紙文章還要再拿去生成別的東西。他唸到標題，大意是豹子在一場跨網球錦標賽吼著獲勝。規則比他想的複雜。他問現場有沒有馬來西亞人、他們的網球規則是不是不一樣；若生成結果碰巧對上現實會很有趣。3D 的國旗 logo 他判斷沒有正確生出來。要重混，改輸入再跑一次就好。

## 一隻關在側欄的 agent，變成畫布上的 fairies

[14:00](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=840s) 2024 年初他們問自己真正想從 canvas 得到什麼。Make Real 和 computer 都做過了。Canvas 的殺手功能是協作：八個、十個、十五個人在同一份文件裡，游標飛來飛去，介面容得下。為什麼不跟 AI 也這樣？於是開始一段很長的路：讓 AI 看見畫布、看懂上面有什麼，並且能動手。他能建形狀、改內容，AI 也要能。

[15:26](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=926s) 他畫了一隻只畫到耳朵的貓，叫 agent 畫完。他記得這是 2025，介面是照著當時 Cursor 側欄做的。這是完整的 agent loop：在畫布上做東西、再 review，他可以拒絕或接受。做出來的不是一張圖，而是他也能做的同一種東西，人和模型在畫布上說同一種語言。接著他不告訴它「這是桌子」，讓它自己看，把貓放到桌上。眼睛是一隻一隻做的。他說這種大位移是較新版本改進很多的地方。它 review 之後給了滿分，他謝謝 Claude。加 wireframe 畫面則更複雜，也更像影像模型看習慣的軟體截圖。這個 harness 不太會搬貓，但頗會在畫布上做 UI。問題是它被關在側欄裡，只有一個實例。

[18:05](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1085s) Fairies 把同一個 harness 放到畫布上，每一隻都是一個實例。一開始只是為了看見它們在哪、哪一隻是哪一隻。你可以換帽子、改腿長、把它們扔來扔去；抓住它們，它們不喜歡。也可以跟它們說話，看見 thinking、reviewing、working。它們同時存在，也知道彼此在哪。現場 live coding 比較糟，他先承認。

[19:35](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1175s) 他抓起三隻，叫它們下一整盤 tic tac toe。它們會當成一個單位：選出 leader、起草計畫，翅膀變色表示同一隊。這也是協作的，多人可以分享同一場。Coordinator 列 to-do，再把任務派給不同 fairy。他中途覺得要糟了，一度想放棄，後來又說還行。更複雜的用法包括把整份 PRD 變成 wireframe、或把你的東西收拾乾淨。Fairies 免費，他說你可以去花他的 Claude token。Reviewer 也會看有沒有人贏，它們有工具可以中止生成。

[21:26](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1286s) 若另外十個人在同一份文件裡，每人三隻 fairy，他的看得到別人的。編排仍在單一使用者的 fairies 裡面。他們真的做過十個人、三十隻 fairy、三十個 agent 同時在場。介面要同時容得下人與 AI、人與人，而且是這個數量。井字遊戲最後它說 everyone wins。他喜歡這種協作，鼓勵人去試。這些 demo 指向一種可能：收成更窄、綁定某一種使用者的產品。在 canvas 上做得到。

## 本地把 editor 交出去，它就開始改程式

[23:04](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1384s) 最新的是同一個 agent harness 的桌面程式。他想要一種像 MCP 的體驗：任何 agent 都能用這塊 canvas。把 code 給它，請它畫一張東西怎麼運作的圖；人改了圖，再叫它把圖上的改動帶回 code。他們已經有給 Cursor 和 Claude 的 MCP app，但仍被關在某個應用裡面，所以有限。他現在喜歡的一些 AI 應用是桌面程式，用本地 MCP server 跟應用說話。設計這邊他點了 paper pencil。字幕還有一處沒聽全，不把那個產品名補上。

[24:26](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1466s) 桌面程式有本地 MCP server，可以重現 fairies，或側欄那種 agent starter kit。想用那套來做，code 可以拿。接著他們看上 code mode：與其讓 agent 發一堆 MCP 呼叫，不如給它 code、讓它執行，再從那裡生出 tool call。有一層 runtime API，例如 `editor.selectAll` 會選中畫布上的全部。既然是本地，他們乾脆把 editor 直接交給 AI。結果是畫布上非常瘋狂的 metaprogramming。

[25:27](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1527s) 他們問它能不能互動：這個小圓的高度能不能影響那個人的高度，這些按鈕能不能真的能按。這有點回到 Make Real，但全部發生在 canvas 裡面。他們沒有「點了這個就做那個」的現成原語，但低階的東西夠，找得到辦法寫。Claude 做的是往應用裡注入腳本，而他們開了一道門。第一次看到時，他們叫它把桌面上的照片抓進 tldraw，做一個用 Mac 原生 embeddings 過濾清單的搜尋列。它找到了做法。他不覺得現場這段會成功，但那段 code 是他讀過最瘋的：在 bash 呼叫裡用 Python 去模板 JavaScript。它完全能動。現場他還想讓一雙鞋子動起來，但太慢，他不等。

[27:22](https://www.youtube.com/watch?v=7Sy2gSoxu7o&t=1642s) 他停掉還在走的 demo。這些示範又寬又有點沒目的，但不同團隊的客戶拿同一批想法收窄、把品質做高、讓它對自己的使用者有用。他希望現場有人願意試。SDK 和免費白板的網址字幕沒記完整。午餐時間到了，沒有人提問，他說之後還會留幾個小時。
