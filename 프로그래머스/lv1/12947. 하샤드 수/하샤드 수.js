function solution(x) {
    let numArr = Array.from(String(x));
    let sum = 0;
    for(let i=0; i<numArr.length; i++) sum += Number(numArr[i]);  
    return Number.isInteger(x / sum) ? true : false;
}