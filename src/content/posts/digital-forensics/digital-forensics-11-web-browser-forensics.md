---
title: "11. Web Browser Forensics"
description: "History, Cache, Cookie, Storage, Download, Credential과 DPAPI를 이용한 브라우저 행위 분석을 정리한다."
date: "2026-03-06"
category: "디지털포렌식"
tags: ["digital-forensics", "browser-forensics", "chromium", "sqlite", "dpapi"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 11
featured: false
draft: false
---
Web Browser는 사용자가 인터넷 서비스와 상호작용하는 주요 Interface이다. Browser Profile에는 방문 기록, 검색어, Download, Cookie, Cache, 저장된 Credential이 남을 수 있다. 그러나 각 Artifact는 서로 다른 목적으로 생성되므로, “기록이 있다”와 “사용자가 직접 보았다”를 구분해야 한다.

## Browser Profile

Browser는 일반적으로 사용자별 Profile Directory에 데이터를 저장한다. 한 OS 계정 안에도 Default와 여러 추가 Profile, Guest Profile이 존재할 수 있다.

조사 시 다음을 식별한다.

- Browser 종류와 Version
- Profile 이름과 Directory
- OS User SID 또는 Account
- Sync Account 사용 여부
- 마지막 사용 시각
- Private Mode와 Extension

Profile Directory를 수집할 때 Main Database뿐 아니라 WAL, Journal, Shared Memory, Cache Directory, Encryption Key 관련 파일도 함께 확보한다.

## 주요 Browser Engine

- <strong>Chromium 계열</strong>: Chrome, Edge, Brave 등. Blink Engine과 공통 Profile 구조가 많다.
- <strong>Firefox</strong>: Gecko Engine과 별도 SQLite Schema 사용
- <strong>Safari</strong>: WebKit 기반이며 macOS·iOS의 Keychain, Plist, Database와 연결

같은 Chromium 계열이라도 Vendor와 Version에 따라 Path, Schema, Encryption 방식이 달라질 수 있다.

## History

History는 사용자가 방문하거나 Browser가 Navigation한 URL과 시각을 저장한다.

확인 가능한 정보:

- URL과 Page Title
- Visit Time
- Visit Count와 Typed Count
- Transition Type
- Referrer 또는 From Visit
- Search Term
- Redirect Chain

URL Record와 Visit Record가 분리된 Database Schema가 흔하다. 동일 URL에 여러 Visit가 연결될 수 있다.

## URL의 구조

```text
scheme://host:port/path?query=value#fragment
```

- <strong>Scheme</strong>: http, https, file 등
- <strong>Host</strong>: Domain 또는 IP
- <strong>Port</strong>: 생략 시 Scheme 기본값 사용 가능
- <strong>Path</strong>: Server Resource 경로
- <strong>Query</strong>: 검색어·식별자·Filter 등
- <strong>Fragment</strong>: Client-side 위치이며 Server로 전송되지 않을 수 있음

Query에는 개인정보와 Token이 포함될 수 있다. Report에 전체 URL을 그대로 노출할 필요가 있는지 검토한다.

## History의 해석 한계

History Entry가 생기는 원인은 다양하다.

- 사용자가 Address Bar에 입력
- Link Click
- Redirect
- Background Tab와 Extension
- Embedded Frame
- Sync로 다른 장치 기록 유입

Transition Type과 Referrer를 사용하여 Typed Navigation과 Redirect를 구분한다. History가 없더라도 Private Mode, 삭제, 정책, 다른 Profile 사용 가능성이 있다.

## Cached Data

Cache는 다시 요청할 Resource를 빠르게 불러오기 위해 Response Body와 Header를 저장한다.

Cache에서 얻을 수 있는 정보:

- Resource URL
- HTTP Header
- Content Type과 Encoding
- Response Body
- Fetch·Last Used 관련 시각
- ETag, Cache-Control 등

Cache는 일반적으로 Browser의 별도 Binary 구조를 사용하며 모든 내용이 SQLite인 것은 아니다. Browser Version에 맞는 Parser가 필요하다.

### Cache가 증명하는 것

Cache Entry는 Browser가 Resource를 받아 저장했을 가능성을 보여준다. 그러나 사용자가 화면에서 실제로 보았는지는 Rendering 상태, Preload, Service Worker, Background Request에 따라 다르다. History와 화면 Capture, Session Artifact로 보완한다.

## Cookie

Cookie는 Server가 Browser에 저장하도록 요청한 작은 Key-Value Data이다.

주요 Field:

- Host/Domain
- Name과 Encrypted Value
- Path
- Creation, Last Access, Expiration
- Secure, HttpOnly, SameSite
- Persistent 또는 Session 여부

Cookie는 Login Session, Preference, Tracking Identifier를 포함할 수 있다. Cookie 값만으로 계정 소유자를 확정하지 않고 Domain, Account Page, 다른 Credential Artifact를 확인한다.

### Cookie 속성

- <strong>Secure</strong>: HTTPS Connection에서만 전송하도록 제한
- <strong>HttpOnly</strong>: 일반 Client-side Script 접근 제한
- <strong>SameSite</strong>: Cross-site Request에서 전송 범위 제어

이 속성은 Browser 보안 정책이며 Cookie가 암호화되어 있다는 뜻과는 다르다.

## Local Storage와 Session Storage

- <strong>Local Storage</strong>: Origin별 Key-Value Data가 지속적으로 남는다.
- <strong>Session Storage</strong>: Tab·Session 수명과 연결되어 종료 후 사라질 수 있다.
- <strong>IndexedDB</strong>: 구조화된 대용량 Client-side Data 저장
- <strong>Service Worker Cache</strong>: Offline Resource와 Application Data 저장

Modern Web App은 History보다 Storage에 더 많은 상태를 남길 수 있다. Origin을 기준으로 데이터와 Domain을 연결한다.

## Download History

Download Artifact는 다음을 제공할 수 있다.

- Source URL과 Referrer
- Target File Path
- Temporary Path
- Start·End Time
- Received Bytes와 Total Bytes
- MIME Type
- Completion·Interrupted State
- Danger Type 또는 Security Verdict

Download Record가 있어도 File이 현재 존재하지 않을 수 있다. File System, Recycle Bin, <code>Zone.Identifier</code>, Anti-virus Log를 확인한다.

Browser Download Time과 File Created Time이 다를 수 있다. Temporary File 생성, Rename, Antivirus Scan, Copy가 개입하기 때문이다.

## Login Credential

Browser는 저장된 Username과 Password를 별도 Database에 보관할 수 있다. Chromium 계열에서는 Login Database와 OS 보호 기능을 함께 사용한다.

### Windows DPAPI

DPAPI(Data Protection API)는 User 또는 Machine Context에 연결된 Key로 Application Data를 보호한다. Browser Password와 Cookie 복호화에는 다음이 필요할 수 있다.

- 원래 User Context
- User Master Key
- Logon Secret 또는 복구 Key
- Browser의 Local State에 저장된 보호 Key

DB에서 Ciphertext를 추출했다고 바로 평문을 얻을 수 있는 것은 아니다. Credential은 매우 민감하므로 조사 범위와 보관·보고를 엄격히 제한해야 한다.

## SQLite Database

Chromium과 Firefox의 History, Cookie, Download, Form Data 중 많은 항목은 SQLite에 저장된다.

### 함께 수집해야 할 파일

- Main Database
- <code>-wal</code> Write-Ahead Log
- <code>-shm</code> Shared Memory
- <code>-journal</code> Rollback Journal

Browser가 실행 중이면 최신 Transaction이 WAL에만 존재할 수 있다. Main DB만 복사하면 최근 Record를 놓치거나 불일치가 생길 수 있다.

### 삭제된 Record

SQLite에서 DELETE된 Record는 Free Page, Unallocated Cell, WAL에 일부 남을 수 있다. 그러나 Vacuum, Page Reuse, Encryption으로 사라질 수 있다. 복구 결과는 Schema와 Constraint를 검증해야 한다.

## Private/Incognito Mode

Private Mode는 일반 History와 Persistent Cookie를 덜 남기도록 설계되었지만 완전한 무흔적 기능은 아니다.

남을 수 있는 흔적:

- DNS와 Network Device Log
- Downloaded File
- <code>Zone.Identifier</code>
- RAM과 Pagefile
- Extension·Security Software Log
- File System Journal
- Router, Proxy, Server, Cloud Audit Log

Private Mode 사용 여부와 별개로 Browser 밖의 Artifact를 조사한다.

## Browser Sync

로그인한 Browser는 History, Bookmark, Password, Open Tab을 Cloud와 동기화할 수 있다. Local Record가 해당 장치에서 직접 발생한 것인지 다른 장치에서 Sync된 것인지 구분해야 한다.

Device Info, Transition, Sync Metadata, Cloud Account Log를 확인한다.

## Cross-Artifact Correlation

Browser에서 다운로드된 실행 파일을 조사하는 예시이다.

1. History의 Landing Page와 Referrer
2. Download Record의 Source URL과 Target Path
3. Cache의 HTTP Header와 Payload Fragment
4. File의 <code>Zone.Identifier</code>
5. File System Created Time과 Hash
6. Prefetch 또는 Process Creation Event
7. Defender 탐지
8. Recycle Bin 또는 삭제 Journal

이 흐름을 통해 “접속 → 다운로드 → 저장 → 실행 → 삭제” 가설을 검증할 수 있다.

## Browser Artifact가 말하지 못하는 것

- History만으로 사용자가 Page 내용을 모두 읽었다고 확정할 수 없다.
- Cookie만으로 사람이 직접 로그인했다고 확정할 수 없다.
- Cache만으로 Page가 화면에 표시되었다고 확정할 수 없다.
- 저장된 Password가 현재도 유효하다고 가정할 수 없다.
- Profile의 Owner와 실제 Keyboard 사용자가 항상 같다고 볼 수 없다.

보고서에서는 “확인된다”, “일치한다”, “가능성이 있다”, “단독으로 확정할 수 없다”를 구분한다.

## 도구의 역할

Hindsight 같은 도구는 Chromium Artifact를 통합 Parsing할 수 있다. SQLite Browser와 Query Tool은 원본 Schema를 확인하는 데 유용하다. Browser Cache Parser, DPAPI Tool은 Version과 OS Context를 확인해야 한다.

자동 도구 결과에서 다음을 기록한다.

- Browser Version과 Profile Path
- Database Hash
- Parser Version과 Plugin
- Query 또는 Table·Column
- Timestamp Conversion 기준
- 추출한 Record의 Primary Key

## 정리

Browser Forensics는 History만 보는 작업이 아니다. Cache는 Resource, Cookie와 Storage는 Session·Application State, Download는 파일 이동, Credential은 인증정보를 보여준다. Chromium과 Firefox는 여러 SQLite Database와 Binary Cache를 사용하며 WAL·Journal을 함께 수집해야 최신·삭제 Record를 분석할 수 있다. 최종 Timeline은 File System, Windows Artifact, Network·Cloud Log와 교차 검증해야 한다.

## 연습 문제

1. Browser History Entry가 사용자의 의도적인 방문을 항상 의미하지 않는 이유를 설명한다.
2. 실행 중인 Chromium Profile을 수집할 때 Main SQLite DB 외에 WAL과 SHM을 함께 확보해야 하는 이유는 무엇인가?
3. Download Record는 있지만 Target File이 없다. 다음 조사 단계를 제시한다.

## 풀이

### 1번

Redirect, Background Tab, Embedded Resource, Extension, Sync가 History Entry를 만들 수 있다. Transition Type, Referrer, Visit Chain을 확인해야 Typed Navigation과 자동 이동을 구분할 수 있다.

### 2번

WAL Mode에서는 최근 Commit이 Main DB에 Checkpoint되지 않고 <code>-wal</code>에만 있을 수 있다. <code>-shm</code>은 WAL Index와 상태를 보조한다. Main DB만 복사하면 최신 Record가 누락되거나 비일관된 Snapshot이 될 수 있다.

### 3번

Target Path와 File Name을 기준으로 MFT·<code>$UsnJrnl</code>·Recycle Bin을 확인한다. <code>Zone.Identifier</code>, Anti-virus Quarantine, VSC, Browser Cache에서 Content와 Hash를 찾고, Prefetch·Event Log로 실행 여부를 조사한다.
