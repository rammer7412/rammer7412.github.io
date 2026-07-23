---
title: "1. Vector Space와 Linear Map"
description: "Field, Vector Space, Subspace와 Linearity의 정의를 연결해 Linear Algebra의 출발점을 정리한다."
date: "2025-06-28"
category: "선형대수학"
tags: ["linear-algebra", "vector-space", "subspace", "linear-map"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

Linear Algebra를 처음 공부할 때 가장 낯설었던 부분은 vector 자체보다 **Vector Space의 정의**였다. vector를 화살표나 좌표로만 이해하면 계산은 할 수 있지만, 함수와 matrix를 하나의 구조로 묶어 이해하기는 어렵다.

이 글에서는 Field에서 출발해 Vector Space, Subspace, Linearity와 Linear Map으로 이어지는 흐름을 정리한다.

## Field

Field $F$는 덧셈과 곱셈이 정의된 집합이며, 두 연산이 익숙한 산술 법칙을 만족하는 algebraic structure이다. 핵심 조건은 다음과 같다.

- 덧셈과 곱셈에 대해 commutative law와 associative law가 성립한다.
- 곱셈은 덧셈에 대해 distributive law를 만족한다.
- 덧셈의 identity $0$과 곱셈의 identity $1$이 존재한다.
- 모든 원소는 additive inverse를 가진다.
- $0$이 아닌 모든 원소는 multiplicative inverse를 가진다.

대표적인 예는 다음과 같다.

<div class="math-display">
\[
\mathbb{Q}, \qquad \mathbb{R}, \qquad \mathbb{C}
\]
</div>

소수 $p$에 대한 $\mathbb{Z}_p$도 Field가 된다. Vector Space에서 vector의 component와 scalar는 보통 이러한 Field의 원소로 잡는다.

## Vector Space

Field $F$ 위의 Vector Space $V$는 vector addition과 scalar multiplication이 정의된 집합이다. 모든 $\mathbf{u},\mathbf{v},\mathbf{w}\in V$와 $a,b\in F$에 대해 다음 성질이 성립한다.

<div class="math-display">
\[
\mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}
\]
</div>

