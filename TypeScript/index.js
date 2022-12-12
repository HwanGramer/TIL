// let names : { name? : string } = {name : 'kim'};
// let arr1 : (string | number)[] =[34,'we','we'];
// type Ty = { arr1 : (string | number)[] , st2 : string , st3? : number};
// let ob1 : Ty = {arr1 : ['sd',2,43] , st2 : 'hello'};
// function fun(x : number | string) : number | string{
//     if(typeof x == 'string'){
//         return x
//     }else{
//         return x*2; 
//     }
// }
// fun(23);
// //? 튜플타입
// type Memeber = [number , boolean]; //? 첫번째는 무조건 number , 두번째는 무조건 boolean
// let john:Memeber = [123,true];
// type Memeber2 = {
//     name : string
// }
// let johns : Memeber2 = {name : 'kim'};
// type types = { //! 모든 오브젝트 속성
//     [key : string] : string
// }
// class User{
//     name : string;
//     constructor(name : string){
//         this.name = name
//     }
// }
// console.log(names);
let 이름 = 'kim';
let age = 50;
let boo = true;
let un = undefined;
let nu = null;
let peoples = ['jim', 'kim'];
let peoples2 = { member1: 'kim', member2: 'park' };
//*  온갖 곳에 다 타입지정을 해놓지 않아도 된다
//? Union Type 타입2개 이상 합친 새로운 타입
let num = 123;
let members = [1, 2, 3, 'sda'];
let membersObj = { a: "123", b: 12 };
//? any Type
//? 변수에 타입을 할당안하면 기본적으로 any타입이다.
//? 타입 쉴드를 없애버린다. 그러므로 위험하다.
let name2; //? 모든 자료형을 허용해준다. 타입실드 해제 문법이다. 일반자바스크립트 변수이기때문에 타입스크립트를 사용하는 의미가 없기때문에 잘 사용하지 않는다.
//? unknownType - anyType보다 안전하다.
let name3; //? unknown타입 모든 자료형을 허용해줌 . any와 유사한 타입 
// * 타입스크립트는 굉장히 엄격하기때문에 간단한 수학연산도 타입이 맞아야한다. 
let 나이;
//!  나이 + 1; err
//? 왜 타입이 맞는데 +1 이 안되냐
//? string 타입 + 1 (허용) stinrg + '1'
//? number 타입 + 1 (허용) number + 1
//? string | number +1 (안됨) union Type은 불가
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
//? 함수의 타입 지정 
//? 리턴값이 있는 함수
function fun(x) {
    return x * 2;
}
fun(30);
//? 리턴값이 없는 함수 리턴값이 없으면 void를 붙혀주자
function funVoid(x) {
    //! return 1+1 err
}
//* x? : number 는 x : number | undefined와 같다.
funVoid(); //? 파라미터를 무조건 써야됨 하지만 파라미터가 옵션일 경우에 파라미터에 ?를 붙혀주면 된다.
function fun1(name) {
    if (typeof name === "string") {
        return '안녕하세요' + name;
    }
    if (typeof name === 'undefined') {
        return '이름이 없습니다';
    }
}
console.log(fun1());
function fun2(x) {
    if (typeof x === 'number') {
        x = x.toString();
        return x.length;
    }
    return x.length;
}
console.log(fun2('12321'));
function merryme(salary, house, appeal) {
    let score = (house ? 500 : 0);
    score = score + (appeal === '상' ? 100 : 0);
    if (score + salary >= 600)
        return "결혼가능";
}
console.log(merryme(700, false, '중'));
console.log(merryme(100, false, '상'));
//? 애매한 타입 
//? 타입확정하기 Narrowing & Assertion
function 내함수(x) {
    let array = []; //? array는 숫자만 들어가는 배열
    //? 가능 
    if (typeof x === 'number') {
        array[0] = x;
    }
    //? Assertion
    array[0] = x; //? assertion문법 (타입 덮어쓰기) number로 인식하게됨.
    //? 하지만 이게 편하다고 마음대로 쓴다면 사수에게 빠따를 맞는다고한다.
    //* 이것의 용도를 잘알아야한다.
    //* *** Assertion문법의 용도 ****
    //* 1. 위처럼 타입이(unionType) Narrowing할때 사용한다.
    //* 2. 무슨타입이 들어올지 100% 확실할때 쓴다. 근데 그럼 애초에 쓸필요가없음...
    //* 3. 굳이 사용해야한다면 남이 짠 코드를 수정할때 , 왜 타입에러가 나는지 모르겠을때 사용하는게 좋을거같다. 왜냐 버그추적이 어려움.
    //* 4. 비상용 , 디버깅용으로 사용하자
    // as 쓰면 간편해쥬금 하지만 정확히 코드짜려면 narrowing을 씁시다.  
    // as 키워드는 맘대로 타입을 개발자 맘대로 주장하는 역할이라 때문에 엄격한 타입체크기능을 잠깐 안쓰겠다는 뜻과 동일합니다.
    // 그래서 as 문법은 이럴 때 쓰도록 합시다.
    // 1. 왜 타입에러가 나는지 정말 모르겠는 상황에 임시로 에러해결용으로 사용하거나
    // 2. 내가 어떤 타입이 들어올지 정말 확실하게 알고 있는데 컴파일러 에러가 방해할 때
    // 알겠죠? 뉴비처럼 온갖군데 as 키워드 붙이면 안됩니다. 
    // 물론 대부분의 상황에선 as 보다 훨씬 엄격하고 좋은 type narrowing으로 해결할 수 있습니다
}
//? 문제 1 
function cleaning(arr) {
    return arr.map((el, i) => {
        if (typeof el === 'string')
            return Number(el);
        else
            return el;
    });
}
console.log(cleaning(['1', '2', '3', 4]));
//? 문제 2
function makefun(obj) {
    if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else if (typeof obj.subject === 'string') {
        return obj.subject;
    }
    else {
        return 'null';
    }
}
console.log(makefun({ subject: 'math' }));
console.log(makefun({ subject: ['science', 'art', 'korean'] }));
console.log(makefun({ subject: 'sda' }));
let animals = 'cat'; //? union Type  
let animals2 = { name: 'dog', age: 15 };
//* *** 객체 타입 readonly 객체안의 데이터를 상수로 만들기 ***
//* const로 선언된 객체는 안에있는 프로퍼티를 바꿀 수 있다. 하지만 타입스크립트에서 readonly라는 키워드가 존재한다. 이것을 사용하면 데이터를 바꾸지 못한다.
//* 하지만 이건 타입스크립트에서만 적용되는것! 
const girl = { name: 'ember', age: 25 };
// ! girl.name = '못바꿔요'  바꾸지 못함
girl.age = 30;
console.log(girl);
const XXX = { x: 10 };
//* Literal Types 타입대신 리터럴를 넣어주면 고정된다. 생각 보다 유용하다..!! 
let me;
//? 파라미터 x에는 '가위','바위','보'만 들어올 수 있다.
function game(x) {
    return ['가위', '바위'];
}
//* Literal Type의 문제점
//? 같은 리터럴이지만 확정되지 않은 타입이라면 안된다.
var 자료 = {
    name: 'kim'
};
//* 객체에 as const 효과  
//? as const라는 키워드를 써서 이 object는 value값을 그대로 리터럴타입으로 지정해줌. 
//? as const 속성을 사용하면 object속성들 모두 readonly가 된다.
//!  자료.name = '12' as const 때문에 안됨.
function my함수(a) {
}
//? my함수(자료.name); //(property) name: string
// ! 'string' 형식의 인수는 '"kim"' 형식의 매개 변수에 할당될 수 없습니다.ts(2345)
