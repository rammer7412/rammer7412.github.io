---
title: "20. Turing Machine의 Configuration과 Computation"
description: "Tape 내용, Head 위치, 현재 State를 포함하는 Configuration과 한 Step Relation, Halting Computation을 엄밀히 표현한다."
date: "2025-08-25"
category: "계산이론"
tags: ["theory-of-computation", "turing-machine", "configuration", "computation"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 20
featured: false
draft: false
---
Turing Machine의 현재 상황은 State 하나만으로 설명할 수 없다. Tape에 무엇이 기록되어 있는지와 Head 위치도 필요하다. 이를 모두 포함한 순간 상태를 **Configuration** 또는 Instantaneous Description이라고 한다.

## Configuration 표기

String <span class="math-inline" data-tex-b64="dQ=="></span>, <span class="math-inline" data-tex-b64="dlxuZXFcdmFyZXBzaWxvbg=="></span>, State <span class="math-inline" data-tex-b64="cQ=="></span>에 대해

<div class="math-display" data-tex-b64="dXF2"></div>

는 Tape의 유의미한 내용이 <span class="math-inline" data-tex-b64="dXY="></span>이고, Head가 <span class="math-inline" data-tex-b64="dg=="></span>의 첫 Symbol을 읽으며, 현재 State가 <span class="math-inline" data-tex-b64="cQ=="></span>라는 뜻이다.

예를 들어

<div class="math-display" data-tex-b64="MTBxXzMwMTE="></div>

은 Tape에 <span class="math-inline" data-tex-b64="MTAwMTE="></span>이 있고 Head가 세 번째 Symbol 0을 읽는다고 해석한다.

## One-step Relation

Configuration <span class="math-inline" data-tex-b64="Q18x"></span>에서 Transition 하나로 <span class="math-inline" data-tex-b64="Q18y"></span>가 되면

<div class="math-display" data-tex-b64="Q18xXHZkYXNoIENfMg=="></div>

라고 쓴다. 0번 이상의 Step은 <span class="math-inline" data-tex-b64="XHZkYXNoXio="></span>, 한 번 이상의 Step은 <span class="math-inline" data-tex-b64="XHZkYXNoXis="></span>로 나타낸다.

## 오른쪽 이동

<div class="math-display" data-tex-b64="XGRlbHRhKHEsYSk9KHAsYixSKQ=="></div>

이고 Configuration이 <span class="math-inline" data-tex-b64="dXFhdg=="></span>라면

<div class="math-display" data-tex-b64="dXFhdlx2ZGFzaCB1YnB2"></div>

이다. 현재 a를 b로 바꾸고 Head가 오른쪽 Symbol을 읽으므로 State Symbol의 위치가 이동한다.

## 왼쪽 이동

왼쪽에 마지막 Symbol <span class="math-inline" data-tex-b64="Yw=="></span>가 있다고 하자.

<div class="math-display" data-tex-b64="XGRlbHRhKHEsYSk9KHAsYixMKQ=="></div>

이면

<div class="math-display" data-tex-b64="dWNxYXZcdmRhc2ggdXBjYnY="></div>

이다. Boundary와 Blank 처리까지 포함하면 표기는 약간 달라질 수 있지만 원리는 같다.

## Computation

Input <span class="math-inline" data-tex-b64="dw=="></span>에 대한 Computation은 Initial Configuration에서 시작하는 Configuration Sequence이다.

<div class="math-display" data-tex-b64="cV8wd1x2ZGFzaCBDXzFcdmRhc2ggQ18yXHZkYXNoXGNkb3Rz"></div>

Accepting Configuration에 도달하면 Accept하고, Rejecting Configuration에 도달하면 Reject한다.

<div class="math-display" data-tex-b64="cV8wd1x2ZGFzaF4qdXFfe2FjY2VwdH12"></div>

이면 Accept한다.

## 무한 Computation

어떤 Input에서는 Configuration Sequence가 끝없이 이어질 수 있다. 이는 Reject와 다르다.

- Reject는 <span class="math-inline" data-tex-b64="cV97cmVqZWN0fQ=="></span>에 도달하여 결과를 확정한다.
- Loop는 결과를 내지 않고 영원히 계산한다.

Recognizer 정의에서 Non-member Input은 Reject하거나 Loop할 수 있다.

## Configuration Graph

Deterministic TM에서는 각 Configuration의 다음 Configuration이 최대 하나이다. Nondeterministic TM에서는 여러 다음 Configuration이 가능하며, 전체 실행을 Tree나 Directed Graph로 볼 수 있다.

Nondeterministic Recognizer는 한 Branch라도 Accept하면 Accept한다. Decider로 사용하려면 모든 Branch가 Halt하도록 정의해야 한다.

## 정리

- Configuration은 State, Tape Content, Head Position을 모두 포함한다.
- <span class="math-inline" data-tex-b64="XHZkYXNo"></span>는 한 Step, <span class="math-inline" data-tex-b64="XHZkYXNoXio="></span>는 여러 Step의 도달 가능성을 나타낸다.
- Accept, Reject, Loop는 서로 다른 결과이다.
- Configuration 표기는 TM 증명과 Simulation을 엄밀하게 만든다.

## 연습 문제

### 1번

Configuration <span class="math-inline" data-tex-b64="MTBxXzAwMQ=="></span>에서 <span class="math-inline" data-tex-b64="XGRlbHRhKHFfMCwwKT0ocV8xLDEsUik="></span>를 적용한 다음 Configuration을 쓴다.

### 2번

Recognizer가 Input을 Reject하는 경우와 영원히 Loop하는 경우가 Language Membership 관점에서 어떤 공통점과 차이를 가지는지 설명한다.

## 풀이

### 1번

Head가 읽는 0을 1로 바꾸고 오른쪽으로 이동한다.

<div class="math-display" data-tex-b64="MTBxXzAwMVx2ZGFzaDEwMXFfMTE="></div>

표기 Convention에 따라 오른쪽의 Blank 생략 방식은 달라질 수 있지만 Tape 내용은 <span class="math-inline" data-tex-b64="MTAxMQ=="></span>이고 Head는 마지막 1을 읽는다.

### 2번

두 경우 모두 Input을 Accept하지 않으므로 Recognized Language에는 포함되지 않는다. 그러나 Reject는 유한 시간 안에 Non-membership 결과를 내고, Loop는 결과를 내지 않는다. 이 차이가 Recognizer와 Decider를 구분한다.
