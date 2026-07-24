---
title: "3. Congruences and Modular Arithmetic"
description: "합동의 정의와 잉여류, 합동식의 연산과 약분 조건, Modular Inverse 및 진법 기반 배수 판정법을 정리한다."
date: "2026-01-25"
category: "정수론"
tags: ["number-theory", "congruence", "modular-arithmetic", "residue-class", "modular-inverse"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 3
featured: false
draft: false
---

합동은 정수를 나머지에 따라 분류하는 언어이다. 매우 큰 정수도 일정한 법(modulus) 아래에서는 유한한 개수의 나머지로 줄어들며, 덧셈·곱셈·거듭제곱을 이 작은 대표값으로 계산할 수 있다.

## Congruence의 정의

양의 정수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해

<div class="math-display" data-tex-b64="YVxlcXVpdiBiXHBtb2Qgbg=="></div>

은 <span class="math-inline" data-tex-b64="blxtaWQoYS1iKQ=="></span>를 뜻한다. 즉 어떤 <span class="math-inline" data-tex-b64="a1xpblxtYXRoYmIgWg=="></span>가 존재하여 <span class="math-inline" data-tex-b64="YS1iPWtu"></span>이다.

Division Algorithm으로

<div class="math-display" data-tex-b64="YT1ucV9hK3JfYSxccXF1YWQgYj1ucV9iK3JfYixccXF1YWQgMFxsZSByX2Escl9iPG4="></div>

라 하면

<div class="math-display" data-tex-b64="YVxlcXVpdiBiXHBtb2QgblxxdWFkXExvbmdsZWZ0cmlnaHRhcnJvd1xxdWFkIHJfYT1yX2I="></div>

이다. 따라서 합동은 “<span class="math-inline" data-tex-b64="bg=="></span>으로 나눈 나머지가 같다”는 표현과 정확히 같다.

### 증명

<span class="math-inline" data-tex-b64="YVxlcXVpdiBiXHBtb2Qgbg=="></span>이면

<div class="math-display" data-tex-b64="YS1iPW4ocV9hLXFfYikrKHJfYS1yX2Ip"></div>

가 <span class="math-inline" data-tex-b64="bg=="></span>의 배수이다. 따라서 <span class="math-inline" data-tex-b64="cl9hLXJfYg=="></span>도 <span class="math-inline" data-tex-b64="bg=="></span>의 배수이다. 하지만 <span class="math-inline" data-tex-b64="fHJfYS1yX2J8PG4="></span>이므로 <span class="math-inline" data-tex-b64="cl9hLXJfYj0w"></span>이다. 역방향은 <span class="math-inline" data-tex-b64="cl9hPXJfYg=="></span>이면 <span class="math-inline" data-tex-b64="YS1iPW4ocV9hLXFfYik="></span>이므로 즉시 성립한다.

## Least Residue와 Complete Residue System

각 정수는 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 <span class="math-inline" data-tex-b64="MCwxLFxsZG90cyxuLTE="></span> 중 정확히 하나와 합동이다. 이를 least nonnegative residue라고 한다.

<div class="math-display" data-tex-b64="XHswLDEsXGxkb3RzLG4tMVx9"></div>

은 modulo <span class="math-inline" data-tex-b64="bg=="></span>의 complete residue system이다. 더 일반적으로 서로 합동이 아닌 <span class="math-inline" data-tex-b64="bg=="></span>개의 정수가 모든 합동류를 하나씩 대표하면 complete residue system이다. 예를 들어 modulo 5에서 <span class="math-inline" data-tex-b64="XHstMiwtMSwwLDEsMlx9"></span>도 complete residue system이다.

## 합동의 기본 성질

합동 관계는 다음을 만족한다.

- Reflexive: <span class="math-inline" data-tex-b64="YVxlcXVpdiBhXHBtb2Qgbg=="></span>
- Symmetric: <span class="math-inline" data-tex-b64="YVxlcXVpdiBiXHBtb2Qgbg=="></span>이면 <span class="math-inline" data-tex-b64="YlxlcXVpdiBhXHBtb2Qgbg=="></span>
- Transitive: <span class="math-inline" data-tex-b64="YVxlcXVpdiBiXHBtb2Qgbg=="></span>, <span class="math-inline" data-tex-b64="YlxlcXVpdiBjXHBtb2Qgbg=="></span>이면 <span class="math-inline" data-tex-b64="YVxlcXVpdiBjXHBtb2Qgbg=="></span>

따라서 합동은 정수 집합 위의 equivalence relation이다.

또한

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmEmXGVxdWl2IGJccG1vZCBuLFxcCmMmXGVxdWl2IGRccG1vZCBuClxlbmR7YWxpZ25lZH0KXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZApcYmVnaW57YWxpZ25lZH0KYStjJlxlcXVpdiBiK2RccG1vZCBuLFxcCmFjJlxlcXVpdiBiZFxwbW9kIG4uClxlbmR7YWxpZ25lZH0="></div>

곱셈 성질을 반복하면 <span class="math-inline" data-tex-b64="a1xnZTA="></span>에 대해 <span class="math-inline" data-tex-b64="YV5rXGVxdWl2IGJea1xwbW9kIG4="></span>이다. 정수계수 다항식 <span class="math-inline" data-tex-b64="UCh4KQ=="></span>에 대해서도

<div class="math-display" data-tex-b64="YVxlcXVpdiBiXHBtb2QgblxxdWFkXExvbmdyaWdodGFycm93XHF1YWQgUChhKVxlcXVpdiBQKGIpXHBtb2Qgbg=="></div>

이 성립한다.

## 합동식의 Cancellation

등식에서는 같은 0이 아닌 수를 약분할 수 있지만, 합동식에서는 조건 없이 약분하면 안 된다. 예를 들어

<div class="math-display" data-tex-b64="MlxjZG90MVxlcXVpdjJcY2RvdDRccG1vZDY="></div>

이지만 <span class="math-inline" data-tex-b64="MVxub3RcZXF1aXY0XHBtb2Q2"></span>이다.

일반적인 약분 정리는 다음과 같다.

> <span class="math-inline" data-tex-b64="Y2FcZXF1aXYgY2JccG1vZCBu"></span>이고 <span class="math-inline" data-tex-b64="ZD1cZ2NkKGMsbik="></span>이면
>
> <div class="math-display" data-tex-b64="YVxlcXVpdiBiXHBtb2R7bi9kfQ=="></div>
>
> 이다.

### 증명

<span class="math-inline" data-tex-b64="blxtaWQgYyhhLWIp"></span>이다. <span class="math-inline" data-tex-b64="Yz1kYyc="></span>, <span class="math-inline" data-tex-b64="bj1kbic="></span>라 두면 <span class="math-inline" data-tex-b64="XGdjZChjJyxuJyk9MQ=="></span>이고

<div class="math-display" data-tex-b64="bidcbWlkIGMnKGEtYik="></div>

이다. Euclid’s Lemma에 의해 <span class="math-inline" data-tex-b64="bidcbWlkKGEtYik="></span>, 즉 <span class="math-inline" data-tex-b64="YVxlcXVpdiBiXHBtb2R7bid9"></span>이다.

특히 <span class="math-inline" data-tex-b64="XGdjZChjLG4pPTE="></span>이면 법이 변하지 않아

<div class="math-display" data-tex-b64="Y2FcZXF1aXYgY2JccG1vZCBuXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZCBhXGVxdWl2IGJccG1vZCBu"></div>

이다.

## Equivalence Class와 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaL25cbWF0aGJiIFo="></span>

정수 <span class="math-inline" data-tex-b64="YQ=="></span>의 합동류를

<div class="math-display" data-tex-b64="W2FdX249XHt4XGluXG1hdGhiYiBaXG1pZCB4XGVxdWl2IGFccG1vZCBuXH0="></div>

로 정의한다. 합동이 동치관계이므로 두 합동류는 완전히 같거나 서로 겹치지 않는다. 실제로 <span class="math-inline" data-tex-b64="W2FdX25cY2FwW2JdX25cbmVxXHZhcm5vdGhpbmc="></span>라면 어떤 <span class="math-inline" data-tex-b64="Yw=="></span>가 두 집합에 속하고, <span class="math-inline" data-tex-b64="YVxlcXVpdiBjXGVxdWl2IGJccG1vZCBu"></span>이므로 <span class="math-inline" data-tex-b64="W2FdX249W2JdX24="></span>이다.

모든 합동류의 집합을

<div class="math-display" data-tex-b64="XG1hdGhiYiBaL25cbWF0aGJiIFo9XHtbMF1fbixbMV1fbixcbGRvdHMsW24tMV1fblx9"></div>

로 쓴다. 문맥이 분명하면 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaX24="></span>이라고도 쓴다.

## Residue Class 위의 연산

합동류의 덧셈과 곱셈을

<div class="math-display" data-tex-b64="W2FdK1tiXT1bYStiXSxccXF1YWQgW2FdW2JdPVthYl0="></div>

로 정의한다. 대표원을 다른 정수로 바꾸어도 결과가 같아야 한다. <span class="math-inline" data-tex-b64="YVxlcXVpdiBhJw=="></span>, <span class="math-inline" data-tex-b64="YlxlcXVpdiBiJw=="></span>이면 합동의 연산 성질에 의해

<div class="math-display" data-tex-b64="YStiXGVxdWl2IGEnK2InLFxxcXVhZCBhYlxlcXVpdiBhJ2InXHBtb2Qgbg=="></div>

이므로 이 연산은 well-defined이다.

덧셈에서는 모든 원소가 역원을 가진다. <span class="math-inline" data-tex-b64="W2Fd"></span>의 덧셈 역원은 <span class="math-inline" data-tex-b64="Wy1hXQ=="></span>이다. 그러나 곱셈 역원은 항상 존재하지 않는다.

## Modular Inverse

<span class="math-inline" data-tex-b64="YQ=="></span>의 modulo <span class="math-inline" data-tex-b64="bg=="></span> 곱셈 역원은

<div class="math-display" data-tex-b64="YXhcZXF1aXYxXHBtb2Qgbg=="></div>

을 만족하는 <span class="math-inline" data-tex-b64="eA=="></span>이다. 이를 <span class="math-inline" data-tex-b64="YV57LTF9"></span>로 표기한다.

> <span class="math-inline" data-tex-b64="YQ=="></span>가 modulo <span class="math-inline" data-tex-b64="bg=="></span>에서 역원을 가질 필요충분조건은
>
> <div class="math-display" data-tex-b64="XGdjZChhLG4pPTE="></div>
>
> 이다.

### 증명

역원 <span class="math-inline" data-tex-b64="eA=="></span>가 존재하면 <span class="math-inline" data-tex-b64="YXgtMT1rbg=="></span>이므로

<div class="math-display" data-tex-b64="YXgrbigtayk9MQ=="></div>

이다. <span class="math-inline" data-tex-b64="YSxu"></span>의 모든 공약수는 1을 나누어야 하므로 최대공약수는 1이다.

반대로 <span class="math-inline" data-tex-b64="XGdjZChhLG4pPTE="></span>이면 Bézout’s Identity에 의해 <span class="math-inline" data-tex-b64="YXgrbnk9MQ=="></span>인 정수 <span class="math-inline" data-tex-b64="eCx5"></span>가 존재한다. modulo <span class="math-inline" data-tex-b64="bg=="></span>으로 보면 <span class="math-inline" data-tex-b64="YXhcZXF1aXYxXHBtb2Qgbg=="></span>이므로 <span class="math-inline" data-tex-b64="eA=="></span>가 역원이다.

<span class="math-inline" data-tex-b64="cA=="></span>가 소수이면 <span class="math-inline" data-tex-b64="MSwyLFxsZG90cyxwLTE="></span>은 모두 <span class="math-inline" data-tex-b64="cA=="></span>와 서로소이므로 모든 0이 아닌 합동류가 역원을 가진다. 이 때문에 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaX3A="></span>는 finite field가 된다. 반면 <span class="math-inline" data-tex-b64="XG1hdGhiYiBaXzY="></span>에서 <span class="math-inline" data-tex-b64="WzJd"></span>는 역원을 가지지 않는다.

## 큰 거듭제곱의 나머지

합동식은 중간 결과를 계속 작은 나머지로 바꾸어도 결과가 보존된다. 예를 들어 <span class="math-inline" data-tex-b64="NV57MTAwfVxwbW9kezEzfQ=="></span>을 구하자.

<div class="math-display" data-tex-b64="NV4yXGVxdWl2MjVcZXF1aXYtMVxwbW9kezEzfQ=="></div>

이므로

<div class="math-display" data-tex-b64="NV57MTAwfT0oNV4yKV57NTB9XGVxdWl2KC0xKV57NTB9XGVxdWl2MVxwbW9kezEzfQ=="></div>

이다. 실제 계산에서는 지수를 이진수로 분해하는 repeated squaring을 사용하면 매우 큰 지수도 빠르게 처리할 수 있다.

## 진법 표현과 배수 판정법

<span class="math-inline" data-tex-b64="Yj4x"></span>인 진법에서 양의 정수 <span class="math-inline" data-tex-b64="Tg=="></span>은

<div class="math-display" data-tex-b64="Tj1hX21iXm0rYV97bS0xfWJee20tMX0rXGNkb3RzK2FfMWIrYV8w"></div>

로 표현된다. 여기서 <span class="math-inline" data-tex-b64="MFxsZSBhX2k8Yg=="></span>이다.

### 9의 배수 판정법

10진법에서 <span class="math-inline" data-tex-b64="MTBcZXF1aXYxXHBtb2Q5"></span>이므로 <span class="math-inline" data-tex-b64="MTBea1xlcXVpdjFccG1vZDk="></span>이다. 따라서

<div class="math-display" data-tex-b64="TlxlcXVpdiBhX20rYV97bS0xfStcY2RvdHMrYV8wXHBtb2Q5"></div>

이다. 즉 자리 숫자의 합이 9의 배수일 때, 그리고 그때에만 원래 수도 9의 배수이다.

### 11의 배수 판정법

<span class="math-inline" data-tex-b64="MTBcZXF1aXYtMVxwbW9kezExfQ=="></span>이므로 <span class="math-inline" data-tex-b64="MTBea1xlcXVpdigtMSlea1xwbW9kezExfQ=="></span>이다. 따라서

<div class="math-display" data-tex-b64="TlxlcXVpdiBhXzAtYV8xK2FfMi1hXzMrXGNkb3RzKygtMSlebSBhX21ccG1vZHsxMX0="></div>

이다. 교대로 더하고 뺀 값이 11의 배수이면 원래 수도 11의 배수이다.

이 원리는 일반화된다. <span class="math-inline" data-tex-b64="YlxlcXVpdjFccG1vZCBt"></span>이면 자릿수의 합을, <span class="math-inline" data-tex-b64="YlxlcXVpdi0xXHBtb2QgbQ=="></span>이면 교대합을 이용할 수 있다.

## 정리

합동은 정수를 같은 나머지를 갖는 동치류로 묶는다. 합동식의 덧셈과 곱셈은 대표원을 바꾸어도 잘 정의되지만, 약분에는 최대공약수 조건이 필요하다. Modular Inverse는 Bézout’s Identity와 동일한 조건에서 존재하며, 진법 표현을 합동으로 해석하면 여러 배수 판정법을 자연스럽게 증명할 수 있다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="N157MjIyfVxwbW9kezIwfQ=="></span>을 계산한다.
2. <span class="math-inline" data-tex-b64="OA=="></span>이 modulo <span class="math-inline" data-tex-b64="MzU="></span>에서 역원을 갖는지 판단하고, 존재하면 구한다.
3. 10진수 <span class="math-inline" data-tex-b64="MzE0MTU5"></span>가 11의 배수인지 판정한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="N14yPTQ5XGVxdWl2OVxwbW9kezIwfSxccXF1YWQgN140XGVxdWl2OV4yPTgxXGVxdWl2MVxwbW9kezIwfQ=="></div>

이다. <span class="math-inline" data-tex-b64="MjIyPTRcY2RvdDU1KzI="></span>이므로

<div class="math-display" data-tex-b64="N157MjIyfVxlcXVpdig3XjQpXns1NX03XjJcZXF1aXYxXns1NX1cY2RvdDlcZXF1aXY5XHBtb2R7MjB9"></div>

이다.

### 2번

<span class="math-inline" data-tex-b64="XGdjZCg4LDM1KT0x"></span>이므로 역원이 존재한다. Euclidean Algorithm을 역대입하면

<div class="math-display" data-tex-b64="MT0zXGNkb3QzNS0xM1xjZG90OA=="></div>

이므로 <span class="math-inline" data-tex-b64="LTEzXGVxdWl2MjJccG1vZHszNX0="></span>가 역원이다. 실제로 <span class="math-inline" data-tex-b64="OFxjZG90MjI9MTc2XGVxdWl2MVxwbW9kezM1fQ=="></span>이다.

### 3번

오른쪽 자리부터 교대합을 계산하면

<div class="math-display" data-tex-b64="OS01KzEtNCsxLTM9LTE="></div>

이다. 11의 배수가 아니므로 <span class="math-inline" data-tex-b64="MzE0MTU5"></span>도 11의 배수가 아니다.
