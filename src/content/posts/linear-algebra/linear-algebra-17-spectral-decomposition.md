---
title: "17. Spectral Decomposition과 행렬의 구조"
description: "Spectral Theorem을 Projection Matrix의 합으로 전개하여 Symmetric·Hermitian Matrix의 작용과 행렬 함수를 이해한다."
date: "2025-08-02"
category: "선형대수학"
tags: ["linear-algebra", "spectral-decomposition", "spectral-theorem", "projection"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 17
featured: false
draft: false
---
Spectral Theorem은 Real Symmetric Matrix를 Orthonormal Eigenbasis에서 diagonal form으로 표현한다.

<div class="math-display" data-tex-b64="QV5UPUEKXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZApBPVFcTGFtYmRhIFFeVA=="></div>

여기서

<div class="math-display" data-tex-b64="UT1cYmVnaW57Ym1hdHJpeH1cbWF0aGJme3F9XzEmXGNkb3RzJlxtYXRoYmZ7cX1fblxlbmR7Ym1hdHJpeH0="></div>

의 column들은 Orthonormal Eigenvector이고

<div class="math-display" data-tex-b64="XExhbWJkYT1cb3BlcmF0b3JuYW1le2RpYWd9KFxsYW1iZGFfMSxcbGRvdHMsXGxhbWJkYV9uKQ=="></div>

이다.

## Spectral Decomposition

행렬곱을 column 단위로 전개하면

<div class="math-display" data-tex-b64="QQo9UVxMYW1iZGEgUV5UCj1cc3VtX3tpPTF9XntufVxsYW1iZGFfaVxtYXRoYmZ7cX1faVxtYXRoYmZ7cX1faV5U"></div>

이다. 이를 Spectral Decomposition이라고 한다.

각 항

<div class="math-display" data-tex-b64="UF9pPVxtYXRoYmZ7cX1faVxtYXRoYmZ7cX1faV5U"></div>

는 <span class="math-inline" data-tex-b64="XG1hdGhiZntxfV9p"></span>가 만드는 1차원 Eigenspace 위로 Projection하는 Matrix이다.

## A의 작용을 Projection의 합으로 보기

임의의 벡터 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>에 대해

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH0KPVxzdW1fe2k9MX1ee259XGxhbWJkYV9pClxtYXRoYmZ7cX1faVxtYXRoYmZ7cX1faV5UXG1hdGhiZnt4fQo9XHN1bV97aT0xfV57bn1cbGFtYmRhX2kKKFxtYXRoYmZ7cX1faV5UXG1hdGhiZnt4fSlcbWF0aGJme3F9X2k="></div>

이다.

이 식은 <span class="math-inline" data-tex-b64="QQ=="></span>의 작용을 다음 과정으로 설명한다.

1. <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>에서 각 Eigenvector 방향의 component를 추출한다.
2. 각 component를 Eigenvalue만큼 확대·축소하거나 반전한다.
3. 모든 방향의 결과를 다시 더한다.

## Spectral Projection의 성질

Orthonormal Eigenvector에 대해

<div class="math-display" data-tex-b64="UF9pXjI9UF9pLFxxcXVhZCBQX2leVD1QX2k="></div>

이다.

또한 <span class="math-inline" data-tex-b64="aVxuZXEgag=="></span>이면

<div class="math-display" data-tex-b64="UF9pUF9qPU8="></div>

이고

<div class="math-display" data-tex-b64="XHN1bV97aT0xfV57bn1QX2k9SQ=="></div>

이다. 전체 공간이 서로 orthogonal한 Eigenspace 방향으로 완전히 분해되기 때문이다.

중복된 Eigenvalue가 있다면 같은 Eigenvalue의 Eigenspace Projection을 하나로 묶어

<div class="math-display" data-tex-b64="QT1cc3VtX3tcbGFtYmRhfVxsYW1iZGEgUF97XGxhbWJkYX0="></div>

로 쓸 수 있다.

## 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJjFcXDEmMlxlbmR7Ym1hdHJpeH0="></div>

의 Eigenvalue와 Orthonormal Eigenvector는

<div class="math-display" data-tex-b64="XGxhbWJkYV8xPTMsXHF1YWQKXG1hdGhiZntxfV8xPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcMVxlbmR7Ym1hdHJpeH0="></div>

<div class="math-display" data-tex-b64="XGxhbWJkYV8yPTEsXHF1YWQKXG1hdGhiZntxfV8yPVxmcmFjMXtcc3FydDJ9XGJlZ2lue2JtYXRyaXh9MVxcLTFcZW5ke2JtYXRyaXh9"></div>

이다.

따라서

<div class="math-display" data-tex-b64="QT0zXG1hdGhiZntxfV8xXG1hdGhiZntxfV8xXlQrClxtYXRoYmZ7cX1fMlxtYXRoYmZ7cX1fMl5U"></div>

이다.

<div class="math-display" data-tex-b64="M1xtYXRoYmZ7cX1fMVxtYXRoYmZ7cX1fMV5UCj1cZnJhYzMyXGJlZ2lue2JtYXRyaXh9MSYxXFwxJjFcZW5ke2JtYXRyaXh9"></div>

<div class="math-display" data-tex-b64="XG1hdGhiZntxfV8yXG1hdGhiZntxfV8yXlQKPVxmcmFjMTJcYmVnaW57Ym1hdHJpeH0xJi0xXFwtMSYxXGVuZHtibWF0cml4fQ=="></div>

두 행렬을 더하면 원래 <span class="math-inline" data-tex-b64="QQ=="></span>가 된다.

## 행렬의 거듭제곱

<div class="math-display" data-tex-b64="QV5rPVFcTGFtYmRhXmtRXlQ="></div>

이므로 Spectral Decomposition에서는

<div class="math-display" data-tex-b64="QV5rPVxzdW1fe2k9MX1ee259XGxhbWJkYV9pXmsKXG1hdGhiZntxfV9pXG1hdGhiZntxfV9pXlQ="></div>

이다.

각 Eigenvalue만 거듭제곱하면 되므로 큰 행렬의 반복 작용을 단순하게 표현할 수 있다.

## Matrix Function

Scalar function <span class="math-inline" data-tex-b64="Zg=="></span>를 Eigenvalue에 적용하여

<div class="math-display" data-tex-b64="ZihBKT1RZihcTGFtYmRhKVFeVA=="></div>

로 정의한다. 즉,

<div class="math-display" data-tex-b64="ZihBKT1cc3VtX3tpPTF9XntufWYoXGxhbWJkYV9pKQpcbWF0aGJme3F9X2lcbWF0aGJme3F9X2leVA=="></div>

이다.

예를 들어

<div class="math-display" data-tex-b64="ZV5BPVxzdW1fe2k9MX1ee259ZV57XGxhbWJkYV9pfQpcbWF0aGJme3F9X2lcbWF0aGJme3F9X2leVA=="></div>

이고, Positive Definite Matrix의 square root는

<div class="math-display" data-tex-b64="QV57MS8yfT1cc3VtX3tpPTF9XntufVxzcXJ0e1xsYW1iZGFfaX0KXG1hdGhiZntxfV9pXG1hdGhiZntxfV9pXlQ="></div>

로 정의할 수 있다.

## Quadratic Form과 Eigenvalue

Symmetric Matrix의 Quadratic Form은

<div class="math-display" data-tex-b64="ZihcbWF0aGJme3h9KT1cbWF0aGJme3h9XlRBXG1hdGhiZnt4fQ=="></div>

이다. <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fT1RXG1hdGhiZnt5fQ=="></span>로 바꾸면

<div class="math-display" data-tex-b64="ZihcbWF0aGJme3h9KQo9XG1hdGhiZnt5fV5UXExhbWJkYVxtYXRoYmZ7eX0KPVxzdW1fe2k9MX1ee259XGxhbWJkYV9pIHlfaV4y"></div>

이다. Cross term이 사라지고 각 Eigenvalue가 각 principal axis 방향의 curvature를 결정한다.

- 모든 <span class="math-inline" data-tex-b64="XGxhbWJkYV9pPjA="></span>: Positive Definite
- 모든 <span class="math-inline" data-tex-b64="XGxhbWJkYV9pXGdlMA=="></span>: Positive Semidefinite
- 양수와 음수가 모두 존재: Indefinite

## Rayleigh Quotient

nonzero vector에 대해

<div class="math-display" data-tex-b64="Ul9BKFxtYXRoYmZ7eH0pCj1cZnJhY3tcbWF0aGJme3h9XlRBXG1hdGhiZnt4fX0Ke1xtYXRoYmZ7eH1eVFxtYXRoYmZ7eH19"></div>

라고 한다. Eigenvalue를 큰 순서로 <span class="math-inline" data-tex-b64="XGxhbWJkYV8xXGdlXGNkb3RzXGdlXGxhbWJkYV9u"></span>이라 하면

<div class="math-display" data-tex-b64="XGxhbWJkYV9uXGxlIFJfQShcbWF0aGJme3h9KVxsZVxsYW1iZGFfMQ=="></div>

이다. 최대값은 <span class="math-inline" data-tex-b64="XHBtXG1hdGhiZntxfV8x"></span>에서, 최소값은 <span class="math-inline" data-tex-b64="XHBtXG1hdGhiZntxfV9u"></span>에서 얻는다.

## Hermitian Matrix

복소수 Hermitian Matrix에서는

<div class="math-display" data-tex-b64="QT1VXExhbWJkYSBVXkg="></div>

이며

<div class="math-display" data-tex-b64="QT1cc3VtX3tpPTF9XntufVxsYW1iZGFfaVxtYXRoYmZ7dX1faVxtYXRoYmZ7dX1faV5I"></div>

이다. Eigenvalue는 실수이고 <span class="math-inline" data-tex-b64="VQ=="></span>는 Unitary Matrix이다.

## 정리

- Symmetric Matrix는 <span class="math-inline" data-tex-b64="QT1RXExhbWJkYSBRXlQ="></span>로 orthogonally diagonalize된다.
- Spectral Decomposition은 <span class="math-inline" data-tex-b64="QT1cc3VtX2lcbGFtYmRhX2lcbWF0aGJme3F9X2lcbWF0aGJme3F9X2leVA=="></span>이다.
- <span class="math-inline" data-tex-b64="XG1hdGhiZntxfV9pXG1hdGhiZntxfV9pXlQ="></span>는 Eigenvector 방향 Projection Matrix이다.
- 행렬의 거듭제곱과 함수는 Eigenvalue에 scalar function을 적용하여 계산한다.
- Quadratic Form의 부호는 Eigenvalue의 부호로 판단한다.

## 확인 문제

앞의 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해 <span class="math-inline" data-tex-b64="QV41"></span>를 Spectral Decomposition으로 나타낸다.

## 풀이

<div class="math-display" data-tex-b64="QV41Cj0zXjVcbWF0aGJme3F9XzFcbWF0aGJme3F9XzFeVCsKMV41XG1hdGhiZntxfV8yXG1hdGhiZntxfV8yXlQ="></div>

이므로

<div class="math-display" data-tex-b64="QV41Cj1cZnJhY3syNDN9ezJ9XGJlZ2lue2JtYXRyaXh9MSYxXFwxJjFcZW5ke2JtYXRyaXh9CitcZnJhYzEyXGJlZ2lue2JtYXRyaXh9MSYtMVxcLTEmMVxlbmR7Ym1hdHJpeH0KPVxiZWdpbntibWF0cml4fTEyMiYxMjFcXDEyMSYxMjJcZW5ke2JtYXRyaXh9"></div>

이다.
