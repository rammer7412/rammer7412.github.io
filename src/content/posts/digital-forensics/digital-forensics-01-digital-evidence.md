---
title: "1. Digital Forensics와 Digital Evidence"
description: "디지털포렌식의 목적, 디지털 증거의 특성, 증거능력, Chain of Custody와 표준 조사 절차를 정리한다."
date: "2026-02-20"
category: "디지털포렌식"
tags: ["digital-forensics", "digital-evidence", "chain-of-custody", "admissibility", "ediscovery"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 1
featured: false
draft: false
---
Digital Forensics는 단순히 삭제된 파일을 복구하거나 특정 도구의 결과를 확인하는 작업이 아니다. 디지털 장치와 서비스에 남은 흔적을 <strong>재현 가능하고 설명 가능한 절차</strong>로 수집·보존·분석하여, 사건에 관한 사실을 추론하는 과정이다. 분석 결과가 법적·조직적 의사결정에 사용될 수 있으므로 기술적 정확성뿐 아니라 절차의 신뢰성도 중요하다.

## Forensic Science와 Digital Forensics

Forensic Science는 과학적 방법을 이용하여 범죄를 조사하거나 법정에서 다룰 수 있는 증거를 검토하는 분야이다. Digital Forensics는 그 대상을 디지털 장치와 전자적으로 저장된 정보로 확장한 것이다.

디지털포렌식의 주요 목표는 다음과 같이 정리할 수 있다.

1. 사건과 관련된 디지털 데이터를 식별한다.
2. 원본을 훼손하지 않는 방식으로 데이터를 수집하고 보존한다.
3. 수집한 데이터에서 사건을 설명할 수 있는 흔적을 찾는다.
4. 분석 과정과 판단 근거를 제3자가 재검증할 수 있도록 기록한다.
5. 기술적 결과를 조사관, 조직, 법원 등 독자가 이해할 수 있는 형태로 보고한다.

여기서 중요한 점은 <strong>데이터가 존재한다는 사실</strong>과 <strong>그 데이터가 특정 행위를 입증한다는 판단</strong>이 같지 않다는 것이다. 예를 들어 Prefetch 파일은 어떤 프로그램이 실행되었을 가능성을 강하게 뒷받침하지만, 그 프로그램을 누가 어떤 목적으로 실행했는지까지 단독으로 확정하지는 못한다. 디지털포렌식은 여러 독립적인 Artifact를 함께 비교하는 과정이다.

## 디지털 데이터의 출처

현대의 사건 데이터는 한 장치에만 남지 않는다.

- <strong>Endpoint</strong>: 사용자의 PC, 스마트폰, 태블릿, IoT 장치 등
- <strong>Edge</strong>: 사용자와 외부 서비스 사이의 라우터, 게이트웨이, 보안 장비 등
- <strong>Cloud</strong>: 데이터센터, SaaS, 클라우드 스토리지, 협업 서비스 등

같은 행위도 서로 다른 위치에 흔적을 남긴다. 파일을 클라우드에서 내려받았다면 브라우저 Download 기록, 로컬 파일시스템, <code>Zone.Identifier</code>, 클라우드 접근 로그가 서로 보완될 수 있다. 따라서 조사 범위를 정할 때는 “어떤 장치를 확보할 것인가”뿐 아니라 “데이터가 어떤 경로로 이동했는가”도 살펴야 한다.

## Digital Evidence와 ESI

<strong>ESI(Electronically Stored Information)</strong>는 전자적으로 저장된 정보를 넓게 가리킨다. 문서, 이메일, 로그, 데이터베이스, 메타데이터, 메시지 등이 모두 포함될 수 있다.

그러나 모든 디지털 데이터가 곧바로 Digital Evidence가 되는 것은 아니다. Digital Evidence는 사건의 사실을 입증하거나 반박할 수 있도록 관련성이 확인되고, 적절한 절차로 취급된 디지털 데이터이다.

디지털 증거는 크게 다음 두 층으로 생각할 수 있다.

- <strong>Physical Device</strong>: HDD, SSD, USB, 스마트폰, CCTV 저장장치 등
- <strong>Logical Digital Data</strong>: 문서, 멀티미디어, 애플리케이션 데이터, 파일시스템, 운영체제, 네트워크 관련 데이터 등

같은 물리 장치에서도 파티션, 파일시스템, 애플리케이션 데이터베이스처럼 여러 논리 계층이 존재한다. 조사자는 어떤 계층의 정보가 질문에 답할 수 있는지를 판단해야 한다.

## 디지털 증거의 특성

디지털 증거는 전통적인 물리 증거와 다른 특성을 갖는다.

### Invisibility

비트와 메타데이터는 사람이 직접 볼 수 없다. 해석 도구와 파일 형식에 관한 지식이 필요하다. 도구의 화면은 원시 데이터 그 자체가 아니라 도구가 해석한 결과이므로, 중요한 결론은 원시 값이나 다른 도구로 교차 확인하는 것이 좋다.

### Volatility

RAM, 실행 중인 프로세스, 네트워크 연결, 로그인 세션처럼 전원이 꺼지면 사라지는 데이터가 있다. 수집 순서를 결정할 때는 휘발성이 높은 정보를 먼저 확보해야 한다.

### Replicability

디지털 데이터는 정확하게 복제할 수 있다. 이 특성 덕분에 원본을 보존하고 복제본으로 분석할 수 있다. 다만 복제 가능하다는 사실이 자동으로 진정성을 보장하는 것은 아니다. 복제 시점과 방법, Hash 값, 담당자를 함께 기록해야 한다.

### Modifiability

디지털 데이터는 작은 조작으로도 변경될 수 있으며, 일부 변경은 사용자가 인식하기 어렵다. 파일 열기만으로 Access Time이 바뀌거나, Live 수집 도구 실행이 메모리 상태에 영향을 줄 수 있다.

### Large Scale, Cross-Border, Anonymity

데이터 양이 크고 여러 국가와 서비스에 분산될 수 있다. 온라인 식별자는 실제 사용자와 일치하지 않을 수 있으므로 계정, IP, 장치, 시각 정보를 섣불리 동일 인물로 단정해서는 안 된다.

## 디지털 증거의 증거능력

디지털 증거가 신뢰받기 위해서는 다음 관점이 중요하다. 실제 법적 요건은 관할권과 사건 성격에 따라 다르지만, 포렌식 절차를 설계하는 공통 기준으로 사용할 수 있다.

### Originality와 Best Evidence

비휘발성 저장장치는 원본을 보존한 뒤 Forensic Image를 만들어 분석하는 것이 일반적이다. 휘발성 데이터는 동일 상태를 다시 얻을 수 없으므로, 현재 상태를 가능한 한 충실하게 수집하고 사용한 명령과 도구를 기록해야 한다.

### Integrity

수집 이후 데이터가 변경되지 않았음을 보여주어야 한다. 이를 위해 원본 또는 이미지의 Cryptographic Hash를 계산한다.

Hash는 파일 내용을 고정 길이 값으로 요약한다. 동일한 알고리즘에서 두 Hash가 같으면 데이터가 같다는 강한 근거가 되지만, Hash만으로 “이 데이터가 사건 당시 실제로 존재했다”는 진정성 전체가 입증되는 것은 아니다. 수집 경위와 보관 기록이 함께 필요하다.

### Reliability

사용한 도구와 방법이 신뢰할 수 있어야 한다. 도구 버전, 설정, 오류 메시지, 분석 환경을 남기고, 중요한 결과는 가능하면 다른 방법으로 검증한다. NIST CFTT와 같은 Tool Testing 체계는 포렌식 도구의 기능과 한계를 평가하는 데 도움을 준다.

### Authenticity

증거가 주장된 출처에서 생성되었고 사건과 연결됨을 설명해야 한다. 계정명 하나만으로 사용자를 단정하지 않고, SID, 로그인 기록, 파일 경로, 네트워크 흔적 등 여러 요소를 결합한다.

## Chain of Custody

<strong>Chain of Custody(CoC)</strong>는 증거가 발견된 순간부터 수집, 이동, 보관, 분석, 제출에 이르기까지 누가 언제 어떤 목적으로 증거를 취급했는지 기록하는 연속적인 문서화 과정이다.

일반적인 흐름은 다음과 같다.

| 단계 | 핵심 활동 |
|---|---|
| Preparation | 범위 설정, 법적 권한 확인, 장비 준비, 도구 시험 |
| Collection | 현장 기록, Live/Dead 판단, 이미징, Hash 계산 |
| Transportation | 봉인, 포장, 운송 담당자와 인계 시각 기록 |
| Analysis | 분석 사본 사용, 명령·도구·결과 기록, Timeline 구성 |
| Presentation | 보고서 작성, 한계 명시, 증언과 재현 자료 준비 |

CoC에는 증거 식별번호, 장치 정보, 수집 위치, 날짜와 시각, 수집자, Hash, 봉인 상태, 인계 기록 등이 포함될 수 있다. 빈틈이 생기면 데이터가 언제 누구에 의해 변경되었는지 설명하기 어려워진다.

## Digital Forensic Framework

조직과 표준마다 단계 이름은 다르지만 핵심 원칙은 비슷하다.

1. <strong>Identification</strong>: 조사 질문과 잠재적 데이터 소스를 식별한다.
2. <strong>Preservation</strong>: 데이터 변경과 손실을 막는다.
3. <strong>Collection</strong>: 적절한 우선순위와 방법으로 데이터를 확보한다.
4. <strong>Examination</strong>: 필요한 데이터를 추출·복구·정규화한다.
5. <strong>Analysis</strong>: 여러 흔적의 관계를 해석하고 가설을 검증한다.
6. <strong>Reporting</strong>: 절차, 결과, 근거, 한계를 명확히 작성한다.

ISO/IEC 27037, NIST SP 800-86 등은 디지털 증거 취급과 사고 대응 절차를 설계할 때 참고할 수 있다. 특정 Framework를 암기하는 것보다, 각 단계에서 <strong>원본 보존·재현성·문서화</strong>가 어떻게 확보되는지를 이해하는 것이 중요하다.

## Intentionally Stored Data와 Automatically Generated Data

디지털 증거는 생성 방식에 따라 구분할 수 있다.

- <strong>Intentionally Stored Data</strong>: 문서, 이메일, 사진처럼 사용자가 의도적으로 생성·저장한 데이터
- <strong>Automatically Generated Data</strong>: 이벤트 로그, Prefetch, Registry, 메타데이터처럼 시스템이 자동으로 남긴 데이터

사용자 파일은 내용이 직접적이지만 삭제·변조될 수 있다. 자동 생성 Artifact는 사용자가 존재를 모르거나 직접 관리하기 어려워 행위 추적에 유용하지만, 운영체제 정책과 버전에 따라 생성 조건이 달라진다.

## eDiscovery와의 관계

<strong>eDiscovery</strong>는 민사소송 등에서 ESI를 식별·보존·수집·검토·제출하는 법적 절차이다. 사건 규명과 증거 분석에 초점을 두는 Digital Forensics와 겹치지만, eDiscovery는 대규모 문서 검토와 당사자 사이의 자료 교환, 관련성·특권 검토가 더 큰 비중을 차지한다.

일반적인 과정은 Identification → Preservation & Collection → Processing → Review & Analysis → Production으로 볼 수 있다. 손상 파일 복구, 삭제 데이터 조사, Unallocated Area 분석처럼 일반적인 문서 처리만으로 해결되지 않는 부분에서 포렌식 기법이 사용된다.

## 현대 포렌식 인프라

- <strong>Reference Data Set</strong>: 알려진 정상 파일의 Hash를 이용해 분석 대상에서 제외한다.
- <strong>Synthetic Digital Evidence</strong>: 실제 개인정보나 사건 데이터를 사용하지 않고 교육·도구 시험을 수행한다.
- <strong>Evidence Management System</strong>: 원본 이미지, 논리 이미지, Hash, 접근 기록, CoC를 체계적으로 관리한다.
- <strong>AI-assisted Analysis</strong>: 대량 문서 분류나 멀티미디어 검색을 보조할 수 있지만, 모델 결과는 원본 Artifact와 사람이 검증해야 한다.

## 정리

Digital Forensics는 과학적 방법과 절차적 신뢰성을 함께 요구한다. 디지털 증거는 복제하기 쉽지만 변경도 쉽고, 휘발성과 대규모·분산성이라는 특성을 가진다. Hash는 무결성을, Chain of Custody는 증거의 연속적인 관리 과정을 설명한다. 최종 결론은 하나의 Artifact가 아니라 여러 출처의 흔적과 조사 절차를 함께 근거로 삼아야 한다.

## 연습 문제

1. 디지털 데이터와 Digital Evidence의 차이를 설명한다.
2. Hash 값이 같다는 사실만으로 Authenticity 전체가 입증되지 않는 이유를 설명한다.
3. 전원이 켜진 서버에서 로그아웃 세션과 네트워크 연결을 조사해야 한다. 수집 우선순위를 어떻게 정해야 하는가?

## 풀이

### 1번

디지털 데이터는 전자적으로 저장된 정보 전체를 의미한다. Digital Evidence는 그중 사건과 관련성이 있고, 적절한 수집·보존·분석 절차를 거쳐 사실을 입증하거나 반박하는 데 사용할 수 있는 데이터이다.

### 2번

Hash 일치는 수집한 두 데이터의 내용이 동일하다는 강한 무결성 근거이다. 그러나 최초 수집 대상이 어디에서 왔는지, 수집 전 누가 관리했는지, 특정 계정이나 사용자가 실제 생성했는지는 Hash만으로 알 수 없다. 수집 경위, CoC, 메타데이터, 다른 로그가 함께 필요하다.

### 3번

전원을 끄면 사라지는 RAM, 실행 프로세스, 네트워크 연결, 로그인 세션을 먼저 수집한다. 이후 저장장치 이미지와 로그 등 비휘발성 데이터를 확보한다. 수집 도구 실행 자체가 시스템을 변경하므로 사용한 명령, 시각, 도구 버전과 예상 영향을 기록해야 한다.
