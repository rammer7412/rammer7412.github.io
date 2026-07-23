---
title: "19. Turing Machine의 구조와 동작"
description: "읽기·쓰기가 가능한 Tape와 Head를 사용하는 Turing Machine의 형식적 정의와 계산 단계를 설명한다."
date: "2025-08-24"
category: "계산이론"
tags: ["theory-of-computation", "turing-machine", "computability", "tape"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 19
featured: false
draft: false
---
**Turing Machine(TM)**은 Algorithm이 수행할 수 있는 계산의 범위를 연구하기 위한 표준 수학 모델이다. 실제 Computer의 Hardware 구조를 그대로 모사하지는 않지만, 유한한 Program과 필요에 따라 확장되는 Memory를 가진다는 점에서 일반 계산을 표현할 수 있다.

## 구성 요소

한 표준 정의에서 TM은 다음 7-tuple이다.

<div class="math-display" data-tex-b64="TT0oUSxcU2lnbWEsXEdhbW1hLFxkZWx0YSxxXzAscV97YWNjZXB0fSxxX3tyZWplY3R9KQ=="></div>

- <span class="math-inline" data-tex-b64="UQ=="></span>: 유한 State Set
- <span class="math-inline" data-tex-b64="XFNpZ21h"></span>: Input Alphabet이며 Blank Symbol을 포함하지 않는다.
- <span class="math-inline" data-tex-b64="XEdhbW1h"></span>: Tape Alphabet이며 <span class="math-inline" data-tex-b64="XFNpZ21hXHN1YnNldGVxXEdhbW1h"></span>이다.
- <span class="math-inline" data-tex-b64="XHNxY3VwXGluXEdhbW1h"></span>: Blank Symbol
- <span class="math-inline" data-tex-b64="XGRlbHRh"></span>: Transition Function
- <span class="math-inline" data-tex-b64="cV8w"></span>: Start State
- <span class="math-inline" data-tex-b64="cV97YWNjZXB0fQ=="></span>, <span class="math-inline" data-tex-b64="cV97cmVqZWN0fQ=="></span>: 서로 다른 Halting State

Transition Function은

<div class="math-display" data-tex-b64="XGRlbHRhOlFcdGltZXNcR2FtbWFccmlnaHRhcnJvdyBRXHRpbWVzXEdhbW1hXHRpbWVzXHtMLFJcfQ=="></div>

형태이다.

## 한 Step의 동작

현재 State와 Head가 읽는 Tape Symbol에 따라 다음 네 가지가 결정된다.

1. 새 State
2. 현재 Cell에 쓸 Symbol
3. Head를 왼쪽 또는 오른쪽으로 이동
4. 다음 Step 계속 여부

예를 들어

<div class="math-display" data-tex-b64="XGRlbHRhKHEsMCk9KHAsMSxSKQ=="></div>

은 State <span class="math-inline" data-tex-b64="cQ=="></span>에서 0을 읽으면 1을 쓰고, State <span class="math-inline" data-tex-b64="cA=="></span>로 바꾸고, Head를 오른쪽으로 이동한다는 뜻이다.

## Input 배치

Input String은 Tape의 연속된 Cell에 기록되고 Head는 첫 Symbol을 가리킨다. 나머지 Cell은 Blank이다. Tape는 이론적으로 무한하므로 계산 중 추가 공간을 사용할 수 있다.

## DFA·PDA와의 차이

- DFA는 Input을 한 방향으로 읽고 내용을 수정할 수 없다.
- PDA는 Stack Top만 접근할 수 있다.
- TM은 Tape를 양방향으로 이동하며 이미 읽은 Symbol을 다시 읽고 수정할 수 있다.

이 자유도가 일반적인 Algorithm을 표현할 수 있게 한다.

## 예제: Bit Flip

Binary String의 모든 Bit를 반전하는 TM을 생각한다.

- 0을 읽으면 1을 쓰고 오른쪽으로 이동한다.
- 1을 읽으면 0을 쓰고 오른쪽으로 이동한다.
- Blank를 읽으면 Accept한다.

Input <span class="math-inline" data-tex-b64="MDEwMQ=="></span>은 Tape에서 <span class="math-inline" data-tex-b64="MTAxMA=="></span>으로 바뀐다.

이 기계는 Language Recognizer라기보다 String Function을 계산하는 Transducer로 볼 수 있다.

## Halting

TM은 <span class="math-inline" data-tex-b64="cV97YWNjZXB0fQ=="></span> 또는 <span class="math-inline" data-tex-b64="cV97cmVqZWN0fQ=="></span>에 들어가면 Halt한다. 어떤 Input에서는 두 State에 도달하지 않고 영원히 실행될 수도 있다.

이 가능성이 Decider와 Recognizer를 구분하고 Halting Problem이 등장하는 이유이다.

## 고수준 기술

복잡한 TM을 모든 Transition Table로 쓰면 핵심 Algorithm이 보이지 않는다. 계산이론에서는 다음처럼 구현 가능한 명확한 단계로 고수준 기술을 사용한다.

1. Input의 왼쪽부터 첫 미표시 0을 찾고 표시한다.
2. 오른쪽으로 이동해 대응하는 1을 찾고 표시한다.
3. 왼쪽 끝으로 돌아간다.
4. 모든 Symbol이 표시되었는지 검사한다.

각 단계가 유한한 TM Transition으로 구현 가능해야 한다.

## Church-Turing Thesis

효과적으로 계산 가능한 모든 함수는 Turing Machine으로 계산할 수 있다는 명제를 Church-Turing Thesis라고 한다. 수학적 정리라기보다 “Algorithm”이라는 직관적 개념과 여러 독립적인 계산 모델이 같은 Class를 정의한다는 강한 경험적 주장이다.

## 정리

- TM은 읽기·쓰기가 가능한 무한 Tape와 유한 Control을 가진다.
- 한 Step에서 Symbol을 읽고 쓰며 Head를 이동한다.
- TM은 Halt하지 않을 수 있다.
- 일반 Algorithm의 계산 가능성을 정의하는 표준 모델이다.

## 연습 문제

### 1번

모든 0을 1로, 모든 1을 0으로 바꾸는 TM이 Input <span class="math-inline" data-tex-b64="MDAxMDE="></span>에 대해 남기는 Output을 구한다.

### 2번

DFA와 달리 TM이 같은 Input Position을 여러 번 방문할 수 있는 이유와 그 장점을 설명한다.

## 풀이

### 1번

각 Bit를 반전하므로 Output은 <span class="math-inline" data-tex-b64="MTEwMTA="></span>이다.

### 2번

TM Head는 왼쪽과 오른쪽으로 이동할 수 있다. 이미 읽은 정보를 수정하거나 다시 검사할 수 있으므로 비교, 복사, Marking처럼 한 번의 왼쪽-to-오른쪽 Scan만으로 어려운 Algorithm을 구현할 수 있다.
