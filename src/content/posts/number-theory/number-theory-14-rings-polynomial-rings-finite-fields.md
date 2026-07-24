---
title: "14. Rings, Polynomial Rings, and Finite Fields"
description: "정수의 나눗셈과 합동을 ring과 polynomial ring으로 확장하고 irreducible polynomial을 이용해 finite field를 구성한다."
date: "2026-02-11"
category: "정수론"
tags: ["number-theory", "ring", "polynomial-ring", "finite-field", "galois-field"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 14
featured: false
draft: false
---

정수에서 사용한 나눗셈, 최대공약수, 합동류의 개념은 polynomial ring에서도 거의 같은 형태로 나타난다. 이 관점은 <span class="math-inline" data-tex-b64="R0YocF5kKQ=="></span>와 같은 finite field를 구성하고 현대 암호학의 대수적 기반을 이해하는 데 필요하다.

## Ring과 Field

Ring <span class="math-inline" data-tex-b64="Ug=="></span>은 덧셈에 대해 Abelian group이고, 곱셈이 결합법칙과 분배법칙을 만족하는 구조이다. 여기서는 곱셈 항등원 1을 갖는 commutative ring을 주로 다룬다.

원소 <span class="math-inline" data-tex-b64="dVxpbiBS"></span>가 <span class="math-inline" data-tex-b64="dXY9MQ=="></span>인 <span class="math-inline" data-tex-b64="dg=="></span>를 가지면 unit이라고 한다. 모든 0이 아닌 원소가 unit인 commutative ring을 field라고 한다.

- <span class="math-inline" data-tex-b64="XG1hdGhiYiBa"></span>의 unit은 <span class="math-inline" data-tex-b64="XHBtMQ=="></span>이다.
- <span class="math-inline" data-tex-b64="XG1hdGhiYiBaL25cbWF0aGJiIFo="></span>에서 <span class="math-inline" data-tex-b64="XGJhciBh"></span>가 unit일 필요충분조건은 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이다.
- <span class="math-inline" data-tex-b64="XG1hdGhiYiBaL3BcbWF0aGJiIFo="></span>는 <span class="math-inline" data-tex-b64="cA=="></span>가 소수일 때 field이다.

## Zero Divisor와 Integral Domain

0이 아닌 <span class="math-inline" data-tex-b64="YSxi"></span>가 <span class="math-inline" data-tex-b64="YWI9MA=="></span>을 만족하면 zero divisor라고 한다. Zero divisor가 없는 commutative ring을 integral domain이라고 한다.

예를 들어 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaLzZcbWF0aGJiIFo="></span>에서는

<div class="math-display" data-tex-b64="XGJhcjJcY2RvdFxiYXIzPVxiYXIw"></div>

이므로 integral domain이 아니다. Field는 항상 integral domain이지만 역은 일반적으로 성립하지 않는다.

## Irreducible과 UFD

Integral domain에서 0도 unit도 아닌 <span class="math-inline" data-tex-b64="YQ=="></span>가 <span class="math-inline" data-tex-b64="YT1iYw=="></span>일 때 항상 <span class="math-inline" data-tex-b64="Yg=="></span> 또는 <span class="math-inline" data-tex-b64="Yw=="></span>가 unit이면 irreducible이라고 한다. 정수에서 소수는 irreducible과 일치한다.

모든 0이 아닌 nonunit이 irreducible들의 곱으로 본질적으로 유일하게 분해되는 domain을 UFD라고 한다. <span class="math-inline" data-tex-b64="XG1hdGhiYiBa"></span>와 field 위의 polynomial ring <span class="math-inline" data-tex-b64="Rlt4XQ=="></span>는 UFD이다.

## Polynomial Ring

<div class="math-display" data-tex-b64="Rlt4XT1ce2FfMCthXzF4K1xjZG90cythX254Xm5cbWlkIGFfaVxpbiBGXH0="></div>

이다. 최고차항 계수가 1인 다항식을 monic polynomial이라고 한다.

Field <span class="math-inline" data-tex-b64="Rg=="></span> 위에서는 정수의 Division Algorithm과 같은 정리가 성립한다.

> <span class="math-inline" data-tex-b64="YSh4KSxiKHgpXGluIEZbeF0="></span>, <span class="math-inline" data-tex-b64="Yih4KVxuZTA="></span>이면 유일한 <span class="math-inline" data-tex-b64="cSh4KSxyKHgp"></span>가 존재하여
>
> <div class="math-display" data-tex-b64="YSh4KT1iKHgpcSh4KStyKHgpLFxxcXVhZCByPTBcdGV4dHsg65iQ64qUIH1cZGVnIHI8XGRlZyBi"></div>

이다.

Leading coefficient를 역원으로 나눌 수 있기 때문에 long division이 항상 진행된다.

## Polynomial GCD와 Euclidean Algorithm

Polynomial division을 반복하면 <span class="math-inline" data-tex-b64="XGdjZChhKHgpLGIoeCkp"></span>을 구할 수 있다. Field의 nonzero constant는 모두 unit이므로 gcd는 constant multiple까지 여러 개일 수 있다. 보통 monic gcd를 선택하여 유일하게 만든다.

Extended Euclidean Algorithm도 성립하여

<div class="math-display" data-tex-b64="ZCh4KT11KHgpYSh4KSt2KHgpYih4KQ=="></div>

를 만족하는 <span class="math-inline" data-tex-b64="dSx2"></span>를 구할 수 있다.

## Irreducible Polynomial

<span class="math-inline" data-tex-b64="Zih4KVxpbiBGW3hd"></span>가 nonconstant이고 더 낮은 차수의 nonconstant polynomial의 곱으로 분해되지 않으면 irreducible이다.

degree 2 또는 3인 다항식은 <span class="math-inline" data-tex-b64="Rg=="></span> 안에 root가 없을 필요충분조건으로 irreducible이다. 예를 들어 <span class="math-inline" data-tex-b64="eF4zK3grMVxpblxtYXRoYmIgRl8yW3hd"></span>은 0과 1을 대입해도 0이 아니므로 irreducible이다.

Field 위 polynomial ring의 모든 nonzero polynomial은 monic irreducible polynomial들의 곱으로 유일하게 분해된다.

## Quotient Ring <span class="math-inline" data-tex-b64="Rlt4XS8obSh4KSk="></span>

<span class="math-inline" data-tex-b64="bSh4KQ=="></span>을 법으로 하는 polynomial congruence를 정의하고, 모든 polynomial을 degree <span class="math-inline" data-tex-b64="PGQ9XGRlZyBt"></span>인 remainder로 대표한다.

<div class="math-display" data-tex-b64="Rlt4XS8obSk9XHtcb3ZlcmxpbmV7YV8wK2FfMXgrXGNkb3RzK2Ffe2QtMX14XntkLTF9fVx9"></div>

<span class="math-inline" data-tex-b64="Rj1cbWF0aGJiIEZfcA=="></span>이면 각 coefficient에 <span class="math-inline" data-tex-b64="cA=="></span>개의 선택이 있으므로 원소 수는

<div class="math-display" data-tex-b64="cF5k"></div>

개이다.

## Invertibility in the Quotient

<span class="math-inline" data-tex-b64="XGJhciBhKHgp"></span>가 <span class="math-inline" data-tex-b64="Rlt4XS8obSk="></span>에서 unit일 필요충분조건은

<div class="math-display" data-tex-b64="XGdjZChhKHgpLG0oeCkpPTE="></div>

이다. Bézout identity에서 <span class="math-inline" data-tex-b64="dSh4KWEoeCkrdih4KW0oeCk9MQ=="></span>이면 quotient에서 <span class="math-inline" data-tex-b64="XGJhciB1XGJhciBhPVxiYXIx"></span>이 된다.

따라서 <span class="math-inline" data-tex-b64="bSh4KQ=="></span>이 irreducible이면 모든 nonzero class가 <span class="math-inline" data-tex-b64="bQ=="></span>과 서로소이므로 quotient는 field이다. 반대로 <span class="math-inline" data-tex-b64="bT1mZw=="></span>로 reducible이면 <span class="math-inline" data-tex-b64="XGJhciBmXGJhciBnPTA="></span>인 zero divisor가 생긴다.

## Finite Field와 Galois Field

원소 수가 유한한 field를 finite field 또는 Galois field라고 한다. 모든 finite field의 원소 수는 prime power <span class="math-inline" data-tex-b64="cF5k"></span>이며, 각 <span class="math-inline" data-tex-b64="cF5k"></span>에 대해 동형을 제외하면 유일한 field가 존재한다.

<div class="math-display" data-tex-b64="R0YocF5kKVxjb25nXG1hdGhiYiBGX3BbeF0vKG0oeCkp"></div>

여기서 <span class="math-inline" data-tex-b64="bSh4KQ=="></span>은 degree <span class="math-inline" data-tex-b64="ZA=="></span>인 irreducible polynomial이다.

예를 들어

<div class="math-display" data-tex-b64="R0YoOCk9XG1hdGhiYiBGXzJbeF0vKHheMyt4KzEp"></div>

로 구성할 수 있다. <span class="math-inline" data-tex-b64="XGFscGhhPVxiYXIgeA=="></span>라 두면

<div class="math-display" data-tex-b64="XGFscGhhXjM9XGFscGhhKzE="></div>

이라는 관계로 모든 높은 차수의 거듭제곱을 줄인다.

## Multiplicative Group of a Finite Field

<span class="math-inline" data-tex-b64="R0YocSleKj1HRihxKVxzZXRtaW51c1x7MFx9"></span>는 크기 <span class="math-inline" data-tex-b64="cS0x"></span>인 cyclic group이다. 따라서 어떤 generator <span class="math-inline" data-tex-b64="Zw=="></span>가 존재하여

<div class="math-display" data-tex-b64="R0YocSleKj1cezEsZyxnXjIsXGxkb3RzLGdee3EtMn1cfQ=="></div>

이다. 이는 소수 법의 primitive root 이론을 모든 finite field로 확장한다.

## 정리

Polynomial ring은 정수와 유사한 division, gcd, Bézout identity와 unique factorization을 가진다. Irreducible polynomial로 quotient를 만들면 <span class="math-inline" data-tex-b64="cF5k"></span>개의 원소를 가진 finite field가 된다. 이 field의 nonzero 원소는 cyclic multiplicative group을 이룬다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="eF4yKzFcaW5cbWF0aGJiIEZfM1t4XQ=="></span>이 irreducible인지 판정한다.
2. <span class="math-inline" data-tex-b64="XG1hdGhiYiBGXzJbeF0vKHheMyt4KzEp"></span>의 원소 수를 구한다.
3. quotient에서 <span class="math-inline" data-tex-b64="XGFscGhhXjM9XGFscGhhKzE="></span>일 때 <span class="math-inline" data-tex-b64="XGFscGhhXjU="></span>을 degree 2 이하로 줄인다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="eD0wLDEsMg=="></span>를 대입하면 값은 각각 <span class="math-inline" data-tex-b64="MSwyLDI="></span>이므로 root가 없다. degree 2 다항식이므로 irreducible이다.

### 2번

degree가 3이고 coefficient field가 <span class="math-inline" data-tex-b64="XG1hdGhiYiBGXzI="></span>이므로 <span class="math-inline" data-tex-b64="Ml4zPTg="></span>개이다.

### 3번

<div class="math-display" data-tex-b64="XGFscGhhXjU9XGFscGhhXjJcYWxwaGFeMz1cYWxwaGFeMihcYWxwaGErMSk9XGFscGhhXjMrXGFscGhhXjI9XGFscGhhXjIrXGFscGhhKzE="></div>

이다.
