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

<div class="math-display" data-tex-b64="VT1nXzEoWCxZKSwKXHFxdWFkClY9Z18yKFgsWSk="></div>

특정 <span class="math-inline" data-tex-b64="KHUsdik="></span>의 <strong>원상(preimage)</strong>은 변환 전 값 중에서 <span class="math-inline" data-tex-b64="Z18xKHgseSk9dQ=="></span>와 <span class="math-inline" data-tex-b64="Z18yKHgseSk9dg=="></span>를 동시에 만족하는 모든 <span class="math-inline" data-tex-b64="KHgseSk="></span>이다. Joint PMF는 그 원상에 있는 확률을 모두 합해 구한다.

<div class="math-display" data-tex-b64="cF97VSxWfSh1LHYpCj0KXHN1bV97XHN1YnN0YWNreyh4LHkpOlwsZ18xKHgseSk9dVxcZ18yKHgseSk9dn19CnBfe1gsWX0oeCx5KQ=="></div>

변환이 일대일이면 각 <span class="math-inline" data-tex-b64="KHUsdik="></span>에 대응하는 <span class="math-inline" data-tex-b64="KHgseSk="></span>가 하나뿐이므로 역함수 <span class="math-inline" data-tex-b64="eD1oXzEodSx2KQ=="></span>, <span class="math-inline" data-tex-b64="eT1oXzIodSx2KQ=="></span>를 바로 대입할 수 있다.

<div class="math-display" data-tex-b64="cF97VSxWfSh1LHYpCj0KcF97WCxZfVwhXGxlZnQoaF8xKHUsdiksaF8yKHUsdilccmlnaHQp"></div>

## Poisson 합 예시

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGEp"></span>와 <span class="math-inline" data-tex-b64="WVxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFx0aGV0YSk="></span>가 독립이라고 하자. <span class="math-inline" data-tex-b64="VT1YK1k="></span>의 PMF는 가능한 모든 분할을 더해 구한다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH0oVT11KQomPVxzdW1fe3g9MH1ee3V9XG1hdGhiYntQfShYPXgpXG1hdGhiYntQfShZPXUteClcXAomPWVeey0oXGxhbWJkYStcdGhldGEpfQpcc3VtX3t4PTB9Xnt1fVxmcmFje1xsYW1iZGFeeFx0aGV0YV57dS14fX17eCEodS14KSF9XFwKJj1lXnstKFxsYW1iZGErXHRoZXRhKX1cZnJhY3soXGxhbWJkYStcdGhldGEpXnV9e3UhfS4KXGVuZHthbGlnbmVkfQ=="></div>

따라서

<div class="math-display" data-tex-b64="VVxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGErXHRoZXRhKQ=="></div>

이다.

## 연속 이변량 Transformation

연속형에서는 한 점의 확률이 아니라 작은 영역의 확률이 보존되어야 한다. 변환이 일대일이고 역함수가

<div class="math-display" data-tex-b64="WD1oXzEoVSxWKSwKXHFxdWFkClk9aF8yKFUsVik="></div>

라고 하자. 그러면 새로운 Joint PDF는

<div class="math-display" data-tex-b64="Zl97VSxWfSh1LHYpCj0KZl97WCxZfVwhXGxlZnQoaF8xKHUsdiksaF8yKHUsdilccmlnaHQpClxsZWZ0fApcZGV0XGZyYWN7XHBhcnRpYWwoeCx5KX17XHBhcnRpYWwodSx2KX0KXHJpZ2h0fA=="></div>

이다.

여기서 Jacobian은 좌표 변환에 따라 작은 넓이가 얼마나 변하는지를 나타내는 행렬이다.

<div class="math-display" data-tex-b64="XGZyYWN7XHBhcnRpYWwoeCx5KX17XHBhcnRpYWwodSx2KX0KPQpcYmVnaW57Ym1hdHJpeH0KXGRmcmFje1xwYXJ0aWFsIHh9e1xwYXJ0aWFsIHV9JlxkZnJhY3tccGFydGlhbCB4fXtccGFydGlhbCB2fVxcWzZwdF0KXGRmcmFje1xwYXJ0aWFsIHl9e1xwYXJ0aWFsIHV9JlxkZnJhY3tccGFydGlhbCB5fXtccGFydGlhbCB2fQpcZW5ke2JtYXRyaXh9"></div>

그 determinant의 절댓값이 밀도 보정계수이다. 부호는 방향의 반전을 나타내지만, 확률의 넓이는 음수가 될 수 없으므로 절댓값을 사용한다.

## 선형 변환 예시

