---
title: "11. Pumping Lemma와 Non-Regular Language 증명"
description: "DFA의 State 반복에서 Pumping Lemma를 유도하고 Quantifier 순서를 지켜 Non-Regular Language를 증명한다."
date: "2025-08-16"
category: "계산이론"
tags: ["theory-of-computation", "pumping-lemma", "non-regular", "proof"]
domain: "theory-of-computation"
format: "study-note"
series: "theory-of-computation"
seriesOrder: 11
featured: false
draft: false
---
Regular Language의 DFA는 State가 유한하다. 충분히 긴 String을 읽으면 어떤 State를 반복해서 방문할 수밖에 없으며, 반복 구간을 여러 번 순환해도 Accept할 수 있다. 이 성질을 형식화한 것이 <strong>Pumping Lemma</strong>이다.

## 정리의 내용

<span class="math-inline" data-tex-b64="TA=="></span>이 Regular이면 어떤 정수 <span class="math-inline" data-tex-b64="cFxnZTE="></span>이 존재하여, <span class="math-inline" data-tex-b64="TA=="></span>의 모든 String <span class="math-inline" data-tex-b64="dw=="></span> 중 <span class="math-inline" data-tex-b64="fHd8XGdlIHA="></span>인 것은

<div class="math-display" data-tex-b64="dz14eXo="></div>

로 분해할 수 있고 다음을 만족한다.

<div class="math-display" data-tex-b64="fHh5fFxsZSBw"></div>

<div class="math-display" data-tex-b64="fHl8PjA="></div>

<div class="math-display" data-tex-b64="eHleaXpcaW4gTFxxcXVhZFx0ZXh0e2ZvciBldmVyeSB9aVxnZTA="></div>

<span class="math-inline" data-tex-b64="cA=="></span>를 Pumping Length라고 한다.

## DFA에서 나오는 이유

<span class="math-inline" data-tex-b64="cA=="></span>개의 State를 가진 DFA가 길이 <span class="math-inline" data-tex-b64="cA=="></span> 이상의 Prefix를 읽으면 방문한 State는 <span class="math-inline" data-tex-b64="cCsx"></span>개이다. Pigeonhole Principle에 의해 어떤 State가 두 번 등장한다. 두 방문 사이에서 읽은 부분이 <span class="math-inline" data-tex-b64="eQ=="></span>이고, 이 부분은 Loop를 이룬다.

Loop를 0번, 1번, 여러 번 통과해도 나머지 경로를 따라 같은 Accept State에 도달하므로 <span class="math-inline" data-tex-b64="eQ=="></span>를 Pump할 수 있다.

## Quantifier 순서

Non-Regular 증명에서 가장 중요한 부분이다.

1. <span class="math-inline" data-tex-b64="TA=="></span>이 Regular이라고 가정한다.
2. Lemma가 보장하는 임의의 Pumping Length <span class="math-inline" data-tex-b64="cA=="></span>를 받는다.
3. 증명자가 <span class="math-inline" data-tex-b64="fHd8XGdlIHA="></span>인 적절한 <span class="math-inline" data-tex-b64="d1xpbiBM"></span>을 선택한다.
4. 상대가 조건을 만족하는 임의의 분해 <span class="math-inline" data-tex-b64="dz14eXo="></span>를 선택한다고 본다.
5. 모든 가능한 분해에 대해 어떤 <span class="math-inline" data-tex-b64="aQ=="></span>를 골라 <span class="math-inline" data-tex-b64="eHleaXpcbm90aW4gTA=="></span>임을 보인다.

증명자가 <span class="math-inline" data-tex-b64="eCx5LHo="></span>를 편한 방식으로 하나만 선택하면 충분하지 않다.

## 예제: <span class="math-inline" data-tex-b64="XHswXm4xXm5cbWlkIG5cZ2UwXH0="></span>

Regular이라고 가정하고 Pumping Length를 <span class="math-inline" data-tex-b64="cA=="></span>라고 한다. String을

<div class="math-display" data-tex-b64="dz0wXnAxXnA="></div>

로 선택한다.

