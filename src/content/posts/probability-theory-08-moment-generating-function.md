---
title: "8. Moment와 Moment Generating Function"
description: "Raw Moment와 Central Moment를 구분하고 MGF의 derivative로 moment를 계산하는 원리를 정리한다."
date: "2025-07-04"
category: "확률 이론"
tags: ["probability-theory", "moment", "mgf", "taylor-series"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Moment는 distribution의 location, spread, asymmetry와 tail shape를 수치로 요약한다. Moment Generating Function은 이 moment들을 하나의 함수에 모아두는 도구이다.

## Raw Moment와 Central Moment

<span class="math-inline">\(n\)</span>차 raw moment는

<div class="math-display">
\[
\mu_n'=\mathbb{E}[X^n]
\]
</div>

이고, <span class="math-inline">\(n\)</span>차 central moment는

<div class="math-display">
\[
\mu_n=\mathbb{E}[(X-\mathbb{E}[X])^n]
\]
</div>

이다.

- First raw moment: mean
- Second central moment: Variance
- Third standardized central moment: skewness
- Fourth standardized central moment: kurtosis

## Moment Generating Function

Random Variable <span class="math-inline">\(X\)</span>의 MGF는

<div class="math-display">
\[
M_X(t)=\mathbb{E}[e^{tX}]
\]
</div>

로 정의된다. 단, 0을 포함하는 open interval에서 expectation이 finite해야 한다.

Exponential function의 Maclaurin series는

<div class="math-display">
\[
e^{tX}
=
\sum_{n=0}^{\infty}\frac{t^nX^n}{n!}
\]
</div>

이다. Expectation과 sum을 교환할 수 있다면

<div class="math-display">
\[
M_X(t)
=
\sum_{n=0}^{\infty}\frac{t^n}{n!}\mathbb{E}[X^n]
\]
</div>

가 된다. 따라서 derivative를 0에서 평가하면 moment를 얻는다.

<div class="math-display">
\[
M_X^{(n)}(0)=\mathbb{E}[X^n]
\]
</div>

## Standard Normal의 MGF

<span class="math-inline">\(X\sim\mathcal{N}(0,1)\)</span>이면 complete the square를 이용해

<div class="math-display">
\[
\begin{aligned}
M_X(t)
&=\int_{-\infty}^{\infty}e^{tx}\frac{1}{\sqrt{2\pi}}e^{-x^2/2}\,dx\\
&=e^{t^2/2}\int_{-\infty}^{\infty}\frac{1}{\sqrt{2\pi}}e^{-(x-t)^2/2}\,dx\\
&=e^{t^2/2}.
\end{aligned}
\]
</div>

여기서 derivative를 계산하면 <span class="math-inline">\(\mathbb{E}[X^2]=1\)</span>, <span class="math-inline">\(\mathbb{E}[X^4]=3\)</span> 등을 얻는다.

## Binomial Distribution의 MGF

<span class="math-inline">\(X\sim\operatorname{Bin}(n,p)\)</span>이면

<div class="math-display">
\[
\begin{aligned}
M_X(t)
&=\sum_{x=0}^{n}e^{tx}\binom{n}{x}p^x(1-p)^{n-x}\\
&=\sum_{x=0}^{n}\binom{n}{x}(pe^t)^x(1-p)^{n-x}\\
&=(1-p+pe^t)^n.
\end{aligned}
\]
</div>

First derivative를 0에서 계산하면

<div class="math-display">
\[
M_X'(0)=np
\]
</div>

이므로 Binomial mean을 다시 얻는다.

## MGF의 활용과 주의점

MGF가 0 근방에서 존재하면 distribution을 uniquely determine한다. Independent sum에서는 MGF가 product로 분해된다.

<div class="math-display">
\[
X\perp Y
\quad\Longrightarrow\quad
M_{X+Y}(t)=M_X(t)M_Y(t)
\]
</div>

모든 distribution이 MGF를 갖는 것은 아니다. 예를 들어 Cauchy Distribution은 ordinary moment와 MGF가 존재하지 않는다.

## 정리

Moment는 distribution의 형태를 수치로 요약하고, MGF는 raw moment를 derivative로 추출할 수 있게 한다. MGF의 존재 조건과 parameterization을 함께 확인해야 한다.

## 연습 문제

1. Poisson Distribution의 MGF를 구한다.
2. Exponential Distribution과 Gamma Distribution의 MGF를 구한다.
3. Standard Normal MGF에서 fourth moment를 계산한다.

---

**확률 이론 정리 시리즈** · 8/11 · [← 이전: 7. 대표적인 Continuous Distribution](/posts/probability-theory-07-continuous-distributions/) · [다음: 9. Univariate Transformation →](/posts/probability-theory-09-univariate-transformation/)
