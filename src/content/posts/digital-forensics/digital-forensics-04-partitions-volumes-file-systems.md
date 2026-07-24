---
title: "4. Partitions, Volumes, and File Systems"
description: "MBR·GPT, Partition과 Volume, 파일시스템 계층, Sector·Cluster와 Slack Space를 정리한다."
date: "2026-02-24"
category: "디지털포렌식"
tags: ["digital-forensics", "partition", "mbr", "gpt", "file-system"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 4
featured: false
draft: false
---
저장장치에서 파일을 찾으려면 먼저 물리 장치, Partition, Volume, File System의 관계를 구분해야 한다. 이 계층을 혼동하면 Offset 계산이 어긋나고, 부팅 Record와 파일시스템 Record를 잘못 해석할 수 있다.

## Storage Device의 계층

일반적인 구조를 단순화하면 다음과 같다.

```text
Storage Device
  └─ Partition Table
       └─ Partition
            └─ Volume
                 └─ File System
                      └─ Directory / File / Metadata
```

LVM, RAID, Storage Space처럼 여러 장치를 하나의 논리 Volume으로 결합하는 환경에서는 관계가 더 복잡해진다.

## Sector와 Addressing

Sector는 저장장치에서 데이터를 읽고 쓰는 물리·논리 단위이다. 전통적으로 512 bytes가 널리 사용되었고, 현대 장치에서는 4 KiB Physical Sector를 사용하는 Advanced Format이 흔하다.

- <strong>LBA(Logical Block Addressing)</strong>: Sector를 0부터 순서대로 번호화한다.
- <strong>Physical Sector</strong>: 장치 내부의 실제 기록 단위
- <strong>Logical Sector</strong>: Host가 주소 지정하는 단위

이미지 파일의 Byte Offset은 일반적으로 다음처럼 계산한다.

```text
Byte Offset = LBA × Logical Sector Size
```

Sector Size를 512 bytes로 고정 가정하면 4K Native 장치에서 잘못된 위치를 읽을 수 있다.

## Partition

Partition은 저장장치의 연속된 Sector 범위를 논리적으로 구분한 것이다. Partition의 시작 LBA와 길이는 MBR 또는 GPT에 기록된다.

Partition 자체와 File System은 다르다. Partition은 공간의 경계이고, 그 안에 NTFS, FAT, ext4 같은 File System을 Format할 수 있다.

## MBR

MBR(Master Boot Record)은 전통적인 Partition Scheme에서 Disk의 첫 Sector에 위치한다. 512-byte MBR의 대표적 구조는 다음과 같다.

| 영역 | 크기 | 설명 |
|---|---:|---|
| Boot Code | 446 bytes | Legacy BIOS 부팅 코드 |
| Partition Table | 64 bytes | 16-byte Entry × 4 |
| Signature | 2 bytes | 일반적으로 <code>55 AA</code> |

하나의 MBR에 네 개의 Primary Partition Entry가 있다. 더 많은 Partition을 만들기 위해 Extended Partition과 EBR Chain을 사용할 수 있다.

MBR Entry에는 Partition Type, 시작·끝 CHS, 시작 LBA, Sector Count 등이 들어간다. 현대 분석에서는 CHS보다 LBA가 중요하다.

### MBR의 한계

- Primary Entry 수가 제한된다.
- 32-bit Sector Count 때문에 512-byte Sector 기준 약 2 TiB 한계가 있다.
- Partition Table의 중복 백업 구조가 없다.

## GPT

GPT(GUID Partition Table)는 UEFI 환경에서 널리 사용된다.

```text
LBA 0 : Protective MBR
LBA 1 : Primary GPT Header
Next  : Partition Entry Array
...   : Partitions
End   : Backup Entry Array + Secondary GPT Header
```

### Protective MBR

구형 도구가 GPT Disk를 비어 있는 MBR Disk로 오인하여 덮어쓰는 것을 막기 위해 Type <code>0xEE</code> Entry를 둔다.

### GPT Header

Header에는 Signature <code>EFI PART</code>, Header CRC, 현재와 Backup Header LBA, 사용 가능한 LBA 범위, Disk GUID, Partition Entry 위치와 크기가 포함된다.

Primary와 Secondary GPT를 비교하면 손상 여부를 확인하고 일부 정보를 복구할 수 있다. CRC가 맞지 않더라도 즉시 전체를 무효로 보지 말고 Header와 Entry Array를 각각 검증한다.

## PBR, VBR, BPB

Partition의 시작에는 부팅과 파일시스템 해석에 필요한 Record가 존재할 수 있다.

- <strong>PBR(Partition Boot Record)</strong>: Partition 시작의 Boot Record를 넓게 가리킨다.
- <strong>VBR(Volume Boot Record)</strong>: Volume의 부팅·파일시스템 Parameter를 담는다.
- <strong>BPB(BIOS Parameter Block)</strong>: Bytes per Sector, Sectors per Cluster, Reserved Sector 등 파일시스템 Parameter를 저장한다.

MBR은 Disk 전체의 Partition Scheme를 설명하고, VBR은 특정 Volume의 파일시스템 구조를 설명한다.

## Volume

Volume은 운영체제가 파일시스템을 Format하고 Mount할 수 있는 논리 저장 영역이다.

단순한 환경에서는 Partition 하나가 Volume 하나와 대응하지만 항상 그렇지는 않다.

- Partition 하나에 Volume 하나
- 여러 Disk·Partition을 하나의 Spanned Volume으로 결합
- 하나의 Partition 안에 암호화 Container나 Virtual Disk 구성
- RAID와 LVM 위에 Logical Volume 구성

Windows에서는 Mount Point나 Drive Letter가 Volume에 할당된다. Drive Letter는 고정된 장치 정체성이 아니므로, 조사 시 Volume GUID, Serial Number, Partition Offset을 함께 본다.

## LVM 관점의 계층

```text
Storage Device
  → Partition
  → Physical Volume
  → Volume Group
  → Logical Volume
  → File System
```

여러 Physical Volume을 Volume Group으로 묶고, 그 위에 Logical Volume을 생성한다. Physical Disk Image를 확보했더라도 LVM Metadata를 해석하지 않으면 파일시스템을 바로 찾지 못할 수 있다.

## File System의 역할

File System은 Byte와 Block을 파일·디렉터리라는 논리 객체로 관리한다.

1. <strong>공간 관리</strong>: 어떤 Cluster가 할당되었는지 기록한다.
2. <strong>Metadata 관리</strong>: 파일명, 크기, Timestamp, 권한, 위치를 기록한다.
3. <strong>Namespace 관리</strong>: 디렉터리와 경로를 구성한다.
4. <strong>복구 기능</strong>: Journaling이나 Transaction Log를 제공한다.
5. <strong>추가 기능</strong>: Compression, Encryption, Quota, Link 등을 지원한다.

운영체제의 File Explorer는 Metadata를 해석하여 사용자가 보는 이름과 시각을 만든다. 포렌식에서는 그 표시값뿐 아니라 원본 Metadata Record를 확인한다.

## Data Processing Unit

### Sector

저장장치 주소의 기본 단위이다.

### Cluster와 Block

File System이 파일 데이터를 할당하는 기본 단위이다. Cluster는 하나 이상의 Sector로 구성된다. File 크기가 Cluster보다 작아도 최소 한 Cluster가 할당될 수 있다.

### Page

OS Virtual Memory나 Database에서 사용하는 논리 처리 단위이다. File System Cluster와 같은 개념이 아니며 문맥을 확인해야 한다.

## Slack Space

Slack Space는 고정 크기 Allocation Unit 때문에 파일의 논리 끝과 할당 영역의 끝 사이에 남는 사용되지 않는 공간이다.

4 KiB Cluster에 1,000-byte 파일을 저장하면 하나의 Cluster가 할당되고 약 3,096 bytes가 남을 수 있다. 이 공간에 이전 데이터 일부가 남아 있을 가능성이 있다.

Slack은 흔히 다음처럼 구분한다.

- <strong>RAM Slack</strong>: 과거 시스템에서 마지막 Sector의 파일 끝 뒤를 메우던 영역과 관련된 용어
- <strong>Drive Slack</strong>: 마지막 Sector 이후 Cluster 끝까지의 영역

현대 OS의 Zeroing 정책과 File System 구현에 따라 실제 잔존 데이터 양은 달라진다. Slack에서 문자열을 발견해도 현재 파일의 내용으로 단정하지 않는다.

## Unallocated Space와 Slack의 차이

- <strong>Unallocated Space</strong>: 현재 어떤 파일에도 할당되지 않은 Cluster 영역
- <strong>File Slack</strong>: 특정 파일에 할당되었지만 그 파일의 논리 크기 밖에 있는 영역

삭제 파일 복구와 Data Carving은 주로 Unallocated Space를 대상으로 하지만, Slack에서도 Fragment를 발견할 수 있다.

## Partition Recovery의 기본 관점

Partition Table이 손상되더라도 File System Signature와 Boot Sector가 남아 있을 수 있다.

1. Disk 전체에서 알려진 VBR Signature를 검색한다.
2. 후보 Offset의 BPB 값이 논리적으로 일관되는지 확인한다.
3. File System Metadata 위치를 계산해 실제 Record가 존재하는지 확인한다.
4. GPT Backup Header나 MBR EBR Chain과 비교한다.

Signature 하나만으로 Partition 경계를 확정하지 않는다. 우연히 파일 내부에 같은 Byte가 존재할 수 있다.

## 정리

MBR과 GPT는 Disk의 Partition 경계를 설명하고, VBR과 BPB는 특정 Volume의 파일시스템 Parameter를 설명한다. Partition과 Volume은 자주 일대일로 대응하지만 같은 개념은 아니다. File System은 Cluster 할당과 Metadata를 관리하며, 고정 크기 할당 때문에 Slack Space가 생긴다. Offset 분석에서는 Sector Size와 Partition Start를 항상 확인해야 한다.

## 연습 문제

1. Logical Sector Size가 512 bytes이고 Partition Start LBA가 2,048이라면 Byte Offset을 구한다.
2. MBR과 GPT의 복구 관점 차이를 설명한다.
3. 4 KiB Cluster에 6,000-byte 파일을 저장할 때 할당되는 Cluster 수와 최대 File Slack 크기를 구한다.

## 풀이

### 1번

<code>2,048 × 512 = 1,048,576 bytes</code>이므로 1 MiB Offset에서 시작한다.

### 2번

MBR은 첫 Sector의 Partition Table에 의존하고 기본 구조에는 Backup이 없다. GPT는 Primary와 Secondary Header 및 Entry Array를 두고 CRC를 사용하므로 서로 비교하여 일부 손상을 검증·복구할 수 있다.

### 3번

두 Cluster, 총 8,192 bytes가 할당된다. 논리 파일 크기는 6,000 bytes이므로 최대 2,192 bytes가 파일 끝 뒤에 남는다.
