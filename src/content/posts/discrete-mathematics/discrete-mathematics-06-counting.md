---
title: "6. Counting, Permutations, and Combinations"
description: "Sum Rule과 Product Rule에서 출발해 순열, 조합, 중복 배치와 보완 계수법을 다양한 예제로 정리한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "counting", "permutation", "combination", "stars-and-bars"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 6
featured: false
draft: false
---

Counting은 가능한 경우를 빠짐없이, 중복 없이 세는 방법이다. 복잡한 공식을 외우기보다 한 결과를 만들기 위해 어떤 선택을 순서대로 하는지, 서로 다른 표현이 같은 결과를 중복해서 세는지를 먼저 분석해야 한다.

## Sum Rule과 Product Rule

서로 겹치지 않는 경우의 집합 <span class="math-inline" data-tex-b64="QSxC"></span> 중 하나를 선택한다면

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFcY3VwIEJccnZlcnQ9XGx2ZXJ0IEFccnZlcnQrXGx2ZXJ0IEJccnZlcnQ="></div>

이다. 이를 Sum Rule이라고 한다.

첫 선택이 <span class="math-inline" data-tex-b64="bQ=="></span>가지이고, 각 첫 선택마다 두 번째 선택이 <span class="math-inline" data-tex-b64="bg=="></span>가지라면 전체 ordered choice는

<div class="math-display" data-tex-b64="bW4="></div>

가지이다. 이는 Product Rule이며 Cartesian Product의 원소 수와 같은 원리이다.

## 길이가 다른 문자열 세기

대문자와 소문자 52개를 <span class="math-inline" data-tex-b64="TA=="></span>, 숫자 10개를 <span class="math-inline" data-tex-b64="RA=="></span>라고 하자. 길이가 6, 7, 8이고 첫 글자는 반드시 문자이며 나머지는 문자 또는 숫자인 비밀번호 수는

<div class="math-display" data-tex-b64="NTJcY2RvdDYyXjUrNTJcY2RvdDYyXjYrNTJcY2RvdDYyXjc="></div>

이다. 각 길이의 경우가 서로 겹치지 않으므로 Sum Rule을, 한 비밀번호 안의 자리 선택에는 Product Rule을 사용했다.

## Complement Counting

“적어도 하나”라는 조건은 전체에서 하나도 없는 경우를 빼는 것이 간단할 때가 많다. 0000부터 9999까지의 네 자리 문자열 중 숫자 7을 적어도 하나 포함하는 경우는

<div class="math-display" data-tex-b64="MTBeNC05XjQ="></div>

가지이다. 여기서는 앞자리 0을 허용하는 네 자리 문자열을 센다. 일반적인 네 자리 자연수를 세는 문제라면 첫 자리에 0을 허용하지 않는 조건을 따로 반영해야 한다.

## Permutation

서로 다른 <span class="math-inline" data-tex-b64="bg=="></span>개를 모두 순서 있게 배열하는 경우의 수는

<div class="math-display" data-tex-b64="biE9bihuLTEpXGNkb3RzMlxjZG90MQ=="></div>

이다. <span class="math-inline" data-tex-b64="bg=="></span>개 중 <span class="math-inline" data-tex-b64="cg=="></span>개를 골라 순서 있게 배열하면

<div class="math-display" data-tex-b64="e31fblBfcj1cZnJhY3tuIX17KG4tcikhfQ=="></div>

이다.

## Combination

순서를 구분하지 않고 <span class="math-inline" data-tex-b64="cg=="></span>개를 선택하면 각 조합이 <span class="math-inline" data-tex-b64="ciE="></span>개의 순열로 중복되어 세어진다. 따라서

<div class="math-display" data-tex-b64="XGJpbm9tIG5yPXt9X25DX3I9XGZyYWN7biF9e3IhKG4tcikhfQ=="></div>

이다. 선택한 원소와 선택하지 않은 원소를 맞바꾸면

<div class="math-display" data-tex-b64="XGJpbm9tIG5yPVxiaW5vbSBue24tcn0="></div>

를 얻는다.

## 중복 원소가 있는 순열

전체 <span class="math-inline" data-tex-b64="bg=="></span>개 중 같은 종류가 각각 <span class="math-inline" data-tex-b64="bl8xLG5fMixcbGRvdHMsbl9r"></span>개이고 합이 <span class="math-inline" data-tex-b64="bg=="></span>이면 서로 다른 배열 수는

<div class="math-display" data-tex-b64="XGZyYWN7biF9e25fMSFuXzIhXGNkb3RzIG5fayF9"></div>

이다. 같은 글자를 서로 바꾼 경우는 새로운 배열이 아니므로 각 종류 내부의 순열 수를 나눈다.

예를 들어 MISSISSIPPI의 11개 문자는 M 1개, I 4개, S 4개, P 2개이므로 배열 수는

<div class="math-display" data-tex-b64="XGZyYWN7MTEhfXs0ITQhMiF9"></div>

이다.

## Circular Permutation과 Division Rule

원탁에서 회전만 다른 배치를 같은 것으로 보면 <span class="math-inline" data-tex-b64="biE="></span>개의 선형 배열마다 회전된 표현이 <span class="math-inline" data-tex-b64="bg=="></span>개씩 있다. 따라서 서로 다른 원탁 배치는

