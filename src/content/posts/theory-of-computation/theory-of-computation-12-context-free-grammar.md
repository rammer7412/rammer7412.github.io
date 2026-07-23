---
title: "12. Context-Free Grammar와 Parse Tree"
description: "재귀적·중첩 구조를 표현하는 CFG의 정의, Parse Tree, Leftmost·Rightmost Derivation과 Ambiguity를 설명한다."
date: "2025-08-17"
category: "계산이론"
tags: ["theory-of-computation", "cfg", "parse-tree", "context-free-language"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 12
featured: false
draft: false
---
**Context-Free Grammar(CFG)**는 Production Rule의 왼쪽이 하나의 Variable인 Grammar이다. 중첩된 괄호, 산술식, Programming Language Syntax처럼 재귀적인 구조를 표현할 수 있다.

## 형식적 정의

CFG는 <span class="math-inline" data-tex-b64="Rz0oVixcU2lnbWEsUCxTKQ=="></span>이고 모든 Production이

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93XGFscGhh"></div>

형태이다. 여기서 <span class="math-inline" data-tex-b64="QVxpbiBW"></span>, <span class="math-inline" data-tex-b64="XGFscGhhXGluKFZcY3VwXFNpZ21hKV4q"></span>이다. 왼쪽의 Variable은 주변 Context와 상관없이 치환될 수 있으므로 Context-Free라는 이름을 사용한다.

## 예제: 균형 잡힌 괄호

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IFNTXG1pZChTKVxtaWRcdmFyZXBzaWxvbg=="></div>

이 Grammar는 올바르게 중첩된 괄호 String을 생성한다.

<span class="math-inline" data-tex-b64="KCkoKQ=="></span>는

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93IFNTXFJpZ2h0YXJyb3coUylTXFJpZ2h0YXJyb3coKVNcUmlnaHRhcnJvdygpKFMpXFJpZ2h0YXJyb3coKSgp"></div>

로 유도할 수 있다.

## Parse Tree

Parse Tree는 Derivation의 계층 구조를 나타낸다.

- Root는 Start Symbol이다.
- Internal Node는 Variable이다.
- Node <span class="math-inline" data-tex-b64="QQ=="></span>의 Children은 적용한 Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IFhfMVxjZG90cyBYX2s="></span>의 오른쪽 Symbol이다.
- Leaf를 왼쪽에서 오른쪽으로 읽은 String을 Yield라고 한다.

Parse Tree는 Production 적용 순서보다 String의 구조를 강조한다. 같은 Parse Tree를 Leftmost와 Rightmost 방식으로 순회하면 서로 다른 Derivation Sequence를 얻을 수 있다.

## Leftmost와 Rightmost Derivation

산술식 Grammar를 생각한다.

<div class="math-display" data-tex-b64="RVxyaWdodGFycm93IEUrRVxtaWQgRSpFXG1pZCBpZA=="></div>

String <span class="math-inline" data-tex-b64="aWQraWQqaWQ="></span>는 여러 방식으로 유도될 수 있다. Leftmost Derivation은 항상 가장 왼쪽 Variable을, Rightmost Derivation은 가장 오른쪽 Variable을 먼저 확장한다.

## Ambiguity

하나의 String이 서로 다른 Parse Tree를 둘 이상 가지면 Grammar는 Ambiguous하다고 한다.

위 산술식 Grammar에서 <span class="math-inline" data-tex-b64="aWQraWQqaWQ="></span>는

- 덧셈을 Root로 하여 <span class="math-inline" data-tex-b64="aWQrKGlkKmlkKQ=="></span>로 해석할 수 있고
- 곱셈을 Root로 하여 <span class="math-inline" data-tex-b64="KGlkK2lkKSppZA=="></span>로 해석할 수 있다.

연산자 우선순위와 결합법칙을 반영한 Grammar로 바꾸면 Ambiguity를 제거할 수 있다.

<div class="math-display" data-tex-b64="RVxyaWdodGFycm93IEUrVFxtaWQgVA=="></div>

<div class="math-display" data-tex-b64="VFxyaWdodGFycm93IFQqRlxtaWQgRg=="></div>

<div class="math-display" data-tex-b64="RlxyaWdodGFycm93IChFKVxtaWQgaWQ="></div>

이 구조에서는 곱셈이 덧셈보다 더 깊은 Level에서 생성되어 우선순위가 반영된다.

## CFG가 표현하는 Language

CFG가 생성하는 Language를 Context-Free Language(CFL)라고 한다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyBpcyBjb250ZXh0LWZyZWV9XGlmZiBMPUwoRylcdGV4dHsgZm9yIHNvbWUgQ0ZHIH1H"></div>

<span class="math-inline" data-tex-b64="XHthXm5iXm5cbWlkIG5cZ2UwXH0="></span>은 CFG로 생성할 수 있지만 Finite Automaton으로는 인식할 수 없다. Stack과 같은 무한하지만 제한된 Memory가 필요하기 때문이다.

## 정리

- CFG Production의 왼쪽은 Variable 하나이다.
- Parse Tree는 String의 계층 구조를 나타낸다.
- Leftmost·Rightmost Derivation은 Variable 선택 순서를 고정한다.
- 하나의 String에 여러 Parse Tree가 있으면 Grammar는 Ambiguous하다.

## 연습 문제

### 1번

Grammar

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFTYlxtaWQgU1NcbWlkXHZhcmVwc2lsb24="></div>

를 이용해 <span class="math-inline" data-tex-b64="YWJhYg=="></span>의 Leftmost Derivation을 작성한다.

### 2번

Grammar <span class="math-inline" data-tex-b64="RVxyaWdodGFycm93IEUrRVxtaWQgRSpFXG1pZCBpZA=="></span>가 Ambiguous함을 String <span class="math-inline" data-tex-b64="aWQraWQqaWQ="></span>의 두 구조로 설명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93IFNTXFJpZ2h0YXJyb3cgYVNiU1xSaWdodGFycm93IGFiU1xSaWdodGFycm93IGFiYVNiXFJpZ2h0YXJyb3cgYWJhYg=="></div>

이다.

### 2번

첫 번째 Parse Structure는 Root가 <span class="math-inline" data-tex-b64="Kw=="></span>인 <span class="math-inline" data-tex-b64="aWQrKGlkKmlkKQ=="></span>이고, 두 번째는 Root가 <span class="math-inline" data-tex-b64="Kg=="></span>인 <span class="math-inline" data-tex-b64="KGlkK2lkKSppZA=="></span>이다. 서로 다른 두 Parse Tree가 같은 Yield를 가지므로 Grammar는 Ambiguous하다.
