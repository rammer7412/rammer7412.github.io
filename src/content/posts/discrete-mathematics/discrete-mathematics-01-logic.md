---
title: "1. Propositional Logic과 Predicate Logic"
description: "명제, 논리 연산자, 진리표, 논리적 동치와 조건명제를 살펴보고 Predicate와 Quantifier로 표현 범위를 확장한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "propositional-logic", "predicate-logic", "truth-table", "quantifier"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 1
featured: false
draft: false
---

논리는 수학적 주장을 정확하게 표현하고, 그 주장이 언제 참인지 판단하기 위한 언어이다. 가장 기본적인 Propositional Logic은 문장 전체를 하나의 참·거짓 단위로 다루고, Predicate Logic은 문장 안의 대상과 성질까지 표현한다.

## 명제와 진릿값

<strong>명제(proposition)</strong>는 참인지 거짓인지 분명하게 판정할 수 있는 문장이다. 예를 들어 “2는 짝수이다”는 참인 명제이고, “9는 소수이다”는 거짓인 명제이다.

반면 다음 표현은 그 자체만으로 명제가 아니다.

- “이 수는 크다”처럼 기준이 불분명한 문장
- “문을 닫아라”와 같은 명령문
- <span class="math-inline" data-tex-b64="eCt5PjA="></span>처럼 변수의 값이 정해지지 않은 문장

마지막 식은 변수의 값이나 범위가 주어질 때 명제가 된다. 이처럼 변수에 따라 참과 거짓이 달라지는 표현을 뒤에서 Predicate로 다룬다.

## 논리 연산자

명제를 <span class="math-inline" data-tex-b64="cA=="></span>, <span class="math-inline" data-tex-b64="cQ=="></span>라고 할 때 자주 사용하는 논리 연산자는 다음과 같다.

- <span class="math-inline" data-tex-b64="XG5lZyBw"></span>: <span class="math-inline" data-tex-b64="cA=="></span>가 아니다. Negation
- <span class="math-inline" data-tex-b64="cFxsYW5kIHE="></span>: <span class="math-inline" data-tex-b64="cA=="></span>이고 <span class="math-inline" data-tex-b64="cQ=="></span>이다. Conjunction
- <span class="math-inline" data-tex-b64="cFxsb3IgcQ=="></span>: <span class="math-inline" data-tex-b64="cA=="></span>이거나 <span class="math-inline" data-tex-b64="cQ=="></span>이다. Disjunction
- <span class="math-inline" data-tex-b64="cFxvcGx1cyBx"></span>: 둘 중 정확히 하나만 참이다. Exclusive OR

논리합 <span class="math-inline" data-tex-b64="cFxsb3IgcQ=="></span>는 보통 inclusive OR이다. 즉 두 명제가 모두 참인 경우도 참에 포함한다. XOR는 두 명제의 진릿값이 다를 때만 참이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FycmF5fXtjfGN8Y3xjfGN9CnAmcSZwXGxhbmQgcSZwXGxvciBxJnBcb3BsdXMgcVxcIFxobGluZQpUJlQmVCZUJkZcXApUJkYmRiZUJlRcXApGJlQmRiZUJlRcXApGJkYmRiZGJkYKXGVuZHthcnJheX0="></div>

## 진리표와 논리적 동치

복합 명제의 모든 경우를 나열한 표를 <strong>진리표(truth table)</strong>라고 한다. 두 논리식의 마지막 열이 모든 행에서 같으면 두 식은 <strong>논리적으로 동치</strong>이다.

<div class="math-display" data-tex-b64="cFxvcGx1cyBxXGVxdWl2IChwXGxvciBxKVxsYW5kXG5lZyhwXGxhbmQgcSk="></div>

대표적인 동치 법칙은 다음과 같다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CnBcbGFuZCBUJlxlcXVpdiBwLCAmIHBcbG9yIEYmXGVxdWl2IHAgJiZcdGV4dHtJZGVudGl0eX1cXApwXGxvciBwJlxlcXVpdiBwLCAmIHBcbGFuZCBwJlxlcXVpdiBwICYmXHRleHR7SWRlbXBvdGVudH1cXApwXGxvciBxJlxlcXVpdiBxXGxvciBwLCAmIHBcbGFuZCBxJlxlcXVpdiBxXGxhbmQgcCAmJlx0ZXh0e0NvbW11dGF0aXZlfVxcClxuZWdcbmVnIHAmXGVxdWl2IHAgJiYmXHRleHR7RG91YmxlIG5lZ2F0aW9ufVxcClxuZWcocFxsYW5kIHEpJlxlcXVpdiBcbmVnIHBcbG9yXG5lZyBxLCAmJiZcdGV4dHtEZSBNb3JnYW59XFwKXG5lZyhwXGxvciBxKSZcZXF1aXYgXG5lZyBwXGxhbmRcbmVnIHEuICYmJlx0ZXh0e0RlIE1vcmdhbn0KXGVuZHthbGlnbmVkfQ=="></div>

