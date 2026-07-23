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
c-language
security
forensics
privacy
default
```

`order`가 작은 과정부터 Lectures 첫 화면에 표시됩니다.

## 2. 과정에 강의자료 추가

`src/content/lectures/<course-slug>/`에 강의자료 파일을 만듭니다.

예: `src/content/lectures/basic-python/basic-python-02.md`

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

강의자료가 추가되면 해당 과정 페이지에 차시 순으로 자동 정렬되며, 데스크톱에서는 한 줄에 3개씩 표시됩니다. 현재 Basic Python은 1강부터 10강, C Language는 1강부터 12강까지 등록되어 있습니다.

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


## C Language 과정

C Language 과정은 `c-language` 테마를 사용합니다. Basic Python의 원형 장식과 구분되도록 코드 그리드, 큰 `C` 워터마크, `#include <stdio.h>`, 중괄호 장식이 자동 표지에 적용됩니다.

```text
/lectures/c-language/
/lectures/c-language/c-language-01/
...
/lectures/c-language/c-language-12/
```

현재 R2 경로는 다음 규칙을 사용합니다.

```text
https://pub-abc6036fee00411eae15969b5cc3ed3b.r2.dev/lectures/c-language/CLanguage_lecture_N.pdf
```

새 C Language 자료를 추가할 때는 `src/content/lectures/c-language/c-language-13.md`와 같은 파일을 만들고 `theme: "c-language"`를 사용합니다.


## 현재 Markdown 구조

```text
src/content/lectures/
├── basic-python/
│   ├── basic-python-01.md
│   └── ... basic-python-10.md
└── c-language/
    ├── c-language-01.md
    └── ... c-language-12.md
```

하위 디렉터리는 저장소 안에서만 파일을 구분하기 위한 구조입니다. 공개 URL은 파일명 기준으로 유지됩니다.
