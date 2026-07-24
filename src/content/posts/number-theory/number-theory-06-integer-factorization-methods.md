---
title: "6. Integer Factorization Methods"
description: "두 제곱수의 차에서 Pollard p−1, Quadratic Sieve까지 이어지는 정수 인수분해의 공통 원리를 정리한다."
date: "2026-01-30"
category: "정수론"
tags: ["number-theory", "factorization", "fermat-factorization", "pollard-p-minus-one", "quadratic-sieve"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 6
featured: false
draft: false
---

소인수분해의 존재와 유일성은 이론적인 구조를 설명하지만, 큰 정수의 소인수를 실제로 찾는 것은 별개의 계산 문제이다. 현대 인수분해법들은 서로 다른 방식으로 관계(relation)를 모은 뒤, 합동식과 GCD 계산을 통해 비자명한 인수를 꺼낸다.

## Difference of Squares

기본 항등식

<div class="math-display" data-tex-b64="eF4yLXleMj0oeC15KSh4K3kp"></div>

은 여러 인수분해 알고리즘의 출발점이다. 홀수 합성수 <span class="math-inline" data-tex-b64="Tj1hYg=="></span>에서 <span class="math-inline" data-tex-b64="YVxsZSBi"></span>가 모두 홀수이면

<div class="math-display" data-tex-b64="eD1cZnJhY3thK2J9ezJ9LFxxcXVhZCB5PVxmcmFje2ItYX17Mn0="></div>

는 정수이고 <span class="math-inline" data-tex-b64="Tj14XjIteV4y"></span>이다. 따라서 모든 홀수 합성수는 두 제곱수의 차로 표현된다.

## Fermat–Kraitchik Factorization

<span class="math-inline" data-tex-b64="eD1cbGNlaWxcc3FydCBOXHJjZWls"></span>에서 시작하여 <span class="math-inline" data-tex-b64="eF4yLU4="></span>이 완전제곱인지 검사한다. 만약

<div class="math-display" data-tex-b64="eF4yLU49eV4y"></div>

이면

<div class="math-display" data-tex-b64="Tj0oeC15KSh4K3kp"></div>

이다. 두 인수가 <span class="math-inline" data-tex-b64="XHNxcnQgTg=="></span> 근처에 있을수록 <span class="math-inline" data-tex-b64="eQ=="></span>가 작아져 빠르게 찾을 수 있다. 반대로 한 인수가 매우 작고 다른 인수가 매우 크면 많은 <span class="math-inline" data-tex-b64="eA=="></span>를 시험해야 한다.

예를 들어 <span class="math-inline" data-tex-b64="Tj01OTU5"></span>에 대해 <span class="math-inline" data-tex-b64="XGxjZWlsXHNxcnQgTlxyY2VpbD03OA=="></span>이고

<div class="math-display" data-tex-b64="ODBeMi01OTU5PTQ0MT0yMV4y"></div>

이므로

<div class="math-display" data-tex-b64="NTk1OT0oODAtMjEpKDgwKzIxKT01OVxjZG90MTAx"></div>

이다.

## Congruent Squares

완전한 등식 <span class="math-inline" data-tex-b64="eF4yLXleMj1O"></span> 대신 다음 합동식만 찾아도 된다.

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIE4="></div>

그러면 <span class="math-inline" data-tex-b64="TlxtaWQoeC15KSh4K3kp"></span>이다. 만약 <span class="math-inline" data-tex-b64="eFxub3RcZXF1aXZccG0geVxwbW9kIE4="></span>이면 보통

<div class="math-display" data-tex-b64="MTxcZ2NkKHgteSxOKTxO"></div>

이 되어 비자명한 인수를 얻는다. 이것이 Kraitchik 방식과 Quadratic Sieve의 핵심이다.

## Pollard’s <span class="math-inline" data-tex-b64="cC0x"></span> Method

<span class="math-inline" data-tex-b64="Tg=="></span>의 소인수 <span class="math-inline" data-tex-b64="cA=="></span>에 대해 <span class="math-inline" data-tex-b64="cC0x"></span>이 작은 소수들의 거듭제곱으로 이루어진 경우를 이용한다. 경계 <span class="math-inline" data-tex-b64="Qg=="></span>를 정하고

<div class="math-display" data-tex-b64="TT1cb3BlcmF0b3JuYW1le2xjbX0oMSwyLFxsZG90cyxCKQ=="></div>

로 둔다. 만약 <span class="math-inline" data-tex-b64="cC0xXG1pZCBN"></span>이고 <span class="math-inline" data-tex-b64="XGdjZChhLHApPTE="></span>이면 Fermat 정리에 의해

<div class="math-display" data-tex-b64="YV5NXGVxdWl2MVxwbW9kIHA="></div>

이다. 따라서 <span class="math-inline" data-tex-b64="cFxtaWQgYV5NLTE="></span>이고

<div class="math-display" data-tex-b64="ZD1cZ2NkKGFeTS0xLE4p"></div>

을 계산하면 <span class="math-inline" data-tex-b64="cA=="></span>를 얻을 가능성이 있다. 다른 소인수 <span class="math-inline" data-tex-b64="cQ=="></span>에 대해서는 <span class="math-inline" data-tex-b64="cS0xXG5taWQgTQ=="></span>이어야 <span class="math-inline" data-tex-b64="ZD1O"></span>으로 붕괴하지 않는다.

이 알고리즘은 <span class="math-inline" data-tex-b64="cC0x"></span>이 <strong><span class="math-inline" data-tex-b64="Qg=="></span>-smooth</strong>, 즉 모든 소인수가 <span class="math-inline" data-tex-b64="Qg=="></span> 이하일 때 특히 효과적이다.

## Smooth Number와 Factor Base

양의 정수가 정해진 소수 집합만을 인수로 가지면 그 집합에 대해 smooth하다고 한다. 예를 들어 factor base가 <span class="math-inline" data-tex-b64="XHsyLDMsNSw3XH0="></span>이면

<div class="math-display" data-tex-b64="Ml40XGNkb3QzXGNkb3Q3PTMzNg=="></div>

은 smooth하지만 11을 인수로 포함하는 수는 아니다.

제곱 합동식 기반 알고리즘은 여러 값을 factor base 위에서 분해하고, 지수의 parity만 기록한다. 지수 벡터의 합이 modulo 2에서 0이면 그 곱은 완전제곱이 된다.

## Quadratic Sieve

<span class="math-inline" data-tex-b64="eA=="></span>를 <span class="math-inline" data-tex-b64="XHNxcnQgTg=="></span> 근처에서 선택하고

<div class="math-display" data-tex-b64="USh4KT14XjItTg=="></div>

을 계산한다. 여러 <span class="math-inline" data-tex-b64="USh4KQ=="></span>가 factor base 위에서 smooth하게 분해되었다고 하자.

<div class="math-display" data-tex-b64="USh4X2kpPVxwcm9kX3tqPTF9Xnt0fXBfal57ZV97aWp9fQ=="></div>

각 relation을 parity vector

<div class="math-display" data-tex-b64="KGVfe2kxfSxlX3tpMn0sXGxkb3RzLGVfe2l0fSlccG1vZDI="></div>

로 바꾼다. relation 수가 factor base의 크기보다 충분히 많으면 선형대수에 의해 0이 되는 비자명한 벡터 조합이 존재한다. 선택된 relation을 곱하면

<div class="math-display" data-tex-b64="XHByb2QgeF9pXjJcZXF1aXZccHJvZCBRKHhfaSk9eV4yXHBtb2QgTg=="></div>

이 되어 congruent squares를 얻는다. 마지막으로 <span class="math-inline" data-tex-b64="XGdjZCh4LXksTik="></span>을 계산한다.

## Three-Step View

Quadratic Sieve와 더 발전된 Number Field Sieve는 세 단계로 이해할 수 있다.

1. <strong>Relation building:</strong> 작은 소수들로 분해되는 관계를 충분히 모은다.
2. <strong>Elimination:</strong> 지수 parity가 모두 짝수가 되는 조합을 선형대수로 찾는다.
3. <strong>GCD computation:</strong> 얻어진 제곱 합동식에서 비자명한 인수를 추출한다.

Number Field Sieve는 정수 하나의 다항식 표현과 대수적 수체를 사용하여 relation을 더 효율적으로 모으는 방식이다. 구현 세부는 훨씬 복잡하지만 최종적으로 제곱 합동식과 GCD를 만드는 철학은 같다.

## 알고리즘의 적용 범위

- Fermat factorization: 두 인수가 가까울 때 유리하다.
- Pollard <span class="math-inline" data-tex-b64="cC0x"></span>: 어떤 소인수 <span class="math-inline" data-tex-b64="cA=="></span>의 <span class="math-inline" data-tex-b64="cC0x"></span>이 smooth할 때 유리하다.
- Quadratic Sieve: 중간 크기의 일반적인 합성수에 적합하다.
- Number Field Sieve: 매우 큰 일반 정수에 사용되는 대표적인 방법이다.

인수분해 난이도는 단순히 자릿수만이 아니라 소인수의 구조와 선택한 알고리즘에 따라 달라진다.

## 정리

Difference of Squares는 인수분해를 제곱 합동식 탐색으로 바꾼다. Pollard <span class="math-inline" data-tex-b64="cC0x"></span>은 소인수의 곱셈군 크기가 smooth한 경우를 노리고, Quadratic Sieve는 smooth relation을 모아 선형대수로 제곱 합동식을 만든다. 서로 다른 알고리즘이지만 마지막에는 GCD 계산으로 인수를 얻는다는 공통점이 있다.

## 연습 문제

1. Fermat factorization으로 2021을 인수분해한다.
2. <span class="math-inline" data-tex-b64="eF4yXGVxdWl2IHleMlxwbW9kIE4="></span>이고 <span class="math-inline" data-tex-b64="eFxub3RcZXF1aXZccG0geVxwbW9kIE4="></span>일 때 왜 GCD가 인수를 줄 수 있는지 설명한다.
3. <span class="math-inline" data-tex-b64="Tj05MQ=="></span>, <span class="math-inline" data-tex-b64="YT0y"></span>, <span class="math-inline" data-tex-b64="TT0xMg=="></span>에 대해 Pollard <span class="math-inline" data-tex-b64="cC0x"></span>의 GCD를 계산한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="XGxjZWlsXHNxcnR7MjAyMX1ccmNlaWw9NDU="></span>이고

<div class="math-display" data-tex-b64="NDVeMi0yMDIxPTQ9Ml4y"></div>

이므로

<div class="math-display" data-tex-b64="MjAyMT0oNDUtMikoNDUrMik9NDNcY2RvdDQ3"></div>

이다.

### 2번

합동식에서 <span class="math-inline" data-tex-b64="TlxtaWQoeC15KSh4K3kp"></span>이다. <span class="math-inline" data-tex-b64="Tg=="></span>의 모든 소인수가 한쪽 인자에만 몰리지 않으면 <span class="math-inline" data-tex-b64="XGdjZCh4LXksTik="></span> 또는 <span class="math-inline" data-tex-b64="XGdjZCh4K3ksTik="></span>가 1과 <span class="math-inline" data-tex-b64="Tg=="></span> 사이의 값을 갖는다. <span class="math-inline" data-tex-b64="eFxlcXVpdlxwbSB5"></span>는 각각 GCD가 <span class="math-inline" data-tex-b64="Tg=="></span> 또는 1이 되는 자명한 경우를 제외한다.

### 3번

<div class="math-display" data-tex-b64="Ml57MTJ9LTE9NDA5NQ=="></div>

이고

<div class="math-display" data-tex-b64="XGdjZCg0MDk1LDkxKT03"></div>

이다. 실제로 <span class="math-inline" data-tex-b64="OTE9N1xjZG90MTM="></span>이며 <span class="math-inline" data-tex-b64="Ny0xPTZcbWlkMTI="></span>이다.
