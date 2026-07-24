---
title: "9. Windows Registry Forensics"
description: "Registry의 Key·Value·Hive 구조와 설치, 계정, RDP, USB, UserAssist, ShellBag 분석을 정리한다."
date: "2026-03-03"
category: "디지털포렌식"
tags: ["digital-forensics", "windows-registry", "usb-forensics", "userassist", "shellbag"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 9
featured: false
draft: false
---
Windows Registry는 운영체제와 Application의 설정, 사용자 Profile, 장치, 실행 흔적을 계층적으로 저장한다. Registry Forensics의 핵심은 경로를 암기하는 것이 아니라, 각 Key가 어떤 기능에서 언제 갱신되고 어떤 조사 질문에 답하는지 이해하는 것이다.

## Registry의 구조

Registry는 Key와 Value로 구성된다.

### Key

File System의 Directory처럼 하위 Key와 Value를 포함하는 계층 구조이다. Key에는 Last Write Time이 기록된다.

### Value

Key 안에 저장되는 실제 설정 항목이다.

- Value Name
- Value Type
- Value Data

일반적으로 개별 Value마다 독립 Timestamp가 없고, Key Last Write Time이 Key 안의 어떤 변화로 갱신되었는지 직접 알 수 없다. Key 아래 Value 하나가 바뀌어도 Key 시각이 갱신될 수 있다.

## Root Key

- <strong>HKCR</strong>: File Association, COM Class 등. 여러 Hive View를 합친 논리 View이다.
- <strong>HKCU</strong>: 현재 로그인한 사용자의 설정
- <strong>HKLM</strong>: 시스템 전체 설정
- <strong>HKU</strong>: 로드된 사용자 Profile 전체
- <strong>HKCC</strong>: 현재 Hardware Profile 관련 View

Root Key는 분석 도구의 논리 표현이다. 실제 Disk에서는 Hive File을 수집한다.

## Registry Hive File

주요 System Hive:

- <code>SYSTEM</code>
- <code>SOFTWARE</code>
- <code>SAM</code>
- <code>SECURITY</code>
- <code>DEFAULT</code>

주요 User Hive:

- <code>NTUSER.DAT</code>
- <code>UsrClass.dat</code>

Hive File은 일반적으로 <code>regf</code> Signature로 시작한다. Live System에서 Kernel이 Hive를 열어 사용 중이므로 일반 File Copy가 실패하거나 일관되지 않은 사본이 만들어질 수 있다. Volume Shadow Copy, Registry Save API, 포렌식 수집 도구를 사용한다.

## ControlSet과 CurrentControlSet

Disk의 SYSTEM Hive에는 <code>ControlSet001</code>, <code>ControlSet002</code> 같은 실제 Key가 존재하며, <code>CurrentControlSet</code>은 Live Registry의 Symbolic View이다. <code>Select</code> Key에서 Current, Default, LastKnownGood 값을 확인하여 사건 당시 사용된 ControlSet을 결정한다.

Offline Hive 분석에서 무조건 <code>ControlSet001</code>만 보면 잘못된 설정을 읽을 수 있다.

## OS 설치 정보

SOFTWARE Hive의 Windows CurrentVersion 관련 Key에서 다음을 확인할 수 있다.

- Product Name과 Edition
- Build Number
- Install Date
- Registered Owner
- System Root

Install Date는 Field에 따라 Unix Time 또는 FILETIME일 수 있고, Feature Update에서 바뀔 수 있다. Setup Log와 Event Log로 보완한다.

## Computer Name

SYSTEM Hive의 활성 ControlSet 아래 ComputerName 관련 Key에서 Hostname을 확인할 수 있다. ActiveComputerName과 ComputerName 값이 다르면 Rename 후 재부팅 전 상태일 수 있다.

## 사용자 계정과 RID

SAM Hive에는 Local Account 정보가 저장된다. 각 계정은 SID의 마지막 부분인 RID로 식별된다.

- RID 500은 기본 Administrator Account와 관련된다.
- Username, RID, Account Flag, Last Logon 등의 정보가 포함될 수 있다.
- 계정 이름은 변경될 수 있지만 SID/RID는 관계 분석에 유용하다.

SAM 값은 Binary 구조이므로 신뢰할 수 있는 Parser와 원시 Hex 검증이 필요하다.

## RDP Artifact

Remote Desktop 조사에서는 User Hive와 System 설정을 함께 본다.

사용자 측 Artifact에서 확인할 수 있는 값:

- 접속한 Server Name 또는 IP
- MRU 순서
- Username Hint
- Default Connection 정보

서버 측 설정에서는 RDP Service 활성화 여부, Listener Port, 정책을 확인할 수 있다. 실제 접속 여부는 Terminal Services Event Log, Security Log, Network Artifact와 교차 검증한다.

## RecentDocs

RecentDocs는 사용자가 최근에 접근한 문서 이름과 MRU 순서를 저장할 수 있다. Extension별 하위 Key가 존재할 수 있다.

RecentDocs는 경로 전체가 없거나 Application이 기록하지 않을 수 있다. LNK와 Jump List를 함께 사용하여 실제 Target Path를 보완한다.

## RunMRU

Run Dialog에서 실행한 명령을 MRU 형태로 저장한다. 사용자가 <kbd>Win</kbd>+<kbd>R</kbd>을 통해 입력한 Command를 확인할 수 있다.

Command가 존재한다는 사실은 입력·실행 가능성을 보여주지만, 실행 성공과 결과는 Event Log, Prefetch, Process Creation으로 확인한다.

## USB Device Artifact

USB 조사에서는 여러 Registry 위치와 Setup Log를 함께 본다.

### USB와 USBSTOR

- Vendor ID와 Product ID
- Device Serial Number
- Friendly Name과 Device Class
- Parent·Child Device 관계
- Volume 정보와 Drive Letter 연결

<code>USBSTOR</code>는 USB Mass Storage Device 정보를 남길 수 있다. 모든 USB 장치가 USBSTOR에 나타나는 것은 아니다.

### 연결 시각

Device Property Key에 First Install, Last Arrival, Last Removal과 관련된 Timestamp가 저장될 수 있다. OS Version에 따라 Property ID와 지원 여부가 다르다.

SetupAPI Device Installation Log, Event Log, MountedDevices, Shell Artifact를 결합하여 실제 사용 시각을 구성한다.

## Uninstall 정보

SOFTWARE와 User Hive의 Uninstall Key에서 설치된 Application 정보를 찾을 수 있다.

- DisplayName과 Version
- Publisher
- InstallLocation
- InstallDate
- Uninstall Command

32-bit Application과 64-bit Application의 Registry View가 다를 수 있다. Entry가 존재하지 않는 Portable Application도 있다.

## UserAssist

UserAssist는 Explorer GUI를 통해 실행된 Application과 Shortcut에 관한 정보를 User Hive에 저장한다. Value Name은 ROT13으로 Encoding된 경우가 많다.

Parser로 다음을 얻을 수 있다.

- Executable 또는 Shortcut 식별자
- Run Count와 Focus 관련 값
- Last Execution Time

값 의미와 Counter 보정은 Windows Version에 따라 다르다. Console 직접 실행이나 Service 실행은 UserAssist에 남지 않을 수 있다.

## Registry Transaction Log

Hive에는 <code>.LOG1</code>, <code>.LOG2</code> Transaction Log가 함께 존재할 수 있다. 시스템 장애 후 Hive를 일관된 상태로 복구하는 데 사용된다.

포렌식에서는 Main Hive와 Transaction Log를 함께 Rebuild하면 최신 변경을 복원할 수 있다. 로그를 적용하지 않은 Raw Hive와 복구 후 Hive의 차이를 기록한다.

## ShellBag

ShellBag은 Windows Explorer가 Folder View 설정을 기억하기 위해 저장하는 Registry Artifact이다.

확인 가능한 정보:

- 탐색한 Local·Network·Removable Folder
- Folder의 Shell Item 구조
- 일부 Path와 Timestamp
- 삭제되거나 현재 연결되지 않은 Folder 흔적

ShellBag은 폴더를 Explorer로 탐색했다는 가능성을 강하게 뒷받침하지만, 폴더 안 파일을 열었다는 의미는 아니다. BagMRU 구조와 NodeSlot, Bags 설정을 올바르게 연결해야 한다.

## Registry 분석 Workflow

1. SYSTEM, SOFTWARE, SAM, SECURITY, User Hive와 Transaction Log를 수집한다.
2. 활성 ControlSet과 User SID를 식별한다.
3. 조사 질문에 필요한 Artifact를 선택한다.
4. Key Last Write Time과 Value Data를 추출한다.
5. OS Version과 Parser 지원을 확인한다.
6. Event Log, LNK, Prefetch, File System Timeline과 교차 검증한다.
7. 원본 Hive Offset, Key Path, Value를 보고서에 기록한다.

## 도구의 역할

Registry Explorer, REGA 등은 Hive Parsing과 Bookmark 기능을 제공한다. KAPE는 Live System에서 Hive와 관련 Log를 수집하는 데 사용할 수 있다. 중요한 값은 Tool Screenshot만 남기지 말고 Export 또는 Report와 원본 Hive Hash를 보존한다.

## 정리

Registry는 시스템과 사용자 설정을 담는 계층형 Database이다. Key에는 Last Write Time이 있지만 개별 Value에는 일반적으로 Timestamp가 없다. ControlSet, Hive, Transaction Log를 함께 이해해야 정확한 Offline 분석이 가능하다. USB, RDP, UserAssist, ShellBag은 각각 장치 연결, 원격 접속 설정, GUI 실행, 폴더 탐색을 보완하며 단독으로 행위 전체를 확정하지 않는다.

## 연습 문제

1. Offline SYSTEM Hive에서 <code>CurrentControlSet</code> 경로가 보이지 않을 때 활성 ControlSet을 찾는 방법을 설명한다.
2. USBSTOR Entry만으로 특정 사용자가 파일을 복사했다고 판단할 수 없는 이유를 설명한다.
3. UserAssist와 Prefetch의 차이를 비교한다.

## 풀이

### 1번

SYSTEM Hive의 <code>Select</code> Key에서 Current 값을 확인하고, 해당 번호의 <code>ControlSet00X</code>를 사용한다. 필요하면 LastKnownGood와 Event Log를 비교한다.

### 2번

USBSTOR는 Mass Storage 장치의 설치·인식 흔적을 보여주지만 어떤 User Session에서 어떤 파일을 복사했는지는 직접 기록하지 않는다. LNK, Jump List, ShellBag, File System Journal과 Logon Timeline이 필요하다.

### 3번

UserAssist는 Explorer GUI 경로로 실행된 Application에 대한 사용자별 Registry 흔적이다. Prefetch는 성능 최적화를 위해 시스템이 생성하며 Executable의 실행 시각과 참조 Resource를 저장한다. 생성 조건과 범위가 다르므로 서로 보완한다.
