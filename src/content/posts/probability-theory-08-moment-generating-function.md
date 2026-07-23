---
title: "8. Moment와 MGF"
description: "Moment의 의미와 Moment Generating Function의 정의, 미분을 통한 Moment 계산, 독립합의 성질을 정리한다."
date: "2025-07-04"
category: "확률 이론"
tags: ["probability-theory", "moment", "mgf", "taylor-series"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Moment는 Distribution의 형태를 수치로 요약하는 값이다. 1차 Moment는 평균과 연결되고, 2차 중심 Moment는 Variance와 같다. Moment Generating Function(MGF)은 여러 차수의 Moment를 하나의 함수에 모아두는 도구이다.

## Moment의 정의

원점을 기준으로 한 <span class="math-inline" data-tex="k"></span>차 Moment는

<div class="math-display">
\[
\mu_k'=\mathbb{E}[X^k]
\]
</div>

이다. 평균을 기준으로 한 <span class="math-inline" data-tex="k"></span>차 중심 Moment는

<div class="math-display">
\[
\mu_k
=
\mathbb{E}\!\left[(X-\mathbb{E}[X])^k\right]
\]
</div>

이다.

1차 원 Moment는 Expectation이고, 2차 중심 Moment는 Variance이다.

<div class="math-display">
\[
\mu_1'=\mathbb{E}[X],
\qquad
\mu_2=\operatorname{Var}(X)
\]
</div>

3차와 4차 중심 Moment는 각각 비대칭성과 꼬리의 형태를 설명하는 skewness와 kurtosis의 기초가 된다.

## MGF의 정의

MGF는 다음과 같이 정의한다.

<div class="math-display">
\[
M_X(t)=\mathbb{E}[e^{tX}]
\]
</div>

<span class="math-inline" data-tex="t=0"></span> 근처에서 이 Expectation이 유한할 때 MGF가 존재한다고 한다. 지수함수를 Taylor 전개하면

<div class="math-display">
\[
e^{tX}
=
\sum_{k=0}^{\infty}\frac{t^kX^k}{k!}
\]
</div>

이므로 적절한 조건 아래에서

<div class="math-display">
\[
M_X(t)
=
\sum_{k=0}^{\infty}
\frac{t^k}{k!}\mathbb{E}[X^k]
\]
</div>

가 된다. 따라서 <span class="math-inline" data-tex="k"></span>번 미분한 뒤 <span class="math-inline" data-tex="t=0"></span>을 대입하면 <span class="math-inline" data-tex="k"></span>차 원 Moment를 얻는다.

<div class="math-display">
\[
M_X^{(k)}(0)=\mathbb{E}[X^k]
\]
</div>

## 독립합의 MGF

<span class="math-inline" data-tex="X"></span>와 <span class="math-inline" data-tex="Y"></span>가 독립이면

<div class="math-display">
\[
M_{X+Y}(t)
=
\mathbb{E}[e^{t(X+Y)}]
=
\mathbb{E}[e^{tX}]\mathbb{E}[e^{tY}]
=
M_X(t)M_Y(t)
\]
</div>

이다. 합의 Distribution을 찾을 때 MGF가 유용한 이유이다.

## Normal Distribution의 MGF

<span class="math-inline" data-tex="X\sim\mathcal{N}(\mu,\sigma^2)"></span>이면

<div class="math-display">
\[
M_X(t)
=
\exp\!\left(\mu t+\frac{\sigma^2t^2}{2}\right)
\]
</div>

이다. 이를 미분하면

<div class="math-display">
\[
M_X'(0)=\mu
\]
</div>

<div class="math-display">
\[
M_X''(0)=\mu^2+\sigma^2
\]
</div>

를 얻고, <span class="math-inline" data-tex="\operatorname{Var}(X)=M_X&#x27;&#x27;(0)-M_X&#x27;(0)^2=\sigma^2"></span>임을 확인할 수 있다.

## Binomial Distribution의 MGF

<span class="math-inline" data-tex="X\sim\operatorname{Binomial}(n,p)"></span>이면

<div class="math-display">
\[
M_X(t)
=
(1-p+pe^t)^n
\]
</div>

이다. Binomial Random Variable을 독립 Bernoulli Random Variable의 합으로 나타내면 이 식을 자연스럽게 얻을 수 있다.

## MGF의 한계

모든 Distribution이 MGF를 가지는 것은 아니다. 예를 들어 Cauchy Distribution은 Moment 자체가 존재하지 않는다. 또한 MGF가 존재하더라도 <span class="math-inline" data-tex="t=0"></span> 주변의 열린 구간에서 유한해야 Distribution을 유일하게 결정하는 성질을 안정적으로 사용할 수 있다.

이 경우 Characteristic Function

<div class="math-display">
\[
\varphi_X(t)=\mathbb{E}[e^{itX}]
\]
</div>

을 사용할 수 있다. Characteristic Function은 모든 Random Variable에 대해 존재한다.

## 정리

Moment는 Distribution의 중심, 퍼짐, 비대칭성 등을 수치화한다. MGF는 지수함수의 Expectation으로 정의되며, 원점에서의 미분으로 Moment를 얻는다. 독립인 Random Variable의 합에서는 MGF가 곱으로 분해된다.

## 연습 문제

1. Bernoulli Distribution의 MGF를 구하고 평균과 Variance를 유도한다.
2. 독립인 Poisson Random Variable의 합이 Poisson Distribution을 따름을 MGF로 보인다.
3. Exponential Distribution의 MGF가 존재하는 <span class="math-inline" data-tex="t"></span>의 범위를 구한다.

---

**확률 이론 정리 시리즈** · 8/11 · [← 이전: 7. 주요 연속 Distribution](/posts/probability-theory-07-continuous-distributions/) · [다음: 9. 일변량 Transformation →](/posts/probability-theory-09-univariate-transformation/)
