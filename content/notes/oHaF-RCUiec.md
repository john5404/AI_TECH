# Developers on the Ground: The Reality of AI Development in 2025

片長 10 分 33 秒，自動英文字幕。不只一個人。中間有幾段沒被摘到。Windsurf 被聽成 wind surf。LangGraph 被聽成 langraph。Anthropic 被聽成 Entropic。有一個人名聽成 Moshvitz，不改成別的拼法。

- 原片：[YouTube](https://www.youtube.com/watch?v=oHaF-RCUiec)

## 一句話

工具都不完美。做法是把兩三個工具串起來，補彼此的弱點。他用 Gemini 看整體架構和大 context，再用別的工具去執行那份計畫。時間有限就追反覆出現的大節奏，不要每個新工具都鑽。另一個人說，用圖把 prompt 互相呼叫，做不出扛得住失敗和部署的 workflow。

## 串工具，但不要每個洞都鑽

[0:04](https://www.youtube.com/watch?v=oHaF-RCUiec&t=4s) 多數工具不完美。它們有盲點，有很會的事，也有不怎麼會的事。所以是做 workflow，也許把兩三個工具串起來，補另一個的弱處。他說 Gemini 很適合當架構師，看更大的圖、codebase 的完整 context。Windsurf 和另一個在底下的工具去執行 Gemini 看出的計畫。LLM 和工具的組合現在幾乎無限，不容易，但要找一個適合你的工作負載的，因為每個開發者做東西的方式差很多。

[0:36](https://www.youtube.com/watch?v=oHaF-RCUiec&t=36s) 問想成為 AI 測試開發者的人，該小心哪兩三個坑。他說自己會試每一個工具、鑽每一個兔子洞。很多是噪音，留不住，尤其這塊移動這麼快。這週的新聞一個月後可能就不相關。時間有限、大多數人有工作、下班後能拿來學的時間就這麼多，就追那些一再重複的大節奏。那句沒說完。

[2:05](https://www.youtube.com/watch?v=oHaF-RCUiec&t=125s) 換了一段。他們已經在 Claude 4 那個等級的模型上。公司很新。從第一天就在用前沿模型，所以從第一天就是 AI native。後面有人覺得意外，因為傳統公司的人知道事情很手動，卻以為從 Y Combinator 出來的前沿新創是完全自動化的。中間有一段沒被摘到。

[5:17](https://www.youtube.com/watch?v=oHaF-RCUiec&t=317s) 他們看尊敬的公司用什麼軟體。Linear 是這樣來的，Mintify 也是。跟上整個領域，比跟上個別 SaaS 產品更重要。他讀一份電子報，字幕說是 Don't worry about the vase，作者聽成 Moshvitz，評論 AI 的版圖，談最近發生什麼、出了什麼模型、差在哪。

[6:29](https://www.youtube.com/watch?v=oHaF-RCUiec&t=389s) 他覺得現在最大的挫折是每個人都在大幅使用 AI，很難找到把 AI 用在好處上的人。例如有信心的開發者會確切知道自己要用 AI 生成什麼元件，而且已經有了。句子沒說完。

## 給企業看的，以及圖做不出耐久的流程

[8:14](https://www.youtube.com/watch?v=oHaF-RCUiec&t=494s) 有人在對非技術的聽眾講整體價值，以及它怎麼幫組織的表現。問有沒有指標向企業證明 AI 的價值。他們還在用概念驗證建立那個，還沒到指標。是拿出不同的資料集，展示用 AI 能從那些資料做出什麼，然後才能放上指標。

[8:50](https://www.youtube.com/watch?v=oHaF-RCUiec&t=530s) 問這個領域目前什麼被誤解。他們在用圖做 AI workflows，把 prompt 互相呼叫模型化，LangGraph 是這裡的典型例子。很多社群聚在那上面。他覺得那個做法很限制、很有限。它幫不上耐久、有效、能處理失敗的 AI workflows。失敗來自網路打嗝、伺服器當掉、網路分割。它也不適合管部署。若你有多 agent 系統，如 Anthropic 最近指出的，你需要類似 Rainbow Deployments 的東西，才能在系統正跑著複雜 workflow 時部署一個變更：既有的 workflow 繼續在舊 code 上，新的 workflow 用新 code。他覺得我們會越來越多看到這種分散式系統的工程問題。
