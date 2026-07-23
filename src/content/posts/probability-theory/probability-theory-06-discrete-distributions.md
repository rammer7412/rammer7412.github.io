---
title: "6. 주요 이산 Distribution"
description: "Bernoulli, Binomial, Geometric, Negative Binomial, Hypergeometric, Poisson Distribution의 의미와 사용 조건을 정리한다."
date: "2025-06-29"
category: "확률 이론"
tags: ["probability-theory", "discrete-distribution", "binomial", "poisson", "geometric"]
domain: "probability-theory"
format: "study-note"
series: "probability-theory"
seriesOrder: 6
featured: false
draft: false
---
이산 Distribution은 셀 수 있는 값에 확률을 배분한다. 공식을 외우기보다 **무엇을 세는 Random Variable인지**, **시행이 독립인지**, **복원추출인지**를 먼저 확인해야 적절한 Distribution을 선택할 수 있다.

## Bernoulli Distribution

한 번의 시행 결과가 성공과 실패 두 가지뿐일 때 사용한다. 성공을 1, 실패를 0으로 두면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPTEpPXAsClxxcXVhZApcbWF0aGJie1B9KFg9MCk9MS1w"></div>

이다. 이를 <span class="math-inline" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jlcm5vdWxsaX0ocCk="></span>로 쓴다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1wLApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPXAoMS1wKQ=="></div>

## Binomial Distribution

성공 확률이 <span class="math-inline" data-tex-b64="cA=="></span>인 독립 Bernoulli 시행을 <span class="math-inline" data-tex-b64="bg=="></span>번 반복했을 때 성공 횟수를 나타낸다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jpbm9taWFsfShuLHAp"></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspCj0KXGJpbm9te259e2t9cF5rKDEtcClee24ta30sClxxcXVhZCBrPTAsMSxcbGRvdHMsbg=="></div>

조합계수는 성공이 일어나는 <span class="math-inline" data-tex-b64="aw=="></span>개의 위치를 선택하는 경우의 수이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1ucCwKXHFxdWFkClxvcGVyYXRvcm5hbWV7VmFyfShYKT1ucCgxLXAp"></div>

## Geometric Distribution

독립 Bernoulli 시행을 성공할 때까지 반복할 때, 첫 성공이 나오는 시행 번호를 나타낸다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspCj0KKDEtcClee2stMX1wLApccXF1YWQgaz0xLDIsXGxkb3Rz"></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhYzFwLApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxmcmFjezEtcH17cF4yfQ=="></div>

Geometric Distribution은 기억 없음 성질을 가진다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPnMrdFxtaWQgWD5zKT1cbWF0aGJie1B9KFg+dCk="></div>

이미 <span class="math-inline" data-tex-b64="cw=="></span>번 실패했다는 사실이 앞으로 기다릴 시간의 Distribution을 바꾸지 않는다는 뜻이다.

## Negative Binomial Distribution

<span class="math-inline" data-tex-b64="cg=="></span>번째 성공이 나올 때까지 필요한 시행 횟수를 나타낸다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspCj0KXGJpbm9te2stMX17ci0xfXBecigxLXApXntrLXJ9LApccXF1YWQgaz1yLHIrMSxcbGRvdHM="></div>

마지막 <span class="math-inline" data-tex-b64="aw=="></span>번째 시행은 반드시 성공이고, 앞의 <span class="math-inline" data-tex-b64="ay0x"></span>번 중 <span class="math-inline" data-tex-b64="ci0x"></span>번이 성공해야 한다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cZnJhY3tyfXtwfSwKXHFxdWFkClxvcGVyYXRvcm5hbWV7VmFyfShYKT1cZnJhY3tyKDEtcCl9e3BeMn0="></div>

## Hypergeometric Distribution

유한한 모집단에서 복원하지 않고 표본을 뽑을 때 사용한다. 전체 <span class="math-inline" data-tex-b64="Tg=="></span>개 중 성공 항목이 <span class="math-inline" data-tex-b64="Sw=="></span>개이고, <span class="math-inline" data-tex-b64="bg=="></span>개를 뽑았을 때 성공 개수를 <span class="math-inline" data-tex-b64="WA=="></span>라 하면

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspCj0KXGZyYWN7XGJpbm9te0t9e2t9XGJpbm9te04tS317bi1rfX17XGJpbm9te059e259fQ=="></div>

