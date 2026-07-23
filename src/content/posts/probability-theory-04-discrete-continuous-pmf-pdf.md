---
title: "4. 이산·연속 Random Variable과 PMF·PDF"
description: "이산형과 연속형 Random Variable을 구분하고 PMF, PDF, CDF의 관계를 정리한다."
date: "2025-05-10"
category: "확률 이론"
tags: ["probability-theory", "discrete-random-variable", "continuous-random-variable", "pmf", "pdf"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

Random Variable은 가능한 값의 구조에 따라 이산형과 연속형으로 구분한다. 두 경우 모두 CDF로 Distribution을 표현할 수 있지만, 확률을 계산할 때 사용하는 함수는 각각 PMF와 PDF이다.

## 이산형과 연속형의 차이

가능한 값이 유한하거나 셀 수 있으면 **이산 Random Variable**이다. 주사위의 눈, 성공 횟수, 대기 중인 사람 수가 대표적인 예이다.

가능한 값이 어떤 구간을 연속적으로 채우는 것으로 모델링되면 **연속 Random Variable**이다. 측정된 키, 시간, 온도 등이 이에 해당한다.

이산형에서는 개별 값에 양의 확률이 배정될 수 있다. 연속형에서는 한 점의 확률이 0이고, 구간의 넓이로 확률을 계산한다.

## PMF

Probability Mass Function, 즉 PMF는 이산 Random Variable의 각 값에 배정된 확률을 나타낸다.

<div class="math-display" data-tex-b64="cF9YKHgpPVxtYXRoYmJ7UH0oWD14KQ=="></div>

PMF는 다음 조건을 만족한다.

<div class="math-display" data-tex-b64="cF9YKHgpXGdlMCwKXHFxdWFkClxzdW1feCBwX1goeCk9MQ=="></div>

값들의 집합 <span class="math-inline" data-tex-b64="QQ=="></span>에 들어갈 확률은 해당 PMF를 모두 더한 값이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYXGluIEEpPVxzdW1fe3hcaW4gQX1wX1goeCk="></div>

CDF와의 관계는 다음과 같다.

<div class="math-display" data-tex-b64="Rl9YKHgpPVxzdW1fe3RcbGUgeH1wX1godCk="></div>

## PDF

Probability Density Function, 즉 PDF는 연속 Random Variable의 확률이 어느 구간에 얼마나 조밀하게 분포하는지를 나타낸다. PDF의 함수값 자체는 확률이 아니다.

<div class="math-display" data-tex-b64="Rl9YKHgpPVxpbnRfey1caW5mdHl9Xnt4fWZfWCh0KVwsZHQ="></div>

CDF가 미분 가능하면

<div class="math-display" data-tex-b64="Zl9YKHgpPUZfWCcoeCk="></div>

이다. PDF는 다음 조건을 만족한다.

<div class="math-display" data-tex-b64="Zl9YKHgpXGdlMCwKXHFxdWFkClxpbnRfey1caW5mdHl9XntcaW5mdHl9Zl9YKHgpXCxkeD0x"></div>

구간 확률은 PDF 아래의 넓이로 계산한다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShhXGxlIFhcbGUgYikKPQpcaW50X2FeYiBmX1godClcLGR0"></div>

연속형에서는

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPXgpPTA="></div>

이므로 구간 끝점을 포함하느냐는 확률에 영향을 주지 않는다.

## PDF 예시

다음 함수를 생각한다.

<div class="math-display" data-tex-b64="Zl9YKHgpPQpcYmVnaW57Y2FzZXN9CjJ4LCYwXGxlIHhcbGUxLFxcCjAsJlx0ZXh0e+q3uCDrsJbsnZgg6rK97JqwfS4KXGVuZHtjYXNlc30="></div>

<span class="math-inline" data-tex-b64="MFxsZSB4XGxlMQ=="></span>에서 음이 아니고

<div class="math-display" data-tex-b64="XGludF8wXjEgMnhcLGR4PTE="></div>

이므로 PDF가 된다. CDF는 적분으로 구한다.

<div class="math-display" data-tex-b64="Rl9YKHgpPQpcYmVnaW57Y2FzZXN9CjAsJng8MCxcXAp4XjIsJjBcbGUgeFxsZTEsXFwKMSwmeD4xLgpcZW5ke2Nhc2VzfQ=="></div>

예를 들어

<div class="math-display" data-tex-b64="XG1hdGhiYntQfVwhXGxlZnQoXGZyYWMxMlxsZSBYXGxlMVxyaWdodCkKPTEtRl9YXCFcbGVmdChcZnJhYzEyXHJpZ2h0KQo9XGZyYWMzNA=="></div>

이다.

## PMF와 PDF를 혼동하지 않기

PMF는 <span class="math-inline" data-tex-b64="cF9YKHgp"></span> 자체가 점 <span class="math-inline" data-tex-b64="eA=="></span>의 확률이다. 반면 PDF는 <span class="math-inline" data-tex-b64="Zl9YKHgp"></span>가 높을수록 그 근처에 확률이 더 조밀하다는 뜻일 뿐, <span class="math-inline" data-tex-b64="Zl9YKHgp"></span> 자체를 확률로 해석할 수 없다. PDF는 1보다 큰 값을 가질 수도 있지만, 전체 적분은 반드시 1이어야 한다.

## 정리

이산형에서는 PMF를 합해 확률을 구하고, 연속형에서는 PDF를 적분해 확률을 구한다. CDF는 두 유형에 공통으로 사용할 수 있는 표현이다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="cF9YKHgpPXgvMTU="></span>, <span class="math-inline" data-tex-b64="eD0xLDIsMyw0LDU="></span>가 PMF인지 확인한다.
2. <span class="math-inline" data-tex-b64="Zl9YKHgpPVxsYW1iZGEgZV57LVxsYW1iZGEgeH0="></span>, <span class="math-inline" data-tex-b64="eFxnZTA="></span>가 PDF임을 확인하고 CDF를 구한다.
3. 위 PDF에서 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShhXGxlIFhcbGUgYik="></span>를 계산한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="eD0xLDIsMyw0LDU="></span>에서 <span class="math-inline" data-tex-b64="cF9YKHgpPXgvMTU="></span>는 음수가 아니며

<div class="math-display" data-tex-b64="XHN1bV97eD0xfV57NX1wX1goeCk9XGZyYWN7MSsyKzMrNCs1fXsxNX09MQ=="></div>

이다. 따라서 올바른 PMF이다.

### 2번

<span class="math-inline" data-tex-b64="XGxhbWJkYT4w"></span>이라 하자. <span class="math-inline" data-tex-b64="eFxnZTA="></span>에서 PDF는 음수가 아니고

<div class="math-display" data-tex-b64="XGludF8wXlxpbmZ0eSBcbGFtYmRhIGVeey1cbGFtYmRhIHh9XCxkeD0x"></div>

이다. 따라서 PDF이다. CDF는

<div class="math-display" data-tex-b64="Rl9YKHgpPQpcYmVnaW57Y2FzZXN9CjAsJng8MCxcXAoxLWVeey1cbGFtYmRhIHh9LCZ4XGdlMApcZW5ke2Nhc2VzfQ=="></div>

이다.

### 3번

<span class="math-inline" data-tex-b64="MFxsZSBhXGxlIGI="></span>라면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH0oYVxsZSBYXGxlIGIpCiY9XGludF9hXmIgXGxhbWJkYSBlXnstXGxhbWJkYSB4fVwsZHhcXAomPWVeey1cbGFtYmRhIGF9LWVeey1cbGFtYmRhIGJ9LgpcZW5ke2FsaWduZWR9"></div>

연속 Random Variable에서는 끝점을 포함하는지 여부가 확률값에 영향을 주지 않는다.

---

**확률 이론 정리 시리즈** · 4/11 · [← 이전: 3. Random Variable과 CDF](/posts/probability-theory-03-random-variable-cdf/) · [다음: 5. Expectation과 Variance →](/posts/probability-theory-05-expectation-variance/)
