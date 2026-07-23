---
title: "10. Regular Language의 Closure Property"
description: "Product Automaton과 기존 표현의 조합을 이용해 Regular Language가 여러 연산에 대해 닫혀 있음을 설명한다."
date: "2025-08-15"
category: "계산이론"
tags: ["theory-of-computation", "regular-language", "closure-property", "product-automaton"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 10
featured: false
draft: false
---
Language Class가 어떤 연산에 <strong>닫혀 있다</strong>는 말은 그 Class의 Language에 연산을 적용한 결과도 항상 같은 Class에 속한다는 뜻이다. Closure Property는 새로운 Language가 Regular인지 직접 Automaton을 설계하지 않고 판단하는 데 유용하다.

## Union

<span class="math-inline" data-tex-b64="TF8x"></span>, <span class="math-inline" data-tex-b64="TF8y"></span>가 Regular이면 각각을 인식하는 NFA를 준비하고 새로운 Start State에서 두 NFA의 Start State로 ε-transition을 연결한다. 어느 한쪽이 Accept하면 되므로 결과는 <span class="math-inline" data-tex-b64="TF8xXGN1cCBMXzI="></span>를 인식한다.

따라서 Regular Language는 Union에 대해 닫혀 있다.

## Intersection과 Product Automaton

DFA <span class="math-inline" data-tex-b64="TV8x"></span>, <span class="math-inline" data-tex-b64="TV8y"></span>의 State를 동시에 추적한다. Product State는

<div class="math-display" data-tex-b64="UV8xXHRpbWVzIFFfMg=="></div>

이다. Transition은

<div class="math-display" data-tex-b64="XGRlbHRhKChwLHEpLGEpPShcZGVsdGFfMShwLGEpLFxkZWx0YV8yKHEsYSkp"></div>

로 정의한다.

Intersection을 인식하려면 Accept State를

<div class="math-display" data-tex-b64="Rj1GXzFcdGltZXMgRl8y"></div>

로 둔다. 두 DFA가 모두 Accept해야 한다.

Union은 둘 중 하나만 Accept하면 되므로

<div class="math-display" data-tex-b64="Rj0oRl8xXHRpbWVzIFFfMilcY3VwKFFfMVx0aW1lcyBGXzIp"></div>

로 둔다.

## Complement

Complete DFA에서 Accept State와 Non-accept State를 서로 바꾸면 Complement를 인식한다.

<div class="math-display" data-tex-b64="Ric9US1G"></div>

Transition이 빠진 DFA라면 먼저 Dead State를 추가해 Complete DFA로 만들어야 한다.

## Difference

Difference는 Intersection과 Complement로 표현한다.

<div class="math-display" data-tex-b64="TF8xLUxfMj1MXzFcY2FwXG92ZXJsaW5le0xfMn0="></div>

따라서 Difference에도 닫혀 있다.

## Concatenation과 Kleene Star

Concatenation은 첫 NFA의 Accept State에서 두 번째 NFA의 Start State로 ε-transition을 연결한다.

Star는 새로운 Start·Accept State를 만들고 원래 NFA를 0번 사용할 경로와 반복할 경로를 ε-transition으로 연결한다.

따라서 Regular Language는 Concatenation과 Kleene Star에도 닫혀 있다.

## Reversal

NFA의 모든 Transition 방향을 뒤집고, 기존 Accept State들로 ε-transition하는 새로운 Start State를 만든다. 기존 Start State를 유일한 Accept State로 바꾸면 Reversal Language를 인식할 수 있다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyByZWd1bGFyfVxSaWdodGFycm93IExeUlx0ZXh0eyByZWd1bGFyfQ=="></div>

## Homomorphism

Homomorphism <span class="math-inline" data-tex-b64="aDpcU2lnbWFeKlxyaWdodGFycm93XEdhbW1hXio="></span>는 Symbol을 String으로 바꾸고 Concatenation을 보존한다.

<div class="math-display" data-tex-b64="aCh4eSk9aCh4KWgoeSk="></div>

Regular Expression의 각 Symbol을 <span class="math-inline" data-tex-b64="aChhKQ=="></span>로 치환하면 <span class="math-inline" data-tex-b64="aChMKQ=="></span>의 RE를 얻을 수 있으므로 Regular Language는 Homomorphism에도 닫혀 있다.

## Closure를 이용한 증명

어떤 Language <span class="math-inline" data-tex-b64="TA=="></span>가 Regular이라고 가정하고, 이미 Regular인 Language <span class="math-inline" data-tex-b64="Ug=="></span>과 Intersection하여 알려진 Non-Regular Language가 나오게 만들면 모순을 얻을 수 있다.

예를 들어 복잡한 Language가 Regular이라고 가정한 뒤

<div class="math-display" data-tex-b64="TFxjYXAgYV4qYl4q"></div>

가 <span class="math-inline" data-tex-b64="XHthXm5iXm5cbWlkIG5cZ2UwXH0="></span>이 되도록 구성하면 Non-Regular임을 보일 수 있다.

## 정리

Regular Language는 다음 연산에 대해 닫혀 있다.

- Union, Intersection, Complement, Difference
- Concatenation, Kleene Star
- Reversal
- Homomorphism과 Inverse Homomorphism

Closure Property는 Language를 구성하거나 Non-Regular 증명을 보조하는 도구이다.

## 연습 문제

### 1번

<span class="math-inline" data-tex-b64="TF8x"></span>, <span class="math-inline" data-tex-b64="TF8y"></span>가 Regular일 때 <span class="math-inline" data-tex-b64="TF8xXHRyaWFuZ2xlIExfMg=="></span>가 Regular임을 보인다. Symmetric Difference는 정확히 한 Language에만 속하는 String의 집합이다.

### 2번

Complete DFA에서 단순히 Accept State를 뒤집으면 Complement가 되는 이유를 설명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="TF8xXHRyaWFuZ2xlIExfMj0oTF8xLUxfMilcY3VwKExfMi1MXzEp"></div>

이다. Regular Language는 Difference와 Union에 대해 닫혀 있으므로 결과도 Regular이다.

### 2번

Complete DFA는 모든 Input에 대해 정확히 하나의 최종 State에 도달한다. 원래 Accept였던 경우만 Reject하고 원래 Reject였던 경우만 Accept하도록 State 표시를 뒤집으면 <span class="math-inline" data-tex-b64="XFNpZ21hXiotTA=="></span>을 정확히 인식한다.
