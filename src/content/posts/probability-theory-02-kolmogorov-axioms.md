---
title: "2. Kolmogorov Axioms"
description: "Probability Measure를 정의하는 세 가지 Kolmogorov Axiom과 이들로부터 따라오는 기본 성질을 정리한다."
date: "2025-04-29"
category: "확률 이론"
tags: ["probability-theory", "kolmogorov-axioms", "probability-measure", "proof"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Probability는 직관만으로 다루기보다 몇 가지 공리에서 출발해 성질을 유도하는 편이 안전하다. Kolmogorov Axioms는 Probability Measure가 반드시 만족해야 하는 최소 조건이다.

## Kolmogorov Axioms

Sample space <span class="math-inline">\(\Omega\)</span> 위의 event <span class="math-inline">\(A\)</span>에 probability measure <span class="math-inline">\(\mathbb{P}\)</span>를 정의한다고 하자.

### 1. Nonnegativity

<div class="math-display">
\[
\mathbb{P}(A)\ge0
\]
</div>

모든 event의 probability는 음수가 아니다.

### 2. Normalization

<div class="math-display">
\[
\mathbb{P}(\Omega)=1
\]
</div>

모든 가능한 outcome을 포함하는 sample space의 probability는 1이다.

### 3. Countable Additivity

Pairwise disjoint한 event sequence <span class="math-inline">\(A_1,A_2,\ldots\)</span>에 대해

<div class="math-display">
\[
\mathbb{P}\!\left(\bigcup_{i=1}^{\infty}A_i\right)
=
\sum_{i=1}^{\infty}\mathbb{P}(A_i)
\]
</div>

가 성립한다. Disjoint condition이 없으면 overlap이 중복 계산되므로 이 식을 그대로 사용할 수 없다.

## Empty Event의 Probability

<span class="math-inline">\(\Omega\)</span>와 <span class="math-inline">\(\varnothing\)</span>은 disjoint이고 <span class="math-inline">\(\Omega\cup\varnothing=\Omega\)</span>이다. Countable additivity를 적용하면

<div class="math-display">
\[
\mathbb{P}(\Omega)
=
\mathbb{P}(\Omega)+\mathbb{P}(\varnothing)
\]
</div>

이므로

<div class="math-display">
\[
\mathbb{P}(\varnothing)=0
\]
</div>

이다.

## Complement Rule

<span class="math-inline">\(A\)</span>와 <span class="math-inline">\(A^c\)</span>는 disjoint이며 union은 sample space이다.

<div class="math-display">
\[
A\cup A^c=\Omega,
\qquad
A\cap A^c=\varnothing
\]
</div>

따라서

<div class="math-display">
\[
1
=
\mathbb{P}(\Omega)
=
\mathbb{P}(A)+\mathbb{P}(A^c)
\]
</div>

이고

<div class="math-display">
\[
\mathbb{P}(A^c)=1-\mathbb{P}(A)
\]
</div>

를 얻는다.

## Monotonicity

<span class="math-inline">\(A\subseteq B\)</span>이면 <span class="math-inline">\(B\)</span>를 disjoint union으로 분해할 수 있다.

<div class="math-display">
\[
B=A\cup(B\setminus A)
\]
</div>

따라서

<div class="math-display">
\[
\mathbb{P}(B)
=
\mathbb{P}(A)+\mathbb{P}(B\setminus A)
\ge
\mathbb{P}(A)
\]
</div>

이다. 즉, event가 커질수록 probability는 감소하지 않는다.

## Difference Rule

<span class="math-inline">\(A\cap B\)</span>와 <span class="math-inline">\(A^c\cap B\)</span>는 disjoint이고 두 event의 union은 <span class="math-inline">\(B\)</span>이다.

<div class="math-display">
\[
B=(A\cap B)\cup(A^c\cap B)
\]
</div>

따라서

<div class="math-display">
\[
\mathbb{P}(A^c\cap B)
=
\mathbb{P}(B)-\mathbb{P}(A\cap B)
\]
</div>

이다.

## Union Bound

Inclusion–Exclusion과 nonnegativity로부터

<div class="math-display">
\[
\mathbb{P}(A\cup B)
=
\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B)
\le
\mathbb{P}(A)+\mathbb{P}(B)
\]
</div>

를 얻는다. 이를 Boole's inequality라고 한다.

## 정리

Kolmogorov Axioms는 nonnegativity, normalization, countable additivity의 세 조건이다. Empty event, complement, monotonicity, difference rule과 union bound는 별도의 가정이 아니라 이 공리들에서 유도된다.

## 연습 문제

1. Inclusion–Exclusion formula를 Kolmogorov Axioms만으로 증명한다.
2. <span class="math-inline">\(A_1,\ldots,A_n\)</span>에 대해 <span class="math-inline">\(\mathbb{P}(\bigcup_i A_i)\le\sum_i\mathbb{P}(A_i)\)</span>를 induction으로 보인다.

---

**확률 이론 정리 시리즈** · 2/11 · [← 이전: 1. Probability Space와 기초 개념](/posts/probability-theory-01-foundations/) · [다음: 3. Random Variable과 CDF →](/posts/probability-theory-03-random-variable-cdf/)
