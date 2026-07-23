---
title: "10. 다변량 Random Variable과 Joint Distribution"
description: "둘 이상의 Random Variable을 함께 다루는 Joint Distribution, Marginal Distribution, 조건부 Distribution과 독립성을 정리한다."
date: "2025-08-12"
category: "확률 이론"
tags: ["probability-theory", "multivariate-random-variable", "joint-distribution", "marginal-distribution", "independence"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

여러 Random Variable을 동시에 관찰하면 각각의 Distribution만으로는 변수 사이의 관계를 알 수 없다. 두 변수의 값이 함께 나타나는 방식을 기록한 것이 Joint Distribution이다.

## 다변량 Random Variable

두 Random Variable <span class="math-inline" data-tex="X,Y"></span>를 묶으면 표본공간에서 평면으로 가는 함수가 된다.

<div class="math-display">
\[
(X,Y):\Omega\to\mathbb{R}^2
\]
</div>

예를 들어 한 사람의 키를 <span class="math-inline" data-tex="X"></span>, 몸무게를 <span class="math-inline" data-tex="Y"></span>라고 하면, 각 관측 결과는 평면 위의 한 점 <span class="math-inline" data-tex="(X,Y)"></span>에 대응한다.

## Joint PMF

<span class="math-inline" data-tex="X,Y"></span>가 이산형이면 Joint PMF는 두 값이 동시에 나타날 확률이다.

<div class="math-display">
\[
p_{X,Y}(x,y)
=
\mathbb{P}(X=x,Y=y)
\]
</div>

다음 조건을 만족한다.

<div class="math-display">
\[
p_{X,Y}(x,y)\ge0,
\qquad
\sum_x\sum_y p_{X,Y}(x,y)=1
\]
</div>

## Joint PDF

<span class="math-inline" data-tex="X,Y"></span>가 연속형이면 Joint PDF <span class="math-inline" data-tex="f_{X,Y}"></span>를 사용한다. 영역 <span class="math-inline" data-tex="A\subseteq\mathbb{R}^2"></span>에 들어갈 확률은 이중적분으로 계산한다.

<div class="math-display">
\[
\mathbb{P}((X,Y)\in A)
=
\iint_A f_{X,Y}(x,y)\,dx\,dy
\]
</div>

Joint PDF의 함수값 자체는 확률이 아니며, 작은 영역 아래의 부피가 확률에 해당한다.

## Joint CDF

Joint CDF는 두 변수가 각각 주어진 값 이하일 누적 확률이다.

<div class="math-display">
\[
F_{X,Y}(x,y)
=
\mathbb{P}(X\le x,Y\le y)
\]
</div>

Joint PDF가 존재하고 충분히 매끄러우면

<div class="math-display">
\[
f_{X,Y}(x,y)
=
\frac{\partial^2}{\partial x\,\partial y}F_{X,Y}(x,y)
\]
</div>

이다.

## Marginal Distribution

Marginal Distribution은 다른 변수를 합하거나 적분하여 제거하고 한 변수만 남긴 Distribution이다.

이산형에서는

<div class="math-display">
\[
p_X(x)=\sum_y p_{X,Y}(x,y)
\]
</div>

<div class="math-display">
\[
p_Y(y)=\sum_x p_{X,Y}(x,y)
\]
</div>

이고, 연속형에서는

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

이다.

## 지지집합의 중요성

Joint Distribution에서는 가능한 <span class="math-inline" data-tex="(x,y)"></span>의 영역, 즉 지지집합을 정확히 파악해야 한다. 예를 들어

<div class="math-display">
\[
f_{X,Y}(x,y)=2,
\qquad
0<y<x<1
\]
</div>

이고 그 밖에서 0이라고 하자. 이 지지집합은 단위 정사각형 전체가 아니라 삼각형이다.

<span class="math-inline" data-tex="X=x"></span>가 주어졌을 때 <span class="math-inline" data-tex="y"></span>의 범위는 <span class="math-inline" data-tex="0&lt;y&lt;x"></span>이므로

<div class="math-display">
\[
f_X(x)=\int_0^x 2\,dy=2x,
\qquad 0<x<1
\]
</div>

이다. 반대로 <span class="math-inline" data-tex="Y=y"></span>가 주어졌을 때 <span class="math-inline" data-tex="x"></span>의 범위는 <span class="math-inline" data-tex="y&lt;x&lt;1"></span>이므로

<div class="math-display">
\[
f_Y(y)=\int_y^1 2\,dx=2(1-y),
\qquad 0<y<1
\]
</div>

이다.

## 조건부 Distribution

<span class="math-inline" data-tex="Y=y"></span>라는 정보가 주어졌을 때 <span class="math-inline" data-tex="X"></span>의 Distribution은 조건부 Distribution이다.

이산형에서는

<div class="math-display">
\[
p_{X\mid Y}(x\mid y)
=
\frac{p_{X,Y}(x,y)}{p_Y(y)}
\]
</div>

이고, 연속형에서는

<div class="math-display">
\[
f_{X\mid Y}(x\mid y)
=
\frac{f_{X,Y}(x,y)}{f_Y(y)}
\]
</div>

이다. 분모가 양수인 범위에서 정의한다.

## 독립성

<span class="math-inline" data-tex="X"></span>와 <span class="math-inline" data-tex="Y"></span>가 독립이라는 것은 한 변수에 대한 정보가 다른 변수의 Distribution을 바꾸지 않는다는 뜻이다. Joint Distribution이 Marginal Distribution의 곱으로 분해되는지로 확인한다.

<div class="math-display">
\[
p_{X,Y}(x,y)=p_X(x)p_Y(y)
\]
</div>

또는

<div class="math-display">
\[
f_{X,Y}(x,y)=f_X(x)f_Y(y)
\]
</div>

독립이면

<div class="math-display">
\[
\mathbb{E}[g(X)h(Y)]
=
\mathbb{E}[g(X)]\mathbb{E}[h(Y)]
\]
</div>

가 성립한다. 특히 <span class="math-inline" data-tex="\operatorname{Cov}(X,Y)=0"></span>이다. 그러나 공분산이 0이라고 해서 항상 독립인 것은 아니다.

## 정리

Joint Distribution은 여러 Random Variable이 함께 움직이는 구조를 나타낸다. Marginal Distribution은 다른 변수를 제거해 얻고, 조건부 Distribution은 다른 변수의 값이 주어졌을 때 얻는다. 독립성은 Joint Distribution이 Marginal Distribution의 곱으로 분해되는지로 판단한다.

## 연습 문제

1. 삼각형 지지집합 <span class="math-inline" data-tex="0&lt;y&lt;x&lt;1"></span>에서 Marginal PDF를 다시 계산한다.
2. Joint PDF가 Marginal PDF의 곱으로 분해되는지 확인해 독립성을 판정한다.
3. 공분산이 0이지만 독립이 아닌 두 Random Variable의 예를 찾는다.

---

**확률 이론 정리 시리즈** · 10/11 · [← 이전: 9. 일변량 Transformation](/posts/probability-theory-09-univariate-transformation/) · [다음: 11. 다변량 Transformation과 Jacobian →](/posts/probability-theory-11-multivariate-transformation/)
