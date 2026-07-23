---
title: "23. Decidable Language와 Turing-Recognizable Language"
description: "모든 Input에서 Halt하는 Decider와 Member만 보장하는 Recognizer를 구분하고 Complement와 Dovetailing의 관계를 설명한다."
date: "2025-08-28"
category: "계산이론"
tags: ["theory-of-computation", "decidability", "recognizable", "decider"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 23
featured: false
draft: false
---
Turing Machine이 Language를 처리한다고 해도 Non-member Input에서 반드시 결과를 내는지는 별개의 문제이다. 이 차이에 따라 **Turing-recognizable**과 **Decidable** Language를 구분한다.

## Turing-recognizable Language

Language <span class="math-inline" data-tex-b64="TA=="></span>에 대해 TM <span class="math-inline" data-tex-b64="TQ=="></span>이 다음을 만족하면 <span class="math-inline" data-tex-b64="TA=="></span>을 Recognize한다고 한다.

- <span class="math-inline" data-tex-b64="d1xpbiBM"></span>이면 <span class="math-inline" data-tex-b64="TQ=="></span>은 <span class="math-inline" data-tex-b64="dw=="></span>를 Accept한다.
- <span class="math-inline" data-tex-b64="d1xub3RpbiBM"></span>이면 <span class="math-inline" data-tex-b64="TQ=="></span>은 Reject하거나 영원히 Loop할 수 있다.

<div class="math-display" data-tex-b64="TD1MKE0p"></div>

이러한 Language를 Turing-recognizable, Recursively Enumerable(RE)라고 한다.

## Decidable Language

TM <span class="math-inline" data-tex-b64="RA=="></span>가 모든 Input에서 Halt하고

- <span class="math-inline" data-tex-b64="d1xpbiBM"></span>이면 Accept
- <span class="math-inline" data-tex-b64="d1xub3RpbiBM"></span>이면 Reject

하면 <span class="math-inline" data-tex-b64="RA=="></span>를 Decider라고 하고 <span class="math-inline" data-tex-b64="TA=="></span>을 Decidable 또는 Recursive Language라고 한다.

<div class="math-display" data-tex-b64="XHRleHR7RGVjaWRhYmxlfVxzdWJzZXRlcVx0ZXh0e1R1cmluZy1yZWNvZ25pemFibGV9"></div>

모든 Decider는 Recognizer이지만 모든 Recognizer가 Decider인 것은 아니다.

## Complement와 Decidability

<span class="math-inline" data-tex-b64="TA=="></span>이 Decidable이면 Accept와 Reject를 뒤집어 <span class="math-inline" data-tex-b64="XG92ZXJsaW5le0x9"></span>의 Decider를 만들 수 있다. 따라서 Decidable Language는 Complement에 닫혀 있다.

Recognizer는 Non-member에서 Loop할 수 있으므로 단순히 Accept와 Reject를 뒤집으면 Complement Recognizer가 되지 않는다.

## 양쪽이 Recognizable이면 Decidable

중요한 정리이다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyBhbmQgfVxvdmVybGluZXtMfVx0ZXh0eyBhcmUgcmVjb2duaXphYmxlfVxpZmYgTFx0ZXh0eyBpcyBkZWNpZGFibGV9"></div>

오른쪽 방향은 Complement Closure로 분명하다. 왼쪽 방향은 <span class="math-inline" data-tex-b64="TA=="></span>의 Recognizer <span class="math-inline" data-tex-b64="TV8x"></span>과 <span class="math-inline" data-tex-b64="XG92ZXJsaW5le0x9"></span>의 Recognizer <span class="math-inline" data-tex-b64="TV8y"></span>를 Input <span class="math-inline" data-tex-b64="dw=="></span>에 대해 병렬로 Simulation한다.

1. <span class="math-inline" data-tex-b64="TV8x"></span>을 한 Step 실행한다.
2. <span class="math-inline" data-tex-b64="TV8y"></span>를 한 Step 실행한다.
3. 반복한다.
4. <span class="math-inline" data-tex-b64="TV8x"></span>이 Accept하면 Accept하고 <span class="math-inline" data-tex-b64="TV8y"></span>가 Accept하면 Reject한다.

<span class="math-inline" data-tex-b64="dw=="></span>는 둘 중 정확히 하나에 속하므로 하나의 Machine은 결국 Accept한다. 이 방식을 Dovetailing이라고 한다.

## 예제: DFA Acceptance

<div class="math-display" data-tex-b64="QV97REZBfT1ce1xsYW5nbGUgTSx3XHJhbmdsZVxtaWQgTVx0ZXh0eyBpcyBhIERGQSBhbmQgYWNjZXB0cyB9d1x9"></div>

는 Decidable이다. DFA를 Description에서 복원하고 <span class="math-inline" data-tex-b64="dw=="></span>의 각 Symbol에 대해 Transition을 한 번씩 Simulation하면 반드시 유한 시간에 종료한다.

## 예제: TM Acceptance

<div class="math-display" data-tex-b64="QV97VE19PVx7XGxhbmdsZSBNLHdccmFuZ2xlXG1pZCBNXHRleHR7IGFjY2VwdHMgfXdcfQ=="></div>

는 Turing-recognizable이다. <span class="math-inline" data-tex-b64="TQ=="></span>을 <span class="math-inline" data-tex-b64="dw=="></span>에서 Simulation하여 Accept하면 Accept한다. 그러나 <span class="math-inline" data-tex-b64="TQ=="></span>이 Reject하거나 Loop하는 경우를 일반적으로 모두 유한 시간에 구분할 수 없으므로 Decidable하지 않다.

## 언어와 Machine Description

Machine 자체를 Input으로 주려면 유한 String으로 Encoding한다. <span class="math-inline" data-tex-b64="XGxhbmdsZSBNLHdccmFuZ2xl"></span>는 TM Description과 Input을 함께 Encoding한 String을 뜻한다. Universal Turing Machine은 Description을 읽고 다른 TM을 Simulation한다.

## 정리

- Recognizer는 Member Input에서만 Halt·Accept가 보장된다.
- Decider는 모든 Input에서 Halt한다.
- Decidable Language는 Complement에 닫혀 있다.
- <span class="math-inline" data-tex-b64="TA=="></span>, <span class="math-inline" data-tex-b64="XG92ZXJsaW5le0x9"></span>이 모두 Recognizable이면 Dovetailing으로 Decide할 수 있다.

## 연습 문제

### 1번

어떤 TM이 Member Input에서는 Accept하고 Non-member Input에서는 항상 Loop한다. 이 Machine은 Recognizer인지 Decider인지 판단한다.

### 2번

<span class="math-inline" data-tex-b64="TA=="></span>과 <span class="math-inline" data-tex-b64="XG92ZXJsaW5le0x9"></span>의 Recognizer를 순서대로 하나씩 완전히 실행하는 방식이 Decider를 만들지 못하는 이유를 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="TA=="></span>의 Recognizer이지만 Non-member에서 Halt하지 않으므로 Decider는 아니다.

### 2번

첫 번째 Recognizer가 Input에 대해 Loop하면 두 번째 Recognizer를 영원히 시작하지 못한다. 두 Machine을 한 Step씩 번갈아 실행하는 Dovetailing이 필요하다.
