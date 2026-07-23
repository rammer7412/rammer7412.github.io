---
title: "1. Probability Space와 사건"
description: "확률을 정의하기 위한 Probability Space의 세 요소와 사건의 집합 연산, 포함배제 원리를 정리한다."
date: "2025-04-28"
category: "확률 이론"
tags: ["probability-theory", "probability-space", "sample-space", "event", "set-operation"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

확률 이론은 ‘어떤 일이 일어날 가능성’을 수치로 표현하는 학문이지만, 확률값을 계산하기 전에 먼저 **무엇을 결과로 보고 어떤 사건에 확률을 부여할지** 정해야 한다. 이를 하나의 수학적 구조로 묶은 것이 Probability Space이다.

## Probability Space의 구성

Probability Space는 다음 세 요소로 이루어진다.

<div class="math-display">
\[
(\Omega,\mathcal{F},\mathbb{P})
\]
</div>

- <span class="math-inline" data-tex="\Omega"></span>는 가능한 모든 결과를 모은 **표본공간(sample space)**이다.
- <span class="math-inline" data-tex="\mathcal{F}"></span>는 확률을 부여할 사건들을 모은 **사건족(event space)**이다.
- <span class="math-inline" data-tex="\mathbb{P}"></span>는 각 사건에 0과 1 사이의 값을 부여하는 **확률측도(probability measure)**이다.

표본공간의 원소 하나를 결과(outcome)라고 한다. 사건(event)은 결과 하나 또는 여러 결과를 묶은 집합이다. 예를 들어 동전을 한 번 던질 때

<div class="math-display">
\[
\Omega=\{H,T\}
\]
</div>

이며, 앞면이 나오는 사건을 <span class="math-inline" data-tex="A"></span>라고 두면 <span class="math-inline" data-tex="A=\{H\}"></span>이다. “앞면 또는 뒷면이 나온다”는 사건은 표본공간 전체인 <span class="math-inline" data-tex="\Omega"></span>와 같다.

유한하거나 셀 수 있는 표본공간에서는 흔히 <span class="math-inline" data-tex="\mathcal{F}=2^{\Omega}"></span>, 즉 모든 부분집합을 사건으로 사용한다. 연속적인 표본공간에서는 모든 부분집합에 일관된 확률을 부여할 수 없기 때문에, 보렐 집합과 같은 적절한 사건족을 사용한다.

## 사건의 집합 연산

사건은 집합이므로 집합 연산으로 결합할 수 있다.

- <span class="math-inline" data-tex="A\cup B"></span>: <span class="math-inline" data-tex="A"></span> 또는 <span class="math-inline" data-tex="B"></span>가 일어나는 사건
- <span class="math-inline" data-tex="A\cap B"></span>: <span class="math-inline" data-tex="A"></span>와 <span class="math-inline" data-tex="B"></span>가 동시에 일어나는 사건
- <span class="math-inline" data-tex="A^c"></span>: <span class="math-inline" data-tex="A"></span>가 일어나지 않는 사건
- <span class="math-inline" data-tex="A\setminus B"></span>: <span class="math-inline" data-tex="A"></span>는 일어나지만 <span class="math-inline" data-tex="B"></span>는 일어나지 않는 사건

포함 관계 <span class="math-inline" data-tex="A\subseteq B"></span>는 <span class="math-inline" data-tex="A"></span>가 일어나면 반드시 <span class="math-inline" data-tex="B"></span>도 일어난다는 뜻이다.

<div class="math-display">
\[
A\subseteq B
\quad\Longleftrightarrow\quad
\omega\in A\Rightarrow\omega\in B
\]
</div>

De Morgan 법칙은 여집합이 포함된 사건을 바꿔 쓸 때 자주 사용한다.

<div class="math-display">
\[
(A\cup B)^c=A^c\cap B^c,
\qquad
(A\cap B)^c=A^c\cup B^c
\]
</div>

## 서로 배반인 사건

두 사건이 동시에 일어날 수 없으면 **서로 배반(mutually exclusive)**이라고 한다.

<div class="math-display">
\[
A\cap B=\varnothing
\]
</div>

서로 배반이라는 말과 독립이라는 말은 다르다. 서로 배반인 사건은 동시에 발생할 수 없다는 뜻이고, 독립은 한 사건의 발생이 다른 사건의 확률을 바꾸지 않는다는 뜻이다. 확률이 0이 아닌 두 사건이 서로 배반이면 일반적으로 독립이 아니다.

## 포함배제 원리

<span class="math-inline" data-tex="A"></span>와 <span class="math-inline" data-tex="B"></span>의 확률을 단순히 더하면 교집합이 두 번 포함된다. 이 중복을 한 번 빼는 공식이 포함배제 원리이다.

<div class="math-display">
\[
\mathbb{P}(A\cup B)
=
\mathbb{P}(A)+\mathbb{P}(B)-\mathbb{P}(A\cap B)
\]
</div>

서로 배반인 경우에는 <span class="math-inline" data-tex="\mathbb{P}(A\cap B)=0"></span>이므로

<div class="math-display">
\[
\mathbb{P}(A\cup B)=\mathbb{P}(A)+\mathbb{P}(B)
\]
</div>

가 된다.

## 이후에 자주 사용하는 두 도구

확률분포의 식을 전개하거나 정규화할 때 이항정리와 Gamma Function이 자주 등장한다.

이항정리는 다음과 같다.

<div class="math-display">
\[
(a+b)^n
=
\sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k}
\]
</div>

특히 <span class="math-inline" data-tex="a=p"></span>, <span class="math-inline" data-tex="b=1-p"></span>를 대입하면 Binomial Distribution의 PMF 합이 1임을 바로 확인할 수 있다.

<div class="math-display">
\[
\sum_{k=0}^{n}\binom{n}{k}p^k(1-p)^{n-k}=1
\]
</div>

Gamma Function은 factorial을 양의 실수 영역으로 확장한 함수이다.

<div class="math-display">
\[
\Gamma(\alpha)
=
\int_0^{\infty}t^{\alpha-1}e^{-t}\,dt,
\qquad \alpha>0
\]
</div>

부분적분을 적용하면 다음 점화식을 얻는다.

<div class="math-display">
\[
\Gamma(\alpha+1)=\alpha\Gamma(\alpha)
\]
</div>

따라서 자연수 <span class="math-inline" data-tex="n"></span>에 대해 <span class="math-inline" data-tex="\Gamma(n+1)=n!"></span>이며, <span class="math-inline" data-tex="\Gamma(1/2)=\sqrt{\pi}"></span>이다.

## 정리

Probability Space는 표본공간, 사건족, 확률측도의 세 요소로 구성된다. 사건은 집합으로 다루며, 합집합·교집합·여집합을 이용해 복합 사건을 표현한다. 포함배제 원리는 사건 사이의 중복을 보정하는 기본 공식이다.

## 연습 문제

1. 주사위를 한 번 던질 때 표본공간과 “짝수가 나온다”라는 사건을 집합으로 표현한다.
2. 두 사건이 서로 배반인 경우와 독립인 경우의 차이를 예시로 설명한다.
3. 부분적분을 이용해 <span class="math-inline" data-tex="\Gamma(\alpha+1)=\alpha\Gamma(\alpha)"></span>를 증명한다.

---

**확률 이론 정리 시리즈** · 1/11 · [다음: 2. Kolmogorov 공리 →](/posts/probability-theory-02-kolmogorov-axioms/)
