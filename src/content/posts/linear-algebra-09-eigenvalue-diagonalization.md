---
title: "9. Eigenvalue, Eigenvector와 Diagonalization"
description: "Eigenvector의 기하학적 의미에서 Characteristic Equation, Eigenspace, Multiplicity와 Diagonalization까지 연결해 정리한다."
date: "2025-07-22"
category: "선형대수학"
tags: ["linear-algebra", "eigenvalue", "eigenvector", "eigenspace", "diagonalization"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

행렬 <span class="math-inline" data-tex-b64="QQ=="></span>는 벡터를 다른 벡터로 보내는 Linear Transformation이다. 일반적인 벡터에 <span class="math-inline" data-tex-b64="QQ=="></span>를 곱하면 크기와 방향이 모두 변한다.

그러나 일부 특별한 방향의 벡터는 행렬을 곱해도 같은 직선 위에 남는다. 길이만 일정한 비율로 늘어나거나 줄어들며, 비율이 음수이면 반대 방향을 향한다.

이처럼 방향이 보존되는 nonzero vector를 Eigenvector라고 하고, 그때의 비율을 Eigenvalue라고 한다.

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0sXHFxdWFkIFxtYXRoYmZ7eH1cbmVxXG1hdGhiZnswfQ=="></div>

Eigenvalue와 Eigenvector는 복잡한 Linear Transformation 안에서 단순한 크기 변화로 작용하는 특별한 방향을 찾는 개념이다.

## 기하학적 의미

<span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0="></span>이면 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH0="></span>와 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>는 같은 직선 위에 있다.

- <span class="math-inline" data-tex-b64="XGxhbWJkYT4x"></span>: 같은 방향으로 길이가 늘어난다.
- <span class="math-inline" data-tex-b64="MDxcbGFtYmRhPDE="></span>: 같은 방향으로 길이가 줄어든다.
- <span class="math-inline" data-tex-b64="XGxhbWJkYTww"></span>: 방향이 반대로 바뀌며 크기가 변한다.
- <span class="math-inline" data-tex-b64="XGxhbWJkYT0w"></span>: nonzero vector가 zero vector로 보내진다.
- <span class="math-inline" data-tex-b64="XGxhbWJkYT0x"></span>: 벡터가 변하지 않는다.

Eigenvector는 행렬이 특별하게 취급하는 방향이고, Eigenvalue는 그 방향에서의 확대·축소 비율이다.

## Zero Vector가 제외되는 이유

zero vector는 모든 <span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>에 대해

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7MH09XG1hdGhiZnswfT1cbGFtYmRhXG1hdGhiZnswfQ=="></div>

을 만족한다. 이를 Eigenvector로 허용하면 모든 scalar가 Eigenvalue가 되어 행렬의 특성을 구분할 수 없다. 따라서 Eigenvector는 반드시 nonzero vector여야 한다.

다만 Eigenvalue는 0일 수 있다. 이 경우 어떤 nonzero vector가

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></div>

을 만족하므로 <span class="math-inline" data-tex-b64="TihBKQ=="></span>가 nontrivial하다. 따라서

<div class="math-display" data-tex-b64="MFx0ZXh0e+ydtCBFaWdlbnZhbHVlfQpccXVhZFxMb25nbGVmdHJpZ2h0YXJyb3dccXVhZApcZGV0KEEpPTAKXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQKQVx0ZXh0e+qwgCBub24taW52ZXJ0aWJsZX0="></div>

이다.

## Characteristic Equation

Eigenvalue를 구하기 위해 정의식을 정리한다.

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0KXHF1YWRcTG9uZ2xlZnRyaWdodGFycm93XHF1YWQKKEEtXGxhbWJkYSBJKVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></div>

Eigenvector는 nonzero이므로 이 동차연립방정식은 nontrivial solution을 가져야 한다. 따라서 <span class="math-inline" data-tex-b64="QS1cbGFtYmRhIEk="></span>는 invertible하지 않아야 한다.

<div class="math-display" data-tex-b64="XGRldChBLVxsYW1iZGEgSSk9MA=="></div>

이를 Characteristic Equation이라고 하고

<div class="math-display" data-tex-b64="cF9BKFxsYW1iZGEpPVxkZXQoQS1cbGFtYmRhIEkp"></div>

를 Characteristic Polynomial이라고 한다. Characteristic Polynomial의 root가 Eigenvalue이다.

## 계산 과정

1. <span class="math-inline" data-tex-b64="QS1cbGFtYmRhIEk="></span>를 만든다.
2. <span class="math-inline" data-tex-b64="XGRldChBLVxsYW1iZGEgSSk9MA=="></span>을 풀어 Eigenvalue를 구한다.
3. 각 Eigenvalue에 대해 <span class="math-inline" data-tex-b64="KEEtXGxhbWJkYSBJKVxtYXRoYmZ7eH09XG1hdGhiZnswfQ=="></span>을 푼다.
4. Null Space의 Basis를 구한다. 이 Basis vector들이 기본 Eigenvector가 된다.

## 2×2 예제

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjQmLTVcXDImLTMKXGVuZHtibWF0cml4fQ=="></div>

### Eigenvalue

<div class="math-display" data-tex-b64="QS1cbGFtYmRhIEk9ClxiZWdpbntibWF0cml4fQo0LVxsYW1iZGEmLTVcXDImLTMtXGxhbWJkYQpcZW5ke2JtYXRyaXh9"></div>

Characteristic Equation은

<div class="math-display" data-tex-b64="KDQtXGxhbWJkYSkoLTMtXGxhbWJkYSkrMTA9MA=="></div>

이고 정리하면

<div class="math-display" data-tex-b64="XGxhbWJkYV4yLVxsYW1iZGEtMj0oXGxhbWJkYS0yKShcbGFtYmRhKzEpPTA="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XGxhbWJkYV8xPS0xLFxxcXVhZCBcbGFtYmRhXzI9Mg=="></div>

이다.

### λ=-1의 Eigenvector

<div class="math-display" data-tex-b64="QStJPQpcYmVnaW57Ym1hdHJpeH0KNSYtNVxcMiYtMgpcZW5ke2JtYXRyaXh9"></div>

이므로 <span class="math-inline" data-tex-b64="eD15"></span>이다. 따라서

<div class="math-display" data-tex-b64="RV97LTF9Cj0KXG9wZXJhdG9ybmFtZXtzcGFufQpcbGVmdFx7ClxiZWdpbntibWF0cml4fTFcXDFcZW5ke2JtYXRyaXh9ClxyaWdodFx9"></div>

이다.

### λ=2의 Eigenvector

<div class="math-display" data-tex-b64="QS0yST0KXGJlZ2lue2JtYXRyaXh9CjImLTVcXDImLTUKXGVuZHtibWF0cml4fQ=="></div>

이므로 <span class="math-inline" data-tex-b64="MngtNXk9MA=="></span>이다. 따라서

<div class="math-display" data-tex-b64="RV8yCj0KXG9wZXJhdG9ybmFtZXtzcGFufQpcbGVmdFx7ClxiZWdpbntibWF0cml4fTVcXDJcZW5ke2JtYXRyaXh9ClxyaWdodFx9"></div>

이다.

## Eigenspace

Eigenvalue <span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>에 대응하는 모든 Eigenvector와 zero vector를 모은 공간이 Eigenspace이다.

<div class="math-display" data-tex-b64="RV9cbGFtYmRhPU4oQS1cbGFtYmRhIEkp"></div>

Eigenspace는 하나의 벡터가 아니라 해당 Eigenvalue에 대응하는 모든 방향을 포함하는 Subspace이다. Eigenvector의 nonzero Scalar Multiple도 같은 Eigenvalue의 Eigenvector이다.

## Algebraic Multiplicity

Characteristic Polynomial에서 Eigenvalue가 root로 반복되는 횟수를 Algebraic Multiplicity라고 한다.

<div class="math-display" data-tex-b64="cF9BKFxsYW1iZGEpPShcbGFtYmRhLTEpXjIoXGxhbWJkYS0yKQ=="></div>

이면 <span class="math-inline" data-tex-b64="XGxhbWJkYT0x"></span>의 Algebraic Multiplicity는 2이고 <span class="math-inline" data-tex-b64="XGxhbWJkYT0y"></span>의 Algebraic Multiplicity는 1이다.

<span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> 행렬의 Characteristic Polynomial은 <span class="math-inline" data-tex-b64="bg=="></span>차이므로 복소수 범위에서 multiplicity를 포함해 세면 Eigenvalue는 총 <span class="math-inline" data-tex-b64="bg=="></span>개이다. 실수 행렬의 Eigenvalue가 반드시 실수인 것은 아니다.

## Geometric Multiplicity

Eigenvalue <span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>의 Eigenspace Dimension을 Geometric Multiplicity라고 한다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtHTX0oXGxhbWJkYSk9XGRpbSBOKEEtXGxhbWJkYSBJKQ=="></div>

이는 해당 Eigenvalue에서 Linearly Independent한 Eigenvector를 몇 개 얻을 수 있는지 나타낸다.

항상

<div class="math-display" data-tex-b64="MVxsZVxvcGVyYXRvcm5hbWV7R019KFxsYW1iZGEpXGxlXG9wZXJhdG9ybmFtZXtBTX0oXGxhbWJkYSk="></div>

이다.

## 중복된 Eigenvalue 예제

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjAmMSYwXFwwJjAmMVxcMiYtNSY0ClxlbmR7Ym1hdHJpeH0="></div>

의 Characteristic Polynomial은

<div class="math-display" data-tex-b64="cF9BKFxsYW1iZGEpPS0oXGxhbWJkYS0xKV4yKFxsYW1iZGEtMik="></div>

이다.

<span class="math-inline" data-tex-b64="XGxhbWJkYT0x"></span>에서는

<div class="math-display" data-tex-b64="RV8xPQpcb3BlcmF0b3JuYW1le3NwYW59ClxsZWZ0XHsKXGJlZ2lue2JtYXRyaXh9MVxcMVxcMVxlbmR7Ym1hdHJpeH0KXHJpZ2h0XH0="></div>

이므로 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtBTX0oMSk9Mg=="></span>이지만 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtHTX0oMSk9MQ=="></span>이다.

<span class="math-inline" data-tex-b64="XGxhbWJkYT0y"></span>에서는

<div class="math-display" data-tex-b64="RV8yPQpcb3BlcmF0b3JuYW1le3NwYW59ClxsZWZ0XHsKXGJlZ2lue2JtYXRyaXh9MVxcMlxcNFxlbmR7Ym1hdHJpeH0KXHJpZ2h0XH0="></div>

이다. 전체적으로 Linearly Independent한 Eigenvector를 두 개만 얻으므로 이 <span class="math-inline" data-tex-b64="M1x0aW1lczM="></span> 행렬은 diagonalizable하지 않다.

## 서로 다른 Eigenvalue의 Eigenvector

서로 다른 Eigenvalue에 대응하는 Eigenvector들은 Linearly Independent하다.

두 Eigenvalue <span class="math-inline" data-tex-b64="XGxhbWJkYV8xXG5lcVxsYW1iZGFfMg=="></span>에 대해

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH1fMT1cbGFtYmRhXzFcbWF0aGJme3h9XzEsClxxcXVhZApBXG1hdGhiZnt4fV8yPVxsYW1iZGFfMlxtYXRoYmZ7eH1fMg=="></div>

라고 하자. <span class="math-inline" data-tex-b64="Y18xXG1hdGhiZnt4fV8xK2NfMlxtYXRoYmZ7eH1fMj1cbWF0aGJmezB9"></span>이라고 가정한다.

양변에 <span class="math-inline" data-tex-b64="QQ=="></span>를 곱한 식과 원래 식에 <span class="math-inline" data-tex-b64="XGxhbWJkYV8x"></span>을 곱한 식을 빼면

<div class="math-display" data-tex-b64="Y18yKFxsYW1iZGFfMi1cbGFtYmRhXzEpXG1hdGhiZnt4fV8yPVxtYXRoYmZ7MH0="></div>

이다. <span class="math-inline" data-tex-b64="XGxhbWJkYV8xXG5lcVxsYW1iZGFfMg=="></span>이고 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV8yXG5lcVxtYXRoYmZ7MH0="></span>이므로 <span class="math-inline" data-tex-b64="Y18yPTA="></span>이고, 다시 원래 식에서 <span class="math-inline" data-tex-b64="Y18xPTA="></span>이다.

따라서 서로 다른 Eigenvalue가 <span class="math-inline" data-tex-b64="bg=="></span>개인 <span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> 행렬은 반드시 diagonalizable하다.

## 행렬의 거듭제곱

<span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0="></span>이면

<div class="math-display" data-tex-b64="QV4yXG1hdGhiZnt4fT1BKFxsYW1iZGFcbWF0aGJme3h9KT1cbGFtYmRhXjJcbWF0aGJme3h9"></div>

이고 이를 반복하면

<div class="math-display" data-tex-b64="QV5uXG1hdGhiZnt4fT1cbGFtYmRhXm5cbWF0aGJme3h9"></div>

이다. <span class="math-inline" data-tex-b64="QQ=="></span>가 invertible이면 음의 정수에 대해서도

<div class="math-display" data-tex-b64="QV57LTF9XG1hdGhiZnt4fT1cZnJhY3sxfXtcbGFtYmRhfVxtYXRoYmZ7eH0="></div>

가 성립한다.

앞의 두 Eigenvector가 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Basis를 이루므로 임의의 벡터는

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fT1cYWxwaGFcbWF0aGJme3h9XzErXGJldGFcbWF0aGJme3h9XzI="></div>

로 쓸 수 있다. 그러면

<div class="math-display" data-tex-b64="QV5uXG1hdGhiZnt2fT1cYWxwaGEoLTEpXm5cbWF0aGJme3h9XzErXGJldGEyXm5cbWF0aGJme3h9XzI="></div>

이다. 복잡한 행렬의 거듭제곱이 scalar의 거듭제곱 계산으로 바뀐다.

## Diagonalization

<span class="math-inline" data-tex-b64="QQ=="></span>가 <span class="math-inline" data-tex-b64="bg=="></span>개의 Linearly Independent Eigenvector <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fV8xLFxsZG90cyxcbWF0aGJme3h9X24="></span>을 가진다고 하자.

Eigenvector를 column으로 둔 행렬을

<div class="math-display" data-tex-b64="Uz1bXG1hdGhiZnt4fV8xXCBcbWF0aGJme3h9XzJcIFxjZG90c1wgXG1hdGhiZnt4fV9uXQ=="></div>

라고 하고, Eigenvalue를 대각성분으로 둔 행렬을

<div class="math-display" data-tex-b64="XExhbWJkYT0KXGJlZ2lue2JtYXRyaXh9ClxsYW1iZGFfMSYwJlxjZG90cyYwXFwKMCZcbGFtYmRhXzImXGNkb3RzJjBcXApcdmRvdHMmXHZkb3RzJlxkZG90cyZcdmRvdHNcXAowJjAmXGNkb3RzJlxsYW1iZGFfbgpcZW5ke2JtYXRyaXh9"></div>

라고 한다.

각 column에 대해 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH1faT1cbGFtYmRhX2lcbWF0aGJme3h9X2k="></span>이므로

<div class="math-display" data-tex-b64="QVM9U1xMYW1iZGE="></div>

이다. <span class="math-inline" data-tex-b64="Uw=="></span>는 invertible하므로

<div class="math-display" data-tex-b64="U157LTF9QVM9XExhbWJkYQ=="></div>

또는

<div class="math-display" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></div>

을 얻는다. 이를 Diagonalization이라고 한다.

## Diagonalization의 의미

<span class="math-inline" data-tex-b64="U157LTF9"></span>는 표준좌표를 Eigenvector Basis의 좌표로 바꾸고, <span class="math-inline" data-tex-b64="XExhbWJkYQ=="></span>는 각 Eigenvector 방향을 해당 Eigenvalue만큼 확대·축소한다. 마지막 <span class="math-inline" data-tex-b64="Uw=="></span>는 다시 원래 좌표계로 돌아오게 한다.

즉, 복잡한 행렬 <span class="math-inline" data-tex-b64="QQ=="></span>도 Eigenvector Basis에서는 단순한 대각 방향의 scaling으로 보인다.

## Diagonalizable 조건

<span class="math-inline" data-tex-b64="blx0aW1lcyBu"></span> 행렬이 diagonalizable하기 위한 필요충분조건은 <span class="math-inline" data-tex-b64="bg=="></span>개의 Linearly Independent Eigenvector를 가지는 것이다.

- 서로 다른 Eigenvalue가 <span class="math-inline" data-tex-b64="bg=="></span>개이면 반드시 diagonalizable하다.
- 중복된 Eigenvalue가 있어도 각 Eigenvalue에서 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtHTX09XG9wZXJhdG9ybmFtZXtBTX0="></span>이면 diagonalizable할 수 있다.
- 어떤 Eigenvalue에서 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtHTX08XG9wZXJhdG9ybmFtZXtBTX0="></span>이면 필요한 Eigenvector 수가 부족하므로 diagonalizable하지 않다.

## Diagonalization 예제

앞의 행렬에 대해

<div class="math-display" data-tex-b64="Uz0KXGJlZ2lue2JtYXRyaXh9CjEmNVxcMSYyClxlbmR7Ym1hdHJpeH0sClxxcXVhZApcTGFtYmRhPQpcYmVnaW57Ym1hdHJpeH0KLTEmMFxcMCYyClxlbmR7Ym1hdHJpeH0="></div>

이다. 따라서

<div class="math-display" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></div>

이고

<div class="math-display" data-tex-b64="QV5uPVNcTGFtYmRhXm5TXnstMX0="></div>

이다. Diagonal Matrix의 거듭제곱은

<div class="math-display" data-tex-b64="XExhbWJkYV5uPQpcYmVnaW57Ym1hdHJpeH0KKC0xKV5uJjBcXDAmMl5uClxlbmR7Ym1hdHJpeH0="></div>

처럼 대각성분만 거듭제곱하면 된다.

## 정리

- Eigenvector는 행렬을 곱해도 방향이 보존되는 nonzero vector이다.
- Eigenvalue는 그 방향에서의 확대·축소·반전 비율이다.
- Eigenvalue는 <span class="math-inline" data-tex-b64="XGRldChBLVxsYW1iZGEgSSk9MA=="></span>으로 구한다.
- Eigenspace는 <span class="math-inline" data-tex-b64="TihBLVxsYW1iZGEgSSk="></span>이다.
- <span class="math-inline" data-tex-b64="MVxsZVxvcGVyYXRvcm5hbWV7R019KFxsYW1iZGEpXGxlXG9wZXJhdG9ybmFtZXtBTX0oXGxhbWJkYSk="></span>이다.
- <span class="math-inline" data-tex-b64="bg=="></span>개의 Linearly Independent Eigenvector가 있으면 <span class="math-inline" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></span>로 diagonalize할 수 있다.
- Diagonalization을 이용하면 <span class="math-inline" data-tex-b64="QV5uPVNcTGFtYmRhXm5TXnstMX0="></span>로 행렬의 거듭제곱을 단순하게 계산할 수 있다.

## 확인 문제

### 1

다음 행렬의 Eigenvalue와 각 Eigenspace의 Basis를 구한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjImMVxcMSYyClxlbmR7Ym1hdHJpeH0="></div>

### 2

다음 행렬이 diagonalizable한지 판단한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMVxcMCYxClxlbmR7Ym1hdHJpeH0="></div>

### 3

다음 행렬과 벡터에 대해 <span class="math-inline" data-tex-b64="QV57MTB9XG1hdGhiZnt2fQ=="></span>를 구한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjQmLTVcXDImLTMKXGVuZHtibWF0cml4fSwKXHFxdWFkClxtYXRoYmZ7dn09ClxiZWdpbntibWF0cml4fTZcXDNcZW5ke2JtYXRyaXh9"></div>

## 풀이

### 1번

<div class="math-display" data-tex-b64="XGRldChBLVxsYW1iZGEgSSkKPSgyLVxsYW1iZGEpXjItMQo9KFxsYW1iZGEtMSkoXGxhbWJkYS0zKQ=="></div>

이므로 Eigenvalue는 <span class="math-inline" data-tex-b64="MSwz"></span>이다.

<span class="math-inline" data-tex-b64="XGxhbWJkYT0x"></span>일 때 <span class="math-inline" data-tex-b64="eCt5PTA="></span>이므로

<div class="math-display" data-tex-b64="RV8xPVxvcGVyYXRvcm5hbWV7c3Bhbn0KXGxlZnRce1xiZWdpbntibWF0cml4fTFcXC0xXGVuZHtibWF0cml4fVxyaWdodFx9"></div>

이다. <span class="math-inline" data-tex-b64="XGxhbWJkYT0z"></span>일 때 <span class="math-inline" data-tex-b64="eD15"></span>이므로

<div class="math-display" data-tex-b64="RV8zPVxvcGVyYXRvcm5hbWV7c3Bhbn0KXGxlZnRce1xiZWdpbntibWF0cml4fTFcXDFcZW5ke2JtYXRyaXh9XHJpZ2h0XH0="></div>

이다. 서로 다른 두 Eigenvalue에 대응하는 두 Eigenvector가 있으므로 diagonalizable하다.

### 2번

<div class="math-display" data-tex-b64="XGRldChBLVxsYW1iZGEgSSk9KDEtXGxhbWJkYSleMg=="></div>

이므로 유일한 Eigenvalue는 <span class="math-inline" data-tex-b64="XGxhbWJkYT0x"></span>이고 Algebraic Multiplicity는 2이다.

<div class="math-display" data-tex-b64="QS1JPQpcYmVnaW57Ym1hdHJpeH0KMCYxXFwwJjAKXGVuZHtibWF0cml4fQ=="></div>

이므로 <span class="math-inline" data-tex-b64="eT0w"></span>이고

<div class="math-display" data-tex-b64="RV8xPVxvcGVyYXRvcm5hbWV7c3Bhbn0KXGxlZnRce1xiZWdpbntibWF0cml4fTFcXDBcZW5ke2JtYXRyaXh9XHJpZ2h0XH0="></div>

이다. Geometric Multiplicity가 1로 Algebraic Multiplicity보다 작으므로 diagonalizable하지 않다.

### 3번

Eigenvector와 Eigenvalue는

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fV8xPVxiZWdpbntibWF0cml4fTFcXDFcZW5ke2JtYXRyaXh9LFwgXGxhbWJkYV8xPS0xLApccXF1YWQKXG1hdGhiZnt4fV8yPVxiZWdpbntibWF0cml4fTVcXDJcZW5ke2JtYXRyaXh9LFwgXGxhbWJkYV8yPTI="></div>

이다. 벡터를 분해하면

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9NlxcM1xlbmR7Ym1hdHJpeH0KPQpcYmVnaW57Ym1hdHJpeH0xXFwxXGVuZHtibWF0cml4fQorClxiZWdpbntibWF0cml4fTVcXDJcZW5ke2JtYXRyaXh9"></div>

이다. 따라서

<div class="math-display" data-tex-b64="QV57MTB9XG1hdGhiZnt2fQo9KC0xKV57MTB9XG1hdGhiZnt4fV8xKzJeezEwfVxtYXRoYmZ7eH1fMg=="></div>

<div class="math-display" data-tex-b64="PQpcYmVnaW57Ym1hdHJpeH0xXFwxXGVuZHtibWF0cml4fQorMTAyNApcYmVnaW57Ym1hdHJpeH01XFwyXGVuZHtibWF0cml4fQo9ClxiZWdpbntibWF0cml4fTUxMjFcXDIwNDlcZW5ke2JtYXRyaXh9"></div>

이다.

---

**Linear Algebra 정리 시리즈** · 9/19 · [← 이전: Determinant, Adjugate Matrix와 Cramer's Rule](/posts/linear-algebra-08-determinant-adjugate-cramer/) · [다음: Similarity와 Equivalence Relation →](/posts/linear-algebra-10-similarity-equivalence/)
