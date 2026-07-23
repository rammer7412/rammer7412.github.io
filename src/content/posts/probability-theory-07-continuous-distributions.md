---
title: "7. 주요 연속 Distribution"
description: "Uniform, Normal, Exponential, Gamma, Beta Distribution의 형태와 매개변수, 사용 맥락을 정리한다."
date: "2025-07-03"
category: "확률 이론"
tags: ["probability-theory", "continuous-distribution", "normal", "exponential", "gamma", "beta"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

연속 Distribution은 구간 위에 PDF를 정의하고 적분으로 확률을 계산한다. 각 Distribution은 단순히 식이 다른 것이 아니라, 값이 생성되는 상황과 지지집합의 형태가 다르다.

## Uniform Distribution

구간 <span class="math-inline" data-tex-b64="W2EsYl0="></span> 안의 모든 위치가 같은 밀도를 가질 때 사용한다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1VuaWZ9KGEsYik="></div>

<div class="math-display" data-tex-b64="Zl9YKHgpCj0KXGJlZ2lue2Nhc2VzfQpcZGZyYWN7MX17Yi1hfSwmYVxsZSB4XGxlIGIsXFwKMCwmXHRleHR76re4IOuwluydmCDqsr3smrB9LgpcZW5ke2Nhc2VzfQ=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhY3thK2J9ezJ9LApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxmcmFjeyhiLWEpXjJ9ezEyfQ=="></div>

## Normal Distribution

Normal Distribution은 평균 주변에 값이 집중되고 양쪽 꼬리가 대칭인 종 모양의 Distribution이다.

<div class="math-display" data-tex-b64="WFxzaW1cbWF0aGNhbHtOfShcbXUsXHNpZ21hXjIp"></div>

<div class="math-display" data-tex-b64="Zl9YKHgpCj0KXGZyYWN7MX17XHNxcnR7MlxwaVxzaWdtYV4yfX0KXGV4cFwhXGxlZnQoLVxmcmFjeyh4LVxtdSleMn17MlxzaWdtYV4yfVxyaWdodCk="></div>

<span class="math-inline" data-tex-b64="XG11"></span>는 중심 위치이고 <span class="math-inline" data-tex-b64="XHNpZ21h"></span>는 퍼짐의 크기이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cbXUsClxxcXVhZApcb3BlcmF0b3JuYW1le1Zhcn0oWCk9XHNpZ21hXjI="></div>

표준화하면 평균 0, Variance 1인 표준정규분포로 바뀐다.

<div class="math-display" data-tex-b64="Wj1cZnJhY3tYLVxtdX17XHNpZ21hfQpcc2ltXG1hdGhjYWx7Tn0oMCwxKQ=="></div>

정규화 상수의 근거가 되는 Gaussian integral은

<div class="math-display" data-tex-b64="XGludF97LVxpbmZ0eX1ee1xpbmZ0eX1lXnsteF4yLzJ9XCxkeD1cc3FydHsyXHBpfQ=="></div>

이다.

## Exponential Distribution

사건이 일정한 비율로 발생하는 Poisson process에서 다음 사건까지 기다리는 시간을 나타낸다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0V4cG9uZW50aWFsfShcbGFtYmRhKQ=="></div>

<div class="math-display" data-tex-b64="Zl9YKHgpCj0KXGxhbWJkYSBlXnstXGxhbWJkYSB4fSwKXHFxdWFkIHhcZ2Uw"></div>

<div class="math-display" data-tex-b64="Rl9YKHgpPTEtZV57LVxsYW1iZGEgeH0sClxxcXVhZCB4XGdlMA=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhYzFcbGFtYmRhLApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxmcmFjMXtcbGFtYmRhXjJ9"></div>

Exponential Distribution도 기억 없음 성질을 가진다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPnMrdFxtaWQgWD5zKT1cbWF0aGJie1B9KFg+dCk="></div>

## Gamma Distribution

Poisson process에서 <span class="math-inline" data-tex-b64="XGFscGhh"></span>번째 사건이 일어날 때까지의 대기시간을 일반화한 Distribution이다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0dhbW1hfShcYWxwaGEsXGxhbWJkYSk="></div>

여기서는 <span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>를 rate 매개변수로 사용한다.

<div class="math-display" data-tex-b64="Zl9YKHgpCj0KXGZyYWN7XGxhbWJkYV57XGFscGhhfX17XEdhbW1hKFxhbHBoYSl9CiB4XntcYWxwaGEtMX1lXnstXGxhbWJkYSB4fSwKXHFxdWFkIHg+MA=="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhY3tcYWxwaGF9e1xsYW1iZGF9LApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxmcmFje1xhbHBoYX17XGxhbWJkYV4yfQ=="></div>

<span class="math-inline" data-tex-b64="XGFscGhhPTE="></span>이면 Exponential Distribution이 된다.

## Beta Distribution

0과 1 사이의 비율이나 확률을 모델링할 때 자주 사용한다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0JldGF9KFxhbHBoYSxcYmV0YSk="></div>

<div class="math-display" data-tex-b64="Zl9YKHgpCj0KXGZyYWN7MX17QihcYWxwaGEsXGJldGEpfQogeF57XGFscGhhLTF9KDEteClee1xiZXRhLTF9LApccXF1YWQgMDx4PDE="></div>

Beta Function은 다음과 같다.

<div class="math-display" data-tex-b64="QihcYWxwaGEsXGJldGEpCj0KXGZyYWN7XEdhbW1hKFxhbHBoYSlcR2FtbWEoXGJldGEpfXtcR2FtbWEoXGFscGhhK1xiZXRhKX0="></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXQo9ClxmcmFje1xhbHBoYX17XGFscGhhK1xiZXRhfQ=="></div>

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpCj0KXGZyYWN7XGFscGhhXGJldGF9eyhcYWxwaGErXGJldGEpXjIoXGFscGhhK1xiZXRhKzEpfQ=="></div>

## Distribution 선택 기준

- 유한 구간에서 일정한 밀도: Uniform
- 대칭적인 측정 오차나 여러 작은 효과의 합: Normal
- 다음 사건까지의 대기시간: Exponential
- 여러 번째 사건까지의 대기시간: Gamma
- 0과 1 사이의 비율: Beta

## 연습 문제

1. <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1VuaWZ9KDAsMSk="></span>일 때 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShYXjI8MS80KQ=="></span>를 구한다.
2. <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0V4cG9uZW50aWFsfShcbGFtYmRhKQ=="></span>의 기억 없음 성질을 증명한다.
3. Gamma Distribution에서 <span class="math-inline" data-tex-b64="XGFscGhhPTE="></span>을 대입해 Exponential PDF를 얻는다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="MFxsZSBYXGxlMQ=="></span>이므로 <span class="math-inline" data-tex-b64="WF4yPDEvNA=="></span>는 <span class="math-inline" data-tex-b64="MFxsZSBYPDEvMg=="></span>와 같다. Uniform Distribution의 구간 길이를 이용하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYXjI8MS80KT1cbWF0aGJie1B9KDBcbGUgWDwxLzIpPVxmcmFjMTI="></div>

이다.

### 2번

<span class="math-inline" data-tex-b64="cyx0XGdlMA=="></span>에 대해

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH0oWD5zK3RcbWlkIFg+cykKJj1cZnJhY3tcbWF0aGJie1B9KFg+cyt0KX17XG1hdGhiYntQfShYPnMpfVxcCiY9XGZyYWN7ZV57LVxsYW1iZGEocyt0KX19e2Veey1cbGFtYmRhIHN9fVxcCiY9ZV57LVxsYW1iZGEgdH1cXAomPVxtYXRoYmJ7UH0oWD50KS4KXGVuZHthbGlnbmVkfQ=="></div>

따라서 이미 <span class="math-inline" data-tex-b64="cw=="></span>만큼 기다렸다는 사실이 추가 대기시간의 Distribution을 바꾸지 않는다.

### 3번

Gamma PDF에 <span class="math-inline" data-tex-b64="XGFscGhhPTE="></span>을 대입하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmZfWCh4KQomPVxmcmFje1xsYW1iZGFeMX17XEdhbW1hKDEpfXheezEtMX1lXnstXGxhbWJkYSB4fVxcCiY9XGxhbWJkYSBlXnstXGxhbWJkYSB4fSxccXF1YWQgeD4wLApcZW5ke2FsaWduZWR9"></div>

이다. <span class="math-inline" data-tex-b64="XEdhbW1hKDEpPTE="></span>이므로 Exponential PDF와 같다.

---

**확률 이론 정리 시리즈** · 7/11 · [← 이전: 6. 주요 이산 Distribution](/posts/probability-theory-06-discrete-distributions/) · [다음: 8. Moment와 MGF →](/posts/probability-theory-08-moment-generating-function/)
