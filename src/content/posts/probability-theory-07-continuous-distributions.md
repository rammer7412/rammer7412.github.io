---
title: "7. 대표적인 Continuous Distribution"
description: "Continuous Uniform, Normal, Exponential, Gamma, Beta Distribution의 PDF와 주요 moment를 정리한다."
date: "2025-07-03"
category: "확률 이론"
tags: ["probability-theory", "continuous-distribution", "normal", "exponential", "gamma", "beta"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Continuous Distribution은 PDF 아래의 area로 probability를 표현한다. 각 distribution은 support와 shape parameter가 다르며, normalization constant에 Gamma Function이나 Beta Function이 자주 등장한다.

## Continuous Uniform Distribution

<span class="math-inline">\(X\sim\operatorname{Unif}(a,b)\)</span>이면 interval 안에서 density가 일정하다.

<div class="math-display">
\[
f_X(x)=
\begin{cases}
\dfrac{1}{b-a},&a\le x\le b,\\
0,&\text{otherwise}.
\end{cases}
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac{a+b}{2},
\qquad
\operatorname{Var}(X)=\frac{(b-a)^2}{12}
\]
</div>

## Normal Distribution

<span class="math-inline">\(X\sim\mathcal{N}(\mu,\sigma^2)\)</span>의 PDF는

<div class="math-display">
\[
f_X(x)
=
\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
\]
</div>

이다.

<div class="math-display">
\[
\mathbb{E}[X]=\mu,
\qquad
\operatorname{Var}(X)=\sigma^2
\]
</div>

Standardization을 적용하면

<div class="math-display">
\[
Z=\frac{X-\mu}{\sigma}\sim\mathcal{N}(0,1)
\]
</div>

이다.

### Gaussian Integral

Standard Normal PDF의 area가 1임을 보이기 위해

<div class="math-display">
\[
I=\int_{-\infty}^{\infty}e^{-x^2/2}\,dx
\]
</div>

라 두고 square를 취한다. Polar coordinate로 변환하면

<div class="math-display">
\[
\begin{aligned}
I^2
&=\iint_{\mathbb{R}^2}e^{-(x^2+y^2)/2}\,dx\,dy\\
&=\int_0^{2\pi}\int_0^{\infty}e^{-r^2/2}r\,dr\,d\theta\\
&=2\pi.
\end{aligned}
\]
</div>

따라서 <span class="math-inline">\(I=\sqrt{2\pi}\)</span>이다.

## Exponential Distribution

Waiting time을 모델링하는 대표적인 distribution이다.

<div class="math-display">
\[
f_X(x)=
\begin{cases}
\lambda e^{-\lambda x},&x\ge0,\\
0,&x<0.
\end{cases}
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac1\lambda,
\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}
\]
</div>

Exponential Distribution도 memoryless property를 갖는다.

<div class="math-display">
\[
\mathbb{P}(X>s+t\mid X>s)=\mathbb{P}(X>t)
\]
</div>

## Gamma Distribution

Shape parameter <span class="math-inline">\(\alpha\)</span>와 rate parameter <span class="math-inline">\(\beta\)</span>를 사용하는 parameterization에서는

<div class="math-display">
\[
f_X(x)
=
\frac{\beta^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{-\beta x},
\qquad x>0
\]
</div>

이다.

<div class="math-display">
\[
\mathbb{E}[X]=\frac{\alpha}{\beta},
\qquad
\operatorname{Var}(X)=\frac{\alpha}{\beta^2}
\]
</div>

<span class="math-inline">\(\alpha=1\)</span>이면 Exponential Distribution이 된다. 일부 교재는 scale parameter를 사용하므로 second parameter의 의미를 확인해야 한다.

## Beta Distribution

Support가 <span class="math-inline">\((0,1)\)</span>인 probability나 proportion을 모델링할 때 자주 사용한다.

<div class="math-display">
\[
f_X(x)
=
\frac{1}{B(\alpha,\beta)}x^{\alpha-1}(1-x)^{\beta-1},
\qquad 0<x<1
\]
</div>

Beta Function은 Gamma Function과 다음 관계를 갖는다.

<div class="math-display">
\[
B(\alpha,\beta)
=
\frac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]
=
\frac{\alpha}{\alpha+\beta}
\]
</div>

<div class="math-display">
\[
\operatorname{Var}(X)
=
\frac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}
\]
</div>

## Distribution 선택 기준

- Bounded interval에서 균등한 값: Continuous Uniform
- 여러 작은 영향의 합이나 measurement error: Normal
- 첫 event까지의 waiting time: Exponential
- 여러 waiting time의 합: Gamma
- 0과 1 사이의 proportion: Beta

## 연습 문제

1. Continuous Uniform Distribution의 Variance를 직접 계산한다.
2. Gaussian integral을 따라가며 Standard Normal PDF의 normalization을 확인한다.
3. <span class="math-inline">\(X\sim\mathcal{N}(0,1)\)</span>일 때 odd moment가 0임을 symmetry로 보인다.
4. Beta Distribution의 <span class="math-inline">\(r\)</span>차 raw moment를 Gamma Function으로 표현한다.

---

**확률 이론 정리 시리즈** · 7/11 · [← 이전: 6. 대표적인 Discrete Distribution](/posts/probability-theory-06-discrete-distributions/) · [다음: 8. Moment와 Moment Generating Function →](/posts/probability-theory-08-moment-generating-function/)
