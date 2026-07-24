---
title: "4. Sets와 Functions"
description: "집합의 표기와 연산, Partition, Power Set, Cartesian Product를 살펴보고 함수의 Injection, Surjection, Bijection을 정리한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "set", "function", "bijection", "power-set"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 4
featured: false
draft: false
---

집합은 대상을 순서 없이 모은 것이고, 함수는 한 집합의 원소를 다른 집합의 원소에 대응시키는 규칙이다. 이 두 개념은 이산수학의 거의 모든 분야에서 공통 언어로 사용된다.

## 집합과 원소

집합 <span class="math-inline" data-tex-b64="QQ=="></span>에 원소 <span class="math-inline" data-tex-b64="eA=="></span>가 포함되면 <span class="math-inline" data-tex-b64="eFxpbiBB"></span>, 포함되지 않으면 <span class="math-inline" data-tex-b64="eFxub3RpbiBB"></span>라고 쓴다. 집합은 원소를 직접 나열하거나 조건으로 표현할 수 있다.

<div class="math-display" data-tex-b64="QT1cezIsMyw1LDdcfQo9XHt4XGluXG1hdGhiYiBaXG1pZCB4XHRleHR7IGlzIHByaW1lIGFuZCB9eDwxMFx9"></div>

집합의 원소 수를 cardinality라고 하며 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnQ="></span>로 나타낸다. 위 집합에서는 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnQ9NA=="></span>이다.

## Subset과 Proper Subset

<span class="math-inline" data-tex-b64="QQ=="></span>의 모든 원소가 <span class="math-inline" data-tex-b64="Qg=="></span>에도 포함되면 <span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>라고 한다. 모든 집합에 대해

<div class="math-display" data-tex-b64="XHZhcm5vdGhpbmdcc3Vic2V0ZXEgQSxccXF1YWQgQVxzdWJzZXRlcSBB"></div>

가 성립한다.

<span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>이고 <span class="math-inline" data-tex-b64="QVxuZSBC"></span>이면 <span class="math-inline" data-tex-b64="QVxzdWJzZXRuZXEgQg=="></span>이며 이를 proper subset이라고 한다. 두 집합의 동일성은 다음과 같이 양방향 포함으로 확인할 수 있다.

<div class="math-display" data-tex-b64="QT1CXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQgQVxzdWJzZXRlcSBCXHRleHR7IGFuZCB9QlxzdWJzZXRlcSBB"></div>

## 기본 집합 연산

전체집합을 <span class="math-inline" data-tex-b64="VQ=="></span>라고 하자.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CkFcY2FwIEImPVx7eFxpbiBVXG1pZCB4XGluIEFcdGV4dHsgYW5kIH14XGluIEJcfSxcXApBXGN1cCBCJj1ce3hcaW4gVVxtaWQgeFxpbiBBXHRleHR7IG9yIH14XGluIEJcfSxcXApBXHNldG1pbnVzIEImPVx7eFxpbiBVXG1pZCB4XGluIEFcdGV4dHsgYW5kIH14XG5vdGluIEJcfSxcXApBXmMmPVx7eFxpbiBVXG1pZCB4XG5vdGluIEFcfS4KXGVuZHthbGlnbmVkfQ=="></div>

<span class="math-inline" data-tex-b64="QVxjYXAgQj1cdmFybm90aGluZw=="></span>이면 두 집합은 disjoint이다. 유한집합에서는 합집합의 원소 수를

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFcY3VwIEJccnZlcnQ9XGx2ZXJ0IEFccnZlcnQrXGx2ZXJ0IEJccnZlcnQtXGx2ZXJ0IEFcY2FwIEJccnZlcnQ="></div>

로 계산한다.

집합 연산도 논리 연산과 비슷한 법칙을 만족한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CihBXGN1cCBCKV5jJj1BXmNcY2FwIEJeYyxcXAooQVxjYXAgQileYyY9QV5jXGN1cCBCXmMsXFwKQVxjdXAoQlxjYXAgQykmPShBXGN1cCBCKVxjYXAoQVxjdXAgQyksXFwKQVxjYXAoQlxjdXAgQykmPShBXGNhcCBCKVxjdXAoQVxjYXAgQykuClxlbmR7YWxpZ25lZH0="></div>

