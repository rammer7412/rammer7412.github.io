---
title: "Primitive Root와 QR/QNR 연결"
description: "원시근 r에 대해 a = r^m이면 m의 짝홀성이 quadratic residue 여부를 결정한다."
date: "2026-05-10"
category: "Math"
tags: ["number-theory", "primitive-root", "qr", "qnr"]
type: "note"
domain: "cryptography-math"
format: "study-note"
featured: true
---

## 핵심 명제

소수 `p`에 대해 `r`이 primitive root이고 `a = r^m`이라 하자.

- `m`이 짝수이면 `a`는 quadratic residue이다.
- `m`이 홀수이면 `a`는 quadratic non-residue이다.

## 직관

QR은 어떤 수의 제곱으로 표현되는 수다.

`m = 2k`이면 다음과 같이 쓸 수 있다.

```text
r^m = r^(2k) = (r^k)^2
```

따라서 `r^m`은 제곱 꼴이므로 QR이다.

반대로 primitive root의 거듭제곱들은 `1`부터 `p-1`까지의 모든 nonzero residue를 한 번씩 만들고, 그중 제곱으로 나오는 것들은 정확히 짝수 지수 쪽에 대응된다.
