# AI-Powered Documentation Experience with Amara Graham: Kapa below the surface

AI Native Dev 播客，片長 18 分 46 秒，英文自動字幕。回頭來的來賓是 Camunda 的 Amara Graham，head of developer experience。主持人沒有在字幕裡自報姓名。這份筆記依英文原稿整理，專有名詞保持英文。字幕把 Kapa 聽成 Kappa、把 Camunda 聽成 kunda，下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=3LUG9EfH-c0)

## 一句話

Kapa 是 Camunda 文件上的 AI agent：使用者提問，它回答並引用文件。Amara 看的不是讚數，而是 uncertainty 有沒有過自己設的門檻、答錯時該改 training data 還是改文件，以及 Ask AI 和關鍵字搜尋各在做什麼。她的結論是：選工具要看自己的社群容不容忍 hallucination，而且不能打開就放著不管。

## 儀表板上，什麼值得管

[0:39](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=39s) 這集是螢幕分享，接著上次談過的題目往下看：對話、dashboard、analytics。Amara 說 Kapa 是他們評估後選的工具，她不打算做銷售簡報，也不能說它是不是最好的，只是對他們最說得通。畫面是最近一個月。他們快要發產品，minor release 通常會把人帶回文件、也帶回這個 AI agent，所以這個月可能比平常更亂，她不把它當成史上最好的一個月。

[2:30](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=150s) Kapa 說「我不確定怎麼答」時，後台會記一筆 flag，團隊可以回頭看：不確定是什麼意思、答案能不能改好。Reactions 很少。她覺得人拿到想要的答案就點走了，被惹到才比較會 downvote。有些 thumbs down 不是答案錯，答案仍然正確，只是使用者不喜歡產品還沒有那個功能。她說那不是 bot 的問題，是 product management 的問題，但可以轉給對的人。

[4:00](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=240s) Unique users 她幾乎不看。Camunda 仍大致是德國公司，有人可以 opt out、不想被追蹤。比較新的是 support 負擔：這項在他們剛上線時還沒有，用來看有沒有把一部分負擔從人類 support 團隊拿走。她覺得偶爾看很好，但不是她一直盯的數字。

[5:26](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=326s) Uncertainty 她有門檻：超過 10% 才會深入 certain 和 uncertain 的問題。畫面上的 7% 她覺得偏高。文件通常好到 week over week 更接近 3%；平常多半停在 3%、4%、5% 一帶，她也說典型是大約 5%。10 月有 minor release，人會問即將到來的功能，那些資訊根本不在文件裡，她不期待 Kapa 答得出來。所以 7% 還不足以讓她大動作，但仍會點進標成 uncertain 的問題做基本 triage：問法是不是怪、是不是她知道即將發布的東西。

## 改答案、改文件，還是先放著

[6:38](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=398s) 後台可以選擇直接改這一則答案，再餵回 Kapa 的 training data；也可以認定該修的是文件，開 pull request；嚴重程度夠的話，再啟動正式專案。她大約每月進來看一次，確認行為符合預期。季節性她心裡有數：行動門檻是 10%，平常大約 5%，這次 7% 偏高，但因為 minor release 在即，她不會因此全面動手，只處理個別對話。

[7:54](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=474s) Sources 有的要手動拉、看 last ingested 日期，有的變動很少，有的自動 ingest。答案不對，或最近有東西更新，要決定改的是已 ingest 的來源，還是單次修正。他們每月做 alpha release，一年兩到三次 minor release，後者通常很大。靠近 minor release 時她會盡量讓資料最新，重大 docs release 一定再拉一次文件。有 Cron job 去抓，她再決定要不要加、變動夠不夠大。可能一個月一次，也可能一個月好幾次。

[9:45](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=585s) Slack 可以接。Camunda Academy 團隊也在用 Kapa，Discourse 是他們的社群論壇，各團隊依自己要的東西做不同程度的整合。文件團隊自己握著很大一塊 source data，source of truth 始終是文件。文件問題走內部 Slack，或因為 docs 開源公開，外人可以開 issue 和 pull request。她把 Kapa 看成另一種 review：新功能的文件完不完整、說不說得通、客戶能不能照著做。它收集各主題的回饋，人再決定要不要改、這是不是 product gap、要不要改文件，或先忽略。後台有一種她稱為 gardening 的工作：現在就要處理，還是等產品生命週期自然走完。

## Ask AI 和搜尋可以並存

[11:44](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=704s) 上一集提過 search 和 chat UI 都在。她沒有乾淨的對照數字，因為搜尋有兩條路。一條是 Kapa 裡的 Ask AI，可以來回對話、問比較像人的問題，也可以拿來當搜尋框，丟關鍵字。另一條是文件框架自帶的搜尋，docs 跑在 Docusaurus 上，由 Algolia 提供；她說 Algolia 很早跟 Docusaurus 合作，讓開源專案能用。她兩邊都看：有沒有只在一邊變熱的題目、使用者拿不拿得到資訊、夠不夠有效率。接下來才是文件格式能不能同時被人與機器讀、搜尋詞、頁面 metadata 裡的額外關鍵字。她把這拉回傳統 SEO：文件若照 SEO 的做法，AI agent 也比較找得到結構正確的資訊。Machine learning、deep learning 她看成更早接上 AI agent 和 data ingestion 的路，這些事已經存在很久。

[14:34](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=874s) 她用互動次數看行為。很多是一次性的，例如「what is DMN」，人看完連結就走。以現在的行為，只要 Ask AI 能好好回一次性問題、一句話或關鍵字，她就先維持現狀。這仍取決於使用者：若大家習慣問完整的問題而且拿得到答案，關鍵字搜尋就不是他們會用的東西。Kapa 兩邊都還行，丟詞或好好問都會回。有人跟它聊很長，她覺得這也像人對 paired programming、Copilot 這類工具愈來愈自在。剛上線時她慶幸對方是機器人，因為人會直接吼參數名稱，而它沒有感覺。

[17:01](https://www.youtube.com/watch?v=3LUG9EfH-c0&t=1021s) 她對選工具的主管說：市面上很多廠商，確認它適合你的團隊和社群。有的社群比較能接受 uncertainty，甚至希望有一點 hallucination，好換來使用者回饋和驗證。Camunda 這邊她走得很結構化，很多 guidelines 和 guard rails，因為社群對 hallucination 的容忍很低。最大的一件事是不要打開就放著：要監控，並像她一樣設 uncertainty 門檻，到了再深入查。她認為這很適合做 user validation，也適合回答「我們的文件到底有沒有在運作」這種很難直接回答的問題。
