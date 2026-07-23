---
title: "8. Determinant, Adjugate Matrix와 Cramer's Rule"
description: "Laplace Expansion과 Determinant의 성질을 정리하고, Adjugate Matrix를 이용한 역행렬 공식과 Cramer's Rule을 연결한다."
date: "2025-07-21"
category: "선형대수학"
tags: ["linear-algebra", "determinant", "laplace-expansion", "adjugate", "cramers-rule"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 8
featured: false
draft: false
---
Determinant는 정사각행렬에 하나의 scalar를 대응시키는 함수이다. 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>의 Determinant는 <span class="math-inline" data-tex-b64="XGRldChBKQ=="></span> 또는 <span class="math-inline" data-tex-b64="fEF8"></span>로 나타낸다.

Determinant는 행렬이 가역인지 판단하고, Linear Transformation이 공간의 넓이나 부피를 얼마나 변화시키는지 나타내며, 연립방정식의 해를 구하는 데 사용된다.

특히 다음 관계가 중요하다.

<div class="math-display" data-tex-b64="QVx0ZXh0e+qwgCBpbnZlcnRpYmxlfVxxdWFkXExvbmdsZWZ0cmlnaHRhcnJvd1xxdWFkXGRldChBKVxuZXEw"></div>

## 2×2 행렬의 Determinant

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CmEmYlxcYyZkClxlbmR7Ym1hdHJpeH0="></div>

이면

<div class="math-display" data-tex-b64="XGRldChBKT1hZC1iYw=="></div>

이다. 예를 들어

<div class="math-display" data-tex-b64="XGRldApcYmVnaW57Ym1hdHJpeH0KMSYyXFwzJjQKXGVuZHtibWF0cml4fQo9NC02PS0y"></div>

이므로 이 행렬은 invertible이다.

## Minor와 Cofactor

<span class="math-inline" data-tex-b64="TV97aWp9"></span>는 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>에서 <span class="math-inline" data-tex-b64="aQ=="></span>번째 row와 <span class="math-inline" data-tex-b64="ag=="></span>번째 column을 제거한 부분행렬의 Determinant이다.

Cofactor는 Minor에 위치에 따른 부호를 붙인 값이다.

<div class="math-display" data-tex-b64="Q197aWp9PSgtMSlee2kran1NX3tpan0="></div>

부호는 다음처럼 번갈아 나타난다.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CismLSYrJlxjZG90c1xcCi0mKyYtJlxjZG90c1xcCismLSYrJlxjZG90c1xcClx2ZG90cyZcdmRvdHMmXHZkb3RzJgpcZW5ke2JtYXRyaXh9"></div>

예를 들어

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMiYzXFw0JjUmNlxcNyY4JjkKXGVuZHtibWF0cml4fQ=="></div>

에서

<div class="math-display" data-tex-b64="TV97MTF9PQpcYmVnaW57dm1hdHJpeH0KNSY2XFw4JjkKXGVuZHt2bWF0cml4fQo9LTMsClxxcXVhZCBDX3sxMX09LTM="></div>

이다.

## Laplace Expansion

Laplace Expansion은 한 row 또는 한 column을 기준으로 Determinant를 전개하는 방법이다.

<span class="math-inline" data-tex-b64="aQ=="></span>번째 row를 기준으로 전개하면

<div class="math-display" data-tex-b64="XGRldChBKT1cc3VtX3tqPTF9XntufWFfe2lqfUNfe2lqfQ=="></div>

이고, <span class="math-inline" data-tex-b64="ag=="></span>번째 column을 기준으로 전개하면

<div class="math-display" data-tex-b64="XGRldChBKT1cc3VtX3tpPTF9XntufWFfe2lqfUNfe2lqfQ=="></div>

이다. 어느 row나 column을 선택해도 결과는 같으므로 0이 많은 곳을 선택하면 계산량을 줄일 수 있다.

앞의 행렬을 첫 번째 row로 전개하면

<div class="math-display" data-tex-b64="XGRldChBKT0xQ197MTF9KzJDX3sxMn0rM0NfezEzfQ=="></div>

이고

<div class="math-display" data-tex-b64="Q197MTF9PS0zLFxxcXVhZCBDX3sxMn09NixccXF1YWQgQ197MTN9PS0z"></div>

이므로

<div class="math-display" data-tex-b64="XGRldChBKT0tMysxMi05PTA="></div>

이다. 이 행렬의 row와 column은 linearly independent하지 않으므로 Determinant가 0이 된다.

## Determinant의 주요 성질

### Row를 교환하면 부호가 바뀐다

두 row를 교환한 행렬을 <span class="math-inline" data-tex-b64="Qg=="></span>라고 하면

<div class="math-display" data-tex-b64="XGRldChCKT0tXGRldChBKQ=="></div>

이다.

### 같은 Row가 존재하면 0이다

두 row가 같으면 row를 교환해도 행렬은 바뀌지 않지만 Determinant의 부호는 바뀌어야 한다. 따라서

<div class="math-display" data-tex-b64="XGRldChBKT0tXGRldChBKQ=="></div>

이고 <span class="math-inline" data-tex-b64="XGRldChBKT0w"></span>이다.

### 한 Row의 배수를 다른 Row에 더해도 값이 변하지 않는다

<div class="math-display" data-tex-b64="Ul9qXGxlZnRhcnJvdyBSX2orY1JfaQ=="></div>

는 Determinant를 바꾸지 않는다. Gaussian Elimination으로 삼각행렬을 만들 때 유용하다.

### 한 Row에 Scalar를 곱하면 Determinant도 같은 Scalar만큼 변한다

<span class="math-inline" data-tex-b64="aQ=="></span>번째 row를 <span class="math-inline" data-tex-b64="Yw=="></span>배하면 새 행렬의 Determinant는 <span class="math-inline" data-tex-b64="Y1xkZXQoQSk="></span>가 된다.

### Zero Row가 있으면 0이다

zero row가 존재하면 row들이 linearly dependent하므로 <span class="math-inline" data-tex-b64="XGRldChBKT0w"></span>이다.

### Triangular Matrix

Upper 또는 Lower Triangular Matrix의 Determinant는 대각성분의 곱이다.

<div class="math-display" data-tex-b64="XGRldChBKT1ccHJvZF97aT0xfV57bn1hX3tpaX0="></div>

예를 들어

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMCYwJjBcXAoyJjMmMCYwXFwKNCY1JjYmMFxcCjcmOCY5JjEwClxlbmR7Ym1hdHJpeH0="></div>

이면

<div class="math-display" data-tex-b64="XGRldChBKT0xXGNkb3QzXGNkb3Q2XGNkb3QxMD0xODA="></div>

이다.

### Transpose

<div class="math-display" data-tex-b64="XGRldChBXlQpPVxkZXQoQSk="></div>

이다.

### Matrix Product

<div class="math-display" data-tex-b64="XGRldChBQik9XGRldChBKVxkZXQoQik="></div>

이다. 따라서 scalar multiplication의 교환법칙에 의해 <span class="math-inline" data-tex-b64="XGRldChBQik9XGRldChCQSk="></span>이지만, 행렬 자체는 일반적으로 <span class="math-inline" data-tex-b64="QUJcbmVxIEJB"></span>이다.

## Determinant와 Invertibility

정사각행렬 <span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Un1ee25cdGltZXMgbn0="></span>에 대해 다음 조건들은 서로 동치이다.

- <span class="math-inline" data-tex-b64="QQ=="></span>가 invertible이다.
- <span class="math-inline" data-tex-b64="XGRldChBKVxuZXEw"></span>이다.
- <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT1u"></span>이다.
- <span class="math-inline" data-tex-b64="TihBKT1ce1xtYXRoYmZ7MH1cfQ=="></span>이다.
- <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></span>가 모든 <span class="math-inline" data-tex-b64="XG1hdGhiZntifQ=="></span>에 대해 유일한 해를 가진다.

## Cofactor Matrix와 Adjugate Matrix

각 Cofactor를 성분으로 가지는 행렬을 Cofactor Matrix라고 한다.

<div class="math-display" data-tex-b64="Qz0KXGJlZ2lue2JtYXRyaXh9CkNfezExfSZDX3sxMn0mXGNkb3RzJkNfezFufVxcCkNfezIxfSZDX3syMn0mXGNkb3RzJkNfezJufVxcClx2ZG90cyZcdmRvdHMmXGRkb3RzJlx2ZG90c1xcCkNfe24xfSZDX3tuMn0mXGNkb3RzJkNfe25ufQpcZW5ke2JtYXRyaXh9"></div>

Adjugate Matrix는 Cofactor Matrix의 Transpose이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXthZGp9KEEpPUNeVA=="></div>

Adjugate Matrix에는 다음 핵심 성질이 있다.

<div class="math-display" data-tex-b64="QVxvcGVyYXRvcm5hbWV7YWRqfShBKT1cZGV0KEEpSQ=="></div>

곱의 대각성분은 한 row에 대한 Laplace Expansion이므로 <span class="math-inline" data-tex-b64="XGRldChBKQ=="></span>가 된다. 비대각성분은 서로 다른 row를 결합한 전개이므로 동일한 row가 두 개 있는 Determinant와 같은 구조가 되어 0이 된다.

## Adjugate Matrix를 이용한 역행렬

<span class="math-inline" data-tex-b64="XGRldChBKVxuZXEw"></span>이면

<div class="math-display" data-tex-b64="QVxsZWZ0KFxmcmFjezF9e1xkZXQoQSl9XG9wZXJhdG9ybmFtZXthZGp9KEEpXHJpZ2h0KT1J"></div>

이므로

<div class="math-display" data-tex-b64="QV57LTF9PVxmcmFjezF9e1xkZXQoQSl9XG9wZXJhdG9ybmFtZXthZGp9KEEp"></div>

이다.

2×2 행렬에서는

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CmEmYlxcYyZkClxlbmR7Ym1hdHJpeH1eey0xfQo9ClxmcmFjezF9e2FkLWJjfQpcYmVnaW57Ym1hdHJpeH0KZCYtYlxcLWMmYQpcZW5ke2JtYXRyaXh9"></div>

가 된다. 단, <span class="math-inline" data-tex-b64="YWQtYmNcbmVxMA=="></span>이어야 한다.

## Cramer's Rule

다음 연립방정식을 생각한다.

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></div>

<span class="math-inline" data-tex-b64="QQ=="></span>는 invertible한 <span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> 행렬이고, <span class="math-inline" data-tex-b64="QV9p"></span>는 <span class="math-inline" data-tex-b64="QQ=="></span>의 <span class="math-inline" data-tex-b64="aQ=="></span>번째 column을 <span class="math-inline" data-tex-b64="XG1hdGhiZntifQ=="></span>로 교체한 행렬이라고 하자. 그러면

<div class="math-display" data-tex-b64="eF9pPVxmcmFje1xkZXQoQV9pKX17XGRldChBKX0="></div>

이다.

Cramer's Rule은 이론적으로 중요하지만, 큰 행렬에서는 여러 Determinant를 반복 계산해야 한다. 실제 대규모 계산에서는 Gaussian Elimination이나 LU Decomposition이 더 효율적이다.

## Cramer's Rule 예제

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjEmMlxcMyY0ClxlbmR7Ym1hdHJpeH0KXGJlZ2lue2JtYXRyaXh9eFxceVxlbmR7Ym1hdHJpeH0KPQpcYmVnaW57Ym1hdHJpeH01XFw2XGVuZHtibWF0cml4fQ=="></div>

먼저

<div class="math-display" data-tex-b64="XGRldChBKT0KXGJlZ2lue3ZtYXRyaXh9MSYyXFwzJjRcZW5ke3ZtYXRyaXh9Cj0tMg=="></div>

이다. 첫 번째 column을 우변으로 교체하면

<div class="math-display" data-tex-b64="QV8xPQpcYmVnaW57Ym1hdHJpeH01JjJcXDYmNFxlbmR7Ym1hdHJpeH0sClxxcXVhZCBcZGV0KEFfMSk9OA=="></div>

이므로

<div class="math-display" data-tex-b64="eD1cZnJhY3s4fXstMn09LTQ="></div>

이다. 두 번째 column을 교체하면

<div class="math-display" data-tex-b64="QV8yPQpcYmVnaW57Ym1hdHJpeH0xJjVcXDMmNlxlbmR7Ym1hdHJpeH0sClxxcXVhZCBcZGV0KEFfMik9LTk="></div>

이므로

<div class="math-display" data-tex-b64="eT1cZnJhY3stOX17LTJ9PVxmcmFjezl9ezJ9"></div>

이다.

## 정리

- Determinant는 정사각행렬의 가역성과 선형종속 여부를 판단한다.
- Laplace Expansion은 Minor와 Cofactor로 Determinant를 전개한다.
- <span class="math-inline" data-tex-b64="QVxvcGVyYXRvcm5hbWV7YWRqfShBKT1cZGV0KEEpSQ=="></span>이다.
- <span class="math-inline" data-tex-b64="QV57LTF9PVxvcGVyYXRvcm5hbWV7YWRqfShBKS9cZGV0KEEp"></span>이다.
- Cramer's Rule은 각 변수를 Determinant의 비로 표현한다.

## 확인 문제

### 1

다음 행렬의 Determinant를 구한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjImMSYwXFwzJjQmNVxcMCYyJjEKXGVuZHtibWF0cml4fQ=="></div>

### 2

다음 연립방정식을 Cramer's Rule로 푼다.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjImMVxcMSYzClxlbmR7Ym1hdHJpeH0KXGJlZ2lue2JtYXRyaXh9eFxceVxlbmR7Ym1hdHJpeH0KPQpcYmVnaW57Ym1hdHJpeH01XFw1XGVuZHtibWF0cml4fQ=="></div>

## 풀이

### 1번

첫 번째 row로 Laplace Expansion한다.

<div class="math-display" data-tex-b64="XGRldChBKQo9MgpcYmVnaW57dm1hdHJpeH00JjVcXDImMVxlbmR7dm1hdHJpeH0KLQpcYmVnaW57dm1hdHJpeH0zJjVcXDAmMVxlbmR7dm1hdHJpeH0="></div>

<div class="math-display" data-tex-b64="PTIoNC0xMCktKDMtMCk9LTE1"></div>

이다.

### 2번

<div class="math-display" data-tex-b64="XGRldChBKT0yXGNkb3QzLTFcY2RvdDE9NQ=="></div>

이고

<div class="math-display" data-tex-b64="QV8xPVxiZWdpbntibWF0cml4fTUmMVxcNSYzXGVuZHtibWF0cml4fSwKXHFxdWFkIFxkZXQoQV8xKT0xMA=="></div>

이므로 <span class="math-inline" data-tex-b64="eD0y"></span>이다. 또한

<div class="math-display" data-tex-b64="QV8yPVxiZWdpbntibWF0cml4fTImNVxcMSY1XGVuZHtibWF0cml4fSwKXHFxdWFkIFxkZXQoQV8yKT01"></div>

이므로 <span class="math-inline" data-tex-b64="eT0x"></span>이다.
