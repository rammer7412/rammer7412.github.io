---
title: "5. Span, Basis와 Dimension"
description: "vector들이 생성하는 Span과 Basis의 조건을 정리하고, Dimension이 무엇을 세는 값인지 이해한다."
date: "2025-07-18"
category: "선형대수학"
tags: ["linear-algebra", "span", "basis", "dimension", "linear-independence"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

Linear Combination을 이해하면 자연스럽게 다음 질문이 생긴다. 주어진 vector들을 조합해 어느 범위까지 만들 수 있는가, 그리고 그 space를 redundancy 없이 표현하려면 몇 개의 vector가 필요한가.

Span은 첫 번째 질문에, Basis와 Dimension은 두 번째 질문에 답한다.

## Span

vector $\mathbf{v}_1,\ldots,\mathbf{v}_k$의 모든 Linear Combination으로 이루어진 set을 이 vector들의 Span이라고 한다.

<div class="math-display">
\[
\operatorname{span}\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}
=
\left\{
\sum_{i=1}^k c_i\mathbf{v}_i
\mid c_i\in\mathbb{R}
\right\}
\]
</div>

Span은 항상 Subspace이다. zero vector는 모든 coefficient를 $0$으로 두면 얻을 수 있고, Linear Combination끼리 더하거나 scalar multiplication해도 다시 같은 vector들의 Linear Combination이 되기 때문이다.

### R²를 Span하는 예

<div class="math-display">
\[
\mathbf{e}_1=
\begin{bmatrix}1\\0\end{bmatrix},
\qquad
\mathbf{e}_2=
\begin{bmatrix}0\\1\end{bmatrix}
\]
</div>

를 생각하면

<div class="math-display">
\[
c_1\mathbf{e}_1+c_2\mathbf{e}_2
=
\begin{bmatrix}c_1\\c_2\end{bmatrix}
\]
</div>

이므로

<div class="math-display">
\[
\operatorname{span}\{\mathbf{e}_1,\mathbf{e}_2\}
=\mathbb{R}^2
\]
</div>

이다.

반면 $(1,0)$과 $(2,0)$의 Linear Combination은 항상 $x$축 위에만 놓인다. 서로 다른 두 vector라도 같은 direction을 가리키면 $\mathbb{R}^2$ 전체를 Span할 수 없다.

## Basis

Vector Space $V$의 subset $B=\lbrace\mathbf{v}_1,\ldots,\mathbf{v}_k\rbrace$가 다음 두 조건을 만족하면 $V$의 Basis라고 한다.

1. $B$는 linearly independent이다.
2. $B$는 $V$를 Span한다.

첫 번째 조건은 redundancy가 없다는 뜻이고, 두 번째 조건은 space 전체를 표현할 만큼 충분하다는 뜻이다.

Basis는 다음 두 관점으로 이해할 수 있다.

- $V$를 Span하는 minimal vector set
- 더 이상 vector를 추가하지 않아도 되는 maximal linearly independent set

$\mathbb{R}^2$의 Standard Basis는

<div class="math-display">
\[
\left\{
\begin{bmatrix}1\\0\end{bmatrix},
\begin{bmatrix}0\\1\end{bmatrix}
\right\}
\]
</div>

이다. 그러나 Basis가 이것 하나로 정해지는 것은 아니다. 예를 들어

<div class="math-display">
\[
\left\{
\begin{bmatrix}2\\0\end{bmatrix},
\begin{bmatrix}1\\-1\end{bmatrix}
\right\}
\]
</div>

도 두 vector가 linearly independent이고 $\mathbb{R}^2$를 Span하므로 Basis이다.

## Dimension

Vector Space $V$의 Basis에 포함된 vector의 개수를 $V$의 Dimension이라고 한다.

<div class="math-display">
\[
\dim(V)=k
\]
</div>

는 $V$의 모든 Basis가 $k$개의 vector로 이루어진다는 뜻이다.

Basis 자체는 여러 가지일 수 있지만, finite-dimensional Vector Space의 모든 Basis는 같은 개수의 vector를 가진다. 따라서 Dimension은 선택한 Basis와 무관하다.

