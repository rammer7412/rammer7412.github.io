---
title: "3. Inner Product, Norm과 Linear Combination"
description: "Inner Product와 여러 Norm을 정리하고, Linear Combination과 Linear Independence의 의미를 연결한다."
date: "2025-06-30"
category: "선형대수학"
tags: ["linear-algebra", "inner-product", "norm", "linear-combination", "linear-independence"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

vector를 공부할 때 Inner Product는 component끼리 곱해 더하는 operation으로 먼저 접하게 된다. 그러나 Inner Product는 length, distance, angle, orthogonality를 하나의 구조로 연결한다. 여기에 Linear Combination과 Linear Independence를 함께 정리하면 이후의 Span과 Basis를 이해하기 쉬워진다.

## Inner Product

<span class="math-inline" data-tex="\mathbf{u},\mathbf{v}\in\mathbb{R}^n"></span>을

<div class="math-display">
\[
\mathbf{u}=(u_1,u_2,\ldots,u_n),
\qquad
\mathbf{v}=(v_1,v_2,\ldots,v_n)
\]
</div>

라고 하자. standard Inner Product는 다음과 같이 정의된다.

<div class="math-display">
\[
\mathbf{u}\cdot\mathbf{v}
=\sum_{i=1}^n u_iv_i
=\mathbf{u}^T\mathbf{v}
\]
</div>

예를 들어 <span class="math-inline" data-tex="\mathbf{u}=(1,2,3)"></span>, <span class="math-inline" data-tex="\mathbf{v}=(4,-1,2)"></span>이면

<div class="math-display">
\[
\mathbf{u}\cdot\mathbf{v}
=1\cdot4+2\cdot(-1)+3\cdot2=8
\]
</div>

이다.

### Inner Product의 기본 성질

real Vector Space의 standard Inner Product는 다음 성질을 만족한다.

<div class="math-display">
\[
\mathbf{u}\cdot\mathbf{v}
=\mathbf{v}\cdot\mathbf{u}
\]
</div>

<div class="math-display">
\[
(c\mathbf{u})\cdot\mathbf{v}
=c(\mathbf{u}\cdot\mathbf{v})
\]
</div>

<div class="math-display">
\[
\mathbf{u}\cdot(\mathbf{v}+\mathbf{w})
=\mathbf{u}\cdot\mathbf{v}+\mathbf{u}\cdot\mathbf{w}
\]
</div>

<div class="math-display">
\[
\mathbf{u}\cdot\mathbf{u}\ge 0
\]
</div>

<div class="math-display">
\[
\mathbf{u}\cdot\mathbf{u}=0
\iff
\mathbf{u}=\mathbf{0}
\]
</div>

특히 <span class="math-inline" data-tex="\mathbf{u}\cdot\mathbf{v}=0"></span>이면 두 vector는 orthogonal이다.

## Norm

Norm은 vector의 magnitude를 측정하는 함수이다. standard Euclidean Norm은 Inner Product로부터 정의된다.

<div class="math-display">
\[
\|\mathbf{u}\|_2
=\sqrt{\mathbf{u}\cdot\mathbf{u}}
=\sqrt{u_1^2+u_2^2+\cdots+u_n^2}
\]
</div>

Norm은 다음 세 조건을 만족해야 한다.

1. <span class="math-inline" data-tex="\lVert\mathbf{u}\rVert\ge0"></span>이고 <span class="math-inline" data-tex="\lVert\mathbf{u}\rVert=0\iff\mathbf{u}=\mathbf{0}"></span>
2. <span class="math-inline" data-tex="\lVert c\mathbf{u}\rVert=|c|\lVert\mathbf{u}\rVert"></span>
3. <span class="math-inline" data-tex="\lVert\mathbf{u}+\mathbf{v}\rVert\le\lVert\mathbf{u}\rVert+\lVert\mathbf{v}\rVert"></span>

세 번째 조건은 triangle inequality이다.

### 여러 종류의 Norm

<span class="math-inline" data-tex="1"></span>-Norm은 component의 absolute value를 모두 더한다.

<div class="math-display">
\[
\|\mathbf{u}\|_1=\sum_{i=1}^n |u_i|
\]
</div>

일반적인 <span class="math-inline" data-tex="p"></span>-Norm은 다음과 같다.

<div class="math-display">
\[
\|\mathbf{u}\|_p
=\left(\sum_{i=1}^n |u_i|^p\right)^{1/p},
\qquad p\ge1
\]
</div>

Infinity Norm은 absolute value가 가장 큰 component를 선택한다.

<div class="math-display">
\[
\|\mathbf{u}\|_\infty
=\max_{1\le i\le n}|u_i|
\]
</div>

같은 vector라도 어떤 Norm을 사용하느냐에 따라 magnitude를 측정하는 방식이 달라진다. optimization과 machine learning에서는 이 차이가 regularization과 distance metric에 직접 연결된다.

## Linear Combination

vector <span class="math-inline" data-tex="\mathbf{v}_1,\ldots,\mathbf{v}_k"></span>와 scalar <span class="math-inline" data-tex="c_1,\ldots,c_k"></span>가 있을 때

<div class="math-display">
\[
c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_k\mathbf{v}_k
\]
</div>

형태의 vector를 주어진 vector들의 Linear Combination이라고 한다.

<span class="math-inline" data-tex="\mathbb{R}^2"></span>의 Standard Basis

<div class="math-display">
\[
\mathbf{e}_1=(1,0),
\qquad
\mathbf{e}_2=(0,1)
\]
</div>

를 사용하면 모든 vector <span class="math-inline" data-tex="(x,y)"></span>를

<div class="math-display">
\[
(x,y)=x\mathbf{e}_1+y\mathbf{e}_2
\]
</div>

로 표현할 수 있다.

Linear Combination은 주어진 vector들로 어떤 space를 만들 수 있는지를 설명한다.

## Linear Independence

vector set <span class="math-inline" data-tex="\lbrace\mathbf{v}_1,\ldots,\mathbf{v}_k\rbrace"></span>가 다음 조건을 만족하면 linearly independent이다.

<div class="math-display">
\[
c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k=\mathbf{0}
\implies
c_1=\cdots=c_k=0
\]
</div>

zero vector를 만드는 coefficient combination이 trivial solution 하나뿐이라는 뜻이다.

반대로 <span class="math-inline" data-tex="0"></span>이 아닌 coefficient를 포함하는 combination으로 zero vector를 만들 수 있다면 linearly dependent이다. 이 경우 어떤 vector 하나가 나머지 vector들의 Linear Combination으로 표현된다.

예를 들어

<div class="math-display">
\[
\mathbf{v}_1=(1,2),
\qquad
\mathbf{v}_2=(2,4)
\]
</div>

에 대해

<div class="math-display">
\[
2\mathbf{v}_1-\mathbf{v}_2=\mathbf{0}
\]
</div>

이므로 두 vector는 linearly dependent이다.

## Linear Independence와 표현의 유일성

linearly independent인 vector들로 어떤 vector를 표현할 수 있다면 그 Linear Combination의 coefficient는 unique하다.

같은 vector <span class="math-inline" data-tex="\mathbf{x}"></span>가

<div class="math-display">
\[
\mathbf{x}=c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k
\]
</div>

와

<div class="math-display">
\[
\mathbf{x}=d_1\mathbf{v}_1+\cdots+d_k\mathbf{v}_k
\]
</div>

로 표현된다고 하자. 두 식을 빼면

<div class="math-display">
\[
(c_1-d_1)\mathbf{v}_1+\cdots+(c_k-d_k)\mathbf{v}_k=\mathbf{0}
\]
</div>

이다. vector들이 linearly independent이므로 모든 <span class="math-inline" data-tex="i"></span>에 대해 <span class="math-inline" data-tex="c_i-d_i=0"></span>이고, 따라서 <span class="math-inline" data-tex="c_i=d_i"></span>이다.

이 성질이 하나의 Basis에 대한 coordinate를 unique하게 정의할 수 있는 이유이다.

## 정리

- Inner Product는 두 vector의 관계를 하나의 scalar로 나타낸다.
- Norm은 vector의 magnitude를 정의한다.
- Linear Combination은 주어진 vector들로 만들 수 있는 vector를 표현한다.
- Linear Independence는 표현에 redundancy가 없는 상태를 뜻한다.
- linearly independent인 vector를 이용한 표현의 coefficient는 unique하다.

## 확인 문제

1. <span class="math-inline" data-tex="\mathbf{u}=(3,-4,1)"></span>의 <span class="math-inline" data-tex="1"></span>-Norm, <span class="math-inline" data-tex="2"></span>-Norm, Infinity Norm을 계산한다.
2. <span class="math-inline" data-tex="\mathbf{v}_1=(1,0,1)"></span>, <span class="math-inline" data-tex="\mathbf{v}_2=(0,1,1)"></span>, <span class="math-inline" data-tex="\mathbf{v}_3=(1,1,2)"></span>가 linearly independent인지 확인한다.

## 풀이


### 1번

<div class="math-display">
\[
\|\mathbf{u}\|_1=|3|+|-4|+|1|=8
\]
</div>

<div class="math-display">
\[
\|\mathbf{u}\|_2=\sqrt{3^2+(-4)^2+1^2}=\sqrt{26}
\]
</div>

<div class="math-display">
\[
\|\mathbf{u}\|_\infty=4
\]
</div>

### 2번

<div class="math-display">
\[
\mathbf{v}_3=\mathbf{v}_1+\mathbf{v}_2
\]
</div>

이므로

<div class="math-display">
\[
\mathbf{v}_1+\mathbf{v}_2-\mathbf{v}_3=\mathbf{0}
\]
</div>

이라는 nontrivial relation이 존재한다. 따라서 세 vector는 linearly dependent이다.


---

**Linear Algebra 정리 시리즈** · 3/5 · [← 이전: 자주 사용하는 Matrix의 종류](/posts/linear-algebra-02-matrix-types/) · [다음: Gaussian Elimination과 Linear System의 해 →](/posts/linear-algebra-04-gaussian-elimination/)
