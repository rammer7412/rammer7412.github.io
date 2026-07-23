---
title: "17. CFG와 PDA의 동등성"
description: "문자열 생성 모델인 CFG와 Stack 기반 Recognizer인 PDA가 같은 Context-Free Language를 표현함을 설명한다."
date: "2025-08-22"
category: "계산이론"
tags: ["theory-of-computation", "cfg", "pda", "equivalence"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 17
featured: false
draft: false
---
CFG는 String을 생성하고 PDA는 Input String을 인식한다. 관점은 다르지만 다음이 성립한다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyBpcyBjb250ZXh0LWZyZWV9XGlmZiBMPUwoRylcdGV4dHsgZm9yIHNvbWUgQ0ZHIH1H"></div>

<div class="math-display" data-tex-b64="XGlmZiBMPUwoUClcdGV4dHsgZm9yIHNvbWUgTlBEQSB9UA=="></div>

## CFG에서 PDA로

핵심은 Stack에 현재 만들어야 할 Sentential Form을 저장하고 Leftmost Derivation을 모사하는 것이다.

1. Stack에 Start Variable <span class="math-inline" data-tex-b64="Uw=="></span>를 넣는다.
2. Stack Top이 Variable <span class="math-inline" data-tex-b64="QQ=="></span>이면 Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93XGFscGhh"></span> 하나를 Nondeterministically 선택하여 <span class="math-inline" data-tex-b64="QQ=="></span>를 <span class="math-inline" data-tex-b64="XGFscGhh"></span>로 교체한다.
3. Stack Top이 Terminal <span class="math-inline" data-tex-b64="YQ=="></span>이고 다음 Input도 <span class="math-inline" data-tex-b64="YQ=="></span>이면 둘을 동시에 제거한다.
4. Input과 Stack이 모두 비면 Accept한다.

Production 선택에는 Input을 소비하지 않는 ε-transition을 사용한다.

## 예제

Grammar

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFTYlxtaWRcdmFyZXBzaWxvbg=="></div>

를 PDA로 모사한다. Input <span class="math-inline" data-tex-b64="YWFiYg=="></span>에 대해 Stack의 <span class="math-inline" data-tex-b64="Uw=="></span>를 <span class="math-inline" data-tex-b64="YVNi"></span>로 두 번 확장하고, Terminal a를 Input과 Matching한다. 이후 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93XHZhcmVwc2lsb24="></span>를 선택하고 b를 Matching하면 Accept한다.

이 PDA의 Nondeterminism은 Grammar에서 어떤 Production을 선택할지에 대응한다.

## PDA에서 CFG로

역방향 변환은 더 복잡하다. PDA가 State <span class="math-inline" data-tex-b64="cA=="></span>에서 Stack Symbol <span class="math-inline" data-tex-b64="QQ=="></span>를 제거하여 State <span class="math-inline" data-tex-b64="cQ=="></span>로 갈 수 있는 모든 Input을 생성하는 Variable을 만든다.

<div class="math-display" data-tex-b64="W3BBcQ=="></div>]

라는 Variable은 “State <span class="math-inline" data-tex-b64="cA=="></span>에서 시작해 Stack Top <span class="math-inline" data-tex-b64="QQ=="></span>를 제거하고 State <span class="math-inline" data-tex-b64="cQ=="></span>에 도달하게 하는 String”을 나타낸다.

PDA Transition이 Stack에 Symbol을 Push하면, 그 Symbol들이 이후 어떤 중간 State를 거쳐 Pop되는지 가능한 State Sequence를 Production에 반영한다. State가 유한하므로 Grammar도 유한하게 만들 수 있다.

## 동등성의 의미

동등하다는 것은 각 CFG에 같은 Language를 인식하는 NPDA가 있고, 각 NPDA에 같은 Language를 생성하는 CFG가 있다는 뜻이다. Grammar와 Automaton의 크기나 동작 방식이 동일하다는 뜻은 아니다.

## Deterministic PDA와 CFG

모든 CFG에 대응하는 PDA는 Nondeterministic일 수 있다. Deterministic Context-Free Language는 CFL의 진부분집합이다. 예를 들어 일반적인 Programming Language Parser는 문법을 LL, LR과 같은 제한된 형태로 설계해 Deterministic Parsing을 가능하게 한다.

## 정리

- CFG의 Variable 확장을 PDA Stack Rewrite로 모사할 수 있다.
- Terminal은 Input과 Stack Top을 Matching하여 소비한다.
- PDA에서 CFG로 갈 때 State Pair와 Stack Symbol을 Variable로 인코딩한다.
- CFG와 NPDA는 정확히 CFL을 표현한다.

## 연습 문제

### 1번

Grammar <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93MFMxXG1pZFx2YXJlcHNpbG9u"></span>를 모사하는 PDA가 Input <span class="math-inline" data-tex-b64="MDAxMQ=="></span>을 처리하는 주요 Stack 단계를 적는다.

### 2번

CFG를 PDA로 변환한 모델에서 Variable Expansion Transition이 Input을 소비하지 않아야 하는 이유를 설명한다.

## 풀이

### 1번

Stack Top의 왼쪽이 먼저 처리된다고 보면 주요 변화는

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93MFMxXFJpZ2h0YXJyb3cwMFMxMVxSaWdodGFycm93MDAxMQ=="></div>

과 같은 내용을 Stack에 만들고 Terminal을 Input과 Matching하는 과정이다. 두 번 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93MFMx"></span>을 선택한 뒤 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93XHZhcmVwc2lsb24="></span>를 선택하면 Input 전체와 일치한다.

### 2번

Production을 선택하는 것은 Grammar의 구조를 확장하는 내부 계산이며 아직 Terminal을 읽는 단계가 아니다. Input은 Stack Top이 Terminal이고 같은 Input Symbol을 만났을 때만 소비해야 Derivation의 Yield와 정확히 일치한다.
