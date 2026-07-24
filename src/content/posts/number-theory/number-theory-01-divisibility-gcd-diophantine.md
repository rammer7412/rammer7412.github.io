---
title: "1. Divisibility, GCD, and Diophantine Equations"
description: "정수의 나눗셈 구조에서 출발해 최대공약수, Bézout 항등식, 유클리드 알고리즘과 일차 디오판토스 방정식까지 연결한다."
date: "2026-01-22"
category: "정수론"
tags: ["number-theory", "divisibility", "gcd", "euclidean-algorithm", "diophantine-equation"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 1
featured: false
draft: false
---

정수론은 정수를 단순히 계산하는 데서 끝나지 않고, 어떤 정수가 다른 정수를 나누는지, 공약수는 어떤 구조를 가지는지, 정수해를 갖는 방정식은 언제 풀리는지를 연구한다. 이 글에서는 이후의 합동식과 소수 이론을 이해하는 데 필요한 가장 기본적인 도구를 정리한다.

## Divisibility

정수 <span class="math-inline" data-tex-b64="YQ=="></span>, <span class="math-inline" data-tex-b64="Yg=="></span>에 대하여 <span class="math-inline" data-tex-b64="YVxuZXEw"></span>일 때, 어떤 정수 <span class="math-inline" data-tex-b64="Yw=="></span>가 존재하여

<div class="math-display" data-tex-b64="Yj1hYw=="></div>

가 되면 <span class="math-inline" data-tex-b64="YQ=="></span>가 <span class="math-inline" data-tex-b64="Yg=="></span>를 나눈다고 하고 <span class="math-inline" data-tex-b64="YVxtaWQgYg=="></span>로 쓴다. 이때 <span class="math-inline" data-tex-b64="YQ=="></span>는 <span class="math-inline" data-tex-b64="Yg=="></span>의 divisor 또는 factor이고, <span class="math-inline" data-tex-b64="Yg=="></span>는 <span class="math-inline" data-tex-b64="YQ=="></span>의 multiple이다.

예를 들어 <span class="math-inline" data-tex-b64="M1xtaWQgMTg="></span>이지만 <span class="math-inline" data-tex-b64="NFxubWlkMTg="></span>이다. 정의에서 바로 다음 성질을 얻는다.

- <span class="math-inline" data-tex-b64="YVxtaWQw"></span>, <span class="math-inline" data-tex-b64="MVxtaWQgYQ=="></span>, <span class="math-inline" data-tex-b64="YVxtaWQgYQ=="></span>
- <span class="math-inline" data-tex-b64="YVxtaWQgYg=="></span>이고 <span class="math-inline" data-tex-b64="YlxtaWQgYw=="></span>이면 <span class="math-inline" data-tex-b64="YVxtaWQgYw=="></span>
- <span class="math-inline" data-tex-b64="YVxtaWQgYg=="></span>이고 <span class="math-inline" data-tex-b64="YVxtaWQgYw=="></span>이면 임의의 <span class="math-inline" data-tex-b64="eCx5XGluXG1hdGhiYiBa"></span>에 대해 <span class="math-inline" data-tex-b64="YVxtaWQgYngrY3k="></span>
- <span class="math-inline" data-tex-b64="YVxtaWQgYg=="></span>, <span class="math-inline" data-tex-b64="YlxuZXEw"></span>이면 <span class="math-inline" data-tex-b64="fGF8XGxlIHxifA=="></span>

마지막에서 특히 중요한 것은 공약수가 두 수의 모든 정수 선형결합을 나눈다는 사실이다. 이 성질이 Bézout’s Identity와 Euclidean Algorithm의 기반이 된다.

## Division Algorithm

<strong>Division Algorithm</strong>은 정수를 양의 정수로 나누었을 때 몫과 나머지가 정확히 하나씩 존재한다는 정리이다.

> <span class="math-inline" data-tex-b64="YVxpblxtYXRoYmIgWg=="></span>, <span class="math-inline" data-tex-b64="YlxpblxtYXRoYmIgWl97PjB9"></span>이면 유일한 정수 <span class="math-inline" data-tex-b64="cSxy"></span>가 존재하여
>
> <div class="math-display" data-tex-b64="YT1icStyLFxxcXVhZCAwXGxlIHI8Yg=="></div>
>
> 를 만족한다.

### 존재성 증명

다음 집합을 생각한다.

<div class="math-display" data-tex-b64="Uz1ce2EtYnhcbWlkIHhcaW5cbWF0aGJiIFosXCBhLWJ4XGdlMFx9"></div>

<span class="math-inline" data-tex-b64="Uw=="></span>는 공집합이 아니다. <span class="math-inline" data-tex-b64="eA=="></span>를 충분히 작은 음의 정수로 잡으면 <span class="math-inline" data-tex-b64="YS1ieA=="></span>가 양수가 되기 때문이다. Well-Ordering Principle에 의해 <span class="math-inline" data-tex-b64="Uw=="></span>에는 최소 원소 <span class="math-inline" data-tex-b64="cg=="></span>이 존재한다. 어떤 <span class="math-inline" data-tex-b64="cVxpblxtYXRoYmIgWg=="></span>에 대해

<div class="math-display" data-tex-b64="cj1hLWJx"></div>

이므로 <span class="math-inline" data-tex-b64="YT1icSty"></span>이다. 이제 <span class="math-inline" data-tex-b64="cjxi"></span>임을 보여야 한다. 만약 <span class="math-inline" data-tex-b64="clxnZSBi"></span>라면

<div class="math-display" data-tex-b64="ci1iPWEtYihxKzEpXGdlMA=="></div>

이므로 <span class="math-inline" data-tex-b64="ci1iXGluIFM="></span>이다. 그런데 <span class="math-inline" data-tex-b64="ci1iPHI="></span>이므로 <span class="math-inline" data-tex-b64="cg=="></span>이 최소라는 사실에 모순이다. 따라서 <span class="math-inline" data-tex-b64="MFxsZSByPGI="></span>이다.

### 유일성 증명

두 표현

<div class="math-display" data-tex-b64="YT1icStyPWJxJytyJyxccXF1YWQgMFxsZSByLHInPGI="></div>

이 있다고 하자. 두 식을 빼면

<div class="math-display" data-tex-b64="YihxLXEnKT1yJy1y"></div>

이다. 그런데 <span class="math-inline" data-tex-b64="fHInLXJ8PGI="></span>이고 오른쪽은 <span class="math-inline" data-tex-b64="Yg=="></span>의 배수이다. 절댓값이 <span class="math-inline" data-tex-b64="Yg=="></span>보다 작은 <span class="math-inline" data-tex-b64="Yg=="></span>의 배수는 0뿐이므로 <span class="math-inline" data-tex-b64="cj1yJw=="></span>이고, 이어서 <span class="math-inline" data-tex-b64="cT1xJw=="></span>이다.

## Greatest Common Divisor

두 정수 <span class="math-inline" data-tex-b64="YSxi"></span>가 동시에 0은 아니라고 하자. 양의 정수 <span class="math-inline" data-tex-b64="ZA=="></span>가 다음을 만족하면 <span class="math-inline" data-tex-b64="YSxi"></span>의 최대공약수라고 한다.

1. <span class="math-inline" data-tex-b64="ZFxtaWQgYQ=="></span>이고 <span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>이다.
2. <span class="math-inline" data-tex-b64="Y1xtaWQgYQ=="></span>, <span class="math-inline" data-tex-b64="Y1xtaWQgYg=="></span>인 모든 정수 <span class="math-inline" data-tex-b64="Yw=="></span>에 대해 <span class="math-inline" data-tex-b64="Y1xtaWQgZA=="></span>이다.

이를 <span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsYik="></span>로 쓴다. 두 번째 조건은 단순히 수치적으로 가장 큰 공약수라는 뜻보다 강하다. 모든 공약수가 <span class="math-inline" data-tex-b64="ZA=="></span>를 나누므로 공약수들의 구조를 완전히 대표한다.

## Bézout’s Identity

정수론에서 가장 중요한 기본 정리 중 하나는 최대공약수를 두 정수의 선형결합으로 표현할 수 있다는 것이다.

> <div class="math-display" data-tex-b64="XGdjZChhLGIpPWF4K2J5"></div>
>
> 를 만족하는 정수 <span class="math-inline" data-tex-b64="eCx5"></span>가 존재한다.

### 증명

양의 정수인 선형결합을 모은 집합

<div class="math-display" data-tex-b64="Uz1ce2F1K2J2XG1pZCB1LHZcaW5cbWF0aGJiIFosXCBhdStidj4wXH0="></div>

을 생각한다. 이 집합은 공집합이 아니며 Well-Ordering Principle에 의해 최소 원소 <span class="math-inline" data-tex-b64="ZA=="></span>를 갖는다. 어떤 정수 <span class="math-inline" data-tex-b64="eCx5"></span>에 대해

<div class="math-display" data-tex-b64="ZD1heCtieQ=="></div>

이다.

Division Algorithm으로 <span class="math-inline" data-tex-b64="YT1kcSty"></span>, <span class="math-inline" data-tex-b64="MFxsZSByPGQ="></span>라 하자. 그러면

<div class="math-display" data-tex-b64="cj1hLWRxPWEoMS14cSkrYigteXEp"></div>

이므로 <span class="math-inline" data-tex-b64="cg=="></span>도 <span class="math-inline" data-tex-b64="YSxi"></span>의 정수 선형결합이다. <span class="math-inline" data-tex-b64="cj4w"></span>이면 <span class="math-inline" data-tex-b64="clxpbiBT"></span>이면서 <span class="math-inline" data-tex-b64="cjxk"></span>이므로 최소성에 모순이다. 따라서 <span class="math-inline" data-tex-b64="cj0w"></span>, 즉 <span class="math-inline" data-tex-b64="ZFxtaWQgYQ=="></span>이다. 같은 방식으로 <span class="math-inline" data-tex-b64="ZFxtaWQgYg=="></span>이다.

반대로 <span class="math-inline" data-tex-b64="Yw=="></span>가 <span class="math-inline" data-tex-b64="YSxi"></span>의 공약수이면 <span class="math-inline" data-tex-b64="Yw=="></span>는 모든 정수 선형결합을 나누므로 <span class="math-inline" data-tex-b64="Y1xtaWQgYXgrYnk9ZA=="></span>이다. 따라서 <span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsYik="></span>이다.

이 증명에서 다음 사실도 함께 얻는다.

<div class="math-display" data-tex-b64="XHthdStidlxtaWQgdSx2XGluXG1hdGhiYiBaXH09XHtrXGdjZChhLGIpXG1pZCBrXGluXG1hdGhiYiBaXH0="></div>

즉 두 정수의 모든 선형결합은 최대공약수의 배수이며, 최대공약수의 모든 배수도 선형결합으로 표현된다.

## Relatively Prime과 Euclid’s Lemma

<span class="math-inline" data-tex-b64="XGdjZChhLGIpPTE="></span>이면 <span class="math-inline" data-tex-b64="YSxi"></span>가 서로소라고 한다. Bézout’s Identity에 의해

<div class="math-display" data-tex-b64="XGdjZChhLGIpPTFccXVhZFxMb25nbGVmdHJpZ2h0YXJyb3dccXVhZCBheCtieT0xXHRleHR77J24IH14LHlcaW5cbWF0aGJiIFpcdGV4dHvqsIAg7KG07J6sfQ=="></div>

한다.

이로부터 Euclid’s Lemma의 기본 형태가 나온다.

> <span class="math-inline" data-tex-b64="YVxtaWQgYmM="></span>이고 <span class="math-inline" data-tex-b64="XGdjZChhLGIpPTE="></span>이면 <span class="math-inline" data-tex-b64="YVxtaWQgYw=="></span>이다.

실제로 <span class="math-inline" data-tex-b64="YXgrYnk9MQ=="></span>에 <span class="math-inline" data-tex-b64="Yw=="></span>를 곱하면

<div class="math-display" data-tex-b64="YWN4K2JjeT1j"></div>

이다. 왼쪽의 두 항은 모두 <span class="math-inline" data-tex-b64="YQ=="></span>로 나누어지므로 <span class="math-inline" data-tex-b64="YVxtaWQgYw=="></span>이다.

## Euclidean Algorithm

Division Algorithm을 반복하면 최대공약수를 빠르게 계산할 수 있다. 핵심은 다음 등식이다.

> <span class="math-inline" data-tex-b64="YT1icSty"></span>이면 <span class="math-inline" data-tex-b64="XGdjZChhLGIpPVxnY2QoYixyKQ=="></span>이다.

### 증명

<span class="math-inline" data-tex-b64="ZA=="></span>가 <span class="math-inline" data-tex-b64="YSxi"></span>의 공약수이면 <span class="math-inline" data-tex-b64="cj1hLWJx"></span>도 나누므로 <span class="math-inline" data-tex-b64="ZA=="></span>는 <span class="math-inline" data-tex-b64="Yixy"></span>의 공약수이다. 반대로 <span class="math-inline" data-tex-b64="ZA=="></span>가 <span class="math-inline" data-tex-b64="Yixy"></span>의 공약수이면 <span class="math-inline" data-tex-b64="YT1icSty"></span>도 나누므로 <span class="math-inline" data-tex-b64="YSxi"></span>의 공약수이다. 두 쌍의 공약수가 완전히 같으므로 최대공약수도 같다.

따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmEmPWJxXzErcl8xLFxcCmImPXJfMXFfMityXzIsXFwKcl8xJj1yXzJxXzMrcl8zLFxcCiZcIFx2ZG90c1xcCnJfe2stMn0mPXJfe2stMX1xX2srcl9rLFxcCnJfe2stMX0mPXJfa3Ffe2srMX0KXGVuZHthbGlnbmVkfQ=="></div>

이라면 마지막으로 0이 아닌 나머지 <span class="math-inline" data-tex-b64="cl9r"></span>가 <span class="math-inline" data-tex-b64="XGdjZChhLGIp"></span>이다.

### Extended Euclidean Algorithm 예제

<span class="math-inline" data-tex-b64="XGdjZCgxMjM3OCwzMDU0KQ=="></span>를 계산하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjEyMzc4Jj00XGNkb3QzMDU0KzE2MixcXAozMDU0Jj0xOFxjZG90MTYyKzEzOCxcXAoxNjImPTFcY2RvdDEzOCsyNCxcXAoxMzgmPTVcY2RvdDI0KzE4LFxcCjI0Jj0xXGNkb3QxOCs2LFxcCjE4Jj0zXGNkb3Q2LgpcZW5ke2FsaWduZWR9"></div>

따라서 최대공약수는 6이다. 식을 거꾸로 대입하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjYmPTI0LTE4XFwKJj0yNC0oMTM4LTVcY2RvdDI0KVxcCiY9NlxjZG90MjQtMTM4XFwKJj02KDE2Mi0xMzgpLTEzOFxcCiY9NlxjZG90MTYyLTdcY2RvdDEzOFxcCiY9NlxjZG90MTYyLTcoMzA1NC0xOFxjZG90MTYyKVxcCiY9MTMyXGNkb3QxNjItN1xjZG90MzA1NFxcCiY9MTMyKDEyMzc4LTRcY2RvdDMwNTQpLTdcY2RvdDMwNTRcXAomPTEzMlxjZG90MTIzNzgtNTM1XGNkb3QzMDU0LgpcZW5ke2FsaWduZWR9"></div>

즉 최대공약수뿐 아니라 Bézout 계수까지 계산할 수 있다.

## Least Common Multiple

양의 공배수 중 가장 작은 수를 <span class="math-inline" data-tex-b64="XG9wZXJhdG9ybmFtZXtsY219KGEsYik="></span>라 한다. <span class="math-inline" data-tex-b64="YSxiPjA="></span>일 때

<div class="math-display" data-tex-b64="XGdjZChhLGIpXG9wZXJhdG9ybmFtZXtsY219KGEsYik9YWI="></div>

이다.

<span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsYik="></span>, <span class="math-inline" data-tex-b64="YT1kcg=="></span>, <span class="math-inline" data-tex-b64="Yj1kcw=="></span>라 하면 <span class="math-inline" data-tex-b64="XGdjZChyLHMpPTE="></span>이다. <span class="math-inline" data-tex-b64="ZHJzPWFiL2Q="></span>는 <span class="math-inline" data-tex-b64="YSxi"></span>의 공배수이다. 한편 임의의 양의 공배수 <span class="math-inline" data-tex-b64="Yw=="></span>에 대해 <span class="math-inline" data-tex-b64="Yz1hdT1idg=="></span>라 하면 <span class="math-inline" data-tex-b64="ZHJcbWlkIGM="></span>, <span class="math-inline" data-tex-b64="ZHNcbWlkIGM="></span>이고 <span class="math-inline" data-tex-b64="cixz"></span>가 서로소이므로 <span class="math-inline" data-tex-b64="ZHJzXG1pZCBj"></span>이다. 따라서 <span class="math-inline" data-tex-b64="ZHJz"></span>가 최소공배수이다.

부호까지 고려하면 일반적으로

<div class="math-display" data-tex-b64="XGdjZChhLGIpXG9wZXJhdG9ybmFtZXtsY219KGEsYik9fGFifA=="></div>

로 쓴다.

## Linear Diophantine Equation

정수 계수를 갖고 정수해를 구하는 방정식을 Diophantine Equation이라고 한다. 가장 기본적인 형태는

<div class="math-display" data-tex-b64="YXgrYnk9Yw=="></div>

이다.

> 이 방정식은 <span class="math-inline" data-tex-b64="XGdjZChhLGIpXG1pZCBj"></span>일 때, 그리고 그때에만 정수해를 갖는다.

### 증명

해 <span class="math-inline" data-tex-b64="eCx5"></span>가 존재하면 <span class="math-inline" data-tex-b64="ZD1cZ2NkKGEsYik="></span>는 <span class="math-inline" data-tex-b64="YSxi"></span>를 나누므로 <span class="math-inline" data-tex-b64="Yz1heCtieQ=="></span>도 나눈다.

반대로 <span class="math-inline" data-tex-b64="ZFxtaWQgYw=="></span>라 하자. Bézout’s Identity로 <span class="math-inline" data-tex-b64="ZD1hdStidg=="></span>이고 <span class="math-inline" data-tex-b64="Yz1kaw=="></span>인 정수 <span class="math-inline" data-tex-b64="dSx2LGs="></span>가 존재한다. 따라서

<div class="math-display" data-tex-b64="Yz1hKHVrKStiKHZrKQ=="></div>

이므로 <span class="math-inline" data-tex-b64="eF8wPXVr"></span>, <span class="math-inline" data-tex-b64="eV8wPXZr"></span>가 한 해이다.

한 특수해 <span class="math-inline" data-tex-b64="KHhfMCx5XzAp"></span>를 알면 모든 해는

<div class="math-display" data-tex-b64="eD14XzArXGZyYWN7Yn17ZH10LApccXF1YWQKeT15XzAtXGZyYWN7YX17ZH10LApccXF1YWQgdFxpblxtYXRoYmIgWg=="></div>

로 주어진다. 이 식을 원래 방정식에 대입하면 추가된 두 항이 상쇄되어 해가 유지된다. 반대로 두 해의 차를 비교하고 <span class="math-inline" data-tex-b64="YS9k"></span>와 <span class="math-inline" data-tex-b64="Yi9k"></span>가 서로소임을 사용하면 모든 해가 이 형태임을 보일 수 있다.

## 정리

Division Algorithm은 정수의 몫과 나머지를 보장한다. Bézout’s Identity는 최대공약수를 선형결합으로 표현하며, Euclidean Algorithm은 이를 실제로 계산한다. 이 결과들은 일차 디오판토스 방정식이 정수해를 가질 조건과 모든 해의 형태를 완전히 결정한다.

## 연습 문제

1. Division Algorithm을 이용해 <span class="math-inline" data-tex-b64="LTQ3"></span>을 6으로 나눈 몫과 나머지를 구한다.
2. Extended Euclidean Algorithm으로 <span class="math-inline" data-tex-b64="XGdjZCgyNTIsMTk4KQ=="></span>을 구하고 이를 <span class="math-inline" data-tex-b64="MjUyeCsxOTh5"></span> 꼴로 표현한다.
3. 방정식 <span class="math-inline" data-tex-b64="MTh4KzMweT00Mg=="></span>의 모든 정수해를 구한다.

## 풀이

### 1번

나머지는 <span class="math-inline" data-tex-b64="MFxsZSByPDY="></span>이어야 한다. 다음과 같이 쓸 수 있다.

<div class="math-display" data-tex-b64="LTQ3PTYoLTgpKzE="></div>

따라서 몫은 <span class="math-inline" data-tex-b64="LTg="></span>, 나머지는 1이다.

### 2번

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjI1MiY9MVxjZG90MTk4KzU0LFxcCjE5OCY9M1xjZG90NTQrMzYsXFwKNTQmPTFcY2RvdDM2KzE4LFxcCjM2Jj0yXGNkb3QxOC4KXGVuZHthbGlnbmVkfQ=="></div>

따라서 <span class="math-inline" data-tex-b64="XGdjZCgyNTIsMTk4KT0xOA=="></span>이다. 역대입하면

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CjE4Jj01NC0zNlxcCiY9NTQtKDE5OC0zXGNkb3Q1NClcXAomPTRcY2RvdDU0LTE5OFxcCiY9NCgyNTItMTk4KS0xOThcXAomPTRcY2RvdDI1Mi01XGNkb3QxOTguClxlbmR7YWxpZ25lZH0="></div>

즉 <span class="math-inline" data-tex-b64="eD00"></span>, <span class="math-inline" data-tex-b64="eT0tNQ=="></span>이다.

### 3번

<span class="math-inline" data-tex-b64="ZD1cZ2NkKDE4LDMwKT02"></span>이고 <span class="math-inline" data-tex-b64="NlxtaWQ0Mg=="></span>이므로 해가 존재한다. 식을 6으로 나누면

<div class="math-display" data-tex-b64="M3grNXk9Nw=="></div>

이다. <span class="math-inline" data-tex-b64="eD00"></span>, <span class="math-inline" data-tex-b64="eT0tMQ=="></span>이 한 해이다. 따라서 모든 해는

<div class="math-display" data-tex-b64="eD00KzV0LFxxcXVhZCB5PS0xLTN0LFxxcXVhZCB0XGluXG1hdGhiYiBa"></div>

이다.
