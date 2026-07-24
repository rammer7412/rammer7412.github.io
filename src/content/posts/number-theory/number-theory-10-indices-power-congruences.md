---
title: "10. Indices and Power Congruences"
description: "primitive root에 대한 index를 정의하고 고차 합동식을 선형합동식으로 바꾸어 해의 존재 조건과 개수를 구한다."
date: "2026-02-05"
category: "정수론"
tags: ["number-theory", "index", "discrete-logarithm", "power-congruence", "power-residue"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 10
featured: false
draft: false
---

원시근이 존재하는 법에서는 모든 invertible residue를 하나의 원시근의 거듭제곱으로 표현할 수 있다. 이때 지수를 index라고 하며, 곱셈 문제를 덧셈 합동식으로 바꾼다. 현대 용어로는 discrete logarithm이다.

## Index의 정의

modulo <span class="math-inline" data-tex-b64="bg=="></span>의 primitive root를 <span class="math-inline" data-tex-b64="cg=="></span>라 하자. <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 유일한 <span class="math-inline" data-tex-b64="MFxsZSBrPFx2YXJwaGkobik="></span>가 존재하여

<div class="math-display" data-tex-b64="YVxlcXVpdiByXmtccG1vZCBu"></div>

이다. 이 <span class="math-inline" data-tex-b64="aw=="></span>를

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9X3IoYSk="></div>

라고 한다. 지수는 modulo <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>에서 결정된다.

## Index의 기본 성질

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxvcGVyYXRvcm5hbWV7aW5kfV9yKGFiKSZcZXF1aXZcb3BlcmF0b3JuYW1le2luZH1fcihhKStcb3BlcmF0b3JuYW1le2luZH1fcihiKVxwbW9ke1x2YXJwaGkobil9LFxcClxvcGVyYXRvcm5hbWV7aW5kfV9yKGFeaykmXGVxdWl2IGtcb3BlcmF0b3JuYW1le2luZH1fcihhKVxwbW9ke1x2YXJwaGkobil9LFxcClxvcGVyYXRvcm5hbWV7aW5kfV9yKDEpJlxlcXVpdjAsXFwKXG9wZXJhdG9ybmFtZXtpbmR9X3IocikmXGVxdWl2MS4KXGVuZHthbGlnbmVkfQ=="></div>

첫 번째 성질은 <span class="math-inline" data-tex-b64="YVxlcXVpdiByXnU="></span>, <span class="math-inline" data-tex-b64="YlxlcXVpdiByXnY="></span>를 곱하면 <span class="math-inline" data-tex-b64="YWJcZXF1aXYgcl57dSt2fQ=="></span>가 되는 것에서 바로 나온다.

## Index Table

작은 법에서는 원시근의 거듭제곱을 나열하여 표를 만들 수 있다. 예를 들어 modulo 13에서 2는 primitive root이고

<div class="math-display" data-tex-b64="XGJlZ2lue2FycmF5fXtjfGNjY2NjY2NjY2NjY30KYSYxJjImMyY0JjUmNiY3JjgmOSYxMCYxMSYxMlxcXGhsaW5lClxvcGVyYXRvcm5hbWV7aW5kfV8yKGEpJjAmMSY0JjImOSY1JjExJjMmOCYxMCY3JjYKXGVuZHthcnJheX0="></div>

이다. 큰 법에서는 이 표를 만드는 것 자체가 discrete logarithm problem이므로 쉽지 않다.

## Power Congruence

다음 합동식을 생각하자.

<div class="math-display" data-tex-b64="eF5rXGVxdWl2IGFccG1vZCBu"></div>

양변의 index를 취하면

<div class="math-display" data-tex-b64="a1xvcGVyYXRvcm5hbWV7aW5kfV9yKHgpXGVxdWl2XG9wZXJhdG9ybmFtZXtpbmR9X3IoYSlccG1vZHtcdmFycGhpKG4pfQ=="></div>

가 된다. 즉 고차 합동식이 하나의 linear congruence로 바뀐다.

<span class="math-inline" data-tex-b64="ZD1cZ2NkKGssXHZhcnBoaShuKSk="></span>라 하면 선형합동식 이론에 의해 해가 존재할 필요충분조건은

<div class="math-display" data-tex-b64="ZFxtaWRcb3BlcmF0b3JuYW1le2luZH1fcihhKQ=="></div>

이고, 존재하면 modulo <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>에서 서로 다른 index 해가 정확히 <span class="math-inline" data-tex-b64="ZA=="></span>개이다. 따라서 원래 합동식도 reduced residue system 안에서 <span class="math-inline" data-tex-b64="ZA=="></span>개의 해를 가진다.

## Index를 사용하지 않는 판정식

<span class="math-inline" data-tex-b64="Rw=="></span>가 크기 <span class="math-inline" data-tex-b64="bT1cdmFycGhpKG4p"></span>인 cyclic group이고 <span class="math-inline" data-tex-b64="ZD1cZ2NkKGssbSk="></span>라 하자. <span class="math-inline" data-tex-b64="YT1yXnY="></span>가 <span class="math-inline" data-tex-b64="aw=="></span>제곱일 조건은 <span class="math-inline" data-tex-b64="ZFxtaWQgdg=="></span>이다. 이는 다음과 동치이다.

> <div class="math-display" data-tex-b64="YV57bS9kfVxlcXVpdjFccG1vZCBu"></div>

실제로 <span class="math-inline" data-tex-b64="YV57bS9kfT1yXnt2bS9kfQ=="></span>가 1일 조건은 <span class="math-inline" data-tex-b64="bVxtaWQgdm0vZA=="></span>, 즉 <span class="math-inline" data-tex-b64="ZFxtaWQgdg=="></span>이다.

소수 <span class="math-inline" data-tex-b64="cA=="></span>에서는 <span class="math-inline" data-tex-b64="bT1wLTE="></span>이므로

<div class="math-display" data-tex-b64="eF5rXGVxdWl2IGFccG1vZCBwXHRleHR76rCAIO2SgOumvH0KXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQKYV57KHAtMSkvZH1cZXF1aXYxXHBtb2QgcA=="></div>

이다.

## 예제: <span class="math-inline" data-tex-b64="NHheOVxlcXVpdjdccG1vZHsxM30="></span>

4의 역원은 10이므로

<div class="math-display" data-tex-b64="eF45XGVxdWl2NVxwbW9kezEzfQ=="></div>

이다. 원시근 2를 사용하면 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9XzIoNSk9OQ=="></span>이므로

<div class="math-display" data-tex-b64="OVxvcGVyYXRvcm5hbWV7aW5kfV8yKHgpXGVxdWl2OVxwbW9kezEyfQ=="></div>

이다. <span class="math-inline" data-tex-b64="XGdjZCg5LDEyKT0z"></span>이고 <span class="math-inline" data-tex-b64="M1xtaWQ5"></span>이므로 해가 3개 있다. 3으로 나누면

<div class="math-display" data-tex-b64="M1xvcGVyYXRvcm5hbWV7aW5kfV8yKHgpXGVxdWl2M1xwbW9kNA=="></div>

즉 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9XzIoeClcZXF1aXYxXHBtb2Q0"></span>이다. modulo 12에서 index는 <span class="math-inline" data-tex-b64="MSw1LDk="></span>이고

<div class="math-display" data-tex-b64="eFxlcXVpdjIsNiw1XHBtb2R7MTN9"></div>

이다.

## Quadratic Residue와의 연결

<span class="math-inline" data-tex-b64="az0y"></span>, <span class="math-inline" data-tex-b64="cA=="></span>가 홀수 소수이면 <span class="math-inline" data-tex-b64="ZD0y"></span>이다. 따라서 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2IGFccG1vZCBw"></span>가 풀릴 조건은

<div class="math-display" data-tex-b64="YV57KHAtMSkvMn1cZXF1aXYxXHBtb2QgcA=="></div>

이다. 이것이 다음 글에서 다룰 Euler’s Criterion이다.

## 원시근이 바뀌면 Index는 어떻게 변하는가

<span class="math-inline" data-tex-b64="cz1yXnQ="></span>가 또 다른 primitive root이면 <span class="math-inline" data-tex-b64="XGdjZCh0LFx2YXJwaGkobikpPTE="></span>이다. <span class="math-inline" data-tex-b64="YT1yXm09c151PXJee3R1fQ=="></span>이므로

<div class="math-display" data-tex-b64="dVxlcXVpdiB0XnstMX1tXHBtb2R7XHZhcnBoaShuKX0="></div>

즉

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9X3MoYSlcZXF1aXYgdF57LTF9XG9wZXJhdG9ybmFtZXtpbmR9X3IoYSlccG1vZHtcdmFycGhpKG4pfQ=="></div>

이다. Index 값은 원시근에 따라 바뀌지만 power congruence의 해 존재 여부는 바뀌지 않는다.

## 정리

Index는 cyclic multiplicative group의 곱셈을 지수의 덧셈으로 변환한다. <span class="math-inline" data-tex-b64="eF5rXGVxdWl2IGE="></span>는 index에 대한 linear congruence가 되며, <span class="math-inline" data-tex-b64="XGdjZChrLFx2YXJwaGkobikp"></span>이 해의 존재 조건과 개수를 결정한다.

## 연습 문제

1. modulo 11에서 원시근 2에 대한 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9XzIoNyk="></span>을 구한다.
2. <span class="math-inline" data-tex-b64="eF40XGVxdWl2NVxwbW9kezEzfQ=="></span>의 해 존재 여부를 판정한다.
3. <span class="math-inline" data-tex-b64="eF4zXGVxdWl2NVxwbW9kezEzfQ=="></span>의 모든 해를 구한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="Ml43PTEyOFxlcXVpdjdccG1vZHsxMX0="></div>

이므로 index는 7이다.

### 2번

<span class="math-inline" data-tex-b64="ZD1cZ2NkKDQsMTIpPTQ="></span>이고

<div class="math-display" data-tex-b64="NV57MTIvNH09NV4zXGVxdWl2OFxub3RcZXF1aXYxXHBtb2R7MTN9"></div>

이므로 해가 없다.

### 3번

<span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9XzIoNSk9OQ=="></span>이므로

<div class="math-display" data-tex-b64="M1xvcGVyYXRvcm5hbWV7aW5kfV8yKHgpXGVxdWl2OVxwbW9kezEyfQ=="></div>

이다. 나누면 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtpbmR9XzIoeClcZXF1aXYzXHBtb2Q0"></span>이고 index는 <span class="math-inline" data-tex-b64="Myw3LDEx"></span>이다. 따라서

<div class="math-display" data-tex-b64="eFxlcXVpdjJeMywyXjcsMl57MTF9XGVxdWl2OCwxMSw3XHBtb2R7MTN9"></div>

이다.
