# Stop Struggling with CUDA: How Ubuntu 26.04 is Fixing AI Development Forever

片長 29 分 57 秒，英文手寫字幕。Jon Seager，Ubuntu 的 VP of Engineering，在 Canonical 五年。主持人 Alan 介紹他。這份筆記依英文原稿整理，專有名詞保持 English。字幕把 Qwen 聽成 Quen，把 Nemotron 聽成 Nemetron，把 LXD / LXC 聽成 LexD / LexC，把 Claude Code 聽成 Claw Code，把 Tailscale 聽成 Tailsgale；下文用校正後的名字。

- 原片：[YouTube](https://www.youtube.com/watch?v=0CYm-KCw7yY)

## 一句話

Jon 不是來宣布 Canonical 轉型成 AI 公司。他說 Ubuntu 已經在這裡 21、22 年，而且現在多數 AI 工作負載跑在它上面。雲端開一台 VM，多半就是它；NVIDIA 的 DGX Spark 只支援被叫做 Ubuntu 的 Ubuntu。26.04 讓你在乾淨系統上直接 `apt install CUDA` 或 `apt install ROCm`。Inference snaps 把矽廠調過的模型裝成一個受confine的套件。Agent 則可以關進每台 Ubuntu 上都有的 LXD，爆炸半徑停在那個盒子裡，而不是整個家目錄。

## 多數 AI 工作負載已經在 Ubuntu 上

[0:01](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1s) 開場他就把轉型這句拿掉。他的近期路線圖裡沒有「變成 AI 公司」。Ubuntu 若接下來三到四年不犯大錯，他猜還能再走 20 年。今天他可以說的是：Ubuntu 支撐今日多數 AI 工作負載。

[1:16](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=76s) 原因有一部分是 agent。你問它怎麼做，它很會說：在 Ubuntu 上，有時是 Ubuntu 或 Debian，打這條指令。他覺得這代表 20 年來大家伸手就拿橘色的 Linux，是以前 Canonical 的策略，再加上不少運氣。開雲端機器時，多數人不在乎是哪種 Linux，實際上常常是他們的。Google Cloud、Amazon、DigitalOcean、字幕裡的 Volta、Hetzner，開一台 VM，機會很大是 Ubuntu。Linux desktop 那一年到了沒有另說，Linux server 這一年他們已經過了很久。這些都不是新事實，也早於他加入 Ubuntu。

[2:18](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=138s) 這個時代少被講的是合作夥伴，因為不華麗，上不了 Reddit 和 Phoronix 的標題；那邊比較愛說他們選 Rust 是選錯。企業 Linux 裡他們算小：大約 1300 人，其中約 1000 是工程師。他五年前加入時全公司 550 人。SUSE 大約是他們五倍，Red Hat 若不算旁邊那個 IBM，大約 25 倍。螢幕上的夥伴沒有全部放得下，他點了 MediaTek，以及字幕聽成 RivOS 的那一個。你去店裡或網路上買電腦、想玩 AI，打開上蓋就要能動。近幾個月 NVIDIA 硬體特別如此。他們也在大幅擴 AMD，跟 Intel 則一直有合作。Qualcomm Dragonwing 這種 edge IoT 平台，發表當天 kernel 就支援，加速器不只 CPU 和 GPU，還有 NPU、TPU，以及他開玩笑說的 star PU。

[3:54](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=234s) NVIDIA 去年下半年推出只做 ARM64 的 AI 工作站 DGX Spark。他們多年來依協議出貨的是 Ubuntu，但名字叫 DGX OS 或某種 NVIDIA OS：Ubuntu 加上一批東西，kernel 設定不同。這次改成出貨 Ubuntu，而且就叫 Ubuntu，也是 DGX Spark 上他們唯一支援的系統。他沒有完整產品路線圖，但願意猜：Grace Blackwell 那條、Dell 在賣、他記得還有 Lenovo、可能有 HP 的其他工作站，跑的都是 Ubuntu，因為開機就能動，驅動、kernel、加速器都在。他覺得這對他們是大事，對 AI 開發也是：在雲上那套 OS 上開發，好處一直都很明顯。

[5:16](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=316s) LTS 兩年一版。他說晚近大約 90% 的使用者跑 LTS：22.04、24.04，四月要出的是 26.04。第一次可以在基礎 Ubuntu 上不加別的指令，`apt install CUDA` 或 `apt install ROCm`，拿到跟這個 Ubuntu 版本、這張 GPU 相符的 ROCm。他自己在一批高階 AMD 機器上吃過這個苦，也聽說 CUDA 一樣痛。雲端那些綠色 GPU 的主人，不會自己花工程時間，把最新 CUDA 做 15 年的安全維護；15 年是他們的承諾。已經會把 CUDA 擰順、會讓 ROCm 配上 PyTorch 的人，他說很好，有想法告訴他。對剛進這行的人，這會變成幾乎開箱就能用。

## 一條 snap，裝上矽廠調過的模型

[6:35](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=395s) 他們還是不把自己放進「AI 公司」的引號裡，但有一個新的、明顯是 AI 的東西。不是拿去賣的產品，是開源、他們做的、你可以直接用。現在對 hobbyist、tinkerer、開發者有意思，他覺得以後能走得更遠。

[7:01](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=421s) Snap 是他們發明的包裝格式，多數人不在乎。它是 confined package。Deb 是 `apt install`，RPM 是 `dnf install`。Snap 比較像 Docker：一個壓縮檔案系統，裡面是應用和全部依賴，而且跑在安全confine裡。他們用 AppArmor，他比成 SELinux。裡面可以有很嚇人的東西，不必擔心它在機器上亂來。他問：這在 AI 裡聽起來熟不熟。

[8:01](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=481s) 所以他們開始發 inference snaps。現在很有趣的是在 Hugging Face 上看排名、算模型塞不塞得進 GPU、要不要 llama.cpp。他說那 90% 的 AI 工程師，若不是現在，就是未來六個月，會變成：把模型給我。聽過 Gemma、Nemotron、Qwen，但不想先拿一個 Hugging Face 的博士。Inference snaps 是給所有人的、高品質、針對矽最佳化的模型，而且是矽廠自己最佳化的。他們跟 AMD、NVIDIA、Intel 以及其他人合作。一開始沒人有興趣，第一個發出之後，大家開始踢門。模型是慢慢加的。

[8:59](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=539s) 任何一台 Ubuntu 上可以 `snap install` Qwen VL、DeepSeek R1、Gemma 3、Nemotron 3 Nano。拿到的是能跑的模型，依你機器上的硬體、由做矽的人調過，他們交付、他們維護。不只模型本體。裸模型下載下來沒什麼好做的。裡面有製造商認為適合那個模型的 inference engine，還有一套 onboarding，可以接到 Ollama 或 Continue。

[9:43](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=583s) 圖上那個橘色大方塊是 SquashFS。共用的 engine manager 知道這台機器是什麼、卡支援哪個 API level。Engine manifest 描述你是 AMD GPU，或是能跑 CUDA 的 NVIDIA GPU。Inference engine 可換，可以是 llama.cpp 或其他，再加上模型 runtime。安裝時 confine 只開剛好夠跟 kernel 說話的洞。結果是裝完就能在終端機裡 `QwenVL chat`。

[10:46](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=646s) 目前四個。終端機聊天是最無趣的用法。每一個都帶 OpenAI API spec 相容的 endpoint，在 localhost 的不同 port，所以可以一起裝，也可以各跑各的 engine。大機器上可以一個跑在 ROCm 的 AMD 卡，一個跑在 CUDA 的 NVIDIA 卡。任何講 OpenAI API spec 的東西都能接。範例都打 localhost，但你可以前面放 Caddy，丟到有 H100 的雲端機器上。他說只要雲上有 Ubuntu，基本上就是所有人，現在就能用。示範那台完全沒有加速，會很慢；比他筆電快一點的機器上，他保證比較好看。

## 把 agent 關進系統容器，修補則做到 15 年

[11:54](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=714s) 另一件他覺得 OS 該管的是 sandboxing agents。Agent 是能力上的一大步：從瀏覽器裡一個機器人，變成一隊能做掉一部分無聊事、也做一部分有趣事的機器人。有些工作他很難想像再回到自己做。Reddit 上的恐怖故事很好笑，直到你想：萬一它刪的是我的家目錄。他沒有遇過那種大失敗。最近比較有趣的一次是 Claude 放出一批平行 agent，在建置過程裡決定從原始碼編出五份 Node.js，雲端機器記憶體耗盡，Tailscale 被 OOM kill，他就連不回去。不是災難性資料遺失，只是煩。

[13:11](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=791s) 很多 agent 的回應是叫你打 slash sandbox，然後就會沒事。也許會。Confine 很難。他們用 snap、AppArmor、VM 和 micro VM 做了很多年。把一大坨 Node.js 丟到別人機器上，再用有一千個例外的 bubble wrap 包起來，不太有用。它擋得住一些失敗，所以多數人 YOLO、危險地跳過檢查，也還沒有史詩級災難，做了不該做的事也能復原。

[13:57](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=837s) 幾乎每台 Ubuntu 開箱就有一批東西讓這件事變簡單。他五年裡做過、還沒開源的產品只有一個，四月會宣布，他覺得會把這件事的門拆掉。它建在今天要講的東西上面。字幕沒有說出產品名字。

[14:14](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=854s) 其中一個是 LXD。他進 Canonical 之前沒聽過，進去半年後想不通為什麼沒人談。LXD 是 LXC 的叢集版。LXC 在 Linux kernel 裡大約十年，做的是 system container：像 Docker，但更像 VM，裡面跑 systemd。比 Docker 重，但沒有自己的 kernel。它也做 VM。API 幾乎一樣，`lxc launch` 和 `lxc launch --vm`，其他旗標相同。若你想在自己和 agent 之間再隔一個 kernel，可以。他依專案在兩者之間切，腳本只差一個旗標。

[15:19](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=919s) 過去幾個月他用 Claude Code 就是這樣。大約六行的腳本：建一個映像已經快取好的 LXD container，把工作目錄 bind mount 進去，掛上 `.claude` 和幾個 dotfile，啟動 Ubuntu 和 Claude Code。有快取的話大約三到四秒。他打一句就得到盒子裡的 Claude Code，只對著這個專案。它不能自己 commit，因為他得點 YubiKey。可以放它去做，一次開五個，CPU 和記憶體這些限制都在，要不要 VM 層也隨你。每台 Ubuntu、以及你已經在用的雲端機器上，裝好就能用。

[16:16](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=976s) Multipass 像他們組合裡的 Docker Desktop。Mac、Windows、Linux 都能裝，有 UI，是最快拿到 Ubuntu 的方式。`multipass launch`，兩到三秒進到 shell。那是一台可拋棄的機器，你或 agent 可以弄髒再丟掉。有不同版本、blueprint、recipe，跑在 QEMU 上。他把它叫做 cloud sandbox。

[17:00](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1020s) 做完之後呢。Agent 認真寫出幾十萬行 TypeScript、Rust 或 Go，怎麼部署，是他們做了大約 20 年的 production Linux 問題。人人知道 Ubuntu，幾乎沒人聽過 Canonical 或其他產品。半自主的東西要跑得快，也要知道它們能動到什麼；丟進 production 之後，即使 AI 熱潮裡那個廠商消失，也要繼續修補 15 年。他懷疑現在被親切談論的一些廠商，五年後不一定還在。

[18:10](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1090s) 他們把這件事叫做 LTS anything。你拿一個 Docker container 來，談好價錢，他們幫你安全維護那個應用和全部依賴，哪怕是幾千個 Python 依賴或幾萬個 Node 依賴，為了 CVE 修 15 年，要錢，底子是 Ubuntu 和他們維持 archive 的工作。自動化那邊，Kubeflow 可以一條指令部署到任何 Kubernetes，EKS、AKS、他們自己的都可以，玩完就拆。MLflow、想要向量資料庫時的 OpenSearch、Postgres 也一樣。他們不推最新最亮的 AI 東西，不做 agent、不做模型、也不訓練。他們把那些東西靠著的部分，做成你不必再擔心的事。

[19:33](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1173s) 示範是慢的。Gemma 3 是 Google 的 snap，Nemotron 主要給 NVIDIA。狀態會告訴你支援什麼。Nemotron 有 CPU engine，在他那台他稱為馬鈴薯的 Framework 筆電上會很慢；換 NVIDIA GPU 就會快，而且會拿適合那張 GPU 的模型大小。Snap 本身裝得快，背景跟他們的 store 交換硬體資訊，再去抓對的模型。他在命令列跟 DeepSeek 打招呼，AMD Framework 上的 token 速率很低。Continue 的 VS Code 擴充設定檔裡，每個模型一個 localhost URL、各自的 port，模型細節從 status CLI 拿。沒在說話時，它基本上不吃資源，待在背景。公司若負擔得起雲上一個很大的 H100，想做私人推論，放一個 snap，前面加 Caddy 或 nginx，就是在你控制的機器上托管模型。

## 問答：別靠運氣，也別以為作業系統只是寫得出來

[22:05](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1325s) 主持人問 Canonical 怎麼靠全部送出去撐了 22 年。字幕沒有收進一段直接回答，接著是觀眾提問。

[22:20](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1340s) 有人問：LLM 到處都在，會不會因為每個模型都說「用 Ubuntu 的做法」，網路上就有更多 code 也用 Ubuntu 的做法，你們慢慢把這件事吃完。他說若運氣好，會。但不能靠運氣。工作的一部分是跟 AI 提供者做交易，讓這件事發生；或繼續在別的地方當預設，讓訓練材料認識 Ubuntu。若不小心，SUSE 或 Red Hat 可以在所有端點放上 `llms.txt`，認真搶。在 Canonical 做事的人很容易為了是哪個發行版激動起來。他知道多數人不在乎，只要一台雲端機器。因為很久以來那台就是 Ubuntu，很多人對 `apt install` 有肌肉記憶。這像行銷團隊為了 SEO 緊張：模型找內容的方式和搜尋不一樣，他們得讓內容在對的地方、對的形式、而且真的相關。引號裡的 AI 公司他們不是，但人人都在用 AI 做東西的時代，他們仍有話要說。定位要誠實對準他們真的做得到、真的加得上的價值。那不會是跟 NVIDIA 比賽訓練模型或做 GPU。字幕接著有一句不完整，他說幾乎每間公司都想談這件事，他們的版本是讓模型繼續告訴人怎麼安裝 ROCm。

[24:37](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1477s) 下一個他稱為有爭議：OpenAI 在規劃和作業系統有關的事。已經有 browser use、computer use，接下來會是 operating system use。飲水機旁邊在聊什麼。他說不太有。他沒有坐在家裡想 OpenAI 明天就會把 Linux 比下去。他有在看。Claude Code 做一個 C compiler 像有趣的科學實驗；它也做過瀏覽器和其他東西。技術和實驗有意思，但做作業系統不只是把作業系統做出來。Ubuntu 裡有趣的那一段是 20 年前做的。後來的成功是磨：修安全漏洞、做可用性、把最新的開源送出去，以及偶爾讓網路燒一下的決定。他們正在做很大的 Rust 轉換，把 core utilities、sudo，以及字幕聽成 time-sinking demon 的 time-sync daemon，換成 Rust。大家說你們在幹嘛。他覺得人繼續用 Ubuntu，就是因為這些。他確定 Claude Code 做得出一個 OS。Anthropic 會不會去維護一個跑在數千萬、甚至數億雲端機器上的作業系統，他不知道，看起來不像他們的商業模式。人還是會要安全維護和穩的 Linux。他目前沒有太緊張。

[26:29](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1589s) 有人用 Ollama 跑模型，問 Ubuntu 這版最佳化有沒有明顯的效能差，並說硬體才是限制。他說一半是選對模型。Hugging Face 上的選擇多到令人不知所措。他們把範圍縮小：例如 DeepSeek R1 這一系，也許十個變體，挑最適合你機器的。適合不只是大小塞得下，還有矽廠某種程度調過。不是每次、每個用途都完美。大概是 90% 的人、90% 的時間會更好。若你在做非常特定、已經優化很深的事，值得自己再調、再設參數、再量化。若你只是想寫 Python，想要一個不放在雲上的模型幫忙，他覺得他們會挺有用。

[27:54](https://www.youtube.com/watch?v=0CYm-KCw7yY&t=1674s) 最後一問字幕沒聽清，他先說還是會遇到那種錯誤。重點是你決定容器能碰到機器的多少。他的東西都在 git 裡，簽 commit 只能點那支小鑰匙。Agent 可以朝 git history 丟 commit，就算他叫 Claude 不要、它還是做了，也沒關係，因為它推不上去、蓋不掉他已有的。Agent 若真的想刪你正在用的工作目錄，它刪得掉。問題是爆炸半徑要多大。這是在限制損害。他也接到 context engineering：Claude Code 會問能不能讀檔案系統上的其他地方，然後陷進跟你無關的 codebase。把它放進一個只能看你要它看的盒子，效率上也比較好。他覺得兩邊都賺。
