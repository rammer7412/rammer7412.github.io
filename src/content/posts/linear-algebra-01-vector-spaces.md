---
title: "선형대수학 1: 벡터 공간과 선형 사상"
description: "체, 벡터 공간, 부분공간과 선형성의 정의를 연결해 선형대수학의 출발점을 정리한다."
date: "2025-06-28"
category: "선형대수학"
tags: ["linear-algebra", "vector-space", "subspace", "linear-map"]
domain: "math"
format: "study-note"
featured: false
draft: false
---

선형대수학을 처음 공부할 때 가장 낯설었던 부분은 벡터 자체보다 **벡터 공간의 정의**였다. 벡터를 화살표나 좌표로만 이해하면 계산은 할 수 있지만, 함수와 행렬을 하나의 구조로 묶어 이해하기는 어렵다.

이 글에서는 체에서 출발해 벡터 공간, 부분공간, 선형성과 선형 사상으로 이어지는 흐름을 정리한다.

## 체(Field)

체 $F$는 덧셈과 곱셈이 정의된 집합이며, 두 연산이 익숙한 산술 법칙을 만족하는 대수 구조이다. 핵심 조건은 다음과 같이 묶어볼 수 있다.

- 덧셈과 곱셈에 대해 교환법칙과 결합법칙이 성립한다.
- 곱셈은 덧셈에 대해 분배법칙을 만족한다.
- 덧셈의 항등원 $0$과 곱셈의 항등원 $1$이 존재한다.
- 모든 원소는 덧셈의 역원을 가진다.
- $0$이 아닌 모든 원소는 곱셈의 역원을 가진다.

대표적인 예는 다음과 같다.

$$
\mathbb{Q}, \qquad \mathbb{R}, \qquad \mathbb{C}
$$

소수 $p$에 대한 $\mathbb{Z}_p$도 체가 된다. 벡터 공간에서 벡터의 성분과 스칼라는 보통 이러한 체의 원소로 잡는다.

## 벡터 공간(Vector Space)

체 $F$ 위의 벡터 공간 $V$는 벡터 덧셈과 스칼라 곱이 정의된 집합이다. 모든 $\mathbf{u},\mathbf{v},\mathbf{w}\in V$와 $a,b\in F$에 대해 다음 성질이 성립한다.

$$
\mathbf{u}+\mathbf{v}=\mathbf{v}+\mathbf{u}
$$

$$
(\mathbf{u}+\mathbf{v})+\mathbf{w}=\mathbf{u}+(\mathbf{v}+\mathbf{w})
$$

$$
\mathbf{v}+\mathbf{0}=\mathbf{v},
\qquad
\mathbf{v}+(-\mathbf{v})=\mathbf{0}
$$

$$
a(\mathbf{u}+\mathbf{v})=a\mathbf{u}+a\mathbf{v}
$$

$$
(a+b)\mathbf{v}=a\mathbf{v}+b\mathbf{v}
$$

$$
(ab)\mathbf{v}=a(b\mathbf{v}),
\qquad
1\mathbf{v}=\mathbf{v}
$$

공리의 수가 많아 보이지만, 핵심은 **벡터를 더하거나 스칼라배해도 같은 공간 안에 남고, 그 연산이 일반적인 산술과 모순되지 않는다**는 것이다.

가장 익숙한 예는 $\mathbb{R}^n$이다. 다항식 집합이나 행렬 집합도 적절한 연산을 정의하면 벡터 공간이 된다.

## 부분공간(Subspace)

$S$가 벡터 공간 $V$의 부분집합이라고 하자. $S$가 다음 세 조건을 만족하면 $V$의 부분공간이다.

1. $\mathbf{0}\in S$
2. $\mathbf{x},\mathbf{y}\in S$이면 $\mathbf{x}+\mathbf{y}\in S$
3. $\mathbf{x}\in S$, $a\in F$이면 $a\mathbf{x}\in S$

두 번째와 세 번째 조건은 각각 덧셈과 스칼라 곱에 대해 닫혀 있다는 뜻이다.

예를 들어

$$
S=\{(x,y)\in\mathbb{R}^2:x+y=0\}
$$

은 $\mathbb{R}^2$의 부분공간이다. 영벡터가 포함되고, 조건을 만족하는 두 벡터의 합과 스칼라배도 다시 $x+y=0$을 만족한다.

