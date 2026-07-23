---
title: "22. Multi-tape 등 Turing Machine 모델의 동등성"
description: "Multi-tape, Nondeterministic, Two-way Infinite Tape 등 TM 변형이 표준 TM과 같은 계산 가능성을 가짐을 설명한다."
date: "2025-08-27"
category: "계산이론"
tags: ["theory-of-computation", "multi-tape", "nondeterministic-tm", "simulation"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 22
featured: false
draft: false
---
Turing Machine에는 Tape 수, Head 수, 이동 방식이 다른 여러 변형이 있다. 이 모델들은 Program을 더 간단하거나 빠르게 표현할 수 있지만 <strong>계산 가능한 Language와 Function의 범위</strong>는 표준 Single-tape TM과 같다.

## Multi-tape Turing Machine

Multi-tape TM은 여러 Tape와 각 Tape의 Head를 가진다. 한 Transition에서 모든 Head가 Symbol을 읽고 각 Tape에 쓰며 독립적으로 이동한다.

복사, 비교, 임시 저장을 분리할 수 있어 Algorithm 설계가 간단하다.

## Single-tape Simulation

여러 Tape의 내용을 하나의 Tape에 Separator로 나란히 Encode한다.

<div class="math-display" data-tex-b64="XCN1XzFcI3VfMlwjXGNkb3RzXCN1X2tcIw=="></div>

각 Tape Head 위치는 Marked Symbol로 표시한다. Multi-tape 한 Step을 Simulation하려면

1. 전체 Single Tape를 Scan하여 각 Head가 읽는 Symbol을 기록한다.
2. Transition Function을 계산한다.
3. 다시 Scan하여 Symbol과 Head Marker를 갱신한다.

따라서 계산 시간은 느려질 수 있지만 같은 결과를 계산한다.

## Multi-track Tape

한 Cell에 여러 Track의 Symbol Tuple을 기록하는 모델이다. Tape Alphabet을 Cartesian Product로 확장하면 Standard TM의 한 Symbol로 Encoding할 수 있으므로 동등하다.

## Two-way Infinite Tape

표준 Tape가 한쪽으로만 무한하더라도 양의 위치와 음의 위치를 짝수·홀수 Cell에 교차 Encoding하면 양방향 Tape를 Simulation할 수 있다.

예를 들어 위치를

<div class="math-display" data-tex-b64="MCwxLC0xLDIsLTIsMywtMyxcbGRvdHM="></div>

순서로 한쪽 Tape에 배치할 수 있다.

## Stay-put Transition

Head가 이동하지 않는 <span class="math-inline" data-tex-b64="Uw=="></span> 동작을 허용해도 표준 TM으로 Simulation할 수 있다. 오른쪽으로 이동한 뒤 바로 왼쪽으로 돌아오는 중간 State를 사용하면 된다.

## Nondeterministic Turing Machine

한 Configuration에서 여러 Transition이 가능한 TM이다. Input을 Accept하는 Branch가 하나라도 있으면 Accept한다.

Nondeterministic TM을 Deterministic TM으로 Simulation할 때는 Computation Tree를 Breadth-first로 탐색한다. 한 Branch만 깊게 Simulation하면 그 Branch가 Loop하여 다른 Accept Branch를 영원히 확인하지 못할 수 있으므로 Dovetailing이 필요하다.

## Enumerator

Printer가 연결되어 String을 차례로 출력하는 TM을 Enumerator라고 한다. 어떤 Language가 Turing-recognizable일 필요충분조건은 그 Language를 Enumerate하는 Enumerator가 존재하는 것이다. 순서나 중복은 허용할 수 있다.

## 계산 가능성과 복잡도

동등성은 “같은 문제를 계산할 수 있다”는 의미이다. Simulation Overhead 때문에 Time Complexity는 달라질 수 있다. Multi-tape TM은 Single-tape보다 Polynomial 정도 빠를 수 있지만 Decidability 자체는 바뀌지 않는다.

## 정리

- Multi-tape, Multi-track, Two-way Infinite Tape는 Standard TM과 계산 능력이 같다.
- Nondeterministic TM도 Decidability 관점에서 Deterministic TM과 동등하다.
- 모델 차이는 표현의 편의성과 Efficiency에는 영향을 주지만 Computability Class는 바꾸지 않는다.

## 연습 문제

### 1번

2-tape TM의 두 Tape <span class="math-inline" data-tex-b64="MTAx"></span>, <span class="math-inline" data-tex-b64="MTE="></span>을 Single Tape에 Encoding하는 한 가지 방법을 제시하고 Head 위치도 표시한다.

### 2번

Nondeterministic TM Simulation에서 Depth-first Search 대신 Breadth-first Search를 사용하는 이유를 설명한다.

## 풀이

### 1번

Separator와 Marked Symbol을 사용해 예를 들어

<div class="math-display" data-tex-b64="XCNcZG90ezF9MDFcIzFcZG90ezF9XCM="></div>

처럼 둘 수 있다. Dot은 각 Tape Head가 읽는 Symbol을 나타낸다. 실제 구현에서는 Marked Version을 Tape Alphabet에 별도 Symbol로 포함한다.

### 2번

한 Branch가 무한 Loop할 수 있다. Depth-first로 그 Branch만 따라가면 다른 유한 Accept Branch를 확인하지 못한다. Breadth-first 또는 Dovetailing은 모든 Branch를 점차 더 깊게 Simulation하여 Accept Branch가 있으면 결국 발견한다.
