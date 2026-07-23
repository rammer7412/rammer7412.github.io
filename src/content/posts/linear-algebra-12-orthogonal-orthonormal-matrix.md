---
title: "12. Orthogonal Set, Orthonormal Basis와 Orthogonal Matrix"
description: "Orthogonality의 정의에서 Orthogonal Set의 독립성, Orthonormal Basis의 좌표 공식과 Orthogonal Matrix의 성질까지 정리한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "orthogonality", "orthonormal-basis", "orthogonal-matrix"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

두 벡터의 Inner Product가 0이면 두 벡터는 orthogonal하다고 한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV5UXG1hdGhiZnt2fT1cbWF0aGJme3V9XGNkb3RcbWF0aGJme3Z9PTA="></div>

2차원과 3차원에서는 수직인 방향으로 해석할 수 있지만, 정의 자체는 모든 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV5u"></span>에서 성립한다.

## Orthogonal Set

nonzero vector들로 이루어진 집합

<div class="math-display" data-tex-b64="Uz1ce1xtYXRoYmZ7dn1fMSxcbGRvdHMsXG1hdGhiZnt2fV9rXH0="></div>

이 모든 <span class="math-inline" data-tex-b64="aVxuZXEgag=="></span>에 대해

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV9pXlRcbWF0aGJme3Z9X2o9MA=="></div>

을 만족하면 Orthogonal Set이라고 한다.

## Orthogonal Set은 Linearly Independent하다

<div class="math-display" data-tex-b64="Y18xXG1hdGhiZnt2fV8xK1xjZG90cytjX2tcbWF0aGJme3Z9X2s9XG1hdGhiZnswfQ=="></div>

이라고 하자. 양변에 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV9pXlQ="></span>를 곱하면

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV9pXlQKXGxlZnQoY18xXG1hdGhiZnt2fV8xK1xjZG90cytjX2tcbWF0aGJme3Z9X2tccmlnaHQpPTA="></div>

이다. Orthogonality에 의해 다른 항은 모두 0이므로

<div class="math-display" data-tex-b64="Y19pXG1hdGhiZnt2fV9pXlRcbWF0aGJme3Z9X2kKPWNfaVxsVmVydFxtYXRoYmZ7dn1faVxyVmVydF4yPTA="></div>

이다. <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV9pXG5lcVxtYXRoYmZ7MH0="></span>이므로 <span class="math-inline" data-tex-b64="Y19pPTA="></span>이다. 모든 coefficient가 0이므로 Orthogonal Set은 Linearly Independent하다.

## Orthogonal Basis의 좌표

<span class="math-inline" data-tex-b64="Vw=="></span>의 Orthogonal Basis가 <span class="math-inline" data-tex-b64="XHtcbWF0aGJme3Z9XzEsXGxkb3RzLFxtYXRoYmZ7dn1fa1x9"></span>라고 하자.

<div class="math-display" data-tex-b64="XG1hdGhiZnt5fT1jXzFcbWF0aGJme3Z9XzErXGNkb3RzK2Nfa1xtYXRoYmZ7dn1faw=="></div>

양변에 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV9pXlQ="></span>를 곱하면

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV9pXlRcbWF0aGJme3l9Cj1jX2lcbWF0aGJme3Z9X2leVFxtYXRoYmZ7dn1faQ=="></div>

이므로

<div class="math-display" data-tex-b64="Y19pPVxmcmFje1xtYXRoYmZ7dn1faV5UXG1hdGhiZnt5fX0Ke1xtYXRoYmZ7dn1faV5UXG1hdGhiZnt2fV9pfQ=="></div>

이다. 일반 Basis에서는 연립방정식을 풀어야 하지만, Orthogonal Basis에서는 Inner Product만으로 coordinate를 구한다.

## Orthonormal Set과 Basis

Orthogonal Set의 각 벡터 길이가 1이면 Orthonormal Set이라고 한다.

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV9pXlRcbWF0aGJme3F9X2oKPVxiZWdpbntjYXNlc30KMSwmaT1qXFwKMCwmaVxuZXEgagpcZW5ke2Nhc2VzfQ=="></div>

Orthogonal vector를

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV9pPVxmcmFje1xtYXRoYmZ7dn1faX17XGxWZXJ0XG1hdGhiZnt2fV9pXHJWZXJ0fQ=="></div>

로 정규화하면 Orthonormal Vector를 얻는다.

Orthonormal Basis에서는 좌표 공식이

<div class="math-display" data-tex-b64="Y19pPVxtYXRoYmZ7cX1faV5UXG1hdGhiZnt5fQ=="></div>

로 단순해진다.

## Parseval Identity

Orthonormal Basis <span class="math-inline" data-tex-b64="XHtcbWF0aGJme3F9XzEsXGxkb3RzLFxtYXRoYmZ7cX1fblx9"></span>에 대해

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT1cc3VtX3tpPTF9XntufShcbWF0aGJme3F9X2leVFxtYXRoYmZ7eH0pXG1hdGhiZntxfV9p"></div>

이고 길이는

<div class="math-display" data-tex-b64="XGxWZXJ0XG1hdGhiZnt4fVxyVmVydF4yCj1cc3VtX3tpPTF9XntufXxcbWF0aGJme3F9X2leVFxtYXRoYmZ7eH18XjI="></div>

