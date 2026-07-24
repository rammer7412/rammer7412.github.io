---
title: "2. Data Representation, Encoding, and File Formats"
description: "Endian, Hex, 문자 인코딩, Timestamp, Base64, 압축과 File Signature를 포렌식 관점에서 정리한다."
date: "2026-02-21"
category: "디지털포렌식"
tags: ["digital-forensics", "data-representation", "encoding", "timestamp", "file-signature"]
domain: "digital-forensics"
format: "study-note"
series: "digital-forensics"
seriesOrder: 2
featured: false
draft: false
---
포렌식 도구가 보여주는 파일명과 시각은 결국 원시 Byte를 해석한 결과이다. 원시 데이터를 직접 확인하거나 도구 결과를 검증하려면 Byte Order, 문자 인코딩, Timestamp Epoch, File Signature 같은 표현 규칙을 이해해야 한다.

## Bit와 Digital Data Unit

Bit는 0 또는 1의 값을 갖는 디지털 데이터의 최소 단위이다. 여러 Bit를 묶어 더 큰 값을 표현한다.

| 단위 | 크기 | 비고 |
|---|---:|---|
| Bit | 1 bit | 최소 단위 |
| Nibble | 4 bits | Hex 한 자리 |
| Byte | 8 bits | 일반적인 주소 단위 |
| Word | 문맥에 따라 다름 | CPU 구조에서는 흔히 16·32·64 bits |
| KB | 보통 1,024 bytes | 저장장치 표기에서는 1,000 bytes가 사용되기도 함 |

포렌식에서는 “1 KB”가 어떤 기준인지 확인해야 한다. 도구가 Binary 단위인 KiB를 사용하는지, 제조사의 Decimal 단위를 사용하는지에 따라 표시 크기가 달라질 수 있다.

<strong>Physical Unit</strong>은 저장장치가 데이터를 물리적으로 다루는 Sector 같은 단위이고, <strong>Logical Unit</strong>은 파일과 레코드처럼 운영체제와 애플리케이션이 정보를 처리하는 단위이다.

## Hexadecimal Representation

Hex는 0~9와 A~F를 사용하여 16진수 값을 표현한다. Hex 한 자리는 4 bits이므로 Byte 하나는 Hex 두 자리로 표시된다.

```text
Binary  : 0100 1100
Hex     : 4C
Decimal : 76
ASCII   : L
```

Hex Editor에서 파일을 볼 때 왼쪽은 Offset, 가운데는 Byte 값, 오른쪽은 Printable Character를 보여주는 경우가 많다. 오른쪽 문자열만 보고 판단하지 말고 Offset과 원시 Hex 값을 함께 확인해야 한다.

## Endianness

Endianness는 여러 Byte로 이루어진 정수를 메모리나 파일에 어떤 순서로 저장하는지 나타낸다.

정수 <code>0x12345678</code>을 4 bytes로 저장한다고 하자.

```text
Big-Endian    : 12 34 56 78
Little-Endian : 78 56 34 12
```

- <strong>Big-Endian</strong>: 가장 큰 자리인 MSB를 먼저 저장한다.
- <strong>Little-Endian</strong>: 가장 작은 자리인 LSB를 먼저 저장한다.

Windows 구조와 x86 환경에서는 Little-Endian 값이 자주 등장한다. Hex에서 <code>E8 03 00 00</code>을 읽을 때 단순히 <code>0xE8030000</code>으로 보지 않고 Little-Endian 정수 <code>0x000003E8 = 1000</code>일 수 있음을 확인해야 한다.

Endianness는 Byte 순서를 바꾸는 것이지 각 Byte 안의 Bit 순서를 뒤집는 것이 아니다.

## Character Set과 Encoding

문자 집합은 문자와 Code Point의 대응을 정의하고, Encoding은 Code Point를 실제 Byte로 저장하는 방법을 정의한다.

### ASCII

ASCII는 기본적으로 7 bits를 사용하여 0~127의 문자, 숫자, 제어문자를 표현한다. 영문 텍스트와 파일 헤더에서 여전히 많이 사용된다.

### Unicode와 UTF

Unicode는 전 세계 문자를 하나의 Code Point 공간에 정의한다.

- <strong>UTF-8</strong>: 1~4 bytes의 가변 길이. ASCII와 호환된다.
- <strong>UTF-16</strong>: 기본 단위가 16 bits이며 일부 문자는 Surrogate Pair를 사용한다.
- <strong>UTF-32</strong>: Code Point를 일반적으로 4 bytes에 저장한다.

