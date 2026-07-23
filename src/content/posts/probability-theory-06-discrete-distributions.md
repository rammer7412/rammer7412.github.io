---
title: "6. 대표적인 Discrete Distribution"
description: "Discrete Uniform, Bernoulli, Binomial, Hypergeometric, Geometric, Negative Binomial, Poisson Distribution의 PMF와 moment를 정리한다."
date: "2025-06-29"
category: "확률 이론"
tags: ["probability-theory", "discrete-distribution", "binomial", "poisson", "geometric"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Discrete Distribution은 countable outcome의 probability를 PMF로 표현한다. 이름이 비슷한 distribution도 무엇을 세는 Random Variable인지에 따라 support와 parameterization이 달라진다.

## Discrete Uniform Distribution

<span class="math-inline">\(X\sim\operatorname{Unif}\{a,a+1,\ldots,b\}\)</span>라 하자. 가능한 <span class="math-inline">\(n=b-a+1\)</span>개의 값이 모두 같은 probability를 갖는다.

<div class="math-display">
\[
\mathbb{P}(X=x)=\frac{1}{b-a+1},
\qquad x=a,\ldots,b
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac{a+b}{2},
\qquad
\operatorname{Var}(X)=\frac{(b-a+1)^2-1}{12}
\]
</div>

## Bernoulli Distribution

하나의 trial에서 success를 1, failure를 0으로 두면

<div class="math-display">
\[
X\sim\operatorname{Bernoulli}(p)
\]
</div>

이고 PMF는

<div class="math-display">
\[
\mathbb{P}(X=x)=p^x(1-p)^{1-x},
\qquad x\in\{0,1\}
\]
</div>

이다.

<div class="math-display">
\[
\mathbb{E}[X]=p,
\qquad
\operatorname{Var}(X)=p(1-p)
\]
</div>

## Binomial Distribution

Independent Bernoulli trial을 <span class="math-inline">\(n\)</span>번 반복했을 때 success count를 <span class="math-inline">\(X\)</span>라 하면

<div class="math-display">
\[
X\sim\operatorname{Bin}(n,p)
\]
</div>

이다.

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\binom{n}{k}p^k(1-p)^{n-k},
\qquad k=0,\ldots,n
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=np,
\qquad
\operatorname{Var}(X)=np(1-p)
\]
</div>

Binomial Random Variable을 independent Bernoulli variable의 sum으로 보면 moment를 쉽게 얻을 수 있다.

<div class="math-display">
\[
X=X_1+\cdots+X_n
\]
</div>

## Hypergeometric Distribution

Population size가 <span class="math-inline">\(N\)</span>이고 success item이 <span class="math-inline">\(M\)</span>개일 때 replacement 없이 <span class="math-inline">\(K\)</span>개를 추출한다. Success count <span class="math-inline">\(X\)</span>의 PMF는

<div class="math-display">
\[
\mathbb{P}(X=x)
=
\frac{\binom{M}{x}\binom{N-M}{K-x}}{\binom{N}{K}}
\]
</div>

이다. Support는 가능한 success count의 범위로 제한된다.

<div class="math-display">
\[
\mathbb{E}[X]=\frac{KM}{N}
\]
</div>

<div class="math-display">
\[
\operatorname{Var}(X)
=
\frac{KM}{N}\left(1-\frac{M}{N}\right)\frac{N-K}{N-1}
\]
</div>

마지막 factor는 replacement가 없을 때 나타나는 finite population correction이다.

## Geometric Distribution

각 trial의 success probability가 <span class="math-inline">\(p\)</span>이고 첫 success가 나올 때까지의 trial count를 <span class="math-inline">\(X\)</span>라 한다.

<div class="math-display">
\[
\mathbb{P}(X=k)=(1-p)^{k-1}p,
\qquad k=1,2,\ldots
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\frac1p,
\qquad
\operatorname{Var}(X)=\frac{1-p}{p^2}
\]
</div>

Geometric Distribution은 memoryless property를 갖는다.

<div class="math-display">
\[
\mathbb{P}(X>s+t\mid X>s)=\mathbb{P}(X>t)
\]
</div>

## Negative Binomial Distribution

<span class="math-inline">\(r\)</span>번째 success가 나올 때까지의 total trial count를 <span class="math-inline">\(X\)</span>라 하면

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\binom{k-1}{r-1}p^r(1-p)^{k-r},
\qquad k=r,r+1,\ldots
\]
</div>

이다.

<div class="math-display">
\[
\mathbb{E}[X]=\frac rp,
\qquad
\operatorname{Var}(X)=\frac{r(1-p)}{p^2}
\]
</div>

일부 교재는 failure count를 Random Variable로 정의하므로 support와 mean이 달라진다. Parameterization을 먼저 확인해야 한다.

## Poisson Distribution

일정한 시간이나 공간에서 event가 발생한 count를 모델링할 때 사용한다.

<div class="math-display">
\[
X\sim\operatorname{Poisson}(\lambda)
\]
</div>

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\frac{e^{-\lambda}\lambda^k}{k!},
\qquad k=0,1,2,\ldots
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]=\lambda,
\qquad
\operatorname{Var}(X)=\lambda
\]
</div>

## Distribution 선택 기준

- 한 번의 binary trial: Bernoulli
- <span class="math-inline">\(n\)</span>번 independent trial의 success count: Binomial
- Replacement 없는 sampling의 success count: Hypergeometric
- 첫 success까지의 trial count: Geometric
- <span class="math-inline">\(r\)</span>번째 success까지의 trial count: Negative Binomial
- 일정 interval의 event count: Poisson

## 연습 문제

1. 각 PMF의 합이 1임을 확인한다.
2. Geometric Distribution의 memoryless property를 증명한다.
3. Negative Binomial Distribution을 failure count로 parameterize했을 때 PMF와 mean을 구한다.

---

**확률 이론 정리 시리즈** · 6/11 · [← 이전: 5. Expectation, Variance와 Standard Deviation](/posts/probability-theory-05-expectation-variance/) · [다음: 7. 대표적인 Continuous Distribution →](/posts/probability-theory-07-continuous-distributions/)
