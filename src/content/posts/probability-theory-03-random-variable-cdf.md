---
title: "3. Random Variable과 CDF"
description: "Random Variable의 함수적 의미와 CDF의 정의, 기본 성질, 구간 확률 계산 방법을 정리한다."
date: "2025-05-01"
category: "확률 이론"
tags: ["probability-theory", "random-variable", "cdf", "distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

확률 실험의 결과는 동전의 앞뒤처럼 기호일 수도 있고, 주사위의 눈처럼 숫자일 수도 있다. 계산을 체계적으로 하려면 각 결과를 숫자에 대응시켜야 한다. 이 역할을 하는 함수가 Random Variable이다.

## Random Variable의 정의

Random Variable <span class="math-inline" data-tex="X"></span>는 표본공간의 각 결과를 실수에 대응시키는 함수이다.

<div class="math-display">
\[
X:\Omega\to\mathbb{R}
\]
</div>

이름에 variable이 들어가지만, 수학적으로는 함수라는 점이 중요하다. 실제로 무작위인 것은 표본공간에서 어떤 결과 <span class="math-inline" data-tex="\omega"></span>가 선택되는지이며, <span class="math-inline" data-tex="X"></span>는 선택된 결과를 숫자 <span class="math-inline" data-tex="X(\omega)"></span>로 바꾼다.

동전을 두 번 던지는 경우

<div class="math-display">
\[
\Omega=\{HH,HT,TH,TT\}
\]
</div>

이고, <span class="math-inline" data-tex="X"></span>를 앞면의 개수로 정의하면

<div class="math-display">
\[
X(HH)=2,
\qquad
X(HT)=X(TH)=1,
\qquad
X(TT)=0
\]
</div>

이다. 서로 다른 결과가 같은 값으로 대응될 수 있다.

## Random Variable이 만드는 사건

<span class="math-inline" data-tex="X=x"></span>는 숫자 하나가 아니라 “<span class="math-inline" data-tex="X"></span>의 값이 <span class="math-inline" data-tex="x"></span>가 되는 모든 결과”를 모은 사건이다.

<div class="math-display">
\[
\{X=x\}
=
\{\omega\in\Omega:X(\omega)=x\}
\]
</div>

따라서

<div class="math-display">
\[
\mathbb{P}(X=x)
=
\mathbb{P}\!\left(\{\omega:X(\omega)=x\}\right)
\]
</div>

로 이해해야 한다.

예를 들어 공정한 주사위에서 <span class="math-inline" data-tex="X"></span>를 짝수 여부로 정의해 짝수이면 0, 홀수이면 1을 부여한다고 하자. 그러면

<div class="math-display">
\[
\{X=0\}=\{2,4,6\}
\]
</div>

이므로 <span class="math-inline" data-tex="\mathbb{P}(X=0)=1/2"></span>이다.

## Distribution과 CDF

Random Variable의 Distribution은 가능한 값에 확률이 어떻게 배분되어 있는지를 나타낸다. 이를 이산형과 연속형에 관계없이 항상 표현할 수 있는 함수가 Cumulative Distribution Function, 즉 CDF이다.

<div class="math-display">
\[
F_X(x)=\mathbb{P}(X\le x)
\]
</div>

CDF는 특정 값 하나의 확률이 아니라 <span class="math-inline" data-tex="x"></span> 이하에 누적된 확률이다.

동전을 세 번 던지고 <span class="math-inline" data-tex="X"></span>를 앞면의 개수라고 하자. 이때

<div class="math-display">
\[
\mathbb{P}(X=0)=\frac18,
\qquad
\mathbb{P}(X=1)=\frac38
\]
</div>

이므로

<div class="math-display">
\[
F_X(1)
=
\mathbb{P}(X\le1)
=
\frac18+\frac38
=
\frac12
\]
</div>

이다.

## CDF의 기본 성질

모든 CDF는 다음 세 성질을 만족한다.

### 1. 양 끝에서의 극한

<div class="math-display">
\[
\lim_{x\to-\infty}F_X(x)=0,
\qquad
\lim_{x\to\infty}F_X(x)=1
\]
</div>

### 2. 단조 증가

<span class="math-inline" data-tex="x_1\le x_2"></span>이면 사건 <span class="math-inline" data-tex="\{X\le x_1\}"></span>이 <span class="math-inline" data-tex="\{X\le x_2\}"></span>에 포함되므로

<div class="math-display">
\[
F_X(x_1)\le F_X(x_2)
\]
</div>

이다.

### 3. 우연속성

<div class="math-display">
\[
\lim_{x\downarrow x_0}F_X(x)=F_X(x_0)
\]
</div>

이산 Random Variable의 CDF는 값이 갑자기 뛰는 지점을 가질 수 있다. 그 점프의 크기는 해당 점의 확률과 같다.

<div class="math-display">
\[
\mathbb{P}(X=x)
=
F_X(x)-F_X(x^-)
\]
</div>

여기서 <span class="math-inline" data-tex="F_X(x^-)"></span>는 <span class="math-inline" data-tex="x"></span>의 왼쪽 극한이다.

## 구간 확률 계산

CDF를 이용하면 구간 확률을 다음처럼 계산할 수 있다.

<div class="math-display">
\[
\mathbb{P}(a<X\le b)
=
F_X(b)-F_X(a)
\]
</div>

이산형에서는 경계값을 포함하는지에 따라 확률이 달라질 수 있다. 예를 들어

<div class="math-display">
\[
\mathbb{P}(a\le X\le b)
=
F_X(b)-F_X(a^-)
\]
</div>

이다.

## 정리

Random Variable은 표본공간의 결과를 실수에 대응시키는 함수이다. CDF는 <span class="math-inline" data-tex="X\le x"></span>의 누적 확률을 나타내며, 양 끝에서 0과 1로 수렴하고, 단조 증가하며, 우연속이다.

## 연습 문제

1. 동전을 세 번 던질 때 앞면의 개수 <span class="math-inline" data-tex="X"></span>에 대한 CDF를 구간별로 작성한다.
2. <span class="math-inline" data-tex="F(x)=1/(1+e^{-x})"></span>가 CDF의 조건을 만족하는지 확인한다.
3. CDF의 점프 크기가 <span class="math-inline" data-tex="\mathbb{P}(X=x)"></span>와 같음을 설명한다.

---

**확률 이론 정리 시리즈** · 3/11 · [← 이전: 2. Kolmogorov 공리](/posts/probability-theory-02-kolmogorov-axioms/) · [다음: 4. 이산·연속 Random Variable과 PMF·PDF →](/posts/probability-theory-04-discrete-continuous-pmf-pdf/)