분배법칙과 흡수법칙도 식을 간소화할 때 자주 사용한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CnBcbG9yKHFcbGFuZCByKSZcZXF1aXYocFxsb3IgcSlcbGFuZChwXGxvciByKSxcXApwXGxhbmQocVxsb3IgcikmXGVxdWl2KHBcbGFuZCBxKVxsb3IocFxsYW5kIHIpLFxcCnBcbG9yKHBcbGFuZCBxKSZcZXF1aXYgcCxcXApwXGxhbmQocFxsb3IgcSkmXGVxdWl2IHAuClxlbmR7YWxpZ25lZH0="></div>

## 진리표에서 논리식 만들기

진리표의 출력이 참인 행마다 그 행을 정확히 나타내는 논리곱을 만들고, 이들을 논리합으로 연결하면 원하는 식을 얻는다. 예를 들어 <span class="math-inline" data-tex-b64="cCxxLHI="></span>의 진릿값이 <span class="math-inline" data-tex-b64="KFQsRixUKQ=="></span>인 행은

<div class="math-display" data-tex-b64="cFxsYW5kXG5lZyBxXGxhbmQgcg=="></div>

로 표현한다. 참인 행을 모두 더한 표현을 Disjunctive Normal Form, DNF라고 한다. 반대로 거짓인 행을 이용해 논리합들을 논리곱으로 연결하면 Conjunctive Normal Form, CNF를 얻을 수 있다.

항상 참인 식을 <strong>tautology</strong>, 항상 거짓인 식을 <strong>contradiction</strong>이라고 한다.

<div class="math-display" data-tex-b64="cFxsb3JcbmVnIHBcZXF1aXYgVCxccXF1YWQgcFxsYW5kXG5lZyBwXGVxdWl2IEY="></div>

## 조건명제

조건명제 <span class="math-inline" data-tex-b64="cFx0byBx"></span>는 “<span class="math-inline" data-tex-b64="cA=="></span>이면 <span class="math-inline" data-tex-b64="cQ=="></span>이다”라는 뜻이다. <span class="math-inline" data-tex-b64="cA=="></span>를 가정 또는 전건, <span class="math-inline" data-tex-b64="cQ=="></span>를 결론 또는 후건이라고 한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FycmF5fXtjfGN8Y30KcCZxJnBcdG8gcVxcIFxobGluZQpUJlQmVFxcClQmRiZGXFwKRiZUJlRcXApGJkYmVApcZW5ke2FycmF5fQ=="></div>

조건명제는 전건이 참인데 후건이 거짓인 경우에만 거짓이다. 전건이 거짓이면 조건을 어긴 반례가 제시되지 않았으므로 논리적으로 참으로 정의한다. 이를 vacuous truth라고 부른다.

조건명제는 다음 식과 동치이다.

<div class="math-display" data-tex-b64="cFx0byBxXGVxdWl2XG5lZyBwXGxvciBx"></div>

또한 원래 명제와 대우는 동치이다.

<div class="math-display" data-tex-b64="cFx0byBxXGVxdWl2XG5lZyBxXHRvXG5lZyBw"></div>

쌍조건명제 <span class="math-inline" data-tex-b64="cFxsZWZ0cmlnaHRhcnJvdyBx"></span>는 두 방향의 조건이 모두 성립한다는 뜻이다.

<div class="math-display" data-tex-b64="cFxsZWZ0cmlnaHRhcnJvdyBxXGVxdWl2KHBcdG8gcSlcbGFuZChxXHRvIHAp"></div>

## Predicate와 Domain

Predicate는 변수에 따라 참과 거짓이 달라지는 문장이다. 예를 들어

<div class="math-display" data-tex-b64="UCh4KTpcIHhcdGV4dHsgaXMgZXZlbn0="></div>

은 <span class="math-inline" data-tex-b64="eA=="></span>의 값이 정해지기 전에는 명제가 아니다. 변수의 허용 범위를 <strong>domain</strong>이라고 한다. Domain이 정수일 때 <span class="math-inline" data-tex-b64="UCg0KQ=="></span>는 참이고 <span class="math-inline" data-tex-b64="UCg1KQ=="></span>는 거짓이다.

Predicate가 참이 되는 원소를 모으면 Truth Set을 얻는다.

<div class="math-display" data-tex-b64="XHt4XGluXG1hdGhiYiBaXG1pZCBQKHgpXH09XHtcbGRvdHMsLTQsLTIsMCwyLDQsXGxkb3RzXH0="></div>