이다. 벡터의 전체 energy가 orthonormal coordinate의 제곱합으로 보존된다.

## Orthogonal Matrix

정사각행렬 <span class="math-inline" data-tex-b64="UQ=="></span>의 column들이 Orthonormal Basis를 이루면 Orthogonal Matrix라고 한다.

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH1cbWF0aGJme3F9XzEmXGNkb3RzJlxtYXRoYmZ7cX1fblxlbmR7Ym1hdHJpeH0="></div>

column들의 모든 Inner Product를 행렬로 모으면

<div class="math-display" data-tex-b64="UV5UUT1J"></div>

이다. 따라서

<div class="math-display" data-tex-b64="UV57LTF9PVFeVA=="></div>

이다.

정사각행렬에서는 <span class="math-inline" data-tex-b64="UV5UUT1J"></span>이면 자동으로 <span class="math-inline" data-tex-b64="UVFeVD1J"></span>도 성립하므로 row들도 Orthonormal Basis이다.

## 길이와 각도 보존

<div class="math-display" data-tex-b64="XGxWZXJ0IFFcbWF0aGJme3h9XHJWZXJ0XjIKPShRXG1hdGhiZnt4fSleVChRXG1hdGhiZnt4fSkKPVxtYXRoYmZ7eH1eVFFeVFFcbWF0aGJme3h9Cj1cbFZlcnRcbWF0aGJme3h9XHJWZXJ0XjI="></div>

이므로 Orthogonal Matrix는 길이를 보존한다.

또한

<div class="math-display" data-tex-b64="KFFcbWF0aGJme3h9KV5UKFFcbWF0aGJme3l9KQo9XG1hdGhiZnt4fV5UUV5UUVxtYXRoYmZ7eX0KPVxtYXRoYmZ7eH1eVFxtYXRoYmZ7eX0="></div>

이므로 Inner Product와 각도도 보존한다.

Orthogonal Matrix는 공간을 늘이거나 찌그러뜨리지 않고 rotation 또는 reflection만 수행한다.

## Determinant

<div class="math-display" data-tex-b64="UV5UUT1J"></div>

의 determinant를 취하면

<div class="math-display" data-tex-b64="XGRldChRKV4yPTE="></div>

이므로

<div class="math-display" data-tex-b64="XGRldChRKT1ccG0x"></div>

이다. <span class="math-inline" data-tex-b64="XGRldChRKT0x"></span>이면 orientation을 보존하는 rotation이고, <span class="math-inline" data-tex-b64="LTE="></span>이면 reflection을 포함한다.

## 예제

<div class="math-display" data-tex-b64="UT1cZnJhYzF7XHNxcnQyfQpcYmVnaW57Ym1hdHJpeH0xJi0xXFwxJjFcZW5ke2JtYXRyaXh9"></div>

이면

<div class="math-display" data-tex-b64="UV5UUQo9XGZyYWMxMgpcYmVnaW57Ym1hdHJpeH0xJjFcXC0xJjFcZW5ke2JtYXRyaXh9ClxiZWdpbntibWF0cml4fTEmLTFcXDEmMVxlbmR7Ym1hdHJpeH0KPUk="></div>

이다. 따라서 <span class="math-inline" data-tex-b64="UQ=="></span>는 Orthogonal Matrix이다.

이 행렬은 평면을 <span class="math-inline" data-tex-b64="NDVeXGNpcmM="></span> 회전한다.

## 정리

- 서로 다른 벡터의 Inner Product가 0이면 orthogonal하다.
- nonzero Orthogonal Set은 자동으로 Linearly Independent하다.
- Orthonormal Basis에서는 coordinate가 Inner Product 하나로 계산된다.
- Orthogonal Matrix는 <span class="math-inline" data-tex-b64="UV5UUT1J"></span>, <span class="math-inline" data-tex-b64="UV57LTF9PVFeVA=="></span>를 만족한다.
- Orthogonal Matrix는 길이, Inner Product, 각도를 보존한다.
- <span class="math-inline" data-tex-b64="XGRldChRKT1ccG0x"></span>이다.

## 확인 문제

다음 행렬이 Orthogonal Matrix인지 판단하고, 그 변환의 기하학적 의미를 설명한다.

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH0wJjFcXDEmMFxlbmR7Ym1hdHJpeH0="></div>

## 풀이

<div class="math-display" data-tex-b64="UV5UUT1RXjI9SQ=="></div>

이므로 Orthogonal Matrix이다. <span class="math-inline" data-tex-b64="KHgseSk="></span>를 <span class="math-inline" data-tex-b64="KHkseCk="></span>로 보내므로 직선 <span class="math-inline" data-tex-b64="eT14"></span>에 대한 reflection이다. <span class="math-inline" data-tex-b64="XGRldChRKT0tMQ=="></span>인 것도 reflection과 일치한다.

---

**Linear Algebra 정리 시리즈** · 12/19 · [← 이전: Cayley-Hamilton Theorem과 행렬의 거듭제곱](/posts/linear-algebra-11-cayley-hamilton/) · [다음: Orthogonal Complement와 Projection →](/posts/linear-algebra-13-orthogonal-complement-projection/)
