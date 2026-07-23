---
title: "21. Turing Machine Transducer와 함수 계산"
description: "Turing Machine을 Language Acceptor가 아니라 Input에서 Output을 계산하는 Transducer로 해석하고 Computable Function을 정의한다."
date: "2025-08-26"
category: "계산이론"
tags: ["theory-of-computation", "transducer", "computable-function", "turing-machine"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 21
featured: false
draft: false
---
Turing Machine은 Input을 Accept·Reject하는 장치뿐 아니라 Output을 계산하는 **Transducer**로 사용할 수 있다. Algorithm은 본질적으로 Input과 Output 사이의 함수 관계를 계산하므로 이 관점이 실제 Programming과 더 직접적으로 연결된다.

## 함수 계산

함수

<div class="math-display" data-tex-b64="ZjpcU2lnbWFeKlxyaWdodGFycm93XEdhbW1hXio="></div>

에 대해 TM이 모든 Input <span class="math-inline" data-tex-b64="dw=="></span>에서 Halt하고 Tape에 <span class="math-inline" data-tex-b64="Zih3KQ=="></span>를 남기면 <span class="math-inline" data-tex-b64="Zg=="></span>를 Turing-computable 또는 Computable Function이라고 한다.

어떤 Input에서는 정의되지 않을 수 있는 함수는 Partial Function이다. 정의역의 모든 Input에서 Halt하면 Total Computable Function이다.

## Encoding

TM은 String만 직접 다루므로 숫자, Graph, Program 같은 대상을 String으로 Encoding해야 한다.

- Unary Encoding: 자연수 <span class="math-inline" data-tex-b64="bg=="></span>을 <span class="math-inline" data-tex-b64="MV5u"></span>으로 표현한다.
- Binary Encoding: 일반적인 Binary Representation을 사용한다.
- 여러 값을 구분하려면 Separator <span class="math-inline" data-tex-b64="Iw=="></span> 등을 사용한다.

Encoding은 유일하게 Decoding 가능해야 한다.

## 예제: Unary Addition

Input을

<div class="math-display" data-tex-b64="MV5tXCMxXm4="></div>

으로 Encode하고 Output을

<div class="math-display" data-tex-b64="MV57bStufQ=="></div>

으로 만든다고 하자.

간단한 Algorithm은 Separator <span class="math-inline" data-tex-b64="Iw=="></span>를 지우고 오른쪽 Block을 한 칸 왼쪽으로 이동하는 것이다. 또는 <span class="math-inline" data-tex-b64="Iw=="></span>를 1로 바꾸고 전체 끝의 1 하나를 지우면 합의 길이를 맞출 수 있다.

## 예제: Binary Increment

Binary Number에 1을 더하려면 오른쪽 끝으로 이동한 뒤 Carry를 처리한다.

1. 오른쪽 끝 Blank까지 이동한다.
2. 왼쪽 Symbol이 0이면 1로 바꾸고 Halt한다.
3. 1이면 0으로 바꾸고 왼쪽으로 Carry를 계속한다.
4. 가장 왼쪽까지 모두 1이었다면 새 1을 추가한다.

예를 들어

<div class="math-display" data-tex-b64="MTAxMVxtYXBzdG8xMTAw"></div>

이다.

## Acceptor와 Transducer 관계

Language <span class="math-inline" data-tex-b64="TA=="></span>의 Characteristic Function을

<div class="math-display" data-tex-b64="XGNoaV9MKHcpPVxiZWdpbntjYXNlc30xLCZ3XGluIExcXDAsJndcbm90aW4gTFxlbmR7Y2FzZXN9"></div>

로 정의한다. <span class="math-inline" data-tex-b64="TA=="></span>이 Decidable이면 <span class="math-inline" data-tex-b64="XGNoaV9M"></span>은 Total Computable이다. 반대로 <span class="math-inline" data-tex-b64="XGNoaV9M"></span>을 계산할 수 있으면 결과로 Membership을 판정할 수 있으므로 <span class="math-inline" data-tex-b64="TA=="></span>은 Decidable이다.

## Multi-output와 Tape Convention

Output은 같은 Tape에 남길 수도 있고 별도의 Output Tape를 사용할 수도 있다. 표준 모델이 달라도 적절히 Simulation할 수 있으므로 계산 가능한 함수의 Class는 바뀌지 않는다.

## Partial Computation

Recognizer를 함수 관점에서 보면 Member Input에서는 1을 출력하고 Non-member에서 정의되지 않은 Partial Function으로 볼 수 있다. Loop는 함수가 그 Input에서 Undefined인 상태에 대응한다.

## 정리

- TM은 Language를 판정하거나 String Function을 계산할 수 있다.
- 계산 대상은 먼저 String으로 Encoding한다.
- 모든 Input에서 Halt하면 Total Computable Function이다.
- Decidable Language와 Total Computable Characteristic Function은 서로 대응한다.

## 연습 문제

### 1번

Unary Input <span class="math-inline" data-tex-b64="MTExIzEx"></span>에 Unary Addition Transducer를 적용한 Output을 구한다.

### 2번

Binary Increment Algorithm이 <span class="math-inline" data-tex-b64="MTExMQ=="></span>을 처리하는 과정을 설명한다.

## 풀이

### 1번

왼쪽 수는 3, 오른쪽 수는 2이므로 합은 5이다.

<div class="math-display" data-tex-b64="MTExXCMxMVxtYXBzdG8xMTExMQ=="></div>

### 2번

오른쪽부터 모든 1을 0으로 바꾸며 Carry가 왼쪽 끝을 넘어간다. 맨 앞에 1을 추가하므로

<div class="math-display" data-tex-b64="MTExMVxtYXBzdG8xMDAwMA=="></div>

이다.
