---
title: "8. Arden’s Theorem과 Automata 변환"
description: "Language Equation을 푸는 Arden’s Theorem을 직관적으로 이해하고 Finite Automaton을 Regular Expression으로 변환한다."
date: "2025-08-13"
category: "계산이론"
tags: ["theory-of-computation", "arden-theorem", "regular-expression", "automata-conversion"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 8
featured: false
draft: false
---
Finite Automaton의 각 State에서 Accept State까지 갈 수 있는 String의 집합을 변수로 두면 Language Equation을 만들 수 있다. <strong>Arden’s Theorem</strong>은 반복 구조가 포함된 이 방정식을 푸는 도구이다.

## Theorem

Language <span class="math-inline" data-tex-b64="QQ=="></span>, <span class="math-inline" data-tex-b64="Qg=="></span>, 미지 Language <span class="math-inline" data-tex-b64="WA=="></span>에 대해

<div class="math-display" data-tex-b64="WD1BWFxjdXAgQg=="></div>

이고 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25cbm90aW4gQQ=="></span>이면 유일한 해는

<div class="math-display" data-tex-b64="WD1BXipC"></div>

이다.

오른쪽 반복이 나타나는 형태

<div class="math-display" data-tex-b64="WD1YQVxjdXAgQg=="></div>

의 해는

<div class="math-display" data-tex-b64="WD1CQV4q"></div>

이다.

## 왜 <span class="math-inline" data-tex-b64="QV4qQg=="></span>인가

식에 반복 대입해 본다.

<div class="math-display" data-tex-b64="WD1BWFxjdXAgQg=="></div>

<div class="math-display" data-tex-b64="PUEoQVhcY3VwIEIpXGN1cCBCPUFeMlhcY3VwIEFCXGN1cCBC"></div>

계속 반복하면

<div class="math-display" data-tex-b64="WD1BXm5YXGN1cCBBXntuLTF9QlxjdXBcY2RvdHNcY3VwIEFCXGN1cCBC"></div>

가 된다. 반복 부분을 모두 모으면

<div class="math-display" data-tex-b64="QlxjdXAgQUJcY3VwIEFeMkJcY3VwXGNkb3RzPUFeKkI="></div>

이다.

## <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25cbm90aW4gQQ=="></span> 조건

<span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25caW4gQQ=="></span>이면 <span class="math-inline" data-tex-b64="WD1BWFxjdXAgQg=="></span>를 만족하는 해가 여러 개일 수 있다. 예를 들어 <span class="math-inline" data-tex-b64="QT1ce1x2YXJlcHNpbG9uXH0="></span>, <span class="math-inline" data-tex-b64="Qj1cdmFybm90aGluZw=="></span>이면 방정식은 <span class="math-inline" data-tex-b64="WD1Y"></span>가 되어 모든 Language가 해이다. 따라서 유일성을 위해 조건이 필요하다.

## State Equation 작성법

DFA의 각 State <span class="math-inline" data-tex-b64="cV9p"></span>에 대해 변수 <span class="math-inline" data-tex-b64="Ul9p"></span>를 둔다. <span class="math-inline" data-tex-b64="Ul9p"></span>는 State <span class="math-inline" data-tex-b64="cV9p"></span>에서 시작하여 Accept State에 도달하게 하는 String의 Language이다.

State <span class="math-inline" data-tex-b64="cV9p"></span>에서 Symbol <span class="math-inline" data-tex-b64="YQ=="></span>로 <span class="math-inline" data-tex-b64="cV9q"></span>로 간다면 <span class="math-inline" data-tex-b64="YVJfag=="></span>가 식에 포함된다. <span class="math-inline" data-tex-b64="cV9p"></span> 자체가 Accept State라면 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>도 포함한다.

## 예제

두 State <span class="math-inline" data-tex-b64="cV8w"></span>, <span class="math-inline" data-tex-b64="cV8x"></span>이 있고

- <span class="math-inline" data-tex-b64="cV8w"></span>에서 0은 <span class="math-inline" data-tex-b64="cV8w"></span>, 1은 <span class="math-inline" data-tex-b64="cV8x"></span>로 이동한다.
- <span class="math-inline" data-tex-b64="cV8x"></span>에서 0과 1은 모두 <span class="math-inline" data-tex-b64="cV8x"></span>에 남는다.
- <span class="math-inline" data-tex-b64="cV8x"></span>이 Accept State이다.

State Equation은

<div class="math-display" data-tex-b64="Ul8wPTBSXzBcY3VwMVJfMQ=="></div>

<div class="math-display" data-tex-b64="Ul8xPSgwKzEpUl8xXGN1cFx2YXJlcHNpbG9u"></div>

이다.

두 번째 식에 Arden’s Theorem을 적용하면

<div class="math-display" data-tex-b64="Ul8xPSgwKzEpXio="></div>

이다. 첫 번째 식은

<div class="math-display" data-tex-b64="Ul8wPTBSXzBcY3VwMSgwKzEpXio="></div>

이므로

<div class="math-display" data-tex-b64="Ul8wPTBeKjEoMCsxKV4q"></div>

이다. 이는 적어도 하나의 1을 포함하는 Binary String의 Language이다.

## 다른 변환 방법

- Thompson Construction은 RE를 ε-NFA로 바꾼다.
- Subset Construction은 NFA를 DFA로 바꾼다.
- State Elimination은 Automaton을 Generalized NFA로 보고 State를 제거해 RE를 구한다.
- Arden’s Theorem은 State Equation을 대수적으로 해결한다.

## 정리

- Arden’s Theorem은 <span class="math-inline" data-tex-b64="WD1BWFxjdXAgQg=="></span> 꼴의 Language Equation을 푼다.
- <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25cbm90aW4gQQ=="></span>이면 유일한 해는 <span class="math-inline" data-tex-b64="QV4qQg=="></span>이다.
- Automaton의 State마다 Accept까지의 Language를 변수로 두면 RE를 계산할 수 있다.

## 연습 문제

### 1번

다음 Language Equation을 푼다.

<div class="math-display" data-tex-b64="WD1hWFxjdXAgYg=="></div>

### 2번

다음 연립 Language Equation을 순서대로 해결한다.

<div class="math-display" data-tex-b64="Ul8wPTBSXzBcY3VwMVJfMSxccXF1YWQgUl8xPTFSXzFcY3VwXHZhcmVwc2lsb24="></div>

## 풀이

### 1번

<span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25cbm90aW5ce2FcfQ=="></span>이므로 Arden’s Theorem을 적용한다.

<div class="math-display" data-tex-b64="WD1hXipi"></div>

### 2번

먼저

<div class="math-display" data-tex-b64="Ul8xPTFeKg=="></div>

이다. 이를 첫 식에 대입하면

<div class="math-display" data-tex-b64="Ul8wPTBSXzBcY3VwMTFeKg=="></div>

이므로

<div class="math-display" data-tex-b64="Ul8wPTBeKjExXio="></div>

이다.