이는 원소 <span class="math-inline" data-tex-b64="eA=="></span>가 각 집합에 속하는지를 명제로 바꾸면 논리의 De Morgan 법칙과 분배법칙에 대응한다.

## Partition

집합 <span class="math-inline" data-tex-b64="QQ=="></span>의 partition은 공집합이 아닌 부분집합들의 모음 <span class="math-inline" data-tex-b64="XHtBXzEsQV8yLFxsZG90cyxBX25cfQ=="></span>으로 다음을 만족한다.

<div class="math-display" data-tex-b64="QT1BXzFcY3VwIEFfMlxjdXBcY2RvdHNcY3VwIEFfbiwKXHFxdWFkCkFfaVxjYXAgQV9qPVx2YXJub3RoaW5nXHF1YWQoaVxuZSBqKQ=="></div>

즉 모든 원소는 정확히 하나의 block에 속한다. 정수를 짝수와 홀수로 나누는 것은 <span class="math-inline" data-tex-b64="XG1hdGhiYiBa"></span>의 partition이다.

## Power Set

<span class="math-inline" data-tex-b64="QQ=="></span>의 모든 부분집합을 모은 집합을 Power Set이라고 한다.

<div class="math-display" data-tex-b64="XG1hdGhjYWwgUChBKT1ce1NcbWlkIFNcc3Vic2V0ZXEgQVx9"></div>

<span class="math-inline" data-tex-b64="QT1cezEsMlx9"></span>이면

<div class="math-display" data-tex-b64="XG1hdGhjYWwgUChBKT1ce1x2YXJub3RoaW5nLFx7MVx9LFx7Mlx9LFx7MSwyXH1cfQ=="></div>

이다. 유한집합 <span class="math-inline" data-tex-b64="QQ=="></span>의 원소가 <span class="math-inline" data-tex-b64="bg=="></span>개이면 각 원소를 부분집합에 넣거나 넣지 않는 두 선택이 있으므로

<div class="math-display" data-tex-b64="XGx2ZXJ0XG1hdGhjYWwgUChBKVxydmVydD0yXm4="></div>

이다.

## Cartesian Product

두 집합의 Cartesian Product는 ordered pair들의 집합이다.

<div class="math-display" data-tex-b64="QVx0aW1lcyBCPVx7KGEsYilcbWlkIGFcaW4gQSxcIGJcaW4gQlx9"></div>

순서쌍이므로 일반적으로 <span class="math-inline" data-tex-b64="KGEsYilcbmUoYixhKQ=="></span>이다. 유한집합에서는

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFcdGltZXMgQlxydmVydD1cbHZlcnQgQVxydmVydFxsdmVydCBCXHJ2ZXJ0"></div>

이다.

## Function

함수 <span class="math-inline" data-tex-b64="ZjpBXHRvIEI="></span>는 Domain <span class="math-inline" data-tex-b64="QQ=="></span>의 각 원소에 Codomain <span class="math-inline" data-tex-b64="Qg=="></span>의 원소를 정확히 하나 대응시킨다. <span class="math-inline" data-tex-b64="YQ=="></span>에 대응하는 값을 <span class="math-inline" data-tex-b64="ZihhKQ=="></span>라고 하고, 실제로 출력되는 값들의 집합을 Range라고 한다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5nZX0oZik9XHtmKGEpXG1pZCBhXGluIEFcfVxzdWJzZXRlcSBC"></div>

Codomain과 Range는 다를 수 있다. 함수의 성질을 판단할 때는 식뿐 아니라 Domain과 Codomain도 함께 보아야 한다.

## Injection, Surjection, Bijection

함수 <span class="math-inline" data-tex-b64="ZjpBXHRvIEI="></span>가 injection이면 서로 다른 입력이 같은 출력을 만들지 않는다.

<div class="math-display" data-tex-b64="ZihhKT1mKGEnKVxMb25ncmlnaHRhcnJvdyBhPWEn"></div>

