---
title: "2. Argument와 Basic Methods of Proof"
description: "유효한 논증과 기본 추론 규칙을 정리하고 Direct, Contrapositive, Contradiction, Cases 증명법을 예제로 익힌다."
date: "2026-01-05"
category: "이산수학"
tags: ["discrete-mathematics", "argument", "proof", "contrapositive", "contradiction"]
domain: "discrete-mathematics"
format: "study-note"
series: "discrete-mathematics"
seriesOrder: 2
featured: false
draft: false
---

수학에서 증명은 계산 결과를 확인하는 절차가 아니라, 정해진 가정에서 결론이 반드시 따라온다는 사실을 논리적으로 보이는 과정이다. 어떤 증명법을 선택하더라도 핵심은 가정과 결론을 분명히 구분하고, 각 단계가 앞선 사실에서 정당하게 도출되는지 확인하는 것이다.

## Argument와 Validity

Argument는 여러 전제와 하나의 결론으로 이루어진다. 전제를 <span class="math-inline" data-tex-b64="cF8xLHBfMixcbGRvdHMscF9u"></span>, 결론을 <span class="math-inline" data-tex-b64="cQ=="></span>라고 하면 논증 전체는 다음 조건명제로 나타낼 수 있다.

<div class="math-display" data-tex-b64="KHBfMVxsYW5kIHBfMlxsYW5kXGNkb3RzXGxhbmQgcF9uKVx0byBx"></div>

이 식이 tautology이면 해당 논증은 <strong>valid</strong>하다. 즉 전제가 모두 참인 상황에서 결론이 거짓인 경우가 한 번도 없어야 한다.

## 기본 추론 규칙

가장 자주 사용하는 두 규칙은 Modus Ponens와 Modus Tollens이다.

<div class="math-display" data-tex-b64="XGJlZ2lue2FycmF5fXtjQHtccXF1YWR9Y30KXGJlZ2lue2FycmF5fXtjfQpwXFwgcFx0byBxXFwgXGhsaW5lIHEKXGVuZHthcnJheX0KJgpcYmVnaW57YXJyYXl9e2N9CnBcdG8gcVxcIFxuZWcgcVxcIFxobGluZSBcbmVnIHAKXGVuZHthcnJheX1cXApcdGV4dHtNb2R1cyBQb25lbnN9Jlx0ZXh0e01vZHVzIFRvbGxlbnN9ClxlbmR7YXJyYXl9"></div>

예를 들어 “프로그램이 정상 종료하면 결과 파일이 생성된다”와 “프로그램이 정상 종료했다”가 모두 참이면 결과 파일이 생성되었다고 결론 내릴 수 있다.

반대로 다음 추론은 일반적으로 잘못되었다.

- <span class="math-inline" data-tex-b64="cFx0byBx"></span>, <span class="math-inline" data-tex-b64="cQ=="></span>이므로 <span class="math-inline" data-tex-b64="cA=="></span>이다: affirming the consequent
- <span class="math-inline" data-tex-b64="cFx0byBx"></span>, <span class="math-inline" data-tex-b64="XG5lZyBw"></span>이므로 <span class="math-inline" data-tex-b64="XG5lZyBx"></span>이다: denying the antecedent

## Direct Proof

Direct Proof는 가정을 출발점으로 사용하여 결론까지 바로 나아가는 증명이다.

<strong>정리.</strong> 두 짝수의 합은 짝수이다.

짝수 <span class="math-inline" data-tex-b64="YSxi"></span>가 주어졌다고 하자. 정의에 따라 어떤 정수 <span class="math-inline" data-tex-b64="bSxu"></span>이 존재하여

<div class="math-display" data-tex-b64="YT0ybSxccXF1YWQgYj0ybg=="></div>

이다. 따라서

<div class="math-display" data-tex-b64="YStiPTJtKzJuPTIobStuKQ=="></div>

이고 <span class="math-inline" data-tex-b64="bStu"></span>은 정수이므로 <span class="math-inline" data-tex-b64="YSti"></span>는 짝수이다.

Direct Proof에서는 결론을 미리 가정하면 안 된다. “결론이 참이라고 두고 식을 정리했더니 참이 나왔다”는 방식은 순환논증이 될 수 있다.

## Proof by Contrapositive

<span class="math-inline" data-tex-b64="cFx0byBx"></span>를 증명하는 대신 동치인 대우 <span class="math-inline" data-tex-b64="XG5lZyBxXHRvXG5lZyBw"></span>를 증명한다. 결론의 부정이 더 구체적인 정보를 줄 때 유용하다.

