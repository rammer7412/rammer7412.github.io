---
title: "9. Regular Grammar와 Regular Language"
description: "Right-linear·Left-linear Grammar의 형태와 Finite Automaton 사이의 상호 변환을 설명한다."
date: "2025-08-14"
category: "계산이론"
tags: ["theory-of-computation", "regular-grammar", "right-linear", "finite-automata"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 9
featured: false
draft: false
---
**Regular Grammar**는 Production Rule의 형태를 제한하여 Finite Automaton과 같은 Language Class를 생성하는 Grammar이다. 일반적으로 Right-linear Grammar 또는 Left-linear Grammar를 사용한다.

## Right-linear Grammar

Production이 다음 형태를 가진다.

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IGFCLFxxcXVhZCBBXHJpZ2h0YXJyb3cgYSxccXF1YWQgQVxyaWdodGFycm93XHZhcmVwc2lsb24="></div>

여기서 <span class="math-inline" data-tex-b64="QSxCXGluIFY="></span>, <span class="math-inline" data-tex-b64="YVxpblxTaWdtYQ=="></span>이다. Variable이 있다면 오른쪽 끝에 하나만 나타난다.

예를 들어

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93MFNcbWlkMUEsXHFxdWFkIEFccmlnaHRhcnJvdzBBXG1pZDE="></div>

는 처음 1이 나온 뒤 최종 1로 끝나는 구조를 만든다.

## Left-linear Grammar

Production이 다음 형태를 가진다.

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93IEJhLFxxcXVhZCBBXHJpZ2h0YXJyb3cgYSxccXF1YWQgQVxyaWdodGFycm93XHZhcmVwc2lsb24="></div>

Variable이 왼쪽 끝에 나타난다. Right-linear와 Left-linear Grammar는 각각 Regular Language를 생성한다. 그러나 두 형태를 한 Grammar에서 무제한으로 섞으면 Regular Language보다 강한 Language가 생성될 수 있으므로 주의해야 한다.

## Right-linear Grammar에서 NFA로

각 Variable을 NFA State로 만든다. 별도의 Accept State <span class="math-inline" data-tex-b64="cV9m"></span>를 추가할 수 있다.

- <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGFC"></span>는 Transition <span class="math-inline" data-tex-b64="QVx4cmlnaHRhcnJvd3thfUI="></span>로 만든다.
- <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGE="></span>는 <span class="math-inline" data-tex-b64="QVx4cmlnaHRhcnJvd3thfXFfZg=="></span>로 만든다.
- <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93XHZhcmVwc2lsb24="></span>이면 <span class="math-inline" data-tex-b64="QQ=="></span>를 Accept State로 둔다.
- Start Variable이 NFA Start State이다.

## NFA에서 Right-linear Grammar로

NFA의 각 State에 대응하는 Variable을 만든다.

- Transition <span class="math-inline" data-tex-b64="cV9pXHhyaWdodGFycm93e2F9cV9q"></span>마다 <span class="math-inline" data-tex-b64="QV9pXHJpZ2h0YXJyb3cgYUFfag=="></span>를 추가한다.
- Accept State <span class="math-inline" data-tex-b64="cV9p"></span>마다 <span class="math-inline" data-tex-b64="QV9pXHJpZ2h0YXJyb3dcdmFyZXBzaWxvbg=="></span>를 추가한다.
- NFA Start State에 대응하는 Variable을 Start Variable로 둔다.

## 예제

다음 Grammar를 생각한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93MFNcbWlkMUEsXHFxdWFkIEFccmlnaHRhcnJvdzBBXG1pZFx2YXJlcHNpbG9u"></div>

NFA는 State <span class="math-inline" data-tex-b64="Uw=="></span>, <span class="math-inline" data-tex-b64="QQ=="></span>를 가지고

- <span class="math-inline" data-tex-b64="U1x4cmlnaHRhcnJvd3swfVM="></span>
- <span class="math-inline" data-tex-b64="U1x4cmlnaHRhcnJvd3sxfUE="></span>
- <span class="math-inline" data-tex-b64="QVx4cmlnaHRhcnJvd3swfUE="></span>
- <span class="math-inline" data-tex-b64="QQ=="></span>는 Accept State

가 된다. 인식하는 Language는

<div class="math-display" data-tex-b64="MF4qMTBeKg=="></div>

이다.

## 세 표현의 동등성

다음 세 조건은 동치이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CiZMXHRleHR7IGlzIGFjY2VwdGVkIGJ5IGEgZmluaXRlIGF1dG9tYXRvbn1cXApcTG9uZ2xlZnRyaWdodGFycm93XDsmTFx0ZXh0eyBpcyBkZW5vdGVkIGJ5IGEgcmVndWxhciBleHByZXNzaW9ufVxcClxMb25nbGVmdHJpZ2h0YXJyb3dcOyZMXHRleHR7IGlzIGdlbmVyYXRlZCBieSBhIHJlZ3VsYXIgZ3JhbW1hcn0KXGVuZHthbGlnbmVkfQ=="></div>

이 동등성 덕분에 문제에 따라 가장 편리한 표현을 선택할 수 있다. Pattern은 RE가 간결하고, 실행은 DFA가 효율적이며, 문법적 생성은 Regular Grammar가 자연스럽다.

## 정리

- Right-linear Grammar는 Variable이 오른쪽 끝에 하나만 나타난다.
- Left-linear Grammar는 Variable이 왼쪽 끝에 하나만 나타난다.
- Regular Grammar와 Finite Automaton은 상호 변환할 수 있다.
- FA, RE, Regular Grammar는 같은 Regular Language Class를 표현한다.

## 연습 문제

### 1번

다음 Grammar를 NFA로 변환하고 Language를 설명한다.

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IGFTXG1pZCBiQSxccXF1YWQgQVxyaWdodGFycm93IGJBXG1pZFx2YXJlcHNpbG9u"></div>

### 2번

DFA에 State <span class="math-inline" data-tex-b64="cV8w"></span>, <span class="math-inline" data-tex-b64="cV8x"></span>이 있고 <span class="math-inline" data-tex-b64="cV8w"></span>에서 0은 <span class="math-inline" data-tex-b64="cV8w"></span>, 1은 <span class="math-inline" data-tex-b64="cV8x"></span>, <span class="math-inline" data-tex-b64="cV8x"></span>에서 0과 1은 <span class="math-inline" data-tex-b64="cV8x"></span>로 이동한다. <span class="math-inline" data-tex-b64="cV8x"></span>이 Accept State일 때 Right-linear Grammar를 작성한다.

## 풀이

### 1번

State <span class="math-inline" data-tex-b64="Uw=="></span>, <span class="math-inline" data-tex-b64="QQ=="></span>를 만들고 <span class="math-inline" data-tex-b64="QQ=="></span>를 Accept State로 둔다. Transition은 <span class="math-inline" data-tex-b64="U1x4cmlnaHRhcnJvd3thfVM="></span>, <span class="math-inline" data-tex-b64="U1x4cmlnaHRhcnJvd3tifUE="></span>, <span class="math-inline" data-tex-b64="QVx4cmlnaHRhcnJvd3tifUE="></span>이다. Language는

<div class="math-display" data-tex-b64="YV4qYmJeKg=="></div>

이다.

### 2번

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93MFNcbWlkMUE="></div>

<div class="math-display" data-tex-b64="QVxyaWdodGFycm93MEFcbWlkMUFcbWlkXHZhcmVwc2lsb24="></div>

로 둘 수 있다.
