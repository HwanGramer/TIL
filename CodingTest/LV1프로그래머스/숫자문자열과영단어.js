function solution(s) {
    const nums = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    for(let i=0; i<nums.length; i++){
      if(s.indexOf(nums[i]) != -1) {
          s = s.replaceAll(nums[i] , i)
      }
    }
    return Number(s);
}

//? 1부터 10까지의 영어이름을 nums배열에 저장한다. 
//? 파라미터로 들어온 s문자열을 indexOf()를 사용하여 nums배열안에있는 값이 있는지 찾는다. 있다면 0부터 s.length까지의 길이가 나온다.
//? s.indexOf(nums[i]) != -1는 문자열이 있다는 뜻으로 그 해당문자열을 replaceAll함수를 이용하여 i과 바꿔준다.
//? 그럼 해당자리의 숫자이름은 모두 숫자로변한다. 

console.log(solution("123zero")) ;