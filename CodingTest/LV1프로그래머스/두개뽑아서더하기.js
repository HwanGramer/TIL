function solution(numbers) {
    const answer = [];
    
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i===j) continue;
            if(answer.indexOf(numbers[i] + numbers[j] == -1)){
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    const set = new Set(answer);
    return [...set].sort((a,b)=>a-b);
}

console.log(solution([2,1,3,4,1]));