---
title: "7. Windows Execution Artifacts: Event Logs and Prefetch"
description: "Windows Event Log와 Prefetch의 생성 원리, 실행 흔적, Timestamp와 해석 한계를 정리한다."
date: "2026-02-28"
category: "디지털포렌식"
tags: ["digital-forensics", "windows", "event-log", "prefetch", "execution-artifact"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 7
featured: false
draft: false
---
Windows에는 시스템 상태와 사용자 행위를 직접 또는 간접적으로 보여주는 Artifact가 많다. Event Log는 이벤트를 구조화하여 기록하고, Prefetch는 프로그램 실행 성능을 높이기 위해 참조 리소스와 실행 정보를 저장한다. 두 Artifact는 실행 여부를 판단하는 핵심 자료이지만 생성 조건과 보존 한계를 이해해야 한다.

## Windows Artifact란

Artifact는 운영체제와 애플리케이션이 정상 동작 과정에서 남기는 흔적이다. 사용자가 직접 작성한 문서와 달리 자동 생성되는 경우가 많다.

Windows Artifact를 분석할 때는 다음 질문을 구분한다.

- 이 Artifact가 어떤 기능을 위해 생성되는가?
- 어떤 조건에서 생성·갱신되는가?
- 어떤 시각과 식별자를 포함하는가?
- 존재하면 무엇을 뒷받침하는가?
- 존재하지 않으면 무엇을 말할 수 없는가?

## Windows Event Log

Event Log는 운영체제, 서비스, 애플리케이션이 Event를 중앙화된 형식으로 기록하는 기능이다. 현대 Windows는 주로 EVTX 형식을 사용한다.

Event Record에는 Provider, Event ID, Level, TimeCreated, Computer, User SID, Process 정보와 Event-specific Data가 포함될 수 있다.

### 주요 Windows Logs

- <strong>Security</strong>: Logon, Account Management, Audit Event
- <strong>System</strong>: Boot, Shutdown, Driver, Service, Hardware 관련 Event
- <strong>Application</strong>: Application Error와 Application이 기록한 Event
- <strong>Setup</strong>: 설치 관련 Event
- <strong>Forwarded Events</strong>: 다른 시스템에서 전달된 Event

Applications and Services Logs에는 PowerShell, Task Scheduler, Windows Defender, RDP 등 구성요소별 Operational Log가 존재한다.

## Event Log Configuration

각 Log는 최대 크기와 Retention 정책을 갖는다.

- 오래된 Event를 덮어쓰기
- 가득 차면 Archive
- 수동 삭제 전까지 보존

EVTX가 존재한다고 모든 Event가 남는 것은 아니다. Audit Policy가 비활성화되었거나 Log가 순환·삭제되었을 수 있다.

## Event 분석의 기본 요소

### Provider와 Channel

같은 Event ID가 다른 Provider에서 다른 의미를 가질 수 있다. Event ID만 외우지 말고 Provider Name과 Channel을 함께 확인한다.

### Event Time

EVTX의 TimeCreated와 Event Data 내부 시각이 다를 수 있다. 시스템 시계 변경, Delayed Writing, Log Forwarding도 고려한다.

### Record ID

Channel 안에서 증가하는 Record ID는 Event 순서를 확인하는 데 도움을 준다. 그러나 Log Clear나 복원, Imported Log에서는 연속성을 주의한다.

### User와 Process Context

User SID, Logon ID, Process ID, Source Address를 이용해 관련 Event를 연결한다. Process ID는 재사용되므로 좁은 시간 범위와 함께 사용한다.

## Event Log로 확인할 수 있는 사례

- 시스템 Boot와 Shutdown
- 정상·비정상 종료
- Logon 성공·실패와 Logon Type
- Service 설치와 시작
- Scheduled Task 생성·실행
- RDP 연결과 Session
- USB·Driver 설치
- PowerShell Script Block과 Command
- Defender 탐지와 조치

단일 Event만 보고 공격을 확정하지 않고 Event Chain을 만든다. 예를 들어 RDP 조사에서는 Network Logon, Authentication, Session 생성·종료, Registry의 RDP 설정을 함께 본다.

## Event Log 삭제

Log Clear Event가 남을 수 있지만, 공격자가 EVTX 파일 자체를 삭제·교체하거나 시스템이 Offline이면 다른 양상이 나타난다. 다음을 확인한다.

- Record ID와 Timestamp의 비정상적인 간격
- Log Clear 관련 Event
- VSC와 Backup의 과거 EVTX
- File System Journal의 EVTX 변경 흔적
- Forwarded Log와 SIEM 사본

“관련 Event가 없다”는 사실은 “행위가 없었다”와 같지 않다.

## Windows Virtual Memory와 Prefetch

프로그램 실행 시 Executable, DLL, Resource가 Disk에서 RAM으로 로드된다. Windows는 다음 실행을 빠르게 하기 위해 접근 패턴을 Prefetch 파일에 기록할 수 있다.

Prefetch는 보안 Audit 목적으로 설계된 것이 아니라 <strong>성능 최적화 Artifact</strong>이다. 그러나 실행 파일 이름, 실행 시각, 참조 파일을 포함하여 포렌식에 유용하다.

## Prefetch File

Application Prefetch File은 보통 Windows Prefetch Directory에 <code>EXECUTABLE-HASH.pf</code> 형태로 저장된다.

- Executable Name은 일반적으로 Uppercase로 보인다.
- Hash는 실행 경로와 Command Line 요소 등에 기반할 수 있으며 Windows 버전에 따라 계산 방식이 다르다.
- 같은 이름의 실행 파일도 경로가 다르면 다른 Prefetch가 생길 수 있다.

Boot Prefetching과 Application Prefetching은 목적과 데이터 구조가 다르다.

## Prefetch에 포함될 수 있는 정보

- Executable 이름
- Run Count
- 최근 실행 Timestamp들
- Volume Serial Number와 Volume Creation Time
- 참조된 File·Directory Name
- Loaded DLL과 Resource Path
- File Metrics와 Trace Chain

Windows 8 이후 형식에서는 여러 개의 최근 실행 Timestamp가 포함되는 경우가 있다. Parser가 어떤 버전을 지원하는지 확인한다.

## Prefetch Timestamp 두 종류

### File System Timestamp

<code>.pf</code> 파일 자체의 Created·Modified·Accessed Time이다. Prefetch가 처음 생성되거나 갱신된 시각과 관련되지만, 복사·복원·삭제 후 재생성의 영향을 받는다.

### Internal Execution Timestamp

Prefetch 구조 내부에 기록된 최근 실행 시각이다. 프로그램 실행을 판단할 때 더 직접적이지만, 형식 버전과 Parser를 검증해야 한다.

두 Timestamp가 다르다고 즉시 조작으로 판단하지 않는다.

## Prefetch로 실행을 판단하는 방법

1. Prefetch 파일 이름과 내부 Executable Name을 확인한다.
2. Internal Last Run Time과 Run Count를 추출한다.
3. Volume 정보와 참조 경로로 실제 실행 파일 위치를 추정한다.
4. Event Log, UserAssist, Amcache, Shimcache, LNK와 시각을 비교한다.
5. Prefetch 파일의 생성·수정 시각과 삭제·재생성 가능성을 확인한다.

참조 파일 목록은 프로그램이 실제로 열었다기보다 Prefetch Trace에 포함된 Resource일 수 있다. 문서 접근 증거로 사용할 때 LNK, Jump List, MRU를 함께 본다.

## Prefetch가 없는 경우

Prefetch가 없다고 프로그램이 실행되지 않았다고 결론 내릴 수 없다.

- Prefetch 기능이 비활성화됨
- Server Edition이나 정책 차이
- Prefetch Directory 정리
- 실행 횟수와 저장 정책
- 프로그램 실행 방식 차이
- Disk Cleanup·Anti-forensics
- 조사 전 OS 재설치

Artifact의 부재는 생성 조건을 확인한 뒤 제한적으로 해석한다.

## Superfetch와 SysMain

SysMain은 사용 패턴에 따라 자주 사용하는 Application 데이터를 미리 Memory에 로드하여 성능을 높이는 서비스이다. Prefetch와 관련 있지만 동일한 Artifact가 아니다. 포렌식 글에서는 Prefetch File의 실행 정보와 SysMain Service의 기능을 구분한다.

## 실행 Timeline 구성 예시

어떤 Tool이 10:15에 실행되었다는 가설을 검증한다고 하자.

- 10:14:58 — Browser Download 완료
- 10:15:02 — <code>Zone.Identifier</code> 생성
- 10:15:10 — Prefetch Internal Last Run
- 10:15:11 — Security 또는 Sysmon Process Creation
- 10:15:12 — Child Process와 Network Connection
- 10:16 — LNK·Jump List 또는 Output File 생성

여러 Artifact가 같은 흐름을 지지하면 결론의 신뢰도가 높아진다.

## 도구의 역할

- Windows Event Viewer: 기본 Event 탐색
- FullEventLogView 등: 여러 EVTX 통합 확인
- PECmd, WinPrefetchView: Prefetch Parsing
- KAPE: EVTX와 Prefetch 수집·처리

도구의 표시 Time Zone과 Filter 설정을 기록하고, 중요한 Event XML과 Prefetch 원본을 보존한다.

## 정리

Event Log는 Provider가 구조화된 Event를 남기는 기록이고, Prefetch는 실행 성능 향상을 위한 참조 패턴이다. Event ID는 Provider와 함께 해석해야 하며, Prefetch의 File System Time과 Internal Execution Time을 구분해야 한다. 두 Artifact 모두 삭제·순환·비활성화될 수 있으므로 부재만으로 행위가 없었다고 단정할 수 없다.

## 연습 문제

1. Event ID만으로 Event 의미를 판단하면 안 되는 이유를 설명한다.
2. Prefetch의 File Modified Time과 Internal Last Run Time이 다른 이유를 두 가지 제시한다.
3. Prefetch 하나만으로 사용자가 특정 문서를 열었다고 확정하기 어려운 이유는 무엇인가?

## 풀이

### 1번

Event ID는 Provider의 Namespace 안에서 정의된다. 서로 다른 Provider가 같은 숫자를 다른 의미로 사용할 수 있으므로 Provider, Channel, Version, Event Data를 함께 확인해야 한다.

### 2번

Prefetch 파일은 여러 실행을 반영하여 갱신되고, 복사·복원·삭제 후 재생성될 수 있다. 내부 구조에는 여러 최근 실행 시각이 있지만 파일의 Modified Time은 마지막 구조 갱신 시각을 나타낼 수 있다.

### 3번

Prefetch의 참조 파일 목록은 실행 중 로드된 Resource를 나타내며 사용자가 직접 열었다는 의미와 일치하지 않을 수 있다. LNK, Jump List, MRU, Application Log와 함께 확인해야 한다.
