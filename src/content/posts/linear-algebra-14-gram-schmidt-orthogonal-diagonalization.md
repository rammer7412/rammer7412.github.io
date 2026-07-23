---
title: "14. Gram-Schmidt Process와 Orthogonal Diagonalization"
description: "일반 Basis를 Orthonormal Basis로 바꾸는 Gram-Schmidt Process와 Symmetric Matrix의 Orthogonal Diagonalization을 정리한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "gram-schmidt", "orthogonal-diagonalization", "spectral-theorem"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

Linearly Independent한 Basis는 좌표계를 만들 수 있지만, 벡터들이 서로 orthogonal하지 않으면 Projection과 coordinate 계산이 복잡하다. Gram-Schmidt Process는 같은 Span을 유지하면서 Orthogonal Basis 또는 Orthonormal Basis를 만드는 절차이다.

## Gram-Schmidt Process

Linearly Independent한 벡터

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xLFxtYXRoYmZ7dn1fMixcbGRvdHMsXG1hdGhiZnt2fV9r"></div>

가 주어졌다고 하자.

첫 번째 벡터는 그대로 둔다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8xPVxtYXRoYmZ7dn1fMQ=="></div>

두 번째 벡터에서는 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV8x"></span> 방향 성분을 제거한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yCj1cbWF0aGJme3Z9XzIKLVxmcmFje1xtYXRoYmZ7dX1fMV5UXG1hdGhiZnt2fV8yfQp7XG1hdGhiZnt1fV8xXlRcbWF0aGJme3V9XzF9XG1hdGhiZnt1fV8x"></div>

세 번째 벡터에서는 앞의 두 방향 성분을 제거한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8zCj1cbWF0aGJme3Z9XzMKLVxmcmFje1xtYXRoYmZ7dX1fMV5UXG1hdGhiZnt2fV8zfXtcbWF0aGJme3V9XzFeVFxtYXRoYmZ7dX1fMX1cbWF0aGJme3V9XzEKLVxmcmFje1xtYXRoYmZ7dX1fMl5UXG1hdGhiZnt2fV8zfXtcbWF0aGJme3V9XzJeVFxtYXRoYmZ7dX1fMn1cbWF0aGJme3V9XzI="></div>

일반적으로

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV9qCj1cbWF0aGJme3Z9X2oKLVxzdW1fe2k9MX1ee2otMX0KXGZyYWN7XG1hdGhiZnt1fV9pXlRcbWF0aGJme3Z9X2p9CntcbWF0aGJme3V9X2leVFxtYXRoYmZ7dX1faX1cbWF0aGJme3V9X2k="></div>

이다.

각 단계에서 이전 방향의 Projection을 제거하므로 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV9q"></span>는 이전 벡터들과 orthogonal하다.

## Span이 유지되는 이유

각 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV9q"></span>는 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2o="></span>의 Linear Combination이다. 반대로 식을 정리하면 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV9q"></span>도 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV8xLFxsZG90cyxcbWF0aGJme3V9X2o="></span>의 Linear Combination이다.

따라서 모든 단계에서

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtzcGFufVx7XG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2pcfQo9ClxvcGVyYXRvcm5hbWV7c3Bhbn1ce1xtYXRoYmZ7dX1fMSxcbGRvdHMsXG1hdGhiZnt1fV9qXH0="></div>

이다.

## Orthonormal Basis 만들기

각 Orthogonal Vector를 정규화한다.

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV9pPVxmcmFje1xtYXRoYmZ7dX1faX17XGxWZXJ0XG1hdGhiZnt1fV9pXHJWZXJ0fQ=="></div>

그러면 <span class="math-inline" data-tex-b64="XHtcbWF0aGJme3F9XzEsXGxkb3RzLFxtYXRoYmZ7cX1fa1x9"></span>는 같은 Subspace의 Orthonormal Basis이다.

## 예제

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xPVxiZWdpbntibWF0cml4fTFcXDFcZW5ke2JtYXRyaXh9LFxxcXVhZApcbWF0aGJme3Z9XzI9XGJlZ2lue2JtYXRyaXh9MVxcMFxlbmR7Ym1hdHJpeH0="></div>

이다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8xPVxiZWdpbntibWF0cml4fTFcXDFcZW5ke2JtYXRyaXh9"></div>

이고

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yCj1cYmVnaW57Ym1hdHJpeH0xXFwwXGVuZHtibWF0cml4fQotXGZyYWN7MX17Mn1cYmVnaW57Ym1hdHJpeH0xXFwxXGVuZHtibWF0cml4fQo9XGZyYWMxMlxiZWdpbntibWF0cml4fTFcXC0xXGVuZHtibWF0cml4fQ=="></div>

이다. Scalar Multiple을 바꾸어 <span class="math-inline" data-tex-b64="KDEsLTEpXlQ="></span>를 사용해도 된다.

정규화하면

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxlbmR7Ym1hdHJpeH0sXHFxdWFkClxtYXRoYmZ7cX1fMj1cZnJhYzF7XHNxcnQyfVxiZWdpbntibWF0cml4fTFcXC0xXGVuZHtibWF0cml4fQ=="></div>

이다.

## Classical과 Modified Gram-Schmidt

수학적으로 Classical Gram-Schmidt와 Modified Gram-Schmidt는 같은 결과를 만든다. 그러나 floating-point 계산에서는 이미 제거한 성분이 round-off error 때문에 다시 나타날 수 있다.

Modified Gram-Schmidt는 Projection을 한 번에 합산하지 않고, 벡터를 단계별로 갱신한다. 수치적으로 더 안정적이며 QR Factorization 구현에 자주 사용된다.

## Orthogonal Diagonalization

일반 Diagonalization은

<div class="math-display" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></div>

