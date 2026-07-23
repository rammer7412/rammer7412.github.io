---
title: "5. NFA와 ε-transition"
description: "여러 계산 경로를 동시에 허용하는 NFA와 입력을 소비하지 않는 ε-transition, ε-closure를 설명한다."
date: "2025-08-10"
category: "계산이론"
tags: ["theory-of-computation", "nfa", "epsilon-transition", "finite-automata"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 5
featured: false
draft: false
---
**Nondeterministic Finite Automaton(NFA)**은 하나의 State와 Input Symbol에서 다음 State가 여러 개일 수 있는 모델이다. 계산 경로를 하나만 선택하는 것이 아니라 가능한 모든 경로를 동시에 고려한다고 해석한다.

## 형식적 정의

NFA의 Transition Function은 State 하나가 아니라 State Set을 반환한다.

<div class="math-display" data-tex-b64="XGRlbHRhOlFcdGltZXNcU2lnbWFccmlnaHRhcnJvd1xtYXRoY2Fse1B9KFEp"></div>

<span class="math-inline" data-tex-b64="XG1hdGhjYWx7UH0oUSk="></span>는 <span class="math-inline" data-tex-b64="UQ=="></span>의 Power Set이다. 어떤 입력에서 이동할 State가 없으면 Empty Set을 반환할 수 있다.

<div class="math-display" data-tex-b64="XGRlbHRhKHEsYSk9XHtxXzEscV8zXH0="></div>

이면 State <span class="math-inline" data-tex-b64="cQ=="></span>에서 <span class="math-inline" data-tex-b64="YQ=="></span>를 읽을 때 <span class="math-inline" data-tex-b64="cV8x"></span>, <span class="math-inline" data-tex-b64="cV8z"></span> 두 경로가 가능하다는 뜻이다.

## Acceptance

NFA는 입력을 모두 읽은 뒤 가능한 경로 중 **하나 이상**이 Accept State에 도달하면 Accept한다.

모든 경로가 성공할 필요는 없다. 어떤 경로가 중간에 막혀도 다른 경로가 Accept하면 전체 입력을 Accept한다.

## 예제: `01`을 포함하는 String

다음 아이디어로 NFA를 구성할 수 있다.

- <span class="math-inline" data-tex-b64="cV8w"></span>에서 모든 입력을 계속 읽으며 시작 위치를 탐색한다.
- <span class="math-inline" data-tex-b64="cV8w"></span>에서 0을 읽을 때 <span class="math-inline" data-tex-b64="cV8w"></span>에 남는 동시에 <span class="math-inline" data-tex-b64="cV8x"></span>로 이동한다.
- <span class="math-inline" data-tex-b64="cV8x"></span>에서 1을 읽으면 Accept State <span class="math-inline" data-tex-b64="cV8y"></span>로 이동한다.
- <span class="math-inline" data-tex-b64="cV8y"></span>에서는 남은 모든 입력을 읽어도 <span class="math-inline" data-tex-b64="cV8y"></span>에 남는다.

<span class="math-inline" data-tex-b64="cV8w"></span>에서 0을 읽을 때 두 경로를 동시에 만드는 것이 Nondeterminism이다.

## ε-transition

입력 Symbol을 소비하지 않고 State를 바꾸는 Transition을 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>-transition이라고 한다.

<div class="math-display" data-tex-b64="XGRlbHRhOlFcdGltZXMoXFNpZ21hXGN1cFx7XHZhcmVwc2lsb25cfSlccmlnaHRhcnJvd1xtYXRoY2Fse1B9KFEp"></div>

<span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>-transition은 여러 Automaton 조각을 연결하거나 선택 구조를 표현할 때 편리하다.

예를 들어 Start State에서 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>로 두 Subautomaton에 각각 이동하면 두 Language의 Union을 인식할 수 있다.

## ε-closure

State <span class="math-inline" data-tex-b64="cQ=="></span>에서 입력을 읽지 않고 0번 이상의 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>-transition으로 도달할 수 있는 State의 집합을 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>-closure라고 한다.

<div class="math-display" data-tex-b64="RShxKT1ce3BcaW4gUVxtaWQgcVx4cmlnaHRhcnJvd3tcdmFyZXBzaWxvbl4qfXBcfQ=="></div>

0번 이동도 허용하므로 <span class="math-inline" data-tex-b64="cVxpbiBFKHEp"></span>이다.

State Set <span class="math-inline" data-tex-b64="Uw=="></span>의 closure는 각 State의 closure의 Union이다.

<div class="math-display" data-tex-b64="RShTKT1cYmlnY3VwX3txXGluIFN9RShxKQ=="></div>

## NFA 실행을 Set으로 추적하기

NFA의 현재 위치를 State 하나가 아니라 State Set으로 관리하면 실행을 명확하게 볼 수 있다.

1. Start State의 ε-closure를 구한다.
2. 입력 Symbol을 읽고 가능한 모든 다음 State를 합친다.
3. 다시 그 Set의 ε-closure를 구한다.
4. 입력이 끝날 때까지 반복한다.

마지막 Set이 Accept State와 교집합을 가지면 Accept한다.

<div class="math-display" data-tex-b64="U197XHRleHR7ZmluYWx9fVxjYXAgRlxuZXFcdmFybm90aGluZw=="></div>

## NFA가 더 강한가

NFA는 설계가 간단하고 State를 적게 사용할 수 있지만, DFA보다 더 많은 Language를 인식하지는 않는다. 모든 NFA는 동등한 DFA로 변환할 수 있다. 다만 변환 후 DFA State 수는 지수적으로 증가할 수 있다.

## 정리

- NFA의 Transition은 여러 State를 반환할 수 있다.
- 하나 이상의 Accepting Path가 존재하면 String을 Accept한다.
- ε-transition은 Input을 소비하지 않는다.
- ε-closure는 입력 없이 도달할 수 있는 모든 State의 집합이다.
- NFA와 DFA는 표현력은 같지만 표현의 간결성은 다를 수 있다.

## 연습 문제

### 1번

NFA가 어떤 Input에 대해 세 경로를 만들었고, 두 경로는 막혔지만 한 경로가 Accept State에서 끝났다. 전체 Input의 결과를 판단한다.

### 2번

<span class="math-inline" data-tex-b64="RShxXzApPVx7cV8wLHFfMSxxXzJcfQ=="></span>, <span class="math-inline" data-tex-b64="RShxXzMpPVx7cV8zXH0="></span>이고 현재 State Set이 <span class="math-inline" data-tex-b64="XHtxXzAscV8zXH0="></span>일 때 전체 ε-closure를 구한다.

## 풀이

### 1번

NFA는 가능한 경로 중 하나만 Accept해도 전체 Input을 Accept한다. 따라서 결과는 Accept이다.

### 2번

<div class="math-display" data-tex-b64="RShce3FfMCxxXzNcfSk9RShxXzApXGN1cCBFKHFfMyk9XHtxXzAscV8xLHFfMixxXzNcfQ=="></div>
