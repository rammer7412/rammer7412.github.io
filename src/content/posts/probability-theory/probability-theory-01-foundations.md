---
title: "1. Probability Space와 사건"
description: "확률을 정의하기 위한 Probability Space의 세 요소와 사건의 집합 연산, 포함배제 원리를 정리한다."
date: "2025-04-28"
category: "확률 이론"
tags: ["probability-theory", "probability-space", "sample-space", "event", "set-operation"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 1
featured: false
draft: false
---
확률 이론은 ‘어떤 일이 일어날 가능성’을 수치로 표현하는 학문이지만, 확률값을 계산하기 전에 먼저 <strong>무엇을 결과로 보고 어떤 사건에 확률을 부여할지</strong> 정해야 한다. 이를 하나의 수학적 구조로 묶은 것이 Probability Space이다.

## Probability Space의 구성

Probability Space는 다음 세 요소로 이루어진다.

<div class="math-display" data-tex-b64="KFxPbWVnYSxcbWF0aGNhbHtGfSxcbWF0aGJie1B9KQ=="></div>

- <span class="math-inline" data-tex-b64="XE9tZWdh"></span>는 가능한 모든 결과를 모은 <strong>표본공간(sample space)</strong>이다.
- <span class="math-inline" data-tex-b64="XG1hdGhjYWx7Rn0="></span>는 확률을 부여할 사건들을 모은 <strong>사건족(event space)</strong>이다.
- <span class="math-inline" data-tex-b64="XG1hdGhiYntQfQ=="></span>는 각 사건에 0과 1 사이의 값을 부여하는 <strong>확률측도(probability measure)</strong>이다.

표본공간의 원소 하나를 결과(outcome)라고 한다. 사건(event)은 결과 하나 또는 여러 결과를 묶은 집합이다. 예를 들어 동전을 한 번 던질 때

<div class="math-display" data-tex-b64="XE9tZWdhPVx7SCxUXH0="></div>

이며, 앞면이 나오는 사건을 <span class="math-inline" data-tex-b64="QQ=="></span>라고 두면 <span class="math-inline" data-tex-b64="QT1ce0hcfQ=="></span>이다. “앞면 또는 뒷면이 나온다”는 사건은 표본공간 전체인 <span class="math-inline" data-tex-b64="XE9tZWdh"></span>와 같다.

유한하거나 셀 수 있는 표본공간에서는 흔히 <span class="math-inline" data-tex-b64="XG1hdGhjYWx7Rn09Ml57XE9tZWdhfQ=="></span>, 즉 모든 부분집합을 사건으로 사용한다. 연속적인 표본공간에서는 모든 부분집합에 일관된 확률을 부여할 수 없기 때문에, 보렐 집합과 같은 적절한 사건족을 사용한다.

## 사건의 집합 연산

사건은 집합이므로 집합 연산으로 결합할 수 있다.

- <span class="math-inline" data-tex-b64="QVxjdXAgQg=="></span>: <span class="math-inline" data-tex-b64="QQ=="></span> 또는 <span class="math-inline" data-tex-b64="Qg=="></span>가 일어나는 사건
- <span class="math-inline" data-tex-b64="QVxjYXAgQg=="></span>: <span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="Qg=="></span>가 동시에 일어나는 사건
- <span class="math-inline" data-tex-b64="QV5j"></span>: <span class="math-inline" data-tex-b64="QQ=="></span>가 일어나지 않는 사건
- <span class="math-inline" data-tex-b64="QVxzZXRtaW51cyBC"></span>: <span class="math-inline" data-tex-b64="QQ=="></span>는 일어나지만 <span class="math-inline" data-tex-b64="Qg=="></span>는 일어나지 않는 사건

포함 관계 <span class="math-inline" data-tex-b64="QVxzdWJzZXRlcSBC"></span>는 <span class="math-inline" data-tex-b64="QQ=="></span>가 일어나면 반드시 <span class="math-inline" data-tex-b64="Qg=="></span>도 일어난다는 뜻이다.

<div class="math-display" data-tex-b64="QVxzdWJzZXRlcSBCClxxdWFkXExvbmdsZWZ0cmlnaHRhcnJvd1xxdWFkClxvbWVnYVxpbiBBXFJpZ2h0YXJyb3dcb21lZ2FcaW4gQg=="></div>

De Morgan 법칙은 여집합이 포함된 사건을 바꿔 쓸 때 자주 사용한다.

<div class="math-display" data-tex-b64="KEFcY3VwIEIpXmM9QV5jXGNhcCBCXmMsClxxcXVhZAooQVxjYXAgQileYz1BXmNcY3VwIEJeYw=="></div>

## 서로 배반인 사건

두 사건이 동시에 일어날 수 없으면 <strong>서로 배반(mutually exclusive)</strong>이라고 한다.

<div class="math-display" data-tex-b64="QVxjYXAgQj1cdmFybm90aGluZw=="></div>

서로 배반이라는 말과 독립이라는 말은 다르다. 서로 배반인 사건은 동시에 발생할 수 없다는 뜻이고, 독립은 한 사건의 발생이 다른 사건의 확률을 바꾸지 않는다는 뜻이다. 확률이 0이 아닌 두 사건이 서로 배반이면 일반적으로 독립이 아니다.

## 포함배제 원리

<span class="math-inline" data-tex-b64="QQ=="></span>와 <span class="math-inline" data-tex-b64="Qg=="></span>의 확률을 단순히 더하면 교집합이 두 번 포함된다. 이 중복을 한 번 빼는 공식이 포함배제 원리이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKQo9ClxtYXRoYmJ7UH0oQSkrXG1hdGhiYntQfShCKS1cbWF0aGJie1B9KEFcY2FwIEIp"></div>

서로 배반인 경우에는 <span class="math-inline" data-tex-b64="XG1hdGhiYntQfShBXGNhcCBCKT0w"></span>이므로

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGN1cCBCKT1cbWF0aGJie1B9KEEpK1xtYXRoYmJ7UH0oQik="></div>

가 된다.

## 이후에 자주 사용하는 두 도구

확률분포의 식을 전개하거나 정규화할 때 이항정리와 Gamma Function이 자주 등장한다.

이항정리는 다음과 같다.

<div class="math-display" data-tex-b64="KGErYilebgo9ClxzdW1fe2s9MH1ee259XGJpbm9te259e2t9YV5rIGJee24ta30="></div>

특히 <span class="math-inline" data-tex-b64="YT1w"></span>, <span class="math-inline" data-tex-b64="Yj0xLXA="></span>를 대입하면 Binomial Distribution의 PMF 합이 1임을 바로 확인할 수 있다.

<div class="math-display" data-tex-b64="XHN1bV97az0wfV57bn1cYmlub217bn17a31wXmsoMS1wKV57bi1rfT0x"></div>

Gamma Function은 factorial을 양의 실수 영역으로 확장한 함수이다.

<div class="math-display" data-tex-b64="XEdhbW1hKFxhbHBoYSkKPQpcaW50XzBee1xpbmZ0eX10XntcYWxwaGEtMX1lXnstdH1cLGR0LApccXF1YWQgXGFscGhhPjA="></div>

부분적분을 적용하면 다음 점화식을 얻는다.

<div class="math-display" data-tex-b64="XEdhbW1hKFxhbHBoYSsxKT1cYWxwaGFcR2FtbWEoXGFscGhhKQ=="></div>

따라서 자연수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 <span class="math-inline" data-tex-b64="XEdhbW1hKG4rMSk9biE="></span>이며, <span class="math-inline" data-tex-b64="XEdhbW1hKDEvMik9XHNxcnR7XHBpfQ=="></span>이다.

## 정리

Probability Space는 표본공간, 사건족, 확률측도의 세 요소로 구성된다. 사건은 집합으로 다루며, 합집합·교집합·여집합을 이용해 복합 사건을 표현한다. 포함배제 원리는 사건 사이의 중복을 보정하는 기본 공식이다.

## 연습 문제

1. 주사위를 한 번 던질 때 표본공간과 “짝수가 나온다”라는 사건을 집합으로 표현한다.
2. 두 사건이 서로 배반인 경우와 독립인 경우의 차이를 예시로 설명한다.
3. 부분적분을 이용해 <span class="math-inline" data-tex-b64="XEdhbW1hKFxhbHBoYSsxKT1cYWxwaGFcR2FtbWEoXGFscGhhKQ=="></span>를 증명한다.

## 풀이

### 1번

주사위를 한 번 던질 때 가능한 결과는 1부터 6까지이므로 표본공간은

<div class="math-display" data-tex-b64="XE9tZWdhPVx7MSwyLDMsNCw1LDZcfQ=="></div>

이다. 짝수가 나오는 사건을 <span class="math-inline" data-tex-b64="QQ=="></span>라고 두면

<div class="math-display" data-tex-b64="QT1cezIsNCw2XH0="></div>

이다.

### 2번

서로 배반인 사건은 동시에 일어날 수 없는 사건이다. 주사위 한 번 던지기에서 <span class="math-inline" data-tex-b64="QT1cezFcfQ=="></span>과 <span class="math-inline" data-tex-b64="Qj1cezJcfQ=="></span>를 생각하면 <span class="math-inline" data-tex-b64="QVxjYXAgQj1cdmFybm90aGluZw=="></span>이므로 두 사건은 서로 배반이다. 그러나

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShBXGNhcCBCKT0wXG5lIFxtYXRoYmJ7UH0oQSlcbWF0aGJie1B9KEIpPVxmcmFjMXszNn0="></div>

이므로 독립은 아니다.

독립은 한 사건의 발생 여부가 다른 사건의 확률을 바꾸지 않는다는 뜻이다. 동전을 두 번 던질 때 첫 번째 동전이 앞면인 사건을 <span class="math-inline" data-tex-b64="Qw=="></span>, 두 번째 동전이 앞면인 사건을 <span class="math-inline" data-tex-b64="RA=="></span>라고 하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShDXGNhcCBEKT1cZnJhYzE0PVxmcmFjMTJcY2RvdFxmcmFjMTI9XG1hdGhiYntQfShDKVxtYXRoYmJ7UH0oRCk="></div>

이므로 두 사건은 독립이다. 독립인 사건은 동시에 일어날 수 있으므로 서로 배반과는 다른 개념이다.

### 3번

<span class="math-inline" data-tex-b64="XGFscGhhPjA="></span>이라 하자. Gamma Function의 정의에서

<div class="math-display" data-tex-b64="XEdhbW1hKFxhbHBoYSsxKT1caW50XzBeXGluZnR5IHhee1xhbHBoYX1lXnsteH1cLGR4"></div>

이다. 부분적분에서 <span class="math-inline" data-tex-b64="dT14XlxhbHBoYQ=="></span>, <span class="math-inline" data-tex-b64="ZHY9ZV57LXh9XCxkeA=="></span>로 두면 <span class="math-inline" data-tex-b64="ZHU9XGFscGhhIHhee1xhbHBoYS0xfVwsZHg="></span>, <span class="math-inline" data-tex-b64="dj0tZV57LXh9"></span>이다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9ClxHYW1tYShcYWxwaGErMSkKJj1cbGVmdFsteF5cYWxwaGEgZV57LXh9XHJpZ2h0XV8wXlxpbmZ0eQorXGFscGhhXGludF8wXlxpbmZ0eSB4XntcYWxwaGEtMX1lXnsteH1cLGR4XFwKJj1cYWxwaGFcR2FtbWEoXGFscGhhKS4KXGVuZHthbGlnbmVkfQ=="></div>

경계항은 <span class="math-inline" data-tex-b64="XGFscGhhPjA="></span>일 때 0이다.
