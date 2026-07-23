---
title: "선형대수학 5: Span, Basis와 Dimension"
description: "벡터들이 생성하는 공간인 Span과 기저의 조건을 정리하고, 차원이 무엇을 세는 값인지 이해한다."
date: "2025-07-18"
category: "선형대수학"
tags: ["linear-algebra", "span", "basis", "dimension", "linear-independence"]
domain: "math"
format: "study-note"
featured: false
draft: false
---

선형결합을 이해하면 자연스럽게 다음 질문이 생긴다. 주어진 벡터들을 조합해 어느 범위까지 만들 수 있는가, 그리고 그 공간을 중복 없이 표현하려면 몇 개의 벡터가 필요한가.

Span은 첫 번째 질문에, Basis와 Dimension은 두 번째 질문에 답한다.

## Span

벡터 $\mathbf{v}_1,\ldots,\mathbf{v}_k$의 모든 선형결합으로 이루어진 집합을 이 벡터들의 Span이라고 한다.

$$
\operatorname{span}\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}
=
\left\{
\sum_{i=1}^k c_i\mathbf{v}_i
\mid c_i\in\mathbb{R}
\right\}
$$

Span은 항상 부분공간이다. 영벡터는 모든 계수를 $0$으로 두면 얻을 수 있고, 선형결합끼리 더하거나 스칼라배해도 다시 같은 벡터들의 선형결합이 되기 때문이다.

### $\mathbb{R}^2$를 생성하는 예

$$
\mathbf{e}_1=
\begin{bmatrix}1\\\\0\end{bmatrix},
\qquad
\mathbf{e}_2=
\begin{bmatrix}0\\\\1\end{bmatrix}
$$

를 생각하면

$$
c_1\mathbf{e}_1+c_2\mathbf{e}_2
=
\begin{bmatrix}c_1\\\\c_2\end{bmatrix}
$$

이므로

$$
\operatorname{span}\{\mathbf{e}_1,\mathbf{e}_2\}
=\mathbb{R}^2
$$

이다.

반면 $(1,0)$과 $(2,0)$의 선형결합은 항상 $x$축 위에만 놓인다. 두 벡터가 서로 다른 두 개의 벡터이더라도 같은 방향을 가리키면 $\mathbb{R}^2$ 전체를 만들 수 없다.

## Basis

벡터 공간 $V$의 부분집합 $B=\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}$가 다음 두 조건을 만족하면 $V$의 기저라고 한다.

1. $B$는 선형독립이다.
2. $B$는 $V$를 Span한다.

첫 번째 조건은 불필요한 중복이 없다는 뜻이고, 두 번째 조건은 공간 전체를 표현할 만큼 충분하다는 뜻이다.

기저를 다음 두 관점으로도 이해할 수 있다.

- $V$를 생성하는 최소한의 벡터 집합
- 더 이상 벡터를 추가하지 않아도 되는 최대 선형독립 집합

$\mathbb{R}^2$의 표준기저는

$$
\left\{
\begin{bmatrix}1\\\\0\end{bmatrix},
\begin{bmatrix}0\\\\1\end{bmatrix}
\right\}
$$

이다. 그러나 기저가 이것 하나로 정해지는 것은 아니다. 예를 들어

$$
\left\{
\begin{bmatrix}2\\\\0\end{bmatrix},
\begin{bmatrix}1\\\\-1\end{bmatrix}
\right\}
$$

도 두 벡터가 선형독립이고 $\mathbb{R}^2$를 생성하므로 기저이다.

## Dimension

벡터 공간 $V$의 기저에 포함된 벡터의 개수를 $V$의 차원이라고 한다.

$$
\dim(V)=k
$$

는 $V$의 모든 기저가 $k$개의 벡터로 이루어진다는 뜻이다.

기저 자체는 여러 가지일 수 있지만, 유한차원 벡터 공간의 모든 기저는 같은 개수의 벡터를 가진다. 따라서 차원은 선택한 기저와 무관하다.

