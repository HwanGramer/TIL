# SQL의 분류

* ## DML

  DML데이터 조작어(Data Manipulation Language:데이터 조작 언어)은 데이터를 조작(선택 , 삽입 , 수정 , 삭제)하는 데 사용되는 언어다. DML구문이 사용되는 대상은 테이블의 행이다. 그러므로 DML을 사용하기 위해서는 꼭 그 이전에 테이블이 정의되어 있어야한다.
  SQL문 중에 SELECT , INSERT , UPDATE , DELETE가 이 구문에 해당된다. 또 트랜잭션(Transaction)이 발생하는 SQL도 이 DML이다. 
  트랜잭션이란 쉽게 표현하면 , 테이블의 데이터를 변경(입력/수정/삭제)할 때 실제 테이블에 완전히 적용하지 않고 , 임시로 적용시키는 것을 말한다. 그래서 만약 실수가 있었을 경우에 임시로 적용시킨 것을 취소시킬 수 있게 해준다.

  -_SELECT도 트랜잭션을 발생시키기는 하지만 , INSERT/UPDATE/DELETE와는 조금 성격을 달리하므로 별도로 생각하는것이 좋다._-
*** 

* ## DDL
  DDL데이터 정의어(Data Definition Language:데이터 정의 언어)은 데이터베이스 , 테이블 , 뷰 , 인덱스 등의 데이터베이스 개체를 생성/삭제/변경하는 역할을 한다. 자주 사용하는 DDL은 CREATE , DROP , ALTER 등이다. DDL은 트랜잭션을 발생시키지 않는다. 따라서 되돌림(ROLLBACK)이나 완전 적용(COMMIT)을 시킬 수 없다. 즉 DDL문은 실행 즉시 MySQL에적용된다
  
***

* ## DCL
  DCL데이터 제어어(Data Control Language:데이터 제어 언어)은 사용자에게 어떤 권한을 부여하거나 빼앗을 때 주로 사용하는 구문으로, GRANT/REVOKE/DENY등이 이에 해당된다.
***
