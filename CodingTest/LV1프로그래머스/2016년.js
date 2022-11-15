function solution(a, b) {
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = new Date(2016 , a-1 , b);
    // date.setFullYear(2016);
    // date.setMonth(a-1);
    // date.setDate(b);
    return week[date.getDay()];
}


function solution2(a, b) { //? 1월 1일 금요일 
    const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    const monthDay = [31,29,31,30,31,30,31,31,30,31,30,31];
    let day = b
    for(let i=0; i<a-1; i++){
        day+= monthDay[i];
    }
    return week[(day)%7];
}

//? 문제는 2016년의 5월24일의 요일을 구하는것이기 때문에 new Date(2016,a-1,b)->년,월,일을 파라미터로 넣어서
//? 해당날짜로 date를 만들어서 getDay()로 요일을 구했다. 
//? 알고리즘문제라 이렇게 풀어도되나싶긴한데.. Date안쓰고도 풀어봐야겠다. 뭔가 Date가 제일먼저 생각났다. 

console.log(solution(1,1))
console.log(solution2(1,1))