유한집합에서는 injection이 존재하면 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnRcbGVcbHZlcnQgQlxydmVydA=="></span>이다.

Surjection은 Codomain의 모든 원소가 실제로 출력되는 함수이다.

<div class="math-display" data-tex-b64="XGZvcmFsbCBiXGluIEJcIFxleGlzdHMgYVxpbiBBLFwgZihhKT1i"></div>

유한집합에서는 surjection이 존재하면 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnRcZ2VcbHZlcnQgQlxydmVydA=="></span>이다.

Injection이면서 Surjection인 함수를 Bijection이라고 한다. Bijection은 두 집합의 원소를 빠짐없이 일대일로 짝지으므로 집합의 크기가 같다는 의미를 갖는다.

## Inverse와 Composition

Bijection <span class="math-inline" data-tex-b64="ZjpBXHRvIEI="></span>에는 inverse function <span class="math-inline" data-tex-b64="Zl57LTF9OkJcdG8gQQ=="></span>가 존재한다.

<div class="math-display" data-tex-b64="Zl57LTF9KGYoYSkpPWEsXHFxdWFkIGYoZl57LTF9KGIpKT1i"></div>

함수 <span class="math-inline" data-tex-b64="ZjpYXHRvIFk="></span>와 <span class="math-inline" data-tex-b64="ZzpZXHRvIFo="></span>의 composition은

<div class="math-display" data-tex-b64="KGdcY2lyYyBmKSh4KT1nKGYoeCkp"></div>

이다. 실제로는 <span class="math-inline" data-tex-b64="Zg=="></span>의 Range가 <span class="math-inline" data-tex-b64="Zw=="></span>의 Domain 안에 들어가면 composition을 정의할 수 있다.

## 정리

집합은 포함 관계와 합집합·교집합 등의 연산으로 구조를 만들고, 함수는 집합 사이의 대응을 표현한다. Injection은 출력의 중복이 없고, Surjection은 Codomain에 빠진 값이 없으며, Bijection은 두 조건을 모두 만족한다. Bijection은 다음 글에서 무한집합의 크기를 비교하는 핵심 도구가 된다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="QT1cezEsMiwzXH0="></span>의 Power Set을 구한다.
2. <span class="math-inline" data-tex-b64="ZjpcbWF0aGJiIFpcdG9cbWF0aGJiIFo="></span>, <span class="math-inline" data-tex-b64="ZihuKT0ybg=="></span>이 injection과 surjection 중 무엇인지 판단한다.
3. <span class="math-inline" data-tex-b64="Zih4KT0yeC0x"></span>을 <span class="math-inline" data-tex-b64="KDAsMSk="></span>에서 <span class="math-inline" data-tex-b64="KC0xLDEp"></span>로 가는 함수로 볼 때 inverse를 구한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="XG1hdGhjYWwgUChBKT1ce1x2YXJub3RoaW5nLFx7MVx9LFx7Mlx9LFx7M1x9LApcezEsMlx9LFx7MSwzXH0sXHsyLDNcfSxcezEsMiwzXH1cfQ=="></div>

이며 원소 수는 <span class="math-inline" data-tex-b64="Ml4zPTg="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="ZihhKT1mKGIp"></span>이면 <span class="math-inline" data-tex-b64="MmE9MmI="></span>이므로 <span class="math-inline" data-tex-b64="YT1i"></span>이다. 따라서 injection이다. 그러나 홀수는 출력되지 않으므로 <span class="math-inline" data-tex-b64="XG1hdGhiYiBa"></span> 전체로의 surjection은 아니다.

### 3번

<span class="math-inline" data-tex-b64="eT0yeC0x"></span>을 <span class="math-inline" data-tex-b64="eA=="></span>에 대해 풀면

<div class="math-display" data-tex-b64="eD1cZnJhY3t5KzF9ezJ9"></div>

이다. 따라서

<div class="math-display" data-tex-b64="Zl57LTF9KHkpPVxmcmFje3krMX17Mn0sXHFxdWFkIC0xPHk8MQ=="></div>

이다.
