---
title: "16. Public-Key Encryption: RSA, ElGamal, and Goldwasser–Micali"
description: "RSA, ElGamal, Goldwasser–Micali의 키 생성과 정확성을 증명하고 textbook scheme의 구조적 취약성을 살펴본다."
date: "2026-02-14"
category: "정수론"
tags: ["number-theory", "rsa", "elgamal", "goldwasser-micali", "public-key-cryptography"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 16
featured: false
draft: false
---

공개키 암호는 암호화에 사용하는 공개키와 복호화에 사용하는 비밀키를 분리한다. 정수론적 one-way function에 trapdoor를 더하여 공개 연산은 쉽지만 비밀 정보 없이는 역연산이 어렵게 만든다.

## RSA Key Generation

서로 다른 큰 소수 <span class="math-inline" data-tex-b64="cCxx"></span>를 선택하고

<div class="math-display" data-tex-b64="Tj1wcSxccXF1YWRcdmFycGhpKE4pPShwLTEpKHEtMSk="></div>

로 둔다. <span class="math-inline" data-tex-b64="MTxlPFx2YXJwaGkoTik="></span>, <span class="math-inline" data-tex-b64="XGdjZChlLFx2YXJwaGkoTikpPTE="></span>인 <span class="math-inline" data-tex-b64="ZQ=="></span>를 고르고

<div class="math-display" data-tex-b64="ZWRcZXF1aXYxXHBtb2R7XHZhcnBoaShOKX0="></div>

인 <span class="math-inline" data-tex-b64="ZA=="></span>를 Extended Euclidean Algorithm으로 구한다.

- Public key: <span class="math-inline" data-tex-b64="KE4sZSk="></span>
- Private key: <span class="math-inline" data-tex-b64="ZA=="></span> 또는 <span class="math-inline" data-tex-b64="KHAscSxkKQ=="></span>

실무에서는 계산 효율과 구현상의 이유로 <span class="math-inline" data-tex-b64="ZT02NTUzNz0yXnsxNn0rMQ=="></span>이 자주 선택되지만, 안전성은 padding과 전체 프로토콜 구성에 달려 있다.

## RSA Encryption and Decryption

메시지를 <span class="math-inline" data-tex-b64="MFxsZSBtPE4="></span>인 정수로 encoding한다.

<div class="math-display" data-tex-b64="Y1xlcXVpdiBtXmVccG1vZCBOLFxxcXVhZCBtXGVxdWl2IGNeZFxwbW9kIE4="></div>

이다.

### 정확성 증명

<span class="math-inline" data-tex-b64="ZWQ9MStrXHZhcnBoaShOKQ=="></span>이다. <span class="math-inline" data-tex-b64="XGdjZChtLE4pPTE="></span>이면 Euler 정리로

<div class="math-display" data-tex-b64="bV57ZWR9PW0obV57XHZhcnBoaShOKX0pXmtcZXF1aXYgbVxwbW9kIE4="></div>

이다.

<span class="math-inline" data-tex-b64="bQ=="></span>이 <span class="math-inline" data-tex-b64="Tg=="></span>과 서로소가 아닌 경우에는 modulo <span class="math-inline" data-tex-b64="cA=="></span>, modulo <span class="math-inline" data-tex-b64="cQ=="></span>에서 따로 본다. <span class="math-inline" data-tex-b64="cFxtaWQgbQ=="></span>이면 양변이 0이고, 그렇지 않으면 Fermat 정리를 적용한다. 두 소수 법에서 모두 <span class="math-inline" data-tex-b64="bV57ZWR9XGVxdWl2IG0="></span>이므로 CRT에 의해 modulo <span class="math-inline" data-tex-b64="Tg=="></span>에서도 성립한다.

## Textbook RSA의 구조적 취약성

RSA의 지수함수는 multiplicative하다.

<div class="math-display" data-tex-b64="RShtXzFtXzIpXGVxdWl2IEUobV8xKUUobV8yKVxwbW9kIE4="></div>

공격자가 ciphertext <span class="math-inline" data-tex-b64="Yw=="></span>에 <span class="math-inline" data-tex-b64="a15l"></span>를 곱한

<div class="math-display" data-tex-b64="Yyc9a15lIGNccG1vZCBO"></div>

을 복호화하게 만들면 결과는 <span class="math-inline" data-tex-b64="a20="></span>이므로 <span class="math-inline" data-tex-b64="a157LTF9"></span>를 곱해 원문을 얻을 수 있다. 이는 textbook RSA가 chosen-ciphertext attack에 안전하지 않음을 보여준다.

같은 modulus <span class="math-inline" data-tex-b64="Tg=="></span>과 같은 message를 서로소인 두 공개지수 <span class="math-inline" data-tex-b64="ZV8xLGVfMg=="></span>로 암호화하면, <span class="math-inline" data-tex-b64="dSBlXzErdiBlXzI9MQ=="></span>인 Bézout coefficient를 이용해

<div class="math-display" data-tex-b64="Y18xXnUgY18yXnZcZXF1aXYgbVxwbW9kIE4="></div>

을 얻는 common modulus attack도 가능하다.

낮은 공개지수로 같은 메시지를 여러 서로소 modulus에 padding 없이 전송하면 CRT로 <span class="math-inline" data-tex-b64="bV5l"></span>의 정수값을 복원하고 <span class="math-inline" data-tex-b64="ZQ=="></span>제곱근을 취하는 broadcast attack이 가능하다. 실제 RSA encryption에는 검증된 randomized padding이 필수이다.

## ElGamal Encryption

소수 <span class="math-inline" data-tex-b64="cA=="></span>와 generator <span class="math-inline" data-tex-b64="Zw=="></span>를 사용한다. 비밀키 <span class="math-inline" data-tex-b64="YQ=="></span>를 선택하고

<div class="math-display" data-tex-b64="QT1nXmFccG1vZCBw"></div>

를 공개한다.

메시지 <span class="math-inline" data-tex-b64="bVxpbihcbWF0aGJiIFovcFxtYXRoYmIgWileXHRpbWVz"></span>을 암호화할 때 매번 새로운 난수 <span class="math-inline" data-tex-b64="aw=="></span>를 골라

<div class="math-display" data-tex-b64="Y18xPWdeayxccXF1YWQgY18yPW1BXmtccG1vZCBw"></div>

를 보낸다. 복호화는

<div class="math-display" data-tex-b64="bT1jXzIoY18xXmEpXnstMX1ccG1vZCBw"></div>

이다. 실제로 <span class="math-inline" data-tex-b64="Y18xXmE9Z157YWt9PUFeaw=="></span>이므로 마스킹 값이 상쇄된다.

ElGamal은 같은 메시지도 <span class="math-inline" data-tex-b64="aw=="></span>에 따라 다른 ciphertext를 만든다는 점에서 probabilistic하다. 그러나 ciphertext가 두 group element라 message expansion이 발생한다. 난수 <span class="math-inline" data-tex-b64="aw=="></span>를 재사용하면 ciphertext 사이의 관계가 노출되므로 절대 재사용하면 안 된다.

## Goldwasser–Micali Cryptosystem

Goldwasser–Micali는 quadratic residuosity를 이용해 한 bit를 probabilistically 암호화한다. <span class="math-inline" data-tex-b64="Tj1wcQ=="></span>에서 Jacobi symbol이 1이지만 modulo <span class="math-inline" data-tex-b64="cCxx"></span>에서 모두 nonresidue인 <span class="math-inline" data-tex-b64="eQ=="></span>를 공개한다.

난수 <span class="math-inline" data-tex-b64="clxpbihcbWF0aGJiIFovTlxtYXRoYmIgWileXHRpbWVz"></span>에 대해 bit <span class="math-inline" data-tex-b64="Ylxpblx7MCwxXH0="></span>을

<div class="math-display" data-tex-b64="Yz1yXjIgeV5iXHBtb2QgTg=="></div>

로 암호화한다.

- <span class="math-inline" data-tex-b64="Yj0w"></span>이면 <span class="math-inline" data-tex-b64="Yw=="></span>는 quadratic residue이다.
- <span class="math-inline" data-tex-b64="Yj0x"></span>이면 <span class="math-inline" data-tex-b64="Yw=="></span>는 Jacobi symbol 1인 nonresidue이다.

비밀 소인수 <span class="math-inline" data-tex-b64="cA=="></span>를 아는 수신자는 <span class="math-inline" data-tex-b64="XGxlZnQoXGZyYWMgY3BccmlnaHQp"></span>을 계산하여 bit를 구분한다. 공격자는 <span class="math-inline" data-tex-b64="Tg=="></span>의 인수분해 없이 Jacobi symbol 1인 수가 실제 제곱인지 판정해야 한다.

동일한 bit도 난수 <span class="math-inline" data-tex-b64="cg=="></span>에 따라 많은 ciphertext를 가지므로 ciphertext만 보고 두 암호문이 같은 평문을 담았는지 구별하기 어렵다. 단점은 bit 단위 암호화로 인한 큰 expansion이다.

## 세 방식의 비교

- RSA: trapdoor permutation, 인수분해와 관련, padding이 핵심이다.
- ElGamal: DLP/CDH 기반, 본질적으로 randomized, ciphertext가 두 배로 늘어난다.
- Goldwasser–Micali: quadratic residuosity 기반의 초기 probabilistic encryption, bit 단위라 비효율적이지만 의미론적 보안 개념을 잘 보여준다.

## 정리

RSA는 modular exponentiation의 trapdoor를, ElGamal은 ephemeral Diffie–Hellman 공유값을, Goldwasser–Micali는 quadratic residuosity의 구분 어려움을 사용한다. 수학적 복호화 정확성만으로 안전성이 보장되는 것은 아니며 randomized encoding, parameter validation, chosen-ciphertext 대응이 필요하다.

## 연습 문제

1. <span class="math-inline" data-tex-b64="cD01LHE9MTEsZT0z"></span>인 작은 RSA에서 <span class="math-inline" data-tex-b64="ZA=="></span>를 구한다.
2. ElGamal에서 <span class="math-inline" data-tex-b64="cD0yMyxnPTUsYT00LGs9MyxtPTc="></span>일 때 ciphertext를 계산한다.
3. Textbook RSA가 deterministic하다는 사실이 어떤 정보를 누출하는지 설명한다.

## 풀이

### 1번

<span class="math-inline" data-tex-b64="Tj01NQ=="></span>, <span class="math-inline" data-tex-b64="XHZhcnBoaShOKT00MA=="></span>이고 <span class="math-inline" data-tex-b64="M2RcZXF1aXYxXHBtb2R7NDB9"></span>이므로 <span class="math-inline" data-tex-b64="ZD0yNw=="></span>이다.

### 2번

<div class="math-display" data-tex-b64="QT01XjRcZXF1aXY0LFxxcXVhZCBjXzE9NV4zXGVxdWl2MTBccG1vZHsyM30="></div>

이고

<div class="math-display" data-tex-b64="Y18yPTdcY2RvdDReM1xlcXVpdjdcY2RvdDE4XGVxdWl2MTFccG1vZHsyM30="></div>

이다. ciphertext는 <span class="math-inline" data-tex-b64="KDEwLDExKQ=="></span>이다.

### 3번

같은 공개키와 같은 평문은 언제나 같은 암호문을 만든다. 따라서 공격자는 가능한 평문을 직접 암호화하여 ciphertext와 비교하는 dictionary attack을 수행할 수 있고, 두 암호문이 같은 평문인지도 즉시 알 수 있다.
