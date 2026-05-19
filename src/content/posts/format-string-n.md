---
title: "Format String Attack에서 %n 이해하기"
description: "%n은 지금까지 출력된 글자 수를 주소에 써 넣는 포맷 지정자다."
date: "2026-05-16"
category: "Security"
tags: ["format-string", "pwn", "memory"]
type: "note"
---

## 한 줄 요약

`%n`은 값을 출력하는 지정자가 아니라, **지금까지 출력된 글자 수를 특정 주소에 저장하는 지정자**다.

## 왜 위험한가?

사용자 입력이 그대로 `printf(user_input)`에 들어가면, 공격자는 format string을 직접 제어할 수 있다.

```c
printf(user_input);
```

이때 입력에 `%x`, `%p`, `%n` 등을 넣으면 스택 값을 읽거나 특정 주소에 값을 쓸 수 있다.

## 중요한 감각

`%n`이 쓰는 값은 전체 프로그램의 누적 출력량이 아니라, 해당 `printf` 호출 안에서 지금까지 출력된 문자 수라고 이해하면 된다.

## 정리

- `%p`: 포인터 주소 출력
- `%x`: 정수 값을 16진수로 출력
- `%n`: 출력된 글자 수를 주소에 저장
