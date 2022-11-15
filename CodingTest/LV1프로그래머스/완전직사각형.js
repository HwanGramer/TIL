function solution(sizes) {
    return Math.max(...sizes.map((element)=> element[0] < element[1] ? element[1] : element[0])) * Math.max(...sizes.map((element)=> element[0] > element[1] ? element[1] : element[0])); 
}

//? 배열의 원소에서 가장큰숫자들끼리의 큰숫자가 width가 되고
//? 배열의 원소에서 가장작은숫자들끼리의 큰숫자가 height가된다. 

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));