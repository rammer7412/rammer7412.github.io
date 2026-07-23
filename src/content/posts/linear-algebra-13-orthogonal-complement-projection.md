---
title: "13. Orthogonal Complement와 Projection"
description: "Orthogonal Complement, Fundamental Subspace의 직교 관계와 벡터·부분공간에 대한 Orthogonal Projection을 정리한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "orthogonal-complement", "projection", "fundamental-subspaces"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

Subspace <span class="math-inline" data-tex-b64="V1xzdWJzZXRlcVxtYXRoYmJ7Un1ebg=="></span>의 모든 벡터와 orthogonal한 벡터들의 집합을 Orthogonal Complement라고 한다.

<div class="math-display" data-tex-b64="V15ccGVycAo9XHtcbWF0aGJme3h9XGluXG1hdGhiYntSfV5uXG1pZApcbWF0aGJme3h9XlRcbWF0aGJme3d9PTBcIFx0ZXh0e2ZvciBldmVyeSB9XG1hdGhiZnt3fVxpbiBXXH0="></div>

<span class="math-inline" data-tex-b64="V15ccGVycA=="></span>는 <span class="math-inline" data-tex-b64="Vw=="></span>에서 빠진 나머지 벡터들의 집합이 아니라, <span class="math-inline" data-tex-b64="Vw=="></span> 전체에 수직인 방향들로 이루어진 Subspace이다.

## Orthogonal Complement가 Subspace인 이유

<span class="math-inline" data-tex-b64="XG1hdGhiZnt4fSxcbWF0aGJme3l9XGluIFdeXHBlcnA="></span>이고 scalar <span class="math-inline" data-tex-b64="YSxi"></span>가 주어졌다고 하자. 모든 <span class="math-inline" data-tex-b64="XG1hdGhiZnt3fVxpbiBX"></span>에 대해

<div class="math-display" data-tex-b64="KGFcbWF0aGJme3h9K2JcbWF0aGJme3l9KV5UXG1hdGhiZnt3fQo9YVxtYXRoYmZ7eH1eVFxtYXRoYmZ7d30rYlxtYXRoYmZ7eX1eVFxtYXRoYmZ7d309MA=="></div>

이므로 <span class="math-inline" data-tex-b64="YVxtYXRoYmZ7eH0rYlxtYXRoYmZ7eX1caW4gV15ccGVycA=="></span>이다.

## 기본 성질

<div class="math-display" data-tex-b64="V1xjYXAgV15ccGVycD1ce1xtYXRoYmZ7MH1cfQ=="></div>

이다. <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fVxpbiBXXGNhcCBXXlxwZXJw"></span>이면 자기 자신과도 orthogonal하므로

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5UXG1hdGhiZnt4fT1cbFZlcnRcbWF0aGJme3h9XHJWZXJ0XjI9MA=="></div>

이고 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fT1cbWF0aGJmezB9"></span>이다.

유한차원에서는

<div class="math-display" data-tex-b64="KFdeXHBlcnApXlxwZXJwPVc="></div>

이며

<div class="math-display" data-tex-b64="XGRpbSBXK1xkaW0gV15ccGVycD1u"></div>

이다.

## Fundamental Subspace와 Orthogonality

행렬 <span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0="></span>에 대해

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEpXlxwZXJwPU4oQSk="></div>

이다. <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></span>이라는 것은 <span class="math-inline" data-tex-b64="QQ=="></span>의 각 row와 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>의 Inner Product가 0이라는 뜻이다.

또한

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEpXlxwZXJwPU4oQV5UKQ=="></div>

이다. 따라서 네 Fundamental Subspace는 두 쌍의 Orthogonal Complement를 이룬다.

## 하나의 벡터에 대한 Projection

nonzero vector <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fQ=="></span>가 만드는 직선 위로 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fQ=="></span>를 Projection하면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwcm9qfV97XG1hdGhiZnt1fX0oXG1hdGhiZnt2fSkKPVxmcmFje1xtYXRoYmZ7dX1eVFxtYXRoYmZ7dn19CntcbWF0aGJme3V9XlRcbWF0aGJme3V9fVxtYXRoYmZ7dX0="></div>

이다.

