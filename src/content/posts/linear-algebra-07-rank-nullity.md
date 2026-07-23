---
title: "7. Rank, Nullity와 기본 부분공간"
description: "Row·Column·Null·Left Null Space를 구분하고, pivot과 free variable을 통해 Rank-Nullity Theorem을 이해한다."
date: "2025-07-20"
category: "선형대수학"
tags: ["linear-algebra", "rank", "nullity", "null-space", "fundamental-subspaces"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

행렬은 벡터를 다른 벡터로 보내는 Linear Map이다. 이 과정에서 어떤 방향은 출력 공간에 남고, 어떤 방향은 zero vector로 사라진다. Rank는 행렬이 유지하는 독립적인 출력 방향의 수이고, Nullity는 행렬이 잃어버리는 독립적인 입력 방향의 수이다.

<span class="math-inline" data-tex-b64="bVx0aW1lcyBu"></span> 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>에는 다음 네 가지 기본 부분공간이 존재한다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEpLFxxcXVhZApcb3BlcmF0b3JuYW1le0NvbH0oQSksXHFxdWFkCk4oQSksXHFxdWFkCk4oQV5UKQ=="></div>

각각 Row Space, Column Space, Null Space, Left Null Space라고 한다.

## 네 가지 기본 부분공간

### Row Space

<span class="math-inline" data-tex-b64="QQ=="></span>의 row vector들이 Span하는 공간이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEpPVxvcGVyYXRvcm5hbWV7Q29sfShBXlQp"></div>

Row Space는 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV5u"></span>의 Subspace이다.

### Column Space

<span class="math-inline" data-tex-b64="QQ=="></span>의 column vector들이 Span하는 공간이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEpPVx7QVxtYXRoYmZ7eH1cbWlkIFxtYXRoYmZ7eH1caW5cbWF0aGJie1J9Xm5cfQ=="></div>

Column Space는 행렬이 만들 수 있는 모든 출력의 집합이며 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV5t"></span>의 Subspace이다.

### Null Space

<div class="math-display" data-tex-b64="TihBKT1ce1xtYXRoYmZ7eH1caW5cbWF0aGJie1J9Xm5cbWlkIEFcbWF0aGJme3h9PVxtYXRoYmZ7MH1cfQ=="></div>

Null Space는 행렬에 의해 zero vector로 보내지는 입력 방향의 집합이다.

### Left Null Space

<div class="math-display" data-tex-b64="TihBXlQpPVx7XG1hdGhiZnt5fVxpblxtYXRoYmJ7Un1ebVxtaWQgQV5UXG1hdGhiZnt5fT1cbWF0aGJmezB9XH0="></div>

Left Null Space의 벡터는 Column Space의 모든 벡터와 orthogonal하다.

## Null Space가 Subspace인 이유

먼저 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7MH09XG1hdGhiZnswfQ=="></span>이므로 zero vector가 <span class="math-inline" data-tex-b64="TihBKQ=="></span>에 속한다.

또한 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV8xLFxtYXRoYmZ7eH1fMlxpbiBOKEEp"></span>이면

<div class="math-display" data-tex-b64="QShcbWF0aGJme3h9XzErXG1hdGhiZnt4fV8yKQo9QVxtYXRoYmZ7eH1fMStBXG1hdGhiZnt4fV8yCj1cbWF0aGJmezB9"></div>

이다. Scalar <span class="math-inline" data-tex-b64="Yw=="></span>에 대해서도

<div class="math-display" data-tex-b64="QShjXG1hdGhiZnt4fV8xKT1jQVxtYXRoYmZ7eH1fMT1cbWF0aGJmezB9"></div>

이다. 따라서 Null Space는 vector addition과 scalar multiplication에 대해 닫혀 있는 Subspace이다.

## Rank

Rank는 Row Space 또는 Column Space의 Dimension이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKQo9ClxkaW1cb3BlcmF0b3JuYW1le1Jvd30oQSkKPQpcZGltXG9wZXJhdG9ybmFtZXtDb2x9KEEp"></div>

행렬을 Row Echelon Form으로 바꾸면 pivot의 개수가 Rank가 된다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT1cdGV4dHtwaXZvdOydmCDqsJzsiJh9"></div>

Row Space의 Basis는 Row Echelon Form의 0이 아닌 행들로 구할 수 있다.

Column Space의 Basis를 구할 때는 주의해야 한다. Reduced Matrix의 pivot column이 아니라 **원래 행렬에서 pivot position에 대응하는 column**을 선택해야 한다. Row operation은 column 사이의 선형관계는 유지하지만 Column Space 자체는 바꿀 수 있기 때문이다.

## Nullity

Nullity는 Null Space의 Dimension이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKT1cZGltIE4oQSk="></div>

Reduced Row Echelon Form에서 free variable 하나는 Null Space의 독립적인 방향 하나를 만든다. 따라서

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKT1cdGV4dHtmcmVlIHZhcmlhYmxl7J2YIOqwnOyImH0="></div>

이다.

## Rank-Nullity Theorem

<span class="math-inline" data-tex-b64="QQ=="></span>가 <span class="math-inline" data-tex-b64="bVx0aW1lcyBu"></span> 행렬이면 다음 관계가 성립한다.

<div class="math-display" data-tex-b64="bj1cb3BlcmF0b3JuYW1le3Jhbmt9KEEpK1xvcGVyYXRvcm5hbWV7bnVsbGl0eX0oQSk="></div>

여기서 <span class="math-inline" data-tex-b64="bg=="></span>은 행렬의 column 수, 즉 입력 공간의 Dimension이다.

각 variable은 pivot variable 또는 free variable 중 하나이다. 따라서

<div class="math-display" data-tex-b64="XHRleHR77KCE7LK0IHZhcmlhYmxlIOyImH0KPQpcdGV4dHtwaXZvdCB2YXJpYWJsZSDsiJh9CisKXHRleHR7ZnJlZSB2YXJpYWJsZSDsiJh9"></div>

이며, 이것이 Rank-Nullity Theorem의 계산적 의미이다.

기하학적으로는 입력 공간의 모든 방향이 출력에 남는 방향과 zero vector로 사라지는 방향으로 나뉜다는 뜻이다.

## 예제

다음 행렬의 Reduced Row Echelon Form이 주어졌다고 하자.

<div class="math-display" data-tex-b64="Uj0KXGJlZ2lue2JtYXRyaXh9CjEmMCYxJjAmLTFcXAowJjEmMiYwJjNcXAowJjAmMCYxJjRcXAowJjAmMCYwJjAKXGVuZHtibWF0cml4fQ=="></div>

pivot은 1열, 2열, 4열에 존재하므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT0z"></div>

이다. free variable은 <span class="math-inline" data-tex-b64="eF8zLHhfNQ=="></span>이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKT0y"></div>

이다. 실제로

<div class="math-display" data-tex-b64="NT0zKzI="></div>

가 성립한다.

Null Space의 Basis를 구하기 위해 <span class="math-inline" data-tex-b64="eF8zPXM="></span>, <span class="math-inline" data-tex-b64="eF81PXQ="></span>로 둔다. 연립방정식을 정리하면

<div class="math-display" data-tex-b64="eF8xPS1zK3QsXHFxdWFkCnhfMj0tMnMtM3QsXHFxdWFkCnhfND0tNHQ="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fQo9cwpcYmVnaW57Ym1hdHJpeH0KLTFcXC0yXFwxXFwwXFwwClxlbmR7Ym1hdHJpeH0KK3QKXGJlZ2lue2JtYXRyaXh9CjFcXC0zXFwwXFwtNFxcMQpcZW5ke2JtYXRyaXh9"></div>

이고, Null Space의 Basis는

<div class="math-display" data-tex-b64="XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0tMVxcLTJcXDFcXDBcXDBcZW5ke2JtYXRyaXh9LApcYmVnaW57Ym1hdHJpeH0xXFwtM1xcMFxcLTRcXDFcZW5ke2JtYXRyaXh9ClxyaWdodFx9"></div>

이다.

## Rank와 Invertibility

정사각행렬 <span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Un1ee25cdGltZXMgbn0="></span>에 대해 다음 조건들은 서로 동치이다.

- <span class="math-inline" data-tex-b64="QQ=="></span>가 invertible이다.
- <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT1u"></span>이다.
- <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKT0w"></span>이다.
- <span class="math-inline" data-tex-b64="TihBKT1ce1xtYXRoYmZ7MH1cfQ=="></span>이다.
- 모든 column에 pivot이 존재한다.

즉, 정사각행렬이 입력 방향을 하나도 잃지 않을 때 역행렬이 존재한다.

## rank(AᵀA)=rank(A)

실수행렬 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해 다음 성질이 성립한다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBXlRBKT1cb3BlcmF0b3JuYW1le3Jhbmt9KEEp"></div>

두 행렬의 Null Space가 같음을 보이면 된다.

먼저 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></span>이면

<div class="math-display" data-tex-b64="QV5UQVxtYXRoYmZ7eH09QV5UKEFcbWF0aGJme3h9KT1cbWF0aGJmezB9"></div>

이므로 <span class="math-inline" data-tex-b64="TihBKVxzdWJzZXRlcSBOKEFeVEEp"></span>이다.

반대로 <span class="math-inline" data-tex-b64="QV5UQVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></span>이면 양쪽에 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV5U"></span>를 곱한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5UQV5UQVxtYXRoYmZ7eH0KPShBXG1hdGhiZnt4fSleVChBXG1hdGhiZnt4fSkKPVxsVmVydCBBXG1hdGhiZnt4fVxyVmVydF4yCj0w"></div>

Norm의 제곱이 0이므로 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></span>이다. 따라서

<div class="math-display" data-tex-b64="TihBXlRBKT1OKEEp"></div>

이다. 두 행렬은 column 수가 같고 Nullity도 같으므로 Rank 역시 같다.

## 정리

- Rank는 행렬이 유지하는 독립적인 출력 방향의 수이다.
- Nullity는 행렬이 zero vector로 보내는 독립적인 입력 방향의 수이다.
- Rank는 pivot 수이고, Nullity는 free variable 수이다.
- <span class="math-inline" data-tex-b64="bj1cb3BlcmF0b3JuYW1le3Jhbmt9KEEpK1xvcGVyYXRvcm5hbWV7bnVsbGl0eX0oQSk="></span>이다.
- Row Space와 Column Space의 Dimension은 같다.
- <span class="math-inline" data-tex-b64="TihBKQ=="></span>는 Row Space와, <span class="math-inline" data-tex-b64="TihBXlQp"></span>는 Column Space와 orthogonal한 관계를 가진다.

## 확인 문제

### 1

<span class="math-inline" data-tex-b64="QQ=="></span>가 <span class="math-inline" data-tex-b64="M1x0aW1lczU="></span> 행렬이고 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT0y"></span>일 때 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKQ=="></span>를 구한다.

### 2

<span class="math-inline" data-tex-b64="QQ=="></span>가 <span class="math-inline" data-tex-b64="NFx0aW1lczY="></span> 행렬이고 Null Space의 Basis가 세 개의 vector로 이루어져 있을 때 Rank를 구한다.

## 풀이

### 1번

Rank-Nullity Theorem에 따라

<div class="math-display" data-tex-b64="NT0yK1xvcGVyYXRvcm5hbWV7bnVsbGl0eX0oQSk="></div>

이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtudWxsaXR5fShBKT0z"></div>

이다.

### 2번

Null Space의 Basis vector가 세 개이므로 Nullity는 3이다. column 수가 6이므로

<div class="math-display" data-tex-b64="Nj1cb3BlcmF0b3JuYW1le3Jhbmt9KEEpKzM="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT0z"></div>

이다.

---

**Linear Algebra 정리 시리즈** · 7/19 · [← 이전: LU Decomposition과 연립방정식 풀이](/posts/linear-algebra-06-lu-decomposition/) · [다음: Determinant, Adjugate Matrix와 Cramer's Rule →](/posts/linear-algebra-08-determinant-adjugate-cramer/)
