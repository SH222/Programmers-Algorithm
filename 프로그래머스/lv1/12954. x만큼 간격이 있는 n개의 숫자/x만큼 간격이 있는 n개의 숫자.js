function solution(x, n) {
    var answer = [];
    var result = 0;
    for(let i=0; i<n; i++) answer.push(result += x);
    return answer;
}