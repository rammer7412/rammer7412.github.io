---
title: "13. CFG Simplification"
description: "ε-production, Unit Production, Non-generating·Unreachable Symbol을 제거하면서 Language를 보존하는 절차를 설명한다."
date: "2025-08-18"
category: "계산이론"
tags: ["theory-of-computation", "cfg", "grammar-simplification", "epsilon-production"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 13
featured: false
draft: false
---
CFG에는 Language 생성에 기여하지 않는 Variable이나 불필요한 중간 Production이 포함될 수 있다. **Grammar Simplification**은 원래 Language를 가능한 한 유지하면서 구조를 단순화한다. Normal Form 변환이나 Parsing Algorithm 적용 전에 자주 수행한다.

## Nullable Variable과 ε-production

Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93XHZhcmVwc2lsb24="></span>을 ε-production이라고 한다. Variable <span class="math-inline" data-tex-b64="QQ=="></span>가

<div class="math-display" data-tex-b64="QVxSaWdodGFycm93XipcdmFyZXBzaWxvbg=="></div>

를 만족하면 Nullable이라고 한다.

Nullable Variable을 찾을 때에는 직접 ε를 생성하는 Variable에서 시작해, 오른쪽의 모든 Symbol이 Nullable인 Production의 왼쪽 Variable을 반복적으로 추가한다.

## ε-production 제거

Production 오른쪽에 Nullable Variable이 나타나면 그 Variable을 유지하거나 삭제한 모든 조합을 추가한다.

예를 들어 <span class="math-inline" data-tex-b64="QQ=="></span>가 Nullable이고

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFBYg=="></div>

가 있으면

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFBYlxtaWQgYWI="></div>

를 만든다. 이후 <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93XHZhcmVwc2lsb24="></span>을 제거한다.

원래 Language가 <span class="math-inline" data-tex-b64="XHZhcmVwc2lsb24="></span>을 포함해야 한다면 새로운 Start Symbol <span class="math-inline" data-tex-b64="U18w"></span>를 만들고

<div class="math-display" data-tex-b64="U18wXHJpZ2h0YXJyb3cgU1xtaWRcdmFyZXBzaWxvbg=="></div>

로 두어 Empty String을 보존한다.

## Unit Production

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IEI="></div>

처럼 Variable 하나만 오른쪽에 있는 규칙을 Unit Production이라고 한다.

Unit Pair <span class="math-inline" data-tex-b64="KEEsQik="></span>는 <span class="math-inline" data-tex-b64="QVxSaWdodGFycm93XipC"></span>를 Unit Production만 사용해 유도할 수 있음을 뜻한다. 모든 Unit Pair를 구한 뒤 <span class="math-inline" data-tex-b64="Qg=="></span>의 Non-unit Production을 <span class="math-inline" data-tex-b64="QQ=="></span>에도 복사하고 Unit Production을 제거한다.

## Generating Symbol

Variable <span class="math-inline" data-tex-b64="QQ=="></span>가 Terminal String을 생성할 수 있으면 Generating이다.

<div class="math-display" data-tex-b64="QVxSaWdodGFycm93Xip3XGluXFNpZ21hXio="></div>

먼저 오른쪽이 Terminal만인 Production의 왼쪽 Variable을 표시하고, 오른쪽의 모든 Variable이 이미 Generating인 Production을 반복하여 추가한다. 끝까지 표시되지 않은 Variable과 관련 Production은 제거한다.

## Reachable Symbol

Start Symbol에서 어떤 Sentential Form을 거쳐 등장할 수 있는 Symbol을 Reachable이라고 한다.

<div class="math-display" data-tex-b64="U1xSaWdodGFycm93XipcYWxwaGEgWFxiZXRh"></div>

이면 <span class="math-inline" data-tex-b64="WA=="></span>는 Reachable이다. Start Symbol에서 Graph Search를 하듯 Production 오른쪽의 Symbol을 따라가며 표시한다.

## 제거 순서

일반적인 순서는 다음과 같다.

1. ε-production 제거
2. Unit Production 제거
3. Non-generating Symbol 제거
4. Unreachable Symbol 제거

앞 단계의 변환이 새로운 Unit Production 등을 만들 수 있으므로 순서를 고려해야 한다.

## 예제

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IEFCXG1pZCBhLFxxcXVhZCBBXHJpZ2h0YXJyb3cgYUFcbWlkXHZhcmVwc2lsb24sXHFxdWFkIEJccmlnaHRhcnJvdyBDLFxxcXVhZCBDXHJpZ2h0YXJyb3cgYixccXF1YWQgRFxyaWdodGFycm93IGQ="></div>

- <span class="math-inline" data-tex-b64="QQ=="></span>는 Nullable이다.
- <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEFC"></span>에서 <span class="math-inline" data-tex-b64="QQ=="></span>를 제거한 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEI="></span>를 추가한다.
- <span class="math-inline" data-tex-b64="QlxyaWdodGFycm93IEM="></span>, <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEI="></span>는 Unit Production이다.
- <span class="math-inline" data-tex-b64="Q1xyaWdodGFycm93IGI="></span>를 <span class="math-inline" data-tex-b64="Qg=="></span>, <span class="math-inline" data-tex-b64="Uw=="></span>에 전달한다.
- <span class="math-inline" data-tex-b64="RA=="></span>는 Start Symbol에서 도달할 수 없으므로 제거한다.

## 정리

- ε-production 제거에는 Nullable Variable의 모든 선택 조합이 필요하다.
- Unit Production은 Unit Pair Closure로 제거한다.
- Generating 여부와 Reachable 여부는 서로 다른 조건이다.
- Simplification은 Language를 유지하면서 Parsing과 Normal Form 변환을 쉽게 한다.

## 연습 문제

### 1번

다음 Grammar의 Nullable Variable을 모두 구한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IEFCXG1pZCBjLFxxdWFkIEFccmlnaHRhcnJvd1x2YXJlcHNpbG9uLFxxdWFkIEJccmlnaHRhcnJvdyBDRCxccXVhZCBDXHJpZ2h0YXJyb3dcdmFyZXBzaWxvbixccXVhZCBEXHJpZ2h0YXJyb3cgZFxtaWRcdmFyZXBzaWxvbg=="></div>

### 2번

다음 Grammar에서 Useless Variable을 찾는다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFBXG1pZCBiLFxxdWFkIEFccmlnaHRhcnJvdyBhQVxtaWQgYSxccXVhZCBCXHJpZ2h0YXJyb3cgYkIsXHF1YWQgQ1xyaWdodGFycm93IGM="></div>

## 풀이

### 1번

<span class="math-inline" data-tex-b64="QQ=="></span>, <span class="math-inline" data-tex-b64="Qw=="></span>, <span class="math-inline" data-tex-b64="RA=="></span>는 직접 Nullable이다. <span class="math-inline" data-tex-b64="QlxyaWdodGFycm93IENE"></span>에서 <span class="math-inline" data-tex-b64="Qw=="></span>, <span class="math-inline" data-tex-b64="RA=="></span>가 모두 Nullable이므로 <span class="math-inline" data-tex-b64="Qg=="></span>도 Nullable이다. <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEFC"></span>에서 둘 다 Nullable이므로 <span class="math-inline" data-tex-b64="Uw=="></span>도 Nullable이다.

### 2번

<span class="math-inline" data-tex-b64="Qg=="></span>는 Terminal String으로 종료하는 Production이 없어 Non-generating이다. <span class="math-inline" data-tex-b64="Qw=="></span>는 Generating이지만 Start Symbol에서 도달할 수 없어 Unreachable이다. 따라서 둘 다 Useless Variable이다.
