function solution(strings, n) {
    
    strings.sort(function(a,b){
        if(a[n] < b[n]) return -1;
        if(a[n] > b[n]) return 1;
        if(a[n] == b[n]){
            return (a > b) - (a < b);
        } 
    })
    return strings;
}
//? sort함수를 사용하여 문자열의 [n]번째를 기준으로 비교해서 정렬한다.
//? 값이같다면 사전순이라 했기때문에 (a>b) - (a<b)통째로 비교한다.

console.log(solution(["abce", "abcd", "cdx"], 2));