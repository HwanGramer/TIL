# DELETE-TRUNCATE-DROP차이

## DELETE
 * #### DML(Data Manipulation Language) 데이터 조작어
 * DELETE는 테이블에 있는 데이터를 하나하나 선택하여 제거하는 방식으로 DELETE , DROP TRUNCATE중에서 가장 시간이
 많이걸린다.
 * WHERE절을 사용하지않고 테이블의 모든데이터를 삭제한다해도 , 내부에서는 한줄한줄 제거하는과정임.
 * 처리속도가 늦으므로 퍼포먼스에 좋지않은 영향을 줌.
 * 원하는 데이터만 골라서 삭제할때 사용하여야됨 WHERE절과 함께 사용
 * 데이터를 삭제하더라도 데이터가 담겨있던 Storage는 Release되지 않는다. 
 * DELETE된 데이터는 COMMIT명령어를 사용하기 전이라면 , ROLLBACK명령어를 통해 복구가능 
***

## TRUNCATE
 * #### DDL(Data Definition Language) 데이터 정의어
 * 처리속도는 DELETE보다 빠르다.
 * 테이블 컬럼, 제약조건 남겨져있다.
 * 전체 데이터를 한번에 삭제하는 방식이다. 안에있는 데이터들만 없어진다 즉 CREATE TABLE을 한 직후의 상태가된다.
 * 최초 생성되었을 당시의 Storage만 남기고 , 데이터가 남겨있던 Storage는 Release된다.
 * 자동으로 COMMIT된다. 이미 지워버린 데이터는 되돌릴 수 없다.
***

## DROP
 * #### DDL(Data Definition Language) 데이터 정의어
 * 테이블 자체를 완전히 날려버린다. 처음부터 없었던거처럼
 * 자동으로 COMMIT된다. 이미 지워버린 데이터는 되돌릴 수 없다.
 * 처리속도는 DELETE보다 빠르다.
***

|삭제|DELETE|TRUNCATE|DROP|
|------|---|---|---|
|명령어 종류|DML|DDL|DDL|
|처리속도|느림|빠름|빠름|
|ROLLBACK|COMMIT이전에 가능|불가능|불가능|
|COMMIT|사용자 COMMIT|AUTO COMMIT|AUTO COMMIT|
|로그|남김|안남김|안남김|
|Storage|데이터 모두 DELETE 해도 Storage 삭제X|최초 테이블 생성 시 할당된 Storage만 남기고 삭제 (테이블 스키마 유지)|Storage 삭제 (테이블 스키마 삭제)|

### 복구가 되지않는 TRUNCATE , DROP은 삭제되는게 빠르지만 신중히 사용하여야 될거같다.

