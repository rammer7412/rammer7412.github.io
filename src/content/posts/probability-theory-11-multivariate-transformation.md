---
title: "11. 다변량 Transformation과 Jacobian"
description: "두 Random Variable을 동시에 변환할 때 원상 합산과 Jacobian으로 Joint Distribution을 구하는 방법을 정리한다."
date: "2025-08-14"
category: "확률 이론"
tags: ["probability-theory", "multivariate-transformation", "jacobian", "joint-distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

두 Random Variable을 동시에 변환하면 새로운 좌표계에서 Joint Distribution을 다시 구해야 한다. 이산형에서는 같은 결과로 이어지는 원상의 확률을 합하고, 연속형에서는 넓이의 변화를 Jacobian으로 보정한다.

## 이산 이변량 Transformation

다음처럼 새로운 Random Variable을 정의하자.

<div class="math-display">
\[
U=g_1(X,Y),
\qquad
V=g_2(X,Y)
\]
</div>

특정 <span class="math-inline" data-tex="(u,v)"></span>의 **원상(preimage)**은 변환 전 값 중에서 <span class="math-inline" data-tex="g_1(x,y)=u"></span>와 <span class="math-inline" data-tex="g_2(x,y)=v"></span>를 동시에 만족하는 모든 <span class="math-inline" data-tex="(x,y)"></span>이다. Joint PMF는 그 원상에 있는 확률을 모두 합해 구한다.

<div class="math-display">
\[
p_{U,V}(u,v)
=
\sum_{\substack{(x,y):\,g_1(x,y)=u\\g_2(x,y)=v}}
p_{X,Y}(x,y)
\]
</div>

변환이 일대일이면 각 <span class="math-inline" data-tex="(u,v)"></span>에 대응하는 <span class="math-inline" data-tex="(x,y)"></span>가 하나뿐이므로 역함수 <span class="math-inline" data-tex="x=h_1(u,v)"></span>, <span class="math-inline" data-tex="y=h_2(u,v)"></span>를 바로 대입할 수 있다.

<div class="math-display">
\[
p_{U,V}(u,v)
=
p_{X,Y}\!\left(h_1(u,v),h_2(u,v)\right)
\]
</div>

## Poisson 합 예시

<span class="math-inline" data-tex="X\sim\operatorname{Poisson}(\lambda)"></span>와 <span class="math-inline" data-tex="Y\sim\operatorname{Poisson}(\theta)"></span>가 독립이라고 하자. <span class="math-inline" data-tex="U=X+Y"></span>의 PMF는 가능한 모든 분할을 더해 구한다.

<div class="math-display">
\[
\begin{aligned}
\mathbb{P}(U=u)
&=\sum_{x=0}^{u}\mathbb{P}(X=x)\mathbb{P}(Y=u-x)\\
&=e^{-(\lambda+\theta)}
\sum_{x=0}^{u}\frac{\lambda^x\theta^{u-x}}{x!(u-x)!}\\
&=e^{-(\lambda+\theta)}\frac{(\lambda+\theta)^u}{u!}.
\end{aligned}
\]
</div>

따라서

<div class="math-display">
\[
U\sim\operatorname{Poisson}(\lambda+\theta)
\]
</div>

이다.

## 연속 이변량 Transformation

연속형에서는 한 점의 확률이 아니라 작은 영역의 확률이 보존되어야 한다. 변환이 일대일이고 역함수가

<div class="math-display">
\[
X=h_1(U,V),
\qquad
Y=h_2(U,V)
\]
</div>

라고 하자. 그러면 새로운 Joint PDF는

<div class="math-display">
\[
f_{U,V}(u,v)
=
f_{X,Y}\!\left(h_1(u,v),h_2(u,v)\right)
\left|
\det\frac{\partial(x,y)}{\partial(u,v)}
\right|
\]
</div>

이다.

여기서 Jacobian은 좌표 변환에 따라 작은 넓이가 얼마나 변하는지를 나타내는 행렬이다.

<div class="math-display">
\[
\frac{\partial(x,y)}{\partial(u,v)}
=
\begin{bmatrix}
\dfrac{\partial x}{\partial u}&\dfrac{\partial x}{\partial v}\\[6pt]
\dfrac{\partial y}{\partial u}&\dfrac{\partial y}{\partial v}
\end{bmatrix}
\]
</div>

그 determinant의 절댓값이 밀도 보정계수이다. 부호는 방향의 반전을 나타내지만, 확률의 넓이는 음수가 될 수 없으므로 절댓값을 사용한다.

## 선형 변환 예시

<span class="math-inline" data-tex="X,Y"></span>가 서로 독립인 표준정규 Random Variable이고

<div class="math-display">
\[
U=X+Y,
\qquad
V=X-Y
\]
</div>

라고 하자. 역변환은

<div class="math-display">
\[
X=\frac{U+V}{2},
\qquad
Y=\frac{U-V}{2}
\]
</div>

이다. 역변환의 Jacobian determinant 절댓값은

<div class="math-display">
\[
\left|
\det
\begin{bmatrix}
\frac12&\frac12\\
\frac12&-\frac12
\end{bmatrix}
\right|
=
\frac12
\]
</div>

이다. 또한

<div class="math-display">
\[
x^2+y^2=\frac{u^2+v^2}{2}
\]
</div>

이므로

<div class="math-display">
\[
f_{U,V}(u,v)
=
\frac{1}{4\pi}
\exp\!\left(-\frac{u^2+v^2}{4}\right)
\]
</div>

를 얻는다. 이 식은

<div class="math-display">
\[
f_{U,V}(u,v)
=
\left(\frac{1}{\sqrt{4\pi}}e^{-u^2/4}\right)
\left(\frac{1}{\sqrt{4\pi}}e^{-v^2/4}\right)
\]
</div>

처럼 두 Marginal PDF의 곱으로 분해된다. 따라서

<div class="math-display">
\[
U\sim\mathcal{N}(0,2),
\qquad
V\sim\mathcal{N}(0,2)
\]
</div>

이며 <span class="math-inline" data-tex="U"></span>와 <span class="math-inline" data-tex="V"></span>는 독립이다.

## 변환 문제의 순서

1. 새로운 변수와 역변환을 구한다.
2. 원래 지지집합이 새로운 좌표에서 어떤 영역이 되는지 구한다.
3. 이산형이면 각 원상의 확률을 합한다.
4. 연속형이면 원래 Joint PDF에 역변환을 대입한다.
5. 역변환 Jacobian determinant의 절댓값을 곱한다.
6. 결과를 전체 지지집합에서 적분해 1이 되는지 확인한다.

## 정리

다변량 Transformation은 식의 대입만으로 끝나지 않는다. 이산형에서는 원상을 빠짐없이 합해야 하고, 연속형에서는 지지집합과 Jacobian을 함께 추적해야 한다. Jacobian은 좌표 변환으로 바뀐 넓이를 보정해 확률을 보존한다.

## 연습 문제

1. 서로 독립인 Gamma Random Variable <span class="math-inline" data-tex="X,Y"></span>에 대해 <span class="math-inline" data-tex="U=X+Y"></span>, <span class="math-inline" data-tex="V=X/(X+Y)"></span>의 Joint PDF를 구한다.
2. 서로 독립인 Poisson Random Variable <span class="math-inline" data-tex="X,Y"></span>에 대해 <span class="math-inline" data-tex="U=X+Y"></span>, <span class="math-inline" data-tex="V=Y"></span>의 Joint PMF를 구한다.
3. <span class="math-inline" data-tex="U=XY"></span>, <span class="math-inline" data-tex="V=X/Y"></span>의 역변환과 Jacobian을 구한다.

---

**확률 이론 정리 시리즈** · 11/11 · [← 이전: 10. 다변량 Random Variable과 Joint Distribution](/posts/probability-theory-10-multivariate-random-variable/)
