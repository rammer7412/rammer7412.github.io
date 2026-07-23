---
title: "15. QR Factorization과 Orthonormal Basis"
description: "Gram-Schmidt Process를 행렬 분해로 정리한 QR Factorization의 구조, 계산 방법과 Least Squares에서의 활용을 설명한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "qr-factorization", "gram-schmidt", "least-squares"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

QR Factorization은 행렬의 column들이 만드는 공간은 유지하면서, 그 공간의 Orthonormal Basis와 coordinate 정보를 분리하는 방법이다.

<span class="math-inline" data-tex-b64="QVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0="></span>의 column들이 Linearly Independent하고 <span class="math-inline" data-tex-b64="bVxnZSBu"></span>이라고 하자. 그러면

<div class="math-display" data-tex-b64="QT1RUg=="></div>

로 분해할 수 있다. Reduced QR에서

<div class="math-display" data-tex-b64="UVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0sXHFxdWFkClJcaW5cbWF0aGJie1J9XntuXHRpbWVzIG59"></div>

이며 <span class="math-inline" data-tex-b64="UQ=="></span>의 column들은 Orthonormal하고 <span class="math-inline" data-tex-b64="Ug=="></span>은 Upper Triangular Matrix이다.

<div class="math-display" data-tex-b64="UV5UUT1JX24="></div>

따라서

<div class="math-display" data-tex-b64="Uj1RXlRB"></div>

이다.

## Q와 R의 의미

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH1cbWF0aGJme2F9XzEmXGNkb3RzJlxtYXRoYmZ7YX1fblxlbmR7Ym1hdHJpeH0sXHFxdWFkClE9XGJlZ2lue2JtYXRyaXh9XG1hdGhiZntxfV8xJlxjZG90cyZcbWF0aGJme3F9X25cZW5ke2JtYXRyaXh9"></div>

라고 하자.

<span class="math-inline" data-tex-b64="UQ=="></span>의 column들은 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>의 Orthonormal Basis이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KFEpPVxvcGVyYXRvcm5hbWV7Q29sfShBKQ=="></div>

<span class="math-inline" data-tex-b64="Ug=="></span>의 <span class="math-inline" data-tex-b64="ag=="></span>번째 column은 <span class="math-inline" data-tex-b64="XG1hdGhiZnthfV9q"></span>를 <span class="math-inline" data-tex-b64="UQ=="></span> Basis로 표현한 coordinate이다.

<div class="math-display" data-tex-b64="XG1hdGhiZnthfV9qCj1yX3sxan1cbWF0aGJme3F9XzErXGNkb3RzK3Jfe2pqfVxtYXRoYmZ7cX1fag=="></div>

<span class="math-inline" data-tex-b64="XG1hdGhiZnthfV9q"></span>는 처음 <span class="math-inline" data-tex-b64="ag=="></span>개의 Orthonormal Vector로 표현되므로 대각선 아래의 coefficient는 0이다. 따라서 <span class="math-inline" data-tex-b64="Ug=="></span>이 upper triangular이다.

## Gram-Schmidt에서 QR 만들기

Gram-Schmidt Process를 <span class="math-inline" data-tex-b64="QQ=="></span>의 column에 적용한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8xPVxtYXRoYmZ7YX1fMSxccXF1YWQKcl97MTF9PVxsVmVydFxtYXRoYmZ7dX1fMVxyVmVydCxccXF1YWQKXG1hdGhiZntxfV8xPVxmcmFje1xtYXRoYmZ7dX1fMX17cl97MTF9fQ=="></div>

두 번째 column은

<div class="math-display" data-tex-b64="cl97MTJ9PVxtYXRoYmZ7cX1fMV5UXG1hdGhiZnthfV8y"></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yPVxtYXRoYmZ7YX1fMi1yX3sxMn1cbWF0aGJme3F9XzEsClxxcXVhZApyX3syMn09XGxWZXJ0XG1hdGhiZnt1fV8yXHJWZXJ0LApccXF1YWQKXG1hdGhiZntxfV8yPVxmcmFje1xtYXRoYmZ7dX1fMn17cl97MjJ9fQ=="></div>

이다.

일반적으로

