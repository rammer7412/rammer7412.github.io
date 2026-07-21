# Lectures 추가 방법

Lectures는 다음 3단계 구조로 구성됩니다.

```text
/lectures/                              강의 과정 목록
/lectures/basic-python/                 과정별 강의자료 목록
/lectures/basic-python/basic-python-01/ PDF 뷰어
```

실제 PDF는 Cloudflare R2에 저장하고, GitHub 저장소에는 과정 및 자료의 작은 Markdown 정보만 둡니다.

## 1. 새로운 강의 과정 추가

`src/content/courses/`에 과정 파일을 만듭니다.

예: `src/content/courses/basic-python.md`

```yaml
---
title: "Basic Python"
description: "Python의 기초 문법과 프로그래밍 개념을 다루는 강의자료 모음입니다."
theme: "python"
order: 1
draft: false
---
```

사용 가능한 `theme` 값:

```text
python
security
forensics
privacy
default
```

`order`가 작은 과정부터 Lectures 첫 화면에 표시됩니다.

## 2. 과정에 강의자료 추가

`src/content/lectures/`에 강의자료 파일을 만듭니다.

예: `src/content/lectures/basic-python-02.md`

```yaml
---
title: "Basic Python Lecture 2"
description: "두 번째 강의자료에 대한 간단한 설명입니다."
date: "2026-07-28"
course: "Basic Python"
courseSlug: "basic-python"
lectureNumber: 2
pdfUrl: "https://pub-xxxxxxxx.r2.dev/lectures/basic-python/BasicPython_lecture_2.pdf"
theme: "python"
fileName: "BasicPython_lecture_2.pdf"
topics:
  - "Python"
  - "Programming Basics"
draft: false
---

이 자료에 대한 추가 안내를 작성합니다.
```

`courseSlug`는 `src/content/courses/`에 만든 파일명과 같아야 합니다.

```text
과정 파일: src/content/courses/basic-python.md
courseSlug: basic-python
```

강의자료가 추가되면 해당 과정 페이지에 차시 순으로 자동 정렬되며, 데스크톱에서는 한 줄에 3개씩 표시됩니다. 현재 Basic Python은 1강부터 10강까지 등록되어 있습니다.

## 3. R2 CORS 정책

GitHub Pages와 로컬 Astro 개발 서버에서 PDF.js가 PDF를 읽으려면 R2 버킷에 다음 CORS 정책을 적용합니다.

```json
[
  {
    "AllowedOrigins": [
      "https://rammer7412.github.io",
      "http://localhost:4321"
    ],
    "AllowedMethods": [
      "GET",
      "HEAD"
    ],
    "AllowedHeaders": [
      "Range"
    ],
    "ExposeHeaders": [
      "Accept-Ranges",
      "Content-Length",
      "Content-Range",
      "ETag"
    ],
    "MaxAgeSeconds": 86400
  }
]
```

## 4. 공개 전 확인

```powershell
npm ci
npm run build
npm run dev
```

확인할 주소:

```text
http://localhost:4321/lectures/
http://localhost:4321/lectures/basic-python/
http://localhost:4321/lectures/basic-python/basic-python-01/
```
