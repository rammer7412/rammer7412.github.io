---
title: "5. FAT, NTFS, and Deleted File Recovery"
description: "FAT와 NTFS의 파일 생성·삭제 구조를 비교하고 Metadata Recovery와 Data Carving의 원리를 정리한다."
date: "2026-02-26"
category: "디지털포렌식"
tags: ["digital-forensics", "fat", "ntfs", "deleted-file", "data-carving"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 5
featured: false
draft: false
---
파일을 삭제하면 데이터 Byte가 즉시 모두 지워지는 경우보다, 파일을 가리키는 Metadata와 할당 상태가 먼저 변경되는 경우가 많다. 복구 가능성은 File System이 삭제를 어떻게 표현하는지, 삭제 후 공간이 덮어써졌는지에 달려 있다.

## FAT File System의 구조

FAT(File Allocation Table) 계열은 구조가 단순하고 호환성이 높아 USB와 SD Card에서 널리 사용된다.

```text
VBR | Reserved Area | FAT Area | Data Area
```

- <strong>VBR</strong>: BPB와 파일시스템 Parameter
- <strong>FAT Area</strong>: Cluster Chain의 다음 Cluster 번호와 상태
- <strong>Data Area</strong>: Directory와 File Data

FAT32에서는 Root Directory도 일반적인 Cluster Chain으로 관리된다.

## Directory Entry

Directory Entry에는 파일명, Attribute, 생성·수정·접근 시각, 시작 Cluster, 파일 크기 등이 저장된다. Long File Name은 여러 LFN Entry와 짧은 8.3 이름 Entry를 조합해 표현한다.

포렌식 분석에서는 다음을 함께 확인한다.

- Short Name과 Long Name의 일관성
- 시작 Cluster와 File Size
- Timestamp와 Time Zone 해석
- Attribute와 삭제 Marker
- Entry가 속한 Directory Cluster

## FAT에서 파일이 생성되는 과정

예를 들어 파일이 세 Cluster를 사용한다고 하자.

1. Directory Entry에 파일명, 시작 Cluster, 크기를 기록한다.
2. FAT Table에 Cluster Chain을 기록한다.
3. Data Area의 해당 Cluster에 파일 내용을 기록한다.

```text
Directory Entry → Start Cluster 7
FAT[7] = 8
FAT[8] = 12
FAT[12] = End-of-Chain
```

파일의 논리 순서와 물리 Cluster 번호가 연속일 필요는 없다.

## FAT에서 파일이 삭제되는 과정

일반적인 삭제에서는 다음 변화가 발생할 수 있다.

1. Short Directory Entry의 첫 Byte를 <code>0xE5</code>로 바꾼다.
2. FAT Table의 Cluster Chain Entry를 Free 상태로 바꾼다.
3. Data Cluster 내용은 즉시 지우지 않는다.

따라서 Directory Entry와 Data Area가 덮어써지지 않았다면 복구 가능성이 있다. 다만 FAT Chain이 초기화되면 Fragmented File의 Cluster 순서를 알기 어렵다. 파일이 Contiguous였다는 가정으로 복구하면 잘못된 데이터를 결합할 수 있다.

### LFN 복구의 주의점

LFN Entry와 Short Entry의 삭제 상태, Checksum, 순서 번호를 검사한다. Short Entry가 덮어써지거나 LFN Entry 일부가 사라지면 원래 긴 이름을 완전히 복구하지 못할 수 있다.

## NTFS의 구조

NTFS는 Windows의 주요 File System이며, 파일과 Metadata를 Record 중심으로 관리한다.

```text
VBR | $MFT and Metadata Files | Data Area
```

NTFS는 시스템 구조도 파일처럼 취급한다.

- <code>$Boot</code>: VBR과 NTFS Parameter
- <code>$MFT</code>: Master File Table
- <code>$Bitmap</code>: Cluster 할당 상태
- <code>$LogFile</code>: File System Transaction Log
- <code>$UsnJrnl</code>: Change Journal

## MFT Record

각 파일과 디렉터리는 일반적으로 MFT Record를 갖는다. Record에는 여러 Attribute가 저장된다.

- <code>$STANDARD_INFORMATION</code>: Timestamp, Flag 등
- <code>$FILE_NAME</code>: Parent Reference, Name, 별도 Timestamp
- <code>$DATA</code>: 파일 내용 또는 Data Run
- <code>$INDEX_ROOT</code>, <code>$INDEX_ALLOCATION</code>: 디렉터리 Index

작은 파일은 데이터가 MFT Record 안에 Resident로 저장될 수 있다. 큰 파일은 Non-resident Attribute의 Data Run이 Cluster 위치를 가리킨다.

## NTFS에서 파일이 생성되는 과정

1. 사용 가능한 MFT Record를 할당한다.
2. 파일명, Parent, Timestamp와 Attribute를 기록한다.
3. 필요한 Cluster를 <code>$Bitmap</code>에서 할당 상태로 바꾼다.
4. Non-resident Data Run을 기록한다.
5. 상위 Directory Index에 Entry를 추가한다.
6. 관련 Transaction이 <code>$LogFile</code>에 남을 수 있다.

하나의 파일 생성이 여러 Metadata 구조를 변경하므로 분석 시 한 Record만 보지 않는다.

## NTFS에서 파일이 삭제되는 과정

일반적인 삭제에서는 다음과 같은 변화가 일어난다.

1. MFT Record의 In-use Flag가 해제된다.
2. 파일이 사용하던 Cluster가 <code>$Bitmap</code>에서 Free로 표시된다.
3. Directory Index Entry가 제거되거나 재구성된다.
4. 실제 MFT Record와 Data Cluster는 재사용 전까지 남을 수 있다.

Resident Data는 MFT Record가 재사용되지 않았다면 비교적 온전히 남을 수 있다. Non-resident File은 Data Run 정보와 Cluster 내용이 모두 남아 있어야 정확히 복구하기 쉽다.

## FAT와 NTFS 삭제 비교

| 항목 | FAT | NTFS |
|---|---|---|
| 파일 Metadata | Directory Entry | MFT Record와 Attribute |
| 삭제 표시 | 첫 Byte <code>0xE5</code> | MFT In-use Flag 해제 |
| 공간 해제 | FAT Chain Free | <code>$Bitmap</code> Free |
| Fragment 정보 | Chain이 지워지면 손실 가능 | Data Run이 남으면 복구 가능 |
| 작은 파일 | 일반 Data Cluster | Resident Data 가능 |

두 File System 모두 “삭제 = 즉시 Byte Zeroing”은 아니다. 그러나 SSD의 TRIM과 Garbage Collection, Secure Deletion, 재사용이 개입하면 빠르게 복구가 어려워질 수 있다.

## File System Metadata-Based Recovery

Metadata Recovery는 Directory Entry, MFT Record, Inode 같은 파일시스템 정보를 사용한다.

장점:

- 원래 파일명과 경로를 얻을 수 있다.
- 크기와 Timestamp를 복구할 수 있다.
- Fragmented File의 위치 정보를 얻을 수 있다.

한계:

- Metadata가 재사용·손상되면 실패한다.
- Metadata가 가리키는 Cluster가 다른 데이터로 덮어써졌을 수 있다.
- 일부 File System에서는 삭제 시 위치 정보가 제거된다.

복구 도구가 파일을 생성했다고 해서 내용이 정확하다고 가정하지 않는다. Header, 내부 구조, Hash, 의미 있는 내용의 연속성을 확인한다.

## Data Carving

Data Carving은 File System Metadata 없이 Raw Data에서 File Signature와 구조를 찾아 파일을 재구성한다.

### Header-Footer Carving

알려진 Header에서 시작하여 Footer까지 추출한다. JPEG처럼 명확한 Marker를 가진 형식에 적용할 수 있다.

### Structure-Aware Carving

파일 내부의 Length, Chunk, Object, Checksum을 해석한다. 단순 Footer 검색보다 정확하지만 파일 형식별 Parser가 필요하다.

### Carving의 한계

- Fragmented File을 연속 영역으로 잘못 추출할 수 있다.
- 동일 Signature가 파일 내용 안에도 나타날 수 있다.
- 파일명, 경로, 원래 Timestamp를 잃는다.
- 압축·암호화된 데이터는 Signature가 약할 수 있다.
- False Positive가 발생한다.

Carved File은 Metadata Recovery 결과와 별도로 관리하고, 원본 Image Offset을 기록한다.

## 삭제 데이터 복구 절차

1. 원본을 Write Blocker로 보호하고 Image를 생성한다.
2. Partition과 File System을 식별한다.
3. 삭제된 Metadata Record를 탐색한다.
4. Allocation 상태와 Data Run·Cluster Chain을 확인한다.
5. 복구 후보를 별도 저장소에 추출한다.
6. File Signature와 내부 구조를 검증한다.
7. Carving으로 Metadata 없는 파일을 보완한다.
8. 복구된 파일의 Hash와 원본 Offset을 기록한다.

## SSD와 TRIM

SSD에서 파일이 삭제되면 OS가 TRIM Command로 사용하지 않는 Logical Block을 Controller에 알릴 수 있다. Controller가 Garbage Collection 과정에서 실제 Flash Page를 지우면 기존 데이터가 읽히지 않을 수 있다.

TRIM 지원 여부, OS 설정, 연결 Interface, 장치 전원 상태에 따라 결과가 다르다. “SSD이므로 무조건 복구 불가” 또는 “삭제 직후이므로 반드시 복구 가능”이라고 단정하지 않는다.

## 복구와 증명의 차이

복구한 파일 내용이 보인다는 사실은 중요하지만, 다음 질문은 별도로 검토해야 한다.

- 원래 어떤 경로에 있었는가?
- 어느 사용자가 생성·삭제했는가?
- 삭제 시각은 언제인가?
- 복구 내용이 전체 파일인가, 일부 Fragment인가?
- 다른 파일의 Slack나 Cache에서 나온 사본인가?

Recycle Bin, Event Log, Registry, LNK, Jump List, Browser Download를 결합하면 삭제 행위의 맥락을 보완할 수 있다.

## 정리

FAT는 Directory Entry와 FAT Chain으로 파일을 관리하며, 삭제 시 Entry 첫 Byte와 Cluster Chain 상태가 바뀐다. NTFS는 MFT Record와 Attribute, <code>$Bitmap</code>으로 파일을 관리한다. Metadata Recovery는 파일명과 위치를 보존할 수 있지만 Metadata 손상에 취약하고, Data Carving은 Metadata 없이 내용을 찾지만 경로와 Fragment 정보를 잃는다.

## 연습 문제

1. FAT에서 삭제된 Fragmented File 복구가 어려운 이유를 설명한다.
2. NTFS Resident File이 삭제되었을 때 복구 가능성이 높은 이유를 설명한다.
3. Data Carving 결과에 원본 Offset을 기록해야 하는 이유는 무엇인가?

## 풀이

### 1번

삭제 과정에서 FAT Chain Entry가 Free로 초기화되면 파일이 사용했던 Cluster 순서를 잃을 수 있다. Fragmented File은 물리적으로 연속하지 않으므로 시작 Cluster와 크기만으로 올바른 조합을 알기 어렵다.

### 2번

Resident File의 내용은 별도 Data Cluster가 아니라 MFT Record 내부의 <code>$DATA</code> Attribute에 저장된다. Record가 재사용되기 전이라면 Metadata와 내용이 함께 남을 수 있다.

### 3번

원본 Image의 어느 위치에서 추출했는지 재현하고, 중복·False Positive를 검증하며, 동일 영역을 다른 Parser로 다시 분석하기 위해 필요하다.
