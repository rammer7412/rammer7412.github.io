# CS Lab Dashboard

컴퓨터공학 전공 노트, 문제 풀이, 실험 기록, 삽질 로그를 정리하기 위한 GitHub Pages용 Astro 블로그 스타터입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:4321`로 확인합니다.

## 글 추가 방법

`src/content/posts/` 폴더에 Markdown 파일을 추가하면 됩니다.

예시:

```md
---
title: "TLB가 왜 빠른가?"
description: "주소 변환 캐시로서 TLB가 성능을 높이는 이유를 정리합니다."
date: "2026-05-18"
category: "OS"
tags: ["paging", "tlb", "virtual-memory"]
type: "note"
---

본문을 여기에 작성합니다.
```

## GitHub Pages 배포

1. GitHub에 새 저장소를 만듭니다.
2. 이 프로젝트를 push합니다.
3. Repository Settings → Pages → Build and deployment → Source를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동으로 빌드/배포합니다.

## 추천 저장소 이름

- `username.github.io`: 메인 개인 페이지로 바로 사용
- `cs-lab-dashboard`: 프로젝트 페이지로 사용

`astro.config.mjs`는 GitHub Actions 환경에서 저장소 이름을 자동으로 읽어서 base path를 맞추도록 작성되어 있습니다.
