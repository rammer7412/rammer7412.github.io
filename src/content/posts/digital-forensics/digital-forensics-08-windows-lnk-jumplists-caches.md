---
title: "8. Windows Usage Artifacts: LNK, Jump Lists, and Caches"
description: "LNK, Jump List, Thumbnail·Icon Cache로 파일·프로그램 사용 흔적을 해석하는 방법을 정리한다."
date: "2026-03-02"
category: "디지털포렌식"
tags: ["digital-forensics", "lnk", "jump-list", "thumbnail-cache", "windows-artifact"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 8
featured: false
draft: false
---
Windows는 사용자가 최근에 연 파일과 자주 실행한 프로그램에 빠르게 접근할 수 있도록 LNK와 Jump List, Thumbnail Cache를 만든다. 이 Artifact들은 원본 파일이 삭제되거나 외장 장치가 분리된 뒤에도 경로, Volume, Timestamp, 미리보기 정보를 남길 수 있다.

## Shell Link와 LNK

LNK는 Windows Shortcut File이다. 사용자가 직접 바탕화면 바로가기를 만들 수도 있지만, Windows가 Recent Items를 관리하기 위해 자동 생성하기도 한다.

### LNK가 생성될 수 있는 상황

- Desktop 또는 Start Menu Shortcut 생성
- Application 설치
- 사용자가 File Explorer나 Application에서 문서를 열어 Recent Item이 갱신됨
- Network Share 또는 외장 Volume의 파일 접근
- 사용자가 수동으로 Shortcut 생성

모든 파일 열기가 반드시 LNK를 남기는 것은 아니다. Application과 정책, Recent Item 설정에 따라 달라진다.

## LNK 파일의 구조

### Shell Link Header

Header Size의 첫 4 bytes는 Little-Endian <code>4C 00 00 00</code>으로 나타나며, Shell Link Class Identifier가 이어진다.

Header에는 다음이 포함될 수 있다.

- LinkFlags와 FileAttributes
- Target의 Creation, Access, Write Time
- Target File Size
- Icon Index와 Show Command
- HotKey

LNK Header Timestamp는 LNK 파일 자체의 File System Timestamp가 아니라 <strong>Target에 대해 LNK가 저장한 Timestamp</strong>이다.

### LinkTargetIDList와 LinkInfo

Target을 Shell Namespace Item으로 표현하거나, Local/Network Path 정보를 제공한다.

LinkInfo에서 확인할 수 있는 값:

- Drive Type
- Volume Serial Number
- Volume Label
- Local Base Path
- Network Share Name
- Common Path Suffix

외장 USB가 현재 연결되지 않아도 Volume Serial과 Target Path를 남길 수 있다.

### String Data와 Extra Data

Relative Path, Working Directory, Command Line Arguments, Icon Location 등이 저장될 수 있다. Extra Data Block에는 다음과 같은 정보가 포함될 수 있다.

- Tracker Data: Machine ID, Droid Identifier
- Known Folder와 Special Folder
- Environment Variable Path
- Property Store
- Console 설정

NetBIOS Computer Name과 MAC 관련 Identifier는 환경과 LNK 버전에 따라 얻을 수 있지만, 모든 LNK에 존재하지 않는다.

## LNK 분석 질문

LNK는 다음 질문에 도움을 줄 수 있다.

- 어떤 경로의 파일이 참조되었는가?
- Local Disk, Removable Disk, Network Share 중 어디에 있었는가?
- Target의 크기와 Timestamp는 무엇이었는가?
- 어떤 Computer와 Volume에서 참조되었는가?
- 원본이 삭제된 후에도 흔적이 남았는가?

그러나 LNK 존재만으로 사용자가 파일 내용을 실제로 읽었다는 사실을 완전히 입증하지는 못한다. Application의 Recent Item 처리만으로 생성될 수 있고, 다른 사용자가 Profile을 복사했을 수도 있다.

## Jump List

Jump List는 Taskbar와 Start Menu에서 Application별 Recent, Frequent, Pinned Item과 Task를 보여주는 기능이다.

### Item 유형

- Recent
- Frequent
- Pinned
- Tasks
- Application-defined Category

Jump List는 Application ID(AppID 또는 AppUserModelID)에 따라 파일이 구분된다.

## Automatic Destinations

Automatic Destinations 파일은 Windows가 관리하며 Compound File Binary Format(CFBF)을 사용할 수 있다.

구조에는 다음이 포함될 수 있다.

- Embedded LNK Stream
- DestList Stream

DestList는 Entry ID, Access Count, Last Access Time, Pin 상태, Path와 관련된 정보를 포함할 수 있다. 구체 필드는 Windows 버전에 따라 달라진다.

## Custom Destinations

Application이 관리하는 형식이며 여러 LNK-like Segment를 연결한 구조를 가질 수 있다. Automatic 형식과 Parser가 다르므로 File Name만 보고 같은 방식으로 해석하지 않는다.

## LNK와 Jump List 비교

| 항목 | LNK | Jump List |
|---|---|---|
| 목적 | Shortcut·Recent Item | Application별 Recent/Frequent/Task |
| 주요 정보 | Target Path, Volume, Target Metadata | AppID, Access 정보, Embedded LNK |
| 원본 삭제 후 | 남을 수 있음 | 남을 수 있음 |
| 해석 | 개별 Link 중심 | Application Usage와 Item 관계 중심 |

둘을 결합하면 “어떤 Application으로 어떤 경로의 파일이 최근 사용되었는가”를 더 잘 설명할 수 있다.

## Thumbnail Cache

Windows Explorer는 이미지, 동영상, 문서의 미리보기를 빠르게 표시하기 위해 Thumbnail Cache를 저장한다.

### 포렌식 가치

- 원본 파일이 삭제되어도 미리보기가 남을 수 있다.
- 외장 장치나 Network Share의 콘텐츠 흔적을 보여줄 수 있다.
- 문서 첫 페이지나 영상 Frame을 확인할 수 있다.
- 파일 경로나 Cache ID를 다른 Artifact와 연결할 수 있다.

Thumbnail이 존재한다고 사용자가 파일을 명시적으로 열었다는 뜻은 아니다. Folder를 Thumbnail View로 탐색하는 것만으로 생성될 수 있다.

### Cache 분석 주의점

- Cache Entry ID와 원본 Path 매핑이 항상 직접적이지 않다.
- Thumbnail은 Resize된 저해상도 사본이다.
- Cache Cleanup과 Profile Reset으로 사라질 수 있다.
- 동일 이미지가 여러 경로에 존재할 수 있다.

## Icon Cache

Icon Cache는 File Type과 Application Icon을 빠르게 표시하기 위해 저장한다. 특정 Application Icon의 존재는 프로그램이 설치·표시되었을 가능성을 보완하지만 실행을 직접 입증하지 않는다.

## Artifact Correlation

예를 들어 외장 USB의 <code>E:\secret\plan.pdf</code> 사용을 조사한다.

- LNK: Target Path, Volume Serial, Target Timestamp
- Jump List: PDF Viewer AppID와 Recent Entry
- Thumbnail Cache: 첫 페이지 미리보기
- Registry USBSTOR: 장치 연결 흔적
- Prefetch: PDF Viewer 실행
- <code>Zone.Identifier</code>: 다운로드 출처
- Recycle Bin: 삭제 흔적

이런 결합은 파일의 존재, 접근 Application, Device, 삭제 시점을 구분하는 데 도움을 준다.

## Timestamp 해석

LNK에는 최소 세 종류의 시각이 섞일 수 있다.

1. LNK 파일 자체의 File System Timestamp
2. Header에 저장된 Target Timestamp
3. Jump List DestList의 Access Time

모두 같은 Event를 의미하지 않는다. 표에 Source Field를 명시하여 Timeline에 넣는다.

## Anti-Forensics와 한계

- Recent Item 기능 비활성화
- LNK·Jump List 삭제
- Profile Cleanup
- Portable Application 사용
- Timestamp 변경
- AppID 또는 Executable 이름 변경

삭제 흔적은 <code>$UsnJrnl</code>, VSC, Unallocated MFT에서 복구될 수 있다. 반대로 LNK를 인위적으로 생성할 수도 있으므로 Metadata 일관성을 확인한다.

## 도구의 역할

- KAPE: LNK와 Jump List 수집
- LECmd: LNK Parsing
- JLECmd, JumpList Explorer: Jump List Parsing
- ThumbCache Viewer: Thumbnail Cache 추출

중요 결과는 원본 File Hash와 Entry Offset, Parser Version을 함께 기록한다.

## 정리

LNK는 Target의 Path·Volume·Metadata를, Jump List는 Application과 Recent/Frequent Item의 관계를 보여준다. Thumbnail Cache는 원본이 없어도 시각적 흔적을 남길 수 있다. 이 Artifact들은 사용 행위를 강하게 뒷받침하지만, 생성 조건이 다양하므로 “열었다”, “보았다”, “실행했다”를 구분하여 표현해야 한다.

## 연습 문제

1. LNK Header Timestamp와 LNK 파일 자체 Timestamp의 차이를 설명한다.
2. Thumbnail Cache가 존재하지만 원본 파일이 없을 때 가능한 해석 두 가지를 제시한다.
3. Jump List의 AppID가 중요한 이유는 무엇인가?

## 풀이

### 1번

Header Timestamp는 LNK가 생성·갱신될 당시 Target File의 Metadata를 복사해 저장한 값이다. LNK 파일 자체 Timestamp는 Shortcut File이 File System에서 생성·변경된 시각이다.

### 2번

원본이 삭제되었거나 외장 장치가 분리된 뒤 Cache만 남았을 수 있다. 또는 동일 콘텐츠가 다른 경로에서 탐색되어 생성되었을 수 있으므로 LNK, Path Mapping, Cache ID를 추가 확인한다.

### 3번

AppID는 Jump List를 관리하는 Application을 식별한다. 파일명 Hash만으로는 어떤 프로그램의 Recent Item인지 알기 어려우므로 알려진 AppID Mapping과 Embedded LNK를 함께 사용한다.
