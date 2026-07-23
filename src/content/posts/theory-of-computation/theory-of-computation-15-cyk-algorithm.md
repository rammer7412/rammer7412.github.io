---
title: "15. CYK Algorithm과 CFG Membership"
description: "CNF Grammar에서 Dynamic Programming으로 문자열 Membership을 판정하는 CYK Table 구성과 복잡도를 설명한다."
date: "2025-08-20"
category: "계산이론"
tags: ["theory-of-computation", "cyk", "dynamic-programming", "cfg-membership"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 15
featured: false
draft: false
---
CFG와 String <span class="math-inline" data-tex-b64="dw=="></span>가 주어졌을 때 <span class="math-inline" data-tex-b64="d1xpbiBMKEcp"></span>인지 판정하는 문제를 Membership Problem이라고 한다. <strong>CYK Algorithm</strong>은 Grammar가 Chomsky Normal Form일 때 Dynamic Programming으로 이 문제를 해결한다.

## 기본 아이디어

String을 모든 부분 문자열로 나누고, 각 부분 문자열을 생성할 수 있는 Variable의 집합을 Table에 저장한다.

<div class="math-display" data-tex-b64="dz1hXzFhXzJcY2RvdHMgYV9u"></div>

<span class="math-inline" data-tex-b64="Vl97aSxcZWxsfQ=="></span>을 위치 <span class="math-inline" data-tex-b64="aQ=="></span>에서 시작하는 길이 <span class="math-inline" data-tex-b64="XGVsbA=="></span>의 부분 문자열을 생성하는 Variable Set이라고 하자.

<div class="math-display" data-tex-b64="Vl97aSxcZWxsfT1ce0FcbWlkIEFcUmlnaHRhcnJvd14qYV9pXGNkb3RzIGFfe2krXGVsbC0xfVx9"></div>

최종적으로

<div class="math-display" data-tex-b64="U1xpbiBWX3sxLG59"></div>

이면 String을 Accept한다.

## 초기화

길이 1인 부분 문자열은 Terminal Production으로 채운다.

<div class="math-display" data-tex-b64="Vl97aSwxfT1ce0FcbWlkIEFccmlnaHRhcnJvdyBhX2lcaW4gUFx9"></div>

## 점화식

길이 <span class="math-inline" data-tex-b64="XGVsbFxnZTI="></span>인 부분 문자열을 왼쪽 길이 <span class="math-inline" data-tex-b64="aw=="></span>, 오른쪽 길이 <span class="math-inline" data-tex-b64="XGVsbC1r"></span>로 나눈다.

<div class="math-display" data-tex-b64="QVxpbiBWX3tpLFxlbGx9"></div>

이려면 어떤 <span class="math-inline" data-tex-b64="aw=="></span>와 Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJD"></span>가 있어

<div class="math-display" data-tex-b64="QlxpbiBWX3tpLGt9LFxxcXVhZCBDXGluIFZfe2krayxcZWxsLWt9"></div>

를 만족해야 한다.

모든 분할 위치 <span class="math-inline" data-tex-b64="az0xLFxsZG90cyxcZWxsLTE="></span>를 검사한다.

## 작은 예제

Grammar가

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IEFCXG1pZCBCQyxccXVhZCBBXHJpZ2h0YXJyb3cgYSxccXVhZCBCXHJpZ2h0YXJyb3cgYixccXVhZCBDXHJpZ2h0YXJyb3cgYQ=="></div>

이고 String이 <span class="math-inline" data-tex-b64="YWI="></span>라고 하자.

길이 1 Cell은

<div class="math-display" data-tex-b64="Vl97MSwxfT1ce0EsQ1x9LFxxcXVhZCBWX3syLDF9PVx7Qlx9"></div>

이다. <span class="math-inline" data-tex-b64="QVxpbiBWX3sxLDF9"></span>, <span class="math-inline" data-tex-b64="QlxpbiBWX3syLDF9"></span>이고 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEFC"></span>가 있으므로

<div class="math-display" data-tex-b64="U1xpbiBWX3sxLDJ9"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="YWJcaW4gTChHKQ=="></span>이다.

## Table 방향

구현에서는 2차원 배열을 사용한다. 아래 행에 길이 1인 부분 문자열을 두고 위로 갈수록 긴 부분 문자열을 두는 삼각형 Table로 그리기도 한다. 중요한 것은 위치와 길이를 일관되게 관리하는 것이다.

## Parse Tree 복원

Membership만 확인하려면 Variable Set만 저장하면 된다. 실제 Parse Tree를 복원하려면 각 Variable이 어떤 분할 <span class="math-inline" data-tex-b64="aw=="></span>와 Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJD"></span>를 통해 들어왔는지 Backpointer를 함께 저장한다.

## 시간복잡도

시작 위치가 <span class="math-inline" data-tex-b64="TyhuKQ=="></span>, 길이가 <span class="math-inline" data-tex-b64="TyhuKQ=="></span>, 분할 위치가 <span class="math-inline" data-tex-b64="TyhuKQ=="></span>이므로 Grammar 크기를 고정하면

<div class="math-display" data-tex-b64="TyhuXjMp"></div>

이다. Production 탐색 비용까지 포함하면 <span class="math-inline" data-tex-b64="TyhuXjN8UHwp"></span> 형태로 표현할 수 있다.

## CYK가 CNF를 요구하는 이유

CNF Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJD"></span>는 부분 문자열을 정확히 두 조각으로 나누는 점화식과 맞는다. Terminal Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IGE="></span>는 길이 1 Cell의 Base Case가 된다.

## 정리

- CYK는 CNF Grammar의 Membership을 판정한다.
- 길이 1 Cell에서 시작하여 더 긴 부분 문자열을 조합한다.
- Root Cell에 Start Symbol이 있으면 Accept한다.
- Backpointer를 저장하면 Parse Tree도 복원할 수 있다.

## 연습 문제

### 1번

Grammar

<div class="math-display" data-tex-b64="U1xyaWdodGFycm93IEFCLFxxdWFkIEFccmlnaHRhcnJvdyBhLFxxdWFkIEJccmlnaHRhcnJvdyBi"></div>

에 대해 <span class="math-inline" data-tex-b64="YWI="></span>, <span class="math-inline" data-tex-b64="YWE="></span>의 Membership을 CYK 관점에서 판정한다.

### 2번

왜 Production <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJDRA=="></span>를 그대로 두면 기본 CYK 점화식에 직접 사용할 수 없는지 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="YWI="></span>에서는 첫 Cell에 <span class="math-inline" data-tex-b64="QQ=="></span>, 둘째 Cell에 <span class="math-inline" data-tex-b64="Qg=="></span>가 있고 <span class="math-inline" data-tex-b64="U1xyaWdodGFycm93IEFC"></span>이므로 Root Cell에 <span class="math-inline" data-tex-b64="Uw=="></span>가 들어가 Accept한다. <span class="math-inline" data-tex-b64="YWE="></span>에서는 둘째 Cell에도 <span class="math-inline" data-tex-b64="QQ=="></span>만 있고 <span class="math-inline" data-tex-b64="Qg=="></span>가 없으므로 <span class="math-inline" data-tex-b64="Uw=="></span>를 만들 수 없어 Reject한다.

### 2번

기본 CYK는 부분 문자열을 두 조각으로 나누고 <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJD"></span>를 검사한다. 오른쪽에 Variable이 3개이면 두 조각만으로 직접 대응할 수 없다. CNF 변환으로 <span class="math-inline" data-tex-b64="QVxyaWdodGFycm93IEJY"></span>, <span class="math-inline" data-tex-b64="WFxyaWdodGFycm93IENE"></span>처럼 Binary Production으로 바꿔야 한다.
