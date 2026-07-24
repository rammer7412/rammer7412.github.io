---
title: "3. Digital Evidence Acquisition과 Live Forensics"
description: "Dead·Live System에서의 이미징, Write Blocker, RAM 수집과 휘발성 데이터 분석 원칙을 정리한다."
date: "2026-02-23"
category: "디지털포렌식"
tags: ["digital-forensics", "forensic-imaging", "live-forensics", "ram-analysis", "write-blocker"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 3
featured: false
draft: false
---
디지털 증거 수집은 분석보다 먼저 이루어지며, 잘못된 수집은 이후의 정교한 분석으로 되돌릴 수 없다. 수집 방법은 시스템이 꺼져 있는지, 실행 중인지, 서비스 중단이 가능한지, 암호화와 휘발성 데이터가 존재하는지에 따라 달라진다.

## Dead System과 Live System

- <strong>Dead System</strong>: 전원이 꺼진 상태. 저장장치를 분리하거나 부팅하지 않고 이미징할 수 있다.
- <strong>Live System</strong>: 전원이 켜진 상태. RAM, Process, Network Connection처럼 현재 상태에서만 얻을 수 있는 데이터가 존재한다.

Dead 방식은 저장장치 변경을 최소화하기 쉽다. 그러나 Full Disk Encryption이 잠금 해제된 상태, 메모리에만 존재하는 Key, 원격 서버 세션처럼 전원을 끄면 사라지는 정보는 잃게 된다.

Live 방식은 중요한 휘발성 데이터를 확보할 수 있지만, 수집 도구를 실행하는 순간 메모리와 파일시스템이 일부 변경된다. 따라서 “변경하지 않는다”가 아니라 <strong>필요한 변경을 최소화하고 정확히 기록한다</strong>는 원칙이 현실적이다.

## 수집 전 계획

수집 전에 최소한 다음을 결정한다.

1. 조사 권한과 범위는 무엇인가?
2. 어떤 장치와 계정, Cloud Service가 대상인가?
3. 서비스 중단이 가능한가?
4. 암호화, 원격 접속, 휘발성 데이터가 있는가?
5. 필요한 저장 공간과 예상 시간이 충분한가?
6. 사용 도구가 대상 OS와 저장장치를 지원하는가?
7. 수집 실패 시 대안은 무엇인가?

현장 사진, 케이블 연결, 화면 상태, 현재 시각, 로그인 사용자, 실행 중인 애플리케이션을 먼저 기록하는 것도 중요하다.

## Full Imaging

Full Imaging은 저장장치의 주소 가능한 전체 영역을 Bitstream 형태로 복제하는 방식이다. 할당된 파일뿐 아니라 Unallocated Area, Slack Space, 삭제된 Metadata까지 포함할 수 있다.

### Physical Image와 Logical Image

- <strong>Physical Image</strong>: 저장장치 또는 Volume의 낮은 계층 데이터를 Sector 단위로 수집한다.
- <strong>Logical Image</strong>: 파일시스템을 통해 선택한 파일·폴더와 논리 Metadata를 수집한다.

Physical Image가 항상 더 좋은 것은 아니다. Cloud Service나 스마트폰 애플리케이션처럼 Physical 접근이 불가능한 환경에서는 Logical Collection이 현실적인 선택일 수 있다. 수집 방식과 누락 가능성을 보고서에 명확히 적는다.

### Raw와 Forensic Container

Raw Image는 원시 Sector를 그대로 저장한다. E01/Ex01 같은 Forensic Container는 압축, 분할, 내부 Hash, Case Metadata 등을 지원할 수 있다. 어떤 형식을 사용하든 원본 대상과 이미지의 Hash, 도구 버전, 설정을 기록한다.

## Selective Imaging

Selective Imaging은 조사 범위와 관련된 특정 파일, 폴더, Block만 수집한다.

장점은 수집 시간과 저장 공간을 줄이고 개인정보의 과도한 수집을 줄일 수 있다는 것이다. 단점은 수집 시점에 중요성을 인식하지 못한 Artifact를 놓치거나, Unallocated Area와 Slack Space를 누락할 수 있다는 것이다.

Selective Collection을 사용할 때는 선택 기준, 포함·제외 경로, 시간 범위, 파일 유형을 문서화한다. 추후 질문이 바뀌었을 때 재수집이 가능한지도 고려한다.

## Write Blocker

Write Blocker는 분석 장비가 원본 저장장치에 쓰기 명령을 전달하지 못하도록 차단한다.

- <strong>Hardware Write Blocker</strong>: 장치와 분석 시스템 사이에 물리적으로 연결한다.
- <strong>Software Write Blocking</strong>: 운영체제 설정과 Driver를 사용한다.

Write Blocker 사용 전에는 알려진 Test Media로 실제 쓰기 차단 여부를 시험해야 한다. 단순히 장비가 연결되었다는 사실만으로 보호를 가정하지 않는다.

SSD에서는 TRIM, Garbage Collection, Controller 내부 동작처럼 Host Write Blocker만으로 완전히 통제하기 어려운 변화가 있을 수 있다. 전원 인가 자체의 영향과 장치 특성을 기록해야 한다.

## Hash와 Verification

수집 전후에 가능한 경우 Hash를 계산한다.

```text
Source Hash  = Image Hash  → Bitstream 일치의 근거
```

대용량 수집에서는 Segment별 Hash와 전체 Hash를 함께 사용할 수 있다. Hash가 다르면 즉시 원인을 조사해야 한다. Bad Sector, 읽기 오류, 장치 변화, 수집 설정 차이를 로그에서 확인한다.

## Live Forensics가 필요한 경우

- Disk Encryption이 잠금 해제된 상태
- RAM에만 존재하는 Encryption Key와 Credential
- 실행 중인 Malware와 Injected Code
- 현재 Network Connection과 Remote Session
- 재부팅할 수 없는 서버
- 전원을 끄면 상태가 바뀌는 Application

Live 수집 여부는 증거 가치와 시스템 변경 위험을 비교하여 결정한다.

## Order of Volatility

휘발성이 높은 데이터부터 수집하는 일반적인 순서는 다음과 같이 생각할 수 있다.

1. CPU Register와 Cache처럼 즉시 변하는 상태
2. RAM, Process, Thread, Open Handle, Network Connection
3. Temporary File System과 현재 Session
4. Local Disk
5. Remote Log와 Cloud Data
6. Backup과 Archive

실제 순서는 사건과 환경에 따라 달라진다. 예를 들어 공격이 진행 중이라면 네트워크 연결과 메모리 수집이 최우선일 수 있다.

## RAM Acquisition

RAM Dump는 실행 중인 시스템의 Physical Memory를 파일로 저장한 것이다. 수집 도구는 Kernel Driver 또는 OS 기능을 사용하며, 도구 자체가 메모리에 로드되므로 일부 변화가 불가피하다.

### RAM에서 찾을 수 있는 정보

- 실행 Process와 Parent-Child 관계
- Thread, DLL, Kernel Object
- Command Line과 Environment Variable
- Network Socket와 연결 Endpoint
- Open File와 Registry Handle
- 사용자 입력, Clipboard, Chat Fragment
- Credential Material과 Token
- Decryption Key와 Cryptographic Context
- Injected Code와 Unlinked Module

메모리 이미지는 수집 시점의 Snapshot이다. 이미 종료된 Process 흔적이 일부 남을 수 있지만 완전성을 보장하지 않는다.

### 관련 보조 파일

- <code>pagefile.sys</code>: 메모리 Page가 Disk로 이동한 흔적
- <code>swapfile.sys</code>: Windows App Memory 관리에 사용될 수 있음
- <code>hiberfil.sys</code>: Hibernate 또는 Fast Startup과 관련된 메모리 상태

이 파일들은 RAM 전체의 단순 복사본이 아니며, OS 버전과 설정에 따라 구조가 달라진다.

## RAM Dump 분석

분석은 단순 String Search와 구조 해석을 함께 사용한다.

### Printable String Search

Email, URL, JSON, MIME Header, Path를 빠르게 찾을 수 있다. 그러나 String이 존재한다는 것만으로 현재 Process가 사용 중이었다고 단정할 수 없다. 해제된 메모리나 Cache에서 유래할 수 있다.

### Signature와 Pattern Search

- Process와 Thread 구조
- PE Header와 DLL
- Network Structure
- Registry Object
- File Fragment
- Fixed-length Random Byte와 Key Schedule

Memory Forensics Framework는 OS Symbol과 구조 정보를 이용해 Object를 재구성한다. 서로 다른 Plugin 결과를 비교하고, Process List에 없지만 Scan에서 발견되는 Object를 확인한다.

## Live System의 비휘발성 데이터

Live 조사에서도 Disk Artifact를 함께 수집하는 이유가 있다.

1. 전체 이미징이 너무 오래 걸리거나 서비스 중단이 불가능할 수 있다.
2. 로그인 세션에서만 접근 가능한 사용자 Profile과 Network Share가 있다.
3. 현재 실행 상태와 Prefetch, Event Log, Registry를 같은 시점에 연결할 수 있다.

KAPE와 같은 Triage 도구는 특정 Artifact를 빠르게 수집할 수 있다. 다만 Target과 Module 설정을 기록하고, 어떤 파일이 누락될 수 있는지 이해해야 한다.

## Anti-Forensics와 수집 대응

공격자는 Log 삭제, Timestamp 변경, 암호화, Secure Deletion, Artifact Cleaning을 사용할 수 있다. 수집 단계에서는 다음을 고려한다.

- 현재 화면과 Process 상태 촬영
- Network Isolation 여부 판단
- 원격 명령이 계속 실행되는지 확인
- Time Source와 시스템 시각 기록
- Tool Output의 Standard Output과 Error 보존
- 수집 파일을 신뢰할 수 있는 외부 저장장치로 저장

Network를 즉시 차단하는 것이 항상 정답은 아니다. 공격자 세션을 끊을 수 있지만 Cloud Log나 원격 Evidence 확보 기회를 잃을 수도 있다.

## 도구의 역할

- <strong>FTK Imager</strong>: Disk·Partition·File의 이미지 생성과 기본 확인
- <strong>KAPE</strong>: Windows Artifact 중심의 빠른 Triage Collection과 Processing
- <strong>Memory Acquisition Tool</strong>: RAM Dump 생성
- <strong>Memory Analysis Framework</strong>: Process, Network, Module, Registry 등의 구조 분석

도구 이름보다 중요한 것은 어떤 계층에서 무엇을 수집하고, 어떤 변경과 누락이 발생하는지 설명할 수 있는가이다.

## 정리

Dead Acquisition은 원본 저장장치의 변경을 통제하기 쉽고, Live Acquisition은 휘발성 데이터와 잠금 해제된 상태를 확보할 수 있다. Full Imaging은 가장 넓은 범위를 보존하지만 시간과 저장 공간이 필요하며, Selective Imaging은 빠르지만 누락 위험이 있다. 모든 수집은 Hash, 도구 로그, 시각, 담당자와 설정을 함께 기록해야 한다.

## 연습 문제

1. BitLocker로 암호화된 노트북이 로그인된 상태로 발견되었다. 전원을 즉시 끄면 안 되는 이유를 설명한다.
2. Selective Imaging이 적절한 경우와 위험한 경우를 각각 한 가지 제시한다.
3. RAM에서 URL 문자열을 발견했다. 사용자가 해당 사이트에 접속했다고 바로 결론 내릴 수 없는 이유는 무엇인가?

## 풀이

### 1번

전원을 끄면 Volume이 다시 잠기고 RAM의 Decryption Key, Process, Network Connection, Login Session이 사라질 수 있다. 먼저 현장 상태를 기록하고 메모리 및 필요한 Live Artifact를 수집한 뒤 전원 종료 여부를 결정한다.

### 2번

대규모 File Server에서 법적으로 지정된 사용자 폴더만 긴급 보존해야 하는 경우 Selective Imaging이 적절할 수 있다. 반대로 삭제 파일, Unallocated Area, 숨긴 데이터를 조사해야 하는 경우에는 선택 수집만으로 중요한 흔적을 놓칠 수 있다.

### 3번

문자열은 Browser Cache, 해제된 메모리, 다른 Process, 문서 내용에서 유래했을 수 있다. Process Context, Browser History, Network Socket, DNS Cache 등 다른 Artifact와 연결해야 실제 접속 여부를 판단할 수 있다.
