---
title: "2. 자주 사용하는 Matrix의 종류"
description: "Square Matrix, Identity Matrix, Diagonal Matrix, Transpose와 Triangular Matrix의 정의와 성질을 정리한다."
date: "2025-06-29"
category: "선형대수학"
tags: ["linear-algebra", "matrix", "transpose", "triangular-matrix"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

matrix는 원소를 배열한 표처럼 보이지만, 특정한 형태를 가진 matrix에는 계산을 단순하게 만드는 성질이 있다. 이후 Gaussian Elimination, inverse matrix, eigenvalue를 공부할 때 반복해서 등장하는 matrix들을 정리한다.

## Square Matrix

row와 column의 개수가 같은 matrix를 Square Matrix라고 한다. $n\times n$ Square Matrix는 다음 형태이다.

<div class="math-display">
\[
A=
\begin{bmatrix}
a_{11}&a_{12}&\cdots&a_{1n}\\
a_{21}&a_{22}&\cdots&a_{2n}\\
\vdots&\vdots&\ddots&\vdots\\
a_{n1}&a_{n2}&\cdots&a_{nn}
\end{bmatrix}
\]
</div>

determinant, eigenvalue, diagonalization처럼 뒤에서 다루는 많은 개념은 Square Matrix를 대상으로 정의된다.

예를 들어

<div class="math-display">
\[
A=
\begin{bmatrix}
2&1&0\\
-1&3&4\\
0&5&-2
\end{bmatrix}
\]
</div>

는 $3\times3$ Square Matrix이다.

## Identity Matrix

Identity Matrix는 main diagonal의 element가 모두 $1$이고 나머지 element가 $0$인 Square Matrix이다. $n\times n$ Identity Matrix를 $I_n$으로 나타낸다.

<div class="math-display">
\[
I_n=
\begin{bmatrix}
1&0&\cdots&0\\
0&1&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&1
\end{bmatrix}
\]
</div>

Matrix Multiplication에서 수의 $1$과 같은 identity 역할을 한다.

<div class="math-display">
\[
AI_n=I_nA=A
\]
</div>

## Diagonal Matrix

main diagonal 이외의 모든 element가 $0$인 Square Matrix를 Diagonal Matrix라고 한다.

<div class="math-display">
\[
D=
\begin{bmatrix}
d_1&0&\cdots&0\\
0&d_2&\cdots&0\\
\vdots&\vdots&\ddots&\vdots\\
0&0&\cdots&d_n
\end{bmatrix}
=\operatorname{diag}(d_1,d_2,\ldots,d_n)
\]
</div>

main diagonal의 element에는 $0$도 올 수 있다. Identity Matrix는 모든 diagonal element가 $1$인 Diagonal Matrix이다.

Diagonal Matrix의 operation은 component-wise calculation으로 단순화된다.

<div class="math-display">
\[
\operatorname{diag}(a_1,\ldots,a_n)
\operatorname{diag}(b_1,\ldots,b_n)
=
\operatorname{diag}(a_1b_1,\ldots,a_nb_n)
\]
</div>

또한

<div class="math-display">
\[
D^k=\operatorname{diag}(d_1^k,\ldots,d_n^k)
\]
</div>

이다.

## Transpose

matrix의 row와 column을 맞바꾼 matrix를 Transpose라고 한다. $A=[a_{ij}]$일 때

<div class="math-display">
\[
(A^T)_{ij}=a_{ji}
\]
</div>

로 정의한다.

예를 들어

<div class="math-display">
\[
A=
\begin{bmatrix}
1&2&3\\
4&5&6
\end{bmatrix}
\]
</div>

이면

<div class="math-display">
\[
A^T=
\begin{bmatrix}
1&4\\
2&5\\
3&6
\end{bmatrix}
\]
</div>

이다.

Transpose에서 자주 사용하는 성질은 다음과 같다.

<div class="math-display">
\[
(A^T)^T=A
\]
</div>

<div class="math-display">
\[
(A+B)^T=A^T+B^T
\]
</div>

<div class="math-display">
\[
(cA)^T=cA^T
\]
</div>

<div class="math-display">
\[
(AB)^T=B^TA^T
\]
</div>

마지막 식에서는 product의 순서가 뒤집힌다.

### Symmetric Matrix와 Skew-Symmetric Matrix

Square Matrix $A$가

<div class="math-display">
\[
A^T=A
\]
</div>

를 만족하면 Symmetric Matrix라고 한다. 반대로

<div class="math-display">
\[
A^T=-A
\]
</div>

이면 Skew-Symmetric Matrix라고 한다. real Skew-Symmetric Matrix의 main diagonal element는 모두 $0$이다.

## Triangular Matrix

Square Matrix에서 main diagonal의 한쪽이 모두 $0$이면 Triangular Matrix이다.

Upper Triangular Matrix는 main diagonal 아래가 모두 $0$이다.

<div class="math-display">
\[
U=
\begin{bmatrix}
u_{11}&u_{12}&\cdots&u_{1n}\\
0&u_{22}&\cdots&u_{2n}\\
\vdots&\ddots&\ddots&\vdots\\
0&\cdots&0&u_{nn}
\end{bmatrix}
\]
</div>

Lower Triangular Matrix는 main diagonal 위가 모두 $0$이다.

<div class="math-display">
\[
L=
\begin{bmatrix}
l_{11}&0&\cdots&0\\
l_{21}&l_{22}&\cdots&0\\
\vdots&\ddots&\ddots&\vdots\\
l_{n1}&\cdots&l_{n,n-1}&l_{nn}
\end{bmatrix}
\]
</div>

같은 종류의 Triangular Matrix끼리 곱하면 다시 같은 종류의 Triangular Matrix가 된다. Diagonal Matrix는 Upper Triangular Matrix이면서 동시에 Lower Triangular Matrix이다.

Triangular Matrix는 Gaussian Elimination과 back substitution에서 자연스럽게 등장한다. determinant도 main diagonal element의 product로 바로 계산할 수 있다.

<div class="math-display">
\[
\det(U)=u_{11}u_{22}\cdots u_{nn}
\]
</div>

## 정리

- Identity Matrix는 Matrix Multiplication의 identity이다.
- Diagonal Matrix는 multiplication과 power가 component-wise calculation으로 단순화된다.
- Transpose는 row와 column의 관점을 바꾸며 Symmetric Matrix와 orthogonality를 이해하는 기초가 된다.
- Triangular Matrix는 Linear System의 풀이와 Matrix Decomposition에서 중요한 역할을 한다.

## 확인 문제

1. 다음 matrix가 Square Matrix, Diagonal Matrix, Upper Triangular Matrix, Lower Triangular Matrix 중 어디에 해당하는지 분류한다.

<div class="math-display">
\[
A=
\begin{bmatrix}
2&0&0\\
0&-1&0\\
0&0&4
\end{bmatrix}
\]
</div>

2. $(AB)^T=B^TA^T$에서 product의 순서가 바뀌는 이유를 element 단위로 확인한다.
3. 임의의 real Square Matrix $A$를 Symmetric Matrix $B$와 Skew-Symmetric Matrix $C$의 sum $A=B+C$로 나타낸다.

<details>
<summary>정답 보기</summary>

### 1번

$A$는 $3\times3$ Square Matrix이며 main diagonal 이외의 element가 모두 $0$이므로 Diagonal Matrix이다. 따라서 Upper Triangular Matrix이면서 Lower Triangular Matrix이기도 하다.

### 2번

$(AB)_{ij}=\sum_k a_{ik}b_{kj}$이므로

<div class="math-display">
\[
((AB)^T)_{ij}=(AB)_{ji}=\sum_k a_{jk}b_{ki}
\]
</div>

이다. 한편

<div class="math-display">
\[
(B^TA^T)_{ij}=\sum_k (B^T)_{ik}(A^T)_{kj}
=\sum_k b_{ki}a_{jk}
\]
</div>

이고 scalar multiplication은 commutative하므로 두 식이 같다.

### 3번

<div class="math-display">
\[
B=\frac{A+A^T}{2},
\qquad
C=\frac{A-A^T}{2}
\]
</div>

로 두면 $B^T=B$, $C^T=-C$이고 $B+C=A$가 된다.

</details>

---

**Linear Algebra 정리 시리즈** · 2/5 · [← 이전: Vector Space와 Linear Map](/posts/linear-algebra-01-vector-spaces/) · [다음: Inner Product, Norm과 Linear Combination →](/posts/linear-algebra-03-inner-product-linear-combination/)
