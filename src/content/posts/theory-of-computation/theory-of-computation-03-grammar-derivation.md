---
title: "3. Grammar, Production Rule과 Derivation"
description: "무한 Language를 유한한 규칙으로 정의하는 Grammar의 구성과 Derivation, Sentential Form을 정리한다."
date: "2025-08-08"
category: "계산이론"
tags: ["theory-of-computation", "grammar", "production-rule", "derivation"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 3
featured: false
draft: false
---
무한한 Language를 모든 String의 목록으로 적는 것은 불가능하다. **Grammar**는 유한한 Symbol과 Production Rule을 이용해 String을 생성하며, Language의 구조를 명시적으로 표현한다.

## Grammar의 구성

Grammar는 다음 네 요소로 정의한다.

<div class="math-display" data-tex-b64="Rz0oVixcU2lnbWEsUCxTKQ=="></div>

- <span class="math-inline" data-tex-b64="Vg=="></span>: Variable 또는 Nonterminal의 유한 집합이다.
- <span class="math-inline" data-tex-b64="XFNpZ21h"></span>: Terminal의 유한 집합이다.
- <span class="math-inline" data-tex-b64="UA=="></span>: Production Rule의 유한 집합이다.
- <span class="math-inline" data-tex-b64="U1xpbiBW"></span>: Start Symbol이다.

보통 <span class="math-inline" data-tex-b64="VlxjYXBcU2lnbWE9XHZhcm5vdGhpbmc="></span>으로 둔다. Terminal은 최종 String에 남는 Symbol이고, Variable은 생성 과정에서 구조를 나타내는 임시 Symbol이다.

## Production Rule

Production Rule은 어떤 문자열 조각을 다른 문자열 조각으로 바꿀 수 있는지를 나타낸다.

<div class="math-display" data-tex-b64="XGFscGhhXHJpZ2h0YXJyb3dcYmV0YQ=="></div>

Grammar의 종류에 따라 <span class="math-inline" data-tex-b64="XGFscGhh"></span>, <span class="math-inline" data-tex-b64="XGJldGE="></span>의 형태가 제한된다. Context-Free Grammar에서는 왼쪽이 하나의 Variable이어야 한다.

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93XGJldGE="></div>

## Derivation

Sentential Form <span class="math-inline" data-tex-b64="eFxhbHBoYSB5"></span>에 Production <span class="math-inline" data-tex-b64="XGFscGhhXHJpZ2h0YXJyb3dcYmV0YQ=="></span>를 적용하면

<div class="math-display" data-tex-b64="eFxhbHBoYSB5XFJpZ2h0YXJyb3cgeFxiZXRhIHk="></div>

라고 쓴다. 한 번 이상의 Derivation은 <span class="math-inline" data-tex-b64="XFJpZ2h0YXJyb3deKw=="></span>, 0번 이상의 Derivation은 <span class="math-inline" data-tex-b64="XFJpZ2h0YXJyb3deKg=="></span>로 나타낸다.

Grammar가 생성하는 Language는 Start Symbol에서 Terminal만으로 이루어진 String까지 유도할 수 있는 모든 String의 집합이다.

<div class="math-display" data-tex-b64="TChHKT1ce3dcaW5cU2lnbWFeKlxtaWQgU1xSaWdodGFycm93Xip3XH0="></div>

## 예제: 같은 개수의 <span class="math-inline" data-tex-b64="YQ=="></span>와 <span class="math-inline" data-tex-b64="Yg=="></span>

다음 Grammar를 생각한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFTYlxtaWRcdmFyZXBzaWxvbg=="></div>

이 Grammar는

<div class="math-display" data-tex-b64="TChHKT1ce2FebmJeblxtaWQgblxnZTBcfQ=="></div>

을 생성한다. <span class="math-inline" data-tex-b64="YWFiYg=="></span>의 Derivation은

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93IGFTYlxSaWdodGFycm93IGFhU2JiXFJpZ2h0YXJyb3cgYWFiYg=="></div>

이다. Production <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IGFTYg=="></span>를 적용할 때마다 왼쪽에 <span class="math-inline" data-tex-b64="YQ=="></span>, 오른쪽에 <span class="math-inline" data-tex-b64="Yg=="></span>가 하나씩 추가된다.

## Sentential Form

Derivation 중간에 나타나는 Terminal과 Variable의 혼합 String을 Sentential Form이라고 한다. 앞의 예에서 <span class="math-inline" data-tex-b64="YVNi"></span>, <span class="math-inline" data-tex-b64="YWFTYmI="></span>가 Sentential Form이다.

모든 Variable이 사라지면 Terminal String이 되어 Language의 원소가 된다.

## Leftmost와 Rightmost Derivation

Sentential Form에 Variable이 여러 개 있으면 어느 Variable을 먼저 바꾸는지 선택할 수 있다.

- Leftmost Derivation은 가장 왼쪽 Variable을 먼저 바꾼다.
- Rightmost Derivation은 가장 오른쪽 Variable을 먼저 바꾼다.

예를 들어

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IEFCLFxxdWFkIEFccmlnaHRhcnJvdyBhQVxtaWQgYSxccXVhZCBCXHJpZ2h0YXJyb3cgYkJcbWlkIGI="></div>

에서 <span class="math-inline" data-tex-b64="YWFiYg=="></span>의 Leftmost Derivation은

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93IEFCXFJpZ2h0YXJyb3cgYUFCXFJpZ2h0YXJyb3cgYWFCXFJpZ2h0YXJyb3cgYWFiQlxSaWdodGFycm93IGFhYmI="></div>

이다.

## 생성과 인식의 차이

Grammar는 String을 **생성**하는 모델이다. Automaton은 입력 String을 받아 Language에 속하는지 **인식**하는 모델이다. 같은 Language Class에 대해 Grammar와 Automaton이 동등하다는 정리는 이 두 관점이 동일한 표현력을 가진다는 뜻이다.

## 혼동하기 쉬운 점

- <span class="math-inline" data-tex-b64="Uw=="></span>는 Start Symbol이지 Terminal String이 아니다.
- Production은 양방향 등식이 아니라 허용된 한 방향의 Rewrite Rule이다.
- <span class="math-inline" data-tex-b64="XFJpZ2h0YXJyb3c="></span>는 한 단계, <span class="math-inline" data-tex-b64="XFJpZ2h0YXJyb3deKg=="></span>는 0단계 이상을 뜻한다.
- Grammar가 하나의 String만 생성하는 것이 아니라 가능한 모든 Derivation의 결과가 Language를 이룬다.

## 정리

- Grammar는 <span class="math-inline" data-tex-b64="KFYsXFNpZ21hLFAsUyk="></span>로 구성된다.
- Production Rule은 Sentential Form을 변환한다.
- Start Symbol에서 Terminal String까지의 Derivation이 Language를 정의한다.
- Leftmost·Rightmost Derivation은 Variable 선택 순서를 고정한다.

## 연습 문제

### 1번

다음 Grammar로 <span class="math-inline" data-tex-b64="YWFhYmJi"></span>를 생성하는 Leftmost Derivation을 작성한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFTYlxtaWRcdmFyZXBzaWxvbg=="></div>

### 2번

다음 Grammar가 생성하는 Language를 설명한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IDBTXG1pZDFTXG1pZFx2YXJlcHNpbG9u"></div>

## 풀이

### 1번

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93IGFTYlxSaWdodGFycm93IGFhU2JiXFJpZ2h0YXJyb3cgYWFhU2JiYlxSaWdodGFycm93IGFhYWJiYg=="></div>

이다.

### 2번

매 단계에서 <span class="math-inline" data-tex-b64="MA=="></span> 또는 <span class="math-inline" data-tex-b64="MQ=="></span>을 하나 추가할 수 있고, 마지막에 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>로 종료한다. 따라서 모든 Binary String을 생성한다.

<div class="math-display" data-tex-b64="TChHKT1cezAsMVx9Xio="></div>
