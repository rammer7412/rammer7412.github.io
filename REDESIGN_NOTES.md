# Rammer Lab Redesign Notes

## 반영한 핵심 변경

- 사이트 이름을 **Rammer Lab**으로 통일
- 개인정보보호와 기술을 함께 보여주는 편집형 홈 화면으로 개편
- 밝은 테마와 다크 모드 토글 제공
- 상단 메뉴를 개인정보보호, 기술, 리서치, 프로젝트, 아카이브, 소개로 재구성
- 기존 `/notes`, `/labs`, `/problems` 주소 유지
- 실제 게시글 제목·설명·태그를 검색하는 `Ctrl/⌘ + K` 검색 추가
- 아카이브에 주제·글 형식·검색어·URL 쿼리 기반 필터 추가
- 게시글을 `domain`과 `format`으로 분리해 관리
- Astro Content Collection 스키마로 frontmatter 검증
- 논문 리뷰, 사례 분석, 프로젝트 Markdown 템플릿 추가
- 게시글 페이지에 분류, 예상 읽기 시간, 태그 탐색, 분석 글 안내문 추가
- Open Graph, Twitter Card, canonical URL 등 메타데이터 보완
- Google AdSense 스크립트와 `public/ads.txt` 유지
- 광고와 로컬 저장소 사용을 설명하는 사이트 개인정보 안내 페이지 추가
- Windows 파일과 빌드 산출물을 제외하는 `.gitignore` 보완
- Windows 로컬 개발과 GitHub Actions 모두 `npm ci`를 사용할 수 있도록 문서화
- 새 브랜드에 맞는 `og-image.png` 제작

## 먼저 확인하면 좋은 화면

1. `/` 홈 화면의 문구와 영역 순서
2. `/technology/`의 기존 기술 글 분류
3. `/privacy/`와 `/research/`의 빈 상태 문구
4. `/projects/`에 표시한 프로젝트명과 상태
5. `/about/`의 자기소개 문구
6. `/site-privacy/`의 AdSense 안내 문구
7. 모바일 메뉴와 다크 모드

## 새 글 작성

`src/content/templates`의 파일을 복사해 `src/content/posts`에 넣고 다음 값을 실제 글에 맞게 수정합니다.

- `domain`: 주제 영역
- `format`: 글의 형식
- `featured`: 홈 대표 글 여부
- `draft`: 공개 여부

자세한 값 목록은 루트 `README.md`에 정리되어 있습니다.
