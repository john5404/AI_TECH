# Meta's VR Codebase Nobody Wanted to Touch — Until This

片長 9 分 34 秒，英文手寫字幕。主段是 Katie Roberts，Nearform 的 technical director。她說自己前一天半在 latent space 那個 track 當主持。中間有幾段沒被摘到，下面不補。

- 原片：[YouTube](https://www.youtube.com/watch?v=UVOkQyeY16M)

## 一句話

Demo 幾乎都從空的 repository 開始，但沒有人真的在空 repo 裡工作。她不要把 legacy 叫成一球泥，要把它想成一座城市：能活五到十五年，是因為有大量客戶和複雜需求。後段一個工程師把重構的想法教給 AI，時間大約少一半。VR 那邊，一個 MCP 把 Horizon Worlds 的資料教給模型，於是不必綁在一台有大 GPU 的 Windows PC 上，還能平行做，品質也上去了。

## 棕地是城市

[0:00](https://www.youtube.com/watch?v=UVOkQyeY16M&t=0s) 六月倫敦有人把話說出來：幾乎每個 demo 都從空 repository 開始，雖然沒有人真的在那種地方工作。

[0:10](https://www.youtube.com/watch?v=UVOkQyeY16M&t=10s) Katie Roberts 希望大家不要再把 legacy code 叫成 big ball of mud，改想成一座城市。題目是在 brownfield codebase 裡，停止只是維護、開始演進，把 AI native engineering 用上去。

[0:36](https://www.youtube.com/watch?v=UVOkQyeY16M&t=36s) 開發者花更多時間讀懂 code、修 bug、解問題，而不是做新功能和改進。小更新變得很難，變更變難。困在這裡的人也會很沒動力。這不是誰的錯。這個 codebase 上的每個決定，當時都是最好的意圖。沒有人想讓 code 變成這樣。它有時被叫成 ball of mud。她不這麼想。她想成城市。

[1:18](https://www.youtube.com/watch?v=UVOkQyeY16M&t=78s) 它們有大量客戶在上面工作。這就是它們能存在五、十、十五年的原因：一邊維持複雜的使用者需求，一邊處理隨之而來的效能、安全和擴展。後面有一段摘錄沒蓋到，包括一句三十年前往 COBOL 到 C 或 C++ 的遷移，這裡不把那句擴成一個方法。

## 黑盒有三塊，重構可以平行

[4:58](https://www.youtube.com/watch?v=UVOkQyeY16M&t=298s) 她把 producer box 拆成三件事。第一件她叫 interface，但多數地方、包括 keynote，會叫 harness。你可以在中間用第三方。所以黑盒是三件你不懂的東西。其中一個是 API，也許下午 3:30 就停了。再跳一段之後，她說那些裡頭她覺得都不重要，除了能很快在提供者之間切換。

[7:16](https://www.youtube.com/watch?v=UVOkQyeY16M&t=436s) 這些重構不是拿來好玩的。一個工程師想：若我能把自己會怎麼解這些重構的方式教給 AI，再去 codebase 裡找相似的模式，能做到什麼？達成目標的時間大約少一半。他找到多個可以再用這個模式的地方，讓 agents 以團隊的方式平行做。他自己更像審查者，做關鍵的架構監督，確認它做對的事，沒有對系統最後該長什麼樣子做出很糟的誤算。

## Horizon Worlds 不必綁在一台 PC

[8:00](https://www.youtube.com/watch?v=UVOkQyeY16M&t=480s) VR 的挑戰是你被限制在一台機器上。一個工程師問的是：機器實際要渲染什麼，有什麼做法不必用一台有巨大 GPU 的 PC。若在模型工作時給更好的 context，它們能不能在更標準化、隨需的世界裡工作。

[8:27](https://www.youtube.com/watch?v=UVOkQyeY16M&t=507s) 結果是一個 MCP server，橋接 Horizon Worlds 背後的資料：世界狀態怎麼看、東西怎麼建、模型、材質，以及世界裡的一切。它把 Horizon 怎麼運作教給模型，讓它們可以大致隔離地、在多個隨需環境裡工作。這拿掉整台 Windows PC 的障礙，也讓工作更能平行。模型比以前更懂他們在做的那個世界。不只更有效率、更能平行，工作品質也上去了。

[9:16](https://www.youtube.com/watch?v=UVOkQyeY16M&t=556s) 片尾約十一月紐約的 AI DevCon，網站是 ainativedev.io。