<div class="math-display" data-tex-b64="cl97aWp9PVxtYXRoYmZ7cX1faV5UXG1hdGhiZnthfV9qXHF1YWQoaTxqKQ=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV9qCj1cbWF0aGJme2F9X2otXHN1bV97aT0xfV57ai0xfXJfe2lqfVxtYXRoYmZ7cX1faSwKXHFxdWFkCnJfe2pqfT1cbFZlcnRcbWF0aGJme3V9X2pcclZlcnQsClxxcXVhZApcbWF0aGJme3F9X2o9XGZyYWN7XG1hdGhiZnt1fV9qfXtyX3tqan19"></div>

이다.

## 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0KMSYxXFwKMSYwXFwKMCYxClxlbmR7Ym1hdHJpeH0="></div>

이다.

첫 번째 column은

<div class="math-display" data-tex-b64="XG1hdGhiZnthfV8xPVxiZWdpbntibWF0cml4fTFcXDFcXDBcZW5ke2JtYXRyaXh9LFxxcXVhZApyX3sxMX09XHNxcnQyLApccXF1YWQKXG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxcMFxlbmR7Ym1hdHJpeH0="></div>

이다.

두 번째 column에 대해

<div class="math-display" data-tex-b64="cl97MTJ9PVxtYXRoYmZ7cX1fMV5UXG1hdGhiZnthfV8yPVxmcmFjMXtcc3FydDJ9"></div>

이고

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yCj1cYmVnaW57Ym1hdHJpeH0xXFwwXFwxXGVuZHtibWF0cml4fQotXGZyYWMxMlxiZWdpbntibWF0cml4fTFcXDFcXDBcZW5ke2JtYXRyaXh9Cj1cYmVnaW57Ym1hdHJpeH1cZnJhYzEyXFwtXGZyYWMxMlxcMVxlbmR7Ym1hdHJpeH0="></div>

이다.

<div class="math-display" data-tex-b64="cl97MjJ9PVxmcmFje1xzcXJ0Nn17Mn0sXHFxdWFkClxtYXRoYmZ7cX1fMj1cZnJhYzF7XHNxcnQ2fVxiZWdpbntibWF0cml4fTFcXC0xXFwyXGVuZHtibWF0cml4fQ=="></div>

이므로

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH0KXGZyYWMxe1xzcXJ0Mn0mXGZyYWMxe1xzcXJ0Nn1cXApcZnJhYzF7XHNxcnQyfSYtXGZyYWMxe1xzcXJ0Nn1cXAowJlxmcmFjMntcc3FydDZ9ClxlbmR7Ym1hdHJpeH0="></div>

<div class="math-display" data-tex-b64="Uj1cYmVnaW57Ym1hdHJpeH0KXHNxcnQyJlxmcmFjMXtcc3FydDJ9XFwKMCZcZnJhY3tcc3FydDZ9ezJ9ClxlbmR7Ym1hdHJpeH0="></div>

이다. 직접 곱하면 <span class="math-inline" data-tex-b64="QT1RUg=="></span>이 확인된다.

## Reduced QR과 Full QR

Reduced QR은

<div class="math-display" data-tex-b64="UVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0sXHFxdWFkClJcaW5cbWF0aGJie1J9XntuXHRpbWVzIG59"></div>

이다.

Full QR은 <span class="math-inline" data-tex-b64="UQ=="></span>의 column을 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV5t"></span>의 Orthonormal Basis가 되도록 확장한다.

<div class="math-display" data-tex-b64="UV97XG1hdGhybXtmdWxsfX1caW5cbWF0aGJie1J9XnttXHRpbWVzIG19LFxxcXVhZApSX3tcbWF0aHJte2Z1bGx9fVxpblxtYXRoYmJ7Un1ee21cdGltZXMgbn0="></div>

Least Squares에는 Reduced QR만으로 충분하다.

## QR로 Least Squares 풀기

Full Column Rank인 <span class="math-inline" data-tex-b64="QQ=="></span>에서

<div class="math-display" data-tex-b64="XG1pbl97XG1hdGhiZnt4fX1cbFZlcnQgQVxtYXRoYmZ7eH0tXG1hdGhiZntifVxyVmVydF8y"></div>

를 생각한다. <span class="math-inline" data-tex-b64="QT1RUg=="></span>이면

<div class="math-display" data-tex-b64="QV5UQT1SXlRRXlRRUj1SXlRS"></div>

이고 Normal Equation은

<div class="math-display" data-tex-b64="Ul5UUlx3aWRlaGF0e1xtYXRoYmZ7eH19PVJeVFFeVFxtYXRoYmZ7Yn0="></div>