<strong>정리.</strong> 정수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 <span class="math-inline" data-tex-b64="bl4y"></span>이 짝수이면 <span class="math-inline" data-tex-b64="bg=="></span>도 짝수이다.

대우는 “<span class="math-inline" data-tex-b64="bg=="></span>이 홀수이면 <span class="math-inline" data-tex-b64="bl4y"></span>도 홀수이다”이다. <span class="math-inline" data-tex-b64="bj0yaysx"></span>이라 두면

<div class="math-display" data-tex-b64="bl4yPSgyaysxKV4yPTRrXjIrNGsrMT0yKDJrXjIrMmspKzE="></div>

이므로 <span class="math-inline" data-tex-b64="bl4y"></span>은 홀수이다. 따라서 원래 명제도 참이다.

## Proof by Contradiction

증명하려는 명제의 부정을 가정한 뒤, 그 가정이 이미 알고 있는 사실이나 자기 자신과 모순됨을 보인다.

<strong>정리.</strong> 소수는 무한히 많다.

소수가 유한하게 <span class="math-inline" data-tex-b64="cF8xLHBfMixcbGRvdHMscF9u"></span>개뿐이라고 가정한다. 다음 수를 생각하자.

<div class="math-display" data-tex-b64="Tj1wXzFwXzJcY2RvdHMgcF9uKzE="></div>

<span class="math-inline" data-tex-b64="Tg=="></span>은 1보다 크므로 어떤 소수로 나누어진다. 그러나 각 <span class="math-inline" data-tex-b64="cF9p"></span>로 <span class="math-inline" data-tex-b64="Tg=="></span>을 나누면 나머지가 1이므로 어느 <span class="math-inline" data-tex-b64="cF9p"></span>도 <span class="math-inline" data-tex-b64="Tg=="></span>을 나누지 못한다. 이는 모든 소수를 이미 나열했다는 가정과 모순이다. 따라서 소수는 무한히 많다.

모순 증명에서는 정확히 무엇을 부정했는지 명시하는 것이 중요하다. 결론만 막연히 반대로 두기보다 Quantifier까지 포함해 부정해야 한다.

## Proof by Cases

가능한 상황을 서로 빠짐없이 나누고 각 경우에서 결론을 보인다. 모든 정수는 짝수 또는 홀수라는 분할이 대표적이다.

<strong>정리.</strong> 어떤 무리수 <span class="math-inline" data-tex-b64="YSxi"></span>가 존재하여 <span class="math-inline" data-tex-b64="YV5i"></span>는 유리수이다.

<span class="math-inline" data-tex-b64="eD0oXHNxcnQyKV57XHNxcnQyfQ=="></span>를 생각한다.

- <span class="math-inline" data-tex-b64="eA=="></span>가 유리수이면 <span class="math-inline" data-tex-b64="YT1iPVxzcXJ0Mg=="></span>로 두면 된다.
- <span class="math-inline" data-tex-b64="eA=="></span>가 무리수이면 <span class="math-inline" data-tex-b64="YT14"></span>, <span class="math-inline" data-tex-b64="Yj1cc3FydDI="></span>로 둔다. 그러면

<div class="math-display" data-tex-b64="YV5iPVxsZWZ0KChcc3FydDIpXntcc3FydDJ9XHJpZ2h0KV57XHNxcnQyfT0oXHNxcnQyKV4yPTI="></div>

이다.

어느 경우인지 실제로 결정하지 않아도 두 경우가 전체 가능성을 덮으므로 존재 명제가 증명된다.

## 반례와 존재 증명

전칭명제 <span class="math-inline" data-tex-b64="XGZvcmFsbCB4XCxQKHgp"></span>가 거짓임을 보이려면 <span class="math-inline" data-tex-b64="XG5lZyBQKHgp"></span>를 만족하는 원소 하나만 찾으면 된다. 이를 <strong>반례(counterexample)</strong>라고 한다.

반면 존재명제는 조건을 만족하는 구체적인 대상을 제시하는 constructive proof로 증명할 수 있다. 다만 위의 무리수 거듭제곱 예제처럼 대상을 직접 계산하지 않고 경우를 나누어 존재만 보이는 nonconstructive proof도 가능하다.

## Soundness와 Completeness

형식 논리 체계에서 <strong>soundness</strong>는 증명 가능한 명제가 의미론적으로도 참이라는 뜻이다. 즉 잘못된 결론을 증명하지 않는다.

