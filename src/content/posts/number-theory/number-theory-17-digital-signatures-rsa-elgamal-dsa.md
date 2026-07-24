---
title: "17. Digital Signatures: RSA, ElGamal, and DSA"
description: "전자서명의 보안 목표와 hash-then-sign 구조를 설명하고 RSA, ElGamal, DSA 서명식의 정확성을 검증한다."
date: "2026-02-16"
category: "정수론"
tags: ["number-theory", "digital-signature", "rsa-signature", "elgamal-signature", "dsa"]
domain: "number-theory"
format: "study-note"
series: "number-theory"
seriesOrder: 17
featured: false
draft: false
---

전자서명은 메시지를 숨기는 암호화와 달리, 누가 메시지를 승인했는지와 메시지가 변조되지 않았는지를 검증한다. 서명자는 private key를 사용하고 누구나 public key로 검증할 수 있다.

## 전자서명의 목표

- <strong>Unforgeability:</strong> private key 없이 유효한 서명을 만들기 어려워야 한다.
- <strong>Integrity:</strong> 메시지가 변경되면 검증이 실패해야 한다.
- <strong>Authentication:</strong> 서명이 특정 public key의 소유자에 의해 생성되었음을 확인한다.
- <strong>Non-repudiation:</strong> 키 관리와 인증 체계를 전제로 서명자가 행위를 부인하기 어렵게 한다.

“재사용 불가”는 동일한 서명값을 다른 메시지에 붙여도 통과하지 않아야 한다는 의미로 이해할 수 있다.

## Hash-Then-Sign

긴 메시지를 직접 수학 연산에 넣지 않고 cryptographic hash

<div class="math-display" data-tex-b64="aD1IKE0p"></div>

를 계산한 뒤 digest에 서명한다. Hash는 임의 길이 입력을 고정 길이로 압축하고, 충돌을 찾기 어려워야 한다. 검증자는 받은 메시지의 hash를 다시 계산하여 서명에서 복원한 digest와 비교한다.

단순한 교과서식 수학 변환 대신 실제 scheme은 domain separation, randomized encoding, 명확한 message format을 사용해야 한다.

## RSA Signature

RSA private exponent <span class="math-inline" data-tex-b64="ZA=="></span>와 public exponent <span class="math-inline" data-tex-b64="ZQ=="></span>를 사용한다. 단순화한 형태에서

<div class="math-display" data-tex-b64="cz1IKE0pXmRccG1vZCBO"></div>

이고 검증자는

<div class="math-display" data-tex-b64="c15lXHN0YWNrcmVsez99e1xlcXVpdn1IKE0pXHBtb2QgTg=="></div>

을 확인한다. <span class="math-inline" data-tex-b64="ZWRcZXF1aXYxXHBtb2R7XHZhcnBoaShOKX0="></span>이므로 RSA 정확성과 같은 논리로 성립한다.

Textbook RSA signature는 multiplicative하여 위조가 가능하므로 실제로는 서명용 padding scheme을 사용한다. 암호화와 서명은 같은 RSA 지수 연산을 사용하더라도 목적과 encoding이 다르다.

## ElGamal Digital Signature

소수 <span class="math-inline" data-tex-b64="cA=="></span>, generator <span class="math-inline" data-tex-b64="Zw=="></span>, private key <span class="math-inline" data-tex-b64="YQ=="></span>, public key <span class="math-inline" data-tex-b64="QT1nXmE="></span>를 사용한다. 매 서명마다

<div class="math-display" data-tex-b64="MVxsZSBrXGxlIHAtMixccXF1YWRcZ2NkKGsscC0xKT0x"></div>

인 새로운 nonce를 고른다.

<div class="math-display" data-tex-b64="cj1nXmtccG1vZCBw"></div>

를 계산하고

<div class="math-display" data-tex-b64="c1xlcXVpdiBrXnstMX0oSChNKS1hcilccG1vZHtwLTF9"></div>

로 둔다. 서명은 <span class="math-inline" data-tex-b64="KHIscyk="></span>이다.

검증식은

<div class="math-display" data-tex-b64="Z157SChNKX1cc3RhY2tyZWx7P317XGVxdWl2fUFeciByXnNccG1vZCBw"></div>

이다. 실제로

<div class="math-display" data-tex-b64="QV5yIHJecz1nXnthcn1nXntrc309Z157YXIrSChNKS1hcn09Z157SChNKX0="></div>

이므로 올바른 서명은 통과한다.

## DSA

DSA는 order가 큰 소수 <span class="math-inline" data-tex-b64="cQ=="></span>인 부분군을 사용한다. <span class="math-inline" data-tex-b64="cVxtaWQgcC0x"></span>이고 <span class="math-inline" data-tex-b64="Zw=="></span>의 order가 <span class="math-inline" data-tex-b64="cQ=="></span>라고 하자.

- Private key: <span class="math-inline" data-tex-b64="eFxpblx7MSxcbGRvdHMscS0xXH0="></span>
- Public key: <span class="math-inline" data-tex-b64="eT1nXnhccG1vZCBw"></span>

