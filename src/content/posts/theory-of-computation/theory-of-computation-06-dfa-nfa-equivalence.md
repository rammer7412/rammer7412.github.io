---
title: "6. DFA와 NFA의 동등성"
description: "Subset Construction을 통해 NFA의 가능한 State Set을 DFA State로 바꾸는 원리와 ε-transition 처리를 설명한다."
date: "2025-08-11"
category: "계산이론"
tags: ["theory-of-computation", "dfa", "nfa", "subset-construction"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 6
featured: false
draft: false
---
NFA는 한 순간에 여러 State에 있을 수 있고 DFA는 정확히 하나의 State에 있어야 한다. 두 모델의 동등성을 보이려면 NFA의 <strong>현재 가능한 State 전체</strong>를 DFA의 하나의 State로 표현하면 된다. 이 방법을 Subset Construction 또는 Powerset Construction이라고 한다.

## 핵심 아이디어

NFA의 State Set이

<div class="math-display" data-tex-b64="UT1ce3FfMCxxXzEscV8yXH0="></div>

이면 변환된 DFA의 State는 <span class="math-inline" data-tex-b64="UQ=="></span>의 부분집합이다.

<div class="math-display" data-tex-b64="XG1hdGhjYWx7UH0oUSk9XHtcdmFybm90aGluZyxce3FfMFx9LFx7cV8xXH0sXGxkb3RzLFx7cV8wLHFfMSxxXzJcfVx9"></div>

DFA State <span class="math-inline" data-tex-b64="XHtxXzAscV8yXH0="></span>는 NFA가 현재 <span class="math-inline" data-tex-b64="cV8w"></span> 또는 <span class="math-inline" data-tex-b64="cV8y"></span>에 있을 가능성을 동시에 나타낸다.

## ε-transition이 없는 경우

NFA <span class="math-inline" data-tex-b64="Tj0oUSxcU2lnbWEsXGRlbHRhLHFfMCxGKQ=="></span>에서 DFA <span class="math-inline" data-tex-b64="RA=="></span>를 다음과 같이 만든다.

- DFA State Set은 <span class="math-inline" data-tex-b64="XG1hdGhjYWx7UH0oUSk="></span>의 도달 가능한 부분이다.
- Start State는 <span class="math-inline" data-tex-b64="XHtxXzBcfQ=="></span>이다.
- State Set <span class="math-inline" data-tex-b64="Uw=="></span>에서 Symbol <span class="math-inline" data-tex-b64="YQ=="></span>를 읽은 다음 State는

<div class="math-display" data-tex-b64="XGRlbHRhX0QoUyxhKT1cYmlnY3VwX3txXGluIFN9XGRlbHRhX04ocSxhKQ=="></div>

이다.

- <span class="math-inline" data-tex-b64="U1xjYXAgRlxuZXFcdmFybm90aGluZw=="></span>이면 <span class="math-inline" data-tex-b64="Uw=="></span>는 DFA의 Accept State이다.

## 예제

NFA가 다음 Transition을 가진다고 하자.

<div class="math-display" data-tex-b64="XGRlbHRhKHFfMCwwKT1ce3FfMCxxXzFcfSxccXVhZCBcZGVsdGEocV8wLDEpPVx7cV8wXH0="></div>

<div class="math-display" data-tex-b64="XGRlbHRhKHFfMSwxKT1ce3FfMlx9LFxxdWFkIFxkZWx0YShxXzEsMCk9XHZhcm5vdGhpbmc="></div>

<span class="math-inline" data-tex-b64="cV8y"></span>가 Accept State라고 한다.

DFA Start State는 <span class="math-inline" data-tex-b64="XHtxXzBcfQ=="></span>이다.

<div class="math-display" data-tex-b64="XGRlbHRhX0QoXHtxXzBcfSwwKT1ce3FfMCxxXzFcfQ=="></div>

<div class="math-display" data-tex-b64="XGRlbHRhX0QoXHtxXzAscV8xXH0sMSk9XHtxXzAscV8yXH0="></div>

<span class="math-inline" data-tex-b64="XHtxXzAscV8yXH0="></span>에는 Accept State <span class="math-inline" data-tex-b64="cV8y"></span>가 포함되므로 DFA에서도 Accept State이다.

## ε-transition이 있는 경우

Start State부터 ε-transition으로 여러 State에 갈 수 있으므로 DFA Start State는 단순한 <span class="math-inline" data-tex-b64="XHtxXzBcfQ=="></span>가 아니라

<div class="math-display" data-tex-b64="U18wPUUoXHtxXzBcfSk="></div>

이다.

Transition도 Symbol을 읽은 뒤 ε-closure를 다시 적용한다.

<div class="math-display" data-tex-b64="XGRlbHRhX0QoUyxhKT1FXGxlZnQoXGJpZ2N1cF97cVxpbiBTfVxkZWx0YV9OKHEsYSlccmlnaHQp"></div>

이 과정을 통해 ε-transition이 숨겨진 도달 가능성까지 모두 포함한다.

## 정확성의 직관

입력 Prefix <span class="math-inline" data-tex-b64="dw=="></span>를 읽은 뒤 DFA가 State Set <span class="math-inline" data-tex-b64="Uw=="></span>에 있다는 것은 NFA가 <span class="math-inline" data-tex-b64="dw=="></span>를 읽은 뒤 도달할 수 있는 모든 State의 집합이 정확히 <span class="math-inline" data-tex-b64="Uw=="></span>라는 뜻이다. 이를 String 길이에 대한 Induction으로 증명할 수 있다.

Base Case에서 <span class="math-inline" data-tex-b64="dz1cdmFyZXBzaWxvbg=="></span>이면 Start closure가 일치한다. Inductive Step에서는 다음 Symbol에 대한 NFA의 모든 Transition을 Union하고 closure를 적용하므로 가능한 State가 정확히 보존된다.

## State Explosion

NFA State가 <span class="math-inline" data-tex-b64="bg=="></span>개이면 DFA State 후보는 최대 <span class="math-inline" data-tex-b64="Ml5u"></span>개이다. 실제로 모두 도달하지는 않을 수 있지만 어떤 Language에서는 지수적으로 많은 State가 필요하다.

이는 NFA가 DFA보다 더 강하다는 뜻이 아니라 같은 정보를 더 압축하여 표현할 수 있다는 뜻이다.

## 동등성 결론

DFA는 NFA의 특수한 경우이므로 DFA가 인식하는 Language는 NFA도 인식할 수 있다. 반대로 Subset Construction으로 모든 NFA를 DFA로 바꿀 수 있다.

<div class="math-display" data-tex-b64="XHRleHR7REZBLXJlY29nbml6YWJsZX09XHRleHR7TkZBLXJlY29nbml6YWJsZX09XHRleHR7UmVndWxhciBMYW5ndWFnZX0="></div>

## 정리

- DFA State 하나가 NFA의 State Set을 나타낸다.
- Accept State가 하나라도 포함된 Set은 DFA의 Accept State이다.
- ε-NFA에서는 매 단계 ε-closure를 적용한다.
- NFA와 DFA의 표현력은 같지만 State 수는 크게 달라질 수 있다.

## 연습 문제

### 1번

NFA State Set이 <span class="math-inline" data-tex-b64="XHtwLHFcfQ=="></span>이고

<div class="math-display" data-tex-b64="XGRlbHRhKHAsYSk9XHtwLHJcfSxccXF1YWRcZGVsdGEocSxhKT1ce3JcfQ=="></div>

일 때 Subset Construction의 다음 DFA State를 구한다.

### 2번

NFA의 Accept State가 <span class="math-inline" data-tex-b64="cg=="></span>일 때 다음 DFA State 중 Accept State를 모두 고른다.

<div class="math-display" data-tex-b64="XHZhcm5vdGhpbmcsXHF1YWRce3BcfSxccXVhZFx7cSxyXH0sXHF1YWRce3AscSxyXH0="></div>

## 풀이

### 1번

각 State에서 <span class="math-inline" data-tex-b64="YQ=="></span>로 이동한 결과를 Union한다.

<div class="math-display" data-tex-b64="XHtwLHJcfVxjdXBce3JcfT1ce3Asclx9"></div>

### 2번

<span class="math-inline" data-tex-b64="cg=="></span>을 포함하는 <span class="math-inline" data-tex-b64="XHtxLHJcfQ=="></span>, <span class="math-inline" data-tex-b64="XHtwLHEsclx9"></span>가 Accept State이다.
