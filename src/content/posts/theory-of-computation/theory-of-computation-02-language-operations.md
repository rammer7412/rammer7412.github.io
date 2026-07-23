---
title: "2. Formal Language와 Language Operation"
description: "String의 집합으로서 Formal Language를 정의하고 Union, Concatenation, Kleene Star 등 핵심 연산을 정리한다."
date: "2025-08-07"
category: "계산이론"
tags: ["theory-of-computation", "formal-language", "kleene-star", "language-operation"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 2
featured: false
draft: false
---
<strong>Formal Language</strong>는 특정 Alphabet 위의 String을 원소로 가지는 집합이다. 자연어에서는 문장의 의미가 중요하지만, Formal Language에서는 문자열이 정해진 규칙을 만족하여 집합에 속하는지가 핵심이다.

## <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>와 <span class="math-inline" data-tex-b64="XFNpZ21hXis="></span>

Alphabet <span class="math-inline" data-tex-b64="XFNpZ21h"></span>로 만들 수 있는 모든 유한 String의 집합을 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>라고 한다.

<div class="math-display" data-tex-b64="XFNpZ21hXio9XGJpZ2N1cF97blxnZSAwfVxTaWdtYV5u"></div>

<span class="math-inline" data-tex-b64="XFNpZ21hXjA9XHtcdmFyZXBzaWxvblx9"></span>이므로 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>에는 항상 Empty String이 포함된다.

Empty String을 제외한 모든 String의 집합은 <span class="math-inline" data-tex-b64="XFNpZ21hXis="></span>이다.

<div class="math-display" data-tex-b64="XFNpZ21hXis9XGJpZ2N1cF97blxnZSAxfVxTaWdtYV5uPVxTaWdtYV4qLVx7XHZhcmVwc2lsb25cfQ=="></div>

<span class="math-inline" data-tex-b64="XFNpZ21hPVx7MCwxXH0="></span>이면 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>는 다음과 같이 시작한다.

<div class="math-display" data-tex-b64="XFNpZ21hXio9XHtcdmFyZXBzaWxvbiwwLDEsMDAsMDEsMTAsMTEsMDAwLFxsZG90c1x9"></div>

## Language

Alphabet <span class="math-inline" data-tex-b64="XFNpZ21h"></span> 위의 Language <span class="math-inline" data-tex-b64="TA=="></span>은 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>의 부분집합이다.

<div class="math-display" data-tex-b64="TFxzdWJzZXRlcVxTaWdtYV4q"></div>

예를 들어 1로 끝나는 Binary String의 Language는

<div class="math-display" data-tex-b64="TD1ce3cxXG1pZCB3XGluXHswLDFcfV4qXH0="></div>

로 나타낼 수 있다.

Language는 유한할 수도 있고 무한할 수도 있다. <span class="math-inline" data-tex-b64="XHswLDEsMDBcfQ=="></span>은 유한 Language이고, <span class="math-inline" data-tex-b64="XHswXm4xXm5cbWlkIG5cZ2UwXH0="></span>은 무한 Language이다.

## 집합 연산

Language는 Set이므로 일반적인 Set Operation을 적용할 수 있다.

<div class="math-display" data-tex-b64="TF8xXGN1cCBMXzI9XHt3XG1pZCB3XGluIExfMVx0ZXh0eyDrmJDripQgfXdcaW4gTF8yXH0="></div>

<div class="math-display" data-tex-b64="TF8xXGNhcCBMXzI9XHt3XG1pZCB3XGluIExfMVx0ZXh0eyDqt7jrpqzqs6AgfXdcaW4gTF8yXH0="></div>

<div class="math-display" data-tex-b64="TF8xLUxfMj1ce3dcbWlkIHdcaW4gTF8xXHRleHR7IOydtOqzoCB9d1xub3RpbiBMXzJcfQ=="></div>

Complement를 정의할 때에는 기준 Universe가 필요하다. Alphabet <span class="math-inline" data-tex-b64="XFNpZ21h"></span>가 고정되어 있다면

<div class="math-display" data-tex-b64="XG92ZXJsaW5le0x9PVxTaWdtYV4qLUw="></div>

이다.

## Language Concatenation

두 Language의 Concatenation은 각 Language에서 하나씩 String을 골라 이어 붙인 결과의 집합이다.

<div class="math-display" data-tex-b64="TF8xTF8yPVx7eHlcbWlkIHhcaW4gTF8xLFwgeVxpbiBMXzJcfQ=="></div>

예를 들어

<div class="math-display" data-tex-b64="TF8xPVx7YSxiXH0sXHFxdWFkIExfMj1cezAsMVx9"></div>

이면

<div class="math-display" data-tex-b64="TF8xTF8yPVx7YTAsYTEsYjAsYjFcfQ=="></div>

이다. Language Concatenation도 일반적으로 교환법칙을 만족하지 않는다.

## Language Power

<div class="math-display" data-tex-b64="TF4wPVx7XHZhcmVwc2lsb25cfSxccXF1YWQgTF57bisxfT1MXm5M"></div>

로 정의한다. <span class="math-inline" data-tex-b64="TD1ce2FiLGNcfQ=="></span>이면

<div class="math-display" data-tex-b64="TF4yPVx7YWJhYixhYmMsY2FiLGNjXH0="></div>

이다.

## Kleene Star와 Positive Closure

Language를 0번 이상 반복하여 Concatenate한 모든 결과를 Kleene Star라고 한다.

<div class="math-display" data-tex-b64="TF4qPVxiaWdjdXBfe25cZ2UwfUxebg=="></div>

0번 반복한 결과 때문에 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb25caW4gTF4q"></span>가 항상 성립한다.

한 번 이상 반복한 결과는 Positive Closure이다.

<div class="math-display" data-tex-b64="TF4rPVxiaWdjdXBfe25cZ2UxfUxebj1MTF4q"></div>

예를 들어 <span class="math-inline" data-tex-b64="TD1ce2FiXH0="></span>이면

<div class="math-display" data-tex-b64="TF4qPVx7XHZhcmVwc2lsb24sYWIsYWJhYixhYmFiYWIsXGxkb3RzXH0="></div>

이다.

## Reversal

String <span class="math-inline" data-tex-b64="dz1hXzFhXzJcY2RvdHMgYV9u"></span>의 Reversal은

<div class="math-display" data-tex-b64="d15SPWFfbmFfe24tMX1cY2RvdHMgYV8x"></div>

이다. Language의 Reversal은 각 String을 뒤집은 집합이다.

<div class="math-display" data-tex-b64="TF5SPVx7d15SXG1pZCB3XGluIExcfQ=="></div>

## Empty Language와 Empty String Language

다음 두 Language는 결과가 크게 다르다.

<div class="math-display" data-tex-b64="XHZhcm5vdGhpbmcgTD1cdmFybm90aGluZw=="></div>

<div class="math-display" data-tex-b64="XHtcdmFyZXBzaWxvblx9TD1M"></div>

첫 식에서는 선택할 String 자체가 없고, 두 번째 식에서는 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>을 골라 이어 붙일 수 있기 때문이다.

## 정리

- Formal Language는 <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>의 부분집합이다.
- <span class="math-inline" data-tex-b64="XFNpZ21hXio="></span>는 Empty String을 포함하고 <span class="math-inline" data-tex-b64="XFNpZ21hXis="></span>는 포함하지 않는다.
- Language는 Set Operation과 Concatenation을 가진다.
- Kleene Star는 0번 이상의 반복이므로 항상 Empty String을 포함한다.

## 연습 문제

### 1번

<span class="math-inline" data-tex-b64="TF8xPVx7YSxiYlx9"></span>, <span class="math-inline" data-tex-b64="TF8yPVx7XHZhcmVwc2lsb24sY1x9"></span>일 때 <span class="math-inline" data-tex-b64="TF8xTF8y"></span>, <span class="math-inline" data-tex-b64="TF8yTF8x"></span>을 구한다.

### 2번

<span class="math-inline" data-tex-b64="TD1cezAsMTFcfQ=="></span>일 때 <span class="math-inline" data-tex-b64="TF4w"></span>, <span class="math-inline" data-tex-b64="TF4x"></span>, <span class="math-inline" data-tex-b64="TF4y"></span>를 구하고 <span class="math-inline" data-tex-b64="MDEx"></span>이 <span class="math-inline" data-tex-b64="TF4q"></span>에 속하는지 판단한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="TF8xTF8yPVx7YSxhYyxiYixiYmNcfQ=="></div>

<div class="math-display" data-tex-b64="TF8yTF8xPVx7YSxiYixjYSxjYmJcfQ=="></div>

두 결과가 다르므로 Language Concatenation이 교환법칙을 만족하지 않는 예이기도 하다.

### 2번

<div class="math-display" data-tex-b64="TF4wPVx7XHZhcmVwc2lsb25cfSxccXF1YWQgTF4xPVx7MCwxMVx9"></div>

<div class="math-display" data-tex-b64="TF4yPVx7MDAsMDExLDExMCwxMTExXH0="></div>

<span class="math-inline" data-tex-b64="MDExPTBcY2RvdDEx"></span>로 분해할 수 있으므로 <span class="math-inline" data-tex-b64="MDExXGluIExeMlxzdWJzZXRlcSBMXio="></span>이다.