UTF-16과 UTF-32에서는 Byte Order를 표시하기 위해 BOM(Byte Order Mark)이 사용될 수 있다.

```text
FF FE : UTF-16 Little-Endian BOM
FE FF : UTF-16 Big-Endian BOM
EF BB BF : UTF-8 BOM
```

BOM이 항상 존재하는 것은 아니다. 파일 문맥, 패턴, 애플리케이션 정보를 함께 사용해 인코딩을 판단해야 한다. 인코딩을 잘못 선택하면 한글 경로와 사용자 이름이 깨져 Timeline 연결이 실패할 수 있다.

## Coordinate System과 위치정보

디지털포렌식에서 사진 EXIF, 차량·선박 로그, 모바일 위치정보를 분석할 때 좌표계가 중요하다.

- <strong>Geographic Coordinate System(GCS)</strong>: 위도와 경도로 지표상의 위치를 표현한다.
- <strong>Projected Coordinate System(PCS)</strong>: 지구 표면을 평면 좌표 X, Y로 투영한다.

WGS84는 GPS에서 널리 쓰이는 지리 좌표 기준이다. 다른 Datum이나 Projection을 같은 좌표로 오해하면 지도상 위치가 달라질 수 있다.

### NMEA Message

GPS 장치와 해양 전자장비에서 NMEA 문장이 사용된다.

```text
$GPRMC,....*checksum
```

일반적인 구조는 다음과 같다.

- <code>$</code>: 문장의 시작
- Talker ID: 데이터를 보낸 장치 계열
- Sentence Formatter: 문장 유형
- Comma-separated Fields: 시각, 위도, 경도, 상태 등
- <code>*checksum</code>: 문장 내용의 XOR Checksum

예를 들어 RMC는 Recommended Minimum Navigation Information을 제공하며, GGA는 Fix Data를 포함한다. 필드 의미와 시각 기준은 문장 종류와 표준 버전을 확인해야 한다.

## Timestamp Format

시간값은 “숫자 + 기준 시점(Epoch) + 단위 + Time Zone”의 조합이다. 숫자만 보고 날짜로 변환하면 안 된다.

### Unix Time

Unix Time은 일반적으로 1970-01-01 00:00:00 UTC 이후 경과한 초를 표현한다. 32-bit signed Unix Time은 2038년 문제를 갖지만, 현대 시스템은 64-bit 값을 사용하는 경우가 많다.

### Windows FILETIME

FILETIME은 1601-01-01 00:00:00 UTC 이후 경과한 100-nanosecond interval을 64 bits로 저장한다. NTFS Timestamp, Registry와 여러 Windows Artifact에서 사용된다.

### WebKit/Chromium Time

Chromium 계열 Artifact에서 1601-01-01 UTC 이후의 Microsecond를 사용하는 Timestamp를 자주 볼 수 있다. FILETIME과 Epoch는 같지만 단위가 다르다.

### 시간 분석의 주의점

- 저장값이 UTC인지 Local Time인지 확인한다.
- Daylight Saving Time 적용 여부를 확인한다.
- 장치 시계가 정확했는지 확인한다.
- Created, Modified, Accessed가 실제로 어떤 이벤트에서 갱신되는지 확인한다.
- 파일 복사·압축 해제·동기화가 Timestamp를 바꿀 수 있다.

보고서에는 원본 Timestamp, 변환 기준, 표시 Time Zone을 함께 적는 것이 좋다.

## Base64 Encoding

Base64는 Binary Data를 ASCII 문자로 표현하는 Encoding이다. 암호화가 아니다.

3 bytes, 즉 24 bits를 6 bits씩 네 묶음으로 나누고 각 값을 Base64 Alphabet에 대응시킨다.

```text
3 bytes → 24 bits → 6 bits × 4 → 4 characters
```

입력 길이가 3 bytes의 배수가 아니면 <code>=</code> Padding이 붙을 수 있다. 이메일 첨부, HTTP 데이터, JSON, 악성 스크립트에서 자주 등장한다. 디코딩한 결과가 다시 압축·암호화·다른 인코딩일 수 있으므로 한 번의 디코딩으로 분석을 끝내지 않는다.

## Percent Encoding

URL에서 직접 표현하기 어려운 Byte를 <code>%HH</code> 형태의 Hex로 나타낸다.

```text
space → %20
/     → %2F
한글  → UTF-8 bytes를 각각 %HH로 표현
```

Query Parameter를 분석할 때는 Percent Decoding 순서와 문자 인코딩을 확인해야 한다. 중첩 인코딩은 한 번 디코딩한 뒤에도 <code>%25</code> 같은 패턴을 남길 수 있다.

