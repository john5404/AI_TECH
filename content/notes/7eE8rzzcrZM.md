# Building the Ultimate AI-Powered Development Environment with Farhath Razzaque

AI Native Dev 播客，片長 35 分 35 秒，英文自動字幕。來賓是自由接案的 software AI engineer Farhath Razzaque。主持人沒有在字幕裡自報姓名。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Cline 聽成 kle、把 Aider 聽成 Ada、把 Shadcn 聽成 Shaden、把 v0 聽成 vzer。

- 原片：[YouTube](https://www.youtube.com/watch?v=7eE8rzzcrZM)

## 一句話

Farhath 的理想環境不是一個 IDE。他白天靠窗、晚上幾乎全黑，只喝水；真正的流程是先用 Perplexity 選技術棧，用 Claude 把介面當消耗品來試，資料模型先定，再進 Cursor 寫後端，前端則用 v0 配上 Shadcn，因為他認為 AI 工具沒有 taste。原型很容易，上生產很難。模型像不同的人，沒有一顆會統治全部。

## 安靜的桌子，以及還在換的 IDE

[1:12](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=72s) 他做多個產品，過去一年半大量用 AI，試工具、比模型，想盡量塞進開發流程。白天寫程式會進到陽光裡；晚上只開一盞小燈，大多是暗的。理想的飲料是水，不碰咖啡因，不想依賴。旁邊放幾公升，大概會喝掉四輪。不吃零食，不想鍵盤弄髒。他在家工作之後買了會響的鍵盤，字幕裡主持人稱它 KRON，後來才發現 Zoom 上每個人都聽得見。寫程式時他通常要安靜，才能想、才能記筆記。吃飯或午休時會開電視。以前研究是一個螢幕放參考、一個放筆記。現在 AI 工具進了之後，他會在 Cursor 裡對一張簡單的 ticket 跑 agentic workflow，把票拆開：要盯的留下，知道 AI 做得到的就交給它，自己去吃東西，幾分鐘後回來。做完最好，沒做完就再跑一次。

[3:59](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=239s) 機器是 PC 加 WSL。IDE 現在通常是 Cursor，因為他從它開始，而且它常發功能，他又會回到它。他同時在看別的。Windsurf 最近發了 wave two，加了 web search，原本就有 agentic workflow。你可以請它實作最新的 API：它去搜、抓排名前面的連結、抽出資訊，再依找到的文件實作。他說這可能是遊戲規則的改變。Cursor 裡他得自己上傳文件；Cursor 也有 web search，但沒有 Windsurf 過去一週、甚至過去幾天做成的那麼直覺。Cline 是開源的 VS Code 擴充，做類似的事，而且他喜歡能選 LLM。他們最近加了 architect mode 和 edit mode，他說是從開源 CLI 工具 Aider 拿來的。Architect 可以選一個擅長想的模型來做計畫，大家好像往 OpenAI 的 o1，以及當時的 DeepSeek R1 靠。Edit mode 很多人仍預設 Claude Sonnet 3.5，雖然它出來頗久。他在等下一版，字幕聽成 C 4。

[5:55](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=355s) 他之前是 VS Code 使用者，所以 Cursor 的介面很熟。什麼功能會把他帶走，他還沒有唯一答案，但已經提到的那些很吸引人。Cline 的一個 fork，字幕先叫 rine、剛改名 rodes，加了 prompt enhancement：打一段 prompt、按一個鈕，它幫你改好。還有他不確定名字是不是 personalities 的東西：可以叫它當 QA engineer，或當很懂 accessibility 的 UI/UX designer，存下來，讓它像軟體工程裡的某個角色。他想了很久、還沒看到人做的，是程式的 style reference，像 Midjourney。他去年有一陣每個週末玩 Midjourney。你可以生一張圖，再給另一張當風格參考，像文書處理器的格式刷。對 code 來說，可以是語言、結構、註解的多少，甚至架構和設計，讓做出來的元件有相似的架構，不管那是好是壞。每個藝術家有自己的風格，開發者也一樣，有科學也有創造，他想能複製那個。

[8:07](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=487s) 找工具和函式庫時選項太多。他想要一個工具，能分析做同一件事的不同函式庫，從每個拿最好的功能，再用他要的語言做出來，幾乎合併成適合他需求的東西。這個用最快的語言，那個有一個很強的功能，另一個有整合。外面有很多很大、卻不是最好工具的 repo，也有小 repo、甚至一個人做的很酷功能，只是沒有吸引到人。若能找到然後合併成理想的那一個，就好了。

## 資料模型先寫，介面是消耗品

[9:02](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=542s) 他通常不從 Cursor 開始。先上 Perplexity，研究這個專案該用什麼 stack、函式庫和工具。這就是他希望存在、現在得自己做的那件事：手動看、分析、判斷適不適合。選完 stack，進 Cursor 寫一份 Cursor rules，給專案 context，以及它該遵守的規則：註解怎麼寫、編輯怎麼做、風格。然後才開始寫。他通常從後端開始。有人喜歡先看到自己在做的東西，他覺得那也好，但後端和 business logic 才是程式的肉。前端他分開做：進 Claude，生成 UI，用 artifacts 的預覽。有了 sitemap 和一堆畫面之後，請它給文字形式，再去 v0，用某個 UI library 生這些頁面上的元素。他反覆回到 Shadcn。這樣頁面一致、好看。AI 工具沒有的是 taste。把 UI library 給它們，才能保證品質。然後把生成的 UI code 和後端在某個時點合併，請它歸在一起，它頗會。

[11:03](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=663s) 資料模型最先。先有資料模型，再寫後端去對上它、接上它，然後才是上面的 UI。Claude 裡做的他說相當 throwaway，是實驗。就算你在專案裡什麼都有了，或開一個新聊天，AI 也很會幫你把點子撐開：它依你給的文件知道你要做什麼、知道你加過的功能，再幫你想這個消費者產品、B2B、或公司內部工具還該有什麼功能。他還做了一個 rubber duck。開發者會對小橡皮鴨說話來想問題。他用 OpenAI 的 realtime API 做了一個資深工程師版。他覺得某條路可能對、但知道還有別的選項時，就問優缺點、還有沒有建議、怎麼改，並叫它當非常高階的工程師。建議很好，他覺得自己因此寫出更好的 code。每個層級都有用，尤其是 junior：早期什麼都不知道，會想一切從零寫，而外面有很好的函式庫和產業慣例。問最佳慣例、怎麼讓 code 保持 DRY，很有用。

[13:59](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=839s) 文件方面，Cursor 不只會 code，也很會文字。他會開一個 docs 檔先寫。主持人說很多人覺得 Claude 寫文件、寫得像人，比 OpenAI 的模型好一點，OpenAI 有時沒那麼像。他可能自己起頭，再把專案 context 給它、請它寫完。資料庫的資料模型也是：先有大致想法，請它展開、給建議，接受一些、改一些。他知道有更好的文件工具，還沒開始用，在清單上。主持人提到早前上過節目、人氣在漲的 Swimm，字幕聽成 swim。測試他一開始不寫。專案早期 code 改很多，測試會一直壞。之後他目前通常用 Cursor 寫測試，也想試別的工具。主持人問是不是在 production 測，他沒有接成那是做法。部署上他還沒用很多 AI 工具。他看過 eraser.io，畫整份雲端架構的圖不錯。

[16:17](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=977s) 語言他一直覺得自己相當 agnostic。起點大多是 Python，大學大多 Java，現在大多 JavaScript，這些年又玩過大約半打其他語言。現在更願意伸腳進新語言，因為摩擦力小很多。多年前 Swift 剛出來時他做過一個 app，沒有好的教學，語法每週在改，一天寫的 code 隔天就壞。現在 AI 工具可以在文件一發布就分析，更新它們索引過的文件。不必等別的開發者做內容，可以直接到文件、到 source of truth。PR 他目前靠跟 AI 聊天得到的建議。他想在 CI/CD 裡加 code review，自動看、給建議，也許甚至在一個 fork 上做一個帶變更的 commit。他在一場活動聽過一個工具，字幕記成 sagittal AI 的 Neo，打算開始放進專案。名字沒有聽死。

## 原型容易，生產要監控，也要假設有人來拆

[18:46](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1126s) 給想把 AI 放進開發流程的人：用 AI 做東西，原型很容易，進 production 很難。剛開始就去玩不同模型。每個模型像自己的個性，像人：回應方式、說話方式、被允許講什麼的限度、放進去的 guard。比速度、回應品質、準確度，還有成本。OpenRouter 不錯，它把各家模型的 API 整理好，帳號裡放一點 credit 就能在應用裡用這些模型。開源和專有都玩。多數人從 OpenAI 開始，那是好的起點，但開源世界很大。當時剛出的 DeepSeek，從 benchmark 和很多人的測試看，似乎對上了 OpenAI 最新的 o1。他覺得開源今年會很大。想在自己電腦上玩，可以用 Ollama 或 LM Studio。函式庫裡 LangChain 大概大家都聽過，有人說有點腫，也完全可以從零寫。階段還早，從零寫是學 AI engineering 怎麼運作的有用方式。Prompt engineering 是大事，可以大幅提高回應和產品的品質。再玩 RAG，用來壓 hallucination、用自己的資料；做 tools 和 function calling，例如給 web search。也有 agent frameworks，可以開始把腳伸進 agent，會打開一整片可能。上生產則真的要監控：LLM 請求的輸入和輸出要有 observability，看哪些 prompt 有用、迭代、讓回應變好。這些要跑上千次。還要玩 adversarial prompts：有人想拆你的應用時它會不會壞。不能假設使用者總是好意。

[21:36](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1296s) 不同開發者會依用例選不同模型。小模型更快、更便宜。他舉 Microsoft 的模型，字幕聽成 five、以及剛出的 54；在他的用法裡很好，就算在幻覺，也會告訴你它不知道答案，這句字幕有點拧。小模型通常沒有那麼多世界知識，很多應用也不需要。省成本、要快，就用小的。大模型也許你需要更多創造力，不同模型講故事的方式也不同。他不認為會有一顆模型統治全部。會是不同模型對不同用例、專精不同資料集。所以要依自己的用例實驗。工具愈來愈常讓你選這個工具要用哪個模型，體驗會好很多。

## 經得起時間的測試，以及一月裡的 DeepSeek

[23:20](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1400s) 他希望存在、現在還沒有的，是更好的 benchmark。常常一個模型在 benchmark 上贏了另一個，開發者拿到手、依自己的用例看輸出，卻沒有好好對上真實世界。o1 在十二月出來，在他稱為 12 days of shitness 的那串發布裡。熱鬧的一部分是它分數很高，或至少那個帶額外 test-time compute 的 pro mode：給它更多時間答題，在 ARC-AGI 上做得很好。很長一段時間，大家把在那裡變好看成接近 AGI。Benchmark 的創造者出來說：這從來不是合適的測試，現在得做別的。他希望人想遠一點，做出經得起時間的測試。主持人也說 benchmark 總是難，因為一公布就有人來玩，模型不會例外。若開發者對自己的需求有比較現實的期待，至少會得到一份短名單可以試。

[24:48](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1488s) 有一週可以玩的話，他想玩 Anthropic 在去年底發布的 MCP，model context protocol。它讓不同資料源接上，AI 工具能用它們。你做 server，也有現成的幾個。客戶端的例子是 Claude 桌面應用，不是唯一的，你也可以自己做。例如一個 GitHub server：在 Claude 桌面裡聊天，它就能在你的 GitHub repository 裡做事、建立、修改。還有很多可以加的工具。對他的流程，接到 Jira 或他的票務平台會很有用。他通常把要做的事寫成清單，可以一次讓它把清單整理成團隊看得懂的、清乾淨、送到 Jira，再有另一個工具去對那些票採取行動。那就是可以打開的 agentic behavior。另一個是 PearAI，VS Code 的一個 fork。他覺得他們有點不同：不是自己做每一塊，而是想當 Cursor 這類東西的模組化替代。Code completion、聊天、IDE 裡每一塊有 AI 的地方，都允許你帶進不同服務，用每一塊的 best in class，也許做自己的方案。

[26:56](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1616s) DeepSeek 他玩過網站上的聊天，API 還沒玩很多。錄音時它大約一週前出來。變熱的一部分是 API 免費。App Store 上它在美國和歐洲都到了第一。模型訓練成本低於 600 萬。DeepSeek R1 也是低於 600 萬訓練的。從 benchmark 和一些使用者測試看，它和 OpenAI 的 o1 reasoning model 同一等級，而人們在想 o1 是花了數億。便宜很多，來自中國。股票市場吵了一陣：Nvidia 跌了 16%。他看到 Meta 漲，一部分因為他們也在用 Llama 系列做開源模型。他不太驚訝。過去兩年，開源一直沒有離專有太遠。有一份外洩的 Google 備忘錄，那句名言是 we have no moat：模型本身不足以構成競爭優勢，尤其大科技把這麼多錢丟進去。開源從落後六個月，收到三個月；然後一個開源模型上個月出，R1 這個月出，落後一個月。差距在收。成本也一樣：第一個達到某個水準的模型花很多錢，不久較小的研究單位就做出同等、但成本小很多的。他覺得人得出了錯的結論，說美國的研究單位花了那麼多錢、徹底完了。也許會有壓力，但那是錯的讀法。DeepSeek 的研究開源了，論文寫了他們怎麼做。美國大大小小的研究單位會拿走這些知識，重做、改進自己的模型、讓它們便宜很多。硬體優勢還在，因為禁運，最新的晶片不能賣到中國。他們會拿這個研究把模型做更好。他講 Jevons paradox：東西變有效率，你會以為用量變少。算力變便宜，會以為用得更少，因為價格掉很多；但它打開的用途多到用量瘋狂上升，對算力的需求反而更高。所以 Nvidia 股價下跌對他說不通。說大科技處境很糟，他會說不是，他們不會停在這裡。若模型就停在這個水準，也許那些人有道理；這些研究單位的重點是把限度往前推、做他們能做的最好模型，那需要算力。DeepSeek 很好，而這全發生在一月，實驗室和公司之間的競爭被推高，對我們就是更好的模型。OpenAI 決定很快放出一個模型，字幕聽成 O free mini，而且對所有人免費。他相信一部分是 DeepSeek 帶來的壓力。

[31:20](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1880s) Hackathon 他最近看到兩個人用 Gemini 2.0 Flash 做的東西。那是多模態模型，能看懂影像、影片和語音，也處理文字，回應可以是音訊或文字。他們做了一個 app，用來拍你的房子，再用另一個物件偵測模型分析屋裡的東西，把財物和貴重物品編成目錄。用途是保險。平常你得估計財產價值。低估，萬一出事就拿不到全額補償；高估，保費就太高。他們兩天做出來。走一圈房子十分鐘，它列出物品、給估價。再開發之後，保險公司可以用。他再次說 production 要時間。主持人覺得有用，也像一場安全惡夢，但幾天內能做成這件事很驚人。

[33:01](https://www.youtube.com/watch?v=7eE8rzzcrZM&t=1981s) 消息來源很多，用得最多的是 YouTube。給開發者他推薦 Indie Dev Dan 和 All About AI，覺得他們用最新工具和模型時做了該做的功課，也有好的判斷。AI Explained 則更多談這些發展的更大含義，用來跟上新聞。他也跟專案的 Discord。Twitter 和 Reddit 拿人的看法：新聞一出來、有人實驗過，Reddit 上會討論。很多頂尖研究者和公司都在 Twitter 上一直貼，那是資訊第一次出現的地方。Product Hunt 也很好：那裡的專案是人真的想過的，不只是 demo，人在想怎麼上 production，而且有人投票排名，看得到正在出來的最好的東西。