이다. 복원하지 않으므로 각 추출은 독립이 아니다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1uXGZyYWN7S317Tn0="></div>

<div class="math-display" data-tex-b64="XG9wZXJhdG9ybmFtZXtWYXJ9KFgpCj0KblxmcmFje0t9e059XGxlZnQoMS1cZnJhY3tLfXtOfVxyaWdodClcZnJhY3tOLW59e04tMX0="></div>

마지막 인자는 유한모집단 보정이다.

## Poisson Distribution

일정한 시간이나 공간 구간에서 드물게 발생하는 사건의 개수를 모델링할 때 사용한다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGEp"></div>

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspCj0KZV57LVxsYW1iZGF9XGZyYWN7XGxhbWJkYV5rfXtrIX0sClxxcXVhZCBrPTAsMSwyLFxsZG90cw=="></div>

<span class="math-inline" data-tex-b64="XGxhbWJkYQ=="></span>는 한 구간에서 기대되는 평균 발생 횟수이다.

<div class="math-display" data-tex-b64="XG1hdGhiYntFfVtYXT1cbGFtYmRhLApccXF1YWQKXG9wZXJhdG9ybmFtZXtWYXJ9KFgpPVxsYW1iZGE="></div>

독립인 Poisson Random Variable의 합도 Poisson Distribution을 따른다.

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGEpLApccXVhZApZXHNpbVxvcGVyYXRvcm5hbWV7UG9pc3Nvbn0oXHRoZXRhKQpccXVhZFxMb25ncmlnaHRhcnJvd1xxdWFkClgrWVxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KFxsYW1iZGErXHRoZXRhKQ=="></div>

## Distribution 선택 기준

- 한 번의 성공·실패: Bernoulli
- 독립 시행 <span class="math-inline" data-tex-b64="bg=="></span>번의 성공 횟수: Binomial
- 첫 성공까지의 시행 횟수: Geometric
- <span class="math-inline" data-tex-b64="cg=="></span>번째 성공까지의 시행 횟수: Negative Binomial
- 비복원추출에서의 성공 개수: Hypergeometric
- 일정 구간에서 발생한 사건의 개수: Poisson

## 연습 문제

1. 불량률이 0.02인 제품 100개 중 불량품 수를 Binomial Distribution으로 나타낸다.
2. 카드 52장 중 5장을 비복원추출할 때 에이스 수의 Distribution을 구한다.
3. 시간당 평균 3회 발생하는 사건이 2시간 동안 5회 발생할 확률을 구한다.

## 풀이

### 1번

각 제품의 불량 여부가 서로 독립이고 불량률이 일정하다고 가정하면, 불량품 수 <span class="math-inline" data-tex-b64="WA=="></span>는

<div class="math-display" data-tex-b64="WFxzaW1cb3BlcmF0b3JuYW1le0Jpbm9taWFsfSgxMDAsMC4wMik="></div>

이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspPVxiaW5vbXsxMDB9e2t9KDAuMDIpXmsoMC45OCleezEwMC1rfSxccXF1YWQgaz0wLDEsXGxkb3RzLDEwMA=="></div>

이다.

### 2번

전체 52장 중 에이스가 4장이고 비복원으로 5장을 뽑으므로 에이스 수 <span class="math-inline" data-tex-b64="WA=="></span>는 Hypergeometric Distribution을 따른다.

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShYPWspPVxmcmFje1xiaW5vbXs0fXtrfVxiaW5vbXs0OH17NS1rfX17XGJpbm9tezUyfXs1fX0sXHFxdWFkIGs9MCwxLDIsMyw0"></div>

이다.

### 3번

2시간 동안의 평균 발생 횟수는 <span class="math-inline" data-tex-b64="M1x0aW1lczI9Ng=="></span>이므로 <span class="math-inline" data-tex-b64="TlxzaW1cb3BlcmF0b3JuYW1le1BvaXNzb259KDYp"></span>이다. 따라서

<div class="math-display" data-tex-b64="XG1hdGhiYntQfShOPTUpPWVeey02fVxmcmFjezZeNX17NSF9XGFwcHJveDAuMTYwNg=="></div>

이다.
