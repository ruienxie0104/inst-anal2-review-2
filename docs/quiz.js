// quiz.js — Quiz engine with 65+ questions for Ch20 MS & Ch22-25 Electrochem

const QUESTION_BANK = [
  // ===== Chapter 20 — Mass Spectrometry =====
  // -- Ion Sources --
  {id:1, ch:20, diff:"basic", type:"mc", q:"EI（電子游離）使用多少能量的電子束撞擊樣品？", opts:["7 eV","70 eV","700 eV","0.7 eV"], ans:1, exp:"EI 使用 70 eV 電子束，遠大於大多數有機分子的游離能（8-15 eV），所以是硬離子源。"},
  {id:2, ch:20, diff:"basic", type:"mc", q:"哪一種離子源最適合分析大分子蛋白質的分子量？", opts:["EI","CI","ESI","FAB"], ans:2, exp:"ESI 產生多電荷離子，讓大分子的 m/z 落在儀器範圍內，是分析大分子蛋白質的首選。"},
  {id:3, ch:20, diff:"basic", type:"mc", q:"硬離子源的特點是：", opts:["碎片少、分子離子峰強","碎片多、分子離子峰弱","碎片多、分子離子峰強","碎片少、結構資訊豐富"], ans:1, exp:"硬離子源能量大，分子被打得很碎，碎片多提供結構資訊，但分子離子峰可能很弱。口訣：硬碎結構清，軟整分子明。"},
  {id:4, ch:20, diff:"basic", type:"mc", q:"CI（化學游離）的分子離子峰出現在什麼位置？", opts:["M","M+1","M-1","M+2"], ans:1, exp:"CI 主要透過質子轉移產生 [M+H]⁺，所以分子離子峰出現在 M+1。"},
  {id:5, ch:20, diff:"basic", type:"mc", q:"MALDI 的基質必須滿足哪三個條件？", opts:["溶、吸、酸","大、重、穩","純、乾、冷","小、輕、揮發"], ans:0, exp:"MALDI 基質三要件：1.需與樣品互溶 2.能吸收雷射能量 3.通常具有酸性質子。口訣：溶、吸、酸。"},
  {id:6, ch:20, diff:"application", type:"mc", q:"不需要前處理就能分析固體表面物質的離子源是？", opts:["EI","MALDI","DESI","CI"], ans:2, exp:"DESI（脫附電灑游離）直接把帶電液滴噴向固體表面，不需要任何前處理。"},
  {id:7, ch:20, diff:"application", type:"mc", q:"哪一種離子源最適合與 LC 串聯使用？", opts:["EI","ESI","FAB","MALDI"], ans:1, exp:"ESI 可以直接接收 LC 的液體流出物，是最常見的 LC-MS 離子源。"},
  {id:8, ch:20, diff:"basic", type:"mc", q:"質譜儀必須在什麼環境下運作？", opts:["高溫高壓","高真空","低溫低壓","常壓空氣"], ans:1, exp:"質譜儀必須在高真空下運作，避免離子跟空氣分子碰撞，確保離子能順利到達偵測器。"},
  {id:9, ch:20, diff:"basic", type:"mc", q:"發明第一台質譜儀並獲得諾貝爾獎的人是：", opts:["Dalton","Cannizzaro","Aston","Fenn"], ans:2, exp:"Aston 在 1919 年發明第一台質譜儀，1922 年獲得諾貝爾化學獎。"},
  {id:10, ch:20, diff:"basic", type:"mc", q:"田中耕一因為哪項技術獲得諾貝爾獎？", opts:["EI","ESI","MALDI","DESI"], ans:2, exp:"田中耕一因為發展 MALDI 相關技術，獲得 2002 年諾貝爾化學獎。Fenn 同年因 ESI 得獎。"},
  // -- Mass Analyzers --
  {id:11, ch:20, diff:"basic", type:"mc", q:"四極柱質量分析器的原理是：", opts:["磁場偏轉","飛行時間差異","DC+RF 電壓篩選","離子阱囚禁"], ans:2, exp:"四極柱施加 DC+RF 混合電壓，只有特定 m/z 的離子能穩定通過，像質量濾波器。"},
  {id:12, ch:20, diff:"application", type:"mc", q:"四極柱中，m/z 太小的離子會：", opts:["穩定通過","震盪不穩定撞到極柱","被推向外側","反彈回去"], ans:1, exp:"m/z 太小 → 交流電（RF）影響大 → 震盪幅度越來越大 → 不穩定 → 撞到極柱被消滅。"},
  {id:13, ch:20, diff:"application", type:"mc", q:"四極柱中，m/z 太大的離子會：", opts:["穩定通過","震盪不穩定撞到極柱","被 DC 推向外側","反彈回去"], ans:2, exp:"m/z 太大 → DC 把離子推向外側 → RF 推不回來 → 撞到極柱被消滅。"},
  {id:14, ch:20, diff:"basic", type:"mc", q:"哪一種質量分析器可以進行 MSⁿ（多次碎裂）？", opts:["磁扇區","四極柱","離子阱","TOF"], ans:2, exp:"離子阱可以反覆捕捉和碎裂離子，進行 MSⁿ 分析，這是它最大的特色。三重四極柱只能做 MS²。"},
  {id:15, ch:20, diff:"basic", type:"mc", q:"TOF 分析器的原理是：", opts:["磁場偏轉","DC+RF 電壓","射頻囚禁","輕的離子飛得快，重的飛得慢"], ans:3, exp:"TOF 測量離子到達偵測器的飛行時間，輕的離子飛得快先到，重的飛得慢後到。t ∝ √(m/z)。"},
  {id:16, ch:20, diff:"basic", type:"mc", q:"雙焦點質譜儀比單焦點多了什麼？", opts:["四極柱","離子阱","ESA（靜電分析器）","TOF 管路"], ans:2, exp:"雙焦點 = ESA（靜電分析器）+ 磁場 + 狹縫。ESA 做能量聚焦，磁場做方向聚焦，雙重聚焦提升解析度。"},
  // -- Calculations --
  {id:17, ch:20, diff:"calculation", type:"mc", q:"離子（z=1）被 1000 V 加速後的動能為：", opts:["1.6×10⁻¹⁹ J","1.6×10⁻¹⁶ J","1.6×10⁻¹³ J","1.6×10⁻¹⁰ J"], ans:1, exp:"KE = zeV = 1 × 1.6×10⁻¹⁹ × 10³ = 1.6×10⁻¹⁶ J"},
  {id:18, ch:20, diff:"calculation", type:"mc", q:"區分 CO（27.9949）和 N₂（28.0061），需要的解析度 R 為？", opts:["約 2500","約 250","約 25000","約 25"], ans:0, exp:"R = m̄/Δm = (27.9949+28.0061)/2 / (28.0061-27.9949) = 28.0005/0.0112 ≈ 2500"},
  {id:19, ch:20, diff:"calculation", type:"mc", q:"含一個氯原子的化合物，M 和 M+2 峰的比例約為：", opts:["1:1","3:1","9:6","1:3"], ans:1, exp:"³⁵Cl:³⁷Cl = 75.77%:24.23% ≈ 3:1，所以 M:M+2 ≈ 3:1。"},
  {id:20, ch:20, diff:"basic", type:"mc", q:"含一個溴原子的化合物，M 和 M+2 峰的比例約為：", opts:["1:1","3:1","1:3","9:6"], ans:0, exp:"⁷⁹Br:⁸¹Br ≈ 50.69%:49.31% ≈ 1:1。"},
  {id:21, ch:20, diff:"basic", type:"mc", q:"含兩個氯原子的化合物，M:M+2:M+4 的比例為：", opts:["3:1:0","9:6:1","1:2:1","9:3:1"], ans:1, exp:"雙氯：(3/4)² : 2×(3/4)(1/4) : (1/4)² = 9:6:1。這是二項式展開的結果。"},
  // -- Fragment patterns --
  {id:22, ch:20, diff:"basic", type:"mc", q:"醛類在 EI 質譜中，m/z = 29 的峰必定是什麼？", opts:["分子離子峰","基峰","M+2 峰","同位素峰"], ans:1, exp:"醛類的 CHO⁺（m/z=29）必為基峰，這是醛類的特徵標誌。"},
  {id:23, ch:20, diff:"basic", type:"mc", q:"甲基酮在 EI 質譜中，基峰通常出現在 m/z = ？", opts:["29","31","43","91"], ans:2, exp:"甲基酮的 CH₃CO⁺（乙醯基離子）出現在 m/z=43，是甲基酮的特徵基峰。"},
  {id:24, ch:20, diff:"basic", type:"mc", q:"醇類的特徵碎片 m/z = ？", opts:["29","31","43","91"], ans:1, exp:"醇類 α 斷裂產生 CH₂OH⁺，m/z=31，是醇的標誌碎片。"},
  {id:25, ch:20, diff:"basic", type:"mc", q:"芳香族化合物的特徵碎片 m/z = 91 是什麼離子？", opts:["苯基離子","草鎖離子（Tropylium）","苄基離子","苯乙烯離子"], ans:1, exp:"m/z=91 是 C₇H₇⁺ 草鎖離子（Tropylium Ion），七元環結構非常穩定。"},
  {id:26, ch:20, diff:"application", type:"mc", q:"長鏈醇在 EI 質譜中最顯著的碎片是什麼？", opts:["[M-1]⁺（脫氫）","[M-18]⁺（脫水）","[M-29]⁺","[M-43]⁺"], ans:1, exp:"長鏈醇主要碎片是脫水 [M-18]⁺。口訣：短醇脫氫(-1)，長醇脫水(-18)。"},
  // -- MS/MS --
  {id:27, ch:20, diff:"basic", type:"mc", q:"MS/MS 的目的是解決什麼問題？", opts:["靈敏度不夠","同分異構物","分子量太大","解析度太低"], ans:1, exp:"MS/MS 主要解決同分異構物問題。相同分子式但結構不同的化合物，碎片模式不同。"},
  {id:28, ch:20, diff:"basic", type:"mc", q:"三重四極柱的 CID 流程是：", opts:["Q1 選 → Q2 析 → Q3 撞","Q1 撞 → Q2 選 → Q3 析","Q1 選 → Q2 撞 → Q3 析","Q1 析 → Q2 選 → Q3 撞"], ans:2, exp:"CID 流程：Q1（選出母離子）→ Q2（碰撞室撞碎）→ Q3（分析子離子）。"},
  {id:29, ch:20, diff:"application", type:"mc", q:"想定量某個特定反應轉換，最適合的掃描模式是？", opts:["Product Ion Scan","Precursor Ion Scan","Neutral Loss Scan","SRM/MRM"], ans:3, exp:"SRM/MRM 固定母離子和子離子的 m/z 對，只監測特定轉換，最靈敏最專一，是定量首選。"},
  {id:30, ch:20, diff:"application", type:"mc", q:"想知道哪些化合物會產生 m/z=91 的碎片，應使用什麼掃描？", opts:["Product Ion Scan","Precursor Ion Scan","Neutral Loss Scan","SRM"], ans:1, exp:"Precursor Ion Scan 固定子離子 m/z，掃描所有可能產生這個碎片的母離子。"},
  // -- Positive/Negative ion mode --
  {id:31, ch:20, diff:"basic", type:"mc", q:"質譜的正離子模式和負離子模式可以同時使用嗎？", opts:["可以，同時偵測","不行，一次只能選一種","取決於儀器","取決於樣品"], ans:1, exp:"質譜一次分析只能選一種模式（正離子或負離子），不能同時偵測。"},
  {id:32, ch:20, diff:"basic", type:"mc", q:"質譜圖中訊號最強的峰稱為什麼？", opts:["分子離子峰","基峰","同位素峰","碎片峰"], ans:1, exp:"基峰（Base Peak）是質譜中訊號最強的峰，設為 100%。基峰不一定等於分子離子峰。"},
  // ===== Chapter 22-25 — Electroanalytical Chemistry =====
  // -- Redox basics --
  {id:33, ch:22, diff:"basic", type:"mc", q:"LEO says GER 代表什麼？", opts:["Lose Electrons = Oxidation, Gain Electrons = Reduction","Large Electrons = Oxidation, Gain Energy = Reduction","Loss Equals Oxidation, Gain Equals Reduction","Low Energy = Oxidation, Gain Energy = Reduction"], ans:0, exp:"LEO says GER：Lose Electrons = Oxidation（氧化），Gain Electrons = Reduction（還原）。"},
  {id:34, ch:22, diff:"basic", type:"mc", q:"在電化學電池中，陰極（Cathode）發生的反應是：", opts:["氧化反應","還原反應","中和反應","沉澱反應"], ans:1, exp:"陰極 Cathode 發生還原反應（得到電子）。口訣：Cat 還 An 氧。"},
  {id:35, ch:22, diff:"basic", type:"mc", q:"電池表示法中，左邊是什麼極？", opts:["陰極（還原端）","陽極（氧化端）","參考極","工作極"], ans:1, exp:"電池表示法左邊是陽極（Anode，氧化端），右邊是陰極（Cathode，還原端）。口訣：左氧右還。"},
  {id:36, ch:22, diff:"basic", type:"mc", q:"Plus Right Rule 的意思是：", opts:["正極接左邊","正極接右邊","右邊是陽極","左邊是陰極"], ans:1, exp:"電錶的正極永遠接右邊的半電池，E_cell = E_right − E_left。"},
  // -- Standard electrode potential --
  {id:37, ch:22, diff:"basic", type:"mc", q:"SHE（標準氫電極）的 E° 在所有溫度下都是：", opts:["0.000 V","0.244 V","0.197 V","1.000 V"], ans:0, exp:"SHE 的 E° = 0.000 V 是定義值，在所有溫度下都是 0。"},
  {id:38, ch:22, diff:"basic", type:"mc", q:"SCE（飽和甘汞電極）的 E° 是多少？", opts:["0.000 V","+0.244 V","+0.197 V","−0.244 V"], ans:1, exp:"SCE 的 E° = +0.244 V（相對 SHE）。口訣：SCE = 0.244 = 穩定但有毒。"},
  {id:39, ch:22, diff:"basic", type:"mc", q:"Ag/AgCl 電極的 E° 是多少？", opts:["0.000 V","+0.244 V","+0.197 V","−0.197 V"], ans:2, exp:"Ag/AgCl 的 E° = +0.197 V。口訣：Ag/AgCl = 0.197 = 小巧穩定但要補水。"},
  {id:40, ch:22, diff:"basic", type:"mc", q:"標準電極電位五大重點中，「與反應莫耳數無關」是指：", opts:["E° 會隨莫耳數改變","E° 不因計量係數改變","ΔG 與莫耳數無關","濃度與莫耳數無關"], ans:1, exp:"E° 是強度性質，跟反應寫幾莫耳無關。把 Ag⁺ + e⁻ → Ag 乘以 2，E° 還是一樣。但 ΔG = −nFE 會變。"},
  {id:41, ch:22, diff:"basic", type:"mc", q:"E° 為正值的半反應代表：", opts:["氧化反應自發","還原反應自發","反應不自發","無法判斷"], ans:1, exp:"E° > 0 表示還原反應自發進行；E° < 0 表示還原反應非自發（氧化才自發）。"},
  // -- Nernst equation --
  {id:42, ch:22, diff:"calculation", type:"mc", q:"25°C Nernst 方程式中，RT/F × ln 轉換為 log 的係數是：", opts:["0.0592","0.0296","0.0257","0.0592/n"], ans:0, exp:"25°C 時，RT/F × 2.303 = 0.0592 V。這是考試必背數字。完整公式：E = E° − (0.0592/n) × log(Q)。"},
  {id:43, ch:22, diff:"calculation", type:"mc", q:"Cd²⁺ 濃度為 0.0150 M 時，Cd²⁺ + 2e⁻ ⇌ Cd 的電極電位為？（E° = −0.403 V）", opts:["−0.403 V","−0.457 V","−0.350 V","−0.500 V"], ans:1, exp:"E = E° + (0.0592/2) × log[Cd²⁺] = −0.403 + 0.0296 × log(0.0150) = −0.403 + 0.0296 × (−1.824) = −0.403 − 0.054 = −0.457 V"},
  {id:44, ch:22, diff:"application", type:"mc", q:"在 Nernst 方程式中，純固體的濃度應該寫成：", opts:["0","1","100","不用寫"], ans:1, exp:"純固體和純液體的活度 = 1，在 Q 中不寫或寫成 1。例如 Zn 的活度 = 1。"},
  {id:45, ch:22, diff:"calculation", type:"mc", q:"Ag/AgCl 電極在飽和 KCl（[Cl⁻]=1M）中的電位約為？（E°_Ag = 0.799V, Ksp = 1.82×10⁻¹⁰）", opts:["0.799 V","0.222 V","0.197 V","0.244 V"], ans:1, exp:"[Ag⁺] = Ksp/[Cl⁻] = 1.82×10⁻¹⁰。E = 0.799 + 0.0592 × log(1.82×10⁻¹⁰) = 0.799 − 0.577 = 0.222 V。實際常用值 0.197 V 是考慮活度係數。"},
  // -- Three-electrode system --
  {id:46, ch:22, diff:"basic", type:"mc", q:"三電極系統中，工作電極的功能是：", opts:["校正電位","導通迴路","量測電流（發生待測反應）","提供參考電位"], ans:2, exp:"工作電極 = 發生待測反應的地方 = 量測電流。口訣：工作跑、輔助導、參考定。"},
  {id:47, ch:22, diff:"basic", type:"mc", q:"三電極系統中，參考電極的功能是：", opts:["量測電流","導通迴路","提供穩定電位基準","發生反應"], ans:2, exp:"參考電極提供穩定的電位基準，幾乎不通電流。口訣：工作跑、輔助導、參考定。"},
  {id:48, ch:22, diff:"basic", type:"mc", q:"為什麼需要三電極系統而不是兩電極？", opts:["三電極比較便宜","參考電極同時量電流和電位會互相干擾","兩電極不夠靈敏","三電極可以同時做三個實驗"], ans:1, exp:"兩電極系統中，參考電極同時要通電流和提供電位基準，電流通過會影響電位。三電極把「通電流」和「量電位」分開。"},
  {id:49, ch:22, diff:"application", type:"mc", q:"SCE 參考電極的缺點是什麼？", opts:["不穩定","電位不準確","含汞有環境毒性","體積太小"], ans:2, exp:"SCE 含汞，有環境毒性問題。現在很多實驗室改用 Ag/AgCl 電極。"},
  // -- Voltammetry --
  {id:50, ch:22, diff:"basic", type:"mc", q:"伏安法（Voltammetry）的核心原理是：", opts:["固定電位量測電流","施加時變電位量測電流","量測電阻變化","量測電壓變化"], ans:1, exp:"伏安法 = 施加時變電位（E = f(t)），同時量測電流。口訣：電壓跑 + 看電流。"},
  {id:51, ch:22, diff:"basic", type:"mc", q:"LSV 的峰電流可以用來做什麼？", opts:["定性分析（判斷是什麼物質）","定量分析（判斷濃度多少）","判斷可逆性","計算分子量"], ans:1, exp:"峰電流 i_p 與濃度成正比 → 定量分析。峰電位 E_p → 定性分析。"},
  {id:52, ch:22, diff:"basic", type:"mc", q:"CV（循環伏安法）的掃描方式是：", opts:["線性掃描到結束","三角波（先正掃再反掃）","脈衝掃描","方波掃描"], ans:1, exp:"CV 用三角波掃描：先往正方向（氧化方向）掃到轉折電位，再往負方向（還原方向）掃回來。"},
  {id:53, ch:22, diff:"application", type:"mc", q:"可逆 CV 圖的特徵是：", opts:["只有一個方向的峰","峰分離很大","對稱雙峰，ΔE_p ≈ 59/n mV","只有氧化峰"], ans:2, exp:"可逆反應的 CV 圖有對稱的氧化還原峰對，且 ΔE_p ≈ 59/n mV（25°C）。E° = (E_氧化峰 + E_還原峰)/2。"},
  {id:54, ch:22, diff:"calculation", type:"mc", q:"某可逆反應的氧化峰在 +0.35 V，還原峰在 +0.23 V，其 E° 為？", opts:["+0.35 V","+0.23 V","+0.29 V","+0.12 V"], ans:2, exp:"E° = (E_氧化峰 + E_還原峰)/2 = (0.35 + 0.23)/2 = 0.29 V。這個公式只對可逆反應成立。"},
  {id:55, ch:22, diff:"basic", type:"mc", q:"DPV 和 SWV 比一般 CV 的優勢是什麼？", opts:["掃描更快","訊雜比更高","解析度更高","掃描範圍更大"], ans:1, exp:"DPV 和 SWV 透過微分或方波技術消除充電電流，訊雜比更高，適合微量分析。"},
  {id:56, ch:22, diff:"basic", type:"mc", q:"定電位安培法的原理是：", opts:["掃描電位量測電流","固定電位量測電流隨時間變化","量測電位隨時間變化","量測阻抗變化"], ans:1, exp:"定電位安培法 = 固定一個電位，量測電流隨時間的變化（i-t curve）。"},
  {id:57, ch:22, diff:"application", type:"mc", q:"在定電位安培法中，施加電位 −0.5 V 可以偵測到：", opts:["只有 Cu","Cu 和 Pb","Cu、Pb 和 Cd","所有金屬"], ans:1, exp:"電位越負，能偵測的物質越多。−0.5 V 時 Cu 和 Pb 都會被偵測到。"},
  // -- Randles-Sevcik --
  {id:58, ch:22, diff:"basic", type:"mc", q:"Randles-Ševčík 方程式中，峰電流和哪些量成正比？", opts:["只和濃度成正比","和濃度及掃描速率平方根成正比","和濃度及掃描速率成正比","和濃度成正比，和掃描速率成反比"], ans:1, exp:"i_p ∝ C × v^(1/2)，峰電流和濃度成正比（定量基礎），和掃描速率的平方根成正比。"},
  // -- Cross-chapter --
  {id:59, ch:20, diff:"application", type:"mc", q:"以下哪一種離子源產生 [M+H]⁺ 而非 M⁺•？", opts:["EI","CI","FAB","以上都會產生 M⁺•"], ans:1, exp:"CI（化學游離）透過質子轉移產生 [M+H]⁺，分子離子峰在 M+1。EI 產生 M⁺•。"},
  {id:60, ch:20, diff:"application", type:"mc", q:"質譜中看到 M 和 M+2 峰比例約 1:1，最可能含什麼元素？", opts:["Cl","Br","S","N"], ans:1, exp:"Br 的同位素 ⁷⁹Br:⁸¹Br ≈ 1:1，所以 M:M+2 ≈ 1:1 表示含一個 Br。"},
  {id:61, ch:20, diff:"application", type:"mc", q:"以下哪一種質量分析器質量範圍最大（理論上無上限）？", opts:["磁扇區","四極柱","離子阱","TOF"], ans:3, exp:"TOF 的質量範圍理論上無上限，因為只是測量飛行時間。四極柱和離子阱的質量範圍較小。"},
  {id:62, ch:22, diff:"application", type:"mc", q:"如果 E°_cell > 0，代表什麼？", opts:["反應非自發","反應自發進行","需要外加電壓","無法判斷"], ans:1, exp:"E°_cell > 0 代表反應自發進行（Gibbs 自由能 ΔG < 0）。E°_cell < 0 代表非自發。"},
  {id:63, ch:22, diff:"application", type:"mc", q:"Nernst 方程式中，0.0592 這個常數在什麼溫度下適用？", opts:["0°C","25°C","37°C","100°C"], ans:1, exp:"0.0592 = (RT/F) × 2.303 是在 25°C（298 K）時的值。不同溫度要用不同的常數。"},
  {id:64, ch:22, diff:"calculation", type:"mc", q:"電池 Cu | Cu²⁺(0.02M) || Ag⁺(0.02M) | Ag 的 E_cell 為？（E°_Ag = 0.799V, E°_Cu = 0.337V）", opts:["+0.462 V","−0.462 V","+0.340 V","−0.340 V"], ans:0, exp:"E_cell = E_right − E_left = E°_Ag − E°_Cu = 0.799 − 0.337 = 0.462 V（標準狀態）。非標準狀態需用 Nernst 修正。"},
  {id:65, ch:20, diff:"application", type:"mc", q:"ESI 的特色是產生多電荷離子，這有什麼好處？", opts:["碎片更多結構資訊更豐富","大分子的 m/z 能落在儀器範圍內","解析度更高","掃描速度更快"], ans:1, exp:"ESI 讓大分子帶多個電荷，m/z = (M+nH)/n，即使分子量很大，m/z 仍在儀器範圍內。這是分析蛋白質的關鍵。"},
  // -- Additional questions to reach 70+ --
  {id:66, ch:20, diff:"basic", type:"mc", q:"質譜儀的四大組成依序是？", opts:["偵測器→質量分析器→離子源→輸出","離子源→質量分析器→偵測器→輸出","質量分析器→離子源→偵測器→輸出","輸出→偵測器→質量分析器→離子源"], ans:1, exp:"質譜儀流程：離子源→質量分析器→偵測器→輸出。口訣：離→分→測→出。"},
  {id:67, ch:20, diff:"application", type:"mc", q:"Fenn 因為發展哪種離子源獲得 2002 年諾貝爾化學獎？", opts:["MALDI","ESI","FAB","DESI"], ans:1, exp:"Fenn 因為發展 ESI（電灑游離）獲得 2002 年諾貝爾化學獎，與田中耕一（MALDI）同一年。"},
  {id:68, ch:22, diff:"application", type:"mc", q:"在 CV 實驗中，最常用的標準品是什麼？", opts:["抗壞血酸","鐵氰化鉀 [Fe(CN)₆]³⁻/⁴⁻","普魯士藍","多巴胺"], ans:1, exp:"鐵氰化鉀 [Fe(CN)₆]³⁻/⁴⁻ 是 CV 實驗最常用的標準品，可逆性好、峰形漂亮。"},
  {id:69, ch:22, diff:"application", type:"mc", q:"CV 圖中，如果只看到一個方向的峰（只有氧化峰沒有還原峰），這代表什麼？", opts:["可逆反應","準可逆反應","不可逆反應","儀器故障"], ans:2, exp:"不可逆反應只有一個方向的峰，因為反應太慢，反向掃描時來不及完成逆反應。"},
  {id:70, ch:22, diff:"application", type:"mc", q:"在 Ag/AgCl 參考電極中，KCl 溶液的作用是什麼？", opts:["提供 Cl⁻ 維持 AgCl 沉澱平衡","增加導電度","冷卻電極","防止氧化"], ans:0, exp:"飽和 KCl 提供 Cl⁻，維持 AgCl 的沉澱平衡，使 Ag⁺ 濃度固定，從而維持穩定的電極電位。"},
  // -- Ordering questions --
  {id:71, ch:20, diff:"application", type:"ordering", q:"請依離子源的「硬」到「軟」排列：EI、CI、ESI、MALDI", ans:["EI","CI","MALDI","ESI"], exp:"硬度排序：EI（70eV最硬）> CI（間接游離）> MALDI（基質緩衝）> ESI（最溫和）。FAB 介於 CI 和 MALDI 之間。"},
  {id:72, ch:20, diff:"application", type:"ordering", q:"請依質量分析器質量範圍由小到大排列：離子阱、四極柱、磁扇區、TOF", ans:["離子阱","四極柱","磁扇區","TOF"], exp:"質量範圍：離子阱最小 < 四極柱（~4000）< 磁扇區 < TOF（理論無上限）。"},
  {id:73, ch:22, diff:"application", type:"ordering", q:"在 CZE 中（正常極性），排列出峰順序（先→後）：Na⁺、Cl⁻、中性分子苯", ans:["Na⁺","苯","Cl⁻"], exp:"陽離子（電滲流+電泳同向）最快 → 中性分子（僅電滲流）→ 陰離子（電滲流-電泳反向）最慢。"},
  {id:74, ch:20, diff:"calculation", type:"mc", q:"某磁扇區質譜儀，B=0.5T, r=0.1m, 離子 z=1, V=5000V，則 m/z 為？（e=1.6×10⁻¹⁹C）", opts:["約 50","約 100","約 200","約 400"], ans:0, exp:"m/z = B²r²e/(2V) = (0.5)²(0.1)²(1.6×10⁻¹⁹)/(2×5000) = 0.25×0.01×1.6×10⁻¹⁹/10000 ≈ 約50 amu。需要換算單位。"},
  {id:75, ch:22, diff:"application", type:"mc", q:"以下哪個不是伏安法的方法？", opts:["LSV","CV","DPV","定電位安培法"], ans:3, exp:"定電位安培法是固定電位量測電流，不是伏安法（施加時變電位）。LSV、CV、DPV 都是伏安法的變形。"},
];

