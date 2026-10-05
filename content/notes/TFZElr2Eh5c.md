# Why Prompting Breaks Down and BMAD Doesn’t | Cian Clarke

片長 6 分 7 秒，自動英文字幕。Cian Clarke。BMAD 被聽成 BMAT，Y Combinator 被聽成 white combinator。

- 原片：[YouTube](https://www.youtube.com/watch?v=TFZElr2Eh5c)

## 一句話

Vibe coding 二十分鐘到一小時就看得到東西。Spec-driven 可能要六小時寫文件才看得到，會讓人挫折。但他覺得新創若不用這套，很難跟已經用 AI 把大部分 code 做出來的人競爭。他並不確定 spec-driven 就是明年的樣子。技術債變好處理之後，真正的負債可能是需求沒寫清。

## 原型和好看的東西不夠

[0:00](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=0s) Vibe coder 會挫折，因為從二十分鐘或一小時看到產出，變成六小時文件結束才看到。他描述一個 repo：有 lint、兩三百到四百個 unit tests、自動化測試、前後端分開、還有 infrastructure as code。他覺得沒用這套方法的新創會很難競爭。

[0:38](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=38s) 絕大多數 Y Combinator 新創在用 AI 工具做很多、甚至全部的 code。他不想誤引那個百分比，只說高得誇張。任何人都能拿 vibe coded prototype 給投資人看閃光的東西。把它變成撐得過前五百或一千個使用者的東西，是另一個問題。他覺得 spec-driven 就是做這件事的方法。

[1:20](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=80s) 主持人把 prompt-driven 看成原型做法。他認識的人先用 prompt，再把 Claude logs 交出去，說：從這些 prompts 看出我的意圖，從生成的 code 看出做了什麼、我滿意什麼，幫我寫一份代表這個的 spec。Cian 說純粹靠 prompt 的東西，在他的框架裡就是那樣。你仍可能寫出完美的 prompt，把 spec 的 context 剛好塞進 context window，一個一個小故事做完。Spec-driven 加一個 framework，只是讓你更可能成功。

## 他不把水晶球當真

[2:46](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=166s) 他並不固執地認為 spec-driven 就是 AI native engineering 的未來。Cursor 特別慢採用很多 primitives。最近的 plan mode 感覺像 spec、或跟 spec-driven 相容，但不是同一件事。現在這是跟這些模型工作的最佳近似，BMAD 這個 framework 也是。過去九個月他學到的一件事是水晶球本來就壞。主持人說看過一個用 LLM 做的八號球，未來一切都說 you're absolutely right。

[3:55](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=235s) LLM 通常在結構清楚的 specs 上更好。規格很差的系統會變成什麼？技術債，還是負債，因為 LLM 會照著實作並自己假設。

[4:24](https://www.youtube.com/watch?v=TFZElr2Eh5c&t=264s) 他問技術債還剩什麼。會不會出現 spec debt、requirements debt、不足的需求。技術債至少該退到背景，因為 agentic coding 比較好清 backlog。有時清技術債甚至有成就感，但那種苦工現在好做多了。於是跟你想做的東西沒對齊的部分才變成問題。規格很差的需求，會不會更難。經過三四天 spec-driven，突然有一個兩三萬行的 repo，中途漏掉的需求會不會更難補。他試過的做法是把新的 backlog 項目加到後面，繼續走方法，而不是逃回 vibe coding。那很誘人，但很難。
