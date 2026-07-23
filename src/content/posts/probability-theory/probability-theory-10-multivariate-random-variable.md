---
title: "10. Multivariate Random Variable과 Joint Distribution"
description: "둘 이상의 Random Variable을 함께 다루는 Joint Distribution, Marginal Distribution, 조건부 Distribution과 독립성을 정리한다."
date: "2025-08-12"
category: "확률 이론"
tags: ["probability-theory", "multivariate-random-variable", "joint-distribution", "marginal-distribution", "independence"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 10
featured: false
draft: false
---
여러 Random Variable을 동시에 관찰하면 각각의 Distribution만으로는 변수 사이의 관계를 알 수 없다. 두 변수의 값이 함께 나타나는 방식을 기록한 것이 Joint Distribution이다.

## 다변량 Random Variable

두 Random Variable <span class="math-inline" data-tex-b64="WCxZ"></span>를 묶으면 표본공간에서 평면으로 가는 함수가 된다.

<div class="math-display" data-tex-b64="KFgsWSk6XE9tZWdhXHRvXG1hdGhiYntSfV4y"></div>

예를 들어 한 사람의 키를 <span class="math-inline" data-tex-b64="WA=="></span>, 몸무게를 <span class="math-inline" data-tex-b64="WQ=="></span>라고 하면, 각 관측 결과는 평면 위의 한 점 <span class="math-inline" data-tex-b64="KFgsWSk="></span>에 대응한다.

## Joint PMF

<span class="math-inline" data-tex-b64="WCxZ"></span>가 이산형이면 Joint PMF는 두 값이 동시에 나타날 확률이다.

<div class="math-display" data-tex-b64="cF97WCxZfSh4LHkpCj0KXG1hdGhiYntQfShYPXgsWT15KQ=="></div>

다음 조건을 만족한다.

<div class="math-display" data-tex-b64="cF97WCxZfSh4LHkpXGdlMCwKXHFxdWFkClxzdW1feFxzdW1feSBwX3tYLFl9KHgseSk9MQ=="></div>

## Joint PDF

<span class="math-inline" data-tex-b64="WCxZ"></span>가 연속형이면 Joint PDF <span class="math-inline" data-tex-b64="Zl97WCxZfQ=="></span>를 사용한다. 영역 <span class="math-inline" data-tex-b64="QVxzdWJzZXRlcVxtYXRoYmJ7Un1eMg=="></span>에 들어갈 확률은 이중적분으로 계산한다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfSgoWCxZKVxpbiBBKQo9ClxpaW50X0EgZl97WCxZfSh4LHkpXCxkeFwsZHk="></div>

Joint PDF의 함수값 자체는 확률이 아니며, 작은 영역 아래의 부피가 확률에 해당한다.

## Joint CDF

Joint CDF는 두 변수가 각각 주어진 값 이하일 누적 확률이다.

<div class="math-display" data-tex-b64="Rl97WCxZfSh4LHkpCj0KXG1hdGhiYntQfShYXGxlIHgsWVxsZSB5KQ=="></div>

Joint PDF가 존재하고 충분히 매끄러우면

<div class="math-display" data-tex-b64="Zl97WCxZfSh4LHkpCj0KXGZyYWN7XHBhcnRpYWxeMn17XHBhcnRpYWwgeFwsXHBhcnRpYWwgeX1GX3tYLFl9KHgseSk="></div>

이다.

## Marginal Distribution

Marginal Distribution은 다른 변수를 합하거나 적분하여 제거하고 한 변수만 남긴 Distribution이다.

이산형에서는

<div class="math-display" data-tex-b64="cF9YKHgpPVxzdW1feSBwX3tYLFl9KHgseSk="></div>

<div class="math-display" data-tex-b64="cF9ZKHkpPVxzdW1feCBwX3tYLFl9KHgseSk="></div>

이고, 연속형에서는

<div class="math-display" data-tex-b64="Zl9YKHgpPVxpbnRfey1caW5mdHl9XntcaW5mdHl9Zl97WCxZfSh4LHkpXCxkeQ=="></div>

<div class="math-display" data-tex-b64="Zl9ZKHkpPVxpbnRfey1caW5mdHl9XntcaW5mdHl9Zl97WCxZfSh4LHkpXCxkeA=="></div>

이다.

## 지지집합의 중요성

Joint Distribution에서는 가능한 <span class="math-inline" data-tex-b64="KHgseSk="></span>의 영역, 즉 지지집합을 정확히 파악해야 한다. 예를 들어

<div class="math-display" data-tex-b64="Zl97WCxZfSh4LHkpPTIsClxxcXVhZAowPHk8eDwx"></div>

이고 그 밖에서 0이라고 하자. 이 지지집합은 단위 정사각형 전체가 아니라 삼각형이다.

<span class="math-inline" data-tex-b64="WD14"></span>가 주어졌을 때 <span class="math-inline" data-tex-b64="eQ=="></span>의 범위는 <span class="math-inline" data-tex-b64="MDx5PHg="></span>이므로

<div class="math-display" data-tex-b64="Zl9YKHgpPVxpbnRfMF54IDJcLGR5PTJ4LApccXF1YWQgMDx4PDE="></div>

이다. 반대로 <span class="math-inline" data-tex-b64="WT15"></span>가 주어졌을 때 <span class="math-inline" data-tex-b64="eA=="></span>의 범위는 <span class="math-inline" data-tex-b64="eTx4PDE="></span>이므로

<div class="math-display" data-tex-b64="Zl9ZKHkpPVxpbnRfeV4xIDJcLGR4PTIoMS15KSwKXHFxdWFkIDA8eTwx"></div>

이다.

## 조건부 Distribution

<span class="math-inline" data-tex-b64="WT15"></span>라는 정보가 주어졌을 때 <span class="math-inline" data-tex-b64="WA=="></span>의 Distribution은 조건부 Distribution이다.

이산형에서는

<div class="math-display" data-tex-b64="cF97WFxtaWQgWX0oeFxtaWQgeSkKPQpcZnJhY3twX3tYLFl9KHgseSl9e3BfWSh5KX0="></div>

이고, 연속형에서는

<div class="math-display" data-tex-b64="Zl97WFxtaWQgWX0oeFxtaWQgeSkKPQpcZnJhY3tmX3tYLFl9KHgseSl9e2ZfWSh5KX0="></div>

이다. 분모가 양수인 범위에서 정의한다.

## 독립성

<span class="math-inline" data-tex-b64="WA=="></span>와 <span class="math-inline" data-tex-b64="WQ=="></span>가 독립이라는 것은 한 변수에 대한 정보가 다른 변수의 Distribution을 바꾸지 않는다는 뜻이다. Joint Distribution이 Marginal Distribution의 곱으로 분해되는지로 확인한다.

<div class="math-display" data-tex-b64="cF97WCxZfSh4LHkpPXBfWCh4KXBfWSh5KQ=="></div>

또는

<div class="math-display" data-tex-b64="Zl97WCxZfSh4LHkpPWZfWCh4KWZfWSh5KQ=="></div>

독립이면

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtnKFgpaChZKV0KPQpcbWF0aGJie0V9W2coWCldXG1hdGhiYntFfVtoKFkpXQ=="></div>

가 성립한다. 특히 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb3Z9KFgsWSk9MA=="></span>이다. 그러나 공분산이 0이라고 해서 항상 독립인 것은 아니다.

## 정리

Joint Distribution은 여러 Random Variable이 함께 움직이는 구조를 나타낸다. Marginal Distribution은 다른 변수를 제거해 얻고, 조건부 Distribution은 다른 변수의 값이 주어졌을 때 얻는다. 독립성은 Joint Distribution이 Marginal Distribution의 곱으로 분해되는지로 판단한다.

## 연습 문제

1. 삼각형 지지집합 <span class="math-inline" data-tex-b64="MDx5PHg8MQ=="></span>에서 Marginal PDF를 다시 계산한다.
2. Joint PDF가 Marginal PDF의 곱으로 분해되는지 확인해 독립성을 판정한다.
3. 공분산이 0이지만 독립이 아닌 두 Random Variable의 예를 찾는다.

## 풀이

### 1번

Joint PDF는 삼각형 영역 <span class="math-inline" data-tex-b64="MDx5PHg8MQ=="></span>에서 2이다. <span class="math-inline" data-tex-b64="eA=="></span>를 고정하면 <span class="math-inline" data-tex-b64="eQ=="></span>는 0부터 <span class="math-inline" data-tex-b64="eA=="></span>까지 움직이므로

<div class="math-display" data-tex-b64="Zl9YKHgpPVxpbnRfMF54IDJcLGR5PTJ4LFxxcXVhZCAwPHg8MQ=="></div>

이다. 반대로 <span class="math-inline" data-tex-b64="eQ=="></span>를 고정하면 <span class="math-inline" data-tex-b64="eA=="></span>는 <span class="math-inline" data-tex-b64="eQ=="></span>부터 1까지 움직이므로

<div class="math-display" data-tex-b64="Zl9ZKHkpPVxpbnRfeV4xIDJcLGR4PTIoMS15KSxccXF1YWQgMDx5PDE="></div>

이다.

### 2번

Marginal PDF의 곱은

<div class="math-display" data-tex-b64="Zl9YKHgpZl9ZKHkpPTR4KDEteSk="></div>

이다. 이는 삼각형 지지집합에서 Joint PDF인 2와 일반적으로 같지 않다. 또한 독립인 연속 Random Variable의 지지집합은 두 Marginal 지지집합의 곱인 직사각형 형태여야 하지만, 여기서는 삼각형이다. 따라서 <span class="math-inline" data-tex-b64="WA=="></span>와 <span class="math-inline" data-tex-b64="WQ=="></span>는 독립이 아니다.

### 3번

<span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1VuaWZ9KC0xLDEp"></span>이고 <span class="math-inline" data-tex-b64="WT1YXjI="></span>라고 두자. 대칭성에 의해

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT0wLFxxcXVhZCBcbWF0aGJie0V9W1heM109MA=="></div>

이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtDb3Z9KFgsWSkKPVxtYXRoYmJ7RX1bWFldLVxtYXRoYmJ7RX1bWF1cbWF0aGJie0V9W1ldCj1cbWF0aGJie0V9W1heM10KPTA="></div>

이다. 그러나 <span class="math-inline" data-tex-b64="WQ=="></span>는 <span class="math-inline" data-tex-b64="WA=="></span>가 주어지면 완전히 결정되는 함수이므로 두 변수는 독립이 아니다.
