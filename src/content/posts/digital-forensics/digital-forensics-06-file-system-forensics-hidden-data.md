---
title: "6. File System Forensics와 Hidden Data"
description: "MACB·MACE Timestamp, NTFS $LogFile·$UsnJrnl, Slack과 ADS를 이용한 파일시스템 분석을 정리한다."
date: "2026-02-27"
category: "디지털포렌식"
tags: ["digital-forensics", "timestamp-analysis", "usnjrnl", "ntfs-ads", "hidden-data"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 6
featured: false
draft: false
---
File System Forensics는 현재 보이는 파일 목록만 확인하는 작업이 아니다. Timestamp, Transaction Log, Change Journal, Allocation 상태, Alternate Data Stream을 함께 분석하여 파일이 언제 생성·변경·이동·삭제되었는지를 재구성한다.

## Timestamp Analysis

파일에는 여러 종류의 시각이 존재한다. 흔히 MACB 또는 MACE라는 약어를 사용하지만, 문자 의미는 도구와 File System에 따라 다를 수 있다.

### MACB의 한 예

- <strong>M</strong>: Modified — 파일 내용이 마지막으로 변경된 시각
- <strong>A</strong>: Accessed — 파일 내용에 마지막으로 접근한 시각
- <strong>C</strong>: Changed — Metadata가 마지막으로 변경된 시각
- <strong>B</strong>: Birth/Created — 파일이 생성된 시각

### MACE의 한 예

- <strong>M</strong>: Modified
- <strong>A</strong>: Accessed
- <strong>C</strong>: Created
- <strong>E</strong>: Entry Modified

약어만 암기하지 말고 도구가 어떤 Metadata Field를 표시하는지 확인해야 한다.

## NTFS의 Timestamp

NTFS MFT Record에는 대표적으로 두 Attribute에 Timestamp가 존재한다.

- <code>$STANDARD_INFORMATION</code>
- <code>$FILE_NAME</code>

두 Attribute의 Timestamp 갱신 규칙이 다를 수 있다. 일반적인 사용자 API로 Timestamp를 변경하면 <code>$STANDARD_INFORMATION</code>만 바뀌는 경우가 있어, 두 값을 비교하면 Timestomping 의심점을 찾을 수 있다. 그러나 정상적인 복사·이동·도구 동작도 차이를 만들 수 있으므로 단독 결론으로 사용하지 않는다.

## Created Time의 해석

“파일의 Created Time”은 콘텐츠가 처음 만들어진 시각과 같지 않을 수 있다.

- 같은 Volume 안의 이동은 Created Time을 유지할 수 있다.
- 다른 Volume으로 복사하면 복사 대상에서 새 Created Time이 생긴다.
- 압축 해제 도구가 원본 Timestamp를 복원할 수 있다.
- Cloud Sync가 서버 Timestamp를 적용할 수 있다.
- Forensic Copy Tool이 Timestamp를 보존할 수 있다.

따라서 Created Time은 <strong>현재 File System 객체의 생성 시각</strong>으로 해석하고, 문서 내용의 최초 작성 시각은 내부 Metadata와 Version History로 보완한다.

## Access Time의 한계

성능을 위해 Access Time 갱신을 비활성화하거나 지연하는 OS가 있다. Anti-virus, Indexer, Backup Tool이 파일을 읽어도 Access Time이 바뀔 수 있다. Access Time 하나로 사용자가 파일을 열었다고 단정해서는 안 된다.

## Timeline Analysis

Timeline은 여러 Artifact를 공통 Time Zone과 형식으로 정규화하여 순서대로 배열한 것이다.

좋은 Timeline에는 다음이 포함된다.

- 원본 Timestamp 값
- 변환된 표시 시각과 Time Zone
- Artifact Source와 Field Name
- 파일 경로, User SID, Process 등 Context
- 해석과 Confidence

모든 Timestamp를 한 열로 섞으면 각각의 의미가 사라진다. “Modified”, “Execution”, “Logon”, “Download Start”처럼 Event Type을 명확히 구분한다.

## NTFS $LogFile

<code>$LogFile</code>은 NTFS의 Transaction Log이다. 시스템 장애가 발생했을 때 File System Metadata를 일관된 상태로 복구하기 위해 Redo/Undo 정보를 기록한다.

포렌식에서는 최근 File System Operation의 흔적을 찾는 데 사용할 수 있다.

- File과 Directory 생성·삭제
- Rename과 Move
- MFT Record와 Index 변화
- Allocation Metadata 변화

<code>$LogFile</code>은 순환 구조이며 오래된 Record가 덮어써진다. 사용자 행위 전체를 영구 보존하는 Audit Log가 아니다. Parser가 Transaction을 어떤 File과 연결하는지 검증해야 한다.

## NTFS $UsnJrnl

<code>$UsnJrnl</code>은 Volume의 File·Directory 변경을 추적하는 Change Journal이다. Backup, Indexing, Anti-virus가 변경된 객체를 빠르게 찾는 데 사용한다.

주요 정보는 다음과 같다.

- USN(Update Sequence Number)
- 변경 시각
- Reason Flag
- MFT File Reference Number
- Parent Reference
- 파일·폴더 이름

내부 Stream으로 <code>$J</code>와 <code>$Max</code> 등이 있다. Journal도 크기 제한에 따라 오래된 Record가 제거된다.

### Reason Flag 해석

한 File Operation이 여러 Reason Record를 만들 수 있다. 예를 들어 파일 생성 후 내용 작성, Close가 각각 기록될 수 있다. 하나의 <code>FILE_DELETE</code> Record만 보고 전체 삭제 경로를 재구성하지 않고, 같은 File Reference와 Parent, 인접 USN을 묶어 본다.

## $LogFile과 $UsnJrnl 비교

| 항목 | <code>$LogFile</code> | <code>$UsnJrnl</code> |
|---|---|---|
| 목적 | NTFS Transaction 복구 | 변경된 객체 추적 |
| 수준 | 낮은 수준 Metadata Operation | File·Directory 변경 Event |
| 보존 | 순환·제한적 | 설정된 Journal 크기 내 순환 |
| 활용 | 삭제·Rename·Record 변화 | Timeline, Malware Activity 추적 |

두 Artifact를 MFT와 함께 분석하면 삭제된 파일명, Parent, 변경 순서를 더 잘 복원할 수 있다.

## Hidden Data의 유형

데이터를 숨기는 방법은 여러 가지다.

1. Hidden/System Attribute 설정
2. 확장자 변경 또는 Double Extension
3. File Signature와 확장자 불일치
4. Slack Space와 Unallocated Space 사용
5. NTFS Alternate Data Stream
6. Steganography나 암호화 Container

“숨김 파일 보기”만으로 모든 Hidden Data를 찾을 수 없다.

## NTFS Alternate Data Stream

NTFS File은 여러 <code>$DATA</code> Attribute를 가질 수 있다. 이름 없는 기본 Stream 외에 이름 있는 Stream을 추가할 수 있는데, 이를 ADS(Alternate Data Stream)라고 한다.

```text
report.txt                기본 Stream
report.txt:secret.bin     이름 있는 ADS
```

Explorer에서 기본 파일 크기만 보면 ADS 크기가 보이지 않을 수 있다. ADS는 정상 기능이지만 실행 파일이나 데이터를 숨기는 데 악용될 수 있다.

### ADS 분석

- MFT Record의 모든 <code>$DATA</code> Attribute를 열거한다.
- Stream Name, Resident 여부, Data Run, 크기를 기록한다.
- Stream 내용을 별도로 추출하고 Hash를 계산한다.
- Host File과 Stream의 Timestamp·경로 관계를 확인한다.

ADS가 존재한다는 사실만으로 악성이라고 판단하지 않는다.

## Zone.Identifier

Web Browser와 Attachment Manager는 인터넷 등 외부 Zone에서 받은 파일에 <code>Zone.Identifier</code> ADS를 추가할 수 있다. 이를 Mark of the Web이라고 부른다.

예시 형태는 다음과 같다.

```ini
[ZoneTransfer]
ZoneId=3
ReferrerUrl=...
HostUrl=...
```

일반적인 ZoneId 해석은 다음과 같다.

| 값 | 의미 |
|---:|---|
| 0 | My Computer |
| 1 | Local Intranet |
| 2 | Trusted Sites |
| 3 | Internet |
| 4 | Restricted Sites |

브라우저·Windows 버전과 다운로드 방법에 따라 필드가 다르거나 ADS가 생성되지 않을 수 있다. 파일을 FAT USB로 복사하거나 ZIP 도구를 거치면서 ADS가 사라질 수 있다.

## Slack Space와 숨긴 데이터

공격자는 File Slack에 데이터를 직접 쓸 수 있다. 그러나 Slack에 발견된 Byte가 의도적으로 숨긴 것인지, 과거 파일 잔존물인지 구분해야 한다.

- 반복적이고 구조화된 Payload가 있는가?
- 정상 File End 이후에 완전한 Header와 Content가 있는가?
- 같은 Tool에서 생성된 패턴이 여러 파일에 반복되는가?
- Timeline과 다른 Artifact가 의도를 뒷받침하는가?

## Extension 변경과 Signature 검사

<code>document.pdf.exe</code>처럼 Double Extension을 사용하거나 ZIP을 JPG로 이름 바꿀 수 있다. 모든 파일에 대해 무조건 전체 Parser를 적용하기보다 다음 우선순위를 사용할 수 있다.

1. 확장자와 MIME·Signature 불일치 탐지
2. Executable Script와 Archive 우선 분석
3. 내부 Embedded Object와 Macro 확인
4. Hash Reputation과 YARA 등으로 보조

## 도구와 원시 검증

Autopsy와 같은 Suite는 Timeline, Deleted File, File Type을 통합해 보여준다. KAPE는 <code>$MFT</code>, <code>$LogFile</code>, <code>$UsnJrnl</code> 수집에 유용하다. AlternateStreamView 등은 ADS를 열거한다.

그러나 중요한 항목은 MFT Attribute, USN Reason, 원본 Offset으로 돌아가 확인해야 한다. Parser 오류와 OS Version 차이가 있기 때문이다.

## 정리

File System Timestamp는 Field마다 의미와 갱신 규칙이 다르다. NTFS <code>$LogFile</code>은 Transaction 복구를, <code>$UsnJrnl</code>은 변경 추적을 목적으로 하며 둘 다 순환 구조이다. Hidden Data는 Attribute, Extension, Slack, ADS 등 다양한 방식으로 존재한다. <code>Zone.Identifier</code>는 다운로드 출처를 보완하지만 생성되지 않거나 사라질 수 있으므로 다른 Artifact와 교차 검증해야 한다.

## 연습 문제

1. Created Time이 문서의 최초 작성 시각과 다를 수 있는 사례 두 가지를 제시한다.
2. <code>$LogFile</code>과 <code>$UsnJrnl</code>의 목적 차이를 설명한다.
3. <code>sample.docx:payload.exe</code> ADS를 발견했다. 확인할 사항을 순서대로 정리한다.

## 풀이

### 1번

다른 Volume으로 복사할 때 새 File System 객체가 생성되어 Created Time이 복사 시각이 될 수 있다. 반대로 압축 해제나 동기화 도구가 원본 Created Time을 복원할 수도 있다.

### 2번

<code>$LogFile</code>은 NTFS Metadata Transaction을 Redo/Undo하여 장애 후 일관성을 회복한다. <code>$UsnJrnl</code>은 어떤 파일과 폴더가 변경되었는지를 응용 프로그램에 알려주는 Change Journal이다.

### 3번

원본 Image와 MFT Record를 보존하고 Stream Name·크기·Resident 여부를 확인한다. ADS 내용을 추출하여 Hash와 Signature를 계산하고, 실행 파일인지 분석한다. Host File과 ADS의 Timestamp, Prefetch·Event Log·UserAssist 등 실행 흔적을 교차 확인한다.
