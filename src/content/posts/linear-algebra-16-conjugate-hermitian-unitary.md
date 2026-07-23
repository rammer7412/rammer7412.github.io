---
title: "16. Complex Conjugate, Hermitian Matrix와 Unitary Matrix"
description: "복소수 공간에서 Conjugate Transpose가 필요한 이유와 Hermitian·Unitary Matrix의 핵심 성질을 정리한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "complex-conjugate", "hermitian", "unitary", "symmetric-matrix"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

실수 벡터 공간에서는 Transpose와 Dot Product를 사용한다. 복소수 공간에서 단순히 Transpose만 사용하면 벡터의 길이 제곱이 음수나 복소수가 될 수 있다. Complex Conjugate를 함께 사용해야 Inner Product가 항상 nonnegative real number가 된다.

## Complex Conjugate

복소수

<div class="math-display" data-tex-b64="ej1hK2Jp"></div>

의 Complex Conjugate는

<div class="math-display" data-tex-b64="XG92ZXJsaW5le3p9PWEtYmk="></div>

이다.

<div class="math-display" data-tex-b64="elxvdmVybGluZXt6fT1hXjIrYl4y"></div>

이므로

<div class="math-display" data-tex-b64="fHp8PVxzcXJ0e3pcb3ZlcmxpbmV7en19"></div>

이다.

Conjugate의 주요 성질은 다음과 같다.

<div class="math-display" data-tex-b64="XG92ZXJsaW5le3ord309XG92ZXJsaW5le3p9K1xvdmVybGluZXt3fSxccXF1YWQKXG92ZXJsaW5le3p3fT1cb3ZlcmxpbmV7en1cLFxvdmVybGluZXt3fSxccXF1YWQKXG92ZXJsaW5le1xvdmVybGluZXt6fX09eg=="></div>

## Conjugate Transpose

복소수 벡터

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT1cYmVnaW57Ym1hdHJpeH14XzFcXFx2ZG90c1xceF9uXGVuZHtibWF0cml4fQ=="></div>

의 Conjugate Transpose는

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5ICj1cb3ZlcmxpbmV7XG1hdGhiZnt4fX1ee1wsVH0KPVxiZWdpbntibWF0cml4fVxvdmVybGluZXt4XzF9JlxjZG90cyZcb3ZlcmxpbmV7eF9ufVxlbmR7Ym1hdHJpeH0="></div>

이다. <span class="math-inline" data-tex-b64="SA=="></span>는 Hermitian Transpose를 의미한다.

복소수 Inner Product는

<div class="math-display" data-tex-b64="XGxhbmdsZVxtYXRoYmZ7eH0sXG1hdGhiZnt5fVxyYW5nbGUKPVxtYXRoYmZ7eH1eSFxtYXRoYmZ7eX0="></div>

로 정의한다.

특히

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5IXG1hdGhiZnt4fQo9fHhfMXxeMitcY2RvdHMrfHhfbnxeMlxnZTA="></div>

이므로

<div class="math-display" data-tex-b64="XGxWZXJ0XG1hdGhiZnt4fVxyVmVydD1cc3FydHtcbWF0aGJme3h9XkhcbWF0aGJme3h9fQ=="></div>

이다.

## Matrix의 Conjugate Transpose

복소수 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해

<div class="math-display" data-tex-b64="QV5IPVxvdmVybGluZXtBfV57XCxUfQ=="></div>

이다.

예를 들어

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xLTJpJi0xXFwyJjEraVxlbmR7Ym1hdHJpeH0="></div>

이면

<div class="math-display" data-tex-b64="QV5IPVxiZWdpbntibWF0cml4fTErMmkmMlxcLTEmMS1pXGVuZHtibWF0cml4fQ=="></div>

이다.

주요 성질은

<div class="math-display" data-tex-b64="KEFCKV5IPUJeSEFeSCxccXF1YWQKKEFeSCleSD1BLFxxcXVhZAooQV57LTF9KV5IPShBXkgpXnstMX0="></div>

이다.

## Real Matrix, Symmetric Matrix, Hermitian Matrix

Real Matrix는 모든 entry가 실수인 행렬이다.

Real Symmetric Matrix는

<div class="math-display" data-tex-b64="QV5UPUE="></div>

를 만족하는 실수 정사각행렬이다.

Hermitian Matrix는 복소수 정사각행렬 중

<div class="math-display" data-tex-b64="QV5IPUE="></div>

를 만족하는 행렬이다.

모든 Real Symmetric Matrix는 Hermitian Matrix이다. 그러나 Hermitian Matrix는 복소수 entry를 가질 수 있다.

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJmlcXC1pJjNcZW5ke2JtYXRyaXh9"></div>

는 <span class="math-inline" data-tex-b64="QV5IPUE="></span>이므로 Hermitian이지만 Real Matrix는 아니다.

Hermitian Matrix의 diagonal entry는 반드시 실수이다. <span class="math-inline" data-tex-b64="YV97aWl9PVxvdmVybGluZXthX3tpaX19"></span>이기 때문이다.

## Hermitian Matrix의 Eigenvalue는 실수이다

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0sXHFxdWFkIFxtYXRoYmZ7eH1cbmVxXG1hdGhiZnswfQ=="></div>

라고 하자. 왼쪽에 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV5I"></span>를 곱하면

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5IQVxtYXRoYmZ7eH0KPVxsYW1iZGFcbWF0aGJme3h9XkhcbWF0aGJme3h9"></div>

