---
title: "3. Induction, Well-Ordering, and Invariants"
description: "수학적 귀납법과 강한 귀납법, Well-Ordering Principle을 정리하고 Invariant와 Parity로 불가능성을 증명한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "induction", "strong-induction", "well-ordering", "invariant"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 3
featured: false
draft: false
---

무한히 많은 자연수에 대한 명제를 하나씩 확인할 수는 없다. Mathematical Induction은 한 출발점과 다음 단계로의 전달 규칙을 증명하여 모든 자연수에 대한 결론을 얻는다. 한편 Invariant Method는 반복되는 과정에서 변하지 않는 성질을 찾아 목표 상태의 가능 여부를 판단한다.

## Mathematical Induction

자연수 <span class="math-inline" data-tex-b64="bg=="></span>에 관한 명제 <span class="math-inline" data-tex-b64="UChuKQ=="></span>를 증명하려면 보통 다음 두 단계를 보인다.

1. Base Case: 시작값에서 <span class="math-inline" data-tex-b64="UChuXzAp"></span>가 참이다.
2. Inductive Step: <span class="math-inline" data-tex-b64="UChrKQ=="></span>가 참이라고 가정할 때 <span class="math-inline" data-tex-b64="UChrKzEp"></span>도 참이다.

그러면 모든 <span class="math-inline" data-tex-b64="blxnZSBuXzA="></span>에 대해 <span class="math-inline" data-tex-b64="UChuKQ=="></span>가 참이다.

<strong>예제.</strong> <span class="math-inline" data-tex-b64="clxuZTE="></span>일 때 등비수열의 합은

<div class="math-display" data-tex-b64="MStyK3JeMitcY2RvdHMrcl5uPVxmcmFje3Jee24rMX0tMX17ci0xfQ=="></div>

이다.

<span class="math-inline" data-tex-b64="bj0w"></span>에서는 양변이 모두 1이다. <span class="math-inline" data-tex-b64="bj1r"></span>에서 성립한다고 가정하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjErcitcY2RvdHMrcl5rK3Jee2srMX0KJj1cZnJhY3tyXntrKzF9LTF9e3ItMX0rcl57aysxfVxcCiY9XGZyYWN7cl57aysyfS0xfXtyLTF9LgpcZW5ke2FsaWduZWR9"></div>

따라서 귀납법으로 모든 <span class="math-inline" data-tex-b64="blxnZTA="></span>에서 성립한다.

## 귀납 가정의 역할

Inductive Step에서는 <span class="math-inline" data-tex-b64="UChrKQ=="></span>가 참임을 다시 증명하는 것이 아니라, 그것을 <strong>가정하고</strong> <span class="math-inline" data-tex-b64="UChrKzEp"></span>를 도출해야 한다. 예를 들어

<div class="math-display" data-tex-b64="M1xtaWQoMl57Mm59LTEp"></div>

을 증명할 때 <span class="math-inline" data-tex-b64="Ml57Mmt9LTE="></span>이 3의 배수라고 가정하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjJeezIoaysxKX0tMQomPTRcY2RvdDJeezJrfS0xXFwKJj0zXGNkb3QyXnsya30rKDJeezJrfS0xKQpcZW5ke2FsaWduZWR9"></div>

이고 두 항 모두 3의 배수이다.

## Strong Induction

Strong Induction에서는 <span class="math-inline" data-tex-b64="UChrKzEp"></span>을 보일 때 <span class="math-inline" data-tex-b64="UChuXzApLFAobl8wKzEpLFxsZG90cyxQKGsp"></span>를 모두 가정할 수 있다.

<strong>정리.</strong> 1보다 큰 모든 정수는 소수들의 곱이다.

2는 소수이므로 성립한다. <span class="math-inline" data-tex-b64="MiwzLFxsZG90cyxuLTE="></span>까지 성립한다고 가정하고 <span class="math-inline" data-tex-b64="bg=="></span>을 본다.

- <span class="math-inline" data-tex-b64="bg=="></span>이 소수이면 그 자체가 소수의 곱이다.
- 합성수이면 <span class="math-inline" data-tex-b64="bj1hYg=="></span>인 <span class="math-inline" data-tex-b64="MTxhLGI8bg=="></span>이 존재한다. 강한 귀납 가정에 의해 <span class="math-inline" data-tex-b64="YSxi"></span>는 각각 소수들의 곱이므로 <span class="math-inline" data-tex-b64="bg=="></span>도 소수들의 곱이다.

일반 귀납법과 강한 귀납법은 논리적으로 동등하지만, 현재 값을 더 작은 여러 값으로 분해하는 문제에서는 강한 귀납법이 자연스럽다.

## Well-Ordering Principle

<strong>Well-Ordering Principle</strong>은 음이 아닌 정수의 공집합이 아닌 부분집합은 항상 최소 원소를 가진다는 원리이다.

이 원리는 Induction과 밀접하게 연결된다. 어떤 성질이 성립하지 않는 자연수가 있다고 가정하면, 반례들의 집합에서 가장 작은 반례를 선택할 수 있다. 그 최소 반례보다 작은 값들에서는 성질이 성립하므로 이를 이용해 최소 반례에서도 성립함을 보이면 모순이 된다. 이를 <strong>minimal counterexample</strong> 방식이라고 한다.

## Invariant Method

