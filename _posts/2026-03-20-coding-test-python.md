---
title: 코딩 테스트 기초 파이썬편
description: 계속 추가해 나갈 예정입니다.
categories: [Coding Test, Python]
tags: [Coding Test, Python]
---

# 입력 받기

```python
import sys

# string

# 문자열 1개
s = sys.stdin.readline().strip()
# 리스트로 반환
strings = sys.stdin.readline().spilt()

# int

# 정수 1개
i = int(sys.stdin.readline())
# 정수 여러개
a , b = map(int, sys.stdin.readline().split())
# 리스트 반환
data = list(map(int, sys.stdin.readline().split()))
# 2차원 배열
rows, cols = map(int, sys.stdin.readline().split())
matrix = [list(map(int, sys.stdin.readline().split())) for r in range(rows)]
```
<br>

# 자료형
## 실수형

```python
# 둘 다 실수로 처리
a = .5
b = 5. 

# 실수의 합 => round(수, 자리수) 반올림
hap = round(0.3 + 0.4, 1) 
```

## 문자열 str

```python
s = "Hello"
s.lower() # 소문자
s.upper() # 대문자
s.find("e") # 1
s.count("l") # 2
```

## List
### List 생성

```python
# 1차원 List
list1 = [1,2,3]
list2 = [4,5,6]
list3 = []
list4 = [0]*n

# (N * M) 2차원
array = [[0] * M for _ in range(N)]

```

### List 함수

```python
# 뒤에 추가
list.append(i)
# 삽입
list.insert(i, v) i번 인덱스에 v 추가
# 꺼내기
list.pop() # 마지막 원소
list.pop(i) # i번 인덱스 꺼네기
# 제거
list.remove(v) # v값 제거 => 없으면 에러
del list[i] # i번 인덱스 원소 삭제
# index 반환
list.index(v) # v값이 있는 인덱스 반환
# 정렬
list.sort() # 오름차순
list.sort(reverse = True) # 내림차순
new = sorted(list, reverse = True) # 새로운 리스트 반환
# 뒤집기
list.reverse()
# 비우기
list.clear()
# 길이
len(list)
```

## 딕셔너리 Dictionary

```python
data = dict()
data['사과'] = 'Apple'

# list 반환
data.keys()
data.values()
```

## 집합 Set

```python
# 선언
s = {1,2,3,4}
# 추가
s.add(5)
# 여러개 추가
s.update([5,6,7])
# 삭제
s.remove(4)
# 중복제거
l = [1,1,2,3,4,5,5,6]
new_l = sorted(list(set(l)))
```


# <추가 예정 ...>