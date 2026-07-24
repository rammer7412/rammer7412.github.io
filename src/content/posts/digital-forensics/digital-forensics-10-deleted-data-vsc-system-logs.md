---
title: "10. Deleted Data, Volume Shadow Copy, and System Logs"
description: "Recycle Bin의 Metadata·Content 파일 구조, Volume Shadow Copy와 설치·장치·PowerShell 로그를 정리한다."
date: "2026-03-05"
category: "디지털포렌식"
tags: ["digital-forensics", "recycle-bin", "volume-shadow-copy", "windows-logs", "deleted-data"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 10
featured: false
draft: false
---
Windows에서 “삭제”는 하나의 동작이 아니다. Recycle Bin으로 이동할 수도 있고, Shift+Delete나 Application API를 통해 바로 해제될 수도 있다. 또한 Volume Shadow Copy와 설치 로그에는 현재 시스템에서 사라진 과거 상태가 남아 있을 수 있다.

## 일반 삭제와 영구 삭제

- <strong>일반 삭제</strong>: Explorer에서 Recycle Bin으로 이동한다.
- <strong>영구 삭제</strong>: Shift+Delete, Command, Application 설정, 너무 큰 파일, Network Share 등으로 Recycle Bin을 거치지 않을 수 있다.

어느 경우든 File System 수준에서는 Metadata와 Allocation 상태가 바뀌며, 실제 Byte는 덮어쓰기·TRIM 전까지 남을 수 있다.

## Recycle Bin의 구조

Windows Vista 이후 각 Volume Root에 일반적으로 <code>$RECYCLE.BIN</code> Directory가 존재하며, 그 아래 User SID별 Directory가 만들어진다.

```text
C:\$RECYCLE.BIN\S-1-5-21-...\
D:\$RECYCLE.BIN\S-1-5-21-...\
```

SID Directory를 통해 어느 계정의 Recycle Bin Entry인지 연결할 수 있다. 동일 사용자가 여러 Volume에서 삭제하면 각 Volume에 별도 구조가 생긴다.

## <span class="tex2jax_ignore">$I</span> 파일과 <span class="tex2jax_ignore">$R</span> 파일

삭제 항목은 보통 같은 식별 문자열을 가진 두 파일로 관리된다.

### <span class="tex2jax_ignore">$I</span> File

Metadata를 저장한다.

- 원본 File Size
- 삭제 시각
- 원본 전체 경로
- 구조 Version

삭제 시각은 FILETIME 계열로 저장될 수 있다. Path는 Unicode로 저장되며 Version에 따라 길이 Field가 다르다.

### <span class="tex2jax_ignore">$R</span> File

실제 삭제된 File 또는 Directory Content를 담는다. Directory가 삭제되면 <code>$R</code> Directory 안에 원래 하위 구조가 남을 수 있다.

```text
$IABC123.ext  → Metadata
$RABC123.ext  → Content
```

두 파일을 식별자와 SID Directory로 연결한다.

## Recycle Bin 분석 질문

- 어떤 User SID가 삭제했는가?
- 원본 경로는 어디였는가?
- 삭제 시각과 File Size는 무엇인가?
- 실제 Content가 남아 있는가?
- Restore 또는 Re-delete가 있었는가?

<code>$I</code>가 남고 <code>$R</code>이 없거나 반대인 경우가 있다. File System Journal과 MFT에서 삭제·이동 흔적을 보완한다.

## Recycle Bin을 거치지 않는 경우

- Shift+Delete
- Command Line 삭제
- Network Share의 파일
- Removable Media 설정
- Recycle Bin 용량을 초과하는 큰 파일
- Application이 직접 Delete API 사용
- Recycle Bin 비활성화

Recycle Bin에 Entry가 없다고 삭제가 없었다고 판단할 수 없다. <code>$UsnJrnl</code>, MFT, Event Log, Application Log를 확인한다.

## Volume Shadow Copy

Volume Shadow Copy Service(VSS)는 사용 중인 파일과 Volume의 Point-in-Time Snapshot을 지원한다. System Restore, Backup, 이전 버전 기능에서 사용될 수 있다.

VSC는 전체 Volume을 매번 완전 복사하기보다 변경된 Block을 관리하여 Snapshot 시점의 View를 재구성한다.

### Catalog와 Store

- <strong>Catalog/Metadata</strong>: Snapshot Set, Volume, 시각과 관계 정보
- <strong>Store/Diff Area</strong>: 변경 전 Block 또는 Snapshot 재구성에 필요한 데이터

구체 내부 구조는 Windows Version과 VSS Provider에 따라 다르다.

## VSC의 포렌식 가치

- 현재 삭제된 파일의 과거 사본
- 과거 Registry Hive
- 이전 EVTX와 Prefetch
- Malware 감염 전후 상태 비교
- 문서의 이전 Version
- Timeline의 Missing Interval 보완

현재 File System과 각 Snapshot을 비교하면 파일 생성·변경·삭제 시점을 구간으로 좁힐 수 있다.

## VSC의 한계

- 모든 시스템에 활성화되어 있지 않다.
- Snapshot 생성 시점 사이의 세부 변경은 보이지 않을 수 있다.
- 저장 공간 부족으로 오래된 Snapshot이 삭제된다.
- 공격자나 관리자가 VSC를 삭제할 수 있다.
- Snapshot 내부 Timestamp도 File System 의미를 따른다.

VSC에서 파일을 찾았다고 그 Snapshot 시점에 사용자가 열었다는 뜻은 아니다. 존재 상태를 보여주는 것이다.

## OS Installation Logs

Windows Setup 과정에는 여러 Log가 남는다.

- <code>setupact.log</code>: 설치·Upgrade 단계의 일반 활동
- <code>setuperr.log</code>: 오류 중심 기록

OS 설치 시각, Upgrade, 실패 원인을 확인할 수 있다. Registry InstallDate와 비교하여 Feature Update로 인한 값 변화를 구분한다.

## Device와 Driver Installation Logs

SetupAPI Log는 Device와 Driver 설치 과정을 기록한다. USB 조사에서 Registry의 장치 Entry와 함께 다음을 확인할 수 있다.

- 장치 인식 시각
- Hardware ID와 Compatible ID
- 선택된 Driver
- 설치 성공·실패
- Device Instance Path

Log Rotation과 OS Upgrade로 과거 기록이 사라질 수 있다.

## Application Execution Logs

Windows에는 Application Compatibility, Amcache, SRUM, Defender, Task Scheduler 등 실행과 사용을 보완하는 여러 Artifact가 있다. 각 Artifact는 목적과 보존 기간이 다르다.

- Application Compatibility Artifact: 실행 가능성·호환성 평가 흔적
- Amcache: File·Application Inventory와 실행 관련 Metadata
- SRUM: Application Resource와 Network Usage 집계
- Defender Log: Detection과 Action

이 글에서는 개별 Format 전체를 다루기보다, Prefetch와 Event Log의 누락을 보완하는 출처로 이해한다.

## PowerShell Console History

PowerShell PSReadLine은 사용자가 입력한 명령을 Console History File에 저장할 수 있다.

확인 가능한 항목:

- 입력 Command와 순서
- Download, Encoding, Execution 관련 명령
- Script Path와 Argument
- Credential 또는 Token의 노출 가능성

주의점:

- 실제 실행 성공 여부는 별도 검증이 필요하다.
- History 저장이 비활성화되거나 삭제될 수 있다.
- 여러 PowerShell Host와 User Profile마다 경로가 다를 수 있다.
- 민감정보가 포함될 수 있으므로 취급을 주의한다.

PowerShell Operational Log, Script Block Logging, Prefetch, Network Artifact와 결합한다.

## 삭제 사건의 Timeline 구성

예를 들어 문서가 삭제되었다는 가설을 조사한다.

1. Browser Download 또는 File Creation 시각
2. LNK·Jump List로 사용 흔적
3. <code>$UsnJrnl</code> Rename/Delete Reason
4. Recycle Bin <code>$I</code> 삭제 시각과 원본 경로
5. <code>$R</code> Content와 Hash
6. Recycle Bin 비우기 시점의 File System 변화
7. VSC에 남은 이전 사본
8. PowerShell·Command History의 삭제 명령

각 Artifact의 시각 정확도와 Time Zone을 명시한다.

## Anti-Forensics 대응

공격자는 다음 명령과 기능으로 흔적을 줄일 수 있다.

- Recycle Bin 비우기
- VSC 삭제
- Event Log Clear
- Secure Delete
- PowerShell History 제거
- Timestamp 변경

대응은 하나의 Artifact 복구에만 의존하지 않는다. VSC 삭제 Event, <code>$UsnJrnl</code>, SIEM·Backup, Cloud Audit Log를 함께 확인한다.

## 도구의 역할

- KAPE: Recycle Bin, VSC, Windows Log 수집
- RBCmd: Recycle Bin Parsing
- VSC Processing Tool: Snapshot Mount·Extract
- Timeline Tool: 여러 Source 정규화

Snapshot을 Mount할 때 Read-only 상태와 Mount Time의 File System 영향을 기록한다.

## 정리

Recycle Bin은 SID별 Directory 아래 <code>$I</code> Metadata와 <code>$R</code> Content를 연결한다. 그러나 모든 삭제가 Recycle Bin을 거치는 것은 아니다. VSC는 과거 Volume 상태를 제공하며 현재 삭제된 파일과 Registry를 복원하는 데 유용하지만 생성 간격과 보존 한계가 있다. Setup, Device, Application, PowerShell Log는 삭제 사건의 맥락을 보완한다.

## 연습 문제

1. <code>$I</code> 파일은 남아 있지만 <code>$R</code> 파일이 없다. 확인해야 할 가능성을 설명한다.
2. VSC에서 문서가 발견되었다는 사실로 무엇을 말할 수 있고, 무엇은 말할 수 없는가?
3. PowerShell Console History의 명령을 실제 실행 증거로 보강하려면 어떤 Artifact가 필요한가?

## 풀이

### 1번

Recycle Bin이 비워지거나 <code>$R</code> Content만 덮어써졌을 수 있다. <code>$I</code>와 동일 식별자의 MFT Record, <code>$UsnJrnl</code>, Unallocated Data, VSC를 확인한다.

### 2번

해당 Snapshot 시점에 문서가 Volume View에 존재했다는 것은 말할 수 있다. 누가 열었는지, Snapshot 사이 어느 정확한 시점에 생성되었는지, 사용자가 내용을 보았는지는 추가 Artifact가 필요하다.

### 3번

PowerShell Operational Event, Script Block Log, Process Creation Event, Prefetch, Network Connection, 생성된 Output File과 File System Journal을 결합한다.
