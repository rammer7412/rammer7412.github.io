---
title: "4. Gaussian Elimination과 Linear System의 해"
description: "Elementary Row Operation으로 Linear System을 Row Echelon Form으로 바꾸고 solution의 형태를 구분한다."
date: "2025-07-08"
category: "선형대수학"
tags: ["linear-algebra", "gaussian-elimination", "row-echelon-form", "linear-system"]
domain: "linear-algebra"
format: "study-note"
featured: false
draft: false
---

가감법으로 Linear System을 풀 때는 한 equation의 multiple을 다른 equation에 더해 variable을 차례로 제거한다. Gaussian Elimination은 같은 과정을 matrix의 row operation으로 체계화한 방법이다.

계산 결과를 이용하면 solution이 unique한지, 존재하지 않는지, infinitely many인지도 판단할 수 있다.

## Augmented Matrix와 Elementary Row Operation

Linear System

<div class="math-display" data-tex-b64="XGJlZ2lue2Nhc2VzfQp4KzJ5K3o9NlxcCjJ4KzN5KzN6PTE0XFwKeCt5K3o9OApcZW5ke2Nhc2VzfQ=="></div>

은 다음 Augmented Matrix로 표현된다.

<div class="math-display" data-tex-b64="XGxlZnRbClxiZWdpbnthcnJheX17Y2NjfGN9CjEmMiYxJjZcXAoyJjMmMyYxNFxcCjEmMSYxJjgKXGVuZHthcnJheX0KXHJpZ2h0XQ=="></div>

Gaussian Elimination에서는 다음 세 가지 Elementary Row Operation을 사용한다.

1. 두 row를 interchange한다.
2. 한 row에 <span class="math-inline" data-tex-b64="MA=="></span>이 아닌 constant를 곱한다.
3. 한 row에 다른 row의 scalar multiple을 더한다.

이 operation들은 Linear System의 solution set을 바꾸지 않는다.

## Row Echelon Form

matrix가 다음 조건을 만족하면 Row Echelon Form이라고 한다.

1. nonzero row의 leading entry는 위 row의 pivot보다 오른쪽에 있다.
2. 각 pivot 아래의 entry는 모두 <span class="math-inline" data-tex-b64="MA=="></span>이다.
3. zero row는 아래쪽에 놓인다.

예를 들어

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjEmMiYtMSYzXFwKMCYxJjUmLTJcXAowJjAmNCY3ClxlbmR7Ym1hdHJpeH0="></div>

은 Row Echelon Form이다.

## Unique Solution을 구하는 과정

처음 Augmented Matrix에서 첫 번째 column의 pivot 아래를 제거한다.

<div class="math-display" data-tex-b64="Ul8yXGxlZnRhcnJvdyBSXzItMlJfMSwKXHFxdWFkClJfM1xsZWZ0YXJyb3cgUl8zLVJfMQ=="></div>

그러면

<div class="math-display" data-tex-b64="XGxlZnRbClxiZWdpbnthcnJheX17Y2NjfGN9CjEmMiYxJjZcXAowJi0xJjEmMlxcCjAmLTEmMCYyClxlbmR7YXJyYXl9ClxyaWdodF0="></div>

가 된다. 이어서

<div class="math-display" data-tex-b64="Ul8zXGxlZnRhcnJvdyBSXzMtUl8y"></div>

를 적용하면

<div class="math-display" data-tex-b64="XGxlZnRbClxiZWdpbnthcnJheX17Y2NjfGN9CjEmMiYxJjZcXAowJi0xJjEmMlxcCjAmMCYtMSYwClxlbmR7YXJyYXl9ClxyaWdodF0="></div>

이다.

아래 row부터 back substitution하면

<div class="math-display" data-tex-b64="ej0wLApccXF1YWQKeT0tMiwKXHFxdWFkCng9MTA="></div>

을 얻는다. 모든 variable column에 pivot이 하나씩 존재하고 contradiction row가 없으므로 unique solution을 가진다.

## No Solution인 경우

row reduction 결과에 다음과 같은 row가 나타나면 contradiction이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9CjAmMCYwJnwmMgpcZW5ke2JtYXRyaXh9"></div>

이는

<div class="math-display" data-tex-b64="MD0y"></div>

를 의미하므로 solution이 존재하지 않는다.

예를 들어

<div class="math-display" data-tex-b64="XGJlZ2lue2Nhc2VzfQp4K3krej0xXFwKMngrMnkrMno9MlxcCngreSt6PTMKXGVuZHtjYXNlc30="></div>

에서 첫 번째 row를 이용해 두 번째와 세 번째 row를 제거하면

<div class="math-display" data-tex-b64="XGxlZnRbClxiZWdpbnthcnJheX17Y2NjfGN9CjEmMSYxJjFcXAowJjAmMCYwXFwKMCYwJjAmMgpcZW5ke2FycmF5fQpccmlnaHRd"></div>

