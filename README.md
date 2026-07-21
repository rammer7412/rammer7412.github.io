# Rammer Lab

개인정보보호와 기술을 함께 다루는 Astro 기반 개인 리서치 블로그입니다.

## Main areas

- 개인정보보호·거버넌스
- 프라이버시 엔지니어링
- 보안·디지털포렌식
- 시스템·개발
- 암호·수학
- 논문·보고서·기업 사례 분석
- 프로젝트 기록

## Requirements

- Node.js 22.12.0 이상 권장
- npm

버전 확인:

```powershell
node -v
npm -v
```

## Local development on Windows

처음 받았거나 `package-lock.json`에 기록된 버전 그대로 깨끗하게 설치할 때:

```powershell
npm ci
npm run dev
```

의존성을 추가하거나 `package-lock.json`을 갱신해야 할 때:

```powershell
npm install
npm run dev
```

PowerShell 실행 정책 때문에 `npm.ps1` 오류가 발생하면 다음처럼 실행할 수 있습니다.

```powershell
npm.cmd ci
npm.cmd run dev
```

정적 빌드 확인:

```powershell
npm run build
npm run preview
```

## GitHub Pages deployment

`.github/workflows/deploy.yml`은 GitHub의 Ubuntu 환경에서 Node.js를 설정한 뒤 다음 순서로 배포합니다.

```bash
npm ci
npm run build
```

로컬 운영체제가 Windows여도 GitHub Actions 실행 환경과는 별개입니다.

## Writing a post

`src/content/posts`에 Markdown 파일을 추가합니다.

```yaml
title: "글 제목"
description: "목록과 검색에 표시할 요약"
date: "2026-07-21"
category: "세부 카테고리"
tags: ["privacy", "security"]
domain: "privacy-engineering"
format: "study-note"
featured: false
draft: false
```

### domain values

- `privacy-governance`
- `privacy-engineering`
- `security-forensics`
- `systems-development`
- `cryptography-math`
- `research-cases`
- `project`

### format values

- `study-note`
- `lab`
- `problem-solving`
- `paper-review`
- `report-review`
- `case-analysis`
- `project`
- `opinion`

논문 리뷰, 기업 사례 분석, 프로젝트 글의 시작 양식은 `src/content/templates`에 있습니다. 템플릿을 `src/content/posts`로 복사한 뒤 `draft: false`로 변경하면 공개됩니다.

## Main configuration

사이트 이름, 소개, 메뉴, 카테고리, 지식 지도와 AdSense 클라이언트 ID는 `src/data/site.ts`에서 관리합니다.

```ts
adsenseClient: 'ca-pub-8463924430150624'
```

광고를 잠시 비활성화하려면 값을 빈 문자열로 바꿀 수 있습니다.

## AdSense and ads.txt

- AdSense 로더는 `src/layouts/BaseLayout.astro`에서 불러옵니다.
- 승인 판매자 정보는 `public/ads.txt`에 있습니다.
- 광고 및 쿠키 사용 안내는 `/site-privacy/` 페이지에 있습니다.

## Git ignore

루트의 `.gitignore`에서 다음 생성물과 로컬 파일을 제외합니다.

- `node_modules/`
- `dist/`
- `.astro/`
- `.env*`
- Windows의 `Thumbs.db`, `Desktop.ini`
- IDE 및 로그 파일
