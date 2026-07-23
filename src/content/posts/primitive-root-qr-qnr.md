---
title: "Primitive Root와 QR/QNR 연결"
description: "원시근의 지수 짝홀성이 이차 잉여와 이차 비잉여를 어떻게 결정하는지 정리한다."
date: "2026-05-10"
category: "Math"
tags: ["number-theory", "primitive-root", "qr", "qnr"]
type: "note"
domain: "cryptography-math"
format: "study-note"
featured: true
draft: true
---

## 핵심 명제

소수 $p$에 대해 $r$이 primitive root이고

$$
a \equiv r^m \pmod p
$$

라고 하자.

- $m$이 짝수이면 $a$는 quadratic residue이다.
- $m$이 홀수이면 $a$는 quadratic non-residue이다.

## 직관

Quadratic residue는 어떤 수의 제곱으로 표현되는 수이다.

$m=2k$이면 다음과 같이 쓸 수 있다.

$$
a \equiv r^m = r^{2k} = \left(r^k\right)^2 \pmod p
$$

따라서 $r^m$은 제곱 꼴이므로 quadratic residue이다.

반대로 primitive root의 거듭제곱

$$
r^0, r^1, r^2, \ldots, r^{p-2} \pmod p
$$

은 $1$부터 $p-1$까지의 모든 nonzero residue를 한 번씩 만든다. 이 가운데 제곱으로 나타나는 원소들은 정확히 짝수 지수에 대응하므로 다음과 같이 정리할 수 있다.

$$
r^m \text{ is a QR} \iff m \equiv 0 \pmod 2
$$

$$
r^m \text{ is a QNR} \iff m \equiv 1 \pmod 2
$$
