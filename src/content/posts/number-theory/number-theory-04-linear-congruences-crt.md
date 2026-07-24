---
title: "4. Linear Congruences and the Chinese Remainder Theorem"
description: "선형합동식의 해 존재 조건과 해의 개수를 증명하고, 여러 나머지 조건을 결합하는 Chinese Remainder Theorem을 정리한다."
date: "2026-01-27"
category: "정수론"
tags: ["number-theory", "linear-congruence", "chinese-remainder-theorem", "crt", "modular-inverse"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 4
featured: false
draft: false
---

선형합동식은 합동 이론에서 가장 기본적인 방정식이다. 하나의 선형합동식을 푸는 문제는 일차 디오판토스 방정식과 동일하며, 여러 합동식을 동시에 만족시키는 문제는 Chinese Remainder Theorem으로 해결된다.

## Linear Congruence와 Diophantine Equation

다음 선형합동식을 생각하자.

<div class="math-display" data-tex-b64="YXhcZXF1aXYgYlxwbW9kIG4="></div>

정의에 의해 이는 <span class="math-inline" data-tex-b64="blxtaWQoYXgtYik="></span>이고, 어떤 <span class="math-inline" data-tex-b64="eVxpblxtYXRoYmIgWg=="></span>에 대해

<div class="math-display" data-tex-b64="YXgtbnk9Yg=="></div>

라는 뜻이다. 따라서 선형합동식의 해 존재 문제는 계수 <span class="math-inline" data-tex-b64="YSwtbg=="></span>인 일차 디오판토스 방정식의 해 존재 문제와 같다.

## 해의 존재 조건

> <span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsbik="></span>이라 하자. 선형합동식
>
> <div class="math-display" data-tex-b64="YXhcZXF1aXYgYlxwbW9kIG4="></div>
>
> 은 <span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>일 때, 그리고 그때에만 해를 갖는다.

### 증명

해 <span class="math-inline" data-tex-b64="eA=="></span>가 존재하면 어떤 <span class="math-inline" data-tex-b64="eQ=="></span>에 대해 <span class="math-inline" data-tex-b64="YXgtbnk9Yg=="></span>이다. <span class="math-inline" data-tex-b64="ZA=="></span>는 <span class="math-inline" data-tex-b64="YSxu"></span>을 나누므로 <span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>이다.

반대로 <span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>라고 하자. Bézout’s Identity로

<div class="math-display" data-tex-b64="YXUrbnY9ZA=="></div>

인 정수 <span class="math-inline" data-tex-b64="dSx2"></span>가 존재하고 <span class="math-inline" data-tex-b64="Yj1kaw=="></span>로 쓸 수 있다. 양변에 <span class="math-inline" data-tex-b64="aw=="></span>를 곱하면

<div class="math-display" data-tex-b64="YSh1aykrbih2ayk9Yg=="></div>

이므로 <span class="math-inline" data-tex-b64="eF8wPXVr"></span>가 선형합동식의 한 해이다.

## 해의 개수와 형태

<span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>라 하자. 식을 <span class="math-inline" data-tex-b64="ZA=="></span>로 나누면

<div class="math-display" data-tex-b64="XGZyYWMgYWQgeFxlcXVpdlxmcmFjIGJkXHBtb2R7bi9kfQ=="></div>

이고

<div class="math-display" data-tex-b64="XGdjZFxsZWZ0KFxmcmFjIGFkLFxmcmFjIG5kXHJpZ2h0KT0x"></div>

이다. 따라서 <span class="math-inline" data-tex-b64="YS9k"></span>는 modulo <span class="math-inline" data-tex-b64="bi9k"></span>에서 역원을 가지며, 유일한 해

<div class="math-display" data-tex-b64="eFxlcXVpdiB4XzBccG1vZHtuL2R9"></div>

를 갖는다.

원래 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서는 다음 <span class="math-inline" data-tex-b64="ZA=="></span>개의 서로 합동이 아닌 해가 존재한다.

<div class="math-display" data-tex-b64="eF8wLFwgeF8wK1xmcmFjIG5kLFwgeF8wKzJcZnJhYyBuZCxcIFxsZG90cyxcIHhfMCsoZC0xKVxmcmFjIG5k"></div>

이들이 서로 다른 이유를 보자. 두 해가 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 같다면

<div class="math-display" data-tex-b64="eF8wK3RfMVxmcmFjIG5kXGVxdWl2IHhfMCt0XzJcZnJhYyBuZFxwbW9kIG4="></div>

이고, 정리 3의 약분 법칙을 적용하면 <span class="math-inline" data-tex-b64="dF8xXGVxdWl2IHRfMlxwbW9kIGQ="></span>이다. 그런데 <span class="math-inline" data-tex-b64="MFxsZSB0XzEsdF8yPGQ="></span>이므로 <span class="math-inline" data-tex-b64="dF8xPXRfMg=="></span>이다.

특히 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 해는 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 유일하고

<div class="math-display" data-tex-b64="eFxlcXVpdiBhXnstMX1iXHBtb2Qgbg=="></div>

이다.

## 예제: <span class="math-inline" data-tex-b64="MTh4XGVxdWl2MzBccG1vZHs0Mn0="></span>

<span class="math-inline" data-tex-b64="XGdjZCgxOCw0Mik9Ng=="></span>이고 <span class="math-inline" data-tex-b64="NlxtaWQzMA=="></span>이므로 해가 존재한다. 6으로 나누면

<div class="math-display" data-tex-b64="M3hcZXF1aXY1XHBtb2Q3"></div>

이다. <span class="math-inline" data-tex-b64="M157LTF9XGVxdWl2NVxwbW9kNw=="></span>이므로

<div class="math-display" data-tex-b64="eFxlcXVpdjI1XGVxdWl2NFxwbW9kNw=="></div>

이다. modulo 42에서는 정확히 6개의 해가 있다.

<div class="math-display" data-tex-b64="eFxlcXVpdjQsMTEsMTgsMjUsMzIsMzlccG1vZHs0Mn0="></div>

## 예제: <span class="math-inline" data-tex-b64="OXhcZXF1aXYyMVxwbW9kezMwfQ=="></span>

<span class="math-inline" data-tex-b64="XGdjZCg5LDMwKT0z"></span>이고 <span class="math-inline" data-tex-b64="M1xtaWQyMQ=="></span>이므로 3개의 해가 있다. 3으로 나누면

<div class="math-display" data-tex-b64="M3hcZXF1aXY3XHBtb2R7MTB9"></div>

이고 <span class="math-inline" data-tex-b64="M157LTF9XGVxdWl2N1xwbW9kezEwfQ=="></span>이므로 <span class="math-inline" data-tex-b64="eFxlcXVpdjlccG1vZHsxMH0="></span>이다. 따라서 modulo 30에서

<div class="math-display" data-tex-b64="eFxlcXVpdjksMTksMjlccG1vZHszMH0="></div>

이다.

## 연립합동식

여러 조건

<div class="math-display" data-tex-b64="eFxlcXVpdiBhXzFccG1vZHtuXzF9LFxxdWFkCnhcZXF1aXYgYV8yXHBtb2R7bl8yfSxccXVhZFxsZG90c1xxdWFkLAp4XGVxdWl2IGFfclxwbW9ke25fcn0="></div>

을 동시에 만족시키는 정수 <span class="math-inline" data-tex-b64="eA=="></span>를 찾고 싶다. 법들이 pairwise relatively prime일 때 Chinese Remainder Theorem이 완전한 답을 준다.

## Chinese Remainder Theorem

> 양의 정수 <span class="math-inline" data-tex-b64="bl8xLFxsZG90cyxuX3I="></span>가 서로 쌍마다 서로소라고 하자. 그러면 임의의 정수 <span class="math-inline" data-tex-b64="YV8xLFxsZG90cyxhX3I="></span>에 대해
>
> <div class="math-display" data-tex-b64="eFxlcXVpdiBhX2lccG1vZHtuX2l9XHFxdWFkKDFcbGUgaVxsZSByKQ=="></div>
>
> 를 만족하는 해가 존재하며, 그 해는 modulo
>
> <div class="math-display" data-tex-b64="Tj1uXzFuXzJcY2RvdHMgbl9y"></div>
>
> 에서 유일하다.

### 존재성 증명

<span class="math-inline" data-tex-b64="Tl9pPU4vbl9p"></span>라 두자. <span class="math-inline" data-tex-b64="Tl9p"></span>는 <span class="math-inline" data-tex-b64="bl9p"></span>와 서로소이므로 어떤 <span class="math-inline" data-tex-b64="eV9p"></span>가 존재하여

<div class="math-display" data-tex-b64="Tl9pIHlfaVxlcXVpdjFccG1vZHtuX2l9"></div>

이다. 다음 수를 만든다.

<div class="math-display" data-tex-b64="eD1cc3VtX3tpPTF9XnIgYV9pTl9pIHlfaQ=="></div>

고정된 <span class="math-inline" data-tex-b64="aw=="></span>에 대해 modulo <span class="math-inline" data-tex-b64="bl9r"></span>로 보자. <span class="math-inline" data-tex-b64="aVxuZXEgaw=="></span>이면 <span class="math-inline" data-tex-b64="bl9rXG1pZCBOX2k="></span>이므로 해당 항은 0과 합동이다. <span class="math-inline" data-tex-b64="aT1r"></span>인 항은 <span class="math-inline" data-tex-b64="Tl9reV9rXGVxdWl2MVxwbW9ke25fa30="></span>이므로

<div class="math-display" data-tex-b64="eFxlcXVpdiBhX2tccG1vZHtuX2t9"></div>

이다. 모든 <span class="math-inline" data-tex-b64="aw=="></span>에 대해 성립하므로 해가 존재한다.

### 유일성 증명

<span class="math-inline" data-tex-b64="eCx4Jw=="></span>가 모두 해라면 각 <span class="math-inline" data-tex-b64="aQ=="></span>에 대해 <span class="math-inline" data-tex-b64="bl9pXG1pZCh4LXgnKQ=="></span>이다. 법들이 서로 쌍마다 서로소이므로 그 곱 <span class="math-inline" data-tex-b64="Tg=="></span>도 <span class="math-inline" data-tex-b64="eC14Jw=="></span>를 나눈다. 따라서

<div class="math-display" data-tex-b64="eFxlcXVpdiB4J1xwbW9kIE4="></div>

이다.

## CRT 계산 예제

다음 연립합동식을 풀어 보자.

<div class="math-display" data-tex-b64="eFxlcXVpdjJccG1vZDMsXHFxdWFkCnhcZXF1aXYzXHBtb2Q1LFxxcXVhZAp4XGVxdWl2MlxwbW9kNw=="></div>

<span class="math-inline" data-tex-b64="Tj0zXGNkb3Q1XGNkb3Q3PTEwNQ=="></span>이고

<div class="math-display" data-tex-b64="Tl8xPTM1LFxxcXVhZCBOXzI9MjEsXHFxdWFkIE5fMz0xNQ=="></div>

이다. 각각의 역원은

<div class="math-display" data-tex-b64="MzVeey0xfVxlcXVpdjJccG1vZDMsXHFxdWFkMjFeey0xfVxlcXVpdjFccG1vZDUsXHFxdWFkMTVeey0xfVxlcXVpdjFccG1vZDc="></div>

이다. 따라서

<div class="math-display" data-tex-b64="eFxlcXVpdjJcY2RvdDM1XGNkb3QyKzNcY2RvdDIxXGNkb3QxKzJcY2RvdDE1XGNkb3QxCj0yMzNcZXF1aXYyM1xwbW9kezEwNX0="></div>

이다.

## 법들이 서로소가 아닐 때

두 합동식

<div class="math-display" data-tex-b64="eFxlcXVpdiBhXHBtb2QgbSxccXF1YWQgeFxlcXVpdiBiXHBtb2Qgbg=="></div>

은 항상 풀리는 것이 아니다. 해가 존재할 필요충분조건은

<div class="math-display" data-tex-b64="YVxlcXVpdiBiXHBtb2R7XGdjZChtLG4pfQ=="></div>

이다.

해 <span class="math-inline" data-tex-b64="eA=="></span>가 존재하면 <span class="math-inline" data-tex-b64="bVxtaWQoeC1hKQ=="></span>, <span class="math-inline" data-tex-b64="blxtaWQoeC1iKQ=="></span>이므로 <span class="math-inline" data-tex-b64="ZD1cZ2NkKG0sbik="></span>는 두 차를 모두 나눈다. 따라서 <span class="math-inline" data-tex-b64="ZFxtaWQoYS1iKQ=="></span>이다. 역방향은 <span class="math-inline" data-tex-b64="eD1hK21r"></span>를 두 번째 합동식에 대입하여 선형합동식

<div class="math-display" data-tex-b64="bWtcZXF1aXYgYi1hXHBtb2Qgbg=="></div>

의 해 존재 조건을 적용하면 된다.

해가 존재하면 modulo <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtsY219KG0sbik="></span>에서 유일하다.

## 정리

선형합동식은 일차 디오판토스 방정식으로 바뀌며, 최대공약수가 우변을 나누는지가 해의 존재를 결정한다. 해가 존재하면 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 정확히 <span class="math-inline" data-tex-b64="XGdjZChhLG4p"></span>개의 해가 생긴다. Chinese Remainder Theorem은 서로소인 여러 법에 대한 나머지 정보를 하나의 modulo 곱의 정보로 결합한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="MTR4XGVxdWl2OFxwbW9kezMwfQ=="></span>의 모든 해를 구한다.
2. 다음 연립합동식을 푼다.
   - <span class="math-inline" data-tex-b64="eFxlcXVpdjFccG1vZDQ="></span>
   - <span class="math-inline" data-tex-b64="eFxlcXVpdjNccG1vZDU="></span>
   - <span class="math-inline" data-tex-b64="eFxlcXVpdjRccG1vZDc="></span>
3. <span class="math-inline" data-tex-b64="eFxlcXVpdjJccG1vZDY="></span>, <span class="math-inline" data-tex-b64="eFxlcXVpdjVccG1vZDk="></span>가 해를 갖는지 판단한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="ZD1cZ2NkKDE0LDMwKT0y"></span>이고 <span class="math-inline" data-tex-b64="MlxtaWQ4"></span>이므로 해가 존재한다. 2로 나누면

<div class="math-display" data-tex-b64="N3hcZXF1aXY0XHBtb2R7MTV9"></div>

이다. <span class="math-inline" data-tex-b64="N157LTF9XGVxdWl2MTNccG1vZHsxNX0="></span>이므로

<div class="math-display" data-tex-b64="eFxlcXVpdjUyXGVxdWl2N1xwbW9kezE1fQ=="></div>

이다. modulo 30에서 두 해는 <span class="math-inline" data-tex-b64="eFxlcXVpdjcsMjJccG1vZHszMH0="></span>이다.

### 2번

<span class="math-inline" data-tex-b64="Tj00XGNkb3Q1XGNkb3Q3PTE0MA=="></span>이다. <span class="math-inline" data-tex-b64="Tl8xPTM1"></span>, <span class="math-inline" data-tex-b64="Tl8yPTI4"></span>, <span class="math-inline" data-tex-b64="Tl8zPTIw"></span>이고

<div class="math-display" data-tex-b64="MzVeey0xfVxlcXVpdjNccG1vZDQsXHF1YWQyOF57LTF9XGVxdWl2MlxwbW9kNSxccXVhZDIwXnstMX1cZXF1aXY2XHBtb2Q3"></div>

이다. 따라서

<div class="math-display" data-tex-b64="eFxlcXVpdjFcY2RvdDM1XGNkb3QzKzNcY2RvdDI4XGNkb3QyKzRcY2RvdDIwXGNkb3Q2PTc1M1xlcXVpdjUzXHBtb2R7MTQwfQ=="></div>

이다.

### 3번

<span class="math-inline" data-tex-b64="XGdjZCg2LDkpPTM="></span>인데 <span class="math-inline" data-tex-b64="Mlxub3RcZXF1aXY1XHBtb2Qz"></span>가 아니라 실제로 둘 다 2와 합동이므로 조건을 만족한다. 해가 존재한다. 첫 식에서 <span class="math-inline" data-tex-b64="eD0yKzZr"></span>를 두 번째에 대입하면

<div class="math-display" data-tex-b64="Mis2a1xlcXVpdjVccG1vZDlccXVhZFxMb25nbGVmdHJpZ2h0YXJyb3dccXVhZDZrXGVxdWl2M1xwbW9kOQ=="></div>

이고 <span class="math-inline" data-tex-b64="a1xlcXVpdjJccG1vZDM="></span>이다. 따라서 <span class="math-inline" data-tex-b64="eD0xNCsxOHQ="></span>, 즉 <span class="math-inline" data-tex-b64="eFxlcXVpdjE0XHBtb2R7MTh9"></span>이다.
