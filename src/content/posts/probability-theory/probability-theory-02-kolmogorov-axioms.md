---
title: "2. Kolmogorov 공리"
description: "확률측도를 정의하는 세 가지 Kolmogorov 공리와 그로부터 유도되는 기본 성질을 정리한다."
date: "2025-04-29"
category: "확률 이론"
tags: ["probability-theory", "kolmogorov-axioms", "probability-measure", "proof"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 2
featured: false
draft: false
---
확률은 직관적인 의미를 가지지만, 계산 규칙을 일관되게 사용하려면 출발점이 필요하다. Kolmogorov 공리는 확률측도 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfQ=="></span>가 반드시 만족해야 하는 최소 조건이다. 나머지 확률 공식 대부분은 이 세 공리에서 유도된다.

## 세 가지 공리

표본공간을 <span class="math-inline" data-tex-b64="XE9tZWdh"></span>, 사건족을 <span class="math-inline" data-tex-b64="XG1hdGhjYWx7Rn0="></span>라고 하자. 확률측도는 다음과 같은 함수이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfTpcbWF0aGNhbHtGfVx0b1swLDFd"></div>

### 1. 음이 아닌 값

모든 사건 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해 확률은 음수가 아니다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBKVxnZSAw"></div>

### 2. 전체 확률은 1

가능한 모든 결과를 포함하는 표본공간의 확률은 1이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShcT21lZ2EpPTE="></div>

### 3. 가산가법성

서로 겹치지 않는 사건 <span class="math-inline" data-tex-b64="QV8xLEFfMixcbGRvdHM="></span>에 대해, 합집합의 확률은 각 확률의 합과 같다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfVwhXGxlZnQoXGJpZ2N1cF97aT0xfV57XGluZnR5fUFfaVxyaWdodCkKPQpcc3VtX3tpPTF9XntcaW5mdHl9XG1hdGhiYntQfShBX2kp"></div>

여기서 사건들이 서로 겹치지 않는다는 조건은

<div class="math-display" data-tex-b64="QV9pXGNhcCBBX2o9XHZhcm5vdGhpbmcKXHFxdWFkKGlcbmUgaik="></div>

를 뜻한다. 이 조건이 없으면 같은 결과가 여러 번 계산될 수 있다.

## 공집합의 확률

<span class="math-inline" data-tex-b64="XE9tZWdh"></span>와 <span class="math-inline" data-tex-b64="XHZhcm5vdGhpbmc="></span>은 서로 겹치지 않고, 둘의 합집합은 다시 <span class="math-inline" data-tex-b64="XE9tZWdh"></span>이다.

<div class="math-display" data-tex-b64="XE9tZWdhXGN1cFx2YXJub3RoaW5nPVxPbWVnYQ=="></div>

가산가법성을 적용하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShcT21lZ2EpCj0KXG1hdGhiYntQfShcT21lZ2EpK1xtYXRoYmJ7UH0oXHZhcm5vdGhpbmcp"></div>

이므로

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShcdmFybm90aGluZyk9MA=="></div>

을 얻는다.

## 여사건 공식

사건 <span class="math-inline" data-tex-b64="QQ=="></span>와 여사건 <span class="math-inline" data-tex-b64="QV5j"></span>는 서로 겹치지 않고 합치면 표본공간 전체가 된다.

<div class="math-display" data-tex-b64="QVxjdXAgQV5jPVxPbWVnYSwKXHFxdWFkCkFcY2FwIEFeYz1cdmFybm90aGluZw=="></div>

따라서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXmMpPTEtXG1hdGhiYntQfShBKQ=="></div>

이다.

## 단조성

<span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>라면 <span class="math-inline" data-tex-b64="Qg=="></span>는 다음과 같이 겹치지 않는 두 부분으로 나뉜다.

<div class="math-display" data-tex-b64="Qj1BXGN1cChCXHNldG1pbnVzIEEp"></div>

그러므로

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShCKQo9ClxtYXRoYmJ7UH0oQSkrXG1hdGhiYntQfShCXHNldG1pbnVzIEEpClxnZSBcbWF0aGJie1B9KEEp"></div>

이다. 즉, 더 큰 사건의 확률은 더 작은 사건의 확률보다 작을 수 없다.

## 차집합과 합집합

<span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>인 경우에는

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShCXHNldG1pbnVzIEEpCj0KXG1hdGhiYntQfShCKS1cbWF0aGJie1B9KEEp"></div>

이다. 일반적인 두 사건에 대해서는 포함배제 원리를 사용한다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKQo9ClxtYXRoYmJ7UH0oQSkrXG1hdGhiYntQfShCKS1cbWF0aGJie1B9KEFcY2FwIEIp"></div>

교집합의 확률은 음이 아니므로 다음 상계도 얻는다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKQpcbGUKXG1hdGhiYntQfShBKStcbWF0aGJie1B9KEIp"></div>

이를 union bound 또는 Boole 부등식이라고 한다. 많은 사건에 대해서도 같은 방식으로 확장된다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfVwhXGxlZnQoXGJpZ2N1cF97aT0xfV57bn1BX2lccmlnaHQpClxsZQpcc3VtX3tpPTF9XntufVxtYXRoYmJ7UH0oQV9pKQ=="></div>

## 정리

Kolmogorov 공리는 음이 아닌 값, 전체 확률 1, 가산가법성의 세 조건이다. 공집합의 확률, 여사건 공식, 단조성, 포함배제 원리와 union bound는 별도의 가정이 아니라 이 공리에서 유도되는 결과이다.

## 연습 문제

1. Kolmogorov 공리만 이용해 포함배제 원리를 증명한다.
2. <span class="math-inline" data-tex-b64="QV8xLFxsZG90cyxBX24="></span>에 대한 union bound를 수학적 귀납법으로 증명한다.
3. <span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>일 때 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShCXHNldG1pbnVzIEEpPVxtYXRoYmJ7UH0oQiktXG1hdGhiYntQfShBKQ=="></span>임을 보인다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="QVxjdXAgQg=="></span>를 서로 겹치지 않는 두 사건으로 나누면

<div class="math-display" data-tex-b64="QVxjdXAgQj1BXCxcZG90XGN1cFwsKEJcc2V0bWludXMgQSk="></div>

이다. 가산가법성에 의해

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKT1cbWF0aGJie1B9KEEpK1xtYXRoYmJ7UH0oQlxzZXRtaW51cyBBKQ=="></div>

이다. 한편

<div class="math-display" data-tex-b64="Qj0oQVxjYXAgQilcLFxkb3RcY3VwXCwoQlxzZXRtaW51cyBBKQ=="></div>

이므로

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShCXHNldG1pbnVzIEEpPVxtYXRoYmJ7UH0oQiktXG1hdGhiYntQfShBXGNhcCBCKQ=="></div>

이다. 이를 대입하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKT1cbWF0aGJie1B9KEEpK1xtYXRoYmJ7UH0oQiktXG1hdGhiYntQfShBXGNhcCBCKQ=="></div>

를 얻는다.

### 2번

<span class="math-inline" data-tex-b64="bj0y"></span>일 때 포함배제 원리에서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXzFcY3VwIEFfMilcbGUgXG1hdGhiYntQfShBXzEpK1xtYXRoYmJ7UH0oQV8yKQ=="></div>

이므로 성립한다. <span class="math-inline" data-tex-b64="bj1r"></span>에서 성립한다고 가정하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH1cIVxsZWZ0KFxiaWdjdXBfe2k9MX1ee2srMX1BX2lccmlnaHQpCiY9XG1hdGhiYntQfVwhXGxlZnQoXGxlZnQoXGJpZ2N1cF97aT0xfV57a31BX2lccmlnaHQpXGN1cCBBX3trKzF9XHJpZ2h0KVxcCiZcbGUgXG1hdGhiYntQfVwhXGxlZnQoXGJpZ2N1cF97aT0xfV57a31BX2lccmlnaHQpK1xtYXRoYmJ7UH0oQV97aysxfSlcXAomXGxlIFxzdW1fe2k9MX1ee2srMX1cbWF0aGJie1B9KEFfaSkuClxlbmR7YWxpZ25lZH0="></div>

따라서 수학적 귀납법에 의해 모든 자연수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 union bound가 성립한다.

### 3번

<span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>이면

<div class="math-display" data-tex-b64="Qj1BXCxcZG90XGN1cFwsKEJcc2V0bWludXMgQSk="></div>

이다. 두 사건은 서로 겹치지 않으므로

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShCKT1cbWF0aGJie1B9KEEpK1xtYXRoYmJ7UH0oQlxzZXRtaW51cyBBKQ=="></div>

이고, 정리하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShCXHNldG1pbnVzIEEpPVxtYXRoYmJ7UH0oQiktXG1hdGhiYntQfShBKQ=="></div>

이다.
