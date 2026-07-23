---
title: "8. Moment와 MGF"
description: "Moment의 의미와 Moment Generating Function의 정의, 미분을 통한 Moment 계산, 독립합의 성질을 정리한다."
date: "2025-07-04"
category: "확률 이론"
tags: ["probability-theory", "moment", "mgf", "taylor-series"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 8
featured: false
draft: false
---
Moment는 Distribution의 형태를 수치로 요약하는 값이다. 1차 Moment는 평균과 연결되고, 2차 중심 Moment는 Variance와 같다. Moment Generating Function(MGF)은 여러 차수의 Moment를 하나의 함수에 모아두는 도구이다.

## Moment의 정의

원점을 기준으로 한 <span class="math-inline" data-tex-b64="aw=="></span>차 Moment는

<div class="math-display" data-tex-b64="XG11X2snPVxtYXRoYmJ7RX1bWF5rXQ=="></div>

이다. 평균을 기준으로 한 <span class="math-inline" data-tex-b64="aw=="></span>차 중심 Moment는

<div class="math-display" data-tex-b64="XG11X2sKPQpcbWF0aGJie0V9XCFcbGVmdFsoWC1cbWF0aGJie0V9W1hdKV5rXHJpZ2h0XQ=="></div>

이다.

1차 원 Moment는 Expectation이고, 2차 중심 Moment는 Variance이다.

<div class="math-display" data-tex-b64="XG11XzEnPVxtYXRoYmJ7RX1bWF0sClxxcXVhZApcbXVfMj1cb3BlcmF0b3JuYW1le1Zhcn0oWCk="></div>

3차와 4차 중심 Moment는 각각 비대칭성과 꼬리의 형태를 설명하는 skewness와 kurtosis의 기초가 된다.

## MGF의 정의

MGF는 다음과 같이 정의한다.

<div class="math-display" data-tex-b64="TV9YKHQpPVxtYXRoYmJ7RX1bZV57dFh9XQ=="></div>

<span class="math-inline" data-tex-b64="dD0w"></span> 근처에서 이 Expectation이 유한할 때 MGF가 존재한다고 한다. 지수함수를 Taylor 전개하면

<div class="math-display" data-tex-b64="ZV57dFh9Cj0KXHN1bV97az0wfV57XGluZnR5fVxmcmFje3Rea1hea317ayF9"></div>

이므로 적절한 조건 아래에서

<div class="math-display" data-tex-b64="TV9YKHQpCj0KXHN1bV97az0wfV57XGluZnR5fQpcZnJhY3t0Xmt9e2shfVxtYXRoYmJ7RX1bWF5rXQ=="></div>

가 된다. 따라서 <span class="math-inline" data-tex-b64="aw=="></span>번 미분한 뒤 <span class="math-inline" data-tex-b64="dD0w"></span>을 대입하면 <span class="math-inline" data-tex-b64="aw=="></span>차 원 Moment를 얻는다.

<div class="math-display" data-tex-b64="TV9YXnsoayl9KDApPVxtYXRoYmJ7RX1bWF5rXQ=="></div>

## 독립합의 MGF

<span class="math-inline" data-tex-b64="WA=="></span>와 <span class="math-inline" data-tex-b64="WQ=="></span>가 독립이면

<div class="math-display" data-tex-b64="TV97WCtZfSh0KQo9ClxtYXRoYmJ7RX1bZV57dChYK1kpfV0KPQpcbWF0aGJie0V9W2Vee3RYfV1cbWF0aGJie0V9W2Vee3RZfV0KPQpNX1godClNX1kodCk="></div>

이다. 합의 Distribution을 찾을 때 MGF가 유용한 이유이다.

## Normal Distribution의 MGF

<span class="math-inline" data-tex-b64="WFxzaW1cbWF0aGNhbHtOfShcbXUsXHNpZ21hXjIp"></span>이면

<div class="math-display" data-tex-b64="TV9YKHQpCj0KXGV4cFwhXGxlZnQoXG11IHQrXGZyYWN7XHNpZ21hXjJ0XjJ9ezJ9XHJpZ2h0KQ=="></div>

이다. 이를 미분하면

<div class="math-display" data-tex-b64="TV9YJygwKT1cbXU="></div>

<div class="math-display" data-tex-b64="TV9YJycoMCk9XG11XjIrXHNpZ21hXjI="></div>

를 얻고, <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpPU1fWCcnKDApLU1fWCcoMCleMj1cc2lnbWFeMg=="></span>임을 확인할 수 있다.

## Binomial Distribution의 MGF

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jpbm9taWFsfShuLHAp"></span>이면

<div class="math-display" data-tex-b64="TV9YKHQpCj0KKDEtcCtwZV50KV5u"></div>

이다. Binomial Random Variable을 독립 Bernoulli Random Variable의 합으로 나타내면 이 식을 자연스럽게 얻을 수 있다.

## MGF의 한계

모든 Distribution이 MGF를 가지는 것은 아니다. 예를 들어 Cauchy Distribution은 Moment 자체가 존재하지 않는다. 또한 MGF가 존재하더라도 <span class="math-inline" data-tex-b64="dD0w"></span> 주변의 열린 구간에서 유한해야 Distribution을 유일하게 결정하는 성질을 안정적으로 사용할 수 있다.

이 경우 Characteristic Function

<div class="math-display" data-tex-b64="XHZhcnBoaV9YKHQpPVxtYXRoYmJ7RX1bZV57aXRYfV0="></div>

을 사용할 수 있다. Characteristic Function은 모든 Random Variable에 대해 존재한다.

## 정리

Moment는 Distribution의 중심, 퍼짐, 비대칭성 등을 수치화한다. MGF는 지수함수의 Expectation으로 정의되며, 원점에서의 미분으로 Moment를 얻는다. 독립인 Random Variable의 합에서는 MGF가 곱으로 분해된다.

## 연습 문제

1. Bernoulli Distribution의 MGF를 구하고 평균과 Variance를 유도한다.
2. 독립인 Poisson Random Variable의 합이 Poisson Distribution을 따름을 MGF로 보인다.
3. Exponential Distribution의 MGF가 존재하는 <span class="math-inline" data-tex-b64="dA=="></span>의 범위를 구한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jlcm5vdWxsaX0ocCk="></span>이면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9Ck1fWCh0KQomPVxtYXRoYmJ7RX1bZV57dFh9XVxcCiY9KDEtcCllXjArcGVedFxcCiY9MS1wK3BlXnQuClxlbmR7YWxpZ25lZH0="></div>

따라서

<div class="math-display" data-tex-b64="TV9YJygwKT1wLFxxcXVhZCBNX1gnJygwKT1w"></div>

이고

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1wLFxxcXVhZCBcb3BlcmF0b3JuYW1le1Zhcn0oWCk9TV9YJycoMCktTV9YJygwKV4yPXAoMS1wKQ=="></div>

이다.

### 2번

독립인 <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGEp"></span>, <span class="math-inline" data-tex-b64="WVxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFx0aGV0YSk="></span>에 대해

<div class="math-display" data-tex-b64="TV9YKHQpPVxleHBcIVxsZWZ0KFxsYW1iZGEoZV50LTEpXHJpZ2h0KSxccXF1YWQgTV9ZKHQpPVxleHBcIVxsZWZ0KFx0aGV0YShlXnQtMSlccmlnaHQp"></div>

이다. 독립성이 있으므로

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9Ck1fe1grWX0odCkKJj1NX1godClNX1kodClcXAomPVxleHBcIVxsZWZ0KChcbGFtYmRhK1x0aGV0YSkoZV50LTEpXHJpZ2h0KS4KXGVuZHthbGlnbmVkfQ=="></div>

이는 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtQb2lzc29ufShcbGFtYmRhK1x0aGV0YSk="></span>의 MGF이므로

<div class="math-display" data-tex-b64="WCtZXHNpbVxvcGVyYXRvcm5hbWV7UG9pc3Nvbn0oXGxhbWJkYStcdGhldGEp"></div>

이다.

### 3번

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0V4cG9uZW50aWFsfShcbGFtYmRhKQ=="></span>이면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9Ck1fWCh0KQomPVxpbnRfMF5caW5mdHkgZV57dHh9XGxhbWJkYSBlXnstXGxhbWJkYSB4fVwsZHhcXAomPVxsYW1iZGFcaW50XzBeXGluZnR5IGVeey0oXGxhbWJkYS10KXh9XCxkeFxcCiY9XGZyYWN7XGxhbWJkYX17XGxhbWJkYS10fS4KXGVuZHthbGlnbmVkfQ=="></div>

적분이 수렴하려면 <span class="math-inline" data-tex-b64="XGxhbWJkYS10PjA="></span>이어야 하므로 MGF는 <span class="math-inline" data-tex-b64="dDxcbGFtYmRh"></span>에서 존재한다.