<span class="math-inline" data-tex-b64="fHh5fFxsZSBw"></span>이므로 <span class="math-inline" data-tex-b64="eA=="></span>, <span class="math-inline" data-tex-b64="eQ=="></span>는 처음 <span class="math-inline" data-tex-b64="cA=="></span>개의 0 안에 있다. <span class="math-inline" data-tex-b64="fHl8PjA="></span>이므로 어떤 <span class="math-inline" data-tex-b64="a1xnZTE="></span>에 대해

<div class="math-display" data-tex-b64="eT0wXms="></div>

이다.

<span class="math-inline" data-tex-b64="aT0w"></span>으로 Pump Down하면

<div class="math-display" data-tex-b64="eHleMHo9MF57cC1rfTFecA=="></div>

이다. 0과 1의 개수가 다르므로 Language에 속하지 않는다. Pumping Lemma와 모순이므로 Language는 Regular하지 않다.

## Pumping Lemma의 한계

Pumping Lemma는 Regular Language의 필요조건이지 충분조건이 아니다. 어떤 Language가 Pumping Property와 비슷한 성질을 만족한다고 해서 반드시 Regular인 것은 아니다. 주된 용도는 Non-Regular임을 증명하는 것이다.

또한 String 선택이 좋지 않으면 모순을 만들기 어렵다. Language의 핵심 제약을 강제로 드러내는 String을 선택해야 한다.

## Closure와 결합한 증명

Pumping Lemma를 복잡한 Language에 직접 적용하기 어렵다면 Regular Language와 Intersection하여 단순한 Non-Regular Language로 줄일 수 있다.

<div class="math-display" data-tex-b64="TFx0ZXh0eyByZWd1bGFy65286rOgIOqwgOyglX1cUmlnaHRhcnJvdyBMXGNhcCBSXHRleHR7IHJlZ3VsYXJ9"></div>

그런데 <span class="math-inline" data-tex-b64="TFxjYXAgUg=="></span>이 알려진 Non-Regular Language이면 모순이다.

## 정리

- 충분히 긴 Regular String에는 Pump 가능한 Loop가 있다.
- Non-Regular 증명에서는 모든 허용된 분해를 처리해야 한다.
- <span class="math-inline" data-tex-b64="fHh5fFxsZSBw"></span> 조건을 이용해 <span class="math-inline" data-tex-b64="eQ=="></span>의 위치를 제한한다.
- Pumping Lemma는 Regular임을 증명하는 도구가 아니라 주로 Non-Regular임을 증명하는 도구이다.

## 연습 문제

### 1번

<div class="math-display" data-tex-b64="TD1cezBebjFeezJufVxtaWQgblxnZTBcfQ=="></div>

이 Regular하지 않음을 Pumping Lemma로 증명한다.

### 2번

다음 잘못된 주장에 어떤 문제가 있는지 설명한다. “<span class="math-inline" data-tex-b64="dz0wXnAxXnA="></span>에서 <span class="math-inline" data-tex-b64="eT0w"></span>으로 선택했더니 Pumping이 실패하므로 Non-Regular이다.”

## 풀이

### 1번

<span class="math-inline" data-tex-b64="dz0wXnAxXnsycH0="></span>를 선택한다. 모든 허용된 분해에서 <span class="math-inline" data-tex-b64="eT0wXms="></span>, <span class="math-inline" data-tex-b64="a1xnZTE="></span>이다. <span class="math-inline" data-tex-b64="aT0w"></span>이면

<div class="math-display" data-tex-b64="MF57cC1rfTFeezJwfQ=="></div>

가 된다. 1의 개수는 0의 개수의 두 배가 아니므로 Language에 속하지 않는다.

### 2번

Pumping Lemma에서는 분해를 증명자가 선택할 수 없다. 조건을 만족하는 <strong>모든</strong> <span class="math-inline" data-tex-b64="eCx5LHo="></span>에 대해 실패함을 보여야 한다. 다만 이 예에서는 <span class="math-inline" data-tex-b64="fHh5fFxsZSBw"></span>를 이용하면 모든 가능한 <span class="math-inline" data-tex-b64="eQ=="></span>가 0으로만 이루어진다는 사실을 증명할 수 있으므로 그 뒤에 Pumping을 적용해야 한다.
