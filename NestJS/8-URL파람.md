# URL 파라미터
URL 파라미터로 온 데이터를 받아보겠다.

EX) 특정 아이디를 받아서 해당아이디의 board를 찾은 응답해주자.

<br>

### Controller 
    getBoardById(@Param('id') id : string) : Board {
        return this.boardService.getBoardById(id); 
        // id값을 Service로 넘겨준다.
    }

<br>

### Service
    getBoardById(id : string) : Board{
        return this.boards.find((board)=>board.id === id)
    } // 해당하는 id의 board를 찾아서 리턴한다.


<br>
<br>


# 여러개의 파라미터를 받는법

EX) all params : 

    findOne(@Param() params : string[])

params배열안에 모든 파라미터가 들어온다.

<br>

EX) single param : 

    findOne(@Param('id') id : string)