Projection coefficient는 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fQ=="></span>가 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fQ=="></span> 방향으로 얼마나 포함되어 있는지를 나타낸다.

나머지 성분은

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwZXJwfV97XG1hdGhiZnt1fX0oXG1hdGhiZnt2fSkKPVxtYXRoYmZ7dn0tXG9wZXJhdG9ybmFtZXtwcm9qfV97XG1hdGhiZnt1fX0oXG1hdGhiZnt2fSk="></div>

이고 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fQ=="></span>와 orthogonal하다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fQo9XG9wZXJhdG9ybmFtZXtwcm9qfV97XG1hdGhiZnt1fX0oXG1hdGhiZnt2fSkKK1xvcGVyYXRvcm5hbWV7cGVycH1fe1xtYXRoYmZ7dX19KFxtYXRoYmZ7dn0p"></div>

## Subspace에 대한 Projection

<span class="math-inline" data-tex-b64="Vw=="></span>의 Orthogonal Basis가 <span class="math-inline" data-tex-b64="XHtcbWF0aGJme3V9XzEsXGxkb3RzLFxtYXRoYmZ7dX1fa1x9"></span>이면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwcm9qfV9XKFxtYXRoYmZ7dn0pCj1cc3VtX3tpPTF9XntrfQpcZnJhY3tcbWF0aGJme3V9X2leVFxtYXRoYmZ7dn19CntcbWF0aGJme3V9X2leVFxtYXRoYmZ7dX1faX1cbWF0aGJme3V9X2k="></div>

이다.

Orthonormal Basis <span class="math-inline" data-tex-b64="XHtcbWF0aGJme3F9XzEsXGxkb3RzLFxtYXRoYmZ7cX1fa1x9"></span>이면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwcm9qfV9XKFxtYXRoYmZ7dn0pCj1cc3VtX3tpPTF9XntrfQooXG1hdGhiZntxfV9pXlRcbWF0aGJme3Z9KVxtYXRoYmZ7cX1faQ=="></div>

이다.

## Projection Matrix

Orthonormal Basis vector를 column으로 모은 행렬을

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH1cbWF0aGJme3F9XzEmXGNkb3RzJlxtYXRoYmZ7cX1fa1xlbmR7Ym1hdHJpeH0="></div>

라고 하면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwcm9qfV9XKFxtYXRoYmZ7dn0pPVFRXlRcbWF0aGJme3Z9"></div>

이다. 따라서 Projection Matrix는

<div class="math-display" data-tex-b64="UD1RUV5U"></div>

이다.

<span class="math-inline" data-tex-b64="UA=="></span>는 다음 성질을 만족한다.

<div class="math-display" data-tex-b64="UF5UPVAsXHFxdWFkIFBeMj1Q"></div>

Symmetric이고 idempotent하다. 이미 <span class="math-inline" data-tex-b64="Vw=="></span> 위에 있는 벡터를 다시 Projection해도 변하지 않기 때문이다.

## 일반 Basis를 사용한 Projection Matrix

<span class="math-inline" data-tex-b64="QQ=="></span>의 column들이 Linearly Independent하고 <span class="math-inline" data-tex-b64="Vz1cb3BlcmF0b3JuYW1le0NvbH0oQSk="></span>라면

<div class="math-display" data-tex-b64="UD1BKEFeVEEpXnstMX1BXlQ="></div>

이다.

이는 Least Squares의 핵심 공식이다. <span class="math-inline" data-tex-b64="UFxtYXRoYmZ7Yn0="></span>가 <span class="math-inline" data-tex-b64="XG1hdGhiZntifQ=="></span>와 가장 가까운 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>의 벡터이다.

## Orthogonal Decomposition Theorem

모든 <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fVxpblxtYXRoYmJ7Un1ebg=="></span>은 유일하게

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fT1cbWF0aGJme3d9K1xtYXRoYmZ7en0sXHFxdWFkClxtYXRoYmZ7d31caW4gVyxccXVhZCBcbWF0aGJme3p9XGluIFdeXHBlcnA="></div>

로 분해된다.

구체적으로

