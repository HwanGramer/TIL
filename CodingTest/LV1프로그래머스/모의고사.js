function solution(answers) {
    const one = [1,2,3,4,5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3,3,1,1,2,2,4,4,5,5];

    let oneStack = 0;
    let twoStack =0;
    let threeStack =0;
    for(let i=0; i<answers.length; i++){
        if(answers[i] == one[i%5]){
            oneStack++;
        }
        if(answers[i] == two[i%8]){
            twoStack++;   
        }
        if(answers[i] == three[i%10]){
            threeStack++;
        }
    }
    const result = [{name : 'one' , 'score':oneStack} ,{name : 'two' , 'score':twoStack} ,{name : 'three' , 'score':threeStack}];
    const maxScore = Math.max(oneStack , twoStack , threeStack);

    const arr = result.map((el)=>{
        console.log(el);
        if(el.score !== maxScore )return
        if(el.name == 'one') return 1
        if(el.name == 'two') return 2
        if(el.name == 'three') return 3
    });

    return arr.filter((el)=>el!=undefined);
}

console.log(solution( [1,2,3,4,5] ));