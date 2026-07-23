---
title: "7. 주요 연속 Distribution"
description: "Uniform, Normal, Exponential, Gamma, Beta Distribution의 형태와 매개변수, 사용 맥락을 정리한다."
date: "2025-07-03"
category: "확률 이론"
tags: ["probability-theory", "continuous-distribution", "normal", "exponential", "gamma", "beta"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

연속 Distribution은 구간 위에 PDF를 정의하고 적분으로 확률을 계산한다. 각 Distribution은 단순히 식이 다른 것이 아니라, 값이 생성되는 상황과 지지집합의 형태가 다르다.

## Uniform Distribution

구간 <span class="math-inline" data-tex="[a,b]"></span> 안의 모든 위치가 같은 밀도를 가질 때 사용한다.

<div class="math-display">
\[
X\sim\operatorname{Unif}(a,b)
\]
</div>

<div class="math-display">
\[
f_X(x)
=
\begin{cases}
\dfrac{1}{b-a},&a\le x\le b,\\
0,&\text{그 밖의 경우}.
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

Normal Distribution은 평균 주변에 값이 집중되고 양쪽 꼬리가 대칭인 종 모양의 Distribution이다.

<div class="math-display">
\[
X\sim\mathcal{N}(\mu,\sigma^2)
\]
</div>

<div class="math-display">
\[
f_X(x)
=
\frac{1}{\sqrt{2\pi\sigma^2}}
\exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)
\]
</div>

<span class="math-inline" data-tex="\mu"></span>는 중심 위치이고 <span class="math-inline" data-tex="\sigma"></span>는 퍼짐의 크기이다.

<div class="math-display">
\[
\mathbb{E}[X]=\mu,
\qquad
\operatorname{Var}(X)=\sigma^2
\]
</div>

표준화하면 평균 0, Variance 1인 표준정규분포로 바뀐다.

<div class="math-display">
\[
Z=\frac{X-\mu}{\sigma}
\sim\mathcal{N}(0,1)
\]
</div>

정규화 상수의 근거가 되는 Gaussian integral은

<div class="math-display">
\[
\int_{-\infty}^{\infty}e^{-x^2/2}\,dx=\sqrt{2\pi}
\]
</div>

이다.

## Exponential Distribution

사건이 일정한 비율로 발생하는 Poisson process에서 다음 사건까지 기다리는 시간을 나타낸다.

<div class="math-display">
\[
X\sim\operatorname{Exponential}(\lambda)
\]
</div>

<div class="math-display">
\[
f_X(x)
=
\lambda e^{-\lambda x},
\qquad x\ge0
\]
</div>

<div class="math-display">
\[
F_X(x)=1-e^{-\lambda x},
\qquad x\ge0
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac1\lambda,
\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}
\]
</div>

Exponential Distribution도 기억 없음 성질을 가진다.

<div class="math-display">
\[
\mathbb{P}(X>s+t\mid X>s)=\mathbb{P}(X>t)
\]
</div>

## Gamma Distribution

Poisson process에서 <span class="math-inline" data-tex="\alpha"></span>번째 사건이 일어날 때까지의 대기시간을 일반화한 Distribution이다.

<div class="math-display">
\[
X\sim\operatorname{Gamma}(\alpha,\lambda)
\]
</div>

여기서는 <span class="math-inline" data-tex="\lambda"></span>를 rate 매개변수로 사용한다.

<div class="math-display">
\[
f_X(x)
=
\frac{\lambda^{\alpha}}{\Gamma(\alpha)}
 x^{\alpha-1}e^{-\lambda x},
\qquad x>0
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac{\alpha}{\lambda},
\qquad
\operatorname{Var}(X)=\frac{\alpha}{\lambda^2}
\]
</div>

<span class="math-inline" data-tex="\alpha=1"></span>이면 Exponential Distribution이 된다.

## Beta Distribution

0과 1 사이의 비율이나 확률을 모델링할 때 자주 사용한다.

<div class="math-display">
\[
X\sim\operatorname{Beta}(\alpha,\beta)
\]
</div>

<div class="math-display">
\[
f_X(x)
=
\frac{1}{B(\alpha,\beta)}
 x^{\alpha-1}(1-x)^{\beta-1},
\qquad 0<x<1
\]
</div>

Beta Function은 다음과 같다.

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

- 유한 구간에서 일정한 밀도: Uniform
- 대칭적인 측정 오차나 여러 작은 효과의 합: Normal
- 다음 사건까지의 대기시간: Exponential
- 여러 번째 사건까지의 대기시간: Gamma
- 0과 1 사이의 비율: Beta

## 연습 문제

1. <span class="math-inline" data-tex="X\sim\operatorname{Unif}(0,1)"></span>일 때 <span class="math-inline" data-tex="\mathbb{P}(X^2&lt;1/4)"></span>를 구한다.
2. <span class="math-inline" data-tex="X\sim\operatorname{Exponential}(\lambda)"></span>의 기억 없음 성질을 증명한다.
3. Gamma Distribution에서 <span class="math-inline" data-tex="\alpha=1"></span>을 대입해 Exponential PDF를 얻는다.

---

**확률 이론 정리 시리즈** · 7/11 · [← 이전: 6. 주요 이산 Distribution](/posts/probability-theory-06-discrete-distributions/) · [다음: 8. Moment와 MGF →](/posts/probability-theory-08-moment-generating-function/)