<div class="math-display" data-tex-b64="XG1hdGhiZnt3fT1cb3BlcmF0b3JuYW1le3Byb2p9X1coXG1hdGhiZnt2fSksXHFxdWFkClxtYXRoYmZ7en09XG1hdGhiZnt2fS1cb3BlcmF0b3JuYW1le3Byb2p9X1coXG1hdGhiZnt2fSk="></div>

이다.

## 예제

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fT1cYmVnaW57Ym1hdHJpeH0xXFwyXGVuZHtibWF0cml4fSxccXF1YWQKXG1hdGhiZnt2fT1cYmVnaW57Ym1hdHJpeH0zXFwxXGVuZHtibWF0cml4fQ=="></div>

이다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV5UXG1hdGhiZnt2fT01LFxxcXVhZApcbWF0aGJme3V9XlRcbWF0aGJme3V9PTU="></div>

이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtwcm9qfV97XG1hdGhiZnt1fX0oXG1hdGhiZnt2fSkKPVxiZWdpbntibWF0cml4fTFcXDJcZW5ke2JtYXRyaXh9"></div>

이다. Orthogonal component는

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fS1cb3BlcmF0b3JuYW1le3Byb2p9X3tcbWF0aGJme3V9fShcbWF0aGJme3Z9KQo9XGJlZ2lue2JtYXRyaXh9MlxcLTFcZW5ke2JtYXRyaXh9"></div>

이며 실제로 <span class="math-inline" data-tex-b64="XGJlZ2lue2JtYXRyaXh9MSYyXGVuZHtibWF0cml4fVxiZWdpbntibWF0cml4fTJcXC0xXGVuZHtibWF0cml4fT0w"></span>이다.

## 정리

- <span class="math-inline" data-tex-b64="V15ccGVycA=="></span>는 <span class="math-inline" data-tex-b64="Vw=="></span> 전체와 orthogonal한 벡터들의 Subspace이다.
- <span class="math-inline" data-tex-b64="V1xjYXAgV15ccGVycD1ce1xtYXRoYmZ7MH1cfQ=="></span>, <span class="math-inline" data-tex-b64="XGRpbSBXK1xkaW0gV15ccGVycD1u"></span>이다.
- <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEpXlxwZXJwPU4oQSk="></span>, <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEpXlxwZXJwPU4oQV5UKQ=="></span>이다.
- Orthonormal Basis matrix <span class="math-inline" data-tex-b64="UQ=="></span>에 대한 Projection Matrix는 <span class="math-inline" data-tex-b64="UVFeVA=="></span>이다.
- Projection Matrix는 symmetric하고 idempotent하다.

## 확인 문제

<div class="math-display" data-tex-b64="Vz1cb3BlcmF0b3JuYW1le3NwYW59XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0xXFwxXFwwXGVuZHtibWF0cml4fSwKXGJlZ2lue2JtYXRyaXh9MVxcMFxcMVxlbmR7Ym1hdHJpeH0KXHJpZ2h0XH0="></div>

일 때 <span class="math-inline" data-tex-b64="V15ccGVycA=="></span>의 Basis를 구한다.

## 풀이

<span class="math-inline" data-tex-b64="XG1hdGhiZnt4fT0oeCx5LHopXlQ="></span>가 <span class="math-inline" data-tex-b64="V15ccGVycA=="></span>에 속하려면

<div class="math-display" data-tex-b64="eCt5PTAsXHFxdWFkIHgrej0w"></div>

이어야 한다. <span class="math-inline" data-tex-b64="eD10"></span>로 두면 <span class="math-inline" data-tex-b64="eT16PS10"></span>이므로

<div class="math-display" data-tex-b64="V15ccGVycD1cb3BlcmF0b3JuYW1le3NwYW59XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0xXFwtMVxcLTFcZW5ke2JtYXRyaXh9ClxyaWdodFx9"></div>

이다.

---

**Linear Algebra 정리 시리즈** · 13/19 · [← 이전: Orthogonal Set, Orthonormal Basis와 Orthogonal Matrix](/posts/linear-algebra-12-orthogonal-orthonormal-matrix/) · [다음: Gram-Schmidt Process와 Orthogonal Diagonalization →](/posts/linear-algebra-14-gram-schmidt-orthogonal-diagonalization/)
