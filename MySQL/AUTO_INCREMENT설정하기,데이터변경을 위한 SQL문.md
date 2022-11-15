# Learn-DATABASE
* ## AUTO_INCREMENT
-테이블의 속성이 AUTO_INCREMENT로 지정되어 있다면 , INSERT에서는 해당 열이 없다고 생각하면된다. AUTO_INCREMENT는 자동으로 1부터 증가한다. <br>
-AUTO_INCREMENT로 지정할 때는 꼭 PRIMARY KEY또는 UNIQUE로 지정해주어야하고 , 데이터 형은 숫자 형식만 사용가능하다. <br>
-INSERT문에서 NULL값을 지정하면 자동으로 값이 입력된다.<br>

### - ALTER TABLE 테이블이름 AUTO_INCREMENT = 100;<br>
    AUTO_INCREMENT가 100부터 시작된다.
 
### - SET @@auto_increment_increment=3;<br>
    AUTO_INCREMENT를 1000으로 바꾸고 바로 SET @@...을 입력해주면 3씩 증가하게된다.
    테이블이름을 따로 지정하지않아도 바로 해줘도 된는거같다.
 
 ***
 <br><br>
* ## 조건부 데이터 입력 , 변경
INSERT , UPDATE <br>

### - INSERT IGNORE INTO 테이블(열1 , 열2 ...) VALUES(값1 , 값2 ....)<br>
    만약 위 쿼리를 3개를 다른값으로 날린다고 한들 에러가 나도 넘어가고 다른정상적인 쿼리들만 실행한다. 즉 에러가나면 이쿼리는 무시된다.
 
### - INSERT INTO 테이블 VALUES(값1,값2,값3) ON DUPLICATE KEY UPDATE 열2=값2 , 열3=값3; <br>
    만약 INSERT할려는 데이터의 PK가 다른행과 겹처있다면 그 행의 데이터를 UPDATE할 수 있다. 즉 없으면 넣고 , 있으면 바꾼다.
***
<br><br>
* ## INSERT 데이터 삽입
INSERT문 기본 <br>

### - INSERT INTO 테이블(열1 , 열2 ...) VALUES(값1 , 값2 ....)<br>
    열에 순서에맞게 값을 입력한다
### - INSERT INTO 테이블 VALUES(값1,값2,값3)<br>
    모든열에 순서에맞게 값을 입력한다
### - INSERT INTO 테이블 VALUES (값1,값2,값3) , (값1,값2,값3) , (값1,값2,값3)<br>
    3건의 데이터를 한번에 넣을 수 있다.
### - INSERT INTO 테이블 VALUES SELECT문 <br>
    SELECT문에서 나온 데이터가 INSERT된다.
 
### - CREATE TABLE 테이블이름 SELECT문 <br>
    테이블이 만들어지면서 SELECT문에서 나온 데이터들이 INSERT된다.
***

<br><br>
* ## UPDATE 데이터 수정
UPDATE문 기본 : UPDATE에서 WHERE절을 생략하면 테이블 전체의 행이변경됨<br>

### - UPDATE 테이블이름 SET 열1=값1 , 열2=값2 WHERE 조건;<br>
    변경하고싶은 열에따른 값을 입력해준다.
### - UPDATE 테이블이름 SET 열1=값1 ;<br>
    WHERE절이 없다면 모든테이블의 열1은 값1로 바뀌게된다. 가끔은 전체테이블의 내용을 변경할때가 있다면 사용해야한다. ex)모든제품단가인상15%
 
***
<br><br>
* ## DELETE FROM 데이터 삭제
DELETE문 기본 : UPDATE와 거의 비슷한 개념이다. 행 단위로 삭제한다. WHERE을 쓰는게 일반적임<br>

### - DELETE FROM 테이블이름 FROM 조건; <br>
    조건에 따른 행을 삭제한다.
### - DELETE FROM 테이블이름 FROM 조건 LIMIT 5; (조건여러행)<br>
    같은 조건의 행이 여러개라면 그중 상위 5개만 삭제한다는 뜻이다. 
### - DELETE FROM 테이블 , DROP TABLE 테이블 , TRUNCATE TABLE => 테이블 따로 설명(다른페이지)<br>
***









