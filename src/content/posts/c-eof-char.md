---
title: "EOF를 char로 받으면 안 되는 이유"
description: "EOF는 문자 하나가 아니라 입력 종료를 나타내는 int 값이다."
date: "2026-05-14"
category: "C"
tags: ["c", "eof", "file-io", "char"]
type: "note"
domain: "systems-development"
format: "study-note"
featured: false
---

## 결론

`getchar()`나 `fgetc()`의 반환값은 `char`가 아니라 `int`로 받아야 한다.

```c
int ch;
while ((ch = getchar()) != EOF) {
    putchar(ch);
}
```

## 왜 int인가?

입력 함수는 실제 문자 값과 EOF를 구분해야 한다. 그런데 `char`는 가능한 문자 값을 저장하는 타입이므로, EOF 같은 특별한 값을 안전하게 구분하기 어렵다.

## 시험 포인트

다음 코드는 위험하다.

```c
char ch;
while ((ch = getchar()) != EOF) {
    putchar(ch);
}
```

EOF 비교는 `int`로 받은 뒤에 해야 한다.
