---
title: "4. 가우스 소거법과 연립방정식의 해"
description: "기본 행 연산으로 연립선형방정식을 계단형 행렬로 바꾸고, 유일해·무해·무한해를 구분한다."
date: "2025-07-08"
category: "선형대수학"
tags: ["linear-algebra", "gaussian-elimination", "row-echelon-form", "linear-system"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

가감법으로 연립방정식을 풀 때는 한 식의 배수를 다른 식에 더해 변수를 차례로 제거한다. 가우스 소거법은 같은 과정을 행렬의 행 연산으로 체계화한 방법이다.

계산 절차뿐 아니라 소거 결과를 통해 해가 하나인지, 존재하지 않는지, 무한히 많은지도 판단할 수 있다.

## 확대 행렬과 기본 행 연산

연립선형방정식

<div class="math-display">
\[
\begin{cases}
x+2y+z=6\\
2x+3y+3z=14\\
x+y+z=8
\end{cases}
\]
</div>
은 다음 확대 행렬로 표현된다.

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
가우스 소거법에서는 다음 세 가지 기본 행 연산만 사용한다.

1. 두 행을 맞바꾼다.
2. 한 행에 $0$이 아닌 상수를 곱한다.
3. 한 행에 다른 행의 상수배를 더한다.

이 연산들은 연립방정식의 해 집합을 바꾸지 않는다.

## 행 계단형(Row Echelon Form)

행렬이 다음 조건을 만족하면 행 계단형이라고 한다.

1. 영행이 아닌 각 행의 첫 번째 0이 아닌 원소는 위 행의 피벗보다 오른쪽에 있다.
2. 각 피벗 아래의 원소는 모두 $0$이다.
3. 모든 원소가 $0$인 행은 아래쪽에 놓인다.

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
은 행 계단형이다.

## 유일한 해를 구하는 과정

처음 확대 행렬에서 첫 번째 열 아래를 제거한다.

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

아래 행부터 역대입하면

<div class="math-display">
\[
z=0,
\qquad
y=-2,
\qquad x=10
\]
</div>
을 얻는다. 피벗이 모든 변수 열에 하나씩 존재하고 모순된 행이 없으므로 해가 유일하다.

## 해가 없는 경우

소거 결과에 다음과 같은 행이 나타나면 모순이다.

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
를 의미하므로 해가 존재하지 않는다.

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
에서 첫 번째 행을 이용해 두 번째와 세 번째 행을 제거하면

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
가 된다. 따라서 이 연립방정식은 해가 없다.

## 해가 무한히 많은 경우

모순은 없지만 피벗이 없는 변수 열이 존재하면 자유 변수가 생긴다.

<div class="math-display">
\[
\begin{cases}
x+y+z=2\\
2x+2y+2z=4
\end{cases}
\]
</div>
를 소거하면

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
가 된다. $y=s$, $z=t$를 자유 변수로 두면

<div class="math-display">
\[
x=2-s-t
\]
</div>
이므로 해 집합은

<div class="math-display">
\[
\begin{bmatrix}x\\y\\z\end{bmatrix}
=
\begin{bmatrix}2-s-t\\s\\t\end{bmatrix},
\qquad s,t\in\mathbb{R}
\]
</div>
이다.

## 일관성(Consistency)

적어도 하나의 해가 존재하는 연립방정식은 consistent하다고 한다.

| 해의 형태 | 일관성 | 소거 결과 |
| --- | --- | --- |
| 유일한 해 | Consistent | 모든 변수 열에 피벗이 존재 |
| 무한히 많은 해 | Consistent | 자유 변수가 존재하고 모순은 없음 |
| 해 없음 | Inconsistent | $0=c$ 꼴의 모순 행이 존재 |

가우스 소거법은 해를 계산하는 방법이면서 동시에 연립방정식의 구조를 분석하는 방법이다.

## 정리

1. 연립방정식을 확대 행렬로 바꾼다.
2. 기본 행 연산으로 피벗 아래를 제거한다.
3. 모순 행이 있는지 확인한다.
4. 자유 변수의 존재를 확인한다.
5. 필요한 경우 역대입으로 해를 계산한다.

## 확인 문제

### 1

다음 연립방정식을 가우스 소거법으로 푼다.

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

다음 연립방정식의 일관성과 해의 형태를 판단한다.

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

소거 후 해는

<div class="math-display">
\[
(x,y,z)=(0,4,2)
\]
</div>
이다.

### 2번

계수 행렬과 확대 행렬의 랭크가 모두 $2$이고 변수는 $3$개이므로 consistent하며 해가 무한히 많다. $z=t$로 두면

<div class="math-display">
\[
(x,y,z)=(t-2,3-2t,t),
\qquad t\in\mathbb{R}
\]
</div>
이다.

### 3번

소거하면

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

**선형대수학 정리 시리즈** · 4/5 · [← 이전: 내적, 노름과 선형결합](/posts/linear-algebra-03-inner-product-linear-combination/) · [다음: Span, Basis와 Dimension →](/posts/linear-algebra-05-span-basis-dimension/)
