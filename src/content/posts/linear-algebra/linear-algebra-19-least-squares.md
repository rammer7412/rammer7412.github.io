---
title: "19. Least Squares Solution과 데이터 근사"
description: "해가 없는 연립방정식을 Projection 문제로 바꾸고 Normal Equation, QR, SVD와 Pseudoinverse를 이용해 Least Squares Solution을 구한다."
date: "2025-08-05"
category: "선형대수학"
tags: ["linear-algebra", "least-squares", "normal-equation", "linear-regression", "pseudoinverse"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 19
featured: false
draft: false
---
연립방정식

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></div>

에서 <span class="math-inline" data-tex-b64="XG1hdGhiZntifVxpblxvcGVyYXRvcm5hbWV7Q29sfShBKQ=="></span>이면 정확한 해가 존재한다. 그러나 측정값이 많거나 noise가 포함된 데이터에서는 <span class="math-inline" data-tex-b64="XG1hdGhiZntifVxub3RpblxvcGVyYXRvcm5hbWV7Q29sfShBKQ=="></span>인 경우가 일반적이다.

이때 정확한 해 대신 residual norm을 최소화하는 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>를 찾는다.

<div class="math-display" data-tex-b64="XHdpZGVoYXR7XG1hdGhiZnt4fX0KPVxvcGVyYXRvcm5hbWUqe2FyZ21pbn1fe1xtYXRoYmZ7eH19ClxsVmVydCBBXG1hdGhiZnt4fS1cbWF0aGJme2J9XHJWZXJ0XzJeMg=="></div>

이를 Least Squares Solution이라고 한다.

## 기하학적 의미

<span class="math-inline" data-tex-b64="QVx3aWRlaGF0e1xtYXRoYmZ7eH19"></span>는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span> 위에 있으면서 <span class="math-inline" data-tex-b64="XG1hdGhiZntifQ=="></span>에 가장 가까운 벡터이다. 따라서

<div class="math-display" data-tex-b64="QVx3aWRlaGF0e1xtYXRoYmZ7eH19Cj1cb3BlcmF0b3JuYW1le3Byb2p9X3tcb3BlcmF0b3JuYW1le0NvbH0oQSl9KFxtYXRoYmZ7Yn0p"></div>

이다.

Residual Vector를

<div class="math-display" data-tex-b64="XG1hdGhiZntyfT1cbWF0aGJme2J9LUFcd2lkZWhhdHtcbWF0aGJme3h9fQ=="></div>

라고 하면 Projection의 성질에 따라

<div class="math-display" data-tex-b64="XG1hdGhiZntyfVxwZXJwXG9wZXJhdG9ybmFtZXtDb2x9KEEp"></div>

이다.

## Normal Equation

Residual이 <span class="math-inline" data-tex-b64="QQ=="></span>의 모든 column과 orthogonal하므로

<div class="math-display" data-tex-b64="QV5UKFxtYXRoYmZ7Yn0tQVx3aWRlaGF0e1xtYXRoYmZ7eH19KT1cbWF0aGJmezB9"></div>

이다. 정리하면

<div class="math-display" data-tex-b64="QV5UQVx3aWRlaGF0e1xtYXRoYmZ7eH19PUFeVFxtYXRoYmZ7Yn0="></div>

를 얻는다. 이를 Normal Equation이라고 한다.

<span class="math-inline" data-tex-b64="QV5UQQ=="></span>는 항상 Symmetric Positive Semidefinite이다.

## Full Column Rank인 경우

<span class="math-inline" data-tex-b64="QQ=="></span>의 column들이 Linearly Independent하면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShBKT1u"></div>

이고 <span class="math-inline" data-tex-b64="QV5UQQ=="></span>는 Positive Definite이며 invertible하다.

따라서 유일한 Least Squares Solution은

<div class="math-display" data-tex-b64="XHdpZGVoYXR7XG1hdGhiZnt4fX0KPShBXlRBKV57LTF9QV5UXG1hdGhiZntifQ=="></div>

이다.

## 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjJcXDEmM1xcMCYwXGVuZHtibWF0cml4fSxccXF1YWQKXG1hdGhiZntifT1cYmVnaW57Ym1hdHJpeH00XFw1XFw2XGVuZHtibWF0cml4fQ=="></div>

이다. 세 번째 equation은 <span class="math-inline" data-tex-b64="MD02"></span>이므로 exact solution은 없다.

<div class="math-display" data-tex-b64="QV5UQT1cYmVnaW57Ym1hdHJpeH0yJjVcXDUmMTNcZW5ke2JtYXRyaXh9LFxxcXVhZApBXlRcbWF0aGJme2J9PVxiZWdpbntibWF0cml4fTlcXDIzXGVuZHtibWF0cml4fQ=="></div>

이다.

Normal Equation을 풀면

<div class="math-display" data-tex-b64="XHdpZGVoYXR7XG1hdGhiZnt4fX09XGJlZ2lue2JtYXRyaXh9MlxcMVxlbmR7Ym1hdHJpeH0="></div>

이다.

<div class="math-display" data-tex-b64="QVx3aWRlaGF0e1xtYXRoYmZ7eH19PVxiZWdpbntibWF0cml4fTRcXDVcXDBcZW5ke2JtYXRyaXh9LFxxcXVhZApcbWF0aGJme3J9PVxiZWdpbntibWF0cml4fTBcXDBcXDZcZW5ke2JtYXRyaXh9"></div>

이고 실제로

<div class="math-display" data-tex-b64="QV5UXG1hdGhiZntyfT1cbWF0aGJmezB9"></div>

이다.

## Projection Matrix

Full Column Rank이면

<div class="math-display" data-tex-b64="QVx3aWRlaGF0e1xtYXRoYmZ7eH19Cj1BKEFeVEEpXnstMX1BXlRcbWF0aGJme2J9"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>에 대한 Projection Matrix는

<div class="math-display" data-tex-b64="UD1BKEFeVEEpXnstMX1BXlQ="></div>

이다.

Residual Projection은

<div class="math-display" data-tex-b64="SS1Q"></div>

이며 <span class="math-inline" data-tex-b64="TihBXlQp"></span>로 Projection한다.

## QR Factorization을 이용한 방법

<span class="math-inline" data-tex-b64="QT1RUg=="></span>이고 <span class="math-inline" data-tex-b64="QQ=="></span>가 Full Column Rank라면

<div class="math-display" data-tex-b64="XGxWZXJ0IEFcbWF0aGJme3h9LVxtYXRoYmZ7Yn1cclZlcnRfMgo9XGxWZXJ0IFFSXG1hdGhiZnt4fS1cbWF0aGJme2J9XHJWZXJ0XzI="></div>

이다. 최적조건은

<div class="math-display" data-tex-b64="Ulx3aWRlaGF0e1xtYXRoYmZ7eH19PVFeVFxtYXRoYmZ7Yn0="></div>

가 된다.

<span class="math-inline" data-tex-b64="Ug=="></span>은 Upper Triangular Matrix이므로 Back Substitution으로 푼다. <span class="math-inline" data-tex-b64="QV5UQQ=="></span>를 만들지 않아 numerical stability가 더 좋다.

## Rank가 부족한 경우

<span class="math-inline" data-tex-b64="QQ=="></span>의 column들이 Linearly Dependent하면 <span class="math-inline" data-tex-b64="QV5UQQ=="></span>는 singular하고 Least Squares Solution이 여러 개일 수 있다.

SVD

<div class="math-display" data-tex-b64="QT1VXFNpZ21hIFZeVA=="></div>

를 사용하면 Pseudoinverse

<div class="math-display" data-tex-b64="QV4rPVZcU2lnbWFeK1VeVA=="></div>

를 정의할 수 있다.

<div class="math-display" data-tex-b64="XHdpZGVoYXR7XG1hdGhiZnt4fX09QV4rXG1hdGhiZntifQ=="></div>

는 Least Squares Solution 중 norm이 가장 작은 Minimum-Norm Solution이다.

## SVD 관점에서의 최소화

Orthogonal Matrix는 norm을 보존하므로

<div class="math-display" data-tex-b64="XGxWZXJ0IEFcbWF0aGJme3h9LVxtYXRoYmZ7Yn1cclZlcnRfMgo9XGxWZXJ0IFVeVFxtYXRoYmZ7Yn0tXFNpZ21hIFZeVFxtYXRoYmZ7eH1cclZlcnRfMg=="></div>

이다.

<div class="math-display" data-tex-b64="XG1hdGhiZntjfT1VXlRcbWF0aGJme2J9LFxxcXVhZApcbWF0aGJme3l9PVZeVFxtYXRoYmZ7eH0="></div>

로 두면 nonzero Singular Value에 대해

<div class="math-display" data-tex-b64="eV9pPVxmcmFje2NfaX17XHNpZ21hX2l9"></div>

로 선택하는 것이 residual을 최소화한다. zero Singular Value에 대응하는 coordinate는 0으로 두면 minimum norm이 된다.

## 직선 근사와 Linear Regression

데이터

<div class="math-display" data-tex-b64="KHhfMSx5XzEpLFxsZG90cywoeF9tLHlfbSk="></div>

에 직선

<div class="math-display" data-tex-b64="eT1cYmV0YV8wK1xiZXRhXzF4"></div>

을 적합한다고 하자.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjEmeF8xXFwKMSZ4XzJcXApcdmRvdHMmXHZkb3RzXFwKMSZ4X20KXGVuZHtibWF0cml4fQpcYmVnaW57Ym1hdHJpeH1cYmV0YV8wXFxcYmV0YV8xXGVuZHtibWF0cml4fQpcYXBwcm94ClxiZWdpbntibWF0cml4fXlfMVxceV8yXFxcdmRvdHNcXHlfbVxlbmR7Ym1hdHJpeH0="></div>

이다.

Least Squares는

<div class="math-display" data-tex-b64="XHN1bV97aT0xfV57bX0KKHlfaS1cYmV0YV8wLVxiZXRhXzF4X2kpXjI="></div>

를 최소화한다. Machine Learning의 기본 Linear Regression과 같은 구조이다.

## Condition Number와 주의점

Normal Equation은 구현이 간단하지만

<div class="math-display" data-tex-b64="XGthcHBhXzIoQV5UQSk9XGthcHBhXzIoQSleMg=="></div>

이다. <span class="math-inline" data-tex-b64="QQ=="></span>가 ill-conditioned하면 오차가 더 커질 수 있다.

일반적인 선택은 다음과 같다.

- 작고 well-conditioned한 문제: Normal Equation
- 일반적인 Full Rank 문제: QR Factorization
- Rank-deficient 또는 ill-conditioned 문제: SVD

## 정리

- Least Squares는 <span class="math-inline" data-tex-b64="XGxWZXJ0IEFcbWF0aGJme3h9LVxtYXRoYmZ7Yn1cclZlcnRfMl4y"></span>를 최소화한다.
- Residual은 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEp"></span>와 orthogonal하다.
- Normal Equation은 <span class="math-inline" data-tex-b64="QV5UQVx3aWRlaGF0e1xtYXRoYmZ7eH19PUFeVFxtYXRoYmZ7Yn0="></span>이다.
- Full Column Rank이면 solution은 유일하다.
- QR 방식은 <span class="math-inline" data-tex-b64="Ulx3aWRlaGF0e1xtYXRoYmZ7eH19PVFeVFxtYXRoYmZ7Yn0="></span>를 푼다.
- SVD의 <span class="math-inline" data-tex-b64="QV4rXG1hdGhiZntifQ=="></span>는 Minimum-Norm Least Squares Solution이다.

## 확인 문제

세 점 <span class="math-inline" data-tex-b64="KDAsMSksKDEsMiksKDIsMik="></span>에 가장 잘 맞는 직선 <span class="math-inline" data-tex-b64="eT1cYmV0YV8wK1xiZXRhXzF4"></span>를 구한다.

## 풀이

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjBcXDEmMVxcMSYyXGVuZHtibWF0cml4fSxccXF1YWQKXG1hdGhiZntifT1cYmVnaW57Ym1hdHJpeH0xXFwyXFwyXGVuZHtibWF0cml4fQ=="></div>

이다.

<div class="math-display" data-tex-b64="QV5UQT1cYmVnaW57Ym1hdHJpeH0zJjNcXDMmNVxlbmR7Ym1hdHJpeH0sXHFxdWFkCkFeVFxtYXRoYmZ7Yn09XGJlZ2lue2JtYXRyaXh9NVxcNlxlbmR7Ym1hdHJpeH0="></div>

Normal Equation을 풀면

<div class="math-display" data-tex-b64="XHdpZGVoYXR7XGJvbGRzeW1ib2xcYmV0YX0KPVxiZWdpbntibWF0cml4fVxmcmFjNzZcXFxmcmFjMTJcZW5ke2JtYXRyaXh9"></div>

이다. 따라서 근사 직선은

<div class="math-display" data-tex-b64="eT1cZnJhYzc2K1xmcmFjMTJ4"></div>

이다.