반면

$$
S=\{(x,y)\in\mathbb{R}^2:x+y=3\}
$$

은 부분공간이 아니다. $(0,0)$이 포함되지 않기 때문이다. 원점을 지나지 않는 직선은 $\mathbb{R}^2$의 부분공간이 될 수 없다는 직관과도 연결된다.

## 선형성(Linearity)

함수 $T$가 다음 두 성질을 만족하면 선형이라고 한다.

$$
T(\mathbf{x}+\mathbf{y})=T(\mathbf{x})+T(\mathbf{y})
$$

$$
T(a\mathbf{x})=aT(\mathbf{x})
$$

첫 번째는 가법성(additivity), 두 번째는 동차성(homogeneity)이다. 두 식을 합치면 다음과 같이 쓸 수 있다.

$$
T(a\mathbf{x}+b\mathbf{y})
=aT(\mathbf{x})+bT(\mathbf{y})
$$

즉 선형 함수는 선형결합을 보존한다.

선형성에서 바로 따라오는 중요한 성질도 있다.

$$
T(\mathbf{0})=\mathbf{0}
$$

따라서 원점을 원점이 아닌 곳으로 보내는 함수는 선형일 수 없다.

## 선형 사상과 행렬

벡터 공간 $V$와 $W$ 사이의 함수

$$
T:V\to W
$$

가 선형성을 만족하면 $T$를 선형 사상(linear map)이라고 한다.

유한차원 공간에서는 행렬이 선형 사상을 표현하는 대표적인 도구이다. 행렬

$$
A=
\begin{bmatrix}
1&2\\
0&-1
\end{bmatrix}
$$

와 벡터

$$
\mathbf{x}=
\begin{bmatrix}
x_1\\x_2
\end{bmatrix}
$$

를 생각하면, $T(\mathbf{x})=A\mathbf{x}$는 다음과 같다.

$$
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
$$

행렬 곱셈의 분배법칙과 스칼라 결합법칙 때문에 이 함수는 가법성과 동차성을 모두 만족한다.

## 정리

이번 내용의 연결 관계는 다음과 같다.

- 체는 스칼라가 계산되는 규칙을 제공한다.
- 벡터 공간은 벡터 덧셈과 스칼라 곱이 안정적으로 이루어지는 공간이다.
- 부분공간은 같은 연산 구조를 유지하는 벡터 공간의 부분집합이다.
- 선형 사상은 벡터의 덧셈과 스칼라 곱을 보존하는 함수이다.
- 행렬은 유한차원 선형 사상을 구체적으로 표현한다.

처음에는 각각 별개의 정의처럼 보이지만, 결국 **선형결합을 보존하는 공간과 함수**를 설명하기 위한 개념들이다.

## 확인 문제

1. $S=\{(x,y)\in\mathbb{R}^2:x+y=0\}$가 $\mathbb{R}^2$의 부분공간인지 확인한다.
2. $T(x,y)=(xy,x+y)$가 $\mathbb{R}^2\to\mathbb{R}^2$의 선형 사상인지 확인한다.

<details>
<summary>정답 보기</summary>

### 1번

$S$에는 $(0,0)$이 포함된다. $(x_1,y_1),(x_2,y_2)\in S$이면

$$
(x_1+x_2)+(y_1+y_2)=0
$$

이므로 합도 $S$에 속한다. 또한 $a\in\mathbb{R}$에 대해

$$
a x_1+a y_1=a(x_1+y_1)=0
$$

이므로 스칼라배도 $S$에 속한다. 따라서 $S$는 부분공간이다.

### 2번

선형 사상이 아니다. 예를 들어 $\mathbf{u}=(1,0)$, $\mathbf{v}=(0,1)$로 두면

$$
T(\mathbf{u})+T(\mathbf{v})=(0,1)+(0,1)=(0,2)
$$

이지만

$$
T(\mathbf{u}+\mathbf{v})=T(1,1)=(1,2)
$$

이다. 가법성이 성립하지 않는다.

</details>

---

**선형대수학 정리 시리즈** · 1/5 · [다음: 자주 사용하는 행렬의 종류 →](/posts/linear-algebra-02-matrix-types/)
