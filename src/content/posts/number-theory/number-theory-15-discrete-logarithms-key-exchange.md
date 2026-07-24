---
title: "15. Discrete Logarithms and Key Exchange"
description: "discrete logarithm problem을 기반으로 Diffie–Hellman key exchange와 주요 DLP 알고리즘의 원리를 정리한다."
date: "2026-02-13"
category: "정수론"
tags: ["number-theory", "discrete-logarithm", "diffie-hellman", "baby-step-giant-step", "pohlig-hellman"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 15
featured: false
draft: false
---

거듭제곱 <span class="math-inline" data-tex-b64="Z154"></span>을 계산하는 일은 빠르지만 결과와 밑에서 지수 <span class="math-inline" data-tex-b64="eA=="></span>를 되찾는 일은 일반적으로 어렵다. 이러한 비대칭성이 discrete logarithm 기반 공개키 암호의 출발점이다.

## One-Way Function과 DLP

유한 cyclic group <span class="math-inline" data-tex-b64="Rz1cbGFuZ2xlIGdccmFuZ2xl"></span>에서

<div class="math-display" data-tex-b64="Z154PWg="></div>

를 만족하는 <span class="math-inline" data-tex-b64="eA=="></span>를 구하는 문제를 Discrete Logarithm Problem, DLP라고 한다. 앞의 index notation으로는 <span class="math-inline" data-tex-b64="eD1cb3BlcmF0b3JuYW1le2luZH1fZyhoKQ=="></span>이다.

Exponentiation은 repeated squaring으로 효율적으로 계산할 수 있지만, 일반적인 큰 군에서 inverse 문제는 알려진 빠른 알고리즘이 없다. 보안은 단순히 군의 크기뿐 아니라 군의 차수 구조와 사용 가능한 DLP 알고리즘에 의존한다.

## Diffie–Hellman Key Exchange

공개 매개변수로 cyclic group <span class="math-inline" data-tex-b64="Rz1cbGFuZ2xlIGdccmFuZ2xl"></span>를 사용한다.

1. Alice는 비밀 <span class="math-inline" data-tex-b64="YQ=="></span>를 선택하고 <span class="math-inline" data-tex-b64="QT1nXmE="></span>를 보낸다.
2. Bob은 비밀 <span class="math-inline" data-tex-b64="Yg=="></span>를 선택하고 <span class="math-inline" data-tex-b64="Qj1nXmI="></span>를 보낸다.
3. Alice는 <span class="math-inline" data-tex-b64="Sz1CXmE="></span>, Bob은 <span class="math-inline" data-tex-b64="Sz1BXmI="></span>를 계산한다.

두 값은

<div class="math-display" data-tex-b64="Ql5hPShnXmIpXmE9Z157YWJ9PShnXmEpXmI9QV5i"></div>

로 같다.

공격자는 <span class="math-inline" data-tex-b64="ZyxnXmEsZ15i"></span>를 보지만 <span class="math-inline" data-tex-b64="Z157YWJ9"></span>를 계산해야 한다. 이를 Computational Diffie–Hellman Problem이라고 한다. DLP를 풀면 비밀 지수를 복원하여 CDH도 풀 수 있지만, 역방향의 동치성은 일반적으로 자동으로 주어지지 않는다.

## Man-in-the-Middle Attack

기본 Diffie–Hellman은 상대방의 신원을 인증하지 않는다. 공격자 Eve가 Alice와 Bob 사이에서 각자의 공개값을 가로채고 자신의 값을 보내면 Alice–Eve와 Eve–Bob 사이에 서로 다른 키가 만들어진다. Eve는 양쪽 메시지를 복호화하고 다시 암호화할 수 있다.

따라서 실제 프로토콜은 인증서, digital signature, pre-shared key 등으로 공개값을 신원과 결합해야 한다.

## Baby-Step Giant-Step

<span class="math-inline" data-tex-b64="fEd8PU4="></span>이고 <span class="math-inline" data-tex-b64="Z154PWg="></span>를 풀자. <span class="math-inline" data-tex-b64="bT1cbGNlaWxcc3FydCBOXHJjZWls"></span>로 두고

<div class="math-display" data-tex-b64="eD1pbStqLFxxcXVhZDBcbGUgaSxqPG0="></div>

로 쓴다. 그러면

<div class="math-display" data-tex-b64="aChnXnstbX0pXmk9Z15q"></div>

이다.

- Baby steps: <span class="math-inline" data-tex-b64="Z14wLGdeMSxcbGRvdHMsZ157bS0xfQ=="></span>을 hash table에 저장한다.
- Giant steps: <span class="math-inline" data-tex-b64="aCxoZ157LW19LGhnXnstMm19LFxsZG90cw=="></span>을 계산하며 table과 일치하는 값을 찾는다.

일치하면 <span class="math-inline" data-tex-b64="eD1pbStq"></span>이다. 시간과 공간 모두 <span class="math-inline" data-tex-b64="Tyhcc3FydCBOKQ=="></span>이다. Brute force의 <span class="math-inline" data-tex-b64="TyhOKQ=="></span>보다 빠르지만 큰 보안 매개변수에서는 여전히 비현실적이다.

## Pohlig–Hellman Algorithm

군의 차수가

<div class="math-display" data-tex-b64="Tj1ccHJvZF97aT0xfV57cn1xX2lee2VfaX0="></div>

로 분해될 때 DLP를 각 prime power modulus의 지수 문제로 나눈다. <span class="math-inline" data-tex-b64="eA=="></span>를 modulo <span class="math-inline" data-tex-b64="cV9pXntlX2l9"></span>에서 각각 구한 뒤 CRT로 modulo <span class="math-inline" data-tex-b64="Tg=="></span>의 값을 복원한다.

핵심은 양변을 <span class="math-inline" data-tex-b64="Ti9xX2lee2VfaX0="></span>만큼 거듭제곱하면 order가 <span class="math-inline" data-tex-b64="cV9pXntlX2l9"></span>인 부분군으로 projection된다는 것이다.

따라서 가장 큰 소인수 <span class="math-inline" data-tex-b64="cV9p"></span>가 작으면 DLP가 쉬워진다. 암호용 군에서는 전체 차수 또는 선택한 부분군의 차수가 큰 소수를 포함하도록 해야 한다.

## Index Calculus Method

특정 finite field의 곱셈군에서는 작은 소수 또는 낮은 차수 polynomial로 이루어진 factor base를 정한다. 여러 무작위 지수 <span class="math-inline" data-tex-b64="aw=="></span>에 대해 <span class="math-inline" data-tex-b64="Z15r"></span>가 factor base 위에서 smooth하게 분해되는 relation을 모은다.

<div class="math-display" data-tex-b64="Z15rXGVxdWl2XHByb2Rfe1xlbGxcaW4gQn1cZWxsXntlX1xlbGx9XHBtb2QgcA=="></div>

양변의 index를 취하면

<div class="math-display" data-tex-b64="a1xlcXVpdlxzdW1fe1xlbGxcaW4gQn1lX1xlbGxcb3BlcmF0b3JuYW1le2luZH1fZyhcZWxsKVxwbW9ke3AtMX0="></div>

이라는 선형식이 된다. 충분한 relation을 모아 factor-base logarithm들을 구한 뒤, 목표 <span class="math-inline" data-tex-b64="aA=="></span>에 무작위 <span class="math-inline" data-tex-b64="Z150"></span>를 곱해 smooth relation을 찾아 <span class="math-inline" data-tex-b64="XGxvZ19nIGg="></span>를 복원한다.

Index calculus는 일반적인 추상군에는 그대로 적용되지 않으며, finite field 원소가 factor base로 분해되는 특별한 표현을 이용한다. 타원곡선군에서 같은 수준의 subexponential index calculus가 알려져 있지 않다는 점이 ECC의 장점과 연결된다.

## 안전한 군 선택의 의미

DLP 기반 시스템에서는 다음을 확인해야 한다.

- 사용 부분군의 order가 충분히 큰 소수인지
- 공개점 또는 공개원소가 실제로 의도한 부분군에 속하는지
- 작은 부분군 공격을 막는 검증이 있는지
- 비밀 지수와 임시 지수가 충분히 무작위인지
- 공개값이 인증되는지

수학적으로 올바른 Diffie–Hellman도 매개변수 검증과 인증이 빠지면 안전한 프로토콜이 아니다.

## 정리

DLP는 exponentiation의 역문제로, Diffie–Hellman의 계산적 기반이 된다. Baby-Step Giant-Step은 square-root 시간·공간 알고리즘이고, Pohlig–Hellman은 군의 차수 분해를 이용한다. Index calculus는 finite field의 smooth relation을 이용해 더 빠른 공격을 가능하게 한다.

## 연습 문제

1. 작은 군에서 Alice의 비밀이 4, Bob의 비밀이 7, <span class="math-inline" data-tex-b64="cD0yMyxnPTU="></span>일 때 공유키를 계산한다.
2. Baby-Step Giant-Step에서 <span class="math-inline" data-tex-b64="Tj0xMF42"></span>이면 table 크기는 대략 얼마인가?
3. 군의 차수가 <span class="math-inline" data-tex-b64="Ml44XGNkb3QxMDE="></span>일 때 Pohlig–Hellman 관점에서 가장 어려운 부분은 무엇인가?

## 풀이

### 1번

<div class="math-display" data-tex-b64="QT01XjRcZXF1aXY0LFxxcXVhZCBCPTVeN1xlcXVpdjE3XHBtb2R7MjN9"></div>

이고

<div class="math-display" data-tex-b64="Sz1CXjRcZXF1aXY4XHBtb2R7MjN9"></div>

이다. Bob도 <span class="math-inline" data-tex-b64="QV43XGVxdWl2OA=="></span>을 얻는다.

### 2번

<span class="math-inline" data-tex-b64="XHNxcnR7MTBeNn09MTBeMw=="></span>이므로 약 1000개의 baby step을 저장한다.

### 3번

<span class="math-inline" data-tex-b64="Ml44"></span> 부분은 작은 2-adic digit들로 나누어 풀 수 있다. 가장 큰 prime factor인 101-order 부분군의 DLP가 주된 난이도를 결정한다.
