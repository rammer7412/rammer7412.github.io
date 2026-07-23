---
title: "5. Span, Basis와 Dimension"
description: "vector들이 생성하는 Span과 Basis의 조건을 정리하고, Dimension이 무엇을 세는 값인지 이해한다."
date: "2025-07-18"
category: "선형대수학"
tags: ["linear-algebra", "span", "basis", "dimension", "linear-independence"]
domain: "linear-algebra"
format: "study-note"
series: "linear-algebra"
seriesOrder: 5
featured: false
draft: false
---
Linear Combination을 이해하면 자연스럽게 다음 질문이 생긴다. 주어진 vector들을 조합해 어느 범위까지 만들 수 있는가, 그리고 그 space를 redundancy 없이 표현하려면 몇 개의 vector가 필요한가.

Span은 첫 번째 질문에, Basis와 Dimension은 두 번째 질문에 답한다.

## Span

vector <span class="math-inline" data-tex-b64="XG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2s="></span>의 모든 Linear Combination으로 이루어진 set을 이 vector들의 Span이라고 한다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtzcGFufVx7XG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2tcfQo9ClxsZWZ0XHsKXHN1bV97aT0xfV5rIGNfaVxtYXRoYmZ7dn1faQpcbWlkIGNfaVxpblxtYXRoYmJ7Un0KXHJpZ2h0XH0="></div>

Span은 항상 Subspace이다. zero vector는 모든 coefficient를 <span class="math-inline" data-tex-b64="MA=="></span>으로 두면 얻을 수 있고, Linear Combination끼리 더하거나 scalar multiplication해도 다시 같은 vector들의 Linear Combination이 되기 때문이다.

### R²를 Span하는 예

<div class="math-display" data-tex-b64="XG1hdGhiZntlfV8xPQpcYmVnaW57Ym1hdHJpeH0xXFwwXGVuZHtibWF0cml4fSwKXHFxdWFkClxtYXRoYmZ7ZX1fMj0KXGJlZ2lue2JtYXRyaXh9MFxcMVxlbmR7Ym1hdHJpeH0="></div>

를 생각하면

<div class="math-display" data-tex-b64="Y18xXG1hdGhiZntlfV8xK2NfMlxtYXRoYmZ7ZX1fMgo9ClxiZWdpbntibWF0cml4fWNfMVxcY18yXGVuZHtibWF0cml4fQ=="></div>

이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtzcGFufVx7XG1hdGhiZntlfV8xLFxtYXRoYmZ7ZX1fMlx9Cj1cbWF0aGJie1J9XjI="></div>

이다.

반면 <span class="math-inline" data-tex-b64="KDEsMCk="></span>과 <span class="math-inline" data-tex-b64="KDIsMCk="></span>의 Linear Combination은 항상 <span class="math-inline" data-tex-b64="eA=="></span>축 위에만 놓인다. 서로 다른 두 vector라도 같은 direction을 가리키면 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span> 전체를 Span할 수 없다.

## Basis

Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>의 subset <span class="math-inline" data-tex-b64="Qj1cbGJyYWNlXG1hdGhiZnt2fV8xLFxsZG90cyxcbWF0aGJme3Z9X2tccmJyYWNl"></span>가 다음 두 조건을 만족하면 <span class="math-inline" data-tex-b64="Vg=="></span>의 Basis라고 한다.

1. <span class="math-inline" data-tex-b64="Qg=="></span>는 linearly independent이다.
2. <span class="math-inline" data-tex-b64="Qg=="></span>는 <span class="math-inline" data-tex-b64="Vg=="></span>를 Span한다.

첫 번째 조건은 redundancy가 없다는 뜻이고, 두 번째 조건은 space 전체를 표현할 만큼 충분하다는 뜻이다.

Basis는 다음 두 관점으로 이해할 수 있다.

- <span class="math-inline" data-tex-b64="Vg=="></span>를 Span하는 minimal vector set
- 더 이상 vector를 추가하지 않아도 되는 maximal linearly independent set

<span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>의 Standard Basis는

<div class="math-display" data-tex-b64="XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0xXFwwXGVuZHtibWF0cml4fSwKXGJlZ2lue2JtYXRyaXh9MFxcMVxlbmR7Ym1hdHJpeH0KXHJpZ2h0XH0="></div>

이다. 그러나 Basis가 이것 하나로 정해지는 것은 아니다. 예를 들어

<div class="math-display" data-tex-b64="XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0yXFwwXGVuZHtibWF0cml4fSwKXGJlZ2lue2JtYXRyaXh9MVxcLTFcZW5ke2JtYXRyaXh9ClxyaWdodFx9"></div>

도 두 vector가 linearly independent이고 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>를 Span하므로 Basis이다.

## Dimension

Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>의 Basis에 포함된 vector의 개수를 <span class="math-inline" data-tex-b64="Vg=="></span>의 Dimension이라고 한다.

<div class="math-display" data-tex-b64="XGRpbShWKT1r"></div>

는 <span class="math-inline" data-tex-b64="Vg=="></span>의 모든 Basis가 <span class="math-inline" data-tex-b64="aw=="></span>개의 vector로 이루어진다는 뜻이다.

Basis 자체는 여러 가지일 수 있지만, finite-dimensional Vector Space의 모든 Basis는 같은 개수의 vector를 가진다. 따라서 Dimension은 선택한 Basis와 무관하다.

