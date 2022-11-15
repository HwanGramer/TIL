* # LONGTEXT , LONGBLOB
        mySQL은 LOB(LargeObject:대량의 데이터)을 저장하기 위해서 LONGTEXT , LONGBLOB 데이터 형식을 지원한다. 지원되는 데이터 크기는 약4GB 크기의 파일을 하나의 데이터로 저장할 수 있다.
        예를 들면 장편소설이나 드라마대본같은 큰 텍스트 파일이라면 그 내용을 전부 LONGTEX형식으로 지정된 하나의 컬럼에 넣을 수 있다.
        동영상 파일과 같은 큰 바이너리 파일이라면 그 내용을 전부 LONGBLOB 형식으로 지정된 하나의 컬럼에 넣을 수 있다.
     ## LONGTEXT = 대본같은 긴문장의 텍스트 , LONGBLOB = 동영상같은 큰 바이너리파일
     
***

* # 변수의 사용
    * -SET @변수이름 = 변수의 값;  (변수의 선언 및 값 대입)
    * -SELECT @변수이름;  (변수의 값 출력)
    
    ```
    SET @myVar1 = 5;
    SET @myVar2 = 3;
    SET @myVar3 = 4.25;
    SET @myVar4 = '가수이름->';
    
    SELECT @myVar1;
    SELECT @myVar2 + @myVar3;
    
    SELECT @myVar4 , 열이름 FROM 테이블이름 조건 조건문;   - 컬럼이름은 @myVar4에 행에 차례대로 '가수이름->'으로 도배된다.
    
    PREPARE myQuery  - 쿼리를 준비한다.
        FROM 'SELECT * FROM 테이블이름 LIMIT ?';       - 준비한쿼리 LIMIT을 변수을 이용한다면 ?를 넣어준다.
    EXECUTE myQuery USING @myVar1;                  - 들어간 물음표자리에는 @myVar1의 값이 들어간다.
    ``` 
