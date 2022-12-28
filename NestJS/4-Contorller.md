# NestJS Controller

* 컨트롤러는 클라이언트에서 보내는 요청을 처리하고 클라이언트에 응답을 반환한다. 

<br>

* 컨트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의 된다. 

<br>

* 데코레이터는 인자를 Controller에 의해서 처리되는 경로를 받는다.

        @Controller('/home')


<br>

# Handler 

* 핸들러는 @GET , @Post , @Delete , @Put등과 같은 데코레이터로 장식된 컨트롤러 클래스 내의 단순한 메서드이다. 

* http요청의 메서드이다. 클라이언트에서 GET ,POST 요청을 보내면 해당 @GET , @POST로 요청이 온다. 

        @Get('/:id')

    경로를 넣어줄 수 있다


<br>


# Controller 생성하기

    nest g controller 컨트롤러이름 --no-spec

모듈을 생성하는것과 비슷하게 nestcli를 이용해서 컨트롤러를 생성할 수 있다.

<br>

1. nest : nestcli를 사용 
2. g : generate(생성)
3. controller : 컨트롤러를 만든다. 
4. 컨트롤러 이름 
5. --no-spec : 테스트를 위한 소스코드 생성 X 적지않으면 기본적으로 생성된다.

<br> 

### EX) - boards 컨트롤러 생성-

<br>

nest g controller boards --no-spec
CREATE src/boards/boards.controller.ts(101bytes)
UPDATE src/boards/boards.module.ts (174 bytes)

    boards.module.ts 파일에 boards.controller가 자동으로 등록된걸 볼 수 있다.

_이런 결과가 나오면 성공이다._

<br>

# 컨트롤러가 만들어지는 순서

## CLI로 명령어를 입력하여 Controller를 만들게 되면

<br>

1. cli는 먼저 boards(모듈이름) 폴더를 찾는다.
2. boards폴더안에 controller파일을 생성한다.
3. boards폴더안에 module파일을 찾는다.
4. module 파일 안에다가 controller를 import해준다.