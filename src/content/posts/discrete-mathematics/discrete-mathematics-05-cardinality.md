---
title: "5. Cardinality, Countability, and Diagonal Arguments"
description: "Bijection으로 무한집합의 크기를 비교하고 Countable Set, Cantor의 대각선 논법과 Power Set 정리를 살펴본다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "cardinality", "countable", "uncountable", "cantor"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 5
featured: false
draft: false
---

유한집합의 크기는 원소를 세면 알 수 있다. 무한집합에서는 단순히 “둘 다 무한하다”만으로 크기가 같다고 할 수 없다. 두 집합 사이의 Bijection이 존재하는지를 기준으로 비교하면 서로 다른 크기의 무한을 구분할 수 있다.

## Cardinality와 Bijection

집합 <span class="math-inline" data-tex-b64="QSxC"></span> 사이에 Bijection이 존재하면 두 집합의 cardinality가 같다고 하고

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFccnZlcnQ9XGx2ZXJ0IEJccnZlcnQ="></div>

라고 쓴다. Injection <span class="math-inline" data-tex-b64="QVx0byBC"></span>가 있으면 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnRcbGVcbHZlcnQgQlxydmVydA=="></span>, Surjection이 있으면 <span class="math-inline" data-tex-b64="XGx2ZXJ0IEFccnZlcnRcZ2VcbHZlcnQgQlxydmVydA=="></span>라는 비교를 할 수 있다.

무한집합에서는 proper subset과 원래 집합의 크기가 같을 수 있다. 예를 들어

<div class="math-display" data-tex-b64="ZjpcbWF0aGJiIE5cdG8yXG1hdGhiYiBOLFxxcXVhZCBmKG4pPTJu"></div>

은 자연수와 양의 짝수 사이의 Bijection이다.

## Countably Infinite Set

자연수와 Bijection을 만들 수 있는 무한집합을 countably infinite라고 한다. 유한집합과 countably infinite set을 함께 countable set이라고 부른다. Countably infinite set의 cardinality는 <span class="math-inline" data-tex-b64="XGFsZXBoXzA="></span>로 나타낸다.

### 정수의 가산성

자연수를 다음 순서로 정수에 대응시킬 수 있다.

<div class="math-display" data-tex-b64="MCwxLC0xLDIsLTIsMywtMyxcbGRvdHM="></div>

한 가지 명시적인 함수는

<div class="math-display" data-tex-b64="ZihuKT0KXGJlZ2lue2Nhc2VzfQowLCZuPTEsXFwKbi8yLCZuXHRleHR7IGlzIGV2ZW59LFxcCi0obi0xKS8yLCZuPjFcdGV4dHsgaXMgb2RkfQpcZW5ke2Nhc2VzfQ=="></div>

이다. 모든 정수가 정확히 한 번 나타나므로 <span class="math-inline" data-tex-b64="XGx2ZXJ0XG1hdGhiYiBOXHJ2ZXJ0PVxsdmVydFxtYXRoYmIgWlxydmVydA=="></span>이다.

### 유리수의 가산성

양의 유리수 <span class="math-inline" data-tex-b64="cC9x"></span>를 격자의 좌표 <span class="math-inline" data-tex-b64="KHAscSk="></span>에 놓고 대각선 방향으로 순회하면 순서대로 나열할 수 있다. 기약분수가 아닌 중복 표현은 건너뛴다. 따라서 양의 유리수, 그리고 부호와 0을 추가한 전체 유리수도 countable이다.

중요한 점은 유리수가 수직선에 조밀하다는 사실과 countable이라는 사실이 모순되지 않는다는 것이다. 두 유리수 사이에 다른 유리수가 무한히 많아도 전체를 자연수 순서로 나열할 수 있다.

## Countable Set의 합집합

두 countable set의 합집합은 countable이다. 무한한 두 수열

<div class="math-display" data-tex-b64="QT1ce2FfMSxhXzIsXGxkb3RzXH0sXHFxdWFkIEI9XHtiXzEsYl8yLFxsZG90c1x9"></div>

을

<div class="math-display" data-tex-b64="YV8xLGJfMSxhXzIsYl8yLFxsZG90cw=="></div>

처럼 번갈아 나열할 수 있다. 중복 원소는 처음 한 번만 남기면 된다. 더 일반적으로 countable한 개수의 countable set의 합집합도 격자 대각선 순회로 countable임을 보일 수 있다.

