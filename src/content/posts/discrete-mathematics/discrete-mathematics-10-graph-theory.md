---
title: "10. Graph Theory"
description: "Graph의 Vertex와 Edge, Degree, Path, Euler Path를 정리하고 Adjacency Matrix의 거듭제곱이 Walk의 수를 세는 이유를 설명한다."
date: "2026-01-17"
category: "이산수학"
tags: ["discrete-mathematics", "graph-theory", "euler-path", "degree", "adjacency-matrix"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 10
featured: false
draft: false
---

Graph는 대상 사이의 연결 관계만 남겨 표현하는 구조이다. 도로망, 통신망, 소셜 네트워크처럼 실제 위치나 모양보다 어떤 대상이 연결되어 있는지가 중요한 문제에 사용한다.

## Graph의 정의

Graph는 보통

<div class="math-display" data-tex-b64="Rz0oVixFKQ=="></div>

로 나타낸다. <span class="math-inline" data-tex-b64="Vg=="></span>는 Vertex 또는 Node의 유한집합이고, <span class="math-inline" data-tex-b64="RQ=="></span>는 Vertex 쌍을 연결하는 Edge의 집합이다.

Undirected Graph의 Edge는 순서가 없는 집합 <span class="math-inline" data-tex-b64="XHt1LHZcfQ=="></span>이고, Directed Graph의 Edge는 ordered pair <span class="math-inline" data-tex-b64="KHUsdik="></span>이다. Weighted Graph에서는 각 Edge에 거리나 비용 같은 값이 추가된다.

그림의 모양이 달라도 Vertex 사이의 연결 관계가 같으면 같은 구조를 가진 Graph로 볼 수 있다. Graph Theory에서는 기하학적 길이나 교차 여부보다 adjacency가 핵심이다.

## Degree와 Handshaking Lemma

Undirected Graph에서 Vertex <span class="math-inline" data-tex-b64="dg=="></span>에 incident한 Edge 수를 degree <span class="math-inline" data-tex-b64="XGRlZyh2KQ=="></span>라고 한다. 모든 degree를 더하면 각 Edge가 양 끝점에서 한 번씩 세어지므로

<div class="math-display" data-tex-b64="XHN1bV97dlxpbiBWfVxkZWcodik9MlxsdmVydCBFXHJ2ZXJ0"></div>

이다. 이를 Handshaking Lemma라고 한다.

오른쪽은 짝수이므로 홀수 degree를 가진 Vertex의 수는 항상 짝수이다. 이는 Euler Path의 존재 조건과 연결된다.

## Walk, Path, Circuit

용어는 교재마다 약간 다르게 사용할 수 있으므로 정의를 확인해야 한다. 여기서는 다음처럼 구분한다.

- Walk: Edge와 Vertex의 반복을 허용하는 이동
- Trail: Edge를 반복하지 않는 Walk
- Path: Vertex를 반복하지 않는 이동
- Circuit 또는 Cycle: 시작점과 끝점이 같은 닫힌 이동

수업 필기에서 Path를 “Edge를 반복하지 않는 경로”로 사용했다면 이는 다른 교재의 Trail에 해당할 수 있다. 용어보다 어떤 반복을 허용하는지를 명시하는 것이 중요하다.

## Euler Path와 Euler Circuit

Euler Path는 모든 Edge를 정확히 한 번씩 사용하는 Trail이다. 시작점과 끝점이 같으면 Euler Circuit이다.

Edge가 있는 부분이 connected인 Undirected Graph에서 다음이 성립한다.

- 홀수 degree Vertex가 0개이면 Euler Circuit이 존재한다.
- 홀수 degree Vertex가 정확히 2개이면 Euler Path가 존재하고, 두 홀수 degree Vertex가 시작점과 끝점이다.
- 홀수 degree Vertex가 2개보다 많으면 Euler Path가 존재하지 않는다.

경로의 중간 Vertex에 들어오면 사용하지 않은 다른 Edge로 나가야 하므로 incident Edge가 쌍을 이룬다. 따라서 중간 Vertex의 degree는 짝수여야 한다. 시작점과 끝점이 다르면 각각 한 Edge가 짝을 이루지 못해 홀수 degree가 된다.

연결성 조건을 빠뜨리면 안 된다. 서로 떨어진 두 component의 Edge를 하나의 연속된 경로로 모두 방문할 수는 없다.

## 한붓그리기 문제

그림의 교차점과 선의 끝점을 Vertex로 바꾸고, 선분을 Edge로 바꾼다. 그다음 degree를 계산하면 실제로 선을 그려보지 않고도 한붓그리기 가능 여부를 판단할 수 있다.

- 모든 degree가 짝수이면 어느 Vertex에서 시작해도 Euler Circuit을 찾을 수 있다.
- 홀수 degree Vertex가 두 개이면 그중 하나에서 시작해 다른 하나에서 끝나야 한다.

## Complete Graph

서로 다른 모든 Vertex 쌍 사이에 Edge가 있는 Graph를 Complete Graph <span class="math-inline" data-tex-b64="S19u"></span>이라고 한다. Edge 수는 Vertex 쌍의 수와 같으므로

<div class="math-display" data-tex-b64="XGx2ZXJ0IEUoS19uKVxydmVydD1cYmlub20gbjI9XGZyYWN7bihuLTEpfTI="></div>

이다. 각 Vertex의 degree는 <span class="math-inline" data-tex-b64="bi0x"></span>이다.

## Adjacency Matrix

Vertex를 <span class="math-inline" data-tex-b64="dl8xLFxsZG90cyx2X24="></span>이라고 할 때 Adjacency Matrix <span class="math-inline" data-tex-b64="QQ=="></span>는

<div class="math-display" data-tex-b64="QV97aWp9PQpcYmVnaW57Y2FzZXN9CjEsJnZfaVx0ZXh0eyBhbmQgfXZfalx0ZXh0eyBhcmUgYWRqYWNlbnR9LFxcCjAsJlx0ZXh0e290aGVyd2lzZX0KXGVuZHtjYXNlc30="></div>

로 정의한다. 단순 Undirected Graph에서는 <span class="math-inline" data-tex-b64="QT1BXntcbWF0aHNmIFR9"></span>이고 self-loop가 없으므로 대각 원소가 0이다.

Vertex의 degree는 해당 행의 합이다.

<div class="math-display" data-tex-b64="XGRlZyh2X2kpPVxzdW1fe2o9MX1ee259QV97aWp9"></div>

## Adjacency Matrix의 거듭제곱

<span class="math-inline" data-tex-b64="KEFeMilfe2lqfQ=="></span>는 <span class="math-inline" data-tex-b64="dl9p"></span>에서 <span class="math-inline" data-tex-b64="dl9q"></span>로 길이 2인 Walk의 수이다.

<div class="math-display" data-tex-b64="KEFeMilfe2lqfT1cc3VtX3trPTF9XntufUFfe2lrfUFfe2tqfQ=="></div>

각 항 <span class="math-inline" data-tex-b64="QV97aWt9QV97a2p9"></span>는 <span class="math-inline" data-tex-b64="dl9p"></span>에서 <span class="math-inline" data-tex-b64="dl9r"></span>로 가는 Edge와 <span class="math-inline" data-tex-b64="dl9r"></span>에서 <span class="math-inline" data-tex-b64="dl9q"></span>로 가는 Edge가 모두 있을 때 1이다. 따라서 가능한 중간 Vertex <span class="math-inline" data-tex-b64="dl9r"></span>의 수를 센다.

같은 논리를 반복하면

<div class="math-display" data-tex-b64="KEFebSlfe2lqfT1cdGV4dHtudW1iZXIgb2Ygd2Fsa3Mgb2YgbGVuZ3RoIH1tXHRleHR7IGZyb20gfXZfaVx0ZXh0eyB0byB9dl9q"></div>

이다. 이는 Path가 아니라 Walk의 수이므로 Vertex나 Edge를 반복하는 경우도 포함한다.

## 정리

Graph는 연결 관계를 Vertex와 Edge로 표현한다. Degree 합은 Edge 수의 두 배이고, 이 parity 성질이 Euler Path의 조건을 결정한다. Adjacency Matrix는 연결 관계를 대수적으로 나타내며, 행렬의 거듭제곱은 정해진 길이의 Walk 수를 계산한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="S182"></span>의 Edge 수와 각 Vertex의 degree를 구한다.
2. Degree가 <span class="math-inline" data-tex-b64="MSwyLDIsMw=="></span>인 connected graph가 Euler Path를 갖는지 판단한다.
3. Adjacency Matrix <span class="math-inline" data-tex-b64="QQ=="></span>에서 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXt0cn0oQV4zKQ=="></span>가 Triangle 수와 어떤 관계가 있는지 설명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="XGx2ZXJ0IEUoS182KVxydmVydD1cYmlub202Mj0xNSxccXF1YWRcZGVnKHYpPTU="></div>

이다.

### 2번

홀수 degree Vertex가 1과 3의 두 개이고 graph가 connected이므로 Euler Path가 존재한다. 시작점과 끝점은 두 홀수 degree Vertex이다.

### 3번

<span class="math-inline" data-tex-b64="KEFeMylfe2lpfQ=="></span>는 <span class="math-inline" data-tex-b64="dl9p"></span>에서 출발해 길이 3으로 다시 <span class="math-inline" data-tex-b64="dl9p"></span>에 돌아오는 Walk 수이다. 단순 Undirected Graph의 Triangle 하나는 시작 Vertex 3가지와 진행 방향 2가지로 총 6번 세어진다. 따라서 Triangle 수는

<div class="math-display" data-tex-b64="XGZyYWN7XG9wZXJhdG9ybmFtZXt0cn0oQV4zKX02"></div>

이다.
