---
title: "1. Alphabet, String과 Empty String"
description: "형식언어의 출발점인 Alphabet과 String을 정의하고 길이, 연결, 거듭제곱, Prefix·Suffix·Substring을 구분한다."
date: "2025-08-06"
category: "계산이론"
tags: ["theory-of-computation", "formal-language", "alphabet", "string"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 1
featured: false
draft: false
---
계산이론은 컴퓨터가 어떤 입력을 받아 어떤 규칙으로 처리할 수 있는지를 수학적으로 다루는 분야이다. 가장 먼저 필요한 것은 입력을 구성하는 기호와 기호의 나열을 엄밀하게 정의하는 일이다. 프로그램 소스 코드, 네트워크 메시지, 숫자의 표현도 결국 유한한 기호의 나열로 볼 수 있다.

## Alphabet

**Alphabet**은 기호의 유한하고 공집합이 아닌 집합이다. 보통 <span class="math-inline" data-tex-b64="XFNpZ21h"></span>로 나타낸다.

<div class="math-display" data-tex-b64="XFNpZ21hPVx7MCwxXH0="></div>

위 Alphabet은 두 Symbol <span class="math-inline" data-tex-b64="MA=="></span>, <span class="math-inline" data-tex-b64="MQ=="></span>을 가진다. 영어 소문자를 사용하는 경우에는 다음과 같이 둘 수도 있다.

<div class="math-display" data-tex-b64="XFNpZ21hPVx7YSxiLFxsZG90cyx6XH0="></div>

Alphabet 자체는 문자열이 아니라 문자열을 만드는 재료의 집합이다. 각 원소는 더 작은 단위로 분석하지 않는 하나의 Symbol로 취급한다.

## String

**String**은 Alphabet의 Symbol을 유한한 순서로 나열한 것이다. <span class="math-inline" data-tex-b64="dz0wMTAx"></span>은 <span class="math-inline" data-tex-b64="XFNpZ21hPVx7MCwxXH0="></span> 위의 String이다.

String의 길이는 포함된 Symbol의 개수이며 <span class="math-inline" data-tex-b64="fHd8"></span>로 나타낸다.

<div class="math-display" data-tex-b64="dz0wMTAxLFxxcXVhZCB8d3w9NA=="></div>

같은 Symbol이 여러 번 등장하면 등장한 횟수만큼 길이에 포함된다. String의 순서도 중요하므로 <span class="math-inline" data-tex-b64="MDE="></span>과 <span class="math-inline" data-tex-b64="MTA="></span>은 서로 다른 String이다.

## Empty String

Symbol을 하나도 포함하지 않는 String을 **Empty String**이라고 하며 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>로 나타낸다.

<div class="math-display" data-tex-b64="fFx2YXJlcHNpbG9ufD0w"></div>

Empty String은 String이므로 Language의 원소가 될 수 있다. 그러나 아무 원소도 없는 Empty Set과는 다르다.

<div class="math-display" data-tex-b64="XHZhcm5vdGhpbmdcbmVxXHtcdmFyZXBzaWxvblx9"></div>

<span class="math-inline" data-tex-b64="XHZhcm5vdGhpbmc="></span>은 원소가 0개인 집합이고, <span class="math-inline" data-tex-b64="XHtcdmFyZXBzaWxvblx9"></span>은 Empty String 하나를 원소로 가지는 집합이다.

## Concatenation

두 String을 순서대로 이어 붙이는 연산을 **Concatenation**이라고 한다. <span class="math-inline" data-tex-b64="eD1hYg=="></span>, <span class="math-inline" data-tex-b64="eT1iYQ=="></span>이면

<div class="math-display" data-tex-b64="eHk9YWJiYSxccXF1YWQgeXg9YmFhYg=="></div>

이다. 일반적으로 Concatenation은 교환법칙을 만족하지 않는다.

<div class="math-display" data-tex-b64="eHlcbmVxIHl4"></div>

Empty String은 Concatenation의 항등원이다.

<div class="math-display" data-tex-b64="d1x2YXJlcHNpbG9uPVx2YXJlcHNpbG9uIHc9dw=="></div>

길이는 더해진다.

<div class="math-display" data-tex-b64="fHh5fD18eHwrfHl8"></div>

## String의 거듭제곱

String <span class="math-inline" data-tex-b64="dw=="></span>를 반복하여 연결한 것을 <span class="math-inline" data-tex-b64="d15u"></span>으로 나타낸다.

<div class="math-display" data-tex-b64="d14wPVx2YXJlcHNpbG9uLFxxcXVhZCB3XjE9dyxccXF1YWQgd157bisxfT13Xm53"></div>

예를 들어 <span class="math-inline" data-tex-b64="dz1hYg=="></span>이면

<div class="math-display" data-tex-b64="d14zPWFiYWJhYg=="></div>

이다.

## Prefix, Suffix와 Substring

String <span class="math-inline" data-tex-b64="dw=="></span>가 <span class="math-inline" data-tex-b64="dz14eXo="></span>로 표현될 때 <span class="math-inline" data-tex-b64="eA=="></span>는 Prefix, <span class="math-inline" data-tex-b64="eg=="></span>는 Suffix, <span class="math-inline" data-tex-b64="eQ=="></span>는 Substring이라고 할 수 있다.

예를 들어 <span class="math-inline" data-tex-b64="dz1hYmNhYg=="></span>에서

- <span class="math-inline" data-tex-b64="YWI="></span>는 Prefix이다.
- <span class="math-inline" data-tex-b64="Y2Fi"></span>는 Suffix이다.
- <span class="math-inline" data-tex-b64="YmNh"></span>는 Substring이다.
- <span class="math-inline" data-tex-b64="YWM="></span>는 문자가 연속하지 않으므로 Substring이 아니다.

자기 자신과 Empty String도 Prefix와 Suffix로 허용하는 정의가 일반적이다. 자기 자신을 제외한 Prefix는 Proper Prefix라고 한다.

## 혼동하기 쉬운 점

- Alphabet은 Symbol의 집합이고 String은 Symbol의 순서 있는 나열이다.
- <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>은 길이가 0인 String이고 <span class="math-inline" data-tex-b64="XHZhcm5vdGhpbmc="></span>은 원소가 없는 Set이다.
- <span class="math-inline" data-tex-b64="XHswLDFcfQ=="></span>은 Alphabet일 수 있지만 <span class="math-inline" data-tex-b64="MDE="></span>은 그 Alphabet 위의 String이다.
- Concatenation은 보통 교환법칙이 성립하지 않는다.

## 정리

- Alphabet은 유한하고 공집합이 아닌 Symbol의 집합이다.
- String은 Alphabet의 Symbol을 유한하게 나열한 것이다.
- Empty String의 길이는 0이다.
- Concatenation은 String을 순서대로 이어 붙이는 연산이다.
- Prefix, Suffix, Substring은 String 내부의 위치 관계를 나타낸다.

## 연습 문제

### 1번

<span class="math-inline" data-tex-b64="XFNpZ21hPVx7YSxiXH0="></span>일 때 다음 중 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>에 속하는 것을 모두 고른다.

<div class="math-display" data-tex-b64="YWIsXHFxdWFkIFx2YXJlcHNpbG9uLFxxcXVhZCBhYmMsXHFxdWFkIGJiYWE="></div>

### 2번

<span class="math-inline" data-tex-b64="eD0wMQ=="></span>, <span class="math-inline" data-tex-b64="eT0xMTA="></span>일 때 <span class="math-inline" data-tex-b64="eHk="></span>, <span class="math-inline" data-tex-b64="eXg="></span>, <span class="math-inline" data-tex-b64="eF4z"></span>, <span class="math-inline" data-tex-b64="fHh5fA=="></span>를 구한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="YWI="></span>, <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>, <span class="math-inline" data-tex-b64="YmJhYQ=="></span>는 모두 <span class="math-inline" data-tex-b64="YQ=="></span>, <span class="math-inline" data-tex-b64="Yg=="></span>만 사용하거나 아무 Symbol도 사용하지 않았으므로 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>에 속한다. <span class="math-inline" data-tex-b64="YWJj"></span>에는 Alphabet에 없는 <span class="math-inline" data-tex-b64="Yw=="></span>가 포함되므로 속하지 않는다.

### 2번

<div class="math-display" data-tex-b64="eHk9MDExMTAsXHFxdWFkIHl4PTExMDAx"></div>

<div class="math-display" data-tex-b64="eF4zPTAxMDEwMQ=="></div>

길이는 Concatenation 전 길이의 합이므로

<div class="math-display" data-tex-b64="fHh5fD18eHwrfHl8PTIrMz01"></div>

이다.
