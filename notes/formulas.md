# 公式速查表

## Ch20 質譜法

![離子加速動能](images/ms/page12.png) ![磁扇區公式](images/ms/page28.png) ![解析度](images/ms/page55.png)

### 離子加速動能
KE = zeV
- z = 電荷數
- e = 1.6×10⁻¹⁹ C
- V = 加速電壓

### 磁扇區質譜儀
![磁扇區推導](images/ms/page27.png)

m/z = B²r²e / 2V
- B = 磁場強度 (T)
- r = 曲率半徑 (m)
- e = 1.6×10⁻¹⁹ C
- V = 加速電壓 (V)

### 磁扇區加速電壓
V = B²r²ze / 2m
- m 用 kg（amu / 6.02×10²³）
- r 用 m（cm / 100）

### 解析度
R = m̄ / Δm
- m̄ = 兩峰質量平均值
- Δm = 兩峰質量差

### 同位素比例
- Cl: ³⁵Cl:³⁷Cl = 3:1
- Br: ⁷⁹Br:⁸¹Br = 1:1
- 多個鹵素：(a+b)ⁿ 展開

---

## Ch22-25 電分析化學

![電池電位](images/electrochem/page05.png) ![Nernst](images/electrochem/page12.png) ![Randles-Ševčík](images/electrochem/page29.png)

### 電池電位
E_cell = E_right − E_left

### Nernst Equation (25°C)
E = E° − (0.0592/n) × log([C]^c[D]^d / [A]^a[B]^b)

![三個Nernst範例](images/electrochem/page13.png)

### Ksp 結合 Nernst
E = E° + (0.0592/n) × log(Ksp/[Cl⁻])
（以 Ag/AgCl 為例）

![Example A](images/electrochem/page16.png)

### CV 可逆反應
E° = (E_氧化峰 + E_還原峰) / 2

### Randles-Ševčík
i = (2.69×10⁵) × n^(3/2) × A × C × D^(1/2) × v^(1/2)

或：i = 0.4463 × n × F × A × C × (nFvD/RT)^(1/2)

常數：
- R = 8.3145 J/Kmol
- F = 96485 C/mol
- T = 298 K (25°C)