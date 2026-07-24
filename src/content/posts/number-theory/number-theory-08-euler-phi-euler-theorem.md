---
title: "8. Euler’s Phi Function and Euler’s Theorem"
description: "Euler의 phi 함수의 곱셈성과 일반 공식을 증명하고 reduced residue system에서 Euler 정리를 유도한다."
date: "2026-02-02"
category: "정수론"
tags: ["number-theory", "euler-phi", "euler-theorem", "reduced-residue-system", "gauss-identity"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 8
featured: false
draft: false
---

Euler’s phi function은 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 곱셈 역원을 가지는 원소의 개수를 센다. 이 함수는 합동식의 주기를 결정하고 Fermat’s Little Theorem을 합성수 법으로 확장한다.

## Euler’s Phi Function

<div class="math-display" data-tex-b64="XHZhcnBoaShuKT1cI1x7YVxpblxtYXRoYmIgWlxtaWQxXGxlIGFcbGUgbixcIFxnY2QoYSxuKT0xXH0="></div>

로 정의한다. 예를 들어

<div class="math-display" data-tex-b64="XHZhcnBoaSgxOCk9XCNcezEsNSw3LDExLDEzLDE3XH09Ng=="></div>

이다. <span class="math-inline" data-tex-b64="cA=="></span>가 소수이면 <span class="math-inline" data-tex-b64="MSxcbGRvdHMscC0x"></span>이 모두 <span class="math-inline" data-tex-b64="cA=="></span>와 서로소이므로 <span class="math-inline" data-tex-b64="XHZhcnBoaShwKT1wLTE="></span>이다.

## Prime Power의 phi 함수

<span class="math-inline" data-tex-b64="MVxsZSBhXGxlIHBeaw=="></span> 중 <span class="math-inline" data-tex-b64="cA=="></span>와 서로소가 아닌 수는 정확히 <span class="math-inline" data-tex-b64="cA=="></span>의 배수이며 <span class="math-inline" data-tex-b64="cF57ay0xfQ=="></span>개이다. 따라서

<div class="math-display" data-tex-b64="XHZhcnBoaShwXmspPXBeay1wXntrLTF9PXBea1xsZWZ0KDEtXGZyYWMxcFxyaWdodCk="></div>

이다.

## Multiplicativity

> <span class="math-inline" data-tex-b64="XGdjZChtLG4pPTE="></span>이면
>
> <div class="math-display" data-tex-b64="XHZhcnBoaShtbik9XHZhcnBoaShtKVx2YXJwaGkobik="></div>

### 증명

Chinese Remainder Theorem에 의해

<div class="math-display" data-tex-b64="XG1hdGhiYiBaLyhtbilcbWF0aGJiIFpcY29uZ1xtYXRoYmIgWi9tXG1hdGhiYiBaXHRpbWVzXG1hdGhiYiBaL25cbWF0aGJiIFo="></div>

이다. residue <span class="math-inline" data-tex-b64="eA=="></span>가 <span class="math-inline" data-tex-b64="bW4="></span>과 서로소일 필요충분조건은 <span class="math-inline" data-tex-b64="eA=="></span>가 <span class="math-inline" data-tex-b64="bQ=="></span>과도, <span class="math-inline" data-tex-b64="bg=="></span>과도 서로소인 것이다. 따라서 invertible residue의 선택은 두 법에서 독립적이며 개수는 곱이 된다.

이를 소인수분해에 적용하면

> <div class="math-display" data-tex-b64="XHZhcnBoaShuKT1uXHByb2Rfe3BcbWlkIG59XGxlZnQoMS1cZnJhYzFwXHJpZ2h0KQ=="></div>

을 얻는다. 곱은 <span class="math-inline" data-tex-b64="bg=="></span>을 나누는 서로 다른 소수에 대해서만 취한다.

## <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>의 parity

<span class="math-inline" data-tex-b64="bj4y"></span>이면 <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>은 짝수이다. <span class="math-inline" data-tex-b64="YQ=="></span>가 <span class="math-inline" data-tex-b64="bg=="></span>과 서로소이면 <span class="math-inline" data-tex-b64="bi1h"></span>도 서로소이고, <span class="math-inline" data-tex-b64="YVxlcXVpdiBuLWFccG1vZCBu"></span>이면 <span class="math-inline" data-tex-b64="MmFcZXF1aXYwXHBtb2Qgbg=="></span>이다. <span class="math-inline" data-tex-b64="YQ=="></span>가 invertible이므로 <span class="math-inline" data-tex-b64="blxtaWQy"></span>가 되어 <span class="math-inline" data-tex-b64="bj4y"></span>에 모순이다. 따라서 원소들이 서로 다른 쌍 <span class="math-inline" data-tex-b64="XHthLG4tYVx9"></span>를 이룬다.

## Reduced Residue System

modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 <span class="math-inline" data-tex-b64="bg=="></span>과 서로소인 나머지를 하나씩 모은 집합을 reduced residue system이라고 한다.

<div class="math-display" data-tex-b64="Uj1ce2FfMSxhXzIsXGxkb3RzLGFfe1x2YXJwaGkobil9XH0="></div>

<span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 <span class="math-inline" data-tex-b64="YWFfMSxcbGRvdHMsYWFfe1x2YXJwaGkobil9"></span>도 reduced residue system의 순열이다. 실제로 두 항이 합동이면 <span class="math-inline" data-tex-b64="YQ=="></span>를 약분할 수 있어 원래 두 항이 같아진다.

## Euler’s Theorem

> <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면
>
> <div class="math-display" data-tex-b64="YV57XHZhcnBoaShuKX1cZXF1aXYxXHBtb2Qgbg=="></div>

### 증명

reduced residue system에 <span class="math-inline" data-tex-b64="YQ=="></span>를 곱한 집합은 원래 집합의 순열이므로

<div class="math-display" data-tex-b64="YV57XHZhcnBoaShuKX1hXzFhXzJcY2RvdHMgYV97XHZhcnBoaShuKX1cZXF1aXYgYV8xYV8yXGNkb3RzIGFfe1x2YXJwaGkobil9XHBtb2Qgbg=="></div>

이다. 각 <span class="math-inline" data-tex-b64="YV9p"></span>는 <span class="math-inline" data-tex-b64="bg=="></span>과 서로소이므로 전체 곱을 약분하여 정리를 얻는다.

<span class="math-inline" data-tex-b64="bj1w"></span>가 소수이면 <span class="math-inline" data-tex-b64="XHZhcnBoaShwKT1wLTE="></span>이므로 Fermat’s Little Theorem이 된다.

## 큰 거듭제곱 계산

<span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 지수를 modulo <span class="math-inline" data-tex-b64="XHZhcnBoaShuKQ=="></span>으로 줄일 수 있다. 예를 들어 <span class="math-inline" data-tex-b64="M157MjU2fQ=="></span>의 마지막 두 자리를 계산하면

<div class="math-display" data-tex-b64="XHZhcnBoaSgxMDApPTQwLFxxcXVhZDI1NlxlcXVpdjE2XHBtb2R7NDB9"></div>

이므로 <span class="math-inline" data-tex-b64="M157MjU2fVxlcXVpdjNeezE2fVxlcXVpdjIxXHBtb2R7MTAwfQ=="></span>이다.

단, <span class="math-inline" data-tex-b64="XGdjZChhLG4pXG5lMQ=="></span>인 경우에는 Euler 정리를 그대로 적용하면 안 된다. 이때는 prime power별로 계산한 뒤 CRT를 사용하는 것이 안전하다.

## Gauss’s Identity

> <div class="math-display" data-tex-b64="XHN1bV97ZFxtaWQgbn1cdmFycGhpKGQpPW4="></div>

### 증명

<span class="math-inline" data-tex-b64="MSwyLFxsZG90cyxu"></span>을 <span class="math-inline" data-tex-b64="XGdjZChrLG4p"></span>의 값에 따라 분할한다. <span class="math-inline" data-tex-b64="XGdjZChrLG4pPWQ="></span>인 <span class="math-inline" data-tex-b64="aw=="></span>는 <span class="math-inline" data-tex-b64="az1kbQ=="></span>으로 쓸 수 있고

<div class="math-display" data-tex-b64="XGdjZChtLG4vZCk9MQ=="></div>

이다. 따라서 그러한 <span class="math-inline" data-tex-b64="aw=="></span>의 개수는 <span class="math-inline" data-tex-b64="XHZhcnBoaShuL2Qp"></span>이다. 모든 약수 <span class="math-inline" data-tex-b64="ZFxtaWQgbg=="></span>에 대해 합하면 <span class="math-inline" data-tex-b64="bg=="></span>개의 정수를 정확히 한 번씩 세므로 결과를 얻는다.

## Reduced Residue의 합

<span class="math-inline" data-tex-b64="bj4x"></span>일 때 reduced residue system의 원소를 최소 양의 나머지로 택하면

<div class="math-display" data-tex-b64="XHN1bV97XHN1YnN0YWNrezFcbGUgYTxuXFxcZ2NkKGEsbik9MX19YT1cZnJhY3tuXHZhcnBoaShuKX0y"></div>

이다. 각 <span class="math-inline" data-tex-b64="YQ=="></span>를 <span class="math-inline" data-tex-b64="bi1h"></span>와 짝지으면 한 쌍의 합이 <span class="math-inline" data-tex-b64="bg=="></span>이기 때문이다.

## Möbius Formula for phi

Gauss’s identity에 Möbius inversion을 적용하면

<div class="math-display" data-tex-b64="XHZhcnBoaShuKT1cc3VtX3tkXG1pZCBufVxtdShkKVxmcmFjIG5kCj1uXHN1bV97ZFxtaWQgbn1cZnJhY3tcbXUoZCl9ZA=="></div>

을 얻는다. <span class="math-inline" data-tex-b64="XG11KGQp"></span>가 square-free 약수에 대해서만 0이 아니므로 소인수별로 곱을 전개하면 다시

<div class="math-display" data-tex-b64="XHZhcnBoaShuKT1uXHByb2Rfe3BcbWlkIG59XGxlZnQoMS1cZnJhYzFwXHJpZ2h0KQ=="></div>

이 나온다.

## 정리

Euler’s phi function은 invertible residue의 개수를 세며 prime power 공식과 multiplicativity로 계산된다. Reduced residue system에 서로소인 수를 곱하면 순열이 된다는 사실이 Euler’s Theorem의 핵심이다. Gauss identity와 Möbius inversion은 phi 함수를 약수합의 관점에서 다시 표현한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="XHZhcnBoaSgzNjAp"></span>을 구한다.
2. <span class="math-inline" data-tex-b64="N157MTAwMH0="></span>을 40으로 나눈 나머지를 구한다.
3. <span class="math-inline" data-tex-b64="XHN1bV97ZFxtaWQxMn1cdmFycGhpKGQpPTEy"></span>를 직접 확인한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="MzYwPTJeM1xjZG90M14yXGNkb3Q1"></div>

이므로

<div class="math-display" data-tex-b64="XHZhcnBoaSgzNjApPTM2MFxsZWZ0KDEtXGZyYWMxMlxyaWdodClcbGVmdCgxLVxmcmFjMTNccmlnaHQpXGxlZnQoMS1cZnJhYzE1XHJpZ2h0KT05Ng=="></div>

이다.

### 2번

<span class="math-inline" data-tex-b64="XGdjZCg3LDQwKT0x"></span>이고 <span class="math-inline" data-tex-b64="XHZhcnBoaSg0MCk9MTY="></span>이다. <span class="math-inline" data-tex-b64="MTAwMFxlcXVpdjhccG1vZHsxNn0="></span>이므로

<div class="math-display" data-tex-b64="N157MTAwMH1cZXF1aXY3XjhcZXF1aXYxXHBtb2R7NDB9"></div>

이다.

### 3번

12의 약수는 <span class="math-inline" data-tex-b64="MSwyLDMsNCw2LDEy"></span>이고 phi 값은 각각 <span class="math-inline" data-tex-b64="MSwxLDIsMiwyLDQ="></span>이다. 합은 12이다.
