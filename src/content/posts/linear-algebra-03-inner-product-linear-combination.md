---
title: "선형대수학 3: 내적, 노름과 선형결합"
description: "벡터의 내적과 여러 노름을 정리하고, 선형결합과 선형독립이 어떤 의미인지 연결한다."
date: "2025-06-30"
category: "선형대수학"
tags: ["linear-algebra", "inner-product", "norm", "linear-combination", "linear-independence"]
domain: "math"
format: "study-note"
featured: false
draft: false
---

벡터를 공부할 때 내적은 단순히 성분끼리 곱해 더하는 연산처럼 보인다. 그러나 내적은 길이, 거리, 각도와 직교성을 한 번에 연결하는 구조이다. 여기에 선형결합과 선형독립을 함께 정리하면 이후의 Span과 Basis를 이해하기 쉬워진다.

## 내적(Inner Product)

$\mathbf{u},\mathbf{v}\in\mathbb{R}^n$을

$$
\mathbf{u}=(u_1,u_2,\ldots,u_n),
\qquad
\mathbf{v}=(v_1,v_2,\ldots,v_n)
$$

라고 하자. 표준 내적은 다음과 같이 정의된다.

$$
\mathbf{u}\cdot\mathbf{v}
=\sum_{i=1}^n u_iv_i
=\mathbf{u}^T\mathbf{v}
$$

예를 들어 $\mathbf{u}=(1,2,3)$, $\mathbf{v}=(4,-1,2)$이면

$$
\mathbf{u}\cdot\mathbf{v}
=1\cdot4+2\cdot(-1)+3\cdot2=8
$$

이다.

### 내적의 기본 성질

실수 벡터 공간의 표준 내적은 다음 성질을 만족한다.

$$
\mathbf{u}\cdot\mathbf{v}
=\mathbf{v}\cdot\mathbf{u}
$$

$$
(c\mathbf{u})\cdot\mathbf{v}
=c(\mathbf{u}\cdot\mathbf{v})
$$

$$
\mathbf{u}\cdot(\mathbf{v}+\mathbf{w})
=\mathbf{u}\cdot\mathbf{v}+\mathbf{u}\cdot\mathbf{w}
$$

$$
\mathbf{u}\cdot\mathbf{u}\ge 0
$$

$$
\mathbf{u}\cdot\mathbf{u}=0
\iff
\mathbf{u}=\mathbf{0}
$$

특히 $\mathbf{u}\cdot\mathbf{v}=0$이면 두 벡터는 직교한다고 한다.

## 노름(Norm)

노름은 벡터의 크기를 측정하는 함수이다. 표준 유클리드 노름은 내적으로부터 정의된다.

$$
\|\mathbf{u}\|_2
=\sqrt{\mathbf{u}\cdot\mathbf{u}}
=\sqrt{u_1^2+u_2^2+\cdots+u_n^2}
$$

노름이 되기 위해서는 다음 세 조건을 만족해야 한다.

1. $\|\mathbf{u}\|\ge0$이고 $\|\mathbf{u}\|=0\iff\mathbf{u}=\mathbf{0}$
2. $\|c\mathbf{u}\|=|c|\,\|\mathbf{u}\|$
3. $\|\mathbf{u}+\mathbf{v}\|\le\|\mathbf{u}\|+\|\mathbf{v}\|$

세 번째 조건은 삼각부등식이다.

### 여러 종류의 노름

$1$-노름은 성분의 절댓값을 모두 더한다.

$$
\|\mathbf{u}\|_1=\sum_{i=1}^n |u_i|
$$

일반적인 $p$-노름은 다음과 같다.

$$
\|\mathbf{u}\|_p
=\left(\sum_{i=1}^n |u_i|^p\right)^{1/p},
\qquad p\ge1
$$

무한대 노름은 절댓값이 가장 큰 성분을 선택한다.

$$
\|\mathbf{u}\|_\infty
=\max_{1\le i\le n}|u_i|
$$

같은 벡터라도 어떤 노름을 사용하느냐에 따라 크기를 바라보는 방식이 달라진다. 최적화와 머신러닝에서는 이 차이가 규제 방식과 거리 척도에 직접 연결된다.

## 선형결합(Linear Combination)

