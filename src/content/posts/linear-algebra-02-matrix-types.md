---
title: "선형대수학 2: 자주 사용하는 행렬의 종류"
description: "정사각 행렬, 단위 행렬, 대각 행렬, 전치 행렬과 삼각 행렬의 정의와 성질을 정리한다."
date: "2025-06-29"
category: "선형대수학"
tags: ["linear-algebra", "matrix", "transpose", "triangular-matrix"]
domain: "math"
format: "study-note"
featured: false
draft: false
---

행렬을 계산 도구로만 보면 원소를 배열한 표처럼 보이지만, 특정한 형태를 가진 행렬에는 계산을 단순하게 만드는 성질이 있다. 이후 가우스 소거법, 역행렬, 고유값을 공부할 때 반복해서 등장하는 행렬들을 정리한다.

## 정사각 행렬(Square Matrix)

행과 열의 개수가 같은 행렬을 정사각 행렬이라고 한다. $n\times n$ 정사각 행렬은 다음 형태이다.

$$
A=
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{bmatrix}
$$

행렬식, 고유값, 대각화처럼 뒤에서 다루는 많은 개념은 정사각 행렬을 대상으로 정의된다.

예를 들어

$$
A=
\begin{bmatrix}
2&1&0\\
-1&3&4\\
0&5&-2
\end{bmatrix}
$$

는 $3\times3$ 정사각 행렬이다.

## 단위 행렬(Identity Matrix)

단위 행렬은 주대각선 원소가 모두 $1$이고 나머지 원소가 $0$인 정사각 행렬이다. $n\times n$ 단위 행렬을 $I_n$으로 나타낸다.

$$
I_n=
\begin{bmatrix}
1&0&\cdots&0\\
0&1&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&1
\end{bmatrix}
$$

행렬 곱셈에서 수의 $1$과 같은 역할을 한다.

$$
AI_n=I_nA=A
$$

## 대각 행렬(Diagonal Matrix)

주대각선 이외의 모든 원소가 $0$인 정사각 행렬을 대각 행렬이라고 한다.

$$
D=
\begin{bmatrix}
d_1&0&\cdots&0\\
0&d_2&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&d_n
\end{bmatrix}
=\operatorname{diag}(d_1,d_2,\ldots,d_n)
$$

대각 성분에는 $0$도 올 수 있다. 단위 행렬은 모든 대각 성분이 $1$인 대각 행렬이다.

대각 행렬의 연산은 성분별 계산으로 단순화된다.

$$
\operatorname{diag}(a_1,\ldots,a_n)
\operatorname{diag}(b_1,\ldots,b_n)
=
\operatorname{diag}(a_1b_1,\ldots,a_nb_n)
$$

또한

$$
D^k=\operatorname{diag}(d_1^k,\ldots,d_n^k)
$$

이다.

## 전치 행렬(Transpose)

행렬의 행과 열을 맞바꾼 행렬을 전치 행렬이라고 한다. $A=[a_{ij}]$일 때

$$
(A^T)_{ij}=a_{ji}
$$

로 정의한다.

예를 들어

$$
A=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
$$

이면

$$
A^T=
\begin{bmatrix}
1&4\\
2&5\\
3&6
\end{bmatrix}
$$

이다.

전치 연산에서 자주 사용하는 성질은 다음과 같다.

$$
(A^T)^T=A
$$

$$
(A+B)^T=A^T+B^T
$$

$$
(cA)^T=cA^T
$$

$$
(AB)^T=B^TA^T
$$

마지막 식에서 곱의 순서가 뒤집힌다는 점이 중요하다.

### 대칭 행렬과 반대칭 행렬

정사각 행렬 $A$가

$$
A^T=A
$$

를 만족하면 대칭 행렬(symmetric matrix)이라고 한다. 반대로

$$
A^T=-A
$$

이면 반대칭 행렬(skew-symmetric matrix)이라고 한다. 실수 반대칭 행렬의 주대각선 원소는 모두 $0$이다.

## 삼각 행렬(Triangular Matrix)

정사각 행렬에서 주대각선의 한쪽이 모두 $0$이면 삼각 행렬이다.

상삼각 행렬은 주대각선 아래가 모두 $0$이다.

$$
U=
\begin{bmatrix}
u_{11}&u_{12}&\cdots&u_{1n}\\
0&u_{22}&\cdots&u_{2n}\\
\vdots&\ddots&\ddots&\vdots\\
0&\cdots&0&u_{nn}
\end{bmatrix}
$$

하삼각 행렬은 주대각선 위가 모두 $0$이다.

$$
L=
\begin{bmatrix}
l_{11}&0&\cdots&0\\
l_{21}&l_{22}&\cdots&0\\
\vdots&\ddots&\ddots&\vdots\\
l_{n1}&\cdots&l_{n,n-1}&l_{nn}
\end{bmatrix}
$$

같은 종류의 삼각 행렬끼리 곱하면 다시 같은 종류의 삼각 행렬이 된다. 대각 행렬은 상삼각 행렬이면서 동시에 하삼각 행렬이다.

삼각 행렬은 가우스 소거법과 역대입에서 자연스럽게 등장한다. 행렬식도 주대각선 원소의 곱으로 바로 계산할 수 있다.

$$
\det(U)=u_{11}u_{22}\cdots u_{nn}
$$

## 정리

행렬의 형태를 알아보는 일은 단순한 이름 암기가 아니다.

- 단위 행렬은 행렬 곱셈의 항등원이다.
- 대각 행렬은 곱셈과 거듭제곱이 성분별 계산으로 단순화된다.
- 전치는 행과 열의 관점을 바꾸며, 대칭성과 직교성의 기초가 된다.
- 삼각 행렬은 연립방정식 풀이와 행렬 분해에서 핵심적인 역할을 한다.

## 확인 문제

1. 다음 행렬이 정사각, 대각, 상삼각, 하삼각 행렬 중 어디에 해당하는지 분류한다.

$$
A=
\begin{bmatrix}
2&0&0\\
0&-1&0\\
0&0&4
\end{bmatrix}
$$

2. $(AB)^T=B^TA^T$에서 곱의 순서가 바뀌는 이유를 원소 단위로 확인한다.
3. 임의의 실수 정사각 행렬 $A$를 대칭 행렬 $B$와 반대칭 행렬 $C$의 합 $A=B+C$로 나타낸다.

<details>
<summary>정답 보기</summary>

### 1번

$A$는 $3\times3$ 정사각 행렬이며, 주대각선 이외의 원소가 모두 $0$이므로 대각 행렬이다. 따라서 상삼각 행렬이면서 하삼각 행렬이기도 하다.

### 2번

$(AB)_{ij}=\sum_k a_{ik}b_{kj}$이므로

$$
((AB)^T)_{ij}=(AB)_{ji}=\sum_k a_{jk}b_{ki}
$$

이다. 한편

$$
(B^TA^T)_{ij}=\sum_k (B^T)_{ik}(A^T)_{kj}
=\sum_k b_{ki}a_{jk}
$$

이고 스칼라 곱은 교환 가능하므로 두 식이 같다.

### 3번

$$
B=\frac{A+A^T}{2},
\qquad
C=\frac{A-A^T}{2}
$$

로 두면 $B^T=B$, $C^T=-C$이고 $B+C=A$가 된다.

</details>

---

**선형대수학 정리 시리즈** · 2/5 · [← 이전: 벡터 공간과 선형 사상](/posts/linear-algebra-01-vector-spaces/) · [다음: 내적, 노름과 선형결합 →](/posts/linear-algebra-03-inner-product-linear-combination/)
