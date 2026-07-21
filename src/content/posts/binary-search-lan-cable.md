---
title: "랜선 자르기와 Parametric Search"
description: "최대 길이를 직접 찾는 대신 가능한 길이인지 판정하며 이진 탐색한다."
date: "2026-05-08"
category: "Problem Solving"
tags: ["binary-search", "parametric-search", "boj"]
type: "problem"
domain: "systems-development"
format: "problem-solving"
featured: false
---

## 문제 감각

길이 `x`로 잘랐을 때 필요한 개수 이상을 만들 수 있는지 판정한다.

- 가능하면 더 긴 길이를 시도한다.
- 불가능하면 더 짧은 길이를 시도한다.

## 코드 틀

```c
long long left = 1;
long long right = max_len;
long long answer = 0;

while (left <= right) {
    long long mid = (left + right) / 2;

    if (can_make(mid)) {
        answer = mid;
        left = mid + 1;
    } else {
        right = mid - 1;
    }
}
```

## 실수 포인트

- `left = 0`으로 두면 `mid = 0`이 되어 division by zero가 날 수 있다.
- 랜선 길이 합이나 개수 계산은 `long long`이 안전하다.
