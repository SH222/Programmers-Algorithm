function solution(arr) {
    let minNum = Math.min(...arr);
    for(let i=0; i<arr.length; i++){
        if(arr[i] === minNum) arr.splice(i,1);
    }
    return arr.length > 1 ? arr : [-1];
}