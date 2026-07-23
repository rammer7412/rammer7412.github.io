---
title: "24. Halting Problem과 비결정성 증명"
description: "자기 참조와 대각화로 Halting Problem이 Decidable하지 않음을 보이고 Mapping Reduction의 기본 구조를 설명한다."
date: "2025-08-29"
category: "계산이론"
tags: ["theory-of-computation", "halting-problem", "undecidable", "reduction"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 24
featured: false
draft: false
---
<strong>Halting Problem</strong>은 Program과 Input이 주어졌을 때 그 Program이 언젠가 종료하는지 판정하는 문제이다. 개별 Program을 분석해 종료를 증명할 수는 있지만, 모든 Program과 Input에 대해 항상 정확한 답을 내는 Algorithm은 존재하지 않는다.

## Language 정의

<div class="math-display" data-tex-b64="SEFMVF97VE19PVx7XGxhbmdsZSBNLHdccmFuZ2xlXG1pZCBNXHRleHR7IGhhbHRzIG9uIH13XH0="></div>

<span class="math-inline" data-tex-b64="TQ=="></span>이 Accept 또는 Reject State에 도달하면 Halt한 것으로 본다. 결과가 어느 쪽인지보다 종료 여부가 핵심이다.

## Decider가 있다고 가정

가상의 Decider <span class="math-inline" data-tex-b64="SA=="></span>가 있다고 가정한다.

<div class="math-display" data-tex-b64="SChcbGFuZ2xlIE0sd1xyYW5nbGUpPVxiZWdpbntjYXNlc30KXHRleHR7YWNjZXB0fSwmTVx0ZXh0eyBoYWx0cyBvbiB9d1xcClx0ZXh0e3JlamVjdH0sJk1cdGV4dHsgbG9vcHMgb24gfXcKXGVuZHtjYXNlc30="></div>

<span class="math-inline" data-tex-b64="SA=="></span>는 모든 Input에서 Halt한다고 가정한다.

## 자기 참조 Machine

<span class="math-inline" data-tex-b64="SA=="></span>를 이용하여 Machine <span class="math-inline" data-tex-b64="RA=="></span>를 만든다. <span class="math-inline" data-tex-b64="RA=="></span>는 Machine Description <span class="math-inline" data-tex-b64="XGxhbmdsZSBNXHJhbmdsZQ=="></span>을 입력받아 <span class="math-inline" data-tex-b64="TQ=="></span>이 자기 Description에서 Halt하는지 물은 뒤 반대로 행동한다.

1. <span class="math-inline" data-tex-b64="SChcbGFuZ2xlIE0sXGxhbmdsZSBNXHJhbmdsZVxyYW5nbGUp"></span>를 실행한다.
2. <span class="math-inline" data-tex-b64="SA=="></span>가 “Halt한다”고 답하면 <span class="math-inline" data-tex-b64="RA=="></span>는 영원히 Loop한다.
3. <span class="math-inline" data-tex-b64="SA=="></span>가 “Loop한다”고 답하면 <span class="math-inline" data-tex-b64="RA=="></span>는 Halt한다.

이제 <span class="math-inline" data-tex-b64="RA=="></span>에 자기 Description <span class="math-inline" data-tex-b64="XGxhbmdsZSBEXHJhbmdsZQ=="></span>을 입력한다.

## 모순

- <span class="math-inline" data-tex-b64="SA=="></span>가 <span class="math-inline" data-tex-b64="RA=="></span>가 자기 Description에서 Halt한다고 예측하면, <span class="math-inline" data-tex-b64="RA=="></span>의 정의에 따라 Loop한다.
- <span class="math-inline" data-tex-b64="SA=="></span>가 Loop한다고 예측하면, <span class="math-inline" data-tex-b64="RA=="></span>는 Halt한다.

어느 경우에도 <span class="math-inline" data-tex-b64="SA=="></span>의 답과 실제 동작이 반대이다. 따라서 그런 Decider <span class="math-inline" data-tex-b64="SA=="></span>는 존재할 수 없다.

<div class="math-display" data-tex-b64="SEFMVF97VE19XHRleHR7IGlzIHVuZGVjaWRhYmxlfQ=="></div>

## Recognizable 여부

<span class="math-inline" data-tex-b64="SEFMVF97VE19"></span>은 Recognizable이다. <span class="math-inline" data-tex-b64="TQ=="></span>을 <span class="math-inline" data-tex-b64="dw=="></span>에서 Simulation하고 Halt하면 Accept한다. Loop하면 Recognizer도 계속 Loop한다.

따라서

<div class="math-display" data-tex-b64="SEFMVF97VE19XGluIFJFXHNldG1pbnVzIFI="></div>

로 쓸 수 있다. 여기서 <span class="math-inline" data-tex-b64="Ug=="></span>은 Decidable Language Class, <span class="math-inline" data-tex-b64="UkU="></span>는 Recognizable Class이다.

## Reduction

이미 Undecidable인 문제 <span class="math-inline" data-tex-b64="QQ=="></span>를 새로운 문제 <span class="math-inline" data-tex-b64="Qg=="></span>로 변환하여, <span class="math-inline" data-tex-b64="Qg=="></span>를 풀 수 있으면 <span class="math-inline" data-tex-b64="QQ=="></span>도 풀 수 있음을 보이면 <span class="math-inline" data-tex-b64="Qg=="></span>도 Undecidable이다.

Mapping Reduction은 Computable Function <span class="math-inline" data-tex-b64="Zg=="></span>가 있어

<div class="math-display" data-tex-b64="d1xpbiBBXGlmZiBmKHcpXGluIEI="></div>

를 만족하는 관계이다. <span class="math-inline" data-tex-b64="QVxsZV9tIEI="></span>로 쓴다.

Reduction 방향을 반대로 쓰지 않도록 주의해야 한다. 어려운 문제를 해결하려는 대상 문제로 변환해야 한다.

## 실제 의미

Halting Problem의 Undecidability는 특정 Program의 종료를 전혀 분석할 수 없다는 뜻이 아니다. 모든 가능한 Program과 Input을 대상으로 항상 종료하고 항상 정확한 General Analyzer가 없다는 뜻이다. 제한된 Language나 특정 Program Class에서는 Termination Analysis가 가능하다.

## 정리

- <span class="math-inline" data-tex-b64="SEFMVF97VE19"></span>은 TM이 Input에서 Halt하는지 묻는다.
- 가상의 Decider를 자기 자신에 적용하고 결과를 반전하면 모순이 생긴다.
- Halting Problem은 Recognizable이지만 Decidable하지 않다.
- Reduction은 다른 문제의 Undecidability를 전달하는 표준 도구이다.

## 연습 문제

### 1번

자기 참조 Machine <span class="math-inline" data-tex-b64="RA=="></span>에서 <span class="math-inline" data-tex-b64="SA=="></span>가 “<span class="math-inline" data-tex-b64="RA=="></span>는 <span class="math-inline" data-tex-b64="XGxhbmdsZSBEXHJhbmdsZQ=="></span>에서 Halt한다”고 답했을 때 실제로 어떤 모순이 생기는지 설명한다.

### 2번

<span class="math-inline" data-tex-b64="QQ=="></span>가 Undecidable이고 <span class="math-inline" data-tex-b64="QVxsZV9tIEI="></span>일 때 <span class="math-inline" data-tex-b64="Qg=="></span>가 Decidable이라고 가정하면 왜 모순인지 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="RA=="></span>는 <span class="math-inline" data-tex-b64="SA=="></span>가 Halt를 예측하면 의도적으로 Loop하도록 정의되었다. 따라서 예측이 틀린다. 반대로 Loop를 예측하면 Halt하므로 어느 답도 정확할 수 없다.

### 2번

<span class="math-inline" data-tex-b64="Qg=="></span>의 Decider가 있다면 Input <span class="math-inline" data-tex-b64="dw=="></span>에 대해 <span class="math-inline" data-tex-b64="Zih3KQ=="></span>를 계산하고 <span class="math-inline" data-tex-b64="Qg=="></span> Decider를 실행하여 <span class="math-inline" data-tex-b64="d1xpbiBB"></span>를 판정할 수 있다. 이는 <span class="math-inline" data-tex-b64="QQ=="></span>가 Undecidable이라는 가정과 모순이다.