### Linearly Dependent Vector가 포함된 Spanning Set

<div class="math-display">
\[
W=\operatorname{span}\left\{
\begin{bmatrix}1\\2\\3\end{bmatrix},
\begin{bmatrix}2\\4\\6\end{bmatrix}
\right\}
\]
</div>

에서 두 번째 vector는 첫 번째 vector의 두 배이다.

<div class="math-display">
\[
\begin{bmatrix}2\\4\\6\end{bmatrix}
=2
\begin{bmatrix}1\\2\\3\end{bmatrix}
\]
</div>

따라서 두 번째 vector를 제거해도 Span이 변하지 않는다. $W$의 Basis는 하나의 vector만으로 구성할 수 있으므로

<div class="math-display">
\[
\dim(W)=1
\]
</div>

이다.

## Span과 Column Space

vector들을 matrix의 column으로 모으면 Span과 Linear Independence를 Gaussian Elimination으로 확인할 수 있다.

<div class="math-display">
\[
A=
\begin{bmatrix}
|&|&&|\\
\mathbf{v}_1&\mathbf{v}_2&\cdots&\mathbf{v}_k\\
|&|&&|
\end{bmatrix}
\]
</div>

이때 $A$의 Column Space는

<div class="math-display">
\[
\operatorname{Col}(A)
=\operatorname{span}\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}
\]
</div>

이다. row reduction 후 pivot column의 개수는 Column Space의 Dimension, 즉 matrix의 rank와 같다.

단, Basis를 원래 column vector에서 고를 때는 reduced matrix의 column이 아니라 **original matrix에서 pivot position에 대응하는 column**을 선택해야 한다.

## 정리

- Span은 주어진 vector들의 모든 Linear Combination이다.
- Basis는 space를 Span하면서 linearly independent인 vector set이다.
- Dimension은 Basis vector의 개수이다.
- spanning vector가 많아도 linearly dependent한 vector는 새로운 direction을 추가하지 않는다.
- matrix에서는 pivot의 개수로 Column Space의 Dimension과 rank를 확인할 수 있다.

## 확인 문제

### 1

다음 vector들이 Span하는 space $W$의 Dimension을 구한다.

<div class="math-display">
\[
\mathbf{v}_1=
\begin{bmatrix}1\\0\\-1\end{bmatrix},
\qquad
\mathbf{v}_2=
\begin{bmatrix}-2\\1\\1\end{bmatrix},
\qquad
\mathbf{v}_3=
\begin{bmatrix}0\\0\\-1\end{bmatrix}
\]
</div>

<div class="math-display">
\[
W=\operatorname{span}\{\mathbf{v}_1,\mathbf{v}_2,\mathbf{v}_3\}
\]
</div>

### 2

다음 명제가 참인지 판단한다.

> $(\mathbf{x}_1,\ldots,\mathbf{x}_n)$이 Vector Space $V$를 Span하면 $\dim(V)=n$이다.

<details>
<summary>정답 보기</summary>

### 1번

세 vector를 column으로 둔 matrix는

<div class="math-display">
\[
A=
\begin{bmatrix}
1&-2&0\\
0&1&0\\
-1&1&-1
\end{bmatrix}
\]
</div>

이다. 이 matrix의 determinant는 $-1$로 $0$이 아니므로 세 column vector는 linearly independent이다. 따라서

<div class="math-display">
\[
\dim(W)=3
\]
</div>

이다.

### 2번

거짓이다. spanning set에 linearly dependent한 vector가 포함될 수 있기 때문이다.

예를 들어 $\mathbb{R}^2$에서

<div class="math-display">
\[
(1,0),\quad(0,1),\quad(1,0)
\]
</div>

은 $\mathbb{R}^2$를 Span하지만 vector는 세 개이고 Dimension은 $2$이다. 일반적으로 $n$개의 vector가 $V$를 Span하면

<div class="math-display">
\[
\dim(V)\le n
\]
</div>

이다.

</details>

---

**Linear Algebra 정리 시리즈** · 5/5 · [← 이전: Gaussian Elimination과 Linear System의 해](/posts/linear-algebra-04-gaussian-elimination/)
