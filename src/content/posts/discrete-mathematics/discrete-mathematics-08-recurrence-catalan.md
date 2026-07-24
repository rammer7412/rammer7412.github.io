---
title: "8. Recurrence Relations와 Catalan Numbers"
description: "Fibonacci형 점화식과 타일링 문제를 살펴보고 괄호, 격자 경로, Catalan Number 사이의 대응을 정리한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "recurrence", "fibonacci", "catalan-number", "lattice-path"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 8
featured: false
draft: false
---

Recurrence Relation은 현재 값을 더 작은 입력의 값으로 정의한다. 같은 점화식과 초기조건을 만족하는 문제들은 겉모습이 달라도 정확히 같은 수열을 만든다. Fibonacci형 점화식과 Catalan Number는 이 현상을 보여주는 대표적인 예이다.

## Recursion과 Recurrence Relation

Fibonacci 수열은

<div class="math-display" data-tex-b64="Rl8wPTAsXHF1YWQgRl8xPTEsXHF1YWQgRl9uPUZfe24tMX0rRl97bi0yfVxxdWFkKG5cZ2UyKQ=="></div>

로 정의된다. Recursion은 함수가 자신을 호출하는 계산 방식이고, Recurrence Relation은 수열 항 사이의 수학적 관계이다. 둘은 관련이 있지만 같은 개념은 아니다. 하나의 점화식을 반복문, 재귀 함수, 행렬 곱 등 여러 방식으로 계산할 수 있다.

## 연속된 11이 없는 Binary String

길이 <span class="math-inline" data-tex-b64="bg=="></span>인 Binary String 중 연속된 11을 포함하지 않는 문자열 수를 <span class="math-inline" data-tex-b64="cl9u"></span>이라고 하자.

- 첫 문자가 0이면 뒤의 <span class="math-inline" data-tex-b64="bi0x"></span>자리는 허용된 문자열이면 된다: <span class="math-inline" data-tex-b64="cl97bi0xfQ=="></span>가지
- 첫 문자가 1이면 다음 문자는 반드시 0이고, 뒤의 <span class="math-inline" data-tex-b64="bi0y"></span>자리를 정한다: <span class="math-inline" data-tex-b64="cl97bi0yfQ=="></span>가지

따라서

<div class="math-display" data-tex-b64="cl9uPXJfe24tMX0rcl97bi0yfSxccXF1YWQgcl8xPTIsXHF1YWQgcl8yPTM="></div>

이다.

## Domino Tiling

2×<span class="math-inline" data-tex-b64="bg=="></span> 직사각형을 1×2 도미노로 채우는 방법 수를 <span class="math-inline" data-tex-b64="dF9u"></span>이라고 하자. 왼쪽 끝을 채우는 방식은 두 가지이다.

- 세로 도미노 하나를 놓으면 2×<span class="math-inline" data-tex-b64="KG4tMSk="></span> 문제가 남는다.
- 가로 도미노 두 개를 놓으면 2×<span class="math-inline" data-tex-b64="KG4tMik="></span> 문제가 남는다.

따라서

<div class="math-display" data-tex-b64="dF9uPXRfe24tMX0rdF97bi0yfSxccXF1YWQgdF8xPTEsXHF1YWQgdF8yPTI="></div>

이다. Binary String 문제와 초기조건은 다르지만 같은 Fibonacci형 구조를 가진다.

## Catalan Number

Catalan Number <span class="math-inline" data-tex-b64="Q19u"></span>은 다음 점화식으로 정의할 수 있다.

<div class="math-display" data-tex-b64="Q18wPTEsXHFxdWFkIENfbj1cc3VtX3tpPTB9XntuLTF9Q19pQ197bi0xLWl9"></div>

처음 몇 항은

<div class="math-display" data-tex-b64="MSwxLDIsNSwxNCw0MixcbGRvdHM="></div>

이다. 닫힌 형태는

<div class="math-display" data-tex-b64="Q19uPVxmcmFjMXtuKzF9XGJpbm9tezJufXtufQ=="></div>

이다.

## 올바른 괄호 문자열

<span class="math-inline" data-tex-b64="bg=="></span>쌍의 괄호로 만들 수 있는 올바른 문자열 수가 <span class="math-inline" data-tex-b64="Q19u"></span>이다. 첫 여는 괄호와 짝을 이루는 닫는 괄호를 기준으로 문자열을 나누자.

<div class="math-display" data-tex-b64="KFwgXHRleHR7dmFsaWQgfWlcdGV4dHsgcGFpcnN9XCApXCBcdGV4dHt2YWxpZCB9KG4tMS1pKVx0ZXh0eyBwYWlyc30="></div>

안쪽은 <span class="math-inline" data-tex-b64="Q19p"></span>가지, 뒤쪽은 <span class="math-inline" data-tex-b64="Q197bi0xLWl9"></span>가지이므로 모든 <span class="math-inline" data-tex-b64="aQ=="></span>를 더하면 Catalan recurrence를 얻는다.

올바른 괄호 문자열은 왼쪽에서 읽을 때 어느 시점에서도 닫는 괄호의 수가 여는 괄호의 수보다 많아지지 않아야 한다.

