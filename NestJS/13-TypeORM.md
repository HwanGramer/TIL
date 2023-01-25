# TypeORM 

*Type Object Relational Mapping*

<br>

- TypeORM은 node.js에서 실행되고 TypeScript로 작성된 객체 관계형 매퍼 라이브러리이다.
<br>

- TypeORM은 MySQL , PostgreSQL , MariaDB , SQLite , MS SQL Server , Oracle , SAP Hana 및 WebSQL과 같은 여러 데이터베이스를 지원한다.


<br>
<br>

# ORM

*Object Relational Mapping*

<br>

- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업이다.
<br>

- ORM을 이용한 개발은 객체와 데이터베이스의 변형에 유연하게 사용 할 수 있다.

<br>
<br>


# Object객체   <- 매핑 ->   관계형 DataBase
 객체지향 프로그래밍은 클래스사용   <->   관계형 데이터베이스는 테이블 사용


<br>
<br>

# EX)

<br>

typeORM

    const boards = Board.find({ title: 'Hello' , status: 'PUBLIC' });

<br>

Pure Javascript

    db.query('SELECT * FROM boards WHERE title = "Hello" AND status = "PUBLIC" , (err, result) => {
        if(err) {
        if(err) {
        throw new Error('Error') }
        boards = result.rows; 
    })


<br>
<br>

# TypeORM의 특징과 이점

- 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성한다.

- 데이터베이스에서 개체를 쉽게 삽입 , 업데이트 및 삭제할 수 있습니다.

- 테이블 간의 매핑 (일대일 , 일대 다 및 다 대다)을 만든다.

- TypeORM은 간단한 코딩으로 ORM 프레임 워크를 사용하기 쉽다.

- TypeORM은 다른 모듈과 쉽게 통합된다.


<br>
<br>
<br>



# TypeORM 사용하기


여기서 부터 작성하기 여기서 부터 작성하기 여기서 부터 작성하기 여기서 부터 작성하기 여기서 부터 작성하기 여기서 부터 작성하기 