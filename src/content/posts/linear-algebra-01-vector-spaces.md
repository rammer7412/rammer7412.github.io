---
title: "1. Vector Space와 Linear Map"
description: "Field, Vector Space, Subspace와 Linearity의 정의를 연결해 Linear Algebra의 출발점을 정리한다."
date: "2025-06-28"
category: "선형대수학"
tags: ["linear-algebra", "vector-space", "subspace", "linear-map"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

Linear Algebra를 처음 공부할 때 가장 낯설었던 부분은 vector 자체보다 **Vector Space의 정의**였다. vector를 화살표나 좌표로만 이해하면 계산은 할 수 있지만, 함수와 matrix를 하나의 구조로 묶어 이해하기는 어렵다.

이 글에서는 Field에서 출발해 Vector Space, Subspace, Linearity와 Linear Map으로 이어지는 흐름을 정리한다.

## Field

Field <span class="math-inline" data-tex-b64="Rg=="></span>는 덧셈과 곱셈이 정의된 집합이며, 두 연산이 익숙한 산술 법칙을 만족하는 algebraic structure이다. 핵심 조건은 다음과 같다.

- 덧셈과 곱셈에 대해 commutative law와 associative law가 성립한다.
- 곱셈은 덧셈에 대해 distributive law를 만족한다.
- 덧셈의 identity <span class="math-inline" data-tex-b64="MA=="></span>과 곱셈의 identity <span class="math-inline" data-tex-b64="MQ=="></span>이 존재한다.
- 모든 원소는 additive inverse를 가진다.
- <span class="math-inline" data-tex-b64="MA=="></span>이 아닌 모든 원소는 multiplicative inverse를 가진다.

대표적인 예는 다음과 같다.

<div class="math-display" data-tex-b64="XG1hdGhiYntRfSwgXHFxdWFkIFxtYXRoYmJ7Un0sIFxxcXVhZCBcbWF0aGJie0N9"></div>

소수 <span class="math-inline" data-tex-b64="cA=="></span>에 대한 <span class="math-inline" data-tex-b64="XG1hdGhiYntafV9w"></span>도 Field가 된다. Vector Space에서 vector의 component와 scalar는 보통 이러한 Field의 원소로 잡는다.

## Vector Space

Field <span class="math-inline" data-tex-b64="Rg=="></span> 위의 Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>는 vector addition과 scalar multiplication이 정의된 집합이다. 모든 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fSxcbWF0aGJme3Z9LFxtYXRoYmZ7d31caW4gVg=="></span>와 <span class="math-inline" data-tex-b64="YSxiXGluIEY="></span>에 대해 다음 성질이 성립한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fStcbWF0aGJme3Z9PVxtYXRoYmZ7dn0rXG1hdGhiZnt1fQ=="></div>

<div class="math-display" data-tex-b64="KFxtYXRoYmZ7dX0rXG1hdGhiZnt2fSkrXG1hdGhiZnt3fT1cbWF0aGJme3V9KyhcbWF0aGJme3Z9K1xtYXRoYmZ7d30p"></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fStcbWF0aGJmezB9PVxtYXRoYmZ7dn0sClxxcXVhZApcbWF0aGJme3Z9KygtXG1hdGhiZnt2fSk9XG1hdGhiZnswfQ=="></div>

<div class="math-display" data-tex-b64="YShcbWF0aGJme3V9K1xtYXRoYmZ7dn0pPWFcbWF0aGJme3V9K2FcbWF0aGJme3Z9"></div>

<div class="math-display" data-tex-b64="KGErYilcbWF0aGJme3Z9PWFcbWF0aGJme3Z9K2JcbWF0aGJme3Z9"></div>

<div class="math-display" data-tex-b64="KGFiKVxtYXRoYmZ7dn09YShiXG1hdGhiZnt2fSksClxxcXVhZAoxXG1hdGhiZnt2fT1cbWF0aGJme3Z9"></div>

핵심은 vector를 더하거나 scalar multiplication해도 같은 공간 안에 남고, 그 연산이 일반적인 산술과 모순되지 않는다는 점이다.

가장 익숙한 예는 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV5u"></span>이다. polynomial의 집합이나 matrix의 집합도 적절한 operation을 정의하면 Vector Space가 된다.

## Subspace

<span class="math-inline" data-tex-b64="Uw=="></span>가 Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>의 subset이라고 하자. <span class="math-inline" data-tex-b64="Uw=="></span>가 다음 세 조건을 만족하면 <span class="math-inline" data-tex-b64="Vg=="></span>의 Subspace이다.

1. <span class="math-inline" data-tex-b64="XG1hdGhiZnswfVxpbiBT"></span>
2. <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fSxcbWF0aGJme3l9XGluIFM="></span>이면 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fStcbWF0aGJme3l9XGluIFM="></span>
3. <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fVxpbiBT"></span>, <span class="math-inline" data-tex-b64="YVxpbiBG"></span>이면 <span class="math-inline" data-tex-b64="YVxtYXRoYmZ7eH1caW4gUw=="></span>

두 번째와 세 번째 조건은 각각 vector addition과 scalar multiplication에 대해 closed라는 뜻이다.

예를 들어

<div class="math-display" data-tex-b64="Uz1ceyh4LHkpXGluXG1hdGhiYntSfV4yOngreT0wXH0="></div>

은 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Subspace이다. zero vector가 포함되고, 조건을 만족하는 두 vector의 sum과 scalar multiple도 다시 <span class="math-inline" data-tex-b64="eCt5PTA="></span>을 만족한다.

반면

<div class="math-display" data-tex-b64="Uz1ceyh4LHkpXGluXG1hdGhiYntSfV4yOngreT0zXH0="></div>

은 Subspace가 아니다. <span class="math-inline" data-tex-b64="KDAsMCk="></span>이 포함되지 않기 때문이다. 원점을 지나지 않는 line은 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Subspace가 될 수 없다는 geometric intuition과도 연결된다.

## Linearity

함수 <span class="math-inline" data-tex-b64="VA=="></span>가 다음 두 성질을 만족하면 linear하다고 한다.

<div class="math-display" data-tex-b64="VChcbWF0aGJme3h9K1xtYXRoYmZ7eX0pPVQoXG1hdGhiZnt4fSkrVChcbWF0aGJme3l9KQ=="></div>

<div class="math-display" data-tex-b64="VChhXG1hdGhiZnt4fSk9YVQoXG1hdGhiZnt4fSk="></div>

첫 번째는 additivity, 두 번째는 homogeneity이다. 두 식을 합치면 다음과 같이 쓸 수 있다.

<div class="math-display" data-tex-b64="VChhXG1hdGhiZnt4fStiXG1hdGhiZnt5fSkKPWFUKFxtYXRoYmZ7eH0pK2JUKFxtYXRoYmZ7eX0p"></div>

즉 linear function은 Linear Combination을 보존한다.

Linearity에서 바로 따라오는 중요한 성질도 있다.

<div class="math-display" data-tex-b64="VChcbWF0aGJmezB9KT1cbWF0aGJmezB9"></div>

따라서 origin을 origin이 아닌 곳으로 보내는 함수는 linear할 수 없다.

## Linear Map과 Matrix

Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>와 <span class="math-inline" data-tex-b64="Vw=="></span> 사이의 함수

<div class="math-display" data-tex-b64="VDpWXHRvIFc="></div>

가 Linearity를 만족하면 <span class="math-inline" data-tex-b64="VA=="></span>를 Linear Map이라고 한다.

finite-dimensional space에서는 matrix가 Linear Map을 표현하는 대표적인 도구이다. matrix

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMlxcCjAmLTEKXGVuZHtibWF0cml4fQ=="></div>

와 vector

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT0KXGJlZ2lue2JtYXRyaXh9CnhfMVxceF8yClxlbmR7Ym1hdHJpeH0="></div>

를 생각하면 <span class="math-inline" data-tex-b64="VChcbWF0aGJme3h9KT1BXG1hdGhiZnt4fQ=="></span>는 다음과 같다.

<div class="math-display" data-tex-b64="VChcbWF0aGJme3h9KT0KXGJlZ2lue2JtYXRyaXh9CjEmMlxcCjAmLTEKXGVuZHtibWF0cml4fQpcYmVnaW57Ym1hdHJpeH0KeF8xXFx4XzIKXGVuZHtibWF0cml4fQo9ClxiZWdpbntibWF0cml4fQp4XzErMnhfMlxcLXhfMgpcZW5ke2JtYXRyaXh9"></div>

Matrix Multiplication의 distributive law와 scalar multiplication의 associative law 때문에 이 함수는 additivity와 homogeneity를 모두 만족한다.

## 정리

- Field는 scalar를 계산하는 규칙을 제공한다.
- Vector Space는 vector addition과 scalar multiplication이 안정적으로 이루어지는 공간이다.
- Subspace는 같은 operation structure를 유지하는 Vector Space의 subset이다.
- Linear Map은 vector addition과 scalar multiplication을 보존하는 함수이다.
- matrix는 finite-dimensional Linear Map을 구체적으로 표현한다.

각 개념은 결국 **Linear Combination을 보존하는 공간과 함수**를 설명하기 위해 연결된다.

## 확인 문제

1. <span class="math-inline" data-tex-b64="Uz1cbGJyYWNlKHgseSlcaW5cbWF0aGJie1J9XjI6eCt5PTBccmJyYWNl"></span>가 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Subspace인지 확인한다.
2. <span class="math-inline" data-tex-b64="VCh4LHkpPSh4eSx4K3kp"></span>가 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4yXHRvXG1hdGhiYntSfV4y"></span>의 Linear Map인지 확인한다.

## 풀이


### 1번

<span class="math-inline" data-tex-b64="Uw=="></span>에는 <span class="math-inline" data-tex-b64="KDAsMCk="></span>이 포함된다. <span class="math-inline" data-tex-b64="KHhfMSx5XzEpLCh4XzIseV8yKVxpbiBT"></span>이면

<div class="math-display" data-tex-b64="KHhfMSt4XzIpKyh5XzEreV8yKT0w"></div>

이므로 sum도 <span class="math-inline" data-tex-b64="Uw=="></span>에 속한다. 또한 <span class="math-inline" data-tex-b64="YVxpblxtYXRoYmJ7Un0="></span>에 대해

<div class="math-display" data-tex-b64="YSB4XzErYSB5XzE9YSh4XzEreV8xKT0w"></div>

이므로 scalar multiple도 <span class="math-inline" data-tex-b64="Uw=="></span>에 속한다. 따라서 <span class="math-inline" data-tex-b64="Uw=="></span>는 Subspace이다.

### 2번

Linear Map이 아니다. 예를 들어 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fT0oMSwwKQ=="></span>, <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fT0oMCwxKQ=="></span>로 두면

<div class="math-display" data-tex-b64="VChcbWF0aGJme3V9KStUKFxtYXRoYmZ7dn0pPSgwLDEpKygwLDEpPSgwLDIp"></div>

이지만

<div class="math-display" data-tex-b64="VChcbWF0aGJme3V9K1xtYXRoYmZ7dn0pPVQoMSwxKT0oMSwyKQ=="></div>

이다. additivity가 성립하지 않는다.


---

**Linear Algebra 정리 시리즈** · 1/5 · [다음: 자주 사용하는 Matrix의 종류 →](/posts/linear-algebra-02-matrix-types/)
