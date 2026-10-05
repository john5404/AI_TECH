# Stephane Jourdan, Simon Rohrer & Pini Reznik - From Pipelines to Prompts: Surviving the Shift to AI

Stephane Jourdan、Simon Rohrer、Pini Reznik 的座談。片長 33 分 28 秒，英文手寫字幕。主持人說他們昨晚 11 點才知道要上台。這份筆記依英文原稿整理，專有名詞保持 English。前幾分鐘自我介紹和「有沒有地震式轉變」的回答，字幕大段聽不清，下面不補。聽得見的名字用題目上的拼法；字幕把 Stephane 寫成 Stefan。

- 原片：[YouTube](https://www.youtube.com/watch?v=1grkxo4cyKY)

## 一句話

Cloud、DevOps、DevSecOps 之後，下一場是 AI-native。Agent 整天在開 pull request、把東西送進 production，人已經審不完每一行。還留得住的是舊紀律：lint、把同一類錯誤寫回 harness、以及人做取捨。加速不會創造紀律，它只是把你原本的系統加快。好系統失敗不會變多；糟系統會更快地糟。

## Production 整天在變，context 比 code 更缺

[2:27](https://www.youtube.com/watch?v=1grkxo4cyKY&t=147s) 主持人把這間房間說成經歷過不只一次產業地震的人：做過 cloud、推過 DevOps、把安全拴上交付 pipeline 的 DevSecOps，現在面對 AI-native development。開場能聽清的履歷很少。有人在丹麥工作。有人說到一家顧問公司，做軟體開發基礎設施、大型平台，第一家公司是 Container Solutions。Stephane 說自己是 CEO 和共同創辦人，做的是給 production agent 的 context。過去 15 年他做過幾家管 production 系統的新創，最近一家被 Sage 收購，他在那裡做 cloud。

[5:04](https://www.youtube.com/watch?v=1grkxo4cyKY&t=304s) 主持人請他接 production。他看到的是 agent 一天 24 小時在開 PR，執行長也在把東西部署上去，所有人隨時在修、在改、在上新功能。字幕裡有幾個工具名聽不清。以前光是知道一次變更的影響就已經很難，手動漂移更不用說。現在每個人的 agent 都在 production 裡做事。你怎麼知道這 24 小時的影響？他要的是主動的 agent，和全部的 context：昨天改了什麼、這個服務和那個服務是什麼關係。有一句連到哪個系統聽不清，他點出的是名稱對不上、實際上是 IP。這不只是 root cause analysis，而是從 production、從多個帳號能拿到的知識。他覺得 DevOps 這波比較後面，因為寫 code 那邊已經有很多工具和資料；production 要維持燈還亮著。修補一直在發生，還得確認 blast radius 之後東西仍然能動。

[7:06](https://www.youtube.com/watch?v=1grkxo4cyKY&t=426s) Simon 說他在受監管的產業，不能那麼快，但仍然很快。他在帶開發者。最讓開發者意外的是，agent 診斷 production 有多有用。把 Elastic 的 log、ServiceNow 的 incident 報告和 code 一起丟給它，30 秒能解開開發者要花幾小時、甚至幾天才能弄懂的問題。只用在開發情境的人，若已經有好的 observability stack，應該把用法擴出去。地震還沒停，終點不知道。他說 production 裡用 agent，和另一邊一樣重要；那句話的後半字幕沒有收完。

## Lint 拉到 11，人不要再審每一行

[8:45](https://www.youtube.com/watch?v=1grkxo4cyKY&t=525s) 主持人問哪些 guardrail 沒有就會出事。Simon 講上週一個剛接觸 agentic coding 的開發者，用 OpenCode。對方說 LLM 出來的 code 是完美的，所以不需要 lint。Simon 把 Harness Engineering 的文章，以及最新那篇談 linting 的，指給他看。Agent 很會寫 code，loop 和產能都在，code quality 卻不好。要的是 determinism 和 feedback loop 配在一起。他的第一條是 lint，可以加、可以寫自訂 linter，也可以用 Adam Tornhill 的 Code Health（字幕寫成 Adam Torn Hills）看更深。總之把 lint 轉到 11。

[10:12](https://www.youtube.com/watch?v=1grkxo4cyKY&t=612s) 下一位說，不能再讓人審每一次 code review，不實際。一開始這能在某個程度上保住品質，但會製造問題。你需要懂 code 的資深工程師，而他們若自己不寫 code，維持讀 code 的能力其實很難，人也會變成瓶頸。開發快過審查時，才需要 Harness Engineering，以及一群專門的 agent。否則單一開發者的產能上去了，團隊的產能還是差不多。

[11:06](https://www.youtube.com/watch?v=1grkxo4cyKY&t=666s) Stephane 在這種團隊裡看到新服務對其他人變成未知的：某人用 agent 做出來就部署了。Claude 覺得該開一個新的 microservice，它就上了，沒有人知道它怎麼運作、為什麼連過去。為什麼這裡用 Elastic？因為 code 決定的。這種知識得放在某個地方，也許以前這件事是另一個服務在做。需要 guardrail（字幕寫成 God rails）。他實際看到的是愈來愈多異質的環境，除錯需要更多資訊，因為現在沒有人真的知道部署了什麼。

[12:11](https://www.youtube.com/watch?v=1grkxo4cyKY&t=731s) 資訊常常是一座山，人一條一條看不完。要的是能把取捨顯示給人的新工具。人該介入的是取捨，不是每一行 code：成本對速度、架構決定、要接哪一個 observability 工具。那些必須是人做的。

## 解釋性還停在組語；同一類錯誤要寫回 harness

[13:02](https://www.youtube.com/watch?v=1grkxo4cyKY&t=782s) 主持人記得早上 Guy 說的：若失去 code 在做什麼的 context，一樣有問題。文件、系統圖，把 LLM 指向 code 已經拿得到很多。還要不要投資更好的視圖？回答是：人和系統的 explainability，好讓人做決定。目前走得不夠遠。若 AI 是下一層抽象，就該離開審 code，改用一種描述系統的新語言。他認為那樣的語言還不存在，所以人被迫去看每一行 code、每一行營運 log。這不實際，像回到 assembly 去審每一行。

[14:29](https://www.youtube.com/watch?v=1grkxo4cyKY&t=869s) Simon 同意，並說自己會像壞掉的唱片。人在變化中間。Simon Wardley 在芝加哥寫了不少：新技能是看懂 code，而不是寫它。工具還不在。Glamorous Toolkit 對單一 codebase 頗讓人印象深刻；到了企業規模，現在沒有東西。不能只靠 LLM，它會 hallucinate，也會漏。你需要某個 deterministic 的東西告訴你 code 在做什麼。

[15:12](https://www.youtube.com/watch?v=1grkxo4cyKY&t=912s) Stephane 補了一個靠近 observability 的現象：團隊接下更多自己不認識的 production 系統，前一個團隊離開，或是併購來的。有對的工具和 context，現在幾秒就能管，一年前根本做不到。團隊接手的量比以前多很多。Simon 說你仍得把模型管得很緊。放任它「告訴我這在做什麼」，它會 hallucinate，告訴你你想聽的。公司自己的 context 才是把這件事做對的關鍵。

[16:19](https://www.youtube.com/watch?v=1grkxo4cyKY&t=979s) 有人說我們總拿完美當標準。它會 hallucinate，我們就當成問題，因為期待它完美。人也不完美，人也會說錯、做蠢事。他用自駕車比：不是零事故，是比人少出事。問題會一直在，能管就好。

[17:03](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1023s) 主持人要他們面對真的出事的例子：上週的 GCP 事故，以及 AWS 的 DNS。前面有一個詞聽成 railway，這裡不另造事件名。Simon 的答案是人在團隊裡本就該做的事，他指向 Hashimoto 寫的 Harness Engineering：任何出錯都餵回 harness，讓那一類錯誤不要再發生。能做 deterministic 的地方就做。回饋，再回饋。下一位說，這只是把你已經有的東西加速。系統本來就不常失敗，你就更快、仍然不太失敗。系統很糟，就更快地糟。他提到去年一份報告，字幕沒有說是哪一份。

[18:32](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1112s) Stephane 看到 production 上的 self-learning agent。它修了一個問題，用的是 Sentry（字幕寫成 Century）、Datadog 或別的資訊。Reflector agent 從問題和解法兩邊學，寫進 memory。一種會自我反映、帶著很具體記憶的 agent，隨時間學會發生過什麼。他說這是 production 的新一類 agent，學到的是這家公司專屬的東西，可以裁得很貼。大企業的部署大到沒有人真的知道全貌。概念上，這和持續整合裡健康的團隊一樣：build 紅了，有人什麼都不做，也可以主動修。現在是 agent 在做。有沒有持續改進的紀律，決定你能不能做出這種 agent。很多公司沒有這份紀律，字幕裡的做法聽成 settlements。然後一切更糟，失敗更快。人的慢，以前把這些問題蓋住。最先進的團隊是故意把水位降低，露出水下的石頭，再把它們修掉。

[20:25](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1225s) 主持人問，若大家都把水位降低，on-call 和 PagerDuty 還會不會結束。Stephane 說他正在做這種產品，所以有偏見。Agent 可以接到 PagerDuty 的警報，先幫你查。等你下床，至少有一份 markdown：對的資訊、對的 log、公司內部的東西。他說這已經存在、已經能動。他希望大家都有類似的東西，不必再在凌晨三點被叫醒。主持人把它說成第四線支援：agent 變成第三線，最糟還有人接手，這句字幕有點斷。Stephane 也看到分診：客戶問題被送到錯的團隊時，帶著公司內部 context 的 agent 幫得上忙。主持人說自癒系統是完全的夢。他不認為工作會很快消失，只會變成稍微不同的樣子。

## 兩年後不會只剩一成工程師

[22:20](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1340s) 主持人問：兩年後同一組人，今天哪一句會被自己說完全錯了。有人對模型輸出比其他人樂觀。事情變得很快，兩年後會有很強的模型，也許會後悔今天說它們還挺笨。後面一句字幕含糊，在問若已經有別的系統能 build 和 deploy，為什麼還需要 agent。

[23:22](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1402s) 下一位說自己要答另一個問題。天真的看法是：現在做的每件事都能自動化，時間變成十分之一、百分之一。於是只需要 10% 的開發者，其餘回家。他覺得這很蠢。他說的是 Jevons paradox（字幕寫成 Germans paradox）：東西變便宜，人會做更多。軟體開發會爆開，每個人都會做軟體，但他覺得工具還沒有。他稱為 vibe coding 的東西（字幕寫成 white coding）得建在更大的平台上，平台提供大規模的功能，每個人做自己的前端、自己的最後一哩。最後一哩會有大量小軟體；同時會有沒有 AI 就做不出來的巨大系統。巨大的那些由專業的人做，不是由 vibe coder 做。

[24:46](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1486s) Simon 同意，這個職業哪裡也不會去。他沒有水晶球。他在做的是 skills、skill engineering，和軟體工程；尤其是複雜的 skill。他願意站在另一邊賭 LLM：hallucination 就是它們運作的方式（字幕寫成 Polluter Nation）。在新的一類 model 出現之前，幻覺不會消失。他覺得沒關係。強的是軟體開發者加上 LLM。真正的商業邏輯、任何複雜的東西，不會有很多 citizen developer，仍然要軟體工程的 mindset。他說自己夠老，看過 COBOL 本該取代開發、SQL 本該取代、4GL（字幕寫成 GLS）本該取代。沒有發生。這次也一樣。Never 是很長的時間，但以現在的工具、現在的 LLM、現在的做法，可預見的未來不會消失；往前看一到兩年也不會。Citizen developer 只能走到某個程度。主持人說，最後這題是他唯一用 Claude 想出來的問題。

## 新聞裡的取消，以及大腦先燒完

[27:00](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1620s) 聽眾戴上唱反調的帽子。他早上聽 Bloomberg，說一批大公司取消了 Claude Code 的授權，包括 Uber 和 Microsoft。五年前的開發大會上若有人說：你會不知道系統在做什麼、控制變少、隨機長出資料儲存，那聽起來是混亂。這是工程的未來，還是一兩年內會爆掉？他比 2014 年的自駕車：當時覺得六個月就到，可以自己開去機場。邊界情況還在。倫敦的計程車司機可能比那時多。今天能動的自駕系統，仍有人遠端介入，大概只能應付八成的時間。軟體是不是也一樣，最後沒有可靠、可維護、神智正常的東西可做？

[28:34](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1714s) Simon 接 Microsoft：他們從 Claude Code 賺不到錢，正在用力推工程師用 GitHub Copilot，也在把 Claude coworker 重新包裝成 Microsoft Copilot。這則新聞有點怪。Microsoft 仍要員工隨時用 AI，他說是一天 24 小時、一週七天。Uber 他不認為是取消，而是四個月就把該用 12 個月的 AI 預算花完。他同意沒有自駕式的 agent 把全部軟體做完，那是 co-driver。他入行 30 年，現在仍親手做，產能的增加很大。品質在，前提是你做 Harness Engineering；不做，品質就很糟。若你花在打造 harness 上的時間，大約等於花在為功能輸出寫 prompt 的時間，你會得到真正好的東西。他不同意這只是一陣流行。

[30:09](https://www.youtube.com/watch?v=1grkxo4cyKY&t=1809s) 下一題是：團隊變成功之後，最稀缺的是人腦。Peer review 審什麼、什麼 pager 該打到人，怎麼把認知資源導到對的地方。回答說這很大。一邊要運用人腦，一邊要保護它。以前是想一下，然後寫兩天 code，寫 code 相對放鬆。現在是很用力地想，十分鐘它跑完回來，你又得想。壓力和認知負荷很大，沒管好就會燒盡。另一邊，一個人可以產生巨大的 code，常常不再需要一個團隊；沒有團隊，人與人之間的來回也沒了。他沒有清楚的答案。開發者的工作環境會劇烈改變，必須明講。有一個客戶每隔幾週就要讓一個人回家一週，只為了放鬆、減壓。那樣做一個月就無法繼續。Simon 補：有地方在施壓，要同時跑很多 agent、很多任務。聽起來很好，但會很快把人的腦子毀掉。Context switching，而且因為想看結果而工作到很晚。Commit 晚上十點、十一點還在來。停不下來。他把它比成拉霸的變動獎勵，字幕裡說有人談過這個，名字聽成 Jagers。會上癮。
