# Model 정의하기

- 게시물에 필요한 데이터가 어떤것이 필요한지를 정의해주기 위해서 게시물의 모델을 만들어주자.

- 예를들어 게시물 데이터에는 ID가 필요하고 이름이나 설명등이 필요할거다.

        폴더안에 모델이름.model.ts 생성

EX) board.model.ts -> 생성

1. 모델을 정의하기 위해서는 Class또는 Interface를 이용하면된다. 

<br>

2.      export interface Board{ 
            id : string;
            title : string;
            description : string;
            status : BoardStatus
        }

<br>

3. Board 인터페이스의 status를 보면 타입이 BoardStatus로 되어있다. BoardStatus는 enumeration을 이용했다.

<br>

4.      export enum BoardStatus{
            PUBLIC = 'PUBLIC',
            PRIVATE = 'PRIVATE'
        }


5. enumeration은 이 두가지 상태 이외에는 나오면 안되기 때문에 이 두가지의 상태만 나올 수 있게 하기위해서 사용한다. PUBLIC과 PRIVATE만 사용할 수 있게된다.