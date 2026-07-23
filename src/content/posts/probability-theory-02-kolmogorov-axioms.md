---
title: "2. Kolmogorov 공리"
description: "확률측도를 정의하는 세 가지 Kolmogorov 공리와 그로부터 유도되는 기본 성질을 정리한다."
date: "2025-04-29"
category: "확률 이론"
tags: ["probability-theory", "kolmogorov-axioms", "probability-measure", "proof"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

확률은 직관적인 의미를 가지지만, 계산 규칙을 일관되게 사용하려면 출발점이 필요하다. Kolmogorov 공리는 확률측도 <span class="math-inline" data-tex="\mathbb{P}"></span>가 반드시 만족해야 하는 최소 조건이다. 나머지 확률 공식 대부분은 이 세 공리에서 유도된다.

## 세 가지 공리

표본공간을 <span class="math-inline" data-tex="\Omega"></span>, 사건족을 <span class="math-inline" data-tex="\mathcal{F}"></span>라고 하자. 확률측도는 다음과 같은 함수이다.

<div class="math-display">
\[
\mathbb{P}:\mathcal{F}\to[0,1]
\]
</div>

### 1. 음이 아닌 값

모든 사건 <span class="math-inline" data-tex="A"></span>에 대해 확률은 음수가 아니다.

<div class="math-display">
\[
\mathbb{P}(A)\ge 0
\]
</div>

### 2. 전체 확률은 1

가능한 모든 결과를 포함하는 표본공간의 확률은 1이다.

<div class="math-display">
\[
\mathbb{P}(\Omega)=1
\]
</div>

### 3. 가산가법성

서로 겹치지 않는 사건 <span class="math-inline" data-tex="A_1,A_2,\ldots"></span>에 대해, 합집합의 확률은 각 확률의 합과 같다.

<div class="math-display">
\[
\mathbb{P}\!\left(\bigcup_{i=1}^{\infty}A_i\right)
=
\sum_{i=1}^{\infty}\mathbb{P}(A_i)
\]
</div>

여기서 사건들이 서로 겹치지 않는다는 조건은

<div class="math-display">
\[
A_i\cap A_j=\varnothing
\qquad(i\ne j)
\]
</div>

를 뜻한다. 이 조건이 없으면 같은 결과가 여러 번 계산될 수 있다.

## 공집합의 확률

<span class="math-inline" data-tex="\Omega"></span>와 <span class="math-inline" data-tex="\varnothing"></span>은 서로 겹치지 않고, 둘의 합집합은 다시 <span class="math-inline" data-tex="\Omega"></span>이다.

<div class="math-display">
\[
\Omega\cup\varnothing=\Omega
\]
</div>

가산가법성을 적용하면

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

을 얻는다.

## 여사건 공식

사건 <span class="math-inline" data-tex="A"></span>와 여사건 <span class="math-inline" data-tex="A^c"></span>는 서로 겹치지 않고 합치면 표본공간 전체가 된다.

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
\mathbb{P}(A^c)=1-\mathbb{P}(A)
\]
</div>

이다.

## 단조성

<span class="math-inline" data-tex="A\subseteq B"></span>라면 <span class="math-inline" data-tex="B"></span>는 다음과 같이 겹치지 않는 두 부분으로 나뉜다.

<div class="math-display">
\[
B=A\cup(B\setminus A)
\]
</div>

그러므로

<div class="math-display">
\[
\mathbb{P}(B)
=
\mathbb{P}(A)+\mathbb{P}(B\setminus A)
\ge \mathbb{P}(A)
\]
</div>

이다. 즉, 더 큰 사건의 확률은 더 작은 사건의 확률보다 작을 수 없다.

## 차집합과 합집합

<span class="math-inline" data-tex="A\subseteq B"></span>인 경우에는

<div class="math-display">
\[
\mathbb{P}(B\setminus A)
=
\mathbb{P}(B)-\mathbb{P}(A)
\]
</div>

이다. 일반적인 두 사건에 대해서는 포함배제 원리를 사용한다.

<div class="math-display">
\[
\mathbb{P}(A\cup B)
=
\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B)
\]
</div>

교집합의 확률은 음이 아니므로 다음 상계도 얻는다.

<div class="math-display">
\[
\mathbb{P}(A\cup B)
\le
\mathbb{P}(A)+\mathbb{P}(B)
\]
</div>

이를 union bound 또는 Boole 부등식이라고 한다. 많은 사건에 대해서도 같은 방식으로 확장된다.

<div class="math-display">
\[
\mathbb{P}\!\left(\bigcup_{i=1}^{n}A_i\right)
\le
\sum_{i=1}^{n}\mathbb{P}(A_i)
\]
</div>

## 정리

Kolmogorov 공리는 음이 아닌 값, 전체 확률 1, 가산가법성의 세 조건이다. 공집합의 확률, 여사건 공식, 단조성, 포함배제 원리와 union bound는 별도의 가정이 아니라 이 공리에서 유도되는 결과이다.

## 연습 문제

1. Kolmogorov 공리만 이용해 포함배제 원리를 증명한다.
2. <span class="math-inline" data-tex="A_1,\ldots,A_n"></span>에 대한 union bound를 수학적 귀납법으로 증명한다.
3. <span class="math-inline" data-tex="A\subseteq B"></span>일 때 <span class="math-inline" data-tex="\mathbb{P}(B\setminus A)=\mathbb{P}(B)-\mathbb{P}(A)"></span>임을 보인다.

---

**확률 이론 정리 시리즈** · 2/11 · [← 이전: 1. Probability Space와 사건](/posts/probability-theory-01-foundations/) · [다음: 3. Random Variable과 CDF →](/posts/probability-theory-03-random-variable-cdf/)
