---
title: "18. Elliptic Curves and Elliptic Curve Cryptography"
description: "유한체 위 타원곡선의 점 덧셈과 군 구조를 설명하고 ECDH, EC ElGamal, ECDSA의 수학적 원리를 정리한다."
date: "2026-02-18"
category: "정수론"
tags: ["number-theory", "elliptic-curve", "ecdlp", "ecdh", "ecdsa"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 18
featured: false
draft: false
---

타원곡선 암호는 finite field 위의 곡선 점들이 이루는 Abelian group을 사용한다. 정수 곱셈군의 DLP 대신 Elliptic Curve Discrete Logarithm Problem을 기반으로 하며, 같은 기본 구조로 key exchange, encryption, signature를 구성할 수 있다.

## Elliptic Curve

characteristic가 2와 3이 아닌 field <span class="math-inline" data-tex-b64="Sw=="></span> 위에서 짧은 Weierstrass form은

<div class="math-display" data-tex-b64="RTogeV4yPXheMytheCti"></div>

이다. 곡선이 singular하지 않으려면

<div class="math-display" data-tex-b64="NGFeMysyN2JeMlxuZTA="></div>

이어야 한다. 이 조건은 cusp나 self-intersection 없이 tangent가 잘 정의되도록 한다.

곡선의 점 집합에 point at infinity <span class="math-inline" data-tex-b64="XG1hdGhjYWwgTw=="></span>를 추가하여

<div class="math-display" data-tex-b64="RShLKT1ceyh4LHkpXGluIEteMlxtaWQgeV4yPXheMytheCtiXH1cY3VwXHtcbWF0aGNhbCBPXH0="></div>

로 둔다.

## Geometric Point Addition

실수 위에서 서로 다른 두 점 <span class="math-inline" data-tex-b64="UCxR"></span>를 지나는 직선은 곡선과 세 번째 점 <span class="math-inline" data-tex-b64="Uic="></span>에서 만난다. 이를 <span class="math-inline" data-tex-b64="eA=="></span>축에 대칭한 점을 <span class="math-inline" data-tex-b64="UCtR"></span>로 정의한다. 즉 한 직선 위의 세 교점은

<div class="math-display" data-tex-b64="UCtRK1InPVxtYXRoY2FsIE8="></div>

를 만족한다.

<span class="math-inline" data-tex-b64="XG1hdGhjYWwgTw=="></span>는 항등원이고 <span class="math-inline" data-tex-b64="LSh4LHkpPSh4LC15KQ=="></span>이다.

## Addition Formula

<span class="math-inline" data-tex-b64="UD0oeF8xLHlfMSk="></span>, <span class="math-inline" data-tex-b64="UT0oeF8yLHlfMik="></span>, <span class="math-inline" data-tex-b64="UFxuZVxwbSBR"></span>이면

<div class="math-display" data-tex-b64="XGxhbWJkYT1cZnJhY3t5XzIteV8xfXt4XzIteF8xfQ=="></div>

이고

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CnhfMyY9XGxhbWJkYV4yLXhfMS14XzIsXFwKeV8zJj1cbGFtYmRhKHhfMS14XzMpLXlfMQpcZW5ke2FsaWduZWR9"></div>

로 <span class="math-inline" data-tex-b64="UCtRPSh4XzMseV8zKQ=="></span>이다. Finite field에서는 division을 modular inverse로 해석한다.

## Point Doubling

<span class="math-inline" data-tex-b64="UD1R"></span>이면 tangent의 기울기를 사용한다.

<div class="math-display" data-tex-b64="XGxhbWJkYT1cZnJhY3szeF8xXjIrYX17MnlfMX0="></div>

그리고 같은 좌표 공식을 적용한다. <span class="math-inline" data-tex-b64="eV8xPTA="></span>이면 tangent가 수직이므로

<div class="math-display" data-tex-b64="MlA9XG1hdGhjYWwgTw=="></div>

이다.

이 연산은 결합법칙을 만족하여 <span class="math-inline" data-tex-b64="RShLKQ=="></span>를 Abelian group으로 만든다. 결합법칙의 직접 대수적 증명은 길지만, algebraic geometry의 divisor 이론에서 자연스럽게 설명된다.

## Elliptic Curves over Finite Fields

<span class="math-inline" data-tex-b64="XG1hdGhiYiBGX3E="></span> 위에서는 가능한 <span class="math-inline" data-tex-b64="eA=="></span>마다 오른쪽 값이 quadratic residue인지 확인하여 점을 센다. 모든 점과 <span class="math-inline" data-tex-b64="XG1hdGhjYWwgTw=="></span>는 유한 Abelian group을 이룬다.

Hasse’s Bound는 점의 수를

<div class="math-display" data-tex-b64="XGxlZnR8XCNFKFxtYXRoYmIgRl9xKS0ocSsxKVxyaWdodHxcbGUyXHNxcnQgcQ=="></div>

로 제한한다. 즉 점의 수는 대략 <span class="math-inline" data-tex-b64="cQ=="></span>와 비슷하지만 정확히 같지는 않다.

## Scalar Multiplication과 ECDLP

정수 <span class="math-inline" data-tex-b64="aw=="></span>에 대해

<div class="math-display" data-tex-b64="W2tdUD1cdW5kZXJicmFjZXtQK1ArXGNkb3RzK1B9X3trXHRleHR7IHRpbWVzfX0="></div>

로 정의한다. Double-and-add를 사용하면 <span class="math-inline" data-tex-b64="TyhcbG9nIGsp"></span>번의 point operation으로 계산할 수 있다.

공개된 <span class="math-inline" data-tex-b64="UCxRPVtrXVA="></span>에서 <span class="math-inline" data-tex-b64="aw=="></span>를 구하는 문제를 ECDLP라고 한다. 일반적인 최선의 공격은 대략 square-root complexity를 가지며, finite field multiplicative group에서 가능한 index calculus와 같은 subexponential 공격이 일반 타원곡선에는 알려져 있지 않다.

## ECDH

공개 매개변수는 큰 prime order <span class="math-inline" data-tex-b64="cQ=="></span>를 가진 base point <span class="math-inline" data-tex-b64="UA=="></span>이다.

- Alice: private <span class="math-inline" data-tex-b64="YQ=="></span>, public <span class="math-inline" data-tex-b64="UV9BPVthXVA="></span>
- Bob: private <span class="math-inline" data-tex-b64="Yg=="></span>, public <span class="math-inline" data-tex-b64="UV9CPVtiXVA="></span>

공유점은

<div class="math-display" data-tex-b64="W2FdUV9CPVthYl1QPVtiXVFfQQ=="></div>

이다. 실제 key는 공유점의 좌표를 그대로 쓰지 않고 key derivation function에 입력한다. 공개점 검증과 인증이 없으면 finite-field DH와 마찬가지로 MITM이나 invalid-curve attack이 가능하다.

## Elliptic Curve ElGamal

메시지를 curve point <span class="math-inline" data-tex-b64="TQ=="></span>으로 encoding한다고 하자. 수신자의 public key가 <span class="math-inline" data-tex-b64="UV9BPVthXVA="></span>이면 송신자는 nonce <span class="math-inline" data-tex-b64="aw=="></span>를 골라

<div class="math-display" data-tex-b64="Q18xPVtrXVAsXHFxdWFkIENfMj1NK1trXVFfQQ=="></div>

를 보낸다. 수신자는

<div class="math-display" data-tex-b64="Q18yLVthXUNfMT1NK1trYV1QLVtha11QPU0="></div>

으로 복호화한다.

실제 시스템에서는 임의 메시지를 곡선점에 직접 매핑하는 대신 hybrid encryption으로 ephemeral ECDH key를 만들고 symmetric encryption을 사용하는 방식이 일반적이다.

## ECDSA

order가 prime <span class="math-inline" data-tex-b64="cQ=="></span>인 base point <span class="math-inline" data-tex-b64="UA=="></span>, private key <span class="math-inline" data-tex-b64="ZA=="></span>, public key <span class="math-inline" data-tex-b64="UT1bZF1Q"></span>를 사용한다. digest를 <span class="math-inline" data-tex-b64="eg=="></span>라 하자.

서명자는 nonce <span class="math-inline" data-tex-b64="aw=="></span>를 골라

<div class="math-display" data-tex-b64="Uj1ba11QPSh4X1IseV9SKSxccXF1YWQgcj14X1JcYm1vZCBx"></div>

를 계산하고

<div class="math-display" data-tex-b64="cz1rXnstMX0oeitkcilccG1vZCBx"></div>

로 둔다.

검증자는

<div class="math-display" data-tex-b64="dV8xPXpzXnstMX0sXHFxdWFkIHVfMj1yc157LTF9XHBtb2QgcQ=="></div>

를 계산하고

<div class="math-display" data-tex-b64="WD1bdV8xXVArW3VfMl1R"></div>

의 <span class="math-inline" data-tex-b64="eA=="></span>좌표 modulo <span class="math-inline" data-tex-b64="cQ=="></span>가 <span class="math-inline" data-tex-b64="cg=="></span>인지 확인한다.

### 정확성

<span class="math-inline" data-tex-b64="cz1rXnstMX0oeitkcik="></span>이므로

<div class="math-display" data-tex-b64="dV8xK2R1XzI9KHorZHIpc157LTF9XGVxdWl2IGtccG1vZCBx"></div>

이다. 따라서

<div class="math-display" data-tex-b64="WD1bdV8xK2R1XzJdUD1ba11QPVI="></div>

이고 검증값이 일치한다.

ECDSA도 nonce 재사용 또는 bias에 매우 취약하다. 두 서명에서 같은 <span class="math-inline" data-tex-b64="cg=="></span>이 나타나면 nonce 재사용을 의심해야 한다.

## 왜 ECC는 작은 키를 사용하는가

Finite-field DLP에는 index calculus 계열의 subexponential algorithm이 존재하지만 일반적인 ECDLP에는 알려져 있지 않다. 따라서 비슷한 공격 비용을 만들기 위해 필요한 group size가 더 작다. 다만 실제 안전성은 curve 선택, subgroup order, point validation, side-channel 방어, nonce 생성에 달려 있다.

## 정리

타원곡선의 점 덧셈은 기하학적 secant–tangent rule에서 정의되며 finite field에서도 대수식으로 계산된다. Scalar multiplication은 쉽지만 ECDLP는 어렵다. 이 비대칭성으로 ECDH, EC ElGamal, ECDSA를 구성한다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="RTp5XjI9eF4zKzJ4KzJccG1vZHsxN30="></span>에서 <span class="math-inline" data-tex-b64="UD0oNSwxKQ=="></span>의 <span class="math-inline" data-tex-b64="MlA="></span>를 구한다.
2. ECDH에서 양쪽 공유점이 같은 이유를 보인다.
3. EC ElGamal의 복호화 식을 증명한다.

## 풀이

### 1번

<div class="math-display" data-tex-b64="XGxhbWJkYT0oM1xjZG90NV4yKzIpKDJcY2RvdDEpXnstMX1cZXF1aXY3N1xjZG90OVxlcXVpdjEzXHBtb2R7MTd9"></div>

이다. 따라서

<div class="math-display" data-tex-b64="eF97MlB9PTEzXjItMTBcZXF1aXY2LFxxcXVhZCB5X3syUH09MTMoNS02KS0xXGVxdWl2M1xwbW9kezE3fQ=="></div>

이므로 <span class="math-inline" data-tex-b64="MlA9KDYsMyk="></span>이다.

### 2번

Scalar multiplication은 정수 곱에 대해 결합적이므로

<div class="math-display" data-tex-b64="W2FdKFtiXVApPVthYl1QPVtiXShbYV1QKQ=="></div>

이다.

### 3번

<div class="math-display" data-tex-b64="Q18yLVthXUNfMT1NK1trXShbYV1QKS1bYV0oW2tdUCk9TStba2FdUC1bYWtdUD1N"></div>

이다.
