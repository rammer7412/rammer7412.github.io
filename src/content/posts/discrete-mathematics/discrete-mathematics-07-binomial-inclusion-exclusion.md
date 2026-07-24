---
title: "7. Binomial Theorem과 Inclusion–Exclusion"
description: "이항정리와 Pascal 항등식을 조합론적으로 이해하고 Inclusion–Exclusion를 Derangement 문제에 적용한다."
date: "2026-01-13"
category: "이산수학"
tags: ["discrete-mathematics", "binomial-theorem", "pascal-identity", "inclusion-exclusion", "derangement"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 7
featured: false
draft: false
---

Binomial Coefficient는 단순한 공식이 아니라 부분집합을 세는 수이다. 이 관점을 사용하면 이항정리와 Pascal 항등식을 자연스럽게 설명할 수 있고, 겹치는 경우를 보정하는 Inclusion–Exclusion Principle로 확장할 수 있다.

## Binomial Theorem

<div class="math-display" data-tex-b64="KGErYilebj1cc3VtX3trPTB9XntufVxiaW5vbSBuayBhXmsgYl57bi1rfQ=="></div>

전개식에서 <span class="math-inline" data-tex-b64="YV5rIGJee24ta30="></span>를 만들려면 <span class="math-inline" data-tex-b64="bg=="></span>개의 괄호 중 <span class="math-inline" data-tex-b64="aw=="></span>개에서 <span class="math-inline" data-tex-b64="YQ=="></span>를 선택하고 나머지에서 <span class="math-inline" data-tex-b64="Yg=="></span>를 선택해야 한다. 그 방법 수가 <span class="math-inline" data-tex-b64="XGJpbm9tIG5r"></span>이므로 이항계수가 계수로 나타난다.

특히 <span class="math-inline" data-tex-b64="YT0x"></span>, <span class="math-inline" data-tex-b64="Yj14"></span>를 대입하면

<div class="math-display" data-tex-b64="KDEreClebj1cc3VtX3trPTB9XntufVxiaW5vbSBuayB4Xms="></div>

이고 <span class="math-inline" data-tex-b64="eD0x"></span>을 다시 대입하면

<div class="math-display" data-tex-b64="Ml5uPVxzdW1fe2s9MH1ee259XGJpbm9tIG5r"></div>

을 얻는다. 오른쪽은 <span class="math-inline" data-tex-b64="bg=="></span>원소 집합의 부분집합을 크기별로 나누어 센 결과이다.

## Pascal’s Triangle과 Identity

Pascal’s Identity는

<div class="math-display" data-tex-b64="XGJpbm9te24rMX17a309XGJpbm9tIG57ay0xfStcYmlub20gbms="></div>

이다. 대수적으로 factorial 식을 통분해 증명할 수 있지만, 조합론적 증명이 의미를 더 잘 보여준다.

<span class="math-inline" data-tex-b64="bisx"></span>개 원소 중 <span class="math-inline" data-tex-b64="aw=="></span>개를 고를 때 특정 원소 <span class="math-inline" data-tex-b64="YQ=="></span>를 고르는지에 따라 두 경우로 나눈다.

- <span class="math-inline" data-tex-b64="YQ=="></span>를 포함하면 나머지 <span class="math-inline" data-tex-b64="bg=="></span>개 중 <span class="math-inline" data-tex-b64="ay0x"></span>개를 선택한다.
- <span class="math-inline" data-tex-b64="YQ=="></span>를 포함하지 않으면 나머지 <span class="math-inline" data-tex-b64="bg=="></span>개 중 <span class="math-inline" data-tex-b64="aw=="></span>개를 선택한다.

두 경우는 서로 겹치지 않고 전체를 덮으므로 Pascal’s Identity가 성립한다.

## Inclusion–Exclusion Principle

두 집합에서는

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFcY3VwIEJccnZlcnQ9XGx2ZXJ0IEFccnZlcnQrXGx2ZXJ0IEJccnZlcnQtXGx2ZXJ0IEFcY2FwIEJccnZlcnQ="></div>

이다. 세 집합에서는 한 원소가 세 번 더해지고 pairwise intersection에서 세 번 빠지므로 triple intersection을 다시 한 번 더한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxsdmVydCBBXGN1cCBCXGN1cCBDXHJ2ZXJ0Cj17fSZcbHZlcnQgQVxydmVydCtcbHZlcnQgQlxydmVydCtcbHZlcnQgQ1xydmVydFxcCiYtXGx2ZXJ0IEFcY2FwIEJccnZlcnQtXGx2ZXJ0IEFcY2FwIENccnZlcnQtXGx2ZXJ0IEJcY2FwIENccnZlcnRcXAomK1xsdmVydCBBXGNhcCBCXGNhcCBDXHJ2ZXJ0LgpcZW5ke2FsaWduZWR9"></div>

일반적으로

<div class="math-display" data-tex-b64="XGxlZnRcbHZlcnRcYmlnY3VwX3tpPTF9XntufUFfaVxyaWdodFxydmVydAo9XHN1bV97XHZhcm5vdGhpbmdcbmUgU1xzdWJzZXRlcVx7MSxcbGRvdHMsblx9fQooLTEpXntcbHZlcnQgU1xydmVydCsxfQpcbGVmdFxsdmVydFxiaWdjYXBfe2lcaW4gU31BX2lccmlnaHRccnZlcnQ="></div>

이다. 교집합에 포함되는 집합 수가 홀수이면 더하고 짝수이면 뺀다.

## Derangement

<span class="math-inline" data-tex-b64="bg=="></span>명이 자신의 선물을 하나씩 가져와 무작위로 다시 나눠 갖는다고 하자. 아무도 자기 선물을 받지 않는 순열을 Derangement라고 한다.

전체 순열 집합에서 <span class="math-inline" data-tex-b64="QV9p"></span>를 <span class="math-inline" data-tex-b64="aQ=="></span>번째 사람이 자기 선물을 받는 사건으로 두면, 적어도 한 명이 자기 선물을 받는 순열은 <span class="math-inline" data-tex-b64="QV8xXGN1cFxjZG90c1xjdXAgQV9u"></span>이다.

특정 <span class="math-inline" data-tex-b64="aw=="></span>명의 위치를 고정한 순열 수는 <span class="math-inline" data-tex-b64="KG4taykh"></span>이고, 고정할 사람을 고르는 방법은 <span class="math-inline" data-tex-b64="XGJpbm9tIG5r"></span>이다. 따라서 Derangement의 수 <span class="math-inline" data-tex-b64="RF9u"></span>은

<div class="math-display" data-tex-b64="RF9uCj1uIS1cYmlub20gbjEobi0xKSErXGJpbm9tIG4yKG4tMikhLVxjZG90cysoLTEpXm5cYmlub20gbm4wIQ=="></div>

이다. 정리하면

<div class="math-display" data-tex-b64="RF9uPW4hXHN1bV97az0wfV57bn1cZnJhY3soLTEpXmt9e2shfQ=="></div>

이고

<div class="math-display" data-tex-b64="XGZyYWN7RF9ufXtuIX1cbG9uZ3JpZ2h0YXJyb3cgZV57LTF9"></div>

이다. 즉 사람이 많아질수록 아무도 자기 선물을 받지 않을 확률은 약 <span class="math-inline" data-tex-b64="MS9l"></span>에 가까워진다.

## Bijection Rule

두 집합 사이의 Bijection을 만들면 한쪽의 경우의 수를 다른 문제로 옮길 수 있다. <span class="math-inline" data-tex-b64="bg=="></span>원소 집합의 부분집합은 길이 <span class="math-inline" data-tex-b64="bg=="></span>의 Binary String과 Bijection을 이룬다. 각 자리에서 원소를 포함하면 1, 포함하지 않으면 0으로 표시한다.

<div class="math-display" data-tex-b64="XG1hdGhjYWwgUChTKVxsb25nbGVmdHJpZ2h0YXJyb3dcezAsMVx9Xm4="></div>

따라서 Power Set의 원소 수가 <span class="math-inline" data-tex-b64="Ml5u"></span>임을 다시 얻는다. 이항계수 <span class="math-inline" data-tex-b64="XGJpbm9tIG5r"></span>는 정확히 1이 <span class="math-inline" data-tex-b64="aw=="></span>개인 Binary String의 수이기도 하다.

## 중복 제거의 기준

Counting 문제에서 다음 질문을 반복하면 Inclusion–Exclusion가 필요한지 판단하기 쉽다.

1. 내가 나눈 경우들이 서로 겹치는가?
2. 한 결과가 몇 번 세어졌는가?
3. 교집합을 빼면 더 높은 차수의 교집합을 지나치게 뺀 것은 아닌가?

단순히 “또는”이 보인다고 항상 더할 수 있는 것은 아니다. 사건들이 disjoint일 때만 바로 Sum Rule을 적용한다.

## 정리

이항정리는 각 항을 만드는 선택을 Binomial Coefficient로 센 결과이다. Pascal’s Identity는 특정 원소의 포함 여부로 경우를 분할하면 증명된다. Inclusion–Exclusion는 여러 조건이 겹칠 때 중복 계수를 교대로 보정하며, Derangement는 그 대표적인 응용이다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="XHN1bV97az0wfV57bn1rXGJpbm9tIG5rPW4yXntuLTF9"></span>을 조합론적으로 설명한다.
2. 1부터 100까지의 정수 중 2 또는 3의 배수의 개수를 구한다.
3. <span class="math-inline" data-tex-b64="RF80"></span>를 Inclusion–Exclusion로 계산한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="bg=="></span>명 중 위원회를 만들고 그중 한 명을 대표로 지정한다고 하자. 위원회 크기가 <span class="math-inline" data-tex-b64="aw=="></span>일 때 왼쪽은 위원회 <span class="math-inline" data-tex-b64="XGJpbm9tIG5r"></span>가지와 대표 <span class="math-inline" data-tex-b64="aw=="></span>가지를 곱해 센다.

다른 방법으로 먼저 대표를 <span class="math-inline" data-tex-b64="bg=="></span>가지로 고른 뒤, 나머지 <span class="math-inline" data-tex-b64="bi0x"></span>명은 위원회에 들어오거나 들어오지 않는 두 선택이 있으므로 <span class="math-inline" data-tex-b64="Ml57bi0xfQ=="></span>가지이다. 두 방식이 같은 대상을 세므로 등식이 성립한다.

### 2번

2의 배수는 50개, 3의 배수는 33개, 둘 다인 6의 배수는 16개이다. 따라서

<div class="math-display" data-tex-b64="NTArMzMtMTY9Njc="></div>

개이다.

### 3번

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CkRfNAomPTQhLVxiaW5vbTQxIDMhK1xiaW5vbTQyIDIhLVxiaW5vbTQzIDEhK1xiaW5vbTQ0IDAhXFwKJj0yNC0yNCsxMi00KzFcXAomPTkuClxlbmR7YWxpZ25lZH0="></div>