Invariant는 허용된 동작을 반복해도 변하지 않는 성질이다. 불가능성 문제에서는 다음 순서가 유용하다.

1. 모든 허용 동작이 보존하는 성질을 찾는다.
2. 시작 상태와 목표 상태에서 그 성질의 값을 비교한다.
3. 값이 다르면 목표 상태에 도달할 수 없다고 결론 내린다.

## 체스판과 도미노

8×8 체스판의 서로 반대쪽 모서리 두 칸을 제거하고 31개의 1×2 도미노로 나머지를 덮을 수 있는지 생각하자.

체스판은 검은 칸과 흰 칸이 각각 32개이다. 반대쪽 모서리는 같은 색이므로 두 칸을 제거하면 한 색은 30개, 다른 색은 32개가 남는다. 그러나 어떤 도미노도 항상 검은 칸 하나와 흰 칸 하나를 덮는다. 31개의 도미노는 두 색을 각각 31개씩 덮어야 하므로 주어진 판을 덮을 수 없다.

여기서 각 도미노가 덮는 두 색의 수가 같다는 성질이 invariant이다.

## Sliding Puzzle과 Parity

순열 <span class="math-inline" data-tex-b64="KGFfMSxhXzIsXGxkb3RzLGFfbik="></span>에서 <span class="math-inline" data-tex-b64="aTxq"></span>이지만 <span class="math-inline" data-tex-b64="YV9pPmFfag=="></span>인 쌍을 inversion이라고 한다. Inversion의 개수를 2로 나눈 나머지가 순열의 parity이다.

15-puzzle처럼 빈칸을 움직이는 퍼즐에서는 단순히 타일 순열의 parity만 보는 것이 아니라 빈칸의 행 위치를 함께 고려해야 한다. 한 상태 <span class="math-inline" data-tex-b64="Uw=="></span>에 대해 예를 들어

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwYXJpdHl9KFMpPVxiaWdsKFx0ZXh0e2ludmVyc2lvbnN9K1x0ZXh0e3JvdyBvZiBibGFua31cYmlncilcYm1vZDI="></div>

와 같은 값을 정의하면 가로 이동과 세로 이동 모두 이 값을 보존하도록 설정할 수 있다. 따라서 시작 상태와 목표 상태의 parity가 다르면 어떤 이동 순서로도 목표에 도달하지 못한다.

중요한 점은 parity 공식을 외우는 것이 아니라, <strong>각 허용 동작이 값을 어떻게 변화시키는지</strong> 확인하는 것이다. 퍼즐의 크기와 행 번호를 세는 방식에 따라 식의 모양은 달라질 수 있지만 보존되는 두 종류의 상태가 존재한다는 핵심은 같다.

## 정리

Induction은 한 단계의 참이 다음 단계로 전달됨을 이용하고, Strong Induction은 더 작은 모든 경우를 함께 사용한다. Well-Ordering Principle은 최소 반례를 선택할 근거를 제공한다. Invariant Method는 과정 전체에서 보존되는 색, parity, 합 등의 성질로 도달 불가능성을 증명한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="MSszKzUrXGNkb3RzKygybi0xKT1uXjI="></span>을 귀납법으로 증명한다.
2. 2 이상의 모든 정수가 소인수를 가진다는 사실을 Strong Induction으로 증명한다.
3. 체스판에서 같은 색의 두 모서리를 제거한 경우 도미노 타일링이 불가능한 이유를 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="bj0x"></span>에서 양변은 1이다. <span class="math-inline" data-tex-b64="bj1r"></span>에서 성립한다고 가정하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjErMytcY2RvdHMrKDJrLTEpKygyaysxKQomPWteMisyaysxXFwKJj0oaysxKV4yLgpcZW5ke2FsaWduZWR9"></div>

따라서 모든 양의 정수 <span class="math-inline" data-tex-b64="bg=="></span>에서 성립한다.

### 2번

<span class="math-inline" data-tex-b64="bj0y"></span>는 소수이므로 소인수 2를 가진다. <span class="math-inline" data-tex-b64="MiwzLFxsZG90cyxuLTE="></span>이 모두 소인수를 가진다고 가정한다. <span class="math-inline" data-tex-b64="bg=="></span>이 소수이면 <span class="math-inline" data-tex-b64="bg=="></span> 자체가 소인수이다. 합성수이면 <span class="math-inline" data-tex-b64="bj1hYg=="></span>인 <span class="math-inline" data-tex-b64="MTxhPG4="></span>이 존재하고, 귀납 가정에 의해 <span class="math-inline" data-tex-b64="YQ=="></span>는 소인수 <span class="math-inline" data-tex-b64="cA=="></span>를 가진다. 그러면 <span class="math-inline" data-tex-b64="cFxtaWQgYQ=="></span>이고 <span class="math-inline" data-tex-b64="YVxtaWQgbg=="></span>이므로 <span class="math-inline" data-tex-b64="cFxtaWQgbg=="></span>이다.

### 3번

반대쪽 모서리처럼 같은 색의 두 칸을 제거하면 검은 칸과 흰 칸의 수가 2만큼 차이 난다. 도미노 하나는 항상 서로 다른 색의 두 칸을 덮으므로 도미노를 몇 개 놓더라도 덮인 검은 칸과 흰 칸의 수는 같다. 따라서 남은 판 전체를 도미노로 덮을 수 없다.
