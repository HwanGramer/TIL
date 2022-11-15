function solution(nums) {
    const newNums = [...new Set(nums)].length; //? 중복 없앰
    return nums.length/2 <= newNums ? nums.length/2 : newNums;
}
//? 종류가 아무리 많아봤자 nums.length /2 임
console.log(solution([3,3,3,2,2,4]));