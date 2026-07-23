---
title: "3. Random Variable과 CDF"
description: "Random Variable의 함수적 의미와 CDF의 정의, 기본 성질, 구간 확률 계산 방법을 정리한다."
date: "2025-05-01"
category: "확률 이론"
tags: ["probability-theory", "random-variable", "cdf", "distribution"]
domain: "probability-theory"
format: "study-note"
featured: false
draft: false
---

확률 실험의 결과는 동전의 앞뒤처럼 기호일 수도 있고, 주사위의 눈처럼 숫자일 수도 있다. 계산을 체계적으로 하려면 각 결과를 숫자에 대응시켜야 한다. 이 역할을 하는 함수가 Random Variable이다.

## Random Variable의 정의

Random Variable <span class="math-inline" data-tex-b64="WA=="></span>는 표본공간의 각 결과를 실수에 대응시키는 함수이다.

<div class="math-display" data-tex-b64="WDpcT21lZ2FcdG9cbWF0aGJie1J9"></div>

이름에 variable이 들어가지만, 수학적으로는 함수라는 점이 중요하다. 실제로 무작위인 것은 표본공간에서 어떤 결과 <span class="math-inline" data-tex-b64="XG9tZWdh"></span>가 선택되는지이며, <span class="math-inline" data-tex-b64="WA=="></span>는 선택된 결과를 숫자 <span class="math-inline" data-tex-b64="WChcb21lZ2Ep"></span>로 바꾼다.

동전을 두 번 던지는 경우

<div class="math-display" data-tex-b64="XE9tZWdhPVx7SEgsSFQsVEgsVFRcfQ=="></div>

이고, <span class="math-inline" data-tex-b64="WA=="></span>를 앞면의 개수로 정의하면

<div class="math-display" data-tex-b64="WChISCk9MiwKXHFxdWFkClgoSFQpPVgoVEgpPTEsClxxcXVhZApYKFRUKT0w"></div>

이다. 서로 다른 결과가 같은 값으로 대응될 수 있다.

## Random Variable이 만드는 사건

<span class="math-inline" data-tex-b64="WD14"></span>는 숫자 하나가 아니라 “<span class="math-inline" data-tex-b64="WA=="></span>의 값이 <span class="math-inline" data-tex-b64="eA=="></span>가 되는 모든 결과”를 모은 사건이다.

<div class="math-display" data-tex-b64="XHtYPXhcfQo9Clx7XG9tZWdhXGluXE9tZWdhOlgoXG9tZWdhKT14XH0="></div>

따라서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPXgpCj0KXG1hdGhiYntQfVwhXGxlZnQoXHtcb21lZ2E6WChcb21lZ2EpPXhcfVxyaWdodCk="></div>

로 이해해야 한다.

예를 들어 공정한 주사위에서 <span class="math-inline" data-tex-b64="WA=="></span>를 짝수 여부로 정의해 짝수이면 0, 홀수이면 1을 부여한다고 하자. 그러면

<div class="math-display" data-tex-b64="XHtYPTBcfT1cezIsNCw2XH0="></div>

이므로 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShYPTApPTEvMg=="></span>이다.

## Distribution과 CDF

Random Variable의 Distribution은 가능한 값에 확률이 어떻게 배분되어 있는지를 나타낸다. 이를 이산형과 연속형에 관계없이 항상 표현할 수 있는 함수가 Cumulative Distribution Function, 즉 CDF이다.

<div class="math-display" data-tex-b64="Rl9YKHgpPVxtYXRoYmJ7UH0oWFxsZSB4KQ=="></div>

CDF는 특정 값 하나의 확률이 아니라 <span class="math-inline" data-tex-b64="eA=="></span> 이하에 누적된 확률이다.

동전을 세 번 던지고 <span class="math-inline" data-tex-b64="WA=="></span>를 앞면의 개수라고 하자. 이때

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPTApPVxmcmFjMTgsClxxcXVhZApcbWF0aGJie1B9KFg9MSk9XGZyYWMzOA=="></div>

이므로

<div class="math-display" data-tex-b64="Rl9YKDEpCj0KXG1hdGhiYntQfShYXGxlMSkKPQpcZnJhYzE4K1xmcmFjMzgKPQpcZnJhYzEy"></div>

이다.

## CDF의 기본 성질

모든 CDF는 다음 세 성질을 만족한다.

### 1. 양 끝에서의 극한

<div class="math-display" data-tex-b64="XGxpbV97eFx0by1caW5mdHl9Rl9YKHgpPTAsClxxcXVhZApcbGltX3t4XHRvXGluZnR5fUZfWCh4KT0x"></div>

### 2. 단조 증가

<span class="math-inline" data-tex-b64="eF8xXGxlIHhfMg=="></span>이면 사건 <span class="math-inline" data-tex-b64="XHtYXGxlIHhfMVx9"></span>이 <span class="math-inline" data-tex-b64="XHtYXGxlIHhfMlx9"></span>에 포함되므로