<span class="math-inline" data-tex-b64="WCxZ"></span>가 서로 독립인 표준정규 Random Variable이고

<div class="math-display" data-tex-b64="VT1YK1ksClxxcXVhZApWPVgtWQ=="></div>

라고 하자. 역변환은

<div class="math-display" data-tex-b64="WD1cZnJhY3tVK1Z9ezJ9LApccXF1YWQKWT1cZnJhY3tVLVZ9ezJ9"></div>

이다. 역변환의 Jacobian determinant 절댓값은

<div class="math-display" data-tex-b64="XGxlZnR8ClxkZXQKXGJlZ2lue2JtYXRyaXh9ClxmcmFjMTImXGZyYWMxMlxcClxmcmFjMTImLVxmcmFjMTIKXGVuZHtibWF0cml4fQpccmlnaHR8Cj0KXGZyYWMxMg=="></div>

이다. 또한

<div class="math-display" data-tex-b64="eF4yK3leMj1cZnJhY3t1XjIrdl4yfXsyfQ=="></div>

이므로

<div class="math-display" data-tex-b64="Zl97VSxWfSh1LHYpCj0KXGZyYWN7MX17NFxwaX0KXGV4cFwhXGxlZnQoLVxmcmFje3VeMit2XjJ9ezR9XHJpZ2h0KQ=="></div>

를 얻는다. 이 식은

<div class="math-display" data-tex-b64="Zl97VSxWfSh1LHYpCj0KXGxlZnQoXGZyYWN7MX17XHNxcnR7NFxwaX19ZV57LXVeMi80fVxyaWdodCkKXGxlZnQoXGZyYWN7MX17XHNxcnR7NFxwaX19ZV57LXZeMi80fVxyaWdodCk="></div>

처럼 두 Marginal PDF의 곱으로 분해된다. 따라서

<div class="math-display" data-tex-b64="VVxzaW1cbWF0aGNhbHtOfSgwLDIpLApccXF1YWQKVlxzaW1cbWF0aGNhbHtOfSgwLDIp"></div>

이며 <span class="math-inline" data-tex-b64="VQ=="></span>와 <span class="math-inline" data-tex-b64="Vg=="></span>는 독립이다.

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

1. 서로 독립인 <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0dhbW1hfShcYWxwaGEsXGxhbWJkYSk="></span>, <span class="math-inline" data-tex-b64="WVxzaW1cb3BlcmF0b3JuYW1le0dhbW1hfShcYmV0YSxcbGFtYmRhKQ=="></span>에 대해 <span class="math-inline" data-tex-b64="VT1YK1k="></span>, <span class="math-inline" data-tex-b64="Vj1YLyhYK1kp"></span>의 Joint PDF를 구한다.
2. 서로 독립인 Poisson Random Variable <span class="math-inline" data-tex-b64="WCxZ"></span>에 대해 <span class="math-inline" data-tex-b64="VT1YK1k="></span>, <span class="math-inline" data-tex-b64="Vj1Z"></span>의 Joint PMF를 구한다.
3. <span class="math-inline" data-tex-b64="VT1YWQ=="></span>, <span class="math-inline" data-tex-b64="Vj1YL1k="></span>의 역변환과 Jacobian을 구한다.

## 풀이

### 1번

문제를 명확히 하기 위해 서로 독립인

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0dhbW1hfShcYWxwaGEsXGxhbWJkYSksXHFxdWFkIFlcc2ltXG9wZXJhdG9ybmFtZXtHYW1tYX0oXGJldGEsXGxhbWJkYSk="></div>

를 가정한다. 두 변수는 같은 rate <span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>를 가진다. 변환은

<div class="math-display" data-tex-b64="VT1YK1ksXHFxdWFkIFY9XGZyYWN7WH17WCtZfQ=="></div>

이고 역변환은

<div class="math-display" data-tex-b64="WD1VVixccXF1YWQgWT1VKDEtVik="></div>

이다. 지지집합은 <span class="math-inline" data-tex-b64="dT4wLFwgMDx2PDE="></span>이고 Jacobian determinant의 절댓값은

