---
title: "25. Chomsky Hierarchy와 Language Class 관계"
description: "Regular부터 Turing-recognizable까지 Grammar와 Machine의 표현력 포함 관계를 대표 Language와 함께 정리한다."
date: "2025-08-30"
category: "계산이론"
tags: ["theory-of-computation", "chomsky-hierarchy", "language-class", "computability"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 25
featured: false
draft: false
---
Chomsky Hierarchy는 Production Rule의 제한에 따라 Grammar와 Language를 네 단계로 분류한다. 아래 단계로 갈수록 Grammar의 제한이 강하고 인식 Machine의 Memory가 단순하다.

## Type 3: Regular Language

Regular Grammar는 Right-linear 또는 Left-linear Production을 가진다. 대응하는 Machine은 Finite Automaton이다.

<div class="math-display" data-tex-b64="XHRleHR7UmVndWxhciBHcmFtbWFyfVxsb25nbGVmdHJpZ2h0YXJyb3dcdGV4dHtGaW5pdGUgQXV0b21hdG9ufQ=="></div>

대표적인 Language는

<div class="math-display" data-tex-b64="XHt3XGluXHswLDFcfV4qXG1pZCB3XHRleHR7IGVuZHMgd2l0aCB9MDFcfQ=="></div>

이다. 유한 State로 필요한 Suffix만 기억하면 된다.

## Type 2: Context-Free Language

Context-Free Grammar는 왼쪽에 Variable 하나를 가진다. 대응하는 Machine은 Nondeterministic PDA이다.

<div class="math-display" data-tex-b64="XHRleHR7Q0ZHfVxsb25nbGVmdHJpZ2h0YXJyb3dcdGV4dHtOUERBfQ=="></div>

대표적인 Language는

<div class="math-display" data-tex-b64="XHthXm5iXm5cbWlkIG5cZ2UwXH0="></div>

이다. a의 개수를 Stack에 저장해야 하므로 Regular하지 않지만 Context-Free이다.

## Type 1: Context-Sensitive Language

Context-Sensitive Grammar는 Production이 일반적으로 String 길이를 줄이지 않도록 제한된다.

<div class="math-display" data-tex-b64="XGFscGhhIEFcYmV0YVxyaWdodGFycm93XGFscGhhXGdhbW1hXGJldGEsXHFxdWFkXGdhbW1hXG5lcVx2YXJlcHNpbG9u"></div>

대응하는 Machine은 Tape 사용량이 Input 길이에 선형으로 제한된 Linear Bounded Automaton(LBA)이다.

대표적인 Language는

<div class="math-display" data-tex-b64="XHthXm5iXm5jXm5cbWlkIG5cZ2UwXH0="></div>

이다. 세 Block의 개수를 동시에 맞춰야 하므로 CFL이 아니다.

## Type 0: Unrestricted Grammar

Production 왼쪽에 Variable이 하나 이상 포함된다는 조건 외에는 거의 제한이 없다. 대응하는 Machine은 Turing Machine이며 Turing-recognizable Language를 생성한다.

<div class="math-display" data-tex-b64="XHRleHR7VW5yZXN0cmljdGVkIEdyYW1tYXJ9XGxvbmdsZWZ0cmlnaHRhcnJvd1x0ZXh0e1R1cmluZy1yZWNvZ25pemFibGV9"></div>

Recognizer는 Non-member Input에서 Loop할 수 있다.

## 포함 관계

<div class="math-display" data-tex-b64="XHRleHR7UmVndWxhcn1cc3Vic2V0bmVxXHRleHR7Q29udGV4dC1GcmVlfVxzdWJzZXRuZXFcdGV4dHtDb250ZXh0LVNlbnNpdGl2ZX1cc3Vic2V0bmVxXHRleHR7VHVyaW5nLXJlY29nbml6YWJsZX0="></div>

각 포함이 Strict하다는 것은 상위 Class에 속하지만 하위 Class에는 속하지 않는 Language가 존재한다는 뜻이다.

- <span class="math-inline" data-tex-b64="XHthXm5iXm5cfQ=="></span>은 CFL이지만 Regular가 아니다.
- <span class="math-inline" data-tex-b64="XHthXm5iXm5jXm5cfQ=="></span>은 Context-Sensitive이지만 CFL이 아니다.
- 일부 Recognizable Language는 Context-Sensitive가 아니다.

## Decidable과 Recognizable 관계

Chomsky Hierarchy와 Computability Class를 함께 볼 때 다음 관계도 중요하다.

<div class="math-display" data-tex-b64="XHRleHR7Q29udGV4dC1TZW5zaXRpdmV9XHN1YnNldGVxXHRleHR7RGVjaWRhYmxlfVxzdWJzZXRuZXFcdGV4dHtUdXJpbmctcmVjb2duaXphYmxlfQ=="></div>

LBA가 사용하는 Configuration 수는 Input 길이에 대해 유한하므로 모든 Branch를 체계적으로 탐색해 Membership을 Decide할 수 있다. 반면 모든 Recognizable Language가 Decidable인 것은 아니다.

<div class="math-display" data-tex-b64="XHRleHR7RGVjaWRhYmxlfVxzdWJzZXRuZXFcdGV4dHtSZWNvZ25pemFibGV9"></div>

## Machine의 Memory 관점

- FA: 유한 State만 사용한다.
- PDA: 하나의 Stack을 사용한다.
- LBA: Input 길이에 비례한 Tape 영역을 사용한다.
- TM: 제한되지 않은 Tape를 사용한다.

Memory가 강해질수록 더 복잡한 의존 관계를 검사할 수 있다.

## 실전에서의 선택

표현력이 강한 모델이 항상 좋은 것은 아니다.

- Regular Language는 빠른 Pattern Matching과 Lexer에 적합하다.
- CFG는 Programming Language Parser에 적합하다.
- Context-Sensitive 제약은 정적 의미 분석의 일부와 관련된다.
- TM은 일반 Algorithm과 Decidability를 연구하는 이론 모델이다.

문제를 가능한 한 낮은 Class로 표현하면 효율적인 Algorithm과 단순한 검증을 얻을 수 있다.

## 전체 연결

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9Clx0ZXh0e1JlZ3VsYXIgR3JhbW1hcn0mXGxlZnRyaWdodGFycm93XHRleHR7RkF9XFwKXHRleHR7Q29udGV4dC1GcmVlIEdyYW1tYXJ9JlxsZWZ0cmlnaHRhcnJvd1x0ZXh0e1BEQX1cXApcdGV4dHtDb250ZXh0LVNlbnNpdGl2ZSBHcmFtbWFyfSZcbGVmdHJpZ2h0YXJyb3dcdGV4dHtMQkF9XFwKXHRleHR7VW5yZXN0cmljdGVkIEdyYW1tYXJ9JlxsZWZ0cmlnaHRhcnJvd1x0ZXh0e1RNfQpcZW5ke2FsaWduZWR9"></div>

## 정리

- Chomsky Hierarchy는 Grammar 제한과 Machine Memory를 연결한다.
- 각 상위 Class는 하위 Class를 포함하지만 일반적으로 더 복잡하다.
- Decidable과 Recognizable의 차이는 모든 Input에서 Halt하는지에 있다.
- Language의 최소 Class를 찾는 일은 필요한 계산 자원을 이해하는 과정이다.

## 연습 문제

### 1번

다음 Language의 가장 작은 가능한 Class를 판단한다.

1. <span class="math-inline" data-tex-b64="XHswXm4xXm1cbWlkIG4sbVxnZTBcfQ=="></span>
2. <span class="math-inline" data-tex-b64="XHswXm4xXm5cbWlkIG5cZ2UwXH0="></span>
3. <span class="math-inline" data-tex-b64="XHswXm4xXm4yXm5cbWlkIG5cZ2UwXH0="></span>

### 2번

Turing-recognizable Language가 반드시 Decidable하지는 않은 이유를 Halting Problem과 연결해 설명한다.

## 풀이

### 1번

1. <span class="math-inline" data-tex-b64="MF4qMV4q"></span>로 나타낼 수 있으므로 Regular이다.
2. Stack으로 개수를 맞출 수 있으므로 Context-Free이고 Pumping Lemma로 Regular가 아님을 보일 수 있다.
3. Context-Free가 아니며 Linear Bounded Automaton으로 세 Block을 표시하며 비교할 수 있으므로 Context-Sensitive이다.

### 2번

<span class="math-inline" data-tex-b64="SEFMVF97VE19"></span>은 TM을 Simulation하다 Halt하면 Accept할 수 있으므로 Recognizable이다. 그러나 Loop하는 경우를 항상 유한 시간에 판정하는 Decider는 존재하지 않으므로 Decidable하지 않다.
