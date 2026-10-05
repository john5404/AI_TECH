# The Future of Dev: AI, Specs, Guardrails | Stephan Janssen

片長 5 分 13 秒，自動英文字幕。訪談。字幕把 vibe coding 聽成 VIP coding 或 vi coding，把 Claude 聽成 close code，把 Cypress 聽成 Cyprus。最後一句被截斷。

- 原片：[YouTube](https://www.youtube.com/watch?v=EyBy5EaLmuY)
- 講者：Stephan Janssen。

## 一句話

他說這個專案大約五週做完，若不用 vibe coding，三個人要六個月。資深的人仍然得在旁邊，否則會放錯權限、洩漏 API key。他不放心把審查全交給另一個模型。一個已上線的功能改壞了公開頁面，因為那個情境沒有 Cypress 測試。他想要 80% 的 unit test 覆蓋，並用測試守住 spec。

## 速度，以及資深的人還在

[0:00](https://www.youtube.com/watch?v=EyBy5EaLmuY&t=0s) 他把這叫做開發的文藝復興。不做 vibe coding 的話，光建置環境就可以花好幾天。身為較資深的開發者，他變得更有產能，而且做不出模型給他的那種 UI。現在這個專案大約五週。沒有 vibe coding，他覺得絕對要三個人、六個月。但還是需要資深的人引導，不然會出問題。

[0:41](https://www.youtube.com/watch?v=EyBy5EaLmuY&t=41s) 例子是 Angular 的 route guards。不知道這個概念，初學者或非技術的人會把某些頁面的存取放開，或露出 API key。所以他做過練習：叫 Claude 當 white-hat hacker 去打自己的系統。它會走 code、走網站。有一次它在沒登入時看到 admin 頁。另一個練習是 DevOps Belgium 的 3,000 個不重複使用者，系統怎麼擴、瓶頸在哪。它會說 Firebase functions 該給更多記憶體、允許多一點 instances。這類比較偏 DevOps 的對話，也是流程裡的一步。

## 他不把審查完全交出去

[2:08](https://www.youtube.com/watch?v=EyBy5EaLmuY&t=128s) 主持人問：多少審查是你自己做，多少讓別的 LLM 進來。你會不會讓 DeepSeek 之類說「這可以」你就信。他說絕對不是百分之百放心。

[3:03](https://www.youtube.com/watch?v=EyBy5EaLmuY&t=183s) 當天早上他又在已部署的應用裡找到一個 bug。DevOps Belgium 已經有幾百人在用。他用 prompting 做了一次重構：講者可以編輯從 Flickr 用臉部辨識找出的照片，決定講者頁要顯示哪張。功能本身動了，卻弄壞公開頁不再顯示照片。他說要事先擋這個，只能靠那個情境的 end-to-end 測試。他選 Cypress，但那個情境沒有測試，於是 production 壞了。他也說，不用 vibe coding 的普通團隊一樣會發生。

[3:57](https://www.youtube.com/watch?v=EyBy5EaLmuY&t=237s) 目標是 unit tests 到 80% 覆蓋，也想要更多 end-to-end。即使只是 prompting，這仍然很花工夫，但會提高他部署時的信心。沒有這些，就是在暗房裡走路，一定撞牆。測試，或 test driven、unit、integration，會越來越重要，用來守住你定義的 specs。他說那樣的協作會成功。句子在這裡被截斷。
