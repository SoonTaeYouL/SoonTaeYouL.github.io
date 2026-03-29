---
title: 코딩 테스트 기초 자바편
description: 계속 추가해 나갈 예정입니다.
categories: [Coding Test, JAVA]
tags: [Coding Test, JAVA]
---

# 입력 받기
## Scanner
```java
import java.util.Scanner;

class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        // 정수형/실수형
        byte b = sc.nextByte();
        short s = sc.nextShort();
        int i = sc.nextInt();
        float f =sc.nextFloat();
        long l = sc.nextLong();
        double d = sc.nextDouble();
        boolean b = sc.nextBoolean();

        // 문자열

        // next()는 공백 기준 => Hello world 입력
        String stringA = sc.next(); // Hello
        String stringB = sc.next(); // world

        // nextLine()은 엔터 기준
        String stringC = sc.nextLine();

        System.out.println();

        sc.close();
    }
}
```
<br>

## BufferedReader
```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

class Main{
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringTokenizer st = new StringTokenizer(br.readLine());
        
        System.out.println((Integer.parseInt(st.nextToken()) + Integer.parseInt(st.nextToken())));
        bw.close();
    }
}
```