---
title: "9. 일변량 Transformation"
description: "하나의 Random Variable에 함수를 적용했을 때 새로운 PMF 또는 PDF를 구하는 방법을 정리한다."
date: "2025-07-08"
category: "확률 이론"
tags: ["probability-theory", "univariate-transformation", "change-of-variables", "cdf-method"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Random Variable <span class="math-inline" data-tex="X"></span>에 함수 <span class="math-inline" data-tex="g"></span>를 적용하면 새로운 Random Variable <span class="math-inline" data-tex="Y=g(X)"></span>를 얻는다. 이를 Transformation이라고 한다. 핵심은 원래 값의 확률을 새로운 값에 빠짐없이 옮기는 것이다.

## 이산형 Transformation

이산형에서는 같은 <span class="math-inline" data-tex="y"></span>를 만드는 모든 <span class="math-inline" data-tex="x"></span>의 확률을 더한다.

<div class="math-display">
\[
p_Y(y)
=
\sum_{x:g(x)=y}p_X(x)
\]
</div>

여기서 <span class="math-inline" data-tex="\{x:g(x)=y\}"></span>는 <span class="math-inline" data-tex="y"></span>의 원상(preimage), 즉 함수 <span class="math-inline" data-tex="g"></span>를 적용했을 때 <span class="math-inline" data-tex="y"></span>가 되는 원래 값들의 집합이다.

### 절댓값 예시

<span class="math-inline" data-tex="X"></span>의 PMF가

<div class="math-display">
\[
\mathbb{P}(X=-1)=\frac14,
\quad
\mathbb{P}(X=0)=\frac14,
\quad
\mathbb{P}(X=1)=\frac12
\]
</div>

이고 <span class="math-inline" data-tex="Y=|X|"></span>라 하자. <span class="math-inline" data-tex="Y=0"></span>은 <span class="math-inline" data-tex="X=0"></span>에서만 나오지만, <span class="math-inline" data-tex="Y=1"></span>은 <span class="math-inline" data-tex="X=-1"></span>과 <span class="math-inline" data-tex="X=1"></span>에서 나온다.

<div class="math-display">
\[
\mathbb{P}(Y=0)=\frac14
\]
</div>

<div class="math-display">
\[
\mathbb{P}(Y=1)=\frac14+\frac12=\frac34
\]
</div>

## 단조인 연속 Transformation

<span class="math-inline" data-tex="g"></span>가 지지집합에서 일대일이고 미분 가능한 역함수 <span class="math-inline" data-tex="g^{-1}"></span>를 가진다고 하자. <span class="math-inline" data-tex="Y=g(X)"></span>의 PDF는

<div class="math-display">
\[
f_Y(y)
=
f_X\!\left(g^{-1}(y)\right)
\left|\frac{d}{dy}g^{-1}(y)\right|
\]
</div>

이다.

절댓값이 붙은 미분 항은 구간의 길이가 Transformation 과정에서 얼마나 늘어나거나 줄어드는지를 보정한다. 확률 자체는 보존되어야 하므로 밀도는 길이 변화의 역수만큼 바뀐다.

예를 들어 <span class="math-inline" data-tex="Y=aX+b"></span>이고 <span class="math-inline" data-tex="a\ne0"></span>이면

<div class="math-display">
\[
f_Y(y)
=
\frac1{|a|}
 f_X\!\left(\frac{y-b}{a}\right)
\]
</div>

이다.

## 일대일이 아닌 경우

같은 <span class="math-inline" data-tex="y"></span>에 여러 <span class="math-inline" data-tex="x"></span>가 대응하면 각 역함수 가지의 기여를 더한다.

<div class="math-display">
\[
f_Y(y)
=
\sum_{x_i:g(x_i)=y}
\frac{f_X(x_i)}{|g'(x_i)|}
\]
</div>

### Half-Normal 예시

<span class="math-inline" data-tex="X\sim\mathcal{N}(0,1)"></span>이고 <span class="math-inline" data-tex="Y=|X|"></span>라 하자. <span class="math-inline" data-tex="y&gt;0"></span>에서 <span class="math-inline" data-tex="x=y"></span>와 <span class="math-inline" data-tex="x=-y"></span> 두 값이 같은 <span class="math-inline" data-tex="y"></span>를 만든다.

<div class="math-display">
\[
f_Y(y)
=
f_X(y)+f_X(-y)
=
\sqrt{\frac{2}{\pi}}e^{-y^2/2},
\qquad y\ge0
\]
</div>

이다.

## CDF 방법

함수가 복잡하거나 단조 구간을 나누기 어려울 때는 먼저 CDF를 구할 수 있다.

<div class="math-display">
\[
F_Y(y)
=
\mathbb{P}(g(X)\le y)
\]
</div>

사건을 <span class="math-inline" data-tex="X"></span>에 대한 부등식으로 바꾼 뒤 원래 CDF로 계산하고, 필요하면 미분하여 PDF를 얻는다.

예를 들어 <span class="math-inline" data-tex="Y=X^2"></span>이면 <span class="math-inline" data-tex="y\ge0"></span>에서

<div class="math-display">
\[
F_Y(y)
=
\mathbb{P}(-\sqrt{y}\le X\le\sqrt{y})
=
F_X(\sqrt{y})-F_X(-\sqrt{y})
\]
</div>

이다.

## 지지집합 확인

Transformation 문제에서는 식뿐 아니라 새로운 Random Variable이 가질 수 있는 값의 범위를 함께 구해야 한다. 원래 지지집합을 함수 <span class="math-inline" data-tex="g"></span>로 보낸 결과가 새로운 지지집합이다. 범위를 잘못 잡으면 적분값이 1이 되지 않거나 존재하지 않는 값에 양의 밀도를 주게 된다.

## 정리

이산형에서는 같은 출력값의 확률을 합한다. 연속형에서는 역함수와 미분을 이용해 밀도를 보정한다. 일대일이 아니면 가능한 모든 역함수 가지를 더하며, 항상 새로운 지지집합을 먼저 확인해야 한다.

## 연습 문제

1. 주어진 이산 PMF에서 <span class="math-inline" data-tex="Y=X^2"></span>의 PMF를 구한다.
2. <span class="math-inline" data-tex="X\sim\mathcal{N}(0,1)"></span>에서 <span class="math-inline" data-tex="Y=X^2"></span>의 PDF를 구한다.
3. 연속 CDF <span class="math-inline" data-tex="F_X"></span>가 엄격히 증가할 때 <span class="math-inline" data-tex="F_X(X)\sim\operatorname{Unif}(0,1)"></span>임을 보인다.

---

**확률 이론 정리 시리즈** · 9/11 · [← 이전: 8. Moment와 MGF](/posts/probability-theory-08-moment-generating-function/) · [다음: 10. 다변량 Random Variable과 Joint Distribution →](/posts/probability-theory-10-multivariate-random-variable/)
