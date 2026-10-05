# Beyond Prompts: Giving AI Coders the Blueprints They Need with CreateMVPs app with Rohit Ghumare

Rohit 是 Create MVP 的作者，片長 18 分 44 秒，英文自動字幕。主持人沒有在字幕裡報出自己的名字。這份筆記依英文原稿整理，專有名詞保持 English。

- 原片：[YouTube](https://www.youtube.com/watch?v=A7OV2rOIp2Y)

## 一句話

AI coding 工具能加快起步，但沒有架構願景，也沒有人本來就會帶進來的規劃，後面就會寫偏。Create MVP 把一個想法收成 PRD、流程、tech stack、requirement 和 status，再交給 Cursor、Lovable、Bolt.new 或 Claude。計畫先寫清楚，模型才知道界線在哪；它開始亂建檔時，就把 requirements 和 status 丟回去，問還在不在計畫上。

## 缺的是 context，不是多一次 prompt

[0:55](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=55s) Rohit 說這個工具本來沒有產品計畫。他只是用一套結構化格式餵 Cursor、Replit 這類 idea-to-prototype 工具，後來才把同一套文件做成給別人用的 app。程式碼公開，誰都能貢獻。他自己也做 DevRel、cloud 和 AI。主持人補了一個觀察：上一週 newsletter 的新工具裡，Create MVP 是點擊最多的連結。

[2:00](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=120s) 他要補的落差，是當 prompt 丟進去的模糊想法，和最後能用的 AI 生成程式。工具會加速，卻不知道架構願景：起步給得出來，過一段就給不出你要的結果。他認為 Claude、Sonnet 這類模型本來是為了理解、做研究、帶真實世界的經驗，不是為了寫 code。你沒放進 context 的東西它不會自己長出來，包括架構決策、不完整的資訊、過期文件。他舉 Next.js 上新做出來、你卻沒放進 context 的功能。安全他沒在這場展開，只指回自己在 KubeCon 的舊演講。

他用 70/30 形容現況：專案裡大約 70% 的 code，AI 一般寫得出來；剩下 30% 是讓人挫折的手動工夫。

## Blueprint 是一組要一起維護的檔

[4:01](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=241s) Create MVP 產出多個檔，讓模型知道要做什麼、按什麼流程。他點名 Cursor rules（他說 Cursor 已把 Cursor rules 標成 deprecated，留著仍有用）、backend flow、frontend、PRD、requirement、status、tech stack。這些 blueprint 來自對 Gemini 2.5 Pro 的結構化 prompt。大約兩週有一千多個使用者，他自己沒料到一個順便做的專案會長成這樣。

[5:10](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=310s) 前一天他在 Reddit 發文，先說大約 21 小時，接著又說 24 小時。討論裡的挫折很典型：人已經仔細寫 prompt、給了 context，Cursor agent 還是常常顯得笨。那篇他沒有推 Create MVP，只講這套 blueprint 怎麼用。

PRD 寫誰、什麼問題、專案範圍。Application flow 寫產品該怎麼長。Tech stack 寫用哪些工具和 API。視覺語言寫色盤、顏色和間距。他自己手動做過一次，要給 150 個以上清楚、分開的 state，寫很久，寫完才能少做很多後面的工。Project status 他比成經理為團隊排的 sprint：整條 pipeline、要跟什麼、什麼時候做完。每次都要叫 Cursor 或其他工具同時盯 status 和 requirement。Requirement 的用法是照這份走，不要走出這份，走出就會弄壞程式。

他稱它是第一個 open source 的 PRD 工具，理由是他做的時候沒看到別的 open source 工具在產 PRD。檔案可以跟 Cursor、ChatGPT、Claude 一起用，也可以在 Cursor 裡開 Context7 的 MCP，文件並排看。

## 同一句話，有 PRD 和沒有 PRD

[8:26](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=506s) 現場他丟一句普通 prompt：做一個 habit tracking app，再按 generate implementation plan。Gemini 2.5 Pro 的 context window 很大，他說大約要 2 到 3 分鐘；事先跑過的那次是 3 分鐘。出來的是一組 markdown，含頁面、project status，以及他認為最重要的 PRD。這份 PRD 把產品叫做 Habit Quest，寫出 business goal、描述、使用者該怎麼走、dashboard。可以直接貼進 Lovable 或 Bolt.new。

[9:52](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=592s) 對照發生在 Devoxx UK，和 Tessl 團隊一起的類似演講。Lovable 裡只給一句 prompt，做出來的網站有 create your imagination 這類區塊，但不能點、什麼都不做。改餵工具產出的 PRD，得到他稱為 dream into pixels 的架構，自己定義了 login、sign up，也把 credits 和 backend flow 定得比「做一個 text to image app」這種句子具體。

Bolt.new 上他想做 YouTube 縮圖疊層，讓人不看片就能看到 alcohol warning（他自己不喝酒），素食者也能先被擋下來。開頭順利，後來一直卡在 repeated attempt fix：模型說修好了，其實沒修。他說這是這類 prompt 的常態。

[12:48](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=768s) 回到 Cursor，instruction 資料夾裡是 habit tracking app 的 PRD 和 requirement。Requirement 定義 purpose、goal、target user、functional requirement。第一次要下的指令是照這份做 app 並維持流程；之後每次再 cue 它去追 requirements 和 status。他建議用 Sonnet 3.7 這類模型。他當時開的是 auto，輸出就沒有按那個方式排好。Claude 用 artifacts，也能從同一份 PRD 得到 system overview：user authentication、habit management。他補一句：這些檔可以自己寫，不一定要經過 Create MVP。

有 instruction 時，它建出 text to image app，以及 config、controllers、middleware、models。前端那份大約 582 行，他歸因於 Gemini 2.5 Pro。沒有 instruction folder 時，它會慢慢做 create image 的 backend，然後開始 npm install。字幕有一句目錄名稱聽不清，這裡不補畫面。

[16:27](https://www.youtube.com/watch?v=A7OV2rOIp2Y&t=987s) Jay Sadana 問：怎麼避免舊 code 變成過期的 artifacts，怎麼持續接上 continuous delivery。Rohit 的回答是，Cursor 開始 hallucinate、做出不要的檔時，把 requirements 和 status 兩份丟回去，問 are we on track、are we following the plan，不在計畫上就 stick to my plan。它若認為有對專案更好的改動，就在 instruction 裡開一份新檔，例如 changes.md，寫下它想改什麼。主持人把它收成一種平衡：LLM 要守住腳本和需求，跑掉時也要有地方拉回來。
