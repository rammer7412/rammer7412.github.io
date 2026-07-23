---
title: "9. 일변량 Transformation"
description: "하나의 Random Variable에 함수를 적용했을 때 새로운 PMF 또는 PDF를 구하는 방법을 정리한다."
date: "2025-07-08"
category: "확률 이론"
tags: ["probability-theory", "univariate-transformation", "change-of-variables", "cdf-method"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 9
featured: false
draft: false
---
Random Variable <span class="math-inline" data-tex-b64="WA=="></span>에 함수 <span class="math-inline" data-tex-b64="Zw=="></span>를 적용하면 새로운 Random Variable <span class="math-inline" data-tex-b64="WT1nKFgp"></span>를 얻는다. 이를 Transformation이라고 한다. 핵심은 원래 값의 확률을 새로운 값에 빠짐없이 옮기는 것이다.

## 이산형 Transformation

이산형에서는 같은 <span class="math-inline" data-tex-b64="eQ=="></span>를 만드는 모든 <span class="math-inline" data-tex-b64="eA=="></span>의 확률을 더한다.

<div class="math-display" data-tex-b64="cF9ZKHkpCj0KXHN1bV97eDpnKHgpPXl9cF9YKHgp"></div>

여기서 <span class="math-inline" data-tex-b64="XHt4OmcoeCk9eVx9"></span>는 <span class="math-inline" data-tex-b64="eQ=="></span>의 원상(preimage), 즉 함수 <span class="math-inline" data-tex-b64="Zw=="></span>를 적용했을 때 <span class="math-inline" data-tex-b64="eQ=="></span>가 되는 원래 값들의 집합이다.

### 절댓값 예시

<span class="math-inline" data-tex-b64="WA=="></span>의 PMF가

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPS0xKT1cZnJhYzE0LApccXVhZApcbWF0aGJie1B9KFg9MCk9XGZyYWMxNCwKXHF1YWQKXG1hdGhiYntQfShYPTEpPVxmcmFjMTI="></div>

이고 <span class="math-inline" data-tex-b64="WT18WHw="></span>라 하자. <span class="math-inline" data-tex-b64="WT0w"></span>은 <span class="math-inline" data-tex-b64="WD0w"></span>에서만 나오지만, <span class="math-inline" data-tex-b64="WT0x"></span>은 <span class="math-inline" data-tex-b64="WD0tMQ=="></span>과 <span class="math-inline" data-tex-b64="WD0x"></span>에서 나온다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShZPTApPVxmcmFjMTQ="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShZPTEpPVxmcmFjMTQrXGZyYWMxMj1cZnJhYzM0"></div>

## 단조인 연속 Transformation

<span class="math-inline" data-tex-b64="Zw=="></span>가 지지집합에서 일대일이고 미분 가능한 역함수 <span class="math-inline" data-tex-b64="Z157LTF9"></span>를 가진다고 하자. <span class="math-inline" data-tex-b64="WT1nKFgp"></span>의 PDF는

<div class="math-display" data-tex-b64="Zl9ZKHkpCj0KZl9YXCFcbGVmdChnXnstMX0oeSlccmlnaHQpClxsZWZ0fFxmcmFje2R9e2R5fWdeey0xfSh5KVxyaWdodHw="></div>

이다.

절댓값이 붙은 미분 항은 구간의 길이가 Transformation 과정에서 얼마나 늘어나거나 줄어드는지를 보정한다. 확률 자체는 보존되어야 하므로 밀도는 길이 변화의 역수만큼 바뀐다.

예를 들어 <span class="math-inline" data-tex-b64="WT1hWCti"></span>이고 <span class="math-inline" data-tex-b64="YVxuZTA="></span>이면

<div class="math-display" data-tex-b64="Zl9ZKHkpCj0KXGZyYWMxe3xhfH0KIGZfWFwhXGxlZnQoXGZyYWN7eS1ifXthfVxyaWdodCk="></div>

이다.

## 일대일이 아닌 경우

같은 <span class="math-inline" data-tex-b64="eQ=="></span>에 여러 <span class="math-inline" data-tex-b64="eA=="></span>가 대응하면 각 역함수 가지의 기여를 더한다.

<div class="math-display" data-tex-b64="Zl9ZKHkpCj0KXHN1bV97eF9pOmcoeF9pKT15fQpcZnJhY3tmX1goeF9pKX17fGcnKHhfaSl8fQ=="></div>

### Half-Normal 예시

<span class="math-inline" data-tex-b64="WFxzaW1cbWF0aGNhbHtOfSgwLDEp"></span>이고 <span class="math-inline" data-tex-b64="WT18WHw="></span>라 하자. <span class="math-inline" data-tex-b64="eT4w"></span>에서 <span class="math-inline" data-tex-b64="eD15"></span>와 <span class="math-inline" data-tex-b64="eD0teQ=="></span> 두 값이 같은 <span class="math-inline" data-tex-b64="eQ=="></span>를 만든다.

<div class="math-display" data-tex-b64="Zl9ZKHkpCj0KZl9YKHkpK2ZfWCgteSkKPQpcc3FydHtcZnJhY3syfXtccGl9fWVeey15XjIvMn0sClxxcXVhZCB5XGdlMA=="></div>

이다.

## CDF 방법

함수가 복잡하거나 단조 구간을 나누기 어려울 때는 먼저 CDF를 구할 수 있다.

<div class="math-display" data-tex-b64="Rl9ZKHkpCj0KXG1hdGhiYntQfShnKFgpXGxlIHkp"></div>

사건을 <span class="math-inline" data-tex-b64="WA=="></span>에 대한 부등식으로 바꾼 뒤 원래 CDF로 계산하고, 필요하면 미분하여 PDF를 얻는다.

예를 들어 <span class="math-inline" data-tex-b64="WT1YXjI="></span>이면 <span class="math-inline" data-tex-b64="eVxnZTA="></span>에서

<div class="math-display" data-tex-b64="Rl9ZKHkpCj0KXG1hdGhiYntQfSgtXHNxcnR7eX1cbGUgWFxsZVxzcXJ0e3l9KQo9CkZfWChcc3FydHt5fSktRl9YKC1cc3FydHt5fSk="></div>

이다.

## 지지집합 확인

Transformation 문제에서는 식뿐 아니라 새로운 Random Variable이 가질 수 있는 값의 범위를 함께 구해야 한다. 원래 지지집합을 함수 <span class="math-inline" data-tex-b64="Zw=="></span>로 보낸 결과가 새로운 지지집합이다. 범위를 잘못 잡으면 적분값이 1이 되지 않거나 존재하지 않는 값에 양의 밀도를 주게 된다.

## 정리

이산형에서는 같은 출력값의 확률을 합한다. 연속형에서는 역함수와 미분을 이용해 밀도를 보정한다. 일대일이 아니면 가능한 모든 역함수 가지를 더하며, 항상 새로운 지지집합을 먼저 확인해야 한다.

## 연습 문제

1. 주어진 이산 PMF에서 <span class="math-inline" data-tex-b64="WT1YXjI="></span>의 PMF를 구한다.
2. <span class="math-inline" data-tex-b64="WFxzaW1cbWF0aGNhbHtOfSgwLDEp"></span>에서 <span class="math-inline" data-tex-b64="WT1YXjI="></span>의 PDF를 구한다.
3. 연속 CDF <span class="math-inline" data-tex-b64="Rl9Y"></span>가 엄격히 증가할 때 <span class="math-inline" data-tex-b64="Rl9YKFgpXHNpbVxvcGVyYXRvcm5hbWV7VW5pZn0oMCwxKQ=="></span>임을 보인다.

## 풀이

### 1번

본문의 이산 PMF

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPS0xKT1cZnJhYzE0LFxxdWFkIFxtYXRoYmJ7UH0oWD0wKT1cZnJhYzE0LFxxdWFkIFxtYXRoYmJ7UH0oWD0xKT1cZnJhYzEy"></div>

에서 <span class="math-inline" data-tex-b64="WT1YXjI="></span>로 두면 가능한 값은 0과 1이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShZPTApPVxtYXRoYmJ7UH0oWD0wKT1cZnJhYzE0"></div>

이고

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShZPTEpPVxtYXRoYmJ7UH0oWD0tMSkrXG1hdGhiYntQfShYPTEpPVxmcmFjMzQ="></div>

이다.

### 2번

<span class="math-inline" data-tex-b64="WT1YXjI="></span>의 지지집합은 <span class="math-inline" data-tex-b64="eT4w"></span>이다. 한 값 <span class="math-inline" data-tex-b64="eQ=="></span>에 대해 원상은 <span class="math-inline" data-tex-b64="eD1cc3FydCB5"></span>와 <span class="math-inline" data-tex-b64="eD0tXHNxcnQgeQ=="></span> 두 개이고, <span class="math-inline" data-tex-b64="fGQoXHBtXHNxcnQgeSkvZHl8PTEvKDJcc3FydCB5KQ=="></span>이다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmZfWSh5KQomPVxmcmFje2ZfWChcc3FydCB5KStmX1goLVxzcXJ0IHkpfXsyXHNxcnQgeX1cXAomPVxmcmFjezF9e1xzcXJ0ezJccGkgeX19ZV57LXkvMn0sXHFxdWFkIHk+MC4KXGVuZHthbGlnbmVkfQ=="></div>

이는 자유도 1인 Chi-square Distribution의 PDF이다.

### 3번

<span class="math-inline" data-tex-b64="VT1GX1goWCk="></span>라고 두자. <span class="math-inline" data-tex-b64="MFxsZSB1XGxlMQ=="></span>에서 <span class="math-inline" data-tex-b64="Rl9Y"></span>가 연속이고 엄격히 증가하므로 역함수가 존재한다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH0oVVxsZSB1KQomPVxtYXRoYmJ7UH0oRl9YKFgpXGxlIHUpXFwKJj1cbWF0aGJie1B9KFhcbGUgRl9YXnstMX0odSkpXFwKJj1GX1goRl9YXnstMX0odSkpXFwKJj11LgpcZW5ke2FsaWduZWR9"></div>

즉 <span class="math-inline" data-tex-b64="VQ=="></span>의 CDF는 <span class="math-inline" data-tex-b64="MFxsZSB1XGxlMQ=="></span>에서 <span class="math-inline" data-tex-b64="dQ=="></span>이므로

<div class="math-display" data-tex-b64="Rl9YKFgpXHNpbVxvcGVyYXRvcm5hbWV7VW5pZn0oMCwxKQ=="></div>

이다.
