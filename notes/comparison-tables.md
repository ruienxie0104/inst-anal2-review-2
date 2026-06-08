# 儀器方法總比較表

## 離子源比較

![硬 vs 軟離子源](images/ms/page10.png) ![EI](images/ms/page11.png) ![CI](images/ms/page13.png) ![FAB](images/ms/page16.png) ![MALDI](images/ms/page17.png) ![ESI](images/ms/page19.png) ![DESI](images/ms/page20.png) ![EI vs CI](images/ms/page22.png) ![ESI 應用](images/ms/page23.png)

| 離子源 | 硬/軟 | 分子離子峰 | 碎片 | 適用分子量 | 串聯層析 | 一句話 |
|--------|-------|----------|------|----------|---------|--------|
| EI | 硬 | 弱 | 多 | 小-中 | GC-MS | 70eV電子束砸，碎片多結構清 |
| CI | 軟 | 強 | 少 | 小-中 | GC-MS | 試劑氣體先離子化再轉移 |
| FAB | 軟 | 強 | 少 | 中 | 否 | 快速原子撞基質脫附 |
| MALDI | 軟 | 強 | 少 | 大 | 否 | 基質吸雷射，田中耕一 |
| ESI | 軟 | 強 | 少 | 大 | LC-MS | 庫侖爆炸多電荷，Fenn |
| DESI | 軟 | 強 | 少 | 大 | 否 | 電灑撞固體，不需前處理 |

## 質量分析器比較

![分析器比較](images/ms/page39.png) ![磁扇區](images/ms/page26.png) ![四極柱](images/ms/page32.png) ![離子阱](images/ms/page37.png) ![TOF](images/ms/page38.png)

| 類型 | 原理 | 優點 | 缺點 | 特色 |
|------|------|------|------|------|
| 磁扇區 | 磁場偏轉 | 高解析、質量範圍大 | 貴、大、慢、不易串聯 | m/z=B²r²e/2V |
| 四極柱 | DC+RF過濾 | 小、便宜 | 質量範圍小、解析一般 | 最常見的分析器 |
| 離子阱 | 射頻囚禁 | 小、便宜、可MSⁿ | 質量範圍小、離子抑制 | MSⁿ最大特色 |
| TOF | 飛行時間 | 高解析、質量範圍大、快 | 大、不易串聯 | 輕快重慢 |

## 參考電極比較

![SHE](images/electrochem/page18.png) ![SCE](images/electrochem/page19.png) ![Ag/AgCl](images/electrochem/page20.png)

| 電極 | E° (V) | 優點 | 缺點 |
|------|--------|------|------|
| SHE | 0.000 | 標準基準 | 大、複雜、危險 |
| SCE | +0.244 | 穩定、方便 | 內電阻大、汞毒性 |
| Ag/AgCl | +0.197 | 穩定、小、低電阻 | 需補Cl⁻ |

## 伏安法比較

![LSV](images/electrochem/page24.png) ![CV](images/electrochem/page27.png) ![DPV SWV](images/electrochem/page31.png)

| 方法 | 全名 | 特點 |
|------|------|------|
| LSV | 線性掃描伏安法 | E定性、i定量 |
| CV | 循環伏安法 | 可逆對稱，E°=(E_O+E_R)/2 |
| DPV | 脈衝伏安法 | 比CV訊雜比高 |
| SWV | 方波伏安法 | 比CV訊雜比高 |

## 特徵碎片 m/z 速查

![醛類](images/ms/page42.png) ![酮類](images/ms/page44.png) ![醇類](images/ms/page48.png) ![芳香族](images/ms/page50.png) ![同位素](images/ms/page52.png)

| 類型 | m/z | 備註 |
|------|-----|------|
| 醛 | 29 | 必為基峰 |
| 甲基酮 | 43 | |
| 醇 | 31 | CH₂OH⁺ |
| 芳香族 | 91 | 草鎖離子 |
| Cl | M+2 ≈ M/3 | 3:1 |
| Br | M+2 ≈ M | 1:1 |