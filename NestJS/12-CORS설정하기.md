# CORS

Nest 환경에서 http통신을 위한 CORS Setting

<br>

Nest main.ts 파일에서 

<br>


    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';

    async function bootstrap() {
        const app = await NestFactory.create(AppModule);

        app.enableCors(); // CORS 셋팅

        await app.listen(8080);
    }
    bootstrap();


app.enableCors() 함수를 중간에 실행해준다.

<br>
<br>

# CORS Options

enableCors() 함수에 파라미터로 옵션객체를 넘겨준다.

<br>


    enableCors({
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,   // 사전요청?
        "optionsSuccessStatus": 204 
    })