## Hilbert’s Hotel

방이 자연수로 번호 매겨진 무한 호텔이 모두 찼다고 하자. 새 손님 한 명이 오면 기존 <span class="math-inline" data-tex-b64="bg=="></span>번 손님을 <span class="math-inline" data-tex-b64="bisx"></span>번 방으로 옮겨 1번 방을 비울 수 있다.

손님이 countably infinite하게 새로 오면 기존 손님을 <span class="math-inline" data-tex-b64="Mm4="></span>번 방으로 옮기고 새 손님들을 홀수 번호 방에 넣을 수 있다. 이는 무한집합에서는 전체와 proper subset이 같은 크기를 가질 수 있음을 보여준다.

## Schröder–Bernstein Theorem

<span class="math-inline" data-tex-b64="QQ=="></span>에서 <span class="math-inline" data-tex-b64="Qg=="></span>로의 Injection과 <span class="math-inline" data-tex-b64="Qg=="></span>에서 <span class="math-inline" data-tex-b64="QQ=="></span>로의 Injection이 모두 존재하면 두 집합 사이에 Bijection이 존재한다.

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFccnZlcnRcbGVcbHZlcnQgQlxydmVydFx0ZXh0eyBhbmQgfVxsdmVydCBCXHJ2ZXJ0XGxlXGx2ZXJ0IEFccnZlcnQKXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZApcbHZlcnQgQVxydmVydD1cbHZlcnQgQlxydmVydA=="></div>

직접 Bijection을 만들기 어려울 때 두 방향의 Injection을 각각 만드는 것이 더 쉬울 수 있다.

## 실수의 비가산성

<span class="math-inline" data-tex-b64="WzAsMSk="></span>의 모든 실수를 나열할 수 있다고 가정한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CnhfMSY9MC5hX3sxMX1hX3sxMn1hX3sxM31cbGRvdHNcXAp4XzImPTAuYV97MjF9YV97MjJ9YV97MjN9XGxkb3RzXFwKeF8zJj0wLmFfezMxfWFfezMyfWFfezMzfVxsZG90c1xcCiZcIFx2ZG90cwpcZW5ke2FsaWduZWR9"></div>

대각선 자리 <span class="math-inline" data-tex-b64="YV97MTF9LGFfezIyfSxhX3szM30sXGxkb3Rz"></span>와 모두 다른 숫자를 골라

<div class="math-display" data-tex-b64="eT0wLmJfMWJfMmJfM1xsZG90cyxccXF1YWQgYl9pXG5lIGFfe2lpfQ=="></div>

를 만든다. 소수 표현의 중복을 피하기 위해 예를 들어 <span class="math-inline" data-tex-b64="YV97aWl9PTE="></span>이면 <span class="math-inline" data-tex-b64="Yl9pPTI="></span>, 그렇지 않으면 <span class="math-inline" data-tex-b64="Yl9pPTE="></span>로 정한다.

그러면 <span class="math-inline" data-tex-b64="eQ=="></span>는 <span class="math-inline" data-tex-b64="aQ=="></span>번째 자리에서 <span class="math-inline" data-tex-b64="eF9p"></span>와 다르므로 목록의 어떤 실수와도 같지 않다. 그러나 <span class="math-inline" data-tex-b64="eVxpblswLDEp"></span>이므로 모든 실수를 나열했다는 가정과 모순이다. 따라서 실수 집합은 uncountable이다.

## Cantor’s Theorem

어떤 집합 <span class="math-inline" data-tex-b64="Uw=="></span>에 대해서도 <span class="math-inline" data-tex-b64="Uw=="></span>에서 <span class="math-inline" data-tex-b64="XG1hdGhjYWwgUChTKQ=="></span>로 가는 Surjection은 존재하지 않는다. 따라서

<div class="math-display" data-tex-b64="XGx2ZXJ0IFNccnZlcnQ8XGx2ZXJ0XG1hdGhjYWwgUChTKVxydmVydA=="></div>

이다.

함수 <span class="math-inline" data-tex-b64="ZjpTXHRvXG1hdGhjYWwgUChTKQ=="></span>가 Surjection이라고 가정하고 다음 집합을 만든다.

<div class="math-display" data-tex-b64="RD1ce3hcaW4gU1xtaWQgeFxub3RpbiBmKHgpXH0="></div>

