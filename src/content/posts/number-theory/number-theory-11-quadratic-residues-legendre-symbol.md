---
title: "11. Quadratic Residues and the Legendre Symbol"
description: "이차잉여와 Euler criterion을 증명하고 Legendre symbol을 이용해 이차합동식의 해 존재를 판정한다."
date: "2026-02-06"
category: "정수론"
tags: ["number-theory", "quadratic-residue", "euler-criterion", "legendre-symbol", "quadratic-congruence"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 11
featured: false
draft: false
---

이차합동식의 핵심은 어떤 수가 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 제곱이 될 수 있는지를 판정하는 것이다. 홀수 소수 법에서는 이 문제가 Euler’s Criterion과 Legendre Symbol로 정리된다.

## 이차합동식과 판별식

<span class="math-inline" data-tex-b64="cA=="></span>가 홀수 소수이고 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>일 때

<div class="math-display" data-tex-b64="YXheMitieCtjXGVxdWl2MFxwbW9kIHA="></div>

에 <span class="math-inline" data-tex-b64="NGE="></span>를 곱하면

<div class="math-display" data-tex-b64="KDJheCtiKV4yXGVxdWl2IGJeMi00YWNccG1vZCBw"></div>

이다. 따라서 일반 이차합동식의 해 존재 여부는 판별식

<div class="math-display" data-tex-b64="XERlbHRhPWJeMi00YWM="></div>

이 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 제곱인지 여부로 환원된다.

## Quadratic Residue

<span class="math-inline" data-tex-b64="XGdjZChhLHApPTE="></span>일 때

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IGFccG1vZCBw"></div>

가 해를 가지면 <span class="math-inline" data-tex-b64="YQ=="></span>를 quadratic residue, 해가 없으면 quadratic nonresidue라고 한다.

<span class="math-inline" data-tex-b64="eA=="></span>와 <span class="math-inline" data-tex-b64="cC14"></span>는 같은 제곱을 만들며, <span class="math-inline" data-tex-b64="MVxsZSB4XGxlKHAtMSkvMg=="></span>의 제곱들은 서로 다르다. 따라서 0이 아닌 residue 중 정확히

<div class="math-display" data-tex-b64="XGZyYWN7cC0xfXsyfQ=="></div>

개가 quadratic residue이고 나머지 절반이 nonresidue이다.

원시근 <span class="math-inline" data-tex-b64="Zw=="></span>를 사용하면 모든 <span class="math-inline" data-tex-b64="YQ=="></span>는 <span class="math-inline" data-tex-b64="Z15t"></span>으로 표현되고, <span class="math-inline" data-tex-b64="YQ=="></span>가 제곱일 필요충분조건은 <span class="math-inline" data-tex-b64="bQ=="></span>이 짝수인 것이다.

## Euler’s Criterion

> <span class="math-inline" data-tex-b64="cA=="></span>가 홀수 소수이고 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면
>
> <div class="math-display" data-tex-b64="YV57KHAtMSkvMn1cZXF1aXYKPiBcYmVnaW57Y2FzZXN9Cj4gMVxwbW9kIHAsJmFcdGV4dHvqsIAgcXVhZHJhdGljIHJlc2lkdWV9LFxcCj4gLTFccG1vZCBwLCZhXHRleHR76rCAIHF1YWRyYXRpYyBub25yZXNpZHVlfQo+IFxlbmR7Y2FzZXN9"></div>

### 증명

<span class="math-inline" data-tex-b64="YVxlcXVpdiBnXm1ccG1vZCBw"></span>라 하자. <span class="math-inline" data-tex-b64="Zw=="></span>의 order는 <span class="math-inline" data-tex-b64="cC0x"></span>이므로

<div class="math-display" data-tex-b64="YV57KHAtMSkvMn1cZXF1aXYgZ157bShwLTEpLzJ9XGVxdWl2KC0xKV5tXHBtb2QgcA=="></div>

이다. <span class="math-inline" data-tex-b64="bQ=="></span>이 짝수이면 <span class="math-inline" data-tex-b64="YQ=="></span>는 제곱이고 값은 1이다. 홀수이면 비제곱이고 값은 -1이다.

또는 Fermat 정리에서

<div class="math-display" data-tex-b64="XGxlZnQoYV57KHAtMSkvMn0tMVxyaWdodClcbGVmdChhXnsocC0xKS8yfSsxXHJpZ2h0KVxlcXVpdjBccG1vZCBw"></div>

이므로 가능한 값이 <span class="math-inline" data-tex-b64="XHBtMQ=="></span>뿐이라는 것도 확인할 수 있다.

## Legendre Symbol

홀수 소수 <span class="math-inline" data-tex-b64="cA=="></span>에 대해

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgYXBccmlnaHQpPQpcYmVnaW57Y2FzZXN9CjAsJnBcbWlkIGEsXFwKMSwmYVx0ZXh0e+qwgCBxdWFkcmF0aWMgcmVzaWR1ZSBtb2R1bG8gfXAsXFwKLTEsJmFcdGV4dHvqsIAgcXVhZHJhdGljIG5vbnJlc2lkdWUgbW9kdWxvIH1wClxlbmR7Y2FzZXN9"></div>

로 정의한다. Euler’s Criterion은

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgYXBccmlnaHQpXGVxdWl2IGFeeyhwLTEpLzJ9XHBtb2QgcA=="></div>

라고 쓸 수 있다. 양변의 값은 <span class="math-inline" data-tex-b64="LTEsMCwx"></span> 중 하나이므로 합동값으로 symbol의 실제 값을 결정할 수 있다.

## 기본 성질

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmFcZXF1aXYgYlxwbW9kIHAmXFJpZ2h0YXJyb3dcbGVmdChcZnJhYyBhcFxyaWdodCk9XGxlZnQoXGZyYWMgYnBccmlnaHQpLFxcClxsZWZ0KFxmcmFje2FifXtwfVxyaWdodCkmPVxsZWZ0KFxmcmFjIGFwXHJpZ2h0KVxsZWZ0KFxmcmFjIGJwXHJpZ2h0KSxcXApcbGVmdChcZnJhY3thXjJ9e3B9XHJpZ2h0KSY9MVxxdWFkKHBcbm1pZCBhKSxcXApcbGVmdChcZnJhY3thYl4yfXtwfVxyaWdodCkmPVxsZWZ0KFxmcmFjIGFwXHJpZ2h0KS4KXGVuZHthbGlnbmVkfQ=="></div>

곱셈성은 Euler criterion에서

<div class="math-display" data-tex-b64="KGFiKV57KHAtMSkvMn1cZXF1aXYgYV57KHAtMSkvMn1iXnsocC0xKS8yfVxwbW9kIHA="></div>

을 사용하면 얻는다.

## <span class="math-inline" data-tex-b64="LTE="></span>의 이차잉여성

Euler criterion으로

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7LTF9e3B9XHJpZ2h0KT0oLTEpXnsocC0xKS8yfQo9XGJlZ2lue2Nhc2VzfQoxLCZwXGVxdWl2MVxwbW9kNCxcXAotMSwmcFxlcXVpdjNccG1vZDQuClxlbmR7Y2FzZXN9"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2LTFccG1vZCBw"></span>은 <span class="math-inline" data-tex-b64="cFxlcXVpdjFccG1vZDQ="></span>일 때만 풀린다.

## 예제

<span class="math-inline" data-tex-b64="eF4yXGVxdWl2LTQ2XHBtb2R7MTd9"></span>의 해 존재를 판정하자. <span class="math-inline" data-tex-b64="LTQ2XGVxdWl2NVxwbW9kezE3fQ=="></span>이고

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWM1ezE3fVxyaWdodClcZXF1aXY1XjhcZXF1aXYtMVxwbW9kezE3fQ=="></div>

이므로 5는 quadratic nonresidue이며 해가 없다.

## <span class="math-inline" data-tex-b64="NGsrMQ=="></span> 꼴 소수의 무한성

그러한 소수가 유한하여 <span class="math-inline" data-tex-b64="cF8xLFxsZG90cyxwX3I="></span>뿐이라고 가정하자. 다음 수를 잡는다.

<div class="math-display" data-tex-b64="Tj0oMnBfMXBfMlxjZG90cyBwX3IpXjIrMQ=="></div>

<span class="math-inline" data-tex-b64="Tg=="></span>의 홀수 소인수 <span class="math-inline" data-tex-b64="cQ=="></span>에 대해

<div class="math-display" data-tex-b64="KDJwXzFcY2RvdHMgcF9yKV4yXGVxdWl2LTFccG1vZCBx"></div>

이므로 -1은 modulo <span class="math-inline" data-tex-b64="cQ=="></span>의 quadratic residue이다. 따라서 <span class="math-inline" data-tex-b64="cVxlcXVpdjFccG1vZDQ="></span>이다. 그런데 어떤 <span class="math-inline" data-tex-b64="cF9p"></span>도 <span class="math-inline" data-tex-b64="Tg=="></span>을 나누지 않으므로 새로운 <span class="math-inline" data-tex-b64="NGsrMQ=="></span> 꼴 소수를 얻어 모순이다.

## Legendre Symbol의 합

quadratic residue와 nonresidue가 각각 같은 수만큼 있으므로

<div class="math-display" data-tex-b64="XHN1bV97YT0xfV57cC0xfVxsZWZ0KFxmcmFjIGFwXHJpZ2h0KT0w"></div>

이다. 원시근 <span class="math-inline" data-tex-b64="Zw=="></span>를 사용하면 symbol 값이 <span class="math-inline" data-tex-b64="MSwtMSwxLC0xLFxsZG90cw=="></span>로 번갈아 나타나는 것으로도 볼 수 있다.

## 정리

이차합동식은 판별식이 quadratic residue인지 판정하는 문제로 환원된다. Euler’s Criterion은 거듭제곱 하나로 residue 여부를 결정하며 Legendre Symbol은 그 결과를 계산하기 쉬운 기호로 정리한다.

## 연습 문제

1. modulo 13의 0이 아닌 quadratic residue를 모두 구한다.
2. <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWN7LTF9ezE5fVxyaWdodCk="></span>을 계산한다.
3. <span class="math-inline" data-tex-b64="M3heMis0eCsyXGVxdWl2MFxwbW9kezExfQ=="></span>의 해 존재 여부를 판정한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="MV4yLDJeMixcbGRvdHMsNl4y"></span>만 계산하면 되고

<div class="math-display" data-tex-b64="MSw0LDksMywxMiwxMA=="></div>

이므로 집합은 <span class="math-inline" data-tex-b64="XHsxLDMsNCw5LDEwLDEyXH0="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="MTlcZXF1aXYzXHBtb2Q0"></span>이므로 값은 -1이다.

### 3번

판별식은

<div class="math-display" data-tex-b64="XERlbHRhPTReMi00XGNkb3QzXGNkb3QyPS04XGVxdWl2M1xwbW9kezExfQ=="></div>

이다. modulo 11의 quadratic residue는 <span class="math-inline" data-tex-b64="MSwzLDQsNSw5"></span>이므로 해가 존재한다.
