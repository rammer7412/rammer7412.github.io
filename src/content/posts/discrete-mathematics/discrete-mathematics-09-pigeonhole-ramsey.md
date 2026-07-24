---
title: "9. Pigeonhole Principle과 Ramsey Theory"
description: "Pigeonhole Principle과 일반화를 다양한 존재성 문제에 적용하고 Graph Coloring 관점에서 Ramsey Number를 이해한다."
date: "2026-07-24"
category: "이산수학"
tags: ["discrete-mathematics", "pigeonhole-principle", "ramsey-theory", "ramsey-number", "existence-proof"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 9
featured: false
draft: false
---

Pigeonhole Principle은 단순해 보이지만 “특정 구조가 반드시 존재한다”는 결론을 얻는 강력한 도구이다. Ramsey Theory는 충분히 큰 구조 안에는 완전한 무질서가 존재할 수 없고, 일정한 패턴이 반드시 나타난다는 생각을 확장한다.

## Pigeonhole Principle

<span class="math-inline" data-tex-b64="bisx"></span>개의 대상을 <span class="math-inline" data-tex-b64="bg=="></span>개의 상자에 넣으면 어떤 상자에는 적어도 두 대상이 들어간다. 함수로 표현하면 더 큰 유한집합에서 더 작은 유한집합으로 가는 함수는 injection일 수 없다.

<div class="math-display" data-tex-b64="XGx2ZXJ0IEFccnZlcnQ+XGx2ZXJ0IEJccnZlcnQKXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZApcZXhpc3RzIGFfMVxuZSBhXzJcaW4gQSxcIGYoYV8xKT1mKGFfMik="></div>

문제를 풀 때 무엇이 pigeon이고 무엇이 hole인지 정하는 것이 핵심이다.

## 합이 9인 두 수

집합 <span class="math-inline" data-tex-b64="XHsxLDIsXGxkb3RzLDhcfQ=="></span>에서 5개를 선택하면 합이 9인 두 수가 반드시 존재한다. 다음 네 쌍을 hole로 본다.

<div class="math-display" data-tex-b64="XHsxLDhcfSxcIFx7Miw3XH0sXCBcezMsNlx9LFwgXHs0LDVcfQ=="></div>

선택한 5개가 pigeon이다. 네 쌍에 5개를 넣으면 어떤 쌍에서는 두 수를 모두 선택하게 되고, 그 합은 9이다.

## 악수 횟수 문제

<span class="math-inline" data-tex-b64="bg=="></span>명이 있는 모임에서 각 사람의 악수 횟수는 0부터 <span class="math-inline" data-tex-b64="bi0x"></span> 사이이다. 겉으로는 <span class="math-inline" data-tex-b64="bg=="></span>개의 값이 있어 Pigeonhole Principle을 바로 적용할 수 없어 보인다.

그러나 악수 횟수 0인 사람과 <span class="math-inline" data-tex-b64="bi0x"></span>인 사람은 동시에 존재할 수 없다. 누군가 모두와 악수했다면 아무와도 악수하지 않은 사람은 없기 때문이다. 따라서 실제 가능한 악수 횟수는 최대 <span class="math-inline" data-tex-b64="bi0x"></span>종류이고, <span class="math-inline" data-tex-b64="bg=="></span>명 중 적어도 두 사람의 악수 횟수가 같다.

## Generalized Pigeonhole Principle

<span class="math-inline" data-tex-b64="Tg=="></span>개의 대상을 <span class="math-inline" data-tex-b64="aw=="></span>개의 상자에 넣으면 어떤 상자에는 적어도

<div class="math-display" data-tex-b64="XGxlZnRcbGNlaWxcZnJhYyBOa1xyaWdodFxyY2VpbA=="></div>

개의 대상이 들어간다.

예를 들어 학생이 67명이면 12개월 중 어떤 달에는 적어도

<div class="math-display" data-tex-b64="XGxlZnRcbGNlaWxcZnJhY3s2N317MTJ9XHJpZ2h0XHJjZWlsPTY="></div>

명이 태어났다.

## 부분집합 합의 충돌

서로 다른 90개의 25자리 양의 정수가 있다고 하자. 모든 부분집합을 pigeon으로, 부분집합 합을 hole로 둔다.

부분집합은 <span class="math-inline" data-tex-b64="Ml57OTB9"></span>개이다. 각 수가 최대 <span class="math-inline" data-tex-b64="MTBeezI1fS0x"></span>이므로 부분집합 합은 0부터 <span class="math-inline" data-tex-b64="OTAoMTBeezI1fS0xKQ=="></span> 사이에 있다. 가능한 합보다 부분집합 수가 더 많으므로 서로 다른 두 부분집합의 합이 같아진다.

이 예제는 실제 두 부분집합을 찾지 않고도 존재를 보인다. Pigeonhole Principle은 constructive algorithm을 주지 않을 수 있다.

## Graph Coloring으로 보는 모임

6명의 사람을 Vertex로 두고, 서로 아는 두 사람 사이의 Edge를 빨간색, 서로 모르는 두 사람 사이의 Edge를 파란색으로 칠한다. “서로 아는 세 사람 또는 서로 모르는 세 사람”은 한 색으로 칠해진 Triangle을 찾는 문제이다.

임의의 한 사람 <span class="math-inline" data-tex-b64="dg=="></span>를 고른다. 나머지 5명과 연결된 Edge 중 적어도 3개는 같은 색이다. 이를 빨간색이라고 하고 해당 세 Vertex를 <span class="math-inline" data-tex-b64="YSxiLGM="></span>라고 하자.

- <span class="math-inline" data-tex-b64="YSxiLGM="></span> 사이에 빨간 Edge가 하나라도 있으면 그 Edge와 <span class="math-inline" data-tex-b64="dg=="></span>가 빨간 Triangle을 만든다.
- 빨간 Edge가 하나도 없으면 <span class="math-inline" data-tex-b64="YSxiLGM="></span> 사이의 세 Edge가 모두 파란색이므로 파란 Triangle을 만든다.

따라서 6명에서는 원하는 세 사람이 반드시 존재한다.

## Ramsey Number

<span class="math-inline" data-tex-b64="UihtLG4p"></span>은 Complete Graph의 Edge를 빨강과 파랑으로 칠할 때 빨간 <span class="math-inline" data-tex-b64="S19t"></span> 또는 파란 <span class="math-inline" data-tex-b64="S19u"></span>이 반드시 존재하도록 하는 최소 Vertex 수이다.

앞의 증명은

<div class="math-display" data-tex-b64="UigzLDMpXGxlNg=="></div>

을 보인다. 정확히 6임을 보이려면 5개의 Vertex에서는 조건을 피할 수 있는 coloring을 제시해야 한다. 5각형의 변을 빨간색, 대각선을 파란색으로 칠하면 어느 색에도 Triangle이 없다. 따라서

<div class="math-display" data-tex-b64="UigzLDMpPjU="></div>

이고 두 부등식을 합치면

<div class="math-display" data-tex-b64="UigzLDMpPTY="></div>

이다.

## 간단한 Ramsey Number

<span class="math-inline" data-tex-b64="UigyLG4pPW4="></span>이다. 빨간 <span class="math-inline" data-tex-b64="S18y"></span>는 빨간 Edge 하나를 뜻한다.

- <span class="math-inline" data-tex-b64="bg=="></span>개의 Vertex에서 빨간 Edge가 하나라도 있으면 빨간 <span class="math-inline" data-tex-b64="S18y"></span>가 있다.
- 빨간 Edge가 없으면 모든 Edge가 파란색이므로 파란 <span class="math-inline" data-tex-b64="S19u"></span>이 있다.

반면 <span class="math-inline" data-tex-b64="bi0x"></span>개의 Vertex에서는 파란 Complete Graph로 칠해도 파란 <span class="math-inline" data-tex-b64="S19u"></span>이 없으므로 최소값은 <span class="math-inline" data-tex-b64="bg=="></span>이다.

## Ramsey Theory의 관점

Ramsey Theory는 충분히 큰 대상에서 특정한 homogeneous structure가 피할 수 없이 등장한다는 이론이다. 실제 Ramsey Number는 작은 값조차 계산하기 매우 어려울 수 있다. 중요한 것은 무작위처럼 보이는 coloring에서도 크기가 충분하면 완전히 같은 색의 부분구조가 반드시 생긴다는 사실이다.

## 정리

Pigeonhole Principle은 대상 수가 분류 수보다 많으면 충돌이 발생한다는 원리이다. Generalized version은 한 상자에 들어가는 최소 개수를 준다. Ramsey Theory에서는 Edge Coloring에 Pigeonhole Principle을 적용하여 monochromatic complete subgraph의 존재를 보인다.

## 연습 문제

1. 13명 중 같은 달에 태어난 두 사람이 반드시 존재함을 보인다.
2. 임의의 6개 정수를 5로 나눈 나머지가 같은 두 수가 존재함을 보인다.
3. 5각형 coloring이 단색 Triangle을 만들지 않는 이유를 설명한다.

## 풀이

### 1번

13명을 pigeon, 12개월을 hole로 두면 어떤 달에는 적어도 두 명이 들어간다.

### 2번

정수를 5로 나눈 나머지는 <span class="math-inline" data-tex-b64="MCwxLDIsMyw0"></span>의 다섯 종류이다. 6개 정수를 분류하면 같은 나머지를 갖는 두 정수가 존재한다. 두 수의 차는 5의 배수이다.

### 3번

5각형의 변을 빨강, 대각선을 파랑으로 칠한다. 빨간 그래프는 길이 5의 cycle이므로 Triangle이 없다. 파란 그래프도 대각선들로 이루어진 또 다른 길이 5의 cycle이므로 Triangle이 없다. 따라서 5명만으로는 단색 Triangle이 반드시 존재하지 않는다.