## Compression: DEFLATE와 INFLATE

DEFLATE는 LZ77 계열의 중복 참조와 Huffman Coding을 결합한 압축 방식이다. ZIP, PNG, HTTP Content-Encoding 등에 사용된다. INFLATE는 DEFLATE 데이터를 복원하는 과정이다.

압축된 데이터는 원시 Hex에서 사람이 읽을 수 있는 문자열이 거의 보이지 않을 수 있다. 파일 구조를 먼저 파악하고 올바른 Offset과 압축 방식을 적용해야 한다. 손상된 압축 파일에서도 일부 Stream이나 Entry가 독립적으로 복구될 수 있다.

## XOR와 ROT13

XOR는 같은 Key로 두 번 적용하면 원래 값으로 돌아온다.

```text
(data XOR key) XOR key = data
```

이 성질 때문에 간단한 Obfuscation과 Stream Cipher 구성에 사용된다. 하지만 짧은 반복 Key XOR는 Frequency와 Known Plaintext로 쉽게 분석될 수 있다.

ROT13은 영문 알파벳을 13칸 이동하는 치환이다. Windows UserAssist의 값 이름처럼 단순한 난독화에 사용되며 암호학적 보호 기능은 없다.

## File Structure와 File Signature

일반적인 파일은 다음 요소를 가질 수 있다.

- <strong>Header</strong>: Signature, 버전, 크기, Offset 등 해석에 필요한 정보
- <strong>Metadata</strong>: 생성 도구, 작성자, Timestamp, 해상도 등
- <strong>Body</strong>: 실제 콘텐츠

확장자는 운영체제와 사용자가 파일 종류를 식별하기 위한 이름의 일부일 뿐이다. 실제 파일 형식은 Header Signature와 내부 구조를 확인해야 한다.

```text
BMP : 42 4D          (ASCII BM)
ZIP : 50 4B 03 04    (ASCII PK...)
PNG : 89 50 4E 47 0D 0A 1A 0A
PDF : 25 50 44 46    (ASCII %PDF)
```

Signature만 일치한다고 파일 전체가 정상인 것도 아니다. Footer, 내부 Length, Offset, Checksum, Entry 구조를 함께 검사한다. Polyglot File은 하나의 Byte Sequence가 둘 이상의 형식으로 해석되도록 만들어질 수 있다.

## 포렌식 분석 흐름

원시 파일을 분석할 때는 다음 순서가 유용하다.

1. Hash와 파일 크기를 기록한다.
2. 확장자와 Signature가 일치하는지 확인한다.
3. Endianness와 Header 구조를 확인한다.
4. Embedded Data, 압축 Stream, 인코딩된 문자열을 찾는다.
5. Timestamp와 Metadata를 원본 기준으로 보존한다.
6. 추출물마다 Hash와 원본 Offset을 기록한다.

## 정리

포렌식 도구의 모든 결과는 Byte 해석에 기반한다. Endianness는 다중 Byte 값의 순서를, 문자 인코딩은 Byte와 문자의 대응을, Timestamp 형식은 숫자와 시각의 대응을 결정한다. Base64와 Percent Encoding은 표현 방식이며 암호화가 아니다. 확장자보다 File Signature와 내부 구조가 더 직접적인 형식 근거가 된다.

## 연습 문제

1. Little-Endian 4-byte 값 <code>78 56 34 12</code>를 Hex 정수로 해석한다.
2. Windows FILETIME과 Unix Time을 변환할 때 확인해야 할 차이 두 가지를 설명한다.
3. 확장자가 <code>.jpg</code>인데 Header가 <code>50 4B 03 04</code>로 시작한다. 어떤 조사를 수행해야 하는가?

## 풀이

### 1번

Little-Endian에서는 낮은 자리 Byte가 먼저 저장되므로 순서를 논리적으로 재배열하면 <code>0x12345678</code>이다.

### 2번

Epoch가 각각 1601-01-01과 1970-01-01로 다르고, FILETIME은 100 ns 단위인 반면 일반적인 Unix Time은 초 단위이다. 또한 UTC 저장 여부와 표시 Time Zone을 확인해야 한다.

### 3번

ZIP Signature일 가능성이 있으므로 원본을 보존한 채 ZIP 구조를 파싱한다. 단순 확장자 변경인지, Office 문서나 APK처럼 ZIP Container를 사용하는 형식인지, JPEG와 ZIP을 결합한 Polyglot인지 확인한다. 내부 Entry와 Footer, Offset을 검증하고 추출 결과의 Hash를 기록한다.
