---
title: "18. CFL의 Closure Property와 Pumping Lemma"
description: "Context-Free Language의 닫힘·비닫힘 성질과 CFL Pumping Lemma를 이용한 Non-CFL 증명을 설명한다."
date: "2025-08-23"
category: "계산이론"
tags: ["theory-of-computation", "context-free-language", "pumping-lemma", "closure-property"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 18
featured: false
draft: false
---
Context-Free Language(CFL)는 Regular Language보다 강하지만 모든 Set Operation에 닫혀 있지는 않다. Closure Property를 정확히 구분해야 증명에서 잘못된 결론을 피할 수 있다.

## 닫혀 있는 연산

CFL은 다음 연산에 대해 닫혀 있다.

- Union
- Concatenation
- Kleene Star
- Reversal
- Homomorphism
- Inverse Homomorphism
- Regular Language와의 Intersection

Union, Concatenation, Star는 CFG의 Start Symbol과 Production을 조합하여 증명할 수 있다.

## 일반 Intersection에는 닫혀 있지 않다

다음 두 Language는 CFL이다.

<div class="math-display" data-tex-b64="TF8xPVx7YV5pYl5pY15rXG1pZCBpLGtcZ2UwXH0="></div>

<div class="math-display" data-tex-b64="TF8yPVx7YV5pYl5qY15qXG1pZCBpLGpcZ2UwXH0="></div>

각각 앞의 두 구간 또는 뒤의 두 구간 개수만 맞추면 되므로 PDA로 인식할 수 있다. 그러나 Intersection은

<div class="math-display" data-tex-b64="TF8xXGNhcCBMXzI9XHthXm5iXm5jXm5cbWlkIG5cZ2UwXH0="></div>

이고 이 Language는 CFL이 아니다. 따라서 CFL은 일반 Intersection에 닫혀 있지 않다.

## Complement와 Difference

CFL이 Complement에 닫혀 있다고 가정하면 De Morgan's Law와 Union Closure에 의해 Intersection에도 닫혀야 한다.

<div class="math-display" data-tex-b64="TF8xXGNhcCBMXzI9XG92ZXJsaW5le1xvdmVybGluZXtMXzF9XGN1cFxvdmVybGluZXtMXzJ9fQ=="></div>

이는 앞의 결과와 모순이므로 CFL은 Complement에 닫혀 있지 않다. Difference에도 일반적으로 닫혀 있지 않다.

## Regular Language와의 Intersection

CFL <span class="math-inline" data-tex-b64="TA=="></span>과 Regular Language <span class="math-inline" data-tex-b64="Ug=="></span>의 Intersection은 CFL이다. PDA가 <span class="math-inline" data-tex-b64="TA=="></span>을 인식하고 DFA가 <span class="math-inline" data-tex-b64="Ug=="></span>을 인식한다고 할 때, Product State로 두 기계의 State를 동시에 추적하고 PDA Stack은 그대로 사용하면 된다.

이 성질은 Non-CFL 증명에서 매우 유용하다.

## CFL Pumping Lemma

<span class="math-inline" data-tex-b64="TA=="></span>이 CFL이면 어떤 Pumping Length <span class="math-inline" data-tex-b64="cA=="></span>가 존재하여, <span class="math-inline" data-tex-b64="fHd8XGdlIHA="></span>인 모든 <span class="math-inline" data-tex-b64="d1xpbiBM"></span>은

<div class="math-display" data-tex-b64="dz11dnh5eg=="></div>

로 나눌 수 있고 다음을 만족한다.

<div class="math-display" data-tex-b64="fHZ4eXxcbGUgcA=="></div>

<div class="math-display" data-tex-b64="fHZ5fD4w"></div>

<div class="math-display" data-tex-b64="dXZeaXh5Xml6XGluIExccXF1YWRcdGV4dHtmb3IgZXZlcnkgfWlcZ2Uw"></div>

Regular Pumping Lemma와 달리 두 구간 <span class="math-inline" data-tex-b64="dg=="></span>, <span class="math-inline" data-tex-b64="eQ=="></span>를 동시에 같은 횟수만큼 Pump한다. Parse Tree에서 같은 Variable이 한 Root-to-leaf Path에 반복되는 구조에서 나온다.

## <span class="math-inline" data-tex-b64="XHthXm5iXm5jXm5cfQ=="></span> 증명 개요

<div class="math-display" data-tex-b64="dz1hXnBiXnBjXnA="></div>

를 선택한다. <span class="math-inline" data-tex-b64="fHZ4eXxcbGUgcA=="></span>이므로 <span class="math-inline" data-tex-b64="dnh5"></span>는 세 Block 전체를 모두 포함할 수 없다. 따라서 Pumping은 최대 두 종류의 Symbol 수만 바꿀 수 있다. <span class="math-inline" data-tex-b64="aT0w"></span> 또는 <span class="math-inline" data-tex-b64="aT0y"></span>로 Pump하면 세 개수가 모두 같다는 조건이 깨진다.

가능한 위치 Case를 나누어 모든 분해에 대해 모순을 보여야 한다.

## Ogden's Lemma

CFL Pumping Lemma로 증명하기 어려운 Language도 있다. Ogden's Lemma는 String의 일부 위치를 미리 표시할 수 있어 더 강한 Pumping 도구를 제공한다. Pumping Lemma가 실패한다고 해서 Language가 CFL이라는 뜻은 아니다.

## 정리

- CFL은 Union, Concatenation, Star에 닫혀 있다.
- 일반 Intersection과 Complement에는 닫혀 있지 않다.
- Regular Language와의 Intersection에는 닫혀 있다.
- CFL Pumping Lemma는 두 부분을 동시에 Pump한다.

## 연습 문제

### 1번

<span class="math-inline" data-tex-b64="TA=="></span>이 CFL이고 <span class="math-inline" data-tex-b64="Ug=="></span>이 Regular일 때 <span class="math-inline" data-tex-b64="TC1S"></span>이 CFL임을 보인다.

### 2번

<div class="math-display" data-tex-b64="TD1cezBebjFebjJeblxtaWQgblxnZTBcfQ=="></div>

이 CFL이 아님을 Pumping Lemma의 구간 위치 관점에서 설명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="TC1SPUxcY2FwXG92ZXJsaW5le1J9"></div>

이다. Regular Language는 Complement에 닫혀 있으므로 <span class="math-inline" data-tex-b64="XG92ZXJsaW5le1J9"></span>도 Regular이다. CFL은 Regular Language와의 Intersection에 닫혀 있으므로 결과는 CFL이다.

### 2번

<span class="math-inline" data-tex-b64="dz0wXnAxXnAyXnA="></span>를 고른다. <span class="math-inline" data-tex-b64="fHZ4eXxcbGUgcA=="></span>이므로 Pumping 영역은 한 Block 내부이거나 인접한 두 Block에만 걸친다. Pumping하면 적어도 하나의 Symbol 개수는 변하지 않고 다른 하나 이상은 변한다. 따라서 0, 1, 2의 개수가 모두 같을 수 없다.
