---
title: "6. Factorization Methods and Arithmetic Functions"
description: "두 제곱수의 차와 제곱 합동식을 이용한 인수분해 원리를 살펴보고, 약수 개수 함수와 약수 합 함수의 공식을 증명한다."
date: "2026-01-30"
category: "정수론"
tags: ["number-theory", "factorization", "fermat-factorization", "quadratic-sieve", "divisor-function"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 6
featured: false
draft: false
---

소인수분해의 존재와 유일성은 이론적으로 완전한 설명을 제공하지만, 큰 정수의 소인수를 실제로 찾는 일은 별개의 계산 문제이다. 이 글에서는 두 제곱수의 차에서 출발해 제곱 합동식 기반 인수분해의 원리를 살펴보고, 소인수분해를 이용해 약수의 개수와 합을 계산한다.

## Difference of Squares

기본 항등식

<div class="math-display" data-tex-b64="eF4yLXleMj0oeC15KSh4K3kp"></div>

은 인수분해 알고리즘의 출발점이다. 홀수 합성수 <span class="math-inline" data-tex-b64="bj1hYg=="></span>에서 <span class="math-inline" data-tex-b64="YSxi"></span>가 홀수이고 <span class="math-inline" data-tex-b64="YVxsZSBi"></span>라 하면

<div class="math-display" data-tex-b64="eD1cZnJhY3thK2J9ezJ9LFxxcXVhZCB5PVxmcmFje2ItYX17Mn0="></div>

는 정수이고

<div class="math-display" data-tex-b64="bj1hYj14XjIteV4y"></div>

이다. 따라서 모든 홀수 합성수는 두 제곱수의 차로 표현된다. 문제는 적절한 <span class="math-inline" data-tex-b64="eCx5"></span>를 얼마나 빨리 찾는가이다.

## Fermat–Kraitchik Factorization

홀수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 <span class="math-inline" data-tex-b64="eD1cbGNlaWxcc3FydCBuXHJjZWls"></span>에서 시작해 <span class="math-inline" data-tex-b64="eF4yLW4="></span>이 완전제곱인지 확인한다.

<div class="math-display" data-tex-b64="eF4yLW49eV4y"></div>

이면

<div class="math-display" data-tex-b64="bj14XjIteV4yPSh4LXkpKHgreSk="></div>

이므로 인수를 얻는다.

이 방법은 두 인수 <span class="math-inline" data-tex-b64="YSxi"></span>가 서로 가까울수록 빠르다. 왜냐하면 <span class="math-inline" data-tex-b64="eD0oYStiKS8y"></span>가 <span class="math-inline" data-tex-b64="XHNxcnR7YWJ9"></span>에 가까워지기 때문이다. 반대로 한 인수가 매우 작고 다른 인수가 크면 많은 <span class="math-inline" data-tex-b64="eA=="></span>를 시험해야 한다.

### 예제: <span class="math-inline" data-tex-b64="NTk1OQ=="></span> 인수분해

<span class="math-inline" data-tex-b64="XHNxcnR7NTk1OX1cYXBwcm94NzcuMg=="></span>이므로 <span class="math-inline" data-tex-b64="eD03OA=="></span>부터 시작한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FycmF5fXtjfGN9CngmeF4yLTU5NTlcXCBcaGxpbmUKNzgmMTI1XFwKNzkmMjgyXFwKODAmNDQxPTIxXjIKXGVuZHthcnJheX0="></div>

따라서

<div class="math-display" data-tex-b64="NTk1OT04MF4yLTIxXjI9KDgwLTIxKSg4MCsyMSk9NTlcY2RvdDEwMQ=="></div>

이다.

## Congruent Squares와 인수분해

정확히 <span class="math-inline" data-tex-b64="eF4yLXleMj1u"></span>을 찾지 않아도 다음과 같은 합동식을 찾으면 인수를 얻을 수 있다.

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIG4="></div>

이는

<div class="math-display" data-tex-b64="blxtaWQoeC15KSh4K3kp"></div>

를 뜻한다. 만약 <span class="math-inline" data-tex-b64="eFxub3RcZXF1aXZccG0geVxwbW9kIG4="></span>이면 두 인수 중 어느 하나가 <span class="math-inline" data-tex-b64="bg=="></span> 전체를 포함하지 않으므로

<div class="math-display" data-tex-b64="XGdjZCh4LXksbiksXHFxdWFkXGdjZCh4K3ksbik="></div>

에서 비자명한 인수를 얻을 가능성이 높다.

“가능성이 높다”라고 표현하는 이유는 얻은 GCD가 1 또는 <span class="math-inline" data-tex-b64="bg=="></span>이 될 수도 있기 때문이다. 좋은 제곱 합동식은 <span class="math-inline" data-tex-b64="eFxub3RcZXF1aXZccG0geQ=="></span>를 만족해야 한다.

### 작은 예제

<span class="math-inline" data-tex-b64="bj03Nw=="></span>에서

<div class="math-display" data-tex-b64="MjBeMj00MDBcZXF1aXYxNVxwbW9kezc3fSxccXF1YWQxM14yPTE2OVxlcXVpdjE1XHBtb2R7Nzd9"></div>

이므로 <span class="math-inline" data-tex-b64="MjBeMlxlcXVpdjEzXjJccG1vZHs3N30="></span>이다. 따라서

<div class="math-display" data-tex-b64="XGdjZCgyMC0xMyw3Nyk9XGdjZCg3LDc3KT03"></div>

을 얻고 <span class="math-inline" data-tex-b64="Nzc9N1xjZG90MTE="></span>이다.

## Quadratic Sieve의 아이디어

Quadratic Sieve는 하나의 <span class="math-inline" data-tex-b64="eF4yLW4="></span>이 완전제곱이 되기를 기다리는 대신, 여러 값을 작은 소수들의 곱으로 분해한 뒤 조합하여 제곱을 만든다.

대략적인 흐름은 다음과 같다.

1. <span class="math-inline" data-tex-b64="eA=="></span>를 <span class="math-inline" data-tex-b64="XHNxcnQgbg=="></span> 주변에서 여러 개 선택하고 <span class="math-inline" data-tex-b64="USh4KT14XjItbg=="></span>을 계산한다.
2. 작은 소수 집합인 factor base를 정한다.
3. <span class="math-inline" data-tex-b64="USh4KQ=="></span>가 factor base 소수들만으로 분해되는 경우를 모은다. 이런 수를 smooth number라고 한다.
4. 각 소수 지수의 짝·홀만 기록한 벡터를 만든다.
5. 여러 벡터의 합이 모두 짝수가 되는 조합을 선형대수로 찾는다.
6. 그 조합을 곱하여 <span class="math-inline" data-tex-b64="WF4yXGVxdWl2IFleMlxwbW9kIG4="></span>을 만들고 GCD를 계산한다.

핵심은 “완전제곱” 조건이 소인수 지수가 모두 짝수라는 조건과 같다는 점이다. 지수의 parity를 modulo 2 벡터로 다루면, 적절한 곱을 찾는 문제가 이진 선형대수 문제가 된다.

이 글에서는 알고리즘의 원리만 다룬다. 실제 구현에서는 factor base 선택, sieving, sparse matrix 계산 등 추가적인 최적화가 필요하다.

## Number-Theoretic Functions

정수의 산술적 성질을 값으로 대응시키는 함수를 number-theoretic function 또는 arithmetic function이라고 한다. 여기서는 두 가지 대표 함수를 살펴본다.

- <span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>: <span class="math-inline" data-tex-b64="bg=="></span>의 양의 약수 개수
- <span class="math-inline" data-tex-b64="XHNpZ21hKG4p"></span>: <span class="math-inline" data-tex-b64="bg=="></span>의 양의 약수 합

예를 들어 <span class="math-inline" data-tex-b64="MTI="></span>의 양의 약수는 <span class="math-inline" data-tex-b64="MSwyLDMsNCw2LDEy"></span>이므로

<div class="math-display" data-tex-b64="XHRhdSgxMik9NixccXF1YWRcc2lnbWEoMTIpPTI4"></div>

이다. 일부 문헌에서는 약수 개수 함수를 <span class="math-inline" data-tex-b64="ZChuKQ=="></span> 또는 <span class="math-inline" data-tex-b64="XHNpZ21hXzAobik="></span>으로도 쓴다.

## 소인수분해와 모든 약수의 표현

<span class="math-inline" data-tex-b64="bj4x"></span>의 소인수분해가

<div class="math-display" data-tex-b64="bj1wXzFee2tfMX1wXzJee2tfMn1cY2RvdHMgcF9yXntrX3J9"></div>

라고 하자. <span class="math-inline" data-tex-b64="ZA=="></span>가 <span class="math-inline" data-tex-b64="bg=="></span>의 양의 약수일 필요충분조건은

<div class="math-display" data-tex-b64="ZD1wXzFee2FfMX1wXzJee2FfMn1cY2RvdHMgcF9yXnthX3J9LFxxcXVhZDBcbGUgYV9pXGxlIGtfaQ=="></div>

이다.

### 증명

<span class="math-inline" data-tex-b64="ZFxtaWQgbg=="></span>이면 <span class="math-inline" data-tex-b64="bj1kZCc="></span>인 양의 정수 <span class="math-inline" data-tex-b64="ZCc="></span>가 존재한다. Fundamental Theorem of Arithmetic에 의해 <span class="math-inline" data-tex-b64="ZA=="></span>에 나타나는 소수는 <span class="math-inline" data-tex-b64="bg=="></span>에 나타나는 소수뿐이며, 각 지수는 <span class="math-inline" data-tex-b64="bg=="></span>의 대응 지수를 넘을 수 없다.

반대로 위 형태의 <span class="math-inline" data-tex-b64="ZA=="></span>에 대해

<div class="math-display" data-tex-b64="ZCc9cF8xXntrXzEtYV8xfVxjZG90cyBwX3Jee2tfci1hX3J9"></div>

라 두면 <span class="math-inline" data-tex-b64="ZGQnPW4="></span>이므로 <span class="math-inline" data-tex-b64="ZFxtaWQgbg=="></span>이다.

## Divisor-Counting Function

각 지수 <span class="math-inline" data-tex-b64="YV9p"></span>는 <span class="math-inline" data-tex-b64="MCwxLFxsZG90cyxrX2k="></span> 중 하나를 독립적으로 선택할 수 있다. 가능한 선택 수는 각각 <span class="math-inline" data-tex-b64="a19pKzE="></span>개이므로 Product Rule에 의해

<div class="math-display" data-tex-b64="XHRhdShuKT1ccHJvZF97aT0xfV5yKGtfaSsxKQ=="></div>

이다.

예를 들어

<div class="math-display" data-tex-b64="MTgwPTJeMlxjZG90M14yXGNkb3Q1"></div>

이므로

<div class="math-display" data-tex-b64="XHRhdSgxODApPSgyKzEpKDIrMSkoMSsxKT0xOA=="></div>

이다.

## Sum-of-Divisors Function

모든 약수를 한 번씩 더한 식은 다음 곱을 전개한 것과 같다.

<div class="math-display" data-tex-b64="XHNpZ21hKG4pPSgxK3BfMStcY2RvdHMrcF8xXntrXzF9KVxjZG90cygxK3BfcitcY2RvdHMrcF9yXntrX3J9KQ=="></div>

곱을 전개할 때 각 괄호에서 <span class="math-inline" data-tex-b64="cF9pXnthX2l9"></span> 하나를 선택하므로 모든 약수 <span class="math-inline" data-tex-b64="cF8xXnthXzF9XGNkb3RzIHBfcl57YV9yfQ=="></span>가 정확히 한 번씩 등장한다. 등비수열 합 공식을 적용하면

<div class="math-display" data-tex-b64="XHNpZ21hKG4pPVxwcm9kX3tpPTF9XnJcZnJhY3twX2lee2tfaSsxfS0xfXtwX2ktMX0="></div>

이다.

<span class="math-inline" data-tex-b64="MTgwPTJeMlxjZG90M14yXGNkb3Q1"></span>에 대해

<div class="math-display" data-tex-b64="XHNpZ21hKDE4MCkKPVxmcmFjezJeMy0xfXsyLTF9XGNkb3RcZnJhY3szXjMtMX17My0xfVxjZG90XGZyYWN7NV4yLTF9ezUtMX0KPTdcY2RvdDEzXGNkb3Q2Cj01NDY="></div>

이다.

## Prime Characterization

<span class="math-inline" data-tex-b64="bj4x"></span>에 대해

<div class="math-display" data-tex-b64="blx0ZXh0e+ydtCDshozsiJh9XHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWRcdGF1KG4pPTI="></div>

이다. 양의 약수가 1과 자기 자신뿐이라는 소수의 정의와 같다. 또한

<div class="math-display" data-tex-b64="blx0ZXh0e+ydtCDshozsiJh9XHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWRcc2lnbWEobik9bisx"></div>

이다.

이 조건은 소수 판별의 정의적 특징이지만, 큰 <span class="math-inline" data-tex-b64="bg=="></span>의 <span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>이나 <span class="math-inline" data-tex-b64="XHNpZ21hKG4p"></span>을 소인수분해 없이 계산하는 것은 쉽지 않다. 따라서 실용적인 소수 판별법으로 바로 쓰기보다는 산술 함수의 성질을 이해하는 데 의미가 있다.

## 정리

Fermat factorization은 홀수 합성수를 두 제곱수의 차로 표현한다. 더 일반적으로 비자명한 제곱 합동식 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIG4="></span>을 찾으면 GCD를 통해 인수를 얻을 수 있으며, Quadratic Sieve는 여러 smooth relation을 결합해 이런 합동식을 만든다. 소인수분해는 모든 약수를 지수 선택으로 표현하게 하고, 여기서 <span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>과 <span class="math-inline" data-tex-b64="XHNpZ21hKG4p"></span>의 곱 공식이 나온다.

## 연습 문제

1. Fermat factorization으로 <span class="math-inline" data-tex-b64="MjAyMQ=="></span>을 인수분해한다.
2. <span class="math-inline" data-tex-b64="ODQ="></span>의 양의 약수 개수와 합을 구한다.
3. <span class="math-inline" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIG4="></span>이어도 항상 비자명한 인수를 얻지 못하는 예를 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="XHNxcnR7MjAyMX1cYXBwcm94NDQuOTY="></span>이므로 <span class="math-inline" data-tex-b64="eD00NQ=="></span>에서 시작한다.

<div class="math-display" data-tex-b64="NDVeMi0yMDIxPTIwMjUtMjAyMT00PTJeMg=="></div>

이므로

<div class="math-display" data-tex-b64="MjAyMT00NV4yLTJeMj0oNDUtMikoNDUrMik9NDNcY2RvdDQ3"></div>

이다.

### 2번

<div class="math-display" data-tex-b64="ODQ9Ml4yXGNkb3QzXGNkb3Q3"></div>

이므로

<div class="math-display" data-tex-b64="XHRhdSg4NCk9KDIrMSkoMSsxKSgxKzEpPTEy"></div>

이다. 약수 합은

<div class="math-display" data-tex-b64="XHNpZ21hKDg0KT0oMSsyKzQpKDErMykoMSs3KT03XGNkb3Q0XGNkb3Q4PTIyNA=="></div>

이다.

### 3번

<span class="math-inline" data-tex-b64="eFxlcXVpdiB5XHBtb2Qgbg=="></span>이면 당연히 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIG4="></span>이지만

<div class="math-display" data-tex-b64="XGdjZCh4LXksbik9bg=="></div>

이 되어 인수를 얻지 못한다. <span class="math-inline" data-tex-b64="eFxlcXVpdi15XHBtb2Qgbg=="></span>이면 <span class="math-inline" data-tex-b64="XGdjZCh4K3ksbik9bg=="></span>이 된다. 따라서 <span class="math-inline" data-tex-b64="eFxub3RcZXF1aXZccG0geVxwbW9kIG4="></span>인 비자명한 제곱 합동식이 필요하다.
