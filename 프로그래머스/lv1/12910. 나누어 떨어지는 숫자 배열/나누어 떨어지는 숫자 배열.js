function solution(arr, divisor) {
    var result = [...arr].filter((item)=>item%divisor==0).sort((a,b)=>a-b)
    if(result==false) result.push(-1)
    return result;
}