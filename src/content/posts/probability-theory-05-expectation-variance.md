---
title: "5. Expectation과 Variance"
description: "Distribution의 중심과 퍼짐을 나타내는 Expectation, Variance, Standard Deviation의 정의와 성질을 정리한다."
date: "2025-06-21"
category: "확률 이론"
tags: ["probability-theory", "expectation", "variance", "standard-deviation"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Distribution 전체의 특징을 몇 개의 수치로 요약할 때 가장 먼저 사용하는 값이 Expectation과 Variance이다. Expectation은 확률질량의 균형점에 해당하고, Variance는 값들이 그 중심에서 얼마나 퍼져 있는지를 나타낸다.

## Expectation

Expectation은 가능한 값에 그 값이 나타날 확률을 가중치로 곱해 평균을 낸 값이다. 이산형과 연속형에서 각각 다음과 같이 정의한다.

<div class="math-display">
\[
\mathbb{E}[X]
=
\sum_x x\,p_X(x)
\]
</div>

<div class="math-display">
\[
\mathbb{E}[X]
=
\int_{-\infty}^{\infty}x\,f_X(x)\,dx
\]
</div>

함수 <span class="math-inline" data-tex="g(X)"></span>의 Expectation은 Distribution을 먼저 구하지 않고도 다음처럼 계산할 수 있다.

<div class="math-display">
\[
\mathbb{E}[g(X)]
=
\begin{cases}
\displaystyle\sum_x g(x)p_X(x),&X\text{가 이산형},\\[6pt]
\displaystyle\int_{-\infty}^{\infty}g(x)f_X(x)\,dx,&X\text{가 연속형}.
\end{cases}
\]
</div>

이를 LOTUS(Law of the Unconscious Statistician)라고 부른다.

## Expectation의 선형성

상수 <span class="math-inline" data-tex="a,b"></span>와 Random Variable <span class="math-inline" data-tex="X,Y"></span>에 대해

<div class="math-display">
\[
\mathbb{E}[aX+bY]
=
a\mathbb{E}[X]+b\mathbb{E}[Y]
\]
</div>

가 성립한다. 이 성질에는 <span class="math-inline" data-tex="X"></span>와 <span class="math-inline" data-tex="Y"></span>의 독립성이 필요하지 않다.

특히 지시함수 <span class="math-inline" data-tex="\mathbf{1}_A"></span>를 사용하면 사건의 확률을 Expectation으로 표현할 수 있다.

<div class="math-display">
\[
\mathbf{1}_A(\omega)
=
\begin{cases}
1,&\omega\in A,\\
0,&\omega\notin A,
\end{cases}
\]
</div>

<div class="math-display">
\[
\mathbb{E}[\mathbf{1}_A]=\mathbb{P}(A)
\]
</div>

이 성질은 개수의 평균을 계산할 때 유용하다.

## Variance

Variance는 <span class="math-inline" data-tex="X"></span>가 평균에서 벗어난 정도의 제곱을 평균 낸 값이다.

<div class="math-display">
\[
\operatorname{Var}(X)
=
\mathbb{E}\!\left[(X-\mathbb{E}[X])^2\right]
\]
</div>

계산할 때는 다음 형태가 더 편리하다.

<div class="math-display">
\[
\operatorname{Var}(X)
=
\mathbb{E}[X^2]-\mathbb{E}[X]^2
\]
</div>

제곱을 사용하므로 평균보다 큰 편차와 작은 편차가 서로 상쇄되지 않는다. 다만 단위도 원래 단위의 제곱이 된다.

## Standard Deviation

Standard Deviation은 Variance의 제곱근이다.

<div class="math-display">
\[
\operatorname{SD}(X)
=
\sqrt{\operatorname{Var}(X)}
\]
</div>

원래 자료와 같은 단위를 가지므로 퍼짐의 크기를 해석하기 쉽다.

## 선형 변환의 영향

<span class="math-inline" data-tex="Y=aX+b"></span>라고 하자. 그러면

<div class="math-display">
\[
\mathbb{E}[Y]=a\mathbb{E}[X]+b
\]
</div>

이고

<div class="math-display">
\[
\operatorname{Var}(Y)=a^2\operatorname{Var}(X)
\]
</div>

이다. 상수 <span class="math-inline" data-tex="b"></span>는 Distribution의 위치만 이동시키므로 Variance를 바꾸지 않는다. 반면 <span class="math-inline" data-tex="a"></span>는 값의 간격을 <span class="math-inline" data-tex="|a|"></span>배로 바꾸므로 Variance를 <span class="math-inline" data-tex="a^2"></span>배로 바꾼다.

## 독립인 합의 Variance

두 Random Variable이 독립이면

<div class="math-display">
\[
\operatorname{Var}(X+Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)
\]
</div>

이다. 일반적인 경우에는 공분산 항이 추가된다.

<div class="math-display">
\[
\operatorname{Var}(X+Y)
=
\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y)
\]
</div>

## 정리

Expectation은 Distribution의 중심을, Variance와 Standard Deviation은 퍼짐을 나타낸다. Expectation은 항상 선형이지만, Variance의 합 공식은 공분산 또는 독립성 조건을 함께 확인해야 한다.

## 연습 문제

1. 공정한 주사위 눈 <span class="math-inline" data-tex="X"></span>의 Expectation과 Variance를 구한다.
2. <span class="math-inline" data-tex="Y=3X-2"></span>일 때 <span class="math-inline" data-tex="\mathbb{E}[Y]"></span>와 <span class="math-inline" data-tex="\operatorname{Var}(Y)"></span>를 <span class="math-inline" data-tex="X"></span>의 값으로 표현한다.
3. 지시함수의 Expectation이 사건의 확률과 같음을 정의에서 증명한다.

---

**확률 이론 정리 시리즈** · 5/11 · [← 이전: 4. 이산·연속 Random Variable과 PMF·PDF](/posts/probability-theory-04-discrete-continuous-pmf-pdf/) · [다음: 6. 주요 이산 Distribution →](/posts/probability-theory-06-discrete-distributions/)
