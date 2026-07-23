---
title: "6. 주요 이산 Distribution"
description: "Bernoulli, Binomial, Geometric, Negative Binomial, Hypergeometric, Poisson Distribution의 의미와 사용 조건을 정리한다."
date: "2025-06-29"
category: "확률 이론"
tags: ["probability-theory", "discrete-distribution", "binomial", "poisson", "geometric"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

이산 Distribution은 셀 수 있는 값에 확률을 배분한다. 공식을 외우기보다 **무엇을 세는 Random Variable인지**, **시행이 독립인지**, **복원추출인지**를 먼저 확인해야 적절한 Distribution을 선택할 수 있다.

## Bernoulli Distribution

한 번의 시행 결과가 성공과 실패 두 가지뿐일 때 사용한다. 성공을 1, 실패를 0으로 두면

<div class="math-display">
\[
\mathbb{P}(X=1)=p,
\qquad
\mathbb{P}(X=0)=1-p
\]
</div>

이다. 이를 <span class="math-inline" data-tex="X\sim\operatorname{Bernoulli}(p)"></span>로 쓴다.

<div class="math-display">
\[
\mathbb{E}[X]=p,
\qquad
\operatorname{Var}(X)=p(1-p)
\]
</div>

## Binomial Distribution

성공 확률이 <span class="math-inline" data-tex="p"></span>인 독립 Bernoulli 시행을 <span class="math-inline" data-tex="n"></span>번 반복했을 때 성공 횟수를 나타낸다.

<div class="math-display">
\[
X\sim\operatorname{Binomial}(n,p)
\]
</div>

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\binom{n}{k}p^k(1-p)^{n-k},
\qquad k=0,1,\ldots,n
\]
</div>

조합계수는 성공이 일어나는 <span class="math-inline" data-tex="k"></span>개의 위치를 선택하는 경우의 수이다.

<div class="math-display">
\[
\mathbb{E}[X]=np,
\qquad
\operatorname{Var}(X)=np(1-p)
\]
</div>

## Geometric Distribution

독립 Bernoulli 시행을 성공할 때까지 반복할 때, 첫 성공이 나오는 시행 번호를 나타낸다.

<div class="math-display">
\[
\mathbb{P}(X=k)
=
(1-p)^{k-1}p,
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

Geometric Distribution은 기억 없음 성질을 가진다.

<div class="math-display">
\[
\mathbb{P}(X>s+t\mid X>s)=\mathbb{P}(X>t)
\]
</div>

이미 <span class="math-inline" data-tex="s"></span>번 실패했다는 사실이 앞으로 기다릴 시간의 Distribution을 바꾸지 않는다는 뜻이다.

## Negative Binomial Distribution

<span class="math-inline" data-tex="r"></span>번째 성공이 나올 때까지 필요한 시행 횟수를 나타낸다.

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\binom{k-1}{r-1}p^r(1-p)^{k-r},
\qquad k=r,r+1,\ldots
\]
</div>

마지막 <span class="math-inline" data-tex="k"></span>번째 시행은 반드시 성공이고, 앞의 <span class="math-inline" data-tex="k-1"></span>번 중 <span class="math-inline" data-tex="r-1"></span>번이 성공해야 한다.

<div class="math-display">
\[
\mathbb{E}[X]=\frac{r}{p},
\qquad
\operatorname{Var}(X)=\frac{r(1-p)}{p^2}
\]
</div>

## Hypergeometric Distribution

유한한 모집단에서 복원하지 않고 표본을 뽑을 때 사용한다. 전체 <span class="math-inline" data-tex="N"></span>개 중 성공 항목이 <span class="math-inline" data-tex="K"></span>개이고, <span class="math-inline" data-tex="n"></span>개를 뽑았을 때 성공 개수를 <span class="math-inline" data-tex="X"></span>라 하면

<div class="math-display">
\[
\mathbb{P}(X=k)
=
\frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}
\]
</div>

이다. 복원하지 않으므로 각 추출은 독립이 아니다.

<div class="math-display">
\[
\mathbb{E}[X]=n\frac{K}{N}
\]
</div>

<div class="math-display">
\[
\operatorname{Var}(X)
=
n\frac{K}{N}\left(1-\frac{K}{N}\right)\frac{N-n}{N-1}
\]
</div>

마지막 인자는 유한모집단 보정이다.

## Poisson Distribution

일정한 시간이나 공간 구간에서 드물게 발생하는 사건의 개수를 모델링할 때 사용한다.

<div class="math-display">
\[
X\sim\operatorname{Poisson}(\lambda)
\]
</div>

<div class="math-display">
\[
\mathbb{P}(X=k)
=
e^{-\lambda}\frac{\lambda^k}{k!},
\qquad k=0,1,2,\ldots
\]
</div>

<span class="math-inline" data-tex="\lambda"></span>는 한 구간에서 기대되는 평균 발생 횟수이다.

<div class="math-display">
\[
\mathbb{E}[X]=\lambda,
\qquad
\operatorname{Var}(X)=\lambda
\]
</div>

독립인 Poisson Random Variable의 합도 Poisson Distribution을 따른다.

<div class="math-display">
\[
X\sim\operatorname{Poisson}(\lambda),
\quad
Y\sim\operatorname{Poisson}(\theta)
\quad\Longrightarrow\quad
X+Y\sim\operatorname{Poisson}(\lambda+\theta)
\]
</div>

## Distribution 선택 기준

- 한 번의 성공·실패: Bernoulli
- 독립 시행 <span class="math-inline" data-tex="n"></span>번의 성공 횟수: Binomial
- 첫 성공까지의 시행 횟수: Geometric
- <span class="math-inline" data-tex="r"></span>번째 성공까지의 시행 횟수: Negative Binomial
- 비복원추출에서의 성공 개수: Hypergeometric
- 일정 구간에서 발생한 사건의 개수: Poisson

## 연습 문제

1. 불량률이 0.02인 제품 100개 중 불량품 수를 Binomial Distribution으로 나타낸다.
2. 카드 52장 중 5장을 비복원추출할 때 에이스 수의 Distribution을 구한다.
3. 시간당 평균 3회 발생하는 사건이 2시간 동안 5회 발생할 확률을 구한다.

---

**확률 이론 정리 시리즈** · 6/11 · [← 이전: 5. Expectation과 Variance](/posts/probability-theory-05-expectation-variance/) · [다음: 7. 주요 연속 Distribution →](/posts/probability-theory-07-continuous-distributions/)
