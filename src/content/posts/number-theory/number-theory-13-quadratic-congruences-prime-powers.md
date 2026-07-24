---
title: "13. Quadratic Congruences modulo Prime Powers"
description: "소수 법의 제곱근을 Hensel lifting으로 소수 거듭제곱까지 확장하고 CRT로 일반 합성수 법의 해를 구성한다."
date: "2026-02-10"
category: "정수론"
tags: ["number-theory", "quadratic-congruence", "hensel-lifting", "prime-power", "chinese-remainder-theorem"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 13
featured: false
draft: false
---

Legendre Symbol은 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 제곱근의 존재 여부를 판정한다. 실제로 modulo <span class="math-inline" data-tex-b64="cF5r"></span> 또는 합성수에서 해를 구하려면 소수 법의 해를 단계적으로 올리고 CRT로 결합해야 한다.

## <span class="math-inline" data-tex-b64="cFxlcXVpdjNccG1vZDQ="></span>에서의 명시적 제곱근

<span class="math-inline" data-tex-b64="YQ=="></span>가 quadratic residue이고 <span class="math-inline" data-tex-b64="cFxlcXVpdjNccG1vZDQ="></span>이면

<div class="math-display" data-tex-b64="eFxlcXVpdlxwbSBhXnsocCsxKS80fVxwbW9kIHA="></div>

가 해이다. 실제로

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IGFeeyhwKzEpLzJ9PWFcY2RvdCBhXnsocC0xKS8yfVxlcXVpdiBhXHBtb2QgcA=="></div>

이며 Euler’s Criterion을 사용했다.

## Hensel Lifting의 기본 아이디어

<span class="math-inline" data-tex-b64="eF9rXjJcZXF1aXYgYVxwbW9ke3Bea30="></span>인 해 <span class="math-inline" data-tex-b64="eF9r"></span>를 알고 있다고 하자. 다음 단계의 해를

<div class="math-display" data-tex-b64="eF97aysxfT14X2srdCBwXms="></div>

로 놓는다. 전개하면

<div class="math-display" data-tex-b64="eF97aysxfV4yLWE9KHhfa14yLWEpKzJ4X2t0cF5rK3ReMnBeezJrfQ=="></div>

이다. <span class="math-inline" data-tex-b64="eF9rXjItYT1iIHBeaw=="></span>로 쓰고 modulo <span class="math-inline" data-tex-b64="cF57aysxfQ=="></span>만 보면 <span class="math-inline" data-tex-b64="dF4ycF57Mmt9"></span>는 사라지므로

<div class="math-display" data-tex-b64="YisyeF9rdFxlcXVpdjBccG1vZCBw"></div>

를 풀면 된다.

<span class="math-inline" data-tex-b64="cA=="></span>가 홀수이고 <span class="math-inline" data-tex-b64="cFxubWlkIGE="></span>이면 <span class="math-inline" data-tex-b64="cFxubWlkIHhfaw=="></span>이며 <span class="math-inline" data-tex-b64="Mnhfaw=="></span>가 invertible이다. 따라서 <span class="math-inline" data-tex-b64="dA=="></span>가 modulo <span class="math-inline" data-tex-b64="cA=="></span>에서 유일하고 각 root는 다음 단계로 유일하게 lift된다.

## 예제: <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MjNccG1vZHs0OX0="></span>

먼저 modulo 7에서

<div class="math-display" data-tex-b64="eF4yXGVxdWl2MlxwbW9kNw=="></div>

이고 root는 <span class="math-inline" data-tex-b64="eF8xPTMsNA=="></span>이다.

<span class="math-inline" data-tex-b64="eF8xPTM="></span>에서 <span class="math-inline" data-tex-b64="M14yLTIzPS0xND0oLTIpXGNkb3Q3"></span>이므로

<div class="math-display" data-tex-b64="LTIrNnRcZXF1aXYwXHBtb2Q3"></div>

이고 <span class="math-inline" data-tex-b64="dFxlcXVpdjVccG1vZDc="></span>이다. 따라서 <span class="math-inline" data-tex-b64="eD0zKzVcY2RvdDc9Mzg="></span>이다.

<span class="math-inline" data-tex-b64="eF8xPTQ="></span>에서는 <span class="math-inline" data-tex-b64="NF4yLTIzPS03"></span>이므로

<div class="math-display" data-tex-b64="LTErOHRcZXF1aXYwXHBtb2Q3"></div>

에서 <span class="math-inline" data-tex-b64="dFxlcXVpdjE="></span>이고 <span class="math-inline" data-tex-b64="eD0xMQ=="></span>이다. 따라서

<div class="math-display" data-tex-b64="eFxlcXVpdjExLDM4XHBtb2R7NDl9"></div>

이다.

## 일반 Hensel Lemma 관점

다항식 <span class="math-inline" data-tex-b64="Zih4KQ=="></span>에 대해 <span class="math-inline" data-tex-b64="Zih4XzApXGVxdWl2MFxwbW9kIHA="></span>이고

<div class="math-display" data-tex-b64="ZicoeF8wKVxub3RcZXF1aXYwXHBtb2QgcA=="></div>

이면 <span class="math-inline" data-tex-b64="eF8w"></span>는 각 <span class="math-inline" data-tex-b64="cF5r"></span>로 유일하게 lift된다. 이차식 <span class="math-inline" data-tex-b64="Zih4KT14XjItYQ=="></span>에서는 derivative가 <span class="math-inline" data-tex-b64="Mng="></span>이므로 위의 조건과 정확히 일치한다.

Derivative가 0인 singular root에서는 lift가 없거나 여러 개 생길 수 있어 별도 분석이 필요하다.

## Modulo <span class="math-inline" data-tex-b64="Ml5u"></span>

홀수 <span class="math-inline" data-tex-b64="eA=="></span>의 제곱은 항상

<div class="math-display" data-tex-b64="eF4yXGVxdWl2MVxwbW9kOA=="></div>

이다. 실제로 <span class="math-inline" data-tex-b64="eD0yaysx"></span>이면

<div class="math-display" data-tex-b64="eF4yPTRrKGsrMSkrMQ=="></div>

이고 <span class="math-inline" data-tex-b64="ayhrKzEp"></span>은 짝수이다.

따라서 홀수 <span class="math-inline" data-tex-b64="YQ=="></span>와 <span class="math-inline" data-tex-b64="blxnZTM="></span>에 대해

> <div class="math-display" data-tex-b64="eF4yXGVxdWl2IGFccG1vZHsyXm59XHRleHR76rCAIO2SgOumvH0KPiBccXVhZFxMb25nbGVmdHJpZ2h0YXJyb3dccXVhZCBhXGVxdWl2MVxwbW9kOA=="></div>

이다. 해가 존재하면 일반적으로 modulo <span class="math-inline" data-tex-b64="Ml5u"></span>에서 네 개의 홀수 root가 생긴다. 홀수 소수의 경우와 달리 derivative <span class="math-inline" data-tex-b64="Mng="></span>가 modulo 2에서 invertible하지 않기 때문에 lift 구조가 다르다.

## General Composite Modulus

<div class="math-display" data-tex-b64="bj0yXntlXzB9cF8xXntlXzF9XGNkb3RzIHBfcl57ZV9yfQ=="></div>

로 소인수분해하고 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이라 하자. CRT에 의해

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IGFccG1vZCBu"></div>

이 풀릴 필요충분조건은 각 prime power에 대해

<div class="math-display" data-tex-b64="eF4yXGVxdWl2IGFccG1vZHsyXntlXzB9fSxccXF1YWQgeF4yXGVxdWl2IGFccG1vZHtwX2lee2VfaX19"></div>

가 모두 풀리는 것이다.

각 홀수 prime power에서 두 root가 있고 <span class="math-inline" data-tex-b64="Ml57ZV8wfQ=="></span> 부분이 없다면 전체 root의 개수는 <span class="math-inline" data-tex-b64="Ml5y"></span>이다. CRT는 각 component root의 선택을 독립적으로 결합한다.

## 예제: <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MTk2XHBtb2R7MTM1N30="></span>

<span class="math-inline" data-tex-b64="MTM1Nz0yM1xjZG90NTk="></span>이다. modulo 23과 59에서 각각 root를 구하면

<div class="math-display" data-tex-b64="eFxlcXVpdjksMTRccG1vZHsyM30sXHFxdWFkIHhcZXF1aXYxNCw0NVxwbW9kezU5fQ=="></div>

와 같이 두 개씩 존재한다. 네 가지 조합을 CRT로 결합하여 modulo 1357에서 네 root를 얻는다. 이처럼 합성수 법의 해는 각 소수 법의 해 선택을 조합한 것이다.

## 정리

Hensel lifting은 root를 <span class="math-inline" data-tex-b64="cF5r"></span>에서 <span class="math-inline" data-tex-b64="cF57aysxfQ=="></span>로 올릴 때 필요한 보정값을 linear congruence로 결정한다. 홀수 소수에서 nonsingular root는 유일하게 lift되며, modulo <span class="math-inline" data-tex-b64="Ml5u"></span>에서는 <span class="math-inline" data-tex-b64="YVxlcXVpdjFccG1vZDg="></span> 조건이 핵심이다. 일반 합성수 법은 prime power별 해결 후 CRT로 결합한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MlxwbW9kezI1fQ=="></span>의 해를 구한다.
2. <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MTdccG1vZHszMn0="></span>의 해 존재 여부를 판정한다.
3. <span class="math-inline" data-tex-b64="eF4yXGVxdWl2MVxwbW9kezE1fQ=="></span>의 모든 해를 구한다.

## 풀이

### 1번

modulo 5에서 <span class="math-inline" data-tex-b64="eF4yXGVxdWl2Mg=="></span>는 해가 없으므로 modulo 25에서도 해가 없다.

### 2번

<span class="math-inline" data-tex-b64="MTdcZXF1aXYxXHBtb2Q4"></span>이므로 해가 존재한다. 직접 계산하면 <span class="math-inline" data-tex-b64="eFxlcXVpdjcsOSwyMywyNVxwbW9kezMyfQ=="></span>이다.

### 3번

modulo 3에서 <span class="math-inline" data-tex-b64="eFxlcXVpdlxwbTE="></span>, modulo 5에서도 <span class="math-inline" data-tex-b64="eFxlcXVpdlxwbTE="></span>이다. 네 조합을 CRT로 결합하면

<div class="math-display" data-tex-b64="eFxlcXVpdjEsNCwxMSwxNFxwbW9kezE1fQ=="></div>

이다.