### 종속 벡터가 포함된 생성 집합

$$
W=\operatorname{span}\left\{
\begin{bmatrix}1\\\\2\\\\3\end{bmatrix},
\begin{bmatrix}2\\\\4\\\\6\end{bmatrix}
\right\}
$$

에서 두 번째 벡터는 첫 번째 벡터의 두 배이다.

$$
\begin{bmatrix}2\\\\4\\\\6\end{bmatrix}
=2
\begin{bmatrix}1\\\\2\\\\3\end{bmatrix}
$$

따라서 두 번째 벡터를 제거해도 Span이 변하지 않는다. $W$의 기저는 하나의 벡터만으로 구성할 수 있으므로

$$
\dim(W)=1
$$

이다.

## Span과 행렬의 열공간

벡터들을 행렬의 열로 모으면 Span과 선형독립을 가우스 소거법으로 확인할 수 있다.

$$
A=
\begin{bmatrix}
|&|&&|\\\\
\mathbf{v}_1&\mathbf{v}_2&\cdots&\mathbf{v}_k\\\\
|&|&&|
\end{bmatrix}
$$

이때 $A$의 열공간(column space)은

$$
\operatorname{Col}(A)
=\operatorname{span}\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}
$$

이다. 행 소거 후 피벗 열의 개수는 열공간의 차원, 즉 행렬의 랭크와 같다.

단, 기저를 원래 열벡터에서 고를 때는 소거된 행렬의 열이 아니라 **원래 행렬에서 피벗 위치에 대응하는 열**을 선택해야 한다.

## 정리

- Span은 주어진 벡터들의 모든 선형결합이다.
- 기저는 공간을 생성하면서 선형독립인 벡터 집합이다.
- 차원은 기저 벡터의 개수이다.
- 생성 벡터가 많다고 차원이 큰 것은 아니다. 선형종속인 벡터는 새로운 방향을 추가하지 않는다.
- 행렬에서는 피벗의 개수로 열공간의 차원을 확인할 수 있다.

## 확인 문제

### 1

다음 벡터들이 생성하는 공간 $W$의 차원을 구한다.

$$
\mathbf{v}_1=
\begin{bmatrix}1\\\\0\\\\-1\end{bmatrix},
\qquad
\mathbf{v}_2=
\begin{bmatrix}-2\\\\1\\\\1\end{bmatrix},
\qquad
\mathbf{v}_3=
\begin{bmatrix}0\\\\0\\\\-1\end{bmatrix}
$$

$$
W=\operatorname{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3\}
$$

### 2

다음 명제가 참인지 판단한다.

> $(\mathbf{x}_1,\ldots,\mathbf{x}_n)$이 벡터 공간 $V$를 Span하면 $\dim(V)=n$이다.

<details>
<summary>정답 보기</summary>

### 1번

세 벡터를 열로 둔 행렬은

$$
A=
\begin{bmatrix}
1&-2&0\\\\
0&1&0\\\\
-1&1&-1
\end{bmatrix}
$$

이다. 이 행렬의 행렬식은 $-1$로 $0$이 아니므로 세 열벡터는 선형독립이다. 따라서

$$
\dim(W)=3
$$

이다.

### 2번

거짓이다. Span하는 벡터 집합에 선형종속인 벡터가 포함될 수 있기 때문이다.

예를 들어 $\mathbb{R}^2$에서

$$
(1,0),\quad(0,1),\quad(1,0)
$$

은 $\mathbb{R}^2$를 Span하지만 벡터는 세 개이고 차원은 $2$이다. 일반적으로 Span하는 벡터가 $n$개라면

$$
\dim(V)\le n
$$

이다.

</details>

---

**선형대수학 정리 시리즈** · 5/5 · [← 이전: 가우스 소거법과 연립방정식의 해](/posts/linear-algebra-04-gaussian-elimination/)
