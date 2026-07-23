---
title: "4. DFA의 정의와 문자열 인식"
description: "현재 State만으로 다음 동작이 결정되는 DFA의 구성, Extended Transition과 Acceptance를 단계별로 설명한다."
date: "2025-08-09"
category: "계산이론"
tags: ["theory-of-computation", "dfa", "finite-automata", "regular-language"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 4
featured: false
draft: false
---
<strong>Deterministic Finite Automaton(DFA)</strong>은 입력을 왼쪽에서 오른쪽으로 한 Symbol씩 읽으며 State를 바꾸는 계산 모델이다. 기억장치는 유한한 State뿐이므로 과거 입력 전체가 아니라 현재 판단에 필요한 정보만 State에 요약한다.

## 형식적 정의

DFA는 다음 5-tuple로 정의한다.

<div class="math-display" data-tex-b64="TT0oUSxcU2lnbWEsXGRlbHRhLHFfMCxGKQ=="></div>

- <span class="math-inline" data-tex-b64="UQ=="></span>: 유한한 State 집합이다.
- <span class="math-inline" data-tex-b64="XFNpZ21h"></span>: Input Alphabet이다.
- <span class="math-inline" data-tex-b64="XGRlbHRhOlFcdGltZXNcU2lnbWFccmlnaHRhcnJvdyBR"></span>: Transition Function이다.
- <span class="math-inline" data-tex-b64="cV8wXGluIFE="></span>: Start State이다.
- <span class="math-inline" data-tex-b64="RlxzdWJzZXRlcSBR"></span>: Accept State의 집합이다.

Deterministic라는 말은 현재 State와 읽은 Symbol이 정해지면 다음 State가 정확히 하나로 정해진다는 뜻이다.

## 예제: 1의 개수가 짝수인 String

<span class="math-inline" data-tex-b64="XFNpZ21hPVx7MCwxXH0="></span>이고 다음 State를 둔다.

- <span class="math-inline" data-tex-b64="cV9l"></span>: 지금까지 읽은 1의 개수가 짝수이다.
- <span class="math-inline" data-tex-b64="cV9v"></span>: 지금까지 읽은 1의 개수가 홀수이다.

Transition은 다음과 같다.

| 현재 State | 입력 0 | 입력 1 |
|---|---|---|
| <span class="math-inline" data-tex-b64="cV9l"></span> | <span class="math-inline" data-tex-b64="cV9l"></span> | <span class="math-inline" data-tex-b64="cV9v"></span> |
| <span class="math-inline" data-tex-b64="cV9v"></span> | <span class="math-inline" data-tex-b64="cV9v"></span> | <span class="math-inline" data-tex-b64="cV9l"></span> |

Start State와 Accept State는 <span class="math-inline" data-tex-b64="cV9l"></span>이다.

입력 <span class="math-inline" data-tex-b64="MTAxMTA="></span>을 읽으면 State Sequence는

<div class="math-display" data-tex-b64="cV9lXHhyaWdodGFycm93ezF9cV9vXHhyaWdodGFycm93ezB9cV9vXHhyaWdodGFycm93ezF9cV9lXHhyaWdodGFycm93ezF9cV9vXHhyaWdodGFycm93ezB9cV9v"></div>

이다. 마지막 State가 Accept State가 아니므로 Reject한다.

## Extended Transition Function

원래 Transition Function은 Symbol 하나를 읽는다. String 전체에 대한 동작은 Extended Transition Function <span class="math-inline" data-tex-b64="XGRlbHRhXio="></span>로 나타낸다.

<div class="math-display" data-tex-b64="XGRlbHRhXioocSxcdmFyZXBzaWxvbik9cQ=="></div>

<div class="math-display" data-tex-b64="XGRlbHRhXioocSx3YSk9XGRlbHRhKFxkZWx0YV4qKHEsdyksYSk="></div>

String <span class="math-inline" data-tex-b64="dw=="></span>를 Accept하는 조건은 다음과 같다.

<div class="math-display" data-tex-b64="XGRlbHRhXioocV8wLHcpXGluIEY="></div>

DFA가 인식하는 Language는

<div class="math-display" data-tex-b64="TChNKT1ce3dcaW5cU2lnbWFeKlxtaWRcZGVsdGFeKihxXzAsdylcaW4gRlx9"></div>

이다.

## State가 의미하는 정보

좋은 DFA 설계는 각 State가 어떤 과거 정보를 나타내는지 먼저 정하는 것에서 시작한다. 예를 들어 `01`로 끝나는 String을 인식하려면 다음 정보가 필요하다.

- 아직 유용한 Suffix가 없다.
- 마지막 Symbol이 0이다.
- 마지막 두 Symbol이 01이다.

전체 입력을 저장할 필요는 없고 앞으로 Acceptance를 판단하는 데 필요한 Suffix만 State로 나타내면 된다.

## Dead State

한번 들어가면 어떤 입력을 읽어도 Accept State로 갈 수 없는 State를 Dead State 또는 Trap State라고 한다. 특정 형식을 위반한 뒤 회복할 수 없는 Language에서 자주 사용한다.

예를 들어 0이 나온 뒤에는 1만 나와야 하는 Language <span class="math-inline" data-tex-b64="MF4qMV4q"></span>에서 1을 읽은 뒤 다시 0이 나오면 Dead State로 이동할 수 있다.

## 완전한 Transition Function

DFA의 <span class="math-inline" data-tex-b64="XGRlbHRh"></span>는 모든 <span class="math-inline" data-tex-b64="KHEsYSlcaW4gUVx0aW1lc1xTaWdtYQ=="></span>에 대해 정의되어야 한다. Diagram에서 Transition이 빠져 있다면 명시되지 않은 입력을 처리하는 Dead State가 생략되었을 수 있다.

## 정리

- DFA는 유한한 State를 이용해 String을 인식한다.
- 현재 State와 Input Symbol은 다음 State를 유일하게 결정한다.
- Acceptance는 입력을 모두 읽은 뒤 Accept State에 있는지로 판단한다.
- State는 과거 입력 중 앞으로 필요한 정보의 요약이다.

## 연습 문제

### 1번

Binary String 중 `01`로 끝나는 String을 인식하는 DFA의 State 의미와 Transition Table을 작성한다.

### 2번

위의 1의 개수 짝수 DFA가 <span class="math-inline" data-tex-b64="MTEwMTA="></span>, <span class="math-inline" data-tex-b64="MTExMQ=="></span>, <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>을 Accept하는지 판단한다.

## 풀이

### 1번

State를 다음처럼 둔다.

- <span class="math-inline" data-tex-b64="cV8w"></span>: 유용한 Suffix가 없다.
- <span class="math-inline" data-tex-b64="cV8x"></span>: 마지막 Symbol이 0이다.
- <span class="math-inline" data-tex-b64="cV8y"></span>: 마지막 두 Symbol이 01이다.

| 현재 State | 0 | 1 |
|---|---|---|
| <span class="math-inline" data-tex-b64="cV8w"></span> | <span class="math-inline" data-tex-b64="cV8x"></span> | <span class="math-inline" data-tex-b64="cV8w"></span> |
| <span class="math-inline" data-tex-b64="cV8x"></span> | <span class="math-inline" data-tex-b64="cV8x"></span> | <span class="math-inline" data-tex-b64="cV8y"></span> |
| <span class="math-inline" data-tex-b64="cV8y"></span> | <span class="math-inline" data-tex-b64="cV8x"></span> | <span class="math-inline" data-tex-b64="cV8w"></span> |

<span class="math-inline" data-tex-b64="cV8y"></span>만 Accept State이다.

### 2번

<span class="math-inline" data-tex-b64="MTEwMTA="></span>에는 1이 3개이므로 Reject한다. <span class="math-inline" data-tex-b64="MTExMQ=="></span>에는 1이 4개이므로 Accept한다. <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>에는 1이 0개이고 0은 짝수이므로 Start State <span class="math-inline" data-tex-b64="cV9l"></span>에서 그대로 Accept한다.
