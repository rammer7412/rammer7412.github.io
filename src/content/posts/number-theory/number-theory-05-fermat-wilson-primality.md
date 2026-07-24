---
title: "5. Fermat, Wilson, and Primality Tests"
description: "Fermat’s Little Theorem과 Wilson’s Theorem을 증명하고, 가소수와 Carmichael Number를 통해 소수 판별의 한계를 살펴본다."
date: "2026-01-28"
category: "정수론"
tags: ["number-theory", "fermats-little-theorem", "wilsons-theorem", "pseudoprime", "carmichael-number"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 5
featured: false
draft: false
---

소수를 법으로 하는 합동식은 특별한 구조를 가진다. Fermat’s Little Theorem은 거듭제곱을 크게 단순화하고, Wilson’s Theorem은 소수 자체를 특징짓는다. 하지만 Fermat 정리의 역은 성립하지 않으며, 이 틈에서 pseudoprime과 Carmichael Number가 등장한다.

## Fermat’s Little Theorem

> <span class="math-inline" data-tex-b64="cA=="></span>가 소수이고 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면
>
> <div class="math-display" data-tex-b64="YV57cC0xfVxlcXVpdjFccG1vZCBw"></div>
>
> 이다.

### 증명: Complete Residue System의 순열

집합

<div class="math-display" data-tex-b64="Uz1ce2EsMmEsM2EsXGxkb3RzLChwLTEpYVx9"></div>

을 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 생각한다. 두 원소 <span class="math-inline" data-tex-b64="aWEsamE="></span>가 합동이면

<div class="math-display" data-tex-b64="aWFcZXF1aXYgamFccG1vZCBw"></div>

이다. <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이므로 <span class="math-inline" data-tex-b64="YQ=="></span>를 약분할 수 있고 <span class="math-inline" data-tex-b64="aVxlcXVpdiBqXHBtb2QgcA=="></span>이다. <span class="math-inline" data-tex-b64="MVxsZSBpLGpcbGUgcC0x"></span>이므로 <span class="math-inline" data-tex-b64="aT1q"></span>이다.

따라서 <span class="math-inline" data-tex-b64="YSwyYSxcbGRvdHMsKHAtMSlh"></span>는 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 서로 다른 0이 아닌 나머지이며, <span class="math-inline" data-tex-b64="MSwyLFxsZG90cyxwLTE="></span>의 순열이다. 모든 원소를 곱하면

<div class="math-display" data-tex-b64="YV57cC0xfShwLTEpIVxlcXVpdihwLTEpIVxwbW9kIHA="></div>

이다. <span class="math-inline" data-tex-b64="cA=="></span>는 <span class="math-inline" data-tex-b64="KHAtMSkh"></span>과 서로소이므로 약분하여 <span class="math-inline" data-tex-b64="YV57cC0xfVxlcXVpdjFccG1vZCBw"></span>를 얻는다.

## 동치 형태 <span class="math-inline" data-tex-b64="YV5wXGVxdWl2IGFccG1vZCBw"></span>

모든 정수 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해

<div class="math-display" data-tex-b64="YV5wXGVxdWl2IGFccG1vZCBw"></div>

이다. <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면 Fermat’s Little Theorem에 <span class="math-inline" data-tex-b64="YQ=="></span>를 곱하면 된다. <span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span>이면 양변이 모두 0과 합동이다.

또 다른 증명은 Binomial Theorem과 귀납법을 이용한다. <span class="math-inline" data-tex-b64="MVxsZSBrXGxlIHAtMQ=="></span>에 대해 <span class="math-inline" data-tex-b64="cFxtaWRcYmlub20gcGs="></span>이므로

<div class="math-display" data-tex-b64="KGErMSlecFxlcXVpdiBhXnArMVxwbW9kIHA="></div>

이고 <span class="math-inline" data-tex-b64="YT0w"></span>에서 시작해 모든 자연수로 확장할 수 있다.

## 큰 거듭제곱 계산

<span class="math-inline" data-tex-b64="NV57Mzh9XHBtb2R7MTF9"></span>을 구하자. Fermat’s Little Theorem에 의해 <span class="math-inline" data-tex-b64="NV57MTB9XGVxdWl2MVxwbW9kezExfQ=="></span>이다. 따라서

<div class="math-display" data-tex-b64="NV57Mzh9PTVeezMwfTVeOFxlcXVpdjVeOFxwbW9kezExfQ=="></div>

이고 <span class="math-inline" data-tex-b64="NV4yXGVxdWl2Mw=="></span>, <span class="math-inline" data-tex-b64="NV40XGVxdWl2OQ=="></span>, <span class="math-inline" data-tex-b64="NV44XGVxdWl2NA=="></span>이므로 답은 4이다.

지수를 <span class="math-inline" data-tex-b64="cC0x"></span>로 단순히 나눌 수 있는 것은 밑이 <span class="math-inline" data-tex-b64="cA=="></span>와 서로소일 때이다. 일반 형태 <span class="math-inline" data-tex-b64="YV5wXGVxdWl2IGE="></span>를 사용하면 서로소가 아닌 경우도 안전하게 다룰 수 있다.

## Fermat Primality Test

<span class="math-inline" data-tex-b64="bj4x"></span>과 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>인 밑 <span class="math-inline" data-tex-b64="YQ=="></span>를 고른다. 만약

<div class="math-display" data-tex-b64="YV57bi0xfVxub3RcZXF1aXYxXHBtb2Qgbg=="></div>

이면 <span class="math-inline" data-tex-b64="bg=="></span>은 반드시 합성수이다. 이때 <span class="math-inline" data-tex-b64="YQ=="></span>를 Fermat witness라고 한다.

그러나

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBu"></div>

이라고 해서 <span class="math-inline" data-tex-b64="bg=="></span>이 반드시 소수인 것은 아니다. 이 검사는 합성수를 증명할 수는 있지만, 한 번 통과한 수를 소수라고 확정하지는 못한다.

## Pseudoprime

합성수 <span class="math-inline" data-tex-b64="bg=="></span>이 특정 밑 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBu"></div>

을 만족하면 base-<span class="math-inline" data-tex-b64="YQ=="></span> pseudoprime이라고 한다.

예를 들어 <span class="math-inline" data-tex-b64="MzQxPTExXGNkb3QzMQ=="></span>은 합성수이지만

<div class="math-display" data-tex-b64="Ml57MTB9PTEwMjRcZXF1aXYxXHBtb2R7MzQxfQ=="></div>

이므로

<div class="math-display" data-tex-b64="Ml57MzQwfT0oMl57MTB9KV57MzR9XGVxdWl2MVxwbW9kezM0MX0="></div>

이다. 따라서 341은 base 2에 대한 pseudoprime이다.

## Carmichael Number

합성수 <span class="math-inline" data-tex-b64="bg=="></span>이 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>인 모든 정수 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBu"></div>

을 만족하면 Carmichael Number 또는 absolute pseudoprime이라고 한다. 가장 작은 예는

<div class="math-display" data-tex-b64="NTYxPTNcY2RvdDExXGNkb3QxNw=="></div>

이다.

Pseudoprime은 특정 밑에만 관련된 개념이고, Carmichael Number는 가능한 모든 서로소 밑에 대해 Fermat 검사를 통과한다.

### Carmichael Number는 square-free이다

<span class="math-inline" data-tex-b64="bg=="></span>이 Carmichael Number인데 어떤 소수 <span class="math-inline" data-tex-b64="cA=="></span>에 대해 <span class="math-inline" data-tex-b64="cF4yXG1pZCBu"></span>이라고 가정하자. 다음 정수를 선택한다.

<div class="math-display" data-tex-b64="YT0xK1xmcmFjIG5w"></div>

<span class="math-inline" data-tex-b64="cF4yXG1pZCBu"></span>이므로 <span class="math-inline" data-tex-b64="bi9w"></span>는 <span class="math-inline" data-tex-b64="bg=="></span>의 모든 소인수로 나누어진다. 따라서 <span class="math-inline" data-tex-b64="YQ=="></span>는 <span class="math-inline" data-tex-b64="bg=="></span>의 모든 소인수에 대해 1과 합동이고 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이다.

Binomial Theorem을 적용하면 두 번째 항 이후에는 <span class="math-inline" data-tex-b64="KG4vcCleMg=="></span>가 포함된다. <span class="math-inline" data-tex-b64="cF4yXG1pZCBu"></span>이므로 <span class="math-inline" data-tex-b64="blxtaWQobi9wKV4y"></span>이고

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjErKG4tMSlcZnJhYyBucFxwbW9kIG4="></div>

이다. 그런데 <span class="math-inline" data-tex-b64="cFxubWlkKG4tMSk="></span>이므로 <span class="math-inline" data-tex-b64="blxubWlkKG4tMSluL3A="></span>이다. 따라서 <span class="math-inline" data-tex-b64="YV57bi0xfVxub3RcZXF1aXYxXHBtb2Qgbg=="></span>이 되어 Carmichael 성질에 모순이다. 그러므로 Carmichael Number는 square-free이다.

### Korselt Criterion의 충분조건

<span class="math-inline" data-tex-b64="bj1wXzFwXzJcY2RvdHMgcF9y"></span>가 서로 다른 소수의 곱이고 모든 <span class="math-inline" data-tex-b64="cF9p"></span>에 대해

<div class="math-display" data-tex-b64="cF9pLTFcbWlkIG4tMQ=="></div>

이라고 하자. <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 각 <span class="math-inline" data-tex-b64="cF9p"></span>에 대해 Fermat’s Little Theorem으로 <span class="math-inline" data-tex-b64="YV57cF9pLTF9XGVxdWl2MVxwbW9ke3BfaX0="></span>이다. <span class="math-inline" data-tex-b64="bi0x"></span>이 <span class="math-inline" data-tex-b64="cF9pLTE="></span>의 배수이므로

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZHtwX2l9"></div>

이다. 서로 다른 모든 <span class="math-inline" data-tex-b64="cF9p"></span>가 <span class="math-inline" data-tex-b64="YV57bi0xfS0x"></span>을 나누므로 그 곱 <span class="math-inline" data-tex-b64="bg=="></span>도 나눈다. 따라서 <span class="math-inline" data-tex-b64="bg=="></span>은 Carmichael Number이다.

Korselt Criterion은 실제로 “square-free이고 모든 소인수 <span class="math-inline" data-tex-b64="cA=="></span>에 대해 <span class="math-inline" data-tex-b64="cC0xXG1pZCBuLTE="></span>”이라는 조건이 필요충분조건임을 말한다. 여기서는 필기 흐름에 맞추어 충분조건의 핵심을 확인했다.

## Wilson’s Theorem

> <span class="math-inline" data-tex-b64="cA=="></span>가 소수이면
>
> <div class="math-display" data-tex-b64="KHAtMSkhXGVxdWl2LTFccG1vZCBw"></div>
>
> 이다.

### 증명

modulo <span class="math-inline" data-tex-b64="cA=="></span>의 0이 아닌 각 원소는 곱셈 역원을 가진다. 자기 자신이 역원인 원소는

<div class="math-display" data-tex-b64="YV4yXGVxdWl2MVxwbW9kIHA="></div>

을 만족한다. 즉 <span class="math-inline" data-tex-b64="cFxtaWQoYS0xKShhKzEp"></span>이고 <span class="math-inline" data-tex-b64="cA=="></span>가 소수이므로

<div class="math-display" data-tex-b64="YVxlcXVpdjFccG1vZCBwXHF1YWRcdGV4dHvrmJDripR9XHF1YWQgYVxlcXVpdi0xXHBtb2QgcA=="></div>

이다.

따라서 <span class="math-inline" data-tex-b64="MiwzLFxsZG90cyxwLTI="></span>의 원소들은 서로 다른 역원끼리 짝지어지고 각 쌍의 곱은 1이다. 남는 원소는 1과 <span class="math-inline" data-tex-b64="cC0xXGVxdWl2LTE="></span>이므로

<div class="math-display" data-tex-b64="KHAtMSkhXGVxdWl2MVxjZG90KC0xKVxlcXVpdi0xXHBtb2QgcA=="></div>

이다.

### Wilson 정리의 역

> <span class="math-inline" data-tex-b64="KG4tMSkhXGVxdWl2LTFccG1vZCBu"></span>이면 <span class="math-inline" data-tex-b64="bg=="></span>은 소수이다.

<span class="math-inline" data-tex-b64="bg=="></span>이 합성수라고 가정하자. 보통 <span class="math-inline" data-tex-b64="bj1zdA=="></span>, <span class="math-inline" data-tex-b64="MTxzLHQ8bg=="></span>인 두 인수가 <span class="math-inline" data-tex-b64="KG4tMSkh"></span>에 포함되므로 <span class="math-inline" data-tex-b64="blxtaWQobi0xKSE="></span>이다. 제곱수처럼 <span class="math-inline" data-tex-b64="cz10"></span>인 경우에도 <span class="math-inline" data-tex-b64="bj00"></span>를 따로 확인하고 <span class="math-inline" data-tex-b64="bj40"></span>이면 <span class="math-inline" data-tex-b64="MnM8bg=="></span>이므로 <span class="math-inline" data-tex-b64="cw=="></span>와 <span class="math-inline" data-tex-b64="MnM="></span>를 이용해 <span class="math-inline" data-tex-b64="bg=="></span>의 배수를 만들 수 있다. 따라서 합성수에서는 <span class="math-inline" data-tex-b64="KG4tMSkhXGVxdWl2MFxwbW9kIG4="></span>이거나 적어도 <span class="math-inline" data-tex-b64="LTE="></span>이 될 수 없으므로 모순이다.

Wilson 정리는 소수의 필요충분조건이지만 factorial 계산이 매우 커지므로 실용적인 소수 판별법은 아니다.

## <span class="math-inline" data-tex-b64="eF4yXGVxdWl2LTFccG1vZCBw"></span>의 해

<span class="math-inline" data-tex-b64="cA=="></span>가 홀수 소수라고 하자.

> 합동식 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2LTFccG1vZCBw"></span>이 해를 가질 필요충분조건은
>
> <div class="math-display" data-tex-b64="cFxlcXVpdjFccG1vZDQ="></div>
>
> 이다.

### 필요성

<span class="math-inline" data-tex-b64="eF4yXGVxdWl2LTFccG1vZCBw"></span>인 해가 있다고 하자. <span class="math-inline" data-tex-b64="cFxubWlkIHg="></span>이므로 Fermat’s Little Theorem에 의해

<div class="math-display" data-tex-b64="MVxlcXVpdiB4XntwLTF9PSh4XjIpXnsocC0xKS8yfVxlcXVpdigtMSleeyhwLTEpLzJ9XHBtb2QgcA=="></div>

이다. <span class="math-inline" data-tex-b64="cA=="></span>가 홀수이므로 <span class="math-inline" data-tex-b64="MVxub3RcZXF1aXYtMVxwbW9kIHA="></span>이고, 따라서 <span class="math-inline" data-tex-b64="KHAtMSkvMg=="></span>가 짝수이다. 즉 <span class="math-inline" data-tex-b64="cFxlcXVpdjFccG1vZDQ="></span>이다.

### 충분성

<span class="math-inline" data-tex-b64="cD00aysx"></span>이라 하자. Wilson’s Theorem에서

<div class="math-display" data-tex-b64="KHAtMSkhPTFcY2RvdDJcY2RvdHNcZnJhY3twLTF9ezJ9XGNkb3RcZnJhY3twKzF9ezJ9XGNkb3RzKHAtMSk="></div>

이다. 뒤쪽 인수는 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 앞쪽 인수의 음수들과 대응하므로

<div class="math-display" data-tex-b64="KHAtMSkhXGVxdWl2KC0xKV57KHAtMSkvMn1cbGVmdChcbGVmdChcZnJhY3twLTF9ezJ9XHJpZ2h0KSFccmlnaHQpXjJccG1vZCBw"></div>

이다. <span class="math-inline" data-tex-b64="KHAtMSkvMg=="></span>가 짝수이고 Wilson’s Theorem에 의해 왼쪽은 <span class="math-inline" data-tex-b64="LTE="></span>이므로

<div class="math-display" data-tex-b64="XGxlZnQoXGxlZnQoXGZyYWN7cC0xfXsyfVxyaWdodCkhXHJpZ2h0KV4yXGVxdWl2LTFccG1vZCBw"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="eD0oKHAtMSkvMikh"></span>가 한 해이다.

## 정리

Fermat’s Little Theorem은 소수 법에서의 거듭제곱 구조를 설명하지만 그 역은 거짓이다. Pseudoprime과 Carmichael Number는 Fermat test가 소수를 확정하지 못하는 이유를 보여준다. Wilson’s Theorem은 소수를 정확히 특징짓고, 이를 이용하면 <span class="math-inline" data-tex-b64="LTE="></span>이 제곱잉여가 되는 소수의 합동 조건도 증명할 수 있다.

## 연습 문제

1. Fermat’s Little Theorem으로 <span class="math-inline" data-tex-b64="M157MTAwMH1ccG1vZHsxN30="></span>을 구한다.
2. <span class="math-inline" data-tex-b64="OTE="></span>이 base 3 Fermat test를 통과하는지 확인한다.
3. Wilson’s Theorem을 이용하여 <span class="math-inline" data-tex-b64="MTAhXHBtb2R7MTF9"></span>을 구한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="M157MTZ9XGVxdWl2MVxwbW9kezE3fQ=="></span>이고 <span class="math-inline" data-tex-b64="MTAwMD0xNlxjZG90NjIrOA=="></span>이다. 따라서

<div class="math-display" data-tex-b64="M157MTAwMH1cZXF1aXYzXjhccG1vZHsxN30="></div>

이다. <span class="math-inline" data-tex-b64="M140PTgxXGVxdWl2LTQ="></span>이므로 <span class="math-inline" data-tex-b64="M144XGVxdWl2MTZcZXF1aXYtMVxwbW9kezE3fQ=="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="OTE9N1xjZG90MTM="></span>이고 <span class="math-inline" data-tex-b64="XGdjZCgzLDkxKT0x"></span>이다. <span class="math-inline" data-tex-b64="M142PTcyOVxlcXVpdjFccG1vZHs5MX0="></span>이므로

<div class="math-display" data-tex-b64="M157OTB9PSgzXjYpXnsxNX1cZXF1aXYxXHBtb2R7OTF9"></div>

이다. 따라서 91은 base 3 Fermat test를 통과하는 합성수, 즉 base 3 pseudoprime이다.

### 3번

11은 소수이므로 Wilson’s Theorem에 의해

<div class="math-display" data-tex-b64="MTAhXGVxdWl2LTFcZXF1aXYxMFxwbW9kezExfQ=="></div>

이다.