<div class="math-display">
\[
(\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{u}+(\mathbf{v}+\mathbf{w})
\]
</div>

<div class="math-display">
\[
\mathbf{v}+\mathbf{0}=\mathbf{v},
\qquad
\mathbf{v}+(-\mathbf{v})=\mathbf{0}
\]
</div>

<div class="math-display">
\[
a(\mathbf{u}+\mathbf{v})=a\mathbf{u}+a\mathbf{v}
\]
</div>

<div class="math-display">
\[
(a+b)\mathbf{v}=a\mathbf{v}+b\mathbf{v}
\]
</div>

<div class="math-display">
\[
(ab)\mathbf{v}=a(b\mathbf{v}),
\qquad
1\mathbf{v}=\mathbf{v}
\]
</div>

핵심은 vector를 더하거나 scalar multiplication해도 같은 공간 안에 남고, 그 연산이 일반적인 산술과 모순되지 않는다는 점이다.

가장 익숙한 예는 $\mathbb{R}^n$이다. polynomial의 집합이나 matrix의 집합도 적절한 operation을 정의하면 Vector Space가 된다.

## Subspace

$S$가 Vector Space $V$의 subset이라고 하자. $S$가 다음 세 조건을 만족하면 $V$의 Subspace이다.

1. $\mathbf{0}\in S$
2. $\mathbf{x},\mathbf{y}\in S$이면 $\mathbf{x}+\mathbf{y}\in S$
3. $\mathbf{x}\in S$, $a\in F$이면 $a\mathbf{x}\in S$

두 번째와 세 번째 조건은 각각 vector addition과 scalar multiplication에 대해 closed라는 뜻이다.

예를 들어

<div class="math-display">
\[
S=\{(x,y)\in\mathbb{R}^2:x+y=0\}
\]
</div>

은 $\mathbb{R}^2$의 Subspace이다. zero vector가 포함되고, 조건을 만족하는 두 vector의 sum과 scalar multiple도 다시 $x+y=0$을 만족한다.

반면

<div class="math-display">
\[
S=\{(x,y)\in\mathbb{R}^2:x+y=3\}
\]
</div>

은 Subspace가 아니다. $(0,0)$이 포함되지 않기 때문이다. 원점을 지나지 않는 line은 $\mathbb{R}^2$의 Subspace가 될 수 없다는 geometric intuition과도 연결된다.

## Linearity

함수 $T$가 다음 두 성질을 만족하면 linear하다고 한다.

<div class="math-display">
\[
T(\mathbf{x}+\mathbf{y})=T(\mathbf{x})+T(\mathbf{y})
\]
</div>

<div class="math-display">
\[
T(a\mathbf{x})=aT(\mathbf{x})
\]
</div>

첫 번째는 additivity, 두 번째는 homogeneity이다. 두 식을 합치면 다음과 같이 쓸 수 있다.

<div class="math-display">
\[
T(a\mathbf{x}+b\mathbf{y})
=aT(\mathbf{x})+bT(\mathbf{y})
\]
</div>

즉 linear function은 Linear Combination을 보존한다.

Linearity에서 바로 따라오는 중요한 성질도 있다.

<div class="math-display">
\[
T(\mathbf{0})=\mathbf{0}
\]
</div>

따라서 origin을 origin이 아닌 곳으로 보내는 함수는 linear할 수 없다.

## Linear Map과 Matrix

Vector Space $V$와 $W$ 사이의 함수

<div class="math-display">
\[
T:V\to W
\]
</div>

가 Linearity를 만족하면 $T$를 Linear Map이라고 한다.

finite-dimensional space에서는 matrix가 Linear Map을 표현하는 대표적인 도구이다. matrix

<div class="math-display">
\[
A=
\begin{bmatrix}
1&2\\
0&-1
\end{bmatrix}
\]
</div>

와 vector

<div class="math-display">
\[
\mathbf{x}=
\begin{bmatrix}
x_1\\x_2
\end{bmatrix}
\]
</div>

를 생각하면 $T(\mathbf{x})=A\mathbf{x}$는 다음과 같다.

<div class="math-display">
\[
T(\mathbf{x})=
\begin{bmatrix}
1&2\\
0&-1
\end{bmatrix}
\begin{bmatrix}
x_1\\x_2
\end{bmatrix}
=
\begin{bmatrix}
x_1+2x_2\\-x_2
\end{bmatrix}
\]
</div>

Matrix Multiplication의 distributive law와 scalar multiplication의 associative law 때문에 이 함수는 additivity와 homogeneity를 모두 만족한다.

## 정리

- Field는 scalar를 계산하는 규칙을 제공한다.
- Vector Space는 vector addition과 scalar multiplication이 안정적으로 이루어지는 공간이다.
- Subspace는 같은 operation structure를 유지하는 Vector Space의 subset이다.
- Linear Map은 vector addition과 scalar multiplication을 보존하는 함수이다.
- matrix는 finite-dimensional Linear Map을 구체적으로 표현한다.

각 개념은 결국 **Linear Combination을 보존하는 공간과 함수**를 설명하기 위해 연결된다.

## 확인 문제

1. $S=\lbrace(x,y)\in\mathbb{R}^2:x+y=0\rbrace$가 $\mathbb{R}^2$의 Subspace인지 확인한다.
2. $T(x,y)=(xy,x+y)$가 $\mathbb{R}^2\to\mathbb{R}^2$의 Linear Map인지 확인한다.

<details>
<summary>정답 보기</summary>

### 1번

$S$에는 $(0,0)$이 포함된다. $(x_1,y_1),(x_2,y_2)\in S$이면

<div class="math-display">
\[
(x_1+x_2)+(y_1+y_2)=0
\]
</div>

이므로 sum도 $S$에 속한다. 또한 $a\in\mathbb{R}$에 대해

<div class="math-display">
\[
a x_1+a y_1=a(x_1+y_1)=0
\]
</div>

이므로 scalar multiple도 $S$에 속한다. 따라서 $S$는 Subspace이다.

### 2번

Linear Map이 아니다. 예를 들어 $\mathbf{u}=(1,0)$, $\mathbf{v}=(0,1)$로 두면

<div class="math-display">
\[
T(\mathbf{u})+T(\mathbf{v})=(0,1)+(0,1)=(0,2)
\]
</div>

이지만

<div class="math-display">
\[
T(\mathbf{u}+\mathbf{v})=T(1,1)=(1,2)
\]
</div>

이다. additivity가 성립하지 않는다.

</details>

---

**Linear Algebra 정리 시리즈** · 1/5 · [다음: 자주 사용하는 Matrix의 종류 →](/posts/linear-algebra-02-matrix-types/)
