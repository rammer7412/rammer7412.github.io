---
title: "7. Arithmetic Functions and Möbius Inversion"
description: "약수 함수, 곱셈적 함수, Möbius 함수와 inversion formula를 연결하고 factorial의 소인수 지수를 계산한다."
date: "2026-01-31"
category: "정수론"
tags: ["number-theory", "arithmetic-function", "mobius-function", "mobius-inversion", "legendre-formula"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 7
featured: false
draft: false
---

정수의 소인수분해는 약수의 개수와 합뿐 아니라 정수 위에 정의된 여러 함수의 구조를 결정한다. 이러한 함수를 number-theoretic function 또는 arithmetic function이라고 한다. 이 글에서는 약수 함수에서 출발하여 곱셈적 함수와 Möbius inversion을 정리한다.

## Divisor-Counting Function

<span class="math-inline" data-tex-b64="bj1ccHJvZF97aT0xfV57cn1wX2lee1xhbHBoYV9pfQ=="></span>라 하자. 모든 양의 약수는

<div class="math-display" data-tex-b64="ZD1ccHJvZF97aT0xfV57cn1wX2lee1xiZXRhX2l9LFxxcXVhZCAwXGxlXGJldGFfaVxsZVxhbHBoYV9p"></div>

로 유일하게 표현된다. 각 지수 <span class="math-inline" data-tex-b64="XGJldGFfaQ=="></span>에는 <span class="math-inline" data-tex-b64="XGFscGhhX2krMQ=="></span>개의 선택이 있으므로 약수의 개수는

<div class="math-display" data-tex-b64="XHRhdShuKT1cc3VtX3tkXG1pZCBufTE9XHByb2Rfe2k9MX1ee3J9KFxhbHBoYV9pKzEp"></div>

이다.

<span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>이 홀수인 경우는 각 <span class="math-inline" data-tex-b64="XGFscGhhX2k="></span>가 모두 짝수일 때뿐이다. 따라서

<div class="math-display" data-tex-b64="XHRhdShuKVx0ZXh0e+ydtCDtmYDsiJh9XHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQgblx0ZXh0e+ydtCDsmYTsoITsoJzqs7HsiJh9"></div>

이다. 이는 약수를 <span class="math-inline" data-tex-b64="ZA=="></span>와 <span class="math-inline" data-tex-b64="bi9k"></span>로 짝지을 때도 확인할 수 있다.

## Sum-of-Divisors Function

약수의 합은 각 소수 지수의 선택을 독립적으로 전개하여 계산한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxzaWdtYShuKQomPVxzdW1fe2RcbWlkIG59ZFxcCiY9XHByb2Rfe2k9MX1ee3J9KDErcF9pK3BfaV4yK1xjZG90cytwX2lee1xhbHBoYV9pfSlcXAomPVxwcm9kX3tpPTF9XntyfVxmcmFje3BfaV57XGFscGhhX2krMX0tMX17cF9pLTF9LgpcZW5ke2FsaWduZWR9"></div>

예를 들어 <span class="math-inline" data-tex-b64="MzYwPTJeM1xjZG90M14yXGNkb3Q1"></span>이므로

<div class="math-display" data-tex-b64="XHRhdSgzNjApPTRcY2RvdDNcY2RvdDI9MjQ="></div>

이고

<div class="math-display" data-tex-b64="XHNpZ21hKDM2MCk9KDErMis0KzgpKDErMys5KSgxKzUpPTExNzA="></div>

이다.

## 모든 약수의 곱

약수 <span class="math-inline" data-tex-b64="ZA=="></span>와 <span class="math-inline" data-tex-b64="bi9k"></span>를 짝지으면 각 쌍의 곱은 <span class="math-inline" data-tex-b64="bg=="></span>이다. 따라서

<div class="math-display" data-tex-b64="XHByb2Rfe2RcbWlkIG59ZD1uXntcdGF1KG4pLzJ9"></div>

이다. <span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>이 홀수인 완전제곱수에서도 가운데 약수 <span class="math-inline" data-tex-b64="XHNxcnQgbg=="></span>을 포함하면 같은 식이 성립한다.

## Multiplicative Function

산술함수 <span class="math-inline" data-tex-b64="Zg=="></span>가 <span class="math-inline" data-tex-b64="XGdjZChtLG4pPTE="></span>일 때

<div class="math-display" data-tex-b64="Zihtbik9ZihtKWYobik="></div>

을 만족하면 multiplicative라고 한다. 모든 <span class="math-inline" data-tex-b64="bSxu"></span>에 대해 성립할 필요는 없다. <span class="math-inline" data-tex-b64="ZigxKVxuZTA="></span>인 곱셈적 함수는 반드시 <span class="math-inline" data-tex-b64="ZigxKT0x"></span>이다.

서로소인 <span class="math-inline" data-tex-b64="bSxu"></span>의 약수는 <span class="math-inline" data-tex-b64="ZF8xXG1pZCBt"></span>, <span class="math-inline" data-tex-b64="ZF8yXG1pZCBu"></span>의 곱 <span class="math-inline" data-tex-b64="ZF8xZF8y"></span>로 유일하게 나타나므로 <span class="math-inline" data-tex-b64="XHRhdQ=="></span>와 <span class="math-inline" data-tex-b64="XHNpZ21h"></span>는 모두 multiplicative이다.

더 일반적으로 <span class="math-inline" data-tex-b64="Zg=="></span>가 multiplicative이면

<div class="math-display" data-tex-b64="RihuKT1cc3VtX3tkXG1pZCBufWYoZCk="></div>

도 multiplicative이다. 서로소인 <span class="math-inline" data-tex-b64="bSxu"></span>에 대해 약수의 일대일 대응을 사용하면

<div class="math-display" data-tex-b64="Rihtbik9XHN1bV97ZF8xXG1pZCBtfVxzdW1fe2RfMlxtaWQgbn1mKGRfMWRfMikKPUYobSlGKG4p"></div>

을 얻는다.

## Möbius Function

Möbius 함수 <span class="math-inline" data-tex-b64="XG11KG4p"></span>는 다음과 같이 정의된다.

<div class="math-display" data-tex-b64="XG11KG4pPQpcYmVnaW57Y2FzZXN9CjEsJm49MSxcXAowLCZwXjJcbWlkIG5cdGV4dHvsnbgg7IaM7IiYIH1wXHRleHR76rCAIOyhtOyerH0sXFwKKC0xKV5yLCZuXHRleHR77J20IOyEnOuhnCDri6TrpbggfXJcdGV4dHvqsJwg7IaM7IiY7J2YIOqzsX0uClxlbmR7Y2FzZXN9"></div>

즉 square-free 정수에서는 소인수 개수의 parity를 기록하고, 제곱 인수를 가지면 0이다. 정의와 서로소인 소인수분해를 사용하면 <span class="math-inline" data-tex-b64="XG11"></span>가 multiplicative임을 알 수 있다.

가장 중요한 항등식은

<div class="math-display" data-tex-b64="XHN1bV97ZFxtaWQgbn1cbXUoZCk9ClxiZWdpbntjYXNlc30KMSwmbj0xLFxcCjAsJm4+MQpcZW5ke2Nhc2VzfQ=="></div>

이다. <span class="math-inline" data-tex-b64="bj4x"></span>의 서로 다른 소인수가 <span class="math-inline" data-tex-b64="cg=="></span>개라면 0이 아닌 항은 그 소수들의 부분집합에 대응하고,

<div class="math-display" data-tex-b64="XHN1bV97ZFxtaWQgbn1cbXUoZCk9XHN1bV97az0wfV57cn1cYmlub20gcmsoLTEpXms9KDEtMSlecj0w"></div>

이다.

## Möbius Inversion Formula

> 두 산술함수 <span class="math-inline" data-tex-b64="ZixG"></span>가
>
> <div class="math-display" data-tex-b64="RihuKT1cc3VtX3tkXG1pZCBufWYoZCk="></div>
>
> 를 만족하면
>
> <div class="math-display" data-tex-b64="ZihuKT1cc3VtX3tkXG1pZCBufVxtdShkKUZcIVxsZWZ0KFxmcmFjIG5kXHJpZ2h0KQo+ID1cc3VtX3tkXG1pZCBufVxtdVwhXGxlZnQoXGZyYWMgbmRccmlnaHQpRihkKQ=="></div>
>
> 이다.

### 증명

오른쪽을 전개하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxzdW1fe2RcbWlkIG59XG11KGQpRihuL2QpCiY9XHN1bV97ZFxtaWQgbn1cbXUoZClcc3VtX3tjXG1pZCBuL2R9ZihjKVxcCiY9XHN1bV97Y1xtaWQgbn1mKGMpXHN1bV97ZFxtaWQgbi9jfVxtdShkKS4KXGVuZHthbGlnbmVkfQ=="></div>

안쪽 합은 <span class="math-inline" data-tex-b64="bi9jPTE="></span>, 즉 <span class="math-inline" data-tex-b64="Yz1u"></span>일 때만 1이고 나머지는 0이다. 따라서 전체 합은 <span class="math-inline" data-tex-b64="ZihuKQ=="></span>만 남는다.

Möbius inversion은 “모든 약수에 대한 누적합”에서 원래 함수를 되찾는 장치이다.

## Floor Function과 <span class="math-inline" data-tex-b64="cA=="></span>-Adic Valuation

<span class="math-inline" data-tex-b64="dl9wKG4p"></span>은 <span class="math-inline" data-tex-b64="cF5rXG1pZCBu"></span>인 가장 큰 <span class="math-inline" data-tex-b64="aw=="></span>이다. Factorial에서는 <span class="math-inline" data-tex-b64="cA=="></span>의 배수, <span class="math-inline" data-tex-b64="cF4y"></span>의 배수, 그 이상의 배수가 추가로 <span class="math-inline" data-tex-b64="cA=="></span>를 제공한다.

> <strong>Legendre’s Formula</strong>
>
> <div class="math-display" data-tex-b64="dl9wKG4hKT1cc3VtX3trXGdlMX1cbGVmdFxsZmxvb3JcZnJhY3tufXtwXmt9XHJpZ2h0XHJmbG9vcg=="></div>

합은 <span class="math-inline" data-tex-b64="cF5rPm4="></span> 이후 모두 0이므로 유한하다. 예를 들어

<div class="math-display" data-tex-b64="dl8yKDEwISk9XGxlZnRcbGZsb29yXGZyYWN7MTB9ezJ9XHJpZ2h0XHJmbG9vcitcbGVmdFxsZmxvb3JcZnJhY3sxMH17NH1ccmlnaHRccmZsb29yK1xsZWZ0XGxmbG9vclxmcmFjezEwfXs4fVxyaWdodFxyZmxvb3I9NSsyKzE9OA=="></div>

이다.

이 공식으로

<div class="math-display" data-tex-b64="dl9wXGJpbm9tIG5yPXZfcChuISktdl9wKHIhKS12X3AoKG4tcikhKVxnZTA="></div>

임을 확인하면 이항계수가 정수라는 사실을 소인수 지수 관점에서 볼 수 있다.

## 약수합의 순서 교환

<span class="math-inline" data-tex-b64="RihuKT1cc3VtX3tkXG1pZCBufWYoZCk="></span>이면

<div class="math-display" data-tex-b64="XHN1bV97bj0xfV57Tn1GKG4pPVxzdW1fe2Q9MX1ee059ZihkKVxsZWZ0XGxmbG9vclxmcmFjIE5kXHJpZ2h0XHJmbG9vcg=="></div>

이다. 왼쪽에서 <span class="math-inline" data-tex-b64="ZihkKQ=="></span>는 <span class="math-inline" data-tex-b64="ZA=="></span>의 배수 <span class="math-inline" data-tex-b64="ZCwyZCxcbGRvdHMsXGxmbG9vciBOL2RccmZsb29yIGQ="></span>마다 한 번씩 등장하므로 정확히 <span class="math-inline" data-tex-b64="XGxmbG9vciBOL2RccmZsb29y"></span>번 세어진다.

## 정리

소인수분해는 <span class="math-inline" data-tex-b64="XHRhdQ=="></span>와 <span class="math-inline" data-tex-b64="XHNpZ21h"></span>의 곱 공식을 제공한다. 곱셈적 함수는 서로소인 정수의 구조를 분리하며, Möbius 함수는 약수 누적합을 역변환한다. Legendre’s Formula는 factorial에 포함된 소수의 지수를 floor 함수의 합으로 계산한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="bj03NTY9Ml4yXGNkb3QzXjNcY2RvdDc="></span>에 대해 <span class="math-inline" data-tex-b64="XHRhdShuKQ=="></span>과 <span class="math-inline" data-tex-b64="XHNpZ21hKG4p"></span>을 구한다.
2. <span class="math-inline" data-tex-b64="XHN1bV97ZFxtaWQzMH1cbXUoZCk="></span>를 직접 계산한다.
3. <span class="math-inline" data-tex-b64="dl81KDEwMCEp"></span>을 구한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="XHRhdSg3NTYpPTNcY2RvdDRcY2RvdDI9MjQ="></div>

이고

<div class="math-display" data-tex-b64="XHNpZ21hKDc1Nik9KDErMis0KSgxKzMrOSsyNykoMSs3KT03XGNkb3Q0MFxjZG90OD0yMjQw"></div>

이다.

### 2번

30의 약수 중 square-free인 수는 모두이며

<div class="math-display" data-tex-b64="MS0xLTEtMSsxKzErMS0xPTA="></div>

이다. 이는 <span class="math-inline" data-tex-b64="MzA+MQ=="></span>인 일반 항등식과 일치한다.

### 3번

<div class="math-display" data-tex-b64="dl81KDEwMCEpPVxsZWZ0XGxmbG9vclxmcmFjezEwMH17NX1ccmlnaHRccmZsb29yK1xsZWZ0XGxmbG9vclxmcmFjezEwMH17MjV9XHJpZ2h0XHJmbG9vcj0yMCs0PTI0"></div>

이다.
