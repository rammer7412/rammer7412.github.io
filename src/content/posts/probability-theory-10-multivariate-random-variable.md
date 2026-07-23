---
title: "10. Multivariate Random Variable과 Joint Distribution"
description: "Vector-valued Random Variable, Joint PMF·PDF, Marginal Distribution과 Joint CDF의 관계를 정리한다."
date: "2025-08-12"
category: "확률 이론"
tags: ["probability-theory", "multivariate-random-variable", "joint-distribution", "marginal-distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

여러 특성을 동시에 다루려면 Random Variable을 vector로 묶어야 한다. Multivariate Random Variable은 개별 component의 distribution뿐 아니라 component 사이의 dependence를 joint distribution으로 표현한다.

## Multivariate Random Variable

<span class="math-inline">\(n\)</span>차원 Random Vector는

<div class="math-display">
\[
\mathbf{X}
=
\begin{bmatrix}
X_1\\
X_2\\
\vdots\\
X_n
\end{bmatrix}
\]
</div>

로 쓴다. 각 <span class="math-inline">\(X_i\)</span>는 같은 sample space 위에 정의된 Random Variable이다.

예를 들어 height와 weight를 함께 나타내는 vector, 여러 과목의 score vector 등이 있다.

## Joint PMF와 Joint PDF

Discrete bivariate case에서는

<div class="math-display">
\[
p_{X,Y}(x,y)
=
\mathbb{P}(X=x,Y=y)
\]
</div>

이다. 모든 support에 대해 합하면 1이 된다.

<div class="math-display">
\[
\sum_x\sum_y p_{X,Y}(x,y)=1
\]
</div>

Continuous case의 Joint PDF는

<div class="math-display">
\[
\mathbb{P}((X,Y)\in A)
=
\iint_A f_{X,Y}(x,y)\,dx\,dy
\]
</div>

를 만족한다.

<div class="math-display">
\[
\iint_{\mathbb{R}^2}f_{X,Y}(x,y)\,dx\,dy=1
\]
</div>

## Joint CDF

Joint CDF는

<div class="math-display">
\[
F_{X,Y}(x,y)
=
\mathbb{P}(X\le x,Y\le y)
\]
</div>

이다. Smooth한 continuous distribution에서는

<div class="math-display">
\[
f_{X,Y}(x,y)
=
\frac{\partial^2}{\partial x\,\partial y}F_{X,Y}(x,y)
\]
</div>

로 Joint PDF를 얻는다.

## Marginal Distribution

Joint distribution에서 다른 variable을 sum 또는 integrate out하면 marginal distribution을 얻는다.

Discrete case:

<div class="math-display">
\[
p_X(x)=\sum_y p_{X,Y}(x,y),
\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y)
\]
</div>

Continuous case:

<div class="math-display">
\[
f_X(x)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)\,dy
\]
</div>

<div class="math-display">
\[
f_Y(y)=\int_{-\infty}^{\infty}f_{X,Y}(x,y)\,dx
\]
</div>

## Support가 중요한 예시

Joint PDF가

<div class="math-display">
\[
f_{X,Y}(x,y)=
\begin{cases}
e^{-y},&0<x<y,\\
0,&\text{otherwise}
\end{cases}
\]
</div>

라고 하자. 고정된 <span class="math-inline">\(x>0\)</span>에 대해 condition <span class="math-inline">\(0<x<y\)</span>는 <span class="math-inline">\(y\in(x,\infty)\)</span>를 의미한다. 따라서

<div class="math-display">
\[
\begin{aligned}
f_X(x)
&=\int_x^{\infty}e^{-y}\,dy\\
&=e^{-x},
\qquad x>0.
\end{aligned}
\]
</div>

최종 Marginal PDF는

<div class="math-display">
\[
f_X(x)=
\begin{cases}
e^{-x},&x>0,\\
0,&\text{otherwise}.
\end{cases}
\]
</div>

이다. Multivariate integral에서는 integrand보다 support를 먼저 그리는 편이 오류를 줄인다.

## Independence

<span class="math-inline">\(X\)</span>와 <span class="math-inline">\(Y\)</span>가 independent일 필요충분조건은 joint distribution이 marginal product로 factorize되는 것이다.

<div class="math-display">
\[
p_{X,Y}(x,y)=p_X(x)p_Y(y)
\]
</div>

또는 continuous case에서

<div class="math-display">
\[
f_{X,Y}(x,y)=f_X(x)f_Y(y)
\]
</div>

가 support 전체에서 성립해야 한다.

## 연습 문제

1. <span class="math-inline">\(f_{X,Y}(x,y)=kxy e^{-y^2/4}\)</span> on <span class="math-inline">\(0<x<1,y>0\)</span>가 Joint PDF가 되도록 <span class="math-inline">\(k\)</span>를 구하고 <span class="math-inline">\(f_X\)</span>를 계산한다.
2. <span class="math-inline">\(F_{X,Y}(x,y)=(1-e^{-\lambda x})(1-e^{-\mu y})\)</span> on <span class="math-inline">\(x,y\ge0\)</span>에서 Joint PDF와 Marginal PDF를 구한다.

---

**확률 이론 정리 시리즈** · 10/11 · [← 이전: 9. Univariate Transformation](/posts/probability-theory-09-univariate-transformation/) · [다음: 11. Multivariate Transformation →](/posts/probability-theory-11-multivariate-transformation/)
