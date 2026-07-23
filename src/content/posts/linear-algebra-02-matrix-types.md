---
title: "2. 자주 사용하는 Matrix의 종류"
description: "Square Matrix, Identity Matrix, Diagonal Matrix, Transpose와 Triangular Matrix의 정의와 성질을 정리한다."
date: "2025-06-29"
category: "선형대수학"
tags: ["linear-algebra", "matrix", "transpose", "triangular-matrix"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

matrix는 원소를 배열한 표처럼 보이지만, 특정한 형태를 가진 matrix에는 계산을 단순하게 만드는 성질이 있다. 이후 Gaussian Elimination, inverse matrix, eigenvalue를 공부할 때 반복해서 등장하는 matrix들을 정리한다.

## Square Matrix

row와 column의 개수가 같은 matrix를 Square Matrix라고 한다. <span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> Square Matrix는 다음 형태이다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CmFfezExfSZhX3sxMn0mXGNkb3RzJmFfezFufVxcCmFfezIxfSZhX3syMn0mXGNkb3RzJmFfezJufVxcClx2ZG90cyZcdmRvdHMmXGRkb3RzJlx2ZG90c1xcCmFfe24xfSZhX3tuMn0mXGNkb3RzJmFfe25ufQpcZW5ke2JtYXRyaXh9"></div>

determinant, eigenvalue, diagonalization처럼 뒤에서 다루는 많은 개념은 Square Matrix를 대상으로 정의된다.

예를 들어

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjImMSYwXFwKLTEmMyY0XFwKMCY1Ji0yClxlbmR7Ym1hdHJpeH0="></div>

는 <span class="math-inline" data-tex-b64="M1x0aW1lczM="></span> Square Matrix이다.

## Identity Matrix

Identity Matrix는 main diagonal의 element가 모두 <span class="math-inline" data-tex-b64="MQ=="></span>이고 나머지 element가 <span class="math-inline" data-tex-b64="MA=="></span>인 Square Matrix이다. <span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> Identity Matrix를 <span class="math-inline" data-tex-b64="SV9u"></span>으로 나타낸다.

<div class="math-display" data-tex-b64="SV9uPQpcYmVnaW57Ym1hdHJpeH0KMSYwJlxjZG90cyYwXFwKMCYxJlxjZG90cyYwXFwKXHZkb3RzJlx2ZG90cyZcZGRvdHMmXHZkb3RzXFwKMCYwJlxjZG90cyYxClxlbmR7Ym1hdHJpeH0="></div>

Matrix Multiplication에서 수의 <span class="math-inline" data-tex-b64="MQ=="></span>과 같은 identity 역할을 한다.

<div class="math-display" data-tex-b64="QUlfbj1JX25BPUE="></div>

## Diagonal Matrix

main diagonal 이외의 모든 element가 <span class="math-inline" data-tex-b64="MA=="></span>인 Square Matrix를 Diagonal Matrix라고 한다.

<div class="math-display" data-tex-b64="RD0KXGJlZ2lue2JtYXRyaXh9CmRfMSYwJlxjZG90cyYwXFwKMCZkXzImXGNkb3RzJjBcXApcdmRvdHMmXHZkb3RzJlxkZG90cyZcdmRvdHNcXAowJjAmXGNkb3RzJmRfbgpcZW5ke2JtYXRyaXh9Cj1cb3BlcmF0b3JuYW1le2RpYWd9KGRfMSxkXzIsXGxkb3RzLGRfbik="></div>

main diagonal의 element에는 <span class="math-inline" data-tex-b64="MA=="></span>도 올 수 있다. Identity Matrix는 모든 diagonal element가 <span class="math-inline" data-tex-b64="MQ=="></span>인 Diagonal Matrix이다.

Diagonal Matrix의 operation은 component-wise calculation으로 단순화된다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtkaWFnfShhXzEsXGxkb3RzLGFfbikKXG9wZXJhdG9ybmFtZXtkaWFnfShiXzEsXGxkb3RzLGJfbikKPQpcb3BlcmF0b3JuYW1le2RpYWd9KGFfMWJfMSxcbGRvdHMsYV9uYl9uKQ=="></div>

또한

<div class="math-display" data-tex-b64="RF5rPVxvcGVyYXRvcm5hbWV7ZGlhZ30oZF8xXmssXGxkb3RzLGRfbl5rKQ=="></div>

이다.

## Transpose

matrix의 row와 column을 맞바꾼 matrix를 Transpose라고 한다. <span class="math-inline" data-tex-b64="QT1bYV97aWp9XQ=="></span>일 때

<div class="math-display" data-tex-b64="KEFeVClfe2lqfT1hX3tqaX0="></div>

로 정의한다.

예를 들어

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMiYzXFwKNCY1JjYKXGVuZHtibWF0cml4fQ=="></div>

이면

<div class="math-display" data-tex-b64="QV5UPQpcYmVnaW57Ym1hdHJpeH0KMSY0XFwKMiY1XFwKMyY2ClxlbmR7Ym1hdHJpeH0="></div>

이다.

Transpose에서 자주 사용하는 성질은 다음과 같다.

<div class="math-display" data-tex-b64="KEFeVCleVD1B"></div>

<div class="math-display" data-tex-b64="KEErQileVD1BXlQrQl5U"></div>

<div class="math-display" data-tex-b64="KGNBKV5UPWNBXlQ="></div>

<div class="math-display" data-tex-b64="KEFCKV5UPUJeVEFeVA=="></div>

마지막 식에서는 product의 순서가 뒤집힌다.

### Symmetric Matrix와 Skew-Symmetric Matrix

Square Matrix <span class="math-inline" data-tex-b64="QQ=="></span>가

<div class="math-display" data-tex-b64="QV5UPUE="></div>

를 만족하면 Symmetric Matrix라고 한다. 반대로

<div class="math-display" data-tex-b64="QV5UPS1B"></div>

이면 Skew-Symmetric Matrix라고 한다. real Skew-Symmetric Matrix의 main diagonal element는 모두 <span class="math-inline" data-tex-b64="MA=="></span>이다.

## Triangular Matrix

Square Matrix에서 main diagonal의 한쪽이 모두 <span class="math-inline" data-tex-b64="MA=="></span>이면 Triangular Matrix이다.

Upper Triangular Matrix는 main diagonal 아래가 모두 <span class="math-inline" data-tex-b64="MA=="></span>이다.

<div class="math-display" data-tex-b64="VT0KXGJlZ2lue2JtYXRyaXh9CnVfezExfSZ1X3sxMn0mXGNkb3RzJnVfezFufVxcCjAmdV97MjJ9JlxjZG90cyZ1X3sybn1cXApcdmRvdHMmXGRkb3RzJlxkZG90cyZcdmRvdHNcXAowJlxjZG90cyYwJnVfe25ufQpcZW5ke2JtYXRyaXh9"></div>

Lower Triangular Matrix는 main diagonal 위가 모두 <span class="math-inline" data-tex-b64="MA=="></span>이다.

<div class="math-display" data-tex-b64="TD0KXGJlZ2lue2JtYXRyaXh9CmxfezExfSYwJlxjZG90cyYwXFwKbF97MjF9JmxfezIyfSZcY2RvdHMmMFxcClx2ZG90cyZcZGRvdHMmXGRkb3RzJlx2ZG90c1xcCmxfe24xfSZcY2RvdHMmbF97bixuLTF9Jmxfe25ufQpcZW5ke2JtYXRyaXh9"></div>

같은 종류의 Triangular Matrix끼리 곱하면 다시 같은 종류의 Triangular Matrix가 된다. Diagonal Matrix는 Upper Triangular Matrix이면서 동시에 Lower Triangular Matrix이다.

Triangular Matrix는 Gaussian Elimination과 back substitution에서 자연스럽게 등장한다. determinant도 main diagonal element의 product로 바로 계산할 수 있다.

<div class="math-display" data-tex-b64="XGRldChVKT11X3sxMX11X3syMn1cY2RvdHMgdV97bm59"></div>

## 정리

- Identity Matrix는 Matrix Multiplication의 identity이다.
- Diagonal Matrix는 multiplication과 power가 component-wise calculation으로 단순화된다.
- Transpose는 row와 column의 관점을 바꾸며 Symmetric Matrix와 orthogonality를 이해하는 기초가 된다.
- Triangular Matrix는 Linear System의 풀이와 Matrix Decomposition에서 중요한 역할을 한다.

## 확인 문제

1. 다음 matrix가 Square Matrix, Diagonal Matrix, Upper Triangular Matrix, Lower Triangular Matrix 중 어디에 해당하는지 분류한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjImMCYwXFwKMCYtMSYwXFwKMCYwJjQKXGVuZHtibWF0cml4fQ=="></div>

2. <span class="math-inline" data-tex-b64="KEFCKV5UPUJeVEFeVA=="></span>에서 product의 순서가 바뀌는 이유를 element 단위로 확인한다.
3. 임의의 real Square Matrix <span class="math-inline" data-tex-b64="QQ=="></span>를 Symmetric Matrix <span class="math-inline" data-tex-b64="Qg=="></span>와 Skew-Symmetric Matrix <span class="math-inline" data-tex-b64="Qw=="></span>의 sum <span class="math-inline" data-tex-b64="QT1CK0M="></span>로 나타낸다.

## 풀이


### 1번

<span class="math-inline" data-tex-b64="QQ=="></span>는 <span class="math-inline" data-tex-b64="M1x0aW1lczM="></span> Square Matrix이며 main diagonal 이외의 element가 모두 <span class="math-inline" data-tex-b64="MA=="></span>이므로 Diagonal Matrix이다. 따라서 Upper Triangular Matrix이면서 Lower Triangular Matrix이기도 하다.

### 2번

<span class="math-inline" data-tex-b64="KEFCKV97aWp9PVxzdW1fayBhX3tpa31iX3tran0="></span>이므로

<div class="math-display" data-tex-b64="KChBQileVClfe2lqfT0oQUIpX3tqaX09XHN1bV9rIGFfe2prfWJfe2tpfQ=="></div>

이다. 한편

<div class="math-display" data-tex-b64="KEJeVEFeVClfe2lqfT1cc3VtX2sgKEJeVClfe2lrfShBXlQpX3tran0KPVxzdW1fayBiX3traX1hX3tqa30="></div>

이고 scalar multiplication은 commutative하므로 두 식이 같다.

### 3번

<div class="math-display" data-tex-b64="Qj1cZnJhY3tBK0FeVH17Mn0sClxxcXVhZApDPVxmcmFje0EtQV5UfXsyfQ=="></div>

로 두면 <span class="math-inline" data-tex-b64="Ql5UPUI="></span>, <span class="math-inline" data-tex-b64="Q15UPS1D"></span>이고 <span class="math-inline" data-tex-b64="QitDPUE="></span>가 된다.


---

**Linear Algebra 정리 시리즈** · 2/5 · [← 이전: Vector Space와 Linear Map](/posts/linear-algebra-01-vector-spaces/) · [다음: Inner Product, Norm과 Linear Combination →](/posts/linear-algebra-03-inner-product-linear-combination/)
