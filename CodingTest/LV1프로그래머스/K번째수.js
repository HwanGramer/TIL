function solution(array, commands) {
    const answer = [];
    for(let i=0; i < commands.length; i++){
        const arr = []
        for(let j=commands[i][0]-1; j<commands[i][1]; j++){
            arr.push(array[j]);
        }
        arr.sort((a,b)=> a-b);
        answer.push(arr[commands[i][2]-1]);
    }
    return answer;
}

//? commands를 기준으로 반복문을 돌리고, commands의 요소에서 [0]번째부터 [1]번째까지 반복문을 돌리면서 그 숫자를 arr에 넣는다.
//? arr에서 commands[2]번째 index를 answer에 담으면 끝!

solution([1, 5, 2, 6, 3, 7, 4] , [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);