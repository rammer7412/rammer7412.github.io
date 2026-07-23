---
title: "16. Pushdown Automata와 Instantaneous Description"
description: "Stack을 사용하는 PDA의 구성과 동작, ID 표기, Final State·Empty Stack Acceptance를 설명한다."
date: "2025-08-21"
category: "계산이론"
tags: ["theory-of-computation", "pda", "stack", "context-free-language"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 16
featured: false
draft: false
---
Finite Automaton은 State가 유한하므로 임의의 개수를 기억할 수 없다. **Pushdown Automaton(PDA)**은 Stack을 추가하여 중첩 구조나 앞부분의 개수를 기억한다. CFG와 같은 Context-Free Language를 다룬다.

## 구성 요소

한 정의에서 PDA는 다음 7-tuple이다.

<div class="math-display" data-tex-b64="TT0oUSxcU2lnbWEsXEdhbW1hLFxkZWx0YSxxXzAsWl8wLEYp"></div>

- <span class="math-inline" data-tex-b64="UQ=="></span>: State Set
- <span class="math-inline" data-tex-b64="XFNpZ21h"></span>: Input Alphabet
- <span class="math-inline" data-tex-b64="XEdhbW1h"></span>: Stack Alphabet
- <span class="math-inline" data-tex-b64="XGRlbHRh"></span>: Transition Function
- <span class="math-inline" data-tex-b64="cV8w"></span>: Start State
- <span class="math-inline" data-tex-b64="Wl8w"></span>: Initial Stack Symbol
- <span class="math-inline" data-tex-b64="Rg=="></span>: Accept State Set

Nondeterministic PDA의 Transition은 현재 State, 입력 Symbol 또는 ε, Stack Top을 받아 가능한 동작의 Set을 반환한다.

<div class="math-display" data-tex-b64="XGRlbHRhOlFcdGltZXMoXFNpZ21hXGN1cFx7XHZhcmVwc2lsb25cfSlcdGltZXNcR2FtbWFccmlnaHRhcnJvd1xtYXRoY2Fse1B9KFFcdGltZXNcR2FtbWFeKik="></div>

Stack Top을 Pop한 뒤 <span class="math-inline" data-tex-b64="XEdhbW1hXio="></span>의 String으로 교체한다고 해석하면 Push, Pop, 유지가 모두 표현된다.

## Instantaneous Description

PDA의 한 순간을

<div class="math-display" data-tex-b64="KHEsdyxcZ2FtbWEp"></div>

로 나타낼 수 있다.

- <span class="math-inline" data-tex-b64="cQ=="></span>: 현재 State
- <span class="math-inline" data-tex-b64="dw=="></span>: 아직 읽지 않은 Input
- <span class="math-inline" data-tex-b64="XGdhbW1h"></span>: 현재 Stack Content

한 Transition에 따른 이동을 <span class="math-inline" data-tex-b64="XHZkYXNo"></span>로 나타낸다.

## 예제: <span class="math-inline" data-tex-b64="XHthXm5iXm5cbWlkIG5cZ2UwXH0="></span>

전략은 다음과 같다.

1. <span class="math-inline" data-tex-b64="YQ=="></span>를 읽는 동안 Stack에 Marker <span class="math-inline" data-tex-b64="QQ=="></span>를 Push한다.
2. 첫 <span class="math-inline" data-tex-b64="Yg=="></span>를 읽으면 Pop 단계로 전환한다.
3. 각 <span class="math-inline" data-tex-b64="Yg=="></span>마다 <span class="math-inline" data-tex-b64="QQ=="></span> 하나를 Pop한다.
4. Input이 끝나고 Stack이 Initial Symbol만 남으면 Accept한다.

<span class="math-inline" data-tex-b64="YWFhYmJi"></span>의 Stack 높이는 a를 읽을 때 3까지 증가하고 b를 읽을 때 0으로 감소한다. 순서가 <span class="math-inline" data-tex-b64="YWJhYg=="></span>처럼 섞이면 중간에 Transition이 없어 Reject한다.

## Final State Acceptance

Input을 모두 읽은 뒤 Accept State에 도달하면 Accept한다.

<div class="math-display" data-tex-b64="KHFfMCx3LFpfMClcdmRhc2heKihxX2YsXHZhcmVwc2lsb24sXGdhbW1hKSxccXF1YWQgcV9mXGluIEY="></div>

Stack에 일부 Symbol이 남아 있어도 정의에 따라 Accept할 수 있다.

## Empty Stack Acceptance

Input을 모두 읽고 Stack이 비면 Accept한다.

<div class="math-display" data-tex-b64="KHFfMCx3LFpfMClcdmRhc2heKihxLFx2YXJlcHNpbG9uLFx2YXJlcHNpbG9uKQ=="></div>

NPDA에서는 Final State Acceptance와 Empty Stack Acceptance가 같은 CFL Class를 정의하며 상호 변환할 수 있다.

## Nondeterminism이 필요한 이유

어떤 Language에서는 Input의 어느 지점이 중간인지 미리 알 수 없다. 예를 들어 Palindrome Language에서 PDA는 중간을 Nondeterministically 추측하고 그 전까지 Push한 Symbol과 이후 Input을 비교할 수 있다.

Deterministic PDA는 NPDA보다 표현력이 약하며 모든 CFL을 인식하지 못한다.

## 정리

- PDA는 Finite Control과 Stack으로 구성된다.
- Stack은 LIFO 방식으로 무한한 개수의 정보를 제한된 형태로 저장한다.
- ID는 State, 남은 Input, Stack Content를 기록한다.
- NPDA의 Final State Acceptance와 Empty Stack Acceptance는 동등하다.

## 연습 문제

### 1번

<span class="math-inline" data-tex-b64="YWFiYg=="></span>를 <span class="math-inline" data-tex-b64="YV5uYl5u"></span> PDA가 처리할 때 Stack Content의 변화를 순서대로 적는다. Initial Stack Symbol은 <span class="math-inline" data-tex-b64="Wl8w"></span>이다.

### 2번

Finite Automaton만으로 <span class="math-inline" data-tex-b64="YV5uYl5u"></span>을 인식하기 어려운 이유와 PDA의 Stack이 해결하는 정보를 설명한다.

## 풀이

### 1번

입력 a를 읽을 때 Marker를 Push하고 b를 읽을 때 Pop한다.

<div class="math-display" data-tex-b64="Wl8wXHJpZ2h0YXJyb3cgQVpfMFxyaWdodGFycm93IEFBWl8wXHJpZ2h0YXJyb3cgQVpfMFxyaWdodGFycm93IFpfMA=="></div>

Input이 끝났고 Marker가 모두 제거되므로 Accept한다.

### 2번

DFA는 앞의 a 개수를 무한히 구분할 State를 가질 수 없다. PDA는 각 a마다 Stack Symbol을 Push하여 개수를 저장하고, b마다 하나씩 Pop하여 두 개수가 같은지 확인한다.