<div class="math-display" data-tex-b64="Rl9YKHhfMSlcbGUgRl9YKHhfMik="></div>

이다.

### 3. 우연속성

<div class="math-display" data-tex-b64="XGxpbV97eFxkb3duYXJyb3cgeF8wfUZfWCh4KT1GX1goeF8wKQ=="></div>

이산 Random Variable의 CDF는 값이 갑자기 뛰는 지점을 가질 수 있다. 그 점프의 크기는 해당 점의 확률과 같다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPXgpCj0KRl9YKHgpLUZfWCh4Xi0p"></div>

여기서 <span class="math-inline" data-tex-b64="Rl9YKHheLSk="></span>는 <span class="math-inline" data-tex-b64="eA=="></span>의 왼쪽 극한이다.

## 구간 확률 계산

CDF를 이용하면 구간 확률을 다음처럼 계산할 수 있다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShhPFhcbGUgYikKPQpGX1goYiktRl9YKGEp"></div>

이산형에서는 경계값을 포함하는지에 따라 확률이 달라질 수 있다. 예를 들어

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShhXGxlIFhcbGUgYikKPQpGX1goYiktRl9YKGFeLSk="></div>

이다.

## 정리

Random Variable은 표본공간의 결과를 실수에 대응시키는 함수이다. CDF는 <span class="math-inline" data-tex-b64="WFxsZSB4"></span>의 누적 확률을 나타내며, 양 끝에서 0과 1로 수렴하고, 단조 증가하며, 우연속이다.

## 연습 문제

1. 동전을 세 번 던질 때 앞면의 개수 <span class="math-inline" data-tex-b64="WA=="></span>에 대한 CDF를 구간별로 작성한다.
2. <span class="math-inline" data-tex-b64="Rih4KT0xLygxK2Veey14fSk="></span>가 CDF의 조건을 만족하는지 확인한다.
3. CDF의 점프 크기가 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShYPXgp"></span>와 같음을 설명한다.

## 풀이

### 1번

동전을 세 번 던졌을 때 앞면의 개수는 <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jpbm9taWFsfSgzLDEvMik="></span>이다. 각 확률은

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPTApPVxmcmFjMTgsXHF1YWQgXG1hdGhiYntQfShYPTEpPVxmcmFjMzgsXHF1YWQgXG1hdGhiYntQfShYPTIpPVxmcmFjMzgsXHF1YWQgXG1hdGhiYntQfShYPTMpPVxmcmFjMTg="></div>

이다. 따라서 CDF는

<div class="math-display" data-tex-b64="Rl9YKHgpPQpcYmVnaW57Y2FzZXN9CjAsJng8MCxcXApcZGZyYWMxOCwmMFxsZSB4PDEsXFwKXGRmcmFjMTIsJjFcbGUgeDwyLFxcClxkZnJhYzc4LCYyXGxlIHg8MyxcXAoxLCZ4XGdlMy4KXGVuZHtjYXNlc30="></div>

이다.

### 2번

<span class="math-inline" data-tex-b64="Rih4KT0xLygxK2Veey14fSk="></span>는 모든 실수에서 연속이므로 우연속이다. 또한

<div class="math-display" data-tex-b64="RicoeCk9XGZyYWN7ZV57LXh9fXsoMStlXnsteH0pXjJ9PjA="></div>

이므로 단조 증가한다. 양 끝의 극한은

<div class="math-display" data-tex-b64="XGxpbV97eFx0by1caW5mdHl9Rih4KT0wLFxxcXVhZCBcbGltX3t4XHRvXGluZnR5fUYoeCk9MQ=="></div>

이다. 따라서 CDF의 조건을 모두 만족한다.

### 3번

점 <span class="math-inline" data-tex-b64="eA=="></span>에서의 확률질량은 <span class="math-inline" data-tex-b64="WA=="></span>가 <span class="math-inline" data-tex-b64="eA=="></span> 이하일 확률에서 <span class="math-inline" data-tex-b64="eA=="></span>보다 작은 확률을 뺀 값이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxtYXRoYmJ7UH0oWD14KQomPVxtYXRoYmJ7UH0oWFxsZSB4KS1cbWF0aGJie1B9KFg8eClcXAomPUZfWCh4KS1GX1goeF4tKS4KXGVuZHthbGlnbmVkfQ=="></div>

따라서 CDF의 점프 크기가 바로 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShYPXgp"></span>이다.

---

**확률 이론 정리 시리즈** · 3/11 · [← 이전: 2. Kolmogorov 공리](/posts/probability-theory-02-kolmogorov-axioms/) · [다음: 4. 이산·연속 Random Variable과 PMF·PDF →](/posts/probability-theory-04-discrete-continuous-pmf-pdf/)