<span class="math-inline" data-tex-b64="RFxpblxtYXRoY2FsIFAoUyk="></span>이므로 Surjection이라면 어떤 <span class="math-inline" data-tex-b64="YVxpbiBT"></span>가 있어 <span class="math-inline" data-tex-b64="ZihhKT1E"></span>여야 한다. 그런데

<div class="math-display" data-tex-b64="YVxpbiBEXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQgYVxub3RpbiBmKGEpPUQ="></div>

가 되어 모순이다. 이 diagonal set은 각 <span class="math-inline" data-tex-b64="Zih4KQ=="></span>와 적어도 원소 <span class="math-inline" data-tex-b64="eA=="></span>의 포함 여부에서 다르다.

## Russell’s Paradox와 범위의 주의

“자기 자신을 원소로 갖지 않는 모든 집합의 집합”을 생각하면 그 집합이 자기 자신을 포함하는지 여부에서 모순이 생긴다. 이는 아무 조건이나 사용해 전체 집합을 만들 수 있다고 가정하면 문제가 생긴다는 사실을 보여준다.

현대 집합론에서는 미리 주어진 집합 안에서 조건을 만족하는 원소만 골라 부분집합을 만드는 방식 등 엄격한 공리를 사용한다. Cantor’s Theorem의 <span class="math-inline" data-tex-b64="RA=="></span>는 이미 주어진 <span class="math-inline" data-tex-b64="Uw=="></span>의 부분집합으로 정의되므로 같은 문제가 발생하지 않는다.

Diagonal Argument는 계산이론의 Halting Problem에도 나타나지만, 그 상세한 계산 모델과 결정불가능성은 계산이론 시리즈에서 다룬다.

## 정리

무한집합의 크기는 Bijection으로 비교한다. 자연수, 정수, 유리수는 countable하지만 실수는 diagonal argument에 의해 uncountable이다. Cantor’s Theorem은 어떤 집합보다 그 Power Set이 항상 더 크다는 사실을 보여주며, 하나의 가장 큰 무한 cardinality는 존재하지 않는다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="KDAsMSk="></span>과 <span class="math-inline" data-tex-b64="KC0xLDEp"></span> 사이의 Bijection을 하나 제시한다.
2. 정수의 유한한 Cartesian Product <span class="math-inline" data-tex-b64="XG1hdGhiYiBaXjI="></span>가 countable임을 설명한다.
3. Cantor’s Theorem에서 정의한 <span class="math-inline" data-tex-b64="RA=="></span>가 모든 <span class="math-inline" data-tex-b64="ZihhKQ=="></span>와 다름을 직접 보인다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="Zih4KT0yeC0x"></div>

은 <span class="math-inline" data-tex-b64="KDAsMSk="></span>에서 <span class="math-inline" data-tex-b64="KC0xLDEp"></span>로 가는 Bijection이다. Inverse는 <span class="math-inline" data-tex-b64="Zl57LTF9KHkpPSh5KzEpLzI="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="XG1hdGhiYiBa"></span>가 countable이므로 각 정수를 자연수 인덱스로 바꿀 수 있다. 그러면 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaXjI="></span>의 원소는 자연수 쌍과 대응한다. 자연수 격자를 대각선 순서로 순회하면 모든 쌍을 나열할 수 있으므로 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaXjI="></span>도 countable이다.

### 3번

임의의 <span class="math-inline" data-tex-b64="YVxpbiBT"></span>를 고정한다. <span class="math-inline" data-tex-b64="YVxpbiBE"></span>이면 정의상 <span class="math-inline" data-tex-b64="YVxub3RpbiBmKGEp"></span>이므로 <span class="math-inline" data-tex-b64="RFxuZSBmKGEp"></span>이다. 반대로 <span class="math-inline" data-tex-b64="YVxub3RpbiBE"></span>이면 <span class="math-inline" data-tex-b64="YVxpbiBmKGEp"></span>이므로 역시 <span class="math-inline" data-tex-b64="RFxuZSBmKGEp"></span>이다. 따라서 모든 <span class="math-inline" data-tex-b64="YQ=="></span>에 대해 <span class="math-inline" data-tex-b64="RA=="></span>는 <span class="math-inline" data-tex-b64="ZihhKQ=="></span>와 다르고, <span class="math-inline" data-tex-b64="Zg=="></span>는 Surjection일 수 없다.