가 된다. 따라서 이 Linear System은 No Solution이다.

## Infinitely Many Solutions인 경우

contradiction은 없지만 pivot이 없는 variable column이 존재하면 free variable이 생긴다.

<div class="math-display" data-tex-b64="XGJlZ2lue2Nhc2VzfQp4K3krej0yXFwKMngrMnkrMno9NApcZW5ke2Nhc2VzfQ=="></div>

를 row reduction하면

<div class="math-display" data-tex-b64="XGxlZnRbClxiZWdpbnthcnJheX17Y2NjfGN9CjEmMSYxJjJcXAowJjAmMCYwClxlbmR7YXJyYXl9ClxyaWdodF0="></div>

가 된다. <span class="math-inline" data-tex-b64="eT1z"></span>, <span class="math-inline" data-tex-b64="ej10"></span>를 free variable로 두면

<div class="math-display" data-tex-b64="eD0yLXMtdA=="></div>

이므로 solution set은

<div class="math-display" data-tex-b64="XGJlZ2lue2JtYXRyaXh9eFxceVxcelxlbmR7Ym1hdHJpeH0KPQpcYmVnaW57Ym1hdHJpeH0yLXMtdFxcc1xcdFxlbmR7Ym1hdHJpeH0sClxxcXVhZCBzLHRcaW5cbWF0aGJie1J9"></div>

이다.

## Consistency

적어도 하나의 solution이 존재하는 Linear System은 consistent하다고 한다.

| Solution의 형태 | Consistency | Row Reduction 결과 |
| --- | --- | --- |
| Unique Solution | Consistent | 모든 variable column에 pivot이 존재 |
| Infinitely Many Solutions | Consistent | free variable이 존재하고 contradiction은 없음 |
| No Solution | Inconsistent | <span class="math-inline" data-tex-b64="MD1j"></span> 꼴의 contradiction row가 존재 |

Gaussian Elimination은 solution을 계산하는 방법이면서 동시에 Linear System의 structure를 분석하는 방법이다.

## 정리

1. Linear System을 Augmented Matrix로 바꾼다.
2. Elementary Row Operation으로 pivot 아래를 제거한다.
3. contradiction row가 있는지 확인한다.
4. free variable의 존재를 확인한다.
5. 필요한 경우 back substitution으로 solution을 계산한다.

## 확인 문제

### 1

다음 Linear System을 Gaussian Elimination으로 푼다.

<div class="math-display" data-tex-b64="XGJlZ2lue2Nhc2VzfQp4K3krej02XFwKMngrM3krej0xNFxcCngrMnkrM3o9MTQKXGVuZHtjYXNlc30="></div>

### 2

다음 Linear System의 Consistency와 solution의 형태를 판단한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2Nhc2VzfQp4KzJ5KzN6PTRcXAo1eCs2eSs3ej04XFwKOXgrMTB5KzExej0xMgpcZW5ke2Nhc2VzfQ=="></div>

### 3

다음 <span class="math-inline" data-tex-b64="QVxtYXRoYmZ7eH09XG1hdGhiZntifQ=="></span>에서 <span class="math-inline" data-tex-b64="XG1hdGhiZnt4fQ=="></span>를 구한다.

<div class="math-display" data-tex-b64="QT0KXGJlZ2lue2JtYXRyaXh9CjEmMiYzXFwKNCY1JjZcXAo3JjgmMTAKXGVuZHtibWF0cml4fSwKXHFxdWFkClxtYXRoYmZ7Yn09ClxiZWdpbntibWF0cml4fQo2XFwxNVxcMjUKXGVuZHtibWF0cml4fQ=="></div>

## 풀이


### 1번

row reduction 후 solution은

<div class="math-display" data-tex-b64="KHgseSx6KT0oMCw0LDIp"></div>

이다.

### 2번

Coefficient Matrix와 Augmented Matrix의 rank가 모두 <span class="math-inline" data-tex-b64="Mg=="></span>이고 variable은 <span class="math-inline" data-tex-b64="Mw=="></span>개이므로 consistent하며 Infinitely Many Solutions를 가진다. <span class="math-inline" data-tex-b64="ej10"></span>로 두면

<div class="math-display" data-tex-b64="KHgseSx6KT0odC0yLDMtMnQsdCksClxxcXVhZCB0XGluXG1hdGhiYntSfQ=="></div>

이다.

### 3번

row reduction하면

<div class="math-display" data-tex-b64="XG1hdGhiZnt4fT0KXGJlZ2lue2JtYXRyaXh9CjFcXDFcXDEKXGVuZHtibWF0cml4fQ=="></div>

을 얻는다.


---

**Linear Algebra 정리 시리즈** · 4/9 · [← 이전: Inner Product, Norm과 Linear Combination](/posts/linear-algebra-03-inner-product-linear-combination/) · [다음: Span, Basis와 Dimension →](/posts/linear-algebra-05-span-basis-dimension/)