<div class="math-display" data-tex-b64="XGxlZnR8XGRldApcYmVnaW57Ym1hdHJpeH0KdiZ1XFwKMS12Ji11ClxlbmR7Ym1hdHJpeH1ccmlnaHR8PXU="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmZfe1UsVn0odSx2KQomPVxmcmFje1xsYW1iZGFee1xhbHBoYStcYmV0YX19e1xHYW1tYShcYWxwaGEpXEdhbW1hKFxiZXRhKX0KKHV2KV57XGFscGhhLTF9W3UoMS12KV1ee1xiZXRhLTF9ZV57LVxsYW1iZGEgdX1cLHVcXAomPVxmcmFje1xsYW1iZGFee1xhbHBoYStcYmV0YX19e1xHYW1tYShcYWxwaGEpXEdhbW1hKFxiZXRhKX0KdV57XGFscGhhK1xiZXRhLTF9ZV57LVxsYW1iZGEgdX12XntcYWxwaGEtMX0oMS12KV57XGJldGEtMX0sClxlbmR7YWxpZ25lZH0="></div>

이다. 이를 Gamma PDF와 Beta PDF의 곱으로 쓰면

<div class="math-display" data-tex-b64="Zl97VSxWfSh1LHYpCj0KXGZyYWN7XGxhbWJkYV57XGFscGhhK1xiZXRhfX17XEdhbW1hKFxhbHBoYStcYmV0YSl9dV57XGFscGhhK1xiZXRhLTF9ZV57LVxsYW1iZGEgdX0KXGNkb3QKXGZyYWN7XEdhbW1hKFxhbHBoYStcYmV0YSl9e1xHYW1tYShcYWxwaGEpXEdhbW1hKFxiZXRhKX12XntcYWxwaGEtMX0oMS12KV57XGJldGEtMX0="></div>

이므로 <span class="math-inline" data-tex-b64="VVxzaW1cb3BlcmF0b3JuYW1le0dhbW1hfShcYWxwaGErXGJldGEsXGxhbWJkYSk="></span>, <span class="math-inline" data-tex-b64="VlxzaW1cb3BlcmF0b3JuYW1le0JldGF9KFxhbHBoYSxcYmV0YSk="></span>이며 두 변수는 독립이다.

### 2번

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGEp"></span>, <span class="math-inline" data-tex-b64="WVxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFx0aGV0YSk="></span>가 독립이라고 하자. <span class="math-inline" data-tex-b64="VT1YK1k="></span>, <span class="math-inline" data-tex-b64="Vj1Z"></span>이면 역변환은

<div class="math-display" data-tex-b64="WD1VLVYsXHFxdWFkIFk9Vg=="></div>

이다. 가능한 범위는 <span class="math-inline" data-tex-b64="dT0wLDEsMixcbGRvdHM="></span>와 <span class="math-inline" data-tex-b64="dj0wLDEsXGxkb3RzLHU="></span>이다. 따라서

<div class="math-display" data-tex-b64="cF97VSxWfSh1LHYpCj1lXnstKFxsYW1iZGErXHRoZXRhKX0KXGZyYWN7XGxhbWJkYV57dS12fX17KHUtdikhfQpcZnJhY3tcdGhldGFedn17diF9LApccXF1YWQgMFxsZSB2XGxlIHU="></div>

이다.

### 3번

<span class="math-inline" data-tex-b64="WD4wLFwgWT4w"></span>을 가정한다. <span class="math-inline" data-tex-b64="VT1YWQ=="></span>, <span class="math-inline" data-tex-b64="Vj1YL1k="></span>에서

<div class="math-display" data-tex-b64="WF4yPVVWLFxxcXVhZCBZXjI9XGZyYWN7VX17Vn0="></div>

이므로 역변환은

<div class="math-display" data-tex-b64="WD1cc3FydHtVVn0sXHFxdWFkIFk9XHNxcnR7XGZyYWN7VX17Vn19LFxxcXVhZCB1PjAsXCB2PjA="></div>

이다. Jacobian은

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxsZWZ0fFxkZXRcZnJhY3tccGFydGlhbCh4LHkpfXtccGFydGlhbCh1LHYpfVxyaWdodHwKJj1cbGVmdHxcZGV0ClxiZWdpbntibWF0cml4fQpcZGZyYWN7eH17MnV9JlxkZnJhY3t4fXsydn1cXFs2cHRdClxkZnJhY3t5fXsydX0mLVxkZnJhY3t5fXsydn0KXGVuZHtibWF0cml4fVxyaWdodHxcXAomPVxmcmFjezF9ezJ2fS4KXGVuZHthbGlnbmVkfQ=="></div>

이다. <span class="math-inline" data-tex-b64="WA=="></span>와 <span class="math-inline" data-tex-b64="WQ=="></span>가 양수가 아니라면 부호에 따라 역변환의 가지를 추가로 나누어야 한다.

---

**확률 이론 정리 시리즈** · 11/11 · [← 이전: 10. 다변량 Random Variable과 Joint Distribution](/posts/probability-theory-10-multivariate-random-variable/)