// ===== Quiz State =====
let quizState = {
  active: false,
  mode: null,
  questions: [],
  answers: {},
  currentQ: 0,
  timer: null,
  timeLeft: 0,
  submitted: false
};

// ===== Quiz Engine =====
function startQuiz(mode) {
  let pool;
  let count;
  let timeLimit;

  switch(mode) {
    case 'full':
      pool = [...QUESTION_BANK];
      count = 40;
      timeLimit = 7200;
      break;
    case 'quick':
      pool = [...QUESTION_BANK];
      count = 15;
      timeLimit = 1200;
      break;
    case 'ch20':
      pool = QUESTION_BANK.filter(q => q.ch === 20);
      count = Math.min(pool.length, 20);
      timeLimit = 3600;
      break;
    case 'ch22':
      pool = QUESTION_BANK.filter(q => q.ch === 22);
      count = Math.min(pool.length, 20);
      timeLimit = 3600;
      break;
    case 'review':
      pool = [...QUESTION_BANK];
      count = pool.length;
      timeLimit = 0;
      break;
    default:
      pool = [...QUESTION_BANK];
      count = 20;
      timeLimit = 3600;
  }

  pool.sort(() => Math.random() - 0.5);
  quizState = {
    active: true,
    mode,
    questions: pool.slice(0, count),
    answers: {},
    currentQ: 0,
    timer: null,
    timeLeft: timeLimit,
    submitted: false
  };

  renderQuizUI();
  if (timeLimit > 0) startTimer();
}