## Lattice Path와 Bijection

여는 괄호를 위로 한 칸, 닫는 괄호를 오른쪽으로 한 칸 이동하는 경로에 대응시키면 올바른 괄호 조건은 경로가 대각선 아래로 내려가지 않는 조건이 된다.

총 <span class="math-inline" data-tex-b64="bg=="></span>번의 위 이동과 <span class="math-inline" data-tex-b64="bg=="></span>번의 오른쪽 이동으로 <span class="math-inline" data-tex-b64="KDAsMCk="></span>에서 <span class="math-inline" data-tex-b64="KG4sbik="></span>까지 가는 전체 경로는

<div class="math-display" data-tex-b64="XGJpbm9tezJufXtufQ=="></div>

개이다. 이 중 대각선을 처음 넘어간 지점 이후를 반사시키는 Reflection Argument를 사용하면 잘못된 경로와 <span class="math-inline" data-tex-b64="KDAsMCk="></span>에서 <span class="math-inline" data-tex-b64="KG4tMSxuKzEp"></span>로 가는 경로 사이의 Bijection을 만들 수 있다. 잘못된 경로 수는

<div class="math-display" data-tex-b64="XGJpbm9tezJufXtuLTF9"></div>

이므로 올바른 경로 수는

<div class="math-display" data-tex-b64="XGJpbm9tezJufXtufS1cYmlub217Mm59e24tMX0KPVxmcmFjMXtuKzF9XGJpbm9tezJufXtufQo9Q19u"></div>

이다.

좌표 축과 이동 방향을 다르게 정하면 “대각선 위”와 “아래”가 바뀔 수 있지만, 경로가 경계선을 넘지 않는다는 조건과 reflection의 구조는 같다.

## 계단 모양 영역의 분할

계단 모양 도형을 직사각형들로 나누는 문제에서도 첫 분할선을 기준으로 왼쪽과 오른쪽 문제가 독립적으로 나뉜다. 크기 <span class="math-inline" data-tex-b64="aQ=="></span> 부분과 크기 <span class="math-inline" data-tex-b64="bi0xLWk="></span> 부분의 경우의 수가 곱해지고, 가능한 <span class="math-inline" data-tex-b64="aQ=="></span>를 더하면

<div class="math-display" data-tex-b64="Q19uPVxzdW1fe2k9MH1ee24tMX1DX2lDX3tuLTEtaX0="></div>

가 나타난다.

중요한 점은 결과가 우연히 같은 것이 아니라, 첫 구조를 선택한 뒤 두 개의 독립된 작은 구조로 분할된다는 공통 원리가 있다는 것이다.

## 점화식의 사용 순서

Counting 문제에서 점화식을 세울 때 다음 순서가 유용하다.

1. 가장 왼쪽, 첫 괄호, 마지막 조각처럼 기준이 되는 구조를 선택한다.
2. 가능한 경우들이 서로 겹치지 않고 전체를 덮는지 확인한다.
3. 각 경우가 더 작은 같은 종류의 문제로 줄어드는지 확인한다.
4. 초기조건을 빠뜨리지 않는다.

점화식만 같고 초기조건이 다르면 서로 다른 수열이 된다.

## 정리

Recurrence Relation은 큰 문제를 작은 같은 형태의 문제로 분해한다. Binary String과 Domino Tiling은 Fibonacci형 점화식을, 올바른 괄호·경계선을 넘지 않는 격자 경로·계단 분할은 Catalan recurrence를 만족한다. Bijection과 Reflection Argument는 서로 다른 Counting 문제의 동일성을 설명한다.

## 연습 문제

1. 1칸 또는 2칸씩 올라가 <span class="math-inline" data-tex-b64="bg=="></span>계단을 오르는 방법 수의 점화식을 구한다.
2. <span class="math-inline" data-tex-b64="Q18z"></span>을 괄호 문자열로 직접 나열한다.
3. Catalan 닫힌 형태에서 <span class="math-inline" data-tex-b64="Q180"></span>를 계산한다.

## 풀이

### 1번

마지막 이동이 1칸이면 그 전까지 <span class="math-inline" data-tex-b64="bi0x"></span>계단을 오른 경우, 2칸이면 <span class="math-inline" data-tex-b64="bi0y"></span>계단을 오른 경우이다. 따라서

<div class="math-display" data-tex-b64="YV9uPWFfe24tMX0rYV97bi0yfSxccXF1YWQgYV8wPTEsXHF1YWQgYV8xPTE="></div>

이다.

### 2번

<div class="math-display" data-tex-b64="KCgoKSkpLFxxdWFkKCgpKCkpLFxxdWFkKCgpKSgpLFxxdWFkKCkoKCkpICxccXVhZCgpKCkoKQ=="></div>

의 5개이며 <span class="math-inline" data-tex-b64="Q18zPTU="></span>이다.

### 3번

<div class="math-display" data-tex-b64="Q180PVxmcmFjMTVcYmlub204ND1cZnJhYzE1XGNkb3Q3MD0xNA=="></div>
