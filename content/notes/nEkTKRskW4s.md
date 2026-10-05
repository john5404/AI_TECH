# The Last Mile Still Belongs to Humans | Maksim Shaposhnikov

片長 7 分 14 秒，自動英文字幕。Maksim Shaposhnikov。Claude Code 被聽成 clawed code 或 cloud code。資料庫名字幕只聽到 pos，不寫成某個產品。活動網址沒有聽清。

- 原片：[YouTube](https://www.youtube.com/watch?v=nEkTKRskW4s)

## 一句話

現在可以用白話寫一份很大的文件，描述複雜的東西該怎麼運作，agent 會自己給一個大致能動的解。這不是 bug。需求本來就鬆、本來就沒寫完，模型才有空間自己決定。規格若夠乾淨，前後端的原型已經跟得上。要放進專業環境，最後一哩仍是人，而且本地給 Claude Code 全部權限會有 `rm -rf` 這類風險。

## 沒寫完，它就自己選

[0:00](https://www.youtube.com/watch?v=nEkTKRskW4s&t=0s) 這個時代可以用白話填一份很大的文件，描述複雜系統該怎麼運作，agent 自己拿出大致能動的解。他說這不是 bug，是 feature。需求總是鬆的，我們總是 underspecify。沒寫完的地方，LLM 可以自己決定怎麼走。

[0:37](https://www.youtube.com/watch?v=nEkTKRskW4s&t=37s) 大多數時候它不會正好是你要的。你仍要手動介入、修、驗證它做錯決定的地方。Human in the loop 仍必要。規格沒說用哪個資料庫，就由 LLM 選它以為的那個。這不是 LLM 的問題，是你沒寫完。若指令很乾淨、很詳細地說你要解法怎麼運作、該包含什麼，它的 instruction following 已經夠好，能做出符合期待的前後端原型。解法仍可能有限制，因為規格没寫完，或任務本身讓它做出不夠有效率、不能擴展的解，你還是得重構。那通常也是因為規格鬆。

[1:51](https://www.youtube.com/watch?v=nEkTKRskW4s&t=111s) 一两次或幾次之內，可以做出在瀏覽器裡能玩的遊戲、可以在本地跑的伺服器。他覺得有時還能更遠，連部署都完全自主。至少 Lovable 提供這個：前後端的開發生命週期和代管都包了，你不用做那些決定。Agent 已經這麼強。

## 專業環境裡的最後一哩是鎖住權限

[2:42](https://www.youtube.com/watch?v=nEkTKRskW4s&t=162s) 中間是 AI Native DevCon 的廣告，11 月 18、19 日紐約或遠端。網址沒有聽清。回來談的是專業開發者願意推進 production 的東西，以及開發環境本身。例如在本地用 Claude Code，它會有整個系統的權限。

[3:41](https://www.youtube.com/watch?v=nEkTKRskW4s&t=221s) 在本地 repo 上給 Claude Code 全部權限，它有時會不小心 `rm -rf`。沒有 checkpoints 就麻煩了。他說 Reddit 上很多這種故事。自己能做的一種做法是永遠在隔離環境裡啟動：單獨的 Docker 容器裡放 repo 的複本，命令送到那裡，agent 只在複本上工作。這處理的是權限，以及怕它刪東西。

[4:47](https://www.youtube.com/watch?v=nEkTKRskW4s&t=287s) 另一類是 API key。若你請 agent 去寫另一個 agent，測試時它可能需要 API token。給了之後它可能無限測試，把預算燒掉。這類比較難，除非把網路整個切掉。

[5:27](https://www.youtube.com/watch?v=nEkTKRskW4s&t=327s) 主要做法仍是 sandbox。另一種是限制可用工具，例如不能寫或改某些目錄。人在迴圈裡定這些規則，禁止對敏感函式庫或目錄做危險動作。Gemini CLI 附了現成的 sandbox。從目前目錄用 sandbox 開一場，它會在隔離的 Docker 容器裡複製 repo，你也可以指定哪些命令或工具可用，例如斷網。你不用自己手動開容器。