function startTimer() {
  clearInterval(quizState.timer);
  quizState.timer = setInterval(() => {
    quizState.timeLeft--;
    updateTimerDisplay();
    if (quizState.timeLeft <= 0) {
      clearInterval(quizState.timer);
      submitQuiz();
    }
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(quizState.timeLeft / 60);
  const secs = quizState.timeLeft % 60;
  const display = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
  const el = document.getElementById('timerDisplay');
  const mEl = document.getElementById('mobileTimer');
  if (el) el.textContent = display;
  if (mEl) { mEl.textContent = display; mEl.style.display = 'inline'; }
  if (quizState.timeLeft <= 300) {
    if (el) el.style.color = '#ef4444';
    if (mEl) mEl.style.color = '#ef4444';
  }
}

function renderQuizUI() {
  const container = document.getElementById('quizContainer');
  if (!quizState.active) {
    renderQuizMenu(container);
    return;
  }

  const q = quizState.questions[quizState.currentQ];
  const total = quizState.questions.length;
  const answered = Object.keys(quizState.answers).length;
  const progress = Math.round((answered / total) * 100);

  let html = '';
  html += `<div class="quiz-header">
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
    <div class="quiz-info">
      <span>第 ${quizState.currentQ + 1} 題 / 共 ${total} 題</span>
      <span id="timerDisplay" class="quiz-timer">${quizState.timeLeft > 0 ? formatTime(quizState.timeLeft) : '不限時'}</span>
    </div>
  </div>`;

  html += `<div class="quiz-nav-grid">`;
  for (let i = 0; i < total; i++) {
    const isAnswered = quizState.answers[i] !== undefined;
    const isCurrent = i === quizState.currentQ;
    let cls = 'quiz-nav-btn';
    if (isCurrent) cls += ' current';
    else if (isAnswered) cls += ' answered';
    html += `<button class="${cls}" onclick="goToQuestion(${i})">${i+1}</button>`;
  }
  html += `</div>`;

  html += `<div class="quiz-question-card">`;
  html += `<div class="quiz-meta">
    <span class="quiz-ch-tag ch${q.ch}">Ch${q.ch}${q.ch===20?' MS':' Electrochem'}</span>
    <span class="quiz-diff-tag ${q.diff}">${diffLabel(q.diff)}</span>
    <span class="quiz-type-tag">${typeLabel(q.type)}</span>
  </div>`;

  html += `<h3 class="quiz-question-text">${quizState.currentQ + 1}. ${q.q}</h3>`;

  if (q.type === 'mc') {
    html += `<div class="quiz-options">`;
    q.opts.forEach((opt, i) => {
      const selected = quizState.answers[quizState.currentQ] === i;
      html += `<label class="quiz-option ${selected ? 'selected' : ''}" onclick="selectAnswer(${i})">
        <span class="quiz-option-letter">${String.fromCharCode(65+i)}</span>
        <span class="quiz-option-text">${opt}</span>
      </label>`;
    });
    html += `</div>`;
  } else if (q.type === 'ordering') {
    html += `<div class="quiz-ordering-hint">請依序點擊選項排列順序（先→後）</div>`;
    const currentOrder = quizState.answers[quizState.currentQ] || [];
    const remaining = q.ans.filter(a => !currentOrder.includes(a));
    html += `<div class="quiz-ordered-items">`;
    currentOrder.forEach((item, i) => {
      html += `<div class="quiz-ordered-item">${i+1}. ${item} <button class="quiz-remove-btn" onclick="removeOrderItem(${i})">×</button></div>`;
    });
    html += `</div>`;
    html += `<div class="quiz-order-options">`;
    remaining.forEach(item => {
      html += `<button class="quiz-order-btn" onclick="addOrderItem('${item.replace(/'/g,"\\'")}')">${item}</button>`;
    });
    html += `</div>`;
    if (currentOrder.length > 0) {
      html += `<button class="quiz-clear-order-btn" onclick="clearOrder()">清除重排</button>`;
    }
  }

  html += `</div>`;

  html += `<div class="quiz-actions">`;
  if (quizState.currentQ > 0) {
    html += `<button class="quiz-btn secondary" onclick="goToQuestion(${quizState.currentQ - 1})">← 上一題</button>`;
  }
  if (quizState.currentQ < total - 1) {
    html += `<button class="quiz-btn primary" onclick="goToQuestion(${quizState.currentQ + 1})">下一題 →</button>`;
  }
  html += `<button class="quiz-btn submit" onclick="confirmSubmit()">交卷</button>`;
  html += `</div>`;

  container.innerHTML = html;
}

function renderQuizMenu(container) {
  const total = QUESTION_BANK.length;
  const ch20 = QUESTION_BANK.filter(q => q.ch === 20).length;
  const ch22 = QUESTION_BANK.filter(q => q.ch === 22).length;

  container.innerHTML = `
    <div class="quiz-menu">
      <h2>📝 選擇測驗模式</h2>
      <p class="quiz-subtitle">題庫共 ${total} 題（Ch20: ${ch20} 題 / Ch22-25: ${ch22} 題）</p>

      <div class="quiz-mode-grid">
        <button class="quiz-mode-card" onclick="startQuiz('full')">
          <div class="quiz-mode-icon">📋</div>
          <div class="quiz-mode-title">完整模擬考</div>
          <div class="quiz-mode-desc">40 題 / 120 分鐘<br>Ch20 + Ch22-25 混合</div>
        </button>

        <button class="quiz-mode-card" onclick="startQuiz('quick')">
          <div class="quiz-mode-icon">⚡</div>
          <div class="quiz-mode-title">快速測驗</div>
          <div class="quiz-mode-desc">15 題 / 20 分鐘<br>隨機出題</div>
        </button>

        <button class="quiz-mode-card" onclick="startQuiz('ch20')">
          <div class="quiz-mode-icon">🔬</div>
          <div class="quiz-mode-title">Ch20 質譜法</div>
          <div class="quiz-mode-desc">${Math.min(ch20,20)} 題 / 60 分鐘<br>僅 Chapter 20</div>
        </button>

        <button class="quiz-mode-card" onclick="startQuiz('ch22')">
          <div class="quiz-mode-icon">⚡</div>
          <div class="quiz-mode-title">Ch22-25 電分析化學</div>
          <div class="quiz-mode-desc">${Math.min(ch22,20)} 題 / 60 分鐘<br>僅 Chapter 22-25</div>
        </button>

        <button class="quiz-mode-card" onclick="startQuiz('review')">
          <div class="quiz-mode-icon">📖</div>
          <div class="quiz-mode-title">總複習模式</div>
          <div class="quiz-mode-desc">${total} 題 / 不限時<br>所有題目逐一複習</div>
        </button>
      </div>
    </div>
  `;
}

function selectAnswer(idx) {
  quizState.answers[quizState.currentQ] = idx;
  renderQuizUI();
}

function addOrderItem(item) {
  if (!quizState.answers[quizState.currentQ]) quizState.answers[quizState.currentQ] = [];
  quizState.answers[quizState.currentQ].push(item);
  renderQuizUI();
}

function removeOrderItem(idx) {
  quizState.answers[quizState.currentQ].splice(idx, 1);
  renderQuizUI();
}

function clearOrder() {
  quizState.answers[quizState.currentQ] = [];
  renderQuizUI();
}

function goToQuestion(idx) {
  quizState.currentQ = idx;
  renderQuizUI();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function confirmSubmit() {
  const total = quizState.questions.length;
  const answered = Object.keys(quizState.answers).length;
  if (answered < total) {
    if (!confirm(`你還有 ${total - answered} 題未作答，確定要交卷嗎？`)) return;
  } else {
    if (!confirm('確定要交卷嗎？')) return;
  }
  submitQuiz();
}

function submitQuiz() {
  clearInterval(quizState.timer);
  quizState.submitted = true;
  const mEl = document.getElementById('mobileTimer');
  if (mEl) mEl.style.display = 'none';
  renderResults();
}

function renderResults() {
  const container = document.getElementById('quizContainer');
  const questions = quizState.questions;
  let correct = 0;
  let results = [];

  questions.forEach((q, i) => {
    let isCorrect = false;
    const userAns = quizState.answers[i];

    if (q.type === 'mc') {
      isCorrect = userAns === q.ans;
    } else if (q.type === 'ordering') {
      if (Array.isArray(userAns) && userAns.length === q.ans.length) {
        isCorrect = userAns.every((v, idx) => v === q.ans[idx]);
      }
    }

    if (isCorrect) correct++;
    results.push({question: q, userAnswer: userAns, isCorrect, index: i});
  });

  const score = Math.round((correct / questions.length) * 100);
  let grade = '';
  if (score >= 90) grade = 'A 優秀！';
  else if (score >= 80) grade = 'B 很好！';
  else if (score >= 70) grade = 'C 尚可';
  else if (score >= 60) grade = 'D 需加強';
  else grade = 'F 需重考';

  let html = `
    <div class="quiz-results">
      <div class="quiz-score-card">
        <div class="quiz-score-number">${score}</div>
        <div class="quiz-score-label">分</div>
        <div class="quiz-grade">${grade}</div>
        <div class="quiz-score-detail">${correct} / ${questions.length} 題正確</div>
      </div>

      <div class="quiz-result-actions">
        <button class="quiz-btn primary" onclick="showReview()">📖 查看詳解</button>
        <button class="quiz-btn secondary" onclick="quizState.active=false;quizState.submitted=false;renderQuizUI();">🔄 重新測驗</button>
      </div>

      <div id="reviewContainer" style="display:none">
        <h2>📝 詳解</h2>`;

  results.forEach((r, i) => {
    const q = r.question;
    const statusClass = r.isCorrect ? 'correct' : 'incorrect';
    const statusIcon = r.isCorrect ? '✅' : '❌';

    html += `<div class="quiz-review-card ${statusClass}">
      <div class="quiz-review-header">
        <span>${statusIcon} 第 ${i+1} 題</span>
        <span class="quiz-ch-tag ch${q.ch}">Ch${q.ch}${q.ch===20?' MS':' Electrochem'}</span>
      </div>
      <p class="quiz-review-question">${q.q}</p>`;

    if (q.type === 'mc') {
      html += `<div class="quiz-review-answers">`;
      q.opts.forEach((opt, j) => {
        let cls = '';
        if (j === q.ans) cls = 'correct-answer';
        if (j === r.userAnswer && j !== q.ans) cls = 'wrong-answer';
        html += `<div class="quiz-review-opt ${cls}">${String.fromCharCode(65+j)}. ${opt}</div>`;
      });
      html += `</div>`;
      if (r.userAnswer === undefined) html += `<p class="quiz-review-unsure">⚠️ 未作答</p>`;
    } else if (q.type === 'ordering') {
      html += `<div class="quiz-review-order">`;
      html += `<div>你的答案：${Array.isArray(r.userAnswer) ? r.userAnswer.join(' → ') : '未作答'}</div>`;
      html += `<div>正確答案：${q.ans.join(' → ')}</div>`;
      html += `</div>`;
    }

    html += `<div class="quiz-review-exp">${q.exp}</div>`;
    html += `</div>`;
  });

  html += `</div></div>`;
  container.innerHTML = html;
}

function showReview() {
  document.getElementById('reviewContainer').style.display = 'block';
  document.getElementById('reviewContainer').scrollIntoView({behavior: 'smooth'});
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function diffLabel(d) {
  switch(d) {
    case 'basic': return '基礎';
    case 'application': return '應用';
    case 'calculation': return '計算';
    default: return d;
  }
}

function typeLabel(t) {
  switch(t) {
    case 'mc': return '選擇題';
    case 'ordering': return '排序題';
    case 'calculation': return '計算題';
    default: return t;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('quizContainer');
  if (container) renderQuizMenu(container);
});