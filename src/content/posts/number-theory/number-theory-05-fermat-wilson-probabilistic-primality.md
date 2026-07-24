---
title: "5. Fermat, Wilson, and Probabilistic Primality Tests"
description: "Fermat과 Wilson 정리를 증명하고 pseudoprime, Carmichael Number, Miller–Rabin 검사를 통해 소수 판별의 원리와 한계를 살펴본다."
date: "2026-01-28"
category: "정수론"
tags: ["number-theory", "fermats-little-theorem", "wilsons-theorem", "miller-rabin", "carmichael-number"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 5
featured: false
draft: false
---

소수를 법으로 하는 합동식은 매우 규칙적인 구조를 가진다. Fermat’s Little Theorem은 거대한 지수를 줄이는 기본 도구이고, Wilson’s Theorem은 소수를 정확히 특징짓는다. 그러나 정리를 그대로 뒤집어 소수를 판정하려 하면 pseudoprime이 나타난다. 이 글에서는 정리의 증명에서 출발하여 Fermat 검사와 Miller–Rabin 검사가 무엇을 확인하는지 연결한다.

## Fermat’s Little Theorem

> <span class="math-inline" data-tex-b64="cA=="></span>가 소수이고 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면
>
> <div class="math-display" data-tex-b64="YV57cC0xfVxlcXVpdjFccG1vZCBw"></div>
>
> 이다.

### Reduced residue의 순열을 이용한 증명

<span class="math-inline" data-tex-b64="YSwyYSxcbGRvdHMsKHAtMSlh"></span>를 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 생각하자. <span class="math-inline" data-tex-b64="aWFcZXF1aXYgamFccG1vZCBw"></span>이면 <span class="math-inline" data-tex-b64="cFxtaWQgYShpLWop"></span>이다. <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이므로 Euclid’s Lemma에 의해 <span class="math-inline" data-tex-b64="cFxtaWQgaS1q"></span>이고, <span class="math-inline" data-tex-b64="MVxsZSBpLGpcbGUgcC0x"></span>이므로 <span class="math-inline" data-tex-b64="aT1q"></span>이다. 따라서 이 수들은 <span class="math-inline" data-tex-b64="MSwyLFxsZG90cyxwLTE="></span>의 순열이다.

모든 원소를 곱하면

<div class="math-display" data-tex-b64="YV57cC0xfShwLTEpIVxlcXVpdihwLTEpIVxwbW9kIHA="></div>

이다. <span class="math-inline" data-tex-b64="KHAtMSkh"></span>은 <span class="math-inline" data-tex-b64="cA=="></span>와 서로소이므로 약분할 수 있어 원하는 결과를 얻는다.

## 동치 형태

임의의 정수 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해 다음 형태가 자주 사용된다.

<div class="math-display" data-tex-b64="YV5wXGVxdWl2IGFccG1vZCBw"></div>

<span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면 Fermat 정리에 <span class="math-inline" data-tex-b64="YQ=="></span>를 곱하면 된다. <span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span>이면 양변이 모두 0이므로 역시 성립한다.

예를 들어 <span class="math-inline" data-tex-b64="M157MjU2fQ=="></span>의 마지막 두 자리를 구하려면 modulo 100에서 직접 Euler 정리를 적용할 수 있다. 반면 법이 소수라면 지수를 <span class="math-inline" data-tex-b64="cC0x"></span>로 줄이는 Fermat 정리가 가장 간단하다.

## Fermat Primality Test

소수 <span class="math-inline" data-tex-b64="bg=="></span>과 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>인 밑 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해서는 반드시

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBu"></div>

이다. 따라서 이 합동식이 성립하지 않으면 <span class="math-inline" data-tex-b64="bg=="></span>은 확실히 합성수이다. 이때 <span class="math-inline" data-tex-b64="YQ=="></span>를 <strong>witness for compositeness</strong>라고 한다.

그러나 합동식이 성립한다고 해서 <span class="math-inline" data-tex-b64="bg=="></span>이 반드시 소수인 것은 아니다. 예를 들어

<div class="math-display" data-tex-b64="Ml57MzQwfVxlcXVpdjFccG1vZHszNDF9LFxxcXVhZCAzNDE9MTFcY2RvdDMx"></div>

이므로 341은 밑 2에 대한 pseudoprime이다.

## Pseudoprime과 Carmichael Number

합성수 <span class="math-inline" data-tex-b64="bg=="></span>이 어떤 밑 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해 Fermat 검사를 통과하면 base-<span class="math-inline" data-tex-b64="YQ=="></span> pseudoprime이라고 한다. 더 나아가 모든 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>인 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해

<div class="math-display" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBu"></div>

을 만족하는 합성수를 <strong>Carmichael Number</strong>라고 한다. 가장 작은 예는

<div class="math-display" data-tex-b64="NTYxPTNcY2RvdDExXGNkb3QxNw=="></div>

이다.

Korselt’s criterion에 따르면 합성수 <span class="math-inline" data-tex-b64="bg=="></span>이 Carmichael Number일 필요충분조건은 다음과 같다.

1. <span class="math-inline" data-tex-b64="bg=="></span>은 square-free이다.
2. 모든 소인수 <span class="math-inline" data-tex-b64="cFxtaWQgbg=="></span>에 대해 <span class="math-inline" data-tex-b64="cC0xXG1pZCBuLTE="></span>이다.

두 번째 조건으로부터 <span class="math-inline" data-tex-b64="YV57bi0xfVxlcXVpdjFccG1vZCBw"></span>가 모든 <span class="math-inline" data-tex-b64="cFxtaWQgbg=="></span>에 대해 성립하고, Chinese Remainder Theorem으로 modulo <span class="math-inline" data-tex-b64="bg=="></span>의 합동을 얻는다. square-free 조건은 같은 소수가 제곱으로 포함될 때 생기는 추가 제약을 제거한다.

## Wilson’s Theorem

> 정수 <span class="math-inline" data-tex-b64="bj4x"></span>에 대하여
>
> <div class="math-display" data-tex-b64="KG4tMSkhXGVxdWl2LTFccG1vZCBu"></div>
>
> 이 성립할 필요충분조건은 <span class="math-inline" data-tex-b64="bg=="></span>이 소수라는 것이다.

### 소수일 때의 증명

<span class="math-inline" data-tex-b64="cA=="></span>가 소수이면 <span class="math-inline" data-tex-b64="MSwyLFxsZG90cyxwLTE="></span>의 모든 원소는 곱셈 역원을 가진다. 자기 자신의 역원인 원소는

<div class="math-display" data-tex-b64="eF4yXGVxdWl2MVxwbW9kIHA="></div>

의 해인 <span class="math-inline" data-tex-b64="eFxlcXVpdlxwbTFccG1vZCBw"></span>뿐이다. 나머지 원소들은 서로 다른 역원끼리 쌍을 이루어 곱이 1이 된다. 따라서

<div class="math-display" data-tex-b64="KHAtMSkhXGVxdWl2MVxjZG90KC0xKVxlcXVpdi0xXHBtb2QgcA=="></div>

이다.

### 역의 증명

합성수 <span class="math-inline" data-tex-b64="bj40"></span>에는 <span class="math-inline" data-tex-b64="MTxkPG4="></span>인 약수 <span class="math-inline" data-tex-b64="ZA=="></span>가 있다. 그러면 <span class="math-inline" data-tex-b64="ZA=="></span>는 <span class="math-inline" data-tex-b64="KG4tMSkh"></span>을 나누므로 <span class="math-inline" data-tex-b64="KG4tMSkhXGVxdWl2MFxwbW9kIGQ="></span>이다. 만약 Wilson 합동식이 성립한다면 <span class="math-inline" data-tex-b64="LTFcZXF1aXYwXHBtb2QgZA=="></span>가 되어 모순이다. <span class="math-inline" data-tex-b64="bj00"></span>도 직접 확인하면 성립하지 않는다.

Wilson 정리는 정확한 판정법이지만 factorial 계산이 너무 커서 실용적인 소수 판정 알고리즘으로는 적합하지 않다.

## Miller–Rabin Primality Test

Fermat 검사는 <span class="math-inline" data-tex-b64="YV57bi0xfQ=="></span>만 확인한다. Miller–Rabin 검사는 그 거듭제곱이 1에 도달하기 직전의 제곱근 구조까지 추적한다.

홀수 <span class="math-inline" data-tex-b64="bj4y"></span>에 대해

<div class="math-display" data-tex-b64="bi0xPTJecyBkLFxxcXVhZCBkXHRleHR764qUIO2ZgOyImH0="></div>

로 쓴다. 밑 <span class="math-inline" data-tex-b64="YQ=="></span>를 택하고 <span class="math-inline" data-tex-b64="eF8wXGVxdWl2IGFeZFxwbW9kIG4="></span>을 계산한 뒤

<div class="math-display" data-tex-b64="eF97aSsxfVxlcXVpdiB4X2leMlxwbW9kIG4="></div>

을 반복한다. 다음 중 하나가 성립하면 이 밑에 대해서는 검사를 통과한다.

- <span class="math-inline" data-tex-b64="eF8wXGVxdWl2MVxwbW9kIG4="></span>
- 어떤 <span class="math-inline" data-tex-b64="MFxsZSBpPHM="></span>에 대해 <span class="math-inline" data-tex-b64="eF9pXGVxdWl2LTFccG1vZCBu"></span>

그렇지 않으면 <span class="math-inline" data-tex-b64="bg=="></span>은 합성수이다.

### 왜 소수는 반드시 통과하는가

<span class="math-inline" data-tex-b64="bj1w"></span>가 소수이면 Fermat 정리에 의해 <span class="math-inline" data-tex-b64="YV57Ml5zIGR9XGVxdWl2MVxwbW9kIHA="></span>이다. 제곱을 거꾸로 추적할 때 1의 제곱근은 <span class="math-inline" data-tex-b64="XHBtMQ=="></span>뿐이다. 처음부터 1이 아니었다면 어느 단계에서 반드시 -1을 거쳐야 한다. 합성수에서는 1의 비자명한 제곱근이 존재할 수 있으므로 이 논리가 깨진다.

합성수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 무작위 밑 하나가 strong liar일 확률은 최대 <span class="math-inline" data-tex-b64="MS80"></span>이다. 서로 독립적으로 <span class="math-inline" data-tex-b64="dA=="></span>개의 밑을 시험하면 오류 확률은 최대

<div class="math-display" data-tex-b64="NF57LXR9"></div>

이다. 이는 확률적 판정이지만, 적절한 고정 밑들을 사용하면 제한된 정수 범위에서 결정론적으로 사용할 수도 있다.

## 정리

Fermat’s Little Theorem은 소수가 반드시 만족하는 거듭제곱 합동을 준다. Wilson’s Theorem은 소수를 정확히 특징짓지만 계산 효율이 낮다. Fermat 검사는 pseudoprime과 Carmichael Number에 속을 수 있으며, Miller–Rabin은 1의 제곱근 구조를 검사하여 훨씬 강한 판정을 제공한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="N157MjIyfQ=="></span>를 13으로 나눈 나머지를 구한다.
2. Wilson’s Theorem을 이용해 11이 소수일 때 <span class="math-inline" data-tex-b64="OSE="></span>을 11로 나눈 나머지를 구한다.
3. <span class="math-inline" data-tex-b64="bj0yMjE="></span>, <span class="math-inline" data-tex-b64="YT0y"></span>에 대해 Miller–Rabin 한 단계를 수행하여 합성수임을 확인한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="N157MTJ9XGVxdWl2MVxwbW9kezEzfQ=="></span>이고 <span class="math-inline" data-tex-b64="MjIyXGVxdWl2NlxwbW9kezEyfQ=="></span>이므로

<div class="math-display" data-tex-b64="N157MjIyfVxlcXVpdjdeNlxlcXVpdjEyXHBtb2R7MTN9"></div>

이다.

### 2번

Wilson’s Theorem에서 <span class="math-inline" data-tex-b64="MTAhXGVxdWl2LTFccG1vZHsxMX0="></span>이다. <span class="math-inline" data-tex-b64="MTAhXGVxdWl2MTBcY2RvdDkhXGVxdWl2LTkhXHBtb2R7MTF9"></span>이므로 <span class="math-inline" data-tex-b64="OSFcZXF1aXYxXHBtb2R7MTF9"></span>이다.

### 3번

<span class="math-inline" data-tex-b64="MjIwPTJeMlxjZG90NTU="></span>이므로 <span class="math-inline" data-tex-b64="cz0yLGQ9NTU="></span>이다. 계산하면

<div class="math-display" data-tex-b64="Ml57NTV9XGVxdWl2MTI4XHBtb2R7MjIxfQ=="></div>

이고 이는 <span class="math-inline" data-tex-b64="XHBtMQ=="></span>이 아니다. 한 번 제곱하면

<div class="math-display" data-tex-b64="MTI4XjJcZXF1aXYzMFxwbW9kezIyMX0="></div>

으로 역시 -1이 아니다. 다음 제곱은 1이 되지만 -1을 거치지 않았으므로 1의 비자명한 제곱근이 발견되었다. 따라서 221은 합성수이다.
