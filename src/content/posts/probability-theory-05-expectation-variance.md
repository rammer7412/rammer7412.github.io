---
title: "5. Expectation, Variance와 Standard Deviation"
description: "Expectation의 정의와 linearity, Variance와 Standard Deviation의 의미와 계산 공식을 정리한다."
date: "2025-06-21"
category: "확률 이론"
tags: ["probability-theory", "expectation", "variance", "standard-deviation"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Distribution 전체를 하나의 숫자로 요약할 때 가장 먼저 사용하는 값이 Expectation과 Variance이다. Expectation은 중심 위치를, Variance는 그 중심에서 얼마나 퍼져 있는지를 나타낸다.

## Expectation

Random Variable <span class="math-inline">\(X\)</span>의 함수 <span class="math-inline">\(g(X)\)</span>에 대한 Expectation은 discrete와 continuous case에서 각각 다음과 같다.

<div class="math-display">
\[
\mathbb{E}[g(X)]
=
\begin{cases}
\displaystyle\sum_x g(x)p_X(x),&X\text{ is discrete},\\[6pt]
\displaystyle\int_{-\infty}^{\infty}g(x)f_X(x)\,dx,&X\text{ is continuous}.
\end{cases}
\]
</div>

<span class="math-inline">\(g(X)=X\)</span>를 대입하면 mean <span class="math-inline">\(\mathbb{E}[X]\)</span>를 얻는다. Absolute expectation이 finite하지 않으면 expectation이 존재하지 않을 수 있다.

<div class="math-display">
\[
\mathbb{E}[|g(X)|]<\infty
\]
</div>

는 expectation의 존재를 확인할 때 사용하는 충분히 안전한 조건이다.

## Linearity of Expectation

Expectation은 linear operator이다.

<div class="math-display">
\[
\mathbb{E}[aX+bY+c]
=
a\mathbb{E}[X]+b\mathbb{E}[Y]+c
\]
</div>

이 성질에는 independence가 필요하지 않다. 예를 들어 continuous case에서는 integral의 linearity로 바로 확인할 수 있다.

<div class="math-display">
\[
\mathbb{E}[a g_1(X)+b g_2(X)]
=
a\mathbb{E}[g_1(X)]+b\mathbb{E}[g_2(X)]
\]
</div>

## Variance

Mean을 <span class="math-inline">\(\mu=\mathbb{E}[X]\)</span>라 할 때 Variance는

<div class="math-display">
\[
\operatorname{Var}(X)
=
\mathbb{E}[(X-\mu)^2]
\]
</div>

로 정의된다. Square를 사용하므로 mean에서 멀리 떨어진 값에 더 큰 penalty를 준다.

계산에서는 다음 equivalent formula가 편리하다.

<div class="math-display">
\[
\operatorname{Var}(X)
=
\mathbb{E}[X^2]-\{\mathbb{E}[X]\}^2
\]
</div>

증명은 square를 전개하고 expectation의 linearity를 적용하면 된다.

<div class="math-display">
\[
\begin{aligned}
\mathbb{E}[(X-\mu)^2]
&=\mathbb{E}[X^2-2\mu X+\mu^2]\\
&=\mathbb{E}[X^2]-2\mu\mathbb{E}[X]+\mu^2\\
&=\mathbb{E}[X^2]-\mu^2.
\end{aligned}
\]
</div>

## Affine Transformation

상수 <span class="math-inline">\(a,b\)</span>에 대해

<div class="math-display">
\[
\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)
\]
</div>

이다. Shift <span class="math-inline">\(b\)</span>는 spread를 바꾸지 않고, scaling <span class="math-inline">\(a\)</span>는 deviation을 <span class="math-inline">\(|a|\)</span>배하므로 Variance는 <span class="math-inline">\(a^2\)</span>배가 된다.

## Standard Deviation

Standard Deviation은 Variance의 square root이다.

<div class="math-display">
\[
\sigma_X=\sqrt{\operatorname{Var}(X)}
\]
</div>

Variance는 원래 단위의 square를 사용하지만 Standard Deviation은 <span class="math-inline">\(X\)</span>와 같은 단위를 갖는다.

## 정리

Expectation은 weighted average이며 linearity를 만족한다. Variance는 mean으로부터의 squared deviation의 expectation이고, Standard Deviation은 이를 원래 단위로 되돌린 값이다.

## 연습 문제

1. <span class="math-inline">\(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\)</span>를 정의에서 증명한다.
2. <span class="math-inline">\(\mu=\mathbb{E}[X]\)</span>, <span class="math-inline">\(\sigma^2=\operatorname{Var}(X)\)</span>일 때 <span class="math-inline">\(\mathbb{E}[X(X-1)]=\mu^2+\sigma^2-\mu\)</span>를 보인다.

---

**확률 이론 정리 시리즈** · 5/11 · [← 이전: 4. Discrete·Continuous Random Variable과 PMF·PDF](/posts/probability-theory-04-discrete-continuous-pmf-pdf/) · [다음: 6. 대표적인 Discrete Distribution →](/posts/probability-theory-06-discrete-distributions/)
