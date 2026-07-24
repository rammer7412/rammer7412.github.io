---
title: "2. Prime Numbers and Unique Factorization"
description: "소수의 나눗셈 성질과 Euclid’s Lemma를 바탕으로 산술의 기본정리, 소수의 무한성과 대표적인 소수 판별 아이디어를 정리한다."
date: "2026-01-23"
category: "정수론"
tags: ["number-theory", "prime-number", "euclids-lemma", "unique-factorization", "sieve"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 2
featured: false
draft: false
---

소수는 양의 약수가 1과 자기 자신뿐인 1보다 큰 정수이다. 모든 양의 정수는 소수들의 곱으로 분해되며, 이 분해가 본질적으로 유일하다는 사실이 정수론의 기본 구조를 만든다.

## Prime과 Composite Number

<span class="math-inline" data-tex-b64="cD4x"></span>의 양의 약수가 <span class="math-inline" data-tex-b64="MSxw"></span>뿐이면 <span class="math-inline" data-tex-b64="cA=="></span>를 prime number라고 한다. 1보다 큰 정수 중 소수가 아닌 수는 composite number이다. 1은 소수도 합성수도 아니다. 1을 소수로 포함하면 소인수분해에 1을 임의로 반복해서 넣을 수 있어 유일성이 깨지기 때문이다.

## Euclid’s Lemma for Primes

> <span class="math-inline" data-tex-b64="cA=="></span>가 소수이고 <span class="math-inline" data-tex-b64="cFxtaWQgYWI="></span>이면 <span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span> 또는 <span class="math-inline" data-tex-b64="cFxtaWQgYg=="></span>이다.

### 증명

<span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span>이면 끝이다. 그렇지 않다면 <span class="math-inline" data-tex-b64="cA=="></span>가 소수이므로 <span class="math-inline" data-tex-b64="XGdjZChwLGEpPTE="></span>이다. Bézout’s Identity에 의해

<div class="math-display" data-tex-b64="cHgrYXk9MQ=="></div>

인 정수 <span class="math-inline" data-tex-b64="eCx5"></span>가 존재한다. 양변에 <span class="math-inline" data-tex-b64="Yg=="></span>를 곱하면

<div class="math-display" data-tex-b64="cGJ4K2FieT1i"></div>

이다. 왼쪽의 두 항은 모두 <span class="math-inline" data-tex-b64="cA=="></span>의 배수이므로 <span class="math-inline" data-tex-b64="cFxtaWQgYg=="></span>이다.

이 정리는 귀납적으로 확장된다.

<div class="math-display" data-tex-b64="cFxtaWQgYV8xYV8yXGNkb3RzIGFfblxxdWFkXExvbmdyaWdodGFycm93XHF1YWQgcFxtaWQgYV9rXHRleHR77J24IH1rXHRleHR76rCAIOyhtOyerH0="></div>

특히 소수 <span class="math-inline" data-tex-b64="cCxxXzEsXGxkb3RzLHFfbg=="></span>에 대해 <span class="math-inline" data-tex-b64="cFxtaWQgcV8xXGNkb3RzIHFfbg=="></span>이면 <span class="math-inline" data-tex-b64="cD1xX2s="></span>인 <span class="math-inline" data-tex-b64="aw=="></span>가 존재한다.

## Fundamental Theorem of Arithmetic

> 모든 <span class="math-inline" data-tex-b64="bj4x"></span>은 소수들의 곱으로 표현되며, 소수의 순서를 제외하면 그 표현은 유일하다.

### 존재성

Strong Induction을 사용한다. <span class="math-inline" data-tex-b64="bj0y"></span>는 소수이므로 성립한다. <span class="math-inline" data-tex-b64="MlxsZSBtPG4="></span>인 모든 정수에 대해 명제가 참이라고 가정하자.

<span class="math-inline" data-tex-b64="bg=="></span>이 소수이면 이미 소수 하나의 곱이다. 합성수이면 <span class="math-inline" data-tex-b64="bj1hYg=="></span>인 정수 <span class="math-inline" data-tex-b64="MTxhLGI8bg=="></span>이 존재한다. 귀납가정에 의해 <span class="math-inline" data-tex-b64="YSxi"></span>는 각각 소수들의 곱으로 표현되므로 <span class="math-inline" data-tex-b64="bg=="></span>도 소수들의 곱으로 표현된다.

### 유일성

두 소인수분해가 있다고 하자.

<div class="math-display" data-tex-b64="bj1wXzFwXzJcY2RvdHMgcF9yPXFfMXFfMlxjZG90cyBxX3M="></div>

<span class="math-inline" data-tex-b64="cF8xXG1pZCBxXzFxXzJcY2RvdHMgcV9z"></span>이므로 Euclid’s Lemma에 의해 어떤 <span class="math-inline" data-tex-b64="cV9q"></span>에 대해 <span class="math-inline" data-tex-b64="cF8xXG1pZCBxX2o="></span>이다. 두 수가 모두 소수이므로 <span class="math-inline" data-tex-b64="cF8xPXFfag=="></span>이다. 순서를 바꾸어 <span class="math-inline" data-tex-b64="cF8xPXFfMQ=="></span>로 둘 수 있고, 양변에서 같은 소수를 약분한다. 이 과정을 반복하면 두 분해에 등장하는 소수의 개수와 지수가 모두 같아진다.

따라서 모든 <span class="math-inline" data-tex-b64="bj4x"></span>은

<div class="math-display" data-tex-b64="bj1wXzFee2tfMX1wXzJee2tfMn1cY2RvdHMgcF9yXntrX3J9"></div>

로 유일하게 표현된다. 여기서 <span class="math-inline" data-tex-b64="cF8xPHBfMjxcY2RvdHM8cF9y"></span>는 서로 다른 소수이고 <span class="math-inline" data-tex-b64="a19pXGdlMQ=="></span>이다.

## 소인수분해로 GCD와 LCM 계산하기

<div class="math-display" data-tex-b64="YT1ccHJvZF97aT0xfV5yIHBfaV57XGFscGhhX2l9LApccXF1YWQKYj1ccHJvZF97aT0xfV5yIHBfaV57XGJldGFfaX0="></div>

처럼 두 수에 등장하는 소수를 모두 포함해 지수가 0일 수도 있게 쓰면

<div class="math-display" data-tex-b64="XGdjZChhLGIpPVxwcm9kX3tpPTF9XnIgcF9pXntcbWluKFxhbHBoYV9pLFxiZXRhX2kpfSwKXHFxdWFkClxvcGVyYXRvcm5hbWV7bGNtfShhLGIpPVxwcm9kX3tpPTF9XnIgcF9pXntcbWF4KFxhbHBoYV9pLFxiZXRhX2kpfQ=="></div>

이다. 각 소수의 지수에 대해 최소값과 최대값을 더하면 <span class="math-inline" data-tex-b64="XGFscGhhX2krXGJldGFfaQ=="></span>가 되므로 GCD와 LCM의 곱이 <span class="math-inline" data-tex-b64="fGFifA=="></span>라는 사실도 다시 확인할 수 있다.

## 소수 판별과 Sieve of Eratosthenes

합성수 <span class="math-inline" data-tex-b64="bj1hYg=="></span>에서 <span class="math-inline" data-tex-b64="MTxhXGxlIGI="></span>라 하면 <span class="math-inline" data-tex-b64="YV4yXGxlIG4="></span>, 즉 <span class="math-inline" data-tex-b64="YVxsZVxzcXJ0IG4="></span>이다. 따라서 <span class="math-inline" data-tex-b64="bg=="></span>이 합성수라면 반드시 <span class="math-inline" data-tex-b64="XHNxcnQgbg=="></span> 이하의 소인수를 가진다. 소수 여부를 확인할 때 <span class="math-inline" data-tex-b64="Mg=="></span>부터 <span class="math-inline" data-tex-b64="XHNxcnQgbg=="></span>까지만 나누어 보면 충분한 이유이다.

Sieve of Eratosthenes는 일정 범위의 모든 소수를 한꺼번에 구한다.

1. 2부터 원하는 상한까지 정수를 나열한다.
2. 지워지지 않은 가장 작은 수 <span class="math-inline" data-tex-b64="cA=="></span>를 소수로 선택한다.
3. <span class="math-inline" data-tex-b64="cF4y"></span>부터 시작해 <span class="math-inline" data-tex-b64="cA=="></span>의 배수를 지운다.
4. <span class="math-inline" data-tex-b64="cFxsZVxzcXJ0IE4="></span>인 동안 반복한다.

<span class="math-inline" data-tex-b64="MnAsM3AsXGxkb3RzLChwLTEpcA=="></span>는 더 작은 소수 단계에서 이미 지워졌기 때문에 <span class="math-inline" data-tex-b64="cF4y"></span>부터 시작해도 된다.

## 소수가 무한히 많다는 증명

소수가 유한하게 <span class="math-inline" data-tex-b64="cF8xLHBfMixcbGRvdHMscF9r"></span>뿐이라고 가정하자. 다음 수를 만든다.

<div class="math-display" data-tex-b64="Tj1wXzFwXzJcY2RvdHMgcF9rKzE="></div>

어떤 <span class="math-inline" data-tex-b64="cF9p"></span>로 나누어도 나머지가 1이므로 기존 소수 중 어느 것도 <span class="math-inline" data-tex-b64="Tg=="></span>을 나누지 못한다. 그러나 <span class="math-inline" data-tex-b64="Tj4x"></span>은 소수이거나 어떤 소인수를 가져야 한다. 어느 경우든 목록에 없는 새로운 소수가 존재하므로 모순이다. 따라서 소수는 무한히 많다.

주의할 점은 <span class="math-inline" data-tex-b64="Tg=="></span> 자체가 항상 소수라는 주장이 아니라는 것이다. 핵심은 <span class="math-inline" data-tex-b64="Tg=="></span>의 소인수가 기존 목록에 없다는 사실이다.

## <span class="math-inline" data-tex-b64="NGsrMw=="></span> 꼴 소수의 무한성

<span class="math-inline" data-tex-b64="NGsrMw=="></span> 꼴 소수가 유한하게 <span class="math-inline" data-tex-b64="cF8xLFxsZG90cyxwX3I="></span>뿐이라고 가정하고

<div class="math-display" data-tex-b64="Tj00cF8xcF8yXGNkb3RzIHBfci0x"></div>

을 생각한다. <span class="math-inline" data-tex-b64="TlxlcXVpdjNccG1vZDQ="></span>이다. <span class="math-inline" data-tex-b64="Tg=="></span>의 모든 소인수가 <span class="math-inline" data-tex-b64="MVxwbW9kNA=="></span>라면 그 곱도 <span class="math-inline" data-tex-b64="MVxwbW9kNA=="></span>가 되어야 하므로, 적어도 하나의 소인수 <span class="math-inline" data-tex-b64="cQ=="></span>는 <span class="math-inline" data-tex-b64="cVxlcXVpdjNccG1vZDQ="></span>이다.

그런데 각 <span class="math-inline" data-tex-b64="cF9p"></span>에 대해 <span class="math-inline" data-tex-b64="TlxlcXVpdi0xXHBtb2R7cF9pfQ=="></span>이므로 <span class="math-inline" data-tex-b64="cF9pXG5taWQgTg=="></span>이다. 따라서 <span class="math-inline" data-tex-b64="cQ=="></span>는 목록에 없는 새로운 <span class="math-inline" data-tex-b64="NGsrMw=="></span> 꼴 소수이고 모순이다.

## <span class="math-inline" data-tex-b64="XHNxcnQy"></span>의 무리성

<span class="math-inline" data-tex-b64="XHNxcnQyPWEvYg=="></span>인 서로소 양의 정수 <span class="math-inline" data-tex-b64="YSxi"></span>가 존재한다고 가정하자. 그러면

<div class="math-display" data-tex-b64="YV4yPTJiXjI="></div>

이므로 <span class="math-inline" data-tex-b64="MlxtaWQgYV4y"></span>이다. Euclid’s Lemma에 의해 <span class="math-inline" data-tex-b64="MlxtaWQgYQ=="></span>이고 <span class="math-inline" data-tex-b64="YT0yaw=="></span>라 둘 수 있다. 대입하면 <span class="math-inline" data-tex-b64="Yl4yPTJrXjI="></span>이므로 <span class="math-inline" data-tex-b64="MlxtaWQgYg=="></span>이다. <span class="math-inline" data-tex-b64="YSxi"></span>가 모두 짝수라는 결론은 서로소라는 가정에 모순이다.

이 증명은 소수가 제곱을 나누면 원래 수도 나눈다는 성질에 의존한다.

## Euclidean Numbers와 열린 문제

다음과 같이 정의한 수를 흔히 Euclid–Mullin 형태의 수열 또는 Euclidean construction과 관련해 살펴볼 수 있다.

<div class="math-display" data-tex-b64="Tl9rPXBfMXBfMlxjZG90cyBwX2srMQ=="></div>

서로 다른 단계에서 얻은 수들이 항상 소수일 필요는 없지만, 앞에서 선택된 모든 소수와는 서로소이다.

소수에는 아직 해결되지 않은 문제가 많다.

- <strong>Twin Prime Conjecture:</strong> <span class="math-inline" data-tex-b64="cCxwKzI="></span>가 모두 소수인 쌍이 무한히 많은가?
- <strong>Goldbach Conjecture:</strong> 2보다 큰 모든 짝수는 두 소수의 합으로 표현되는가?

이들은 널리 계산으로 확인되었지만 일반적인 증명은 알려지지 않았다.

## 정리

Euclid’s Lemma는 소수가 곱을 나누는 방식을 통제하고, 이를 이용하면 소인수분해의 유일성을 증명할 수 있다. Fundamental Theorem of Arithmetic은 모든 정수가 소수의 지수 정보로 완전히 기술됨을 뜻한다. 소수는 무한히 많으며, 특정 합동류에 속하는 소수의 무한성도 비슷한 구성으로 증명할 수 있다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="NzU2MA=="></span>을 소인수분해하고 약수 <span class="math-inline" data-tex-b64="ODQ="></span>가 실제로 나누는지 지수 비교로 확인한다.
2. <span class="math-inline" data-tex-b64="cA=="></span>가 소수이고 <span class="math-inline" data-tex-b64="cFxtaWQgYV5t"></span>이면 <span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span>임을 증명한다.
3. <span class="math-inline" data-tex-b64="NmsrNQ=="></span> 꼴 소수가 무한히 많음을 Euclid 방식으로 증명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="NzU2MD0yXjNcY2RvdDNeM1xjZG90NVxjZG90Nw=="></div>

이고

<div class="math-display" data-tex-b64="ODQ9Ml4yXGNkb3QzXGNkb3Q3"></div>

이다. <span class="math-inline" data-tex-b64="ODQ="></span>에 나타난 각 소수의 지수가 <span class="math-inline" data-tex-b64="NzU2MA=="></span>의 대응 지수보다 작거나 같으므로 <span class="math-inline" data-tex-b64="ODRcbWlkNzU2MA=="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="YV5tPWFcY2RvdCBhXGNkb3RzIGE="></span>이다. Euclid’s Lemma를 반복 적용하면 <span class="math-inline" data-tex-b64="cA=="></span>가 곱을 나눌 때 어느 한 인수 <span class="math-inline" data-tex-b64="YQ=="></span>를 나누어야 한다.

### 3번

<span class="math-inline" data-tex-b64="NmsrNQ=="></span> 꼴 소수가 유한하게 <span class="math-inline" data-tex-b64="cF8xLFxsZG90cyxwX3I="></span>뿐이라고 하자. 다음 수를 생각한다.

<div class="math-display" data-tex-b64="Tj02cF8xcF8yXGNkb3RzIHBfci0x"></div>

<span class="math-inline" data-tex-b64="TlxlcXVpdjVccG1vZDY="></span>이고 2나 3으로 나누어지지 않는다. <span class="math-inline" data-tex-b64="Tg=="></span>의 소인수는 modulo 6에서 1 또는 5와 합동이다. 모든 소인수가 1과 합동이면 곱도 1과 합동이므로, 적어도 하나는 5와 합동이다. 또한 기존 <span class="math-inline" data-tex-b64="cF9p"></span>로 나누면 나머지가 <span class="math-inline" data-tex-b64="LTE="></span>이므로 새로운 <span class="math-inline" data-tex-b64="NmsrNQ=="></span> 꼴 소수가 존재해 모순이다.