## Quantifier

Predicate를 명제로 바꾸는 대표적인 방법이 Quantifier를 붙이는 것이다.

- <span class="math-inline" data-tex-b64="XGZvcmFsbCB4XCxQKHgp"></span>: 모든 <span class="math-inline" data-tex-b64="eA=="></span>에 대해 <span class="math-inline" data-tex-b64="UCh4KQ=="></span>가 참이다.
- <span class="math-inline" data-tex-b64="XGV4aXN0cyB4XCxQKHgp"></span>: 어떤 <span class="math-inline" data-tex-b64="eA=="></span>가 존재하여 <span class="math-inline" data-tex-b64="UCh4KQ=="></span>가 참이다.
- <span class="math-inline" data-tex-b64="XGV4aXN0cyF4XCxQKHgp"></span>: <span class="math-inline" data-tex-b64="UCh4KQ=="></span>를 만족하는 <span class="math-inline" data-tex-b64="eA=="></span>가 정확히 하나 존재한다.

Quantifier의 부정은 다음처럼 바뀐다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxuZWdcZm9yYWxsIHhcLFAoeCkmXGVxdWl2XGV4aXN0cyB4XCxcbmVnIFAoeCksXFwKXG5lZ1xleGlzdHMgeFwsUCh4KSZcZXF1aXZcZm9yYWxsIHhcLFxuZWcgUCh4KS4KXGVuZHthbGlnbmVkfQ=="></div>

“모든 사람이 어떤 책을 좋아한다”와 “모든 사람이 좋아하는 책이 하나 존재한다”는 다르다. Quantifier의 순서는 의미를 바꾼다.

<div class="math-display" data-tex-b64="XGZvcmFsbCB4XCxcZXhpc3RzIHlcLEwoeCx5KQpccXF1YWRcbm90XGVxdWl2XHFxdWFkClxleGlzdHMgeVwsXGZvcmFsbCB4XCxMKHgseSk="></div>

첫 식에서는 사람마다 다른 책을 선택할 수 있지만, 두 번째 식에서는 모든 사람이 공통으로 좋아하는 한 책이 있어야 한다.

## 정리

Propositional Logic은 명제를 참·거짓 단위로 결합하고, Predicate Logic은 대상과 성질을 변수와 Quantifier로 표현한다. 진리표는 논리식의 동치 여부를 직접 확인하는 도구이며, 조건명제와 Quantifier의 부정은 증명과 수학적 문장 해석에서 특히 중요하다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="KHBcdG8gcSlcbGFuZChwXHRvIHIp"></span>가 <span class="math-inline" data-tex-b64="cFx0byhxXGxhbmQgcik="></span>와 동치임을 보인다.
2. “정수 중 가장 작은 양의 정수가 존재한다”를 Predicate와 Quantifier로 표현한다.
3. <span class="math-inline" data-tex-b64="XG5lZ1xmb3JhbGwgeFwsXGV4aXN0cyB5XCxQKHgseSk="></span>를 부정 기호가 Predicate 앞에만 남도록 바꾼다.

## 풀이

### 1번

조건명제를 논리합으로 바꾸면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CihwXHRvIHEpXGxhbmQocFx0byByKQomXGVxdWl2KFxuZWcgcFxsb3IgcSlcbGFuZChcbmVnIHBcbG9yIHIpXFwKJlxlcXVpdlxuZWcgcFxsb3IocVxsYW5kIHIpXFwKJlxlcXVpdiBwXHRvKHFcbGFuZCByKS4KXGVuZHthbGlnbmVkfQ=="></div>

따라서 두 식은 논리적으로 동치이다.

### 2번

Domain을 양의 정수로 제한하면 가장 작은 원소가 존재한다는 문장은

<div class="math-display" data-tex-b64="XGV4aXN0cyBtXGluXG1hdGhiYiBaX3s+MH1cIFxmb3JhbGwgblxpblxtYXRoYmIgWl97PjB9LFwgbVxsZSBu"></div>

로 표현할 수 있다. 실제로 <span class="math-inline" data-tex-b64="bT0x"></span>이 조건을 만족한다.

### 3번

Quantifier의 부정 법칙을 바깥쪽부터 차례로 적용한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxuZWdcZm9yYWxsIHhcLFxleGlzdHMgeVwsUCh4LHkpCiZcZXF1aXZcZXhpc3RzIHhcLFxuZWdcZXhpc3RzIHlcLFAoeCx5KVxcCiZcZXF1aXZcZXhpc3RzIHhcLFxmb3JhbGwgeVwsXG5lZyBQKHgseSkuClxlbmR7YWxpZ25lZH0="></div>