서명할 때 새로운 <span class="math-inline" data-tex-b64="a1xpblx7MSxcbGRvdHMscS0xXH0="></span>를 선택하고

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CnImPShnXmtcYm1vZCBwKVxibW9kIHEsXFwKcyY9a157LTF9KEgoTSkreHIpXGJtb2QgcQpcZW5ke2FsaWduZWR9"></div>

를 계산한다. <span class="math-inline" data-tex-b64="cj0w"></span> 또는 <span class="math-inline" data-tex-b64="cz0w"></span>이면 새 nonce를 선택한다.

검증자는

<div class="math-display" data-tex-b64="dz1zXnstMX1ccG1vZCBxLFxxcXVhZCB1XzE9SChNKXcsXHFxdWFkIHVfMj1yd1xwbW9kIHE="></div>

를 계산하고

<div class="math-display" data-tex-b64="dj0oZ157dV8xfXlee3VfMn1cYm1vZCBwKVxibW9kIHE="></div>

가 <span class="math-inline" data-tex-b64="cg=="></span>과 같은지 확인한다.

### 정확성

<span class="math-inline" data-tex-b64="cz1rXnstMX0oSCt4cik="></span>이므로 <span class="math-inline" data-tex-b64="a1xlcXVpdihIK3hyKXNeey0xfT11XzEreHVfMlxwbW9kIHE="></span>이다. 따라서

<div class="math-display" data-tex-b64="Z157dV8xfXlee3VfMn09Z157dV8xK3h1XzJ9PWdeaw=="></div>

이고 modulo <span class="math-inline" data-tex-b64="cQ=="></span>로 다시 줄이면 <span class="math-inline" data-tex-b64="dj1y"></span>이다.

## Nonce 재사용의 위험성

ElGamal, DSA, ECDSA에서 nonce <span class="math-inline" data-tex-b64="aw=="></span>는 secret이고 매번 달라야 한다. DSA에서 같은 <span class="math-inline" data-tex-b64="aw=="></span>로 두 digest <span class="math-inline" data-tex-b64="aF8xLGhfMg=="></span>를 서명하면

<div class="math-display" data-tex-b64="c18xLXNfMlxlcXVpdiBrXnstMX0oaF8xLWhfMilccG1vZCBx"></div>

이므로

<div class="math-display" data-tex-b64="a1xlcXVpdihoXzEtaF8yKShzXzEtc18yKV57LTF9XHBtb2QgcQ=="></div>

를 복원할 수 있다. 이어서

<div class="math-display" data-tex-b64="eFxlcXVpdihzXzFrLWhfMSlyXnstMX1ccG1vZCBx"></div>

로 private key가 노출된다. 편향된 nonce도 lattice attack의 대상이 될 수 있다.

## Public Key Trust

서명이 수학적으로 유효하다는 것은 주어진 public key와 일치한다는 뜻이다. 그 public key가 실제 Alice의 것인지 확인하려면 인증서와 신뢰 체계가 필요하다. 공격자가 자신의 키를 Alice의 키라고 바꿔치기하면 서명 검증만으로는 신원을 보장할 수 없다.

## 정리

전자서명은 메시지 hash와 private-key 연산을 결합한다. RSA는 trapdoor permutation을, ElGamal과 DSA는 discrete logarithm 구조를 사용한다. 정확한 수식뿐 아니라 collision-resistant hash, public-key 인증, 안전한 nonce 생성이 보안의 필수 조건이다.

## 연습 문제

1. RSA signature에서 왜 메시지 전체보다 hash에 서명하는지 두 가지 이유를 설명한다.
2. ElGamal 검증식 <span class="math-inline" data-tex-b64="QV5yIHJec1xlcXVpdiBnXntIKE0pfQ=="></span>을 유도한다.
3. DSA에서 nonce가 재사용되었을 때 private key를 복원하는 순서를 설명한다.

## 풀이

### 1번

Hash는 임의 길이 메시지를 고정 길이로 줄여 연산 비용과 encoding 문제를 줄인다. 또한 서명이 digest에 강하게 결합되므로 메시지의 작은 변경도 다른 digest를 만들게 한다. 단, hash는 충돌 저항성을 가져야 한다.

### 2번

<span class="math-inline" data-tex-b64="QT1nXmE="></span>, <span class="math-inline" data-tex-b64="cj1nXms="></span>, <span class="math-inline" data-tex-b64="a3NcZXF1aXYgSChNKS1hclxwbW9ke3AtMX0="></span>이므로

<div class="math-display" data-tex-b64="QV5yIHJecz1nXnthcn1nXntrc309Z157SChNKX0="></div>

이다.

### 3번

두 서명의 <span class="math-inline" data-tex-b64="c18xLXNfMg=="></span> 식에서 먼저 <span class="math-inline" data-tex-b64="aw=="></span>를 구한다. 그 값을 한 서명식 <span class="math-inline" data-tex-b64="c18xa1xlcXVpdiBoXzEreHI="></span>에 대입하고 <span class="math-inline" data-tex-b64="cl57LTF9"></span>를 곱해 private key <span class="math-inline" data-tex-b64="eA=="></span>를 구한다.
