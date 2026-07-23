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
- 여행·독서·일상 Journal

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
status: "planned" # 프로젝트 글에서 선택 사항
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

프로젝트 글은 `domain: "project"`, `format: "project"`로 작성합니다. 공개된 프로젝트 글이 없을 때 `/projects/`는 빈 상태로 표시되고, 프로젝트 글이 추가되면 카드가 자동 생성되어 일반 블로그 상세 화면으로 연결됩니다. 프로젝트 진행 상태는 `planned`, `in-progress`, `completed`, `paused` 중 하나를 선택할 수 있습니다.

### LaTeX 수식 작성

모든 Markdown 글에서 LaTeX 수식을 사용할 수 있습니다.

인라인 수식:

```markdown
소수 $p$에 대해 $g^{p-1} \equiv 1 \pmod p$가 성립한다.
```

블록 수식:

```markdown
$$
g^{\frac{p-1}{q}} \not\equiv 1 \pmod p
$$
```

수식은 `$...$` 또는 `$$...$$`로 감싸야 합니다. 백틱으로 감싸면 수식이 아니라 인라인 코드로 표시됩니다. 코드 블록과 `code` 태그 내부는 MathJax 처리 대상에서 자동으로 제외됩니다.

### 코드 블록과 테마

코드 블록에 언어를 지정하면 Shiki 구문 강조가 적용됩니다.

````markdown
```python
def power(base, exponent):
    return base ** exponent
```
````

밝은 모드에서는 GitHub Light, 어두운 모드에서는 GitHub Dark 계열 토큰 색상이 자동으로 사용됩니다. 글마다 별도의 테마 설정을 추가할 필요가 없습니다.

## Writing a Journal entry

개인적인 기록은 `src/content/journal`에 Markdown 파일로 추가합니다. 기술 글과 별도의 콘텐츠 컬렉션으로 관리됩니다.

```yaml
title: "Journal 글 제목"
description: "카드와 검색에 표시할 요약"
date: "2026-07-21"
category: "Travel"
image: "/images/journal/example.jpg"
imageAlt: "대표 이미지 설명"
location: "선택 사항"
draft: false
```

`category`는 `Travel`, `Books`, `Daily`, `Culture`, `Thoughts`, `Other` 중 하나를 사용합니다. 작성 예시는 `src/content/journal/example.md`, 복사용 템플릿은 `src/content/templates/journal.md`에 있습니다.

Journal 목록은 데스크톱에서 3열, 태블릿에서 2열, 모바일에서 1열 이미지 카드로 표시됩니다. 목록에서 카드를 누르면 모달 창으로 열리고, `/journal/파일명/` 주소로 직접 접근하면 독립된 상세 페이지가 열립니다.

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


## Lectures

강의자료 추가와 Cloudflare R2 연결 방법은 [`LECTURES_SETUP.md`](./LECTURES_SETUP.md)를 참고하세요.

## Writing series and content folders

Related study notes are grouped by directory:

```text
src/content/posts/
├── linear-algebra/
│   └── linear-algebra-*.md
├── probability-theory/
│   └── probability-theory-*.md
└── other standalone posts
```

A series post only needs shared metadata and its order:

```yaml
series: "linear-algebra"
seriesOrder: 20
```

`SeriesNavigation.astro` automatically determines the total number of public posts and the previous/next links. Adding a new post no longer requires editing the existing Markdown files. See `src/content/templates/study-series.md` for a complete example.
