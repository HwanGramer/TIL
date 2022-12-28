# NestJS Controller

* 컨트롤러는 클라이언트에서 보내는 요청을 처리하고 클라이언트에 응답을 반환한다. 

<br>

* 컨트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의 된다. 

<br>

* 데코레이터는 인자를 Controller에 의해서 처리되는 경로를 받는다.

        @Controller('/home')


# Handler 

* 핸들러는 @GET , @Post , @Delete , @Put등과 같은 데코레이터로 장식된 컨트롤러 클래스 내의 단순한 메서드이다. 

* http요청의 메서드이다. 클라이언트에서 GET ,POST 요청을 보내면 해당 @GET , @POST로 요청이 온다. 

        @Get('/:id')

    경로를 넣어줄 수 있다

# Controller 생성하기

여기서부터 적으셈