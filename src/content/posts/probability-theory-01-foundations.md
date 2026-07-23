---
title: "1. Probability Space와 기초 개념"
description: "Probability Space를 구성하는 outcome, sample space, event와 함께 Set Operation, Binomial Theorem, Gamma Function을 정리한다."
date: "2025-04-28"
category: "확률 이론"
tags: ["probability-theory", "probability-space", "set-theory", "binomial-theorem", "gamma-function"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Probability Theory를 공부할 때 가장 먼저 정리해야 하는 것은 확률값 자체가 아니라 확률을 정의하는 공간이다. Outcome, sample space, event의 관계를 명확히 잡아두면 이후 Random Variable과 Distribution의 정의가 자연스럽게 이어진다.

참고한 교재는 Casella와 Berger의 *Statistical Inference*이다. 이 시리즈는 기본적인 Calculus와 Linear Algebra를 전제로 한다.

## Probability Space

Experiment를 한 번 수행했을 때 나오는 개별 결과를 **outcome**이라 한다. 모든 가능한 outcome의 집합은 **sample space**이며 보통 <span class="math-inline">\(\Omega\)</span>로 나타낸다. Sample space의 부분집합을 **event**라 한다.

동전을 한 번 던지는 experiment에서는

<div class="math-display">
\[
\Omega=\{H,T\}
\]
</div>

이다. 앞면이 나오는 event를 <span class="math-inline">\(A\)</span>라 하면 <span class="math-inline">\(A=\{H\}\)</span>이고, event의 probability는 <span class="math-inline">\(\mathbb{P}(A)\)</span>로 표시한다.

Event는 단순히 하나의 outcome일 수도 있고 여러 outcome을 묶은 집합일 수도 있다. 따라서 Probability Theory에서 Set Theory가 기본 언어가 된다.

## Set Operation

두 event <span class="math-inline">\(A\)</span>와 <span class="math-inline">\(B\)</span>에 대해 자주 사용하는 operation은 다음과 같다.

- **Union**: <span class="math-inline">\(A\cup B\)</span>
- **Intersection**: <span class="math-inline">\(A\cap B\)</span>
- **Complement**: <span class="math-inline">\(A^c\)</span>
- **Difference**: <span class="math-inline">\(A\setminus B\)</span>

포함 관계는 다음과 같이 적는다.

<div class="math-display">
\[
A\subseteq B
\quad\Longleftrightarrow\quad
x\in A\Rightarrow x\in B
\]
</div>

Set operation은 commutativity, associativity, distributivity를 만족한다. De Morgan's law도 반복해서 사용된다.

<div class="math-display">
\[
(A\cup B)^c=A^c\cap B^c,
\qquad
(A\cap B)^c=A^c\cup B^c
\]
</div>

## Disjoint Event와 Inclusion–Exclusion

<span class="math-inline">\(A\cap B=\varnothing\)</span>이면 두 event는 **disjoint** 또는 **mutually exclusive**라고 한다. 여러 event <span class="math-inline">\(A_1,A_2,\ldots\)</span>가 서로 다른 모든 <span class="math-inline">\(i,j\)</span>에 대해 <span class="math-inline">\(A_i\cap A_j=\varnothing\)</span>을 만족하면 **pairwise disjoint**이다.

두 event의 union probability는 overlap을 한 번 빼서 계산한다.

<div class="math-display">
\[
\mathbb{P}(A\cup B)
=
\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B)
\]
</div>

Disjoint event에서는 intersection probability가 0이므로 단순한 합이 된다.

## Binomial Theorem

Binomial Distribution과 여러 expectation 계산에서 Binomial Theorem이 자주 등장한다.

<div class="math-display">
\[
(a+b)^n
=
\sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k},
\qquad n\in\mathbb{Z}_{\ge0}
\]
</div>

특히 <span class="math-inline">\(a=p\)</span>, <span class="math-inline">\(b=1-p\)</span>를 대입하면 probability mass의 합이 1이 되는 성질을 확인할 수 있다.

<div class="math-display">
\[
\sum_{k=0}^{n}\binom{n}{k}p^k(1-p)^{n-k}=1
\]
</div>

## Gamma Function

Gamma Function은 factorial을 실수와 복소수 영역으로 확장한 함수이다. Probability Distribution의 normalization constant와 integral 계산에서 자주 사용된다.

<div class="math-display">
\[
\Gamma(\alpha)
=
\int_0^{\infty} t^{\alpha-1}e^{-t}\,dt,
\qquad \alpha>0
\]
</div>

Integration by parts를 적용하면 recurrence relation을 얻는다.

<div class="math-display">
\[
\Gamma(\alpha+1)=\alpha\Gamma(\alpha)
\]
</div>

따라서 자연수 <span class="math-inline">\(n\)</span>에 대해

<div class="math-display">
\[
\Gamma(n+1)=n!
\]
</div>

이고, Gaussian integral과 연결되는 중요한 값은 다음과 같다.

<div class="math-display">
\[
\Gamma\!\left(\frac12\right)=\sqrt{\pi}
\]
</div>

## 정리

Probability Space는 outcome을 모은 sample space와 그 부분집합인 event로 구성된다. Event의 operation은 Set Theory로 표현되며, Inclusion–Exclusion은 overlap을 보정하는 기본 원리이다. Binomial Theorem과 Gamma Function은 이후 Distribution의 normalization과 moment 계산을 위한 도구가 된다.

## 연습 문제

1. 주사위를 한 번 던지는 experiment의 sample space와 “짝수가 나온다”라는 event를 집합으로 표현한다.
2. Integration by parts로 <span class="math-inline">\(\Gamma(\alpha+1)=\alpha\Gamma(\alpha)\)</span>를 증명한다.
3. Recurrence relation을 이용해 <span class="math-inline">\(\Gamma(n+1)=n!\)</span>을 보인다.

---

**확률 이론 정리 시리즈** · 1/11 · [다음: 2. Kolmogorov Axioms →](/posts/probability-theory-02-kolmogorov-axioms/)
