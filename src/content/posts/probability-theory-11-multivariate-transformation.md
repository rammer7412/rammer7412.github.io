---
title: "11. Multivariate Transformation"
description: "Discrete와 Continuous bivariate transformation을 구분하고 inverse mapping과 Jacobian을 이용한 Joint Distribution 변환을 정리한다."
date: "2025-08-14"
category: "확률 이론"
tags: ["probability-theory", "multivariate-transformation", "jacobian", "joint-distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Multivariate Transformation에서는 여러 Random Variable을 동시에 바꾸므로 inverse mapping과 support를 함께 추적해야 한다. Continuous case에서는 area distortion을 보정하는 Jacobian determinant가 추가된다.

## Discrete Bivariate Transformation

<span class="math-inline">\(U=g_1(X,Y)\)</span>, <span class="math-inline">\(V=g_2(X,Y)\)</span>라 하자. 각 <span class="math-inline">\(u,v\)</span>에 대응하는 preimage를 찾아 Joint PMF를 합한다.

<div class="math-display">
\[
p_{U,V}(u,v)
=
\sum_{(x,y):g_1(x,y)=u,\,g_2(x,y)=v}
p_{X,Y}(x,y)
\]
</div>

One-to-one mapping이면 inverse <span class="math-inline">\(x=h_1(u,v)\)</span>, <span class="math-inline">\(y=h_2(u,v)\)</span>를 직접 대입할 수 있다.

<div class="math-display">
\[
p_{U,V}(u,v)
=
p_{X,Y}(h_1(u,v),h_2(u,v))
\]
</div>

## Poisson Sum 예시

<span class="math-inline">\(X\sim\operatorname{Poisson}(\lambda)\)</span>, <span class="math-inline">\(Y\sim\operatorname{Poisson}(\theta)\)</span>이고 independent라 하자. <span class="math-inline">\(U=X+Y\)</span>이면

<div class="math-display">
\[
\begin{aligned}
\mathbb{P}(U=u)
&=\sum_{x=0}^{u}\mathbb{P}(X=x)\mathbb{P}(Y=u-x)\\
&=e^{-(\lambda+\theta)}
\sum_{x=0}^{u}\frac{\lambda^x\theta^{u-x}}{x!(u-x)!}\\
&=e^{-(\lambda+\theta)}\frac{(\lambda+\theta)^u}{u!}.
\end{aligned}
\]
</div>

따라서

<div class="math-display">
\[
U\sim\operatorname{Poisson}(\lambda+\theta)
\]
</div>

이다.

## Continuous Bivariate Transformation

Transformation

<div class="math-display">
\[
U=g_1(X,Y),
\qquad
V=g_2(X,Y)
\]
</div>

이 one-to-one이고 inverse가

<div class="math-display">
\[
X=h_1(U,V),
\qquad
Y=h_2(U,V)
\]
</div>

라 하자. Joint PDF는

<div class="math-display">
\[
f_{U,V}(u,v)
=
f_{X,Y}(h_1(u,v),h_2(u,v))
\left|
\det\frac{\partial(x,y)}{\partial(u,v)}
\right|
\]
</div>

이다. Jacobian determinant는 coordinate transformation이 local area를 얼마나 늘이거나 줄이는지를 나타낸다.

## Normal Linear Transformation 예시

<span class="math-inline">\(X,Y\)</span>가 independent standard normal이고

<div class="math-display">
\[
U=X+Y,
\qquad
V=X-Y
\]
</div>

라 하자. Inverse transformation은

<div class="math-display">
\[
X=\frac{U+V}{2},
\qquad
Y=\frac{U-V}{2}
\]
</div>

이다. Jacobian absolute value는

<div class="math-display">
\[
\left|
\det
\begin{bmatrix}
\frac12&\frac12\\
\frac12&-\frac12
\end{bmatrix}
\right|
=
\frac12
\]
</div>

이다. 또한

<div class="math-display">
\[
x^2+y^2=\frac{u^2+v^2}{2}
\]
</div>

이므로

<div class="math-display">
\[
f_{U,V}(u,v)
=
\frac{1}{4\pi}
\exp\!\left(-\frac{u^2+v^2}{4}\right)
\]
</div>

를 얻는다. 이는 다음처럼 factorize된다.

<div class="math-display">
\[
f_{U,V}(u,v)
=
\left(\frac{1}{\sqrt{4\pi}}e^{-u^2/4}\right)
\left(\frac{1}{\sqrt{4\pi}}e^{-v^2/4}\right)
\]
</div>

따라서

<div class="math-display">
\[
U\sim\mathcal{N}(0,2),
\qquad
V\sim\mathcal{N}(0,2)
\]
</div>

이며 <span class="math-inline">\(U\)</span>와 <span class="math-inline">\(V\)</span>는 independent이다.

## Transformation 절차

1. 새로운 variable과 inverse mapping을 구한다.
2. 새로운 support를 정확히 변환한다.
3. Discrete case에서는 preimage probability를 합한다.
4. Continuous case에서는 inverse Jacobian absolute value를 곱한다.
5. 필요하면 다른 variable을 integrate out해 marginal distribution을 구한다.

## 연습 문제

1. Independent Gamma variable <span class="math-inline">\(X,Y\)</span>에 대해 <span class="math-inline">\(U=X+Y\)</span>, <span class="math-inline">\(V=X/(X+Y)\)</span>의 Joint PDF를 구한다.
2. Independent Poisson variable <span class="math-inline">\(X,Y\)</span>에 대해 <span class="math-inline">\(U=X+Y\)</span>, <span class="math-inline">\(V=Y\)</span>의 Joint PMF를 구한다.

---

**확률 이론 정리 시리즈** · 11/11 · [← 이전: 10. Multivariate Random Variable과 Joint Distribution](/posts/probability-theory-10-multivariate-random-variable/)
