---
title: "6. LU Decomposition과 연립방정식 풀이"
description: "Gaussian Elimination의 소거 과정을 Lower·Upper Triangular Matrix에 저장하고, Forward·Back Substitution으로 연립방정식을 푸는 방법을 정리한다."
date: "2025-07-19"
category: "선형대수학"
tags: ["linear-algebra", "lu-decomposition", "triangular-matrix", "forward-substitution", "back-substitution"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

연립방정식 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></span>를 풀 때 Gaussian Elimination을 적용하면 계수행렬을 Upper Triangular Matrix로 바꿀 수 있다. LU Decomposition은 이 소거 과정을 두 개의 삼각행렬에 저장하는 방법이다.

정사각행렬 <span class="math-inline" data-tex-b64="QQ=="></span>를 다음과 같이 분해한다.

<div class="math-display" data-tex-b64="QT1MVQ=="></div>

여기서 <span class="math-inline" data-tex-b64="TA=="></span>은 Lower Triangular Matrix이고, <span class="math-inline" data-tex-b64="VQ=="></span>는 Upper Triangular Matrix이다.

<div class="math-display" data-tex-b64="TD0KXGJlZ2lue2JtYXRyaXh9CjEmMCYwXFwKXGVsbF97MjF9JjEmMFxcClxlbGxfezMxfSZcZWxsX3szMn0mMQpcZW5ke2JtYXRyaXh9LApccXF1YWQKVT0KXGJlZ2lue2JtYXRyaXh9CnVfezExfSZ1X3sxMn0mdV97MTN9XFwKMCZ1X3syMn0mdV97MjN9XFwKMCYwJnVfezMzfQpcZW5ke2JtYXRyaXh9"></div>

보통 <span class="math-inline" data-tex-b64="TA=="></span>의 대각성분을 모두 1로 둔다. 이러한 행렬을 Unit Lower Triangular Matrix라고 한다.

## LU Decomposition이 필요한 이유

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></div>

에 <span class="math-inline" data-tex-b64="QT1MVQ=="></span>를 대입하면

<div class="math-display" data-tex-b64="TFVcbWF0aGJme3h9PVxtYXRoYmZ7Yn0="></div>

이다. 여기서 새로운 벡터 <span class="math-inline" data-tex-b64="XG1hdGhiZnt5fQ=="></span>를

<div class="math-display" data-tex-b64="VVxtYXRoYmZ7eH09XG1hdGhiZnt5fQ=="></div>

로 두면 원래 문제는 다음 두 문제로 나뉜다.

<div class="math-display" data-tex-b64="TFxtYXRoYmZ7eX09XG1hdGhiZntifSwKXHFxdWFkClVcbWF0aGJme3h9PVxtYXRoYmZ7eX0="></div>

첫 번째 식은 Lower Triangular Matrix이므로 위에서 아래로 값을 구하는 Forward Substitution을 사용한다. 두 번째 식은 Upper Triangular Matrix이므로 아래에서 위로 값을 구하는 Back Substitution을 사용한다.

행렬 <span class="math-inline" data-tex-b64="QQ=="></span>는 같고 우변 <span class="math-inline" data-tex-b64="XG1hdGhiZntifQ=="></span>만 여러 번 바뀌는 문제에서는 <span class="math-inline" data-tex-b64="QQ=="></span>를 한 번만 분해하면 된다. 이후에는 두 번의 삼각행렬 계산만 수행하면 되므로 같은 Gaussian Elimination을 반복할 필요가 없다.

## Gaussian Elimination과 L

다음 행렬을 분해한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjImMSYzXFwKNCYtMSYzXFwKLTImNSY1ClxlbmR7Ym1hdHJpeH0="></div>

첫 번째 열의 아래쪽 원소를 제거한다.

<div class="math-display" data-tex-b64="Ul8yXGxlZnRhcnJvdyBSXzItMlJfMSwKXHFxdWFkClJfM1xsZWZ0YXJyb3cgUl8zK1JfMQ=="></div>

그 결과는 다음과 같다.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjImMSYzXFwKMCYtMyYtM1xcCjAmNiY4ClxlbmR7Ym1hdHJpeH0="></div>

두 번째 열의 아래쪽 원소를 제거한다.

<div class="math-display" data-tex-b64="Ul8zXGxlZnRhcnJvdyBSXzMrMlJfMg=="></div>

따라서

<div class="math-display" data-tex-b64="VT0KXGJlZ2lue2JtYXRyaXh9CjImMSYzXFwKMCYtMyYtM1xcCjAmMCYyClxlbmR7Ym1hdHJpeH0="></div>

이다. 소거 과정에서 사용한 multiplier <span class="math-inline" data-tex-b64="MiwtMSwtMg=="></span>를 대각선 아래에 저장하면

<div class="math-display" data-tex-b64="TD0KXGJlZ2lue2JtYXRyaXh9CjEmMCYwXFwKMiYxJjBcXAotMSYtMiYxClxlbmR7Ym1hdHJpeH0="></div>

을 얻는다. 실제로

<div class="math-display" data-tex-b64="TFU9ClxiZWdpbntibWF0cml4fQoyJjEmM1xcCjQmLTEmM1xcCi0yJjUmNQpcZW5ke2JtYXRyaXh9Cj1B"></div>

이다. Gaussian Elimination에서 제거된 정보가 사라진 것이 아니라 <span class="math-inline" data-tex-b64="TA=="></span>에 저장된 것이다.

## LU Decomposition으로 연립방정식 풀기

다음 문제를 생각한다.

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09ClxiZWdpbntibWF0cml4fQo2XFw2XFw4ClxlbmR7Ym1hdHJpeH0="></div>

먼저

<div class="math-display" data-tex-b64="TFxtYXRoYmZ7eX09ClxiZWdpbntibWF0cml4fQo2XFw2XFw4ClxlbmR7Ym1hdHJpeH0="></div>

을 푼다. Forward Substitution을 적용하면

<div class="math-display" data-tex-b64="eV8xPTYsXHFxdWFkIDJ5XzEreV8yPTYsXHFxdWFkIC15XzEtMnlfMit5XzM9OA=="></div>

이므로

<div class="math-display" data-tex-b64="XG1hdGhiZnt5fT0KXGJlZ2lue2JtYXRyaXh9CjZcXC02XFwyClxlbmR7Ym1hdHJpeH0="></div>

이다. 이제

<div class="math-display" data-tex-b64="VVxtYXRoYmZ7eH09XG1hdGhiZnt5fQ=="></div>

를 Back Substitution으로 풀면

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT0KXGJlZ2lue2JtYXRyaXh9CjFcXDFcXDEKXGVuZHtibWF0cml4fQ=="></div>

을 얻는다.

## 행 교환과 PA=LU

LU Decomposition을 진행하다 보면 pivot이 0이거나 수치적으로 너무 작은 경우가 있다. 이때는 행 교환이 필요하다.

행 교환은 Permutation Matrix <span class="math-inline" data-tex-b64="UA=="></span>로 나타낸다.

<div class="math-display" data-tex-b64="UEE9TFU="></div>

Permutation Matrix는 Identity Matrix의 행을 재배열한 행렬이다. 각 행과 열에 1이 하나씩만 존재하며 다음 성질을 가진다.

<div class="math-display" data-tex-b64="UF57LTF9PVBeVA=="></div>

따라서 실제 수치 계산에서는 단순한 <span class="math-inline" data-tex-b64="QT1MVQ=="></span>보다 pivoting을 포함한 <span class="math-inline" data-tex-b64="UEE9TFU="></span> 형태가 더 일반적이다.

## 계산량

일반적인 Gaussian Elimination 또는 LU factorization에는 대략 <span class="math-inline" data-tex-b64="TyhuXjMp"></span>의 연산이 필요하다. 그러나 분해 이후 Forward·Back Substitution은 각각 <span class="math-inline" data-tex-b64="TyhuXjIp"></span>이다.

따라서 하나의 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해 여러 우변을 풀 때 LU Decomposition의 장점이 커진다.

## 정리

- LU Decomposition은 Gaussian Elimination을 행렬의 곱으로 표현한 것이다.
- <span class="math-inline" data-tex-b64="TA=="></span>에는 소거 과정의 multiplier가 저장되고 <span class="math-inline" data-tex-b64="VQ=="></span>에는 소거 결과가 저장된다.
- <span class="math-inline" data-tex-b64="TFxtYXRoYmZ7eX09XG1hdGhiZntifQ=="></span>는 Forward Substitution으로, <span class="math-inline" data-tex-b64="VVxtYXRoYmZ7eH09XG1hdGhiZnt5fQ=="></span>는 Back Substitution으로 푼다.
- 행 교환이 필요하면 <span class="math-inline" data-tex-b64="UEE9TFU="></span> 형태를 사용한다.
- 같은 계수행렬에 여러 우변이 주어질 때 계산을 크게 줄일 수 있다.

## 확인 문제

### 1

다음 행렬을 LU Decomposition한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMlxcCjMmNwpcZW5ke2JtYXRyaXh9"></div>

### 2

앞에서 구한 <span class="math-inline" data-tex-b64="TCxV"></span>를 이용해 다음 연립방정식을 푼다.

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09ClxiZWdpbntibWF0cml4fQo1XFwxNwpcZW5ke2JtYXRyaXh9"></div>

## 풀이

### 1번

첫 번째 행의 3배를 두 번째 행에서 뺀다.

<div class="math-display" data-tex-b64="Ul8yXGxlZnRhcnJvdyBSXzItM1JfMQ=="></div>

따라서

<div class="math-display" data-tex-b64="VT0KXGJlZ2lue2JtYXRyaXh9CjEmMlxcCjAmMQpcZW5ke2JtYXRyaXh9LApccXF1YWQKTD0KXGJlZ2lue2JtYXRyaXh9CjEmMFxcCjMmMQpcZW5ke2JtYXRyaXh9"></div>

이다. 실제로 <span class="math-inline" data-tex-b64="TFU9QQ=="></span>가 성립한다.

### 2번

먼저

<div class="math-display" data-tex-b64="TFxtYXRoYmZ7eX09ClxiZWdpbntibWF0cml4fQo1XFwxNwpcZW5ke2JtYXRyaXh9"></div>

을 풀면 <span class="math-inline" data-tex-b64="eV8xPTU="></span>, <span class="math-inline" data-tex-b64="M3lfMSt5XzI9MTc="></span>이므로 <span class="math-inline" data-tex-b64="eV8yPTI="></span>이다.

이제

<div class="math-display" data-tex-b64="VVxtYXRoYmZ7eH09ClxiZWdpbntibWF0cml4fQo1XFwyClxlbmR7Ym1hdHJpeH0="></div>

에서 <span class="math-inline" data-tex-b64="eF8yPTI="></span>, <span class="math-inline" data-tex-b64="eF8xKzJ4XzI9NQ=="></span>이므로 <span class="math-inline" data-tex-b64="eF8xPTE="></span>이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT0KXGJlZ2lue2JtYXRyaXh9CjFcXDIKXGVuZHtibWF0cml4fQ=="></div>

이다.

---

**Linear Algebra 정리 시리즈** · 6/19 · [← 이전: Span, Basis와 Dimension](/posts/linear-algebra-05-span-basis-dimension/) · [다음: Rank, Nullity와 기본 부분공간 →](/posts/linear-algebra-07-rank-nullity/)
