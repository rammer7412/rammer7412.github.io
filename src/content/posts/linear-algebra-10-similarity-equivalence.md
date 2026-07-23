---
title: "10. Similarity와 Equivalence Relation"
description: "Similarity를 basis change의 관점에서 해석하고, 이 관계가 equivalence relation을 이루는 이유와 보존되는 성질을 정리한다."
date: "2025-07-23"
category: "선형대수학"
tags: ["linear-algebra", "similarity", "equivalence-relation", "basis-change", "diagonalization"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

두 행렬의 성분이 서로 달라도 같은 Linear Transformation을 서로 다른 Basis에서 표현한 것일 수 있다. 이 관계를 설명하는 개념이 Similarity이다.

정사각행렬 <span class="math-inline" data-tex-b64="QSxCXGluXG1hdGhiYntGfV57blx0aW1lcyBufQ=="></span>에 대해 어떤 invertible matrix <span class="math-inline" data-tex-b64="UA=="></span>가 존재하여

<div class="math-display" data-tex-b64="Qj1QXnstMX1BUA=="></div>

를 만족하면 <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="Qg=="></span>는 similar하다고 한다.

<div class="math-display" data-tex-b64="QVxzaW0gQg=="></div>

Similarity는 단순히 두 행렬이 같은 Eigenvalue를 가진다는 뜻보다 강하다. 두 행렬이 **동일한 Linear Transformation을 서로 다른 좌표계에서 나타낸 것**이라는 의미이다.

## Basis Change에서 Similarity가 나오는 과정

새로운 Basis의 벡터들을 column으로 가지는 행렬을

<div class="math-display" data-tex-b64="UD1cYmVnaW57Ym1hdHJpeH1cbWF0aGJme3B9XzEmXG1hdGhiZntwfV8yJlxjZG90cyZcbWF0aGJme3B9X25cZW5ke2JtYXRyaXh9"></div>

라고 하자. 새로운 Basis에서의 좌표가 <span class="math-inline" data-tex-b64="W1xtYXRoYmZ7eH1dX3tcbWF0aGNhbCBCfQ=="></span>라면 표준좌표는

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT1QW1xtYXRoYmZ7eH1dX3tcbWF0aGNhbCBCfQ=="></div>

이다.

표준좌표에서 Linear Transformation의 행렬이 <span class="math-inline" data-tex-b64="QQ=="></span>라면 변환 결과는

<div class="math-display" data-tex-b64="QVxtYXRoYmZ7eH09QVBbXG1hdGhiZnt4fV1fe1xtYXRoY2FsIEJ9"></div>

이다. 이 결과를 다시 새로운 Basis의 좌표로 바꾸려면 <span class="math-inline" data-tex-b64="UF57LTF9"></span>를 곱한다.

<div class="math-display" data-tex-b64="W0FcbWF0aGJme3h9XV97XG1hdGhjYWwgQn09UF57LTF9QVBbXG1hdGhiZnt4fV1fe1xtYXRoY2FsIEJ9"></div>

따라서 새로운 Basis에서 같은 변환을 나타내는 행렬은

<div class="math-display" data-tex-b64="Qj1QXnstMX1BUA=="></div>

이다.

## Similarity가 Equivalence Relation인 이유

집합 위의 relation이 Equivalence Relation이 되려면 Reflexivity, Symmetry, Transitivity를 만족해야 한다.

### Reflexivity

모든 행렬은 자기 자신과 similar하다.

<div class="math-display" data-tex-b64="QT1JXnstMX1BSQ=="></div>

따라서

<div class="math-display" data-tex-b64="QVxzaW0gQQ=="></div>

이다.

### Symmetry

<span class="math-inline" data-tex-b64="QVxzaW0gQg=="></span>라고 하자. 그러면

<div class="math-display" data-tex-b64="Qj1QXnstMX1BUA=="></div>

인 invertible matrix <span class="math-inline" data-tex-b64="UA=="></span>가 존재한다. 이를 <span class="math-inline" data-tex-b64="QQ=="></span>에 대해 정리하면

<div class="math-display" data-tex-b64="QT1QQlBeey0xfQ=="></div>

이다. <span class="math-inline" data-tex-b64="UT1QXnstMX0="></span>로 두면

<div class="math-display" data-tex-b64="QT1RXnstMX1CUQ=="></div>

이므로 <span class="math-inline" data-tex-b64="QlxzaW0gQQ=="></span>이다.

### Transitivity

<span class="math-inline" data-tex-b64="QVxzaW0gQg=="></span>, <span class="math-inline" data-tex-b64="QlxzaW0gQw=="></span>라고 하자.

<div class="math-display" data-tex-b64="Qj1QXnstMX1BUCxccXF1YWQgQz1RXnstMX1CUQ=="></div>

두 번째 식에 첫 번째 식을 대입하면

<div class="math-display" data-tex-b64="Qz1RXnstMX1QXnstMX1BUFE9KFBRKV57LTF9QShQUSk="></div>

이다. <span class="math-inline" data-tex-b64="UFE="></span>도 invertible하므로 <span class="math-inline" data-tex-b64="QVxzaW0gQw=="></span>이다.

따라서 Similarity는 Equivalence Relation이다. 정사각행렬 전체를 similarity class로 나눌 수 있으며, 같은 class의 행렬들은 동일한 Linear Transformation의 서로 다른 좌표 표현으로 볼 수 있다.

## Similar Matrix가 보존하는 성질

<span class="math-inline" data-tex-b64="Qj1QXnstMX1BUA=="></span>이면 다음 값들이 보존된다.

- Characteristic Polynomial
- Eigenvalue와 Algebraic Multiplicity
- Determinant
- Trace
- Rank
- Minimal Polynomial
- Diagonalizable 여부

### Characteristic Polynomial

<div class="math-display" data-tex-b64="Qi1cbGFtYmRhIEkKPVBeey0xfUFQLVxsYW1iZGEgUF57LTF9SVAKPVBeey0xfShBLVxsYW1iZGEgSSlQ"></div>

따라서

<div class="math-display" data-tex-b64="XGRldChCLVxsYW1iZGEgSSkKPVxkZXQoUF57LTF9KVxkZXQoQS1cbGFtYmRhIEkpXGRldChQKQo9XGRldChBLVxsYW1iZGEgSSk="></div>

이다. 그러므로 <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="Qg=="></span>는 같은 Characteristic Polynomial과 Eigenvalue를 가진다.

### Determinant

<div class="math-display" data-tex-b64="XGRldChCKT1cZGV0KFBeey0xfSlcZGV0KEEpXGRldChQKT1cZGV0KEEp"></div>

이다.

### Trace

Trace에는 cyclic property가 있다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXt0cn0oWFlaKT1cb3BlcmF0b3JuYW1le3RyfShaWFkp"></div>

따라서

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXt0cn0oQikKPVxvcGVyYXRvcm5hbWV7dHJ9KFBeey0xfUFQKQo9XG9wZXJhdG9ybmFtZXt0cn0oQVBQXnstMX0pCj1cb3BlcmF0b3JuYW1le3RyfShBKQ=="></div>

이다.

### Rank

Invertible matrix를 왼쪽이나 오른쪽에 곱해도 Rank는 변하지 않는다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtyYW5rfShQXnstMX1BUCk9XG9wZXJhdG9ybmFtZXtyYW5rfShBKQ=="></div>

이다.

## Eigenvector는 같은 좌표로 유지되지 않는다

Similarity는 Eigenvalue를 보존하지만 Eigenvector의 좌표는 일반적으로 달라진다.

<span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XGxhbWJkYVxtYXRoYmZ7eH0="></span>이고 <span class="math-inline" data-tex-b64="Qj1QXnstMX1BUA=="></span>라면

<div class="math-display" data-tex-b64="QihQXnstMX1cbWF0aGJme3h9KQo9UF57LTF9QVBQXnstMX1cbWF0aGJme3h9Cj1QXnstMX1BXG1hdGhiZnt4fQo9XGxhbWJkYSBQXnstMX1cbWF0aGJme3h9"></div>

이다.

따라서 <span class="math-inline" data-tex-b64="QQ=="></span>의 Eigenvector가 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>라면 <span class="math-inline" data-tex-b64="Qg=="></span>에서 같은 방향을 나타내는 좌표는 <span class="math-inline" data-tex-b64="UF57LTF9XG1hdGhiZnt4fQ=="></span>이다. 실제 기하학적 방향이 바뀐 것이 아니라 좌표 표현이 바뀐 것이다.

## Diagonalization과 Similarity

행렬 <span class="math-inline" data-tex-b64="QQ=="></span>가 diagonalizable하다는 것은 어떤 invertible matrix <span class="math-inline" data-tex-b64="Uw=="></span>와 diagonal matrix <span class="math-inline" data-tex-b64="XExhbWJkYQ=="></span>가 존재하여

<div class="math-display" data-tex-b64="QT1TXExhbWJkYSBTXnstMX0="></div>

로 쓸 수 있다는 뜻이다. 이를 정리하면

<div class="math-display" data-tex-b64="XExhbWJkYT1TXnstMX1BUw=="></div>

이므로 <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="XExhbWJkYQ=="></span>는 similar하다.

Diagonalization은 Similarity를 이용해 같은 Linear Transformation을 가장 단순한 diagonal form으로 표현하는 과정이다.

## 예제

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0xJjFcXDAmMlxlbmR7Ym1hdHJpeH0sXHFxdWFkClA9XGJlZ2lue2JtYXRyaXh9MSYxXFwwJjFcZW5ke2JtYXRyaXh9"></div>

이다. 먼저

<div class="math-display" data-tex-b64="UF57LTF9PVxiZWdpbntibWF0cml4fTEmLTFcXDAmMVxlbmR7Ym1hdHJpeH0="></div>

이고

<div class="math-display" data-tex-b64="Qj1QXnstMX1BUAo9XGJlZ2lue2JtYXRyaXh9MSYwXFwwJjJcZW5ke2JtYXRyaXh9"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="QQ=="></span>는 diagonal matrix <span class="math-inline" data-tex-b64="Qg=="></span>와 similar하다.

두 행렬의 Characteristic Polynomial은

<div class="math-display" data-tex-b64="KDEtXGxhbWJkYSkoMi1cbGFtYmRhKQ=="></div>

로 같으며 Eigenvalue도 <span class="math-inline" data-tex-b64="MSwy"></span>로 같다.

## 정리

- Similarity는 동일한 Linear Transformation의 서로 다른 Basis 표현을 연결한다.
- <span class="math-inline" data-tex-b64="Qj1QXnstMX1BUA=="></span>이면 <span class="math-inline" data-tex-b64="QVxzaW0gQg=="></span>이다.
- Similarity는 Reflexivity, Symmetry, Transitivity를 만족하므로 Equivalence Relation이다.
- Similar matrix는 Characteristic Polynomial, Eigenvalue, Determinant, Trace, Rank를 공유한다.
- Eigenvector의 좌표는 Basis Change에 따라 <span class="math-inline" data-tex-b64="UF57LTF9XG1hdGhiZnt4fQ=="></span>로 변환된다.
- Diagonalization은 행렬을 similar한 diagonal matrix로 바꾸는 과정이다.

## 확인 문제

### 1

Similarity가 Symmetry를 만족함을 식으로 증명한다.

### 2

다음 행렬이 서로 similar한지 판단하고 공통 Eigenvalue를 구한다.

<div class="math-display" data-tex-b64="QT1cYmVnaW57Ym1hdHJpeH0yJjFcXDAmM1xlbmR7Ym1hdHJpeH0sXHFxdWFkCkI9XGJlZ2lue2JtYXRyaXh9MyYwXFwxJjJcZW5ke2JtYXRyaXh9"></div>

## 풀이

### 1번

<span class="math-inline" data-tex-b64="Qj1QXnstMX1BUA=="></span>라면

<div class="math-display" data-tex-b64="QT1QQlBeey0xfT0oUF57LTF9KV57LTF9QihQXnstMX0p"></div>

이다. <span class="math-inline" data-tex-b64="UF57LTF9"></span>가 invertible하므로 <span class="math-inline" data-tex-b64="QlxzaW0gQQ=="></span>이다.

### 2번

두 행렬의 Characteristic Polynomial은 모두

<div class="math-display" data-tex-b64="KDItXGxhbWJkYSkoMy1cbGFtYmRhKQ=="></div>

이다. 서로 다른 Eigenvalue <span class="math-inline" data-tex-b64="Miwz"></span>를 가지므로 둘 다 diagonalizable하며, 둘 다 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtkaWFnfSgyLDMp"></span>와 similar하다. 따라서 <span class="math-inline" data-tex-b64="QVxzaW0gQg=="></span>이다.

---

**Linear Algebra 정리 시리즈** · 10/19 · [← 이전: Eigenvalue, Eigenvector와 Diagonalization](/posts/linear-algebra-09-eigenvalue-diagonalization/) · [다음: Cayley-Hamilton Theorem과 행렬의 거듭제곱 →](/posts/linear-algebra-11-cayley-hamilton/)
