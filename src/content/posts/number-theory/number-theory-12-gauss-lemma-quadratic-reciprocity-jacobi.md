---
title: "12. Gauss’s Lemma, Quadratic Reciprocity, and the Jacobi Symbol"
description: "Gauss lemma에서 두 보충법칙과 이차상호법칙을 유도하고 Jacobi symbol로 계산 범위를 합성수 분모까지 확장한다."
date: "2026-02-08"
category: "정수론"
tags: ["number-theory", "gauss-lemma", "quadratic-reciprocity", "jacobi-symbol", "legendre-symbol"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 12
featured: false
draft: false
---

Euler’s Criterion은 Legendre Symbol을 계산할 수 있지만 지수가 크면 번거롭다. Gauss’s Lemma와 Quadratic Reciprocity는 큰 수에 대한 symbol을 작은 수로 반복해서 바꾸는 계산법을 제공한다.

## Gauss’s Lemma

홀수 소수 <span class="math-inline" data-tex-b64="cA=="></span>와 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>에 대해

<div class="math-display" data-tex-b64="YSwyYSxcbGRvdHMsXGZyYWN7cC0xfXsyfWE="></div>

의 least absolute residues를 취한다. 그중 음수인 것, 동치로 least positive residue가 <span class="math-inline" data-tex-b64="cC8y"></span>보다 큰 것의 개수를 <span class="math-inline" data-tex-b64="bQ=="></span>이라 하자.

> <div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgYXBccmlnaHQpPSgtMSlebQ=="></div>

### 증명

각 residue의 절댓값을 <span class="math-inline" data-tex-b64="cl8xLFxsZG90cyxyX3socC0xKS8yfQ=="></span>라 하자. 이들은 <span class="math-inline" data-tex-b64="MSwyLFxsZG90cywocC0xKS8y"></span>의 순열이다. 따라서

<div class="math-display" data-tex-b64="YV57KHAtMSkvMn1cbGVmdChcZnJhY3twLTF9ezJ9XHJpZ2h0KSEKXGVxdWl2KC0xKV5tXGxlZnQoXGZyYWN7cC0xfXsyfVxyaWdodCkhXHBtb2QgcA=="></div>

이다. factorial을 약분하고 Euler’s Criterion을 적용하면 결과를 얻는다.

## 첫 번째 보충법칙

<span class="math-inline" data-tex-b64="YT0tMQ=="></span>이면 모든 <span class="math-inline" data-tex-b64="az0xLFxsZG90cywocC0xKS8y"></span>가 음의 residue를 만들므로

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7LTF9e3B9XHJpZ2h0KT0oLTEpXnsocC0xKS8yfQ=="></div>

이다.

## 두 번째 보충법칙

<span class="math-inline" data-tex-b64="YT0y"></span>일 때 <span class="math-inline" data-tex-b64="Mms+cC8y"></span>가 되는 항의 개수를 세면

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMycFxyaWdodCk9KC0xKV57KHBeMi0xKS84fQo9XGJlZ2lue2Nhc2VzfQoxLCZwXGVxdWl2XHBtMVxwbW9kOCxcXAotMSwmcFxlcXVpdlxwbTNccG1vZDguClxlbmR7Y2FzZXN9"></div>

이다. 지수 <span class="math-inline" data-tex-b64="KHBeMi0xKS84"></span>의 parity는 <span class="math-inline" data-tex-b64="cA=="></span>의 modulo 8 값만으로 결정된다.

## Floor Sum Form

Gauss’s Lemma는 다음 형태로도 쓸 수 있다.

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgYXBccmlnaHQpPSgtMSlee1xzdW1fe2s9MX1eeyhwLTEpLzJ9XGxlZnRcbGZsb29yIGFrL3BccmlnaHRccmZsb29yfQ=="></div>

각 <span class="math-inline" data-tex-b64="YWs="></span>를 <span class="math-inline" data-tex-b64="cA=="></span>로 나눈 몫의 parity가 residue가 상반부로 넘어가는 횟수를 기록한다.

## Quadratic Reciprocity Law

서로 다른 홀수 소수 <span class="math-inline" data-tex-b64="cCxx"></span>에 대해

> <div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgcHFccmlnaHQpXGxlZnQoXGZyYWMgcXBccmlnaHQpCj4gPSgtMSlee1xmcmFje3AtMX17Mn1cZnJhY3txLTF9ezJ9fQ=="></div>

이다. 즉 둘 중 하나가 <span class="math-inline" data-tex-b64="MVxwbW9kNA=="></span>이면 symbol을 그대로 뒤집을 수 있고, 둘 다 <span class="math-inline" data-tex-b64="M1xwbW9kNA=="></span>이면 부호가 바뀐다.

### 격자점 증명의 핵심

직사각형

<div class="math-display" data-tex-b64="MVxsZSB4XGxlXGZyYWN7cC0xfXsyfSxccXF1YWQxXGxlIHlcbGVcZnJhY3txLTF9ezJ9"></div>

의 격자점을 직선 <span class="math-inline" data-tex-b64="eT0ocS9wKXg="></span> 위아래로 나눈다. 직선 위에는 격자점이 없고 전체 개수는 <span class="math-inline" data-tex-b64="KChwLTEpLzIpKChxLTEpLzIp"></span>이다. 두 영역의 격자점 수는 각각 Gauss floor sum의 지수가 되므로 parity를 비교하면 reciprocity law를 얻는다.

## 계산 예제

<span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWN7Mjl9ezUzfVxyaWdodCk="></span>을 계산하자. 29와 53은 모두 <span class="math-inline" data-tex-b64="MVxwbW9kNA=="></span>이므로

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7Mjl9ezUzfVxyaWdodCk9XGxlZnQoXGZyYWN7NTN9ezI5fVxyaWdodCk9XGxlZnQoXGZyYWN7MjR9ezI5fVxyaWdodCk="></div>

이다. <span class="math-inline" data-tex-b64="MjQ9Ml4zXGNkb3Qz"></span>이므로

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7MjR9ezI5fVxyaWdodCk9XGxlZnQoXGZyYWMyezI5fVxyaWdodCleM1xsZWZ0KFxmcmFjM3syOX1ccmlnaHQp"></div>

이다. <span class="math-inline" data-tex-b64="MjlcZXF1aXY1XHBtb2Q4"></span>이므로 첫 항은 -1이고, reciprocity를 사용하면 <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWMzezI5fVxyaWdodCk9LTE="></span>이므로 전체 값은 1이다.

## Jacobi Symbol

홀수 양의 정수

<div class="math-display" data-tex-b64="bj1ccHJvZF97aT0xfV57cn1wX2lee2VfaX0="></div>

에 대해 Jacobi symbol을

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgYW5ccmlnaHQpPVxwcm9kX3tpPTF9XntyfVxsZWZ0KFxmcmFje2F9e3BfaX1ccmlnaHQpXntlX2l9"></div>

로 정의한다. Legendre Symbol의 곱셈성, 두 보충법칙, reciprocity law는 Jacobi symbol에도 같은 계산 규칙으로 확장된다.

특히

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7LTF9e259XHJpZ2h0KT0oLTEpXnsobi0xKS8yfSxccXF1YWQKXGxlZnQoXGZyYWMyblxyaWdodCk9KC0xKV57KG5eMi0xKS84fQ=="></div>

이고 서로소인 홀수 <span class="math-inline" data-tex-b64="bSxu"></span>에 대해

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMgbW5ccmlnaHQpXGxlZnQoXGZyYWMgbm1ccmlnaHQpCj0oLTEpXntcZnJhY3ttLTF9ezJ9XGZyYWN7bi0xfXsyfX0="></div>

이다.

## Jacobi Symbol의 주의점

<span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWMgYW5ccmlnaHQpPS0x"></span>이면 <span class="math-inline" data-tex-b64="YQ=="></span>는 modulo <span class="math-inline" data-tex-b64="bg=="></span>의 제곱이 아니다. 그러나 값이 1이라고 해서 반드시 제곱인 것은 아니다. 예를 들어

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWMyezE1fVxyaWdodCk9XGxlZnQoXGZyYWMyM1xyaWdodClcbGVmdChcZnJhYzI1XHJpZ2h0KT0oLTEpKC0xKT0x"></div>

이지만 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MlxwbW9kezE1fQ=="></span>는 해가 없다. Jacobi symbol은 여러 소수 법의 부호를 곱하므로 두 nonresidue가 상쇄될 수 있다.

## 정리

Gauss’s Lemma는 배수의 residue가 상반부로 넘어가는 횟수로 Legendre Symbol을 계산한다. 두 보충법칙과 Quadratic Reciprocity는 symbol을 빠르게 축소한다. Jacobi Symbol은 같은 계산 규칙을 합성수 분모에 확장하지만, 값 1을 quadratic residue의 충분조건으로 해석하면 안 된다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWMyezQxfVxyaWdodCk="></span>을 계산한다.
2. <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWN7Mzd9ezEwMX1ccmlnaHQp"></span>을 quadratic reciprocity로 계산한다.
3. <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWN7MTl9ezQ1fVxyaWdodCk="></span>을 계산하고 그 값의 의미를 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="NDFcZXF1aXYxXHBtb2Q4"></span>이므로 값은 1이다.

### 2번

둘 다 <span class="math-inline" data-tex-b64="MVxwbW9kNA=="></span>이므로

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7Mzd9ezEwMX1ccmlnaHQpPVxsZWZ0KFxmcmFjezEwMX17Mzd9XHJpZ2h0KT1cbGVmdChcZnJhY3syN317Mzd9XHJpZ2h0KQ=="></div>

이다. <span class="math-inline" data-tex-b64="Mjc9M14z"></span>이고 <span class="math-inline" data-tex-b64="MzdcZXF1aXYxXHBtb2R7MTJ9"></span>이므로 <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWMzezM3fVxyaWdodCk9MQ=="></span>이다. 따라서 값은 1이다.

### 3번

<div class="math-display" data-tex-b64="XGxlZnQoXGZyYWN7MTl9ezQ1fVxyaWdodCk9XGxlZnQoXGZyYWN7MTl9ezN9XHJpZ2h0KV4yXGxlZnQoXGZyYWN7MTl9ezV9XHJpZ2h0KT0xXGNkb3RcbGVmdChcZnJhYzQ1XHJpZ2h0KT0x"></div>

이다. 그러나 분모가 합성수이므로 이것만으로 <span class="math-inline" data-tex-b64="MTk="></span>가 modulo 45의 quadratic residue라고 결론내릴 수는 없다.
