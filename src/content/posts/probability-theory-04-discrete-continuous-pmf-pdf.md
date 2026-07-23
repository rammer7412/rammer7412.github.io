---
title: "4. Discrete·Continuous Random Variable과 PMF·PDF"
description: "Discrete Random Variable과 Continuous Random Variable을 구분하고 PMF, PDF, CDF 사이의 관계를 정리한다."
date: "2025-05-10"
category: "확률 이론"
tags: ["probability-theory", "discrete-random-variable", "continuous-random-variable", "pmf", "pdf"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Random Variable은 값의 구조에 따라 discrete와 continuous로 나뉜다. 두 경우 모두 CDF로 distribution을 표현할 수 있지만, probability를 직접 계산할 때 사용하는 함수는 PMF와 PDF로 달라진다.

## Discrete와 Continuous

앞면의 개수처럼 가능한 값이 countable set이면 Discrete Random Variable이다. 사람의 키처럼 interval 안의 값을 연속적으로 가질 수 있으면 Continuous Random Variable로 모델링한다.

CDF 관점에서는 Discrete Random Variable의 CDF가 step function이고, Continuous Random Variable의 CDF는 일반적으로 continuous function이다.

## Probability Mass Function

Discrete Random Variable <span class="math-inline">\(X\)</span>의 Probability Mass Function, PMF는

<div class="math-display">
\[
p_X(x)=\mathbb{P}(X=x)
\]
</div>

로 정의된다. PMF는 다음 조건을 만족한다.

<div class="math-display">
\[
p_X(x)\ge0,
\qquad
\sum_x p_X(x)=1
\]
</div>

Event <span class="math-inline">\(A\)</span>에 대한 probability는 해당 값을 모두 더해 구한다.

<div class="math-display">
\[
\mathbb{P}(X\in A)=\sum_{x\in A}p_X(x)
\]
</div>

CDF와 PMF의 관계는

<div class="math-display">
\[
F_X(x)=\sum_{t\le x}p_X(t)
\]
</div>

이다.

## Probability Density Function

Continuous Random Variable <span class="math-inline">\(X\)</span>의 Probability Density Function, PDF를 <span class="math-inline">\(f_X\)</span>라 하면

<div class="math-display">
\[
F_X(x)=\int_{-\infty}^{x}f_X(t)\,dt
\]
</div>

이다. CDF가 differentiable이면

<div class="math-display">
\[
f_X(x)=F_X'(x)
\]
</div>

가 성립한다.

PDF도 nonnegative이며 전체 area가 1이다.

<div class="math-display">
\[
f_X(x)\ge0,
\qquad
\int_{-\infty}^{\infty}f_X(x)\,dx=1
\]
</div>

Interval probability는 area로 계산한다.

<div class="math-display">
\[
\mathbb{P}(a\le X\le b)
=
\int_a^b f_X(t)\,dt
\]
</div>

Continuous Random Variable에서는 한 점의 probability가 0이다.

<div class="math-display">
\[
\mathbb{P}(X=x)=0
\]
</div>

따라서 endpoint를 포함하느냐는 interval probability에 영향을 주지 않는다.

## PDF 예시

다음 함수를 생각한다.

<div class="math-display">
\[
f_X(x)=
\begin{cases}
2x,&0\le x\le1,\\
0,&\text{otherwise}.
\end{cases}
\]
</div>

Nonnegative이고

<div class="math-display">
\[
\int_0^1 2x\,dx=1
\]
</div>

이므로 PDF가 된다. CDF는 다음과 같다.

<div class="math-display">
\[
F_X(x)=
\begin{cases}
0,&x<0,\\
x^2,&0\le x\le1,\\
1,&x>1.
\end{cases}
\]
</div>

## 정리

Discrete distribution에서는 PMF가 point probability를 직접 나타낸다. Continuous distribution에서는 PDF의 값 자체가 probability가 아니라 density이며, interval 아래의 area가 probability가 된다.

## 연습 문제

1. <span class="math-inline">\(p_X(x)=x/28\)</span>, <span class="math-inline">\(x=1,\ldots,k\)</span>가 PMF가 되도록 하는 <span class="math-inline">\(k\)</span>를 구한다.
2. <span class="math-inline">\(f_X(x)=\lambda e^{-\lambda x}\)</span> for <span class="math-inline">\(x\ge0\)</span>가 PDF임을 확인하고 CDF를 구한다.
3. 위 distribution에서 <span class="math-inline">\(\mathbb{P}(a\le X\le b)\)</span>를 계산한다.

---

**확률 이론 정리 시리즈** · 4/11 · [← 이전: 3. Random Variable과 CDF](/posts/probability-theory-03-random-variable-cdf/) · [다음: 5. Expectation, Variance와 Standard Deviation →](/posts/probability-theory-05-expectation-variance/)
