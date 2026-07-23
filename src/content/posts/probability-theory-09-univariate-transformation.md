---
title: "9. Univariate Transformation"
description: "Discrete와 Continuous Random Variable을 함수로 변환할 때 새로운 PMF와 PDF를 구하는 방법을 정리한다."
date: "2025-07-08"
category: "확률 이론"
tags: ["probability-theory", "univariate-transformation", "change-of-variables", "jacobian"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Random Variable <span class="math-inline">\(X\)</span>에 함수 <span class="math-inline">\(g\)</span>를 적용하면 새로운 Random Variable <span class="math-inline">\(Y=g(X)\)</span>를 얻는다. Discrete case에서는 같은 output으로 mapping되는 probability를 더하고, Continuous case에서는 inverse derivative로 density를 보정한다.

## Discrete Transformation

Discrete Random Variable에서 <span class="math-inline">\(Y=g(X)\)</span>의 PMF는

<div class="math-display">
\[
\mathbb{P}(Y=y)
=
\sum_{x:g(x)=y}\mathbb{P}(X=x)
\]
</div>

이다. Function이 one-to-one일 필요가 없으므로 같은 <span class="math-inline">\(y\)</span>를 만드는 모든 <span class="math-inline">\(x\)</span>의 probability를 합한다.

### Absolute Value 예시

<span class="math-inline">\(X\)</span>의 PMF가

<div class="math-display">
\[
\begin{array}{c|ccccc}
x&-2&-1&0&1&2\\\hline
p_X(x)&0.2&0.1&0.4&0.2&0.1
\end{array}
\]
</div>

이고 <span class="math-inline">\(Y=|X|\)</span>라 하자. 그러면

<div class="math-display">
\[
\mathbb{P}(Y=0)=0.4
\]
</div>

<div class="math-display">
\[
\mathbb{P}(Y=1)=0.1+0.2=0.3
\]
</div>

<div class="math-display">
\[
\mathbb{P}(Y=2)=0.2+0.1=0.3
\]
</div>

이다.

## Continuous Transformation: Monotone Case

<span class="math-inline">\(Y=g(X)\)</span>이고 <span class="math-inline">\(g\)</span>가 monotone이며 inverse <span class="math-inline">\(g^{-1}\)</span>가 differentiable하다고 하자. 그러면

<div class="math-display">
\[
f_Y(y)
=
f_X(g^{-1}(y))
\left|\frac{d}{dy}g^{-1}(y)\right|
\]
</div>

이다. Density는 interval length가 변하는 정도만큼 Jacobian factor로 보정된다.

Equivalent form은

<div class="math-display">
\[
f_Y(y)=f_X(x)\left|\frac{dx}{dy}\right|,
\qquad x=g^{-1}(y)
\]
</div>

이다.

## Many-to-One Transformation

<span class="math-inline">\(g\)</span>가 전체 support에서 monotone하지 않으면 같은 <span class="math-inline">\(y\)</span>에 여러 inverse branch가 대응한다. 이때 각 branch의 contribution을 합한다.

<div class="math-display">
\[
f_Y(y)
=
\sum_{x_i:g(x_i)=y}
f_X(x_i)\left|\frac{dx_i}{dy}\right|
\]
</div>

### Half-Normal 예시

<span class="math-inline">\(X\sim\mathcal{N}(0,1)\)</span>이고 <span class="math-inline">\(Y=|X|\)</span>라 하자. <span class="math-inline">\(y>0\)</span>에 대해 inverse branch는 <span class="math-inline">\(x=y\)</span>와 <span class="math-inline">\(x=-y\)</span>이다.

<div class="math-display">
\[
f_Y(y)=f_X(y)+f_X(-y)
\]
</div>

Standard Normal PDF는 even function이므로

<div class="math-display">
\[
f_Y(y)=
\begin{cases}
\displaystyle\frac{2}{\sqrt{2\pi}}e^{-y^2/2},&y\ge0,\\
0,&y<0.
\end{cases}
\]
</div>

## CDF Method

Transformation이 복잡할 때는 먼저

<div class="math-display">
\[
F_Y(y)=\mathbb{P}(g(X)\le y)
\]
</div>

를 구한 뒤 derivative를 취하는 방법도 유용하다. Support와 inequality direction을 직접 확인할 수 있다는 장점이 있다.

## 정리

Discrete transformation에서는 preimage의 probability를 합한다. Continuous monotone transformation에서는 inverse derivative를 곱하고, many-to-one mapping에서는 모든 inverse branch의 density를 합한다.

## 연습 문제

1. 주어진 discrete PMF에서 <span class="math-inline">\(Y=X^2\)</span>의 PMF를 구한다.
2. <span class="math-inline">\(X\sim\mathcal{N}(0,1)\)</span>에서 <span class="math-inline">\(Y=X^2\)</span>의 PDF를 구한다.
3. Continuous CDF <span class="math-inline">\(F_X\)</span>가 strictly increasing일 때 <span class="math-inline">\(F_X(X)\sim\operatorname{Unif}(0,1)\)</span>임을 보인다.

---

**확률 이론 정리 시리즈** · 9/11 · [← 이전: 8. Moment와 Moment Generating Function](/posts/probability-theory-08-moment-generating-function/) · [다음: 10. Multivariate Random Variable과 Joint Distribution →](/posts/probability-theory-10-multivariate-random-variable/)
