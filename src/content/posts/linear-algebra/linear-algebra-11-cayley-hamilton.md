---
title: "11. Cayley-Hamilton Theorem과 행렬의 거듭제곱"
description: "행렬이 자신의 Characteristic Polynomial을 만족한다는 Cayley-Hamilton Theorem을 이해하고, 거듭제곱과 역행렬 계산에 적용한다."
date: "2025-07-24"
category: "선형대수학"
tags: ["linear-algebra", "cayley-hamilton", "characteristic-polynomial", "matrix-power"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 11
featured: false
draft: false
---
Characteristic Polynomial은 Eigenvalue를 구하는 식이지만, 행렬 자체가 만족하는 대수적 관계이기도 하다. 이 사실을 정확히 표현한 정리가 Cayley-Hamilton Theorem이다.

행렬 <span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Rn1ee25cdGltZXMgbn0="></span>의 Characteristic Polynomial을

<div class="math-display" data-tex-b64="cF9BKHQpPVxkZXQodEktQSkKPXRebithX3tuLTF9dF57bi0xfStcY2RvdHMrYV8xdCthXzA="></div>

라고 하자. Cayley-Hamilton Theorem은

<div class="math-display" data-tex-b64="cF9BKEEpCj1BXm4rYV97bi0xfUFee24tMX0rXGNkb3RzK2FfMUErYV8wSQo9Tw=="></div>

가 성립한다고 말한다.

## Polynomial에 행렬을 대입한다는 의미

Scalar polynomial

<div class="math-display" data-tex-b64="cCh0KT10XjItNXQrMg=="></div>

에 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>를 대입하면

<div class="math-display" data-tex-b64="cChBKT1BXjItNUErMkk="></div>

가 된다. 상수항 <span class="math-inline" data-tex-b64="Mg=="></span>는 같은 크기의 matrix가 아니므로 <span class="math-inline" data-tex-b64="Mkk="></span>로 해석한다.

행렬의 모든 거듭제곱은 서로 commute하므로 일반 polynomial 계산과 같은 방식으로 다룰 수 있다.

## 2×2 행렬에서의 형태

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH1hJmJcXGMmZFxlbmR7Ym1hdHJpeH0="></div>

의 Characteristic Polynomial은

<div class="math-display" data-tex-b64="cF9BKHQpPXReMi0oYStkKXQrKGFkLWJjKQ=="></div>

이다. Trace와 Determinant를 사용하면

<div class="math-display" data-tex-b64="cF9BKHQpPXReMi1cb3BlcmF0b3JuYW1le3RyfShBKXQrXGRldChBKQ=="></div>

이다.

따라서 모든 <span class="math-inline" data-tex-b64="Mlx0aW1lczI="></span> 행렬은

<div class="math-display" data-tex-b64="QV4yLVxvcGVyYXRvcm5hbWV7dHJ9KEEpQStcZGV0KEEpST1P"></div>

를 만족한다.

즉,

<div class="math-display" data-tex-b64="QV4yPVxvcGVyYXRvcm5hbWV7dHJ9KEEpQS1cZGV0KEEpSQ=="></div>

이다. 높은 거듭제곱을 <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="SQ=="></span>의 Linear Combination으로 줄일 수 있다.

## 행렬 거듭제곱 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjJcXDMmNFxlbmR7Ym1hdHJpeH0="></div>

라고 하자. Characteristic Polynomial은

<div class="math-display" data-tex-b64="cF9BKHQpCj1cZGV0XGJlZ2lue2JtYXRyaXh9dC0xJi0yXFwtMyZ0LTRcZW5ke2JtYXRyaXh9Cj10XjItNXQtMg=="></div>

이다.

Cayley-Hamilton Theorem에 의해

<div class="math-display" data-tex-b64="QV4yLTVBLTJJPU8="></div>

이고

<div class="math-display" data-tex-b64="QV4yPTVBKzJJ"></div>

이다.

이제

<div class="math-display" data-tex-b64="QV4zPUEoNUErMkkpPTVBXjIrMkE9MjdBKzEwSQ=="></div>

이다. 계속 반복하면 모든 <span class="math-inline" data-tex-b64="QV5u"></span>을

<div class="math-display" data-tex-b64="QV5uPVxhbHBoYV9uQStcYmV0YV9uSQ=="></div>

꼴로 표현할 수 있다.

## Polynomial Division을 이용하는 방법

<span class="math-inline" data-tex-b64="dF5u"></span>을 Characteristic Polynomial로 나눈다.

<div class="math-display" data-tex-b64="dF5uPXEodClwX0EodCkrcih0KSxccXF1YWQgXGRlZyByPG4="></div>

행렬 <span class="math-inline" data-tex-b64="QQ=="></span>를 대입하면

<div class="math-display" data-tex-b64="QV5uPXEoQSlwX0EoQSkrcihBKT1yKEEp"></div>

이다. <span class="math-inline" data-tex-b64="cF9BKEEpPU8="></span>이기 때문이다.

따라서 <span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> 행렬의 높은 거듭제곱은 항상 <span class="math-inline" data-tex-b64="SSxBLFxsZG90cyxBXntuLTF9"></span>의 Linear Combination으로 줄일 수 있다.

## Recurrence Relation

앞의 예제에서는

<div class="math-display" data-tex-b64="QV4yPTVBKzJJ"></div>

이다. 양변에 <span class="math-inline" data-tex-b64="QV57a30="></span>를 곱하면

<div class="math-display" data-tex-b64="QV57aysyfT01QV57aysxfSsyQV5r"></div>

이다. 행렬의 거듭제곱 자체가 2차 recurrence를 만족한다.

이는 수열의 recurrence, 선형동역학계, Fibonacci-type matrix 계산과 연결된다.

## 역행렬 계산

<span class="math-inline" data-tex-b64="QQ=="></span>가 invertible하고

<div class="math-display" data-tex-b64="QV5uK2Ffe24tMX1BXntuLTF9K1xjZG90cythXzFBK2FfMEk9Tw=="></div>

이며 <span class="math-inline" data-tex-b64="YV8wXG5lcTA="></span>라고 하자. 양변에 <span class="math-inline" data-tex-b64="QV57LTF9"></span>를 곱하면

<div class="math-display" data-tex-b64="QV57bi0xfSthX3tuLTF9QV57bi0yfStcY2RvdHMrYV8xSSthXzBBXnstMX09Tw=="></div>

이므로

<div class="math-display" data-tex-b64="QV57LTF9Cj0tXGZyYWMxe2FfMH0KXGxlZnQoQV57bi0xfSthX3tuLTF9QV57bi0yfStcY2RvdHMrYV8xSVxyaWdodCk="></div>

이다.

특히 <span class="math-inline" data-tex-b64="Mlx0aW1lczI="></span>에서는

<div class="math-display" data-tex-b64="QV57LTF9Cj1cZnJhYzF7XGRldChBKX1cbGVmdChcb3BlcmF0b3JuYW1le3RyfShBKUktQVxyaWdodCk="></div>

이다.

## Diagonalization과의 관계

<span class="math-inline" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></span>라고 하자. Characteristic Polynomial의 각 Eigenvalue <span class="math-inline" data-tex-b64="XGxhbWJkYV9p"></span>는

<div class="math-display" data-tex-b64="cF9BKFxsYW1iZGFfaSk9MA=="></div>

을 만족하므로

<div class="math-display" data-tex-b64="cF9BKFxMYW1iZGEpPU8="></div>

이다. 따라서

<div class="math-display" data-tex-b64="cF9BKEEpPVNwX0EoXExhbWJkYSlTXnstMX09Tw=="></div>

이다.

이 증명은 diagonalizable matrix에는 직접 적용된다. 일반 행렬에 대한 완전한 증명은 Adjugate Matrix 또는 Jordan Form을 이용한다.

## Adjugate를 이용한 핵심 아이디어

다음 항등식을 사용한다.

<div class="math-display" data-tex-b64="KHRJLUEpXG9wZXJhdG9ybmFtZXthZGp9KHRJLUEpPXBfQSh0KUk="></div>

<span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXthZGp9KHRJLUEp"></span>를 <span class="math-inline" data-tex-b64="dA=="></span>에 대한 matrix polynomial로 전개하고 같은 차수의 coefficient를 비교하면, 이 coefficient 관계를 조합하여

<div class="math-display" data-tex-b64="cF9BKEEpPU8="></div>

를 얻을 수 있다.

## 예제: A⁵ 계산

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJjFcXDAmM1xlbmR7Ym1hdHJpeH0="></div>

이다. Characteristic Polynomial은

<div class="math-display" data-tex-b64="cF9BKHQpPSh0LTIpKHQtMyk9dF4yLTV0KzY="></div>

이므로

<div class="math-display" data-tex-b64="QV4yPTVBLTZJ"></div>

이다.

순서대로 계산하면

<div class="math-display" data-tex-b64="QV4zPTVBXjItNkE9MTlBLTMwSQ=="></div>

<div class="math-display" data-tex-b64="QV40PTE5QV4yLTMwQT02NUEtMTE0SQ=="></div>

<div class="math-display" data-tex-b64="QV41PTY1QV4yLTExNEE9MjExQS0zOTBJ"></div>

이다.

## 정리

- 모든 정사각행렬은 자신의 Characteristic Polynomial을 만족한다.
- <span class="math-inline" data-tex-b64="cF9BKEEpPU8="></span>이다.
- 높은 행렬 거듭제곱은 낮은 차수의 거듭제곱으로 축소할 수 있다.
- Invertible matrix의 inverse를 matrix polynomial로 표현할 수 있다.
- <span class="math-inline" data-tex-b64="Mlx0aW1lczI="></span>에서는 <span class="math-inline" data-tex-b64="QV4yLVxvcGVyYXRvcm5hbWV7dHJ9KEEpQStcZGV0KEEpST1P"></span>가 성립한다.

## 확인 문제

### 1

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0wJi0yXFwxJjNcZW5ke2JtYXRyaXh9"></div>

에 대해 Cayley-Hamilton Theorem을 확인한다.

### 2

위 행렬의 <span class="math-inline" data-tex-b64="QV42"></span>을 <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="SQ=="></span>의 Linear Combination으로 나타낸다.

## 풀이

### 1번

Characteristic Polynomial은

<div class="math-display" data-tex-b64="cF9BKHQpPXReMi0zdCsy"></div>

이다. 따라서

<div class="math-display" data-tex-b64="QV4yLTNBKzJJPU8="></div>

이어야 한다. 직접 계산하면

<div class="math-display" data-tex-b64="QV4yPVxiZWdpbntibWF0cml4fS0yJi02XFwzJjdcZW5ke2JtYXRyaXh9"></div>

이고 <span class="math-inline" data-tex-b64="M0EtMkk="></span>도 같은 행렬이므로 정리가 확인된다.

### 2번

<span class="math-inline" data-tex-b64="QV4yPTNBLTJJ"></span>를 반복하면

<div class="math-display" data-tex-b64="QV4zPTdBLTZJLFxxdWFkCkFeND0xNUEtMTRJLFxxdWFkCkFeNT0zMUEtMzBJ"></div>

이고

<div class="math-display" data-tex-b64="QV42PTYzQS02Mkk="></div>

이다.
