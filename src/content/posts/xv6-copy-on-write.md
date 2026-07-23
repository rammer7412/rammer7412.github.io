---
title: "xv6 Copy-on-Write 구현 기록"
description: "fork에서 물리 페이지 복사를 미루고 page fault 시점에 복사하는 방식 정리."
date: "2026-05-18"
category: "OS"
tags: ["xv6", "paging", "cow", "virtual-memory"]
type: "lab"
domain: "systems-development"
format: "lab"
featured: true
draft: true
---

## 한 줄 요약

Copy-on-Write는 `fork()` 시점에 모든 페이지를 바로 복사하지 않고, 부모와 자식이 같은 물리 페이지를 공유하다가 쓰기 page fault가 발생했을 때 실제 복사를 수행하는 방식이다.

## 핵심 흐름

1. `copyuvm()`에서 부모와 자식의 PTE를 같은 물리 페이지로 매핑한다.
2. 부모와 자식 모두 `PTE_W`를 제거해서 읽기 전용으로 만든다.
3. refcount를 증가시킨다.
4. 쓰기 접근이 발생하면 page fault에서 refcount를 확인한다.
5. refcount가 1이면 다시 writable로 바꾼다.
6. refcount가 2 이상이면 새 페이지를 할당하고 내용을 복사한다.

## 의사 코드

```c
if (ref_count == 1) {
    *pte = pa | flags | PTE_W;
} else {
    mem = kalloc();
    memmove(mem, P2V(pa), PGSIZE);
    *pte = V2P(mem) | flags | PTE_W;
    dec_refcount(pa);
}
```

## 실수 포인트

- `va < 0`은 `uint va`에서는 의미가 없다.
- kernel 영역 접근은 `va >= KERNBASE`로 막아야 한다.
- PTE 수정 후 TLB flush가 필요하다.
