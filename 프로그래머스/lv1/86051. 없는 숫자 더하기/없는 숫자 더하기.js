function solution(numbers) {
    var arr = [0,1,2,3,4,5,6,7,8,9];
    var num = arr.filter((x) => !numbers.includes(x)); // 차집합
    return num.reduce((a,b)=>a+b)
    
}