벡터 $\mathbf{v}_1,\ldots,\mathbf{v}_k$와 스칼라 $c_1,\ldots,c_k$가 있을 때

$$
c_1\mathbf{v}_1+c_2\mathbf{v}_2+\cdots+c_k\mathbf{v}_k
$$

형태의 벡터를 주어진 벡터들의 선형결합이라고 한다.

$\mathbb{R}^2$의 표준기저

$$
\mathbf{e}_1=(1,0),
\qquad
\mathbf{e}_2=(0,1)
$$

를 사용하면 모든 벡터 $(x,y)$를

$$
(x,y)=x\mathbf{e}_1+y\mathbf{e}_2
$$

로 표현할 수 있다.

선형결합은 단순한 계산 형식이 아니라, **주어진 벡터들로 어떤 공간을 만들 수 있는가**를 설명한다.

## 선형독립(Linear Independence)

벡터 집합 $\{\mathbf{v}_1,\ldots,\mathbf{v}_k\}$가 다음 조건을 만족하면 선형독립이다.

$$
c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k=\mathbf{0}
\implies
c_1=\cdots=c_k=0
$$

즉 영벡터를 만드는 방법이 자명한 계수 조합 하나뿐이다.

반대로 $0$이 아닌 계수 조합으로 영벡터를 만들 수 있다면 선형종속이다. 이는 어떤 벡터 하나가 나머지 벡터들의 선형결합으로 표현된다는 뜻이다.

예를 들어

$$
\mathbf{v}_1=(1,2),
\qquad
\mathbf{v}_2=(2,4)
$$

에 대해

$$
2\mathbf{v}_1-\mathbf{v}_2=\mathbf{0}
$$

이므로 두 벡터는 선형종속이다.

## 선형독립과 표현의 유일성

선형독립인 벡터들로 어떤 벡터를 표현할 수 있다면, 그 선형결합의 계수는 유일하다.

같은 벡터 $\mathbf{x}$가

$$
\mathbf{x}=c_1\mathbf{v}_1+\cdots+c_k\mathbf{v}_k
$$

와

$$
\mathbf{x}=d_1\mathbf{v}_1+\cdots+d_k\mathbf{v}_k
$$

로 표현된다고 하자. 두 식을 빼면

$$
(c_1-d_1)\mathbf{v}_1+\cdots+(c_k-d_k)\mathbf{v}_k=\mathbf{0}
$$

이다. 벡터들이 선형독립이므로 모든 $i$에 대해 $c_i-d_i=0$이고, 따라서 $c_i=d_i$이다.

이 성질은 좌표를 정의할 수 있는 이유이기도 하다.

## 정리

- 내적은 벡터 사이의 관계를 하나의 스칼라로 나타낸다.
- 노름은 내적을 이용해 벡터의 길이를 정의한다.
- 선형결합은 주어진 벡터들로 만들 수 있는 벡터를 표현한다.
- 선형독립은 표현에 중복이 없는 상태이다.
- 선형독립인 벡터를 이용한 표현의 계수는 유일하다.

## 확인 문제

1. $\mathbf{u}=(3,-4,1)$의 $1$-노름, $2$-노름, 무한대 노름을 계산한다.
2. $\mathbf{v}_1=(1,0,1)$, $\mathbf{v}_2=(0,1,1)$, $\mathbf{v}_3=(1,1,2)$가 선형독립인지 확인한다.

<details>
<summary>정답 보기</summary>

### 1번

$$
\|\mathbf{u}\|_1=|3|+|-4|+|1|=8
$$

$$
\|\mathbf{u}\|_2=\sqrt{3^2+(-4)^2+1^2}=\sqrt{26}
$$

$$
\|\mathbf{u}\|_\infty=4
$$

### 2번

$$
\mathbf{v}_3=\mathbf{v}_1+\mathbf{v}_2
$$

이므로

$$
\mathbf{v}_1+\mathbf{v}_2-\mathbf{v}_3=\mathbf{0}
$$

이라는 자명하지 않은 관계가 존재한다. 따라서 선형종속이다.

</details>

---

**선형대수학 정리 시리즈** · 3/5 · [← 이전: 자주 사용하는 행렬의 종류](/posts/linear-algebra-02-matrix-types/) · [다음: 가우스 소거법과 연립방정식의 해 →](/posts/linear-algebra-04-gaussian-elimination/)
