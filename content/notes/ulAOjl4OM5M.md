# Making AI coding assistants better, even for your weird DSLs - George Fahmy

片長 21 分 51 秒，英文自動字幕。講者 George Fahmy，Stakpak 創辦人。這份筆記依英文原稿整理，專有名詞保持 English。字幕把公司名聽成 stackpack，把 Terraform 聽成 tform、terap、bform，把 tree-sitter 聽成 treer，把 Eraser 聽成 razor；下文用校正後的名字。問答有幾段問題沒被摘全。

- 原片：[YouTube](https://www.youtube.com/watch?v=ulAOjl4OM5M)

## 一句話

LLM 擅長寫一般程式，卻常搞砸 DSL 和設定檔：訓練資料少、schema 變得快、任務本身也會讓分數拉開。George 用一年裡試出來的四個手法說明，可靠度可以靠系統補，不必先換更聰明的 model。Bounded decoding 把輸出鎖在合法語法裡，RAG 改成對 DSL 有用的檢索，grammar prompting 教 model 一門它沒看過的語言，recovery 則用 parser、schema 和一個只會兩件事的 agent 把還會在 production 炸掉的設定抓回來。

## DSL 難，是因為資料少、變得快、任務也不一樣

[0:04](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=4s) George 說 Stakpak 要處理 coding 裡 LLM 最差的那一塊：infrastructure 和 DevOps，把一堆工具的設定接起來，讓開發者能把時間放回做產品。他之前在幾間新創當 founding engineer，在意的是 developer experience 和 security，兩件通常不太合得來的事。

[1:00](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=60s) 他先縮小範圍。一份依 schema 走的 YAML 或 JSON 嚴格說不是 DSL，只是通用的 configuration language，但 LLM 一樣很差。真正的 DSL 每個專案都在用：SQL、Terraform、Docker Compose、Kubernetes manifest、給 OPA 用的 Rego。字幕中間還有一個沒講完的 graph。LLM 擅長大家喜歡寫的 code，不擅長大家不喜歡摸的這些語言。

[1:54](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=114s) 他引用一篇談 DSL 的論文，兩種評法。左邊是 Stack Eval，用 Stack Overflow 上不同 DSL 的問題和答案。右邊是 Stack Unseen，比較新、模型多半沒訓練過的問題，分數掉得很快。原因有兩層：這些語言在訓練集裡的資料遠少於 JavaScript 和 Python，愈冷門掉得愈多；資料不夠新，最新問題的表現也會掉。DSL 很碎、種類多，schema 一常改，LLM 就更差。

[3:39](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=219s) 他拿 JavaScript 對 Kubernetes manifest。Kubernetes 大約每三個月就有一次 major 或 minor release，多數模型不知道最新版；Python 語法很少這樣動。他們內部還比過開源和閉源模型，字幕裡看得到 Meta Llama、Mistral、GPT-4o、Claude 3.5，任務是幫不同雲端產生 Terraform。新鮮度和語言熱門程度之外，任務本身是第三個因素：Llama 設 Azure 特別差，別的雲端又是另一組高低。

## Bounded decoding：不合法的 token 機率直接歸零

[5:00](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=300s) 四個手法他用 burger 當記憶。他說還有別的一直在試，這四個衝擊最大：bounded decoding、retrieval augmented generation、grammar prompting、recovery。比較單純的 prompting 他這次不展開。

[5:31](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=331s) Bounded decoding，他也叫 structure generation。例子是一條產生小數的 regex。他承認沒 escape 掉小數點，小數點後面也該強制有數字。假設這條 regex 成立，問題是怎麼讓 LLM 每一次都吐出合法數字。

[6:42](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=402s) 他簡化 LLM 的最後一層：給定前面的 token，模型給下一個 token 的機率。他舉的序列是 7、4、8，後面加號 3%、某個 F 4%、小數點 7%。Structured decoding 是把 regex 做成 finite automaton，逐步走，把不能轉移的 token 機率遮成零，剩下的解碼就還在自動機裡。Regex 可以轉成自動機，context-free grammar 也可以。一般程式語言不全是 context-free，但多半可以定義一個較簡單的 context-free 版本，再用它控制解碼。

[8:30](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=510s) 他們為 Terraform 寫了 context-free grammar，再做成自動機，於是每一次都得到合法的 Terraform。他說有些供應商，例如 Anthropic，不做這件事，靠模型夠聰明，prompt 成通用 JSON，還是會在某些情況出錯。GPT-4 配上 Outlines 可以。這段說明他取自 Outlines 文件，字幕把出處聽成 dotex。開源 LLM 加上 Outlines，也可以每次都產生合法輸出。

他常用一個測試確認結構生成是真的鎖住：叫模型在只能吐 Terraform 的狀態下回答「你是誰」。它會寫出一個用 local-exec provider 把 “I am a devops engineer” echo 出去的 resource。問的是領域外的問題，輸出仍然是合法 Terraform。他說 LLM 很會找 workaround，所以這套才會成立。

## RAG：關鍵字比語意搜尋有用，文件比舊程式碼新

[9:51](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=591s) 第二個是 retrieval augmented generation。使用者的 prompt、選到的 code、環境（他說 Cursor 會帶進專案程式碼），再加上外部文件，先檢索更多 context，再一起生成。Context 可以是相關程式、第一版 GitHub Copilot 那種做法、標準作業程序、你們自己的 best practices、網頁，或文件。通常會比較好，也比較能依你們的方式客製。

[10:48](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=648s) 對 DSL，他們覺得至少有三件事能讓 RAG 更好。第一是 query expansion。不要直接拿使用者的句子去檢索。一個不必很聰明的小 LLM 可以拆開、改寫：抽出關鍵字，以及把問句寫成更展開的版本，再加上 filters。DSL 裡縮寫和技術關鍵字很密，在語言內部說得通，在訓練資料裡卻只是很小一塊，模型對不上。DSL 故意寫得很短，好表達複雜工具；模型不懂這種壓縮，所以要先展開，才對得上外面的 context。他發現對 DSL 的檢索，關鍵字比 semantic search 好。

[12:09](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=729s) 第二是文件。GitHub Copilot 和 Cursor 做 infrastructure 很差，是因為它們主要參考 code samples，不參考文件。公開的 Terraform 和 Dockerfile 多半舊。對上最新文件，結果比較新、品質比較高，即使例子本身不是 code，只是文件。

[12:46](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=766s) 第三是把 static analysis 混進生成，這是後面會再出現的主題。他們用 tree-sitter 把 Terraform、Kubernetes manifest、Dockerfile 解析成 code blocks，找出區塊之間的關係，再生成摘要來索引。檢索的就不是一段文字，而是設定的結構。關係不是語意上的近似，是 infrastructure 元件、或 CI/CD 步驟之間一張確定的圖。

## 新 DSL 用文法教，舊問題用 parser 和一個很笨的 agent

[13:40](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=820s) Grammar prompting 來自一篇論文。把目標語言的文法寫成 BNF，加上幾個例子，放進 prompt，教模型這門語言怎麼組。他們在內部 DSL 生成評測上，成績提高 12%。對已經知名的 DSL，另外幾招更好；這一招特別適合模型完全沒看過的新 DSL。

[14:16](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=856s) 他們做過一個 endpoint，把 Terraform 轉成架構圖，用的是圖工具 Eraser 的 DSL。沒有模型知道這個工具。他們寫了一份簡單文法，加上文件，做 grammar prompting，模型就學會產生它。用一個很舊、很小的模型，成本少八倍、快八倍；對上 o1，至少便宜 500 倍。同一套做法讓 Llama 3.1 在 DSL 生成上打過 Claude。他的結論是不必更聰明的模型，要的是包在模型外面、更可靠的系統。

[15:42](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=942s) 最後是 recovery，一樣靠 static analysis。生成之後先 parse，失敗就把 parser 的回饋交回 LLM。Parse 過了還不算完。Terraform resource 要再驗證 schema：屬性齊不齊、有沒有 deprecated、能不能對上最新 schema。他說 Terraform 的 AWS provider 每三到四天就有新版本。驗證不過，再交回去修。

[16:26](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=986s) Agent 讓這一步更有意思。他們用小小兵命名。最有趣的是 Norbert，the naked minion：只會兩件事，跟使用者要輸入，以及在機器上跑一條指令。這麼簡單的架構，仍能修掉 parser 和驗證抓不到的問題，例如 AWS 上 VPC 數量到頂、機器上少裝了東西、或 credentials 沒設好。合法設定推進 production 仍會失敗，這種 retry 補的是那一層。

[17:22](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=1042s) 他想多講 evaluation，但那是另一個大題目，歡迎會後找他。

## 問答：文法得手寫，評測資料得自己跑出來

問答有幾段字幕只有沉默或半句，問題本身沒被摘到。聽得見的有三點。

[17:59](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=1079s) 有人問到 LLM 生 DSL。他說自己還沒試過某一種做法，但就算一個 LLM 生出 DSL、另一個 LLM 要去用，還是得用這些手法，因為那門語言不在模型的參數裡。

[19:01](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=1141s) 文法是手寫的。他們會用 LLM 改 prompt、做優化，但寫文法本身很差。文法也是一種 DSL，而這是少數這些手法幫不上的情況：它要很多推理，還要把結構排對。所以是很慢的人工迭代，把文法寫得夠通用，讓 llama.cpp 讀得懂、又不會逾時。分支一多，可能逾時然後什麼都不生。這不是完整文法，是一種有界的寫法。模型對文法很敏感，規則對調就像 prompt engineering，規則怎麼拆、怎麼組合，結果會不一樣。他不知道為什麼，但確實會。

[20:39](https://www.youtube.com/watch?v=ulAOjl4OM5M&t=1239s) 評測 agent，他們看到至少三層：終點、子目標、思考軌跡，也就是某種 partially ordered plan。要有這種計畫，就得有大量「步驟怎麼排才做得到」的例子。他們找不到 DevOps 任務的資料集，於是做很笨的 agent，像 Norbert，多數時候失敗，丟進不同情境跑，留下成功的，生成標準作業程序或一個 world model 來引導下一次，再跑。他說這是他們目前最接近 reinforcement learning 的做法。