이다. Eigenvector들을 Orthonormal Basis로 선택할 수 있다면 <span class="math-inline" data-tex-b64="Uw=="></span>는 Orthogonal Matrix가 된다. 이를 <span class="math-inline" data-tex-b64="UQ=="></span>라고 쓰면

<div class="math-display" data-tex-b64="UV57LTF9PVFeVA=="></div>

이므로

<div class="math-display" data-tex-b64="QT1RXExhbWJkYSBRXlQ="></div>

이다. 이를 Orthogonal Diagonalization이라고 한다.

## Spectral Theorem

실수 정사각행렬에 대해 다음 두 조건은 서로 동치이다.

<div class="math-display" data-tex-b64="QV5UPUEKXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQKQVx0ZXh0eyBpcyBvcnRob2dvbmFsbHkgZGlhZ29uYWxpemFibGV9"></div>

즉, Real Symmetric Matrix는 항상 Orthonormal Eigenbasis를 가진다.

## 서로 다른 Eigenvalue의 Eigenvector가 Orthogonal한 이유

<span class="math-inline" data-tex-b64="QV5UPUE="></span>이고

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYV8xXG1hdGhiZnt4fSxccXF1YWQKQVxtYXRoYmZ7eX09XGxhbWJkYV8yXG1hdGhiZnt5fQ=="></div>

라고 하자.

<div class="math-display" data-tex-b64="XGxhbWJkYV8xXG1hdGhiZnt4fV5UXG1hdGhiZnt5fQo9KEFcbWF0aGJme3h9KV5UXG1hdGhiZnt5fQo9XG1hdGhiZnt4fV5UQV5UXG1hdGhiZnt5fQo9XG1hdGhiZnt4fV5UQVxtYXRoYmZ7eX0KPVxsYW1iZGFfMlxtYXRoYmZ7eH1eVFxtYXRoYmZ7eX0="></div>

이므로

<div class="math-display" data-tex-b64="KFxsYW1iZGFfMS1cbGFtYmRhXzIpXG1hdGhiZnt4fV5UXG1hdGhiZnt5fT0w"></div>

이다. <span class="math-inline" data-tex-b64="XGxhbWJkYV8xXG5lcVxsYW1iZGFfMg=="></span>이면 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV5UXG1hdGhiZnt5fT0w"></span>이다.

중복된 Eigenvalue의 Eigenspace 안에서는 임의의 Basis가 자동으로 orthogonal하지 않을 수 있다. 이때 Gram-Schmidt Process를 적용해 Orthonormal Eigenbasis를 만든다.

## Orthogonal Diagonalization 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJjFcXDEmMlxlbmR7Ym1hdHJpeH0="></div>

의 Eigenvalue는 <span class="math-inline" data-tex-b64="Mywx"></span>이고 대응하는 Orthonormal Eigenvector는

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxlbmR7Ym1hdHJpeH0sXHFxdWFkClxtYXRoYmZ7cX1fMj1cZnJhYzF7XHNxcnQyfVxiZWdpbntibWF0cml4fTFcXC0xXGVuZHtibWF0cml4fQ=="></div>

이다.

<div class="math-display" data-tex-b64="UT1cZnJhYzF7XHNxcnQyfVxiZWdpbntibWF0cml4fTEmMVxcMSYtMVxlbmR7Ym1hdHJpeH0sXHFxdWFkClxMYW1iZGE9XGJlZ2lue2JtYXRyaXh9MyYwXFwwJjFcZW5ke2JtYXRyaXh9"></div>

이면

<div class="math-display" data-tex-b64="QT1RXExhbWJkYSBRXlQ="></div>

이다.

## 정리

- Gram-Schmidt Process는 같은 Span을 유지하면서 Orthogonal Basis를 만든다.
- 정규화하면 Orthonormal Basis를 얻는다.
- Modified Gram-Schmidt가 수치적으로 더 안정적이다.
- Real Symmetric Matrix는 Orthogonally Diagonalizable하다.
- 서로 다른 Eigenvalue의 Eigenvector는 orthogonal하다.
- 중복 Eigenvalue의 Eigenspace에서는 Gram-Schmidt로 Orthonormal Basis를 만들 수 있다.

## 확인 문제

다음 벡터들에 Gram-Schmidt Process를 적용해 Orthonormal Basis를 구한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xPVxiZWdpbntibWF0cml4fTFcXDFcXDBcZW5ke2JtYXRyaXh9LFxxcXVhZApcbWF0aGJme3Z9XzI9XGJlZ2lue2JtYXRyaXh9MVxcMFxcMVxlbmR7Ym1hdHJpeH0="></div>

## 풀이

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8xPVxiZWdpbntibWF0cml4fTFcXDFcXDBcZW5ke2JtYXRyaXh9"></div>

이고

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yCj1cYmVnaW57Ym1hdHJpeH0xXFwwXFwxXGVuZHtibWF0cml4fQotXGZyYWMxMlxiZWdpbntibWF0cml4fTFcXDFcXDBcZW5ke2JtYXRyaXh9Cj1cZnJhYzEyXGJlZ2lue2JtYXRyaXh9MVxcLTFcXDJcZW5ke2JtYXRyaXh9"></div>

이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxcMFxlbmR7Ym1hdHJpeH0sXHFxdWFkClxtYXRoYmZ7cX1fMj1cZnJhYzF7XHNxcnQ2fVxiZWdpbntibWF0cml4fTFcXC0xXFwyXGVuZHtibWF0cml4fQ=="></div>

이다.

---

**Linear Algebra 정리 시리즈** · 14/19 · [← 이전: Orthogonal Complement와 Projection](/posts/linear-algebra-13-orthogonal-complement-projection/) · [다음: QR Factorization과 Orthonormal Basis →](/posts/linear-algebra-15-qr-factorization/)
