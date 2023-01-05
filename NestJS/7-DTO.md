# DTO란?
Data Transfer Object

- 계층간 데이터 교환을 위한 객체이다.
- DB에서 데이터를 얻어 Service나 Controller등으로 보낼 때 사용하는 객체를 말한다. 
- DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체이다. 
- interface나 class를 이용해서 정의 될 수 있다.(NestJs에서는 class를 이용하는것을 추천함.)

<br>
<br>

# DTO를 사용하는 이유

- 데이터 유효성을 체크하는데 효율적이다.
- 더 안정적인 코드로 만들어 준다. 타입스크립트의 타입으로도 사용된다.
- 클라이언트에서 들어오는 데이터의 형태를 지정한다.

<br>
<br>

# Nest에서 DTO를 class로 선호하는 이유

    TypeScript 인터페이스를 사용하거나 간단한 클래스를 사용하여 DTO 스키마를 결 정할 수 있습니다. 흥미롭게도 여기에서 Class를 사용하는 것이 좋습니다. 왜? 클래 스는 JavaScript ES6 표준의 일부이므로 컴파일 된 JavaScript에서 실제 엔티티로 유지됩니다. 반면에 TypeScript 인터페이스는 트랜스 파일 중에 제거되므로 Nest는 런타임에서 참조 할 수 없습니다.
    이것은 파이프와 같은 기능을 런타임에서 사용할 수 있기 때문에 런타임에서 사용 될 수 있는게 중요합니다. 그래서 DTO는 CLASS를 이용해서 만들겠습니다.



<br>
<br>

# EX) 1 - DTO만들기

ex) boards모듈 

1. 해달 모듈폴더에 dto폴더 추가.
2. dto 폴더안에 create-board-dto.ts 생성
3. 클라이언트에서 'title' , 'description' 이 두가지의 값이 온다고 가정


        create-board.dto.ts 파일

        export class CreateBoardDto{
            title : string;
            description : string;
        }
        // title , description 맴버변수 선언 

<br>
<br>

# EX) 2 - DTO 적용하기 

### 클라이언트에서 post요청 body에 'title' , 'description'을 보냈다고 가정한다. 

<br>


    DTO를 사용하기 전 코드
    
        @Post('/')
        createBoard(@Body('title') title : string, @Body('description') description : string ) : Board{
            rerturn this.boardService.createBoard(title , description) //service로 보냄
        }
    
    DTO 사용
    
        @Post('/')
        createBoard(@Body() createBoardDto : CreateBoardDto) : Board {
            return this.boardsService.createBoard(createBoardDto);
        }

<br>

- 위에서 만들었던 createBoardDto에 맴버변수 title과 description에 @Body에서 들어오는 title , description이 그대로 삽입된다.
- 그럼 클라이언트에서 들어온 데이터가 객체화가 되었다. DTO객체를 service로 넘겨준다. 

- serivce에서는 객체를 참조하여 데이터를 조작한다.

<br>


    createBoardDto.title
    createBoardDto.description
이렇게 Controller와 Service에 DTO를 적용했다.