<div class="math-display" data-tex-b64="XGZyYWN7biF9e259PShuLTEpIQ=="></div>

이다.

더 일반적으로 집합 <span class="math-inline" data-tex-b64="QQ=="></span>의 모든 결과가 결과 집합 <span class="math-inline" data-tex-b64="Qg=="></span>의 한 원소에 정확히 <span class="math-inline" data-tex-b64="aw=="></span>개씩 대응하면

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFccnZlcnQ9a1xsdmVydCBCXHJ2ZXJ0"></div>

이다. 이를 Division Rule 관점에서 이해할 수 있다.

## 이웃하지 않는 대상 선택

20권의 책이 일렬로 있을 때 서로 이웃하지 않는 6권을 고른다고 하자. 선택된 책 6권 사이에 최소 5개의 선택되지 않은 책이 필요하다. 먼저 선택되지 않은 책 14권을 놓으면 그 앞, 사이, 뒤에 15개의 틈이 생긴다. 그중 6개의 틈을 고르면 되므로

<div class="math-display" data-tex-b64="XGJpbm9tezE1fXs2fQ=="></div>

가지이다.

일반적으로 <span class="math-inline" data-tex-b64="bg=="></span>개 중 이웃하지 않는 <span class="math-inline" data-tex-b64="cg=="></span>개를 고르는 수는 <span class="math-inline" data-tex-b64="XGJpbm9te24tcisxfXtyfQ=="></span>이다.

## Stars and Bars

서로 구분되는 <span class="math-inline" data-tex-b64="aw=="></span>종류에서 중복을 허용하여 총 <span class="math-inline" data-tex-b64="bg=="></span>개를 선택하는 것은 음이 아닌 정수해

<div class="math-display" data-tex-b64="eF8xK3hfMitcY2RvdHMreF9rPW4="></div>

의 수와 같다. <span class="math-inline" data-tex-b64="bg=="></span>개의 별과 <span class="math-inline" data-tex-b64="ay0x"></span>개의 막대를 배열하므로

<div class="math-display" data-tex-b64="XGJpbm9te24ray0xfXtrLTF9PVxiaW5vbXtuK2stMX17bn0="></div>

가지이다.

예를 들어 5종류의 도넛 중 12개를 고르는 방법은

<div class="math-display" data-tex-b64="XGJpbm9tezE2fXs0fQ=="></div>

가지이다.

## Poker Hand 예제

52장의 카드에서 5장을 고르는 전체 hand는 <span class="math-inline" data-tex-b64="XGJpbm9tezUyfXs1fQ=="></span>개이다. Four of a Kind는

1. 네 장의 숫자 선택: 13가지
2. 남은 한 장의 숫자 선택: 12가지
3. 남은 한 장의 무늬 선택: 4가지

이므로

<div class="math-display" data-tex-b64="MTNcY2RvdDEyXGNkb3Q0PTYyNA=="></div>

가지이다.

Straight를 셀 때는 Straight Flush가 함께 포함되는지 확인해야 한다. 사건들이 겹치면 단순히 더하지 말고 중복을 제거해야 하며, 이는 다음 글의 Inclusion–Exclusion로 이어진다.

## Birthday Paradox

<span class="math-inline" data-tex-b64="bg=="></span>명의 생일이 모두 다를 확률을 먼저 계산하면 적어도 두 명이 같은 생일일 확률을 구할 수 있다. 윤년을 무시하고 모든 생일이 균등하다고 가정하면

<div class="math-display" data-tex-b64="XG1hdGhiYiBQKFx0ZXh0e2F0IGxlYXN0IG9uZSBtYXRjaH0pCj0xLVxmcmFjezM2NVxjZG90MzY0XGNkb3RzKDM2NS1uKzEpfXszNjVebn0="></div>

이다. 약 23명만 있어도 이 확률은 1/2을 넘는다. 가능한 사람 쌍의 수가 빠르게 증가하기 때문에 직관보다 이른 시점에 충돌 가능성이 커진다.

## 정리

Sum Rule은 서로 겹치지 않는 경우를 더하고, Product Rule은 연속된 선택을 곱한다. 순열은 순서를 구분하고 조합은 구분하지 않는다. 중복 배열, 원순열, 중복조합에서는 같은 결과가 여러 표현으로 세어지는 정도를 정확히 분석해야 한다.

## 연습 문제

1. 10명 중 회장, 부회장, 총무를 한 명씩 뽑는 방법 수를 구한다.
2. 12명 중 4명의 위원회를 만드는 방법 수를 구한다.
3. <span class="math-inline" data-tex-b64="eF8xK3hfMit4XzM9MTA="></span>의 음이 아닌 정수해 수를 구한다.

## 풀이

### 1번

직책이 서로 다르므로 순서가 중요하다.

<div class="math-display" data-tex-b64="e31fezEwfVBfMz0xMFxjZG90OVxjZG90OD03MjA="></div>

### 2번

위원 사이의 역할을 구분하지 않으므로

<div class="math-display" data-tex-b64="XGJpbm9tezEyfXs0fT00OTU="></div>

이다.

### 3번

10개의 별과 두 개의 막대를 배열하므로

<div class="math-display" data-tex-b64="XGJpbm9tezEwKzMtMX17My0xfT1cYmlub217MTJ9ezJ9PTY2"></div>

이다.
