---
title: "4. Gaussian Elimination과 Linear System의 해"
description: "Elementary Row Operation으로 Linear System을 Row Echelon Form으로 바꾸고 solution의 형태를 구분한다."
date: "2025-07-08"
category: "선형대수학"
tags: ["linear-algebra", "gaussian-elimination", "row-echelon-form", "linear-system"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

가감법으로 Linear System을 풀 때는 한 equation의 multiple을 다른 equation에 더해 variable을 차례로 제거한다. Gaussian Elimination은 같은 과정을 matrix의 row operation으로 체계화한 방법이다.

계산 결과를 이용하면 solution이 unique한지, 존재하지 않는지, infinitely many인지도 판단할 수 있다.

## Augmented Matrix와 Elementary Row Operation

Linear System

<div class="math-display">
\[
\begin{cases}
x+2y+z=6\\
2x+3y+3z=14\\
x+y+z=8
\end{cases}
\]
</div>

은 다음 Augmented Matrix로 표현된다.

<div class="math-display">
\[
\left[
\begin{array}{ccc|c}
1&2&1&6\\
2&3&3&14\\
1&1&1&8
\end{array}
\right]
\]
</div>

Gaussian Elimination에서는 다음 세 가지 Elementary Row Operation을 사용한다.

1. 두 row를 interchange한다.
2. 한 row에 $0$이 아닌 constant를 곱한다.
3. 한 row에 다른 row의 scalar multiple을 더한다.

이 operation들은 Linear System의 solution set을 바꾸지 않는다.

## Row Echelon Form

matrix가 다음 조건을 만족하면 Row Echelon Form이라고 한다.

1. nonzero row의 leading entry는 위 row의 pivot보다 오른쪽에 있다.
2. 각 pivot 아래의 entry는 모두 $0$이다.
3. zero row는 아래쪽에 놓인다.

예를 들어

<div class="math-display">
\[
\begin{bmatrix}
1&2&-1&3\\
0&1&5&-2\\
0&0&4&7
\end{bmatrix}
\]
</div>

은 Row Echelon Form이다.

## Unique Solution을 구하는 과정

처음 Augmented Matrix에서 첫 번째 column의 pivot 아래를 제거한다.

<div class="math-display">
\[
R_2\leftarrow R_2-2R_1,
\qquad
R_3\leftarrow R_3-R_1
\]
</div>

그러면

<div class="math-display">
\[
\left[
\begin{array}{ccc|c}
1&2&1&6\\
0&-1&1&2\\
0&-1&0&2
\end{array}
\right]
\]
</div>

가 된다. 이어서

<div class="math-display">
\[
R_3\leftarrow R_3-R_2
\]
</div>

를 적용하면

<div class="math-display">
\[
\left[
\begin{array}{ccc|c}
1&2&1&6\\
0&-1&1&2\\
0&0&-1&0
\end{array}
\right]
\]
</div>

이다.

아래 row부터 back substitution하면

<div class="math-display">
\[
z=0,
\qquad
y=-2,
\qquad
x=10
\]
</div>

을 얻는다. 모든 variable column에 pivot이 하나씩 존재하고 contradiction row가 없으므로 unique solution을 가진다.

## No Solution인 경우

row reduction 결과에 다음과 같은 row가 나타나면 contradiction이다.

<div class="math-display">
\[
\begin{bmatrix}
0&0&0&|&2
\end{bmatrix}
\]
</div>

이는

<div class="math-display">
\[
0=2
\]
</div>

를 의미하므로 solution이 존재하지 않는다.

예를 들어

<div class="math-display">
\[
\begin{cases}
x+y+z=1\\
2x+2y+2z=2\\
x+y+z=3
\end{cases}
\]
</div>

에서 첫 번째 row를 이용해 두 번째와 세 번째 row를 제거하면

<div class="math-display">
\[
\left[
\begin{array}{ccc|c}
1&1&1&1\\
0&0&0&0\\
0&0&0&2
\end{array}
\right]
\]
</div>

가 된다. 따라서 이 Linear System은 No Solution이다.

## Infinitely Many Solutions인 경우

contradiction은 없지만 pivot이 없는 variable column이 존재하면 free variable이 생긴다.

<div class="math-display">
\[
\begin{cases}
x+y+z=2\\
2x+2y+2z=4
\end{cases}
\]
</div>

를 row reduction하면

<div class="math-display">
\[
\left[
\begin{array}{ccc|c}
1&1&1&2\\
0&0&0&0
\end{array}
\right]
\]
</div>

가 된다. $y=s$, $z=t$를 free variable로 두면

<div class="math-display">
\[
x=2-s-t
\]
</div>

이므로 solution set은

<div class="math-display">
\[
\begin{bmatrix}x\\y\\z\end{bmatrix}
=
\begin{bmatrix}2-s-t\\s\\t\end{bmatrix},
\qquad s,t\in\mathbb{R}
\]
</div>

이다.

## Consistency

적어도 하나의 solution이 존재하는 Linear System은 consistent하다고 한다.

| Solution의 형태 | Consistency | Row Reduction 결과 |
| --- | --- | --- |
| Unique Solution | Consistent | 모든 variable column에 pivot이 존재 |
| Infinitely Many Solutions | Consistent | free variable이 존재하고 contradiction은 없음 |
| No Solution | Inconsistent | $0=c$ 꼴의 contradiction row가 존재 |

Gaussian Elimination은 solution을 계산하는 방법이면서 동시에 Linear System의 structure를 분석하는 방법이다.

## 정리

1. Linear System을 Augmented Matrix로 바꾼다.
2. Elementary Row Operation으로 pivot 아래를 제거한다.
3. contradiction row가 있는지 확인한다.
4. free variable의 존재를 확인한다.
5. 필요한 경우 back substitution으로 solution을 계산한다.

## 확인 문제

### 1

다음 Linear System을 Gaussian Elimination으로 푼다.

<div class="math-display">
\[
\begin{cases}
x+y+z=6\\
2x+3y+z=14\\
x+2y+3z=14
\end{cases}
\]
</div>

### 2

다음 Linear System의 Consistency와 solution의 형태를 판단한다.

<div class="math-display">
\[
\begin{cases}
x+2y+3z=4\\
5x+6y+7z=8\\
9x+10y+11z=12
\end{cases}
\]
</div>

### 3

다음 $A\mathbf{x}=\mathbf{b}$에서 $\mathbf{x}$를 구한다.

<div class="math-display">
\[
A=
\begin{bmatrix}
1&2&3\\
4&5&6\\
7&8&10
\end{bmatrix},
\qquad
\mathbf{b}=
\begin{bmatrix}
6\\15\\25
\end{bmatrix}
\]
</div>

<details>
<summary>정답 보기</summary>

### 1번

row reduction 후 solution은

<div class="math-display">
\[
(x,y,z)=(0,4,2)
\]
</div>

이다.

### 2번

Coefficient Matrix와 Augmented Matrix의 rank가 모두 $2$이고 variable은 $3$개이므로 consistent하며 Infinitely Many Solutions를 가진다. $z=t$로 두면

<div class="math-display">
\[
(x,y,z)=(t-2,3-2t,t),
\qquad t\in\mathbb{R}
\]
</div>

이다.

### 3번

row reduction하면

<div class="math-display">
\[
\mathbf{x}=
\begin{bmatrix}
1\\1\\1
\end{bmatrix}
\]
</div>

을 얻는다.

</details>

---

**Linear Algebra 정리 시리즈** · 4/5 · [← 이전: Inner Product, Norm과 Linear Combination](/posts/linear-algebra-03-inner-product-linear-combination/) · [다음: Span, Basis와 Dimension →](/posts/linear-algebra-05-span-basis-dimension/)
