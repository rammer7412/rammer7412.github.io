---
title: "3. Random Variable과 CDF"
description: "Random Variable을 sample space에서 real number로 가는 함수로 이해하고 Cumulative Distribution Function의 정의와 성질을 정리한다."
date: "2025-05-01"
category: "확률 이론"
tags: ["probability-theory", "random-variable", "cdf", "distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Random Variable이라는 이름은 일반적인 programming variable과 비슷해 보이지만, Probability Theory에서는 sample space의 outcome을 숫자로 바꾸는 함수이다. 이 관점을 놓치면 PMF, PDF, CDF의 의미도 흐려진다.

## Random Variable

Random Variable <span class="math-inline">\(X\)</span>는 sample space에서 real number로 가는 함수이다.

<div class="math-display">
\[
X:\Omega\to\mathbb{R}
\]
</div>

예를 들어 동전을 두 번 던지면

<div class="math-display">
\[
\Omega=\{HH,HT,TH,TT\}
\]
</div>

이다. <span class="math-inline">\(X\)</span>를 앞면의 개수로 정의하면

<div class="math-display">
\[
X(HH)=2,
\qquad
X(HT)=X(TH)=1,
\qquad
X(TT)=0
\]
</div>

이다. 여러 outcome이 같은 real number로 mapping될 수 있다는 점이 중요하다.

## Random Variable이 만드는 Event

<span class="math-inline">\(X=x\)</span>라는 표현은 하나의 outcome이 아니라 다음 event를 뜻한다.

<div class="math-display">
\[
\{\omega\in\Omega:X(\omega)=x\}
\]
</div>

따라서

<div class="math-display">
\[
\mathbb{P}(X=x)
=
\mathbb{P}\!\left(\{\omega\in\Omega:X(\omega)=x\}\right)
\]
</div>

이다.

주사위 outcome <span class="math-inline">\(\omega\in\{1,2,3,4,5,6\}\)</span>에 대해 <span class="math-inline">\(X(\omega)=\omega\bmod2\)</span>로 두면

<div class="math-display">
\[
\{\omega:X(\omega)=0\}=\{2,4,6\}
\]
</div>

이고 공정한 주사위에서는

<div class="math-display">
\[
\mathbb{P}(X=0)=\frac36=\frac12
\]
</div>

이다.

## Cumulative Distribution Function

Random Variable <span class="math-inline">\(X\)</span>의 Cumulative Distribution Function, 즉 CDF는 다음과 같다.

<div class="math-display">
\[
F_X(x)=\mathbb{P}(X\le x)
\]
</div>

CDF는 특정 값 하나의 probability가 아니라 그 값 이하에 누적된 probability를 나타낸다.

동전을 세 번 던지고 <span class="math-inline">\(X\)</span>를 앞면의 개수라고 하면

<div class="math-display">
\[
\mathbb{P}(X=0)=\frac18,
\qquad
\mathbb{P}(X=1)=\frac38
\]
</div>

이다. 따라서

<div class="math-display">
\[
F_X(1)
=
\mathbb{P}(X\le1)
=
\frac18+\frac38
=
\frac12
\]
</div>

이다.

## CDF의 기본 성질

모든 CDF는 다음 성질을 만족한다.

<div class="math-display">
\[
\lim_{x\to-\infty}F_X(x)=0,
\qquad
\lim_{x\to\infty}F_X(x)=1
\]
</div>

또한 <span class="math-inline">\(F_X\)</span>는 non-decreasing이다.

<div class="math-display">
\[
x_1\le x_2
\quad\Longrightarrow\quad
F_X(x_1)\le F_X(x_2)
\]
</div>

마지막으로 CDF는 right-continuous이다.

<div class="math-display">
\[
\lim_{x\downarrow x_0}F_X(x)=F_X(x_0)
\]
</div>

Discrete Random Variable의 CDF는 jump를 가질 수 있지만, jump의 오른쪽 값이 함수값과 일치한다.

## Interval Probability

CDF를 이용하면 interval probability를 계산할 수 있다.

<div class="math-display">
\[
\mathbb{P}(a<X\le b)=F_X(b)-F_X(a)
\]
</div>

Endpoint 포함 여부는 discrete distribution에서는 중요할 수 있으므로 event를 정확히 써야 한다.

## 정리

Random Variable은 outcome을 real number로 mapping하는 함수이다. CDF는 <span class="math-inline">\(X\le x\)</span>의 probability를 누적해 나타내며, limit condition, monotonicity, right-continuity를 만족한다.

## 연습 문제

1. 동전을 세 번 던질 때 앞면의 개수 <span class="math-inline">\(X\)</span>에 대한 CDF를 piecewise function으로 작성한다.
2. <span class="math-inline">\(F(x)=1/(1+e^{-x})\)</span>가 CDF의 세 조건을 만족하는지 확인한다.

---

**확률 이론 정리 시리즈** · 3/11 · [← 이전: 2. Kolmogorov Axioms](/posts/probability-theory-02-kolmogorov-axioms/) · [다음: 4. Discrete·Continuous Random Variable과 PMF·PDF →](/posts/probability-theory-04-discrete-continuous-pmf-pdf/)
