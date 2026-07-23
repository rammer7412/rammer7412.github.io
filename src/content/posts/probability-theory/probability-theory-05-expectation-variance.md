---
title: "5. Expectation과 Variance"
description: "Distribution의 중심과 퍼짐을 나타내는 Expectation, Variance, Standard Deviation의 정의와 성질을 정리한다."
date: "2025-06-21"
category: "확률 이론"
tags: ["probability-theory", "expectation", "variance", "standard-deviation"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 5
featured: false
draft: false
---
Distribution 전체의 특징을 몇 개의 수치로 요약할 때 가장 먼저 사용하는 값이 Expectation과 Variance이다. Expectation은 확률질량의 균형점에 해당하고, Variance는 값들이 그 중심에서 얼마나 퍼져 있는지를 나타낸다.

## Expectation

Expectation은 가능한 값에 그 값이 나타날 확률을 가중치로 곱해 평균을 낸 값이다. 이산형과 연속형에서 각각 다음과 같이 정의한다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXQo9ClxzdW1feCB4XCxwX1goeCk="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXQo9ClxpbnRfey1caW5mdHl9XntcaW5mdHl9eFwsZl9YKHgpXCxkeA=="></div>

함수 <span class="math-inline" data-tex-b64="ZyhYKQ=="></span>의 Expectation은 Distribution을 먼저 구하지 않고도 다음처럼 계산할 수 있다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtnKFgpXQo9ClxiZWdpbntjYXNlc30KXGRpc3BsYXlzdHlsZVxzdW1feCBnKHgpcF9YKHgpLCZYXHRleHR76rCAIOydtOyCsO2YlX0sXFxbNnB0XQpcZGlzcGxheXN0eWxlXGludF97LVxpbmZ0eX1ee1xpbmZ0eX1nKHgpZl9YKHgpXCxkeCwmWFx0ZXh0e+qwgCDsl7Dsho3tmJV9LgpcZW5ke2Nhc2VzfQ=="></div>

이를 LOTUS(Law of the Unconscious Statistician)라고 부른다.

## Expectation의 선형성

상수 <span class="math-inline" data-tex-b64="YSxi"></span>와 Random Variable <span class="math-inline" data-tex-b64="WCxZ"></span>에 대해

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVthWCtiWV0KPQphXG1hdGhiYntFfVtYXStiXG1hdGhiYntFfVtZXQ=="></div>

가 성립한다. 이 성질에는 <span class="math-inline" data-tex-b64="WA=="></span>와 <span class="math-inline" data-tex-b64="WQ=="></span>의 독립성이 필요하지 않다.

특히 지시함수 <span class="math-inline" data-tex-b64="XG1hdGhiZnsxfV9B"></span>를 사용하면 사건의 확률을 Expectation으로 표현할 수 있다.

<div class="math-display" data-tex-b64="XG1hdGhiZnsxfV9BKFxvbWVnYSkKPQpcYmVnaW57Y2FzZXN9CjEsJlxvbWVnYVxpbiBBLFxcCjAsJlxvbWVnYVxub3RpbiBBLApcZW5ke2Nhc2VzfQ=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtcbWF0aGJmezF9X0FdPVxtYXRoYmJ7UH0oQSk="></div>

이 성질은 개수의 평균을 계산할 때 유용하다.

## Variance

Variance는 <span class="math-inline" data-tex-b64="WA=="></span>가 평균에서 벗어난 정도의 제곱을 평균 낸 값이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpCj0KXG1hdGhiYntFfVwhXGxlZnRbKFgtXG1hdGhiYntFfVtYXSleMlxyaWdodF0="></div>

계산할 때는 다음 형태가 더 편리하다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpCj0KXG1hdGhiYntFfVtYXjJdLVxtYXRoYmJ7RX1bWF1eMg=="></div>

제곱을 사용하므로 평균보다 큰 편차와 작은 편차가 서로 상쇄되지 않는다. 다만 단위도 원래 단위의 제곱이 된다.

## Standard Deviation

Standard Deviation은 Variance의 제곱근이다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtTRH0oWCkKPQpcc3FydHtcb3BlcmF0b3JuYW1le1Zhcn0oWCl9"></div>

원래 자료와 같은 단위를 가지므로 퍼짐의 크기를 해석하기 쉽다.

## 선형 변환의 영향

<span class="math-inline" data-tex-b64="WT1hWCti"></span>라고 하자. 그러면

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtZXT1hXG1hdGhiYntFfVtYXSti"></div>

이고

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFkpPWFeMlxvcGVyYXRvcm5hbWV7VmFyfShYKQ=="></div>

이다. 상수 <span class="math-inline" data-tex-b64="Yg=="></span>는 Distribution의 위치만 이동시키므로 Variance를 바꾸지 않는다. 반면 <span class="math-inline" data-tex-b64="YQ=="></span>는 값의 간격을 <span class="math-inline" data-tex-b64="fGF8"></span>배로 바꾸므로 Variance를 <span class="math-inline" data-tex-b64="YV4y"></span>배로 바꾼다.

## 독립인 합의 Variance

두 Random Variable이 독립이면

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgrWSkKPQpcb3BlcmF0b3JuYW1le1Zhcn0oWCkrXG9wZXJhdG9ybmFtZXtWYXJ9KFkp"></div>

이다. 일반적인 경우에는 공분산 항이 추가된다.

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgrWSkKPQpcb3BlcmF0b3JuYW1le1Zhcn0oWCkrXG9wZXJhdG9ybmFtZXtWYXJ9KFkpKzJcb3BlcmF0b3JuYW1le0Nvdn0oWCxZKQ=="></div>

## 정리

Expectation은 Distribution의 중심을, Variance와 Standard Deviation은 퍼짐을 나타낸다. Expectation은 항상 선형이지만, Variance의 합 공식은 공분산 또는 독립성 조건을 함께 확인해야 한다.

## 연습 문제

1. 공정한 주사위 눈 <span class="math-inline" data-tex-b64="WA=="></span>의 Expectation과 Variance를 구한다.
2. <span class="math-inline" data-tex-b64="WT0zWC0y"></span>일 때 <span class="math-inline" data-tex-b64="XG1hdGhiYntFfVtZXQ=="></span>와 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFkp"></span>를 <span class="math-inline" data-tex-b64="WA=="></span>의 값으로 표현한다.
3. 지시함수의 Expectation이 사건의 확률과 같음을 정의에서 증명한다.

## 풀이

### 1번

공정한 주사위에서 <span class="math-inline" data-tex-b64="WA=="></span>는 1부터 6까지를 각각 확률 <span class="math-inline" data-tex-b64="MS82"></span>로 가진다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhY3sxKzIrMys0KzUrNn17Nn09XGZyYWM3Mg=="></div>

또한

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXjJdPVxmcmFjezFeMisyXjIrM14yKzReMis1XjIrNl4yfXs2fT1cZnJhY3s5MX17Nn0="></div>

이므로

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxtYXRoYmJ7RX1bWF4yXS1cbWF0aGJie0V9W1hdXjI9XGZyYWN7MzV9ezEyfQ=="></div>

이다.

### 2번

Expectation의 선형성과 Variance의 성질을 사용하면

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtZXT1cbWF0aGJie0V9WzNYLTJdPTNcbWF0aGJie0V9W1hdLTI="></div>

이고

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFkpPVxvcGVyYXRvcm5hbWV7VmFyfSgzWC0yKT05XG9wZXJhdG9ybmFtZXtWYXJ9KFgp"></div>

이다. 상수의 덧셈은 Variance에 영향을 주지 않는다.

### 3번

사건 <span class="math-inline" data-tex-b64="QQ=="></span>의 지시함수는 <span class="math-inline" data-tex-b64="QQ=="></span>가 일어나면 1, 그렇지 않으면 0이다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7RX1bXG1hdGhiZnsxfV9BXQomPTFcY2RvdFxtYXRoYmJ7UH0oXG1hdGhiZnsxfV9BPTEpKzBcY2RvdFxtYXRoYmJ7UH0oXG1hdGhiZnsxfV9BPTApXFwKJj1cbWF0aGJie1B9KEEpLgpcZW5ke2FsaWduZWR9"></div>

즉 사건의 확률은 해당 지시함수의 Expectation과 같다.
