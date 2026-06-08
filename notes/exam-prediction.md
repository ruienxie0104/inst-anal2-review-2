# 考題預測與解題策略

## Ch20 質譜法

### 必考題型

![離子源比較](images/ms/page10.png) ![分析器比較](images/ms/page39.png)

1. **離子源選擇**：給一個分析需求，選最適合的離子源
   - 大分子蛋白質 → ESI 或 MALDI
   - 需要結構資訊 → EI
   - 只需分子量 → CI、ESI、MALDI
   - GC-MS → EI 或 CI
   - LC-MS → ESI
   - 不需前處理 → DESI

2. **磁扇區計算**：給 B, r, V, m/z 中的三個求第四個
   - 公式：m/z = B²r²e / 2V
   - 注意單位：r 要換算成 m，m 要換算成 kg

![Example 20-4](images/ms/page29.png)

3. **解析度計算**：給兩個離子的精確質量，求 R
   - 公式：R = m̄ / Δm
   - m̄ 是平均值，不是任一個！

![解析度](images/ms/page55.png) ![Example 20-3](images/ms/page56.png)

4. **同位素判斷**：給 M 和 M+2 的比例，判斷含什麼鹵素
   - M+2 ≈ M/3 → 一個 Cl
   - M+2 ≈ M → 一個 Br
   - M:M+2:M+4 = 9:6:1 → 兩個 Cl

![同位素](images/ms/page52.png) ![雙Cl同位素](images/ms/page54.png)

5. **特徵碎片辨識**：給質譜圖判斷化合物類型
   - m/z=29 基峰 → 醛
   - m/z=43 基峰 → 甲基酮
   - m/z=31 → 醇
   - m/z=91 → 芳香族

![特徵碎片](images/ms/page42.png) ![酮類](images/ms/page44.png)

6. **串聯質譜掃描模式**：給需求選掃描模式
   - 想知道某分子的碎片 → Product Ion Scan
   - 想知道哪些分子會產生某碎片 → Precursor Ion Scan
   - 想找失去特定質量的分子對 → Neutral Loss Scan
   - 想定量特定反應 → SRM/MRM

![四種掃描模式](images/ms/page60.png)

### 易錯點

- E° 是**還原電位**，不是氧化電位
- Nernst 裡的 [A][B] 是**氧化側**（反應物），[C][D] 是**還原側**（產物）
- 解析度公式用**平均值** m̄，不是 m₁ 或 m₂
- 磁扇區公式中 r 要用**公尺**，m 要用**公斤**
- 同位素比例：(3+1)ⁿ 是 Cl 的，(1+1)ⁿ 是 Br 的

---

## Ch22-25 電分析化學

### 必考題型

![電極電位](images/electrochem/page09.png) ![Cd標準電極](images/electrochem/page10.png)

1. **E° 正負判斷**：正電位=自發，負電位=非自發（反應逆向）
2. **Nernst 計算**：給非標準濃度求 E
   - 注意 n 值（轉移電子數）
   - 注意 log 裡的分母分子（氧化側在下）

![Example 22-2](images/electrochem/page14.png)

3. **Ksp + Nernst 結合**：給 Ksp 求 Ag/AgCl 電極電位
   - 關鍵：[Ag⁺] = Ksp/[Cl⁻]
   - 代入 Nernst 推導

![Example A](images/electrochem/page16.png)

4. **Cell Potential 計算**：E_cell = E_right − E_left

5. **CV 圖判讀**：
   - 可逆：對稱，ΔE_p ≈ 59/n mV
   - 準可逆：峰分離變大
   - 不可逆：只有一個方向

![CV可逆性](images/electrochem/page28.png)

6. **參考電極選擇**：給需求選參考電極

![參考電極比較](images/electrochem/page19.png) ![Ag/AgCl](images/electrochem/page20.png)

### 易錯點

- **Plus Right Rule**：電錶正極接右邊，E_cell = E_right − E_left
- E° **與反應莫耳數無關**（2Ag⁺ + 2e⁻ → 2Ag 的 E° 跟 Ag⁺ + e⁻ → Ag 一樣）
- Nernst 的 0.0592 只在 **25°C** 適用
- 固體和純液體濃度 = 1（不寫在 Q 裡）
- SCE 用汞，有環境毒性問題
- 電位選擇：高電位會受低電位干擾