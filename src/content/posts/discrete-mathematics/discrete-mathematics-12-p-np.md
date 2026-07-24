---
title: "12. P, NP, and Polynomial-Time Reduction"
description: "Decision Problem과 다항시간을 바탕으로 P와 NP를 구분하고 Polynomial-Time Reduction, NP-Complete, NP-Hard의 의미를 정리한다."
date: "2026-01-20"
category: "이산수학"
tags: ["discrete-mathematics", "complexity-theory", "p", "np", "reduction"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 12
featured: false
draft: false
---

계산복잡도 이론은 특정 알고리즘의 동작을 자세히 설명하기보다, 문제 자체가 필요한 계산 자원을 기준으로 얼마나 어려운지를 비교한다. 이 글에서는 P와 NP의 정의, “푸는 것”과 “검증하는 것”의 차이, 그리고 Reduction을 중심으로 정리한다.

## Problem을 형식화하는 이유

같은 주제라도 질문의 형태에 따라 문제의 종류가 달라진다.

- <strong>Decision Problem</strong>: 답이 Yes 또는 No이다.
- <strong>Search Problem</strong>: 조건을 만족하는 실제 해를 찾는다.
- <strong>Optimization Problem</strong>: 가능한 해 중 최적값을 찾는다.

Hamiltonian Cycle을 예로 들면 다음과 같다.

- Decision: 주어진 Graph에 모든 Vertex를 정확히 한 번 방문하고 돌아오는 cycle이 존재하는가?
- Search: 그러한 cycle을 실제로 찾아라.
- Optimization과 결합된 문제: 비용이 있는 Graph에서 조건을 만족하는 가장 짧은 tour를 찾아라.

복잡도 class는 보통 Decision Problem을 기준으로 정의한다. Yes/No 형태는 문제 사이의 비교와 Reduction을 명확하게 만들기 때문이다.

## 입력 크기와 Polynomial Time

알고리즘의 실행시간은 실제 초 단위가 아니라 입력 크기 <span class="math-inline" data-tex-b64="bg=="></span>에 따른 증가율로 비교한다. 어떤 상수 <span class="math-inline" data-tex-b64="aw=="></span>에 대해 실행시간이

<div class="math-display" data-tex-b64="TyhuXmsp"></div>

이면 polynomial time이라고 한다. <span class="math-inline" data-tex-b64="TyhuKQ=="></span>, <span class="math-inline" data-tex-b64="TyhuXGxvZyBuKQ=="></span>, <span class="math-inline" data-tex-b64="TyhuXjIp"></span> 등은 polynomial time이고, <span class="math-inline" data-tex-b64="TygyXm4p"></span>이나 <span class="math-inline" data-tex-b64="TyhuISk="></span>은 일반적으로 polynomial time이 아니다.

입력 크기를 정확히 정해야 한다. 정수 <span class="math-inline" data-tex-b64="Tg=="></span>의 입력 길이는 보통 값 <span class="math-inline" data-tex-b64="Tg=="></span> 자체가 아니라 이진수로 표현하는 데 필요한 bit 수인 <span class="math-inline" data-tex-b64="XFRoZXRhKFxsb2cgTik="></span>이다. 값의 크기와 입력 길이를 혼동하면 complexity를 잘못 판단할 수 있다.

## P Class

P는 deterministic algorithm으로 polynomial time 안에 해결할 수 있는 Decision Problem의 집합이다.

<div class="math-display" data-tex-b64="XG1hdGhybSBQPVx7TFxtaWQgTFx0ZXh0eyBpcyBkZWNpZGFibGUgaW4gcG9seW5vbWlhbCB0aW1lfVx9"></div>

정렬, 최단경로, primality test처럼 다양한 문제가 polynomial-time algorithm을 가진다. 이 글에서는 개별 알고리즘의 세부 절차보다 P가 “입력 크기에 대해 효율적으로 해결 가능한 문제”를 형식화한다는 점이 중요하다.

## NP Class

NP는 Yes instance에 대해 polynomial size의 certificate가 존재하고, 그 certificate의 정확성을 polynomial time에 검증할 수 있는 Decision Problem의 집합이다.

Subset Sum의 Decision Version을 생각하자.

<strong>문제.</strong> 정수 집합과 목표값 <span class="math-inline" data-tex-b64="VA=="></span>가 주어졌을 때 합이 <span class="math-inline" data-tex-b64="VA=="></span>인 부분집합이 존재하는가?

누군가 부분집합을 certificate로 주면 선택된 수를 더하고 <span class="math-inline" data-tex-b64="VA=="></span>와 같은지만 확인하면 된다. 올바른 부분집합을 처음부터 찾는 것은 어려울 수 있지만, 주어진 해를 확인하는 것은 빠르다.

NP의 N은 “not polynomial”이 아니라 <strong>nondeterministic polynomial time</strong>에서 유래한다. 실용적으로는 certificate verification 정의가 이해하기 쉽다.

## P와 NP의 관계

P의 문제는 polynomial time에 직접 풀 수 있으므로, 제시된 해를 다시 계산하거나 확인할 수도 있다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhybSBQXHN1YnNldGVxXG1hdGhybXtOUH0="></div>

이다.

핵심 미해결 문제는

<div class="math-display" data-tex-b64="XG1hdGhybSBQXHN0YWNrcmVsez99PVxtYXRocm17TlB9"></div>

이다. 즉 polynomial time에 검증 가능한 모든 문제를 polynomial time에 해결할 수 있는지는 알려져 있지 않다.

“아직 빠른 알고리즘을 찾지 못했다”는 사실만으로 어떤 문제가 P에 없다고 증명할 수는 없다. 문제의 본질적인 하한을 보이는 것은 매우 어렵다.

## Polynomial-Time Reduction

문제 <span class="math-inline" data-tex-b64="QQ=="></span>를 문제 <span class="math-inline" data-tex-b64="Qg=="></span>로 polynomial time에 변환하여 <span class="math-inline" data-tex-b64="Qg=="></span>의 해답으로 <span class="math-inline" data-tex-b64="QQ=="></span>를 해결할 수 있으면

<div class="math-display" data-tex-b64="QVxsZV9wIEI="></div>

라고 쓴다.

Reduction의 방향을 해석할 때는 다음 문장이 중요하다.

> <span class="math-inline" data-tex-b64="Qg=="></span>를 풀 수 있으면 <span class="math-inline" data-tex-b64="QQ=="></span>도 풀 수 있다.

따라서 <span class="math-inline" data-tex-b64="Qg=="></span>는 적어도 <span class="math-inline" data-tex-b64="QQ=="></span>만큼 어렵다. 반대로 <span class="math-inline" data-tex-b64="QQ=="></span>가 어렵다는 사실만으로 <span class="math-inline" data-tex-b64="Qg=="></span>도 어렵다고 말하려면 Reduction의 방향이 올바른지 확인해야 한다.

Polynomial-Time Reduction은 단순히 입력을 바꾸는 것이 아니라 Yes instance와 No instance를 보존해야 한다.

<div class="math-display" data-tex-b64="eFxpbiBBXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQgZih4KVxpbiBC"></div>

여기서 변환 <span class="math-inline" data-tex-b64="Zg=="></span>는 polynomial time에 계산 가능해야 한다.

## NP-Hard와 NP-Complete

문제 <span class="math-inline" data-tex-b64="Qg=="></span>가 NP-Hard라는 것은 모든 NP 문제 <span class="math-inline" data-tex-b64="QQ=="></span>가 <span class="math-inline" data-tex-b64="Qg=="></span>로 polynomial-time reducible하다는 뜻이다.

<div class="math-display" data-tex-b64="XGZvcmFsbCBBXGluXG1hdGhybXtOUH0sXHF1YWQgQVxsZV9wIEI="></div>

NP-Hard 문제는 반드시 Decision Problem일 필요도 없고 NP 안에 있을 필요도 없다.

NP-Complete 문제는 다음 두 조건을 모두 만족한다.

1. 문제 자체가 NP에 속한다.
2. 모든 NP 문제가 그 문제로 polynomial-time reduction된다.

따라서

<div class="math-display" data-tex-b64="XG1hdGhybXtOUFx0ZXh0ey19Q29tcGxldGV9PVxtYXRocm17TlB9XGNhcFxtYXRocm17TlBcdGV4dHstfUhhcmR9"></div>

이다.

NP-Complete 문제 하나라도 P에 속한다면 모든 NP 문제가 P에 속하므로 <span class="math-inline" data-tex-b64="XG1hdGhybSBQPVxtYXRocm17TlB9"></span>가 된다.

## 대표적인 예

### 3-SAT

여러 Boolean variable의 clause들이 주어졌을 때 모든 clause를 참으로 만드는 assignment가 존재하는지를 묻는다. Assignment가 certificate로 주어지면 각 clause를 확인하면 되므로 NP에 속한다. 3-SAT는 대표적인 NP-Complete 문제이다.

<div class="math-display" data-tex-b64="KHhfMVxsb3IgeF8yXGxvciB4XzMpXGxhbmQoXG5lZyB4XzFcbG9yIHhfNFxsb3IgeF81KQ=="></div>

### Hamiltonian Cycle

Graph에서 모든 Vertex를 정확히 한 번 방문하고 시작점으로 돌아오는 cycle의 존재 여부를 묻는 Decision Problem은 NP-Complete이다. Cycle이 주어지면 모든 Vertex가 한 번씩 등장하는지와 연속 Vertex 사이에 Edge가 있는지를 polynomial time에 확인할 수 있다.

### Travelling Salesperson Problem

거리 한계 <span class="math-inline" data-tex-b64="Sw=="></span> 이하의 tour가 존재하는지를 묻는 Decision Version은 NP-Complete이다. 가장 짧은 tour 자체를 찾는 Optimization Version은 NP-Hard로 분류한다. Decision과 Optimization을 구분해야 한다.

### Factorization

정수의 비자명한 인수를 찾거나 특정 범위의 인수가 존재하는지 묻는 문제는 NP와 관련되지만, 일반적인 integer factorization이 NP-Complete라고 알려진 것은 아니다. “현재 빠른 고전 알고리즘이 알려지지 않았다”와 “NP-Complete로 증명되었다”는 서로 다른 주장이다.

## Reduction을 읽는 방법

Reduction 증명을 볼 때 다음을 확인한다.

1. 원래 문제의 임의의 입력을 받았는가?
2. 새 입력을 polynomial time에 만들 수 있는가?
3. 원래 입력이 Yes일 때 새 입력도 Yes인가?
4. 새 입력이 Yes일 때 원래 입력도 Yes인가?
5. 입력 크기가 polynomial보다 빠르게 증가하지 않는가?

Reduction은 문제를 실제로 효율적으로 푸는 알고리즘이 아니라, 한 문제를 풀 수 있다는 가정 아래 다른 문제를 풀 수 있음을 보여주는 난이도 비교 도구이다.

## 정리

P는 polynomial time에 해결 가능한 Decision Problem, NP는 Yes certificate를 polynomial time에 검증할 수 있는 Decision Problem의 집합이다. <span class="math-inline" data-tex-b64="XG1hdGhybSBQXHN1YnNldGVxXG1hdGhybXtOUH0="></span>이지만 equality 여부는 알려져 있지 않다. Polynomial-Time Reduction은 문제의 난이도를 비교하고, NP-Complete는 NP 안에서 모든 NP 문제만큼 어려운 문제를 뜻한다. 이 글은 계산 모델 자체보다 class와 reduction의 의미에 집중한다.

## 연습 문제

1. 어떤 Decision Problem이 P에 속하면 NP에도 속하는 이유를 설명한다.
2. <span class="math-inline" data-tex-b64="QVxsZV9wIEI="></span>이고 <span class="math-inline" data-tex-b64="QlxpblxtYXRocm0gUA=="></span>일 때 <span class="math-inline" data-tex-b64="QVxpblxtYXRocm0gUA=="></span>임을 보인다.
3. TSP Decision Version과 Optimization Version의 차이를 설명한다.

## 풀이

### 1번

P에 속하는 문제는 입력만으로 polynomial time에 정답을 계산할 수 있다. 따라서 certificate가 주어졌을 때도 정답을 다시 계산해 certificate 또는 Yes 여부를 polynomial time에 확인할 수 있다. 그러므로 모든 P 문제는 NP에 속한다.

### 2번

입력 <span class="math-inline" data-tex-b64="eA=="></span>가 주어지면 먼저 polynomial-time reduction <span class="math-inline" data-tex-b64="Zg=="></span>를 계산하여 <span class="math-inline" data-tex-b64="Zih4KQ=="></span>를 만든다. 그다음 P에 속하는 <span class="math-inline" data-tex-b64="Qg=="></span>의 polynomial-time algorithm을 실행한다. Polynomial들의 합성과 합은 여전히 polynomial이므로 <span class="math-inline" data-tex-b64="QQ=="></span>도 polynomial time에 해결된다.

### 3번

Decision Version은 “길이가 <span class="math-inline" data-tex-b64="Sw=="></span> 이하인 tour가 존재하는가?”처럼 Yes/No를 묻는다. Optimization Version은 가능한 모든 tour 중 최소 길이의 tour를 실제로 찾는다. Decision Version은 NP-Complete이고, Optimization Version은 NP-Hard로 다룬다.