이므로

<div class="math-display" data-tex-b64="XGxhbWJkYQo9XGZyYWN7XG1hdGhiZnt4fV5IQVxtYXRoYmZ7eH19CntcbWF0aGJme3h9XkhcbWF0aGJme3h9fQ=="></div>

이다.

<span class="math-inline" data-tex-b64="QV5IPUE="></span>이므로

<div class="math-display" data-tex-b64="XG92ZXJsaW5le1xtYXRoYmZ7eH1eSEFcbWF0aGJme3h9fQo9KFxtYXRoYmZ7eH1eSEFcbWF0aGJme3h9KV5ICj1cbWF0aGJme3h9XkhBXkhcbWF0aGJme3h9Cj1cbWF0aGJme3h9XkhBXG1hdGhiZnt4fQ=="></div>

이다. 자기 Conjugate와 같은 복소수는 실수이므로 <span class="math-inline" data-tex-b64="XGxhbWJkYVxpblxtYXRoYmJ7Un0="></span>이다.

## 서로 다른 Eigenvalue의 Eigenvector는 Orthogonal하다

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYV8xXG1hdGhiZnt4fSxccXF1YWQKQVxtYXRoYmZ7eX09XGxhbWJkYV8yXG1hdGhiZnt5fQ=="></div>

이고 <span class="math-inline" data-tex-b64="XGxhbWJkYV8xXG5lcVxsYW1iZGFfMg=="></span>라고 하자.

<div class="math-display" data-tex-b64="XGxhbWJkYV8xXG1hdGhiZnt4fV5IXG1hdGhiZnt5fQo9KEFcbWF0aGJme3h9KV5IXG1hdGhiZnt5fQo9XG1hdGhiZnt4fV5IQV5IXG1hdGhiZnt5fQo9XG1hdGhiZnt4fV5IQVxtYXRoYmZ7eX0KPVxsYW1iZGFfMlxtYXRoYmZ7eH1eSFxtYXRoYmZ7eX0="></div>

이므로

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5IXG1hdGhiZnt5fT0w"></div>

이다.

## Unitary Matrix

복소수 공간에서 Orthogonal Matrix에 대응하는 행렬을 Unitary Matrix라고 한다.

<div class="math-display" data-tex-b64="VV5IVT1J"></div>

이면

<div class="math-display" data-tex-b64="VV57LTF9PVVeSA=="></div>

이다.

Unitary Matrix는 Inner Product와 Norm을 보존한다.

<div class="math-display" data-tex-b64="KFVcbWF0aGJme3h9KV5IKFVcbWF0aGJme3l9KQo9XG1hdGhiZnt4fV5IVV5IVVxtYXRoYmZ7eX0KPVxtYXRoYmZ7eH1eSFxtYXRoYmZ7eX0="></div>

<div class="math-display" data-tex-b64="XGxWZXJ0IFVcbWF0aGJme3h9XHJWZXJ0PVxsVmVydFxtYXRoYmZ7eH1cclZlcnQ="></div>

Real Orthogonal Matrix는 Unitary Matrix의 특수한 경우이다.

## Hermitian Spectral Theorem

Hermitian Matrix는 Unitary Diagonalization이 가능하다.

<div class="math-display" data-tex-b64="QT1VXExhbWJkYSBVXkg="></div>

여기서 <span class="math-inline" data-tex-b64="VQ=="></span>는 Unitary Matrix이고 <span class="math-inline" data-tex-b64="XExhbWJkYQ=="></span>의 diagonal entry는 모두 실수이다.

## 정리

- 복소수 공간의 Inner Product에는 Conjugate Transpose가 필요하다.
- <span class="math-inline" data-tex-b64="QV5IPVxvdmVybGluZXtBfV57XCxUfQ=="></span>이다.
- Real Symmetric Matrix는 Hermitian Matrix의 특수한 경우이다.
- Hermitian Matrix의 Eigenvalue는 모두 실수이다.
- 서로 다른 Eigenvalue의 Eigenvector는 orthogonal하다.
- Unitary Matrix는 <span class="math-inline" data-tex-b64="VV5IVT1J"></span>, <span class="math-inline" data-tex-b64="VV57LTF9PVVeSA=="></span>를 만족한다.

## 확인 문제

다음 행렬이 Hermitian인지 확인하고 Eigenvalue가 실수임을 계산으로 확인한다.

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJmlcXC1pJjJcZW5ke2JtYXRyaXh9"></div>

## 풀이

<div class="math-display" data-tex-b64="QV5IPVxiZWdpbntibWF0cml4fTImaVxcLWkmMlxlbmR7Ym1hdHJpeH09QQ=="></div>

이므로 Hermitian이다.

Characteristic Polynomial은

<div class="math-display" data-tex-b64="XGRldChBLVxsYW1iZGEgSSkKPSgyLVxsYW1iZGEpXjItMQ=="></div>

이므로 Eigenvalue는

<div class="math-display" data-tex-b64="XGxhbWJkYT0xLDM="></div>

으로 모두 실수이다.

---

**Linear Algebra 정리 시리즈** · 16/19 · [← 이전: QR Factorization과 Orthonormal Basis](/posts/linear-algebra-15-qr-factorization/) · [다음: Spectral Decomposition과 행렬의 구조 →](/posts/linear-algebra-17-spectral-decomposition/)
