---
title: "18. Singular Value Decomposition과 Pseudoinverse"
description: "모든 행렬에 존재하는 SVD를 구성하고, Fundamental Subspace·low-rank approximation·Pseudoinverse와 연결한다."
date: "2025-08-04"
category: "선형대수학"
tags: ["linear-algebra", "svd", "singular-value", "pseudoinverse", "low-rank"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 18
featured: false
draft: false
---
Eigenvalue Decomposition은 정사각행렬에만 정의되고 diagonalizable하지 않은 행렬에는 바로 적용할 수 없다. Singular Value Decomposition은 모든 실수 또는 복소수 행렬에 존재한다.

<span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0="></span>에 대해

<div class="math-display" data-tex-b64="QT1VXFNpZ21hIFZeVA=="></div>

로 분해할 수 있다.

- <span class="math-inline" data-tex-b64="VVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbX0="></span>: Orthogonal Matrix
- <span class="math-inline" data-tex-b64="VlxpblxtYXRoYmJ7Un1ee25cdGltZXMgbn0="></span>: Orthogonal Matrix
- <span class="math-inline" data-tex-b64="XFNpZ21hXGluXG1hdGhiYntSfV57bVx0aW1lcyBufQ=="></span>: diagonal-like matrix

복소수 행렬에서는 <span class="math-inline" data-tex-b64="Vl5U"></span> 대신 <span class="math-inline" data-tex-b64="Vl5I"></span>를 사용한다.

## AᵀA와 Singular Value

<span class="math-inline" data-tex-b64="QV5UQQ=="></span>는 항상 Symmetric Positive Semidefinite이다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV5UQV5UQVxtYXRoYmZ7eH0KPVxsVmVydCBBXG1hdGhiZnt4fVxyVmVydF4yXGdlMA=="></div>

따라서 Eigenvalue는 모두 0 이상이다.

<div class="math-display" data-tex-b64="QV5UQVxtYXRoYmZ7dn1faT1cbGFtYmRhX2lcbWF0aGJme3Z9X2k="></div>

라고 하면 Singular Value는

<div class="math-display" data-tex-b64="XHNpZ21hX2k9XHNxcnR7XGxhbWJkYV9pfQ=="></div>

로 정의한다.

Singular Value는 큰 순서로 정렬한다.

<div class="math-display" data-tex-b64="XHNpZ21hXzFcZ2Vcc2lnbWFfMlxnZVxjZG90c1xnZVxzaWdtYV9yPjA="></div>

여기서 <span class="math-inline" data-tex-b64="cj1cb3BlcmF0b3JuYW1le3Jhbmt9KEEp"></span>이다.

## Right와 Left Singular Vector

<span class="math-inline" data-tex-b64="QV5UQQ=="></span>의 Orthonormal Eigenvector <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV9p"></span>를 Right Singular Vector라고 한다.

<span class="math-inline" data-tex-b64="XHNpZ21hX2k+MA=="></span>일 때

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV9pPVxmcmFje0FcbWF0aGJme3Z9X2l9e1xzaWdtYV9pfQ=="></div>

로 정의하면

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7dn1faT1cc2lnbWFfaVxtYXRoYmZ7dX1faQ=="></div>

이다. <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV9p"></span>를 Left Singular Vector라고 한다.

또한

<div class="math-display" data-tex-b64="QUFeVFxtYXRoYmZ7dX1faT1cc2lnbWFfaV4yXG1hdGhiZnt1fV9p"></div>

이므로 Left Singular Vector는 <span class="math-inline" data-tex-b64="QUFeVA=="></span>의 Eigenvector이다.

## U의 column들이 Orthonormal한 이유

<span class="math-inline" data-tex-b64="aVxuZXEgag=="></span>에 대해

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV9pXlRcbWF0aGJme3V9X2oKPVxmcmFje1xtYXRoYmZ7dn1faV5UQV5UQVxtYXRoYmZ7dn1fan0Ke1xzaWdtYV9pXHNpZ21hX2p9Cj1cZnJhY3tcc2lnbWFfal4yXG1hdGhiZnt2fV9pXlRcbWF0aGJme3Z9X2p9Cntcc2lnbWFfaVxzaWdtYV9qfT0w"></div>

이고 <span class="math-inline" data-tex-b64="aT1q"></span>이면 norm이 1이다. 따라서 nonzero singular value에 대응하는 <span class="math-inline" data-tex-b64="XG1hdGhiZnt1fV9p"></span>들은 Orthonormal하다.

## SVD의 기하학적 의미

<div class="math-display" data-tex-b64="QT1VXFNpZ21hIFZeVA=="></div>

는 세 단계의 변환이다.

1. <span class="math-inline" data-tex-b64="Vl5U"></span>: 입력 공간을 rotation 또는 reflection한다.
2. <span class="math-inline" data-tex-b64="XFNpZ21h"></span>: 서로 orthogonal한 축을 각각 <span class="math-inline" data-tex-b64="XHNpZ21hX2k="></span>배 한다.
3. <span class="math-inline" data-tex-b64="VQ=="></span>: 출력 공간을 rotation 또는 reflection한다.

단위구는 <span class="math-inline" data-tex-b64="QQ=="></span>에 의해 주축 길이가 <span class="math-inline" data-tex-b64="XHNpZ21hX2k="></span>인 ellipsoid로 변한다. 가장 큰 Singular Value <span class="math-inline" data-tex-b64="XHNpZ21hXzE="></span>는 최대 stretching factor이다.

<div class="math-display" data-tex-b64="XGxWZXJ0IEFcclZlcnRfMj1cc2lnbWFfMQ=="></div>

이다.

## 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjEmMFxcMCYwJjFcZW5ke2JtYXRyaXh9"></div>

이다.

<div class="math-display" data-tex-b64="QV5UQT1cYmVnaW57Ym1hdHJpeH0xJjEmMFxcMSYxJjBcXDAmMCYxXGVuZHtibWF0cml4fQ=="></div>

의 Eigenvalue는 <span class="math-inline" data-tex-b64="MiwxLDA="></span>이다. 따라서 Singular Value는

<div class="math-display" data-tex-b64="XHNpZ21hXzE9XHNxcnQyLFxxcXVhZCBcc2lnbWFfMj0x"></div>

이다.

Right Singular Vector를

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxcMFxlbmR7Ym1hdHJpeH0sXHF1YWQKXG1hdGhiZnt2fV8yPVxiZWdpbntibWF0cml4fTBcXDBcXDFcZW5ke2JtYXRyaXh9LFxxdWFkClxtYXRoYmZ7dn1fMz1cZnJhYzF7XHNxcnQyfVxiZWdpbntibWF0cml4fS0xXFwxXFwwXGVuZHtibWF0cml4fQ=="></div>

로 선택한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8xPVxmcmFje0FcbWF0aGJme3Z9XzF9e1xzcXJ0Mn09XGJlZ2lue2JtYXRyaXh9MVxcMFxlbmR7Ym1hdHJpeH0sXHFxdWFkClxtYXRoYmZ7dX1fMj1BXG1hdGhiZnt2fV8yPVxiZWdpbntibWF0cml4fTBcXDFcZW5ke2JtYXRyaXh9"></div>

이다.

따라서

<div class="math-display" data-tex-b64="VT1JXzIsXHFxdWFkClxTaWdtYT1cYmVnaW57Ym1hdHJpeH1cc3FydDImMCYwXFwwJjEmMFxlbmR7Ym1hdHJpeH0="></div>

이고 <span class="math-inline" data-tex-b64="Vg=="></span>는 위의 Right Singular Vector들을 column으로 가진다.

## Reduced SVD

Rank가 <span class="math-inline" data-tex-b64="cg=="></span>이면 nonzero Singular Value에 해당하는 부분만 사용하여

<div class="math-display" data-tex-b64="QT1VX3JcU2lnbWFfclZfcl5U"></div>

로 쓸 수 있다.

<div class="math-display" data-tex-b64="VV9yXGluXG1hdGhiYntSfV57bVx0aW1lcyByfSxccXVhZApcU2lnbWFfclxpblxtYXRoYmJ7Un1ee3JcdGltZXMgcn0sXHF1YWQKVl9yXGluXG1hdGhiYntSfV57blx0aW1lcyByfQ=="></div>

이다. 저장 공간과 계산량을 줄일 수 있다.

## Fundamental Subspace

SVD는 네 Fundamental Subspace를 직접 보여 준다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEpCj1cb3BlcmF0b3JuYW1le3NwYW59XHtcbWF0aGJme3V9XzEsXGxkb3RzLFxtYXRoYmZ7dX1fclx9"></div>

<div class="math-display" data-tex-b64="TihBXlQpCj1cb3BlcmF0b3JuYW1le3NwYW59XHtcbWF0aGJme3V9X3tyKzF9LFxsZG90cyxcbWF0aGJme3V9X21cfQ=="></div>

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEpCj1cb3BlcmF0b3JuYW1le3NwYW59XHtcbWF0aGJme3Z9XzEsXGxkb3RzLFxtYXRoYmZ7dn1fclx9"></div>

<div class="math-display" data-tex-b64="TihBKQo9XG9wZXJhdG9ybmFtZXtzcGFufVx7XG1hdGhiZnt2fV97cisxfSxcbGRvdHMsXG1hdGhiZnt2fV9uXH0="></div>

## Rank-1 Decomposition

SVD를 column별로 전개하면

<div class="math-display" data-tex-b64="QT1cc3VtX3tpPTF9XntyfVxzaWdtYV9pXG1hdGhiZnt1fV9pXG1hdGhiZnt2fV9pXlQ="></div>

이다. 각 항은 Rank 1 Matrix이다.

앞의 <span class="math-inline" data-tex-b64="aw=="></span>개 항만 남기면

<div class="math-display" data-tex-b64="QV9rPVxzdW1fe2k9MX1ee2t9XHNpZ21hX2lcbWF0aGJme3V9X2lcbWF0aGJme3Z9X2leVA=="></div>

이다. Eckart-Young Theorem에 따라 <span class="math-inline" data-tex-b64="QV9r"></span>는 <span class="math-inline" data-tex-b64="QQ=="></span>의 가장 좋은 Rank <span class="math-inline" data-tex-b64="aw=="></span> approximation이다.

<div class="math-display" data-tex-b64="XGxWZXJ0IEEtQV9rXHJWZXJ0XzI9XHNpZ21hX3trKzF9"></div>

이다. 이미지 압축, noise reduction, PCA와 연결된다.

## Moore-Penrose Pseudoinverse

정사각행렬이 아니거나 singular한 행렬에는 일반 inverse가 없다. SVD를 이용해 Pseudoinverse를 정의한다.

<div class="math-display" data-tex-b64="QV4rPVZcU2lnbWFeK1VeVA=="></div>

<span class="math-inline" data-tex-b64="XFNpZ21hXis="></span>는 0이 아닌 Singular Value를 역수로 바꾸고 matrix shape을 transpose한 것이다.

<div class="math-display" data-tex-b64="XHNpZ21hX2lcbG9uZ21hcHN0b1xmcmFjMXtcc2lnbWFfaX0sXHFxdWFkCjBcbG9uZ21hcHN0bzA="></div>

Pseudoinverse는 다음 Moore-Penrose conditions를 만족한다.

<div class="math-display" data-tex-b64="QUFeK0E9QSxccXF1YWQKQV4rQUFeKz1BXis="></div>

<div class="math-display" data-tex-b64="KEFBXispXlQ9QUFeKyxccXF1YWQKKEFeK0EpXlQ9QV4rQQ=="></div>

<span class="math-inline" data-tex-b64="QUFeKw=="></span>는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>에 대한 Orthogonal Projection이고, <span class="math-inline" data-tex-b64="QV4rQQ=="></span>는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtSb3d9KEEp"></span>에 대한 Orthogonal Projection이다.

## 정리

- 모든 행렬은 SVD를 가진다.
- Singular Value는 <span class="math-inline" data-tex-b64="QV5UQQ=="></span> Eigenvalue의 square root이다.
- <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7dn1faT1cc2lnbWFfaVxtYXRoYmZ7dX1faQ=="></span>이다.
- SVD는 rotation/reflection, axis scaling, rotation/reflection으로 해석된다.
- <span class="math-inline" data-tex-b64="QT1cc3VtX2lcc2lnbWFfaVxtYXRoYmZ7dX1faVxtYXRoYmZ7dn1faV5U"></span>이다.
- Pseudoinverse는 <span class="math-inline" data-tex-b64="QV4rPVZcU2lnbWFeK1VeVA=="></span>이다.

## 확인 문제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjFcXDEmMVxlbmR7Ym1hdHJpeH0="></div>

의 Singular Value와 Rank를 구한다.

## 풀이

<div class="math-display" data-tex-b64="QV5UQT1cYmVnaW57Ym1hdHJpeH0yJjJcXDImMlxlbmR7Ym1hdHJpeH0="></div>

의 Eigenvalue는 <span class="math-inline" data-tex-b64="NCww"></span>이다. 따라서 Singular Value는 <span class="math-inline" data-tex-b64="Miww"></span>이고 Rank는 nonzero Singular Value의 수인 <span class="math-inline" data-tex-b64="MQ=="></span>이다.
