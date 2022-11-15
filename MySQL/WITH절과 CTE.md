# WITH절과 CTE
* ## WITH절과 CTE(Common Table Expression)란
    WITH절은 CTE(Common Table Expression)을 표현하기 위한 구문으로 MySQL 8.0이후 부터 사용할 수 있다. CTE는 기존의 뷰 , 파생 테이블 , 임시 테이블 등으로 사용되던 것을 대신할 수 있으며,
    더 간결한 식으로 보여지는 장점이 있다. CTE는 ANSI-SQL99표준에서 나온것임. 기존의 SQL은 ANSI-SQL92를 기준으로 한다. 하지만 최근의 DBMS는 대개 ANSI-SQL99와 호환되므로 다른 DBMS에서도 
    같거나 비슷한 방식으로 응용된다.<br><br>
    CTE는 비재귀적CTE와 재귀적 CTE두 가지가 있다. 주로사용되는건 비재귀적CTE 이다.
***
    
* ## 비재귀적 CTE

    비재귀적 CTE는 말 그대로 재귀적이지 않은 CTE다. 단순한형태로 , 복잡한 쿼리문장을 단순화 시키는 데에 적합하게 사용될 수 있다. 형식은
    ```
      WITH CTE_테이블이름(열이름)
      AS
      (
        <쿼리문>
      )
      SELECT 열이름 FROM CTE_테이블이름;
    ```
    비재귀적 CTE에는 <b>SELECT 필드들 FROM CTE_테이블이름</b> 구문 외에 UPDATE 등도 가능하지만 , <b>주로 사용되는건 SELECT문 이다</b>
    
    즉, SELECT문에서 나온 데이터들을 aaa라는 이름을 붙혀 테이블로 사용할 수 있다는거다.
    
    ``` 
      WITH aaa(커스텀열이름1 , 커스텀열이름2)
      AS
      (SELECT 열1 , 열2 FROM 테이블이름)
    ```
    SELECT문에서 나온 데이터가 aaa라는 이름의 테이블에 삽입되서 aaa테이블이 만들어졌다. aaa테이블에 쿼리문을 사용할 수 있다.
    
    * CTE를 유용하게 쓸 수 있게 생각해보자
