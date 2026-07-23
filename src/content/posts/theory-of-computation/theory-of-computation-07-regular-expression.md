---
title: "7. Regular Expression의 정의와 연산"
description: "Regular Expression의 재귀적 정의와 Union, Concatenation, Kleene Star의 의미 및 Automaton과의 관계를 설명한다."
date: "2025-08-12"
category: "계산이론"
tags: ["theory-of-computation", "regular-expression", "regular-language", "regex"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 7
featured: false
draft: false
---
**Regular Expression(RE)**은 Regular Language를 간결한 식으로 표현하는 방법이다. 문자열을 직접 나열하지 않고 기본 Language와 세 연산을 재귀적으로 조합한다.

## 기본 Regular Expression

Alphabet <span class="math-inline" data-tex-b64="XFNpZ21h"></span> 위에서 다음은 Regular Expression이다.

- <span class="math-inline" data-tex-b64="XHZhcm5vdGhpbmc="></span>은 Empty Language를 나타낸다.
- <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>은 <span class="math-inline" data-tex-b64="XHtcdmFyZXBzaWxvblx9"></span>를 나타낸다.
- 각 <span class="math-inline" data-tex-b64="YVxpblxTaWdtYQ=="></span>는 <span class="math-inline" data-tex-b64="XHthXH0="></span>를 나타낸다.

<span class="math-inline" data-tex-b64="cg=="></span>, <span class="math-inline" data-tex-b64="cw=="></span>가 Regular Expression이면 다음도 Regular Expression이다.

- <span class="math-inline" data-tex-b64="citz"></span> 또는 <span class="math-inline" data-tex-b64="clxtaWQgcw=="></span>: Union
- <span class="math-inline" data-tex-b64="cnM="></span>: Concatenation
- <span class="math-inline" data-tex-b64="cl4q"></span>: Kleene Star

## 의미 함수

Regular Expression <span class="math-inline" data-tex-b64="cg=="></span>이 나타내는 Language를 <span class="math-inline" data-tex-b64="TChyKQ=="></span>로 쓸 수 있다.

<div class="math-display" data-tex-b64="TChyK3MpPUwocilcY3VwIEwocyk="></div>

<div class="math-display" data-tex-b64="TChycyk9TChyKUwocyk="></div>

<div class="math-display" data-tex-b64="TChyXiopPUwocileKg=="></div>

## 연산 우선순위

일반적인 우선순위는 다음과 같다.

1. Kleene Star
2. Concatenation
3. Union

따라서 <span class="math-inline" data-tex-b64="YWJeKitj"></span>는

<div class="math-display" data-tex-b64="KGEoYl4qKSkrYw=="></div>

로 해석한다. 모호함을 줄이기 위해 괄호를 적극적으로 사용하는 것이 좋다.

## 예제

### `01`로 끝나는 Binary String

<div class="math-display" data-tex-b64="KDArMSleKjAx"></div>

앞부분에는 임의의 Binary String이 올 수 있고 마지막 두 Symbol은 반드시 <span class="math-inline" data-tex-b64="MDE="></span>이다.

### 1이 정확히 두 번 나오는 String

<div class="math-display" data-tex-b64="MF4qMTBeKjEwXio="></div>

두 <span class="math-inline" data-tex-b64="MQ=="></span> 사이와 앞뒤에는 0만 임의로 나타날 수 있다.

### 0과 1이 번갈아 나오는 String

Empty String을 포함하고 0 또는 1로 시작할 수 있으므로 한 표현은 다음과 같다.

<div class="math-display" data-tex-b64="KDAxKV4qKFx2YXJlcHNpbG9uKzApKygxMCleKihcdmFyZXBzaWxvbisxKQ=="></div>

## 프로그래밍 정규식과의 차이

실제 Regex Engine은 Backreference, Lookaround 같은 확장 기능을 제공할 수 있다. Backreference가 있는 패턴은 이론적인 Regular Language보다 강한 표현력을 가질 수 있다. 따라서 프로그래밍에서 사용하는 모든 `regex`가 계산이론의 Regular Expression과 정확히 같다고 보면 안 된다.

## Automaton과의 관계

Kleene's Theorem에 의해 다음이 성립한다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyBpcyByZWd1bGFyfVxpZmYgTD1MKHIpXHRleHR7IGZvciBzb21lIFJFIH1y"></div>

<div class="math-display" data-tex-b64="XGlmZiBMPUwoTSlcdGV4dHsgZm9yIHNvbWUgREZBL05GQSB9TQ=="></div>

Regular Expression을 ε-NFA로 변환할 때에는 기본 조각을 만들고 Union, Concatenation, Star에 맞게 ε-transition으로 연결한다. 반대로 Automaton은 State Elimination이나 Arden's Theorem으로 RE로 변환할 수 있다.

## 흔한 실수

- <span class="math-inline" data-tex-b64="cl4q"></span>는 <span class="math-inline" data-tex-b64="cg=="></span>을 0번 반복하는 경우도 포함한다.
- <span class="math-inline" data-tex-b64="XHZhcm5vdGhpbmdeKj1ce1x2YXJlcHNpbG9uXH0="></span>이다. 반복할 String은 없지만 0번 반복 결과는 존재한다.
- <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25eKj1ce1x2YXJlcHNpbG9uXH0="></span>이다.
- <span class="math-inline" data-tex-b64="KGErYileKg=="></span>와 <span class="math-inline" data-tex-b64="YV4qK2JeKg=="></span>는 다르다. 전자는 <span class="math-inline" data-tex-b64="YQ=="></span>, <span class="math-inline" data-tex-b64="Yg=="></span>가 임의 순서로 섞일 수 있다.

## 정리

- RE는 Empty Language, Empty String, Symbol에서 시작해 Union·Concatenation·Star로 구성한다.
- RE와 Finite Automaton은 정확히 Regular Language를 표현한다.
- 이론적 RE와 실제 Regex Engine의 확장 기능을 구분해야 한다.

## 연습 문제

### 1번

Binary String 중 길이가 2의 배수인 모든 String을 나타내는 RE를 작성한다.

### 2번

Binary String 중 `00`을 포함하지 않는 String을 나타내는 RE를 작성한다.

## 풀이

### 1번

두 Symbol을 한 묶음으로 반복하면 된다.

<div class="math-display" data-tex-b64="KCgwKzEpKDArMSkpXio="></div>

### 2번

0 뒤에는 반드시 1이 오거나 String이 끝나야 한다. 다음 표현이 가능하다.

<div class="math-display" data-tex-b64="KDErMDEpXiooXHZhcmVwc2lsb24rMCk="></div>

각 반복 블록은 <span class="math-inline" data-tex-b64="MQ=="></span> 또는 <span class="math-inline" data-tex-b64="MDE="></span>이고 마지막에 0 하나가 선택적으로 올 수 있으므로 연속된 00이 생기지 않는다.
