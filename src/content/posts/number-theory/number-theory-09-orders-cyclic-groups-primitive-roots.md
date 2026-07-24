---
title: "9. Orders, Cyclic Groups, and Primitive Roots"
description: "유한군의 order와 cyclic structure를 정리하고 primitive root의 성질, 판별법과 존재 범위를 살펴본다."
date: "2026-02-03"
category: "정수론"
tags: ["number-theory", "group", "order", "cyclic-group", "primitive-root"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 9
featured: false
draft: false
---

합동식의 거듭제곱은 단순히 지수가 반복되는 것이 아니라 유한한 곱셈군 안에서 주기를 이룬다. 이 주기를 order라고 하며, 하나의 원소가 모든 원소를 생성하면 primitive root가 된다.

## Finite Group과 Cyclic Group

집합 <span class="math-inline" data-tex-b64="Rw=="></span>와 연산 <span class="math-inline" data-tex-b64="XGNpcmM="></span>가 결합법칙, 항등원, 역원을 만족하면 group이다. 연산이 교환법칙까지 만족하면 Abelian group이다.

<span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>인 residue class들의 집합

<div class="math-display" data-tex-b64="KFxtYXRoYmIgWi9uXG1hdGhiYiBaKV5cdGltZXM="></div>

은 곱셈에 대해 크기 <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>인 유한 Abelian group이다.

원소 <span class="math-inline" data-tex-b64="Zw=="></span>의 모든 정수 거듭제곱으로 군 전체를 만들 수 있으면

<div class="math-display" data-tex-b64="Rz1cbGFuZ2xlIGdccmFuZ2xl"></div>

라고 하고 cyclic group이라 한다. <span class="math-inline" data-tex-b64="Zw=="></span>를 generator라고 한다.

## Order of an Element

유한군에서 <span class="math-inline" data-tex-b64="YQ=="></span>의 order는

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGEpPVxtaW5ce2tcaW5cbWF0aGJiIFpfez4wfVxtaWQgYV5rPWVcfQ=="></div>

이다. modulo <span class="math-inline" data-tex-b64="bg=="></span>에서는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X24oYSk="></span>로 쓴다.

> <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGEpPWQ="></span>이면
>
> <div class="math-display" data-tex-b64="YV5rPWVccXVhZFxMb25nbGVmdHJpZ2h0YXJyb3dccXVhZCBkXG1pZCBr"></div>

이다. <span class="math-inline" data-tex-b64="az1xZCty"></span>, <span class="math-inline" data-tex-b64="MFxsZSByPGQ="></span>로 나누면 <span class="math-inline" data-tex-b64="YV5rPWFecg=="></span>이고, 이것이 항등원이면 order의 최소성으로 <span class="math-inline" data-tex-b64="cj0w"></span>이다.

## Lagrange’s Theorem

유한군 <span class="math-inline" data-tex-b64="Rw=="></span>의 부분군 <span class="math-inline" data-tex-b64="SA=="></span>의 크기는 <span class="math-inline" data-tex-b64="fEd8"></span>를 나눈다. 특히 <span class="math-inline" data-tex-b64="XGxhbmdsZSBhXHJhbmdsZQ=="></span>의 크기는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGEp"></span>이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGEpXG1pZCB8R3w="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X24oYSlcbWlkXHZhcnBoaShuKQ=="></div>

이며 Euler’s Theorem도 이 결과의 한 형태이다.

## Order of a Power

<span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGEpPWQ="></span>이면

> <div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9KGFeayk9XGZyYWN7ZH17XGdjZChkLGspfQ=="></div>

이다.

<span class="math-inline" data-tex-b64="Zz1cZ2NkKGQsayk="></span>, <span class="math-inline" data-tex-b64="ZD1nZF8x"></span>, <span class="math-inline" data-tex-b64="az1na18x"></span>라 하자. <span class="math-inline" data-tex-b64="KGFeaylee2RfMX09YV57a2RfMX09YV57a18xZH09ZQ=="></span>이다. 더 작은 지수에서 항등원이 된다면 <span class="math-inline" data-tex-b64="ZFxtaWQga3Q="></span>이고, <span class="math-inline" data-tex-b64="XGdjZChkXzEsa18xKT0x"></span>이므로 <span class="math-inline" data-tex-b64="ZF8xXG1pZCB0"></span>가 되어 최소값은 <span class="math-inline" data-tex-b64="ZF8x"></span>이다.

## Primitive Root

<span class="math-inline" data-tex-b64="XGdjZChnLG4pPTE="></span>이고

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X24oZyk9XHZhcnBoaShuKQ=="></div>

이면 <span class="math-inline" data-tex-b64="Zw=="></span>를 modulo <span class="math-inline" data-tex-b64="bg=="></span>의 primitive root라고 한다. 이때

<div class="math-display" data-tex-b64="ZyxnXjIsXGxkb3RzLGdee1x2YXJwaGkobil9"></div>

은 reduced residue system 전체를 정확히 한 번 생성한다.

소수 <span class="math-inline" data-tex-b64="cA=="></span>에 대해 <span class="math-inline" data-tex-b64="KFxtYXRoYmIgWi9wXG1hdGhiYiBaKV5cdGltZXM="></span>는 cyclic이므로 primitive root가 항상 존재한다.

## Polynomial Congruence의 Root Bound

<span class="math-inline" data-tex-b64="cA=="></span>가 소수이고 <span class="math-inline" data-tex-b64="Zih4KQ=="></span>가 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 0이 아닌 degree <span class="math-inline" data-tex-b64="ZA=="></span> 다항식이면 <span class="math-inline" data-tex-b64="Zih4KVxlcXVpdjBccG1vZCBw"></span>의 해는 최대 <span class="math-inline" data-tex-b64="ZA=="></span>개이다.

증명은 한 근 <span class="math-inline" data-tex-b64="YQ=="></span>가 있으면 field 위의 factor theorem으로 <span class="math-inline" data-tex-b64="Zih4KT0oeC1hKXEoeCk="></span>로 인수분해하고 induction을 적용한다. 이 정리는

<div class="math-display" data-tex-b64="eF5kXGVxdWl2MVxwbW9kIHA="></div>

의 해 개수를 제어하는 데 사용된다.

## Order가 정확히 <span class="math-inline" data-tex-b64="ZA=="></span>인 원소

<span class="math-inline" data-tex-b64="ZFxtaWQgcC0x"></span>이면 <span class="math-inline" data-tex-b64="eF5kXGVxdWl2MVxwbW9kIHA="></span>은 정확히 <span class="math-inline" data-tex-b64="ZA=="></span>개의 해를 가진다. 한편 그 해들은 order가 <span class="math-inline" data-tex-b64="ZA=="></span>의 약수인 원소들이다. order가 정확히 <span class="math-inline" data-tex-b64="Yw=="></span>인 원소 수를 <span class="math-inline" data-tex-b64="XHBzaShjKQ=="></span>라 하면

<div class="math-display" data-tex-b64="ZD1cc3VtX3tjXG1pZCBkfVxwc2koYyk="></div>

이다. Gauss identity <span class="math-inline" data-tex-b64="ZD1cc3VtX3tjXG1pZCBkfVx2YXJwaGkoYyk="></span>와 비교하면

<div class="math-display" data-tex-b64="XHBzaShkKT1cdmFycGhpKGQp"></div>

이다. 특히 primitive root의 개수는

<div class="math-display" data-tex-b64="XHZhcnBoaShwLTEp"></div>

이다.

## Primitive Root Test

<span class="math-inline" data-tex-b64="cC0xPVxwcm9kIHFfaV57ZV9pfQ=="></span>가 소인수분해되어 있다고 하자. <span class="math-inline" data-tex-b64="Zw=="></span>가 primitive root일 필요충분조건은 모든 서로 다른 소인수 <span class="math-inline" data-tex-b64="cV9p"></span>에 대해

<div class="math-display" data-tex-b64="Z157KHAtMSkvcV9pfVxub3RcZXF1aXYxXHBtb2QgcA=="></div>

인 것이다. order는 <span class="math-inline" data-tex-b64="cC0x"></span>의 약수이므로, 어떤 소인수 방향으로도 order가 줄어들지 않음을 확인하는 검사이다.

예를 들어 <span class="math-inline" data-tex-b64="cD0xNw=="></span>, <span class="math-inline" data-tex-b64="cC0xPTJeNA=="></span>에서 <span class="math-inline" data-tex-b64="Zz0z"></span>은

<div class="math-display" data-tex-b64="M144XGVxdWl2LTFcbm90XGVxdWl2MVxwbW9kezE3fQ=="></div>

이므로 order가 16이고 primitive root이다.

## Primitive Root가 존재하는 법

양의 정수 <span class="math-inline" data-tex-b64="bg=="></span>이 primitive root를 가질 필요충분조건은

<div class="math-display" data-tex-b64="bj0yLFwgNCxcIHBeayxcIDJwXms="></div>

중 하나인 것이다. 여기서 <span class="math-inline" data-tex-b64="cA=="></span>는 홀수 소수이다.

완전한 증명은 여러 보조정리를 요구한다. 핵심 아이디어는 홀수 소수 <span class="math-inline" data-tex-b64="cA=="></span>의 primitive root 중 적절한 것을 <span class="math-inline" data-tex-b64="cF4y"></span>로 lift한 뒤 induction으로 <span class="math-inline" data-tex-b64="cF5r"></span>까지 order를 유지하는 것이다. 반대로 서로 다른 두 홀수 소인수를 갖거나 <span class="math-inline" data-tex-b64="Ml5r"></span>, <span class="math-inline" data-tex-b64="a1xnZTM="></span>인 경우에는 Euler 함수 크기보다 모든 원소의 order가 작아져 generator가 존재하지 않는다.

## 정리

Order는 유한군에서 거듭제곱의 최소 주기이며 군의 크기를 나눈다. Primitive root는 reduced residue system 전체를 생성하는 원소이다. 소수 법의 곱셈군은 cyclic이고, order가 <span class="math-inline" data-tex-b64="ZA=="></span>인 원소의 개수는 <span class="math-inline" data-tex-b64="XHZhcnBoaShkKQ=="></span>이다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X3sxM30oMyk="></span>을 구한다.
2. <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X3sxM30oM140KQ=="></span>을 공식으로 계산한다.
3. 2가 modulo 11의 primitive root인지 판정한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="M14xPTMsXCAzXjI9OSxcIDNeMz0xXHBtb2R7MTN9"></div>

이므로 order는 3이다.

### 2번

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtvcmR9X3sxM30oM140KT1cZnJhY3szfXtcZ2NkKDMsNCl9PTM="></div>

이다. 실제로 <span class="math-inline" data-tex-b64="M140XGVxdWl2M1xwbW9kezEzfQ=="></span>이다.

### 3번

<span class="math-inline" data-tex-b64="MTA9MlxjZG90NQ=="></span>이므로 <span class="math-inline" data-tex-b64="Ml41XG5vdFxlcXVpdjE="></span>과 <span class="math-inline" data-tex-b64="Ml4yXG5vdFxlcXVpdjE="></span>을 확인하면 된다.

<div class="math-display" data-tex-b64="Ml41XGVxdWl2LTEsXHFxdWFkMl4yXGVxdWl2NFxwbW9kezExfQ=="></div>

이므로 2는 primitive root이다.
