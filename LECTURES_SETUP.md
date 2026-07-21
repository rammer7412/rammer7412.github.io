# Lectures 관리 방법

## 현재 연결된 PDF

- 강의: `Basic Python Lecture 1`
- R2 객체: `lectures/basic-python/BasicPython_lecture_1.pdf`
- 사이트 경로: `/lectures/basic-python-01/`

## 다음 강의자료 추가

1. Cloudflare R2의 과목 폴더에 PDF를 업로드합니다.
2. `src/content/lectures/`에 Markdown 파일을 추가합니다.
3. 아래 frontmatter에서 제목, 차시, PDF URL만 바꿉니다.

```yaml
---
title: "Basic Python Lecture 2"
description: "두 번째 강의자료 설명"
date: "2026-07-28"
course: "Basic Python"
lectureNumber: 2
pdfUrl: "https://pub-abc6036fee00411eae15969b5cc3ed3b.r2.dev/lectures/basic-python/BasicPython_lecture_2.pdf"
theme: "python"
fileName: "BasicPython_lecture_2.pdf"
fileSize: "1.2 MB"
topics:
  - "Python"
draft: false
---
```

사용 가능한 `theme` 값:

- `python`
- `security`
- `forensics`
- `privacy`
- `default`

별도의 표지 이미지는 필요하지 않습니다. 사이트가 과목명, 차시, 제목을 사용해 자동 표지를 만듭니다.

## R2 CORS 정책

PDF.js가 GitHub Pages에서 R2 PDF를 읽으려면 버킷의 CORS 정책에 다음 내용을 등록합니다.

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

R2 대시보드의 버킷 `Settings` → `CORS Policy`에서 등록할 수 있습니다.
