# Providers

- 프로바이더는 Nest의 기본 개념이다. 

- 대부분의 기본 Nest클래스는 서비스 , 리포지토리 , 팩토리 , 헬퍼등 프로바이더로 취급될 수 있다.

- 프로바이더의 주요 아이디어는 종속성으로 <b>주입</b>할 수 있다는 것이다.

- 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 연결하는 기능은 대부분 Nest런타임 시스템에 위임 될 수 있습니다.

<br>


<br>

# Service

##### Express Controller
<br>

- 서비스는 소프트웨어 개발내의 공통 개념이며 , NestJS , Javascript에서만 쓰이는 개념이 아니다.

- @Injectable 데코레이터로 감싸져서 모듈에 제공되며 , 이 서비스 인스턴스는 애플리케이션 전체에서 사용 될 수 있다.

- 서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터 베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리한다.


<br>


<br>

# Service만들기 


- 서비스도 controller와 똑같은 방식으로 만들어 줄 수 있다.

        nest g service 서비스파일이름 --no-spec

- 끝에 --no-spec은 테스트를 위한 소스코드는 만들지 않겠다는 말이다.

- 생성에 성공했다면 module.ts는 업데이트되고 service.ts는 생성되었다는게 터미널에 나온다.(module.ts에 Service가 자동으로 추가됨)

- 생성된 파일 안에는 Injectable데코레이터가 있으며 NestJS는 이것을 이용해서 다른 컴포넌트에서 이 서비스를 사용 할 수 있게 만들어준다.

<br>

<br>

# Service를 Controller에서 이용하기 생성자 파라미터 프로퍼티

NestJS에서 Dependency Injection(의존성 주입)은 클래스의 Construtor안에서 이루어진다.

    export class BoardsController {
        // 접근 제한자를 생성자 파라미터에 선언하면 접근제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언된다.
        constructor(private boardsService : BoardsService){}
    }

- 우리는 boardsService를 사용할것이다. boardsSevice를 선언하여 프로퍼티를 만들어 놓지않아도 *<b>생성자의 private boardsService가 자동으로 프로퍼티로 사용할 수 있게된다.</b>*

- 이렇게 접근 제한자를 이용해서 소스를 간단하게 만들 수 있다.

- private로 선언되었기 때문에 클래스 내부에서만 사용가능하다.


        