<div class="math-display" data-tex-b64="XEdhbW1hXHZkYXNoXHZhcnBoaVxxdWFkXExvbmdyaWdodGFycm93XHF1YWRcR2FtbWFcbW9kZWxzXHZhcnBoaQ=="></div>

<strong>completeness</strong>는 의미론적으로 참인 명제를 체계 안에서 증명할 수 있다는 뜻이다.

<div class="math-display" data-tex-b64="XEdhbW1hXG1vZGVsc1x2YXJwaGlccXVhZFxMb25ncmlnaHRhcnJvd1xxdWFkXEdhbW1hXHZkYXNoXHZhcnBoaQ=="></div>

여기서 <span class="math-inline" data-tex-b64="XHZkYXNo"></span>는 형식적인 증명 가능성을, <span class="math-inline" data-tex-b64="XG1vZGVscw=="></span>는 모든 해석에서의 참을 나타낸다. 두 개념은 개별 증명의 기법이라기보다 논리 체계 전체가 얼마나 믿을 만하고 충분한지를 설명한다.

## 정리

Valid Argument는 전제가 참일 때 결론이 반드시 참인 논증이다. Direct Proof는 가정에서 바로 결론으로 나아가고, Contrapositive는 대우를, Contradiction은 부정에서 발생하는 모순을, Proof by Cases는 전체 경우의 분할을 이용한다. 명제의 형태를 먼저 분석하면 적합한 증명법을 선택하기 쉬워진다.

## 연습 문제

1. 두 홀수의 곱이 홀수임을 Direct Proof로 증명한다.
2. 정수 <span class="math-inline" data-tex-b64="bg=="></span>에 대해 <span class="math-inline" data-tex-b64="bl4y"></span>이 3의 배수가 아니면 <span class="math-inline" data-tex-b64="bg=="></span>도 3의 배수가 아님을 증명한다.
3. <span class="math-inline" data-tex-b64="XHNxcnQy"></span>가 무리수임을 Contradiction으로 증명한다.

## 풀이

### 1번

홀수 <span class="math-inline" data-tex-b64="YSxi"></span>를 <span class="math-inline" data-tex-b64="YT0ybSsx"></span>, <span class="math-inline" data-tex-b64="Yj0ybisx"></span>로 쓸 수 있다. 따라서

<div class="math-display" data-tex-b64="XGJlZ2lue2FsaWduZWR9CmFiJj0oMm0rMSkoMm4rMSlcXAomPTRtbisybSsybisxXFwKJj0yKDJtbittK24pKzEuClxlbmR7YWxpZ25lZH0="></div>

괄호 안은 정수이므로 <span class="math-inline" data-tex-b64="YWI="></span>는 홀수이다.

### 2번

대우를 증명한다. <span class="math-inline" data-tex-b64="bg=="></span>이 3의 배수이면 <span class="math-inline" data-tex-b64="bj0zaw=="></span>이고

<div class="math-display" data-tex-b64="bl4yPTlrXjI9Mygza14yKQ=="></div>

이므로 <span class="math-inline" data-tex-b64="bl4y"></span>도 3의 배수이다. 따라서 대우와 동치인 원래 명제가 성립한다.

### 3번

<span class="math-inline" data-tex-b64="XHNxcnQy"></span>가 유리수라고 가정한다. 서로소인 양의 정수 <span class="math-inline" data-tex-b64="YSxi"></span>에 대해 <span class="math-inline" data-tex-b64="XHNxcnQyPWEvYg=="></span>라고 쓸 수 있다. 제곱하면

<div class="math-display" data-tex-b64="YV4yPTJiXjI="></div>

이므로 <span class="math-inline" data-tex-b64="YV4y"></span>과 <span class="math-inline" data-tex-b64="YQ=="></span>는 짝수이다. <span class="math-inline" data-tex-b64="YT0yaw=="></span>를 대입하면

<div class="math-display" data-tex-b64="NGteMj0yYl4yXHF1YWRcTG9uZ3JpZ2h0YXJyb3dccXVhZCBiXjI9MmteMg=="></div>

이므로 <span class="math-inline" data-tex-b64="Yg=="></span>도 짝수이다. 그러면 <span class="math-inline" data-tex-b64="YSxi"></span>가 공약수 2를 가져 서로소라는 가정과 모순이다. 따라서 <span class="math-inline" data-tex-b64="XHNxcnQy"></span>는 무리수이다.