이다. <span class="math-inline" data-tex-b64="Ug=="></span>이 invertible하므로

<div class="math-display" data-tex-b64="Ulx3aWRlaGF0e1xtYXRoYmZ7eH19PVFeVFxtYXRoYmZ7Yn0="></div>

를 얻는다. Upper Triangular System이므로 Back Substitution으로 계산한다.

<span class="math-inline" data-tex-b64="QV5UQQ=="></span>를 직접 만들면 condition number가 제곱되어 numerical error가 커질 수 있다. QR 방식은 Normal Equation보다 안정적이다.

## Householder QR

Gram-Schmidt는 개념을 이해하기 쉽지만 실제 수치 계산에서는 Householder Reflection을 많이 사용한다.

Householder Matrix는

<div class="math-display" data-tex-b64="SD1JLTJcZnJhY3tcbWF0aGJme3Z9XG1hdGhiZnt2fV5UfXtcbWF0aGJme3Z9XlRcbWF0aGJme3Z9fQ=="></div>

형태의 Orthogonal Matrix이다. column 아래의 성분을 한 번에 0으로 만들어 <span class="math-inline" data-tex-b64="Ug=="></span>을 구성한다. 여러 Householder Matrix의 곱이 <span class="math-inline" data-tex-b64="UV5U"></span>가 된다.

## 정리

- QR Factorization은 <span class="math-inline" data-tex-b64="QT1RUg=="></span>이다.
- <span class="math-inline" data-tex-b64="UQ=="></span>의 column은 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>의 Orthonormal Basis이다.
- <span class="math-inline" data-tex-b64="Uj1RXlRB"></span>이며 Upper Triangular Matrix이다.
- Gram-Schmidt는 QR Factorization의 기본 구성 원리이다.
- Least Squares는 <span class="math-inline" data-tex-b64="Ulx3aWRlaGF0e1xtYXRoYmZ7eH19PVFeVFxtYXRoYmZ7Yn0="></span>로 풀 수 있다.
- 실제 계산에서는 Modified Gram-Schmidt나 Householder QR이 안정적이다.

## 확인 문제

다음 행렬의 Reduced QR Factorization을 구한다.

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjFcXDAmMVxcMSYwXGVuZHtibWF0cml4fQ=="></div>

## 풀이

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMFxcMVxlbmR7Ym1hdHJpeH0="></div>

이다.

<div class="math-display" data-tex-b64="cl97MTJ9PVxtYXRoYmZ7cX1fMV5UXGJlZ2lue2JtYXRyaXh9MVxcMVxcMFxlbmR7Ym1hdHJpeH09XGZyYWMxe1xzcXJ0Mn0="></div>

<div class="math-display" data-tex-b64="XG1hdGhiZnt1fV8yCj1cYmVnaW57Ym1hdHJpeH0xXFwxXFwwXGVuZHtibWF0cml4fQotXGZyYWMxMlxiZWdpbntibWF0cml4fTFcXDBcXDFcZW5ke2JtYXRyaXh9Cj1cZnJhYzEyXGJlZ2lue2JtYXRyaXh9MVxcMlxcLTFcZW5ke2JtYXRyaXh9"></div>

따라서

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8yPVxmcmFjMXtcc3FydDZ9XGJlZ2lue2JtYXRyaXh9MVxcMlxcLTFcZW5ke2JtYXRyaXh9"></div>

이고

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH0KXGZyYWMxe1xzcXJ0Mn0mXGZyYWMxe1xzcXJ0Nn1cXAowJlxmcmFjMntcc3FydDZ9XFwKXGZyYWMxe1xzcXJ0Mn0mLVxmcmFjMXtcc3FydDZ9ClxlbmR7Ym1hdHJpeH0sXHFxdWFkClI9XGJlZ2lue2JtYXRyaXh9XHNxcnQyJlxmcmFjMXtcc3FydDJ9XFwwJlxmcmFje1xzcXJ0Nn17Mn1cZW5ke2JtYXRyaXh9"></div>

이다.

---

**Linear Algebra 정리 시리즈** · 15/19 · [← 이전: Gram-Schmidt Process와 Orthogonal Diagonalization](/posts/linear-algebra-14-gram-schmidt-orthogonal-diagonalization/) · [다음: Complex Conjugate, Hermitian Matrix와 Unitary Matrix →](/posts/linear-algebra-16-conjugate-hermitian-unitary/)
