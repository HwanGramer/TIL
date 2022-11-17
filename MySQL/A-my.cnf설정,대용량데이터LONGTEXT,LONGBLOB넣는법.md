# 영화정보데이터베이스 구축하기
 영화의 정보와 대본 , 영상이 담긴 데이터베이스를 만들어보자. 


# LONGTEXT , LONGBLOB
    mySQL은 LOB(LargeObject:대량의 데이터)을 저장하기 위해서 LONGTEXT , LONGBLOB 데이터 형식을 지원한다. 지원되는 데이터 크기는 약4GB 크기의 파일을 하나의 데이터로 저장할 수 있다.
    예를 들면 장편소설이나 드라마대본같은 큰 텍스트 파일이라면 그 내용을 전부 LONGTEX형식으로 지정된 하나의 컬럼에 넣을 수 있다.
    동영상 파일과 같은 큰 바이너리 파일이라면 그 내용을 전부 LONGBLOB 형식으로 지정된 하나의 컬럼에 넣을 수 있다.
    LONGTEXT = 대본같은 긴문장의 텍스트 , LONGBLOB = 동영상같은 큰 바이너리파일

<br><br>

먼저 테이블을 만들어주겠다. 

```
CREATE TABLE movietbl(
	movie_id INT,
	movie_title VARCHAR(30),
	movie_director VARCHAR(20),
	movie_star VARCHAR(20),
	movie_script LONGTEXT,
	movie_film LONGBLOB
) DEFAULT CHARSET=utf8mb4;
```

여기서 자세히 살펴봐야될건 movie_script와 movie_film의 자료형이다. 

테이블이 만들어졌다면 나의 컴퓨터에있는 txt파일과 mp4파일을 데이터베이스에 삽입해보자. 

```
INSERT INTO movietbl VALUES(
    1 , '쉰들러 리스트' , '스틸버그' '리암 리슨', 
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Schindler.txt'),
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Schindler.mp4')
);
```
하지만 INSERT가 되지 않을거다. 여기서 INSERT하기전에 환경변수 설정을 먼저 해주어야한다. 
<br><br><br>

***
<br><br>

# my.cnf설정파일에서 환경변수 셋팅하기
내 폴더에있는 데용량데이터를 넣기위해 딱 2가지를 설정해 주겠다. <br>
mysql 환경변수 max_allowed_packet와 secure_file_priv변경하는법

<br><bt>

먼저  MAC OS 기준으로 MySQL설정파일 my.cnf를 찾아야한다. 터미널에 mysql --help | grep my.cnf를 입력하면 my.cnf의 위치를 알 수 있다.
```
mysql --help | grep my.cnf
```
<br>
my.cnf의 파일위치를 알 수 있다. 나는 /opt/homebrew/etc/my.cnf라는 경로가 나왔다. 이제 vi편집기로 이 파일을 열어서 편집하자.

```
vi /opt/homebrew/etc/my.cnf
```
<br>

# 1. max_allowed_packet
<br>
max_allowed_packet는 시스템환경변수이다. 이 변수의 값이 기본값으로 4MB정도 밖에 되지않아서 업로드가 되지않았다. 수정해줘야한다.

```
max_allowed_packet = 1024M
```
my.cnf파일에 이렇게 추가하거나 편집해주자. 업로드용량을 1024M로 설정해준 것이다.

# 2. secure-file-priv
<br>
secure-file-priv도 환경변수이다. 업로드할 폴더를 허용해주어야되는데 이 변수안에 폴더의 경로를 넣어주면 허용이된다.

```
secure-file-priv = "/Users/maeng-yonghwan/Desktop/movies"
```
이렇게 추가해주자. 그럼 저 폴더의 경로는 보안이 허용이되었다. 

<br>

    두가지를 모두 수정했다면 esc->:wq 수정완료 mysql.server를 껐다가 킨다.

<br>

*** 
<br>

my.cnf 파일구성
```
# Default Homebrew MySQL server config
[mysqld]
# Only allow connections from localhost
bind-address = 127.0.0.1
mysqlx-bind-address = 127.0.0.1
max_allowed_packet = 1024M
secure-file-priv = "/Users/maeng-yonghwan/Desktop/movies"
```
우리는 max_allowed_packet와  secure-file-priv 시스템변수를 설정해주었다

<br>

이제 mysql에 접속하여  시스템환경변수를 확인해보자.
```
SHOW variables LIKE 'max_allowed_packet';
```
결과
```
+--------------------+------------+
| Variable_name      | Value      |
+--------------------+------------+
| max_allowed_packet | 1073741824 |
+--------------------+------------+
```
<br>

주의 : secure-file-priv를 설정했지만 secure_file_priv를 입력해야 볼 수 있다.
```
SHOW variables LIKE 'secure_file_priv';
```
결과
```
+------------------+---------------------------------------+
| Variable_name    | Value                                 |
+------------------+---------------------------------------+
| secure_file_priv | /Users/maeng-yonghwan/Desktop/movies/ |
+------------------+---------------------------------------+
```
<br>

***

<br>

이제 다시 INSERT를 해보자.
```
INSERT INTO movietbl VALUES(
    1 , '쉰들러 리스트' , '스틸버그' ,'리암 리슨', 
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Schindler.txt') ,
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Schindler.mp4')
);

INSERT INTO movietbl VALUES(
    2 , '쇼생크 탈출' , '프랭크 다라본트' , '팀 로빈스',
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Shawshank.txt'),
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Shawshank.mp4')
);

INSERT INTO movietbl VALUES(
    3 , '라스트 모히칸' , '마이클 안' , '다니엘 데이 루이스',
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Mohican.txt'),
    LOAD_FILE('/Users/maeng-yonghwan/Desktop/movies/Mohican.mp4')
);
```

```
SELECT * FROM movietbl;
```
MySQLWorkbench에서 확인해보면 자세히 볼 수 있다. 터미널에서 볼려면 에러가났다.

<br><br>

# DB데이터 밖으로 꺼내서 저장하기
```
SELECT movie_script FROM movietbl WHERE movie_id = 1 
	INTO OUTFILE '/Users/maeng-yonghwan/Desktop/movies/Schindler_out.txt' 
    LINES TERMINATED BY '\\n'; 
```
-- movie_id가 1인 컬럼의 movie_script를 가져온다 

-- 가져온 movie_sciprt를 밖에 폴더에 다운로드한다.

-- INTO OUTFILE은 SELECT에서 나온 *텍스트데이터* 를 파일이름을 지정해서 내보낸다. OUTFILE은 텍스트를 내보낼때 사용된다.

-- 줄바꿈 문자도 그대로 같이 저장한다는 의미 
```
SELECT movie_film FROM movietbl WHERE movie_id = 1
	INTO DUMPFILE '/Users/maeng-yonghwan/Desktop/movies/Schindler_out.mp4'
```
-- movie_id가 1인 컬럼의 movie_script를 가져온다 

-- 가져온 movie_sciprt를 밖에 폴더에 다운로드한다.

-- INTO DUMPFILE은 LONGBLOB형식에 맞는다.

<br>

### <em>/Users/maeng-yonghwan/Desktop/movies/폴더에 가보면 잘 저장되있는걸 볼 수 있다. 