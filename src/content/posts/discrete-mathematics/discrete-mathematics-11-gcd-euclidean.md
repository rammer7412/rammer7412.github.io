---
title: "11. GCD와 Euclidean Algorithm"
description: "물통 문제를 통해 GCD와 정수 선형결합의 의미를 이해하고 Euclidean Algorithm과 역추적으로 해를 구한다."
date: "2026-01-19"
category: "이산수학"
tags: ["discrete-mathematics", "gcd", "euclidean-algorithm", "bezout-identity", "water-jug"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 11
featured: false
draft: false
---

서로 다른 크기의 물통으로 정확한 양을 만들 수 있는지는 시행착오의 문제가 아니라 GCD와 정수의 선형결합 문제이다. Euclidean Algorithm은 GCD를 빠르게 구하고, 역추적을 통해 실제 선형결합의 계수까지 찾는다.

## 물통 문제

3갤런과 7갤런 물통만 사용하여 정확히 2갤런을 만들 수 있는지 생각하자. 물통을 가득 채우거나 비우고, 한 물통에서 다른 물통으로 물을 옮기는 동작을 반복할 수 있다.

한 방법은 다음과 같다.

1. 3갤런 물통을 채워 7갤런 물통에 붓는다.
2. 다시 3갤런 물통을 채워 7갤런 물통에 붓는다. 7갤런 물통에는 6갤런이 있다.
3. 3갤런 물통을 다시 채운 뒤 7갤런 물통이 가득 찰 때까지 붓는다.

7갤런 물통에는 1갤런만 더 들어가므로 3갤런 물통에 2갤런이 남는다.

이 과정에서 만들 수 있는 양은 3과 7의 정수 선형결합으로 표현된다.

<div class="math-display" data-tex-b64="Mj0zXGNkb3QzLTdcY2RvdDE="></div>

음수 계수는 그만큼 물을 버리거나 반대 방향의 동작을 수행하는 효과로 이해할 수 있다.

## Greatest Common Divisor

두 정수 <span class="math-inline" data-tex-b64="YSxi"></span>의 공약수 중 가장 큰 양의 정수를

<div class="math-display" data-tex-b64="XGdjZChhLGIp"></div>

라고 한다. <span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsYik="></span>이면 어떤 정수 <span class="math-inline" data-tex-b64="eCx5"></span>가 존재하여

<div class="math-display" data-tex-b64="YXgrYnk9ZA=="></div>

가 성립한다. 이를 Bézout’s Identity라고 한다.

더 일반적으로 <span class="math-inline" data-tex-b64="YXgrYnk="></span>로 만들 수 있는 정수들은 정확히 <span class="math-inline" data-tex-b64="ZA=="></span>의 배수이다.

- 모든 <span class="math-inline" data-tex-b64="YXgrYnk="></span>는 <span class="math-inline" data-tex-b64="ZA=="></span>의 배수이다. <span class="math-inline" data-tex-b64="ZA=="></span>가 <span class="math-inline" data-tex-b64="YSxi"></span>를 모두 나누기 때문이다.
- Bézout’s Identity로 <span class="math-inline" data-tex-b64="ZA=="></span>를 만들 수 있으므로 그 정수배 <span class="math-inline" data-tex-b64="a2Q="></span>도 만들 수 있다.

따라서 물통 크기가 <span class="math-inline" data-tex-b64="YSxi"></span>이고 목표량 <span class="math-inline" data-tex-b64="Yw=="></span>가 더 큰 물통의 용량을 넘지 않을 때, 채우기·비우기·옮기기만으로 <span class="math-inline" data-tex-b64="Yw=="></span>를 만들 수 있는 기준은

<div class="math-display" data-tex-b64="XGdjZChhLGIpXG1pZCBj"></div>

이다. 즉 목표량이 GCD의 배수이면 만들 수 있고, GCD의 배수가 아니면 만들 수 없다.

## Euclidean Algorithm

나눗셈 알고리즘에서

<div class="math-display" data-tex-b64="YT1icStyLFxxcXVhZDBcbGUgcjxi"></div>

이면 <span class="math-inline" data-tex-b64="YSxi"></span>의 공약수와 <span class="math-inline" data-tex-b64="Yixy"></span>의 공약수는 같다. 왜냐하면 <span class="math-inline" data-tex-b64="cj1hLWJx"></span>이기 때문이다. 따라서

<div class="math-display" data-tex-b64="XGdjZChhLGIpPVxnY2QoYixyKQ=="></div>

이다.

이 과정을 나머지가 0이 될 때까지 반복하면 마지막 0이 아닌 나머지가 GCD이다.

예를 들어 <span class="math-inline" data-tex-b64="NDIxMg=="></span>와 <span class="math-inline" data-tex-b64="MjQ4NA=="></span>에서는

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjQyMTImPTI0ODRcY2RvdDErMTcyOCxcXAoyNDg0Jj0xNzI4XGNkb3QxKzc1NixcXAoxNzI4Jj03NTZcY2RvdDIrMjE2LFxcCjc1NiY9MjE2XGNkb3QzKzEwOCxcXAoyMTYmPTEwOFxjZG90MiswLgpcZW5ke2FsaWduZWR9"></div>

따라서

<div class="math-display" data-tex-b64="XGdjZCg0MjEyLDI0ODQpPTEwOA=="></div>

이다.

## 역추적으로 선형결합 구하기

나눗셈 식을 거꾸로 대입하면 GCD를 원래 두 수의 선형결합으로 쓸 수 있다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjEwOCY9NzU2LTNcY2RvdDIxNlxcCiY9NzU2LTMoMTcyOC0yXGNkb3Q3NTYpXFwKJj03XGNkb3Q3NTYtM1xjZG90MTcyOFxcCiY9NygyNDg0LTE3MjgpLTNcY2RvdDE3MjhcXAomPTdcY2RvdDI0ODQtMTBcY2RvdDE3MjhcXAomPTdcY2RvdDI0ODQtMTAoNDIxMi0yNDg0KVxcCiY9MTdcY2RvdDI0ODQtMTBcY2RvdDQyMTIuClxlbmR7YWxpZ25lZH0="></div>

즉

<div class="math-display" data-tex-b64="MTA4PSgtMTApXGNkb3Q0MjEyKzE3XGNkb3QyNDg0"></div>

이다. 432는 <span class="math-inline" data-tex-b64="NFxjZG90MTA4"></span>이므로

<div class="math-display" data-tex-b64="NDMyPSgtNDApXGNkb3Q0MjEyKzY4XGNkb3QyNDg0"></div>

처럼 표현할 수 있다. 반면 316은 108의 배수가 아니므로 <span class="math-inline" data-tex-b64="NDIxMngrMjQ4NHk9MzE2"></span>인 정수해는 존재하지 않는다.


역추적은 Euclidean Algorithm의 나눗셈 식만 거꾸로 대입하는 과정이다. 별도의 정수론 이론을 많이 사용하지 않고도 GCD가 실제로 어떤 선형결합으로 만들어지는지 확인할 수 있다는 점이 중요하다.

이 글에서는 물통 문제와 GCD의 연결까지만 다룬다. 소수, 합동식, Euler 함수, RSA와 같은 정수론 주제는 별도의 정수론 시리즈에서 다룬다.

## 정리

GCD는 두 정수의 모든 선형결합이 가질 수 있는 기본 단위이다. Euclidean Algorithm은 나머지를 반복하여 GCD를 구하고, 역추적은 GCD를 원래 두 수의 선형결합으로 표현한다. 두 물통으로 특정한 양을 만들 수 있는지는 목표량이 GCD의 배수인지 확인하여 판단할 수 있다.

## 연습 문제

1. Euclidean Algorithm으로 <span class="math-inline" data-tex-b64="XGdjZCgxNjEsMjgp"></span>을 구한다.
2. 정수 <span class="math-inline" data-tex-b64="eCx5"></span>를 찾아 <span class="math-inline" data-tex-b64="MTYxeCsyOHk9Nw=="></span>을 만족시킨다.
3. 6갤런과 10갤런 물통으로 정확히 7갤런을 만들 수 있는지 GCD로 판단한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjE2MSY9MjhcY2RvdDUrMjEsXFwKMjgmPTIxXGNkb3QxKzcsXFwKMjEmPTdcY2RvdDMrMC4KXGVuZHthbGlnbmVkfQ=="></div>

따라서 <span class="math-inline" data-tex-b64="XGdjZCgxNjEsMjgpPTc="></span>이다.

### 2번

역추적하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjcmPTI4LTIxXFwKJj0yOC0oMTYxLTVcY2RvdDI4KVxcCiY9KC0xKVxjZG90MTYxKzZcY2RvdDI4LgpcZW5ke2FsaWduZWR9"></div>

따라서 한 해는 <span class="math-inline" data-tex-b64="eD0tMQ=="></span>, <span class="math-inline" data-tex-b64="eT02"></span>이다.

### 3번

<div class="math-display" data-tex-b64="XGdjZCg2LDEwKT0y"></div>

이고 2는 7을 나누지 않는다. 따라서 6갤런과 10갤런 물통의 채우기·비우기·옮기기 동작만으로 정확히 7갤런을 만들 수 없다.
