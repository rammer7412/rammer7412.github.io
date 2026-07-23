---
title: "3. Inner Product, Norm과 Linear Combination"
description: "Inner Product와 여러 Norm을 정리하고, Linear Combination과 Linear Independence의 의미를 연결한다."
date: "2025-06-30"
category: "선형대수학"
tags: ["linear-algebra", "inner-product", "norm", "linear-combination", "linear-independence"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

vector를 공부할 때 Inner Product는 component끼리 곱해 더하는 operation으로 먼저 접하게 된다. 그러나 Inner Product는 length, distance, angle, orthogonality를 하나의 구조로 연결한다. 여기에 Linear Combination과 Linear Independence를 함께 정리하면 이후의 Span과 Basis를 이해하기 쉬워진다.

## Inner Product

<span class="math-inline" data-tex-b64="XG1hdGhiZnt1fSxcbWF0aGJme3Z9XGluXG1hdGhiYntSfV5u"></span>을

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fT0odV8xLHVfMixcbGRvdHMsdV9uKSwKXHFxdWFkClxtYXRoYmZ7dn09KHZfMSx2XzIsXGxkb3RzLHZfbik="></div>

라고 하자. standard Inner Product는 다음과 같이 정의된다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt2fQo9XHN1bV97aT0xfV5uIHVfaXZfaQo9XG1hdGhiZnt1fV5UXG1hdGhiZnt2fQ=="></div>

예를 들어 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fT0oMSwyLDMp"></span>, <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fT0oNCwtMSwyKQ=="></span>이면

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt2fQo9MVxjZG90NCsyXGNkb3QoLTEpKzNcY2RvdDI9OA=="></div>

이다.

### Inner Product의 기본 성질

real Vector Space의 standard Inner Product는 다음 성질을 만족한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt2fQo9XG1hdGhiZnt2fVxjZG90XG1hdGhiZnt1fQ=="></div>

<div class="math-display" data-tex-b64="KGNcbWF0aGJme3V9KVxjZG90XG1hdGhiZnt2fQo9YyhcbWF0aGJme3V9XGNkb3RcbWF0aGJme3Z9KQ=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90KFxtYXRoYmZ7dn0rXG1hdGhiZnt3fSkKPVxtYXRoYmZ7dX1cY2RvdFxtYXRoYmZ7dn0rXG1hdGhiZnt1fVxjZG90XG1hdGhiZnt3fQ=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt1fVxnZSAw"></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt1fT0wClxpZmYKXG1hdGhiZnt1fT1cbWF0aGJmezB9"></div>

특히 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt2fT0w"></span>이면 두 vector는 orthogonal이다.

## Norm

Norm은 vector의 magnitude를 측정하는 함수이다. standard Euclidean Norm은 Inner Product로부터 정의된다.

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfMgo9XHNxcnR7XG1hdGhiZnt1fVxjZG90XG1hdGhiZnt1fX0KPVxzcXJ0e3VfMV4yK3VfMl4yK1xjZG90cyt1X25eMn0="></div>

Norm은 다음 세 조건을 만족해야 한다.

1. <span class="math-inline" data-tex-b64="XGxWZXJ0XG1hdGhiZnt1fVxyVmVydFxnZTA="></span>이고 <span class="math-inline" data-tex-b64="XGxWZXJ0XG1hdGhiZnt1fVxyVmVydD0wXGlmZlxtYXRoYmZ7dX09XG1hdGhiZnswfQ=="></span>
2. <span class="math-inline" data-tex-b64="XGxWZXJ0IGNcbWF0aGJme3V9XHJWZXJ0PXxjfFxsVmVydFxtYXRoYmZ7dX1cclZlcnQ="></span>
3. <span class="math-inline" data-tex-b64="XGxWZXJ0XG1hdGhiZnt1fStcbWF0aGJme3Z9XHJWZXJ0XGxlXGxWZXJ0XG1hdGhiZnt1fVxyVmVydCtcbFZlcnRcbWF0aGJme3Z9XHJWZXJ0"></span>

세 번째 조건은 triangle inequality이다.

### 여러 종류의 Norm

<span class="math-inline" data-tex-b64="MQ=="></span>-Norm은 component의 absolute value를 모두 더한다.

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfMT1cc3VtX3tpPTF9Xm4gfHVfaXw="></div>

일반적인 <span class="math-inline" data-tex-b64="cA=="></span>-Norm은 다음과 같다.

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfcAo9XGxlZnQoXHN1bV97aT0xfV5uIHx1X2l8XnBccmlnaHQpXnsxL3B9LApccXF1YWQgcFxnZTE="></div>

Infinity Norm은 absolute value가 가장 큰 component를 선택한다.

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfXGluZnR5Cj1cbWF4X3sxXGxlIGlcbGUgbn18dV9pfA=="></div>

같은 vector라도 어떤 Norm을 사용하느냐에 따라 magnitude를 측정하는 방식이 달라진다. optimization과 machine learning에서는 이 차이가 regularization과 distance metric에 직접 연결된다.

## Linear Combination

vector <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2s="></span>와 scalar <span class="math-inline" data-tex-b64="Y18xLFxsZG90cyxjX2s="></span>가 있을 때

<div class="math-display" data-tex-b64="Y18xXG1hdGhiZnt2fV8xK2NfMlxtYXRoYmZ7dn1fMitcY2RvdHMrY19rXG1hdGhiZnt2fV9r"></div>

형태의 vector를 주어진 vector들의 Linear Combination이라고 한다.

<span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Standard Basis

<div class="math-display" data-tex-b64="XG1hdGhiZntlfV8xPSgxLDApLApccXF1YWQKXG1hdGhiZntlfV8yPSgwLDEp"></div>

를 사용하면 모든 vector <span class="math-inline" data-tex-b64="KHgseSk="></span>를

<div class="math-display" data-tex-b64="KHgseSk9eFxtYXRoYmZ7ZX1fMSt5XG1hdGhiZntlfV8y"></div>

로 표현할 수 있다.

Linear Combination은 주어진 vector들로 어떤 space를 만들 수 있는지를 설명한다.

## Linear Independence

vector set <span class="math-inline" data-tex-b64="XGxicmFjZVxtYXRoYmZ7dn1fMSxcbGRvdHMsXG1hdGhiZnt2fV9rXHJicmFjZQ=="></span>가 다음 조건을 만족하면 linearly independent이다.

<div class="math-display" data-tex-b64="Y18xXG1hdGhiZnt2fV8xK1xjZG90cytjX2tcbWF0aGJme3Z9X2s9XG1hdGhiZnswfQpcaW1wbGllcwpjXzE9XGNkb3RzPWNfaz0w"></div>

zero vector를 만드는 coefficient combination이 trivial solution 하나뿐이라는 뜻이다.

반대로 <span class="math-inline" data-tex-b64="MA=="></span>이 아닌 coefficient를 포함하는 combination으로 zero vector를 만들 수 있다면 linearly dependent이다. 이 경우 어떤 vector 하나가 나머지 vector들의 Linear Combination으로 표현된다.

예를 들어

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xPSgxLDIpLApccXF1YWQKXG1hdGhiZnt2fV8yPSgyLDQp"></div>

에 대해

<div class="math-display" data-tex-b64="MlxtYXRoYmZ7dn1fMS1cbWF0aGJme3Z9XzI9XG1hdGhiZnswfQ=="></div>

이므로 두 vector는 linearly dependent이다.

## Linear Independence와 표현의 유일성

linearly independent인 vector들로 어떤 vector를 표현할 수 있다면 그 Linear Combination의 coefficient는 unique하다.

같은 vector <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>가

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT1jXzFcbWF0aGJme3Z9XzErXGNkb3RzK2Nfa1xtYXRoYmZ7dn1faw=="></div>

와

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT1kXzFcbWF0aGJme3Z9XzErXGNkb3RzK2Rfa1xtYXRoYmZ7dn1faw=="></div>

로 표현된다고 하자. 두 식을 빼면

<div class="math-display" data-tex-b64="KGNfMS1kXzEpXG1hdGhiZnt2fV8xK1xjZG90cysoY19rLWRfaylcbWF0aGJme3Z9X2s9XG1hdGhiZnswfQ=="></div>

이다. vector들이 linearly independent이므로 모든 <span class="math-inline" data-tex-b64="aQ=="></span>에 대해 <span class="math-inline" data-tex-b64="Y19pLWRfaT0w"></span>이고, 따라서 <span class="math-inline" data-tex-b64="Y19pPWRfaQ=="></span>이다.

이 성질이 하나의 Basis에 대한 coordinate를 unique하게 정의할 수 있는 이유이다.

## 정리

- Inner Product는 두 vector의 관계를 하나의 scalar로 나타낸다.
- Norm은 vector의 magnitude를 정의한다.
- Linear Combination은 주어진 vector들로 만들 수 있는 vector를 표현한다.
- Linear Independence는 표현에 redundancy가 없는 상태를 뜻한다.
- linearly independent인 vector를 이용한 표현의 coefficient는 unique하다.

## 확인 문제

1. <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fT0oMywtNCwxKQ=="></span>의 <span class="math-inline" data-tex-b64="MQ=="></span>-Norm, <span class="math-inline" data-tex-b64="Mg=="></span>-Norm, Infinity Norm을 계산한다.
2. <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8xPSgxLDAsMSk="></span>, <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8yPSgwLDEsMSk="></span>, <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8zPSgxLDEsMik="></span>가 linearly independent인지 확인한다.

## 풀이


### 1번

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfMT18M3wrfC00fCt8MXw9OA=="></div>

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfMj1cc3FydHszXjIrKC00KV4yKzFeMn09XHNxcnR7MjZ9"></div>

<div class="math-display" data-tex-b64="XHxcbWF0aGJme3V9XHxfXGluZnR5PTQ="></div>

### 2번

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8zPVxtYXRoYmZ7dn1fMStcbWF0aGJme3Z9XzI="></div>

이므로

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xK1xtYXRoYmZ7dn1fMi1cbWF0aGJme3Z9XzM9XG1hdGhiZnswfQ=="></div>

이라는 nontrivial relation이 존재한다. 따라서 세 vector는 linearly dependent이다.


---

**Linear Algebra 정리 시리즈** · 3/5 · [← 이전: 자주 사용하는 Matrix의 종류](/posts/linear-algebra-02-matrix-types/) · [다음: Gaussian Elimination과 Linear System의 해 →](/posts/linear-algebra-04-gaussian-elimination/)
