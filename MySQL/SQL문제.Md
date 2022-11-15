# 유저테이블 다루기
<img width="700" src="https://user-images.githubusercontent.com/100682468/201804870-5222a911-1fa0-4e1f-9353-e9ff9160a934.png">

* ## #1<br>
    제일 작은 키와 큰키의 유저<br>
    <img width="200" src="https://user-images.githubusercontent.com/100682468/201803101-eca803ed-c129-423e-a284-43ba58c21707.png">
    
    ` select userID , height from usertbl WHERE height=(select MAX(height) from usertbl) OR height=(select MIN(height) from usertbl);`
    ## #2<br>
    휴대폰번호가 있는 유저의 명수<br>
    <img width="400" src="https://user-images.githubusercontent.com/100682468/201803121-e542b1d8-a696-4434-b1ba-0693501bfedb.png">
    `select count(mobile1) from usertbl;`
***
<br><br>

# 구매테이블 다루기
<img width="450" src="https://user-images.githubusercontent.com/100682468/201804574-bc32af1c-0cc3-4dea-8506-7dcddce98b76.png">

* ## #1<br>
    표대로 출력하기<br>
    <img width="950" src="https://user-images.githubusercontent.com/100682468/201803068-1a3bff2c-b230-41de-8827-c21040478395.png">
    `select userId , SUM(price*amount) AS '총구매액' , AVG(price*amount) AS '평균구매액' , count(1)AS '왔다간횟수' , MAX(price) AS '제일비싸게산물건의값' , SUM(price*amount)/SUM(amount) AS '1회구매금액평균' , SUM(amount) FROM buytbl GROUP BY userId ORDER BY MAX(price);`
    <br>
    
    ## #2<br>
    총구매액이 1000이상인 유저 가져오기<br>
    <img width="400" src="https://user-images.githubusercontent.com/100682468/201803112-16f3440d-1522-45a7-94df-54f449d69296.png">
    `select userId , SUM(price*amount) from buytbl GROUP BY userId HAVING SUM(price*amount) > 1000;`
    <br>

    ## #3<br>
    표대로 출력하기<br>
    <img width="600" src="https://user-images.githubusercontent.com/100682468/201803117-342c581a-3c18-46fb-8eee-e1cfe4239678.png">
    `select prodName , price , SUM(amount) AS '팔린갯수' , SUM(price*amount) AS '총판매액' from buytbl GROUP BY prodName , price;`
***

# AUTO INCREMENT다루기

* ## #1<br>
    AUTO_INCREMENT기본값 설정하기<br>
    <img width="300" src="https://user-images.githubusercontent.com/100682468/201803103-a1c7fc98-68f1-42e5-b1a9-3dc7c5d5660c.png"><br>
    `ALTER TABLE 테이블이름 AUTO_INCREMENT = 100;`
***
<br><br>