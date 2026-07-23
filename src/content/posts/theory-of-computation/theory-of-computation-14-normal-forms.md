---
title: "14. Chomsky Normal Form과 Greibach Normal Form"
description: "CFG를 표준 Production 형태로 바꾸는 CNF·GNF의 정의, 변환 과정과 용도를 설명한다."
date: "2025-08-19"
category: "계산이론"
tags: ["theory-of-computation", "cnf", "gnf", "normal-form"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 14
featured: false
draft: false
---
Normal Form은 CFG의 표현력을 줄이지 않으면서 Production의 형태를 일정하게 제한한다. 증명과 Parsing Algorithm은 임의의 Grammar보다 표준화된 Grammar에서 다루기 쉽다.

## Chomsky Normal Form

CFG가 CNF이면 모든 Production은 다음 두 형태 중 하나이다.

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IEJD"></div>

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IGE="></div>

여기서 <span class="math-inline" data-tex-b64="QSxCLEM="></span>는 Variable이고 <span class="math-inline" data-tex-b64="YQ=="></span>는 Terminal이다. Language가 Empty String을 포함하면 새 Start Symbol에 대해 <span class="math-inline" data-tex-b64="U18wXHJpZ2h0YXJyb3dcdmFyZXBzaWxvbg=="></span>을 예외적으로 허용한다. 보통 Start Symbol은 Production 오른쪽에 나타나지 않도록 한다.

## CNF 변환 절차

### 1. 새로운 Start Symbol

<div class="math-display" data-tex-b64="U18wXHJpZ2h0YXJyb3cgUw=="></div>

를 추가한다. 원래 Start Symbol이 오른쪽에 나타나거나 Empty String을 처리할 때 안전하다.

### 2. ε-production, Unit Production, Useless Symbol 제거

앞 글의 Simplification을 적용한다.

### 3. 긴 Production의 Terminal 분리

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IGFCQw=="></div>

처럼 길이가 2 이상인 오른쪽에 Terminal이 있으면 새 Variable <span class="math-inline" data-tex-b64="VF9h"></span>를 만들고

<div class="math-display" data-tex-b64="VF9hXHJpZ2h0YXJyb3cgYSxccXF1YWQgQVxyaWdodGFycm93IFRfYUJD"></div>

로 바꾼다.

### 4. 오른쪽 길이를 2로 분해

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IEJDRA=="></div>

를

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IEJYLFxxcXVhZCBYXHJpZ2h0YXJyb3cgQ0Q="></div>

로 바꾼다. 더 긴 경우에도 새 Variable을 연쇄적으로 만든다.

## CNF의 Parse Tree 성질

길이 <span class="math-inline" data-tex-b64="blxnZTE="></span>인 String의 CNF Parse Tree는 Terminal Leaf가 <span class="math-inline" data-tex-b64="bg=="></span>개이고 Binary Variable Node 구조를 가진다. Derivation Step 수는 일정한 형태가 되며 CYK Algorithm이 부분 문자열을 두 조각으로 분할할 수 있는 이유가 된다.

## Greibach Normal Form

CFG가 GNF이면 Production은

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IGFcYWxwaGE="></div>

형태이다. <span class="math-inline" data-tex-b64="YVxpblxTaWdtYQ=="></span>이고 <span class="math-inline" data-tex-b64="XGFscGhhXGluIFZeKg=="></span>이다. 즉, 모든 Production은 Terminal 하나로 시작하고 그 뒤에 Variable이 0개 이상 온다.

각 Leftmost Derivation Step에서 Terminal이 정확히 하나씩 생성되므로 길이 <span class="math-inline" data-tex-b64="bg=="></span>의 String은 정확히 <span class="math-inline" data-tex-b64="bg=="></span>번의 Leftmost Step으로 생성된다.

## GNF의 용도와 주의점

GNF는 PDA 구성과 Derivation 길이 분석에 유용하다. 변환 과정은 CNF보다 복잡하며 Left Recursion 제거와 Variable 순서 조정이 필요하다.

모든 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>을 포함하지 않는 CFL은 동등한 GNF Grammar를 가진다. Empty String이 포함되면 Start Symbol에 대한 별도 예외를 둔다.

## CNF와 GNF 비교

| 구분 | CNF | GNF |
|---|---|---|
| Production | <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJD"></span> 또는 <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGE="></span> | <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGFcYWxwaGE="></span> |
| 구조 | Binary Parse Tree | 매 Step Terminal 하나 생성 |
| 주요 활용 | CYK, 증명 | PDA 연결, Leftmost Derivation |

## 정리

- CNF는 두 Variable 또는 Terminal 하나를 생성한다.
- GNF는 Terminal로 시작하고 뒤에 Variable만 온다.
- 두 Normal Form 모두 원래 CFL의 표현력을 유지한다.
- CNF 변환 전에는 Simplification이 필요하다.

## 연습 문제

### 1번

다음 Production을 CNF 형태로 분해한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFCQ0Q="></div>

### 2번

다음 중 GNF Production인 것을 고른다.

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IGFCQyxccXVhZCBCXHJpZ2h0YXJyb3cgQ0QsXHF1YWQgQ1xyaWdodGFycm93IGIsXHF1YWQgRFxyaWdodGFycm93XHZhcmVwc2lsb24="></div>

## 풀이

### 1번

<span class="math-inline" data-tex-b64="VF9hXHJpZ2h0YXJyb3cgYQ=="></span>를 만들고 긴 Variable Sequence를 분해한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IFRfYVhfMQ=="></div>

<div class="math-display" data-tex-b64="WF8xXHJpZ2h0YXJyb3cgQlhfMg=="></div>

<div class="math-display" data-tex-b64="WF8yXHJpZ2h0YXJyb3cgQ0Q="></div>

각 Production은 CNF 형식이다.

### 2번

<span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGFCQw=="></span>, <span class="math-inline" data-tex-b64="Q1xyaWdodGFycm93IGI="></span>는 Terminal로 시작하고 뒤에 Variable만 오므로 GNF이다. <span class="math-inline" data-tex-b64="QlxyaWdodGFycm93IENE"></span>는 Terminal로 시작하지 않고, <span class="math-inline" data-tex-b64="RFxyaWdodGFycm93XHZhcmVwc2lsb24="></span>는 일반 GNF 형태가 아니다.