### Linearly Dependent Vector가 포함된 Spanning Set

<div class="math-display" data-tex-b64="Vz1cb3BlcmF0b3JuYW1le3NwYW59XGxlZnRcewpcYmVnaW57Ym1hdHJpeH0xXFwyXFwzXGVuZHtibWF0cml4fSwKXGJlZ2lue2JtYXRyaXh9MlxcNFxcNlxlbmR7Ym1hdHJpeH0KXHJpZ2h0XH0="></div>

에서 두 번째 vector는 첫 번째 vector의 두 배이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9MlxcNFxcNlxlbmR7Ym1hdHJpeH0KPTIKXGJlZ2lue2JtYXRyaXh9MVxcMlxcM1xlbmR7Ym1hdHJpeH0="></div>

따라서 두 번째 vector를 제거해도 Span이 변하지 않는다. <span class="math-inline" data-tex-b64="Vw=="></span>의 Basis는 하나의 vector만으로 구성할 수 있으므로

<div class="math-display" data-tex-b64="XGRpbShXKT0x"></div>

이다.

## Span과 Column Space

vector들을 matrix의 column으로 모으면 Span과 Linear Independence를 Gaussian Elimination으로 확인할 수 있다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CnwmfCYmfFxcClxtYXRoYmZ7dn1fMSZcbWF0aGJme3Z9XzImXGNkb3RzJlxtYXRoYmZ7dn1fa1xcCnwmfCYmfApcZW5ke2JtYXRyaXh9"></div>

이때 <span class="math-inline" data-tex-b64="QQ=="></span>의 Column Space는

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb2x9KEEpCj1cb3BlcmF0b3JuYW1le3NwYW59XHtcbWF0aGJme3Z9XzEsXGxkb3RzLFxtYXRoYmZ7dn1fa1x9"></div>

이다. row reduction 후 pivot column의 개수는 Column Space의 Dimension, 즉 matrix의 rank와 같다.

단, Basis를 원래 column vector에서 고를 때는 reduced matrix의 column이 아니라 **original matrix에서 pivot position에 대응하는 column**을 선택해야 한다.

## 정리

- Span은 주어진 vector들의 모든 Linear Combination이다.
- Basis는 space를 Span하면서 linearly independent인 vector set이다.
- Dimension은 Basis vector의 개수이다.
- spanning vector가 많아도 linearly dependent한 vector는 새로운 direction을 추가하지 않는다.
- matrix에서는 pivot의 개수로 Column Space의 Dimension과 rank를 확인할 수 있다.

## 확인 문제

### 1

다음 vector들이 Span하는 space <span class="math-inline" data-tex-b64="Vw=="></span>의 Dimension을 구한다.

<div class="math-display" data-tex-b64="XG1hdGhiZnt2fV8xPQpcYmVnaW57Ym1hdHJpeH0xXFwwXFwtMVxlbmR7Ym1hdHJpeH0sClxxcXVhZApcbWF0aGJme3Z9XzI9ClxiZWdpbntibWF0cml4fS0yXFwxXFwxXGVuZHtibWF0cml4fSwKXHFxdWFkClxtYXRoYmZ7dn1fMz0KXGJlZ2lue2JtYXRyaXh9MFxcMFxcLTFcZW5ke2JtYXRyaXh9"></div>

<div class="math-display" data-tex-b64="Vz1cb3BlcmF0b3JuYW1le3NwYW59XHtcbWF0aGJme3Z9XzEsXG1hdGhiZnt2fV8yLFxtYXRoYmZ7dn1fM1x9"></div>

### 2

다음 명제가 참인지 판단한다.

> <span class="math-inline" data-tex-b64="KFxtYXRoYmZ7eH1fMSxcbGRvdHMsXG1hdGhiZnt4fV9uKQ=="></span>이 Vector Space <span class="math-inline" data-tex-b64="Vg=="></span>를 Span하면 <span class="math-inline" data-tex-b64="XGRpbShWKT1u"></span>이다.

## 풀이


### 1번

세 vector를 column으로 둔 matrix는

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmLTImMFxcCjAmMSYwXFwKLTEmMSYtMQpcZW5ke2JtYXRyaXh9"></div>

이다. 이 matrix의 determinant는 <span class="math-inline" data-tex-b64="LTE="></span>로 <span class="math-inline" data-tex-b64="MA=="></span>이 아니므로 세 column vector는 linearly independent이다. 따라서

<div class="math-display" data-tex-b64="XGRpbShXKT0z"></div>

이다.

### 2번

거짓이다. spanning set에 linearly dependent한 vector가 포함될 수 있기 때문이다.

예를 들어 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>에서

<div class="math-display" data-tex-b64="KDEsMCksXHF1YWQoMCwxKSxccXVhZCgxLDAp"></div>

은 <span class="math-inline" data-tex-b64="XG1hdGhiYntSfV4y"></span>를 Span하지만 vector는 세 개이고 Dimension은 <span class="math-inline" data-tex-b64="Mg=="></span>이다. 일반적으로 <span class="math-inline" data-tex-b64="bg=="></span>개의 vector가 <span class="math-inline" data-tex-b64="Vg=="></span>를 Span하면

<div class="math-display" data-tex-b64="XGRpbShWKVxsZSBu"></div>

이다.
